var bh=Object.defineProperty;var Sh=(e,t,n)=>t in e?bh(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var et=(e,t,n)=>(Sh(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Io(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var qu={exports:{}},Co={},Qu={exports:{}},j={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qr=Symbol.for("react.element"),kh=Symbol.for("react.portal"),_h=Symbol.for("react.fragment"),Eh=Symbol.for("react.strict_mode"),Th=Symbol.for("react.profiler"),Ih=Symbol.for("react.provider"),Ch=Symbol.for("react.context"),Ph=Symbol.for("react.forward_ref"),Ah=Symbol.for("react.suspense"),Nh=Symbol.for("react.memo"),Rh=Symbol.for("react.lazy"),Jl=Symbol.iterator;function Oh(e){return e===null||typeof e!="object"?null:(e=Jl&&e[Jl]||e["@@iterator"],typeof e=="function"?e:null)}var Xu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zu=Object.assign,Ju={};function Yn(e,t,n){this.props=e,this.context=t,this.refs=Ju,this.updater=n||Xu}Yn.prototype.isReactComponent={};Yn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Yn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ed(){}ed.prototype=Yn.prototype;function Ba(e,t,n){this.props=e,this.context=t,this.refs=Ju,this.updater=n||Xu}var Ha=Ba.prototype=new ed;Ha.constructor=Ba;Zu(Ha,Yn.prototype);Ha.isPureReactComponent=!0;var ec=Array.isArray,td=Object.prototype.hasOwnProperty,Wa={current:null},nd={key:!0,ref:!0,__self:!0,__source:!0};function rd(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)td.call(t,r)&&!nd.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:qr,type:e,key:o,ref:s,props:i,_owner:Wa.current}}function Lh(e,t){return{$$typeof:qr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function $a(e){return typeof e=="object"&&e!==null&&e.$$typeof===qr}function jh(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var tc=/\/+/g;function Zo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?jh(""+e.key):t.toString(36)}function Pi(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case qr:case kh:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Zo(s,0):r,ec(i)?(n="",e!=null&&(n=e.replace(tc,"$&/")+"/"),Pi(i,t,n,"",function(u){return u})):i!=null&&($a(i)&&(i=Lh(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(tc,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",ec(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+Zo(o,a);s+=Pi(o,t,n,l,i)}else if(l=Oh(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+Zo(o,a++),s+=Pi(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function ui(e,t,n){if(e==null)return e;var r=[],i=0;return Pi(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Mh(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var he={current:null},Ai={transition:null},Dh={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:Ai,ReactCurrentOwner:Wa};function id(){throw Error("act(...) is not supported in production builds of React.")}j.Children={map:ui,forEach:function(e,t,n){ui(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ui(e,function(){t++}),t},toArray:function(e){return ui(e,function(t){return t})||[]},only:function(e){if(!$a(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};j.Component=Yn;j.Fragment=_h;j.Profiler=Th;j.PureComponent=Ba;j.StrictMode=Eh;j.Suspense=Ah;j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dh;j.act=id;j.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Zu({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Wa.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)td.call(t,l)&&!nd.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:qr,type:e.type,key:i,ref:o,props:r,_owner:s}};j.createContext=function(e){return e={$$typeof:Ch,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ih,_context:e},e.Consumer=e};j.createElement=rd;j.createFactory=function(e){var t=rd.bind(null,e);return t.type=e,t};j.createRef=function(){return{current:null}};j.forwardRef=function(e){return{$$typeof:Ph,render:e}};j.isValidElement=$a;j.lazy=function(e){return{$$typeof:Rh,_payload:{_status:-1,_result:e},_init:Mh}};j.memo=function(e,t){return{$$typeof:Nh,type:e,compare:t===void 0?null:t}};j.startTransition=function(e){var t=Ai.transition;Ai.transition={};try{e()}finally{Ai.transition=t}};j.unstable_act=id;j.useCallback=function(e,t){return he.current.useCallback(e,t)};j.useContext=function(e){return he.current.useContext(e)};j.useDebugValue=function(){};j.useDeferredValue=function(e){return he.current.useDeferredValue(e)};j.useEffect=function(e,t){return he.current.useEffect(e,t)};j.useId=function(){return he.current.useId()};j.useImperativeHandle=function(e,t,n){return he.current.useImperativeHandle(e,t,n)};j.useInsertionEffect=function(e,t){return he.current.useInsertionEffect(e,t)};j.useLayoutEffect=function(e,t){return he.current.useLayoutEffect(e,t)};j.useMemo=function(e,t){return he.current.useMemo(e,t)};j.useReducer=function(e,t,n){return he.current.useReducer(e,t,n)};j.useRef=function(e){return he.current.useRef(e)};j.useState=function(e){return he.current.useState(e)};j.useSyncExternalStore=function(e,t,n){return he.current.useSyncExternalStore(e,t,n)};j.useTransition=function(){return he.current.useTransition()};j.version="18.3.1";Qu.exports=j;var A=Qu.exports;const Ye=Io(A);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zh=A,Fh=Symbol.for("react.element"),Uh=Symbol.for("react.fragment"),Bh=Object.prototype.hasOwnProperty,Hh=zh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Wh={key:!0,ref:!0,__self:!0,__source:!0};function od(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Bh.call(t,r)&&!Wh.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Fh,type:e,key:o,ref:s,props:i,_owner:Hh.current}}Co.Fragment=Uh;Co.jsx=od;Co.jsxs=od;qu.exports=Co;var c=qu.exports,js={},sd={exports:{}},Ee={},ad={exports:{}},ld={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(I,R){var L=I.length;I.push(R);e:for(;0<L;){var q=L-1>>>1,ee=I[q];if(0<i(ee,R))I[q]=R,I[L]=ee,L=q;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var R=I[0],L=I.pop();if(L!==R){I[0]=L;e:for(var q=0,ee=I.length,li=ee>>>1;q<li;){var $t=2*(q+1)-1,Xo=I[$t],Vt=$t+1,ci=I[Vt];if(0>i(Xo,L))Vt<ee&&0>i(ci,Xo)?(I[q]=ci,I[Vt]=L,q=Vt):(I[q]=Xo,I[$t]=L,q=$t);else if(Vt<ee&&0>i(ci,L))I[q]=ci,I[Vt]=L,q=Vt;else break e}}return R}function i(I,R){var L=I.sortIndex-R.sortIndex;return L!==0?L:I.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],d=1,h=null,g=3,y=!1,v=!1,w=!1,C=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(I){for(var R=n(u);R!==null;){if(R.callback===null)r(u);else if(R.startTime<=I)r(u),R.sortIndex=R.expirationTime,t(l,R);else break;R=n(u)}}function x(I){if(w=!1,m(I),!v)if(n(l)!==null)v=!0,qo(S);else{var R=n(u);R!==null&&Qo(x,R.startTime-I)}}function S(I,R){v=!1,w&&(w=!1,p(k),k=-1),y=!0;var L=g;try{for(m(R),h=n(l);h!==null&&(!(h.expirationTime>R)||I&&!N());){var q=h.callback;if(typeof q=="function"){h.callback=null,g=h.priorityLevel;var ee=q(h.expirationTime<=R);R=e.unstable_now(),typeof ee=="function"?h.callback=ee:h===n(l)&&r(l),m(R)}else r(l);h=n(l)}if(h!==null)var li=!0;else{var $t=n(u);$t!==null&&Qo(x,$t.startTime-R),li=!1}return li}finally{h=null,g=L,y=!1}}var _=!1,T=null,k=-1,M=5,O=-1;function N(){return!(e.unstable_now()-O<M)}function Zn(){if(T!==null){var I=e.unstable_now();O=I;var R=!0;try{R=T(!0,I)}finally{R?Jn():(_=!1,T=null)}}else _=!1}var Jn;if(typeof f=="function")Jn=function(){f(Zn)};else if(typeof MessageChannel<"u"){var Zl=new MessageChannel,wh=Zl.port2;Zl.port1.onmessage=Zn,Jn=function(){wh.postMessage(null)}}else Jn=function(){C(Zn,0)};function qo(I){T=I,_||(_=!0,Jn())}function Qo(I,R){k=C(function(){I(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){v||y||(v=!0,qo(S))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(I){switch(g){case 1:case 2:case 3:var R=3;break;default:R=g}var L=g;g=R;try{return I()}finally{g=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,R){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var L=g;g=I;try{return R()}finally{g=L}},e.unstable_scheduleCallback=function(I,R,L){var q=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?q+L:q):L=q,I){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=L+ee,I={id:d++,callback:R,priorityLevel:I,startTime:L,expirationTime:ee,sortIndex:-1},L>q?(I.sortIndex=L,t(u,I),n(l)===null&&I===n(u)&&(w?(p(k),k=-1):w=!0,Qo(x,L-q))):(I.sortIndex=ee,t(l,I),v||y||(v=!0,qo(S))),I},e.unstable_shouldYield=N,e.unstable_wrapCallback=function(I){var R=g;return function(){var L=g;g=R;try{return I.apply(this,arguments)}finally{g=L}}}})(ld);ad.exports=ld;var $h=ad.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vh=A,_e=$h;function b(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var cd=new Set,Cr={};function dn(e,t){Fn(e,t),Fn(e+"Capture",t)}function Fn(e,t){for(Cr[e]=t,e=0;e<t.length;e++)cd.add(t[e])}var ut=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ms=Object.prototype.hasOwnProperty,Gh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,nc={},rc={};function Kh(e){return Ms.call(rc,e)?!0:Ms.call(nc,e)?!1:Gh.test(e)?rc[e]=!0:(nc[e]=!0,!1)}function Yh(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function qh(e,t,n,r){if(t===null||typeof t>"u"||Yh(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ge(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){se[e]=new ge(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];se[t]=new ge(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){se[e]=new ge(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){se[e]=new ge(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){se[e]=new ge(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){se[e]=new ge(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){se[e]=new ge(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){se[e]=new ge(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){se[e]=new ge(e,5,!1,e.toLowerCase(),null,!1,!1)});var Va=/[\-:]([a-z])/g;function Ga(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Va,Ga);se[t]=new ge(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Va,Ga);se[t]=new ge(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Va,Ga);se[t]=new ge(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){se[e]=new ge(e,1,!1,e.toLowerCase(),null,!1,!1)});se.xlinkHref=new ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){se[e]=new ge(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ka(e,t,n,r){var i=se.hasOwnProperty(t)?se[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(qh(t,n,i,r)&&(n=null),r||i===null?Kh(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var gt=Vh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,di=Symbol.for("react.element"),gn=Symbol.for("react.portal"),mn=Symbol.for("react.fragment"),Ya=Symbol.for("react.strict_mode"),Ds=Symbol.for("react.profiler"),ud=Symbol.for("react.provider"),dd=Symbol.for("react.context"),qa=Symbol.for("react.forward_ref"),zs=Symbol.for("react.suspense"),Fs=Symbol.for("react.suspense_list"),Qa=Symbol.for("react.memo"),xt=Symbol.for("react.lazy"),fd=Symbol.for("react.offscreen"),ic=Symbol.iterator;function er(e){return e===null||typeof e!="object"?null:(e=ic&&e[ic]||e["@@iterator"],typeof e=="function"?e:null)}var K=Object.assign,Jo;function dr(e){if(Jo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Jo=t&&t[1]||""}return`
`+Jo+e}var es=!1;function ts(e,t){if(!e||es)return"";es=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{es=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?dr(e):""}function Qh(e){switch(e.tag){case 5:return dr(e.type);case 16:return dr("Lazy");case 13:return dr("Suspense");case 19:return dr("SuspenseList");case 0:case 2:case 15:return e=ts(e.type,!1),e;case 11:return e=ts(e.type.render,!1),e;case 1:return e=ts(e.type,!0),e;default:return""}}function Us(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case mn:return"Fragment";case gn:return"Portal";case Ds:return"Profiler";case Ya:return"StrictMode";case zs:return"Suspense";case Fs:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case dd:return(e.displayName||"Context")+".Consumer";case ud:return(e._context.displayName||"Context")+".Provider";case qa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Qa:return t=e.displayName||null,t!==null?t:Us(e.type)||"Memo";case xt:t=e._payload,e=e._init;try{return Us(e(t))}catch{}}return null}function Xh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Us(t);case 8:return t===Ya?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function zt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Zh(e){var t=pd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function fi(e){e._valueTracker||(e._valueTracker=Zh(e))}function hd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=pd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ki(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Bs(e,t){var n=t.checked;return K({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function oc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=zt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function gd(e,t){t=t.checked,t!=null&&Ka(e,"checked",t,!1)}function Hs(e,t){gd(e,t);var n=zt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ws(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ws(e,t.type,zt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function sc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ws(e,t,n){(t!=="number"||Ki(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var fr=Array.isArray;function In(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+zt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function $s(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(b(91));return K({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ac(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(b(92));if(fr(n)){if(1<n.length)throw Error(b(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:zt(n)}}function md(e,t){var n=zt(t.value),r=zt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function lc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function yd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Vs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?yd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var pi,vd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(pi=pi||document.createElement("div"),pi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=pi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Pr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var yr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Jh=["Webkit","ms","Moz","O"];Object.keys(yr).forEach(function(e){Jh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),yr[t]=yr[e]})});function xd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||yr.hasOwnProperty(e)&&yr[e]?(""+t).trim():t+"px"}function wd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=xd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var eg=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Gs(e,t){if(t){if(eg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(b(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(b(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(b(61))}if(t.style!=null&&typeof t.style!="object")throw Error(b(62))}}function Ks(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ys=null;function Xa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qs=null,Cn=null,Pn=null;function cc(e){if(e=Zr(e)){if(typeof qs!="function")throw Error(b(280));var t=e.stateNode;t&&(t=Oo(t),qs(e.stateNode,e.type,t))}}function bd(e){Cn?Pn?Pn.push(e):Pn=[e]:Cn=e}function Sd(){if(Cn){var e=Cn,t=Pn;if(Pn=Cn=null,cc(e),t)for(e=0;e<t.length;e++)cc(t[e])}}function kd(e,t){return e(t)}function _d(){}var ns=!1;function Ed(e,t,n){if(ns)return e(t,n);ns=!0;try{return kd(e,t,n)}finally{ns=!1,(Cn!==null||Pn!==null)&&(_d(),Sd())}}function Ar(e,t){var n=e.stateNode;if(n===null)return null;var r=Oo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(b(231,t,typeof n));return n}var Qs=!1;if(ut)try{var tr={};Object.defineProperty(tr,"passive",{get:function(){Qs=!0}}),window.addEventListener("test",tr,tr),window.removeEventListener("test",tr,tr)}catch{Qs=!1}function tg(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var vr=!1,Yi=null,qi=!1,Xs=null,ng={onError:function(e){vr=!0,Yi=e}};function rg(e,t,n,r,i,o,s,a,l){vr=!1,Yi=null,tg.apply(ng,arguments)}function ig(e,t,n,r,i,o,s,a,l){if(rg.apply(this,arguments),vr){if(vr){var u=Yi;vr=!1,Yi=null}else throw Error(b(198));qi||(qi=!0,Xs=u)}}function fn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Td(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function uc(e){if(fn(e)!==e)throw Error(b(188))}function og(e){var t=e.alternate;if(!t){if(t=fn(e),t===null)throw Error(b(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return uc(i),e;if(o===r)return uc(i),t;o=o.sibling}throw Error(b(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(b(189))}}if(n.alternate!==r)throw Error(b(190))}if(n.tag!==3)throw Error(b(188));return n.stateNode.current===n?e:t}function Id(e){return e=og(e),e!==null?Cd(e):null}function Cd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Cd(e);if(t!==null)return t;e=e.sibling}return null}var Pd=_e.unstable_scheduleCallback,dc=_e.unstable_cancelCallback,sg=_e.unstable_shouldYield,ag=_e.unstable_requestPaint,Q=_e.unstable_now,lg=_e.unstable_getCurrentPriorityLevel,Za=_e.unstable_ImmediatePriority,Ad=_e.unstable_UserBlockingPriority,Qi=_e.unstable_NormalPriority,cg=_e.unstable_LowPriority,Nd=_e.unstable_IdlePriority,Po=null,qe=null;function ug(e){if(qe&&typeof qe.onCommitFiberRoot=="function")try{qe.onCommitFiberRoot(Po,e,void 0,(e.current.flags&128)===128)}catch{}}var Be=Math.clz32?Math.clz32:pg,dg=Math.log,fg=Math.LN2;function pg(e){return e>>>=0,e===0?32:31-(dg(e)/fg|0)|0}var hi=64,gi=4194304;function pr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Xi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=pr(a):(o&=s,o!==0&&(r=pr(o)))}else s=n&~i,s!==0?r=pr(s):o!==0&&(r=pr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Be(t),i=1<<n,r|=e[n],t&=~i;return r}function hg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gg(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Be(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=hg(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function Zs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Rd(){var e=hi;return hi<<=1,!(hi&4194240)&&(hi=64),e}function rs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Qr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Be(t),e[t]=n}function mg(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Be(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Ja(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Be(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var F=0;function Od(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ld,el,jd,Md,Dd,Js=!1,mi=[],Ct=null,Pt=null,At=null,Nr=new Map,Rr=new Map,bt=[],yg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fc(e,t){switch(e){case"focusin":case"focusout":Ct=null;break;case"dragenter":case"dragleave":Pt=null;break;case"mouseover":case"mouseout":At=null;break;case"pointerover":case"pointerout":Nr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rr.delete(t.pointerId)}}function nr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Zr(t),t!==null&&el(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function vg(e,t,n,r,i){switch(t){case"focusin":return Ct=nr(Ct,e,t,n,r,i),!0;case"dragenter":return Pt=nr(Pt,e,t,n,r,i),!0;case"mouseover":return At=nr(At,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Nr.set(o,nr(Nr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Rr.set(o,nr(Rr.get(o)||null,e,t,n,r,i)),!0}return!1}function zd(e){var t=qt(e.target);if(t!==null){var n=fn(t);if(n!==null){if(t=n.tag,t===13){if(t=Td(n),t!==null){e.blockedOn=t,Dd(e.priority,function(){jd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ni(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ea(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ys=r,n.target.dispatchEvent(r),Ys=null}else return t=Zr(n),t!==null&&el(t),e.blockedOn=n,!1;t.shift()}return!0}function pc(e,t,n){Ni(e)&&n.delete(t)}function xg(){Js=!1,Ct!==null&&Ni(Ct)&&(Ct=null),Pt!==null&&Ni(Pt)&&(Pt=null),At!==null&&Ni(At)&&(At=null),Nr.forEach(pc),Rr.forEach(pc)}function rr(e,t){e.blockedOn===t&&(e.blockedOn=null,Js||(Js=!0,_e.unstable_scheduleCallback(_e.unstable_NormalPriority,xg)))}function Or(e){function t(i){return rr(i,e)}if(0<mi.length){rr(mi[0],e);for(var n=1;n<mi.length;n++){var r=mi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ct!==null&&rr(Ct,e),Pt!==null&&rr(Pt,e),At!==null&&rr(At,e),Nr.forEach(t),Rr.forEach(t),n=0;n<bt.length;n++)r=bt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<bt.length&&(n=bt[0],n.blockedOn===null);)zd(n),n.blockedOn===null&&bt.shift()}var An=gt.ReactCurrentBatchConfig,Zi=!0;function wg(e,t,n,r){var i=F,o=An.transition;An.transition=null;try{F=1,tl(e,t,n,r)}finally{F=i,An.transition=o}}function bg(e,t,n,r){var i=F,o=An.transition;An.transition=null;try{F=4,tl(e,t,n,r)}finally{F=i,An.transition=o}}function tl(e,t,n,r){if(Zi){var i=ea(e,t,n,r);if(i===null)ps(e,t,r,Ji,n),fc(e,r);else if(vg(i,e,t,n,r))r.stopPropagation();else if(fc(e,r),t&4&&-1<yg.indexOf(e)){for(;i!==null;){var o=Zr(i);if(o!==null&&Ld(o),o=ea(e,t,n,r),o===null&&ps(e,t,r,Ji,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ps(e,t,r,null,n)}}var Ji=null;function ea(e,t,n,r){if(Ji=null,e=Xa(r),e=qt(e),e!==null)if(t=fn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Td(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ji=e,null}function Fd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(lg()){case Za:return 1;case Ad:return 4;case Qi:case cg:return 16;case Nd:return 536870912;default:return 16}default:return 16}}var Tt=null,nl=null,Ri=null;function Ud(){if(Ri)return Ri;var e,t=nl,n=t.length,r,i="value"in Tt?Tt.value:Tt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Ri=i.slice(e,1<r?1-r:void 0)}function Oi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function yi(){return!0}function hc(){return!1}function Te(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?yi:hc,this.isPropagationStopped=hc,this}return K(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=yi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=yi)},persist:function(){},isPersistent:yi}),t}var qn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rl=Te(qn),Xr=K({},qn,{view:0,detail:0}),Sg=Te(Xr),is,os,ir,Ao=K({},Xr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:il,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ir&&(ir&&e.type==="mousemove"?(is=e.screenX-ir.screenX,os=e.screenY-ir.screenY):os=is=0,ir=e),is)},movementY:function(e){return"movementY"in e?e.movementY:os}}),gc=Te(Ao),kg=K({},Ao,{dataTransfer:0}),_g=Te(kg),Eg=K({},Xr,{relatedTarget:0}),ss=Te(Eg),Tg=K({},qn,{animationName:0,elapsedTime:0,pseudoElement:0}),Ig=Te(Tg),Cg=K({},qn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Pg=Te(Cg),Ag=K({},qn,{data:0}),mc=Te(Ag),Ng={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Og={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Og[e])?!!t[e]:!1}function il(){return Lg}var jg=K({},Xr,{key:function(e){if(e.key){var t=Ng[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Oi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Rg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:il,charCode:function(e){return e.type==="keypress"?Oi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Oi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Mg=Te(jg),Dg=K({},Ao,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yc=Te(Dg),zg=K({},Xr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:il}),Fg=Te(zg),Ug=K({},qn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bg=Te(Ug),Hg=K({},Ao,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Wg=Te(Hg),$g=[9,13,27,32],ol=ut&&"CompositionEvent"in window,xr=null;ut&&"documentMode"in document&&(xr=document.documentMode);var Vg=ut&&"TextEvent"in window&&!xr,Bd=ut&&(!ol||xr&&8<xr&&11>=xr),vc=String.fromCharCode(32),xc=!1;function Hd(e,t){switch(e){case"keyup":return $g.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var yn=!1;function Gg(e,t){switch(e){case"compositionend":return Wd(t);case"keypress":return t.which!==32?null:(xc=!0,vc);case"textInput":return e=t.data,e===vc&&xc?null:e;default:return null}}function Kg(e,t){if(yn)return e==="compositionend"||!ol&&Hd(e,t)?(e=Ud(),Ri=nl=Tt=null,yn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Bd&&t.locale!=="ko"?null:t.data;default:return null}}var Yg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Yg[e.type]:t==="textarea"}function $d(e,t,n,r){bd(r),t=eo(t,"onChange"),0<t.length&&(n=new rl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var wr=null,Lr=null;function qg(e){tf(e,0)}function No(e){var t=wn(e);if(hd(t))return e}function Qg(e,t){if(e==="change")return t}var Vd=!1;if(ut){var as;if(ut){var ls="oninput"in document;if(!ls){var bc=document.createElement("div");bc.setAttribute("oninput","return;"),ls=typeof bc.oninput=="function"}as=ls}else as=!1;Vd=as&&(!document.documentMode||9<document.documentMode)}function Sc(){wr&&(wr.detachEvent("onpropertychange",Gd),Lr=wr=null)}function Gd(e){if(e.propertyName==="value"&&No(Lr)){var t=[];$d(t,Lr,e,Xa(e)),Ed(qg,t)}}function Xg(e,t,n){e==="focusin"?(Sc(),wr=t,Lr=n,wr.attachEvent("onpropertychange",Gd)):e==="focusout"&&Sc()}function Zg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return No(Lr)}function Jg(e,t){if(e==="click")return No(t)}function em(e,t){if(e==="input"||e==="change")return No(t)}function tm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var We=typeof Object.is=="function"?Object.is:tm;function jr(e,t){if(We(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ms.call(t,i)||!We(e[i],t[i]))return!1}return!0}function kc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _c(e,t){var n=kc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=kc(n)}}function Kd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Kd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Yd(){for(var e=window,t=Ki();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ki(e.document)}return t}function sl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function nm(e){var t=Yd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Kd(n.ownerDocument.documentElement,n)){if(r!==null&&sl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=_c(n,o);var s=_c(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var rm=ut&&"documentMode"in document&&11>=document.documentMode,vn=null,ta=null,br=null,na=!1;function Ec(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;na||vn==null||vn!==Ki(r)||(r=vn,"selectionStart"in r&&sl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),br&&jr(br,r)||(br=r,r=eo(ta,"onSelect"),0<r.length&&(t=new rl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=vn)))}function vi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var xn={animationend:vi("Animation","AnimationEnd"),animationiteration:vi("Animation","AnimationIteration"),animationstart:vi("Animation","AnimationStart"),transitionend:vi("Transition","TransitionEnd")},cs={},qd={};ut&&(qd=document.createElement("div").style,"AnimationEvent"in window||(delete xn.animationend.animation,delete xn.animationiteration.animation,delete xn.animationstart.animation),"TransitionEvent"in window||delete xn.transitionend.transition);function Ro(e){if(cs[e])return cs[e];if(!xn[e])return e;var t=xn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in qd)return cs[e]=t[n];return e}var Qd=Ro("animationend"),Xd=Ro("animationiteration"),Zd=Ro("animationstart"),Jd=Ro("transitionend"),ef=new Map,Tc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ut(e,t){ef.set(e,t),dn(t,[e])}for(var us=0;us<Tc.length;us++){var ds=Tc[us],im=ds.toLowerCase(),om=ds[0].toUpperCase()+ds.slice(1);Ut(im,"on"+om)}Ut(Qd,"onAnimationEnd");Ut(Xd,"onAnimationIteration");Ut(Zd,"onAnimationStart");Ut("dblclick","onDoubleClick");Ut("focusin","onFocus");Ut("focusout","onBlur");Ut(Jd,"onTransitionEnd");Fn("onMouseEnter",["mouseout","mouseover"]);Fn("onMouseLeave",["mouseout","mouseover"]);Fn("onPointerEnter",["pointerout","pointerover"]);Fn("onPointerLeave",["pointerout","pointerover"]);dn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));dn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));dn("onBeforeInput",["compositionend","keypress","textInput","paste"]);dn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));dn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));dn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sm=new Set("cancel close invalid load scroll toggle".split(" ").concat(hr));function Ic(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ig(r,t,void 0,e),e.currentTarget=null}function tf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Ic(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Ic(i,a,u),o=l}}}if(qi)throw e=Xs,qi=!1,Xs=null,e}function H(e,t){var n=t[aa];n===void 0&&(n=t[aa]=new Set);var r=e+"__bubble";n.has(r)||(nf(t,e,2,!1),n.add(r))}function fs(e,t,n){var r=0;t&&(r|=4),nf(n,e,r,t)}var xi="_reactListening"+Math.random().toString(36).slice(2);function Mr(e){if(!e[xi]){e[xi]=!0,cd.forEach(function(n){n!=="selectionchange"&&(sm.has(n)||fs(n,!1,e),fs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xi]||(t[xi]=!0,fs("selectionchange",!1,t))}}function nf(e,t,n,r){switch(Fd(t)){case 1:var i=wg;break;case 4:i=bg;break;default:i=tl}n=i.bind(null,t,n,e),i=void 0,!Qs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ps(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=qt(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}Ed(function(){var u=o,d=Xa(n),h=[];e:{var g=ef.get(e);if(g!==void 0){var y=rl,v=e;switch(e){case"keypress":if(Oi(n)===0)break e;case"keydown":case"keyup":y=Mg;break;case"focusin":v="focus",y=ss;break;case"focusout":v="blur",y=ss;break;case"beforeblur":case"afterblur":y=ss;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=gc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=_g;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Fg;break;case Qd:case Xd:case Zd:y=Ig;break;case Jd:y=Bg;break;case"scroll":y=Sg;break;case"wheel":y=Wg;break;case"copy":case"cut":case"paste":y=Pg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=yc}var w=(t&4)!==0,C=!w&&e==="scroll",p=w?g!==null?g+"Capture":null:g;w=[];for(var f=u,m;f!==null;){m=f;var x=m.stateNode;if(m.tag===5&&x!==null&&(m=x,p!==null&&(x=Ar(f,p),x!=null&&w.push(Dr(f,x,m)))),C)break;f=f.return}0<w.length&&(g=new y(g,v,null,n,d),h.push({event:g,listeners:w}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",g&&n!==Ys&&(v=n.relatedTarget||n.fromElement)&&(qt(v)||v[dt]))break e;if((y||g)&&(g=d.window===d?d:(g=d.ownerDocument)?g.defaultView||g.parentWindow:window,y?(v=n.relatedTarget||n.toElement,y=u,v=v?qt(v):null,v!==null&&(C=fn(v),v!==C||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=u),y!==v)){if(w=gc,x="onMouseLeave",p="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(w=yc,x="onPointerLeave",p="onPointerEnter",f="pointer"),C=y==null?g:wn(y),m=v==null?g:wn(v),g=new w(x,f+"leave",y,n,d),g.target=C,g.relatedTarget=m,x=null,qt(d)===u&&(w=new w(p,f+"enter",v,n,d),w.target=m,w.relatedTarget=C,x=w),C=x,y&&v)t:{for(w=y,p=v,f=0,m=w;m;m=pn(m))f++;for(m=0,x=p;x;x=pn(x))m++;for(;0<f-m;)w=pn(w),f--;for(;0<m-f;)p=pn(p),m--;for(;f--;){if(w===p||p!==null&&w===p.alternate)break t;w=pn(w),p=pn(p)}w=null}else w=null;y!==null&&Cc(h,g,y,w,!1),v!==null&&C!==null&&Cc(h,C,v,w,!0)}}e:{if(g=u?wn(u):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var S=Qg;else if(wc(g))if(Vd)S=em;else{S=Zg;var _=Xg}else(y=g.nodeName)&&y.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(S=Jg);if(S&&(S=S(e,u))){$d(h,S,n,d);break e}_&&_(e,g,u),e==="focusout"&&(_=g._wrapperState)&&_.controlled&&g.type==="number"&&Ws(g,"number",g.value)}switch(_=u?wn(u):window,e){case"focusin":(wc(_)||_.contentEditable==="true")&&(vn=_,ta=u,br=null);break;case"focusout":br=ta=vn=null;break;case"mousedown":na=!0;break;case"contextmenu":case"mouseup":case"dragend":na=!1,Ec(h,n,d);break;case"selectionchange":if(rm)break;case"keydown":case"keyup":Ec(h,n,d)}var T;if(ol)e:{switch(e){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else yn?Hd(e,n)&&(k="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(Bd&&n.locale!=="ko"&&(yn||k!=="onCompositionStart"?k==="onCompositionEnd"&&yn&&(T=Ud()):(Tt=d,nl="value"in Tt?Tt.value:Tt.textContent,yn=!0)),_=eo(u,k),0<_.length&&(k=new mc(k,e,null,n,d),h.push({event:k,listeners:_}),T?k.data=T:(T=Wd(n),T!==null&&(k.data=T)))),(T=Vg?Gg(e,n):Kg(e,n))&&(u=eo(u,"onBeforeInput"),0<u.length&&(d=new mc("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:u}),d.data=T))}tf(h,t)})}function Dr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function eo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ar(e,n),o!=null&&r.unshift(Dr(e,o,i)),o=Ar(e,t),o!=null&&r.push(Dr(e,o,i))),e=e.return}return r}function pn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Cc(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Ar(n,o),l!=null&&s.unshift(Dr(n,l,a))):i||(l=Ar(n,o),l!=null&&s.push(Dr(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var am=/\r\n?/g,lm=/\u0000|\uFFFD/g;function Pc(e){return(typeof e=="string"?e:""+e).replace(am,`
`).replace(lm,"")}function wi(e,t,n){if(t=Pc(t),Pc(e)!==t&&n)throw Error(b(425))}function to(){}var ra=null,ia=null;function oa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var sa=typeof setTimeout=="function"?setTimeout:void 0,cm=typeof clearTimeout=="function"?clearTimeout:void 0,Ac=typeof Promise=="function"?Promise:void 0,um=typeof queueMicrotask=="function"?queueMicrotask:typeof Ac<"u"?function(e){return Ac.resolve(null).then(e).catch(dm)}:sa;function dm(e){setTimeout(function(){throw e})}function hs(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Or(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Or(t)}function Nt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Nc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Qn=Math.random().toString(36).slice(2),Ke="__reactFiber$"+Qn,zr="__reactProps$"+Qn,dt="__reactContainer$"+Qn,aa="__reactEvents$"+Qn,fm="__reactListeners$"+Qn,pm="__reactHandles$"+Qn;function qt(e){var t=e[Ke];if(t)return t;for(var n=e.parentNode;n;){if(t=n[dt]||n[Ke]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Nc(e);e!==null;){if(n=e[Ke])return n;e=Nc(e)}return t}e=n,n=e.parentNode}return null}function Zr(e){return e=e[Ke]||e[dt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function wn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(b(33))}function Oo(e){return e[zr]||null}var la=[],bn=-1;function Bt(e){return{current:e}}function W(e){0>bn||(e.current=la[bn],la[bn]=null,bn--)}function B(e,t){bn++,la[bn]=e.current,e.current=t}var Ft={},ue=Bt(Ft),ve=Bt(!1),nn=Ft;function Un(e,t){var n=e.type.contextTypes;if(!n)return Ft;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function xe(e){return e=e.childContextTypes,e!=null}function no(){W(ve),W(ue)}function Rc(e,t,n){if(ue.current!==Ft)throw Error(b(168));B(ue,t),B(ve,n)}function rf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(b(108,Xh(e)||"Unknown",i));return K({},n,r)}function ro(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ft,nn=ue.current,B(ue,e),B(ve,ve.current),!0}function Oc(e,t,n){var r=e.stateNode;if(!r)throw Error(b(169));n?(e=rf(e,t,nn),r.__reactInternalMemoizedMergedChildContext=e,W(ve),W(ue),B(ue,e)):W(ve),B(ve,n)}var nt=null,Lo=!1,gs=!1;function of(e){nt===null?nt=[e]:nt.push(e)}function hm(e){Lo=!0,of(e)}function Ht(){if(!gs&&nt!==null){gs=!0;var e=0,t=F;try{var n=nt;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}nt=null,Lo=!1}catch(i){throw nt!==null&&(nt=nt.slice(e+1)),Pd(Za,Ht),i}finally{F=t,gs=!1}}return null}var Sn=[],kn=0,io=null,oo=0,Ce=[],Pe=0,rn=null,it=1,ot="";function Gt(e,t){Sn[kn++]=oo,Sn[kn++]=io,io=e,oo=t}function sf(e,t,n){Ce[Pe++]=it,Ce[Pe++]=ot,Ce[Pe++]=rn,rn=e;var r=it;e=ot;var i=32-Be(r)-1;r&=~(1<<i),n+=1;var o=32-Be(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,it=1<<32-Be(t)+i|n<<i|r,ot=o+e}else it=1<<o|n<<i|r,ot=e}function al(e){e.return!==null&&(Gt(e,1),sf(e,1,0))}function ll(e){for(;e===io;)io=Sn[--kn],Sn[kn]=null,oo=Sn[--kn],Sn[kn]=null;for(;e===rn;)rn=Ce[--Pe],Ce[Pe]=null,ot=Ce[--Pe],Ce[Pe]=null,it=Ce[--Pe],Ce[Pe]=null}var ke=null,Se=null,$=!1,Fe=null;function af(e,t){var n=Ae(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Lc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ke=e,Se=Nt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ke=e,Se=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=rn!==null?{id:it,overflow:ot}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ae(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ke=e,Se=null,!0):!1;default:return!1}}function ca(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ua(e){if($){var t=Se;if(t){var n=t;if(!Lc(e,t)){if(ca(e))throw Error(b(418));t=Nt(n.nextSibling);var r=ke;t&&Lc(e,t)?af(r,n):(e.flags=e.flags&-4097|2,$=!1,ke=e)}}else{if(ca(e))throw Error(b(418));e.flags=e.flags&-4097|2,$=!1,ke=e}}}function jc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ke=e}function bi(e){if(e!==ke)return!1;if(!$)return jc(e),$=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!oa(e.type,e.memoizedProps)),t&&(t=Se)){if(ca(e))throw lf(),Error(b(418));for(;t;)af(e,t),t=Nt(t.nextSibling)}if(jc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(b(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Se=Nt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Se=null}}else Se=ke?Nt(e.stateNode.nextSibling):null;return!0}function lf(){for(var e=Se;e;)e=Nt(e.nextSibling)}function Bn(){Se=ke=null,$=!1}function cl(e){Fe===null?Fe=[e]:Fe.push(e)}var gm=gt.ReactCurrentBatchConfig;function or(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(b(309));var r=n.stateNode}if(!r)throw Error(b(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(b(284));if(!n._owner)throw Error(b(290,e))}return e}function Si(e,t){throw e=Object.prototype.toString.call(t),Error(b(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Mc(e){var t=e._init;return t(e._payload)}function cf(e){function t(p,f){if(e){var m=p.deletions;m===null?(p.deletions=[f],p.flags|=16):m.push(f)}}function n(p,f){if(!e)return null;for(;f!==null;)t(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=jt(p,f),p.index=0,p.sibling=null,p}function o(p,f,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<f?(p.flags|=2,f):m):(p.flags|=2,f)):(p.flags|=1048576,f)}function s(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,f,m,x){return f===null||f.tag!==6?(f=Ss(m,p.mode,x),f.return=p,f):(f=i(f,m),f.return=p,f)}function l(p,f,m,x){var S=m.type;return S===mn?d(p,f,m.props.children,x,m.key):f!==null&&(f.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===xt&&Mc(S)===f.type)?(x=i(f,m.props),x.ref=or(p,f,m),x.return=p,x):(x=Ui(m.type,m.key,m.props,null,p.mode,x),x.ref=or(p,f,m),x.return=p,x)}function u(p,f,m,x){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=ks(m,p.mode,x),f.return=p,f):(f=i(f,m.children||[]),f.return=p,f)}function d(p,f,m,x,S){return f===null||f.tag!==7?(f=en(m,p.mode,x,S),f.return=p,f):(f=i(f,m),f.return=p,f)}function h(p,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Ss(""+f,p.mode,m),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case di:return m=Ui(f.type,f.key,f.props,null,p.mode,m),m.ref=or(p,null,f),m.return=p,m;case gn:return f=ks(f,p.mode,m),f.return=p,f;case xt:var x=f._init;return h(p,x(f._payload),m)}if(fr(f)||er(f))return f=en(f,p.mode,m,null),f.return=p,f;Si(p,f)}return null}function g(p,f,m,x){var S=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return S!==null?null:a(p,f,""+m,x);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case di:return m.key===S?l(p,f,m,x):null;case gn:return m.key===S?u(p,f,m,x):null;case xt:return S=m._init,g(p,f,S(m._payload),x)}if(fr(m)||er(m))return S!==null?null:d(p,f,m,x,null);Si(p,m)}return null}function y(p,f,m,x,S){if(typeof x=="string"&&x!==""||typeof x=="number")return p=p.get(m)||null,a(f,p,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case di:return p=p.get(x.key===null?m:x.key)||null,l(f,p,x,S);case gn:return p=p.get(x.key===null?m:x.key)||null,u(f,p,x,S);case xt:var _=x._init;return y(p,f,m,_(x._payload),S)}if(fr(x)||er(x))return p=p.get(m)||null,d(f,p,x,S,null);Si(f,x)}return null}function v(p,f,m,x){for(var S=null,_=null,T=f,k=f=0,M=null;T!==null&&k<m.length;k++){T.index>k?(M=T,T=null):M=T.sibling;var O=g(p,T,m[k],x);if(O===null){T===null&&(T=M);break}e&&T&&O.alternate===null&&t(p,T),f=o(O,f,k),_===null?S=O:_.sibling=O,_=O,T=M}if(k===m.length)return n(p,T),$&&Gt(p,k),S;if(T===null){for(;k<m.length;k++)T=h(p,m[k],x),T!==null&&(f=o(T,f,k),_===null?S=T:_.sibling=T,_=T);return $&&Gt(p,k),S}for(T=r(p,T);k<m.length;k++)M=y(T,p,k,m[k],x),M!==null&&(e&&M.alternate!==null&&T.delete(M.key===null?k:M.key),f=o(M,f,k),_===null?S=M:_.sibling=M,_=M);return e&&T.forEach(function(N){return t(p,N)}),$&&Gt(p,k),S}function w(p,f,m,x){var S=er(m);if(typeof S!="function")throw Error(b(150));if(m=S.call(m),m==null)throw Error(b(151));for(var _=S=null,T=f,k=f=0,M=null,O=m.next();T!==null&&!O.done;k++,O=m.next()){T.index>k?(M=T,T=null):M=T.sibling;var N=g(p,T,O.value,x);if(N===null){T===null&&(T=M);break}e&&T&&N.alternate===null&&t(p,T),f=o(N,f,k),_===null?S=N:_.sibling=N,_=N,T=M}if(O.done)return n(p,T),$&&Gt(p,k),S;if(T===null){for(;!O.done;k++,O=m.next())O=h(p,O.value,x),O!==null&&(f=o(O,f,k),_===null?S=O:_.sibling=O,_=O);return $&&Gt(p,k),S}for(T=r(p,T);!O.done;k++,O=m.next())O=y(T,p,k,O.value,x),O!==null&&(e&&O.alternate!==null&&T.delete(O.key===null?k:O.key),f=o(O,f,k),_===null?S=O:_.sibling=O,_=O);return e&&T.forEach(function(Zn){return t(p,Zn)}),$&&Gt(p,k),S}function C(p,f,m,x){if(typeof m=="object"&&m!==null&&m.type===mn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case di:e:{for(var S=m.key,_=f;_!==null;){if(_.key===S){if(S=m.type,S===mn){if(_.tag===7){n(p,_.sibling),f=i(_,m.props.children),f.return=p,p=f;break e}}else if(_.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===xt&&Mc(S)===_.type){n(p,_.sibling),f=i(_,m.props),f.ref=or(p,_,m),f.return=p,p=f;break e}n(p,_);break}else t(p,_);_=_.sibling}m.type===mn?(f=en(m.props.children,p.mode,x,m.key),f.return=p,p=f):(x=Ui(m.type,m.key,m.props,null,p.mode,x),x.ref=or(p,f,m),x.return=p,p=x)}return s(p);case gn:e:{for(_=m.key;f!==null;){if(f.key===_)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(p,f.sibling),f=i(f,m.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else t(p,f);f=f.sibling}f=ks(m,p.mode,x),f.return=p,p=f}return s(p);case xt:return _=m._init,C(p,f,_(m._payload),x)}if(fr(m))return v(p,f,m,x);if(er(m))return w(p,f,m,x);Si(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,m),f.return=p,p=f):(n(p,f),f=Ss(m,p.mode,x),f.return=p,p=f),s(p)):n(p,f)}return C}var Hn=cf(!0),uf=cf(!1),so=Bt(null),ao=null,_n=null,ul=null;function dl(){ul=_n=ao=null}function fl(e){var t=so.current;W(so),e._currentValue=t}function da(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Nn(e,t){ao=e,ul=_n=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ye=!0),e.firstContext=null)}function Re(e){var t=e._currentValue;if(ul!==e)if(e={context:e,memoizedValue:t,next:null},_n===null){if(ao===null)throw Error(b(308));_n=e,ao.dependencies={lanes:0,firstContext:e}}else _n=_n.next=e;return t}var Qt=null;function pl(e){Qt===null?Qt=[e]:Qt.push(e)}function df(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,pl(t)):(n.next=i.next,i.next=n),t.interleaved=n,ft(e,r)}function ft(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var wt=!1;function hl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ff(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function lt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Rt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,D&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,ft(e,n)}return i=r.interleaved,i===null?(t.next=t,pl(r)):(t.next=i.next,i.next=t),r.interleaved=t,ft(e,n)}function Li(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ja(e,n)}}function Dc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function lo(e,t,n,r){var i=e.updateQueue;wt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(o!==null){var h=i.baseState;s=0,d=u=l=null,a=o;do{var g=a.lane,y=a.eventTime;if((r&g)===g){d!==null&&(d=d.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,w=a;switch(g=t,y=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){h=v.call(y,h,g);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,g=typeof v=="function"?v.call(y,h,g):v,g==null)break e;h=K({},h,g);break e;case 2:wt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else y={eventTime:y,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=y,l=h):d=d.next=y,s|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(1);if(d===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);sn|=s,e.lanes=s,e.memoizedState=h}}function zc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(b(191,i));i.call(r)}}}var Jr={},Qe=Bt(Jr),Fr=Bt(Jr),Ur=Bt(Jr);function Xt(e){if(e===Jr)throw Error(b(174));return e}function gl(e,t){switch(B(Ur,t),B(Fr,e),B(Qe,Jr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Vs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Vs(t,e)}W(Qe),B(Qe,t)}function Wn(){W(Qe),W(Fr),W(Ur)}function pf(e){Xt(Ur.current);var t=Xt(Qe.current),n=Vs(t,e.type);t!==n&&(B(Fr,e),B(Qe,n))}function ml(e){Fr.current===e&&(W(Qe),W(Fr))}var V=Bt(0);function co(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ms=[];function yl(){for(var e=0;e<ms.length;e++)ms[e]._workInProgressVersionPrimary=null;ms.length=0}var ji=gt.ReactCurrentDispatcher,ys=gt.ReactCurrentBatchConfig,on=0,G=null,Z=null,ne=null,uo=!1,Sr=!1,Br=0,mm=0;function ae(){throw Error(b(321))}function vl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!We(e[n],t[n]))return!1;return!0}function xl(e,t,n,r,i,o){if(on=o,G=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ji.current=e===null||e.memoizedState===null?wm:bm,e=n(r,i),Sr){o=0;do{if(Sr=!1,Br=0,25<=o)throw Error(b(301));o+=1,ne=Z=null,t.updateQueue=null,ji.current=Sm,e=n(r,i)}while(Sr)}if(ji.current=fo,t=Z!==null&&Z.next!==null,on=0,ne=Z=G=null,uo=!1,t)throw Error(b(300));return e}function wl(){var e=Br!==0;return Br=0,e}function Ge(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ne===null?G.memoizedState=ne=e:ne=ne.next=e,ne}function Oe(){if(Z===null){var e=G.alternate;e=e!==null?e.memoizedState:null}else e=Z.next;var t=ne===null?G.memoizedState:ne.next;if(t!==null)ne=t,Z=e;else{if(e===null)throw Error(b(310));Z=e,e={memoizedState:Z.memoizedState,baseState:Z.baseState,baseQueue:Z.baseQueue,queue:Z.queue,next:null},ne===null?G.memoizedState=ne=e:ne=ne.next=e}return ne}function Hr(e,t){return typeof t=="function"?t(e):t}function vs(e){var t=Oe(),n=t.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=e;var r=Z,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var d=u.lane;if((on&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,s=r):l=l.next=h,G.lanes|=d,sn|=d}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,We(r,t.memoizedState)||(ye=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,G.lanes|=o,sn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function xs(e){var t=Oe(),n=t.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);We(o,t.memoizedState)||(ye=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function hf(){}function gf(e,t){var n=G,r=Oe(),i=t(),o=!We(r.memoizedState,i);if(o&&(r.memoizedState=i,ye=!0),r=r.queue,bl(vf.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ne!==null&&ne.memoizedState.tag&1){if(n.flags|=2048,Wr(9,yf.bind(null,n,r,i,t),void 0,null),re===null)throw Error(b(349));on&30||mf(n,t,i)}return i}function mf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function yf(e,t,n,r){t.value=n,t.getSnapshot=r,xf(t)&&wf(e)}function vf(e,t,n){return n(function(){xf(t)&&wf(e)})}function xf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!We(e,n)}catch{return!0}}function wf(e){var t=ft(e,1);t!==null&&He(t,e,1,-1)}function Fc(e){var t=Ge();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Hr,lastRenderedState:e},t.queue=e,e=e.dispatch=xm.bind(null,G,e),[t.memoizedState,e]}function Wr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function bf(){return Oe().memoizedState}function Mi(e,t,n,r){var i=Ge();G.flags|=e,i.memoizedState=Wr(1|t,n,void 0,r===void 0?null:r)}function jo(e,t,n,r){var i=Oe();r=r===void 0?null:r;var o=void 0;if(Z!==null){var s=Z.memoizedState;if(o=s.destroy,r!==null&&vl(r,s.deps)){i.memoizedState=Wr(t,n,o,r);return}}G.flags|=e,i.memoizedState=Wr(1|t,n,o,r)}function Uc(e,t){return Mi(8390656,8,e,t)}function bl(e,t){return jo(2048,8,e,t)}function Sf(e,t){return jo(4,2,e,t)}function kf(e,t){return jo(4,4,e,t)}function _f(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ef(e,t,n){return n=n!=null?n.concat([e]):null,jo(4,4,_f.bind(null,t,e),n)}function Sl(){}function Tf(e,t){var n=Oe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&vl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function If(e,t){var n=Oe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&vl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Cf(e,t,n){return on&21?(We(n,t)||(n=Rd(),G.lanes|=n,sn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ye=!0),e.memoizedState=n)}function ym(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=ys.transition;ys.transition={};try{e(!1),t()}finally{F=n,ys.transition=r}}function Pf(){return Oe().memoizedState}function vm(e,t,n){var r=Lt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Af(e))Nf(t,n);else if(n=df(e,t,n,r),n!==null){var i=pe();He(n,e,r,i),Rf(n,t,r)}}function xm(e,t,n){var r=Lt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Af(e))Nf(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,We(a,s)){var l=t.interleaved;l===null?(i.next=i,pl(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=df(e,t,i,r),n!==null&&(i=pe(),He(n,e,r,i),Rf(n,t,r))}}function Af(e){var t=e.alternate;return e===G||t!==null&&t===G}function Nf(e,t){Sr=uo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Rf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ja(e,n)}}var fo={readContext:Re,useCallback:ae,useContext:ae,useEffect:ae,useImperativeHandle:ae,useInsertionEffect:ae,useLayoutEffect:ae,useMemo:ae,useReducer:ae,useRef:ae,useState:ae,useDebugValue:ae,useDeferredValue:ae,useTransition:ae,useMutableSource:ae,useSyncExternalStore:ae,useId:ae,unstable_isNewReconciler:!1},wm={readContext:Re,useCallback:function(e,t){return Ge().memoizedState=[e,t===void 0?null:t],e},useContext:Re,useEffect:Uc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Mi(4194308,4,_f.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Mi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Mi(4,2,e,t)},useMemo:function(e,t){var n=Ge();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ge();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=vm.bind(null,G,e),[r.memoizedState,e]},useRef:function(e){var t=Ge();return e={current:e},t.memoizedState=e},useState:Fc,useDebugValue:Sl,useDeferredValue:function(e){return Ge().memoizedState=e},useTransition:function(){var e=Fc(!1),t=e[0];return e=ym.bind(null,e[1]),Ge().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=G,i=Ge();if($){if(n===void 0)throw Error(b(407));n=n()}else{if(n=t(),re===null)throw Error(b(349));on&30||mf(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Uc(vf.bind(null,r,o,e),[e]),r.flags|=2048,Wr(9,yf.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ge(),t=re.identifierPrefix;if($){var n=ot,r=it;n=(r&~(1<<32-Be(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Br++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=mm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},bm={readContext:Re,useCallback:Tf,useContext:Re,useEffect:bl,useImperativeHandle:Ef,useInsertionEffect:Sf,useLayoutEffect:kf,useMemo:If,useReducer:vs,useRef:bf,useState:function(){return vs(Hr)},useDebugValue:Sl,useDeferredValue:function(e){var t=Oe();return Cf(t,Z.memoizedState,e)},useTransition:function(){var e=vs(Hr)[0],t=Oe().memoizedState;return[e,t]},useMutableSource:hf,useSyncExternalStore:gf,useId:Pf,unstable_isNewReconciler:!1},Sm={readContext:Re,useCallback:Tf,useContext:Re,useEffect:bl,useImperativeHandle:Ef,useInsertionEffect:Sf,useLayoutEffect:kf,useMemo:If,useReducer:xs,useRef:bf,useState:function(){return xs(Hr)},useDebugValue:Sl,useDeferredValue:function(e){var t=Oe();return Z===null?t.memoizedState=e:Cf(t,Z.memoizedState,e)},useTransition:function(){var e=xs(Hr)[0],t=Oe().memoizedState;return[e,t]},useMutableSource:hf,useSyncExternalStore:gf,useId:Pf,unstable_isNewReconciler:!1};function De(e,t){if(e&&e.defaultProps){t=K({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function fa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:K({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Mo={isMounted:function(e){return(e=e._reactInternals)?fn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pe(),i=Lt(e),o=lt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Rt(e,o,i),t!==null&&(He(t,e,i,r),Li(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pe(),i=Lt(e),o=lt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Rt(e,o,i),t!==null&&(He(t,e,i,r),Li(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pe(),r=Lt(e),i=lt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Rt(e,i,r),t!==null&&(He(t,e,r,n),Li(t,e,r))}};function Bc(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!jr(n,r)||!jr(i,o):!0}function Of(e,t,n){var r=!1,i=Ft,o=t.contextType;return typeof o=="object"&&o!==null?o=Re(o):(i=xe(t)?nn:ue.current,r=t.contextTypes,o=(r=r!=null)?Un(e,i):Ft),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Mo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Hc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Mo.enqueueReplaceState(t,t.state,null)}function pa(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},hl(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Re(o):(o=xe(t)?nn:ue.current,i.context=Un(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(fa(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Mo.enqueueReplaceState(i,i.state,null),lo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function $n(e,t){try{var n="",r=t;do n+=Qh(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function ws(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ha(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var km=typeof WeakMap=="function"?WeakMap:Map;function Lf(e,t,n){n=lt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ho||(ho=!0,_a=r),ha(e,t)},n}function jf(e,t,n){n=lt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ha(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ha(e,t),typeof r!="function"&&(Ot===null?Ot=new Set([this]):Ot.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Wc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new km;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Dm.bind(null,e,t,n),t.then(e,e))}function $c(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Vc(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=lt(-1,1),t.tag=2,Rt(n,t,1))),n.lanes|=1),e)}var _m=gt.ReactCurrentOwner,ye=!1;function fe(e,t,n,r){t.child=e===null?uf(t,null,n,r):Hn(t,e.child,n,r)}function Gc(e,t,n,r,i){n=n.render;var o=t.ref;return Nn(t,i),r=xl(e,t,n,r,o,i),n=wl(),e!==null&&!ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,pt(e,t,i)):($&&n&&al(t),t.flags|=1,fe(e,t,r,i),t.child)}function Kc(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Al(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Mf(e,t,o,r,i)):(e=Ui(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:jr,n(s,r)&&e.ref===t.ref)return pt(e,t,i)}return t.flags|=1,e=jt(o,r),e.ref=t.ref,e.return=t,t.child=e}function Mf(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(jr(o,r)&&e.ref===t.ref)if(ye=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(ye=!0);else return t.lanes=e.lanes,pt(e,t,i)}return ga(e,t,n,r,i)}function Df(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(Tn,be),be|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,B(Tn,be),be|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,B(Tn,be),be|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,B(Tn,be),be|=r;return fe(e,t,i,n),t.child}function zf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ga(e,t,n,r,i){var o=xe(n)?nn:ue.current;return o=Un(t,o),Nn(t,i),n=xl(e,t,n,r,o,i),r=wl(),e!==null&&!ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,pt(e,t,i)):($&&r&&al(t),t.flags|=1,fe(e,t,n,i),t.child)}function Yc(e,t,n,r,i){if(xe(n)){var o=!0;ro(t)}else o=!1;if(Nn(t,i),t.stateNode===null)Di(e,t),Of(t,n,r),pa(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Re(u):(u=xe(n)?nn:ue.current,u=Un(t,u));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Hc(t,s,r,u),wt=!1;var g=t.memoizedState;s.state=g,lo(t,r,s,i),l=t.memoizedState,a!==r||g!==l||ve.current||wt?(typeof d=="function"&&(fa(t,n,d,r),l=t.memoizedState),(a=wt||Bc(t,n,a,r,g,l,u))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,ff(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:De(t.type,a),s.props=u,h=t.pendingProps,g=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Re(l):(l=xe(n)?nn:ue.current,l=Un(t,l));var y=n.getDerivedStateFromProps;(d=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==h||g!==l)&&Hc(t,s,r,l),wt=!1,g=t.memoizedState,s.state=g,lo(t,r,s,i);var v=t.memoizedState;a!==h||g!==v||ve.current||wt?(typeof y=="function"&&(fa(t,n,y,r),v=t.memoizedState),(u=wt||Bc(t,n,u,r,g,v,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,v,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,v,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),s.props=r,s.state=v,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return ma(e,t,n,r,o,i)}function ma(e,t,n,r,i,o){zf(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Oc(t,n,!1),pt(e,t,o);r=t.stateNode,_m.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Hn(t,e.child,null,o),t.child=Hn(t,null,a,o)):fe(e,t,a,o),t.memoizedState=r.state,i&&Oc(t,n,!0),t.child}function Ff(e){var t=e.stateNode;t.pendingContext?Rc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Rc(e,t.context,!1),gl(e,t.containerInfo)}function qc(e,t,n,r,i){return Bn(),cl(i),t.flags|=256,fe(e,t,n,r),t.child}var ya={dehydrated:null,treeContext:null,retryLane:0};function va(e){return{baseLanes:e,cachePool:null,transitions:null}}function Uf(e,t,n){var r=t.pendingProps,i=V.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),B(V,i&1),e===null)return ua(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Fo(s,r,0,null),e=en(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=va(n),t.memoizedState=ya,e):kl(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Em(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=jt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=jt(a,o):(o=en(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?va(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=ya,r}return o=e.child,e=o.sibling,r=jt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function kl(e,t){return t=Fo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ki(e,t,n,r){return r!==null&&cl(r),Hn(t,e.child,null,n),e=kl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Em(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=ws(Error(b(422))),ki(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Fo({mode:"visible",children:r.children},i,0,null),o=en(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Hn(t,e.child,null,s),t.child.memoizedState=va(s),t.memoizedState=ya,o);if(!(t.mode&1))return ki(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(b(419)),r=ws(o,r,void 0),ki(e,t,s,r)}if(a=(s&e.childLanes)!==0,ye||a){if(r=re,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,ft(e,i),He(r,e,i,-1))}return Pl(),r=ws(Error(b(421))),ki(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=zm.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Se=Nt(i.nextSibling),ke=t,$=!0,Fe=null,e!==null&&(Ce[Pe++]=it,Ce[Pe++]=ot,Ce[Pe++]=rn,it=e.id,ot=e.overflow,rn=t),t=kl(t,r.children),t.flags|=4096,t)}function Qc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),da(e.return,t,n)}function bs(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Bf(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(fe(e,t,r.children,n),r=V.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Qc(e,n,t);else if(e.tag===19)Qc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(B(V,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&co(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),bs(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&co(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}bs(t,!0,n,null,o);break;case"together":bs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Di(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function pt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),sn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(b(153));if(t.child!==null){for(e=t.child,n=jt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=jt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Tm(e,t,n){switch(t.tag){case 3:Ff(t),Bn();break;case 5:pf(t);break;case 1:xe(t.type)&&ro(t);break;case 4:gl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;B(so,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(B(V,V.current&1),t.flags|=128,null):n&t.child.childLanes?Uf(e,t,n):(B(V,V.current&1),e=pt(e,t,n),e!==null?e.sibling:null);B(V,V.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Bf(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),B(V,V.current),r)break;return null;case 22:case 23:return t.lanes=0,Df(e,t,n)}return pt(e,t,n)}var Hf,xa,Wf,$f;Hf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};xa=function(){};Wf=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Xt(Qe.current);var o=null;switch(n){case"input":i=Bs(e,i),r=Bs(e,r),o=[];break;case"select":i=K({},i,{value:void 0}),r=K({},r,{value:void 0}),o=[];break;case"textarea":i=$s(e,i),r=$s(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=to)}Gs(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Cr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Cr.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&H("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};$f=function(e,t,n,r){n!==r&&(t.flags|=4)};function sr(e,t){if(!$)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Im(e,t,n){var r=t.pendingProps;switch(ll(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return le(t),null;case 1:return xe(t.type)&&no(),le(t),null;case 3:return r=t.stateNode,Wn(),W(ve),W(ue),yl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(bi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Fe!==null&&(Ia(Fe),Fe=null))),xa(e,t),le(t),null;case 5:ml(t);var i=Xt(Ur.current);if(n=t.type,e!==null&&t.stateNode!=null)Wf(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(b(166));return le(t),null}if(e=Xt(Qe.current),bi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ke]=t,r[zr]=o,e=(t.mode&1)!==0,n){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(i=0;i<hr.length;i++)H(hr[i],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":oc(r,o),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},H("invalid",r);break;case"textarea":ac(r,o),H("invalid",r)}Gs(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&wi(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&wi(r.textContent,a,e),i=["children",""+a]):Cr.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&H("scroll",r)}switch(n){case"input":fi(r),sc(r,o,!0);break;case"textarea":fi(r),lc(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=to)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=yd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Ke]=t,e[zr]=r,Hf(e,t,!1,!1),t.stateNode=e;e:{switch(s=Ks(n,r),n){case"dialog":H("cancel",e),H("close",e),i=r;break;case"iframe":case"object":case"embed":H("load",e),i=r;break;case"video":case"audio":for(i=0;i<hr.length;i++)H(hr[i],e);i=r;break;case"source":H("error",e),i=r;break;case"img":case"image":case"link":H("error",e),H("load",e),i=r;break;case"details":H("toggle",e),i=r;break;case"input":oc(e,r),i=Bs(e,r),H("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=K({},r,{value:void 0}),H("invalid",e);break;case"textarea":ac(e,r),i=$s(e,r),H("invalid",e);break;default:i=r}Gs(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?wd(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&vd(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Pr(e,l):typeof l=="number"&&Pr(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Cr.hasOwnProperty(o)?l!=null&&o==="onScroll"&&H("scroll",e):l!=null&&Ka(e,o,l,s))}switch(n){case"input":fi(e),sc(e,r,!1);break;case"textarea":fi(e),lc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+zt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?In(e,!!r.multiple,o,!1):r.defaultValue!=null&&In(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=to)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return le(t),null;case 6:if(e&&t.stateNode!=null)$f(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(b(166));if(n=Xt(Ur.current),Xt(Qe.current),bi(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ke]=t,(o=r.nodeValue!==n)&&(e=ke,e!==null))switch(e.tag){case 3:wi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&wi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ke]=t,t.stateNode=r}return le(t),null;case 13:if(W(V),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if($&&Se!==null&&t.mode&1&&!(t.flags&128))lf(),Bn(),t.flags|=98560,o=!1;else if(o=bi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(b(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(b(317));o[Ke]=t}else Bn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;le(t),o=!1}else Fe!==null&&(Ia(Fe),Fe=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||V.current&1?J===0&&(J=3):Pl())),t.updateQueue!==null&&(t.flags|=4),le(t),null);case 4:return Wn(),xa(e,t),e===null&&Mr(t.stateNode.containerInfo),le(t),null;case 10:return fl(t.type._context),le(t),null;case 17:return xe(t.type)&&no(),le(t),null;case 19:if(W(V),o=t.memoizedState,o===null)return le(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)sr(o,!1);else{if(J!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=co(e),s!==null){for(t.flags|=128,sr(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return B(V,V.current&1|2),t.child}e=e.sibling}o.tail!==null&&Q()>Vn&&(t.flags|=128,r=!0,sr(o,!1),t.lanes=4194304)}else{if(!r)if(e=co(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),sr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!$)return le(t),null}else 2*Q()-o.renderingStartTime>Vn&&n!==1073741824&&(t.flags|=128,r=!0,sr(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Q(),t.sibling=null,n=V.current,B(V,r?n&1|2:n&1),t):(le(t),null);case 22:case 23:return Cl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?be&1073741824&&(le(t),t.subtreeFlags&6&&(t.flags|=8192)):le(t),null;case 24:return null;case 25:return null}throw Error(b(156,t.tag))}function Cm(e,t){switch(ll(t),t.tag){case 1:return xe(t.type)&&no(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Wn(),W(ve),W(ue),yl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ml(t),null;case 13:if(W(V),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(b(340));Bn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return W(V),null;case 4:return Wn(),null;case 10:return fl(t.type._context),null;case 22:case 23:return Cl(),null;case 24:return null;default:return null}}var _i=!1,ce=!1,Pm=typeof WeakSet=="function"?WeakSet:Set,E=null;function En(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Y(e,t,r)}else n.current=null}function wa(e,t,n){try{n()}catch(r){Y(e,t,r)}}var Xc=!1;function Am(e,t){if(ra=Zi,e=Yd(),sl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,d=0,h=e,g=null;t:for(;;){for(var y;h!==n||i!==0&&h.nodeType!==3||(a=s+i),h!==o||r!==0&&h.nodeType!==3||(l=s+r),h.nodeType===3&&(s+=h.nodeValue.length),(y=h.firstChild)!==null;)g=h,h=y;for(;;){if(h===e)break t;if(g===n&&++u===i&&(a=s),g===o&&++d===r&&(l=s),(y=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ia={focusedElem:e,selectionRange:n},Zi=!1,E=t;E!==null;)if(t=E,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,E=e;else for(;E!==null;){t=E;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,C=v.memoizedState,p=t.stateNode,f=p.getSnapshotBeforeUpdate(t.elementType===t.type?w:De(t.type,w),C);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(x){Y(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,E=e;break}E=t.return}return v=Xc,Xc=!1,v}function kr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&wa(t,n,o)}i=i.next}while(i!==r)}}function Do(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ba(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Vf(e){var t=e.alternate;t!==null&&(e.alternate=null,Vf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ke],delete t[zr],delete t[aa],delete t[fm],delete t[pm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Gf(e){return e.tag===5||e.tag===3||e.tag===4}function Zc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Gf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Sa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=to));else if(r!==4&&(e=e.child,e!==null))for(Sa(e,t,n),e=e.sibling;e!==null;)Sa(e,t,n),e=e.sibling}function ka(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ka(e,t,n),e=e.sibling;e!==null;)ka(e,t,n),e=e.sibling}var ie=null,ze=!1;function yt(e,t,n){for(n=n.child;n!==null;)Kf(e,t,n),n=n.sibling}function Kf(e,t,n){if(qe&&typeof qe.onCommitFiberUnmount=="function")try{qe.onCommitFiberUnmount(Po,n)}catch{}switch(n.tag){case 5:ce||En(n,t);case 6:var r=ie,i=ze;ie=null,yt(e,t,n),ie=r,ze=i,ie!==null&&(ze?(e=ie,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ie.removeChild(n.stateNode));break;case 18:ie!==null&&(ze?(e=ie,n=n.stateNode,e.nodeType===8?hs(e.parentNode,n):e.nodeType===1&&hs(e,n),Or(e)):hs(ie,n.stateNode));break;case 4:r=ie,i=ze,ie=n.stateNode.containerInfo,ze=!0,yt(e,t,n),ie=r,ze=i;break;case 0:case 11:case 14:case 15:if(!ce&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&wa(n,t,s),i=i.next}while(i!==r)}yt(e,t,n);break;case 1:if(!ce&&(En(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Y(n,t,a)}yt(e,t,n);break;case 21:yt(e,t,n);break;case 22:n.mode&1?(ce=(r=ce)||n.memoizedState!==null,yt(e,t,n),ce=r):yt(e,t,n);break;default:yt(e,t,n)}}function Jc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Pm),t.forEach(function(r){var i=Fm.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Me(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:ie=a.stateNode,ze=!1;break e;case 3:ie=a.stateNode.containerInfo,ze=!0;break e;case 4:ie=a.stateNode.containerInfo,ze=!0;break e}a=a.return}if(ie===null)throw Error(b(160));Kf(o,s,i),ie=null,ze=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Y(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Yf(t,e),t=t.sibling}function Yf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Me(t,e),Ve(e),r&4){try{kr(3,e,e.return),Do(3,e)}catch(w){Y(e,e.return,w)}try{kr(5,e,e.return)}catch(w){Y(e,e.return,w)}}break;case 1:Me(t,e),Ve(e),r&512&&n!==null&&En(n,n.return);break;case 5:if(Me(t,e),Ve(e),r&512&&n!==null&&En(n,n.return),e.flags&32){var i=e.stateNode;try{Pr(i,"")}catch(w){Y(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&gd(i,o),Ks(a,s);var u=Ks(a,o);for(s=0;s<l.length;s+=2){var d=l[s],h=l[s+1];d==="style"?wd(i,h):d==="dangerouslySetInnerHTML"?vd(i,h):d==="children"?Pr(i,h):Ka(i,d,h,u)}switch(a){case"input":Hs(i,o);break;case"textarea":md(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?In(i,!!o.multiple,y,!1):g!==!!o.multiple&&(o.defaultValue!=null?In(i,!!o.multiple,o.defaultValue,!0):In(i,!!o.multiple,o.multiple?[]:"",!1))}i[zr]=o}catch(w){Y(e,e.return,w)}}break;case 6:if(Me(t,e),Ve(e),r&4){if(e.stateNode===null)throw Error(b(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){Y(e,e.return,w)}}break;case 3:if(Me(t,e),Ve(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Or(t.containerInfo)}catch(w){Y(e,e.return,w)}break;case 4:Me(t,e),Ve(e);break;case 13:Me(t,e),Ve(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Tl=Q())),r&4&&Jc(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(ce=(u=ce)||d,Me(t,e),ce=u):Me(t,e),Ve(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(E=e,d=e.child;d!==null;){for(h=E=d;E!==null;){switch(g=E,y=g.child,g.tag){case 0:case 11:case 14:case 15:kr(4,g,g.return);break;case 1:En(g,g.return);var v=g.stateNode;if(typeof v.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(w){Y(r,n,w)}}break;case 5:En(g,g.return);break;case 22:if(g.memoizedState!==null){tu(h);continue}}y!==null?(y.return=g,E=y):tu(h)}d=d.sibling}e:for(d=null,h=e;;){if(h.tag===5){if(d===null){d=h;try{i=h.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=h.stateNode,l=h.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=xd("display",s))}catch(w){Y(e,e.return,w)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(w){Y(e,e.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Me(t,e),Ve(e),r&4&&Jc(e);break;case 21:break;default:Me(t,e),Ve(e)}}function Ve(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Gf(n)){var r=n;break e}n=n.return}throw Error(b(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Pr(i,""),r.flags&=-33);var o=Zc(e);ka(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Zc(e);Sa(e,a,s);break;default:throw Error(b(161))}}catch(l){Y(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Nm(e,t,n){E=e,qf(e)}function qf(e,t,n){for(var r=(e.mode&1)!==0;E!==null;){var i=E,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||_i;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ce;a=_i;var u=ce;if(_i=s,(ce=l)&&!u)for(E=i;E!==null;)s=E,l=s.child,s.tag===22&&s.memoizedState!==null?nu(i):l!==null?(l.return=s,E=l):nu(i);for(;o!==null;)E=o,qf(o),o=o.sibling;E=i,_i=a,ce=u}eu(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,E=o):eu(e)}}function eu(e){for(;E!==null;){var t=E;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ce||Do(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ce)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:De(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&zc(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}zc(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&Or(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}ce||t.flags&512&&ba(t)}catch(g){Y(t,t.return,g)}}if(t===e){E=null;break}if(n=t.sibling,n!==null){n.return=t.return,E=n;break}E=t.return}}function tu(e){for(;E!==null;){var t=E;if(t===e){E=null;break}var n=t.sibling;if(n!==null){n.return=t.return,E=n;break}E=t.return}}function nu(e){for(;E!==null;){var t=E;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Do(4,t)}catch(l){Y(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){Y(t,i,l)}}var o=t.return;try{ba(t)}catch(l){Y(t,o,l)}break;case 5:var s=t.return;try{ba(t)}catch(l){Y(t,s,l)}}}catch(l){Y(t,t.return,l)}if(t===e){E=null;break}var a=t.sibling;if(a!==null){a.return=t.return,E=a;break}E=t.return}}var Rm=Math.ceil,po=gt.ReactCurrentDispatcher,_l=gt.ReactCurrentOwner,Ne=gt.ReactCurrentBatchConfig,D=0,re=null,X=null,oe=0,be=0,Tn=Bt(0),J=0,$r=null,sn=0,zo=0,El=0,_r=null,me=null,Tl=0,Vn=1/0,tt=null,ho=!1,_a=null,Ot=null,Ei=!1,It=null,go=0,Er=0,Ea=null,zi=-1,Fi=0;function pe(){return D&6?Q():zi!==-1?zi:zi=Q()}function Lt(e){return e.mode&1?D&2&&oe!==0?oe&-oe:gm.transition!==null?(Fi===0&&(Fi=Rd()),Fi):(e=F,e!==0||(e=window.event,e=e===void 0?16:Fd(e.type)),e):1}function He(e,t,n,r){if(50<Er)throw Er=0,Ea=null,Error(b(185));Qr(e,n,r),(!(D&2)||e!==re)&&(e===re&&(!(D&2)&&(zo|=n),J===4&&St(e,oe)),we(e,r),n===1&&D===0&&!(t.mode&1)&&(Vn=Q()+500,Lo&&Ht()))}function we(e,t){var n=e.callbackNode;gg(e,t);var r=Xi(e,e===re?oe:0);if(r===0)n!==null&&dc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&dc(n),t===1)e.tag===0?hm(ru.bind(null,e)):of(ru.bind(null,e)),um(function(){!(D&6)&&Ht()}),n=null;else{switch(Od(r)){case 1:n=Za;break;case 4:n=Ad;break;case 16:n=Qi;break;case 536870912:n=Nd;break;default:n=Qi}n=rp(n,Qf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Qf(e,t){if(zi=-1,Fi=0,D&6)throw Error(b(327));var n=e.callbackNode;if(Rn()&&e.callbackNode!==n)return null;var r=Xi(e,e===re?oe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=mo(e,r);else{t=r;var i=D;D|=2;var o=Zf();(re!==e||oe!==t)&&(tt=null,Vn=Q()+500,Jt(e,t));do try{jm();break}catch(a){Xf(e,a)}while(1);dl(),po.current=o,D=i,X!==null?t=0:(re=null,oe=0,t=J)}if(t!==0){if(t===2&&(i=Zs(e),i!==0&&(r=i,t=Ta(e,i))),t===1)throw n=$r,Jt(e,0),St(e,r),we(e,Q()),n;if(t===6)St(e,r);else{if(i=e.current.alternate,!(r&30)&&!Om(i)&&(t=mo(e,r),t===2&&(o=Zs(e),o!==0&&(r=o,t=Ta(e,o))),t===1))throw n=$r,Jt(e,0),St(e,r),we(e,Q()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(b(345));case 2:Kt(e,me,tt);break;case 3:if(St(e,r),(r&130023424)===r&&(t=Tl+500-Q(),10<t)){if(Xi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){pe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=sa(Kt.bind(null,e,me,tt),t);break}Kt(e,me,tt);break;case 4:if(St(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-Be(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Rm(r/1960))-r,10<r){e.timeoutHandle=sa(Kt.bind(null,e,me,tt),r);break}Kt(e,me,tt);break;case 5:Kt(e,me,tt);break;default:throw Error(b(329))}}}return we(e,Q()),e.callbackNode===n?Qf.bind(null,e):null}function Ta(e,t){var n=_r;return e.current.memoizedState.isDehydrated&&(Jt(e,t).flags|=256),e=mo(e,t),e!==2&&(t=me,me=n,t!==null&&Ia(t)),e}function Ia(e){me===null?me=e:me.push.apply(me,e)}function Om(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!We(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function St(e,t){for(t&=~El,t&=~zo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Be(t),r=1<<n;e[n]=-1,t&=~r}}function ru(e){if(D&6)throw Error(b(327));Rn();var t=Xi(e,0);if(!(t&1))return we(e,Q()),null;var n=mo(e,t);if(e.tag!==0&&n===2){var r=Zs(e);r!==0&&(t=r,n=Ta(e,r))}if(n===1)throw n=$r,Jt(e,0),St(e,t),we(e,Q()),n;if(n===6)throw Error(b(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Kt(e,me,tt),we(e,Q()),null}function Il(e,t){var n=D;D|=1;try{return e(t)}finally{D=n,D===0&&(Vn=Q()+500,Lo&&Ht())}}function an(e){It!==null&&It.tag===0&&!(D&6)&&Rn();var t=D;D|=1;var n=Ne.transition,r=F;try{if(Ne.transition=null,F=1,e)return e()}finally{F=r,Ne.transition=n,D=t,!(D&6)&&Ht()}}function Cl(){be=Tn.current,W(Tn)}function Jt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,cm(n)),X!==null)for(n=X.return;n!==null;){var r=n;switch(ll(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&no();break;case 3:Wn(),W(ve),W(ue),yl();break;case 5:ml(r);break;case 4:Wn();break;case 13:W(V);break;case 19:W(V);break;case 10:fl(r.type._context);break;case 22:case 23:Cl()}n=n.return}if(re=e,X=e=jt(e.current,null),oe=be=t,J=0,$r=null,El=zo=sn=0,me=_r=null,Qt!==null){for(t=0;t<Qt.length;t++)if(n=Qt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Qt=null}return e}function Xf(e,t){do{var n=X;try{if(dl(),ji.current=fo,uo){for(var r=G.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}uo=!1}if(on=0,ne=Z=G=null,Sr=!1,Br=0,_l.current=null,n===null||n.return===null){J=1,$r=t,X=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=oe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var g=d.alternate;g?(d.updateQueue=g.updateQueue,d.memoizedState=g.memoizedState,d.lanes=g.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=$c(s);if(y!==null){y.flags&=-257,Vc(y,s,a,o,t),y.mode&1&&Wc(o,u,t),t=y,l=u;var v=t.updateQueue;if(v===null){var w=new Set;w.add(l),t.updateQueue=w}else v.add(l);break e}else{if(!(t&1)){Wc(o,u,t),Pl();break e}l=Error(b(426))}}else if($&&a.mode&1){var C=$c(s);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Vc(C,s,a,o,t),cl($n(l,a));break e}}o=l=$n(l,a),J!==4&&(J=2),_r===null?_r=[o]:_r.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=Lf(o,l,t);Dc(o,p);break e;case 1:a=l;var f=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ot===null||!Ot.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=jf(o,a,t);Dc(o,x);break e}}o=o.return}while(o!==null)}ep(n)}catch(S){t=S,X===n&&n!==null&&(X=n=n.return);continue}break}while(1)}function Zf(){var e=po.current;return po.current=fo,e===null?fo:e}function Pl(){(J===0||J===3||J===2)&&(J=4),re===null||!(sn&268435455)&&!(zo&268435455)||St(re,oe)}function mo(e,t){var n=D;D|=2;var r=Zf();(re!==e||oe!==t)&&(tt=null,Jt(e,t));do try{Lm();break}catch(i){Xf(e,i)}while(1);if(dl(),D=n,po.current=r,X!==null)throw Error(b(261));return re=null,oe=0,J}function Lm(){for(;X!==null;)Jf(X)}function jm(){for(;X!==null&&!sg();)Jf(X)}function Jf(e){var t=np(e.alternate,e,be);e.memoizedProps=e.pendingProps,t===null?ep(e):X=t,_l.current=null}function ep(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Cm(n,t),n!==null){n.flags&=32767,X=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{J=6,X=null;return}}else if(n=Im(n,t,be),n!==null){X=n;return}if(t=t.sibling,t!==null){X=t;return}X=t=e}while(t!==null);J===0&&(J=5)}function Kt(e,t,n){var r=F,i=Ne.transition;try{Ne.transition=null,F=1,Mm(e,t,n,r)}finally{Ne.transition=i,F=r}return null}function Mm(e,t,n,r){do Rn();while(It!==null);if(D&6)throw Error(b(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(b(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(mg(e,o),e===re&&(X=re=null,oe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ei||(Ei=!0,rp(Qi,function(){return Rn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ne.transition,Ne.transition=null;var s=F;F=1;var a=D;D|=4,_l.current=null,Am(e,n),Yf(n,e),nm(ia),Zi=!!ra,ia=ra=null,e.current=n,Nm(n),ag(),D=a,F=s,Ne.transition=o}else e.current=n;if(Ei&&(Ei=!1,It=e,go=i),o=e.pendingLanes,o===0&&(Ot=null),ug(n.stateNode),we(e,Q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ho)throw ho=!1,e=_a,_a=null,e;return go&1&&e.tag!==0&&Rn(),o=e.pendingLanes,o&1?e===Ea?Er++:(Er=0,Ea=e):Er=0,Ht(),null}function Rn(){if(It!==null){var e=Od(go),t=Ne.transition,n=F;try{if(Ne.transition=null,F=16>e?16:e,It===null)var r=!1;else{if(e=It,It=null,go=0,D&6)throw Error(b(331));var i=D;for(D|=4,E=e.current;E!==null;){var o=E,s=o.child;if(E.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(E=u;E!==null;){var d=E;switch(d.tag){case 0:case 11:case 15:kr(8,d,o)}var h=d.child;if(h!==null)h.return=d,E=h;else for(;E!==null;){d=E;var g=d.sibling,y=d.return;if(Vf(d),d===u){E=null;break}if(g!==null){g.return=y,E=g;break}E=y}}}var v=o.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var C=w.sibling;w.sibling=null,w=C}while(w!==null)}}E=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,E=s;else e:for(;E!==null;){if(o=E,o.flags&2048)switch(o.tag){case 0:case 11:case 15:kr(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,E=p;break e}E=o.return}}var f=e.current;for(E=f;E!==null;){s=E;var m=s.child;if(s.subtreeFlags&2064&&m!==null)m.return=s,E=m;else e:for(s=f;E!==null;){if(a=E,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Do(9,a)}}catch(S){Y(a,a.return,S)}if(a===s){E=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,E=x;break e}E=a.return}}if(D=i,Ht(),qe&&typeof qe.onPostCommitFiberRoot=="function")try{qe.onPostCommitFiberRoot(Po,e)}catch{}r=!0}return r}finally{F=n,Ne.transition=t}}return!1}function iu(e,t,n){t=$n(n,t),t=Lf(e,t,1),e=Rt(e,t,1),t=pe(),e!==null&&(Qr(e,1,t),we(e,t))}function Y(e,t,n){if(e.tag===3)iu(e,e,n);else for(;t!==null;){if(t.tag===3){iu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ot===null||!Ot.has(r))){e=$n(n,e),e=jf(t,e,1),t=Rt(t,e,1),e=pe(),t!==null&&(Qr(t,1,e),we(t,e));break}}t=t.return}}function Dm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=pe(),e.pingedLanes|=e.suspendedLanes&n,re===e&&(oe&n)===n&&(J===4||J===3&&(oe&130023424)===oe&&500>Q()-Tl?Jt(e,0):El|=n),we(e,t)}function tp(e,t){t===0&&(e.mode&1?(t=gi,gi<<=1,!(gi&130023424)&&(gi=4194304)):t=1);var n=pe();e=ft(e,t),e!==null&&(Qr(e,t,n),we(e,n))}function zm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),tp(e,n)}function Fm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(b(314))}r!==null&&r.delete(t),tp(e,n)}var np;np=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ve.current)ye=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ye=!1,Tm(e,t,n);ye=!!(e.flags&131072)}else ye=!1,$&&t.flags&1048576&&sf(t,oo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Di(e,t),e=t.pendingProps;var i=Un(t,ue.current);Nn(t,n),i=xl(null,t,r,e,i,n);var o=wl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,xe(r)?(o=!0,ro(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,hl(t),i.updater=Mo,t.stateNode=i,i._reactInternals=t,pa(t,r,e,n),t=ma(null,t,r,!0,o,n)):(t.tag=0,$&&o&&al(t),fe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Di(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Bm(r),e=De(r,e),i){case 0:t=ga(null,t,r,e,n);break e;case 1:t=Yc(null,t,r,e,n);break e;case 11:t=Gc(null,t,r,e,n);break e;case 14:t=Kc(null,t,r,De(r.type,e),n);break e}throw Error(b(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:De(r,i),ga(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:De(r,i),Yc(e,t,r,i,n);case 3:e:{if(Ff(t),e===null)throw Error(b(387));r=t.pendingProps,o=t.memoizedState,i=o.element,ff(e,t),lo(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=$n(Error(b(423)),t),t=qc(e,t,r,n,i);break e}else if(r!==i){i=$n(Error(b(424)),t),t=qc(e,t,r,n,i);break e}else for(Se=Nt(t.stateNode.containerInfo.firstChild),ke=t,$=!0,Fe=null,n=uf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Bn(),r===i){t=pt(e,t,n);break e}fe(e,t,r,n)}t=t.child}return t;case 5:return pf(t),e===null&&ua(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,oa(r,i)?s=null:o!==null&&oa(r,o)&&(t.flags|=32),zf(e,t),fe(e,t,s,n),t.child;case 6:return e===null&&ua(t),null;case 13:return Uf(e,t,n);case 4:return gl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Hn(t,null,r,n):fe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:De(r,i),Gc(e,t,r,i,n);case 7:return fe(e,t,t.pendingProps,n),t.child;case 8:return fe(e,t,t.pendingProps.children,n),t.child;case 12:return fe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,B(so,r._currentValue),r._currentValue=s,o!==null)if(We(o.value,s)){if(o.children===i.children&&!ve.current){t=pt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=lt(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),da(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(b(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),da(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}fe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Nn(t,n),i=Re(i),r=r(i),t.flags|=1,fe(e,t,r,n),t.child;case 14:return r=t.type,i=De(r,t.pendingProps),i=De(r.type,i),Kc(e,t,r,i,n);case 15:return Mf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:De(r,i),Di(e,t),t.tag=1,xe(r)?(e=!0,ro(t)):e=!1,Nn(t,n),Of(t,r,i),pa(t,r,i,n),ma(null,t,r,!0,e,n);case 19:return Bf(e,t,n);case 22:return Df(e,t,n)}throw Error(b(156,t.tag))};function rp(e,t){return Pd(e,t)}function Um(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ae(e,t,n,r){return new Um(e,t,n,r)}function Al(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Bm(e){if(typeof e=="function")return Al(e)?1:0;if(e!=null){if(e=e.$$typeof,e===qa)return 11;if(e===Qa)return 14}return 2}function jt(e,t){var n=e.alternate;return n===null?(n=Ae(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ui(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Al(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case mn:return en(n.children,i,o,t);case Ya:s=8,i|=8;break;case Ds:return e=Ae(12,n,t,i|2),e.elementType=Ds,e.lanes=o,e;case zs:return e=Ae(13,n,t,i),e.elementType=zs,e.lanes=o,e;case Fs:return e=Ae(19,n,t,i),e.elementType=Fs,e.lanes=o,e;case fd:return Fo(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ud:s=10;break e;case dd:s=9;break e;case qa:s=11;break e;case Qa:s=14;break e;case xt:s=16,r=null;break e}throw Error(b(130,e==null?e:typeof e,""))}return t=Ae(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function en(e,t,n,r){return e=Ae(7,e,r,t),e.lanes=n,e}function Fo(e,t,n,r){return e=Ae(22,e,r,t),e.elementType=fd,e.lanes=n,e.stateNode={isHidden:!1},e}function Ss(e,t,n){return e=Ae(6,e,null,t),e.lanes=n,e}function ks(e,t,n){return t=Ae(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Hm(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=rs(0),this.expirationTimes=rs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rs(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Nl(e,t,n,r,i,o,s,a,l){return e=new Hm(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ae(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},hl(o),e}function Wm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:gn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ip(e){if(!e)return Ft;e=e._reactInternals;e:{if(fn(e)!==e||e.tag!==1)throw Error(b(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(xe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(b(171))}if(e.tag===1){var n=e.type;if(xe(n))return rf(e,n,t)}return t}function op(e,t,n,r,i,o,s,a,l){return e=Nl(n,r,!0,e,i,o,s,a,l),e.context=ip(null),n=e.current,r=pe(),i=Lt(n),o=lt(r,i),o.callback=t??null,Rt(n,o,i),e.current.lanes=i,Qr(e,i,r),we(e,r),e}function Uo(e,t,n,r){var i=t.current,o=pe(),s=Lt(i);return n=ip(n),t.context===null?t.context=n:t.pendingContext=n,t=lt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Rt(i,t,s),e!==null&&(He(e,i,s,o),Li(e,i,s)),s}function yo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ou(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Rl(e,t){ou(e,t),(e=e.alternate)&&ou(e,t)}function $m(){return null}var sp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ol(e){this._internalRoot=e}Bo.prototype.render=Ol.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(b(409));Uo(e,t,null,null)};Bo.prototype.unmount=Ol.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;an(function(){Uo(null,e,null,null)}),t[dt]=null}};function Bo(e){this._internalRoot=e}Bo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Md();e={blockedOn:null,target:e,priority:t};for(var n=0;n<bt.length&&t!==0&&t<bt[n].priority;n++);bt.splice(n,0,e),n===0&&zd(e)}};function Ll(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ho(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function su(){}function Vm(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=yo(s);o.call(u)}}var s=op(t,r,e,0,null,!1,!1,"",su);return e._reactRootContainer=s,e[dt]=s.current,Mr(e.nodeType===8?e.parentNode:e),an(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=yo(l);a.call(u)}}var l=Nl(e,0,!1,null,null,!1,!1,"",su);return e._reactRootContainer=l,e[dt]=l.current,Mr(e.nodeType===8?e.parentNode:e),an(function(){Uo(t,l,n,r)}),l}function Wo(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=yo(s);a.call(l)}}Uo(t,s,e,i)}else s=Vm(n,t,e,i,r);return yo(s)}Ld=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=pr(t.pendingLanes);n!==0&&(Ja(t,n|1),we(t,Q()),!(D&6)&&(Vn=Q()+500,Ht()))}break;case 13:an(function(){var r=ft(e,1);if(r!==null){var i=pe();He(r,e,1,i)}}),Rl(e,1)}};el=function(e){if(e.tag===13){var t=ft(e,134217728);if(t!==null){var n=pe();He(t,e,134217728,n)}Rl(e,134217728)}};jd=function(e){if(e.tag===13){var t=Lt(e),n=ft(e,t);if(n!==null){var r=pe();He(n,e,t,r)}Rl(e,t)}};Md=function(){return F};Dd=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};qs=function(e,t,n){switch(t){case"input":if(Hs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Oo(r);if(!i)throw Error(b(90));hd(r),Hs(r,i)}}}break;case"textarea":md(e,n);break;case"select":t=n.value,t!=null&&In(e,!!n.multiple,t,!1)}};kd=Il;_d=an;var Gm={usingClientEntryPoint:!1,Events:[Zr,wn,Oo,bd,Sd,Il]},ar={findFiberByHostInstance:qt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Km={bundleType:ar.bundleType,version:ar.version,rendererPackageName:ar.rendererPackageName,rendererConfig:ar.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:gt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Id(e),e===null?null:e.stateNode},findFiberByHostInstance:ar.findFiberByHostInstance||$m,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ti=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ti.isDisabled&&Ti.supportsFiber)try{Po=Ti.inject(Km),qe=Ti}catch{}}Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gm;Ee.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ll(t))throw Error(b(200));return Wm(e,t,null,n)};Ee.createRoot=function(e,t){if(!Ll(e))throw Error(b(299));var n=!1,r="",i=sp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Nl(e,1,!1,null,null,n,!1,r,i),e[dt]=t.current,Mr(e.nodeType===8?e.parentNode:e),new Ol(t)};Ee.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(b(188)):(e=Object.keys(e).join(","),Error(b(268,e)));return e=Id(t),e=e===null?null:e.stateNode,e};Ee.flushSync=function(e){return an(e)};Ee.hydrate=function(e,t,n){if(!Ho(t))throw Error(b(200));return Wo(null,e,t,!0,n)};Ee.hydrateRoot=function(e,t,n){if(!Ll(e))throw Error(b(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=sp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=op(t,null,e,1,n??null,i,!1,o,s),e[dt]=t.current,Mr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Bo(t)};Ee.render=function(e,t,n){if(!Ho(t))throw Error(b(200));return Wo(null,e,t,!1,n)};Ee.unmountComponentAtNode=function(e){if(!Ho(e))throw Error(b(40));return e._reactRootContainer?(an(function(){Wo(null,null,e,!1,function(){e._reactRootContainer=null,e[dt]=null})}),!0):!1};Ee.unstable_batchedUpdates=Il;Ee.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ho(n))throw Error(b(200));if(e==null||e._reactInternals===void 0)throw Error(b(38));return Wo(e,t,n,!1,r)};Ee.version="18.3.1-next-f1338f8080-20240426";function ap(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ap)}catch(e){console.error(e)}}ap(),sd.exports=Ee;var Ym=sd.exports,au=Ym;js.createRoot=au.createRoot,js.hydrateRoot=au.hydrateRoot;var qm=typeof Element<"u",Qm=typeof Map=="function",Xm=typeof Set=="function",Zm=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function Bi(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,r,i;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(!Bi(e[r],t[r]))return!1;return!0}var o;if(Qm&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(o=e.entries();!(r=o.next()).done;)if(!t.has(r.value[0]))return!1;for(o=e.entries();!(r=o.next()).done;)if(!Bi(r.value[1],t.get(r.value[0])))return!1;return!0}if(Xm&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(o=e.entries();!(r=o.next()).done;)if(!t.has(r.value[0]))return!1;return!0}if(Zm&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(e[r]!==t[r])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(i=Object.keys(e),n=i.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,i[r]))return!1;if(qm&&e instanceof Element)return!1;for(r=n;r--!==0;)if(!((i[r]==="_owner"||i[r]==="__v"||i[r]==="__o")&&e.$$typeof)&&!Bi(e[i[r]],t[i[r]]))return!1;return!0}return e!==e&&t!==t}var Jm=function(t,n){try{return Bi(t,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const e0=Io(Jm);var t0=function(e,t,n,r,i,o,s,a){if(!e){var l;if(t===void 0)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,i,o,s,a],d=0;l=new Error(t.replace(/%s/g,function(){return u[d++]})),l.name="Invariant Violation"}throw l.framesToPop=1,l}},n0=t0;const lu=Io(n0);var r0=function(t,n,r,i){var o=r?r.call(i,t,n):void 0;if(o!==void 0)return!!o;if(t===n)return!0;if(typeof t!="object"||!t||typeof n!="object"||!n)return!1;var s=Object.keys(t),a=Object.keys(n);if(s.length!==a.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(n),u=0;u<s.length;u++){var d=s[u];if(!l(d))return!1;var h=t[d],g=n[d];if(o=r?r.call(i,h,g,d):void 0,o===!1||o===void 0&&h!==g)return!1}return!0};const i0=Io(r0);var lp=(e=>(e.BASE="base",e.BODY="body",e.HEAD="head",e.HTML="html",e.LINK="link",e.META="meta",e.NOSCRIPT="noscript",e.SCRIPT="script",e.STYLE="style",e.TITLE="title",e.FRAGMENT="Symbol(react.fragment)",e))(lp||{}),_s={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},cu=Object.values(lp),jl={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},o0=Object.entries(jl).reduce((e,[t,n])=>(e[n]=t,e),{}),Ue="data-rh",On={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},Ln=(e,t)=>{for(let n=e.length-1;n>=0;n-=1){const r=e[n];if(Object.prototype.hasOwnProperty.call(r,t))return r[t]}return null},s0=e=>{let t=Ln(e,"title");const n=Ln(e,On.TITLE_TEMPLATE);if(Array.isArray(t)&&(t=t.join("")),n&&t)return n.replace(/%s/g,()=>t);const r=Ln(e,On.DEFAULT_TITLE);return t||r||void 0},a0=e=>Ln(e,On.ON_CHANGE_CLIENT_STATE)||(()=>{}),Es=(e,t)=>t.filter(n=>typeof n[e]<"u").map(n=>n[e]).reduce((n,r)=>({...n,...r}),{}),l0=(e,t)=>t.filter(n=>typeof n.base<"u").map(n=>n.base).reverse().reduce((n,r)=>{if(!n.length){const i=Object.keys(r);for(let o=0;o<i.length;o+=1){const a=i[o].toLowerCase();if(e.indexOf(a)!==-1&&r[a])return n.concat(r)}}return n},[]),c0=e=>console&&typeof console.warn=="function"&&console.warn(e),lr=(e,t,n)=>{const r={};return n.filter(i=>Array.isArray(i[e])?!0:(typeof i[e]<"u"&&c0(`Helmet: ${e} should be of type "Array". Instead found type "${typeof i[e]}"`),!1)).map(i=>i[e]).reverse().reduce((i,o)=>{const s={};o.filter(l=>{let u;const d=Object.keys(l);for(let g=0;g<d.length;g+=1){const y=d[g],v=y.toLowerCase();t.indexOf(v)!==-1&&!(u==="rel"&&l[u].toLowerCase()==="canonical")&&!(v==="rel"&&l[v].toLowerCase()==="stylesheet")&&(u=v),t.indexOf(y)!==-1&&(y==="innerHTML"||y==="cssText"||y==="itemprop")&&(u=y)}if(!u||!l[u])return!1;const h=l[u].toLowerCase();return r[u]||(r[u]={}),s[u]||(s[u]={}),r[u][h]?!1:(s[u][h]=!0,!0)}).reverse().forEach(l=>i.push(l));const a=Object.keys(s);for(let l=0;l<a.length;l+=1){const u=a[l],d={...r[u],...s[u]};r[u]=d}return i},[]).reverse()},u0=(e,t)=>{if(Array.isArray(e)&&e.length){for(let n=0;n<e.length;n+=1)if(e[n][t])return!0}return!1},d0=e=>({baseTag:l0(["href"],e),bodyAttributes:Es("bodyAttributes",e),defer:Ln(e,On.DEFER),encode:Ln(e,On.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:Es("htmlAttributes",e),linkTags:lr("link",["rel","href"],e),metaTags:lr("meta",["name","charset","http-equiv","property","itemprop"],e),noscriptTags:lr("noscript",["innerHTML"],e),onChangeClientState:a0(e),scriptTags:lr("script",["src","innerHTML"],e),styleTags:lr("style",["cssText"],e),title:s0(e),titleAttributes:Es("titleAttributes",e),prioritizeSeoTags:u0(e,On.PRIORITIZE_SEO_TAGS)}),cp=e=>Array.isArray(e)?e.join(""):e,f0=(e,t)=>{const n=Object.keys(e);for(let r=0;r<n.length;r+=1)if(t[n[r]]&&t[n[r]].includes(e[n[r]]))return!0;return!1},Ts=(e,t)=>Array.isArray(e)?e.reduce((n,r)=>(f0(r,t)?n.priority.push(r):n.default.push(r),n),{priority:[],default:[]}):{default:e,priority:[]},uu=(e,t)=>({...e,[t]:void 0}),p0=["noscript","script","style"],Ca=(e,t=!0)=>t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),up=e=>Object.keys(e).reduce((t,n)=>{const r=typeof e[n]<"u"?`${n}="${e[n]}"`:`${n}`;return t?`${t} ${r}`:r},""),h0=(e,t,n,r)=>{const i=up(n),o=cp(t);return i?`<${e} ${Ue}="true" ${i}>${Ca(o,r)}</${e}>`:`<${e} ${Ue}="true">${Ca(o,r)}</${e}>`},g0=(e,t,n=!0)=>t.reduce((r,i)=>{const o=i,s=Object.keys(o).filter(u=>!(u==="innerHTML"||u==="cssText")).reduce((u,d)=>{const h=typeof o[d]>"u"?d:`${d}="${Ca(o[d],n)}"`;return u?`${u} ${h}`:h},""),a=o.innerHTML||o.cssText||"",l=p0.indexOf(e)===-1;return`${r}<${e} ${Ue}="true" ${s}${l?"/>":`>${a}</${e}>`}`},""),dp=(e,t={})=>Object.keys(e).reduce((n,r)=>{const i=jl[r];return n[i||r]=e[r],n},t),m0=(e,t,n)=>{const r={key:t,[Ue]:!0},i=dp(n,r);return[Ye.createElement("title",i,t)]},Hi=(e,t)=>t.map((n,r)=>{const i={key:r,[Ue]:!0};return Object.keys(n).forEach(o=>{const a=jl[o]||o;if(a==="innerHTML"||a==="cssText"){const l=n.innerHTML||n.cssText;i.dangerouslySetInnerHTML={__html:l}}else i[a]=n[o]}),Ye.createElement(e,i)}),Ie=(e,t,n=!0)=>{switch(e){case"title":return{toComponent:()=>m0(e,t.title,t.titleAttributes),toString:()=>h0(e,t.title,t.titleAttributes,n)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>dp(t),toString:()=>up(t)};default:return{toComponent:()=>Hi(e,t),toString:()=>g0(e,t,n)}}},y0=({metaTags:e,linkTags:t,scriptTags:n,encode:r})=>{const i=Ts(e,_s.meta),o=Ts(t,_s.link),s=Ts(n,_s.script);return{priorityMethods:{toComponent:()=>[...Hi("meta",i.priority),...Hi("link",o.priority),...Hi("script",s.priority)],toString:()=>`${Ie("meta",i.priority,r)} ${Ie("link",o.priority,r)} ${Ie("script",s.priority,r)}`},metaTags:i.default,linkTags:o.default,scriptTags:s.default}},v0=e=>{const{baseTag:t,bodyAttributes:n,encode:r=!0,htmlAttributes:i,noscriptTags:o,styleTags:s,title:a="",titleAttributes:l,prioritizeSeoTags:u}=e;let{linkTags:d,metaTags:h,scriptTags:g}=e,y={toComponent:()=>{},toString:()=>""};return u&&({priorityMethods:y,linkTags:d,metaTags:h,scriptTags:g}=y0(e)),{priority:y,base:Ie("base",t,r),bodyAttributes:Ie("bodyAttributes",n,r),htmlAttributes:Ie("htmlAttributes",i,r),link:Ie("link",d,r),meta:Ie("meta",h,r),noscript:Ie("noscript",o,r),script:Ie("script",g,r),style:Ie("style",s,r),title:Ie("title",{title:a,titleAttributes:l},r)}},Pa=v0,Ii=[],fp=!!(typeof window<"u"&&window.document&&window.document.createElement),Aa=class{constructor(e,t){et(this,"instances",[]);et(this,"canUseDOM",fp);et(this,"context");et(this,"value",{setHelmet:e=>{this.context.helmet=e},helmetInstances:{get:()=>this.canUseDOM?Ii:this.instances,add:e=>{(this.canUseDOM?Ii:this.instances).push(e)},remove:e=>{const t=(this.canUseDOM?Ii:this.instances).indexOf(e);(this.canUseDOM?Ii:this.instances).splice(t,1)}}});this.context=e,this.canUseDOM=t||!1,t||(e.helmet=Pa({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},x0={},pp=Ye.createContext(x0),zn,hp=(zn=class extends A.Component{constructor(n){super(n);et(this,"helmetData");this.helmetData=new Aa(this.props.context||{},zn.canUseDOM)}render(){return Ye.createElement(pp.Provider,{value:this.helmetData.value},this.props.children)}},et(zn,"canUseDOM",fp),zn),hn=(e,t)=>{const n=document.head||document.querySelector("head"),r=n.querySelectorAll(`${e}[${Ue}]`),i=[].slice.call(r),o=[];let s;return t&&t.length&&t.forEach(a=>{const l=document.createElement(e);for(const u in a)if(Object.prototype.hasOwnProperty.call(a,u))if(u==="innerHTML")l.innerHTML=a.innerHTML;else if(u==="cssText")l.styleSheet?l.styleSheet.cssText=a.cssText:l.appendChild(document.createTextNode(a.cssText));else{const d=u,h=typeof a[d]>"u"?"":a[d];l.setAttribute(u,h)}l.setAttribute(Ue,"true"),i.some((u,d)=>(s=d,l.isEqualNode(u)))?i.splice(s,1):o.push(l)}),i.forEach(a=>{var l;return(l=a.parentNode)==null?void 0:l.removeChild(a)}),o.forEach(a=>n.appendChild(a)),{oldTags:i,newTags:o}},Na=(e,t)=>{const n=document.getElementsByTagName(e)[0];if(!n)return;const r=n.getAttribute(Ue),i=r?r.split(","):[],o=[...i],s=Object.keys(t);for(const a of s){const l=t[a]||"";n.getAttribute(a)!==l&&n.setAttribute(a,l),i.indexOf(a)===-1&&i.push(a);const u=o.indexOf(a);u!==-1&&o.splice(u,1)}for(let a=o.length-1;a>=0;a-=1)n.removeAttribute(o[a]);i.length===o.length?n.removeAttribute(Ue):n.getAttribute(Ue)!==s.join(",")&&n.setAttribute(Ue,s.join(","))},w0=(e,t)=>{typeof e<"u"&&document.title!==e&&(document.title=cp(e)),Na("title",t)},du=(e,t)=>{const{baseTag:n,bodyAttributes:r,htmlAttributes:i,linkTags:o,metaTags:s,noscriptTags:a,onChangeClientState:l,scriptTags:u,styleTags:d,title:h,titleAttributes:g}=e;Na("body",r),Na("html",i),w0(h,g);const y={baseTag:hn("base",n),linkTags:hn("link",o),metaTags:hn("meta",s),noscriptTags:hn("noscript",a),scriptTags:hn("script",u),styleTags:hn("style",d)},v={},w={};Object.keys(y).forEach(C=>{const{newTags:p,oldTags:f}=y[C];p.length&&(v[C]=p),f.length&&(w[C]=y[C].oldTags)}),t&&t(),l(e,v,w)},cr=null,b0=e=>{cr&&cancelAnimationFrame(cr),e.defer?cr=requestAnimationFrame(()=>{du(e,()=>{cr=null})}):(du(e),cr=null)},S0=b0,fu=class extends A.Component{constructor(){super(...arguments);et(this,"rendered",!1)}shouldComponentUpdate(t){return!i0(t,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:t}=this.props.context;t.remove(this),this.emitChange()}emitChange(){const{helmetInstances:t,setHelmet:n}=this.props.context;let r=null;const i=d0(t.get().map(o=>{const s={...o.props};return delete s.context,s}));hp.canUseDOM?S0(i):Pa&&(r=Pa(i)),n(r)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:t}=this.props.context;t.add(this),this.emitChange()}render(){return this.init(),null}},Ls,k0=(Ls=class extends A.Component{shouldComponentUpdate(e){return!e0(uu(this.props,"helmetData"),uu(e,"helmetData"))}mapNestedChildrenToProps(e,t){if(!t)return null;switch(e.type){case"script":case"noscript":return{innerHTML:t};case"style":return{cssText:t};default:throw new Error(`<${e.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(e,t,n,r){return{...t,[e.type]:[...t[e.type]||[],{...n,...this.mapNestedChildrenToProps(e,r)}]}}mapObjectTypeChildren(e,t,n,r){switch(e.type){case"title":return{...t,[e.type]:r,titleAttributes:{...n}};case"body":return{...t,bodyAttributes:{...n}};case"html":return{...t,htmlAttributes:{...n}};default:return{...t,[e.type]:{...n}}}}mapArrayTypeChildrenToProps(e,t){let n={...t};return Object.keys(e).forEach(r=>{n={...n,[r]:e[r]}}),n}warnOnInvalidChildren(e,t){return lu(cu.some(n=>e.type===n),typeof e.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${cu.join(", ")} are allowed. Helmet does not support rendering <${e.type}> elements. Refer to our API for more information.`),lu(!t||typeof t=="string"||Array.isArray(t)&&!t.some(n=>typeof n!="string"),`Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(e,t){let n={};return Ye.Children.forEach(e,r=>{if(!r||!r.props)return;const{children:i,...o}=r.props,s=Object.keys(o).reduce((l,u)=>(l[o0[u]||u]=o[u],l),{});let{type:a}=r;switch(typeof a=="symbol"?a=a.toString():this.warnOnInvalidChildren(r,i),a){case"Symbol(react.fragment)":t=this.mapChildrenToProps(i,t);break;case"link":case"meta":case"noscript":case"script":case"style":n=this.flattenArrayTypeChildren(r,n,s,i);break;default:t=this.mapObjectTypeChildren(r,t,s,i);break}}),this.mapArrayTypeChildrenToProps(n,t)}render(){const{children:e,...t}=this.props;let n={...t},{helmetData:r}=t;if(e&&(n=this.mapChildrenToProps(e,n)),r&&!(r instanceof Aa)){const i=r;r=new Aa(i.context,!0),delete n.helmetData}return r?Ye.createElement(fu,{...n,context:r.value}):Ye.createElement(pp.Consumer,null,i=>Ye.createElement(fu,{...n,context:i}))}},et(Ls,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),Ls);const te={primary:"#0ea5e9",primaryDark:"#0284c7",primaryLight:"#38bdf8",primaryGlow:"rgba(14, 165, 233, 0.35)",primaryFaint:"rgba(14, 165, 233, 0.08)",accent:"#06b6d4",accentDark:"#0891b2",green:"#16a34a",greenLight:"#22c55e",red:"#ef4444",grad:"linear-gradient(135deg, #0284c7 0%, #06b6d4 100%)",gradHero:"linear-gradient(135deg, #0369a1 0%, #0891b2 100%)",gradAnimated:"linear-gradient(270deg, #0284c7, #06b6d4, #0ea5e9, #38bdf8)",bgLight:"#ffffff",surfLight:"#f0f9ff",surfLight2:"#e0f2fe",borderLight:"#cbd5e1",textLight:"#0f172a",textMidLight:"#475569",textDimLight:"#94a3b8",bgDark:"#020617",surfDark:"#0f172a",surfDark2:"#1e293b",borderDark:"#334155",textDark:"#f1f5f9",textMidDark:"#94a3b8",textDimDark:"#64748b",fontDisplay:"'DM Sans', 'Inter', system-ui, sans-serif",fontBody:"'DM Sans', 'Inter', system-ui, sans-serif",radiusSm:"6px",radiusMd:"10px",radiusLg:"14px",radiusXl:"20px",radiusCard:"16px",shadowSm:"0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06)",shadowMd:"0 4px 12px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.06)",shadowLg:"0 12px 32px rgba(0,0,0,0.10), 0 4px 8px rgba(0,0,0,0.06)",shadowXl:"0 20px 48px rgba(0,0,0,0.14), 0 8px 16px rgba(0,0,0,0.08)"},gp=e=>({bg:e?te.bgDark:te.bgLight,surf:e?te.surfDark:te.surfLight,surf2:e?te.surfDark2:te.surfLight2,border:e?te.borderDark:te.borderLight,text:e?te.textDark:te.textLight,textMid:e?te.textMidDark:te.textMidLight,textDim:e?te.textDimDark:te.textDimLight}),_0={en:{heroTitle:"Classic Printing.",heroTitle2:"Modern Precision.",heroSub:"Trusted printing & finishing services in Delhi since 1995",yearsActive:"30+ YEARS ACTIVE",booksPrinted:"50K+ BOOKS PRINTED",happyClients:"500+ HAPPY CLIENTS",heroTrust:"Trusted by publishers across Delhi since 1995 - Dilshad Garden",productsEyebrow:"What we offer",productsTitle:"Our Printing Services",productsIntro:"Specialising in high-quality bulk book printing and professional lamination services. We use premium Fevicol-based adhesives, serving publishers, authors, and businesses across Delhi.",productBulkTitle:"Bulk Book Printing",productBulkDesc:"High-volume printing for publishers, authors, and institutions. Consistent quality across thousands of copies — textbooks, novels, catalogs, and manuals.",productThermalTitle:"Thermal Gloss Lamination",productThermalDesc:"Premium gloss lamination using Fevicol-based adhesives. A shiny, protective finish that makes colours pop and stands up to daily handling.",productMatteTitle:"Matte Lamination",productMatteDesc:"Sophisticated, non-reflective finish using Fevicol-based adhesives. The go-to for premium covers that need to feel as good as they look.",productSoftTouchTitle:"Soft-Touch Lamination",productSoftTouchDesc:"Velvety, luxurious texture that turns every printed piece into an experience. Ideal for book covers, premium brochures, and collector's editions.",productTitlePrintingTitle:"Title Printing",productTitlePrintingDesc:"Custom title work for book spines, special-edition covers, and branded collateral. Every detail crafted to make your title unforgettable.",galleryEyebrow:"Our Machinery",galleryTitle:"Built for",galleryTitleEm:"Precision",galleryDesc:"World-class Heidelberg and Akiyama equipment — engineered for flawless output, maximum throughput, and zero compromise on quality.",galleryYouTubeText:"Want to see these machines in action? Watch live demos on our",machineCategoryOffset:"Offset Printing",machineCategoryPlate:"Plate Making",machineCategoryLamination:"Lamination",machineCategoryFinishing:"Finishing",machineTagFlagship:"Flagship",machineTagIndustryLeader:"Industry Leader",machineTagAlcoholDamped:"Alcohol-Damped",machineTagAutomated:"Automated",machineTagHighSpeed:"High-Speed",machineTagUltraPrecise:"Ultra Precise",machineHeidelbergSpeedmasterDesc:"The Heidelberg Speedmaster — the world's most trusted multicolour press. Engineered for peak performance with cutting-edge Intellistart technology, delivering unmatched print quality at production speeds that set the industry standard.",machineHeidelbergPrintingDesc:"State-of-the-art Heidelberg — a benchmark in precision engineering. From single-colour to complex multi-colour projects, automated controls, fast plate changes, and flawless registration deliver superior output trusted by professionals worldwide.",machineAkiyamaDesc:"Akiyama alcohol-damped 4-colour press — size 19×26 inches. Alcohol damping system provides superior ink-water balance for exceptional dot gain control and vivid, consistent colour across the entire sheet.",machineAutoplateDesc:"Fully automated plate-loading system that eliminates manual handling errors. Reduces makeready time significantly, ensuring consistent plate registration and faster job turnaround for demanding print environments.",machineSORDZDesc:"Heidelberg SORDZ 2-colour offset printing machine. Sheet size 25×36 inches — perfectly balanced for medium-format commercial work. Renowned for its robust build and consistent colour reproduction across long runs.",machineThermalLaminationDesc:"Industrial-grade thermal lamination delivering flawless gloss and matte finishes using Fevicol-based adhesives. Handles high volumes with precision heat control for bubble-free, scratch-resistant results every time.",machinePaperCutterDesc:"Automatic paper cutter delivering precise and flawless cuts at incredible speed. Ideal for high-volume printing and paper processing, this machine ensures efficiency and accuracy in every cut — streamlining workflow and maximising productivity.",machineSpec4Colour:"Up to 4-colour",machineSpecMultiColour:"Multi-colour output",machineSpec19x26:"Size: 19×26 in",machineSpecAutoPlate:"Auto plate loading",machineSpec25x36:"Size: 25×36 in",machineSpecAccuracy:"±0.01mm accuracy",machineSpecHighVolume:"High-volume ready",woTitle:"WEB OFFSET PRINTING",woTagline:"SPEED. SCALE. PRECISION.",woHeroTitle:"Built for High-Volume Excellence",woHeroDesc:"Web offset printing is designed for non-stop production, and at BK Offset Printing, speed is only the beginning. Our advanced multi-colour rotary presses deliver consistent quality at exceptional speeds, making them ideal for magazines, catalogues, brochures, inserts, and promotional publications produced in large volumes.",woHeroDesc2:"Every rotation combines power, stability, and accuracy, ensuring sharp images and uniform colour reproduction—even across millions of impressions.",woPerfTitle:"Performance That Goes Beyond Printing",woPerfDesc:"Our web offset systems are equipped with integrated inline finishing, allowing multiple processes to happen in a single run. This means faster turnaround times and flawless results.",woPerfList:["UV & protective varnishing","Punching and perforation (portrait & landscape)","Folding (standard to creative formats)","Gluing and binding preparation","Custom finishing solutions for special publications"],woPerfFoot:"This seamless workflow helps us deliver ready-to-use printed products with unmatched efficiency.",woEnvTitle:"High Speed. Lower Environmental Impact.",woEnvDesc:"Powerful machines don't have to waste resources. Our web offset operations are engineered to be energy-efficient and environmentally responsible.",woEnvList:["Energy consumption","Material waste","Production downtime"],woEnvFoot:"This allows us to combine high productivity with sustainable practices, even during 24/7 production cycles.",woSusTitle:"Responsible Printing for a Sustainable Future",woSusDesc:"Environmental care is built into every stage of our process.",woSusList:["Low-energy drying technology to minimize fuel usage","Alcohol-free printing processes","Avoidance of harmful volatile solvents","Use of eco-friendly inks and consumables","Strict paper waste segregation and recycling"],woSusFoot:"All paper waste is carefully collected and returned to manufacturers for reuse—supporting a closed-loop recycling system.",visit:"Visit Our Press",locationEyebrow:"Find Us",locationTitle:"Visit Our",locationTitleEm:"Press",locationDesc:"Come see our machines in person. We welcome publishers, authors, and businesses for a live demonstration.",locationAddressLabel:"Address",locationAddress:"Street No. 2, Zulfe Bengal, Dilshad Garden, Delhi – 110095",locationCopyAddress:"Copy address",locationCopied:"Copied!",locationHoursLabel:"Working Hours",locationHoursMonSun:"Monday – Sunday",locationHoursTime:"10:00 AM – 6:00 PM",locationTuesday:"Tuesday",locationClosed:"Closed",locationGetDirections:"Get Directions",locationOpenInMaps:"Open in Google Maps",signIn:"Sign In",signInTitle:"Welcome Back",register:"Register",registerTitle:"Create Account",emailLabel:"Email",passwordLabel:"Password",firstNameLabel:"First Name",lastNameLabel:"Last Name",continueWithGoogle:"Continue with Google",processing:"Processing...",forgotPassword:"Forgot Password?",noAccount:"Don't have an account?",haveAccount:"Already have an account?",footerTagline:"Trusted by publishers across Delhi since 1995 - Dilshad Garden",copyright:"© BK Offset Printing. All rights reserved."},hi:{heroTitle:"क्लासिक प्रिंटिंग।",heroTitle2:"आधुनिक गुणवत्ता।",heroSub:"1995 से दिल्ली में भरोसेमंद प्रिंटिंग सेवाएँ",yearsActive:"30+ वर्ष सक्रिय",booksPrinted:"50K+ पुस्तकें मुद्रित",happyClients:"500+ संतुष्ट ग्राहक",heroTrust:"1995 से दिल्ली के प्रकाशकों द्वारा विश्वसनीय - दिलशाद गार्डन",productsEyebrow:"हमारी पेशकश",productsTitle:"हमारी प्रिंटिंग सेवाएँ",productsIntro:"उच्च गुणवत्ता वाली बल्क बुक प्रिंटिंग और पेशेवर लेमिनेशन सेवाओं में विशेषज्ञता। हम प्रीमियम फेविकॉल-आधारित चिपकने वाले पदार्थों का उपयोग करते हैं, जो दिल्ली भर के प्रकाशकों, लेखकों और व्यवसायों की सेवा करते हैं।",productBulkTitle:"बल्क बुक प्रिंटिंग",productBulkDesc:"प्रकाशकों, लेखकों और संस्थानों के लिए उच्च-मात्रा मुद्रण। हजारों प्रतियों में लगातार गुणवत्ता — पाठ्यपुस्तकें, उपन्यास, कैटलॉग और मैनुअल।",productThermalTitle:"थर्मल ग्लॉस लेमिनेशन",productThermalDesc:"फेविकॉल-आधारित चिपकने वाले पदार्थों का उपयोग कर प्रीमियम ग्लॉस लेमिनेशन। एक चमकदार, सुरक्षात्मक फिनिश जो रंगों को जीवंत बनाती है और दैनिक उपयोग को सहन करती है।",productMatteTitle:"मैट लेमिनेशन",productMatteDesc:"फेविकॉल-आधारित चिपकने वाले पदार्थों का उपयोग कर परिष्कृत, गैर-चिंतनशील फिनिश। प्रीमियम कवर के लिए आदर्श जो दिखने में उतने ही अच्छे लगते हैं जितना वे महसूस होते हैं।",productSoftTouchTitle:"सॉफ्ट-टच लेमिनेशन",productSoftTouchDesc:"मखमली, शानदार बनावट जो हर मुद्रित टुकड़े को एक अनुभव में बदल देती है। पुस्तक कवर, प्रीमियम ब्रोशर और कलेक्टर के संस्करणों के लिए आदर्श।",productTitlePrintingTitle:"टाइटल प्रिंटिंग",productTitlePrintingDesc:"पुस्तक रीढ़, विशेष-संस्करण कवर और ब्रांडेड कोलेटरल के लिए कस्टम टाइटल कार्य। हर विवरण आपके शीर्षक को अविस्मरणीय बनाने के लिए तैयार किया गया है।",galleryEyebrow:"हमारी मशीनरी",galleryTitle:"के लिए निर्मित",galleryTitleEm:"परिशुद्धता",galleryDesc:"विश्व स्तरीय हीडलबर्ग और अकियामा उपकरण — दोषरहित आउटपुट, अधिकतम थ्रूपुट और गुणवत्ता पर शून्य समझौता के लिए इंजीनियर किए गए।",galleryYouTubeText:"इन मशीनों को क्रियाशील देखना चाहते हैं? हमारे पर लाइव डेमो देखें",machineCategoryOffset:"ऑफसेट प्रिंटिंग",machineCategoryPlate:"प्लेट मेकिंग",machineCategoryLamination:"लेमिनेशन",machineCategoryFinishing:"फिनिशिंग",machineTagFlagship:"फ्लैगशिप",machineTagIndustryLeader:"उद्योग नेता",machineTagAlcoholDamped:"अल्कोहल-डैम्प्ड",machineTagAutomated:"स्वचालित",machineTagHighSpeed:"हाई-स्पीड",machineTagUltraPrecise:"अल्ट्रा प्रिसाइज",machineHeidelbergSpeedmasterDesc:"हीडलबर्ग स्पीडमास्टर — दुनिया का सबसे भरोसेमंद मल्टीकलर प्रेस। अत्याधुनिक इंटेलिस्टार्ट तकनीक के साथ पीक परफॉर्मेंस के लिए इंजीनियर किया गया, अद्वितीय प्रिंट गुणवत्ता प्रदान करता है।",machineHeidelbergPrintingDesc:"अत्याधुनिक हीडलबर्ग — सटीक इंजीनियरिंग में एक बेंचमार्क। सिंगल-कलर से लेकर जटिल मल्टी-कलर प्रोजेक्ट्स तक, स्वचालित नियंत्रण, तेज़ प्लेट परिवर्तन, और दोषरहित रजिस्ट्रेशन बेहतर आउटपुट प्रदान करते हैं।",machineAkiyamaDesc:"अकियामा अल्कोहल-डैम्प्ड 4-कलर प्रेस — साइज़ 19×26 इंच। अल्कोहल डैम्पिंग सिस्टम बेहतर इंक-वॉटर बैलेंस प्रदान करता है, पूरी शीट पर जीवंत, सुसंगत रंग देता है।",machineAutoplateDesc:"पूरी तरह से स्वचालित प्लेट-लोडिंग सिस्टम जो मैनुअल हैंडलिंग त्रुटियों को समाप्त करता है। मेकरेडी समय को काफी कम करता है, लगातार प्लेट रजिस्ट्रेशन सुनिश्चित करता है।",machineSORDZDesc:"हीडलबर्ग SORDZ 2-कलर ऑफसेट प्रिंटिंग मशीन। शीट साइज़ 25×36 इंच — मध्यम-प्रारूप व्यावसायिक कार्य के लिए पूरी तरह से संतुलित। अपने मजबूत निर्माण और लंबे रनों में लगातार रंग प्रजनन के लिए प्रसिद्ध।",machineThermalLaminationDesc:"औद्योगिक-ग्रेड थर्मल लेमिनेशन, फेविकॉल-आधारित चिपकने वाले पदार्थों का उपयोग करके दोषरहित ग्लॉस और मैट फिनिश प्रदान करता है। प्रिसिजन हीट कंट्रोल के साथ उच्च मात्रा को संभालता है।",machinePaperCutterDesc:"स्वचालित पेपर कटर अविश्वसनीय गति पर सटीक और दोषरहित कटौती प्रदान करता है। उच्च-मात्रा प्रिंटिंग और पेपर प्रोसेसिंग के लिए आदर्श।",machineSpec4Colour:"4-कलर तक",machineSpecMultiColour:"मल्टी-कलर आउटपुट",machineSpec19x26:"साइज़: 19×26 इंच",machineSpecAutoPlate:"ऑटो प्लेट लोडिंग",machineSpec25x36:"साइज़: 25×36 इंच",machineSpecAccuracy:"±0.01mm सटीकता",machineSpecHighVolume:"हाई-वॉल्यूम रेडी",woTitle:"वेब ऑफ़्सेट प्रिंटिंग",woTagline:"गति। पैमाना। सटीकता।",woHeroTitle:"हाई-वॉल्यूम एक्सलेंस के लिए बनाया गया",woHeroDesc:"वेब ऑफ़्सेट प्रिंटिंग बिना रुके प्रोडक्शन के लिए डिज़ाइन किया गया है। हमारे उन्नत मल्टी-कलर रोटरी प्रेस असाधारण गति पर लगातार गुणवत्ता प्रदान करते हैं, जो उन्हें पत्रिकाओं, कैटलॉग, ब्रोशर और प्रचार प्रकाशनों के लिए आदर्श बनाता है।",woHeroDesc2:"हर रोटेशन पॉवर, स्टेबिलिटी और एक्यूरेसी को जोड़ता है, लाखों इंप्रेशन में भी शार्प इमेज और यूनिफॉर्म कलर रिप्रोडक्शन सुनिश्चित करता है।",woPerfTitle:"प्रिंटिंग से आगे की पर्फॉर्मेंस",woPerfDesc:"हमारे वेब ऑफ़्सेट सिस्टम इंटीग्रेटेड इनलाइन फिनिशिंग से लैस हैं, जो एक ही रन में कई प्रक्रियाओं को होने देते हैं। इसका मतलब है तेज़ टर्नअराउंड समय और दोषरहित परिणाम।",woPerfList:["UV और प्रोटेक्टिव वार्निशिंग","पंचिंग और पर्फोरेशन (पोर्ट्रेट और लैंडस्केप)","फोल्डिंग (स्टैंडर्ड से क्रिएटिव फॉर्मेट)","ग्लुइंग और बाइंडिंग प्रेपरेशन","स्पेशल पब्लिकेशन के लिए कस्टम फिनिशिंग सॉल्यूशंस"],woPerfFoot:"यह सीमलेस वर्कफ़लो हमें रेडी-टू-यूज़ प्रिंटेड प्रोडक्ट्स अद्वितीय दक्षता के साथ डिलीवर करने में मदद करता है।",woEnvTitle:"हाई स्पीड। कम पर्यावरणीय प्रभाव।",woEnvDesc:"हमारे वेब ऑफ़्सेट ऑपरेशन ऊर्जा-कुशल और पर्यावरण के प्रति जिम्मेदार होने के लिए इंजीनियर किए गए हैं।",woEnvList:["ऊर्जा खपत","सामग्री अपशिष्ट","प्रोडक्शन डाउनटाइम"],woEnvFoot:"यह हमें 24/7 प्रोडक्शन साइकिल के दौरान भी उच्च उत्पादकता को सस्टेनेबल प्रैक्टिसेज़ के साथ संयोजित करने की अनुमति देता है।",woSusTitle:"सस्टेनेबल फ्यूचर के लिए जिम्मेदार प्रिंटिंग",woSusDesc:"पर्यावरण देखभाल हमारी प्रक्रिया के हर चरण में बनाई गई है।",woSusList:["लो-एनर्जी ड्राइंग टेक्नोलॉजी","अल्कोहल-फ्री प्रिंटिंग प्रोसेस","हानिकारक वाष्पशील सॉल्वैंट्स से बचाव","इको-फ्रेंडली इंक्स और उपभोग्य सामग्रियों का उपयोग","सख्त पेपर वेस्ट सेग्रीगेशन और रिसाइक्लिंग"],woSusFoot:"सभी पेपर वेस्ट को सावधानीपूर्वक एकत्र किया जाता है और पुन: उपयोग के लिए निर्माताओं को लौटाया जाता है — एक क्लोज्ड-लूप रिसाइक्लिंग सिस्टम का समर्थन करता है।",visit:"हमारा प्रेस देखें",locationEyebrow:"हमें ढूंढें",locationTitle:"हमारा",locationTitleEm:"प्रेस",locationDesc:"हमारी मशीनों को व्यक्तिगत रूप से देखने आएं। हम प्रकाशकों, लेखकों और व्यवसायों का लाइव प्रदर्शन के लिए स्वागत करते हैं।",locationAddressLabel:"पता",locationAddress:"स्ट्रीट नंबर 2, जुल्फे बंगाल, दिलशाद गार्डन, दिल्ली – 110095",locationCopyAddress:"पता कॉपी करें",locationCopied:"कॉपी हो गया!",locationHoursLabel:"कार्य के घंटे",locationHoursMonSun:"सोमवार – रविवार",locationHoursTime:"सुबह 10:00 – शाम 6:00",locationTuesday:"मंगलवार",locationClosed:"बंद",locationGetDirections:"दिशा-निर्देश प्राप्त करें",locationOpenInMaps:"गूगल मैप्स में खोलें",signIn:"साइन इन",signInTitle:"वापस स्वागत है",register:"रजिस्टर",registerTitle:"खाता बनाएँ",emailLabel:"ईमेल",passwordLabel:"पासवर्ड",firstNameLabel:"पहला नाम",lastNameLabel:"अंतिम नाम",continueWithGoogle:"गूगल के साथ जारी रखें",processing:"प्रोसेसिंग...",forgotPassword:"पासवर्ड भूल गए?",noAccount:"खाता नहीं है?",haveAccount:"पहले से ही खाता है?",footerTagline:"1995 से दिल्ली के प्रकाशकों द्वारा विश्वसनीय - दिलशाद गार्डन",copyright:"© बीके ऑफसेट प्रिंटिंग। सर्वाधिकार सुरक्षित।"}},E0="+91-9560959039",T0="https://wa.me/919560959039",I0=50,pu={THEME:"bk_theme",USER:"bk_user",LANG:"bk_lang"},C0=["https://imgs.search.brave.com/d-BxVJB0AVwv7mytORTSGUxHpqMjhHtXeMTPvJqZIPA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/eW91dHViZS5jb20v/dmkvODB6X0hUbVRs/ZDQvaHFkZWZhdWx0/LmpwZw","https://imgs.search.brave.com/HXs3SA9y5tqE3-KGyiE53BmUGqKZaxqNbzgADA568tU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/eW91dHViZS5jb20v/dmkvQy0xaEdEd21a/WEkvaHFkZWZhdWx0/LmpwZw","https://imgs.search.brave.com/8sgKubUmPoPQfFSODo5PPaOi7AUVqGw_TIS14-PxwQE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9wcmVz/cy1wcmludGluZy1w/cmludHNob3Atb2Zm/c2V0LTE2OTMxMzI2/LmpwZw","https://imgs.search.brave.com/prJNhXtQjZFHiNNQsg6lEPcAheXrDNlY1szXvRBQlCo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTg1/Mjc3MDY5L3Bob3Rv/L29mZnNldC1wcmlu/dGluZy1tYWNoaW5l/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz10aHF3cWl2ellU/SEtCdzBxYzgtODBM/UFVvX1AxVHlaMExq/bHQ0RDlhdm0wPQ","https://imgs.search.brave.com/GT4miD1XayG3oiBz9XsPpJ26JFAv4R1pj4j1e_8rwt0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE5/ODg1OTczL3Bob3Rv/L3BvbHlncmFwaGlj/LXByb2Nlc3MuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPVp0/NVE3VnpGREJwX1Nj/Z0d5ZVRRTHprRFNO/MUJ1aS1xaV96eW9N/dzl2TEk9","https://imgs.search.brave.com/W3t3GjUQl9eULJkzTE2O694CXodPY8Jn1OZCXSBBGNU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE5/ODI1NjM0My9waG90/by9wYXBlci10cmlt/bWluZy1vbi1hLWd1/aWxsb3RpbmUtcHJp/bnRpbmctaG91c2Ut/Y3V0dGVyLWZvci1j/dXR0aW5nLXBhcGVy/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz0tZlBQRmZpLXBH/Nnp1Q2lyTUxwcUxD/UkdFQV91NE1sNTZu/UXUtTVlRcTRBPQ","https://imgs.search.brave.com/3zVRqhp8m_8bPZQUGAFEZ8pl7YQlHdzqJmMLi0g1SzI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bWFjaGluZXNlZWtl/ci5jb20vZGF0YS9s/aXN0aW5nL2ltZy92/Z2EvbXMvNTEvNTYv/MjEwNzgyMTItMDgu/anBnP3Y9MTc2OTUw/NDA5NA","https://imgs.search.brave.com/jIEpK8ZUTWenoD4ppVVn1tb3GOdOfbNmJ50jcNh10QQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTc0/OTE0OTM4L3Bob3Rv/L2hlYXZ5LWR1dHkt/cGFwZXItZ3VpbGxv/dGluZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9cV82YWEt/djlqQkFYWGdKekNx/bGRrbWkzaFZUSW5m/X1l6MUd2R01EN0E3/WT0"];function P0(){const[e,t]=A.useState(()=>sessionStorage.getItem(pu.THEME)||"light"),n=()=>{const r=e==="light"?"dark":"light";t(r),sessionStorage.setItem(pu.THEME,r)};return A.useEffect(()=>{document.documentElement.setAttribute("data-theme",e)},[e]),{theme:e,toggleTheme:n,isDark:e==="dark"}}const mp=A.createContext();function A0({children:e}){const t=P0();return c.jsx(mp.Provider,{value:t,children:e})}function hu(){return A.useContext(mp)}/**
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
 */const yp=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},N0=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return t.join("")},vp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],s=i+1<e.length,a=s?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,d=o>>2,h=(o&3)<<4|a>>4;let g=(a&15)<<2|u>>6,y=u&63;l||(y=64,s||(g=64)),r.push(n[d],n[h],n[g],n[y])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(yp(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):N0(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const h=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||a==null||u==null||h==null)throw new R0;const g=o<<2|a>>4;if(r.push(g),u!==64){const y=a<<4&240|u>>2;if(r.push(y),h!==64){const v=u<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class R0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const O0=function(e){const t=yp(e);return vp.encodeByteArray(t,!0)},xp=function(e){return O0(e).replace(/\./g,"")},wp=function(e){try{return vp.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function L0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const j0=()=>L0().__FIREBASE_DEFAULTS__,M0=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},D0=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&wp(e[1]);return t&&JSON.parse(t)},Ml=()=>{try{return j0()||M0()||D0()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},z0=e=>{var t,n;return(n=(t=Ml())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},bp=()=>{var e;return(e=Ml())===null||e===void 0?void 0:e.config},Sp=e=>{var t;return(t=Ml())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class F0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function de(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function U0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(de())}function B0(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function H0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function W0(){const e=de();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function $0(){try{return typeof indexedDB=="object"}catch{return!1}}function V0(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}/**
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
 */const G0="FirebaseError";class Wt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=G0,Object.setPrototypeOf(this,Wt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ei.prototype.create)}}class ei{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],s=o?K0(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new Wt(i,a,r)}}function K0(e,t){return e.replace(Y0,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Y0=/\{\$([^}]+)}/g;function q0(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function vo(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],s=t[i];if(gu(o)&&gu(s)){if(!vo(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function gu(e){return e!==null&&typeof e=="object"}/**
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
 */function ti(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function gr(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(o)}}),t}function mr(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function Q0(e,t){const n=new X0(e,t);return n.subscribe.bind(n)}class X0{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Z0(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Is),i.error===void 0&&(i.error=Is),i.complete===void 0&&(i.complete=Is);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Z0(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Is(){}/**
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
 */function je(e){return e&&e._delegate?e._delegate:e}class Gn{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Yt="[DEFAULT]";/**
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
 */class J0{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new F0;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(ty(t))try{this.getOrInitializeService({instanceIdentifier:Yt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=Yt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Yt){return this.instances.has(t)}getOptions(t=Yt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&t(s,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ey(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Yt){return this.component?this.component.multipleInstances?t:Yt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ey(e){return e===Yt?void 0:e}function ty(e){return e.instantiationMode==="EAGER"}/**
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
 */class ny{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new J0(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var U;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(U||(U={}));const ry={debug:U.DEBUG,verbose:U.VERBOSE,info:U.INFO,warn:U.WARN,error:U.ERROR,silent:U.SILENT},iy=U.INFO,oy={[U.DEBUG]:"log",[U.VERBOSE]:"log",[U.INFO]:"info",[U.WARN]:"warn",[U.ERROR]:"error"},sy=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=oy[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class kp{constructor(t){this.name=t,this._logLevel=iy,this._logHandler=sy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in U))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?ry[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,U.DEBUG,...t),this._logHandler(this,U.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,U.VERBOSE,...t),this._logHandler(this,U.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,U.INFO,...t),this._logHandler(this,U.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,U.WARN,...t),this._logHandler(this,U.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,U.ERROR,...t),this._logHandler(this,U.ERROR,...t)}}const ay=(e,t)=>t.some(n=>e instanceof n);let mu,yu;function ly(){return mu||(mu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function cy(){return yu||(yu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _p=new WeakMap,Ra=new WeakMap,Ep=new WeakMap,Cs=new WeakMap,Dl=new WeakMap;function uy(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(Mt(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&_p.set(n,e)}).catch(()=>{}),Dl.set(t,e),t}function dy(e){if(Ra.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});Ra.set(e,t)}let Oa={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Ra.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Ep.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function fy(e){Oa=e(Oa)}function py(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Ps(this),t,...n);return Ep.set(r,t.sort?t.sort():[t]),Mt(r)}:cy().includes(e)?function(...t){return e.apply(Ps(this),t),Mt(_p.get(this))}:function(...t){return Mt(e.apply(Ps(this),t))}}function hy(e){return typeof e=="function"?py(e):(e instanceof IDBTransaction&&dy(e),ay(e,ly())?new Proxy(e,Oa):e)}function Mt(e){if(e instanceof IDBRequest)return uy(e);if(Cs.has(e))return Cs.get(e);const t=hy(e);return t!==e&&(Cs.set(e,t),Dl.set(t,e)),t}const Ps=e=>Dl.get(e);function gy(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=Mt(s);return r&&s.addEventListener("upgradeneeded",l=>{r(Mt(s.result),l.oldVersion,l.newVersion,Mt(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const my=["get","getKey","getAll","getAllKeys","count"],yy=["put","add","delete","clear"],As=new Map;function vu(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(As.get(t))return As.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=yy.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||my.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return As.set(t,o),o}fy(e=>({...e,get:(t,n,r)=>vu(t,n)||e.get(t,n,r),has:(t,n)=>!!vu(t,n)||e.has(t,n)}));/**
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
 */class vy{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(xy(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function xy(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const La="@firebase/app",xu="0.9.27";/**
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
 */const ln=new kp("@firebase/app"),wy="@firebase/app-compat",by="@firebase/analytics-compat",Sy="@firebase/analytics",ky="@firebase/app-check-compat",_y="@firebase/app-check",Ey="@firebase/auth",Ty="@firebase/auth-compat",Iy="@firebase/database",Cy="@firebase/database-compat",Py="@firebase/functions",Ay="@firebase/functions-compat",Ny="@firebase/installations",Ry="@firebase/installations-compat",Oy="@firebase/messaging",Ly="@firebase/messaging-compat",jy="@firebase/performance",My="@firebase/performance-compat",Dy="@firebase/remote-config",zy="@firebase/remote-config-compat",Fy="@firebase/storage",Uy="@firebase/storage-compat",By="@firebase/firestore",Hy="@firebase/firestore-compat",Wy="firebase",$y="10.8.0";/**
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
 */const ja="[DEFAULT]",Vy={[La]:"fire-core",[wy]:"fire-core-compat",[Sy]:"fire-analytics",[by]:"fire-analytics-compat",[_y]:"fire-app-check",[ky]:"fire-app-check-compat",[Ey]:"fire-auth",[Ty]:"fire-auth-compat",[Iy]:"fire-rtdb",[Cy]:"fire-rtdb-compat",[Py]:"fire-fn",[Ay]:"fire-fn-compat",[Ny]:"fire-iid",[Ry]:"fire-iid-compat",[Oy]:"fire-fcm",[Ly]:"fire-fcm-compat",[jy]:"fire-perf",[My]:"fire-perf-compat",[Dy]:"fire-rc",[zy]:"fire-rc-compat",[Fy]:"fire-gcs",[Uy]:"fire-gcs-compat",[By]:"fire-fst",[Hy]:"fire-fst-compat","fire-js":"fire-js",[Wy]:"fire-js-all"};/**
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
 */const xo=new Map,Ma=new Map;function Gy(e,t){try{e.container.addComponent(t)}catch(n){ln.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Vr(e){const t=e.name;if(Ma.has(t))return ln.debug(`There were multiple attempts to register component ${t}.`),!1;Ma.set(t,e);for(const n of xo.values())Gy(n,e);return!0}function Tp(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const Ky={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Dt=new ei("app","Firebase",Ky);/**
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
 */class Yy{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Gn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Dt.create("app-deleted",{appName:this._name})}}/**
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
 */const ni=$y;function Ip(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ja,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Dt.create("bad-app-name",{appName:String(i)});if(n||(n=bp()),!n)throw Dt.create("no-options");const o=xo.get(i);if(o){if(vo(n,o.options)&&vo(r,o.config))return o;throw Dt.create("duplicate-app",{appName:i})}const s=new ny(i);for(const l of Ma.values())s.addComponent(l);const a=new Yy(n,r,s);return xo.set(i,a),a}function qy(e=ja){const t=xo.get(e);if(!t&&e===ja&&bp())return Ip();if(!t)throw Dt.create("no-app",{appName:e});return t}function jn(e,t,n){var r;let i=(r=Vy[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${t}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ln.warn(a.join(" "));return}Vr(new Gn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const Qy="firebase-heartbeat-database",Xy=1,Gr="firebase-heartbeat-store";let Ns=null;function Cp(){return Ns||(Ns=gy(Qy,Xy,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Gr)}catch(n){console.warn(n)}}}}).catch(e=>{throw Dt.create("idb-open",{originalErrorMessage:e.message})})),Ns}async function Zy(e){try{const n=(await Cp()).transaction(Gr),r=await n.objectStore(Gr).get(Pp(e));return await n.done,r}catch(t){if(t instanceof Wt)ln.warn(t.message);else{const n=Dt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ln.warn(n.message)}}}async function wu(e,t){try{const r=(await Cp()).transaction(Gr,"readwrite");await r.objectStore(Gr).put(t,Pp(e)),await r.done}catch(n){if(n instanceof Wt)ln.warn(n.message);else{const r=Dt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ln.warn(r.message)}}}function Pp(e){return`${e.name}!${e.options.appId}`}/**
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
 */const Jy=1024,e1=30*24*60*60*1e3;class t1{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new r1(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=bu();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const a=new Date(s.date).valueOf();return Date.now()-a<=e1}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=bu(),{heartbeatsToSend:r,unsentEntries:i}=n1(this._heartbeatsCache.heartbeats),o=xp(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function bu(){return new Date().toISOString().substring(0,10)}function n1(e,t=Jy){const n=[];let r=e.slice();for(const i of e){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),Su(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Su(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class r1{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $0()?V0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Zy(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return wu(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return wu(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Su(e){return xp(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function i1(e){Vr(new Gn("platform-logger",t=>new vy(t),"PRIVATE")),Vr(new Gn("heartbeat",t=>new t1(t),"PRIVATE")),jn(La,xu,e),jn(La,xu,"esm2017"),jn("fire-js","")}i1("");var o1="firebase",s1="10.8.0";/**
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
 */jn(o1,s1,"app");function zl(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Ap(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const a1=Ap,Np=new ei("auth","Firebase",Ap());/**
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
 */const wo=new kp("@firebase/auth");function l1(e,...t){wo.logLevel<=U.WARN&&wo.warn(`Auth (${ni}): ${e}`,...t)}function Wi(e,...t){wo.logLevel<=U.ERROR&&wo.error(`Auth (${ni}): ${e}`,...t)}/**
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
 */function Le(e,...t){throw Fl(e,...t)}function Xe(e,...t){return Fl(e,...t)}function Rp(e,t,n){const r=Object.assign(Object.assign({},a1()),{[t]:n});return new ei("auth","Firebase",r).create(t,{appName:e.name})}function c1(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&Le(e,"argument-error"),Rp(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Fl(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Np.create(e,...t)}function P(e,t,...n){if(!e)throw Fl(t,...n)}function st(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Wi(t),new Error(t)}function ht(e,t){e||st(t)}/**
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
 */function bo(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function Op(){return ku()==="http:"||ku()==="https:"}function ku(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function u1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Op()||B0()||"connection"in navigator)?navigator.onLine:!0}function d1(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class ri{constructor(t,n){this.shortDelay=t,this.longDelay=n,ht(n>t,"Short delay should be less than long delay!"),this.isMobile=U0()||H0()}get(){return u1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ul(e,t){ht(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class Lp{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;st("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;st("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;st("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const f1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const p1=new ri(3e4,6e4);function Je(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function $e(e,t,n,r,i={}){return jp(e,i,async()=>{let o={},s={};r&&(t==="GET"?s=r:o={body:JSON.stringify(r)});const a=ti(Object.assign({key:e.config.apiKey},s)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),Lp.fetch()(Mp(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},o))})}async function jp(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},f1),t);try{const i=new g1(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw Ci(e,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ci(e,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw Ci(e,"email-already-in-use",s);if(l==="USER_DISABLED")throw Ci(e,"user-disabled",s);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Rp(e,d,u);Le(e,d)}}catch(i){if(i instanceof Wt)throw i;Le(e,"network-request-failed",{message:String(i)})}}async function ii(e,t,n,r,i={}){const o=await $e(e,t,n,r,i);return"mfaPendingCredential"in o&&Le(e,"multi-factor-auth-required",{_serverResponse:o}),o}function Mp(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Ul(e.config,i):`${e.config.apiScheme}://${i}`}function h1(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class g1{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Xe(this.auth,"network-request-failed")),p1.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ci(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Xe(e,t,r);return i.customData._tokenResponse=n,i}function _u(e){return e!==void 0&&e.enterprise!==void 0}class m1{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return h1(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function y1(e,t){return $e(e,"GET","/v2/recaptchaConfig",Je(e,t))}/**
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
 */async function v1(e,t){return $e(e,"POST","/v1/accounts:delete",t)}async function x1(e,t){return $e(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function Tr(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function w1(e,t=!1){const n=je(e),r=await n.getIdToken(t),i=Bl(r);P(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Tr(Rs(i.auth_time)),issuedAtTime:Tr(Rs(i.iat)),expirationTime:Tr(Rs(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Rs(e){return Number(e)*1e3}function Bl(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Wi("JWT malformed, contained fewer than 3 sections"),null;try{const i=wp(n);return i?JSON.parse(i):(Wi("Failed to decode base64 JWT payload"),null)}catch(i){return Wi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function b1(e){const t=Bl(e);return P(t,"internal-error"),P(typeof t.exp<"u","internal-error"),P(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Kn(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Wt&&S1(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function S1({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class k1{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Dp{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Tr(this.lastLoginAt),this.creationTime=Tr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function So(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Kn(e,x1(n,{idToken:r}));P(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?T1(o.providerUserInfo):[],a=E1(e.providerData,s),l=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Dp(o.createdAt,o.lastLoginAt),isAnonymous:d};Object.assign(e,h)}async function _1(e){const t=je(e);await So(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function E1(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function T1(e){return e.map(t=>{var{providerId:n}=t,r=zl(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function I1(e,t){const n=await jp(e,{},async()=>{const r=ti({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=Mp(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Lp.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function C1(e,t){return $e(e,"POST","/v2/accounts:revokeToken",Je(e,t))}/**
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
 */class Kr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){P(t.idToken,"internal-error"),P(typeof t.idToken<"u","internal-error"),P(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):b1(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return P(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await I1(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new Kr;return r&&(P(typeof r=="string","internal-error",{appName:t}),s.refreshToken=r),i&&(P(typeof i=="string","internal-error",{appName:t}),s.accessToken=i),o&&(P(typeof o=="number","internal-error",{appName:t}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Kr,this.toJSON())}_performRefresh(){return st("not implemented")}}/**
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
 */function vt(e,t){P(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class tn{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=zl(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new k1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Dp(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await Kn(this,this.stsTokenManager.getToken(this.auth,t));return P(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return w1(this,t)}reload(){return _1(this)}_assign(t){this!==t&&(P(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new tn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){P(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await So(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Kn(this,v1(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,s,a,l,u,d;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,y=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,v=(s=n.photoURL)!==null&&s!==void 0?s:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,C=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:m,emailVerified:x,isAnonymous:S,providerData:_,stsTokenManager:T}=n;P(m&&T,t,"internal-error");const k=Kr.fromJSON(this.name,T);P(typeof m=="string",t,"internal-error"),vt(h,t.name),vt(g,t.name),P(typeof x=="boolean",t,"internal-error"),P(typeof S=="boolean",t,"internal-error"),vt(y,t.name),vt(v,t.name),vt(w,t.name),vt(C,t.name),vt(p,t.name),vt(f,t.name);const M=new tn({uid:m,auth:t,email:g,emailVerified:x,displayName:h,isAnonymous:S,photoURL:v,phoneNumber:y,tenantId:w,stsTokenManager:k,createdAt:p,lastLoginAt:f});return _&&Array.isArray(_)&&(M.providerData=_.map(O=>Object.assign({},O))),C&&(M._redirectEventId=C),M}static async _fromIdTokenResponse(t,n,r=!1){const i=new Kr;i.updateFromServerResponse(n);const o=new tn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await So(o),o}}/**
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
 */const Eu=new Map;function at(e){ht(e instanceof Function,"Expected a class definition");let t=Eu.get(e);return t?(ht(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Eu.set(e,t),t)}/**
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
 */class zp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}zp.type="NONE";const Tu=zp;/**
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
 */function $i(e,t,n){return`firebase:${e}:${t}:${n}`}class Mn{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=$i(this.userKey,i.apiKey,o),this.fullPersistenceKey=$i("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?tn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Mn(at(Tu),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||at(Tu);const s=$i(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const d=await u._get(s);if(d){const h=tn._fromJSON(t,d);u!==o&&(a=h),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new Mn(o,t,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new Mn(o,t,r))}}/**
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
 */function Iu(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Bp(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Fp(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Wp(t))return"Blackberry";if($p(t))return"Webos";if(Hl(t))return"Safari";if((t.includes("chrome/")||Up(t))&&!t.includes("edge/"))return"Chrome";if(Hp(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Fp(e=de()){return/firefox\//i.test(e)}function Hl(e=de()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Up(e=de()){return/crios\//i.test(e)}function Bp(e=de()){return/iemobile/i.test(e)}function Hp(e=de()){return/android/i.test(e)}function Wp(e=de()){return/blackberry/i.test(e)}function $p(e=de()){return/webos/i.test(e)}function $o(e=de()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function P1(e=de()){var t;return $o(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function A1(){return W0()&&document.documentMode===10}function Vp(e=de()){return $o(e)||Hp(e)||$p(e)||Wp(e)||/windows phone/i.test(e)||Bp(e)}function N1(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Gp(e,t=[]){let n;switch(e){case"Browser":n=Iu(de());break;case"Worker":n=`${Iu(de())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${ni}/${r}`}/**
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
 */class R1{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((s,a)=>{try{const l=t(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function O1(e,t={}){return $e(e,"GET","/v2/passwordPolicy",Je(e,t))}/**
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
 */const L1=6;class j1{constructor(t){var n,r,i,o;const s=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=s.minPasswordLength)!==null&&n!==void 0?n:L1,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=t.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,o,s,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsUppercaseLetter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(s=l.containsNumericCharacter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=o))}}/**
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
 */class M1{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Cu(this),this.idTokenSubscription=new Cu(this),this.beforeStateQueue=new R1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Np,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=at(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Mn.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return P(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await So(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=d1()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?je(t):null;return n&&P(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&P(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(at(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await O1(this),n=new j1(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new ei("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await C1(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&at(t)||this._popupRedirectResolver;P(n,this,"argument-error"),this.redirectPersistenceManager=await Mn.create(this,[at(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(P(a,this,"internal-error"),a.then(()=>{s||o(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{s=!0,l()}}else{const l=t.addObserver(n);return()=>{s=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return P(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Gp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&l1(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function mt(e){return je(e)}class Cu{constructor(t){this.auth=t,this.observer=null,this.addObserver=Q0(n=>this.observer=n)}get next(){return P(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Vo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function D1(e){Vo=e}function Kp(e){return Vo.loadJS(e)}function z1(){return Vo.recaptchaEnterpriseScript}function F1(){return Vo.gapiScript}function U1(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const B1="recaptcha-enterprise",H1="NO_RECAPTCHA";class W1{constructor(t){this.type=B1,this.auth=mt(t)}async verify(t="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,a)=>{y1(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new m1(l);return o.tenantId==null?o._agentRecaptchaConfig=u:o._tenantRecaptchaConfigs[o.tenantId]=u,s(u.siteKey)}}).catch(l=>{a(l)})})}function i(o,s,a){const l=window.grecaptcha;_u(l)?l.enterprise.ready(()=>{l.enterprise.execute(o,{action:t}).then(u=>{s(u)}).catch(()=>{s(H1)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{r(this.auth).then(a=>{if(!n&&_u(window.grecaptcha))i(a,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}let l=z1();l.length!==0&&(l+=a),Kp(l).then(()=>{i(a,o,s)}).catch(u=>{s(u)})}}).catch(a=>{s(a)})})}}async function Pu(e,t,n,r=!1){const i=new W1(e);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const s=Object.assign({},t);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function ko(e,t,n,r){var i;if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Pu(e,t,n,n==="getOobCode");return r(e,o)}else return r(e,t).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const s=await Pu(e,t,n,n==="getOobCode");return r(e,s)}else return Promise.reject(o)})}/**
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
 */function $1(e,t){const n=Tp(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(vo(o,t??{}))return i;Le(i,"already-initialized")}return n.initialize({options:t})}function V1(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(at);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function G1(e,t,n){const r=mt(e);P(r._canInitEmulator,r,"emulator-config-failed"),P(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=Yp(t),{host:s,port:a}=K1(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Y1()}function Yp(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function K1(e){const t=Yp(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:Au(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:Au(s)}}}function Au(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Y1(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class Wl{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return st("not implemented")}_getIdTokenResponse(t){return st("not implemented")}_linkToIdToken(t,n){return st("not implemented")}_getReauthenticationResolver(t){return st("not implemented")}}async function q1(e,t){return $e(e,"POST","/v1/accounts:signUp",t)}/**
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
 */async function Q1(e,t){return ii(e,"POST","/v1/accounts:signInWithPassword",Je(e,t))}async function qp(e,t){return $e(e,"POST","/v1/accounts:sendOobCode",Je(e,t))}async function X1(e,t){return qp(e,t)}async function Z1(e,t){return qp(e,t)}/**
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
 */async function J1(e,t){return ii(e,"POST","/v1/accounts:signInWithEmailLink",Je(e,t))}async function ev(e,t){return ii(e,"POST","/v1/accounts:signInWithEmailLink",Je(e,t))}/**
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
 */class Yr extends Wl{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new Yr(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new Yr(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ko(t,n,"signInWithPassword",Q1);case"emailLink":return J1(t,{email:this._email,oobCode:this._password});default:Le(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ko(t,r,"signUpPassword",q1);case"emailLink":return ev(t,{idToken:n,email:this._email,oobCode:this._password});default:Le(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function Dn(e,t){return ii(e,"POST","/v1/accounts:signInWithIdp",Je(e,t))}/**
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
 */const tv="http://localhost";class cn extends Wl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new cn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Le("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=zl(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new cn(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(t){const n=this.buildRequest();return Dn(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Dn(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Dn(t,n)}buildRequest(){const t={requestUri:tv,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=ti(n)}return t}}/**
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
 */function nv(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function rv(e){const t=gr(mr(e)).link,n=t?gr(mr(t)).deep_link_id:null,r=gr(mr(e)).deep_link_id;return(r?gr(mr(r)).link:null)||r||n||t||e}class $l{constructor(t){var n,r,i,o,s,a;const l=gr(mr(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,h=nv((i=l.mode)!==null&&i!==void 0?i:null);P(u&&d&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=d,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=rv(t);try{return new $l(n)}catch{return null}}}/**
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
 */class Xn{constructor(){this.providerId=Xn.PROVIDER_ID}static credential(t,n){return Yr._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=$l.parseLink(n);return P(r,"argument-error"),Yr._fromEmailAndCode(t,r.code,r.tenantId)}}Xn.PROVIDER_ID="password";Xn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Xn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Vl{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class oi extends Vl{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class kt extends oi{constructor(){super("facebook.com")}static credential(t){return cn._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return kt.credentialFromTaggedObject(t)}static credentialFromError(t){return kt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return kt.credential(t.oauthAccessToken)}catch{return null}}}kt.FACEBOOK_SIGN_IN_METHOD="facebook.com";kt.PROVIDER_ID="facebook.com";/**
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
 */class rt extends oi{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return cn._fromParams({providerId:rt.PROVIDER_ID,signInMethod:rt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return rt.credentialFromTaggedObject(t)}static credentialFromError(t){return rt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return rt.credential(n,r)}catch{return null}}}rt.GOOGLE_SIGN_IN_METHOD="google.com";rt.PROVIDER_ID="google.com";/**
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
 */class _t extends oi{constructor(){super("github.com")}static credential(t){return cn._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return _t.credentialFromTaggedObject(t)}static credentialFromError(t){return _t.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return _t.credential(t.oauthAccessToken)}catch{return null}}}_t.GITHUB_SIGN_IN_METHOD="github.com";_t.PROVIDER_ID="github.com";/**
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
 */class Et extends oi{constructor(){super("twitter.com")}static credential(t,n){return cn._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Et.credentialFromTaggedObject(t)}static credentialFromError(t){return Et.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Et.credential(n,r)}catch{return null}}}Et.TWITTER_SIGN_IN_METHOD="twitter.com";Et.PROVIDER_ID="twitter.com";/**
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
 */async function iv(e,t){return ii(e,"POST","/v1/accounts:signUp",Je(e,t))}/**
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
 */class un{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await tn._fromIdTokenResponse(t,r,i),s=Nu(r);return new un({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Nu(r);return new un({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Nu(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class _o extends Wt{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,_o.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new _o(t,n,r,i)}}function Qp(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?_o._fromErrorAndOperation(e,o,t,r):o})}async function ov(e,t,n=!1){const r=await Kn(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return un._forOperation(e,"link",r)}/**
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
 */async function sv(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const o=await Kn(e,Qp(r,i,t,e),n);P(o.idToken,r,"internal-error");const s=Bl(o.idToken);P(s,r,"internal-error");const{sub:a}=s;return P(e.uid===a,r,"user-mismatch"),un._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Le(r,"user-mismatch"),o}}/**
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
 */async function Xp(e,t,n=!1){const r="signIn",i=await Qp(e,r,t),o=await un._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function av(e,t){return Xp(mt(e),t)}/**
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
 */function Zp(e,t,n){var r;P(((r=n.url)===null||r===void 0?void 0:r.length)>0,e,"invalid-continue-uri"),P(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(P(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(P(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}/**
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
 */async function Jp(e){const t=mt(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function lv(e,t,n){const r=mt(e),i={requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"};n&&Zp(r,i,n),await ko(r,i,"getOobCode",Z1)}async function cv(e,t,n){const r=mt(e),s=await ko(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",iv).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Jp(e),l}),a=await un._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(a.user),a}function uv(e,t,n){return av(je(e),Xn.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Jp(e),r})}/**
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
 */async function dv(e,t){return $e(e,"POST","/v1/accounts:createAuthUri",Je(e,t))}/**
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
 */async function fv(e,t){const n=Op()?bo():"http://localhost",r={identifier:t,continueUri:n},{signinMethods:i}=await dv(je(e),r);return i||[]}async function pv(e,t){const n=je(e),i={requestType:"VERIFY_EMAIL",idToken:await e.getIdToken()};t&&Zp(n.auth,i,t);const{email:o}=await X1(n.auth,i);o!==e.email&&await e.reload()}/**
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
 */async function hv(e,t){return $e(e,"POST","/v1/accounts:update",t)}/**
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
 */async function gv(e,{displayName:t,photoURL:n}){if(t===void 0&&n===void 0)return;const r=je(e),o={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},s=await Kn(r,hv(r.auth,o));r.displayName=s.displayName||null,r.photoURL=s.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(s)}function mv(e,t,n,r){return je(e).onIdTokenChanged(t,n,r)}function yv(e,t,n){return je(e).beforeAuthStateChanged(t,n)}function vv(e,t,n,r){return je(e).onAuthStateChanged(t,n,r)}function Gl(e){return je(e).signOut()}const Eo="__sak";/**
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
 */class eh{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Eo,"1"),this.storage.removeItem(Eo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function xv(){const e=de();return Hl(e)||$o(e)}const wv=1e3,bv=10;class th extends eh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=xv()&&N1(),this.fallbackToPolling=Vp(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(t.newValue!==s)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);A1()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,bv):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},wv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}th.type="LOCAL";const Sv=th;/**
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
 */class nh extends eh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}nh.type="SESSION";const rh=nh;/**
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
 */function kv(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Go{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Go(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await kv(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Go.receivers=[];/**
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
 */function Kl(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class _v{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=Kl("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(h){const g=h;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(d),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(g.data.response);break;default:clearTimeout(d),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
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
 */function Ze(){return window}function Ev(e){Ze().location.href=e}/**
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
 */function ih(){return typeof Ze().WorkerGlobalScope<"u"&&typeof Ze().importScripts=="function"}async function Tv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Iv(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function Cv(){return ih()?self:null}/**
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
 */const oh="firebaseLocalStorageDb",Pv=1,To="firebaseLocalStorage",sh="fbase_key";class si{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ko(e,t){return e.transaction([To],t?"readwrite":"readonly").objectStore(To)}function Av(){const e=indexedDB.deleteDatabase(oh);return new si(e).toPromise()}function Da(){const e=indexedDB.open(oh,Pv);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(To,{keyPath:sh})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(To)?t(r):(r.close(),await Av(),t(await Da()))})})}async function Ru(e,t,n){const r=Ko(e,!0).put({[sh]:t,value:n});return new si(r).toPromise()}async function Nv(e,t){const n=Ko(e,!1).get(t),r=await new si(n).toPromise();return r===void 0?null:r.value}function Ou(e,t){const n=Ko(e,!0).delete(t);return new si(n).toPromise()}const Rv=800,Ov=3;class ah{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Da(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>Ov)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ih()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Go._getInstance(Cv()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await Tv(),!this.activeServiceWorker)return;this.sender=new _v(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Iv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Da();return await Ru(t,Eo,"1"),await Ou(t,Eo),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ru(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>Nv(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ou(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=Ko(i,!1).getAll();return new si(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Rv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ah.type="LOCAL";const Lv=ah;new ri(3e4,6e4);/**
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
 */function lh(e,t){return t?at(t):(P(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class Yl extends Wl{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Dn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Dn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Dn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function jv(e){return Xp(e.auth,new Yl(e),e.bypassAuthState)}function Mv(e){const{auth:t,user:n}=e;return P(n,t,"internal-error"),sv(n,new Yl(e),e.bypassAuthState)}async function Dv(e){const{auth:t,user:n}=e;return P(n,t,"internal-error"),ov(n,new Yl(e),e.bypassAuthState)}/**
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
 */class ch{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=t;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return jv;case"linkViaPopup":case"linkViaRedirect":return Dv;case"reauthViaPopup":case"reauthViaRedirect":return Mv;default:Le(this.auth,"internal-error")}}resolve(t){ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const zv=new ri(2e3,1e4);async function Fv(e,t,n){const r=mt(e);c1(e,t,Vl);const i=lh(r,n);return new Zt(r,"signInViaPopup",t,i).executeNotNull()}class Zt extends ch{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Zt.currentPopupAction&&Zt.currentPopupAction.cancel(),Zt.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return P(t,this.auth,"internal-error"),t}async onExecution(){ht(this.filter.length===1,"Popup operations only handle one event");const t=Kl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Xe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Xe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zt.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,zv.get())};t()}}Zt.currentPopupAction=null;/**
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
 */const Uv="pendingRedirect",Vi=new Map;class Bv extends ch{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Vi.get(this.auth._key());if(!t){try{const r=await Hv(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Vi.set(this.auth._key(),t)}return this.bypassAuthState||Vi.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Hv(e,t){const n=Vv(t),r=$v(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Wv(e,t){Vi.set(e._key(),t)}function $v(e){return at(e._redirectPersistence)}function Vv(e){return $i(Uv,e.config.apiKey,e.name)}async function Gv(e,t,n=!1){const r=mt(e),i=lh(r,t),s=await new Bv(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}/**
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
 */const Kv=10*60*1e3;class Yv{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!qv(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!uh(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Xe(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Kv&&this.cachedEventUids.clear(),this.cachedEventUids.has(Lu(t))}saveEventToCache(t){this.cachedEventUids.add(Lu(t)),this.lastProcessedEventTime=Date.now()}}function Lu(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function uh({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function qv(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return uh(e);default:return!1}}/**
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
 */async function Qv(e,t={}){return $e(e,"GET","/v1/projects",t)}/**
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
 */const Xv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Zv=/^https?/;async function Jv(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Qv(e);for(const n of t)try{if(e2(n))return}catch{}Le(e,"unauthorized-domain")}function e2(e){const t=bo(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return s.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!Zv.test(n))return!1;if(Xv.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const t2=new ri(3e4,6e4);function ju(){const e=Ze().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function n2(e){return new Promise((t,n)=>{var r,i,o;function s(){ju(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{ju(),n(Xe(e,"network-request-failed"))},timeout:t2.get()})}if(!((i=(r=Ze().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=Ze().gapi)===null||o===void 0)&&o.load)s();else{const a=U1("iframefcb");return Ze()[a]=()=>{gapi.load?s():n(Xe(e,"network-request-failed"))},Kp(`${F1()}?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw Gi=null,t})}let Gi=null;function r2(e){return Gi=Gi||n2(e),Gi}/**
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
 */const i2=new ri(5e3,15e3),o2="__/auth/iframe",s2="emulator/auth/iframe",a2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},l2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function c2(e){const t=e.config;P(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Ul(t,s2):`https://${e.config.authDomain}/${o2}`,r={apiKey:t.apiKey,appName:e.name,v:ni},i=l2.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${ti(r).slice(1)}`}async function u2(e){const t=await r2(e),n=Ze().gapi;return P(n,e,"internal-error"),t.open({where:document.body,url:c2(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:a2,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=Xe(e,"network-request-failed"),a=Ze().setTimeout(()=>{o(s)},i2.get());function l(){Ze().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
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
 */const d2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},f2=500,p2=600,h2="_blank",g2="http://localhost";class Mu{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function m2(e,t,n,r=f2,i=p2){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},d2),{width:r.toString(),height:i.toString(),top:o,left:s}),u=de().toLowerCase();n&&(a=Up(u)?h2:n),Fp(u)&&(t=t||g2,l.scrollbars="yes");const d=Object.entries(l).reduce((g,[y,v])=>`${g}${y}=${v},`,"");if(P1(u)&&a!=="_self")return y2(t||"",a),new Mu(null);const h=window.open(t||"",a,d);P(h,e,"popup-blocked");try{h.focus()}catch{}return new Mu(h)}function y2(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const v2="__/auth/handler",x2="emulator/auth/handler",w2=encodeURIComponent("fac");async function Du(e,t,n,r,i,o){P(e.config.authDomain,e,"auth-domain-config-required"),P(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:ni,eventId:i};if(t instanceof Vl){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",q0(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[d,h]of Object.entries(o||{}))s[d]=h}if(t instanceof oi){const d=t.getScopes().filter(h=>h!=="");d.length>0&&(s.scopes=d.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await e._getAppCheckToken(),u=l?`#${w2}=${encodeURIComponent(l)}`:"";return`${b2(e)}?${ti(a).slice(1)}${u}`}function b2({config:e}){return e.emulator?Ul(e,x2):`https://${e.authDomain}/${v2}`}/**
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
 */const Os="webStorageSupport";class S2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rh,this._completeRedirectFn=Gv,this._overrideRedirectResult=Wv}async _openPopup(t,n,r,i){var o;ht((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Du(t,n,r,bo(),i);return m2(t,s,Kl())}async _openRedirect(t,n,r,i){await this._originValidation(t);const o=await Du(t,n,r,bo(),i);return Ev(o),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(ht(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await u2(t),r=new Yv(t);return n.register("authEvent",i=>(P(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Os,{type:Os},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Os];s!==void 0&&n(!!s),Le(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Jv(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Vp()||Hl()||$o()}}const k2=S2;var zu="@firebase/auth",Fu="1.6.0";/**
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
 */class _2{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){P(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function E2(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function T2(e){Vr(new Gn("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;P(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:s,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Gp(e)},u=new M1(r,i,o,l);return V1(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Vr(new Gn("auth-internal",t=>{const n=mt(t.getProvider("auth").getImmediate());return(r=>new _2(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),jn(zu,Fu,E2(e)),jn(zu,Fu,"esm2017")}/**
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
 */const I2=5*60,C2=Sp("authIdTokenMaxAge")||I2;let Uu=null;const P2=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>C2)return;const i=n==null?void 0:n.token;Uu!==i&&(Uu=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function A2(e=qy()){const t=Tp(e,"auth");if(t.isInitialized())return t.getImmediate();const n=$1(e,{popupRedirectResolver:k2,persistence:[Lv,Sv,rh]}),r=Sp("authTokenSyncURL");if(r){const o=P2(r);yv(n,o,()=>o(n.currentUser)),mv(n,s=>o(s))}const i=z0("auth");return i&&G1(n,`http://${i}`),n}function N2(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}D1({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=Xe("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",N2().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});T2("Browser");const R2={apiKey:"AIzaSyAVsOqwBt41VMBzk1re-OMzD06kLXoniOo",authDomain:"printing-press-system.firebaseapp.com",projectId:"printing-press-system",storageBucket:"printing-press-system.firebasestorage.app",messagingSenderId:"920502808043",appId:"1:920502808043:web:cea7eb1783aac4a39a7dae"},O2=Ip(R2),ct=A2(O2),L2=new rt;console.log("✅ Firebase initialized");const j2=async()=>{try{console.log("🔄 Opening Google popup...");const t=await Fv(ct,L2);return console.log("✅ Success:",t.user.email),{user:t.user,error:null}}catch(e){return console.error("❌ Error:",e.code,e.message),e.code==="auth/popup-closed-by-user"?{user:null,error:"Please complete sign-in in the popup window"}:e.code==="auth/popup-blocked"?{user:null,error:"Popup blocked. Please allow popups for this site."}:e.code==="auth/cancelled-popup-request"?{user:null,error:"Sign-in cancelled"}:{user:null,error:"Sign-in failed. Please try again."}}},M2=async(e,t,n,r)=>{try{if((await fv(ct,e)).length>0)return{user:null,error:"Email already registered"};const o=await cv(ct,e,t);return await gv(o.user,{displayName:`${n} ${r}`}),await pv(o.user),await Gl(ct),{user:null,error:null}}catch(i){return{user:null,error:i.message}}},D2=async(e,t)=>{try{const n=await uv(ct,e,t);return n.user.emailVerified?{user:n.user,error:null}:(await Gl(ct),{user:null,error:"Please verify your email first"})}catch{return{user:null,error:"Invalid email or password"}}},z2=async e=>{try{return await lv(ct,e),{error:null}}catch(t){return{error:t.message}}},F2=async()=>(await Gl(ct),{error:null}),U2=e=>vv(ct,e),dh=A.createContext(),Yo=()=>A.useContext(dh),B2=({children:e})=>{const[t,n]=A.useState(null),[r,i]=A.useState(!0);A.useEffect(()=>U2(h=>{var g,y;n(h?{uid:h.uid,email:h.email,firstName:((g=h.displayName)==null?void 0:g.split(" ")[0])||"User",lastName:((y=h.displayName)==null?void 0:y.split(" ").slice(1).join(" "))||"",emailVerified:h.emailVerified,isAuthenticated:!0}:null),i(!1)}),[]);const o=async()=>{const{error:d}=await j2();return{error:d}},s=async(d,h)=>{const{error:g}=await D2(d,h);return{error:g}},a=async(d,h,g,y)=>{const{error:v}=await M2(d,h,g,y);return{error:v}},l=async d=>{const{error:h}=await z2(d);return{error:h}},u=async()=>{await F2()};return c.jsx(dh.Provider,{value:{user:t,loginWithGoogle:o,loginWithEmail:s,registerWithEmail:a,resetPassword:l,logout:u,loading:r,isAuthenticated:!!t},children:!r&&e})};var H2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const W2=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),$2=(e,t)=>{const n=A.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:o=2,absoluteStrokeWidth:s,children:a,...l},u)=>A.createElement("svg",{ref:u,...H2,width:i,height:i,stroke:r,strokeWidth:s?Number(o)*24/Number(i):o,className:`lucide lucide-${W2(e)}`,...l},[...t.map(([d,h])=>A.createElement(d,h)),...(Array.isArray(a)?a:[a])||[]]));return n.displayName=`${e}`,n};var z=$2;const za=z("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]),Ir=z("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]),V2=z("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]),G2=z("Check",[["polyline",{points:"20 6 9 17 4 12",key:"10jjfj"}]]),K2=z("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),fh=z("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]),Y2=z("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]),Bu=z("ExternalLink",[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}],["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3",key:"18c3s4"}]]),ph=z("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]),Hu=z("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z",key:"nb9nel"}]]),q2=z("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]),hh=z("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]),gh=z("Layers",[["polygon",{points:"12 2 2 7 12 12 22 7 12 2",key:"1b0ttc"}],["polyline",{points:"2 17 12 22 22 17",key:"imjtdl"}],["polyline",{points:"2 12 12 17 22 12",key:"5dexcv"}]]),Q2=z("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]),X2=z("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]),Z2=z("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]),Fa=z("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]),J2=z("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]),mh=z("MessageCircle",[["path",{d:"m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z",key:"v2veuj"}]]),Wu=z("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]),ex=z("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]),yh=z("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]),tx=z("Printer",[["polyline",{points:"6 9 6 2 18 2 18 9",key:"1306q4"}],["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["rect",{width:"12",height:"8",x:"6",y:"14",key:"5ipwut"}]]),vh=z("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]),ur=z("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]),$u=z("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),nx=z("Type",[["polyline",{points:"4 7 4 4 20 4 20 7",key:"1nosan"}],["line",{x1:"9",x2:"15",y1:"20",y2:"20",key:"swin9y"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]]),rx=z("UserCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",key:"154egf"}]]),ql=z("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),Ql=z("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Xl=z("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]),Ua=z("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),xh="/bk-offset/assets/BK_logo_png-baab523e.png",ix=`
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
`;function ox({isDark:e,toggleTheme:t,lang:n,toggleLang:r,text:i,onAuthClick:o,scrolled:s}){var T,k,M,O;const{user:a,logout:l,isAuthenticated:u}=Yo(),[d,h]=A.useState(!1),[g,y]=A.useState(!1),v=()=>{h(!1),y(!1),l()},w=()=>{window.scrollTo({top:0,behavior:"smooth"}),h(!1),y(!1)},C=e?"rgba(255,255,255,0.09)":"rgba(0,0,0,0.08)",p=e?"rgba(255,255,255,0.92)":"#0f172a",f=e?"rgba(255,255,255,0.45)":"#64748b",m=e?"rgba(255,255,255,0.07)":"rgba(0,0,0,0.045)",x=e?"#0f172a":"#ffffff",S=e?"rgba(255,255,255,0.10)":"rgba(0,0,0,0.08)",_=e?"0 20px 48px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06)":"0 16px 40px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.06)";return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:ix}),c.jsxs("nav",{className:`nb-root${s?" nb-scrolled-shadow":""}`,style:{position:"sticky",top:0,zIndex:2e3,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 28px",height:60,background:e?"rgba(2,6,23,0.92)":"rgba(255,255,255,0.92)",backdropFilter:"blur(18px) saturate(1.5)",WebkitBackdropFilter:"blur(18px) saturate(1.5)",borderBottom:`1px solid ${s?C:"transparent"}`,transition:"background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease"},children:[c.jsxs("div",{className:"nb-logo",onClick:w,role:"button",tabIndex:0,onKeyDown:N=>N.key==="Enter"&&w(),children:[c.jsx("img",{className:"nb-logo-img",src:xh,alt:"BK Offset",onError:N=>{N.target.style.display="none"}}),c.jsxs("div",{children:[c.jsx("div",{className:"nb-brand-name",style:{color:p},children:"BK Offset"}),c.jsx("div",{className:"nb-brand-sub",style:{color:f},children:"Printing Press"})]})]}),c.jsx("div",{style:{display:"flex",alignItems:"center",gap:6},children:u?c.jsxs(c.Fragment,{children:[c.jsxs("div",{style:{position:"relative"},children:[c.jsxs("button",{className:"nb-avatar-pill",onClick:()=>{h(!d),y(!1)},style:{border:`1px solid ${d?"rgba(14,165,233,0.40)":C}`,background:d?m:"transparent",color:p},children:[c.jsx("div",{className:"nb-avatar-ring",children:((k=(T=a==null?void 0:a.firstName)==null?void 0:T.charAt(0))==null?void 0:k.toUpperCase())||"U"}),c.jsx("span",{className:"nb-avatar-name",style:{color:p},children:(a==null?void 0:a.firstName)||"User"}),c.jsx(K2,{size:13,strokeWidth:2,style:{color:f,transform:d?"rotate(180deg)":"rotate(0deg)",transition:"transform 0.25s ease"}})]}),d&&c.jsxs(c.Fragment,{children:[c.jsx("div",{style:{position:"fixed",inset:0,zIndex:1999},onClick:()=>h(!1)}),c.jsxs("div",{className:"nb-dropdown",style:{background:x,border:`1px solid ${S}`,boxShadow:_},children:[c.jsx("div",{style:{padding:"14px 16px 12px",borderBottom:`1px solid ${S}`},children:c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:6},children:[c.jsx("div",{className:"nb-avatar-ring",style:{width:34,height:34,fontSize:13},children:((O=(M=a==null?void 0:a.firstName)==null?void 0:M.charAt(0))==null?void 0:O.toUpperCase())||"U"}),c.jsxs("div",{children:[c.jsxs("div",{style:{fontSize:13.5,fontWeight:600,color:p,lineHeight:1.2},children:[a==null?void 0:a.firstName," ",a==null?void 0:a.lastName]}),c.jsx("div",{style:{fontSize:11,color:f,marginTop:2},children:a==null?void 0:a.email})]})]})}),c.jsx("div",{style:{padding:"6px 6px"},children:c.jsxs("button",{className:"nb-dropdown-btn",style:{color:p},onMouseEnter:N=>{N.currentTarget.style.background=m},onMouseLeave:N=>{N.currentTarget.style.background="none"},onClick:()=>h(!1),children:[c.jsx(rx,{size:16,strokeWidth:1.75,color:"#0ea5e9"}),"View Profile"]})})]})]})]}),c.jsx("div",{style:{width:1,height:22,background:C,margin:"0 2px"}}),c.jsxs("div",{style:{position:"relative"},children:[c.jsx("button",{className:"nb-icon-btn",onClick:()=>{y(!g),h(!1)},style:{color:g?p:f,border:`1px solid ${g?"rgba(14,165,233,0.40)":C}`,background:g?m:"transparent"},children:g?c.jsx(Ql,{size:17,strokeWidth:2}):c.jsx(J2,{size:17,strokeWidth:2})}),g&&c.jsxs(c.Fragment,{children:[c.jsx("div",{style:{position:"fixed",inset:0,zIndex:1999},onClick:()=>y(!1)}),c.jsxs("div",{className:"nb-dropdown",style:{background:x,border:`1px solid ${S}`,boxShadow:_,padding:"6px 6px"},children:[c.jsxs("button",{className:"nb-dropdown-btn",style:{color:p},onMouseEnter:N=>{N.currentTarget.style.background=m},onMouseLeave:N=>{N.currentTarget.style.background="none"},onClick:()=>{r(),y(!1)},children:[c.jsx(Hu,{size:15,strokeWidth:1.75,color:"#0ea5e9"}),n==="en"?"हिंदी में बदलें":"Switch to English"]}),c.jsxs("button",{className:"nb-dropdown-btn",style:{color:p},onMouseEnter:N=>{N.currentTarget.style.background=m},onMouseLeave:N=>{N.currentTarget.style.background="none"},onClick:()=>{t(),y(!1)},children:[e?c.jsx($u,{size:15,strokeWidth:1.75,color:"#f59e0b"}):c.jsx(Wu,{size:15,strokeWidth:1.75,color:"#6366f1"}),e?"Light Mode":"Dark Mode"]}),c.jsx("div",{className:"nb-sep",style:{background:S}}),c.jsxs("button",{className:"nb-dropdown-btn",style:{color:"#ef4444"},onMouseEnter:N=>{N.currentTarget.style.background="rgba(239,68,68,0.07)"},onMouseLeave:N=>{N.currentTarget.style.background="none"},onClick:v,children:[c.jsx(X2,{size:15,strokeWidth:1.75,color:"#ef4444"}),"Logout"]})]})]})]})]}):c.jsxs(c.Fragment,{children:[c.jsx("button",{className:"nb-icon-btn",onClick:r,title:n==="en"?"हिंदी में बदलें":"Switch to English",style:{color:f,border:`1px solid ${C}`},onMouseEnter:N=>{N.currentTarget.style.background=m,N.currentTarget.style.color=p},onMouseLeave:N=>{N.currentTarget.style.background="transparent",N.currentTarget.style.color=f},children:c.jsx(Hu,{size:16,strokeWidth:1.75})}),c.jsx("button",{className:"nb-icon-btn",onClick:t,title:e?"Light mode":"Dark mode",style:{color:f,border:`1px solid ${C}`},onMouseEnter:N=>{N.currentTarget.style.background=m,N.currentTarget.style.color=p},onMouseLeave:N=>{N.currentTarget.style.background="transparent",N.currentTarget.style.color=f},children:e?c.jsx($u,{size:16,strokeWidth:1.75}):c.jsx(Wu,{size:16,strokeWidth:1.75})}),c.jsx("div",{style:{width:1,height:22,background:C,margin:"0 4px"}}),c.jsxs("button",{className:"nb-signin",onClick:o,children:[c.jsx(ql,{size:14,strokeWidth:2}),"Sign In"]})]})})]})]})}const sx=`
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
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 8px;
    padding-top: 20px;
    border-top: 1px solid rgba(255,255,255,0.06);
  }

  .ft-copyright {
    font-size: 12px;
    color: rgba(255,255,255,0.25);
    letter-spacing: 0.02em;
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
`,ax=[{key:"fb",href:"https://facebook.com",Icon:ph,hover:"#1877F2",label:"Facebook"},{key:"ig",href:"https://instagram.com",Icon:hh,hover:"#E4405F",label:"Instagram"},{key:"yt",href:"https://youtube.com/@b.k.offset?si=wwfxLPk27TfOcPa_",Icon:Xl,hover:"#FF0000",label:"YouTube"}];function lx({isDark:e,isMobile:t}){const{isAuthenticated:n}=Yo(),[r,i]=A.useState(null);return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:sx}),c.jsx("div",{className:"ft-top-border"}),c.jsx("footer",{className:"ft-root",style:{background:"#020617",color:"#cbd5e1",padding:t?"56px 22px 28px":"72px 48px 32px"},children:c.jsxs("div",{style:{position:"relative",zIndex:1,maxWidth:1100,margin:"0 auto"},children:[c.jsxs("div",{style:{display:"grid",gridTemplateColumns:t?"1fr":"1.6fr 1fr 1fr",gap:t?44:56,marginBottom:t?40:56,alignItems:"start"},children:[c.jsxs("div",{children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,marginBottom:18},children:[c.jsx("img",{className:"ft-logo-img",src:xh,alt:"BK Offset",onError:o=>{o.target.style.display="none"}}),c.jsxs("div",{children:[c.jsx("div",{className:"ft-brand-name",children:"BK Offset"}),c.jsx("div",{className:"ft-brand-tagline",children:"Printing Press · Since 1995"})]})]}),c.jsx("p",{style:{fontSize:13.5,lineHeight:1.75,color:"rgba(255,255,255,0.38)",maxWidth:280,marginBottom:22},children:"Delhi's trusted name for bulk book printing and premium lamination services — quality you can feel, precision you can count on."}),c.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:ax.map(({key:o,href:s,Icon:a,hover:l,label:u})=>c.jsx("a",{href:s,target:"_blank",rel:"noopener noreferrer","aria-label":u,className:"ft-social-btn",style:{background:r===o?`${l}22`:"rgba(255,255,255,0.06)",borderColor:r===o?`${l}55`:"rgba(255,255,255,0.09)",color:r===o?l:"rgba(255,255,255,0.45)",boxShadow:r===o?`0 6px 18px ${l}33`:"none"},onMouseEnter:()=>i(o),onMouseLeave:()=>i(null),children:c.jsx(a,{size:16,strokeWidth:1.75})},o))})]}),c.jsxs("div",{children:[c.jsx("div",{className:"ft-section-head",children:"Contact"}),n?c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[c.jsxs("a",{href:"tel:+919560959039",className:"ft-contact-link",children:[c.jsx("div",{className:"ft-contact-link-icon",style:{background:"rgba(14,165,233,0.12)"},children:c.jsx(yh,{size:14,strokeWidth:1.75,color:"#0ea5e9"})}),"+91 95609 59039",c.jsx(Ir,{size:12,style:{marginLeft:"auto",opacity:.4}})]}),c.jsxs("a",{href:"https://wa.me/919560959039",target:"_blank",rel:"noopener noreferrer",className:"ft-contact-link",children:[c.jsx("div",{className:"ft-contact-link-icon",style:{background:"rgba(37,211,102,0.12)"},children:c.jsx(mh,{size:14,strokeWidth:1.75,color:"#25d366"})}),"WhatsApp",c.jsx(Ir,{size:12,style:{marginLeft:"auto",opacity:.4}})]}),c.jsxs("a",{href:"mailto:rinkusharmarinku@gmail.com",className:"ft-contact-link",children:[c.jsx("div",{className:"ft-contact-link-icon",style:{background:"rgba(99,102,241,0.12)"},children:c.jsx(Z2,{size:14,strokeWidth:1.75,color:"#6366f1"})}),"Email us",c.jsx(Ir,{size:12,style:{marginLeft:"auto",opacity:.4}})]})]}):c.jsx("p",{style:{fontSize:13,color:"rgba(255,255,255,0.28)",lineHeight:1.65},children:"Sign in to view contact details and get in touch with our team."})]}),c.jsxs("div",{children:[c.jsx("div",{className:"ft-section-head",children:"Find Us"}),c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:14},children:[c.jsxs("div",{className:"ft-info-row",children:[c.jsx(Fa,{size:14,strokeWidth:1.75,className:"ft-info-icon",color:"#0ea5e9",style:{marginTop:3}}),c.jsxs("span",{children:["Street No. 2, Zulfe Bengal",c.jsx("br",{}),"Dilshad Garden, Delhi — 110095"]})]}),c.jsxs("div",{className:"ft-info-row",children:[c.jsx(fh,{size:14,strokeWidth:1.75,className:"ft-info-icon",color:"#6366f1",style:{marginTop:3}}),c.jsxs("span",{children:["Mon – Sun: 9:00 AM – 7:00 PM",c.jsx("br",{}),"Tuesday: Closed"]})]})]})]})]}),c.jsxs("div",{className:"ft-bottom",children:[c.jsxs("span",{className:"ft-copyright",children:["© ",new Date().getFullYear()," BK Offset Printing. All rights reserved."]}),c.jsxs("span",{className:"ft-made-with",children:[c.jsx("span",{className:"ft-dot"}),"Premium printing, Delhi"]})]})]})})]})}function cx({isDark:e,isAuthenticated:t,windowWidth:n}){const[r,i]=A.useState(null),o=gp(e),s=n<420,a=s?40:46,l=s?"12px":"20px",u=[{icon:c.jsx(Xl,{size:18}),href:"https://youtube.com/@b.k.offset?si=8VAlAdQKIGciGQ8d",label:"YouTube",color:"#FF0000"},{icon:c.jsx(hh,{size:18}),href:"https://instagram.com",label:"Instagram",color:"#d640e4"},{icon:c.jsx(ph,{size:18}),href:"https://facebook.com",label:"Facebook",color:"#1877F2"}];return c.jsx("div",{style:{position:"fixed",bottom:"calc(12px + env(safe-area-inset-bottom, 0px))",right:l,display:"flex",flexDirection:"column",gap:s?"8px":"10px",zIndex:1100,pointerEvents:"auto"},children:u.map((d,h)=>c.jsxs("a",{href:d.href,target:"_blank",rel:"noopener noreferrer","aria-label":d.label,onMouseEnter:()=>i(d.label),onMouseLeave:()=>i(null),style:{width:a+"px",height:a+"px",borderRadius:"50%",background:r===d.label?d.color:o.surf,color:r===d.label?"#fff":o.textMid,display:"flex",alignItems:"center",justifyContent:"center",textDecoration:"none",border:"1px solid "+(r===d.label?"transparent":o.border),boxShadow:r===d.label?"0 6px 20px "+d.color+"80":te.shadowSm,transform:r===d.label?"translateY(-3px) scale(1.08)":"scale(1)",transition:"all 0.25s cubic-bezier(.4,0,.2,1)",position:"relative",animation:"floatIn 0.5s ease-out "+h*.1+"s backwards"},children:[d.icon,!s&&c.jsxs("span",{style:{position:"absolute",right:"calc(100% + 10px)",top:"50%",transform:"translateY(-50%)",background:e?"#1e293b":"#0f172a",color:"#fff",padding:"5px 10px",borderRadius:"6px",fontSize:"12px",fontWeight:600,whiteSpace:"nowrap",opacity:r===d.label?1:0,pointerEvents:"none",transition:"opacity 0.2s",boxShadow:"0 4px 12px rgba(0,0,0,0.15)"},children:[d.label,c.jsx("span",{style:{position:"absolute",left:"100%",top:"50%",transform:"translateY(-50%)",borderLeft:"5px solid "+(e?"#1e293b":"#0f172a"),borderTop:"5px solid transparent",borderBottom:"5px solid transparent"}})]})]},d.label))})}function ux({title:e,description:t,keywords:n}){return c.jsxs(k0,{children:[c.jsxs("title",{children:[e," | BK Offset Printing"]}),c.jsx("meta",{name:"description",content:t}),c.jsx("meta",{name:"keywords",content:n}),c.jsx("meta",{property:"og:title",content:e}),c.jsx("meta",{property:"og:description",content:t}),c.jsx("meta",{property:"og:url",content:"https://thanozs.github.io/bk-offset/"}),c.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),c.jsx("link",{rel:"canonical",href:"https://thanozs.github.io/bk-offset/"})]})}function dx({isDark:e,count:t=50}){const n=A.useMemo(()=>Array.from({length:t},(r,i)=>({id:i,size:Math.random()*4+2,left:`${Math.random()*100}%`,animationDuration:`${Math.random()*20+15}s`,animationDelay:`${Math.random()*5}s`,opacity:Math.random()*.3+.1})),[t]);return c.jsx("div",{style:{position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none",zIndex:0},children:n.map(r=>c.jsx("div",{style:{position:"absolute",left:r.left,bottom:"-20px",width:`${r.size}px`,height:`${r.size}px`,borderRadius:"50%",background:e?`radial-gradient(circle, rgba(56, 189, 248, ${r.opacity}) 0%, transparent 70%)`:`radial-gradient(circle, rgba(14, 165, 233, ${r.opacity}) 0%, transparent 70%)`,animation:`floatUp ${r.animationDuration} ${r.animationDelay} infinite ease-in-out`}},r.id))})}function ai(e={threshold:.1,rootMargin:"0px 0px -100px 0px"}){const t=A.useRef(null),[n,r]=A.useState(!1);return A.useEffect(()=>{const i=new IntersectionObserver(([o])=>{o.isIntersecting&&r(!0)},e);return t.current&&i.observe(t.current),()=>{t.current&&i.unobserve(t.current)}},[e]),[t,n]}const fx=`
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
`,px=[{target:30,suffix:"+",label:"Years Active"},{target:50,suffix:"K+",label:"Books Printed"},{target:500,suffix:"+",label:"Happy Clients"}];function hx({text:e,isDark:t,c:n,isAuth:r,isMobile:i,setShowAuth:o}){const[s,a]=ai(),[l,u]=A.useState(!1);return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:fx}),c.jsxs("section",{ref:s,style:{position:"relative",overflow:"hidden",minHeight:i?"100svh":"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:i?"100px 20px 60px":"120px 40px 80px",textAlign:"center",background:t?"linear-gradient(160deg,rgba(4,10,28,0.92) 0%,rgba(2,8,22,0.95) 60%,rgba(6,14,34,0.93) 100%), url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1920&q=80')":"linear-gradient(160deg,rgba(224,242,254,0.82) 0%,rgba(248,250,252,0.88) 60%,rgba(240,249,255,0.85) 100%), url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1920&q=80')",backgroundSize:"cover",backgroundPosition:"center"},children:[c.jsx("div",{className:"hero-orb",style:{width:600,height:600,top:"-200px",left:"10%",background:t?"radial-gradient(circle,rgba(14,165,233,0.18) 0%,transparent 70%)":"radial-gradient(circle,rgba(14,165,233,0.14) 0%,transparent 70%)",animation:"hero-orb1 14s ease-in-out infinite",zIndex:0}}),c.jsx("div",{className:"hero-orb",style:{width:500,height:500,bottom:"-100px",right:"5%",background:t?"radial-gradient(circle,rgba(99,102,241,0.16) 0%,transparent 70%)":"radial-gradient(circle,rgba(99,102,241,0.11) 0%,transparent 70%)",animation:"hero-orb2 18s ease-in-out infinite",zIndex:0}}),c.jsx("div",{className:"hero-orb",style:{width:320,height:320,top:"35%",right:"20%",background:t?"radial-gradient(circle,rgba(56,189,248,0.10) 0%,transparent 70%)":"radial-gradient(circle,rgba(56,189,248,0.08) 0%,transparent 70%)",animation:"hero-orb3 11s ease-in-out infinite",zIndex:0}}),c.jsx("div",{className:"hero-scan"}),c.jsx("div",{style:{position:"absolute",inset:0,backgroundImage:`radial-gradient(circle,${t?"rgba(14,165,233,0.07)":"rgba(14,165,233,0.09)"} 1px,transparent 1px)`,backgroundSize:"36px 36px",pointerEvents:"none",zIndex:0}}),c.jsx(dx,{isDark:t,count:i?20:35}),c.jsxs("div",{style:{position:"relative",zIndex:2,width:"100%",maxWidth:820},children:[c.jsxs("div",{className:"hero-badge",style:{background:t?"rgba(14,165,233,0.12)":"rgba(14,165,233,0.10)",border:`1px solid ${t?"rgba(14,165,233,0.30)":"rgba(14,165,233,0.25)"}`,color:"#38bdf8",marginBottom:24},children:[c.jsx(vh,{size:13,strokeWidth:2}),"Premium Printing Services"]}),c.jsxs("h1",{className:"hero-h1",style:{fontSize:i?"38px":"clamp(44px,6.5vw,76px)",color:t?"#f1f5f9":"#0f172a",marginBottom:20,opacity:a?1:0,animation:a?"hero-fadeUp 0.7s ease-out 0.08s both":"none"},children:[e.heroTitle,c.jsx("br",{}),c.jsx("span",{className:"hero-grad-word",children:e.heroTitle2})]}),c.jsx("p",{className:"hero-sub",style:{fontSize:i?"14.5px":"clamp(15px,1.6vw,17px)",color:t?"rgba(255,255,255,0.52)":"#475569",maxWidth:540,margin:"0 auto 36px",opacity:a?1:0,animation:a?"hero-fadeUp 0.7s ease-out 0.18s both":"none"},children:e.heroSub}),c.jsx("div",{style:{display:"flex",justifyContent:"center",gap:12,flexWrap:"wrap",marginBottom:48,opacity:a?1:0,animation:a?"hero-fadeUp 0.7s ease-out 0.28s both":"none"},children:r?c.jsxs(c.Fragment,{children:[c.jsxs("a",{href:`tel:${E0}`,className:"hero-btn",style:{background:"linear-gradient(135deg,#0ea5e9,#6366f1)",color:"#fff",padding:i?"12px 24px":"14px 28px",fontSize:i?"14px":"15px",boxShadow:"0 6px 24px rgba(14,165,233,0.35)"},children:[c.jsx(yh,{size:16,strokeWidth:2}),"Call Now"]}),c.jsxs("a",{href:T0,target:"_blank",rel:"noopener noreferrer",className:"hero-btn",style:{background:"linear-gradient(135deg,#16a34a,#22c55e)",color:"#fff",padding:i?"12px 24px":"14px 28px",fontSize:i?"14px":"15px",boxShadow:"0 6px 24px rgba(22,163,74,0.32)"},children:[c.jsx(mh,{size:16,strokeWidth:2}),"WhatsApp"]})]}):c.jsxs(c.Fragment,{children:[c.jsxs("button",{onClick:()=>o(!0),className:"hero-btn",style:{background:"linear-gradient(135deg,#0ea5e9,#6366f1)",color:"#fff",padding:i?"12px 26px":"14px 30px",fontSize:i?"14px":"15px",boxShadow:"0 6px 24px rgba(14,165,233,0.35)"},children:[c.jsx(ql,{size:16,strokeWidth:2}),i?e.signIn:`${e.signIn} to Contact Us`,c.jsx(za,{size:15,strokeWidth:2.5})]}),c.jsxs("button",{onClick:()=>u(!0),className:"hero-btn",style:{background:"transparent",color:t?"rgba(255,255,255,0.75)":"#0f172a",padding:i?"11px 24px":"13px 28px",fontSize:i?"14px":"15px",border:`1px solid ${t?"rgba(255,255,255,0.15)":"rgba(0,0,0,0.12)"}`,boxShadow:"none",backdropFilter:"blur(8px)",WebkitBackdropFilter:"blur(8px)"},children:["Learn More",c.jsx(za,{size:15,strokeWidth:2.5})]})]})}),c.jsx("div",{className:"hero-stat-strip",style:{marginBottom:28,opacity:a?1:0,animation:a?"hero-fadeUp 0.6s ease-out 0.38s both":"none"},children:px.map(({target:d,suffix:h,label:g},y)=>c.jsx(gx,{target:d,suffix:h,label:g,isDark:t,isVisible:a,delay:y*.12},g))}),c.jsx("div",{style:{opacity:a?1:0,animation:a?"hero-fadeIn 0.8s ease-out 0.55s both":"none",display:"flex",justifyContent:"center"},children:c.jsxs("div",{className:"hero-trust",children:[c.jsx(ur,{size:11,fill:"currentColor",color:"#f59e0b",style:{opacity:.85}}),c.jsx(ur,{size:11,fill:"currentColor",color:"#f59e0b",style:{opacity:.85}}),c.jsx(ur,{size:11,fill:"currentColor",color:"#f59e0b",style:{opacity:.85}}),c.jsx(ur,{size:11,fill:"currentColor",color:"#f59e0b",style:{opacity:.85}}),c.jsx(ur,{size:11,fill:"currentColor",color:"#f59e0b",style:{opacity:.85}}),c.jsx("span",{style:{marginLeft:4},children:"Trusted by publishers across Delhi since 1995"}),c.jsx("span",{className:"hero-trust-dot"}),c.jsx("span",{children:"Dilshad Garden"})]})})]}),c.jsx("div",{style:{position:"absolute",bottom:0,left:0,right:0,height:80,background:t?"linear-gradient(to bottom,transparent,rgba(2,6,23,0.55))":"linear-gradient(to bottom,transparent,rgba(248,250,252,0.60))",pointerEvents:"none",zIndex:1}})]}),l&&c.jsx("div",{className:"hero-modal-overlay",onClick:()=>u(!1),children:c.jsxs("div",{className:"hero-modal-content",onClick:d=>d.stopPropagation(),style:{"--modal-bg":t?"#0f172a":"#ffffff","--close-bg":t?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.05)","--close-border":t?"rgba(255,255,255,0.15)":"rgba(0,0,0,0.1)","--close-color":t?"#94a3b8":"#64748b","--close-hover-bg":t?"rgba(255,255,255,0.15)":"rgba(0,0,0,0.1)"},children:[c.jsx("button",{className:"hero-modal-close",onClick:()=>u(!1),children:c.jsx(Ql,{size:20})}),c.jsxs("h2",{style:{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:i?"28px":"36px",fontWeight:400,color:t?"#f1f5f9":"#0f172a",marginBottom:24},children:["About"," ",c.jsx("span",{style:{background:"linear-gradient(135deg,#0ea5e9,#6366f1)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"BK Offset Printing"})]}),c.jsxs("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:i?"15px":"16px",lineHeight:1.8,color:t?"rgba(255,255,255,0.8)":"#1e293b"},children:[c.jsxs("p",{style:{marginBottom:20},children:[c.jsx("strong",{children:"BK Offset Printing"})," has been a trusted name in the printing industry since 1995, serving publishers, authors, and businesses across Delhi with premium printing solutions."]}),c.jsx("h3",{style:{fontSize:"18px",fontWeight:600,color:"#0ea5e9",marginBottom:12,marginTop:24},children:"Our Services"}),c.jsxs("ul",{style:{marginBottom:20,paddingLeft:20},children:[c.jsxs("li",{style:{marginBottom:8},children:[c.jsx("strong",{children:"Bulk Book Printing:"})," High-volume printing for publishers, authors, and institutions. Textbooks, novels, catalogs, and manuals."]}),c.jsxs("li",{style:{marginBottom:8},children:[c.jsx("strong",{children:"Thermal Gloss Lamination:"})," Premium gloss finish using Fevicol-based adhesives that makes colours pop and protects your prints."]}),c.jsxs("li",{style:{marginBottom:8},children:[c.jsx("strong",{children:"Matte Lamination:"})," Sophisticated, non-reflective finish for premium covers that need to feel as good as they look."]}),c.jsxs("li",{style:{marginBottom:8},children:[c.jsx("strong",{children:"Soft-Touch Lamination:"})," Velvety, luxurious texture ideal for book covers, premium brochures, and collector's editions."]}),c.jsxs("li",{style:{marginBottom:8},children:[c.jsx("strong",{children:"Title Printing:"})," Custom title work with embossing, debossing, spot UV, and digital printing."]})]}),c.jsx("h3",{style:{fontSize:"18px",fontWeight:600,color:"#0ea5e9",marginBottom:12,marginTop:24},children:"Our Equipment"}),c.jsx("p",{style:{marginBottom:16},children:"We operate world-class Heidelberg and Akiyama equipment, including:"}),c.jsxs("ul",{style:{marginBottom:20,paddingLeft:20},children:[c.jsx("li",{children:"Heidelberg Speedmaster Multicolor (Flagship 4-colour press)"}),c.jsx("li",{children:"Akiyama 4-Colour Press with alcohol-damping system"}),c.jsx("li",{children:"Heidelberg Autoplate automated plate-loading system"}),c.jsx("li",{children:"Heidelberg SORDZ 2-Colour press (25×36 inches)"}),c.jsx("li",{children:"Industrial-grade thermal lamination machines"}),c.jsx("li",{children:"Automatic paper cutting machines with ±0.01mm accuracy"})]}),c.jsx("h3",{style:{fontSize:"18px",fontWeight:600,color:"#0ea5e9",marginBottom:12,marginTop:24},children:"Why Choose Us"}),c.jsxs("div",{style:{display:"grid",gridTemplateColumns:i?"1fr":"repeat(3, 1fr)",gap:16,marginTop:16,marginBottom:24},children:[c.jsxs("div",{style:{padding:16,background:t?"rgba(255,255,255,0.05)":"rgba(14,165,233,0.05)",borderRadius:12,border:`1px solid ${t?"rgba(255,255,255,0.1)":"rgba(14,165,233,0.2)"}`},children:[c.jsx("div",{style:{fontSize:24,marginBottom:8},children:"🎯"}),c.jsx("h4",{style:{fontWeight:600,marginBottom:4},children:"30+ Years Experience"}),c.jsx("p",{style:{fontSize:"14px",color:t?"rgba(255,255,255,0.6)":"#475569"},children:"Trusted by thousands of businesses since 1995"})]}),c.jsxs("div",{style:{padding:16,background:t?"rgba(255,255,255,0.05)":"rgba(14,165,233,0.05)",borderRadius:12,border:`1px solid ${t?"rgba(255,255,255,0.1)":"rgba(14,165,233,0.2)"}`},children:[c.jsx("div",{style:{fontSize:24,marginBottom:8},children:"⚡"}),c.jsx("h4",{style:{fontWeight:600,marginBottom:4},children:"Fast Turnaround"}),c.jsx("p",{style:{fontSize:"14px",color:t?"rgba(255,255,255,0.6)":"#475569"},children:"Quick delivery without compromise on quality"})]}),c.jsxs("div",{style:{padding:16,background:t?"rgba(255,255,255,0.05)":"rgba(14,165,233,0.05)",borderRadius:12,border:`1px solid ${t?"rgba(255,255,255,0.1)":"rgba(14,165,233,0.2)"}`},children:[c.jsx("div",{style:{fontSize:24,marginBottom:8},children:"🏆"}),c.jsx("h4",{style:{fontWeight:600,marginBottom:4},children:"Premium Quality"}),c.jsx("p",{style:{fontSize:"14px",color:t?"rgba(255,255,255,0.6)":"#475569"},children:"Every print meets the highest standards"})]})]}),c.jsx("p",{style:{fontStyle:"italic",color:"#0ea5e9",textAlign:"center",marginTop:24,padding:16,borderTop:`1px solid ${t?"rgba(255,255,255,0.1)":"rgba(14,165,233,0.2)"}`},children:'"We welcome publishers, authors, and businesses for live demonstrations at our facility in Dilshad Garden."'})]})]})})]})}function gx({target:e,suffix:t,label:n,isDark:r,isVisible:i,delay:o}){const[s,a]=A.useState(0),l=Ye.useRef(!1);return A.useEffect(()=>{if(!i||l.current)return;l.current=!0;const u=1600,d=o*1e3;function h(v){return 1-Math.pow(1-v,3)}let g;const y=setTimeout(()=>{const v=performance.now();function w(C){const p=Math.min((C-v)/u,1);a(Math.floor(h(p)*e)),p<1?g=requestAnimationFrame(w):a(e)}g=requestAnimationFrame(w)},d);return()=>{clearTimeout(y),cancelAnimationFrame(g)}},[i,e,o]),c.jsxs("div",{className:"hero-stat",style:{opacity:i?1:0,animation:i?`hero-counter 0.5s ease-out ${.38+o}s both`:"none"},children:[c.jsxs("div",{className:"hero-stat-num",style:{color:r?void 0:"#0f172a",WebkitTextFillColor:r?void 0:"#0f172a",fontVariantNumeric:"tabular-nums",minWidth:"3.5ch"},children:[s,t]}),c.jsx("div",{className:"hero-stat-label",style:{color:r?void 0:"rgba(0,0,0,0.40)"},children:n})]})}const mx=`
  @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap');

  @keyframes ps-fadeUp {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .ps-card {
    position: relative;
    overflow: hidden;
    cursor: default;
    transition:
      box-shadow   0.4s cubic-bezier(.22,1,.36,1),
      transform    0.4s cubic-bezier(.22,1,.36,1),
      border-color 0.3s ease,
      background   0.35s ease;
  }

  /* shimmer sweep on hover */
  .ps-card::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      130deg,
      transparent 0%,
      rgba(255,255,255,0.06) 45%,
      transparent 90%
    );
    transform: translateX(-110%) skewX(-10deg);
    transition: transform 0.65s cubic-bezier(.22,1,.36,1);
    pointer-events: none;
    z-index: 1;
  }
  .ps-card:hover::before {
    transform: translateX(210%) skewX(-10deg);
  }

  /* coloured bottom bar */
  .ps-card::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 2px;
    background: var(--ps-accent, #0ea5e9);
    transform: scaleX(0);
    transform-origin: left center;
    border-radius: 0 0 18px 18px;
    transition: transform 0.4s cubic-bezier(.22,1,.36,1);
  }
  .ps-card:hover::after { transform: scaleX(1); }

  .ps-card:hover { transform: translateY(-6px); }

  .ps-icon {
    transition:
      background  0.35s ease,
      color       0.35s ease,
      box-shadow  0.35s ease,
      transform   0.4s cubic-bezier(.34,1.56,.64,1);
  }
  .ps-card:hover .ps-icon {
    transform: scale(1.1) rotate(5deg);
  }

  .ps-badge {
    transition: opacity 0.3s ease;
  }
  .ps-card:hover .ps-badge { opacity: 0.55 !important; }

  .ps-pill {
    transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease;
  }
  .ps-card:hover .ps-pill {
    background: var(--ps-accent-light, rgba(14,165,233,0.14)) !important;
    color: var(--ps-accent, #0ea5e9) !important;
    border-color: var(--ps-accent-border, rgba(14,165,233,0.25)) !important;
  }

  .ps-divider {
    transition: background 0.35s ease;
  }

  .ps-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-family: 'DM Sans', sans-serif;
    font-size: 10.5px;
    font-weight: 600;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }
  .ps-eyebrow::before, .ps-eyebrow::after {
    content: '';
    display: block;
    width: 28px;
    height: 1px;
    opacity: 0.6;
    background: currentColor;
  }

  .ps-intro {
    position: relative;
  }
  .ps-intro::before {
    content: '';
    position: absolute;
    left: 0; top: 12px; bottom: 12px;
    width: 3px;
    border-radius: 2px;
    background: var(--ps-grad);
  }
`,yx=[{title:"Bulk Book Printing",desc:"High-volume printing for publishers, authors, and institutions. Consistent quality across thousands of copies — textbooks, novels, catalogs, and manuals.",icon:V2,features:["Perfect binding","Case binding","Saddle stitch","Spiral binding"],accent:"#0ea5e9",accentLight:"rgba(14,165,233,0.10)",accentBorder:"rgba(14,165,233,0.22)",accentGlow:"rgba(14,165,233,0.28)"},{title:"Thermal Gloss Lamination",desc:"Premium gloss lamination using Fevicol-based adhesives. A shiny, protective finish that makes colours pop and stands up to daily handling.",icon:vh,features:["High-gloss finish","Scratch-resistant","Water-resistant","UV protection"],accent:"#8b5cf6",accentLight:"rgba(139,92,246,0.10)",accentBorder:"rgba(139,92,246,0.22)",accentGlow:"rgba(139,92,246,0.28)"},{title:"Matte Lamination",desc:"Sophisticated, non-reflective finish using Fevicol-based adhesives. The go-to for premium covers that need to feel as good as they look.",icon:gh,features:["Non-reflective finish","Soft-touch feel","Fingerprint resistant","Professional look"],accent:"#10b981",accentLight:"rgba(16,185,129,0.10)",accentBorder:"rgba(16,185,129,0.22)",accentGlow:"rgba(16,185,129,0.28)"},{title:"Soft-Touch Lamination",desc:"Velvety, luxurious texture that turns every printed piece into an experience. Ideal for book covers, premium brochures, and collector's editions.",icon:q2,features:["Velvety smooth finish","Premium feel","Scuff-resistant","Enhances colours"],accent:"#f59e0b",accentLight:"rgba(245,158,11,0.10)",accentBorder:"rgba(245,158,11,0.22)",accentGlow:"rgba(245,158,11,0.28)"},{title:"Title Printing",desc:"Custom title work for book spines, special-edition covers, and branded collateral. Every detail crafted to make your title unforgettable.",icon:nx,features:["Embossing / Debossing","Spot UV","Digital printing","Custom fonts"],accent:"#ec4899",accentLight:"rgba(236,72,153,0.10)",accentBorder:"rgba(236,72,153,0.22)",accentGlow:"rgba(236,72,153,0.28)"}];function vx({isDark:e,c:t,isMobile:n,isTablet:r}){const[i,o]=ai(),s=te.primary,a=te.grad;return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:mx}),c.jsx("style",{children:`:root { --ps-grad: ${a}; }`}),c.jsxs("section",{ref:i,style:{padding:n?"72px 20px":"110px 40px",maxWidth:1200,margin:"0 auto"},children:[c.jsxs("div",{style:{textAlign:"center",marginBottom:n?44:64,opacity:o?1:0,animation:o?"ps-fadeUp 0.5s ease-out 0s both":"none"},children:[c.jsx("div",{className:"ps-eyebrow",style:{color:s,marginBottom:16,justifyContent:"center"},children:"What we offer"}),c.jsxs("h2",{style:{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:n?"36px":"54px",fontWeight:400,letterSpacing:"-0.025em",lineHeight:1.08,color:t.text,margin:"0 0 28px"},children:["Our Printing"," ",c.jsx("em",{style:{fontStyle:"italic",background:a,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"Services"})]}),c.jsx("div",{className:"ps-intro",style:{display:"inline-block",maxWidth:580,textAlign:"left",padding:"16px 22px 16px 28px",background:e?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.028)",border:`1px solid ${e?"rgba(255,255,255,0.09)":"rgba(0,0,0,0.075)"}`,borderRadius:12},children:c.jsx("p",{style:{margin:0,fontFamily:"'DM Sans', sans-serif",fontSize:n?"13.5px":"14.5px",lineHeight:1.75,color:t.textMid??t.textDim},children:"Specialising in high-quality bulk book printing and professional lamination services. We use premium Fevicol-based adhesives, serving publishers, authors, and businesses across Delhi."})})]}),c.jsx("div",{style:{display:"grid",gridTemplateColumns:n?"1fr":r?"repeat(2, 1fr)":"repeat(3, 1fr)",gap:n?16:20},children:yx.map((l,u)=>c.jsx(xx,{...l,index:u+1,isDark:e,c:t,isMobile:n,isVisible:o,delay:.07+u*.07},l.title))})]})]})}function xx({title:e,desc:t,icon:n,features:r,accent:i,accentLight:o,accentBorder:s,accentGlow:a,index:l,isDark:u,c:d,isMobile:h,isVisible:g,delay:y}){const[v,w]=A.useState(!1),C=v?u?"rgba(255,255,255,0.055)":"rgba(255,255,255,1)":u?"rgba(255,255,255,0.03)":"rgba(255,255,255,0.82)",p=v?u?"rgba(255,255,255,0.14)":"rgba(0,0,0,0.10)":u?"rgba(255,255,255,0.07)":"rgba(0,0,0,0.075)",f=v?u?`0 28px 64px rgba(0,0,0,0.55), 0 0 0 1px ${o}`:`0 20px 56px rgba(0,0,0,0.09), 0 0 0 1px ${o}`:u?"0 1px 3px rgba(0,0,0,0.4)":"0 1px 4px rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.04)";return c.jsxs("div",{className:"ps-card",onMouseEnter:()=>w(!0),onMouseLeave:()=>w(!1),style:{"--ps-accent":i,"--ps-accent-light":o,"--ps-accent-border":s,background:C,border:`1px solid ${p}`,borderRadius:18,padding:h?"28px 22px":"32px 28px",backdropFilter:"blur(14px)",WebkitBackdropFilter:"blur(14px)",boxShadow:f,opacity:g?1:0,animation:g?`ps-fadeUp 0.55s ease-out ${y}s both`:"none",display:"flex",flexDirection:"column"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:22},children:[c.jsx("div",{className:"ps-icon",style:{width:50,height:50,borderRadius:14,background:v?i:o,display:"flex",alignItems:"center",justifyContent:"center",color:v?"#fff":i,boxShadow:v?`0 8px 22px ${a}`:"none",flexShrink:0},children:c.jsx(n,{size:20,strokeWidth:1.75})}),c.jsx("span",{className:"ps-badge",style:{fontFamily:"'DM Sans', sans-serif",fontSize:"11px",fontWeight:700,letterSpacing:"0.10em",color:u?"rgba(255,255,255,0.35)":"rgba(0,0,0,0.22)",opacity:.55,paddingTop:3},children:String(l).padStart(2,"0")})]}),c.jsx("h3",{style:{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:"20px",fontWeight:400,letterSpacing:"-0.01em",lineHeight:1.22,color:d.text,margin:"0 0 10px"},children:e}),c.jsx("p",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:"13.5px",color:d.textDim,lineHeight:1.72,margin:"0 0 22px",flex:1},children:t}),c.jsx("div",{className:"ps-divider",style:{height:"1px",background:v?`linear-gradient(90deg, ${i}55 0%, transparent 100%)`:u?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.07)",marginBottom:18}}),c.jsxs("div",{children:[c.jsx("p",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:"9.5px",fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:i,margin:"0 0 10px"},children:"Includes"}),c.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:r.map((m,x)=>c.jsx("span",{className:"ps-pill",style:{fontFamily:"'DM Sans', sans-serif",fontSize:"11.5px",fontWeight:500,padding:"4px 11px",borderRadius:20,background:u?"rgba(255,255,255,0.07)":o,color:u?"rgba(255,255,255,0.6)":`${i}cc`,border:`1px solid ${u?"rgba(255,255,255,0.1)":s}`},children:m},x))})]})]})}const wx=[{name:"Heidelberg Speedmaster Multicolor",category:"Offset Printing",tag:"Flagship",desc:"The Heidelberg Speedmaster — the world's most trusted multicolour press. Engineered for peak performance with cutting-edge Intellistart technology, delivering unmatched print quality at production speeds that set the industry standard.",spec:"Up to 4-colour"},{name:"Heidelberg Printing Machine",category:"Offset Printing",tag:"Industry Leader",desc:"State-of-the-art Heidelberg — a benchmark in precision engineering. From single-colour to complex multi-colour projects, automated controls, fast plate changes, and flawless registration deliver superior output trusted by professionals worldwide.",spec:"Multi-colour output"},{name:"Akiyama 4-Colour Press",category:"Offset Printing",tag:"Alcohol-Damped",desc:"Akiyama alcohol-damped 4-colour press — size 19×26 inches. Alcohol damping system provides superior ink-water balance for exceptional dot gain control and vivid, consistent colour across the entire sheet.",spec:"Size: 19×26 in"},{name:"Heidelberg Autoplate Machine",category:"Plate Making",tag:"Automated",desc:"Fully automated plate-loading system that eliminates manual handling errors. Reduces makeready time significantly, ensuring consistent plate registration and faster job turnaround for demanding print environments.",spec:"Auto plate loading"},{name:"Heidelberg Speedmaster Multicolor",category:"Offset Printing",tag:"Flagship",desc:"The Heidelberg Speedmaster — the world's most trusted multicolour press. Engineered for peak performance with cutting-edge Intellistart technology, delivering unmatched print quality at production speeds that set the industry standard.",spec:"Up to 4-colour"},{name:"Heidelberg SORDZ 2-Colour",category:"Offset Printing",tag:"Ref. #1447",desc:"Heidelberg SORDZ 2-colour offset printing machine. Sheet size 25×36 inches — perfectly balanced for medium-format commercial work. Renowned for its robust build and consistent colour reproduction across long runs.",spec:"Size: 25×36 in"},{name:"Thermal Lamination Machine",category:"Lamination",tag:"High-Speed",desc:"Industrial-grade thermal lamination delivering flawless gloss and matte finishes using Fevicol-based adhesives. Handles high volumes with precision heat control for bubble-free, scratch-resistant results every time.",spec:"±0.01mm accuracy"},{name:"Automatic Paper Cutting Machine",category:"Finishing",tag:"Ultra Precise",desc:"Automatic paper cutter delivering precise and flawless cuts at incredible speed. Ideal for high-volume printing and paper processing, this machine ensures efficiency and accuracy in every cut — streamlining workflow and maximising productivity.",spec:"High-volume ready"}],bx=`
  @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap');

  @keyframes gl-fadeUp {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  @keyframes gl-pulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(255,0,0,0.4); }
    50%       { box-shadow: 0 0 0 8px rgba(255,0,0,0); }
  }

  /* ── Card ── */
  .gl-card {
    position: relative;
    overflow: hidden;
    border-radius: 16px;
    cursor: pointer;
    transition:
      transform    0.4s cubic-bezier(.22,1,.36,1),
      box-shadow   0.4s cubic-bezier(.22,1,.36,1),
      border-color 0.3s ease;
  }

  /* Image zoom */
  .gl-card-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.55s cubic-bezier(.22,1,.36,1);
  }
  .gl-card:hover .gl-card-img {
    transform: scale(1.08);
  }

  /* Base gradient — always visible at bottom */
  .gl-base-grad {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      rgba(2,6,23,0.82) 0%,
      rgba(2,6,23,0.30) 45%,
      transparent 75%
    );
    pointer-events: none;
  }

  /* Hover overlay — slides up */
  .gl-hover-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      rgba(2,6,23,0.96) 0%,
      rgba(2,6,23,0.75) 55%,
      rgba(2,6,23,0.30) 100%
    );
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none;
  }
  .gl-card:hover .gl-hover-overlay { opacity: 1; }

  /* Category tag (top-left) */
  .gl-tag {
    position: absolute;
    top: 14px; left: 14px;
    font-family: 'DM Sans', sans-serif;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 4px 10px;
    border-radius: 999px;
    background: rgba(14,165,233,0.18);
    color: #7dd3fc;
    border: 1px solid rgba(14,165,233,0.30);
    backdrop-filter: blur(8px);
    z-index: 3;
    transition: background 0.3s ease, border-color 0.3s ease;
  }
  .gl-card:hover .gl-tag {
    background: rgba(14,165,233,0.30);
    border-color: rgba(14,165,233,0.55);
  }

  /* Index number (top-right) */
  .gl-index {
    position: absolute;
    top: 14px; right: 14px;
    font-family: 'DM Sans', sans-serif;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.08em;
    color: rgba(255,255,255,0.25);
    z-index: 3;
    transition: color 0.3s ease;
  }
  .gl-card:hover .gl-index { color: rgba(255,255,255,0.55); }

  /* Bottom info block */
  .gl-info {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    padding: 20px 18px 18px;
    z-index: 3;
    transform: translateY(0);
  }

  .gl-machine-name {
    font-family: 'Instrument Serif', Georgia, serif;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: -0.01em;
    color: #f1f5f9;
    line-height: 1.2;
    margin-bottom: 4px;
  }

  .gl-spec-badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-family: 'DM Sans', sans-serif;
    font-size: 10.5px;
    font-weight: 600;
    letter-spacing: 0.06em;
    color: #38bdf8;
    margin-bottom: 0;
  }

  /* Description — hidden until hover */
  .gl-desc {
    font-family: 'DM Sans', sans-serif;
    font-size: 12.5px;
    line-height: 1.65;
    color: rgba(255,255,255,0.65);
    margin-top: 10px;
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition:
      max-height 0.45s cubic-bezier(.22,1,.36,1),
      opacity    0.35s ease 0.05s,
      margin-top 0.35s ease;
  }
  .gl-card:hover .gl-desc {
    max-height: 120px;
    opacity: 1;
    margin-top: 10px;
  }

  /* Arrow icon */
  .gl-arrow {
    position: absolute;
    bottom: 18px; right: 18px;
    width: 32px; height: 32px;
    border-radius: 50%;
    background: rgba(14,165,233,0.20);
    border: 1px solid rgba(14,165,233,0.35);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #38bdf8;
    opacity: 0;
    transform: translateY(6px);
    transition:
      opacity   0.3s ease 0.1s,
      transform 0.3s cubic-bezier(.34,1.56,.64,1) 0.1s,
      background 0.2s ease;
    z-index: 4;
  }
  .gl-card:hover .gl-arrow {
    opacity: 1;
    transform: translateY(0);
  }
  .gl-arrow:hover {
    background: rgba(14,165,233,0.40) !important;
  }

  /* ── Accent line ── */
  .gl-card::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, #0ea5e9, #6366f1);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s cubic-bezier(.22,1,.36,1);
    z-index: 5;
  }
  .gl-card:hover::after { transform: scaleX(1); }

  /* ── Featured card (spans 2 cols) ── */
  .gl-featured {
    grid-column: span 2;
  }
  .gl-featured .gl-machine-name { font-size: 22px; }

  /* ── YT Quote ── */
  .gl-yt-quote {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
    margin-top: 40px;
    font-family: 'DM Sans', sans-serif;
    font-size: 13.5px;
    color: rgba(255,255,255,0.35);
    letter-spacing: 0.01em;
    flex-wrap: wrap;
    text-align: center;
    line-height: 1.6;
  }

  .gl-yt-rule {
    width: 36px; height: 1px;
    background: rgba(255,255,255,0.12);
    flex-shrink: 0;
  }

  .gl-yt-link {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    color: #FF0000;
    font-weight: 600;
    text-decoration: none;
    border-bottom: 1px solid rgba(255,0,0,0.28);
    padding-bottom: 1px;
    transition:
      color        0.2s ease,
      border-color 0.2s ease,
      gap          0.2s ease;
  }
  .gl-yt-link:hover {
    color: #ff4d4d;
    border-color: rgba(255,77,77,0.65);
    gap: 6px;
  }

  /* Section eyebrow */
  .gl-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-family: 'DM Sans', sans-serif;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }
  .gl-eyebrow::before, .gl-eyebrow::after {
    content: '';
    display: block;
    width: 24px; height: 1px;
    background: currentColor;
    opacity: 0.55;
  }

  @media (max-width: 640px) {
    .gl-featured { grid-column: span 1; }
  }
`;function Sx({text:e,isDark:t,c:n,isMobile:r,isTablet:i}){const[o,s]=ai(),a=C0??[],l=u=>a[u]??null;return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:bx}),c.jsx("section",{ref:o,style:{padding:r?"72px 20px":"110px 40px",background:t?"linear-gradient(rgba(2,6,23,0.94), rgba(4,8,28,0.96)), url('https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=1920&q=80')":"linear-gradient(rgba(240,249,255,0.90), rgba(236,246,255,0.92)), url('https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=1920&q=80')",backgroundSize:"cover",backgroundPosition:"center",backgroundAttachment:r?"scroll":"fixed",borderTop:`1px solid ${n.border}`,borderBottom:`1px solid ${n.border}`},children:c.jsxs("div",{style:{maxWidth:1200,margin:"0 auto"},children:[c.jsxs("div",{style:{textAlign:"center",marginBottom:r?40:56,opacity:s?1:0,animation:s?"gl-fadeUp 0.5s ease-out 0s both":"none"},children:[c.jsx("div",{className:"gl-eyebrow",style:{color:"#0ea5e9",justifyContent:"center",marginBottom:14},children:"Our Machinery"}),c.jsxs("h2",{style:{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:r?"34px":"52px",fontWeight:400,letterSpacing:"-0.025em",lineHeight:1.08,color:t?"#f1f5f9":"#0f172a",margin:"0 0 16px"},children:["Built for"," ",c.jsx("em",{style:{fontStyle:"italic",background:"linear-gradient(135deg,#0ea5e9,#6366f1)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"Precision"})]}),c.jsx("p",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:r?"14px":"15px",color:t?"rgba(255,255,255,0.42)":"#64748b",maxWidth:520,margin:"0 auto",lineHeight:1.7},children:"World-class Heidelberg and Akiyama equipment — engineered for flawless output, maximum throughput, and zero compromise on quality."})]}),c.jsx("div",{style:{display:"grid",gridTemplateColumns:r?"1fr":i?"repeat(2, 1fr)":"repeat(3, 1fr)",gridAutoRows:r?"220px":"260px",gap:r?14:18},children:wx.map((u,d)=>{const h=d===0&&!r&&!i;return c.jsx(kx,{machine:u,src:l(d),index:d+1,isDark:t,isVisible:s,delay:.06+d*.06,isFeatured:h},d)})}),c.jsxs("div",{className:"gl-yt-quote",style:{opacity:s?1:0,animation:s?"gl-fadeUp 0.5s ease-out 0.5s both":"none"},children:[c.jsx("span",{className:"gl-yt-rule"}),c.jsxs("span",{children:["Want to see these machines in action? Watch live demos on our"," ",c.jsxs("a",{href:"https://youtube.com/@b.k.offset?si=Y3rb_e2Y9oTBsgw7",target:"_blank",rel:"noopener noreferrer",className:"gl-yt-link",children:[c.jsx(Xl,{size:13,strokeWidth:2}),"YouTube channel",c.jsx(Ir,{size:11,strokeWidth:2.5})]})]}),c.jsx("span",{className:"gl-yt-rule"})]})]})})]})}function kx({machine:e,src:t,index:n,isDark:r,isVisible:i,delay:o,isFeatured:s}){const[a,l]=A.useState(!1),u=["linear-gradient(135deg,#0c1a3a,#0ea5e9)","linear-gradient(135deg,#1a0c3a,#6366f1)","linear-gradient(135deg,#0c2a1a,#10b981)","linear-gradient(135deg,#2a1a0c,#f59e0b)","linear-gradient(135deg,#2a0c1a,#ec4899)","linear-gradient(135deg,#0c1a2a,#0ea5e9)","linear-gradient(135deg,#1a2a0c,#84cc16)","linear-gradient(135deg,#2a200c,#f97316)"];return c.jsxs("div",{className:`gl-card${s?" gl-featured":""}`,onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),style:{border:`1px solid ${a?"rgba(14,165,233,0.40)":r?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.08)"}`,boxShadow:a?"0 24px 56px rgba(0,0,0,0.45), 0 0 0 1px rgba(14,165,233,0.15)":"0 2px 8px rgba(0,0,0,0.20)",transform:a?"translateY(-6px)":"translateY(0)",opacity:i?1:0,animation:i?`gl-fadeUp 0.55s ease-out ${o}s both`:"none",background:t?void 0:u[n-1]??"#0c1a3a"},children:[t&&c.jsx("img",{className:"gl-card-img",src:t,alt:e.name,loading:"lazy"}),!t&&c.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",opacity:.15},children:c.jsx(Ua,{size:64,color:"#fff",strokeWidth:1})}),c.jsx("div",{className:"gl-base-grad"}),c.jsx("div",{className:"gl-hover-overlay"}),c.jsx("div",{className:"gl-tag",children:e.category}),c.jsx("div",{className:"gl-index",children:String(n).padStart(2,"0")}),c.jsxs("div",{className:"gl-info",children:[c.jsxs("div",{className:"gl-spec-badge",children:[c.jsx(Ua,{size:10,strokeWidth:2.5}),e.spec]}),c.jsx("div",{className:"gl-machine-name",children:e.name}),c.jsx("div",{style:{display:"inline-block",fontFamily:"'DM Sans', sans-serif",fontSize:"10px",fontWeight:600,letterSpacing:"0.08em",padding:"2px 8px",borderRadius:"999px",background:"rgba(99,102,241,0.22)",color:"#a5b4fc",border:"1px solid rgba(99,102,241,0.30)",marginTop:5},children:e.tag}),c.jsx("div",{className:"gl-desc",children:e.desc})]}),c.jsx("div",{className:"gl-arrow",children:c.jsx(Ir,{size:14,strokeWidth:2.5})})]})}const Vu={layers:{color:"#0ea5e9",glow:"rgba(14,165,233,0.25)",faint:"rgba(14,165,233,0.08)",grad:"linear-gradient(135deg,#0ea5e9,#6366f1)",label:"Capabilities"},zap:{color:"#f59e0b",glow:"rgba(245,158,11,0.25)",faint:"rgba(245,158,11,0.08)",grad:"linear-gradient(135deg,#d97706,#fbbf24)",label:"Reductions"},leaf:{color:"#22c55e",glow:"rgba(34,197,94,0.25)",faint:"rgba(34,197,94,0.08)",grad:"linear-gradient(135deg,#16a34a,#4ade80)",label:"Sustainability"}},_x=`
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

  @media (max-width: 640px) {
    .wo-tab { padding: 8px 12px; font-size: 12px; }
    .wo-tab-icon { width: 22px; height: 22px; }
  }
`,Gu=[{key:"layers",icon:gh,titleKey:"woPerfTitle",descKey:"woPerfDesc",itemsKey:"woPerfList",footKey:"woPerfFoot"},{key:"zap",icon:Ua,titleKey:"woEnvTitle",descKey:"woEnvDesc",itemsKey:"woEnvList",footKey:"woEnvFoot"},{key:"leaf",icon:Q2,titleKey:"woSusTitle",descKey:"woSusDesc",itemsKey:"woSusList",footKey:"woSusFoot"}];function Ex({text:e,isDark:t,c:n,isMobile:r,isTablet:i}){var w,C;const[o,s]=ai(),[a,l]=A.useState("layers"),u=Vu[a],d=Gu.find(p=>p.key===a),h=t?"rgba(255,255,255,0.03)":"rgba(255,255,255,0.85)",g=t?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.07)",y=t?"#f1f5f9":"#0f172a",v=t?"rgba(255,255,255,0.48)":"#475569";return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:_x}),c.jsx("section",{ref:o,style:{background:t?"linear-gradient(rgba(2,6,23,0.94),rgba(4,8,28,0.96)),url('https://images.unsplash.com/photo-1563906267088-b029e7101114?w=1920&q=80')":"linear-gradient(rgba(250,250,248,0.92),rgba(244,241,236,0.94)),url('https://images.unsplash.com/photo-1563906267088-b029e7101114?w=1920&q=80')",backgroundSize:"cover",backgroundPosition:"center",backgroundAttachment:r?"scroll":"fixed",padding:r?"64px 20px":"88px 40px"},children:c.jsxs("div",{style:{maxWidth:1100,margin:"0 auto",opacity:s?1:0,animation:s?"wo-fadeUp 0.5s ease-out both":"none"},children:[c.jsxs("div",{style:{textAlign:"center",marginBottom:r?32:40},children:[c.jsxs("div",{className:"wo-eyebrow",style:{color:"#0ea5e9",justifyContent:"center",marginBottom:14},children:[c.jsx(tx,{size:11,strokeWidth:2,style:{marginRight:-2}}),e.woTitle]}),c.jsx("h2",{className:"wo-hero-grad",style:{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:r?"30px":"clamp(32px,4.5vw,48px)",fontWeight:400,letterSpacing:"-0.025em",lineHeight:1.1,margin:"0 0 12px"},children:e.woTagline}),c.jsx("p",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:r?"13.5px":"14.5px",color:v,maxWidth:560,margin:"0 auto",lineHeight:1.7},children:e.woHeroDesc})]}),c.jsxs("div",{style:{background:h,border:`1px solid ${g}`,borderRadius:20,backdropFilter:"blur(16px)",WebkitBackdropFilter:"blur(16px)",overflow:"hidden",boxShadow:t?"0 2px 8px rgba(0,0,0,0.4)":"0 2px 8px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.04)"},children:[c.jsx("div",{style:{display:"flex",gap:4,padding:"12px 14px",borderBottom:`1px solid ${g}`,overflowX:"auto",scrollbarWidth:"none"},children:Gu.map(({key:p,icon:f})=>{const m=Vu[p],x=p===a;return c.jsxs("button",{className:`wo-tab${x?" wo-tab-active":""}`,onClick:()=>l(p),style:{"--wo-glow":m.glow,"--wo-grad":m.grad,color:x?m.color:v,background:x?t?`${m.faint}`:m.faint:"transparent",borderColor:x?t?`${m.color}30`:`${m.color}28`:"transparent"},children:[c.jsx("div",{className:"wo-tab-icon",style:{background:x?m.grad:"transparent",boxShadow:x?`0 2px 8px ${m.glow}`:"none",color:x?"#fff":m.color},children:c.jsx(f,{size:13,strokeWidth:2})}),m.label]},p)})}),c.jsxs("div",{className:"wo-panel-content",style:{display:"grid",gridTemplateColumns:r?"1fr":"1fr 1fr",gap:0},children:[c.jsxs("div",{style:{padding:r?"28px 24px":"36px 40px",borderRight:r?"none":`1px solid ${g}`,borderBottom:r?`1px solid ${g}`:"none",display:"flex",flexDirection:"column",gap:16},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14},children:[c.jsx("div",{style:{width:44,height:44,borderRadius:12,background:u.grad,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",boxShadow:`0 6px 18px ${u.glow}`,flexShrink:0},children:d&&c.jsx(d.icon,{size:18,strokeWidth:1.75})}),c.jsx("h3",{style:{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:r?"18px":"22px",fontWeight:400,letterSpacing:"-0.02em",color:y,lineHeight:1.2,margin:0},children:e[d.titleKey]})]}),c.jsx("p",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:"13.5px",color:v,lineHeight:1.75,margin:0,flex:1},children:e[d.descKey]}),e[d.footKey]&&c.jsx("div",{className:"wo-quote",style:{"--wo-grad":u.grad,background:t?"rgba(255,255,255,0.04)":u.faint,border:`1px solid ${t?"rgba(255,255,255,0.07)":`${u.color}22`}`},children:c.jsx("p",{style:{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:"13.5px",fontStyle:"italic",color:v,lineHeight:1.7,margin:0},children:e[d.footKey]})})]}),c.jsxs("div",{style:{padding:r?"24px":"28px 32px"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:14,paddingBottom:12,borderBottom:`1px solid ${t?"rgba(255,255,255,0.07)":`${u.color}18`}`},children:[c.jsx("div",{style:{width:7,height:7,borderRadius:"50%",background:u.grad,boxShadow:`0 0 7px ${u.glow}`}}),c.jsx("span",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:"9.5px",fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:u.color},children:u.label}),c.jsxs("span",{style:{marginLeft:"auto",fontFamily:"'DM Sans', sans-serif",fontSize:"11px",color:t?"rgba(255,255,255,0.22)":"rgba(0,0,0,0.25)"},children:[((w=e[d.itemsKey])==null?void 0:w.length)??0," items"]})]}),c.jsx("div",{style:{display:"flex",flexDirection:"column",gap:3},children:(C=e[d.itemsKey])==null?void 0:C.map((p,f)=>c.jsx(Tx,{label:p,a:u,isDark:t},f))})]})]},a)]}),e.woHeroDesc2&&c.jsx("p",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:"13px",color:t?"rgba(255,255,255,0.28)":"rgba(0,0,0,0.38)",textAlign:"center",marginTop:20,lineHeight:1.6,maxWidth:600,margin:"20px auto 0"},children:e.woHeroDesc2})]})})]})}function Tx({label:e,a:t,isDark:n}){const[r,i]=A.useState(!1);return c.jsxs("div",{className:"wo-item",onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),style:{background:r?t.faint:"transparent",borderColor:r?`${t.color}40`:"transparent"},children:[c.jsx("div",{className:"wo-check",style:{background:r?t.grad:n?"rgba(255,255,255,0.07)":t.faint,boxShadow:r?`0 2px 8px ${t.glow}`:"none",border:r?"none":`1px solid ${t.color}44`},children:c.jsx("svg",{width:"8",height:"8",viewBox:"0 0 10 10",fill:"none",children:c.jsx("path",{d:"M2 5.5L4 7.5L8 3",stroke:r?"#fff":t.color,strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})}),c.jsx("span",{className:"wo-item-label",style:{color:r?n?"#f1f5f9":"#0f172a":n?"rgba(255,255,255,0.55)":"#475569",fontWeight:r?600:400},children:e}),c.jsx(za,{size:12,strokeWidth:2,style:{marginLeft:"auto",flexShrink:0,color:t.color,opacity:r?.75:0,transform:r?"translateX(0)":"translateX(-4px)",transition:"opacity 0.18s ease, transform 0.18s ease"}})]})}const Ix=`
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
`,Ku="https://maps.app.goo.gl/GQqACqym97FV1PYb9",Yu="Street No. 2, Zulfe Bengal, Dilshad Garden, Delhi — 110095",Cx=[{day:"Monday – Sunday",time:"10:00 AM – 6:00 PM",open:!0},{day:"Tuesday",time:"Closed",open:!1}];function Px({text:e,c:t,isMobile:n}){var v;const[r,i]=ai(),[o,s]=A.useState(!1),[a,l]=A.useState(!1);(v=t==null?void 0:t.bg)==null||v.includes("2");const u=(t==null?void 0:t.border)??"rgba(0,0,0,0.08)",d=(t==null?void 0:t.surf)??"rgba(255,255,255,0.85)",h=(t==null?void 0:t.text)??"#0f172a",g=(t==null?void 0:t.textDim)??"#64748b",y=()=>{var w;(w=navigator.clipboard)==null||w.writeText(Yu).then(()=>{s(!0),setTimeout(()=>s(!1),2e3)})};return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:Ix}),c.jsxs("section",{ref:r,style:{padding:n?"72px 20px":"110px 40px",maxWidth:1200,margin:"0 auto"},children:[c.jsxs("div",{style:{textAlign:"center",marginBottom:n?36:52,opacity:i?1:0,animation:i?"loc-fadeUp 0.5s ease-out both":"none"},children:[c.jsxs("div",{className:"loc-eyebrow",style:{color:"#0ea5e9",justifyContent:"center",marginBottom:14},children:[c.jsx(Fa,{size:11,strokeWidth:2,style:{marginRight:-2}}),"Find Us"]}),c.jsxs("h2",{style:{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:n?"32px":"clamp(34px,4vw,48px)",fontWeight:400,letterSpacing:"-0.025em",lineHeight:1.1,color:h,margin:"0 0 12px"},children:["Visit Our"," ",c.jsx("em",{style:{fontStyle:"italic",background:"linear-gradient(135deg,#0ea5e9,#6366f1)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"Press"})]}),c.jsx("p",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:"14.5px",color:g,maxWidth:420,margin:"0 auto",lineHeight:1.7},children:"Come see our machines in person. We welcome publishers, authors, and businesses for a live demonstration."})]}),c.jsxs("div",{style:{display:"grid",gridTemplateColumns:n?"1fr":"380px 1fr",gap:n?20:24,alignItems:"start",opacity:i?1:0,animation:i?"loc-fadeUp 0.55s ease-out 0.1s both":"none"},children:[c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:14},children:[c.jsx("div",{className:"loc-card",style:{"--loc-grad":"linear-gradient(90deg,#0ea5e9,#6366f1)","--loc-border":u,background:d,border:`1px solid ${u}`,backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)",padding:"22px 22px 20px",boxShadow:"0 1px 4px rgba(0,0,0,0.05)"},children:c.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:14},children:[c.jsxs("div",{style:{position:"relative",flexShrink:0,marginTop:2},children:[c.jsx("div",{className:"loc-ping",style:{width:32,height:32,top:-6,left:-6}}),c.jsx("div",{className:"loc-ping",style:{width:32,height:32,top:-6,left:-6,animationDelay:"0.7s"}}),c.jsx(Fa,{size:20,strokeWidth:1.75,color:"#0ea5e9",className:"loc-pin-icon"})]}),c.jsxs("div",{style:{flex:1},children:[c.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:"9.5px",fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:"#0ea5e9",marginBottom:6},children:"Address"}),c.jsx("p",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:"14px",color:h,lineHeight:1.65,margin:"0 0 12px",fontWeight:500},children:Yu}),c.jsx("button",{className:"loc-copy-btn",onClick:y,style:{color:o?"#22c55e":g,background:o?"rgba(34,197,94,0.08)":"transparent"},children:o?c.jsxs(c.Fragment,{children:[c.jsx(G2,{size:11,strokeWidth:2.5})," Copied!"]}):c.jsxs(c.Fragment,{children:[c.jsx(Y2,{size:11,strokeWidth:2})," Copy address"]})})]})]})}),c.jsxs("div",{className:"loc-card",style:{"--loc-grad":"linear-gradient(90deg,#f59e0b,#f97316)","--loc-border":u,background:d,border:`1px solid ${u}`,backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)",padding:"22px 22px 20px",boxShadow:"0 1px 4px rgba(0,0,0,0.05)"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:14},children:[c.jsx("div",{style:{width:34,height:34,borderRadius:10,background:"rgba(245,158,11,0.10)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:c.jsx(fh,{size:16,strokeWidth:1.75,color:"#f59e0b"})}),c.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:"9.5px",fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:"#f59e0b"},children:"Working Hours"})]}),c.jsx("div",{style:{"--loc-border":u},children:Cx.map(({day:w,time:C,open:p})=>c.jsxs("div",{className:"loc-hours-row",style:{"--loc-border":u},children:[c.jsx("span",{style:{fontFamily:"'DM Sans', sans-serif",color:g,fontWeight:400},children:w}),c.jsxs("span",{style:{fontFamily:"'DM Sans', sans-serif",fontWeight:600,color:p?h:"#ef4444",fontSize:"12.5px",display:"flex",alignItems:"center",gap:5},children:[c.jsx("span",{style:{width:6,height:6,borderRadius:"50%",background:p?"#22c55e":"#ef4444",display:"inline-block",flexShrink:0}}),C]})]},w))})]}),c.jsxs("a",{href:Ku,target:"_blank",rel:"noopener noreferrer",className:"loc-dir-btn",style:{justifyContent:"center"},children:[c.jsx(ex,{size:15,strokeWidth:2}),"Get Directions",c.jsx(Bu,{size:13,strokeWidth:2,style:{opacity:.7}})]})]}),c.jsxs("div",{className:"loc-map-wrap",onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),style:{border:`1px solid ${a?"rgba(14,165,233,0.40)":u}`,boxShadow:a?"0 20px 56px rgba(0,0,0,0.12), 0 0 0 1px rgba(14,165,233,0.15)":"0 2px 8px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.04)"},children:[c.jsx("iframe",{title:"BK Offset Printing Location",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.623543258682!2d77.30097397549766!3d28.68163887564272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb9fa8843451%3A0x4d76d14b74785b08!2sZulfe%20Bengal%2C%20Dilshad%20Garden%2C%20Delhi%2C%20110095!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",width:"100%",height:n?"300":"450",style:{border:"none",display:"block",filter:"saturate(1.1) contrast(1.02)"},loading:"lazy",allowFullScreen:!0,referrerPolicy:"no-referrer-when-downgrade"}),c.jsxs("a",{href:Ku,target:"_blank",rel:"noopener noreferrer",style:{position:"absolute",bottom:14,right:14,display:"inline-flex",alignItems:"center",gap:6,background:"rgba(2,6,23,0.80)",backdropFilter:"blur(8px)",WebkitBackdropFilter:"blur(8px)",color:"#fff",padding:"7px 14px",borderRadius:"999px",fontSize:"12px",fontFamily:"'DM Sans', sans-serif",fontWeight:600,textDecoration:"none",border:"1px solid rgba(255,255,255,0.12)",transition:"background 0.2s ease, border-color 0.2s ease"},onMouseEnter:w=>{w.currentTarget.style.background="rgba(14,165,233,0.85)"},onMouseLeave:w=>{w.currentTarget.style.background="rgba(2,6,23,0.80)"},children:[c.jsx(Bu,{size:11,strokeWidth:2.5}),"Open in Google Maps"]})]})]})]})]})}function Ax({isDark:e,onClose:t}){const[n,r]=A.useState(!0),[i,o]=A.useState(""),[s,a]=A.useState(""),[l,u]=A.useState(""),[d,h]=A.useState(""),[g,y]=A.useState(""),[v,w]=A.useState(""),[C,p]=A.useState(!1),{loginWithGoogle:f,loginWithEmail:m,registerWithEmail:x,resetPassword:S}=Yo(),_=async()=>{y(""),p(!0);const{error:k}=await f();k?(y(k),p(!1)):t()},T=async k=>{if(k.preventDefault(),y(""),p(!0),n){if(!i||!s){y("Enter email and password"),p(!1);return}const{error:M}=await m(i,s);M?(y(M),p(!1)):t()}else{if(!i||!s||!l||!d){y("Fill all fields"),p(!1);return}const{error:M}=await x(i,s,l,d);M?(y(M),p(!1)):(w("Account created! Check your email."),o(""),a(""),u(""),h(""),setTimeout(()=>r(!0),2e3))}};return c.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",backdropFilter:"blur(5px)",zIndex:2e3,display:"flex",alignItems:"center",justifyContent:"center",padding:"20px"},children:c.jsxs("div",{style:{background:e?"#1e293b":"#fff",borderRadius:"16px",padding:"32px",width:"100%",maxWidth:"400px",position:"relative"},children:[c.jsx("button",{onClick:t,style:{position:"absolute",top:"16px",right:"16px",background:"none",border:"none",cursor:"pointer",color:e?"#94a3b8":"#64748b"},children:c.jsx(Ql,{size:20})}),c.jsxs("div",{style:{textAlign:"center",marginBottom:"24px"},children:[c.jsx("div",{style:{width:"64px",height:"64px",borderRadius:"50%",background:"linear-gradient(135deg, #0284c7, #06b6d4)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 16px"},children:c.jsx(ql,{size:32,color:"#fff"})}),c.jsx("h2",{style:{color:e?"#f1f5f9":"#0f172a"},children:n?"Welcome Back":"Create Account"})]}),v&&c.jsx("div",{style:{background:"#d4edda",color:"#155724",padding:"12px",borderRadius:"8px",marginBottom:"16px",textAlign:"center"},children:v}),g&&c.jsx("div",{style:{background:"#fee2e2",color:"#ef4444",padding:"12px",borderRadius:"8px",marginBottom:"16px",textAlign:"center"},children:g}),c.jsxs("button",{onClick:_,disabled:C,style:{width:"100%",padding:"12px",background:"#fff",border:"1px solid #cbd5e1",borderRadius:"8px",fontSize:"14px",fontWeight:600,color:"#475569",cursor:C?"not-allowed":"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"10px",marginBottom:"20px",opacity:C?.5:1},children:[c.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",children:[c.jsx("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),c.jsx("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),c.jsx("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"}),c.jsx("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"})]}),"Continue with Google"]}),c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginBottom:"20px"},children:[c.jsx("div",{style:{flex:1,height:"1px",background:"#cbd5e1"}}),c.jsx("span",{style:{color:"#94a3b8"},children:"or"}),c.jsx("div",{style:{flex:1,height:"1px",background:"#cbd5e1"}})]}),c.jsxs("form",{onSubmit:T,children:[!n&&c.jsxs(c.Fragment,{children:[c.jsx("input",{type:"text",placeholder:"First Name",value:l,onChange:k=>u(k.target.value),disabled:C,style:{width:"100%",padding:"10px",border:"1px solid #cbd5e1",borderRadius:"8px",marginBottom:"16px",background:e?"#0f172a":"#fff",color:e?"#f1f5f9":"#0f172a"},required:!0}),c.jsx("input",{type:"text",placeholder:"Last Name",value:d,onChange:k=>h(k.target.value),disabled:C,style:{width:"100%",padding:"10px",border:"1px solid #cbd5e1",borderRadius:"8px",marginBottom:"16px",background:e?"#0f172a":"#fff",color:e?"#f1f5f9":"#0f172a"},required:!0})]}),c.jsx("input",{type:"email",placeholder:"Email",value:i,onChange:k=>o(k.target.value),disabled:C,style:{width:"100%",padding:"10px",border:"1px solid #cbd5e1",borderRadius:"8px",marginBottom:"16px",background:e?"#0f172a":"#fff",color:e?"#f1f5f9":"#0f172a"},required:!0}),c.jsx("input",{type:"password",placeholder:"Password",value:s,onChange:k=>a(k.target.value),disabled:C,style:{width:"100%",padding:"10px",border:"1px solid #cbd5e1",borderRadius:"8px",marginBottom:"16px",background:e?"#0f172a":"#fff",color:e?"#f1f5f9":"#0f172a"},required:!0}),n&&c.jsx("button",{type:"button",onClick:()=>{},style:{background:"none",border:"none",color:"#0284c7",cursor:"pointer",fontSize:"13px",marginBottom:"16px",display:"block",textAlign:"right",width:"100%"},children:"Forgot Password?"}),c.jsx("button",{type:"submit",disabled:C,style:{width:"100%",padding:"12px",background:C?"#cbd5e1":"linear-gradient(135deg, #0284c7, #06b6d4)",color:C?"#64748b":"#fff",border:"none",borderRadius:"8px",fontSize:"16px",fontWeight:600,cursor:C?"not-allowed":"pointer",marginBottom:"16px"},children:C?"Processing...":n?"Sign In":"Create Account"})]}),c.jsxs("p",{style:{textAlign:"center",color:e?"#94a3b8":"#64748b"},children:[n?"No account? ":"Have an account? ",c.jsx("button",{onClick:()=>{r(!n),y(""),w("")},style:{background:"none",border:"none",color:"#0284c7",cursor:"pointer",fontWeight:600},children:n?"Register":"Sign In"})]})]})})}function Nx(){const{isDark:e}=hu(),{user:t}=Yo(),[n,r]=A.useState(()=>sessionStorage.getItem("bk_lang")||"en"),[i,o]=A.useState(!1),[s,a]=A.useState(!1),[l,u]=A.useState(window.innerWidth),d=gp(e),h=_0[n],g=l<640;A.useEffect(()=>(s?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[s]),A.useEffect(()=>{const v=()=>o(window.scrollY>I0),w=()=>u(window.innerWidth);return window.addEventListener("scroll",v),window.addEventListener("resize",w),()=>{window.removeEventListener("scroll",v),window.removeEventListener("resize",w)}},[]);const y=()=>{const v=n==="en"?"hi":"en";r(v),sessionStorage.setItem("bk_lang",v)};return c.jsxs(c.Fragment,{children:[c.jsx(ux,{title:"BK Offset Printing - Premium Book & Commercial Printing Services in Delhi",description:"Premium offset printing in Street no. 2, Zulfe Bengal, Dilshad Garden, Delhi. Specializing in book printing, visiting cards, brochures, and commercial printing since 1995.",keywords:"offset printing, book printing services, printing press near me, custom book printing, visiting cards, brochure printing, Delhi printing services"}),c.jsx(ox,{isDark:e,toggleTheme:hu().toggleTheme,lang:n,toggleLang:y,text:h,onAuthClick:()=>a(!0),scrolled:i}),c.jsxs("div",{style:{fontFamily:te.fontBody,minHeight:"100vh",background:e?"linear-gradient(to bottom, rgba(2,6,23,0.92), rgba(2,6,23,0.95)), url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&q=80')":"linear-gradient(to bottom, rgba(255,255,255,0.88), rgba(248,250,252,0.92)), url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&q=80')",backgroundSize:"cover",backgroundAttachment:g?"scroll":"fixed",backgroundPosition:"center",backgroundRepeat:"no-repeat",color:d.text,transition:"background 0.35s, color 0.35s"},children:[c.jsx(hx,{text:h,isDark:e,c:d,isAuth:!!t,isMobile:g,setShowAuth:a}),c.jsx(vx,{text:h,isDark:e,c:d,isMobile:g}),c.jsx(Sx,{text:h,isDark:e,c:d,isMobile:g}),c.jsx(Ex,{text:h,isDark:e,c:d,isMobile:g}),c.jsx(Px,{text:h,c:d,isMobile:g}),c.jsx(lx,{isDark:e,isMobile:g}),c.jsx(cx,{isDark:e,isAuthenticated:!!t,windowWidth:l})]}),s&&c.jsx(Ax,{isDark:e,onClose:()=>a(!1)})]})}function Rx(){return c.jsx(A0,{children:c.jsx(B2,{children:c.jsx(Nx,{})})})}js.createRoot(document.getElementById("root")).render(c.jsx(Ye.StrictMode,{children:c.jsx(hp,{children:c.jsx(Rx,{})})}));
