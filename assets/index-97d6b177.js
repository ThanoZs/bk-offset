var bh=Object.defineProperty;var Sh=(t,e,n)=>e in t?bh(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var et=(t,e,n)=>(Sh(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Io(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var qu={exports:{}},Co={},Qu={exports:{}},j={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qr=Symbol.for("react.element"),kh=Symbol.for("react.portal"),_h=Symbol.for("react.fragment"),Eh=Symbol.for("react.strict_mode"),Th=Symbol.for("react.profiler"),Ih=Symbol.for("react.provider"),Ch=Symbol.for("react.context"),Ph=Symbol.for("react.forward_ref"),Ah=Symbol.for("react.suspense"),Nh=Symbol.for("react.memo"),Rh=Symbol.for("react.lazy"),Jl=Symbol.iterator;function Oh(t){return t===null||typeof t!="object"?null:(t=Jl&&t[Jl]||t["@@iterator"],typeof t=="function"?t:null)}var Xu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zu=Object.assign,Ju={};function Yn(t,e,n){this.props=t,this.context=e,this.refs=Ju,this.updater=n||Xu}Yn.prototype.isReactComponent={};Yn.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Yn.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ed(){}ed.prototype=Yn.prototype;function Ba(t,e,n){this.props=t,this.context=e,this.refs=Ju,this.updater=n||Xu}var Ha=Ba.prototype=new ed;Ha.constructor=Ba;Zu(Ha,Yn.prototype);Ha.isPureReactComponent=!0;var ec=Array.isArray,td=Object.prototype.hasOwnProperty,Wa={current:null},nd={key:!0,ref:!0,__self:!0,__source:!0};function rd(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)td.call(e,r)&&!nd.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:qr,type:t,key:o,ref:s,props:i,_owner:Wa.current}}function Lh(t,e){return{$$typeof:qr,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function $a(t){return typeof t=="object"&&t!==null&&t.$$typeof===qr}function jh(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var tc=/\/+/g;function Zo(t,e){return typeof t=="object"&&t!==null&&t.key!=null?jh(""+t.key):e.toString(36)}function Pi(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case qr:case kh:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+Zo(s,0):r,ec(i)?(n="",t!=null&&(n=t.replace(tc,"$&/")+"/"),Pi(i,e,n,"",function(u){return u})):i!=null&&($a(i)&&(i=Lh(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(tc,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",ec(t))for(var a=0;a<t.length;a++){o=t[a];var l=r+Zo(o,a);s+=Pi(o,e,n,l,i)}else if(l=Oh(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=r+Zo(o,a++),s+=Pi(o,e,n,l,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function ui(t,e,n){if(t==null)return t;var r=[],i=0;return Pi(t,r,"","",function(o){return e.call(n,o,i++)}),r}function Mh(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var he={current:null},Ai={transition:null},Dh={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:Ai,ReactCurrentOwner:Wa};function id(){throw Error("act(...) is not supported in production builds of React.")}j.Children={map:ui,forEach:function(t,e,n){ui(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ui(t,function(){e++}),e},toArray:function(t){return ui(t,function(e){return e})||[]},only:function(t){if(!$a(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};j.Component=Yn;j.Fragment=_h;j.Profiler=Th;j.PureComponent=Ba;j.StrictMode=Eh;j.Suspense=Ah;j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dh;j.act=id;j.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Zu({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=Wa.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)td.call(e,l)&&!nd.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:qr,type:t.type,key:i,ref:o,props:r,_owner:s}};j.createContext=function(t){return t={$$typeof:Ch,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Ih,_context:t},t.Consumer=t};j.createElement=rd;j.createFactory=function(t){var e=rd.bind(null,t);return e.type=t,e};j.createRef=function(){return{current:null}};j.forwardRef=function(t){return{$$typeof:Ph,render:t}};j.isValidElement=$a;j.lazy=function(t){return{$$typeof:Rh,_payload:{_status:-1,_result:t},_init:Mh}};j.memo=function(t,e){return{$$typeof:Nh,type:t,compare:e===void 0?null:e}};j.startTransition=function(t){var e=Ai.transition;Ai.transition={};try{t()}finally{Ai.transition=e}};j.unstable_act=id;j.useCallback=function(t,e){return he.current.useCallback(t,e)};j.useContext=function(t){return he.current.useContext(t)};j.useDebugValue=function(){};j.useDeferredValue=function(t){return he.current.useDeferredValue(t)};j.useEffect=function(t,e){return he.current.useEffect(t,e)};j.useId=function(){return he.current.useId()};j.useImperativeHandle=function(t,e,n){return he.current.useImperativeHandle(t,e,n)};j.useInsertionEffect=function(t,e){return he.current.useInsertionEffect(t,e)};j.useLayoutEffect=function(t,e){return he.current.useLayoutEffect(t,e)};j.useMemo=function(t,e){return he.current.useMemo(t,e)};j.useReducer=function(t,e,n){return he.current.useReducer(t,e,n)};j.useRef=function(t){return he.current.useRef(t)};j.useState=function(t){return he.current.useState(t)};j.useSyncExternalStore=function(t,e,n){return he.current.useSyncExternalStore(t,e,n)};j.useTransition=function(){return he.current.useTransition()};j.version="18.3.1";Qu.exports=j;var P=Qu.exports;const Ye=Io(P);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zh=P,Fh=Symbol.for("react.element"),Uh=Symbol.for("react.fragment"),Bh=Object.prototype.hasOwnProperty,Hh=zh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Wh={key:!0,ref:!0,__self:!0,__source:!0};function od(t,e,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)Bh.call(e,r)&&!Wh.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Fh,type:t,key:o,ref:s,props:i,_owner:Hh.current}}Co.Fragment=Uh;Co.jsx=od;Co.jsxs=od;qu.exports=Co;var c=qu.exports,js={},sd={exports:{}},Ee={},ad={exports:{}},ld={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,R){var L=I.length;I.push(R);e:for(;0<L;){var q=L-1>>>1,ee=I[q];if(0<i(ee,R))I[q]=R,I[L]=ee,L=q;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var R=I[0],L=I.pop();if(L!==R){I[0]=L;e:for(var q=0,ee=I.length,li=ee>>>1;q<li;){var $t=2*(q+1)-1,Xo=I[$t],Vt=$t+1,ci=I[Vt];if(0>i(Xo,L))Vt<ee&&0>i(ci,Xo)?(I[q]=ci,I[Vt]=L,q=Vt):(I[q]=Xo,I[$t]=L,q=$t);else if(Vt<ee&&0>i(ci,L))I[q]=ci,I[Vt]=L,q=Vt;else break e}}return R}function i(I,R){var L=I.sortIndex-R.sortIndex;return L!==0?L:I.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],u=[],d=1,p=null,g=3,y=!1,v=!1,w=!1,C=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(I){for(var R=n(u);R!==null;){if(R.callback===null)r(u);else if(R.startTime<=I)r(u),R.sortIndex=R.expirationTime,e(l,R);else break;R=n(u)}}function x(I){if(w=!1,m(I),!v)if(n(l)!==null)v=!0,qo(S);else{var R=n(u);R!==null&&Qo(x,R.startTime-I)}}function S(I,R){v=!1,w&&(w=!1,h(k),k=-1),y=!0;var L=g;try{for(m(R),p=n(l);p!==null&&(!(p.expirationTime>R)||I&&!N());){var q=p.callback;if(typeof q=="function"){p.callback=null,g=p.priorityLevel;var ee=q(p.expirationTime<=R);R=t.unstable_now(),typeof ee=="function"?p.callback=ee:p===n(l)&&r(l),m(R)}else r(l);p=n(l)}if(p!==null)var li=!0;else{var $t=n(u);$t!==null&&Qo(x,$t.startTime-R),li=!1}return li}finally{p=null,g=L,y=!1}}var _=!1,T=null,k=-1,M=5,O=-1;function N(){return!(t.unstable_now()-O<M)}function Zn(){if(T!==null){var I=t.unstable_now();O=I;var R=!0;try{R=T(!0,I)}finally{R?Jn():(_=!1,T=null)}}else _=!1}var Jn;if(typeof f=="function")Jn=function(){f(Zn)};else if(typeof MessageChannel<"u"){var Zl=new MessageChannel,wh=Zl.port2;Zl.port1.onmessage=Zn,Jn=function(){wh.postMessage(null)}}else Jn=function(){C(Zn,0)};function qo(I){T=I,_||(_=!0,Jn())}function Qo(I,R){k=C(function(){I(t.unstable_now())},R)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){v||y||(v=!0,qo(S))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(g){case 1:case 2:case 3:var R=3;break;default:R=g}var L=g;g=R;try{return I()}finally{g=L}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,R){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var L=g;g=I;try{return R()}finally{g=L}},t.unstable_scheduleCallback=function(I,R,L){var q=t.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?q+L:q):L=q,I){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=L+ee,I={id:d++,callback:R,priorityLevel:I,startTime:L,expirationTime:ee,sortIndex:-1},L>q?(I.sortIndex=L,e(u,I),n(l)===null&&I===n(u)&&(w?(h(k),k=-1):w=!0,Qo(x,L-q))):(I.sortIndex=ee,e(l,I),v||y||(v=!0,qo(S))),I},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(I){var R=g;return function(){var L=g;g=R;try{return I.apply(this,arguments)}finally{g=L}}}})(ld);ad.exports=ld;var $h=ad.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vh=P,_e=$h;function b(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var cd=new Set,Cr={};function dn(t,e){Fn(t,e),Fn(t+"Capture",e)}function Fn(t,e){for(Cr[t]=e,t=0;t<e.length;t++)cd.add(e[t])}var ut=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ms=Object.prototype.hasOwnProperty,Gh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,nc={},rc={};function Kh(t){return Ms.call(rc,t)?!0:Ms.call(nc,t)?!1:Gh.test(t)?rc[t]=!0:(nc[t]=!0,!1)}function Yh(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function qh(t,e,n,r){if(e===null||typeof e>"u"||Yh(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ge(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){se[t]=new ge(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];se[e]=new ge(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){se[t]=new ge(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){se[t]=new ge(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){se[t]=new ge(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){se[t]=new ge(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){se[t]=new ge(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){se[t]=new ge(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){se[t]=new ge(t,5,!1,t.toLowerCase(),null,!1,!1)});var Va=/[\-:]([a-z])/g;function Ga(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Va,Ga);se[e]=new ge(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Va,Ga);se[e]=new ge(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Va,Ga);se[e]=new ge(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){se[t]=new ge(t,1,!1,t.toLowerCase(),null,!1,!1)});se.xlinkHref=new ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){se[t]=new ge(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ka(t,e,n,r){var i=se.hasOwnProperty(e)?se[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(qh(e,n,i,r)&&(n=null),r||i===null?Kh(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var gt=Vh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,di=Symbol.for("react.element"),gn=Symbol.for("react.portal"),mn=Symbol.for("react.fragment"),Ya=Symbol.for("react.strict_mode"),Ds=Symbol.for("react.profiler"),ud=Symbol.for("react.provider"),dd=Symbol.for("react.context"),qa=Symbol.for("react.forward_ref"),zs=Symbol.for("react.suspense"),Fs=Symbol.for("react.suspense_list"),Qa=Symbol.for("react.memo"),xt=Symbol.for("react.lazy"),fd=Symbol.for("react.offscreen"),ic=Symbol.iterator;function er(t){return t===null||typeof t!="object"?null:(t=ic&&t[ic]||t["@@iterator"],typeof t=="function"?t:null)}var K=Object.assign,Jo;function dr(t){if(Jo===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Jo=e&&e[1]||""}return`
`+Jo+t}var es=!1;function ts(t,e){if(!t||es)return"";es=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{es=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?dr(t):""}function Qh(t){switch(t.tag){case 5:return dr(t.type);case 16:return dr("Lazy");case 13:return dr("Suspense");case 19:return dr("SuspenseList");case 0:case 2:case 15:return t=ts(t.type,!1),t;case 11:return t=ts(t.type.render,!1),t;case 1:return t=ts(t.type,!0),t;default:return""}}function Us(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case mn:return"Fragment";case gn:return"Portal";case Ds:return"Profiler";case Ya:return"StrictMode";case zs:return"Suspense";case Fs:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case dd:return(t.displayName||"Context")+".Consumer";case ud:return(t._context.displayName||"Context")+".Provider";case qa:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Qa:return e=t.displayName||null,e!==null?e:Us(t.type)||"Memo";case xt:e=t._payload,t=t._init;try{return Us(t(e))}catch{}}return null}function Xh(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Us(e);case 8:return e===Ya?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function zt(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function pd(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Zh(t){var e=pd(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function fi(t){t._valueTracker||(t._valueTracker=Zh(t))}function hd(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=pd(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ki(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Bs(t,e){var n=e.checked;return K({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function oc(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=zt(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function gd(t,e){e=e.checked,e!=null&&Ka(t,"checked",e,!1)}function Hs(t,e){gd(t,e);var n=zt(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ws(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ws(t,e.type,zt(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function sc(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ws(t,e,n){(e!=="number"||Ki(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var fr=Array.isArray;function In(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+zt(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function $s(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(b(91));return K({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ac(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(b(92));if(fr(n)){if(1<n.length)throw Error(b(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:zt(n)}}function md(t,e){var n=zt(e.value),r=zt(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function lc(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function yd(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Vs(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?yd(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var pi,vd=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(pi=pi||document.createElement("div"),pi.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=pi.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Pr(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var yr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Jh=["Webkit","ms","Moz","O"];Object.keys(yr).forEach(function(t){Jh.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),yr[e]=yr[t]})});function xd(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||yr.hasOwnProperty(t)&&yr[t]?(""+e).trim():e+"px"}function wd(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=xd(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var eg=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Gs(t,e){if(e){if(eg[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(b(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(b(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(b(61))}if(e.style!=null&&typeof e.style!="object")throw Error(b(62))}}function Ks(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ys=null;function Xa(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var qs=null,Cn=null,Pn=null;function cc(t){if(t=Zr(t)){if(typeof qs!="function")throw Error(b(280));var e=t.stateNode;e&&(e=Oo(e),qs(t.stateNode,t.type,e))}}function bd(t){Cn?Pn?Pn.push(t):Pn=[t]:Cn=t}function Sd(){if(Cn){var t=Cn,e=Pn;if(Pn=Cn=null,cc(t),e)for(t=0;t<e.length;t++)cc(e[t])}}function kd(t,e){return t(e)}function _d(){}var ns=!1;function Ed(t,e,n){if(ns)return t(e,n);ns=!0;try{return kd(t,e,n)}finally{ns=!1,(Cn!==null||Pn!==null)&&(_d(),Sd())}}function Ar(t,e){var n=t.stateNode;if(n===null)return null;var r=Oo(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(b(231,e,typeof n));return n}var Qs=!1;if(ut)try{var tr={};Object.defineProperty(tr,"passive",{get:function(){Qs=!0}}),window.addEventListener("test",tr,tr),window.removeEventListener("test",tr,tr)}catch{Qs=!1}function tg(t,e,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var vr=!1,Yi=null,qi=!1,Xs=null,ng={onError:function(t){vr=!0,Yi=t}};function rg(t,e,n,r,i,o,s,a,l){vr=!1,Yi=null,tg.apply(ng,arguments)}function ig(t,e,n,r,i,o,s,a,l){if(rg.apply(this,arguments),vr){if(vr){var u=Yi;vr=!1,Yi=null}else throw Error(b(198));qi||(qi=!0,Xs=u)}}function fn(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Td(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function uc(t){if(fn(t)!==t)throw Error(b(188))}function og(t){var e=t.alternate;if(!e){if(e=fn(t),e===null)throw Error(b(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return uc(i),t;if(o===r)return uc(i),e;o=o.sibling}throw Error(b(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(b(189))}}if(n.alternate!==r)throw Error(b(190))}if(n.tag!==3)throw Error(b(188));return n.stateNode.current===n?t:e}function Id(t){return t=og(t),t!==null?Cd(t):null}function Cd(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Cd(t);if(e!==null)return e;t=t.sibling}return null}var Pd=_e.unstable_scheduleCallback,dc=_e.unstable_cancelCallback,sg=_e.unstable_shouldYield,ag=_e.unstable_requestPaint,Q=_e.unstable_now,lg=_e.unstable_getCurrentPriorityLevel,Za=_e.unstable_ImmediatePriority,Ad=_e.unstable_UserBlockingPriority,Qi=_e.unstable_NormalPriority,cg=_e.unstable_LowPriority,Nd=_e.unstable_IdlePriority,Po=null,qe=null;function ug(t){if(qe&&typeof qe.onCommitFiberRoot=="function")try{qe.onCommitFiberRoot(Po,t,void 0,(t.current.flags&128)===128)}catch{}}var Be=Math.clz32?Math.clz32:pg,dg=Math.log,fg=Math.LN2;function pg(t){return t>>>=0,t===0?32:31-(dg(t)/fg|0)|0}var hi=64,gi=4194304;function pr(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Xi(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=pr(a):(o&=s,o!==0&&(r=pr(o)))}else s=n&~i,s!==0?r=pr(s):o!==0&&(r=pr(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Be(e),i=1<<n,r|=t[n],e&=~i;return r}function hg(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gg(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-Be(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=hg(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function Zs(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Rd(){var t=hi;return hi<<=1,!(hi&4194240)&&(hi=64),t}function rs(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Qr(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Be(e),t[e]=n}function mg(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Be(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function Ja(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Be(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var F=0;function Od(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Ld,el,jd,Md,Dd,Js=!1,mi=[],Ct=null,Pt=null,At=null,Nr=new Map,Rr=new Map,bt=[],yg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fc(t,e){switch(t){case"focusin":case"focusout":Ct=null;break;case"dragenter":case"dragleave":Pt=null;break;case"mouseover":case"mouseout":At=null;break;case"pointerover":case"pointerout":Nr.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rr.delete(e.pointerId)}}function nr(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=Zr(e),e!==null&&el(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function vg(t,e,n,r,i){switch(e){case"focusin":return Ct=nr(Ct,t,e,n,r,i),!0;case"dragenter":return Pt=nr(Pt,t,e,n,r,i),!0;case"mouseover":return At=nr(At,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return Nr.set(o,nr(Nr.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Rr.set(o,nr(Rr.get(o)||null,t,e,n,r,i)),!0}return!1}function zd(t){var e=qt(t.target);if(e!==null){var n=fn(e);if(n!==null){if(e=n.tag,e===13){if(e=Td(n),e!==null){t.blockedOn=e,Dd(t.priority,function(){jd(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ni(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ea(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ys=r,n.target.dispatchEvent(r),Ys=null}else return e=Zr(n),e!==null&&el(e),t.blockedOn=n,!1;e.shift()}return!0}function pc(t,e,n){Ni(t)&&n.delete(e)}function xg(){Js=!1,Ct!==null&&Ni(Ct)&&(Ct=null),Pt!==null&&Ni(Pt)&&(Pt=null),At!==null&&Ni(At)&&(At=null),Nr.forEach(pc),Rr.forEach(pc)}function rr(t,e){t.blockedOn===e&&(t.blockedOn=null,Js||(Js=!0,_e.unstable_scheduleCallback(_e.unstable_NormalPriority,xg)))}function Or(t){function e(i){return rr(i,t)}if(0<mi.length){rr(mi[0],t);for(var n=1;n<mi.length;n++){var r=mi[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Ct!==null&&rr(Ct,t),Pt!==null&&rr(Pt,t),At!==null&&rr(At,t),Nr.forEach(e),Rr.forEach(e),n=0;n<bt.length;n++)r=bt[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<bt.length&&(n=bt[0],n.blockedOn===null);)zd(n),n.blockedOn===null&&bt.shift()}var An=gt.ReactCurrentBatchConfig,Zi=!0;function wg(t,e,n,r){var i=F,o=An.transition;An.transition=null;try{F=1,tl(t,e,n,r)}finally{F=i,An.transition=o}}function bg(t,e,n,r){var i=F,o=An.transition;An.transition=null;try{F=4,tl(t,e,n,r)}finally{F=i,An.transition=o}}function tl(t,e,n,r){if(Zi){var i=ea(t,e,n,r);if(i===null)ps(t,e,r,Ji,n),fc(t,r);else if(vg(i,t,e,n,r))r.stopPropagation();else if(fc(t,r),e&4&&-1<yg.indexOf(t)){for(;i!==null;){var o=Zr(i);if(o!==null&&Ld(o),o=ea(t,e,n,r),o===null&&ps(t,e,r,Ji,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ps(t,e,r,null,n)}}var Ji=null;function ea(t,e,n,r){if(Ji=null,t=Xa(r),t=qt(t),t!==null)if(e=fn(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Td(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ji=t,null}function Fd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(lg()){case Za:return 1;case Ad:return 4;case Qi:case cg:return 16;case Nd:return 536870912;default:return 16}default:return 16}}var Tt=null,nl=null,Ri=null;function Ud(){if(Ri)return Ri;var t,e=nl,n=e.length,r,i="value"in Tt?Tt.value:Tt.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return Ri=i.slice(t,1<r?1-r:void 0)}function Oi(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function yi(){return!0}function hc(){return!1}function Te(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?yi:hc,this.isPropagationStopped=hc,this}return K(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=yi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=yi)},persist:function(){},isPersistent:yi}),e}var qn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rl=Te(qn),Xr=K({},qn,{view:0,detail:0}),Sg=Te(Xr),is,os,ir,Ao=K({},Xr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:il,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ir&&(ir&&t.type==="mousemove"?(is=t.screenX-ir.screenX,os=t.screenY-ir.screenY):os=is=0,ir=t),is)},movementY:function(t){return"movementY"in t?t.movementY:os}}),gc=Te(Ao),kg=K({},Ao,{dataTransfer:0}),_g=Te(kg),Eg=K({},Xr,{relatedTarget:0}),ss=Te(Eg),Tg=K({},qn,{animationName:0,elapsedTime:0,pseudoElement:0}),Ig=Te(Tg),Cg=K({},qn,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Pg=Te(Cg),Ag=K({},qn,{data:0}),mc=Te(Ag),Ng={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Og={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lg(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Og[t])?!!e[t]:!1}function il(){return Lg}var jg=K({},Xr,{key:function(t){if(t.key){var e=Ng[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Oi(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Rg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:il,charCode:function(t){return t.type==="keypress"?Oi(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Oi(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Mg=Te(jg),Dg=K({},Ao,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yc=Te(Dg),zg=K({},Xr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:il}),Fg=Te(zg),Ug=K({},qn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bg=Te(Ug),Hg=K({},Ao,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Wg=Te(Hg),$g=[9,13,27,32],ol=ut&&"CompositionEvent"in window,xr=null;ut&&"documentMode"in document&&(xr=document.documentMode);var Vg=ut&&"TextEvent"in window&&!xr,Bd=ut&&(!ol||xr&&8<xr&&11>=xr),vc=String.fromCharCode(32),xc=!1;function Hd(t,e){switch(t){case"keyup":return $g.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var yn=!1;function Gg(t,e){switch(t){case"compositionend":return Wd(e);case"keypress":return e.which!==32?null:(xc=!0,vc);case"textInput":return t=e.data,t===vc&&xc?null:t;default:return null}}function Kg(t,e){if(yn)return t==="compositionend"||!ol&&Hd(t,e)?(t=Ud(),Ri=nl=Tt=null,yn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Bd&&e.locale!=="ko"?null:e.data;default:return null}}var Yg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Yg[t.type]:e==="textarea"}function $d(t,e,n,r){bd(r),e=eo(e,"onChange"),0<e.length&&(n=new rl("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var wr=null,Lr=null;function qg(t){tf(t,0)}function No(t){var e=wn(t);if(hd(e))return t}function Qg(t,e){if(t==="change")return e}var Vd=!1;if(ut){var as;if(ut){var ls="oninput"in document;if(!ls){var bc=document.createElement("div");bc.setAttribute("oninput","return;"),ls=typeof bc.oninput=="function"}as=ls}else as=!1;Vd=as&&(!document.documentMode||9<document.documentMode)}function Sc(){wr&&(wr.detachEvent("onpropertychange",Gd),Lr=wr=null)}function Gd(t){if(t.propertyName==="value"&&No(Lr)){var e=[];$d(e,Lr,t,Xa(t)),Ed(qg,e)}}function Xg(t,e,n){t==="focusin"?(Sc(),wr=e,Lr=n,wr.attachEvent("onpropertychange",Gd)):t==="focusout"&&Sc()}function Zg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return No(Lr)}function Jg(t,e){if(t==="click")return No(e)}function em(t,e){if(t==="input"||t==="change")return No(e)}function tm(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var We=typeof Object.is=="function"?Object.is:tm;function jr(t,e){if(We(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ms.call(e,i)||!We(t[i],e[i]))return!1}return!0}function kc(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function _c(t,e){var n=kc(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=kc(n)}}function Kd(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Kd(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Yd(){for(var t=window,e=Ki();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ki(t.document)}return e}function sl(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function nm(t){var e=Yd(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Kd(n.ownerDocument.documentElement,n)){if(r!==null&&sl(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=_c(n,o);var s=_c(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var rm=ut&&"documentMode"in document&&11>=document.documentMode,vn=null,ta=null,br=null,na=!1;function Ec(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;na||vn==null||vn!==Ki(r)||(r=vn,"selectionStart"in r&&sl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),br&&jr(br,r)||(br=r,r=eo(ta,"onSelect"),0<r.length&&(e=new rl("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=vn)))}function vi(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var xn={animationend:vi("Animation","AnimationEnd"),animationiteration:vi("Animation","AnimationIteration"),animationstart:vi("Animation","AnimationStart"),transitionend:vi("Transition","TransitionEnd")},cs={},qd={};ut&&(qd=document.createElement("div").style,"AnimationEvent"in window||(delete xn.animationend.animation,delete xn.animationiteration.animation,delete xn.animationstart.animation),"TransitionEvent"in window||delete xn.transitionend.transition);function Ro(t){if(cs[t])return cs[t];if(!xn[t])return t;var e=xn[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in qd)return cs[t]=e[n];return t}var Qd=Ro("animationend"),Xd=Ro("animationiteration"),Zd=Ro("animationstart"),Jd=Ro("transitionend"),ef=new Map,Tc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ut(t,e){ef.set(t,e),dn(e,[t])}for(var us=0;us<Tc.length;us++){var ds=Tc[us],im=ds.toLowerCase(),om=ds[0].toUpperCase()+ds.slice(1);Ut(im,"on"+om)}Ut(Qd,"onAnimationEnd");Ut(Xd,"onAnimationIteration");Ut(Zd,"onAnimationStart");Ut("dblclick","onDoubleClick");Ut("focusin","onFocus");Ut("focusout","onBlur");Ut(Jd,"onTransitionEnd");Fn("onMouseEnter",["mouseout","mouseover"]);Fn("onMouseLeave",["mouseout","mouseover"]);Fn("onPointerEnter",["pointerout","pointerover"]);Fn("onPointerLeave",["pointerout","pointerover"]);dn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));dn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));dn("onBeforeInput",["compositionend","keypress","textInput","paste"]);dn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));dn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));dn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sm=new Set("cancel close invalid load scroll toggle".split(" ").concat(hr));function Ic(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,ig(r,e,void 0,t),t.currentTarget=null}function tf(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Ic(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Ic(i,a,u),o=l}}}if(qi)throw t=Xs,qi=!1,Xs=null,t}function H(t,e){var n=e[aa];n===void 0&&(n=e[aa]=new Set);var r=t+"__bubble";n.has(r)||(nf(e,t,2,!1),n.add(r))}function fs(t,e,n){var r=0;e&&(r|=4),nf(n,t,r,e)}var xi="_reactListening"+Math.random().toString(36).slice(2);function Mr(t){if(!t[xi]){t[xi]=!0,cd.forEach(function(n){n!=="selectionchange"&&(sm.has(n)||fs(n,!1,t),fs(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[xi]||(e[xi]=!0,fs("selectionchange",!1,e))}}function nf(t,e,n,r){switch(Fd(e)){case 1:var i=wg;break;case 4:i=bg;break;default:i=tl}n=i.bind(null,e,n,t),i=void 0,!Qs||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function ps(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=qt(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}Ed(function(){var u=o,d=Xa(n),p=[];e:{var g=ef.get(t);if(g!==void 0){var y=rl,v=t;switch(t){case"keypress":if(Oi(n)===0)break e;case"keydown":case"keyup":y=Mg;break;case"focusin":v="focus",y=ss;break;case"focusout":v="blur",y=ss;break;case"beforeblur":case"afterblur":y=ss;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=gc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=_g;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Fg;break;case Qd:case Xd:case Zd:y=Ig;break;case Jd:y=Bg;break;case"scroll":y=Sg;break;case"wheel":y=Wg;break;case"copy":case"cut":case"paste":y=Pg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=yc}var w=(e&4)!==0,C=!w&&t==="scroll",h=w?g!==null?g+"Capture":null:g;w=[];for(var f=u,m;f!==null;){m=f;var x=m.stateNode;if(m.tag===5&&x!==null&&(m=x,h!==null&&(x=Ar(f,h),x!=null&&w.push(Dr(f,x,m)))),C)break;f=f.return}0<w.length&&(g=new y(g,v,null,n,d),p.push({event:g,listeners:w}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",g&&n!==Ys&&(v=n.relatedTarget||n.fromElement)&&(qt(v)||v[dt]))break e;if((y||g)&&(g=d.window===d?d:(g=d.ownerDocument)?g.defaultView||g.parentWindow:window,y?(v=n.relatedTarget||n.toElement,y=u,v=v?qt(v):null,v!==null&&(C=fn(v),v!==C||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=u),y!==v)){if(w=gc,x="onMouseLeave",h="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(w=yc,x="onPointerLeave",h="onPointerEnter",f="pointer"),C=y==null?g:wn(y),m=v==null?g:wn(v),g=new w(x,f+"leave",y,n,d),g.target=C,g.relatedTarget=m,x=null,qt(d)===u&&(w=new w(h,f+"enter",v,n,d),w.target=m,w.relatedTarget=C,x=w),C=x,y&&v)t:{for(w=y,h=v,f=0,m=w;m;m=pn(m))f++;for(m=0,x=h;x;x=pn(x))m++;for(;0<f-m;)w=pn(w),f--;for(;0<m-f;)h=pn(h),m--;for(;f--;){if(w===h||h!==null&&w===h.alternate)break t;w=pn(w),h=pn(h)}w=null}else w=null;y!==null&&Cc(p,g,y,w,!1),v!==null&&C!==null&&Cc(p,C,v,w,!0)}}e:{if(g=u?wn(u):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var S=Qg;else if(wc(g))if(Vd)S=em;else{S=Zg;var _=Xg}else(y=g.nodeName)&&y.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(S=Jg);if(S&&(S=S(t,u))){$d(p,S,n,d);break e}_&&_(t,g,u),t==="focusout"&&(_=g._wrapperState)&&_.controlled&&g.type==="number"&&Ws(g,"number",g.value)}switch(_=u?wn(u):window,t){case"focusin":(wc(_)||_.contentEditable==="true")&&(vn=_,ta=u,br=null);break;case"focusout":br=ta=vn=null;break;case"mousedown":na=!0;break;case"contextmenu":case"mouseup":case"dragend":na=!1,Ec(p,n,d);break;case"selectionchange":if(rm)break;case"keydown":case"keyup":Ec(p,n,d)}var T;if(ol)e:{switch(t){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else yn?Hd(t,n)&&(k="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(Bd&&n.locale!=="ko"&&(yn||k!=="onCompositionStart"?k==="onCompositionEnd"&&yn&&(T=Ud()):(Tt=d,nl="value"in Tt?Tt.value:Tt.textContent,yn=!0)),_=eo(u,k),0<_.length&&(k=new mc(k,t,null,n,d),p.push({event:k,listeners:_}),T?k.data=T:(T=Wd(n),T!==null&&(k.data=T)))),(T=Vg?Gg(t,n):Kg(t,n))&&(u=eo(u,"onBeforeInput"),0<u.length&&(d=new mc("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:u}),d.data=T))}tf(p,e)})}function Dr(t,e,n){return{instance:t,listener:e,currentTarget:n}}function eo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ar(t,n),o!=null&&r.unshift(Dr(t,o,i)),o=Ar(t,e),o!=null&&r.push(Dr(t,o,i))),t=t.return}return r}function pn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Cc(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Ar(n,o),l!=null&&s.unshift(Dr(n,l,a))):i||(l=Ar(n,o),l!=null&&s.push(Dr(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var am=/\r\n?/g,lm=/\u0000|\uFFFD/g;function Pc(t){return(typeof t=="string"?t:""+t).replace(am,`
`).replace(lm,"")}function wi(t,e,n){if(e=Pc(e),Pc(t)!==e&&n)throw Error(b(425))}function to(){}var ra=null,ia=null;function oa(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var sa=typeof setTimeout=="function"?setTimeout:void 0,cm=typeof clearTimeout=="function"?clearTimeout:void 0,Ac=typeof Promise=="function"?Promise:void 0,um=typeof queueMicrotask=="function"?queueMicrotask:typeof Ac<"u"?function(t){return Ac.resolve(null).then(t).catch(dm)}:sa;function dm(t){setTimeout(function(){throw t})}function hs(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Or(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Or(e)}function Nt(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Nc(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Qn=Math.random().toString(36).slice(2),Ke="__reactFiber$"+Qn,zr="__reactProps$"+Qn,dt="__reactContainer$"+Qn,aa="__reactEvents$"+Qn,fm="__reactListeners$"+Qn,pm="__reactHandles$"+Qn;function qt(t){var e=t[Ke];if(e)return e;for(var n=t.parentNode;n;){if(e=n[dt]||n[Ke]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Nc(t);t!==null;){if(n=t[Ke])return n;t=Nc(t)}return e}t=n,n=t.parentNode}return null}function Zr(t){return t=t[Ke]||t[dt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function wn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(b(33))}function Oo(t){return t[zr]||null}var la=[],bn=-1;function Bt(t){return{current:t}}function W(t){0>bn||(t.current=la[bn],la[bn]=null,bn--)}function B(t,e){bn++,la[bn]=t.current,t.current=e}var Ft={},ue=Bt(Ft),ve=Bt(!1),nn=Ft;function Un(t,e){var n=t.type.contextTypes;if(!n)return Ft;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function xe(t){return t=t.childContextTypes,t!=null}function no(){W(ve),W(ue)}function Rc(t,e,n){if(ue.current!==Ft)throw Error(b(168));B(ue,e),B(ve,n)}function rf(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(b(108,Xh(t)||"Unknown",i));return K({},n,r)}function ro(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ft,nn=ue.current,B(ue,t),B(ve,ve.current),!0}function Oc(t,e,n){var r=t.stateNode;if(!r)throw Error(b(169));n?(t=rf(t,e,nn),r.__reactInternalMemoizedMergedChildContext=t,W(ve),W(ue),B(ue,t)):W(ve),B(ve,n)}var nt=null,Lo=!1,gs=!1;function of(t){nt===null?nt=[t]:nt.push(t)}function hm(t){Lo=!0,of(t)}function Ht(){if(!gs&&nt!==null){gs=!0;var t=0,e=F;try{var n=nt;for(F=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}nt=null,Lo=!1}catch(i){throw nt!==null&&(nt=nt.slice(t+1)),Pd(Za,Ht),i}finally{F=e,gs=!1}}return null}var Sn=[],kn=0,io=null,oo=0,Ce=[],Pe=0,rn=null,it=1,ot="";function Gt(t,e){Sn[kn++]=oo,Sn[kn++]=io,io=t,oo=e}function sf(t,e,n){Ce[Pe++]=it,Ce[Pe++]=ot,Ce[Pe++]=rn,rn=t;var r=it;t=ot;var i=32-Be(r)-1;r&=~(1<<i),n+=1;var o=32-Be(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,it=1<<32-Be(e)+i|n<<i|r,ot=o+t}else it=1<<o|n<<i|r,ot=t}function al(t){t.return!==null&&(Gt(t,1),sf(t,1,0))}function ll(t){for(;t===io;)io=Sn[--kn],Sn[kn]=null,oo=Sn[--kn],Sn[kn]=null;for(;t===rn;)rn=Ce[--Pe],Ce[Pe]=null,ot=Ce[--Pe],Ce[Pe]=null,it=Ce[--Pe],Ce[Pe]=null}var ke=null,Se=null,$=!1,Fe=null;function af(t,e){var n=Ae(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Lc(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ke=t,Se=Nt(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ke=t,Se=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=rn!==null?{id:it,overflow:ot}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ae(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,ke=t,Se=null,!0):!1;default:return!1}}function ca(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ua(t){if($){var e=Se;if(e){var n=e;if(!Lc(t,e)){if(ca(t))throw Error(b(418));e=Nt(n.nextSibling);var r=ke;e&&Lc(t,e)?af(r,n):(t.flags=t.flags&-4097|2,$=!1,ke=t)}}else{if(ca(t))throw Error(b(418));t.flags=t.flags&-4097|2,$=!1,ke=t}}}function jc(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ke=t}function bi(t){if(t!==ke)return!1;if(!$)return jc(t),$=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!oa(t.type,t.memoizedProps)),e&&(e=Se)){if(ca(t))throw lf(),Error(b(418));for(;e;)af(t,e),e=Nt(e.nextSibling)}if(jc(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(b(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Se=Nt(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Se=null}}else Se=ke?Nt(t.stateNode.nextSibling):null;return!0}function lf(){for(var t=Se;t;)t=Nt(t.nextSibling)}function Bn(){Se=ke=null,$=!1}function cl(t){Fe===null?Fe=[t]:Fe.push(t)}var gm=gt.ReactCurrentBatchConfig;function or(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(b(309));var r=n.stateNode}if(!r)throw Error(b(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(b(284));if(!n._owner)throw Error(b(290,t))}return t}function Si(t,e){throw t=Object.prototype.toString.call(e),Error(b(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Mc(t){var e=t._init;return e(t._payload)}function cf(t){function e(h,f){if(t){var m=h.deletions;m===null?(h.deletions=[f],h.flags|=16):m.push(f)}}function n(h,f){if(!t)return null;for(;f!==null;)e(h,f),f=f.sibling;return null}function r(h,f){for(h=new Map;f!==null;)f.key!==null?h.set(f.key,f):h.set(f.index,f),f=f.sibling;return h}function i(h,f){return h=jt(h,f),h.index=0,h.sibling=null,h}function o(h,f,m){return h.index=m,t?(m=h.alternate,m!==null?(m=m.index,m<f?(h.flags|=2,f):m):(h.flags|=2,f)):(h.flags|=1048576,f)}function s(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,f,m,x){return f===null||f.tag!==6?(f=Ss(m,h.mode,x),f.return=h,f):(f=i(f,m),f.return=h,f)}function l(h,f,m,x){var S=m.type;return S===mn?d(h,f,m.props.children,x,m.key):f!==null&&(f.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===xt&&Mc(S)===f.type)?(x=i(f,m.props),x.ref=or(h,f,m),x.return=h,x):(x=Ui(m.type,m.key,m.props,null,h.mode,x),x.ref=or(h,f,m),x.return=h,x)}function u(h,f,m,x){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=ks(m,h.mode,x),f.return=h,f):(f=i(f,m.children||[]),f.return=h,f)}function d(h,f,m,x,S){return f===null||f.tag!==7?(f=en(m,h.mode,x,S),f.return=h,f):(f=i(f,m),f.return=h,f)}function p(h,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Ss(""+f,h.mode,m),f.return=h,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case di:return m=Ui(f.type,f.key,f.props,null,h.mode,m),m.ref=or(h,null,f),m.return=h,m;case gn:return f=ks(f,h.mode,m),f.return=h,f;case xt:var x=f._init;return p(h,x(f._payload),m)}if(fr(f)||er(f))return f=en(f,h.mode,m,null),f.return=h,f;Si(h,f)}return null}function g(h,f,m,x){var S=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return S!==null?null:a(h,f,""+m,x);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case di:return m.key===S?l(h,f,m,x):null;case gn:return m.key===S?u(h,f,m,x):null;case xt:return S=m._init,g(h,f,S(m._payload),x)}if(fr(m)||er(m))return S!==null?null:d(h,f,m,x,null);Si(h,m)}return null}function y(h,f,m,x,S){if(typeof x=="string"&&x!==""||typeof x=="number")return h=h.get(m)||null,a(f,h,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case di:return h=h.get(x.key===null?m:x.key)||null,l(f,h,x,S);case gn:return h=h.get(x.key===null?m:x.key)||null,u(f,h,x,S);case xt:var _=x._init;return y(h,f,m,_(x._payload),S)}if(fr(x)||er(x))return h=h.get(m)||null,d(f,h,x,S,null);Si(f,x)}return null}function v(h,f,m,x){for(var S=null,_=null,T=f,k=f=0,M=null;T!==null&&k<m.length;k++){T.index>k?(M=T,T=null):M=T.sibling;var O=g(h,T,m[k],x);if(O===null){T===null&&(T=M);break}t&&T&&O.alternate===null&&e(h,T),f=o(O,f,k),_===null?S=O:_.sibling=O,_=O,T=M}if(k===m.length)return n(h,T),$&&Gt(h,k),S;if(T===null){for(;k<m.length;k++)T=p(h,m[k],x),T!==null&&(f=o(T,f,k),_===null?S=T:_.sibling=T,_=T);return $&&Gt(h,k),S}for(T=r(h,T);k<m.length;k++)M=y(T,h,k,m[k],x),M!==null&&(t&&M.alternate!==null&&T.delete(M.key===null?k:M.key),f=o(M,f,k),_===null?S=M:_.sibling=M,_=M);return t&&T.forEach(function(N){return e(h,N)}),$&&Gt(h,k),S}function w(h,f,m,x){var S=er(m);if(typeof S!="function")throw Error(b(150));if(m=S.call(m),m==null)throw Error(b(151));for(var _=S=null,T=f,k=f=0,M=null,O=m.next();T!==null&&!O.done;k++,O=m.next()){T.index>k?(M=T,T=null):M=T.sibling;var N=g(h,T,O.value,x);if(N===null){T===null&&(T=M);break}t&&T&&N.alternate===null&&e(h,T),f=o(N,f,k),_===null?S=N:_.sibling=N,_=N,T=M}if(O.done)return n(h,T),$&&Gt(h,k),S;if(T===null){for(;!O.done;k++,O=m.next())O=p(h,O.value,x),O!==null&&(f=o(O,f,k),_===null?S=O:_.sibling=O,_=O);return $&&Gt(h,k),S}for(T=r(h,T);!O.done;k++,O=m.next())O=y(T,h,k,O.value,x),O!==null&&(t&&O.alternate!==null&&T.delete(O.key===null?k:O.key),f=o(O,f,k),_===null?S=O:_.sibling=O,_=O);return t&&T.forEach(function(Zn){return e(h,Zn)}),$&&Gt(h,k),S}function C(h,f,m,x){if(typeof m=="object"&&m!==null&&m.type===mn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case di:e:{for(var S=m.key,_=f;_!==null;){if(_.key===S){if(S=m.type,S===mn){if(_.tag===7){n(h,_.sibling),f=i(_,m.props.children),f.return=h,h=f;break e}}else if(_.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===xt&&Mc(S)===_.type){n(h,_.sibling),f=i(_,m.props),f.ref=or(h,_,m),f.return=h,h=f;break e}n(h,_);break}else e(h,_);_=_.sibling}m.type===mn?(f=en(m.props.children,h.mode,x,m.key),f.return=h,h=f):(x=Ui(m.type,m.key,m.props,null,h.mode,x),x.ref=or(h,f,m),x.return=h,h=x)}return s(h);case gn:e:{for(_=m.key;f!==null;){if(f.key===_)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(h,f.sibling),f=i(f,m.children||[]),f.return=h,h=f;break e}else{n(h,f);break}else e(h,f);f=f.sibling}f=ks(m,h.mode,x),f.return=h,h=f}return s(h);case xt:return _=m._init,C(h,f,_(m._payload),x)}if(fr(m))return v(h,f,m,x);if(er(m))return w(h,f,m,x);Si(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(h,f.sibling),f=i(f,m),f.return=h,h=f):(n(h,f),f=Ss(m,h.mode,x),f.return=h,h=f),s(h)):n(h,f)}return C}var Hn=cf(!0),uf=cf(!1),so=Bt(null),ao=null,_n=null,ul=null;function dl(){ul=_n=ao=null}function fl(t){var e=so.current;W(so),t._currentValue=e}function da(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Nn(t,e){ao=t,ul=_n=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ye=!0),t.firstContext=null)}function Re(t){var e=t._currentValue;if(ul!==t)if(t={context:t,memoizedValue:e,next:null},_n===null){if(ao===null)throw Error(b(308));_n=t,ao.dependencies={lanes:0,firstContext:t}}else _n=_n.next=t;return e}var Qt=null;function pl(t){Qt===null?Qt=[t]:Qt.push(t)}function df(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,pl(e)):(n.next=i.next,i.next=n),e.interleaved=n,ft(t,r)}function ft(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var wt=!1;function hl(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ff(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function lt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Rt(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,D&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,ft(t,n)}return i=r.interleaved,i===null?(e.next=e,pl(r)):(e.next=i.next,i.next=e),r.interleaved=e,ft(t,n)}function Li(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ja(t,n)}}function Dc(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function lo(t,e,n,r){var i=t.updateQueue;wt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(o!==null){var p=i.baseState;s=0,d=u=l=null,a=o;do{var g=a.lane,y=a.eventTime;if((r&g)===g){d!==null&&(d=d.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,w=a;switch(g=e,y=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){p=v.call(y,p,g);break e}p=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,g=typeof v=="function"?v.call(y,p,g):v,g==null)break e;p=K({},p,g);break e;case 2:wt=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else y={eventTime:y,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=y,l=p):d=d.next=y,s|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(1);if(d===null&&(l=p),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);sn|=s,t.lanes=s,t.memoizedState=p}}function zc(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(b(191,i));i.call(r)}}}var Jr={},Qe=Bt(Jr),Fr=Bt(Jr),Ur=Bt(Jr);function Xt(t){if(t===Jr)throw Error(b(174));return t}function gl(t,e){switch(B(Ur,e),B(Fr,t),B(Qe,Jr),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Vs(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Vs(e,t)}W(Qe),B(Qe,e)}function Wn(){W(Qe),W(Fr),W(Ur)}function pf(t){Xt(Ur.current);var e=Xt(Qe.current),n=Vs(e,t.type);e!==n&&(B(Fr,t),B(Qe,n))}function ml(t){Fr.current===t&&(W(Qe),W(Fr))}var V=Bt(0);function co(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ms=[];function yl(){for(var t=0;t<ms.length;t++)ms[t]._workInProgressVersionPrimary=null;ms.length=0}var ji=gt.ReactCurrentDispatcher,ys=gt.ReactCurrentBatchConfig,on=0,G=null,Z=null,ne=null,uo=!1,Sr=!1,Br=0,mm=0;function ae(){throw Error(b(321))}function vl(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!We(t[n],e[n]))return!1;return!0}function xl(t,e,n,r,i,o){if(on=o,G=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ji.current=t===null||t.memoizedState===null?wm:bm,t=n(r,i),Sr){o=0;do{if(Sr=!1,Br=0,25<=o)throw Error(b(301));o+=1,ne=Z=null,e.updateQueue=null,ji.current=Sm,t=n(r,i)}while(Sr)}if(ji.current=fo,e=Z!==null&&Z.next!==null,on=0,ne=Z=G=null,uo=!1,e)throw Error(b(300));return t}function wl(){var t=Br!==0;return Br=0,t}function Ge(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ne===null?G.memoizedState=ne=t:ne=ne.next=t,ne}function Oe(){if(Z===null){var t=G.alternate;t=t!==null?t.memoizedState:null}else t=Z.next;var e=ne===null?G.memoizedState:ne.next;if(e!==null)ne=e,Z=t;else{if(t===null)throw Error(b(310));Z=t,t={memoizedState:Z.memoizedState,baseState:Z.baseState,baseQueue:Z.baseQueue,queue:Z.queue,next:null},ne===null?G.memoizedState=ne=t:ne=ne.next=t}return ne}function Hr(t,e){return typeof e=="function"?e(t):e}function vs(t){var e=Oe(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=Z,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var d=u.lane;if((on&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=p,s=r):l=l.next=p,G.lanes|=d,sn|=d}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,We(r,e.memoizedState)||(ye=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,G.lanes|=o,sn|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function xs(t){var e=Oe(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);We(o,e.memoizedState)||(ye=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function hf(){}function gf(t,e){var n=G,r=Oe(),i=e(),o=!We(r.memoizedState,i);if(o&&(r.memoizedState=i,ye=!0),r=r.queue,bl(vf.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||ne!==null&&ne.memoizedState.tag&1){if(n.flags|=2048,Wr(9,yf.bind(null,n,r,i,e),void 0,null),re===null)throw Error(b(349));on&30||mf(n,e,i)}return i}function mf(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=G.updateQueue,e===null?(e={lastEffect:null,stores:null},G.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function yf(t,e,n,r){e.value=n,e.getSnapshot=r,xf(e)&&wf(t)}function vf(t,e,n){return n(function(){xf(e)&&wf(t)})}function xf(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!We(t,n)}catch{return!0}}function wf(t){var e=ft(t,1);e!==null&&He(e,t,1,-1)}function Fc(t){var e=Ge();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Hr,lastRenderedState:t},e.queue=t,t=t.dispatch=xm.bind(null,G,t),[e.memoizedState,t]}function Wr(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=G.updateQueue,e===null?(e={lastEffect:null,stores:null},G.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function bf(){return Oe().memoizedState}function Mi(t,e,n,r){var i=Ge();G.flags|=t,i.memoizedState=Wr(1|e,n,void 0,r===void 0?null:r)}function jo(t,e,n,r){var i=Oe();r=r===void 0?null:r;var o=void 0;if(Z!==null){var s=Z.memoizedState;if(o=s.destroy,r!==null&&vl(r,s.deps)){i.memoizedState=Wr(e,n,o,r);return}}G.flags|=t,i.memoizedState=Wr(1|e,n,o,r)}function Uc(t,e){return Mi(8390656,8,t,e)}function bl(t,e){return jo(2048,8,t,e)}function Sf(t,e){return jo(4,2,t,e)}function kf(t,e){return jo(4,4,t,e)}function _f(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ef(t,e,n){return n=n!=null?n.concat([t]):null,jo(4,4,_f.bind(null,e,t),n)}function Sl(){}function Tf(t,e){var n=Oe();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&vl(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function If(t,e){var n=Oe();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&vl(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Cf(t,e,n){return on&21?(We(n,e)||(n=Rd(),G.lanes|=n,sn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ye=!0),t.memoizedState=n)}function ym(t,e){var n=F;F=n!==0&&4>n?n:4,t(!0);var r=ys.transition;ys.transition={};try{t(!1),e()}finally{F=n,ys.transition=r}}function Pf(){return Oe().memoizedState}function vm(t,e,n){var r=Lt(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Af(t))Nf(e,n);else if(n=df(t,e,n,r),n!==null){var i=pe();He(n,t,r,i),Rf(n,e,r)}}function xm(t,e,n){var r=Lt(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Af(t))Nf(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,We(a,s)){var l=e.interleaved;l===null?(i.next=i,pl(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=df(t,e,i,r),n!==null&&(i=pe(),He(n,t,r,i),Rf(n,e,r))}}function Af(t){var e=t.alternate;return t===G||e!==null&&e===G}function Nf(t,e){Sr=uo=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Rf(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ja(t,n)}}var fo={readContext:Re,useCallback:ae,useContext:ae,useEffect:ae,useImperativeHandle:ae,useInsertionEffect:ae,useLayoutEffect:ae,useMemo:ae,useReducer:ae,useRef:ae,useState:ae,useDebugValue:ae,useDeferredValue:ae,useTransition:ae,useMutableSource:ae,useSyncExternalStore:ae,useId:ae,unstable_isNewReconciler:!1},wm={readContext:Re,useCallback:function(t,e){return Ge().memoizedState=[t,e===void 0?null:e],t},useContext:Re,useEffect:Uc,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Mi(4194308,4,_f.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Mi(4194308,4,t,e)},useInsertionEffect:function(t,e){return Mi(4,2,t,e)},useMemo:function(t,e){var n=Ge();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Ge();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=vm.bind(null,G,t),[r.memoizedState,t]},useRef:function(t){var e=Ge();return t={current:t},e.memoizedState=t},useState:Fc,useDebugValue:Sl,useDeferredValue:function(t){return Ge().memoizedState=t},useTransition:function(){var t=Fc(!1),e=t[0];return t=ym.bind(null,t[1]),Ge().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=G,i=Ge();if($){if(n===void 0)throw Error(b(407));n=n()}else{if(n=e(),re===null)throw Error(b(349));on&30||mf(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,Uc(vf.bind(null,r,o,t),[t]),r.flags|=2048,Wr(9,yf.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=Ge(),e=re.identifierPrefix;if($){var n=ot,r=it;n=(r&~(1<<32-Be(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Br++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=mm++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},bm={readContext:Re,useCallback:Tf,useContext:Re,useEffect:bl,useImperativeHandle:Ef,useInsertionEffect:Sf,useLayoutEffect:kf,useMemo:If,useReducer:vs,useRef:bf,useState:function(){return vs(Hr)},useDebugValue:Sl,useDeferredValue:function(t){var e=Oe();return Cf(e,Z.memoizedState,t)},useTransition:function(){var t=vs(Hr)[0],e=Oe().memoizedState;return[t,e]},useMutableSource:hf,useSyncExternalStore:gf,useId:Pf,unstable_isNewReconciler:!1},Sm={readContext:Re,useCallback:Tf,useContext:Re,useEffect:bl,useImperativeHandle:Ef,useInsertionEffect:Sf,useLayoutEffect:kf,useMemo:If,useReducer:xs,useRef:bf,useState:function(){return xs(Hr)},useDebugValue:Sl,useDeferredValue:function(t){var e=Oe();return Z===null?e.memoizedState=t:Cf(e,Z.memoizedState,t)},useTransition:function(){var t=xs(Hr)[0],e=Oe().memoizedState;return[t,e]},useMutableSource:hf,useSyncExternalStore:gf,useId:Pf,unstable_isNewReconciler:!1};function De(t,e){if(t&&t.defaultProps){e=K({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function fa(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:K({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Mo={isMounted:function(t){return(t=t._reactInternals)?fn(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=pe(),i=Lt(t),o=lt(r,i);o.payload=e,n!=null&&(o.callback=n),e=Rt(t,o,i),e!==null&&(He(e,t,i,r),Li(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=pe(),i=Lt(t),o=lt(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Rt(t,o,i),e!==null&&(He(e,t,i,r),Li(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=pe(),r=Lt(t),i=lt(n,r);i.tag=2,e!=null&&(i.callback=e),e=Rt(t,i,r),e!==null&&(He(e,t,r,n),Li(e,t,r))}};function Bc(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!jr(n,r)||!jr(i,o):!0}function Of(t,e,n){var r=!1,i=Ft,o=e.contextType;return typeof o=="object"&&o!==null?o=Re(o):(i=xe(e)?nn:ue.current,r=e.contextTypes,o=(r=r!=null)?Un(t,i):Ft),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Mo,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function Hc(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Mo.enqueueReplaceState(e,e.state,null)}function pa(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},hl(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=Re(o):(o=xe(e)?nn:ue.current,i.context=Un(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(fa(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Mo.enqueueReplaceState(i,i.state,null),lo(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function $n(t,e){try{var n="",r=e;do n+=Qh(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function ws(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ha(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var km=typeof WeakMap=="function"?WeakMap:Map;function Lf(t,e,n){n=lt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ho||(ho=!0,_a=r),ha(t,e)},n}function jf(t,e,n){n=lt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){ha(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ha(t,e),typeof r!="function"&&(Ot===null?Ot=new Set([this]):Ot.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function Wc(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new km;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Dm.bind(null,t,e,n),e.then(t,t))}function $c(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Vc(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=lt(-1,1),e.tag=2,Rt(n,e,1))),n.lanes|=1),t)}var _m=gt.ReactCurrentOwner,ye=!1;function fe(t,e,n,r){e.child=t===null?uf(e,null,n,r):Hn(e,t.child,n,r)}function Gc(t,e,n,r,i){n=n.render;var o=e.ref;return Nn(e,i),r=xl(t,e,n,r,o,i),n=wl(),t!==null&&!ye?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,pt(t,e,i)):($&&n&&al(e),e.flags|=1,fe(t,e,r,i),e.child)}function Kc(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!Al(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,Mf(t,e,o,r,i)):(t=Ui(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:jr,n(s,r)&&t.ref===e.ref)return pt(t,e,i)}return e.flags|=1,t=jt(o,r),t.ref=e.ref,t.return=e,e.child=t}function Mf(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(jr(o,r)&&t.ref===e.ref)if(ye=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(ye=!0);else return e.lanes=t.lanes,pt(t,e,i)}return ga(t,e,n,r,i)}function Df(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(Tn,be),be|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,B(Tn,be),be|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,B(Tn,be),be|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,B(Tn,be),be|=r;return fe(t,e,i,n),e.child}function zf(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ga(t,e,n,r,i){var o=xe(n)?nn:ue.current;return o=Un(e,o),Nn(e,i),n=xl(t,e,n,r,o,i),r=wl(),t!==null&&!ye?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,pt(t,e,i)):($&&r&&al(e),e.flags|=1,fe(t,e,n,i),e.child)}function Yc(t,e,n,r,i){if(xe(n)){var o=!0;ro(e)}else o=!1;if(Nn(e,i),e.stateNode===null)Di(t,e),Of(e,n,r),pa(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Re(u):(u=xe(n)?nn:ue.current,u=Un(e,u));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Hc(e,s,r,u),wt=!1;var g=e.memoizedState;s.state=g,lo(e,r,s,i),l=e.memoizedState,a!==r||g!==l||ve.current||wt?(typeof d=="function"&&(fa(e,n,d,r),l=e.memoizedState),(a=wt||Bc(e,n,a,r,g,l,u))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,ff(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:De(e.type,a),s.props=u,p=e.pendingProps,g=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Re(l):(l=xe(n)?nn:ue.current,l=Un(e,l));var y=n.getDerivedStateFromProps;(d=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==p||g!==l)&&Hc(e,s,r,l),wt=!1,g=e.memoizedState,s.state=g,lo(e,r,s,i);var v=e.memoizedState;a!==p||g!==v||ve.current||wt?(typeof y=="function"&&(fa(e,n,y,r),v=e.memoizedState),(u=wt||Bc(e,n,u,r,g,v,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,v,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,v,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),s.props=r,s.state=v,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return ma(t,e,n,r,o,i)}function ma(t,e,n,r,i,o){zf(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&Oc(e,n,!1),pt(t,e,o);r=e.stateNode,_m.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=Hn(e,t.child,null,o),e.child=Hn(e,null,a,o)):fe(t,e,a,o),e.memoizedState=r.state,i&&Oc(e,n,!0),e.child}function Ff(t){var e=t.stateNode;e.pendingContext?Rc(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Rc(t,e.context,!1),gl(t,e.containerInfo)}function qc(t,e,n,r,i){return Bn(),cl(i),e.flags|=256,fe(t,e,n,r),e.child}var ya={dehydrated:null,treeContext:null,retryLane:0};function va(t){return{baseLanes:t,cachePool:null,transitions:null}}function Uf(t,e,n){var r=e.pendingProps,i=V.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),B(V,i&1),t===null)return ua(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Fo(s,r,0,null),t=en(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=va(n),e.memoizedState=ya,t):kl(e,s));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Em(t,e,s,r,a,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=jt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=jt(a,o):(o=en(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?va(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=ya,r}return o=t.child,t=o.sibling,r=jt(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function kl(t,e){return e=Fo({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ki(t,e,n,r){return r!==null&&cl(r),Hn(e,t.child,null,n),t=kl(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Em(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=ws(Error(b(422))),ki(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=Fo({mode:"visible",children:r.children},i,0,null),o=en(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&Hn(e,t.child,null,s),e.child.memoizedState=va(s),e.memoizedState=ya,o);if(!(e.mode&1))return ki(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(b(419)),r=ws(o,r,void 0),ki(t,e,s,r)}if(a=(s&t.childLanes)!==0,ye||a){if(r=re,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,ft(t,i),He(r,t,i,-1))}return Pl(),r=ws(Error(b(421))),ki(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=zm.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,Se=Nt(i.nextSibling),ke=e,$=!0,Fe=null,t!==null&&(Ce[Pe++]=it,Ce[Pe++]=ot,Ce[Pe++]=rn,it=t.id,ot=t.overflow,rn=e),e=kl(e,r.children),e.flags|=4096,e)}function Qc(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),da(t.return,e,n)}function bs(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Bf(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(fe(t,e,r.children,n),r=V.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Qc(t,n,e);else if(t.tag===19)Qc(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(B(V,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&co(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),bs(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&co(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}bs(e,!0,n,null,o);break;case"together":bs(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Di(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function pt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),sn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(b(153));if(e.child!==null){for(t=e.child,n=jt(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=jt(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Tm(t,e,n){switch(e.tag){case 3:Ff(e),Bn();break;case 5:pf(e);break;case 1:xe(e.type)&&ro(e);break;case 4:gl(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;B(so,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(B(V,V.current&1),e.flags|=128,null):n&e.child.childLanes?Uf(t,e,n):(B(V,V.current&1),t=pt(t,e,n),t!==null?t.sibling:null);B(V,V.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Bf(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),B(V,V.current),r)break;return null;case 22:case 23:return e.lanes=0,Df(t,e,n)}return pt(t,e,n)}var Hf,xa,Wf,$f;Hf=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};xa=function(){};Wf=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Xt(Qe.current);var o=null;switch(n){case"input":i=Bs(t,i),r=Bs(t,r),o=[];break;case"select":i=K({},i,{value:void 0}),r=K({},r,{value:void 0}),o=[];break;case"textarea":i=$s(t,i),r=$s(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=to)}Gs(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Cr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Cr.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&H("scroll",t),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};$f=function(t,e,n,r){n!==r&&(e.flags|=4)};function sr(t,e){if(!$)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function le(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Im(t,e,n){var r=e.pendingProps;switch(ll(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return le(e),null;case 1:return xe(e.type)&&no(),le(e),null;case 3:return r=e.stateNode,Wn(),W(ve),W(ue),yl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(bi(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Fe!==null&&(Ia(Fe),Fe=null))),xa(t,e),le(e),null;case 5:ml(e);var i=Xt(Ur.current);if(n=e.type,t!==null&&e.stateNode!=null)Wf(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(b(166));return le(e),null}if(t=Xt(Qe.current),bi(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[Ke]=e,r[zr]=o,t=(e.mode&1)!==0,n){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(i=0;i<hr.length;i++)H(hr[i],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":oc(r,o),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},H("invalid",r);break;case"textarea":ac(r,o),H("invalid",r)}Gs(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&wi(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&wi(r.textContent,a,t),i=["children",""+a]):Cr.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&H("scroll",r)}switch(n){case"input":fi(r),sc(r,o,!0);break;case"textarea":fi(r),lc(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=to)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=yd(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[Ke]=e,t[zr]=r,Hf(t,e,!1,!1),e.stateNode=t;e:{switch(s=Ks(n,r),n){case"dialog":H("cancel",t),H("close",t),i=r;break;case"iframe":case"object":case"embed":H("load",t),i=r;break;case"video":case"audio":for(i=0;i<hr.length;i++)H(hr[i],t);i=r;break;case"source":H("error",t),i=r;break;case"img":case"image":case"link":H("error",t),H("load",t),i=r;break;case"details":H("toggle",t),i=r;break;case"input":oc(t,r),i=Bs(t,r),H("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=K({},r,{value:void 0}),H("invalid",t);break;case"textarea":ac(t,r),i=$s(t,r),H("invalid",t);break;default:i=r}Gs(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?wd(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&vd(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Pr(t,l):typeof l=="number"&&Pr(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Cr.hasOwnProperty(o)?l!=null&&o==="onScroll"&&H("scroll",t):l!=null&&Ka(t,o,l,s))}switch(n){case"input":fi(t),sc(t,r,!1);break;case"textarea":fi(t),lc(t);break;case"option":r.value!=null&&t.setAttribute("value",""+zt(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?In(t,!!r.multiple,o,!1):r.defaultValue!=null&&In(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=to)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return le(e),null;case 6:if(t&&e.stateNode!=null)$f(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(b(166));if(n=Xt(Ur.current),Xt(Qe.current),bi(e)){if(r=e.stateNode,n=e.memoizedProps,r[Ke]=e,(o=r.nodeValue!==n)&&(t=ke,t!==null))switch(t.tag){case 3:wi(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&wi(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ke]=e,e.stateNode=r}return le(e),null;case 13:if(W(V),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if($&&Se!==null&&e.mode&1&&!(e.flags&128))lf(),Bn(),e.flags|=98560,o=!1;else if(o=bi(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(b(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(b(317));o[Ke]=e}else Bn(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;le(e),o=!1}else Fe!==null&&(Ia(Fe),Fe=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||V.current&1?J===0&&(J=3):Pl())),e.updateQueue!==null&&(e.flags|=4),le(e),null);case 4:return Wn(),xa(t,e),t===null&&Mr(e.stateNode.containerInfo),le(e),null;case 10:return fl(e.type._context),le(e),null;case 17:return xe(e.type)&&no(),le(e),null;case 19:if(W(V),o=e.memoizedState,o===null)return le(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)sr(o,!1);else{if(J!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=co(t),s!==null){for(e.flags|=128,sr(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return B(V,V.current&1|2),e.child}t=t.sibling}o.tail!==null&&Q()>Vn&&(e.flags|=128,r=!0,sr(o,!1),e.lanes=4194304)}else{if(!r)if(t=co(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),sr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!$)return le(e),null}else 2*Q()-o.renderingStartTime>Vn&&n!==1073741824&&(e.flags|=128,r=!0,sr(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Q(),e.sibling=null,n=V.current,B(V,r?n&1|2:n&1),e):(le(e),null);case 22:case 23:return Cl(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?be&1073741824&&(le(e),e.subtreeFlags&6&&(e.flags|=8192)):le(e),null;case 24:return null;case 25:return null}throw Error(b(156,e.tag))}function Cm(t,e){switch(ll(e),e.tag){case 1:return xe(e.type)&&no(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Wn(),W(ve),W(ue),yl(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ml(e),null;case 13:if(W(V),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(b(340));Bn()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return W(V),null;case 4:return Wn(),null;case 10:return fl(e.type._context),null;case 22:case 23:return Cl(),null;case 24:return null;default:return null}}var _i=!1,ce=!1,Pm=typeof WeakSet=="function"?WeakSet:Set,E=null;function En(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Y(t,e,r)}else n.current=null}function wa(t,e,n){try{n()}catch(r){Y(t,e,r)}}var Xc=!1;function Am(t,e){if(ra=Zi,t=Yd(),sl(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,d=0,p=t,g=null;t:for(;;){for(var y;p!==n||i!==0&&p.nodeType!==3||(a=s+i),p!==o||r!==0&&p.nodeType!==3||(l=s+r),p.nodeType===3&&(s+=p.nodeValue.length),(y=p.firstChild)!==null;)g=p,p=y;for(;;){if(p===t)break t;if(g===n&&++u===i&&(a=s),g===o&&++d===r&&(l=s),(y=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ia={focusedElem:t,selectionRange:n},Zi=!1,E=e;E!==null;)if(e=E,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,E=t;else for(;E!==null;){e=E;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,C=v.memoizedState,h=e.stateNode,f=h.getSnapshotBeforeUpdate(e.elementType===e.type?w:De(e.type,w),C);h.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(x){Y(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,E=t;break}E=e.return}return v=Xc,Xc=!1,v}function kr(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&wa(e,n,o)}i=i.next}while(i!==r)}}function Do(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function ba(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Vf(t){var e=t.alternate;e!==null&&(t.alternate=null,Vf(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ke],delete e[zr],delete e[aa],delete e[fm],delete e[pm])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Gf(t){return t.tag===5||t.tag===3||t.tag===4}function Zc(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Gf(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Sa(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=to));else if(r!==4&&(t=t.child,t!==null))for(Sa(t,e,n),t=t.sibling;t!==null;)Sa(t,e,n),t=t.sibling}function ka(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ka(t,e,n),t=t.sibling;t!==null;)ka(t,e,n),t=t.sibling}var ie=null,ze=!1;function yt(t,e,n){for(n=n.child;n!==null;)Kf(t,e,n),n=n.sibling}function Kf(t,e,n){if(qe&&typeof qe.onCommitFiberUnmount=="function")try{qe.onCommitFiberUnmount(Po,n)}catch{}switch(n.tag){case 5:ce||En(n,e);case 6:var r=ie,i=ze;ie=null,yt(t,e,n),ie=r,ze=i,ie!==null&&(ze?(t=ie,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ie.removeChild(n.stateNode));break;case 18:ie!==null&&(ze?(t=ie,n=n.stateNode,t.nodeType===8?hs(t.parentNode,n):t.nodeType===1&&hs(t,n),Or(t)):hs(ie,n.stateNode));break;case 4:r=ie,i=ze,ie=n.stateNode.containerInfo,ze=!0,yt(t,e,n),ie=r,ze=i;break;case 0:case 11:case 14:case 15:if(!ce&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&wa(n,e,s),i=i.next}while(i!==r)}yt(t,e,n);break;case 1:if(!ce&&(En(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Y(n,e,a)}yt(t,e,n);break;case 21:yt(t,e,n);break;case 22:n.mode&1?(ce=(r=ce)||n.memoizedState!==null,yt(t,e,n),ce=r):yt(t,e,n);break;default:yt(t,e,n)}}function Jc(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Pm),e.forEach(function(r){var i=Fm.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Me(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:ie=a.stateNode,ze=!1;break e;case 3:ie=a.stateNode.containerInfo,ze=!0;break e;case 4:ie=a.stateNode.containerInfo,ze=!0;break e}a=a.return}if(ie===null)throw Error(b(160));Kf(o,s,i),ie=null,ze=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Y(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Yf(e,t),e=e.sibling}function Yf(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Me(e,t),Ve(t),r&4){try{kr(3,t,t.return),Do(3,t)}catch(w){Y(t,t.return,w)}try{kr(5,t,t.return)}catch(w){Y(t,t.return,w)}}break;case 1:Me(e,t),Ve(t),r&512&&n!==null&&En(n,n.return);break;case 5:if(Me(e,t),Ve(t),r&512&&n!==null&&En(n,n.return),t.flags&32){var i=t.stateNode;try{Pr(i,"")}catch(w){Y(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&gd(i,o),Ks(a,s);var u=Ks(a,o);for(s=0;s<l.length;s+=2){var d=l[s],p=l[s+1];d==="style"?wd(i,p):d==="dangerouslySetInnerHTML"?vd(i,p):d==="children"?Pr(i,p):Ka(i,d,p,u)}switch(a){case"input":Hs(i,o);break;case"textarea":md(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?In(i,!!o.multiple,y,!1):g!==!!o.multiple&&(o.defaultValue!=null?In(i,!!o.multiple,o.defaultValue,!0):In(i,!!o.multiple,o.multiple?[]:"",!1))}i[zr]=o}catch(w){Y(t,t.return,w)}}break;case 6:if(Me(e,t),Ve(t),r&4){if(t.stateNode===null)throw Error(b(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(w){Y(t,t.return,w)}}break;case 3:if(Me(e,t),Ve(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Or(e.containerInfo)}catch(w){Y(t,t.return,w)}break;case 4:Me(e,t),Ve(t);break;case 13:Me(e,t),Ve(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Tl=Q())),r&4&&Jc(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(ce=(u=ce)||d,Me(e,t),ce=u):Me(e,t),Ve(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(E=t,d=t.child;d!==null;){for(p=E=d;E!==null;){switch(g=E,y=g.child,g.tag){case 0:case 11:case 14:case 15:kr(4,g,g.return);break;case 1:En(g,g.return);var v=g.stateNode;if(typeof v.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(w){Y(r,n,w)}}break;case 5:En(g,g.return);break;case 22:if(g.memoizedState!==null){tu(p);continue}}y!==null?(y.return=g,E=y):tu(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=p.stateNode,l=p.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=xd("display",s))}catch(w){Y(t,t.return,w)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(w){Y(t,t.return,w)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Me(e,t),Ve(t),r&4&&Jc(t);break;case 21:break;default:Me(e,t),Ve(t)}}function Ve(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Gf(n)){var r=n;break e}n=n.return}throw Error(b(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Pr(i,""),r.flags&=-33);var o=Zc(t);ka(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Zc(t);Sa(t,a,s);break;default:throw Error(b(161))}}catch(l){Y(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Nm(t,e,n){E=t,qf(t)}function qf(t,e,n){for(var r=(t.mode&1)!==0;E!==null;){var i=E,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||_i;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ce;a=_i;var u=ce;if(_i=s,(ce=l)&&!u)for(E=i;E!==null;)s=E,l=s.child,s.tag===22&&s.memoizedState!==null?nu(i):l!==null?(l.return=s,E=l):nu(i);for(;o!==null;)E=o,qf(o),o=o.sibling;E=i,_i=a,ce=u}eu(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,E=o):eu(t)}}function eu(t){for(;E!==null;){var e=E;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ce||Do(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ce)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:De(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&zc(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}zc(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Or(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}ce||e.flags&512&&ba(e)}catch(g){Y(e,e.return,g)}}if(e===t){E=null;break}if(n=e.sibling,n!==null){n.return=e.return,E=n;break}E=e.return}}function tu(t){for(;E!==null;){var e=E;if(e===t){E=null;break}var n=e.sibling;if(n!==null){n.return=e.return,E=n;break}E=e.return}}function nu(t){for(;E!==null;){var e=E;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Do(4,e)}catch(l){Y(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Y(e,i,l)}}var o=e.return;try{ba(e)}catch(l){Y(e,o,l)}break;case 5:var s=e.return;try{ba(e)}catch(l){Y(e,s,l)}}}catch(l){Y(e,e.return,l)}if(e===t){E=null;break}var a=e.sibling;if(a!==null){a.return=e.return,E=a;break}E=e.return}}var Rm=Math.ceil,po=gt.ReactCurrentDispatcher,_l=gt.ReactCurrentOwner,Ne=gt.ReactCurrentBatchConfig,D=0,re=null,X=null,oe=0,be=0,Tn=Bt(0),J=0,$r=null,sn=0,zo=0,El=0,_r=null,me=null,Tl=0,Vn=1/0,tt=null,ho=!1,_a=null,Ot=null,Ei=!1,It=null,go=0,Er=0,Ea=null,zi=-1,Fi=0;function pe(){return D&6?Q():zi!==-1?zi:zi=Q()}function Lt(t){return t.mode&1?D&2&&oe!==0?oe&-oe:gm.transition!==null?(Fi===0&&(Fi=Rd()),Fi):(t=F,t!==0||(t=window.event,t=t===void 0?16:Fd(t.type)),t):1}function He(t,e,n,r){if(50<Er)throw Er=0,Ea=null,Error(b(185));Qr(t,n,r),(!(D&2)||t!==re)&&(t===re&&(!(D&2)&&(zo|=n),J===4&&St(t,oe)),we(t,r),n===1&&D===0&&!(e.mode&1)&&(Vn=Q()+500,Lo&&Ht()))}function we(t,e){var n=t.callbackNode;gg(t,e);var r=Xi(t,t===re?oe:0);if(r===0)n!==null&&dc(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&dc(n),e===1)t.tag===0?hm(ru.bind(null,t)):of(ru.bind(null,t)),um(function(){!(D&6)&&Ht()}),n=null;else{switch(Od(r)){case 1:n=Za;break;case 4:n=Ad;break;case 16:n=Qi;break;case 536870912:n=Nd;break;default:n=Qi}n=rp(n,Qf.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Qf(t,e){if(zi=-1,Fi=0,D&6)throw Error(b(327));var n=t.callbackNode;if(Rn()&&t.callbackNode!==n)return null;var r=Xi(t,t===re?oe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=mo(t,r);else{e=r;var i=D;D|=2;var o=Zf();(re!==t||oe!==e)&&(tt=null,Vn=Q()+500,Jt(t,e));do try{jm();break}catch(a){Xf(t,a)}while(1);dl(),po.current=o,D=i,X!==null?e=0:(re=null,oe=0,e=J)}if(e!==0){if(e===2&&(i=Zs(t),i!==0&&(r=i,e=Ta(t,i))),e===1)throw n=$r,Jt(t,0),St(t,r),we(t,Q()),n;if(e===6)St(t,r);else{if(i=t.current.alternate,!(r&30)&&!Om(i)&&(e=mo(t,r),e===2&&(o=Zs(t),o!==0&&(r=o,e=Ta(t,o))),e===1))throw n=$r,Jt(t,0),St(t,r),we(t,Q()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(b(345));case 2:Kt(t,me,tt);break;case 3:if(St(t,r),(r&130023424)===r&&(e=Tl+500-Q(),10<e)){if(Xi(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){pe(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=sa(Kt.bind(null,t,me,tt),e);break}Kt(t,me,tt);break;case 4:if(St(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-Be(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Rm(r/1960))-r,10<r){t.timeoutHandle=sa(Kt.bind(null,t,me,tt),r);break}Kt(t,me,tt);break;case 5:Kt(t,me,tt);break;default:throw Error(b(329))}}}return we(t,Q()),t.callbackNode===n?Qf.bind(null,t):null}function Ta(t,e){var n=_r;return t.current.memoizedState.isDehydrated&&(Jt(t,e).flags|=256),t=mo(t,e),t!==2&&(e=me,me=n,e!==null&&Ia(e)),t}function Ia(t){me===null?me=t:me.push.apply(me,t)}function Om(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!We(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function St(t,e){for(e&=~El,e&=~zo,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Be(e),r=1<<n;t[n]=-1,e&=~r}}function ru(t){if(D&6)throw Error(b(327));Rn();var e=Xi(t,0);if(!(e&1))return we(t,Q()),null;var n=mo(t,e);if(t.tag!==0&&n===2){var r=Zs(t);r!==0&&(e=r,n=Ta(t,r))}if(n===1)throw n=$r,Jt(t,0),St(t,e),we(t,Q()),n;if(n===6)throw Error(b(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Kt(t,me,tt),we(t,Q()),null}function Il(t,e){var n=D;D|=1;try{return t(e)}finally{D=n,D===0&&(Vn=Q()+500,Lo&&Ht())}}function an(t){It!==null&&It.tag===0&&!(D&6)&&Rn();var e=D;D|=1;var n=Ne.transition,r=F;try{if(Ne.transition=null,F=1,t)return t()}finally{F=r,Ne.transition=n,D=e,!(D&6)&&Ht()}}function Cl(){be=Tn.current,W(Tn)}function Jt(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,cm(n)),X!==null)for(n=X.return;n!==null;){var r=n;switch(ll(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&no();break;case 3:Wn(),W(ve),W(ue),yl();break;case 5:ml(r);break;case 4:Wn();break;case 13:W(V);break;case 19:W(V);break;case 10:fl(r.type._context);break;case 22:case 23:Cl()}n=n.return}if(re=t,X=t=jt(t.current,null),oe=be=e,J=0,$r=null,El=zo=sn=0,me=_r=null,Qt!==null){for(e=0;e<Qt.length;e++)if(n=Qt[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Qt=null}return t}function Xf(t,e){do{var n=X;try{if(dl(),ji.current=fo,uo){for(var r=G.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}uo=!1}if(on=0,ne=Z=G=null,Sr=!1,Br=0,_l.current=null,n===null||n.return===null){J=1,$r=e,X=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=oe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var g=d.alternate;g?(d.updateQueue=g.updateQueue,d.memoizedState=g.memoizedState,d.lanes=g.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=$c(s);if(y!==null){y.flags&=-257,Vc(y,s,a,o,e),y.mode&1&&Wc(o,u,e),e=y,l=u;var v=e.updateQueue;if(v===null){var w=new Set;w.add(l),e.updateQueue=w}else v.add(l);break e}else{if(!(e&1)){Wc(o,u,e),Pl();break e}l=Error(b(426))}}else if($&&a.mode&1){var C=$c(s);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Vc(C,s,a,o,e),cl($n(l,a));break e}}o=l=$n(l,a),J!==4&&(J=2),_r===null?_r=[o]:_r.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var h=Lf(o,l,e);Dc(o,h);break e;case 1:a=l;var f=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ot===null||!Ot.has(m)))){o.flags|=65536,e&=-e,o.lanes|=e;var x=jf(o,a,e);Dc(o,x);break e}}o=o.return}while(o!==null)}ep(n)}catch(S){e=S,X===n&&n!==null&&(X=n=n.return);continue}break}while(1)}function Zf(){var t=po.current;return po.current=fo,t===null?fo:t}function Pl(){(J===0||J===3||J===2)&&(J=4),re===null||!(sn&268435455)&&!(zo&268435455)||St(re,oe)}function mo(t,e){var n=D;D|=2;var r=Zf();(re!==t||oe!==e)&&(tt=null,Jt(t,e));do try{Lm();break}catch(i){Xf(t,i)}while(1);if(dl(),D=n,po.current=r,X!==null)throw Error(b(261));return re=null,oe=0,J}function Lm(){for(;X!==null;)Jf(X)}function jm(){for(;X!==null&&!sg();)Jf(X)}function Jf(t){var e=np(t.alternate,t,be);t.memoizedProps=t.pendingProps,e===null?ep(t):X=e,_l.current=null}function ep(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Cm(n,e),n!==null){n.flags&=32767,X=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{J=6,X=null;return}}else if(n=Im(n,e,be),n!==null){X=n;return}if(e=e.sibling,e!==null){X=e;return}X=e=t}while(e!==null);J===0&&(J=5)}function Kt(t,e,n){var r=F,i=Ne.transition;try{Ne.transition=null,F=1,Mm(t,e,n,r)}finally{Ne.transition=i,F=r}return null}function Mm(t,e,n,r){do Rn();while(It!==null);if(D&6)throw Error(b(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(b(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(mg(t,o),t===re&&(X=re=null,oe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ei||(Ei=!0,rp(Qi,function(){return Rn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ne.transition,Ne.transition=null;var s=F;F=1;var a=D;D|=4,_l.current=null,Am(t,n),Yf(n,t),nm(ia),Zi=!!ra,ia=ra=null,t.current=n,Nm(n),ag(),D=a,F=s,Ne.transition=o}else t.current=n;if(Ei&&(Ei=!1,It=t,go=i),o=t.pendingLanes,o===0&&(Ot=null),ug(n.stateNode),we(t,Q()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ho)throw ho=!1,t=_a,_a=null,t;return go&1&&t.tag!==0&&Rn(),o=t.pendingLanes,o&1?t===Ea?Er++:(Er=0,Ea=t):Er=0,Ht(),null}function Rn(){if(It!==null){var t=Od(go),e=Ne.transition,n=F;try{if(Ne.transition=null,F=16>t?16:t,It===null)var r=!1;else{if(t=It,It=null,go=0,D&6)throw Error(b(331));var i=D;for(D|=4,E=t.current;E!==null;){var o=E,s=o.child;if(E.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(E=u;E!==null;){var d=E;switch(d.tag){case 0:case 11:case 15:kr(8,d,o)}var p=d.child;if(p!==null)p.return=d,E=p;else for(;E!==null;){d=E;var g=d.sibling,y=d.return;if(Vf(d),d===u){E=null;break}if(g!==null){g.return=y,E=g;break}E=y}}}var v=o.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var C=w.sibling;w.sibling=null,w=C}while(w!==null)}}E=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,E=s;else e:for(;E!==null;){if(o=E,o.flags&2048)switch(o.tag){case 0:case 11:case 15:kr(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,E=h;break e}E=o.return}}var f=t.current;for(E=f;E!==null;){s=E;var m=s.child;if(s.subtreeFlags&2064&&m!==null)m.return=s,E=m;else e:for(s=f;E!==null;){if(a=E,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Do(9,a)}}catch(S){Y(a,a.return,S)}if(a===s){E=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,E=x;break e}E=a.return}}if(D=i,Ht(),qe&&typeof qe.onPostCommitFiberRoot=="function")try{qe.onPostCommitFiberRoot(Po,t)}catch{}r=!0}return r}finally{F=n,Ne.transition=e}}return!1}function iu(t,e,n){e=$n(n,e),e=Lf(t,e,1),t=Rt(t,e,1),e=pe(),t!==null&&(Qr(t,1,e),we(t,e))}function Y(t,e,n){if(t.tag===3)iu(t,t,n);else for(;e!==null;){if(e.tag===3){iu(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ot===null||!Ot.has(r))){t=$n(n,t),t=jf(e,t,1),e=Rt(e,t,1),t=pe(),e!==null&&(Qr(e,1,t),we(e,t));break}}e=e.return}}function Dm(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=pe(),t.pingedLanes|=t.suspendedLanes&n,re===t&&(oe&n)===n&&(J===4||J===3&&(oe&130023424)===oe&&500>Q()-Tl?Jt(t,0):El|=n),we(t,e)}function tp(t,e){e===0&&(t.mode&1?(e=gi,gi<<=1,!(gi&130023424)&&(gi=4194304)):e=1);var n=pe();t=ft(t,e),t!==null&&(Qr(t,e,n),we(t,n))}function zm(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),tp(t,n)}function Fm(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(b(314))}r!==null&&r.delete(e),tp(t,n)}var np;np=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ve.current)ye=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ye=!1,Tm(t,e,n);ye=!!(t.flags&131072)}else ye=!1,$&&e.flags&1048576&&sf(e,oo,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Di(t,e),t=e.pendingProps;var i=Un(e,ue.current);Nn(e,n),i=xl(null,e,r,t,i,n);var o=wl();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,xe(r)?(o=!0,ro(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,hl(e),i.updater=Mo,e.stateNode=i,i._reactInternals=e,pa(e,r,t,n),e=ma(null,e,r,!0,o,n)):(e.tag=0,$&&o&&al(e),fe(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Di(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Bm(r),t=De(r,t),i){case 0:e=ga(null,e,r,t,n);break e;case 1:e=Yc(null,e,r,t,n);break e;case 11:e=Gc(null,e,r,t,n);break e;case 14:e=Kc(null,e,r,De(r.type,t),n);break e}throw Error(b(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:De(r,i),ga(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:De(r,i),Yc(t,e,r,i,n);case 3:e:{if(Ff(e),t===null)throw Error(b(387));r=e.pendingProps,o=e.memoizedState,i=o.element,ff(t,e),lo(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=$n(Error(b(423)),e),e=qc(t,e,r,n,i);break e}else if(r!==i){i=$n(Error(b(424)),e),e=qc(t,e,r,n,i);break e}else for(Se=Nt(e.stateNode.containerInfo.firstChild),ke=e,$=!0,Fe=null,n=uf(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Bn(),r===i){e=pt(t,e,n);break e}fe(t,e,r,n)}e=e.child}return e;case 5:return pf(e),t===null&&ua(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,oa(r,i)?s=null:o!==null&&oa(r,o)&&(e.flags|=32),zf(t,e),fe(t,e,s,n),e.child;case 6:return t===null&&ua(e),null;case 13:return Uf(t,e,n);case 4:return gl(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Hn(e,null,r,n):fe(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:De(r,i),Gc(t,e,r,i,n);case 7:return fe(t,e,e.pendingProps,n),e.child;case 8:return fe(t,e,e.pendingProps.children,n),e.child;case 12:return fe(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,B(so,r._currentValue),r._currentValue=s,o!==null)if(We(o.value,s)){if(o.children===i.children&&!ve.current){e=pt(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=lt(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),da(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(b(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),da(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}fe(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Nn(e,n),i=Re(i),r=r(i),e.flags|=1,fe(t,e,r,n),e.child;case 14:return r=e.type,i=De(r,e.pendingProps),i=De(r.type,i),Kc(t,e,r,i,n);case 15:return Mf(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:De(r,i),Di(t,e),e.tag=1,xe(r)?(t=!0,ro(e)):t=!1,Nn(e,n),Of(e,r,i),pa(e,r,i,n),ma(null,e,r,!0,t,n);case 19:return Bf(t,e,n);case 22:return Df(t,e,n)}throw Error(b(156,e.tag))};function rp(t,e){return Pd(t,e)}function Um(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ae(t,e,n,r){return new Um(t,e,n,r)}function Al(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Bm(t){if(typeof t=="function")return Al(t)?1:0;if(t!=null){if(t=t.$$typeof,t===qa)return 11;if(t===Qa)return 14}return 2}function jt(t,e){var n=t.alternate;return n===null?(n=Ae(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ui(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")Al(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case mn:return en(n.children,i,o,e);case Ya:s=8,i|=8;break;case Ds:return t=Ae(12,n,e,i|2),t.elementType=Ds,t.lanes=o,t;case zs:return t=Ae(13,n,e,i),t.elementType=zs,t.lanes=o,t;case Fs:return t=Ae(19,n,e,i),t.elementType=Fs,t.lanes=o,t;case fd:return Fo(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ud:s=10;break e;case dd:s=9;break e;case qa:s=11;break e;case Qa:s=14;break e;case xt:s=16,r=null;break e}throw Error(b(130,t==null?t:typeof t,""))}return e=Ae(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function en(t,e,n,r){return t=Ae(7,t,r,e),t.lanes=n,t}function Fo(t,e,n,r){return t=Ae(22,t,r,e),t.elementType=fd,t.lanes=n,t.stateNode={isHidden:!1},t}function Ss(t,e,n){return t=Ae(6,t,null,e),t.lanes=n,t}function ks(t,e,n){return e=Ae(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Hm(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=rs(0),this.expirationTimes=rs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rs(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Nl(t,e,n,r,i,o,s,a,l){return t=new Hm(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Ae(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},hl(o),t}function Wm(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:gn,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function ip(t){if(!t)return Ft;t=t._reactInternals;e:{if(fn(t)!==t||t.tag!==1)throw Error(b(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(xe(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(b(171))}if(t.tag===1){var n=t.type;if(xe(n))return rf(t,n,e)}return e}function op(t,e,n,r,i,o,s,a,l){return t=Nl(n,r,!0,t,i,o,s,a,l),t.context=ip(null),n=t.current,r=pe(),i=Lt(n),o=lt(r,i),o.callback=e??null,Rt(n,o,i),t.current.lanes=i,Qr(t,i,r),we(t,r),t}function Uo(t,e,n,r){var i=e.current,o=pe(),s=Lt(i);return n=ip(n),e.context===null?e.context=n:e.pendingContext=n,e=lt(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Rt(i,e,s),t!==null&&(He(t,i,s,o),Li(t,i,s)),s}function yo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ou(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Rl(t,e){ou(t,e),(t=t.alternate)&&ou(t,e)}function $m(){return null}var sp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ol(t){this._internalRoot=t}Bo.prototype.render=Ol.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(b(409));Uo(t,e,null,null)};Bo.prototype.unmount=Ol.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;an(function(){Uo(null,t,null,null)}),e[dt]=null}};function Bo(t){this._internalRoot=t}Bo.prototype.unstable_scheduleHydration=function(t){if(t){var e=Md();t={blockedOn:null,target:t,priority:e};for(var n=0;n<bt.length&&e!==0&&e<bt[n].priority;n++);bt.splice(n,0,t),n===0&&zd(t)}};function Ll(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ho(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function su(){}function Vm(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=yo(s);o.call(u)}}var s=op(e,r,t,0,null,!1,!1,"",su);return t._reactRootContainer=s,t[dt]=s.current,Mr(t.nodeType===8?t.parentNode:t),an(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=yo(l);a.call(u)}}var l=Nl(t,0,!1,null,null,!1,!1,"",su);return t._reactRootContainer=l,t[dt]=l.current,Mr(t.nodeType===8?t.parentNode:t),an(function(){Uo(e,l,n,r)}),l}function Wo(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=yo(s);a.call(l)}}Uo(e,s,t,i)}else s=Vm(n,e,t,i,r);return yo(s)}Ld=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=pr(e.pendingLanes);n!==0&&(Ja(e,n|1),we(e,Q()),!(D&6)&&(Vn=Q()+500,Ht()))}break;case 13:an(function(){var r=ft(t,1);if(r!==null){var i=pe();He(r,t,1,i)}}),Rl(t,1)}};el=function(t){if(t.tag===13){var e=ft(t,134217728);if(e!==null){var n=pe();He(e,t,134217728,n)}Rl(t,134217728)}};jd=function(t){if(t.tag===13){var e=Lt(t),n=ft(t,e);if(n!==null){var r=pe();He(n,t,e,r)}Rl(t,e)}};Md=function(){return F};Dd=function(t,e){var n=F;try{return F=t,e()}finally{F=n}};qs=function(t,e,n){switch(e){case"input":if(Hs(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Oo(r);if(!i)throw Error(b(90));hd(r),Hs(r,i)}}}break;case"textarea":md(t,n);break;case"select":e=n.value,e!=null&&In(t,!!n.multiple,e,!1)}};kd=Il;_d=an;var Gm={usingClientEntryPoint:!1,Events:[Zr,wn,Oo,bd,Sd,Il]},ar={findFiberByHostInstance:qt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Km={bundleType:ar.bundleType,version:ar.version,rendererPackageName:ar.rendererPackageName,rendererConfig:ar.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:gt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Id(t),t===null?null:t.stateNode},findFiberByHostInstance:ar.findFiberByHostInstance||$m,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ti=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ti.isDisabled&&Ti.supportsFiber)try{Po=Ti.inject(Km),qe=Ti}catch{}}Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gm;Ee.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ll(e))throw Error(b(200));return Wm(t,e,null,n)};Ee.createRoot=function(t,e){if(!Ll(t))throw Error(b(299));var n=!1,r="",i=sp;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Nl(t,1,!1,null,null,n,!1,r,i),t[dt]=e.current,Mr(t.nodeType===8?t.parentNode:t),new Ol(e)};Ee.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(b(188)):(t=Object.keys(t).join(","),Error(b(268,t)));return t=Id(e),t=t===null?null:t.stateNode,t};Ee.flushSync=function(t){return an(t)};Ee.hydrate=function(t,e,n){if(!Ho(e))throw Error(b(200));return Wo(null,t,e,!0,n)};Ee.hydrateRoot=function(t,e,n){if(!Ll(t))throw Error(b(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=sp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=op(e,null,t,1,n??null,i,!1,o,s),t[dt]=e.current,Mr(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Bo(e)};Ee.render=function(t,e,n){if(!Ho(e))throw Error(b(200));return Wo(null,t,e,!1,n)};Ee.unmountComponentAtNode=function(t){if(!Ho(t))throw Error(b(40));return t._reactRootContainer?(an(function(){Wo(null,null,t,!1,function(){t._reactRootContainer=null,t[dt]=null})}),!0):!1};Ee.unstable_batchedUpdates=Il;Ee.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ho(n))throw Error(b(200));if(t==null||t._reactInternals===void 0)throw Error(b(38));return Wo(t,e,n,!1,r)};Ee.version="18.3.1-next-f1338f8080-20240426";function ap(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ap)}catch(t){console.error(t)}}ap(),sd.exports=Ee;var Ym=sd.exports,au=Ym;js.createRoot=au.createRoot,js.hydrateRoot=au.hydrateRoot;var qm=typeof Element<"u",Qm=typeof Map=="function",Xm=typeof Set=="function",Zm=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function Bi(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var n,r,i;if(Array.isArray(t)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(!Bi(t[r],e[r]))return!1;return!0}var o;if(Qm&&t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(o=t.entries();!(r=o.next()).done;)if(!e.has(r.value[0]))return!1;for(o=t.entries();!(r=o.next()).done;)if(!Bi(r.value[1],e.get(r.value[0])))return!1;return!0}if(Xm&&t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(o=t.entries();!(r=o.next()).done;)if(!e.has(r.value[0]))return!1;return!0}if(Zm&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(t[r]!==e[r])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf&&typeof t.valueOf=="function"&&typeof e.valueOf=="function")return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString&&typeof t.toString=="function"&&typeof e.toString=="function")return t.toString()===e.toString();if(i=Object.keys(t),n=i.length,n!==Object.keys(e).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,i[r]))return!1;if(qm&&t instanceof Element)return!1;for(r=n;r--!==0;)if(!((i[r]==="_owner"||i[r]==="__v"||i[r]==="__o")&&t.$$typeof)&&!Bi(t[i[r]],e[i[r]]))return!1;return!0}return t!==t&&e!==e}var Jm=function(e,n){try{return Bi(e,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const e0=Io(Jm);var t0=function(t,e,n,r,i,o,s,a){if(!t){var l;if(e===void 0)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,i,o,s,a],d=0;l=new Error(e.replace(/%s/g,function(){return u[d++]})),l.name="Invariant Violation"}throw l.framesToPop=1,l}},n0=t0;const lu=Io(n0);var r0=function(e,n,r,i){var o=r?r.call(i,e,n):void 0;if(o!==void 0)return!!o;if(e===n)return!0;if(typeof e!="object"||!e||typeof n!="object"||!n)return!1;var s=Object.keys(e),a=Object.keys(n);if(s.length!==a.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(n),u=0;u<s.length;u++){var d=s[u];if(!l(d))return!1;var p=e[d],g=n[d];if(o=r?r.call(i,p,g,d):void 0,o===!1||o===void 0&&p!==g)return!1}return!0};const i0=Io(r0);var lp=(t=>(t.BASE="base",t.BODY="body",t.HEAD="head",t.HTML="html",t.LINK="link",t.META="meta",t.NOSCRIPT="noscript",t.SCRIPT="script",t.STYLE="style",t.TITLE="title",t.FRAGMENT="Symbol(react.fragment)",t))(lp||{}),_s={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},cu=Object.values(lp),jl={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},o0=Object.entries(jl).reduce((t,[e,n])=>(t[n]=e,t),{}),Ue="data-rh",On={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},Ln=(t,e)=>{for(let n=t.length-1;n>=0;n-=1){const r=t[n];if(Object.prototype.hasOwnProperty.call(r,e))return r[e]}return null},s0=t=>{let e=Ln(t,"title");const n=Ln(t,On.TITLE_TEMPLATE);if(Array.isArray(e)&&(e=e.join("")),n&&e)return n.replace(/%s/g,()=>e);const r=Ln(t,On.DEFAULT_TITLE);return e||r||void 0},a0=t=>Ln(t,On.ON_CHANGE_CLIENT_STATE)||(()=>{}),Es=(t,e)=>e.filter(n=>typeof n[t]<"u").map(n=>n[t]).reduce((n,r)=>({...n,...r}),{}),l0=(t,e)=>e.filter(n=>typeof n.base<"u").map(n=>n.base).reverse().reduce((n,r)=>{if(!n.length){const i=Object.keys(r);for(let o=0;o<i.length;o+=1){const a=i[o].toLowerCase();if(t.indexOf(a)!==-1&&r[a])return n.concat(r)}}return n},[]),c0=t=>console&&typeof console.warn=="function"&&console.warn(t),lr=(t,e,n)=>{const r={};return n.filter(i=>Array.isArray(i[t])?!0:(typeof i[t]<"u"&&c0(`Helmet: ${t} should be of type "Array". Instead found type "${typeof i[t]}"`),!1)).map(i=>i[t]).reverse().reduce((i,o)=>{const s={};o.filter(l=>{let u;const d=Object.keys(l);for(let g=0;g<d.length;g+=1){const y=d[g],v=y.toLowerCase();e.indexOf(v)!==-1&&!(u==="rel"&&l[u].toLowerCase()==="canonical")&&!(v==="rel"&&l[v].toLowerCase()==="stylesheet")&&(u=v),e.indexOf(y)!==-1&&(y==="innerHTML"||y==="cssText"||y==="itemprop")&&(u=y)}if(!u||!l[u])return!1;const p=l[u].toLowerCase();return r[u]||(r[u]={}),s[u]||(s[u]={}),r[u][p]?!1:(s[u][p]=!0,!0)}).reverse().forEach(l=>i.push(l));const a=Object.keys(s);for(let l=0;l<a.length;l+=1){const u=a[l],d={...r[u],...s[u]};r[u]=d}return i},[]).reverse()},u0=(t,e)=>{if(Array.isArray(t)&&t.length){for(let n=0;n<t.length;n+=1)if(t[n][e])return!0}return!1},d0=t=>({baseTag:l0(["href"],t),bodyAttributes:Es("bodyAttributes",t),defer:Ln(t,On.DEFER),encode:Ln(t,On.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:Es("htmlAttributes",t),linkTags:lr("link",["rel","href"],t),metaTags:lr("meta",["name","charset","http-equiv","property","itemprop"],t),noscriptTags:lr("noscript",["innerHTML"],t),onChangeClientState:a0(t),scriptTags:lr("script",["src","innerHTML"],t),styleTags:lr("style",["cssText"],t),title:s0(t),titleAttributes:Es("titleAttributes",t),prioritizeSeoTags:u0(t,On.PRIORITIZE_SEO_TAGS)}),cp=t=>Array.isArray(t)?t.join(""):t,f0=(t,e)=>{const n=Object.keys(t);for(let r=0;r<n.length;r+=1)if(e[n[r]]&&e[n[r]].includes(t[n[r]]))return!0;return!1},Ts=(t,e)=>Array.isArray(t)?t.reduce((n,r)=>(f0(r,e)?n.priority.push(r):n.default.push(r),n),{priority:[],default:[]}):{default:t,priority:[]},uu=(t,e)=>({...t,[e]:void 0}),p0=["noscript","script","style"],Ca=(t,e=!0)=>e===!1?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),up=t=>Object.keys(t).reduce((e,n)=>{const r=typeof t[n]<"u"?`${n}="${t[n]}"`:`${n}`;return e?`${e} ${r}`:r},""),h0=(t,e,n,r)=>{const i=up(n),o=cp(e);return i?`<${t} ${Ue}="true" ${i}>${Ca(o,r)}</${t}>`:`<${t} ${Ue}="true">${Ca(o,r)}</${t}>`},g0=(t,e,n=!0)=>e.reduce((r,i)=>{const o=i,s=Object.keys(o).filter(u=>!(u==="innerHTML"||u==="cssText")).reduce((u,d)=>{const p=typeof o[d]>"u"?d:`${d}="${Ca(o[d],n)}"`;return u?`${u} ${p}`:p},""),a=o.innerHTML||o.cssText||"",l=p0.indexOf(t)===-1;return`${r}<${t} ${Ue}="true" ${s}${l?"/>":`>${a}</${t}>`}`},""),dp=(t,e={})=>Object.keys(t).reduce((n,r)=>{const i=jl[r];return n[i||r]=t[r],n},e),m0=(t,e,n)=>{const r={key:e,[Ue]:!0},i=dp(n,r);return[Ye.createElement("title",i,e)]},Hi=(t,e)=>e.map((n,r)=>{const i={key:r,[Ue]:!0};return Object.keys(n).forEach(o=>{const a=jl[o]||o;if(a==="innerHTML"||a==="cssText"){const l=n.innerHTML||n.cssText;i.dangerouslySetInnerHTML={__html:l}}else i[a]=n[o]}),Ye.createElement(t,i)}),Ie=(t,e,n=!0)=>{switch(t){case"title":return{toComponent:()=>m0(t,e.title,e.titleAttributes),toString:()=>h0(t,e.title,e.titleAttributes,n)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>dp(e),toString:()=>up(e)};default:return{toComponent:()=>Hi(t,e),toString:()=>g0(t,e,n)}}},y0=({metaTags:t,linkTags:e,scriptTags:n,encode:r})=>{const i=Ts(t,_s.meta),o=Ts(e,_s.link),s=Ts(n,_s.script);return{priorityMethods:{toComponent:()=>[...Hi("meta",i.priority),...Hi("link",o.priority),...Hi("script",s.priority)],toString:()=>`${Ie("meta",i.priority,r)} ${Ie("link",o.priority,r)} ${Ie("script",s.priority,r)}`},metaTags:i.default,linkTags:o.default,scriptTags:s.default}},v0=t=>{const{baseTag:e,bodyAttributes:n,encode:r=!0,htmlAttributes:i,noscriptTags:o,styleTags:s,title:a="",titleAttributes:l,prioritizeSeoTags:u}=t;let{linkTags:d,metaTags:p,scriptTags:g}=t,y={toComponent:()=>{},toString:()=>""};return u&&({priorityMethods:y,linkTags:d,metaTags:p,scriptTags:g}=y0(t)),{priority:y,base:Ie("base",e,r),bodyAttributes:Ie("bodyAttributes",n,r),htmlAttributes:Ie("htmlAttributes",i,r),link:Ie("link",d,r),meta:Ie("meta",p,r),noscript:Ie("noscript",o,r),script:Ie("script",g,r),style:Ie("style",s,r),title:Ie("title",{title:a,titleAttributes:l},r)}},Pa=v0,Ii=[],fp=!!(typeof window<"u"&&window.document&&window.document.createElement),Aa=class{constructor(t,e){et(this,"instances",[]);et(this,"canUseDOM",fp);et(this,"context");et(this,"value",{setHelmet:t=>{this.context.helmet=t},helmetInstances:{get:()=>this.canUseDOM?Ii:this.instances,add:t=>{(this.canUseDOM?Ii:this.instances).push(t)},remove:t=>{const e=(this.canUseDOM?Ii:this.instances).indexOf(t);(this.canUseDOM?Ii:this.instances).splice(e,1)}}});this.context=t,this.canUseDOM=e||!1,e||(t.helmet=Pa({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},x0={},pp=Ye.createContext(x0),zn,hp=(zn=class extends P.Component{constructor(n){super(n);et(this,"helmetData");this.helmetData=new Aa(this.props.context||{},zn.canUseDOM)}render(){return Ye.createElement(pp.Provider,{value:this.helmetData.value},this.props.children)}},et(zn,"canUseDOM",fp),zn),hn=(t,e)=>{const n=document.head||document.querySelector("head"),r=n.querySelectorAll(`${t}[${Ue}]`),i=[].slice.call(r),o=[];let s;return e&&e.length&&e.forEach(a=>{const l=document.createElement(t);for(const u in a)if(Object.prototype.hasOwnProperty.call(a,u))if(u==="innerHTML")l.innerHTML=a.innerHTML;else if(u==="cssText")l.styleSheet?l.styleSheet.cssText=a.cssText:l.appendChild(document.createTextNode(a.cssText));else{const d=u,p=typeof a[d]>"u"?"":a[d];l.setAttribute(u,p)}l.setAttribute(Ue,"true"),i.some((u,d)=>(s=d,l.isEqualNode(u)))?i.splice(s,1):o.push(l)}),i.forEach(a=>{var l;return(l=a.parentNode)==null?void 0:l.removeChild(a)}),o.forEach(a=>n.appendChild(a)),{oldTags:i,newTags:o}},Na=(t,e)=>{const n=document.getElementsByTagName(t)[0];if(!n)return;const r=n.getAttribute(Ue),i=r?r.split(","):[],o=[...i],s=Object.keys(e);for(const a of s){const l=e[a]||"";n.getAttribute(a)!==l&&n.setAttribute(a,l),i.indexOf(a)===-1&&i.push(a);const u=o.indexOf(a);u!==-1&&o.splice(u,1)}for(let a=o.length-1;a>=0;a-=1)n.removeAttribute(o[a]);i.length===o.length?n.removeAttribute(Ue):n.getAttribute(Ue)!==s.join(",")&&n.setAttribute(Ue,s.join(","))},w0=(t,e)=>{typeof t<"u"&&document.title!==t&&(document.title=cp(t)),Na("title",e)},du=(t,e)=>{const{baseTag:n,bodyAttributes:r,htmlAttributes:i,linkTags:o,metaTags:s,noscriptTags:a,onChangeClientState:l,scriptTags:u,styleTags:d,title:p,titleAttributes:g}=t;Na("body",r),Na("html",i),w0(p,g);const y={baseTag:hn("base",n),linkTags:hn("link",o),metaTags:hn("meta",s),noscriptTags:hn("noscript",a),scriptTags:hn("script",u),styleTags:hn("style",d)},v={},w={};Object.keys(y).forEach(C=>{const{newTags:h,oldTags:f}=y[C];h.length&&(v[C]=h),f.length&&(w[C]=y[C].oldTags)}),e&&e(),l(t,v,w)},cr=null,b0=t=>{cr&&cancelAnimationFrame(cr),t.defer?cr=requestAnimationFrame(()=>{du(t,()=>{cr=null})}):(du(t),cr=null)},S0=b0,fu=class extends P.Component{constructor(){super(...arguments);et(this,"rendered",!1)}shouldComponentUpdate(e){return!i0(e,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:e}=this.props.context;e.remove(this),this.emitChange()}emitChange(){const{helmetInstances:e,setHelmet:n}=this.props.context;let r=null;const i=d0(e.get().map(o=>{const s={...o.props};return delete s.context,s}));hp.canUseDOM?S0(i):Pa&&(r=Pa(i)),n(r)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:e}=this.props.context;e.add(this),this.emitChange()}render(){return this.init(),null}},Ls,k0=(Ls=class extends P.Component{shouldComponentUpdate(t){return!e0(uu(this.props,"helmetData"),uu(t,"helmetData"))}mapNestedChildrenToProps(t,e){if(!e)return null;switch(t.type){case"script":case"noscript":return{innerHTML:e};case"style":return{cssText:e};default:throw new Error(`<${t.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(t,e,n,r){return{...e,[t.type]:[...e[t.type]||[],{...n,...this.mapNestedChildrenToProps(t,r)}]}}mapObjectTypeChildren(t,e,n,r){switch(t.type){case"title":return{...e,[t.type]:r,titleAttributes:{...n}};case"body":return{...e,bodyAttributes:{...n}};case"html":return{...e,htmlAttributes:{...n}};default:return{...e,[t.type]:{...n}}}}mapArrayTypeChildrenToProps(t,e){let n={...e};return Object.keys(t).forEach(r=>{n={...n,[r]:t[r]}}),n}warnOnInvalidChildren(t,e){return lu(cu.some(n=>t.type===n),typeof t.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${cu.join(", ")} are allowed. Helmet does not support rendering <${t.type}> elements. Refer to our API for more information.`),lu(!e||typeof e=="string"||Array.isArray(e)&&!e.some(n=>typeof n!="string"),`Helmet expects a string as a child of <${t.type}>. Did you forget to wrap your children in braces? ( <${t.type}>{\`\`}</${t.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(t,e){let n={};return Ye.Children.forEach(t,r=>{if(!r||!r.props)return;const{children:i,...o}=r.props,s=Object.keys(o).reduce((l,u)=>(l[o0[u]||u]=o[u],l),{});let{type:a}=r;switch(typeof a=="symbol"?a=a.toString():this.warnOnInvalidChildren(r,i),a){case"Symbol(react.fragment)":e=this.mapChildrenToProps(i,e);break;case"link":case"meta":case"noscript":case"script":case"style":n=this.flattenArrayTypeChildren(r,n,s,i);break;default:e=this.mapObjectTypeChildren(r,e,s,i);break}}),this.mapArrayTypeChildrenToProps(n,e)}render(){const{children:t,...e}=this.props;let n={...e},{helmetData:r}=e;if(t&&(n=this.mapChildrenToProps(t,n)),r&&!(r instanceof Aa)){const i=r;r=new Aa(i.context,!0),delete n.helmetData}return r?Ye.createElement(fu,{...n,context:r.value}):Ye.createElement(pp.Consumer,null,i=>Ye.createElement(fu,{...n,context:i}))}},et(Ls,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),Ls);const te={primary:"#0ea5e9",primaryDark:"#0284c7",primaryLight:"#38bdf8",primaryGlow:"rgba(14, 165, 233, 0.35)",primaryFaint:"rgba(14, 165, 233, 0.08)",accent:"#06b6d4",accentDark:"#0891b2",green:"#16a34a",greenLight:"#22c55e",red:"#ef4444",grad:"linear-gradient(135deg, #0284c7 0%, #06b6d4 100%)",gradHero:"linear-gradient(135deg, #0369a1 0%, #0891b2 100%)",gradAnimated:"linear-gradient(270deg, #0284c7, #06b6d4, #0ea5e9, #38bdf8)",bgLight:"#ffffff",surfLight:"#f0f9ff",surfLight2:"#e0f2fe",borderLight:"#cbd5e1",textLight:"#0f172a",textMidLight:"#475569",textDimLight:"#94a3b8",bgDark:"#020617",surfDark:"#0f172a",surfDark2:"#1e293b",borderDark:"#334155",textDark:"#f1f5f9",textMidDark:"#94a3b8",textDimDark:"#64748b",fontDisplay:"'DM Sans', 'Inter', system-ui, sans-serif",fontBody:"'DM Sans', 'Inter', system-ui, sans-serif",radiusSm:"6px",radiusMd:"10px",radiusLg:"14px",radiusXl:"20px",radiusCard:"16px",shadowSm:"0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06)",shadowMd:"0 4px 12px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.06)",shadowLg:"0 12px 32px rgba(0,0,0,0.10), 0 4px 8px rgba(0,0,0,0.06)",shadowXl:"0 20px 48px rgba(0,0,0,0.14), 0 8px 16px rgba(0,0,0,0.08)"},gp=t=>({bg:t?te.bgDark:te.bgLight,surf:t?te.surfDark:te.surfLight,surf2:t?te.surfDark2:te.surfLight2,border:t?te.borderDark:te.borderLight,text:t?te.textDark:te.textLight,textMid:t?te.textMidDark:te.textMidLight,textDim:t?te.textDimDark:te.textDimLight}),_0={en:{heroTitle:"Classic Printing.",heroTitle2:"Modern Precision.",heroSub:"Trusted printing & finishing services in Delhi since 1995",yearsActive:"30+ YEARS ACTIVE",booksPrinted:"50K+ BOOKS PRINTED",happyClients:"500+ HAPPY CLIENTS",heroTrust:"Trusted by publishers across Delhi since 1995 - Dilshad Garden",productsEyebrow:"What we offer",productsTitle:"Our Printing Services",productsIntro:"Specialising in high-quality bulk book printing and professional lamination services. We use premium Fevicol-based adhesives, serving publishers, authors, and businesses across Delhi.",productBulkTitle:"Bulk Book Printing",productBulkDesc:"High-volume printing for publishers, authors, and institutions. Consistent quality across thousands of copies — textbooks, novels, catalogs, and manuals.",productThermalTitle:"Thermal Gloss Lamination",productThermalDesc:"Premium gloss lamination using Fevicol-based adhesives. A shiny, protective finish that makes colours pop and stands up to daily handling.",productMatteTitle:"Matte Lamination",productMatteDesc:"Sophisticated, non-reflective finish using Fevicol-based adhesives. The go-to for premium covers that need to feel as good as they look.",productSoftTouchTitle:"Soft-Touch Lamination",productSoftTouchDesc:"Velvety, luxurious texture that turns every printed piece into an experience. Ideal for book covers, premium brochures, and collector's editions.",productTitlePrintingTitle:"Title Printing",productTitlePrintingDesc:"Custom title work for book spines, special-edition covers, and branded collateral. Every detail crafted to make your title unforgettable.",galleryEyebrow:"Our Machinery",galleryTitle:"Built for",galleryTitleEm:"Precision",galleryDesc:"World-class Heidelberg and Akiyama equipment — engineered for flawless output, maximum throughput, and zero compromise on quality.",galleryYouTubeText:"Want to see these machines in action? Watch live demos on our",machineCategoryOffset:"Offset Printing",machineCategoryPlate:"Plate Making",machineCategoryLamination:"Lamination",machineCategoryFinishing:"Finishing",machineTagFlagship:"Flagship",machineTagIndustryLeader:"Industry Leader",machineTagAlcoholDamped:"Alcohol-Damped",machineTagAutomated:"Automated",machineTagHighSpeed:"High-Speed",machineTagUltraPrecise:"Ultra Precise",machineHeidelbergSpeedmasterDesc:"The Heidelberg Speedmaster — the world's most trusted multicolour press. Engineered for peak performance with cutting-edge Intellistart technology, delivering unmatched print quality at production speeds that set the industry standard.",machineHeidelbergPrintingDesc:"State-of-the-art Heidelberg — a benchmark in precision engineering. From single-colour to complex multi-colour projects, automated controls, fast plate changes, and flawless registration deliver superior output trusted by professionals worldwide.",machineAkiyamaDesc:"Akiyama alcohol-damped 4-colour press — size 19×26 inches. Alcohol damping system provides superior ink-water balance for exceptional dot gain control and vivid, consistent colour across the entire sheet.",machineAutoplateDesc:"Fully automated plate-loading system that eliminates manual handling errors. Reduces makeready time significantly, ensuring consistent plate registration and faster job turnaround for demanding print environments.",machineSORDZDesc:"Heidelberg SORDZ 2-colour offset printing machine. Sheet size 25×36 inches — perfectly balanced for medium-format commercial work. Renowned for its robust build and consistent colour reproduction across long runs.",machineThermalLaminationDesc:"Industrial-grade thermal lamination delivering flawless gloss and matte finishes using Fevicol-based adhesives. Handles high volumes with precision heat control for bubble-free, scratch-resistant results every time.",machinePaperCutterDesc:"Automatic paper cutter delivering precise and flawless cuts at incredible speed. Ideal for high-volume printing and paper processing, this machine ensures efficiency and accuracy in every cut — streamlining workflow and maximising productivity.",machineSpec4Colour:"Up to 4-colour",machineSpecMultiColour:"Multi-colour output",machineSpec19x26:"Size: 19×26 in",machineSpecAutoPlate:"Auto plate loading",machineSpec25x36:"Size: 25×36 in",machineSpecAccuracy:"±0.01mm accuracy",machineSpecHighVolume:"High-volume ready",woTitle:"WEB OFFSET PRINTING",woTagline:"SPEED. SCALE. PRECISION.",woHeroTitle:"Built for High-Volume Excellence",woHeroDesc:"Web offset printing is designed for non-stop production, and at BK Offset Printing, speed is only the beginning. Our advanced multi-colour rotary presses deliver consistent quality at exceptional speeds, making them ideal for magazines, catalogues, brochures, inserts, and promotional publications produced in large volumes.",woHeroDesc2:"Every rotation combines power, stability, and accuracy, ensuring sharp images and uniform colour reproduction—even across millions of impressions.",woPerfTitle:"Performance That Goes Beyond Printing",woPerfDesc:"Our web offset systems are equipped with integrated inline finishing, allowing multiple processes to happen in a single run. This means faster turnaround times and flawless results.",woPerfList:["UV & protective varnishing","Punching and perforation (portrait & landscape)","Folding (standard to creative formats)","Gluing and binding preparation","Custom finishing solutions for special publications"],woPerfFoot:"This seamless workflow helps us deliver ready-to-use printed products with unmatched efficiency.",woEnvTitle:"High Speed. Lower Environmental Impact.",woEnvDesc:"Powerful machines don't have to waste resources. Our web offset operations are engineered to be energy-efficient and environmentally responsible.",woEnvList:["Energy consumption","Material waste","Production downtime"],woEnvFoot:"This allows us to combine high productivity with sustainable practices, even during 24/7 production cycles.",woSusTitle:"Responsible Printing for a Sustainable Future",woSusDesc:"Environmental care is built into every stage of our process.",woSusList:["Low-energy drying technology to minimize fuel usage","Alcohol-free printing processes","Avoidance of harmful volatile solvents","Use of eco-friendly inks and consumables","Strict paper waste segregation and recycling"],woSusFoot:"All paper waste is carefully collected and returned to manufacturers for reuse—supporting a closed-loop recycling system.",visit:"Visit Our Press",locationEyebrow:"Find Us",locationTitle:"Visit Our",locationTitleEm:"Press",locationDesc:"Come see our machines in person. We welcome publishers, authors, and businesses for a live demonstration.",locationAddressLabel:"Address",locationAddress:"Street No. 2, Zulfe Bengal, Dilshad Garden, Delhi – 110095",locationCopyAddress:"Copy address",locationCopied:"Copied!",locationHoursLabel:"Working Hours",locationHoursMonSun:"Monday – Sunday",locationHoursTime:"10:00 AM – 6:00 PM",locationTuesday:"Tuesday",locationClosed:"Closed",locationGetDirections:"Get Directions",locationOpenInMaps:"Open in Google Maps",signIn:"Sign In",signInTitle:"Welcome Back",register:"Register",registerTitle:"Create Account",emailLabel:"Email",passwordLabel:"Password",firstNameLabel:"First Name",lastNameLabel:"Last Name",continueWithGoogle:"Continue with Google",processing:"Processing...",forgotPassword:"Forgot Password?",noAccount:"Don't have an account?",haveAccount:"Already have an account?",footerTagline:"Trusted by publishers across Delhi since 1995 - Dilshad Garden",copyright:"© BK Offset Printing. All rights reserved."},hi:{heroTitle:"क्लासिक प्रिंटिंग।",heroTitle2:"आधुनिक गुणवत्ता।",heroSub:"1995 से दिल्ली में भरोसेमंद प्रिंटिंग सेवाएँ",yearsActive:"30+ वर्ष सक्रिय",booksPrinted:"50K+ पुस्तकें मुद्रित",happyClients:"500+ संतुष्ट ग्राहक",heroTrust:"1995 से दिल्ली के प्रकाशकों द्वारा विश्वसनीय - दिलशाद गार्डन",productsEyebrow:"हमारी पेशकश",productsTitle:"हमारी प्रिंटिंग सेवाएँ",productsIntro:"उच्च गुणवत्ता वाली बल्क बुक प्रिंटिंग और पेशेवर लेमिनेशन सेवाओं में विशेषज्ञता। हम प्रीमियम फेविकॉल-आधारित चिपकने वाले पदार्थों का उपयोग करते हैं, जो दिल्ली भर के प्रकाशकों, लेखकों और व्यवसायों की सेवा करते हैं।",productBulkTitle:"बल्क बुक प्रिंटिंग",productBulkDesc:"प्रकाशकों, लेखकों और संस्थानों के लिए उच्च-मात्रा मुद्रण। हजारों प्रतियों में लगातार गुणवत्ता — पाठ्यपुस्तकें, उपन्यास, कैटलॉग और मैनुअल।",productThermalTitle:"थर्मल ग्लॉस लेमिनेशन",productThermalDesc:"फेविकॉल-आधारित चिपकने वाले पदार्थों का उपयोग कर प्रीमियम ग्लॉस लेमिनेशन। एक चमकदार, सुरक्षात्मक फिनिश जो रंगों को जीवंत बनाती है और दैनिक उपयोग को सहन करती है।",productMatteTitle:"मैट लेमिनेशन",productMatteDesc:"फेविकॉल-आधारित चिपकने वाले पदार्थों का उपयोग कर परिष्कृत, गैर-चिंतनशील फिनिश। प्रीमियम कवर के लिए आदर्श जो दिखने में उतने ही अच्छे लगते हैं जितना वे महसूस होते हैं।",productSoftTouchTitle:"सॉफ्ट-टच लेमिनेशन",productSoftTouchDesc:"मखमली, शानदार बनावट जो हर मुद्रित टुकड़े को एक अनुभव में बदल देती है। पुस्तक कवर, प्रीमियम ब्रोशर और कलेक्टर के संस्करणों के लिए आदर्श।",productTitlePrintingTitle:"टाइटल प्रिंटिंग",productTitlePrintingDesc:"पुस्तक रीढ़, विशेष-संस्करण कवर और ब्रांडेड कोलेटरल के लिए कस्टम टाइटल कार्य। हर विवरण आपके शीर्षक को अविस्मरणीय बनाने के लिए तैयार किया गया है।",galleryEyebrow:"हमारी मशीनरी",galleryTitle:"के लिए निर्मित",galleryTitleEm:"परिशुद्धता",galleryDesc:"विश्व स्तरीय हीडलबर्ग और अकियामा उपकरण — दोषरहित आउटपुट, अधिकतम थ्रूपुट और गुणवत्ता पर शून्य समझौता के लिए इंजीनियर किए गए।",galleryYouTubeText:"इन मशीनों को क्रियाशील देखना चाहते हैं? हमारे पर लाइव डेमो देखें",machineCategoryOffset:"ऑफसेट प्रिंटिंग",machineCategoryPlate:"प्लेट मेकिंग",machineCategoryLamination:"लेमिनेशन",machineCategoryFinishing:"फिनिशिंग",machineTagFlagship:"फ्लैगशिप",machineTagIndustryLeader:"उद्योग नेता",machineTagAlcoholDamped:"अल्कोहल-डैम्प्ड",machineTagAutomated:"स्वचालित",machineTagHighSpeed:"हाई-स्पीड",machineTagUltraPrecise:"अल्ट्रा प्रिसाइज",machineHeidelbergSpeedmasterDesc:"हीडलबर्ग स्पीडमास्टर — दुनिया का सबसे भरोसेमंद मल्टीकलर प्रेस। अत्याधुनिक इंटेलिस्टार्ट तकनीक के साथ पीक परफॉर्मेंस के लिए इंजीनियर किया गया, अद्वितीय प्रिंट गुणवत्ता प्रदान करता है।",machineHeidelbergPrintingDesc:"अत्याधुनिक हीडलबर्ग — सटीक इंजीनियरिंग में एक बेंचमार्क। सिंगल-कलर से लेकर जटिल मल्टी-कलर प्रोजेक्ट्स तक, स्वचालित नियंत्रण, तेज़ प्लेट परिवर्तन, और दोषरहित रजिस्ट्रेशन बेहतर आउटपुट प्रदान करते हैं।",machineAkiyamaDesc:"अकियामा अल्कोहल-डैम्प्ड 4-कलर प्रेस — साइज़ 19×26 इंच। अल्कोहल डैम्पिंग सिस्टम बेहतर इंक-वॉटर बैलेंस प्रदान करता है, पूरी शीट पर जीवंत, सुसंगत रंग देता है।",machineAutoplateDesc:"पूरी तरह से स्वचालित प्लेट-लोडिंग सिस्टम जो मैनुअल हैंडलिंग त्रुटियों को समाप्त करता है। मेकरेडी समय को काफी कम करता है, लगातार प्लेट रजिस्ट्रेशन सुनिश्चित करता है।",machineSORDZDesc:"हीडलबर्ग SORDZ 2-कलर ऑफसेट प्रिंटिंग मशीन। शीट साइज़ 25×36 इंच — मध्यम-प्रारूप व्यावसायिक कार्य के लिए पूरी तरह से संतुलित। अपने मजबूत निर्माण और लंबे रनों में लगातार रंग प्रजनन के लिए प्रसिद्ध।",machineThermalLaminationDesc:"औद्योगिक-ग्रेड थर्मल लेमिनेशन, फेविकॉल-आधारित चिपकने वाले पदार्थों का उपयोग करके दोषरहित ग्लॉस और मैट फिनिश प्रदान करता है। प्रिसिजन हीट कंट्रोल के साथ उच्च मात्रा को संभालता है।",machinePaperCutterDesc:"स्वचालित पेपर कटर अविश्वसनीय गति पर सटीक और दोषरहित कटौती प्रदान करता है। उच्च-मात्रा प्रिंटिंग और पेपर प्रोसेसिंग के लिए आदर्श।",machineSpec4Colour:"4-कलर तक",machineSpecMultiColour:"मल्टी-कलर आउटपुट",machineSpec19x26:"साइज़: 19×26 इंच",machineSpecAutoPlate:"ऑटो प्लेट लोडिंग",machineSpec25x36:"साइज़: 25×36 इंच",machineSpecAccuracy:"±0.01mm सटीकता",machineSpecHighVolume:"हाई-वॉल्यूम रेडी",woTitle:"वेब ऑफ़्सेट प्रिंटिंग",woTagline:"गति। पैमाना। सटीकता।",woHeroTitle:"हाई-वॉल्यूम एक्सलेंस के लिए बनाया गया",woHeroDesc:"वेब ऑफ़्सेट प्रिंटिंग बिना रुके प्रोडक्शन के लिए डिज़ाइन किया गया है। हमारे उन्नत मल्टी-कलर रोटरी प्रेस असाधारण गति पर लगातार गुणवत्ता प्रदान करते हैं, जो उन्हें पत्रिकाओं, कैटलॉग, ब्रोशर और प्रचार प्रकाशनों के लिए आदर्श बनाता है।",woHeroDesc2:"हर रोटेशन पॉवर, स्टेबिलिटी और एक्यूरेसी को जोड़ता है, लाखों इंप्रेशन में भी शार्प इमेज और यूनिफॉर्म कलर रिप्रोडक्शन सुनिश्चित करता है।",woPerfTitle:"प्रिंटिंग से आगे की पर्फॉर्मेंस",woPerfDesc:"हमारे वेब ऑफ़्सेट सिस्टम इंटीग्रेटेड इनलाइन फिनिशिंग से लैस हैं, जो एक ही रन में कई प्रक्रियाओं को होने देते हैं। इसका मतलब है तेज़ टर्नअराउंड समय और दोषरहित परिणाम।",woPerfList:["UV और प्रोटेक्टिव वार्निशिंग","पंचिंग और पर्फोरेशन (पोर्ट्रेट और लैंडस्केप)","फोल्डिंग (स्टैंडर्ड से क्रिएटिव फॉर्मेट)","ग्लुइंग और बाइंडिंग प्रेपरेशन","स्पेशल पब्लिकेशन के लिए कस्टम फिनिशिंग सॉल्यूशंस"],woPerfFoot:"यह सीमलेस वर्कफ़लो हमें रेडी-टू-यूज़ प्रिंटेड प्रोडक्ट्स अद्वितीय दक्षता के साथ डिलीवर करने में मदद करता है।",woEnvTitle:"हाई स्पीड। कम पर्यावरणीय प्रभाव।",woEnvDesc:"हमारे वेब ऑफ़्सेट ऑपरेशन ऊर्जा-कुशल और पर्यावरण के प्रति जिम्मेदार होने के लिए इंजीनियर किए गए हैं।",woEnvList:["ऊर्जा खपत","सामग्री अपशिष्ट","प्रोडक्शन डाउनटाइम"],woEnvFoot:"यह हमें 24/7 प्रोडक्शन साइकिल के दौरान भी उच्च उत्पादकता को सस्टेनेबल प्रैक्टिसेज़ के साथ संयोजित करने की अनुमति देता है।",woSusTitle:"सस्टेनेबल फ्यूचर के लिए जिम्मेदार प्रिंटिंग",woSusDesc:"पर्यावरण देखभाल हमारी प्रक्रिया के हर चरण में बनाई गई है।",woSusList:["लो-एनर्जी ड्राइंग टेक्नोलॉजी","अल्कोहल-फ्री प्रिंटिंग प्रोसेस","हानिकारक वाष्पशील सॉल्वैंट्स से बचाव","इको-फ्रेंडली इंक्स और उपभोग्य सामग्रियों का उपयोग","सख्त पेपर वेस्ट सेग्रीगेशन और रिसाइक्लिंग"],woSusFoot:"सभी पेपर वेस्ट को सावधानीपूर्वक एकत्र किया जाता है और पुन: उपयोग के लिए निर्माताओं को लौटाया जाता है — एक क्लोज्ड-लूप रिसाइक्लिंग सिस्टम का समर्थन करता है।",visit:"हमारा प्रेस देखें",locationEyebrow:"हमें ढूंढें",locationTitle:"हमारा",locationTitleEm:"प्रेस",locationDesc:"हमारी मशीनों को व्यक्तिगत रूप से देखने आएं। हम प्रकाशकों, लेखकों और व्यवसायों का लाइव प्रदर्शन के लिए स्वागत करते हैं।",locationAddressLabel:"पता",locationAddress:"स्ट्रीट नंबर 2, जुल्फे बंगाल, दिलशाद गार्डन, दिल्ली – 110095",locationCopyAddress:"पता कॉपी करें",locationCopied:"कॉपी हो गया!",locationHoursLabel:"कार्य के घंटे",locationHoursMonSun:"सोमवार – रविवार",locationHoursTime:"सुबह 10:00 – शाम 6:00",locationTuesday:"मंगलवार",locationClosed:"बंद",locationGetDirections:"दिशा-निर्देश प्राप्त करें",locationOpenInMaps:"गूगल मैप्स में खोलें",signIn:"साइन इन",signInTitle:"वापस स्वागत है",register:"रजिस्टर",registerTitle:"खाता बनाएँ",emailLabel:"ईमेल",passwordLabel:"पासवर्ड",firstNameLabel:"पहला नाम",lastNameLabel:"अंतिम नाम",continueWithGoogle:"गूगल के साथ जारी रखें",processing:"प्रोसेसिंग...",forgotPassword:"पासवर्ड भूल गए?",noAccount:"खाता नहीं है?",haveAccount:"पहले से ही खाता है?",footerTagline:"1995 से दिल्ली के प्रकाशकों द्वारा विश्वसनीय - दिलशाद गार्डन",copyright:"© बीके ऑफसेट प्रिंटिंग। सर्वाधिकार सुरक्षित।"}},E0="+91-9560959039",T0="https://wa.me/919560959039",I0=50,pu={THEME:"bk_theme",USER:"bk_user",LANG:"bk_lang"},C0=["https://imgs.search.brave.com/d-BxVJB0AVwv7mytORTSGUxHpqMjhHtXeMTPvJqZIPA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/eW91dHViZS5jb20v/dmkvODB6X0hUbVRs/ZDQvaHFkZWZhdWx0/LmpwZw","https://imgs.search.brave.com/HXs3SA9y5tqE3-KGyiE53BmUGqKZaxqNbzgADA568tU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/eW91dHViZS5jb20v/dmkvQy0xaEdEd21a/WEkvaHFkZWZhdWx0/LmpwZw","https://imgs.search.brave.com/8sgKubUmPoPQfFSODo5PPaOi7AUVqGw_TIS14-PxwQE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9wcmVz/cy1wcmludGluZy1w/cmludHNob3Atb2Zm/c2V0LTE2OTMxMzI2/LmpwZw","https://imgs.search.brave.com/prJNhXtQjZFHiNNQsg6lEPcAheXrDNlY1szXvRBQlCo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTg1/Mjc3MDY5L3Bob3Rv/L29mZnNldC1wcmlu/dGluZy1tYWNoaW5l/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz10aHF3cWl2ellU/SEtCdzBxYzgtODBM/UFVvX1AxVHlaMExq/bHQ0RDlhdm0wPQ","https://imgs.search.brave.com/GT4miD1XayG3oiBz9XsPpJ26JFAv4R1pj4j1e_8rwt0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE5/ODg1OTczL3Bob3Rv/L3BvbHlncmFwaGlj/LXByb2Nlc3MuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPVp0/NVE3VnpGREJwX1Nj/Z0d5ZVRRTHprRFNO/MUJ1aS1xaV96eW9N/dzl2TEk9","https://imgs.search.brave.com/W3t3GjUQl9eULJkzTE2O694CXodPY8Jn1OZCXSBBGNU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE5/ODI1NjM0My9waG90/by9wYXBlci10cmlt/bWluZy1vbi1hLWd1/aWxsb3RpbmUtcHJp/bnRpbmctaG91c2Ut/Y3V0dGVyLWZvci1j/dXR0aW5nLXBhcGVy/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz0tZlBQRmZpLXBH/Nnp1Q2lyTUxwcUxD/UkdFQV91NE1sNTZu/UXUtTVlRcTRBPQ","https://imgs.search.brave.com/3zVRqhp8m_8bPZQUGAFEZ8pl7YQlHdzqJmMLi0g1SzI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bWFjaGluZXNlZWtl/ci5jb20vZGF0YS9s/aXN0aW5nL2ltZy92/Z2EvbXMvNTEvNTYv/MjEwNzgyMTItMDgu/anBnP3Y9MTc2OTUw/NDA5NA","https://imgs.search.brave.com/jIEpK8ZUTWenoD4ppVVn1tb3GOdOfbNmJ50jcNh10QQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTc0/OTE0OTM4L3Bob3Rv/L2hlYXZ5LWR1dHkt/cGFwZXItZ3VpbGxv/dGluZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9cV82YWEt/djlqQkFYWGdKekNx/bGRrbWkzaFZUSW5m/X1l6MUd2R01EN0E3/WT0"];function P0(){const[t,e]=P.useState(()=>sessionStorage.getItem(pu.THEME)||"dark"),n=()=>{const r=t==="light"?"dark":"light";e(r),sessionStorage.setItem(pu.THEME,r)};return P.useEffect(()=>{document.documentElement.setAttribute("data-theme",t)},[t]),{theme:t,toggleTheme:n,isDark:t==="dark"}}const mp=P.createContext();function A0({children:t}){const e=P0();return c.jsx(mp.Provider,{value:e,children:t})}function hu(){return P.useContext(mp)}/**
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
 */const yp=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},N0=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return e.join("")},vp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],s=i+1<t.length,a=s?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,d=o>>2,p=(o&3)<<4|a>>4;let g=(a&15)<<2|u>>6,y=u&63;l||(y=64,s||(g=64)),r.push(n[d],n[p],n[g],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(yp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):N0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||a==null||u==null||p==null)throw new R0;const g=o<<2|a>>4;if(r.push(g),u!==64){const y=a<<4&240|u>>2;if(r.push(y),p!==64){const v=u<<6&192|p;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class R0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const O0=function(t){const e=yp(t);return vp.encodeByteArray(e,!0)},xp=function(t){return O0(t).replace(/\./g,"")},wp=function(t){try{return vp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */const j0=()=>L0().__FIREBASE_DEFAULTS__,M0=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},D0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&wp(t[1]);return e&&JSON.parse(e)},Ml=()=>{try{return j0()||M0()||D0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},z0=t=>{var e,n;return(n=(e=Ml())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},bp=()=>{var t;return(t=Ml())===null||t===void 0?void 0:t.config},Sp=t=>{var e;return(e=Ml())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class F0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function de(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function U0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(de())}function B0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function H0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function W0(){const t=de();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function $0(){try{return typeof indexedDB=="object"}catch{return!1}}function V0(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
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
 */const G0="FirebaseError";class Wt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=G0,Object.setPrototypeOf(this,Wt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ei.prototype.create)}}class ei{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],s=o?K0(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new Wt(i,a,r)}}function K0(t,e){return t.replace(Y0,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Y0=/\{\$([^}]+)}/g;function q0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function vo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],s=e[i];if(gu(o)&&gu(s)){if(!vo(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function gu(t){return t!==null&&typeof t=="object"}/**
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
 */function ti(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function gr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function mr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Q0(t,e){const n=new X0(t,e);return n.subscribe.bind(n)}class X0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Z0(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Is),i.error===void 0&&(i.error=Is),i.complete===void 0&&(i.complete=Is);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Z0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Is(){}/**
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
 */function je(t){return t&&t._delegate?t._delegate:t}class Gn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class J0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new F0;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ty(e))try{this.getOrInitializeService({instanceIdentifier:Yt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=Yt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yt){return this.instances.has(e)}getOptions(e=Yt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&e(s,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ey(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Yt){return this.component?this.component.multipleInstances?e:Yt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ey(t){return t===Yt?void 0:t}function ty(t){return t.instantiationMode==="EAGER"}/**
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
 */class ny{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new J0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var U;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(U||(U={}));const ry={debug:U.DEBUG,verbose:U.VERBOSE,info:U.INFO,warn:U.WARN,error:U.ERROR,silent:U.SILENT},iy=U.INFO,oy={[U.DEBUG]:"log",[U.VERBOSE]:"log",[U.INFO]:"info",[U.WARN]:"warn",[U.ERROR]:"error"},sy=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=oy[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class kp{constructor(e){this.name=e,this._logLevel=iy,this._logHandler=sy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in U))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ry[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,U.DEBUG,...e),this._logHandler(this,U.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,U.VERBOSE,...e),this._logHandler(this,U.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,U.INFO,...e),this._logHandler(this,U.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,U.WARN,...e),this._logHandler(this,U.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,U.ERROR,...e),this._logHandler(this,U.ERROR,...e)}}const ay=(t,e)=>e.some(n=>t instanceof n);let mu,yu;function ly(){return mu||(mu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function cy(){return yu||(yu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _p=new WeakMap,Ra=new WeakMap,Ep=new WeakMap,Cs=new WeakMap,Dl=new WeakMap;function uy(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{n(Mt(t.result)),i()},s=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&_p.set(n,t)}).catch(()=>{}),Dl.set(e,t),e}function dy(t){if(Ra.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});Ra.set(t,e)}let Oa={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ra.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ep.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function fy(t){Oa=t(Oa)}function py(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ps(this),e,...n);return Ep.set(r,e.sort?e.sort():[e]),Mt(r)}:cy().includes(t)?function(...e){return t.apply(Ps(this),e),Mt(_p.get(this))}:function(...e){return Mt(t.apply(Ps(this),e))}}function hy(t){return typeof t=="function"?py(t):(t instanceof IDBTransaction&&dy(t),ay(t,ly())?new Proxy(t,Oa):t)}function Mt(t){if(t instanceof IDBRequest)return uy(t);if(Cs.has(t))return Cs.get(t);const e=hy(t);return e!==t&&(Cs.set(t,e),Dl.set(e,t)),e}const Ps=t=>Dl.get(t);function gy(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),a=Mt(s);return r&&s.addEventListener("upgradeneeded",l=>{r(Mt(s.result),l.oldVersion,l.newVersion,Mt(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const my=["get","getKey","getAll","getAllKeys","count"],yy=["put","add","delete","clear"],As=new Map;function vu(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(As.get(e))return As.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=yy.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||my.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return As.set(e,o),o}fy(t=>({...t,get:(e,n,r)=>vu(e,n)||t.get(e,n,r),has:(e,n)=>!!vu(e,n)||t.has(e,n)}));/**
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
 */class vy{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(xy(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function xy(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const La="@firebase/app",xu="0.9.27";/**
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
 */const xo=new Map,Ma=new Map;function Gy(t,e){try{t.container.addComponent(e)}catch(n){ln.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Vr(t){const e=t.name;if(Ma.has(e))return ln.debug(`There were multiple attempts to register component ${e}.`),!1;Ma.set(e,t);for(const n of xo.values())Gy(n,t);return!0}function Tp(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */class Yy{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Gn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Dt.create("app-deleted",{appName:this._name})}}/**
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
 */const ni=$y;function Ip(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ja,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Dt.create("bad-app-name",{appName:String(i)});if(n||(n=bp()),!n)throw Dt.create("no-options");const o=xo.get(i);if(o){if(vo(n,o.options)&&vo(r,o.config))return o;throw Dt.create("duplicate-app",{appName:i})}const s=new ny(i);for(const l of Ma.values())s.addComponent(l);const a=new Yy(n,r,s);return xo.set(i,a),a}function qy(t=ja){const e=xo.get(t);if(!e&&t===ja&&bp())return Ip();if(!e)throw Dt.create("no-app",{appName:t});return e}function jn(t,e,n){var r;let i=(r=Vy[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${e}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ln.warn(a.join(" "));return}Vr(new Gn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Qy="firebase-heartbeat-database",Xy=1,Gr="firebase-heartbeat-store";let Ns=null;function Cp(){return Ns||(Ns=gy(Qy,Xy,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Gr)}catch(n){console.warn(n)}}}}).catch(t=>{throw Dt.create("idb-open",{originalErrorMessage:t.message})})),Ns}async function Zy(t){try{const n=(await Cp()).transaction(Gr),r=await n.objectStore(Gr).get(Pp(t));return await n.done,r}catch(e){if(e instanceof Wt)ln.warn(e.message);else{const n=Dt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ln.warn(n.message)}}}async function wu(t,e){try{const r=(await Cp()).transaction(Gr,"readwrite");await r.objectStore(Gr).put(e,Pp(t)),await r.done}catch(n){if(n instanceof Wt)ln.warn(n.message);else{const r=Dt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ln.warn(r.message)}}}function Pp(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Jy=1024,e1=30*24*60*60*1e3;class t1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new r1(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=bu();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const a=new Date(s.date).valueOf();return Date.now()-a<=e1}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=bu(),{heartbeatsToSend:r,unsentEntries:i}=n1(this._heartbeatsCache.heartbeats),o=xp(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function bu(){return new Date().toISOString().substring(0,10)}function n1(t,e=Jy){const n=[];let r=t.slice();for(const i of t){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),Su(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Su(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class r1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $0()?V0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Zy(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return wu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return wu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Su(t){return xp(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function i1(t){Vr(new Gn("platform-logger",e=>new vy(e),"PRIVATE")),Vr(new Gn("heartbeat",e=>new t1(e),"PRIVATE")),jn(La,xu,t),jn(La,xu,"esm2017"),jn("fire-js","")}i1("");var o1="firebase",s1="10.8.0";/**
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
 */jn(o1,s1,"app");function zl(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Ap(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const a1=Ap,Np=new ei("auth","Firebase",Ap());/**
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
 */const wo=new kp("@firebase/auth");function l1(t,...e){wo.logLevel<=U.WARN&&wo.warn(`Auth (${ni}): ${t}`,...e)}function Wi(t,...e){wo.logLevel<=U.ERROR&&wo.error(`Auth (${ni}): ${t}`,...e)}/**
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
 */function Le(t,...e){throw Fl(t,...e)}function Xe(t,...e){return Fl(t,...e)}function Rp(t,e,n){const r=Object.assign(Object.assign({},a1()),{[e]:n});return new ei("auth","Firebase",r).create(e,{appName:t.name})}function c1(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Le(t,"argument-error"),Rp(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Fl(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Np.create(t,...e)}function A(t,e,...n){if(!t)throw Fl(e,...n)}function st(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Wi(e),new Error(e)}function ht(t,e){t||st(e)}/**
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
 */function bo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Op(){return ku()==="http:"||ku()==="https:"}function ku(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function u1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Op()||B0()||"connection"in navigator)?navigator.onLine:!0}function d1(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ri{constructor(e,n){this.shortDelay=e,this.longDelay=n,ht(n>e,"Short delay should be less than long delay!"),this.isMobile=U0()||H0()}get(){return u1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ul(t,e){ht(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Lp{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;st("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;st("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;st("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const p1=new ri(3e4,6e4);function Je(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function $e(t,e,n,r,i={}){return jp(t,i,async()=>{let o={},s={};r&&(e==="GET"?s=r:o={body:JSON.stringify(r)});const a=ti(Object.assign({key:t.config.apiKey},s)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Lp.fetch()(Mp(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},o))})}async function jp(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},f1),e);try{const i=new g1(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw Ci(t,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ci(t,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw Ci(t,"email-already-in-use",s);if(l==="USER_DISABLED")throw Ci(t,"user-disabled",s);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Rp(t,d,u);Le(t,d)}}catch(i){if(i instanceof Wt)throw i;Le(t,"network-request-failed",{message:String(i)})}}async function ii(t,e,n,r,i={}){const o=await $e(t,e,n,r,i);return"mfaPendingCredential"in o&&Le(t,"multi-factor-auth-required",{_serverResponse:o}),o}function Mp(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Ul(t.config,i):`${t.config.apiScheme}://${i}`}function h1(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class g1{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Xe(this.auth,"network-request-failed")),p1.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ci(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Xe(t,e,r);return i.customData._tokenResponse=n,i}function _u(t){return t!==void 0&&t.enterprise!==void 0}class m1{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return h1(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function y1(t,e){return $e(t,"GET","/v2/recaptchaConfig",Je(t,e))}/**
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
 */async function v1(t,e){return $e(t,"POST","/v1/accounts:delete",e)}async function x1(t,e){return $e(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Tr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function w1(t,e=!1){const n=je(t),r=await n.getIdToken(e),i=Bl(r);A(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Tr(Rs(i.auth_time)),issuedAtTime:Tr(Rs(i.iat)),expirationTime:Tr(Rs(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Rs(t){return Number(t)*1e3}function Bl(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Wi("JWT malformed, contained fewer than 3 sections"),null;try{const i=wp(n);return i?JSON.parse(i):(Wi("Failed to decode base64 JWT payload"),null)}catch(i){return Wi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function b1(t){const e=Bl(t);return A(e,"internal-error"),A(typeof e.exp<"u","internal-error"),A(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Kn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Wt&&S1(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function S1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class k1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Dp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Tr(this.lastLoginAt),this.creationTime=Tr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function So(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Kn(t,x1(n,{idToken:r}));A(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?T1(o.providerUserInfo):[],a=E1(t.providerData,s),l=t.isAnonymous,u=!(t.email&&o.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,p={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Dp(o.createdAt,o.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function _1(t){const e=je(t);await So(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function E1(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function T1(t){return t.map(e=>{var{providerId:n}=e,r=zl(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function I1(t,e){const n=await jp(t,{},async()=>{const r=ti({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=Mp(t,i,"/v1/token",`key=${o}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Lp.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function C1(t,e){return $e(t,"POST","/v2/accounts:revokeToken",Je(t,e))}/**
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
 */class Kr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){A(e.idToken,"internal-error"),A(typeof e.idToken<"u","internal-error"),A(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):b1(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return A(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await I1(e,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new Kr;return r&&(A(typeof r=="string","internal-error",{appName:e}),s.refreshToken=r),i&&(A(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),o&&(A(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Kr,this.toJSON())}_performRefresh(){return st("not implemented")}}/**
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
 */function vt(t,e){A(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class tn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,o=zl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new k1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Dp(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await Kn(this,this.stsTokenManager.getToken(this.auth,e));return A(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return w1(this,e)}reload(){return _1(this)}_assign(e){this!==e&&(A(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new tn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){A(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await So(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Kn(this,v1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,o,s,a,l,u,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,y=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,v=(s=n.photoURL)!==null&&s!==void 0?s:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,C=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,h=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:m,emailVerified:x,isAnonymous:S,providerData:_,stsTokenManager:T}=n;A(m&&T,e,"internal-error");const k=Kr.fromJSON(this.name,T);A(typeof m=="string",e,"internal-error"),vt(p,e.name),vt(g,e.name),A(typeof x=="boolean",e,"internal-error"),A(typeof S=="boolean",e,"internal-error"),vt(y,e.name),vt(v,e.name),vt(w,e.name),vt(C,e.name),vt(h,e.name),vt(f,e.name);const M=new tn({uid:m,auth:e,email:g,emailVerified:x,displayName:p,isAnonymous:S,photoURL:v,phoneNumber:y,tenantId:w,stsTokenManager:k,createdAt:h,lastLoginAt:f});return _&&Array.isArray(_)&&(M.providerData=_.map(O=>Object.assign({},O))),C&&(M._redirectEventId=C),M}static async _fromIdTokenResponse(e,n,r=!1){const i=new Kr;i.updateFromServerResponse(n);const o=new tn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await So(o),o}}/**
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
 */const Eu=new Map;function at(t){ht(t instanceof Function,"Expected a class definition");let e=Eu.get(t);return e?(ht(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Eu.set(t,e),e)}/**
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
 */class zp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}zp.type="NONE";const Tu=zp;/**
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
 */function $i(t,e,n){return`firebase:${t}:${e}:${n}`}class Mn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=$i(this.userKey,i.apiKey,o),this.fullPersistenceKey=$i("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?tn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Mn(at(Tu),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||at(Tu);const s=$i(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const d=await u._get(s);if(d){const p=tn._fromJSON(e,d);u!==o&&(a=p),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new Mn(o,e,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new Mn(o,e,r))}}/**
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
 */function Iu(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Bp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Fp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Wp(e))return"Blackberry";if($p(e))return"Webos";if(Hl(e))return"Safari";if((e.includes("chrome/")||Up(e))&&!e.includes("edge/"))return"Chrome";if(Hp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Fp(t=de()){return/firefox\//i.test(t)}function Hl(t=de()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Up(t=de()){return/crios\//i.test(t)}function Bp(t=de()){return/iemobile/i.test(t)}function Hp(t=de()){return/android/i.test(t)}function Wp(t=de()){return/blackberry/i.test(t)}function $p(t=de()){return/webos/i.test(t)}function $o(t=de()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function P1(t=de()){var e;return $o(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function A1(){return W0()&&document.documentMode===10}function Vp(t=de()){return $o(t)||Hp(t)||$p(t)||Wp(t)||/windows phone/i.test(t)||Bp(t)}function N1(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Gp(t,e=[]){let n;switch(t){case"Browser":n=Iu(de());break;case"Worker":n=`${Iu(de())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ni}/${r}`}/**
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
 */class R1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((s,a)=>{try{const l=e(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function O1(t,e={}){return $e(t,"GET","/v2/passwordPolicy",Je(t,e))}/**
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
 */const L1=6;class j1{constructor(e){var n,r,i,o;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=s.minPasswordLength)!==null&&n!==void 0?n:L1,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,o,s,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsUppercaseLetter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(s=l.containsNumericCharacter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
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
 */class M1{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Cu(this),this.idTokenSubscription=new Cu(this),this.beforeStateQueue=new R1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Np,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=at(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Mn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return A(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await So(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=d1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?je(e):null;return n&&A(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&A(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(at(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await O1(this),n=new j1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ei("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await C1(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&at(e)||this._popupRedirectResolver;A(n,this,"argument-error"),this.redirectPersistenceManager=await Mn.create(this,[at(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(A(a,this,"internal-error"),a.then(()=>{s||o(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{s=!0,l()}}else{const l=e.addObserver(n);return()=>{s=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return A(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Gp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&l1(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function mt(t){return je(t)}class Cu{constructor(e){this.auth=e,this.observer=null,this.addObserver=Q0(n=>this.observer=n)}get next(){return A(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Vo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function D1(t){Vo=t}function Kp(t){return Vo.loadJS(t)}function z1(){return Vo.recaptchaEnterpriseScript}function F1(){return Vo.gapiScript}function U1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const B1="recaptcha-enterprise",H1="NO_RECAPTCHA";class W1{constructor(e){this.type=B1,this.auth=mt(e)}async verify(e="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,a)=>{y1(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new m1(l);return o.tenantId==null?o._agentRecaptchaConfig=u:o._tenantRecaptchaConfigs[o.tenantId]=u,s(u.siteKey)}}).catch(l=>{a(l)})})}function i(o,s,a){const l=window.grecaptcha;_u(l)?l.enterprise.ready(()=>{l.enterprise.execute(o,{action:e}).then(u=>{s(u)}).catch(()=>{s(H1)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{r(this.auth).then(a=>{if(!n&&_u(window.grecaptcha))i(a,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}let l=z1();l.length!==0&&(l+=a),Kp(l).then(()=>{i(a,o,s)}).catch(u=>{s(u)})}}).catch(a=>{s(a)})})}}async function Pu(t,e,n,r=!1){const i=new W1(t);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const s=Object.assign({},e);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function ko(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Pu(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const s=await Pu(t,e,n,n==="getOobCode");return r(t,s)}else return Promise.reject(o)})}/**
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
 */function $1(t,e){const n=Tp(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(vo(o,e??{}))return i;Le(i,"already-initialized")}return n.initialize({options:e})}function V1(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(at);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function G1(t,e,n){const r=mt(t);A(r._canInitEmulator,r,"emulator-config-failed"),A(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=Yp(e),{host:s,port:a}=K1(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Y1()}function Yp(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function K1(t){const e=Yp(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:Au(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:Au(s)}}}function Au(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Y1(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Wl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return st("not implemented")}_getIdTokenResponse(e){return st("not implemented")}_linkToIdToken(e,n){return st("not implemented")}_getReauthenticationResolver(e){return st("not implemented")}}async function q1(t,e){return $e(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Q1(t,e){return ii(t,"POST","/v1/accounts:signInWithPassword",Je(t,e))}async function qp(t,e){return $e(t,"POST","/v1/accounts:sendOobCode",Je(t,e))}async function X1(t,e){return qp(t,e)}async function Z1(t,e){return qp(t,e)}/**
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
 */async function J1(t,e){return ii(t,"POST","/v1/accounts:signInWithEmailLink",Je(t,e))}async function ev(t,e){return ii(t,"POST","/v1/accounts:signInWithEmailLink",Je(t,e))}/**
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
 */class Yr extends Wl{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Yr(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Yr(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ko(e,n,"signInWithPassword",Q1);case"emailLink":return J1(e,{email:this._email,oobCode:this._password});default:Le(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ko(e,r,"signUpPassword",q1);case"emailLink":return ev(e,{idToken:n,email:this._email,oobCode:this._password});default:Le(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Dn(t,e){return ii(t,"POST","/v1/accounts:signInWithIdp",Je(t,e))}/**
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
 */const tv="http://localhost";class cn extends Wl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new cn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Le("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,o=zl(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new cn(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const n=this.buildRequest();return Dn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Dn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Dn(e,n)}buildRequest(){const e={requestUri:tv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ti(n)}return e}}/**
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
 */function nv(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function rv(t){const e=gr(mr(t)).link,n=e?gr(mr(e)).deep_link_id:null,r=gr(mr(t)).deep_link_id;return(r?gr(mr(r)).link:null)||r||n||e||t}class $l{constructor(e){var n,r,i,o,s,a;const l=gr(mr(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,p=nv((i=l.mode)!==null&&i!==void 0?i:null);A(u&&d&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=d,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=rv(e);try{return new $l(n)}catch{return null}}}/**
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
 */class Xn{constructor(){this.providerId=Xn.PROVIDER_ID}static credential(e,n){return Yr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=$l.parseLink(n);return A(r,"argument-error"),Yr._fromEmailAndCode(e,r.code,r.tenantId)}}Xn.PROVIDER_ID="password";Xn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Xn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Vl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class oi extends Vl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class kt extends oi{constructor(){super("facebook.com")}static credential(e){return cn._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kt.credential(e.oauthAccessToken)}catch{return null}}}kt.FACEBOOK_SIGN_IN_METHOD="facebook.com";kt.PROVIDER_ID="facebook.com";/**
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
 */class rt extends oi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return cn._fromParams({providerId:rt.PROVIDER_ID,signInMethod:rt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return rt.credentialFromTaggedObject(e)}static credentialFromError(e){return rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return rt.credential(n,r)}catch{return null}}}rt.GOOGLE_SIGN_IN_METHOD="google.com";rt.PROVIDER_ID="google.com";/**
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
 */class _t extends oi{constructor(){super("github.com")}static credential(e){return cn._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _t.credential(e.oauthAccessToken)}catch{return null}}}_t.GITHUB_SIGN_IN_METHOD="github.com";_t.PROVIDER_ID="github.com";/**
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
 */class Et extends oi{constructor(){super("twitter.com")}static credential(e,n){return cn._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Et.credential(n,r)}catch{return null}}}Et.TWITTER_SIGN_IN_METHOD="twitter.com";Et.PROVIDER_ID="twitter.com";/**
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
 */async function iv(t,e){return ii(t,"POST","/v1/accounts:signUp",Je(t,e))}/**
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
 */class un{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const o=await tn._fromIdTokenResponse(e,r,i),s=Nu(r);return new un({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Nu(r);return new un({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Nu(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class _o extends Wt{constructor(e,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,_o.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new _o(e,n,r,i)}}function Qp(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?_o._fromErrorAndOperation(t,o,e,r):o})}async function ov(t,e,n=!1){const r=await Kn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return un._forOperation(t,"link",r)}/**
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
 */async function sv(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const o=await Kn(t,Qp(r,i,e,t),n);A(o.idToken,r,"internal-error");const s=Bl(o.idToken);A(s,r,"internal-error");const{sub:a}=s;return A(t.uid===a,r,"user-mismatch"),un._forOperation(t,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Le(r,"user-mismatch"),o}}/**
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
 */async function Xp(t,e,n=!1){const r="signIn",i=await Qp(t,r,e),o=await un._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}async function av(t,e){return Xp(mt(t),e)}/**
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
 */function Zp(t,e,n){var r;A(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),A(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(A(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(A(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function Jp(t){const e=mt(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function lv(t,e,n){const r=mt(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&Zp(r,i,n),await ko(r,i,"getOobCode",Z1)}async function cv(t,e,n){const r=mt(t),s=await ko(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",iv).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Jp(t),l}),a=await un._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(a.user),a}function uv(t,e,n){return av(je(t),Xn.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Jp(t),r})}/**
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
 */async function dv(t,e){return $e(t,"POST","/v1/accounts:createAuthUri",Je(t,e))}/**
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
 */async function fv(t,e){const n=Op()?bo():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await dv(je(t),r);return i||[]}async function pv(t,e){const n=je(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&Zp(n.auth,i,e);const{email:o}=await X1(n.auth,i);o!==t.email&&await t.reload()}/**
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
 */async function hv(t,e){return $e(t,"POST","/v1/accounts:update",e)}/**
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
 */async function gv(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=je(t),o={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},s=await Kn(r,hv(r.auth,o));r.displayName=s.displayName||null,r.photoURL=s.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(s)}function mv(t,e,n,r){return je(t).onIdTokenChanged(e,n,r)}function yv(t,e,n){return je(t).beforeAuthStateChanged(e,n)}function vv(t,e,n,r){return je(t).onAuthStateChanged(e,n,r)}function Gl(t){return je(t).signOut()}const Eo="__sak";/**
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
 */class eh{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Eo,"1"),this.storage.removeItem(Eo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function xv(){const t=de();return Hl(t)||$o(t)}const wv=1e3,bv=10;class th extends eh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=xv()&&N1(),this.fallbackToPolling=Vp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(e.newValue!==s)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);A1()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,bv):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},wv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}th.type="LOCAL";const Sv=th;/**
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
 */class nh extends eh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}nh.type="SESSION";const rh=nh;/**
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
 */function kv(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Go{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Go(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await kv(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Go.receivers=[];/**
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
 */function Kl(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class _v{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=Kl("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(p){const g=p;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(d),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(g.data.response);break;default:clearTimeout(d),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
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
 */function Ze(){return window}function Ev(t){Ze().location.href=t}/**
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
 */function ih(){return typeof Ze().WorkerGlobalScope<"u"&&typeof Ze().importScripts=="function"}async function Tv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Iv(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Cv(){return ih()?self:null}/**
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
 */const oh="firebaseLocalStorageDb",Pv=1,To="firebaseLocalStorage",sh="fbase_key";class si{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ko(t,e){return t.transaction([To],e?"readwrite":"readonly").objectStore(To)}function Av(){const t=indexedDB.deleteDatabase(oh);return new si(t).toPromise()}function Da(){const t=indexedDB.open(oh,Pv);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(To,{keyPath:sh})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(To)?e(r):(r.close(),await Av(),e(await Da()))})})}async function Ru(t,e,n){const r=Ko(t,!0).put({[sh]:e,value:n});return new si(r).toPromise()}async function Nv(t,e){const n=Ko(t,!1).get(e),r=await new si(n).toPromise();return r===void 0?null:r.value}function Ou(t,e){const n=Ko(t,!0).delete(e);return new si(n).toPromise()}const Rv=800,Ov=3;class ah{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Da(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Ov)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ih()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Go._getInstance(Cv()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Tv(),!this.activeServiceWorker)return;this.sender=new _v(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Iv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Da();return await Ru(e,Eo,"1"),await Ou(e,Eo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ru(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Nv(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ou(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=Ko(i,!1).getAll();return new si(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Rv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ah.type="LOCAL";const Lv=ah;new ri(3e4,6e4);/**
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
 */function lh(t,e){return e?at(e):(A(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Yl extends Wl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Dn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Dn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Dn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function jv(t){return Xp(t.auth,new Yl(t),t.bypassAuthState)}function Mv(t){const{auth:e,user:n}=t;return A(n,e,"internal-error"),sv(n,new Yl(t),t.bypassAuthState)}async function Dv(t){const{auth:e,user:n}=t;return A(n,e,"internal-error"),ov(n,new Yl(t),t.bypassAuthState)}/**
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
 */class ch{constructor(e,n,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=e;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return jv;case"linkViaPopup":case"linkViaRedirect":return Dv;case"reauthViaPopup":case"reauthViaRedirect":return Mv;default:Le(this.auth,"internal-error")}}resolve(e){ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const zv=new ri(2e3,1e4);async function Fv(t,e,n){const r=mt(t);c1(t,e,Vl);const i=lh(r,n);return new Zt(r,"signInViaPopup",e,i).executeNotNull()}class Zt extends ch{constructor(e,n,r,i,o){super(e,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Zt.currentPopupAction&&Zt.currentPopupAction.cancel(),Zt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return A(e,this.auth,"internal-error"),e}async onExecution(){ht(this.filter.length===1,"Popup operations only handle one event");const e=Kl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Xe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Xe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,zv.get())};e()}}Zt.currentPopupAction=null;/**
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
 */const Uv="pendingRedirect",Vi=new Map;class Bv extends ch{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Vi.get(this.auth._key());if(!e){try{const r=await Hv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Vi.set(this.auth._key(),e)}return this.bypassAuthState||Vi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Hv(t,e){const n=Vv(e),r=$v(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Wv(t,e){Vi.set(t._key(),e)}function $v(t){return at(t._redirectPersistence)}function Vv(t){return $i(Uv,t.config.apiKey,t.name)}async function Gv(t,e,n=!1){const r=mt(t),i=lh(r,e),s=await new Bv(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}/**
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
 */const Kv=10*60*1e3;class Yv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!qv(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!uh(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Xe(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Kv&&this.cachedEventUids.clear(),this.cachedEventUids.has(Lu(e))}saveEventToCache(e){this.cachedEventUids.add(Lu(e)),this.lastProcessedEventTime=Date.now()}}function Lu(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function uh({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function qv(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return uh(t);default:return!1}}/**
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
 */async function Qv(t,e={}){return $e(t,"GET","/v1/projects",e)}/**
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
 */const Xv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Zv=/^https?/;async function Jv(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Qv(t);for(const n of e)try{if(e2(n))return}catch{}Le(t,"unauthorized-domain")}function e2(t){const e=bo(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!Zv.test(n))return!1;if(Xv.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const t2=new ri(3e4,6e4);function ju(){const t=Ze().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function n2(t){return new Promise((e,n)=>{var r,i,o;function s(){ju(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ju(),n(Xe(t,"network-request-failed"))},timeout:t2.get()})}if(!((i=(r=Ze().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=Ze().gapi)===null||o===void 0)&&o.load)s();else{const a=U1("iframefcb");return Ze()[a]=()=>{gapi.load?s():n(Xe(t,"network-request-failed"))},Kp(`${F1()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Gi=null,e})}let Gi=null;function r2(t){return Gi=Gi||n2(t),Gi}/**
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
 */const i2=new ri(5e3,15e3),o2="__/auth/iframe",s2="emulator/auth/iframe",a2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},l2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function c2(t){const e=t.config;A(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ul(e,s2):`https://${t.config.authDomain}/${o2}`,r={apiKey:e.apiKey,appName:t.name,v:ni},i=l2.get(t.config.apiHost);i&&(r.eid=i);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${ti(r).slice(1)}`}async function u2(t){const e=await r2(t),n=Ze().gapi;return A(n,t,"internal-error"),e.open({where:document.body,url:c2(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:a2,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=Xe(t,"network-request-failed"),a=Ze().setTimeout(()=>{o(s)},i2.get());function l(){Ze().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
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
 */const d2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},f2=500,p2=600,h2="_blank",g2="http://localhost";class Mu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function m2(t,e,n,r=f2,i=p2){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},d2),{width:r.toString(),height:i.toString(),top:o,left:s}),u=de().toLowerCase();n&&(a=Up(u)?h2:n),Fp(u)&&(e=e||g2,l.scrollbars="yes");const d=Object.entries(l).reduce((g,[y,v])=>`${g}${y}=${v},`,"");if(P1(u)&&a!=="_self")return y2(e||"",a),new Mu(null);const p=window.open(e||"",a,d);A(p,t,"popup-blocked");try{p.focus()}catch{}return new Mu(p)}function y2(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const v2="__/auth/handler",x2="emulator/auth/handler",w2=encodeURIComponent("fac");async function Du(t,e,n,r,i,o){A(t.config.authDomain,t,"auth-domain-config-required"),A(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ni,eventId:i};if(e instanceof Vl){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",q0(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries(o||{}))s[d]=p}if(e instanceof oi){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(s.scopes=d.join(","))}t.tenantId&&(s.tid=t.tenantId);const a=s;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),u=l?`#${w2}=${encodeURIComponent(l)}`:"";return`${b2(t)}?${ti(a).slice(1)}${u}`}function b2({config:t}){return t.emulator?Ul(t,x2):`https://${t.authDomain}/${v2}`}/**
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
 */const Os="webStorageSupport";class S2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rh,this._completeRedirectFn=Gv,this._overrideRedirectResult=Wv}async _openPopup(e,n,r,i){var o;ht((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Du(e,n,r,bo(),i);return m2(e,s,Kl())}async _openRedirect(e,n,r,i){await this._originValidation(e);const o=await Du(e,n,r,bo(),i);return Ev(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(ht(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await u2(e),r=new Yv(e);return n.register("authEvent",i=>(A(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Os,{type:Os},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Os];s!==void 0&&n(!!s),Le(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Jv(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Vp()||Hl()||$o()}}const k2=S2;var zu="@firebase/auth",Fu="1.6.0";/**
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
 */class _2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){A(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function E2(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function T2(t){Vr(new Gn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;A(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:s,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Gp(t)},u=new M1(r,i,o,l);return V1(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Vr(new Gn("auth-internal",e=>{const n=mt(e.getProvider("auth").getImmediate());return(r=>new _2(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),jn(zu,Fu,E2(t)),jn(zu,Fu,"esm2017")}/**
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
 */const I2=5*60,C2=Sp("authIdTokenMaxAge")||I2;let Uu=null;const P2=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>C2)return;const i=n==null?void 0:n.token;Uu!==i&&(Uu=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function A2(t=qy()){const e=Tp(t,"auth");if(e.isInitialized())return e.getImmediate();const n=$1(t,{popupRedirectResolver:k2,persistence:[Lv,Sv,rh]}),r=Sp("authTokenSyncURL");if(r){const o=P2(r);yv(n,o,()=>o(n.currentUser)),mv(n,s=>o(s))}const i=z0("auth");return i&&G1(n,`http://${i}`),n}function N2(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}D1({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const o=Xe("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",N2().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});T2("Browser");const R2={apiKey:"AIzaSyAVsOqwBt41VMBzk1re-OMzD06kLXoniOo",authDomain:"printing-press-system.firebaseapp.com",projectId:"printing-press-system",storageBucket:"printing-press-system.firebasestorage.app",messagingSenderId:"920502808043",appId:"1:920502808043:web:cea7eb1783aac4a39a7dae"},O2=Ip(R2),ct=A2(O2),L2=new rt;console.log("✅ Firebase initialized");const j2=async()=>{try{console.log("🔄 Opening Google popup...");const e=await Fv(ct,L2);return console.log("✅ Success:",e.user.email),{user:e.user,error:null}}catch(t){return console.error("❌ Error:",t.code,t.message),t.code==="auth/popup-closed-by-user"?{user:null,error:"Please complete sign-in in the popup window"}:t.code==="auth/popup-blocked"?{user:null,error:"Popup blocked. Please allow popups for this site."}:t.code==="auth/cancelled-popup-request"?{user:null,error:"Sign-in cancelled"}:{user:null,error:"Sign-in failed. Please try again."}}},M2=async(t,e,n,r)=>{try{if((await fv(ct,t)).length>0)return{user:null,error:"Email already registered"};const o=await cv(ct,t,e);return await gv(o.user,{displayName:`${n} ${r}`}),await pv(o.user),await Gl(ct),{user:null,error:null}}catch(i){return{user:null,error:i.message}}},D2=async(t,e)=>{try{const n=await uv(ct,t,e);return n.user.emailVerified?{user:n.user,error:null}:(await Gl(ct),{user:null,error:"Please verify your email first"})}catch{return{user:null,error:"Invalid email or password"}}},z2=async t=>{try{return await lv(ct,t),{error:null}}catch(e){return{error:e.message}}},F2=async()=>(await Gl(ct),{error:null}),U2=t=>vv(ct,t),dh=P.createContext(),Yo=()=>P.useContext(dh),B2=({children:t})=>{const[e,n]=P.useState(null),[r,i]=P.useState(!0);P.useEffect(()=>U2(p=>{var g,y;n(p?{uid:p.uid,email:p.email,firstName:((g=p.displayName)==null?void 0:g.split(" ")[0])||"User",lastName:((y=p.displayName)==null?void 0:y.split(" ").slice(1).join(" "))||"",emailVerified:p.emailVerified,isAuthenticated:!0}:null),i(!1)}),[]);const o=async()=>{const{error:d}=await j2();return{error:d}},s=async(d,p)=>{const{error:g}=await D2(d,p);return{error:g}},a=async(d,p,g,y)=>{const{error:v}=await M2(d,p,g,y);return{error:v}},l=async d=>{const{error:p}=await z2(d);return{error:p}},u=async()=>{await F2()};return c.jsx(dh.Provider,{value:{user:e,loginWithGoogle:o,loginWithEmail:s,registerWithEmail:a,resetPassword:l,logout:u,loading:r,isAuthenticated:!!e},children:!r&&t})};var H2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const W2=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),$2=(t,e)=>{const n=P.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:o=2,absoluteStrokeWidth:s,children:a,...l},u)=>P.createElement("svg",{ref:u,...H2,width:i,height:i,stroke:r,strokeWidth:s?Number(o)*24/Number(i):o,className:`lucide lucide-${W2(t)}`,...l},[...e.map(([d,p])=>P.createElement(d,p)),...(Array.isArray(a)?a:[a])||[]]));return n.displayName=`${t}`,n};var z=$2;const za=z("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]),Ir=z("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]),V2=z("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]),G2=z("Check",[["polyline",{points:"20 6 9 17 4 12",key:"10jjfj"}]]),K2=z("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),fh=z("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]),Y2=z("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]),Bu=z("ExternalLink",[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}],["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3",key:"18c3s4"}]]),ph=z("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]),Hu=z("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z",key:"nb9nel"}]]),q2=z("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]),hh=z("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]),gh=z("Layers",[["polygon",{points:"12 2 2 7 12 12 22 7 12 2",key:"1b0ttc"}],["polyline",{points:"2 17 12 22 22 17",key:"imjtdl"}],["polyline",{points:"2 12 12 17 22 12",key:"5dexcv"}]]),Q2=z("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]),X2=z("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]),Z2=z("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]),Fa=z("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]),J2=z("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]),mh=z("MessageCircle",[["path",{d:"m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z",key:"v2veuj"}]]),Wu=z("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]),ex=z("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]),yh=z("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]),tx=z("Printer",[["polyline",{points:"6 9 6 2 18 2 18 9",key:"1306q4"}],["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["rect",{width:"12",height:"8",x:"6",y:"14",key:"5ipwut"}]]),vh=z("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]),ur=z("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]),$u=z("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),nx=z("Type",[["polyline",{points:"4 7 4 4 20 4 20 7",key:"1nosan"}],["line",{x1:"9",x2:"15",y1:"20",y2:"20",key:"swin9y"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]]),rx=z("UserCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",key:"154egf"}]]),ql=z("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),Ql=z("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Xl=z("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]),Ua=z("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),xh="/bk-offset/assets/BK_logo_png-baab523e.png",ix=`
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
`;function ox({isDark:t,toggleTheme:e,lang:n,toggleLang:r,text:i,onAuthClick:o,scrolled:s}){var T,k,M,O;const{user:a,logout:l,isAuthenticated:u}=Yo(),[d,p]=P.useState(!1),[g,y]=P.useState(!1),v=()=>{p(!1),y(!1),l()},w=()=>{window.scrollTo({top:0,behavior:"smooth"}),p(!1),y(!1)},C=t?"rgba(255,255,255,0.09)":"rgba(0,0,0,0.08)",h=t?"rgba(255,255,255,0.92)":"#0f172a",f=t?"rgba(255,255,255,0.45)":"#64748b",m=t?"rgba(255,255,255,0.07)":"rgba(0,0,0,0.045)",x=t?"#0f172a":"#ffffff",S=t?"rgba(255,255,255,0.10)":"rgba(0,0,0,0.08)",_=t?"0 20px 48px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06)":"0 16px 40px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.06)";return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:ix}),c.jsxs("nav",{className:`nb-root${s?" nb-scrolled-shadow":""}`,style:{position:"sticky",top:0,zIndex:2e3,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 28px",height:60,background:t?"rgba(2,6,23,0.92)":"rgba(255,255,255,0.92)",backdropFilter:"blur(18px) saturate(1.5)",WebkitBackdropFilter:"blur(18px) saturate(1.5)",borderBottom:`1px solid ${s?C:"transparent"}`,transition:"background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease"},children:[c.jsxs("div",{className:"nb-logo",onClick:w,role:"button",tabIndex:0,onKeyDown:N=>N.key==="Enter"&&w(),children:[c.jsx("img",{className:"nb-logo-img",src:xh,alt:"BK Offset",onError:N=>{N.target.style.display="none"}}),c.jsxs("div",{children:[c.jsx("div",{className:"nb-brand-name",style:{color:h},children:"BK Offset"}),c.jsx("div",{className:"nb-brand-sub",style:{color:f},children:"Printing Press"})]})]}),c.jsx("div",{style:{display:"flex",alignItems:"center",gap:6},children:u?c.jsxs(c.Fragment,{children:[c.jsxs("div",{style:{position:"relative"},children:[c.jsxs("button",{className:"nb-avatar-pill",onClick:()=>{p(!d),y(!1)},style:{border:`1px solid ${d?"rgba(14,165,233,0.40)":C}`,background:d?m:"transparent",color:h},children:[c.jsx("div",{className:"nb-avatar-ring",children:((k=(T=a==null?void 0:a.firstName)==null?void 0:T.charAt(0))==null?void 0:k.toUpperCase())||"U"}),c.jsx("span",{className:"nb-avatar-name",style:{color:h},children:(a==null?void 0:a.firstName)||"User"}),c.jsx(K2,{size:13,strokeWidth:2,style:{color:f,transform:d?"rotate(180deg)":"rotate(0deg)",transition:"transform 0.25s ease"}})]}),d&&c.jsxs(c.Fragment,{children:[c.jsx("div",{style:{position:"fixed",inset:0,zIndex:1999},onClick:()=>p(!1)}),c.jsxs("div",{className:"nb-dropdown",style:{background:x,border:`1px solid ${S}`,boxShadow:_},children:[c.jsx("div",{style:{padding:"14px 16px 12px",borderBottom:`1px solid ${S}`},children:c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:6},children:[c.jsx("div",{className:"nb-avatar-ring",style:{width:34,height:34,fontSize:13},children:((O=(M=a==null?void 0:a.firstName)==null?void 0:M.charAt(0))==null?void 0:O.toUpperCase())||"U"}),c.jsxs("div",{children:[c.jsxs("div",{style:{fontSize:13.5,fontWeight:600,color:h,lineHeight:1.2},children:[a==null?void 0:a.firstName," ",a==null?void 0:a.lastName]}),c.jsx("div",{style:{fontSize:11,color:f,marginTop:2},children:a==null?void 0:a.email})]})]})}),c.jsx("div",{style:{padding:"6px 6px"},children:c.jsxs("button",{className:"nb-dropdown-btn",style:{color:h},onMouseEnter:N=>{N.currentTarget.style.background=m},onMouseLeave:N=>{N.currentTarget.style.background="none"},onClick:()=>p(!1),children:[c.jsx(rx,{size:16,strokeWidth:1.75,color:"#0ea5e9"}),"View Profile"]})})]})]})]}),c.jsx("div",{style:{width:1,height:22,background:C,margin:"0 2px"}}),c.jsxs("div",{style:{position:"relative"},children:[c.jsx("button",{className:"nb-icon-btn",onClick:()=>{y(!g),p(!1)},style:{color:g?h:f,border:`1px solid ${g?"rgba(14,165,233,0.40)":C}`,background:g?m:"transparent"},children:g?c.jsx(Ql,{size:17,strokeWidth:2}):c.jsx(J2,{size:17,strokeWidth:2})}),g&&c.jsxs(c.Fragment,{children:[c.jsx("div",{style:{position:"fixed",inset:0,zIndex:1999},onClick:()=>y(!1)}),c.jsxs("div",{className:"nb-dropdown",style:{background:x,border:`1px solid ${S}`,boxShadow:_,padding:"6px 6px"},children:[c.jsxs("button",{className:"nb-dropdown-btn",style:{color:h},onMouseEnter:N=>{N.currentTarget.style.background=m},onMouseLeave:N=>{N.currentTarget.style.background="none"},onClick:()=>{r(),y(!1)},children:[c.jsx(Hu,{size:15,strokeWidth:1.75,color:"#0ea5e9"}),n==="en"?"हिंदी में बदलें":"Switch to English"]}),c.jsxs("button",{className:"nb-dropdown-btn",style:{color:h},onMouseEnter:N=>{N.currentTarget.style.background=m},onMouseLeave:N=>{N.currentTarget.style.background="none"},onClick:()=>{e(),y(!1)},children:[t?c.jsx($u,{size:15,strokeWidth:1.75,color:"#f59e0b"}):c.jsx(Wu,{size:15,strokeWidth:1.75,color:"#6366f1"}),t?"Light Mode":"Dark Mode"]}),c.jsx("div",{className:"nb-sep",style:{background:S}}),c.jsxs("button",{className:"nb-dropdown-btn",style:{color:"#ef4444"},onMouseEnter:N=>{N.currentTarget.style.background="rgba(239,68,68,0.07)"},onMouseLeave:N=>{N.currentTarget.style.background="none"},onClick:v,children:[c.jsx(X2,{size:15,strokeWidth:1.75,color:"#ef4444"}),"Logout"]})]})]})]})]}):c.jsxs(c.Fragment,{children:[c.jsx("button",{className:"nb-icon-btn",onClick:r,title:n==="en"?"हिंदी में बदलें":"Switch to English",style:{color:f,border:`1px solid ${C}`},onMouseEnter:N=>{N.currentTarget.style.background=m,N.currentTarget.style.color=h},onMouseLeave:N=>{N.currentTarget.style.background="transparent",N.currentTarget.style.color=f},children:c.jsx(Hu,{size:16,strokeWidth:1.75})}),c.jsx("button",{className:"nb-icon-btn",onClick:e,title:t?"Light mode":"Dark mode",style:{color:f,border:`1px solid ${C}`},onMouseEnter:N=>{N.currentTarget.style.background=m,N.currentTarget.style.color=h},onMouseLeave:N=>{N.currentTarget.style.background="transparent",N.currentTarget.style.color=f},children:t?c.jsx($u,{size:16,strokeWidth:1.75}):c.jsx(Wu,{size:16,strokeWidth:1.75})}),c.jsx("div",{style:{width:1,height:22,background:C,margin:"0 4px"}}),c.jsxs("button",{className:"nb-signin",onClick:o,children:[c.jsx(ql,{size:14,strokeWidth:2}),"Sign In"]})]})})]})]})}const sx=`
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
`,ax=[{key:"fb",href:"https://facebook.com",Icon:ph,hover:"#1877F2",label:"Facebook"},{key:"ig",href:"https://instagram.com",Icon:hh,hover:"#E4405F",label:"Instagram"},{key:"yt",href:"https://youtube.com/@b.k.offset?si=wwfxLPk27TfOcPa_",Icon:Xl,hover:"#FF0000",label:"YouTube"}];function lx({isDark:t,isMobile:e}){const{isAuthenticated:n}=Yo(),[r,i]=P.useState(null),o=new Date().getFullYear();return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:sx}),c.jsx("div",{className:"ft-top-border"}),c.jsx("footer",{className:"ft-root",style:{background:"#020617",color:"#cbd5e1",padding:e?"56px 22px 28px":"72px 48px 32px"},children:c.jsxs("div",{style:{position:"relative",zIndex:1,maxWidth:1100,margin:"0 auto"},children:[c.jsxs("div",{style:{display:"grid",gridTemplateColumns:e?"1fr":"1.6fr 1fr 1fr",gap:e?44:56,marginBottom:e?40:56,alignItems:"start"},children:[c.jsxs("div",{children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,marginBottom:18},children:[c.jsx("img",{className:"ft-logo-img",src:xh,alt:"BK Offset",onError:s=>{s.target.style.display="none"}}),c.jsxs("div",{children:[c.jsx("div",{className:"ft-brand-name",children:"BK Offset"}),c.jsx("div",{className:"ft-brand-tagline",children:"Printing Press · Since 1995"})]})]}),c.jsx("p",{style:{fontSize:13.5,lineHeight:1.75,color:"rgba(255,255,255,0.38)",maxWidth:280,marginBottom:22},children:"Delhi's trusted name for bulk book printing and premium lamination services — quality you can feel, precision you can count on."}),c.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:ax.map(({key:s,href:a,Icon:l,hover:u,label:d})=>c.jsx("a",{href:a,target:"_blank",rel:"noopener noreferrer","aria-label":d,className:"ft-social-btn",style:{background:r===s?`${u}22`:"rgba(255,255,255,0.06)",borderColor:r===s?`${u}55`:"rgba(255,255,255,0.09)",color:r===s?u:"rgba(255,255,255,0.45)",boxShadow:r===s?`0 6px 18px ${u}33`:"none"},onMouseEnter:()=>i(s),onMouseLeave:()=>i(null),children:c.jsx(l,{size:16,strokeWidth:1.75})},s))})]}),c.jsxs("div",{children:[c.jsx("div",{className:"ft-section-head",children:"Contact"}),n?c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[c.jsxs("a",{href:"tel:+919560959039",className:"ft-contact-link",children:[c.jsx("div",{className:"ft-contact-link-icon",style:{background:"rgba(14,165,233,0.12)"},children:c.jsx(yh,{size:14,strokeWidth:1.75,color:"#0ea5e9"})}),"+91 95609 59039",c.jsx(Ir,{size:12,style:{marginLeft:"auto",opacity:.4}})]}),c.jsxs("a",{href:"https://wa.me/919560959039",target:"_blank",rel:"noopener noreferrer",className:"ft-contact-link",children:[c.jsx("div",{className:"ft-contact-link-icon",style:{background:"rgba(37,211,102,0.12)"},children:c.jsx(mh,{size:14,strokeWidth:1.75,color:"#25d366"})}),"WhatsApp",c.jsx(Ir,{size:12,style:{marginLeft:"auto",opacity:.4}})]}),c.jsxs("a",{href:"mailto:rinkusharmarinku54@gmail.com",className:"ft-contact-link",children:[c.jsx("div",{className:"ft-contact-link-icon",style:{background:"rgba(99,102,241,0.12)"},children:c.jsx(Z2,{size:14,strokeWidth:1.75,color:"#6366f1"})}),"Email us",c.jsx(Ir,{size:12,style:{marginLeft:"auto",opacity:.4}})]})]}):c.jsx("p",{style:{fontSize:13,color:"rgba(255,255,255,0.28)",lineHeight:1.65},children:"Sign in to view contact details and get in touch with our team."})]}),c.jsxs("div",{children:[c.jsx("div",{className:"ft-section-head",children:"Find Us"}),c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:14},children:[c.jsxs("div",{className:"ft-info-row",children:[c.jsx(Fa,{size:14,strokeWidth:1.75,className:"ft-info-icon",color:"#0ea5e9",style:{marginTop:3}}),c.jsxs("span",{children:["Street No. 2, Zulfe Bengal",c.jsx("br",{}),"Dilshad Garden, Delhi — 110095"]})]}),c.jsxs("div",{className:"ft-info-row",children:[c.jsx(fh,{size:14,strokeWidth:1.75,className:"ft-info-icon",color:"#6366f1",style:{marginTop:3}}),c.jsxs("span",{children:["Mon – Sun: 9:00 AM – 7:00 PM",c.jsx("br",{}),"Tuesday: Closed"]})]})]})]})]}),c.jsxs("div",{className:"ft-bottom",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"ft-copyright",children:["© ",o," BK Offset Printing. All Rights Reserved."]}),c.jsxs("div",{className:"ft-made-with",style:{marginTop:4},children:[c.jsx("span",{className:"ft-dot"}),"Premium printing, Delhi"]})]}),c.jsxs("div",{className:"ft-legal-notice",children:[c.jsxs("p",{children:["© ",o," Keshav Sharma. All Rights Reserved."]}),c.jsx("p",{children:"Unauthorized commercial use or brand impersonation is strictly prohibited."}),c.jsx("p",{style:{fontSize:"10px",opacity:.5,marginTop:6},children:"License: CC BY-NC 4.0 — Credit required, no commercial use allowed."})]})]})]})})]})}function cx({isDark:t,isAuthenticated:e,windowWidth:n}){const[r,i]=P.useState(null),o=gp(t),s=n<420,a=s?40:46,l=s?"12px":"20px",u=[{icon:c.jsx(Xl,{size:18}),href:"https://youtube.com/@b.k.offset?si=8VAlAdQKIGciGQ8d",label:"YouTube",color:"#FF0000"},{icon:c.jsx(hh,{size:18}),href:"https://instagram.com",label:"Instagram",color:"#d640e4"},{icon:c.jsx(ph,{size:18}),href:"https://facebook.com",label:"Facebook",color:"#1877F2"}];return c.jsx("div",{style:{position:"fixed",bottom:"calc(12px + env(safe-area-inset-bottom, 0px))",right:l,display:"flex",flexDirection:"column",gap:s?"8px":"10px",zIndex:1100,pointerEvents:"auto"},children:u.map((d,p)=>c.jsxs("a",{href:d.href,target:"_blank",rel:"noopener noreferrer","aria-label":d.label,onMouseEnter:()=>i(d.label),onMouseLeave:()=>i(null),style:{width:a+"px",height:a+"px",borderRadius:"50%",background:r===d.label?d.color:o.surf,color:r===d.label?"#fff":o.textMid,display:"flex",alignItems:"center",justifyContent:"center",textDecoration:"none",border:"1px solid "+(r===d.label?"transparent":o.border),boxShadow:r===d.label?"0 6px 20px "+d.color+"80":te.shadowSm,transform:r===d.label?"translateY(-3px) scale(1.08)":"scale(1)",transition:"all 0.25s cubic-bezier(.4,0,.2,1)",position:"relative",animation:"floatIn 0.5s ease-out "+p*.1+"s backwards"},children:[d.icon,!s&&c.jsxs("span",{style:{position:"absolute",right:"calc(100% + 10px)",top:"50%",transform:"translateY(-50%)",background:t?"#1e293b":"#0f172a",color:"#fff",padding:"5px 10px",borderRadius:"6px",fontSize:"12px",fontWeight:600,whiteSpace:"nowrap",opacity:r===d.label?1:0,pointerEvents:"none",transition:"opacity 0.2s",boxShadow:"0 4px 12px rgba(0,0,0,0.15)"},children:[d.label,c.jsx("span",{style:{position:"absolute",left:"100%",top:"50%",transform:"translateY(-50%)",borderLeft:"5px solid "+(t?"#1e293b":"#0f172a"),borderTop:"5px solid transparent",borderBottom:"5px solid transparent"}})]})]},d.label))})}function ux({title:t,description:e,keywords:n}){return c.jsxs(k0,{children:[c.jsxs("title",{children:[t," | BK Offset Printing"]}),c.jsx("meta",{name:"description",content:e}),c.jsx("meta",{name:"keywords",content:n}),c.jsx("meta",{property:"og:title",content:t}),c.jsx("meta",{property:"og:description",content:e}),c.jsx("meta",{property:"og:url",content:"https://thanozs.github.io/bk-offset/"}),c.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),c.jsx("link",{rel:"canonical",href:"https://thanozs.github.io/bk-offset/"})]})}function dx({isDark:t,count:e=50}){const n=P.useMemo(()=>Array.from({length:e},(r,i)=>({id:i,size:Math.random()*4+2,left:`${Math.random()*100}%`,animationDuration:`${Math.random()*20+15}s`,animationDelay:`${Math.random()*5}s`,opacity:Math.random()*.3+.1})),[e]);return c.jsx("div",{style:{position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none",zIndex:0},children:n.map(r=>c.jsx("div",{style:{position:"absolute",left:r.left,bottom:"-20px",width:`${r.size}px`,height:`${r.size}px`,borderRadius:"50%",background:t?`radial-gradient(circle, rgba(56, 189, 248, ${r.opacity}) 0%, transparent 70%)`:`radial-gradient(circle, rgba(14, 165, 233, ${r.opacity}) 0%, transparent 70%)`,animation:`floatUp ${r.animationDuration} ${r.animationDelay} infinite ease-in-out`}},r.id))})}function ai(t={threshold:.1,rootMargin:"0px 0px -100px 0px"}){const e=P.useRef(null),[n,r]=P.useState(!1);return P.useEffect(()=>{const i=new IntersectionObserver(([o])=>{o.isIntersecting&&r(!0)},t);return e.current&&i.observe(e.current),()=>{e.current&&i.unobserve(e.current)}},[t]),[e,n]}const fx=`
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
`,px=[{target:30,suffix:"+",label:"Years Active"},{target:50,suffix:"K+",label:"Books Printed"},{target:500,suffix:"+",label:"Happy Clients"}];function hx({text:t,isDark:e,c:n,isAuth:r,isMobile:i,setShowAuth:o}){const[s,a]=ai(),[l,u]=P.useState(!1);return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:fx}),c.jsxs("section",{ref:s,style:{position:"relative",overflow:"hidden",minHeight:i?"100svh":"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:i?"100px 20px 60px":"120px 40px 80px",textAlign:"center",background:e?"linear-gradient(160deg,rgba(4,10,28,0.92) 0%,rgba(2,8,22,0.95) 60%,rgba(6,14,34,0.93) 100%), url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1920&q=80')":"linear-gradient(160deg,rgba(224,242,254,0.82) 0%,rgba(248,250,252,0.88) 60%,rgba(240,249,255,0.85) 100%), url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1920&q=80')",backgroundSize:"cover",backgroundPosition:"center"},children:[c.jsx("div",{className:"hero-orb",style:{width:600,height:600,top:"-200px",left:"10%",background:e?"radial-gradient(circle,rgba(14,165,233,0.18) 0%,transparent 70%)":"radial-gradient(circle,rgba(14,165,233,0.14) 0%,transparent 70%)",animation:"hero-orb1 14s ease-in-out infinite",zIndex:0}}),c.jsx("div",{className:"hero-orb",style:{width:500,height:500,bottom:"-100px",right:"5%",background:e?"radial-gradient(circle,rgba(99,102,241,0.16) 0%,transparent 70%)":"radial-gradient(circle,rgba(99,102,241,0.11) 0%,transparent 70%)",animation:"hero-orb2 18s ease-in-out infinite",zIndex:0}}),c.jsx("div",{className:"hero-orb",style:{width:320,height:320,top:"35%",right:"20%",background:e?"radial-gradient(circle,rgba(56,189,248,0.10) 0%,transparent 70%)":"radial-gradient(circle,rgba(56,189,248,0.08) 0%,transparent 70%)",animation:"hero-orb3 11s ease-in-out infinite",zIndex:0}}),c.jsx("div",{className:"hero-scan"}),c.jsx("div",{style:{position:"absolute",inset:0,backgroundImage:`radial-gradient(circle,${e?"rgba(14,165,233,0.07)":"rgba(14,165,233,0.09)"} 1px,transparent 1px)`,backgroundSize:"36px 36px",pointerEvents:"none",zIndex:0}}),c.jsx(dx,{isDark:e,count:i?20:35}),c.jsxs("div",{style:{position:"relative",zIndex:2,width:"100%",maxWidth:820},children:[c.jsxs("div",{className:"hero-badge",style:{background:e?"rgba(14,165,233,0.12)":"rgba(14,165,233,0.10)",border:`1px solid ${e?"rgba(14,165,233,0.30)":"rgba(14,165,233,0.25)"}`,color:"#38bdf8",marginBottom:24},children:[c.jsx(vh,{size:13,strokeWidth:2}),"Premium Printing Services"]}),c.jsxs("h1",{className:"hero-h1",style:{fontSize:i?"38px":"clamp(44px,6.5vw,76px)",color:e?"#f1f5f9":"#0f172a",marginBottom:20,opacity:a?1:0,animation:a?"hero-fadeUp 0.7s ease-out 0.08s both":"none"},children:[t.heroTitle,c.jsx("br",{}),c.jsx("span",{className:"hero-grad-word",children:t.heroTitle2})]}),c.jsx("p",{className:"hero-sub",style:{fontSize:i?"14.5px":"clamp(15px,1.6vw,17px)",color:e?"rgba(255,255,255,0.52)":"#475569",maxWidth:540,margin:"0 auto 36px",opacity:a?1:0,animation:a?"hero-fadeUp 0.7s ease-out 0.18s both":"none"},children:t.heroSub}),c.jsx("div",{style:{display:"flex",justifyContent:"center",gap:12,flexWrap:"wrap",marginBottom:48,opacity:a?1:0,animation:a?"hero-fadeUp 0.7s ease-out 0.28s both":"none"},children:r?c.jsxs(c.Fragment,{children:[c.jsxs("a",{href:`tel:${E0}`,className:"hero-btn",style:{background:"linear-gradient(135deg,#0ea5e9,#6366f1)",color:"#fff",padding:i?"12px 24px":"14px 28px",fontSize:i?"14px":"15px",boxShadow:"0 6px 24px rgba(14,165,233,0.35)"},children:[c.jsx(yh,{size:16,strokeWidth:2}),"Call Now"]}),c.jsxs("a",{href:T0,target:"_blank",rel:"noopener noreferrer",className:"hero-btn",style:{background:"linear-gradient(135deg,#16a34a,#22c55e)",color:"#fff",padding:i?"12px 24px":"14px 28px",fontSize:i?"14px":"15px",boxShadow:"0 6px 24px rgba(22,163,74,0.32)"},children:[c.jsx(mh,{size:16,strokeWidth:2}),"WhatsApp"]})]}):c.jsxs(c.Fragment,{children:[c.jsxs("button",{onClick:()=>o(!0),className:"hero-btn",style:{background:"linear-gradient(135deg,#0ea5e9,#6366f1)",color:"#fff",padding:i?"12px 26px":"14px 30px",fontSize:i?"14px":"15px",boxShadow:"0 6px 24px rgba(14,165,233,0.35)"},children:[c.jsx(ql,{size:16,strokeWidth:2}),i?t.signIn:`${t.signIn} to Contact Us`,c.jsx(za,{size:15,strokeWidth:2.5})]}),c.jsxs("button",{onClick:()=>u(!0),className:"hero-btn",style:{background:"transparent",color:e?"rgba(255,255,255,0.75)":"#0f172a",padding:i?"11px 24px":"13px 28px",fontSize:i?"14px":"15px",border:`1px solid ${e?"rgba(255,255,255,0.15)":"rgba(0,0,0,0.12)"}`,boxShadow:"none",backdropFilter:"blur(8px)",WebkitBackdropFilter:"blur(8px)"},children:["Learn More",c.jsx(za,{size:15,strokeWidth:2.5})]})]})}),c.jsx("div",{className:"hero-stat-strip",style:{marginBottom:28,opacity:a?1:0,animation:a?"hero-fadeUp 0.6s ease-out 0.38s both":"none"},children:px.map(({target:d,suffix:p,label:g},y)=>c.jsx(gx,{target:d,suffix:p,label:g,isDark:e,isVisible:a,delay:y*.12},g))}),c.jsx("div",{style:{opacity:a?1:0,animation:a?"hero-fadeIn 0.8s ease-out 0.55s both":"none",display:"flex",justifyContent:"center"},children:c.jsxs("div",{className:"hero-trust",children:[c.jsx(ur,{size:11,fill:"currentColor",color:"#f59e0b",style:{opacity:.85}}),c.jsx(ur,{size:11,fill:"currentColor",color:"#f59e0b",style:{opacity:.85}}),c.jsx(ur,{size:11,fill:"currentColor",color:"#f59e0b",style:{opacity:.85}}),c.jsx(ur,{size:11,fill:"currentColor",color:"#f59e0b",style:{opacity:.85}}),c.jsx(ur,{size:11,fill:"currentColor",color:"#f59e0b",style:{opacity:.85}}),c.jsx("span",{style:{marginLeft:4},children:"Trusted by publishers across Delhi since 1995"}),c.jsx("span",{className:"hero-trust-dot"}),c.jsx("span",{children:"Dilshad Garden"})]})})]}),c.jsx("div",{style:{position:"absolute",bottom:0,left:0,right:0,height:80,background:e?"linear-gradient(to bottom,transparent,rgba(2,6,23,0.55))":"linear-gradient(to bottom,transparent,rgba(248,250,252,0.60))",pointerEvents:"none",zIndex:1}})]}),l&&c.jsx("div",{className:"hero-modal-overlay",onClick:()=>u(!1),children:c.jsxs("div",{className:"hero-modal-content",onClick:d=>d.stopPropagation(),style:{"--modal-bg":e?"#0f172a":"#ffffff","--close-bg":e?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.05)","--close-border":e?"rgba(255,255,255,0.15)":"rgba(0,0,0,0.1)","--close-color":e?"#94a3b8":"#64748b","--close-hover-bg":e?"rgba(255,255,255,0.15)":"rgba(0,0,0,0.1)"},children:[c.jsx("button",{className:"hero-modal-close",onClick:()=>u(!1),children:c.jsx(Ql,{size:20})}),c.jsxs("h2",{style:{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:i?"28px":"36px",fontWeight:400,color:e?"#f1f5f9":"#0f172a",marginBottom:24},children:["About"," ",c.jsx("span",{style:{background:"linear-gradient(135deg,#0ea5e9,#6366f1)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"BK Offset Printing"})]}),c.jsxs("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:i?"15px":"16px",lineHeight:1.8,color:e?"rgba(255,255,255,0.8)":"#1e293b"},children:[c.jsxs("p",{style:{marginBottom:20},children:[c.jsx("strong",{children:"BK Offset Printing"})," has been a trusted name in the printing industry since 1995, serving publishers, authors, and businesses across Delhi with premium printing solutions."]}),c.jsx("h3",{style:{fontSize:"18px",fontWeight:600,color:"#0ea5e9",marginBottom:12,marginTop:24},children:"Our Services"}),c.jsxs("ul",{style:{marginBottom:20,paddingLeft:20},children:[c.jsxs("li",{style:{marginBottom:8},children:[c.jsx("strong",{children:"Bulk Book Printing:"})," High-volume printing for publishers, authors, and institutions. Textbooks, novels, catalogs, and manuals."]}),c.jsxs("li",{style:{marginBottom:8},children:[c.jsx("strong",{children:"Thermal Gloss Lamination:"})," Premium gloss finish using Fevicol-based adhesives that makes colours pop and protects your prints."]}),c.jsxs("li",{style:{marginBottom:8},children:[c.jsx("strong",{children:"Matte Lamination:"})," Sophisticated, non-reflective finish for premium covers that need to feel as good as they look."]}),c.jsxs("li",{style:{marginBottom:8},children:[c.jsx("strong",{children:"Soft-Touch Lamination:"})," Velvety, luxurious texture ideal for book covers, premium brochures, and collector's editions."]}),c.jsxs("li",{style:{marginBottom:8},children:[c.jsx("strong",{children:"Title Printing:"})," Custom title work with embossing, debossing, spot UV, and digital printing."]})]}),c.jsx("h3",{style:{fontSize:"18px",fontWeight:600,color:"#0ea5e9",marginBottom:12,marginTop:24},children:"Our Equipment"}),c.jsx("p",{style:{marginBottom:16},children:"We operate world-class Heidelberg and Akiyama equipment, including:"}),c.jsxs("ul",{style:{marginBottom:20,paddingLeft:20},children:[c.jsx("li",{children:"Heidelberg Speedmaster Multicolor (Flagship 4-colour press)"}),c.jsx("li",{children:"Akiyama 4-Colour Press with alcohol-damping system"}),c.jsx("li",{children:"Heidelberg Autoplate automated plate-loading system"}),c.jsx("li",{children:"Heidelberg SORDZ 2-Colour press (25×36 inches)"}),c.jsx("li",{children:"Industrial-grade thermal lamination machines"}),c.jsx("li",{children:"Automatic paper cutting machines with ±0.01mm accuracy"})]}),c.jsx("h3",{style:{fontSize:"18px",fontWeight:600,color:"#0ea5e9",marginBottom:12,marginTop:24},children:"Why Choose Us"}),c.jsxs("div",{style:{display:"grid",gridTemplateColumns:i?"1fr":"repeat(3, 1fr)",gap:16,marginTop:16,marginBottom:24},children:[c.jsxs("div",{style:{padding:16,background:e?"rgba(255,255,255,0.05)":"rgba(14,165,233,0.05)",borderRadius:12,border:`1px solid ${e?"rgba(255,255,255,0.1)":"rgba(14,165,233,0.2)"}`},children:[c.jsx("div",{style:{fontSize:24,marginBottom:8},children:"🎯"}),c.jsx("h4",{style:{fontWeight:600,marginBottom:4},children:"30+ Years Experience"}),c.jsx("p",{style:{fontSize:"14px",color:e?"rgba(255,255,255,0.6)":"#475569"},children:"Trusted by thousands of businesses since 1995"})]}),c.jsxs("div",{style:{padding:16,background:e?"rgba(255,255,255,0.05)":"rgba(14,165,233,0.05)",borderRadius:12,border:`1px solid ${e?"rgba(255,255,255,0.1)":"rgba(14,165,233,0.2)"}`},children:[c.jsx("div",{style:{fontSize:24,marginBottom:8},children:"⚡"}),c.jsx("h4",{style:{fontWeight:600,marginBottom:4},children:"Fast Turnaround"}),c.jsx("p",{style:{fontSize:"14px",color:e?"rgba(255,255,255,0.6)":"#475569"},children:"Quick delivery without compromise on quality"})]}),c.jsxs("div",{style:{padding:16,background:e?"rgba(255,255,255,0.05)":"rgba(14,165,233,0.05)",borderRadius:12,border:`1px solid ${e?"rgba(255,255,255,0.1)":"rgba(14,165,233,0.2)"}`},children:[c.jsx("div",{style:{fontSize:24,marginBottom:8},children:"🏆"}),c.jsx("h4",{style:{fontWeight:600,marginBottom:4},children:"Premium Quality"}),c.jsx("p",{style:{fontSize:"14px",color:e?"rgba(255,255,255,0.6)":"#475569"},children:"Every print meets the highest standards"})]})]}),c.jsx("p",{style:{fontStyle:"italic",color:"#0ea5e9",textAlign:"center",marginTop:24,padding:16,borderTop:`1px solid ${e?"rgba(255,255,255,0.1)":"rgba(14,165,233,0.2)"}`},children:'"We welcome publishers, authors, and businesses for live demonstrations at our facility in Dilshad Garden."'})]})]})})]})}function gx({target:t,suffix:e,label:n,isDark:r,isVisible:i,delay:o}){const[s,a]=P.useState(0),l=Ye.useRef(!1);return P.useEffect(()=>{if(!i||l.current)return;l.current=!0;const u=1600,d=o*1e3;function p(v){return 1-Math.pow(1-v,3)}let g;const y=setTimeout(()=>{const v=performance.now();function w(C){const h=Math.min((C-v)/u,1);a(Math.floor(p(h)*t)),h<1?g=requestAnimationFrame(w):a(t)}g=requestAnimationFrame(w)},d);return()=>{clearTimeout(y),cancelAnimationFrame(g)}},[i,t,o]),c.jsxs("div",{className:"hero-stat",style:{opacity:i?1:0,animation:i?`hero-counter 0.5s ease-out ${.38+o}s both`:"none"},children:[c.jsxs("div",{className:"hero-stat-num",style:{color:r?void 0:"#0f172a",WebkitTextFillColor:r?void 0:"#0f172a",fontVariantNumeric:"tabular-nums",minWidth:"3.5ch"},children:[s,e]}),c.jsx("div",{className:"hero-stat-label",style:{color:r?void 0:"rgba(0,0,0,0.40)"},children:n})]})}const mx=`
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
`,yx=[{title:"Bulk Book Printing",desc:"High-volume printing for publishers, authors, and institutions. Consistent quality across thousands of copies — textbooks, novels, catalogs, and manuals.",icon:V2,features:["Perfect binding","Case binding","Saddle stitch","Spiral binding"],accent:"#0ea5e9",accentLight:"rgba(14,165,233,0.10)",accentBorder:"rgba(14,165,233,0.22)",accentGlow:"rgba(14,165,233,0.28)"},{title:"Thermal Gloss Lamination",desc:"Premium gloss lamination using Fevicol-based adhesives. A shiny, protective finish that makes colours pop and stands up to daily handling.",icon:vh,features:["High-gloss finish","Scratch-resistant","Water-resistant","UV protection"],accent:"#8b5cf6",accentLight:"rgba(139,92,246,0.10)",accentBorder:"rgba(139,92,246,0.22)",accentGlow:"rgba(139,92,246,0.28)"},{title:"Matte Lamination",desc:"Sophisticated, non-reflective finish using Fevicol-based adhesives. The go-to for premium covers that need to feel as good as they look.",icon:gh,features:["Non-reflective finish","Soft-touch feel","Fingerprint resistant","Professional look"],accent:"#10b981",accentLight:"rgba(16,185,129,0.10)",accentBorder:"rgba(16,185,129,0.22)",accentGlow:"rgba(16,185,129,0.28)"},{title:"Soft-Touch Lamination",desc:"Velvety, luxurious texture that turns every printed piece into an experience. Ideal for book covers, premium brochures, and collector's editions.",icon:q2,features:["Velvety smooth finish","Premium feel","Scuff-resistant","Enhances colours"],accent:"#f59e0b",accentLight:"rgba(245,158,11,0.10)",accentBorder:"rgba(245,158,11,0.22)",accentGlow:"rgba(245,158,11,0.28)"},{title:"Title Printing",desc:"Custom title work for book spines, special-edition covers, and branded collateral. Every detail crafted to make your title unforgettable.",icon:nx,features:["Embossing / Debossing","Spot UV","Digital printing","Custom fonts"],accent:"#ec4899",accentLight:"rgba(236,72,153,0.10)",accentBorder:"rgba(236,72,153,0.22)",accentGlow:"rgba(236,72,153,0.28)"}];function vx({isDark:t,c:e,isMobile:n,isTablet:r}){const[i,o]=ai(),s=te.primary,a=te.grad;return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:mx}),c.jsx("style",{children:`:root { --ps-grad: ${a}; }`}),c.jsxs("section",{ref:i,style:{padding:n?"72px 20px":"110px 40px",maxWidth:1200,margin:"0 auto"},children:[c.jsxs("div",{style:{textAlign:"center",marginBottom:n?44:64,opacity:o?1:0,animation:o?"ps-fadeUp 0.5s ease-out 0s both":"none"},children:[c.jsx("div",{className:"ps-eyebrow",style:{color:s,marginBottom:16,justifyContent:"center"},children:"What we offer"}),c.jsxs("h2",{style:{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:n?"36px":"54px",fontWeight:400,letterSpacing:"-0.025em",lineHeight:1.08,color:e.text,margin:"0 0 28px"},children:["Our Printing"," ",c.jsx("em",{style:{fontStyle:"italic",background:a,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"Services"})]}),c.jsx("div",{className:"ps-intro",style:{display:"inline-block",maxWidth:580,textAlign:"left",padding:"16px 22px 16px 28px",background:t?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.028)",border:`1px solid ${t?"rgba(255,255,255,0.09)":"rgba(0,0,0,0.075)"}`,borderRadius:12},children:c.jsx("p",{style:{margin:0,fontFamily:"'DM Sans', sans-serif",fontSize:n?"13.5px":"14.5px",lineHeight:1.75,color:e.textMid??e.textDim},children:"Specialising in high-quality bulk book printing and professional lamination services. We use premium Fevicol-based adhesives, serving publishers, authors, and businesses across Delhi."})})]}),c.jsx("div",{style:{display:"grid",gridTemplateColumns:n?"1fr":r?"repeat(2, 1fr)":"repeat(3, 1fr)",gap:n?16:20},children:yx.map((l,u)=>c.jsx(xx,{...l,index:u+1,isDark:t,c:e,isMobile:n,isVisible:o,delay:.07+u*.07},l.title))})]})]})}function xx({title:t,desc:e,icon:n,features:r,accent:i,accentLight:o,accentBorder:s,accentGlow:a,index:l,isDark:u,c:d,isMobile:p,isVisible:g,delay:y}){const[v,w]=P.useState(!1),C=v?u?"rgba(255,255,255,0.055)":"rgba(255,255,255,1)":u?"rgba(255,255,255,0.03)":"rgba(255,255,255,0.82)",h=v?u?"rgba(255,255,255,0.14)":"rgba(0,0,0,0.10)":u?"rgba(255,255,255,0.07)":"rgba(0,0,0,0.075)",f=v?u?`0 28px 64px rgba(0,0,0,0.55), 0 0 0 1px ${o}`:`0 20px 56px rgba(0,0,0,0.09), 0 0 0 1px ${o}`:u?"0 1px 3px rgba(0,0,0,0.4)":"0 1px 4px rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.04)";return c.jsxs("div",{className:"ps-card",onMouseEnter:()=>w(!0),onMouseLeave:()=>w(!1),style:{"--ps-accent":i,"--ps-accent-light":o,"--ps-accent-border":s,background:C,border:`1px solid ${h}`,borderRadius:18,padding:p?"28px 22px":"32px 28px",backdropFilter:"blur(14px)",WebkitBackdropFilter:"blur(14px)",boxShadow:f,opacity:g?1:0,animation:g?`ps-fadeUp 0.55s ease-out ${y}s both`:"none",display:"flex",flexDirection:"column"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:22},children:[c.jsx("div",{className:"ps-icon",style:{width:50,height:50,borderRadius:14,background:v?i:o,display:"flex",alignItems:"center",justifyContent:"center",color:v?"#fff":i,boxShadow:v?`0 8px 22px ${a}`:"none",flexShrink:0},children:c.jsx(n,{size:20,strokeWidth:1.75})}),c.jsx("span",{className:"ps-badge",style:{fontFamily:"'DM Sans', sans-serif",fontSize:"11px",fontWeight:700,letterSpacing:"0.10em",color:u?"rgba(255,255,255,0.35)":"rgba(0,0,0,0.22)",opacity:.55,paddingTop:3},children:String(l).padStart(2,"0")})]}),c.jsx("h3",{style:{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:"20px",fontWeight:400,letterSpacing:"-0.01em",lineHeight:1.22,color:d.text,margin:"0 0 10px"},children:t}),c.jsx("p",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:"13.5px",color:d.textDim,lineHeight:1.72,margin:"0 0 22px",flex:1},children:e}),c.jsx("div",{className:"ps-divider",style:{height:"1px",background:v?`linear-gradient(90deg, ${i}55 0%, transparent 100%)`:u?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.07)",marginBottom:18}}),c.jsxs("div",{children:[c.jsx("p",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:"9.5px",fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:i,margin:"0 0 10px"},children:"Includes"}),c.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:r.map((m,x)=>c.jsx("span",{className:"ps-pill",style:{fontFamily:"'DM Sans', sans-serif",fontSize:"11.5px",fontWeight:500,padding:"4px 11px",borderRadius:20,background:u?"rgba(255,255,255,0.07)":o,color:u?"rgba(255,255,255,0.6)":`${i}cc`,border:`1px solid ${u?"rgba(255,255,255,0.1)":s}`},children:m},x))})]})]})}const wx=[{name:"Heidelberg Speedmaster Multicolor",category:"Offset Printing",tag:"Flagship",desc:"The Heidelberg Speedmaster — the world's most trusted multicolour press. Engineered for peak performance with cutting-edge Intellistart technology, delivering unmatched print quality at production speeds that set the industry standard.",spec:"Up to 4-colour"},{name:"Heidelberg Printing Machine",category:"Offset Printing",tag:"Industry Leader",desc:"State-of-the-art Heidelberg — a benchmark in precision engineering. From single-colour to complex multi-colour projects, automated controls, fast plate changes, and flawless registration deliver superior output trusted by professionals worldwide.",spec:"Multi-colour output"},{name:"Akiyama 4-Colour Press",category:"Offset Printing",tag:"Alcohol-Damped",desc:"Akiyama alcohol-damped 4-colour press — size 19×26 inches. Alcohol damping system provides superior ink-water balance for exceptional dot gain control and vivid, consistent colour across the entire sheet.",spec:"Size: 19×26 in"},{name:"Heidelberg Autoplate Machine",category:"Plate Making",tag:"Automated",desc:"Fully automated plate-loading system that eliminates manual handling errors. Reduces makeready time significantly, ensuring consistent plate registration and faster job turnaround for demanding print environments.",spec:"Auto plate loading"},{name:"Heidelberg Speedmaster Multicolor",category:"Offset Printing",tag:"Flagship",desc:"The Heidelberg Speedmaster — the world's most trusted multicolour press. Engineered for peak performance with cutting-edge Intellistart technology, delivering unmatched print quality at production speeds that set the industry standard.",spec:"Up to 4-colour"},{name:"Heidelberg SORDZ 2-Colour",category:"Offset Printing",tag:"Ref. #1447",desc:"Heidelberg SORDZ 2-colour offset printing machine. Sheet size 25×36 inches — perfectly balanced for medium-format commercial work. Renowned for its robust build and consistent colour reproduction across long runs.",spec:"Size: 25×36 in"},{name:"Thermal Lamination Machine",category:"Lamination",tag:"High-Speed",desc:"Industrial-grade thermal lamination delivering flawless gloss and matte finishes using Fevicol-based adhesives. Handles high volumes with precision heat control for bubble-free, scratch-resistant results every time.",spec:"±0.01mm accuracy"},{name:"Automatic Paper Cutting Machine",category:"Finishing",tag:"Ultra Precise",desc:"Automatic paper cutter delivering precise and flawless cuts at incredible speed. Ideal for high-volume printing and paper processing, this machine ensures efficiency and accuracy in every cut — streamlining workflow and maximising productivity.",spec:"High-volume ready"}],bx=`
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
`;function Sx({text:t,isDark:e,c:n,isMobile:r,isTablet:i}){const[o,s]=ai(),a=C0??[],l=u=>a[u]??null;return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:bx}),c.jsx("section",{ref:o,style:{padding:r?"72px 20px":"110px 40px",background:e?"linear-gradient(rgba(2,6,23,0.94), rgba(4,8,28,0.96)), url('https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=1920&q=80')":"linear-gradient(rgba(240,249,255,0.90), rgba(236,246,255,0.92)), url('https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=1920&q=80')",backgroundSize:"cover",backgroundPosition:"center",backgroundAttachment:r?"scroll":"fixed",borderTop:`1px solid ${n.border}`,borderBottom:`1px solid ${n.border}`},children:c.jsxs("div",{style:{maxWidth:1200,margin:"0 auto"},children:[c.jsxs("div",{style:{textAlign:"center",marginBottom:r?40:56,opacity:s?1:0,animation:s?"gl-fadeUp 0.5s ease-out 0s both":"none"},children:[c.jsx("div",{className:"gl-eyebrow",style:{color:"#0ea5e9",justifyContent:"center",marginBottom:14},children:"Our Machinery"}),c.jsxs("h2",{style:{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:r?"34px":"52px",fontWeight:400,letterSpacing:"-0.025em",lineHeight:1.08,color:e?"#f1f5f9":"#0f172a",margin:"0 0 16px"},children:["Built for"," ",c.jsx("em",{style:{fontStyle:"italic",background:"linear-gradient(135deg,#0ea5e9,#6366f1)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"Precision"})]}),c.jsx("p",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:r?"14px":"15px",color:e?"rgba(255,255,255,0.42)":"#64748b",maxWidth:520,margin:"0 auto",lineHeight:1.7},children:"World-class Heidelberg and Akiyama equipment — engineered for flawless output, maximum throughput, and zero compromise on quality."})]}),c.jsx("div",{style:{display:"grid",gridTemplateColumns:r?"1fr":i?"repeat(2, 1fr)":"repeat(3, 1fr)",gridAutoRows:r?"220px":"260px",gap:r?14:18},children:wx.map((u,d)=>{const p=d===0&&!r&&!i;return c.jsx(kx,{machine:u,src:l(d),index:d+1,isDark:e,isVisible:s,delay:.06+d*.06,isFeatured:p},d)})}),c.jsxs("div",{className:"gl-yt-quote",style:{opacity:s?1:0,animation:s?"gl-fadeUp 0.5s ease-out 0.5s both":"none"},children:[c.jsx("span",{className:"gl-yt-rule"}),c.jsxs("span",{children:["Want to see these machines in action? Watch live demos on our"," ",c.jsxs("a",{href:"https://youtube.com/@b.k.offset?si=Y3rb_e2Y9oTBsgw7",target:"_blank",rel:"noopener noreferrer",className:"gl-yt-link",children:[c.jsx(Xl,{size:13,strokeWidth:2}),"YouTube channel",c.jsx(Ir,{size:11,strokeWidth:2.5})]})]}),c.jsx("span",{className:"gl-yt-rule"})]})]})})]})}function kx({machine:t,src:e,index:n,isDark:r,isVisible:i,delay:o,isFeatured:s}){const[a,l]=P.useState(!1),u=["linear-gradient(135deg,#0c1a3a,#0ea5e9)","linear-gradient(135deg,#1a0c3a,#6366f1)","linear-gradient(135deg,#0c2a1a,#10b981)","linear-gradient(135deg,#2a1a0c,#f59e0b)","linear-gradient(135deg,#2a0c1a,#ec4899)","linear-gradient(135deg,#0c1a2a,#0ea5e9)","linear-gradient(135deg,#1a2a0c,#84cc16)","linear-gradient(135deg,#2a200c,#f97316)"];return c.jsxs("div",{className:`gl-card${s?" gl-featured":""}`,onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),style:{border:`1px solid ${a?"rgba(14,165,233,0.40)":r?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.08)"}`,boxShadow:a?"0 24px 56px rgba(0,0,0,0.45), 0 0 0 1px rgba(14,165,233,0.15)":"0 2px 8px rgba(0,0,0,0.20)",transform:a?"translateY(-6px)":"translateY(0)",opacity:i?1:0,animation:i?`gl-fadeUp 0.55s ease-out ${o}s both`:"none",background:e?void 0:u[n-1]??"#0c1a3a"},children:[e&&c.jsx("img",{className:"gl-card-img",src:e,alt:t.name,loading:"lazy"}),!e&&c.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",opacity:.15},children:c.jsx(Ua,{size:64,color:"#fff",strokeWidth:1})}),c.jsx("div",{className:"gl-base-grad"}),c.jsx("div",{className:"gl-hover-overlay"}),c.jsx("div",{className:"gl-tag",children:t.category}),c.jsx("div",{className:"gl-index",children:String(n).padStart(2,"0")}),c.jsxs("div",{className:"gl-info",children:[c.jsxs("div",{className:"gl-spec-badge",children:[c.jsx(Ua,{size:10,strokeWidth:2.5}),t.spec]}),c.jsx("div",{className:"gl-machine-name",children:t.name}),c.jsx("div",{style:{display:"inline-block",fontFamily:"'DM Sans', sans-serif",fontSize:"10px",fontWeight:600,letterSpacing:"0.08em",padding:"2px 8px",borderRadius:"999px",background:"rgba(99,102,241,0.22)",color:"#a5b4fc",border:"1px solid rgba(99,102,241,0.30)",marginTop:5},children:t.tag}),c.jsx("div",{className:"gl-desc",children:t.desc})]}),c.jsx("div",{className:"gl-arrow",children:c.jsx(Ir,{size:14,strokeWidth:2.5})})]})}const Vu={layers:{color:"#0ea5e9",glow:"rgba(14,165,233,0.25)",faint:"rgba(14,165,233,0.08)",grad:"linear-gradient(135deg,#0ea5e9,#6366f1)",label:"Capabilities"},zap:{color:"#f59e0b",glow:"rgba(245,158,11,0.25)",faint:"rgba(245,158,11,0.08)",grad:"linear-gradient(135deg,#d97706,#fbbf24)",label:"Reductions"},leaf:{color:"#22c55e",glow:"rgba(34,197,94,0.25)",faint:"rgba(34,197,94,0.08)",grad:"linear-gradient(135deg,#16a34a,#4ade80)",label:"Sustainability"}},_x=`
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
`,Gu=[{key:"layers",icon:gh,titleKey:"woPerfTitle",descKey:"woPerfDesc",itemsKey:"woPerfList",footKey:"woPerfFoot"},{key:"zap",icon:Ua,titleKey:"woEnvTitle",descKey:"woEnvDesc",itemsKey:"woEnvList",footKey:"woEnvFoot"},{key:"leaf",icon:Q2,titleKey:"woSusTitle",descKey:"woSusDesc",itemsKey:"woSusList",footKey:"woSusFoot"}];function Ex({text:t,isDark:e,c:n,isMobile:r,isTablet:i}){var w,C;const[o,s]=ai(),[a,l]=P.useState("layers"),[u,d]=P.useState(!1),p=Vu[a],g=Gu.find(h=>h.key===a),y=e?"#f1f5f9":"#0f172a",v=e?"rgba(255,255,255,0.48)":"#475569";return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:_x}),c.jsx("section",{ref:o,style:{background:e?"linear-gradient(rgba(2,6,23,0.94),rgba(4,8,28,0.96)),url('https://images.unsplash.com/photo-1563906267088-b029e7101114?w=1920&q=80')":"linear-gradient(rgba(250,250,248,0.92),rgba(244,241,236,0.94)),url('https://images.unsplash.com/photo-1563906267088-b029e7101114?w=1920&q=80')",backgroundSize:"cover",backgroundPosition:"center",backgroundAttachment:r?"scroll":"fixed",padding:r?"64px 20px":"88px 40px"},children:c.jsxs("div",{style:{maxWidth:1100,margin:"0 auto",opacity:s?1:0,animation:s?"wo-fadeUp 0.5s ease-out both":"none"},children:[c.jsxs("div",{style:{textAlign:"center",marginBottom:r?32:40},children:[c.jsxs("div",{className:"wo-eyebrow",style:{color:"#0ea5e9",justifyContent:"center",marginBottom:14},children:[c.jsx(tx,{size:11,strokeWidth:2,style:{marginRight:-2}}),t.woTitle]}),c.jsx("h2",{className:"wo-hero-grad",style:{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:r?"30px":"clamp(32px,4.5vw,48px)",fontWeight:400,letterSpacing:"-0.025em",lineHeight:1.1,margin:"0 0 12px"},children:t.woTagline}),c.jsx("p",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:r?"13.5px":"14.5px",color:v,maxWidth:560,margin:"0 auto",lineHeight:1.7},children:t.woHeroDesc})]}),c.jsxs("div",{className:"wo-card",onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),style:{background:u?e?"rgba(255,255,255,0.055)":"rgba(255,255,255,1)":e?"rgba(255,255,255,0.03)":"rgba(255,255,255,0.82)",border:`1px solid ${u?e?"rgba(255,255,255,0.14)":"rgba(0,0,0,0.10)":e?"rgba(255,255,255,0.07)":"rgba(0,0,0,0.075)"}`,borderRadius:20,backdropFilter:"blur(14px)",WebkitBackdropFilter:"blur(14px)",overflow:"hidden",boxShadow:u?e?`0 28px 64px rgba(0,0,0,0.55), 0 0 0 1px ${p.faint}`:`0 20px 56px rgba(0,0,0,0.09), 0 0 0 1px ${p.faint}`:e?"0 1px 3px rgba(0,0,0,0.4)":"0 1px 4px rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.04)"},children:[c.jsx("div",{style:{display:"flex",gap:4,padding:"12px 14px",borderBottom:`1px solid ${e?"rgba(255,255,255,0.07)":"rgba(0,0,0,0.075)"}`,overflowX:"auto",scrollbarWidth:"none",background:e?"rgba(255,255,255,0.025)":"rgba(255,255,255,0.60)",backdropFilter:"blur(14px)",WebkitBackdropFilter:"blur(14px)"},children:Gu.map(({key:h,icon:f})=>{const m=Vu[h],x=h===a;return c.jsxs("button",{className:`wo-tab${x?" wo-tab-active":""}`,onClick:()=>l(h),style:{"--wo-glow":m.glow,"--wo-grad":m.grad,color:x?m.color:v,background:x?e?`${m.faint}`:m.faint:"transparent",borderColor:x?e?`${m.color}30`:`${m.color}28`:"transparent"},children:[c.jsx("div",{className:"wo-tab-icon",style:{background:x?m.grad:"transparent",boxShadow:x?`0 2px 8px ${m.glow}`:"none",color:x?"#fff":m.color},children:c.jsx(f,{size:13,strokeWidth:2})}),m.label]},h)})}),c.jsxs("div",{className:"wo-panel-content",style:{display:"grid",gridTemplateColumns:r?"1fr":"1fr 1fr",gap:0},children:[c.jsxs("div",{style:{padding:r?"28px 24px":"36px 40px",borderRight:r?"none":`1px solid ${e?"rgba(255,255,255,0.07)":"rgba(0,0,0,0.075)"}`,borderBottom:r?`1px solid ${e?"rgba(255,255,255,0.07)":"rgba(0,0,0,0.075)"}`:"none",display:"flex",flexDirection:"column",gap:16,background:e?"rgba(255,255,255,0.02)":"rgba(255,255,255,0.82)"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14},children:[c.jsx("div",{style:{width:44,height:44,borderRadius:12,background:p.grad,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",boxShadow:`0 6px 18px ${p.glow}`,flexShrink:0},children:g&&c.jsx(g.icon,{size:18,strokeWidth:1.75})}),c.jsx("h3",{style:{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:r?"18px":"22px",fontWeight:400,letterSpacing:"-0.02em",color:y,lineHeight:1.2,margin:0},children:t[g.titleKey]})]}),c.jsx("p",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:"13.5px",color:v,lineHeight:1.75,margin:0,flex:1},children:t[g.descKey]}),t[g.footKey]&&c.jsx("div",{className:"wo-quote",style:{"--wo-grad":p.grad,background:e?"rgba(255,255,255,0.04)":p.faint,border:`1px solid ${e?"rgba(255,255,255,0.07)":`${p.color}22`}`},children:c.jsx("p",{style:{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:"13.5px",fontStyle:"italic",color:v,lineHeight:1.7,margin:0},children:t[g.footKey]})})]}),c.jsxs("div",{style:{padding:r?"24px":"28px 32px",background:e?"rgba(255,255,255,0.03)":"rgba(255,255,255,0.55)"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:14,paddingBottom:12,borderBottom:`1px solid ${e?"rgba(255,255,255,0.07)":`${p.color}18`}`},children:[c.jsx("div",{style:{width:7,height:7,borderRadius:"50%",background:p.grad,boxShadow:`0 0 7px ${p.glow}`}}),c.jsx("span",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:"9.5px",fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:p.color},children:p.label}),c.jsxs("span",{style:{marginLeft:"auto",fontFamily:"'DM Sans', sans-serif",fontSize:"11px",color:e?"rgba(255,255,255,0.22)":"rgba(0,0,0,0.25)"},children:[((w=t[g.itemsKey])==null?void 0:w.length)??0," items"]})]}),c.jsx("div",{style:{display:"flex",flexDirection:"column",gap:3},children:(C=t[g.itemsKey])==null?void 0:C.map((h,f)=>c.jsx(Tx,{label:h,a:p,isDark:e},f))})]})]},a)]}),t.woHeroDesc2&&c.jsx("p",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:"13px",color:e?"rgba(255,255,255,0.28)":"rgba(0,0,0,0.38)",textAlign:"center",marginTop:20,lineHeight:1.6,maxWidth:600,margin:"20px auto 0"},children:t.woHeroDesc2})]})})]})}function Tx({label:t,a:e,isDark:n}){const[r,i]=P.useState(!1);return c.jsxs("div",{className:"wo-item",onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),style:{background:r?e.faint:"transparent",borderColor:r?`${e.color}40`:"transparent"},children:[c.jsx("div",{className:"wo-check",style:{background:r?e.grad:n?"rgba(255,255,255,0.07)":e.faint,boxShadow:r?`0 2px 8px ${e.glow}`:"none",border:r?"none":`1px solid ${e.color}44`},children:c.jsx("svg",{width:"8",height:"8",viewBox:"0 0 10 10",fill:"none",children:c.jsx("path",{d:"M2 5.5L4 7.5L8 3",stroke:r?"#fff":e.color,strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})}),c.jsx("span",{className:"wo-item-label",style:{color:r?n?"#f1f5f9":"#0f172a":n?"rgba(255,255,255,0.55)":"#475569",fontWeight:r?600:400},children:t}),c.jsx(za,{size:12,strokeWidth:2,style:{marginLeft:"auto",flexShrink:0,color:e.color,opacity:r?.75:0,transform:r?"translateX(0)":"translateX(-4px)",transition:"opacity 0.18s ease, transform 0.18s ease"}})]})}const Ix=`
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
`,Ku="https://maps.app.goo.gl/GQqACqym97FV1PYb9",Yu="Street No. 2, Zulfe Bengal, Dilshad Garden, Delhi — 110095",Cx=[{day:"Monday – Sunday",time:"10:00 AM – 6:00 PM",open:!0},{day:"Tuesday",time:"Closed",open:!1}];function Px({text:t,c:e,isMobile:n}){var v;const[r,i]=ai(),[o,s]=P.useState(!1),[a,l]=P.useState(!1);(v=e==null?void 0:e.bg)==null||v.includes("2");const u=(e==null?void 0:e.border)??"rgba(0,0,0,0.08)",d=(e==null?void 0:e.surf)??"rgba(255,255,255,0.85)",p=(e==null?void 0:e.text)??"#0f172a",g=(e==null?void 0:e.textDim)??"#64748b",y=()=>{var w;(w=navigator.clipboard)==null||w.writeText(Yu).then(()=>{s(!0),setTimeout(()=>s(!1),2e3)})};return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:Ix}),c.jsxs("section",{ref:r,style:{padding:n?"72px 20px":"110px 40px",maxWidth:1200,margin:"0 auto"},children:[c.jsxs("div",{style:{textAlign:"center",marginBottom:n?36:52,opacity:i?1:0,animation:i?"loc-fadeUp 0.5s ease-out both":"none"},children:[c.jsxs("div",{className:"loc-eyebrow",style:{color:"#0ea5e9",justifyContent:"center",marginBottom:14},children:[c.jsx(Fa,{size:11,strokeWidth:2,style:{marginRight:-2}}),"Find Us"]}),c.jsxs("h2",{style:{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:n?"32px":"clamp(34px,4vw,48px)",fontWeight:400,letterSpacing:"-0.025em",lineHeight:1.1,color:p,margin:"0 0 12px"},children:["Visit Our"," ",c.jsx("em",{style:{fontStyle:"italic",background:"linear-gradient(135deg,#0ea5e9,#6366f1)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"Press"})]}),c.jsx("p",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:"14.5px",color:g,maxWidth:420,margin:"0 auto",lineHeight:1.7},children:"Come see our machines in person. We welcome publishers, authors, and businesses for a live demonstration."})]}),c.jsxs("div",{style:{display:"grid",gridTemplateColumns:n?"1fr":"380px 1fr",gap:n?20:24,alignItems:"start",opacity:i?1:0,animation:i?"loc-fadeUp 0.55s ease-out 0.1s both":"none"},children:[c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:14},children:[c.jsx("div",{className:"loc-card",style:{"--loc-grad":"linear-gradient(90deg,#0ea5e9,#6366f1)","--loc-border":u,background:d,border:`1px solid ${u}`,backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)",padding:"22px 22px 20px",boxShadow:"0 1px 4px rgba(0,0,0,0.05)"},children:c.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:14},children:[c.jsxs("div",{style:{position:"relative",flexShrink:0,marginTop:2},children:[c.jsx("div",{className:"loc-ping",style:{width:32,height:32,top:-6,left:-6}}),c.jsx("div",{className:"loc-ping",style:{width:32,height:32,top:-6,left:-6,animationDelay:"0.7s"}}),c.jsx(Fa,{size:20,strokeWidth:1.75,color:"#0ea5e9",className:"loc-pin-icon"})]}),c.jsxs("div",{style:{flex:1},children:[c.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:"9.5px",fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:"#0ea5e9",marginBottom:6},children:"Address"}),c.jsx("p",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:"14px",color:p,lineHeight:1.65,margin:"0 0 12px",fontWeight:500},children:Yu}),c.jsx("button",{className:"loc-copy-btn",onClick:y,style:{color:o?"#22c55e":g,background:o?"rgba(34,197,94,0.08)":"transparent"},children:o?c.jsxs(c.Fragment,{children:[c.jsx(G2,{size:11,strokeWidth:2.5})," Copied!"]}):c.jsxs(c.Fragment,{children:[c.jsx(Y2,{size:11,strokeWidth:2})," Copy address"]})})]})]})}),c.jsxs("div",{className:"loc-card",style:{"--loc-grad":"linear-gradient(90deg,#f59e0b,#f97316)","--loc-border":u,background:d,border:`1px solid ${u}`,backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)",padding:"22px 22px 20px",boxShadow:"0 1px 4px rgba(0,0,0,0.05)"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:14},children:[c.jsx("div",{style:{width:34,height:34,borderRadius:10,background:"rgba(245,158,11,0.10)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:c.jsx(fh,{size:16,strokeWidth:1.75,color:"#f59e0b"})}),c.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:"9.5px",fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:"#f59e0b"},children:"Working Hours"})]}),c.jsx("div",{style:{"--loc-border":u},children:Cx.map(({day:w,time:C,open:h})=>c.jsxs("div",{className:"loc-hours-row",style:{"--loc-border":u},children:[c.jsx("span",{style:{fontFamily:"'DM Sans', sans-serif",color:g,fontWeight:400},children:w}),c.jsxs("span",{style:{fontFamily:"'DM Sans', sans-serif",fontWeight:600,color:h?p:"#ef4444",fontSize:"12.5px",display:"flex",alignItems:"center",gap:5},children:[c.jsx("span",{style:{width:6,height:6,borderRadius:"50%",background:h?"#22c55e":"#ef4444",display:"inline-block",flexShrink:0}}),C]})]},w))})]}),c.jsxs("a",{href:Ku,target:"_blank",rel:"noopener noreferrer",className:"loc-dir-btn",style:{justifyContent:"center"},children:[c.jsx(ex,{size:15,strokeWidth:2}),"Get Directions",c.jsx(Bu,{size:13,strokeWidth:2,style:{opacity:.7}})]})]}),c.jsxs("div",{className:"loc-map-wrap",onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),style:{border:`1px solid ${a?"rgba(14,165,233,0.40)":u}`,boxShadow:a?"0 20px 56px rgba(0,0,0,0.12), 0 0 0 1px rgba(14,165,233,0.15)":"0 2px 8px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.04)"},children:[c.jsx("iframe",{title:"BK Offset Printing Location",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.623543258682!2d77.30097397549766!3d28.68163887564272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb9fa8843451%3A0x4d76d14b74785b08!2sZulfe%20Bengal%2C%20Dilshad%20Garden%2C%20Delhi%2C%20110095!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",width:"100%",height:n?"300":"450",style:{border:"none",display:"block",filter:"saturate(1.1) contrast(1.02)"},loading:"lazy",allowFullScreen:!0,referrerPolicy:"no-referrer-when-downgrade"}),c.jsxs("a",{href:Ku,target:"_blank",rel:"noopener noreferrer",style:{position:"absolute",bottom:14,right:14,display:"inline-flex",alignItems:"center",gap:6,background:"rgba(2,6,23,0.80)",backdropFilter:"blur(8px)",WebkitBackdropFilter:"blur(8px)",color:"#fff",padding:"7px 14px",borderRadius:"999px",fontSize:"12px",fontFamily:"'DM Sans', sans-serif",fontWeight:600,textDecoration:"none",border:"1px solid rgba(255,255,255,0.12)",transition:"background 0.2s ease, border-color 0.2s ease"},onMouseEnter:w=>{w.currentTarget.style.background="rgba(14,165,233,0.85)"},onMouseLeave:w=>{w.currentTarget.style.background="rgba(2,6,23,0.80)"},children:[c.jsx(Bu,{size:11,strokeWidth:2.5}),"Open in Google Maps"]})]})]})]})]})}function Ax({isDark:t,onClose:e}){const[n,r]=P.useState(!0),[i,o]=P.useState(""),[s,a]=P.useState(""),[l,u]=P.useState(""),[d,p]=P.useState(""),[g,y]=P.useState(""),[v,w]=P.useState(""),[C,h]=P.useState(!1),{loginWithGoogle:f,loginWithEmail:m,registerWithEmail:x,resetPassword:S}=Yo(),_=async()=>{y(""),h(!0);const{error:k}=await f();k?(y(k),h(!1)):e()},T=async k=>{if(k.preventDefault(),y(""),h(!0),n){if(!i||!s){y("Enter email and password"),h(!1);return}const{error:M}=await m(i,s);M?(y(M),h(!1)):e()}else{if(!i||!s||!l||!d){y("Fill all fields"),h(!1);return}const{error:M}=await x(i,s,l,d);M?(y(M),h(!1)):(w("Account created! Check your email."),o(""),a(""),u(""),p(""),setTimeout(()=>r(!0),2e3))}};return c.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",backdropFilter:"blur(5px)",zIndex:2e3,display:"flex",alignItems:"center",justifyContent:"center",padding:"20px"},children:c.jsxs("div",{style:{background:t?"#1e293b":"#fff",borderRadius:"16px",padding:"32px",width:"100%",maxWidth:"400px",position:"relative"},children:[c.jsx("button",{onClick:e,style:{position:"absolute",top:"16px",right:"16px",background:"none",border:"none",cursor:"pointer",color:t?"#94a3b8":"#64748b"},children:c.jsx(Ql,{size:20})}),c.jsxs("div",{style:{textAlign:"center",marginBottom:"24px"},children:[c.jsx("div",{style:{width:"64px",height:"64px",borderRadius:"50%",background:"linear-gradient(135deg, #0284c7, #06b6d4)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 16px"},children:c.jsx(ql,{size:32,color:"#fff"})}),c.jsx("h2",{style:{color:t?"#f1f5f9":"#0f172a"},children:n?"Welcome Back":"Create Account"})]}),v&&c.jsx("div",{style:{background:"#d4edda",color:"#155724",padding:"12px",borderRadius:"8px",marginBottom:"16px",textAlign:"center"},children:v}),g&&c.jsx("div",{style:{background:"#fee2e2",color:"#ef4444",padding:"12px",borderRadius:"8px",marginBottom:"16px",textAlign:"center"},children:g}),c.jsxs("button",{onClick:_,disabled:C,style:{width:"100%",padding:"12px",background:"#fff",border:"1px solid #cbd5e1",borderRadius:"8px",fontSize:"14px",fontWeight:600,color:"#475569",cursor:C?"not-allowed":"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"10px",marginBottom:"20px",opacity:C?.5:1},children:[c.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",children:[c.jsx("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),c.jsx("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),c.jsx("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"}),c.jsx("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"})]}),"Continue with Google"]}),c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginBottom:"20px"},children:[c.jsx("div",{style:{flex:1,height:"1px",background:"#cbd5e1"}}),c.jsx("span",{style:{color:"#94a3b8"},children:"or"}),c.jsx("div",{style:{flex:1,height:"1px",background:"#cbd5e1"}})]}),c.jsxs("form",{onSubmit:T,children:[!n&&c.jsxs(c.Fragment,{children:[c.jsx("input",{type:"text",placeholder:"First Name",value:l,onChange:k=>u(k.target.value),disabled:C,style:{width:"100%",padding:"10px",border:"1px solid #cbd5e1",borderRadius:"8px",marginBottom:"16px",background:t?"#0f172a":"#fff",color:t?"#f1f5f9":"#0f172a"},required:!0}),c.jsx("input",{type:"text",placeholder:"Last Name",value:d,onChange:k=>p(k.target.value),disabled:C,style:{width:"100%",padding:"10px",border:"1px solid #cbd5e1",borderRadius:"8px",marginBottom:"16px",background:t?"#0f172a":"#fff",color:t?"#f1f5f9":"#0f172a"},required:!0})]}),c.jsx("input",{type:"email",placeholder:"Email",value:i,onChange:k=>o(k.target.value),disabled:C,style:{width:"100%",padding:"10px",border:"1px solid #cbd5e1",borderRadius:"8px",marginBottom:"16px",background:t?"#0f172a":"#fff",color:t?"#f1f5f9":"#0f172a"},required:!0}),c.jsx("input",{type:"password",placeholder:"Password",value:s,onChange:k=>a(k.target.value),disabled:C,style:{width:"100%",padding:"10px",border:"1px solid #cbd5e1",borderRadius:"8px",marginBottom:"16px",background:t?"#0f172a":"#fff",color:t?"#f1f5f9":"#0f172a"},required:!0}),n&&c.jsx("button",{type:"button",onClick:()=>{},style:{background:"none",border:"none",color:"#0284c7",cursor:"pointer",fontSize:"13px",marginBottom:"16px",display:"block",textAlign:"right",width:"100%"},children:"Forgot Password?"}),c.jsx("button",{type:"submit",disabled:C,style:{width:"100%",padding:"12px",background:C?"#cbd5e1":"linear-gradient(135deg, #0284c7, #06b6d4)",color:C?"#64748b":"#fff",border:"none",borderRadius:"8px",fontSize:"16px",fontWeight:600,cursor:C?"not-allowed":"pointer",marginBottom:"16px"},children:C?"Processing...":n?"Sign In":"Create Account"})]}),c.jsxs("p",{style:{textAlign:"center",color:t?"#94a3b8":"#64748b"},children:[n?"No account? ":"Have an account? ",c.jsx("button",{onClick:()=>{r(!n),y(""),w("")},style:{background:"none",border:"none",color:"#0284c7",cursor:"pointer",fontWeight:600},children:n?"Register":"Sign In"})]})]})})}function Nx(){const{isDark:t}=hu(),{user:e}=Yo(),[n,r]=P.useState(()=>sessionStorage.getItem("bk_lang")||"en"),[i,o]=P.useState(!1),[s,a]=P.useState(!1),[l,u]=P.useState(window.innerWidth),d=gp(t),p=_0[n],g=l<640;P.useEffect(()=>(s?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[s]),P.useEffect(()=>{const v=()=>o(window.scrollY>I0),w=()=>u(window.innerWidth);return window.addEventListener("scroll",v),window.addEventListener("resize",w),()=>{window.removeEventListener("scroll",v),window.removeEventListener("resize",w)}},[]);const y=()=>{const v=n==="en"?"hi":"en";r(v),sessionStorage.setItem("bk_lang",v)};return c.jsxs(c.Fragment,{children:[c.jsx(ux,{title:"BK Offset Printing - Premium Book & Commercial Printing Services in Delhi",description:"Premium offset printing in Street no. 2, Zulfe Bengal, Dilshad Garden, Delhi. Specializing in book printing, visiting cards, brochures, and commercial printing since 1995.",keywords:"offset printing, book printing services, printing press near me, custom book printing, visiting cards, brochure printing, Delhi printing services"}),c.jsx(ox,{isDark:t,toggleTheme:hu().toggleTheme,lang:n,toggleLang:y,text:p,onAuthClick:()=>a(!0),scrolled:i}),c.jsxs("div",{style:{fontFamily:te.fontBody,minHeight:"100vh",background:t?"linear-gradient(to bottom, rgba(2,6,23,0.92), rgba(2,6,23,0.95)), url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&q=80')":"linear-gradient(to bottom, rgba(255,255,255,0.88), rgba(248,250,252,0.92)), url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&q=80')",backgroundSize:"cover",backgroundAttachment:g?"scroll":"fixed",backgroundPosition:"center",backgroundRepeat:"no-repeat",color:d.text,transition:"background 0.35s, color 0.35s"},children:[c.jsx(hx,{text:p,isDark:t,c:d,isAuth:!!e,isMobile:g,setShowAuth:a}),c.jsx(vx,{text:p,isDark:t,c:d,isMobile:g}),c.jsx(Sx,{text:p,isDark:t,c:d,isMobile:g}),c.jsx(Ex,{text:p,isDark:t,c:d,isMobile:g}),c.jsx(Px,{text:p,c:d,isMobile:g}),c.jsx(lx,{isDark:t,isMobile:g}),c.jsx(cx,{isDark:t,isAuthenticated:!!e,windowWidth:l})]}),s&&c.jsx(Ax,{isDark:t,onClose:()=>a(!1)})]})}function Rx(){return c.jsx(A0,{children:c.jsx(B2,{children:c.jsx(Nx,{})})})}js.createRoot(document.getElementById("root")).render(c.jsx(Ye.StrictMode,{children:c.jsx(hp,{children:c.jsx(Rx,{})})}));
