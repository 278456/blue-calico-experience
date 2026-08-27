(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Jl(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Mt={},zs=[],Kn=()=>{},Md=()=>!1,Xa=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),$a=n=>n.startsWith("onUpdate:"),Ht=Object.assign,Ql=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Uh=Object.prototype.hasOwnProperty,gt=(n,e)=>Uh.call(n,e),$e=Array.isArray,Hs=n=>Vr(n)==="[object Map]",Sd=n=>Vr(n)==="[object Set]",Pc=n=>Vr(n)==="[object Date]",Je=n=>typeof n=="function",wt=n=>typeof n=="string",Jn=n=>typeof n=="symbol",_t=n=>n!==null&&typeof n=="object",Ed=n=>(_t(n)||Je(n))&&Je(n.then)&&Je(n.catch),Td=Object.prototype.toString,Vr=n=>Td.call(n),Nh=n=>Vr(n).slice(8,-1),Ad=n=>Vr(n)==="[object Object]",ec=n=>wt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Er=Jl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ja=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},Fh=/-\w/g,nn=ja(n=>n.replace(Fh,e=>e.slice(1).toUpperCase())),Oh=/\B([A-Z])/g,Hi=ja(n=>n.replace(Oh,"-$1").toLowerCase()),qa=ja(n=>n.charAt(0).toUpperCase()+n.slice(1)),oo=ja(n=>n?`on${qa(n)}`:""),Xn=(n,e)=>!Object.is(n,e),Ma=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},wd=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},tc=n=>{const e=parseFloat(n);return isNaN(e)?n:e},Bh=n=>{const e=wt(n)?Number(n):NaN;return isNaN(e)?n:e};let Dc;const Ya=()=>Dc||(Dc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function An(n){if($e(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=wt(i)?Vh(i):An(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(wt(n)||_t(n))return n}const kh=/;(?![^(]*\))/g,zh=/:([^]+)/,Hh=/\/\*[^]*?\*\//g;function Vh(n){const e={};return n.replace(Hh,"").split(kh).forEach(t=>{if(t){const i=t.split(zh);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Tt(n){let e="";if(wt(n))e=n;else if($e(n))for(let t=0;t<n.length;t++){const i=Tt(n[t]);i&&(e+=i+" ")}else if(_t(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Gh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Wh=Jl(Gh);function Cd(n){return!!n||n===""}function Xh(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=nc(n[i],e[i]);return t}function nc(n,e){if(n===e)return!0;let t=Pc(n),i=Pc(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=Jn(n),i=Jn(e),t||i)return n===e;if(t=$e(n),i=$e(e),t||i)return t&&i?Xh(n,e):!1;if(t=_t(n),i=_t(e),t||i){if(!t||!i)return!1;const s=Object.keys(n).length,r=Object.keys(e).length;if(s!==r)return!1;for(const a in n){const o=n.hasOwnProperty(a),l=e.hasOwnProperty(a);if(o&&!l||!o&&l||!nc(n[a],e[a]))return!1}}return String(n)===String(e)}const Rd=n=>!!(n&&n.__v_isRef===!0),he=n=>wt(n)?n:n==null?"":$e(n)||_t(n)&&(n.toString===Td||!Je(n.toString))?Rd(n)?he(n.value):JSON.stringify(n,Pd,2):String(n),Pd=(n,e)=>Rd(e)?Pd(n,e.value):Hs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[lo(i,r)+" =>"]=s,t),{})}:Sd(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>lo(t))}:Jn(e)?lo(e):_t(e)&&!$e(e)&&!Ad(e)?String(e):e,lo=(n,e="")=>{var t;return Jn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Wt;class $h{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Wt&&(Wt.active?(this.parent=Wt,this.index=(Wt.scopes||(Wt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){const i=this.scopes.slice();for(e=0,t=i.length;e<t;e++)i[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){const s=this.scopes.slice();for(e=0,t=s.length;e<t;e++)s[e].resume()}const i=this.effects.slice();for(e=0,t=i.length;e<t;e++)i[e].resume()}}run(e){if(this._active){const t=Wt;try{return Wt=this,e()}finally{Wt=t}}}on(){++this._on===1&&(this.prevScope=Wt,Wt=this)}off(){if(this._on>0&&--this._on===0){if(Wt===this)Wt=this.prevScope;else{let e=Wt;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(t=0,i=s.length;t<i;t++)s[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function jh(){return Wt}let St;const co=new WeakSet;class Dd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Wt&&(Wt.active?Wt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,co.has(this)&&(co.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Id(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Lc(this),Ud(this);const e=St,t=Fn;St=this,Fn=!0;try{return this.fn()}finally{Nd(this),St=e,Fn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)rc(e);this.deps=this.depsTail=void 0,Lc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?co.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Qo(this)&&this.run()}get dirty(){return Qo(this)}}let Ld=0,Tr,Ar;function Id(n,e=!1){if(n.flags|=8,e){n.next=Ar,Ar=n;return}n.next=Tr,Tr=n}function ic(){Ld++}function sc(){if(--Ld>0)return;if(Ar){let e=Ar;for(Ar=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Tr;){let e=Tr;for(Tr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Ud(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Nd(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),rc(i),qh(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function Qo(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Fd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Fd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Pr)||(n.globalVersion=Pr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Qo(n))))return;n.flags|=2;const e=n.dep,t=St,i=Fn;St=n,Fn=!0;try{Ud(n);const s=n.fn(n._value);(e.version===0||Xn(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{St=t,Fn=i,Nd(n),n.flags&=-3}}function rc(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)rc(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function qh(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Fn=!0;const Od=[];function _i(){Od.push(Fn),Fn=!1}function vi(){const n=Od.pop();Fn=n===void 0?!0:n}function Lc(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=St;St=void 0;try{e()}finally{St=t}}}let Pr=0;class Yh{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ac{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!St||!Fn||St===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==St)t=this.activeLink=new Yh(St,this),St.deps?(t.prevDep=St.depsTail,St.depsTail.nextDep=t,St.depsTail=t):St.deps=St.depsTail=t,Bd(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=St.depsTail,t.nextDep=void 0,St.depsTail.nextDep=t,St.depsTail=t,St.deps===t&&(St.deps=i)}return t}trigger(e){this.version++,Pr++,this.notify(e)}notify(e){ic();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{sc()}}}function Bd(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Bd(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const el=new WeakMap,ls=Symbol(""),tl=Symbol(""),Dr=Symbol("");function qt(n,e,t){if(Fn&&St){let i=el.get(n);i||el.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new ac),s.map=i,s.key=t),s.track()}}function di(n,e,t,i,s,r){const a=el.get(n);if(!a){Pr++;return}const o=l=>{l&&l.trigger()};if(ic(),e==="clear")a.forEach(o);else{const l=$e(n),c=l&&ec(t);if(l&&t==="length"){const u=Number(i);a.forEach((d,h)=>{(h==="length"||h===Dr||!Jn(h)&&h>=u)&&o(d)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),c&&o(a.get(Dr)),e){case"add":l?c&&o(a.get("length")):(o(a.get(ls)),Hs(n)&&o(a.get(tl)));break;case"delete":l||(o(a.get(ls)),Hs(n)&&o(a.get(tl)));break;case"set":Hs(n)&&o(a.get(ls));break}}sc()}function ys(n){const e=ht(n);return e===n?e:(qt(e,"iterate",Dr),wn(n)?e:e.map(Bn))}function Ka(n){return qt(n=ht(n),"iterate",Dr),n}function Vn(n,e){return xi(n)?qs(cs(n)?Bn(e):e):Bn(e)}const Kh={__proto__:null,[Symbol.iterator](){return uo(this,Symbol.iterator,n=>Vn(this,n))},concat(...n){return ys(this).concat(...n.map(e=>$e(e)?ys(e):e))},entries(){return uo(this,"entries",n=>(n[1]=Vn(this,n[1]),n))},every(n,e){return ti(this,"every",n,e,void 0,arguments)},filter(n,e){return ti(this,"filter",n,e,t=>t.map(i=>Vn(this,i)),arguments)},find(n,e){return ti(this,"find",n,e,t=>Vn(this,t),arguments)},findIndex(n,e){return ti(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return ti(this,"findLast",n,e,t=>Vn(this,t),arguments)},findLastIndex(n,e){return ti(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return ti(this,"forEach",n,e,void 0,arguments)},includes(...n){return fo(this,"includes",n)},indexOf(...n){return fo(this,"indexOf",n)},join(n){return ys(this).join(n)},lastIndexOf(...n){return fo(this,"lastIndexOf",n)},map(n,e){return ti(this,"map",n,e,void 0,arguments)},pop(){return ur(this,"pop")},push(...n){return ur(this,"push",n)},reduce(n,...e){return Ic(this,"reduce",n,e)},reduceRight(n,...e){return Ic(this,"reduceRight",n,e)},shift(){return ur(this,"shift")},some(n,e){return ti(this,"some",n,e,void 0,arguments)},splice(...n){return ur(this,"splice",n)},toReversed(){return ys(this).toReversed()},toSorted(n){return ys(this).toSorted(n)},toSpliced(...n){return ys(this).toSpliced(...n)},unshift(...n){return ur(this,"unshift",n)},values(){return uo(this,"values",n=>Vn(this,n))}};function uo(n,e,t){const i=Ka(n),s=i[e]();return i!==n&&!wn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const Zh=Array.prototype;function ti(n,e,t,i,s,r){const a=Ka(n),o=a!==n&&!wn(n),l=a[e];if(l!==Zh[e]){const d=l.apply(n,r);return o?Bn(d):d}let c=t;a!==n&&(o?c=function(d,h){return t.call(this,Vn(n,d),h,n)}:t.length>2&&(c=function(d,h){return t.call(this,d,h,n)}));const u=l.call(a,c,i);return o&&s?s(u):u}function Ic(n,e,t,i){const s=Ka(n),r=s!==n&&!wn(n);let a=t,o=!1;s!==n&&(r?(o=i.length===0,a=function(c,u,d){return o&&(o=!1,c=Vn(n,c)),t.call(this,c,Vn(n,u),d,n)}):t.length>3&&(a=function(c,u,d){return t.call(this,c,u,d,n)}));const l=s[e](a,...i);return o?Vn(n,l):l}function fo(n,e,t){const i=ht(n);qt(i,"iterate",Dr);const s=i[e](...t);return(s===-1||s===!1)&&cc(t[0])?(t[0]=ht(t[0]),i[e](...t)):s}function ur(n,e,t=[]){_i(),ic();const i=ht(n)[e].apply(n,t);return sc(),vi(),i}const Jh=Jl("__proto__,__v_isRef,__isVue"),kd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Jn));function Qh(n){Jn(n)||(n=String(n));const e=ht(this);return qt(e,"has",n),e.hasOwnProperty(n)}class zd{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?cp:Wd:r?Gd:Vd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=$e(e);if(!s){let l;if(a&&(l=Kh[t]))return l;if(t==="hasOwnProperty")return Qh}const o=Reflect.get(e,t,Kt(e)?e:i);if((Jn(t)?kd.has(t):Jh(t))||(s||qt(e,"get",t),r))return o;if(Kt(o)){const l=a&&ec(t)?o:o.value;return s&&_t(l)?il(l):l}return _t(o)?s?il(o):Lr(o):o}}class Hd extends zd{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const a=$e(e)&&ec(t);if(!this._isShallow){const c=xi(r);if(!wn(i)&&!xi(i)&&(r=ht(r),i=ht(i)),!a&&Kt(r)&&!Kt(i))return c||(r.value=i),!0}const o=a?Number(t)<e.length:gt(e,t),l=Reflect.set(e,t,i,Kt(e)?e:s);return e===ht(s)&&l&&(o?Xn(i,r)&&di(e,"set",t,i):di(e,"add",t,i)),l}deleteProperty(e,t){const i=gt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&di(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!Jn(t)||!kd.has(t))&&qt(e,"has",t),i}ownKeys(e){return qt(e,"iterate",$e(e)?"length":ls),Reflect.ownKeys(e)}}class ep extends zd{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const tp=new Hd,np=new ep,ip=new Hd(!0);const nl=n=>n,Kr=n=>Reflect.getPrototypeOf(n);function sp(n,e,t){return function(...i){const s=this.__v_raw,r=ht(s),a=Hs(r),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=s[n](...i),u=t?nl:e?qs:Bn;return!e&&qt(r,"iterate",l?tl:ls),Ht(Object.create(c),{next(){const{value:d,done:h}=c.next();return h?{value:d,done:h}:{value:o?[u(d[0]),u(d[1])]:u(d),done:h}}})}}function Zr(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function rp(n,e){const t={get(s){const r=this.__v_raw,a=ht(r),o=ht(s);n||(Xn(s,o)&&qt(a,"get",s),qt(a,"get",o));const{has:l}=Kr(a),c=e?nl:n?qs:Bn;if(l.call(a,s))return c(r.get(s));if(l.call(a,o))return c(r.get(o));r!==a&&r.get(s)},get size(){const s=this.__v_raw;return!n&&qt(ht(s),"iterate",ls),s.size},has(s){const r=this.__v_raw,a=ht(r),o=ht(s);return n||(Xn(s,o)&&qt(a,"has",s),qt(a,"has",o)),s===o?r.has(s):r.has(s)||r.has(o)},forEach(s,r){const a=this,o=a.__v_raw,l=ht(o),c=e?nl:n?qs:Bn;return!n&&qt(l,"iterate",ls),o.forEach((u,d)=>s.call(r,c(u),c(d),a))}};return Ht(t,n?{add:Zr("add"),set:Zr("set"),delete:Zr("delete"),clear:Zr("clear")}:{add(s){const r=ht(this),a=Kr(r),o=ht(s),l=!e&&!wn(s)&&!xi(s)?o:s;return a.has.call(r,l)||Xn(s,l)&&a.has.call(r,s)||Xn(o,l)&&a.has.call(r,o)||(r.add(l),di(r,"add",l,l)),this},set(s,r){!e&&!wn(r)&&!xi(r)&&(r=ht(r));const a=ht(this),{has:o,get:l}=Kr(a);let c=o.call(a,s);c||(s=ht(s),c=o.call(a,s));const u=l.call(a,s);return a.set(s,r),c?Xn(r,u)&&di(a,"set",s,r):di(a,"add",s,r),this},delete(s){const r=ht(this),{has:a,get:o}=Kr(r);let l=a.call(r,s);l||(s=ht(s),l=a.call(r,s)),o&&o.call(r,s);const c=r.delete(s);return l&&di(r,"delete",s,void 0),c},clear(){const s=ht(this),r=s.size!==0,a=s.clear();return r&&di(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=sp(s,n,e)}),t}function oc(n,e){const t=rp(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(gt(t,s)&&s in i?t:i,s,r)}const ap={get:oc(!1,!1)},op={get:oc(!1,!0)},lp={get:oc(!0,!1)};const Vd=new WeakMap,Gd=new WeakMap,Wd=new WeakMap,cp=new WeakMap;function up(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Lr(n){return xi(n)?n:lc(n,!1,tp,ap,Vd)}function dp(n){return lc(n,!1,ip,op,Gd)}function il(n){return lc(n,!0,np,lp,Wd)}function lc(n,e,t,i,s){if(!_t(n)||n.__v_raw&&!(e&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const r=s.get(n);if(r)return r;const a=up(Nh(n));if(a===0)return n;const o=new Proxy(n,a===2?i:t);return s.set(n,o),o}function cs(n){return xi(n)?cs(n.__v_raw):!!(n&&n.__v_isReactive)}function xi(n){return!!(n&&n.__v_isReadonly)}function wn(n){return!!(n&&n.__v_isShallow)}function cc(n){return n?!!n.__v_raw:!1}function ht(n){const e=n&&n.__v_raw;return e?ht(e):n}function fp(n){return!gt(n,"__v_skip")&&Object.isExtensible(n)&&wd(n,"__v_skip",!0),n}const Bn=n=>_t(n)?Lr(n):n,qs=n=>_t(n)?il(n):n;function Kt(n){return n?n.__v_isRef===!0:!1}function et(n){return hp(n,!1)}function hp(n,e){return Kt(n)?n:new pp(n,e)}class pp{constructor(e,t){this.dep=new ac,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:ht(e),this._value=t?e:Bn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||wn(e)||xi(e);e=i?e:ht(e),Xn(e,t)&&(this._rawValue=e,this._value=i?e:Bn(e),this.dep.trigger())}}function pe(n){return Kt(n)?n.value:n}const mp={get:(n,e,t)=>e==="__v_raw"?n:pe(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return Kt(s)&&!Kt(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function Xd(n){return cs(n)?n:new Proxy(n,mp)}class gp{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new ac(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Pr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&St!==this)return Id(this,!0),!0}get value(){const e=this.dep.track();return Fd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function _p(n,e,t=!1){let i,s;return Je(n)?i=n:(i=n.get,s=n.set),new gp(i,s,t)}const Jr={},La=new WeakMap;let ts;function vp(n,e=!1,t=ts){if(t){let i=La.get(t);i||La.set(t,i=[]),i.push(n)}}function xp(n,e,t=Mt){const{immediate:i,deep:s,once:r,scheduler:a,augmentJob:o,call:l}=t,c=y=>s?y:wn(y)||s===!1||s===0?fi(y,1):fi(y);let u,d,h,p,v=!1,M=!1;if(Kt(n)?(d=()=>n.value,v=wn(n)):cs(n)?(d=()=>c(n),v=!0):$e(n)?(M=!0,v=n.some(y=>cs(y)||wn(y)),d=()=>n.map(y=>{if(Kt(y))return y.value;if(cs(y))return c(y);if(Je(y))return l?l(y,2):y()})):Je(n)?e?d=l?()=>l(n,2):n:d=()=>{if(h){_i();try{h()}finally{vi()}}const y=ts;ts=u;try{return l?l(n,3,[p]):n(p)}finally{ts=y}}:d=Kn,e&&s){const y=d,L=s===!0?1/0:s;d=()=>fi(y(),L)}const g=jh(),f=()=>{u.stop(),g&&g.active&&Ql(g.effects,u)};if(r&&e){const y=e;e=(...L)=>{const w=y(...L);return f(),w}}let C=M?new Array(n.length).fill(Jr):Jr;const R=y=>{if(!(!(u.flags&1)||!u.dirty&&!y))if(e){const L=u.run();if(y||s||v||(M?L.some((w,E)=>Xn(w,C[E])):Xn(L,C))){h&&h();const w=ts;ts=u;try{const E=[L,C===Jr?void 0:M&&C[0]===Jr?[]:C,p];C=L,l?l(e,3,E):e(...E)}finally{ts=w}}}else u.run()};return o&&o(R),u=new Dd(d),u.scheduler=a?()=>a(R,!1):R,p=y=>vp(y,!1,u),h=u.onStop=()=>{const y=La.get(u);if(y){if(l)l(y,4);else for(const L of y)L();La.delete(u)}},e?i?R(!0):C=u.run():a?a(R.bind(null,!0),!0):u.run(),f.pause=u.pause.bind(u),f.resume=u.resume.bind(u),f.stop=f,f}function fi(n,e=1/0,t){if(e<=0||!_t(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Kt(n))fi(n.value,e,t);else if($e(n))for(let i=0;i<n.length;i++)fi(n[i],e,t);else if(Sd(n)||Hs(n))n.forEach(i=>{fi(i,e,t)});else if(Ad(n)){for(const i in n)fi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&fi(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Gr(n,e,t,i){try{return i?n(...i):n()}catch(s){Za(s,e,t)}}function Cn(n,e,t,i){if(Je(n)){const s=Gr(n,e,t,i);return s&&Ed(s)&&s.catch(r=>{Za(r,e,t)}),s}if($e(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Cn(n[r],e,t,i));return s}}function Za(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Mt;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const u=o.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](n,l,c)===!1)return}o=o.parent}if(r){_i(),Gr(r,null,10,[n,l,c]),vi();return}}yp(n,t,s,i,a)}function yp(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const en=[];let Hn=-1;const Vs=[];let Pi=null,Ns=0;const $d=Promise.resolve();let Ia=null;function sl(n){const e=Ia||$d;return n?e.then(this?n.bind(this):n):e}function bp(n){let e=Hn+1,t=en.length;for(;e<t;){const i=e+t>>>1,s=en[i],r=Ir(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function uc(n){if(!(n.flags&1)){const e=Ir(n),t=en[en.length-1];!t||!(n.flags&2)&&e>=Ir(t)?en.push(n):en.splice(bp(e),0,n),n.flags|=1,jd()}}function jd(){Ia||(Ia=$d.then(Yd))}function Mp(n){$e(n)?Vs.push(...n):Pi&&n.id===-1?Pi.splice(Ns+1,0,n):n.flags&1||(Vs.push(n),n.flags|=1),jd()}function Uc(n,e,t=Hn+1){for(;t<en.length;t++){const i=en[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;en.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function qd(n){if(Vs.length){const e=[...new Set(Vs)].sort((t,i)=>Ir(t)-Ir(i));if(Vs.length=0,Pi){Pi.push(...e);return}for(Pi=e,Ns=0;Ns<Pi.length;Ns++){const t=Pi[Ns];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Pi=null,Ns=0}}const Ir=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Yd(n){try{for(Hn=0;Hn<en.length;Hn++){const e=en[Hn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Gr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Hn<en.length;Hn++){const e=en[Hn];e&&(e.flags&=-2)}Hn=-1,en.length=0,qd(),Ia=null,(en.length||Vs.length)&&Yd()}}let mn=null,Kd=null;function Ua(n){const e=mn;return mn=n,Kd=n&&n.type.__scopeId||null,e}function Ja(n,e=mn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&Oa(-1);const r=Ua(e),a=us.length;let o;try{o=n(...s)}finally{for(let l=us.length;l>a;l--)Cf();Ua(r),i._d&&Oa(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Zd(n,e){if(mn===null)return n;const t=io(mn),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,a,o,l=Mt]=e[s];r&&(Je(r)&&(r={mounted:r,updated:r}),r.deep&&fi(a),i.push({dir:r,instance:t,value:a,oldValue:void 0,arg:o,modifiers:l}))}return n}function Xi(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let a=0;a<s.length;a++){const o=s[a];r&&(o.oldValue=r[a].value);let l=o.dir[i];l&&(_i(),Cn(l,t,8,[n.el,o,n,e]),vi())}}function Sp(n,e){if(Yt){let t=Yt.provides;const i=Yt.parent&&Yt.parent.provides;i===t&&(t=Yt.provides=Object.create(i)),t[n]=e}}function Sa(n,e,t=!1){const i=Df();if(i||Gs){let s=Gs?Gs._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&Je(e)?e.call(i&&i.proxy):e}}const Ep=Symbol.for("v-scx"),Tp=()=>Sa(Ep);function $n(n,e,t){return Jd(n,e,t)}function Jd(n,e,t=Mt){const{immediate:i,deep:s,flush:r,once:a}=t,o=Ht({},t),l=e&&i||!e&&r!=="post";let c;if(Or){if(r==="sync"){const p=Tp();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=Kn,p.resume=Kn,p.pause=Kn,p}}const u=Yt;o.call=(p,v,M)=>Cn(p,u,v,M);let d=!1;r==="post"?o.scheduler=p=>{ln(p,u&&u.suspense)}:r!=="sync"&&(d=!0,o.scheduler=(p,v)=>{v?p():uc(p)}),o.augmentJob=p=>{e&&(p.flags|=4),d&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const h=xp(n,e,o);return Or&&(c?c.push(h):l&&h()),h}function Ap(n,e,t){const i=this.proxy,s=wt(n)?n.includes(".")?Qd(i,n):()=>i[n]:n.bind(i,i);let r;Je(e)?r=e:(r=e.handler,t=e);const a=Wr(this),o=Jd(s,r.bind(i),t);return a(),o}function Qd(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const wp=Symbol("_vte"),ef=n=>n.__isTeleport,En=Symbol("_leaveCb"),dr=Symbol("_enterCb");function Cp(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return sr(()=>{n.isMounted=!0}),gs(()=>{n.isUnmounting=!0}),n}const bn=[Function,Array],tf={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:bn,onEnter:bn,onAfterEnter:bn,onEnterCancelled:bn,onBeforeLeave:bn,onLeave:bn,onAfterLeave:bn,onLeaveCancelled:bn,onBeforeAppear:bn,onAppear:bn,onAfterAppear:bn,onAppearCancelled:bn},nf=n=>{const e=n.subTree;return e.component?nf(e.component):e},Rp={name:"BaseTransition",props:tf,setup(n,{slots:e}){const t=Df(),i=Cp();return()=>{const s=e.default&&af(e.default(),!0),r=s&&s.length?sf(s):t.subTree?Et():void 0;if(!r)return;const a=ht(n),{mode:o}=a;if(i.isLeaving)return ho(r);const l=Nc(r);if(!l)return ho(r);let c=rl(l,a,i,t,d=>c=d);l.type!==tn&&Ur(l,c);let u=t.subTree&&Nc(t.subTree);if(u&&u.type!==tn&&!is(u,l)&&nf(t).type!==tn){let d=rl(u,a,i,t);if(Ur(u,d),o==="out-in"&&l.type!==tn)return i.isLeaving=!0,d.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete d.afterLeave,u=void 0},ho(r);o==="in-out"&&l.type!==tn?d.delayLeave=(h,p,v)=>{const M=rf(i,u);M[String(u.key)]=u,h[En]=()=>{p(),h[En]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{v(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function sf(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==tn){e=t;break}}return e}const Pp=Rp;function rf(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function rl(n,e,t,i,s){const{appear:r,mode:a,persisted:o=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:h,onLeave:p,onAfterLeave:v,onLeaveCancelled:M,onBeforeAppear:g,onAppear:f,onAfterAppear:C,onAppearCancelled:R}=e,y=String(n.key),L=rf(t,n),w=(S,b)=>{S&&Cn(S,i,9,b)},E=(S,b)=>{const I=b[1];w(S,b),$e(S)?S.every(U=>U.length<=1)&&I():S.length<=1&&I()},D={mode:a,persisted:o,beforeEnter(S){let b=l;if(!t.isMounted)if(r)b=g||l;else return;S[En]&&S[En](!0);const I=L[y];I&&is(n,I)&&I.el[En]&&I.el[En](),w(b,[S])},enter(S){if(L[y]===n)return;let b=c,I=u,U=d;if(!t.isMounted)if(r)b=f||c,I=C||u,U=R||d;else return;let N=!1;S[dr]=ne=>{N||(N=!0,ne?w(U,[S]):w(I,[S]),D.delayedLeave&&D.delayedLeave(),S[dr]=void 0)};const W=S[dr].bind(null,!1);b?E(b,[S,W]):W()},leave(S,b){const I=String(n.key);if(S[dr]&&S[dr](!0),t.isUnmounting)return b();w(h,[S]);let U=!1;S[En]=W=>{U||(U=!0,b(),W?w(M,[S]):w(v,[S]),S[En]=void 0,L[I]===n&&delete L[I])};const N=S[En].bind(null,!1);L[I]=n,p?E(p,[S,N]):N()},clone(S){const b=rl(S,e,t,i,s);return s&&s(b),b}};return D}function ho(n){if(Qa(n))return n=Bi(n),n.children=null,n}function Nc(n){if(!Qa(n))return ef(n.type)&&n.children?sf(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&Je(t.default))return t.default()}}function Ur(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Ur(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function af(n,e=!1,t){let i=[],s=0;for(let r=0;r<n.length;r++){let a=n[r];const o=t==null?a.key:String(t)+String(a.key!=null?a.key:r);a.type===it?(a.patchFlag&128&&s++,i=i.concat(af(a.children,e,o))):(e||a.type!==tn)&&i.push(o!=null?Bi(a,{key:o}):a)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function of(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Fc(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const Na=new WeakMap;function wr(n,e,t,i,s=!1){if($e(n)){n.forEach((M,g)=>wr(M,e&&($e(e)?e[g]:e),t,i,s));return}if(Cr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&wr(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?io(i.component):i.el,a=s?null:r,{i:o,r:l}=n,c=e&&e.r,u=o.refs===Mt?o.refs={}:o.refs,d=o.setupState,h=ht(d),p=d===Mt?Md:M=>Fc(u,M)?!1:gt(h,M),v=(M,g)=>!(g&&Fc(u,g));if(c!=null&&c!==l){if(Oc(e),wt(c))u[c]=null,p(c)&&(d[c]=null);else if(Kt(c)){const M=e;v(c,M.k)&&(c.value=null),M.k&&(u[M.k]=null)}}if(Je(l))Gr(l,o,12,[a,u]);else{const M=wt(l),g=Kt(l);if(M||g){const f=()=>{if(n.f){const C=M?p(l)?d[l]:u[l]:v()||!n.k?l.value:u[n.k];if(s)$e(C)&&Ql(C,r);else if($e(C))C.includes(r)||C.push(r);else if(M)u[l]=[r],p(l)&&(d[l]=u[l]);else{const R=[r];v(l,n.k)&&(l.value=R),n.k&&(u[n.k]=R)}}else M?(u[l]=a,p(l)&&(d[l]=a)):g&&(v(l,n.k)&&(l.value=a),n.k&&(u[n.k]=a))};if(a){const C=()=>{f(),Na.delete(n)};C.id=-1,Na.set(n,C),ln(C,t)}else Oc(n),f()}}}function Oc(n){const e=Na.get(n);e&&(e.flags|=8,Na.delete(n))}Ya().requestIdleCallback;Ya().cancelIdleCallback;const Cr=n=>!!n.type.__asyncLoader,Qa=n=>n.type.__isKeepAlive;function Dp(n,e){lf(n,"a",e)}function Lp(n,e){lf(n,"da",e)}function lf(n,e,t=Yt){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(eo(e,i,t),t){let s=t.parent;for(;s&&s.parent;)Qa(s.parent.vnode)&&Ip(i,e,t,s),s=s.parent}}function Ip(n,e,t,i){const s=eo(e,n,i,!0);cf(()=>{Ql(i[e],s)},t)}function eo(n,e,t=Yt,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...a)=>{_i();const o=Wr(t),l=Cn(e,t,n,a);return o(),vi(),l});return i?s.unshift(r):s.push(r),r}}const bi=n=>(e,t=Yt)=>{(!Or||n==="sp")&&eo(n,(...i)=>e(...i),t)},Up=bi("bm"),sr=bi("m"),Np=bi("bu"),Fp=bi("u"),gs=bi("bum"),cf=bi("um"),Op=bi("sp"),Bp=bi("rtg"),kp=bi("rtc");function zp(n,e=Yt){eo("ec",n,e)}const Hp="components",uf=Symbol.for("v-ndc");function Nr(n){return wt(n)?Vp(Hp,n,!1)||n:n||uf}function Vp(n,e,t=!0,i=!1){const s=mn||Yt;if(s){const r=s.type;{const o=Tm(r,!1);if(o&&(o===e||o===nn(e)||o===qa(nn(e))))return r}const a=Bc(s[n]||r[n],e)||Bc(s.appContext[n],e);return!a&&i?r:a}}function Bc(n,e){return n&&(n[e]||n[nn(e)]||n[qa(nn(e))])}function vt(n,e,t,i){let s;const r=t,a=$e(n);if(a||wt(n)){const o=a&&cs(n);let l=!1,c=!1;o&&(l=!wn(n),c=xi(n),n=Ka(n)),s=new Array(n.length);for(let u=0,d=n.length;u<d;u++)s[u]=e(l?c?qs(Bn(n[u])):Bn(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let o=0;o<n;o++)s[o]=e(o+1,o,void 0,r)}else if(_t(n))if(n[Symbol.iterator])s=Array.from(n,(o,l)=>e(o,l,void 0,r));else{const o=Object.keys(n);s=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}const al=n=>n?Lf(n)?io(n):al(n.parent):null,Rr=Ht(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>al(n.parent),$root:n=>al(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>ff(n),$forceUpdate:n=>n.f||(n.f=()=>{uc(n.update)}),$nextTick:n=>n.n||(n.n=sl.bind(n.proxy)),$watch:n=>Ap.bind(n)}),po=(n,e)=>n!==Mt&&!n.__isScriptSetup&&gt(n,e),Gp={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:a,type:o,appContext:l}=n;if(e[0]!=="$"){const h=a[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(po(i,e))return a[e]=1,i[e];if(s!==Mt&&gt(s,e))return a[e]=2,s[e];if(gt(r,e))return a[e]=3,r[e];if(t!==Mt&&gt(t,e))return a[e]=4,t[e];ol&&(a[e]=0)}}const c=Rr[e];let u,d;if(c)return e==="$attrs"&&qt(n.attrs,"get",""),c(n);if((u=o.__cssModules)&&(u=u[e]))return u;if(t!==Mt&&gt(t,e))return a[e]=4,t[e];if(d=l.config.globalProperties,gt(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return po(s,e)?(s[e]=t,!0):i!==Mt&&gt(i,e)?(i[e]=t,!0):gt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:a}},o){let l;return!!(t[o]||n!==Mt&&o[0]!=="$"&&gt(n,o)||po(e,o)||gt(r,o)||gt(i,o)||gt(Rr,o)||gt(s.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:gt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function kc(n){return $e(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let ol=!0;function Wp(n){const e=ff(n),t=n.proxy,i=n.ctx;ol=!1,e.beforeCreate&&zc(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:d,mounted:h,beforeUpdate:p,updated:v,activated:M,deactivated:g,beforeDestroy:f,beforeUnmount:C,destroyed:R,unmounted:y,render:L,renderTracked:w,renderTriggered:E,errorCaptured:D,serverPrefetch:S,expose:b,inheritAttrs:I,components:U,directives:N,filters:W}=e;if(c&&Xp(c,i,null),a)for(const se in a){const z=a[se];Je(z)&&(i[se]=z.bind(t))}if(s){const se=s.call(t,t);_t(se)&&(n.data=Lr(se))}if(ol=!0,r)for(const se in r){const z=r[se],me=Je(z)?z.bind(t,t):Je(z.get)?z.get.bind(t,t):Kn,Me=!Je(z)&&Je(z.set)?z.set.bind(t):Kn,be=yt({get:me,set:Me});Object.defineProperty(i,se,{enumerable:!0,configurable:!0,get:()=>be.value,set:Fe=>be.value=Fe})}if(o)for(const se in o)df(o[se],i,t,se);if(l){const se=Je(l)?l.call(t):l;Reflect.ownKeys(se).forEach(z=>{Sp(z,se[z])})}u&&zc(u,n,"c");function Y(se,z){$e(z)?z.forEach(me=>se(me.bind(t))):z&&se(z.bind(t))}if(Y(Up,d),Y(sr,h),Y(Np,p),Y(Fp,v),Y(Dp,M),Y(Lp,g),Y(zp,D),Y(kp,w),Y(Bp,E),Y(gs,C),Y(cf,y),Y(Op,S),$e(b))if(b.length){const se=n.exposed||(n.exposed={});b.forEach(z=>{Object.defineProperty(se,z,{get:()=>t[z],set:me=>t[z]=me,enumerable:!0})})}else n.exposed||(n.exposed={});L&&n.render===Kn&&(n.render=L),I!=null&&(n.inheritAttrs=I),U&&(n.components=U),N&&(n.directives=N),S&&of(n)}function Xp(n,e,t=Kn){$e(n)&&(n=ll(n));for(const i in n){const s=n[i];let r;_t(s)?"default"in s?r=Sa(s.from||i,s.default,!0):r=Sa(s.from||i):r=Sa(s),Kt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:a=>r.value=a}):e[i]=r}}function zc(n,e,t){Cn($e(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function df(n,e,t,i){let s=i.includes(".")?Qd(t,i):()=>t[i];if(wt(n)){const r=e[n];Je(r)&&$n(s,r)}else if(Je(n))$n(s,n.bind(t));else if(_t(n))if($e(n))n.forEach(r=>df(r,e,t,i));else{const r=Je(n.handler)?n.handler.bind(t):e[n.handler];Je(r)&&$n(s,r,n)}}function ff(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:a}}=n.appContext,o=r.get(e);let l;return o?l=o:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>Fa(l,c,a,!0)),Fa(l,e,a)),_t(e)&&r.set(e,l),l}function Fa(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&Fa(n,r,t,!0),s&&s.forEach(a=>Fa(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=$p[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const $p={data:Hc,props:Vc,emits:Vc,methods:yr,computed:yr,beforeCreate:Jt,created:Jt,beforeMount:Jt,mounted:Jt,beforeUpdate:Jt,updated:Jt,beforeDestroy:Jt,beforeUnmount:Jt,destroyed:Jt,unmounted:Jt,activated:Jt,deactivated:Jt,errorCaptured:Jt,serverPrefetch:Jt,components:yr,directives:yr,watch:qp,provide:Hc,inject:jp};function Hc(n,e){return e?n?function(){return Ht(Je(n)?n.call(this,this):n,Je(e)?e.call(this,this):e)}:e:n}function jp(n,e){return yr(ll(n),ll(e))}function ll(n){if($e(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Jt(n,e){return n?[...new Set([].concat(n,e))]:e}function yr(n,e){return n?Ht(Object.create(null),n,e):e}function Vc(n,e){return n?$e(n)&&$e(e)?[...new Set([...n,...e])]:Ht(Object.create(null),kc(n),kc(e??{})):e}function qp(n,e){if(!n)return e;if(!e)return n;const t=Ht(Object.create(null),n);for(const i in e)t[i]=Jt(n[i],e[i]);return t}function hf(){return{app:null,config:{isNativeTag:Md,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Yp=0;function Kp(n,e){return function(i,s=null){Je(i)||(i=Ht({},i)),s!=null&&!_t(s)&&(s=null);const r=hf(),a=new WeakSet,o=[];let l=!1;const c=r.app={_uid:Yp++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:wm,get config(){return r.config},set config(u){},use(u,...d){return a.has(u)||(u&&Je(u.install)?(a.add(u),u.install(c,...d)):Je(u)&&(a.add(u),u(c,...d))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,d){return d?(r.components[u]=d,c):r.components[u]},directive(u,d){return d?(r.directives[u]=d,c):r.directives[u]},mount(u,d,h){if(!l){const p=c._ceVNode||Ce(i,s);return p.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),n(p,u,h),l=!0,c._container=u,u.__vue_app__=c,io(p.component)}},onUnmount(u){o.push(u)},unmount(){l&&(Cn(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,d){return r.provides[u]=d,c},runWithContext(u){const d=Gs;Gs=c;try{return u()}finally{Gs=d}}};return c}}let Gs=null;const Zp=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${nn(e)}Modifiers`]||n[`${Hi(e)}Modifiers`];function Jp(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Mt;let s=t;const r=e.startsWith("update:"),a=r&&Zp(i,e.slice(7));a&&(a.trim&&(s=t.map(u=>wt(u)?u.trim():u)),a.number&&(s=t.map(tc)));let o,l=i[o=oo(e)]||i[o=oo(nn(e))];!l&&r&&(l=i[o=oo(Hi(e))]),l&&Cn(l,n,6,s);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,Cn(c,n,6,s)}}const Qp=new WeakMap;function pf(n,e,t=!1){const i=t?Qp:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let a={},o=!1;if(!Je(n)){const l=c=>{const u=pf(c,e,!0);u&&(o=!0,Ht(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!o?(_t(n)&&i.set(n,null),null):($e(r)?r.forEach(l=>a[l]=null):Ht(a,r),_t(n)&&i.set(n,a),a)}function to(n,e){return!n||!Xa(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),gt(n,e[0].toLowerCase()+e.slice(1))||gt(n,Hi(e))||gt(n,e))}function Gc(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:d,data:h,setupState:p,ctx:v,inheritAttrs:M}=n,g=Ua(n);let f,C;try{if(t.shapeFlag&4){const y=s||i,L=y;f=Gn(c.call(L,y,u,d,p,h,v)),C=o}else{const y=e;f=Gn(y.length>1?y(d,{attrs:o,slots:a,emit:l}):y(d,null)),C=e.props?o:em(o)}}catch(y){us.length=0,Za(y,n,1),f=Ce(tn)}let R=f;if(C&&M!==!1){const y=Object.keys(C),{shapeFlag:L}=R;y.length&&L&7&&(r&&y.some($a)&&(C=tm(C,r)),R=Bi(R,C,!1,!0))}return t.dirs&&(R=Bi(R,null,!1,!0),R.dirs=R.dirs?R.dirs.concat(t.dirs):t.dirs),t.transition&&Ur(R,t.transition),f=R,Ua(g),f}const em=n=>{let e;for(const t in n)(t==="class"||t==="style"||Xa(t))&&((e||(e={}))[t]=n[t]);return e},tm=(n,e)=>{const t={};for(const i in n)(!$a(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function nm(n,e,t){const{props:i,children:s,component:r}=n,{props:a,children:o,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Wc(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(mf(a,i,h)&&!to(c,h))return!0}}}else return(s||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?Wc(i,a,c):!0:!!a;return!1}function Wc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(mf(e,n,r)&&!to(t,r))return!0}return!1}function mf(n,e,t){const i=n[t],s=e[t];return t==="style"&&_t(i)&&_t(s)?!nc(i,s):i!==s}function im({vnode:n,parent:e,suspense:t},i){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const gf={},_f=()=>Object.create(gf),vf=n=>Object.getPrototypeOf(n)===gf;function sm(n,e,t,i=!1){const s={},r=_f();n.propsDefaults=Object.create(null),xf(n,e,s,r);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=i?s:dp(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function rm(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:a}}=n,o=ht(s),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];if(to(n.emitsOptions,h))continue;const p=e[h];if(l)if(gt(r,h))p!==r[h]&&(r[h]=p,c=!0);else{const v=nn(h);s[v]=cl(l,o,v,p,n,!1)}else p!==r[h]&&(r[h]=p,c=!0)}}}else{xf(n,e,s,r)&&(c=!0);let u;for(const d in o)(!e||!gt(e,d)&&((u=Hi(d))===d||!gt(e,u)))&&(l?t&&(t[d]!==void 0||t[u]!==void 0)&&(s[d]=cl(l,o,d,void 0,n,!0)):delete s[d]);if(r!==o)for(const d in r)(!e||!gt(e,d))&&(delete r[d],c=!0)}c&&di(n.attrs,"set","")}function xf(n,e,t,i){const[s,r]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(Er(l))continue;const c=e[l];let u;s&&gt(s,u=nn(l))?!r||!r.includes(u)?t[u]=c:(o||(o={}))[u]=c:to(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(r){const l=ht(t),c=o||Mt;for(let u=0;u<r.length;u++){const d=r[u];t[d]=cl(s,l,d,c[d],n,!gt(c,d))}}return a}function cl(n,e,t,i,s,r){const a=n[t];if(a!=null){const o=gt(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&Je(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=Wr(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}a[0]&&(r&&!o?i=!1:a[1]&&(i===""||i===Hi(t))&&(i=!0))}return i}const am=new WeakMap;function yf(n,e,t=!1){const i=t?am:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,a={},o=[];let l=!1;if(!Je(n)){const u=d=>{l=!0;const[h,p]=yf(d,e,!0);Ht(a,h),p&&o.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return _t(n)&&i.set(n,zs),zs;if($e(r))for(let u=0;u<r.length;u++){const d=nn(r[u]);Xc(d)&&(a[d]=Mt)}else if(r)for(const u in r){const d=nn(u);if(Xc(d)){const h=r[u],p=a[d]=$e(h)||Je(h)?{type:h}:Ht({},h),v=p.type;let M=!1,g=!0;if($e(v))for(let f=0;f<v.length;++f){const C=v[f],R=Je(C)&&C.name;if(R==="Boolean"){M=!0;break}else R==="String"&&(g=!1)}else M=Je(v)&&v.name==="Boolean";p[0]=M,p[1]=g,(M||gt(p,"default"))&&o.push(d)}}const c=[a,o];return _t(n)&&i.set(n,c),c}function Xc(n){return n[0]!=="$"&&!Er(n)}const dc=n=>n==="_"||n==="_ctx"||n==="$stable",fc=n=>$e(n)?n.map(Gn):[Gn(n)],om=(n,e,t)=>{if(e._n)return e;const i=Ja((...s)=>fc(e(...s)),t);return i._c=!1,i},bf=(n,e,t)=>{const i=n._ctx;for(const s in n){if(dc(s))continue;const r=n[s];if(Je(r))e[s]=om(s,r,i);else if(r!=null){const a=fc(r);e[s]=()=>a}}},Mf=(n,e)=>{const t=fc(e);n.slots.default=()=>t},Sf=(n,e,t)=>{for(const i in e)(t||!dc(i))&&(n[i]=e[i])},lm=(n,e,t)=>{const i=n.slots=_f();if(n.vnode.shapeFlag&32){const s=e._;s?(Sf(i,e,t),t&&wd(i,"_",s,!0)):bf(e,i)}else e&&Mf(n,e)},cm=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,a=Mt;if(i.shapeFlag&32){const o=e._;o?t&&o===1?r=!1:Sf(s,e,t):(r=!e.$stable,bf(e,s)),a=e}else e&&(Mf(n,e),a={default:1});if(r)for(const o in s)!dc(o)&&a[o]==null&&delete s[o]},ln=pm;function um(n){return dm(n)}function dm(n,e){const t=Ya();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:h,setScopeId:p=Kn,insertStaticContent:v}=n,M=(P,O,T,oe=null,ee=null,J=null,te=void 0,ue=null,Q=!!O.dynamicChildren)=>{if(P===O)return;P&&!is(P,O)&&(oe=Ee(P),Fe(P,ee,J,!0),P=null),O.patchFlag===-2&&(Q=!1,O.dynamicChildren=null);const{type:x,ref:_,shapeFlag:F}=O;switch(x){case no:g(P,O,T,oe);break;case tn:f(P,O,T,oe);break;case go:P==null&&C(O,T,oe,te);break;case it:U(P,O,T,oe,ee,J,te,ue,Q);break;default:F&1?L(P,O,T,oe,ee,J,te,ue,Q):F&6?N(P,O,T,oe,ee,J,te,ue,Q):(F&64||F&128)&&x.process(P,O,T,oe,ee,J,te,ue,Q,Ye)}_!=null&&ee?wr(_,P&&P.ref,J,O||P,!O):_==null&&P&&P.ref!=null&&wr(P.ref,null,J,P,!0)},g=(P,O,T,oe)=>{if(P==null)i(O.el=o(O.children),T,oe);else{const ee=O.el=P.el;O.children!==P.children&&c(ee,O.children)}},f=(P,O,T,oe)=>{P==null?i(O.el=l(O.children||""),T,oe):O.el=P.el},C=(P,O,T,oe)=>{[P.el,P.anchor]=v(P.children,O,T,oe,P.el,P.anchor)},R=({el:P,anchor:O},T,oe)=>{let ee;for(;P&&P!==O;)ee=h(P),i(P,T,oe),P=ee;i(O,T,oe)},y=({el:P,anchor:O})=>{let T;for(;P&&P!==O;)T=h(P),s(P),P=T;s(O)},L=(P,O,T,oe,ee,J,te,ue,Q)=>{if(O.type==="svg"?te="svg":O.type==="math"&&(te="mathml"),P==null)w(O,T,oe,ee,J,te,ue,Q);else{const x=P.el&&P.el._isVueCE?P.el:null;try{x&&x._beginPatch(),S(P,O,ee,J,te,ue,Q)}finally{x&&x._endPatch()}}},w=(P,O,T,oe,ee,J,te,ue)=>{let Q,x;const{props:_,shapeFlag:F,transition:G,dirs:j}=P;if(Q=P.el=a(P.type,J,_&&_.is,_),F&8?u(Q,P.children):F&16&&D(P.children,Q,null,oe,ee,mo(P,J),te,ue),j&&Xi(P,null,oe,"created"),E(Q,P,P.scopeId,te,oe),_){for(const _e in _)_e!=="value"&&!Er(_e)&&r(Q,_e,null,_[_e],J,oe);"value"in _&&r(Q,"value",null,_.value,J),(x=_.onVnodeBeforeMount)&&zn(x,oe,P)}j&&Xi(P,null,oe,"beforeMount");const $=fm(ee,G);$&&G.beforeEnter(Q),i(Q,O,T),((x=_&&_.onVnodeMounted)||$||j)&&ln(()=>{try{x&&zn(x,oe,P),$&&G.enter(Q),j&&Xi(P,null,oe,"mounted")}finally{}},ee)},E=(P,O,T,oe,ee)=>{if(T&&p(P,T),oe)for(let J=0;J<oe.length;J++)p(P,oe[J]);if(ee){let J=ee.subTree;if(O===J||wf(J.type)&&(J.ssContent===O||J.ssFallback===O)){const te=ee.vnode;E(P,te,te.scopeId,te.slotScopeIds,ee.parent)}}},D=(P,O,T,oe,ee,J,te,ue,Q=0)=>{for(let x=Q;x<P.length;x++){const _=P[x]=ue?ui(P[x]):Gn(P[x]);M(null,_,O,T,oe,ee,J,te,ue)}},S=(P,O,T,oe,ee,J,te)=>{const ue=O.el=P.el;let{patchFlag:Q,dynamicChildren:x,dirs:_}=O;Q|=P.patchFlag&16;const F=P.props||Mt,G=O.props||Mt;let j;if(T&&$i(T,!1),(j=G.onVnodeBeforeUpdate)&&zn(j,T,O,P),_&&Xi(O,P,T,"beforeUpdate"),T&&$i(T,!0),x&&(!P.dynamicChildren||P.dynamicChildren.length!==x.length)&&(Q=0,te=!1,x=null),(F.innerHTML&&G.innerHTML==null||F.textContent&&G.textContent==null)&&u(ue,""),x?b(P.dynamicChildren,x,ue,T,oe,mo(O,ee),J):te||z(P,O,ue,null,T,oe,mo(O,ee),J,!1),Q>0){if(Q&16)I(ue,F,G,T,ee);else if(Q&2&&F.class!==G.class&&r(ue,"class",null,G.class,ee),Q&4&&r(ue,"style",F.style,G.style,ee),Q&8){const $=O.dynamicProps;for(let _e=0;_e<$.length;_e++){const de=$[_e],xe=F[de],ze=G[de];(ze!==xe||de==="value")&&r(ue,de,xe,ze,ee,T)}}Q&1&&P.children!==O.children&&u(ue,O.children)}else!te&&x==null&&I(ue,F,G,T,ee);((j=G.onVnodeUpdated)||_)&&ln(()=>{j&&zn(j,T,O,P),_&&Xi(O,P,T,"updated")},oe)},b=(P,O,T,oe,ee,J,te)=>{for(let ue=0;ue<O.length;ue++){const Q=P[ue],x=O[ue],_=Q.el&&(Q.type===it||!is(Q,x)||Q.shapeFlag&198)?d(Q.el):T;M(Q,x,_,null,oe,ee,J,te,!0)}},I=(P,O,T,oe,ee)=>{if(O!==T){if(O!==Mt)for(const J in O)!Er(J)&&!(J in T)&&r(P,J,O[J],null,ee,oe);for(const J in T){if(Er(J))continue;const te=T[J],ue=O[J];te!==ue&&J!=="value"&&r(P,J,ue,te,ee,oe)}"value"in T&&r(P,"value",O.value,T.value,ee)}},U=(P,O,T,oe,ee,J,te,ue,Q)=>{const x=O.el=P?P.el:o(""),_=O.anchor=P?P.anchor:o("");let{patchFlag:F,dynamicChildren:G,slotScopeIds:j}=O;j&&(ue=ue?ue.concat(j):j),P==null?(i(x,T,oe),i(_,T,oe),D(O.children||[],T,_,ee,J,te,ue,Q)):F>0&&F&64&&G&&P.dynamicChildren&&P.dynamicChildren.length===G.length?(b(P.dynamicChildren,G,T,ee,J,te,ue),(O.key!=null||ee&&O===ee.subTree)&&Ef(P,O,!0)):z(P,O,T,_,ee,J,te,ue,Q)},N=(P,O,T,oe,ee,J,te,ue,Q)=>{O.slotScopeIds=ue,P==null?O.shapeFlag&512?ee.ctx.activate(O,T,oe,te,Q):W(O,T,oe,ee,J,te,Q):ne(P,O,Q)},W=(P,O,T,oe,ee,J,te)=>{const ue=P.component=ym(P,oe,ee);if(Qa(P)&&(ue.ctx.renderer=Ye),bm(ue,!1,te),ue.asyncDep){if(ee&&ee.registerDep(ue,Y,te),!P.el){const Q=ue.subTree=Ce(tn);f(null,Q,O,T),P.placeholder=Q.el}}else Y(ue,P,O,T,ee,J,te)},ne=(P,O,T)=>{const oe=O.component=P.component;if(nm(P,O,T))if(oe.asyncDep&&!oe.asyncResolved){se(oe,O,T);return}else oe.next=O,oe.update();else O.el=P.el,oe.vnode=O},Y=(P,O,T,oe,ee,J,te)=>{const ue=()=>{if(P.isMounted){let{next:F,bu:G,u:j,parent:$,vnode:_e}=P;{const Te=Tf(P);if(Te){F&&(F.el=_e.el,se(P,F,te)),Te.asyncDep.then(()=>{ln(()=>{P.isUnmounted||x()},ee)});return}}let de=F,xe;$i(P,!1),F?(F.el=_e.el,se(P,F,te)):F=_e,G&&Ma(G),(xe=F.props&&F.props.onVnodeBeforeUpdate)&&zn(xe,$,F,_e),$i(P,!0);const ze=Gc(P),fe=P.subTree;P.subTree=ze,M(fe,ze,d(fe.el),Ee(fe),P,ee,J),F.el=ze.el,de===null&&im(P,ze.el),j&&ln(j,ee),(xe=F.props&&F.props.onVnodeUpdated)&&ln(()=>zn(xe,$,F,_e),ee)}else{let F;const{el:G,props:j}=O,{bm:$,m:_e,parent:de,root:xe,type:ze}=P,fe=Cr(O);$i(P,!1),$&&Ma($),!fe&&(F=j&&j.onVnodeBeforeMount)&&zn(F,de,O),$i(P,!0);{xe.ce&&xe.ce._hasShadowRoot()&&xe.ce._injectChildStyle(ze,P.parent?P.parent.type:void 0);const Te=P.subTree=Gc(P);M(null,Te,T,oe,P,ee,J),O.el=Te.el}if(_e&&ln(_e,ee),!fe&&(F=j&&j.onVnodeMounted)){const Te=O;ln(()=>zn(F,de,Te),ee)}(O.shapeFlag&256||de&&Cr(de.vnode)&&de.vnode.shapeFlag&256)&&P.a&&ln(P.a,ee),P.isMounted=!0,O=T=oe=null}};P.scope.on();const Q=P.effect=new Dd(ue);P.scope.off();const x=P.update=Q.run.bind(Q),_=P.job=Q.runIfDirty.bind(Q);_.i=P,_.id=P.uid,Q.scheduler=()=>uc(_),$i(P,!0),x()},se=(P,O,T)=>{O.component=P;const oe=P.vnode.props;P.vnode=O,P.next=null,rm(P,O.props,oe,T),cm(P,O.children,T),_i(),Uc(P),vi()},z=(P,O,T,oe,ee,J,te,ue,Q=!1)=>{const x=P&&P.children,_=P?P.shapeFlag:0,F=O.children,{patchFlag:G,shapeFlag:j}=O;if(G>0){if(G&128){Me(x,F,T,oe,ee,J,te,ue,Q);return}else if(G&256){me(x,F,T,oe,ee,J,te,ue,Q);return}}j&8?(_&16&&Le(x,ee,J),F!==x&&u(T,F)):_&16?j&16?Me(x,F,T,oe,ee,J,te,ue,Q):Le(x,ee,J,!0):(_&8&&u(T,""),j&16&&D(F,T,oe,ee,J,te,ue,Q))},me=(P,O,T,oe,ee,J,te,ue,Q)=>{P=P||zs,O=O||zs;const x=P.length,_=O.length,F=Math.min(x,_);let G;for(G=0;G<F;G++){const j=O[G]=Q?ui(O[G]):Gn(O[G]);M(P[G],j,T,null,ee,J,te,ue,Q)}x>_?Le(P,ee,J,!0,!1,F):D(O,T,oe,ee,J,te,ue,Q,F)},Me=(P,O,T,oe,ee,J,te,ue,Q)=>{let x=0;const _=O.length;let F=P.length-1,G=_-1;for(;x<=F&&x<=G;){const j=P[x],$=O[x]=Q?ui(O[x]):Gn(O[x]);if(is(j,$))M(j,$,T,null,ee,J,te,ue,Q);else break;x++}for(;x<=F&&x<=G;){const j=P[F],$=O[G]=Q?ui(O[G]):Gn(O[G]);if(is(j,$))M(j,$,T,null,ee,J,te,ue,Q);else break;F--,G--}if(x>F){if(x<=G){const j=G+1,$=j<_?O[j].el:oe;for(;x<=G;)M(null,O[x]=Q?ui(O[x]):Gn(O[x]),T,$,ee,J,te,ue,Q),x++}}else if(x>G)for(;x<=F;)Fe(P[x],ee,J,!0),x++;else{const j=x,$=x,_e=new Map;for(x=$;x<=G;x++){const Se=O[x]=Q?ui(O[x]):Gn(O[x]);Se.key!=null&&_e.set(Se.key,x)}let de,xe=0;const ze=G-$+1;let fe=!1,Te=0;const Oe=new Array(ze);for(x=0;x<ze;x++)Oe[x]=0;for(x=j;x<=F;x++){const Se=P[x];if(xe>=ze){Fe(Se,ee,J,!0);continue}let qe;if(Se.key!=null)qe=_e.get(Se.key);else for(de=$;de<=G;de++)if(Oe[de-$]===0&&is(Se,O[de])){qe=de;break}qe===void 0?Fe(Se,ee,J,!0):(Oe[qe-$]=x+1,qe>=Te?Te=qe:fe=!0,M(Se,O[qe],T,null,ee,J,te,ue,Q),xe++)}const Ve=fe?hm(Oe):zs;for(de=Ve.length-1,x=ze-1;x>=0;x--){const Se=$+x,qe=O[Se],We=O[Se+1],lt=Se+1<_?We.el||Af(We):oe;Oe[x]===0?M(null,qe,T,lt,ee,J,te,ue,Q):fe&&(de<0||x!==Ve[de]?be(qe,T,lt,2):de--)}}},be=(P,O,T,oe,ee=null)=>{const{el:J,type:te,transition:ue,children:Q,shapeFlag:x}=P;if(x&6){be(P.component.subTree,O,T,oe);return}if(x&128){P.suspense.move(O,T,oe);return}if(x&64){te.move(P,O,T,Ye);return}if(te===it){i(J,O,T);for(let F=0;F<Q.length;F++)be(Q[F],O,T,oe);i(P.anchor,O,T);return}if(te===go){R(P,O,T);return}if(oe!==2&&x&1&&ue)if(oe===0)ue.persisted&&!J[En]?i(J,O,T):(ue.beforeEnter(J),i(J,O,T),ln(()=>ue.enter(J),ee));else{const{leave:F,delayLeave:G,afterLeave:j}=ue,$=()=>{P.ctx.isUnmounted?s(J):i(J,O,T)},_e=()=>{const de=J._isLeaving||!!J[En];J._isLeaving&&J[En](!0),ue.persisted&&!de?$():F(J,()=>{$(),j&&j()})};G?G(J,$,_e):_e()}else i(J,O,T)},Fe=(P,O,T,oe=!1,ee=!1)=>{const{type:J,props:te,ref:ue,children:Q,dynamicChildren:x,shapeFlag:_,patchFlag:F,dirs:G,cacheIndex:j,memo:$}=P;if(F===-2&&(ee=!1),ue!=null&&(_i(),wr(ue,null,T,P,!0),vi()),j!=null&&(O.renderCache[j]=void 0),_&256){O.ctx.deactivate(P);return}const _e=_&1&&G,de=!Cr(P);let xe;if(de&&(xe=te&&te.onVnodeBeforeUnmount)&&zn(xe,O,P),_&6)ve(P.component,T,oe);else{if(_&128){P.suspense.unmount(T,oe);return}_e&&Xi(P,null,O,"beforeUnmount"),_&64?P.type.remove(P,O,T,Ye,oe):x&&!x.hasOnce&&(J!==it||F>0&&F&64)?Le(x,O,T,!1,!0):(J===it&&F&384||!ee&&_&16)&&Le(Q,O,T),oe&&je(P)}const ze=$!=null&&j==null;(de&&(xe=te&&te.onVnodeUnmounted)||_e||ze)&&ln(()=>{xe&&zn(xe,O,P),_e&&Xi(P,null,O,"unmounted"),ze&&(P.el=null)},T)},je=P=>{const{type:O,el:T,anchor:oe,transition:ee}=P;if(O===it){re(T,oe);return}if(O===go){y(P);return}const J=()=>{s(T),ee&&!ee.persisted&&ee.afterLeave&&ee.afterLeave()};if(P.shapeFlag&1&&ee&&!ee.persisted){const{leave:te,delayLeave:ue}=ee,Q=()=>te(T,J);ue?ue(P.el,J,Q):Q()}else J()},re=(P,O)=>{let T;for(;P!==O;)T=h(P),s(P),P=T;s(O)},ve=(P,O,T)=>{const{bum:oe,scope:ee,job:J,subTree:te,um:ue,m:Q,a:x}=P;$c(Q),$c(x),oe&&Ma(oe),ee.stop(),J&&(J.flags|=8,Fe(te,P,O,T)),ue&&ln(ue,O),ln(()=>{P.isUnmounted=!0},O)},Le=(P,O,T,oe=!1,ee=!1,J=0)=>{for(let te=J;te<P.length;te++)Fe(P[te],O,T,oe,ee)},Ee=P=>{if(P.shapeFlag&6)return Ee(P.component.subTree);if(P.shapeFlag&128)return P.suspense.next();const O=h(P.anchor||P.el),T=O&&O[wp];return T?h(T):O};let Be=!1;const ke=(P,O,T)=>{let oe;P==null?O._vnode&&(Fe(O._vnode,null,null,!0),oe=O._vnode.component):M(O._vnode||null,P,O,null,null,null,T),O._vnode=P,Be||(Be=!0,Uc(oe),qd(),Be=!1)},Ye={p:M,um:Fe,m:be,r:je,mt:W,mc:D,pc:z,pbc:b,n:Ee,o:n};return{render:ke,hydrate:void 0,createApp:Kp(ke)}}function mo({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function $i({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function fm(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Ef(n,e,t=!1){const i=n.children,s=e.children;if($e(i)&&$e(s))for(let r=0;r<i.length;r++){const a=i[r];let o=s[r];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=s[r]=ui(s[r]),o.el=a.el),!t&&o.patchFlag!==-2&&Ef(a,o)),o.type===no&&(o.patchFlag===-1&&(o=s[r]=ui(o)),o.el=a.el),o.type===tn&&!o.el&&(o.el=a.el)}}function hm(n){const e=n.slice(),t=[0];let i,s,r,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,a=t.length-1;r<a;)o=r+a>>1,n[t[o]]<c?r=o+1:a=o;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,a=t[r-1];r-- >0;)t[r]=a,a=e[a];return t}function Tf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Tf(e)}function $c(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Af(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Af(e.subTree):null}const wf=n=>n.__isSuspense;function pm(n,e){e&&e.pendingBranch?$e(n)?e.effects.push(...n):e.effects.push(n):Mp(n)}const it=Symbol.for("v-fgt"),no=Symbol.for("v-txt"),tn=Symbol.for("v-cmt"),go=Symbol.for("v-stc"),us=[];let gn=null;function le(n=!1){us.push(gn=n?null:[])}function Cf(){us.pop(),gn=us[us.length-1]||null}let Fr=1;function Oa(n,e=!1){Fr+=n,n<0&&gn&&e&&(gn.hasOnce=!0)}function Rf(n){return n.dynamicChildren=Fr>0?gn||zs:null,Cf(),Fr>0&&gn&&gn.push(n),n}function ye(n,e,t,i,s,r){return Rf(m(n,e,t,i,s,r,!0))}function Ct(n,e,t,i,s){return Rf(Ce(n,e,t,i,s,!0))}function Ba(n){return n?n.__v_isVNode===!0:!1}function is(n,e){return n.type===e.type&&n.key===e.key}const Pf=({key:n})=>n??null,Ea=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?wt(n)||Kt(n)||Je(n)?{i:mn,r:n,k:e,f:!!t}:n:null);function m(n,e=null,t=null,i=0,s=null,r=n===it?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Pf(e),ref:e&&Ea(e),scopeId:Kd,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:mn};return o?(ka(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=wt(t)?8:16),Fr>0&&!a&&gn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&gn.push(l),l}const Ce=mm;function mm(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===uf)&&(n=tn),Ba(n)){const o=Bi(n,e,!0);return t&&ka(o,t),Fr>0&&!r&&gn&&(o.shapeFlag&6?gn[gn.indexOf(n)]=o:gn.push(o)),o.patchFlag=-2,o}if(Am(n)&&(n=n.__vccOpts),e){e=gm(e);let{class:o,style:l}=e;o&&!wt(o)&&(e.class=Tt(o)),_t(l)&&(cc(l)&&!$e(l)&&(l=Ht({},l)),e.style=An(l))}const a=wt(n)?1:wf(n)?128:ef(n)?64:_t(n)?4:Je(n)?2:0;return m(n,e,t,i,s,a,r,!0)}function gm(n){return n?cc(n)||vf(n)?Ht({},n):n:null}function Bi(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:a,children:o,transition:l}=n,c=e?_m(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Pf(c),ref:e&&e.ref?t&&r?$e(r)?r.concat(Ea(e)):[r,Ea(e)]:Ea(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==it?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Bi(n.ssContent),ssFallback:n.ssFallback&&Bi(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Ur(u,l.clone(u)),u}function Qe(n=" ",e=0){return Ce(no,null,n,e)}function Et(n="",e=!1){return e?(le(),Ct(tn,null,n)):Ce(tn,null,n)}function Gn(n){return n==null||typeof n=="boolean"?Ce(tn):$e(n)?Ce(it,null,n.slice()):Ba(n)?ui(n):Ce(no,null,String(n))}function ui(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Bi(n)}function ka(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if($e(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),ka(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!vf(e)?e._ctx=mn:s===3&&mn&&(mn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else if(Je(e)){if(i&65){ka(n,{default:e});return}e={default:e,_ctx:mn},t=32}else e=String(e),i&64?(t=16,e=[Qe(e)]):t=8;n.children=e,n.shapeFlag|=t}function _m(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Tt([e.class,i.class]));else if(s==="style")e.style=An([e.style,i.style]);else if(Xa(s)){const r=e[s],a=i[s];a&&r!==a&&!($e(r)&&r.includes(a))?e[s]=r?[].concat(r,a):a:a==null&&r==null&&!$a(s)&&(e[s]=a)}else s!==""&&(e[s]=i[s])}return e}function zn(n,e,t,i=null){Cn(n,e,7,[t,i])}const vm=hf();let xm=0;function ym(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||vm,r={uid:xm++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new $h(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:yf(i,s),emitsOptions:pf(i,s),emit:null,emitted:null,propsDefaults:Mt,inheritAttrs:i.inheritAttrs,ctx:Mt,data:Mt,props:Mt,attrs:Mt,slots:Mt,refs:Mt,setupState:Mt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Jp.bind(null,r),n.ce&&n.ce(r),r}let Yt=null;const Df=()=>Yt||mn;let za,ul;{const n=Ya(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(a=>a(r)):s[0](r)}};za=e("__VUE_INSTANCE_SETTERS__",t=>Yt=t),ul=e("__VUE_SSR_SETTERS__",t=>Or=t)}const Wr=n=>{const e=Yt;return za(n),n.scope.on(),()=>{n.scope.off(),za(e)}},jc=()=>{Yt&&Yt.scope.off(),za(null)};function Lf(n){return n.vnode.shapeFlag&4}let Or=!1;function bm(n,e=!1,t=!1){e&&ul(e);const{props:i,children:s}=n.vnode,r=Lf(n);sm(n,i,r,e),lm(n,s,t||e);const a=r?Mm(n,e):void 0;return e&&ul(!1),a}function Mm(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Gp);const{setup:i}=t;if(i){_i();const s=n.setupContext=i.length>1?Em(n):null,r=Wr(n),a=Gr(i,n,0,[n.props,s]),o=Ed(a);if(vi(),r(),(o||n.sp)&&!Cr(n)&&of(n),o){if(a.then(jc,jc),e)return a.then(l=>{qc(n,l)}).catch(l=>{Za(l,n,0)});n.asyncDep=a}else qc(n,a)}else If(n)}function qc(n,e,t){Je(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:_t(e)&&(n.setupState=Xd(e)),If(n)}function If(n,e,t){const i=n.type;n.render||(n.render=i.render||Kn);{const s=Wr(n);_i();try{Wp(n)}finally{vi(),s()}}}const Sm={get(n,e){return qt(n,"get",""),n[e]}};function Em(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Sm),slots:n.slots,emit:n.emit,expose:e}}function io(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Xd(fp(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Rr)return Rr[t](n)},has(e,t){return t in e||t in Rr}})):n.proxy}function Tm(n,e=!0){return Je(n)?n.displayName||n.name:n.name||e&&n.__name}function Am(n){return Je(n)&&"__vccOpts"in n}const yt=(n,e)=>_p(n,e,Or);function Ha(n,e,t){try{Oa(-1);const i=arguments.length;return i===2?_t(e)&&!$e(e)?Ba(e)?Ce(n,null,[e]):Ce(n,e):Ce(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Ba(t)&&(t=[t]),Ce(n,e,t))}finally{Oa(1)}}const wm="3.5.40";/**
* @vue/runtime-dom v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let dl;const Yc=typeof window<"u"&&window.trustedTypes;if(Yc)try{dl=Yc.createPolicy("vue",{createHTML:n=>n})}catch{}const Uf=dl?n=>dl.createHTML(n):n=>n,Cm="http://www.w3.org/2000/svg",Rm="http://www.w3.org/1998/Math/MathML",ci=typeof document<"u"?document:null,Kc=ci&&ci.createElement("template"),Pm={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?ci.createElementNS(Cm,n):e==="mathml"?ci.createElementNS(Rm,n):t?ci.createElement(n,{is:t}):ci.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>ci.createTextNode(n),createComment:n=>ci.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ci.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const a=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Kc.innerHTML=Uf(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=Kc.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Si="transition",fr="animation",Br=Symbol("_vtc"),Nf={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Dm=Ht({},tf,Nf),Lm=n=>(n.displayName="Transition",n.props=Dm,n),hc=Lm((n,{slots:e})=>Ha(Pp,Im(n),e)),ji=(n,e=[])=>{$e(n)?n.forEach(t=>t(...e)):n&&n(...e)},Zc=n=>n?$e(n)?n.some(e=>e.length>1):n.length>1:!1;function Im(n){const e={};for(const U in n)U in Nf||(e[U]=n[U]);if(n.css===!1)return e;const{name:t="v",type:i,duration:s,enterFromClass:r=`${t}-enter-from`,enterActiveClass:a=`${t}-enter-active`,enterToClass:o=`${t}-enter-to`,appearFromClass:l=r,appearActiveClass:c=a,appearToClass:u=o,leaveFromClass:d=`${t}-leave-from`,leaveActiveClass:h=`${t}-leave-active`,leaveToClass:p=`${t}-leave-to`}=n,v=Um(s),M=v&&v[0],g=v&&v[1],{onBeforeEnter:f,onEnter:C,onEnterCancelled:R,onLeave:y,onLeaveCancelled:L,onBeforeAppear:w=f,onAppear:E=C,onAppearCancelled:D=R}=e,S=(U,N,W,ne)=>{U._enterCancelled=ne,qi(U,N?u:o),qi(U,N?c:a),W&&W()},b=(U,N)=>{U._isLeaving=!1,qi(U,d),qi(U,p),qi(U,h),N&&N()},I=U=>(N,W)=>{const ne=U?E:C,Y=()=>S(N,U,W);ji(ne,[N,Y]),Jc(()=>{qi(N,U?l:r),ni(N,U?u:o),Zc(ne)||Qc(N,i,M,Y)})};return Ht(e,{onBeforeEnter(U){ji(f,[U]),ni(U,r),ni(U,a)},onBeforeAppear(U){ji(w,[U]),ni(U,l),ni(U,c)},onEnter:I(!1),onAppear:I(!0),onLeave(U,N){U._isLeaving=!0;const W=()=>b(U,N);ni(U,d),U._enterCancelled?(ni(U,h),nu(U)):(nu(U),ni(U,h)),Jc(()=>{U._isLeaving&&(qi(U,d),ni(U,p),Zc(y)||Qc(U,i,g,W))}),ji(y,[U,W])},onEnterCancelled(U){S(U,!1,void 0,!0),ji(R,[U])},onAppearCancelled(U){S(U,!0,void 0,!0),ji(D,[U])},onLeaveCancelled(U){b(U),ji(L,[U])}})}function Um(n){if(n==null)return null;if(_t(n))return[_o(n.enter),_o(n.leave)];{const e=_o(n);return[e,e]}}function _o(n){return Bh(n)}function ni(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[Br]||(n[Br]=new Set)).add(e)}function qi(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[Br];t&&(t.delete(e),t.size||(n[Br]=void 0))}function Jc(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let Nm=0;function Qc(n,e,t,i){const s=n._endId=++Nm,r=()=>{s===n._endId&&i()};if(t!=null)return setTimeout(r,t);const{type:a,timeout:o,propCount:l}=Fm(n,e);if(!a)return i();const c=a+"end";let u=0;const d=()=>{n.removeEventListener(c,h),r()},h=p=>{p.target===n&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},o+1),n.addEventListener(c,h)}function Fm(n,e){const t=window.getComputedStyle(n),i=v=>(t[v]||"").split(", "),s=i(`${Si}Delay`),r=i(`${Si}Duration`),a=eu(s,r),o=i(`${fr}Delay`),l=i(`${fr}Duration`),c=eu(o,l);let u=null,d=0,h=0;e===Si?a>0&&(u=Si,d=a,h=r.length):e===fr?c>0&&(u=fr,d=c,h=l.length):(d=Math.max(a,c),u=d>0?a>c?Si:fr:null,h=u?u===Si?r.length:l.length:0);const p=u===Si&&/\b(?:transform|all)(?:,|$)/.test(i(`${Si}Property`).toString());return{type:u,timeout:d,propCount:h,hasTransform:p}}function eu(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>tu(t)+tu(n[i])))}function tu(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function nu(n){return(n?n.ownerDocument:document).body.offsetHeight}function Om(n,e,t){const i=n[Br];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const iu=Symbol("_vod"),Bm=Symbol("_vsh"),km=Symbol(""),zm=/(?:^|;)\s*display\s*:/;function Hm(n,e,t){const i=n.style,s=wt(t);let r=!1;if(t&&!s){if(e)if(wt(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&br(i,o,"")}else for(const a in e)t[a]==null&&br(i,a,"");for(const a in t){a==="display"&&(r=!0);const o=t[a];o!=null?Gm(n,a,!wt(e)&&e?e[a]:void 0,o)||br(i,a,o):br(i,a,"")}}else if(s){if(e!==t){const a=i[km];a&&(t+=";"+a),i.cssText=t,r=zm.test(t)}}else e&&n.removeAttribute("style");iu in n&&(n[iu]=r?i.display:"",n[Bm]&&(i.display="none"))}const su=/\s*!important$/;function br(n,e,t){if($e(t))t.forEach(i=>br(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Vm(n,e);su.test(t)?n.setProperty(Hi(i),t.replace(su,""),"important"):n[i]=t}}const ru=["Webkit","Moz","ms"],vo={};function Vm(n,e){const t=vo[e];if(t)return t;let i=nn(e);if(i!=="filter"&&i in n)return vo[e]=i;i=qa(i);for(let s=0;s<ru.length;s++){const r=ru[s]+i;if(r in n)return vo[e]=r}return e}function Gm(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&wt(i)&&t===i}const au="http://www.w3.org/1999/xlink";function ou(n,e,t,i,s,r=Wh(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(au,e.slice(6,e.length)):n.setAttributeNS(au,e,t):t==null||r&&!Cd(t)?n.removeAttribute(e):n.setAttribute(e,r?"":Jn(t)?String(t):t)}function lu(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Uf(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const o=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=Cd(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(s||e)}function Fs(n,e,t,i){n.addEventListener(e,t,i)}function Wm(n,e,t,i){n.removeEventListener(e,t,i)}const cu=Symbol("_vei");function Xm(n,e,t,i,s=null){const r=n[cu]||(n[cu]={}),a=r[e];if(i&&a)a.value=i;else{const[o,l]=qm(e);if(i){const c=r[e]=Zm(i,s);Fs(n,o,c,l)}else a&&(Wm(n,o,a,l),r[e]=void 0)}}const $m=/(Once|Passive|Capture)$/,jm=/^on:?(?:Once|Passive|Capture)$/;function qm(n){let e,t;for(;(t=n.match($m))&&!jm.test(n);)e||(e={}),n=n.slice(0,n.length-t[1].length),e[t[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):Hi(n.slice(2)),e]}let xo=0;const Ym=Promise.resolve(),Km=()=>xo||(Ym.then(()=>xo=0),xo=Date.now());function Zm(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;const s=t.value;if($e(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const a=s.slice(),o=[i];for(let l=0;l<a.length&&!i._stopped;l++){const c=a[l];c&&Cn(c,e,5,o)}}else Cn(s,e,5,[i])};return t.value=n,t.attached=Km(),t}const uu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Jm=(n,e,t,i,s,r)=>{const a=s==="svg";e==="class"?Om(n,i,a):e==="style"?Hm(n,t,i):Xa(e)?$a(e)||Xm(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Qm(n,e,i,a))?(lu(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&ou(n,e,i,a,r,e!=="value")):n._isVueCE&&(eg(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!wt(i)))?lu(n,nn(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),ou(n,e,i,a))};function Qm(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&uu(e)&&Je(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return uu(e)&&wt(t)?!1:e in n}function eg(n,e){const t=n._def.props;if(!t)return!1;const i=nn(e);return Array.isArray(t)?t.some(s=>nn(s)===i):Object.keys(t).some(s=>nn(s)===i)}const du=n=>{const e=n.props["onUpdate:modelValue"]||!1;return $e(e)?t=>Ma(e,t):e};function tg(n){n.target.composing=!0}function fu(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const yo=Symbol("_assign");function hu(n,e,t){return e&&(n=n.trim()),t&&(n=tc(n)),n}const Ff={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n[yo]=du(s);const r=i||s.props&&s.props.type==="number";Fs(n,e?"change":"input",a=>{a.target.composing||n[yo](hu(n.value,t,r))}),(t||r)&&Fs(n,"change",()=>{n.value=hu(n.value,t,r)}),e||(Fs(n,"compositionstart",tg),Fs(n,"compositionend",fu),Fs(n,"change",fu))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:s,number:r}},a){if(n[yo]=du(a),n.composing)return;const o=(r||n.type==="number")&&!/^0\d/.test(n.value)?tc(n.value):n.value,l=e??"";if(o===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&e===t||s&&n.value.trim()===l)||(n.value=l)}},ng=["ctrl","shift","alt","meta"],ig={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>ng.some(t=>n[`${t}Key`]&&!e.includes(t))},hi=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=((s,...r)=>{for(let a=0;a<e.length;a++){const o=ig[e[a]];if(o&&o(s,e))return}return n(s,...r)}))},sg={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Of=(n,e)=>{const t=n._withKeys||(n._withKeys={}),i=e.join(".");return t[i]||(t[i]=(s=>{if(!("key"in s))return;const r=Hi(s.key);if(e.some(a=>a===r||sg[a]===r))return n(s)}))},rg=Ht({patchProp:Jm},Pm);let pu;function ag(){return pu||(pu=um(rg))}const og=((...n)=>{const e=ag().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=cg(i);if(!s)return;const r=e._component;!Je(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=t(s,!1,lg(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e});function lg(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function cg(n){return wt(n)?document.querySelector(n):n}const ug={class:"site-footer"},dg={__name:"SiteFooter",emits:["navigate"],setup(n){return(e,t)=>(le(),ye("footer",ug,[t[4]||(t[4]=m("div",null,[m("strong",null,"大临蓝印"),m("p",null,"一个关于大临村蓝印花布的数字展示平台，让非遗纹样被看见、被理解、被重新使用。")],-1)),m("div",null,[t[3]||(t[3]=m("span",null,"快速链接",-1)),m("button",{type:"button",onClick:t[0]||(t[0]=i=>e.$emit("navigate","/library"))},"蓝印纹库"),m("button",{type:"button",onClick:t[1]||(t[1]=i=>e.$emit("navigate","/heritage"))},"她与蓝"),m("button",{type:"button",onClick:t[2]||(t[2]=i=>e.$emit("navigate","/find-blue"))},"寻找你的蓝")]),t[5]||(t[5]=m("div",null,[m("span",null,"非遗信息"),m("p",null,"浙江嘉兴桐乡市大临村（石门镇） · 国家级非物质文化遗产"),m("small",null,"© 2026 大临村蓝印花布数字展示平台")],-1))]))}},Bf="/assets/logo.jpg";/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Qr={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=({size:n,strokeWidth:e=2,absoluteStrokeWidth:t,color:i,iconNode:s,name:r,class:a,...o},{slots:l})=>Ha("svg",{...Qr,width:n||Qr.width,height:n||Qr.height,stroke:i||Qr.stroke,"stroke-width":t?Number(e)*24/Number(n):e,class:["lucide",`lucide-${fg(r??"icon")}`],...o},[...s.map(c=>Ha(...c)),...l.default?[l.default()]:[]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ot=(n,e)=>(t,{slots:i})=>Ha(hg,{...t,iconNode:e,name:n},i);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hr=ot("ArrowDownIcon",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ds=ot("ArrowLeftIcon",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qn=ot("ArrowRightIcon",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kf=ot("BookOpenIcon",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mr=ot("BoxIcon",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg=ot("CameraIcon",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mu=ot("CheckIcon",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=ot("CircleAlertIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=ot("Clock3Icon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g=ot("CloudUploadIcon",[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg=ot("CoffeeIcon",[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zf=ot("DownloadIcon",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg=ot("Gamepad2Icon",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg=ot("HandHeartIcon",[["path",{d:"M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16",key:"1ifwr1"}],["path",{d:"m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9",key:"17abbs"}],["path",{d:"m2 15 6 6",key:"10dquu"}],["path",{d:"M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z",key:"1h3036"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gu=ot("HeartIcon",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _u=ot("ImagePlusIcon",[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hf=ot("LayersIcon",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=ot("MapPinIcon",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg=ot("Maximize2Icon",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg=ot("MenuIcon",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vu=ot("MousePointer2Icon",[["path",{d:"M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z",key:"edeuup"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xu=ot("PackageIcon",[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7",key:"yx3hmr"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vf=ot("RotateCcwIcon",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=ot("RotateCwIcon",[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=ot("RouteIcon",[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gf=ot("SearchIcon",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag=ot("ShirtIcon",[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",key:"1wgbhj"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=ot("SmartphoneIcon",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fs=ot("SparklesIcon",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=ot("TrophyIcon",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg=ot("UsersRoundIcon",[["path",{d:"M18 21a8 8 0 0 0-16 0",key:"3ypg7q"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3",key:"10s06x"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ys=ot("XIcon",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg=ot("ZoomInIcon",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]),Ui=[{id:"0182ff04858b98ea9248cd301d0a278b",src:"/assets/collected/0182ff04858b98ea9248cd301d0a278b.png",type:"png",label:"本地采集素材"},{id:"01d3fbd3b8f8eaa31ab01d39e47b749b",src:"/assets/collected/01d3fbd3b8f8eaa31ab01d39e47b749b.jpg",type:"jpg",label:"本地采集素材"},{id:"028c51947c5f7d191432534f8c8c406f",src:"/assets/collected/028c51947c5f7d191432534f8c8c406f.jpg",type:"jpg",label:"本地采集素材"},{id:"0510ada6fecb96ca4478872090ce1809",src:"/assets/collected/0510ada6fecb96ca4478872090ce1809.png",type:"png",label:"本地采集素材"},{id:"063fc35152b12d6a935623315a207fba",src:"/assets/collected/063fc35152b12d6a935623315a207fba.png",type:"png",label:"本地采集素材"},{id:"0b36d07490865ddd888e047c84f87060",src:"/assets/collected/0b36d07490865ddd888e047c84f87060.jpg",type:"jpg",label:"本地采集素材"},{id:"0ca7611e8ef81537becc001309dd50ff",src:"/assets/collected/0ca7611e8ef81537becc001309dd50ff.jpg",type:"jpg",label:"本地采集素材"},{id:"17c2bbe479aaa0a10a14425a3f40c241",src:"/assets/collected/17c2bbe479aaa0a10a14425a3f40c241.png",type:"png",label:"本地采集素材"},{id:"1c18f8641254020b0d9104c027e34da0",src:"/assets/collected/1c18f8641254020b0d9104c027e34da0.jpg",type:"jpg",label:"本地采集素材"},{id:"1dec0874756fc99aecc3dde98dd0b138",src:"/assets/collected/1dec0874756fc99aecc3dde98dd0b138.jpg",type:"jpg",label:"本地采集素材"},{id:"2246f57e0873288260af7f41c41a6976",src:"/assets/collected/2246f57e0873288260af7f41c41a6976.png",type:"png",label:"本地采集素材"},{id:"230ca8c118f0d457075e9a880cb11ce2",src:"/assets/collected/230ca8c118f0d457075e9a880cb11ce2.png",type:"png",label:"本地采集素材"},{id:"2691bc01b70c4aea6e8e2706ee7d6cf9",src:"/assets/collected/2691bc01b70c4aea6e8e2706ee7d6cf9.jpg",type:"jpg",label:"本地采集素材"},{id:"275171d7ac3f67dba86dea6d213e75a1",src:"/assets/collected/275171d7ac3f67dba86dea6d213e75a1.png",type:"png",label:"本地采集素材"},{id:"2bf7d9e1e70726a91f0ba439e36990a2",src:"/assets/collected/2bf7d9e1e70726a91f0ba439e36990a2.jpg",type:"jpg",label:"本地采集素材"},{id:"2c6c79079ef39f3b22350f904442715c",src:"/assets/collected/2c6c79079ef39f3b22350f904442715c.jpg",type:"jpg",label:"本地采集素材"},{id:"2e893155afc5490962042b940759d35c",src:"/assets/collected/2e893155afc5490962042b940759d35c.png",type:"png",label:"本地采集素材"},{id:"2fdbc0300df013de14debb9db68d64d7",src:"/assets/collected/2fdbc0300df013de14debb9db68d64d7.jpg",type:"jpg",label:"本地采集素材"},{id:"324910dabd935b3b9fc53691ac2c649b",src:"/assets/collected/324910dabd935b3b9fc53691ac2c649b.png",type:"png",label:"本地采集素材"},{id:"34c98322b14ccc7f47c9ab92a6df184a",src:"/assets/collected/34c98322b14ccc7f47c9ab92a6df184a.jpg",type:"jpg",label:"本地采集素材"},{id:"35dc1a9b5612b397206e2ebf84d07780",src:"/assets/collected/35dc1a9b5612b397206e2ebf84d07780.jpg",type:"jpg",label:"本地采集素材"},{id:"3708619f6bed006638e9fbc7ea411e04",src:"/assets/collected/3708619f6bed006638e9fbc7ea411e04.jpg",type:"jpg",label:"本地采集素材"},{id:"3ac372d48709177036177764830b849e",src:"/assets/collected/3ac372d48709177036177764830b849e.jpg",type:"jpg",label:"本地采集素材"},{id:"3d0469c6ff646794023faf609e637939",src:"/assets/collected/3d0469c6ff646794023faf609e637939.png",type:"png",label:"本地采集素材"},{id:"3f17a3f7b548c8c32c7492cac0fa86eb",src:"/assets/collected/3f17a3f7b548c8c32c7492cac0fa86eb.png",type:"png",label:"本地采集素材"},{id:"4b8c9b2cbba29e814bb7ce2fe0953107",src:"/assets/collected/4b8c9b2cbba29e814bb7ce2fe0953107.png",type:"png",label:"本地采集素材"},{id:"4d0cb2417a23d896335cddf73f442da1",src:"/assets/collected/4d0cb2417a23d896335cddf73f442da1.png",type:"png",label:"本地采集素材"},{id:"4da996bff8295857987fc7f9f56b91b0",src:"/assets/collected/4da996bff8295857987fc7f9f56b91b0.png",type:"png",label:"本地采集素材"},{id:"530f782160a39b53cf8951ebc95aa7b7",src:"/assets/collected/530f782160a39b53cf8951ebc95aa7b7.jpg",type:"jpg",label:"本地采集素材"},{id:"54b24ed6b6f0b22af05359bf14f2dbc3",src:"/assets/collected/54b24ed6b6f0b22af05359bf14f2dbc3.png",type:"png",label:"本地采集素材"},{id:"58bd49b0928148989e0b4f815b8d279a",src:"/assets/collected/58bd49b0928148989e0b4f815b8d279a.png",type:"png",label:"本地采集素材"},{id:"594e82c876b9f35dc0be26dae405386d",src:"/assets/collected/594e82c876b9f35dc0be26dae405386d.jpg",type:"jpg",label:"本地采集素材"},{id:"5bdeac4d4e4ec6612b382cbfaa270ee7",src:"/assets/collected/5bdeac4d4e4ec6612b382cbfaa270ee7.jpg",type:"jpg",label:"本地采集素材"},{id:"659ed3552cdfd5b0659f4dba2e49f8d8",src:"/assets/collected/659ed3552cdfd5b0659f4dba2e49f8d8.png",type:"png",label:"本地采集素材"},{id:"66b0da1261a8c1401fde337052745c02",src:"/assets/collected/66b0da1261a8c1401fde337052745c02.jpg",type:"jpg",label:"本地采集素材"},{id:"673982225804e7019209df35840bbf03",src:"/assets/collected/673982225804e7019209df35840bbf03.png",type:"png",label:"本地采集素材"},{id:"6b6fb65a39529d6efb573a4c990e4682",src:"/assets/collected/6b6fb65a39529d6efb573a4c990e4682.png",type:"png",label:"本地采集素材"},{id:"6f46c2e5a178aa7cc2a6393aa718ed05",src:"/assets/collected/6f46c2e5a178aa7cc2a6393aa718ed05.jpg",type:"jpg",label:"本地采集素材"},{id:"7ac1b46d27db0a05b32d96a8da2dba30",src:"/assets/collected/7ac1b46d27db0a05b32d96a8da2dba30.jpg",type:"jpg",label:"本地采集素材"},{id:"8106d0f42a9cbd09f4cd60fa946db380",src:"/assets/collected/8106d0f42a9cbd09f4cd60fa946db380.jpg",type:"jpg",label:"本地采集素材"},{id:"83392733fb8e3e4b475ba6aa1c0a90d8",src:"/assets/collected/83392733fb8e3e4b475ba6aa1c0a90d8.jpg",type:"jpg",label:"本地采集素材"},{id:"9038c7891ac392215722ce6608aa9ae1",src:"/assets/collected/9038c7891ac392215722ce6608aa9ae1.png",type:"png",label:"本地采集素材"},{id:"96c96855da17133eec54d41f762e460f",src:"/assets/collected/96c96855da17133eec54d41f762e460f.png",type:"png",label:"本地采集素材"},{id:"9973bc3eb72224ae3e9c4fa173b61c11",src:"/assets/collected/9973bc3eb72224ae3e9c4fa173b61c11.jpg",type:"jpg",label:"本地采集素材"},{id:"a008186996b5a9f46c8c03d5cf756b69",src:"/assets/collected/a008186996b5a9f46c8c03d5cf756b69.png",type:"png",label:"本地采集素材"},{id:"a102aae0cc43ae8aca1febbba5eba620",src:"/assets/collected/a102aae0cc43ae8aca1febbba5eba620.png",type:"png",label:"本地采集素材"},{id:"a248e54f8817dedfee01f2a1e424d3dc",src:"/assets/collected/a248e54f8817dedfee01f2a1e424d3dc.png",type:"png",label:"本地采集素材"},{id:"a5025258cbfafe3333a05ae6a2887fe0",src:"/assets/collected/a5025258cbfafe3333a05ae6a2887fe0.png",type:"png",label:"本地采集素材"},{id:"a6ee57472cd4a608ca0d99c85b252431",src:"/assets/collected/a6ee57472cd4a608ca0d99c85b252431.jpg",type:"jpg",label:"本地采集素材"},{id:"aaf63ef83c86bd848855be37bf7aea66",src:"/assets/collected/aaf63ef83c86bd848855be37bf7aea66.png",type:"png",label:"本地采集素材"},{id:"adb0e449f63cd23d42acd0cdace235ed",src:"/assets/collected/adb0e449f63cd23d42acd0cdace235ed.jpg",type:"jpg",label:"本地采集素材"},{id:"adcd1ee4c5be390784f052f28d09a4ce",src:"/assets/collected/adcd1ee4c5be390784f052f28d09a4ce.png",type:"png",label:"本地采集素材"},{id:"b76631d4954d917e54371641d9b46595",src:"/assets/collected/b76631d4954d917e54371641d9b46595.png",type:"png",label:"本地采集素材"},{id:"b83a4a44ed164163e3895f6573fb93e4",src:"/assets/collected/b83a4a44ed164163e3895f6573fb93e4.jpg",type:"jpg",label:"本地采集素材"},{id:"bdf4a5b824555bd323429e96ea687c31",src:"/assets/collected/bdf4a5b824555bd323429e96ea687c31.jpg",type:"jpg",label:"本地采集素材"},{id:"bff7aa846d3d407b880de891a9e4f6f9",src:"/assets/collected/bff7aa846d3d407b880de891a9e4f6f9.jpg",type:"jpg",label:"本地采集素材"},{id:"c2073e183b8aa8813f494875d96352b3",src:"/assets/collected/c2073e183b8aa8813f494875d96352b3.png",type:"png",label:"本地采集素材"},{id:"c382ef04972b7c084bb8e89c70976482",src:"/assets/collected/c382ef04972b7c084bb8e89c70976482.png",type:"png",label:"本地采集素材"},{id:"c52959dd9f41ff25b19684fb71194ef2",src:"/assets/collected/c52959dd9f41ff25b19684fb71194ef2.png",type:"png",label:"本地采集素材"},{id:"c5b5ec240c6263e68a233973ffa0fa28",src:"/assets/collected/c5b5ec240c6263e68a233973ffa0fa28.png",type:"png",label:"本地采集素材"},{id:"cc3613d3674fcc3d8669fb83b6804782",src:"/assets/collected/cc3613d3674fcc3d8669fb83b6804782.jpg",type:"jpg",label:"本地采集素材"},{id:"ce4739428e270e4332bf1703bfd11717",src:"/assets/collected/ce4739428e270e4332bf1703bfd11717.png",type:"png",label:"本地采集素材"},{id:"d1aea8bfc6c156c3269d85b252e416ab",src:"/assets/collected/d1aea8bfc6c156c3269d85b252e416ab.png",type:"png",label:"本地采集素材"},{id:"d68d85f766b2c565502e594ca7f7e5d5",src:"/assets/collected/d68d85f766b2c565502e594ca7f7e5d5.jpg",type:"jpg",label:"本地采集素材"},{id:"d7f179ec28ba0eea0fcfb1ead0edc69b",src:"/assets/collected/d7f179ec28ba0eea0fcfb1ead0edc69b.png",type:"png",label:"本地采集素材"},{id:"d82b7f3028f63eb14000e15b09869e2b",src:"/assets/collected/d82b7f3028f63eb14000e15b09869e2b.jpg",type:"jpg",label:"本地采集素材"},{id:"d92e1a3bfafc574d8adea527d99d492c",src:"/assets/collected/d92e1a3bfafc574d8adea527d99d492c.png",type:"png",label:"本地采集素材"},{id:"da1dfc74855a5bd7b8fb10bfca02c37f",src:"/assets/collected/da1dfc74855a5bd7b8fb10bfca02c37f.png",type:"png",label:"本地采集素材"},{id:"db4bb2dde73e7966c20bc3a9145ef4aa",src:"/assets/collected/db4bb2dde73e7966c20bc3a9145ef4aa.png",type:"png",label:"本地采集素材"},{id:"dc7b3f595c08ead49161a85f1b62458e",src:"/assets/collected/dc7b3f595c08ead49161a85f1b62458e.jpg",type:"jpg",label:"本地采集素材"},{id:"de78690463eebb2de88a4a74746cc1be",src:"/assets/collected/de78690463eebb2de88a4a74746cc1be.png",type:"png",label:"本地采集素材"},{id:"df201fbbb1ad9d14fe455e470acb3a20",src:"/assets/collected/df201fbbb1ad9d14fe455e470acb3a20.jpg",type:"jpg",label:"本地采集素材"},{id:"e051e2c5b0e1bf5cf8d2a00f59f5bd70",src:"/assets/collected/e051e2c5b0e1bf5cf8d2a00f59f5bd70.jpg",type:"jpg",label:"本地采集素材"},{id:"e7cc2dfc9d894bd2ba4129b022d8fe8e",src:"/assets/collected/e7cc2dfc9d894bd2ba4129b022d8fe8e.jpg",type:"jpg",label:"本地采集素材"},{id:"eac803ad793c736e3372d312e7023f45",src:"/assets/collected/eac803ad793c736e3372d312e7023f45.png",type:"png",label:"本地采集素材"},{id:"ecc422c955836351c9c7187a6d5ce98d",src:"/assets/collected/ecc422c955836351c9c7187a6d5ce98d.png",type:"png",label:"本地采集素材"},{id:"ed2aadad1f03f71c17858ef5b966757d",src:"/assets/collected/ed2aadad1f03f71c17858ef5b966757d.jpg",type:"jpg",label:"本地采集素材"},{id:"f102cfa7934a6e6c37fb1a6653628e43",src:"/assets/collected/f102cfa7934a6e6c37fb1a6653628e43.png",type:"png",label:"本地采集素材"},{id:"f68fc7941afa48ed3a3b502014198d6d",src:"/assets/collected/f68fc7941afa48ed3a3b502014198d6d.png",type:"png",label:"本地采集素材"},{id:"fab766042e42b53e823a3b8de34c1068",src:"/assets/collected/fab766042e42b53e823a3b8de34c1068.png",type:"png",label:"本地采集素材"},{id:"fe8860c17a0ef8c0b8fb414b6a7cb6f1",src:"/assets/collected/fe8860c17a0ef8c0b8fb414b6a7cb6f1.png",type:"png",label:"本地采集素材"},{id:"ff9bc2f738ba667416eefadce5454489",src:"/assets/collected/ff9bc2f738ba667416eefadce5454489.png",type:"png",label:"本地采集素材"}],Dg=[{label:"首页",path:"/"},{label:"蓝印纹库",path:"/library"},{label:"她与蓝",path:"/heritage"},{label:"寻找你的蓝",path:"/find-blue"},{label:"纹脉工坊",path:"/patternx"}],Wf=[{key:"plant",name:"植物纹",title:"草木有灵",description:"缠枝莲、牡丹、梅兰竹菊，取法自然",patternClass:"pattern-floral",image:"/assets/categories/plant.jpg"},{key:"animal",name:"动物纹",title:"瑞兽祥禽",description:"龙凤呈祥、蝶恋花、鱼跃龙门",patternClass:"pattern-wing",image:"/assets/categories/animal.jpg"},{key:"auspicious",name:"吉祥纹",title:"福禄寿喜",description:"福字、寿字、八宝、暗八仙",patternClass:"pattern-coin",image:"/assets/categories/auspicious.jpg"},{key:"geometry",name:"几何纹",title:"方圆之道",description:"回纹、万字纹、方胜纹、盘长纹",patternClass:"pattern-grid",image:"/assets/categories/geometry.jpg"}],Xf=[{title:"刻版",short:"牛皮纸上刻出纹样",text:"将画稿覆在牛皮纸版上，用刻刀一点点镂刻出花纹轮廓。刀要稳，手要准，纹样的精神从这里开始。"},{title:"刮浆",short:"黄豆粉与石灰调成防染浆",text:"将黄豆粉、石灰调成防染浆，均匀刮在布面与花版之间。这层浆，是蓝与白之间最重要的界线。"},{title:"染色",short:"浸入靛蓝染缸，氧化显色",text:"布料浸入植物靛蓝染缸，出缸后与空气接触慢慢氧化，颜色由浅变深，靛蓝的生命从水中醒来。"},{title:"刮白",short:"刮去防染浆，露出白花",text:"待染色稳定后刮去防染浆，原本被保护的白色花纹显现出来，蓝白对比在这一刻最动人。"},{title:"清洗",short:"流水洗净浮色",text:"用清水洗去浮色和残浆，让纹样更清朗、布面更柔和。布料在水里舒展开来，像呼吸一样。"},{title:"晾晒",short:"阳光下晾干，靛蓝定格",text:"将布料悬挂晾晒，让风与阳光慢慢带走湿气，靛蓝与素白由此定格成日常生活里的美。"}],Mn=Xf.map(n=>n.short),Lg=[{id:"chanzhi-lian",name:"缠枝莲纹",category:"plant",categoryName:"植物纹",patternClass:"pattern-floral",meaning:"生生不息，连绵不断",meaningDetail:"缠枝莲纹以莲花为主体，藤蔓缠绕连绵，寓意生生不息。在蓝印花布中，它寄托了江南人家对家族兴旺、绵延不绝的美好祈愿。",story:"相传大临村的缠枝莲纹源于宋元以来的民间布样。每逢婚嫁，母亲常以莲花与藤蔓入纹，祝愿女儿的新家清正和美、根脉相连。",era:"明清",usage:"被面、包袱布、帐檐",technique:Mn,modernUse:["丝巾图案","文创包装","展陈导视"],relatedIds:["mudan","shiliu","huiwen"],tags:["莲花","缠枝","植物","智慧","清雅"]},{id:"mudan",name:"牡丹团花纹",category:"plant",categoryName:"植物纹",patternClass:"pattern-rosette",meaning:"花开富贵，圆满安康",meaningDetail:"牡丹团花构图饱满，常用于节庆和婚嫁布品，表达富贵、圆满与热闹的生活愿望。",story:"大临村老布样中，牡丹常与蝴蝶、团寿、回纹组合，既有喜庆气，也有民间礼俗中的祝福秩序。",era:"明清",usage:"婚嫁被面、桌围、礼布",technique:Mn,modernUse:["伴手礼包装","抱枕面料","节庆海报"],relatedIds:["chanzhi-lian","shuangxi","hudie"],tags:["牡丹","富贵","团花","喜庆"]},{id:"shiliu",name:"石榴团圆纹",category:"plant",categoryName:"植物纹",patternClass:"pattern-seed",meaning:"多子多福，家族团圆",meaningDetail:"石榴籽粒繁多，寓意家族兴旺、团圆丰足，是礼俗布样中常见的祝福纹样。",story:"旧时嫁妆布中常见石榴与卷草相伴，既好看，也把长辈对新家庭的祝愿藏进一针一线。",era:"清代",usage:"嫁妆布、包袱布、礼盒布",technique:Mn,modernUse:["礼盒内衬","桌旗","节日贴纸"],relatedIds:["mudan","chanzhi-lian","shouzi"],tags:["石榴","团圆","多福","植物"]},{id:"hudie",name:"蝶恋花纹",category:"animal",categoryName:"动物纹",patternClass:"pattern-wing",meaning:"破茧成蝶，自由美好",meaningDetail:"蝴蝶轻盈灵动，常与花草相伴，寓意爱情、美好与生命转化。",story:"蝶恋花在民间布样中很受欢迎，轻巧的蝶形可以让沉静的靛蓝布面有一种活泼的呼吸感。",era:"清代",usage:"丝巾、发带、衣饰边纹",technique:Mn,modernUse:["服饰印花","手机壁纸","明信片"],relatedIds:["mudan","yu-lian","longfeng"],tags:["蝴蝶","自由","爱情","动物"]},{id:"yu-lian",name:"鱼跃莲纹",category:"animal",categoryName:"动物纹",patternClass:"pattern-wave",meaning:"年年有余，生机流动",meaningDetail:"鱼与莲组合，谐音连年有余，表达生活丰足与生命流动。",story:"江南水乡的鱼、莲、波纹常常同框出现，既来自眼前生活，也沉淀成民间祝福。",era:"明清",usage:"儿童布品、方巾、挂布",technique:Mn,modernUse:["儿童文创","帆布袋","互动纹样背景"],relatedIds:["chanzhi-lian","hudie","huiwen"],tags:["鱼","莲","有余","动物"]},{id:"longfeng",name:"龙凤呈祥纹",category:"animal",categoryName:"动物纹",patternClass:"pattern-cloud",meaning:"祥瑞圆满，喜庆成双",meaningDetail:"龙凤是礼俗纹样中的重要符号，常用于婚庆、祝福与大型陈设。",story:"龙凤纹在蓝印花布中会被简化成更适合刻版的线条，保留气势，也适合反复印染。",era:"清代",usage:"婚礼布置、门帘、挂幛",technique:Mn,modernUse:["展览主视觉","礼品包装","屏风纹样"],relatedIds:["shuangxi","mudan","shouzi"],tags:["龙凤","祥瑞","婚庆","动物"]},{id:"shouzi",name:"团寿字纹",category:"auspicious",categoryName:"吉祥纹",patternClass:"pattern-shou",meaning:"福寿双全，圆满长久",meaningDetail:"寿字经过团形化处理，构图稳定，寓意健康长寿与家宅圆满。",story:"祝寿布、厅堂陈设中常见团寿字，蓝底白字庄重清朗，很适合做中心纹。",era:"明清",usage:"祝寿布、被面、厅堂挂布",technique:Mn,modernUse:["茶礼包装","挂画","长辈礼品"],relatedIds:["huiwen","wufu","mudan"],tags:["寿","长寿","吉祥","团形"]},{id:"shuangxi",name:"双喜团花纹",category:"auspicious",categoryName:"吉祥纹",patternClass:"pattern-doublehappy",meaning:"喜事成双，良缘圆满",meaningDetail:"双喜纹是婚嫁礼俗中最直观的祝福符号，常与牡丹、莲花、蝴蝶搭配。",story:"在旧时婚嫁布置中，双喜纹既是装饰，也是仪式语言，让喜庆被看见、被记住。",era:"清代",usage:"婚嫁布、红包封、礼布",technique:Mn,modernUse:["婚礼伴手礼","红包封套","节庆海报"],relatedIds:["mudan","hudie","longfeng"],tags:["双喜","喜庆","婚嫁","吉祥"]},{id:"wufu",name:"五福蝠纹",category:"auspicious",categoryName:"吉祥纹",patternClass:"pattern-wing",meaning:"五福临门，福气绵延",meaningDetail:"蝙蝠取福的谐音，五蝠围合表达长寿、富贵、康宁、好德、善终的传统祝愿。",story:"民间图像常用谐音讲祝福，五福纹就是把语言、图案和愿望压进一块布里的例子。",era:"明清",usage:"门帘、礼品布、垫布",technique:Mn,modernUse:["家居软装","新年礼盒","导视图标"],relatedIds:["shouzi","huiwen","shuangxi"],tags:["五福","蝙蝠","平安","吉祥"]},{id:"huiwen",name:"回纹",category:"geometry",categoryName:"几何纹",patternClass:"pattern-grid",meaning:"回环不断，平安长久",meaningDetail:"回纹以连续折线构成循环结构，寓意周而复始、平安绵长。",story:"回纹常作为边饰出现，像给一块布加上秩序清晰的边界，也让主纹样更有仪式感。",era:"明清",usage:"边饰、帐檐、器物装饰",technique:Mn,modernUse:["网页边框","包装腰封","导视系统"],relatedIds:["shouzi","fangsheng","yu-lian"],tags:["回纹","平安","几何","边饰"]},{id:"fangsheng",name:"方胜纹",category:"geometry",categoryName:"几何纹",patternClass:"pattern-diamond",meaning:"同心相连，方正有序",meaningDetail:"方胜纹由菱形或方形连续组合，象征连接、守护与稳定。",story:"几何纹在蓝印花布中很适合大面积铺陈，蓝白节奏明确，也方便今天转译成数字图形。",era:"明清",usage:"包袱布、桌布、服饰底纹",technique:Mn,modernUse:["品牌辅助纹样","桌垫","网页背景"],relatedIds:["huiwen","pan-chang","chanzhi-lian"],tags:["方胜","几何","秩序","现代"]},{id:"pan-chang",name:"盘长纹",category:"geometry",categoryName:"几何纹",patternClass:"pattern-knot",meaning:"连绵不绝，福运长久",meaningDetail:"盘长纹线条回环不断，是传统吉祥符号中关于延续和连接的表达。",story:"盘长纹很像一条不断回到自身的路，适合表达家族、手艺和地方记忆的延续。",era:"明清",usage:"边框、礼布、门帘",technique:Mn,modernUse:["纪念票券","包装纹样","交互背景"],relatedIds:["huiwen","fangsheng","wufu"],tags:["盘长","几何","延续","福运"]}],un=Lg.map((n,e)=>{var t;return{...n,previewImage:(t=Ui[e%Ui.length])==null?void 0:t.src}}),Ig={class:"site-header"},Ug=["onClick"],Ng={class:"header-actions"},Fg={__name:"SiteHeader",props:{routeName:{type:String,required:!0},routePath:{type:String,required:!0}},emits:["navigate"],setup(n,{emit:e}){const t=e,i=et(!1);function s(r){i.value=!1,t("navigate",r)}return(r,a)=>(le(),ye("header",Ig,[m("button",{class:"brand",type:"button",onClick:a[0]||(a[0]=o=>s("/"))},[...a[3]||(a[3]=[m("img",{class:"brand-logo",src:Bf,alt:"大临蓝印 logo"},null,-1),m("strong",null,"大临蓝印",-1)])]),m("nav",{class:Tt({open:i.value})},[(le(!0),ye(it,null,vt(pe(Dg),o=>(le(),ye("button",{key:o.path,type:"button",class:Tt({active:n.routePath===o.path||o.path==="/library"&&n.routeName==="pattern"||o.path==="/find-blue"&&n.routePath.startsWith("/find-blue")}),onClick:l=>s(o.path)},he(o.label),11,Ug))),128))],2),m("div",Ng,[m("button",{class:"icon-button",type:"button","aria-label":"搜索",onClick:a[1]||(a[1]=o=>s("/library"))},[Ce(pe(Gf),{size:19})]),m("button",{class:"icon-button menu-button",type:"button","aria-label":"菜单",onClick:a[2]||(a[2]=o=>i.value=!i.value)},[i.value?(le(),Ct(pe(Ys),{key:1,size:20})):(le(),Ct(pe(Sg),{key:0,size:20}))])])]))}};function Og(){const n=et(window.location.pathname),e=yt(()=>n.value==="/library"?"library":n.value.startsWith("/pattern/")?"pattern":n.value==="/heritage"?"heritage":n.value==="/find-blue"?"find-menu":n.value==="/find-blue/card"?"find-card":n.value==="/find-blue/game"?"find-game":n.value==="/patternx"?"patternx":"home");function t(s){n.value!==s&&(window.history.pushState({},"",s),n.value=window.location.pathname),window.scrollTo({top:0,behavior:"smooth"})}function i(){n.value=window.location.pathname}return sr(()=>{window.addEventListener("popstate",i)}),gs(()=>{window.removeEventListener("popstate",i)}),{routeName:e,routePath:n,navigate:t}}const Xr=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},Bg={class:"blue-card-studio"},kg={key:0,class:"quiz-panel"},zg={class:"quiz-progress"},Hg={class:"quiz-question"},Vg={class:"quiz-options"},Gg=["onClick"],Wg={key:1,class:"card-preview-panel"},Xg=["src","alt"],$g={class:"personality-card-copy"},jg={class:"selected-tags"},qg={class:"studio-actions result-actions"},Yg={__name:"BlueCardStudio",setup(n){const e=et([]),t=et(""),i=[{title:"旅行到大临村，你最先被什么吸引？",options:[{text:"老街、河道和安静的生活气息",trait:"steady"},{text:"工坊里一双双正在制作的手",trait:"warm"},{text:"蓝白纹样里不断重复的秩序",trait:"wise"},{text:"可以亲手体验的新鲜感",trait:"free"}]},{title:"面对一件需要耐心完成的事，你通常会？",options:[{text:"按步骤慢慢推进",trait:"steady"},{text:"先理解它背后的意义",trait:"wise"},{text:"边做边找新的方法",trait:"free"},{text:"希望和身边人一起完成",trait:"warm"}]},{title:"你更喜欢哪一种蓝印花布寓意？",options:[{text:"平安长久",trait:"steady"},{text:"花开富贵",trait:"joyful"},{text:"生生不息",trait:"resilient"},{text:"自在生长",trait:"free"}]},{title:"朋友眼中的你更接近？",options:[{text:"可靠，能让人安心",trait:"steady"},{text:"热情，愿意照顾别人",trait:"warm"},{text:"清醒，善于观察判断",trait:"wise"},{text:"有趣，喜欢尝试变化",trait:"free"}]},{title:"如果把一天交给你安排，你会选择？",options:[{text:"走一条熟悉但舒服的路线",trait:"steady"},{text:"约上亲友一起吃饭聊天",trait:"warm"},{text:"看展、读资料、慢慢理解一件事",trait:"wise"},{text:"临时出发，遇见什么算什么",trait:"free"}]},{title:"你希望这张蓝印卡给你什么力量？",options:[{text:"稳稳向前",trait:"steady"},{text:"被爱与好运围绕",trait:"joyful"},{text:"在低谷里继续生长",trait:"resilient"},{text:"保持心里的清明",trait:"wise"}]},{title:"看到复杂纹样时，你会先注意到？",options:[{text:"边框和对称结构",trait:"steady"},{text:"花朵与枝蔓的生命感",trait:"resilient"},{text:"里面藏着的祝福符号",trait:"joyful"},{text:"它可以被重新设计的可能",trait:"free"}]},{title:"离开大临村时，你最想带走？",options:[{text:"一份安定的记忆",trait:"steady"},{text:"一份给家人的祝福",trait:"warm"},{text:"一份继续探索的灵感",trait:"free"},{text:"一份关于传统的理解",trait:"wise"}]}],s={steady:{title:"静水守心型",patternId:"huiwen",blessing:"愿你岁岁平安，步履从容，心中常有安定的蓝。",summary:"你重视秩序、稳定和长久的陪伴。适合你的蓝印纹样，像回纹一样周而复始，把平安与耐心织进日常。"},warm:{title:"暖枝相伴型",patternId:"shiliu",blessing:"愿你所到之处皆有温情，家人团圆，福气生长。",summary:"你很在意人与人之间的连接，也愿意把好运分享给身边的人。石榴团圆纹适合这种温暖、丰足的性格。"},wise:{title:"清蓝观照型",patternId:"chanzhi-lian",blessing:"愿你心有清明，见微知著，在纷繁里保持自己的判断。",summary:"你喜欢理解事物背后的脉络，安静却有力量。缠枝莲纹的连绵结构，像你对世界持续而细致的观察。"},free:{title:"风蝶自在型",patternId:"hudie",blessing:"愿你自由生长，所行皆有新意，所遇皆成风景。",summary:"你愿意尝试、变化，也愿意让生活保持弹性。蝶恋花纹轻盈灵动，适合你的自在与好奇。"},resilient:{title:"青藤生生型",patternId:"pan-chang",blessing:"愿你穿过风雨仍能生长，福运绵延，心力不断。",summary:"你有韧性，遇到困难也会慢慢找到出路。盘长纹回环不绝，正适合这种持续向前的生命力。"},joyful:{title:"喜花迎福型",patternId:"mudan",blessing:"愿你花开富贵，喜气常在，每一天都有热闹的好光景。",summary:"你容易被美好、庆祝和丰盛的气氛打动。牡丹团花纹饱满明亮，适合你的喜悦和好运感。"}},r=yt(()=>Math.min(e.value.length,i.length-1)),a=yt(()=>i[r.value]),o=yt(()=>e.value.length===i.length),l=yt(()=>Math.round(e.value.length/i.length*100)),c=yt(()=>{var L;const y=e.value.reduce((w,E)=>(w[E.trait]=(w[E.trait]||0)+1,w),{});return((L=Object.entries(y).sort((w,E)=>E[1]-w[1])[0])==null?void 0:L[0])||"steady"}),u=yt(()=>s[c.value]),d=yt(()=>un.find(y=>y.id===u.value.patternId)||un[0]),h=yt(()=>e.value.map(y=>y.text)),p=yt(()=>`/assets/personality-card/${u.value.patternId}.jpg`);function v(y){o.value||(e.value=[...e.value,y],e.value.length===i.length&&g())}function M(){e.value=[],t.value=""}function g(){t.value=new Intl.DateTimeFormat("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(new Date)}function f(y){return String(y).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;")}function C(y,L,w,E,D,S){const b=[];for(let I=0;I<y.length;I+=E)b.push(y.slice(I,I+E));return b.map((I,U)=>`<text x="${L}" y="${w+U*D}" ${S}>${f(I)}</text>`).join("")}function R(){if(!o.value)return;const y=d.value,L=u.value,E=`
    <svg xmlns="http://www.w3.org/2000/svg" width="960" height="1280" viewBox="0 0 960 1280">
      <rect width="960" height="1280" fill="#f7f5f0"/>
      <rect x="64" y="64" width="832" height="1152" rx="34" fill="#1a3a5c"/>
      <g fill="#f7f5f0" opacity=".88">${Array.from({length:9}).map((I,U)=>Array.from({length:6}).map((N,W)=>{const ne=150+W*132,Y=150+U*78;return`<circle cx="${ne}" cy="${Y}" r="14"/><circle cx="${ne+22}" cy="${Y+22}" r="10"/><circle cx="${ne-22}" cy="${Y+22}" r="10"/>`}).join("")).join("")}</g>
      <rect x="112" y="680" width="736" height="420" rx="26" fill="#f7f5f0" opacity=".96"/>
      <text x="152" y="750" fill="#4a7ba7" font-size="24" font-family="sans-serif" font-weight="700" letter-spacing="4">DALIN BLUE CALICO</text>
      <text x="152" y="830" fill="#0d1f33" font-size="58" font-family="serif" font-weight="700">${f(L.title)}</text>
      <text x="152" y="900" fill="#1a3a5c" font-size="38" font-family="serif" font-weight="700">${f(y.name)}</text>
      ${C(L.blessing,152,960,18,36,'fill="#2c2c2c" font-size="28" font-family="sans-serif"')}
      <text x="152" y="1112" fill="#8a8580" font-size="22" font-family="sans-serif">生成时间：${f(t.value)}</text>
    </svg>`,D=new Blob([E],{type:"image/svg+xml;charset=utf-8"}),S=URL.createObjectURL(D),b=document.createElement("a");b.href=S,b.download=`大临蓝印-${L.title}-${y.name}.svg`,b.click(),URL.revokeObjectURL(S)}return(y,L)=>(le(),ye("div",Bg,[m("div",{class:Tt(["personality-layout",{complete:o.value}])},[o.value?Et("",!0):(le(),ye("section",kg,[m("div",zg,[m("span",null,he(e.value.length)+"/"+he(i.length),1),m("div",null,[m("i",{style:An({width:`${l.value}%`})},null,4)])]),m("div",Hg,[L[0]||(L[0]=m("p",{class:"eyebrow"},"Blue Personality Test",-1)),m("h3",null,he(a.value.title),1),m("div",Vg,[(le(!0),ye(it,null,vt(a.value.options,w=>(le(),ye("button",{key:w.text,type:"button",onClick:E=>v(w)},[Qe(he(w.text)+" ",1),Ce(pe(qn),{size:16})],8,Gg))),128))])])])),o.value?(le(),ye("section",Wg,[m("article",{class:Tt(["blue-personality-card",{ready:o.value}])},[m("img",{class:"blue-card-pattern",src:p.value,alt:d.value.name},null,8,Xg),m("div",$g,[L[1]||(L[1]=m("p",{class:"eyebrow"},"大临蓝印 · 性格纹样卡",-1)),m("h2",null,he(u.value.title),1),m("h3",null,he(d.value.name),1),m("p",null,he(u.value.blessing),1),m("div",jg,[(le(!0),ye(it,null,vt(h.value.slice(-3),w=>(le(),ye("span",{key:w},he(w),1))),128))]),m("small",null,he(t.value),1)])],2),m("div",qg,[m("button",{class:"primary-button",type:"button",onClick:R},[Ce(pe(zf),{size:18}),L[2]||(L[2]=Qe(" 下载保存卡片 ",-1))]),m("button",{class:"secondary-button",type:"button",onClick:M},[Ce(pe(Vf),{size:18}),L[3]||(L[3]=Qe(" 重新测试 ",-1))])])])):Et("",!0)],2)]))}},Kg=Xr(Yg,[["__scopeId","data-v-d30f0583"]]),Zg={class:"section top-section find-blue-card-page"},Jg={__name:"FindBlueCardPage",emits:["navigate"],setup(n){return(e,t)=>(le(),ye("section",Zg,[m("button",{class:"text-link back-link",type:"button",onClick:t[0]||(t[0]=i=>e.$emit("navigate","/find-blue"))},[Ce(pe(ds),{size:17}),t[1]||(t[1]=Qe(" 返回体验菜单 ",-1))]),t[2]||(t[2]=m("div",{class:"page-heading"},[m("p",{class:"eyebrow"},"Blue Personality Test"),m("h1",null,"专属蓝印性格卡"),m("p",null,"回答 8 个问题，生成与你性格相合的蓝印花布纹样、祝福语和可下载纪念卡。")],-1)),Ce(Kg)]))}},Qg="/assets/games/flip/card-back.jpg",e_={class:"memory-game"},t_={class:"game-sidebar"},n_={class:"game-stats"},i_={class:"game-layout"},s_={class:"board-shell"},r_=["onClick"],a_={class:"memory-card-inner"},o_={class:"memory-card-face memory-card-front"},l_=["src","alt"],c_={class:"knowledge-panel-card"},u_=["src","alt"],d_={class:"knowledge-panel-copy"},f_={key:0,class:"result-overlay"},h_={class:"result-card"},p_={class:"result-grid"},m_={__name:"PatternMemoryGame",setup(n){const e=[{id:"lion",name:"瑞狮纳福纹",category:"瑞兽纹",image:"/assets/games/flip/pattern-01.png",meaning:"镇宅纳福，吉庆安康",desc:"瑞狮纹常见于蓝印花布被面、门帘与嫁妆织物，借威严兽形寄托守护家宅、迎祥纳福的愿望。"},{id:"fish-lotus",name:"连年有余纹",category:"民俗纹样",image:"/assets/games/flip/pattern-02.jpg",meaning:"年年富足，阖家圆满",desc:"鱼与莲花谐音成意，是大临村传统被面经典纹样，适合表达丰收、团圆与绵延不断的生活祝福。"},{id:"peony",name:"牡丹富贵纹",category:"花草纹",image:"/assets/games/flip/pattern-03.jpg",meaning:"花开富贵，生活兴旺",desc:"牡丹纹以饱满花形表现富贵气象，蓝白留白之间呈现朴素而隆重的民间审美。"},{id:"pomegranate",name:"石榴多子纹",category:"花草纹",image:"/assets/games/flip/pattern-04.jpg",meaning:"多子多福，家族兴旺",desc:"石榴籽粒繁密，常被用于婚嫁和家用布饰，寓意人丁兴旺与福气延续。"},{id:"shou",name:"团寿吉祥纹",category:"福寿纹",image:"/assets/games/flip/pattern-05.jpg",meaning:"福寿绵长，平安顺遂",desc:"寿字与团形结构结合，讲究对称与秩序，是蓝印花布中辨识度很高的祝寿类纹样。"},{id:"butterfly",name:"蝶恋花纹",category:"花草纹",image:"/assets/games/flip/pattern-06.jpg",meaning:"美满相伴，春意常在",desc:"蝴蝶与花卉组合轻盈灵动，常用于表现生活中的喜悦、爱意与自然生机。"},{id:"crane",name:"仙鹤延年纹",category:"瑞兽纹",image:"/assets/games/flip/pattern-07.png",meaning:"延年益寿，清雅高洁",desc:"仙鹤在传统图像中象征长寿与高洁，蓝印花布用简练的蓝白块面保留其舒展姿态。"},{id:"gourd",name:"葫芦福禄纹",category:"民俗纹样",image:"/assets/games/flip/pattern-08.jpg",meaning:"福禄双全，辟邪纳祥",desc:"葫芦与福禄谐音，形体饱满，常被民间用来表达护佑、丰足与平安。"},{id:"plum",name:"梅开五福纹",category:"花草纹",image:"/assets/games/flip/pattern-09.jpg",meaning:"坚韧清雅，五福临门",desc:"梅花不畏寒霜，蓝印花布中的梅花纹通过枝蔓与花点变化表现坚韧品格。"},{id:"phoenix",name:"凤穿牡丹纹",category:"瑞兽纹",image:"/assets/games/flip/pattern-10.png",meaning:"吉祥华美，富贵和合",desc:"凤鸟与牡丹组合常见于喜庆织物，体现民间对婚姻美满与家业兴盛的祝愿。"},{id:"coin",name:"方胜盘长纹",category:"几何纹",image:"/assets/games/flip/pattern-11.jpg",meaning:"连续不断，事事如意",desc:"几何纹样重视连续构成，方胜与盘长结构适合作为边饰或满地纹，象征福泽不断。"},{id:"lotus",name:"莲花清廉纹",category:"花草纹",image:"/assets/games/flip/pattern-12.jpg",meaning:"清正雅洁，和美安宁",desc:"莲花纹以舒展花瓣和叶形构成画面中心，在蓝印工艺中呈现清爽、端正的视觉气质。"}],t={standard:{label:"进阶 12 张",pairs:6,cols:4}},i=et("standard"),s=et([]),r=et([]),a=et(0),o=et(0),l=et(0),c=et(!1),u=et(!1),d=et(null),h=et(!1);let p=null,v=null;const M=yt(()=>t[i.value].pairs),g=yt(()=>Math.ceil(s.value.length/t[i.value].cols)),f=yt(()=>({"--board-cols":String(t[i.value].cols),"--board-rows":String(g.value),gridTemplateColumns:`repeat(${t[i.value].cols}, minmax(0, 1fr))`,gridTemplateRows:`repeat(${g.value}, minmax(0, 1fr))`})),C=yt(()=>i.value==="standard"&&l.value<=55&&o.value<=10?"蓝印识纹达人":o.value<=16?"非遗纹样初学者":"初识大临蓝印");function R(U){const N=[...U];for(let W=N.length-1;W>0;W-=1){const ne=Math.floor(Math.random()*(W+1));[N[W],N[ne]]=[N[ne],N[W]]}return N}function y(U){const N=String(Math.floor(U/60)).padStart(2,"0"),W=String(U%60).padStart(2,"0");return`${N}:${W}`}function L(){c.value||(c.value=!0,p=window.setInterval(()=>{l.value+=1},1e3))}function w(){window.clearInterval(p),p=null}function E(){const U=R(e).slice(0,t[i.value].pairs);return R(U.flatMap(N=>[{...N,cardId:`${N.id}-a`,state:"hidden"},{...N,cardId:`${N.id}-b`,state:"hidden"}]))}function D(U=i.value){w(),window.clearTimeout(v),i.value=U,s.value=E(),r.value=[],a.value=0,o.value=0,l.value=0,c.value=!1,u.value=!1,d.value=null,h.value=!1}function S(){window.clearTimeout(v),d.value=null}function b(U){if(u.value)return;const N=s.value.find(W=>W.cardId===U);!N||N.state!=="hidden"||(L(),N.state="open",r.value=[...r.value,N],r.value.length===2&&(o.value+=1,I()))}function I(){const[U,N]=r.value;if(u.value=!0,U.id===N.id){window.setTimeout(()=>{s.value.forEach(W=>{(W.cardId===U.cardId||W.cardId===N.cardId)&&(W.state="matched")}),a.value+=1,d.value=U,window.clearTimeout(v),v=window.setTimeout(()=>{d.value=null},3e3),r.value=[],u.value=!1,a.value===M.value&&(w(),h.value=!0)},320);return}window.setTimeout(()=>{s.value.forEach(W=>{(W.cardId===U.cardId||W.cardId===N.cardId)&&(W.state="hidden")}),r.value=[],u.value=!1},760)}return gs(()=>{w(),window.clearTimeout(v)}),D(),(U,N)=>(le(),ye("div",e_,[m("aside",t_,[N[6]||(N[6]=m("div",{class:"game-title"},[m("p",{class:"eyebrow"},"Blue Calico Match"),m("h3",null,"蓝印纹样翻翻乐")],-1)),m("div",n_,[m("article",null,[Ce(pe(gg),{size:18}),N[2]||(N[2]=m("span",null,"用时",-1)),m("strong",null,he(y(l.value)),1)]),m("article",null,[N[3]||(N[3]=m("span",null,"步数",-1)),m("strong",null,he(o.value),1)]),m("article",null,[Ce(pe(Cg),{size:18}),N[4]||(N[4]=m("span",null,"配对",-1)),m("strong",null,he(a.value)+"/"+he(M.value),1)])]),m("button",{class:"secondary-button",type:"button",onClick:N[0]||(N[0]=W=>D())},[Ce(pe(Vf),{size:16}),N[5]||(N[5]=Qe(" 重新开始 ",-1))])]),m("section",i_,[m("div",s_,[m("div",{class:"board",style:An(f.value)},[(le(!0),ye(it,null,vt(s.value,W=>(le(),ye("button",{key:W.cardId,type:"button",class:Tt(["memory-card",[`state-${W.state}`]]),onClick:ne=>b(W.cardId)},[m("span",a_,[N[7]||(N[7]=m("span",{class:"memory-card-face memory-card-back"},[m("img",{class:"memory-card-back-image",src:Qg,alt:""})],-1)),m("span",o_,[m("img",{src:W.image,alt:W.name},null,8,l_)])])],10,r_))),128))],4)]),Ce(hc,{name:"knowledge-panel"},{default:Ja(()=>[d.value?(le(),ye("aside",{key:0,class:"knowledge-panel-overlay",onClick:S},[m("div",c_,[m("img",{src:d.value.image,alt:d.value.name},null,8,u_),m("div",d_,[N[8]||(N[8]=m("p",{class:"eyebrow"},"配对成功",-1)),m("h4",null,he(d.value.name),1),m("strong",null,he(d.value.meaning),1),m("p",null,he(d.value.desc),1),m("span",null,he(d.value.category),1)]),m("button",{type:"button",class:"knowledge-close","aria-label":"关闭纹样介绍",onClick:S},[Ce(pe(Ys),{size:18})])])])):Et("",!0)]),_:1})]),h.value?(le(),ye("div",f_,[m("div",h_,[N[11]||(N[11]=m("p",{class:"eyebrow"},"全部配对完成",-1)),m("h4",null,he(C.value),1),m("div",p_,[m("article",null,[N[9]||(N[9]=m("span",null,"本局用时",-1)),m("strong",null,he(y(l.value)),1)]),m("article",null,[N[10]||(N[10]=m("span",null,"总步数",-1)),m("strong",null,he(o.value),1)])]),m("p",null,"你完成了 "+he(M.value)+" 组蓝印花布纹样配对，在翻牌中记住了纹样名称、寓意和文化背景。",1),m("button",{class:"primary-button",type:"button",onClick:N[1]||(N[1]=W=>D())},"再来一局")])])):Et("",!0)]))}},g_=Xr(m_,[["__scopeId","data-v-56c02213"]]),__={class:"find-game-header"},v_={__name:"FindBlueGamePage",emits:["navigate"],setup(n){return sr(()=>{document.documentElement.classList.add("game-lock-scroll")}),gs(()=>{document.documentElement.classList.remove("game-lock-scroll")}),(e,t)=>(le(),ye("section",{class:"section top-section find-game-page",onWheel:t[1]||(t[1]=hi(()=>{},["prevent"]))},[m("div",__,[m("button",{class:"text-link back-link",type:"button",onClick:t[0]||(t[0]=i=>e.$emit("navigate","/find-blue"))},[Ce(pe(ds),{size:17}),t[2]||(t[2]=Qe(" 返回体验菜单 ",-1))]),t[3]||(t[3]=m("div",{class:"page-heading"},[m("p",{class:"eyebrow"},"Pattern Memory Game"),m("h1",null,"蓝印纹样翻翻乐")],-1))]),Ce(g_)],32))}},x_={class:"find-menu-page"},y_={class:"find-menu-stage"},b_={class:"find-carousel","aria-label":"互动体验轮播菜单"},M_=["onClick"],S_=["src","alt"],E_={key:1,class:"card-cover-intro"},T_={key:2,class:"card-copy"},A_={key:3,class:"card-action"},w_={class:"find-menu-footer"},C_={class:"find-menu-actions"},R_={class:"find-menu-dots"},P_=["aria-label","onClick"],D_={__name:"FindBluePage",emits:["navigate"],setup(n,{emit:e}){const t=e,i=[{key:"card",title:"专属蓝印卡",subtitle:"选择你的寓意",description:"从平安、富贵、长寿、团圆中选取心意，生成属于你的蓝印纹样卡。",path:"/find-blue/card",cover:"/assets/find-blue/card-cover.png",accent:"柔和生成",status:"available"},{key:"game",title:"纹样翻翻乐",subtitle:"翻牌识纹样",description:"在配对互动里认识大临村蓝印花布的经典图案，边玩边记住它们的寓意。",path:"/find-blue/game",cover:"/assets/find-blue/memory-cover.png",accent:"互动挑战",status:"available"},{key:"coming-soon",title:"更多体验",subtitle:"持续更新中",description:"后续将加入更多与蓝印花布相关的互动体验，形成完整的数字游览路径。",path:"",cover:"",accent:"敬请期待",status:"coming"}],s=et(1);function r(){s.value=(s.value-1+i.length)%i.length}function a(){s.value=(s.value+1)%i.length}function o(c){const u=(c-s.value+i.length)%i.length;return u===0?"is-center":u===1?"is-right":"is-left"}function l(c){if(c!==s.value){s.value=c;return}i[c].status==="available"&&t("navigate",i[c].path)}return(c,u)=>(le(),ye("section",x_,[u[2]||(u[2]=m("div",{class:"find-menu-hero"},[m("p",{class:"find-menu-kicker"},"SELECT YOUR BLUE EXPERIENCE"),m("h1",null,"寻找你的蓝")],-1)),m("div",y_,[m("button",{class:"carousel-arrow left",type:"button","aria-label":"上一个体验",onClick:r},[Ce(pe(ds),{size:24})]),m("div",b_,[(le(),ye(it,null,vt(i,(d,h)=>m("button",{key:d.key,type:"button",class:Tt(["find-carousel-card",[o(h),{disabled:d.status!=="available","has-cover":!!d.cover}]]),onClick:p=>l(h)},[d.cover?(le(),ye("img",{key:0,class:"card-cover-image",src:d.cover,alt:d.title},null,8,S_)):Et("",!0),u[0]||(u[0]=m("span",{class:"card-overlay"},null,-1)),u[1]||(u[1]=m("span",{class:"card-noise"},null,-1)),d.cover?(le(),ye("span",E_,[m("b",null,he(d.subtitle),1),m("small",null,he(d.description),1)])):Et("",!0),d.cover?Et("",!0):(le(),ye("span",T_,[m("i",null,he(d.accent),1),m("strong",null,he(d.title),1),m("em",null,he(d.subtitle),1),m("small",null,he(d.description),1)])),d.cover?Et("",!0):(le(),ye("span",A_,[(le(),Ct(Nr(d.key==="card"?pe(fs):d.key==="game"?pe(xg):pe(fs)),{size:18})),Qe(" "+he(d.status==="available"?"点击进入":"即将开放"),1)]))],10,M_)),64))]),m("button",{class:"carousel-arrow right",type:"button","aria-label":"下一个体验",onClick:a},[Ce(pe(qn),{size:24})])]),m("div",w_,[m("div",C_,[m("div",R_,[(le(),ye(it,null,vt(i,(d,h)=>m("button",{key:d.key,type:"button",class:Tt({active:s.value===h}),"aria-label":`切换到${d.title}`,onClick:p=>s.value=h},null,10,P_)),64))])])])]))}},L_=Xr(D_,[["__scopeId","data-v-c506155d"]]),I_={class:"heritage-page section top-section"},U_={class:"heritage-hero heritage-visitor-hero"},N_={class:"page-heading heritage-visitor-copy"},F_={class:"heritage-hero-actions"},O_={class:"heritage-visitor-focus"},B_={class:"heritage-section"},k_={class:"heritage-story-grid"},z_={class:"heritage-section heritage-visit-section"},H_={class:"heritage-visit-path"},V_={class:"heritage-section"},G_={class:"heritage-process"},W_={class:"heritage-section"},X_={class:"heritage-gallery"},$_=["src","alt"],j_="/assets/heritage/dalin-workshop.png",q_={__name:"HeritagePage",emits:["navigate"],setup(n,{emit:e}){const t=e,i=[{src:"/assets/heritage/artisan-at-work.jpeg",alt:"传承人在花版上进行刮浆工序",caption:"手上的工艺：刮浆与花版"},{src:"/assets/heritage/artisan-portrait.png",alt:"蓝印花布传承人与工坊布样",caption:"工坊里的传承人和布样"},{src:"/assets/heritage/dalin-workshop.png",alt:"大临村蓝印花布工坊外景",caption:"大临村工坊与晾晒布样"},{src:"/assets/heritage/archive-pattern-table.png",alt:"桌面上的蓝印花布样品",caption:"一桌蓝白：纹样与日用布品"},{src:"/assets/heritage/archive-table-runner.png",alt:"蓝印花布桌旗",caption:"传统纹样进入当代日用"},{src:"/assets/heritage/archive-craft-store.png",alt:"游客挑选蓝印花布文创",caption:"在工坊挑选一片属于自己的蓝"},{src:"/assets/heritage/archive-visitor-demo.png",alt:"游客观看蓝印花布体验演示",caption:"围在工作台前看见手艺"},{src:"/assets/heritage/archive-cultural-products.png",alt:"蓝印花布文创产品与花版",caption:"从花版到可带走的日常物件"},{src:"/assets/heritage/archive-tote-bag.png",alt:"蓝印花布帆布袋",caption:"把蓝白纹样带进生活"},{src:"/assets/heritage/archive-apparel.png",alt:"蓝印花布服装与围裙",caption:"蓝印花布的新衣与新用法"},{src:"/assets/heritage/archive-drying.png",alt:"晾晒中的蓝印花布",caption:"阳光下定格的靛蓝与素白"},{src:"/assets/heritage/archive-family-workshop.png",alt:"儿童参与蓝印花布体验",caption:"亲子体验：让手艺被下一代看见"},{src:"/assets/heritage/archive-drying-tour.png",alt:"游客参观蓝印花布晾晒场景",caption:"走进布样之间，听见村庄的故事"}],s=[{value:"01",label:"先看人",text:"从传承人的手、工具和故事进入蓝印花布。"},{value:"02",label:"再看工艺",text:"理解刻版、防染、入靛、刮白这些关键步骤。"},{value:"03",label:"最后看纹样",text:"把花草、瑞兽、吉祥符号和江南生活联系起来。"}],r=[{icon:yg,title:"匠人 / 传承故事",text:"大临村的蓝印花布先存在于人的手上。老一辈把纹样、浆料比例、入靛火候和晾晒经验留在日复一日的制作里，年轻人则用展览、文创和数字方式让它继续被看见。"},{icon:Hf,title:"制作过程",text:"一块布从画稿到成品，需要经过刻版、刮浆、染色、刮白、清洗、晾晒。每一步都不只是技术，也是一种和时间相处的方式。"},{icon:pg,title:"相关图片资料",text:"图片资料记录布样、工具、纹样细节和村落现场。游客可以通过这些图像，把展柜里的蓝白纹样重新放回真实生活。"},{icon:kf,title:"文化价值",text:"蓝印花布连接江南日用审美、礼俗祝福、女性手工经验和地方记忆。它既是一匹布，也是一座村庄可以向外讲述的文化名片。"}],a=[{icon:bg,title:"来到大临村",text:"先认识蓝印花布与村落之间的关系，知道这门手艺为什么在这里生长。"},{icon:Rg,title:"听见传承人",text:"从口述故事里理解手艺人的坚持、家庭记忆和代际传承。"},{icon:Tg,title:"走完工艺线",text:"按制作顺序观看工序，把“蓝”和“白”如何出现看明白。"},{icon:fs,title:"带走一片蓝",text:"在纹样库、互动卡片或文创体验中，选择一个属于自己的蓝印记忆。"}];return(o,l)=>(le(),ye("section",I_,[m("div",U_,[m("div",N_,[l[3]||(l[3]=m("p",{class:"eyebrow"},"People Story Of Dalin Blue Calico",-1)),l[4]||(l[4]=m("h1",null,"她与蓝",-1)),l[5]||(l[5]=m("p",null,"给来到大临村的游客看的传承故事：看见做布的人，理解靛蓝的工艺，也把一段江南记忆带回去。",-1)),m("div",F_,[m("button",{class:"primary-button",type:"button",onClick:l[0]||(l[0]=c=>t("navigate","/library"))},[l[2]||(l[2]=Qe(" 去看纹样 ",-1)),Ce(pe(qn),{size:18})]),m("button",{class:"secondary-button",type:"button",onClick:l[1]||(l[1]=c=>t("navigate","/find-blue"))}," 寻找你的蓝 ")])]),m("div",{class:"heritage-hero-image heritage-visitor-image"},[m("img",{src:j_,alt:"大临村蓝印花布现场资料"}),l[6]||(l[6]=m("span",null,"大临村蓝印花布 · 人物与工艺故事",-1))])]),m("div",O_,[(le(),ye(it,null,vt(s,c=>m("article",{key:c.value},[m("strong",null,he(c.value),1),m("span",null,he(c.label),1),m("p",null,he(c.text),1)])),64))]),m("section",B_,[l[7]||(l[7]=m("div",{class:"section-title-row"},[m("div",null,[m("p",{class:"eyebrow"},"For Visitors"),m("h2",null,"这页想带游客看什么")])],-1)),m("div",k_,[(le(),ye(it,null,vt(r,c=>m("article",{key:c.title},[(le(),Ct(Nr(c.icon),{size:24})),m("h2",null,he(c.title),1),m("p",null,he(c.text),1)])),64))])]),m("section",z_,[l[8]||(l[8]=m("div",{class:"section-title-row"},[m("div",null,[m("p",{class:"eyebrow"},"Village Visit Path"),m("h2",null,"游客在村里的一条观看路径")])],-1)),m("div",H_,[(le(),ye(it,null,vt(a,(c,u)=>m("article",{key:c.title},[m("span",null,he(String(u+1).padStart(2,"0")),1),(le(),Ct(Nr(c.icon),{size:24})),m("strong",null,he(c.title),1),m("p",null,he(c.text),1)])),64))])]),m("section",V_,[l[9]||(l[9]=m("div",{class:"section-title-row"},[m("div",null,[m("p",{class:"eyebrow"},"Craft Process"),m("h2",null,"一块布经过的路")])],-1)),m("div",G_,[(le(!0),ye(it,null,vt(pe(Xf),(c,u)=>(le(),ye("article",{key:c.title},[m("span",null,he(String(u+1).padStart(2,"0")),1),m("strong",null,he(c.title),1),m("p",null,he(c.text),1)]))),128))])]),m("section",W_,[l[10]||(l[10]=m("div",{class:"section-title-row"},[m("div",null,[m("p",{class:"eyebrow"},"Image Archive"),m("h2",null,"相关图片资料")])],-1)),m("div",X_,[(le(),ye(it,null,vt(i,c=>m("figure",{key:c.src},[m("img",{src:c.src,alt:c.alt,loading:"lazy",decoding:"async"},null,8,$_),m("figcaption",null,he(c.caption),1)])),64))])]),l[11]||(l[11]=m("section",{class:"heritage-value"},[m("p",{class:"eyebrow"},"Cultural Value"),m("h2",null,"让游客带走的不只是照片"),m("p",null,"大临村蓝印花布的价值，不只在“好看”，也在它把地方、家庭、祝福和手艺连接起来。游客看完这一页，应该能记住：蓝印花布是一种生活里的美，也是一代代人共同守住的村庄记忆。")],-1))]))}},Y_="/assets/heritage/dalin-workshop.png",K_="/assets/home/dalin-workshop-ambience.mp4",Z_="/assets/home-craft-gray.png",J_="/assets/home-craft-color.png",Q_={class:"section-dot-nav","aria-label":"首页模块导航"},e0=["onClick"],t0={__name:"HomeSectionNav",props:{sections:{type:Array,required:!0},activeIndex:{type:Number,required:!0}},emits:["select"],setup(n){return(e,t)=>(le(),ye("nav",Q_,[(le(!0),ye(it,null,vt(n.sections,(i,s)=>(le(),ye("button",{key:i.id,type:"button",class:Tt({active:n.activeIndex===s}),onClick:r=>e.$emit("select",s)},[t[0]||(t[0]=m("span",null,null,-1)),m("em",null,he(i.label),1)],10,e0))),128))]))}},n0={class:"pattern-card"},i0={class:"tag"},pc={__name:"PatternCard",props:{pattern:{type:Object,required:!0}},emits:["open","create"],setup(n){return(e,t)=>(le(),ye("article",n0,[m("button",{class:"pattern-card-main",type:"button",onClick:t[0]||(t[0]=i=>e.$emit("open",n.pattern))},[m("span",{class:Tt(["pattern-thumb",n.pattern.previewImage?"pattern-thumb-real":n.pattern.patternClass]),style:An(n.pattern.previewImage?{backgroundImage:`url(${n.pattern.previewImage})`}:void 0)},null,6),m("span",i0,he(n.pattern.categoryName),1),m("strong",null,he(n.pattern.name),1),m("em",null,he(n.pattern.meaning),1)]),m("button",{class:"pattern-card-create",type:"button",onClick:t[1]||(t[1]=i=>e.$emit("create",n.pattern))},"用于 3D 创作")]))}},s0={class:"home-panel hero-panel"},r0={class:"hero-content"},a0={class:"home-panel intro-panel"},o0={class:"home-panel-inner intro-section"},l0={class:"intro-side"},c0={class:"stat-index"},u0={class:"stat-value"},d0={class:"stat-meta"},f0=["src"],h0={class:"intro-material-overlay"},p0={class:"home-panel"},m0={class:"home-panel-inner"},g0={class:"section-title-row"},_0={class:"category-grid"},v0=["onClick"],x0={class:"category-copy"},y0={class:"home-panel craft-panel"},b0={class:"home-panel-inner craft-spotlight-layout"},M0={key:0,class:"craft-poster"},S0={key:1,class:"craft-spotlight-tip"},E0={class:"home-panel"},T0={class:"home-panel-inner"},A0={class:"section-title-row"},w0={class:"pattern-slider"},C0={class:"home-panel cta-panel"},bo=140,R0=16/9,yu={__name:"HomePage",emits:["navigate","open-pattern","select-category","create-pattern"],setup(n,{emit:e}){const t=e,i=et(0),s=et(null),r=et({x:0,y:0,r:0,active:!1}),a=et(!1);let o=!1;const l=[{id:"chanzhi-lian",previewImage:"/assets/patterns/preview-plant.png"},{id:"huiwen",previewImage:"/assets/patterns/preview-geometry.png"},{id:"hudie",previewImage:"/assets/patterns/preview-animal.png"},{id:"shouzi",previewImage:"/assets/patterns/preview-auspicious.png"}],c=yt(()=>l.map(({id:w,previewImage:E})=>{const D=un.find(S=>S.id===w);return D?{...D,previewImage:E}:null}).filter(Boolean)),u=yt(()=>Ui.find(w=>w.type==="jpg")||Ui[0]),d=[{index:"01",value:"128",unit:"枚",label:"收录纹样",english:"Pattern Archive"},{index:"02",value:"6",unit:"道",label:"工艺步骤",english:"Craft Process"},{index:"03",value:"800+",unit:"年",label:"传承历史",english:"Living Heritage"}],h=[{id:"hero",label:"大临蓝印"},{id:"intro",label:"项目引言"},{id:"categories",label:"纹样分类"},{id:"craft",label:"工艺时间轴"},{id:"featured",label:"精选纹样"},{id:"cta",label:"寻找你的蓝"}];function p(w){i.value=Math.min(Math.max(w,0),h.length-1)}function v(w){Math.abs(w.deltaY)<8||o||(w.preventDefault(),o=!0,p(i.value+(w.deltaY>0?1:-1)),window.setTimeout(()=>{o=!1},720))}function M(w){t("select-category",w),t("navigate","/library")}function g(){const w=s.value;if(!w)return null;const E=w.clientWidth,D=w.clientHeight;if(!E||!D)return null;const S=E/D,b=R0;if(S>b){const U=D*b;return{left:(E-U)/2,top:0,width:U,height:D}}const I=E/b;return{left:0,top:(D-I)/2,width:E,height:I}}function f(){const w=g();w&&(r.value={x:w.left+w.width/2,y:w.top+w.height/2,r:0,active:!1})}function C(){a.value=!0,window.requestAnimationFrame(f)}function R(){a.value=!1,window.requestAnimationFrame(f)}function y(w){if(!a.value)return;const E=s.value,D=g();if(!E||!D)return;const S=E.getBoundingClientRect(),b=w.clientX-S.left,I=w.clientY-S.top,U=Math.min(bo,D.width/2),N=Math.min(bo,D.height/2),W=Math.min(Math.max(b,D.left+U),D.left+D.width-U),ne=Math.min(Math.max(I,D.top+N),D.top+D.height-N);r.value={x:W,y:ne,r:bo,active:!0}}function L(){f()}return sr(()=>{document.documentElement.classList.add("home-lock-scroll"),window.addEventListener("resize",f,{passive:!0}),window.requestAnimationFrame(f)}),gs(()=>{document.documentElement.classList.remove("home-lock-scroll"),window.removeEventListener("resize",f)}),(w,E)=>(le(),ye("section",{class:"home-page",onWheel:v},[Ce(t0,{sections:h,"active-index":i.value,onSelect:p},null,8,["active-index"]),m("div",{class:"home-stage",style:An({transform:`translateY(-${i.value*100}vh)`})},[m("section",s0,[E[13]||(E[13]=m("video",{class:"hero-video",autoplay:"",muted:"",loop:"",playsinline:"",poster:Y_,"aria-hidden":"true"},[m("source",{src:K_,type:"video/mp4"})],-1)),E[14]||(E[14]=m("div",{class:"hero-pattern pattern-floral"},null,-1)),m("div",r0,[E[11]||(E[11]=m("p",{class:"eyebrow"},"浙江嘉兴桐乡市大临村",-1)),m("h1",null,[(le(),ye(it,null,vt("大临蓝印",(D,S)=>m("span",{key:`${D}-${S}`,style:An({animationDelay:`${S*50}ms`})},he(D),5)),64))]),E[12]||(E[12]=m("p",{class:"hero-subtitle"},"千年药斑布，一靛染江南",-1)),m("button",{class:"primary-button",type:"button",onClick:E[0]||(E[0]=D=>w.$emit("navigate","/library"))},[E[10]||(E[10]=Qe(" 探索纹样 ",-1)),Ce(pe(qn),{size:18})])]),m("button",{class:"scroll-cue",type:"button",onClick:E[1]||(E[1]=D=>p(1))},[Ce(pe(hr),{size:24})])]),m("section",a0,[m("div",o0,[E[18]||(E[18]=m("div",{class:"section-copy"},[m("p",{class:"eyebrow"},"Project Introduction"),m("h2",null,"以数字之名，让靛蓝重新流动"),m("p",null,"大临村，浙江桐乡石门镇的一座江南古村，是蓝印花布的发源地之一。这里的一布一纹，承载着从宋元走来的防染智慧。我们以数字之名，让靛蓝重新流动。")],-1)),m("div",l0,[m("div",{class:Tt(["stats",{"is-visible":i.value===1}]),"aria-label":"蓝印花布数字档案概览"},[(le(),ye(it,null,vt(d,D=>m("article",{key:D.index},[m("span",c0,he(D.index),1),m("div",u0,[m("strong",null,he(D.value),1),m("small",null,he(D.unit),1)]),m("div",d0,[m("span",null,he(D.label),1),m("em",null,he(D.english),1)])])),64))],2),m("button",{class:"intro-material-card",type:"button",onClick:E[2]||(E[2]=D=>w.$emit("navigate","/library"))},[m("img",{src:u.value.src,alt:"本地采集的蓝印花布布面纹样",loading:"lazy",decoding:"async"},null,8,f0),m("span",h0,[E[16]||(E[16]=m("small",null,"LOCAL MATERIAL ARCHIVE",-1)),E[17]||(E[17]=m("strong",null,"82 张采集素材",-1)),m("em",null,[E[15]||(E[15]=Qe("进入纹样图录 ",-1)),Ce(pe(qn),{size:16})])])])])]),m("button",{class:"scroll-cue scroll-cue-on-light",type:"button","aria-label":"继续浏览纹样分类",onClick:E[3]||(E[3]=D=>p(2))},[Ce(pe(hr),{size:24})])]),m("section",p0,[m("div",m0,[m("div",g0,[E[20]||(E[20]=m("div",null,[m("p",{class:"eyebrow"},"Pattern System"),m("h2",null,"四大纹样分类")],-1)),m("button",{class:"text-link",type:"button",onClick:E[4]||(E[4]=D=>w.$emit("navigate","/library"))},[E[19]||(E[19]=Qe(" 进入纹库 ",-1)),Ce(pe(qn),{size:16})])]),m("div",_0,[(le(!0),ye(it,null,vt(pe(Wf),D=>(le(),ye("button",{key:D.key,type:"button",onClick:S=>M(D.key)},[m("span",{class:Tt(["category-image",D.image?["category-image-real",`category-image-${D.key}`]:D.patternClass]),style:An({backgroundImage:`url(${D.image})`})},null,6),m("span",x0,[m("strong",null,he(D.title),1),m("em",null,he(D.description),1),E[21]||(E[21]=m("i",null,"查看全部 →",-1))])],8,v0))),128))])]),m("button",{class:"scroll-cue scroll-cue-on-light",type:"button","aria-label":"继续浏览工艺流程",onClick:E[5]||(E[5]=D=>p(3))},[Ce(pe(hr),{size:24})])]),m("section",y0,[m("div",b0,[Et("",!0),m("div",{ref_key:"craftBoardRef",ref:s,class:"craft-spotlight-board",style:An({"--spotlight-x":`${r.value.x}px`,"--spotlight-y":`${r.value.y}px`,"--spotlight-r":`${r.value.r}px`}),onMousemove:y,onMouseleave:L},[a.value?Et("",!0):(le(),ye("div",M0,[m("div",{class:"craft-poster-inner"},[E[23]||(E[23]=m("p",{class:"eyebrow"},"Craft Timeline",-1)),E[24]||(E[24]=m("h2",null,"从刻版到晾晒，一块布要走过六道手艺",-1)),E[25]||(E[25]=m("p",null,"点击海报开启探照体验。彩色会在鼠标所到之处显现，帮助游客直观看到大临蓝印花布六道工序的完整流转。",-1)),m("button",{class:"primary-button craft-start-button",type:"button",onClick:C},"开启探照")])])),E[28]||(E[28]=m("img",{class:"craft-board-image grayscale",src:Z_,alt:"craft grayscale board"},null,-1)),E[29]||(E[29]=m("img",{class:"craft-board-image color",src:J_,alt:"craft color board"},null,-1)),m("div",{class:Tt(["craft-spotlight-glow",{active:r.value.active}])},null,2),a.value?(le(),ye("div",S0,[E[26]||(E[26]=m("span",null,"探照工艺图",-1)),E[27]||(E[27]=m("em",null,"鼠标移动到哪里，哪里就恢复彩色",-1)),m("button",{class:"craft-restart-button",type:"button",onClick:hi(R,["stop"])},"重新开始")])):Et("",!0)],36)]),m("button",{class:"scroll-cue",type:"button","aria-label":"继续浏览精选纹样",onClick:E[6]||(E[6]=D=>p(4))},[Ce(pe(hr),{size:24})])]),m("section",E0,[m("div",T0,[m("div",A0,[E[30]||(E[30]=m("div",null,[m("p",{class:"eyebrow"},"Selected Patterns"),m("h2",null,"精选纹样预览")],-1)),m("button",{class:"primary-button compact",type:"button",onClick:E[7]||(E[7]=D=>w.$emit("navigate","/library"))},"进入纹库")]),m("div",w0,[(le(!0),ye(it,null,vt(c.value,D=>(le(),Ct(pc,{key:D.id,pattern:D,onOpen:S=>w.$emit("open-pattern",D),onCreate:S=>w.$emit("create-pattern",D)},null,8,["pattern","onOpen","onCreate"]))),128))])]),m("button",{class:"scroll-cue scroll-cue-on-light",type:"button","aria-label":"继续寻找你的蓝",onClick:E[8]||(E[8]=D=>p(5))},[Ce(pe(hr),{size:24})])]),m("section",C0,[E[32]||(E[32]=m("p",{class:"eyebrow"},"Find Your Blue",-1)),E[33]||(E[33]=m("h2",null,"你的蓝，是什么？",-1)),E[34]||(E[34]=m("p",null,"选择几个关键词，生成一张属于你的大临蓝印纹样卡。",-1)),m("button",{class:"primary-button",type:"button",onClick:E[9]||(E[9]=D=>w.$emit("navigate","/find-blue"))},[E[31]||(E[31]=Qe(" 寻找你的蓝 ",-1)),Ce(pe(fs),{size:18})])])],4)],32))}},P0={class:"material-gallery-heading"},D0={class:"material-gallery-count"},L0={class:"material-gallery-toolbar"},I0={class:"material-gallery-filters",role:"group","aria-label":"素材类型筛选"},U0=["onClick"],N0={class:"material-gallery-note"},F0={class:"material-gallery-grid"},O0=["onClick"],B0={class:"material-tile-image"},k0=["src","alt"],z0={class:"material-tile-zoom"},H0={class:"material-tile-meta"},V0={class:"material-lightbox-content"},G0=["src"],W0={__name:"MaterialGallery",setup(n){const e=et("all"),t=et(null),i=[{key:"all",label:"全部素材"},{key:"png",label:"单纹样 / 刻版"},{key:"jpg",label:"布面 / 版样"}],s=yt(()=>e.value==="all"?Ui:Ui.filter(l=>l.type===e.value));function r(l){return l.type==="png"?"单纹样 / 刻版素材":"布面 / 版样素材"}function a(l){t.value=l}function o(){t.value=null}return(l,c)=>(le(),ye("section",{class:"material-gallery",onKeyup:Of(o,["esc"])},[m("div",P0,[c[1]||(c[1]=m("div",null,[m("p",{class:"eyebrow"},"Local Material Archive"),m("h2",null,"本地采集素材图录"),m("p",null,"先把采集到的纹样、边饰和布面资料完整保留下来，后续再逐张补充名称、寓意与来源。")],-1)),m("div",D0,[m("strong",null,he(pe(Ui).length),1),c[0]||(c[0]=m("span",null,"张本地素材",-1))])]),m("div",L0,[m("div",I0,[(le(),ye(it,null,vt(i,u=>m("button",{key:u.key,type:"button",class:Tt({active:e.value===u.key}),onClick:d=>e.value=u.key},he(u.label),11,U0)),64))]),m("span",N0,[Ce(pe(Hf),{size:16}),c[2]||(c[2]=Qe("仅使用本地文件",-1))])]),m("div",F0,[(le(!0),ye(it,null,vt(s.value,(u,d)=>(le(),ye("button",{key:u.id,class:"material-tile",type:"button",onClick:h=>a(u)},[m("span",B0,[m("img",{src:u.src,alt:`本地采集素材 ${d+1}`,loading:"lazy",decoding:"async"},null,8,k0),m("span",z0,[Ce(pe(Pg),{size:17})])]),m("span",H0,[m("strong",null,"素材 "+he(String(d+1).padStart(2,"0")),1),m("small",null,he(r(u)),1)])],8,O0))),128))]),t.value?(le(),ye("div",{key:0,class:"material-lightbox",onClick:hi(o,["self"])},[m("button",{class:"material-lightbox-close",type:"button","aria-label":"关闭素材预览",onClick:o},[Ce(pe(Ys),{size:22})]),m("figure",V0,[m("img",{src:t.value.src,alt:"本地采集素材大图"},null,8,G0),m("figcaption",null,[m("span",null,he(r(t.value)),1),m("small",null,"本地素材文件 · "+he(t.value.id),1)])])])):Et("",!0)],32))}},X0=Xr(W0,[["__scopeId","data-v-411e3d2f"]]),$0={class:"library-page section top-section"},j0={class:"page-heading"},q0={class:"library-tools"},Y0={class:"search-field"},K0={class:"filter-tabs"},Z0=["onClick"],J0={key:0,class:"library-grid"},Q0={key:1,class:"empty-state"},ev={__name:"LibraryPage",props:{initialCategory:{type:String,default:"all"}},emits:["open-pattern","create-pattern"],setup(n){const e=n,t=et(e.initialCategory),i=et(""),s=et(8),r=yt(()=>[{key:"all",name:"全部"},...Wf]),a=yt(()=>{const l=i.value.trim();return un.filter(c=>{const u=t.value==="all"||c.category===t.value,d=`${c.name}${c.categoryName}${c.meaning}${c.meaningDetail}${c.tags.join("")}`;return u&&(!l||d.includes(l))})}),o=yt(()=>a.value.slice(0,s.value));return $n(()=>e.initialCategory,l=>{t.value=l}),$n([t,i],()=>{s.value=8}),(l,c)=>(le(),ye("section",$0,[m("div",j0,[c[2]||(c[2]=m("p",{class:"eyebrow"},"Pattern Archive",-1)),c[3]||(c[3]=m("h1",null,"蓝印纹库",-1)),m("p",null,"已整理 "+he(pe(un).length)+" 个有语义说明的示范纹样，并接入 "+he(pe(Ui).length)+" 张本地采集素材。",1)]),m("div",q0,[m("label",Y0,[Ce(pe(Gf),{size:18}),Zd(m("input",{"onUpdate:modelValue":c[0]||(c[0]=u=>i.value=u),type:"search",placeholder:"搜索纹样名称、寓意、标签"},null,512),[[Ff,i.value]])]),m("div",K0,[(le(!0),ye(it,null,vt(r.value,u=>(le(),ye("button",{key:u.key,type:"button",class:Tt({active:t.value===u.key}),onClick:d=>t.value=u.key},he(u.name),11,Z0))),128))])]),o.value.length?(le(),ye("div",J0,[(le(!0),ye(it,null,vt(o.value,u=>(le(),Ct(pc,{key:u.id,pattern:u,onOpen:d=>l.$emit("open-pattern",u),onCreate:d=>l.$emit("create-pattern",u)},null,8,["pattern","onOpen","onCreate"]))),128))])):(le(),ye("div",Q0,[Ce(pe(kf),{size:34}),c[4]||(c[4]=m("h2",null,"未找到相关纹样",-1)),c[5]||(c[5]=m("p",null,"试试“莲花”“平安”“富贵”这样的关键词。",-1))])),s.value<a.value.length?(le(),ye("button",{key:2,class:"secondary-button load-more",type:"button",onClick:c[1]||(c[1]=u=>s.value+=8)}," 加载更多 ")):Et("",!0),Ce(X0)]))}},tv={class:"detail-page section top-section"},nv={class:"detail-layout"},iv={class:"detail-content"},sv={class:"eyebrow"},rv={class:"lead"},av={class:"detail-block"},ov={class:"mini-timeline"},lv={class:"detail-block"},cv={class:"use-grid"},uv={class:"detail-block"},dv={class:"library-grid compact-grid"},fv={__name:"PatternDetailPage",props:{patternId:{type:String,required:!0}},emits:["navigate","open-pattern","create-pattern"],setup(n,{emit:e}){const t=n,i=e,s=et(!1),r=yt(()=>un.find(o=>o.id===t.patternId)||un[0]),a=yt(()=>{const o=r.value.relatedIds.map(l=>un.find(c=>c.id===l)).filter(Boolean);return o.length?o.slice(0,4):un.filter(l=>l.category===r.value.category).slice(0,4)});return(o,l)=>(le(),ye("section",tv,[m("button",{class:"text-link back-link",type:"button",onClick:l[0]||(l[0]=c=>o.$emit("navigate","/library"))},[Ce(pe(ds),{size:17}),l[5]||(l[5]=Qe(" 返回纹库 ",-1))]),m("div",nv,[m("button",{class:Tt(["detail-image",r.value.previewImage?"detail-image-real":r.value.patternClass]),style:An(r.value.previewImage?{backgroundImage:`url(${r.value.previewImage})`}:void 0),type:"button",onClick:l[1]||(l[1]=c=>s.value=!0)},[...l[6]||(l[6]=[m("span",null,"点击放大",-1)])],6),m("article",iv,[m("p",sv,he(r.value.categoryName),1),m("h1",null,he(r.value.name),1),m("p",rv,he(r.value.meaning),1),m("button",{class:"primary-button detail-create-button",type:"button",onClick:l[2]||(l[2]=c=>i("create-pattern",r.value))},[Ce(pe(Mr),{size:18}),l[7]||(l[7]=Qe(" 用此纹样进入 3D 工坊 ",-1))]),m("dl",null,[m("div",null,[l[8]||(l[8]=m("dt",null,"年代",-1)),m("dd",null,he(r.value.era),1)]),m("div",null,[l[9]||(l[9]=m("dt",null,"传统用途",-1)),m("dd",null,he(r.value.usage),1)]),m("div",null,[l[10]||(l[10]=m("dt",null,"文化寓意",-1)),m("dd",null,he(r.value.meaningDetail),1)]),m("div",null,[l[11]||(l[11]=m("dt",null,"背景故事",-1)),m("dd",null,he(r.value.story),1)])])])]),m("div",av,[l[12]||(l[12]=m("p",{class:"eyebrow"},"Technique",-1)),l[13]||(l[13]=m("h2",null,"工艺图解",-1)),m("div",ov,[(le(!0),ye(it,null,vt(r.value.technique,c=>(le(),ye("article",{key:c},he(c),1))),128))])]),m("div",lv,[l[14]||(l[14]=m("p",{class:"eyebrow"},"Modern Use",-1)),l[15]||(l[15]=m("h2",null,"创新应用",-1)),m("div",cv,[(le(!0),ye(it,null,vt(r.value.modernUse,c=>(le(),ye("article",{key:c},he(c),1))),128))])]),m("div",uv,[l[16]||(l[16]=m("div",{class:"section-title-row"},[m("div",null,[m("p",{class:"eyebrow"},"Related"),m("h2",null,"猜你喜欢")])],-1)),m("div",dv,[(le(!0),ye(it,null,vt(a.value,c=>(le(),Ct(pc,{key:c.id,pattern:c,onOpen:u=>o.$emit("open-pattern",c),onCreate:u=>o.$emit("create-pattern",c)},null,8,["pattern","onOpen","onCreate"]))),128))])]),s.value?(le(),ye("div",{key:0,class:"lightbox",onClick:l[4]||(l[4]=hi(c=>s.value=!1,["self"]))},[m("button",{class:"icon-button close-lightbox",type:"button",onClick:l[3]||(l[3]=c=>s.value=!1)},[Ce(pe(Ys),{size:22})]),m("div",{class:Tt(["lightbox-pattern",r.value.previewImage?"detail-image-real":r.value.patternClass]),style:An(r.value.previewImage?{backgroundImage:`url(${r.value.previewImage})`}:void 0)},null,6)])):Et("",!0)]))}};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const mc="172",Ws={ROTATE:0,DOLLY:1,PAN:2},Bs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},hv=0,bu=1,pv=2,$f=1,jf=2,li=3,ki=0,dn=1,jn=2,Ni=0,Xs=1,Mu=2,Su=3,Eu=4,mv=5,ss=100,gv=101,_v=102,vv=103,xv=104,yv=200,bv=201,Mv=202,Sv=203,fl=204,hl=205,Ev=206,Tv=207,Av=208,wv=209,Cv=210,Rv=211,Pv=212,Dv=213,Lv=214,pl=0,ml=1,gl=2,Ks=3,_l=4,vl=5,xl=6,yl=7,qf=0,Iv=1,Uv=2,Fi=0,Nv=1,Fv=2,Ov=3,Bv=4,kv=5,zv=6,Hv=7,Yf=300,Zs=301,Js=302,bl=303,Ml=304,so=306,kr=1e3,as=1001,Sl=1002,On=1003,Vv=1004,ea=1005,Yn=1006,Mo=1007,os=1008,yi=1009,Kf=1010,Zf=1011,zr=1012,gc=1013,hs=1014,pi=1015,$r=1016,_c=1017,vc=1018,Qs=1020,Jf=35902,Qf=1021,eh=1022,Nn=1023,th=1024,nh=1025,$s=1026,er=1027,ih=1028,xc=1029,sh=1030,yc=1031,bc=1033,Ta=33776,Aa=33777,wa=33778,Ca=33779,El=35840,Tl=35841,Al=35842,wl=35843,Cl=36196,Rl=37492,Pl=37496,Dl=37808,Ll=37809,Il=37810,Ul=37811,Nl=37812,Fl=37813,Ol=37814,Bl=37815,kl=37816,zl=37817,Hl=37818,Vl=37819,Gl=37820,Wl=37821,Ra=36492,Xl=36494,$l=36495,rh=36283,jl=36284,ql=36285,Yl=36286,Gv=3200,Wv=3201,ah=0,Xv=1,Li="",cn="srgb",tr="srgb-linear",Va="linear",xt="srgb",bs=7680,Tu=519,$v=512,jv=513,qv=514,oh=515,Yv=516,Kv=517,Zv=518,Jv=519,Au=35044,wu="300 es",mi=2e3,Ga=2001;class _s{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Pa=Math.PI/180,Kl=180/Math.PI;function jr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]).toLowerCase()}function st(n,e,t){return Math.max(e,Math.min(t,n))}function Qv(n,e){return(n%e+e)%e}function So(n,e,t){return(1-t)*n+t*e}function pr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function an(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const ex={DEG2RAD:Pa};class Xe{constructor(e=0,t=0){Xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(st(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class tt{constructor(e,t,i,s,r,a,o,l,c){tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],p=i[5],v=i[8],M=s[0],g=s[3],f=s[6],C=s[1],R=s[4],y=s[7],L=s[2],w=s[5],E=s[8];return r[0]=a*M+o*C+l*L,r[3]=a*g+o*R+l*w,r[6]=a*f+o*y+l*E,r[1]=c*M+u*C+d*L,r[4]=c*g+u*R+d*w,r[7]=c*f+u*y+d*E,r[2]=h*M+p*C+v*L,r[5]=h*g+p*R+v*w,r[8]=h*f+p*y+v*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*r,p=c*r-a*l,v=t*d+i*h+s*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/v;return e[0]=d*M,e[1]=(s*c-u*i)*M,e[2]=(o*i-s*a)*M,e[3]=h*M,e[4]=(u*t-s*l)*M,e[5]=(s*r-o*t)*M,e[6]=p*M,e[7]=(i*l-c*t)*M,e[8]=(a*t-i*r)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Eo.makeScale(e,t)),this}rotate(e){return this.premultiply(Eo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Eo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Eo=new tt;function lh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Hr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function tx(){const n=Hr("canvas");return n.style.display="block",n}const Cu={};function Os(n){n in Cu||(Cu[n]=!0,console.warn(n))}function nx(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function ix(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function sx(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ru=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pu=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rx(){const n={enabled:!0,workingColorSpace:tr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===xt&&(s.r=gi(s.r),s.g=gi(s.g),s.b=gi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===xt&&(s.r=js(s.r),s.g=js(s.g),s.b=js(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Li?Va:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[tr]:{primaries:e,whitePoint:i,transfer:Va,toXYZ:Ru,fromXYZ:Pu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:cn},outputColorSpaceConfig:{drawingBufferColorSpace:cn}},[cn]:{primaries:e,whitePoint:i,transfer:xt,toXYZ:Ru,fromXYZ:Pu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:cn}}}),n}const ut=rx();function gi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function js(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ms;class ax{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ms===void 0&&(Ms=Hr("canvas")),Ms.width=e.width,Ms.height=e.height;const i=Ms.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ms}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Hr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=gi(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(gi(t[i]/255)*255):t[i]=gi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ox=0;class ch{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ox++}),this.uuid=jr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(To(s[a].image)):r.push(To(s[a]))}else r=To(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function To(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ax.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lx=0;class sn extends _s{constructor(e=sn.DEFAULT_IMAGE,t=sn.DEFAULT_MAPPING,i=as,s=as,r=Yn,a=os,o=Nn,l=yi,c=sn.DEFAULT_ANISOTROPY,u=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lx++}),this.uuid=jr(),this.name="",this.source=new ch(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kr:e.x=e.x-Math.floor(e.x);break;case as:e.x=e.x<0?0:1;break;case Sl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kr:e.y=e.y-Math.floor(e.y);break;case as:e.y=e.y<0?0:1;break;case Sl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=Yf;sn.DEFAULT_ANISOTROPY=1;class Pt{constructor(e=0,t=0,i=0,s=1){Pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],v=l[9],M=l[2],g=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-M)<.01&&Math.abs(v-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+M)<.1&&Math.abs(v+g)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(c+1)/2,y=(p+1)/2,L=(f+1)/2,w=(u+h)/4,E=(d+M)/4,D=(v+g)/4;return R>y&&R>L?R<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(R),s=w/i,r=E/i):y>L?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=w/s,r=D/s):L<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),i=E/r,s=D/r),this.set(i,s,r,t),this}let C=Math.sqrt((g-v)*(g-v)+(d-M)*(d-M)+(h-u)*(h-u));return Math.abs(C)<.001&&(C=1),this.x=(g-v)/C,this.y=(d-M)/C,this.z=(h-u)/C,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this.w=st(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this.w=st(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cx extends _s{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new sn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new ch(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ps extends cx{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class uh extends sn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=On,this.minFilter=On,this.wrapR=as,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ux extends sn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=On,this.minFilter=On,this.wrapR=as,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ms{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3];const h=r[a+0],p=r[a+1],v=r[a+2],M=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=h,e[t+1]=p,e[t+2]=v,e[t+3]=M;return}if(d!==M||l!==h||c!==p||u!==v){let g=1-o;const f=l*h+c*p+u*v+d*M,C=f>=0?1:-1,R=1-f*f;if(R>Number.EPSILON){const L=Math.sqrt(R),w=Math.atan2(L,f*C);g=Math.sin(g*w)/L,o=Math.sin(o*w)/L}const y=o*C;if(l=l*g+h*y,c=c*g+p*y,u=u*g+v*y,d=d*g+M*y,g===1-o){const L=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=L,c*=L,u*=L,d*=L}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[a],h=r[a+1],p=r[a+2],v=r[a+3];return e[t]=o*v+u*d+l*p-c*h,e[t+1]=l*v+u*h+c*d-o*p,e[t+2]=c*v+u*p+o*h-l*d,e[t+3]=u*v-o*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),d=o(r/2),h=l(i/2),p=l(s/2),v=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*p*v,this._y=c*p*d-h*u*v,this._z=c*u*v+h*p*d,this._w=c*u*d-h*p*v;break;case"YXZ":this._x=h*u*d+c*p*v,this._y=c*p*d-h*u*v,this._z=c*u*v-h*p*d,this._w=c*u*d+h*p*v;break;case"ZXY":this._x=h*u*d-c*p*v,this._y=c*p*d+h*u*v,this._z=c*u*v+h*p*d,this._w=c*u*d-h*p*v;break;case"ZYX":this._x=h*u*d-c*p*v,this._y=c*p*d+h*u*v,this._z=c*u*v-h*p*d,this._w=c*u*d+h*p*v;break;case"YZX":this._x=h*u*d+c*p*v,this._y=c*p*d+h*u*v,this._z=c*u*v-h*p*d,this._w=c*u*d-h*p*v;break;case"XZY":this._x=h*u*d-c*p*v,this._y=c*p*d-h*u*v,this._z=c*u*v+h*p*d,this._w=c*u*d+h*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=i+o+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*d+this._w*h,this._x=i*d+this._x*h,this._y=s*d+this._y*h,this._z=r*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Du.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Du.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),u=2*(o*t-r*s),d=2*(r*i-a*t);return this.x=t+l*c+a*d-o*u,this.y=i+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ao.copy(this).projectOnVector(e),this.sub(Ao)}reflect(e){return this.sub(Ao.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(st(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ao=new X,Du=new ms;class qr{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Dn):Dn.fromBufferAttribute(r,a),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ta.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ta.copy(i.boundingBox)),ta.applyMatrix4(e.matrixWorld),this.union(ta)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(mr),na.subVectors(this.max,mr),Ss.subVectors(e.a,mr),Es.subVectors(e.b,mr),Ts.subVectors(e.c,mr),Ei.subVectors(Es,Ss),Ti.subVectors(Ts,Es),Yi.subVectors(Ss,Ts);let t=[0,-Ei.z,Ei.y,0,-Ti.z,Ti.y,0,-Yi.z,Yi.y,Ei.z,0,-Ei.x,Ti.z,0,-Ti.x,Yi.z,0,-Yi.x,-Ei.y,Ei.x,0,-Ti.y,Ti.x,0,-Yi.y,Yi.x,0];return!wo(t,Ss,Es,Ts,na)||(t=[1,0,0,0,1,0,0,0,1],!wo(t,Ss,Es,Ts,na))?!1:(ia.crossVectors(Ei,Ti),t=[ia.x,ia.y,ia.z],wo(t,Ss,Es,Ts,na))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ii=[new X,new X,new X,new X,new X,new X,new X,new X],Dn=new X,ta=new qr,Ss=new X,Es=new X,Ts=new X,Ei=new X,Ti=new X,Yi=new X,mr=new X,na=new X,ia=new X,Ki=new X;function wo(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Ki.fromArray(n,r);const o=s.x*Math.abs(Ki.x)+s.y*Math.abs(Ki.y)+s.z*Math.abs(Ki.z),l=e.dot(Ki),c=t.dot(Ki),u=i.dot(Ki);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const dx=new qr,gr=new X,Co=new X;class Mc{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):dx.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;gr.subVectors(e,this.center);const t=gr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(gr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Co.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(gr.copy(e.center).add(Co)),this.expandByPoint(gr.copy(e.center).sub(Co))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const si=new X,Ro=new X,sa=new X,Ai=new X,Po=new X,ra=new X,Do=new X;class dh{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(si.copy(this.origin).addScaledVector(this.direction,t),si.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ro.copy(e).add(t).multiplyScalar(.5),sa.copy(t).sub(e).normalize(),Ai.copy(this.origin).sub(Ro);const r=e.distanceTo(t)*.5,a=-this.direction.dot(sa),o=Ai.dot(this.direction),l=-Ai.dot(sa),c=Ai.lengthSq(),u=Math.abs(1-a*a);let d,h,p,v;if(u>0)if(d=a*l-o,h=a*o-l,v=r*u,d>=0)if(h>=-v)if(h<=v){const M=1/u;d*=M,h*=M,p=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h<=-v?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c):h<=v?(d=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ro).addScaledVector(sa,h),p}intersectSphere(e,t){si.subVectors(e.center,this.origin);const i=si.dot(this.direction),s=si.dot(si)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,si)!==null}intersectTriangle(e,t,i,s,r){Po.subVectors(t,e),ra.subVectors(i,e),Do.crossVectors(Po,ra);let a=this.direction.dot(Do),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ai.subVectors(this.origin,e);const l=o*this.direction.dot(ra.crossVectors(Ai,ra));if(l<0)return null;const c=o*this.direction.dot(Po.cross(Ai));if(c<0||l+c>a)return null;const u=-o*Ai.dot(Do);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Dt{constructor(e,t,i,s,r,a,o,l,c,u,d,h,p,v,M,g){Dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,u,d,h,p,v,M,g)}set(e,t,i,s,r,a,o,l,c,u,d,h,p,v,M,g){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=v,f[11]=M,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Dt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/As.setFromMatrixColumn(e,0).length(),r=1/As.setFromMatrixColumn(e,1).length(),a=1/As.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const h=a*u,p=a*d,v=o*u,M=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+v*c,t[5]=h-M*c,t[9]=-o*l,t[2]=M-h*c,t[6]=v+p*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,p=l*d,v=c*u,M=c*d;t[0]=h+M*o,t[4]=v*o-p,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=p*o-v,t[6]=M+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,p=l*d,v=c*u,M=c*d;t[0]=h-M*o,t[4]=-a*d,t[8]=v+p*o,t[1]=p+v*o,t[5]=a*u,t[9]=M-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,p=a*d,v=o*u,M=o*d;t[0]=l*u,t[4]=v*c-p,t[8]=h*c+M,t[1]=l*d,t[5]=M*c+h,t[9]=p*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,p=a*c,v=o*l,M=o*c;t[0]=l*u,t[4]=M-h*d,t[8]=v*d+p,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*d+v,t[10]=h-M*d}else if(e.order==="XZY"){const h=a*l,p=a*c,v=o*l,M=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+M,t[5]=a*u,t[9]=p*d-v,t[2]=v*d-p,t[6]=o*u,t[10]=M*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fx,e,hx)}lookAt(e,t,i){const s=this.elements;return hn.subVectors(e,t),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),wi.crossVectors(i,hn),wi.lengthSq()===0&&(Math.abs(i.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),wi.crossVectors(i,hn)),wi.normalize(),aa.crossVectors(hn,wi),s[0]=wi.x,s[4]=aa.x,s[8]=hn.x,s[1]=wi.y,s[5]=aa.y,s[9]=hn.y,s[2]=wi.z,s[6]=aa.z,s[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],p=i[13],v=i[2],M=i[6],g=i[10],f=i[14],C=i[3],R=i[7],y=i[11],L=i[15],w=s[0],E=s[4],D=s[8],S=s[12],b=s[1],I=s[5],U=s[9],N=s[13],W=s[2],ne=s[6],Y=s[10],se=s[14],z=s[3],me=s[7],Me=s[11],be=s[15];return r[0]=a*w+o*b+l*W+c*z,r[4]=a*E+o*I+l*ne+c*me,r[8]=a*D+o*U+l*Y+c*Me,r[12]=a*S+o*N+l*se+c*be,r[1]=u*w+d*b+h*W+p*z,r[5]=u*E+d*I+h*ne+p*me,r[9]=u*D+d*U+h*Y+p*Me,r[13]=u*S+d*N+h*se+p*be,r[2]=v*w+M*b+g*W+f*z,r[6]=v*E+M*I+g*ne+f*me,r[10]=v*D+M*U+g*Y+f*Me,r[14]=v*S+M*N+g*se+f*be,r[3]=C*w+R*b+y*W+L*z,r[7]=C*E+R*I+y*ne+L*me,r[11]=C*D+R*U+y*Y+L*Me,r[15]=C*S+R*N+y*se+L*be,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],p=e[14],v=e[3],M=e[7],g=e[11],f=e[15];return v*(+r*l*d-s*c*d-r*o*h+i*c*h+s*o*p-i*l*p)+M*(+t*l*p-t*c*h+r*a*h-s*a*p+s*c*u-r*l*u)+g*(+t*c*d-t*o*p-r*a*d+i*a*p+r*o*u-i*c*u)+f*(-s*o*u-t*l*d+t*o*h+s*a*d-i*a*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],p=e[11],v=e[12],M=e[13],g=e[14],f=e[15],C=d*g*c-M*h*c+M*l*p-o*g*p-d*l*f+o*h*f,R=v*h*c-u*g*c-v*l*p+a*g*p+u*l*f-a*h*f,y=u*M*c-v*d*c+v*o*p-a*M*p-u*o*f+a*d*f,L=v*d*l-u*M*l-v*o*h+a*M*h+u*o*g-a*d*g,w=t*C+i*R+s*y+r*L;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/w;return e[0]=C*E,e[1]=(M*h*r-d*g*r-M*s*p+i*g*p+d*s*f-i*h*f)*E,e[2]=(o*g*r-M*l*r+M*s*c-i*g*c-o*s*f+i*l*f)*E,e[3]=(d*l*r-o*h*r-d*s*c+i*h*c+o*s*p-i*l*p)*E,e[4]=R*E,e[5]=(u*g*r-v*h*r+v*s*p-t*g*p-u*s*f+t*h*f)*E,e[6]=(v*l*r-a*g*r-v*s*c+t*g*c+a*s*f-t*l*f)*E,e[7]=(a*h*r-u*l*r+u*s*c-t*h*c-a*s*p+t*l*p)*E,e[8]=y*E,e[9]=(v*d*r-u*M*r-v*i*p+t*M*p+u*i*f-t*d*f)*E,e[10]=(a*M*r-v*o*r+v*i*c-t*M*c-a*i*f+t*o*f)*E,e[11]=(u*o*r-a*d*r-u*i*c+t*d*c+a*i*p-t*o*p)*E,e[12]=L*E,e[13]=(u*M*s-v*d*s+v*i*h-t*M*h-u*i*g+t*d*g)*E,e[14]=(v*o*s-a*M*s-v*i*l+t*M*l+a*i*g-t*o*g)*E,e[15]=(a*d*s-u*o*s+u*i*l-t*d*l-a*i*h+t*o*h)*E,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,d=o+o,h=r*c,p=r*u,v=r*d,M=a*u,g=a*d,f=o*d,C=l*c,R=l*u,y=l*d,L=i.x,w=i.y,E=i.z;return s[0]=(1-(M+f))*L,s[1]=(p+y)*L,s[2]=(v-R)*L,s[3]=0,s[4]=(p-y)*w,s[5]=(1-(h+f))*w,s[6]=(g+C)*w,s[7]=0,s[8]=(v+R)*E,s[9]=(g-C)*E,s[10]=(1-(h+M))*E,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=As.set(s[0],s[1],s[2]).length();const a=As.set(s[4],s[5],s[6]).length(),o=As.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Ln.copy(this);const c=1/r,u=1/a,d=1/o;return Ln.elements[0]*=c,Ln.elements[1]*=c,Ln.elements[2]*=c,Ln.elements[4]*=u,Ln.elements[5]*=u,Ln.elements[6]*=u,Ln.elements[8]*=d,Ln.elements[9]*=d,Ln.elements[10]*=d,t.setFromRotationMatrix(Ln),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=mi){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),d=(t+e)/(t-e),h=(i+s)/(i-s);let p,v;if(o===mi)p=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Ga)p=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=mi){const l=this.elements,c=1/(t-e),u=1/(i-s),d=1/(a-r),h=(t+e)*c,p=(i+s)*u;let v,M;if(o===mi)v=(a+r)*d,M=-2*d;else if(o===Ga)v=r*d,M=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=M,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const As=new X,Ln=new Dt,fx=new X(0,0,0),hx=new X(1,1,1),wi=new X,aa=new X,hn=new X,Lu=new Dt,Iu=new ms;class Qn{constructor(e=0,t=0,i=0,s=Qn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-st(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(st(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-st(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(st(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Lu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Iu.setFromEuler(this),this.setFromQuaternion(Iu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qn.DEFAULT_ORDER="XYZ";class fh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let px=0;const Uu=new X,ws=new ms,ri=new Dt,oa=new X,_r=new X,mx=new X,gx=new ms,Nu=new X(1,0,0),Fu=new X(0,1,0),Ou=new X(0,0,1),Bu={type:"added"},_x={type:"removed"},Cs={type:"childadded",child:null},Lo={type:"childremoved",child:null};class Xt extends _s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:px++}),this.uuid=jr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xt.DEFAULT_UP.clone();const e=new X,t=new Qn,i=new ms,s=new X(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Dt},normalMatrix:{value:new tt}}),this.matrix=new Dt,this.matrixWorld=new Dt,this.matrixAutoUpdate=Xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ws.setFromAxisAngle(e,t),this.quaternion.multiply(ws),this}rotateOnWorldAxis(e,t){return ws.setFromAxisAngle(e,t),this.quaternion.premultiply(ws),this}rotateX(e){return this.rotateOnAxis(Nu,e)}rotateY(e){return this.rotateOnAxis(Fu,e)}rotateZ(e){return this.rotateOnAxis(Ou,e)}translateOnAxis(e,t){return Uu.copy(e).applyQuaternion(this.quaternion),this.position.add(Uu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Nu,e)}translateY(e){return this.translateOnAxis(Fu,e)}translateZ(e){return this.translateOnAxis(Ou,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?oa.copy(e):oa.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),_r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(_r,oa,this.up):ri.lookAt(oa,_r,this.up),this.quaternion.setFromRotationMatrix(ri),s&&(ri.extractRotation(s.matrixWorld),ws.setFromRotationMatrix(ri),this.quaternion.premultiply(ws.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Bu),Cs.child=e,this.dispatchEvent(Cs),Cs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_x),Lo.child=e,this.dispatchEvent(Lo),Lo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Bu),Cs.child=e,this.dispatchEvent(Cs),Cs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,e,mx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,gx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),p=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=s,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Xt.DEFAULT_UP=new X(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const In=new X,ai=new X,Io=new X,oi=new X,Rs=new X,Ps=new X,ku=new X,Uo=new X,No=new X,Fo=new X,Oo=new Pt,Bo=new Pt,ko=new Pt;class Un{constructor(e=new X,t=new X,i=new X){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),In.subVectors(e,t),s.cross(In);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){In.subVectors(s,t),ai.subVectors(i,t),Io.subVectors(e,t);const a=In.dot(In),o=In.dot(ai),l=In.dot(Io),c=ai.dot(ai),u=ai.dot(Io),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const h=1/d,p=(c*l-o*u)*h,v=(a*u-o*l)*h;return r.set(1-p-v,v,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,oi.x),l.addScaledVector(a,oi.y),l.addScaledVector(o,oi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return Oo.setScalar(0),Bo.setScalar(0),ko.setScalar(0),Oo.fromBufferAttribute(e,t),Bo.fromBufferAttribute(e,i),ko.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Oo,r.x),a.addScaledVector(Bo,r.y),a.addScaledVector(ko,r.z),a}static isFrontFacing(e,t,i,s){return In.subVectors(i,t),ai.subVectors(e,t),In.cross(ai).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return In.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),In.cross(ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Un.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Un.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;Rs.subVectors(s,i),Ps.subVectors(r,i),Uo.subVectors(e,i);const l=Rs.dot(Uo),c=Ps.dot(Uo);if(l<=0&&c<=0)return t.copy(i);No.subVectors(e,s);const u=Rs.dot(No),d=Ps.dot(No);if(u>=0&&d<=u)return t.copy(s);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Rs,a);Fo.subVectors(e,r);const p=Rs.dot(Fo),v=Ps.dot(Fo);if(v>=0&&p<=v)return t.copy(r);const M=p*c-l*v;if(M<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(i).addScaledVector(Ps,o);const g=u*v-p*d;if(g<=0&&d-u>=0&&p-v>=0)return ku.subVectors(r,s),o=(d-u)/(d-u+(p-v)),t.copy(s).addScaledVector(ku,o);const f=1/(g+M+h);return a=M*f,o=h*f,t.copy(i).addScaledVector(Rs,a).addScaledVector(Ps,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const hh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ci={h:0,s:0,l:0},la={h:0,s:0,l:0};function zo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class rt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=ut.workingColorSpace){return this.r=e,this.g=t,this.b=i,ut.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=ut.workingColorSpace){if(e=Qv(e,1),t=st(t,0,1),i=st(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=zo(a,r,e+1/3),this.g=zo(a,r,e),this.b=zo(a,r,e-1/3)}return ut.toWorkingColorSpace(this,s),this}setStyle(e,t=cn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=cn){const i=hh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gi(e.r),this.g=gi(e.g),this.b=gi(e.b),this}copyLinearToSRGB(e){return this.r=js(e.r),this.g=js(e.g),this.b=js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=cn){return ut.fromWorkingColorSpace(jt.copy(this),e),Math.round(st(jt.r*255,0,255))*65536+Math.round(st(jt.g*255,0,255))*256+Math.round(st(jt.b*255,0,255))}getHexString(e=cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.fromWorkingColorSpace(jt.copy(this),t);const i=jt.r,s=jt.g,r=jt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ut.workingColorSpace){return ut.fromWorkingColorSpace(jt.copy(this),t),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=cn){ut.fromWorkingColorSpace(jt.copy(this),e);const t=jt.r,i=jt.g,s=jt.b;return e!==cn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ci),this.setHSL(Ci.h+e,Ci.s+t,Ci.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ci),e.getHSL(la);const i=So(Ci.h,la.h,t),s=So(Ci.s,la.s,t),r=So(Ci.l,la.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new rt;rt.NAMES=hh;let vx=0;class rr extends _s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vx++}),this.uuid=jr(),this.name="",this.type="Material",this.blending=Xs,this.side=ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fl,this.blendDst=hl,this.blendEquation=ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bs,this.stencilZFail=bs,this.stencilZPass=bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Xs&&(i.blending=this.blending),this.side!==ki&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==fl&&(i.blendSrc=this.blendSrc),this.blendDst!==hl&&(i.blendDst=this.blendDst),this.blendEquation!==ss&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ks&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==bs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==bs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ph extends rr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=qf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const It=new X,ca=new Xe;class Zn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Au,this.updateRanges=[],this.gpuType=pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ca.fromBufferAttribute(this,t),ca.applyMatrix3(e),this.setXY(t,ca.x,ca.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=pr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=an(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pr(t,this.array)),t}setX(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pr(t,this.array)),t}setY(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pr(t,this.array)),t}setW(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),i=an(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),i=an(i,this.array),s=an(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),i=an(i,this.array),s=an(s,this.array),r=an(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Au&&(e.usage=this.usage),e}}class mh extends Zn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class gh extends Zn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ft extends Zn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let xx=0;const Sn=new Dt,Ho=new Xt,Ds=new X,pn=new qr,vr=new qr,zt=new X;class kn extends _s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xx++}),this.uuid=jr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lh(e)?gh:mh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new tt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,i){return Sn.makeTranslation(e,t,i),this.applyMatrix4(Sn),this}scale(e,t,i){return Sn.makeScale(e,t,i),this.applyMatrix4(Sn),this}lookAt(e){return Ho.lookAt(e),Ho.updateMatrix(),this.applyMatrix4(Ho.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ft(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];pn.setFromBufferAttribute(r),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];vr.setFromBufferAttribute(o),this.morphTargetsRelative?(zt.addVectors(pn.min,vr.min),pn.expandByPoint(zt),zt.addVectors(pn.max,vr.max),pn.expandByPoint(zt)):(pn.expandByPoint(vr.min),pn.expandByPoint(vr.max))}pn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)zt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(zt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)zt.fromBufferAttribute(o,c),l&&(Ds.fromBufferAttribute(e,c),zt.add(Ds)),s=Math.max(s,i.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<i.count;D++)o[D]=new X,l[D]=new X;const c=new X,u=new X,d=new X,h=new Xe,p=new Xe,v=new Xe,M=new X,g=new X;function f(D,S,b){c.fromBufferAttribute(i,D),u.fromBufferAttribute(i,S),d.fromBufferAttribute(i,b),h.fromBufferAttribute(r,D),p.fromBufferAttribute(r,S),v.fromBufferAttribute(r,b),u.sub(c),d.sub(c),p.sub(h),v.sub(h);const I=1/(p.x*v.y-v.x*p.y);isFinite(I)&&(M.copy(u).multiplyScalar(v.y).addScaledVector(d,-p.y).multiplyScalar(I),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(I),o[D].add(M),o[S].add(M),o[b].add(M),l[D].add(g),l[S].add(g),l[b].add(g))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let D=0,S=C.length;D<S;++D){const b=C[D],I=b.start,U=b.count;for(let N=I,W=I+U;N<W;N+=3)f(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const R=new X,y=new X,L=new X,w=new X;function E(D){L.fromBufferAttribute(s,D),w.copy(L);const S=o[D];R.copy(S),R.sub(L.multiplyScalar(L.dot(S))).normalize(),y.crossVectors(w,S);const I=y.dot(l[D])<0?-1:1;a.setXYZW(D,R.x,R.y,R.z,I)}for(let D=0,S=C.length;D<S;++D){const b=C[D],I=b.start,U=b.count;for(let N=I,W=I+U;N<W;N+=3)E(e.getX(N+0)),E(e.getX(N+1)),E(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Zn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const s=new X,r=new X,a=new X,o=new X,l=new X,c=new X,u=new X,d=new X;if(e)for(let h=0,p=e.count;h<p;h+=3){const v=e.getX(h+0),M=e.getX(h+1),g=e.getX(h+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,M),a.fromBufferAttribute(t,g),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,g),o.add(u),l.add(u),c.add(u),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let p=0,v=0;for(let M=0,g=l.length;M<g;M++){o.isInterleavedBufferAttribute?p=l[M]*o.data.stride+o.offset:p=l[M]*u;for(let f=0;f<u;f++)h[v++]=c[p++]}return new Zn(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kn,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],p=e(h,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zu=new Dt,Zi=new dh,ua=new Mc,Hu=new X,da=new X,fa=new X,ha=new X,Vo=new X,pa=new X,Vu=new X,ma=new X;class Nt extends Xt{constructor(e=new kn,t=new ph){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){pa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],d=r[l];u!==0&&(Vo.fromBufferAttribute(d,e),a?pa.addScaledVector(Vo,u):pa.addScaledVector(Vo.sub(t),u))}t.add(pa)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ua.copy(i.boundingSphere),ua.applyMatrix4(r),Zi.copy(e.ray).recast(e.near),!(ua.containsPoint(Zi.origin)===!1&&(Zi.intersectSphere(ua,Hu)===null||Zi.origin.distanceToSquared(Hu)>(e.far-e.near)**2))&&(zu.copy(r).invert(),Zi.copy(e.ray).applyMatrix4(zu),!(i.boundingBox!==null&&Zi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Zi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,M=h.length;v<M;v++){const g=h[v],f=a[g.materialIndex],C=Math.max(g.start,p.start),R=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let y=C,L=R;y<L;y+=3){const w=o.getX(y),E=o.getX(y+1),D=o.getX(y+2);s=ga(this,f,e,i,c,u,d,w,E,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const v=Math.max(0,p.start),M=Math.min(o.count,p.start+p.count);for(let g=v,f=M;g<f;g+=3){const C=o.getX(g),R=o.getX(g+1),y=o.getX(g+2);s=ga(this,a,e,i,c,u,d,C,R,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,M=h.length;v<M;v++){const g=h[v],f=a[g.materialIndex],C=Math.max(g.start,p.start),R=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let y=C,L=R;y<L;y+=3){const w=y,E=y+1,D=y+2;s=ga(this,f,e,i,c,u,d,w,E,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const v=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let g=v,f=M;g<f;g+=3){const C=g,R=g+1,y=g+2;s=ga(this,a,e,i,c,u,d,C,R,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function yx(n,e,t,i,s,r,a,o){let l;if(e.side===dn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===ki,o),l===null)return null;ma.copy(o),ma.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ma);return c<t.near||c>t.far?null:{distance:c,point:ma.clone(),object:n}}function ga(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,da),n.getVertexPosition(l,fa),n.getVertexPosition(c,ha);const u=yx(n,e,t,i,da,fa,ha,Vu);if(u){const d=new X;Un.getBarycoord(Vu,da,fa,ha,d),s&&(u.uv=Un.getInterpolatedAttribute(s,o,l,c,d,new Xe)),r&&(u.uv1=Un.getInterpolatedAttribute(r,o,l,c,d,new Xe)),a&&(u.normal=Un.getInterpolatedAttribute(a,o,l,c,d,new X),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new X,materialIndex:0};Un.getNormal(da,fa,ha,h.normal),u.face=h,u.barycoord=d}return u}class Oi extends kn{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,p=0;v("z","y","x",-1,-1,i,t,e,a,r,0),v("z","y","x",1,-1,i,t,-e,a,r,1),v("x","z","y",1,1,e,i,t,s,a,2),v("x","z","y",1,-1,e,i,-t,s,a,3),v("x","y","z",1,-1,e,t,i,s,r,4),v("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ft(c,3)),this.setAttribute("normal",new Ft(u,3)),this.setAttribute("uv",new Ft(d,2));function v(M,g,f,C,R,y,L,w,E,D,S){const b=y/E,I=L/D,U=y/2,N=L/2,W=w/2,ne=E+1,Y=D+1;let se=0,z=0;const me=new X;for(let Me=0;Me<Y;Me++){const be=Me*I-N;for(let Fe=0;Fe<ne;Fe++){const je=Fe*b-U;me[M]=je*C,me[g]=be*R,me[f]=W,c.push(me.x,me.y,me.z),me[M]=0,me[g]=0,me[f]=w>0?1:-1,u.push(me.x,me.y,me.z),d.push(Fe/E),d.push(1-Me/D),se+=1}}for(let Me=0;Me<D;Me++)for(let be=0;be<E;be++){const Fe=h+be+ne*Me,je=h+be+ne*(Me+1),re=h+(be+1)+ne*(Me+1),ve=h+(be+1)+ne*Me;l.push(Fe,je,ve),l.push(je,re,ve),z+=6}o.addGroup(p,z,S),p+=z,h+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function nr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Qt(n){const e={};for(let t=0;t<n.length;t++){const i=nr(n[t]);for(const s in i)e[s]=i[s]}return e}function bx(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function _h(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}const Mx={clone:nr,merge:Qt};var Sx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ex=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zi extends rr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sx,this.fragmentShader=Ex,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=nr(e.uniforms),this.uniformsGroups=bx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class vh extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Dt,this.projectionMatrix=new Dt,this.projectionMatrixInverse=new Dt,this.coordinateSystem=mi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ri=new X,Gu=new Xe,Wu=new Xe;class Tn extends vh{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Kl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Pa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Kl*2*Math.atan(Math.tan(Pa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z),Ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z)}getViewSize(e,t){return this.getViewBounds(e,Gu,Wu),t.subVectors(Wu,Gu)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Pa*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ls=-90,Is=1;class Tx extends Xt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Tn(Ls,Is,e,t);s.layers=this.layers,this.add(s);const r=new Tn(Ls,Is,e,t);r.layers=this.layers,this.add(r);const a=new Tn(Ls,Is,e,t);a.layers=this.layers,this.add(a);const o=new Tn(Ls,Is,e,t);o.layers=this.layers,this.add(o);const l=new Tn(Ls,Is,e,t);l.layers=this.layers,this.add(l);const c=new Tn(Ls,Is,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===mi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ga)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(d,h,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class xh extends sn{constructor(e,t,i,s,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Zs,super(e,t,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ax extends ps{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new xh(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Yn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Oi(5,5,5),r=new zi({name:"CubemapFromEquirect",uniforms:nr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:dn,blending:Ni});r.uniforms.tEquirect.value=t;const a=new Nt(s,r),o=t.minFilter;return t.minFilter===os&&(t.minFilter=Yn),new Tx(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}class wx extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qn,this.environmentIntensity=1,this.environmentRotation=new Qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Go=new X,Cx=new X,Rx=new tt;class Di{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Go.subVectors(i,t).cross(Cx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Go),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Rx.getNormalMatrix(e),s=this.coplanarPoint(Go).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ji=new Mc,_a=new X;class Sc{constructor(e=new Di,t=new Di,i=new Di,s=new Di,r=new Di,a=new Di){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=mi){const i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],d=s[6],h=s[7],p=s[8],v=s[9],M=s[10],g=s[11],f=s[12],C=s[13],R=s[14],y=s[15];if(i[0].setComponents(l-r,h-c,g-p,y-f).normalize(),i[1].setComponents(l+r,h+c,g+p,y+f).normalize(),i[2].setComponents(l+a,h+u,g+v,y+C).normalize(),i[3].setComponents(l-a,h-u,g-v,y-C).normalize(),i[4].setComponents(l-o,h-d,g-M,y-R).normalize(),t===mi)i[5].setComponents(l+o,h+d,g+M,y+R).normalize();else if(t===Ga)i[5].setComponents(o,d,M,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(e){return Ji.center.set(0,0,0),Ji.radius=.7071067811865476,Ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(_a.x=s.normal.x>0?e.max.x:e.min.x,_a.y=s.normal.y>0?e.max.y:e.min.y,_a.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(_a)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ii extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class yh extends sn{constructor(e,t,i,s,r,a,o,l,c,u=$s){if(u!==$s&&u!==er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===$s&&(i=hs),i===void 0&&u===er&&(i=Qs),super(null,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:On,this.minFilter=l!==void 0?l:On,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Wa extends kn{constructor(e=[new Xe(0,-.5),new Xe(.5,0),new Xe(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=st(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],u=1/t,d=new X,h=new Xe,p=new X,v=new X,M=new X;let g=0,f=0;for(let C=0;C<=e.length-1;C++)switch(C){case 0:g=e[C+1].x-e[C].x,f=e[C+1].y-e[C].y,p.x=f*1,p.y=-g,p.z=f*0,M.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(M.x,M.y,M.z);break;default:g=e[C+1].x-e[C].x,f=e[C+1].y-e[C].y,p.x=f*1,p.y=-g,p.z=f*0,v.copy(p),p.x+=M.x,p.y+=M.y,p.z+=M.z,p.normalize(),l.push(p.x,p.y,p.z),M.copy(v)}for(let C=0;C<=t;C++){const R=i+C*u*s,y=Math.sin(R),L=Math.cos(R);for(let w=0;w<=e.length-1;w++){d.x=e[w].x*y,d.y=e[w].y,d.z=e[w].x*L,a.push(d.x,d.y,d.z),h.x=C/t,h.y=w/(e.length-1),o.push(h.x,h.y);const E=l[3*w+0]*y,D=l[3*w+1],S=l[3*w+0]*L;c.push(E,D,S)}}for(let C=0;C<t;C++)for(let R=0;R<e.length-1;R++){const y=R+C*e.length,L=y,w=y+e.length,E=y+e.length+1,D=y+1;r.push(L,w,D),r.push(E,D,w)}this.setIndex(r),this.setAttribute("position",new Ft(a,3)),this.setAttribute("uv",new Ft(o,2)),this.setAttribute("normal",new Ft(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wa(e.points,e.segments,e.phiStart,e.phiLength)}}class Ec extends kn{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new X,u=new Xe;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){const p=i+d/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[h]/e+1)/2,u.y=(a[h+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Ft(a,3)),this.setAttribute("normal",new Ft(o,3)),this.setAttribute("uv",new Ft(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ec(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Tc extends kn{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],h=[],p=[];let v=0;const M=[],g=i/2;let f=0;C(),a===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(u),this.setAttribute("position",new Ft(d,3)),this.setAttribute("normal",new Ft(h,3)),this.setAttribute("uv",new Ft(p,2));function C(){const y=new X,L=new X;let w=0;const E=(t-e)/i;for(let D=0;D<=r;D++){const S=[],b=D/r,I=b*(t-e)+e;for(let U=0;U<=s;U++){const N=U/s,W=N*l+o,ne=Math.sin(W),Y=Math.cos(W);L.x=I*ne,L.y=-b*i+g,L.z=I*Y,d.push(L.x,L.y,L.z),y.set(ne,E,Y).normalize(),h.push(y.x,y.y,y.z),p.push(N,1-b),S.push(v++)}M.push(S)}for(let D=0;D<s;D++)for(let S=0;S<r;S++){const b=M[S][D],I=M[S+1][D],U=M[S+1][D+1],N=M[S][D+1];(e>0||S!==0)&&(u.push(b,I,N),w+=3),(t>0||S!==r-1)&&(u.push(I,U,N),w+=3)}c.addGroup(f,w,0),f+=w}function R(y){const L=v,w=new Xe,E=new X;let D=0;const S=y===!0?e:t,b=y===!0?1:-1;for(let U=1;U<=s;U++)d.push(0,g*b,0),h.push(0,b,0),p.push(.5,.5),v++;const I=v;for(let U=0;U<=s;U++){const W=U/s*l+o,ne=Math.cos(W),Y=Math.sin(W);E.x=S*Y,E.y=g*b,E.z=S*ne,d.push(E.x,E.y,E.z),h.push(0,b,0),w.x=ne*.5+.5,w.y=Y*.5*b+.5,p.push(w.x,w.y),v++}for(let U=0;U<s;U++){const N=L+U,W=I+U;y===!0?u.push(W,W+1,N):u.push(W+1,W,N),D+=3}c.addGroup(f,D,y===!0?1:2),f+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ir extends kn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,d=e/o,h=t/l,p=[],v=[],M=[],g=[];for(let f=0;f<u;f++){const C=f*h-a;for(let R=0;R<c;R++){const y=R*d-r;v.push(y,-C,0),M.push(0,0,1),g.push(R/o),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let C=0;C<o;C++){const R=C+c*f,y=C+c*(f+1),L=C+1+c*(f+1),w=C+1+c*f;p.push(R,y,w),p.push(y,L,w)}this.setIndex(p),this.setAttribute("position",new Ft(v,3)),this.setAttribute("normal",new Ft(M,3)),this.setAttribute("uv",new Ft(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ir(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ac extends kn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new X,h=new X,p=[],v=[],M=[],g=[];for(let f=0;f<=i;f++){const C=[],R=f/i;let y=0;f===0&&a===0?y=.5/t:f===i&&l===Math.PI&&(y=-.5/t);for(let L=0;L<=t;L++){const w=L/t;d.x=-e*Math.cos(s+w*r)*Math.sin(a+R*o),d.y=e*Math.cos(a+R*o),d.z=e*Math.sin(s+w*r)*Math.sin(a+R*o),v.push(d.x,d.y,d.z),h.copy(d).normalize(),M.push(h.x,h.y,h.z),g.push(w+y,1-R),C.push(c++)}u.push(C)}for(let f=0;f<i;f++)for(let C=0;C<t;C++){const R=u[f][C+1],y=u[f][C],L=u[f+1][C],w=u[f+1][C+1];(f!==0||a>0)&&p.push(R,y,w),(f!==i-1||l<Math.PI)&&p.push(y,L,w)}this.setIndex(p),this.setAttribute("position",new Ft(v,3)),this.setAttribute("normal",new Ft(M,3)),this.setAttribute("uv",new Ft(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ac(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Px extends rr{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new rt(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class xr extends rr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ah,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Dx extends rr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Lx extends rr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Xu={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Ix{constructor(e,t,i){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const p=c[d],v=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return v}return null}}}const Ux=new Ix;class wc{constructor(e){this.manager=e!==void 0?e:Ux,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}wc.DEFAULT_MATERIAL_NAME="__DEFAULT";class Nx extends wc{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Xu.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=Hr("img");function l(){u(),Xu.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(d){u(),s&&s(d),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class Fx extends wc{constructor(e){super(e)}load(e,t,i,s){const r=new sn,a=new Nx(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class bh extends Xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new rt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Ox extends bh{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new rt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Wo=new Dt,$u=new X,ju=new X;class Bx{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.map=null,this.mapPass=null,this.matrix=new Dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sc,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;$u.setFromMatrixPosition(e.matrixWorld),t.position.copy($u),ju.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ju),t.updateMatrixWorld(),Wo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Wo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Mh extends vh{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class kx extends Bx{constructor(){super(new Mh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class zx extends bh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.shadow=new kx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Hx extends Tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class qu{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=st(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(st(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Vx extends _s{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function Yu(n,e,t,i){const s=Gx(i);switch(t){case Qf:return n*e;case th:return n*e;case nh:return n*e*2;case ih:return n*e/s.components*s.byteLength;case xc:return n*e/s.components*s.byteLength;case sh:return n*e*2/s.components*s.byteLength;case yc:return n*e*2/s.components*s.byteLength;case eh:return n*e*3/s.components*s.byteLength;case Nn:return n*e*4/s.components*s.byteLength;case bc:return n*e*4/s.components*s.byteLength;case Ta:case Aa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case wa:case Ca:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Tl:case wl:return Math.max(n,16)*Math.max(e,8)/4;case El:case Al:return Math.max(n,8)*Math.max(e,8)/2;case Cl:case Rl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Pl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Dl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ll:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Il:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ul:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Nl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Fl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ol:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Bl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case kl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case zl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Hl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Vl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Gl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Wl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ra:case Xl:case $l:return Math.ceil(n/4)*Math.ceil(e/4)*16;case rh:case jl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ql:case Yl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Gx(n){switch(n){case yi:case Kf:return{byteLength:1,components:1};case zr:case Zf:case $r:return{byteLength:2,components:1};case _c:case vc:return{byteLength:2,components:4};case hs:case gc:case pi:return{byteLength:4,components:1};case Jf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mc);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Sh(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Wx(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,u);else{d.sort((p,v)=>p.start-v.start);let h=0;for(let p=1;p<d.length;p++){const v=d[h],M=d[p];M.start<=v.start+v.count+1?v.count=Math.max(v.count,M.start+M.count-v.start):(++h,d[h]=M)}d.length=h+1;for(let p=0,v=d.length;p<v;p++){const M=d[p];n.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Xx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$x=`#ifdef USE_ALPHAHASH
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
#endif`,jx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zx=`#ifdef USE_AOMAP
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
#endif`,Jx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qx=`#ifdef USE_BATCHING
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
#endif`,ey=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ty=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ny=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sy=`#ifdef USE_IRIDESCENCE
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
#endif`,ry=`#ifdef USE_BUMPMAP
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
#endif`,ay=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,oy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ly=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hy=`#if defined( USE_COLOR_ALPHA )
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
#endif`,py=`#define PI 3.141592653589793
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
} // validated`,my=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gy=`vec3 transformedNormal = objectNormal;
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
#endif`,_y=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,by="gl_FragColor = linearToOutputTexel( gl_FragColor );",My=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sy=`#ifdef USE_ENVMAP
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
#endif`,Ey=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ty=`#ifdef USE_ENVMAP
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
#endif`,Ay=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wy=`#ifdef USE_ENVMAP
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
#endif`,Cy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ry=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Py=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ly=`#ifdef USE_GRADIENTMAP
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
}`,Iy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Uy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ny=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fy=`uniform bool receiveShadow;
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
#endif`,Oy=`#ifdef USE_ENVMAP
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
#endif`,By=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ky=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vy=`PhysicalMaterial material;
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
#endif`,Gy=`struct PhysicalMaterial {
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
}`,Wy=`
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
#endif`,Xy=`#if defined( RE_IndirectDiffuse )
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
#endif`,$y=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ky=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,eb=`#if defined( USE_POINTS_UV )
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
#endif`,tb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ib=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ab=`#ifdef USE_MORPHTARGETS
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
#endif`,ob=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,cb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ub=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,db=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hb=`#ifdef USE_NORMALMAP
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
#endif`,pb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_b=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Eb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ab=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Rb=`float getShadowMask() {
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
}`,Pb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Db=`#ifdef USE_SKINNING
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
#endif`,Lb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ib=`#ifdef USE_SKINNING
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
#endif`,Ub=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ob=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bb=`#ifdef USE_TRANSMISSION
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
#endif`,kb=`#ifdef USE_TRANSMISSION
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
#endif`,zb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Wb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xb=`uniform sampler2D t2D;
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
}`,$b=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,qb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kb=`#include <common>
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
}`,Zb=`#if DEPTH_PACKING == 3200
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
}`,Jb=`#define DISTANCE
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
}`,Qb=`#define DISTANCE
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
}`,eM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nM=`uniform float scale;
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
}`,iM=`uniform vec3 diffuse;
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
}`,sM=`#include <common>
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
}`,rM=`uniform vec3 diffuse;
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
}`,aM=`#define LAMBERT
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
}`,oM=`#define LAMBERT
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
}`,lM=`#define MATCAP
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
}`,cM=`#define MATCAP
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
}`,uM=`#define NORMAL
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
}`,dM=`#define NORMAL
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
}`,fM=`#define PHONG
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
}`,hM=`#define PHONG
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
}`,pM=`#define STANDARD
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
}`,mM=`#define STANDARD
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
}`,gM=`#define TOON
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
}`,_M=`#define TOON
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
}`,vM=`uniform float size;
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
}`,xM=`uniform vec3 diffuse;
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
}`,yM=`#include <common>
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
}`,bM=`uniform vec3 color;
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
}`,MM=`uniform float rotation;
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
}`,SM=`uniform vec3 diffuse;
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
}`,nt={alphahash_fragment:Xx,alphahash_pars_fragment:$x,alphamap_fragment:jx,alphamap_pars_fragment:qx,alphatest_fragment:Yx,alphatest_pars_fragment:Kx,aomap_fragment:Zx,aomap_pars_fragment:Jx,batching_pars_vertex:Qx,batching_vertex:ey,begin_vertex:ty,beginnormal_vertex:ny,bsdfs:iy,iridescence_fragment:sy,bumpmap_pars_fragment:ry,clipping_planes_fragment:ay,clipping_planes_pars_fragment:oy,clipping_planes_pars_vertex:ly,clipping_planes_vertex:cy,color_fragment:uy,color_pars_fragment:dy,color_pars_vertex:fy,color_vertex:hy,common:py,cube_uv_reflection_fragment:my,defaultnormal_vertex:gy,displacementmap_pars_vertex:_y,displacementmap_vertex:vy,emissivemap_fragment:xy,emissivemap_pars_fragment:yy,colorspace_fragment:by,colorspace_pars_fragment:My,envmap_fragment:Sy,envmap_common_pars_fragment:Ey,envmap_pars_fragment:Ty,envmap_pars_vertex:Ay,envmap_physical_pars_fragment:Oy,envmap_vertex:wy,fog_vertex:Cy,fog_pars_vertex:Ry,fog_fragment:Py,fog_pars_fragment:Dy,gradientmap_pars_fragment:Ly,lightmap_pars_fragment:Iy,lights_lambert_fragment:Uy,lights_lambert_pars_fragment:Ny,lights_pars_begin:Fy,lights_toon_fragment:By,lights_toon_pars_fragment:ky,lights_phong_fragment:zy,lights_phong_pars_fragment:Hy,lights_physical_fragment:Vy,lights_physical_pars_fragment:Gy,lights_fragment_begin:Wy,lights_fragment_maps:Xy,lights_fragment_end:$y,logdepthbuf_fragment:jy,logdepthbuf_pars_fragment:qy,logdepthbuf_pars_vertex:Yy,logdepthbuf_vertex:Ky,map_fragment:Zy,map_pars_fragment:Jy,map_particle_fragment:Qy,map_particle_pars_fragment:eb,metalnessmap_fragment:tb,metalnessmap_pars_fragment:nb,morphinstance_vertex:ib,morphcolor_vertex:sb,morphnormal_vertex:rb,morphtarget_pars_vertex:ab,morphtarget_vertex:ob,normal_fragment_begin:lb,normal_fragment_maps:cb,normal_pars_fragment:ub,normal_pars_vertex:db,normal_vertex:fb,normalmap_pars_fragment:hb,clearcoat_normal_fragment_begin:pb,clearcoat_normal_fragment_maps:mb,clearcoat_pars_fragment:gb,iridescence_pars_fragment:_b,opaque_fragment:vb,packing:xb,premultiplied_alpha_fragment:yb,project_vertex:bb,dithering_fragment:Mb,dithering_pars_fragment:Sb,roughnessmap_fragment:Eb,roughnessmap_pars_fragment:Tb,shadowmap_pars_fragment:Ab,shadowmap_pars_vertex:wb,shadowmap_vertex:Cb,shadowmask_pars_fragment:Rb,skinbase_vertex:Pb,skinning_pars_vertex:Db,skinning_vertex:Lb,skinnormal_vertex:Ib,specularmap_fragment:Ub,specularmap_pars_fragment:Nb,tonemapping_fragment:Fb,tonemapping_pars_fragment:Ob,transmission_fragment:Bb,transmission_pars_fragment:kb,uv_pars_fragment:zb,uv_pars_vertex:Hb,uv_vertex:Vb,worldpos_vertex:Gb,background_vert:Wb,background_frag:Xb,backgroundCube_vert:$b,backgroundCube_frag:jb,cube_vert:qb,cube_frag:Yb,depth_vert:Kb,depth_frag:Zb,distanceRGBA_vert:Jb,distanceRGBA_frag:Qb,equirect_vert:eM,equirect_frag:tM,linedashed_vert:nM,linedashed_frag:iM,meshbasic_vert:sM,meshbasic_frag:rM,meshlambert_vert:aM,meshlambert_frag:oM,meshmatcap_vert:lM,meshmatcap_frag:cM,meshnormal_vert:uM,meshnormal_frag:dM,meshphong_vert:fM,meshphong_frag:hM,meshphysical_vert:pM,meshphysical_frag:mM,meshtoon_vert:gM,meshtoon_frag:_M,points_vert:vM,points_frag:xM,shadow_vert:yM,shadow_frag:bM,sprite_vert:MM,sprite_frag:SM},we={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},Wn={basic:{uniforms:Qt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:Qt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new rt(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:Qt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:Qt([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:Qt([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new rt(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:Qt([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:Qt([we.points,we.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:Qt([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:Qt([we.common,we.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:Qt([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:Qt([we.sprite,we.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:Qt([we.common,we.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:Qt([we.lights,we.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};Wn.physical={uniforms:Qt([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const va={r:0,b:0,g:0},Qi=new Qn,EM=new Dt;function TM(n,e,t,i,s,r,a){const o=new rt(0);let l=r===!0?0:1,c,u,d=null,h=0,p=null;function v(R){let y=R.isScene===!0?R.background:null;return y&&y.isTexture&&(y=(R.backgroundBlurriness>0?t:e).get(y)),y}function M(R){let y=!1;const L=v(R);L===null?f(o,l):L&&L.isColor&&(f(L,1),y=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(R,y){const L=v(y);L&&(L.isCubeTexture||L.mapping===so)?(u===void 0&&(u=new Nt(new Oi(1,1,1),new zi({name:"BackgroundCubeMaterial",uniforms:nr(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,E,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Qi.copy(y.backgroundRotation),Qi.x*=-1,Qi.y*=-1,Qi.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Qi.y*=-1,Qi.z*=-1),u.material.uniforms.envMap.value=L,u.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(EM.makeRotationFromEuler(Qi)),u.material.toneMapped=ut.getTransfer(L.colorSpace)!==xt,(d!==L||h!==L.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=L,h=L.version,p=n.toneMapping),u.layers.enableAll(),R.unshift(u,u.geometry,u.material,0,0,null)):L&&L.isTexture&&(c===void 0&&(c=new Nt(new ir(2,2),new zi({name:"BackgroundMaterial",uniforms:nr(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:ki,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=L,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=ut.getTransfer(L.colorSpace)!==xt,L.matrixAutoUpdate===!0&&L.updateMatrix(),c.material.uniforms.uvTransform.value.copy(L.matrix),(d!==L||h!==L.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=L,h=L.version,p=n.toneMapping),c.layers.enableAll(),R.unshift(c,c.geometry,c.material,0,0,null))}function f(R,y){R.getRGB(va,_h(n)),i.buffers.color.setClear(va.r,va.g,va.b,y,a)}function C(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(R,y=1){o.set(R),l=y,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(R){l=R,f(o,l)},render:M,addToRenderList:g,dispose:C}}function AM(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,a=!1;function o(b,I,U,N,W){let ne=!1;const Y=d(N,U,I);r!==Y&&(r=Y,c(r.object)),ne=p(b,N,U,W),ne&&v(b,N,U,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(ne||a)&&(a=!1,y(b,I,U,N),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return n.createVertexArray()}function c(b){return n.bindVertexArray(b)}function u(b){return n.deleteVertexArray(b)}function d(b,I,U){const N=U.wireframe===!0;let W=i[b.id];W===void 0&&(W={},i[b.id]=W);let ne=W[I.id];ne===void 0&&(ne={},W[I.id]=ne);let Y=ne[N];return Y===void 0&&(Y=h(l()),ne[N]=Y),Y}function h(b){const I=[],U=[],N=[];for(let W=0;W<t;W++)I[W]=0,U[W]=0,N[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:U,attributeDivisors:N,object:b,attributes:{},index:null}}function p(b,I,U,N){const W=r.attributes,ne=I.attributes;let Y=0;const se=U.getAttributes();for(const z in se)if(se[z].location>=0){const Me=W[z];let be=ne[z];if(be===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&(be=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&(be=b.instanceColor)),Me===void 0||Me.attribute!==be||be&&Me.data!==be.data)return!0;Y++}return r.attributesNum!==Y||r.index!==N}function v(b,I,U,N){const W={},ne=I.attributes;let Y=0;const se=U.getAttributes();for(const z in se)if(se[z].location>=0){let Me=ne[z];Me===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&(Me=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&(Me=b.instanceColor));const be={};be.attribute=Me,Me&&Me.data&&(be.data=Me.data),W[z]=be,Y++}r.attributes=W,r.attributesNum=Y,r.index=N}function M(){const b=r.newAttributes;for(let I=0,U=b.length;I<U;I++)b[I]=0}function g(b){f(b,0)}function f(b,I){const U=r.newAttributes,N=r.enabledAttributes,W=r.attributeDivisors;U[b]=1,N[b]===0&&(n.enableVertexAttribArray(b),N[b]=1),W[b]!==I&&(n.vertexAttribDivisor(b,I),W[b]=I)}function C(){const b=r.newAttributes,I=r.enabledAttributes;for(let U=0,N=I.length;U<N;U++)I[U]!==b[U]&&(n.disableVertexAttribArray(U),I[U]=0)}function R(b,I,U,N,W,ne,Y){Y===!0?n.vertexAttribIPointer(b,I,U,W,ne):n.vertexAttribPointer(b,I,U,N,W,ne)}function y(b,I,U,N){M();const W=N.attributes,ne=U.getAttributes(),Y=I.defaultAttributeValues;for(const se in ne){const z=ne[se];if(z.location>=0){let me=W[se];if(me===void 0&&(se==="instanceMatrix"&&b.instanceMatrix&&(me=b.instanceMatrix),se==="instanceColor"&&b.instanceColor&&(me=b.instanceColor)),me!==void 0){const Me=me.normalized,be=me.itemSize,Fe=e.get(me);if(Fe===void 0)continue;const je=Fe.buffer,re=Fe.type,ve=Fe.bytesPerElement,Le=re===n.INT||re===n.UNSIGNED_INT||me.gpuType===gc;if(me.isInterleavedBufferAttribute){const Ee=me.data,Be=Ee.stride,ke=me.offset;if(Ee.isInstancedInterleavedBuffer){for(let Ye=0;Ye<z.locationSize;Ye++)f(z.location+Ye,Ee.meshPerAttribute);b.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let Ye=0;Ye<z.locationSize;Ye++)g(z.location+Ye);n.bindBuffer(n.ARRAY_BUFFER,je);for(let Ye=0;Ye<z.locationSize;Ye++)R(z.location+Ye,be/z.locationSize,re,Me,Be*ve,(ke+be/z.locationSize*Ye)*ve,Le)}else{if(me.isInstancedBufferAttribute){for(let Ee=0;Ee<z.locationSize;Ee++)f(z.location+Ee,me.meshPerAttribute);b.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Ee=0;Ee<z.locationSize;Ee++)g(z.location+Ee);n.bindBuffer(n.ARRAY_BUFFER,je);for(let Ee=0;Ee<z.locationSize;Ee++)R(z.location+Ee,be/z.locationSize,re,Me,be*ve,be/z.locationSize*Ee*ve,Le)}}else if(Y!==void 0){const Me=Y[se];if(Me!==void 0)switch(Me.length){case 2:n.vertexAttrib2fv(z.location,Me);break;case 3:n.vertexAttrib3fv(z.location,Me);break;case 4:n.vertexAttrib4fv(z.location,Me);break;default:n.vertexAttrib1fv(z.location,Me)}}}}C()}function L(){D();for(const b in i){const I=i[b];for(const U in I){const N=I[U];for(const W in N)u(N[W].object),delete N[W];delete I[U]}delete i[b]}}function w(b){if(i[b.id]===void 0)return;const I=i[b.id];for(const U in I){const N=I[U];for(const W in N)u(N[W].object),delete N[W];delete I[U]}delete i[b.id]}function E(b){for(const I in i){const U=i[I];if(U[b.id]===void 0)continue;const N=U[b.id];for(const W in N)u(N[W].object),delete N[W];delete U[b.id]}}function D(){S(),a=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:S,dispose:L,releaseStatesOfGeometry:w,releaseStatesOfProgram:E,initAttributes:M,enableAttribute:g,disableUnusedAttributes:C}}function wM(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),t.update(u,i,d))}function o(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let v=0;v<d;v++)p+=u[v];t.update(p,i,1)}function l(c,u,d,h){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)a(c[v],u[v],h[v]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,d);let v=0;for(let M=0;M<d;M++)v+=u[M]*h[M];t.update(v,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function CM(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(E){return!(E!==Nn&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const D=E===$r&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==yi&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==pi&&!D)}function l(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),C=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),R=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=v>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:C,maxVaryings:R,maxFragmentUniforms:y,vertexTextures:L,maxSamples:w}}function RM(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new Di,o=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||s;return s=h,i=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,p){const v=d.clippingPlanes,M=d.clipIntersection,g=d.clipShadows,f=n.get(d);if(!s||v===null||v.length===0||r&&!g)r?u(null):c();else{const C=r?0:i,R=C*4;let y=f.clippingState||null;l.value=y,y=u(v,h,R,p);for(let L=0;L!==R;++L)y[L]=t[L];f.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=C}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,p,v){const M=d!==null?d.length:0;let g=null;if(M!==0){if(g=l.value,v!==!0||g===null){const f=p+M*4,C=h.matrixWorldInverse;o.getNormalMatrix(C),(g===null||g.length<f)&&(g=new Float32Array(f));for(let R=0,y=p;R!==M;++R,y+=4)a.copy(d[R]).applyMatrix4(C,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,g}}function PM(n){let e=new WeakMap;function t(a,o){return o===bl?a.mapping=Zs:o===Ml&&(a.mapping=Js),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===bl||o===Ml)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Ax(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const ks=4,Ku=[.125,.215,.35,.446,.526,.582],rs=20,Xo=new Mh,Zu=new rt;let $o=null,jo=0,qo=0,Yo=!1;const ns=(1+Math.sqrt(5))/2,Us=1/ns,Ju=[new X(-ns,Us,0),new X(ns,Us,0),new X(-Us,0,ns),new X(Us,0,ns),new X(0,ns,-Us),new X(0,ns,Us),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)];class Qu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){$o=this._renderer.getRenderTarget(),jo=this._renderer.getActiveCubeFace(),qo=this._renderer.getActiveMipmapLevel(),Yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=td(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($o,jo,qo),this._renderer.xr.enabled=Yo,e.scissorTest=!1,xa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zs||e.mapping===Js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$o=this._renderer.getRenderTarget(),jo=this._renderer.getActiveCubeFace(),qo=this._renderer.getActiveMipmapLevel(),Yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Yn,minFilter:Yn,generateMipmaps:!1,type:$r,format:Nn,colorSpace:tr,depthBuffer:!1},s=ed(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ed(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=DM(r)),this._blurMaterial=LM(r,e,t)}return s}_compileMaterial(e){const t=new Nt(this._lodPlanes[0],e);this._renderer.compile(t,Xo)}_sceneToCubeUV(e,t,i,s){const o=new Tn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(Zu),u.toneMapping=Fi,u.autoClear=!1;const p=new ph({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),v=new Nt(new Oi,p);let M=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,M=!0):(p.color.copy(Zu),M=!0);for(let f=0;f<6;f++){const C=f%3;C===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):C===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const R=this._cubeSize;xa(s,C*R,f>2?R:0,R,R),u.setRenderTarget(s),M&&u.render(v,o),u.render(e,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Zs||e.mapping===Js;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=nd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=td());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Nt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;xa(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Xo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ju[(s-r-1)%Ju.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Nt(this._lodPlanes[s],c),h=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*rs-1),M=r/v,g=isFinite(r)?1+Math.floor(u*M):rs;g>rs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${rs}`);const f=[];let C=0;for(let E=0;E<rs;++E){const D=E/M,S=Math.exp(-D*D/2);f.push(S),E===0?C+=S:E<g&&(C+=2*S)}for(let E=0;E<f.length;E++)f[E]=f[E]/C;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=f,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:R}=this;h.dTheta.value=v,h.mipInt.value=R-i;const y=this._sizeLods[s],L=3*y*(s>R-ks?s-R+ks:0),w=4*(this._cubeSize-y);xa(t,L,w,3*y,2*y),l.setRenderTarget(t),l.render(d,Xo)}}function DM(n){const e=[],t=[],i=[];let s=n;const r=n-ks+1+Ku.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>n-ks?l=Ku[a-n+ks-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,v=6,M=3,g=2,f=1,C=new Float32Array(M*v*p),R=new Float32Array(g*v*p),y=new Float32Array(f*v*p);for(let w=0;w<p;w++){const E=w%3*2/3-1,D=w>2?0:-1,S=[E,D,0,E+2/3,D,0,E+2/3,D+1,0,E,D,0,E+2/3,D+1,0,E,D+1,0];C.set(S,M*v*w),R.set(h,g*v*w);const b=[w,w,w,w,w,w];y.set(b,f*v*w)}const L=new kn;L.setAttribute("position",new Zn(C,M)),L.setAttribute("uv",new Zn(R,g)),L.setAttribute("faceIndex",new Zn(y,f)),e.push(L),s>ks&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function ed(n,e,t){const i=new ps(n,e,t);return i.texture.mapping=so,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function xa(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function LM(n,e,t){const i=new Float32Array(rs),s=new X(0,1,0);return new zi({name:"SphericalGaussianBlur",defines:{n:rs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Cc(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function td(){return new zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cc(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function nd(){return new zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Cc(){return`

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
	`}function IM(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===bl||l===Ml,u=l===Zs||l===Js;if(c||u){let d=e.get(o);const h=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new Qu(n)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new Qu(n)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function UM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Os("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function NM(n,e,t,i){const s={},r=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);h.removeEventListener("dispose",a),delete s[h.id];const p=r.get(h);p&&(e.remove(p),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const p in h)e.update(h[p],n.ARRAY_BUFFER)}function c(d){const h=[],p=d.index,v=d.attributes.position;let M=0;if(p!==null){const C=p.array;M=p.version;for(let R=0,y=C.length;R<y;R+=3){const L=C[R+0],w=C[R+1],E=C[R+2];h.push(L,w,w,E,E,L)}}else if(v!==void 0){const C=v.array;M=v.version;for(let R=0,y=C.length/3-1;R<y;R+=3){const L=R+0,w=R+1,E=R+2;h.push(L,w,w,E,E,L)}}else return;const g=new(lh(h)?gh:mh)(h,1);g.version=M;const f=r.get(d);f&&e.remove(f),r.set(d,g)}function u(d){const h=r.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function FM(n,e,t){let i;function s(h){i=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,p){n.drawElements(i,p,r,h*a),t.update(p,i,1)}function c(h,p,v){v!==0&&(n.drawElementsInstanced(i,p,r,h*a,v),t.update(p,i,v))}function u(h,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,h,0,v);let g=0;for(let f=0;f<v;f++)g+=p[f];t.update(g,i,1)}function d(h,p,v,M){if(v===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let f=0;f<h.length;f++)c(h[f]/a,p[f],M[f]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,r,h,0,M,0,v);let f=0;for(let C=0;C<v;C++)f+=p[C]*M[C];t.update(f,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function OM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function BM(n,e,t){const i=new WeakMap,s=new Pt;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==d){let b=function(){D.dispose(),i.delete(o),o.removeEventListener("dispose",b)};var p=b;h!==void 0&&h.texture.dispose();const v=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],C=o.morphAttributes.normal||[],R=o.morphAttributes.color||[];let y=0;v===!0&&(y=1),M===!0&&(y=2),g===!0&&(y=3);let L=o.attributes.position.count*y,w=1;L>e.maxTextureSize&&(w=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const E=new Float32Array(L*w*4*d),D=new uh(E,L,w,d);D.type=pi,D.needsUpdate=!0;const S=y*4;for(let I=0;I<d;I++){const U=f[I],N=C[I],W=R[I],ne=L*w*4*I;for(let Y=0;Y<U.count;Y++){const se=Y*S;v===!0&&(s.fromBufferAttribute(U,Y),E[ne+se+0]=s.x,E[ne+se+1]=s.y,E[ne+se+2]=s.z,E[ne+se+3]=0),M===!0&&(s.fromBufferAttribute(N,Y),E[ne+se+4]=s.x,E[ne+se+5]=s.y,E[ne+se+6]=s.z,E[ne+se+7]=0),g===!0&&(s.fromBufferAttribute(W,Y),E[ne+se+8]=s.x,E[ne+se+9]=s.y,E[ne+se+10]=s.z,E[ne+se+11]=W.itemSize===4?s.w:1)}}h={count:d,texture:D,size:new Xe(L,w)},i.set(o,h),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let v=0;for(let g=0;g<c.length;g++)v+=c[g];const M=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(n,"morphTargetBaseInfluence",M),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function kM(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return d}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const Eh=new sn,id=new yh(1,1),Th=new uh,Ah=new ux,wh=new xh,sd=[],rd=[],ad=new Float32Array(16),od=new Float32Array(9),ld=new Float32Array(4);function ar(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=sd[s];if(r===void 0&&(r=new Float32Array(s),sd[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Ot(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Bt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ro(n,e){let t=rd[e];t===void 0&&(t=new Int32Array(e),rd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function zM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function HM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2fv(this.addr,e),Bt(t,e)}}function VM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;n.uniform3fv(this.addr,e),Bt(t,e)}}function GM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4fv(this.addr,e),Bt(t,e)}}function WM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,i))return;ld.set(i),n.uniformMatrix2fv(this.addr,!1,ld),Bt(t,i)}}function XM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,i))return;od.set(i),n.uniformMatrix3fv(this.addr,!1,od),Bt(t,i)}}function $M(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,i))return;ad.set(i),n.uniformMatrix4fv(this.addr,!1,ad),Bt(t,i)}}function jM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function qM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2iv(this.addr,e),Bt(t,e)}}function YM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;n.uniform3iv(this.addr,e),Bt(t,e)}}function KM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4iv(this.addr,e),Bt(t,e)}}function ZM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function JM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2uiv(this.addr,e),Bt(t,e)}}function QM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;n.uniform3uiv(this.addr,e),Bt(t,e)}}function eS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4uiv(this.addr,e),Bt(t,e)}}function tS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(id.compareFunction=oh,r=id):r=Eh,t.setTexture2D(e||r,s)}function nS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Ah,s)}function iS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||wh,s)}function sS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Th,s)}function rS(n){switch(n){case 5126:return zM;case 35664:return HM;case 35665:return VM;case 35666:return GM;case 35674:return WM;case 35675:return XM;case 35676:return $M;case 5124:case 35670:return jM;case 35667:case 35671:return qM;case 35668:case 35672:return YM;case 35669:case 35673:return KM;case 5125:return ZM;case 36294:return JM;case 36295:return QM;case 36296:return eS;case 35678:case 36198:case 36298:case 36306:case 35682:return tS;case 35679:case 36299:case 36307:return nS;case 35680:case 36300:case 36308:case 36293:return iS;case 36289:case 36303:case 36311:case 36292:return sS}}function aS(n,e){n.uniform1fv(this.addr,e)}function oS(n,e){const t=ar(e,this.size,2);n.uniform2fv(this.addr,t)}function lS(n,e){const t=ar(e,this.size,3);n.uniform3fv(this.addr,t)}function cS(n,e){const t=ar(e,this.size,4);n.uniform4fv(this.addr,t)}function uS(n,e){const t=ar(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function dS(n,e){const t=ar(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function fS(n,e){const t=ar(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function hS(n,e){n.uniform1iv(this.addr,e)}function pS(n,e){n.uniform2iv(this.addr,e)}function mS(n,e){n.uniform3iv(this.addr,e)}function gS(n,e){n.uniform4iv(this.addr,e)}function _S(n,e){n.uniform1uiv(this.addr,e)}function vS(n,e){n.uniform2uiv(this.addr,e)}function xS(n,e){n.uniform3uiv(this.addr,e)}function yS(n,e){n.uniform4uiv(this.addr,e)}function bS(n,e,t){const i=this.cache,s=e.length,r=ro(t,s);Ot(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Eh,r[a])}function MS(n,e,t){const i=this.cache,s=e.length,r=ro(t,s);Ot(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Ah,r[a])}function SS(n,e,t){const i=this.cache,s=e.length,r=ro(t,s);Ot(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||wh,r[a])}function ES(n,e,t){const i=this.cache,s=e.length,r=ro(t,s);Ot(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Th,r[a])}function TS(n){switch(n){case 5126:return aS;case 35664:return oS;case 35665:return lS;case 35666:return cS;case 35674:return uS;case 35675:return dS;case 35676:return fS;case 5124:case 35670:return hS;case 35667:case 35671:return pS;case 35668:case 35672:return mS;case 35669:case 35673:return gS;case 5125:return _S;case 36294:return vS;case 36295:return xS;case 36296:return yS;case 35678:case 36198:case 36298:case 36306:case 35682:return bS;case 35679:case 36299:case 36307:return MS;case 35680:case 36300:case 36308:case 36293:return SS;case 36289:case 36303:case 36311:case 36292:return ES}}class AS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=rS(t.type)}}class wS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=TS(t.type)}}class CS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const Ko=/(\w+)(\])?(\[|\.)?/g;function cd(n,e){n.seq.push(e),n.map[e.id]=e}function RS(n,e,t){const i=n.name,s=i.length;for(Ko.lastIndex=0;;){const r=Ko.exec(i),a=Ko.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){cd(t,c===void 0?new AS(o,n,e):new wS(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new CS(o),cd(t,d)),t=d}}}class Da{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);RS(r,a,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function ud(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const PS=37297;let DS=0;function LS(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const dd=new tt;function IS(n){ut._getMatrix(dd,ut.workingColorSpace,n);const e=`mat3( ${dd.elements.map(t=>t.toFixed(4))} )`;switch(ut.getTransfer(n)){case Va:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function fd(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+LS(n.getShaderSource(e),a)}else return s}function US(n,e){const t=IS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function NS(n,e){let t;switch(e){case Nv:t="Linear";break;case Fv:t="Reinhard";break;case Ov:t="Cineon";break;case Bv:t="ACESFilmic";break;case zv:t="AgX";break;case Hv:t="Neutral";break;case kv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ya=new X;function FS(){ut.getLuminanceCoefficients(ya);const n=ya.x.toFixed(4),e=ya.y.toFixed(4),t=ya.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function OS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sr).join(`
`)}function BS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function kS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Sr(n){return n!==""}function hd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const zS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zl(n){return n.replace(zS,VS)}const HS=new Map;function VS(n,e){let t=nt[e];if(t===void 0){const i=HS.get(e);if(i!==void 0)t=nt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Zl(t)}const GS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function md(n){return n.replace(GS,WS)}function WS(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function gd(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function XS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===$f?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===jf?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===li&&(e="SHADOWMAP_TYPE_VSM"),e}function $S(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Zs:case Js:e="ENVMAP_TYPE_CUBE";break;case so:e="ENVMAP_TYPE_CUBE_UV";break}return e}function jS(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Js:e="ENVMAP_MODE_REFRACTION";break}return e}function qS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case qf:e="ENVMAP_BLENDING_MULTIPLY";break;case Iv:e="ENVMAP_BLENDING_MIX";break;case Uv:e="ENVMAP_BLENDING_ADD";break}return e}function YS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function KS(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=XS(t),c=$S(t),u=jS(t),d=qS(t),h=YS(t),p=OS(t),v=BS(r),M=s.createProgram();let g,f,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Sr).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Sr).join(`
`),f.length>0&&(f+=`
`)):(g=[gd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sr).join(`
`),f=[gd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fi?"#define TONE_MAPPING":"",t.toneMapping!==Fi?nt.tonemapping_pars_fragment:"",t.toneMapping!==Fi?NS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,US("linearToOutputTexel",t.outputColorSpace),FS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Sr).join(`
`)),a=Zl(a),a=hd(a,t),a=pd(a,t),o=Zl(o),o=hd(o,t),o=pd(o,t),a=md(a),o=md(o),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",t.glslVersion===wu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const R=C+g+a,y=C+f+o,L=ud(s,s.VERTEX_SHADER,R),w=ud(s,s.FRAGMENT_SHADER,y);s.attachShader(M,L),s.attachShader(M,w),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function E(I){if(n.debug.checkShaderErrors){const U=s.getProgramInfoLog(M).trim(),N=s.getShaderInfoLog(L).trim(),W=s.getShaderInfoLog(w).trim();let ne=!0,Y=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(ne=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,M,L,w);else{const se=fd(s,L,"vertex"),z=fd(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+U+`
`+se+`
`+z)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(N===""||W==="")&&(Y=!1);Y&&(I.diagnostics={runnable:ne,programLog:U,vertexShader:{log:N,prefix:g},fragmentShader:{log:W,prefix:f}})}s.deleteShader(L),s.deleteShader(w),D=new Da(s,M),S=kS(s,M)}let D;this.getUniforms=function(){return D===void 0&&E(this),D};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(M,PS)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=DS++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=L,this.fragmentShader=w,this}let ZS=0;class JS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new QS(e),t.set(e,i)),i}}class QS{constructor(e){this.id=ZS++,this.code=e,this.usedTimes=0}}function e1(n,e,t,i,s,r,a){const o=new fh,l=new JS,c=new Set,u=[],d=s.logarithmicDepthBuffer,h=s.vertexTextures;let p=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,b,I,U,N){const W=U.fog,ne=N.geometry,Y=S.isMeshStandardMaterial?U.environment:null,se=(S.isMeshStandardMaterial?t:e).get(S.envMap||Y),z=se&&se.mapping===so?se.image.height:null,me=v[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const Me=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,be=Me!==void 0?Me.length:0;let Fe=0;ne.morphAttributes.position!==void 0&&(Fe=1),ne.morphAttributes.normal!==void 0&&(Fe=2),ne.morphAttributes.color!==void 0&&(Fe=3);let je,re,ve,Le;if(me){const ae=Wn[me];je=ae.vertexShader,re=ae.fragmentShader}else je=S.vertexShader,re=S.fragmentShader,l.update(S),ve=l.getVertexShaderID(S),Le=l.getFragmentShaderID(S);const Ee=n.getRenderTarget(),Be=n.state.buffers.depth.getReversed(),ke=N.isInstancedMesh===!0,Ye=N.isBatchedMesh===!0,dt=!!S.map,P=!!S.matcap,O=!!se,T=!!S.aoMap,oe=!!S.lightMap,ee=!!S.bumpMap,J=!!S.normalMap,te=!!S.displacementMap,ue=!!S.emissiveMap,Q=!!S.metalnessMap,x=!!S.roughnessMap,_=S.anisotropy>0,F=S.clearcoat>0,G=S.dispersion>0,j=S.iridescence>0,$=S.sheen>0,_e=S.transmission>0,de=_&&!!S.anisotropyMap,xe=F&&!!S.clearcoatMap,ze=F&&!!S.clearcoatNormalMap,fe=F&&!!S.clearcoatRoughnessMap,Te=j&&!!S.iridescenceMap,Oe=j&&!!S.iridescenceThicknessMap,Ve=$&&!!S.sheenColorMap,Se=$&&!!S.sheenRoughnessMap,qe=!!S.specularMap,We=!!S.specularColorMap,lt=!!S.specularIntensityMap,B=_e&&!!S.transmissionMap,Ae=_e&&!!S.thicknessMap,ie=!!S.gradientMap,ce=!!S.alphaMap,Pe=S.alphaTest>0,Re=!!S.alphaHash,Z=!!S.extensions;let H=Fi;S.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(H=n.toneMapping);const Ie={shaderID:me,shaderType:S.type,shaderName:S.name,vertexShader:je,fragmentShader:re,defines:S.defines,customVertexShaderID:ve,customFragmentShaderID:Le,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Ye,batchingColor:Ye&&N._colorsTexture!==null,instancing:ke,instancingColor:ke&&N.instanceColor!==null,instancingMorph:ke&&N.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:Ee===null?n.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:tr,alphaToCoverage:!!S.alphaToCoverage,map:dt,matcap:P,envMap:O,envMapMode:O&&se.mapping,envMapCubeUVHeight:z,aoMap:T,lightMap:oe,bumpMap:ee,normalMap:J,displacementMap:h&&te,emissiveMap:ue,normalMapObjectSpace:J&&S.normalMapType===Xv,normalMapTangentSpace:J&&S.normalMapType===ah,metalnessMap:Q,roughnessMap:x,anisotropy:_,anisotropyMap:de,clearcoat:F,clearcoatMap:xe,clearcoatNormalMap:ze,clearcoatRoughnessMap:fe,dispersion:G,iridescence:j,iridescenceMap:Te,iridescenceThicknessMap:Oe,sheen:$,sheenColorMap:Ve,sheenRoughnessMap:Se,specularMap:qe,specularColorMap:We,specularIntensityMap:lt,transmission:_e,transmissionMap:B,thicknessMap:Ae,gradientMap:ie,opaque:S.transparent===!1&&S.blending===Xs&&S.alphaToCoverage===!1,alphaMap:ce,alphaTest:Pe,alphaHash:Re,combine:S.combine,mapUv:dt&&M(S.map.channel),aoMapUv:T&&M(S.aoMap.channel),lightMapUv:oe&&M(S.lightMap.channel),bumpMapUv:ee&&M(S.bumpMap.channel),normalMapUv:J&&M(S.normalMap.channel),displacementMapUv:te&&M(S.displacementMap.channel),emissiveMapUv:ue&&M(S.emissiveMap.channel),metalnessMapUv:Q&&M(S.metalnessMap.channel),roughnessMapUv:x&&M(S.roughnessMap.channel),anisotropyMapUv:de&&M(S.anisotropyMap.channel),clearcoatMapUv:xe&&M(S.clearcoatMap.channel),clearcoatNormalMapUv:ze&&M(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&M(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&M(S.iridescenceMap.channel),iridescenceThicknessMapUv:Oe&&M(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&M(S.sheenColorMap.channel),sheenRoughnessMapUv:Se&&M(S.sheenRoughnessMap.channel),specularMapUv:qe&&M(S.specularMap.channel),specularColorMapUv:We&&M(S.specularColorMap.channel),specularIntensityMapUv:lt&&M(S.specularIntensityMap.channel),transmissionMapUv:B&&M(S.transmissionMap.channel),thicknessMapUv:Ae&&M(S.thicknessMap.channel),alphaMapUv:ce&&M(S.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(J||_),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!ne.attributes.uv&&(dt||ce),fog:!!W,useFog:S.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Be,skinning:N.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:Fe,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:H,decodeVideoTexture:dt&&S.map.isVideoTexture===!0&&ut.getTransfer(S.map.colorSpace)===xt,decodeVideoTextureEmissive:ue&&S.emissiveMap.isVideoTexture===!0&&ut.getTransfer(S.emissiveMap.colorSpace)===xt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===jn,flipSided:S.side===dn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Z&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Z&&S.extensions.multiDraw===!0||Ye)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ie.vertexUv1s=c.has(1),Ie.vertexUv2s=c.has(2),Ie.vertexUv3s=c.has(3),c.clear(),Ie}function f(S){const b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(const I in S.defines)b.push(I),b.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(C(b,S),R(b,S),b.push(n.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function C(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function R(S,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),S.push(o.mask)}function y(S){const b=v[S.type];let I;if(b){const U=Wn[b];I=Mx.clone(U.uniforms)}else I=S.uniforms;return I}function L(S,b){let I;for(let U=0,N=u.length;U<N;U++){const W=u[U];if(W.cacheKey===b){I=W,++I.usedTimes;break}}return I===void 0&&(I=new KS(n,b,S,r),u.push(I)),I}function w(S){if(--S.usedTimes===0){const b=u.indexOf(S);u[b]=u[u.length-1],u.pop(),S.destroy()}}function E(S){l.remove(S)}function D(){l.dispose()}return{getParameters:g,getProgramCacheKey:f,getUniforms:y,acquireProgram:L,releaseProgram:w,releaseShaderCache:E,programs:u,dispose:D}}function t1(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function n1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function _d(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function vd(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(d,h,p,v,M,g){let f=n[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:v,renderOrder:d.renderOrder,z:M,group:g},n[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=v,f.renderOrder=d.renderOrder,f.z=M,f.group=g),e++,f}function o(d,h,p,v,M,g){const f=a(d,h,p,v,M,g);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):t.push(f)}function l(d,h,p,v,M,g){const f=a(d,h,p,v,M,g);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function c(d,h){t.length>1&&t.sort(d||n1),i.length>1&&i.sort(h||_d),s.length>1&&s.sort(h||_d)}function u(){for(let d=e,h=n.length;d<h;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function i1(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new vd,n.set(i,[a])):s>=r.length?(a=new vd,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function s1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new rt};break;case"SpotLight":t={position:new X,direction:new X,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":t={color:new rt,position:new X,halfWidth:new X,halfHeight:new X};break}return n[e.id]=t,t}}}function r1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let a1=0;function o1(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function l1(n){const e=new s1,t=r1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new X);const s=new X,r=new Dt,a=new Dt;function o(c){let u=0,d=0,h=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,v=0,M=0,g=0,f=0,C=0,R=0,y=0,L=0,w=0,E=0;c.sort(o1);for(let S=0,b=c.length;S<b;S++){const I=c[S],U=I.color,N=I.intensity,W=I.distance,ne=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=U.r*N,d+=U.g*N,h+=U.b*N;else if(I.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(I.sh.coefficients[Y],N);E++}else if(I.isDirectionalLight){const Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const se=I.shadow,z=t.get(I);z.shadowIntensity=se.intensity,z.shadowBias=se.bias,z.shadowNormalBias=se.normalBias,z.shadowRadius=se.radius,z.shadowMapSize=se.mapSize,i.directionalShadow[p]=z,i.directionalShadowMap[p]=ne,i.directionalShadowMatrix[p]=I.shadow.matrix,C++}i.directional[p]=Y,p++}else if(I.isSpotLight){const Y=e.get(I);Y.position.setFromMatrixPosition(I.matrixWorld),Y.color.copy(U).multiplyScalar(N),Y.distance=W,Y.coneCos=Math.cos(I.angle),Y.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Y.decay=I.decay,i.spot[M]=Y;const se=I.shadow;if(I.map&&(i.spotLightMap[L]=I.map,L++,se.updateMatrices(I),I.castShadow&&w++),i.spotLightMatrix[M]=se.matrix,I.castShadow){const z=t.get(I);z.shadowIntensity=se.intensity,z.shadowBias=se.bias,z.shadowNormalBias=se.normalBias,z.shadowRadius=se.radius,z.shadowMapSize=se.mapSize,i.spotShadow[M]=z,i.spotShadowMap[M]=ne,y++}M++}else if(I.isRectAreaLight){const Y=e.get(I);Y.color.copy(U).multiplyScalar(N),Y.halfWidth.set(I.width*.5,0,0),Y.halfHeight.set(0,I.height*.5,0),i.rectArea[g]=Y,g++}else if(I.isPointLight){const Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),Y.distance=I.distance,Y.decay=I.decay,I.castShadow){const se=I.shadow,z=t.get(I);z.shadowIntensity=se.intensity,z.shadowBias=se.bias,z.shadowNormalBias=se.normalBias,z.shadowRadius=se.radius,z.shadowMapSize=se.mapSize,z.shadowCameraNear=se.camera.near,z.shadowCameraFar=se.camera.far,i.pointShadow[v]=z,i.pointShadowMap[v]=ne,i.pointShadowMatrix[v]=I.shadow.matrix,R++}i.point[v]=Y,v++}else if(I.isHemisphereLight){const Y=e.get(I);Y.skyColor.copy(I.color).multiplyScalar(N),Y.groundColor.copy(I.groundColor).multiplyScalar(N),i.hemi[f]=Y,f++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=we.LTC_FLOAT_1,i.rectAreaLTC2=we.LTC_FLOAT_2):(i.rectAreaLTC1=we.LTC_HALF_1,i.rectAreaLTC2=we.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const D=i.hash;(D.directionalLength!==p||D.pointLength!==v||D.spotLength!==M||D.rectAreaLength!==g||D.hemiLength!==f||D.numDirectionalShadows!==C||D.numPointShadows!==R||D.numSpotShadows!==y||D.numSpotMaps!==L||D.numLightProbes!==E)&&(i.directional.length=p,i.spot.length=M,i.rectArea.length=g,i.point.length=v,i.hemi.length=f,i.directionalShadow.length=C,i.directionalShadowMap.length=C,i.pointShadow.length=R,i.pointShadowMap.length=R,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=C,i.pointShadowMatrix.length=R,i.spotLightMatrix.length=y+L-w,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=E,D.directionalLength=p,D.pointLength=v,D.spotLength=M,D.rectAreaLength=g,D.hemiLength=f,D.numDirectionalShadows=C,D.numPointShadows=R,D.numSpotShadows=y,D.numSpotMaps=L,D.numLightProbes=E,i.version=a1++)}function l(c,u){let d=0,h=0,p=0,v=0,M=0;const g=u.matrixWorldInverse;for(let f=0,C=c.length;f<C;f++){const R=c[f];if(R.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),d++}else if(R.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(R.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),p++}else if(R.isRectAreaLight){const y=i.rectArea[v];y.position.setFromMatrixPosition(R.matrixWorld),y.position.applyMatrix4(g),a.identity(),r.copy(R.matrixWorld),r.premultiply(g),a.extractRotation(r),y.halfWidth.set(R.width*.5,0,0),y.halfHeight.set(0,R.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),v++}else if(R.isPointLight){const y=i.point[h];y.position.setFromMatrixPosition(R.matrixWorld),y.position.applyMatrix4(g),h++}else if(R.isHemisphereLight){const y=i.hemi[M];y.direction.setFromMatrixPosition(R.matrixWorld),y.direction.transformDirection(g),M++}}}return{setup:o,setupView:l,state:i}}function xd(n){const e=new l1(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function c1(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new xd(n),e.set(s,[o])):r>=a.length?(o=new xd(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const u1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,d1=`uniform sampler2D shadow_pass;
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
}`;function f1(n,e,t){let i=new Sc;const s=new Xe,r=new Xe,a=new Pt,o=new Dx({depthPacking:Wv}),l=new Lx,c={},u=t.maxTextureSize,d={[ki]:dn,[dn]:ki,[jn]:jn},h=new zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:u1,fragmentShader:d1}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const v=new kn;v.setAttribute("position",new Zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Nt(v,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$f;let f=this.type;this.render=function(w,E,D){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;const S=n.getRenderTarget(),b=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),U=n.state;U.setBlending(Ni),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const N=f!==li&&this.type===li,W=f===li&&this.type!==li;for(let ne=0,Y=w.length;ne<Y;ne++){const se=w[ne],z=se.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const me=z.getFrameExtents();if(s.multiply(me),r.copy(z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/me.x),s.x=r.x*me.x,z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/me.y),s.y=r.y*me.y,z.mapSize.y=r.y)),z.map===null||N===!0||W===!0){const be=this.type!==li?{minFilter:On,magFilter:On}:{};z.map!==null&&z.map.dispose(),z.map=new ps(s.x,s.y,be),z.map.texture.name=se.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();const Me=z.getViewportCount();for(let be=0;be<Me;be++){const Fe=z.getViewport(be);a.set(r.x*Fe.x,r.y*Fe.y,r.x*Fe.z,r.y*Fe.w),U.viewport(a),z.updateMatrices(se,be),i=z.getFrustum(),y(E,D,z.camera,se,this.type)}z.isPointLightShadow!==!0&&this.type===li&&C(z,D),z.needsUpdate=!1}f=this.type,g.needsUpdate=!1,n.setRenderTarget(S,b,I)};function C(w,E){const D=e.update(M);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ps(s.x,s.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(E,null,D,h,M,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(E,null,D,p,M,null)}function R(w,E,D,S){let b=null;const I=D.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)b=I;else if(b=D.isPointLight===!0?l:o,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const U=b.uuid,N=E.uuid;let W=c[U];W===void 0&&(W={},c[U]=W);let ne=W[N];ne===void 0&&(ne=b.clone(),W[N]=ne,E.addEventListener("dispose",L)),b=ne}if(b.visible=E.visible,b.wireframe=E.wireframe,S===li?b.side=E.shadowSide!==null?E.shadowSide:E.side:b.side=E.shadowSide!==null?E.shadowSide:d[E.side],b.alphaMap=E.alphaMap,b.alphaTest=E.alphaTest,b.map=E.map,b.clipShadows=E.clipShadows,b.clippingPlanes=E.clippingPlanes,b.clipIntersection=E.clipIntersection,b.displacementMap=E.displacementMap,b.displacementScale=E.displacementScale,b.displacementBias=E.displacementBias,b.wireframeLinewidth=E.wireframeLinewidth,b.linewidth=E.linewidth,D.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const U=n.properties.get(b);U.light=D}return b}function y(w,E,D,S,b){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===li)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,w.matrixWorld);const N=e.update(w),W=w.material;if(Array.isArray(W)){const ne=N.groups;for(let Y=0,se=ne.length;Y<se;Y++){const z=ne[Y],me=W[z.materialIndex];if(me&&me.visible){const Me=R(w,me,S,b);w.onBeforeShadow(n,w,E,D,N,Me,z),n.renderBufferDirect(D,null,N,Me,w,z),w.onAfterShadow(n,w,E,D,N,Me,z)}}}else if(W.visible){const ne=R(w,W,S,b);w.onBeforeShadow(n,w,E,D,N,ne,null),n.renderBufferDirect(D,null,N,ne,w,null),w.onAfterShadow(n,w,E,D,N,ne,null)}}const U=w.children;for(let N=0,W=U.length;N<W;N++)y(U[N],E,D,S,b)}function L(w){w.target.removeEventListener("dispose",L);for(const D in c){const S=c[D],b=w.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}const h1={[pl]:ml,[gl]:xl,[_l]:yl,[Ks]:vl,[ml]:pl,[xl]:gl,[yl]:_l,[vl]:Ks};function p1(n,e){function t(){let B=!1;const Ae=new Pt;let ie=null;const ce=new Pt(0,0,0,0);return{setMask:function(Pe){ie!==Pe&&!B&&(n.colorMask(Pe,Pe,Pe,Pe),ie=Pe)},setLocked:function(Pe){B=Pe},setClear:function(Pe,Re,Z,H,Ie){Ie===!0&&(Pe*=H,Re*=H,Z*=H),Ae.set(Pe,Re,Z,H),ce.equals(Ae)===!1&&(n.clearColor(Pe,Re,Z,H),ce.copy(Ae))},reset:function(){B=!1,ie=null,ce.set(-1,0,0,0)}}}function i(){let B=!1,Ae=!1,ie=null,ce=null,Pe=null;return{setReversed:function(Re){if(Ae!==Re){const Z=e.get("EXT_clip_control");Ae?Z.clipControlEXT(Z.LOWER_LEFT_EXT,Z.ZERO_TO_ONE_EXT):Z.clipControlEXT(Z.LOWER_LEFT_EXT,Z.NEGATIVE_ONE_TO_ONE_EXT);const H=Pe;Pe=null,this.setClear(H)}Ae=Re},getReversed:function(){return Ae},setTest:function(Re){Re?Ee(n.DEPTH_TEST):Be(n.DEPTH_TEST)},setMask:function(Re){ie!==Re&&!B&&(n.depthMask(Re),ie=Re)},setFunc:function(Re){if(Ae&&(Re=h1[Re]),ce!==Re){switch(Re){case pl:n.depthFunc(n.NEVER);break;case ml:n.depthFunc(n.ALWAYS);break;case gl:n.depthFunc(n.LESS);break;case Ks:n.depthFunc(n.LEQUAL);break;case _l:n.depthFunc(n.EQUAL);break;case vl:n.depthFunc(n.GEQUAL);break;case xl:n.depthFunc(n.GREATER);break;case yl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ce=Re}},setLocked:function(Re){B=Re},setClear:function(Re){Pe!==Re&&(Ae&&(Re=1-Re),n.clearDepth(Re),Pe=Re)},reset:function(){B=!1,ie=null,ce=null,Pe=null,Ae=!1}}}function s(){let B=!1,Ae=null,ie=null,ce=null,Pe=null,Re=null,Z=null,H=null,Ie=null;return{setTest:function(ae){B||(ae?Ee(n.STENCIL_TEST):Be(n.STENCIL_TEST))},setMask:function(ae){Ae!==ae&&!B&&(n.stencilMask(ae),Ae=ae)},setFunc:function(ae,ft,Vt){(ie!==ae||ce!==ft||Pe!==Vt)&&(n.stencilFunc(ae,ft,Vt),ie=ae,ce=ft,Pe=Vt)},setOp:function(ae,ft,Vt){(Re!==ae||Z!==ft||H!==Vt)&&(n.stencilOp(ae,ft,Vt),Re=ae,Z=ft,H=Vt)},setLocked:function(ae){B=ae},setClear:function(ae){Ie!==ae&&(n.clearStencil(ae),Ie=ae)},reset:function(){B=!1,Ae=null,ie=null,ce=null,Pe=null,Re=null,Z=null,H=null,Ie=null}}}const r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let u={},d={},h=new WeakMap,p=[],v=null,M=!1,g=null,f=null,C=null,R=null,y=null,L=null,w=null,E=new rt(0,0,0),D=0,S=!1,b=null,I=null,U=null,N=null,W=null;const ne=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,se=0;const z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(z)[1]),Y=se>=1):z.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),Y=se>=2);let me=null,Me={};const be=n.getParameter(n.SCISSOR_BOX),Fe=n.getParameter(n.VIEWPORT),je=new Pt().fromArray(be),re=new Pt().fromArray(Fe);function ve(B,Ae,ie,ce){const Pe=new Uint8Array(4),Re=n.createTexture();n.bindTexture(B,Re),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Z=0;Z<ie;Z++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(Ae,0,n.RGBA,1,1,ce,0,n.RGBA,n.UNSIGNED_BYTE,Pe):n.texImage2D(Ae+Z,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Pe);return Re}const Le={};Le[n.TEXTURE_2D]=ve(n.TEXTURE_2D,n.TEXTURE_2D,1),Le[n.TEXTURE_CUBE_MAP]=ve(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Le[n.TEXTURE_2D_ARRAY]=ve(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Le[n.TEXTURE_3D]=ve(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Ee(n.DEPTH_TEST),a.setFunc(Ks),ee(!1),J(bu),Ee(n.CULL_FACE),T(Ni);function Ee(B){u[B]!==!0&&(n.enable(B),u[B]=!0)}function Be(B){u[B]!==!1&&(n.disable(B),u[B]=!1)}function ke(B,Ae){return d[B]!==Ae?(n.bindFramebuffer(B,Ae),d[B]=Ae,B===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Ae),B===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Ye(B,Ae){let ie=p,ce=!1;if(B){ie=h.get(Ae),ie===void 0&&(ie=[],h.set(Ae,ie));const Pe=B.textures;if(ie.length!==Pe.length||ie[0]!==n.COLOR_ATTACHMENT0){for(let Re=0,Z=Pe.length;Re<Z;Re++)ie[Re]=n.COLOR_ATTACHMENT0+Re;ie.length=Pe.length,ce=!0}}else ie[0]!==n.BACK&&(ie[0]=n.BACK,ce=!0);ce&&n.drawBuffers(ie)}function dt(B){return v!==B?(n.useProgram(B),v=B,!0):!1}const P={[ss]:n.FUNC_ADD,[gv]:n.FUNC_SUBTRACT,[_v]:n.FUNC_REVERSE_SUBTRACT};P[vv]=n.MIN,P[xv]=n.MAX;const O={[yv]:n.ZERO,[bv]:n.ONE,[Mv]:n.SRC_COLOR,[fl]:n.SRC_ALPHA,[Cv]:n.SRC_ALPHA_SATURATE,[Av]:n.DST_COLOR,[Ev]:n.DST_ALPHA,[Sv]:n.ONE_MINUS_SRC_COLOR,[hl]:n.ONE_MINUS_SRC_ALPHA,[wv]:n.ONE_MINUS_DST_COLOR,[Tv]:n.ONE_MINUS_DST_ALPHA,[Rv]:n.CONSTANT_COLOR,[Pv]:n.ONE_MINUS_CONSTANT_COLOR,[Dv]:n.CONSTANT_ALPHA,[Lv]:n.ONE_MINUS_CONSTANT_ALPHA};function T(B,Ae,ie,ce,Pe,Re,Z,H,Ie,ae){if(B===Ni){M===!0&&(Be(n.BLEND),M=!1);return}if(M===!1&&(Ee(n.BLEND),M=!0),B!==mv){if(B!==g||ae!==S){if((f!==ss||y!==ss)&&(n.blendEquation(n.FUNC_ADD),f=ss,y=ss),ae)switch(B){case Xs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mu:n.blendFunc(n.ONE,n.ONE);break;case Su:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Eu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Xs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Su:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Eu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}C=null,R=null,L=null,w=null,E.set(0,0,0),D=0,g=B,S=ae}return}Pe=Pe||Ae,Re=Re||ie,Z=Z||ce,(Ae!==f||Pe!==y)&&(n.blendEquationSeparate(P[Ae],P[Pe]),f=Ae,y=Pe),(ie!==C||ce!==R||Re!==L||Z!==w)&&(n.blendFuncSeparate(O[ie],O[ce],O[Re],O[Z]),C=ie,R=ce,L=Re,w=Z),(H.equals(E)===!1||Ie!==D)&&(n.blendColor(H.r,H.g,H.b,Ie),E.copy(H),D=Ie),g=B,S=!1}function oe(B,Ae){B.side===jn?Be(n.CULL_FACE):Ee(n.CULL_FACE);let ie=B.side===dn;Ae&&(ie=!ie),ee(ie),B.blending===Xs&&B.transparent===!1?T(Ni):T(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);const ce=B.stencilWrite;o.setTest(ce),ce&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),ue(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?Ee(n.SAMPLE_ALPHA_TO_COVERAGE):Be(n.SAMPLE_ALPHA_TO_COVERAGE)}function ee(B){b!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),b=B)}function J(B){B!==hv?(Ee(n.CULL_FACE),B!==I&&(B===bu?n.cullFace(n.BACK):B===pv?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Be(n.CULL_FACE),I=B}function te(B){B!==U&&(Y&&n.lineWidth(B),U=B)}function ue(B,Ae,ie){B?(Ee(n.POLYGON_OFFSET_FILL),(N!==Ae||W!==ie)&&(n.polygonOffset(Ae,ie),N=Ae,W=ie)):Be(n.POLYGON_OFFSET_FILL)}function Q(B){B?Ee(n.SCISSOR_TEST):Be(n.SCISSOR_TEST)}function x(B){B===void 0&&(B=n.TEXTURE0+ne-1),me!==B&&(n.activeTexture(B),me=B)}function _(B,Ae,ie){ie===void 0&&(me===null?ie=n.TEXTURE0+ne-1:ie=me);let ce=Me[ie];ce===void 0&&(ce={type:void 0,texture:void 0},Me[ie]=ce),(ce.type!==B||ce.texture!==Ae)&&(me!==ie&&(n.activeTexture(ie),me=ie),n.bindTexture(B,Ae||Le[B]),ce.type=B,ce.texture=Ae)}function F(){const B=Me[me];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function G(){try{n.compressedTexImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function j(){try{n.compressedTexImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function $(){try{n.texSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function _e(){try{n.texSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function de(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function xe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ze(){try{n.texStorage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function fe(){try{n.texStorage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Te(){try{n.texImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Oe(){try{n.texImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ve(B){je.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),je.copy(B))}function Se(B){re.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),re.copy(B))}function qe(B,Ae){let ie=c.get(Ae);ie===void 0&&(ie=new WeakMap,c.set(Ae,ie));let ce=ie.get(B);ce===void 0&&(ce=n.getUniformBlockIndex(Ae,B.name),ie.set(B,ce))}function We(B,Ae){const ce=c.get(Ae).get(B);l.get(Ae)!==ce&&(n.uniformBlockBinding(Ae,ce,B.__bindingPointIndex),l.set(Ae,ce))}function lt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},me=null,Me={},d={},h=new WeakMap,p=[],v=null,M=!1,g=null,f=null,C=null,R=null,y=null,L=null,w=null,E=new rt(0,0,0),D=0,S=!1,b=null,I=null,U=null,N=null,W=null,je.set(0,0,n.canvas.width,n.canvas.height),re.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Ee,disable:Be,bindFramebuffer:ke,drawBuffers:Ye,useProgram:dt,setBlending:T,setMaterial:oe,setFlipSided:ee,setCullFace:J,setLineWidth:te,setPolygonOffset:ue,setScissorTest:Q,activeTexture:x,bindTexture:_,unbindTexture:F,compressedTexImage2D:G,compressedTexImage3D:j,texImage2D:Te,texImage3D:Oe,updateUBOMapping:qe,uniformBlockBinding:We,texStorage2D:ze,texStorage3D:fe,texSubImage2D:$,texSubImage3D:_e,compressedTexSubImage2D:de,compressedTexSubImage3D:xe,scissor:Ve,viewport:Se,reset:lt}}function m1(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xe,u=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(x,_){return p?new OffscreenCanvas(x,_):Hr("canvas")}function M(x,_,F){let G=1;const j=Q(x);if((j.width>F||j.height>F)&&(G=F/Math.max(j.width,j.height)),G<1)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap||typeof VideoFrame<"u"&&x instanceof VideoFrame){const $=Math.floor(G*j.width),_e=Math.floor(G*j.height);d===void 0&&(d=v($,_e));const de=_?v($,_e):d;return de.width=$,de.height=_e,de.getContext("2d").drawImage(x,0,0,$,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+$+"x"+_e+")."),de}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),x;return x}function g(x){return x.generateMipmaps}function f(x){n.generateMipmap(x)}function C(x){return x.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:x.isWebGL3DRenderTarget?n.TEXTURE_3D:x.isWebGLArrayRenderTarget||x.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function R(x,_,F,G,j=!1){if(x!==null){if(n[x]!==void 0)return n[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let $=_;if(_===n.RED&&(F===n.FLOAT&&($=n.R32F),F===n.HALF_FLOAT&&($=n.R16F),F===n.UNSIGNED_BYTE&&($=n.R8)),_===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&($=n.R8UI),F===n.UNSIGNED_SHORT&&($=n.R16UI),F===n.UNSIGNED_INT&&($=n.R32UI),F===n.BYTE&&($=n.R8I),F===n.SHORT&&($=n.R16I),F===n.INT&&($=n.R32I)),_===n.RG&&(F===n.FLOAT&&($=n.RG32F),F===n.HALF_FLOAT&&($=n.RG16F),F===n.UNSIGNED_BYTE&&($=n.RG8)),_===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&($=n.RG8UI),F===n.UNSIGNED_SHORT&&($=n.RG16UI),F===n.UNSIGNED_INT&&($=n.RG32UI),F===n.BYTE&&($=n.RG8I),F===n.SHORT&&($=n.RG16I),F===n.INT&&($=n.RG32I)),_===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&($=n.RGB8UI),F===n.UNSIGNED_SHORT&&($=n.RGB16UI),F===n.UNSIGNED_INT&&($=n.RGB32UI),F===n.BYTE&&($=n.RGB8I),F===n.SHORT&&($=n.RGB16I),F===n.INT&&($=n.RGB32I)),_===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&($=n.RGBA8UI),F===n.UNSIGNED_SHORT&&($=n.RGBA16UI),F===n.UNSIGNED_INT&&($=n.RGBA32UI),F===n.BYTE&&($=n.RGBA8I),F===n.SHORT&&($=n.RGBA16I),F===n.INT&&($=n.RGBA32I)),_===n.RGB&&F===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),_===n.RGBA){const _e=j?Va:ut.getTransfer(G);F===n.FLOAT&&($=n.RGBA32F),F===n.HALF_FLOAT&&($=n.RGBA16F),F===n.UNSIGNED_BYTE&&($=_e===xt?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function y(x,_){let F;return x?_===null||_===hs||_===Qs?F=n.DEPTH24_STENCIL8:_===pi?F=n.DEPTH32F_STENCIL8:_===zr&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===hs||_===Qs?F=n.DEPTH_COMPONENT24:_===pi?F=n.DEPTH_COMPONENT32F:_===zr&&(F=n.DEPTH_COMPONENT16),F}function L(x,_){return g(x)===!0||x.isFramebufferTexture&&x.minFilter!==On&&x.minFilter!==Yn?Math.log2(Math.max(_.width,_.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?_.mipmaps.length:1}function w(x){const _=x.target;_.removeEventListener("dispose",w),D(_),_.isVideoTexture&&u.delete(_)}function E(x){const _=x.target;_.removeEventListener("dispose",E),b(_)}function D(x){const _=i.get(x);if(_.__webglInit===void 0)return;const F=x.source,G=h.get(F);if(G){const j=G[_.__cacheKey];j.usedTimes--,j.usedTimes===0&&S(x),Object.keys(G).length===0&&h.delete(F)}i.remove(x)}function S(x){const _=i.get(x);n.deleteTexture(_.__webglTexture);const F=x.source,G=h.get(F);delete G[_.__cacheKey],a.memory.textures--}function b(x){const _=i.get(x);if(x.depthTexture&&(x.depthTexture.dispose(),i.remove(x.depthTexture)),x.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(_.__webglFramebuffer[G]))for(let j=0;j<_.__webglFramebuffer[G].length;j++)n.deleteFramebuffer(_.__webglFramebuffer[G][j]);else n.deleteFramebuffer(_.__webglFramebuffer[G]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[G])}else{if(Array.isArray(_.__webglFramebuffer))for(let G=0;G<_.__webglFramebuffer.length;G++)n.deleteFramebuffer(_.__webglFramebuffer[G]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let G=0;G<_.__webglColorRenderbuffer.length;G++)_.__webglColorRenderbuffer[G]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[G]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const F=x.textures;for(let G=0,j=F.length;G<j;G++){const $=i.get(F[G]);$.__webglTexture&&(n.deleteTexture($.__webglTexture),a.memory.textures--),i.remove(F[G])}i.remove(x)}let I=0;function U(){I=0}function N(){const x=I;return x>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+s.maxTextures),I+=1,x}function W(x){const _=[];return _.push(x.wrapS),_.push(x.wrapT),_.push(x.wrapR||0),_.push(x.magFilter),_.push(x.minFilter),_.push(x.anisotropy),_.push(x.internalFormat),_.push(x.format),_.push(x.type),_.push(x.generateMipmaps),_.push(x.premultiplyAlpha),_.push(x.flipY),_.push(x.unpackAlignment),_.push(x.colorSpace),_.join()}function ne(x,_){const F=i.get(x);if(x.isVideoTexture&&te(x),x.isRenderTargetTexture===!1&&x.version>0&&F.__version!==x.version){const G=x.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(F,x,_);return}}t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+_)}function Y(x,_){const F=i.get(x);if(x.version>0&&F.__version!==x.version){re(F,x,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+_)}function se(x,_){const F=i.get(x);if(x.version>0&&F.__version!==x.version){re(F,x,_);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+_)}function z(x,_){const F=i.get(x);if(x.version>0&&F.__version!==x.version){ve(F,x,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+_)}const me={[kr]:n.REPEAT,[as]:n.CLAMP_TO_EDGE,[Sl]:n.MIRRORED_REPEAT},Me={[On]:n.NEAREST,[Vv]:n.NEAREST_MIPMAP_NEAREST,[ea]:n.NEAREST_MIPMAP_LINEAR,[Yn]:n.LINEAR,[Mo]:n.LINEAR_MIPMAP_NEAREST,[os]:n.LINEAR_MIPMAP_LINEAR},be={[$v]:n.NEVER,[Jv]:n.ALWAYS,[jv]:n.LESS,[oh]:n.LEQUAL,[qv]:n.EQUAL,[Zv]:n.GEQUAL,[Yv]:n.GREATER,[Kv]:n.NOTEQUAL};function Fe(x,_){if(_.type===pi&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Yn||_.magFilter===Mo||_.magFilter===ea||_.magFilter===os||_.minFilter===Yn||_.minFilter===Mo||_.minFilter===ea||_.minFilter===os)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(x,n.TEXTURE_WRAP_S,me[_.wrapS]),n.texParameteri(x,n.TEXTURE_WRAP_T,me[_.wrapT]),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,me[_.wrapR]),n.texParameteri(x,n.TEXTURE_MAG_FILTER,Me[_.magFilter]),n.texParameteri(x,n.TEXTURE_MIN_FILTER,Me[_.minFilter]),_.compareFunction&&(n.texParameteri(x,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(x,n.TEXTURE_COMPARE_FUNC,be[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===On||_.minFilter!==ea&&_.minFilter!==os||_.type===pi&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(x,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function je(x,_){let F=!1;x.__webglInit===void 0&&(x.__webglInit=!0,_.addEventListener("dispose",w));const G=_.source;let j=h.get(G);j===void 0&&(j={},h.set(G,j));const $=W(_);if($!==x.__cacheKey){j[$]===void 0&&(j[$]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,F=!0),j[$].usedTimes++;const _e=j[x.__cacheKey];_e!==void 0&&(j[x.__cacheKey].usedTimes--,_e.usedTimes===0&&S(_)),x.__cacheKey=$,x.__webglTexture=j[$].texture}return F}function re(x,_,F){let G=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(G=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(G=n.TEXTURE_3D);const j=je(x,_),$=_.source;t.bindTexture(G,x.__webglTexture,n.TEXTURE0+F);const _e=i.get($);if($.version!==_e.__version||j===!0){t.activeTexture(n.TEXTURE0+F);const de=ut.getPrimaries(ut.workingColorSpace),xe=_.colorSpace===Li?null:ut.getPrimaries(_.colorSpace),ze=_.colorSpace===Li||de===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);let fe=M(_.image,!1,s.maxTextureSize);fe=ue(_,fe);const Te=r.convert(_.format,_.colorSpace),Oe=r.convert(_.type);let Ve=R(_.internalFormat,Te,Oe,_.colorSpace,_.isVideoTexture);Fe(G,_);let Se;const qe=_.mipmaps,We=_.isVideoTexture!==!0,lt=_e.__version===void 0||j===!0,B=$.dataReady,Ae=L(_,fe);if(_.isDepthTexture)Ve=y(_.format===er,_.type),lt&&(We?t.texStorage2D(n.TEXTURE_2D,1,Ve,fe.width,fe.height):t.texImage2D(n.TEXTURE_2D,0,Ve,fe.width,fe.height,0,Te,Oe,null));else if(_.isDataTexture)if(qe.length>0){We&&lt&&t.texStorage2D(n.TEXTURE_2D,Ae,Ve,qe[0].width,qe[0].height);for(let ie=0,ce=qe.length;ie<ce;ie++)Se=qe[ie],We?B&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,Se.width,Se.height,Te,Oe,Se.data):t.texImage2D(n.TEXTURE_2D,ie,Ve,Se.width,Se.height,0,Te,Oe,Se.data);_.generateMipmaps=!1}else We?(lt&&t.texStorage2D(n.TEXTURE_2D,Ae,Ve,fe.width,fe.height),B&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,fe.width,fe.height,Te,Oe,fe.data)):t.texImage2D(n.TEXTURE_2D,0,Ve,fe.width,fe.height,0,Te,Oe,fe.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){We&&lt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ae,Ve,qe[0].width,qe[0].height,fe.depth);for(let ie=0,ce=qe.length;ie<ce;ie++)if(Se=qe[ie],_.format!==Nn)if(Te!==null)if(We){if(B)if(_.layerUpdates.size>0){const Pe=Yu(Se.width,Se.height,_.format,_.type);for(const Re of _.layerUpdates){const Z=Se.data.subarray(Re*Pe/Se.data.BYTES_PER_ELEMENT,(Re+1)*Pe/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,Re,Se.width,Se.height,1,Te,Z)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,Se.width,Se.height,fe.depth,Te,Se.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ie,Ve,Se.width,Se.height,fe.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?B&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,Se.width,Se.height,fe.depth,Te,Oe,Se.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ie,Ve,Se.width,Se.height,fe.depth,0,Te,Oe,Se.data)}else{We&&lt&&t.texStorage2D(n.TEXTURE_2D,Ae,Ve,qe[0].width,qe[0].height);for(let ie=0,ce=qe.length;ie<ce;ie++)Se=qe[ie],_.format!==Nn?Te!==null?We?B&&t.compressedTexSubImage2D(n.TEXTURE_2D,ie,0,0,Se.width,Se.height,Te,Se.data):t.compressedTexImage2D(n.TEXTURE_2D,ie,Ve,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?B&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,Se.width,Se.height,Te,Oe,Se.data):t.texImage2D(n.TEXTURE_2D,ie,Ve,Se.width,Se.height,0,Te,Oe,Se.data)}else if(_.isDataArrayTexture)if(We){if(lt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ae,Ve,fe.width,fe.height,fe.depth),B)if(_.layerUpdates.size>0){const ie=Yu(fe.width,fe.height,_.format,_.type);for(const ce of _.layerUpdates){const Pe=fe.data.subarray(ce*ie/fe.data.BYTES_PER_ELEMENT,(ce+1)*ie/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ce,fe.width,fe.height,1,Te,Oe,Pe)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Te,Oe,fe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ve,fe.width,fe.height,fe.depth,0,Te,Oe,fe.data);else if(_.isData3DTexture)We?(lt&&t.texStorage3D(n.TEXTURE_3D,Ae,Ve,fe.width,fe.height,fe.depth),B&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Te,Oe,fe.data)):t.texImage3D(n.TEXTURE_3D,0,Ve,fe.width,fe.height,fe.depth,0,Te,Oe,fe.data);else if(_.isFramebufferTexture){if(lt)if(We)t.texStorage2D(n.TEXTURE_2D,Ae,Ve,fe.width,fe.height);else{let ie=fe.width,ce=fe.height;for(let Pe=0;Pe<Ae;Pe++)t.texImage2D(n.TEXTURE_2D,Pe,Ve,ie,ce,0,Te,Oe,null),ie>>=1,ce>>=1}}else if(qe.length>0){if(We&&lt){const ie=Q(qe[0]);t.texStorage2D(n.TEXTURE_2D,Ae,Ve,ie.width,ie.height)}for(let ie=0,ce=qe.length;ie<ce;ie++)Se=qe[ie],We?B&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,Te,Oe,Se):t.texImage2D(n.TEXTURE_2D,ie,Ve,Te,Oe,Se);_.generateMipmaps=!1}else if(We){if(lt){const ie=Q(fe);t.texStorage2D(n.TEXTURE_2D,Ae,Ve,ie.width,ie.height)}B&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Te,Oe,fe)}else t.texImage2D(n.TEXTURE_2D,0,Ve,Te,Oe,fe);g(_)&&f(G),_e.__version=$.version,_.onUpdate&&_.onUpdate(_)}x.__version=_.version}function ve(x,_,F){if(_.image.length!==6)return;const G=je(x,_),j=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,x.__webglTexture,n.TEXTURE0+F);const $=i.get(j);if(j.version!==$.__version||G===!0){t.activeTexture(n.TEXTURE0+F);const _e=ut.getPrimaries(ut.workingColorSpace),de=_.colorSpace===Li?null:ut.getPrimaries(_.colorSpace),xe=_.colorSpace===Li||_e===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const ze=_.isCompressedTexture||_.image[0].isCompressedTexture,fe=_.image[0]&&_.image[0].isDataTexture,Te=[];for(let ce=0;ce<6;ce++)!ze&&!fe?Te[ce]=M(_.image[ce],!0,s.maxCubemapSize):Te[ce]=fe?_.image[ce].image:_.image[ce],Te[ce]=ue(_,Te[ce]);const Oe=Te[0],Ve=r.convert(_.format,_.colorSpace),Se=r.convert(_.type),qe=R(_.internalFormat,Ve,Se,_.colorSpace),We=_.isVideoTexture!==!0,lt=$.__version===void 0||G===!0,B=j.dataReady;let Ae=L(_,Oe);Fe(n.TEXTURE_CUBE_MAP,_);let ie;if(ze){We&&lt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,qe,Oe.width,Oe.height);for(let ce=0;ce<6;ce++){ie=Te[ce].mipmaps;for(let Pe=0;Pe<ie.length;Pe++){const Re=ie[Pe];_.format!==Nn?Ve!==null?We?B&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Pe,0,0,Re.width,Re.height,Ve,Re.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Pe,qe,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Pe,0,0,Re.width,Re.height,Ve,Se,Re.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Pe,qe,Re.width,Re.height,0,Ve,Se,Re.data)}}}else{if(ie=_.mipmaps,We&&lt){ie.length>0&&Ae++;const ce=Q(Te[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,qe,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(fe){We?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Te[ce].width,Te[ce].height,Ve,Se,Te[ce].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,qe,Te[ce].width,Te[ce].height,0,Ve,Se,Te[ce].data);for(let Pe=0;Pe<ie.length;Pe++){const Z=ie[Pe].image[ce].image;We?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Pe+1,0,0,Z.width,Z.height,Ve,Se,Z.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Pe+1,qe,Z.width,Z.height,0,Ve,Se,Z.data)}}else{We?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Ve,Se,Te[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,qe,Ve,Se,Te[ce]);for(let Pe=0;Pe<ie.length;Pe++){const Re=ie[Pe];We?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Pe+1,0,0,Ve,Se,Re.image[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Pe+1,qe,Ve,Se,Re.image[ce])}}}g(_)&&f(n.TEXTURE_CUBE_MAP),$.__version=j.version,_.onUpdate&&_.onUpdate(_)}x.__version=_.version}function Le(x,_,F,G,j,$){const _e=r.convert(F.format,F.colorSpace),de=r.convert(F.type),xe=R(F.internalFormat,_e,de,F.colorSpace),ze=i.get(_),fe=i.get(F);if(fe.__renderTarget=_,!ze.__hasExternalTextures){const Te=Math.max(1,_.width>>$),Oe=Math.max(1,_.height>>$);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?t.texImage3D(j,$,xe,Te,Oe,_.depth,0,_e,de,null):t.texImage2D(j,$,xe,Te,Oe,0,_e,de,null)}t.bindFramebuffer(n.FRAMEBUFFER,x),J(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,j,fe.__webglTexture,0,ee(_)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,G,j,fe.__webglTexture,$),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ee(x,_,F){if(n.bindRenderbuffer(n.RENDERBUFFER,x),_.depthBuffer){const G=_.depthTexture,j=G&&G.isDepthTexture?G.type:null,$=y(_.stencilBuffer,j),_e=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=ee(_);J(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,de,$,_.width,_.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,de,$,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,$,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,_e,n.RENDERBUFFER,x)}else{const G=_.textures;for(let j=0;j<G.length;j++){const $=G[j],_e=r.convert($.format,$.colorSpace),de=r.convert($.type),xe=R($.internalFormat,_e,de,$.colorSpace),ze=ee(_);F&&J(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ze,xe,_.width,_.height):J(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ze,xe,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,xe,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Be(x,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,x),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const G=i.get(_.depthTexture);G.__renderTarget=_,(!G.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),ne(_.depthTexture,0);const j=G.__webglTexture,$=ee(_);if(_.depthTexture.format===$s)J(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0);else if(_.depthTexture.format===er)J(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function ke(x){const _=i.get(x),F=x.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==x.depthTexture){const G=x.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),G){const j=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,G.removeEventListener("dispose",j)};G.addEventListener("dispose",j),_.__depthDisposeCallback=j}_.__boundDepthTexture=G}if(x.depthTexture&&!_.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Be(_.__webglFramebuffer,x)}else if(F){_.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[G]),_.__webglDepthbuffer[G]===void 0)_.__webglDepthbuffer[G]=n.createRenderbuffer(),Ee(_.__webglDepthbuffer[G],x,!1);else{const j=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=_.__webglDepthbuffer[G];n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,$)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),Ee(_.__webglDepthbuffer,x,!1);else{const G=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,G,n.RENDERBUFFER,j)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ye(x,_,F){const G=i.get(x);_!==void 0&&Le(G.__webglFramebuffer,x,x.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&ke(x)}function dt(x){const _=x.texture,F=i.get(x),G=i.get(_);x.addEventListener("dispose",E);const j=x.textures,$=x.isWebGLCubeRenderTarget===!0,_e=j.length>1;if(_e||(G.__webglTexture===void 0&&(G.__webglTexture=n.createTexture()),G.__version=_.version,a.memory.textures++),$){F.__webglFramebuffer=[];for(let de=0;de<6;de++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[de]=[];for(let xe=0;xe<_.mipmaps.length;xe++)F.__webglFramebuffer[de][xe]=n.createFramebuffer()}else F.__webglFramebuffer[de]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let de=0;de<_.mipmaps.length;de++)F.__webglFramebuffer[de]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(_e)for(let de=0,xe=j.length;de<xe;de++){const ze=i.get(j[de]);ze.__webglTexture===void 0&&(ze.__webglTexture=n.createTexture(),a.memory.textures++)}if(x.samples>0&&J(x)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let de=0;de<j.length;de++){const xe=j[de];F.__webglColorRenderbuffer[de]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[de]);const ze=r.convert(xe.format,xe.colorSpace),fe=r.convert(xe.type),Te=R(xe.internalFormat,ze,fe,xe.colorSpace,x.isXRRenderTarget===!0),Oe=ee(x);n.renderbufferStorageMultisample(n.RENDERBUFFER,Oe,Te,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,F.__webglColorRenderbuffer[de])}n.bindRenderbuffer(n.RENDERBUFFER,null),x.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),Ee(F.__webglDepthRenderbuffer,x,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture),Fe(n.TEXTURE_CUBE_MAP,_);for(let de=0;de<6;de++)if(_.mipmaps&&_.mipmaps.length>0)for(let xe=0;xe<_.mipmaps.length;xe++)Le(F.__webglFramebuffer[de][xe],x,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,xe);else Le(F.__webglFramebuffer[de],x,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);g(_)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let de=0,xe=j.length;de<xe;de++){const ze=j[de],fe=i.get(ze);t.bindTexture(n.TEXTURE_2D,fe.__webglTexture),Fe(n.TEXTURE_2D,ze),Le(F.__webglFramebuffer,x,ze,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,0),g(ze)&&f(n.TEXTURE_2D)}t.unbindTexture()}else{let de=n.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(de=x.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,G.__webglTexture),Fe(de,_),_.mipmaps&&_.mipmaps.length>0)for(let xe=0;xe<_.mipmaps.length;xe++)Le(F.__webglFramebuffer[xe],x,_,n.COLOR_ATTACHMENT0,de,xe);else Le(F.__webglFramebuffer,x,_,n.COLOR_ATTACHMENT0,de,0);g(_)&&f(de),t.unbindTexture()}x.depthBuffer&&ke(x)}function P(x){const _=x.textures;for(let F=0,G=_.length;F<G;F++){const j=_[F];if(g(j)){const $=C(x),_e=i.get(j).__webglTexture;t.bindTexture($,_e),f($),t.unbindTexture()}}}const O=[],T=[];function oe(x){if(x.samples>0){if(J(x)===!1){const _=x.textures,F=x.width,G=x.height;let j=n.COLOR_BUFFER_BIT;const $=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=i.get(x),de=_.length>1;if(de)for(let xe=0;xe<_.length;xe++)t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let xe=0;xe<_.length;xe++){if(x.resolveDepthBuffer&&(x.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),x.stencilBuffer&&x.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),de){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_e.__webglColorRenderbuffer[xe]);const ze=i.get(_[xe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ze,0)}n.blitFramebuffer(0,0,F,G,0,0,F,G,j,n.NEAREST),l===!0&&(O.length=0,T.length=0,O.push(n.COLOR_ATTACHMENT0+xe),x.depthBuffer&&x.resolveDepthBuffer===!1&&(O.push($),T.push($),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,T)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,O))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),de)for(let xe=0;xe<_.length;xe++){t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,_e.__webglColorRenderbuffer[xe]);const ze=i.get(_[xe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,ze,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(x.depthBuffer&&x.resolveDepthBuffer===!1&&l){const _=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function ee(x){return Math.min(s.maxSamples,x.samples)}function J(x){const _=i.get(x);return x.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function te(x){const _=a.render.frame;u.get(x)!==_&&(u.set(x,_),x.update())}function ue(x,_){const F=x.colorSpace,G=x.format,j=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||F!==tr&&F!==Li&&(ut.getTransfer(F)===xt?(G!==Nn||j!==yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),_}function Q(x){return typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement?(c.width=x.naturalWidth||x.width,c.height=x.naturalHeight||x.height):typeof VideoFrame<"u"&&x instanceof VideoFrame?(c.width=x.displayWidth,c.height=x.displayHeight):(c.width=x.width,c.height=x.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=U,this.setTexture2D=ne,this.setTexture2DArray=Y,this.setTexture3D=se,this.setTextureCube=z,this.rebindTextures=Ye,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=J}function g1(n,e){function t(i,s=Li){let r;const a=ut.getTransfer(s);if(i===yi)return n.UNSIGNED_BYTE;if(i===_c)return n.UNSIGNED_SHORT_4_4_4_4;if(i===vc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Jf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Kf)return n.BYTE;if(i===Zf)return n.SHORT;if(i===zr)return n.UNSIGNED_SHORT;if(i===gc)return n.INT;if(i===hs)return n.UNSIGNED_INT;if(i===pi)return n.FLOAT;if(i===$r)return n.HALF_FLOAT;if(i===Qf)return n.ALPHA;if(i===eh)return n.RGB;if(i===Nn)return n.RGBA;if(i===th)return n.LUMINANCE;if(i===nh)return n.LUMINANCE_ALPHA;if(i===$s)return n.DEPTH_COMPONENT;if(i===er)return n.DEPTH_STENCIL;if(i===ih)return n.RED;if(i===xc)return n.RED_INTEGER;if(i===sh)return n.RG;if(i===yc)return n.RG_INTEGER;if(i===bc)return n.RGBA_INTEGER;if(i===Ta||i===Aa||i===wa||i===Ca)if(a===xt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ta)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ta)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Aa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===wa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ca)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===El||i===Tl||i===Al||i===wl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===El)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Tl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Al)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===wl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Cl||i===Rl||i===Pl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Cl||i===Rl)return a===xt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Pl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Dl||i===Ll||i===Il||i===Ul||i===Nl||i===Fl||i===Ol||i===Bl||i===kl||i===zl||i===Hl||i===Vl||i===Gl||i===Wl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Dl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ll)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Il)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ul)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Nl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Fl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ol)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Bl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===kl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===zl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Hl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Vl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Gl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Wl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ra||i===Xl||i===$l)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ra)return a===xt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Xl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===$l)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===rh||i===jl||i===ql||i===Yl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ra)return r.COMPRESSED_RED_RGTC1_EXT;if(i===jl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ql)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Yl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Qs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const _1={type:"move"};class Zo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ii,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ii,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ii,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const M of e.hand.values()){const g=t.getJointPose(M,i),f=this._getHandJoint(c,M);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,v=.005;c.inputState.pinching&&h>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_1)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ii;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const v1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,x1=`
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

}`;class y1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new sn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new zi({vertexShader:v1,fragmentShader:x1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Nt(new ir(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class b1 extends _s{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,v=null;const M=new y1,g=t.getContextAttributes();let f=null,C=null;const R=[],y=[],L=new Xe;let w=null;const E=new Tn;E.viewport=new Pt;const D=new Tn;D.viewport=new Pt;const S=[E,D],b=new Hx;let I=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let ve=R[re];return ve===void 0&&(ve=new Zo,R[re]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(re){let ve=R[re];return ve===void 0&&(ve=new Zo,R[re]=ve),ve.getGripSpace()},this.getHand=function(re){let ve=R[re];return ve===void 0&&(ve=new Zo,R[re]=ve),ve.getHandSpace()};function N(re){const ve=y.indexOf(re.inputSource);if(ve===-1)return;const Le=R[ve];Le!==void 0&&(Le.update(re.inputSource,re.frame,c||a),Le.dispatchEvent({type:re.type,data:re.inputSource}))}function W(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",ne);for(let re=0;re<R.length;re++){const ve=y[re];ve!==null&&(y[re]=null,R[re].disconnect(ve))}I=null,U=null,M.reset(),e.setRenderTarget(f),p=null,h=null,d=null,s=null,C=null,je.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){r=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){o=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(re){c=re},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(re){if(s=re,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",W),s.addEventListener("inputsourceschange",ne),g.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(L),s.enabledFeatures!==void 0&&s.enabledFeatures.includes("layers")){let Le=null,Ee=null,Be=null;g.depth&&(Be=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Le=g.stencil?er:$s,Ee=g.stencil?Qs:hs);const ke={colorFormat:t.RGBA8,depthFormat:Be,scaleFactor:r};d=new XRWebGLBinding(s,t),h=d.createProjectionLayer(ke),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),C=new ps(h.textureWidth,h.textureHeight,{format:Nn,type:yi,depthTexture:new yh(h.textureWidth,h.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,Le),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}else{const Le={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Le),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),C=new ps(p.framebufferWidth,p.framebufferHeight,{format:Nn,type:yi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}C.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),je.setContext(s),je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function ne(re){for(let ve=0;ve<re.removed.length;ve++){const Le=re.removed[ve],Ee=y.indexOf(Le);Ee>=0&&(y[Ee]=null,R[Ee].disconnect(Le))}for(let ve=0;ve<re.added.length;ve++){const Le=re.added[ve];let Ee=y.indexOf(Le);if(Ee===-1){for(let ke=0;ke<R.length;ke++)if(ke>=y.length){y.push(Le),Ee=ke;break}else if(y[ke]===null){y[ke]=Le,Ee=ke;break}if(Ee===-1)break}const Be=R[Ee];Be&&Be.connect(Le)}}const Y=new X,se=new X;function z(re,ve,Le){Y.setFromMatrixPosition(ve.matrixWorld),se.setFromMatrixPosition(Le.matrixWorld);const Ee=Y.distanceTo(se),Be=ve.projectionMatrix.elements,ke=Le.projectionMatrix.elements,Ye=Be[14]/(Be[10]-1),dt=Be[14]/(Be[10]+1),P=(Be[9]+1)/Be[5],O=(Be[9]-1)/Be[5],T=(Be[8]-1)/Be[0],oe=(ke[8]+1)/ke[0],ee=Ye*T,J=Ye*oe,te=Ee/(-T+oe),ue=te*-T;if(ve.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(ue),re.translateZ(te),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),Be[10]===-1)re.projectionMatrix.copy(ve.projectionMatrix),re.projectionMatrixInverse.copy(ve.projectionMatrixInverse);else{const Q=Ye+te,x=dt+te,_=ee-ue,F=J+(Ee-ue),G=P*dt/x*Q,j=O*dt/x*Q;re.projectionMatrix.makePerspective(_,F,G,j,Q,x),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function me(re,ve){ve===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(ve.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(s===null)return;let ve=re.near,Le=re.far;M.texture!==null&&(M.depthNear>0&&(ve=M.depthNear),M.depthFar>0&&(Le=M.depthFar)),b.near=D.near=E.near=ve,b.far=D.far=E.far=Le,(I!==b.near||U!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),I=b.near,U=b.far),E.layers.mask=re.layers.mask|2,D.layers.mask=re.layers.mask|4,b.layers.mask=E.layers.mask|D.layers.mask;const Ee=re.parent,Be=b.cameras;me(b,Ee);for(let ke=0;ke<Be.length;ke++)me(Be[ke],Ee);Be.length===2?z(b,E,D):b.projectionMatrix.copy(E.projectionMatrix),Me(re,b,Ee)};function Me(re,ve,Le){Le===null?re.matrix.copy(ve.matrixWorld):(re.matrix.copy(Le.matrixWorld),re.matrix.invert(),re.matrix.multiply(ve.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(ve.projectionMatrix),re.projectionMatrixInverse.copy(ve.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=Kl*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(re){l=re,h!==null&&(h.fixedFoveation=re),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=re)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(b)};let be=null;function Fe(re,ve){if(u=ve.getViewerPose(c||a),v=ve,u!==null){const Le=u.views;p!==null&&(e.setRenderTargetFramebuffer(C,p.framebuffer),e.setRenderTarget(C));let Ee=!1;Le.length!==b.cameras.length&&(b.cameras.length=0,Ee=!0);for(let ke=0;ke<Le.length;ke++){const Ye=Le[ke];let dt=null;if(p!==null)dt=p.getViewport(Ye);else{const O=d.getViewSubImage(h,Ye);dt=O.viewport,ke===0&&(e.setRenderTargetTextures(C,O.colorTexture,h.ignoreDepthValues?void 0:O.depthStencilTexture),e.setRenderTarget(C))}let P=S[ke];P===void 0&&(P=new Tn,P.layers.enable(ke),P.viewport=new Pt,S[ke]=P),P.matrix.fromArray(Ye.transform.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale),P.projectionMatrix.fromArray(Ye.projectionMatrix),P.projectionMatrixInverse.copy(P.projectionMatrix).invert(),P.viewport.set(dt.x,dt.y,dt.width,dt.height),ke===0&&(b.matrix.copy(P.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),Ee===!0&&b.cameras.push(P)}const Be=s.enabledFeatures;if(Be&&Be.includes("depth-sensing")){const ke=d.getDepthInformation(Le[0]);ke&&ke.isValid&&ke.texture&&M.init(e,ke,s.renderState)}}for(let Le=0;Le<R.length;Le++){const Ee=y[Le],Be=R[Le];Ee!==null&&Be!==void 0&&Be.update(Ee,ve,c||a)}be&&be(re,ve),ve.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ve}),v=null}const je=new Sh;je.setAnimationLoop(Fe),this.setAnimationLoop=function(re){be=re},this.dispose=function(){}}}const es=new Qn,M1=new Dt;function S1(n,e){function t(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function i(g,f){f.color.getRGB(g.fogColor.value,_h(n)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function s(g,f,C,R,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(g,f):f.isMeshToonMaterial?(r(g,f),d(g,f)):f.isMeshPhongMaterial?(r(g,f),u(g,f)):f.isMeshStandardMaterial?(r(g,f),h(g,f),f.isMeshPhysicalMaterial&&p(g,f,y)):f.isMeshMatcapMaterial?(r(g,f),v(g,f)):f.isMeshDepthMaterial?r(g,f):f.isMeshDistanceMaterial?(r(g,f),M(g,f)):f.isMeshNormalMaterial?r(g,f):f.isLineBasicMaterial?(a(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?l(g,f,C,R):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,t(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===dn&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,t(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===dn&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,t(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,t(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const C=e.get(f),R=C.envMap,y=C.envMapRotation;R&&(g.envMap.value=R,es.copy(y),es.x*=-1,es.y*=-1,es.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),g.envMapRotation.value.setFromMatrix4(M1.makeRotationFromEuler(es)),g.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,g.aoMapTransform))}function a(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,C,R){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*C,g.scale.value=R*.5,f.map&&(g.map.value=f.map,t(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function u(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function d(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function h(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,C){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===dn&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=C.texture,g.transmissionSamplerSize.value.set(C.width,C.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,f){f.matcap&&(g.matcap.value=f.matcap)}function M(g,f){const C=e.get(f).light;g.referencePosition.value.setFromMatrixPosition(C.matrixWorld),g.nearDistance.value=C.shadow.camera.near,g.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function E1(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(C,R){const y=R.program;i.uniformBlockBinding(C,y)}function c(C,R){let y=s[C.id];y===void 0&&(v(C),y=u(C),s[C.id]=y,C.addEventListener("dispose",g));const L=R.program;i.updateUBOMapping(C,L);const w=e.render.frame;r[C.id]!==w&&(h(C),r[C.id]=w)}function u(C){const R=d();C.__bindingPointIndex=R;const y=n.createBuffer(),L=C.__size,w=C.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,L,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,R,y),y}function d(){for(let C=0;C<o;C++)if(a.indexOf(C)===-1)return a.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(C){const R=s[C.id],y=C.uniforms,L=C.__cache;n.bindBuffer(n.UNIFORM_BUFFER,R);for(let w=0,E=y.length;w<E;w++){const D=Array.isArray(y[w])?y[w]:[y[w]];for(let S=0,b=D.length;S<b;S++){const I=D[S];if(p(I,w,S,L)===!0){const U=I.__offset,N=Array.isArray(I.value)?I.value:[I.value];let W=0;for(let ne=0;ne<N.length;ne++){const Y=N[ne],se=M(Y);typeof Y=="number"||typeof Y=="boolean"?(I.__data[0]=Y,n.bufferSubData(n.UNIFORM_BUFFER,U+W,I.__data)):Y.isMatrix3?(I.__data[0]=Y.elements[0],I.__data[1]=Y.elements[1],I.__data[2]=Y.elements[2],I.__data[3]=0,I.__data[4]=Y.elements[3],I.__data[5]=Y.elements[4],I.__data[6]=Y.elements[5],I.__data[7]=0,I.__data[8]=Y.elements[6],I.__data[9]=Y.elements[7],I.__data[10]=Y.elements[8],I.__data[11]=0):(Y.toArray(I.__data,W),W+=se.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(C,R,y,L){const w=C.value,E=R+"_"+y;if(L[E]===void 0)return typeof w=="number"||typeof w=="boolean"?L[E]=w:L[E]=w.clone(),!0;{const D=L[E];if(typeof w=="number"||typeof w=="boolean"){if(D!==w)return L[E]=w,!0}else if(D.equals(w)===!1)return D.copy(w),!0}return!1}function v(C){const R=C.uniforms;let y=0;const L=16;for(let E=0,D=R.length;E<D;E++){const S=Array.isArray(R[E])?R[E]:[R[E]];for(let b=0,I=S.length;b<I;b++){const U=S[b],N=Array.isArray(U.value)?U.value:[U.value];for(let W=0,ne=N.length;W<ne;W++){const Y=N[W],se=M(Y),z=y%L,me=z%se.boundary,Me=z+me;y+=me,Me!==0&&L-Me<se.storage&&(y+=L-Me),U.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=y,y+=se.storage}}}const w=y%L;return w>0&&(y+=L-w),C.__size=y,C.__cache={},this}function M(C){const R={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(R.boundary=4,R.storage=4):C.isVector2?(R.boundary=8,R.storage=8):C.isVector3||C.isColor?(R.boundary=16,R.storage=12):C.isVector4?(R.boundary=16,R.storage=16):C.isMatrix3?(R.boundary=48,R.storage=48):C.isMatrix4?(R.boundary=64,R.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),R}function g(C){const R=C.target;R.removeEventListener("dispose",g);const y=a.indexOf(R.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(s[R.id]),delete s[R.id],delete r[R.id]}function f(){for(const C in s)n.deleteBuffer(s[C]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}class T1{constructor(e={}){const{canvas:t=tx(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const v=new Uint32Array(4),M=new Int32Array(4);let g=null,f=null;const C=[],R=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=cn,this.toneMapping=Fi,this.toneMappingExposure=1;const y=this;let L=!1,w=0,E=0,D=null,S=-1,b=null;const I=new Pt,U=new Pt;let N=null;const W=new rt(0);let ne=0,Y=t.width,se=t.height,z=1,me=null,Me=null;const be=new Pt(0,0,Y,se),Fe=new Pt(0,0,Y,se);let je=!1;const re=new Sc;let ve=!1,Le=!1;this.transmissionResolutionScale=1;const Ee=new Dt,Be=new Dt,ke=new X,Ye=new Pt,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let P=!1;function O(){return D===null?z:1}let T=i;function oe(A,k){return t.getContext(A,k)}try{const A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${mc}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",Pe,!1),t.addEventListener("webglcontextcreationerror",Re,!1),T===null){const k="webgl2";if(T=oe(k,A),T===null)throw oe(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ee,J,te,ue,Q,x,_,F,G,j,$,_e,de,xe,ze,fe,Te,Oe,Ve,Se,qe,We,lt,B;function Ae(){ee=new UM(T),ee.init(),We=new g1(T,ee),J=new CM(T,ee,e,We),te=new p1(T,ee),J.reverseDepthBuffer&&h&&te.buffers.depth.setReversed(!0),ue=new OM(T),Q=new t1,x=new m1(T,ee,te,Q,J,We,ue),_=new PM(y),F=new IM(y),G=new Wx(T),lt=new AM(T,G),j=new NM(T,G,ue,lt),$=new kM(T,j,G,ue),Ve=new BM(T,J,x),fe=new RM(Q),_e=new e1(y,_,F,ee,J,lt,fe),de=new S1(y,Q),xe=new i1,ze=new c1(ee),Oe=new TM(y,_,F,te,$,p,l),Te=new f1(y,$,J),B=new E1(T,ue,J,te),Se=new wM(T,ee,ue),qe=new FM(T,ee,ue),ue.programs=_e.programs,y.capabilities=J,y.extensions=ee,y.properties=Q,y.renderLists=xe,y.shadowMap=Te,y.state=te,y.info=ue}Ae();const ie=new b1(y,T);this.xr=ie,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const A=ee.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ee.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(A){A!==void 0&&(z=A,this.setSize(Y,se,!1))},this.getSize=function(A){return A.set(Y,se)},this.setSize=function(A,k,q=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=A,se=k,t.width=Math.floor(A*z),t.height=Math.floor(k*z),q===!0&&(t.style.width=A+"px",t.style.height=k+"px"),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(Y*z,se*z).floor()},this.setDrawingBufferSize=function(A,k,q){Y=A,se=k,z=q,t.width=Math.floor(A*q),t.height=Math.floor(k*q),this.setViewport(0,0,A,k)},this.getCurrentViewport=function(A){return A.copy(I)},this.getViewport=function(A){return A.copy(be)},this.setViewport=function(A,k,q,K){A.isVector4?be.set(A.x,A.y,A.z,A.w):be.set(A,k,q,K),te.viewport(I.copy(be).multiplyScalar(z).round())},this.getScissor=function(A){return A.copy(Fe)},this.setScissor=function(A,k,q,K){A.isVector4?Fe.set(A.x,A.y,A.z,A.w):Fe.set(A,k,q,K),te.scissor(U.copy(Fe).multiplyScalar(z).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(A){te.setScissorTest(je=A)},this.setOpaqueSort=function(A){me=A},this.setTransparentSort=function(A){Me=A},this.getClearColor=function(A){return A.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor.apply(Oe,arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha.apply(Oe,arguments)},this.clear=function(A=!0,k=!0,q=!0){let K=0;if(A){let V=!1;if(D!==null){const ge=D.texture.format;V=ge===bc||ge===yc||ge===xc}if(V){const ge=D.texture.type,De=ge===yi||ge===hs||ge===zr||ge===Qs||ge===_c||ge===vc,Ue=Oe.getClearColor(),Ne=Oe.getClearAlpha(),Ke=Ue.r,Ze=Ue.g,He=Ue.b;De?(v[0]=Ke,v[1]=Ze,v[2]=He,v[3]=Ne,T.clearBufferuiv(T.COLOR,0,v)):(M[0]=Ke,M[1]=Ze,M[2]=He,M[3]=Ne,T.clearBufferiv(T.COLOR,0,M))}else K|=T.COLOR_BUFFER_BIT}k&&(K|=T.DEPTH_BUFFER_BIT),q&&(K|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",Pe,!1),t.removeEventListener("webglcontextcreationerror",Re,!1),Oe.dispose(),xe.dispose(),ze.dispose(),Q.dispose(),_.dispose(),F.dispose(),$.dispose(),lt.dispose(),B.dispose(),_e.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Rn),ie.removeEventListener("sessionend",ei),_n.stop()};function ce(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const A=ue.autoReset,k=Te.enabled,q=Te.autoUpdate,K=Te.needsUpdate,V=Te.type;Ae(),ue.autoReset=A,Te.enabled=k,Te.autoUpdate=q,Te.needsUpdate=K,Te.type=V}function Re(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Z(A){const k=A.target;k.removeEventListener("dispose",Z),H(k)}function H(A){Ie(A),Q.remove(A)}function Ie(A){const k=Q.get(A).programs;k!==void 0&&(k.forEach(function(q){_e.releaseProgram(q)}),A.isShaderMaterial&&_e.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,q,K,V,ge){k===null&&(k=dt);const De=V.isMesh&&V.matrixWorld.determinant()<0,Ue=lr(A,k,q,K,V);te.setMaterial(K,De);let Ne=q.index,Ke=1;if(K.wireframe===!0){if(Ne=j.getWireframeAttribute(q),Ne===void 0)return;Ke=2}const Ze=q.drawRange,He=q.attributes.position;let at=Ze.start*Ke,pt=(Ze.start+Ze.count)*Ke;ge!==null&&(at=Math.max(at,ge.start*Ke),pt=Math.min(pt,(ge.start+ge.count)*Ke)),Ne!==null?(at=Math.max(at,0),pt=Math.min(pt,Ne.count)):He!=null&&(at=Math.max(at,0),pt=Math.min(pt,He.count));const Lt=pt-at;if(Lt<0||Lt===1/0)return;lt.setup(V,K,Ue,q,Ne);let Rt,ct=Se;if(Ne!==null&&(Rt=G.get(Ne),ct=qe,ct.setIndex(Rt)),V.isMesh)K.wireframe===!0?(te.setLineWidth(K.wireframeLinewidth*O()),ct.setMode(T.LINES)):ct.setMode(T.TRIANGLES);else if(V.isLine){let Ge=K.linewidth;Ge===void 0&&(Ge=1),te.setLineWidth(Ge*O()),V.isLineSegments?ct.setMode(T.LINES):V.isLineLoop?ct.setMode(T.LINE_LOOP):ct.setMode(T.LINE_STRIP)}else V.isPoints?ct.setMode(T.POINTS):V.isSprite&&ct.setMode(T.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)ct.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(ee.get("WEBGL_multi_draw"))ct.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Ge=V._multiDrawStarts,Gt=V._multiDrawCounts,mt=V._multiDrawCount,Pn=Ne?G.get(Ne).bytesPerElement:1,xs=Q.get(K).currentProgram.getUniforms();for(let fn=0;fn<mt;fn++)xs.setValue(T,"_gl_DrawID",fn),ct.render(Ge[fn]/Pn,Gt[fn])}else if(V.isInstancedMesh)ct.renderInstances(at,Lt,V.count);else if(q.isInstancedBufferGeometry){const Ge=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Gt=Math.min(q.instanceCount,Ge);ct.renderInstances(at,Lt,Gt)}else ct.render(at,Lt)};function ae(A,k,q){A.transparent===!0&&A.side===jn&&A.forceSinglePass===!1?(A.side=dn,A.needsUpdate=!0,kt(A,k,q),A.side=ki,A.needsUpdate=!0,kt(A,k,q),A.side=jn):kt(A,k,q)}this.compile=function(A,k,q=null){q===null&&(q=A),f=ze.get(q),f.init(k),R.push(f),q.traverseVisible(function(V){V.isLight&&V.layers.test(k.layers)&&(f.pushLight(V),V.castShadow&&f.pushShadow(V))}),A!==q&&A.traverseVisible(function(V){V.isLight&&V.layers.test(k.layers)&&(f.pushLight(V),V.castShadow&&f.pushShadow(V))}),f.setupLights();const K=new Set;return A.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const ge=V.material;if(ge)if(Array.isArray(ge))for(let De=0;De<ge.length;De++){const Ue=ge[De];ae(Ue,q,V),K.add(Ue)}else ae(ge,q,V),K.add(ge)}),R.pop(),f=null,K},this.compileAsync=function(A,k,q=null){const K=this.compile(A,k,q);return new Promise(V=>{function ge(){if(K.forEach(function(De){Q.get(De).currentProgram.isReady()&&K.delete(De)}),K.size===0){V(A);return}setTimeout(ge,10)}ee.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let ft=null;function Vt(A){ft&&ft(A)}function Rn(){_n.stop()}function ei(){_n.start()}const _n=new Sh;_n.setAnimationLoop(Vt),typeof self<"u"&&_n.setContext(self),this.setAnimationLoop=function(A){ft=A,ie.setAnimationLoop(A),A===null?_n.stop():_n.start()},ie.addEventListener("sessionstart",Rn),ie.addEventListener("sessionend",ei),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(k),k=ie.getCamera()),A.isScene===!0&&A.onBeforeRender(y,A,k,D),f=ze.get(A,R.length),f.init(k),R.push(f),Be.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),re.setFromProjectionMatrix(Be),Le=this.localClippingEnabled,ve=fe.init(this.clippingPlanes,Le),g=xe.get(A,C.length),g.init(),C.push(g),ie.enabled===!0&&ie.isPresenting===!0){const ge=y.xr.getDepthSensingMesh();ge!==null&&Vi(ge,k,-1/0,y.sortObjects)}Vi(A,k,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(me,Me),P=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,P&&Oe.addToRenderList(g,A),this.info.render.frame++,ve===!0&&fe.beginShadows();const q=f.state.shadowsArray;Te.render(q,A,k),ve===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=g.opaque,V=g.transmissive;if(f.setupLights(),k.isArrayCamera){const ge=k.cameras;if(V.length>0)for(let De=0,Ue=ge.length;De<Ue;De++){const Ne=ge[De];vn(K,V,A,Ne)}P&&Oe.render(A);for(let De=0,Ue=ge.length;De<Ue;De++){const Ne=ge[De];or(g,A,Ne,Ne.viewport)}}else V.length>0&&vn(K,V,A,k),P&&Oe.render(A),or(g,A,k);D!==null&&E===0&&(x.updateMultisampleRenderTarget(D),x.updateRenderTargetMipmap(D)),A.isScene===!0&&A.onAfterRender(y,A,k),lt.resetDefaultState(),S=-1,b=null,R.pop(),R.length>0?(f=R[R.length-1],ve===!0&&fe.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,C.pop(),C.length>0?g=C[C.length-1]:g=null};function Vi(A,k,q,K){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLight)f.pushLight(A),A.castShadow&&f.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||re.intersectsSprite(A)){K&&Ye.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Be);const De=$.update(A),Ue=A.material;Ue.visible&&g.push(A,De,Ue,q,Ye.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||re.intersectsObject(A))){const De=$.update(A),Ue=A.material;if(K&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ye.copy(A.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),Ye.copy(De.boundingSphere.center)),Ye.applyMatrix4(A.matrixWorld).applyMatrix4(Be)),Array.isArray(Ue)){const Ne=De.groups;for(let Ke=0,Ze=Ne.length;Ke<Ze;Ke++){const He=Ne[Ke],at=Ue[He.materialIndex];at&&at.visible&&g.push(A,De,at,q,Ye.z,He)}}else Ue.visible&&g.push(A,De,Ue,q,Ye.z,null)}}const ge=A.children;for(let De=0,Ue=ge.length;De<Ue;De++)Vi(ge[De],k,q,K)}function or(A,k,q,K){const V=A.opaque,ge=A.transmissive,De=A.transparent;f.setupLightsView(q),ve===!0&&fe.setGlobalState(y.clippingPlanes,q),K&&te.viewport(I.copy(K)),V.length>0&&Gi(V,k,q),ge.length>0&&Gi(ge,k,q),De.length>0&&Gi(De,k,q),te.buffers.depth.setTest(!0),te.buffers.depth.setMask(!0),te.buffers.color.setMask(!0),te.setPolygonOffset(!1)}function vn(A,k,q,K){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[K.id]===void 0&&(f.state.transmissionRenderTarget[K.id]=new ps(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float")?$r:yi,minFilter:os,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace}));const ge=f.state.transmissionRenderTarget[K.id],De=K.viewport||I;ge.setSize(De.z*y.transmissionResolutionScale,De.w*y.transmissionResolutionScale);const Ue=y.getRenderTarget();y.setRenderTarget(ge),y.getClearColor(W),ne=y.getClearAlpha(),ne<1&&y.setClearColor(16777215,.5),y.clear(),P&&Oe.render(q);const Ne=y.toneMapping;y.toneMapping=Fi;const Ke=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),f.setupLightsView(K),ve===!0&&fe.setGlobalState(y.clippingPlanes,K),Gi(A,q,K),x.updateMultisampleRenderTarget(ge),x.updateRenderTargetMipmap(ge),ee.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let He=0,at=k.length;He<at;He++){const pt=k[He],Lt=pt.object,Rt=pt.geometry,ct=pt.material,Ge=pt.group;if(ct.side===jn&&Lt.layers.test(K.layers)){const Gt=ct.side;ct.side=dn,ct.needsUpdate=!0,vs(Lt,q,K,Rt,ct,Ge),ct.side=Gt,ct.needsUpdate=!0,Ze=!0}}Ze===!0&&(x.updateMultisampleRenderTarget(ge),x.updateRenderTargetMipmap(ge))}y.setRenderTarget(Ue),y.setClearColor(W,ne),Ke!==void 0&&(K.viewport=Ke),y.toneMapping=Ne}function Gi(A,k,q){const K=k.isScene===!0?k.overrideMaterial:null;for(let V=0,ge=A.length;V<ge;V++){const De=A[V],Ue=De.object,Ne=De.geometry,Ke=K===null?De.material:K,Ze=De.group;Ue.layers.test(q.layers)&&vs(Ue,k,q,Ne,Ke,Ze)}}function vs(A,k,q,K,V,ge){A.onBeforeRender(y,k,q,K,V,ge),A.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),V.onBeforeRender(y,k,q,K,A,ge),V.transparent===!0&&V.side===jn&&V.forceSinglePass===!1?(V.side=dn,V.needsUpdate=!0,y.renderBufferDirect(q,k,K,V,A,ge),V.side=ki,V.needsUpdate=!0,y.renderBufferDirect(q,k,K,V,A,ge),V.side=jn):y.renderBufferDirect(q,k,K,V,A,ge),A.onAfterRender(y,k,q,K,V,ge)}function kt(A,k,q){k.isScene!==!0&&(k=dt);const K=Q.get(A),V=f.state.lights,ge=f.state.shadowsArray,De=V.state.version,Ue=_e.getParameters(A,V.state,ge,k,q),Ne=_e.getProgramCacheKey(Ue);let Ke=K.programs;K.environment=A.isMeshStandardMaterial?k.environment:null,K.fog=k.fog,K.envMap=(A.isMeshStandardMaterial?F:_).get(A.envMap||K.environment),K.envMapRotation=K.environment!==null&&A.envMap===null?k.environmentRotation:A.envMapRotation,Ke===void 0&&(A.addEventListener("dispose",Z),Ke=new Map,K.programs=Ke);let Ze=Ke.get(Ne);if(Ze!==void 0){if(K.currentProgram===Ze&&K.lightsStateVersion===De)return Yr(A,Ue),Ze}else Ue.uniforms=_e.getUniforms(A),A.onBeforeCompile(Ue,y),Ze=_e.acquireProgram(Ue,Ne),Ke.set(Ne,Ze),K.uniforms=Ue.uniforms;const He=K.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(He.clippingPlanes=fe.uniform),Yr(A,Ue),K.needsLights=Ph(A),K.lightsStateVersion=De,K.needsLights&&(He.ambientLightColor.value=V.state.ambient,He.lightProbe.value=V.state.probe,He.directionalLights.value=V.state.directional,He.directionalLightShadows.value=V.state.directionalShadow,He.spotLights.value=V.state.spot,He.spotLightShadows.value=V.state.spotShadow,He.rectAreaLights.value=V.state.rectArea,He.ltc_1.value=V.state.rectAreaLTC1,He.ltc_2.value=V.state.rectAreaLTC2,He.pointLights.value=V.state.point,He.pointLightShadows.value=V.state.pointShadow,He.hemisphereLights.value=V.state.hemi,He.directionalShadowMap.value=V.state.directionalShadowMap,He.directionalShadowMatrix.value=V.state.directionalShadowMatrix,He.spotShadowMap.value=V.state.spotShadowMap,He.spotLightMatrix.value=V.state.spotLightMatrix,He.spotLightMap.value=V.state.spotLightMap,He.pointShadowMap.value=V.state.pointShadowMap,He.pointShadowMatrix.value=V.state.pointShadowMatrix),K.currentProgram=Ze,K.uniformsList=null,Ze}function Mi(A){if(A.uniformsList===null){const k=A.currentProgram.getUniforms();A.uniformsList=Da.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function Yr(A,k){const q=Q.get(A);q.outputColorSpace=k.outputColorSpace,q.batching=k.batching,q.batchingColor=k.batchingColor,q.instancing=k.instancing,q.instancingColor=k.instancingColor,q.instancingMorph=k.instancingMorph,q.skinning=k.skinning,q.morphTargets=k.morphTargets,q.morphNormals=k.morphNormals,q.morphColors=k.morphColors,q.morphTargetsCount=k.morphTargetsCount,q.numClippingPlanes=k.numClippingPlanes,q.numIntersection=k.numClipIntersection,q.vertexAlphas=k.vertexAlphas,q.vertexTangents=k.vertexTangents,q.toneMapping=k.toneMapping}function lr(A,k,q,K,V){k.isScene!==!0&&(k=dt),x.resetTextureUnits();const ge=k.fog,De=K.isMeshStandardMaterial?k.environment:null,Ue=D===null?y.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:tr,Ne=(K.isMeshStandardMaterial?F:_).get(K.envMap||De),Ke=K.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ze=!!q.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),He=!!q.morphAttributes.position,at=!!q.morphAttributes.normal,pt=!!q.morphAttributes.color;let Lt=Fi;K.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Lt=y.toneMapping);const Rt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ct=Rt!==void 0?Rt.length:0,Ge=Q.get(K),Gt=f.state.lights;if(ve===!0&&(Le===!0||A!==b)){const Zt=A===b&&K.id===S;fe.setState(K,A,Zt)}let mt=!1;K.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==Gt.state.version||Ge.outputColorSpace!==Ue||V.isBatchedMesh&&Ge.batching===!1||!V.isBatchedMesh&&Ge.batching===!0||V.isBatchedMesh&&Ge.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Ge.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Ge.instancing===!1||!V.isInstancedMesh&&Ge.instancing===!0||V.isSkinnedMesh&&Ge.skinning===!1||!V.isSkinnedMesh&&Ge.skinning===!0||V.isInstancedMesh&&Ge.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ge.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ge.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ge.instancingMorph===!1&&V.morphTexture!==null||Ge.envMap!==Ne||K.fog===!0&&Ge.fog!==ge||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==fe.numPlanes||Ge.numIntersection!==fe.numIntersection)||Ge.vertexAlphas!==Ke||Ge.vertexTangents!==Ze||Ge.morphTargets!==He||Ge.morphNormals!==at||Ge.morphColors!==pt||Ge.toneMapping!==Lt||Ge.morphTargetsCount!==ct)&&(mt=!0):(mt=!0,Ge.__version=K.version);let Pn=Ge.currentProgram;mt===!0&&(Pn=kt(K,k,V));let xs=!1,fn=!1,cr=!1;const At=Pn.getUniforms(),xn=Ge.uniforms;if(te.useProgram(Pn.program)&&(xs=!0,fn=!0,cr=!0),K.id!==S&&(S=K.id,fn=!0),xs||b!==A){te.buffers.depth.getReversed()?(Ee.copy(A.projectionMatrix),ix(Ee),sx(Ee),At.setValue(T,"projectionMatrix",Ee)):At.setValue(T,"projectionMatrix",A.projectionMatrix),At.setValue(T,"viewMatrix",A.matrixWorldInverse);const rn=At.map.cameraPosition;rn!==void 0&&rn.setValue(T,ke.setFromMatrixPosition(A.matrixWorld)),J.logarithmicDepthBuffer&&At.setValue(T,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&At.setValue(T,"isOrthographic",A.isOrthographicCamera===!0),b!==A&&(b=A,fn=!0,cr=!0)}if(V.isSkinnedMesh){At.setOptional(T,V,"bindMatrix"),At.setOptional(T,V,"bindMatrixInverse");const Zt=V.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),At.setValue(T,"boneTexture",Zt.boneTexture,x))}V.isBatchedMesh&&(At.setOptional(T,V,"batchingTexture"),At.setValue(T,"batchingTexture",V._matricesTexture,x),At.setOptional(T,V,"batchingIdTexture"),At.setValue(T,"batchingIdTexture",V._indirectTexture,x),At.setOptional(T,V,"batchingColorTexture"),V._colorsTexture!==null&&At.setValue(T,"batchingColorTexture",V._colorsTexture,x));const yn=q.morphAttributes;if((yn.position!==void 0||yn.normal!==void 0||yn.color!==void 0)&&Ve.update(V,q,Pn),(fn||Ge.receiveShadow!==V.receiveShadow)&&(Ge.receiveShadow=V.receiveShadow,At.setValue(T,"receiveShadow",V.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(xn.envMap.value=Ne,xn.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&k.environment!==null&&(xn.envMapIntensity.value=k.environmentIntensity),fn&&(At.setValue(T,"toneMappingExposure",y.toneMappingExposure),Ge.needsLights&&Rh(xn,cr),ge&&K.fog===!0&&de.refreshFogUniforms(xn,ge),de.refreshMaterialUniforms(xn,K,z,se,f.state.transmissionRenderTarget[A.id]),Da.upload(T,Mi(Ge),xn,x)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Da.upload(T,Mi(Ge),xn,x),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&At.setValue(T,"center",V.center),At.setValue(T,"modelViewMatrix",V.modelViewMatrix),At.setValue(T,"normalMatrix",V.normalMatrix),At.setValue(T,"modelMatrix",V.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const Zt=K.uniformsGroups;for(let rn=0,ao=Zt.length;rn<ao;rn++){const Wi=Zt[rn];B.update(Wi,Pn),B.bind(Wi,Pn)}}return Pn}function Rh(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function Ph(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(A,k,q){Q.get(A.texture).__webglTexture=k,Q.get(A.depthTexture).__webglTexture=q;const K=Q.get(A);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=q===void 0,K.__autoAllocateDepthBuffer||ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,k){const q=Q.get(A);q.__webglFramebuffer=k,q.__useDefaultFramebuffer=k===void 0};const Dh=T.createFramebuffer();this.setRenderTarget=function(A,k=0,q=0){D=A,w=k,E=q;let K=!0,V=null,ge=!1,De=!1;if(A){const Ne=Q.get(A);if(Ne.__useDefaultFramebuffer!==void 0)te.bindFramebuffer(T.FRAMEBUFFER,null),K=!1;else if(Ne.__webglFramebuffer===void 0)x.setupRenderTarget(A);else if(Ne.__hasExternalTextures)x.rebindTextures(A,Q.get(A.texture).__webglTexture,Q.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const He=A.depthTexture;if(Ne.__boundDepthTexture!==He){if(He!==null&&Q.has(He)&&(A.width!==He.image.width||A.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");x.setupDepthRenderbuffer(A)}}const Ke=A.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(De=!0);const Ze=Q.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ze[k])?V=Ze[k][q]:V=Ze[k],ge=!0):A.samples>0&&x.useMultisampledRTT(A)===!1?V=Q.get(A).__webglMultisampledFramebuffer:Array.isArray(Ze)?V=Ze[q]:V=Ze,I.copy(A.viewport),U.copy(A.scissor),N=A.scissorTest}else I.copy(be).multiplyScalar(z).floor(),U.copy(Fe).multiplyScalar(z).floor(),N=je;if(q!==0&&(V=Dh),te.bindFramebuffer(T.FRAMEBUFFER,V)&&K&&te.drawBuffers(A,V),te.viewport(I),te.scissor(U),te.setScissorTest(N),ge){const Ne=Q.get(A.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ne.__webglTexture,q)}else if(De){const Ne=Q.get(A.texture),Ke=k;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,Ne.__webglTexture,q,Ke)}else if(A!==null&&q!==0){const Ne=Q.get(A.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Ne.__webglTexture,q)}S=-1},this.readRenderTargetPixels=function(A,k,q,K,V,ge,De){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=Q.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&De!==void 0&&(Ue=Ue[De]),Ue){te.bindFramebuffer(T.FRAMEBUFFER,Ue);try{const Ne=A.texture,Ke=Ne.format,Ze=Ne.type;if(!J.textureFormatReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!J.textureTypeReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-K&&q>=0&&q<=A.height-V&&T.readPixels(k,q,K,V,We.convert(Ke),We.convert(Ze),ge)}finally{const Ne=D!==null?Q.get(D).__webglFramebuffer:null;te.bindFramebuffer(T.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(A,k,q,K,V,ge,De){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=Q.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&De!==void 0&&(Ue=Ue[De]),Ue){const Ne=A.texture,Ke=Ne.format,Ze=Ne.type;if(!J.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=A.width-K&&q>=0&&q<=A.height-V){te.bindFramebuffer(T.FRAMEBUFFER,Ue);const He=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,He),T.bufferData(T.PIXEL_PACK_BUFFER,ge.byteLength,T.STREAM_READ),T.readPixels(k,q,K,V,We.convert(Ke),We.convert(Ze),0);const at=D!==null?Q.get(D).__webglFramebuffer:null;te.bindFramebuffer(T.FRAMEBUFFER,at);const pt=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await nx(T,pt,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,He),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,ge),T.deleteBuffer(He),T.deleteSync(pt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,k=null,q=0){A.isTexture!==!0&&(Os("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,A=arguments[1]);const K=Math.pow(2,-q),V=Math.floor(A.image.width*K),ge=Math.floor(A.image.height*K),De=k!==null?k.x:0,Ue=k!==null?k.y:0;x.setTexture2D(A,0),T.copyTexSubImage2D(T.TEXTURE_2D,q,0,0,De,Ue,V,ge),te.unbindTexture()};const Lh=T.createFramebuffer(),Ih=T.createFramebuffer();this.copyTextureToTexture=function(A,k,q=null,K=null,V=0,ge=null){A.isTexture!==!0&&(Os("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,A=arguments[1],k=arguments[2],ge=arguments[3]||0,q=null),ge===null&&(V!==0?(Os("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ge=V,V=0):ge=0);let De,Ue,Ne,Ke,Ze,He,at,pt,Lt;const Rt=A.isCompressedTexture?A.mipmaps[ge]:A.image;if(q!==null)De=q.max.x-q.min.x,Ue=q.max.y-q.min.y,Ne=q.isBox3?q.max.z-q.min.z:1,Ke=q.min.x,Ze=q.min.y,He=q.isBox3?q.min.z:0;else{const yn=Math.pow(2,-V);De=Math.floor(Rt.width*yn),Ue=Math.floor(Rt.height*yn),A.isDataArrayTexture?Ne=Rt.depth:A.isData3DTexture?Ne=Math.floor(Rt.depth*yn):Ne=1,Ke=0,Ze=0,He=0}K!==null?(at=K.x,pt=K.y,Lt=K.z):(at=0,pt=0,Lt=0);const ct=We.convert(k.format),Ge=We.convert(k.type);let Gt;k.isData3DTexture?(x.setTexture3D(k,0),Gt=T.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(x.setTexture2DArray(k,0),Gt=T.TEXTURE_2D_ARRAY):(x.setTexture2D(k,0),Gt=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,k.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,k.unpackAlignment);const mt=T.getParameter(T.UNPACK_ROW_LENGTH),Pn=T.getParameter(T.UNPACK_IMAGE_HEIGHT),xs=T.getParameter(T.UNPACK_SKIP_PIXELS),fn=T.getParameter(T.UNPACK_SKIP_ROWS),cr=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,Rt.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Rt.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Ke),T.pixelStorei(T.UNPACK_SKIP_ROWS,Ze),T.pixelStorei(T.UNPACK_SKIP_IMAGES,He);const At=A.isDataArrayTexture||A.isData3DTexture,xn=k.isDataArrayTexture||k.isData3DTexture;if(A.isDepthTexture){const yn=Q.get(A),Zt=Q.get(k),rn=Q.get(yn.__renderTarget),ao=Q.get(Zt.__renderTarget);te.bindFramebuffer(T.READ_FRAMEBUFFER,rn.__webglFramebuffer),te.bindFramebuffer(T.DRAW_FRAMEBUFFER,ao.__webglFramebuffer);for(let Wi=0;Wi<Ne;Wi++)At&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Q.get(A).__webglTexture,V,He+Wi),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Q.get(k).__webglTexture,ge,Lt+Wi)),T.blitFramebuffer(Ke,Ze,De,Ue,at,pt,De,Ue,T.DEPTH_BUFFER_BIT,T.NEAREST);te.bindFramebuffer(T.READ_FRAMEBUFFER,null),te.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(V!==0||A.isRenderTargetTexture||Q.has(A)){const yn=Q.get(A),Zt=Q.get(k);te.bindFramebuffer(T.READ_FRAMEBUFFER,Lh),te.bindFramebuffer(T.DRAW_FRAMEBUFFER,Ih);for(let rn=0;rn<Ne;rn++)At?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,yn.__webglTexture,V,He+rn):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,yn.__webglTexture,V),xn?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Zt.__webglTexture,ge,Lt+rn):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Zt.__webglTexture,ge),V!==0?T.blitFramebuffer(Ke,Ze,De,Ue,at,pt,De,Ue,T.COLOR_BUFFER_BIT,T.NEAREST):xn?T.copyTexSubImage3D(Gt,ge,at,pt,Lt+rn,Ke,Ze,De,Ue):T.copyTexSubImage2D(Gt,ge,at,pt,Ke,Ze,De,Ue);te.bindFramebuffer(T.READ_FRAMEBUFFER,null),te.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else xn?A.isDataTexture||A.isData3DTexture?T.texSubImage3D(Gt,ge,at,pt,Lt,De,Ue,Ne,ct,Ge,Rt.data):k.isCompressedArrayTexture?T.compressedTexSubImage3D(Gt,ge,at,pt,Lt,De,Ue,Ne,ct,Rt.data):T.texSubImage3D(Gt,ge,at,pt,Lt,De,Ue,Ne,ct,Ge,Rt):A.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,ge,at,pt,De,Ue,ct,Ge,Rt.data):A.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,ge,at,pt,Rt.width,Rt.height,ct,Rt.data):T.texSubImage2D(T.TEXTURE_2D,ge,at,pt,De,Ue,ct,Ge,Rt);T.pixelStorei(T.UNPACK_ROW_LENGTH,mt),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Pn),T.pixelStorei(T.UNPACK_SKIP_PIXELS,xs),T.pixelStorei(T.UNPACK_SKIP_ROWS,fn),T.pixelStorei(T.UNPACK_SKIP_IMAGES,cr),ge===0&&k.generateMipmaps&&T.generateMipmap(Gt),te.unbindTexture()},this.copyTextureToTexture3D=function(A,k,q=null,K=null,V=0){return A.isTexture!==!0&&(Os("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,K=arguments[1]||null,A=arguments[2],k=arguments[3],V=arguments[4]||0),Os('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,k,q,K,V)},this.initRenderTarget=function(A){Q.get(A).__webglFramebuffer===void 0&&x.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?x.setTextureCube(A,0):A.isData3DTexture?x.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?x.setTexture2DArray(A,0):x.setTexture2D(A,0),te.unbindTexture()},this.resetState=function(){w=0,E=0,D=null,te.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=ut._getUnpackColorSpace()}}const yd={type:"change"},Rc={type:"start"},Ch={type:"end"},ba=new dh,bd=new Di,A1=Math.cos(70*ex.DEG2RAD),Ut=new X,on=2*Math.PI,bt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Jo=1e-6;class w1 extends Vx{constructor(e,t=null){super(e,t),this.state=bt.NONE,this.enabled=!0,this.target=new X,this.cursor=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ws.ROTATE,MIDDLE:Ws.DOLLY,RIGHT:Ws.PAN},this.touches={ONE:Bs.ROTATE,TWO:Bs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new X,this._lastQuaternion=new ms,this._lastTargetPosition=new X,this._quat=new ms().setFromUnitVectors(e.up,new X(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new qu,this._sphericalDelta=new qu,this._scale=1,this._panOffset=new X,this._rotateStart=new Xe,this._rotateEnd=new Xe,this._rotateDelta=new Xe,this._panStart=new Xe,this._panEnd=new Xe,this._panDelta=new Xe,this._dollyStart=new Xe,this._dollyEnd=new Xe,this._dollyDelta=new Xe,this._dollyDirection=new X,this._mouse=new Xe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=R1.bind(this),this._onPointerDown=C1.bind(this),this._onPointerUp=P1.bind(this),this._onContextMenu=O1.bind(this),this._onMouseWheel=I1.bind(this),this._onKeyDown=U1.bind(this),this._onTouchStart=N1.bind(this),this._onTouchMove=F1.bind(this),this._onMouseDown=D1.bind(this),this._onMouseMove=L1.bind(this),this._interceptControlDown=B1.bind(this),this._interceptControlUp=k1.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(yd),this.update(),this.state=bt.NONE}update(e=null){const t=this.object.position;Ut.copy(t).sub(this.target),Ut.applyQuaternion(this._quat),this._spherical.setFromVector3(Ut),this.autoRotate&&this.state===bt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=on:i>Math.PI&&(i-=on),s<-Math.PI?s+=on:s>Math.PI&&(s-=on),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Ut.setFromSpherical(this._spherical),Ut.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ut),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Ut.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new X(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new X(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Ut.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(ba.origin.copy(this.object.position),ba.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ba.direction))<A1?this.object.lookAt(this.target):(bd.setFromNormalAndCoplanarPoint(this.object.up,this.target),ba.intersectPlane(bd,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Jo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Jo||this._lastTargetPosition.distanceToSquared(this.target)>Jo?(this.dispatchEvent(yd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?on/60*this.autoRotateSpeed*e:on/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ut.setFromMatrixColumn(t,0),Ut.multiplyScalar(-e),this._panOffset.add(Ut)}_panUp(e,t){this.screenSpacePanning===!0?Ut.setFromMatrixColumn(t,1):(Ut.setFromMatrixColumn(t,0),Ut.crossVectors(this.object.up,Ut)),Ut.multiplyScalar(e),this._panOffset.add(Ut)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ut.copy(s).sub(this.target);let r=Ut.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(on*this._rotateDelta.x/t.clientHeight),this._rotateUp(on*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(on*this._rotateDelta.x/t.clientHeight),this._rotateUp(on*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Xe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function C1(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function R1(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function P1(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ch),this.state=bt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function D1(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ws.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=bt.DOLLY;break;case Ws.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=bt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=bt.ROTATE}break;case Ws.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=bt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=bt.PAN}break;default:this.state=bt.NONE}this.state!==bt.NONE&&this.dispatchEvent(Rc)}function L1(n){switch(this.state){case bt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case bt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case bt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function I1(n){this.enabled===!1||this.enableZoom===!1||this.state!==bt.NONE||(n.preventDefault(),this.dispatchEvent(Rc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Ch))}function U1(n){this.enabled!==!1&&this._handleKeyDown(n)}function N1(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Bs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=bt.TOUCH_ROTATE;break;case Bs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=bt.TOUCH_PAN;break;default:this.state=bt.NONE}break;case 2:switch(this.touches.TWO){case Bs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=bt.TOUCH_DOLLY_PAN;break;case Bs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=bt.TOUCH_DOLLY_ROTATE;break;default:this.state=bt.NONE}break;default:this.state=bt.NONE}this.state!==bt.NONE&&this.dispatchEvent(Rc)}function F1(n){switch(this._trackPointer(n),this.state){case bt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case bt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case bt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case bt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=bt.NONE}}function O1(n){this.enabled!==!1&&n.preventDefault()}function B1(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function k1(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const z1={class:"patternx-page"},H1={class:"patternx-shell"},V1={class:"patternx-nav"},G1={class:"patternx-tabs","aria-label":"纹脉工坊导航"},W1=["onClick"],X1={class:"patternx-main"},$1={key:0,class:"patternx-home"},j1={class:"patternx-landing-hero"},q1={class:"patternx-landing-copy"},Y1={class:"patternx-actions landing-actions"},K1={class:"patternx-live-preview"},Z1={class:"patternx-preview-badge"},J1={key:0,class:"patternx-canvas-loading"},Q1={class:"patternx-preview-info"},eE=["src","alt"],tE={class:"patternx-preview-tools"},nE={class:"patternx-preview-hint"},iE={class:"patternx-feature-band","aria-label":"平台功能"},sE=["onClick"],rE={class:"patternx-feature-icon"},aE={class:"patternx-popular-section"},oE={class:"patternx-section-title"},lE={class:"patternx-popular-grid"},cE=["onClick"],uE=["onClick"],dE=["src","alt"],fE=["onClick"],hE={key:1,class:"patternx-subpage"},pE={key:1,class:"patternx-upload-result"},mE={class:"patternx-card upload-preview-card"},gE={class:"patternx-card-title"},_E={class:"patternx-image-preview"},vE=["src","alt"],xE={class:"patternx-card upload-preview-card"},yE={class:"patternx-card-title"},bE={class:"patternx-image-preview extraction"},ME=["src"],SE={key:1,class:"patternx-spinner"},EE={key:2,class:"patternx-actions upload-actions"},TE=["disabled"],AE={key:2,class:"patternx-subpage studio-page"},wE={class:"patternx-studio-layout"},CE={class:"patternx-sidebar"},RE={class:"patternx-card"},PE={class:"patternx-card-title"},DE={class:"patternx-studio-patterns"},LE=["onClick"],IE={class:"patternx-mini-thumb"},UE=["src","alt"],NE={class:"patternx-card"},FE={class:"patternx-card-title"},OE={class:"patternx-model-grid"},BE=["onClick"],kE={class:"patternx-card"},zE={class:"patternx-card-title"},HE=["onUpdate:modelValue","min","max","step"],VE={class:"patternx-studio-main"},GE={key:0,class:"patternx-canvas-loading"},WE={class:"patternx-canvas-label"},XE={class:"patternx-studio-footer"},$E={key:0,class:"patternx-file-alert",role:"alert"},jE={class:"patternx-file-alert-icon"},qE={class:"patternx-file-alert-message"},YE={key:0,class:"patternx-toast",role:"status"},KE={__name:"PatternXPage",emits:["navigate","select-category"],setup(n,{emit:e}){var Pe,Re;const t=e,i=new URLSearchParams(window.location.search).get("pattern"),s=new URLSearchParams(window.location.search).get("view"),r=un.filter(Z=>Z.category==="animal"),a=et(s==="studio"?"studio":"home"),o=et(un.some(Z=>Z.id===i)?i:((Pe=r[0])==null?void 0:Pe.id)||((Re=un[0])==null?void 0:Re.id)||""),l=et("vase"),c=et(""),u=et(""),d=et(null),h=et(""),p=et(""),v=et(null),M=et(""),g=et("等待上传图片"),f=et(!1),C=et(null),R=et(!1),y=et(!1),L=Lr({active:!1,x:0,y:0}),w=et(new Set),E=Lr({scale:100,rotate:0,offset:0,repeatX:1,repeatY:1,textureOffsetX:0,textureOffsetY:0}),D=[{key:"vase",label:"花瓶",icon:xu},{key:"cup",label:"茶杯",icon:vg},{key:"box",label:"包装盒",icon:Mr},{key:"silk",label:"丝巾",icon:Ag},{key:"phone",label:"手机壳",icon:wg}],S=["#b85c38","#5a7d5a","#c9a227","#7a6048","#6c8295","#a08060"],b=un.map((Z,H)=>({...Z,region:["大临村","江南工坊","桐乡","民间布样"][H%4],color:S[H%S.length],likes:64+H*23,image:Z.previewImage})),I=yt(()=>v.value?[v.value,...N.value]:N.value),U=yt(()=>{var Z;return((Z=v.value)==null?void 0:Z.id)===o.value?v.value:b.find(H=>H.id===o.value)||b[0]}),N=yt(()=>r.map(Z=>b.find(H=>H.id===Z.id)).filter(Boolean)),W=[{title:"纹样智能采集",description:"上传图片，智能提取纹样结构与视觉特征",action:"立即体验",page:"upload",icon:_u},{title:"蓝印纹库",description:"返回主站查看动物纹实拍图与文化档案",action:"查看动物纹",actionType:"library",icon:ds},{title:"纹样 3D 创作",description:"选择器物载体，实时预览纹理与形态效果",action:"进入 3D 工坊",page:"studio",icon:Mr}];let ne,Y,se,z,me,Me,be,Fe,je,re,ve;function Le(Z){c.value=Z,window.clearTimeout(ne),ne=window.setTimeout(()=>{c.value=""},2600)}function Ee(Z){u.value=Z,window.clearTimeout(Y),Y=window.setTimeout(()=>{u.value=""},5200)}function Be(){window.clearTimeout(Y),u.value=""}function ke(Z){a.value=Z,window.scrollTo({top:0,behavior:"smooth"})}function Ye(Z){t("navigate",Z)}function dt(){t("select-category","animal"),t("navigate","/library")}function P(Z){t("navigate",`/pattern/${Z.id}`)}function O(Z){Z.actionType==="library"?dt():ke(Z.page)}function T(){const Z=N.value.findIndex(Ie=>Ie.id===o.value),H=N.value[(Z+1)%N.value.length];H&&(o.value=H.id)}function oe(){E.scale=100,E.rotate=0,E.offset=0,E.repeatX=1,E.repeatY=1,E.textureOffsetX=0,E.textureOffsetY=0,Me&&Me.position.set(0,.35,4.8),be==null||be.target.set(0,0,0),be==null||be.update()}function ee(){var Z,H,Ie;C.value&&(document.fullscreenElement?(Z=document.exitFullscreen)==null||Z.call(document):(Ie=(H=C.value).requestFullscreen)==null||Ie.call(H))}function J(Z){o.value=Z.id,ke("studio"),Le(`已选择：${Z.name}`)}function te(Z){const H=new Set(w.value),Ie=H.has(Z.id);Ie?H.delete(Z.id):H.add(Z.id),w.value=H,Le(Ie?"已取消收藏":"已收藏到你的纹样夹")}function ue(){var Z;(Z=d.value)==null||Z.click()}function Q(Z){var Ie,ae;const H=(ae=(Ie=Z.dataTransfer)==null?void 0:Ie.files)==null?void 0:ae[0];H&&F(H)}function x(Z){var Ie;const H=(Ie=Z.target.files)==null?void 0:Ie[0];H&&F(H)}function _(Z){return new Promise((H,Ie)=>{const ae=new Image;ae.onload=()=>{const Vt=Math.min(1,640/Math.max(ae.naturalWidth,ae.naturalHeight)),Rn=Math.max(1,Math.round(ae.naturalWidth*Vt)),ei=Math.max(1,Math.round(ae.naturalHeight*Vt)),_n=document.createElement("canvas");_n.width=Rn,_n.height=ei;const Vi=_n.getContext("2d",{willReadFrequently:!0});Vi.drawImage(ae,0,0,Rn,ei);const or=Vi.getImageData(0,0,Rn,ei),{data:vn}=or,Gi=[[0,0],[Rn-1,0],[0,ei-1],[Rn-1,ei-1],[Math.floor(Rn/2),0],[Math.floor(Rn/2),ei-1]],vs=Gi.reduce((kt,[Mi,Yr])=>{const lr=(Yr*Rn+Mi)*4;return[kt[0]+vn[lr],kt[1]+vn[lr+1],kt[2]+vn[lr+2]]},[0,0,0]).map(kt=>kt/Gi.length);for(let kt=0;kt<vn.length;kt+=4){const Mi=Math.hypot(vn[kt]-vs[0],vn[kt+1]-vs[1],vn[kt+2]-vs[2]);Mi<42?vn[kt+3]=0:Mi<70&&(vn[kt+3]=Math.round((Mi-42)/28*255))}Vi.putImageData(or,0,0),H(_n.toDataURL("image/png"))},ae.onerror=Ie,ae.src=Z})}function F(Z){if(!Z.type.startsWith("image/")){Ee("仅支持图片（JPG、PNG）和文本（html、txt、md）文件");return}window.clearTimeout(se),M.value=Z.name,g.value="正在读取本地图片...",f.value=!0;const H=new FileReader;H.onload=Ie=>{h.value=String(Ie.target.result||""),p.value="",g.value="正在提取纹样轮廓...",se=window.setTimeout(async()=>{try{p.value=await _(h.value),g.value="本地提取完成，可保存到纹样库"}catch{g.value="提取失败，已保留原图，请重试"}finally{f.value=!1}},900)},H.onerror=()=>{g.value="图片读取失败，请重试",f.value=!1},H.readAsDataURL(Z)}function G(){window.clearTimeout(se),h.value="",p.value="",M.value="",g.value="等待上传图片",f.value=!1,d.value&&(d.value.value="")}function j(){if(!p.value){Le("请先完成图片提取");return}v.value={...b[0],id:"uploaded-pattern",name:M.value.replace(/\.[^.]+$/,"")||"我的纹样",categoryName:"我的采集",meaning:"本次上传并提取的自定义纹样",image:p.value},o.value=v.value.id,Le(`「${v.value.name}」已用于 3D 创作`),ke("studio")}function $(Z){return Z==="scale"?`${E.scale}%`:Z==="rotate"?`${E.rotate}°`:E[Z]}function _e(Z){return new xr({color:16777215,map:je||null,roughness:.36,metalness:.04,side:jn})}function de(){const Z=[[0,-1.2],[.09,-1.18],[.12,-1.1],[.17,-.95],[.25,-.7],[.34,-.35],[.36,.05],[.3,.38],[.2,.72],[.18,.98],[.02,1.04]].map(([Ie,ae])=>new Xe(Ie,ae)),H=new Nt(new Wa(Z,64),_e());return H.castShadow=!0,H.receiveShadow=!0,H}function xe(){const Z=new Ii,H=[[0,-.62],[.1,-.6],[.2,-.43],[.32,-.16],[.35,.08],[.32,.14],[0,.14]].map(([ft,Vt])=>new Xe(ft,Vt)),Ie=new Nt(new Wa(H,48),_e()),ae=new Nt(new Tc(.46,.4,.04,48),new xr({color:15061692,roughness:.42}));return ae.position.y=-.65,Z.add(Ie,ae),Z}function ze(){const Z=new Ii,H=new Nt(new Oi(1.7,.52,1.3),_e()),Ie=new Nt(new Oi(1.7,.12,1.3),new xr({color:12096876,roughness:.4}));Ie.position.y=.32;const ae=new Nt(new Ac(.08,20,14),new xr({color:9136404,metalness:.5,roughness:.28}));return ae.position.y=.42,Z.add(H,Ie,ae),Z}function fe(){const Z=new ir(2.35,2.15,36,36),H=Z.attributes.position;for(let Ie=0;Ie<H.count;Ie+=1){const ae=H.getX(Ie),ft=H.getY(Ie);H.setZ(Ie,Math.sin(ae*2.6)*.06+Math.sin(ft*3.2)*.05-Math.pow(Math.max(Math.abs(ae/1.18),Math.abs(ft/1.08)),2)*.16)}return Z.computeVertexNormals(),new Nt(Z,_e())}function Te(){const Z=new Ii,H=new Nt(new Oi(.84,1.64,.12),new xr({color:2763326,metalness:.65,roughness:.26})),Ie=new Nt(new ir(.73,1.52),_e());return Ie.position.z=.07,Z.add(H,Ie),Z}function Oe(){if(!me)return;Fe&&(me.remove(Fe),Fe.traverse(H=>{var Ie;(Ie=H.geometry)==null||Ie.dispose(),H.material&&(Array.isArray(H.material)?H.material:[H.material]).forEach(ft=>ft.dispose())})),Fe=new Ii;const Z={vase:de,cup:xe,box:ze,silk:fe,phone:Te}[l.value]();Z.traverse(H=>{H.isMesh&&(H.castShadow=!0,H.receiveShadow=!0)}),Fe.add(Z),me.add(Fe),Ve()}function Ve(){if(Fe){const Z=E.scale/100;Fe.scale.setScalar(Z),Fe.rotation.y=E.rotate*Math.PI/180,Fe.position.y=E.offset/60}je&&(je.repeat.set(E.repeatX,E.repeatY),je.offset.set(E.textureOffsetX/100,E.textureOffsetY/100),je.needsUpdate=!0)}function Se(Z){var H,Ie;y.value&&(L.active=!0,L.x=Z.clientX,L.y=Z.clientY,(Ie=(H=Z.currentTarget).setPointerCapture)==null||Ie.call(H,Z.pointerId))}function qe(Z){L.active&&(E.textureOffsetX-=(Z.clientX-L.x)*.35,E.textureOffsetY+=(Z.clientY-L.y)*.35,E.textureOffsetX=Math.max(-100,Math.min(100,E.textureOffsetX)),E.textureOffsetY=Math.max(-100,Math.min(100,E.textureOffsetY)),L.x=Z.clientX,L.y=Z.clientY)}function We(){L.active=!1}function lt(){var H;if(!((H=U.value)!=null&&H.image)||!me)return;new Fx().load(U.value.image,Ie=>{Ie.wrapS=kr,Ie.wrapT=kr,Ie.colorSpace=cn,je==null||je.dispose(),je=Ie,Oe()},void 0,()=>{je==null||je.dispose(),je=null,Oe()})}function B(){if(z||!C.value)return;const Z=C.value.clientWidth||640,H=C.value.clientHeight||520;me=new wx,me.background=new rt(a.value==="home"?1059917:15788252),Me=new Tn(35,Z/H,.1,100),Me.position.set(0,.35,4.8),z=new T1({antialias:!0,preserveDrawingBuffer:!0}),z.setPixelRatio(Math.min(window.devicePixelRatio,2)),z.setSize(Z,H),z.shadowMap.enabled=!0,z.shadowMap.type=jf,z.outputColorSpace=cn,C.value.appendChild(z.domElement),me.add(new Ox(a.value==="home"?16249576:16774632,a.value==="home"?1522532:9073501,1.35));const Ie=new zx(16773336,a.value==="home"?2.8:2.2);Ie.position.set(3,5,4),Ie.castShadow=!0,me.add(Ie);const ae=new Nt(new Ec(3,64),new Px({opacity:a.value==="home"?.38:.22}));ae.rotation.x=-Math.PI/2,ae.position.y=-1.3,ae.receiveShadow=!0,me.add(ae),be=new w1(Me,z.domElement),be.enableDamping=!0,be.dampingFactor=.08,be.minDistance=2.5,be.maxDistance=8,be.target.set(0,0,0),be.addEventListener("start",()=>{y.value=!1}),ve=new ResizeObserver(()=>{if(!z||!C.value)return;const ft=C.value.clientWidth,Vt=C.value.clientHeight;Me.aspect=ft/Vt,Me.updateProjectionMatrix(),z.setSize(ft,Vt)}),ve.observe(C.value),R.value=!0,Oe(),lt(),Ae()}function Ae(){re=window.requestAnimationFrame(Ae),!y.value&&Fe&&(Fe.rotation.y+=.003),be==null||be.update(),z==null||z.render(me,Me)}function ie(){if(!z)return;z.render(me,Me);const Z=document.createElement("a");Z.download=`patternx-${U.value.name}-${l.value}.png`,Z.href=z.domElement.toDataURL("image/png"),Z.click(),Le("渲染图已导出")}function ce(){window.cancelAnimationFrame(re),ve==null||ve.disconnect(),be==null||be.dispose(),je==null||je.dispose(),z==null||z.dispose(),z==null||z.domElement.remove(),z=null,me=null,Me=null,be=null,Fe=null,je=null}return $n(o,()=>{(a.value==="home"||a.value==="studio")&&lt()}),$n(l,()=>Oe()),$n(E,Ve,{deep:!0}),$n(y,Z=>{be&&(be.enabled=!Z)}),$n(a,Z=>{ce(),R.value=!1,(Z==="home"||Z==="studio")&&sl(B)}),sr(()=>{(a.value==="home"||a.value==="studio")&&sl(B)}),gs(()=>{window.clearTimeout(ne),window.clearTimeout(Y),window.clearTimeout(se),ce()}),(Z,H)=>{var Ie;return le(),ye("section",z1,[m("div",H1,[m("header",V1,[m("button",{class:"patternx-brand",type:"button",onClick:H[0]||(H[0]=ae=>Ye("/"))},[...H[8]||(H[8]=[m("img",{class:"patternx-brand-logo",src:Bf,alt:"大临蓝印"},null,-1),m("span",null,[m("strong",null,"大临蓝印"),m("small",null,"非遗纹样数字化平台")],-1)])]),m("nav",G1,[m("button",{type:"button",onClick:H[1]||(H[1]=ae=>Ye("/"))},"主站首页"),m("button",{type:"button",onClick:dt},"蓝印纹库"),(le(),ye(it,null,vt([{key:"home",label:"工坊首页"},{key:"studio",label:"3D 创作"},{key:"upload",label:"智能采集"}],ae=>m("button",{key:ae.key,type:"button",class:Tt({active:a.value===ae.key}),onClick:ft=>ke(ae.key)},he(ae.label),11,W1)),64))]),m("button",{class:"patternx-nav-search",type:"button","aria-label":"返回蓝印纹库",title:"返回蓝印纹库",onClick:dt},[Ce(pe(ds),{size:20})])]),m("main",X1,[a.value==="home"?(le(),ye("section",$1,[m("section",j1,[m("div",q1,[H[11]||(H[11]=m("p",{class:"patternx-kicker"},"HERITAGE · PATTERN · FUTURE",-1)),H[12]||(H[12]=m("h1",null,[Qe("让千年纹样"),m("br"),Qe("重新流动"),m("span",{class:"patternx-seal"},[Qe("非"),m("br"),Qe("遗")])],-1)),H[13]||(H[13]=m("div",{class:"patternx-landing-subtitle"},[m("i"),m("strong",null,"非遗纹样数字资产平台"),m("i")],-1)),H[14]||(H[14]=m("p",{class:"patternx-landing-description"},[Qe("采集、溯源、再设计，让传统纹样进入现代创作。"),m("br"),Qe("以数字之名，传承东方美学，赋能当代设计。")],-1)),m("div",Y1,[m("button",{class:"patternx-button primary",type:"button",onClick:dt},[H[9]||(H[9]=Qe("从蓝印纹库选纹 ",-1)),Ce(pe(qn),{size:17})]),m("button",{class:"patternx-button secondary",type:"button",onClick:H[2]||(H[2]=ae=>ke("studio"))},[H[10]||(H[10]=Qe("进入 3D 工坊 ",-1)),Ce(pe(Mr),{size:17})])])]),m("div",K1,[m("div",Z1,[Ce(pe(Mr),{size:16}),H[15]||(H[15]=Qe(" 3D 实时预览",-1))]),H[26]||(H[26]=m("div",{class:"patternx-preview-rings","aria-hidden":"true"},[m("i"),m("i")],-1)),m("div",{ref_key:"canvasHost",ref:C,class:"patternx-landing-canvas patternx-canvas",onPointerdown:Se,onPointermove:qe,onPointerup:We,onPointercancel:We,onPointerleave:We},[R.value?Et("",!0):(le(),ye("div",J1,[...H[16]||(H[16]=[m("span",{class:"patternx-spinner"},null,-1),m("p",null,"正在准备 3D 预览...",-1)])]))],544),m("aside",Q1,[m("div",null,[m("h2",null,he(U.value.name),1),m("button",{type:"button","aria-label":"收藏纹样",onClick:H[3]||(H[3]=ae=>te(U.value))},[Ce(pe(gu),{size:18,fill:w.value.has(U.value.id)?"currentColor":"none"},null,8,["fill"])])]),m("p",null,[H[17]||(H[17]=m("span",null,"年代",-1)),Qe(he(U.value.era),1)]),m("p",null,[H[18]||(H[18]=m("span",null,"分类",-1)),Qe(he(U.value.categoryName),1)]),m("p",null,[H[19]||(H[19]=m("span",null,"寓意",-1)),Qe(he(U.value.meaning),1)]),m("p",null,[H[20]||(H[20]=m("span",null,"应用",-1)),Qe(he(U.value.modernUse.slice(0,2).join(" / ")),1)])]),m("button",{class:"patternx-pattern-switch",type:"button",onClick:T},[m("img",{src:U.value.image,alt:U.value.name},null,8,eE),H[21]||(H[21]=m("span",null,"更换纹样",-1))]),m("div",tE,[m("button",{type:"button",title:"旋转模型",onClick:H[4]||(H[4]=ae=>E.rotate=(E.rotate+45)%360)},[Ce(pe(Eg),{size:18}),H[22]||(H[22]=m("span",null,"旋转",-1))]),m("button",{type:"button",title:"重置视角",onClick:oe},[Ce(pe(vu),{size:18}),H[23]||(H[23]=m("span",null,"重置",-1))]),m("button",{type:"button",title:"全屏预览",onClick:ee},[Ce(pe(Mg),{size:18}),H[24]||(H[24]=m("span",null,"全屏",-1))])]),m("p",nE,[Ce(pe(vu),{size:14}),H[25]||(H[25]=Qe(" 拖拽旋转 · 滚轮缩放 · 点击更换纹样",-1))])])]),m("section",iE,[(le(),ye(it,null,vt(W,ae=>m("button",{key:ae.title,type:"button",onClick:ft=>O(ae)},[m("span",rE,[(le(),Ct(Nr(ae.icon),{size:28}))]),m("span",null,[m("strong",null,he(ae.title),1),m("small",null,he(ae.description),1),m("em",null,[Qe(he(ae.action)+" ",1),Ce(pe(qn),{size:14})])])],8,sE)),64))]),m("section",aE,[m("div",oE,[H[28]||(H[28]=m("div",null,[m("h2",null,"动物纹创作精选"),m("p",null,"图片与蓝印纹库保持一致")],-1)),m("button",{type:"button",class:"patternx-text-button",onClick:dt},[H[27]||(H[27]=Qe("查看动物纹 ",-1)),Ce(pe(qn),{size:15})])]),m("div",lE,[(le(!0),ye(it,null,vt(N.value,ae=>(le(),ye("article",{key:ae.id,class:"patternx-popular-card",onClick:ft=>P(ae)},[m("button",{type:"button",class:"patternx-popular-image",onClick:hi(ft=>P(ae),["stop"])},[m("img",{src:ae.image,alt:ae.name},null,8,dE)],8,uE),m("div",null,[m("h3",null,he(ae.name),1),m("small",null,he(ae.era)+" · "+he(ae.categoryName),1),m("p",null,he(ae.meaning),1),m("footer",null,[m("span",null,[Ce(pe(gu),{size:14}),Qe(" "+he(ae.likes),1)]),m("button",{type:"button","aria-label":"查看纹样详情",onClick:hi(ft=>P(ae),["stop"])},[Ce(pe(qn),{size:15})],8,fE)])])],8,cE))),128))])])])):a.value==="upload"?(le(),ye("section",hE,[H[36]||(H[36]=m("header",{class:"patternx-page-header compact-header"},[m("p",{class:"patternx-kicker"},"COLLECT / EXTRACT / PRESERVE"),m("h1",null,"上传纹样"),m("p",null,"拍摄或上传一张带有传统纹样的图片，开始你的数字采集。")],-1)),h.value?Et("",!0):(le(),ye("div",{key:0,class:"patternx-upload-zone",role:"button",tabindex:"0",onClick:ue,onKeydown:Of(ue,["enter"]),onDragover:H[5]||(H[5]=hi(()=>{},["prevent"])),onDrop:hi(Q,["prevent"])},[Ce(pe(_g),{size:42}),H[29]||(H[29]=m("h2",null,"拖拽图片到这里，或点击上传",-1)),H[30]||(H[30]=m("p",null,"支持 JPG、PNG 等常见图片格式，建议纹样清晰、主体完整",-1)),H[31]||(H[31]=m("span",null,"选择本地文件",-1))],32)),m("input",{ref_key:"fileInput",ref:d,class:"patternx-hidden-input",type:"file",accept:".jpg,.jpeg,.png,.html,.txt,.md,image/jpeg,image/png,text/html,text/plain,text/markdown",onChange:x},null,544),h.value?(le(),ye("div",pE,[m("div",mE,[m("div",gE,[Ce(pe(_u),{size:18}),H[32]||(H[32]=Qe(" 原图",-1))]),m("div",_E,[m("img",{src:h.value,alt:M.value},null,8,vE)])]),m("div",xE,[m("div",yE,[Ce(pe(fs),{size:18}),H[33]||(H[33]=Qe(" 纹样提取结果",-1))]),m("div",bE,[p.value?(le(),ye("img",{key:0,src:p.value,alt:"纹样提取结果"},null,8,ME)):(le(),ye("span",SE))]),m("p",{class:Tt(["patternx-status",{complete:!f.value}])},he(g.value),3)])])):Et("",!0),h.value?(le(),ye("div",EE,[m("button",{class:"patternx-button primary",type:"button",disabled:f.value,onClick:j},[H[34]||(H[34]=Qe("用于 3D 创作 ",-1)),Ce(pe(mu),{size:17})],8,TE),m("button",{class:"patternx-button secondary",type:"button",onClick:G},[H[35]||(H[35]=Qe("重新上传 ",-1)),Ce(pe(Ys),{size:17})])])):Et("",!0)])):(le(),ye("section",AE,[H[43]||(H[43]=m("header",{class:"patternx-page-header compact-header"},[m("p",{class:"patternx-kicker"},"TEXTURE / FORM / MOTION"),m("h1",null,"3D 工坊"),m("p",null,"选择纹样和载体，实时预览二创效果。拖拽画布旋转载体，滚轮调整观看距离。")],-1)),m("div",wE,[m("aside",CE,[m("section",RE,[m("div",PE,[Ce(pe(fs),{size:18}),H[37]||(H[37]=Qe(" 动物纹素材",-1))]),m("div",DE,[(le(!0),ye(it,null,vt(I.value,ae=>(le(),ye("button",{key:ae.id,type:"button",class:Tt({selected:o.value===ae.id}),onClick:ft=>J(ae)},[m("span",IE,[ae.image?(le(),ye("img",{key:0,src:ae.image,alt:ae.name},null,8,UE)):Et("",!0)]),m("span",null,he(ae.name),1),o.value===ae.id?(le(),Ct(pe(mu),{key:0,size:15})):Et("",!0)],10,LE))),128))]),m("button",{class:"patternx-library-return",type:"button",onClick:dt},[Ce(pe(ds),{size:14}),H[38]||(H[38]=Qe(" 返回蓝印纹库选纹",-1))])]),m("section",NE,[m("div",FE,[Ce(pe(xu),{size:18}),H[39]||(H[39]=Qe(" 选择载体",-1))]),m("div",OE,[(le(),ye(it,null,vt(D,ae=>m("button",{key:ae.key,type:"button",class:Tt({selected:l.value===ae.key}),onClick:ft=>l.value=ae.key},[(le(),Ct(Nr(ae.icon),{size:22})),m("span",null,he(ae.label),1)],10,BE)),64))])]),m("section",kE,[m("div",zE,[Ce(pe(fs),{size:18}),H[40]||(H[40]=Qe(" 调整参数",-1))]),(le(),ye(it,null,vt([{key:"scale",label:"缩放",min:50,max:150,step:1},{key:"rotate",label:"旋转",min:0,max:360,step:1},{key:"offset",label:"位置",min:-50,max:50,step:1},{key:"repeatX",label:"横向重复",min:1,max:8,step:1},{key:"repeatY",label:"纵向重复",min:1,max:8,step:1},{key:"textureOffsetX",label:"横向偏移",min:-100,max:100,step:1},{key:"textureOffsetY",label:"纵向偏移",min:-100,max:100,step:1}],ae=>m("label",{key:ae.key,class:"patternx-slider"},[m("span",null,he(ae.label),1),Zd(m("input",{"onUpdate:modelValue":ft=>E[ae.key]=ft,type:"range",min:ae.min,max:ae.max,step:ae.step},null,8,HE),[[Ff,E[ae.key],void 0,{number:!0}]]),m("output",null,he($(ae.key)),1)])),64))])]),m("div",VE,[m("div",{ref_key:"canvasHost",ref:C,class:Tt(["patternx-canvas",`model-${l.value}`]),onPointerdown:Se,onPointermove:qe,onPointerup:We,onPointercancel:We,onPointerleave:We},[R.value?Et("",!0):(le(),ye("div",GE,[...H[41]||(H[41]=[m("span",{class:"patternx-spinner"},null,-1),m("p",null,"正在准备 3D 工坊...",-1)])])),m("div",WE,[m("span",null,he(U.value.name),1),m("small",null,he((Ie=D.find(ae=>ae.key===l.value))==null?void 0:Ie.label)+" · 实时预览",1)]),m("button",{class:Tt(["patternx-drag-toggle",{active:y.value}]),type:"button",onPointerdown:H[6]||(H[6]=hi(()=>{},["stop"])),onClick:H[7]||(H[7]=ae=>y.value=!y.value)},he(y.value?"纹样拖拽：开":"纹样拖拽：关"),35)],34),m("div",XE,[m("div",null,[m("strong",null,he(U.value.name),1),m("span",null,he(U.value.meaning),1)]),m("button",{class:"patternx-button primary",type:"button",onClick:ie},[Ce(pe(zf),{size:17}),H[42]||(H[42]=Qe(" 导出渲染图",-1))])])])])]))])]),Ce(hc,{name:"file-alert"},{default:Ja(()=>[u.value?(le(),ye("div",$E,[m("span",jE,[Ce(pe(mg),{size:18})]),m("span",qE,he(u.value),1),m("button",{type:"button","aria-label":"关闭文件格式提示",onClick:Be},[Ce(pe(Ys),{size:20})])])):Et("",!0)]),_:1}),c.value?(le(),ye("div",YE,he(c.value),1)):Et("",!0)])}}},ZE=Xr(KE,[["__scopeId","data-v-af3a0d37"]]),JE={class:"app-shell"},QE={__name:"App",setup(n){const{routeName:e,routePath:t,navigate:i}=Og(),s=et("all"),r=yt(()=>decodeURIComponent(t.value.replace("/pattern/",""))),a=yt(()=>un.some(u=>u.id===r.value));function o(u){i(`/pattern/${u.id}`)}function l(u){s.value=u}function c(u){i(`/patternx?pattern=${encodeURIComponent(u.id)}&view=studio`)}return(u,d)=>(le(),ye("div",JE,[pe(e)!=="find-game"&&pe(e)!=="find-card"&&pe(e)!=="patternx"?(le(),Ct(Fg,{key:0,"route-name":pe(e),"route-path":pe(t),onNavigate:pe(i)},null,8,["route-name","route-path","onNavigate"])):Et("",!0),Ce(hc,{name:"page",mode:"out-in"},{default:Ja(()=>[(le(),ye("main",{key:pe(e)+pe(t),class:Tt(["page",{"page-find-menu":pe(e)==="find-menu"}])},[pe(e)==="home"?(le(),Ct(yu,{key:0,onNavigate:pe(i),onOpenPattern:o,onSelectCategory:l,onCreatePattern:c},null,8,["onNavigate"])):pe(e)==="library"?(le(),Ct(ev,{key:1,"initial-category":s.value,onOpenPattern:o,onCreatePattern:c},null,8,["initial-category"])):pe(e)==="pattern"&&a.value?(le(),Ct(fv,{key:2,"pattern-id":r.value,onNavigate:pe(i),onOpenPattern:o,onCreatePattern:c},null,8,["pattern-id","onNavigate"])):pe(e)==="heritage"?(le(),Ct(q_,{key:3})):pe(e)==="find-menu"?(le(),Ct(L_,{key:4,onNavigate:pe(i)},null,8,["onNavigate"])):pe(e)==="find-card"?(le(),Ct(Jg,{key:5,onNavigate:pe(i)},null,8,["onNavigate"])):pe(e)==="find-game"?(le(),Ct(v_,{key:6,onNavigate:pe(i)},null,8,["onNavigate"])):pe(e)==="patternx"?(le(),Ct(ZE,{key:7,onNavigate:pe(i),onSelectCategory:l},null,8,["onNavigate"])):(le(),Ct(yu,{key:8,onNavigate:pe(i),onOpenPattern:o,onSelectCategory:l,onCreatePattern:c},null,8,["onNavigate"]))],2))]),_:1}),pe(e)!=="home"&&pe(e)!=="find-menu"&&pe(e)!=="find-card"&&pe(e)!=="patternx"?(le(),Ct(dg,{key:1,onNavigate:pe(i)},null,8,["onNavigate"])):Et("",!0)]))}};og(QE).mount("#app");
