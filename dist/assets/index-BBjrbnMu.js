(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function e(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(o){if(o.ep)return;o.ep=!0;const c=e(o);fetch(o.href,c)}})();function eS(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Td={exports:{}},El={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bv;function zE(){if(Bv)return El;Bv=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function e(s,o,c){var f=null;if(c!==void 0&&(f=""+c),o.key!==void 0&&(f=""+o.key),"key"in o){c={};for(var h in o)h!=="key"&&(c[h]=o[h])}else c=o;return o=c.ref,{$$typeof:r,type:s,key:f,ref:o!==void 0?o:null,props:c}}return El.Fragment=t,El.jsx=e,El.jsxs=e,El}var zv;function nS(){return zv||(zv=1,Td.exports=zE()),Td.exports}var nt=nS(),Ad={exports:{}},le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fv;function FE(){if(Fv)return le;Fv=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),e=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function y(O){return O===null||typeof O!="object"?null:(O=v&&O[v]||O["@@iterator"],typeof O=="function"?O:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,T={};function b(O,et,xt){this.props=O,this.context=et,this.refs=T,this.updater=xt||S}b.prototype.isReactComponent={},b.prototype.setState=function(O,et){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,et,"setState")},b.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function x(){}x.prototype=b.prototype;function N(O,et,xt){this.props=O,this.context=et,this.refs=T,this.updater=xt||S}var L=N.prototype=new x;L.constructor=N,M(L,b.prototype),L.isPureReactComponent=!0;var w=Array.isArray,I={H:null,A:null,T:null,S:null,V:null},H=Object.prototype.hasOwnProperty;function B(O,et,xt,Mt,$,gt){return xt=gt.ref,{$$typeof:r,type:O,key:et,ref:xt!==void 0?xt:null,props:gt}}function X(O,et){return B(O.type,et,void 0,void 0,void 0,O.props)}function U(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function D(O){var et={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(xt){return et[xt]})}var k=/\/+/g;function ct(O,et){return typeof O=="object"&&O!==null&&O.key!=null?D(""+O.key):et.toString(36)}function rt(){}function mt(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(rt,rt):(O.status="pending",O.then(function(et){O.status==="pending"&&(O.status="fulfilled",O.value=et)},function(et){O.status==="pending"&&(O.status="rejected",O.reason=et)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function ft(O,et,xt,Mt,$){var gt=typeof O;(gt==="undefined"||gt==="boolean")&&(O=null);var bt=!1;if(O===null)bt=!0;else switch(gt){case"bigint":case"string":case"number":bt=!0;break;case"object":switch(O.$$typeof){case r:case t:bt=!0;break;case g:return bt=O._init,ft(bt(O._payload),et,xt,Mt,$)}}if(bt)return $=$(O),bt=Mt===""?"."+ct(O,0):Mt,w($)?(xt="",bt!=null&&(xt=bt.replace(k,"$&/")+"/"),ft($,et,xt,"",function(fe){return fe})):$!=null&&(U($)&&($=X($,xt+($.key==null||O&&O.key===$.key?"":(""+$.key).replace(k,"$&/")+"/")+bt)),et.push($)),1;bt=0;var Rt=Mt===""?".":Mt+":";if(w(O))for(var It=0;It<O.length;It++)Mt=O[It],gt=Rt+ct(Mt,It),bt+=ft(Mt,et,xt,gt,$);else if(It=y(O),typeof It=="function")for(O=It.call(O),It=0;!(Mt=O.next()).done;)Mt=Mt.value,gt=Rt+ct(Mt,It++),bt+=ft(Mt,et,xt,gt,$);else if(gt==="object"){if(typeof O.then=="function")return ft(mt(O),et,xt,Mt,$);throw et=String(O),Error("Objects are not valid as a React child (found: "+(et==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":et)+"). If you meant to render a collection of children, use an array instead.")}return bt}function z(O,et,xt){if(O==null)return O;var Mt=[],$=0;return ft(O,Mt,"","",function(gt){return et.call(xt,gt,$++)}),Mt}function Z(O){if(O._status===-1){var et=O._result;et=et(),et.then(function(xt){(O._status===0||O._status===-1)&&(O._status=1,O._result=xt)},function(xt){(O._status===0||O._status===-1)&&(O._status=2,O._result=xt)}),O._status===-1&&(O._status=0,O._result=et)}if(O._status===1)return O._result.default;throw O._result}var q=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var et=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(et))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function St(){}return le.Children={map:z,forEach:function(O,et,xt){z(O,function(){et.apply(this,arguments)},xt)},count:function(O){var et=0;return z(O,function(){et++}),et},toArray:function(O){return z(O,function(et){return et})||[]},only:function(O){if(!U(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},le.Component=b,le.Fragment=e,le.Profiler=o,le.PureComponent=N,le.StrictMode=s,le.Suspense=d,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,le.__COMPILER_RUNTIME={__proto__:null,c:function(O){return I.H.useMemoCache(O)}},le.cache=function(O){return function(){return O.apply(null,arguments)}},le.cloneElement=function(O,et,xt){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var Mt=M({},O.props),$=O.key,gt=void 0;if(et!=null)for(bt in et.ref!==void 0&&(gt=void 0),et.key!==void 0&&($=""+et.key),et)!H.call(et,bt)||bt==="key"||bt==="__self"||bt==="__source"||bt==="ref"&&et.ref===void 0||(Mt[bt]=et[bt]);var bt=arguments.length-2;if(bt===1)Mt.children=xt;else if(1<bt){for(var Rt=Array(bt),It=0;It<bt;It++)Rt[It]=arguments[It+2];Mt.children=Rt}return B(O.type,$,void 0,void 0,gt,Mt)},le.createContext=function(O){return O={$$typeof:f,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},le.createElement=function(O,et,xt){var Mt,$={},gt=null;if(et!=null)for(Mt in et.key!==void 0&&(gt=""+et.key),et)H.call(et,Mt)&&Mt!=="key"&&Mt!=="__self"&&Mt!=="__source"&&($[Mt]=et[Mt]);var bt=arguments.length-2;if(bt===1)$.children=xt;else if(1<bt){for(var Rt=Array(bt),It=0;It<bt;It++)Rt[It]=arguments[It+2];$.children=Rt}if(O&&O.defaultProps)for(Mt in bt=O.defaultProps,bt)$[Mt]===void 0&&($[Mt]=bt[Mt]);return B(O,gt,void 0,void 0,null,$)},le.createRef=function(){return{current:null}},le.forwardRef=function(O){return{$$typeof:h,render:O}},le.isValidElement=U,le.lazy=function(O){return{$$typeof:g,_payload:{_status:-1,_result:O},_init:Z}},le.memo=function(O,et){return{$$typeof:p,type:O,compare:et===void 0?null:et}},le.startTransition=function(O){var et=I.T,xt={};I.T=xt;try{var Mt=O(),$=I.S;$!==null&&$(xt,Mt),typeof Mt=="object"&&Mt!==null&&typeof Mt.then=="function"&&Mt.then(St,q)}catch(gt){q(gt)}finally{I.T=et}},le.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},le.use=function(O){return I.H.use(O)},le.useActionState=function(O,et,xt){return I.H.useActionState(O,et,xt)},le.useCallback=function(O,et){return I.H.useCallback(O,et)},le.useContext=function(O){return I.H.useContext(O)},le.useDebugValue=function(){},le.useDeferredValue=function(O,et){return I.H.useDeferredValue(O,et)},le.useEffect=function(O,et,xt){var Mt=I.H;if(typeof xt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Mt.useEffect(O,et)},le.useId=function(){return I.H.useId()},le.useImperativeHandle=function(O,et,xt){return I.H.useImperativeHandle(O,et,xt)},le.useInsertionEffect=function(O,et){return I.H.useInsertionEffect(O,et)},le.useLayoutEffect=function(O,et){return I.H.useLayoutEffect(O,et)},le.useMemo=function(O,et){return I.H.useMemo(O,et)},le.useOptimistic=function(O,et){return I.H.useOptimistic(O,et)},le.useReducer=function(O,et,xt){return I.H.useReducer(O,et,xt)},le.useRef=function(O){return I.H.useRef(O)},le.useState=function(O){return I.H.useState(O)},le.useSyncExternalStore=function(O,et,xt){return I.H.useSyncExternalStore(O,et,xt)},le.useTransition=function(){return I.H.useTransition()},le.version="19.1.0",le}var Hv;function pf(){return Hv||(Hv=1,Ad.exports=FE()),Ad.exports}var $e=pf();const Na=eS($e);var wd={exports:{}},Tl={},Rd={exports:{}},Cd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gv;function HE(){return Gv||(Gv=1,function(r){function t(z,Z){var q=z.length;z.push(Z);t:for(;0<q;){var St=q-1>>>1,O=z[St];if(0<o(O,Z))z[St]=Z,z[q]=O,q=St;else break t}}function e(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var Z=z[0],q=z.pop();if(q!==Z){z[0]=q;t:for(var St=0,O=z.length,et=O>>>1;St<et;){var xt=2*(St+1)-1,Mt=z[xt],$=xt+1,gt=z[$];if(0>o(Mt,q))$<O&&0>o(gt,Mt)?(z[St]=gt,z[$]=q,St=$):(z[St]=Mt,z[xt]=q,St=xt);else if($<O&&0>o(gt,q))z[St]=gt,z[$]=q,St=$;else break t}}return Z}function o(z,Z){var q=z.sortIndex-Z.sortIndex;return q!==0?q:z.id-Z.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();r.unstable_now=function(){return f.now()-h}}var d=[],p=[],g=1,v=null,y=3,S=!1,M=!1,T=!1,b=!1,x=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function w(z){for(var Z=e(p);Z!==null;){if(Z.callback===null)s(p);else if(Z.startTime<=z)s(p),Z.sortIndex=Z.expirationTime,t(d,Z);else break;Z=e(p)}}function I(z){if(T=!1,w(z),!M)if(e(d)!==null)M=!0,H||(H=!0,ct());else{var Z=e(p);Z!==null&&ft(I,Z.startTime-z)}}var H=!1,B=-1,X=5,U=-1;function D(){return b?!0:!(r.unstable_now()-U<X)}function k(){if(b=!1,H){var z=r.unstable_now();U=z;var Z=!0;try{t:{M=!1,T&&(T=!1,N(B),B=-1),S=!0;var q=y;try{e:{for(w(z),v=e(d);v!==null&&!(v.expirationTime>z&&D());){var St=v.callback;if(typeof St=="function"){v.callback=null,y=v.priorityLevel;var O=St(v.expirationTime<=z);if(z=r.unstable_now(),typeof O=="function"){v.callback=O,w(z),Z=!0;break e}v===e(d)&&s(d),w(z)}else s(d);v=e(d)}if(v!==null)Z=!0;else{var et=e(p);et!==null&&ft(I,et.startTime-z),Z=!1}}break t}finally{v=null,y=q,S=!1}Z=void 0}}finally{Z?ct():H=!1}}}var ct;if(typeof L=="function")ct=function(){L(k)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,mt=rt.port2;rt.port1.onmessage=k,ct=function(){mt.postMessage(null)}}else ct=function(){x(k,0)};function ft(z,Z){B=x(function(){z(r.unstable_now())},Z)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(z){z.callback=null},r.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<z?Math.floor(1e3/z):5},r.unstable_getCurrentPriorityLevel=function(){return y},r.unstable_next=function(z){switch(y){case 1:case 2:case 3:var Z=3;break;default:Z=y}var q=y;y=Z;try{return z()}finally{y=q}},r.unstable_requestPaint=function(){b=!0},r.unstable_runWithPriority=function(z,Z){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var q=y;y=z;try{return Z()}finally{y=q}},r.unstable_scheduleCallback=function(z,Z,q){var St=r.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?St+q:St):q=St,z){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=q+O,z={id:g++,callback:Z,priorityLevel:z,startTime:q,expirationTime:O,sortIndex:-1},q>St?(z.sortIndex=q,t(p,z),e(d)===null&&z===e(p)&&(T?(N(B),B=-1):T=!0,ft(I,q-St))):(z.sortIndex=O,t(d,z),M||S||(M=!0,H||(H=!0,ct()))),z},r.unstable_shouldYield=D,r.unstable_wrapCallback=function(z){var Z=y;return function(){var q=y;y=Z;try{return z.apply(this,arguments)}finally{y=q}}}}(Cd)),Cd}var kv;function GE(){return kv||(kv=1,Rd.exports=HE()),Rd.exports}var Dd={exports:{}},Fn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vv;function kE(){if(Vv)return Fn;Vv=1;var r=pf();function t(d){var p="https://react.dev/errors/"+d;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+d+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function e(){}var s={d:{f:e,r:function(){throw Error(t(522))},D:e,C:e,L:e,m:e,X:e,S:e,M:e},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(d,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:v==null?null:""+v,children:d,containerInfo:p,implementation:g}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(d,p){if(d==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Fn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Fn.createPortal=function(d,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(d,p,null,g)},Fn.flushSync=function(d){var p=f.T,g=s.p;try{if(f.T=null,s.p=2,d)return d()}finally{f.T=p,s.p=g,s.d.f()}},Fn.preconnect=function(d,p){typeof d=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(d,p))},Fn.prefetchDNS=function(d){typeof d=="string"&&s.d.D(d)},Fn.preinit=function(d,p){if(typeof d=="string"&&p&&typeof p.as=="string"){var g=p.as,v=h(g,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(d,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:y,fetchPriority:S}):g==="script"&&s.d.X(d,{crossOrigin:v,integrity:y,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Fn.preinitModule=function(d,p){if(typeof d=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);s.d.M(d,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(d)},Fn.preload=function(d,p){if(typeof d=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=h(g,p.crossOrigin);s.d.L(d,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Fn.preloadModule=function(d,p){if(typeof d=="string")if(p){var g=h(p.as,p.crossOrigin);s.d.m(d,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(d)},Fn.requestFormReset=function(d){s.d.r(d)},Fn.unstable_batchedUpdates=function(d,p){return d(p)},Fn.useFormState=function(d,p,g){return f.H.useFormState(d,p,g)},Fn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Fn.version="19.1.0",Fn}var Xv;function VE(){if(Xv)return Dd.exports;Xv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Dd.exports=kE(),Dd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jv;function XE(){if(jv)return Tl;jv=1;var r=GE(),t=pf(),e=VE();function s(n){var a="https://react.dev/errors/"+n;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)a+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+n+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function c(n){var a=n,l=n;if(n.alternate)for(;a.return;)a=a.return;else{n=a;do a=n,(a.flags&4098)!==0&&(l=a.return),n=a.return;while(n)}return a.tag===3?l:null}function f(n){if(n.tag===13){var a=n.memoizedState;if(a===null&&(n=n.alternate,n!==null&&(a=n.memoizedState)),a!==null)return a.dehydrated}return null}function h(n){if(c(n)!==n)throw Error(s(188))}function d(n){var a=n.alternate;if(!a){if(a=c(n),a===null)throw Error(s(188));return a!==n?null:n}for(var l=n,u=a;;){var m=l.return;if(m===null)break;var _=m.alternate;if(_===null){if(u=m.return,u!==null){l=u;continue}break}if(m.child===_.child){for(_=m.child;_;){if(_===l)return h(m),n;if(_===u)return h(m),a;_=_.sibling}throw Error(s(188))}if(l.return!==u.return)l=m,u=_;else{for(var E=!1,A=m.child;A;){if(A===l){E=!0,l=m,u=_;break}if(A===u){E=!0,u=m,l=_;break}A=A.sibling}if(!E){for(A=_.child;A;){if(A===l){E=!0,l=_,u=m;break}if(A===u){E=!0,u=_,l=m;break}A=A.sibling}if(!E)throw Error(s(189))}}if(l.alternate!==u)throw Error(s(190))}if(l.tag!==3)throw Error(s(188));return l.stateNode.current===l?n:a}function p(n){var a=n.tag;if(a===5||a===26||a===27||a===6)return n;for(n=n.child;n!==null;){if(a=p(n),a!==null)return a;n=n.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),N=Symbol.for("react.consumer"),L=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function ct(n){return n===null||typeof n!="object"?null:(n=k&&n[k]||n["@@iterator"],typeof n=="function"?n:null)}var rt=Symbol.for("react.client.reference");function mt(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===rt?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case M:return"Fragment";case b:return"Profiler";case T:return"StrictMode";case I:return"Suspense";case H:return"SuspenseList";case U:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case S:return"Portal";case L:return(n.displayName||"Context")+".Provider";case N:return(n._context.displayName||"Context")+".Consumer";case w:var a=n.render;return n=n.displayName,n||(n=a.displayName||a.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case B:return a=n.displayName||null,a!==null?a:mt(n.type)||"Memo";case X:a=n._payload,n=n._init;try{return mt(n(a))}catch{}}return null}var ft=Array.isArray,z=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},St=[],O=-1;function et(n){return{current:n}}function xt(n){0>O||(n.current=St[O],St[O]=null,O--)}function Mt(n,a){O++,St[O]=n.current,n.current=a}var $=et(null),gt=et(null),bt=et(null),Rt=et(null);function It(n,a){switch(Mt(bt,a),Mt(gt,n),Mt($,null),a.nodeType){case 9:case 11:n=(n=a.documentElement)&&(n=n.namespaceURI)?fv(n):0;break;default:if(n=a.tagName,a=a.namespaceURI)a=fv(a),n=hv(a,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}xt($),Mt($,n)}function fe(){xt($),xt(gt),xt(bt)}function Jt(n){n.memoizedState!==null&&Mt(Rt,n);var a=$.current,l=hv(a,n.type);a!==l&&(Mt(gt,n),Mt($,l))}function Ke(n){gt.current===n&&(xt($),xt(gt)),Rt.current===n&&(xt(Rt),yl._currentValue=q)}var We=Object.prototype.hasOwnProperty,ge=r.unstable_scheduleCallback,G=r.unstable_cancelCallback,Zn=r.unstable_shouldYield,Me=r.unstable_requestPaint,ae=r.unstable_now,Yt=r.unstable_getCurrentPriorityLevel,Fe=r.unstable_ImmediatePriority,Xt=r.unstable_UserBlockingPriority,P=r.unstable_NormalPriority,R=r.unstable_LowPriority,it=r.unstable_IdlePriority,yt=r.log,Et=r.unstable_setDisableYieldValue,dt=null,Ft=null;function Ct(n){if(typeof yt=="function"&&Et(n),Ft&&typeof Ft.setStrictMode=="function")try{Ft.setStrictMode(dt,n)}catch{}}var Dt=Math.clz32?Math.clz32:Gt,Ee=Math.log,wt=Math.LN2;function Gt(n){return n>>>=0,n===0?32:31-(Ee(n)/wt|0)|0}var Zt=256,$t=4194304;function Bt(n){var a=n&42;if(a!==0)return a;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function de(n,a,l){var u=n.pendingLanes;if(u===0)return 0;var m=0,_=n.suspendedLanes,E=n.pingedLanes;n=n.warmLanes;var A=u&134217727;return A!==0?(u=A&~_,u!==0?m=Bt(u):(E&=A,E!==0?m=Bt(E):l||(l=A&~n,l!==0&&(m=Bt(l))))):(A=u&~_,A!==0?m=Bt(A):E!==0?m=Bt(E):l||(l=u&~n,l!==0&&(m=Bt(l)))),m===0?0:a!==0&&a!==m&&(a&_)===0&&(_=m&-m,l=a&-a,_>=l||_===32&&(l&4194048)!==0)?a:m}function ie(n,a){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&a)===0}function He(n,a){switch(n){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function j(){var n=Zt;return Zt<<=1,(Zt&4194048)===0&&(Zt=256),n}function Ot(){var n=$t;return $t<<=1,($t&62914560)===0&&($t=4194304),n}function ut(n){for(var a=[],l=0;31>l;l++)a.push(n);return a}function _t(n,a){n.pendingLanes|=a,a!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function zt(n,a,l,u,m,_){var E=n.pendingLanes;n.pendingLanes=l,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=l,n.entangledLanes&=l,n.errorRecoveryDisabledLanes&=l,n.shellSuspendCounter=0;var A=n.entanglements,F=n.expirationTimes,tt=n.hiddenUpdates;for(l=E&~l;0<l;){var ht=31-Dt(l),vt=1<<ht;A[ht]=0,F[ht]=-1;var at=tt[ht];if(at!==null)for(tt[ht]=null,ht=0;ht<at.length;ht++){var st=at[ht];st!==null&&(st.lane&=-536870913)}l&=~vt}u!==0&&Pt(n,u,0),_!==0&&m===0&&n.tag!==0&&(n.suspendedLanes|=_&~(E&~a))}function Pt(n,a,l){n.pendingLanes|=a,n.suspendedLanes&=~a;var u=31-Dt(a);n.entangledLanes|=a,n.entanglements[u]=n.entanglements[u]|1073741824|l&4194090}function re(n,a){var l=n.entangledLanes|=a;for(n=n.entanglements;l;){var u=31-Dt(l),m=1<<u;m&a|n[u]&a&&(n[u]|=a),l&=~m}}function Ze(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function fn(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function De(){var n=Z.p;return n!==0?n:(n=window.event,n===void 0?32:Nv(n.type))}function ai(n,a){var l=Z.p;try{return Z.p=n,a()}finally{Z.p=l}}var Mn=Math.random().toString(36).slice(2),gn="__reactFiber$"+Mn,Dn="__reactProps$"+Mn,Qn="__reactContainer$"+Mn,Ds="__reactEvents$"+Mn,rc="__reactListeners$"+Mn,oc="__reactHandles$"+Mn,Ns="__reactResources$"+Mn,Ha="__reactMarker$"+Mn;function Ga(n){delete n[gn],delete n[Dn],delete n[Ds],delete n[rc],delete n[oc]}function na(n){var a=n[gn];if(a)return a;for(var l=n.parentNode;l;){if(a=l[Qn]||l[gn]){if(l=a.alternate,a.child!==null||l!==null&&l.child!==null)for(n=gv(n);n!==null;){if(l=n[gn])return l;n=gv(n)}return a}n=l,l=n.parentNode}return null}function ia(n){if(n=n[gn]||n[Qn]){var a=n.tag;if(a===5||a===6||a===13||a===26||a===27||a===3)return n}return null}function Ls(n){var a=n.tag;if(a===5||a===26||a===27||a===6)return n.stateNode;throw Error(s(33))}function ka(n){var a=n[Ns];return a||(a=n[Ns]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function hn(n){n[Ha]=!0}var lc=new Set,cc={};function aa(n,a){C(n,a),C(n+"Capture",a)}function C(n,a){for(cc[n]=a,n=0;n<a.length;n++)lc.add(a[n])}var K=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ot={},lt={};function Q(n){return We.call(lt,n)?!0:We.call(ot,n)?!1:K.test(n)?lt[n]=!0:(ot[n]=!0,!1)}function Tt(n,a,l){if(Q(a))if(l===null)n.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":n.removeAttribute(a);return;case"boolean":var u=a.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){n.removeAttribute(a);return}}n.setAttribute(a,""+l)}}function Nt(n,a,l){if(l===null)n.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(a);return}n.setAttribute(a,""+l)}}function Lt(n,a,l,u){if(u===null)n.removeAttribute(l);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(l);return}n.setAttributeNS(a,l,""+u)}}var Ht,ee;function qt(n){if(Ht===void 0)try{throw Error()}catch(l){var a=l.stack.trim().match(/\n( *(at )?)/);Ht=a&&a[1]||"",ee=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ht+n+ee}var Wt=!1;function ve(n,a){if(!n||Wt)return"";Wt=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(a){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(st){var at=st}Reflect.construct(n,[],vt)}else{try{vt.call()}catch(st){at=st}n.call(vt.prototype)}}else{try{throw Error()}catch(st){at=st}(vt=n())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(st){if(st&&at&&typeof st.stack=="string")return[st.stack,at.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var m=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");m&&m.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var _=u.DetermineComponentFrameRoot(),E=_[0],A=_[1];if(E&&A){var F=E.split(`
`),tt=A.split(`
`);for(m=u=0;u<F.length&&!F[u].includes("DetermineComponentFrameRoot");)u++;for(;m<tt.length&&!tt[m].includes("DetermineComponentFrameRoot");)m++;if(u===F.length||m===tt.length)for(u=F.length-1,m=tt.length-1;1<=u&&0<=m&&F[u]!==tt[m];)m--;for(;1<=u&&0<=m;u--,m--)if(F[u]!==tt[m]){if(u!==1||m!==1)do if(u--,m--,0>m||F[u]!==tt[m]){var ht=`
`+F[u].replace(" at new "," at ");return n.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",n.displayName)),ht}while(1<=u&&0<=m);break}}}finally{Wt=!1,Error.prepareStackTrace=l}return(l=n?n.displayName||n.name:"")?qt(l):""}function Ne(n){switch(n.tag){case 26:case 27:case 5:return qt(n.type);case 16:return qt("Lazy");case 13:return qt("Suspense");case 19:return qt("SuspenseList");case 0:case 15:return ve(n.type,!1);case 11:return ve(n.type.render,!1);case 1:return ve(n.type,!0);case 31:return qt("Activity");default:return""}}function nn(n){try{var a="";do a+=Ne(n),n=n.return;while(n);return a}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}function Te(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ae(n){var a=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Kt(n){var a=Ae(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,a),u=""+n[a];if(!n.hasOwnProperty(a)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var m=l.get,_=l.set;return Object.defineProperty(n,a,{configurable:!0,get:function(){return m.call(this)},set:function(E){u=""+E,_.call(this,E)}}),Object.defineProperty(n,a,{enumerable:l.enumerable}),{getValue:function(){return u},setValue:function(E){u=""+E},stopTracking:function(){n._valueTracker=null,delete n[a]}}}}function rn(n){n._valueTracker||(n._valueTracker=Kt(n))}function Ce(n){if(!n)return!1;var a=n._valueTracker;if(!a)return!0;var l=a.getValue(),u="";return n&&(u=Ae(n)?n.checked?"true":"false":n.value),n=u,n!==l?(a.setValue(n),!0):!1}function In(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var Va=/[\n"\\]/g;function Qe(n){return n.replace(Va,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function sa(n,a,l,u,m,_,E,A){n.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?n.type=E:n.removeAttribute("type"),a!=null?E==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+Te(a)):n.value!==""+Te(a)&&(n.value=""+Te(a)):E!=="submit"&&E!=="reset"||n.removeAttribute("value"),a!=null?Bn(n,E,Te(a)):l!=null?Bn(n,E,Te(l)):u!=null&&n.removeAttribute("value"),m==null&&_!=null&&(n.defaultChecked=!!_),m!=null&&(n.checked=m&&typeof m!="function"&&typeof m!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?n.name=""+Te(A):n.removeAttribute("name")}function Ye(n,a,l,u,m,_,E,A){if(_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(n.type=_),a!=null||l!=null){if(!(_!=="submit"&&_!=="reset"||a!=null))return;l=l!=null?""+Te(l):"",a=a!=null?""+Te(a):l,A||a===n.value||(n.value=a),n.defaultValue=a}u=u??m,u=typeof u!="function"&&typeof u!="symbol"&&!!u,n.checked=A?n.checked:!!u,n.defaultChecked=!!u,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(n.name=E)}function Bn(n,a,l){a==="number"&&In(n.ownerDocument)===n||n.defaultValue===""+l||(n.defaultValue=""+l)}function _n(n,a,l,u){if(n=n.options,a){a={};for(var m=0;m<l.length;m++)a["$"+l[m]]=!0;for(l=0;l<n.length;l++)m=a.hasOwnProperty("$"+n[l].value),n[l].selected!==m&&(n[l].selected=m),m&&u&&(n[l].defaultSelected=!0)}else{for(l=""+Te(l),a=null,m=0;m<n.length;m++){if(n[m].value===l){n[m].selected=!0,u&&(n[m].defaultSelected=!0);return}a!==null||n[m].disabled||(a=n[m])}a!==null&&(a.selected=!0)}}function En(n,a,l){if(a!=null&&(a=""+Te(a),a!==n.value&&(n.value=a),l==null)){n.defaultValue!==a&&(n.defaultValue=a);return}n.defaultValue=l!=null?""+Te(l):""}function Nn(n,a,l,u){if(a==null){if(u!=null){if(l!=null)throw Error(s(92));if(ft(u)){if(1<u.length)throw Error(s(93));u=u[0]}l=u}l==null&&(l=""),a=l}l=Te(a),n.defaultValue=l,u=n.textContent,u===l&&u!==""&&u!==null&&(n.value=u)}function zi(n,a){if(a){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=a;return}}n.textContent=a}var ra=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function fg(n,a,l){var u=a.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?u?n.setProperty(a,""):a==="float"?n.cssFloat="":n[a]="":u?n.setProperty(a,l):typeof l!="number"||l===0||ra.has(a)?a==="float"?n.cssFloat=l:n[a]=(""+l).trim():n[a]=l+"px"}function hg(n,a,l){if(a!=null&&typeof a!="object")throw Error(s(62));if(n=n.style,l!=null){for(var u in l)!l.hasOwnProperty(u)||a!=null&&a.hasOwnProperty(u)||(u.indexOf("--")===0?n.setProperty(u,""):u==="float"?n.cssFloat="":n[u]="");for(var m in a)u=a[m],a.hasOwnProperty(m)&&l[m]!==u&&fg(n,m,u)}else for(var _ in a)a.hasOwnProperty(_)&&fg(n,_,a[_])}function Ef(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ib=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Bb=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function uc(n){return Bb.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var Tf=null;function Af(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var dr=null,pr=null;function dg(n){var a=ia(n);if(a&&(n=a.stateNode)){var l=n[Dn]||null;t:switch(n=a.stateNode,a.type){case"input":if(sa(n,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),a=l.name,l.type==="radio"&&a!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+Qe(""+a)+'"][type="radio"]'),a=0;a<l.length;a++){var u=l[a];if(u!==n&&u.form===n.form){var m=u[Dn]||null;if(!m)throw Error(s(90));sa(u,m.value,m.defaultValue,m.defaultValue,m.checked,m.defaultChecked,m.type,m.name)}}for(a=0;a<l.length;a++)u=l[a],u.form===n.form&&Ce(u)}break t;case"textarea":En(n,l.value,l.defaultValue);break t;case"select":a=l.value,a!=null&&_n(n,!!l.multiple,a,!1)}}}var wf=!1;function pg(n,a,l){if(wf)return n(a,l);wf=!0;try{var u=n(a);return u}finally{if(wf=!1,(dr!==null||pr!==null)&&(Kc(),dr&&(a=dr,n=pr,pr=dr=null,dg(a),n)))for(a=0;a<n.length;a++)dg(n[a])}}function Lo(n,a){var l=n.stateNode;if(l===null)return null;var u=l[Dn]||null;if(u===null)return null;l=u[a];t:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break t;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(s(231,a,typeof l));return l}var oa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Rf=!1;if(oa)try{var Uo={};Object.defineProperty(Uo,"passive",{get:function(){Rf=!0}}),window.addEventListener("test",Uo,Uo),window.removeEventListener("test",Uo,Uo)}catch{Rf=!1}var Xa=null,Cf=null,fc=null;function mg(){if(fc)return fc;var n,a=Cf,l=a.length,u,m="value"in Xa?Xa.value:Xa.textContent,_=m.length;for(n=0;n<l&&a[n]===m[n];n++);var E=l-n;for(u=1;u<=E&&a[l-u]===m[_-u];u++);return fc=m.slice(n,1<u?1-u:void 0)}function hc(n){var a=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&a===13&&(n=13)):n=a,n===10&&(n=13),32<=n||n===13?n:0}function dc(){return!0}function gg(){return!1}function Jn(n){function a(l,u,m,_,E){this._reactName=l,this._targetInst=m,this.type=u,this.nativeEvent=_,this.target=E,this.currentTarget=null;for(var A in n)n.hasOwnProperty(A)&&(l=n[A],this[A]=l?l(_):_[A]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?dc:gg,this.isPropagationStopped=gg,this}return g(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=dc)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=dc)},persist:function(){},isPersistent:dc}),a}var Us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pc=Jn(Us),Oo=g({},Us,{view:0,detail:0}),zb=Jn(Oo),Df,Nf,Po,mc=g({},Oo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uf,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Po&&(Po&&n.type==="mousemove"?(Df=n.screenX-Po.screenX,Nf=n.screenY-Po.screenY):Nf=Df=0,Po=n),Df)},movementY:function(n){return"movementY"in n?n.movementY:Nf}}),_g=Jn(mc),Fb=g({},mc,{dataTransfer:0}),Hb=Jn(Fb),Gb=g({},Oo,{relatedTarget:0}),Lf=Jn(Gb),kb=g({},Us,{animationName:0,elapsedTime:0,pseudoElement:0}),Vb=Jn(kb),Xb=g({},Us,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),jb=Jn(Xb),Wb=g({},Us,{data:0}),vg=Jn(Wb),Yb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zb(n){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(n):(n=Kb[n])?!!a[n]:!1}function Uf(){return Zb}var Qb=g({},Oo,{key:function(n){if(n.key){var a=Yb[n.key]||n.key;if(a!=="Unidentified")return a}return n.type==="keypress"?(n=hc(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?qb[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uf,charCode:function(n){return n.type==="keypress"?hc(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?hc(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Jb=Jn(Qb),$b=g({},mc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yg=Jn($b),tM=g({},Oo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uf}),eM=Jn(tM),nM=g({},Us,{propertyName:0,elapsedTime:0,pseudoElement:0}),iM=Jn(nM),aM=g({},mc,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),sM=Jn(aM),rM=g({},Us,{newState:0,oldState:0}),oM=Jn(rM),lM=[9,13,27,32],Of=oa&&"CompositionEvent"in window,Io=null;oa&&"documentMode"in document&&(Io=document.documentMode);var cM=oa&&"TextEvent"in window&&!Io,xg=oa&&(!Of||Io&&8<Io&&11>=Io),Sg=" ",bg=!1;function Mg(n,a){switch(n){case"keyup":return lM.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Eg(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var mr=!1;function uM(n,a){switch(n){case"compositionend":return Eg(a);case"keypress":return a.which!==32?null:(bg=!0,Sg);case"textInput":return n=a.data,n===Sg&&bg?null:n;default:return null}}function fM(n,a){if(mr)return n==="compositionend"||!Of&&Mg(n,a)?(n=mg(),fc=Cf=Xa=null,mr=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return xg&&a.locale!=="ko"?null:a.data;default:return null}}var hM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tg(n){var a=n&&n.nodeName&&n.nodeName.toLowerCase();return a==="input"?!!hM[n.type]:a==="textarea"}function Ag(n,a,l,u){dr?pr?pr.push(u):pr=[u]:dr=u,a=eu(a,"onChange"),0<a.length&&(l=new pc("onChange","change",null,l,u),n.push({event:l,listeners:a}))}var Bo=null,zo=null;function dM(n){rv(n,0)}function gc(n){var a=Ls(n);if(Ce(a))return n}function wg(n,a){if(n==="change")return a}var Rg=!1;if(oa){var Pf;if(oa){var If="oninput"in document;if(!If){var Cg=document.createElement("div");Cg.setAttribute("oninput","return;"),If=typeof Cg.oninput=="function"}Pf=If}else Pf=!1;Rg=Pf&&(!document.documentMode||9<document.documentMode)}function Dg(){Bo&&(Bo.detachEvent("onpropertychange",Ng),zo=Bo=null)}function Ng(n){if(n.propertyName==="value"&&gc(zo)){var a=[];Ag(a,zo,n,Af(n)),pg(dM,a)}}function pM(n,a,l){n==="focusin"?(Dg(),Bo=a,zo=l,Bo.attachEvent("onpropertychange",Ng)):n==="focusout"&&Dg()}function mM(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return gc(zo)}function gM(n,a){if(n==="click")return gc(a)}function _M(n,a){if(n==="input"||n==="change")return gc(a)}function vM(n,a){return n===a&&(n!==0||1/n===1/a)||n!==n&&a!==a}var si=typeof Object.is=="function"?Object.is:vM;function Fo(n,a){if(si(n,a))return!0;if(typeof n!="object"||n===null||typeof a!="object"||a===null)return!1;var l=Object.keys(n),u=Object.keys(a);if(l.length!==u.length)return!1;for(u=0;u<l.length;u++){var m=l[u];if(!We.call(a,m)||!si(n[m],a[m]))return!1}return!0}function Lg(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Ug(n,a){var l=Lg(n);n=0;for(var u;l;){if(l.nodeType===3){if(u=n+l.textContent.length,n<=a&&u>=a)return{node:l,offset:a-n};n=u}t:{for(;l;){if(l.nextSibling){l=l.nextSibling;break t}l=l.parentNode}l=void 0}l=Lg(l)}}function Og(n,a){return n&&a?n===a?!0:n&&n.nodeType===3?!1:a&&a.nodeType===3?Og(n,a.parentNode):"contains"in n?n.contains(a):n.compareDocumentPosition?!!(n.compareDocumentPosition(a)&16):!1:!1}function Pg(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var a=In(n.document);a instanceof n.HTMLIFrameElement;){try{var l=typeof a.contentWindow.location.href=="string"}catch{l=!1}if(l)n=a.contentWindow;else break;a=In(n.document)}return a}function Bf(n){var a=n&&n.nodeName&&n.nodeName.toLowerCase();return a&&(a==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||a==="textarea"||n.contentEditable==="true")}var yM=oa&&"documentMode"in document&&11>=document.documentMode,gr=null,zf=null,Ho=null,Ff=!1;function Ig(n,a,l){var u=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Ff||gr==null||gr!==In(u)||(u=gr,"selectionStart"in u&&Bf(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Ho&&Fo(Ho,u)||(Ho=u,u=eu(zf,"onSelect"),0<u.length&&(a=new pc("onSelect","select",null,a,l),n.push({event:a,listeners:u}),a.target=gr)))}function Os(n,a){var l={};return l[n.toLowerCase()]=a.toLowerCase(),l["Webkit"+n]="webkit"+a,l["Moz"+n]="moz"+a,l}var _r={animationend:Os("Animation","AnimationEnd"),animationiteration:Os("Animation","AnimationIteration"),animationstart:Os("Animation","AnimationStart"),transitionrun:Os("Transition","TransitionRun"),transitionstart:Os("Transition","TransitionStart"),transitioncancel:Os("Transition","TransitionCancel"),transitionend:Os("Transition","TransitionEnd")},Hf={},Bg={};oa&&(Bg=document.createElement("div").style,"AnimationEvent"in window||(delete _r.animationend.animation,delete _r.animationiteration.animation,delete _r.animationstart.animation),"TransitionEvent"in window||delete _r.transitionend.transition);function Ps(n){if(Hf[n])return Hf[n];if(!_r[n])return n;var a=_r[n],l;for(l in a)if(a.hasOwnProperty(l)&&l in Bg)return Hf[n]=a[l];return n}var zg=Ps("animationend"),Fg=Ps("animationiteration"),Hg=Ps("animationstart"),xM=Ps("transitionrun"),SM=Ps("transitionstart"),bM=Ps("transitioncancel"),Gg=Ps("transitionend"),kg=new Map,Gf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Gf.push("scrollEnd");function wi(n,a){kg.set(n,a),aa(a,[n])}var Vg=new WeakMap;function _i(n,a){if(typeof n=="object"&&n!==null){var l=Vg.get(n);return l!==void 0?l:(a={value:n,source:a,stack:nn(a)},Vg.set(n,a),a)}return{value:n,source:a,stack:nn(a)}}var vi=[],vr=0,kf=0;function _c(){for(var n=vr,a=kf=vr=0;a<n;){var l=vi[a];vi[a++]=null;var u=vi[a];vi[a++]=null;var m=vi[a];vi[a++]=null;var _=vi[a];if(vi[a++]=null,u!==null&&m!==null){var E=u.pending;E===null?m.next=m:(m.next=E.next,E.next=m),u.pending=m}_!==0&&Xg(l,m,_)}}function vc(n,a,l,u){vi[vr++]=n,vi[vr++]=a,vi[vr++]=l,vi[vr++]=u,kf|=u,n.lanes|=u,n=n.alternate,n!==null&&(n.lanes|=u)}function Vf(n,a,l,u){return vc(n,a,l,u),yc(n)}function yr(n,a){return vc(n,null,null,a),yc(n)}function Xg(n,a,l){n.lanes|=l;var u=n.alternate;u!==null&&(u.lanes|=l);for(var m=!1,_=n.return;_!==null;)_.childLanes|=l,u=_.alternate,u!==null&&(u.childLanes|=l),_.tag===22&&(n=_.stateNode,n===null||n._visibility&1||(m=!0)),n=_,_=_.return;return n.tag===3?(_=n.stateNode,m&&a!==null&&(m=31-Dt(l),n=_.hiddenUpdates,u=n[m],u===null?n[m]=[a]:u.push(a),a.lane=l|536870912),_):null}function yc(n){if(50<fl)throw fl=0,Kh=null,Error(s(185));for(var a=n.return;a!==null;)n=a,a=n.return;return n.tag===3?n.stateNode:null}var xr={};function MM(n,a,l,u){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ri(n,a,l,u){return new MM(n,a,l,u)}function Xf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function la(n,a){var l=n.alternate;return l===null?(l=ri(n.tag,a,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=a,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&65011712,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,a=n.dependencies,l.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l.refCleanup=n.refCleanup,l}function jg(n,a){n.flags&=65011714;var l=n.alternate;return l===null?(n.childLanes=0,n.lanes=a,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=l.childLanes,n.lanes=l.lanes,n.child=l.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=l.memoizedProps,n.memoizedState=l.memoizedState,n.updateQueue=l.updateQueue,n.type=l.type,a=l.dependencies,n.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),n}function xc(n,a,l,u,m,_){var E=0;if(u=n,typeof n=="function")Xf(n)&&(E=1);else if(typeof n=="string")E=TE(n,l,$.current)?26:n==="html"||n==="head"||n==="body"?27:5;else t:switch(n){case U:return n=ri(31,l,a,m),n.elementType=U,n.lanes=_,n;case M:return Is(l.children,m,_,a);case T:E=8,m|=24;break;case b:return n=ri(12,l,a,m|2),n.elementType=b,n.lanes=_,n;case I:return n=ri(13,l,a,m),n.elementType=I,n.lanes=_,n;case H:return n=ri(19,l,a,m),n.elementType=H,n.lanes=_,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case x:case L:E=10;break t;case N:E=9;break t;case w:E=11;break t;case B:E=14;break t;case X:E=16,u=null;break t}E=29,l=Error(s(130,n===null?"null":typeof n,"")),u=null}return a=ri(E,l,a,m),a.elementType=n,a.type=u,a.lanes=_,a}function Is(n,a,l,u){return n=ri(7,n,u,a),n.lanes=l,n}function jf(n,a,l){return n=ri(6,n,null,a),n.lanes=l,n}function Wf(n,a,l){return a=ri(4,n.children!==null?n.children:[],n.key,a),a.lanes=l,a.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},a}var Sr=[],br=0,Sc=null,bc=0,yi=[],xi=0,Bs=null,ca=1,ua="";function zs(n,a){Sr[br++]=bc,Sr[br++]=Sc,Sc=n,bc=a}function Wg(n,a,l){yi[xi++]=ca,yi[xi++]=ua,yi[xi++]=Bs,Bs=n;var u=ca;n=ua;var m=32-Dt(u)-1;u&=~(1<<m),l+=1;var _=32-Dt(a)+m;if(30<_){var E=m-m%5;_=(u&(1<<E)-1).toString(32),u>>=E,m-=E,ca=1<<32-Dt(a)+m|l<<m|u,ua=_+n}else ca=1<<_|l<<m|u,ua=n}function Yf(n){n.return!==null&&(zs(n,1),Wg(n,1,0))}function qf(n){for(;n===Sc;)Sc=Sr[--br],Sr[br]=null,bc=Sr[--br],Sr[br]=null;for(;n===Bs;)Bs=yi[--xi],yi[xi]=null,ua=yi[--xi],yi[xi]=null,ca=yi[--xi],yi[xi]=null}var Vn=null,on=null,Ue=!1,Fs=null,Fi=!1,Kf=Error(s(519));function Hs(n){var a=Error(s(418,""));throw Vo(_i(a,n)),Kf}function Yg(n){var a=n.stateNode,l=n.type,u=n.memoizedProps;switch(a[gn]=n,a[Dn]=u,l){case"dialog":xe("cancel",a),xe("close",a);break;case"iframe":case"object":case"embed":xe("load",a);break;case"video":case"audio":for(l=0;l<dl.length;l++)xe(dl[l],a);break;case"source":xe("error",a);break;case"img":case"image":case"link":xe("error",a),xe("load",a);break;case"details":xe("toggle",a);break;case"input":xe("invalid",a),Ye(a,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),rn(a);break;case"select":xe("invalid",a);break;case"textarea":xe("invalid",a),Nn(a,u.value,u.defaultValue,u.children),rn(a)}l=u.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||a.textContent===""+l||u.suppressHydrationWarning===!0||uv(a.textContent,l)?(u.popover!=null&&(xe("beforetoggle",a),xe("toggle",a)),u.onScroll!=null&&xe("scroll",a),u.onScrollEnd!=null&&xe("scrollend",a),u.onClick!=null&&(a.onclick=nu),a=!0):a=!1,a||Hs(n)}function qg(n){for(Vn=n.return;Vn;)switch(Vn.tag){case 5:case 13:Fi=!1;return;case 27:case 3:Fi=!0;return;default:Vn=Vn.return}}function Go(n){if(n!==Vn)return!1;if(!Ue)return qg(n),Ue=!0,!1;var a=n.tag,l;if((l=a!==3&&a!==27)&&((l=a===5)&&(l=n.type,l=!(l!=="form"&&l!=="button")||fd(n.type,n.memoizedProps)),l=!l),l&&on&&Hs(n),qg(n),a===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(s(317));t:{for(n=n.nextSibling,a=0;n;){if(n.nodeType===8)if(l=n.data,l==="/$"){if(a===0){on=Ci(n.nextSibling);break t}a--}else l!=="$"&&l!=="$!"&&l!=="$?"||a++;n=n.nextSibling}on=null}}else a===27?(a=on,rs(n.type)?(n=md,md=null,on=n):on=a):on=Vn?Ci(n.stateNode.nextSibling):null;return!0}function ko(){on=Vn=null,Ue=!1}function Kg(){var n=Fs;return n!==null&&(ei===null?ei=n:ei.push.apply(ei,n),Fs=null),n}function Vo(n){Fs===null?Fs=[n]:Fs.push(n)}var Zf=et(null),Gs=null,fa=null;function ja(n,a,l){Mt(Zf,a._currentValue),a._currentValue=l}function ha(n){n._currentValue=Zf.current,xt(Zf)}function Qf(n,a,l){for(;n!==null;){var u=n.alternate;if((n.childLanes&a)!==a?(n.childLanes|=a,u!==null&&(u.childLanes|=a)):u!==null&&(u.childLanes&a)!==a&&(u.childLanes|=a),n===l)break;n=n.return}}function Jf(n,a,l,u){var m=n.child;for(m!==null&&(m.return=n);m!==null;){var _=m.dependencies;if(_!==null){var E=m.child;_=_.firstContext;t:for(;_!==null;){var A=_;_=m;for(var F=0;F<a.length;F++)if(A.context===a[F]){_.lanes|=l,A=_.alternate,A!==null&&(A.lanes|=l),Qf(_.return,l,n),u||(E=null);break t}_=A.next}}else if(m.tag===18){if(E=m.return,E===null)throw Error(s(341));E.lanes|=l,_=E.alternate,_!==null&&(_.lanes|=l),Qf(E,l,n),E=null}else E=m.child;if(E!==null)E.return=m;else for(E=m;E!==null;){if(E===n){E=null;break}if(m=E.sibling,m!==null){m.return=E.return,E=m;break}E=E.return}m=E}}function Xo(n,a,l,u){n=null;for(var m=a,_=!1;m!==null;){if(!_){if((m.flags&524288)!==0)_=!0;else if((m.flags&262144)!==0)break}if(m.tag===10){var E=m.alternate;if(E===null)throw Error(s(387));if(E=E.memoizedProps,E!==null){var A=m.type;si(m.pendingProps.value,E.value)||(n!==null?n.push(A):n=[A])}}else if(m===Rt.current){if(E=m.alternate,E===null)throw Error(s(387));E.memoizedState.memoizedState!==m.memoizedState.memoizedState&&(n!==null?n.push(yl):n=[yl])}m=m.return}n!==null&&Jf(a,n,l,u),a.flags|=262144}function Mc(n){for(n=n.firstContext;n!==null;){if(!si(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function ks(n){Gs=n,fa=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function zn(n){return Zg(Gs,n)}function Ec(n,a){return Gs===null&&ks(n),Zg(n,a)}function Zg(n,a){var l=a._currentValue;if(a={context:a,memoizedValue:l,next:null},fa===null){if(n===null)throw Error(s(308));fa=a,n.dependencies={lanes:0,firstContext:a},n.flags|=524288}else fa=fa.next=a;return l}var EM=typeof AbortController<"u"?AbortController:function(){var n=[],a=this.signal={aborted:!1,addEventListener:function(l,u){n.push(u)}};this.abort=function(){a.aborted=!0,n.forEach(function(l){return l()})}},TM=r.unstable_scheduleCallback,AM=r.unstable_NormalPriority,vn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function $f(){return{controller:new EM,data:new Map,refCount:0}}function jo(n){n.refCount--,n.refCount===0&&TM(AM,function(){n.controller.abort()})}var Wo=null,th=0,Mr=0,Er=null;function wM(n,a){if(Wo===null){var l=Wo=[];th=0,Mr=nd(),Er={status:"pending",value:void 0,then:function(u){l.push(u)}}}return th++,a.then(Qg,Qg),a}function Qg(){if(--th===0&&Wo!==null){Er!==null&&(Er.status="fulfilled");var n=Wo;Wo=null,Mr=0,Er=null;for(var a=0;a<n.length;a++)(0,n[a])()}}function RM(n,a){var l=[],u={status:"pending",value:null,reason:null,then:function(m){l.push(m)}};return n.then(function(){u.status="fulfilled",u.value=a;for(var m=0;m<l.length;m++)(0,l[m])(a)},function(m){for(u.status="rejected",u.reason=m,m=0;m<l.length;m++)(0,l[m])(void 0)}),u}var Jg=z.S;z.S=function(n,a){typeof a=="object"&&a!==null&&typeof a.then=="function"&&wM(n,a),Jg!==null&&Jg(n,a)};var Vs=et(null);function eh(){var n=Vs.current;return n!==null?n:Je.pooledCache}function Tc(n,a){a===null?Mt(Vs,Vs.current):Mt(Vs,a.pool)}function $g(){var n=eh();return n===null?null:{parent:vn._currentValue,pool:n}}var Yo=Error(s(460)),t_=Error(s(474)),Ac=Error(s(542)),nh={then:function(){}};function e_(n){return n=n.status,n==="fulfilled"||n==="rejected"}function wc(){}function n_(n,a,l){switch(l=n[l],l===void 0?n.push(a):l!==a&&(a.then(wc,wc),a=l),a.status){case"fulfilled":return a.value;case"rejected":throw n=a.reason,a_(n),n;default:if(typeof a.status=="string")a.then(wc,wc);else{if(n=Je,n!==null&&100<n.shellSuspendCounter)throw Error(s(482));n=a,n.status="pending",n.then(function(u){if(a.status==="pending"){var m=a;m.status="fulfilled",m.value=u}},function(u){if(a.status==="pending"){var m=a;m.status="rejected",m.reason=u}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw n=a.reason,a_(n),n}throw qo=a,Yo}}var qo=null;function i_(){if(qo===null)throw Error(s(459));var n=qo;return qo=null,n}function a_(n){if(n===Yo||n===Ac)throw Error(s(483))}var Wa=!1;function ih(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ah(n,a){n=n.updateQueue,a.updateQueue===n&&(a.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function Ya(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function qa(n,a,l){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Pe&2)!==0){var m=u.pending;return m===null?a.next=a:(a.next=m.next,m.next=a),u.pending=a,a=yc(n),Xg(n,null,l),a}return vc(n,u,a,l),yc(n)}function Ko(n,a,l){if(a=a.updateQueue,a!==null&&(a=a.shared,(l&4194048)!==0)){var u=a.lanes;u&=n.pendingLanes,l|=u,a.lanes=l,re(n,l)}}function sh(n,a){var l=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,l===u)){var m=null,_=null;if(l=l.firstBaseUpdate,l!==null){do{var E={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};_===null?m=_=E:_=_.next=E,l=l.next}while(l!==null);_===null?m=_=a:_=_.next=a}else m=_=a;l={baseState:u.baseState,firstBaseUpdate:m,lastBaseUpdate:_,shared:u.shared,callbacks:u.callbacks},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=a:n.next=a,l.lastBaseUpdate=a}var rh=!1;function Zo(){if(rh){var n=Er;if(n!==null)throw n}}function Qo(n,a,l,u){rh=!1;var m=n.updateQueue;Wa=!1;var _=m.firstBaseUpdate,E=m.lastBaseUpdate,A=m.shared.pending;if(A!==null){m.shared.pending=null;var F=A,tt=F.next;F.next=null,E===null?_=tt:E.next=tt,E=F;var ht=n.alternate;ht!==null&&(ht=ht.updateQueue,A=ht.lastBaseUpdate,A!==E&&(A===null?ht.firstBaseUpdate=tt:A.next=tt,ht.lastBaseUpdate=F))}if(_!==null){var vt=m.baseState;E=0,ht=tt=F=null,A=_;do{var at=A.lane&-536870913,st=at!==A.lane;if(st?(we&at)===at:(u&at)===at){at!==0&&at===Mr&&(rh=!0),ht!==null&&(ht=ht.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var ne=n,Qt=A;at=a;var Ve=l;switch(Qt.tag){case 1:if(ne=Qt.payload,typeof ne=="function"){vt=ne.call(Ve,vt,at);break t}vt=ne;break t;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=Qt.payload,at=typeof ne=="function"?ne.call(Ve,vt,at):ne,at==null)break t;vt=g({},vt,at);break t;case 2:Wa=!0}}at=A.callback,at!==null&&(n.flags|=64,st&&(n.flags|=8192),st=m.callbacks,st===null?m.callbacks=[at]:st.push(at))}else st={lane:at,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ht===null?(tt=ht=st,F=vt):ht=ht.next=st,E|=at;if(A=A.next,A===null){if(A=m.shared.pending,A===null)break;st=A,A=st.next,st.next=null,m.lastBaseUpdate=st,m.shared.pending=null}}while(!0);ht===null&&(F=vt),m.baseState=F,m.firstBaseUpdate=tt,m.lastBaseUpdate=ht,_===null&&(m.shared.lanes=0),ns|=E,n.lanes=E,n.memoizedState=vt}}function s_(n,a){if(typeof n!="function")throw Error(s(191,n));n.call(a)}function r_(n,a){var l=n.callbacks;if(l!==null)for(n.callbacks=null,n=0;n<l.length;n++)s_(l[n],a)}var Tr=et(null),Rc=et(0);function o_(n,a){n=ya,Mt(Rc,n),Mt(Tr,a),ya=n|a.baseLanes}function oh(){Mt(Rc,ya),Mt(Tr,Tr.current)}function lh(){ya=Rc.current,xt(Tr),xt(Rc)}var Ka=0,pe=null,Ge=null,dn=null,Cc=!1,Ar=!1,Xs=!1,Dc=0,Jo=0,wr=null,CM=0;function cn(){throw Error(s(321))}function ch(n,a){if(a===null)return!1;for(var l=0;l<a.length&&l<n.length;l++)if(!si(n[l],a[l]))return!1;return!0}function uh(n,a,l,u,m,_){return Ka=_,pe=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,z.H=n===null||n.memoizedState===null?X_:j_,Xs=!1,_=l(u,m),Xs=!1,Ar&&(_=c_(a,l,u,m)),l_(n),_}function l_(n){z.H=Ic;var a=Ge!==null&&Ge.next!==null;if(Ka=0,dn=Ge=pe=null,Cc=!1,Jo=0,wr=null,a)throw Error(s(300));n===null||Tn||(n=n.dependencies,n!==null&&Mc(n)&&(Tn=!0))}function c_(n,a,l,u){pe=n;var m=0;do{if(Ar&&(wr=null),Jo=0,Ar=!1,25<=m)throw Error(s(301));if(m+=1,dn=Ge=null,n.updateQueue!=null){var _=n.updateQueue;_.lastEffect=null,_.events=null,_.stores=null,_.memoCache!=null&&(_.memoCache.index=0)}z.H=IM,_=a(l,u)}while(Ar);return _}function DM(){var n=z.H,a=n.useState()[0];return a=typeof a.then=="function"?$o(a):a,n=n.useState()[0],(Ge!==null?Ge.memoizedState:null)!==n&&(pe.flags|=1024),a}function fh(){var n=Dc!==0;return Dc=0,n}function hh(n,a,l){a.updateQueue=n.updateQueue,a.flags&=-2053,n.lanes&=~l}function dh(n){if(Cc){for(n=n.memoizedState;n!==null;){var a=n.queue;a!==null&&(a.pending=null),n=n.next}Cc=!1}Ka=0,dn=Ge=pe=null,Ar=!1,Jo=Dc=0,wr=null}function $n(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?pe.memoizedState=dn=n:dn=dn.next=n,dn}function pn(){if(Ge===null){var n=pe.alternate;n=n!==null?n.memoizedState:null}else n=Ge.next;var a=dn===null?pe.memoizedState:dn.next;if(a!==null)dn=a,Ge=n;else{if(n===null)throw pe.alternate===null?Error(s(467)):Error(s(310));Ge=n,n={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},dn===null?pe.memoizedState=dn=n:dn=dn.next=n}return dn}function ph(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function $o(n){var a=Jo;return Jo+=1,wr===null&&(wr=[]),n=n_(wr,n,a),a=pe,(dn===null?a.memoizedState:dn.next)===null&&(a=a.alternate,z.H=a===null||a.memoizedState===null?X_:j_),n}function Nc(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return $o(n);if(n.$$typeof===L)return zn(n)}throw Error(s(438,String(n)))}function mh(n){var a=null,l=pe.updateQueue;if(l!==null&&(a=l.memoCache),a==null){var u=pe.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(a={data:u.data.map(function(m){return m.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),l===null&&(l=ph(),pe.updateQueue=l),l.memoCache=a,l=a.data[a.index],l===void 0)for(l=a.data[a.index]=Array(n),u=0;u<n;u++)l[u]=D;return a.index++,l}function da(n,a){return typeof a=="function"?a(n):a}function Lc(n){var a=pn();return gh(a,Ge,n)}function gh(n,a,l){var u=n.queue;if(u===null)throw Error(s(311));u.lastRenderedReducer=l;var m=n.baseQueue,_=u.pending;if(_!==null){if(m!==null){var E=m.next;m.next=_.next,_.next=E}a.baseQueue=m=_,u.pending=null}if(_=n.baseState,m===null)n.memoizedState=_;else{a=m.next;var A=E=null,F=null,tt=a,ht=!1;do{var vt=tt.lane&-536870913;if(vt!==tt.lane?(we&vt)===vt:(Ka&vt)===vt){var at=tt.revertLane;if(at===0)F!==null&&(F=F.next={lane:0,revertLane:0,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null}),vt===Mr&&(ht=!0);else if((Ka&at)===at){tt=tt.next,at===Mr&&(ht=!0);continue}else vt={lane:0,revertLane:tt.revertLane,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},F===null?(A=F=vt,E=_):F=F.next=vt,pe.lanes|=at,ns|=at;vt=tt.action,Xs&&l(_,vt),_=tt.hasEagerState?tt.eagerState:l(_,vt)}else at={lane:vt,revertLane:tt.revertLane,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},F===null?(A=F=at,E=_):F=F.next=at,pe.lanes|=vt,ns|=vt;tt=tt.next}while(tt!==null&&tt!==a);if(F===null?E=_:F.next=A,!si(_,n.memoizedState)&&(Tn=!0,ht&&(l=Er,l!==null)))throw l;n.memoizedState=_,n.baseState=E,n.baseQueue=F,u.lastRenderedState=_}return m===null&&(u.lanes=0),[n.memoizedState,u.dispatch]}function _h(n){var a=pn(),l=a.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=n;var u=l.dispatch,m=l.pending,_=a.memoizedState;if(m!==null){l.pending=null;var E=m=m.next;do _=n(_,E.action),E=E.next;while(E!==m);si(_,a.memoizedState)||(Tn=!0),a.memoizedState=_,a.baseQueue===null&&(a.baseState=_),l.lastRenderedState=_}return[_,u]}function u_(n,a,l){var u=pe,m=pn(),_=Ue;if(_){if(l===void 0)throw Error(s(407));l=l()}else l=a();var E=!si((Ge||m).memoizedState,l);E&&(m.memoizedState=l,Tn=!0),m=m.queue;var A=d_.bind(null,u,m,n);if(tl(2048,8,A,[n]),m.getSnapshot!==a||E||dn!==null&&dn.memoizedState.tag&1){if(u.flags|=2048,Rr(9,Uc(),h_.bind(null,u,m,l,a),null),Je===null)throw Error(s(349));_||(Ka&124)!==0||f_(u,a,l)}return l}function f_(n,a,l){n.flags|=16384,n={getSnapshot:a,value:l},a=pe.updateQueue,a===null?(a=ph(),pe.updateQueue=a,a.stores=[n]):(l=a.stores,l===null?a.stores=[n]:l.push(n))}function h_(n,a,l,u){a.value=l,a.getSnapshot=u,p_(a)&&m_(n)}function d_(n,a,l){return l(function(){p_(a)&&m_(n)})}function p_(n){var a=n.getSnapshot;n=n.value;try{var l=a();return!si(n,l)}catch{return!0}}function m_(n){var a=yr(n,2);a!==null&&fi(a,n,2)}function vh(n){var a=$n();if(typeof n=="function"){var l=n;if(n=l(),Xs){Ct(!0);try{l()}finally{Ct(!1)}}}return a.memoizedState=a.baseState=n,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:n},a}function g_(n,a,l,u){return n.baseState=l,gh(n,Ge,typeof u=="function"?u:da)}function NM(n,a,l,u,m){if(Pc(n))throw Error(s(485));if(n=a.action,n!==null){var _={payload:m,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){_.listeners.push(E)}};z.T!==null?l(!0):_.isTransition=!1,u(_),l=a.pending,l===null?(_.next=a.pending=_,__(a,_)):(_.next=l.next,a.pending=l.next=_)}}function __(n,a){var l=a.action,u=a.payload,m=n.state;if(a.isTransition){var _=z.T,E={};z.T=E;try{var A=l(m,u),F=z.S;F!==null&&F(E,A),v_(n,a,A)}catch(tt){yh(n,a,tt)}finally{z.T=_}}else try{_=l(m,u),v_(n,a,_)}catch(tt){yh(n,a,tt)}}function v_(n,a,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(u){y_(n,a,u)},function(u){return yh(n,a,u)}):y_(n,a,l)}function y_(n,a,l){a.status="fulfilled",a.value=l,x_(a),n.state=l,a=n.pending,a!==null&&(l=a.next,l===a?n.pending=null:(l=l.next,a.next=l,__(n,l)))}function yh(n,a,l){var u=n.pending;if(n.pending=null,u!==null){u=u.next;do a.status="rejected",a.reason=l,x_(a),a=a.next;while(a!==u)}n.action=null}function x_(n){n=n.listeners;for(var a=0;a<n.length;a++)(0,n[a])()}function S_(n,a){return a}function b_(n,a){if(Ue){var l=Je.formState;if(l!==null){t:{var u=pe;if(Ue){if(on){e:{for(var m=on,_=Fi;m.nodeType!==8;){if(!_){m=null;break e}if(m=Ci(m.nextSibling),m===null){m=null;break e}}_=m.data,m=_==="F!"||_==="F"?m:null}if(m){on=Ci(m.nextSibling),u=m.data==="F!";break t}}Hs(u)}u=!1}u&&(a=l[0])}}return l=$n(),l.memoizedState=l.baseState=a,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:S_,lastRenderedState:a},l.queue=u,l=G_.bind(null,pe,u),u.dispatch=l,u=vh(!1),_=Eh.bind(null,pe,!1,u.queue),u=$n(),m={state:a,dispatch:null,action:n,pending:null},u.queue=m,l=NM.bind(null,pe,m,_,l),m.dispatch=l,u.memoizedState=n,[a,l,!1]}function M_(n){var a=pn();return E_(a,Ge,n)}function E_(n,a,l){if(a=gh(n,a,S_)[0],n=Lc(da)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var u=$o(a)}catch(E){throw E===Yo?Ac:E}else u=a;a=pn();var m=a.queue,_=m.dispatch;return l!==a.memoizedState&&(pe.flags|=2048,Rr(9,Uc(),LM.bind(null,m,l),null)),[u,_,n]}function LM(n,a){n.action=a}function T_(n){var a=pn(),l=Ge;if(l!==null)return E_(a,l,n);pn(),a=a.memoizedState,l=pn();var u=l.queue.dispatch;return l.memoizedState=n,[a,u,!1]}function Rr(n,a,l,u){return n={tag:n,create:l,deps:u,inst:a,next:null},a=pe.updateQueue,a===null&&(a=ph(),pe.updateQueue=a),l=a.lastEffect,l===null?a.lastEffect=n.next=n:(u=l.next,l.next=n,n.next=u,a.lastEffect=n),n}function Uc(){return{destroy:void 0,resource:void 0}}function A_(){return pn().memoizedState}function Oc(n,a,l,u){var m=$n();u=u===void 0?null:u,pe.flags|=n,m.memoizedState=Rr(1|a,Uc(),l,u)}function tl(n,a,l,u){var m=pn();u=u===void 0?null:u;var _=m.memoizedState.inst;Ge!==null&&u!==null&&ch(u,Ge.memoizedState.deps)?m.memoizedState=Rr(a,_,l,u):(pe.flags|=n,m.memoizedState=Rr(1|a,_,l,u))}function w_(n,a){Oc(8390656,8,n,a)}function R_(n,a){tl(2048,8,n,a)}function C_(n,a){return tl(4,2,n,a)}function D_(n,a){return tl(4,4,n,a)}function N_(n,a){if(typeof a=="function"){n=n();var l=a(n);return function(){typeof l=="function"?l():a(null)}}if(a!=null)return n=n(),a.current=n,function(){a.current=null}}function L_(n,a,l){l=l!=null?l.concat([n]):null,tl(4,4,N_.bind(null,a,n),l)}function xh(){}function U_(n,a){var l=pn();a=a===void 0?null:a;var u=l.memoizedState;return a!==null&&ch(a,u[1])?u[0]:(l.memoizedState=[n,a],n)}function O_(n,a){var l=pn();a=a===void 0?null:a;var u=l.memoizedState;if(a!==null&&ch(a,u[1]))return u[0];if(u=n(),Xs){Ct(!0);try{n()}finally{Ct(!1)}}return l.memoizedState=[u,a],u}function Sh(n,a,l){return l===void 0||(Ka&1073741824)!==0?n.memoizedState=a:(n.memoizedState=l,n=B0(),pe.lanes|=n,ns|=n,l)}function P_(n,a,l,u){return si(l,a)?l:Tr.current!==null?(n=Sh(n,l,u),si(n,a)||(Tn=!0),n):(Ka&42)===0?(Tn=!0,n.memoizedState=l):(n=B0(),pe.lanes|=n,ns|=n,a)}function I_(n,a,l,u,m){var _=Z.p;Z.p=_!==0&&8>_?_:8;var E=z.T,A={};z.T=A,Eh(n,!1,a,l);try{var F=m(),tt=z.S;if(tt!==null&&tt(A,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var ht=RM(F,u);el(n,a,ht,ui(n))}else el(n,a,u,ui(n))}catch(vt){el(n,a,{then:function(){},status:"rejected",reason:vt},ui())}finally{Z.p=_,z.T=E}}function UM(){}function bh(n,a,l,u){if(n.tag!==5)throw Error(s(476));var m=B_(n).queue;I_(n,m,a,q,l===null?UM:function(){return z_(n),l(u)})}function B_(n){var a=n.memoizedState;if(a!==null)return a;a={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:q},next:null};var l={};return a.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:l},next:null},n.memoizedState=a,n=n.alternate,n!==null&&(n.memoizedState=a),a}function z_(n){var a=B_(n).next.queue;el(n,a,{},ui())}function Mh(){return zn(yl)}function F_(){return pn().memoizedState}function H_(){return pn().memoizedState}function OM(n){for(var a=n.return;a!==null;){switch(a.tag){case 24:case 3:var l=ui();n=Ya(l);var u=qa(a,n,l);u!==null&&(fi(u,a,l),Ko(u,a,l)),a={cache:$f()},n.payload=a;return}a=a.return}}function PM(n,a,l){var u=ui();l={lane:u,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null},Pc(n)?k_(a,l):(l=Vf(n,a,l,u),l!==null&&(fi(l,n,u),V_(l,a,u)))}function G_(n,a,l){var u=ui();el(n,a,l,u)}function el(n,a,l,u){var m={lane:u,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null};if(Pc(n))k_(a,m);else{var _=n.alternate;if(n.lanes===0&&(_===null||_.lanes===0)&&(_=a.lastRenderedReducer,_!==null))try{var E=a.lastRenderedState,A=_(E,l);if(m.hasEagerState=!0,m.eagerState=A,si(A,E))return vc(n,a,m,0),Je===null&&_c(),!1}catch{}finally{}if(l=Vf(n,a,m,u),l!==null)return fi(l,n,u),V_(l,a,u),!0}return!1}function Eh(n,a,l,u){if(u={lane:2,revertLane:nd(),action:u,hasEagerState:!1,eagerState:null,next:null},Pc(n)){if(a)throw Error(s(479))}else a=Vf(n,l,u,2),a!==null&&fi(a,n,2)}function Pc(n){var a=n.alternate;return n===pe||a!==null&&a===pe}function k_(n,a){Ar=Cc=!0;var l=n.pending;l===null?a.next=a:(a.next=l.next,l.next=a),n.pending=a}function V_(n,a,l){if((l&4194048)!==0){var u=a.lanes;u&=n.pendingLanes,l|=u,a.lanes=l,re(n,l)}}var Ic={readContext:zn,use:Nc,useCallback:cn,useContext:cn,useEffect:cn,useImperativeHandle:cn,useLayoutEffect:cn,useInsertionEffect:cn,useMemo:cn,useReducer:cn,useRef:cn,useState:cn,useDebugValue:cn,useDeferredValue:cn,useTransition:cn,useSyncExternalStore:cn,useId:cn,useHostTransitionStatus:cn,useFormState:cn,useActionState:cn,useOptimistic:cn,useMemoCache:cn,useCacheRefresh:cn},X_={readContext:zn,use:Nc,useCallback:function(n,a){return $n().memoizedState=[n,a===void 0?null:a],n},useContext:zn,useEffect:w_,useImperativeHandle:function(n,a,l){l=l!=null?l.concat([n]):null,Oc(4194308,4,N_.bind(null,a,n),l)},useLayoutEffect:function(n,a){return Oc(4194308,4,n,a)},useInsertionEffect:function(n,a){Oc(4,2,n,a)},useMemo:function(n,a){var l=$n();a=a===void 0?null:a;var u=n();if(Xs){Ct(!0);try{n()}finally{Ct(!1)}}return l.memoizedState=[u,a],u},useReducer:function(n,a,l){var u=$n();if(l!==void 0){var m=l(a);if(Xs){Ct(!0);try{l(a)}finally{Ct(!1)}}}else m=a;return u.memoizedState=u.baseState=m,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:m},u.queue=n,n=n.dispatch=PM.bind(null,pe,n),[u.memoizedState,n]},useRef:function(n){var a=$n();return n={current:n},a.memoizedState=n},useState:function(n){n=vh(n);var a=n.queue,l=G_.bind(null,pe,a);return a.dispatch=l,[n.memoizedState,l]},useDebugValue:xh,useDeferredValue:function(n,a){var l=$n();return Sh(l,n,a)},useTransition:function(){var n=vh(!1);return n=I_.bind(null,pe,n.queue,!0,!1),$n().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,a,l){var u=pe,m=$n();if(Ue){if(l===void 0)throw Error(s(407));l=l()}else{if(l=a(),Je===null)throw Error(s(349));(we&124)!==0||f_(u,a,l)}m.memoizedState=l;var _={value:l,getSnapshot:a};return m.queue=_,w_(d_.bind(null,u,_,n),[n]),u.flags|=2048,Rr(9,Uc(),h_.bind(null,u,_,l,a),null),l},useId:function(){var n=$n(),a=Je.identifierPrefix;if(Ue){var l=ua,u=ca;l=(u&~(1<<32-Dt(u)-1)).toString(32)+l,a="«"+a+"R"+l,l=Dc++,0<l&&(a+="H"+l.toString(32)),a+="»"}else l=CM++,a="«"+a+"r"+l.toString(32)+"»";return n.memoizedState=a},useHostTransitionStatus:Mh,useFormState:b_,useActionState:b_,useOptimistic:function(n){var a=$n();a.memoizedState=a.baseState=n;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=l,a=Eh.bind(null,pe,!0,l),l.dispatch=a,[n,a]},useMemoCache:mh,useCacheRefresh:function(){return $n().memoizedState=OM.bind(null,pe)}},j_={readContext:zn,use:Nc,useCallback:U_,useContext:zn,useEffect:R_,useImperativeHandle:L_,useInsertionEffect:C_,useLayoutEffect:D_,useMemo:O_,useReducer:Lc,useRef:A_,useState:function(){return Lc(da)},useDebugValue:xh,useDeferredValue:function(n,a){var l=pn();return P_(l,Ge.memoizedState,n,a)},useTransition:function(){var n=Lc(da)[0],a=pn().memoizedState;return[typeof n=="boolean"?n:$o(n),a]},useSyncExternalStore:u_,useId:F_,useHostTransitionStatus:Mh,useFormState:M_,useActionState:M_,useOptimistic:function(n,a){var l=pn();return g_(l,Ge,n,a)},useMemoCache:mh,useCacheRefresh:H_},IM={readContext:zn,use:Nc,useCallback:U_,useContext:zn,useEffect:R_,useImperativeHandle:L_,useInsertionEffect:C_,useLayoutEffect:D_,useMemo:O_,useReducer:_h,useRef:A_,useState:function(){return _h(da)},useDebugValue:xh,useDeferredValue:function(n,a){var l=pn();return Ge===null?Sh(l,n,a):P_(l,Ge.memoizedState,n,a)},useTransition:function(){var n=_h(da)[0],a=pn().memoizedState;return[typeof n=="boolean"?n:$o(n),a]},useSyncExternalStore:u_,useId:F_,useHostTransitionStatus:Mh,useFormState:T_,useActionState:T_,useOptimistic:function(n,a){var l=pn();return Ge!==null?g_(l,Ge,n,a):(l.baseState=n,[n,l.queue.dispatch])},useMemoCache:mh,useCacheRefresh:H_},Cr=null,nl=0;function Bc(n){var a=nl;return nl+=1,Cr===null&&(Cr=[]),n_(Cr,n,a)}function il(n,a){a=a.props.ref,n.ref=a!==void 0?a:null}function zc(n,a){throw a.$$typeof===v?Error(s(525)):(n=Object.prototype.toString.call(a),Error(s(31,n==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":n)))}function W_(n){var a=n._init;return a(n._payload)}function Y_(n){function a(Y,V){if(n){var J=Y.deletions;J===null?(Y.deletions=[V],Y.flags|=16):J.push(V)}}function l(Y,V){if(!n)return null;for(;V!==null;)a(Y,V),V=V.sibling;return null}function u(Y){for(var V=new Map;Y!==null;)Y.key!==null?V.set(Y.key,Y):V.set(Y.index,Y),Y=Y.sibling;return V}function m(Y,V){return Y=la(Y,V),Y.index=0,Y.sibling=null,Y}function _(Y,V,J){return Y.index=J,n?(J=Y.alternate,J!==null?(J=J.index,J<V?(Y.flags|=67108866,V):J):(Y.flags|=67108866,V)):(Y.flags|=1048576,V)}function E(Y){return n&&Y.alternate===null&&(Y.flags|=67108866),Y}function A(Y,V,J,pt){return V===null||V.tag!==6?(V=jf(J,Y.mode,pt),V.return=Y,V):(V=m(V,J),V.return=Y,V)}function F(Y,V,J,pt){var kt=J.type;return kt===M?ht(Y,V,J.props.children,pt,J.key):V!==null&&(V.elementType===kt||typeof kt=="object"&&kt!==null&&kt.$$typeof===X&&W_(kt)===V.type)?(V=m(V,J.props),il(V,J),V.return=Y,V):(V=xc(J.type,J.key,J.props,null,Y.mode,pt),il(V,J),V.return=Y,V)}function tt(Y,V,J,pt){return V===null||V.tag!==4||V.stateNode.containerInfo!==J.containerInfo||V.stateNode.implementation!==J.implementation?(V=Wf(J,Y.mode,pt),V.return=Y,V):(V=m(V,J.children||[]),V.return=Y,V)}function ht(Y,V,J,pt,kt){return V===null||V.tag!==7?(V=Is(J,Y.mode,pt,kt),V.return=Y,V):(V=m(V,J),V.return=Y,V)}function vt(Y,V,J){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=jf(""+V,Y.mode,J),V.return=Y,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case y:return J=xc(V.type,V.key,V.props,null,Y.mode,J),il(J,V),J.return=Y,J;case S:return V=Wf(V,Y.mode,J),V.return=Y,V;case X:var pt=V._init;return V=pt(V._payload),vt(Y,V,J)}if(ft(V)||ct(V))return V=Is(V,Y.mode,J,null),V.return=Y,V;if(typeof V.then=="function")return vt(Y,Bc(V),J);if(V.$$typeof===L)return vt(Y,Ec(Y,V),J);zc(Y,V)}return null}function at(Y,V,J,pt){var kt=V!==null?V.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return kt!==null?null:A(Y,V,""+J,pt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case y:return J.key===kt?F(Y,V,J,pt):null;case S:return J.key===kt?tt(Y,V,J,pt):null;case X:return kt=J._init,J=kt(J._payload),at(Y,V,J,pt)}if(ft(J)||ct(J))return kt!==null?null:ht(Y,V,J,pt,null);if(typeof J.then=="function")return at(Y,V,Bc(J),pt);if(J.$$typeof===L)return at(Y,V,Ec(Y,J),pt);zc(Y,J)}return null}function st(Y,V,J,pt,kt){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return Y=Y.get(J)||null,A(V,Y,""+pt,kt);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case y:return Y=Y.get(pt.key===null?J:pt.key)||null,F(V,Y,pt,kt);case S:return Y=Y.get(pt.key===null?J:pt.key)||null,tt(V,Y,pt,kt);case X:var _e=pt._init;return pt=_e(pt._payload),st(Y,V,J,pt,kt)}if(ft(pt)||ct(pt))return Y=Y.get(J)||null,ht(V,Y,pt,kt,null);if(typeof pt.then=="function")return st(Y,V,J,Bc(pt),kt);if(pt.$$typeof===L)return st(Y,V,J,Ec(V,pt),kt);zc(V,pt)}return null}function ne(Y,V,J,pt){for(var kt=null,_e=null,jt=V,te=V=0,wn=null;jt!==null&&te<J.length;te++){jt.index>te?(wn=jt,jt=null):wn=jt.sibling;var Le=at(Y,jt,J[te],pt);if(Le===null){jt===null&&(jt=wn);break}n&&jt&&Le.alternate===null&&a(Y,jt),V=_(Le,V,te),_e===null?kt=Le:_e.sibling=Le,_e=Le,jt=wn}if(te===J.length)return l(Y,jt),Ue&&zs(Y,te),kt;if(jt===null){for(;te<J.length;te++)jt=vt(Y,J[te],pt),jt!==null&&(V=_(jt,V,te),_e===null?kt=jt:_e.sibling=jt,_e=jt);return Ue&&zs(Y,te),kt}for(jt=u(jt);te<J.length;te++)wn=st(jt,Y,te,J[te],pt),wn!==null&&(n&&wn.alternate!==null&&jt.delete(wn.key===null?te:wn.key),V=_(wn,V,te),_e===null?kt=wn:_e.sibling=wn,_e=wn);return n&&jt.forEach(function(fs){return a(Y,fs)}),Ue&&zs(Y,te),kt}function Qt(Y,V,J,pt){if(J==null)throw Error(s(151));for(var kt=null,_e=null,jt=V,te=V=0,wn=null,Le=J.next();jt!==null&&!Le.done;te++,Le=J.next()){jt.index>te?(wn=jt,jt=null):wn=jt.sibling;var fs=at(Y,jt,Le.value,pt);if(fs===null){jt===null&&(jt=wn);break}n&&jt&&fs.alternate===null&&a(Y,jt),V=_(fs,V,te),_e===null?kt=fs:_e.sibling=fs,_e=fs,jt=wn}if(Le.done)return l(Y,jt),Ue&&zs(Y,te),kt;if(jt===null){for(;!Le.done;te++,Le=J.next())Le=vt(Y,Le.value,pt),Le!==null&&(V=_(Le,V,te),_e===null?kt=Le:_e.sibling=Le,_e=Le);return Ue&&zs(Y,te),kt}for(jt=u(jt);!Le.done;te++,Le=J.next())Le=st(jt,Y,te,Le.value,pt),Le!==null&&(n&&Le.alternate!==null&&jt.delete(Le.key===null?te:Le.key),V=_(Le,V,te),_e===null?kt=Le:_e.sibling=Le,_e=Le);return n&&jt.forEach(function(BE){return a(Y,BE)}),Ue&&zs(Y,te),kt}function Ve(Y,V,J,pt){if(typeof J=="object"&&J!==null&&J.type===M&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case y:t:{for(var kt=J.key;V!==null;){if(V.key===kt){if(kt=J.type,kt===M){if(V.tag===7){l(Y,V.sibling),pt=m(V,J.props.children),pt.return=Y,Y=pt;break t}}else if(V.elementType===kt||typeof kt=="object"&&kt!==null&&kt.$$typeof===X&&W_(kt)===V.type){l(Y,V.sibling),pt=m(V,J.props),il(pt,J),pt.return=Y,Y=pt;break t}l(Y,V);break}else a(Y,V);V=V.sibling}J.type===M?(pt=Is(J.props.children,Y.mode,pt,J.key),pt.return=Y,Y=pt):(pt=xc(J.type,J.key,J.props,null,Y.mode,pt),il(pt,J),pt.return=Y,Y=pt)}return E(Y);case S:t:{for(kt=J.key;V!==null;){if(V.key===kt)if(V.tag===4&&V.stateNode.containerInfo===J.containerInfo&&V.stateNode.implementation===J.implementation){l(Y,V.sibling),pt=m(V,J.children||[]),pt.return=Y,Y=pt;break t}else{l(Y,V);break}else a(Y,V);V=V.sibling}pt=Wf(J,Y.mode,pt),pt.return=Y,Y=pt}return E(Y);case X:return kt=J._init,J=kt(J._payload),Ve(Y,V,J,pt)}if(ft(J))return ne(Y,V,J,pt);if(ct(J)){if(kt=ct(J),typeof kt!="function")throw Error(s(150));return J=kt.call(J),Qt(Y,V,J,pt)}if(typeof J.then=="function")return Ve(Y,V,Bc(J),pt);if(J.$$typeof===L)return Ve(Y,V,Ec(Y,J),pt);zc(Y,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,V!==null&&V.tag===6?(l(Y,V.sibling),pt=m(V,J),pt.return=Y,Y=pt):(l(Y,V),pt=jf(J,Y.mode,pt),pt.return=Y,Y=pt),E(Y)):l(Y,V)}return function(Y,V,J,pt){try{nl=0;var kt=Ve(Y,V,J,pt);return Cr=null,kt}catch(jt){if(jt===Yo||jt===Ac)throw jt;var _e=ri(29,jt,null,Y.mode);return _e.lanes=pt,_e.return=Y,_e}finally{}}}var Dr=Y_(!0),q_=Y_(!1),Si=et(null),Hi=null;function Za(n){var a=n.alternate;Mt(yn,yn.current&1),Mt(Si,n),Hi===null&&(a===null||Tr.current!==null||a.memoizedState!==null)&&(Hi=n)}function K_(n){if(n.tag===22){if(Mt(yn,yn.current),Mt(Si,n),Hi===null){var a=n.alternate;a!==null&&a.memoizedState!==null&&(Hi=n)}}else Qa()}function Qa(){Mt(yn,yn.current),Mt(Si,Si.current)}function pa(n){xt(Si),Hi===n&&(Hi=null),xt(yn)}var yn=et(0);function Fc(n){for(var a=n;a!==null;){if(a.tag===13){var l=a.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||pd(l)))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}function Th(n,a,l,u){a=n.memoizedState,l=l(u,a),l=l==null?a:g({},a,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var Ah={enqueueSetState:function(n,a,l){n=n._reactInternals;var u=ui(),m=Ya(u);m.payload=a,l!=null&&(m.callback=l),a=qa(n,m,u),a!==null&&(fi(a,n,u),Ko(a,n,u))},enqueueReplaceState:function(n,a,l){n=n._reactInternals;var u=ui(),m=Ya(u);m.tag=1,m.payload=a,l!=null&&(m.callback=l),a=qa(n,m,u),a!==null&&(fi(a,n,u),Ko(a,n,u))},enqueueForceUpdate:function(n,a){n=n._reactInternals;var l=ui(),u=Ya(l);u.tag=2,a!=null&&(u.callback=a),a=qa(n,u,l),a!==null&&(fi(a,n,l),Ko(a,n,l))}};function Z_(n,a,l,u,m,_,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,_,E):a.prototype&&a.prototype.isPureReactComponent?!Fo(l,u)||!Fo(m,_):!0}function Q_(n,a,l,u){n=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(l,u),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(l,u),a.state!==n&&Ah.enqueueReplaceState(a,a.state,null)}function js(n,a){var l=a;if("ref"in a){l={};for(var u in a)u!=="ref"&&(l[u]=a[u])}if(n=n.defaultProps){l===a&&(l=g({},l));for(var m in n)l[m]===void 0&&(l[m]=n[m])}return l}var Hc=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function J_(n){Hc(n)}function $_(n){console.error(n)}function t0(n){Hc(n)}function Gc(n,a){try{var l=n.onUncaughtError;l(a.value,{componentStack:a.stack})}catch(u){setTimeout(function(){throw u})}}function e0(n,a,l){try{var u=n.onCaughtError;u(l.value,{componentStack:l.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(m){setTimeout(function(){throw m})}}function wh(n,a,l){return l=Ya(l),l.tag=3,l.payload={element:null},l.callback=function(){Gc(n,a)},l}function n0(n){return n=Ya(n),n.tag=3,n}function i0(n,a,l,u){var m=l.type.getDerivedStateFromError;if(typeof m=="function"){var _=u.value;n.payload=function(){return m(_)},n.callback=function(){e0(a,l,u)}}var E=l.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(n.callback=function(){e0(a,l,u),typeof m!="function"&&(is===null?is=new Set([this]):is.add(this));var A=u.stack;this.componentDidCatch(u.value,{componentStack:A!==null?A:""})})}function BM(n,a,l,u,m){if(l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(a=l.alternate,a!==null&&Xo(a,l,m,!0),l=Si.current,l!==null){switch(l.tag){case 13:return Hi===null?Qh():l.alternate===null&&ln===0&&(ln=3),l.flags&=-257,l.flags|=65536,l.lanes=m,u===nh?l.flags|=16384:(a=l.updateQueue,a===null?l.updateQueue=new Set([u]):a.add(u),$h(n,u,m)),!1;case 22:return l.flags|=65536,u===nh?l.flags|=16384:(a=l.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([u])},l.updateQueue=a):(l=a.retryQueue,l===null?a.retryQueue=new Set([u]):l.add(u)),$h(n,u,m)),!1}throw Error(s(435,l.tag))}return $h(n,u,m),Qh(),!1}if(Ue)return a=Si.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=m,u!==Kf&&(n=Error(s(422),{cause:u}),Vo(_i(n,l)))):(u!==Kf&&(a=Error(s(423),{cause:u}),Vo(_i(a,l))),n=n.current.alternate,n.flags|=65536,m&=-m,n.lanes|=m,u=_i(u,l),m=wh(n.stateNode,u,m),sh(n,m),ln!==4&&(ln=2)),!1;var _=Error(s(520),{cause:u});if(_=_i(_,l),ul===null?ul=[_]:ul.push(_),ln!==4&&(ln=2),a===null)return!0;u=_i(u,l),l=a;do{switch(l.tag){case 3:return l.flags|=65536,n=m&-m,l.lanes|=n,n=wh(l.stateNode,u,n),sh(l,n),!1;case 1:if(a=l.type,_=l.stateNode,(l.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(is===null||!is.has(_))))return l.flags|=65536,m&=-m,l.lanes|=m,m=n0(m),i0(m,n,l,u),sh(l,m),!1}l=l.return}while(l!==null);return!1}var a0=Error(s(461)),Tn=!1;function Ln(n,a,l,u){a.child=n===null?q_(a,null,l,u):Dr(a,n.child,l,u)}function s0(n,a,l,u,m){l=l.render;var _=a.ref;if("ref"in u){var E={};for(var A in u)A!=="ref"&&(E[A]=u[A])}else E=u;return ks(a),u=uh(n,a,l,E,_,m),A=fh(),n!==null&&!Tn?(hh(n,a,m),ma(n,a,m)):(Ue&&A&&Yf(a),a.flags|=1,Ln(n,a,u,m),a.child)}function r0(n,a,l,u,m){if(n===null){var _=l.type;return typeof _=="function"&&!Xf(_)&&_.defaultProps===void 0&&l.compare===null?(a.tag=15,a.type=_,o0(n,a,_,u,m)):(n=xc(l.type,null,u,a,a.mode,m),n.ref=a.ref,n.return=a,a.child=n)}if(_=n.child,!Ph(n,m)){var E=_.memoizedProps;if(l=l.compare,l=l!==null?l:Fo,l(E,u)&&n.ref===a.ref)return ma(n,a,m)}return a.flags|=1,n=la(_,u),n.ref=a.ref,n.return=a,a.child=n}function o0(n,a,l,u,m){if(n!==null){var _=n.memoizedProps;if(Fo(_,u)&&n.ref===a.ref)if(Tn=!1,a.pendingProps=u=_,Ph(n,m))(n.flags&131072)!==0&&(Tn=!0);else return a.lanes=n.lanes,ma(n,a,m)}return Rh(n,a,l,u,m)}function l0(n,a,l){var u=a.pendingProps,m=u.children,_=n!==null?n.memoizedState:null;if(u.mode==="hidden"){if((a.flags&128)!==0){if(u=_!==null?_.baseLanes|l:l,n!==null){for(m=a.child=n.child,_=0;m!==null;)_=_|m.lanes|m.childLanes,m=m.sibling;a.childLanes=_&~u}else a.childLanes=0,a.child=null;return c0(n,a,u,l)}if((l&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},n!==null&&Tc(a,_!==null?_.cachePool:null),_!==null?o_(a,_):oh(),K_(a);else return a.lanes=a.childLanes=536870912,c0(n,a,_!==null?_.baseLanes|l:l,l)}else _!==null?(Tc(a,_.cachePool),o_(a,_),Qa(),a.memoizedState=null):(n!==null&&Tc(a,null),oh(),Qa());return Ln(n,a,m,l),a.child}function c0(n,a,l,u){var m=eh();return m=m===null?null:{parent:vn._currentValue,pool:m},a.memoizedState={baseLanes:l,cachePool:m},n!==null&&Tc(a,null),oh(),K_(a),n!==null&&Xo(n,a,u,!0),null}function kc(n,a){var l=a.ref;if(l===null)n!==null&&n.ref!==null&&(a.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(s(284));(n===null||n.ref!==l)&&(a.flags|=4194816)}}function Rh(n,a,l,u,m){return ks(a),l=uh(n,a,l,u,void 0,m),u=fh(),n!==null&&!Tn?(hh(n,a,m),ma(n,a,m)):(Ue&&u&&Yf(a),a.flags|=1,Ln(n,a,l,m),a.child)}function u0(n,a,l,u,m,_){return ks(a),a.updateQueue=null,l=c_(a,u,l,m),l_(n),u=fh(),n!==null&&!Tn?(hh(n,a,_),ma(n,a,_)):(Ue&&u&&Yf(a),a.flags|=1,Ln(n,a,l,_),a.child)}function f0(n,a,l,u,m){if(ks(a),a.stateNode===null){var _=xr,E=l.contextType;typeof E=="object"&&E!==null&&(_=zn(E)),_=new l(u,_),a.memoizedState=_.state!==null&&_.state!==void 0?_.state:null,_.updater=Ah,a.stateNode=_,_._reactInternals=a,_=a.stateNode,_.props=u,_.state=a.memoizedState,_.refs={},ih(a),E=l.contextType,_.context=typeof E=="object"&&E!==null?zn(E):xr,_.state=a.memoizedState,E=l.getDerivedStateFromProps,typeof E=="function"&&(Th(a,l,E,u),_.state=a.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof _.getSnapshotBeforeUpdate=="function"||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(E=_.state,typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount(),E!==_.state&&Ah.enqueueReplaceState(_,_.state,null),Qo(a,u,_,m),Zo(),_.state=a.memoizedState),typeof _.componentDidMount=="function"&&(a.flags|=4194308),u=!0}else if(n===null){_=a.stateNode;var A=a.memoizedProps,F=js(l,A);_.props=F;var tt=_.context,ht=l.contextType;E=xr,typeof ht=="object"&&ht!==null&&(E=zn(ht));var vt=l.getDerivedStateFromProps;ht=typeof vt=="function"||typeof _.getSnapshotBeforeUpdate=="function",A=a.pendingProps!==A,ht||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(A||tt!==E)&&Q_(a,_,u,E),Wa=!1;var at=a.memoizedState;_.state=at,Qo(a,u,_,m),Zo(),tt=a.memoizedState,A||at!==tt||Wa?(typeof vt=="function"&&(Th(a,l,vt,u),tt=a.memoizedState),(F=Wa||Z_(a,l,F,u,at,tt,E))?(ht||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(a.flags|=4194308)):(typeof _.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=u,a.memoizedState=tt),_.props=u,_.state=tt,_.context=E,u=F):(typeof _.componentDidMount=="function"&&(a.flags|=4194308),u=!1)}else{_=a.stateNode,ah(n,a),E=a.memoizedProps,ht=js(l,E),_.props=ht,vt=a.pendingProps,at=_.context,tt=l.contextType,F=xr,typeof tt=="object"&&tt!==null&&(F=zn(tt)),A=l.getDerivedStateFromProps,(tt=typeof A=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(E!==vt||at!==F)&&Q_(a,_,u,F),Wa=!1,at=a.memoizedState,_.state=at,Qo(a,u,_,m),Zo();var st=a.memoizedState;E!==vt||at!==st||Wa||n!==null&&n.dependencies!==null&&Mc(n.dependencies)?(typeof A=="function"&&(Th(a,l,A,u),st=a.memoizedState),(ht=Wa||Z_(a,l,ht,u,at,st,F)||n!==null&&n.dependencies!==null&&Mc(n.dependencies))?(tt||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(u,st,F),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(u,st,F)),typeof _.componentDidUpdate=="function"&&(a.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof _.componentDidUpdate!="function"||E===n.memoizedProps&&at===n.memoizedState||(a.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||E===n.memoizedProps&&at===n.memoizedState||(a.flags|=1024),a.memoizedProps=u,a.memoizedState=st),_.props=u,_.state=st,_.context=F,u=ht):(typeof _.componentDidUpdate!="function"||E===n.memoizedProps&&at===n.memoizedState||(a.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||E===n.memoizedProps&&at===n.memoizedState||(a.flags|=1024),u=!1)}return _=u,kc(n,a),u=(a.flags&128)!==0,_||u?(_=a.stateNode,l=u&&typeof l.getDerivedStateFromError!="function"?null:_.render(),a.flags|=1,n!==null&&u?(a.child=Dr(a,n.child,null,m),a.child=Dr(a,null,l,m)):Ln(n,a,l,m),a.memoizedState=_.state,n=a.child):n=ma(n,a,m),n}function h0(n,a,l,u){return ko(),a.flags|=256,Ln(n,a,l,u),a.child}var Ch={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Dh(n){return{baseLanes:n,cachePool:$g()}}function Nh(n,a,l){return n=n!==null?n.childLanes&~l:0,a&&(n|=bi),n}function d0(n,a,l){var u=a.pendingProps,m=!1,_=(a.flags&128)!==0,E;if((E=_)||(E=n!==null&&n.memoizedState===null?!1:(yn.current&2)!==0),E&&(m=!0,a.flags&=-129),E=(a.flags&32)!==0,a.flags&=-33,n===null){if(Ue){if(m?Za(a):Qa(),Ue){var A=on,F;if(F=A){t:{for(F=A,A=Fi;F.nodeType!==8;){if(!A){A=null;break t}if(F=Ci(F.nextSibling),F===null){A=null;break t}}A=F}A!==null?(a.memoizedState={dehydrated:A,treeContext:Bs!==null?{id:ca,overflow:ua}:null,retryLane:536870912,hydrationErrors:null},F=ri(18,null,null,0),F.stateNode=A,F.return=a,a.child=F,Vn=a,on=null,F=!0):F=!1}F||Hs(a)}if(A=a.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return pd(A)?a.lanes=32:a.lanes=536870912,null;pa(a)}return A=u.children,u=u.fallback,m?(Qa(),m=a.mode,A=Vc({mode:"hidden",children:A},m),u=Is(u,m,l,null),A.return=a,u.return=a,A.sibling=u,a.child=A,m=a.child,m.memoizedState=Dh(l),m.childLanes=Nh(n,E,l),a.memoizedState=Ch,u):(Za(a),Lh(a,A))}if(F=n.memoizedState,F!==null&&(A=F.dehydrated,A!==null)){if(_)a.flags&256?(Za(a),a.flags&=-257,a=Uh(n,a,l)):a.memoizedState!==null?(Qa(),a.child=n.child,a.flags|=128,a=null):(Qa(),m=u.fallback,A=a.mode,u=Vc({mode:"visible",children:u.children},A),m=Is(m,A,l,null),m.flags|=2,u.return=a,m.return=a,u.sibling=m,a.child=u,Dr(a,n.child,null,l),u=a.child,u.memoizedState=Dh(l),u.childLanes=Nh(n,E,l),a.memoizedState=Ch,a=m);else if(Za(a),pd(A)){if(E=A.nextSibling&&A.nextSibling.dataset,E)var tt=E.dgst;E=tt,u=Error(s(419)),u.stack="",u.digest=E,Vo({value:u,source:null,stack:null}),a=Uh(n,a,l)}else if(Tn||Xo(n,a,l,!1),E=(l&n.childLanes)!==0,Tn||E){if(E=Je,E!==null&&(u=l&-l,u=(u&42)!==0?1:Ze(u),u=(u&(E.suspendedLanes|l))!==0?0:u,u!==0&&u!==F.retryLane))throw F.retryLane=u,yr(n,u),fi(E,n,u),a0;A.data==="$?"||Qh(),a=Uh(n,a,l)}else A.data==="$?"?(a.flags|=192,a.child=n.child,a=null):(n=F.treeContext,on=Ci(A.nextSibling),Vn=a,Ue=!0,Fs=null,Fi=!1,n!==null&&(yi[xi++]=ca,yi[xi++]=ua,yi[xi++]=Bs,ca=n.id,ua=n.overflow,Bs=a),a=Lh(a,u.children),a.flags|=4096);return a}return m?(Qa(),m=u.fallback,A=a.mode,F=n.child,tt=F.sibling,u=la(F,{mode:"hidden",children:u.children}),u.subtreeFlags=F.subtreeFlags&65011712,tt!==null?m=la(tt,m):(m=Is(m,A,l,null),m.flags|=2),m.return=a,u.return=a,u.sibling=m,a.child=u,u=m,m=a.child,A=n.child.memoizedState,A===null?A=Dh(l):(F=A.cachePool,F!==null?(tt=vn._currentValue,F=F.parent!==tt?{parent:tt,pool:tt}:F):F=$g(),A={baseLanes:A.baseLanes|l,cachePool:F}),m.memoizedState=A,m.childLanes=Nh(n,E,l),a.memoizedState=Ch,u):(Za(a),l=n.child,n=l.sibling,l=la(l,{mode:"visible",children:u.children}),l.return=a,l.sibling=null,n!==null&&(E=a.deletions,E===null?(a.deletions=[n],a.flags|=16):E.push(n)),a.child=l,a.memoizedState=null,l)}function Lh(n,a){return a=Vc({mode:"visible",children:a},n.mode),a.return=n,n.child=a}function Vc(n,a){return n=ri(22,n,null,a),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function Uh(n,a,l){return Dr(a,n.child,null,l),n=Lh(a,a.pendingProps.children),n.flags|=2,a.memoizedState=null,n}function p0(n,a,l){n.lanes|=a;var u=n.alternate;u!==null&&(u.lanes|=a),Qf(n.return,a,l)}function Oh(n,a,l,u,m){var _=n.memoizedState;_===null?n.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:u,tail:l,tailMode:m}:(_.isBackwards=a,_.rendering=null,_.renderingStartTime=0,_.last=u,_.tail=l,_.tailMode=m)}function m0(n,a,l){var u=a.pendingProps,m=u.revealOrder,_=u.tail;if(Ln(n,a,u.children,l),u=yn.current,(u&2)!==0)u=u&1|2,a.flags|=128;else{if(n!==null&&(n.flags&128)!==0)t:for(n=a.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&p0(n,l,a);else if(n.tag===19)p0(n,l,a);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===a)break t;for(;n.sibling===null;){if(n.return===null||n.return===a)break t;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}switch(Mt(yn,u),m){case"forwards":for(l=a.child,m=null;l!==null;)n=l.alternate,n!==null&&Fc(n)===null&&(m=l),l=l.sibling;l=m,l===null?(m=a.child,a.child=null):(m=l.sibling,l.sibling=null),Oh(a,!1,m,l,_);break;case"backwards":for(l=null,m=a.child,a.child=null;m!==null;){if(n=m.alternate,n!==null&&Fc(n)===null){a.child=m;break}n=m.sibling,m.sibling=l,l=m,m=n}Oh(a,!0,l,null,_);break;case"together":Oh(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function ma(n,a,l){if(n!==null&&(a.dependencies=n.dependencies),ns|=a.lanes,(l&a.childLanes)===0)if(n!==null){if(Xo(n,a,l,!1),(l&a.childLanes)===0)return null}else return null;if(n!==null&&a.child!==n.child)throw Error(s(153));if(a.child!==null){for(n=a.child,l=la(n,n.pendingProps),a.child=l,l.return=a;n.sibling!==null;)n=n.sibling,l=l.sibling=la(n,n.pendingProps),l.return=a;l.sibling=null}return a.child}function Ph(n,a){return(n.lanes&a)!==0?!0:(n=n.dependencies,!!(n!==null&&Mc(n)))}function zM(n,a,l){switch(a.tag){case 3:It(a,a.stateNode.containerInfo),ja(a,vn,n.memoizedState.cache),ko();break;case 27:case 5:Jt(a);break;case 4:It(a,a.stateNode.containerInfo);break;case 10:ja(a,a.type,a.memoizedProps.value);break;case 13:var u=a.memoizedState;if(u!==null)return u.dehydrated!==null?(Za(a),a.flags|=128,null):(l&a.child.childLanes)!==0?d0(n,a,l):(Za(a),n=ma(n,a,l),n!==null?n.sibling:null);Za(a);break;case 19:var m=(n.flags&128)!==0;if(u=(l&a.childLanes)!==0,u||(Xo(n,a,l,!1),u=(l&a.childLanes)!==0),m){if(u)return m0(n,a,l);a.flags|=128}if(m=a.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),Mt(yn,yn.current),u)break;return null;case 22:case 23:return a.lanes=0,l0(n,a,l);case 24:ja(a,vn,n.memoizedState.cache)}return ma(n,a,l)}function g0(n,a,l){if(n!==null)if(n.memoizedProps!==a.pendingProps)Tn=!0;else{if(!Ph(n,l)&&(a.flags&128)===0)return Tn=!1,zM(n,a,l);Tn=(n.flags&131072)!==0}else Tn=!1,Ue&&(a.flags&1048576)!==0&&Wg(a,bc,a.index);switch(a.lanes=0,a.tag){case 16:t:{n=a.pendingProps;var u=a.elementType,m=u._init;if(u=m(u._payload),a.type=u,typeof u=="function")Xf(u)?(n=js(u,n),a.tag=1,a=f0(null,a,u,n,l)):(a.tag=0,a=Rh(null,a,u,n,l));else{if(u!=null){if(m=u.$$typeof,m===w){a.tag=11,a=s0(null,a,u,n,l);break t}else if(m===B){a.tag=14,a=r0(null,a,u,n,l);break t}}throw a=mt(u)||u,Error(s(306,a,""))}}return a;case 0:return Rh(n,a,a.type,a.pendingProps,l);case 1:return u=a.type,m=js(u,a.pendingProps),f0(n,a,u,m,l);case 3:t:{if(It(a,a.stateNode.containerInfo),n===null)throw Error(s(387));u=a.pendingProps;var _=a.memoizedState;m=_.element,ah(n,a),Qo(a,u,null,l);var E=a.memoizedState;if(u=E.cache,ja(a,vn,u),u!==_.cache&&Jf(a,[vn],l,!0),Zo(),u=E.element,_.isDehydrated)if(_={element:u,isDehydrated:!1,cache:E.cache},a.updateQueue.baseState=_,a.memoizedState=_,a.flags&256){a=h0(n,a,u,l);break t}else if(u!==m){m=_i(Error(s(424)),a),Vo(m),a=h0(n,a,u,l);break t}else{switch(n=a.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(on=Ci(n.firstChild),Vn=a,Ue=!0,Fs=null,Fi=!0,l=q_(a,null,u,l),a.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(ko(),u===m){a=ma(n,a,l);break t}Ln(n,a,u,l)}a=a.child}return a;case 26:return kc(n,a),n===null?(l=xv(a.type,null,a.pendingProps,null))?a.memoizedState=l:Ue||(l=a.type,n=a.pendingProps,u=iu(bt.current).createElement(l),u[gn]=a,u[Dn]=n,On(u,l,n),hn(u),a.stateNode=u):a.memoizedState=xv(a.type,n.memoizedProps,a.pendingProps,n.memoizedState),null;case 27:return Jt(a),n===null&&Ue&&(u=a.stateNode=_v(a.type,a.pendingProps,bt.current),Vn=a,Fi=!0,m=on,rs(a.type)?(md=m,on=Ci(u.firstChild)):on=m),Ln(n,a,a.pendingProps.children,l),kc(n,a),n===null&&(a.flags|=4194304),a.child;case 5:return n===null&&Ue&&((m=u=on)&&(u=hE(u,a.type,a.pendingProps,Fi),u!==null?(a.stateNode=u,Vn=a,on=Ci(u.firstChild),Fi=!1,m=!0):m=!1),m||Hs(a)),Jt(a),m=a.type,_=a.pendingProps,E=n!==null?n.memoizedProps:null,u=_.children,fd(m,_)?u=null:E!==null&&fd(m,E)&&(a.flags|=32),a.memoizedState!==null&&(m=uh(n,a,DM,null,null,l),yl._currentValue=m),kc(n,a),Ln(n,a,u,l),a.child;case 6:return n===null&&Ue&&((n=l=on)&&(l=dE(l,a.pendingProps,Fi),l!==null?(a.stateNode=l,Vn=a,on=null,n=!0):n=!1),n||Hs(a)),null;case 13:return d0(n,a,l);case 4:return It(a,a.stateNode.containerInfo),u=a.pendingProps,n===null?a.child=Dr(a,null,u,l):Ln(n,a,u,l),a.child;case 11:return s0(n,a,a.type,a.pendingProps,l);case 7:return Ln(n,a,a.pendingProps,l),a.child;case 8:return Ln(n,a,a.pendingProps.children,l),a.child;case 12:return Ln(n,a,a.pendingProps.children,l),a.child;case 10:return u=a.pendingProps,ja(a,a.type,u.value),Ln(n,a,u.children,l),a.child;case 9:return m=a.type._context,u=a.pendingProps.children,ks(a),m=zn(m),u=u(m),a.flags|=1,Ln(n,a,u,l),a.child;case 14:return r0(n,a,a.type,a.pendingProps,l);case 15:return o0(n,a,a.type,a.pendingProps,l);case 19:return m0(n,a,l);case 31:return u=a.pendingProps,l=a.mode,u={mode:u.mode,children:u.children},n===null?(l=Vc(u,l),l.ref=a.ref,a.child=l,l.return=a,a=l):(l=la(n.child,u),l.ref=a.ref,a.child=l,l.return=a,a=l),a;case 22:return l0(n,a,l);case 24:return ks(a),u=zn(vn),n===null?(m=eh(),m===null&&(m=Je,_=$f(),m.pooledCache=_,_.refCount++,_!==null&&(m.pooledCacheLanes|=l),m=_),a.memoizedState={parent:u,cache:m},ih(a),ja(a,vn,m)):((n.lanes&l)!==0&&(ah(n,a),Qo(a,null,null,l),Zo()),m=n.memoizedState,_=a.memoizedState,m.parent!==u?(m={parent:u,cache:u},a.memoizedState=m,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=m),ja(a,vn,u)):(u=_.cache,ja(a,vn,u),u!==m.cache&&Jf(a,[vn],l,!0))),Ln(n,a,a.pendingProps.children,l),a.child;case 29:throw a.pendingProps}throw Error(s(156,a.tag))}function ga(n){n.flags|=4}function _0(n,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!Tv(a)){if(a=Si.current,a!==null&&((we&4194048)===we?Hi!==null:(we&62914560)!==we&&(we&536870912)===0||a!==Hi))throw qo=nh,t_;n.flags|=8192}}function Xc(n,a){a!==null&&(n.flags|=4),n.flags&16384&&(a=n.tag!==22?Ot():536870912,n.lanes|=a,Or|=a)}function al(n,a){if(!Ue)switch(n.tailMode){case"hidden":a=n.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var u=null;l!==null;)l.alternate!==null&&(u=l),l=l.sibling;u===null?a||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function an(n){var a=n.alternate!==null&&n.alternate.child===n.child,l=0,u=0;if(a)for(var m=n.child;m!==null;)l|=m.lanes|m.childLanes,u|=m.subtreeFlags&65011712,u|=m.flags&65011712,m.return=n,m=m.sibling;else for(m=n.child;m!==null;)l|=m.lanes|m.childLanes,u|=m.subtreeFlags,u|=m.flags,m.return=n,m=m.sibling;return n.subtreeFlags|=u,n.childLanes=l,a}function FM(n,a,l){var u=a.pendingProps;switch(qf(a),a.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return an(a),null;case 1:return an(a),null;case 3:return l=a.stateNode,u=null,n!==null&&(u=n.memoizedState.cache),a.memoizedState.cache!==u&&(a.flags|=2048),ha(vn),fe(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(n===null||n.child===null)&&(Go(a)?ga(a):n===null||n.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,Kg())),an(a),null;case 26:return l=a.memoizedState,n===null?(ga(a),l!==null?(an(a),_0(a,l)):(an(a),a.flags&=-16777217)):l?l!==n.memoizedState?(ga(a),an(a),_0(a,l)):(an(a),a.flags&=-16777217):(n.memoizedProps!==u&&ga(a),an(a),a.flags&=-16777217),null;case 27:Ke(a),l=bt.current;var m=a.type;if(n!==null&&a.stateNode!=null)n.memoizedProps!==u&&ga(a);else{if(!u){if(a.stateNode===null)throw Error(s(166));return an(a),null}n=$.current,Go(a)?Yg(a):(n=_v(m,u,l),a.stateNode=n,ga(a))}return an(a),null;case 5:if(Ke(a),l=a.type,n!==null&&a.stateNode!=null)n.memoizedProps!==u&&ga(a);else{if(!u){if(a.stateNode===null)throw Error(s(166));return an(a),null}if(n=$.current,Go(a))Yg(a);else{switch(m=iu(bt.current),n){case 1:n=m.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:n=m.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":n=m.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":n=m.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":n=m.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof u.is=="string"?m.createElement("select",{is:u.is}):m.createElement("select"),u.multiple?n.multiple=!0:u.size&&(n.size=u.size);break;default:n=typeof u.is=="string"?m.createElement(l,{is:u.is}):m.createElement(l)}}n[gn]=a,n[Dn]=u;t:for(m=a.child;m!==null;){if(m.tag===5||m.tag===6)n.appendChild(m.stateNode);else if(m.tag!==4&&m.tag!==27&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===a)break t;for(;m.sibling===null;){if(m.return===null||m.return===a)break t;m=m.return}m.sibling.return=m.return,m=m.sibling}a.stateNode=n;t:switch(On(n,l,u),l){case"button":case"input":case"select":case"textarea":n=!!u.autoFocus;break t;case"img":n=!0;break t;default:n=!1}n&&ga(a)}}return an(a),a.flags&=-16777217,null;case 6:if(n&&a.stateNode!=null)n.memoizedProps!==u&&ga(a);else{if(typeof u!="string"&&a.stateNode===null)throw Error(s(166));if(n=bt.current,Go(a)){if(n=a.stateNode,l=a.memoizedProps,u=null,m=Vn,m!==null)switch(m.tag){case 27:case 5:u=m.memoizedProps}n[gn]=a,n=!!(n.nodeValue===l||u!==null&&u.suppressHydrationWarning===!0||uv(n.nodeValue,l)),n||Hs(a)}else n=iu(n).createTextNode(u),n[gn]=a,a.stateNode=n}return an(a),null;case 13:if(u=a.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(m=Go(a),u!==null&&u.dehydrated!==null){if(n===null){if(!m)throw Error(s(318));if(m=a.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(s(317));m[gn]=a}else ko(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;an(a),m=!1}else m=Kg(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=m),m=!0;if(!m)return a.flags&256?(pa(a),a):(pa(a),null)}if(pa(a),(a.flags&128)!==0)return a.lanes=l,a;if(l=u!==null,n=n!==null&&n.memoizedState!==null,l){u=a.child,m=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(m=u.alternate.memoizedState.cachePool.pool);var _=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(_=u.memoizedState.cachePool.pool),_!==m&&(u.flags|=2048)}return l!==n&&l&&(a.child.flags|=8192),Xc(a,a.updateQueue),an(a),null;case 4:return fe(),n===null&&rd(a.stateNode.containerInfo),an(a),null;case 10:return ha(a.type),an(a),null;case 19:if(xt(yn),m=a.memoizedState,m===null)return an(a),null;if(u=(a.flags&128)!==0,_=m.rendering,_===null)if(u)al(m,!1);else{if(ln!==0||n!==null&&(n.flags&128)!==0)for(n=a.child;n!==null;){if(_=Fc(n),_!==null){for(a.flags|=128,al(m,!1),n=_.updateQueue,a.updateQueue=n,Xc(a,n),a.subtreeFlags=0,n=l,l=a.child;l!==null;)jg(l,n),l=l.sibling;return Mt(yn,yn.current&1|2),a.child}n=n.sibling}m.tail!==null&&ae()>Yc&&(a.flags|=128,u=!0,al(m,!1),a.lanes=4194304)}else{if(!u)if(n=Fc(_),n!==null){if(a.flags|=128,u=!0,n=n.updateQueue,a.updateQueue=n,Xc(a,n),al(m,!0),m.tail===null&&m.tailMode==="hidden"&&!_.alternate&&!Ue)return an(a),null}else 2*ae()-m.renderingStartTime>Yc&&l!==536870912&&(a.flags|=128,u=!0,al(m,!1),a.lanes=4194304);m.isBackwards?(_.sibling=a.child,a.child=_):(n=m.last,n!==null?n.sibling=_:a.child=_,m.last=_)}return m.tail!==null?(a=m.tail,m.rendering=a,m.tail=a.sibling,m.renderingStartTime=ae(),a.sibling=null,n=yn.current,Mt(yn,u?n&1|2:n&1),a):(an(a),null);case 22:case 23:return pa(a),lh(),u=a.memoizedState!==null,n!==null?n.memoizedState!==null!==u&&(a.flags|=8192):u&&(a.flags|=8192),u?(l&536870912)!==0&&(a.flags&128)===0&&(an(a),a.subtreeFlags&6&&(a.flags|=8192)):an(a),l=a.updateQueue,l!==null&&Xc(a,l.retryQueue),l=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),u=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(u=a.memoizedState.cachePool.pool),u!==l&&(a.flags|=2048),n!==null&&xt(Vs),null;case 24:return l=null,n!==null&&(l=n.memoizedState.cache),a.memoizedState.cache!==l&&(a.flags|=2048),ha(vn),an(a),null;case 25:return null;case 30:return null}throw Error(s(156,a.tag))}function HM(n,a){switch(qf(a),a.tag){case 1:return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 3:return ha(vn),fe(),n=a.flags,(n&65536)!==0&&(n&128)===0?(a.flags=n&-65537|128,a):null;case 26:case 27:case 5:return Ke(a),null;case 13:if(pa(a),n=a.memoizedState,n!==null&&n.dehydrated!==null){if(a.alternate===null)throw Error(s(340));ko()}return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 19:return xt(yn),null;case 4:return fe(),null;case 10:return ha(a.type),null;case 22:case 23:return pa(a),lh(),n!==null&&xt(Vs),n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 24:return ha(vn),null;case 25:return null;default:return null}}function v0(n,a){switch(qf(a),a.tag){case 3:ha(vn),fe();break;case 26:case 27:case 5:Ke(a);break;case 4:fe();break;case 13:pa(a);break;case 19:xt(yn);break;case 10:ha(a.type);break;case 22:case 23:pa(a),lh(),n!==null&&xt(Vs);break;case 24:ha(vn)}}function sl(n,a){try{var l=a.updateQueue,u=l!==null?l.lastEffect:null;if(u!==null){var m=u.next;l=m;do{if((l.tag&n)===n){u=void 0;var _=l.create,E=l.inst;u=_(),E.destroy=u}l=l.next}while(l!==m)}}catch(A){qe(a,a.return,A)}}function Ja(n,a,l){try{var u=a.updateQueue,m=u!==null?u.lastEffect:null;if(m!==null){var _=m.next;u=_;do{if((u.tag&n)===n){var E=u.inst,A=E.destroy;if(A!==void 0){E.destroy=void 0,m=a;var F=l,tt=A;try{tt()}catch(ht){qe(m,F,ht)}}}u=u.next}while(u!==_)}}catch(ht){qe(a,a.return,ht)}}function y0(n){var a=n.updateQueue;if(a!==null){var l=n.stateNode;try{r_(a,l)}catch(u){qe(n,n.return,u)}}}function x0(n,a,l){l.props=js(n.type,n.memoizedProps),l.state=n.memoizedState;try{l.componentWillUnmount()}catch(u){qe(n,a,u)}}function rl(n,a){try{var l=n.ref;if(l!==null){switch(n.tag){case 26:case 27:case 5:var u=n.stateNode;break;case 30:u=n.stateNode;break;default:u=n.stateNode}typeof l=="function"?n.refCleanup=l(u):l.current=u}}catch(m){qe(n,a,m)}}function Gi(n,a){var l=n.ref,u=n.refCleanup;if(l!==null)if(typeof u=="function")try{u()}catch(m){qe(n,a,m)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(m){qe(n,a,m)}else l.current=null}function S0(n){var a=n.type,l=n.memoizedProps,u=n.stateNode;try{t:switch(a){case"button":case"input":case"select":case"textarea":l.autoFocus&&u.focus();break t;case"img":l.src?u.src=l.src:l.srcSet&&(u.srcset=l.srcSet)}}catch(m){qe(n,n.return,m)}}function Ih(n,a,l){try{var u=n.stateNode;oE(u,n.type,l,a),u[Dn]=a}catch(m){qe(n,n.return,m)}}function b0(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&rs(n.type)||n.tag===4}function Bh(n){t:for(;;){for(;n.sibling===null;){if(n.return===null||b0(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&rs(n.type)||n.flags&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function zh(n,a,l){var u=n.tag;if(u===5||u===6)n=n.stateNode,a?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(n,a):(a=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,a.appendChild(n),l=l._reactRootContainer,l!=null||a.onclick!==null||(a.onclick=nu));else if(u!==4&&(u===27&&rs(n.type)&&(l=n.stateNode,a=null),n=n.child,n!==null))for(zh(n,a,l),n=n.sibling;n!==null;)zh(n,a,l),n=n.sibling}function jc(n,a,l){var u=n.tag;if(u===5||u===6)n=n.stateNode,a?l.insertBefore(n,a):l.appendChild(n);else if(u!==4&&(u===27&&rs(n.type)&&(l=n.stateNode),n=n.child,n!==null))for(jc(n,a,l),n=n.sibling;n!==null;)jc(n,a,l),n=n.sibling}function M0(n){var a=n.stateNode,l=n.memoizedProps;try{for(var u=n.type,m=a.attributes;m.length;)a.removeAttributeNode(m[0]);On(a,u,l),a[gn]=n,a[Dn]=l}catch(_){qe(n,n.return,_)}}var _a=!1,un=!1,Fh=!1,E0=typeof WeakSet=="function"?WeakSet:Set,An=null;function GM(n,a){if(n=n.containerInfo,cd=cu,n=Pg(n),Bf(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else t:{l=(l=n.ownerDocument)&&l.defaultView||window;var u=l.getSelection&&l.getSelection();if(u&&u.rangeCount!==0){l=u.anchorNode;var m=u.anchorOffset,_=u.focusNode;u=u.focusOffset;try{l.nodeType,_.nodeType}catch{l=null;break t}var E=0,A=-1,F=-1,tt=0,ht=0,vt=n,at=null;e:for(;;){for(var st;vt!==l||m!==0&&vt.nodeType!==3||(A=E+m),vt!==_||u!==0&&vt.nodeType!==3||(F=E+u),vt.nodeType===3&&(E+=vt.nodeValue.length),(st=vt.firstChild)!==null;)at=vt,vt=st;for(;;){if(vt===n)break e;if(at===l&&++tt===m&&(A=E),at===_&&++ht===u&&(F=E),(st=vt.nextSibling)!==null)break;vt=at,at=vt.parentNode}vt=st}l=A===-1||F===-1?null:{start:A,end:F}}else l=null}l=l||{start:0,end:0}}else l=null;for(ud={focusedElem:n,selectionRange:l},cu=!1,An=a;An!==null;)if(a=An,n=a.child,(a.subtreeFlags&1024)!==0&&n!==null)n.return=a,An=n;else for(;An!==null;){switch(a=An,_=a.alternate,n=a.flags,a.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&_!==null){n=void 0,l=a,m=_.memoizedProps,_=_.memoizedState,u=l.stateNode;try{var ne=js(l.type,m,l.elementType===l.type);n=u.getSnapshotBeforeUpdate(ne,_),u.__reactInternalSnapshotBeforeUpdate=n}catch(Qt){qe(l,l.return,Qt)}}break;case 3:if((n&1024)!==0){if(n=a.stateNode.containerInfo,l=n.nodeType,l===9)dd(n);else if(l===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":dd(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(s(163))}if(n=a.sibling,n!==null){n.return=a.return,An=n;break}An=a.return}}function T0(n,a,l){var u=l.flags;switch(l.tag){case 0:case 11:case 15:$a(n,l),u&4&&sl(5,l);break;case 1:if($a(n,l),u&4)if(n=l.stateNode,a===null)try{n.componentDidMount()}catch(E){qe(l,l.return,E)}else{var m=js(l.type,a.memoizedProps);a=a.memoizedState;try{n.componentDidUpdate(m,a,n.__reactInternalSnapshotBeforeUpdate)}catch(E){qe(l,l.return,E)}}u&64&&y0(l),u&512&&rl(l,l.return);break;case 3:if($a(n,l),u&64&&(n=l.updateQueue,n!==null)){if(a=null,l.child!==null)switch(l.child.tag){case 27:case 5:a=l.child.stateNode;break;case 1:a=l.child.stateNode}try{r_(n,a)}catch(E){qe(l,l.return,E)}}break;case 27:a===null&&u&4&&M0(l);case 26:case 5:$a(n,l),a===null&&u&4&&S0(l),u&512&&rl(l,l.return);break;case 12:$a(n,l);break;case 13:$a(n,l),u&4&&R0(n,l),u&64&&(n=l.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(l=ZM.bind(null,l),pE(n,l))));break;case 22:if(u=l.memoizedState!==null||_a,!u){a=a!==null&&a.memoizedState!==null||un,m=_a;var _=un;_a=u,(un=a)&&!_?ts(n,l,(l.subtreeFlags&8772)!==0):$a(n,l),_a=m,un=_}break;case 30:break;default:$a(n,l)}}function A0(n){var a=n.alternate;a!==null&&(n.alternate=null,A0(a)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(a=n.stateNode,a!==null&&Ga(a)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var en=null,ti=!1;function va(n,a,l){for(l=l.child;l!==null;)w0(n,a,l),l=l.sibling}function w0(n,a,l){if(Ft&&typeof Ft.onCommitFiberUnmount=="function")try{Ft.onCommitFiberUnmount(dt,l)}catch{}switch(l.tag){case 26:un||Gi(l,a),va(n,a,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:un||Gi(l,a);var u=en,m=ti;rs(l.type)&&(en=l.stateNode,ti=!1),va(n,a,l),ml(l.stateNode),en=u,ti=m;break;case 5:un||Gi(l,a);case 6:if(u=en,m=ti,en=null,va(n,a,l),en=u,ti=m,en!==null)if(ti)try{(en.nodeType===9?en.body:en.nodeName==="HTML"?en.ownerDocument.body:en).removeChild(l.stateNode)}catch(_){qe(l,a,_)}else try{en.removeChild(l.stateNode)}catch(_){qe(l,a,_)}break;case 18:en!==null&&(ti?(n=en,mv(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,l.stateNode),Ml(n)):mv(en,l.stateNode));break;case 4:u=en,m=ti,en=l.stateNode.containerInfo,ti=!0,va(n,a,l),en=u,ti=m;break;case 0:case 11:case 14:case 15:un||Ja(2,l,a),un||Ja(4,l,a),va(n,a,l);break;case 1:un||(Gi(l,a),u=l.stateNode,typeof u.componentWillUnmount=="function"&&x0(l,a,u)),va(n,a,l);break;case 21:va(n,a,l);break;case 22:un=(u=un)||l.memoizedState!==null,va(n,a,l),un=u;break;default:va(n,a,l)}}function R0(n,a){if(a.memoizedState===null&&(n=a.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{Ml(n)}catch(l){qe(a,a.return,l)}}function kM(n){switch(n.tag){case 13:case 19:var a=n.stateNode;return a===null&&(a=n.stateNode=new E0),a;case 22:return n=n.stateNode,a=n._retryCache,a===null&&(a=n._retryCache=new E0),a;default:throw Error(s(435,n.tag))}}function Hh(n,a){var l=kM(n);a.forEach(function(u){var m=QM.bind(null,n,u);l.has(u)||(l.add(u),u.then(m,m))})}function oi(n,a){var l=a.deletions;if(l!==null)for(var u=0;u<l.length;u++){var m=l[u],_=n,E=a,A=E;t:for(;A!==null;){switch(A.tag){case 27:if(rs(A.type)){en=A.stateNode,ti=!1;break t}break;case 5:en=A.stateNode,ti=!1;break t;case 3:case 4:en=A.stateNode.containerInfo,ti=!0;break t}A=A.return}if(en===null)throw Error(s(160));w0(_,E,m),en=null,ti=!1,_=m.alternate,_!==null&&(_.return=null),m.return=null}if(a.subtreeFlags&13878)for(a=a.child;a!==null;)C0(a,n),a=a.sibling}var Ri=null;function C0(n,a){var l=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:oi(a,n),li(n),u&4&&(Ja(3,n,n.return),sl(3,n),Ja(5,n,n.return));break;case 1:oi(a,n),li(n),u&512&&(un||l===null||Gi(l,l.return)),u&64&&_a&&(n=n.updateQueue,n!==null&&(u=n.callbacks,u!==null&&(l=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=l===null?u:l.concat(u))));break;case 26:var m=Ri;if(oi(a,n),li(n),u&512&&(un||l===null||Gi(l,l.return)),u&4){var _=l!==null?l.memoizedState:null;if(u=n.memoizedState,l===null)if(u===null)if(n.stateNode===null){t:{u=n.type,l=n.memoizedProps,m=m.ownerDocument||m;e:switch(u){case"title":_=m.getElementsByTagName("title")[0],(!_||_[Ha]||_[gn]||_.namespaceURI==="http://www.w3.org/2000/svg"||_.hasAttribute("itemprop"))&&(_=m.createElement(u),m.head.insertBefore(_,m.querySelector("head > title"))),On(_,u,l),_[gn]=n,hn(_),u=_;break t;case"link":var E=Mv("link","href",m).get(u+(l.href||""));if(E){for(var A=0;A<E.length;A++)if(_=E[A],_.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&_.getAttribute("rel")===(l.rel==null?null:l.rel)&&_.getAttribute("title")===(l.title==null?null:l.title)&&_.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){E.splice(A,1);break e}}_=m.createElement(u),On(_,u,l),m.head.appendChild(_);break;case"meta":if(E=Mv("meta","content",m).get(u+(l.content||""))){for(A=0;A<E.length;A++)if(_=E[A],_.getAttribute("content")===(l.content==null?null:""+l.content)&&_.getAttribute("name")===(l.name==null?null:l.name)&&_.getAttribute("property")===(l.property==null?null:l.property)&&_.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&_.getAttribute("charset")===(l.charSet==null?null:l.charSet)){E.splice(A,1);break e}}_=m.createElement(u),On(_,u,l),m.head.appendChild(_);break;default:throw Error(s(468,u))}_[gn]=n,hn(_),u=_}n.stateNode=u}else Ev(m,n.type,n.stateNode);else n.stateNode=bv(m,u,n.memoizedProps);else _!==u?(_===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):_.count--,u===null?Ev(m,n.type,n.stateNode):bv(m,u,n.memoizedProps)):u===null&&n.stateNode!==null&&Ih(n,n.memoizedProps,l.memoizedProps)}break;case 27:oi(a,n),li(n),u&512&&(un||l===null||Gi(l,l.return)),l!==null&&u&4&&Ih(n,n.memoizedProps,l.memoizedProps);break;case 5:if(oi(a,n),li(n),u&512&&(un||l===null||Gi(l,l.return)),n.flags&32){m=n.stateNode;try{zi(m,"")}catch(st){qe(n,n.return,st)}}u&4&&n.stateNode!=null&&(m=n.memoizedProps,Ih(n,m,l!==null?l.memoizedProps:m)),u&1024&&(Fh=!0);break;case 6:if(oi(a,n),li(n),u&4){if(n.stateNode===null)throw Error(s(162));u=n.memoizedProps,l=n.stateNode;try{l.nodeValue=u}catch(st){qe(n,n.return,st)}}break;case 3:if(ru=null,m=Ri,Ri=au(a.containerInfo),oi(a,n),Ri=m,li(n),u&4&&l!==null&&l.memoizedState.isDehydrated)try{Ml(a.containerInfo)}catch(st){qe(n,n.return,st)}Fh&&(Fh=!1,D0(n));break;case 4:u=Ri,Ri=au(n.stateNode.containerInfo),oi(a,n),li(n),Ri=u;break;case 12:oi(a,n),li(n);break;case 13:oi(a,n),li(n),n.child.flags&8192&&n.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Wh=ae()),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,Hh(n,u)));break;case 22:m=n.memoizedState!==null;var F=l!==null&&l.memoizedState!==null,tt=_a,ht=un;if(_a=tt||m,un=ht||F,oi(a,n),un=ht,_a=tt,li(n),u&8192)t:for(a=n.stateNode,a._visibility=m?a._visibility&-2:a._visibility|1,m&&(l===null||F||_a||un||Ws(n)),l=null,a=n;;){if(a.tag===5||a.tag===26){if(l===null){F=l=a;try{if(_=F.stateNode,m)E=_.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{A=F.stateNode;var vt=F.memoizedProps.style,at=vt!=null&&vt.hasOwnProperty("display")?vt.display:null;A.style.display=at==null||typeof at=="boolean"?"":(""+at).trim()}}catch(st){qe(F,F.return,st)}}}else if(a.tag===6){if(l===null){F=a;try{F.stateNode.nodeValue=m?"":F.memoizedProps}catch(st){qe(F,F.return,st)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===n)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break t;for(;a.sibling===null;){if(a.return===null||a.return===n)break t;l===a&&(l=null),a=a.return}l===a&&(l=null),a.sibling.return=a.return,a=a.sibling}u&4&&(u=n.updateQueue,u!==null&&(l=u.retryQueue,l!==null&&(u.retryQueue=null,Hh(n,l))));break;case 19:oi(a,n),li(n),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,Hh(n,u)));break;case 30:break;case 21:break;default:oi(a,n),li(n)}}function li(n){var a=n.flags;if(a&2){try{for(var l,u=n.return;u!==null;){if(b0(u)){l=u;break}u=u.return}if(l==null)throw Error(s(160));switch(l.tag){case 27:var m=l.stateNode,_=Bh(n);jc(n,_,m);break;case 5:var E=l.stateNode;l.flags&32&&(zi(E,""),l.flags&=-33);var A=Bh(n);jc(n,A,E);break;case 3:case 4:var F=l.stateNode.containerInfo,tt=Bh(n);zh(n,tt,F);break;default:throw Error(s(161))}}catch(ht){qe(n,n.return,ht)}n.flags&=-3}a&4096&&(n.flags&=-4097)}function D0(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var a=n;D0(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),n=n.sibling}}function $a(n,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)T0(n,a.alternate,a),a=a.sibling}function Ws(n){for(n=n.child;n!==null;){var a=n;switch(a.tag){case 0:case 11:case 14:case 15:Ja(4,a,a.return),Ws(a);break;case 1:Gi(a,a.return);var l=a.stateNode;typeof l.componentWillUnmount=="function"&&x0(a,a.return,l),Ws(a);break;case 27:ml(a.stateNode);case 26:case 5:Gi(a,a.return),Ws(a);break;case 22:a.memoizedState===null&&Ws(a);break;case 30:Ws(a);break;default:Ws(a)}n=n.sibling}}function ts(n,a,l){for(l=l&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var u=a.alternate,m=n,_=a,E=_.flags;switch(_.tag){case 0:case 11:case 15:ts(m,_,l),sl(4,_);break;case 1:if(ts(m,_,l),u=_,m=u.stateNode,typeof m.componentDidMount=="function")try{m.componentDidMount()}catch(tt){qe(u,u.return,tt)}if(u=_,m=u.updateQueue,m!==null){var A=u.stateNode;try{var F=m.shared.hiddenCallbacks;if(F!==null)for(m.shared.hiddenCallbacks=null,m=0;m<F.length;m++)s_(F[m],A)}catch(tt){qe(u,u.return,tt)}}l&&E&64&&y0(_),rl(_,_.return);break;case 27:M0(_);case 26:case 5:ts(m,_,l),l&&u===null&&E&4&&S0(_),rl(_,_.return);break;case 12:ts(m,_,l);break;case 13:ts(m,_,l),l&&E&4&&R0(m,_);break;case 22:_.memoizedState===null&&ts(m,_,l),rl(_,_.return);break;case 30:break;default:ts(m,_,l)}a=a.sibling}}function Gh(n,a){var l=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),n=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==l&&(n!=null&&n.refCount++,l!=null&&jo(l))}function kh(n,a){n=null,a.alternate!==null&&(n=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==n&&(a.refCount++,n!=null&&jo(n))}function ki(n,a,l,u){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)N0(n,a,l,u),a=a.sibling}function N0(n,a,l,u){var m=a.flags;switch(a.tag){case 0:case 11:case 15:ki(n,a,l,u),m&2048&&sl(9,a);break;case 1:ki(n,a,l,u);break;case 3:ki(n,a,l,u),m&2048&&(n=null,a.alternate!==null&&(n=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==n&&(a.refCount++,n!=null&&jo(n)));break;case 12:if(m&2048){ki(n,a,l,u),n=a.stateNode;try{var _=a.memoizedProps,E=_.id,A=_.onPostCommit;typeof A=="function"&&A(E,a.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(F){qe(a,a.return,F)}}else ki(n,a,l,u);break;case 13:ki(n,a,l,u);break;case 23:break;case 22:_=a.stateNode,E=a.alternate,a.memoizedState!==null?_._visibility&2?ki(n,a,l,u):ol(n,a):_._visibility&2?ki(n,a,l,u):(_._visibility|=2,Nr(n,a,l,u,(a.subtreeFlags&10256)!==0)),m&2048&&Gh(E,a);break;case 24:ki(n,a,l,u),m&2048&&kh(a.alternate,a);break;default:ki(n,a,l,u)}}function Nr(n,a,l,u,m){for(m=m&&(a.subtreeFlags&10256)!==0,a=a.child;a!==null;){var _=n,E=a,A=l,F=u,tt=E.flags;switch(E.tag){case 0:case 11:case 15:Nr(_,E,A,F,m),sl(8,E);break;case 23:break;case 22:var ht=E.stateNode;E.memoizedState!==null?ht._visibility&2?Nr(_,E,A,F,m):ol(_,E):(ht._visibility|=2,Nr(_,E,A,F,m)),m&&tt&2048&&Gh(E.alternate,E);break;case 24:Nr(_,E,A,F,m),m&&tt&2048&&kh(E.alternate,E);break;default:Nr(_,E,A,F,m)}a=a.sibling}}function ol(n,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var l=n,u=a,m=u.flags;switch(u.tag){case 22:ol(l,u),m&2048&&Gh(u.alternate,u);break;case 24:ol(l,u),m&2048&&kh(u.alternate,u);break;default:ol(l,u)}a=a.sibling}}var ll=8192;function Lr(n){if(n.subtreeFlags&ll)for(n=n.child;n!==null;)L0(n),n=n.sibling}function L0(n){switch(n.tag){case 26:Lr(n),n.flags&ll&&n.memoizedState!==null&&wE(Ri,n.memoizedState,n.memoizedProps);break;case 5:Lr(n);break;case 3:case 4:var a=Ri;Ri=au(n.stateNode.containerInfo),Lr(n),Ri=a;break;case 22:n.memoizedState===null&&(a=n.alternate,a!==null&&a.memoizedState!==null?(a=ll,ll=16777216,Lr(n),ll=a):Lr(n));break;default:Lr(n)}}function U0(n){var a=n.alternate;if(a!==null&&(n=a.child,n!==null)){a.child=null;do a=n.sibling,n.sibling=null,n=a;while(n!==null)}}function cl(n){var a=n.deletions;if((n.flags&16)!==0){if(a!==null)for(var l=0;l<a.length;l++){var u=a[l];An=u,P0(u,n)}U0(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)O0(n),n=n.sibling}function O0(n){switch(n.tag){case 0:case 11:case 15:cl(n),n.flags&2048&&Ja(9,n,n.return);break;case 3:cl(n);break;case 12:cl(n);break;case 22:var a=n.stateNode;n.memoizedState!==null&&a._visibility&2&&(n.return===null||n.return.tag!==13)?(a._visibility&=-3,Wc(n)):cl(n);break;default:cl(n)}}function Wc(n){var a=n.deletions;if((n.flags&16)!==0){if(a!==null)for(var l=0;l<a.length;l++){var u=a[l];An=u,P0(u,n)}U0(n)}for(n=n.child;n!==null;){switch(a=n,a.tag){case 0:case 11:case 15:Ja(8,a,a.return),Wc(a);break;case 22:l=a.stateNode,l._visibility&2&&(l._visibility&=-3,Wc(a));break;default:Wc(a)}n=n.sibling}}function P0(n,a){for(;An!==null;){var l=An;switch(l.tag){case 0:case 11:case 15:Ja(8,l,a);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var u=l.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:jo(l.memoizedState.cache)}if(u=l.child,u!==null)u.return=l,An=u;else t:for(l=n;An!==null;){u=An;var m=u.sibling,_=u.return;if(A0(u),u===l){An=null;break t}if(m!==null){m.return=_,An=m;break t}An=_}}}var VM={getCacheForType:function(n){var a=zn(vn),l=a.data.get(n);return l===void 0&&(l=n(),a.data.set(n,l)),l}},XM=typeof WeakMap=="function"?WeakMap:Map,Pe=0,Je=null,ye=null,we=0,Ie=0,ci=null,es=!1,Ur=!1,Vh=!1,ya=0,ln=0,ns=0,Ys=0,Xh=0,bi=0,Or=0,ul=null,ei=null,jh=!1,Wh=0,Yc=1/0,qc=null,is=null,Un=0,as=null,Pr=null,Ir=0,Yh=0,qh=null,I0=null,fl=0,Kh=null;function ui(){if((Pe&2)!==0&&we!==0)return we&-we;if(z.T!==null){var n=Mr;return n!==0?n:nd()}return De()}function B0(){bi===0&&(bi=(we&536870912)===0||Ue?j():536870912);var n=Si.current;return n!==null&&(n.flags|=32),bi}function fi(n,a,l){(n===Je&&(Ie===2||Ie===9)||n.cancelPendingCommit!==null)&&(Br(n,0),ss(n,we,bi,!1)),_t(n,l),((Pe&2)===0||n!==Je)&&(n===Je&&((Pe&2)===0&&(Ys|=l),ln===4&&ss(n,we,bi,!1)),Vi(n))}function z0(n,a,l){if((Pe&6)!==0)throw Error(s(327));var u=!l&&(a&124)===0&&(a&n.expiredLanes)===0||ie(n,a),m=u?YM(n,a):Jh(n,a,!0),_=u;do{if(m===0){Ur&&!u&&ss(n,a,0,!1);break}else{if(l=n.current.alternate,_&&!jM(l)){m=Jh(n,a,!1),_=!1;continue}if(m===2){if(_=a,n.errorRecoveryDisabledLanes&_)var E=0;else E=n.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){a=E;t:{var A=n;m=ul;var F=A.current.memoizedState.isDehydrated;if(F&&(Br(A,E).flags|=256),E=Jh(A,E,!1),E!==2){if(Vh&&!F){A.errorRecoveryDisabledLanes|=_,Ys|=_,m=4;break t}_=ei,ei=m,_!==null&&(ei===null?ei=_:ei.push.apply(ei,_))}m=E}if(_=!1,m!==2)continue}}if(m===1){Br(n,0),ss(n,a,0,!0);break}t:{switch(u=n,_=m,_){case 0:case 1:throw Error(s(345));case 4:if((a&4194048)!==a)break;case 6:ss(u,a,bi,!es);break t;case 2:ei=null;break;case 3:case 5:break;default:throw Error(s(329))}if((a&62914560)===a&&(m=Wh+300-ae(),10<m)){if(ss(u,a,bi,!es),de(u,0,!0)!==0)break t;u.timeoutHandle=dv(F0.bind(null,u,l,ei,qc,jh,a,bi,Ys,Or,es,_,2,-0,0),m);break t}F0(u,l,ei,qc,jh,a,bi,Ys,Or,es,_,0,-0,0)}}break}while(!0);Vi(n)}function F0(n,a,l,u,m,_,E,A,F,tt,ht,vt,at,st){if(n.timeoutHandle=-1,vt=a.subtreeFlags,(vt&8192||(vt&16785408)===16785408)&&(vl={stylesheets:null,count:0,unsuspend:AE},L0(a),vt=RE(),vt!==null)){n.cancelPendingCommit=vt(W0.bind(null,n,a,_,l,u,m,E,A,F,ht,1,at,st)),ss(n,_,E,!tt);return}W0(n,a,_,l,u,m,E,A,F)}function jM(n){for(var a=n;;){var l=a.tag;if((l===0||l===11||l===15)&&a.flags&16384&&(l=a.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var u=0;u<l.length;u++){var m=l[u],_=m.getSnapshot;m=m.value;try{if(!si(_(),m))return!1}catch{return!1}}if(l=a.child,a.subtreeFlags&16384&&l!==null)l.return=a,a=l;else{if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function ss(n,a,l,u){a&=~Xh,a&=~Ys,n.suspendedLanes|=a,n.pingedLanes&=~a,u&&(n.warmLanes|=a),u=n.expirationTimes;for(var m=a;0<m;){var _=31-Dt(m),E=1<<_;u[_]=-1,m&=~E}l!==0&&Pt(n,l,a)}function Kc(){return(Pe&6)===0?(hl(0),!1):!0}function Zh(){if(ye!==null){if(Ie===0)var n=ye.return;else n=ye,fa=Gs=null,dh(n),Cr=null,nl=0,n=ye;for(;n!==null;)v0(n.alternate,n),n=n.return;ye=null}}function Br(n,a){var l=n.timeoutHandle;l!==-1&&(n.timeoutHandle=-1,cE(l)),l=n.cancelPendingCommit,l!==null&&(n.cancelPendingCommit=null,l()),Zh(),Je=n,ye=l=la(n.current,null),we=a,Ie=0,ci=null,es=!1,Ur=ie(n,a),Vh=!1,Or=bi=Xh=Ys=ns=ln=0,ei=ul=null,jh=!1,(a&8)!==0&&(a|=a&32);var u=n.entangledLanes;if(u!==0)for(n=n.entanglements,u&=a;0<u;){var m=31-Dt(u),_=1<<m;a|=n[m],u&=~_}return ya=a,_c(),l}function H0(n,a){pe=null,z.H=Ic,a===Yo||a===Ac?(a=i_(),Ie=3):a===t_?(a=i_(),Ie=4):Ie=a===a0?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,ci=a,ye===null&&(ln=1,Gc(n,_i(a,n.current)))}function G0(){var n=z.H;return z.H=Ic,n===null?Ic:n}function k0(){var n=z.A;return z.A=VM,n}function Qh(){ln=4,es||(we&4194048)!==we&&Si.current!==null||(Ur=!0),(ns&134217727)===0&&(Ys&134217727)===0||Je===null||ss(Je,we,bi,!1)}function Jh(n,a,l){var u=Pe;Pe|=2;var m=G0(),_=k0();(Je!==n||we!==a)&&(qc=null,Br(n,a)),a=!1;var E=ln;t:do try{if(Ie!==0&&ye!==null){var A=ye,F=ci;switch(Ie){case 8:Zh(),E=6;break t;case 3:case 2:case 9:case 6:Si.current===null&&(a=!0);var tt=Ie;if(Ie=0,ci=null,zr(n,A,F,tt),l&&Ur){E=0;break t}break;default:tt=Ie,Ie=0,ci=null,zr(n,A,F,tt)}}WM(),E=ln;break}catch(ht){H0(n,ht)}while(!0);return a&&n.shellSuspendCounter++,fa=Gs=null,Pe=u,z.H=m,z.A=_,ye===null&&(Je=null,we=0,_c()),E}function WM(){for(;ye!==null;)V0(ye)}function YM(n,a){var l=Pe;Pe|=2;var u=G0(),m=k0();Je!==n||we!==a?(qc=null,Yc=ae()+500,Br(n,a)):Ur=ie(n,a);t:do try{if(Ie!==0&&ye!==null){a=ye;var _=ci;e:switch(Ie){case 1:Ie=0,ci=null,zr(n,a,_,1);break;case 2:case 9:if(e_(_)){Ie=0,ci=null,X0(a);break}a=function(){Ie!==2&&Ie!==9||Je!==n||(Ie=7),Vi(n)},_.then(a,a);break t;case 3:Ie=7;break t;case 4:Ie=5;break t;case 7:e_(_)?(Ie=0,ci=null,X0(a)):(Ie=0,ci=null,zr(n,a,_,7));break;case 5:var E=null;switch(ye.tag){case 26:E=ye.memoizedState;case 5:case 27:var A=ye;if(!E||Tv(E)){Ie=0,ci=null;var F=A.sibling;if(F!==null)ye=F;else{var tt=A.return;tt!==null?(ye=tt,Zc(tt)):ye=null}break e}}Ie=0,ci=null,zr(n,a,_,5);break;case 6:Ie=0,ci=null,zr(n,a,_,6);break;case 8:Zh(),ln=6;break t;default:throw Error(s(462))}}qM();break}catch(ht){H0(n,ht)}while(!0);return fa=Gs=null,z.H=u,z.A=m,Pe=l,ye!==null?0:(Je=null,we=0,_c(),ln)}function qM(){for(;ye!==null&&!Zn();)V0(ye)}function V0(n){var a=g0(n.alternate,n,ya);n.memoizedProps=n.pendingProps,a===null?Zc(n):ye=a}function X0(n){var a=n,l=a.alternate;switch(a.tag){case 15:case 0:a=u0(l,a,a.pendingProps,a.type,void 0,we);break;case 11:a=u0(l,a,a.pendingProps,a.type.render,a.ref,we);break;case 5:dh(a);default:v0(l,a),a=ye=jg(a,ya),a=g0(l,a,ya)}n.memoizedProps=n.pendingProps,a===null?Zc(n):ye=a}function zr(n,a,l,u){fa=Gs=null,dh(a),Cr=null,nl=0;var m=a.return;try{if(BM(n,m,a,l,we)){ln=1,Gc(n,_i(l,n.current)),ye=null;return}}catch(_){if(m!==null)throw ye=m,_;ln=1,Gc(n,_i(l,n.current)),ye=null;return}a.flags&32768?(Ue||u===1?n=!0:Ur||(we&536870912)!==0?n=!1:(es=n=!0,(u===2||u===9||u===3||u===6)&&(u=Si.current,u!==null&&u.tag===13&&(u.flags|=16384))),j0(a,n)):Zc(a)}function Zc(n){var a=n;do{if((a.flags&32768)!==0){j0(a,es);return}n=a.return;var l=FM(a.alternate,a,ya);if(l!==null){ye=l;return}if(a=a.sibling,a!==null){ye=a;return}ye=a=n}while(a!==null);ln===0&&(ln=5)}function j0(n,a){do{var l=HM(n.alternate,n);if(l!==null){l.flags&=32767,ye=l;return}if(l=n.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!a&&(n=n.sibling,n!==null)){ye=n;return}ye=n=l}while(n!==null);ln=6,ye=null}function W0(n,a,l,u,m,_,E,A,F){n.cancelPendingCommit=null;do Qc();while(Un!==0);if((Pe&6)!==0)throw Error(s(327));if(a!==null){if(a===n.current)throw Error(s(177));if(_=a.lanes|a.childLanes,_|=kf,zt(n,l,_,E,A,F),n===Je&&(ye=Je=null,we=0),Pr=a,as=n,Ir=l,Yh=_,qh=m,I0=u,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,JM(P,function(){return Q0(),null})):(n.callbackNode=null,n.callbackPriority=0),u=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||u){u=z.T,z.T=null,m=Z.p,Z.p=2,E=Pe,Pe|=4;try{GM(n,a,l)}finally{Pe=E,Z.p=m,z.T=u}}Un=1,Y0(),q0(),K0()}}function Y0(){if(Un===1){Un=0;var n=as,a=Pr,l=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||l){l=z.T,z.T=null;var u=Z.p;Z.p=2;var m=Pe;Pe|=4;try{C0(a,n);var _=ud,E=Pg(n.containerInfo),A=_.focusedElem,F=_.selectionRange;if(E!==A&&A&&A.ownerDocument&&Og(A.ownerDocument.documentElement,A)){if(F!==null&&Bf(A)){var tt=F.start,ht=F.end;if(ht===void 0&&(ht=tt),"selectionStart"in A)A.selectionStart=tt,A.selectionEnd=Math.min(ht,A.value.length);else{var vt=A.ownerDocument||document,at=vt&&vt.defaultView||window;if(at.getSelection){var st=at.getSelection(),ne=A.textContent.length,Qt=Math.min(F.start,ne),Ve=F.end===void 0?Qt:Math.min(F.end,ne);!st.extend&&Qt>Ve&&(E=Ve,Ve=Qt,Qt=E);var Y=Ug(A,Qt),V=Ug(A,Ve);if(Y&&V&&(st.rangeCount!==1||st.anchorNode!==Y.node||st.anchorOffset!==Y.offset||st.focusNode!==V.node||st.focusOffset!==V.offset)){var J=vt.createRange();J.setStart(Y.node,Y.offset),st.removeAllRanges(),Qt>Ve?(st.addRange(J),st.extend(V.node,V.offset)):(J.setEnd(V.node,V.offset),st.addRange(J))}}}}for(vt=[],st=A;st=st.parentNode;)st.nodeType===1&&vt.push({element:st,left:st.scrollLeft,top:st.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<vt.length;A++){var pt=vt[A];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}cu=!!cd,ud=cd=null}finally{Pe=m,Z.p=u,z.T=l}}n.current=a,Un=2}}function q0(){if(Un===2){Un=0;var n=as,a=Pr,l=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||l){l=z.T,z.T=null;var u=Z.p;Z.p=2;var m=Pe;Pe|=4;try{T0(n,a.alternate,a)}finally{Pe=m,Z.p=u,z.T=l}}Un=3}}function K0(){if(Un===4||Un===3){Un=0,Me();var n=as,a=Pr,l=Ir,u=I0;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?Un=5:(Un=0,Pr=as=null,Z0(n,n.pendingLanes));var m=n.pendingLanes;if(m===0&&(is=null),fn(l),a=a.stateNode,Ft&&typeof Ft.onCommitFiberRoot=="function")try{Ft.onCommitFiberRoot(dt,a,void 0,(a.current.flags&128)===128)}catch{}if(u!==null){a=z.T,m=Z.p,Z.p=2,z.T=null;try{for(var _=n.onRecoverableError,E=0;E<u.length;E++){var A=u[E];_(A.value,{componentStack:A.stack})}}finally{z.T=a,Z.p=m}}(Ir&3)!==0&&Qc(),Vi(n),m=n.pendingLanes,(l&4194090)!==0&&(m&42)!==0?n===Kh?fl++:(fl=0,Kh=n):fl=0,hl(0)}}function Z0(n,a){(n.pooledCacheLanes&=a)===0&&(a=n.pooledCache,a!=null&&(n.pooledCache=null,jo(a)))}function Qc(n){return Y0(),q0(),K0(),Q0()}function Q0(){if(Un!==5)return!1;var n=as,a=Yh;Yh=0;var l=fn(Ir),u=z.T,m=Z.p;try{Z.p=32>l?32:l,z.T=null,l=qh,qh=null;var _=as,E=Ir;if(Un=0,Pr=as=null,Ir=0,(Pe&6)!==0)throw Error(s(331));var A=Pe;if(Pe|=4,O0(_.current),N0(_,_.current,E,l),Pe=A,hl(0,!1),Ft&&typeof Ft.onPostCommitFiberRoot=="function")try{Ft.onPostCommitFiberRoot(dt,_)}catch{}return!0}finally{Z.p=m,z.T=u,Z0(n,a)}}function J0(n,a,l){a=_i(l,a),a=wh(n.stateNode,a,2),n=qa(n,a,2),n!==null&&(_t(n,2),Vi(n))}function qe(n,a,l){if(n.tag===3)J0(n,n,l);else for(;a!==null;){if(a.tag===3){J0(a,n,l);break}else if(a.tag===1){var u=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(is===null||!is.has(u))){n=_i(l,n),l=n0(2),u=qa(a,l,2),u!==null&&(i0(l,u,a,n),_t(u,2),Vi(u));break}}a=a.return}}function $h(n,a,l){var u=n.pingCache;if(u===null){u=n.pingCache=new XM;var m=new Set;u.set(a,m)}else m=u.get(a),m===void 0&&(m=new Set,u.set(a,m));m.has(l)||(Vh=!0,m.add(l),n=KM.bind(null,n,a,l),a.then(n,n))}function KM(n,a,l){var u=n.pingCache;u!==null&&u.delete(a),n.pingedLanes|=n.suspendedLanes&l,n.warmLanes&=~l,Je===n&&(we&l)===l&&(ln===4||ln===3&&(we&62914560)===we&&300>ae()-Wh?(Pe&2)===0&&Br(n,0):Xh|=l,Or===we&&(Or=0)),Vi(n)}function $0(n,a){a===0&&(a=Ot()),n=yr(n,a),n!==null&&(_t(n,a),Vi(n))}function ZM(n){var a=n.memoizedState,l=0;a!==null&&(l=a.retryLane),$0(n,l)}function QM(n,a){var l=0;switch(n.tag){case 13:var u=n.stateNode,m=n.memoizedState;m!==null&&(l=m.retryLane);break;case 19:u=n.stateNode;break;case 22:u=n.stateNode._retryCache;break;default:throw Error(s(314))}u!==null&&u.delete(a),$0(n,l)}function JM(n,a){return ge(n,a)}var Jc=null,Fr=null,td=!1,$c=!1,ed=!1,qs=0;function Vi(n){n!==Fr&&n.next===null&&(Fr===null?Jc=Fr=n:Fr=Fr.next=n),$c=!0,td||(td=!0,tE())}function hl(n,a){if(!ed&&$c){ed=!0;do for(var l=!1,u=Jc;u!==null;){if(n!==0){var m=u.pendingLanes;if(m===0)var _=0;else{var E=u.suspendedLanes,A=u.pingedLanes;_=(1<<31-Dt(42|n)+1)-1,_&=m&~(E&~A),_=_&201326741?_&201326741|1:_?_|2:0}_!==0&&(l=!0,iv(u,_))}else _=we,_=de(u,u===Je?_:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(_&3)===0||ie(u,_)||(l=!0,iv(u,_));u=u.next}while(l);ed=!1}}function $M(){tv()}function tv(){$c=td=!1;var n=0;qs!==0&&(lE()&&(n=qs),qs=0);for(var a=ae(),l=null,u=Jc;u!==null;){var m=u.next,_=ev(u,a);_===0?(u.next=null,l===null?Jc=m:l.next=m,m===null&&(Fr=l)):(l=u,(n!==0||(_&3)!==0)&&($c=!0)),u=m}hl(n)}function ev(n,a){for(var l=n.suspendedLanes,u=n.pingedLanes,m=n.expirationTimes,_=n.pendingLanes&-62914561;0<_;){var E=31-Dt(_),A=1<<E,F=m[E];F===-1?((A&l)===0||(A&u)!==0)&&(m[E]=He(A,a)):F<=a&&(n.expiredLanes|=A),_&=~A}if(a=Je,l=we,l=de(n,n===a?l:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u=n.callbackNode,l===0||n===a&&(Ie===2||Ie===9)||n.cancelPendingCommit!==null)return u!==null&&u!==null&&G(u),n.callbackNode=null,n.callbackPriority=0;if((l&3)===0||ie(n,l)){if(a=l&-l,a===n.callbackPriority)return a;switch(u!==null&&G(u),fn(l)){case 2:case 8:l=Xt;break;case 32:l=P;break;case 268435456:l=it;break;default:l=P}return u=nv.bind(null,n),l=ge(l,u),n.callbackPriority=a,n.callbackNode=l,a}return u!==null&&u!==null&&G(u),n.callbackPriority=2,n.callbackNode=null,2}function nv(n,a){if(Un!==0&&Un!==5)return n.callbackNode=null,n.callbackPriority=0,null;var l=n.callbackNode;if(Qc()&&n.callbackNode!==l)return null;var u=we;return u=de(n,n===Je?u:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u===0?null:(z0(n,u,a),ev(n,ae()),n.callbackNode!=null&&n.callbackNode===l?nv.bind(null,n):null)}function iv(n,a){if(Qc())return null;z0(n,a,!0)}function tE(){uE(function(){(Pe&6)!==0?ge(Fe,$M):tv()})}function nd(){return qs===0&&(qs=j()),qs}function av(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:uc(""+n)}function sv(n,a){var l=a.ownerDocument.createElement("input");return l.name=a.name,l.value=a.value,n.id&&l.setAttribute("form",n.id),a.parentNode.insertBefore(l,a),n=new FormData(n),l.parentNode.removeChild(l),n}function eE(n,a,l,u,m){if(a==="submit"&&l&&l.stateNode===m){var _=av((m[Dn]||null).action),E=u.submitter;E&&(a=(a=E[Dn]||null)?av(a.formAction):E.getAttribute("formAction"),a!==null&&(_=a,E=null));var A=new pc("action","action",null,u,m);n.push({event:A,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(qs!==0){var F=E?sv(m,E):new FormData(m);bh(l,{pending:!0,data:F,method:m.method,action:_},null,F)}}else typeof _=="function"&&(A.preventDefault(),F=E?sv(m,E):new FormData(m),bh(l,{pending:!0,data:F,method:m.method,action:_},_,F))},currentTarget:m}]})}}for(var id=0;id<Gf.length;id++){var ad=Gf[id],nE=ad.toLowerCase(),iE=ad[0].toUpperCase()+ad.slice(1);wi(nE,"on"+iE)}wi(zg,"onAnimationEnd"),wi(Fg,"onAnimationIteration"),wi(Hg,"onAnimationStart"),wi("dblclick","onDoubleClick"),wi("focusin","onFocus"),wi("focusout","onBlur"),wi(xM,"onTransitionRun"),wi(SM,"onTransitionStart"),wi(bM,"onTransitionCancel"),wi(Gg,"onTransitionEnd"),C("onMouseEnter",["mouseout","mouseover"]),C("onMouseLeave",["mouseout","mouseover"]),C("onPointerEnter",["pointerout","pointerover"]),C("onPointerLeave",["pointerout","pointerover"]),aa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),aa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),aa("onBeforeInput",["compositionend","keypress","textInput","paste"]),aa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),aa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),aa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var dl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),aE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(dl));function rv(n,a){a=(a&4)!==0;for(var l=0;l<n.length;l++){var u=n[l],m=u.event;u=u.listeners;t:{var _=void 0;if(a)for(var E=u.length-1;0<=E;E--){var A=u[E],F=A.instance,tt=A.currentTarget;if(A=A.listener,F!==_&&m.isPropagationStopped())break t;_=A,m.currentTarget=tt;try{_(m)}catch(ht){Hc(ht)}m.currentTarget=null,_=F}else for(E=0;E<u.length;E++){if(A=u[E],F=A.instance,tt=A.currentTarget,A=A.listener,F!==_&&m.isPropagationStopped())break t;_=A,m.currentTarget=tt;try{_(m)}catch(ht){Hc(ht)}m.currentTarget=null,_=F}}}}function xe(n,a){var l=a[Ds];l===void 0&&(l=a[Ds]=new Set);var u=n+"__bubble";l.has(u)||(ov(a,n,2,!1),l.add(u))}function sd(n,a,l){var u=0;a&&(u|=4),ov(l,n,u,a)}var tu="_reactListening"+Math.random().toString(36).slice(2);function rd(n){if(!n[tu]){n[tu]=!0,lc.forEach(function(l){l!=="selectionchange"&&(aE.has(l)||sd(l,!1,n),sd(l,!0,n))});var a=n.nodeType===9?n:n.ownerDocument;a===null||a[tu]||(a[tu]=!0,sd("selectionchange",!1,a))}}function ov(n,a,l,u){switch(Nv(a)){case 2:var m=NE;break;case 8:m=LE;break;default:m=xd}l=m.bind(null,a,l,n),m=void 0,!Rf||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(m=!0),u?m!==void 0?n.addEventListener(a,l,{capture:!0,passive:m}):n.addEventListener(a,l,!0):m!==void 0?n.addEventListener(a,l,{passive:m}):n.addEventListener(a,l,!1)}function od(n,a,l,u,m){var _=u;if((a&1)===0&&(a&2)===0&&u!==null)t:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var A=u.stateNode.containerInfo;if(A===m)break;if(E===4)for(E=u.return;E!==null;){var F=E.tag;if((F===3||F===4)&&E.stateNode.containerInfo===m)return;E=E.return}for(;A!==null;){if(E=na(A),E===null)return;if(F=E.tag,F===5||F===6||F===26||F===27){u=_=E;continue t}A=A.parentNode}}u=u.return}pg(function(){var tt=_,ht=Af(l),vt=[];t:{var at=kg.get(n);if(at!==void 0){var st=pc,ne=n;switch(n){case"keypress":if(hc(l)===0)break t;case"keydown":case"keyup":st=Jb;break;case"focusin":ne="focus",st=Lf;break;case"focusout":ne="blur",st=Lf;break;case"beforeblur":case"afterblur":st=Lf;break;case"click":if(l.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":st=_g;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":st=Hb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":st=eM;break;case zg:case Fg:case Hg:st=Vb;break;case Gg:st=iM;break;case"scroll":case"scrollend":st=zb;break;case"wheel":st=sM;break;case"copy":case"cut":case"paste":st=jb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":st=yg;break;case"toggle":case"beforetoggle":st=oM}var Qt=(a&4)!==0,Ve=!Qt&&(n==="scroll"||n==="scrollend"),Y=Qt?at!==null?at+"Capture":null:at;Qt=[];for(var V=tt,J;V!==null;){var pt=V;if(J=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||J===null||Y===null||(pt=Lo(V,Y),pt!=null&&Qt.push(pl(V,pt,J))),Ve)break;V=V.return}0<Qt.length&&(at=new st(at,ne,null,l,ht),vt.push({event:at,listeners:Qt}))}}if((a&7)===0){t:{if(at=n==="mouseover"||n==="pointerover",st=n==="mouseout"||n==="pointerout",at&&l!==Tf&&(ne=l.relatedTarget||l.fromElement)&&(na(ne)||ne[Qn]))break t;if((st||at)&&(at=ht.window===ht?ht:(at=ht.ownerDocument)?at.defaultView||at.parentWindow:window,st?(ne=l.relatedTarget||l.toElement,st=tt,ne=ne?na(ne):null,ne!==null&&(Ve=c(ne),Qt=ne.tag,ne!==Ve||Qt!==5&&Qt!==27&&Qt!==6)&&(ne=null)):(st=null,ne=tt),st!==ne)){if(Qt=_g,pt="onMouseLeave",Y="onMouseEnter",V="mouse",(n==="pointerout"||n==="pointerover")&&(Qt=yg,pt="onPointerLeave",Y="onPointerEnter",V="pointer"),Ve=st==null?at:Ls(st),J=ne==null?at:Ls(ne),at=new Qt(pt,V+"leave",st,l,ht),at.target=Ve,at.relatedTarget=J,pt=null,na(ht)===tt&&(Qt=new Qt(Y,V+"enter",ne,l,ht),Qt.target=J,Qt.relatedTarget=Ve,pt=Qt),Ve=pt,st&&ne)e:{for(Qt=st,Y=ne,V=0,J=Qt;J;J=Hr(J))V++;for(J=0,pt=Y;pt;pt=Hr(pt))J++;for(;0<V-J;)Qt=Hr(Qt),V--;for(;0<J-V;)Y=Hr(Y),J--;for(;V--;){if(Qt===Y||Y!==null&&Qt===Y.alternate)break e;Qt=Hr(Qt),Y=Hr(Y)}Qt=null}else Qt=null;st!==null&&lv(vt,at,st,Qt,!1),ne!==null&&Ve!==null&&lv(vt,Ve,ne,Qt,!0)}}t:{if(at=tt?Ls(tt):window,st=at.nodeName&&at.nodeName.toLowerCase(),st==="select"||st==="input"&&at.type==="file")var kt=wg;else if(Tg(at))if(Rg)kt=_M;else{kt=mM;var _e=pM}else st=at.nodeName,!st||st.toLowerCase()!=="input"||at.type!=="checkbox"&&at.type!=="radio"?tt&&Ef(tt.elementType)&&(kt=wg):kt=gM;if(kt&&(kt=kt(n,tt))){Ag(vt,kt,l,ht);break t}_e&&_e(n,at,tt),n==="focusout"&&tt&&at.type==="number"&&tt.memoizedProps.value!=null&&Bn(at,"number",at.value)}switch(_e=tt?Ls(tt):window,n){case"focusin":(Tg(_e)||_e.contentEditable==="true")&&(gr=_e,zf=tt,Ho=null);break;case"focusout":Ho=zf=gr=null;break;case"mousedown":Ff=!0;break;case"contextmenu":case"mouseup":case"dragend":Ff=!1,Ig(vt,l,ht);break;case"selectionchange":if(yM)break;case"keydown":case"keyup":Ig(vt,l,ht)}var jt;if(Of)t:{switch(n){case"compositionstart":var te="onCompositionStart";break t;case"compositionend":te="onCompositionEnd";break t;case"compositionupdate":te="onCompositionUpdate";break t}te=void 0}else mr?Mg(n,l)&&(te="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(te="onCompositionStart");te&&(xg&&l.locale!=="ko"&&(mr||te!=="onCompositionStart"?te==="onCompositionEnd"&&mr&&(jt=mg()):(Xa=ht,Cf="value"in Xa?Xa.value:Xa.textContent,mr=!0)),_e=eu(tt,te),0<_e.length&&(te=new vg(te,n,null,l,ht),vt.push({event:te,listeners:_e}),jt?te.data=jt:(jt=Eg(l),jt!==null&&(te.data=jt)))),(jt=cM?uM(n,l):fM(n,l))&&(te=eu(tt,"onBeforeInput"),0<te.length&&(_e=new vg("onBeforeInput","beforeinput",null,l,ht),vt.push({event:_e,listeners:te}),_e.data=jt)),eE(vt,n,tt,l,ht)}rv(vt,a)})}function pl(n,a,l){return{instance:n,listener:a,currentTarget:l}}function eu(n,a){for(var l=a+"Capture",u=[];n!==null;){var m=n,_=m.stateNode;if(m=m.tag,m!==5&&m!==26&&m!==27||_===null||(m=Lo(n,l),m!=null&&u.unshift(pl(n,m,_)),m=Lo(n,a),m!=null&&u.push(pl(n,m,_))),n.tag===3)return u;n=n.return}return[]}function Hr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function lv(n,a,l,u,m){for(var _=a._reactName,E=[];l!==null&&l!==u;){var A=l,F=A.alternate,tt=A.stateNode;if(A=A.tag,F!==null&&F===u)break;A!==5&&A!==26&&A!==27||tt===null||(F=tt,m?(tt=Lo(l,_),tt!=null&&E.unshift(pl(l,tt,F))):m||(tt=Lo(l,_),tt!=null&&E.push(pl(l,tt,F)))),l=l.return}E.length!==0&&n.push({event:a,listeners:E})}var sE=/\r\n?/g,rE=/\u0000|\uFFFD/g;function cv(n){return(typeof n=="string"?n:""+n).replace(sE,`
`).replace(rE,"")}function uv(n,a){return a=cv(a),cv(n)===a}function nu(){}function ke(n,a,l,u,m,_){switch(l){case"children":typeof u=="string"?a==="body"||a==="textarea"&&u===""||zi(n,u):(typeof u=="number"||typeof u=="bigint")&&a!=="body"&&zi(n,""+u);break;case"className":Nt(n,"class",u);break;case"tabIndex":Nt(n,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":Nt(n,l,u);break;case"style":hg(n,u,_);break;case"data":if(a!=="object"){Nt(n,"data",u);break}case"src":case"href":if(u===""&&(a!=="a"||l!=="href")){n.removeAttribute(l);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(l);break}u=uc(""+u),n.setAttribute(l,u);break;case"action":case"formAction":if(typeof u=="function"){n.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof _=="function"&&(l==="formAction"?(a!=="input"&&ke(n,a,"name",m.name,m,null),ke(n,a,"formEncType",m.formEncType,m,null),ke(n,a,"formMethod",m.formMethod,m,null),ke(n,a,"formTarget",m.formTarget,m,null)):(ke(n,a,"encType",m.encType,m,null),ke(n,a,"method",m.method,m,null),ke(n,a,"target",m.target,m,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(l);break}u=uc(""+u),n.setAttribute(l,u);break;case"onClick":u!=null&&(n.onclick=nu);break;case"onScroll":u!=null&&xe("scroll",n);break;case"onScrollEnd":u!=null&&xe("scrollend",n);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(s(61));if(l=u.__html,l!=null){if(m.children!=null)throw Error(s(60));n.innerHTML=l}}break;case"multiple":n.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":n.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){n.removeAttribute("xlink:href");break}l=uc(""+u),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(l,""+u):n.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(l,""):n.removeAttribute(l);break;case"capture":case"download":u===!0?n.setAttribute(l,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(l,u):n.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?n.setAttribute(l,u):n.removeAttribute(l);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?n.removeAttribute(l):n.setAttribute(l,u);break;case"popover":xe("beforetoggle",n),xe("toggle",n),Tt(n,"popover",u);break;case"xlinkActuate":Lt(n,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":Lt(n,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":Lt(n,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":Lt(n,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":Lt(n,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":Lt(n,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":Lt(n,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":Lt(n,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":Lt(n,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":Tt(n,"is",u);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=Ib.get(l)||l,Tt(n,l,u))}}function ld(n,a,l,u,m,_){switch(l){case"style":hg(n,u,_);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(s(61));if(l=u.__html,l!=null){if(m.children!=null)throw Error(s(60));n.innerHTML=l}}break;case"children":typeof u=="string"?zi(n,u):(typeof u=="number"||typeof u=="bigint")&&zi(n,""+u);break;case"onScroll":u!=null&&xe("scroll",n);break;case"onScrollEnd":u!=null&&xe("scrollend",n);break;case"onClick":u!=null&&(n.onclick=nu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!cc.hasOwnProperty(l))t:{if(l[0]==="o"&&l[1]==="n"&&(m=l.endsWith("Capture"),a=l.slice(2,m?l.length-7:void 0),_=n[Dn]||null,_=_!=null?_[l]:null,typeof _=="function"&&n.removeEventListener(a,_,m),typeof u=="function")){typeof _!="function"&&_!==null&&(l in n?n[l]=null:n.hasAttribute(l)&&n.removeAttribute(l)),n.addEventListener(a,u,m);break t}l in n?n[l]=u:u===!0?n.setAttribute(l,""):Tt(n,l,u)}}}function On(n,a,l){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",n),xe("load",n);var u=!1,m=!1,_;for(_ in l)if(l.hasOwnProperty(_)){var E=l[_];if(E!=null)switch(_){case"src":u=!0;break;case"srcSet":m=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,a));default:ke(n,a,_,E,l,null)}}m&&ke(n,a,"srcSet",l.srcSet,l,null),u&&ke(n,a,"src",l.src,l,null);return;case"input":xe("invalid",n);var A=_=E=m=null,F=null,tt=null;for(u in l)if(l.hasOwnProperty(u)){var ht=l[u];if(ht!=null)switch(u){case"name":m=ht;break;case"type":E=ht;break;case"checked":F=ht;break;case"defaultChecked":tt=ht;break;case"value":_=ht;break;case"defaultValue":A=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(s(137,a));break;default:ke(n,a,u,ht,l,null)}}Ye(n,_,A,F,tt,E,m,!1),rn(n);return;case"select":xe("invalid",n),u=E=_=null;for(m in l)if(l.hasOwnProperty(m)&&(A=l[m],A!=null))switch(m){case"value":_=A;break;case"defaultValue":E=A;break;case"multiple":u=A;default:ke(n,a,m,A,l,null)}a=_,l=E,n.multiple=!!u,a!=null?_n(n,!!u,a,!1):l!=null&&_n(n,!!u,l,!0);return;case"textarea":xe("invalid",n),_=m=u=null;for(E in l)if(l.hasOwnProperty(E)&&(A=l[E],A!=null))switch(E){case"value":u=A;break;case"defaultValue":m=A;break;case"children":_=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:ke(n,a,E,A,l,null)}Nn(n,u,m,_),rn(n);return;case"option":for(F in l)if(l.hasOwnProperty(F)&&(u=l[F],u!=null))switch(F){case"selected":n.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:ke(n,a,F,u,l,null)}return;case"dialog":xe("beforetoggle",n),xe("toggle",n),xe("cancel",n),xe("close",n);break;case"iframe":case"object":xe("load",n);break;case"video":case"audio":for(u=0;u<dl.length;u++)xe(dl[u],n);break;case"image":xe("error",n),xe("load",n);break;case"details":xe("toggle",n);break;case"embed":case"source":case"link":xe("error",n),xe("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(tt in l)if(l.hasOwnProperty(tt)&&(u=l[tt],u!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,a));default:ke(n,a,tt,u,l,null)}return;default:if(Ef(a)){for(ht in l)l.hasOwnProperty(ht)&&(u=l[ht],u!==void 0&&ld(n,a,ht,u,l,void 0));return}}for(A in l)l.hasOwnProperty(A)&&(u=l[A],u!=null&&ke(n,a,A,u,l,null))}function oE(n,a,l,u){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var m=null,_=null,E=null,A=null,F=null,tt=null,ht=null;for(st in l){var vt=l[st];if(l.hasOwnProperty(st)&&vt!=null)switch(st){case"checked":break;case"value":break;case"defaultValue":F=vt;default:u.hasOwnProperty(st)||ke(n,a,st,null,u,vt)}}for(var at in u){var st=u[at];if(vt=l[at],u.hasOwnProperty(at)&&(st!=null||vt!=null))switch(at){case"type":_=st;break;case"name":m=st;break;case"checked":tt=st;break;case"defaultChecked":ht=st;break;case"value":E=st;break;case"defaultValue":A=st;break;case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(s(137,a));break;default:st!==vt&&ke(n,a,at,st,u,vt)}}sa(n,E,A,F,tt,ht,_,m);return;case"select":st=E=A=at=null;for(_ in l)if(F=l[_],l.hasOwnProperty(_)&&F!=null)switch(_){case"value":break;case"multiple":st=F;default:u.hasOwnProperty(_)||ke(n,a,_,null,u,F)}for(m in u)if(_=u[m],F=l[m],u.hasOwnProperty(m)&&(_!=null||F!=null))switch(m){case"value":at=_;break;case"defaultValue":A=_;break;case"multiple":E=_;default:_!==F&&ke(n,a,m,_,u,F)}a=A,l=E,u=st,at!=null?_n(n,!!l,at,!1):!!u!=!!l&&(a!=null?_n(n,!!l,a,!0):_n(n,!!l,l?[]:"",!1));return;case"textarea":st=at=null;for(A in l)if(m=l[A],l.hasOwnProperty(A)&&m!=null&&!u.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:ke(n,a,A,null,u,m)}for(E in u)if(m=u[E],_=l[E],u.hasOwnProperty(E)&&(m!=null||_!=null))switch(E){case"value":at=m;break;case"defaultValue":st=m;break;case"children":break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(s(91));break;default:m!==_&&ke(n,a,E,m,u,_)}En(n,at,st);return;case"option":for(var ne in l)if(at=l[ne],l.hasOwnProperty(ne)&&at!=null&&!u.hasOwnProperty(ne))switch(ne){case"selected":n.selected=!1;break;default:ke(n,a,ne,null,u,at)}for(F in u)if(at=u[F],st=l[F],u.hasOwnProperty(F)&&at!==st&&(at!=null||st!=null))switch(F){case"selected":n.selected=at&&typeof at!="function"&&typeof at!="symbol";break;default:ke(n,a,F,at,u,st)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Qt in l)at=l[Qt],l.hasOwnProperty(Qt)&&at!=null&&!u.hasOwnProperty(Qt)&&ke(n,a,Qt,null,u,at);for(tt in u)if(at=u[tt],st=l[tt],u.hasOwnProperty(tt)&&at!==st&&(at!=null||st!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(s(137,a));break;default:ke(n,a,tt,at,u,st)}return;default:if(Ef(a)){for(var Ve in l)at=l[Ve],l.hasOwnProperty(Ve)&&at!==void 0&&!u.hasOwnProperty(Ve)&&ld(n,a,Ve,void 0,u,at);for(ht in u)at=u[ht],st=l[ht],!u.hasOwnProperty(ht)||at===st||at===void 0&&st===void 0||ld(n,a,ht,at,u,st);return}}for(var Y in l)at=l[Y],l.hasOwnProperty(Y)&&at!=null&&!u.hasOwnProperty(Y)&&ke(n,a,Y,null,u,at);for(vt in u)at=u[vt],st=l[vt],!u.hasOwnProperty(vt)||at===st||at==null&&st==null||ke(n,a,vt,at,u,st)}var cd=null,ud=null;function iu(n){return n.nodeType===9?n:n.ownerDocument}function fv(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function hv(n,a){if(n===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&a==="foreignObject"?0:n}function fd(n,a){return n==="textarea"||n==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var hd=null;function lE(){var n=window.event;return n&&n.type==="popstate"?n===hd?!1:(hd=n,!0):(hd=null,!1)}var dv=typeof setTimeout=="function"?setTimeout:void 0,cE=typeof clearTimeout=="function"?clearTimeout:void 0,pv=typeof Promise=="function"?Promise:void 0,uE=typeof queueMicrotask=="function"?queueMicrotask:typeof pv<"u"?function(n){return pv.resolve(null).then(n).catch(fE)}:dv;function fE(n){setTimeout(function(){throw n})}function rs(n){return n==="head"}function mv(n,a){var l=a,u=0,m=0;do{var _=l.nextSibling;if(n.removeChild(l),_&&_.nodeType===8)if(l=_.data,l==="/$"){if(0<u&&8>u){l=u;var E=n.ownerDocument;if(l&1&&ml(E.documentElement),l&2&&ml(E.body),l&4)for(l=E.head,ml(l),E=l.firstChild;E;){var A=E.nextSibling,F=E.nodeName;E[Ha]||F==="SCRIPT"||F==="STYLE"||F==="LINK"&&E.rel.toLowerCase()==="stylesheet"||l.removeChild(E),E=A}}if(m===0){n.removeChild(_),Ml(a);return}m--}else l==="$"||l==="$?"||l==="$!"?m++:u=l.charCodeAt(0)-48;else u=0;l=_}while(l);Ml(a)}function dd(n){var a=n.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var l=a;switch(a=a.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":dd(l),Ga(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}n.removeChild(l)}}function hE(n,a,l,u){for(;n.nodeType===1;){var m=l;if(n.nodeName.toLowerCase()!==a.toLowerCase()){if(!u&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(u){if(!n[Ha])switch(a){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(_=n.getAttribute("rel"),_==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(_!==m.rel||n.getAttribute("href")!==(m.href==null||m.href===""?null:m.href)||n.getAttribute("crossorigin")!==(m.crossOrigin==null?null:m.crossOrigin)||n.getAttribute("title")!==(m.title==null?null:m.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(_=n.getAttribute("src"),(_!==(m.src==null?null:m.src)||n.getAttribute("type")!==(m.type==null?null:m.type)||n.getAttribute("crossorigin")!==(m.crossOrigin==null?null:m.crossOrigin))&&_&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(a==="input"&&n.type==="hidden"){var _=m.name==null?null:""+m.name;if(m.type==="hidden"&&n.getAttribute("name")===_)return n}else return n;if(n=Ci(n.nextSibling),n===null)break}return null}function dE(n,a,l){if(a==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!l||(n=Ci(n.nextSibling),n===null))return null;return n}function pd(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function pE(n,a){var l=n.ownerDocument;if(n.data!=="$?"||l.readyState==="complete")a();else{var u=function(){a(),l.removeEventListener("DOMContentLoaded",u)};l.addEventListener("DOMContentLoaded",u),n._reactRetry=u}}function Ci(n){for(;n!=null;n=n.nextSibling){var a=n.nodeType;if(a===1||a===3)break;if(a===8){if(a=n.data,a==="$"||a==="$!"||a==="$?"||a==="F!"||a==="F")break;if(a==="/$")return null}}return n}var md=null;function gv(n){n=n.previousSibling;for(var a=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(a===0)return n;a--}else l==="/$"&&a++}n=n.previousSibling}return null}function _v(n,a,l){switch(a=iu(l),n){case"html":if(n=a.documentElement,!n)throw Error(s(452));return n;case"head":if(n=a.head,!n)throw Error(s(453));return n;case"body":if(n=a.body,!n)throw Error(s(454));return n;default:throw Error(s(451))}}function ml(n){for(var a=n.attributes;a.length;)n.removeAttributeNode(a[0]);Ga(n)}var Mi=new Map,vv=new Set;function au(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var xa=Z.d;Z.d={f:mE,r:gE,D:_E,C:vE,L:yE,m:xE,X:bE,S:SE,M:ME};function mE(){var n=xa.f(),a=Kc();return n||a}function gE(n){var a=ia(n);a!==null&&a.tag===5&&a.type==="form"?z_(a):xa.r(n)}var Gr=typeof document>"u"?null:document;function yv(n,a,l){var u=Gr;if(u&&typeof a=="string"&&a){var m=Qe(a);m='link[rel="'+n+'"][href="'+m+'"]',typeof l=="string"&&(m+='[crossorigin="'+l+'"]'),vv.has(m)||(vv.add(m),n={rel:n,crossOrigin:l,href:a},u.querySelector(m)===null&&(a=u.createElement("link"),On(a,"link",n),hn(a),u.head.appendChild(a)))}}function _E(n){xa.D(n),yv("dns-prefetch",n,null)}function vE(n,a){xa.C(n,a),yv("preconnect",n,a)}function yE(n,a,l){xa.L(n,a,l);var u=Gr;if(u&&n&&a){var m='link[rel="preload"][as="'+Qe(a)+'"]';a==="image"&&l&&l.imageSrcSet?(m+='[imagesrcset="'+Qe(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(m+='[imagesizes="'+Qe(l.imageSizes)+'"]')):m+='[href="'+Qe(n)+'"]';var _=m;switch(a){case"style":_=kr(n);break;case"script":_=Vr(n)}Mi.has(_)||(n=g({rel:"preload",href:a==="image"&&l&&l.imageSrcSet?void 0:n,as:a},l),Mi.set(_,n),u.querySelector(m)!==null||a==="style"&&u.querySelector(gl(_))||a==="script"&&u.querySelector(_l(_))||(a=u.createElement("link"),On(a,"link",n),hn(a),u.head.appendChild(a)))}}function xE(n,a){xa.m(n,a);var l=Gr;if(l&&n){var u=a&&typeof a.as=="string"?a.as:"script",m='link[rel="modulepreload"][as="'+Qe(u)+'"][href="'+Qe(n)+'"]',_=m;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":_=Vr(n)}if(!Mi.has(_)&&(n=g({rel:"modulepreload",href:n},a),Mi.set(_,n),l.querySelector(m)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(_l(_)))return}u=l.createElement("link"),On(u,"link",n),hn(u),l.head.appendChild(u)}}}function SE(n,a,l){xa.S(n,a,l);var u=Gr;if(u&&n){var m=ka(u).hoistableStyles,_=kr(n);a=a||"default";var E=m.get(_);if(!E){var A={loading:0,preload:null};if(E=u.querySelector(gl(_)))A.loading=5;else{n=g({rel:"stylesheet",href:n,"data-precedence":a},l),(l=Mi.get(_))&&gd(n,l);var F=E=u.createElement("link");hn(F),On(F,"link",n),F._p=new Promise(function(tt,ht){F.onload=tt,F.onerror=ht}),F.addEventListener("load",function(){A.loading|=1}),F.addEventListener("error",function(){A.loading|=2}),A.loading|=4,su(E,a,u)}E={type:"stylesheet",instance:E,count:1,state:A},m.set(_,E)}}}function bE(n,a){xa.X(n,a);var l=Gr;if(l&&n){var u=ka(l).hoistableScripts,m=Vr(n),_=u.get(m);_||(_=l.querySelector(_l(m)),_||(n=g({src:n,async:!0},a),(a=Mi.get(m))&&_d(n,a),_=l.createElement("script"),hn(_),On(_,"link",n),l.head.appendChild(_)),_={type:"script",instance:_,count:1,state:null},u.set(m,_))}}function ME(n,a){xa.M(n,a);var l=Gr;if(l&&n){var u=ka(l).hoistableScripts,m=Vr(n),_=u.get(m);_||(_=l.querySelector(_l(m)),_||(n=g({src:n,async:!0,type:"module"},a),(a=Mi.get(m))&&_d(n,a),_=l.createElement("script"),hn(_),On(_,"link",n),l.head.appendChild(_)),_={type:"script",instance:_,count:1,state:null},u.set(m,_))}}function xv(n,a,l,u){var m=(m=bt.current)?au(m):null;if(!m)throw Error(s(446));switch(n){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(a=kr(l.href),l=ka(m).hoistableStyles,u=l.get(a),u||(u={type:"style",instance:null,count:0,state:null},l.set(a,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){n=kr(l.href);var _=ka(m).hoistableStyles,E=_.get(n);if(E||(m=m.ownerDocument||m,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},_.set(n,E),(_=m.querySelector(gl(n)))&&!_._p&&(E.instance=_,E.state.loading=5),Mi.has(n)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Mi.set(n,l),_||EE(m,n,l,E.state))),a&&u===null)throw Error(s(528,""));return E}if(a&&u!==null)throw Error(s(529,""));return null;case"script":return a=l.async,l=l.src,typeof l=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=Vr(l),l=ka(m).hoistableScripts,u=l.get(a),u||(u={type:"script",instance:null,count:0,state:null},l.set(a,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,n))}}function kr(n){return'href="'+Qe(n)+'"'}function gl(n){return'link[rel="stylesheet"]['+n+"]"}function Sv(n){return g({},n,{"data-precedence":n.precedence,precedence:null})}function EE(n,a,l,u){n.querySelector('link[rel="preload"][as="style"]['+a+"]")?u.loading=1:(a=n.createElement("link"),u.preload=a,a.addEventListener("load",function(){return u.loading|=1}),a.addEventListener("error",function(){return u.loading|=2}),On(a,"link",l),hn(a),n.head.appendChild(a))}function Vr(n){return'[src="'+Qe(n)+'"]'}function _l(n){return"script[async]"+n}function bv(n,a,l){if(a.count++,a.instance===null)switch(a.type){case"style":var u=n.querySelector('style[data-href~="'+Qe(l.href)+'"]');if(u)return a.instance=u,hn(u),u;var m=g({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return u=(n.ownerDocument||n).createElement("style"),hn(u),On(u,"style",m),su(u,l.precedence,n),a.instance=u;case"stylesheet":m=kr(l.href);var _=n.querySelector(gl(m));if(_)return a.state.loading|=4,a.instance=_,hn(_),_;u=Sv(l),(m=Mi.get(m))&&gd(u,m),_=(n.ownerDocument||n).createElement("link"),hn(_);var E=_;return E._p=new Promise(function(A,F){E.onload=A,E.onerror=F}),On(_,"link",u),a.state.loading|=4,su(_,l.precedence,n),a.instance=_;case"script":return _=Vr(l.src),(m=n.querySelector(_l(_)))?(a.instance=m,hn(m),m):(u=l,(m=Mi.get(_))&&(u=g({},l),_d(u,m)),n=n.ownerDocument||n,m=n.createElement("script"),hn(m),On(m,"link",u),n.head.appendChild(m),a.instance=m);case"void":return null;default:throw Error(s(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(u=a.instance,a.state.loading|=4,su(u,l.precedence,n));return a.instance}function su(n,a,l){for(var u=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),m=u.length?u[u.length-1]:null,_=m,E=0;E<u.length;E++){var A=u[E];if(A.dataset.precedence===a)_=A;else if(_!==m)break}_?_.parentNode.insertBefore(n,_.nextSibling):(a=l.nodeType===9?l.head:l,a.insertBefore(n,a.firstChild))}function gd(n,a){n.crossOrigin==null&&(n.crossOrigin=a.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=a.referrerPolicy),n.title==null&&(n.title=a.title)}function _d(n,a){n.crossOrigin==null&&(n.crossOrigin=a.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=a.referrerPolicy),n.integrity==null&&(n.integrity=a.integrity)}var ru=null;function Mv(n,a,l){if(ru===null){var u=new Map,m=ru=new Map;m.set(l,u)}else m=ru,u=m.get(l),u||(u=new Map,m.set(l,u));if(u.has(n))return u;for(u.set(n,null),l=l.getElementsByTagName(n),m=0;m<l.length;m++){var _=l[m];if(!(_[Ha]||_[gn]||n==="link"&&_.getAttribute("rel")==="stylesheet")&&_.namespaceURI!=="http://www.w3.org/2000/svg"){var E=_.getAttribute(a)||"";E=n+E;var A=u.get(E);A?A.push(_):u.set(E,[_])}}return u}function Ev(n,a,l){n=n.ownerDocument||n,n.head.insertBefore(l,a==="title"?n.querySelector("head > title"):null)}function TE(n,a,l){if(l===1||a.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return n=a.disabled,typeof a.precedence=="string"&&n==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function Tv(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var vl=null;function AE(){}function wE(n,a,l){if(vl===null)throw Error(s(475));var u=vl;if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var m=kr(l.href),_=n.querySelector(gl(m));if(_){n=_._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(u.count++,u=ou.bind(u),n.then(u,u)),a.state.loading|=4,a.instance=_,hn(_);return}_=n.ownerDocument||n,l=Sv(l),(m=Mi.get(m))&&gd(l,m),_=_.createElement("link"),hn(_);var E=_;E._p=new Promise(function(A,F){E.onload=A,E.onerror=F}),On(_,"link",l),a.instance=_}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(u.count++,a=ou.bind(u),n.addEventListener("load",a),n.addEventListener("error",a))}}function RE(){if(vl===null)throw Error(s(475));var n=vl;return n.stylesheets&&n.count===0&&vd(n,n.stylesheets),0<n.count?function(a){var l=setTimeout(function(){if(n.stylesheets&&vd(n,n.stylesheets),n.unsuspend){var u=n.unsuspend;n.unsuspend=null,u()}},6e4);return n.unsuspend=a,function(){n.unsuspend=null,clearTimeout(l)}}:null}function ou(){if(this.count--,this.count===0){if(this.stylesheets)vd(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var lu=null;function vd(n,a){n.stylesheets=null,n.unsuspend!==null&&(n.count++,lu=new Map,a.forEach(CE,n),lu=null,ou.call(n))}function CE(n,a){if(!(a.state.loading&4)){var l=lu.get(n);if(l)var u=l.get(null);else{l=new Map,lu.set(n,l);for(var m=n.querySelectorAll("link[data-precedence],style[data-precedence]"),_=0;_<m.length;_++){var E=m[_];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(l.set(E.dataset.precedence,E),u=E)}u&&l.set(null,u)}m=a.instance,E=m.getAttribute("data-precedence"),_=l.get(E)||u,_===u&&l.set(null,m),l.set(E,m),this.count++,u=ou.bind(this),m.addEventListener("load",u),m.addEventListener("error",u),_?_.parentNode.insertBefore(m,_.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(m,n.firstChild)),a.state.loading|=4}}var yl={$$typeof:L,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function DE(n,a,l,u,m,_,E,A){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ut(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ut(0),this.hiddenUpdates=ut(null),this.identifierPrefix=u,this.onUncaughtError=m,this.onCaughtError=_,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function Av(n,a,l,u,m,_,E,A,F,tt,ht,vt){return n=new DE(n,a,l,E,A,F,tt,vt),a=1,_===!0&&(a|=24),_=ri(3,null,null,a),n.current=_,_.stateNode=n,a=$f(),a.refCount++,n.pooledCache=a,a.refCount++,_.memoizedState={element:u,isDehydrated:l,cache:a},ih(_),n}function wv(n){return n?(n=xr,n):xr}function Rv(n,a,l,u,m,_){m=wv(m),u.context===null?u.context=m:u.pendingContext=m,u=Ya(a),u.payload={element:l},_=_===void 0?null:_,_!==null&&(u.callback=_),l=qa(n,u,a),l!==null&&(fi(l,n,a),Ko(l,n,a))}function Cv(n,a){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<a?l:a}}function yd(n,a){Cv(n,a),(n=n.alternate)&&Cv(n,a)}function Dv(n){if(n.tag===13){var a=yr(n,67108864);a!==null&&fi(a,n,67108864),yd(n,67108864)}}var cu=!0;function NE(n,a,l,u){var m=z.T;z.T=null;var _=Z.p;try{Z.p=2,xd(n,a,l,u)}finally{Z.p=_,z.T=m}}function LE(n,a,l,u){var m=z.T;z.T=null;var _=Z.p;try{Z.p=8,xd(n,a,l,u)}finally{Z.p=_,z.T=m}}function xd(n,a,l,u){if(cu){var m=Sd(u);if(m===null)od(n,a,u,uu,l),Lv(n,u);else if(OE(m,n,a,l,u))u.stopPropagation();else if(Lv(n,u),a&4&&-1<UE.indexOf(n)){for(;m!==null;){var _=ia(m);if(_!==null)switch(_.tag){case 3:if(_=_.stateNode,_.current.memoizedState.isDehydrated){var E=Bt(_.pendingLanes);if(E!==0){var A=_;for(A.pendingLanes|=2,A.entangledLanes|=2;E;){var F=1<<31-Dt(E);A.entanglements[1]|=F,E&=~F}Vi(_),(Pe&6)===0&&(Yc=ae()+500,hl(0))}}break;case 13:A=yr(_,2),A!==null&&fi(A,_,2),Kc(),yd(_,2)}if(_=Sd(u),_===null&&od(n,a,u,uu,l),_===m)break;m=_}m!==null&&u.stopPropagation()}else od(n,a,u,null,l)}}function Sd(n){return n=Af(n),bd(n)}var uu=null;function bd(n){if(uu=null,n=na(n),n!==null){var a=c(n);if(a===null)n=null;else{var l=a.tag;if(l===13){if(n=f(a),n!==null)return n;n=null}else if(l===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;n=null}else a!==n&&(n=null)}}return uu=n,null}function Nv(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Yt()){case Fe:return 2;case Xt:return 8;case P:case R:return 32;case it:return 268435456;default:return 32}default:return 32}}var Md=!1,os=null,ls=null,cs=null,xl=new Map,Sl=new Map,us=[],UE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Lv(n,a){switch(n){case"focusin":case"focusout":os=null;break;case"dragenter":case"dragleave":ls=null;break;case"mouseover":case"mouseout":cs=null;break;case"pointerover":case"pointerout":xl.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sl.delete(a.pointerId)}}function bl(n,a,l,u,m,_){return n===null||n.nativeEvent!==_?(n={blockedOn:a,domEventName:l,eventSystemFlags:u,nativeEvent:_,targetContainers:[m]},a!==null&&(a=ia(a),a!==null&&Dv(a)),n):(n.eventSystemFlags|=u,a=n.targetContainers,m!==null&&a.indexOf(m)===-1&&a.push(m),n)}function OE(n,a,l,u,m){switch(a){case"focusin":return os=bl(os,n,a,l,u,m),!0;case"dragenter":return ls=bl(ls,n,a,l,u,m),!0;case"mouseover":return cs=bl(cs,n,a,l,u,m),!0;case"pointerover":var _=m.pointerId;return xl.set(_,bl(xl.get(_)||null,n,a,l,u,m)),!0;case"gotpointercapture":return _=m.pointerId,Sl.set(_,bl(Sl.get(_)||null,n,a,l,u,m)),!0}return!1}function Uv(n){var a=na(n.target);if(a!==null){var l=c(a);if(l!==null){if(a=l.tag,a===13){if(a=f(l),a!==null){n.blockedOn=a,ai(n.priority,function(){if(l.tag===13){var u=ui();u=Ze(u);var m=yr(l,u);m!==null&&fi(m,l,u),yd(l,u)}});return}}else if(a===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function fu(n){if(n.blockedOn!==null)return!1;for(var a=n.targetContainers;0<a.length;){var l=Sd(n.nativeEvent);if(l===null){l=n.nativeEvent;var u=new l.constructor(l.type,l);Tf=u,l.target.dispatchEvent(u),Tf=null}else return a=ia(l),a!==null&&Dv(a),n.blockedOn=l,!1;a.shift()}return!0}function Ov(n,a,l){fu(n)&&l.delete(a)}function PE(){Md=!1,os!==null&&fu(os)&&(os=null),ls!==null&&fu(ls)&&(ls=null),cs!==null&&fu(cs)&&(cs=null),xl.forEach(Ov),Sl.forEach(Ov)}function hu(n,a){n.blockedOn===a&&(n.blockedOn=null,Md||(Md=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,PE)))}var du=null;function Pv(n){du!==n&&(du=n,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){du===n&&(du=null);for(var a=0;a<n.length;a+=3){var l=n[a],u=n[a+1],m=n[a+2];if(typeof u!="function"){if(bd(u||l)===null)continue;break}var _=ia(l);_!==null&&(n.splice(a,3),a-=3,bh(_,{pending:!0,data:m,method:l.method,action:u},u,m))}}))}function Ml(n){function a(F){return hu(F,n)}os!==null&&hu(os,n),ls!==null&&hu(ls,n),cs!==null&&hu(cs,n),xl.forEach(a),Sl.forEach(a);for(var l=0;l<us.length;l++){var u=us[l];u.blockedOn===n&&(u.blockedOn=null)}for(;0<us.length&&(l=us[0],l.blockedOn===null);)Uv(l),l.blockedOn===null&&us.shift();if(l=(n.ownerDocument||n).$$reactFormReplay,l!=null)for(u=0;u<l.length;u+=3){var m=l[u],_=l[u+1],E=m[Dn]||null;if(typeof _=="function")E||Pv(l);else if(E){var A=null;if(_&&_.hasAttribute("formAction")){if(m=_,E=_[Dn]||null)A=E.formAction;else if(bd(m)!==null)continue}else A=E.action;typeof A=="function"?l[u+1]=A:(l.splice(u,3),u-=3),Pv(l)}}}function Ed(n){this._internalRoot=n}pu.prototype.render=Ed.prototype.render=function(n){var a=this._internalRoot;if(a===null)throw Error(s(409));var l=a.current,u=ui();Rv(l,u,n,a,null,null)},pu.prototype.unmount=Ed.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var a=n.containerInfo;Rv(n.current,2,null,n,null,null),Kc(),a[Qn]=null}};function pu(n){this._internalRoot=n}pu.prototype.unstable_scheduleHydration=function(n){if(n){var a=De();n={blockedOn:null,target:n,priority:a};for(var l=0;l<us.length&&a!==0&&a<us[l].priority;l++);us.splice(l,0,n),l===0&&Uv(n)}};var Iv=t.version;if(Iv!=="19.1.0")throw Error(s(527,Iv,"19.1.0"));Z.findDOMNode=function(n){var a=n._reactInternals;if(a===void 0)throw typeof n.render=="function"?Error(s(188)):(n=Object.keys(n).join(","),Error(s(268,n)));return n=d(a),n=n!==null?p(n):null,n=n===null?null:n.stateNode,n};var IE={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mu.isDisabled&&mu.supportsFiber)try{dt=mu.inject(IE),Ft=mu}catch{}}return Tl.createRoot=function(n,a){if(!o(n))throw Error(s(299));var l=!1,u="",m=J_,_=$_,E=t0,A=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(m=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(A=a.unstable_transitionCallbacks)),a=Av(n,1,!1,null,null,l,u,m,_,E,A,null),n[Qn]=a.current,rd(n),new Ed(a)},Tl.hydrateRoot=function(n,a,l){if(!o(n))throw Error(s(299));var u=!1,m="",_=J_,E=$_,A=t0,F=null,tt=null;return l!=null&&(l.unstable_strictMode===!0&&(u=!0),l.identifierPrefix!==void 0&&(m=l.identifierPrefix),l.onUncaughtError!==void 0&&(_=l.onUncaughtError),l.onCaughtError!==void 0&&(E=l.onCaughtError),l.onRecoverableError!==void 0&&(A=l.onRecoverableError),l.unstable_transitionCallbacks!==void 0&&(F=l.unstable_transitionCallbacks),l.formState!==void 0&&(tt=l.formState)),a=Av(n,1,!0,a,l??null,u,m,_,E,A,F,tt),a.context=wv(null),l=a.current,u=ui(),u=Ze(u),m=Ya(u),m.callback=null,qa(l,m,u),l=u,a.current.lanes=l,_t(a,l),Vi(a),n[Qn]=a.current,rd(n),new pu(a)},Tl.version="19.1.0",Tl}var Wv;function jE(){if(Wv)return wd.exports;Wv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),wd.exports=XE(),wd.exports}var WE=jE(),iS={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Yv=Na.createContext&&Na.createContext(iS),YE=["attr","size","title"];function qE(r,t){if(r==null)return{};var e=KE(r,t),s,o;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(r);for(o=0;o<c.length;o++)s=c[o],!(t.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(r,s)&&(e[s]=r[s])}return e}function KE(r,t){if(r==null)return{};var e={};for(var s in r)if(Object.prototype.hasOwnProperty.call(r,s)){if(t.indexOf(s)>=0)continue;e[s]=r[s]}return e}function af(){return af=Object.assign?Object.assign.bind():function(r){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(r[s]=e[s])}return r},af.apply(this,arguments)}function qv(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);t&&(s=s.filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable})),e.push.apply(e,s)}return e}function sf(r){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?qv(Object(e),!0).forEach(function(s){ZE(r,s,e[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):qv(Object(e)).forEach(function(s){Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(e,s))})}return r}function ZE(r,t,e){return t=QE(t),t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}function QE(r){var t=JE(r,"string");return typeof t=="symbol"?t:t+""}function JE(r,t){if(typeof r!="object"||!r)return r;var e=r[Symbol.toPrimitive];if(e!==void 0){var s=e.call(r,t);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(r)}function aS(r){return r&&r.map((t,e)=>Na.createElement(t.tag,sf({key:e},t.attr),aS(t.child)))}function Lm(r){return t=>Na.createElement($E,af({attr:sf({},r.attr)},t),aS(r.child))}function $E(r){var t=e=>{var{attr:s,size:o,title:c}=r,f=qE(r,YE),h=o||e.size||"1em",d;return e.className&&(d=e.className),r.className&&(d=(d?d+" ":"")+r.className),Na.createElement("svg",af({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,s,f,{className:d,style:sf(sf({color:r.color||e.color},e.style),r.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),c&&Na.createElement("title",null,c),r.children)};return Yv!==void 0?Na.createElement(Yv.Consumer,null,e=>t(e)):t(iS)}function sS(r){return Lm({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(r)}function tT(r){return Lm({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(r)}function eT(r){return Lm({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"},child:[]}]})(r)}const rS=()=>{const[r,t]=$e.useState(0),[e,s]=$e.useState(1);return $e.useEffect(()=>{const o=()=>{const c=window.scrollY,f=window.innerHeight,h=Math.min(c/2,150),d=Math.max(1-c/f,0);t(h),s(d)};return window.addEventListener("scroll",o),()=>{window.removeEventListener("scroll",o)}},[]),nt.jsxs("div",{className:"flex space-x-8 text-6xl fixed z-50",style:{bottom:"100px",left:"100px",color:"#3E2B2B",opacity:e,transform:`translateX(-${r}px)`,transition:"transform 0.3s ease-out, opacity 0.3s ease-out"},children:[nt.jsx("a",{href:"https://www.linkedin.com/in/liviemoon",target:"_blank",rel:"noopener noreferrer",className:"!text-[#3E2B2B] hover:!text-white transition-transform transform hover:scale-110",children:nt.jsx(tT,{})}),nt.jsx("a",{href:"https://open.spotify.com/user/liviemn",target:"_blank",rel:"noopener noreferrer",className:"!text-[#3E2B2B] hover:!text-white transition-transform transform hover:scale-110",children:nt.jsx(eT,{})}),nt.jsx("a",{href:"https://github.com/liviemn",target:"_blank",rel:"noopener noreferrer",className:"!text-[#3E2B2B] hover:!text-white transition-transform transform hover:scale-110",children:nt.jsx(sS,{})})]})},nT="/assets/cafesign-Bw9p9ga8.png",iT=()=>nt.jsx("img",{src:nT,alt:"Moon Cafe sign",className:"w-full max-w-[150px] drop-shadow-xl transition-transform duration-500 hover:scale-105"}),aT="/assets/bean-DeamjCPU.png",sT="/assets/coffee-t9_aqhzr.png",rT="/assets/latte-DbfL4gPH.png",oT="/assets/milkshake-BOWrghdg.png",lT=()=>nt.jsx("div",{className:"fixed top-0 left-0 right-0 z-50",children:nt.jsxs("div",{className:"w-[75%] mx-auto mt-0 px-6 py-9 rounded-b-full bg-white/70 backdrop-blur-md shadow-lg flex items-center justify-between relative overflow-visible",children:[nt.jsx("div",{className:"w-[120px] h-[120px] absolute -top-10 left-6",children:nt.jsx(iT,{})}),nt.jsx("div",{className:"absolute left-1/2 transform -translate-x-1/2 flex gap-20",children:["Home","About","Skills","Projects"].map(r=>nt.jsxs("div",{onClick:()=>{const t=document.getElementById(r);t==null||t.scrollIntoView({behavior:"smooth"})},className:"h-[40px] px-9 py-2 bg-white text-gray-800 rounded-full shadow text-sm font-poetsen hover:bg-neutral-200 transition-all cursor-pointer flex items-center gap-2 relative",children:[r==="Home"&&nt.jsx("img",{src:aT,alt:"Bean",className:"absolute bottom-[-15px] left-[-8px] w-10 h-10 pointer-events-none"}),r==="About"&&nt.jsx("img",{src:sT,alt:"Coffee",className:"absolute bottom-[-15px] left-[-8px] w-10 h-10 pointer-events-none"}),r==="Skills"&&nt.jsx("img",{src:rT,alt:"Latte",className:"absolute bottom-[-15px] left-[-8px] w-10 h-10 pointer-events-none"}),r==="Projects"&&nt.jsx("img",{src:oT,alt:"Milkshake",className:"absolute bottom-[-15px] left-[-8px] w-10 h-10 pointer-events-none"}),r]},r))}),nt.jsx(rS,{})]})});var Xr={},Kv;function cT(){if(Kv)return Xr;Kv=1,Object.defineProperty(Xr,"__esModule",{value:!0});var r=nS(),t=pf(),e=function(){return e=Object.assign||function(d){for(var p,g=1,v=arguments.length;g<v;g++)for(var y in p=arguments[g])Object.prototype.hasOwnProperty.call(p,y)&&(d[y]=p[y]);return d},e.apply(this,arguments)};function s(d,p){var g,v;switch(p.type){case"TYPE":return e(e({},d),{speed:p.speed,text:(g=p.payload)===null||g===void 0?void 0:g.substring(0,d.text.length+1)});case"DELAY":return e(e({},d),{speed:p.payload});case"DELETE":return e(e({},d),{speed:p.speed,text:(v=p.payload)===null||v===void 0?void 0:v.substring(0,d.text.length-1)});case"COUNT":return e(e({},d),{count:d.count+1});default:return d}}var o=function(d){var p=d.words,g=p===void 0?["Hello World!","This is","a simple Typewriter"]:p,v=d.loop,y=v===void 0?1:v,S=d.typeSpeed,M=S===void 0?80:S,T=d.deleteSpeed,b=T===void 0?50:T,x=d.delaySpeed,N=x===void 0?1500:x,L=d.onLoopDone,w=d.onType,I=d.onDelete,H=d.onDelay,B=t.useReducer(s,{speed:M,text:"",count:0}),X=B[0],U=X.speed,D=X.text,k=X.count,ct=B[1],rt=t.useRef(0),mt=t.useRef(!1),ft=t.useRef(!1),z=t.useRef(!1),Z=t.useRef(!1),q=t.useCallback(function(){var St=k%g.length,O=g[St];ft.current?(ct({type:"DELETE",payload:O,speed:b}),D===""&&(ft.current=!1,ct({type:"COUNT"}))):(ct({type:"TYPE",payload:O,speed:M}),z.current=!0,D===O&&(ct({type:"DELAY",payload:N}),z.current=!1,Z.current=!0,setTimeout(function(){Z.current=!1,ft.current=!0},N),y>0&&(rt.current+=1,rt.current/g.length===y&&(Z.current=!1,mt.current=!0)))),z.current&&w&&w(rt.current),ft.current&&I&&I(),Z.current&&H&&H()},[k,N,b,y,M,g,D,w,I,H]);return t.useEffect(function(){var St=setTimeout(q,U);return mt.current&&clearTimeout(St),function(){return clearTimeout(St)}},[q,U]),t.useEffect(function(){L&&mt.current&&L()},[L]),[D,{isType:z.current,isDelay:Z.current,isDelete:ft.current,isDone:mt.current}]},c="styles-module_blinkingCursor__yugAC",f="styles-module_blinking__9VXRT";(function(d,p){p===void 0&&(p={});var g=p.insertAt;if(typeof document<"u"){var v=document.head||document.getElementsByTagName("head")[0],y=document.createElement("style");y.type="text/css",g==="top"&&v.firstChild?v.insertBefore(y,v.firstChild):v.appendChild(y),y.styleSheet?y.styleSheet.cssText=d:y.appendChild(document.createTextNode(d))}})(".styles-module_blinkingCursor__yugAC{color:inherit;font:inherit;left:3px;line-height:inherit;opacity:1;position:relative;top:0}.styles-module_blinking__9VXRT{animation-duration:.8s;animation-iteration-count:infinite;animation-name:styles-module_blink__rqfaf}@keyframes styles-module_blink__rqfaf{0%{opacity:1}to{opacity:0}}");var h=t.memo(function(d){var p=d.cursorBlinking,g=p===void 0||p,v=d.cursorStyle,y=v===void 0?"|":v,S=d.cursorColor,M=S===void 0?"inherit":S;return r.jsx("span",e({style:{color:M},className:"".concat(c," ").concat(g?f:"")},{children:y}))});return Xr.Cursor=h,Xr.Typewriter=function(d){var p=d.words,g=p===void 0?["Hello World!","This is","a simple Typewriter"]:p,v=d.loop,y=v===void 0?1:v,S=d.typeSpeed,M=S===void 0?80:S,T=d.deleteSpeed,b=T===void 0?50:T,x=d.delaySpeed,N=x===void 0?1500:x,L=d.cursor,w=L!==void 0&&L,I=d.cursorStyle,H=I===void 0?"|":I,B=d.cursorColor,X=B===void 0?"inherit":B,U=d.cursorBlinking,D=U===void 0||U,k=d.onLoopDone,ct=d.onType,rt=d.onDelay,mt=d.onDelete,ft=o({words:g,loop:y,typeSpeed:M,deleteSpeed:b,delaySpeed:N,onLoopDone:k,onType:ct,onDelay:rt,onDelete:mt})[0];return r.jsxs(r.Fragment,{children:[r.jsx("span",{children:ft}),w&&r.jsx(h,{cursorStyle:H,cursorColor:X,cursorBlinking:D})]})},Xr.useTypewriter=o,Xr}var uT=cT();const fT=()=>nt.jsxs("div",{className:"flex flex-col justify-center h-full py-16",children:[nt.jsx("div",{className:"max-w-3xl font-poetsen text-[#3E2B2B] text-left text-6xl ml-4",children:nt.jsx(uT.Typewriter,{words:["Hello!","My name is Olivia :)"],loop:!0,cursor:!0,cursorStyle:"_",typeSpeed:90,deleteSpeed:50,delaySpeed:1500})}),nt.jsx("p",{className:"text-base font-poetsen !text-[#3E2B2B] mt-8 mb-6 max-w-md ml-4 leading-8",children:"I'm a computer science major at George Mason University. Years of experience in customer service and proficient in Java, Python, HTML & CSS, and C. Actively looking for internships or other opportunities!"})]});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Um="175",fo={ROTATE:0,DOLLY:1,PAN:2},oo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},hT=0,Zv=1,dT=2,oS=1,lS=2,wa=3,Oa=0,ii=1,Yi=2,Es=0,ho=1,Qv=2,Jv=3,$v=4,pT=5,ir=100,mT=101,gT=102,_T=103,vT=104,yT=200,xT=201,ST=202,bT=203,Mp=204,Ep=205,MT=206,ET=207,TT=208,AT=209,wT=210,RT=211,CT=212,DT=213,NT=214,Tp=0,Ap=1,wp=2,_o=3,Rp=4,Cp=5,Dp=6,Np=7,cS=0,LT=1,UT=2,Ts=0,OT=1,PT=2,IT=3,BT=4,zT=5,FT=6,HT=7,ty="attached",GT="detached",uS=300,vo=301,yo=302,Lp=303,Up=304,mf=306,xo=1e3,bs=1001,rf=1002,Yn=1003,fS=1004,Il=1005,pi=1006,Yu=1007,Ca=1008,Pa=1009,hS=1010,dS=1011,jl=1012,Om=1013,lr=1014,Pi=1015,tc=1016,Pm=1017,Im=1018,Wl=1020,pS=35902,mS=1021,gS=1022,Ai=1023,_S=1024,vS=1025,Yl=1026,ql=1027,Bm=1028,zm=1029,yS=1030,Fm=1031,Hm=1033,qu=33776,Ku=33777,Zu=33778,Qu=33779,Op=35840,Pp=35841,Ip=35842,Bp=35843,zp=36196,Fp=37492,Hp=37496,Gp=37808,kp=37809,Vp=37810,Xp=37811,jp=37812,Wp=37813,Yp=37814,qp=37815,Kp=37816,Zp=37817,Qp=37818,Jp=37819,$p=37820,tm=37821,Ju=36492,em=36494,nm=36495,xS=36283,im=36284,am=36285,sm=36286,Kl=2300,Zl=2301,Nd=2302,ey=2400,ny=2401,iy=2402,kT=2500,VT=0,SS=1,rm=2,XT=3200,jT=3201,bS=0,WT=1,Ss="",Pn="srgb",Kn="srgb-linear",of="linear",Xe="srgb",jr=7680,ay=519,YT=512,qT=513,KT=514,MS=515,ZT=516,QT=517,JT=518,$T=519,om=35044,sy="300 es",Da=2e3,lf=2001;class hr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(e)===-1&&s[t].push(e)}hasEventListener(t,e){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(e)!==-1}removeEventListener(t,e){const s=this._listeners;if(s===void 0)return;const o=s[t];if(o!==void 0){const c=o.indexOf(e);c!==-1&&o.splice(c,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const s=e[t.type];if(s!==void 0){t.target=this;const o=s.slice(0);for(let c=0,f=o.length;c<f;c++)o[c].call(this,t);t.target=null}}}const Hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ry=1234567;const Fl=Math.PI/180,So=180/Math.PI;function Ii(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Hn[r&255]+Hn[r>>8&255]+Hn[r>>16&255]+Hn[r>>24&255]+"-"+Hn[t&255]+Hn[t>>8&255]+"-"+Hn[t>>16&15|64]+Hn[t>>24&255]+"-"+Hn[e&63|128]+Hn[e>>8&255]+"-"+Hn[e>>16&255]+Hn[e>>24&255]+Hn[s&255]+Hn[s>>8&255]+Hn[s>>16&255]+Hn[s>>24&255]).toLowerCase()}function me(r,t,e){return Math.max(t,Math.min(e,r))}function Gm(r,t){return(r%t+t)%t}function tA(r,t,e,s,o){return s+(r-t)*(o-s)/(e-t)}function eA(r,t,e){return r!==t?(e-r)/(t-r):0}function Hl(r,t,e){return(1-e)*r+e*t}function nA(r,t,e,s){return Hl(r,t,1-Math.exp(-e*s))}function iA(r,t=1){return t-Math.abs(Gm(r,t*2)-t)}function aA(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function sA(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function rA(r,t){return r+Math.floor(Math.random()*(t-r+1))}function oA(r,t){return r+Math.random()*(t-r)}function lA(r){return r*(.5-Math.random())}function cA(r){r!==void 0&&(ry=r);let t=ry+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function uA(r){return r*Fl}function fA(r){return r*So}function hA(r){return(r&r-1)===0&&r!==0}function dA(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function pA(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function mA(r,t,e,s,o){const c=Math.cos,f=Math.sin,h=c(e/2),d=f(e/2),p=c((t+s)/2),g=f((t+s)/2),v=c((t-s)/2),y=f((t-s)/2),S=c((s-t)/2),M=f((s-t)/2);switch(o){case"XYX":r.set(h*g,d*v,d*y,h*p);break;case"YZY":r.set(d*y,h*g,d*v,h*p);break;case"ZXZ":r.set(d*v,d*y,h*g,h*p);break;case"XZX":r.set(h*g,d*M,d*S,h*p);break;case"YXY":r.set(d*S,h*g,d*M,h*p);break;case"ZYZ":r.set(d*M,d*S,h*g,h*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Ui(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Be(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const ES={DEG2RAD:Fl,RAD2DEG:So,generateUUID:Ii,clamp:me,euclideanModulo:Gm,mapLinear:tA,inverseLerp:eA,lerp:Hl,damp:nA,pingpong:iA,smoothstep:aA,smootherstep:sA,randInt:rA,randFloat:oA,randFloatSpread:lA,seededRandom:cA,degToRad:uA,radToDeg:fA,isPowerOfTwo:hA,ceilPowerOfTwo:dA,floorPowerOfTwo:pA,setQuaternionFromProperEuler:mA,normalize:Be,denormalize:Ui};class se{constructor(t=0,e=0){se.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,s=this.y,o=t.elements;return this.x=o[0]*e+o[3]*s+o[6],this.y=o[1]*e+o[4]*s+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this}clampLength(t,e){const s=this.length();return this.divideScalar(s||1).multiplyScalar(me(s,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const s=this.dot(t)/e;return Math.acos(me(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,s=this.y-t.y;return e*e+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,s){return this.x=t.x+(e.x-t.x)*s,this.y=t.y+(e.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const s=Math.cos(e),o=Math.sin(e),c=this.x-t.x,f=this.y-t.y;return this.x=c*s-f*o+t.x,this.y=c*o+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ce{constructor(t,e,s,o,c,f,h,d,p){ce.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,s,o,c,f,h,d,p)}set(t,e,s,o,c,f,h,d,p){const g=this.elements;return g[0]=t,g[1]=o,g[2]=h,g[3]=e,g[4]=c,g[5]=d,g[6]=s,g[7]=f,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,s=t.elements;return e[0]=s[0],e[1]=s[1],e[2]=s[2],e[3]=s[3],e[4]=s[4],e[5]=s[5],e[6]=s[6],e[7]=s[7],e[8]=s[8],this}extractBasis(t,e,s){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const s=t.elements,o=e.elements,c=this.elements,f=s[0],h=s[3],d=s[6],p=s[1],g=s[4],v=s[7],y=s[2],S=s[5],M=s[8],T=o[0],b=o[3],x=o[6],N=o[1],L=o[4],w=o[7],I=o[2],H=o[5],B=o[8];return c[0]=f*T+h*N+d*I,c[3]=f*b+h*L+d*H,c[6]=f*x+h*w+d*B,c[1]=p*T+g*N+v*I,c[4]=p*b+g*L+v*H,c[7]=p*x+g*w+v*B,c[2]=y*T+S*N+M*I,c[5]=y*b+S*L+M*H,c[8]=y*x+S*w+M*B,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],s=t[1],o=t[2],c=t[3],f=t[4],h=t[5],d=t[6],p=t[7],g=t[8];return e*f*g-e*h*p-s*c*g+s*h*d+o*c*p-o*f*d}invert(){const t=this.elements,e=t[0],s=t[1],o=t[2],c=t[3],f=t[4],h=t[5],d=t[6],p=t[7],g=t[8],v=g*f-h*p,y=h*d-g*c,S=p*c-f*d,M=e*v+s*y+o*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/M;return t[0]=v*T,t[1]=(o*p-g*s)*T,t[2]=(h*s-o*f)*T,t[3]=y*T,t[4]=(g*e-o*d)*T,t[5]=(o*c-h*e)*T,t[6]=S*T,t[7]=(s*d-p*e)*T,t[8]=(f*e-s*c)*T,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,s,o,c,f,h){const d=Math.cos(c),p=Math.sin(c);return this.set(s*d,s*p,-s*(d*f+p*h)+f+t,-o*p,o*d,-o*(-p*f+d*h)+h+e,0,0,1),this}scale(t,e){return this.premultiply(Ld.makeScale(t,e)),this}rotate(t){return this.premultiply(Ld.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ld.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),s=Math.sin(t);return this.set(e,-s,0,s,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,s=t.elements;for(let o=0;o<9;o++)if(e[o]!==s[o])return!1;return!0}fromArray(t,e=0){for(let s=0;s<9;s++)this.elements[s]=t[s+e];return this}toArray(t=[],e=0){const s=this.elements;return t[e]=s[0],t[e+1]=s[1],t[e+2]=s[2],t[e+3]=s[3],t[e+4]=s[4],t[e+5]=s[5],t[e+6]=s[6],t[e+7]=s[7],t[e+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ld=new ce;function TS(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Ql(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function gA(){const r=Ql("canvas");return r.style.display="block",r}const oy={};function $u(r){r in oy||(oy[r]=!0,console.warn(r))}function _A(r,t,e){return new Promise(function(s,o){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(c,e);break;default:s()}}setTimeout(c,e)})}function vA(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function yA(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ly=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cy=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xA(){const r={enabled:!0,workingColorSpace:Kn,spaces:{},convert:function(o,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Xe&&(o.r=La(o.r),o.g=La(o.g),o.b=La(o.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Xe&&(o.r=po(o.r),o.g=po(o.g),o.b=po(o.b))),o},fromWorkingColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},toWorkingColorSpace:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Ss?of:this.spaces[o].transfer},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,f){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Kn]:{primaries:t,whitePoint:s,transfer:of,toXYZ:ly,fromXYZ:cy,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Pn},outputColorSpaceConfig:{drawingBufferColorSpace:Pn}},[Pn]:{primaries:t,whitePoint:s,transfer:Xe,toXYZ:ly,fromXYZ:cy,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Pn}}}),r}const Re=xA();function La(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function po(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Wr;class SA{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Wr===void 0&&(Wr=Ql("canvas")),Wr.width=t.width,Wr.height=t.height;const o=Wr.getContext("2d");t instanceof ImageData?o.putImageData(t,0,0):o.drawImage(t,0,0,t.width,t.height),s=Wr}return s.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ql("canvas");e.width=t.width,e.height=t.height;const s=e.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const o=s.getImageData(0,0,t.width,t.height),c=o.data;for(let f=0;f<c.length;f++)c[f]=La(c[f]/255)*255;return s.putImageData(o,0,0),e}else if(t.data){const e=t.data.slice(0);for(let s=0;s<e.length;s++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[s]=Math.floor(La(e[s]/255)*255):e[s]=La(e[s]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let bA=0;class km{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bA++}),this.uuid=Ii(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let f=0,h=o.length;f<h;f++)o[f].isDataTexture?c.push(Ud(o[f].image)):c.push(Ud(o[f]))}else c=Ud(o);s.url=c}return e||(t.images[this.uuid]=s),s}}function Ud(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?SA.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let MA=0;class Cn extends hr{constructor(t=Cn.DEFAULT_IMAGE,e=Cn.DEFAULT_MAPPING,s=bs,o=bs,c=pi,f=Ca,h=Ai,d=Pa,p=Cn.DEFAULT_ANISOTROPY,g=Ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:MA++}),this.uuid=Ii(),this.name="",this.source=new km(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=s,this.wrapT=o,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=d,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),e||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==uS)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case xo:t.x=t.x-Math.floor(t.x);break;case bs:t.x=t.x<0?0:1;break;case rf:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case xo:t.y=t.y-Math.floor(t.y);break;case bs:t.y=t.y<0?0:1;break;case rf:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=uS;Cn.DEFAULT_ANISOTROPY=1;class Oe{constructor(t=0,e=0,s=0,o=1){Oe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=s,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,s,o){return this.x=t,this.y=e,this.z=s,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,s=this.y,o=this.z,c=this.w,f=t.elements;return this.x=f[0]*e+f[4]*s+f[8]*o+f[12]*c,this.y=f[1]*e+f[5]*s+f[9]*o+f[13]*c,this.z=f[2]*e+f[6]*s+f[10]*o+f[14]*c,this.w=f[3]*e+f[7]*s+f[11]*o+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,s,o,c;const d=t.elements,p=d[0],g=d[4],v=d[8],y=d[1],S=d[5],M=d[9],T=d[2],b=d[6],x=d[10];if(Math.abs(g-y)<.01&&Math.abs(v-T)<.01&&Math.abs(M-b)<.01){if(Math.abs(g+y)<.1&&Math.abs(v+T)<.1&&Math.abs(M+b)<.1&&Math.abs(p+S+x-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const L=(p+1)/2,w=(S+1)/2,I=(x+1)/2,H=(g+y)/4,B=(v+T)/4,X=(M+b)/4;return L>w&&L>I?L<.01?(s=0,o=.707106781,c=.707106781):(s=Math.sqrt(L),o=H/s,c=B/s):w>I?w<.01?(s=.707106781,o=0,c=.707106781):(o=Math.sqrt(w),s=H/o,c=X/o):I<.01?(s=.707106781,o=.707106781,c=0):(c=Math.sqrt(I),s=B/c,o=X/c),this.set(s,o,c,e),this}let N=Math.sqrt((b-M)*(b-M)+(v-T)*(v-T)+(y-g)*(y-g));return Math.abs(N)<.001&&(N=1),this.x=(b-M)/N,this.y=(v-T)/N,this.z=(y-g)/N,this.w=Math.acos((p+S+x-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this.z=me(this.z,t.z,e.z),this.w=me(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this.z=me(this.z,t,e),this.w=me(this.w,t,e),this}clampLength(t,e){const s=this.length();return this.divideScalar(s||1).multiplyScalar(me(s,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,s){return this.x=t.x+(e.x-t.x)*s,this.y=t.y+(e.y-t.y)*s,this.z=t.z+(e.z-t.z)*s,this.w=t.w+(e.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class EA extends hr{constructor(t=1,e=1,s={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Oe(0,0,t,e),this.scissorTest=!1,this.viewport=new Oe(0,0,t,e);const o={width:t,height:e,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const c=new Cn(o,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);c.flipY=!1,c.generateMipmaps=s.generateMipmaps,c.internalFormat=s.internalFormat,this.textures=[];const f=s.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,s=1){if(this.width!==t||this.height!==e||this.depth!==s){this.width=t,this.height=e,this.depth=s;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=t,this.textures[o].image.height=e,this.textures[o].image.depth=s;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,s=t.textures.length;e<s;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const o=Object.assign({},t.textures[e].image);this.textures[e].source=new km(o)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cr extends EA{constructor(t=1,e=1,s={}){super(t,e,s),this.isWebGLRenderTarget=!0}}class AS extends Cn{constructor(t=null,e=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:s,depth:o},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=bs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class TA extends Cn{constructor(t=null,e=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:s,depth:o},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=bs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qi{constructor(t=0,e=0,s=0,o=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=s,this._w=o}static slerpFlat(t,e,s,o,c,f,h){let d=s[o+0],p=s[o+1],g=s[o+2],v=s[o+3];const y=c[f+0],S=c[f+1],M=c[f+2],T=c[f+3];if(h===0){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=v;return}if(h===1){t[e+0]=y,t[e+1]=S,t[e+2]=M,t[e+3]=T;return}if(v!==T||d!==y||p!==S||g!==M){let b=1-h;const x=d*y+p*S+g*M+v*T,N=x>=0?1:-1,L=1-x*x;if(L>Number.EPSILON){const I=Math.sqrt(L),H=Math.atan2(I,x*N);b=Math.sin(b*H)/I,h=Math.sin(h*H)/I}const w=h*N;if(d=d*b+y*w,p=p*b+S*w,g=g*b+M*w,v=v*b+T*w,b===1-h){const I=1/Math.sqrt(d*d+p*p+g*g+v*v);d*=I,p*=I,g*=I,v*=I}}t[e]=d,t[e+1]=p,t[e+2]=g,t[e+3]=v}static multiplyQuaternionsFlat(t,e,s,o,c,f){const h=s[o],d=s[o+1],p=s[o+2],g=s[o+3],v=c[f],y=c[f+1],S=c[f+2],M=c[f+3];return t[e]=h*M+g*v+d*S-p*y,t[e+1]=d*M+g*y+p*v-h*S,t[e+2]=p*M+g*S+h*y-d*v,t[e+3]=g*M-h*v-d*y-p*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,s,o){return this._x=t,this._y=e,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const s=t._x,o=t._y,c=t._z,f=t._order,h=Math.cos,d=Math.sin,p=h(s/2),g=h(o/2),v=h(c/2),y=d(s/2),S=d(o/2),M=d(c/2);switch(f){case"XYZ":this._x=y*g*v+p*S*M,this._y=p*S*v-y*g*M,this._z=p*g*M+y*S*v,this._w=p*g*v-y*S*M;break;case"YXZ":this._x=y*g*v+p*S*M,this._y=p*S*v-y*g*M,this._z=p*g*M-y*S*v,this._w=p*g*v+y*S*M;break;case"ZXY":this._x=y*g*v-p*S*M,this._y=p*S*v+y*g*M,this._z=p*g*M+y*S*v,this._w=p*g*v-y*S*M;break;case"ZYX":this._x=y*g*v-p*S*M,this._y=p*S*v+y*g*M,this._z=p*g*M-y*S*v,this._w=p*g*v+y*S*M;break;case"YZX":this._x=y*g*v+p*S*M,this._y=p*S*v+y*g*M,this._z=p*g*M-y*S*v,this._w=p*g*v-y*S*M;break;case"XZY":this._x=y*g*v-p*S*M,this._y=p*S*v-y*g*M,this._z=p*g*M+y*S*v,this._w=p*g*v+y*S*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const s=e/2,o=Math.sin(s);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,s=e[0],o=e[4],c=e[8],f=e[1],h=e[5],d=e[9],p=e[2],g=e[6],v=e[10],y=s+h+v;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(g-d)*S,this._y=(c-p)*S,this._z=(f-o)*S}else if(s>h&&s>v){const S=2*Math.sqrt(1+s-h-v);this._w=(g-d)/S,this._x=.25*S,this._y=(o+f)/S,this._z=(c+p)/S}else if(h>v){const S=2*Math.sqrt(1+h-s-v);this._w=(c-p)/S,this._x=(o+f)/S,this._y=.25*S,this._z=(d+g)/S}else{const S=2*Math.sqrt(1+v-s-h);this._w=(f-o)/S,this._x=(c+p)/S,this._y=(d+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let s=t.dot(e)+1;return s<Number.EPSILON?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,e){const s=this.angleTo(t);if(s===0)return this;const o=Math.min(1,e/s);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const s=t._x,o=t._y,c=t._z,f=t._w,h=e._x,d=e._y,p=e._z,g=e._w;return this._x=s*g+f*h+o*p-c*d,this._y=o*g+f*d+c*h-s*p,this._z=c*g+f*p+s*d-o*h,this._w=f*g-s*h-o*d-c*p,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const s=this._x,o=this._y,c=this._z,f=this._w;let h=f*t._w+s*t._x+o*t._y+c*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=f,this._x=s,this._y=o,this._z=c,this;const d=1-h*h;if(d<=Number.EPSILON){const S=1-e;return this._w=S*f+e*this._w,this._x=S*s+e*this._x,this._y=S*o+e*this._y,this._z=S*c+e*this._z,this.normalize(),this}const p=Math.sqrt(d),g=Math.atan2(p,h),v=Math.sin((1-e)*g)/p,y=Math.sin(e*g)/p;return this._w=f*v+this._w*y,this._x=s*v+this._x*y,this._y=o*v+this._y*y,this._z=c*v+this._z*y,this._onChangeCallback(),this}slerpQuaternions(t,e,s){return this.copy(t).slerp(e,s)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),s=Math.random(),o=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(o*Math.sin(t),o*Math.cos(t),c*Math.sin(e),c*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(t=0,e=0,s=0){W.prototype.isVector3=!0,this.x=t,this.y=e,this.z=s}set(t,e,s){return s===void 0&&(s=this.z),this.x=t,this.y=e,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(uy.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(uy.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,s=this.y,o=this.z,c=t.elements;return this.x=c[0]*e+c[3]*s+c[6]*o,this.y=c[1]*e+c[4]*s+c[7]*o,this.z=c[2]*e+c[5]*s+c[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,s=this.y,o=this.z,c=t.elements,f=1/(c[3]*e+c[7]*s+c[11]*o+c[15]);return this.x=(c[0]*e+c[4]*s+c[8]*o+c[12])*f,this.y=(c[1]*e+c[5]*s+c[9]*o+c[13])*f,this.z=(c[2]*e+c[6]*s+c[10]*o+c[14])*f,this}applyQuaternion(t){const e=this.x,s=this.y,o=this.z,c=t.x,f=t.y,h=t.z,d=t.w,p=2*(f*o-h*s),g=2*(h*e-c*o),v=2*(c*s-f*e);return this.x=e+d*p+f*v-h*g,this.y=s+d*g+h*p-c*v,this.z=o+d*v+c*g-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,s=this.y,o=this.z,c=t.elements;return this.x=c[0]*e+c[4]*s+c[8]*o,this.y=c[1]*e+c[5]*s+c[9]*o,this.z=c[2]*e+c[6]*s+c[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this.z=me(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this.z=me(this.z,t,e),this}clampLength(t,e){const s=this.length();return this.divideScalar(s||1).multiplyScalar(me(s,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,s){return this.x=t.x+(e.x-t.x)*s,this.y=t.y+(e.y-t.y)*s,this.z=t.z+(e.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const s=t.x,o=t.y,c=t.z,f=e.x,h=e.y,d=e.z;return this.x=o*d-c*h,this.y=c*f-s*d,this.z=s*h-o*f,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const s=t.dot(this)/e;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Od.copy(this).projectOnVector(t),this.sub(Od)}reflect(t){return this.sub(Od.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const s=this.dot(t)/e;return Math.acos(me(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,s=this.y-t.y,o=this.z-t.z;return e*e+s*s+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,s){const o=Math.sin(e)*t;return this.x=o*Math.sin(s),this.y=Math.cos(e)*t,this.z=o*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,s){return this.x=t*Math.sin(e),this.y=s,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=s,this.z=o,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,s=Math.sqrt(1-e*e);return this.x=s*Math.cos(t),this.y=e,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Od=new W,uy=new Qi;class za{constructor(t=new W(1/0,1/0,1/0),e=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,s=t.length;e<s;e+=3)this.expandByPoint(Di.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,s=t.count;e<s;e++)this.expandByPoint(Di.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,s=t.length;e<s;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const s=Di.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(e===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)t.isMesh===!0?t.getVertexPosition(f,Di):Di.fromBufferAttribute(c,f),Di.applyMatrix4(t.matrixWorld),this.expandByPoint(Di);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),gu.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),gu.copy(s.boundingBox)),gu.applyMatrix4(t.matrixWorld),this.union(gu)}const o=t.children;for(let c=0,f=o.length;c<f;c++)this.expandByObject(o[c],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Di),Di.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,s;return t.normal.x>0?(e=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),e<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Al),_u.subVectors(this.max,Al),Yr.subVectors(t.a,Al),qr.subVectors(t.b,Al),Kr.subVectors(t.c,Al),hs.subVectors(qr,Yr),ds.subVectors(Kr,qr),Ks.subVectors(Yr,Kr);let e=[0,-hs.z,hs.y,0,-ds.z,ds.y,0,-Ks.z,Ks.y,hs.z,0,-hs.x,ds.z,0,-ds.x,Ks.z,0,-Ks.x,-hs.y,hs.x,0,-ds.y,ds.x,0,-Ks.y,Ks.x,0];return!Pd(e,Yr,qr,Kr,_u)||(e=[1,0,0,0,1,0,0,0,1],!Pd(e,Yr,qr,Kr,_u))?!1:(vu.crossVectors(hs,ds),e=[vu.x,vu.y,vu.z],Pd(e,Yr,qr,Kr,_u))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Di).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Di).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Sa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Sa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Sa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Sa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Sa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Sa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Sa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Sa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Sa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Sa=[new W,new W,new W,new W,new W,new W,new W,new W],Di=new W,gu=new za,Yr=new W,qr=new W,Kr=new W,hs=new W,ds=new W,Ks=new W,Al=new W,_u=new W,vu=new W,Zs=new W;function Pd(r,t,e,s,o){for(let c=0,f=r.length-3;c<=f;c+=3){Zs.fromArray(r,c);const h=o.x*Math.abs(Zs.x)+o.y*Math.abs(Zs.y)+o.z*Math.abs(Zs.z),d=t.dot(Zs),p=e.dot(Zs),g=s.dot(Zs);if(Math.max(-Math.max(d,p,g),Math.min(d,p,g))>h)return!1}return!0}const AA=new za,wl=new W,Id=new W;class $i{constructor(t=new W,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const s=this.center;e!==void 0?s.copy(e):AA.setFromPoints(t).getCenter(s);let o=0;for(let c=0,f=t.length;c<f;c++)o=Math.max(o,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const s=this.center.distanceToSquared(t);return e.copy(t),s>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;wl.subVectors(t,this.center);const e=wl.lengthSq();if(e>this.radius*this.radius){const s=Math.sqrt(e),o=(s-this.radius)*.5;this.center.addScaledVector(wl,o/s),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Id.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(wl.copy(t.center).add(Id)),this.expandByPoint(wl.copy(t.center).sub(Id))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ba=new W,Bd=new W,yu=new W,ps=new W,zd=new W,xu=new W,Fd=new W;class ec{constructor(t=new W,e=new W(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ba)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const s=e.dot(this.direction);return s<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ba.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ba.copy(this.origin).addScaledVector(this.direction,e),ba.distanceToSquared(t))}distanceSqToSegment(t,e,s,o){Bd.copy(t).add(e).multiplyScalar(.5),yu.copy(e).sub(t).normalize(),ps.copy(this.origin).sub(Bd);const c=t.distanceTo(e)*.5,f=-this.direction.dot(yu),h=ps.dot(this.direction),d=-ps.dot(yu),p=ps.lengthSq(),g=Math.abs(1-f*f);let v,y,S,M;if(g>0)if(v=f*d-h,y=f*h-d,M=c*g,v>=0)if(y>=-M)if(y<=M){const T=1/g;v*=T,y*=T,S=v*(v+f*y+2*h)+y*(f*v+y+2*d)+p}else y=c,v=Math.max(0,-(f*y+h)),S=-v*v+y*(y+2*d)+p;else y=-c,v=Math.max(0,-(f*y+h)),S=-v*v+y*(y+2*d)+p;else y<=-M?(v=Math.max(0,-(-f*c+h)),y=v>0?-c:Math.min(Math.max(-c,-d),c),S=-v*v+y*(y+2*d)+p):y<=M?(v=0,y=Math.min(Math.max(-c,-d),c),S=y*(y+2*d)+p):(v=Math.max(0,-(f*c+h)),y=v>0?c:Math.min(Math.max(-c,-d),c),S=-v*v+y*(y+2*d)+p);else y=f>0?-c:c,v=Math.max(0,-(f*y+h)),S=-v*v+y*(y+2*d)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(Bd).addScaledVector(yu,y),S}intersectSphere(t,e){ba.subVectors(t.center,this.origin);const s=ba.dot(this.direction),o=ba.dot(ba)-s*s,c=t.radius*t.radius;if(o>c)return null;const f=Math.sqrt(c-o),h=s-f,d=s+f;return d<0?null:h<0?this.at(d,e):this.at(h,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/e;return s>=0?s:null}intersectPlane(t,e){const s=this.distanceToPlane(t);return s===null?null:this.at(s,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let s,o,c,f,h,d;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,y=this.origin;return p>=0?(s=(t.min.x-y.x)*p,o=(t.max.x-y.x)*p):(s=(t.max.x-y.x)*p,o=(t.min.x-y.x)*p),g>=0?(c=(t.min.y-y.y)*g,f=(t.max.y-y.y)*g):(c=(t.max.y-y.y)*g,f=(t.min.y-y.y)*g),s>f||c>o||((c>s||isNaN(s))&&(s=c),(f<o||isNaN(o))&&(o=f),v>=0?(h=(t.min.z-y.z)*v,d=(t.max.z-y.z)*v):(h=(t.max.z-y.z)*v,d=(t.min.z-y.z)*v),s>d||h>o)||((h>s||s!==s)&&(s=h),(d<o||o!==o)&&(o=d),o<0)?null:this.at(s>=0?s:o,e)}intersectsBox(t){return this.intersectBox(t,ba)!==null}intersectTriangle(t,e,s,o,c){zd.subVectors(e,t),xu.subVectors(s,t),Fd.crossVectors(zd,xu);let f=this.direction.dot(Fd),h;if(f>0){if(o)return null;h=1}else if(f<0)h=-1,f=-f;else return null;ps.subVectors(this.origin,t);const d=h*this.direction.dot(xu.crossVectors(ps,xu));if(d<0)return null;const p=h*this.direction.dot(zd.cross(ps));if(p<0||d+p>f)return null;const g=-h*ps.dot(Fd);return g<0?null:this.at(g/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ue{constructor(t,e,s,o,c,f,h,d,p,g,v,y,S,M,T,b){ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,s,o,c,f,h,d,p,g,v,y,S,M,T,b)}set(t,e,s,o,c,f,h,d,p,g,v,y,S,M,T,b){const x=this.elements;return x[0]=t,x[4]=e,x[8]=s,x[12]=o,x[1]=c,x[5]=f,x[9]=h,x[13]=d,x[2]=p,x[6]=g,x[10]=v,x[14]=y,x[3]=S,x[7]=M,x[11]=T,x[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ue().fromArray(this.elements)}copy(t){const e=this.elements,s=t.elements;return e[0]=s[0],e[1]=s[1],e[2]=s[2],e[3]=s[3],e[4]=s[4],e[5]=s[5],e[6]=s[6],e[7]=s[7],e[8]=s[8],e[9]=s[9],e[10]=s[10],e[11]=s[11],e[12]=s[12],e[13]=s[13],e[14]=s[14],e[15]=s[15],this}copyPosition(t){const e=this.elements,s=t.elements;return e[12]=s[12],e[13]=s[13],e[14]=s[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,s){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,e,s){return this.set(t.x,e.x,s.x,0,t.y,e.y,s.y,0,t.z,e.z,s.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,s=t.elements,o=1/Zr.setFromMatrixColumn(t,0).length(),c=1/Zr.setFromMatrixColumn(t,1).length(),f=1/Zr.setFromMatrixColumn(t,2).length();return e[0]=s[0]*o,e[1]=s[1]*o,e[2]=s[2]*o,e[3]=0,e[4]=s[4]*c,e[5]=s[5]*c,e[6]=s[6]*c,e[7]=0,e[8]=s[8]*f,e[9]=s[9]*f,e[10]=s[10]*f,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,s=t.x,o=t.y,c=t.z,f=Math.cos(s),h=Math.sin(s),d=Math.cos(o),p=Math.sin(o),g=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const y=f*g,S=f*v,M=h*g,T=h*v;e[0]=d*g,e[4]=-d*v,e[8]=p,e[1]=S+M*p,e[5]=y-T*p,e[9]=-h*d,e[2]=T-y*p,e[6]=M+S*p,e[10]=f*d}else if(t.order==="YXZ"){const y=d*g,S=d*v,M=p*g,T=p*v;e[0]=y+T*h,e[4]=M*h-S,e[8]=f*p,e[1]=f*v,e[5]=f*g,e[9]=-h,e[2]=S*h-M,e[6]=T+y*h,e[10]=f*d}else if(t.order==="ZXY"){const y=d*g,S=d*v,M=p*g,T=p*v;e[0]=y-T*h,e[4]=-f*v,e[8]=M+S*h,e[1]=S+M*h,e[5]=f*g,e[9]=T-y*h,e[2]=-f*p,e[6]=h,e[10]=f*d}else if(t.order==="ZYX"){const y=f*g,S=f*v,M=h*g,T=h*v;e[0]=d*g,e[4]=M*p-S,e[8]=y*p+T,e[1]=d*v,e[5]=T*p+y,e[9]=S*p-M,e[2]=-p,e[6]=h*d,e[10]=f*d}else if(t.order==="YZX"){const y=f*d,S=f*p,M=h*d,T=h*p;e[0]=d*g,e[4]=T-y*v,e[8]=M*v+S,e[1]=v,e[5]=f*g,e[9]=-h*g,e[2]=-p*g,e[6]=S*v+M,e[10]=y-T*v}else if(t.order==="XZY"){const y=f*d,S=f*p,M=h*d,T=h*p;e[0]=d*g,e[4]=-v,e[8]=p*g,e[1]=y*v+T,e[5]=f*g,e[9]=S*v-M,e[2]=M*v-S,e[6]=h*g,e[10]=T*v+y}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(wA,t,RA)}lookAt(t,e,s){const o=this.elements;return hi.subVectors(t,e),hi.lengthSq()===0&&(hi.z=1),hi.normalize(),ms.crossVectors(s,hi),ms.lengthSq()===0&&(Math.abs(s.z)===1?hi.x+=1e-4:hi.z+=1e-4,hi.normalize(),ms.crossVectors(s,hi)),ms.normalize(),Su.crossVectors(hi,ms),o[0]=ms.x,o[4]=Su.x,o[8]=hi.x,o[1]=ms.y,o[5]=Su.y,o[9]=hi.y,o[2]=ms.z,o[6]=Su.z,o[10]=hi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const s=t.elements,o=e.elements,c=this.elements,f=s[0],h=s[4],d=s[8],p=s[12],g=s[1],v=s[5],y=s[9],S=s[13],M=s[2],T=s[6],b=s[10],x=s[14],N=s[3],L=s[7],w=s[11],I=s[15],H=o[0],B=o[4],X=o[8],U=o[12],D=o[1],k=o[5],ct=o[9],rt=o[13],mt=o[2],ft=o[6],z=o[10],Z=o[14],q=o[3],St=o[7],O=o[11],et=o[15];return c[0]=f*H+h*D+d*mt+p*q,c[4]=f*B+h*k+d*ft+p*St,c[8]=f*X+h*ct+d*z+p*O,c[12]=f*U+h*rt+d*Z+p*et,c[1]=g*H+v*D+y*mt+S*q,c[5]=g*B+v*k+y*ft+S*St,c[9]=g*X+v*ct+y*z+S*O,c[13]=g*U+v*rt+y*Z+S*et,c[2]=M*H+T*D+b*mt+x*q,c[6]=M*B+T*k+b*ft+x*St,c[10]=M*X+T*ct+b*z+x*O,c[14]=M*U+T*rt+b*Z+x*et,c[3]=N*H+L*D+w*mt+I*q,c[7]=N*B+L*k+w*ft+I*St,c[11]=N*X+L*ct+w*z+I*O,c[15]=N*U+L*rt+w*Z+I*et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],s=t[4],o=t[8],c=t[12],f=t[1],h=t[5],d=t[9],p=t[13],g=t[2],v=t[6],y=t[10],S=t[14],M=t[3],T=t[7],b=t[11],x=t[15];return M*(+c*d*v-o*p*v-c*h*y+s*p*y+o*h*S-s*d*S)+T*(+e*d*S-e*p*y+c*f*y-o*f*S+o*p*g-c*d*g)+b*(+e*p*v-e*h*S-c*f*v+s*f*S+c*h*g-s*p*g)+x*(-o*h*g-e*d*v+e*h*y+o*f*v-s*f*y+s*d*g)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,s){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=e,o[14]=s),this}invert(){const t=this.elements,e=t[0],s=t[1],o=t[2],c=t[3],f=t[4],h=t[5],d=t[6],p=t[7],g=t[8],v=t[9],y=t[10],S=t[11],M=t[12],T=t[13],b=t[14],x=t[15],N=v*b*p-T*y*p+T*d*S-h*b*S-v*d*x+h*y*x,L=M*y*p-g*b*p-M*d*S+f*b*S+g*d*x-f*y*x,w=g*T*p-M*v*p+M*h*S-f*T*S-g*h*x+f*v*x,I=M*v*d-g*T*d-M*h*y+f*T*y+g*h*b-f*v*b,H=e*N+s*L+o*w+c*I;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/H;return t[0]=N*B,t[1]=(T*y*c-v*b*c-T*o*S+s*b*S+v*o*x-s*y*x)*B,t[2]=(h*b*c-T*d*c+T*o*p-s*b*p-h*o*x+s*d*x)*B,t[3]=(v*d*c-h*y*c-v*o*p+s*y*p+h*o*S-s*d*S)*B,t[4]=L*B,t[5]=(g*b*c-M*y*c+M*o*S-e*b*S-g*o*x+e*y*x)*B,t[6]=(M*d*c-f*b*c-M*o*p+e*b*p+f*o*x-e*d*x)*B,t[7]=(f*y*c-g*d*c+g*o*p-e*y*p-f*o*S+e*d*S)*B,t[8]=w*B,t[9]=(M*v*c-g*T*c-M*s*S+e*T*S+g*s*x-e*v*x)*B,t[10]=(f*T*c-M*h*c+M*s*p-e*T*p-f*s*x+e*h*x)*B,t[11]=(g*h*c-f*v*c-g*s*p+e*v*p+f*s*S-e*h*S)*B,t[12]=I*B,t[13]=(g*T*o-M*v*o+M*s*y-e*T*y-g*s*b+e*v*b)*B,t[14]=(M*h*o-f*T*o-M*s*d+e*T*d+f*s*b-e*h*b)*B,t[15]=(f*v*o-g*h*o+g*s*d-e*v*d-f*s*y+e*h*y)*B,this}scale(t){const e=this.elements,s=t.x,o=t.y,c=t.z;return e[0]*=s,e[4]*=o,e[8]*=c,e[1]*=s,e[5]*=o,e[9]*=c,e[2]*=s,e[6]*=o,e[10]*=c,e[3]*=s,e[7]*=o,e[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,s,o))}makeTranslation(t,e,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,s,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,e,-s,0,0,s,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),s=Math.sin(t);return this.set(e,0,s,0,0,1,0,0,-s,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),s=Math.sin(t);return this.set(e,-s,0,0,s,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const s=Math.cos(e),o=Math.sin(e),c=1-s,f=t.x,h=t.y,d=t.z,p=c*f,g=c*h;return this.set(p*f+s,p*h-o*d,p*d+o*h,0,p*h+o*d,g*h+s,g*d-o*f,0,p*d-o*h,g*d+o*f,c*d*d+s,0,0,0,0,1),this}makeScale(t,e,s){return this.set(t,0,0,0,0,e,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,e,s,o,c,f){return this.set(1,s,c,0,t,1,f,0,e,o,1,0,0,0,0,1),this}compose(t,e,s){const o=this.elements,c=e._x,f=e._y,h=e._z,d=e._w,p=c+c,g=f+f,v=h+h,y=c*p,S=c*g,M=c*v,T=f*g,b=f*v,x=h*v,N=d*p,L=d*g,w=d*v,I=s.x,H=s.y,B=s.z;return o[0]=(1-(T+x))*I,o[1]=(S+w)*I,o[2]=(M-L)*I,o[3]=0,o[4]=(S-w)*H,o[5]=(1-(y+x))*H,o[6]=(b+N)*H,o[7]=0,o[8]=(M+L)*B,o[9]=(b-N)*B,o[10]=(1-(y+T))*B,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,e,s){const o=this.elements;let c=Zr.set(o[0],o[1],o[2]).length();const f=Zr.set(o[4],o[5],o[6]).length(),h=Zr.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),t.x=o[12],t.y=o[13],t.z=o[14],Ni.copy(this);const p=1/c,g=1/f,v=1/h;return Ni.elements[0]*=p,Ni.elements[1]*=p,Ni.elements[2]*=p,Ni.elements[4]*=g,Ni.elements[5]*=g,Ni.elements[6]*=g,Ni.elements[8]*=v,Ni.elements[9]*=v,Ni.elements[10]*=v,e.setFromRotationMatrix(Ni),s.x=c,s.y=f,s.z=h,this}makePerspective(t,e,s,o,c,f,h=Da){const d=this.elements,p=2*c/(e-t),g=2*c/(s-o),v=(e+t)/(e-t),y=(s+o)/(s-o);let S,M;if(h===Da)S=-(f+c)/(f-c),M=-2*f*c/(f-c);else if(h===lf)S=-f/(f-c),M=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return d[0]=p,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=g,d[9]=y,d[13]=0,d[2]=0,d[6]=0,d[10]=S,d[14]=M,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,e,s,o,c,f,h=Da){const d=this.elements,p=1/(e-t),g=1/(s-o),v=1/(f-c),y=(e+t)*p,S=(s+o)*g;let M,T;if(h===Da)M=(f+c)*v,T=-2*v;else if(h===lf)M=c*v,T=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return d[0]=2*p,d[4]=0,d[8]=0,d[12]=-y,d[1]=0,d[5]=2*g,d[9]=0,d[13]=-S,d[2]=0,d[6]=0,d[10]=T,d[14]=-M,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const e=this.elements,s=t.elements;for(let o=0;o<16;o++)if(e[o]!==s[o])return!1;return!0}fromArray(t,e=0){for(let s=0;s<16;s++)this.elements[s]=t[s+e];return this}toArray(t=[],e=0){const s=this.elements;return t[e]=s[0],t[e+1]=s[1],t[e+2]=s[2],t[e+3]=s[3],t[e+4]=s[4],t[e+5]=s[5],t[e+6]=s[6],t[e+7]=s[7],t[e+8]=s[8],t[e+9]=s[9],t[e+10]=s[10],t[e+11]=s[11],t[e+12]=s[12],t[e+13]=s[13],t[e+14]=s[14],t[e+15]=s[15],t}}const Zr=new W,Ni=new ue,wA=new W(0,0,0),RA=new W(1,1,1),ms=new W,Su=new W,hi=new W,fy=new ue,hy=new Qi;class Ji{constructor(t=0,e=0,s=0,o=Ji.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=s,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,s,o=this._order){return this._x=t,this._y=e,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,s=!0){const o=t.elements,c=o[0],f=o[4],h=o[8],d=o[1],p=o[5],g=o[9],v=o[2],y=o[6],S=o[10];switch(e){case"XYZ":this._y=Math.asin(me(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-me(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(d,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(me(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(d,c));break;case"ZYX":this._y=Math.asin(-me(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(d,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(me(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-me(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,s){return fy.makeRotationFromQuaternion(t),this.setFromRotationMatrix(fy,e,s)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return hy.setFromEuler(this),this.setFromQuaternion(hy,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ji.DEFAULT_ORDER="XYZ";let wS=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},CA=0;const dy=new W,Qr=new Qi,Ma=new ue,bu=new W,Rl=new W,DA=new W,NA=new Qi,py=new W(1,0,0),my=new W(0,1,0),gy=new W(0,0,1),_y={type:"added"},LA={type:"removed"},Jr={type:"childadded",child:null},Hd={type:"childremoved",child:null};class sn extends hr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:CA++}),this.uuid=Ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=sn.DEFAULT_UP.clone();const t=new W,e=new Ji,s=new Qi,o=new W(1,1,1);function c(){s.setFromEuler(e,!1)}function f(){e.setFromQuaternion(s,void 0,!1)}e._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new ue},normalMatrix:{value:new ce}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Qr.setFromAxisAngle(t,e),this.quaternion.multiply(Qr),this}rotateOnWorldAxis(t,e){return Qr.setFromAxisAngle(t,e),this.quaternion.premultiply(Qr),this}rotateX(t){return this.rotateOnAxis(py,t)}rotateY(t){return this.rotateOnAxis(my,t)}rotateZ(t){return this.rotateOnAxis(gy,t)}translateOnAxis(t,e){return dy.copy(t).applyQuaternion(this.quaternion),this.position.add(dy.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(py,t)}translateY(t){return this.translateOnAxis(my,t)}translateZ(t){return this.translateOnAxis(gy,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ma.copy(this.matrixWorld).invert())}lookAt(t,e,s){t.isVector3?bu.copy(t):bu.set(t,e,s);const o=this.parent;this.updateWorldMatrix(!0,!1),Rl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ma.lookAt(Rl,bu,this.up):Ma.lookAt(bu,Rl,this.up),this.quaternion.setFromRotationMatrix(Ma),o&&(Ma.extractRotation(o.matrixWorld),Qr.setFromRotationMatrix(Ma),this.quaternion.premultiply(Qr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(_y),Jr.child=t,this.dispatchEvent(Jr),Jr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(LA),Hd.child=t,this.dispatchEvent(Hd),Hd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ma.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ma.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ma),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(_y),Jr.child=t,this.dispatchEvent(Jr),Jr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let s=0,o=this.children.length;s<o;s++){const f=this.children[s].getObjectByProperty(t,e);if(f!==void 0)return f}}getObjectsByProperty(t,e,s=[]){this[t]===e&&s.push(this);const o=this.children;for(let c=0,f=o.length;c<f;c++)o[c].getObjectsByProperty(t,e,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rl,t,DA),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rl,NA,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let s=0,o=e.length;s<o;s++)e[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let s=0,o=e.length;s<o;s++)e[s].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let s=0,o=e.length;s<o;s++)e[s].updateMatrixWorld(t)}updateWorldMatrix(t,e){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const o=this.children;for(let c=0,f=o.length;c<f;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",s={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function c(h,d){return h[d.uuid]===void 0&&(h[d.uuid]=d.toJSON(t)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const d=h.shapes;if(Array.isArray(d))for(let p=0,g=d.length;p<g;p++){const v=d[p];c(t.shapes,v)}else c(t.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let d=0,p=this.material.length;d<p;d++)h.push(c(t.materials,this.material[d]));o.material=h}else o.material=c(t.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const d=this.animations[h];o.animations.push(c(t.animations,d))}}if(e){const h=f(t.geometries),d=f(t.materials),p=f(t.textures),g=f(t.images),v=f(t.shapes),y=f(t.skeletons),S=f(t.animations),M=f(t.nodes);h.length>0&&(s.geometries=h),d.length>0&&(s.materials=d),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),v.length>0&&(s.shapes=v),y.length>0&&(s.skeletons=y),S.length>0&&(s.animations=S),M.length>0&&(s.nodes=M)}return s.object=o,s;function f(h){const d=[];for(const p in h){const g=h[p];delete g.metadata,d.push(g)}return d}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let s=0;s<t.children.length;s++){const o=t.children[s];this.add(o.clone())}return this}}sn.DEFAULT_UP=new W(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Li=new W,Ea=new W,Gd=new W,Ta=new W,$r=new W,to=new W,vy=new W,kd=new W,Vd=new W,Xd=new W,jd=new Oe,Wd=new Oe,Yd=new Oe;class Oi{constructor(t=new W,e=new W,s=new W){this.a=t,this.b=e,this.c=s}static getNormal(t,e,s,o){o.subVectors(s,e),Li.subVectors(t,e),o.cross(Li);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(t,e,s,o,c){Li.subVectors(o,e),Ea.subVectors(s,e),Gd.subVectors(t,e);const f=Li.dot(Li),h=Li.dot(Ea),d=Li.dot(Gd),p=Ea.dot(Ea),g=Ea.dot(Gd),v=f*p-h*h;if(v===0)return c.set(0,0,0),null;const y=1/v,S=(p*d-h*g)*y,M=(f*g-h*d)*y;return c.set(1-S-M,M,S)}static containsPoint(t,e,s,o){return this.getBarycoord(t,e,s,o,Ta)===null?!1:Ta.x>=0&&Ta.y>=0&&Ta.x+Ta.y<=1}static getInterpolation(t,e,s,o,c,f,h,d){return this.getBarycoord(t,e,s,o,Ta)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(c,Ta.x),d.addScaledVector(f,Ta.y),d.addScaledVector(h,Ta.z),d)}static getInterpolatedAttribute(t,e,s,o,c,f){return jd.setScalar(0),Wd.setScalar(0),Yd.setScalar(0),jd.fromBufferAttribute(t,e),Wd.fromBufferAttribute(t,s),Yd.fromBufferAttribute(t,o),f.setScalar(0),f.addScaledVector(jd,c.x),f.addScaledVector(Wd,c.y),f.addScaledVector(Yd,c.z),f}static isFrontFacing(t,e,s,o){return Li.subVectors(s,e),Ea.subVectors(t,e),Li.cross(Ea).dot(o)<0}set(t,e,s){return this.a.copy(t),this.b.copy(e),this.c.copy(s),this}setFromPointsAndIndices(t,e,s,o){return this.a.copy(t[e]),this.b.copy(t[s]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,e,s,o){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Li.subVectors(this.c,this.b),Ea.subVectors(this.a,this.b),Li.cross(Ea).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Oi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Oi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,s,o,c){return Oi.getInterpolation(t,this.a,this.b,this.c,e,s,o,c)}containsPoint(t){return Oi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Oi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const s=this.a,o=this.b,c=this.c;let f,h;$r.subVectors(o,s),to.subVectors(c,s),kd.subVectors(t,s);const d=$r.dot(kd),p=to.dot(kd);if(d<=0&&p<=0)return e.copy(s);Vd.subVectors(t,o);const g=$r.dot(Vd),v=to.dot(Vd);if(g>=0&&v<=g)return e.copy(o);const y=d*v-g*p;if(y<=0&&d>=0&&g<=0)return f=d/(d-g),e.copy(s).addScaledVector($r,f);Xd.subVectors(t,c);const S=$r.dot(Xd),M=to.dot(Xd);if(M>=0&&S<=M)return e.copy(c);const T=S*p-d*M;if(T<=0&&p>=0&&M<=0)return h=p/(p-M),e.copy(s).addScaledVector(to,h);const b=g*M-S*v;if(b<=0&&v-g>=0&&S-M>=0)return vy.subVectors(c,o),h=(v-g)/(v-g+(S-M)),e.copy(o).addScaledVector(vy,h);const x=1/(b+T+y);return f=T*x,h=y*x,e.copy(s).addScaledVector($r,f).addScaledVector(to,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const RS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gs={h:0,s:0,l:0},Mu={h:0,s:0,l:0};function qd(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class oe{constructor(t,e,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,s)}set(t,e,s){if(e===void 0&&s===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,e,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Re.toWorkingColorSpace(this,e),this}setRGB(t,e,s,o=Re.workingColorSpace){return this.r=t,this.g=e,this.b=s,Re.toWorkingColorSpace(this,o),this}setHSL(t,e,s,o=Re.workingColorSpace){if(t=Gm(t,1),e=me(e,0,1),s=me(s,0,1),e===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+e):s+e-s*e,f=2*s-c;this.r=qd(f,c,t+1/3),this.g=qd(f,c,t),this.b=qd(f,c,t-1/3)}return Re.toWorkingColorSpace(this,o),this}setStyle(t,e=Pn){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=o[1],h=o[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,e);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,e);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=o[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,e);if(f===6)return this.setHex(parseInt(c,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pn){const s=RS[t.toLowerCase()];return s!==void 0?this.setHex(s,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=La(t.r),this.g=La(t.g),this.b=La(t.b),this}copyLinearToSRGB(t){return this.r=po(t.r),this.g=po(t.g),this.b=po(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pn){return Re.fromWorkingColorSpace(Gn.copy(this),t),Math.round(me(Gn.r*255,0,255))*65536+Math.round(me(Gn.g*255,0,255))*256+Math.round(me(Gn.b*255,0,255))}getHexString(t=Pn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Re.workingColorSpace){Re.fromWorkingColorSpace(Gn.copy(this),e);const s=Gn.r,o=Gn.g,c=Gn.b,f=Math.max(s,o,c),h=Math.min(s,o,c);let d,p;const g=(h+f)/2;if(h===f)d=0,p=0;else{const v=f-h;switch(p=g<=.5?v/(f+h):v/(2-f-h),f){case s:d=(o-c)/v+(o<c?6:0);break;case o:d=(c-s)/v+2;break;case c:d=(s-o)/v+4;break}d/=6}return t.h=d,t.s=p,t.l=g,t}getRGB(t,e=Re.workingColorSpace){return Re.fromWorkingColorSpace(Gn.copy(this),e),t.r=Gn.r,t.g=Gn.g,t.b=Gn.b,t}getStyle(t=Pn){Re.fromWorkingColorSpace(Gn.copy(this),t);const e=Gn.r,s=Gn.g,o=Gn.b;return t!==Pn?`color(${t} ${e.toFixed(3)} ${s.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(s*255)},${Math.round(o*255)})`}offsetHSL(t,e,s){return this.getHSL(gs),this.setHSL(gs.h+t,gs.s+e,gs.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,s){return this.r=t.r+(e.r-t.r)*s,this.g=t.g+(e.g-t.g)*s,this.b=t.b+(e.b-t.b)*s,this}lerpHSL(t,e){this.getHSL(gs),t.getHSL(Mu);const s=Hl(gs.h,Mu.h,e),o=Hl(gs.s,Mu.s,e),c=Hl(gs.l,Mu.l,e);return this.setHSL(s,o,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,s=this.g,o=this.b,c=t.elements;return this.r=c[0]*e+c[3]*s+c[6]*o,this.g=c[1]*e+c[4]*s+c[7]*o,this.b=c[2]*e+c[5]*s+c[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gn=new oe;oe.NAMES=RS;let UA=0;class Zi extends hr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:UA++}),this.uuid=Ii(),this.name="",this.type="Material",this.blending=ho,this.side=Oa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mp,this.blendDst=Ep,this.blendEquation=ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new oe(0,0,0),this.blendAlpha=0,this.depthFunc=_o,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ay,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jr,this.stencilZFail=jr,this.stencilZPass=jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const s=t[e];if(s===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const o=this[e];if(o===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(s):o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[e]=s}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==ho&&(s.blending=this.blending),this.side!==Oa&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Mp&&(s.blendSrc=this.blendSrc),this.blendDst!==Ep&&(s.blendDst=this.blendDst),this.blendEquation!==ir&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==_o&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ay&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==jr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==jr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==jr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(c){const f=[];for(const h in c){const d=c[h];delete d.metadata,f.push(d)}return f}if(e){const c=o(t.textures),f=o(t.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let s=null;if(e!==null){const o=e.length;s=new Array(o);for(let c=0;c!==o;++c)s[c]=e[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class sr extends Zi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.combine=cS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const mn=new W,Eu=new se;let OA=0;class qn{constructor(t,e,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:OA++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=s,this.usage=om,this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,s){t*=this.itemSize,s*=e.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[t+o]=e.array[s+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,s=this.count;e<s;e++)Eu.fromBufferAttribute(this,e),Eu.applyMatrix3(t),this.setXY(e,Eu.x,Eu.y);else if(this.itemSize===3)for(let e=0,s=this.count;e<s;e++)mn.fromBufferAttribute(this,e),mn.applyMatrix3(t),this.setXYZ(e,mn.x,mn.y,mn.z);return this}applyMatrix4(t){for(let e=0,s=this.count;e<s;e++)mn.fromBufferAttribute(this,e),mn.applyMatrix4(t),this.setXYZ(e,mn.x,mn.y,mn.z);return this}applyNormalMatrix(t){for(let e=0,s=this.count;e<s;e++)mn.fromBufferAttribute(this,e),mn.applyNormalMatrix(t),this.setXYZ(e,mn.x,mn.y,mn.z);return this}transformDirection(t){for(let e=0,s=this.count;e<s;e++)mn.fromBufferAttribute(this,e),mn.transformDirection(t),this.setXYZ(e,mn.x,mn.y,mn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let s=this.array[t*this.itemSize+e];return this.normalized&&(s=Ui(s,this.array)),s}setComponent(t,e,s){return this.normalized&&(s=Be(s,this.array)),this.array[t*this.itemSize+e]=s,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ui(e,this.array)),e}setX(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ui(e,this.array)),e}setY(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ui(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ui(e,this.array)),e}setW(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,s){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),s=Be(s,this.array)),this.array[t+0]=e,this.array[t+1]=s,this}setXYZ(t,e,s,o){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),s=Be(s,this.array),o=Be(o,this.array)),this.array[t+0]=e,this.array[t+1]=s,this.array[t+2]=o,this}setXYZW(t,e,s,o,c){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),s=Be(s,this.array),o=Be(o,this.array),c=Be(c,this.array)),this.array[t+0]=e,this.array[t+1]=s,this.array[t+2]=o,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==om&&(t.usage=this.usage),t}}class CS extends qn{constructor(t,e,s){super(new Uint16Array(t),e,s)}}class DS extends qn{constructor(t,e,s){super(new Uint32Array(t),e,s)}}class Ua extends qn{constructor(t,e,s){super(new Float32Array(t),e,s)}}let PA=0;const Ei=new ue,Kd=new sn,eo=new W,di=new za,Cl=new za,Rn=new W;class ta extends hr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:PA++}),this.uuid=Ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(TS(t)?DS:CS)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,s=0){this.groups.push({start:t,count:e,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ce().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ei.makeRotationFromQuaternion(t),this.applyMatrix4(Ei),this}rotateX(t){return Ei.makeRotationX(t),this.applyMatrix4(Ei),this}rotateY(t){return Ei.makeRotationY(t),this.applyMatrix4(Ei),this}rotateZ(t){return Ei.makeRotationZ(t),this.applyMatrix4(Ei),this}translate(t,e,s){return Ei.makeTranslation(t,e,s),this.applyMatrix4(Ei),this}scale(t,e,s){return Ei.makeScale(t,e,s),this.applyMatrix4(Ei),this}lookAt(t){return Kd.lookAt(t),Kd.updateMatrix(),this.applyMatrix4(Kd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(eo).negate(),this.translate(eo.x,eo.y,eo.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const s=[];for(let o=0,c=t.length;o<c;o++){const f=t[o];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Ua(s,3))}else{const s=Math.min(t.length,e.count);for(let o=0;o<s;o++){const c=t[o];e.setXYZ(o,c.x,c.y,c.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new za);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const c=e[s];di.setFromBufferAttribute(c),this.morphTargetsRelative?(Rn.addVectors(this.boundingBox.min,di.min),this.boundingBox.expandByPoint(Rn),Rn.addVectors(this.boundingBox.max,di.max),this.boundingBox.expandByPoint(Rn)):(this.boundingBox.expandByPoint(di.min),this.boundingBox.expandByPoint(di.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $i);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(t){const s=this.boundingSphere.center;if(di.setFromBufferAttribute(t),e)for(let c=0,f=e.length;c<f;c++){const h=e[c];Cl.setFromBufferAttribute(h),this.morphTargetsRelative?(Rn.addVectors(di.min,Cl.min),di.expandByPoint(Rn),Rn.addVectors(di.max,Cl.max),di.expandByPoint(Rn)):(di.expandByPoint(Cl.min),di.expandByPoint(Cl.max))}di.getCenter(s);let o=0;for(let c=0,f=t.count;c<f;c++)Rn.fromBufferAttribute(t,c),o=Math.max(o,s.distanceToSquared(Rn));if(e)for(let c=0,f=e.length;c<f;c++){const h=e[c],d=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)Rn.fromBufferAttribute(h,p),d&&(eo.fromBufferAttribute(t,p),Rn.add(eo)),o=Math.max(o,s.distanceToSquared(Rn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=e.position,o=e.normal,c=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qn(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),h=[],d=[];for(let X=0;X<s.count;X++)h[X]=new W,d[X]=new W;const p=new W,g=new W,v=new W,y=new se,S=new se,M=new se,T=new W,b=new W;function x(X,U,D){p.fromBufferAttribute(s,X),g.fromBufferAttribute(s,U),v.fromBufferAttribute(s,D),y.fromBufferAttribute(c,X),S.fromBufferAttribute(c,U),M.fromBufferAttribute(c,D),g.sub(p),v.sub(p),S.sub(y),M.sub(y);const k=1/(S.x*M.y-M.x*S.y);isFinite(k)&&(T.copy(g).multiplyScalar(M.y).addScaledVector(v,-S.y).multiplyScalar(k),b.copy(v).multiplyScalar(S.x).addScaledVector(g,-M.x).multiplyScalar(k),h[X].add(T),h[U].add(T),h[D].add(T),d[X].add(b),d[U].add(b),d[D].add(b))}let N=this.groups;N.length===0&&(N=[{start:0,count:t.count}]);for(let X=0,U=N.length;X<U;++X){const D=N[X],k=D.start,ct=D.count;for(let rt=k,mt=k+ct;rt<mt;rt+=3)x(t.getX(rt+0),t.getX(rt+1),t.getX(rt+2))}const L=new W,w=new W,I=new W,H=new W;function B(X){I.fromBufferAttribute(o,X),H.copy(I);const U=h[X];L.copy(U),L.sub(I.multiplyScalar(I.dot(U))).normalize(),w.crossVectors(H,U);const k=w.dot(d[X])<0?-1:1;f.setXYZW(X,L.x,L.y,L.z,k)}for(let X=0,U=N.length;X<U;++X){const D=N[X],k=D.start,ct=D.count;for(let rt=k,mt=k+ct;rt<mt;rt+=3)B(t.getX(rt+0)),B(t.getX(rt+1)),B(t.getX(rt+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new qn(new Float32Array(e.count*3),3),this.setAttribute("normal",s);else for(let y=0,S=s.count;y<S;y++)s.setXYZ(y,0,0,0);const o=new W,c=new W,f=new W,h=new W,d=new W,p=new W,g=new W,v=new W;if(t)for(let y=0,S=t.count;y<S;y+=3){const M=t.getX(y+0),T=t.getX(y+1),b=t.getX(y+2);o.fromBufferAttribute(e,M),c.fromBufferAttribute(e,T),f.fromBufferAttribute(e,b),g.subVectors(f,c),v.subVectors(o,c),g.cross(v),h.fromBufferAttribute(s,M),d.fromBufferAttribute(s,T),p.fromBufferAttribute(s,b),h.add(g),d.add(g),p.add(g),s.setXYZ(M,h.x,h.y,h.z),s.setXYZ(T,d.x,d.y,d.z),s.setXYZ(b,p.x,p.y,p.z)}else for(let y=0,S=e.count;y<S;y+=3)o.fromBufferAttribute(e,y+0),c.fromBufferAttribute(e,y+1),f.fromBufferAttribute(e,y+2),g.subVectors(f,c),v.subVectors(o,c),g.cross(v),s.setXYZ(y+0,g.x,g.y,g.z),s.setXYZ(y+1,g.x,g.y,g.z),s.setXYZ(y+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,s=t.count;e<s;e++)Rn.fromBufferAttribute(t,e),Rn.normalize(),t.setXYZ(e,Rn.x,Rn.y,Rn.z)}toNonIndexed(){function t(h,d){const p=h.array,g=h.itemSize,v=h.normalized,y=new p.constructor(d.length*g);let S=0,M=0;for(let T=0,b=d.length;T<b;T++){h.isInterleavedBufferAttribute?S=d[T]*h.data.stride+h.offset:S=d[T]*g;for(let x=0;x<g;x++)y[M++]=p[S++]}return new qn(y,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ta,s=this.index.array,o=this.attributes;for(const h in o){const d=o[h],p=t(d,s);e.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const d=[],p=c[h];for(let g=0,v=p.length;g<v;g++){const y=p[g],S=t(y,s);d.push(S)}e.morphAttributes[h]=d}e.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,d=f.length;h<d;h++){const p=f[h];e.addGroup(p.start,p.count,p.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const p in d)d[p]!==void 0&&(t[p]=d[p]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const s=this.attributes;for(const d in s){const p=s[d];t.data.attributes[d]=p.toJSON(t.data)}const o={};let c=!1;for(const d in this.morphAttributes){const p=this.morphAttributes[d],g=[];for(let v=0,y=p.length;v<y;v++){const S=p[v];g.push(S.toJSON(t.data))}g.length>0&&(o[d]=g,c=!0)}c&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const o=t.attributes;for(const p in o){const g=o[p];this.setAttribute(p,g.clone(e))}const c=t.morphAttributes;for(const p in c){const g=[],v=c[p];for(let y=0,S=v.length;y<S;y++)g.push(v[y].clone(e));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,g=f.length;p<g;p++){const v=f[p];this.addGroup(v.start,v.count,v.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const d=t.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yy=new ue,Qs=new ec,Tu=new $i,xy=new W,Au=new W,wu=new W,Ru=new W,Zd=new W,Cu=new W,Sy=new W,Du=new W;class mi extends sn{constructor(t=new ta,e=new sr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,s=Object.keys(e);if(s.length>0){const o=e[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=o.length;c<f;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,e){const s=this.geometry,o=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;e.fromBufferAttribute(o,t);const h=this.morphTargetInfluences;if(c&&h){Cu.set(0,0,0);for(let d=0,p=c.length;d<p;d++){const g=h[d],v=c[d];g!==0&&(Zd.fromBufferAttribute(v,t),f?Cu.addScaledVector(Zd,g):Cu.addScaledVector(Zd.sub(e),g))}e.add(Cu)}return e}raycast(t,e){const s=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Tu.copy(s.boundingSphere),Tu.applyMatrix4(c),Qs.copy(t.ray).recast(t.near),!(Tu.containsPoint(Qs.origin)===!1&&(Qs.intersectSphere(Tu,xy)===null||Qs.origin.distanceToSquared(xy)>(t.far-t.near)**2))&&(yy.copy(c).invert(),Qs.copy(t.ray).applyMatrix4(yy),!(s.boundingBox!==null&&Qs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,e,Qs)))}_computeIntersections(t,e,s){let o;const c=this.geometry,f=this.material,h=c.index,d=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,y=c.groups,S=c.drawRange;if(h!==null)if(Array.isArray(f))for(let M=0,T=y.length;M<T;M++){const b=y[M],x=f[b.materialIndex],N=Math.max(b.start,S.start),L=Math.min(h.count,Math.min(b.start+b.count,S.start+S.count));for(let w=N,I=L;w<I;w+=3){const H=h.getX(w),B=h.getX(w+1),X=h.getX(w+2);o=Nu(this,x,t,s,p,g,v,H,B,X),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=b.materialIndex,e.push(o))}}else{const M=Math.max(0,S.start),T=Math.min(h.count,S.start+S.count);for(let b=M,x=T;b<x;b+=3){const N=h.getX(b),L=h.getX(b+1),w=h.getX(b+2);o=Nu(this,f,t,s,p,g,v,N,L,w),o&&(o.faceIndex=Math.floor(b/3),e.push(o))}}else if(d!==void 0)if(Array.isArray(f))for(let M=0,T=y.length;M<T;M++){const b=y[M],x=f[b.materialIndex],N=Math.max(b.start,S.start),L=Math.min(d.count,Math.min(b.start+b.count,S.start+S.count));for(let w=N,I=L;w<I;w+=3){const H=w,B=w+1,X=w+2;o=Nu(this,x,t,s,p,g,v,H,B,X),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=b.materialIndex,e.push(o))}}else{const M=Math.max(0,S.start),T=Math.min(d.count,S.start+S.count);for(let b=M,x=T;b<x;b+=3){const N=b,L=b+1,w=b+2;o=Nu(this,f,t,s,p,g,v,N,L,w),o&&(o.faceIndex=Math.floor(b/3),e.push(o))}}}}function IA(r,t,e,s,o,c,f,h){let d;if(t.side===ii?d=s.intersectTriangle(f,c,o,!0,h):d=s.intersectTriangle(o,c,f,t.side===Oa,h),d===null)return null;Du.copy(h),Du.applyMatrix4(r.matrixWorld);const p=e.ray.origin.distanceTo(Du);return p<e.near||p>e.far?null:{distance:p,point:Du.clone(),object:r}}function Nu(r,t,e,s,o,c,f,h,d,p){r.getVertexPosition(h,Au),r.getVertexPosition(d,wu),r.getVertexPosition(p,Ru);const g=IA(r,t,e,s,Au,wu,Ru,Sy);if(g){const v=new W;Oi.getBarycoord(Sy,Au,wu,Ru,v),o&&(g.uv=Oi.getInterpolatedAttribute(o,h,d,p,v,new se)),c&&(g.uv1=Oi.getInterpolatedAttribute(c,h,d,p,v,new se)),f&&(g.normal=Oi.getInterpolatedAttribute(f,h,d,p,v,new W),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const y={a:h,b:d,c:p,normal:new W,materialIndex:0};Oi.getNormal(Au,wu,Ru,y.normal),g.face=y,g.barycoord=v}return g}class nc extends ta{constructor(t=1,e=1,s=1,o=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:s,widthSegments:o,heightSegments:c,depthSegments:f};const h=this;o=Math.floor(o),c=Math.floor(c),f=Math.floor(f);const d=[],p=[],g=[],v=[];let y=0,S=0;M("z","y","x",-1,-1,s,e,t,f,c,0),M("z","y","x",1,-1,s,e,-t,f,c,1),M("x","z","y",1,1,t,s,e,o,f,2),M("x","z","y",1,-1,t,s,-e,o,f,3),M("x","y","z",1,-1,t,e,s,o,c,4),M("x","y","z",-1,-1,t,e,-s,o,c,5),this.setIndex(d),this.setAttribute("position",new Ua(p,3)),this.setAttribute("normal",new Ua(g,3)),this.setAttribute("uv",new Ua(v,2));function M(T,b,x,N,L,w,I,H,B,X,U){const D=w/B,k=I/X,ct=w/2,rt=I/2,mt=H/2,ft=B+1,z=X+1;let Z=0,q=0;const St=new W;for(let O=0;O<z;O++){const et=O*k-rt;for(let xt=0;xt<ft;xt++){const Mt=xt*D-ct;St[T]=Mt*N,St[b]=et*L,St[x]=mt,p.push(St.x,St.y,St.z),St[T]=0,St[b]=0,St[x]=H>0?1:-1,g.push(St.x,St.y,St.z),v.push(xt/B),v.push(1-O/X),Z+=1}}for(let O=0;O<X;O++)for(let et=0;et<B;et++){const xt=y+et+ft*O,Mt=y+et+ft*(O+1),$=y+(et+1)+ft*(O+1),gt=y+(et+1)+ft*O;d.push(xt,Mt,gt),d.push(Mt,$,gt),q+=6}h.addGroup(S,q,U),S+=q,y+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nc(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function bo(r){const t={};for(const e in r){t[e]={};for(const s in r[e]){const o=r[e][s];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][s]=null):t[e][s]=o.clone():Array.isArray(o)?t[e][s]=o.slice():t[e][s]=o}}return t}function jn(r){const t={};for(let e=0;e<r.length;e++){const s=bo(r[e]);for(const o in s)t[o]=s[o]}return t}function BA(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function NS(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Re.workingColorSpace}const zA={clone:bo,merge:jn};var FA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,HA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class As extends Zi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=FA,this.fragmentShader=HA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=bo(t.uniforms),this.uniformsGroups=BA(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const o in this.uniforms){const f=this.uniforms[o].value;f&&f.isTexture?e.uniforms[o]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?e.uniforms[o]={type:"c",value:f.getHex()}:f&&f.isVector2?e.uniforms[o]={type:"v2",value:f.toArray()}:f&&f.isVector3?e.uniforms[o]={type:"v3",value:f.toArray()}:f&&f.isVector4?e.uniforms[o]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?e.uniforms[o]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?e.uniforms[o]={type:"m4",value:f.toArray()}:e.uniforms[o]={value:f}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const s={};for(const o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(e.extensions=s),e}}class LS extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=Da}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _s=new W,by=new se,My=new se;class Wn extends LS{constructor(t=50,e=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=So*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Fl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return So*2*Math.atan(Math.tan(Fl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,s){_s.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(_s.x,_s.y).multiplyScalar(-t/_s.z),_s.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(_s.x,_s.y).multiplyScalar(-t/_s.z)}getViewSize(t,e){return this.getViewBounds(t,by,My),e.subVectors(My,by)}setViewOffset(t,e,s,o,c,f){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=s,this.view.offsetY=o,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Fl*.5*this.fov)/this.zoom,s=2*e,o=this.aspect*s,c=-.5*o;const f=this.view;if(this.view!==null&&this.view.enabled){const d=f.fullWidth,p=f.fullHeight;c+=f.offsetX*o/d,e-=f.offsetY*s/p,o*=f.width/d,s*=f.height/p}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,e,e-s,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const no=-90,io=1;class GA extends sn{constructor(t,e,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Wn(no,io,t,e);o.layers=this.layers,this.add(o);const c=new Wn(no,io,t,e);c.layers=this.layers,this.add(c);const f=new Wn(no,io,t,e);f.layers=this.layers,this.add(f);const h=new Wn(no,io,t,e);h.layers=this.layers,this.add(h);const d=new Wn(no,io,t,e);d.layers=this.layers,this.add(d);const p=new Wn(no,io,t,e);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[s,o,c,f,h,d]=e;for(const p of e)this.remove(p);if(t===Da)s.up.set(0,1,0),s.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(t===lf)s.up.set(0,-1,0),s.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of e)this.add(p),p.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,d,p,g]=this.children,v=t.getRenderTarget(),y=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,o),t.render(e,c),t.setRenderTarget(s,1,o),t.render(e,f),t.setRenderTarget(s,2,o),t.render(e,h),t.setRenderTarget(s,3,o),t.render(e,d),t.setRenderTarget(s,4,o),t.render(e,p),s.texture.generateMipmaps=T,t.setRenderTarget(s,5,o),t.render(e,g),t.setRenderTarget(v,y,S),t.xr.enabled=M,s.texture.needsPMREMUpdate=!0}}class US extends Cn{constructor(t=[],e=vo,s,o,c,f,h,d,p,g){super(t,e,s,o,c,f,h,d,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class kA extends cr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},o=[s,s,s,s,s,s];this.texture=new US(o,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:pi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new nc(5,5,5),c=new As({name:"CubemapFromEquirect",uniforms:bo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:ii,blending:Es});c.uniforms.tEquirect.value=e;const f=new mi(o,c),h=e.minFilter;return e.minFilter===Ca&&(e.minFilter=pi),new GA(1,10,this).update(t,f),e.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(t,e=!0,s=!0,o=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(e,s,o);t.setRenderTarget(c)}}class rr extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const VA={type:"move"};class Qd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const s of t.hand.values())this._getHandJoint(e,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,s){let o=null,c=null,f=null;const h=this._targetRay,d=this._grip,p=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const T of t.hand.values()){const b=e.getJointPose(T,s),x=this._getHandJoint(p,T);b!==null&&(x.matrix.fromArray(b.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=b.radius),x.visible=b!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],y=g.position.distanceTo(v.position),S=.02,M=.005;p.inputState.pinching&&y>S+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&y<=S-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else d!==null&&t.gripSpace&&(c=e.getPose(t.gripSpace,s),c!==null&&(d.matrix.fromArray(c.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,c.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(c.linearVelocity)):d.hasLinearVelocity=!1,c.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(c.angularVelocity)):d.hasAngularVelocity=!1));h!==null&&(o=e.getPose(t.targetRaySpace,s),o===null&&c!==null&&(o=c),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(VA)))}return h!==null&&(h.visible=o!==null),d!==null&&(d.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const s=new rr;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[e.jointName]=s,t.add(s)}return t.joints[e.jointName]}}class XA extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ji,this.environmentIntensity=1,this.environmentRotation=new Ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class jA{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=om,this.updateRanges=[],this.version=0,this.uuid=Ii()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,s){t*=this.stride,s*=e.stride;for(let o=0,c=this.stride;o<c;o++)this.array[t+o]=e.array[s+o];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(e,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Xn=new W;class Vm{constructor(t,e,s,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=s,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,s=this.data.count;e<s;e++)Xn.fromBufferAttribute(this,e),Xn.applyMatrix4(t),this.setXYZ(e,Xn.x,Xn.y,Xn.z);return this}applyNormalMatrix(t){for(let e=0,s=this.count;e<s;e++)Xn.fromBufferAttribute(this,e),Xn.applyNormalMatrix(t),this.setXYZ(e,Xn.x,Xn.y,Xn.z);return this}transformDirection(t){for(let e=0,s=this.count;e<s;e++)Xn.fromBufferAttribute(this,e),Xn.transformDirection(t),this.setXYZ(e,Xn.x,Xn.y,Xn.z);return this}getComponent(t,e){let s=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(s=Ui(s,this.array)),s}setComponent(t,e,s){return this.normalized&&(s=Be(s,this.array)),this.data.array[t*this.data.stride+this.offset+e]=s,this}setX(t,e){return this.normalized&&(e=Be(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Be(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Be(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Be(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Ui(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Ui(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Ui(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Ui(e,this.array)),e}setXY(t,e,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Be(e,this.array),s=Be(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=s,this}setXYZ(t,e,s,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=Be(e,this.array),s=Be(s,this.array),o=Be(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=s,this.data.array[t+2]=o,this}setXYZW(t,e,s,o,c){return t=t*this.data.stride+this.offset,this.normalized&&(e=Be(e,this.array),s=Be(s,this.array),o=Be(o,this.array),c=Be(c,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=s,this.data.array[t+2]=o,this.data.array[t+3]=c,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let s=0;s<this.count;s++){const o=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)e.push(this.data.array[o+c])}return new qn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Vm(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let s=0;s<this.count;s++){const o=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)e.push(this.data.array[o+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Ey=new W,Ty=new Oe,Ay=new Oe,WA=new W,wy=new ue,Lu=new W,Jd=new $i,Ry=new ue,$d=new ec;class YA extends mi{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ty,this.bindMatrix=new ue,this.bindMatrixInverse=new ue,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new za),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let s=0;s<e.count;s++)this.getVertexPosition(s,Lu),this.boundingBox.expandByPoint(Lu)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new $i),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let s=0;s<e.count;s++)this.getVertexPosition(s,Lu),this.boundingSphere.expandByPoint(Lu)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const s=this.material,o=this.matrixWorld;s!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Jd.copy(this.boundingSphere),Jd.applyMatrix4(o),t.ray.intersectsSphere(Jd)!==!1&&(Ry.copy(o).invert(),$d.copy(t.ray).applyMatrix4(Ry),!(this.boundingBox!==null&&$d.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,$d)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Oe,e=this.geometry.attributes.skinWeight;for(let s=0,o=e.count;s<o;s++){t.fromBufferAttribute(e,s);const c=1/t.manhattanLength();c!==1/0?t.multiplyScalar(c):t.set(1,0,0,0),e.setXYZW(s,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===ty?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===GT?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const s=this.skeleton,o=this.geometry;Ty.fromBufferAttribute(o.attributes.skinIndex,t),Ay.fromBufferAttribute(o.attributes.skinWeight,t),Ey.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let c=0;c<4;c++){const f=Ay.getComponent(c);if(f!==0){const h=Ty.getComponent(c);wy.multiplyMatrices(s.bones[h].matrixWorld,s.boneInverses[h]),e.addScaledVector(WA.copy(Ey).applyMatrix4(wy),f)}}return e.applyMatrix4(this.bindMatrixInverse)}}class OS extends sn{constructor(){super(),this.isBone=!0,this.type="Bone"}}class PS extends Cn{constructor(t=null,e=1,s=1,o,c,f,h,d,p=Yn,g=Yn,v,y){super(null,f,h,d,p,g,o,c,v,y),this.isDataTexture=!0,this.image={data:t,width:e,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Cy=new ue,qA=new ue;class Xm{constructor(t=[],e=[]){this.uuid=Ii(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let s=0,o=this.bones.length;s<o;s++)this.boneInverses.push(new ue)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const s=new ue;this.bones[t]&&s.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(s)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const s=this.bones[t];s&&s.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const s=this.bones[t];s&&(s.parent&&s.parent.isBone?(s.matrix.copy(s.parent.matrixWorld).invert(),s.matrix.multiply(s.matrixWorld)):s.matrix.copy(s.matrixWorld),s.matrix.decompose(s.position,s.quaternion,s.scale))}}update(){const t=this.bones,e=this.boneInverses,s=this.boneMatrices,o=this.boneTexture;for(let c=0,f=t.length;c<f;c++){const h=t[c]?t[c].matrixWorld:qA;Cy.multiplyMatrices(h,e[c]),Cy.toArray(s,c*16)}o!==null&&(o.needsUpdate=!0)}clone(){return new Xm(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const s=new PS(e,t,t,Ai,Pi);return s.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=s,this}getBoneByName(t){for(let e=0,s=this.bones.length;e<s;e++){const o=this.bones[e];if(o.name===t)return o}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let s=0,o=t.bones.length;s<o;s++){const c=t.bones[s];let f=e[c];f===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",c),f=new OS),this.bones.push(f),this.boneInverses.push(new ue().fromArray(t.boneInverses[s]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,s=this.boneInverses;for(let o=0,c=e.length;o<c;o++){const f=e[o];t.bones.push(f.uuid);const h=s[o];t.boneInverses.push(h.toArray())}return t}}class lm extends qn{constructor(t,e,s,o=1){super(t,e,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ao=new ue,Dy=new ue,Uu=[],Ny=new za,KA=new ue,Dl=new mi,Nl=new $i;class ZA extends mi{constructor(t,e,s){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new lm(new Float32Array(s*16),16),this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let o=0;o<s;o++)this.setMatrixAt(o,KA)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new za),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<e;s++)this.getMatrixAt(s,ao),Ny.copy(t.boundingBox).applyMatrix4(ao),this.boundingBox.union(Ny)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new $i),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<e;s++)this.getMatrixAt(s,ao),Nl.copy(t.boundingSphere).applyMatrix4(ao),this.boundingSphere.union(Nl)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const s=e.morphTargetInfluences,o=this.morphTexture.source.data.data,c=s.length+1,f=t*c+1;for(let h=0;h<s.length;h++)s[h]=o[f+h]}raycast(t,e){const s=this.matrixWorld,o=this.count;if(Dl.geometry=this.geometry,Dl.material=this.material,Dl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Nl.copy(this.boundingSphere),Nl.applyMatrix4(s),t.ray.intersectsSphere(Nl)!==!1))for(let c=0;c<o;c++){this.getMatrixAt(c,ao),Dy.multiplyMatrices(s,ao),Dl.matrixWorld=Dy,Dl.raycast(t,Uu);for(let f=0,h=Uu.length;f<h;f++){const d=Uu[f];d.instanceId=c,d.object=this,e.push(d)}Uu.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new lm(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const s=e.morphTargetInfluences,o=s.length+1;this.morphTexture===null&&(this.morphTexture=new PS(new Float32Array(o*this.count),o,this.count,Bm,Pi));const c=this.morphTexture.source.data.data;let f=0;for(let p=0;p<s.length;p++)f+=s[p];const h=this.geometry.morphTargetsRelative?1:1-f,d=o*t;c[d]=h,c.set(s,d+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const tp=new W,QA=new W,JA=new ce;class xs{constructor(t=new W(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,s,o){return this.normal.set(t,e,s),this.constant=o,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,s){const o=tp.subVectors(s,e).cross(QA.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const s=t.delta(tp),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:e.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const e=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return e<0&&s>0||s<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const s=e||JA.getNormalMatrix(t),o=this.coplanarPoint(tp).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Js=new $i,Ou=new W;class jm{constructor(t=new xs,e=new xs,s=new xs,o=new xs,c=new xs,f=new xs){this.planes=[t,e,s,o,c,f]}set(t,e,s,o,c,f){const h=this.planes;return h[0].copy(t),h[1].copy(e),h[2].copy(s),h[3].copy(o),h[4].copy(c),h[5].copy(f),this}copy(t){const e=this.planes;for(let s=0;s<6;s++)e[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,e=Da){const s=this.planes,o=t.elements,c=o[0],f=o[1],h=o[2],d=o[3],p=o[4],g=o[5],v=o[6],y=o[7],S=o[8],M=o[9],T=o[10],b=o[11],x=o[12],N=o[13],L=o[14],w=o[15];if(s[0].setComponents(d-c,y-p,b-S,w-x).normalize(),s[1].setComponents(d+c,y+p,b+S,w+x).normalize(),s[2].setComponents(d+f,y+g,b+M,w+N).normalize(),s[3].setComponents(d-f,y-g,b-M,w-N).normalize(),s[4].setComponents(d-h,y-v,b-T,w-L).normalize(),e===Da)s[5].setComponents(d+h,y+v,b+T,w+L).normalize();else if(e===lf)s[5].setComponents(h,v,T,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Js.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Js.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Js)}intersectsSprite(t){return Js.center.set(0,0,0),Js.radius=.7071067811865476,Js.applyMatrix4(t.matrixWorld),this.intersectsSphere(Js)}intersectsSphere(t){const e=this.planes,s=t.center,o=-t.radius;for(let c=0;c<6;c++)if(e[c].distanceToPoint(s)<o)return!1;return!0}intersectsBox(t){const e=this.planes;for(let s=0;s<6;s++){const o=e[s];if(Ou.x=o.normal.x>0?t.max.x:t.min.x,Ou.y=o.normal.y>0?t.max.y:t.min.y,Ou.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(Ou)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let s=0;s<6;s++)if(e[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class IS extends Zi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const cf=new W,uf=new W,Ly=new ue,Ll=new ec,Pu=new $i,ep=new W,Uy=new W;class Wm extends sn{constructor(t=new ta,e=new IS){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,s=[0];for(let o=1,c=e.count;o<c;o++)cf.fromBufferAttribute(e,o-1),uf.fromBufferAttribute(e,o),s[o]=s[o-1],s[o]+=cf.distanceTo(uf);t.setAttribute("lineDistance",new Ua(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const s=this.geometry,o=this.matrixWorld,c=t.params.Line.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Pu.copy(s.boundingSphere),Pu.applyMatrix4(o),Pu.radius+=c,t.ray.intersectsSphere(Pu)===!1)return;Ly.copy(o).invert(),Ll.copy(t.ray).applyMatrix4(Ly);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),d=h*h,p=this.isLineSegments?2:1,g=s.index,y=s.attributes.position;if(g!==null){const S=Math.max(0,f.start),M=Math.min(g.count,f.start+f.count);for(let T=S,b=M-1;T<b;T+=p){const x=g.getX(T),N=g.getX(T+1),L=Iu(this,t,Ll,d,x,N,T);L&&e.push(L)}if(this.isLineLoop){const T=g.getX(M-1),b=g.getX(S),x=Iu(this,t,Ll,d,T,b,M-1);x&&e.push(x)}}else{const S=Math.max(0,f.start),M=Math.min(y.count,f.start+f.count);for(let T=S,b=M-1;T<b;T+=p){const x=Iu(this,t,Ll,d,T,T+1,T);x&&e.push(x)}if(this.isLineLoop){const T=Iu(this,t,Ll,d,M-1,S,M-1);T&&e.push(T)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,s=Object.keys(e);if(s.length>0){const o=e[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=o.length;c<f;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Iu(r,t,e,s,o,c,f){const h=r.geometry.attributes.position;if(cf.fromBufferAttribute(h,o),uf.fromBufferAttribute(h,c),e.distanceSqToSegment(cf,uf,ep,Uy)>s)return;ep.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(ep);if(!(p<t.near||p>t.far))return{distance:p,point:Uy.clone().applyMatrix4(r.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:r}}const Oy=new W,Py=new W;class $A extends Wm{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,s=[];for(let o=0,c=e.count;o<c;o+=2)Oy.fromBufferAttribute(e,o),Py.fromBufferAttribute(e,o+1),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+Oy.distanceTo(Py);t.setAttribute("lineDistance",new Ua(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class t1 extends Wm{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class BS extends Zi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Iy=new ue,cm=new ec,Bu=new $i,zu=new W;class e1 extends sn{constructor(t=new ta,e=new BS){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const s=this.geometry,o=this.matrixWorld,c=t.params.Points.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Bu.copy(s.boundingSphere),Bu.applyMatrix4(o),Bu.radius+=c,t.ray.intersectsSphere(Bu)===!1)return;Iy.copy(o).invert(),cm.copy(t.ray).applyMatrix4(Iy);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),d=h*h,p=s.index,v=s.attributes.position;if(p!==null){const y=Math.max(0,f.start),S=Math.min(p.count,f.start+f.count);for(let M=y,T=S;M<T;M++){const b=p.getX(M);zu.fromBufferAttribute(v,b),By(zu,b,d,o,t,e,this)}}else{const y=Math.max(0,f.start),S=Math.min(v.count,f.start+f.count);for(let M=y,T=S;M<T;M++)zu.fromBufferAttribute(v,M),By(zu,M,d,o,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,s=Object.keys(e);if(s.length>0){const o=e[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=o.length;c<f;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function By(r,t,e,s,o,c,f){const h=cm.distanceSqToPoint(r);if(h<e){const d=new W;cm.closestPointToPoint(r,d),d.applyMatrix4(s);const p=o.ray.origin.distanceTo(d);if(p<o.near||p>o.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:d,index:t,face:null,faceIndex:null,barycoord:null,object:f})}}class zS extends Cn{constructor(t,e,s=lr,o,c,f,h=Yn,d=Yn,p,g=Yl){if(g!==Yl&&g!==ql)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,o,c,f,h,d,g,s,p),this.isDepthTexture=!0,this.image={width:t,height:e},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new km(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class gf extends ta{constructor(t=1,e=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:s,heightSegments:o};const c=t/2,f=e/2,h=Math.floor(s),d=Math.floor(o),p=h+1,g=d+1,v=t/h,y=e/d,S=[],M=[],T=[],b=[];for(let x=0;x<g;x++){const N=x*y-f;for(let L=0;L<p;L++){const w=L*v-c;M.push(w,-N,0),T.push(0,0,1),b.push(L/h),b.push(1-x/d)}}for(let x=0;x<d;x++)for(let N=0;N<h;N++){const L=N+p*x,w=N+p*(x+1),I=N+1+p*(x+1),H=N+1+p*x;S.push(L,w,H),S.push(w,I,H)}this.setIndex(S),this.setAttribute("position",new Ua(M,3)),this.setAttribute("normal",new Ua(T,3)),this.setAttribute("uv",new Ua(b,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gf(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ym extends Zi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bS,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ea extends Ym{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return me(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new oe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new oe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new oe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class n1 extends Zi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=XT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class i1 extends Zi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function Fu(r,t){return!r||r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function a1(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function s1(r){function t(o,c){return r[o]-r[c]}const e=r.length,s=new Array(e);for(let o=0;o!==e;++o)s[o]=o;return s.sort(t),s}function zy(r,t,e){const s=r.length,o=new r.constructor(s);for(let c=0,f=0;f!==s;++c){const h=e[c]*t;for(let d=0;d!==t;++d)o[f++]=r[h+d]}return o}function FS(r,t,e,s){let o=1,c=r[0];for(;c!==void 0&&c[s]===void 0;)c=r[o++];if(c===void 0)return;let f=c[s];if(f!==void 0)if(Array.isArray(f))do f=c[s],f!==void 0&&(t.push(c.time),e.push(...f)),c=r[o++];while(c!==void 0);else if(f.toArray!==void 0)do f=c[s],f!==void 0&&(t.push(c.time),f.toArray(e,e.length)),c=r[o++];while(c!==void 0);else do f=c[s],f!==void 0&&(t.push(c.time),e.push(f)),c=r[o++];while(c!==void 0)}class ic{constructor(t,e,s,o){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=o!==void 0?o:new e.constructor(s),this.sampleValues=e,this.valueSize=s,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let s=this._cachedIndex,o=e[s],c=e[s-1];t:{e:{let f;n:{i:if(!(t<o)){for(let h=s+2;;){if(o===void 0){if(t<c)break i;return s=e.length,this._cachedIndex=s,this.copySampleValue_(s-1)}if(s===h)break;if(c=o,o=e[++s],t<o)break e}f=e.length;break n}if(!(t>=c)){const h=e[1];t<h&&(s=2,c=h);for(let d=s-2;;){if(c===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===d)break;if(o=c,c=e[--s-1],t>=c)break e}f=s,s=0;break n}break t}for(;s<f;){const h=s+f>>>1;t<e[h]?f=h:s=h+1}if(o=e[s],c=e[s-1],c===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(o===void 0)return s=e.length,this._cachedIndex=s,this.copySampleValue_(s-1)}this._cachedIndex=s,this.intervalChanged_(s,c,o)}return this.interpolate_(s,c,t,o)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,s=this.sampleValues,o=this.valueSize,c=t*o;for(let f=0;f!==o;++f)e[f]=s[c+f];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class r1 extends ic{constructor(t,e,s,o){super(t,e,s,o),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ey,endingEnd:ey}}intervalChanged_(t,e,s){const o=this.parameterPositions;let c=t-2,f=t+1,h=o[c],d=o[f];if(h===void 0)switch(this.getSettings_().endingStart){case ny:c=t,h=2*e-s;break;case iy:c=o.length-2,h=e+o[c]-o[c+1];break;default:c=t,h=s}if(d===void 0)switch(this.getSettings_().endingEnd){case ny:f=t,d=2*s-e;break;case iy:f=1,d=s+o[1]-o[0];break;default:f=t-1,d=e}const p=(s-e)*.5,g=this.valueSize;this._weightPrev=p/(e-h),this._weightNext=p/(d-s),this._offsetPrev=c*g,this._offsetNext=f*g}interpolate_(t,e,s,o){const c=this.resultBuffer,f=this.sampleValues,h=this.valueSize,d=t*h,p=d-h,g=this._offsetPrev,v=this._offsetNext,y=this._weightPrev,S=this._weightNext,M=(s-e)/(o-e),T=M*M,b=T*M,x=-y*b+2*y*T-y*M,N=(1+y)*b+(-1.5-2*y)*T+(-.5+y)*M+1,L=(-1-S)*b+(1.5+S)*T+.5*M,w=S*b-S*T;for(let I=0;I!==h;++I)c[I]=x*f[g+I]+N*f[p+I]+L*f[d+I]+w*f[v+I];return c}}class o1 extends ic{constructor(t,e,s,o){super(t,e,s,o)}interpolate_(t,e,s,o){const c=this.resultBuffer,f=this.sampleValues,h=this.valueSize,d=t*h,p=d-h,g=(s-e)/(o-e),v=1-g;for(let y=0;y!==h;++y)c[y]=f[p+y]*v+f[d+y]*g;return c}}class l1 extends ic{constructor(t,e,s,o){super(t,e,s,o)}interpolate_(t){return this.copySampleValue_(t-1)}}class Bi{constructor(t,e,s,o){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Fu(e,this.TimeBufferType),this.values=Fu(s,this.ValueBufferType),this.setInterpolation(o||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let s;if(e.toJSON!==this.toJSON)s=e.toJSON(t);else{s={name:t.name,times:Fu(t.times,Array),values:Fu(t.values,Array)};const o=t.getInterpolation();o!==t.DefaultInterpolation&&(s.interpolation=o)}return s.type=t.ValueTypeName,s}InterpolantFactoryMethodDiscrete(t){return new l1(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new o1(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new r1(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Kl:e=this.InterpolantFactoryMethodDiscrete;break;case Zl:e=this.InterpolantFactoryMethodLinear;break;case Nd:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const s="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(s);return console.warn("THREE.KeyframeTrack:",s),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Kl;case this.InterpolantFactoryMethodLinear:return Zl;case this.InterpolantFactoryMethodSmooth:return Nd}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let s=0,o=e.length;s!==o;++s)e[s]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let s=0,o=e.length;s!==o;++s)e[s]*=t}return this}trim(t,e){const s=this.times,o=s.length;let c=0,f=o-1;for(;c!==o&&s[c]<t;)++c;for(;f!==-1&&s[f]>e;)--f;if(++f,c!==0||f!==o){c>=f&&(f=Math.max(f,1),c=f-1);const h=this.getValueSize();this.times=s.slice(c,f),this.values=this.values.slice(c*h,f*h)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const s=this.times,o=this.values,c=s.length;c===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let f=null;for(let h=0;h!==c;h++){const d=s[h];if(typeof d=="number"&&isNaN(d)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,h,d),t=!1;break}if(f!==null&&f>d){console.error("THREE.KeyframeTrack: Out of order keys.",this,h,d,f),t=!1;break}f=d}if(o!==void 0&&a1(o))for(let h=0,d=o.length;h!==d;++h){const p=o[h];if(isNaN(p)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,h,p),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),s=this.getValueSize(),o=this.getInterpolation()===Nd,c=t.length-1;let f=1;for(let h=1;h<c;++h){let d=!1;const p=t[h],g=t[h+1];if(p!==g&&(h!==1||p!==t[0]))if(o)d=!0;else{const v=h*s,y=v-s,S=v+s;for(let M=0;M!==s;++M){const T=e[v+M];if(T!==e[y+M]||T!==e[S+M]){d=!0;break}}}if(d){if(h!==f){t[f]=t[h];const v=h*s,y=f*s;for(let S=0;S!==s;++S)e[y+S]=e[v+S]}++f}}if(c>0){t[f]=t[c];for(let h=c*s,d=f*s,p=0;p!==s;++p)e[d+p]=e[h+p];++f}return f!==t.length?(this.times=t.slice(0,f),this.values=e.slice(0,f*s)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),s=this.constructor,o=new s(this.name,t,e);return o.createInterpolant=this.createInterpolant,o}}Bi.prototype.ValueTypeName="";Bi.prototype.TimeBufferType=Float32Array;Bi.prototype.ValueBufferType=Float32Array;Bi.prototype.DefaultInterpolation=Zl;class wo extends Bi{constructor(t,e,s){super(t,e,s)}}wo.prototype.ValueTypeName="bool";wo.prototype.ValueBufferType=Array;wo.prototype.DefaultInterpolation=Kl;wo.prototype.InterpolantFactoryMethodLinear=void 0;wo.prototype.InterpolantFactoryMethodSmooth=void 0;class HS extends Bi{constructor(t,e,s,o){super(t,e,s,o)}}HS.prototype.ValueTypeName="color";class Mo extends Bi{constructor(t,e,s,o){super(t,e,s,o)}}Mo.prototype.ValueTypeName="number";class c1 extends ic{constructor(t,e,s,o){super(t,e,s,o)}interpolate_(t,e,s,o){const c=this.resultBuffer,f=this.sampleValues,h=this.valueSize,d=(s-e)/(o-e);let p=t*h;for(let g=p+h;p!==g;p+=4)Qi.slerpFlat(c,0,f,p-h,f,p,d);return c}}class Eo extends Bi{constructor(t,e,s,o){super(t,e,s,o)}InterpolantFactoryMethodLinear(t){return new c1(this.times,this.values,this.getValueSize(),t)}}Eo.prototype.ValueTypeName="quaternion";Eo.prototype.InterpolantFactoryMethodSmooth=void 0;class Ro extends Bi{constructor(t,e,s){super(t,e,s)}}Ro.prototype.ValueTypeName="string";Ro.prototype.ValueBufferType=Array;Ro.prototype.DefaultInterpolation=Kl;Ro.prototype.InterpolantFactoryMethodLinear=void 0;Ro.prototype.InterpolantFactoryMethodSmooth=void 0;class To extends Bi{constructor(t,e,s,o){super(t,e,s,o)}}To.prototype.ValueTypeName="vector";class u1{constructor(t="",e=-1,s=[],o=kT){this.name=t,this.tracks=s,this.duration=e,this.blendMode=o,this.uuid=Ii(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],s=t.tracks,o=1/(t.fps||1);for(let f=0,h=s.length;f!==h;++f)e.push(h1(s[f]).scale(o));const c=new this(t.name,t.duration,e,t.blendMode);return c.uuid=t.uuid,c}static toJSON(t){const e=[],s=t.tracks,o={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let c=0,f=s.length;c!==f;++c)e.push(Bi.toJSON(s[c]));return o}static CreateFromMorphTargetSequence(t,e,s,o){const c=e.length,f=[];for(let h=0;h<c;h++){let d=[],p=[];d.push((h+c-1)%c,h,(h+1)%c),p.push(0,1,0);const g=s1(d);d=zy(d,1,g),p=zy(p,1,g),!o&&d[0]===0&&(d.push(c),p.push(p[0])),f.push(new Mo(".morphTargetInfluences["+e[h].name+"]",d,p).scale(1/s))}return new this(t,-1,f)}static findByName(t,e){let s=t;if(!Array.isArray(t)){const o=t;s=o.geometry&&o.geometry.animations||o.animations}for(let o=0;o<s.length;o++)if(s[o].name===e)return s[o];return null}static CreateClipsFromMorphTargetSequences(t,e,s){const o={},c=/^([\w-]*?)([\d]+)$/;for(let h=0,d=t.length;h<d;h++){const p=t[h],g=p.name.match(c);if(g&&g.length>1){const v=g[1];let y=o[v];y||(o[v]=y=[]),y.push(p)}}const f=[];for(const h in o)f.push(this.CreateFromMorphTargetSequence(h,o[h],e,s));return f}static parseAnimation(t,e){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const s=function(v,y,S,M,T){if(S.length!==0){const b=[],x=[];FS(S,b,x,M),b.length!==0&&T.push(new v(y,b,x))}},o=[],c=t.name||"default",f=t.fps||30,h=t.blendMode;let d=t.length||-1;const p=t.hierarchy||[];for(let v=0;v<p.length;v++){const y=p[v].keys;if(!(!y||y.length===0))if(y[0].morphTargets){const S={};let M;for(M=0;M<y.length;M++)if(y[M].morphTargets)for(let T=0;T<y[M].morphTargets.length;T++)S[y[M].morphTargets[T]]=-1;for(const T in S){const b=[],x=[];for(let N=0;N!==y[M].morphTargets.length;++N){const L=y[M];b.push(L.time),x.push(L.morphTarget===T?1:0)}o.push(new Mo(".morphTargetInfluence["+T+"]",b,x))}d=S.length*f}else{const S=".bones["+e[v].name+"]";s(To,S+".position",y,"pos",o),s(Eo,S+".quaternion",y,"rot",o),s(To,S+".scale",y,"scl",o)}}return o.length===0?null:new this(c,d,o,h)}resetDuration(){const t=this.tracks;let e=0;for(let s=0,o=t.length;s!==o;++s){const c=this.tracks[s];e=Math.max(e,c.times[c.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function f1(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Mo;case"vector":case"vector2":case"vector3":case"vector4":return To;case"color":return HS;case"quaternion":return Eo;case"bool":case"boolean":return wo;case"string":return Ro}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function h1(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=f1(r.type);if(r.times===void 0){const e=[],s=[];FS(r.keys,e,s,"value"),r.times=e,r.values=s}return t.parse!==void 0?t.parse(r):new t(r.name,r.times,r.values,r.interpolation)}const Ms={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class d1{constructor(t,e,s){const o=this;let c=!1,f=0,h=0,d;const p=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=s,this.itemStart=function(g){h++,c===!1&&o.onStart!==void 0&&o.onStart(g,f,h),c=!0},this.itemEnd=function(g){f++,o.onProgress!==void 0&&o.onProgress(g,f,h),f===h&&(c=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(g){o.onError!==void 0&&o.onError(g)},this.resolveURL=function(g){return d?d(g):g},this.setURLModifier=function(g){return d=g,this},this.addHandler=function(g,v){return p.push(g,v),this},this.removeHandler=function(g){const v=p.indexOf(g);return v!==-1&&p.splice(v,2),this},this.getHandler=function(g){for(let v=0,y=p.length;v<y;v+=2){const S=p[v],M=p[v+1];if(S.global&&(S.lastIndex=0),S.test(g))return M}return null}}}const p1=new d1;class Co{constructor(t){this.manager=t!==void 0?t:p1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const s=this;return new Promise(function(o,c){s.load(t,o,e,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Co.DEFAULT_MATERIAL_NAME="__DEFAULT";const Aa={};class m1 extends Error{constructor(t,e){super(t),this.response=e}}class GS extends Co{constructor(t){super(t),this.mimeType="",this.responseType=""}load(t,e,s,o){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=Ms.get(t);if(c!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(c),this.manager.itemEnd(t)},0),c;if(Aa[t]!==void 0){Aa[t].push({onLoad:e,onProgress:s,onError:o});return}Aa[t]=[],Aa[t].push({onLoad:e,onProgress:s,onError:o});const f=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),h=this.mimeType,d=this.responseType;fetch(f).then(p=>{if(p.status===200||p.status===0){if(p.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||p.body===void 0||p.body.getReader===void 0)return p;const g=Aa[t],v=p.body.getReader(),y=p.headers.get("X-File-Size")||p.headers.get("Content-Length"),S=y?parseInt(y):0,M=S!==0;let T=0;const b=new ReadableStream({start(x){N();function N(){v.read().then(({done:L,value:w})=>{if(L)x.close();else{T+=w.byteLength;const I=new ProgressEvent("progress",{lengthComputable:M,loaded:T,total:S});for(let H=0,B=g.length;H<B;H++){const X=g[H];X.onProgress&&X.onProgress(I)}x.enqueue(w),N()}},L=>{x.error(L)})}}});return new Response(b)}else throw new m1(`fetch for "${p.url}" responded with ${p.status}: ${p.statusText}`,p)}).then(p=>{switch(d){case"arraybuffer":return p.arrayBuffer();case"blob":return p.blob();case"document":return p.text().then(g=>new DOMParser().parseFromString(g,h));case"json":return p.json();default:if(h==="")return p.text();{const v=/charset="?([^;"\s]*)"?/i.exec(h),y=v&&v[1]?v[1].toLowerCase():void 0,S=new TextDecoder(y);return p.arrayBuffer().then(M=>S.decode(M))}}}).then(p=>{Ms.add(t,p);const g=Aa[t];delete Aa[t];for(let v=0,y=g.length;v<y;v++){const S=g[v];S.onLoad&&S.onLoad(p)}}).catch(p=>{const g=Aa[t];if(g===void 0)throw this.manager.itemError(t),p;delete Aa[t];for(let v=0,y=g.length;v<y;v++){const S=g[v];S.onError&&S.onError(p)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class g1 extends Co{constructor(t){super(t)}load(t,e,s,o){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=this,f=Ms.get(t);if(f!==void 0)return c.manager.itemStart(t),setTimeout(function(){e&&e(f),c.manager.itemEnd(t)},0),f;const h=Ql("img");function d(){g(),Ms.add(t,this),e&&e(this),c.manager.itemEnd(t)}function p(v){g(),o&&o(v),c.manager.itemError(t),c.manager.itemEnd(t)}function g(){h.removeEventListener("load",d,!1),h.removeEventListener("error",p,!1)}return h.addEventListener("load",d,!1),h.addEventListener("error",p,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),c.manager.itemStart(t),h.src=t,h}}class _1 extends Co{constructor(t){super(t)}load(t,e,s,o){const c=new Cn,f=new g1(this.manager);return f.setCrossOrigin(this.crossOrigin),f.setPath(this.path),f.load(t,function(h){c.image=h,c.needsUpdate=!0,e!==void 0&&e(c)},s,o),c}}class _f extends sn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new oe(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const np=new ue,Fy=new W,Hy=new W;class qm{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new se(512,512),this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jm,this._frameExtents=new se(1,1),this._viewportCount=1,this._viewports=[new Oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,s=this.matrix;Fy.setFromMatrixPosition(t.matrixWorld),e.position.copy(Fy),Hy.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Hy),e.updateMatrixWorld(),np.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(np),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(np)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class v1 extends qm{constructor(){super(new Wn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,s=So*2*t.angle*this.focus,o=this.mapSize.width/this.mapSize.height,c=t.distance||e.far;(s!==e.fov||o!==e.aspect||c!==e.far)&&(e.fov=s,e.aspect=o,e.far=c,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class kS extends _f{constructor(t,e,s=0,o=Math.PI/3,c=0,f=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.target=new sn,this.distance=s,this.angle=o,this.penumbra=c,this.decay=f,this.map=null,this.shadow=new v1}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Gy=new ue,Ul=new W,ip=new W;class y1 extends qm{constructor(){super(new Wn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new se(4,2),this._viewportCount=6,this._viewports=[new Oe(2,1,1,1),new Oe(0,1,1,1),new Oe(3,1,1,1),new Oe(1,1,1,1),new Oe(3,0,1,1),new Oe(1,0,1,1)],this._cubeDirections=[new W(1,0,0),new W(-1,0,0),new W(0,0,1),new W(0,0,-1),new W(0,1,0),new W(0,-1,0)],this._cubeUps=[new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,0,1),new W(0,0,-1)]}updateMatrices(t,e=0){const s=this.camera,o=this.matrix,c=t.distance||s.far;c!==s.far&&(s.far=c,s.updateProjectionMatrix()),Ul.setFromMatrixPosition(t.matrixWorld),s.position.copy(Ul),ip.copy(s.position),ip.add(this._cubeDirections[e]),s.up.copy(this._cubeUps[e]),s.lookAt(ip),s.updateMatrixWorld(),o.makeTranslation(-Ul.x,-Ul.y,-Ul.z),Gy.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gy)}}class VS extends _f{constructor(t,e,s=0,o=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=o,this.shadow=new y1}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Km extends LS{constructor(t=-1,e=1,s=1,o=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=s,this.bottom=o,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,s,o,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=s,this.view.offsetY=o,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=s-t,f=s+t,h=o+e,d=o-e;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=g*this.view.offsetY,d=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class x1 extends qm{constructor(){super(new Km(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class XS extends _f{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.target=new sn,this.shadow=new x1}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class S1 extends _f{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Gl{static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class b1 extends Co{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,s,o){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=this,f=Ms.get(t);if(f!==void 0){if(c.manager.itemStart(t),f.then){f.then(p=>{e&&e(p),c.manager.itemEnd(t)}).catch(p=>{o&&o(p)});return}return setTimeout(function(){e&&e(f),c.manager.itemEnd(t)},0),f}const h={};h.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",h.headers=this.requestHeader;const d=fetch(t,h).then(function(p){return p.blob()}).then(function(p){return createImageBitmap(p,Object.assign(c.options,{colorSpaceConversion:"none"}))}).then(function(p){return Ms.add(t,p),e&&e(p),c.manager.itemEnd(t),p}).catch(function(p){o&&o(p),Ms.remove(t),c.manager.itemError(t),c.manager.itemEnd(t)});Ms.add(t,d),c.manager.itemStart(t)}}class M1 extends Wn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}const Zm="\\[\\]\\.:\\/",E1=new RegExp("["+Zm+"]","g"),Qm="[^"+Zm+"]",T1="[^"+Zm.replace("\\.","")+"]",A1=/((?:WC+[\/:])*)/.source.replace("WC",Qm),w1=/(WCOD+)?/.source.replace("WCOD",T1),R1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Qm),C1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Qm),D1=new RegExp("^"+A1+w1+R1+C1+"$"),N1=["material","materials","bones","map"];class L1{constructor(t,e,s){const o=s||ze.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,o)}getValue(t,e){this.bind();const s=this._targetGroup.nCachedObjects_,o=this._bindings[s];o!==void 0&&o.getValue(t,e)}setValue(t,e){const s=this._bindings;for(let o=this._targetGroup.nCachedObjects_,c=s.length;o!==c;++o)s[o].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,s=t.length;e!==s;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,s=t.length;e!==s;++e)t[e].unbind()}}class ze{constructor(t,e,s){this.path=e,this.parsedPath=s||ze.parseTrackName(e),this.node=ze.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,s){return t&&t.isAnimationObjectGroup?new ze.Composite(t,e,s):new ze(t,e,s)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(E1,"")}static parseTrackName(t){const e=D1.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const s={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},o=s.nodeName&&s.nodeName.lastIndexOf(".");if(o!==void 0&&o!==-1){const c=s.nodeName.substring(o+1);N1.indexOf(c)!==-1&&(s.nodeName=s.nodeName.substring(0,o),s.objectName=c)}if(s.propertyName===null||s.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return s}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const s=t.skeleton.getBoneByName(e);if(s!==void 0)return s}if(t.children){const s=function(c){for(let f=0;f<c.length;f++){const h=c[f];if(h.name===e||h.uuid===e)return h;const d=s(h.children);if(d)return d}return null},o=s(t.children);if(o)return o}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const s=this.resolvedProperty;for(let o=0,c=s.length;o!==c;++o)t[e++]=s[o]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const s=this.resolvedProperty;for(let o=0,c=s.length;o!==c;++o)s[o]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const s=this.resolvedProperty;for(let o=0,c=s.length;o!==c;++o)s[o]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const s=this.resolvedProperty;for(let o=0,c=s.length;o!==c;++o)s[o]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,s=e.objectName,o=e.propertyName;let c=e.propertyIndex;if(t||(t=ze.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(s){let p=e.objectIndex;switch(s){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let g=0;g<t.length;g++)if(t[g].name===p){p=g;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[s]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[s]}if(p!==void 0){if(t[p]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[p]}}const f=t[o];if(f===void 0){const p=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+p+"."+o+" but it wasn't found.",t);return}let h=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?h=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(h=this.Versioning.MatrixWorldNeedsUpdate);let d=this.BindingType.Direct;if(c!==void 0){if(o==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[c]!==void 0&&(c=t.morphTargetDictionary[c])}d=this.BindingType.ArrayElement,this.resolvedProperty=f,this.propertyIndex=c}else f.fromArray!==void 0&&f.toArray!==void 0?(d=this.BindingType.HasFromToArray,this.resolvedProperty=f):Array.isArray(f)?(d=this.BindingType.EntireArray,this.resolvedProperty=f):this.propertyName=o;this.getValue=this.GetterByBindingType[d],this.setValue=this.SetterByBindingTypeAndVersioning[d][h]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ze.Composite=L1;ze.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ze.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ze.prototype.GetterByBindingType=[ze.prototype._getValue_direct,ze.prototype._getValue_array,ze.prototype._getValue_arrayElement,ze.prototype._getValue_toArray];ze.prototype.SetterByBindingTypeAndVersioning=[[ze.prototype._setValue_direct,ze.prototype._setValue_direct_setNeedsUpdate,ze.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_array,ze.prototype._setValue_array_setNeedsUpdate,ze.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_arrayElement,ze.prototype._setValue_arrayElement_setNeedsUpdate,ze.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_fromArray,ze.prototype._setValue_fromArray_setNeedsUpdate,ze.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class ky{constructor(t=1,e=0,s=0){this.radius=t,this.phi=e,this.theta=s}set(t,e,s){return this.radius=t,this.phi=e,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=me(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,s){return this.radius=Math.sqrt(t*t+e*e+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(me(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class U1 extends hr{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Vy(r,t,e,s){const o=O1(s);switch(e){case mS:return r*t;case _S:return r*t;case vS:return r*t*2;case Bm:return r*t/o.components*o.byteLength;case zm:return r*t/o.components*o.byteLength;case yS:return r*t*2/o.components*o.byteLength;case Fm:return r*t*2/o.components*o.byteLength;case gS:return r*t*3/o.components*o.byteLength;case Ai:return r*t*4/o.components*o.byteLength;case Hm:return r*t*4/o.components*o.byteLength;case qu:case Ku:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Zu:case Qu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Pp:case Bp:return Math.max(r,16)*Math.max(t,8)/4;case Op:case Ip:return Math.max(r,8)*Math.max(t,8)/2;case zp:case Fp:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Hp:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Gp:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case kp:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Vp:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Xp:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case jp:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Wp:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Yp:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case qp:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Kp:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Zp:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Qp:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Jp:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case $p:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case tm:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Ju:case em:case nm:return Math.ceil(r/4)*Math.ceil(t/4)*16;case xS:case im:return Math.ceil(r/4)*Math.ceil(t/4)*8;case am:case sm:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function O1(r){switch(r){case Pa:case hS:return{byteLength:1,components:1};case jl:case dS:case tc:return{byteLength:2,components:1};case Pm:case Im:return{byteLength:2,components:4};case lr:case Om:case Pi:return{byteLength:4,components:1};case pS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Um}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Um);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function jS(){let r=null,t=!1,e=null,s=null;function o(c,f){e(c,f),s=r.requestAnimationFrame(o)}return{start:function(){t!==!0&&e!==null&&(s=r.requestAnimationFrame(o),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){e=c},setContext:function(c){r=c}}}function P1(r){const t=new WeakMap;function e(h,d){const p=h.array,g=h.usage,v=p.byteLength,y=r.createBuffer();r.bindBuffer(d,y),r.bufferData(d,p,g),h.onUploadCallback();let S;if(p instanceof Float32Array)S=r.FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=r.SHORT;else if(p instanceof Uint32Array)S=r.UNSIGNED_INT;else if(p instanceof Int32Array)S=r.INT;else if(p instanceof Int8Array)S=r.BYTE;else if(p instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:v}}function s(h,d,p){const g=d.array,v=d.updateRanges;if(r.bindBuffer(p,h),v.length===0)r.bufferSubData(p,0,g);else{v.sort((S,M)=>S.start-M.start);let y=0;for(let S=1;S<v.length;S++){const M=v[y],T=v[S];T.start<=M.start+M.count+1?M.count=Math.max(M.count,T.start+T.count-M.start):(++y,v[y]=T)}v.length=y+1;for(let S=0,M=v.length;S<M;S++){const T=v[S];r.bufferSubData(p,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const d=t.get(h);d&&(r.deleteBuffer(d.buffer),t.delete(h))}function f(h,d){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,e(h,d));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,d),p.version=h.version}}return{get:o,remove:c,update:f}}var I1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,B1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,z1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,F1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,H1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,G1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,k1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,V1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,X1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,j1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,W1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Y1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,q1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,K1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Z1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Q1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,J1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,t2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,e2=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,n2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,i2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,a2=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,s2=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,r2=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,o2=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,l2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,c2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,u2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,f2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,h2="gl_FragColor = linearToOutputTexel( gl_FragColor );",d2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,p2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,m2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,g2=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,_2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,v2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,y2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,x2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,S2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,b2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,M2=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,E2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,T2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,A2=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,w2=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,R2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,C2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,D2=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,N2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,L2=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,U2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,O2=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,P2=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,I2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,B2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,z2=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,F2=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,H2=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,G2=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,k2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,V2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,X2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,j2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,W2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Y2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,q2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,K2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Z2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Q2=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,J2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,tw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ew=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,aw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,sw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ow=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,uw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,fw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_w=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,vw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,yw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,xw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Sw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Mw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ew=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Tw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Aw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ww=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Dw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Nw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Lw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Uw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ow=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Pw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Iw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,kw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Vw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Xw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,jw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ww=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Kw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Zw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$w=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,tR=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eR=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,nR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,iR=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aR=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,rR=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,uR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,dR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,he={alphahash_fragment:I1,alphahash_pars_fragment:B1,alphamap_fragment:z1,alphamap_pars_fragment:F1,alphatest_fragment:H1,alphatest_pars_fragment:G1,aomap_fragment:k1,aomap_pars_fragment:V1,batching_pars_vertex:X1,batching_vertex:j1,begin_vertex:W1,beginnormal_vertex:Y1,bsdfs:q1,iridescence_fragment:K1,bumpmap_pars_fragment:Z1,clipping_planes_fragment:Q1,clipping_planes_pars_fragment:J1,clipping_planes_pars_vertex:$1,clipping_planes_vertex:t2,color_fragment:e2,color_pars_fragment:n2,color_pars_vertex:i2,color_vertex:a2,common:s2,cube_uv_reflection_fragment:r2,defaultnormal_vertex:o2,displacementmap_pars_vertex:l2,displacementmap_vertex:c2,emissivemap_fragment:u2,emissivemap_pars_fragment:f2,colorspace_fragment:h2,colorspace_pars_fragment:d2,envmap_fragment:p2,envmap_common_pars_fragment:m2,envmap_pars_fragment:g2,envmap_pars_vertex:_2,envmap_physical_pars_fragment:R2,envmap_vertex:v2,fog_vertex:y2,fog_pars_vertex:x2,fog_fragment:S2,fog_pars_fragment:b2,gradientmap_pars_fragment:M2,lightmap_pars_fragment:E2,lights_lambert_fragment:T2,lights_lambert_pars_fragment:A2,lights_pars_begin:w2,lights_toon_fragment:C2,lights_toon_pars_fragment:D2,lights_phong_fragment:N2,lights_phong_pars_fragment:L2,lights_physical_fragment:U2,lights_physical_pars_fragment:O2,lights_fragment_begin:P2,lights_fragment_maps:I2,lights_fragment_end:B2,logdepthbuf_fragment:z2,logdepthbuf_pars_fragment:F2,logdepthbuf_pars_vertex:H2,logdepthbuf_vertex:G2,map_fragment:k2,map_pars_fragment:V2,map_particle_fragment:X2,map_particle_pars_fragment:j2,metalnessmap_fragment:W2,metalnessmap_pars_fragment:Y2,morphinstance_vertex:q2,morphcolor_vertex:K2,morphnormal_vertex:Z2,morphtarget_pars_vertex:Q2,morphtarget_vertex:J2,normal_fragment_begin:$2,normal_fragment_maps:tw,normal_pars_fragment:ew,normal_pars_vertex:nw,normal_vertex:iw,normalmap_pars_fragment:aw,clearcoat_normal_fragment_begin:sw,clearcoat_normal_fragment_maps:rw,clearcoat_pars_fragment:ow,iridescence_pars_fragment:lw,opaque_fragment:cw,packing:uw,premultiplied_alpha_fragment:fw,project_vertex:hw,dithering_fragment:dw,dithering_pars_fragment:pw,roughnessmap_fragment:mw,roughnessmap_pars_fragment:gw,shadowmap_pars_fragment:_w,shadowmap_pars_vertex:vw,shadowmap_vertex:yw,shadowmask_pars_fragment:xw,skinbase_vertex:Sw,skinning_pars_vertex:bw,skinning_vertex:Mw,skinnormal_vertex:Ew,specularmap_fragment:Tw,specularmap_pars_fragment:Aw,tonemapping_fragment:ww,tonemapping_pars_fragment:Rw,transmission_fragment:Cw,transmission_pars_fragment:Dw,uv_pars_fragment:Nw,uv_pars_vertex:Lw,uv_vertex:Uw,worldpos_vertex:Ow,background_vert:Pw,background_frag:Iw,backgroundCube_vert:Bw,backgroundCube_frag:zw,cube_vert:Fw,cube_frag:Hw,depth_vert:Gw,depth_frag:kw,distanceRGBA_vert:Vw,distanceRGBA_frag:Xw,equirect_vert:jw,equirect_frag:Ww,linedashed_vert:Yw,linedashed_frag:qw,meshbasic_vert:Kw,meshbasic_frag:Zw,meshlambert_vert:Qw,meshlambert_frag:Jw,meshmatcap_vert:$w,meshmatcap_frag:tR,meshnormal_vert:eR,meshnormal_frag:nR,meshphong_vert:iR,meshphong_frag:aR,meshphysical_vert:sR,meshphysical_frag:rR,meshtoon_vert:oR,meshtoon_frag:lR,points_vert:cR,points_frag:uR,shadow_vert:fR,shadow_frag:hR,sprite_vert:dR,sprite_frag:pR},Ut={common:{diffuse:{value:new oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new oe(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},Xi={basic:{uniforms:jn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:jn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new oe(0)}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:jn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new oe(0)},specular:{value:new oe(1118481)},shininess:{value:30}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:jn([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:jn([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new oe(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:jn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:jn([Ut.points,Ut.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:jn([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:jn([Ut.common,Ut.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:jn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:jn([Ut.sprite,Ut.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distanceRGBA:{uniforms:jn([Ut.common,Ut.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distanceRGBA_vert,fragmentShader:he.distanceRGBA_frag},shadow:{uniforms:jn([Ut.lights,Ut.fog,{color:{value:new oe(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};Xi.physical={uniforms:jn([Xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new oe(0)},specularColor:{value:new oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};const Hu={r:0,b:0,g:0},$s=new Ji,mR=new ue;function gR(r,t,e,s,o,c,f){const h=new oe(0);let d=c===!0?0:1,p,g,v=null,y=0,S=null;function M(L){let w=L.isScene===!0?L.background:null;return w&&w.isTexture&&(w=(L.backgroundBlurriness>0?e:t).get(w)),w}function T(L){let w=!1;const I=M(L);I===null?x(h,d):I&&I.isColor&&(x(I,1),w=!0);const H=r.xr.getEnvironmentBlendMode();H==="additive"?s.buffers.color.setClear(0,0,0,1,f):H==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(r.autoClear||w)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function b(L,w){const I=M(w);I&&(I.isCubeTexture||I.mapping===mf)?(g===void 0&&(g=new mi(new nc(1,1,1),new As({name:"BackgroundCubeMaterial",uniforms:bo(Xi.backgroundCube.uniforms),vertexShader:Xi.backgroundCube.vertexShader,fragmentShader:Xi.backgroundCube.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(H,B,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),$s.copy(w.backgroundRotation),$s.x*=-1,$s.y*=-1,$s.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&($s.y*=-1,$s.z*=-1),g.material.uniforms.envMap.value=I,g.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(mR.makeRotationFromEuler($s)),g.material.toneMapped=Re.getTransfer(I.colorSpace)!==Xe,(v!==I||y!==I.version||S!==r.toneMapping)&&(g.material.needsUpdate=!0,v=I,y=I.version,S=r.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):I&&I.isTexture&&(p===void 0&&(p=new mi(new gf(2,2),new As({name:"BackgroundMaterial",uniforms:bo(Xi.background.uniforms),vertexShader:Xi.background.vertexShader,fragmentShader:Xi.background.fragmentShader,side:Oa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=I,p.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,p.material.toneMapped=Re.getTransfer(I.colorSpace)!==Xe,I.matrixAutoUpdate===!0&&I.updateMatrix(),p.material.uniforms.uvTransform.value.copy(I.matrix),(v!==I||y!==I.version||S!==r.toneMapping)&&(p.material.needsUpdate=!0,v=I,y=I.version,S=r.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function x(L,w){L.getRGB(Hu,NS(r)),s.buffers.color.setClear(Hu.r,Hu.g,Hu.b,w,f)}function N(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(L,w=1){h.set(L),d=w,x(h,d)},getClearAlpha:function(){return d},setClearAlpha:function(L){d=L,x(h,d)},render:T,addToRenderList:b,dispose:N}}function _R(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},o=y(null);let c=o,f=!1;function h(D,k,ct,rt,mt){let ft=!1;const z=v(rt,ct,k);c!==z&&(c=z,p(c.object)),ft=S(D,rt,ct,mt),ft&&M(D,rt,ct,mt),mt!==null&&t.update(mt,r.ELEMENT_ARRAY_BUFFER),(ft||f)&&(f=!1,w(D,k,ct,rt),mt!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(mt).buffer))}function d(){return r.createVertexArray()}function p(D){return r.bindVertexArray(D)}function g(D){return r.deleteVertexArray(D)}function v(D,k,ct){const rt=ct.wireframe===!0;let mt=s[D.id];mt===void 0&&(mt={},s[D.id]=mt);let ft=mt[k.id];ft===void 0&&(ft={},mt[k.id]=ft);let z=ft[rt];return z===void 0&&(z=y(d()),ft[rt]=z),z}function y(D){const k=[],ct=[],rt=[];for(let mt=0;mt<e;mt++)k[mt]=0,ct[mt]=0,rt[mt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:ct,attributeDivisors:rt,object:D,attributes:{},index:null}}function S(D,k,ct,rt){const mt=c.attributes,ft=k.attributes;let z=0;const Z=ct.getAttributes();for(const q in Z)if(Z[q].location>=0){const O=mt[q];let et=ft[q];if(et===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(et=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(et=D.instanceColor)),O===void 0||O.attribute!==et||et&&O.data!==et.data)return!0;z++}return c.attributesNum!==z||c.index!==rt}function M(D,k,ct,rt){const mt={},ft=k.attributes;let z=0;const Z=ct.getAttributes();for(const q in Z)if(Z[q].location>=0){let O=ft[q];O===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(O=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(O=D.instanceColor));const et={};et.attribute=O,O&&O.data&&(et.data=O.data),mt[q]=et,z++}c.attributes=mt,c.attributesNum=z,c.index=rt}function T(){const D=c.newAttributes;for(let k=0,ct=D.length;k<ct;k++)D[k]=0}function b(D){x(D,0)}function x(D,k){const ct=c.newAttributes,rt=c.enabledAttributes,mt=c.attributeDivisors;ct[D]=1,rt[D]===0&&(r.enableVertexAttribArray(D),rt[D]=1),mt[D]!==k&&(r.vertexAttribDivisor(D,k),mt[D]=k)}function N(){const D=c.newAttributes,k=c.enabledAttributes;for(let ct=0,rt=k.length;ct<rt;ct++)k[ct]!==D[ct]&&(r.disableVertexAttribArray(ct),k[ct]=0)}function L(D,k,ct,rt,mt,ft,z){z===!0?r.vertexAttribIPointer(D,k,ct,mt,ft):r.vertexAttribPointer(D,k,ct,rt,mt,ft)}function w(D,k,ct,rt){T();const mt=rt.attributes,ft=ct.getAttributes(),z=k.defaultAttributeValues;for(const Z in ft){const q=ft[Z];if(q.location>=0){let St=mt[Z];if(St===void 0&&(Z==="instanceMatrix"&&D.instanceMatrix&&(St=D.instanceMatrix),Z==="instanceColor"&&D.instanceColor&&(St=D.instanceColor)),St!==void 0){const O=St.normalized,et=St.itemSize,xt=t.get(St);if(xt===void 0)continue;const Mt=xt.buffer,$=xt.type,gt=xt.bytesPerElement,bt=$===r.INT||$===r.UNSIGNED_INT||St.gpuType===Om;if(St.isInterleavedBufferAttribute){const Rt=St.data,It=Rt.stride,fe=St.offset;if(Rt.isInstancedInterleavedBuffer){for(let Jt=0;Jt<q.locationSize;Jt++)x(q.location+Jt,Rt.meshPerAttribute);D.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=Rt.meshPerAttribute*Rt.count)}else for(let Jt=0;Jt<q.locationSize;Jt++)b(q.location+Jt);r.bindBuffer(r.ARRAY_BUFFER,Mt);for(let Jt=0;Jt<q.locationSize;Jt++)L(q.location+Jt,et/q.locationSize,$,O,It*gt,(fe+et/q.locationSize*Jt)*gt,bt)}else{if(St.isInstancedBufferAttribute){for(let Rt=0;Rt<q.locationSize;Rt++)x(q.location+Rt,St.meshPerAttribute);D.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let Rt=0;Rt<q.locationSize;Rt++)b(q.location+Rt);r.bindBuffer(r.ARRAY_BUFFER,Mt);for(let Rt=0;Rt<q.locationSize;Rt++)L(q.location+Rt,et/q.locationSize,$,O,et*gt,et/q.locationSize*Rt*gt,bt)}}else if(z!==void 0){const O=z[Z];if(O!==void 0)switch(O.length){case 2:r.vertexAttrib2fv(q.location,O);break;case 3:r.vertexAttrib3fv(q.location,O);break;case 4:r.vertexAttrib4fv(q.location,O);break;default:r.vertexAttrib1fv(q.location,O)}}}}N()}function I(){X();for(const D in s){const k=s[D];for(const ct in k){const rt=k[ct];for(const mt in rt)g(rt[mt].object),delete rt[mt];delete k[ct]}delete s[D]}}function H(D){if(s[D.id]===void 0)return;const k=s[D.id];for(const ct in k){const rt=k[ct];for(const mt in rt)g(rt[mt].object),delete rt[mt];delete k[ct]}delete s[D.id]}function B(D){for(const k in s){const ct=s[k];if(ct[D.id]===void 0)continue;const rt=ct[D.id];for(const mt in rt)g(rt[mt].object),delete rt[mt];delete ct[D.id]}}function X(){U(),f=!0,c!==o&&(c=o,p(c.object))}function U(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:X,resetDefaultState:U,dispose:I,releaseStatesOfGeometry:H,releaseStatesOfProgram:B,initAttributes:T,enableAttribute:b,disableUnusedAttributes:N}}function vR(r,t,e){let s;function o(p){s=p}function c(p,g){r.drawArrays(s,p,g),e.update(g,s,1)}function f(p,g,v){v!==0&&(r.drawArraysInstanced(s,p,g,v),e.update(g,s,v))}function h(p,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,v);let S=0;for(let M=0;M<v;M++)S+=g[M];e.update(S,s,1)}function d(p,g,v,y){if(v===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let M=0;M<p.length;M++)f(p[M],g[M],y[M]);else{S.multiDrawArraysInstancedWEBGL(s,p,0,g,0,y,0,v);let M=0;for(let T=0;T<v;T++)M+=g[T]*y[T];e.update(M,s,1)}}this.setMode=o,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function yR(r,t,e,s){let o;function c(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");o=r.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function f(B){return!(B!==Ai&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(B){const X=B===tc&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==Pa&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==Pi&&!X)}function d(B){if(B==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=e.precision!==void 0?e.precision:"highp";const g=d(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=e.logarithmicDepthBuffer===!0,y=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_TEXTURE_SIZE),b=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),N=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),w=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),I=M>0,H=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:d,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:v,reverseDepthBuffer:y,maxTextures:S,maxVertexTextures:M,maxTextureSize:T,maxCubemapSize:b,maxAttributes:x,maxVertexUniforms:N,maxVaryings:L,maxFragmentUniforms:w,vertexTextures:I,maxSamples:H}}function xR(r){const t=this;let e=null,s=0,o=!1,c=!1;const f=new xs,h=new ce,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(v,y){const S=v.length!==0||y||s!==0||o;return o=y,s=v.length,S},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,y){e=g(v,y,0)},this.setState=function(v,y,S){const M=v.clippingPlanes,T=v.clipIntersection,b=v.clipShadows,x=r.get(v);if(!o||M===null||M.length===0||c&&!b)c?g(null):p();else{const N=c?0:s,L=N*4;let w=x.clippingState||null;d.value=w,w=g(M,y,L,S);for(let I=0;I!==L;++I)w[I]=e[I];x.clippingState=w,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=N}};function p(){d.value!==e&&(d.value=e,d.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(v,y,S,M){const T=v!==null?v.length:0;let b=null;if(T!==0){if(b=d.value,M!==!0||b===null){const x=S+T*4,N=y.matrixWorldInverse;h.getNormalMatrix(N),(b===null||b.length<x)&&(b=new Float32Array(x));for(let L=0,w=S;L!==T;++L,w+=4)f.copy(v[L]).applyMatrix4(N,h),f.normal.toArray(b,w),b[w+3]=f.constant}d.value=b,d.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,b}}function SR(r){let t=new WeakMap;function e(f,h){return h===Lp?f.mapping=vo:h===Up&&(f.mapping=yo),f}function s(f){if(f&&f.isTexture){const h=f.mapping;if(h===Lp||h===Up)if(t.has(f)){const d=t.get(f).texture;return e(d,f.mapping)}else{const d=f.image;if(d&&d.height>0){const p=new kA(d.height);return p.fromEquirectangularTexture(r,f),t.set(f,p),f.addEventListener("dispose",o),e(p.texture,f.mapping)}else return null}}return f}function o(f){const h=f.target;h.removeEventListener("dispose",o);const d=t.get(h);d!==void 0&&(t.delete(h),d.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const lo=4,Xy=[.125,.215,.35,.446,.526,.582],ar=20,ap=new Km,jy=new oe;let sp=null,rp=0,op=0,lp=!1;const nr=(1+Math.sqrt(5))/2,so=1/nr,Wy=[new W(-nr,so,0),new W(nr,so,0),new W(-so,0,nr),new W(so,0,nr),new W(0,nr,-so),new W(0,nr,so),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)],bR=new W;class Yy{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,s=.1,o=100,c={}){const{size:f=256,position:h=bR}=c;sp=this._renderer.getRenderTarget(),rp=this._renderer.getActiveCubeFace(),op=this._renderer.getActiveMipmapLevel(),lp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(t,s,o,d,h),e>0&&this._blur(d,0,0,e),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zy(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ky(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(sp,rp,op),this._renderer.xr.enabled=lp,t.scissorTest=!1,Gu(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===vo||t.mapping===yo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),sp=this._renderer.getRenderTarget(),rp=this._renderer.getActiveCubeFace(),op=this._renderer.getActiveMipmapLevel(),lp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=e||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,s={magFilter:pi,minFilter:pi,generateMipmaps:!1,type:tc,format:Ai,colorSpace:Kn,depthBuffer:!1},o=qy(t,e,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qy(t,e,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=MR(c)),this._blurMaterial=ER(c,t,e)}return o}_compileMaterial(t){const e=new mi(this._lodPlanes[0],t);this._renderer.compile(e,ap)}_sceneToCubeUV(t,e,s,o,c){const d=new Wn(90,1,e,s),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,y=v.autoClear,S=v.toneMapping;v.getClearColor(jy),v.toneMapping=Ts,v.autoClear=!1;const M=new sr({name:"PMREM.Background",side:ii,depthWrite:!1,depthTest:!1}),T=new mi(new nc,M);let b=!1;const x=t.background;x?x.isColor&&(M.color.copy(x),t.background=null,b=!0):(M.color.copy(jy),b=!0);for(let N=0;N<6;N++){const L=N%3;L===0?(d.up.set(0,p[N],0),d.position.set(c.x,c.y,c.z),d.lookAt(c.x+g[N],c.y,c.z)):L===1?(d.up.set(0,0,p[N]),d.position.set(c.x,c.y,c.z),d.lookAt(c.x,c.y+g[N],c.z)):(d.up.set(0,p[N],0),d.position.set(c.x,c.y,c.z),d.lookAt(c.x,c.y,c.z+g[N]));const w=this._cubeSize;Gu(o,L*w,N>2?w:0,w,w),v.setRenderTarget(o),b&&v.render(T,d),v.render(t,d)}T.geometry.dispose(),T.material.dispose(),v.toneMapping=S,v.autoClear=y,t.background=x}_textureToCubeUV(t,e){const s=this._renderer,o=t.mapping===vo||t.mapping===yo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zy()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ky());const c=o?this._cubemapMaterial:this._equirectMaterial,f=new mi(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=t;const d=this._cubeSize;Gu(e,0,0,3*d,2*d),s.setRenderTarget(e),s.render(f,ap)}_applyPMREM(t){const e=this._renderer,s=e.autoClear;e.autoClear=!1;const o=this._lodPlanes.length;for(let c=1;c<o;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=Wy[(o-c-1)%Wy.length];this._blur(t,c-1,c,f,h)}e.autoClear=s}_blur(t,e,s,o,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,e,s,o,"latitudinal",c),this._halfBlur(f,t,s,s,o,"longitudinal",c)}_halfBlur(t,e,s,o,c,f,h){const d=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new mi(this._lodPlanes[o],p),y=p.uniforms,S=this._sizeLods[s]-1,M=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*ar-1),T=c/M,b=isFinite(c)?1+Math.floor(g*T):ar;b>ar&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${b} samples when the maximum is set to ${ar}`);const x=[];let N=0;for(let B=0;B<ar;++B){const X=B/T,U=Math.exp(-X*X/2);x.push(U),B===0?N+=U:B<b&&(N+=2*U)}for(let B=0;B<x.length;B++)x[B]=x[B]/N;y.envMap.value=t.texture,y.samples.value=b,y.weights.value=x,y.latitudinal.value=f==="latitudinal",h&&(y.poleAxis.value=h);const{_lodMax:L}=this;y.dTheta.value=M,y.mipInt.value=L-s;const w=this._sizeLods[o],I=3*w*(o>L-lo?o-L+lo:0),H=4*(this._cubeSize-w);Gu(e,I,H,3*w,2*w),d.setRenderTarget(e),d.render(v,ap)}}function MR(r){const t=[],e=[],s=[];let o=r;const c=r-lo+1+Xy.length;for(let f=0;f<c;f++){const h=Math.pow(2,o);e.push(h);let d=1/h;f>r-lo?d=Xy[f-r+lo-1]:f===0&&(d=0),s.push(d);const p=1/(h-2),g=-p,v=1+p,y=[g,g,v,g,v,v,g,g,v,v,g,v],S=6,M=6,T=3,b=2,x=1,N=new Float32Array(T*M*S),L=new Float32Array(b*M*S),w=new Float32Array(x*M*S);for(let H=0;H<S;H++){const B=H%3*2/3-1,X=H>2?0:-1,U=[B,X,0,B+2/3,X,0,B+2/3,X+1,0,B,X,0,B+2/3,X+1,0,B,X+1,0];N.set(U,T*M*H),L.set(y,b*M*H);const D=[H,H,H,H,H,H];w.set(D,x*M*H)}const I=new ta;I.setAttribute("position",new qn(N,T)),I.setAttribute("uv",new qn(L,b)),I.setAttribute("faceIndex",new qn(w,x)),t.push(I),o>lo&&o--}return{lodPlanes:t,sizeLods:e,sigmas:s}}function qy(r,t,e){const s=new cr(r,t,e);return s.texture.mapping=mf,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Gu(r,t,e,s,o){r.viewport.set(t,e,s,o),r.scissor.set(t,e,s,o)}function ER(r,t,e){const s=new Float32Array(ar),o=new W(0,1,0);return new As({name:"SphericalGaussianBlur",defines:{n:ar,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Jm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Es,depthTest:!1,depthWrite:!1})}function Ky(){return new As({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Es,depthTest:!1,depthWrite:!1})}function Zy(){return new As({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Es,depthTest:!1,depthWrite:!1})}function Jm(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function TR(r){let t=new WeakMap,e=null;function s(h){if(h&&h.isTexture){const d=h.mapping,p=d===Lp||d===Up,g=d===vo||d===yo;if(p||g){let v=t.get(h);const y=v!==void 0?v.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==y)return e===null&&(e=new Yy(r)),v=p?e.fromEquirectangular(h,v):e.fromCubemap(h,v),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),v.texture;if(v!==void 0)return v.texture;{const S=h.image;return p&&S&&S.height>0||g&&S&&o(S)?(e===null&&(e=new Yy(r)),v=p?e.fromEquirectangular(h):e.fromCubemap(h),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),h.addEventListener("dispose",c),v.texture):null}}}return h}function o(h){let d=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&d++;return d===p}function c(h){const d=h.target;d.removeEventListener("dispose",c);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function f(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:s,dispose:f}}function AR(r){const t={};function e(s){if(t[s]!==void 0)return t[s];let o;switch(s){case"WEBGL_depth_texture":o=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=r.getExtension(s)}return t[s]=o,o}return{has:function(s){return e(s)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(s){const o=e(s);return o===null&&$u("THREE.WebGLRenderer: "+s+" extension not supported."),o}}}function wR(r,t,e,s){const o={},c=new WeakMap;function f(v){const y=v.target;y.index!==null&&t.remove(y.index);for(const M in y.attributes)t.remove(y.attributes[M]);y.removeEventListener("dispose",f),delete o[y.id];const S=c.get(y);S&&(t.remove(S),c.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,e.memory.geometries--}function h(v,y){return o[y.id]===!0||(y.addEventListener("dispose",f),o[y.id]=!0,e.memory.geometries++),y}function d(v){const y=v.attributes;for(const S in y)t.update(y[S],r.ARRAY_BUFFER)}function p(v){const y=[],S=v.index,M=v.attributes.position;let T=0;if(S!==null){const N=S.array;T=S.version;for(let L=0,w=N.length;L<w;L+=3){const I=N[L+0],H=N[L+1],B=N[L+2];y.push(I,H,H,B,B,I)}}else if(M!==void 0){const N=M.array;T=M.version;for(let L=0,w=N.length/3-1;L<w;L+=3){const I=L+0,H=L+1,B=L+2;y.push(I,H,H,B,B,I)}}else return;const b=new(TS(y)?DS:CS)(y,1);b.version=T;const x=c.get(v);x&&t.remove(x),c.set(v,b)}function g(v){const y=c.get(v);if(y){const S=v.index;S!==null&&y.version<S.version&&p(v)}else p(v);return c.get(v)}return{get:h,update:d,getWireframeAttribute:g}}function RR(r,t,e){let s;function o(y){s=y}let c,f;function h(y){c=y.type,f=y.bytesPerElement}function d(y,S){r.drawElements(s,S,c,y*f),e.update(S,s,1)}function p(y,S,M){M!==0&&(r.drawElementsInstanced(s,S,c,y*f,M),e.update(S,s,M))}function g(y,S,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,c,y,0,M);let b=0;for(let x=0;x<M;x++)b+=S[x];e.update(b,s,1)}function v(y,S,M,T){if(M===0)return;const b=t.get("WEBGL_multi_draw");if(b===null)for(let x=0;x<y.length;x++)p(y[x]/f,S[x],T[x]);else{b.multiDrawElementsInstancedWEBGL(s,S,0,c,y,0,T,0,M);let x=0;for(let N=0;N<M;N++)x+=S[N]*T[N];e.update(x,s,1)}}this.setMode=o,this.setIndex=h,this.render=d,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function CR(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,h){switch(e.calls++,f){case r.TRIANGLES:e.triangles+=h*(c/3);break;case r.LINES:e.lines+=h*(c/2);break;case r.LINE_STRIP:e.lines+=h*(c-1);break;case r.LINE_LOOP:e.lines+=h*c;break;case r.POINTS:e.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function o(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:o,update:s}}function DR(r,t,e){const s=new WeakMap,o=new Oe;function c(f,h,d){const p=f.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0;let y=s.get(h);if(y===void 0||y.count!==v){let D=function(){X.dispose(),s.delete(h),h.removeEventListener("dispose",D)};var S=D;y!==void 0&&y.texture.dispose();const M=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],N=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let w=0;M===!0&&(w=1),T===!0&&(w=2),b===!0&&(w=3);let I=h.attributes.position.count*w,H=1;I>t.maxTextureSize&&(H=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const B=new Float32Array(I*H*4*v),X=new AS(B,I,H,v);X.type=Pi,X.needsUpdate=!0;const U=w*4;for(let k=0;k<v;k++){const ct=x[k],rt=N[k],mt=L[k],ft=I*H*4*k;for(let z=0;z<ct.count;z++){const Z=z*U;M===!0&&(o.fromBufferAttribute(ct,z),B[ft+Z+0]=o.x,B[ft+Z+1]=o.y,B[ft+Z+2]=o.z,B[ft+Z+3]=0),T===!0&&(o.fromBufferAttribute(rt,z),B[ft+Z+4]=o.x,B[ft+Z+5]=o.y,B[ft+Z+6]=o.z,B[ft+Z+7]=0),b===!0&&(o.fromBufferAttribute(mt,z),B[ft+Z+8]=o.x,B[ft+Z+9]=o.y,B[ft+Z+10]=o.z,B[ft+Z+11]=mt.itemSize===4?o.w:1)}}y={count:v,texture:X,size:new se(I,H)},s.set(h,y),h.addEventListener("dispose",D)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)d.getUniforms().setValue(r,"morphTexture",f.morphTexture,e);else{let M=0;for(let b=0;b<p.length;b++)M+=p[b];const T=h.morphTargetsRelative?1:1-M;d.getUniforms().setValue(r,"morphTargetBaseInfluence",T),d.getUniforms().setValue(r,"morphTargetInfluences",p)}d.getUniforms().setValue(r,"morphTargetsTexture",y.texture,e),d.getUniforms().setValue(r,"morphTargetsTextureSize",y.size)}return{update:c}}function NR(r,t,e,s){let o=new WeakMap;function c(d){const p=s.render.frame,g=d.geometry,v=t.get(d,g);if(o.get(v)!==p&&(t.update(v),o.set(v,p)),d.isInstancedMesh&&(d.hasEventListener("dispose",h)===!1&&d.addEventListener("dispose",h),o.get(d)!==p&&(e.update(d.instanceMatrix,r.ARRAY_BUFFER),d.instanceColor!==null&&e.update(d.instanceColor,r.ARRAY_BUFFER),o.set(d,p))),d.isSkinnedMesh){const y=d.skeleton;o.get(y)!==p&&(y.update(),o.set(y,p))}return v}function f(){o=new WeakMap}function h(d){const p=d.target;p.removeEventListener("dispose",h),e.remove(p.instanceMatrix),p.instanceColor!==null&&e.remove(p.instanceColor)}return{update:c,dispose:f}}const WS=new Cn,Qy=new zS(1,1),YS=new AS,qS=new TA,KS=new US,Jy=[],$y=[],tx=new Float32Array(16),ex=new Float32Array(9),nx=new Float32Array(4);function Do(r,t,e){const s=r[0];if(s<=0||s>0)return r;const o=t*e;let c=Jy[o];if(c===void 0&&(c=new Float32Array(o),Jy[o]=c),t!==0){s.toArray(c,0);for(let f=1,h=0;f!==t;++f)h+=e,r[f].toArray(c,h)}return c}function Sn(r,t){if(r.length!==t.length)return!1;for(let e=0,s=r.length;e<s;e++)if(r[e]!==t[e])return!1;return!0}function bn(r,t){for(let e=0,s=t.length;e<s;e++)r[e]=t[e]}function vf(r,t){let e=$y[t];e===void 0&&(e=new Int32Array(t),$y[t]=e);for(let s=0;s!==t;++s)e[s]=r.allocateTextureUnit();return e}function LR(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function UR(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Sn(e,t))return;r.uniform2fv(this.addr,t),bn(e,t)}}function OR(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Sn(e,t))return;r.uniform3fv(this.addr,t),bn(e,t)}}function PR(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Sn(e,t))return;r.uniform4fv(this.addr,t),bn(e,t)}}function IR(r,t){const e=this.cache,s=t.elements;if(s===void 0){if(Sn(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),bn(e,t)}else{if(Sn(e,s))return;nx.set(s),r.uniformMatrix2fv(this.addr,!1,nx),bn(e,s)}}function BR(r,t){const e=this.cache,s=t.elements;if(s===void 0){if(Sn(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),bn(e,t)}else{if(Sn(e,s))return;ex.set(s),r.uniformMatrix3fv(this.addr,!1,ex),bn(e,s)}}function zR(r,t){const e=this.cache,s=t.elements;if(s===void 0){if(Sn(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),bn(e,t)}else{if(Sn(e,s))return;tx.set(s),r.uniformMatrix4fv(this.addr,!1,tx),bn(e,s)}}function FR(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function HR(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Sn(e,t))return;r.uniform2iv(this.addr,t),bn(e,t)}}function GR(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Sn(e,t))return;r.uniform3iv(this.addr,t),bn(e,t)}}function kR(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Sn(e,t))return;r.uniform4iv(this.addr,t),bn(e,t)}}function VR(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function XR(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Sn(e,t))return;r.uniform2uiv(this.addr,t),bn(e,t)}}function jR(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Sn(e,t))return;r.uniform3uiv(this.addr,t),bn(e,t)}}function WR(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Sn(e,t))return;r.uniform4uiv(this.addr,t),bn(e,t)}}function YR(r,t,e){const s=this.cache,o=e.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o);let c;this.type===r.SAMPLER_2D_SHADOW?(Qy.compareFunction=MS,c=Qy):c=WS,e.setTexture2D(t||c,o)}function qR(r,t,e){const s=this.cache,o=e.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),e.setTexture3D(t||qS,o)}function KR(r,t,e){const s=this.cache,o=e.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),e.setTextureCube(t||KS,o)}function ZR(r,t,e){const s=this.cache,o=e.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),e.setTexture2DArray(t||YS,o)}function QR(r){switch(r){case 5126:return LR;case 35664:return UR;case 35665:return OR;case 35666:return PR;case 35674:return IR;case 35675:return BR;case 35676:return zR;case 5124:case 35670:return FR;case 35667:case 35671:return HR;case 35668:case 35672:return GR;case 35669:case 35673:return kR;case 5125:return VR;case 36294:return XR;case 36295:return jR;case 36296:return WR;case 35678:case 36198:case 36298:case 36306:case 35682:return YR;case 35679:case 36299:case 36307:return qR;case 35680:case 36300:case 36308:case 36293:return KR;case 36289:case 36303:case 36311:case 36292:return ZR}}function JR(r,t){r.uniform1fv(this.addr,t)}function $R(r,t){const e=Do(t,this.size,2);r.uniform2fv(this.addr,e)}function tC(r,t){const e=Do(t,this.size,3);r.uniform3fv(this.addr,e)}function eC(r,t){const e=Do(t,this.size,4);r.uniform4fv(this.addr,e)}function nC(r,t){const e=Do(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function iC(r,t){const e=Do(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function aC(r,t){const e=Do(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function sC(r,t){r.uniform1iv(this.addr,t)}function rC(r,t){r.uniform2iv(this.addr,t)}function oC(r,t){r.uniform3iv(this.addr,t)}function lC(r,t){r.uniform4iv(this.addr,t)}function cC(r,t){r.uniform1uiv(this.addr,t)}function uC(r,t){r.uniform2uiv(this.addr,t)}function fC(r,t){r.uniform3uiv(this.addr,t)}function hC(r,t){r.uniform4uiv(this.addr,t)}function dC(r,t,e){const s=this.cache,o=t.length,c=vf(e,o);Sn(s,c)||(r.uniform1iv(this.addr,c),bn(s,c));for(let f=0;f!==o;++f)e.setTexture2D(t[f]||WS,c[f])}function pC(r,t,e){const s=this.cache,o=t.length,c=vf(e,o);Sn(s,c)||(r.uniform1iv(this.addr,c),bn(s,c));for(let f=0;f!==o;++f)e.setTexture3D(t[f]||qS,c[f])}function mC(r,t,e){const s=this.cache,o=t.length,c=vf(e,o);Sn(s,c)||(r.uniform1iv(this.addr,c),bn(s,c));for(let f=0;f!==o;++f)e.setTextureCube(t[f]||KS,c[f])}function gC(r,t,e){const s=this.cache,o=t.length,c=vf(e,o);Sn(s,c)||(r.uniform1iv(this.addr,c),bn(s,c));for(let f=0;f!==o;++f)e.setTexture2DArray(t[f]||YS,c[f])}function _C(r){switch(r){case 5126:return JR;case 35664:return $R;case 35665:return tC;case 35666:return eC;case 35674:return nC;case 35675:return iC;case 35676:return aC;case 5124:case 35670:return sC;case 35667:case 35671:return rC;case 35668:case 35672:return oC;case 35669:case 35673:return lC;case 5125:return cC;case 36294:return uC;case 36295:return fC;case 36296:return hC;case 35678:case 36198:case 36298:case 36306:case 35682:return dC;case 35679:case 36299:case 36307:return pC;case 35680:case 36300:case 36308:case 36293:return mC;case 36289:case 36303:case 36311:case 36292:return gC}}class vC{constructor(t,e,s){this.id=t,this.addr=s,this.cache=[],this.type=e.type,this.setValue=QR(e.type)}}class yC{constructor(t,e,s){this.id=t,this.addr=s,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=_C(e.type)}}class xC{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,s){const o=this.seq;for(let c=0,f=o.length;c!==f;++c){const h=o[c];h.setValue(t,e[h.id],s)}}}const cp=/(\w+)(\])?(\[|\.)?/g;function ix(r,t){r.seq.push(t),r.map[t.id]=t}function SC(r,t,e){const s=r.name,o=s.length;for(cp.lastIndex=0;;){const c=cp.exec(s),f=cp.lastIndex;let h=c[1];const d=c[2]==="]",p=c[3];if(d&&(h=h|0),p===void 0||p==="["&&f+2===o){ix(e,p===void 0?new vC(h,r,t):new yC(h,r,t));break}else{let v=e.map[h];v===void 0&&(v=new xC(h),ix(e,v)),e=v}}}class tf{constructor(t,e){this.seq=[],this.map={};const s=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<s;++o){const c=t.getActiveUniform(e,o),f=t.getUniformLocation(e,c.name);SC(c,f,this)}}setValue(t,e,s,o){const c=this.map[e];c!==void 0&&c.setValue(t,s,o)}setOptional(t,e,s){const o=e[s];o!==void 0&&this.setValue(t,s,o)}static upload(t,e,s,o){for(let c=0,f=e.length;c!==f;++c){const h=e[c],d=s[h.id];d.needsUpdate!==!1&&h.setValue(t,d.value,o)}}static seqWithValue(t,e){const s=[];for(let o=0,c=t.length;o!==c;++o){const f=t[o];f.id in e&&s.push(f)}return s}}function ax(r,t,e){const s=r.createShader(t);return r.shaderSource(s,e),r.compileShader(s),s}const bC=37297;let MC=0;function EC(r,t){const e=r.split(`
`),s=[],o=Math.max(t-6,0),c=Math.min(t+6,e.length);for(let f=o;f<c;f++){const h=f+1;s.push(`${h===t?">":" "} ${h}: ${e[f]}`)}return s.join(`
`)}const sx=new ce;function TC(r){Re._getMatrix(sx,Re.workingColorSpace,r);const t=`mat3( ${sx.elements.map(e=>e.toFixed(4))} )`;switch(Re.getTransfer(r)){case of:return[t,"LinearTransferOETF"];case Xe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function rx(r,t,e){const s=r.getShaderParameter(t,r.COMPILE_STATUS),o=r.getShaderInfoLog(t).trim();if(s&&o==="")return"";const c=/ERROR: 0:(\d+)/.exec(o);if(c){const f=parseInt(c[1]);return e.toUpperCase()+`

`+o+`

`+EC(r.getShaderSource(t),f)}else return o}function AC(r,t){const e=TC(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function wC(r,t){let e;switch(t){case OT:e="Linear";break;case PT:e="Reinhard";break;case IT:e="Cineon";break;case BT:e="ACESFilmic";break;case FT:e="AgX";break;case HT:e="Neutral";break;case zT:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ku=new W;function RC(){Re.getLuminanceCoefficients(ku);const r=ku.x.toFixed(4),t=ku.y.toFixed(4),e=ku.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function CC(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bl).join(`
`)}function DC(r){const t=[];for(const e in r){const s=r[e];s!==!1&&t.push("#define "+e+" "+s)}return t.join(`
`)}function NC(r,t){const e={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){const c=r.getActiveAttrib(t,o),f=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),e[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:h}}return e}function Bl(r){return r!==""}function ox(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function lx(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const LC=/^[ \t]*#include +<([\w\d./]+)>/gm;function um(r){return r.replace(LC,OC)}const UC=new Map;function OC(r,t){let e=he[t];if(e===void 0){const s=UC.get(t);if(s!==void 0)e=he[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return um(e)}const PC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cx(r){return r.replace(PC,IC)}function IC(r,t,e,s){let o="";for(let c=parseInt(t);c<parseInt(e);c++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function ux(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function BC(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===oS?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===lS?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===wa&&(t="SHADOWMAP_TYPE_VSM"),t}function zC(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case vo:case yo:t="ENVMAP_TYPE_CUBE";break;case mf:t="ENVMAP_TYPE_CUBE_UV";break}return t}function FC(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case yo:t="ENVMAP_MODE_REFRACTION";break}return t}function HC(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case cS:t="ENVMAP_BLENDING_MULTIPLY";break;case LT:t="ENVMAP_BLENDING_MIX";break;case UT:t="ENVMAP_BLENDING_ADD";break}return t}function GC(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:s,maxMip:e}}function kC(r,t,e,s){const o=r.getContext(),c=e.defines;let f=e.vertexShader,h=e.fragmentShader;const d=BC(e),p=zC(e),g=FC(e),v=HC(e),y=GC(e),S=CC(e),M=DC(c),T=o.createProgram();let b,x,N=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(b=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(Bl).join(`
`),b.length>0&&(b+=`
`),x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(Bl).join(`
`),x.length>0&&(x+=`
`)):(b=[ux(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+g:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+d:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bl).join(`
`),x=[ux(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+p:"",e.envMap?"#define "+g:"",e.envMap?"#define "+v:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+d:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ts?"#define TONE_MAPPING":"",e.toneMapping!==Ts?he.tonemapping_pars_fragment:"",e.toneMapping!==Ts?wC("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,AC("linearToOutputTexel",e.outputColorSpace),RC(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Bl).join(`
`)),f=um(f),f=ox(f,e),f=lx(f,e),h=um(h),h=ox(h,e),h=lx(h,e),f=cx(f),h=cx(h),e.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,b=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,x=["#define varying in",e.glslVersion===sy?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===sy?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const L=N+b+f,w=N+x+h,I=ax(o,o.VERTEX_SHADER,L),H=ax(o,o.FRAGMENT_SHADER,w);o.attachShader(T,I),o.attachShader(T,H),e.index0AttributeName!==void 0?o.bindAttribLocation(T,0,e.index0AttributeName):e.morphTargets===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function B(k){if(r.debug.checkShaderErrors){const ct=o.getProgramInfoLog(T).trim(),rt=o.getShaderInfoLog(I).trim(),mt=o.getShaderInfoLog(H).trim();let ft=!0,z=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if(ft=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,T,I,H);else{const Z=rx(o,I,"vertex"),q=rx(o,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ct+`
`+Z+`
`+q)}else ct!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ct):(rt===""||mt==="")&&(z=!1);z&&(k.diagnostics={runnable:ft,programLog:ct,vertexShader:{log:rt,prefix:b},fragmentShader:{log:mt,prefix:x}})}o.deleteShader(I),o.deleteShader(H),X=new tf(o,T),U=NC(o,T)}let X;this.getUniforms=function(){return X===void 0&&B(this),X};let U;this.getAttributes=function(){return U===void 0&&B(this),U};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=o.getProgramParameter(T,bC)),D},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=MC++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=I,this.fragmentShader=H,this}let VC=0;class XC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,s=t.fragmentShader,o=this._getShaderStage(e),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(t);return f.has(o)===!1&&(f.add(o),o.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const s of e)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let s=e.get(t);return s===void 0&&(s=new Set,e.set(t,s)),s}_getShaderStage(t){const e=this.shaderCache;let s=e.get(t);return s===void 0&&(s=new jC(t),e.set(t,s)),s}}class jC{constructor(t){this.id=VC++,this.code=t,this.usedTimes=0}}function WC(r,t,e,s,o,c,f){const h=new wS,d=new XC,p=new Set,g=[],v=o.logarithmicDepthBuffer,y=o.vertexTextures;let S=o.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(U){return p.add(U),U===0?"uv":`uv${U}`}function b(U,D,k,ct,rt){const mt=ct.fog,ft=rt.geometry,z=U.isMeshStandardMaterial?ct.environment:null,Z=(U.isMeshStandardMaterial?e:t).get(U.envMap||z),q=Z&&Z.mapping===mf?Z.image.height:null,St=M[U.type];U.precision!==null&&(S=o.getMaxPrecision(U.precision),S!==U.precision&&console.warn("THREE.WebGLProgram.getParameters:",U.precision,"not supported, using",S,"instead."));const O=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,et=O!==void 0?O.length:0;let xt=0;ft.morphAttributes.position!==void 0&&(xt=1),ft.morphAttributes.normal!==void 0&&(xt=2),ft.morphAttributes.color!==void 0&&(xt=3);let Mt,$,gt,bt;if(St){const De=Xi[St];Mt=De.vertexShader,$=De.fragmentShader}else Mt=U.vertexShader,$=U.fragmentShader,d.update(U),gt=d.getVertexShaderID(U),bt=d.getFragmentShaderID(U);const Rt=r.getRenderTarget(),It=r.state.buffers.depth.getReversed(),fe=rt.isInstancedMesh===!0,Jt=rt.isBatchedMesh===!0,Ke=!!U.map,We=!!U.matcap,ge=!!Z,G=!!U.aoMap,Zn=!!U.lightMap,Me=!!U.bumpMap,ae=!!U.normalMap,Yt=!!U.displacementMap,Fe=!!U.emissiveMap,Xt=!!U.metalnessMap,P=!!U.roughnessMap,R=U.anisotropy>0,it=U.clearcoat>0,yt=U.dispersion>0,Et=U.iridescence>0,dt=U.sheen>0,Ft=U.transmission>0,Ct=R&&!!U.anisotropyMap,Dt=it&&!!U.clearcoatMap,Ee=it&&!!U.clearcoatNormalMap,wt=it&&!!U.clearcoatRoughnessMap,Gt=Et&&!!U.iridescenceMap,Zt=Et&&!!U.iridescenceThicknessMap,$t=dt&&!!U.sheenColorMap,Bt=dt&&!!U.sheenRoughnessMap,de=!!U.specularMap,ie=!!U.specularColorMap,He=!!U.specularIntensityMap,j=Ft&&!!U.transmissionMap,Ot=Ft&&!!U.thicknessMap,ut=!!U.gradientMap,_t=!!U.alphaMap,zt=U.alphaTest>0,Pt=!!U.alphaHash,re=!!U.extensions;let Ze=Ts;U.toneMapped&&(Rt===null||Rt.isXRRenderTarget===!0)&&(Ze=r.toneMapping);const fn={shaderID:St,shaderType:U.type,shaderName:U.name,vertexShader:Mt,fragmentShader:$,defines:U.defines,customVertexShaderID:gt,customFragmentShaderID:bt,isRawShaderMaterial:U.isRawShaderMaterial===!0,glslVersion:U.glslVersion,precision:S,batching:Jt,batchingColor:Jt&&rt._colorsTexture!==null,instancing:fe,instancingColor:fe&&rt.instanceColor!==null,instancingMorph:fe&&rt.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:Rt===null?r.outputColorSpace:Rt.isXRRenderTarget===!0?Rt.texture.colorSpace:Kn,alphaToCoverage:!!U.alphaToCoverage,map:Ke,matcap:We,envMap:ge,envMapMode:ge&&Z.mapping,envMapCubeUVHeight:q,aoMap:G,lightMap:Zn,bumpMap:Me,normalMap:ae,displacementMap:y&&Yt,emissiveMap:Fe,normalMapObjectSpace:ae&&U.normalMapType===WT,normalMapTangentSpace:ae&&U.normalMapType===bS,metalnessMap:Xt,roughnessMap:P,anisotropy:R,anisotropyMap:Ct,clearcoat:it,clearcoatMap:Dt,clearcoatNormalMap:Ee,clearcoatRoughnessMap:wt,dispersion:yt,iridescence:Et,iridescenceMap:Gt,iridescenceThicknessMap:Zt,sheen:dt,sheenColorMap:$t,sheenRoughnessMap:Bt,specularMap:de,specularColorMap:ie,specularIntensityMap:He,transmission:Ft,transmissionMap:j,thicknessMap:Ot,gradientMap:ut,opaque:U.transparent===!1&&U.blending===ho&&U.alphaToCoverage===!1,alphaMap:_t,alphaTest:zt,alphaHash:Pt,combine:U.combine,mapUv:Ke&&T(U.map.channel),aoMapUv:G&&T(U.aoMap.channel),lightMapUv:Zn&&T(U.lightMap.channel),bumpMapUv:Me&&T(U.bumpMap.channel),normalMapUv:ae&&T(U.normalMap.channel),displacementMapUv:Yt&&T(U.displacementMap.channel),emissiveMapUv:Fe&&T(U.emissiveMap.channel),metalnessMapUv:Xt&&T(U.metalnessMap.channel),roughnessMapUv:P&&T(U.roughnessMap.channel),anisotropyMapUv:Ct&&T(U.anisotropyMap.channel),clearcoatMapUv:Dt&&T(U.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&T(U.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:wt&&T(U.clearcoatRoughnessMap.channel),iridescenceMapUv:Gt&&T(U.iridescenceMap.channel),iridescenceThicknessMapUv:Zt&&T(U.iridescenceThicknessMap.channel),sheenColorMapUv:$t&&T(U.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&T(U.sheenRoughnessMap.channel),specularMapUv:de&&T(U.specularMap.channel),specularColorMapUv:ie&&T(U.specularColorMap.channel),specularIntensityMapUv:He&&T(U.specularIntensityMap.channel),transmissionMapUv:j&&T(U.transmissionMap.channel),thicknessMapUv:Ot&&T(U.thicknessMap.channel),alphaMapUv:_t&&T(U.alphaMap.channel),vertexTangents:!!ft.attributes.tangent&&(ae||R),vertexColors:U.vertexColors,vertexAlphas:U.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,pointsUvs:rt.isPoints===!0&&!!ft.attributes.uv&&(Ke||_t),fog:!!mt,useFog:U.fog===!0,fogExp2:!!mt&&mt.isFogExp2,flatShading:U.flatShading===!0,sizeAttenuation:U.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:It,skinning:rt.isSkinnedMesh===!0,morphTargets:ft.morphAttributes.position!==void 0,morphNormals:ft.morphAttributes.normal!==void 0,morphColors:ft.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:xt,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:U.dithering,shadowMapEnabled:r.shadowMap.enabled&&k.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ze,decodeVideoTexture:Ke&&U.map.isVideoTexture===!0&&Re.getTransfer(U.map.colorSpace)===Xe,decodeVideoTextureEmissive:Fe&&U.emissiveMap.isVideoTexture===!0&&Re.getTransfer(U.emissiveMap.colorSpace)===Xe,premultipliedAlpha:U.premultipliedAlpha,doubleSided:U.side===Yi,flipSided:U.side===ii,useDepthPacking:U.depthPacking>=0,depthPacking:U.depthPacking||0,index0AttributeName:U.index0AttributeName,extensionClipCullDistance:re&&U.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&U.extensions.multiDraw===!0||Jt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:U.customProgramCacheKey()};return fn.vertexUv1s=p.has(1),fn.vertexUv2s=p.has(2),fn.vertexUv3s=p.has(3),p.clear(),fn}function x(U){const D=[];if(U.shaderID?D.push(U.shaderID):(D.push(U.customVertexShaderID),D.push(U.customFragmentShaderID)),U.defines!==void 0)for(const k in U.defines)D.push(k),D.push(U.defines[k]);return U.isRawShaderMaterial===!1&&(N(D,U),L(D,U),D.push(r.outputColorSpace)),D.push(U.customProgramCacheKey),D.join()}function N(U,D){U.push(D.precision),U.push(D.outputColorSpace),U.push(D.envMapMode),U.push(D.envMapCubeUVHeight),U.push(D.mapUv),U.push(D.alphaMapUv),U.push(D.lightMapUv),U.push(D.aoMapUv),U.push(D.bumpMapUv),U.push(D.normalMapUv),U.push(D.displacementMapUv),U.push(D.emissiveMapUv),U.push(D.metalnessMapUv),U.push(D.roughnessMapUv),U.push(D.anisotropyMapUv),U.push(D.clearcoatMapUv),U.push(D.clearcoatNormalMapUv),U.push(D.clearcoatRoughnessMapUv),U.push(D.iridescenceMapUv),U.push(D.iridescenceThicknessMapUv),U.push(D.sheenColorMapUv),U.push(D.sheenRoughnessMapUv),U.push(D.specularMapUv),U.push(D.specularColorMapUv),U.push(D.specularIntensityMapUv),U.push(D.transmissionMapUv),U.push(D.thicknessMapUv),U.push(D.combine),U.push(D.fogExp2),U.push(D.sizeAttenuation),U.push(D.morphTargetsCount),U.push(D.morphAttributeCount),U.push(D.numDirLights),U.push(D.numPointLights),U.push(D.numSpotLights),U.push(D.numSpotLightMaps),U.push(D.numHemiLights),U.push(D.numRectAreaLights),U.push(D.numDirLightShadows),U.push(D.numPointLightShadows),U.push(D.numSpotLightShadows),U.push(D.numSpotLightShadowsWithMaps),U.push(D.numLightProbes),U.push(D.shadowMapType),U.push(D.toneMapping),U.push(D.numClippingPlanes),U.push(D.numClipIntersection),U.push(D.depthPacking)}function L(U,D){h.disableAll(),D.supportsVertexTextures&&h.enable(0),D.instancing&&h.enable(1),D.instancingColor&&h.enable(2),D.instancingMorph&&h.enable(3),D.matcap&&h.enable(4),D.envMap&&h.enable(5),D.normalMapObjectSpace&&h.enable(6),D.normalMapTangentSpace&&h.enable(7),D.clearcoat&&h.enable(8),D.iridescence&&h.enable(9),D.alphaTest&&h.enable(10),D.vertexColors&&h.enable(11),D.vertexAlphas&&h.enable(12),D.vertexUv1s&&h.enable(13),D.vertexUv2s&&h.enable(14),D.vertexUv3s&&h.enable(15),D.vertexTangents&&h.enable(16),D.anisotropy&&h.enable(17),D.alphaHash&&h.enable(18),D.batching&&h.enable(19),D.dispersion&&h.enable(20),D.batchingColor&&h.enable(21),U.push(h.mask),h.disableAll(),D.fog&&h.enable(0),D.useFog&&h.enable(1),D.flatShading&&h.enable(2),D.logarithmicDepthBuffer&&h.enable(3),D.reverseDepthBuffer&&h.enable(4),D.skinning&&h.enable(5),D.morphTargets&&h.enable(6),D.morphNormals&&h.enable(7),D.morphColors&&h.enable(8),D.premultipliedAlpha&&h.enable(9),D.shadowMapEnabled&&h.enable(10),D.doubleSided&&h.enable(11),D.flipSided&&h.enable(12),D.useDepthPacking&&h.enable(13),D.dithering&&h.enable(14),D.transmission&&h.enable(15),D.sheen&&h.enable(16),D.opaque&&h.enable(17),D.pointsUvs&&h.enable(18),D.decodeVideoTexture&&h.enable(19),D.decodeVideoTextureEmissive&&h.enable(20),D.alphaToCoverage&&h.enable(21),U.push(h.mask)}function w(U){const D=M[U.type];let k;if(D){const ct=Xi[D];k=zA.clone(ct.uniforms)}else k=U.uniforms;return k}function I(U,D){let k;for(let ct=0,rt=g.length;ct<rt;ct++){const mt=g[ct];if(mt.cacheKey===D){k=mt,++k.usedTimes;break}}return k===void 0&&(k=new kC(r,D,U,c),g.push(k)),k}function H(U){if(--U.usedTimes===0){const D=g.indexOf(U);g[D]=g[g.length-1],g.pop(),U.destroy()}}function B(U){d.remove(U)}function X(){d.dispose()}return{getParameters:b,getProgramCacheKey:x,getUniforms:w,acquireProgram:I,releaseProgram:H,releaseShaderCache:B,programs:g,dispose:X}}function YC(){let r=new WeakMap;function t(f){return r.has(f)}function e(f){let h=r.get(f);return h===void 0&&(h={},r.set(f,h)),h}function s(f){r.delete(f)}function o(f,h,d){r.get(f)[h]=d}function c(){r=new WeakMap}return{has:t,get:e,remove:s,update:o,dispose:c}}function qC(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function fx(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function hx(){const r=[];let t=0;const e=[],s=[],o=[];function c(){t=0,e.length=0,s.length=0,o.length=0}function f(v,y,S,M,T,b){let x=r[t];return x===void 0?(x={id:v.id,object:v,geometry:y,material:S,groupOrder:M,renderOrder:v.renderOrder,z:T,group:b},r[t]=x):(x.id=v.id,x.object=v,x.geometry=y,x.material=S,x.groupOrder=M,x.renderOrder=v.renderOrder,x.z=T,x.group=b),t++,x}function h(v,y,S,M,T,b){const x=f(v,y,S,M,T,b);S.transmission>0?s.push(x):S.transparent===!0?o.push(x):e.push(x)}function d(v,y,S,M,T,b){const x=f(v,y,S,M,T,b);S.transmission>0?s.unshift(x):S.transparent===!0?o.unshift(x):e.unshift(x)}function p(v,y){e.length>1&&e.sort(v||qC),s.length>1&&s.sort(y||fx),o.length>1&&o.sort(y||fx)}function g(){for(let v=t,y=r.length;v<y;v++){const S=r[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:e,transmissive:s,transparent:o,init:c,push:h,unshift:d,finish:g,sort:p}}function KC(){let r=new WeakMap;function t(s,o){const c=r.get(s);let f;return c===void 0?(f=new hx,r.set(s,[f])):o>=c.length?(f=new hx,c.push(f)):f=c[o],f}function e(){r=new WeakMap}return{get:t,dispose:e}}function ZC(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new W,color:new oe};break;case"SpotLight":e={position:new W,direction:new W,color:new oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new W,color:new oe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new W,skyColor:new oe,groundColor:new oe};break;case"RectAreaLight":e={color:new oe,position:new W,halfWidth:new W,halfHeight:new W};break}return r[t.id]=e,e}}}function QC(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let JC=0;function $C(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function t3(r){const t=new ZC,e=QC(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new W);const o=new W,c=new ue,f=new ue;function h(p){let g=0,v=0,y=0;for(let U=0;U<9;U++)s.probe[U].set(0,0,0);let S=0,M=0,T=0,b=0,x=0,N=0,L=0,w=0,I=0,H=0,B=0;p.sort($C);for(let U=0,D=p.length;U<D;U++){const k=p[U],ct=k.color,rt=k.intensity,mt=k.distance,ft=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)g+=ct.r*rt,v+=ct.g*rt,y+=ct.b*rt;else if(k.isLightProbe){for(let z=0;z<9;z++)s.probe[z].addScaledVector(k.sh.coefficients[z],rt);B++}else if(k.isDirectionalLight){const z=t.get(k);if(z.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const Z=k.shadow,q=e.get(k);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,s.directionalShadow[S]=q,s.directionalShadowMap[S]=ft,s.directionalShadowMatrix[S]=k.shadow.matrix,N++}s.directional[S]=z,S++}else if(k.isSpotLight){const z=t.get(k);z.position.setFromMatrixPosition(k.matrixWorld),z.color.copy(ct).multiplyScalar(rt),z.distance=mt,z.coneCos=Math.cos(k.angle),z.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),z.decay=k.decay,s.spot[T]=z;const Z=k.shadow;if(k.map&&(s.spotLightMap[I]=k.map,I++,Z.updateMatrices(k),k.castShadow&&H++),s.spotLightMatrix[T]=Z.matrix,k.castShadow){const q=e.get(k);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,s.spotShadow[T]=q,s.spotShadowMap[T]=ft,w++}T++}else if(k.isRectAreaLight){const z=t.get(k);z.color.copy(ct).multiplyScalar(rt),z.halfWidth.set(k.width*.5,0,0),z.halfHeight.set(0,k.height*.5,0),s.rectArea[b]=z,b++}else if(k.isPointLight){const z=t.get(k);if(z.color.copy(k.color).multiplyScalar(k.intensity),z.distance=k.distance,z.decay=k.decay,k.castShadow){const Z=k.shadow,q=e.get(k);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,q.shadowCameraNear=Z.camera.near,q.shadowCameraFar=Z.camera.far,s.pointShadow[M]=q,s.pointShadowMap[M]=ft,s.pointShadowMatrix[M]=k.shadow.matrix,L++}s.point[M]=z,M++}else if(k.isHemisphereLight){const z=t.get(k);z.skyColor.copy(k.color).multiplyScalar(rt),z.groundColor.copy(k.groundColor).multiplyScalar(rt),s.hemi[x]=z,x++}}b>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ut.LTC_FLOAT_1,s.rectAreaLTC2=Ut.LTC_FLOAT_2):(s.rectAreaLTC1=Ut.LTC_HALF_1,s.rectAreaLTC2=Ut.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=v,s.ambient[2]=y;const X=s.hash;(X.directionalLength!==S||X.pointLength!==M||X.spotLength!==T||X.rectAreaLength!==b||X.hemiLength!==x||X.numDirectionalShadows!==N||X.numPointShadows!==L||X.numSpotShadows!==w||X.numSpotMaps!==I||X.numLightProbes!==B)&&(s.directional.length=S,s.spot.length=T,s.rectArea.length=b,s.point.length=M,s.hemi.length=x,s.directionalShadow.length=N,s.directionalShadowMap.length=N,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=w,s.spotShadowMap.length=w,s.directionalShadowMatrix.length=N,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=w+I-H,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=H,s.numLightProbes=B,X.directionalLength=S,X.pointLength=M,X.spotLength=T,X.rectAreaLength=b,X.hemiLength=x,X.numDirectionalShadows=N,X.numPointShadows=L,X.numSpotShadows=w,X.numSpotMaps=I,X.numLightProbes=B,s.version=JC++)}function d(p,g){let v=0,y=0,S=0,M=0,T=0;const b=g.matrixWorldInverse;for(let x=0,N=p.length;x<N;x++){const L=p[x];if(L.isDirectionalLight){const w=s.directional[v];w.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),w.direction.sub(o),w.direction.transformDirection(b),v++}else if(L.isSpotLight){const w=s.spot[S];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(b),w.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),w.direction.sub(o),w.direction.transformDirection(b),S++}else if(L.isRectAreaLight){const w=s.rectArea[M];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(b),f.identity(),c.copy(L.matrixWorld),c.premultiply(b),f.extractRotation(c),w.halfWidth.set(L.width*.5,0,0),w.halfHeight.set(0,L.height*.5,0),w.halfWidth.applyMatrix4(f),w.halfHeight.applyMatrix4(f),M++}else if(L.isPointLight){const w=s.point[y];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(b),y++}else if(L.isHemisphereLight){const w=s.hemi[T];w.direction.setFromMatrixPosition(L.matrixWorld),w.direction.transformDirection(b),T++}}}return{setup:h,setupView:d,state:s}}function dx(r){const t=new t3(r),e=[],s=[];function o(g){p.camera=g,e.length=0,s.length=0}function c(g){e.push(g)}function f(g){s.push(g)}function h(){t.setup(e)}function d(g){t.setupView(e,g)}const p={lightsArray:e,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:h,setupLightsView:d,pushLight:c,pushShadow:f}}function e3(r){let t=new WeakMap;function e(o,c=0){const f=t.get(o);let h;return f===void 0?(h=new dx(r),t.set(o,[h])):c>=f.length?(h=new dx(r),f.push(h)):h=f[c],h}function s(){t=new WeakMap}return{get:e,dispose:s}}const n3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,i3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function a3(r,t,e){let s=new jm;const o=new se,c=new se,f=new Oe,h=new n1({depthPacking:jT}),d=new i1,p={},g=e.maxTextureSize,v={[Oa]:ii,[ii]:Oa,[Yi]:Yi},y=new As({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:n3,fragmentShader:i3}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const M=new ta;M.setAttribute("position",new qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new mi(M,y),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oS;let x=this.type;this.render=function(H,B,X){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||H.length===0)return;const U=r.getRenderTarget(),D=r.getActiveCubeFace(),k=r.getActiveMipmapLevel(),ct=r.state;ct.setBlending(Es),ct.buffers.color.setClear(1,1,1,1),ct.buffers.depth.setTest(!0),ct.setScissorTest(!1);const rt=x!==wa&&this.type===wa,mt=x===wa&&this.type!==wa;for(let ft=0,z=H.length;ft<z;ft++){const Z=H[ft],q=Z.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;o.copy(q.mapSize);const St=q.getFrameExtents();if(o.multiply(St),c.copy(q.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/St.x),o.x=c.x*St.x,q.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/St.y),o.y=c.y*St.y,q.mapSize.y=c.y)),q.map===null||rt===!0||mt===!0){const et=this.type!==wa?{minFilter:Yn,magFilter:Yn}:{};q.map!==null&&q.map.dispose(),q.map=new cr(o.x,o.y,et),q.map.texture.name=Z.name+".shadowMap",q.camera.updateProjectionMatrix()}r.setRenderTarget(q.map),r.clear();const O=q.getViewportCount();for(let et=0;et<O;et++){const xt=q.getViewport(et);f.set(c.x*xt.x,c.y*xt.y,c.x*xt.z,c.y*xt.w),ct.viewport(f),q.updateMatrices(Z,et),s=q.getFrustum(),w(B,X,q.camera,Z,this.type)}q.isPointLightShadow!==!0&&this.type===wa&&N(q,X),q.needsUpdate=!1}x=this.type,b.needsUpdate=!1,r.setRenderTarget(U,D,k)};function N(H,B){const X=t.update(T);y.defines.VSM_SAMPLES!==H.blurSamples&&(y.defines.VSM_SAMPLES=H.blurSamples,S.defines.VSM_SAMPLES=H.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new cr(o.x,o.y)),y.uniforms.shadow_pass.value=H.map.texture,y.uniforms.resolution.value=H.mapSize,y.uniforms.radius.value=H.radius,r.setRenderTarget(H.mapPass),r.clear(),r.renderBufferDirect(B,null,X,y,T,null),S.uniforms.shadow_pass.value=H.mapPass.texture,S.uniforms.resolution.value=H.mapSize,S.uniforms.radius.value=H.radius,r.setRenderTarget(H.map),r.clear(),r.renderBufferDirect(B,null,X,S,T,null)}function L(H,B,X,U){let D=null;const k=X.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(k!==void 0)D=k;else if(D=X.isPointLight===!0?d:h,r.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0){const ct=D.uuid,rt=B.uuid;let mt=p[ct];mt===void 0&&(mt={},p[ct]=mt);let ft=mt[rt];ft===void 0&&(ft=D.clone(),mt[rt]=ft,B.addEventListener("dispose",I)),D=ft}if(D.visible=B.visible,D.wireframe=B.wireframe,U===wa?D.side=B.shadowSide!==null?B.shadowSide:B.side:D.side=B.shadowSide!==null?B.shadowSide:v[B.side],D.alphaMap=B.alphaMap,D.alphaTest=B.alphaTest,D.map=B.map,D.clipShadows=B.clipShadows,D.clippingPlanes=B.clippingPlanes,D.clipIntersection=B.clipIntersection,D.displacementMap=B.displacementMap,D.displacementScale=B.displacementScale,D.displacementBias=B.displacementBias,D.wireframeLinewidth=B.wireframeLinewidth,D.linewidth=B.linewidth,X.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const ct=r.properties.get(D);ct.light=X}return D}function w(H,B,X,U,D){if(H.visible===!1)return;if(H.layers.test(B.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&D===wa)&&(!H.frustumCulled||s.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,H.matrixWorld);const rt=t.update(H),mt=H.material;if(Array.isArray(mt)){const ft=rt.groups;for(let z=0,Z=ft.length;z<Z;z++){const q=ft[z],St=mt[q.materialIndex];if(St&&St.visible){const O=L(H,St,U,D);H.onBeforeShadow(r,H,B,X,rt,O,q),r.renderBufferDirect(X,null,rt,O,H,q),H.onAfterShadow(r,H,B,X,rt,O,q)}}}else if(mt.visible){const ft=L(H,mt,U,D);H.onBeforeShadow(r,H,B,X,rt,ft,null),r.renderBufferDirect(X,null,rt,ft,H,null),H.onAfterShadow(r,H,B,X,rt,ft,null)}}const ct=H.children;for(let rt=0,mt=ct.length;rt<mt;rt++)w(ct[rt],B,X,U,D)}function I(H){H.target.removeEventListener("dispose",I);for(const X in p){const U=p[X],D=H.target.uuid;D in U&&(U[D].dispose(),delete U[D])}}}const s3={[Tp]:Ap,[wp]:Dp,[Rp]:Np,[_o]:Cp,[Ap]:Tp,[Dp]:wp,[Np]:Rp,[Cp]:_o};function r3(r,t){function e(){let j=!1;const Ot=new Oe;let ut=null;const _t=new Oe(0,0,0,0);return{setMask:function(zt){ut!==zt&&!j&&(r.colorMask(zt,zt,zt,zt),ut=zt)},setLocked:function(zt){j=zt},setClear:function(zt,Pt,re,Ze,fn){fn===!0&&(zt*=Ze,Pt*=Ze,re*=Ze),Ot.set(zt,Pt,re,Ze),_t.equals(Ot)===!1&&(r.clearColor(zt,Pt,re,Ze),_t.copy(Ot))},reset:function(){j=!1,ut=null,_t.set(-1,0,0,0)}}}function s(){let j=!1,Ot=!1,ut=null,_t=null,zt=null;return{setReversed:function(Pt){if(Ot!==Pt){const re=t.get("EXT_clip_control");Pt?re.clipControlEXT(re.LOWER_LEFT_EXT,re.ZERO_TO_ONE_EXT):re.clipControlEXT(re.LOWER_LEFT_EXT,re.NEGATIVE_ONE_TO_ONE_EXT),Ot=Pt;const Ze=zt;zt=null,this.setClear(Ze)}},getReversed:function(){return Ot},setTest:function(Pt){Pt?Rt(r.DEPTH_TEST):It(r.DEPTH_TEST)},setMask:function(Pt){ut!==Pt&&!j&&(r.depthMask(Pt),ut=Pt)},setFunc:function(Pt){if(Ot&&(Pt=s3[Pt]),_t!==Pt){switch(Pt){case Tp:r.depthFunc(r.NEVER);break;case Ap:r.depthFunc(r.ALWAYS);break;case wp:r.depthFunc(r.LESS);break;case _o:r.depthFunc(r.LEQUAL);break;case Rp:r.depthFunc(r.EQUAL);break;case Cp:r.depthFunc(r.GEQUAL);break;case Dp:r.depthFunc(r.GREATER);break;case Np:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}_t=Pt}},setLocked:function(Pt){j=Pt},setClear:function(Pt){zt!==Pt&&(Ot&&(Pt=1-Pt),r.clearDepth(Pt),zt=Pt)},reset:function(){j=!1,ut=null,_t=null,zt=null,Ot=!1}}}function o(){let j=!1,Ot=null,ut=null,_t=null,zt=null,Pt=null,re=null,Ze=null,fn=null;return{setTest:function(De){j||(De?Rt(r.STENCIL_TEST):It(r.STENCIL_TEST))},setMask:function(De){Ot!==De&&!j&&(r.stencilMask(De),Ot=De)},setFunc:function(De,ai,Mn){(ut!==De||_t!==ai||zt!==Mn)&&(r.stencilFunc(De,ai,Mn),ut=De,_t=ai,zt=Mn)},setOp:function(De,ai,Mn){(Pt!==De||re!==ai||Ze!==Mn)&&(r.stencilOp(De,ai,Mn),Pt=De,re=ai,Ze=Mn)},setLocked:function(De){j=De},setClear:function(De){fn!==De&&(r.clearStencil(De),fn=De)},reset:function(){j=!1,Ot=null,ut=null,_t=null,zt=null,Pt=null,re=null,Ze=null,fn=null}}}const c=new e,f=new s,h=new o,d=new WeakMap,p=new WeakMap;let g={},v={},y=new WeakMap,S=[],M=null,T=!1,b=null,x=null,N=null,L=null,w=null,I=null,H=null,B=new oe(0,0,0),X=0,U=!1,D=null,k=null,ct=null,rt=null,mt=null;const ft=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,Z=0;const q=r.getParameter(r.VERSION);q.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(q)[1]),z=Z>=1):q.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),z=Z>=2);let St=null,O={};const et=r.getParameter(r.SCISSOR_BOX),xt=r.getParameter(r.VIEWPORT),Mt=new Oe().fromArray(et),$=new Oe().fromArray(xt);function gt(j,Ot,ut,_t){const zt=new Uint8Array(4),Pt=r.createTexture();r.bindTexture(j,Pt),r.texParameteri(j,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(j,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let re=0;re<ut;re++)j===r.TEXTURE_3D||j===r.TEXTURE_2D_ARRAY?r.texImage3D(Ot,0,r.RGBA,1,1,_t,0,r.RGBA,r.UNSIGNED_BYTE,zt):r.texImage2D(Ot+re,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,zt);return Pt}const bt={};bt[r.TEXTURE_2D]=gt(r.TEXTURE_2D,r.TEXTURE_2D,1),bt[r.TEXTURE_CUBE_MAP]=gt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),bt[r.TEXTURE_2D_ARRAY]=gt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),bt[r.TEXTURE_3D]=gt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),Rt(r.DEPTH_TEST),f.setFunc(_o),Me(!1),ae(Zv),Rt(r.CULL_FACE),G(Es);function Rt(j){g[j]!==!0&&(r.enable(j),g[j]=!0)}function It(j){g[j]!==!1&&(r.disable(j),g[j]=!1)}function fe(j,Ot){return v[j]!==Ot?(r.bindFramebuffer(j,Ot),v[j]=Ot,j===r.DRAW_FRAMEBUFFER&&(v[r.FRAMEBUFFER]=Ot),j===r.FRAMEBUFFER&&(v[r.DRAW_FRAMEBUFFER]=Ot),!0):!1}function Jt(j,Ot){let ut=S,_t=!1;if(j){ut=y.get(Ot),ut===void 0&&(ut=[],y.set(Ot,ut));const zt=j.textures;if(ut.length!==zt.length||ut[0]!==r.COLOR_ATTACHMENT0){for(let Pt=0,re=zt.length;Pt<re;Pt++)ut[Pt]=r.COLOR_ATTACHMENT0+Pt;ut.length=zt.length,_t=!0}}else ut[0]!==r.BACK&&(ut[0]=r.BACK,_t=!0);_t&&r.drawBuffers(ut)}function Ke(j){return M!==j?(r.useProgram(j),M=j,!0):!1}const We={[ir]:r.FUNC_ADD,[mT]:r.FUNC_SUBTRACT,[gT]:r.FUNC_REVERSE_SUBTRACT};We[_T]=r.MIN,We[vT]=r.MAX;const ge={[yT]:r.ZERO,[xT]:r.ONE,[ST]:r.SRC_COLOR,[Mp]:r.SRC_ALPHA,[wT]:r.SRC_ALPHA_SATURATE,[TT]:r.DST_COLOR,[MT]:r.DST_ALPHA,[bT]:r.ONE_MINUS_SRC_COLOR,[Ep]:r.ONE_MINUS_SRC_ALPHA,[AT]:r.ONE_MINUS_DST_COLOR,[ET]:r.ONE_MINUS_DST_ALPHA,[RT]:r.CONSTANT_COLOR,[CT]:r.ONE_MINUS_CONSTANT_COLOR,[DT]:r.CONSTANT_ALPHA,[NT]:r.ONE_MINUS_CONSTANT_ALPHA};function G(j,Ot,ut,_t,zt,Pt,re,Ze,fn,De){if(j===Es){T===!0&&(It(r.BLEND),T=!1);return}if(T===!1&&(Rt(r.BLEND),T=!0),j!==pT){if(j!==b||De!==U){if((x!==ir||w!==ir)&&(r.blendEquation(r.FUNC_ADD),x=ir,w=ir),De)switch(j){case ho:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Qv:r.blendFunc(r.ONE,r.ONE);break;case Jv:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case $v:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case ho:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Qv:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Jv:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case $v:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}N=null,L=null,I=null,H=null,B.set(0,0,0),X=0,b=j,U=De}return}zt=zt||Ot,Pt=Pt||ut,re=re||_t,(Ot!==x||zt!==w)&&(r.blendEquationSeparate(We[Ot],We[zt]),x=Ot,w=zt),(ut!==N||_t!==L||Pt!==I||re!==H)&&(r.blendFuncSeparate(ge[ut],ge[_t],ge[Pt],ge[re]),N=ut,L=_t,I=Pt,H=re),(Ze.equals(B)===!1||fn!==X)&&(r.blendColor(Ze.r,Ze.g,Ze.b,fn),B.copy(Ze),X=fn),b=j,U=!1}function Zn(j,Ot){j.side===Yi?It(r.CULL_FACE):Rt(r.CULL_FACE);let ut=j.side===ii;Ot&&(ut=!ut),Me(ut),j.blending===ho&&j.transparent===!1?G(Es):G(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),f.setFunc(j.depthFunc),f.setTest(j.depthTest),f.setMask(j.depthWrite),c.setMask(j.colorWrite);const _t=j.stencilWrite;h.setTest(_t),_t&&(h.setMask(j.stencilWriteMask),h.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),h.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),Fe(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?Rt(r.SAMPLE_ALPHA_TO_COVERAGE):It(r.SAMPLE_ALPHA_TO_COVERAGE)}function Me(j){D!==j&&(j?r.frontFace(r.CW):r.frontFace(r.CCW),D=j)}function ae(j){j!==hT?(Rt(r.CULL_FACE),j!==k&&(j===Zv?r.cullFace(r.BACK):j===dT?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):It(r.CULL_FACE),k=j}function Yt(j){j!==ct&&(z&&r.lineWidth(j),ct=j)}function Fe(j,Ot,ut){j?(Rt(r.POLYGON_OFFSET_FILL),(rt!==Ot||mt!==ut)&&(r.polygonOffset(Ot,ut),rt=Ot,mt=ut)):It(r.POLYGON_OFFSET_FILL)}function Xt(j){j?Rt(r.SCISSOR_TEST):It(r.SCISSOR_TEST)}function P(j){j===void 0&&(j=r.TEXTURE0+ft-1),St!==j&&(r.activeTexture(j),St=j)}function R(j,Ot,ut){ut===void 0&&(St===null?ut=r.TEXTURE0+ft-1:ut=St);let _t=O[ut];_t===void 0&&(_t={type:void 0,texture:void 0},O[ut]=_t),(_t.type!==j||_t.texture!==Ot)&&(St!==ut&&(r.activeTexture(ut),St=ut),r.bindTexture(j,Ot||bt[j]),_t.type=j,_t.texture=Ot)}function it(){const j=O[St];j!==void 0&&j.type!==void 0&&(r.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function yt(){try{r.compressedTexImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Et(){try{r.compressedTexImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function dt(){try{r.texSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ft(){try{r.texSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ct(){try{r.compressedTexSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Dt(){try{r.compressedTexSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ee(){try{r.texStorage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function wt(){try{r.texStorage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Gt(){try{r.texImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Zt(){try{r.texImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function $t(j){Mt.equals(j)===!1&&(r.scissor(j.x,j.y,j.z,j.w),Mt.copy(j))}function Bt(j){$.equals(j)===!1&&(r.viewport(j.x,j.y,j.z,j.w),$.copy(j))}function de(j,Ot){let ut=p.get(Ot);ut===void 0&&(ut=new WeakMap,p.set(Ot,ut));let _t=ut.get(j);_t===void 0&&(_t=r.getUniformBlockIndex(Ot,j.name),ut.set(j,_t))}function ie(j,Ot){const _t=p.get(Ot).get(j);d.get(Ot)!==_t&&(r.uniformBlockBinding(Ot,_t,j.__bindingPointIndex),d.set(Ot,_t))}function He(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},St=null,O={},v={},y=new WeakMap,S=[],M=null,T=!1,b=null,x=null,N=null,L=null,w=null,I=null,H=null,B=new oe(0,0,0),X=0,U=!1,D=null,k=null,ct=null,rt=null,mt=null,Mt.set(0,0,r.canvas.width,r.canvas.height),$.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:Rt,disable:It,bindFramebuffer:fe,drawBuffers:Jt,useProgram:Ke,setBlending:G,setMaterial:Zn,setFlipSided:Me,setCullFace:ae,setLineWidth:Yt,setPolygonOffset:Fe,setScissorTest:Xt,activeTexture:P,bindTexture:R,unbindTexture:it,compressedTexImage2D:yt,compressedTexImage3D:Et,texImage2D:Gt,texImage3D:Zt,updateUBOMapping:de,uniformBlockBinding:ie,texStorage2D:Ee,texStorage3D:wt,texSubImage2D:dt,texSubImage3D:Ft,compressedTexSubImage2D:Ct,compressedTexSubImage3D:Dt,scissor:$t,viewport:Bt,reset:He}}function o3(r,t,e,s,o,c,f){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new se,g=new WeakMap;let v;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(P,R){return S?new OffscreenCanvas(P,R):Ql("canvas")}function T(P,R,it){let yt=1;const Et=Xt(P);if((Et.width>it||Et.height>it)&&(yt=it/Math.max(Et.width,Et.height)),yt<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const dt=Math.floor(yt*Et.width),Ft=Math.floor(yt*Et.height);v===void 0&&(v=M(dt,Ft));const Ct=R?M(dt,Ft):v;return Ct.width=dt,Ct.height=Ft,Ct.getContext("2d").drawImage(P,0,0,dt,Ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Et.width+"x"+Et.height+") to ("+dt+"x"+Ft+")."),Ct}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Et.width+"x"+Et.height+")."),P;return P}function b(P){return P.generateMipmaps}function x(P){r.generateMipmap(P)}function N(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(P,R,it,yt,Et=!1){if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let dt=R;if(R===r.RED&&(it===r.FLOAT&&(dt=r.R32F),it===r.HALF_FLOAT&&(dt=r.R16F),it===r.UNSIGNED_BYTE&&(dt=r.R8)),R===r.RED_INTEGER&&(it===r.UNSIGNED_BYTE&&(dt=r.R8UI),it===r.UNSIGNED_SHORT&&(dt=r.R16UI),it===r.UNSIGNED_INT&&(dt=r.R32UI),it===r.BYTE&&(dt=r.R8I),it===r.SHORT&&(dt=r.R16I),it===r.INT&&(dt=r.R32I)),R===r.RG&&(it===r.FLOAT&&(dt=r.RG32F),it===r.HALF_FLOAT&&(dt=r.RG16F),it===r.UNSIGNED_BYTE&&(dt=r.RG8)),R===r.RG_INTEGER&&(it===r.UNSIGNED_BYTE&&(dt=r.RG8UI),it===r.UNSIGNED_SHORT&&(dt=r.RG16UI),it===r.UNSIGNED_INT&&(dt=r.RG32UI),it===r.BYTE&&(dt=r.RG8I),it===r.SHORT&&(dt=r.RG16I),it===r.INT&&(dt=r.RG32I)),R===r.RGB_INTEGER&&(it===r.UNSIGNED_BYTE&&(dt=r.RGB8UI),it===r.UNSIGNED_SHORT&&(dt=r.RGB16UI),it===r.UNSIGNED_INT&&(dt=r.RGB32UI),it===r.BYTE&&(dt=r.RGB8I),it===r.SHORT&&(dt=r.RGB16I),it===r.INT&&(dt=r.RGB32I)),R===r.RGBA_INTEGER&&(it===r.UNSIGNED_BYTE&&(dt=r.RGBA8UI),it===r.UNSIGNED_SHORT&&(dt=r.RGBA16UI),it===r.UNSIGNED_INT&&(dt=r.RGBA32UI),it===r.BYTE&&(dt=r.RGBA8I),it===r.SHORT&&(dt=r.RGBA16I),it===r.INT&&(dt=r.RGBA32I)),R===r.RGB&&it===r.UNSIGNED_INT_5_9_9_9_REV&&(dt=r.RGB9_E5),R===r.RGBA){const Ft=Et?of:Re.getTransfer(yt);it===r.FLOAT&&(dt=r.RGBA32F),it===r.HALF_FLOAT&&(dt=r.RGBA16F),it===r.UNSIGNED_BYTE&&(dt=Ft===Xe?r.SRGB8_ALPHA8:r.RGBA8),it===r.UNSIGNED_SHORT_4_4_4_4&&(dt=r.RGBA4),it===r.UNSIGNED_SHORT_5_5_5_1&&(dt=r.RGB5_A1)}return(dt===r.R16F||dt===r.R32F||dt===r.RG16F||dt===r.RG32F||dt===r.RGBA16F||dt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),dt}function w(P,R){let it;return P?R===null||R===lr||R===Wl?it=r.DEPTH24_STENCIL8:R===Pi?it=r.DEPTH32F_STENCIL8:R===jl&&(it=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===lr||R===Wl?it=r.DEPTH_COMPONENT24:R===Pi?it=r.DEPTH_COMPONENT32F:R===jl&&(it=r.DEPTH_COMPONENT16),it}function I(P,R){return b(P)===!0||P.isFramebufferTexture&&P.minFilter!==Yn&&P.minFilter!==pi?Math.log2(Math.max(R.width,R.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?R.mipmaps.length:1}function H(P){const R=P.target;R.removeEventListener("dispose",H),X(R),R.isVideoTexture&&g.delete(R)}function B(P){const R=P.target;R.removeEventListener("dispose",B),D(R)}function X(P){const R=s.get(P);if(R.__webglInit===void 0)return;const it=P.source,yt=y.get(it);if(yt){const Et=yt[R.__cacheKey];Et.usedTimes--,Et.usedTimes===0&&U(P),Object.keys(yt).length===0&&y.delete(it)}s.remove(P)}function U(P){const R=s.get(P);r.deleteTexture(R.__webglTexture);const it=P.source,yt=y.get(it);delete yt[R.__cacheKey],f.memory.textures--}function D(P){const R=s.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),s.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let yt=0;yt<6;yt++){if(Array.isArray(R.__webglFramebuffer[yt]))for(let Et=0;Et<R.__webglFramebuffer[yt].length;Et++)r.deleteFramebuffer(R.__webglFramebuffer[yt][Et]);else r.deleteFramebuffer(R.__webglFramebuffer[yt]);R.__webglDepthbuffer&&r.deleteRenderbuffer(R.__webglDepthbuffer[yt])}else{if(Array.isArray(R.__webglFramebuffer))for(let yt=0;yt<R.__webglFramebuffer.length;yt++)r.deleteFramebuffer(R.__webglFramebuffer[yt]);else r.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&r.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&r.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let yt=0;yt<R.__webglColorRenderbuffer.length;yt++)R.__webglColorRenderbuffer[yt]&&r.deleteRenderbuffer(R.__webglColorRenderbuffer[yt]);R.__webglDepthRenderbuffer&&r.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const it=P.textures;for(let yt=0,Et=it.length;yt<Et;yt++){const dt=s.get(it[yt]);dt.__webglTexture&&(r.deleteTexture(dt.__webglTexture),f.memory.textures--),s.remove(it[yt])}s.remove(P)}let k=0;function ct(){k=0}function rt(){const P=k;return P>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+o.maxTextures),k+=1,P}function mt(P){const R=[];return R.push(P.wrapS),R.push(P.wrapT),R.push(P.wrapR||0),R.push(P.magFilter),R.push(P.minFilter),R.push(P.anisotropy),R.push(P.internalFormat),R.push(P.format),R.push(P.type),R.push(P.generateMipmaps),R.push(P.premultiplyAlpha),R.push(P.flipY),R.push(P.unpackAlignment),R.push(P.colorSpace),R.join()}function ft(P,R){const it=s.get(P);if(P.isVideoTexture&&Yt(P),P.isRenderTargetTexture===!1&&P.version>0&&it.__version!==P.version){const yt=P.image;if(yt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(yt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(it,P,R);return}}e.bindTexture(r.TEXTURE_2D,it.__webglTexture,r.TEXTURE0+R)}function z(P,R){const it=s.get(P);if(P.version>0&&it.__version!==P.version){$(it,P,R);return}e.bindTexture(r.TEXTURE_2D_ARRAY,it.__webglTexture,r.TEXTURE0+R)}function Z(P,R){const it=s.get(P);if(P.version>0&&it.__version!==P.version){$(it,P,R);return}e.bindTexture(r.TEXTURE_3D,it.__webglTexture,r.TEXTURE0+R)}function q(P,R){const it=s.get(P);if(P.version>0&&it.__version!==P.version){gt(it,P,R);return}e.bindTexture(r.TEXTURE_CUBE_MAP,it.__webglTexture,r.TEXTURE0+R)}const St={[xo]:r.REPEAT,[bs]:r.CLAMP_TO_EDGE,[rf]:r.MIRRORED_REPEAT},O={[Yn]:r.NEAREST,[fS]:r.NEAREST_MIPMAP_NEAREST,[Il]:r.NEAREST_MIPMAP_LINEAR,[pi]:r.LINEAR,[Yu]:r.LINEAR_MIPMAP_NEAREST,[Ca]:r.LINEAR_MIPMAP_LINEAR},et={[YT]:r.NEVER,[$T]:r.ALWAYS,[qT]:r.LESS,[MS]:r.LEQUAL,[KT]:r.EQUAL,[JT]:r.GEQUAL,[ZT]:r.GREATER,[QT]:r.NOTEQUAL};function xt(P,R){if(R.type===Pi&&t.has("OES_texture_float_linear")===!1&&(R.magFilter===pi||R.magFilter===Yu||R.magFilter===Il||R.magFilter===Ca||R.minFilter===pi||R.minFilter===Yu||R.minFilter===Il||R.minFilter===Ca)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,St[R.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,St[R.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,St[R.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,O[R.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,O[R.minFilter]),R.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,et[R.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===Yn||R.minFilter!==Il&&R.minFilter!==Ca||R.type===Pi&&t.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||s.get(R).__currentAnisotropy){const it=t.get("EXT_texture_filter_anisotropic");r.texParameterf(P,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,o.getMaxAnisotropy())),s.get(R).__currentAnisotropy=R.anisotropy}}}function Mt(P,R){let it=!1;P.__webglInit===void 0&&(P.__webglInit=!0,R.addEventListener("dispose",H));const yt=R.source;let Et=y.get(yt);Et===void 0&&(Et={},y.set(yt,Et));const dt=mt(R);if(dt!==P.__cacheKey){Et[dt]===void 0&&(Et[dt]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,it=!0),Et[dt].usedTimes++;const Ft=Et[P.__cacheKey];Ft!==void 0&&(Et[P.__cacheKey].usedTimes--,Ft.usedTimes===0&&U(R)),P.__cacheKey=dt,P.__webglTexture=Et[dt].texture}return it}function $(P,R,it){let yt=r.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(yt=r.TEXTURE_2D_ARRAY),R.isData3DTexture&&(yt=r.TEXTURE_3D);const Et=Mt(P,R),dt=R.source;e.bindTexture(yt,P.__webglTexture,r.TEXTURE0+it);const Ft=s.get(dt);if(dt.version!==Ft.__version||Et===!0){e.activeTexture(r.TEXTURE0+it);const Ct=Re.getPrimaries(Re.workingColorSpace),Dt=R.colorSpace===Ss?null:Re.getPrimaries(R.colorSpace),Ee=R.colorSpace===Ss||Ct===Dt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,R.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,R.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let wt=T(R.image,!1,o.maxTextureSize);wt=Fe(R,wt);const Gt=c.convert(R.format,R.colorSpace),Zt=c.convert(R.type);let $t=L(R.internalFormat,Gt,Zt,R.colorSpace,R.isVideoTexture);xt(yt,R);let Bt;const de=R.mipmaps,ie=R.isVideoTexture!==!0,He=Ft.__version===void 0||Et===!0,j=dt.dataReady,Ot=I(R,wt);if(R.isDepthTexture)$t=w(R.format===ql,R.type),He&&(ie?e.texStorage2D(r.TEXTURE_2D,1,$t,wt.width,wt.height):e.texImage2D(r.TEXTURE_2D,0,$t,wt.width,wt.height,0,Gt,Zt,null));else if(R.isDataTexture)if(de.length>0){ie&&He&&e.texStorage2D(r.TEXTURE_2D,Ot,$t,de[0].width,de[0].height);for(let ut=0,_t=de.length;ut<_t;ut++)Bt=de[ut],ie?j&&e.texSubImage2D(r.TEXTURE_2D,ut,0,0,Bt.width,Bt.height,Gt,Zt,Bt.data):e.texImage2D(r.TEXTURE_2D,ut,$t,Bt.width,Bt.height,0,Gt,Zt,Bt.data);R.generateMipmaps=!1}else ie?(He&&e.texStorage2D(r.TEXTURE_2D,Ot,$t,wt.width,wt.height),j&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,wt.width,wt.height,Gt,Zt,wt.data)):e.texImage2D(r.TEXTURE_2D,0,$t,wt.width,wt.height,0,Gt,Zt,wt.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){ie&&He&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Ot,$t,de[0].width,de[0].height,wt.depth);for(let ut=0,_t=de.length;ut<_t;ut++)if(Bt=de[ut],R.format!==Ai)if(Gt!==null)if(ie){if(j)if(R.layerUpdates.size>0){const zt=Vy(Bt.width,Bt.height,R.format,R.type);for(const Pt of R.layerUpdates){const re=Bt.data.subarray(Pt*zt/Bt.data.BYTES_PER_ELEMENT,(Pt+1)*zt/Bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ut,0,0,Pt,Bt.width,Bt.height,1,Gt,re)}R.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ut,0,0,0,Bt.width,Bt.height,wt.depth,Gt,Bt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ut,$t,Bt.width,Bt.height,wt.depth,0,Bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ie?j&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,ut,0,0,0,Bt.width,Bt.height,wt.depth,Gt,Zt,Bt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,ut,$t,Bt.width,Bt.height,wt.depth,0,Gt,Zt,Bt.data)}else{ie&&He&&e.texStorage2D(r.TEXTURE_2D,Ot,$t,de[0].width,de[0].height);for(let ut=0,_t=de.length;ut<_t;ut++)Bt=de[ut],R.format!==Ai?Gt!==null?ie?j&&e.compressedTexSubImage2D(r.TEXTURE_2D,ut,0,0,Bt.width,Bt.height,Gt,Bt.data):e.compressedTexImage2D(r.TEXTURE_2D,ut,$t,Bt.width,Bt.height,0,Bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?j&&e.texSubImage2D(r.TEXTURE_2D,ut,0,0,Bt.width,Bt.height,Gt,Zt,Bt.data):e.texImage2D(r.TEXTURE_2D,ut,$t,Bt.width,Bt.height,0,Gt,Zt,Bt.data)}else if(R.isDataArrayTexture)if(ie){if(He&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Ot,$t,wt.width,wt.height,wt.depth),j)if(R.layerUpdates.size>0){const ut=Vy(wt.width,wt.height,R.format,R.type);for(const _t of R.layerUpdates){const zt=wt.data.subarray(_t*ut/wt.data.BYTES_PER_ELEMENT,(_t+1)*ut/wt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,_t,wt.width,wt.height,1,Gt,Zt,zt)}R.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,wt.width,wt.height,wt.depth,Gt,Zt,wt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,$t,wt.width,wt.height,wt.depth,0,Gt,Zt,wt.data);else if(R.isData3DTexture)ie?(He&&e.texStorage3D(r.TEXTURE_3D,Ot,$t,wt.width,wt.height,wt.depth),j&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,wt.width,wt.height,wt.depth,Gt,Zt,wt.data)):e.texImage3D(r.TEXTURE_3D,0,$t,wt.width,wt.height,wt.depth,0,Gt,Zt,wt.data);else if(R.isFramebufferTexture){if(He)if(ie)e.texStorage2D(r.TEXTURE_2D,Ot,$t,wt.width,wt.height);else{let ut=wt.width,_t=wt.height;for(let zt=0;zt<Ot;zt++)e.texImage2D(r.TEXTURE_2D,zt,$t,ut,_t,0,Gt,Zt,null),ut>>=1,_t>>=1}}else if(de.length>0){if(ie&&He){const ut=Xt(de[0]);e.texStorage2D(r.TEXTURE_2D,Ot,$t,ut.width,ut.height)}for(let ut=0,_t=de.length;ut<_t;ut++)Bt=de[ut],ie?j&&e.texSubImage2D(r.TEXTURE_2D,ut,0,0,Gt,Zt,Bt):e.texImage2D(r.TEXTURE_2D,ut,$t,Gt,Zt,Bt);R.generateMipmaps=!1}else if(ie){if(He){const ut=Xt(wt);e.texStorage2D(r.TEXTURE_2D,Ot,$t,ut.width,ut.height)}j&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,Gt,Zt,wt)}else e.texImage2D(r.TEXTURE_2D,0,$t,Gt,Zt,wt);b(R)&&x(yt),Ft.__version=dt.version,R.onUpdate&&R.onUpdate(R)}P.__version=R.version}function gt(P,R,it){if(R.image.length!==6)return;const yt=Mt(P,R),Et=R.source;e.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+it);const dt=s.get(Et);if(Et.version!==dt.__version||yt===!0){e.activeTexture(r.TEXTURE0+it);const Ft=Re.getPrimaries(Re.workingColorSpace),Ct=R.colorSpace===Ss?null:Re.getPrimaries(R.colorSpace),Dt=R.colorSpace===Ss||Ft===Ct?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,R.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,R.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);const Ee=R.isCompressedTexture||R.image[0].isCompressedTexture,wt=R.image[0]&&R.image[0].isDataTexture,Gt=[];for(let _t=0;_t<6;_t++)!Ee&&!wt?Gt[_t]=T(R.image[_t],!0,o.maxCubemapSize):Gt[_t]=wt?R.image[_t].image:R.image[_t],Gt[_t]=Fe(R,Gt[_t]);const Zt=Gt[0],$t=c.convert(R.format,R.colorSpace),Bt=c.convert(R.type),de=L(R.internalFormat,$t,Bt,R.colorSpace),ie=R.isVideoTexture!==!0,He=dt.__version===void 0||yt===!0,j=Et.dataReady;let Ot=I(R,Zt);xt(r.TEXTURE_CUBE_MAP,R);let ut;if(Ee){ie&&He&&e.texStorage2D(r.TEXTURE_CUBE_MAP,Ot,de,Zt.width,Zt.height);for(let _t=0;_t<6;_t++){ut=Gt[_t].mipmaps;for(let zt=0;zt<ut.length;zt++){const Pt=ut[zt];R.format!==Ai?$t!==null?ie?j&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,zt,0,0,Pt.width,Pt.height,$t,Pt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,zt,de,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ie?j&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,zt,0,0,Pt.width,Pt.height,$t,Bt,Pt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,zt,de,Pt.width,Pt.height,0,$t,Bt,Pt.data)}}}else{if(ut=R.mipmaps,ie&&He){ut.length>0&&Ot++;const _t=Xt(Gt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,Ot,de,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(wt){ie?j&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Gt[_t].width,Gt[_t].height,$t,Bt,Gt[_t].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,de,Gt[_t].width,Gt[_t].height,0,$t,Bt,Gt[_t].data);for(let zt=0;zt<ut.length;zt++){const re=ut[zt].image[_t].image;ie?j&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,zt+1,0,0,re.width,re.height,$t,Bt,re.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,zt+1,de,re.width,re.height,0,$t,Bt,re.data)}}else{ie?j&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,$t,Bt,Gt[_t]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,de,$t,Bt,Gt[_t]);for(let zt=0;zt<ut.length;zt++){const Pt=ut[zt];ie?j&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,zt+1,0,0,$t,Bt,Pt.image[_t]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,zt+1,de,$t,Bt,Pt.image[_t])}}}b(R)&&x(r.TEXTURE_CUBE_MAP),dt.__version=Et.version,R.onUpdate&&R.onUpdate(R)}P.__version=R.version}function bt(P,R,it,yt,Et,dt){const Ft=c.convert(it.format,it.colorSpace),Ct=c.convert(it.type),Dt=L(it.internalFormat,Ft,Ct,it.colorSpace),Ee=s.get(R),wt=s.get(it);if(wt.__renderTarget=R,!Ee.__hasExternalTextures){const Gt=Math.max(1,R.width>>dt),Zt=Math.max(1,R.height>>dt);Et===r.TEXTURE_3D||Et===r.TEXTURE_2D_ARRAY?e.texImage3D(Et,dt,Dt,Gt,Zt,R.depth,0,Ft,Ct,null):e.texImage2D(Et,dt,Dt,Gt,Zt,0,Ft,Ct,null)}e.bindFramebuffer(r.FRAMEBUFFER,P),ae(R)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,yt,Et,wt.__webglTexture,0,Me(R)):(Et===r.TEXTURE_2D||Et>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Et<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,yt,Et,wt.__webglTexture,dt),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Rt(P,R,it){if(r.bindRenderbuffer(r.RENDERBUFFER,P),R.depthBuffer){const yt=R.depthTexture,Et=yt&&yt.isDepthTexture?yt.type:null,dt=w(R.stencilBuffer,Et),Ft=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ct=Me(R);ae(R)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ct,dt,R.width,R.height):it?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ct,dt,R.width,R.height):r.renderbufferStorage(r.RENDERBUFFER,dt,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ft,r.RENDERBUFFER,P)}else{const yt=R.textures;for(let Et=0;Et<yt.length;Et++){const dt=yt[Et],Ft=c.convert(dt.format,dt.colorSpace),Ct=c.convert(dt.type),Dt=L(dt.internalFormat,Ft,Ct,dt.colorSpace),Ee=Me(R);it&&ae(R)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ee,Dt,R.width,R.height):ae(R)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ee,Dt,R.width,R.height):r.renderbufferStorage(r.RENDERBUFFER,Dt,R.width,R.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function It(P,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,P),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const yt=s.get(R.depthTexture);yt.__renderTarget=R,(!yt.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),ft(R.depthTexture,0);const Et=yt.__webglTexture,dt=Me(R);if(R.depthTexture.format===Yl)ae(R)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Et,0,dt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Et,0);else if(R.depthTexture.format===ql)ae(R)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Et,0,dt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Et,0);else throw new Error("Unknown depthTexture format")}function fe(P){const R=s.get(P),it=P.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==P.depthTexture){const yt=P.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),yt){const Et=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,yt.removeEventListener("dispose",Et)};yt.addEventListener("dispose",Et),R.__depthDisposeCallback=Et}R.__boundDepthTexture=yt}if(P.depthTexture&&!R.__autoAllocateDepthBuffer){if(it)throw new Error("target.depthTexture not supported in Cube render targets");It(R.__webglFramebuffer,P)}else if(it){R.__webglDepthbuffer=[];for(let yt=0;yt<6;yt++)if(e.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer[yt]),R.__webglDepthbuffer[yt]===void 0)R.__webglDepthbuffer[yt]=r.createRenderbuffer(),Rt(R.__webglDepthbuffer[yt],P,!1);else{const Et=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,dt=R.__webglDepthbuffer[yt];r.bindRenderbuffer(r.RENDERBUFFER,dt),r.framebufferRenderbuffer(r.FRAMEBUFFER,Et,r.RENDERBUFFER,dt)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=r.createRenderbuffer(),Rt(R.__webglDepthbuffer,P,!1);else{const yt=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Et=R.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Et),r.framebufferRenderbuffer(r.FRAMEBUFFER,yt,r.RENDERBUFFER,Et)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Jt(P,R,it){const yt=s.get(P);R!==void 0&&bt(yt.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),it!==void 0&&fe(P)}function Ke(P){const R=P.texture,it=s.get(P),yt=s.get(R);P.addEventListener("dispose",B);const Et=P.textures,dt=P.isWebGLCubeRenderTarget===!0,Ft=Et.length>1;if(Ft||(yt.__webglTexture===void 0&&(yt.__webglTexture=r.createTexture()),yt.__version=R.version,f.memory.textures++),dt){it.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(R.mipmaps&&R.mipmaps.length>0){it.__webglFramebuffer[Ct]=[];for(let Dt=0;Dt<R.mipmaps.length;Dt++)it.__webglFramebuffer[Ct][Dt]=r.createFramebuffer()}else it.__webglFramebuffer[Ct]=r.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){it.__webglFramebuffer=[];for(let Ct=0;Ct<R.mipmaps.length;Ct++)it.__webglFramebuffer[Ct]=r.createFramebuffer()}else it.__webglFramebuffer=r.createFramebuffer();if(Ft)for(let Ct=0,Dt=Et.length;Ct<Dt;Ct++){const Ee=s.get(Et[Ct]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=r.createTexture(),f.memory.textures++)}if(P.samples>0&&ae(P)===!1){it.__webglMultisampledFramebuffer=r.createFramebuffer(),it.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,it.__webglMultisampledFramebuffer);for(let Ct=0;Ct<Et.length;Ct++){const Dt=Et[Ct];it.__webglColorRenderbuffer[Ct]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,it.__webglColorRenderbuffer[Ct]);const Ee=c.convert(Dt.format,Dt.colorSpace),wt=c.convert(Dt.type),Gt=L(Dt.internalFormat,Ee,wt,Dt.colorSpace,P.isXRRenderTarget===!0),Zt=Me(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,Zt,Gt,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ct,r.RENDERBUFFER,it.__webglColorRenderbuffer[Ct])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(it.__webglDepthRenderbuffer=r.createRenderbuffer(),Rt(it.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(dt){e.bindTexture(r.TEXTURE_CUBE_MAP,yt.__webglTexture),xt(r.TEXTURE_CUBE_MAP,R);for(let Ct=0;Ct<6;Ct++)if(R.mipmaps&&R.mipmaps.length>0)for(let Dt=0;Dt<R.mipmaps.length;Dt++)bt(it.__webglFramebuffer[Ct][Dt],P,R,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Dt);else bt(it.__webglFramebuffer[Ct],P,R,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);b(R)&&x(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ft){for(let Ct=0,Dt=Et.length;Ct<Dt;Ct++){const Ee=Et[Ct],wt=s.get(Ee);e.bindTexture(r.TEXTURE_2D,wt.__webglTexture),xt(r.TEXTURE_2D,Ee),bt(it.__webglFramebuffer,P,Ee,r.COLOR_ATTACHMENT0+Ct,r.TEXTURE_2D,0),b(Ee)&&x(r.TEXTURE_2D)}e.unbindTexture()}else{let Ct=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ct=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(Ct,yt.__webglTexture),xt(Ct,R),R.mipmaps&&R.mipmaps.length>0)for(let Dt=0;Dt<R.mipmaps.length;Dt++)bt(it.__webglFramebuffer[Dt],P,R,r.COLOR_ATTACHMENT0,Ct,Dt);else bt(it.__webglFramebuffer,P,R,r.COLOR_ATTACHMENT0,Ct,0);b(R)&&x(Ct),e.unbindTexture()}P.depthBuffer&&fe(P)}function We(P){const R=P.textures;for(let it=0,yt=R.length;it<yt;it++){const Et=R[it];if(b(Et)){const dt=N(P),Ft=s.get(Et).__webglTexture;e.bindTexture(dt,Ft),x(dt),e.unbindTexture()}}}const ge=[],G=[];function Zn(P){if(P.samples>0){if(ae(P)===!1){const R=P.textures,it=P.width,yt=P.height;let Et=r.COLOR_BUFFER_BIT;const dt=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ft=s.get(P),Ct=R.length>1;if(Ct)for(let Dt=0;Dt<R.length;Dt++)e.bindFramebuffer(r.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Dt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Ft.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Dt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let Dt=0;Dt<R.length;Dt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Et|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Et|=r.STENCIL_BUFFER_BIT)),Ct){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ft.__webglColorRenderbuffer[Dt]);const Ee=s.get(R[Dt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ee,0)}r.blitFramebuffer(0,0,it,yt,0,0,it,yt,Et,r.NEAREST),d===!0&&(ge.length=0,G.length=0,ge.push(r.COLOR_ATTACHMENT0+Dt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(ge.push(dt),G.push(dt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,G)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ge))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ct)for(let Dt=0;Dt<R.length;Dt++){e.bindFramebuffer(r.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Dt,r.RENDERBUFFER,Ft.__webglColorRenderbuffer[Dt]);const Ee=s.get(R[Dt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Ft.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Dt,r.TEXTURE_2D,Ee,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&d){const R=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[R])}}}function Me(P){return Math.min(o.maxSamples,P.samples)}function ae(P){const R=s.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Yt(P){const R=f.render.frame;g.get(P)!==R&&(g.set(P,R),P.update())}function Fe(P,R){const it=P.colorSpace,yt=P.format,Et=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||it!==Kn&&it!==Ss&&(Re.getTransfer(it)===Xe?(yt!==Ai||Et!==Pa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",it)),R}function Xt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(p.width=P.naturalWidth||P.width,p.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(p.width=P.displayWidth,p.height=P.displayHeight):(p.width=P.width,p.height=P.height),p}this.allocateTextureUnit=rt,this.resetTextureUnits=ct,this.setTexture2D=ft,this.setTexture2DArray=z,this.setTexture3D=Z,this.setTextureCube=q,this.rebindTextures=Jt,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=Zn,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=ae}function l3(r,t){function e(s,o=Ss){let c;const f=Re.getTransfer(o);if(s===Pa)return r.UNSIGNED_BYTE;if(s===Pm)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Im)return r.UNSIGNED_SHORT_5_5_5_1;if(s===pS)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===hS)return r.BYTE;if(s===dS)return r.SHORT;if(s===jl)return r.UNSIGNED_SHORT;if(s===Om)return r.INT;if(s===lr)return r.UNSIGNED_INT;if(s===Pi)return r.FLOAT;if(s===tc)return r.HALF_FLOAT;if(s===mS)return r.ALPHA;if(s===gS)return r.RGB;if(s===Ai)return r.RGBA;if(s===_S)return r.LUMINANCE;if(s===vS)return r.LUMINANCE_ALPHA;if(s===Yl)return r.DEPTH_COMPONENT;if(s===ql)return r.DEPTH_STENCIL;if(s===Bm)return r.RED;if(s===zm)return r.RED_INTEGER;if(s===yS)return r.RG;if(s===Fm)return r.RG_INTEGER;if(s===Hm)return r.RGBA_INTEGER;if(s===qu||s===Ku||s===Zu||s===Qu)if(f===Xe)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===qu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ku)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Zu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Qu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===qu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ku)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Zu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Qu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Op||s===Pp||s===Ip||s===Bp)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Op)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Pp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ip)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Bp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===zp||s===Fp||s===Hp)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===zp||s===Fp)return f===Xe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Hp)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Gp||s===kp||s===Vp||s===Xp||s===jp||s===Wp||s===Yp||s===qp||s===Kp||s===Zp||s===Qp||s===Jp||s===$p||s===tm)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Gp)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===kp)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Vp)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Xp)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===jp)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Wp)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Yp)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===qp)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Kp)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Zp)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Qp)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Jp)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===$p)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===tm)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ju||s===em||s===nm)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Ju)return f===Xe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===em)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===nm)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===xS||s===im||s===am||s===sm)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Ju)return c.COMPRESSED_RED_RGTC1_EXT;if(s===im)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===am)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===sm)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Wl?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:e}}const c3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,u3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class f3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,s){if(this.texture===null){const o=new Cn,c=t.properties.get(o);c.__webglTexture=e.texture,(e.depthNear!==s.depthNear||e.depthFar!==s.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=o}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,s=new As({vertexShader:c3,fragmentShader:u3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new mi(new gf(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class h3 extends hr{constructor(t,e){super();const s=this;let o=null,c=1,f=null,h="local-floor",d=1,p=null,g=null,v=null,y=null,S=null,M=null;const T=new f3,b=e.getContextAttributes();let x=null,N=null;const L=[],w=[],I=new se;let H=null;const B=new Wn;B.viewport=new Oe;const X=new Wn;X.viewport=new Oe;const U=[B,X],D=new M1;let k=null,ct=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let gt=L[$];return gt===void 0&&(gt=new Qd,L[$]=gt),gt.getTargetRaySpace()},this.getControllerGrip=function($){let gt=L[$];return gt===void 0&&(gt=new Qd,L[$]=gt),gt.getGripSpace()},this.getHand=function($){let gt=L[$];return gt===void 0&&(gt=new Qd,L[$]=gt),gt.getHandSpace()};function rt($){const gt=w.indexOf($.inputSource);if(gt===-1)return;const bt=L[gt];bt!==void 0&&(bt.update($.inputSource,$.frame,p||f),bt.dispatchEvent({type:$.type,data:$.inputSource}))}function mt(){o.removeEventListener("select",rt),o.removeEventListener("selectstart",rt),o.removeEventListener("selectend",rt),o.removeEventListener("squeeze",rt),o.removeEventListener("squeezestart",rt),o.removeEventListener("squeezeend",rt),o.removeEventListener("end",mt),o.removeEventListener("inputsourceschange",ft);for(let $=0;$<L.length;$++){const gt=w[$];gt!==null&&(w[$]=null,L[$].disconnect(gt))}k=null,ct=null,T.reset(),t.setRenderTarget(x),S=null,y=null,v=null,o=null,N=null,Mt.stop(),s.isPresenting=!1,t.setPixelRatio(H),t.setSize(I.width,I.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){c=$,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){h=$,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function($){p=$},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return v},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function($){if(o=$,o!==null){if(x=t.getRenderTarget(),o.addEventListener("select",rt),o.addEventListener("selectstart",rt),o.addEventListener("selectend",rt),o.addEventListener("squeeze",rt),o.addEventListener("squeezestart",rt),o.addEventListener("squeezeend",rt),o.addEventListener("end",mt),o.addEventListener("inputsourceschange",ft),b.xrCompatible!==!0&&await e.makeXRCompatible(),H=t.getPixelRatio(),t.getSize(I),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let bt=null,Rt=null,It=null;b.depth&&(It=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,bt=b.stencil?ql:Yl,Rt=b.stencil?Wl:lr);const fe={colorFormat:e.RGBA8,depthFormat:It,scaleFactor:c};v=new XRWebGLBinding(o,e),y=v.createProjectionLayer(fe),o.updateRenderState({layers:[y]}),t.setPixelRatio(1),t.setSize(y.textureWidth,y.textureHeight,!1),N=new cr(y.textureWidth,y.textureHeight,{format:Ai,type:Pa,depthTexture:new zS(y.textureWidth,y.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const bt={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(o,e,bt),o.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),N=new cr(S.framebufferWidth,S.framebufferHeight,{format:Ai,type:Pa,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(d),p=null,f=await o.requestReferenceSpace(h),Mt.setContext(o),Mt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function ft($){for(let gt=0;gt<$.removed.length;gt++){const bt=$.removed[gt],Rt=w.indexOf(bt);Rt>=0&&(w[Rt]=null,L[Rt].disconnect(bt))}for(let gt=0;gt<$.added.length;gt++){const bt=$.added[gt];let Rt=w.indexOf(bt);if(Rt===-1){for(let fe=0;fe<L.length;fe++)if(fe>=w.length){w.push(bt),Rt=fe;break}else if(w[fe]===null){w[fe]=bt,Rt=fe;break}if(Rt===-1)break}const It=L[Rt];It&&It.connect(bt)}}const z=new W,Z=new W;function q($,gt,bt){z.setFromMatrixPosition(gt.matrixWorld),Z.setFromMatrixPosition(bt.matrixWorld);const Rt=z.distanceTo(Z),It=gt.projectionMatrix.elements,fe=bt.projectionMatrix.elements,Jt=It[14]/(It[10]-1),Ke=It[14]/(It[10]+1),We=(It[9]+1)/It[5],ge=(It[9]-1)/It[5],G=(It[8]-1)/It[0],Zn=(fe[8]+1)/fe[0],Me=Jt*G,ae=Jt*Zn,Yt=Rt/(-G+Zn),Fe=Yt*-G;if(gt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Fe),$.translateZ(Yt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),It[10]===-1)$.projectionMatrix.copy(gt.projectionMatrix),$.projectionMatrixInverse.copy(gt.projectionMatrixInverse);else{const Xt=Jt+Yt,P=Ke+Yt,R=Me-Fe,it=ae+(Rt-Fe),yt=We*Ke/P*Xt,Et=ge*Ke/P*Xt;$.projectionMatrix.makePerspective(R,it,yt,Et,Xt,P),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function St($,gt){gt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(gt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(o===null)return;let gt=$.near,bt=$.far;T.texture!==null&&(T.depthNear>0&&(gt=T.depthNear),T.depthFar>0&&(bt=T.depthFar)),D.near=X.near=B.near=gt,D.far=X.far=B.far=bt,(k!==D.near||ct!==D.far)&&(o.updateRenderState({depthNear:D.near,depthFar:D.far}),k=D.near,ct=D.far),B.layers.mask=$.layers.mask|2,X.layers.mask=$.layers.mask|4,D.layers.mask=B.layers.mask|X.layers.mask;const Rt=$.parent,It=D.cameras;St(D,Rt);for(let fe=0;fe<It.length;fe++)St(It[fe],Rt);It.length===2?q(D,B,X):D.projectionMatrix.copy(B.projectionMatrix),O($,D,Rt)};function O($,gt,bt){bt===null?$.matrix.copy(gt.matrixWorld):($.matrix.copy(bt.matrixWorld),$.matrix.invert(),$.matrix.multiply(gt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(gt.projectionMatrix),$.projectionMatrixInverse.copy(gt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=So*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(y===null&&S===null))return d},this.setFoveation=function($){d=$,y!==null&&(y.fixedFoveation=$),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=$)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(D)};let et=null;function xt($,gt){if(g=gt.getViewerPose(p||f),M=gt,g!==null){const bt=g.views;S!==null&&(t.setRenderTargetFramebuffer(N,S.framebuffer),t.setRenderTarget(N));let Rt=!1;bt.length!==D.cameras.length&&(D.cameras.length=0,Rt=!0);for(let Jt=0;Jt<bt.length;Jt++){const Ke=bt[Jt];let We=null;if(S!==null)We=S.getViewport(Ke);else{const G=v.getViewSubImage(y,Ke);We=G.viewport,Jt===0&&(t.setRenderTargetTextures(N,G.colorTexture,G.depthStencilTexture),t.setRenderTarget(N))}let ge=U[Jt];ge===void 0&&(ge=new Wn,ge.layers.enable(Jt),ge.viewport=new Oe,U[Jt]=ge),ge.matrix.fromArray(Ke.transform.matrix),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale),ge.projectionMatrix.fromArray(Ke.projectionMatrix),ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert(),ge.viewport.set(We.x,We.y,We.width,We.height),Jt===0&&(D.matrix.copy(ge.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Rt===!0&&D.cameras.push(ge)}const It=o.enabledFeatures;if(It&&It.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&v){const Jt=v.getDepthInformation(bt[0]);Jt&&Jt.isValid&&Jt.texture&&T.init(t,Jt,o.renderState)}}for(let bt=0;bt<L.length;bt++){const Rt=w[bt],It=L[bt];Rt!==null&&It!==void 0&&It.update(Rt,gt,p||f)}et&&et($,gt),gt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:gt}),M=null}const Mt=new jS;Mt.setAnimationLoop(xt),this.setAnimationLoop=function($){et=$},this.dispose=function(){}}}const tr=new Ji,d3=new ue;function p3(r,t){function e(b,x){b.matrixAutoUpdate===!0&&b.updateMatrix(),x.value.copy(b.matrix)}function s(b,x){x.color.getRGB(b.fogColor.value,NS(r)),x.isFog?(b.fogNear.value=x.near,b.fogFar.value=x.far):x.isFogExp2&&(b.fogDensity.value=x.density)}function o(b,x,N,L,w){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(b,x):x.isMeshToonMaterial?(c(b,x),v(b,x)):x.isMeshPhongMaterial?(c(b,x),g(b,x)):x.isMeshStandardMaterial?(c(b,x),y(b,x),x.isMeshPhysicalMaterial&&S(b,x,w)):x.isMeshMatcapMaterial?(c(b,x),M(b,x)):x.isMeshDepthMaterial?c(b,x):x.isMeshDistanceMaterial?(c(b,x),T(b,x)):x.isMeshNormalMaterial?c(b,x):x.isLineBasicMaterial?(f(b,x),x.isLineDashedMaterial&&h(b,x)):x.isPointsMaterial?d(b,x,N,L):x.isSpriteMaterial?p(b,x):x.isShadowMaterial?(b.color.value.copy(x.color),b.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(b,x){b.opacity.value=x.opacity,x.color&&b.diffuse.value.copy(x.color),x.emissive&&b.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(b.map.value=x.map,e(x.map,b.mapTransform)),x.alphaMap&&(b.alphaMap.value=x.alphaMap,e(x.alphaMap,b.alphaMapTransform)),x.bumpMap&&(b.bumpMap.value=x.bumpMap,e(x.bumpMap,b.bumpMapTransform),b.bumpScale.value=x.bumpScale,x.side===ii&&(b.bumpScale.value*=-1)),x.normalMap&&(b.normalMap.value=x.normalMap,e(x.normalMap,b.normalMapTransform),b.normalScale.value.copy(x.normalScale),x.side===ii&&b.normalScale.value.negate()),x.displacementMap&&(b.displacementMap.value=x.displacementMap,e(x.displacementMap,b.displacementMapTransform),b.displacementScale.value=x.displacementScale,b.displacementBias.value=x.displacementBias),x.emissiveMap&&(b.emissiveMap.value=x.emissiveMap,e(x.emissiveMap,b.emissiveMapTransform)),x.specularMap&&(b.specularMap.value=x.specularMap,e(x.specularMap,b.specularMapTransform)),x.alphaTest>0&&(b.alphaTest.value=x.alphaTest);const N=t.get(x),L=N.envMap,w=N.envMapRotation;L&&(b.envMap.value=L,tr.copy(w),tr.x*=-1,tr.y*=-1,tr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(tr.y*=-1,tr.z*=-1),b.envMapRotation.value.setFromMatrix4(d3.makeRotationFromEuler(tr)),b.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,b.reflectivity.value=x.reflectivity,b.ior.value=x.ior,b.refractionRatio.value=x.refractionRatio),x.lightMap&&(b.lightMap.value=x.lightMap,b.lightMapIntensity.value=x.lightMapIntensity,e(x.lightMap,b.lightMapTransform)),x.aoMap&&(b.aoMap.value=x.aoMap,b.aoMapIntensity.value=x.aoMapIntensity,e(x.aoMap,b.aoMapTransform))}function f(b,x){b.diffuse.value.copy(x.color),b.opacity.value=x.opacity,x.map&&(b.map.value=x.map,e(x.map,b.mapTransform))}function h(b,x){b.dashSize.value=x.dashSize,b.totalSize.value=x.dashSize+x.gapSize,b.scale.value=x.scale}function d(b,x,N,L){b.diffuse.value.copy(x.color),b.opacity.value=x.opacity,b.size.value=x.size*N,b.scale.value=L*.5,x.map&&(b.map.value=x.map,e(x.map,b.uvTransform)),x.alphaMap&&(b.alphaMap.value=x.alphaMap,e(x.alphaMap,b.alphaMapTransform)),x.alphaTest>0&&(b.alphaTest.value=x.alphaTest)}function p(b,x){b.diffuse.value.copy(x.color),b.opacity.value=x.opacity,b.rotation.value=x.rotation,x.map&&(b.map.value=x.map,e(x.map,b.mapTransform)),x.alphaMap&&(b.alphaMap.value=x.alphaMap,e(x.alphaMap,b.alphaMapTransform)),x.alphaTest>0&&(b.alphaTest.value=x.alphaTest)}function g(b,x){b.specular.value.copy(x.specular),b.shininess.value=Math.max(x.shininess,1e-4)}function v(b,x){x.gradientMap&&(b.gradientMap.value=x.gradientMap)}function y(b,x){b.metalness.value=x.metalness,x.metalnessMap&&(b.metalnessMap.value=x.metalnessMap,e(x.metalnessMap,b.metalnessMapTransform)),b.roughness.value=x.roughness,x.roughnessMap&&(b.roughnessMap.value=x.roughnessMap,e(x.roughnessMap,b.roughnessMapTransform)),x.envMap&&(b.envMapIntensity.value=x.envMapIntensity)}function S(b,x,N){b.ior.value=x.ior,x.sheen>0&&(b.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),b.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(b.sheenColorMap.value=x.sheenColorMap,e(x.sheenColorMap,b.sheenColorMapTransform)),x.sheenRoughnessMap&&(b.sheenRoughnessMap.value=x.sheenRoughnessMap,e(x.sheenRoughnessMap,b.sheenRoughnessMapTransform))),x.clearcoat>0&&(b.clearcoat.value=x.clearcoat,b.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(b.clearcoatMap.value=x.clearcoatMap,e(x.clearcoatMap,b.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,e(x.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(b.clearcoatNormalMap.value=x.clearcoatNormalMap,e(x.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===ii&&b.clearcoatNormalScale.value.negate())),x.dispersion>0&&(b.dispersion.value=x.dispersion),x.iridescence>0&&(b.iridescence.value=x.iridescence,b.iridescenceIOR.value=x.iridescenceIOR,b.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(b.iridescenceMap.value=x.iridescenceMap,e(x.iridescenceMap,b.iridescenceMapTransform)),x.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=x.iridescenceThicknessMap,e(x.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),x.transmission>0&&(b.transmission.value=x.transmission,b.transmissionSamplerMap.value=N.texture,b.transmissionSamplerSize.value.set(N.width,N.height),x.transmissionMap&&(b.transmissionMap.value=x.transmissionMap,e(x.transmissionMap,b.transmissionMapTransform)),b.thickness.value=x.thickness,x.thicknessMap&&(b.thicknessMap.value=x.thicknessMap,e(x.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=x.attenuationDistance,b.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(b.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(b.anisotropyMap.value=x.anisotropyMap,e(x.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=x.specularIntensity,b.specularColor.value.copy(x.specularColor),x.specularColorMap&&(b.specularColorMap.value=x.specularColorMap,e(x.specularColorMap,b.specularColorMapTransform)),x.specularIntensityMap&&(b.specularIntensityMap.value=x.specularIntensityMap,e(x.specularIntensityMap,b.specularIntensityMapTransform))}function M(b,x){x.matcap&&(b.matcap.value=x.matcap)}function T(b,x){const N=t.get(x).light;b.referencePosition.value.setFromMatrixPosition(N.matrixWorld),b.nearDistance.value=N.shadow.camera.near,b.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:o}}function m3(r,t,e,s){let o={},c={},f=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function d(N,L){const w=L.program;s.uniformBlockBinding(N,w)}function p(N,L){let w=o[N.id];w===void 0&&(M(N),w=g(N),o[N.id]=w,N.addEventListener("dispose",b));const I=L.program;s.updateUBOMapping(N,I);const H=t.render.frame;c[N.id]!==H&&(y(N),c[N.id]=H)}function g(N){const L=v();N.__bindingPointIndex=L;const w=r.createBuffer(),I=N.__size,H=N.usage;return r.bindBuffer(r.UNIFORM_BUFFER,w),r.bufferData(r.UNIFORM_BUFFER,I,H),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,w),w}function v(){for(let N=0;N<h;N++)if(f.indexOf(N)===-1)return f.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(N){const L=o[N.id],w=N.uniforms,I=N.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let H=0,B=w.length;H<B;H++){const X=Array.isArray(w[H])?w[H]:[w[H]];for(let U=0,D=X.length;U<D;U++){const k=X[U];if(S(k,H,U,I)===!0){const ct=k.__offset,rt=Array.isArray(k.value)?k.value:[k.value];let mt=0;for(let ft=0;ft<rt.length;ft++){const z=rt[ft],Z=T(z);typeof z=="number"||typeof z=="boolean"?(k.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,ct+mt,k.__data)):z.isMatrix3?(k.__data[0]=z.elements[0],k.__data[1]=z.elements[1],k.__data[2]=z.elements[2],k.__data[3]=0,k.__data[4]=z.elements[3],k.__data[5]=z.elements[4],k.__data[6]=z.elements[5],k.__data[7]=0,k.__data[8]=z.elements[6],k.__data[9]=z.elements[7],k.__data[10]=z.elements[8],k.__data[11]=0):(z.toArray(k.__data,mt),mt+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,ct,k.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(N,L,w,I){const H=N.value,B=L+"_"+w;if(I[B]===void 0)return typeof H=="number"||typeof H=="boolean"?I[B]=H:I[B]=H.clone(),!0;{const X=I[B];if(typeof H=="number"||typeof H=="boolean"){if(X!==H)return I[B]=H,!0}else if(X.equals(H)===!1)return X.copy(H),!0}return!1}function M(N){const L=N.uniforms;let w=0;const I=16;for(let B=0,X=L.length;B<X;B++){const U=Array.isArray(L[B])?L[B]:[L[B]];for(let D=0,k=U.length;D<k;D++){const ct=U[D],rt=Array.isArray(ct.value)?ct.value:[ct.value];for(let mt=0,ft=rt.length;mt<ft;mt++){const z=rt[mt],Z=T(z),q=w%I,St=q%Z.boundary,O=q+St;w+=St,O!==0&&I-O<Z.storage&&(w+=I-O),ct.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),ct.__offset=w,w+=Z.storage}}}const H=w%I;return H>0&&(w+=I-H),N.__size=w,N.__cache={},this}function T(N){const L={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(L.boundary=4,L.storage=4):N.isVector2?(L.boundary=8,L.storage=8):N.isVector3||N.isColor?(L.boundary=16,L.storage=12):N.isVector4?(L.boundary=16,L.storage=16):N.isMatrix3?(L.boundary=48,L.storage=48):N.isMatrix4?(L.boundary=64,L.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),L}function b(N){const L=N.target;L.removeEventListener("dispose",b);const w=f.indexOf(L.__bindingPointIndex);f.splice(w,1),r.deleteBuffer(o[L.id]),delete o[L.id],delete c[L.id]}function x(){for(const N in o)r.deleteBuffer(o[N]);f=[],o={},c={}}return{bind:d,update:p,dispose:x}}class g3{constructor(t={}){const{canvas:e=gA(),context:s=null,depth:o=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:y=!1}=t;this.isWebGLRenderer=!0;let S;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=s.getContextAttributes().alpha}else S=f;const M=new Uint32Array(4),T=new Int32Array(4);let b=null,x=null;const N=[],L=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ts,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let I=!1;this._outputColorSpace=Pn;let H=0,B=0,X=null,U=-1,D=null;const k=new Oe,ct=new Oe;let rt=null;const mt=new oe(0);let ft=0,z=e.width,Z=e.height,q=1,St=null,O=null;const et=new Oe(0,0,z,Z),xt=new Oe(0,0,z,Z);let Mt=!1;const $=new jm;let gt=!1,bt=!1;const Rt=new ue,It=new ue,fe=new W,Jt=new Oe,Ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function ge(){return X===null?q:1}let G=s;function Zn(C,K){return e.getContext(C,K)}try{const C={alpha:!0,depth:o,stencil:c,antialias:h,premultipliedAlpha:d,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Um}`),e.addEventListener("webglcontextlost",_t,!1),e.addEventListener("webglcontextrestored",zt,!1),e.addEventListener("webglcontextcreationerror",Pt,!1),G===null){const K="webgl2";if(G=Zn(K,C),G===null)throw Zn(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Me,ae,Yt,Fe,Xt,P,R,it,yt,Et,dt,Ft,Ct,Dt,Ee,wt,Gt,Zt,$t,Bt,de,ie,He,j;function Ot(){Me=new AR(G),Me.init(),ie=new l3(G,Me),ae=new yR(G,Me,t,ie),Yt=new r3(G,Me),ae.reverseDepthBuffer&&y&&Yt.buffers.depth.setReversed(!0),Fe=new CR(G),Xt=new YC,P=new o3(G,Me,Yt,Xt,ae,ie,Fe),R=new SR(w),it=new TR(w),yt=new P1(G),He=new _R(G,yt),Et=new wR(G,yt,Fe,He),dt=new NR(G,Et,yt,Fe),$t=new DR(G,ae,P),wt=new xR(Xt),Ft=new WC(w,R,it,Me,ae,He,wt),Ct=new p3(w,Xt),Dt=new KC,Ee=new e3(Me),Zt=new gR(w,R,it,Yt,dt,S,d),Gt=new a3(w,dt,ae),j=new m3(G,Fe,ae,Yt),Bt=new vR(G,Me,Fe),de=new RR(G,Me,Fe),Fe.programs=Ft.programs,w.capabilities=ae,w.extensions=Me,w.properties=Xt,w.renderLists=Dt,w.shadowMap=Gt,w.state=Yt,w.info=Fe}Ot();const ut=new h3(w,G);this.xr=ut,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const C=Me.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Me.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(C){C!==void 0&&(q=C,this.setSize(z,Z,!1))},this.getSize=function(C){return C.set(z,Z)},this.setSize=function(C,K,ot=!0){if(ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=C,Z=K,e.width=Math.floor(C*q),e.height=Math.floor(K*q),ot===!0&&(e.style.width=C+"px",e.style.height=K+"px"),this.setViewport(0,0,C,K)},this.getDrawingBufferSize=function(C){return C.set(z*q,Z*q).floor()},this.setDrawingBufferSize=function(C,K,ot){z=C,Z=K,q=ot,e.width=Math.floor(C*ot),e.height=Math.floor(K*ot),this.setViewport(0,0,C,K)},this.getCurrentViewport=function(C){return C.copy(k)},this.getViewport=function(C){return C.copy(et)},this.setViewport=function(C,K,ot,lt){C.isVector4?et.set(C.x,C.y,C.z,C.w):et.set(C,K,ot,lt),Yt.viewport(k.copy(et).multiplyScalar(q).round())},this.getScissor=function(C){return C.copy(xt)},this.setScissor=function(C,K,ot,lt){C.isVector4?xt.set(C.x,C.y,C.z,C.w):xt.set(C,K,ot,lt),Yt.scissor(ct.copy(xt).multiplyScalar(q).round())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(C){Yt.setScissorTest(Mt=C)},this.setOpaqueSort=function(C){St=C},this.setTransparentSort=function(C){O=C},this.getClearColor=function(C){return C.copy(Zt.getClearColor())},this.setClearColor=function(){Zt.setClearColor(...arguments)},this.getClearAlpha=function(){return Zt.getClearAlpha()},this.setClearAlpha=function(){Zt.setClearAlpha(...arguments)},this.clear=function(C=!0,K=!0,ot=!0){let lt=0;if(C){let Q=!1;if(X!==null){const Tt=X.texture.format;Q=Tt===Hm||Tt===Fm||Tt===zm}if(Q){const Tt=X.texture.type,Nt=Tt===Pa||Tt===lr||Tt===jl||Tt===Wl||Tt===Pm||Tt===Im,Lt=Zt.getClearColor(),Ht=Zt.getClearAlpha(),ee=Lt.r,qt=Lt.g,Wt=Lt.b;Nt?(M[0]=ee,M[1]=qt,M[2]=Wt,M[3]=Ht,G.clearBufferuiv(G.COLOR,0,M)):(T[0]=ee,T[1]=qt,T[2]=Wt,T[3]=Ht,G.clearBufferiv(G.COLOR,0,T))}else lt|=G.COLOR_BUFFER_BIT}K&&(lt|=G.DEPTH_BUFFER_BIT),ot&&(lt|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",_t,!1),e.removeEventListener("webglcontextrestored",zt,!1),e.removeEventListener("webglcontextcreationerror",Pt,!1),Zt.dispose(),Dt.dispose(),Ee.dispose(),Xt.dispose(),R.dispose(),it.dispose(),dt.dispose(),He.dispose(),j.dispose(),Ft.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",gn),ut.removeEventListener("sessionend",Dn),Qn.stop()};function _t(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function zt(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const C=Fe.autoReset,K=Gt.enabled,ot=Gt.autoUpdate,lt=Gt.needsUpdate,Q=Gt.type;Ot(),Fe.autoReset=C,Gt.enabled=K,Gt.autoUpdate=ot,Gt.needsUpdate=lt,Gt.type=Q}function Pt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function re(C){const K=C.target;K.removeEventListener("dispose",re),Ze(K)}function Ze(C){fn(C),Xt.remove(C)}function fn(C){const K=Xt.get(C).programs;K!==void 0&&(K.forEach(function(ot){Ft.releaseProgram(ot)}),C.isShaderMaterial&&Ft.releaseShaderCache(C))}this.renderBufferDirect=function(C,K,ot,lt,Q,Tt){K===null&&(K=Ke);const Nt=Q.isMesh&&Q.matrixWorld.determinant()<0,Lt=Ls(C,K,ot,lt,Q);Yt.setMaterial(lt,Nt);let Ht=ot.index,ee=1;if(lt.wireframe===!0){if(Ht=Et.getWireframeAttribute(ot),Ht===void 0)return;ee=2}const qt=ot.drawRange,Wt=ot.attributes.position;let ve=qt.start*ee,Ne=(qt.start+qt.count)*ee;Tt!==null&&(ve=Math.max(ve,Tt.start*ee),Ne=Math.min(Ne,(Tt.start+Tt.count)*ee)),Ht!==null?(ve=Math.max(ve,0),Ne=Math.min(Ne,Ht.count)):Wt!=null&&(ve=Math.max(ve,0),Ne=Math.min(Ne,Wt.count));const nn=Ne-ve;if(nn<0||nn===1/0)return;He.setup(Q,lt,Lt,ot,Ht);let Te,Ae=Bt;if(Ht!==null&&(Te=yt.get(Ht),Ae=de,Ae.setIndex(Te)),Q.isMesh)lt.wireframe===!0?(Yt.setLineWidth(lt.wireframeLinewidth*ge()),Ae.setMode(G.LINES)):Ae.setMode(G.TRIANGLES);else if(Q.isLine){let Kt=lt.linewidth;Kt===void 0&&(Kt=1),Yt.setLineWidth(Kt*ge()),Q.isLineSegments?Ae.setMode(G.LINES):Q.isLineLoop?Ae.setMode(G.LINE_LOOP):Ae.setMode(G.LINE_STRIP)}else Q.isPoints?Ae.setMode(G.POINTS):Q.isSprite&&Ae.setMode(G.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)$u("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ae.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(Me.get("WEBGL_multi_draw"))Ae.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Kt=Q._multiDrawStarts,rn=Q._multiDrawCounts,Ce=Q._multiDrawCount,In=Ht?yt.get(Ht).bytesPerElement:1,Va=Xt.get(lt).currentProgram.getUniforms();for(let Qe=0;Qe<Ce;Qe++)Va.setValue(G,"_gl_DrawID",Qe),Ae.render(Kt[Qe]/In,rn[Qe])}else if(Q.isInstancedMesh)Ae.renderInstances(ve,nn,Q.count);else if(ot.isInstancedBufferGeometry){const Kt=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,rn=Math.min(ot.instanceCount,Kt);Ae.renderInstances(ve,nn,rn)}else Ae.render(ve,nn)};function De(C,K,ot){C.transparent===!0&&C.side===Yi&&C.forceSinglePass===!1?(C.side=ii,C.needsUpdate=!0,Ga(C,K,ot),C.side=Oa,C.needsUpdate=!0,Ga(C,K,ot),C.side=Yi):Ga(C,K,ot)}this.compile=function(C,K,ot=null){ot===null&&(ot=C),x=Ee.get(ot),x.init(K),L.push(x),ot.traverseVisible(function(Q){Q.isLight&&Q.layers.test(K.layers)&&(x.pushLight(Q),Q.castShadow&&x.pushShadow(Q))}),C!==ot&&C.traverseVisible(function(Q){Q.isLight&&Q.layers.test(K.layers)&&(x.pushLight(Q),Q.castShadow&&x.pushShadow(Q))}),x.setupLights();const lt=new Set;return C.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Tt=Q.material;if(Tt)if(Array.isArray(Tt))for(let Nt=0;Nt<Tt.length;Nt++){const Lt=Tt[Nt];De(Lt,ot,Q),lt.add(Lt)}else De(Tt,ot,Q),lt.add(Tt)}),x=L.pop(),lt},this.compileAsync=function(C,K,ot=null){const lt=this.compile(C,K,ot);return new Promise(Q=>{function Tt(){if(lt.forEach(function(Nt){Xt.get(Nt).currentProgram.isReady()&&lt.delete(Nt)}),lt.size===0){Q(C);return}setTimeout(Tt,10)}Me.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let ai=null;function Mn(C){ai&&ai(C)}function gn(){Qn.stop()}function Dn(){Qn.start()}const Qn=new jS;Qn.setAnimationLoop(Mn),typeof self<"u"&&Qn.setContext(self),this.setAnimationLoop=function(C){ai=C,ut.setAnimationLoop(C),C===null?Qn.stop():Qn.start()},ut.addEventListener("sessionstart",gn),ut.addEventListener("sessionend",Dn),this.render=function(C,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(K),K=ut.getCamera()),C.isScene===!0&&C.onBeforeRender(w,C,K,X),x=Ee.get(C,L.length),x.init(K),L.push(x),It.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),$.setFromProjectionMatrix(It),bt=this.localClippingEnabled,gt=wt.init(this.clippingPlanes,bt),b=Dt.get(C,N.length),b.init(),N.push(b),ut.enabled===!0&&ut.isPresenting===!0){const Tt=w.xr.getDepthSensingMesh();Tt!==null&&Ds(Tt,K,-1/0,w.sortObjects)}Ds(C,K,0,w.sortObjects),b.finish(),w.sortObjects===!0&&b.sort(St,O),We=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,We&&Zt.addToRenderList(b,C),this.info.render.frame++,gt===!0&&wt.beginShadows();const ot=x.state.shadowsArray;Gt.render(ot,C,K),gt===!0&&wt.endShadows(),this.info.autoReset===!0&&this.info.reset();const lt=b.opaque,Q=b.transmissive;if(x.setupLights(),K.isArrayCamera){const Tt=K.cameras;if(Q.length>0)for(let Nt=0,Lt=Tt.length;Nt<Lt;Nt++){const Ht=Tt[Nt];oc(lt,Q,C,Ht)}We&&Zt.render(C);for(let Nt=0,Lt=Tt.length;Nt<Lt;Nt++){const Ht=Tt[Nt];rc(b,C,Ht,Ht.viewport)}}else Q.length>0&&oc(lt,Q,C,K),We&&Zt.render(C),rc(b,C,K);X!==null&&B===0&&(P.updateMultisampleRenderTarget(X),P.updateRenderTargetMipmap(X)),C.isScene===!0&&C.onAfterRender(w,C,K),He.resetDefaultState(),U=-1,D=null,L.pop(),L.length>0?(x=L[L.length-1],gt===!0&&wt.setGlobalState(w.clippingPlanes,x.state.camera)):x=null,N.pop(),N.length>0?b=N[N.length-1]:b=null};function Ds(C,K,ot,lt){if(C.visible===!1)return;if(C.layers.test(K.layers)){if(C.isGroup)ot=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(K);else if(C.isLight)x.pushLight(C),C.castShadow&&x.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||$.intersectsSprite(C)){lt&&Jt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(It);const Nt=dt.update(C),Lt=C.material;Lt.visible&&b.push(C,Nt,Lt,ot,Jt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||$.intersectsObject(C))){const Nt=dt.update(C),Lt=C.material;if(lt&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Jt.copy(C.boundingSphere.center)):(Nt.boundingSphere===null&&Nt.computeBoundingSphere(),Jt.copy(Nt.boundingSphere.center)),Jt.applyMatrix4(C.matrixWorld).applyMatrix4(It)),Array.isArray(Lt)){const Ht=Nt.groups;for(let ee=0,qt=Ht.length;ee<qt;ee++){const Wt=Ht[ee],ve=Lt[Wt.materialIndex];ve&&ve.visible&&b.push(C,Nt,ve,ot,Jt.z,Wt)}}else Lt.visible&&b.push(C,Nt,Lt,ot,Jt.z,null)}}const Tt=C.children;for(let Nt=0,Lt=Tt.length;Nt<Lt;Nt++)Ds(Tt[Nt],K,ot,lt)}function rc(C,K,ot,lt){const Q=C.opaque,Tt=C.transmissive,Nt=C.transparent;x.setupLightsView(ot),gt===!0&&wt.setGlobalState(w.clippingPlanes,ot),lt&&Yt.viewport(k.copy(lt)),Q.length>0&&Ns(Q,K,ot),Tt.length>0&&Ns(Tt,K,ot),Nt.length>0&&Ns(Nt,K,ot),Yt.buffers.depth.setTest(!0),Yt.buffers.depth.setMask(!0),Yt.buffers.color.setMask(!0),Yt.setPolygonOffset(!1)}function oc(C,K,ot,lt){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[lt.id]===void 0&&(x.state.transmissionRenderTarget[lt.id]=new cr(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")||Me.has("EXT_color_buffer_float")?tc:Pa,minFilter:Ca,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Re.workingColorSpace}));const Tt=x.state.transmissionRenderTarget[lt.id],Nt=lt.viewport||k;Tt.setSize(Nt.z*w.transmissionResolutionScale,Nt.w*w.transmissionResolutionScale);const Lt=w.getRenderTarget();w.setRenderTarget(Tt),w.getClearColor(mt),ft=w.getClearAlpha(),ft<1&&w.setClearColor(16777215,.5),w.clear(),We&&Zt.render(ot);const Ht=w.toneMapping;w.toneMapping=Ts;const ee=lt.viewport;if(lt.viewport!==void 0&&(lt.viewport=void 0),x.setupLightsView(lt),gt===!0&&wt.setGlobalState(w.clippingPlanes,lt),Ns(C,ot,lt),P.updateMultisampleRenderTarget(Tt),P.updateRenderTargetMipmap(Tt),Me.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let Wt=0,ve=K.length;Wt<ve;Wt++){const Ne=K[Wt],nn=Ne.object,Te=Ne.geometry,Ae=Ne.material,Kt=Ne.group;if(Ae.side===Yi&&nn.layers.test(lt.layers)){const rn=Ae.side;Ae.side=ii,Ae.needsUpdate=!0,Ha(nn,ot,lt,Te,Ae,Kt),Ae.side=rn,Ae.needsUpdate=!0,qt=!0}}qt===!0&&(P.updateMultisampleRenderTarget(Tt),P.updateRenderTargetMipmap(Tt))}w.setRenderTarget(Lt),w.setClearColor(mt,ft),ee!==void 0&&(lt.viewport=ee),w.toneMapping=Ht}function Ns(C,K,ot){const lt=K.isScene===!0?K.overrideMaterial:null;for(let Q=0,Tt=C.length;Q<Tt;Q++){const Nt=C[Q],Lt=Nt.object,Ht=Nt.geometry,ee=Nt.group;let qt=Nt.material;qt.allowOverride===!0&&lt!==null&&(qt=lt),Lt.layers.test(ot.layers)&&Ha(Lt,K,ot,Ht,qt,ee)}}function Ha(C,K,ot,lt,Q,Tt){C.onBeforeRender(w,K,ot,lt,Q,Tt),C.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Q.onBeforeRender(w,K,ot,lt,C,Tt),Q.transparent===!0&&Q.side===Yi&&Q.forceSinglePass===!1?(Q.side=ii,Q.needsUpdate=!0,w.renderBufferDirect(ot,K,lt,Q,C,Tt),Q.side=Oa,Q.needsUpdate=!0,w.renderBufferDirect(ot,K,lt,Q,C,Tt),Q.side=Yi):w.renderBufferDirect(ot,K,lt,Q,C,Tt),C.onAfterRender(w,K,ot,lt,Q,Tt)}function Ga(C,K,ot){K.isScene!==!0&&(K=Ke);const lt=Xt.get(C),Q=x.state.lights,Tt=x.state.shadowsArray,Nt=Q.state.version,Lt=Ft.getParameters(C,Q.state,Tt,K,ot),Ht=Ft.getProgramCacheKey(Lt);let ee=lt.programs;lt.environment=C.isMeshStandardMaterial?K.environment:null,lt.fog=K.fog,lt.envMap=(C.isMeshStandardMaterial?it:R).get(C.envMap||lt.environment),lt.envMapRotation=lt.environment!==null&&C.envMap===null?K.environmentRotation:C.envMapRotation,ee===void 0&&(C.addEventListener("dispose",re),ee=new Map,lt.programs=ee);let qt=ee.get(Ht);if(qt!==void 0){if(lt.currentProgram===qt&&lt.lightsStateVersion===Nt)return ia(C,Lt),qt}else Lt.uniforms=Ft.getUniforms(C),C.onBeforeCompile(Lt,w),qt=Ft.acquireProgram(Lt,Ht),ee.set(Ht,qt),lt.uniforms=Lt.uniforms;const Wt=lt.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Wt.clippingPlanes=wt.uniform),ia(C,Lt),lt.needsLights=hn(C),lt.lightsStateVersion=Nt,lt.needsLights&&(Wt.ambientLightColor.value=Q.state.ambient,Wt.lightProbe.value=Q.state.probe,Wt.directionalLights.value=Q.state.directional,Wt.directionalLightShadows.value=Q.state.directionalShadow,Wt.spotLights.value=Q.state.spot,Wt.spotLightShadows.value=Q.state.spotShadow,Wt.rectAreaLights.value=Q.state.rectArea,Wt.ltc_1.value=Q.state.rectAreaLTC1,Wt.ltc_2.value=Q.state.rectAreaLTC2,Wt.pointLights.value=Q.state.point,Wt.pointLightShadows.value=Q.state.pointShadow,Wt.hemisphereLights.value=Q.state.hemi,Wt.directionalShadowMap.value=Q.state.directionalShadowMap,Wt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Wt.spotShadowMap.value=Q.state.spotShadowMap,Wt.spotLightMatrix.value=Q.state.spotLightMatrix,Wt.spotLightMap.value=Q.state.spotLightMap,Wt.pointShadowMap.value=Q.state.pointShadowMap,Wt.pointShadowMatrix.value=Q.state.pointShadowMatrix),lt.currentProgram=qt,lt.uniformsList=null,qt}function na(C){if(C.uniformsList===null){const K=C.currentProgram.getUniforms();C.uniformsList=tf.seqWithValue(K.seq,C.uniforms)}return C.uniformsList}function ia(C,K){const ot=Xt.get(C);ot.outputColorSpace=K.outputColorSpace,ot.batching=K.batching,ot.batchingColor=K.batchingColor,ot.instancing=K.instancing,ot.instancingColor=K.instancingColor,ot.instancingMorph=K.instancingMorph,ot.skinning=K.skinning,ot.morphTargets=K.morphTargets,ot.morphNormals=K.morphNormals,ot.morphColors=K.morphColors,ot.morphTargetsCount=K.morphTargetsCount,ot.numClippingPlanes=K.numClippingPlanes,ot.numIntersection=K.numClipIntersection,ot.vertexAlphas=K.vertexAlphas,ot.vertexTangents=K.vertexTangents,ot.toneMapping=K.toneMapping}function Ls(C,K,ot,lt,Q){K.isScene!==!0&&(K=Ke),P.resetTextureUnits();const Tt=K.fog,Nt=lt.isMeshStandardMaterial?K.environment:null,Lt=X===null?w.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Kn,Ht=(lt.isMeshStandardMaterial?it:R).get(lt.envMap||Nt),ee=lt.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,qt=!!ot.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),Wt=!!ot.morphAttributes.position,ve=!!ot.morphAttributes.normal,Ne=!!ot.morphAttributes.color;let nn=Ts;lt.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(nn=w.toneMapping);const Te=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,Ae=Te!==void 0?Te.length:0,Kt=Xt.get(lt),rn=x.state.lights;if(gt===!0&&(bt===!0||C!==D)){const En=C===D&&lt.id===U;wt.setState(lt,C,En)}let Ce=!1;lt.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==rn.state.version||Kt.outputColorSpace!==Lt||Q.isBatchedMesh&&Kt.batching===!1||!Q.isBatchedMesh&&Kt.batching===!0||Q.isBatchedMesh&&Kt.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Kt.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Kt.instancing===!1||!Q.isInstancedMesh&&Kt.instancing===!0||Q.isSkinnedMesh&&Kt.skinning===!1||!Q.isSkinnedMesh&&Kt.skinning===!0||Q.isInstancedMesh&&Kt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Kt.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Kt.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Kt.instancingMorph===!1&&Q.morphTexture!==null||Kt.envMap!==Ht||lt.fog===!0&&Kt.fog!==Tt||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==wt.numPlanes||Kt.numIntersection!==wt.numIntersection)||Kt.vertexAlphas!==ee||Kt.vertexTangents!==qt||Kt.morphTargets!==Wt||Kt.morphNormals!==ve||Kt.morphColors!==Ne||Kt.toneMapping!==nn||Kt.morphTargetsCount!==Ae)&&(Ce=!0):(Ce=!0,Kt.__version=lt.version);let In=Kt.currentProgram;Ce===!0&&(In=Ga(lt,K,Q));let Va=!1,Qe=!1,sa=!1;const Ye=In.getUniforms(),Bn=Kt.uniforms;if(Yt.useProgram(In.program)&&(Va=!0,Qe=!0,sa=!0),lt.id!==U&&(U=lt.id,Qe=!0),Va||D!==C){Yt.buffers.depth.getReversed()?(Rt.copy(C.projectionMatrix),vA(Rt),yA(Rt),Ye.setValue(G,"projectionMatrix",Rt)):Ye.setValue(G,"projectionMatrix",C.projectionMatrix),Ye.setValue(G,"viewMatrix",C.matrixWorldInverse);const Nn=Ye.map.cameraPosition;Nn!==void 0&&Nn.setValue(G,fe.setFromMatrixPosition(C.matrixWorld)),ae.logarithmicDepthBuffer&&Ye.setValue(G,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&Ye.setValue(G,"isOrthographic",C.isOrthographicCamera===!0),D!==C&&(D=C,Qe=!0,sa=!0)}if(Q.isSkinnedMesh){Ye.setOptional(G,Q,"bindMatrix"),Ye.setOptional(G,Q,"bindMatrixInverse");const En=Q.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),Ye.setValue(G,"boneTexture",En.boneTexture,P))}Q.isBatchedMesh&&(Ye.setOptional(G,Q,"batchingTexture"),Ye.setValue(G,"batchingTexture",Q._matricesTexture,P),Ye.setOptional(G,Q,"batchingIdTexture"),Ye.setValue(G,"batchingIdTexture",Q._indirectTexture,P),Ye.setOptional(G,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Ye.setValue(G,"batchingColorTexture",Q._colorsTexture,P));const _n=ot.morphAttributes;if((_n.position!==void 0||_n.normal!==void 0||_n.color!==void 0)&&$t.update(Q,ot,In),(Qe||Kt.receiveShadow!==Q.receiveShadow)&&(Kt.receiveShadow=Q.receiveShadow,Ye.setValue(G,"receiveShadow",Q.receiveShadow)),lt.isMeshGouraudMaterial&&lt.envMap!==null&&(Bn.envMap.value=Ht,Bn.flipEnvMap.value=Ht.isCubeTexture&&Ht.isRenderTargetTexture===!1?-1:1),lt.isMeshStandardMaterial&&lt.envMap===null&&K.environment!==null&&(Bn.envMapIntensity.value=K.environmentIntensity),Qe&&(Ye.setValue(G,"toneMappingExposure",w.toneMappingExposure),Kt.needsLights&&ka(Bn,sa),Tt&&lt.fog===!0&&Ct.refreshFogUniforms(Bn,Tt),Ct.refreshMaterialUniforms(Bn,lt,q,Z,x.state.transmissionRenderTarget[C.id]),tf.upload(G,na(Kt),Bn,P)),lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(tf.upload(G,na(Kt),Bn,P),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&Ye.setValue(G,"center",Q.center),Ye.setValue(G,"modelViewMatrix",Q.modelViewMatrix),Ye.setValue(G,"normalMatrix",Q.normalMatrix),Ye.setValue(G,"modelMatrix",Q.matrixWorld),lt.isShaderMaterial||lt.isRawShaderMaterial){const En=lt.uniformsGroups;for(let Nn=0,zi=En.length;Nn<zi;Nn++){const ra=En[Nn];j.update(ra,In),j.bind(ra,In)}}return In}function ka(C,K){C.ambientLightColor.needsUpdate=K,C.lightProbe.needsUpdate=K,C.directionalLights.needsUpdate=K,C.directionalLightShadows.needsUpdate=K,C.pointLights.needsUpdate=K,C.pointLightShadows.needsUpdate=K,C.spotLights.needsUpdate=K,C.spotLightShadows.needsUpdate=K,C.rectAreaLights.needsUpdate=K,C.hemisphereLights.needsUpdate=K}function hn(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(C,K,ot){const lt=Xt.get(C);lt.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,lt.__autoAllocateDepthBuffer===!1&&(lt.__useRenderToTexture=!1),Xt.get(C.texture).__webglTexture=K,Xt.get(C.depthTexture).__webglTexture=lt.__autoAllocateDepthBuffer?void 0:ot,lt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,K){const ot=Xt.get(C);ot.__webglFramebuffer=K,ot.__useDefaultFramebuffer=K===void 0};const lc=G.createFramebuffer();this.setRenderTarget=function(C,K=0,ot=0){X=C,H=K,B=ot;let lt=!0,Q=null,Tt=!1,Nt=!1;if(C){const Ht=Xt.get(C);if(Ht.__useDefaultFramebuffer!==void 0)Yt.bindFramebuffer(G.FRAMEBUFFER,null),lt=!1;else if(Ht.__webglFramebuffer===void 0)P.setupRenderTarget(C);else if(Ht.__hasExternalTextures)P.rebindTextures(C,Xt.get(C.texture).__webglTexture,Xt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Wt=C.depthTexture;if(Ht.__boundDepthTexture!==Wt){if(Wt!==null&&Xt.has(Wt)&&(C.width!==Wt.image.width||C.height!==Wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(C)}}const ee=C.texture;(ee.isData3DTexture||ee.isDataArrayTexture||ee.isCompressedArrayTexture)&&(Nt=!0);const qt=Xt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(qt[K])?Q=qt[K][ot]:Q=qt[K],Tt=!0):C.samples>0&&P.useMultisampledRTT(C)===!1?Q=Xt.get(C).__webglMultisampledFramebuffer:Array.isArray(qt)?Q=qt[ot]:Q=qt,k.copy(C.viewport),ct.copy(C.scissor),rt=C.scissorTest}else k.copy(et).multiplyScalar(q).floor(),ct.copy(xt).multiplyScalar(q).floor(),rt=Mt;if(ot!==0&&(Q=lc),Yt.bindFramebuffer(G.FRAMEBUFFER,Q)&&lt&&Yt.drawBuffers(C,Q),Yt.viewport(k),Yt.scissor(ct),Yt.setScissorTest(rt),Tt){const Ht=Xt.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ht.__webglTexture,ot)}else if(Nt){const Ht=Xt.get(C.texture),ee=K;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ht.__webglTexture,ot,ee)}else if(C!==null&&ot!==0){const Ht=Xt.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ht.__webglTexture,ot)}U=-1},this.readRenderTargetPixels=function(C,K,ot,lt,Q,Tt,Nt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=Xt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Nt!==void 0&&(Lt=Lt[Nt]),Lt){Yt.bindFramebuffer(G.FRAMEBUFFER,Lt);try{const Ht=C.texture,ee=Ht.format,qt=Ht.type;if(!ae.textureFormatReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ae.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=C.width-lt&&ot>=0&&ot<=C.height-Q&&G.readPixels(K,ot,lt,Q,ie.convert(ee),ie.convert(qt),Tt)}finally{const Ht=X!==null?Xt.get(X).__webglFramebuffer:null;Yt.bindFramebuffer(G.FRAMEBUFFER,Ht)}}},this.readRenderTargetPixelsAsync=async function(C,K,ot,lt,Q,Tt,Nt){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=Xt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Nt!==void 0&&(Lt=Lt[Nt]),Lt)if(K>=0&&K<=C.width-lt&&ot>=0&&ot<=C.height-Q){Yt.bindFramebuffer(G.FRAMEBUFFER,Lt);const Ht=C.texture,ee=Ht.format,qt=Ht.type;if(!ae.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ae.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Wt=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Wt),G.bufferData(G.PIXEL_PACK_BUFFER,Tt.byteLength,G.STREAM_READ),G.readPixels(K,ot,lt,Q,ie.convert(ee),ie.convert(qt),0);const ve=X!==null?Xt.get(X).__webglFramebuffer:null;Yt.bindFramebuffer(G.FRAMEBUFFER,ve);const Ne=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await _A(G,Ne,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,Wt),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Tt),G.deleteBuffer(Wt),G.deleteSync(Ne),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,K=null,ot=0){const lt=Math.pow(2,-ot),Q=Math.floor(C.image.width*lt),Tt=Math.floor(C.image.height*lt),Nt=K!==null?K.x:0,Lt=K!==null?K.y:0;P.setTexture2D(C,0),G.copyTexSubImage2D(G.TEXTURE_2D,ot,0,0,Nt,Lt,Q,Tt),Yt.unbindTexture()};const cc=G.createFramebuffer(),aa=G.createFramebuffer();this.copyTextureToTexture=function(C,K,ot=null,lt=null,Q=0,Tt=null){Tt===null&&(Q!==0?($u("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=Q,Q=0):Tt=0);let Nt,Lt,Ht,ee,qt,Wt,ve,Ne,nn;const Te=C.isCompressedTexture?C.mipmaps[Tt]:C.image;if(ot!==null)Nt=ot.max.x-ot.min.x,Lt=ot.max.y-ot.min.y,Ht=ot.isBox3?ot.max.z-ot.min.z:1,ee=ot.min.x,qt=ot.min.y,Wt=ot.isBox3?ot.min.z:0;else{const _n=Math.pow(2,-Q);Nt=Math.floor(Te.width*_n),Lt=Math.floor(Te.height*_n),C.isDataArrayTexture?Ht=Te.depth:C.isData3DTexture?Ht=Math.floor(Te.depth*_n):Ht=1,ee=0,qt=0,Wt=0}lt!==null?(ve=lt.x,Ne=lt.y,nn=lt.z):(ve=0,Ne=0,nn=0);const Ae=ie.convert(K.format),Kt=ie.convert(K.type);let rn;K.isData3DTexture?(P.setTexture3D(K,0),rn=G.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(P.setTexture2DArray(K,0),rn=G.TEXTURE_2D_ARRAY):(P.setTexture2D(K,0),rn=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,K.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,K.unpackAlignment);const Ce=G.getParameter(G.UNPACK_ROW_LENGTH),In=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Va=G.getParameter(G.UNPACK_SKIP_PIXELS),Qe=G.getParameter(G.UNPACK_SKIP_ROWS),sa=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Te.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Te.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,ee),G.pixelStorei(G.UNPACK_SKIP_ROWS,qt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Wt);const Ye=C.isDataArrayTexture||C.isData3DTexture,Bn=K.isDataArrayTexture||K.isData3DTexture;if(C.isDepthTexture){const _n=Xt.get(C),En=Xt.get(K),Nn=Xt.get(_n.__renderTarget),zi=Xt.get(En.__renderTarget);Yt.bindFramebuffer(G.READ_FRAMEBUFFER,Nn.__webglFramebuffer),Yt.bindFramebuffer(G.DRAW_FRAMEBUFFER,zi.__webglFramebuffer);for(let ra=0;ra<Ht;ra++)Ye&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Xt.get(C).__webglTexture,Q,Wt+ra),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Xt.get(K).__webglTexture,Tt,nn+ra)),G.blitFramebuffer(ee,qt,Nt,Lt,ve,Ne,Nt,Lt,G.DEPTH_BUFFER_BIT,G.NEAREST);Yt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Q!==0||C.isRenderTargetTexture||Xt.has(C)){const _n=Xt.get(C),En=Xt.get(K);Yt.bindFramebuffer(G.READ_FRAMEBUFFER,cc),Yt.bindFramebuffer(G.DRAW_FRAMEBUFFER,aa);for(let Nn=0;Nn<Ht;Nn++)Ye?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,_n.__webglTexture,Q,Wt+Nn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,_n.__webglTexture,Q),Bn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,En.__webglTexture,Tt,nn+Nn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,En.__webglTexture,Tt),Q!==0?G.blitFramebuffer(ee,qt,Nt,Lt,ve,Ne,Nt,Lt,G.COLOR_BUFFER_BIT,G.NEAREST):Bn?G.copyTexSubImage3D(rn,Tt,ve,Ne,nn+Nn,ee,qt,Nt,Lt):G.copyTexSubImage2D(rn,Tt,ve,Ne,ee,qt,Nt,Lt);Yt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Bn?C.isDataTexture||C.isData3DTexture?G.texSubImage3D(rn,Tt,ve,Ne,nn,Nt,Lt,Ht,Ae,Kt,Te.data):K.isCompressedArrayTexture?G.compressedTexSubImage3D(rn,Tt,ve,Ne,nn,Nt,Lt,Ht,Ae,Te.data):G.texSubImage3D(rn,Tt,ve,Ne,nn,Nt,Lt,Ht,Ae,Kt,Te):C.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Tt,ve,Ne,Nt,Lt,Ae,Kt,Te.data):C.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Tt,ve,Ne,Te.width,Te.height,Ae,Te.data):G.texSubImage2D(G.TEXTURE_2D,Tt,ve,Ne,Nt,Lt,Ae,Kt,Te);G.pixelStorei(G.UNPACK_ROW_LENGTH,Ce),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,In),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Va),G.pixelStorei(G.UNPACK_SKIP_ROWS,Qe),G.pixelStorei(G.UNPACK_SKIP_IMAGES,sa),Tt===0&&K.generateMipmaps&&G.generateMipmap(rn),Yt.unbindTexture()},this.copyTextureToTexture3D=function(C,K,ot=null,lt=null,Q=0){return $u('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,K,ot,lt,Q)},this.initRenderTarget=function(C){Xt.get(C).__webglFramebuffer===void 0&&P.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?P.setTextureCube(C,0):C.isData3DTexture?P.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?P.setTexture2DArray(C,0):P.setTexture2D(C,0),Yt.unbindTexture()},this.resetState=function(){H=0,B=0,X=null,Yt.reset(),He.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Da}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Re._getDrawingBufferColorSpace(t),e.unpackColorSpace=Re._getUnpackColorSpace()}}function px(r,t){if(t===VT)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(t===rm||t===SS){let e=r.getIndex();if(e===null){const f=[],h=r.getAttribute("position");if(h!==void 0){for(let d=0;d<h.count;d++)f.push(d);r.setIndex(f),e=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const s=e.count-2,o=[];if(t===rm)for(let f=1;f<=s;f++)o.push(e.getX(0)),o.push(e.getX(f)),o.push(e.getX(f+1));else for(let f=0;f<s;f++)f%2===0?(o.push(e.getX(f)),o.push(e.getX(f+1)),o.push(e.getX(f+2))):(o.push(e.getX(f+2)),o.push(e.getX(f+1)),o.push(e.getX(f)));o.length/3!==s&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const c=r.clone();return c.setIndex(o),c.clearGroups(),c}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),r}class _3 extends Co{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new b3(e)}),this.register(function(e){return new M3(e)}),this.register(function(e){return new L3(e)}),this.register(function(e){return new U3(e)}),this.register(function(e){return new O3(e)}),this.register(function(e){return new T3(e)}),this.register(function(e){return new A3(e)}),this.register(function(e){return new w3(e)}),this.register(function(e){return new R3(e)}),this.register(function(e){return new S3(e)}),this.register(function(e){return new C3(e)}),this.register(function(e){return new E3(e)}),this.register(function(e){return new N3(e)}),this.register(function(e){return new D3(e)}),this.register(function(e){return new y3(e)}),this.register(function(e){return new P3(e)}),this.register(function(e){return new I3(e)})}load(t,e,s,o){const c=this;let f;if(this.resourcePath!=="")f=this.resourcePath;else if(this.path!==""){const p=Gl.extractUrlBase(t);f=Gl.resolveURL(p,this.path)}else f=Gl.extractUrlBase(t);this.manager.itemStart(t);const h=function(p){o?o(p):console.error(p),c.manager.itemError(t),c.manager.itemEnd(t)},d=new GS(this.manager);d.setPath(this.path),d.setResponseType("arraybuffer"),d.setRequestHeader(this.requestHeader),d.setWithCredentials(this.withCredentials),d.load(t,function(p){try{c.parse(p,f,function(g){e(g),c.manager.itemEnd(t)},h)}catch(g){h(g)}},s,h)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,s,o){let c;const f={},h={},d=new TextDecoder;if(typeof t=="string")c=JSON.parse(t);else if(t instanceof ArrayBuffer)if(d.decode(new Uint8Array(t,0,4))===ZS){try{f[be.KHR_BINARY_GLTF]=new B3(t)}catch(v){o&&o(v);return}c=JSON.parse(f[be.KHR_BINARY_GLTF].content)}else c=JSON.parse(d.decode(t));else c=t;if(c.asset===void 0||c.asset.version[0]<2){o&&o(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const p=new Z3(c,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});p.fileLoader.setRequestHeader(this.requestHeader);for(let g=0;g<this.pluginCallbacks.length;g++){const v=this.pluginCallbacks[g](p);v.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),h[v.name]=v,f[v.name]=!0}if(c.extensionsUsed)for(let g=0;g<c.extensionsUsed.length;++g){const v=c.extensionsUsed[g],y=c.extensionsRequired||[];switch(v){case be.KHR_MATERIALS_UNLIT:f[v]=new x3;break;case be.KHR_DRACO_MESH_COMPRESSION:f[v]=new z3(c,this.dracoLoader);break;case be.KHR_TEXTURE_TRANSFORM:f[v]=new F3;break;case be.KHR_MESH_QUANTIZATION:f[v]=new H3;break;default:y.indexOf(v)>=0&&h[v]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+v+'".')}}p.setExtensions(f),p.setPlugins(h),p.parse(s,o)}parseAsync(t,e){const s=this;return new Promise(function(o,c){s.parse(t,e,o,c)})}}function v3(){let r={};return{get:function(t){return r[t]},add:function(t,e){r[t]=e},remove:function(t){delete r[t]},removeAll:function(){r={}}}}const be={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class y3{constructor(t){this.parser=t,this.name=be.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let s=0,o=e.length;s<o;s++){const c=e[s];c.extensions&&c.extensions[this.name]&&c.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,c.extensions[this.name].light)}}_loadLight(t){const e=this.parser,s="light:"+t;let o=e.cache.get(s);if(o)return o;const c=e.json,d=((c.extensions&&c.extensions[this.name]||{}).lights||[])[t];let p;const g=new oe(16777215);d.color!==void 0&&g.setRGB(d.color[0],d.color[1],d.color[2],Kn);const v=d.range!==void 0?d.range:0;switch(d.type){case"directional":p=new XS(g),p.target.position.set(0,0,-1),p.add(p.target);break;case"point":p=new VS(g),p.distance=v;break;case"spot":p=new kS(g),p.distance=v,d.spot=d.spot||{},d.spot.innerConeAngle=d.spot.innerConeAngle!==void 0?d.spot.innerConeAngle:0,d.spot.outerConeAngle=d.spot.outerConeAngle!==void 0?d.spot.outerConeAngle:Math.PI/4,p.angle=d.spot.outerConeAngle,p.penumbra=1-d.spot.innerConeAngle/d.spot.outerConeAngle,p.target.position.set(0,0,-1),p.add(p.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+d.type)}return p.position.set(0,0,0),Ra(p,d),d.intensity!==void 0&&(p.intensity=d.intensity),p.name=e.createUniqueName(d.name||"light_"+t),o=Promise.resolve(p),e.cache.add(s,o),o}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,s=this.parser,c=s.json.nodes[t],h=(c.extensions&&c.extensions[this.name]||{}).light;return h===void 0?null:this._loadLight(h).then(function(d){return s._getNodeRef(e.cache,h,d)})}}class x3{constructor(){this.name=be.KHR_MATERIALS_UNLIT}getMaterialType(){return sr}extendParams(t,e,s){const o=[];t.color=new oe(1,1,1),t.opacity=1;const c=e.pbrMetallicRoughness;if(c){if(Array.isArray(c.baseColorFactor)){const f=c.baseColorFactor;t.color.setRGB(f[0],f[1],f[2],Kn),t.opacity=f[3]}c.baseColorTexture!==void 0&&o.push(s.assignTexture(t,"map",c.baseColorTexture,Pn))}return Promise.all(o)}}class S3{constructor(t){this.parser=t,this.name=be.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const o=this.parser.json.materials[t];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const c=o.extensions[this.name].emissiveStrength;return c!==void 0&&(e.emissiveIntensity=c),Promise.resolve()}}class b3{constructor(t){this.parser=t,this.name=be.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const s=this.parser.json.materials[t];return!s.extensions||!s.extensions[this.name]?null:ea}extendMaterialParams(t,e){const s=this.parser,o=s.json.materials[t];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const c=[],f=o.extensions[this.name];if(f.clearcoatFactor!==void 0&&(e.clearcoat=f.clearcoatFactor),f.clearcoatTexture!==void 0&&c.push(s.assignTexture(e,"clearcoatMap",f.clearcoatTexture)),f.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=f.clearcoatRoughnessFactor),f.clearcoatRoughnessTexture!==void 0&&c.push(s.assignTexture(e,"clearcoatRoughnessMap",f.clearcoatRoughnessTexture)),f.clearcoatNormalTexture!==void 0&&(c.push(s.assignTexture(e,"clearcoatNormalMap",f.clearcoatNormalTexture)),f.clearcoatNormalTexture.scale!==void 0)){const h=f.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new se(h,h)}return Promise.all(c)}}class M3{constructor(t){this.parser=t,this.name=be.KHR_MATERIALS_DISPERSION}getMaterialType(t){const s=this.parser.json.materials[t];return!s.extensions||!s.extensions[this.name]?null:ea}extendMaterialParams(t,e){const o=this.parser.json.materials[t];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const c=o.extensions[this.name];return e.dispersion=c.dispersion!==void 0?c.dispersion:0,Promise.resolve()}}class E3{constructor(t){this.parser=t,this.name=be.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const s=this.parser.json.materials[t];return!s.extensions||!s.extensions[this.name]?null:ea}extendMaterialParams(t,e){const s=this.parser,o=s.json.materials[t];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const c=[],f=o.extensions[this.name];return f.iridescenceFactor!==void 0&&(e.iridescence=f.iridescenceFactor),f.iridescenceTexture!==void 0&&c.push(s.assignTexture(e,"iridescenceMap",f.iridescenceTexture)),f.iridescenceIor!==void 0&&(e.iridescenceIOR=f.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),f.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=f.iridescenceThicknessMinimum),f.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=f.iridescenceThicknessMaximum),f.iridescenceThicknessTexture!==void 0&&c.push(s.assignTexture(e,"iridescenceThicknessMap",f.iridescenceThicknessTexture)),Promise.all(c)}}class T3{constructor(t){this.parser=t,this.name=be.KHR_MATERIALS_SHEEN}getMaterialType(t){const s=this.parser.json.materials[t];return!s.extensions||!s.extensions[this.name]?null:ea}extendMaterialParams(t,e){const s=this.parser,o=s.json.materials[t];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const c=[];e.sheenColor=new oe(0,0,0),e.sheenRoughness=0,e.sheen=1;const f=o.extensions[this.name];if(f.sheenColorFactor!==void 0){const h=f.sheenColorFactor;e.sheenColor.setRGB(h[0],h[1],h[2],Kn)}return f.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=f.sheenRoughnessFactor),f.sheenColorTexture!==void 0&&c.push(s.assignTexture(e,"sheenColorMap",f.sheenColorTexture,Pn)),f.sheenRoughnessTexture!==void 0&&c.push(s.assignTexture(e,"sheenRoughnessMap",f.sheenRoughnessTexture)),Promise.all(c)}}class A3{constructor(t){this.parser=t,this.name=be.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const s=this.parser.json.materials[t];return!s.extensions||!s.extensions[this.name]?null:ea}extendMaterialParams(t,e){const s=this.parser,o=s.json.materials[t];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const c=[],f=o.extensions[this.name];return f.transmissionFactor!==void 0&&(e.transmission=f.transmissionFactor),f.transmissionTexture!==void 0&&c.push(s.assignTexture(e,"transmissionMap",f.transmissionTexture)),Promise.all(c)}}class w3{constructor(t){this.parser=t,this.name=be.KHR_MATERIALS_VOLUME}getMaterialType(t){const s=this.parser.json.materials[t];return!s.extensions||!s.extensions[this.name]?null:ea}extendMaterialParams(t,e){const s=this.parser,o=s.json.materials[t];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const c=[],f=o.extensions[this.name];e.thickness=f.thicknessFactor!==void 0?f.thicknessFactor:0,f.thicknessTexture!==void 0&&c.push(s.assignTexture(e,"thicknessMap",f.thicknessTexture)),e.attenuationDistance=f.attenuationDistance||1/0;const h=f.attenuationColor||[1,1,1];return e.attenuationColor=new oe().setRGB(h[0],h[1],h[2],Kn),Promise.all(c)}}class R3{constructor(t){this.parser=t,this.name=be.KHR_MATERIALS_IOR}getMaterialType(t){const s=this.parser.json.materials[t];return!s.extensions||!s.extensions[this.name]?null:ea}extendMaterialParams(t,e){const o=this.parser.json.materials[t];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const c=o.extensions[this.name];return e.ior=c.ior!==void 0?c.ior:1.5,Promise.resolve()}}class C3{constructor(t){this.parser=t,this.name=be.KHR_MATERIALS_SPECULAR}getMaterialType(t){const s=this.parser.json.materials[t];return!s.extensions||!s.extensions[this.name]?null:ea}extendMaterialParams(t,e){const s=this.parser,o=s.json.materials[t];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const c=[],f=o.extensions[this.name];e.specularIntensity=f.specularFactor!==void 0?f.specularFactor:1,f.specularTexture!==void 0&&c.push(s.assignTexture(e,"specularIntensityMap",f.specularTexture));const h=f.specularColorFactor||[1,1,1];return e.specularColor=new oe().setRGB(h[0],h[1],h[2],Kn),f.specularColorTexture!==void 0&&c.push(s.assignTexture(e,"specularColorMap",f.specularColorTexture,Pn)),Promise.all(c)}}class D3{constructor(t){this.parser=t,this.name=be.EXT_MATERIALS_BUMP}getMaterialType(t){const s=this.parser.json.materials[t];return!s.extensions||!s.extensions[this.name]?null:ea}extendMaterialParams(t,e){const s=this.parser,o=s.json.materials[t];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const c=[],f=o.extensions[this.name];return e.bumpScale=f.bumpFactor!==void 0?f.bumpFactor:1,f.bumpTexture!==void 0&&c.push(s.assignTexture(e,"bumpMap",f.bumpTexture)),Promise.all(c)}}class N3{constructor(t){this.parser=t,this.name=be.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const s=this.parser.json.materials[t];return!s.extensions||!s.extensions[this.name]?null:ea}extendMaterialParams(t,e){const s=this.parser,o=s.json.materials[t];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const c=[],f=o.extensions[this.name];return f.anisotropyStrength!==void 0&&(e.anisotropy=f.anisotropyStrength),f.anisotropyRotation!==void 0&&(e.anisotropyRotation=f.anisotropyRotation),f.anisotropyTexture!==void 0&&c.push(s.assignTexture(e,"anisotropyMap",f.anisotropyTexture)),Promise.all(c)}}class L3{constructor(t){this.parser=t,this.name=be.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,s=e.json,o=s.textures[t];if(!o.extensions||!o.extensions[this.name])return null;const c=o.extensions[this.name],f=e.options.ktx2Loader;if(!f){if(s.extensionsRequired&&s.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,c.source,f)}}class U3{constructor(t){this.parser=t,this.name=be.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const e=this.name,s=this.parser,o=s.json,c=o.textures[t];if(!c.extensions||!c.extensions[e])return null;const f=c.extensions[e],h=o.images[f.source];let d=s.textureLoader;if(h.uri){const p=s.options.manager.getHandler(h.uri);p!==null&&(d=p)}return this.detectSupport().then(function(p){if(p)return s.loadTextureImage(t,f.source,d);if(o.extensionsRequired&&o.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return s.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class O3{constructor(t){this.parser=t,this.name=be.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const e=this.name,s=this.parser,o=s.json,c=o.textures[t];if(!c.extensions||!c.extensions[e])return null;const f=c.extensions[e],h=o.images[f.source];let d=s.textureLoader;if(h.uri){const p=s.options.manager.getHandler(h.uri);p!==null&&(d=p)}return this.detectSupport().then(function(p){if(p)return s.loadTextureImage(t,f.source,d);if(o.extensionsRequired&&o.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return s.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class P3{constructor(t){this.name=be.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,s=e.bufferViews[t];if(s.extensions&&s.extensions[this.name]){const o=s.extensions[this.name],c=this.parser.getDependency("buffer",o.buffer),f=this.parser.options.meshoptDecoder;if(!f||!f.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return c.then(function(h){const d=o.byteOffset||0,p=o.byteLength||0,g=o.count,v=o.byteStride,y=new Uint8Array(h,d,p);return f.decodeGltfBufferAsync?f.decodeGltfBufferAsync(g,v,y,o.mode,o.filter).then(function(S){return S.buffer}):f.ready.then(function(){const S=new ArrayBuffer(g*v);return f.decodeGltfBuffer(new Uint8Array(S),g,v,y,o.mode,o.filter),S})})}else return null}}class I3{constructor(t){this.name=be.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,s=e.nodes[t];if(!s.extensions||!s.extensions[this.name]||s.mesh===void 0)return null;const o=e.meshes[s.mesh];for(const p of o.primitives)if(p.mode!==Ti.TRIANGLES&&p.mode!==Ti.TRIANGLE_STRIP&&p.mode!==Ti.TRIANGLE_FAN&&p.mode!==void 0)return null;const f=s.extensions[this.name].attributes,h=[],d={};for(const p in f)h.push(this.parser.getDependency("accessor",f[p]).then(g=>(d[p]=g,d[p])));return h.length<1?null:(h.push(this.parser.createNodeMesh(t)),Promise.all(h).then(p=>{const g=p.pop(),v=g.isGroup?g.children:[g],y=p[0].count,S=[];for(const M of v){const T=new ue,b=new W,x=new Qi,N=new W(1,1,1),L=new ZA(M.geometry,M.material,y);for(let w=0;w<y;w++)d.TRANSLATION&&b.fromBufferAttribute(d.TRANSLATION,w),d.ROTATION&&x.fromBufferAttribute(d.ROTATION,w),d.SCALE&&N.fromBufferAttribute(d.SCALE,w),L.setMatrixAt(w,T.compose(b,x,N));for(const w in d)if(w==="_COLOR_0"){const I=d[w];L.instanceColor=new lm(I.array,I.itemSize,I.normalized)}else w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"&&M.geometry.setAttribute(w,d[w]);sn.prototype.copy.call(L,M),this.parser.assignFinalMaterial(L),S.push(L)}return g.isGroup?(g.clear(),g.add(...S),g):S[0]}))}}const ZS="glTF",Ol=12,mx={JSON:1313821514,BIN:5130562};class B3{constructor(t){this.name=be.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,Ol),s=new TextDecoder;if(this.header={magic:s.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==ZS)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const o=this.header.length-Ol,c=new DataView(t,Ol);let f=0;for(;f<o;){const h=c.getUint32(f,!0);f+=4;const d=c.getUint32(f,!0);if(f+=4,d===mx.JSON){const p=new Uint8Array(t,Ol+f,h);this.content=s.decode(p)}else if(d===mx.BIN){const p=Ol+f;this.body=t.slice(p,p+h)}f+=h}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class z3{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=be.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const s=this.json,o=this.dracoLoader,c=t.extensions[this.name].bufferView,f=t.extensions[this.name].attributes,h={},d={},p={};for(const g in f){const v=fm[g]||g.toLowerCase();h[v]=f[g]}for(const g in t.attributes){const v=fm[g]||g.toLowerCase();if(f[g]!==void 0){const y=s.accessors[t.attributes[g]],S=mo[y.componentType];p[v]=S.name,d[v]=y.normalized===!0}}return e.getDependency("bufferView",c).then(function(g){return new Promise(function(v,y){o.decodeDracoFile(g,function(S){for(const M in S.attributes){const T=S.attributes[M],b=d[M];b!==void 0&&(T.normalized=b)}v(S)},h,p,Kn,y)})})}}class F3{constructor(){this.name=be.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class H3{constructor(){this.name=be.KHR_MESH_QUANTIZATION}}class QS extends ic{constructor(t,e,s,o){super(t,e,s,o)}copySampleValue_(t){const e=this.resultBuffer,s=this.sampleValues,o=this.valueSize,c=t*o*3+o;for(let f=0;f!==o;f++)e[f]=s[c+f];return e}interpolate_(t,e,s,o){const c=this.resultBuffer,f=this.sampleValues,h=this.valueSize,d=h*2,p=h*3,g=o-e,v=(s-e)/g,y=v*v,S=y*v,M=t*p,T=M-p,b=-2*S+3*y,x=S-y,N=1-b,L=x-y+v;for(let w=0;w!==h;w++){const I=f[T+w+h],H=f[T+w+d]*g,B=f[M+w+h],X=f[M+w]*g;c[w]=N*I+L*H+b*B+x*X}return c}}const G3=new Qi;class k3 extends QS{interpolate_(t,e,s,o){const c=super.interpolate_(t,e,s,o);return G3.fromArray(c).normalize().toArray(c),c}}const Ti={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},mo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},gx={9728:Yn,9729:pi,9984:fS,9985:Yu,9986:Il,9987:Ca},_x={33071:bs,33648:rf,10497:xo},up={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},fm={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},vs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},V3={CUBICSPLINE:void 0,LINEAR:Zl,STEP:Kl},fp={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function X3(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Ym({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Oa})),r.DefaultMaterial}function er(r,t,e){for(const s in e.extensions)r[s]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[s]=e.extensions[s])}function Ra(r,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(r.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function j3(r,t,e){let s=!1,o=!1,c=!1;for(let p=0,g=t.length;p<g;p++){const v=t[p];if(v.POSITION!==void 0&&(s=!0),v.NORMAL!==void 0&&(o=!0),v.COLOR_0!==void 0&&(c=!0),s&&o&&c)break}if(!s&&!o&&!c)return Promise.resolve(r);const f=[],h=[],d=[];for(let p=0,g=t.length;p<g;p++){const v=t[p];if(s){const y=v.POSITION!==void 0?e.getDependency("accessor",v.POSITION):r.attributes.position;f.push(y)}if(o){const y=v.NORMAL!==void 0?e.getDependency("accessor",v.NORMAL):r.attributes.normal;h.push(y)}if(c){const y=v.COLOR_0!==void 0?e.getDependency("accessor",v.COLOR_0):r.attributes.color;d.push(y)}}return Promise.all([Promise.all(f),Promise.all(h),Promise.all(d)]).then(function(p){const g=p[0],v=p[1],y=p[2];return s&&(r.morphAttributes.position=g),o&&(r.morphAttributes.normal=v),c&&(r.morphAttributes.color=y),r.morphTargetsRelative=!0,r})}function W3(r,t){if(r.updateMorphTargets(),t.weights!==void 0)for(let e=0,s=t.weights.length;e<s;e++)r.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(r.morphTargetInfluences.length===e.length){r.morphTargetDictionary={};for(let s=0,o=e.length;s<o;s++)r.morphTargetDictionary[e[s]]=s}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Y3(r){let t;const e=r.extensions&&r.extensions[be.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+hp(e.attributes):t=r.indices+":"+hp(r.attributes)+":"+r.mode,r.targets!==void 0)for(let s=0,o=r.targets.length;s<o;s++)t+=":"+hp(r.targets[s]);return t}function hp(r){let t="";const e=Object.keys(r).sort();for(let s=0,o=e.length;s<o;s++)t+=e[s]+":"+r[e[s]]+";";return t}function hm(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function q3(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const K3=new ue;class Z3{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new v3,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let s=!1,o=-1,c=!1,f=-1;if(typeof navigator<"u"){const h=navigator.userAgent;s=/^((?!chrome|android).)*safari/i.test(h)===!0;const d=h.match(/Version\/(\d+)/);o=s&&d?parseInt(d[1],10):-1,c=h.indexOf("Firefox")>-1,f=c?h.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||s&&o<17||c&&f<98?this.textureLoader=new _1(this.options.manager):this.textureLoader=new b1(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new GS(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const s=this,o=this.json,c=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(f){return f._markDefs&&f._markDefs()}),Promise.all(this._invokeAll(function(f){return f.beforeRoot&&f.beforeRoot()})).then(function(){return Promise.all([s.getDependencies("scene"),s.getDependencies("animation"),s.getDependencies("camera")])}).then(function(f){const h={scene:f[0][o.scene||0],scenes:f[0],animations:f[1],cameras:f[2],asset:o.asset,parser:s,userData:{}};return er(c,h,o),Ra(h,o),Promise.all(s._invokeAll(function(d){return d.afterRoot&&d.afterRoot(h)})).then(function(){for(const d of h.scenes)d.updateMatrixWorld();t(h)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],s=this.json.meshes||[];for(let o=0,c=e.length;o<c;o++){const f=e[o].joints;for(let h=0,d=f.length;h<d;h++)t[f[h]].isBone=!0}for(let o=0,c=t.length;o<c;o++){const f=t[o];f.mesh!==void 0&&(this._addNodeRef(this.meshCache,f.mesh),f.skin!==void 0&&(s[f.mesh].isSkinnedMesh=!0)),f.camera!==void 0&&this._addNodeRef(this.cameraCache,f.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,s){if(t.refs[e]<=1)return s;const o=s.clone(),c=(f,h)=>{const d=this.associations.get(f);d!=null&&this.associations.set(h,d);for(const[p,g]of f.children.entries())c(g,h.children[p])};return c(s,o),o.name+="_instance_"+t.uses[e]++,o}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let s=0;s<e.length;s++){const o=t(e[s]);if(o)return o}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const s=[];for(let o=0;o<e.length;o++){const c=t(e[o]);c&&s.push(c)}return s}getDependency(t,e){const s=t+":"+e;let o=this.cache.get(s);if(!o){switch(t){case"scene":o=this.loadScene(e);break;case"node":o=this._invokeOne(function(c){return c.loadNode&&c.loadNode(e)});break;case"mesh":o=this._invokeOne(function(c){return c.loadMesh&&c.loadMesh(e)});break;case"accessor":o=this.loadAccessor(e);break;case"bufferView":o=this._invokeOne(function(c){return c.loadBufferView&&c.loadBufferView(e)});break;case"buffer":o=this.loadBuffer(e);break;case"material":o=this._invokeOne(function(c){return c.loadMaterial&&c.loadMaterial(e)});break;case"texture":o=this._invokeOne(function(c){return c.loadTexture&&c.loadTexture(e)});break;case"skin":o=this.loadSkin(e);break;case"animation":o=this._invokeOne(function(c){return c.loadAnimation&&c.loadAnimation(e)});break;case"camera":o=this.loadCamera(e);break;default:if(o=this._invokeOne(function(c){return c!=this&&c.getDependency&&c.getDependency(t,e)}),!o)throw new Error("Unknown type: "+t);break}this.cache.add(s,o)}return o}getDependencies(t){let e=this.cache.get(t);if(!e){const s=this,o=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(o.map(function(c,f){return s.getDependency(t,f)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],s=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[be.KHR_BINARY_GLTF].body);const o=this.options;return new Promise(function(c,f){s.load(Gl.resolveURL(e.uri,o.path),c,void 0,function(){f(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(s){const o=e.byteLength||0,c=e.byteOffset||0;return s.slice(c,c+o)})}loadAccessor(t){const e=this,s=this.json,o=this.json.accessors[t];if(o.bufferView===void 0&&o.sparse===void 0){const f=up[o.type],h=mo[o.componentType],d=o.normalized===!0,p=new h(o.count*f);return Promise.resolve(new qn(p,f,d))}const c=[];return o.bufferView!==void 0?c.push(this.getDependency("bufferView",o.bufferView)):c.push(null),o.sparse!==void 0&&(c.push(this.getDependency("bufferView",o.sparse.indices.bufferView)),c.push(this.getDependency("bufferView",o.sparse.values.bufferView))),Promise.all(c).then(function(f){const h=f[0],d=up[o.type],p=mo[o.componentType],g=p.BYTES_PER_ELEMENT,v=g*d,y=o.byteOffset||0,S=o.bufferView!==void 0?s.bufferViews[o.bufferView].byteStride:void 0,M=o.normalized===!0;let T,b;if(S&&S!==v){const x=Math.floor(y/S),N="InterleavedBuffer:"+o.bufferView+":"+o.componentType+":"+x+":"+o.count;let L=e.cache.get(N);L||(T=new p(h,x*S,o.count*S/g),L=new jA(T,S/g),e.cache.add(N,L)),b=new Vm(L,d,y%S/g,M)}else h===null?T=new p(o.count*d):T=new p(h,y,o.count*d),b=new qn(T,d,M);if(o.sparse!==void 0){const x=up.SCALAR,N=mo[o.sparse.indices.componentType],L=o.sparse.indices.byteOffset||0,w=o.sparse.values.byteOffset||0,I=new N(f[1],L,o.sparse.count*x),H=new p(f[2],w,o.sparse.count*d);h!==null&&(b=new qn(b.array.slice(),b.itemSize,b.normalized)),b.normalized=!1;for(let B=0,X=I.length;B<X;B++){const U=I[B];if(b.setX(U,H[B*d]),d>=2&&b.setY(U,H[B*d+1]),d>=3&&b.setZ(U,H[B*d+2]),d>=4&&b.setW(U,H[B*d+3]),d>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}b.normalized=M}return b})}loadTexture(t){const e=this.json,s=this.options,c=e.textures[t].source,f=e.images[c];let h=this.textureLoader;if(f.uri){const d=s.manager.getHandler(f.uri);d!==null&&(h=d)}return this.loadTextureImage(t,c,h)}loadTextureImage(t,e,s){const o=this,c=this.json,f=c.textures[t],h=c.images[e],d=(h.uri||h.bufferView)+":"+f.sampler;if(this.textureCache[d])return this.textureCache[d];const p=this.loadImageSource(e,s).then(function(g){g.flipY=!1,g.name=f.name||h.name||"",g.name===""&&typeof h.uri=="string"&&h.uri.startsWith("data:image/")===!1&&(g.name=h.uri);const y=(c.samplers||{})[f.sampler]||{};return g.magFilter=gx[y.magFilter]||pi,g.minFilter=gx[y.minFilter]||Ca,g.wrapS=_x[y.wrapS]||xo,g.wrapT=_x[y.wrapT]||xo,g.generateMipmaps=!g.isCompressedTexture&&g.minFilter!==Yn&&g.minFilter!==pi,o.associations.set(g,{textures:t}),g}).catch(function(){return null});return this.textureCache[d]=p,p}loadImageSource(t,e){const s=this,o=this.json,c=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(v=>v.clone());const f=o.images[t],h=self.URL||self.webkitURL;let d=f.uri||"",p=!1;if(f.bufferView!==void 0)d=s.getDependency("bufferView",f.bufferView).then(function(v){p=!0;const y=new Blob([v],{type:f.mimeType});return d=h.createObjectURL(y),d});else if(f.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const g=Promise.resolve(d).then(function(v){return new Promise(function(y,S){let M=y;e.isImageBitmapLoader===!0&&(M=function(T){const b=new Cn(T);b.needsUpdate=!0,y(b)}),e.load(Gl.resolveURL(v,c.path),M,void 0,S)})}).then(function(v){return p===!0&&h.revokeObjectURL(d),Ra(v,f),v.userData.mimeType=f.mimeType||q3(f.uri),v}).catch(function(v){throw console.error("THREE.GLTFLoader: Couldn't load texture",d),v});return this.sourceCache[t]=g,g}assignTexture(t,e,s,o){const c=this;return this.getDependency("texture",s.index).then(function(f){if(!f)return null;if(s.texCoord!==void 0&&s.texCoord>0&&(f=f.clone(),f.channel=s.texCoord),c.extensions[be.KHR_TEXTURE_TRANSFORM]){const h=s.extensions!==void 0?s.extensions[be.KHR_TEXTURE_TRANSFORM]:void 0;if(h){const d=c.associations.get(f);f=c.extensions[be.KHR_TEXTURE_TRANSFORM].extendTexture(f,h),c.associations.set(f,d)}}return o!==void 0&&(f.colorSpace=o),t[e]=f,f})}assignFinalMaterial(t){const e=t.geometry;let s=t.material;const o=e.attributes.tangent===void 0,c=e.attributes.color!==void 0,f=e.attributes.normal===void 0;if(t.isPoints){const h="PointsMaterial:"+s.uuid;let d=this.cache.get(h);d||(d=new BS,Zi.prototype.copy.call(d,s),d.color.copy(s.color),d.map=s.map,d.sizeAttenuation=!1,this.cache.add(h,d)),s=d}else if(t.isLine){const h="LineBasicMaterial:"+s.uuid;let d=this.cache.get(h);d||(d=new IS,Zi.prototype.copy.call(d,s),d.color.copy(s.color),d.map=s.map,this.cache.add(h,d)),s=d}if(o||c||f){let h="ClonedMaterial:"+s.uuid+":";o&&(h+="derivative-tangents:"),c&&(h+="vertex-colors:"),f&&(h+="flat-shading:");let d=this.cache.get(h);d||(d=s.clone(),c&&(d.vertexColors=!0),f&&(d.flatShading=!0),o&&(d.normalScale&&(d.normalScale.y*=-1),d.clearcoatNormalScale&&(d.clearcoatNormalScale.y*=-1)),this.cache.add(h,d),this.associations.set(d,this.associations.get(s))),s=d}t.material=s}getMaterialType(){return Ym}loadMaterial(t){const e=this,s=this.json,o=this.extensions,c=s.materials[t];let f;const h={},d=c.extensions||{},p=[];if(d[be.KHR_MATERIALS_UNLIT]){const v=o[be.KHR_MATERIALS_UNLIT];f=v.getMaterialType(),p.push(v.extendParams(h,c,e))}else{const v=c.pbrMetallicRoughness||{};if(h.color=new oe(1,1,1),h.opacity=1,Array.isArray(v.baseColorFactor)){const y=v.baseColorFactor;h.color.setRGB(y[0],y[1],y[2],Kn),h.opacity=y[3]}v.baseColorTexture!==void 0&&p.push(e.assignTexture(h,"map",v.baseColorTexture,Pn)),h.metalness=v.metallicFactor!==void 0?v.metallicFactor:1,h.roughness=v.roughnessFactor!==void 0?v.roughnessFactor:1,v.metallicRoughnessTexture!==void 0&&(p.push(e.assignTexture(h,"metalnessMap",v.metallicRoughnessTexture)),p.push(e.assignTexture(h,"roughnessMap",v.metallicRoughnessTexture))),f=this._invokeOne(function(y){return y.getMaterialType&&y.getMaterialType(t)}),p.push(Promise.all(this._invokeAll(function(y){return y.extendMaterialParams&&y.extendMaterialParams(t,h)})))}c.doubleSided===!0&&(h.side=Yi);const g=c.alphaMode||fp.OPAQUE;if(g===fp.BLEND?(h.transparent=!0,h.depthWrite=!1):(h.transparent=!1,g===fp.MASK&&(h.alphaTest=c.alphaCutoff!==void 0?c.alphaCutoff:.5)),c.normalTexture!==void 0&&f!==sr&&(p.push(e.assignTexture(h,"normalMap",c.normalTexture)),h.normalScale=new se(1,1),c.normalTexture.scale!==void 0)){const v=c.normalTexture.scale;h.normalScale.set(v,v)}if(c.occlusionTexture!==void 0&&f!==sr&&(p.push(e.assignTexture(h,"aoMap",c.occlusionTexture)),c.occlusionTexture.strength!==void 0&&(h.aoMapIntensity=c.occlusionTexture.strength)),c.emissiveFactor!==void 0&&f!==sr){const v=c.emissiveFactor;h.emissive=new oe().setRGB(v[0],v[1],v[2],Kn)}return c.emissiveTexture!==void 0&&f!==sr&&p.push(e.assignTexture(h,"emissiveMap",c.emissiveTexture,Pn)),Promise.all(p).then(function(){const v=new f(h);return c.name&&(v.name=c.name),Ra(v,c),e.associations.set(v,{materials:t}),c.extensions&&er(o,v,c),v})}createUniqueName(t){const e=ze.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,s=this.extensions,o=this.primitiveCache;function c(h){return s[be.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(h,e).then(function(d){return vx(d,h,e)})}const f=[];for(let h=0,d=t.length;h<d;h++){const p=t[h],g=Y3(p),v=o[g];if(v)f.push(v.promise);else{let y;p.extensions&&p.extensions[be.KHR_DRACO_MESH_COMPRESSION]?y=c(p):y=vx(new ta,p,e),o[g]={primitive:p,promise:y},f.push(y)}}return Promise.all(f)}loadMesh(t){const e=this,s=this.json,o=this.extensions,c=s.meshes[t],f=c.primitives,h=[];for(let d=0,p=f.length;d<p;d++){const g=f[d].material===void 0?X3(this.cache):this.getDependency("material",f[d].material);h.push(g)}return h.push(e.loadGeometries(f)),Promise.all(h).then(function(d){const p=d.slice(0,d.length-1),g=d[d.length-1],v=[];for(let S=0,M=g.length;S<M;S++){const T=g[S],b=f[S];let x;const N=p[S];if(b.mode===Ti.TRIANGLES||b.mode===Ti.TRIANGLE_STRIP||b.mode===Ti.TRIANGLE_FAN||b.mode===void 0)x=c.isSkinnedMesh===!0?new YA(T,N):new mi(T,N),x.isSkinnedMesh===!0&&x.normalizeSkinWeights(),b.mode===Ti.TRIANGLE_STRIP?x.geometry=px(x.geometry,SS):b.mode===Ti.TRIANGLE_FAN&&(x.geometry=px(x.geometry,rm));else if(b.mode===Ti.LINES)x=new $A(T,N);else if(b.mode===Ti.LINE_STRIP)x=new Wm(T,N);else if(b.mode===Ti.LINE_LOOP)x=new t1(T,N);else if(b.mode===Ti.POINTS)x=new e1(T,N);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+b.mode);Object.keys(x.geometry.morphAttributes).length>0&&W3(x,c),x.name=e.createUniqueName(c.name||"mesh_"+t),Ra(x,c),b.extensions&&er(o,x,b),e.assignFinalMaterial(x),v.push(x)}for(let S=0,M=v.length;S<M;S++)e.associations.set(v[S],{meshes:t,primitives:S});if(v.length===1)return c.extensions&&er(o,v[0],c),v[0];const y=new rr;c.extensions&&er(o,y,c),e.associations.set(y,{meshes:t});for(let S=0,M=v.length;S<M;S++)y.add(v[S]);return y})}loadCamera(t){let e;const s=this.json.cameras[t],o=s[s.type];if(!o){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return s.type==="perspective"?e=new Wn(ES.radToDeg(o.yfov),o.aspectRatio||1,o.znear||1,o.zfar||2e6):s.type==="orthographic"&&(e=new Km(-o.xmag,o.xmag,o.ymag,-o.ymag,o.znear,o.zfar)),s.name&&(e.name=this.createUniqueName(s.name)),Ra(e,s),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],s=[];for(let o=0,c=e.joints.length;o<c;o++)s.push(this._loadNodeShallow(e.joints[o]));return e.inverseBindMatrices!==void 0?s.push(this.getDependency("accessor",e.inverseBindMatrices)):s.push(null),Promise.all(s).then(function(o){const c=o.pop(),f=o,h=[],d=[];for(let p=0,g=f.length;p<g;p++){const v=f[p];if(v){h.push(v);const y=new ue;c!==null&&y.fromArray(c.array,p*16),d.push(y)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[p])}return new Xm(h,d)})}loadAnimation(t){const e=this.json,s=this,o=e.animations[t],c=o.name?o.name:"animation_"+t,f=[],h=[],d=[],p=[],g=[];for(let v=0,y=o.channels.length;v<y;v++){const S=o.channels[v],M=o.samplers[S.sampler],T=S.target,b=T.node,x=o.parameters!==void 0?o.parameters[M.input]:M.input,N=o.parameters!==void 0?o.parameters[M.output]:M.output;T.node!==void 0&&(f.push(this.getDependency("node",b)),h.push(this.getDependency("accessor",x)),d.push(this.getDependency("accessor",N)),p.push(M),g.push(T))}return Promise.all([Promise.all(f),Promise.all(h),Promise.all(d),Promise.all(p),Promise.all(g)]).then(function(v){const y=v[0],S=v[1],M=v[2],T=v[3],b=v[4],x=[];for(let N=0,L=y.length;N<L;N++){const w=y[N],I=S[N],H=M[N],B=T[N],X=b[N];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();const U=s._createAnimationTracks(w,I,H,B,X);if(U)for(let D=0;D<U.length;D++)x.push(U[D])}return new u1(c,void 0,x)})}createNodeMesh(t){const e=this.json,s=this,o=e.nodes[t];return o.mesh===void 0?null:s.getDependency("mesh",o.mesh).then(function(c){const f=s._getNodeRef(s.meshCache,o.mesh,c);return o.weights!==void 0&&f.traverse(function(h){if(h.isMesh)for(let d=0,p=o.weights.length;d<p;d++)h.morphTargetInfluences[d]=o.weights[d]}),f})}loadNode(t){const e=this.json,s=this,o=e.nodes[t],c=s._loadNodeShallow(t),f=[],h=o.children||[];for(let p=0,g=h.length;p<g;p++)f.push(s.getDependency("node",h[p]));const d=o.skin===void 0?Promise.resolve(null):s.getDependency("skin",o.skin);return Promise.all([c,Promise.all(f),d]).then(function(p){const g=p[0],v=p[1],y=p[2];y!==null&&g.traverse(function(S){S.isSkinnedMesh&&S.bind(y,K3)});for(let S=0,M=v.length;S<M;S++)g.add(v[S]);return g})}_loadNodeShallow(t){const e=this.json,s=this.extensions,o=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const c=e.nodes[t],f=c.name?o.createUniqueName(c.name):"",h=[],d=o._invokeOne(function(p){return p.createNodeMesh&&p.createNodeMesh(t)});return d&&h.push(d),c.camera!==void 0&&h.push(o.getDependency("camera",c.camera).then(function(p){return o._getNodeRef(o.cameraCache,c.camera,p)})),o._invokeAll(function(p){return p.createNodeAttachment&&p.createNodeAttachment(t)}).forEach(function(p){h.push(p)}),this.nodeCache[t]=Promise.all(h).then(function(p){let g;if(c.isBone===!0?g=new OS:p.length>1?g=new rr:p.length===1?g=p[0]:g=new sn,g!==p[0])for(let v=0,y=p.length;v<y;v++)g.add(p[v]);if(c.name&&(g.userData.name=c.name,g.name=f),Ra(g,c),c.extensions&&er(s,g,c),c.matrix!==void 0){const v=new ue;v.fromArray(c.matrix),g.applyMatrix4(v)}else c.translation!==void 0&&g.position.fromArray(c.translation),c.rotation!==void 0&&g.quaternion.fromArray(c.rotation),c.scale!==void 0&&g.scale.fromArray(c.scale);return o.associations.has(g)||o.associations.set(g,{}),o.associations.get(g).nodes=t,g}),this.nodeCache[t]}loadScene(t){const e=this.extensions,s=this.json.scenes[t],o=this,c=new rr;s.name&&(c.name=o.createUniqueName(s.name)),Ra(c,s),s.extensions&&er(e,c,s);const f=s.nodes||[],h=[];for(let d=0,p=f.length;d<p;d++)h.push(o.getDependency("node",f[d]));return Promise.all(h).then(function(d){for(let g=0,v=d.length;g<v;g++)c.add(d[g]);const p=g=>{const v=new Map;for(const[y,S]of o.associations)(y instanceof Zi||y instanceof Cn)&&v.set(y,S);return g.traverse(y=>{const S=o.associations.get(y);S!=null&&v.set(y,S)}),v};return o.associations=p(c),c})}_createAnimationTracks(t,e,s,o,c){const f=[],h=t.name?t.name:t.uuid,d=[];vs[c.path]===vs.weights?t.traverse(function(y){y.morphTargetInfluences&&d.push(y.name?y.name:y.uuid)}):d.push(h);let p;switch(vs[c.path]){case vs.weights:p=Mo;break;case vs.rotation:p=Eo;break;case vs.translation:case vs.scale:p=To;break;default:switch(s.itemSize){case 1:p=Mo;break;case 2:case 3:default:p=To;break}break}const g=o.interpolation!==void 0?V3[o.interpolation]:Zl,v=this._getArrayFromAccessor(s);for(let y=0,S=d.length;y<S;y++){const M=new p(d[y]+"."+vs[c.path],e.array,v,g);o.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(M),f.push(M)}return f}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const s=hm(e.constructor),o=new Float32Array(e.length);for(let c=0,f=e.length;c<f;c++)o[c]=e[c]*s;e=o}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(s){const o=this instanceof Eo?k3:QS;return new o(this.times,this.values,this.getValueSize()/3,s)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Q3(r,t,e){const s=t.attributes,o=new za;if(s.POSITION!==void 0){const h=e.json.accessors[s.POSITION],d=h.min,p=h.max;if(d!==void 0&&p!==void 0){if(o.set(new W(d[0],d[1],d[2]),new W(p[0],p[1],p[2])),h.normalized){const g=hm(mo[h.componentType]);o.min.multiplyScalar(g),o.max.multiplyScalar(g)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const c=t.targets;if(c!==void 0){const h=new W,d=new W;for(let p=0,g=c.length;p<g;p++){const v=c[p];if(v.POSITION!==void 0){const y=e.json.accessors[v.POSITION],S=y.min,M=y.max;if(S!==void 0&&M!==void 0){if(d.setX(Math.max(Math.abs(S[0]),Math.abs(M[0]))),d.setY(Math.max(Math.abs(S[1]),Math.abs(M[1]))),d.setZ(Math.max(Math.abs(S[2]),Math.abs(M[2]))),y.normalized){const T=hm(mo[y.componentType]);d.multiplyScalar(T)}h.max(d)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}o.expandByVector(h)}r.boundingBox=o;const f=new $i;o.getCenter(f.center),f.radius=o.min.distanceTo(o.max)/2,r.boundingSphere=f}function vx(r,t,e){const s=t.attributes,o=[];function c(f,h){return e.getDependency("accessor",f).then(function(d){r.setAttribute(h,d)})}for(const f in s){const h=fm[f]||f.toLowerCase();h in r.attributes||o.push(c(s[f],h))}if(t.indices!==void 0&&!r.index){const f=e.getDependency("accessor",t.indices).then(function(h){r.setIndex(h)});o.push(f)}return Re.workingColorSpace!==Kn&&"COLOR_0"in s&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Re.workingColorSpace}" not supported.`),Ra(r,t),Q3(r,t,e),Promise.all(o).then(function(){return t.targets!==void 0?j3(r,t.targets,e):r})}const yx={type:"change"},$m={type:"start"},JS={type:"end"},Vu=new ec,xx=new xs,J3=Math.cos(70*ES.DEG2RAD),xn=new W,ni=2*Math.PI,je={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},dp=1e-6;class $3 extends U1{constructor(t,e=null){super(t,e),this.state=je.NONE,this.target=new W,this.cursor=new W,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:fo.ROTATE,MIDDLE:fo.DOLLY,RIGHT:fo.PAN},this.touches={ONE:oo.ROTATE,TWO:oo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new W,this._lastQuaternion=new Qi,this._lastTargetPosition=new W,this._quat=new Qi().setFromUnitVectors(t.up,new W(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ky,this._sphericalDelta=new ky,this._scale=1,this._panOffset=new W,this._rotateStart=new se,this._rotateEnd=new se,this._rotateDelta=new se,this._panStart=new se,this._panEnd=new se,this._panDelta=new se,this._dollyStart=new se,this._dollyEnd=new se,this._dollyDelta=new se,this._dollyDirection=new W,this._mouse=new se,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=eD.bind(this),this._onPointerDown=tD.bind(this),this._onPointerUp=nD.bind(this),this._onContextMenu=cD.bind(this),this._onMouseWheel=sD.bind(this),this._onKeyDown=rD.bind(this),this._onTouchStart=oD.bind(this),this._onTouchMove=lD.bind(this),this._onMouseDown=iD.bind(this),this._onMouseMove=aD.bind(this),this._interceptControlDown=uD.bind(this),this._interceptControlUp=fD.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(yx),this.update(),this.state=je.NONE}update(t=null){const e=this.object.position;xn.copy(e).sub(this.target),xn.applyQuaternion(this._quat),this._spherical.setFromVector3(xn),this.autoRotate&&this.state===je.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(s)&&isFinite(o)&&(s<-Math.PI?s+=ni:s>Math.PI&&(s-=ni),o<-Math.PI?o+=ni:o>Math.PI&&(o-=ni),s<=o?this._spherical.theta=Math.max(s,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+o)/2?Math.max(s,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=f!=this._spherical.radius}if(xn.setFromSpherical(this._spherical),xn.applyQuaternion(this._quatInverse),e.copy(this.target).add(xn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const h=xn.length();f=this._clampDistance(h*this._scale);const d=h-f;this.object.position.addScaledVector(this._dollyDirection,d),this.object.updateMatrixWorld(),c=!!d}else if(this.object.isOrthographicCamera){const h=new W(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const d=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=d!==this.object.zoom;const p=new W(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(h),this.object.updateMatrixWorld(),f=xn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(Vu.origin.copy(this.object.position),Vu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Vu.direction))<J3?this.object.lookAt(this.target):(xx.setFromNormalAndCoplanarPoint(this.object.up,this.target),Vu.intersectPlane(xx,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>dp||8*(1-this._lastQuaternion.dot(this.object.quaternion))>dp||this._lastTargetPosition.distanceToSquared(this.target)>dp?(this.dispatchEvent(yx),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?ni/60*this.autoRotateSpeed*t:ni/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){xn.setFromMatrixColumn(e,0),xn.multiplyScalar(-t),this._panOffset.add(xn)}_panUp(t,e){this.screenSpacePanning===!0?xn.setFromMatrixColumn(e,1):(xn.setFromMatrixColumn(e,0),xn.crossVectors(this.object.up,xn)),xn.multiplyScalar(t),this._panOffset.add(xn)}_pan(t,e){const s=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;xn.copy(o).sub(this.target);let c=xn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*e*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),o=t-s.left,c=e-s.top,f=s.width,h=s.height;this._mouse.x=o/f*2-1,this._mouse.y=-(c/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(ni*this._rotateDelta.x/e.clientHeight),this._rotateUp(ni*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(ni*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-ni*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(ni*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-ni*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),s=.5*(t.pageX+e.x),o=.5*(t.pageY+e.y);this._rotateStart.set(s,o)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),s=.5*(t.pageX+e.x),o=.5*(t.pageY+e.y);this._panStart.set(s,o)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),s=t.pageX-e.x,o=t.pageY-e.y,c=Math.sqrt(s*s+o*o);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),o=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(o,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(ni*this._rotateDelta.x/e.clientHeight),this._rotateUp(ni*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),s=.5*(t.pageX+e.x),o=.5*(t.pageY+e.y);this._panEnd.set(s,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),s=t.pageX-e.x,o=t.pageY-e.y,c=Math.sqrt(s*s+o*o);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(t.pageX+e.x)*.5,h=(t.pageY+e.y)*.5;this._updateZoomParameters(f,h)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new se,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function tD(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function eD(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function nD(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(JS),this.state=je.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function iD(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case fo.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=je.DOLLY;break;case fo.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=je.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=je.ROTATE}break;case fo.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=je.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=je.PAN}break;default:this.state=je.NONE}this.state!==je.NONE&&this.dispatchEvent($m)}function aD(r){switch(this.state){case je.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case je.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case je.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function sD(r){this.enabled===!1||this.enableZoom===!1||this.state!==je.NONE||(r.preventDefault(),this.dispatchEvent($m),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(JS))}function rD(r){this.enabled!==!1&&this._handleKeyDown(r)}function oD(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case oo.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=je.TOUCH_ROTATE;break;case oo.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=je.TOUCH_PAN;break;default:this.state=je.NONE}break;case 2:switch(this.touches.TWO){case oo.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=je.TOUCH_DOLLY_PAN;break;case oo.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=je.TOUCH_DOLLY_ROTATE;break;default:this.state=je.NONE}break;default:this.state=je.NONE}this.state!==je.NONE&&this.dispatchEvent($m)}function lD(r){switch(this._trackPointer(r),this.state){case je.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case je.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case je.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case je.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=je.NONE}}function cD(r){this.enabled!==!1&&r.preventDefault()}function uD(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function fD(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const hD=()=>{const r=$e.useRef(null),t=$e.useRef(!1);return $e.useEffect(()=>{if(!r.current||t.current)return;const e=new XA,s=new Wn(75,600/400,.1,1e3),o=new g3({antialias:!0}),c=900,f=800;o.setSize(c,f),o.setClearColor(0,0),o.shadowMap.enabled=!0,o.shadowMap.type=lS,s.aspect=c/f,s.updateProjectionMatrix(),s.position.set(-5,6,5),s.lookAt(0,0,0),r.current.appendChild(o.domElement),new _3().load("/src/assets/isometric.glb",S=>{t.current=!0;const M=S.scene;M.scale.set(2,2,2),e.add(M)},void 0,S=>{console.error("An error occurred while loading the GLB model:",S)}),e.add(new S1(16777215,1));const d=new VS(16777215,2,100);d.position.set(5,5,5),e.add(d);const p=new XS(16777215,2);p.position.set(5,5,5),e.add(p);const g=new kS(16777215,1);g.position.set(0,5,5),g.angle=Math.PI/6,e.add(g);const v=new $3(s,o.domElement);v.enableDamping=!0,v.dampingFactor=.25,v.screenSpacePanning=!1,v.enableZoom=!1;const y=()=>{v.update(),o.render(e,s)};return o.setAnimationLoop(y),()=>{v.dispose(),o.dispose(),r.current&&o.domElement.parentNode===r.current&&r.current.removeChild(o.domElement)}},[]),nt.jsx("div",{ref:r,style:{width:"900px",height:"800px",margin:"auto"}})},dD="/assets/ribbon-DB7xxd3l.png",pD=()=>{const[r,t]=$e.useState(0);return $e.useEffect(()=>{const e=()=>{const s=window.scrollY;t(s)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[r]),nt.jsxs(nt.Fragment,{children:[nt.jsx(lT,{}),nt.jsxs("div",{className:"relative pt-16 min-h-screen px-8",children:[nt.jsx("div",{className:"absolute right-[-100px] top-[-300px] transform -translate-y-1/2 z-0",children:nt.jsx(hD,{})}),nt.jsx(rS,{}),nt.jsx("section",{id:"Home",className:"scroll-mt-32",children:nt.jsxs("div",{className:"absolute top-20 left-8 w-400 h-100 bg-white/40 backdrop-blur-lg border border-white/30 rounded-3xl p-10 shadow-lg max-w-3xl mt-28 z-10",children:[nt.jsx("img",{src:dD,alt:"Ribbon",className:"absolute -top-6 -left-6 w-30 h-30 pointer-events-none"}),nt.jsx(fT,{})]})})]})]})};class ji{constructor(t,e={}){if(!(t instanceof Node))throw"Can't initialize VanillaTilt because "+t+" is not a Node.";this.width=null,this.height=null,this.clientWidth=null,this.clientHeight=null,this.left=null,this.top=null,this.gammazero=null,this.betazero=null,this.lastgammazero=null,this.lastbetazero=null,this.transitionTimeout=null,this.updateCall=null,this.event=null,this.updateBind=this.update.bind(this),this.resetBind=this.reset.bind(this),this.element=t,this.settings=this.extendSettings(e),this.reverse=this.settings.reverse?-1:1,this.resetToStart=ji.isSettingTrue(this.settings["reset-to-start"]),this.glare=ji.isSettingTrue(this.settings.glare),this.glarePrerender=ji.isSettingTrue(this.settings["glare-prerender"]),this.fullPageListening=ji.isSettingTrue(this.settings["full-page-listening"]),this.gyroscope=ji.isSettingTrue(this.settings.gyroscope),this.gyroscopeSamples=this.settings.gyroscopeSamples,this.elementListener=this.getElementListener(),this.glare&&this.prepareGlare(),this.fullPageListening&&this.updateClientSize(),this.addEventListeners(),this.reset(),this.resetToStart===!1&&(this.settings.startX=0,this.settings.startY=0)}static isSettingTrue(t){return t===""||t===!0||t===1}getElementListener(){if(this.fullPageListening)return window.document;if(typeof this.settings["mouse-event-element"]=="string"){const t=document.querySelector(this.settings["mouse-event-element"]);if(t)return t}return this.settings["mouse-event-element"]instanceof Node?this.settings["mouse-event-element"]:this.element}addEventListeners(){this.onMouseEnterBind=this.onMouseEnter.bind(this),this.onMouseMoveBind=this.onMouseMove.bind(this),this.onMouseLeaveBind=this.onMouseLeave.bind(this),this.onWindowResizeBind=this.onWindowResize.bind(this),this.onDeviceOrientationBind=this.onDeviceOrientation.bind(this),this.elementListener.addEventListener("mouseenter",this.onMouseEnterBind),this.elementListener.addEventListener("mouseleave",this.onMouseLeaveBind),this.elementListener.addEventListener("mousemove",this.onMouseMoveBind),(this.glare||this.fullPageListening)&&window.addEventListener("resize",this.onWindowResizeBind),this.gyroscope&&window.addEventListener("deviceorientation",this.onDeviceOrientationBind)}removeEventListeners(){this.elementListener.removeEventListener("mouseenter",this.onMouseEnterBind),this.elementListener.removeEventListener("mouseleave",this.onMouseLeaveBind),this.elementListener.removeEventListener("mousemove",this.onMouseMoveBind),this.gyroscope&&window.removeEventListener("deviceorientation",this.onDeviceOrientationBind),(this.glare||this.fullPageListening)&&window.removeEventListener("resize",this.onWindowResizeBind)}destroy(){clearTimeout(this.transitionTimeout),this.updateCall!==null&&cancelAnimationFrame(this.updateCall),this.element.style.willChange="",this.element.style.transition="",this.element.style.transform="",this.resetGlare(),this.removeEventListeners(),this.element.vanillaTilt=null,delete this.element.vanillaTilt,this.element=null}onDeviceOrientation(t){if(t.gamma===null||t.beta===null)return;this.updateElementPosition(),this.gyroscopeSamples>0&&(this.lastgammazero=this.gammazero,this.lastbetazero=this.betazero,this.gammazero===null?(this.gammazero=t.gamma,this.betazero=t.beta):(this.gammazero=(t.gamma+this.lastgammazero)/2,this.betazero=(t.beta+this.lastbetazero)/2),this.gyroscopeSamples-=1);const e=this.settings.gyroscopeMaxAngleX-this.settings.gyroscopeMinAngleX,s=this.settings.gyroscopeMaxAngleY-this.settings.gyroscopeMinAngleY,o=e/this.width,c=s/this.height,f=t.gamma-(this.settings.gyroscopeMinAngleX+this.gammazero),h=t.beta-(this.settings.gyroscopeMinAngleY+this.betazero),d=f/o,p=h/c;this.updateCall!==null&&cancelAnimationFrame(this.updateCall),this.event={clientX:d+this.left,clientY:p+this.top},this.updateCall=requestAnimationFrame(this.updateBind)}onMouseEnter(){this.updateElementPosition(),this.element.style.willChange="transform",this.setTransition()}onMouseMove(t){this.updateCall!==null&&cancelAnimationFrame(this.updateCall),this.event=t,this.updateCall=requestAnimationFrame(this.updateBind)}onMouseLeave(){this.setTransition(),this.settings.reset&&requestAnimationFrame(this.resetBind)}reset(){this.onMouseEnter(),this.fullPageListening?this.event={clientX:(this.settings.startX+this.settings.max)/(2*this.settings.max)*this.clientWidth,clientY:(this.settings.startY+this.settings.max)/(2*this.settings.max)*this.clientHeight}:this.event={clientX:this.left+(this.settings.startX+this.settings.max)/(2*this.settings.max)*this.width,clientY:this.top+(this.settings.startY+this.settings.max)/(2*this.settings.max)*this.height};let t=this.settings.scale;this.settings.scale=1,this.update(),this.settings.scale=t,this.resetGlare()}resetGlare(){this.glare&&(this.glareElement.style.transform="rotate(180deg) translate(-50%, -50%)",this.glareElement.style.opacity="0")}getValues(){let t,e;this.fullPageListening?(t=this.event.clientX/this.clientWidth,e=this.event.clientY/this.clientHeight):(t=(this.event.clientX-this.left)/this.width,e=(this.event.clientY-this.top)/this.height),t=Math.min(Math.max(t,0),1),e=Math.min(Math.max(e,0),1);let s=(this.reverse*(this.settings.max-t*this.settings.max*2)).toFixed(2),o=(this.reverse*(e*this.settings.max*2-this.settings.max)).toFixed(2),c=Math.atan2(this.event.clientX-(this.left+this.width/2),-(this.event.clientY-(this.top+this.height/2)))*(180/Math.PI);return{tiltX:s,tiltY:o,percentageX:t*100,percentageY:e*100,angle:c}}updateElementPosition(){let t=this.element.getBoundingClientRect();this.width=this.element.offsetWidth,this.height=this.element.offsetHeight,this.left=t.left,this.top=t.top}update(){let t=this.getValues();this.element.style.transform="perspective("+this.settings.perspective+"px) rotateX("+(this.settings.axis==="x"?0:t.tiltY)+"deg) rotateY("+(this.settings.axis==="y"?0:t.tiltX)+"deg) scale3d("+this.settings.scale+", "+this.settings.scale+", "+this.settings.scale+")",this.glare&&(this.glareElement.style.transform=`rotate(${t.angle}deg) translate(-50%, -50%)`,this.glareElement.style.opacity=`${t.percentageY*this.settings["max-glare"]/100}`),this.element.dispatchEvent(new CustomEvent("tiltChange",{detail:t})),this.updateCall=null}prepareGlare(){if(!this.glarePrerender){const t=document.createElement("div");t.classList.add("js-tilt-glare");const e=document.createElement("div");e.classList.add("js-tilt-glare-inner"),t.appendChild(e),this.element.appendChild(t)}this.glareElementWrapper=this.element.querySelector(".js-tilt-glare"),this.glareElement=this.element.querySelector(".js-tilt-glare-inner"),!this.glarePrerender&&(Object.assign(this.glareElementWrapper.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden","pointer-events":"none","border-radius":"inherit"}),Object.assign(this.glareElement.style,{position:"absolute",top:"50%",left:"50%","pointer-events":"none","background-image":"linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",transform:"rotate(180deg) translate(-50%, -50%)","transform-origin":"0% 0%",opacity:"0"}),this.updateGlareSize())}updateGlareSize(){if(this.glare){const t=(this.element.offsetWidth>this.element.offsetHeight?this.element.offsetWidth:this.element.offsetHeight)*2;Object.assign(this.glareElement.style,{width:`${t}px`,height:`${t}px`})}}updateClientSize(){this.clientWidth=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,this.clientHeight=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}onWindowResize(){this.updateGlareSize(),this.updateClientSize()}setTransition(){clearTimeout(this.transitionTimeout),this.element.style.transition=this.settings.speed+"ms "+this.settings.easing,this.glare&&(this.glareElement.style.transition=`opacity ${this.settings.speed}ms ${this.settings.easing}`),this.transitionTimeout=setTimeout(()=>{this.element.style.transition="",this.glare&&(this.glareElement.style.transition="")},this.settings.speed)}extendSettings(t){let e={reverse:!1,max:15,startX:0,startY:0,perspective:1e3,easing:"cubic-bezier(.03,.98,.52,.99)",scale:1,speed:300,transition:!0,axis:null,glare:!1,"max-glare":1,"glare-prerender":!1,"full-page-listening":!1,"mouse-event-element":null,reset:!0,"reset-to-start":!0,gyroscope:!0,gyroscopeMinAngleX:-45,gyroscopeMaxAngleX:45,gyroscopeMinAngleY:-45,gyroscopeMaxAngleY:45,gyroscopeSamples:10},s={};for(var o in e)if(o in t)s[o]=t[o];else if(this.element.hasAttribute("data-tilt-"+o)){let c=this.element.getAttribute("data-tilt-"+o);try{s[o]=JSON.parse(c)}catch{s[o]=c}}else s[o]=e[o];return s}static init(t,e){t instanceof Node&&(t=[t]),t instanceof NodeList&&(t=[].slice.call(t)),t instanceof Array&&t.forEach(s=>{"vanillaTilt"in s||(s.vanillaTilt=new ji(s,e))})}}typeof document<"u"&&(window.VanillaTilt=ji,ji.init(document.querySelectorAll("[data-tilt]")));const mD="/assets/ghibli-D127VBJN.gif";var Xu=function(r,t){return r<t?-1:r>t?1:0},Sx=function(r){return r.reduce(function(t,e){return t+e},0)},gD=function(){function r(e){this.colors=e}var t=r.prototype;return t.palette=function(){return this.colors},t.map=function(e){return e},r}(),_D=function(){function r(c,f,h){return(c<<10)+(f<<5)+h}function t(c){var f=[],h=!1;function d(){f.sort(c),h=!0}return{push:function(p){f.push(p),h=!1},peek:function(p){return h||d(),p===void 0&&(p=f.length-1),f[p]},pop:function(){return h||d(),f.pop()},size:function(){return f.length},map:function(p){return f.map(p)},debug:function(){return h||d(),f}}}function e(c,f,h,d,p,g,v){var y=this;y.r1=c,y.r2=f,y.g1=h,y.g2=d,y.b1=p,y.b2=g,y.histo=v}function s(){this.vboxes=new t(function(c,f){return Xu(c.vbox.count()*c.vbox.volume(),f.vbox.count()*f.vbox.volume())})}function o(c,f){if(f.count()){var h=f.r2-f.r1+1,d=f.g2-f.g1+1,p=Math.max.apply(null,[h,d,f.b2-f.b1+1]);if(f.count()==1)return[f.copy()];var g,v,y,S,M=0,T=[],b=[];if(p==h)for(g=f.r1;g<=f.r2;g++){for(S=0,v=f.g1;v<=f.g2;v++)for(y=f.b1;y<=f.b2;y++)S+=c[r(g,v,y)]||0;T[g]=M+=S}else if(p==d)for(g=f.g1;g<=f.g2;g++){for(S=0,v=f.r1;v<=f.r2;v++)for(y=f.b1;y<=f.b2;y++)S+=c[r(v,g,y)]||0;T[g]=M+=S}else for(g=f.b1;g<=f.b2;g++){for(S=0,v=f.r1;v<=f.r2;v++)for(y=f.g1;y<=f.g2;y++)S+=c[r(v,y,g)]||0;T[g]=M+=S}return T.forEach(function(x,N){b[N]=M-x}),function(x){var N,L,w,I,H,B=x+"1",X=x+"2",U=0;for(g=f[B];g<=f[X];g++)if(T[g]>M/2){for(w=f.copy(),I=f.copy(),H=(N=g-f[B])<=(L=f[X]-g)?Math.min(f[X]-1,~~(g+L/2)):Math.max(f[B],~~(g-1-N/2));!T[H];)H++;for(U=b[H];!U&&T[H-1];)U=b[--H];return w[X]=H,I[B]=w[X]+1,[w,I]}}(p==h?"r":p==d?"g":"b")}}return e.prototype={volume:function(c){var f=this;return f._volume&&!c||(f._volume=(f.r2-f.r1+1)*(f.g2-f.g1+1)*(f.b2-f.b1+1)),f._volume},count:function(c){var f=this,h=f.histo;if(!f._count_set||c){var d,p,g,v=0;for(d=f.r1;d<=f.r2;d++)for(p=f.g1;p<=f.g2;p++)for(g=f.b1;g<=f.b2;g++)v+=h[r(d,p,g)]||0;f._count=v,f._count_set=!0}return f._count},copy:function(){var c=this;return new e(c.r1,c.r2,c.g1,c.g2,c.b1,c.b2,c.histo)},avg:function(c){var f=this,h=f.histo;if(!f._avg||c){var d,p,g,v,y=0,S=0,M=0,T=0;if(f.r1===f.r2&&f.g1===f.g2&&f.b1===f.b2)f._avg=[f.r1<<3,f.g1<<3,f.b1<<3];else{for(p=f.r1;p<=f.r2;p++)for(g=f.g1;g<=f.g2;g++)for(v=f.b1;v<=f.b2;v++)y+=d=h[r(p,g,v)]||0,S+=d*(p+.5)*8,M+=d*(g+.5)*8,T+=d*(v+.5)*8;f._avg=y?[~~(S/y),~~(M/y),~~(T/y)]:[~~(8*(f.r1+f.r2+1)/2),~~(8*(f.g1+f.g2+1)/2),~~(8*(f.b1+f.b2+1)/2)]}}return f._avg},contains:function(c){var f=this,h=c[0]>>3;return gval=c[1]>>3,bval=c[2]>>3,h>=f.r1&&h<=f.r2&&gval>=f.g1&&gval<=f.g2&&bval>=f.b1&&bval<=f.b2}},s.prototype={push:function(c){this.vboxes.push({vbox:c,color:c.avg()})},palette:function(){return this.vboxes.map(function(c){return c.color})},size:function(){return this.vboxes.size()},map:function(c){for(var f=this.vboxes,h=0;h<f.size();h++)if(f.peek(h).vbox.contains(c))return f.peek(h).color;return this.nearest(c)},nearest:function(c){for(var f,h,d,p=this.vboxes,g=0;g<p.size();g++)((h=Math.sqrt(Math.pow(c[0]-p.peek(g).color[0],2)+Math.pow(c[1]-p.peek(g).color[1],2)+Math.pow(c[2]-p.peek(g).color[2],2)))<f||f===void 0)&&(f=h,d=p.peek(g).color);return d},forcebw:function(){var c=this.vboxes;c.sort(function(p,g){return Xu(Sx(p.color),Sx(g.color))});var f=c[0].color;f[0]<5&&f[1]<5&&f[2]<5&&(c[0].color=[0,0,0]);var h=c.length-1,d=c[h].color;d[0]>251&&d[1]>251&&d[2]>251&&(c[h].color=[255,255,255])}},{quantize:function(c,f){if(!Number.isInteger(f)||f<1||f>256)throw new Error("Invalid maximum color count. It must be an integer between 1 and 256.");if(!c.length||f<2||f>256||!c.length||f<2||f>256)return!1;for(var h=[],d=new Set,p=0;p<c.length;p++){var g=c[p],v=g.join(",");d.has(v)||(d.add(v),h.push(g))}if(h.length<=f)return new gD(h);var y=function(N){var L,w=new Array(32768);return N.forEach(function(I){L=r(I[0]>>3,I[1]>>3,I[2]>>3),w[L]=(w[L]||0)+1}),w}(c);y.forEach(function(){});var S=function(N,L){var w,I,H,B=1e6,X=0,U=1e6,D=0,k=1e6,ct=0;return N.forEach(function(rt){(w=rt[0]>>3)<B?B=w:w>X&&(X=w),(I=rt[1]>>3)<U?U=I:I>D&&(D=I),(H=rt[2]>>3)<k?k=H:H>ct&&(ct=H)}),new e(B,X,U,D,k,ct,L)}(c,y),M=new t(function(N,L){return Xu(N.count(),L.count())});function T(N,L){for(var w,I=N.size(),H=0;H<1e3;){if(I>=L||H++>1e3)return;if((w=N.pop()).count()){var B=o(y,w),X=B[0],U=B[1];if(!X)return;N.push(X),U&&(N.push(U),I++)}else N.push(w),H++}}M.push(S),T(M,.75*f);for(var b=new t(function(N,L){return Xu(N.count()*N.volume(),L.count()*L.volume())});M.size();)b.push(M.pop());T(b,f);for(var x=new s;b.size();)x.push(b.pop());return x}}}().quantize,$S=function(r){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.width=this.canvas.width=r.naturalWidth,this.height=this.canvas.height=r.naturalHeight,this.context.drawImage(r,0,0,this.width,this.height)};$S.prototype.getImageData=function(){return this.context.getImageData(0,0,this.width,this.height)};var ro=function(){};ro.prototype.getColor=function(r,t){return t===void 0&&(t=10),this.getPalette(r,5,t)[0]},ro.prototype.getPalette=function(r,t,e){var s=function(h){var d=h.colorCount,p=h.quality;if(d!==void 0&&Number.isInteger(d)){if(d===1)throw new Error("colorCount should be between 2 and 20. To get one color, call getColor() instead of getPalette()");d=Math.max(d,2),d=Math.min(d,20)}else d=10;return(p===void 0||!Number.isInteger(p)||p<1)&&(p=10),{colorCount:d,quality:p}}({colorCount:t,quality:e}),o=new $S(r),c=function(h,d,p){for(var g,v,y,S,M,T=h,b=[],x=0;x<d;x+=p)v=T[0+(g=4*x)],y=T[g+1],S=T[g+2],((M=T[g+3])===void 0||M>=125)&&(v>250&&y>250&&S>250||b.push([v,y,S]));return b}(o.getImageData().data,o.width*o.height,s.quality),f=_D(c,s.colorCount);return f?f.palette():null},ro.prototype.getColorFromUrl=function(r,t,e){var s=this,o=document.createElement("img");o.addEventListener("load",function(){var c=s.getPalette(o,5,e);t(c[0],r)}),o.src=r},ro.prototype.getImageData=function(r,t){var e=new XMLHttpRequest;e.open("GET",r,!0),e.responseType="arraybuffer",e.onload=function(){if(this.status==200){var s=new Uint8Array(this.response);i=s.length;for(var o=new Array(i),c=0;c<s.length;c++)o[c]=String.fromCharCode(s[c]);var f=o.join(""),h=window.btoa(f);t("data:image/png;base64,"+h)}},e.send()},ro.prototype.getColorAsync=function(r,t,e){var s=this;this.getImageData(r,function(o){var c=document.createElement("img");c.addEventListener("load",function(){var f=s.getPalette(c,5,e);t(f[0],this)}),c.src=o})};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function vD(r,t,e){return(t=xD(t))in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}function bx(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);t&&(s=s.filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable})),e.push.apply(e,s)}return e}function At(r){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?bx(Object(e),!0).forEach(function(s){vD(r,s,e[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):bx(Object(e)).forEach(function(s){Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(e,s))})}return r}function yD(r,t){if(typeof r!="object"||!r)return r;var e=r[Symbol.toPrimitive];if(e!==void 0){var s=e.call(r,t);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(r)}function xD(r){var t=yD(r,"string");return typeof t=="symbol"?t:t+""}const Mx=()=>{};let tg={},tb={},eb=null,nb={mark:Mx,measure:Mx};try{typeof window<"u"&&(tg=window),typeof document<"u"&&(tb=document),typeof MutationObserver<"u"&&(eb=MutationObserver),typeof performance<"u"&&(nb=performance)}catch{}const{userAgent:Ex=""}=tg.navigator||{},ws=tg,tn=tb,Tx=eb,ju=nb;ws.document;const Fa=!!tn.documentElement&&!!tn.head&&typeof tn.addEventListener=="function"&&typeof tn.createElement=="function",ib=~Ex.indexOf("MSIE")||~Ex.indexOf("Trident/");var SD=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,bD=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,ab={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},MD={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},sb=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],kn="classic",yf="duotone",ED="sharp",TD="sharp-duotone",rb=[kn,yf,ED,TD],AD={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},wD={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},RD=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),CD={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},DD=["fak","fa-kit","fakd","fa-kit-duotone"],Ax={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},ND=["kit"],LD={kit:{"fa-kit":"fak"}},UD=["fak","fakd"],OD={kit:{fak:"fa-kit"}},wx={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Wu={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},PD=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],ID=["fak","fa-kit","fakd","fa-kit-duotone"],BD={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},zD={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},FD={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},dm={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},HD=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],pm=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...PD,...HD],GD=["solid","regular","light","thin","duotone","brands"],ob=[1,2,3,4,5,6,7,8,9,10],kD=ob.concat([11,12,13,14,15,16,17,18,19,20]),VD=[...Object.keys(FD),...GD,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Wu.GROUP,Wu.SWAP_OPACITY,Wu.PRIMARY,Wu.SECONDARY].concat(ob.map(r=>"".concat(r,"x"))).concat(kD.map(r=>"w-".concat(r))),XD={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const Ia="___FONT_AWESOME___",mm=16,lb="fa",cb="svg-inline--fa",ur="data-fa-i2svg",gm="data-fa-pseudo-element",jD="data-fa-pseudo-element-pending",eg="data-prefix",ng="data-icon",Rx="fontawesome-i2svg",WD="async",YD=["HTML","HEAD","STYLE","SCRIPT"],ub=(()=>{try{return!0}catch{return!1}})();function ac(r){return new Proxy(r,{get(t,e){return e in t?t[e]:t[kn]}})}const fb=At({},ab);fb[kn]=At(At(At(At({},{"fa-duotone":"duotone"}),ab[kn]),Ax.kit),Ax["kit-duotone"]);const qD=ac(fb),_m=At({},CD);_m[kn]=At(At(At(At({},{duotone:"fad"}),_m[kn]),wx.kit),wx["kit-duotone"]);const Cx=ac(_m),vm=At({},dm);vm[kn]=At(At({},vm[kn]),OD.kit);const ig=ac(vm),ym=At({},zD);ym[kn]=At(At({},ym[kn]),LD.kit);ac(ym);const KD=SD,hb="fa-layers-text",ZD=bD,QD=At({},AD);ac(QD);const JD=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],pp=MD,$D=[...ND,...VD],kl=ws.FontAwesomeConfig||{};function tN(r){var t=tn.querySelector("script["+r+"]");if(t)return t.getAttribute(r)}function eN(r){return r===""?!0:r==="false"?!1:r==="true"?!0:r}tn&&typeof tn.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[e,s]=t;const o=eN(tN(e));o!=null&&(kl[s]=o)});const db={styleDefault:"solid",familyDefault:kn,cssPrefix:lb,replacementClass:cb,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};kl.familyPrefix&&(kl.cssPrefix=kl.familyPrefix);const Ao=At(At({},db),kl);Ao.autoReplaceSvg||(Ao.observeMutations=!1);const Vt={};Object.keys(db).forEach(r=>{Object.defineProperty(Vt,r,{enumerable:!0,set:function(t){Ao[r]=t,Vl.forEach(e=>e(Vt))},get:function(){return Ao[r]}})});Object.defineProperty(Vt,"familyPrefix",{enumerable:!0,set:function(r){Ao.cssPrefix=r,Vl.forEach(t=>t(Vt))},get:function(){return Ao.cssPrefix}});ws.FontAwesomeConfig=Vt;const Vl=[];function nN(r){return Vl.push(r),()=>{Vl.splice(Vl.indexOf(r),1)}}const ys=mm,qi={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function iN(r){if(!r||!Fa)return;const t=tn.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=r;const e=tn.head.childNodes;let s=null;for(let o=e.length-1;o>-1;o--){const c=e[o],f=(c.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(f)>-1&&(s=c)}return tn.head.insertBefore(t,s),r}const aN="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Jl(){let r=12,t="";for(;r-- >0;)t+=aN[Math.random()*62|0];return t}function No(r){const t=[];for(let e=(r||[]).length>>>0;e--;)t[e]=r[e];return t}function ag(r){return r.classList?No(r.classList):(r.getAttribute("class")||"").split(" ").filter(t=>t)}function pb(r){return"".concat(r).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function sN(r){return Object.keys(r||{}).reduce((t,e)=>t+"".concat(e,'="').concat(pb(r[e]),'" '),"").trim()}function xf(r){return Object.keys(r||{}).reduce((t,e)=>t+"".concat(e,": ").concat(r[e].trim(),";"),"")}function sg(r){return r.size!==qi.size||r.x!==qi.x||r.y!==qi.y||r.rotate!==qi.rotate||r.flipX||r.flipY}function rN(r){let{transform:t,containerWidth:e,iconWidth:s}=r;const o={transform:"translate(".concat(e/2," 256)")},c="translate(".concat(t.x*32,", ").concat(t.y*32,") "),f="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),h="rotate(".concat(t.rotate," 0 0)"),d={transform:"".concat(c," ").concat(f," ").concat(h)},p={transform:"translate(".concat(s/2*-1," -256)")};return{outer:o,inner:d,path:p}}function oN(r){let{transform:t,width:e=mm,height:s=mm,startCentered:o=!1}=r,c="";return o&&ib?c+="translate(".concat(t.x/ys-e/2,"em, ").concat(t.y/ys-s/2,"em) "):o?c+="translate(calc(-50% + ".concat(t.x/ys,"em), calc(-50% + ").concat(t.y/ys,"em)) "):c+="translate(".concat(t.x/ys,"em, ").concat(t.y/ys,"em) "),c+="scale(".concat(t.size/ys*(t.flipX?-1:1),", ").concat(t.size/ys*(t.flipY?-1:1),") "),c+="rotate(".concat(t.rotate,"deg) "),c}var lN=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function mb(){const r=lb,t=cb,e=Vt.cssPrefix,s=Vt.replacementClass;let o=lN;if(e!==r||s!==t){const c=new RegExp("\\.".concat(r,"\\-"),"g"),f=new RegExp("\\--".concat(r,"\\-"),"g"),h=new RegExp("\\.".concat(t),"g");o=o.replace(c,".".concat(e,"-")).replace(f,"--".concat(e,"-")).replace(h,".".concat(s))}return o}let Dx=!1;function mp(){Vt.autoAddCss&&!Dx&&(iN(mb()),Dx=!0)}var cN={mixout(){return{dom:{css:mb,insertCss:mp}}},hooks(){return{beforeDOMElementCreation(){mp()},beforeI2svg(){mp()}}}};const Ba=ws||{};Ba[Ia]||(Ba[Ia]={});Ba[Ia].styles||(Ba[Ia].styles={});Ba[Ia].hooks||(Ba[Ia].hooks={});Ba[Ia].shims||(Ba[Ia].shims=[]);var Ki=Ba[Ia];const gb=[],_b=function(){tn.removeEventListener("DOMContentLoaded",_b),ff=1,gb.map(r=>r())};let ff=!1;Fa&&(ff=(tn.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(tn.readyState),ff||tn.addEventListener("DOMContentLoaded",_b));function uN(r){Fa&&(ff?setTimeout(r,0):gb.push(r))}function sc(r){const{tag:t,attributes:e={},children:s=[]}=r;return typeof r=="string"?pb(r):"<".concat(t," ").concat(sN(e),">").concat(s.map(sc).join(""),"</").concat(t,">")}function Nx(r,t,e){if(r&&r[t]&&r[t][e])return{prefix:t,iconName:e,icon:r[t][e]}}var gp=function(t,e,s,o){var c=Object.keys(t),f=c.length,h=e,d,p,g;for(s===void 0?(d=1,g=t[c[0]]):(d=0,g=s);d<f;d++)p=c[d],g=h(g,t[p],p,t);return g};function fN(r){const t=[];let e=0;const s=r.length;for(;e<s;){const o=r.charCodeAt(e++);if(o>=55296&&o<=56319&&e<s){const c=r.charCodeAt(e++);(c&64512)==56320?t.push(((o&1023)<<10)+(c&1023)+65536):(t.push(o),e--)}else t.push(o)}return t}function xm(r){const t=fN(r);return t.length===1?t[0].toString(16):null}function hN(r,t){const e=r.length;let s=r.charCodeAt(t),o;return s>=55296&&s<=56319&&e>t+1&&(o=r.charCodeAt(t+1),o>=56320&&o<=57343)?(s-55296)*1024+o-56320+65536:s}function Lx(r){return Object.keys(r).reduce((t,e)=>{const s=r[e];return!!s.icon?t[s.iconName]=s.icon:t[e]=s,t},{})}function Sm(r,t){let e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:s=!1}=e,o=Lx(t);typeof Ki.hooks.addPack=="function"&&!s?Ki.hooks.addPack(r,Lx(t)):Ki.styles[r]=At(At({},Ki.styles[r]||{}),o),r==="fas"&&Sm("fa",t)}const{styles:$l,shims:dN}=Ki,vb=Object.keys(ig),pN=vb.reduce((r,t)=>(r[t]=Object.keys(ig[t]),r),{});let rg=null,yb={},xb={},Sb={},bb={},Mb={};function mN(r){return~$D.indexOf(r)}function gN(r,t){const e=t.split("-"),s=e[0],o=e.slice(1).join("-");return s===r&&o!==""&&!mN(o)?o:null}const Eb=()=>{const r=s=>gp($l,(o,c,f)=>(o[f]=gp(c,s,{}),o),{});yb=r((s,o,c)=>(o[3]&&(s[o[3]]=c),o[2]&&o[2].filter(h=>typeof h=="number").forEach(h=>{s[h.toString(16)]=c}),s)),xb=r((s,o,c)=>(s[c]=c,o[2]&&o[2].filter(h=>typeof h=="string").forEach(h=>{s[h]=c}),s)),Mb=r((s,o,c)=>{const f=o[2];return s[c]=c,f.forEach(h=>{s[h]=c}),s});const t="far"in $l||Vt.autoFetchSvg,e=gp(dN,(s,o)=>{const c=o[0];let f=o[1];const h=o[2];return f==="far"&&!t&&(f="fas"),typeof c=="string"&&(s.names[c]={prefix:f,iconName:h}),typeof c=="number"&&(s.unicodes[c.toString(16)]={prefix:f,iconName:h}),s},{names:{},unicodes:{}});Sb=e.names,bb=e.unicodes,rg=Sf(Vt.styleDefault,{family:Vt.familyDefault})};nN(r=>{rg=Sf(r.styleDefault,{family:Vt.familyDefault})});Eb();function og(r,t){return(yb[r]||{})[t]}function _N(r,t){return(xb[r]||{})[t]}function or(r,t){return(Mb[r]||{})[t]}function Tb(r){return Sb[r]||{prefix:null,iconName:null}}function vN(r){const t=bb[r],e=og("fas",r);return t||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function Rs(){return rg}const Ab=()=>({prefix:null,iconName:null,rest:[]});function yN(r){let t=kn;const e=vb.reduce((s,o)=>(s[o]="".concat(Vt.cssPrefix,"-").concat(o),s),{});return rb.forEach(s=>{(r.includes(e[s])||r.some(o=>pN[s].includes(o)))&&(t=s)}),t}function Sf(r){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:e=kn}=t,s=qD[e][r];if(e===yf&&!r)return"fad";const o=Cx[e][r]||Cx[e][s],c=r in Ki.styles?r:null;return o||c||null}function xN(r){let t=[],e=null;return r.forEach(s=>{const o=gN(Vt.cssPrefix,s);o?e=o:s&&t.push(s)}),{iconName:e,rest:t}}function Ux(r){return r.sort().filter((t,e,s)=>s.indexOf(t)===e)}function bf(r){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:e=!1}=t;let s=null;const o=pm.concat(ID),c=Ux(r.filter(v=>o.includes(v))),f=Ux(r.filter(v=>!pm.includes(v))),h=c.filter(v=>(s=v,!sb.includes(v))),[d=null]=h,p=yN(c),g=At(At({},xN(f)),{},{prefix:Sf(d,{family:p})});return At(At(At({},g),EN({values:r,family:p,styles:$l,config:Vt,canonical:g,givenPrefix:s})),SN(e,s,g))}function SN(r,t,e){let{prefix:s,iconName:o}=e;if(r||!s||!o)return{prefix:s,iconName:o};const c=t==="fa"?Tb(o):{},f=or(s,o);return o=c.iconName||f||o,s=c.prefix||s,s==="far"&&!$l.far&&$l.fas&&!Vt.autoFetchSvg&&(s="fas"),{prefix:s,iconName:o}}const bN=rb.filter(r=>r!==kn||r!==yf),MN=Object.keys(dm).filter(r=>r!==kn).map(r=>Object.keys(dm[r])).flat();function EN(r){const{values:t,family:e,canonical:s,givenPrefix:o="",styles:c={},config:f={}}=r,h=e===yf,d=t.includes("fa-duotone")||t.includes("fad"),p=f.familyDefault==="duotone",g=s.prefix==="fad"||s.prefix==="fa-duotone";if(!h&&(d||p||g)&&(s.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(s.prefix="fab"),!s.prefix&&bN.includes(e)&&(Object.keys(c).find(y=>MN.includes(y))||f.autoFetchSvg)){const y=RD.get(e).defaultShortPrefixId;s.prefix=y,s.iconName=or(s.prefix,s.iconName)||s.iconName}return(s.prefix==="fa"||o==="fa")&&(s.prefix=Rs()||"fas"),s}class TN{constructor(){this.definitions={}}add(){for(var t=arguments.length,e=new Array(t),s=0;s<t;s++)e[s]=arguments[s];const o=e.reduce(this._pullDefinitions,{});Object.keys(o).forEach(c=>{this.definitions[c]=At(At({},this.definitions[c]||{}),o[c]),Sm(c,o[c]);const f=ig[kn][c];f&&Sm(f,o[c]),Eb()})}reset(){this.definitions={}}_pullDefinitions(t,e){const s=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(s).map(o=>{const{prefix:c,iconName:f,icon:h}=s[o],d=h[2];t[c]||(t[c]={}),d.length>0&&d.forEach(p=>{typeof p=="string"&&(t[c][p]=h)}),t[c][f]=h}),t}}let Ox=[],co={};const go={},AN=Object.keys(go);function wN(r,t){let{mixoutsTo:e}=t;return Ox=r,co={},Object.keys(go).forEach(s=>{AN.indexOf(s)===-1&&delete go[s]}),Ox.forEach(s=>{const o=s.mixout?s.mixout():{};if(Object.keys(o).forEach(c=>{typeof o[c]=="function"&&(e[c]=o[c]),typeof o[c]=="object"&&Object.keys(o[c]).forEach(f=>{e[c]||(e[c]={}),e[c][f]=o[c][f]})}),s.hooks){const c=s.hooks();Object.keys(c).forEach(f=>{co[f]||(co[f]=[]),co[f].push(c[f])})}s.provides&&s.provides(go)}),e}function bm(r,t){for(var e=arguments.length,s=new Array(e>2?e-2:0),o=2;o<e;o++)s[o-2]=arguments[o];return(co[r]||[]).forEach(f=>{t=f.apply(null,[t,...s])}),t}function fr(r){for(var t=arguments.length,e=new Array(t>1?t-1:0),s=1;s<t;s++)e[s-1]=arguments[s];(co[r]||[]).forEach(c=>{c.apply(null,e)})}function Cs(){const r=arguments[0],t=Array.prototype.slice.call(arguments,1);return go[r]?go[r].apply(null,t):void 0}function Mm(r){r.prefix==="fa"&&(r.prefix="fas");let{iconName:t}=r;const e=r.prefix||Rs();if(t)return t=or(e,t)||t,Nx(wb.definitions,e,t)||Nx(Ki.styles,e,t)}const wb=new TN,RN=()=>{Vt.autoReplaceSvg=!1,Vt.observeMutations=!1,fr("noAuto")},CN={i2svg:function(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Fa?(fr("beforeI2svg",r),Cs("pseudoElements2svg",r),Cs("i2svg",r)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=r;Vt.autoReplaceSvg===!1&&(Vt.autoReplaceSvg=!0),Vt.observeMutations=!0,uN(()=>{NN({autoReplaceSvgRoot:t}),fr("watch",r)})}},DN={icon:r=>{if(r===null)return null;if(typeof r=="object"&&r.prefix&&r.iconName)return{prefix:r.prefix,iconName:or(r.prefix,r.iconName)||r.iconName};if(Array.isArray(r)&&r.length===2){const t=r[1].indexOf("fa-")===0?r[1].slice(3):r[1],e=Sf(r[0]);return{prefix:e,iconName:or(e,t)||t}}if(typeof r=="string"&&(r.indexOf("".concat(Vt.cssPrefix,"-"))>-1||r.match(KD))){const t=bf(r.split(" "),{skipLookups:!0});return{prefix:t.prefix||Rs(),iconName:or(t.prefix,t.iconName)||t.iconName}}if(typeof r=="string"){const t=Rs();return{prefix:t,iconName:or(t,r)||r}}}},gi={noAuto:RN,config:Vt,dom:CN,parse:DN,library:wb,findIconDefinition:Mm,toHtml:sc},NN=function(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=tn}=r;(Object.keys(Ki.styles).length>0||Vt.autoFetchSvg)&&Fa&&Vt.autoReplaceSvg&&gi.dom.i2svg({node:t})};function Mf(r,t){return Object.defineProperty(r,"abstract",{get:t}),Object.defineProperty(r,"html",{get:function(){return r.abstract.map(e=>sc(e))}}),Object.defineProperty(r,"node",{get:function(){if(!Fa)return;const e=tn.createElement("div");return e.innerHTML=r.html,e.children}}),r}function LN(r){let{children:t,main:e,mask:s,attributes:o,styles:c,transform:f}=r;if(sg(f)&&e.found&&!s.found){const{width:h,height:d}=e,p={x:h/d/2,y:.5};o.style=xf(At(At({},c),{},{"transform-origin":"".concat(p.x+f.x/16,"em ").concat(p.y+f.y/16,"em")}))}return[{tag:"svg",attributes:o,children:t}]}function UN(r){let{prefix:t,iconName:e,children:s,attributes:o,symbol:c}=r;const f=c===!0?"".concat(t,"-").concat(Vt.cssPrefix,"-").concat(e):c;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:At(At({},o),{},{id:f}),children:s}]}]}function lg(r){const{icons:{main:t,mask:e},prefix:s,iconName:o,transform:c,symbol:f,title:h,maskId:d,titleId:p,extra:g,watchable:v=!1}=r,{width:y,height:S}=e.found?e:t,M=UD.includes(s),T=[Vt.replacementClass,o?"".concat(Vt.cssPrefix,"-").concat(o):""].filter(I=>g.classes.indexOf(I)===-1).filter(I=>I!==""||!!I).concat(g.classes).join(" ");let b={children:[],attributes:At(At({},g.attributes),{},{"data-prefix":s,"data-icon":o,class:T,role:g.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(S)})};const x=M&&!~g.classes.indexOf("fa-fw")?{width:"".concat(y/S*16*.0625,"em")}:{};v&&(b.attributes[ur]=""),h&&(b.children.push({tag:"title",attributes:{id:b.attributes["aria-labelledby"]||"title-".concat(p||Jl())},children:[h]}),delete b.attributes.title);const N=At(At({},b),{},{prefix:s,iconName:o,main:t,mask:e,maskId:d,transform:c,symbol:f,styles:At(At({},x),g.styles)}),{children:L,attributes:w}=e.found&&t.found?Cs("generateAbstractMask",N)||{children:[],attributes:{}}:Cs("generateAbstractIcon",N)||{children:[],attributes:{}};return N.children=L,N.attributes=w,f?UN(N):LN(N)}function Px(r){const{content:t,width:e,height:s,transform:o,title:c,extra:f,watchable:h=!1}=r,d=At(At(At({},f.attributes),c?{title:c}:{}),{},{class:f.classes.join(" ")});h&&(d[ur]="");const p=At({},f.styles);sg(o)&&(p.transform=oN({transform:o,startCentered:!0,width:e,height:s}),p["-webkit-transform"]=p.transform);const g=xf(p);g.length>0&&(d.style=g);const v=[];return v.push({tag:"span",attributes:d,children:[t]}),c&&v.push({tag:"span",attributes:{class:"sr-only"},children:[c]}),v}function ON(r){const{content:t,title:e,extra:s}=r,o=At(At(At({},s.attributes),e?{title:e}:{}),{},{class:s.classes.join(" ")}),c=xf(s.styles);c.length>0&&(o.style=c);const f=[];return f.push({tag:"span",attributes:o,children:[t]}),e&&f.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),f}const{styles:_p}=Ki;function Em(r){const t=r[0],e=r[1],[s]=r.slice(4);let o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(Vt.cssPrefix,"-").concat(pp.GROUP)},children:[{tag:"path",attributes:{class:"".concat(Vt.cssPrefix,"-").concat(pp.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(Vt.cssPrefix,"-").concat(pp.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:t,height:e,icon:o}}const PN={found:!1,width:512,height:512};function IN(r,t){!ub&&!Vt.showMissingIcons&&r&&console.error('Icon with name "'.concat(r,'" and prefix "').concat(t,'" is missing.'))}function Tm(r,t){let e=t;return t==="fa"&&Vt.styleDefault!==null&&(t=Rs()),new Promise((s,o)=>{if(e==="fa"){const c=Tb(r)||{};r=c.iconName||r,t=c.prefix||t}if(r&&t&&_p[t]&&_p[t][r]){const c=_p[t][r];return s(Em(c))}IN(r,t),s(At(At({},PN),{},{icon:Vt.showMissingIcons&&r?Cs("missingIconAbstract")||{}:{}}))})}const Ix=()=>{},Am=Vt.measurePerformance&&ju&&ju.mark&&ju.measure?ju:{mark:Ix,measure:Ix},zl='FA "6.7.2"',BN=r=>(Am.mark("".concat(zl," ").concat(r," begins")),()=>Rb(r)),Rb=r=>{Am.mark("".concat(zl," ").concat(r," ends")),Am.measure("".concat(zl," ").concat(r),"".concat(zl," ").concat(r," begins"),"".concat(zl," ").concat(r," ends"))};var cg={begin:BN,end:Rb};const ef=()=>{};function Bx(r){return typeof(r.getAttribute?r.getAttribute(ur):null)=="string"}function zN(r){const t=r.getAttribute?r.getAttribute(eg):null,e=r.getAttribute?r.getAttribute(ng):null;return t&&e}function FN(r){return r&&r.classList&&r.classList.contains&&r.classList.contains(Vt.replacementClass)}function HN(){return Vt.autoReplaceSvg===!0?nf.replace:nf[Vt.autoReplaceSvg]||nf.replace}function GN(r){return tn.createElementNS("http://www.w3.org/2000/svg",r)}function kN(r){return tn.createElement(r)}function Cb(r){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:e=r.tag==="svg"?GN:kN}=t;if(typeof r=="string")return tn.createTextNode(r);const s=e(r.tag);return Object.keys(r.attributes||[]).forEach(function(c){s.setAttribute(c,r.attributes[c])}),(r.children||[]).forEach(function(c){s.appendChild(Cb(c,{ceFn:e}))}),s}function VN(r){let t=" ".concat(r.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const nf={replace:function(r){const t=r[0];if(t.parentNode)if(r[1].forEach(e=>{t.parentNode.insertBefore(Cb(e),t)}),t.getAttribute(ur)===null&&Vt.keepOriginalSource){let e=tn.createComment(VN(t));t.parentNode.replaceChild(e,t)}else t.remove()},nest:function(r){const t=r[0],e=r[1];if(~ag(t).indexOf(Vt.replacementClass))return nf.replace(r);const s=new RegExp("".concat(Vt.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){const c=e[0].attributes.class.split(" ").reduce((f,h)=>(h===Vt.replacementClass||h.match(s)?f.toSvg.push(h):f.toNode.push(h),f),{toNode:[],toSvg:[]});e[0].attributes.class=c.toSvg.join(" "),c.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",c.toNode.join(" "))}const o=e.map(c=>sc(c)).join(`
`);t.setAttribute(ur,""),t.innerHTML=o}};function zx(r){r()}function Db(r,t){const e=typeof t=="function"?t:ef;if(r.length===0)e();else{let s=zx;Vt.mutateApproach===WD&&(s=ws.requestAnimationFrame||zx),s(()=>{const o=HN(),c=cg.begin("mutate");r.map(o),c(),e()})}}let ug=!1;function Nb(){ug=!0}function wm(){ug=!1}let hf=null;function Fx(r){if(!Tx||!Vt.observeMutations)return;const{treeCallback:t=ef,nodeCallback:e=ef,pseudoElementsCallback:s=ef,observeMutationsRoot:o=tn}=r;hf=new Tx(c=>{if(ug)return;const f=Rs();No(c).forEach(h=>{if(h.type==="childList"&&h.addedNodes.length>0&&!Bx(h.addedNodes[0])&&(Vt.searchPseudoElements&&s(h.target),t(h.target)),h.type==="attributes"&&h.target.parentNode&&Vt.searchPseudoElements&&s(h.target.parentNode),h.type==="attributes"&&Bx(h.target)&&~JD.indexOf(h.attributeName))if(h.attributeName==="class"&&zN(h.target)){const{prefix:d,iconName:p}=bf(ag(h.target));h.target.setAttribute(eg,d||f),p&&h.target.setAttribute(ng,p)}else FN(h.target)&&e(h.target)})}),Fa&&hf.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function XN(){hf&&hf.disconnect()}function jN(r){const t=r.getAttribute("style");let e=[];return t&&(e=t.split(";").reduce((s,o)=>{const c=o.split(":"),f=c[0],h=c.slice(1);return f&&h.length>0&&(s[f]=h.join(":").trim()),s},{})),e}function WN(r){const t=r.getAttribute("data-prefix"),e=r.getAttribute("data-icon"),s=r.innerText!==void 0?r.innerText.trim():"";let o=bf(ag(r));return o.prefix||(o.prefix=Rs()),t&&e&&(o.prefix=t,o.iconName=e),o.iconName&&o.prefix||(o.prefix&&s.length>0&&(o.iconName=_N(o.prefix,r.innerText)||og(o.prefix,xm(r.innerText))),!o.iconName&&Vt.autoFetchSvg&&r.firstChild&&r.firstChild.nodeType===Node.TEXT_NODE&&(o.iconName=r.firstChild.data)),o}function YN(r){const t=No(r.attributes).reduce((o,c)=>(o.name!=="class"&&o.name!=="style"&&(o[c.name]=c.value),o),{}),e=r.getAttribute("title"),s=r.getAttribute("data-fa-title-id");return Vt.autoA11y&&(e?t["aria-labelledby"]="".concat(Vt.replacementClass,"-title-").concat(s||Jl()):(t["aria-hidden"]="true",t.focusable="false")),t}function qN(){return{iconName:null,title:null,titleId:null,prefix:null,transform:qi,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Hx(r){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:e,prefix:s,rest:o}=WN(r),c=YN(r),f=bm("parseNodeAttributes",{},r);let h=t.styleParser?jN(r):[];return At({iconName:e,title:r.getAttribute("title"),titleId:r.getAttribute("data-fa-title-id"),prefix:s,transform:qi,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:h,attributes:c}},f)}const{styles:KN}=Ki;function Lb(r){const t=Vt.autoReplaceSvg==="nest"?Hx(r,{styleParser:!1}):Hx(r);return~t.extra.classes.indexOf(hb)?Cs("generateLayersText",r,t):Cs("generateSvgReplacementMutation",r,t)}function ZN(){return[...DD,...pm]}function Gx(r){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Fa)return Promise.resolve();const e=tn.documentElement.classList,s=g=>e.add("".concat(Rx,"-").concat(g)),o=g=>e.remove("".concat(Rx,"-").concat(g)),c=Vt.autoFetchSvg?ZN():sb.concat(Object.keys(KN));c.includes("fa")||c.push("fa");const f=[".".concat(hb,":not([").concat(ur,"])")].concat(c.map(g=>".".concat(g,":not([").concat(ur,"])"))).join(", ");if(f.length===0)return Promise.resolve();let h=[];try{h=No(r.querySelectorAll(f))}catch{}if(h.length>0)s("pending"),o("complete");else return Promise.resolve();const d=cg.begin("onTree"),p=h.reduce((g,v)=>{try{const y=Lb(v);y&&g.push(y)}catch(y){ub||y.name==="MissingIcon"&&console.error(y)}return g},[]);return new Promise((g,v)=>{Promise.all(p).then(y=>{Db(y,()=>{s("active"),s("complete"),o("pending"),typeof t=="function"&&t(),d(),g()})}).catch(y=>{d(),v(y)})})}function QN(r){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Lb(r).then(e=>{e&&Db([e],t)})}function JN(r){return function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const s=(t||{}).icon?t:Mm(t||{});let{mask:o}=e;return o&&(o=(o||{}).icon?o:Mm(o||{})),r(s,At(At({},e),{},{mask:o}))}}const $N=function(r){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:e=qi,symbol:s=!1,mask:o=null,maskId:c=null,title:f=null,titleId:h=null,classes:d=[],attributes:p={},styles:g={}}=t;if(!r)return;const{prefix:v,iconName:y,icon:S}=r;return Mf(At({type:"icon"},r),()=>(fr("beforeDOMElementCreation",{iconDefinition:r,params:t}),Vt.autoA11y&&(f?p["aria-labelledby"]="".concat(Vt.replacementClass,"-title-").concat(h||Jl()):(p["aria-hidden"]="true",p.focusable="false")),lg({icons:{main:Em(S),mask:o?Em(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:v,iconName:y,transform:At(At({},qi),e),symbol:s,title:f,maskId:c,titleId:h,extra:{attributes:p,styles:g,classes:d}})))};var tL={mixout(){return{icon:JN($N)}},hooks(){return{mutationObserverCallbacks(r){return r.treeCallback=Gx,r.nodeCallback=QN,r}}},provides(r){r.i2svg=function(t){const{node:e=tn,callback:s=()=>{}}=t;return Gx(e,s)},r.generateSvgReplacementMutation=function(t,e){const{iconName:s,title:o,titleId:c,prefix:f,transform:h,symbol:d,mask:p,maskId:g,extra:v}=e;return new Promise((y,S)=>{Promise.all([Tm(s,f),p.iconName?Tm(p.iconName,p.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(M=>{let[T,b]=M;y([t,lg({icons:{main:T,mask:b},prefix:f,iconName:s,transform:h,symbol:d,maskId:g,title:o,titleId:c,extra:v,watchable:!0})])}).catch(S)})},r.generateAbstractIcon=function(t){let{children:e,attributes:s,main:o,transform:c,styles:f}=t;const h=xf(f);h.length>0&&(s.style=h);let d;return sg(c)&&(d=Cs("generateAbstractTransformGrouping",{main:o,transform:c,containerWidth:o.width,iconWidth:o.width})),e.push(d||o.icon),{children:e,attributes:s}}}},eL={mixout(){return{layer(r){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:e=[]}=t;return Mf({type:"layer"},()=>{fr("beforeDOMElementCreation",{assembler:r,params:t});let s=[];return r(o=>{Array.isArray(o)?o.map(c=>{s=s.concat(c.abstract)}):s=s.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(Vt.cssPrefix,"-layers"),...e].join(" ")},children:s}]})}}}},nL={mixout(){return{counter(r){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:e=null,classes:s=[],attributes:o={},styles:c={}}=t;return Mf({type:"counter",content:r},()=>(fr("beforeDOMElementCreation",{content:r,params:t}),ON({content:r.toString(),title:e,extra:{attributes:o,styles:c,classes:["".concat(Vt.cssPrefix,"-layers-counter"),...s]}})))}}}},iL={mixout(){return{text(r){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:e=qi,title:s=null,classes:o=[],attributes:c={},styles:f={}}=t;return Mf({type:"text",content:r},()=>(fr("beforeDOMElementCreation",{content:r,params:t}),Px({content:r,transform:At(At({},qi),e),title:s,extra:{attributes:c,styles:f,classes:["".concat(Vt.cssPrefix,"-layers-text"),...o]}})))}}},provides(r){r.generateLayersText=function(t,e){const{title:s,transform:o,extra:c}=e;let f=null,h=null;if(ib){const d=parseInt(getComputedStyle(t).fontSize,10),p=t.getBoundingClientRect();f=p.width/d,h=p.height/d}return Vt.autoA11y&&!s&&(c.attributes["aria-hidden"]="true"),Promise.resolve([t,Px({content:t.innerHTML,width:f,height:h,transform:o,title:s,extra:c,watchable:!0})])}}};const aL=new RegExp('"',"ug"),kx=[1105920,1112319],Vx=At(At(At(At({},{FontAwesome:{normal:"fas",400:"fas"}}),wD),XD),BD),Rm=Object.keys(Vx).reduce((r,t)=>(r[t.toLowerCase()]=Vx[t],r),{}),sL=Object.keys(Rm).reduce((r,t)=>{const e=Rm[t];return r[t]=e[900]||[...Object.entries(e)][0][1],r},{});function rL(r){const t=r.replace(aL,""),e=hN(t,0),s=e>=kx[0]&&e<=kx[1],o=t.length===2?t[0]===t[1]:!1;return{value:xm(o?t[0]:t),isSecondary:s||o}}function oL(r,t){const e=r.replace(/^['"]|['"]$/g,"").toLowerCase(),s=parseInt(t),o=isNaN(s)?"normal":s;return(Rm[e]||{})[o]||sL[e]}function Xx(r,t){const e="".concat(jD).concat(t.replace(":","-"));return new Promise((s,o)=>{if(r.getAttribute(e)!==null)return s();const f=No(r.children).filter(y=>y.getAttribute(gm)===t)[0],h=ws.getComputedStyle(r,t),d=h.getPropertyValue("font-family"),p=d.match(ZD),g=h.getPropertyValue("font-weight"),v=h.getPropertyValue("content");if(f&&!p)return r.removeChild(f),s();if(p&&v!=="none"&&v!==""){const y=h.getPropertyValue("content");let S=oL(d,g);const{value:M,isSecondary:T}=rL(y),b=p[0].startsWith("FontAwesome");let x=og(S,M),N=x;if(b){const L=vN(M);L.iconName&&L.prefix&&(x=L.iconName,S=L.prefix)}if(x&&!T&&(!f||f.getAttribute(eg)!==S||f.getAttribute(ng)!==N)){r.setAttribute(e,N),f&&r.removeChild(f);const L=qN(),{extra:w}=L;w.attributes[gm]=t,Tm(x,S).then(I=>{const H=lg(At(At({},L),{},{icons:{main:I,mask:Ab()},prefix:S,iconName:N,extra:w,watchable:!0})),B=tn.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?r.insertBefore(B,r.firstChild):r.appendChild(B),B.outerHTML=H.map(X=>sc(X)).join(`
`),r.removeAttribute(e),s()}).catch(o)}else s()}else s()})}function lL(r){return Promise.all([Xx(r,"::before"),Xx(r,"::after")])}function cL(r){return r.parentNode!==document.head&&!~YD.indexOf(r.tagName.toUpperCase())&&!r.getAttribute(gm)&&(!r.parentNode||r.parentNode.tagName!=="svg")}function jx(r){if(Fa)return new Promise((t,e)=>{const s=No(r.querySelectorAll("*")).filter(cL).map(lL),o=cg.begin("searchPseudoElements");Nb(),Promise.all(s).then(()=>{o(),wm(),t()}).catch(()=>{o(),wm(),e()})})}var uL={hooks(){return{mutationObserverCallbacks(r){return r.pseudoElementsCallback=jx,r}}},provides(r){r.pseudoElements2svg=function(t){const{node:e=tn}=t;Vt.searchPseudoElements&&jx(e)}}};let Wx=!1;var fL={mixout(){return{dom:{unwatch(){Nb(),Wx=!0}}}},hooks(){return{bootstrap(){Fx(bm("mutationObserverCallbacks",{}))},noAuto(){XN()},watch(r){const{observeMutationsRoot:t}=r;Wx?wm():Fx(bm("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const Yx=r=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return r.toLowerCase().split(" ").reduce((e,s)=>{const o=s.toLowerCase().split("-"),c=o[0];let f=o.slice(1).join("-");if(c&&f==="h")return e.flipX=!0,e;if(c&&f==="v")return e.flipY=!0,e;if(f=parseFloat(f),isNaN(f))return e;switch(c){case"grow":e.size=e.size+f;break;case"shrink":e.size=e.size-f;break;case"left":e.x=e.x-f;break;case"right":e.x=e.x+f;break;case"up":e.y=e.y-f;break;case"down":e.y=e.y+f;break;case"rotate":e.rotate=e.rotate+f;break}return e},t)};var hL={mixout(){return{parse:{transform:r=>Yx(r)}}},hooks(){return{parseNodeAttributes(r,t){const e=t.getAttribute("data-fa-transform");return e&&(r.transform=Yx(e)),r}}},provides(r){r.generateAbstractTransformGrouping=function(t){let{main:e,transform:s,containerWidth:o,iconWidth:c}=t;const f={transform:"translate(".concat(o/2," 256)")},h="translate(".concat(s.x*32,", ").concat(s.y*32,") "),d="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),p="rotate(".concat(s.rotate," 0 0)"),g={transform:"".concat(h," ").concat(d," ").concat(p)},v={transform:"translate(".concat(c/2*-1," -256)")},y={outer:f,inner:g,path:v};return{tag:"g",attributes:At({},y.outer),children:[{tag:"g",attributes:At({},y.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:At(At({},e.icon.attributes),y.path)}]}]}}}};const vp={x:0,y:0,width:"100%",height:"100%"};function qx(r){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return r.attributes&&(r.attributes.fill||t)&&(r.attributes.fill="black"),r}function dL(r){return r.tag==="g"?r.children:[r]}var pL={hooks(){return{parseNodeAttributes(r,t){const e=t.getAttribute("data-fa-mask"),s=e?bf(e.split(" ").map(o=>o.trim())):Ab();return s.prefix||(s.prefix=Rs()),r.mask=s,r.maskId=t.getAttribute("data-fa-mask-id"),r}}},provides(r){r.generateAbstractMask=function(t){let{children:e,attributes:s,main:o,mask:c,maskId:f,transform:h}=t;const{width:d,icon:p}=o,{width:g,icon:v}=c,y=rN({transform:h,containerWidth:g,iconWidth:d}),S={tag:"rect",attributes:At(At({},vp),{},{fill:"white"})},M=p.children?{children:p.children.map(qx)}:{},T={tag:"g",attributes:At({},y.inner),children:[qx(At({tag:p.tag,attributes:At(At({},p.attributes),y.path)},M))]},b={tag:"g",attributes:At({},y.outer),children:[T]},x="mask-".concat(f||Jl()),N="clip-".concat(f||Jl()),L={tag:"mask",attributes:At(At({},vp),{},{id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[S,b]},w={tag:"defs",children:[{tag:"clipPath",attributes:{id:N},children:dL(v)},L]};return e.push(w,{tag:"rect",attributes:At({fill:"currentColor","clip-path":"url(#".concat(N,")"),mask:"url(#".concat(x,")")},vp)}),{children:e,attributes:s}}}},mL={provides(r){let t=!1;ws.matchMedia&&(t=ws.matchMedia("(prefers-reduced-motion: reduce)").matches),r.missingIconAbstract=function(){const e=[],s={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:At(At({},s),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const c=At(At({},o),{},{attributeName:"opacity"}),f={tag:"circle",attributes:At(At({},s),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||f.children.push({tag:"animate",attributes:At(At({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:At(At({},c),{},{values:"1;0;1;1;0;1;"})}),e.push(f),e.push({tag:"path",attributes:At(At({},s),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:At(At({},c),{},{values:"1;0;0;0;0;1;"})}]}),t||e.push({tag:"path",attributes:At(At({},s),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:At(At({},c),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},gL={hooks(){return{parseNodeAttributes(r,t){const e=t.getAttribute("data-fa-symbol"),s=e===null?!1:e===""?!0:e;return r.symbol=s,r}}}},_L=[cN,tL,eL,nL,iL,uL,fL,hL,pL,mL,gL];wN(_L,{mixoutsTo:gi});gi.noAuto;gi.config;gi.library;gi.dom;const Cm=gi.parse;gi.findIconDefinition;gi.toHtml;const vL=gi.icon;gi.layer;gi.text;gi.counter;var yp={exports:{}},xp,Kx;function yL(){if(Kx)return xp;Kx=1;var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return xp=r,xp}var Sp,Zx;function xL(){if(Zx)return Sp;Zx=1;var r=yL();function t(){}function e(){}return e.resetWarningCache=t,Sp=function(){function s(f,h,d,p,g,v){if(v!==r){var y=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw y.name="Invariant Violation",y}}s.isRequired=s;function o(){return s}var c={array:s,bigint:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:o,element:s,elementType:s,instanceOf:o,node:s,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:e,resetWarningCache:t};return c.PropTypes=c,c},Sp}var Qx;function SL(){return Qx||(Qx=1,yp.exports=xL()()),yp.exports}var bL=SL();const Se=eS(bL);function Jx(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);t&&(s=s.filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable})),e.push.apply(e,s)}return e}function Wi(r){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?Jx(Object(e),!0).forEach(function(s){uo(r,s,e[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):Jx(Object(e)).forEach(function(s){Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(e,s))})}return r}function df(r){"@babel/helpers - typeof";return df=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},df(r)}function uo(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}function ML(r,t){if(r==null)return{};var e={},s=Object.keys(r),o,c;for(c=0;c<s.length;c++)o=s[c],!(t.indexOf(o)>=0)&&(e[o]=r[o]);return e}function EL(r,t){if(r==null)return{};var e=ML(r,t),s,o;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(r);for(o=0;o<c.length;o++)s=c[o],!(t.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(r,s)&&(e[s]=r[s])}return e}function Dm(r){return TL(r)||AL(r)||wL(r)||RL()}function TL(r){if(Array.isArray(r))return Nm(r)}function AL(r){if(typeof Symbol<"u"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function wL(r,t){if(r){if(typeof r=="string")return Nm(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);if(e==="Object"&&r.constructor&&(e=r.constructor.name),e==="Map"||e==="Set")return Array.from(r);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Nm(r,t)}}function Nm(r,t){(t==null||t>r.length)&&(t=r.length);for(var e=0,s=new Array(t);e<t;e++)s[e]=r[e];return s}function RL(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function CL(r){var t,e=r.beat,s=r.fade,o=r.beatFade,c=r.bounce,f=r.shake,h=r.flash,d=r.spin,p=r.spinPulse,g=r.spinReverse,v=r.pulse,y=r.fixedWidth,S=r.inverse,M=r.border,T=r.listItem,b=r.flip,x=r.size,N=r.rotation,L=r.pull,w=(t={"fa-beat":e,"fa-fade":s,"fa-beat-fade":o,"fa-bounce":c,"fa-shake":f,"fa-flash":h,"fa-spin":d,"fa-spin-reverse":g,"fa-spin-pulse":p,"fa-pulse":v,"fa-fw":y,"fa-inverse":S,"fa-border":M,"fa-li":T,"fa-flip":b===!0,"fa-flip-horizontal":b==="horizontal"||b==="both","fa-flip-vertical":b==="vertical"||b==="both"},uo(t,"fa-".concat(x),typeof x<"u"&&x!==null),uo(t,"fa-rotate-".concat(N),typeof N<"u"&&N!==null&&N!==0),uo(t,"fa-pull-".concat(L),typeof L<"u"&&L!==null),uo(t,"fa-swap-opacity",r.swapOpacity),t);return Object.keys(w).map(function(I){return w[I]?I:null}).filter(function(I){return I})}function DL(r){return r=r-0,r===r}function Ub(r){return DL(r)?r:(r=r.replace(/[\-_\s]+(.)?/g,function(t,e){return e?e.toUpperCase():""}),r.substr(0,1).toLowerCase()+r.substr(1))}var NL=["style"];function LL(r){return r.charAt(0).toUpperCase()+r.slice(1)}function UL(r){return r.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,e){var s=e.indexOf(":"),o=Ub(e.slice(0,s)),c=e.slice(s+1).trim();return o.startsWith("webkit")?t[LL(o)]=c:t[o]=c,t},{})}function Ob(r,t){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var s=(t.children||[]).map(function(d){return Ob(r,d)}),o=Object.keys(t.attributes||{}).reduce(function(d,p){var g=t.attributes[p];switch(p){case"class":d.attrs.className=g,delete t.attributes.class;break;case"style":d.attrs.style=UL(g);break;default:p.indexOf("aria-")===0||p.indexOf("data-")===0?d.attrs[p.toLowerCase()]=g:d.attrs[Ub(p)]=g}return d},{attrs:{}}),c=e.style,f=c===void 0?{}:c,h=EL(e,NL);return o.attrs.style=Wi(Wi({},o.attrs.style),f),r.apply(void 0,[t.tag,Wi(Wi({},o.attrs),h)].concat(Dm(s)))}var Pb=!1;try{Pb=!0}catch{}function OL(){if(!Pb&&console&&typeof console.error=="function"){var r;(r=console).error.apply(r,arguments)}}function $x(r){if(r&&df(r)==="object"&&r.prefix&&r.iconName&&r.icon)return r;if(Cm.icon)return Cm.icon(r);if(r===null)return null;if(r&&df(r)==="object"&&r.prefix&&r.iconName)return r;if(Array.isArray(r)&&r.length===2)return{prefix:r[0],iconName:r[1]};if(typeof r=="string")return{prefix:"fas",iconName:r}}function bp(r,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?uo({},r,t):{}}var tS={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Xl=Na.forwardRef(function(r,t){var e=Wi(Wi({},tS),r),s=e.icon,o=e.mask,c=e.symbol,f=e.className,h=e.title,d=e.titleId,p=e.maskId,g=$x(s),v=bp("classes",[].concat(Dm(CL(e)),Dm((f||"").split(" ")))),y=bp("transform",typeof e.transform=="string"?Cm.transform(e.transform):e.transform),S=bp("mask",$x(o)),M=vL(g,Wi(Wi(Wi(Wi({},v),y),S),{},{symbol:c,title:h,titleId:d,maskId:p}));if(!M)return OL("Could not find icon",g),null;var T=M.abstract,b={ref:t};return Object.keys(e).forEach(function(x){tS.hasOwnProperty(x)||(b[x]=e[x])}),PL(T[0],b)});Xl.displayName="FontAwesomeIcon";Xl.propTypes={beat:Se.bool,border:Se.bool,beatFade:Se.bool,bounce:Se.bool,className:Se.string,fade:Se.bool,flash:Se.bool,mask:Se.oneOfType([Se.object,Se.array,Se.string]),maskId:Se.string,fixedWidth:Se.bool,inverse:Se.bool,flip:Se.oneOf([!0,!1,"horizontal","vertical","both"]),icon:Se.oneOfType([Se.object,Se.array,Se.string]),listItem:Se.bool,pull:Se.oneOf(["right","left"]),pulse:Se.bool,rotation:Se.oneOf([0,90,180,270]),shake:Se.bool,size:Se.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Se.bool,spinPulse:Se.bool,spinReverse:Se.bool,symbol:Se.oneOfType([Se.bool,Se.string]),title:Se.string,titleId:Se.string,transform:Se.oneOfType([Se.string,Se.object]),swapOpacity:Se.bool};var PL=Ob.bind(null,Na.createElement);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const IL={prefix:"fas",iconName:"backward",icon:[512,512,[9194],"f04a","M459.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29l0-320c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4L288 214.3l0 41.7 0 41.7L459.5 440.6zM256 352l0-96 0-128 0-32c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160C4.2 237.5 0 246.5 0 256s4.2 18.5 11.5 24.6l192 160c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29l0-64z"]},BL={prefix:"fas",iconName:"pause",icon:[320,512,[9208],"f04c","M48 64C21.5 64 0 85.5 0 112L0 400c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48L48 64zm192 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-32 0z"]},zL={prefix:"fas",iconName:"forward",icon:[512,512,[9193],"f04e","M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416L0 96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4L224 214.3l0 41.7 0 41.7L52.5 440.6zM256 352l0-96 0-128 0-32c0-12.4 7.2-23.7 18.4-29s24.5-3.6 34.1 4.4l192 160c7.3 6.1 11.5 15.1 11.5 24.6s-4.2 18.5-11.5 24.6l-192 160c-9.5 7.9-22.8 9.7-34.1 4.4s-18.4-16.6-18.4-29l0-64z"]},FL=({userId:r})=>{const[t,e]=$e.useState(null),[s,o]=$e.useState(null),[c,f]=$e.useState(!1),[h,d]=$e.useState(""),[,p]=$e.useState("black"),g=$e.useRef(null),v=$e.useRef(null);$e.useEffect(()=>{g.current&&ji.init(g.current,{max:10,speed:400,glare:!0,"max-glare":.2})},[]),$e.useEffect(()=>{const T=async()=>{try{const N=await(await fetch(`https://api.lanyard.rest/v1/users/${r}`)).json();if(N.success&&N.data.listening_to_spotify&&N.data.spotify){const L=N.data.spotify;L.track_id!==s&&(f(!0),setTimeout(()=>{e(L),o(L.track_id),f(!1)},300))}else e(null),o(null)}catch(x){console.error("Error fetching Lanyard data:",x),e(null),o(null)}};T();const b=setInterval(T,15e3);return()=>clearInterval(b)},[r,s]);const[y,S]=$e.useState(0);$e.useEffect(()=>{let T;const b=()=>{if(t){const x=Date.now(),N=t.timestamps.end-t.timestamps.start,L=x-t.timestamps.start,w=Math.min(L/N*100,100);S(w)}else S(0);T=requestAnimationFrame(b)};return T=requestAnimationFrame(b),()=>cancelAnimationFrame(T)},[t]);const M=T=>{const[b,x,N]=T.map(w=>w/255),L=[b,x,N].map(w=>w<=.03928?w/12.92:Math.pow((w+.055)/1.055,2.4));return L[0]*.2126+L[1]*.7152+L[2]*.0722};return $e.useEffect(()=>{t?(()=>{const b=v.current;if(!b)return;const x=new ro;if(b.complete)try{const N=x.getColor(b),w=M(N)>.5?"black":"white";p(w),d(`linear-gradient(135deg, rgb(${N[0]}, ${N[1]}, ${N[2]}), #3E2B2B)`)}catch(N){console.warn("ColorThief error:",N)}else b.addEventListener("load",()=>{try{const N=x.getColor(b),w=M(N)>.5?"black":"white";p(w),d(`linear-gradient(135deg, rgb(${N[0]}, ${N[1]}, ${N[2]}), #3E2B2B)`)}catch(N){console.warn("ColorThief error:",N)}})})():(d("linear-gradient(135deg,rgb(64, 64, 85),rgb(231, 179, 134))"),p("white"))},[t]),nt.jsxs("div",{ref:g,className:"relative w-[320px] h-[600px] bg-black rounded-[2.5rem] border-[10px] border-zinc-800 shadow-2xl overflow-hidden flex items-center justify-center transform",children:[nt.jsx("div",{className:"absolute top-0 w-[140px] h-[24px] bg-black rounded-b-xl z-10 left-1/2 -translate-x-1/2"}),nt.jsxs("div",{className:`relative w-[280px] h-[550px] rounded-xl bg-zinc-900 shadow-inner transform transition-opacity duration-500 ease-in-out ${c?"opacity-0":"opacity-100"} overflow-hidden`,style:{background:h},children:[nt.jsx("img",{ref:v,crossOrigin:"anonymous",src:t?t.album_art_url:mD,alt:t?t.album:"Not listening to Spotify",className:"w-full h-[60%] object-cover"}),nt.jsx("div",{className:"absolute top-3 left-3 text-white text-[10px] tracking-widest opacity-80 uppercase",children:t?"Now Playing":"Spotify"}),nt.jsxs("div",{className:"p-3 text-white flex flex-col items-center text-center h-[40%] justify-center",children:[nt.jsx("h2",{className:"text-base font-interbold",children:t?t.song:"O F F L I N E"}),nt.jsx("p",{className:"text-xs mt-1 text-zinc-300",children:t==null?void 0:t.artist}),nt.jsx("p",{className:"text-[10px] text-zinc-400 italic",children:t==null?void 0:t.album}),nt.jsxs("div",{className:"p-3 flex flex-col justify-center items-center h-[40%] text-white",children:[nt.jsx("div",{className:"w-[220px] h-1 bg-zinc-800 rounded-full overflow-hidden mb-4",children:nt.jsx("div",{className:"h-full bg-white",style:{width:`${y}%`,transition:"width 0.2s ease-out"}})}),nt.jsxs("div",{className:"flex gap-6 items-center",children:[nt.jsx(Xl,{icon:IL,className:"text-xl hover:scale-110 transition-transform duration-200 cursor-pointer"}),nt.jsx(Xl,{icon:BL,className:"text-2xl hover:scale-125 transition-transform duration-200 cursor-pointer"}),nt.jsx(Xl,{icon:zL,className:"text-xl hover:scale-110 transition-transform duration-200 cursor-pointer"})]})]})]})]})]})},HL=()=>nt.jsx("div",{className:"absolute left-1/4 top-1/3 transform -translate-x-1/2",children:nt.jsxs("div",{className:"flex flex-col space-y-8",children:[nt.jsxs("div",{className:"flex space-x-4",children:[nt.jsxs("div",{className:"relative w-48 h-53 bg-white text-[#3E2B2B] rounded-xl shadow-md p-4 flex border-2 border-[#3E2B2B]",children:[nt.jsx("div",{className:"absolute top-[-20px] left-3 w-25 h-10 bg-[#3E2B2B] rounded-full flex items-center justify-center",children:nt.jsx("span",{className:"text-sm text-white font-poetsen",children:"INTERESTS"})}),nt.jsxs("ul",{className:"list-disc pl-6 pt-4 text-sm space-y-1",children:[nt.jsx("li",{children:"MBTI"}),nt.jsx("li",{children:"Gaming"}),nt.jsx("li",{children:"Baking"}),nt.jsx("li",{children:"Skincare"}),nt.jsx("li",{children:"Web Design"}),nt.jsx("li",{children:"Software Design"})]})]}),nt.jsxs("div",{className:"relative w-48 h-53 bg-white text-[#3E2B2B] rounded-xl shadow-md p-4 flex border-2 border-[#3E2B2B]",children:[nt.jsx("div",{className:"absolute top-[-20px] left-3 w-25 h-10 bg-[#3E2B2B] rounded-full flex items-center justify-center",children:nt.jsx("span",{className:"text-sm text-white font-poetsen",children:"GAMES"})}),nt.jsxs("ul",{className:"list-disc pl-6 pt-4 text-sm space-y-1",children:[nt.jsx("li",{children:"Animal Crossing"}),nt.jsx("li",{children:"Valorant"}),nt.jsx("li",{children:"Minecraft"}),nt.jsx("li",{children:"Stardew Valley"}),nt.jsx("li",{children:"Elden Ring"})]})]})]}),nt.jsxs("div",{className:"relative w-100 h-38 bg-white text-[#3E2B2B] rounded-xl shadow-md p-4 flex justify-center border-2 border-[#3E2B2B]",children:[nt.jsx("div",{className:"absolute top-[-20px] left-3 w-25 h-10 bg-[#3E2B2B] rounded-full flex items-center justify-center",children:nt.jsx("span",{className:"text-sm text-white font-poetsen",children:"HOBBIES"})}),nt.jsxs("div",{className:"pt-4 grid grid-cols-2 gap-x-8 text-sm",children:[nt.jsxs("ul",{className:"list-disc pl-5 space-y-1",children:[nt.jsx("li",{children:"Shopping"}),nt.jsx("li",{children:"Studying at Cafes"}),nt.jsx("li",{children:"Notetaking"})]}),nt.jsxs("ul",{className:"list-disc pl-5 space-y-1",children:[nt.jsx("li",{children:"Photography"}),nt.jsx("li",{children:"Traveling"}),nt.jsx("li",{children:"Eating"})]})]})]})]})}),GL="/assets/coffeecup-BGiLhuR-.png",kL="/assets/sleeping-Ds5VirgF.gif";function VL(){const[r,t]=$e.useState(!0),e=$e.useRef(null);return $e.useEffect(()=>{const s=new IntersectionObserver(([o])=>{t(o.isIntersecting)},{threshold:.3});return e.current&&s.observe(e.current),()=>{e.current&&s.unobserve(e.current)}},[]),nt.jsxs("div",{id:"About",ref:e,className:"relative h-screen flex justify-end items-end pr-16 pb-40",children:[nt.jsx("div",{className:"absolute top-35 left-16 rotate-[-6deg]",children:nt.jsx("div",{className:"px-10 py-4 rounded-2x1 bg-[#3E2B2B] backdrop-blur-md shadow-lg text-4xl font-poetsen text-white drop-shadow-lg",children:"About Me"})}),nt.jsx(HL,{}),nt.jsxs("div",{className:`${r?"animate-slide-in":"animate-slide-out"} flex items-center gap-8 translate-y-20`,children:[nt.jsx("img",{src:kL,alt:"Sleeping",className:"absolute left-45 bottom-[-10px] w-40 h-40 z-10",style:{transform:"translateX(-60%) rotate(-8deg)"}}),nt.jsx("img",{src:GL,alt:"Coffee Cup",className:"w-80 h-80 translate-y-36 translate-x-18"}),nt.jsx(FL,{userId:"348153501148381184"})]})]})}function XL(){return nt.jsx("div",{id:"Skills",className:"relative h-screen flex justify-end items-end pr-16 pb-40",children:nt.jsx("div",{className:"absolute top-35 left-16 rotate-[-6deg]",children:nt.jsx("div",{className:"px-10 py-4 rounded-2xl bg-[#3E2B2B] backdrop-blur-md shadow-lg text-4xl font-poetsen text-white drop-shadow-lg",children:"Skills"})})})}const Pl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAHYgAAB2IBOHqZ2wAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAxySURBVHic7d1/kJT1fcDx9+7dAcfB8VsEETEGocKBhqqgDQlpY1LNjFpn4sR0dNREJTXNmGm0Nho0kLFTmwaNaWKrDabt5EctjIkxdaKmQpOWWG1FUEOCKIVDERFO7uC4vb3+sSEh5va53bvbvWfv837N7Mi533U/4O2be559nn1AkiRJkiRJkiRJkiRJkiRJkiRJUk3IlLhuLPBBYAEwA5gKNJT42C7gOeCvgDfKnG8EcD2wDBhV5mPT4iCwF3gW+Hdg85BOI5XhTOAh4DDQM8DbbuCdZTz3aOC/B+F503Z7EVhO7QZNAUwFvgXkGdxv/sfLmOGOQX7utN1+Aby/jD8PqSoWAq9QmW/6PNBc4hxbKjRDmm7dwC0l/nlIg+7t+wAWA48BTRV5sgzs//GHaW7qe/fBaRc/zAsvHajEGGl0J3DjUA+heLLH/HoGsJYKvfgBli46rqQXP8CHlp5QqTHS6DPAdUM9hOLJHPPPDcC5lXqiKRNGsmHNecyZVdoWQPuhHOdc/iibtu6v1Ehp0wmcTeHdAqkqjgbgEuDBUh4wfUojJ01voqmxvuQnaZk9nj+/ah7HTSxvx/fhzm6+9E8vsv7pPeS682U9Ng26cnl2vtbBK63t5Lp7SnnI/1KIwJHKTiYVZH55ewGYk7Tw0g+cxGc/Pp+W2eOrMthwsmffYe5b+wtW/d1mDnV297V8FXBrFcaSyAC/CzxVdEEG7rn5TD5x6anVm2qY2rLtAMuu/iGvv9mZtCwHnEPC/xNpsGSBi5IW/Ollc33xD5J5p4xj3er3UF+XeABmPbAGDxRSFdQBK4CTeruzqbGe7979HkaNrKvuVMPYzOOb6MrlWf/0nqRlUygE4IfVmUpRZYHpxe58/5JpjB87oorjxLDiugUsOm1iX8s+DSytwjgKLAtMK3bn7JljqzhKHPV1Ge6/bTEjGrJJy7IUNgXGVGUohVRPwoE/o0f5o3+lLJwzgc9d28It9yS+7X8y8GMgcXtBNa8N2AW8BvwnsJ7CzuCKK/3NfA26m66ax0M/2slTWxLPkl5QrXmUGvuAf6XwlvCOSj5R4s+gqqz6ugwPrFriTla93UTg48DPKHyORsXeETIAQ+x33jGOVdcvHOoxlE6jKJwn8iMS9tUNhAFIgRv+eC6/d8aUoR5D6bUY2EjhhL1BZQBSIJvN8I0vnMOY0e6SUVEnAt+l8ElZg8YApMTJJ4zhLz91xlCPoXQ7A/jiYP4H/SsnRT5x6amse+L/eHzjq4nrpoxrYOZkD9BKqx566Cnp5M+CzlyenXu7aOvo80QxKOwc/DLwfP+m+00GIEUyGbj/9sUsuOT7tLV3FV8HPLJiDlPGlfrBzKq2I1058j2ln8Lene/hyc0HWfnt3Wzc2p60tA5YSeEU/gFzEyBlTprWxN98ZlHimj0HuviTr71cnYHUL/V15b206rIZ3rdgLI+tnM3Hzpvc1/IPAYNyXr4BSKGrLz6F899d9BQNAB78yT6+ub7cyyyoWrLZLNlMqZfd+LW6bIbVHzuRZS2Jh+GPAM7v72zHMgAp9fcrFjNxXPJ2/ifvfZndbxbfVNDQymT79/LKZuCOy/v8TMxBOVHMAKTU9CmN3H3TmYlr9h3Mce1XXqrSRCpXf34COGrBrEZmTxuZtGRQPjXXAKTYRy+YxR/9/omJax5+aj9ff/z1Kk2kcmQGEACAU09IPAI4eRuxRAYg5e793NlMnZR8KPgN973Cjtf9HNG0GdjLH8aMSnx5Dspp4gYg5SaPH8m9t56duKato5ur7t5W1nvPEhiAmnDhshlcdv6sxDVPbGrjqz94rToDadgwADXiK39xJjOmJh8GfuOaHfy89XCVJtJwYABqxPixI7j/9sUk7Vfq6Mxz5V0v0Z13W0ClMQA15Lwl07jywlMS1/zkxbe463vJ5xJIRxmAGvOlGxcxc1ry9Vs/+4872bLjUJUmUi0zADWmuamBr38+eVOgsyvPFau30VXa9QgVmAGoQe8763iWfzj5ak3PbGvnzrW7qzSRapUBqFF3fvqMPq/b8Plv7WTTyx1Vmki1yADUqNGj6lmzcgl12eLbAkdyPVyxehtHcm4KqHcGoIadc/oUPvXRuYlrnt3ewRe+s6tKE6nW+IlANW7VJxfyyH/s4sXtbUXX3PFgK9lshlENAz06XeXKdZf0MV+9emFn4kFdE4Gbjvm6k8KVhXYBW4CSPiwiAxT9+XDFdS3cttwL06TdTze/wbmXP0rOvf4qyAEbKFxd6B+Aou8JuwkwDJw1fxI3XjlvqMdQetQDy4B7gK3AlRQ5OdEADBO3LW8p5ZLjimcGhZ8Cvgc0v/1OAzBMNNRnua/vS44rrgsoXHX4Ny5B5XfLMHL6nAnccs38oR5D6bUQWAf86rPGDMAwc/PV81m66LihHkPpdS7w10e/MADDTH1dhoe//F6u/8gcJjR79SD1ajnQAr4NOOy1tXfR7duDNagHOt6E7lxpq3ugdW8nP9j4Bqu/s4PWvZ19PeQR4AIPBBrmmpu8fFjNGj0JOvaVvHxicwPz3zGG5RfN4PJVW1i3fk/S8j8ETnQTQEqr+obCrUxjGuv49u0tLF04IWlZBrjQAEhpVp/8kfDFNNRn+OqfzSWbcLIY8AEDIKVZff935J42q4kl88YlLZllAKQ0y9QN6OHvOjXxMyOmGwApzQZ4ebGJzYn7ECYYACmujAGQAjMAUmAGQArMAEiBGQApMAMgBWYApMAMgBSYAZACMwBSYAZACswASIEZACkwAyAFZgCkwAyAFJgBkAIzAFJgBkAKzABIgRkAKTADIAVmAKTADIAUmAGQAjMAUmAGQArMAEiBGQApMAMgBWYApMAMgBSYAZACMwBSYAZACswASIEZACkwAyAFZgCkwAyAFJgBkAIzAFJgBkAKzABIgRkAKTADIAVmAKTADIAUmAGQAjMAUmAGQArMAEiBGQApMAMgBWYApMAMgBSYAZACMwBSYAZACswASIEZACkwAyAFZgCkwAyAFJgBkAIzAFJgBkAKzABIgRkAKTADIAVmAKTADIAUmAGQAjMAUmAGQArMAEiBGQApMAMgBWYApMAMgBSYAZACMwBSYAZACswASIEZACkwAyAFZgCkwAyAFJgBkAIzAFJgBkAKzABIgRkAKTADIAVmAKTADIAUmAGQAjMAUmAGQArMAEiBGQApMAMgBWYApMAMgBSYAZACMwBSYAZACswASIEZACkwAyAFZgCkwAyAFJgBkAIzAFJgBkAKzABIgRkAKTADIAVmAKTADIAUmAGQAjMAUmAGQArMAEiBGQApMAMgBWYApMAMgBSYAZACMwBSYAZACswASIEZACkwAyAFZgCkwAyAFJgBkAIzAFJgBkAKzABIgRkAKTADIAVmAKTADIAUmAGQAjMAUmAGQArMAEiBGQApMAMgBWYApMAMgBSYAZACMwBSYAZACswASIEZACkwAyAFZgCkwAyAFFgWaC92Z8fh7iqOIum39Qzo0e3Jr+H2LLC72L1bX2kb0JNLGqDugf0l/LMdHUl3t2aB1mL3PvZfr/Jm25EBDSBpAPK5fj90X1sXjz+9L2nJriywvti97YdyrPjbTf0eQNIAdXX2+6G33retr8349XVAG3BNsRU/3fwGk8aP5OyWyf0eRFI/5PPQ2b/N8Lv+ZQcrH9je17IbMkAGeB6Ym7Tykj+YyS3XzOf0ORP6NZCkMh06AF2Hy3rI//z8LVY9sJ21T+7pa+nzwPzML7+4GFhbyhMcP7mRk09ooqmxvqzBpGqad8p4br56HlMnjSrrcYc7u/niN15gwzN76M4PbA/8gOTzZW3/tx/uZnvrIV7dV/I+u4uAh44GIAM8Cby7rCGlFJs8fiQb1pzH3JObS1p/sCPHuVc8yqat+ys82ZB7Engv/PpAoB7gIyS8JSjVmr37O7l25caS19/+tU0RXvytwGVHvzj2SMBdFDYFDlZ7IqlSNjyzhwMHu0pa+/0NRd8RHy4OUniN/+o3mull0QLgIWBWdWaSKqoHGAe8VcLaLcBplR1nyGwHLgSeO/Zf9nYuwCbgLOCbDPQ4RGnoPUFpL34o/MU33OSBf6bwmn6uj7W/ZRGwDjhEIQbevNXSrRV4J6UbDTyVgrkH43aIwmv3XUm/4d42AXrTBHwQWAjMAKYCI0p8rFRtXcCzwJ1A4rGwvWgArgeWAY2DPFclHQFeA3ZS+L3/Gwkn+kmSJEmSJEmSJEmSJEmSJEmSJEmqMf8P7Kr3lyBV5SMAAAAASUVORK5CYII=",jL="/assets/pochacco-D-57DIqB.gif",WL=()=>{const[r,t]=$e.useState(null),e=(s,o)=>{const c=document.createElement("span"),f=o.currentTarget,h=Math.max(f.offsetWidth,f.offsetHeight),d=f.getBoundingClientRect(),p=o.clientX-d.left-h/2,g=o.clientY-d.top-h/2;c.style.width=c.style.height=`${h}px`,c.style.left=`${p}px`,c.style.top=`${g}px`,c.classList.add("ripple"),f.appendChild(c),t(s),setTimeout(()=>c.remove(),600)};return nt.jsxs("div",{className:"w-4/5 h-3/4 bg-white border-4 border-brown rounded-3xl shadow-xl mt-25",children:[nt.jsx("div",{className:"w-full h-15 bg-[#3E2B2B] rounded-t-2xl flex items-center justify-center text-white font-pixel text-3xl"}),nt.jsxs("div",{className:"w-65/70 h-40/50 gradient-inner border-4 border-brown shadow-xl flex justify-center items-center relative mt-8 mx-auto",children:[nt.jsx("div",{className:"absolute top-8 left-20 text-7xl text-white font-pixel",children:nt.jsx("h1",{children:"My Coding Journey"})}),nt.jsxs("div",{className:"space-y-4 items-start absolute left-20 top-40 text-white font-pixel max-h-[300px] overflow-y-auto",children:[nt.jsx("div",{className:"w-90 h-15 bg-[#3E2B2B] rounded-lg flex items-center border-2 transition-all duration-300 hover:h-20 cursor-pointer relative overflow-hidden",onClick:s=>e("Website",s),children:nt.jsxs("div",{className:"flex items-center gap-x-3",children:[nt.jsx("img",{src:Pl,alt:"file icon",className:"w-6 h-6 ml-6"}),nt.jsx("span",{className:"text-2xl",children:"Project One"})]})}),nt.jsx("div",{className:"w-90 h-15 bg-[#3E2B2B] rounded-lg flex items-center border-2 transition-all duration-300 hover:h-20 cursor-pointer relative overflow-hidden",onClick:s=>e("Project Two",s),children:nt.jsxs("div",{className:"flex gap-x-3",children:[nt.jsx("img",{src:Pl,alt:"file icon",className:"w-6 h-6 ml-6"}),nt.jsx("span",{className:"text-2xl",children:"Project Two"})]})}),nt.jsx("div",{className:"w-90 h-15 bg-[#3E2B2B] rounded-lg flex items-center border-2 transition-all duration-300 hover:h-20 cursor-pointer relative overflow-hidden",onClick:s=>e("Project Three",s),children:nt.jsxs("div",{className:"flex items-center gap-x-3",children:[nt.jsx("img",{src:Pl,alt:"file icon",className:"w-6 h-6 ml-6"}),nt.jsx("span",{className:"text-2xl",children:"Project Three"})]})}),nt.jsx("div",{className:"w-90 h-15 bg-[#3E2B2B] rounded-lg flex items-center border-2 transition-all duration-300 hover:h-20 cursor-pointer relative overflow-hidden",onClick:s=>e("Project Four",s),children:nt.jsxs("div",{className:"flex items-center gap-x-3 ml-6",children:[nt.jsx("img",{src:Pl,alt:"file icon",className:"w-6 h-6"}),nt.jsx("span",{className:"text-2xl",children:"Project Four"})]})}),nt.jsx("div",{className:"w-90 h-15 bg-[#3E2B2B] rounded-lg flex items-center border-2 transition-all duration-300 hover:h-20 cursor-pointer relative overflow-hidden",onClick:s=>e("Project Five",s),children:nt.jsxs("div",{className:"flex items-center gap-x-3 ml-6",children:[nt.jsx("img",{src:Pl,alt:"file icon",className:"w-6 h-6"}),nt.jsx("span",{className:"text-2xl",children:"Project Five"})]})})]}),nt.jsx("div",{className:"absolute right-20 top-40 text-white font-pixel",style:{maxWidth:"400px"},children:r?nt.jsxs("div",{children:[nt.jsxs("div",{className:"flex items-center gap-8 mb-4",children:[nt.jsx("h2",{className:"text-5xl break-words",children:r}),nt.jsx("a",{href:(()=>{switch(r){case"Website":return"https://github.com/liviemn/Portfolio-Website";case"Project Two":return"https://github.com/your-username/project-two-repo";case"Project Three":return"https://github.com/your-username/project-two-repo";case"Project Four":return"https://github.com/your-username/project-two-repo";case"Project Five":return"https://github.com/your-username/project-two-repo";default:return"#"}})(),target:"_blank",rel:"noopener noreferrer",className:"text-[#3E2B2B] hover:text-white text-5xl",children:nt.jsx(sS,{})})]}),nt.jsxs("p",{className:"text-lg leading-relaxed break-words",children:[r==="Website"&&nt.jsxs("span",{children:["I created a website portfolio to showcase myself and my skills! I had a fun time designing and creating this website.",nt.jsxs("div",{className:"flex flex-wrap gap-3 mt-6",children:[nt.jsx("div",{className:"w-25 h-auto bg-[#3E2B2B] rounded-full flex justify-center items-center text-sm text-white px-2 py-1",children:"React"}),nt.jsx("div",{className:"w-25 h-auto bg-[#3E2B2B] rounded-full flex justify-center items-center text-sm text-white px-2 py-1",children:"Typescript"}),nt.jsx("div",{className:"w-25 h-auto bg-[#3E2B2B] rounded-full flex justify-center items-center text-sm text-white px-2 py-1",children:"TailwindCSS"}),nt.jsx("div",{className:"w-25 h-auto bg-[#3E2B2B] rounded-full flex justify-center items-center text-sm text-white px-2 py-1",children:"ThreeJS"}),nt.jsx("div",{className:"w-25 h-auto bg-[#3E2B2B] rounded-full flex justify-center items-center text-sm text-white px-2 py-1",children:"HTML"}),nt.jsx("div",{className:"w-25 h-auto bg-[#3E2B2B] rounded-full flex justify-center items-center text-sm text-white px-2 py-1",children:"CSS"}),nt.jsx("div",{className:"w-25 h-auto bg-[#3E2B2B] rounded-full flex justify-center items-center text-sm text-white px-2 py-1",children:"Lanyard"})]})]}),r==="Project Two"&&nt.jsx("span",{children:"Coming Soon."}),r==="Project Three"&&nt.jsx("span",{children:"Coming Soon."}),r==="Project Four"&&nt.jsx("span",{children:"Coming Soon."}),r==="Project Five"&&nt.jsx("span",{children:"Coming Soon."})]})]}):nt.jsxs("div",{className:"flex flex-col items-center text-center space-y-4",children:[nt.jsx("img",{src:jL,alt:"Pochacco",className:"w-64 h-auto rounded-lg"}),nt.jsx("p",{className:"text-xl font-light",children:"Tap a box on the left to see what's inside ✨"})]})})]})]})};function YL(){return nt.jsxs("div",{id:"Projects",className:"relative h-screen flex justify-center items-center",children:[nt.jsx(WL,{}),nt.jsx("div",{className:"absolute top-8 left-16 rotate-[-6deg]",children:nt.jsx("div",{className:"px-10 py-4 rounded-2xl bg-[#3E2B2B] backdrop-blur-md shadow-lg text-4xl font-poetsen text-white drop-shadow-lg",children:"Projects"})})]})}function qL(){return nt.jsxs("div",{children:[nt.jsx(pD,{}),nt.jsx(VL,{}),nt.jsx(XL,{}),nt.jsx(YL,{})]})}WE.createRoot(document.getElementById("root")).render(nt.jsx($e.StrictMode,{children:nt.jsx(qL,{})}));
