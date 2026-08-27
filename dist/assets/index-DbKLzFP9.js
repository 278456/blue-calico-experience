(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function bc(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const wt={},js=[],oi=()=>{},ed=()=>!1,co=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),uo=n=>n.startsWith("onUpdate:"),qt=Object.assign,Mc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},cp=Object.prototype.hasOwnProperty,vt=(n,e)=>cp.call(n,e),qe=Array.isArray,Ks=n=>oa(n)==="[object Map]",td=n=>oa(n)==="[object Set]",tu=n=>oa(n)==="[object Date]",tt=n=>typeof n=="function",Ut=n=>typeof n=="string",ci=n=>typeof n=="symbol",yt=n=>n!==null&&typeof n=="object",nd=n=>(yt(n)||tt(n))&&tt(n.then)&&tt(n.catch),id=Object.prototype.toString,oa=n=>id.call(n),up=n=>oa(n).slice(8,-1),sd=n=>oa(n)==="[object Object]",Sc=n=>Ut(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,kr=bc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ho=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},hp=/-\w/g,hn=ho(n=>n.replace(hp,e=>e.slice(1).toUpperCase())),dp=/\B([A-Z])/g,ji=ho(n=>n.replace(dp,"-$1").toLowerCase()),fo=ho(n=>n.charAt(0).toUpperCase()+n.slice(1)),wo=ho(n=>n?`on${fo(n)}`:""),ii=(n,e)=>!Object.is(n,e),Ha=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},rd=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Ec=n=>{const e=parseFloat(n);return isNaN(e)?n:e},fp=n=>{const e=Ut(n)?Number(n):NaN;return isNaN(e)?n:e};let nu;const po=()=>nu||(nu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Un(n){if(qe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Ut(i)?_p(i):Un(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Ut(n)||yt(n))return n}const pp=/;(?![^(]*\))/g,mp=/:([^]+)/,gp=/\/\*[^]*?\*\//g;function _p(n){const e={};return n.replace(gp,"").split(pp).forEach(t=>{if(t){const i=t.split(mp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Et(n){let e="";if(Ut(n))e=n;else if(qe(n))for(let t=0;t<n.length;t++){const i=Et(n[t]);i&&(e+=i+" ")}else if(yt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const vp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",xp=bc(vp);function ad(n){return!!n||n===""}function yp(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=Tc(n[i],e[i]);return t}function Tc(n,e){if(n===e)return!0;let t=tu(n),i=tu(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=ci(n),i=ci(e),t||i)return n===e;if(t=qe(n),i=qe(e),t||i)return t&&i?yp(n,e):!1;if(t=yt(n),i=yt(e),t||i){if(!t||!i)return!1;const s=Object.keys(n).length,r=Object.keys(e).length;if(s!==r)return!1;for(const a in n){const o=n.hasOwnProperty(a),l=e.hasOwnProperty(a);if(o&&!l||!o&&l||!Tc(n[a],e[a]))return!1}}return String(n)===String(e)}const od=n=>!!(n&&n.__v_isRef===!0),me=n=>Ut(n)?n:n==null?"":qe(n)||yt(n)&&(n.toString===id||!tt(n.toString))?od(n)?me(n.value):JSON.stringify(n,ld,2):String(n),ld=(n,e)=>od(e)?ld(n,e.value):Ks(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[Ao(i,r)+" =>"]=s,t),{})}:td(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Ao(t))}:ci(e)?Ao(e):yt(e)&&!qe(e)&&!sd(e)?String(e):e,Ao=(n,e="")=>{var t;return ci(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let jt;class bp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&jt&&(jt.active?(this.parent=jt,this.index=(jt.scopes||(jt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){const i=this.scopes.slice();for(e=0,t=i.length;e<t;e++)i[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){const s=this.scopes.slice();for(e=0,t=s.length;e<t;e++)s[e].resume()}const i=this.effects.slice();for(e=0,t=i.length;e<t;e++)i[e].resume()}}run(e){if(this._active){const t=jt;try{return jt=this,e()}finally{jt=t}}}on(){++this._on===1&&(this.prevScope=jt,jt=this)}off(){if(this._on>0&&--this._on===0){if(jt===this)jt=this.prevScope;else{let e=jt;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(t=0,i=s.length;t<i;t++)s[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Mp(){return jt}let Ct;const Co=new WeakSet;class cd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,jt&&(jt.active?jt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Co.has(this)&&(Co.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||hd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,iu(this),dd(this);const e=Ct,t=qn;Ct=this,qn=!0;try{return this.fn()}finally{fd(this),Ct=e,qn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Cc(e);this.deps=this.depsTail=void 0,iu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Co.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){bl(this)&&this.run()}get dirty(){return bl(this)}}let ud=0,Br,zr;function hd(n,e=!1){if(n.flags|=8,e){n.next=zr,zr=n;return}n.next=Br,Br=n}function wc(){ud++}function Ac(){if(--ud>0)return;if(zr){let e=zr;for(zr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Br;){let e=Br;for(Br=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function dd(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function fd(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),Cc(i),Sp(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function bl(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(pd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function pd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===jr)||(n.globalVersion=jr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!bl(n))))return;n.flags|=2;const e=n.dep,t=Ct,i=qn;Ct=n,qn=!0;try{dd(n);const s=n.fn(n._value);(e.version===0||ii(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ct=t,qn=i,fd(n),n.flags&=-3}}function Cc(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)Cc(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Sp(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let qn=!0;const md=[];function wi(){md.push(qn),qn=!1}function Ai(){const n=md.pop();qn=n===void 0?!0:n}function iu(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Ct;Ct=void 0;try{e()}finally{Ct=t}}}let jr=0;class Ep{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Rc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ct||!qn||Ct===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Ct)t=this.activeLink=new Ep(Ct,this),Ct.deps?(t.prevDep=Ct.depsTail,Ct.depsTail.nextDep=t,Ct.depsTail=t):Ct.deps=Ct.depsTail=t,gd(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Ct.depsTail,t.nextDep=void 0,Ct.depsTail.nextDep=t,Ct.depsTail=t,Ct.deps===t&&(Ct.deps=i)}return t}trigger(e){this.version++,jr++,this.notify(e)}notify(e){wc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Ac()}}}function gd(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)gd(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Ml=new WeakMap,gs=Symbol(""),Sl=Symbol(""),Kr=Symbol("");function en(n,e,t){if(qn&&Ct){let i=Ml.get(n);i||Ml.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new Rc),s.map=i,s.key=t),s.track()}}function yi(n,e,t,i,s,r){const a=Ml.get(n);if(!a){jr++;return}const o=l=>{l&&l.trigger()};if(wc(),e==="clear")a.forEach(o);else{const l=qe(n),c=l&&Sc(t);if(l&&t==="length"){const u=Number(i);a.forEach((h,d)=>{(d==="length"||d===Kr||!ci(d)&&d>=u)&&o(h)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),c&&o(a.get(Kr)),e){case"add":l?c&&o(a.get("length")):(o(a.get(gs)),Ks(n)&&o(a.get(Sl)));break;case"delete":l||(o(a.get(gs)),Ks(n)&&o(a.get(Sl)));break;case"set":Ks(n)&&o(a.get(gs));break}}Ac()}function ws(n){const e=mt(n);return e===n?e:(en(e,"iterate",Kr),Nn(n)?e:e.map(jn))}function mo(n){return en(n=mt(n),"iterate",Kr),n}function ei(n,e){return Ci(n)?sr(_s(n)?jn(e):e):jn(e)}const Tp={__proto__:null,[Symbol.iterator](){return Ro(this,Symbol.iterator,n=>ei(this,n))},concat(...n){return ws(this).concat(...n.map(e=>qe(e)?ws(e):e))},entries(){return Ro(this,"entries",n=>(n[1]=ei(this,n[1]),n))},every(n,e){return hi(this,"every",n,e,void 0,arguments)},filter(n,e){return hi(this,"filter",n,e,t=>t.map(i=>ei(this,i)),arguments)},find(n,e){return hi(this,"find",n,e,t=>ei(this,t),arguments)},findIndex(n,e){return hi(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return hi(this,"findLast",n,e,t=>ei(this,t),arguments)},findLastIndex(n,e){return hi(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return hi(this,"forEach",n,e,void 0,arguments)},includes(...n){return Po(this,"includes",n)},indexOf(...n){return Po(this,"indexOf",n)},join(n){return ws(this).join(n)},lastIndexOf(...n){return Po(this,"lastIndexOf",n)},map(n,e){return hi(this,"map",n,e,void 0,arguments)},pop(){return wr(this,"pop")},push(...n){return wr(this,"push",n)},reduce(n,...e){return su(this,"reduce",n,e)},reduceRight(n,...e){return su(this,"reduceRight",n,e)},shift(){return wr(this,"shift")},some(n,e){return hi(this,"some",n,e,void 0,arguments)},splice(...n){return wr(this,"splice",n)},toReversed(){return ws(this).toReversed()},toSorted(n){return ws(this).toSorted(n)},toSpliced(...n){return ws(this).toSpliced(...n)},unshift(...n){return wr(this,"unshift",n)},values(){return Ro(this,"values",n=>ei(this,n))}};function Ro(n,e,t){const i=mo(n),s=i[e]();return i!==n&&!Nn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const wp=Array.prototype;function hi(n,e,t,i,s,r){const a=mo(n),o=a!==n&&!Nn(n),l=a[e];if(l!==wp[e]){const h=l.apply(n,r);return o?jn(h):h}let c=t;a!==n&&(o?c=function(h,d){return t.call(this,ei(n,h),d,n)}:t.length>2&&(c=function(h,d){return t.call(this,h,d,n)}));const u=l.call(a,c,i);return o&&s?s(u):u}function su(n,e,t,i){const s=mo(n),r=s!==n&&!Nn(n);let a=t,o=!1;s!==n&&(r?(o=i.length===0,a=function(c,u,h){return o&&(o=!1,c=ei(n,c)),t.call(this,c,ei(n,u),h,n)}):t.length>3&&(a=function(c,u,h){return t.call(this,c,u,h,n)}));const l=s[e](a,...i);return o?ei(n,l):l}function Po(n,e,t){const i=mt(n);en(i,"iterate",Kr);const s=i[e](...t);return(s===-1||s===!1)&&Lc(t[0])?(t[0]=mt(t[0]),i[e](...t)):s}function wr(n,e,t=[]){wi(),wc();const i=mt(n)[e].apply(n,t);return Ac(),Ai(),i}const Ap=bc("__proto__,__v_isRef,__isVue"),_d=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(ci));function Cp(n){ci(n)||(n=String(n));const e=mt(this);return en(e,"has",n),e.hasOwnProperty(n)}class vd{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?kp:Md:r?bd:yd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=qe(e);if(!s){let l;if(a&&(l=Tp[t]))return l;if(t==="hasOwnProperty")return Cp}const o=Reflect.get(e,t,nn(e)?e:i);if((ci(t)?_d.has(t):Ap(t))||(s||en(e,"get",t),r))return o;if(nn(o)){const l=a&&Sc(t)?o:o.value;return s&&yt(l)?Tl(l):l}return yt(o)?s?Tl(o):Zr(o):o}}class xd extends vd{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const a=qe(e)&&Sc(t);if(!this._isShallow){const c=Ci(r);if(!Nn(i)&&!Ci(i)&&(r=mt(r),i=mt(i)),!a&&nn(r)&&!nn(i))return c||(r.value=i),!0}const o=a?Number(t)<e.length:vt(e,t),l=Reflect.set(e,t,i,nn(e)?e:s);return e===mt(s)&&l&&(o?ii(i,r)&&yi(e,"set",t,i):yi(e,"add",t,i)),l}deleteProperty(e,t){const i=vt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&yi(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!ci(t)||!_d.has(t))&&en(e,"has",t),i}ownKeys(e){return en(e,"iterate",qe(e)?"length":gs),Reflect.ownKeys(e)}}class Rp extends vd{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Pp=new xd,Dp=new Rp,Lp=new xd(!0);const El=n=>n,da=n=>Reflect.getPrototypeOf(n);function Ip(n,e,t){return function(...i){const s=this.__v_raw,r=mt(s),a=Ks(r),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=s[n](...i),u=t?El:e?sr:jn;return!e&&en(r,"iterate",l?Sl:gs),qt(Object.create(c),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:o?[u(h[0]),u(h[1])]:u(h),done:d}}})}}function fa(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Up(n,e){const t={get(s){const r=this.__v_raw,a=mt(r),o=mt(s);n||(ii(s,o)&&en(a,"get",s),en(a,"get",o));const{has:l}=da(a),c=e?El:n?sr:jn;if(l.call(a,s))return c(r.get(s));if(l.call(a,o))return c(r.get(o));r!==a&&r.get(s)},get size(){const s=this.__v_raw;return!n&&en(mt(s),"iterate",gs),s.size},has(s){const r=this.__v_raw,a=mt(r),o=mt(s);return n||(ii(s,o)&&en(a,"has",s),en(a,"has",o)),s===o?r.has(s):r.has(s)||r.has(o)},forEach(s,r){const a=this,o=a.__v_raw,l=mt(o),c=e?El:n?sr:jn;return!n&&en(l,"iterate",gs),o.forEach((u,h)=>s.call(r,c(u),c(h),a))}};return qt(t,n?{add:fa("add"),set:fa("set"),delete:fa("delete"),clear:fa("clear")}:{add(s){const r=mt(this),a=da(r),o=mt(s),l=!e&&!Nn(s)&&!Ci(s)?o:s;return a.has.call(r,l)||ii(s,l)&&a.has.call(r,s)||ii(o,l)&&a.has.call(r,o)||(r.add(l),yi(r,"add",l,l)),this},set(s,r){!e&&!Nn(r)&&!Ci(r)&&(r=mt(r));const a=mt(this),{has:o,get:l}=da(a);let c=o.call(a,s);c||(s=mt(s),c=o.call(a,s));const u=l.call(a,s);return a.set(s,r),c?ii(r,u)&&yi(a,"set",s,r):yi(a,"add",s,r),this},delete(s){const r=mt(this),{has:a,get:o}=da(r);let l=a.call(r,s);l||(s=mt(s),l=a.call(r,s)),o&&o.call(r,s);const c=r.delete(s);return l&&yi(r,"delete",s,void 0),c},clear(){const s=mt(this),r=s.size!==0,a=s.clear();return r&&yi(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Ip(s,n,e)}),t}function Pc(n,e){const t=Up(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(vt(t,s)&&s in i?t:i,s,r)}const Np={get:Pc(!1,!1)},Fp={get:Pc(!1,!0)},Op={get:Pc(!0,!1)};const yd=new WeakMap,bd=new WeakMap,Md=new WeakMap,kp=new WeakMap;function Bp(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Zr(n){return Ci(n)?n:Dc(n,!1,Pp,Np,yd)}function zp(n){return Dc(n,!1,Lp,Fp,bd)}function Tl(n){return Dc(n,!0,Dp,Op,Md)}function Dc(n,e,t,i,s){if(!yt(n)||n.__v_raw&&!(e&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const r=s.get(n);if(r)return r;const a=Bp(up(n));if(a===0)return n;const o=new Proxy(n,a===2?i:t);return s.set(n,o),o}function _s(n){return Ci(n)?_s(n.__v_raw):!!(n&&n.__v_isReactive)}function Ci(n){return!!(n&&n.__v_isReadonly)}function Nn(n){return!!(n&&n.__v_isShallow)}function Lc(n){return n?!!n.__v_raw:!1}function mt(n){const e=n&&n.__v_raw;return e?mt(e):n}function Hp(n){return!vt(n,"__v_skip")&&Object.isExtensible(n)&&rd(n,"__v_skip",!0),n}const jn=n=>yt(n)?Zr(n):n,sr=n=>yt(n)?Tl(n):n;function nn(n){return n?n.__v_isRef===!0:!1}function et(n){return Vp(n,!1)}function Vp(n,e){return nn(n)?n:new Gp(n,e)}class Gp{constructor(e,t){this.dep=new Rc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:mt(e),this._value=t?e:jn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Nn(e)||Ci(e);e=i?e:mt(e),ii(e,t)&&(this._rawValue=e,this._value=i?e:jn(e),this.dep.trigger())}}function de(n){return nn(n)?n.value:n}const Wp={get:(n,e,t)=>e==="__v_raw"?n:de(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return nn(s)&&!nn(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function Sd(n){return _s(n)?n:new Proxy(n,Wp)}class Xp{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Rc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=jr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Ct!==this)return hd(this,!0),!0}get value(){const e=this.dep.track();return pd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function $p(n,e,t=!1){let i,s;return tt(n)?i=n:(i=n.get,s=n.set),new Xp(i,s,t)}const pa={},Ka=new WeakMap;let ls;function qp(n,e=!1,t=ls){if(t){let i=Ka.get(t);i||Ka.set(t,i=[]),i.push(n)}}function Yp(n,e,t=wt){const{immediate:i,deep:s,once:r,scheduler:a,augmentJob:o,call:l}=t,c=y=>s?y:Nn(y)||s===!1||s===0?bi(y,1):bi(y);let u,h,d,f,_=!1,x=!1;if(nn(n)?(h=()=>n.value,_=Nn(n)):_s(n)?(h=()=>c(n),_=!0):qe(n)?(x=!0,_=n.some(y=>_s(y)||Nn(y)),h=()=>n.map(y=>{if(nn(y))return y.value;if(_s(y))return c(y);if(tt(y))return l?l(y,2):y()})):tt(n)?e?h=l?()=>l(n,2):n:h=()=>{if(d){wi();try{d()}finally{Ai()}}const y=ls;ls=u;try{return l?l(n,3,[f]):n(f)}finally{ls=y}}:h=oi,e&&s){const y=h,I=s===!0?1/0:s;h=()=>bi(y(),I)}const g=Mp(),p=()=>{u.stop(),g&&g.active&&Mc(g.effects,u)};if(r&&e){const y=e;e=(...I)=>{const C=y(...I);return p(),C}}let R=x?new Array(n.length).fill(pa):pa;const A=y=>{if(!(!(u.flags&1)||!u.dirty&&!y))if(e){const I=u.run();if(y||s||_||(x?I.some((C,M)=>ii(C,R[M])):ii(I,R))){d&&d();const C=ls;ls=u;try{const M=[I,R===pa?void 0:x&&R[0]===pa?[]:R,f];R=I,l?l(e,3,M):e(...M)}finally{ls=C}}}else u.run()};return o&&o(A),u=new cd(h),u.scheduler=a?()=>a(A,!1):A,f=y=>qp(y,!1,u),d=u.onStop=()=>{const y=Ka.get(u);if(y){if(l)l(y,4);else for(const I of y)I();Ka.delete(u)}},e?i?A(!0):R=u.run():a?a(A.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function bi(n,e=1/0,t){if(e<=0||!yt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,nn(n))bi(n.value,e,t);else if(qe(n))for(let i=0;i<n.length;i++)bi(n[i],e,t);else if(td(n)||Ks(n))n.forEach(i=>{bi(i,e,t)});else if(sd(n)){for(const i in n)bi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&bi(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function la(n,e,t,i){try{return i?n(...i):n()}catch(s){go(s,e,t)}}function Fn(n,e,t,i){if(tt(n)){const s=la(n,e,t,i);return s&&nd(s)&&s.catch(r=>{go(r,e,t)}),s}if(qe(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Fn(n[r],e,t,i));return s}}function go(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||wt;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const u=o.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,l,c)===!1)return}o=o.parent}if(r){wi(),la(r,null,10,[n,l,c]),Ai();return}}jp(n,t,s,i,a)}function jp(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const cn=[];let Jn=-1;const Zs=[];let zi=null,Hs=0;const Ed=Promise.resolve();let Za=null;function wl(n){const e=Za||Ed;return n?e.then(this?n.bind(this):n):e}function Kp(n){let e=Jn+1,t=cn.length;for(;e<t;){const i=e+t>>>1,s=cn[i],r=Jr(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function Ic(n){if(!(n.flags&1)){const e=Jr(n),t=cn[cn.length-1];!t||!(n.flags&2)&&e>=Jr(t)?cn.push(n):cn.splice(Kp(e),0,n),n.flags|=1,Td()}}function Td(){Za||(Za=Ed.then(Ad))}function Zp(n){qe(n)?Zs.push(...n):zi&&n.id===-1?zi.splice(Hs+1,0,n):n.flags&1||(Zs.push(n),n.flags|=1),Td()}function ru(n,e,t=Jn+1){for(;t<cn.length;t++){const i=cn[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;cn.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function wd(n){if(Zs.length){const e=[...new Set(Zs)].sort((t,i)=>Jr(t)-Jr(i));if(Zs.length=0,zi){zi.push(...e);return}for(zi=e,Hs=0;Hs<zi.length;Hs++){const t=zi[Hs];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}zi=null,Hs=0}}const Jr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Ad(n){try{for(Jn=0;Jn<cn.length;Jn++){const e=cn[Jn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),la(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Jn<cn.length;Jn++){const e=cn[Jn];e&&(e.flags&=-2)}Jn=-1,cn.length=0,wd(),Za=null,(cn.length||Zs.length)&&Ad()}}let Sn=null,Cd=null;function Ja(n){const e=Sn;return Sn=n,Cd=n&&n.type.__scopeId||null,e}function _o(n,e=Sn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&to(-1);const r=Ja(e),a=vs.length;let o;try{o=n(...s)}finally{for(let l=vs.length;l>a;l--)af();Ja(r),i._d&&to(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Rd(n,e){if(Sn===null)return n;const t=Mo(Sn),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,a,o,l=wt]=e[s];r&&(tt(r)&&(r={mounted:r,updated:r}),r.deep&&bi(a),i.push({dir:r,instance:t,value:a,oldValue:void 0,arg:o,modifiers:l}))}return n}function Ji(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let a=0;a<s.length;a++){const o=s[a];r&&(o.oldValue=r[a].value);let l=o.dir[i];l&&(wi(),Fn(l,t,8,[n.el,o,n,e]),Ai())}}function Jp(n,e){if(tn){let t=tn.provides;const i=tn.parent&&tn.parent.provides;i===t&&(t=tn.provides=Object.create(i)),t[n]=e}}function Va(n,e,t=!1){const i=cf();if(i||Qs){let s=Qs?Qs._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&tt(e)?e.call(i&&i.proxy):e}}const Qp=Symbol.for("v-scx"),em=()=>Va(Qp);function si(n,e,t){return Pd(n,e,t)}function Pd(n,e,t=wt){const{immediate:i,deep:s,flush:r,once:a}=t,o=qt({},t),l=e&&i||!e&&r!=="post";let c;if(ta){if(r==="sync"){const f=em();c=f.__watcherHandles||(f.__watcherHandles=[])}else if(!l){const f=()=>{};return f.stop=oi,f.resume=oi,f.pause=oi,f}}const u=tn;o.call=(f,_,x)=>Fn(f,u,_,x);let h=!1;r==="post"?o.scheduler=f=>{pn(f,u&&u.suspense)}:r!=="sync"&&(h=!0,o.scheduler=(f,_)=>{_?f():Ic(f)}),o.augmentJob=f=>{e&&(f.flags|=4),h&&(f.flags|=2,u&&(f.id=u.uid,f.i=u))};const d=Yp(n,e,o);return ta&&(c?c.push(d):l&&d()),d}function tm(n,e,t){const i=this.proxy,s=Ut(n)?n.includes(".")?Dd(i,n):()=>i[n]:n.bind(i,i);let r;tt(e)?r=e:(r=e.handler,t=e);const a=ca(this),o=Pd(s,r.bind(i),t);return a(),o}function Dd(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const nm=Symbol("_vte"),Ld=n=>n.__isTeleport,Dn=Symbol("_leaveCb"),Ar=Symbol("_enterCb");function im(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return pr(()=>{n.isMounted=!0}),Ss(()=>{n.isUnmounting=!0}),n}const An=[Function,Array],Id={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:An,onEnter:An,onAfterEnter:An,onEnterCancelled:An,onBeforeLeave:An,onLeave:An,onAfterLeave:An,onLeaveCancelled:An,onBeforeAppear:An,onAppear:An,onAfterAppear:An,onAppearCancelled:An},Ud=n=>{const e=n.subTree;return e.component?Ud(e.component):e},sm={name:"BaseTransition",props:Id,setup(n,{slots:e}){const t=cf(),i=im();return()=>{const s=e.default&&Od(e.default(),!0),r=s&&s.length?Nd(s):t.subTree?Rt():void 0;if(!r)return;const a=mt(n),{mode:o}=a;if(i.isLeaving)return Do(r);const l=au(r);if(!l)return Do(r);let c=Al(l,a,i,t,h=>c=h);l.type!==un&&Qr(l,c);let u=t.subTree&&au(t.subTree);if(u&&u.type!==un&&!hs(u,l)&&Ud(t).type!==un){let h=Al(u,a,i,t);if(Qr(u,h),o==="out-in"&&l.type!==un)return i.isLeaving=!0,h.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete h.afterLeave,u=void 0},Do(r);o==="in-out"&&l.type!==un?h.delayLeave=(d,f,_)=>{const x=Fd(i,u);x[String(u.key)]=u,d[Dn]=()=>{f(),d[Dn]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{_(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function Nd(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==un){e=t;break}}return e}const rm=sm;function Fd(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function Al(n,e,t,i,s){const{appear:r,mode:a,persisted:o=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:d,onLeave:f,onAfterLeave:_,onLeaveCancelled:x,onBeforeAppear:g,onAppear:p,onAfterAppear:R,onAppearCancelled:A}=e,y=String(n.key),I=Fd(t,n),C=(E,S)=>{E&&Fn(E,i,9,S)},M=(E,S)=>{const L=S[1];C(E,S),qe(E)?E.every(O=>O.length<=1)&&L():E.length<=1&&L()},D={mode:a,persisted:o,beforeEnter(E){let S=l;if(!t.isMounted)if(r)S=g||l;else return;E[Dn]&&E[Dn](!0);const L=I[y];L&&hs(n,L)&&L.el[Dn]&&L.el[Dn](),C(S,[E])},enter(E){if(I[y]===n)return;let S=c,L=u,O=h;if(!t.isMounted)if(r)S=p||c,L=R||u,O=A||h;else return;let U=!1;E[Ar]=ie=>{U||(U=!0,ie?C(O,[E]):C(L,[E]),D.delayedLeave&&D.delayedLeave(),E[Ar]=void 0)};const G=E[Ar].bind(null,!1);S?M(S,[E,G]):G()},leave(E,S){const L=String(n.key);if(E[Ar]&&E[Ar](!0),t.isUnmounting)return S();C(d,[E]);let O=!1;E[Dn]=G=>{O||(O=!0,S(),G?C(x,[E]):C(_,[E]),E[Dn]=void 0,I[L]===n&&delete I[L])};const U=E[Dn].bind(null,!1);I[L]=n,f?M(f,[E,U]):U()},clone(E){const S=Al(E,e,t,i,s);return s&&s(S),S}};return D}function Do(n){if(vo(n))return n=qi(n),n.children=null,n}function au(n){if(!vo(n))return Ld(n.type)&&n.children?Nd(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&tt(t.default))return t.default()}}function Qr(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Qr(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Od(n,e=!1,t){let i=[],s=0;for(let r=0;r<n.length;r++){let a=n[r];const o=t==null?a.key:String(t)+String(a.key!=null?a.key:r);a.type===at?(a.patchFlag&128&&s++,i=i.concat(Od(a.children,e,o))):(e||a.type!==un)&&i.push(o!=null?qi(a,{key:o}):a)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function kd(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function ou(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const Qa=new WeakMap;function Hr(n,e,t,i,s=!1){if(qe(n)){n.forEach((x,g)=>Hr(x,e&&(qe(e)?e[g]:e),t,i,s));return}if(Vr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Hr(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?Mo(i.component):i.el,a=s?null:r,{i:o,r:l}=n,c=e&&e.r,u=o.refs===wt?o.refs={}:o.refs,h=o.setupState,d=mt(h),f=h===wt?ed:x=>ou(u,x)?!1:vt(d,x),_=(x,g)=>!(g&&ou(u,g));if(c!=null&&c!==l){if(lu(e),Ut(c))u[c]=null,f(c)&&(h[c]=null);else if(nn(c)){const x=e;_(c,x.k)&&(c.value=null),x.k&&(u[x.k]=null)}}if(tt(l))la(l,o,12,[a,u]);else{const x=Ut(l),g=nn(l);if(x||g){const p=()=>{if(n.f){const R=x?f(l)?h[l]:u[l]:_()||!n.k?l.value:u[n.k];if(s)qe(R)&&Mc(R,r);else if(qe(R))R.includes(r)||R.push(r);else if(x)u[l]=[r],f(l)&&(h[l]=u[l]);else{const A=[r];_(l,n.k)&&(l.value=A),n.k&&(u[n.k]=A)}}else x?(u[l]=a,f(l)&&(h[l]=a)):g&&(_(l,n.k)&&(l.value=a),n.k&&(u[n.k]=a))};if(a){const R=()=>{p(),Qa.delete(n)};R.id=-1,Qa.set(n,R),pn(R,t)}else lu(n),p()}}}function lu(n){const e=Qa.get(n);e&&(e.flags|=8,Qa.delete(n))}po().requestIdleCallback;po().cancelIdleCallback;const Vr=n=>!!n.type.__asyncLoader,vo=n=>n.type.__isKeepAlive;function am(n,e){Bd(n,"a",e)}function om(n,e){Bd(n,"da",e)}function Bd(n,e,t=tn){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(xo(e,i,t),t){let s=t.parent;for(;s&&s.parent;)vo(s.parent.vnode)&&lm(i,e,t,s),s=s.parent}}function lm(n,e,t,i){const s=xo(e,n,i,!0);zd(()=>{Mc(i[e],s)},t)}function xo(n,e,t=tn,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...a)=>{wi();const o=ca(t),l=Fn(e,t,n,a);return o(),Ai(),l});return i?s.unshift(r):s.push(r),r}}const Di=n=>(e,t=tn)=>{(!ta||n==="sp")&&xo(n,(...i)=>e(...i),t)},cm=Di("bm"),pr=Di("m"),um=Di("bu"),hm=Di("u"),Ss=Di("bum"),zd=Di("um"),dm=Di("sp"),fm=Di("rtg"),pm=Di("rtc");function mm(n,e=tn){xo("ec",n,e)}const gm="components",Hd=Symbol.for("v-ndc");function Js(n){return Ut(n)?_m(gm,n,!1)||n:n||Hd}function _m(n,e,t=!0,i=!1){const s=Sn||tn;if(s){const r=s.type;{const o=eg(r,!1);if(o&&(o===e||o===hn(e)||o===fo(hn(e))))return r}const a=cu(s[n]||r[n],e)||cu(s.appContext[n],e);return!a&&i?r:a}}function cu(n,e){return n&&(n[e]||n[hn(e)]||n[fo(hn(e))])}function xt(n,e,t,i){let s;const r=t,a=qe(n);if(a||Ut(n)){const o=a&&_s(n);let l=!1,c=!1;o&&(l=!Nn(n),c=Ci(n),n=mo(n)),s=new Array(n.length);for(let u=0,h=n.length;u<h;u++)s[u]=e(l?c?sr(jn(n[u])):jn(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let o=0;o<n;o++)s[o]=e(o+1,o,void 0,r)}else if(yt(n))if(n[Symbol.iterator])s=Array.from(n,(o,l)=>e(o,l,void 0,r));else{const o=Object.keys(n);s=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}const Cl=n=>n?uf(n)?Mo(n):Cl(n.parent):null,Gr=qt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Cl(n.parent),$root:n=>Cl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Gd(n),$forceUpdate:n=>n.f||(n.f=()=>{Ic(n.update)}),$nextTick:n=>n.n||(n.n=wl.bind(n.proxy)),$watch:n=>tm.bind(n)}),Lo=(n,e)=>n!==wt&&!n.__isScriptSetup&&vt(n,e),vm={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:a,type:o,appContext:l}=n;if(e[0]!=="$"){const d=a[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(Lo(i,e))return a[e]=1,i[e];if(s!==wt&&vt(s,e))return a[e]=2,s[e];if(vt(r,e))return a[e]=3,r[e];if(t!==wt&&vt(t,e))return a[e]=4,t[e];Rl&&(a[e]=0)}}const c=Gr[e];let u,h;if(c)return e==="$attrs"&&en(n.attrs,"get",""),c(n);if((u=o.__cssModules)&&(u=u[e]))return u;if(t!==wt&&vt(t,e))return a[e]=4,t[e];if(h=l.config.globalProperties,vt(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return Lo(s,e)?(s[e]=t,!0):i!==wt&&vt(i,e)?(i[e]=t,!0):vt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:a}},o){let l;return!!(t[o]||n!==wt&&o[0]!=="$"&&vt(n,o)||Lo(e,o)||vt(r,o)||vt(i,o)||vt(Gr,o)||vt(s.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:vt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function uu(n){return qe(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Rl=!0;function xm(n){const e=Gd(n),t=n.proxy,i=n.ctx;Rl=!1,e.beforeCreate&&hu(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:_,activated:x,deactivated:g,beforeDestroy:p,beforeUnmount:R,destroyed:A,unmounted:y,render:I,renderTracked:C,renderTriggered:M,errorCaptured:D,serverPrefetch:E,expose:S,inheritAttrs:L,components:O,directives:U,filters:G}=e;if(c&&ym(c,i,null),a)for(const se in a){const X=a[se];tt(X)&&(i[se]=X.bind(t))}if(s){const se=s.call(t,t);yt(se)&&(n.data=Zr(se))}if(Rl=!0,r)for(const se in r){const X=r[se],ue=tt(X)?X.bind(t,t):tt(X.get)?X.get.bind(t,t):oi,Me=!tt(X)&&tt(X.set)?X.set.bind(t):oi,Re=St({get:ue,set:Me});Object.defineProperty(i,se,{enumerable:!0,configurable:!0,get:()=>Re.value,set:Ie=>Re.value=Ie})}if(o)for(const se in o)Vd(o[se],i,t,se);if(l){const se=tt(l)?l.call(t):l;Reflect.ownKeys(se).forEach(X=>{Jp(X,se[X])})}u&&hu(u,n,"c");function Z(se,X){qe(X)?X.forEach(ue=>se(ue.bind(t))):X&&se(X.bind(t))}if(Z(cm,h),Z(pr,d),Z(um,f),Z(hm,_),Z(am,x),Z(om,g),Z(mm,D),Z(pm,C),Z(fm,M),Z(Ss,R),Z(zd,y),Z(dm,E),qe(S))if(S.length){const se=n.exposed||(n.exposed={});S.forEach(X=>{Object.defineProperty(se,X,{get:()=>t[X],set:ue=>t[X]=ue,enumerable:!0})})}else n.exposed||(n.exposed={});I&&n.render===oi&&(n.render=I),L!=null&&(n.inheritAttrs=L),O&&(n.components=O),U&&(n.directives=U),E&&kd(n)}function ym(n,e,t=oi){qe(n)&&(n=Pl(n));for(const i in n){const s=n[i];let r;yt(s)?"default"in s?r=Va(s.from||i,s.default,!0):r=Va(s.from||i):r=Va(s),nn(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:a=>r.value=a}):e[i]=r}}function hu(n,e,t){Fn(qe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Vd(n,e,t,i){let s=i.includes(".")?Dd(t,i):()=>t[i];if(Ut(n)){const r=e[n];tt(r)&&si(s,r)}else if(tt(n))si(s,n.bind(t));else if(yt(n))if(qe(n))n.forEach(r=>Vd(r,e,t,i));else{const r=tt(n.handler)?n.handler.bind(t):e[n.handler];tt(r)&&si(s,r,n)}}function Gd(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:a}}=n.appContext,o=r.get(e);let l;return o?l=o:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>eo(l,c,a,!0)),eo(l,e,a)),yt(e)&&r.set(e,l),l}function eo(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&eo(n,r,t,!0),s&&s.forEach(a=>eo(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=bm[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const bm={data:du,props:fu,emits:fu,methods:Nr,computed:Nr,beforeCreate:an,created:an,beforeMount:an,mounted:an,beforeUpdate:an,updated:an,beforeDestroy:an,beforeUnmount:an,destroyed:an,unmounted:an,activated:an,deactivated:an,errorCaptured:an,serverPrefetch:an,components:Nr,directives:Nr,watch:Sm,provide:du,inject:Mm};function du(n,e){return e?n?function(){return qt(tt(n)?n.call(this,this):n,tt(e)?e.call(this,this):e)}:e:n}function Mm(n,e){return Nr(Pl(n),Pl(e))}function Pl(n){if(qe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function an(n,e){return n?[...new Set([].concat(n,e))]:e}function Nr(n,e){return n?qt(Object.create(null),n,e):e}function fu(n,e){return n?qe(n)&&qe(e)?[...new Set([...n,...e])]:qt(Object.create(null),uu(n),uu(e??{})):e}function Sm(n,e){if(!n)return e;if(!e)return n;const t=qt(Object.create(null),n);for(const i in e)t[i]=an(n[i],e[i]);return t}function Wd(){return{app:null,config:{isNativeTag:ed,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Em=0;function Tm(n,e){return function(i,s=null){tt(i)||(i=qt({},i)),s!=null&&!yt(s)&&(s=null);const r=Wd(),a=new WeakSet,o=[];let l=!1;const c=r.app={_uid:Em++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:ng,get config(){return r.config},set config(u){},use(u,...h){return a.has(u)||(u&&tt(u.install)?(a.add(u),u.install(c,...h)):tt(u)&&(a.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,d){if(!l){const f=c._ceVNode||Se(i,s);return f.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),n(f,u,d),l=!0,c._container=u,u.__vue_app__=c,Mo(f.component)}},onUnmount(u){o.push(u)},unmount(){l&&(Fn(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=Qs;Qs=c;try{return u()}finally{Qs=h}}};return c}}let Qs=null;const wm=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${hn(e)}Modifiers`]||n[`${ji(e)}Modifiers`];function Am(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||wt;let s=t;const r=e.startsWith("update:"),a=r&&wm(i,e.slice(7));a&&(a.trim&&(s=t.map(u=>Ut(u)?u.trim():u)),a.number&&(s=t.map(Ec)));let o,l=i[o=wo(e)]||i[o=wo(hn(e))];!l&&r&&(l=i[o=wo(ji(e))]),l&&Fn(l,n,6,s);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,Fn(c,n,6,s)}}const Cm=new WeakMap;function Xd(n,e,t=!1){const i=t?Cm:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let a={},o=!1;if(!tt(n)){const l=c=>{const u=Xd(c,e,!0);u&&(o=!0,qt(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!o?(yt(n)&&i.set(n,null),null):(qe(r)?r.forEach(l=>a[l]=null):qt(a,r),yt(n)&&i.set(n,a),a)}function yo(n,e){return!n||!co(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),vt(n,e[0].toLowerCase()+e.slice(1))||vt(n,ji(e))||vt(n,e))}function pu(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:h,data:d,setupState:f,ctx:_,inheritAttrs:x}=n,g=Ja(n);let p,R;try{if(t.shapeFlag&4){const y=s||i,I=y;p=ti(c.call(I,y,u,h,f,d,_)),R=o}else{const y=e;p=ti(y.length>1?y(h,{attrs:o,slots:a,emit:l}):y(h,null)),R=e.props?o:Rm(o)}}catch(y){vs.length=0,go(y,n,1),p=Se(un)}let A=p;if(R&&x!==!1){const y=Object.keys(R),{shapeFlag:I}=A;y.length&&I&7&&(r&&y.some(uo)&&(R=Pm(R,r)),A=qi(A,R,!1,!0))}return t.dirs&&(A=qi(A,null,!1,!0),A.dirs=A.dirs?A.dirs.concat(t.dirs):t.dirs),t.transition&&Qr(A,t.transition),p=A,Ja(g),p}const Rm=n=>{let e;for(const t in n)(t==="class"||t==="style"||co(t))&&((e||(e={}))[t]=n[t]);return e},Pm=(n,e)=>{const t={};for(const i in n)(!uo(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Dm(n,e,t){const{props:i,children:s,component:r}=n,{props:a,children:o,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?mu(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if($d(a,i,d)&&!yo(c,d))return!0}}}else return(s||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?mu(i,a,c):!0:!!a;return!1}function mu(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if($d(e,n,r)&&!yo(t,r))return!0}return!1}function $d(n,e,t){const i=n[t],s=e[t];return t==="style"&&yt(i)&&yt(s)?!Tc(i,s):i!==s}function Lm({vnode:n,parent:e,suspense:t},i){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const qd={},Yd=()=>Object.create(qd),jd=n=>Object.getPrototypeOf(n)===qd;function Im(n,e,t,i=!1){const s={},r=Yd();n.propsDefaults=Object.create(null),Kd(n,e,s,r);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=i?s:zp(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function Um(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:a}}=n,o=mt(s),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(yo(n.emitsOptions,d))continue;const f=e[d];if(l)if(vt(r,d))f!==r[d]&&(r[d]=f,c=!0);else{const _=hn(d);s[_]=Dl(l,o,_,f,n,!1)}else f!==r[d]&&(r[d]=f,c=!0)}}}else{Kd(n,e,s,r)&&(c=!0);let u;for(const h in o)(!e||!vt(e,h)&&((u=ji(h))===h||!vt(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(s[h]=Dl(l,o,h,void 0,n,!0)):delete s[h]);if(r!==o)for(const h in r)(!e||!vt(e,h))&&(delete r[h],c=!0)}c&&yi(n.attrs,"set","")}function Kd(n,e,t,i){const[s,r]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(kr(l))continue;const c=e[l];let u;s&&vt(s,u=hn(l))?!r||!r.includes(u)?t[u]=c:(o||(o={}))[u]=c:yo(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(r){const l=mt(t),c=o||wt;for(let u=0;u<r.length;u++){const h=r[u];t[h]=Dl(s,l,h,c[h],n,!vt(c,h))}}return a}function Dl(n,e,t,i,s,r){const a=n[t];if(a!=null){const o=vt(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&tt(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=ca(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}a[0]&&(r&&!o?i=!1:a[1]&&(i===""||i===ji(t))&&(i=!0))}return i}const Nm=new WeakMap;function Zd(n,e,t=!1){const i=t?Nm:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,a={},o=[];let l=!1;if(!tt(n)){const u=h=>{l=!0;const[d,f]=Zd(h,e,!0);qt(a,d),f&&o.push(...f)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return yt(n)&&i.set(n,js),js;if(qe(r))for(let u=0;u<r.length;u++){const h=hn(r[u]);gu(h)&&(a[h]=wt)}else if(r)for(const u in r){const h=hn(u);if(gu(h)){const d=r[u],f=a[h]=qe(d)||tt(d)?{type:d}:qt({},d),_=f.type;let x=!1,g=!0;if(qe(_))for(let p=0;p<_.length;++p){const R=_[p],A=tt(R)&&R.name;if(A==="Boolean"){x=!0;break}else A==="String"&&(g=!1)}else x=tt(_)&&_.name==="Boolean";f[0]=x,f[1]=g,(x||vt(f,"default"))&&o.push(h)}}const c=[a,o];return yt(n)&&i.set(n,c),c}function gu(n){return n[0]!=="$"&&!kr(n)}const Uc=n=>n==="_"||n==="_ctx"||n==="$stable",Nc=n=>qe(n)?n.map(ti):[ti(n)],Fm=(n,e,t)=>{if(e._n)return e;const i=_o((...s)=>Nc(e(...s)),t);return i._c=!1,i},Jd=(n,e,t)=>{const i=n._ctx;for(const s in n){if(Uc(s))continue;const r=n[s];if(tt(r))e[s]=Fm(s,r,i);else if(r!=null){const a=Nc(r);e[s]=()=>a}}},Qd=(n,e)=>{const t=Nc(e);n.slots.default=()=>t},ef=(n,e,t)=>{for(const i in e)(t||!Uc(i))&&(n[i]=e[i])},Om=(n,e,t)=>{const i=n.slots=Yd();if(n.vnode.shapeFlag&32){const s=e._;s?(ef(i,e,t),t&&rd(i,"_",s,!0)):Jd(e,i)}else e&&Qd(n,e)},km=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,a=wt;if(i.shapeFlag&32){const o=e._;o?t&&o===1?r=!1:ef(s,e,t):(r=!e.$stable,Jd(e,s)),a=e}else e&&(Qd(n,e),a={default:1});if(r)for(const o in s)!Uc(o)&&a[o]==null&&delete s[o]},pn=Gm;function Bm(n){return zm(n)}function zm(n,e){const t=po();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=oi,insertStaticContent:_}=n,x=(P,k,T,le=null,J=null,Q=null,te=void 0,ce=null,ee=!!k.dynamicChildren)=>{if(P===k)return;P&&!hs(P,k)&&(le=Te(P),Ie(P,J,Q,!0),P=null),k.patchFlag===-2&&(ee=!1,k.dynamicChildren=null);const{type:b,ref:v,shapeFlag:F}=k;switch(b){case bo:g(P,k,T,le);break;case un:p(P,k,T,le);break;case Uo:P==null&&R(k,T,le,te);break;case at:O(P,k,T,le,J,Q,te,ce,ee);break;default:F&1?I(P,k,T,le,J,Q,te,ce,ee):F&6?U(P,k,T,le,J,Q,te,ce,ee):(F&64||F&128)&&b.process(P,k,T,le,J,Q,te,ce,ee,We)}v!=null&&J?Hr(v,P&&P.ref,Q,k||P,!k):v==null&&P&&P.ref!=null&&Hr(P.ref,null,Q,P,!0)},g=(P,k,T,le)=>{if(P==null)i(k.el=o(k.children),T,le);else{const J=k.el=P.el;k.children!==P.children&&c(J,k.children)}},p=(P,k,T,le)=>{P==null?i(k.el=l(k.children||""),T,le):k.el=P.el},R=(P,k,T,le)=>{[P.el,P.anchor]=_(P.children,k,T,le,P.el,P.anchor)},A=({el:P,anchor:k},T,le)=>{let J;for(;P&&P!==k;)J=d(P),i(P,T,le),P=J;i(k,T,le)},y=({el:P,anchor:k})=>{let T;for(;P&&P!==k;)T=d(P),s(P),P=T;s(k)},I=(P,k,T,le,J,Q,te,ce,ee)=>{if(k.type==="svg"?te="svg":k.type==="math"&&(te="mathml"),P==null)C(k,T,le,J,Q,te,ce,ee);else{const b=P.el&&P.el._isVueCE?P.el:null;try{b&&b._beginPatch(),E(P,k,J,Q,te,ce,ee)}finally{b&&b._endPatch()}}},C=(P,k,T,le,J,Q,te,ce)=>{let ee,b;const{props:v,shapeFlag:F,transition:W,dirs:K}=P;if(ee=P.el=a(P.type,Q,v&&v.is,v),F&8?u(ee,P.children):F&16&&D(P.children,ee,null,le,J,Io(P,Q),te,ce),K&&Ji(P,null,le,"created"),M(ee,P,P.scopeId,te,le),v){for(const be in v)be!=="value"&&!kr(be)&&r(ee,be,null,v[be],Q,le);"value"in v&&r(ee,"value",null,v.value,Q),(b=v.onVnodeBeforeMount)&&Zn(b,le,P)}K&&Ji(P,null,le,"beforeMount");const j=Hm(J,W);j&&W.beforeEnter(ee),i(ee,k,T),((b=v&&v.onVnodeMounted)||j||K)&&pn(()=>{try{b&&Zn(b,le,P),j&&W.enter(ee),K&&Ji(P,null,le,"mounted")}finally{}},J)},M=(P,k,T,le,J)=>{if(T&&f(P,T),le)for(let Q=0;Q<le.length;Q++)f(P,le[Q]);if(J){let Q=J.subTree;if(k===Q||rf(Q.type)&&(Q.ssContent===k||Q.ssFallback===k)){const te=J.vnode;M(P,te,te.scopeId,te.slotScopeIds,J.parent)}}},D=(P,k,T,le,J,Q,te,ce,ee=0)=>{for(let b=ee;b<P.length;b++){const v=P[b]=ce?xi(P[b]):ti(P[b]);x(null,v,k,T,le,J,Q,te,ce)}},E=(P,k,T,le,J,Q,te)=>{const ce=k.el=P.el;let{patchFlag:ee,dynamicChildren:b,dirs:v}=k;ee|=P.patchFlag&16;const F=P.props||wt,W=k.props||wt;let K;if(T&&Qi(T,!1),(K=W.onVnodeBeforeUpdate)&&Zn(K,T,k,P),v&&Ji(k,P,T,"beforeUpdate"),T&&Qi(T,!0),b&&(!P.dynamicChildren||P.dynamicChildren.length!==b.length)&&(ee=0,te=!1,b=null),(F.innerHTML&&W.innerHTML==null||F.textContent&&W.textContent==null)&&u(ce,""),b?S(P.dynamicChildren,b,ce,T,le,Io(k,J),Q):te||X(P,k,ce,null,T,le,Io(k,J),Q,!1),ee>0){if(ee&16)L(ce,F,W,T,J);else if(ee&2&&F.class!==W.class&&r(ce,"class",null,W.class,J),ee&4&&r(ce,"style",F.style,W.style,J),ee&8){const j=k.dynamicProps;for(let be=0;be<j.length;be++){const fe=j[be],xe=F[fe],He=W[fe];(He!==xe||fe==="value")&&r(ce,fe,xe,He,J,T)}}ee&1&&P.children!==k.children&&u(ce,k.children)}else!te&&b==null&&L(ce,F,W,T,J);((K=W.onVnodeUpdated)||v)&&pn(()=>{K&&Zn(K,T,k,P),v&&Ji(k,P,T,"updated")},le)},S=(P,k,T,le,J,Q,te)=>{for(let ce=0;ce<k.length;ce++){const ee=P[ce],b=k[ce],v=ee.el&&(ee.type===at||!hs(ee,b)||ee.shapeFlag&198)?h(ee.el):T;x(ee,b,v,null,le,J,Q,te,!0)}},L=(P,k,T,le,J)=>{if(k!==T){if(k!==wt)for(const Q in k)!kr(Q)&&!(Q in T)&&r(P,Q,k[Q],null,J,le);for(const Q in T){if(kr(Q))continue;const te=T[Q],ce=k[Q];te!==ce&&Q!=="value"&&r(P,Q,ce,te,J,le)}"value"in T&&r(P,"value",k.value,T.value,J)}},O=(P,k,T,le,J,Q,te,ce,ee)=>{const b=k.el=P?P.el:o(""),v=k.anchor=P?P.anchor:o("");let{patchFlag:F,dynamicChildren:W,slotScopeIds:K}=k;K&&(ce=ce?ce.concat(K):K),P==null?(i(b,T,le),i(v,T,le),D(k.children||[],T,v,J,Q,te,ce,ee)):F>0&&F&64&&W&&P.dynamicChildren&&P.dynamicChildren.length===W.length?(S(P.dynamicChildren,W,T,J,Q,te,ce),(k.key!=null||J&&k===J.subTree)&&tf(P,k,!0)):X(P,k,T,v,J,Q,te,ce,ee)},U=(P,k,T,le,J,Q,te,ce,ee)=>{k.slotScopeIds=ce,P==null?k.shapeFlag&512?J.ctx.activate(k,T,le,te,ee):G(k,T,le,J,Q,te,ee):ie(P,k,ee)},G=(P,k,T,le,J,Q,te)=>{const ce=P.component=jm(P,le,J);if(vo(P)&&(ce.ctx.renderer=We),Km(ce,!1,te),ce.asyncDep){if(J&&J.registerDep(ce,Z,te),!P.el){const ee=ce.subTree=Se(un);p(null,ee,k,T),P.placeholder=ee.el}}else Z(ce,P,k,T,J,Q,te)},ie=(P,k,T)=>{const le=k.component=P.component;if(Dm(P,k,T))if(le.asyncDep&&!le.asyncResolved){se(le,k,T);return}else le.next=k,le.update();else k.el=P.el,le.vnode=k},Z=(P,k,T,le,J,Q,te)=>{const ce=()=>{if(P.isMounted){let{next:F,bu:W,u:K,parent:j,vnode:be}=P;{const Ae=nf(P);if(Ae){F&&(F.el=be.el,se(P,F,te)),Ae.asyncDep.then(()=>{pn(()=>{P.isUnmounted||b()},J)});return}}let fe=F,xe;Qi(P,!1),F?(F.el=be.el,se(P,F,te)):F=be,W&&Ha(W),(xe=F.props&&F.props.onVnodeBeforeUpdate)&&Zn(xe,j,F,be),Qi(P,!0);const He=pu(P),_e=P.subTree;P.subTree=He,x(_e,He,h(_e.el),Te(_e),P,J,Q),F.el=He.el,fe===null&&Lm(P,He.el),K&&pn(K,J),(xe=F.props&&F.props.onVnodeUpdated)&&pn(()=>Zn(xe,j,F,be),J)}else{let F;const{el:W,props:K}=k,{bm:j,m:be,parent:fe,root:xe,type:He}=P,_e=Vr(k);Qi(P,!1),j&&Ha(j),!_e&&(F=K&&K.onVnodeBeforeMount)&&Zn(F,fe,k),Qi(P,!0);{xe.ce&&xe.ce._hasShadowRoot()&&xe.ce._injectChildStyle(He,P.parent?P.parent.type:void 0);const Ae=P.subTree=pu(P);x(null,Ae,T,le,P,J,Q),k.el=Ae.el}if(be&&pn(be,J),!_e&&(F=K&&K.onVnodeMounted)){const Ae=k;pn(()=>Zn(F,fe,Ae),J)}(k.shapeFlag&256||fe&&Vr(fe.vnode)&&fe.vnode.shapeFlag&256)&&P.a&&pn(P.a,J),P.isMounted=!0,k=T=le=null}};P.scope.on();const ee=P.effect=new cd(ce);P.scope.off();const b=P.update=ee.run.bind(ee),v=P.job=ee.runIfDirty.bind(ee);v.i=P,v.id=P.uid,ee.scheduler=()=>Ic(v),Qi(P,!0),b()},se=(P,k,T)=>{k.component=P;const le=P.vnode.props;P.vnode=k,P.next=null,Um(P,k.props,le,T),km(P,k.children,T),wi(),ru(P),Ai()},X=(P,k,T,le,J,Q,te,ce,ee=!1)=>{const b=P&&P.children,v=P?P.shapeFlag:0,F=k.children,{patchFlag:W,shapeFlag:K}=k;if(W>0){if(W&128){Me(b,F,T,le,J,Q,te,ce,ee);return}else if(W&256){ue(b,F,T,le,J,Q,te,ce,ee);return}}K&8?(v&16&&Ue(b,J,Q),F!==b&&u(T,F)):v&16?K&16?Me(b,F,T,le,J,Q,te,ce,ee):Ue(b,J,Q,!0):(v&8&&u(T,""),K&16&&D(F,T,le,J,Q,te,ce,ee))},ue=(P,k,T,le,J,Q,te,ce,ee)=>{P=P||js,k=k||js;const b=P.length,v=k.length,F=Math.min(b,v);let W;for(W=0;W<F;W++){const K=k[W]=ee?xi(k[W]):ti(k[W]);x(P[W],K,T,null,J,Q,te,ce,ee)}b>v?Ue(P,J,Q,!0,!1,F):D(k,T,le,J,Q,te,ce,ee,F)},Me=(P,k,T,le,J,Q,te,ce,ee)=>{let b=0;const v=k.length;let F=P.length-1,W=v-1;for(;b<=F&&b<=W;){const K=P[b],j=k[b]=ee?xi(k[b]):ti(k[b]);if(hs(K,j))x(K,j,T,null,J,Q,te,ce,ee);else break;b++}for(;b<=F&&b<=W;){const K=P[F],j=k[W]=ee?xi(k[W]):ti(k[W]);if(hs(K,j))x(K,j,T,null,J,Q,te,ce,ee);else break;F--,W--}if(b>F){if(b<=W){const K=W+1,j=K<v?k[K].el:le;for(;b<=W;)x(null,k[b]=ee?xi(k[b]):ti(k[b]),T,j,J,Q,te,ce,ee),b++}}else if(b>W)for(;b<=F;)Ie(P[b],J,Q,!0),b++;else{const K=b,j=b,be=new Map;for(b=j;b<=W;b++){const we=k[b]=ee?xi(k[b]):ti(k[b]);we.key!=null&&be.set(we.key,b)}let fe,xe=0;const He=W-j+1;let _e=!1,Ae=0;const Be=new Array(He);for(b=0;b<He;b++)Be[b]=0;for(b=K;b<=F;b++){const we=P[b];if(xe>=He){Ie(we,J,Q,!0);continue}let Ye;if(we.key!=null)Ye=be.get(we.key);else for(fe=j;fe<=W;fe++)if(Be[fe-j]===0&&hs(we,k[fe])){Ye=fe;break}Ye===void 0?Ie(we,J,Q,!0):(Be[Ye-j]=b+1,Ye>=Ae?Ae=Ye:_e=!0,x(we,k[Ye],T,null,J,Q,te,ce,ee),xe++)}const $e=_e?Vm(Be):js;for(fe=$e.length-1,b=He-1;b>=0;b--){const we=j+b,Ye=k[we],Ke=k[we+1],Je=we+1<v?Ke.el||sf(Ke):le;Be[b]===0?x(null,Ye,T,Je,J,Q,te,ce,ee):_e&&(fe<0||b!==$e[fe]?Re(Ye,T,Je,2):fe--)}}},Re=(P,k,T,le,J=null)=>{const{el:Q,type:te,transition:ce,children:ee,shapeFlag:b}=P;if(b&6){Re(P.component.subTree,k,T,le);return}if(b&128){P.suspense.move(k,T,le);return}if(b&64){te.move(P,k,T,We);return}if(te===at){i(Q,k,T);for(let F=0;F<ee.length;F++)Re(ee[F],k,T,le);i(P.anchor,k,T);return}if(te===Uo){A(P,k,T);return}if(le!==2&&b&1&&ce)if(le===0)ce.persisted&&!Q[Dn]?i(Q,k,T):(ce.beforeEnter(Q),i(Q,k,T),pn(()=>ce.enter(Q),J));else{const{leave:F,delayLeave:W,afterLeave:K}=ce,j=()=>{P.ctx.isUnmounted?s(Q):i(Q,k,T)},be=()=>{const fe=Q._isLeaving||!!Q[Dn];Q._isLeaving&&Q[Dn](!0),ce.persisted&&!fe?j():F(Q,()=>{j(),K&&K()})};W?W(Q,j,be):be()}else i(Q,k,T)},Ie=(P,k,T,le=!1,J=!1)=>{const{type:Q,props:te,ref:ce,children:ee,dynamicChildren:b,shapeFlag:v,patchFlag:F,dirs:W,cacheIndex:K,memo:j}=P;if(F===-2&&(J=!1),ce!=null&&(wi(),Hr(ce,null,T,P,!0),Ai()),K!=null&&(k.renderCache[K]=void 0),v&256){k.ctx.deactivate(P);return}const be=v&1&&W,fe=!Vr(P);let xe;if(fe&&(xe=te&&te.onVnodeBeforeUnmount)&&Zn(xe,k,P),v&6)ge(P.component,T,le);else{if(v&128){P.suspense.unmount(T,le);return}be&&Ji(P,null,k,"beforeUnmount"),v&64?P.type.remove(P,k,T,We,le):b&&!b.hasOnce&&(Q!==at||F>0&&F&64)?Ue(b,k,T,!1,!0):(Q===at&&F&384||!J&&v&16)&&Ue(ee,k,T),le&&Ve(P)}const He=j!=null&&K==null;(fe&&(xe=te&&te.onVnodeUnmounted)||be||He)&&pn(()=>{xe&&Zn(xe,k,P),be&&Ji(P,null,k,"unmounted"),He&&(P.el=null)},T)},Ve=P=>{const{type:k,el:T,anchor:le,transition:J}=P;if(k===at){ae(T,le);return}if(k===Uo){y(P);return}const Q=()=>{s(T),J&&!J.persisted&&J.afterLeave&&J.afterLeave()};if(P.shapeFlag&1&&J&&!J.persisted){const{leave:te,delayLeave:ce}=J,ee=()=>te(T,Q);ce?ce(P.el,Q,ee):ee()}else Q()},ae=(P,k)=>{let T;for(;P!==k;)T=d(P),s(P),P=T;s(k)},ge=(P,k,T)=>{const{bum:le,scope:J,job:Q,subTree:te,um:ce,m:ee,a:b}=P;_u(ee),_u(b),le&&Ha(le),J.stop(),Q&&(Q.flags|=8,Ie(te,P,k,T)),ce&&pn(ce,k),pn(()=>{P.isUnmounted=!0},k)},Ue=(P,k,T,le=!1,J=!1,Q=0)=>{for(let te=Q;te<P.length;te++)Ie(P[te],k,T,le,J)},Te=P=>{if(P.shapeFlag&6)return Te(P.component.subTree);if(P.shapeFlag&128)return P.suspense.next();const k=d(P.anchor||P.el),T=k&&k[nm];return T?d(T):k};let ke=!1;const Ge=(P,k,T)=>{let le;P==null?k._vnode&&(Ie(k._vnode,null,null,!0),le=k._vnode.component):x(k._vnode||null,P,k,null,null,null,T),k._vnode=P,ke||(ke=!0,ru(le),wd(),ke=!1)},We={p:x,um:Ie,m:Re,r:Ve,mt:G,mc:D,pc:X,pbc:S,n:Te,o:n};return{render:Ge,hydrate:void 0,createApp:Tm(Ge)}}function Io({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Qi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Hm(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function tf(n,e,t=!1){const i=n.children,s=e.children;if(qe(i)&&qe(s))for(let r=0;r<i.length;r++){const a=i[r];let o=s[r];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=s[r]=xi(s[r]),o.el=a.el),!t&&o.patchFlag!==-2&&tf(a,o)),o.type===bo&&(o.patchFlag===-1&&(o=s[r]=xi(o)),o.el=a.el),o.type===un&&!o.el&&(o.el=a.el)}}function Vm(n){const e=n.slice(),t=[0];let i,s,r,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,a=t.length-1;r<a;)o=r+a>>1,n[t[o]]<c?r=o+1:a=o;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,a=t[r-1];r-- >0;)t[r]=a,a=e[a];return t}function nf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:nf(e)}function _u(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function sf(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?sf(e.subTree):null}const rf=n=>n.__isSuspense;function Gm(n,e){e&&e.pendingBranch?qe(n)?e.effects.push(...n):e.effects.push(n):Zp(n)}const at=Symbol.for("v-fgt"),bo=Symbol.for("v-txt"),un=Symbol.for("v-cmt"),Uo=Symbol.for("v-stc"),vs=[];let En=null;function oe(n=!1){vs.push(En=n?null:[])}function af(){vs.pop(),En=vs[vs.length-1]||null}let ea=1;function to(n,e=!1){ea+=n,n<0&&En&&e&&(En.hasOnce=!0)}function of(n){return n.dynamicChildren=ea>0?En||js:null,af(),ea>0&&En&&En.push(n),n}function ye(n,e,t,i,s,r){return of(m(n,e,t,i,s,r,!0))}function It(n,e,t,i,s){return of(Se(n,e,t,i,s,!0))}function no(n){return n?n.__v_isVNode===!0:!1}function hs(n,e){return n.type===e.type&&n.key===e.key}const lf=({key:n})=>n??null,Ga=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Ut(n)||nn(n)||tt(n)?{i:Sn,r:n,k:e,f:!!t}:n:null);function m(n,e=null,t=null,i=0,s=null,r=n===at?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&lf(e),ref:e&&Ga(e),scopeId:Cd,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Sn};return o?(io(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Ut(t)?8:16),ea>0&&!a&&En&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&En.push(l),l}const Se=Wm;function Wm(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===Hd)&&(n=un),no(n)){const o=qi(n,e,!0);return t&&io(o,t),ea>0&&!r&&En&&(o.shapeFlag&6?En[En.indexOf(n)]=o:En.push(o)),o.patchFlag=-2,o}if(tg(n)&&(n=n.__vccOpts),e){e=Xm(e);let{class:o,style:l}=e;o&&!Ut(o)&&(e.class=Et(o)),yt(l)&&(Lc(l)&&!qe(l)&&(l=qt({},l)),e.style=Un(l))}const a=Ut(n)?1:rf(n)?128:Ld(n)?64:yt(n)?4:tt(n)?2:0;return m(n,e,t,i,s,a,r,!0)}function Xm(n){return n?Lc(n)||jd(n)?qt({},n):n:null}function qi(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:a,children:o,transition:l}=n,c=e?$m(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&lf(c),ref:e&&e.ref?t&&r?qe(r)?r.concat(Ga(e)):[r,Ga(e)]:Ga(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==at?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&qi(n.ssContent),ssFallback:n.ssFallback&&qi(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Qr(u,l.clone(u)),u}function nt(n=" ",e=0){return Se(bo,null,n,e)}function Rt(n="",e=!1){return e?(oe(),It(un,null,n)):Se(un,null,n)}function ti(n){return n==null||typeof n=="boolean"?Se(un):qe(n)?Se(at,null,n.slice()):no(n)?xi(n):Se(bo,null,String(n))}function xi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:qi(n)}function io(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(qe(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),io(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!jd(e)?e._ctx=Sn:s===3&&Sn&&(Sn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else if(tt(e)){if(i&65){io(n,{default:e});return}e={default:e,_ctx:Sn},t=32}else e=String(e),i&64?(t=16,e=[nt(e)]):t=8;n.children=e,n.shapeFlag|=t}function $m(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Et([e.class,i.class]));else if(s==="style")e.style=Un([e.style,i.style]);else if(co(s)){const r=e[s],a=i[s];a&&r!==a&&!(qe(r)&&r.includes(a))?e[s]=r?[].concat(r,a):a:a==null&&r==null&&!uo(s)&&(e[s]=a)}else s!==""&&(e[s]=i[s])}return e}function Zn(n,e,t,i=null){Fn(n,e,7,[t,i])}const qm=Wd();let Ym=0;function jm(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||qm,r={uid:Ym++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new bp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Zd(i,s),emitsOptions:Xd(i,s),emit:null,emitted:null,propsDefaults:wt,inheritAttrs:i.inheritAttrs,ctx:wt,data:wt,props:wt,attrs:wt,slots:wt,refs:wt,setupState:wt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Am.bind(null,r),n.ce&&n.ce(r),r}let tn=null;const cf=()=>tn||Sn;let so,Ll;{const n=po(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(a=>a(r)):s[0](r)}};so=e("__VUE_INSTANCE_SETTERS__",t=>tn=t),Ll=e("__VUE_SSR_SETTERS__",t=>ta=t)}const ca=n=>{const e=tn;return so(n),n.scope.on(),()=>{n.scope.off(),so(e)}},vu=()=>{tn&&tn.scope.off(),so(null)};function uf(n){return n.vnode.shapeFlag&4}let ta=!1;function Km(n,e=!1,t=!1){e&&Ll(e);const{props:i,children:s}=n.vnode,r=uf(n);Im(n,i,r,e),Om(n,s,t||e);const a=r?Zm(n,e):void 0;return e&&Ll(!1),a}function Zm(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,vm);const{setup:i}=t;if(i){wi();const s=n.setupContext=i.length>1?Qm(n):null,r=ca(n),a=la(i,n,0,[n.props,s]),o=nd(a);if(Ai(),r(),(o||n.sp)&&!Vr(n)&&kd(n),o){if(a.then(vu,vu),e)return a.then(l=>{xu(n,l)}).catch(l=>{go(l,n,0)});n.asyncDep=a}else xu(n,a)}else hf(n)}function xu(n,e,t){tt(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:yt(e)&&(n.setupState=Sd(e)),hf(n)}function hf(n,e,t){const i=n.type;n.render||(n.render=i.render||oi);{const s=ca(n);wi();try{xm(n)}finally{Ai(),s()}}}const Jm={get(n,e){return en(n,"get",""),n[e]}};function Qm(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Jm),slots:n.slots,emit:n.emit,expose:e}}function Mo(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Sd(Hp(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Gr)return Gr[t](n)},has(e,t){return t in e||t in Gr}})):n.proxy}function eg(n,e=!0){return tt(n)?n.displayName||n.name:n.name||e&&n.__name}function tg(n){return tt(n)&&"__vccOpts"in n}const St=(n,e)=>$p(n,e,ta);function ro(n,e,t){try{to(-1);const i=arguments.length;return i===2?yt(e)&&!qe(e)?no(e)?Se(n,null,[e]):Se(n,e):Se(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&no(t)&&(t=[t]),Se(n,e,t))}finally{to(1)}}const ng="3.5.40";/**
* @vue/runtime-dom v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Il;const yu=typeof window<"u"&&window.trustedTypes;if(yu)try{Il=yu.createPolicy("vue",{createHTML:n=>n})}catch{}const df=Il?n=>Il.createHTML(n):n=>n,ig="http://www.w3.org/2000/svg",sg="http://www.w3.org/1998/Math/MathML",vi=typeof document<"u"?document:null,bu=vi&&vi.createElement("template"),rg={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?vi.createElementNS(ig,n):e==="mathml"?vi.createElementNS(sg,n):t?vi.createElement(n,{is:t}):vi.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>vi.createTextNode(n),createComment:n=>vi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>vi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const a=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{bu.innerHTML=df(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=bu.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Ii="transition",Cr="animation",na=Symbol("_vtc"),ff={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},ag=qt({},Id,ff),og=n=>(n.displayName="Transition",n.props=ag,n),Fc=og((n,{slots:e})=>ro(rm,lg(n),e)),es=(n,e=[])=>{qe(n)?n.forEach(t=>t(...e)):n&&n(...e)},Mu=n=>n?qe(n)?n.some(e=>e.length>1):n.length>1:!1;function lg(n){const e={};for(const O in n)O in ff||(e[O]=n[O]);if(n.css===!1)return e;const{name:t="v",type:i,duration:s,enterFromClass:r=`${t}-enter-from`,enterActiveClass:a=`${t}-enter-active`,enterToClass:o=`${t}-enter-to`,appearFromClass:l=r,appearActiveClass:c=a,appearToClass:u=o,leaveFromClass:h=`${t}-leave-from`,leaveActiveClass:d=`${t}-leave-active`,leaveToClass:f=`${t}-leave-to`}=n,_=cg(s),x=_&&_[0],g=_&&_[1],{onBeforeEnter:p,onEnter:R,onEnterCancelled:A,onLeave:y,onLeaveCancelled:I,onBeforeAppear:C=p,onAppear:M=R,onAppearCancelled:D=A}=e,E=(O,U,G,ie)=>{O._enterCancelled=ie,ts(O,U?u:o),ts(O,U?c:a),G&&G()},S=(O,U)=>{O._isLeaving=!1,ts(O,h),ts(O,f),ts(O,d),U&&U()},L=O=>(U,G)=>{const ie=O?M:R,Z=()=>E(U,O,G);es(ie,[U,Z]),Su(()=>{ts(U,O?l:r),di(U,O?u:o),Mu(ie)||Eu(U,i,x,Z)})};return qt(e,{onBeforeEnter(O){es(p,[O]),di(O,r),di(O,a)},onBeforeAppear(O){es(C,[O]),di(O,l),di(O,c)},onEnter:L(!1),onAppear:L(!0),onLeave(O,U){O._isLeaving=!0;const G=()=>S(O,U);di(O,h),O._enterCancelled?(di(O,d),Au(O)):(Au(O),di(O,d)),Su(()=>{O._isLeaving&&(ts(O,h),di(O,f),Mu(y)||Eu(O,i,g,G))}),es(y,[O,G])},onEnterCancelled(O){E(O,!1,void 0,!0),es(A,[O])},onAppearCancelled(O){E(O,!0,void 0,!0),es(D,[O])},onLeaveCancelled(O){S(O),es(I,[O])}})}function cg(n){if(n==null)return null;if(yt(n))return[No(n.enter),No(n.leave)];{const e=No(n);return[e,e]}}function No(n){return fp(n)}function di(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[na]||(n[na]=new Set)).add(e)}function ts(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[na];t&&(t.delete(e),t.size||(n[na]=void 0))}function Su(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let ug=0;function Eu(n,e,t,i){const s=n._endId=++ug,r=()=>{s===n._endId&&i()};if(t!=null)return setTimeout(r,t);const{type:a,timeout:o,propCount:l}=hg(n,e);if(!a)return i();const c=a+"end";let u=0;const h=()=>{n.removeEventListener(c,d),r()},d=f=>{f.target===n&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},o+1),n.addEventListener(c,d)}function hg(n,e){const t=window.getComputedStyle(n),i=_=>(t[_]||"").split(", "),s=i(`${Ii}Delay`),r=i(`${Ii}Duration`),a=Tu(s,r),o=i(`${Cr}Delay`),l=i(`${Cr}Duration`),c=Tu(o,l);let u=null,h=0,d=0;e===Ii?a>0&&(u=Ii,h=a,d=r.length):e===Cr?c>0&&(u=Cr,h=c,d=l.length):(h=Math.max(a,c),u=h>0?a>c?Ii:Cr:null,d=u?u===Ii?r.length:l.length:0);const f=u===Ii&&/\b(?:transform|all)(?:,|$)/.test(i(`${Ii}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:f}}function Tu(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>wu(t)+wu(n[i])))}function wu(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Au(n){return(n?n.ownerDocument:document).body.offsetHeight}function dg(n,e,t){const i=n[na];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Cu=Symbol("_vod"),fg=Symbol("_vsh"),pg=Symbol(""),mg=/(?:^|;)\s*display\s*:/;function gg(n,e,t){const i=n.style,s=Ut(t);let r=!1;if(t&&!s){if(e)if(Ut(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&Fr(i,o,"")}else for(const a in e)t[a]==null&&Fr(i,a,"");for(const a in t){a==="display"&&(r=!0);const o=t[a];o!=null?vg(n,a,!Ut(e)&&e?e[a]:void 0,o)||Fr(i,a,o):Fr(i,a,"")}}else if(s){if(e!==t){const a=i[pg];a&&(t+=";"+a),i.cssText=t,r=mg.test(t)}}else e&&n.removeAttribute("style");Cu in n&&(n[Cu]=r?i.display:"",n[fg]&&(i.display="none"))}const Ru=/\s*!important$/;function Fr(n,e,t){if(qe(t))t.forEach(i=>Fr(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=_g(n,e);Ru.test(t)?n.setProperty(ji(i),t.replace(Ru,""),"important"):n[i]=t}}const Pu=["Webkit","Moz","ms"],Fo={};function _g(n,e){const t=Fo[e];if(t)return t;let i=hn(e);if(i!=="filter"&&i in n)return Fo[e]=i;i=fo(i);for(let s=0;s<Pu.length;s++){const r=Pu[s]+i;if(r in n)return Fo[e]=r}return e}function vg(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Ut(i)&&t===i}const Du="http://www.w3.org/1999/xlink";function Lu(n,e,t,i,s,r=xp(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Du,e.slice(6,e.length)):n.setAttributeNS(Du,e,t):t==null||r&&!ad(t)?n.removeAttribute(e):n.setAttribute(e,r?"":ci(t)?String(t):t)}function Iu(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?df(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const o=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=ad(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(s||e)}function Vs(n,e,t,i){n.addEventListener(e,t,i)}function xg(n,e,t,i){n.removeEventListener(e,t,i)}const Uu=Symbol("_vei");function yg(n,e,t,i,s=null){const r=n[Uu]||(n[Uu]={}),a=r[e];if(i&&a)a.value=i;else{const[o,l]=Sg(e);if(i){const c=r[e]=wg(i,s);Vs(n,o,c,l)}else a&&(xg(n,o,a,l),r[e]=void 0)}}const bg=/(Once|Passive|Capture)$/,Mg=/^on:?(?:Once|Passive|Capture)$/;function Sg(n){let e,t;for(;(t=n.match(bg))&&!Mg.test(n);)e||(e={}),n=n.slice(0,n.length-t[1].length),e[t[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):ji(n.slice(2)),e]}let Oo=0;const Eg=Promise.resolve(),Tg=()=>Oo||(Eg.then(()=>Oo=0),Oo=Date.now());function wg(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;const s=t.value;if(qe(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const a=s.slice(),o=[i];for(let l=0;l<a.length&&!i._stopped;l++){const c=a[l];c&&Fn(c,e,5,o)}}else Fn(s,e,5,[i])};return t.value=n,t.attached=Tg(),t}const Nu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Ag=(n,e,t,i,s,r)=>{const a=s==="svg";e==="class"?dg(n,i,a):e==="style"?gg(n,t,i):co(e)?uo(e)||yg(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Cg(n,e,i,a))?(Iu(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Lu(n,e,i,a,r,e!=="value")):n._isVueCE&&(Rg(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!Ut(i)))?Iu(n,hn(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Lu(n,e,i,a))};function Cg(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Nu(e)&&tt(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Nu(e)&&Ut(t)?!1:e in n}function Rg(n,e){const t=n._def.props;if(!t)return!1;const i=hn(e);return Array.isArray(t)?t.some(s=>hn(s)===i):Object.keys(t).some(s=>hn(s)===i)}const Fu=n=>{const e=n.props["onUpdate:modelValue"]||!1;return qe(e)?t=>Ha(e,t):e};function Pg(n){n.target.composing=!0}function Ou(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ko=Symbol("_assign");function ku(n,e,t){return e&&(n=n.trim()),t&&(n=Ec(n)),n}const pf={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n[ko]=Fu(s);const r=i||s.props&&s.props.type==="number";Vs(n,e?"change":"input",a=>{a.target.composing||n[ko](ku(n.value,t,r))}),(t||r)&&Vs(n,"change",()=>{n.value=ku(n.value,t,r)}),e||(Vs(n,"compositionstart",Pg),Vs(n,"compositionend",Ou),Vs(n,"change",Ou))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:s,number:r}},a){if(n[ko]=Fu(a),n.composing)return;const o=(r||n.type==="number")&&!/^0\d/.test(n.value)?Ec(n.value):n.value,l=e??"";if(o===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&e===t||s&&n.value.trim()===l)||(n.value=l)}},Dg=["ctrl","shift","alt","meta"],Lg={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>Dg.some(t=>n[`${t}Key`]&&!e.includes(t))},Kt=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=((s,...r)=>{for(let a=0;a<e.length;a++){const o=Lg[e[a]];if(o&&o(s,e))return}return n(s,...r)}))},Ig={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},mf=(n,e)=>{const t=n._withKeys||(n._withKeys={}),i=e.join(".");return t[i]||(t[i]=(s=>{if(!("key"in s))return;const r=ji(s.key);if(e.some(a=>a===r||Ig[a]===r))return n(s)}))},Ug=qt({patchProp:Ag},rg);let Bu;function Ng(){return Bu||(Bu=Bm(Ug))}const Fg=((...n)=>{const e=Ng().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=kg(i);if(!s)return;const r=e._component;!tt(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=t(s,!1,Og(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e});function Og(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function kg(n){return Ut(n)?document.querySelector(n):n}const Bg={class:"site-footer"},zg={__name:"SiteFooter",emits:["navigate"],setup(n){return(e,t)=>(oe(),ye("footer",Bg,[t[4]||(t[4]=m("div",null,[m("strong",null,"大临蓝印"),m("p",null,"一个关于大临村蓝印花布的数字展示平台，让非遗纹样被看见、被理解、被重新使用。")],-1)),m("div",null,[t[3]||(t[3]=m("span",null,"快速链接",-1)),m("button",{type:"button",onClick:t[0]||(t[0]=i=>e.$emit("navigate","/library"))},"蓝印纹库"),m("button",{type:"button",onClick:t[1]||(t[1]=i=>e.$emit("navigate","/heritage"))},"她与蓝"),m("button",{type:"button",onClick:t[2]||(t[2]=i=>e.$emit("navigate","/find-blue"))},"寻找你的蓝")]),t[5]||(t[5]=m("div",null,[m("span",null,"非遗信息"),m("p",null,"浙江嘉兴桐乡市大临村（石门镇） · 国家级非物质文化遗产"),m("small",null,"© 2026 大临村蓝印花布数字展示平台")],-1))]))}},gf="/assets/logo.jpg";/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ma={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg=({size:n,strokeWidth:e=2,absoluteStrokeWidth:t,color:i,iconNode:s,name:r,class:a,...o},{slots:l})=>ro("svg",{...ma,width:n||ma.width,height:n||ma.height,stroke:i||ma.stroke,"stroke-width":t?Number(e)*24/Number(n):e,class:["lucide",`lucide-${Hg(r??"icon")}`],...o},[...s.map(c=>ro(...c)),...l.default?[l.default()]:[]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ot=(n,e)=>(t,{slots:i})=>ro(Vg,{...t,iconNode:e,name:n},i);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rr=ot("ArrowDownIcon",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xs=ot("ArrowLeftIcon",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ri=ot("ArrowRightIcon",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _f=ot("BookOpenIcon",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cs=ot("BoxIcon",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg=ot("CameraIcon",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zu=ot("CheckIcon",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wg=ot("CircleAlertIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xg=ot("Clock3Icon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $g=ot("CloudUploadIcon",[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qg=ot("CoffeeIcon",[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ul=ot("DownloadIcon",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg=ot("Gamepad2Icon",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg=ot("HandHeartIcon",[["path",{d:"M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16",key:"1ifwr1"}],["path",{d:"m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9",key:"17abbs"}],["path",{d:"m2 15 6 6",key:"10dquu"}],["path",{d:"M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z",key:"1h3036"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hu=ot("HeartIcon",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vu=ot("ImagePlusIcon",[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vf=ot("LayersIcon",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kg=ot("LeafIcon",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zg=ot("MapPinIcon",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gu=ot("Maximize2Icon",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jg=ot("MenuIcon",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bo=ot("MousePointer2Icon",[["path",{d:"M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z",key:"edeuup"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qg=ot("MoveIcon",[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"m15 19-3 3-3-3",key:"11eu04"}],["path",{d:"m19 9 3 3-3 3",key:"1mg7y2"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"m5 9-3 3 3 3",key:"j64kie"}],["path",{d:"m9 5 3-3 3 3",key:"l8vdw6"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e_=ot("OrbitIcon",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M10.4 21.9a10 10 0 0 0 9.941-15.416",key:"eohfx2"}],["path",{d:"M13.5 2.1a10 10 0 0 0-9.841 15.416",key:"19pvbm"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wu=ot("PackageIcon",[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7",key:"yx3hmr"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xf=ot("RotateCcwIcon",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xu=ot("RotateCwIcon",[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t_=ot("RouteIcon",[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $u=ot("ScanLineIcon",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M7 12h10",key:"b7w52i"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yf=ot("SearchIcon",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n_=ot("ShieldCheckIcon",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i_=ot("ShirtIcon",[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",key:"1wgbhj"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s_=ot("SmartphoneIcon",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rr=ot("SparklesIcon",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r_=ot("TrophyIcon",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a_=ot("Undo2Icon",[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o_=ot("UsersRoundIcon",[["path",{d:"M18 21a8 8 0 0 0-16 0",key:"3ypg7q"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3",key:"10s06x"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ar=ot("XIcon",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bf=ot("ZoomInIcon",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l_=ot("ZoomOutIcon",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]),Wi=[{id:"0182ff04858b98ea9248cd301d0a278b",src:"/assets/collected/0182ff04858b98ea9248cd301d0a278b.png",type:"png",label:"本地采集素材"},{id:"01d3fbd3b8f8eaa31ab01d39e47b749b",src:"/assets/collected/01d3fbd3b8f8eaa31ab01d39e47b749b.jpg",type:"jpg",label:"本地采集素材"},{id:"028c51947c5f7d191432534f8c8c406f",src:"/assets/collected/028c51947c5f7d191432534f8c8c406f.jpg",type:"jpg",label:"本地采集素材"},{id:"0510ada6fecb96ca4478872090ce1809",src:"/assets/collected/0510ada6fecb96ca4478872090ce1809.png",type:"png",label:"本地采集素材"},{id:"063fc35152b12d6a935623315a207fba",src:"/assets/collected/063fc35152b12d6a935623315a207fba.png",type:"png",label:"本地采集素材"},{id:"0b36d07490865ddd888e047c84f87060",src:"/assets/collected/0b36d07490865ddd888e047c84f87060.jpg",type:"jpg",label:"本地采集素材"},{id:"0ca7611e8ef81537becc001309dd50ff",src:"/assets/collected/0ca7611e8ef81537becc001309dd50ff.jpg",type:"jpg",label:"本地采集素材"},{id:"17c2bbe479aaa0a10a14425a3f40c241",src:"/assets/collected/17c2bbe479aaa0a10a14425a3f40c241.png",type:"png",label:"本地采集素材"},{id:"1c18f8641254020b0d9104c027e34da0",src:"/assets/collected/1c18f8641254020b0d9104c027e34da0.jpg",type:"jpg",label:"本地采集素材"},{id:"1dec0874756fc99aecc3dde98dd0b138",src:"/assets/collected/1dec0874756fc99aecc3dde98dd0b138.jpg",type:"jpg",label:"本地采集素材"},{id:"2246f57e0873288260af7f41c41a6976",src:"/assets/collected/2246f57e0873288260af7f41c41a6976.png",type:"png",label:"本地采集素材"},{id:"230ca8c118f0d457075e9a880cb11ce2",src:"/assets/collected/230ca8c118f0d457075e9a880cb11ce2.png",type:"png",label:"本地采集素材"},{id:"2691bc01b70c4aea6e8e2706ee7d6cf9",src:"/assets/collected/2691bc01b70c4aea6e8e2706ee7d6cf9.jpg",type:"jpg",label:"本地采集素材"},{id:"275171d7ac3f67dba86dea6d213e75a1",src:"/assets/collected/275171d7ac3f67dba86dea6d213e75a1.png",type:"png",label:"本地采集素材"},{id:"2bf7d9e1e70726a91f0ba439e36990a2",src:"/assets/collected/2bf7d9e1e70726a91f0ba439e36990a2.jpg",type:"jpg",label:"本地采集素材"},{id:"2c6c79079ef39f3b22350f904442715c",src:"/assets/collected/2c6c79079ef39f3b22350f904442715c.jpg",type:"jpg",label:"本地采集素材"},{id:"2e893155afc5490962042b940759d35c",src:"/assets/collected/2e893155afc5490962042b940759d35c.png",type:"png",label:"本地采集素材"},{id:"2fdbc0300df013de14debb9db68d64d7",src:"/assets/collected/2fdbc0300df013de14debb9db68d64d7.jpg",type:"jpg",label:"本地采集素材"},{id:"324910dabd935b3b9fc53691ac2c649b",src:"/assets/collected/324910dabd935b3b9fc53691ac2c649b.png",type:"png",label:"本地采集素材"},{id:"34c98322b14ccc7f47c9ab92a6df184a",src:"/assets/collected/34c98322b14ccc7f47c9ab92a6df184a.jpg",type:"jpg",label:"本地采集素材"},{id:"35dc1a9b5612b397206e2ebf84d07780",src:"/assets/collected/35dc1a9b5612b397206e2ebf84d07780.jpg",type:"jpg",label:"本地采集素材"},{id:"3708619f6bed006638e9fbc7ea411e04",src:"/assets/collected/3708619f6bed006638e9fbc7ea411e04.jpg",type:"jpg",label:"本地采集素材"},{id:"3ac372d48709177036177764830b849e",src:"/assets/collected/3ac372d48709177036177764830b849e.jpg",type:"jpg",label:"本地采集素材"},{id:"3d0469c6ff646794023faf609e637939",src:"/assets/collected/3d0469c6ff646794023faf609e637939.png",type:"png",label:"本地采集素材"},{id:"3f17a3f7b548c8c32c7492cac0fa86eb",src:"/assets/collected/3f17a3f7b548c8c32c7492cac0fa86eb.png",type:"png",label:"本地采集素材"},{id:"4b8c9b2cbba29e814bb7ce2fe0953107",src:"/assets/collected/4b8c9b2cbba29e814bb7ce2fe0953107.png",type:"png",label:"本地采集素材"},{id:"4d0cb2417a23d896335cddf73f442da1",src:"/assets/collected/4d0cb2417a23d896335cddf73f442da1.png",type:"png",label:"本地采集素材"},{id:"4da996bff8295857987fc7f9f56b91b0",src:"/assets/collected/4da996bff8295857987fc7f9f56b91b0.png",type:"png",label:"本地采集素材"},{id:"530f782160a39b53cf8951ebc95aa7b7",src:"/assets/collected/530f782160a39b53cf8951ebc95aa7b7.jpg",type:"jpg",label:"本地采集素材"},{id:"54b24ed6b6f0b22af05359bf14f2dbc3",src:"/assets/collected/54b24ed6b6f0b22af05359bf14f2dbc3.png",type:"png",label:"本地采集素材"},{id:"58bd49b0928148989e0b4f815b8d279a",src:"/assets/collected/58bd49b0928148989e0b4f815b8d279a.png",type:"png",label:"本地采集素材"},{id:"594e82c876b9f35dc0be26dae405386d",src:"/assets/collected/594e82c876b9f35dc0be26dae405386d.jpg",type:"jpg",label:"本地采集素材"},{id:"5bdeac4d4e4ec6612b382cbfaa270ee7",src:"/assets/collected/5bdeac4d4e4ec6612b382cbfaa270ee7.jpg",type:"jpg",label:"本地采集素材"},{id:"659ed3552cdfd5b0659f4dba2e49f8d8",src:"/assets/collected/659ed3552cdfd5b0659f4dba2e49f8d8.png",type:"png",label:"本地采集素材"},{id:"66b0da1261a8c1401fde337052745c02",src:"/assets/collected/66b0da1261a8c1401fde337052745c02.jpg",type:"jpg",label:"本地采集素材"},{id:"673982225804e7019209df35840bbf03",src:"/assets/collected/673982225804e7019209df35840bbf03.png",type:"png",label:"本地采集素材"},{id:"6b6fb65a39529d6efb573a4c990e4682",src:"/assets/collected/6b6fb65a39529d6efb573a4c990e4682.png",type:"png",label:"本地采集素材"},{id:"6f46c2e5a178aa7cc2a6393aa718ed05",src:"/assets/collected/6f46c2e5a178aa7cc2a6393aa718ed05.jpg",type:"jpg",label:"本地采集素材"},{id:"7ac1b46d27db0a05b32d96a8da2dba30",src:"/assets/collected/7ac1b46d27db0a05b32d96a8da2dba30.jpg",type:"jpg",label:"本地采集素材"},{id:"8106d0f42a9cbd09f4cd60fa946db380",src:"/assets/collected/8106d0f42a9cbd09f4cd60fa946db380.jpg",type:"jpg",label:"本地采集素材"},{id:"83392733fb8e3e4b475ba6aa1c0a90d8",src:"/assets/collected/83392733fb8e3e4b475ba6aa1c0a90d8.jpg",type:"jpg",label:"本地采集素材"},{id:"9038c7891ac392215722ce6608aa9ae1",src:"/assets/collected/9038c7891ac392215722ce6608aa9ae1.png",type:"png",label:"本地采集素材"},{id:"96c96855da17133eec54d41f762e460f",src:"/assets/collected/96c96855da17133eec54d41f762e460f.png",type:"png",label:"本地采集素材"},{id:"9973bc3eb72224ae3e9c4fa173b61c11",src:"/assets/collected/9973bc3eb72224ae3e9c4fa173b61c11.jpg",type:"jpg",label:"本地采集素材"},{id:"a008186996b5a9f46c8c03d5cf756b69",src:"/assets/collected/a008186996b5a9f46c8c03d5cf756b69.png",type:"png",label:"本地采集素材"},{id:"a102aae0cc43ae8aca1febbba5eba620",src:"/assets/collected/a102aae0cc43ae8aca1febbba5eba620.png",type:"png",label:"本地采集素材"},{id:"a248e54f8817dedfee01f2a1e424d3dc",src:"/assets/collected/a248e54f8817dedfee01f2a1e424d3dc.png",type:"png",label:"本地采集素材"},{id:"a5025258cbfafe3333a05ae6a2887fe0",src:"/assets/collected/a5025258cbfafe3333a05ae6a2887fe0.png",type:"png",label:"本地采集素材"},{id:"a6ee57472cd4a608ca0d99c85b252431",src:"/assets/collected/a6ee57472cd4a608ca0d99c85b252431.jpg",type:"jpg",label:"本地采集素材"},{id:"aaf63ef83c86bd848855be37bf7aea66",src:"/assets/collected/aaf63ef83c86bd848855be37bf7aea66.png",type:"png",label:"本地采集素材"},{id:"adb0e449f63cd23d42acd0cdace235ed",src:"/assets/collected/adb0e449f63cd23d42acd0cdace235ed.jpg",type:"jpg",label:"本地采集素材"},{id:"adcd1ee4c5be390784f052f28d09a4ce",src:"/assets/collected/adcd1ee4c5be390784f052f28d09a4ce.png",type:"png",label:"本地采集素材"},{id:"b76631d4954d917e54371641d9b46595",src:"/assets/collected/b76631d4954d917e54371641d9b46595.png",type:"png",label:"本地采集素材"},{id:"b83a4a44ed164163e3895f6573fb93e4",src:"/assets/collected/b83a4a44ed164163e3895f6573fb93e4.jpg",type:"jpg",label:"本地采集素材"},{id:"bdf4a5b824555bd323429e96ea687c31",src:"/assets/collected/bdf4a5b824555bd323429e96ea687c31.jpg",type:"jpg",label:"本地采集素材"},{id:"bff7aa846d3d407b880de891a9e4f6f9",src:"/assets/collected/bff7aa846d3d407b880de891a9e4f6f9.jpg",type:"jpg",label:"本地采集素材"},{id:"c2073e183b8aa8813f494875d96352b3",src:"/assets/collected/c2073e183b8aa8813f494875d96352b3.png",type:"png",label:"本地采集素材"},{id:"c382ef04972b7c084bb8e89c70976482",src:"/assets/collected/c382ef04972b7c084bb8e89c70976482.png",type:"png",label:"本地采集素材"},{id:"c52959dd9f41ff25b19684fb71194ef2",src:"/assets/collected/c52959dd9f41ff25b19684fb71194ef2.png",type:"png",label:"本地采集素材"},{id:"c5b5ec240c6263e68a233973ffa0fa28",src:"/assets/collected/c5b5ec240c6263e68a233973ffa0fa28.png",type:"png",label:"本地采集素材"},{id:"cc3613d3674fcc3d8669fb83b6804782",src:"/assets/collected/cc3613d3674fcc3d8669fb83b6804782.jpg",type:"jpg",label:"本地采集素材"},{id:"ce4739428e270e4332bf1703bfd11717",src:"/assets/collected/ce4739428e270e4332bf1703bfd11717.png",type:"png",label:"本地采集素材"},{id:"d1aea8bfc6c156c3269d85b252e416ab",src:"/assets/collected/d1aea8bfc6c156c3269d85b252e416ab.png",type:"png",label:"本地采集素材"},{id:"d68d85f766b2c565502e594ca7f7e5d5",src:"/assets/collected/d68d85f766b2c565502e594ca7f7e5d5.jpg",type:"jpg",label:"本地采集素材"},{id:"d7f179ec28ba0eea0fcfb1ead0edc69b",src:"/assets/collected/d7f179ec28ba0eea0fcfb1ead0edc69b.png",type:"png",label:"本地采集素材"},{id:"d82b7f3028f63eb14000e15b09869e2b",src:"/assets/collected/d82b7f3028f63eb14000e15b09869e2b.jpg",type:"jpg",label:"本地采集素材"},{id:"d92e1a3bfafc574d8adea527d99d492c",src:"/assets/collected/d92e1a3bfafc574d8adea527d99d492c.png",type:"png",label:"本地采集素材"},{id:"da1dfc74855a5bd7b8fb10bfca02c37f",src:"/assets/collected/da1dfc74855a5bd7b8fb10bfca02c37f.png",type:"png",label:"本地采集素材"},{id:"db4bb2dde73e7966c20bc3a9145ef4aa",src:"/assets/collected/db4bb2dde73e7966c20bc3a9145ef4aa.png",type:"png",label:"本地采集素材"},{id:"dc7b3f595c08ead49161a85f1b62458e",src:"/assets/collected/dc7b3f595c08ead49161a85f1b62458e.jpg",type:"jpg",label:"本地采集素材"},{id:"de78690463eebb2de88a4a74746cc1be",src:"/assets/collected/de78690463eebb2de88a4a74746cc1be.png",type:"png",label:"本地采集素材"},{id:"df201fbbb1ad9d14fe455e470acb3a20",src:"/assets/collected/df201fbbb1ad9d14fe455e470acb3a20.jpg",type:"jpg",label:"本地采集素材"},{id:"e051e2c5b0e1bf5cf8d2a00f59f5bd70",src:"/assets/collected/e051e2c5b0e1bf5cf8d2a00f59f5bd70.jpg",type:"jpg",label:"本地采集素材"},{id:"e7cc2dfc9d894bd2ba4129b022d8fe8e",src:"/assets/collected/e7cc2dfc9d894bd2ba4129b022d8fe8e.jpg",type:"jpg",label:"本地采集素材"},{id:"eac803ad793c736e3372d312e7023f45",src:"/assets/collected/eac803ad793c736e3372d312e7023f45.png",type:"png",label:"本地采集素材"},{id:"ecc422c955836351c9c7187a6d5ce98d",src:"/assets/collected/ecc422c955836351c9c7187a6d5ce98d.png",type:"png",label:"本地采集素材"},{id:"ed2aadad1f03f71c17858ef5b966757d",src:"/assets/collected/ed2aadad1f03f71c17858ef5b966757d.jpg",type:"jpg",label:"本地采集素材"},{id:"f102cfa7934a6e6c37fb1a6653628e43",src:"/assets/collected/f102cfa7934a6e6c37fb1a6653628e43.png",type:"png",label:"本地采集素材"},{id:"f68fc7941afa48ed3a3b502014198d6d",src:"/assets/collected/f68fc7941afa48ed3a3b502014198d6d.png",type:"png",label:"本地采集素材"},{id:"fab766042e42b53e823a3b8de34c1068",src:"/assets/collected/fab766042e42b53e823a3b8de34c1068.png",type:"png",label:"本地采集素材"},{id:"fe8860c17a0ef8c0b8fb414b6a7cb6f1",src:"/assets/collected/fe8860c17a0ef8c0b8fb414b6a7cb6f1.png",type:"png",label:"本地采集素材"},{id:"ff9bc2f738ba667416eefadce5454489",src:"/assets/collected/ff9bc2f738ba667416eefadce5454489.png",type:"png",label:"本地采集素材"}],c_=[{label:"首页",path:"/"},{label:"蓝印纹库",path:"/library"},{label:"她与蓝",path:"/heritage"},{label:"寻找你的蓝",path:"/find-blue"},{label:"纹脉工坊",path:"/patternx"}],Mf=[{key:"plant",name:"植物纹",title:"草木有灵",description:"缠枝莲、牡丹、梅兰竹菊，取法自然",patternClass:"pattern-floral",image:"/assets/categories/plant.jpg"},{key:"animal",name:"动物纹",title:"瑞兽祥禽",description:"龙凤呈祥、蝶恋花、鱼跃龙门",patternClass:"pattern-wing",image:"/assets/categories/animal.jpg"},{key:"auspicious",name:"吉祥纹",title:"福禄寿喜",description:"福字、寿字、八宝、暗八仙",patternClass:"pattern-coin",image:"/assets/categories/auspicious.jpg"},{key:"geometry",name:"几何纹",title:"方圆之道",description:"回纹、万字纹、方胜纹、盘长纹",patternClass:"pattern-grid",image:"/assets/categories/geometry.jpg"}],Sf=[{title:"刻版",short:"牛皮纸上刻出纹样",text:"将画稿覆在牛皮纸版上，用刻刀一点点镂刻出花纹轮廓。刀要稳，手要准，纹样的精神从这里开始。"},{title:"刮浆",short:"黄豆粉与石灰调成防染浆",text:"将黄豆粉、石灰调成防染浆，均匀刮在布面与花版之间。这层浆，是蓝与白之间最重要的界线。"},{title:"染色",short:"浸入靛蓝染缸，氧化显色",text:"布料浸入植物靛蓝染缸，出缸后与空气接触慢慢氧化，颜色由浅变深，靛蓝的生命从水中醒来。"},{title:"刮白",short:"刮去防染浆，露出白花",text:"待染色稳定后刮去防染浆，原本被保护的白色花纹显现出来，蓝白对比在这一刻最动人。"},{title:"清洗",short:"流水洗净浮色",text:"用清水洗去浮色和残浆，让纹样更清朗、布面更柔和。布料在水里舒展开来，像呼吸一样。"},{title:"晾晒",short:"阳光下晾干，靛蓝定格",text:"将布料悬挂晾晒，让风与阳光慢慢带走湿气，靛蓝与素白由此定格成日常生活里的美。"}],Cn=Sf.map(n=>n.short),u_=[{id:"chanzhi-lian",name:"缠枝莲纹",category:"plant",categoryName:"植物纹",patternClass:"pattern-floral",meaning:"生生不息，连绵不断",meaningDetail:"缠枝莲纹以莲花为主体，藤蔓缠绕连绵，寓意生生不息。在蓝印花布中，它寄托了江南人家对家族兴旺、绵延不绝的美好祈愿。",story:"相传大临村的缠枝莲纹源于宋元以来的民间布样。每逢婚嫁，母亲常以莲花与藤蔓入纹，祝愿女儿的新家清正和美、根脉相连。",era:"明清",usage:"被面、包袱布、帐檐",technique:Cn,modernUse:["丝巾图案","文创包装","展陈导视"],relatedIds:["mudan","shiliu","huiwen"],tags:["莲花","缠枝","植物","智慧","清雅"]},{id:"mudan",name:"牡丹团花纹",category:"plant",categoryName:"植物纹",patternClass:"pattern-rosette",meaning:"花开富贵，圆满安康",meaningDetail:"牡丹团花构图饱满，常用于节庆和婚嫁布品，表达富贵、圆满与热闹的生活愿望。",story:"大临村老布样中，牡丹常与蝴蝶、团寿、回纹组合，既有喜庆气，也有民间礼俗中的祝福秩序。",era:"明清",usage:"婚嫁被面、桌围、礼布",technique:Cn,modernUse:["伴手礼包装","抱枕面料","节庆海报"],relatedIds:["chanzhi-lian","shuangxi","hudie"],tags:["牡丹","富贵","团花","喜庆"]},{id:"shiliu",name:"石榴团圆纹",category:"plant",categoryName:"植物纹",patternClass:"pattern-seed",meaning:"多子多福，家族团圆",meaningDetail:"石榴籽粒繁多，寓意家族兴旺、团圆丰足，是礼俗布样中常见的祝福纹样。",story:"旧时嫁妆布中常见石榴与卷草相伴，既好看，也把长辈对新家庭的祝愿藏进一针一线。",era:"清代",usage:"嫁妆布、包袱布、礼盒布",technique:Cn,modernUse:["礼盒内衬","桌旗","节日贴纸"],relatedIds:["mudan","chanzhi-lian","shouzi"],tags:["石榴","团圆","多福","植物"]},{id:"hudie",name:"蝶恋花纹",category:"animal",categoryName:"动物纹",patternClass:"pattern-wing",meaning:"破茧成蝶，自由美好",meaningDetail:"蝴蝶轻盈灵动，常与花草相伴，寓意爱情、美好与生命转化。",story:"蝶恋花在民间布样中很受欢迎，轻巧的蝶形可以让沉静的靛蓝布面有一种活泼的呼吸感。",era:"清代",usage:"丝巾、发带、衣饰边纹",technique:Cn,modernUse:["服饰印花","手机壁纸","明信片"],relatedIds:["mudan","yu-lian","longfeng"],tags:["蝴蝶","自由","爱情","动物"]},{id:"yu-lian",name:"鱼跃莲纹",category:"animal",categoryName:"动物纹",patternClass:"pattern-wave",meaning:"年年有余，生机流动",meaningDetail:"鱼与莲组合，谐音连年有余，表达生活丰足与生命流动。",story:"江南水乡的鱼、莲、波纹常常同框出现，既来自眼前生活，也沉淀成民间祝福。",era:"明清",usage:"儿童布品、方巾、挂布",technique:Cn,modernUse:["儿童文创","帆布袋","互动纹样背景"],relatedIds:["chanzhi-lian","hudie","huiwen"],tags:["鱼","莲","有余","动物"]},{id:"longfeng",name:"龙凤呈祥纹",category:"animal",categoryName:"动物纹",patternClass:"pattern-cloud",meaning:"祥瑞圆满，喜庆成双",meaningDetail:"龙凤是礼俗纹样中的重要符号，常用于婚庆、祝福与大型陈设。",story:"龙凤纹在蓝印花布中会被简化成更适合刻版的线条，保留气势，也适合反复印染。",era:"清代",usage:"婚礼布置、门帘、挂幛",technique:Cn,modernUse:["展览主视觉","礼品包装","屏风纹样"],relatedIds:["shuangxi","mudan","shouzi"],tags:["龙凤","祥瑞","婚庆","动物"]},{id:"shouzi",name:"团寿字纹",category:"auspicious",categoryName:"吉祥纹",patternClass:"pattern-shou",meaning:"福寿双全，圆满长久",meaningDetail:"寿字经过团形化处理，构图稳定，寓意健康长寿与家宅圆满。",story:"祝寿布、厅堂陈设中常见团寿字，蓝底白字庄重清朗，很适合做中心纹。",era:"明清",usage:"祝寿布、被面、厅堂挂布",technique:Cn,modernUse:["茶礼包装","挂画","长辈礼品"],relatedIds:["huiwen","wufu","mudan"],tags:["寿","长寿","吉祥","团形"]},{id:"shuangxi",name:"双喜团花纹",category:"auspicious",categoryName:"吉祥纹",patternClass:"pattern-doublehappy",meaning:"喜事成双，良缘圆满",meaningDetail:"双喜纹是婚嫁礼俗中最直观的祝福符号，常与牡丹、莲花、蝴蝶搭配。",story:"在旧时婚嫁布置中，双喜纹既是装饰，也是仪式语言，让喜庆被看见、被记住。",era:"清代",usage:"婚嫁布、红包封、礼布",technique:Cn,modernUse:["婚礼伴手礼","红包封套","节庆海报"],relatedIds:["mudan","hudie","longfeng"],tags:["双喜","喜庆","婚嫁","吉祥"]},{id:"wufu",name:"五福蝠纹",category:"auspicious",categoryName:"吉祥纹",patternClass:"pattern-wing",meaning:"五福临门，福气绵延",meaningDetail:"蝙蝠取福的谐音，五蝠围合表达长寿、富贵、康宁、好德、善终的传统祝愿。",story:"民间图像常用谐音讲祝福，五福纹就是把语言、图案和愿望压进一块布里的例子。",era:"明清",usage:"门帘、礼品布、垫布",technique:Cn,modernUse:["家居软装","新年礼盒","导视图标"],relatedIds:["shouzi","huiwen","shuangxi"],tags:["五福","蝙蝠","平安","吉祥"]},{id:"huiwen",name:"回纹",category:"geometry",categoryName:"几何纹",patternClass:"pattern-grid",meaning:"回环不断，平安长久",meaningDetail:"回纹以连续折线构成循环结构，寓意周而复始、平安绵长。",story:"回纹常作为边饰出现，像给一块布加上秩序清晰的边界，也让主纹样更有仪式感。",era:"明清",usage:"边饰、帐檐、器物装饰",technique:Cn,modernUse:["网页边框","包装腰封","导视系统"],relatedIds:["shouzi","fangsheng","yu-lian"],tags:["回纹","平安","几何","边饰"]},{id:"fangsheng",name:"方胜纹",category:"geometry",categoryName:"几何纹",patternClass:"pattern-diamond",meaning:"同心相连，方正有序",meaningDetail:"方胜纹由菱形或方形连续组合，象征连接、守护与稳定。",story:"几何纹在蓝印花布中很适合大面积铺陈，蓝白节奏明确，也方便今天转译成数字图形。",era:"明清",usage:"包袱布、桌布、服饰底纹",technique:Cn,modernUse:["品牌辅助纹样","桌垫","网页背景"],relatedIds:["huiwen","pan-chang","chanzhi-lian"],tags:["方胜","几何","秩序","现代"]},{id:"pan-chang",name:"盘长纹",category:"geometry",categoryName:"几何纹",patternClass:"pattern-knot",meaning:"连绵不绝，福运长久",meaningDetail:"盘长纹线条回环不断，是传统吉祥符号中关于延续和连接的表达。",story:"盘长纹很像一条不断回到自身的路，适合表达家族、手艺和地方记忆的延续。",era:"明清",usage:"边框、礼布、门帘",technique:Cn,modernUse:["纪念票券","包装纹样","交互背景"],relatedIds:["huiwen","fangsheng","wufu"],tags:["盘长","几何","延续","福运"]}],qu={hudie:{previewImage:"/assets/collected/e051e2c5b0e1bf5cf8d2a00f59f5bd70.jpg",texturePolarity:"light"},"yu-lian":{previewImage:"/assets/collected/adb0e449f63cd23d42acd0cdace235ed.jpg",texturePolarity:"dark",textureCrop:.105},longfeng:{previewImage:"/assets/collected/17c2bbe479aaa0a10a14425a3f40c241.png",texturePolarity:"dark"}},gn=u_.map((n,e)=>{var t,i;return{...n,...qu[n.id],previewImage:((t=qu[n.id])==null?void 0:t.previewImage)||((i=Wi[e%Wi.length])==null?void 0:i.src)}}),h_={class:"site-header"},d_=["onClick"],f_={class:"header-actions"},p_={__name:"SiteHeader",props:{routeName:{type:String,required:!0},routePath:{type:String,required:!0}},emits:["navigate"],setup(n,{emit:e}){const t=e,i=et(!1);function s(r){i.value=!1,t("navigate",r)}return(r,a)=>(oe(),ye("header",h_,[m("button",{class:"brand",type:"button",onClick:a[0]||(a[0]=o=>s("/"))},[...a[3]||(a[3]=[m("img",{class:"brand-logo",src:gf,alt:"大临蓝印 logo"},null,-1),m("strong",null,"大临蓝印",-1)])]),m("nav",{class:Et({open:i.value})},[(oe(!0),ye(at,null,xt(de(c_),o=>(oe(),ye("button",{key:o.path,type:"button",class:Et({active:n.routePath===o.path||o.path==="/library"&&n.routeName==="pattern"||o.path==="/find-blue"&&n.routePath.startsWith("/find-blue")}),onClick:l=>s(o.path)},me(o.label),11,d_))),128))],2),m("div",f_,[m("button",{class:"icon-button",type:"button","aria-label":"搜索",onClick:a[1]||(a[1]=o=>s("/library"))},[Se(de(yf),{size:19})]),m("button",{class:"icon-button menu-button",type:"button","aria-label":"菜单",onClick:a[2]||(a[2]=o=>i.value=!i.value)},[i.value?(oe(),It(de(ar),{key:1,size:20})):(oe(),It(de(Jg),{key:0,size:20}))])])]))}};function m_(){const n=et(window.location.pathname),e=St(()=>n.value==="/library"?"library":n.value.startsWith("/pattern/")?"pattern":n.value==="/heritage"?"heritage":n.value==="/find-blue"?"find-menu":n.value==="/find-blue/card"?"find-card":n.value==="/find-blue/game"?"find-game":n.value==="/patternx"?"patternx":"home");function t(s){n.value!==s&&(window.history.pushState({},"",s),n.value=window.location.pathname),window.scrollTo({top:0,behavior:"smooth"})}function i(){n.value=window.location.pathname}return pr(()=>{window.addEventListener("popstate",i)}),Ss(()=>{window.removeEventListener("popstate",i)}),{routeName:e,routePath:n,navigate:t}}const ua=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},g_={class:"blue-card-studio"},__={key:0,class:"quiz-panel"},v_={class:"quiz-progress"},x_={class:"quiz-question"},y_={class:"quiz-options"},b_=["onClick"],M_={key:1,class:"card-preview-panel"},S_=["src","alt"],E_={class:"personality-card-copy"},T_={class:"selected-tags"},w_={class:"studio-actions result-actions"},A_={__name:"BlueCardStudio",setup(n){const e=et([]),t=et(""),i=[{title:"旅行到大临村，你最先被什么吸引？",options:[{text:"老街、河道和安静的生活气息",trait:"steady"},{text:"工坊里一双双正在制作的手",trait:"warm"},{text:"蓝白纹样里不断重复的秩序",trait:"wise"},{text:"可以亲手体验的新鲜感",trait:"free"}]},{title:"面对一件需要耐心完成的事，你通常会？",options:[{text:"按步骤慢慢推进",trait:"steady"},{text:"先理解它背后的意义",trait:"wise"},{text:"边做边找新的方法",trait:"free"},{text:"希望和身边人一起完成",trait:"warm"}]},{title:"你更喜欢哪一种蓝印花布寓意？",options:[{text:"平安长久",trait:"steady"},{text:"花开富贵",trait:"joyful"},{text:"生生不息",trait:"resilient"},{text:"自在生长",trait:"free"}]},{title:"朋友眼中的你更接近？",options:[{text:"可靠，能让人安心",trait:"steady"},{text:"热情，愿意照顾别人",trait:"warm"},{text:"清醒，善于观察判断",trait:"wise"},{text:"有趣，喜欢尝试变化",trait:"free"}]},{title:"如果把一天交给你安排，你会选择？",options:[{text:"走一条熟悉但舒服的路线",trait:"steady"},{text:"约上亲友一起吃饭聊天",trait:"warm"},{text:"看展、读资料、慢慢理解一件事",trait:"wise"},{text:"临时出发，遇见什么算什么",trait:"free"}]},{title:"你希望这张蓝印卡给你什么力量？",options:[{text:"稳稳向前",trait:"steady"},{text:"被爱与好运围绕",trait:"joyful"},{text:"在低谷里继续生长",trait:"resilient"},{text:"保持心里的清明",trait:"wise"}]},{title:"看到复杂纹样时，你会先注意到？",options:[{text:"边框和对称结构",trait:"steady"},{text:"花朵与枝蔓的生命感",trait:"resilient"},{text:"里面藏着的祝福符号",trait:"joyful"},{text:"它可以被重新设计的可能",trait:"free"}]},{title:"离开大临村时，你最想带走？",options:[{text:"一份安定的记忆",trait:"steady"},{text:"一份给家人的祝福",trait:"warm"},{text:"一份继续探索的灵感",trait:"free"},{text:"一份关于传统的理解",trait:"wise"}]}],s={steady:{title:"静水守心型",patternId:"huiwen",blessing:"愿你岁岁平安，步履从容，心中常有安定的蓝。",summary:"你重视秩序、稳定和长久的陪伴。适合你的蓝印纹样，像回纹一样周而复始，把平安与耐心织进日常。"},warm:{title:"暖枝相伴型",patternId:"shiliu",blessing:"愿你所到之处皆有温情，家人团圆，福气生长。",summary:"你很在意人与人之间的连接，也愿意把好运分享给身边的人。石榴团圆纹适合这种温暖、丰足的性格。"},wise:{title:"清蓝观照型",patternId:"chanzhi-lian",blessing:"愿你心有清明，见微知著，在纷繁里保持自己的判断。",summary:"你喜欢理解事物背后的脉络，安静却有力量。缠枝莲纹的连绵结构，像你对世界持续而细致的观察。"},free:{title:"风蝶自在型",patternId:"hudie",blessing:"愿你自由生长，所行皆有新意，所遇皆成风景。",summary:"你愿意尝试、变化，也愿意让生活保持弹性。蝶恋花纹轻盈灵动，适合你的自在与好奇。"},resilient:{title:"青藤生生型",patternId:"pan-chang",blessing:"愿你穿过风雨仍能生长，福运绵延，心力不断。",summary:"你有韧性，遇到困难也会慢慢找到出路。盘长纹回环不绝，正适合这种持续向前的生命力。"},joyful:{title:"喜花迎福型",patternId:"mudan",blessing:"愿你花开富贵，喜气常在，每一天都有热闹的好光景。",summary:"你容易被美好、庆祝和丰盛的气氛打动。牡丹团花纹饱满明亮，适合你的喜悦和好运感。"}},r=St(()=>Math.min(e.value.length,i.length-1)),a=St(()=>i[r.value]),o=St(()=>e.value.length===i.length),l=St(()=>Math.round(e.value.length/i.length*100)),c=St(()=>{var I;const y=e.value.reduce((C,M)=>(C[M.trait]=(C[M.trait]||0)+1,C),{});return((I=Object.entries(y).sort((C,M)=>M[1]-C[1])[0])==null?void 0:I[0])||"steady"}),u=St(()=>s[c.value]),h=St(()=>gn.find(y=>y.id===u.value.patternId)||gn[0]),d=St(()=>e.value.map(y=>y.text)),f=St(()=>`/assets/personality-card/${u.value.patternId}.jpg`);function _(y){o.value||(e.value=[...e.value,y],e.value.length===i.length&&g())}function x(){e.value=[],t.value=""}function g(){t.value=new Intl.DateTimeFormat("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(new Date)}function p(y){return String(y).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;")}function R(y,I,C,M,D,E){const S=[];for(let L=0;L<y.length;L+=M)S.push(y.slice(L,L+M));return S.map((L,O)=>`<text x="${I}" y="${C+O*D}" ${E}>${p(L)}</text>`).join("")}function A(){if(!o.value)return;const y=h.value,I=u.value,M=`
    <svg xmlns="http://www.w3.org/2000/svg" width="960" height="1280" viewBox="0 0 960 1280">
      <rect width="960" height="1280" fill="#f7f5f0"/>
      <rect x="64" y="64" width="832" height="1152" rx="34" fill="#1a3a5c"/>
      <g fill="#f7f5f0" opacity=".88">${Array.from({length:9}).map((L,O)=>Array.from({length:6}).map((U,G)=>{const ie=150+G*132,Z=150+O*78;return`<circle cx="${ie}" cy="${Z}" r="14"/><circle cx="${ie+22}" cy="${Z+22}" r="10"/><circle cx="${ie-22}" cy="${Z+22}" r="10"/>`}).join("")).join("")}</g>
      <rect x="112" y="680" width="736" height="420" rx="26" fill="#f7f5f0" opacity=".96"/>
      <text x="152" y="750" fill="#4a7ba7" font-size="24" font-family="sans-serif" font-weight="700" letter-spacing="4">DALIN BLUE CALICO</text>
      <text x="152" y="830" fill="#0d1f33" font-size="58" font-family="serif" font-weight="700">${p(I.title)}</text>
      <text x="152" y="900" fill="#1a3a5c" font-size="38" font-family="serif" font-weight="700">${p(y.name)}</text>
      ${R(I.blessing,152,960,18,36,'fill="#2c2c2c" font-size="28" font-family="sans-serif"')}
      <text x="152" y="1112" fill="#8a8580" font-size="22" font-family="sans-serif">生成时间：${p(t.value)}</text>
    </svg>`,D=new Blob([M],{type:"image/svg+xml;charset=utf-8"}),E=URL.createObjectURL(D),S=document.createElement("a");S.href=E,S.download=`大临蓝印-${I.title}-${y.name}.svg`,S.click(),URL.revokeObjectURL(E)}return(y,I)=>(oe(),ye("div",g_,[m("div",{class:Et(["personality-layout",{complete:o.value}])},[o.value?Rt("",!0):(oe(),ye("section",__,[m("div",v_,[m("span",null,me(e.value.length)+"/"+me(i.length),1),m("div",null,[m("i",{style:Un({width:`${l.value}%`})},null,4)])]),m("div",x_,[I[0]||(I[0]=m("p",{class:"eyebrow"},"Blue Personality Test",-1)),m("h3",null,me(a.value.title),1),m("div",y_,[(oe(!0),ye(at,null,xt(a.value.options,C=>(oe(),ye("button",{key:C.text,type:"button",onClick:M=>_(C)},[nt(me(C.text)+" ",1),Se(de(ri),{size:16})],8,b_))),128))])])])),o.value?(oe(),ye("section",M_,[m("article",{class:Et(["blue-personality-card",{ready:o.value}])},[m("img",{class:"blue-card-pattern",src:f.value,alt:h.value.name},null,8,S_),m("div",E_,[I[1]||(I[1]=m("p",{class:"eyebrow"},"大临蓝印 · 性格纹样卡",-1)),m("h2",null,me(u.value.title),1),m("h3",null,me(h.value.name),1),m("p",null,me(u.value.blessing),1),m("div",T_,[(oe(!0),ye(at,null,xt(d.value.slice(-3),C=>(oe(),ye("span",{key:C},me(C),1))),128))]),m("small",null,me(t.value),1)])],2),m("div",w_,[m("button",{class:"primary-button",type:"button",onClick:A},[Se(de(Ul),{size:18}),I[2]||(I[2]=nt(" 下载保存卡片 ",-1))]),m("button",{class:"secondary-button",type:"button",onClick:x},[Se(de(xf),{size:18}),I[3]||(I[3]=nt(" 重新测试 ",-1))])])])):Rt("",!0)],2)]))}},C_=ua(A_,[["__scopeId","data-v-d30f0583"]]),R_={class:"section top-section find-blue-card-page"},P_={__name:"FindBlueCardPage",emits:["navigate"],setup(n){return(e,t)=>(oe(),ye("section",R_,[m("button",{class:"text-link back-link",type:"button",onClick:t[0]||(t[0]=i=>e.$emit("navigate","/find-blue"))},[Se(de(xs),{size:17}),t[1]||(t[1]=nt(" 返回体验菜单 ",-1))]),t[2]||(t[2]=m("div",{class:"page-heading"},[m("p",{class:"eyebrow"},"Blue Personality Test"),m("h1",null,"专属蓝印性格卡"),m("p",null,"回答 8 个问题，生成与你性格相合的蓝印花布纹样、祝福语和可下载纪念卡。")],-1)),Se(C_)]))}},D_="/assets/games/flip/card-back.jpg",L_={class:"memory-game"},I_={class:"game-sidebar"},U_={class:"game-stats"},N_={class:"game-layout"},F_={class:"board-shell"},O_=["onClick"],k_={class:"memory-card-inner"},B_={class:"memory-card-face memory-card-front"},z_=["src","alt"],H_={class:"knowledge-panel-card"},V_=["src","alt"],G_={class:"knowledge-panel-copy"},W_={key:0,class:"result-overlay"},X_={class:"result-card"},$_={class:"result-grid"},q_={__name:"PatternMemoryGame",setup(n){const e=[{id:"lion",name:"瑞狮纳福纹",category:"瑞兽纹",image:"/assets/games/flip/pattern-01.png",meaning:"镇宅纳福，吉庆安康",desc:"瑞狮纹常见于蓝印花布被面、门帘与嫁妆织物，借威严兽形寄托守护家宅、迎祥纳福的愿望。"},{id:"fish-lotus",name:"连年有余纹",category:"民俗纹样",image:"/assets/games/flip/pattern-02.jpg",meaning:"年年富足，阖家圆满",desc:"鱼与莲花谐音成意，是大临村传统被面经典纹样，适合表达丰收、团圆与绵延不断的生活祝福。"},{id:"peony",name:"牡丹富贵纹",category:"花草纹",image:"/assets/games/flip/pattern-03.jpg",meaning:"花开富贵，生活兴旺",desc:"牡丹纹以饱满花形表现富贵气象，蓝白留白之间呈现朴素而隆重的民间审美。"},{id:"pomegranate",name:"石榴多子纹",category:"花草纹",image:"/assets/games/flip/pattern-04.jpg",meaning:"多子多福，家族兴旺",desc:"石榴籽粒繁密，常被用于婚嫁和家用布饰，寓意人丁兴旺与福气延续。"},{id:"shou",name:"团寿吉祥纹",category:"福寿纹",image:"/assets/games/flip/pattern-05.jpg",meaning:"福寿绵长，平安顺遂",desc:"寿字与团形结构结合，讲究对称与秩序，是蓝印花布中辨识度很高的祝寿类纹样。"},{id:"butterfly",name:"蝶恋花纹",category:"花草纹",image:"/assets/games/flip/pattern-06.jpg",meaning:"美满相伴，春意常在",desc:"蝴蝶与花卉组合轻盈灵动，常用于表现生活中的喜悦、爱意与自然生机。"},{id:"crane",name:"仙鹤延年纹",category:"瑞兽纹",image:"/assets/games/flip/pattern-07.png",meaning:"延年益寿，清雅高洁",desc:"仙鹤在传统图像中象征长寿与高洁，蓝印花布用简练的蓝白块面保留其舒展姿态。"},{id:"gourd",name:"葫芦福禄纹",category:"民俗纹样",image:"/assets/games/flip/pattern-08.jpg",meaning:"福禄双全，辟邪纳祥",desc:"葫芦与福禄谐音，形体饱满，常被民间用来表达护佑、丰足与平安。"},{id:"plum",name:"梅开五福纹",category:"花草纹",image:"/assets/games/flip/pattern-09.jpg",meaning:"坚韧清雅，五福临门",desc:"梅花不畏寒霜，蓝印花布中的梅花纹通过枝蔓与花点变化表现坚韧品格。"},{id:"phoenix",name:"凤穿牡丹纹",category:"瑞兽纹",image:"/assets/games/flip/pattern-10.png",meaning:"吉祥华美，富贵和合",desc:"凤鸟与牡丹组合常见于喜庆织物，体现民间对婚姻美满与家业兴盛的祝愿。"},{id:"coin",name:"方胜盘长纹",category:"几何纹",image:"/assets/games/flip/pattern-11.jpg",meaning:"连续不断，事事如意",desc:"几何纹样重视连续构成，方胜与盘长结构适合作为边饰或满地纹，象征福泽不断。"},{id:"lotus",name:"莲花清廉纹",category:"花草纹",image:"/assets/games/flip/pattern-12.jpg",meaning:"清正雅洁，和美安宁",desc:"莲花纹以舒展花瓣和叶形构成画面中心，在蓝印工艺中呈现清爽、端正的视觉气质。"}],t={standard:{label:"进阶 12 张",pairs:6,cols:4}},i=et("standard"),s=et([]),r=et([]),a=et(0),o=et(0),l=et(0),c=et(!1),u=et(!1),h=et(null),d=et(!1);let f=null,_=null;const x=St(()=>t[i.value].pairs),g=St(()=>Math.ceil(s.value.length/t[i.value].cols)),p=St(()=>({"--board-cols":String(t[i.value].cols),"--board-rows":String(g.value),gridTemplateColumns:`repeat(${t[i.value].cols}, minmax(0, 1fr))`,gridTemplateRows:`repeat(${g.value}, minmax(0, 1fr))`})),R=St(()=>i.value==="standard"&&l.value<=55&&o.value<=10?"蓝印识纹达人":o.value<=16?"非遗纹样初学者":"初识大临蓝印");function A(O){const U=[...O];for(let G=U.length-1;G>0;G-=1){const ie=Math.floor(Math.random()*(G+1));[U[G],U[ie]]=[U[ie],U[G]]}return U}function y(O){const U=String(Math.floor(O/60)).padStart(2,"0"),G=String(O%60).padStart(2,"0");return`${U}:${G}`}function I(){c.value||(c.value=!0,f=window.setInterval(()=>{l.value+=1},1e3))}function C(){window.clearInterval(f),f=null}function M(){const O=A(e).slice(0,t[i.value].pairs);return A(O.flatMap(U=>[{...U,cardId:`${U.id}-a`,state:"hidden"},{...U,cardId:`${U.id}-b`,state:"hidden"}]))}function D(O=i.value){C(),window.clearTimeout(_),i.value=O,s.value=M(),r.value=[],a.value=0,o.value=0,l.value=0,c.value=!1,u.value=!1,h.value=null,d.value=!1}function E(){window.clearTimeout(_),h.value=null}function S(O){if(u.value)return;const U=s.value.find(G=>G.cardId===O);!U||U.state!=="hidden"||(I(),U.state="open",r.value=[...r.value,U],r.value.length===2&&(o.value+=1,L()))}function L(){const[O,U]=r.value;if(u.value=!0,O.id===U.id){window.setTimeout(()=>{s.value.forEach(G=>{(G.cardId===O.cardId||G.cardId===U.cardId)&&(G.state="matched")}),a.value+=1,h.value=O,window.clearTimeout(_),_=window.setTimeout(()=>{h.value=null},3e3),r.value=[],u.value=!1,a.value===x.value&&(C(),d.value=!0)},320);return}window.setTimeout(()=>{s.value.forEach(G=>{(G.cardId===O.cardId||G.cardId===U.cardId)&&(G.state="hidden")}),r.value=[],u.value=!1},760)}return Ss(()=>{C(),window.clearTimeout(_)}),D(),(O,U)=>(oe(),ye("div",L_,[m("aside",I_,[U[6]||(U[6]=m("div",{class:"game-title"},[m("p",{class:"eyebrow"},"Blue Calico Match"),m("h3",null,"蓝印纹样翻翻乐")],-1)),m("div",U_,[m("article",null,[Se(de(Xg),{size:18}),U[2]||(U[2]=m("span",null,"用时",-1)),m("strong",null,me(y(l.value)),1)]),m("article",null,[U[3]||(U[3]=m("span",null,"步数",-1)),m("strong",null,me(o.value),1)]),m("article",null,[Se(de(r_),{size:18}),U[4]||(U[4]=m("span",null,"配对",-1)),m("strong",null,me(a.value)+"/"+me(x.value),1)])]),m("button",{class:"secondary-button",type:"button",onClick:U[0]||(U[0]=G=>D())},[Se(de(xf),{size:16}),U[5]||(U[5]=nt(" 重新开始 ",-1))])]),m("section",N_,[m("div",F_,[m("div",{class:"board",style:Un(p.value)},[(oe(!0),ye(at,null,xt(s.value,G=>(oe(),ye("button",{key:G.cardId,type:"button",class:Et(["memory-card",[`state-${G.state}`]]),onClick:ie=>S(G.cardId)},[m("span",k_,[U[7]||(U[7]=m("span",{class:"memory-card-face memory-card-back"},[m("img",{class:"memory-card-back-image",src:D_,alt:""})],-1)),m("span",B_,[m("img",{src:G.image,alt:G.name},null,8,z_)])])],10,O_))),128))],4)]),Se(Fc,{name:"knowledge-panel"},{default:_o(()=>[h.value?(oe(),ye("aside",{key:0,class:"knowledge-panel-overlay",onClick:E},[m("div",H_,[m("img",{src:h.value.image,alt:h.value.name},null,8,V_),m("div",G_,[U[8]||(U[8]=m("p",{class:"eyebrow"},"配对成功",-1)),m("h4",null,me(h.value.name),1),m("strong",null,me(h.value.meaning),1),m("p",null,me(h.value.desc),1),m("span",null,me(h.value.category),1)]),m("button",{type:"button",class:"knowledge-close","aria-label":"关闭纹样介绍",onClick:E},[Se(de(ar),{size:18})])])])):Rt("",!0)]),_:1})]),d.value?(oe(),ye("div",W_,[m("div",X_,[U[11]||(U[11]=m("p",{class:"eyebrow"},"全部配对完成",-1)),m("h4",null,me(R.value),1),m("div",$_,[m("article",null,[U[9]||(U[9]=m("span",null,"本局用时",-1)),m("strong",null,me(y(l.value)),1)]),m("article",null,[U[10]||(U[10]=m("span",null,"总步数",-1)),m("strong",null,me(o.value),1)])]),m("p",null,"你完成了 "+me(x.value)+" 组蓝印花布纹样配对，在翻牌中记住了纹样名称、寓意和文化背景。",1),m("button",{class:"primary-button",type:"button",onClick:U[1]||(U[1]=G=>D())},"再来一局")])])):Rt("",!0)]))}},Y_=ua(q_,[["__scopeId","data-v-56c02213"]]),j_={class:"find-game-header"},K_={__name:"FindBlueGamePage",emits:["navigate"],setup(n){return pr(()=>{document.documentElement.classList.add("game-lock-scroll")}),Ss(()=>{document.documentElement.classList.remove("game-lock-scroll")}),(e,t)=>(oe(),ye("section",{class:"section top-section find-game-page",onWheel:t[1]||(t[1]=Kt(()=>{},["prevent"]))},[m("div",j_,[m("button",{class:"text-link back-link",type:"button",onClick:t[0]||(t[0]=i=>e.$emit("navigate","/find-blue"))},[Se(de(xs),{size:17}),t[2]||(t[2]=nt(" 返回体验菜单 ",-1))]),t[3]||(t[3]=m("div",{class:"page-heading"},[m("p",{class:"eyebrow"},"Pattern Memory Game"),m("h1",null,"蓝印纹样翻翻乐")],-1))]),Se(Y_)],32))}},Z_={class:"find-menu-page"},J_={class:"find-menu-stage"},Q_={class:"find-carousel","aria-label":"互动体验轮播菜单"},e0=["onClick"],t0=["src","alt"],n0={key:1,class:"card-cover-intro"},i0={key:2,class:"card-copy"},s0={key:3,class:"card-action"},r0={class:"find-menu-footer"},a0={class:"find-menu-actions"},o0={class:"find-menu-dots"},l0=["aria-label","onClick"],c0={__name:"FindBluePage",emits:["navigate"],setup(n,{emit:e}){const t=e,i=[{key:"card",title:"专属蓝印卡",subtitle:"选择你的寓意",description:"从平安、富贵、长寿、团圆中选取心意，生成属于你的蓝印纹样卡。",path:"/find-blue/card",cover:"/assets/find-blue/card-cover.png",accent:"柔和生成",status:"available"},{key:"game",title:"纹样翻翻乐",subtitle:"翻牌识纹样",description:"在配对互动里认识大临村蓝印花布的经典图案，边玩边记住它们的寓意。",path:"/find-blue/game",cover:"/assets/find-blue/memory-cover.png",accent:"互动挑战",status:"available"},{key:"coming-soon",title:"更多体验",subtitle:"持续更新中",description:"后续将加入更多与蓝印花布相关的互动体验，形成完整的数字游览路径。",path:"",cover:"",accent:"敬请期待",status:"coming"}],s=et(1);function r(){s.value=(s.value-1+i.length)%i.length}function a(){s.value=(s.value+1)%i.length}function o(c){const u=(c-s.value+i.length)%i.length;return u===0?"is-center":u===1?"is-right":"is-left"}function l(c){if(c!==s.value){s.value=c;return}i[c].status==="available"&&t("navigate",i[c].path)}return(c,u)=>(oe(),ye("section",Z_,[u[2]||(u[2]=m("div",{class:"find-menu-hero"},[m("p",{class:"find-menu-kicker"},"SELECT YOUR BLUE EXPERIENCE"),m("h1",null,"寻找你的蓝")],-1)),m("div",J_,[m("button",{class:"carousel-arrow left",type:"button","aria-label":"上一个体验",onClick:r},[Se(de(xs),{size:24})]),m("div",Q_,[(oe(),ye(at,null,xt(i,(h,d)=>m("button",{key:h.key,type:"button",class:Et(["find-carousel-card",[o(d),{disabled:h.status!=="available","has-cover":!!h.cover}]]),onClick:f=>l(d)},[h.cover?(oe(),ye("img",{key:0,class:"card-cover-image",src:h.cover,alt:h.title},null,8,t0)):Rt("",!0),u[0]||(u[0]=m("span",{class:"card-overlay"},null,-1)),u[1]||(u[1]=m("span",{class:"card-noise"},null,-1)),h.cover?(oe(),ye("span",n0,[m("b",null,me(h.subtitle),1),m("small",null,me(h.description),1)])):Rt("",!0),h.cover?Rt("",!0):(oe(),ye("span",i0,[m("i",null,me(h.accent),1),m("strong",null,me(h.title),1),m("em",null,me(h.subtitle),1),m("small",null,me(h.description),1)])),h.cover?Rt("",!0):(oe(),ye("span",s0,[(oe(),It(Js(h.key==="card"?de(rr):h.key==="game"?de(Yg):de(rr)),{size:18})),nt(" "+me(h.status==="available"?"点击进入":"即将开放"),1)]))],10,e0)),64))]),m("button",{class:"carousel-arrow right",type:"button","aria-label":"下一个体验",onClick:a},[Se(de(ri),{size:24})])]),m("div",r0,[m("div",a0,[m("div",o0,[(oe(),ye(at,null,xt(i,(h,d)=>m("button",{key:h.key,type:"button",class:Et({active:s.value===d}),"aria-label":`切换到${h.title}`,onClick:f=>s.value=d},null,10,l0)),64))])])])]))}},u0=ua(c0,[["__scopeId","data-v-c506155d"]]),h0={class:"heritage-page section top-section"},d0={class:"heritage-hero heritage-visitor-hero"},f0={class:"page-heading heritage-visitor-copy"},p0={class:"heritage-hero-actions"},m0={class:"heritage-visitor-focus"},g0={class:"heritage-section"},_0={class:"heritage-story-grid"},v0={class:"heritage-section heritage-visit-section"},x0={class:"heritage-visit-path"},y0={class:"heritage-section"},b0={class:"heritage-process"},M0={class:"heritage-section"},S0={class:"heritage-gallery"},E0=["src","alt"],T0="/assets/heritage/dalin-workshop.png",w0={__name:"HeritagePage",emits:["navigate"],setup(n,{emit:e}){const t=e,i=[{src:"/assets/heritage/artisan-at-work.jpeg",alt:"传承人在花版上进行刮浆工序",caption:"手上的工艺：刮浆与花版"},{src:"/assets/heritage/artisan-portrait.png",alt:"蓝印花布传承人与工坊布样",caption:"工坊里的传承人和布样"},{src:"/assets/heritage/dalin-workshop.png",alt:"大临村蓝印花布工坊外景",caption:"大临村工坊与晾晒布样"},{src:"/assets/heritage/archive-pattern-table.png",alt:"桌面上的蓝印花布样品",caption:"一桌蓝白：纹样与日用布品"},{src:"/assets/heritage/archive-table-runner.png",alt:"蓝印花布桌旗",caption:"传统纹样进入当代日用"},{src:"/assets/heritage/archive-craft-store.png",alt:"游客挑选蓝印花布文创",caption:"在工坊挑选一片属于自己的蓝"},{src:"/assets/heritage/archive-visitor-demo.png",alt:"游客观看蓝印花布体验演示",caption:"围在工作台前看见手艺"},{src:"/assets/heritage/archive-cultural-products.png",alt:"蓝印花布文创产品与花版",caption:"从花版到可带走的日常物件"},{src:"/assets/heritage/archive-tote-bag.png",alt:"蓝印花布帆布袋",caption:"把蓝白纹样带进生活"},{src:"/assets/heritage/archive-apparel.png",alt:"蓝印花布服装与围裙",caption:"蓝印花布的新衣与新用法"},{src:"/assets/heritage/archive-drying.png",alt:"晾晒中的蓝印花布",caption:"阳光下定格的靛蓝与素白"},{src:"/assets/heritage/archive-family-workshop.png",alt:"儿童参与蓝印花布体验",caption:"亲子体验：让手艺被下一代看见"},{src:"/assets/heritage/archive-drying-tour.png",alt:"游客参观蓝印花布晾晒场景",caption:"走进布样之间，听见村庄的故事"}],s=[{value:"01",label:"先看人",text:"从传承人的手、工具和故事进入蓝印花布。"},{value:"02",label:"再看工艺",text:"理解刻版、防染、入靛、刮白这些关键步骤。"},{value:"03",label:"最后看纹样",text:"把花草、瑞兽、吉祥符号和江南生活联系起来。"}],r=[{icon:jg,title:"匠人 / 传承故事",text:"大临村的蓝印花布先存在于人的手上。老一辈把纹样、浆料比例、入靛火候和晾晒经验留在日复一日的制作里，年轻人则用展览、文创和数字方式让它继续被看见。"},{icon:vf,title:"制作过程",text:"一块布从画稿到成品，需要经过刻版、刮浆、染色、刮白、清洗、晾晒。每一步都不只是技术，也是一种和时间相处的方式。"},{icon:Gg,title:"相关图片资料",text:"图片资料记录布样、工具、纹样细节和村落现场。游客可以通过这些图像，把展柜里的蓝白纹样重新放回真实生活。"},{icon:_f,title:"文化价值",text:"蓝印花布连接江南日用审美、礼俗祝福、女性手工经验和地方记忆。它既是一匹布，也是一座村庄可以向外讲述的文化名片。"}],a=[{icon:Zg,title:"来到大临村",text:"先认识蓝印花布与村落之间的关系，知道这门手艺为什么在这里生长。"},{icon:o_,title:"听见传承人",text:"从口述故事里理解手艺人的坚持、家庭记忆和代际传承。"},{icon:t_,title:"走完工艺线",text:"按制作顺序观看工序，把“蓝”和“白”如何出现看明白。"},{icon:rr,title:"带走一片蓝",text:"在纹样库、互动卡片或文创体验中，选择一个属于自己的蓝印记忆。"}];return(o,l)=>(oe(),ye("section",h0,[m("div",d0,[m("div",f0,[l[3]||(l[3]=m("p",{class:"eyebrow"},"People Story Of Dalin Blue Calico",-1)),l[4]||(l[4]=m("h1",null,"她与蓝",-1)),l[5]||(l[5]=m("p",null,"给来到大临村的游客看的传承故事：看见做布的人，理解靛蓝的工艺，也把一段江南记忆带回去。",-1)),m("div",p0,[m("button",{class:"primary-button",type:"button",onClick:l[0]||(l[0]=c=>t("navigate","/library"))},[l[2]||(l[2]=nt(" 去看纹样 ",-1)),Se(de(ri),{size:18})]),m("button",{class:"secondary-button",type:"button",onClick:l[1]||(l[1]=c=>t("navigate","/find-blue"))}," 寻找你的蓝 ")])]),m("div",{class:"heritage-hero-image heritage-visitor-image"},[m("img",{src:T0,alt:"大临村蓝印花布现场资料"}),l[6]||(l[6]=m("span",null,"大临村蓝印花布 · 人物与工艺故事",-1))])]),m("div",m0,[(oe(),ye(at,null,xt(s,c=>m("article",{key:c.value},[m("strong",null,me(c.value),1),m("span",null,me(c.label),1),m("p",null,me(c.text),1)])),64))]),m("section",g0,[l[7]||(l[7]=m("div",{class:"section-title-row"},[m("div",null,[m("p",{class:"eyebrow"},"For Visitors"),m("h2",null,"这页想带游客看什么")])],-1)),m("div",_0,[(oe(),ye(at,null,xt(r,c=>m("article",{key:c.title},[(oe(),It(Js(c.icon),{size:24})),m("h2",null,me(c.title),1),m("p",null,me(c.text),1)])),64))])]),m("section",v0,[l[8]||(l[8]=m("div",{class:"section-title-row"},[m("div",null,[m("p",{class:"eyebrow"},"Village Visit Path"),m("h2",null,"游客在村里的一条观看路径")])],-1)),m("div",x0,[(oe(),ye(at,null,xt(a,(c,u)=>m("article",{key:c.title},[m("span",null,me(String(u+1).padStart(2,"0")),1),(oe(),It(Js(c.icon),{size:24})),m("strong",null,me(c.title),1),m("p",null,me(c.text),1)])),64))])]),m("section",y0,[l[9]||(l[9]=m("div",{class:"section-title-row"},[m("div",null,[m("p",{class:"eyebrow"},"Craft Process"),m("h2",null,"一块布经过的路")])],-1)),m("div",b0,[(oe(!0),ye(at,null,xt(de(Sf),(c,u)=>(oe(),ye("article",{key:c.title},[m("span",null,me(String(u+1).padStart(2,"0")),1),m("strong",null,me(c.title),1),m("p",null,me(c.text),1)]))),128))])]),m("section",M0,[l[10]||(l[10]=m("div",{class:"section-title-row"},[m("div",null,[m("p",{class:"eyebrow"},"Image Archive"),m("h2",null,"相关图片资料")])],-1)),m("div",S0,[(oe(),ye(at,null,xt(i,c=>m("figure",{key:c.src},[m("img",{src:c.src,alt:c.alt,loading:"lazy",decoding:"async"},null,8,E0),m("figcaption",null,me(c.caption),1)])),64))])]),l[11]||(l[11]=m("section",{class:"heritage-value"},[m("p",{class:"eyebrow"},"Cultural Value"),m("h2",null,"让游客带走的不只是照片"),m("p",null,"大临村蓝印花布的价值，不只在“好看”，也在它把地方、家庭、祝福和手艺连接起来。游客看完这一页，应该能记住：蓝印花布是一种生活里的美，也是一代代人共同守住的村庄记忆。")],-1))]))}},A0="/assets/heritage/dalin-workshop.png",C0="/assets/home/dalin-workshop-ambience.mp4",R0="/assets/home-craft-gray.png",P0="/assets/home-craft-color.png",D0={class:"section-dot-nav","aria-label":"首页模块导航"},L0=["onClick"],I0={__name:"HomeSectionNav",props:{sections:{type:Array,required:!0},activeIndex:{type:Number,required:!0}},emits:["select"],setup(n){return(e,t)=>(oe(),ye("nav",D0,[(oe(!0),ye(at,null,xt(n.sections,(i,s)=>(oe(),ye("button",{key:i.id,type:"button",class:Et({active:n.activeIndex===s}),onClick:r=>e.$emit("select",s)},[t[0]||(t[0]=m("span",null,null,-1)),m("em",null,me(i.label),1)],10,L0))),128))]))}},U0={class:"pattern-card"},N0={class:"tag"},Oc={__name:"PatternCard",props:{pattern:{type:Object,required:!0}},emits:["open","create"],setup(n){return(e,t)=>(oe(),ye("article",U0,[m("button",{class:"pattern-card-main",type:"button",onClick:t[0]||(t[0]=i=>e.$emit("open",n.pattern))},[m("span",{class:Et(["pattern-thumb",n.pattern.previewImage?"pattern-thumb-real":n.pattern.patternClass]),style:Un(n.pattern.previewImage?{backgroundImage:`url(${n.pattern.previewImage})`}:void 0)},null,6),m("span",N0,me(n.pattern.categoryName),1),m("strong",null,me(n.pattern.name),1),m("em",null,me(n.pattern.meaning),1)]),m("button",{class:"pattern-card-create",type:"button",onClick:t[1]||(t[1]=i=>e.$emit("create",n.pattern))},"用于 3D 创作")]))}},F0={class:"home-panel hero-panel"},O0={class:"hero-content"},k0={class:"home-panel intro-panel"},B0={class:"home-panel-inner intro-section"},z0={class:"intro-side"},H0={class:"stat-index"},V0={class:"stat-value"},G0={class:"stat-meta"},W0=["src"],X0={class:"intro-material-overlay"},$0={class:"home-panel"},q0={class:"home-panel-inner"},Y0={class:"section-title-row"},j0={class:"category-grid"},K0=["onClick"],Z0={class:"category-copy"},J0={class:"home-panel craft-panel"},Q0={class:"home-panel-inner craft-spotlight-layout"},ev={key:0,class:"craft-poster"},tv={key:1,class:"craft-spotlight-tip"},nv={class:"home-panel"},iv={class:"home-panel-inner"},sv={class:"section-title-row"},rv={class:"pattern-slider"},av={class:"home-panel cta-panel"},zo=140,ov=16/9,Yu={__name:"HomePage",emits:["navigate","open-pattern","select-category","create-pattern"],setup(n,{emit:e}){const t=e,i=et(0),s=et(null),r=et({x:0,y:0,r:0,active:!1}),a=et(!1);let o=!1;const l=[{id:"chanzhi-lian",previewImage:"/assets/patterns/preview-plant.png"},{id:"huiwen",previewImage:"/assets/patterns/preview-geometry.png"},{id:"hudie",previewImage:"/assets/patterns/preview-animal.png"},{id:"shouzi",previewImage:"/assets/patterns/preview-auspicious.png"}],c=St(()=>l.map(({id:C,previewImage:M})=>{const D=gn.find(E=>E.id===C);return D?{...D,previewImage:M}:null}).filter(Boolean)),u=St(()=>Wi.find(C=>C.type==="jpg")||Wi[0]),h=[{index:"01",value:"128",unit:"枚",label:"收录纹样",english:"Pattern Archive"},{index:"02",value:"6",unit:"道",label:"工艺步骤",english:"Craft Process"},{index:"03",value:"800+",unit:"年",label:"传承历史",english:"Living Heritage"}],d=[{id:"hero",label:"大临蓝印"},{id:"intro",label:"项目引言"},{id:"categories",label:"纹样分类"},{id:"craft",label:"工艺时间轴"},{id:"featured",label:"精选纹样"},{id:"cta",label:"寻找你的蓝"}];function f(C){i.value=Math.min(Math.max(C,0),d.length-1)}function _(C){Math.abs(C.deltaY)<8||o||(C.preventDefault(),o=!0,f(i.value+(C.deltaY>0?1:-1)),window.setTimeout(()=>{o=!1},720))}function x(C){t("select-category",C),t("navigate","/library")}function g(){const C=s.value;if(!C)return null;const M=C.clientWidth,D=C.clientHeight;if(!M||!D)return null;const E=M/D,S=ov;if(E>S){const O=D*S;return{left:(M-O)/2,top:0,width:O,height:D}}const L=M/S;return{left:0,top:(D-L)/2,width:M,height:L}}function p(){const C=g();C&&(r.value={x:C.left+C.width/2,y:C.top+C.height/2,r:0,active:!1})}function R(){a.value=!0,window.requestAnimationFrame(p)}function A(){a.value=!1,window.requestAnimationFrame(p)}function y(C){if(!a.value)return;const M=s.value,D=g();if(!M||!D)return;const E=M.getBoundingClientRect(),S=C.clientX-E.left,L=C.clientY-E.top,O=Math.min(zo,D.width/2),U=Math.min(zo,D.height/2),G=Math.min(Math.max(S,D.left+O),D.left+D.width-O),ie=Math.min(Math.max(L,D.top+U),D.top+D.height-U);r.value={x:G,y:ie,r:zo,active:!0}}function I(){p()}return pr(()=>{document.documentElement.classList.add("home-lock-scroll"),window.addEventListener("resize",p,{passive:!0}),window.requestAnimationFrame(p)}),Ss(()=>{document.documentElement.classList.remove("home-lock-scroll"),window.removeEventListener("resize",p)}),(C,M)=>(oe(),ye("section",{class:"home-page",onWheel:_},[Se(I0,{sections:d,"active-index":i.value,onSelect:f},null,8,["active-index"]),m("div",{class:"home-stage",style:Un({transform:`translateY(-${i.value*100}vh)`})},[m("section",F0,[M[13]||(M[13]=m("video",{class:"hero-video",autoplay:"",muted:"",loop:"",playsinline:"",poster:A0,"aria-hidden":"true"},[m("source",{src:C0,type:"video/mp4"})],-1)),M[14]||(M[14]=m("div",{class:"hero-pattern pattern-floral"},null,-1)),m("div",O0,[M[11]||(M[11]=m("p",{class:"eyebrow"},"浙江嘉兴桐乡市大临村",-1)),m("h1",null,[(oe(),ye(at,null,xt("大临蓝印",(D,E)=>m("span",{key:`${D}-${E}`,style:Un({animationDelay:`${E*50}ms`})},me(D),5)),64))]),M[12]||(M[12]=m("p",{class:"hero-subtitle"},"千年药斑布，一靛染江南",-1)),m("button",{class:"primary-button",type:"button",onClick:M[0]||(M[0]=D=>C.$emit("navigate","/library"))},[M[10]||(M[10]=nt(" 探索纹样 ",-1)),Se(de(ri),{size:18})])]),m("button",{class:"scroll-cue",type:"button",onClick:M[1]||(M[1]=D=>f(1))},[Se(de(Rr),{size:24})])]),m("section",k0,[m("div",B0,[M[18]||(M[18]=m("div",{class:"section-copy"},[m("p",{class:"eyebrow"},"Project Introduction"),m("h2",null,"以数字之名，让靛蓝重新流动"),m("p",null,"大临村，浙江桐乡石门镇的一座江南古村，是蓝印花布的发源地之一。这里的一布一纹，承载着从宋元走来的防染智慧。我们以数字之名，让靛蓝重新流动。")],-1)),m("div",z0,[m("div",{class:Et(["stats",{"is-visible":i.value===1}]),"aria-label":"蓝印花布数字档案概览"},[(oe(),ye(at,null,xt(h,D=>m("article",{key:D.index},[m("span",H0,me(D.index),1),m("div",V0,[m("strong",null,me(D.value),1),m("small",null,me(D.unit),1)]),m("div",G0,[m("span",null,me(D.label),1),m("em",null,me(D.english),1)])])),64))],2),m("button",{class:"intro-material-card",type:"button",onClick:M[2]||(M[2]=D=>C.$emit("navigate","/library"))},[m("img",{src:u.value.src,alt:"本地采集的蓝印花布布面纹样",loading:"lazy",decoding:"async"},null,8,W0),m("span",X0,[M[16]||(M[16]=m("small",null,"LOCAL MATERIAL ARCHIVE",-1)),M[17]||(M[17]=m("strong",null,"82 张采集素材",-1)),m("em",null,[M[15]||(M[15]=nt("进入纹样图录 ",-1)),Se(de(ri),{size:16})])])])])]),m("button",{class:"scroll-cue scroll-cue-on-light",type:"button","aria-label":"继续浏览纹样分类",onClick:M[3]||(M[3]=D=>f(2))},[Se(de(Rr),{size:24})])]),m("section",$0,[m("div",q0,[m("div",Y0,[M[20]||(M[20]=m("div",null,[m("p",{class:"eyebrow"},"Pattern System"),m("h2",null,"四大纹样分类")],-1)),m("button",{class:"text-link",type:"button",onClick:M[4]||(M[4]=D=>C.$emit("navigate","/library"))},[M[19]||(M[19]=nt(" 进入纹库 ",-1)),Se(de(ri),{size:16})])]),m("div",j0,[(oe(!0),ye(at,null,xt(de(Mf),D=>(oe(),ye("button",{key:D.key,type:"button",onClick:E=>x(D.key)},[m("span",{class:Et(["category-image",D.image?["category-image-real",`category-image-${D.key}`]:D.patternClass]),style:Un({backgroundImage:`url(${D.image})`})},null,6),m("span",Z0,[m("strong",null,me(D.title),1),m("em",null,me(D.description),1),M[21]||(M[21]=m("i",null,"查看全部 →",-1))])],8,K0))),128))])]),m("button",{class:"scroll-cue scroll-cue-on-light",type:"button","aria-label":"继续浏览工艺流程",onClick:M[5]||(M[5]=D=>f(3))},[Se(de(Rr),{size:24})])]),m("section",J0,[m("div",Q0,[Rt("",!0),m("div",{ref_key:"craftBoardRef",ref:s,class:"craft-spotlight-board",style:Un({"--spotlight-x":`${r.value.x}px`,"--spotlight-y":`${r.value.y}px`,"--spotlight-r":`${r.value.r}px`}),onMousemove:y,onMouseleave:I},[a.value?Rt("",!0):(oe(),ye("div",ev,[m("div",{class:"craft-poster-inner"},[M[23]||(M[23]=m("p",{class:"eyebrow"},"Craft Timeline",-1)),M[24]||(M[24]=m("h2",null,"从刻版到晾晒，一块布要走过六道手艺",-1)),M[25]||(M[25]=m("p",null,"点击海报开启探照体验。彩色会在鼠标所到之处显现，帮助游客直观看到大临蓝印花布六道工序的完整流转。",-1)),m("button",{class:"primary-button craft-start-button",type:"button",onClick:R},"开启探照")])])),M[28]||(M[28]=m("img",{class:"craft-board-image grayscale",src:R0,alt:"craft grayscale board"},null,-1)),M[29]||(M[29]=m("img",{class:"craft-board-image color",src:P0,alt:"craft color board"},null,-1)),m("div",{class:Et(["craft-spotlight-glow",{active:r.value.active}])},null,2),a.value?(oe(),ye("div",tv,[M[26]||(M[26]=m("span",null,"探照工艺图",-1)),M[27]||(M[27]=m("em",null,"鼠标移动到哪里，哪里就恢复彩色",-1)),m("button",{class:"craft-restart-button",type:"button",onClick:Kt(A,["stop"])},"重新开始")])):Rt("",!0)],36)]),m("button",{class:"scroll-cue",type:"button","aria-label":"继续浏览精选纹样",onClick:M[6]||(M[6]=D=>f(4))},[Se(de(Rr),{size:24})])]),m("section",nv,[m("div",iv,[m("div",sv,[M[30]||(M[30]=m("div",null,[m("p",{class:"eyebrow"},"Selected Patterns"),m("h2",null,"精选纹样预览")],-1)),m("button",{class:"primary-button compact",type:"button",onClick:M[7]||(M[7]=D=>C.$emit("navigate","/library"))},"进入纹库")]),m("div",rv,[(oe(!0),ye(at,null,xt(c.value,D=>(oe(),It(Oc,{key:D.id,pattern:D,onOpen:E=>C.$emit("open-pattern",D),onCreate:E=>C.$emit("create-pattern",D)},null,8,["pattern","onOpen","onCreate"]))),128))])]),m("button",{class:"scroll-cue scroll-cue-on-light",type:"button","aria-label":"继续寻找你的蓝",onClick:M[8]||(M[8]=D=>f(5))},[Se(de(Rr),{size:24})])]),m("section",av,[M[32]||(M[32]=m("p",{class:"eyebrow"},"Find Your Blue",-1)),M[33]||(M[33]=m("h2",null,"你的蓝，是什么？",-1)),M[34]||(M[34]=m("p",null,"选择几个关键词，生成一张属于你的大临蓝印纹样卡。",-1)),m("button",{class:"primary-button",type:"button",onClick:M[9]||(M[9]=D=>C.$emit("navigate","/find-blue"))},[M[31]||(M[31]=nt(" 寻找你的蓝 ",-1)),Se(de(rr),{size:18})])])],4)],32))}},lv={class:"material-gallery-heading"},cv={class:"material-gallery-count"},uv={class:"material-gallery-toolbar"},hv={class:"material-gallery-filters",role:"group","aria-label":"素材类型筛选"},dv=["onClick"],fv={class:"material-gallery-note"},pv={class:"material-gallery-grid"},mv=["onClick"],gv={class:"material-tile-image"},_v=["src","alt"],vv={class:"material-tile-zoom"},xv={class:"material-tile-meta"},yv={class:"material-lightbox-content"},bv=["src"],Mv={__name:"MaterialGallery",setup(n){const e=et("all"),t=et(null),i=[{key:"all",label:"全部素材"},{key:"png",label:"单纹样 / 刻版"},{key:"jpg",label:"布面 / 版样"}],s=St(()=>e.value==="all"?Wi:Wi.filter(l=>l.type===e.value));function r(l){return l.type==="png"?"单纹样 / 刻版素材":"布面 / 版样素材"}function a(l){t.value=l}function o(){t.value=null}return(l,c)=>(oe(),ye("section",{class:"material-gallery",onKeyup:mf(o,["esc"])},[m("div",lv,[c[1]||(c[1]=m("div",null,[m("p",{class:"eyebrow"},"Local Material Archive"),m("h2",null,"本地采集素材图录"),m("p",null,"先把采集到的纹样、边饰和布面资料完整保留下来，后续再逐张补充名称、寓意与来源。")],-1)),m("div",cv,[m("strong",null,me(de(Wi).length),1),c[0]||(c[0]=m("span",null,"张本地素材",-1))])]),m("div",uv,[m("div",hv,[(oe(),ye(at,null,xt(i,u=>m("button",{key:u.key,type:"button",class:Et({active:e.value===u.key}),onClick:h=>e.value=u.key},me(u.label),11,dv)),64))]),m("span",fv,[Se(de(vf),{size:16}),c[2]||(c[2]=nt("仅使用本地文件",-1))])]),m("div",pv,[(oe(!0),ye(at,null,xt(s.value,(u,h)=>(oe(),ye("button",{key:u.id,class:"material-tile",type:"button",onClick:d=>a(u)},[m("span",gv,[m("img",{src:u.src,alt:`本地采集素材 ${h+1}`,loading:"lazy",decoding:"async"},null,8,_v),m("span",vv,[Se(de(bf),{size:17})])]),m("span",xv,[m("strong",null,"素材 "+me(String(h+1).padStart(2,"0")),1),m("small",null,me(r(u)),1)])],8,mv))),128))]),t.value?(oe(),ye("div",{key:0,class:"material-lightbox",onClick:Kt(o,["self"])},[m("button",{class:"material-lightbox-close",type:"button","aria-label":"关闭素材预览",onClick:o},[Se(de(ar),{size:22})]),m("figure",yv,[m("img",{src:t.value.src,alt:"本地采集素材大图"},null,8,bv),m("figcaption",null,[m("span",null,me(r(t.value)),1),m("small",null,"本地素材文件 · "+me(t.value.id),1)])])])):Rt("",!0)],32))}},Sv=ua(Mv,[["__scopeId","data-v-411e3d2f"]]),Ev={class:"library-page section top-section"},Tv={class:"page-heading"},wv={class:"library-tools"},Av={class:"search-field"},Cv={class:"filter-tabs"},Rv=["onClick"],Pv={key:0,class:"library-grid"},Dv={key:1,class:"empty-state"},Lv={__name:"LibraryPage",props:{initialCategory:{type:String,default:"all"}},emits:["open-pattern","create-pattern"],setup(n){const e=n,t=et(e.initialCategory),i=et(""),s=et(8),r=St(()=>[{key:"all",name:"全部"},...Mf]),a=St(()=>{const l=i.value.trim();return gn.filter(c=>{const u=t.value==="all"||c.category===t.value,h=`${c.name}${c.categoryName}${c.meaning}${c.meaningDetail}${c.tags.join("")}`;return u&&(!l||h.includes(l))})}),o=St(()=>a.value.slice(0,s.value));return si(()=>e.initialCategory,l=>{t.value=l}),si([t,i],()=>{s.value=8}),(l,c)=>(oe(),ye("section",Ev,[m("div",Tv,[c[2]||(c[2]=m("p",{class:"eyebrow"},"Pattern Archive",-1)),c[3]||(c[3]=m("h1",null,"蓝印纹库",-1)),m("p",null,"已整理 "+me(de(gn).length)+" 个有语义说明的示范纹样，并接入 "+me(de(Wi).length)+" 张本地采集素材。",1)]),m("div",wv,[m("label",Av,[Se(de(yf),{size:18}),Rd(m("input",{"onUpdate:modelValue":c[0]||(c[0]=u=>i.value=u),type:"search",placeholder:"搜索纹样名称、寓意、标签"},null,512),[[pf,i.value]])]),m("div",Cv,[(oe(!0),ye(at,null,xt(r.value,u=>(oe(),ye("button",{key:u.key,type:"button",class:Et({active:t.value===u.key}),onClick:h=>t.value=u.key},me(u.name),11,Rv))),128))])]),o.value.length?(oe(),ye("div",Pv,[(oe(!0),ye(at,null,xt(o.value,u=>(oe(),It(Oc,{key:u.id,pattern:u,onOpen:h=>l.$emit("open-pattern",u),onCreate:h=>l.$emit("create-pattern",u)},null,8,["pattern","onOpen","onCreate"]))),128))])):(oe(),ye("div",Dv,[Se(de(_f),{size:34}),c[4]||(c[4]=m("h2",null,"未找到相关纹样",-1)),c[5]||(c[5]=m("p",null,"试试“莲花”“平安”“富贵”这样的关键词。",-1))])),s.value<a.value.length?(oe(),ye("button",{key:2,class:"secondary-button load-more",type:"button",onClick:c[1]||(c[1]=u=>s.value+=8)}," 加载更多 ")):Rt("",!0),Se(Sv)]))}},Iv={class:"detail-page section top-section"},Uv={class:"detail-layout"},Nv={class:"detail-content"},Fv={class:"eyebrow"},Ov={class:"lead"},kv={class:"detail-block"},Bv={class:"mini-timeline"},zv={class:"detail-block"},Hv={class:"use-grid"},Vv={class:"detail-block"},Gv={class:"library-grid compact-grid"},Wv={__name:"PatternDetailPage",props:{patternId:{type:String,required:!0}},emits:["navigate","open-pattern","create-pattern"],setup(n,{emit:e}){const t=n,i=e,s=et(!1),r=St(()=>gn.find(o=>o.id===t.patternId)||gn[0]),a=St(()=>{const o=r.value.relatedIds.map(l=>gn.find(c=>c.id===l)).filter(Boolean);return o.length?o.slice(0,4):gn.filter(l=>l.category===r.value.category).slice(0,4)});return(o,l)=>(oe(),ye("section",Iv,[m("button",{class:"text-link back-link",type:"button",onClick:l[0]||(l[0]=c=>o.$emit("navigate","/library"))},[Se(de(xs),{size:17}),l[5]||(l[5]=nt(" 返回纹库 ",-1))]),m("div",Uv,[m("button",{class:Et(["detail-image",r.value.previewImage?"detail-image-real":r.value.patternClass]),style:Un(r.value.previewImage?{backgroundImage:`url(${r.value.previewImage})`}:void 0),type:"button",onClick:l[1]||(l[1]=c=>s.value=!0)},[...l[6]||(l[6]=[m("span",null,"点击放大",-1)])],6),m("article",Nv,[m("p",Fv,me(r.value.categoryName),1),m("h1",null,me(r.value.name),1),m("p",Ov,me(r.value.meaning),1),m("button",{class:"primary-button detail-create-button",type:"button",onClick:l[2]||(l[2]=c=>i("create-pattern",r.value))},[Se(de(cs),{size:18}),l[7]||(l[7]=nt(" 用此纹样进入 3D 工坊 ",-1))]),m("dl",null,[m("div",null,[l[8]||(l[8]=m("dt",null,"年代",-1)),m("dd",null,me(r.value.era),1)]),m("div",null,[l[9]||(l[9]=m("dt",null,"传统用途",-1)),m("dd",null,me(r.value.usage),1)]),m("div",null,[l[10]||(l[10]=m("dt",null,"文化寓意",-1)),m("dd",null,me(r.value.meaningDetail),1)]),m("div",null,[l[11]||(l[11]=m("dt",null,"背景故事",-1)),m("dd",null,me(r.value.story),1)])])])]),m("div",kv,[l[12]||(l[12]=m("p",{class:"eyebrow"},"Technique",-1)),l[13]||(l[13]=m("h2",null,"工艺图解",-1)),m("div",Bv,[(oe(!0),ye(at,null,xt(r.value.technique,c=>(oe(),ye("article",{key:c},me(c),1))),128))])]),m("div",zv,[l[14]||(l[14]=m("p",{class:"eyebrow"},"Modern Use",-1)),l[15]||(l[15]=m("h2",null,"创新应用",-1)),m("div",Hv,[(oe(!0),ye(at,null,xt(r.value.modernUse,c=>(oe(),ye("article",{key:c},me(c),1))),128))])]),m("div",Vv,[l[16]||(l[16]=m("div",{class:"section-title-row"},[m("div",null,[m("p",{class:"eyebrow"},"Related"),m("h2",null,"猜你喜欢")])],-1)),m("div",Gv,[(oe(!0),ye(at,null,xt(a.value,c=>(oe(),It(Oc,{key:c.id,pattern:c,onOpen:u=>o.$emit("open-pattern",c),onCreate:u=>o.$emit("create-pattern",c)},null,8,["pattern","onOpen","onCreate"]))),128))])]),s.value?(oe(),ye("div",{key:0,class:"lightbox",onClick:l[4]||(l[4]=Kt(c=>s.value=!1,["self"]))},[m("button",{class:"icon-button close-lightbox",type:"button",onClick:l[3]||(l[3]=c=>s.value=!1)},[Se(de(ar),{size:22})]),m("div",{class:Et(["lightbox-pattern",r.value.previewImage?"detail-image-real":r.value.patternClass]),style:Un(r.value.previewImage?{backgroundImage:`url(${r.value.previewImage})`}:void 0)},null,6)])):Rt("",!0)]))}};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kc="172",er={ROTATE:0,DOLLY:1,PAN:2},Xs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Xv=0,ju=1,$v=2,Ef=1,qv=2,Qn=3,Ri=0,_n=1,In=2,Xi=0,tr=1,Ku=2,Zu=3,Ju=4,Yv=5,ds=100,jv=101,Kv=102,Zv=103,Jv=104,Qv=200,ex=201,tx=202,nx=203,Nl=204,Fl=205,ix=206,sx=207,rx=208,ax=209,ox=210,lx=211,cx=212,ux=213,hx=214,Ol=0,kl=1,Bl=2,or=3,zl=4,Hl=5,Vl=6,Gl=7,Tf=0,dx=1,fx=2,$i=0,px=1,mx=2,gx=3,wf=4,_x=5,vx=6,xx=7,Af=300,lr=301,cr=302,Wl=303,Xl=304,So=306,ia=1e3,ps=1001,$l=1002,Yn=1003,yx=1004,ga=1005,ai=1006,Ho=1007,ms=1008,Pi=1009,Cf=1010,Rf=1011,sa=1012,Bc=1013,ys=1014,Si=1015,ha=1016,zc=1017,Hc=1018,ur=1020,Pf=35902,Df=1021,Lf=1022,$n=1023,If=1024,Uf=1025,nr=1026,hr=1027,Nf=1028,Vc=1029,Ff=1030,Gc=1031,Wc=1033,Wa=33776,Xa=33777,$a=33778,qa=33779,ql=35840,Yl=35841,jl=35842,Kl=35843,Zl=36196,Jl=37492,Ql=37496,ec=37808,tc=37809,nc=37810,ic=37811,sc=37812,rc=37813,ac=37814,oc=37815,lc=37816,cc=37817,uc=37818,hc=37819,dc=37820,fc=37821,Ya=36492,pc=36494,mc=36495,Of=36283,gc=36284,_c=36285,vc=36286,bx=3200,Mx=3201,kf=0,Sx=1,Vi="",mn="srgb",dr="srgb-linear",ao="linear",Mt="srgb",As=7680,Qu=519,Ex=512,Tx=513,wx=514,Bf=515,Ax=516,Cx=517,Rx=518,Px=519,eh=35044,th="300 es",Ei=2e3,oo=2001;class Es{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let nh=1234567;const Wr=Math.PI/180,ra=180/Math.PI;function mr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Jt[n&255]+Jt[n>>8&255]+Jt[n>>16&255]+Jt[n>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[t&63|128]+Jt[t>>8&255]+"-"+Jt[t>>16&255]+Jt[t>>24&255]+Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]).toLowerCase()}function it(n,e,t){return Math.max(e,Math.min(t,n))}function Xc(n,e){return(n%e+e)%e}function Dx(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Lx(n,e,t){return n!==e?(t-n)/(e-n):0}function Xr(n,e,t){return(1-t)*n+t*e}function Ix(n,e,t,i){return Xr(n,e,1-Math.exp(-t*i))}function Ux(n,e=1){return e-Math.abs(Xc(n,e*2)-e)}function Nx(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Fx(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Ox(n,e){return n+Math.floor(Math.random()*(e-n+1))}function kx(n,e){return n+Math.random()*(e-n)}function Bx(n){return n*(.5-Math.random())}function zx(n){n!==void 0&&(nh=n);let e=nh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Hx(n){return n*Wr}function Vx(n){return n*ra}function Gx(n){return(n&n-1)===0&&n!==0}function Wx(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Xx(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function $x(n,e,t,i,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),u=a((e+i)/2),h=r((e-i)/2),d=a((e-i)/2),f=r((i-e)/2),_=a((i-e)/2);switch(s){case"XYX":n.set(o*u,l*h,l*d,o*c);break;case"YZY":n.set(l*d,o*u,l*h,o*c);break;case"ZXZ":n.set(l*h,l*d,o*u,o*c);break;case"XZX":n.set(o*u,l*_,l*f,o*c);break;case"YXY":n.set(l*f,o*u,l*_,o*c);break;case"ZYZ":n.set(l*_,l*f,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Gs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function on(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Mn={DEG2RAD:Wr,RAD2DEG:ra,generateUUID:mr,clamp:it,euclideanModulo:Xc,mapLinear:Dx,inverseLerp:Lx,lerp:Xr,damp:Ix,pingpong:Ux,smoothstep:Nx,smootherstep:Fx,randInt:Ox,randFloat:kx,randFloatSpread:Bx,seededRandom:zx,degToRad:Hx,radToDeg:Vx,isPowerOfTwo:Gx,ceilPowerOfTwo:Wx,floorPowerOfTwo:Xx,setQuaternionFromProperEuler:$x,normalize:on,denormalize:Gs};class Ee{constructor(e=0,t=0){Ee.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class st{constructor(e,t,i,s,r,a,o,l,c){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],f=i[5],_=i[8],x=s[0],g=s[3],p=s[6],R=s[1],A=s[4],y=s[7],I=s[2],C=s[5],M=s[8];return r[0]=a*x+o*R+l*I,r[3]=a*g+o*A+l*C,r[6]=a*p+o*y+l*M,r[1]=c*x+u*R+h*I,r[4]=c*g+u*A+h*C,r[7]=c*p+u*y+h*M,r[2]=d*x+f*R+_*I,r[5]=d*g+f*A+_*C,r[8]=d*p+f*y+_*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*r,f=c*r-a*l,_=t*h+i*d+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=h*x,e[1]=(s*c-u*i)*x,e[2]=(o*i-s*a)*x,e[3]=d*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=f*x,e[7]=(i*l-c*t)*x,e[8]=(a*t-i*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Vo.makeScale(e,t)),this}rotate(e){return this.premultiply(Vo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Vo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Vo=new st;function zf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function aa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function qx(){const n=aa("canvas");return n.style.display="block",n}const ih={};function Ws(n){n in ih||(ih[n]=!0,console.warn(n))}function Yx(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function jx(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Kx(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const sh=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rh=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Zx(){const n={enabled:!0,workingColorSpace:dr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Mt&&(s.r=Ti(s.r),s.g=Ti(s.g),s.b=Ti(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Mt&&(s.r=ir(s.r),s.g=ir(s.g),s.b=ir(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Vi?ao:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[dr]:{primaries:e,whitePoint:i,transfer:ao,toXYZ:sh,fromXYZ:rh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:mn},outputColorSpaceConfig:{drawingBufferColorSpace:mn}},[mn]:{primaries:e,whitePoint:i,transfer:Mt,toXYZ:sh,fromXYZ:rh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:mn}}}),n}const ft=Zx();function Ti(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ir(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Cs;class Jx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Cs===void 0&&(Cs=aa("canvas")),Cs.width=e.width,Cs.height=e.height;const i=Cs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Cs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=aa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ti(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ti(t[i]/255)*255):t[i]=Ti(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Qx=0;class Hf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qx++}),this.uuid=mr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Go(s[a].image)):r.push(Go(s[a]))}else r=Go(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Go(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Jx.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ey=0;class sn extends Es{constructor(e=sn.DEFAULT_IMAGE,t=sn.DEFAULT_MAPPING,i=ps,s=ps,r=ai,a=ms,o=$n,l=Pi,c=sn.DEFAULT_ANISOTROPY,u=Vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ey++}),this.uuid=mr(),this.name="",this.source=new Hf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Af)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ia:e.x=e.x-Math.floor(e.x);break;case ps:e.x=e.x<0?0:1;break;case $l:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ia:e.y=e.y-Math.floor(e.y);break;case ps:e.y=e.y<0?0:1;break;case $l:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=Af;sn.DEFAULT_ANISOTROPY=1;class Ot{constructor(e=0,t=0,i=0,s=1){Ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],_=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(_-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(_+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(c+1)/2,y=(f+1)/2,I=(p+1)/2,C=(u+d)/4,M=(h+x)/4,D=(_+g)/4;return A>y&&A>I?A<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(A),s=C/i,r=M/i):y>I?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=C/s,r=D/s):I<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),i=M/r,s=D/r),this.set(i,s,r,t),this}let R=Math.sqrt((g-_)*(g-_)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(R)<.001&&(R=1),this.x=(g-_)/R,this.y=(h-x)/R,this.z=(d-u)/R,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ty extends Es{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ot(0,0,e,t),this.scissorTest=!1,this.viewport=new Ot(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ai,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new sn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new Hf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bs extends ty{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Vf extends sn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=ps,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ny extends sn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=ps,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ms{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const d=r[a+0],f=r[a+1],_=r[a+2],x=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=_,e[t+3]=x;return}if(h!==x||l!==d||c!==f||u!==_){let g=1-o;const p=l*d+c*f+u*_+h*x,R=p>=0?1:-1,A=1-p*p;if(A>Number.EPSILON){const I=Math.sqrt(A),C=Math.atan2(I,p*R);g=Math.sin(g*C)/I,o=Math.sin(o*C)/I}const y=o*R;if(l=l*g+d*y,c=c*g+f*y,u=u*g+_*y,h=h*g+x*y,g===1-o){const I=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=I,c*=I,u*=I,h*=I}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[a],d=r[a+1],f=r[a+2],_=r[a+3];return e[t]=o*_+u*h+l*f-c*d,e[t+1]=l*_+u*d+c*h-o*f,e[t+2]=c*_+u*f+o*d-l*h,e[t+3]=u*_-o*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),h=o(r/2),d=l(i/2),f=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h-d*f*_;break;case"YXZ":this._x=d*u*h+c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h+d*f*_;break;case"ZXY":this._x=d*u*h-c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h-d*f*_;break;case"ZYX":this._x=d*u*h-c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h+d*f*_;break;case"YZX":this._x=d*u*h+c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h-d*f*_;break;case"XZY":this._x=d*u*h-c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>h){const f=2*Math.sqrt(1+i-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-i-h);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=i*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ah.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ah.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),u=2*(o*t-r*s),h=2*(r*i-a*t);return this.x=t+l*c+a*h-o*u,this.y=i+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Wo.copy(this).projectOnVector(e),this.sub(Wo)}reflect(e){return this.sub(Wo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wo=new B,ah=new Ms;class gr{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Vn):Vn.fromBufferAttribute(r,a),Vn.applyMatrix4(e.matrixWorld),this.expandByPoint(Vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_a.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),_a.copy(i.boundingBox)),_a.applyMatrix4(e.matrixWorld),this.union(_a)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Pr),va.subVectors(this.max,Pr),Rs.subVectors(e.a,Pr),Ps.subVectors(e.b,Pr),Ds.subVectors(e.c,Pr),Ui.subVectors(Ps,Rs),Ni.subVectors(Ds,Ps),ns.subVectors(Rs,Ds);let t=[0,-Ui.z,Ui.y,0,-Ni.z,Ni.y,0,-ns.z,ns.y,Ui.z,0,-Ui.x,Ni.z,0,-Ni.x,ns.z,0,-ns.x,-Ui.y,Ui.x,0,-Ni.y,Ni.x,0,-ns.y,ns.x,0];return!Xo(t,Rs,Ps,Ds,va)||(t=[1,0,0,0,1,0,0,0,1],!Xo(t,Rs,Ps,Ds,va))?!1:(xa.crossVectors(Ui,Ni),t=[xa.x,xa.y,xa.z],Xo(t,Rs,Ps,Ds,va))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const fi=[new B,new B,new B,new B,new B,new B,new B,new B],Vn=new B,_a=new gr,Rs=new B,Ps=new B,Ds=new B,Ui=new B,Ni=new B,ns=new B,Pr=new B,va=new B,xa=new B,is=new B;function Xo(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){is.fromArray(n,r);const o=s.x*Math.abs(is.x)+s.y*Math.abs(is.y)+s.z*Math.abs(is.z),l=e.dot(is),c=t.dot(is),u=i.dot(is);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const iy=new gr,Dr=new B,$o=new B;class $c{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):iy.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Dr.subVectors(e,this.center);const t=Dr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Dr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($o.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Dr.copy(e.center).add($o)),this.expandByPoint(Dr.copy(e.center).sub($o))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pi=new B,qo=new B,ya=new B,Fi=new B,Yo=new B,ba=new B,jo=new B;class Gf{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pi.copy(this.origin).addScaledVector(this.direction,t),pi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){qo.copy(e).add(t).multiplyScalar(.5),ya.copy(t).sub(e).normalize(),Fi.copy(this.origin).sub(qo);const r=e.distanceTo(t)*.5,a=-this.direction.dot(ya),o=Fi.dot(this.direction),l=-Fi.dot(ya),c=Fi.lengthSq(),u=Math.abs(1-a*a);let h,d,f,_;if(u>0)if(h=a*l-o,d=a*o-l,_=r*u,h>=0)if(d>=-_)if(d<=_){const x=1/u;h*=x,d*=x,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(qo).addScaledVector(ya,d),f}intersectSphere(e,t){pi.subVectors(e.center,this.origin);const i=pi.dot(this.direction),s=pi.dot(pi)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,pi)!==null}intersectTriangle(e,t,i,s,r){Yo.subVectors(t,e),ba.subVectors(i,e),jo.crossVectors(Yo,ba);let a=this.direction.dot(jo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Fi.subVectors(this.origin,e);const l=o*this.direction.dot(ba.crossVectors(Fi,ba));if(l<0)return null;const c=o*this.direction.dot(Yo.cross(Fi));if(c<0||l+c>a)return null;const u=-o*Fi.dot(jo);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Nt{constructor(e,t,i,s,r,a,o,l,c,u,h,d,f,_,x,g){Nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,u,h,d,f,_,x,g)}set(e,t,i,s,r,a,o,l,c,u,h,d,f,_,x,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=_,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Ls.setFromMatrixColumn(e,0).length(),r=1/Ls.setFromMatrixColumn(e,1).length(),a=1/Ls.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=a*u,f=a*h,_=o*u,x=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+_*c,t[5]=d-x*c,t[9]=-o*l,t[2]=x-d*c,t[6]=_+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,_=c*u,x=c*h;t[0]=d+x*o,t[4]=_*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-_,t[6]=x+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,_=c*u,x=c*h;t[0]=d-x*o,t[4]=-a*h,t[8]=_+f*o,t[1]=f+_*o,t[5]=a*u,t[9]=x-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,f=a*h,_=o*u,x=o*h;t[0]=l*u,t[4]=_*c-f,t[8]=d*c+x,t[1]=l*h,t[5]=x*c+d,t[9]=f*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,_=o*l,x=o*c;t[0]=l*u,t[4]=x-d*h,t[8]=_*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*h+_,t[10]=d-x*h}else if(e.order==="XZY"){const d=a*l,f=a*c,_=o*l,x=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+x,t[5]=a*u,t[9]=f*h-_,t[2]=_*h-f,t[6]=o*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sy,e,ry)}lookAt(e,t,i){const s=this.elements;return yn.subVectors(e,t),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Oi.crossVectors(i,yn),Oi.lengthSq()===0&&(Math.abs(i.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Oi.crossVectors(i,yn)),Oi.normalize(),Ma.crossVectors(yn,Oi),s[0]=Oi.x,s[4]=Ma.x,s[8]=yn.x,s[1]=Oi.y,s[5]=Ma.y,s[9]=yn.y,s[2]=Oi.z,s[6]=Ma.z,s[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],f=i[13],_=i[2],x=i[6],g=i[10],p=i[14],R=i[3],A=i[7],y=i[11],I=i[15],C=s[0],M=s[4],D=s[8],E=s[12],S=s[1],L=s[5],O=s[9],U=s[13],G=s[2],ie=s[6],Z=s[10],se=s[14],X=s[3],ue=s[7],Me=s[11],Re=s[15];return r[0]=a*C+o*S+l*G+c*X,r[4]=a*M+o*L+l*ie+c*ue,r[8]=a*D+o*O+l*Z+c*Me,r[12]=a*E+o*U+l*se+c*Re,r[1]=u*C+h*S+d*G+f*X,r[5]=u*M+h*L+d*ie+f*ue,r[9]=u*D+h*O+d*Z+f*Me,r[13]=u*E+h*U+d*se+f*Re,r[2]=_*C+x*S+g*G+p*X,r[6]=_*M+x*L+g*ie+p*ue,r[10]=_*D+x*O+g*Z+p*Me,r[14]=_*E+x*U+g*se+p*Re,r[3]=R*C+A*S+y*G+I*X,r[7]=R*M+A*L+y*ie+I*ue,r[11]=R*D+A*O+y*Z+I*Me,r[15]=R*E+A*U+y*se+I*Re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],_=e[3],x=e[7],g=e[11],p=e[15];return _*(+r*l*h-s*c*h-r*o*d+i*c*d+s*o*f-i*l*f)+x*(+t*l*f-t*c*d+r*a*d-s*a*f+s*c*u-r*l*u)+g*(+t*c*h-t*o*f-r*a*h+i*a*f+r*o*u-i*c*u)+p*(-s*o*u-t*l*h+t*o*d+s*a*h-i*a*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],_=e[12],x=e[13],g=e[14],p=e[15],R=h*g*c-x*d*c+x*l*f-o*g*f-h*l*p+o*d*p,A=_*d*c-u*g*c-_*l*f+a*g*f+u*l*p-a*d*p,y=u*x*c-_*h*c+_*o*f-a*x*f-u*o*p+a*h*p,I=_*h*l-u*x*l-_*o*d+a*x*d+u*o*g-a*h*g,C=t*R+i*A+s*y+r*I;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/C;return e[0]=R*M,e[1]=(x*d*r-h*g*r-x*s*f+i*g*f+h*s*p-i*d*p)*M,e[2]=(o*g*r-x*l*r+x*s*c-i*g*c-o*s*p+i*l*p)*M,e[3]=(h*l*r-o*d*r-h*s*c+i*d*c+o*s*f-i*l*f)*M,e[4]=A*M,e[5]=(u*g*r-_*d*r+_*s*f-t*g*f-u*s*p+t*d*p)*M,e[6]=(_*l*r-a*g*r-_*s*c+t*g*c+a*s*p-t*l*p)*M,e[7]=(a*d*r-u*l*r+u*s*c-t*d*c-a*s*f+t*l*f)*M,e[8]=y*M,e[9]=(_*h*r-u*x*r-_*i*f+t*x*f+u*i*p-t*h*p)*M,e[10]=(a*x*r-_*o*r+_*i*c-t*x*c-a*i*p+t*o*p)*M,e[11]=(u*o*r-a*h*r-u*i*c+t*h*c+a*i*f-t*o*f)*M,e[12]=I*M,e[13]=(u*x*s-_*h*s+_*i*d-t*x*d-u*i*g+t*h*g)*M,e[14]=(_*o*s-a*x*s-_*i*l+t*x*l+a*i*g-t*o*g)*M,e[15]=(a*h*s-u*o*s+u*i*l-t*h*l-a*i*d+t*o*d)*M,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,d=r*c,f=r*u,_=r*h,x=a*u,g=a*h,p=o*h,R=l*c,A=l*u,y=l*h,I=i.x,C=i.y,M=i.z;return s[0]=(1-(x+p))*I,s[1]=(f+y)*I,s[2]=(_-A)*I,s[3]=0,s[4]=(f-y)*C,s[5]=(1-(d+p))*C,s[6]=(g+R)*C,s[7]=0,s[8]=(_+A)*M,s[9]=(g-R)*M,s[10]=(1-(d+x))*M,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Ls.set(s[0],s[1],s[2]).length();const a=Ls.set(s[4],s[5],s[6]).length(),o=Ls.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Gn.copy(this);const c=1/r,u=1/a,h=1/o;return Gn.elements[0]*=c,Gn.elements[1]*=c,Gn.elements[2]*=c,Gn.elements[4]*=u,Gn.elements[5]*=u,Gn.elements[6]*=u,Gn.elements[8]*=h,Gn.elements[9]*=h,Gn.elements[10]*=h,t.setFromRotationMatrix(Gn),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=Ei){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),h=(t+e)/(t-e),d=(i+s)/(i-s);let f,_;if(o===Ei)f=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===oo)f=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Ei){const l=this.elements,c=1/(t-e),u=1/(i-s),h=1/(a-r),d=(t+e)*c,f=(i+s)*u;let _,x;if(o===Ei)_=(a+r)*h,x=-2*h;else if(o===oo)_=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ls=new B,Gn=new Nt,sy=new B(0,0,0),ry=new B(1,1,1),Oi=new B,Ma=new B,yn=new B,oh=new Nt,lh=new Ms;class ui{constructor(e=0,t=0,i=0,s=ui.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-it(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(it(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-it(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(it(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return oh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(oh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lh.setFromEuler(this),this.setFromQuaternion(lh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ui.DEFAULT_ORDER="XYZ";class Wf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ay=0;const ch=new B,Is=new Ms,mi=new Nt,Sa=new B,Lr=new B,oy=new B,ly=new Ms,uh=new B(1,0,0),hh=new B(0,1,0),dh=new B(0,0,1),fh={type:"added"},cy={type:"removed"},Us={type:"childadded",child:null},Ko={type:"childremoved",child:null};class Zt extends Es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ay++}),this.uuid=mr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Zt.DEFAULT_UP.clone();const e=new B,t=new ui,i=new Ms,s=new B(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Nt},normalMatrix:{value:new st}}),this.matrix=new Nt,this.matrixWorld=new Nt,this.matrixAutoUpdate=Zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Is.setFromAxisAngle(e,t),this.quaternion.multiply(Is),this}rotateOnWorldAxis(e,t){return Is.setFromAxisAngle(e,t),this.quaternion.premultiply(Is),this}rotateX(e){return this.rotateOnAxis(uh,e)}rotateY(e){return this.rotateOnAxis(hh,e)}rotateZ(e){return this.rotateOnAxis(dh,e)}translateOnAxis(e,t){return ch.copy(e).applyQuaternion(this.quaternion),this.position.add(ch.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(uh,e)}translateY(e){return this.translateOnAxis(hh,e)}translateZ(e){return this.translateOnAxis(dh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Sa.copy(e):Sa.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(Lr,Sa,this.up):mi.lookAt(Sa,Lr,this.up),this.quaternion.setFromRotationMatrix(mi),s&&(mi.extractRotation(s.matrixWorld),Is.setFromRotationMatrix(mi),this.quaternion.premultiply(Is.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fh),Us.child=e,this.dispatchEvent(Us),Us.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cy),Ko.child=e,this.dispatchEvent(Ko),Ko.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fh),Us.child=e,this.dispatchEvent(Us),Us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,e,oy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,ly,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),_.length>0&&(i.nodes=_)}return i.object=s,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Zt.DEFAULT_UP=new B(0,1,0);Zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wn=new B,gi=new B,Zo=new B,_i=new B,Ns=new B,Fs=new B,ph=new B,Jo=new B,Qo=new B,el=new B,tl=new Ot,nl=new Ot,il=new Ot;class Xn{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Wn.subVectors(e,t),s.cross(Wn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Wn.subVectors(s,t),gi.subVectors(i,t),Zo.subVectors(e,t);const a=Wn.dot(Wn),o=Wn.dot(gi),l=Wn.dot(Zo),c=gi.dot(gi),u=gi.dot(Zo),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(c*l-o*u)*d,_=(a*u-o*l)*d;return r.set(1-f-_,_,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,_i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,_i.x),l.addScaledVector(a,_i.y),l.addScaledVector(o,_i.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return tl.setScalar(0),nl.setScalar(0),il.setScalar(0),tl.fromBufferAttribute(e,t),nl.fromBufferAttribute(e,i),il.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(tl,r.x),a.addScaledVector(nl,r.y),a.addScaledVector(il,r.z),a}static isFrontFacing(e,t,i,s){return Wn.subVectors(i,t),gi.subVectors(e,t),Wn.cross(gi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),Wn.cross(gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Xn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Xn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;Ns.subVectors(s,i),Fs.subVectors(r,i),Jo.subVectors(e,i);const l=Ns.dot(Jo),c=Fs.dot(Jo);if(l<=0&&c<=0)return t.copy(i);Qo.subVectors(e,s);const u=Ns.dot(Qo),h=Fs.dot(Qo);if(u>=0&&h<=u)return t.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Ns,a);el.subVectors(e,r);const f=Ns.dot(el),_=Fs.dot(el);if(_>=0&&f<=_)return t.copy(r);const x=f*c-l*_;if(x<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(Fs,o);const g=u*_-f*h;if(g<=0&&h-u>=0&&f-_>=0)return ph.subVectors(r,s),o=(h-u)/(h-u+(f-_)),t.copy(s).addScaledVector(ph,o);const p=1/(g+x+d);return a=x*p,o=d*p,t.copy(i).addScaledVector(Ns,a).addScaledVector(Fs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Xf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ki={h:0,s:0,l:0},Ea={h:0,s:0,l:0};function sl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class lt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=ft.workingColorSpace){return this.r=e,this.g=t,this.b=i,ft.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=ft.workingColorSpace){if(e=Xc(e,1),t=it(t,0,1),i=it(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=sl(a,r,e+1/3),this.g=sl(a,r,e),this.b=sl(a,r,e-1/3)}return ft.toWorkingColorSpace(this,s),this}setStyle(e,t=mn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mn){const i=Xf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ti(e.r),this.g=Ti(e.g),this.b=Ti(e.b),this}copyLinearToSRGB(e){return this.r=ir(e.r),this.g=ir(e.g),this.b=ir(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mn){return ft.fromWorkingColorSpace(Qt.copy(this),e),Math.round(it(Qt.r*255,0,255))*65536+Math.round(it(Qt.g*255,0,255))*256+Math.round(it(Qt.b*255,0,255))}getHexString(e=mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.fromWorkingColorSpace(Qt.copy(this),t);const i=Qt.r,s=Qt.g,r=Qt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ft.workingColorSpace){return ft.fromWorkingColorSpace(Qt.copy(this),t),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=mn){ft.fromWorkingColorSpace(Qt.copy(this),e);const t=Qt.r,i=Qt.g,s=Qt.b;return e!==mn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ki),this.setHSL(ki.h+e,ki.s+t,ki.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ki),e.getHSL(Ea);const i=Xr(ki.h,Ea.h,t),s=Xr(ki.s,Ea.s,t),r=Xr(ki.l,Ea.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new lt;lt.NAMES=Xf;let uy=0;class _r extends Es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uy++}),this.uuid=mr(),this.name="",this.type="Material",this.blending=tr,this.side=Ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nl,this.blendDst=Fl,this.blendEquation=ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lt(0,0,0),this.blendAlpha=0,this.depthFunc=or,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=As,this.stencilZFail=As,this.stencilZPass=As,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==tr&&(i.blending=this.blending),this.side!==Ri&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Nl&&(i.blendSrc=this.blendSrc),this.blendDst!==Fl&&(i.blendDst=this.blendDst),this.blendEquation!==ds&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==or&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==As&&(i.stencilFail=this.stencilFail),this.stencilZFail!==As&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==As&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class qc extends _r{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=Tf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const zt=new B,Ta=new Ee;class li{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=eh,this.updateRanges=[],this.gpuType=Si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ta.fromBufferAttribute(this,t),Ta.applyMatrix3(e),this.setXY(t,Ta.x,Ta.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Gs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=on(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gs(t,this.array)),t}setX(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gs(t,this.array)),t}setY(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gs(t,this.array)),t}setW(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),i=on(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),i=on(i,this.array),s=on(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),i=on(i,this.array),s=on(s,this.array),r=on(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==eh&&(e.usage=this.usage),e}}class $f extends li{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class qf extends li{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class kt extends li{constructor(e,t,i){super(new Float32Array(e),t,i)}}let hy=0;const Rn=new Nt,rl=new Zt,Os=new B,bn=new gr,Ir=new gr,$t=new B;class On extends Es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hy++}),this.uuid=mr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zf(e)?qf:$f)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new st().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,t,i){return Rn.makeTranslation(e,t,i),this.applyMatrix4(Rn),this}scale(e,t,i){return Rn.makeScale(e,t,i),this.applyMatrix4(Rn),this}lookAt(e){return rl.lookAt(e),rl.updateMatrix(),this.applyMatrix4(rl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new kt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];bn.setFromBufferAttribute(r),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $c);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(bn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ir.setFromBufferAttribute(o),this.morphTargetsRelative?($t.addVectors(bn.min,Ir.min),bn.expandByPoint($t),$t.addVectors(bn.max,Ir.max),bn.expandByPoint($t)):(bn.expandByPoint(Ir.min),bn.expandByPoint(Ir.max))}bn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)$t.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared($t));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)$t.fromBufferAttribute(o,c),l&&(Os.fromBufferAttribute(e,c),$t.add(Os)),s=Math.max(s,i.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new li(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<i.count;D++)o[D]=new B,l[D]=new B;const c=new B,u=new B,h=new B,d=new Ee,f=new Ee,_=new Ee,x=new B,g=new B;function p(D,E,S){c.fromBufferAttribute(i,D),u.fromBufferAttribute(i,E),h.fromBufferAttribute(i,S),d.fromBufferAttribute(r,D),f.fromBufferAttribute(r,E),_.fromBufferAttribute(r,S),u.sub(c),h.sub(c),f.sub(d),_.sub(d);const L=1/(f.x*_.y-_.x*f.y);isFinite(L)&&(x.copy(u).multiplyScalar(_.y).addScaledVector(h,-f.y).multiplyScalar(L),g.copy(h).multiplyScalar(f.x).addScaledVector(u,-_.x).multiplyScalar(L),o[D].add(x),o[E].add(x),o[S].add(x),l[D].add(g),l[E].add(g),l[S].add(g))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let D=0,E=R.length;D<E;++D){const S=R[D],L=S.start,O=S.count;for(let U=L,G=L+O;U<G;U+=3)p(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const A=new B,y=new B,I=new B,C=new B;function M(D){I.fromBufferAttribute(s,D),C.copy(I);const E=o[D];A.copy(E),A.sub(I.multiplyScalar(I.dot(E))).normalize(),y.crossVectors(C,E);const L=y.dot(l[D])<0?-1:1;a.setXYZW(D,A.x,A.y,A.z,L)}for(let D=0,E=R.length;D<E;++D){const S=R[D],L=S.start,O=S.count;for(let U=L,G=L+O;U<G;U+=3)M(e.getX(U+0)),M(e.getX(U+1)),M(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new li(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new B,r=new B,a=new B,o=new B,l=new B,c=new B,u=new B,h=new B;if(e)for(let d=0,f=e.count;d<f;d+=3){const _=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,g),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let f=0,_=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*u;for(let p=0;p<u;p++)d[_++]=c[f++]}return new li(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new On,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mh=new Nt,ss=new Gf,wa=new $c,gh=new B,Aa=new B,Ca=new B,Ra=new B,al=new B,Pa=new B,_h=new B,Da=new B;class pt extends Zt{constructor(e=new On,t=new qc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Pa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(al.fromBufferAttribute(h,e),a?Pa.addScaledVector(al,u):Pa.addScaledVector(al.sub(t),u))}t.add(Pa)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),wa.copy(i.boundingSphere),wa.applyMatrix4(r),ss.copy(e.ray).recast(e.near),!(wa.containsPoint(ss.origin)===!1&&(ss.intersectSphere(wa,gh)===null||ss.origin.distanceToSquared(gh)>(e.far-e.near)**2))&&(mh.copy(r).invert(),ss.copy(e.ray).applyMatrix4(mh),!(i.boundingBox!==null&&ss.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ss)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,x=d.length;_<x;_++){const g=d[_],p=a[g.materialIndex],R=Math.max(g.start,f.start),A=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let y=R,I=A;y<I;y+=3){const C=o.getX(y),M=o.getX(y+1),D=o.getX(y+2);s=La(this,p,e,i,c,u,h,C,M,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const _=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let g=_,p=x;g<p;g+=3){const R=o.getX(g),A=o.getX(g+1),y=o.getX(g+2);s=La(this,a,e,i,c,u,h,R,A,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,x=d.length;_<x;_++){const g=d[_],p=a[g.materialIndex],R=Math.max(g.start,f.start),A=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=R,I=A;y<I;y+=3){const C=y,M=y+1,D=y+2;s=La(this,p,e,i,c,u,h,C,M,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const _=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=_,p=x;g<p;g+=3){const R=g,A=g+1,y=g+2;s=La(this,a,e,i,c,u,h,R,A,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function dy(n,e,t,i,s,r,a,o){let l;if(e.side===_n?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Ri,o),l===null)return null;Da.copy(o),Da.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Da);return c<t.near||c>t.far?null:{distance:c,point:Da.clone(),object:n}}function La(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Aa),n.getVertexPosition(l,Ca),n.getVertexPosition(c,Ra);const u=dy(n,e,t,i,Aa,Ca,Ra,_h);if(u){const h=new B;Xn.getBarycoord(_h,Aa,Ca,Ra,h),s&&(u.uv=Xn.getInterpolatedAttribute(s,o,l,c,h,new Ee)),r&&(u.uv1=Xn.getInterpolatedAttribute(r,o,l,c,h,new Ee)),a&&(u.normal=Xn.getInterpolatedAttribute(a,o,l,c,h,new B),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new B,materialIndex:0};Xn.getNormal(Aa,Ca,Ra,d.normal),u.face=d,u.barycoord=h}return u}class vr extends On{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,f=0;_("z","y","x",-1,-1,i,t,e,a,r,0),_("z","y","x",1,-1,i,t,-e,a,r,1),_("x","z","y",1,1,e,i,t,s,a,2),_("x","z","y",1,-1,e,i,-t,s,a,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new kt(c,3)),this.setAttribute("normal",new kt(u,3)),this.setAttribute("uv",new kt(h,2));function _(x,g,p,R,A,y,I,C,M,D,E){const S=y/M,L=I/D,O=y/2,U=I/2,G=C/2,ie=M+1,Z=D+1;let se=0,X=0;const ue=new B;for(let Me=0;Me<Z;Me++){const Re=Me*L-U;for(let Ie=0;Ie<ie;Ie++){const Ve=Ie*S-O;ue[x]=Ve*R,ue[g]=Re*A,ue[p]=G,c.push(ue.x,ue.y,ue.z),ue[x]=0,ue[g]=0,ue[p]=C>0?1:-1,u.push(ue.x,ue.y,ue.z),h.push(Ie/M),h.push(1-Me/D),se+=1}}for(let Me=0;Me<D;Me++)for(let Re=0;Re<M;Re++){const Ie=d+Re+ie*Me,Ve=d+Re+ie*(Me+1),ae=d+(Re+1)+ie*(Me+1),ge=d+(Re+1)+ie*Me;l.push(Ie,Ve,ge),l.push(Ve,ae,ge),X+=6}o.addGroup(f,X,E),f+=X,d+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function ln(n){const e={};for(let t=0;t<n.length;t++){const i=fr(n[t]);for(const s in i)e[s]=i[s]}return e}function fy(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Yf(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}const py={clone:fr,merge:ln};var my=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yi extends _r{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=my,this.fragmentShader=gy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fr(e.uniforms),this.uniformsGroups=fy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class jf extends Zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Nt,this.projectionMatrix=new Nt,this.projectionMatrixInverse=new Nt,this.coordinateSystem=Ei}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Bi=new B,vh=new Ee,xh=new Ee;class Ln extends jf{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ra*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Wr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ra*2*Math.atan(Math.tan(Wr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z),Bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z)}getViewSize(e,t){return this.getViewBounds(e,vh,xh),t.subVectors(xh,vh)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Wr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ks=-90,Bs=1;class _y extends Zt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ln(ks,Bs,e,t);s.layers=this.layers,this.add(s);const r=new Ln(ks,Bs,e,t);r.layers=this.layers,this.add(r);const a=new Ln(ks,Bs,e,t);a.layers=this.layers,this.add(a);const o=new Ln(ks,Bs,e,t);o.layers=this.layers,this.add(o);const l=new Ln(ks,Bs,e,t);l.layers=this.layers,this.add(l);const c=new Ln(ks,Bs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Ei)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===oo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Kf extends sn{constructor(e,t,i,s,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:lr,super(e,t,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vy extends bs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Kf(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ai}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new vr(5,5,5),r=new Yi({name:"CubemapFromEquirect",uniforms:fr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_n,blending:Xi});r.uniforms.tEquirect.value=t;const a=new pt(s,r),o=t.minFilter;return t.minFilter===ms&&(t.minFilter=ai),new _y(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}class xy extends Zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ui,this.environmentIntensity=1,this.environmentRotation=new ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ol=new B,yy=new B,by=new st;class Hi{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=ol.subVectors(i,t).cross(yy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ol),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||by.getNormalMatrix(e),s=this.coplanarPoint(ol).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rs=new $c,Ia=new B;class Yc{constructor(e=new Hi,t=new Hi,i=new Hi,s=new Hi,r=new Hi,a=new Hi){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ei){const i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],f=s[8],_=s[9],x=s[10],g=s[11],p=s[12],R=s[13],A=s[14],y=s[15];if(i[0].setComponents(l-r,d-c,g-f,y-p).normalize(),i[1].setComponents(l+r,d+c,g+f,y+p).normalize(),i[2].setComponents(l+a,d+u,g+_,y+R).normalize(),i[3].setComponents(l-a,d-u,g-_,y-R).normalize(),i[4].setComponents(l-o,d-h,g-x,y-A).normalize(),t===Ei)i[5].setComponents(l+o,d+h,g+x,y+A).normalize();else if(t===oo)i[5].setComponents(o,h,x,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(e){return rs.center.set(0,0,0),rs.radius=.7071067811865476,rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Ia.x=s.normal.x>0?e.max.x:e.min.x,Ia.y=s.normal.y>0?e.max.y:e.min.y,Ia.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ia)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Mi extends Zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class yh extends sn{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Zf extends sn{constructor(e,t,i,s,r,a,o,l,c,u=nr){if(u!==nr&&u!==hr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===nr&&(i=ys),i===void 0&&u===hr&&(i=ur),super(null,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Yn,this.minFilter=l!==void 0?l:Yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Li{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let s=0;const r=i.length;let a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);const u=i[s],d=i[s+1]-u,f=(a-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new Ee:new B);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new B,s=[],r=[],a=[],o=new B,l=new Nt;for(let f=0;f<=e;f++){const _=f/e;s[f]=this.getTangentAt(_,new B)}r[0]=new B,a[0]=new B;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(it(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,_))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(it(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],f*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Jf extends Li{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Ee){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class My extends Jf{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function jc(){let n=0,e=0,t=0,i=0;function s(r,a,o,l){n=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,h){let d=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+h)+(l-o)/h;d*=u,f*=u,s(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return n+e*r+t*a+i*o}}}const Ua=new B,ll=new jc,cl=new jc,ul=new jc;class Sy extends Li{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new B){const i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(Ua.subVectors(s[0],s[1]).add(s[0]),c=Ua);const h=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Ua.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Ua),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(h),f),x=Math.pow(h.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f);x<1e-4&&(x=1),_<1e-4&&(_=x),g<1e-4&&(g=x),ll.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,_,x,g),cl.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,_,x,g),ul.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,_,x,g)}else this.curveType==="catmullrom"&&(ll.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),cl.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),ul.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return i.set(ll.calc(l),cl.calc(l),ul.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new B().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function bh(n,e,t,i,s){const r=(i-e)*.5,a=(s-t)*.5,o=n*n,l=n*o;return(2*t-2*i+r+a)*l+(-3*t+3*i-2*r-a)*o+r*n+t}function Ey(n,e){const t=1-n;return t*t*e}function Ty(n,e){return 2*(1-n)*n*e}function wy(n,e){return n*n*e}function $r(n,e,t,i){return Ey(n,e)+Ty(n,t)+wy(n,i)}function Ay(n,e){const t=1-n;return t*t*t*e}function Cy(n,e){const t=1-n;return 3*t*t*n*e}function Ry(n,e){return 3*(1-n)*n*n*e}function Py(n,e){return n*n*n*e}function qr(n,e,t,i,s){return Ay(n,e)+Cy(n,t)+Ry(n,i)+Py(n,s)}class Dy extends Li{constructor(e=new Ee,t=new Ee,i=new Ee,s=new Ee){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Ee){const i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(qr(e,s.x,r.x,a.x,o.x),qr(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Qf extends Li{constructor(e=new B,t=new B,i=new B,s=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new B){const i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(qr(e,s.x,r.x,a.x,o.x),qr(e,s.y,r.y,a.y,o.y),qr(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ly extends Li{constructor(e=new Ee,t=new Ee){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ee){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ee){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Iy extends Li{constructor(e=new B,t=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new B){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new B){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Uy extends Li{constructor(e=new Ee,t=new Ee,i=new Ee){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Ee){const i=t,s=this.v0,r=this.v1,a=this.v2;return i.set($r(e,s.x,r.x,a.x),$r(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ep extends Li{constructor(e=new B,t=new B,i=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new B){const i=t,s=this.v0,r=this.v1,a=this.v2;return i.set($r(e,s.x,r.x,a.x),$r(e,s.y,r.y,a.y),$r(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class xc extends Li{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ee){const i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return i.set(bh(o,l.x,c.x,u.x,h.x),bh(o,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new Ee().fromArray(s))}return this}}var Ny=Object.freeze({__proto__:null,ArcCurve:My,CatmullRomCurve3:Sy,CubicBezierCurve:Dy,CubicBezierCurve3:Qf,EllipseCurve:Jf,LineCurve:Ly,LineCurve3:Iy,QuadraticBezierCurve:Uy,QuadraticBezierCurve3:ep,SplineCurve:xc});class lo extends On{constructor(e=[new Ee(0,-.5),new Ee(.5,0),new Ee(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=it(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],u=1/t,h=new B,d=new Ee,f=new B,_=new B,x=new B;let g=0,p=0;for(let R=0;R<=e.length-1;R++)switch(R){case 0:g=e[R+1].x-e[R].x,p=e[R+1].y-e[R].y,f.x=p*1,f.y=-g,f.z=p*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:g=e[R+1].x-e[R].x,p=e[R+1].y-e[R].y,f.x=p*1,f.y=-g,f.z=p*0,_.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(_)}for(let R=0;R<=t;R++){const A=i+R*u*s,y=Math.sin(A),I=Math.cos(A);for(let C=0;C<=e.length-1;C++){h.x=e[C].x*y,h.y=e[C].y,h.z=e[C].x*I,a.push(h.x,h.y,h.z),d.x=R/t,d.y=C/(e.length-1),o.push(d.x,d.y);const M=l[3*C+0]*y,D=l[3*C+1],E=l[3*C+0]*I;c.push(M,D,E)}}for(let R=0;R<t;R++)for(let A=0;A<e.length-1;A++){const y=A+R*e.length,I=y,C=y+e.length,M=y+e.length+1,D=y+1;r.push(I,C,D),r.push(M,D,C)}this.setIndex(r),this.setAttribute("position",new kt(a,3)),this.setAttribute("uv",new kt(o,2)),this.setAttribute("normal",new kt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lo(e.points,e.segments,e.phiStart,e.phiLength)}}class $s extends On{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new B,u=new Ee;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const f=i+h/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[d]/e+1)/2,u.y=(a[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new kt(a,3)),this.setAttribute("normal",new kt(o,3)),this.setAttribute("uv",new kt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $s(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class qs extends On{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],f=[];let _=0;const x=[],g=i/2;let p=0;R(),a===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(u),this.setAttribute("position",new kt(h,3)),this.setAttribute("normal",new kt(d,3)),this.setAttribute("uv",new kt(f,2));function R(){const y=new B,I=new B;let C=0;const M=(t-e)/i;for(let D=0;D<=r;D++){const E=[],S=D/r,L=S*(t-e)+e;for(let O=0;O<=s;O++){const U=O/s,G=U*l+o,ie=Math.sin(G),Z=Math.cos(G);I.x=L*ie,I.y=-S*i+g,I.z=L*Z,h.push(I.x,I.y,I.z),y.set(ie,M,Z).normalize(),d.push(y.x,y.y,y.z),f.push(U,1-S),E.push(_++)}x.push(E)}for(let D=0;D<s;D++)for(let E=0;E<r;E++){const S=x[E][D],L=x[E+1][D],O=x[E+1][D+1],U=x[E][D+1];(e>0||E!==0)&&(u.push(S,L,U),C+=3),(t>0||E!==r-1)&&(u.push(L,O,U),C+=3)}c.addGroup(p,C,0),p+=C}function A(y){const I=_,C=new Ee,M=new B;let D=0;const E=y===!0?e:t,S=y===!0?1:-1;for(let O=1;O<=s;O++)h.push(0,g*S,0),d.push(0,S,0),f.push(.5,.5),_++;const L=_;for(let O=0;O<=s;O++){const G=O/s*l+o,ie=Math.cos(G),Z=Math.sin(G);M.x=E*Z,M.y=g*S,M.z=E*ie,h.push(M.x,M.y,M.z),d.push(0,S,0),C.x=ie*.5+.5,C.y=Z*.5*S+.5,f.push(C.x,C.y),_++}for(let O=0;O<s;O++){const U=I+O,G=L+O;y===!0?u.push(G,G+1,U):u.push(G+1,G,U),D+=3}c.addGroup(p,D,y===!0?1:2),p+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qs(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Gi extends On{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,h=e/o,d=t/l,f=[],_=[],x=[],g=[];for(let p=0;p<u;p++){const R=p*d-a;for(let A=0;A<c;A++){const y=A*h-r;_.push(y,-R,0),x.push(0,0,1),g.push(A/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let R=0;R<o;R++){const A=R+c*p,y=R+c*(p+1),I=R+1+c*(p+1),C=R+1+c*p;f.push(A,y,C),f.push(y,I,C)}this.setIndex(f),this.setAttribute("position",new kt(_,3)),this.setAttribute("normal",new kt(x,3)),this.setAttribute("uv",new kt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gi(e.width,e.height,e.widthSegments,e.heightSegments)}}class Yr extends On{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const a=[],o=[],l=[],c=[],u=new B,h=new B,d=new B;for(let f=0;f<=i;f++)for(let _=0;_<=s;_++){const x=_/s*r,g=f/i*Math.PI*2;h.x=(e+t*Math.cos(g))*Math.cos(x),h.y=(e+t*Math.cos(g))*Math.sin(x),h.z=t*Math.sin(g),o.push(h.x,h.y,h.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(_/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let _=1;_<=s;_++){const x=(s+1)*f+_-1,g=(s+1)*(f-1)+_-1,p=(s+1)*(f-1)+_,R=(s+1)*f+_;a.push(x,g,R),a.push(g,p,R)}this.setIndex(a),this.setAttribute("position",new kt(o,3)),this.setAttribute("normal",new kt(l,3)),this.setAttribute("uv",new kt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Kc extends On{constructor(e=new ep(new B(-1,-1,0),new B(-1,1,0),new B(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};const a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new B,l=new B,c=new Ee;let u=new B;const h=[],d=[],f=[],_=[];x(),this.setIndex(_),this.setAttribute("position",new kt(h,3)),this.setAttribute("normal",new kt(d,3)),this.setAttribute("uv",new kt(f,2));function x(){for(let A=0;A<t;A++)g(A);g(r===!1?t:0),R(),p()}function g(A){u=e.getPointAt(A/t,u);const y=a.normals[A],I=a.binormals[A];for(let C=0;C<=s;C++){const M=C/s*Math.PI*2,D=Math.sin(M),E=-Math.cos(M);l.x=E*y.x+D*I.x,l.y=E*y.y+D*I.y,l.z=E*y.z+D*I.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=u.x+i*l.x,o.y=u.y+i*l.y,o.z=u.z+i*l.z,h.push(o.x,o.y,o.z)}}function p(){for(let A=1;A<=t;A++)for(let y=1;y<=s;y++){const I=(s+1)*(A-1)+(y-1),C=(s+1)*A+(y-1),M=(s+1)*A+y,D=(s+1)*(A-1)+y;_.push(I,C,D),_.push(C,M,D)}}function R(){for(let A=0;A<=t;A++)for(let y=0;y<=s;y++)c.x=A/t,c.y=y/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Kc(new Ny[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Fy extends _r{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new lt(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class tp extends _r{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kf,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Na extends tp{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ee(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return it(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new lt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new lt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new lt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Oy extends _r{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ky extends _r{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Mh={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class By{constructor(e,t,i){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],_=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return _}return null}}}const zy=new By;class Zc{constructor(e){this.manager=e!==void 0?e:zy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Zc.DEFAULT_MATERIAL_NAME="__DEFAULT";class Hy extends Zc{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Mh.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=aa("img");function l(){u(),Mh.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class Vy extends Zc{constructor(e){super(e)}load(e,t,i,s){const r=new sn,a=new Hy(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class Jc extends Zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new lt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Gy extends Jc{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new lt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const hl=new Nt,Sh=new B,Eh=new B;class Wy{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.map=null,this.mapPass=null,this.matrix=new Nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yc,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new Ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Sh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Sh),Eh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Eh),t.updateMatrixWorld(),hl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(hl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class np extends jf{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Xy extends Wy{constructor(){super(new np(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Th extends Jc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.target=new Zt,this.shadow=new Xy}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class $y extends Jc{constructor(e,t,i=10,s=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=i,this.height=s}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class qy extends Ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class wh{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=it(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(it(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Yy extends Es{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function Ah(n,e,t,i){const s=jy(i);switch(t){case Df:return n*e;case If:return n*e;case Uf:return n*e*2;case Nf:return n*e/s.components*s.byteLength;case Vc:return n*e/s.components*s.byteLength;case Ff:return n*e*2/s.components*s.byteLength;case Gc:return n*e*2/s.components*s.byteLength;case Lf:return n*e*3/s.components*s.byteLength;case $n:return n*e*4/s.components*s.byteLength;case Wc:return n*e*4/s.components*s.byteLength;case Wa:case Xa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case $a:case qa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Yl:case Kl:return Math.max(n,16)*Math.max(e,8)/4;case ql:case jl:return Math.max(n,8)*Math.max(e,8)/2;case Zl:case Jl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ql:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ec:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case tc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case nc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ic:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case sc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case rc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ac:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case oc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case lc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case cc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case uc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case hc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case dc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case fc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ya:case pc:case mc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Of:case gc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case _c:case vc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function jy(n){switch(n){case Pi:case Cf:return{byteLength:1,components:1};case sa:case Rf:case ha:return{byteLength:2,components:1};case zc:case Hc:return{byteLength:2,components:4};case ys:case Bc:case Si:return{byteLength:4,components:1};case Pf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kc);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ip(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Ky(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,u);else{h.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<h.length;f++){const _=h[d],x=h[f];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,_=h.length;f<_;f++){const x=h[f];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Zy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jy=`#ifdef USE_ALPHAHASH
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
#endif`,Qy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,e1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,t1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,n1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,i1=`#ifdef USE_AOMAP
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
#endif`,s1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,r1=`#ifdef USE_BATCHING
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
#endif`,a1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,o1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,l1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,c1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,u1=`#ifdef USE_IRIDESCENCE
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
#endif`,h1=`#ifdef USE_BUMPMAP
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
#endif`,d1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,f1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,p1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,m1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,g1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,v1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,x1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,y1=`#define PI 3.141592653589793
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
} // validated`,b1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,M1=`vec3 transformedNormal = objectNormal;
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
#endif`,S1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,E1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,T1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,w1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,A1="gl_FragColor = linearToOutputTexel( gl_FragColor );",C1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,R1=`#ifdef USE_ENVMAP
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
#endif`,P1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,D1=`#ifdef USE_ENVMAP
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
#endif`,L1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,I1=`#ifdef USE_ENVMAP
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
#endif`,U1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,N1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,F1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,O1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,k1=`#ifdef USE_GRADIENTMAP
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
}`,B1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,z1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,H1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,V1=`uniform bool receiveShadow;
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
#endif`,G1=`#ifdef USE_ENVMAP
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
#endif`,W1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,X1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,q1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Y1=`PhysicalMaterial material;
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
#endif`,j1=`struct PhysicalMaterial {
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
}`,K1=`
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
#endif`,Z1=`#if defined( RE_IndirectDiffuse )
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
#endif`,J1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Q1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ib=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ab=`#if defined( USE_POINTS_UV )
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
#endif`,ob=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ub=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,db=`#ifdef USE_MORPHTARGETS
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
#endif`,fb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,mb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_b=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xb=`#ifdef USE_NORMALMAP
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
#endif`,yb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Eb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ab=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Db=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ib=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ub=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Nb=`float getShadowMask() {
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
}`,Fb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ob=`#ifdef USE_SKINNING
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
#endif`,kb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bb=`#ifdef USE_SKINNING
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
#endif`,zb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wb=`#ifdef USE_TRANSMISSION
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
#endif`,Xb=`#ifdef USE_TRANSMISSION
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
#endif`,$b=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Kb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zb=`uniform sampler2D t2D;
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
}`,Jb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,eM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nM=`#include <common>
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
}`,iM=`#if DEPTH_PACKING == 3200
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
}`,sM=`#define DISTANCE
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
}`,rM=`#define DISTANCE
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
}`,aM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,oM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lM=`uniform float scale;
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
}`,cM=`uniform vec3 diffuse;
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
}`,uM=`#include <common>
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
}`,hM=`uniform vec3 diffuse;
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
}`,dM=`#define LAMBERT
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
}`,fM=`#define LAMBERT
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
}`,pM=`#define MATCAP
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
}`,mM=`#define MATCAP
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
}`,gM=`#define NORMAL
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
}`,_M=`#define NORMAL
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
}`,vM=`#define PHONG
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
}`,xM=`#define PHONG
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
}`,yM=`#define STANDARD
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
}`,bM=`#define STANDARD
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
}`,MM=`#define TOON
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
}`,SM=`#define TOON
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
}`,EM=`uniform float size;
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
}`,TM=`uniform vec3 diffuse;
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
}`,wM=`#include <common>
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
}`,AM=`uniform vec3 color;
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
}`,CM=`uniform float rotation;
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
}`,RM=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:Zy,alphahash_pars_fragment:Jy,alphamap_fragment:Qy,alphamap_pars_fragment:e1,alphatest_fragment:t1,alphatest_pars_fragment:n1,aomap_fragment:i1,aomap_pars_fragment:s1,batching_pars_vertex:r1,batching_vertex:a1,begin_vertex:o1,beginnormal_vertex:l1,bsdfs:c1,iridescence_fragment:u1,bumpmap_pars_fragment:h1,clipping_planes_fragment:d1,clipping_planes_pars_fragment:f1,clipping_planes_pars_vertex:p1,clipping_planes_vertex:m1,color_fragment:g1,color_pars_fragment:_1,color_pars_vertex:v1,color_vertex:x1,common:y1,cube_uv_reflection_fragment:b1,defaultnormal_vertex:M1,displacementmap_pars_vertex:S1,displacementmap_vertex:E1,emissivemap_fragment:T1,emissivemap_pars_fragment:w1,colorspace_fragment:A1,colorspace_pars_fragment:C1,envmap_fragment:R1,envmap_common_pars_fragment:P1,envmap_pars_fragment:D1,envmap_pars_vertex:L1,envmap_physical_pars_fragment:G1,envmap_vertex:I1,fog_vertex:U1,fog_pars_vertex:N1,fog_fragment:F1,fog_pars_fragment:O1,gradientmap_pars_fragment:k1,lightmap_pars_fragment:B1,lights_lambert_fragment:z1,lights_lambert_pars_fragment:H1,lights_pars_begin:V1,lights_toon_fragment:W1,lights_toon_pars_fragment:X1,lights_phong_fragment:$1,lights_phong_pars_fragment:q1,lights_physical_fragment:Y1,lights_physical_pars_fragment:j1,lights_fragment_begin:K1,lights_fragment_maps:Z1,lights_fragment_end:J1,logdepthbuf_fragment:Q1,logdepthbuf_pars_fragment:eb,logdepthbuf_pars_vertex:tb,logdepthbuf_vertex:nb,map_fragment:ib,map_pars_fragment:sb,map_particle_fragment:rb,map_particle_pars_fragment:ab,metalnessmap_fragment:ob,metalnessmap_pars_fragment:lb,morphinstance_vertex:cb,morphcolor_vertex:ub,morphnormal_vertex:hb,morphtarget_pars_vertex:db,morphtarget_vertex:fb,normal_fragment_begin:pb,normal_fragment_maps:mb,normal_pars_fragment:gb,normal_pars_vertex:_b,normal_vertex:vb,normalmap_pars_fragment:xb,clearcoat_normal_fragment_begin:yb,clearcoat_normal_fragment_maps:bb,clearcoat_pars_fragment:Mb,iridescence_pars_fragment:Sb,opaque_fragment:Eb,packing:Tb,premultiplied_alpha_fragment:wb,project_vertex:Ab,dithering_fragment:Cb,dithering_pars_fragment:Rb,roughnessmap_fragment:Pb,roughnessmap_pars_fragment:Db,shadowmap_pars_fragment:Lb,shadowmap_pars_vertex:Ib,shadowmap_vertex:Ub,shadowmask_pars_fragment:Nb,skinbase_vertex:Fb,skinning_pars_vertex:Ob,skinning_vertex:kb,skinnormal_vertex:Bb,specularmap_fragment:zb,specularmap_pars_fragment:Hb,tonemapping_fragment:Vb,tonemapping_pars_fragment:Gb,transmission_fragment:Wb,transmission_pars_fragment:Xb,uv_pars_fragment:$b,uv_pars_vertex:qb,uv_vertex:Yb,worldpos_vertex:jb,background_vert:Kb,background_frag:Zb,backgroundCube_vert:Jb,backgroundCube_frag:Qb,cube_vert:eM,cube_frag:tM,depth_vert:nM,depth_frag:iM,distanceRGBA_vert:sM,distanceRGBA_frag:rM,equirect_vert:aM,equirect_frag:oM,linedashed_vert:lM,linedashed_frag:cM,meshbasic_vert:uM,meshbasic_frag:hM,meshlambert_vert:dM,meshlambert_frag:fM,meshmatcap_vert:pM,meshmatcap_frag:mM,meshnormal_vert:gM,meshnormal_frag:_M,meshphong_vert:vM,meshphong_frag:xM,meshphysical_vert:yM,meshphysical_frag:bM,meshtoon_vert:MM,meshtoon_frag:SM,points_vert:EM,points_frag:TM,shadow_vert:wM,shadow_frag:AM,sprite_vert:CM,sprite_frag:RM},Le={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},ni={basic:{uniforms:ln([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:ln([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new lt(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:ln([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:ln([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:ln([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new lt(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:ln([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:ln([Le.points,Le.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:ln([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:ln([Le.common,Le.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:ln([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:ln([Le.sprite,Le.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:ln([Le.common,Le.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:ln([Le.lights,Le.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};ni.physical={uniforms:ln([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};const Fa={r:0,b:0,g:0},as=new ui,PM=new Nt;function DM(n,e,t,i,s,r,a){const o=new lt(0);let l=r===!0?0:1,c,u,h=null,d=0,f=null;function _(A){let y=A.isScene===!0?A.background:null;return y&&y.isTexture&&(y=(A.backgroundBlurriness>0?t:e).get(y)),y}function x(A){let y=!1;const I=_(A);I===null?p(o,l):I&&I.isColor&&(p(I,1),y=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(A,y){const I=_(y);I&&(I.isCubeTexture||I.mapping===So)?(u===void 0&&(u=new pt(new vr(1,1,1),new Yi({name:"BackgroundCubeMaterial",uniforms:fr(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,M,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),as.copy(y.backgroundRotation),as.x*=-1,as.y*=-1,as.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),u.material.uniforms.envMap.value=I,u.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(PM.makeRotationFromEuler(as)),u.material.toneMapped=ft.getTransfer(I.colorSpace)!==Mt,(h!==I||d!==I.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,h=I,d=I.version,f=n.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null)):I&&I.isTexture&&(c===void 0&&(c=new pt(new Gi(2,2),new Yi({name:"BackgroundMaterial",uniforms:fr(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=I,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=ft.getTransfer(I.colorSpace)!==Mt,I.matrixAutoUpdate===!0&&I.updateMatrix(),c.material.uniforms.uvTransform.value.copy(I.matrix),(h!==I||d!==I.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,h=I,d=I.version,f=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function p(A,y){A.getRGB(Fa,Yf(n)),i.buffers.color.setClear(Fa.r,Fa.g,Fa.b,y,a)}function R(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(A,y=1){o.set(A),l=y,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,p(o,l)},render:x,addToRenderList:g,dispose:R}}function LM(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,a=!1;function o(S,L,O,U,G){let ie=!1;const Z=h(U,O,L);r!==Z&&(r=Z,c(r.object)),ie=f(S,U,O,G),ie&&_(S,U,O,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(ie||a)&&(a=!1,y(S,L,O,U),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function h(S,L,O){const U=O.wireframe===!0;let G=i[S.id];G===void 0&&(G={},i[S.id]=G);let ie=G[L.id];ie===void 0&&(ie={},G[L.id]=ie);let Z=ie[U];return Z===void 0&&(Z=d(l()),ie[U]=Z),Z}function d(S){const L=[],O=[],U=[];for(let G=0;G<t;G++)L[G]=0,O[G]=0,U[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:O,attributeDivisors:U,object:S,attributes:{},index:null}}function f(S,L,O,U){const G=r.attributes,ie=L.attributes;let Z=0;const se=O.getAttributes();for(const X in se)if(se[X].location>=0){const Me=G[X];let Re=ie[X];if(Re===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(Re=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(Re=S.instanceColor)),Me===void 0||Me.attribute!==Re||Re&&Me.data!==Re.data)return!0;Z++}return r.attributesNum!==Z||r.index!==U}function _(S,L,O,U){const G={},ie=L.attributes;let Z=0;const se=O.getAttributes();for(const X in se)if(se[X].location>=0){let Me=ie[X];Me===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(Me=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(Me=S.instanceColor));const Re={};Re.attribute=Me,Me&&Me.data&&(Re.data=Me.data),G[X]=Re,Z++}r.attributes=G,r.attributesNum=Z,r.index=U}function x(){const S=r.newAttributes;for(let L=0,O=S.length;L<O;L++)S[L]=0}function g(S){p(S,0)}function p(S,L){const O=r.newAttributes,U=r.enabledAttributes,G=r.attributeDivisors;O[S]=1,U[S]===0&&(n.enableVertexAttribArray(S),U[S]=1),G[S]!==L&&(n.vertexAttribDivisor(S,L),G[S]=L)}function R(){const S=r.newAttributes,L=r.enabledAttributes;for(let O=0,U=L.length;O<U;O++)L[O]!==S[O]&&(n.disableVertexAttribArray(O),L[O]=0)}function A(S,L,O,U,G,ie,Z){Z===!0?n.vertexAttribIPointer(S,L,O,G,ie):n.vertexAttribPointer(S,L,O,U,G,ie)}function y(S,L,O,U){x();const G=U.attributes,ie=O.getAttributes(),Z=L.defaultAttributeValues;for(const se in ie){const X=ie[se];if(X.location>=0){let ue=G[se];if(ue===void 0&&(se==="instanceMatrix"&&S.instanceMatrix&&(ue=S.instanceMatrix),se==="instanceColor"&&S.instanceColor&&(ue=S.instanceColor)),ue!==void 0){const Me=ue.normalized,Re=ue.itemSize,Ie=e.get(ue);if(Ie===void 0)continue;const Ve=Ie.buffer,ae=Ie.type,ge=Ie.bytesPerElement,Ue=ae===n.INT||ae===n.UNSIGNED_INT||ue.gpuType===Bc;if(ue.isInterleavedBufferAttribute){const Te=ue.data,ke=Te.stride,Ge=ue.offset;if(Te.isInstancedInterleavedBuffer){for(let We=0;We<X.locationSize;We++)p(X.location+We,Te.meshPerAttribute);S.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let We=0;We<X.locationSize;We++)g(X.location+We);n.bindBuffer(n.ARRAY_BUFFER,Ve);for(let We=0;We<X.locationSize;We++)A(X.location+We,Re/X.locationSize,ae,Me,ke*ge,(Ge+Re/X.locationSize*We)*ge,Ue)}else{if(ue.isInstancedBufferAttribute){for(let Te=0;Te<X.locationSize;Te++)p(X.location+Te,ue.meshPerAttribute);S.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Te=0;Te<X.locationSize;Te++)g(X.location+Te);n.bindBuffer(n.ARRAY_BUFFER,Ve);for(let Te=0;Te<X.locationSize;Te++)A(X.location+Te,Re/X.locationSize,ae,Me,Re*ge,Re/X.locationSize*Te*ge,Ue)}}else if(Z!==void 0){const Me=Z[se];if(Me!==void 0)switch(Me.length){case 2:n.vertexAttrib2fv(X.location,Me);break;case 3:n.vertexAttrib3fv(X.location,Me);break;case 4:n.vertexAttrib4fv(X.location,Me);break;default:n.vertexAttrib1fv(X.location,Me)}}}}R()}function I(){D();for(const S in i){const L=i[S];for(const O in L){const U=L[O];for(const G in U)u(U[G].object),delete U[G];delete L[O]}delete i[S]}}function C(S){if(i[S.id]===void 0)return;const L=i[S.id];for(const O in L){const U=L[O];for(const G in U)u(U[G].object),delete U[G];delete L[O]}delete i[S.id]}function M(S){for(const L in i){const O=i[L];if(O[S.id]===void 0)continue;const U=O[S.id];for(const G in U)u(U[G].object),delete U[G];delete O[S.id]}}function D(){E(),a=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:E,dispose:I,releaseStatesOfGeometry:C,releaseStatesOfProgram:M,initAttributes:x,enableAttribute:g,disableUnusedAttributes:R}}function IM(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let f=0;for(let _=0;_<h;_++)f+=u[_];t.update(f,i,1)}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)a(c[_],u[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let _=0;for(let x=0;x<h;x++)_+=u[x]*d[x];t.update(_,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function UM(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(M){return!(M!==$n&&i.convert(M)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(M){const D=M===ha&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==Pi&&i.convert(M)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&M!==Si&&!D)}function l(M){if(M==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),R=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=_>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:R,maxVaryings:A,maxFragmentUniforms:y,vertexTextures:I,maxSamples:C}}function NM(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new Hi,o=new st,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||i!==0||s;return s=d,i=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const _=h.clippingPlanes,x=h.clipIntersection,g=h.clipShadows,p=n.get(h);if(!s||_===null||_.length===0||r&&!g)r?u(null):c();else{const R=r?0:i,A=R*4;let y=p.clippingState||null;l.value=y,y=u(_,d,A,f);for(let I=0;I!==A;++I)y[I]=t[I];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=R}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,_){const x=h!==null?h.length:0;let g=null;if(x!==0){if(g=l.value,_!==!0||g===null){const p=f+x*4,R=d.matrixWorldInverse;o.getNormalMatrix(R),(g===null||g.length<p)&&(g=new Float32Array(p));for(let A=0,y=f;A!==x;++A,y+=4)a.copy(h[A]).applyMatrix4(R,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function FM(n){let e=new WeakMap;function t(a,o){return o===Wl?a.mapping=lr:o===Xl&&(a.mapping=cr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Wl||o===Xl)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new vy(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const Ys=4,Ch=[.125,.215,.35,.446,.526,.582],fs=20,dl=new np,Rh=new lt;let fl=null,pl=0,ml=0,gl=!1;const us=(1+Math.sqrt(5))/2,zs=1/us,Ph=[new B(-us,zs,0),new B(us,zs,0),new B(-zs,0,us),new B(zs,0,us),new B(0,us,-zs),new B(0,us,zs),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)];class Dh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){fl=this._renderer.getRenderTarget(),pl=this._renderer.getActiveCubeFace(),ml=this._renderer.getActiveMipmapLevel(),gl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ih(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fl,pl,ml),this._renderer.xr.enabled=gl,e.scissorTest=!1,Oa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===lr||e.mapping===cr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fl=this._renderer.getRenderTarget(),pl=this._renderer.getActiveCubeFace(),ml=this._renderer.getActiveMipmapLevel(),gl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ai,minFilter:ai,generateMipmaps:!1,type:ha,format:$n,colorSpace:dr,depthBuffer:!1},s=Lh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lh(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=OM(r)),this._blurMaterial=kM(r,e,t)}return s}_compileMaterial(e){const t=new pt(this._lodPlanes[0],e);this._renderer.compile(t,dl)}_sceneToCubeUV(e,t,i,s){const o=new Ln(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Rh),u.toneMapping=$i,u.autoClear=!1;const f=new qc({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),_=new pt(new vr,f);let x=!1;const g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,x=!0):(f.color.copy(Rh),x=!0);for(let p=0;p<6;p++){const R=p%3;R===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):R===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const A=this._cubeSize;Oa(s,R*A,p>2?A:0,A,A),u.setRenderTarget(s),x&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===lr||e.mapping===cr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ih());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new pt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Oa(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,dl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ph[(s-r-1)%Ph.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new pt(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*fs-1),x=r/_,g=isFinite(r)?1+Math.floor(u*x):fs;g>fs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${fs}`);const p=[];let R=0;for(let M=0;M<fs;++M){const D=M/x,E=Math.exp(-D*D/2);p.push(E),M===0?R+=E:M<g&&(R+=2*E)}for(let M=0;M<p.length;M++)p[M]=p[M]/R;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:A}=this;d.dTheta.value=_,d.mipInt.value=A-i;const y=this._sizeLods[s],I=3*y*(s>A-Ys?s-A+Ys:0),C=4*(this._cubeSize-y);Oa(t,I,C,3*y,2*y),l.setRenderTarget(t),l.render(h,dl)}}function OM(n){const e=[],t=[],i=[];let s=n;const r=n-Ys+1+Ch.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>n-Ys?l=Ch[a-n+Ys-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,_=6,x=3,g=2,p=1,R=new Float32Array(x*_*f),A=new Float32Array(g*_*f),y=new Float32Array(p*_*f);for(let C=0;C<f;C++){const M=C%3*2/3-1,D=C>2?0:-1,E=[M,D,0,M+2/3,D,0,M+2/3,D+1,0,M,D,0,M+2/3,D+1,0,M,D+1,0];R.set(E,x*_*C),A.set(d,g*_*C);const S=[C,C,C,C,C,C];y.set(S,p*_*C)}const I=new On;I.setAttribute("position",new li(R,x)),I.setAttribute("uv",new li(A,g)),I.setAttribute("faceIndex",new li(y,p)),e.push(I),s>Ys&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Lh(n,e,t){const i=new bs(n,e,t);return i.texture.mapping=So,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Oa(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function kM(n,e,t){const i=new Float32Array(fs),s=new B(0,1,0);return new Yi({name:"SphericalGaussianBlur",defines:{n:fs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Qc(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Ih(){return new Yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qc(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Uh(){return new Yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Qc(){return`

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
	`}function BM(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Wl||l===Xl,u=l===lr||l===cr;if(c||u){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Dh(n)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return c&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new Dh(n)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function zM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Ws("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function HM(n,e,t,i){const s={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const f in d)e.update(d[f],n.ARRAY_BUFFER)}function c(h){const d=[],f=h.index,_=h.attributes.position;let x=0;if(f!==null){const R=f.array;x=f.version;for(let A=0,y=R.length;A<y;A+=3){const I=R[A+0],C=R[A+1],M=R[A+2];d.push(I,C,C,M,M,I)}}else if(_!==void 0){const R=_.array;x=_.version;for(let A=0,y=R.length/3-1;A<y;A+=3){const I=A+0,C=A+1,M=A+2;d.push(I,C,C,M,M,I)}}else return;const g=new(zf(d)?qf:$f)(d,1);g.version=x;const p=r.get(h);p&&e.remove(p),r.set(h,g)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function VM(n,e,t){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){n.drawElements(i,f,r,d*a),t.update(f,i,1)}function c(d,f,_){_!==0&&(n.drawElementsInstanced(i,f,r,d*a,_),t.update(f,i,_))}function u(d,f,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,_);let g=0;for(let p=0;p<_;p++)g+=f[p];t.update(g,i,1)}function h(d,f,_,x){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,x,0,_);let p=0;for(let R=0;R<_;R++)p+=f[R]*x[R];t.update(p,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function GM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function WM(n,e,t){const i=new WeakMap,s=new Ot;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let S=function(){D.dispose(),i.delete(o),o.removeEventListener("dispose",S)};var f=S;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],R=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let y=0;_===!0&&(y=1),x===!0&&(y=2),g===!0&&(y=3);let I=o.attributes.position.count*y,C=1;I>e.maxTextureSize&&(C=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const M=new Float32Array(I*C*4*h),D=new Vf(M,I,C,h);D.type=Si,D.needsUpdate=!0;const E=y*4;for(let L=0;L<h;L++){const O=p[L],U=R[L],G=A[L],ie=I*C*4*L;for(let Z=0;Z<O.count;Z++){const se=Z*E;_===!0&&(s.fromBufferAttribute(O,Z),M[ie+se+0]=s.x,M[ie+se+1]=s.y,M[ie+se+2]=s.z,M[ie+se+3]=0),x===!0&&(s.fromBufferAttribute(U,Z),M[ie+se+4]=s.x,M[ie+se+5]=s.y,M[ie+se+6]=s.z,M[ie+se+7]=0),g===!0&&(s.fromBufferAttribute(G,Z),M[ie+se+8]=s.x,M[ie+se+9]=s.y,M[ie+se+10]=s.z,M[ie+se+11]=G.itemSize===4?s.w:1)}}d={count:h,texture:D,size:new Ee(I,C)},i.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let _=0;for(let g=0;g<c.length;g++)_+=c[g];const x=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function XM(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const sp=new sn,Nh=new Zf(1,1),rp=new Vf,ap=new ny,op=new Kf,Fh=[],Oh=[],kh=new Float32Array(16),Bh=new Float32Array(9),zh=new Float32Array(4);function xr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Fh[s];if(r===void 0&&(r=new Float32Array(s),Fh[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Wt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Xt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Eo(n,e){let t=Oh[e];t===void 0&&(t=new Int32Array(e),Oh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function $M(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function qM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;n.uniform2fv(this.addr,e),Xt(t,e)}}function YM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Wt(t,e))return;n.uniform3fv(this.addr,e),Xt(t,e)}}function jM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;n.uniform4fv(this.addr,e),Xt(t,e)}}function KM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Wt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,i))return;zh.set(i),n.uniformMatrix2fv(this.addr,!1,zh),Xt(t,i)}}function ZM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Wt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,i))return;Bh.set(i),n.uniformMatrix3fv(this.addr,!1,Bh),Xt(t,i)}}function JM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Wt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,i))return;kh.set(i),n.uniformMatrix4fv(this.addr,!1,kh),Xt(t,i)}}function QM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function eS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;n.uniform2iv(this.addr,e),Xt(t,e)}}function tS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;n.uniform3iv(this.addr,e),Xt(t,e)}}function nS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;n.uniform4iv(this.addr,e),Xt(t,e)}}function iS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function sS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;n.uniform2uiv(this.addr,e),Xt(t,e)}}function rS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;n.uniform3uiv(this.addr,e),Xt(t,e)}}function aS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;n.uniform4uiv(this.addr,e),Xt(t,e)}}function oS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Nh.compareFunction=Bf,r=Nh):r=sp,t.setTexture2D(e||r,s)}function lS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||ap,s)}function cS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||op,s)}function uS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||rp,s)}function hS(n){switch(n){case 5126:return $M;case 35664:return qM;case 35665:return YM;case 35666:return jM;case 35674:return KM;case 35675:return ZM;case 35676:return JM;case 5124:case 35670:return QM;case 35667:case 35671:return eS;case 35668:case 35672:return tS;case 35669:case 35673:return nS;case 5125:return iS;case 36294:return sS;case 36295:return rS;case 36296:return aS;case 35678:case 36198:case 36298:case 36306:case 35682:return oS;case 35679:case 36299:case 36307:return lS;case 35680:case 36300:case 36308:case 36293:return cS;case 36289:case 36303:case 36311:case 36292:return uS}}function dS(n,e){n.uniform1fv(this.addr,e)}function fS(n,e){const t=xr(e,this.size,2);n.uniform2fv(this.addr,t)}function pS(n,e){const t=xr(e,this.size,3);n.uniform3fv(this.addr,t)}function mS(n,e){const t=xr(e,this.size,4);n.uniform4fv(this.addr,t)}function gS(n,e){const t=xr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function _S(n,e){const t=xr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function vS(n,e){const t=xr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function xS(n,e){n.uniform1iv(this.addr,e)}function yS(n,e){n.uniform2iv(this.addr,e)}function bS(n,e){n.uniform3iv(this.addr,e)}function MS(n,e){n.uniform4iv(this.addr,e)}function SS(n,e){n.uniform1uiv(this.addr,e)}function ES(n,e){n.uniform2uiv(this.addr,e)}function TS(n,e){n.uniform3uiv(this.addr,e)}function wS(n,e){n.uniform4uiv(this.addr,e)}function AS(n,e,t){const i=this.cache,s=e.length,r=Eo(t,s);Wt(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||sp,r[a])}function CS(n,e,t){const i=this.cache,s=e.length,r=Eo(t,s);Wt(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||ap,r[a])}function RS(n,e,t){const i=this.cache,s=e.length,r=Eo(t,s);Wt(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||op,r[a])}function PS(n,e,t){const i=this.cache,s=e.length,r=Eo(t,s);Wt(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||rp,r[a])}function DS(n){switch(n){case 5126:return dS;case 35664:return fS;case 35665:return pS;case 35666:return mS;case 35674:return gS;case 35675:return _S;case 35676:return vS;case 5124:case 35670:return xS;case 35667:case 35671:return yS;case 35668:case 35672:return bS;case 35669:case 35673:return MS;case 5125:return SS;case 36294:return ES;case 36295:return TS;case 36296:return wS;case 35678:case 36198:case 36298:case 36306:case 35682:return AS;case 35679:case 36299:case 36307:return CS;case 35680:case 36300:case 36308:case 36293:return RS;case 36289:case 36303:case 36311:case 36292:return PS}}class LS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=hS(t.type)}}class IS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=DS(t.type)}}class US{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const _l=/(\w+)(\])?(\[|\.)?/g;function Hh(n,e){n.seq.push(e),n.map[e.id]=e}function NS(n,e,t){const i=n.name,s=i.length;for(_l.lastIndex=0;;){const r=_l.exec(i),a=_l.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Hh(t,c===void 0?new LS(o,n,e):new IS(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new US(o),Hh(t,h)),t=h}}}class ja{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);NS(r,a,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function Vh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const FS=37297;let OS=0;function kS(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Gh=new st;function BS(n){ft._getMatrix(Gh,ft.workingColorSpace,n);const e=`mat3( ${Gh.elements.map(t=>t.toFixed(4))} )`;switch(ft.getTransfer(n)){case ao:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Wh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+kS(n.getShaderSource(e),a)}else return s}function zS(n,e){const t=BS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function HS(n,e){let t;switch(e){case px:t="Linear";break;case mx:t="Reinhard";break;case gx:t="Cineon";break;case wf:t="ACESFilmic";break;case vx:t="AgX";break;case xx:t="Neutral";break;case _x:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ka=new B;function VS(){ft.getLuminanceCoefficients(ka);const n=ka.x.toFixed(4),e=ka.y.toFixed(4),t=ka.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function GS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Or).join(`
`)}function WS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function XS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Or(n){return n!==""}function Xh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $h(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $S=/^[ \t]*#include +<([\w\d./]+)>/gm;function yc(n){return n.replace($S,YS)}const qS=new Map;function YS(n,e){let t=rt[e];if(t===void 0){const i=qS.get(e);if(i!==void 0)t=rt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return yc(t)}const jS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qh(n){return n.replace(jS,KS)}function KS(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Yh(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function ZS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ef?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===qv?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Qn&&(e="SHADOWMAP_TYPE_VSM"),e}function JS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case lr:case cr:e="ENVMAP_TYPE_CUBE";break;case So:e="ENVMAP_TYPE_CUBE_UV";break}return e}function QS(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case cr:e="ENVMAP_MODE_REFRACTION";break}return e}function eE(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Tf:e="ENVMAP_BLENDING_MULTIPLY";break;case dx:e="ENVMAP_BLENDING_MIX";break;case fx:e="ENVMAP_BLENDING_ADD";break}return e}function tE(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function nE(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=ZS(t),c=JS(t),u=QS(t),h=eE(t),d=tE(t),f=GS(t),_=WS(r),x=s.createProgram();let g,p,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Or).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Or).join(`
`),p.length>0&&(p+=`
`)):(g=[Yh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Or).join(`
`),p=[Yh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$i?"#define TONE_MAPPING":"",t.toneMapping!==$i?rt.tonemapping_pars_fragment:"",t.toneMapping!==$i?HS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,zS("linearToOutputTexel",t.outputColorSpace),VS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Or).join(`
`)),a=yc(a),a=Xh(a,t),a=$h(a,t),o=yc(o),o=Xh(o,t),o=$h(o,t),a=qh(a),o=qh(o),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===th?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===th?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const A=R+g+a,y=R+p+o,I=Vh(s,s.VERTEX_SHADER,A),C=Vh(s,s.FRAGMENT_SHADER,y);s.attachShader(x,I),s.attachShader(x,C),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function M(L){if(n.debug.checkShaderErrors){const O=s.getProgramInfoLog(x).trim(),U=s.getShaderInfoLog(I).trim(),G=s.getShaderInfoLog(C).trim();let ie=!0,Z=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(ie=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,I,C);else{const se=Wh(s,I,"vertex"),X=Wh(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+O+`
`+se+`
`+X)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(U===""||G==="")&&(Z=!1);Z&&(L.diagnostics={runnable:ie,programLog:O,vertexShader:{log:U,prefix:g},fragmentShader:{log:G,prefix:p}})}s.deleteShader(I),s.deleteShader(C),D=new ja(s,x),E=XS(s,x)}let D;this.getUniforms=function(){return D===void 0&&M(this),D};let E;this.getAttributes=function(){return E===void 0&&M(this),E};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(x,FS)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=OS++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=I,this.fragmentShader=C,this}let iE=0;class sE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new rE(e),t.set(e,i)),i}}class rE{constructor(e){this.id=iE++,this.code=e,this.usedTimes=0}}function aE(n,e,t,i,s,r,a){const o=new Wf,l=new sE,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return c.add(E),E===0?"uv":`uv${E}`}function g(E,S,L,O,U){const G=O.fog,ie=U.geometry,Z=E.isMeshStandardMaterial?O.environment:null,se=(E.isMeshStandardMaterial?t:e).get(E.envMap||Z),X=se&&se.mapping===So?se.image.height:null,ue=_[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const Me=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,Re=Me!==void 0?Me.length:0;let Ie=0;ie.morphAttributes.position!==void 0&&(Ie=1),ie.morphAttributes.normal!==void 0&&(Ie=2),ie.morphAttributes.color!==void 0&&(Ie=3);let Ve,ae,ge,Ue;if(ue){const ht=ni[ue];Ve=ht.vertexShader,ae=ht.fragmentShader}else Ve=E.vertexShader,ae=E.fragmentShader,l.update(E),ge=l.getVertexShaderID(E),Ue=l.getFragmentShaderID(E);const Te=n.getRenderTarget(),ke=n.state.buffers.depth.getReversed(),Ge=U.isInstancedMesh===!0,We=U.isBatchedMesh===!0,At=!!E.map,P=!!E.matcap,k=!!se,T=!!E.aoMap,le=!!E.lightMap,J=!!E.bumpMap,Q=!!E.normalMap,te=!!E.displacementMap,ce=!!E.emissiveMap,ee=!!E.metalnessMap,b=!!E.roughnessMap,v=E.anisotropy>0,F=E.clearcoat>0,W=E.dispersion>0,K=E.iridescence>0,j=E.sheen>0,be=E.transmission>0,fe=v&&!!E.anisotropyMap,xe=F&&!!E.clearcoatMap,He=F&&!!E.clearcoatNormalMap,_e=F&&!!E.clearcoatRoughnessMap,Ae=K&&!!E.iridescenceMap,Be=K&&!!E.iridescenceThicknessMap,$e=j&&!!E.sheenColorMap,we=j&&!!E.sheenRoughnessMap,Ye=!!E.specularMap,Ke=!!E.specularColorMap,Je=!!E.specularIntensityMap,V=be&&!!E.transmissionMap,Ne=be&&!!E.thicknessMap,ne=!!E.gradientMap,he=!!E.alphaMap,Oe=E.alphaTest>0,Pe=!!E.alphaHash,Qe=!!E.extensions;let Pt=$i;E.toneMapped&&(Te===null||Te.isXRRenderTarget===!0)&&(Pt=n.toneMapping);const Ht={shaderID:ue,shaderType:E.type,shaderName:E.name,vertexShader:Ve,fragmentShader:ae,defines:E.defines,customVertexShaderID:ge,customFragmentShaderID:Ue,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:We,batchingColor:We&&U._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&U.instanceColor!==null,instancingMorph:Ge&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Te===null?n.outputColorSpace:Te.isXRRenderTarget===!0?Te.texture.colorSpace:dr,alphaToCoverage:!!E.alphaToCoverage,map:At,matcap:P,envMap:k,envMapMode:k&&se.mapping,envMapCubeUVHeight:X,aoMap:T,lightMap:le,bumpMap:J,normalMap:Q,displacementMap:d&&te,emissiveMap:ce,normalMapObjectSpace:Q&&E.normalMapType===Sx,normalMapTangentSpace:Q&&E.normalMapType===kf,metalnessMap:ee,roughnessMap:b,anisotropy:v,anisotropyMap:fe,clearcoat:F,clearcoatMap:xe,clearcoatNormalMap:He,clearcoatRoughnessMap:_e,dispersion:W,iridescence:K,iridescenceMap:Ae,iridescenceThicknessMap:Be,sheen:j,sheenColorMap:$e,sheenRoughnessMap:we,specularMap:Ye,specularColorMap:Ke,specularIntensityMap:Je,transmission:be,transmissionMap:V,thicknessMap:Ne,gradientMap:ne,opaque:E.transparent===!1&&E.blending===tr&&E.alphaToCoverage===!1,alphaMap:he,alphaTest:Oe,alphaHash:Pe,combine:E.combine,mapUv:At&&x(E.map.channel),aoMapUv:T&&x(E.aoMap.channel),lightMapUv:le&&x(E.lightMap.channel),bumpMapUv:J&&x(E.bumpMap.channel),normalMapUv:Q&&x(E.normalMap.channel),displacementMapUv:te&&x(E.displacementMap.channel),emissiveMapUv:ce&&x(E.emissiveMap.channel),metalnessMapUv:ee&&x(E.metalnessMap.channel),roughnessMapUv:b&&x(E.roughnessMap.channel),anisotropyMapUv:fe&&x(E.anisotropyMap.channel),clearcoatMapUv:xe&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:He&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:Be&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:$e&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:we&&x(E.sheenRoughnessMap.channel),specularMapUv:Ye&&x(E.specularMap.channel),specularColorMapUv:Ke&&x(E.specularColorMap.channel),specularIntensityMapUv:Je&&x(E.specularIntensityMap.channel),transmissionMapUv:V&&x(E.transmissionMap.channel),thicknessMapUv:Ne&&x(E.thicknessMap.channel),alphaMapUv:he&&x(E.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&(Q||v),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!ie.attributes.uv&&(At||he),fog:!!G,useFog:E.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:ke,skinning:U.isSkinnedMesh===!0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:Ie,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:Pt,decodeVideoTexture:At&&E.map.isVideoTexture===!0&&ft.getTransfer(E.map.colorSpace)===Mt,decodeVideoTextureEmissive:ce&&E.emissiveMap.isVideoTexture===!0&&ft.getTransfer(E.emissiveMap.colorSpace)===Mt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===In,flipSided:E.side===_n,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Qe&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qe&&E.extensions.multiDraw===!0||We)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ht.vertexUv1s=c.has(1),Ht.vertexUv2s=c.has(2),Ht.vertexUv3s=c.has(3),c.clear(),Ht}function p(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const L in E.defines)S.push(L),S.push(E.defines[L]);return E.isRawShaderMaterial===!1&&(R(S,E),A(S,E),S.push(n.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function R(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function A(E,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),E.push(o.mask)}function y(E){const S=_[E.type];let L;if(S){const O=ni[S];L=py.clone(O.uniforms)}else L=E.uniforms;return L}function I(E,S){let L;for(let O=0,U=u.length;O<U;O++){const G=u[O];if(G.cacheKey===S){L=G,++L.usedTimes;break}}return L===void 0&&(L=new nE(n,S,E,r),u.push(L)),L}function C(E){if(--E.usedTimes===0){const S=u.indexOf(E);u[S]=u[u.length-1],u.pop(),E.destroy()}}function M(E){l.remove(E)}function D(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:I,releaseProgram:C,releaseShaderCache:M,programs:u,dispose:D}}function oE(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function lE(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function jh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Kh(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(h,d,f,_,x,g){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:_,renderOrder:h.renderOrder,z:x,group:g},n[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=x,p.group=g),e++,p}function o(h,d,f,_,x,g){const p=a(h,d,f,_,x,g);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(h,d,f,_,x,g){const p=a(h,d,f,_,x,g);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||lE),i.length>1&&i.sort(d||jh),s.length>1&&s.sort(d||jh)}function u(){for(let h=e,d=n.length;h<d;h++){const f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function cE(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new Kh,n.set(i,[a])):s>=r.length?(a=new Kh,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function uE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new lt};break;case"SpotLight":t={position:new B,direction:new B,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new lt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":t={color:new lt,position:new B,halfWidth:new B,halfHeight:new B};break}return n[e.id]=t,t}}}function hE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let dE=0;function fE(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function pE(n){const e=new uE,t=hE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);const s=new B,r=new Nt,a=new Nt;function o(c){let u=0,h=0,d=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let f=0,_=0,x=0,g=0,p=0,R=0,A=0,y=0,I=0,C=0,M=0;c.sort(fE);for(let E=0,S=c.length;E<S;E++){const L=c[E],O=L.color,U=L.intensity,G=L.distance,ie=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=O.r*U,h+=O.g*U,d+=O.b*U;else if(L.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(L.sh.coefficients[Z],U);M++}else if(L.isDirectionalLight){const Z=e.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const se=L.shadow,X=t.get(L);X.shadowIntensity=se.intensity,X.shadowBias=se.bias,X.shadowNormalBias=se.normalBias,X.shadowRadius=se.radius,X.shadowMapSize=se.mapSize,i.directionalShadow[f]=X,i.directionalShadowMap[f]=ie,i.directionalShadowMatrix[f]=L.shadow.matrix,R++}i.directional[f]=Z,f++}else if(L.isSpotLight){const Z=e.get(L);Z.position.setFromMatrixPosition(L.matrixWorld),Z.color.copy(O).multiplyScalar(U),Z.distance=G,Z.coneCos=Math.cos(L.angle),Z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Z.decay=L.decay,i.spot[x]=Z;const se=L.shadow;if(L.map&&(i.spotLightMap[I]=L.map,I++,se.updateMatrices(L),L.castShadow&&C++),i.spotLightMatrix[x]=se.matrix,L.castShadow){const X=t.get(L);X.shadowIntensity=se.intensity,X.shadowBias=se.bias,X.shadowNormalBias=se.normalBias,X.shadowRadius=se.radius,X.shadowMapSize=se.mapSize,i.spotShadow[x]=X,i.spotShadowMap[x]=ie,y++}x++}else if(L.isRectAreaLight){const Z=e.get(L);Z.color.copy(O).multiplyScalar(U),Z.halfWidth.set(L.width*.5,0,0),Z.halfHeight.set(0,L.height*.5,0),i.rectArea[g]=Z,g++}else if(L.isPointLight){const Z=e.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),Z.distance=L.distance,Z.decay=L.decay,L.castShadow){const se=L.shadow,X=t.get(L);X.shadowIntensity=se.intensity,X.shadowBias=se.bias,X.shadowNormalBias=se.normalBias,X.shadowRadius=se.radius,X.shadowMapSize=se.mapSize,X.shadowCameraNear=se.camera.near,X.shadowCameraFar=se.camera.far,i.pointShadow[_]=X,i.pointShadowMap[_]=ie,i.pointShadowMatrix[_]=L.shadow.matrix,A++}i.point[_]=Z,_++}else if(L.isHemisphereLight){const Z=e.get(L);Z.skyColor.copy(L.color).multiplyScalar(U),Z.groundColor.copy(L.groundColor).multiplyScalar(U),i.hemi[p]=Z,p++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Le.LTC_FLOAT_1,i.rectAreaLTC2=Le.LTC_FLOAT_2):(i.rectAreaLTC1=Le.LTC_HALF_1,i.rectAreaLTC2=Le.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const D=i.hash;(D.directionalLength!==f||D.pointLength!==_||D.spotLength!==x||D.rectAreaLength!==g||D.hemiLength!==p||D.numDirectionalShadows!==R||D.numPointShadows!==A||D.numSpotShadows!==y||D.numSpotMaps!==I||D.numLightProbes!==M)&&(i.directional.length=f,i.spot.length=x,i.rectArea.length=g,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=R,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=y+I-C,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=M,D.directionalLength=f,D.pointLength=_,D.spotLength=x,D.rectAreaLength=g,D.hemiLength=p,D.numDirectionalShadows=R,D.numPointShadows=A,D.numSpotShadows=y,D.numSpotMaps=I,D.numLightProbes=M,i.version=dE++)}function l(c,u){let h=0,d=0,f=0,_=0,x=0;const g=u.matrixWorldInverse;for(let p=0,R=c.length;p<R;p++){const A=c[p];if(A.isDirectionalLight){const y=i.directional[h];y.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),h++}else if(A.isSpotLight){const y=i.spot[f];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),f++}else if(A.isRectAreaLight){const y=i.rectArea[_];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(g),a.identity(),r.copy(A.matrixWorld),r.premultiply(g),a.extractRotation(r),y.halfWidth.set(A.width*.5,0,0),y.halfHeight.set(0,A.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),_++}else if(A.isPointLight){const y=i.point[d];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(g),d++}else if(A.isHemisphereLight){const y=i.hemi[x];y.direction.setFromMatrixPosition(A.matrixWorld),y.direction.transformDirection(g),x++}}}return{setup:o,setupView:l,state:i}}function Zh(n){const e=new pE(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function mE(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Zh(n),e.set(s,[o])):r>=a.length?(o=new Zh(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const gE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_E=`uniform sampler2D shadow_pass;
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
}`;function vE(n,e,t){let i=new Yc;const s=new Ee,r=new Ee,a=new Ot,o=new Oy({depthPacking:Mx}),l=new ky,c={},u=t.maxTextureSize,h={[Ri]:_n,[_n]:Ri,[In]:In},d=new Yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:gE,fragmentShader:_E}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new On;_.setAttribute("position",new li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new pt(_,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ef;let p=this.type;this.render=function(C,M,D){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;const E=n.getRenderTarget(),S=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),O=n.state;O.setBlending(Xi),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const U=p!==Qn&&this.type===Qn,G=p===Qn&&this.type!==Qn;for(let ie=0,Z=C.length;ie<Z;ie++){const se=C[ie],X=se.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const ue=X.getFrameExtents();if(s.multiply(ue),r.copy(X.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ue.x),s.x=r.x*ue.x,X.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ue.y),s.y=r.y*ue.y,X.mapSize.y=r.y)),X.map===null||U===!0||G===!0){const Re=this.type!==Qn?{minFilter:Yn,magFilter:Yn}:{};X.map!==null&&X.map.dispose(),X.map=new bs(s.x,s.y,Re),X.map.texture.name=se.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();const Me=X.getViewportCount();for(let Re=0;Re<Me;Re++){const Ie=X.getViewport(Re);a.set(r.x*Ie.x,r.y*Ie.y,r.x*Ie.z,r.y*Ie.w),O.viewport(a),X.updateMatrices(se,Re),i=X.getFrustum(),y(M,D,X.camera,se,this.type)}X.isPointLightShadow!==!0&&this.type===Qn&&R(X,D),X.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(E,S,L)};function R(C,M){const D=e.update(x);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new bs(s.x,s.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(M,null,D,d,x,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(M,null,D,f,x,null)}function A(C,M,D,E){let S=null;const L=D.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(L!==void 0)S=L;else if(S=D.isPointLight===!0?l:o,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const O=S.uuid,U=M.uuid;let G=c[O];G===void 0&&(G={},c[O]=G);let ie=G[U];ie===void 0&&(ie=S.clone(),G[U]=ie,M.addEventListener("dispose",I)),S=ie}if(S.visible=M.visible,S.wireframe=M.wireframe,E===Qn?S.side=M.shadowSide!==null?M.shadowSide:M.side:S.side=M.shadowSide!==null?M.shadowSide:h[M.side],S.alphaMap=M.alphaMap,S.alphaTest=M.alphaTest,S.map=M.map,S.clipShadows=M.clipShadows,S.clippingPlanes=M.clippingPlanes,S.clipIntersection=M.clipIntersection,S.displacementMap=M.displacementMap,S.displacementScale=M.displacementScale,S.displacementBias=M.displacementBias,S.wireframeLinewidth=M.wireframeLinewidth,S.linewidth=M.linewidth,D.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const O=n.properties.get(S);O.light=D}return S}function y(C,M,D,E,S){if(C.visible===!1)return;if(C.layers.test(M.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===Qn)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,C.matrixWorld);const U=e.update(C),G=C.material;if(Array.isArray(G)){const ie=U.groups;for(let Z=0,se=ie.length;Z<se;Z++){const X=ie[Z],ue=G[X.materialIndex];if(ue&&ue.visible){const Me=A(C,ue,E,S);C.onBeforeShadow(n,C,M,D,U,Me,X),n.renderBufferDirect(D,null,U,Me,C,X),C.onAfterShadow(n,C,M,D,U,Me,X)}}}else if(G.visible){const ie=A(C,G,E,S);C.onBeforeShadow(n,C,M,D,U,ie,null),n.renderBufferDirect(D,null,U,ie,C,null),C.onAfterShadow(n,C,M,D,U,ie,null)}}const O=C.children;for(let U=0,G=O.length;U<G;U++)y(O[U],M,D,E,S)}function I(C){C.target.removeEventListener("dispose",I);for(const D in c){const E=c[D],S=C.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}const xE={[Ol]:kl,[Bl]:Vl,[zl]:Gl,[or]:Hl,[kl]:Ol,[Vl]:Bl,[Gl]:zl,[Hl]:or};function yE(n,e){function t(){let V=!1;const Ne=new Ot;let ne=null;const he=new Ot(0,0,0,0);return{setMask:function(Oe){ne!==Oe&&!V&&(n.colorMask(Oe,Oe,Oe,Oe),ne=Oe)},setLocked:function(Oe){V=Oe},setClear:function(Oe,Pe,Qe,Pt,Ht){Ht===!0&&(Oe*=Pt,Pe*=Pt,Qe*=Pt),Ne.set(Oe,Pe,Qe,Pt),he.equals(Ne)===!1&&(n.clearColor(Oe,Pe,Qe,Pt),he.copy(Ne))},reset:function(){V=!1,ne=null,he.set(-1,0,0,0)}}}function i(){let V=!1,Ne=!1,ne=null,he=null,Oe=null;return{setReversed:function(Pe){if(Ne!==Pe){const Qe=e.get("EXT_clip_control");Ne?Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.ZERO_TO_ONE_EXT):Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.NEGATIVE_ONE_TO_ONE_EXT);const Pt=Oe;Oe=null,this.setClear(Pt)}Ne=Pe},getReversed:function(){return Ne},setTest:function(Pe){Pe?Te(n.DEPTH_TEST):ke(n.DEPTH_TEST)},setMask:function(Pe){ne!==Pe&&!V&&(n.depthMask(Pe),ne=Pe)},setFunc:function(Pe){if(Ne&&(Pe=xE[Pe]),he!==Pe){switch(Pe){case Ol:n.depthFunc(n.NEVER);break;case kl:n.depthFunc(n.ALWAYS);break;case Bl:n.depthFunc(n.LESS);break;case or:n.depthFunc(n.LEQUAL);break;case zl:n.depthFunc(n.EQUAL);break;case Hl:n.depthFunc(n.GEQUAL);break;case Vl:n.depthFunc(n.GREATER);break;case Gl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}he=Pe}},setLocked:function(Pe){V=Pe},setClear:function(Pe){Oe!==Pe&&(Ne&&(Pe=1-Pe),n.clearDepth(Pe),Oe=Pe)},reset:function(){V=!1,ne=null,he=null,Oe=null,Ne=!1}}}function s(){let V=!1,Ne=null,ne=null,he=null,Oe=null,Pe=null,Qe=null,Pt=null,Ht=null;return{setTest:function(ht){V||(ht?Te(n.STENCIL_TEST):ke(n.STENCIL_TEST))},setMask:function(ht){Ne!==ht&&!V&&(n.stencilMask(ht),Ne=ht)},setFunc:function(ht,vn,kn){(ne!==ht||he!==vn||Oe!==kn)&&(n.stencilFunc(ht,vn,kn),ne=ht,he=vn,Oe=kn)},setOp:function(ht,vn,kn){(Pe!==ht||Qe!==vn||Pt!==kn)&&(n.stencilOp(ht,vn,kn),Pe=ht,Qe=vn,Pt=kn)},setLocked:function(ht){V=ht},setClear:function(ht){Ht!==ht&&(n.clearStencil(ht),Ht=ht)},reset:function(){V=!1,Ne=null,ne=null,he=null,Oe=null,Pe=null,Qe=null,Pt=null,Ht=null}}}const r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],_=null,x=!1,g=null,p=null,R=null,A=null,y=null,I=null,C=null,M=new lt(0,0,0),D=0,E=!1,S=null,L=null,O=null,U=null,G=null;const ie=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,se=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(X)[1]),Z=se>=1):X.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),Z=se>=2);let ue=null,Me={};const Re=n.getParameter(n.SCISSOR_BOX),Ie=n.getParameter(n.VIEWPORT),Ve=new Ot().fromArray(Re),ae=new Ot().fromArray(Ie);function ge(V,Ne,ne,he){const Oe=new Uint8Array(4),Pe=n.createTexture();n.bindTexture(V,Pe),n.texParameteri(V,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(V,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Qe=0;Qe<ne;Qe++)V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?n.texImage3D(Ne,0,n.RGBA,1,1,he,0,n.RGBA,n.UNSIGNED_BYTE,Oe):n.texImage2D(Ne+Qe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Oe);return Pe}const Ue={};Ue[n.TEXTURE_2D]=ge(n.TEXTURE_2D,n.TEXTURE_2D,1),Ue[n.TEXTURE_CUBE_MAP]=ge(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ue[n.TEXTURE_2D_ARRAY]=ge(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ue[n.TEXTURE_3D]=ge(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Te(n.DEPTH_TEST),a.setFunc(or),J(!1),Q(ju),Te(n.CULL_FACE),T(Xi);function Te(V){u[V]!==!0&&(n.enable(V),u[V]=!0)}function ke(V){u[V]!==!1&&(n.disable(V),u[V]=!1)}function Ge(V,Ne){return h[V]!==Ne?(n.bindFramebuffer(V,Ne),h[V]=Ne,V===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Ne),V===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Ne),!0):!1}function We(V,Ne){let ne=f,he=!1;if(V){ne=d.get(Ne),ne===void 0&&(ne=[],d.set(Ne,ne));const Oe=V.textures;if(ne.length!==Oe.length||ne[0]!==n.COLOR_ATTACHMENT0){for(let Pe=0,Qe=Oe.length;Pe<Qe;Pe++)ne[Pe]=n.COLOR_ATTACHMENT0+Pe;ne.length=Oe.length,he=!0}}else ne[0]!==n.BACK&&(ne[0]=n.BACK,he=!0);he&&n.drawBuffers(ne)}function At(V){return _!==V?(n.useProgram(V),_=V,!0):!1}const P={[ds]:n.FUNC_ADD,[jv]:n.FUNC_SUBTRACT,[Kv]:n.FUNC_REVERSE_SUBTRACT};P[Zv]=n.MIN,P[Jv]=n.MAX;const k={[Qv]:n.ZERO,[ex]:n.ONE,[tx]:n.SRC_COLOR,[Nl]:n.SRC_ALPHA,[ox]:n.SRC_ALPHA_SATURATE,[rx]:n.DST_COLOR,[ix]:n.DST_ALPHA,[nx]:n.ONE_MINUS_SRC_COLOR,[Fl]:n.ONE_MINUS_SRC_ALPHA,[ax]:n.ONE_MINUS_DST_COLOR,[sx]:n.ONE_MINUS_DST_ALPHA,[lx]:n.CONSTANT_COLOR,[cx]:n.ONE_MINUS_CONSTANT_COLOR,[ux]:n.CONSTANT_ALPHA,[hx]:n.ONE_MINUS_CONSTANT_ALPHA};function T(V,Ne,ne,he,Oe,Pe,Qe,Pt,Ht,ht){if(V===Xi){x===!0&&(ke(n.BLEND),x=!1);return}if(x===!1&&(Te(n.BLEND),x=!0),V!==Yv){if(V!==g||ht!==E){if((p!==ds||y!==ds)&&(n.blendEquation(n.FUNC_ADD),p=ds,y=ds),ht)switch(V){case tr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ku:n.blendFunc(n.ONE,n.ONE);break;case Zu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ju:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case tr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ku:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Zu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ju:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}R=null,A=null,I=null,C=null,M.set(0,0,0),D=0,g=V,E=ht}return}Oe=Oe||Ne,Pe=Pe||ne,Qe=Qe||he,(Ne!==p||Oe!==y)&&(n.blendEquationSeparate(P[Ne],P[Oe]),p=Ne,y=Oe),(ne!==R||he!==A||Pe!==I||Qe!==C)&&(n.blendFuncSeparate(k[ne],k[he],k[Pe],k[Qe]),R=ne,A=he,I=Pe,C=Qe),(Pt.equals(M)===!1||Ht!==D)&&(n.blendColor(Pt.r,Pt.g,Pt.b,Ht),M.copy(Pt),D=Ht),g=V,E=!1}function le(V,Ne){V.side===In?ke(n.CULL_FACE):Te(n.CULL_FACE);let ne=V.side===_n;Ne&&(ne=!ne),J(ne),V.blending===tr&&V.transparent===!1?T(Xi):T(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),a.setFunc(V.depthFunc),a.setTest(V.depthTest),a.setMask(V.depthWrite),r.setMask(V.colorWrite);const he=V.stencilWrite;o.setTest(he),he&&(o.setMask(V.stencilWriteMask),o.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),o.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),ce(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?Te(n.SAMPLE_ALPHA_TO_COVERAGE):ke(n.SAMPLE_ALPHA_TO_COVERAGE)}function J(V){S!==V&&(V?n.frontFace(n.CW):n.frontFace(n.CCW),S=V)}function Q(V){V!==Xv?(Te(n.CULL_FACE),V!==L&&(V===ju?n.cullFace(n.BACK):V===$v?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ke(n.CULL_FACE),L=V}function te(V){V!==O&&(Z&&n.lineWidth(V),O=V)}function ce(V,Ne,ne){V?(Te(n.POLYGON_OFFSET_FILL),(U!==Ne||G!==ne)&&(n.polygonOffset(Ne,ne),U=Ne,G=ne)):ke(n.POLYGON_OFFSET_FILL)}function ee(V){V?Te(n.SCISSOR_TEST):ke(n.SCISSOR_TEST)}function b(V){V===void 0&&(V=n.TEXTURE0+ie-1),ue!==V&&(n.activeTexture(V),ue=V)}function v(V,Ne,ne){ne===void 0&&(ue===null?ne=n.TEXTURE0+ie-1:ne=ue);let he=Me[ne];he===void 0&&(he={type:void 0,texture:void 0},Me[ne]=he),(he.type!==V||he.texture!==Ne)&&(ue!==ne&&(n.activeTexture(ne),ue=ne),n.bindTexture(V,Ne||Ue[V]),he.type=V,he.texture=Ne)}function F(){const V=Me[ue];V!==void 0&&V.type!==void 0&&(n.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function W(){try{n.compressedTexImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function K(){try{n.compressedTexImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function j(){try{n.texSubImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function be(){try{n.texSubImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function fe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function xe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function He(){try{n.texStorage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function _e(){try{n.texStorage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ae(){try{n.texImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Be(){try{n.texImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function $e(V){Ve.equals(V)===!1&&(n.scissor(V.x,V.y,V.z,V.w),Ve.copy(V))}function we(V){ae.equals(V)===!1&&(n.viewport(V.x,V.y,V.z,V.w),ae.copy(V))}function Ye(V,Ne){let ne=c.get(Ne);ne===void 0&&(ne=new WeakMap,c.set(Ne,ne));let he=ne.get(V);he===void 0&&(he=n.getUniformBlockIndex(Ne,V.name),ne.set(V,he))}function Ke(V,Ne){const he=c.get(Ne).get(V);l.get(Ne)!==he&&(n.uniformBlockBinding(Ne,he,V.__bindingPointIndex),l.set(Ne,he))}function Je(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ue=null,Me={},h={},d=new WeakMap,f=[],_=null,x=!1,g=null,p=null,R=null,A=null,y=null,I=null,C=null,M=new lt(0,0,0),D=0,E=!1,S=null,L=null,O=null,U=null,G=null,Ve.set(0,0,n.canvas.width,n.canvas.height),ae.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Te,disable:ke,bindFramebuffer:Ge,drawBuffers:We,useProgram:At,setBlending:T,setMaterial:le,setFlipSided:J,setCullFace:Q,setLineWidth:te,setPolygonOffset:ce,setScissorTest:ee,activeTexture:b,bindTexture:v,unbindTexture:F,compressedTexImage2D:W,compressedTexImage3D:K,texImage2D:Ae,texImage3D:Be,updateUBOMapping:Ye,uniformBlockBinding:Ke,texStorage2D:He,texStorage3D:_e,texSubImage2D:j,texSubImage3D:be,compressedTexSubImage2D:fe,compressedTexSubImage3D:xe,scissor:$e,viewport:we,reset:Je}}function bE(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ee,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(b,v){return f?new OffscreenCanvas(b,v):aa("canvas")}function x(b,v,F){let W=1;const K=ee(b);if((K.width>F||K.height>F)&&(W=F/Math.max(K.width,K.height)),W<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const j=Math.floor(W*K.width),be=Math.floor(W*K.height);h===void 0&&(h=_(j,be));const fe=v?_(j,be):h;return fe.width=j,fe.height=be,fe.getContext("2d").drawImage(b,0,0,j,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+j+"x"+be+")."),fe}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),b;return b}function g(b){return b.generateMipmaps}function p(b){n.generateMipmap(b)}function R(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(b,v,F,W,K=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let j=v;if(v===n.RED&&(F===n.FLOAT&&(j=n.R32F),F===n.HALF_FLOAT&&(j=n.R16F),F===n.UNSIGNED_BYTE&&(j=n.R8)),v===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(j=n.R8UI),F===n.UNSIGNED_SHORT&&(j=n.R16UI),F===n.UNSIGNED_INT&&(j=n.R32UI),F===n.BYTE&&(j=n.R8I),F===n.SHORT&&(j=n.R16I),F===n.INT&&(j=n.R32I)),v===n.RG&&(F===n.FLOAT&&(j=n.RG32F),F===n.HALF_FLOAT&&(j=n.RG16F),F===n.UNSIGNED_BYTE&&(j=n.RG8)),v===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(j=n.RG8UI),F===n.UNSIGNED_SHORT&&(j=n.RG16UI),F===n.UNSIGNED_INT&&(j=n.RG32UI),F===n.BYTE&&(j=n.RG8I),F===n.SHORT&&(j=n.RG16I),F===n.INT&&(j=n.RG32I)),v===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(j=n.RGB8UI),F===n.UNSIGNED_SHORT&&(j=n.RGB16UI),F===n.UNSIGNED_INT&&(j=n.RGB32UI),F===n.BYTE&&(j=n.RGB8I),F===n.SHORT&&(j=n.RGB16I),F===n.INT&&(j=n.RGB32I)),v===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),F===n.UNSIGNED_INT&&(j=n.RGBA32UI),F===n.BYTE&&(j=n.RGBA8I),F===n.SHORT&&(j=n.RGBA16I),F===n.INT&&(j=n.RGBA32I)),v===n.RGB&&F===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),v===n.RGBA){const be=K?ao:ft.getTransfer(W);F===n.FLOAT&&(j=n.RGBA32F),F===n.HALF_FLOAT&&(j=n.RGBA16F),F===n.UNSIGNED_BYTE&&(j=be===Mt?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function y(b,v){let F;return b?v===null||v===ys||v===ur?F=n.DEPTH24_STENCIL8:v===Si?F=n.DEPTH32F_STENCIL8:v===sa&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ys||v===ur?F=n.DEPTH_COMPONENT24:v===Si?F=n.DEPTH_COMPONENT32F:v===sa&&(F=n.DEPTH_COMPONENT16),F}function I(b,v){return g(b)===!0||b.isFramebufferTexture&&b.minFilter!==Yn&&b.minFilter!==ai?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function C(b){const v=b.target;v.removeEventListener("dispose",C),D(v),v.isVideoTexture&&u.delete(v)}function M(b){const v=b.target;v.removeEventListener("dispose",M),S(v)}function D(b){const v=i.get(b);if(v.__webglInit===void 0)return;const F=b.source,W=d.get(F);if(W){const K=W[v.__cacheKey];K.usedTimes--,K.usedTimes===0&&E(b),Object.keys(W).length===0&&d.delete(F)}i.remove(b)}function E(b){const v=i.get(b);n.deleteTexture(v.__webglTexture);const F=b.source,W=d.get(F);delete W[v.__cacheKey],a.memory.textures--}function S(b){const v=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(v.__webglFramebuffer[W]))for(let K=0;K<v.__webglFramebuffer[W].length;K++)n.deleteFramebuffer(v.__webglFramebuffer[W][K]);else n.deleteFramebuffer(v.__webglFramebuffer[W]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[W])}else{if(Array.isArray(v.__webglFramebuffer))for(let W=0;W<v.__webglFramebuffer.length;W++)n.deleteFramebuffer(v.__webglFramebuffer[W]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let W=0;W<v.__webglColorRenderbuffer.length;W++)v.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[W]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const F=b.textures;for(let W=0,K=F.length;W<K;W++){const j=i.get(F[W]);j.__webglTexture&&(n.deleteTexture(j.__webglTexture),a.memory.textures--),i.remove(F[W])}i.remove(b)}let L=0;function O(){L=0}function U(){const b=L;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),L+=1,b}function G(b){const v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.colorSpace),v.join()}function ie(b,v){const F=i.get(b);if(b.isVideoTexture&&te(b),b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){const W=b.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ae(F,b,v);return}}t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+v)}function Z(b,v){const F=i.get(b);if(b.version>0&&F.__version!==b.version){ae(F,b,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+v)}function se(b,v){const F=i.get(b);if(b.version>0&&F.__version!==b.version){ae(F,b,v);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+v)}function X(b,v){const F=i.get(b);if(b.version>0&&F.__version!==b.version){ge(F,b,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+v)}const ue={[ia]:n.REPEAT,[ps]:n.CLAMP_TO_EDGE,[$l]:n.MIRRORED_REPEAT},Me={[Yn]:n.NEAREST,[yx]:n.NEAREST_MIPMAP_NEAREST,[ga]:n.NEAREST_MIPMAP_LINEAR,[ai]:n.LINEAR,[Ho]:n.LINEAR_MIPMAP_NEAREST,[ms]:n.LINEAR_MIPMAP_LINEAR},Re={[Ex]:n.NEVER,[Px]:n.ALWAYS,[Tx]:n.LESS,[Bf]:n.LEQUAL,[wx]:n.EQUAL,[Rx]:n.GEQUAL,[Ax]:n.GREATER,[Cx]:n.NOTEQUAL};function Ie(b,v){if(v.type===Si&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===ai||v.magFilter===Ho||v.magFilter===ga||v.magFilter===ms||v.minFilter===ai||v.minFilter===Ho||v.minFilter===ga||v.minFilter===ms)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,ue[v.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,ue[v.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,ue[v.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,Me[v.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,Me[v.minFilter]),v.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,Re[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Yn||v.minFilter!==ga&&v.minFilter!==ms||v.type===Si&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Ve(b,v){let F=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",C));const W=v.source;let K=d.get(W);K===void 0&&(K={},d.set(W,K));const j=G(v);if(j!==b.__cacheKey){K[j]===void 0&&(K[j]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,F=!0),K[j].usedTimes++;const be=K[b.__cacheKey];be!==void 0&&(K[b.__cacheKey].usedTimes--,be.usedTimes===0&&E(v)),b.__cacheKey=j,b.__webglTexture=K[j].texture}return F}function ae(b,v,F){let W=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(W=n.TEXTURE_3D);const K=Ve(b,v),j=v.source;t.bindTexture(W,b.__webglTexture,n.TEXTURE0+F);const be=i.get(j);if(j.version!==be.__version||K===!0){t.activeTexture(n.TEXTURE0+F);const fe=ft.getPrimaries(ft.workingColorSpace),xe=v.colorSpace===Vi?null:ft.getPrimaries(v.colorSpace),He=v.colorSpace===Vi||fe===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let _e=x(v.image,!1,s.maxTextureSize);_e=ce(v,_e);const Ae=r.convert(v.format,v.colorSpace),Be=r.convert(v.type);let $e=A(v.internalFormat,Ae,Be,v.colorSpace,v.isVideoTexture);Ie(W,v);let we;const Ye=v.mipmaps,Ke=v.isVideoTexture!==!0,Je=be.__version===void 0||K===!0,V=j.dataReady,Ne=I(v,_e);if(v.isDepthTexture)$e=y(v.format===hr,v.type),Je&&(Ke?t.texStorage2D(n.TEXTURE_2D,1,$e,_e.width,_e.height):t.texImage2D(n.TEXTURE_2D,0,$e,_e.width,_e.height,0,Ae,Be,null));else if(v.isDataTexture)if(Ye.length>0){Ke&&Je&&t.texStorage2D(n.TEXTURE_2D,Ne,$e,Ye[0].width,Ye[0].height);for(let ne=0,he=Ye.length;ne<he;ne++)we=Ye[ne],Ke?V&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,we.width,we.height,Ae,Be,we.data):t.texImage2D(n.TEXTURE_2D,ne,$e,we.width,we.height,0,Ae,Be,we.data);v.generateMipmaps=!1}else Ke?(Je&&t.texStorage2D(n.TEXTURE_2D,Ne,$e,_e.width,_e.height),V&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,_e.width,_e.height,Ae,Be,_e.data)):t.texImage2D(n.TEXTURE_2D,0,$e,_e.width,_e.height,0,Ae,Be,_e.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ke&&Je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ne,$e,Ye[0].width,Ye[0].height,_e.depth);for(let ne=0,he=Ye.length;ne<he;ne++)if(we=Ye[ne],v.format!==$n)if(Ae!==null)if(Ke){if(V)if(v.layerUpdates.size>0){const Oe=Ah(we.width,we.height,v.format,v.type);for(const Pe of v.layerUpdates){const Qe=we.data.subarray(Pe*Oe/we.data.BYTES_PER_ELEMENT,(Pe+1)*Oe/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,Pe,we.width,we.height,1,Ae,Qe)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,we.width,we.height,_e.depth,Ae,we.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ne,$e,we.width,we.height,_e.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ke?V&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,we.width,we.height,_e.depth,Ae,Be,we.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ne,$e,we.width,we.height,_e.depth,0,Ae,Be,we.data)}else{Ke&&Je&&t.texStorage2D(n.TEXTURE_2D,Ne,$e,Ye[0].width,Ye[0].height);for(let ne=0,he=Ye.length;ne<he;ne++)we=Ye[ne],v.format!==$n?Ae!==null?Ke?V&&t.compressedTexSubImage2D(n.TEXTURE_2D,ne,0,0,we.width,we.height,Ae,we.data):t.compressedTexImage2D(n.TEXTURE_2D,ne,$e,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?V&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,we.width,we.height,Ae,Be,we.data):t.texImage2D(n.TEXTURE_2D,ne,$e,we.width,we.height,0,Ae,Be,we.data)}else if(v.isDataArrayTexture)if(Ke){if(Je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ne,$e,_e.width,_e.height,_e.depth),V)if(v.layerUpdates.size>0){const ne=Ah(_e.width,_e.height,v.format,v.type);for(const he of v.layerUpdates){const Oe=_e.data.subarray(he*ne/_e.data.BYTES_PER_ELEMENT,(he+1)*ne/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,he,_e.width,_e.height,1,Ae,Be,Oe)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Ae,Be,_e.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,$e,_e.width,_e.height,_e.depth,0,Ae,Be,_e.data);else if(v.isData3DTexture)Ke?(Je&&t.texStorage3D(n.TEXTURE_3D,Ne,$e,_e.width,_e.height,_e.depth),V&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Ae,Be,_e.data)):t.texImage3D(n.TEXTURE_3D,0,$e,_e.width,_e.height,_e.depth,0,Ae,Be,_e.data);else if(v.isFramebufferTexture){if(Je)if(Ke)t.texStorage2D(n.TEXTURE_2D,Ne,$e,_e.width,_e.height);else{let ne=_e.width,he=_e.height;for(let Oe=0;Oe<Ne;Oe++)t.texImage2D(n.TEXTURE_2D,Oe,$e,ne,he,0,Ae,Be,null),ne>>=1,he>>=1}}else if(Ye.length>0){if(Ke&&Je){const ne=ee(Ye[0]);t.texStorage2D(n.TEXTURE_2D,Ne,$e,ne.width,ne.height)}for(let ne=0,he=Ye.length;ne<he;ne++)we=Ye[ne],Ke?V&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,Ae,Be,we):t.texImage2D(n.TEXTURE_2D,ne,$e,Ae,Be,we);v.generateMipmaps=!1}else if(Ke){if(Je){const ne=ee(_e);t.texStorage2D(n.TEXTURE_2D,Ne,$e,ne.width,ne.height)}V&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ae,Be,_e)}else t.texImage2D(n.TEXTURE_2D,0,$e,Ae,Be,_e);g(v)&&p(W),be.__version=j.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function ge(b,v,F){if(v.image.length!==6)return;const W=Ve(b,v),K=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+F);const j=i.get(K);if(K.version!==j.__version||W===!0){t.activeTexture(n.TEXTURE0+F);const be=ft.getPrimaries(ft.workingColorSpace),fe=v.colorSpace===Vi?null:ft.getPrimaries(v.colorSpace),xe=v.colorSpace===Vi||be===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const He=v.isCompressedTexture||v.image[0].isCompressedTexture,_e=v.image[0]&&v.image[0].isDataTexture,Ae=[];for(let he=0;he<6;he++)!He&&!_e?Ae[he]=x(v.image[he],!0,s.maxCubemapSize):Ae[he]=_e?v.image[he].image:v.image[he],Ae[he]=ce(v,Ae[he]);const Be=Ae[0],$e=r.convert(v.format,v.colorSpace),we=r.convert(v.type),Ye=A(v.internalFormat,$e,we,v.colorSpace),Ke=v.isVideoTexture!==!0,Je=j.__version===void 0||W===!0,V=K.dataReady;let Ne=I(v,Be);Ie(n.TEXTURE_CUBE_MAP,v);let ne;if(He){Ke&&Je&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ne,Ye,Be.width,Be.height);for(let he=0;he<6;he++){ne=Ae[he].mipmaps;for(let Oe=0;Oe<ne.length;Oe++){const Pe=ne[Oe];v.format!==$n?$e!==null?Ke?V&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Oe,0,0,Pe.width,Pe.height,$e,Pe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Oe,Ye,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ke?V&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Oe,0,0,Pe.width,Pe.height,$e,we,Pe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Oe,Ye,Pe.width,Pe.height,0,$e,we,Pe.data)}}}else{if(ne=v.mipmaps,Ke&&Je){ne.length>0&&Ne++;const he=ee(Ae[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ne,Ye,he.width,he.height)}for(let he=0;he<6;he++)if(_e){Ke?V&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ae[he].width,Ae[he].height,$e,we,Ae[he].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Ye,Ae[he].width,Ae[he].height,0,$e,we,Ae[he].data);for(let Oe=0;Oe<ne.length;Oe++){const Qe=ne[Oe].image[he].image;Ke?V&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Oe+1,0,0,Qe.width,Qe.height,$e,we,Qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Oe+1,Ye,Qe.width,Qe.height,0,$e,we,Qe.data)}}else{Ke?V&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,$e,we,Ae[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Ye,$e,we,Ae[he]);for(let Oe=0;Oe<ne.length;Oe++){const Pe=ne[Oe];Ke?V&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Oe+1,0,0,$e,we,Pe.image[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Oe+1,Ye,$e,we,Pe.image[he])}}}g(v)&&p(n.TEXTURE_CUBE_MAP),j.__version=K.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function Ue(b,v,F,W,K,j){const be=r.convert(F.format,F.colorSpace),fe=r.convert(F.type),xe=A(F.internalFormat,be,fe,F.colorSpace),He=i.get(v),_e=i.get(F);if(_e.__renderTarget=v,!He.__hasExternalTextures){const Ae=Math.max(1,v.width>>j),Be=Math.max(1,v.height>>j);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,j,xe,Ae,Be,v.depth,0,be,fe,null):t.texImage2D(K,j,xe,Ae,Be,0,be,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),Q(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,K,_e.__webglTexture,0,J(v)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,K,_e.__webglTexture,j),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Te(b,v,F){if(n.bindRenderbuffer(n.RENDERBUFFER,b),v.depthBuffer){const W=v.depthTexture,K=W&&W.isDepthTexture?W.type:null,j=y(v.stencilBuffer,K),be=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=J(v);Q(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,j,v.width,v.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,j,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,j,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,be,n.RENDERBUFFER,b)}else{const W=v.textures;for(let K=0;K<W.length;K++){const j=W[K],be=r.convert(j.format,j.colorSpace),fe=r.convert(j.type),xe=A(j.internalFormat,be,fe,j.colorSpace),He=J(v);F&&Q(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,He,xe,v.width,v.height):Q(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,He,xe,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,xe,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ke(b,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const W=i.get(v.depthTexture);W.__renderTarget=v,(!W.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),ie(v.depthTexture,0);const K=W.__webglTexture,j=J(v);if(v.depthTexture.format===nr)Q(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0);else if(v.depthTexture.format===hr)Q(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Ge(b){const v=i.get(b),F=b.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==b.depthTexture){const W=b.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),W){const K=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,W.removeEventListener("dispose",K)};W.addEventListener("dispose",K),v.__depthDisposeCallback=K}v.__boundDepthTexture=W}if(b.depthTexture&&!v.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");ke(v.__webglFramebuffer,b)}else if(F){v.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[W]),v.__webglDepthbuffer[W]===void 0)v.__webglDepthbuffer[W]=n.createRenderbuffer(),Te(v.__webglDepthbuffer[W],b,!1);else{const K=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=v.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,j)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),Te(v.__webglDepthbuffer,b,!1);else{const W=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,W,n.RENDERBUFFER,K)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function We(b,v,F){const W=i.get(b);v!==void 0&&Ue(W.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&Ge(b)}function At(b){const v=b.texture,F=i.get(b),W=i.get(v);b.addEventListener("dispose",M);const K=b.textures,j=b.isWebGLCubeRenderTarget===!0,be=K.length>1;if(be||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=v.version,a.memory.textures++),j){F.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[fe]=[];for(let xe=0;xe<v.mipmaps.length;xe++)F.__webglFramebuffer[fe][xe]=n.createFramebuffer()}else F.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let fe=0;fe<v.mipmaps.length;fe++)F.__webglFramebuffer[fe]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(be)for(let fe=0,xe=K.length;fe<xe;fe++){const He=i.get(K[fe]);He.__webglTexture===void 0&&(He.__webglTexture=n.createTexture(),a.memory.textures++)}if(b.samples>0&&Q(b)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let fe=0;fe<K.length;fe++){const xe=K[fe];F.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[fe]);const He=r.convert(xe.format,xe.colorSpace),_e=r.convert(xe.type),Ae=A(xe.internalFormat,He,_e,xe.colorSpace,b.isXRRenderTarget===!0),Be=J(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Be,Ae,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,F.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),Te(F.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),Ie(n.TEXTURE_CUBE_MAP,v);for(let fe=0;fe<6;fe++)if(v.mipmaps&&v.mipmaps.length>0)for(let xe=0;xe<v.mipmaps.length;xe++)Ue(F.__webglFramebuffer[fe][xe],b,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,xe);else Ue(F.__webglFramebuffer[fe],b,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);g(v)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let fe=0,xe=K.length;fe<xe;fe++){const He=K[fe],_e=i.get(He);t.bindTexture(n.TEXTURE_2D,_e.__webglTexture),Ie(n.TEXTURE_2D,He),Ue(F.__webglFramebuffer,b,He,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,0),g(He)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(fe=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,W.__webglTexture),Ie(fe,v),v.mipmaps&&v.mipmaps.length>0)for(let xe=0;xe<v.mipmaps.length;xe++)Ue(F.__webglFramebuffer[xe],b,v,n.COLOR_ATTACHMENT0,fe,xe);else Ue(F.__webglFramebuffer,b,v,n.COLOR_ATTACHMENT0,fe,0);g(v)&&p(fe),t.unbindTexture()}b.depthBuffer&&Ge(b)}function P(b){const v=b.textures;for(let F=0,W=v.length;F<W;F++){const K=v[F];if(g(K)){const j=R(b),be=i.get(K).__webglTexture;t.bindTexture(j,be),p(j),t.unbindTexture()}}}const k=[],T=[];function le(b){if(b.samples>0){if(Q(b)===!1){const v=b.textures,F=b.width,W=b.height;let K=n.COLOR_BUFFER_BIT;const j=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=i.get(b),fe=v.length>1;if(fe)for(let xe=0;xe<v.length;xe++)t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let xe=0;xe<v.length;xe++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),fe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,be.__webglColorRenderbuffer[xe]);const He=i.get(v[xe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,He,0)}n.blitFramebuffer(0,0,F,W,0,0,F,W,K,n.NEAREST),l===!0&&(k.length=0,T.length=0,k.push(n.COLOR_ATTACHMENT0+xe),b.depthBuffer&&b.resolveDepthBuffer===!1&&(k.push(j),T.push(j),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,T)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,k))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let xe=0;xe<v.length;xe++){t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,be.__webglColorRenderbuffer[xe]);const He=i.get(v[xe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,He,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const v=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function J(b){return Math.min(s.maxSamples,b.samples)}function Q(b){const v=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function te(b){const v=a.render.frame;u.get(b)!==v&&(u.set(b,v),b.update())}function ce(b,v){const F=b.colorSpace,W=b.format,K=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||F!==dr&&F!==Vi&&(ft.getTransfer(F)===Mt?(W!==$n||K!==Pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),v}function ee(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=O,this.setTexture2D=ie,this.setTexture2DArray=Z,this.setTexture3D=se,this.setTextureCube=X,this.rebindTextures=We,this.setupRenderTarget=At,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=le,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=Q}function ME(n,e){function t(i,s=Vi){let r;const a=ft.getTransfer(s);if(i===Pi)return n.UNSIGNED_BYTE;if(i===zc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Hc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Pf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Cf)return n.BYTE;if(i===Rf)return n.SHORT;if(i===sa)return n.UNSIGNED_SHORT;if(i===Bc)return n.INT;if(i===ys)return n.UNSIGNED_INT;if(i===Si)return n.FLOAT;if(i===ha)return n.HALF_FLOAT;if(i===Df)return n.ALPHA;if(i===Lf)return n.RGB;if(i===$n)return n.RGBA;if(i===If)return n.LUMINANCE;if(i===Uf)return n.LUMINANCE_ALPHA;if(i===nr)return n.DEPTH_COMPONENT;if(i===hr)return n.DEPTH_STENCIL;if(i===Nf)return n.RED;if(i===Vc)return n.RED_INTEGER;if(i===Ff)return n.RG;if(i===Gc)return n.RG_INTEGER;if(i===Wc)return n.RGBA_INTEGER;if(i===Wa||i===Xa||i===$a||i===qa)if(a===Mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Wa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===$a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===qa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Wa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Xa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===$a)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===qa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ql||i===Yl||i===jl||i===Kl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ql)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Yl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===jl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Kl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Zl||i===Jl||i===Ql)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Zl||i===Jl)return a===Mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ql)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ec||i===tc||i===nc||i===ic||i===sc||i===rc||i===ac||i===oc||i===lc||i===cc||i===uc||i===hc||i===dc||i===fc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ec)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===tc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===nc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ic)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===sc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===rc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ac)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===oc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===lc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===cc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===uc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===hc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===dc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===fc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ya||i===pc||i===mc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ya)return a===Mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===pc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===mc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Of||i===gc||i===_c||i===vc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ya)return r.COMPRESSED_RED_RGTC1_EXT;if(i===gc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===_c)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===vc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ur?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const SE={type:"move"};class vl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const g=t.getJointPose(x,i),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(SE)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Mi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const EE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,TE=`
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

}`;class wE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new sn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Yi({vertexShader:EE,fragmentShader:TE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new pt(new Gi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class AE extends Es{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,_=null;const x=new wE,g=t.getContextAttributes();let p=null,R=null;const A=[],y=[],I=new Ee;let C=null;const M=new Ln;M.viewport=new Ot;const D=new Ln;D.viewport=new Ot;const E=[M,D],S=new qy;let L=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let ge=A[ae];return ge===void 0&&(ge=new vl,A[ae]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(ae){let ge=A[ae];return ge===void 0&&(ge=new vl,A[ae]=ge),ge.getGripSpace()},this.getHand=function(ae){let ge=A[ae];return ge===void 0&&(ge=new vl,A[ae]=ge),ge.getHandSpace()};function U(ae){const ge=y.indexOf(ae.inputSource);if(ge===-1)return;const Ue=A[ge];Ue!==void 0&&(Ue.update(ae.inputSource,ae.frame,c||a),Ue.dispatchEvent({type:ae.type,data:ae.inputSource}))}function G(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",ie);for(let ae=0;ae<A.length;ae++){const ge=y[ae];ge!==null&&(y[ae]=null,A[ae].disconnect(ge))}L=null,O=null,x.reset(),e.setRenderTarget(p),f=null,d=null,h=null,s=null,R=null,Ve.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){r=ae,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){o=ae,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ae){c=ae},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(ae){if(s=ae,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",G),s.addEventListener("inputsourceschange",ie),g.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(I),s.enabledFeatures!==void 0&&s.enabledFeatures.includes("layers")){let Ue=null,Te=null,ke=null;g.depth&&(ke=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ue=g.stencil?hr:nr,Te=g.stencil?ur:ys);const Ge={colorFormat:t.RGBA8,depthFormat:ke,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(Ge),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),R=new bs(d.textureWidth,d.textureHeight,{format:$n,type:Pi,depthTexture:new Zf(d.textureWidth,d.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,Ue),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}else{const Ue={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Ue),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),R=new bs(f.framebufferWidth,f.framebufferHeight,{format:$n,type:Pi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}R.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ve.setContext(s),Ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function ie(ae){for(let ge=0;ge<ae.removed.length;ge++){const Ue=ae.removed[ge],Te=y.indexOf(Ue);Te>=0&&(y[Te]=null,A[Te].disconnect(Ue))}for(let ge=0;ge<ae.added.length;ge++){const Ue=ae.added[ge];let Te=y.indexOf(Ue);if(Te===-1){for(let Ge=0;Ge<A.length;Ge++)if(Ge>=y.length){y.push(Ue),Te=Ge;break}else if(y[Ge]===null){y[Ge]=Ue,Te=Ge;break}if(Te===-1)break}const ke=A[Te];ke&&ke.connect(Ue)}}const Z=new B,se=new B;function X(ae,ge,Ue){Z.setFromMatrixPosition(ge.matrixWorld),se.setFromMatrixPosition(Ue.matrixWorld);const Te=Z.distanceTo(se),ke=ge.projectionMatrix.elements,Ge=Ue.projectionMatrix.elements,We=ke[14]/(ke[10]-1),At=ke[14]/(ke[10]+1),P=(ke[9]+1)/ke[5],k=(ke[9]-1)/ke[5],T=(ke[8]-1)/ke[0],le=(Ge[8]+1)/Ge[0],J=We*T,Q=We*le,te=Te/(-T+le),ce=te*-T;if(ge.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(ce),ae.translateZ(te),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),ke[10]===-1)ae.projectionMatrix.copy(ge.projectionMatrix),ae.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{const ee=We+te,b=At+te,v=J-ce,F=Q+(Te-ce),W=P*At/b*ee,K=k*At/b*ee;ae.projectionMatrix.makePerspective(v,F,W,K,ee,b),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function ue(ae,ge){ge===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(ge.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(s===null)return;let ge=ae.near,Ue=ae.far;x.texture!==null&&(x.depthNear>0&&(ge=x.depthNear),x.depthFar>0&&(Ue=x.depthFar)),S.near=D.near=M.near=ge,S.far=D.far=M.far=Ue,(L!==S.near||O!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,O=S.far),M.layers.mask=ae.layers.mask|2,D.layers.mask=ae.layers.mask|4,S.layers.mask=M.layers.mask|D.layers.mask;const Te=ae.parent,ke=S.cameras;ue(S,Te);for(let Ge=0;Ge<ke.length;Ge++)ue(ke[Ge],Te);ke.length===2?X(S,M,D):S.projectionMatrix.copy(M.projectionMatrix),Me(ae,S,Te)};function Me(ae,ge,Ue){Ue===null?ae.matrix.copy(ge.matrixWorld):(ae.matrix.copy(Ue.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(ge.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(ge.projectionMatrix),ae.projectionMatrixInverse.copy(ge.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=ra*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(ae){l=ae,d!==null&&(d.fixedFoveation=ae),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ae)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let Re=null;function Ie(ae,ge){if(u=ge.getViewerPose(c||a),_=ge,u!==null){const Ue=u.views;f!==null&&(e.setRenderTargetFramebuffer(R,f.framebuffer),e.setRenderTarget(R));let Te=!1;Ue.length!==S.cameras.length&&(S.cameras.length=0,Te=!0);for(let Ge=0;Ge<Ue.length;Ge++){const We=Ue[Ge];let At=null;if(f!==null)At=f.getViewport(We);else{const k=h.getViewSubImage(d,We);At=k.viewport,Ge===0&&(e.setRenderTargetTextures(R,k.colorTexture,d.ignoreDepthValues?void 0:k.depthStencilTexture),e.setRenderTarget(R))}let P=E[Ge];P===void 0&&(P=new Ln,P.layers.enable(Ge),P.viewport=new Ot,E[Ge]=P),P.matrix.fromArray(We.transform.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale),P.projectionMatrix.fromArray(We.projectionMatrix),P.projectionMatrixInverse.copy(P.projectionMatrix).invert(),P.viewport.set(At.x,At.y,At.width,At.height),Ge===0&&(S.matrix.copy(P.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Te===!0&&S.cameras.push(P)}const ke=s.enabledFeatures;if(ke&&ke.includes("depth-sensing")){const Ge=h.getDepthInformation(Ue[0]);Ge&&Ge.isValid&&Ge.texture&&x.init(e,Ge,s.renderState)}}for(let Ue=0;Ue<A.length;Ue++){const Te=y[Ue],ke=A[Ue];Te!==null&&ke!==void 0&&ke.update(Te,ge,c||a)}Re&&Re(ae,ge),ge.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ge}),_=null}const Ve=new ip;Ve.setAnimationLoop(Ie),this.setAnimationLoop=function(ae){Re=ae},this.dispose=function(){}}}const os=new ui,CE=new Nt;function RE(n,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,Yf(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,R,A,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),h(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,y)):p.isMeshMatcapMaterial?(r(g,p),_(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,R,A):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===_n&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===_n&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const R=e.get(p),A=R.envMap,y=R.envMapRotation;A&&(g.envMap.value=A,os.copy(y),os.x*=-1,os.y*=-1,os.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),g.envMapRotation.value.setFromMatrix4(CE.makeRotationFromEuler(os)),g.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,R,A){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*R,g.scale.value=A*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,R){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===_n&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=R.texture,g.transmissionSamplerSize.value.set(R.width,R.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){const R=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(R.matrixWorld),g.nearDistance.value=R.shadow.camera.near,g.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function PE(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(R,A){const y=A.program;i.uniformBlockBinding(R,y)}function c(R,A){let y=s[R.id];y===void 0&&(_(R),y=u(R),s[R.id]=y,R.addEventListener("dispose",g));const I=A.program;i.updateUBOMapping(R,I);const C=e.render.frame;r[R.id]!==C&&(d(R),r[R.id]=C)}function u(R){const A=h();R.__bindingPointIndex=A;const y=n.createBuffer(),I=R.__size,C=R.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,I,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,y),y}function h(){for(let R=0;R<o;R++)if(a.indexOf(R)===-1)return a.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(R){const A=s[R.id],y=R.uniforms,I=R.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let C=0,M=y.length;C<M;C++){const D=Array.isArray(y[C])?y[C]:[y[C]];for(let E=0,S=D.length;E<S;E++){const L=D[E];if(f(L,C,E,I)===!0){const O=L.__offset,U=Array.isArray(L.value)?L.value:[L.value];let G=0;for(let ie=0;ie<U.length;ie++){const Z=U[ie],se=x(Z);typeof Z=="number"||typeof Z=="boolean"?(L.__data[0]=Z,n.bufferSubData(n.UNIFORM_BUFFER,O+G,L.__data)):Z.isMatrix3?(L.__data[0]=Z.elements[0],L.__data[1]=Z.elements[1],L.__data[2]=Z.elements[2],L.__data[3]=0,L.__data[4]=Z.elements[3],L.__data[5]=Z.elements[4],L.__data[6]=Z.elements[5],L.__data[7]=0,L.__data[8]=Z.elements[6],L.__data[9]=Z.elements[7],L.__data[10]=Z.elements[8],L.__data[11]=0):(Z.toArray(L.__data,G),G+=se.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(R,A,y,I){const C=R.value,M=A+"_"+y;if(I[M]===void 0)return typeof C=="number"||typeof C=="boolean"?I[M]=C:I[M]=C.clone(),!0;{const D=I[M];if(typeof C=="number"||typeof C=="boolean"){if(D!==C)return I[M]=C,!0}else if(D.equals(C)===!1)return D.copy(C),!0}return!1}function _(R){const A=R.uniforms;let y=0;const I=16;for(let M=0,D=A.length;M<D;M++){const E=Array.isArray(A[M])?A[M]:[A[M]];for(let S=0,L=E.length;S<L;S++){const O=E[S],U=Array.isArray(O.value)?O.value:[O.value];for(let G=0,ie=U.length;G<ie;G++){const Z=U[G],se=x(Z),X=y%I,ue=X%se.boundary,Me=X+ue;y+=ue,Me!==0&&I-Me<se.storage&&(y+=I-Me),O.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=y,y+=se.storage}}}const C=y%I;return C>0&&(y+=I-C),R.__size=y,R.__cache={},this}function x(R){const A={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(A.boundary=4,A.storage=4):R.isVector2?(A.boundary=8,A.storage=8):R.isVector3||R.isColor?(A.boundary=16,A.storage=12):R.isVector4?(A.boundary=16,A.storage=16):R.isMatrix3?(A.boundary=48,A.storage=48):R.isMatrix4?(A.boundary=64,A.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),A}function g(R){const A=R.target;A.removeEventListener("dispose",g);const y=a.indexOf(A.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function p(){for(const R in s)n.deleteBuffer(s[R]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}class DE{constructor(e={}){const{canvas:t=qx(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;const _=new Uint32Array(4),x=new Int32Array(4);let g=null,p=null;const R=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mn,this.toneMapping=$i,this.toneMappingExposure=1;const y=this;let I=!1,C=0,M=0,D=null,E=-1,S=null;const L=new Ot,O=new Ot;let U=null;const G=new lt(0);let ie=0,Z=t.width,se=t.height,X=1,ue=null,Me=null;const Re=new Ot(0,0,Z,se),Ie=new Ot(0,0,Z,se);let Ve=!1;const ae=new Yc;let ge=!1,Ue=!1;this.transmissionResolutionScale=1;const Te=new Nt,ke=new Nt,Ge=new B,We=new Ot,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let P=!1;function k(){return D===null?X:1}let T=i;function le(w,H){return t.getContext(w,H)}try{const w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${kc}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",Oe,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),T===null){const H="webgl2";if(T=le(H,w),T===null)throw le(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let J,Q,te,ce,ee,b,v,F,W,K,j,be,fe,xe,He,_e,Ae,Be,$e,we,Ye,Ke,Je,V;function Ne(){J=new zM(T),J.init(),Ke=new ME(T,J),Q=new UM(T,J,e,Ke),te=new yE(T,J),Q.reverseDepthBuffer&&d&&te.buffers.depth.setReversed(!0),ce=new GM(T),ee=new oE,b=new bE(T,J,te,ee,Q,Ke,ce),v=new FM(y),F=new BM(y),W=new Ky(T),Je=new LM(T,W),K=new HM(T,W,ce,Je),j=new XM(T,K,W,ce),$e=new WM(T,Q,b),_e=new NM(ee),be=new aE(y,v,F,J,Q,Je,_e),fe=new RE(y,ee),xe=new cE,He=new mE(J),Be=new DM(y,v,F,te,j,f,l),Ae=new vE(y,j,Q),V=new PE(T,ce,Q,te),we=new IM(T,J,ce),Ye=new VM(T,J,ce),ce.programs=be.programs,y.capabilities=Q,y.extensions=J,y.properties=ee,y.renderLists=xe,y.shadowMap=Ae,y.state=te,y.info=ce}Ne();const ne=new AE(y,T);this.xr=ne,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const w=J.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=J.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(w){w!==void 0&&(X=w,this.setSize(Z,se,!1))},this.getSize=function(w){return w.set(Z,se)},this.setSize=function(w,H,Y=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=w,se=H,t.width=Math.floor(w*X),t.height=Math.floor(H*X),Y===!0&&(t.style.width=w+"px",t.style.height=H+"px"),this.setViewport(0,0,w,H)},this.getDrawingBufferSize=function(w){return w.set(Z*X,se*X).floor()},this.setDrawingBufferSize=function(w,H,Y){Z=w,se=H,X=Y,t.width=Math.floor(w*Y),t.height=Math.floor(H*Y),this.setViewport(0,0,w,H)},this.getCurrentViewport=function(w){return w.copy(L)},this.getViewport=function(w){return w.copy(Re)},this.setViewport=function(w,H,Y,$){w.isVector4?Re.set(w.x,w.y,w.z,w.w):Re.set(w,H,Y,$),te.viewport(L.copy(Re).multiplyScalar(X).round())},this.getScissor=function(w){return w.copy(Ie)},this.setScissor=function(w,H,Y,$){w.isVector4?Ie.set(w.x,w.y,w.z,w.w):Ie.set(w,H,Y,$),te.scissor(O.copy(Ie).multiplyScalar(X).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(w){te.setScissorTest(Ve=w)},this.setOpaqueSort=function(w){ue=w},this.setTransparentSort=function(w){Me=w},this.getClearColor=function(w){return w.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor.apply(Be,arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha.apply(Be,arguments)},this.clear=function(w=!0,H=!0,Y=!0){let $=0;if(w){let z=!1;if(D!==null){const pe=D.texture.format;z=pe===Wc||pe===Gc||pe===Vc}if(z){const pe=D.texture.type,Ce=pe===Pi||pe===ys||pe===sa||pe===ur||pe===zc||pe===Hc,De=Be.getClearColor(),Fe=Be.getClearAlpha(),je=De.r,Ze=De.g,ze=De.b;Ce?(_[0]=je,_[1]=Ze,_[2]=ze,_[3]=Fe,T.clearBufferuiv(T.COLOR,0,_)):(x[0]=je,x[1]=Ze,x[2]=ze,x[3]=Fe,T.clearBufferiv(T.COLOR,0,x))}else $|=T.COLOR_BUFFER_BIT}H&&($|=T.DEPTH_BUFFER_BIT),Y&&($|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",Oe,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),Be.dispose(),xe.dispose(),He.dispose(),ee.dispose(),v.dispose(),F.dispose(),j.dispose(),Je.dispose(),V.dispose(),be.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",yr),ne.removeEventListener("sessionend",br),Kn.stop()};function he(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Oe(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const w=ce.autoReset,H=Ae.enabled,Y=Ae.autoUpdate,$=Ae.needsUpdate,z=Ae.type;Ne(),ce.autoReset=w,Ae.enabled=H,Ae.autoUpdate=Y,Ae.needsUpdate=$,Ae.type=z}function Pe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Qe(w){const H=w.target;H.removeEventListener("dispose",Qe),Pt(H)}function Pt(w){Ht(w),ee.remove(w)}function Ht(w){const H=ee.get(w).programs;H!==void 0&&(H.forEach(function(Y){be.releaseProgram(Y)}),w.isShaderMaterial&&be.releaseShaderCache(w))}this.renderBufferDirect=function(w,H,Y,$,z,pe){H===null&&(H=At);const Ce=z.isMesh&&z.matrixWorld.determinant()<0,De=ct(w,H,Y,$,z);te.setMaterial($,Ce);let Fe=Y.index,je=1;if($.wireframe===!0){if(Fe=K.getWireframeAttribute(Y),Fe===void 0)return;je=2}const Ze=Y.drawRange,ze=Y.attributes.position;let ut=Ze.start*je,gt=(Ze.start+Ze.count)*je;pe!==null&&(ut=Math.max(ut,pe.start*je),gt=Math.min(gt,(pe.start+pe.count)*je)),Fe!==null?(ut=Math.max(ut,0),gt=Math.min(gt,Fe.count)):ze!=null&&(ut=Math.max(ut,0),gt=Math.min(gt,ze.count));const Bt=gt-ut;if(Bt<0||Bt===1/0)return;Je.setup(z,$,De,Y,Fe);let Ft,dt=we;if(Fe!==null&&(Ft=W.get(Fe),dt=Ye,dt.setIndex(Ft)),z.isMesh)$.wireframe===!0?(te.setLineWidth($.wireframeLinewidth*k()),dt.setMode(T.LINES)):dt.setMode(T.TRIANGLES);else if(z.isLine){let Xe=$.linewidth;Xe===void 0&&(Xe=1),te.setLineWidth(Xe*k()),z.isLineSegments?dt.setMode(T.LINES):z.isLineLoop?dt.setMode(T.LINE_LOOP):dt.setMode(T.LINE_STRIP)}else z.isPoints?dt.setMode(T.POINTS):z.isSprite&&dt.setMode(T.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)dt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(J.get("WEBGL_multi_draw"))dt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Xe=z._multiDrawStarts,Yt=z._multiDrawCounts,_t=z._multiDrawCount,Hn=Fe?W.get(Fe).bytesPerElement:1,Ts=ee.get($).currentProgram.getUniforms();for(let xn=0;xn<_t;xn++)Ts.setValue(T,"_gl_DrawID",xn),dt.render(Xe[xn]/Hn,Yt[xn])}else if(z.isInstancedMesh)dt.renderInstances(ut,Bt,z.count);else if(Y.isInstancedBufferGeometry){const Xe=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Yt=Math.min(Y.instanceCount,Xe);dt.renderInstances(ut,Bt,Yt)}else dt.render(ut,Bt)};function ht(w,H,Y){w.transparent===!0&&w.side===In&&w.forceSinglePass===!1?(w.side=_n,w.needsUpdate=!0,N(w,H,Y),w.side=Ri,w.needsUpdate=!0,N(w,H,Y),w.side=In):N(w,H,Y)}this.compile=function(w,H,Y=null){Y===null&&(Y=w),p=He.get(Y),p.init(H),A.push(p),Y.traverseVisible(function(z){z.isLight&&z.layers.test(H.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),w!==Y&&w.traverseVisible(function(z){z.isLight&&z.layers.test(H.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();const $=new Set;return w.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const pe=z.material;if(pe)if(Array.isArray(pe))for(let Ce=0;Ce<pe.length;Ce++){const De=pe[Ce];ht(De,Y,z),$.add(De)}else ht(pe,Y,z),$.add(pe)}),A.pop(),p=null,$},this.compileAsync=function(w,H,Y=null){const $=this.compile(w,H,Y);return new Promise(z=>{function pe(){if($.forEach(function(Ce){ee.get(Ce).currentProgram.isReady()&&$.delete(Ce)}),$.size===0){z(w);return}setTimeout(pe,10)}J.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let vn=null;function kn(w){vn&&vn(w)}function yr(){Kn.stop()}function br(){Kn.start()}const Kn=new ip;Kn.setAnimationLoop(kn),typeof self<"u"&&Kn.setContext(self),this.setAnimationLoop=function(w){vn=w,ne.setAnimationLoop(w),w===null?Kn.stop():Kn.start()},ne.addEventListener("sessionstart",yr),ne.addEventListener("sessionend",br),this.render=function(w,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(H),H=ne.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,H,D),p=He.get(w,A.length),p.init(H),A.push(p),ke.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),ae.setFromProjectionMatrix(ke),Ue=this.localClippingEnabled,ge=_e.init(this.clippingPlanes,Ue),g=xe.get(w,R.length),g.init(),R.push(g),ne.enabled===!0&&ne.isPresenting===!0){const pe=y.xr.getDepthSensingMesh();pe!==null&&Mr(pe,H,-1/0,y.sortObjects)}Mr(w,H,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(ue,Me),P=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,P&&Be.addToRenderList(g,w),this.info.render.frame++,ge===!0&&_e.beginShadows();const Y=p.state.shadowsArray;Ae.render(Y,w,H),ge===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=g.opaque,z=g.transmissive;if(p.setupLights(),H.isArrayCamera){const pe=H.cameras;if(z.length>0)for(let Ce=0,De=pe.length;Ce<De;Ce++){const Fe=pe[Ce];Er($,z,w,Fe)}P&&Be.render(w);for(let Ce=0,De=pe.length;Ce<De;Ce++){const Fe=pe[Ce];Sr(g,w,Fe,Fe.viewport)}}else z.length>0&&Er($,z,w,H),P&&Be.render(w),Sr(g,w,H);D!==null&&M===0&&(b.updateMultisampleRenderTarget(D),b.updateRenderTargetMipmap(D)),w.isScene===!0&&w.onAfterRender(y,w,H),Je.resetDefaultState(),E=-1,S=null,A.pop(),A.length>0?(p=A[A.length-1],ge===!0&&_e.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,R.pop(),R.length>0?g=R[R.length-1]:g=null};function Mr(w,H,Y,$){if(w.visible===!1)return;if(w.layers.test(H.layers)){if(w.isGroup)Y=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(H);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ae.intersectsSprite(w)){$&&We.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ke);const Ce=j.update(w),De=w.material;De.visible&&g.push(w,Ce,De,Y,We.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ae.intersectsObject(w))){const Ce=j.update(w),De=w.material;if($&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),We.copy(w.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),We.copy(Ce.boundingSphere.center)),We.applyMatrix4(w.matrixWorld).applyMatrix4(ke)),Array.isArray(De)){const Fe=Ce.groups;for(let je=0,Ze=Fe.length;je<Ze;je++){const ze=Fe[je],ut=De[ze.materialIndex];ut&&ut.visible&&g.push(w,Ce,ut,Y,We.z,ze)}}else De.visible&&g.push(w,Ce,De,Y,We.z,null)}}const pe=w.children;for(let Ce=0,De=pe.length;Ce<De;Ce++)Mr(pe[Ce],H,Y,$)}function Sr(w,H,Y,$){const z=w.opaque,pe=w.transmissive,Ce=w.transparent;p.setupLightsView(Y),ge===!0&&_e.setGlobalState(y.clippingPlanes,Y),$&&te.viewport(L.copy($)),z.length>0&&Ki(z,H,Y),pe.length>0&&Ki(pe,H,Y),Ce.length>0&&Ki(Ce,H,Y),te.buffers.depth.setTest(!0),te.buffers.depth.setMask(!0),te.buffers.color.setMask(!0),te.setPolygonOffset(!1)}function Er(w,H,Y,$){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[$.id]===void 0&&(p.state.transmissionRenderTarget[$.id]=new bs(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")||J.has("EXT_color_buffer_float")?ha:Pi,minFilter:ms,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ft.workingColorSpace}));const pe=p.state.transmissionRenderTarget[$.id],Ce=$.viewport||L;pe.setSize(Ce.z*y.transmissionResolutionScale,Ce.w*y.transmissionResolutionScale);const De=y.getRenderTarget();y.setRenderTarget(pe),y.getClearColor(G),ie=y.getClearAlpha(),ie<1&&y.setClearColor(16777215,.5),y.clear(),P&&Be.render(Y);const Fe=y.toneMapping;y.toneMapping=$i;const je=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),p.setupLightsView($),ge===!0&&_e.setGlobalState(y.clippingPlanes,$),Ki(w,Y,$),b.updateMultisampleRenderTarget(pe),b.updateRenderTargetMipmap(pe),J.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let ze=0,ut=H.length;ze<ut;ze++){const gt=H[ze],Bt=gt.object,Ft=gt.geometry,dt=gt.material,Xe=gt.group;if(dt.side===In&&Bt.layers.test($.layers)){const Yt=dt.side;dt.side=_n,dt.needsUpdate=!0,q(Bt,Y,$,Ft,dt,Xe),dt.side=Yt,dt.needsUpdate=!0,Ze=!0}}Ze===!0&&(b.updateMultisampleRenderTarget(pe),b.updateRenderTargetMipmap(pe))}y.setRenderTarget(De),y.setClearColor(G,ie),je!==void 0&&($.viewport=je),y.toneMapping=Fe}function Ki(w,H,Y){const $=H.isScene===!0?H.overrideMaterial:null;for(let z=0,pe=w.length;z<pe;z++){const Ce=w[z],De=Ce.object,Fe=Ce.geometry,je=$===null?Ce.material:$,Ze=Ce.group;De.layers.test(Y.layers)&&q(De,H,Y,Fe,je,Ze)}}function q(w,H,Y,$,z,pe){w.onBeforeRender(y,H,Y,$,z,pe),w.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),z.onBeforeRender(y,H,Y,$,w,pe),z.transparent===!0&&z.side===In&&z.forceSinglePass===!1?(z.side=_n,z.needsUpdate=!0,y.renderBufferDirect(Y,H,$,z,w,pe),z.side=Ri,z.needsUpdate=!0,y.renderBufferDirect(Y,H,$,z,w,pe),z.side=In):y.renderBufferDirect(Y,H,$,z,w,pe),w.onAfterRender(y,H,Y,$,z,pe)}function N(w,H,Y){H.isScene!==!0&&(H=At);const $=ee.get(w),z=p.state.lights,pe=p.state.shadowsArray,Ce=z.state.version,De=be.getParameters(w,z.state,pe,H,Y),Fe=be.getProgramCacheKey(De);let je=$.programs;$.environment=w.isMeshStandardMaterial?H.environment:null,$.fog=H.fog,$.envMap=(w.isMeshStandardMaterial?F:v).get(w.envMap||$.environment),$.envMapRotation=$.environment!==null&&w.envMap===null?H.environmentRotation:w.envMapRotation,je===void 0&&(w.addEventListener("dispose",Qe),je=new Map,$.programs=je);let Ze=je.get(Fe);if(Ze!==void 0){if($.currentProgram===Ze&&$.lightsStateVersion===Ce)return re(w,De),Ze}else De.uniforms=be.getUniforms(w),w.onBeforeCompile(De,y),Ze=be.acquireProgram(De,Fe),je.set(Fe,Ze),$.uniforms=De.uniforms;const ze=$.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(ze.clippingPlanes=_e.uniform),re(w,De),$.needsLights=Dt(w),$.lightsStateVersion=Ce,$.needsLights&&(ze.ambientLightColor.value=z.state.ambient,ze.lightProbe.value=z.state.probe,ze.directionalLights.value=z.state.directional,ze.directionalLightShadows.value=z.state.directionalShadow,ze.spotLights.value=z.state.spot,ze.spotLightShadows.value=z.state.spotShadow,ze.rectAreaLights.value=z.state.rectArea,ze.ltc_1.value=z.state.rectAreaLTC1,ze.ltc_2.value=z.state.rectAreaLTC2,ze.pointLights.value=z.state.point,ze.pointLightShadows.value=z.state.pointShadow,ze.hemisphereLights.value=z.state.hemi,ze.directionalShadowMap.value=z.state.directionalShadowMap,ze.directionalShadowMatrix.value=z.state.directionalShadowMatrix,ze.spotShadowMap.value=z.state.spotShadowMap,ze.spotLightMatrix.value=z.state.spotLightMatrix,ze.spotLightMap.value=z.state.spotLightMap,ze.pointShadowMap.value=z.state.pointShadowMap,ze.pointShadowMatrix.value=z.state.pointShadowMatrix),$.currentProgram=Ze,$.uniformsList=null,Ze}function ve(w){if(w.uniformsList===null){const H=w.currentProgram.getUniforms();w.uniformsList=ja.seqWithValue(H.seq,w.uniforms)}return w.uniformsList}function re(w,H){const Y=ee.get(w);Y.outputColorSpace=H.outputColorSpace,Y.batching=H.batching,Y.batchingColor=H.batchingColor,Y.instancing=H.instancing,Y.instancingColor=H.instancingColor,Y.instancingMorph=H.instancingMorph,Y.skinning=H.skinning,Y.morphTargets=H.morphTargets,Y.morphNormals=H.morphNormals,Y.morphColors=H.morphColors,Y.morphTargetsCount=H.morphTargetsCount,Y.numClippingPlanes=H.numClippingPlanes,Y.numIntersection=H.numClipIntersection,Y.vertexAlphas=H.vertexAlphas,Y.vertexTangents=H.vertexTangents,Y.toneMapping=H.toneMapping}function ct(w,H,Y,$,z){H.isScene!==!0&&(H=At),b.resetTextureUnits();const pe=H.fog,Ce=$.isMeshStandardMaterial?H.environment:null,De=D===null?y.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:dr,Fe=($.isMeshStandardMaterial?F:v).get($.envMap||Ce),je=$.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ze=!!Y.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),ze=!!Y.morphAttributes.position,ut=!!Y.morphAttributes.normal,gt=!!Y.morphAttributes.color;let Bt=$i;$.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Bt=y.toneMapping);const Ft=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,dt=Ft!==void 0?Ft.length:0,Xe=ee.get($),Yt=p.state.lights;if(ge===!0&&(Ue===!0||w!==S)){const rn=w===S&&$.id===E;_e.setState($,w,rn)}let _t=!1;$.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Yt.state.version||Xe.outputColorSpace!==De||z.isBatchedMesh&&Xe.batching===!1||!z.isBatchedMesh&&Xe.batching===!0||z.isBatchedMesh&&Xe.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Xe.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Xe.instancing===!1||!z.isInstancedMesh&&Xe.instancing===!0||z.isSkinnedMesh&&Xe.skinning===!1||!z.isSkinnedMesh&&Xe.skinning===!0||z.isInstancedMesh&&Xe.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Xe.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Xe.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Xe.instancingMorph===!1&&z.morphTexture!==null||Xe.envMap!==Fe||$.fog===!0&&Xe.fog!==pe||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==_e.numPlanes||Xe.numIntersection!==_e.numIntersection)||Xe.vertexAlphas!==je||Xe.vertexTangents!==Ze||Xe.morphTargets!==ze||Xe.morphNormals!==ut||Xe.morphColors!==gt||Xe.toneMapping!==Bt||Xe.morphTargetsCount!==dt)&&(_t=!0):(_t=!0,Xe.__version=$.version);let Hn=Xe.currentProgram;_t===!0&&(Hn=N($,H,z));let Ts=!1,xn=!1,Tr=!1;const Lt=Hn.getUniforms(),Tn=Xe.uniforms;if(te.useProgram(Hn.program)&&(Ts=!0,xn=!0,Tr=!0),$.id!==E&&(E=$.id,xn=!0),Ts||S!==w){te.buffers.depth.getReversed()?(Te.copy(w.projectionMatrix),jx(Te),Kx(Te),Lt.setValue(T,"projectionMatrix",Te)):Lt.setValue(T,"projectionMatrix",w.projectionMatrix),Lt.setValue(T,"viewMatrix",w.matrixWorldInverse);const dn=Lt.map.cameraPosition;dn!==void 0&&dn.setValue(T,Ge.setFromMatrixPosition(w.matrixWorld)),Q.logarithmicDepthBuffer&&Lt.setValue(T,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Lt.setValue(T,"isOrthographic",w.isOrthographicCamera===!0),S!==w&&(S=w,xn=!0,Tr=!0)}if(z.isSkinnedMesh){Lt.setOptional(T,z,"bindMatrix"),Lt.setOptional(T,z,"bindMatrixInverse");const rn=z.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),Lt.setValue(T,"boneTexture",rn.boneTexture,b))}z.isBatchedMesh&&(Lt.setOptional(T,z,"batchingTexture"),Lt.setValue(T,"batchingTexture",z._matricesTexture,b),Lt.setOptional(T,z,"batchingIdTexture"),Lt.setValue(T,"batchingIdTexture",z._indirectTexture,b),Lt.setOptional(T,z,"batchingColorTexture"),z._colorsTexture!==null&&Lt.setValue(T,"batchingColorTexture",z._colorsTexture,b));const wn=Y.morphAttributes;if((wn.position!==void 0||wn.normal!==void 0||wn.color!==void 0)&&$e.update(z,Y,Hn),(xn||Xe.receiveShadow!==z.receiveShadow)&&(Xe.receiveShadow=z.receiveShadow,Lt.setValue(T,"receiveShadow",z.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Tn.envMap.value=Fe,Tn.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&H.environment!==null&&(Tn.envMapIntensity.value=H.environmentIntensity),xn&&(Lt.setValue(T,"toneMappingExposure",y.toneMappingExposure),Xe.needsLights&&bt(Tn,Tr),pe&&$.fog===!0&&fe.refreshFogUniforms(Tn,pe),fe.refreshMaterialUniforms(Tn,$,X,se,p.state.transmissionRenderTarget[w.id]),ja.upload(T,ve(Xe),Tn,b)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(ja.upload(T,ve(Xe),Tn,b),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Lt.setValue(T,"center",z.center),Lt.setValue(T,"modelViewMatrix",z.modelViewMatrix),Lt.setValue(T,"normalMatrix",z.normalMatrix),Lt.setValue(T,"modelMatrix",z.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const rn=$.uniformsGroups;for(let dn=0,To=rn.length;dn<To;dn++){const Zi=rn[dn];V.update(Zi,Hn),V.bind(Zi,Hn)}}return Hn}function bt(w,H){w.ambientLightColor.needsUpdate=H,w.lightProbe.needsUpdate=H,w.directionalLights.needsUpdate=H,w.directionalLightShadows.needsUpdate=H,w.pointLights.needsUpdate=H,w.pointLightShadows.needsUpdate=H,w.spotLights.needsUpdate=H,w.spotLightShadows.needsUpdate=H,w.rectAreaLights.needsUpdate=H,w.hemisphereLights.needsUpdate=H}function Dt(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(w,H,Y){ee.get(w.texture).__webglTexture=H,ee.get(w.depthTexture).__webglTexture=Y;const $=ee.get(w);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=Y===void 0,$.__autoAllocateDepthBuffer||J.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,H){const Y=ee.get(w);Y.__webglFramebuffer=H,Y.__useDefaultFramebuffer=H===void 0};const Vt=T.createFramebuffer();this.setRenderTarget=function(w,H=0,Y=0){D=w,C=H,M=Y;let $=!0,z=null,pe=!1,Ce=!1;if(w){const Fe=ee.get(w);if(Fe.__useDefaultFramebuffer!==void 0)te.bindFramebuffer(T.FRAMEBUFFER,null),$=!1;else if(Fe.__webglFramebuffer===void 0)b.setupRenderTarget(w);else if(Fe.__hasExternalTextures)b.rebindTextures(w,ee.get(w.texture).__webglTexture,ee.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const ze=w.depthTexture;if(Fe.__boundDepthTexture!==ze){if(ze!==null&&ee.has(ze)&&(w.width!==ze.image.width||w.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(w)}}const je=w.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Ce=!0);const Ze=ee.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ze[H])?z=Ze[H][Y]:z=Ze[H],pe=!0):w.samples>0&&b.useMultisampledRTT(w)===!1?z=ee.get(w).__webglMultisampledFramebuffer:Array.isArray(Ze)?z=Ze[Y]:z=Ze,L.copy(w.viewport),O.copy(w.scissor),U=w.scissorTest}else L.copy(Re).multiplyScalar(X).floor(),O.copy(Ie).multiplyScalar(X).floor(),U=Ve;if(Y!==0&&(z=Vt),te.bindFramebuffer(T.FRAMEBUFFER,z)&&$&&te.drawBuffers(w,z),te.viewport(L),te.scissor(O),te.setScissorTest(U),pe){const Fe=ee.get(w.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+H,Fe.__webglTexture,Y)}else if(Ce){const Fe=ee.get(w.texture),je=H;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,Fe.__webglTexture,Y,je)}else if(w!==null&&Y!==0){const Fe=ee.get(w.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Fe.__webglTexture,Y)}E=-1},this.readRenderTargetPixels=function(w,H,Y,$,z,pe,Ce){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=ee.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ce!==void 0&&(De=De[Ce]),De){te.bindFramebuffer(T.FRAMEBUFFER,De);try{const Fe=w.texture,je=Fe.format,Ze=Fe.type;if(!Q.textureFormatReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Q.textureTypeReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=w.width-$&&Y>=0&&Y<=w.height-z&&T.readPixels(H,Y,$,z,Ke.convert(je),Ke.convert(Ze),pe)}finally{const Fe=D!==null?ee.get(D).__webglFramebuffer:null;te.bindFramebuffer(T.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(w,H,Y,$,z,pe,Ce){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=ee.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ce!==void 0&&(De=De[Ce]),De){const Fe=w.texture,je=Fe.format,Ze=Fe.type;if(!Q.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Q.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=w.width-$&&Y>=0&&Y<=w.height-z){te.bindFramebuffer(T.FRAMEBUFFER,De);const ze=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,ze),T.bufferData(T.PIXEL_PACK_BUFFER,pe.byteLength,T.STREAM_READ),T.readPixels(H,Y,$,z,Ke.convert(je),Ke.convert(Ze),0);const ut=D!==null?ee.get(D).__webglFramebuffer:null;te.bindFramebuffer(T.FRAMEBUFFER,ut);const gt=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await Yx(T,gt,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,ze),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,pe),T.deleteBuffer(ze),T.deleteSync(gt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,H=null,Y=0){w.isTexture!==!0&&(Ws("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,w=arguments[1]);const $=Math.pow(2,-Y),z=Math.floor(w.image.width*$),pe=Math.floor(w.image.height*$),Ce=H!==null?H.x:0,De=H!==null?H.y:0;b.setTexture2D(w,0),T.copyTexSubImage2D(T.TEXTURE_2D,Y,0,0,Ce,De,z,pe),te.unbindTexture()};const Bn=T.createFramebuffer(),zn=T.createFramebuffer();this.copyTextureToTexture=function(w,H,Y=null,$=null,z=0,pe=null){w.isTexture!==!0&&(Ws("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,w=arguments[1],H=arguments[2],pe=arguments[3]||0,Y=null),pe===null&&(z!==0?(Ws("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pe=z,z=0):pe=0);let Ce,De,Fe,je,Ze,ze,ut,gt,Bt;const Ft=w.isCompressedTexture?w.mipmaps[pe]:w.image;if(Y!==null)Ce=Y.max.x-Y.min.x,De=Y.max.y-Y.min.y,Fe=Y.isBox3?Y.max.z-Y.min.z:1,je=Y.min.x,Ze=Y.min.y,ze=Y.isBox3?Y.min.z:0;else{const wn=Math.pow(2,-z);Ce=Math.floor(Ft.width*wn),De=Math.floor(Ft.height*wn),w.isDataArrayTexture?Fe=Ft.depth:w.isData3DTexture?Fe=Math.floor(Ft.depth*wn):Fe=1,je=0,Ze=0,ze=0}$!==null?(ut=$.x,gt=$.y,Bt=$.z):(ut=0,gt=0,Bt=0);const dt=Ke.convert(H.format),Xe=Ke.convert(H.type);let Yt;H.isData3DTexture?(b.setTexture3D(H,0),Yt=T.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(b.setTexture2DArray(H,0),Yt=T.TEXTURE_2D_ARRAY):(b.setTexture2D(H,0),Yt=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,H.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,H.unpackAlignment);const _t=T.getParameter(T.UNPACK_ROW_LENGTH),Hn=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Ts=T.getParameter(T.UNPACK_SKIP_PIXELS),xn=T.getParameter(T.UNPACK_SKIP_ROWS),Tr=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,Ft.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Ft.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,je),T.pixelStorei(T.UNPACK_SKIP_ROWS,Ze),T.pixelStorei(T.UNPACK_SKIP_IMAGES,ze);const Lt=w.isDataArrayTexture||w.isData3DTexture,Tn=H.isDataArrayTexture||H.isData3DTexture;if(w.isDepthTexture){const wn=ee.get(w),rn=ee.get(H),dn=ee.get(wn.__renderTarget),To=ee.get(rn.__renderTarget);te.bindFramebuffer(T.READ_FRAMEBUFFER,dn.__webglFramebuffer),te.bindFramebuffer(T.DRAW_FRAMEBUFFER,To.__webglFramebuffer);for(let Zi=0;Zi<Fe;Zi++)Lt&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,ee.get(w).__webglTexture,z,ze+Zi),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,ee.get(H).__webglTexture,pe,Bt+Zi)),T.blitFramebuffer(je,Ze,Ce,De,ut,gt,Ce,De,T.DEPTH_BUFFER_BIT,T.NEAREST);te.bindFramebuffer(T.READ_FRAMEBUFFER,null),te.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(z!==0||w.isRenderTargetTexture||ee.has(w)){const wn=ee.get(w),rn=ee.get(H);te.bindFramebuffer(T.READ_FRAMEBUFFER,Bn),te.bindFramebuffer(T.DRAW_FRAMEBUFFER,zn);for(let dn=0;dn<Fe;dn++)Lt?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,wn.__webglTexture,z,ze+dn):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,wn.__webglTexture,z),Tn?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,rn.__webglTexture,pe,Bt+dn):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,rn.__webglTexture,pe),z!==0?T.blitFramebuffer(je,Ze,Ce,De,ut,gt,Ce,De,T.COLOR_BUFFER_BIT,T.NEAREST):Tn?T.copyTexSubImage3D(Yt,pe,ut,gt,Bt+dn,je,Ze,Ce,De):T.copyTexSubImage2D(Yt,pe,ut,gt,je,Ze,Ce,De);te.bindFramebuffer(T.READ_FRAMEBUFFER,null),te.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else Tn?w.isDataTexture||w.isData3DTexture?T.texSubImage3D(Yt,pe,ut,gt,Bt,Ce,De,Fe,dt,Xe,Ft.data):H.isCompressedArrayTexture?T.compressedTexSubImage3D(Yt,pe,ut,gt,Bt,Ce,De,Fe,dt,Ft.data):T.texSubImage3D(Yt,pe,ut,gt,Bt,Ce,De,Fe,dt,Xe,Ft):w.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,pe,ut,gt,Ce,De,dt,Xe,Ft.data):w.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,pe,ut,gt,Ft.width,Ft.height,dt,Ft.data):T.texSubImage2D(T.TEXTURE_2D,pe,ut,gt,Ce,De,dt,Xe,Ft);T.pixelStorei(T.UNPACK_ROW_LENGTH,_t),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Hn),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Ts),T.pixelStorei(T.UNPACK_SKIP_ROWS,xn),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Tr),pe===0&&H.generateMipmaps&&T.generateMipmap(Yt),te.unbindTexture()},this.copyTextureToTexture3D=function(w,H,Y=null,$=null,z=0){return w.isTexture!==!0&&(Ws("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,$=arguments[1]||null,w=arguments[2],H=arguments[3],z=arguments[4]||0),Ws('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,H,Y,$,z)},this.initRenderTarget=function(w){ee.get(w).__webglFramebuffer===void 0&&b.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?b.setTextureCube(w,0):w.isData3DTexture?b.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?b.setTexture2DArray(w,0):b.setTexture2D(w,0),te.unbindTexture()},this.resetState=function(){C=0,M=0,D=null,te.reset(),Je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=ft._getUnpackColorSpace()}}const Jh={type:"change"},eu={type:"start"},lp={type:"end"},Ba=new Gf,Qh=new Hi,LE=Math.cos(70*Mn.DEG2RAD),Gt=new B,fn=2*Math.PI,Tt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},xl=1e-6;class IE extends Yy{constructor(e,t=null){super(e,t),this.state=Tt.NONE,this.enabled=!0,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:er.ROTATE,MIDDLE:er.DOLLY,RIGHT:er.PAN},this.touches={ONE:Xs.ROTATE,TWO:Xs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new B,this._lastQuaternion=new Ms,this._lastTargetPosition=new B,this._quat=new Ms().setFromUnitVectors(e.up,new B(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new wh,this._sphericalDelta=new wh,this._scale=1,this._panOffset=new B,this._rotateStart=new Ee,this._rotateEnd=new Ee,this._rotateDelta=new Ee,this._panStart=new Ee,this._panEnd=new Ee,this._panDelta=new Ee,this._dollyStart=new Ee,this._dollyEnd=new Ee,this._dollyDelta=new Ee,this._dollyDirection=new B,this._mouse=new Ee,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=NE.bind(this),this._onPointerDown=UE.bind(this),this._onPointerUp=FE.bind(this),this._onContextMenu=GE.bind(this),this._onMouseWheel=BE.bind(this),this._onKeyDown=zE.bind(this),this._onTouchStart=HE.bind(this),this._onTouchMove=VE.bind(this),this._onMouseDown=OE.bind(this),this._onMouseMove=kE.bind(this),this._interceptControlDown=WE.bind(this),this._interceptControlUp=XE.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Jh),this.update(),this.state=Tt.NONE}update(e=null){const t=this.object.position;Gt.copy(t).sub(this.target),Gt.applyQuaternion(this._quat),this._spherical.setFromVector3(Gt),this.autoRotate&&this.state===Tt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=fn:i>Math.PI&&(i-=fn),s<-Math.PI?s+=fn:s>Math.PI&&(s-=fn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Gt.setFromSpherical(this._spherical),Gt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Gt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Gt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new B(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new B(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Gt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Ba.origin.copy(this.object.position),Ba.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ba.direction))<LE?this.object.lookAt(this.target):(Qh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ba.intersectPlane(Qh,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>xl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>xl||this._lastTargetPosition.distanceToSquared(this.target)>xl?(this.dispatchEvent(Jh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?fn/60*this.autoRotateSpeed*e:fn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Gt.setFromMatrixColumn(t,0),Gt.multiplyScalar(-e),this._panOffset.add(Gt)}_panUp(e,t){this.screenSpacePanning===!0?Gt.setFromMatrixColumn(t,1):(Gt.setFromMatrixColumn(t,0),Gt.crossVectors(this.object.up,Gt)),Gt.multiplyScalar(e),this._panOffset.add(Gt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Gt.copy(s).sub(this.target);let r=Gt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(fn*this._rotateDelta.x/t.clientHeight),this._rotateUp(fn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(fn*this._rotateDelta.x/t.clientHeight),this._rotateUp(fn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ee,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function UE(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function NE(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function FE(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(lp),this.state=Tt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function OE(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case er.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Tt.DOLLY;break;case er.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Tt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Tt.ROTATE}break;case er.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Tt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Tt.PAN}break;default:this.state=Tt.NONE}this.state!==Tt.NONE&&this.dispatchEvent(eu)}function kE(n){switch(this.state){case Tt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Tt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Tt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function BE(n){this.enabled===!1||this.enableZoom===!1||this.state!==Tt.NONE||(n.preventDefault(),this.dispatchEvent(eu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(lp))}function zE(n){this.enabled!==!1&&this._handleKeyDown(n)}function HE(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Xs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Tt.TOUCH_ROTATE;break;case Xs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Tt.TOUCH_PAN;break;default:this.state=Tt.NONE}break;case 2:switch(this.touches.TWO){case Xs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Tt.TOUCH_DOLLY_PAN;break;case Xs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Tt.TOUCH_DOLLY_ROTATE;break;default:this.state=Tt.NONE}break;default:this.state=Tt.NONE}this.state!==Tt.NONE&&this.dispatchEvent(eu)}function VE(n){switch(this._trackPointer(n),this.state){case Tt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Tt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Tt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Tt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Tt.NONE}}function GE(n){this.enabled!==!1&&n.preventDefault()}function WE(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function XE(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Ur=new B;function Pn(n,e,t,i,s,r){const a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;Ur.copy(e),Ur[i]=0,Ur.normalize();const c=.5*a/(a+o),u=1-Ur.angleTo(n)/l;return Math.sign(Ur[t])===1?u*c:o/(a+o)+c+c*(1-u)}class za extends vr{constructor(e=1,t=1,i=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,i/2,r),super(1,1,1,s,s,s),s===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const o=new B,l=new B,c=new B(e,t,i).divideScalar(2).subScalar(r),u=this.attributes.position.array,h=this.attributes.normal.array,d=this.attributes.uv.array,f=u.length/6,_=new B,x=.5/s;for(let g=0,p=0;g<u.length;g+=3,p+=2)switch(o.fromArray(u,g),l.copy(o),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),u[g+0]=c.x*Math.sign(o.x)+l.x*r,u[g+1]=c.y*Math.sign(o.y)+l.y*r,u[g+2]=c.z*Math.sign(o.z)+l.z*r,h[g+0]=l.x,h[g+1]=l.y,h[g+2]=l.z,Math.floor(g/f)){case 0:_.set(1,0,0),d[p+0]=Pn(_,l,"z","y",r,i),d[p+1]=1-Pn(_,l,"y","z",r,t);break;case 1:_.set(-1,0,0),d[p+0]=1-Pn(_,l,"z","y",r,i),d[p+1]=1-Pn(_,l,"y","z",r,t);break;case 2:_.set(0,1,0),d[p+0]=1-Pn(_,l,"x","z",r,e),d[p+1]=Pn(_,l,"z","x",r,i);break;case 3:_.set(0,-1,0),d[p+0]=1-Pn(_,l,"x","z",r,e),d[p+1]=1-Pn(_,l,"z","x",r,i);break;case 4:_.set(0,0,1),d[p+0]=1-Pn(_,l,"x","y",r,e),d[p+1]=1-Pn(_,l,"y","x",r,t);break;case 5:_.set(0,0,-1),d[p+0]=Pn(_,l,"x","y",r,e),d[p+1]=1-Pn(_,l,"y","x",r,t);break}}}const $E={class:"patternx-page"},qE={class:"patternx-shell"},YE={class:"patternx-nav"},jE={class:"patternx-tabs","aria-label":"纹脉工坊导航"},KE=["onClick"],ZE={class:"patternx-main"},JE={key:0,class:"patternx-home"},QE={class:"patternx-landing-hero"},eT={class:"patternx-landing-copy"},tT={class:"patternx-actions landing-actions"},nT={class:"patternx-live-preview"},iT={class:"patternx-preview-badge"},sT={key:0,class:"patternx-canvas-loading"},rT={class:"patternx-preview-info"},aT=["src","alt"],oT={class:"patternx-preview-tools"},lT={class:"patternx-preview-hint"},cT={class:"patternx-feature-band","aria-label":"平台功能"},uT=["onClick"],hT={class:"patternx-feature-icon"},dT={class:"patternx-popular-section"},fT={class:"patternx-section-title"},pT={class:"patternx-popular-grid"},mT=["onClick"],gT=["onClick"],_T=["src","alt"],vT=["onClick"],xT={key:1,class:"patternx-subpage"},yT={key:1,class:"patternx-upload-result"},bT={class:"patternx-card upload-preview-card"},MT={class:"patternx-card-title"},ST={class:"patternx-image-preview"},ET=["src","alt"],TT={class:"patternx-card upload-preview-card"},wT={class:"patternx-card-title"},AT={class:"patternx-image-preview extraction"},CT=["src"],RT={key:1,class:"patternx-spinner"},PT={key:2,class:"patternx-actions upload-actions"},DT=["disabled"],LT={key:2,class:"patternx-subpage studio-page"},IT={class:"patternx-studio-layout"},UT={class:"patternx-sidebar"},NT={class:"patternx-studio-panel pattern-panel"},FT={class:"patternx-card-title"},OT={class:"patternx-studio-patterns"},kT=["onClick"],BT={class:"patternx-mini-thumb"},zT=["src","alt"],HT={class:"patternx-studio-panel"},VT={class:"patternx-card-title"},GT={class:"patternx-model-grid"},WT=["onClick"],XT={class:"patternx-studio-panel parameter-panel"},$T={class:"patternx-card-title"},qT=["onUpdate:modelValue","min","max","step"],YT={class:"patternx-studio-main"},jT={key:0,class:"patternx-canvas-loading"},KT={class:"studio-top-tools","aria-label":"场景工具"},ZT={class:"studio-side-tools","aria-label":"视图控制"},JT=["title","aria-label"],QT={class:"patternx-canvas-label"},ew=["src","alt"],tw={class:"patternx-studio-footer"},nw={class:"patternx-capability-band","aria-label":"工坊能力"},iw={key:0,class:"patternx-file-alert",role:"alert"},sw={class:"patternx-file-alert-icon"},rw={class:"patternx-file-alert-message"},aw={key:0,class:"patternx-toast",role:"status"},yl=-1.305,ow={__name:"PatternXPage",emits:["navigate","select-category"],setup(n,{emit:e}){var Er,Ki;const t=e,i=new URLSearchParams(window.location.search).get("pattern"),s=new URLSearchParams(window.location.search).get("view"),r=gn.filter(q=>q.category==="animal"),a=et(s==="studio"?"studio":"home"),o=et(gn.some(q=>q.id===i)?i:((Er=r[0])==null?void 0:Er.id)||((Ki=gn[0])==null?void 0:Ki.id)||""),l=et("vase"),c=et(""),u=et(""),h=et(null),d=et(""),f=et(""),_=et(null),x=et(""),g=et("等待上传图片"),p=et(!1),R=et(null),A=et(!1),y=et(!1),I=Zr({active:!1,x:0,y:0}),C=et(new Set),M=Zr({scale:100,rotate:0,offset:0,patternSize:100,repeatX:1,textureOffsetX:0,textureOffsetY:0,gloss:45}),D=[{key:"vase",label:"花瓶",icon:Wu},{key:"cup",label:"茶杯",icon:qg},{key:"box",label:"包装盒",icon:cs},{key:"silk",label:"丝巾",icon:i_},{key:"phone",label:"手机壳",icon:s_}],E={vase:{camera:[0,1.6,5.35],target:[0,.08,0],shadow:[1.7,.72,-.08,.08]},cup:{camera:[0,.25,3.75],target:[0,-.92,0],shadow:[1.2,.58,-.05,.06]},box:{camera:[0,.15,4.25],target:[0,-.88,0],shadow:[2.1,1.25,0,.08]},silk:{camera:[0,.38,4.65],target:[0,-.18,0],shadow:[2.25,.72,0,.08]},phone:{camera:[0,.18,4.05],target:[0,-.48,0],shadow:[1.05,.52,0,.06]}},S=["#b85c38","#5a7d5a","#c9a227","#7a6048","#6c8295","#a08060"],L=gn.map((q,N)=>({...q,region:["大临村","江南工坊","桐乡","民间布样"][N%4],color:S[N%S.length],likes:64+N*23,image:q.previewImage})),O=St(()=>_.value?[_.value,...G.value]:G.value),U=St(()=>{var q;return((q=_.value)==null?void 0:q.id)===o.value?_.value:L.find(N=>N.id===o.value)||L[0]}),G=St(()=>r.map(q=>L.find(N=>N.id===q.id)).filter(Boolean)),ie=[{title:"纹样智能采集",description:"上传图片，智能提取纹样结构与视觉特征",action:"立即体验",page:"upload",icon:Vu},{title:"蓝印纹库",description:"返回主站查看动物纹实拍图与文化档案",action:"查看动物纹",actionType:"library",icon:xs},{title:"纹样 3D 创作",description:"选择器物载体，实时预览纹理与形态效果",action:"进入 3D 工坊",page:"studio",icon:cs}];let Z,se,X,ue,Me,Re,Ie,Ve,ae=-1.2,ge,Ue,Te,ke,Ge=0;const We=et(!1),At=[{key:"scale",label:"缩放",min:50,max:150,step:1},{key:"rotate",label:"旋转",min:0,max:360,step:1},{key:"offset",label:"位置",min:-50,max:50,step:1},{key:"patternSize",label:"纹样大小",min:55,max:180,step:1},{key:"repeatX",label:"横向重复",min:.6,max:3,step:.1},{key:"gloss",label:"光泽度",min:0,max:100,step:1}],P=[{title:"非遗纹样 · 数字新生",description:"让千年纹样走进现代创作",icon:Kg},{title:"高清渲染",description:"高分辨率 PNG 输出",icon:cs},{title:"多角度展示",description:"360° 旋转预览",icon:e_},{title:"一键导出",description:"PNG 渲染图",icon:Ul},{title:"商用可用",description:"版权信息可追溯",icon:n_}];function k(q){c.value=q,window.clearTimeout(Z),Z=window.setTimeout(()=>{c.value=""},2600)}function T(q){u.value=q,window.clearTimeout(se),se=window.setTimeout(()=>{u.value=""},5200)}function le(){window.clearTimeout(se),u.value=""}function J(q){a.value=q,window.scrollTo({top:0,behavior:"smooth"})}function Q(q){t("navigate",q)}function te(){t("select-category","animal"),t("navigate","/library")}function ce(q){t("navigate",`/pattern/${q.id}`)}function ee(q){q.actionType==="library"?te():J(q.page)}function b(){const q=G.value.findIndex(ve=>ve.id===o.value),N=G.value[(q+1)%G.value.length];N&&(o.value=N.id)}function v(){M.scale=100,M.rotate=0,M.offset=0,M.patternSize=100,M.repeatX=1,M.textureOffsetX=0,M.textureOffsetY=0,M.gloss=45,We.value=!1,Ve==null||Ve.traverse(q=>{(Array.isArray(q.material)?q.material:q.material?[q.material]:[]).forEach(ve=>{ve.wireframe=!1,ve.needsUpdate=!0})}),F()}function F(){const q=E[l.value]||E.vase;if(Re&&Re.position.set(...q.camera),Ie==null||Ie.target.set(...q.target),Ie==null||Ie.update(),Ue){const[N,ve,re,ct]=q.shadow;Ue.scale.set(N,ve,1),Ue.position.set(re,yl+.015,ct)}}function W(q){if(!Re)return;const N=Mn.clamp(Re.position.z+q*.45,3,7);Re.position.z=N,Ie==null||Ie.update()}function K(){We.value=!We.value,Ve==null||Ve.traverse(q=>{(Array.isArray(q.material)?q.material:q.material?[q.material]:[]).forEach(ve=>{ve.wireframe=We.value,ve.needsUpdate=!0})})}function j(){var q,N,ve;R.value&&(document.fullscreenElement?(q=document.exitFullscreen)==null||q.call(document):(ve=(N=R.value).requestFullscreen)==null||ve.call(N))}function be(q){o.value=q.id,J("studio"),k(`已选择：${q.name}`)}function fe(q){const N=new Set(C.value),ve=N.has(q.id);ve?N.delete(q.id):N.add(q.id),C.value=N,k(ve?"已取消收藏":"已收藏到你的纹样夹")}function xe(){var q;(q=h.value)==null||q.click()}function He(q){var ve,re;const N=(re=(ve=q.dataTransfer)==null?void 0:ve.files)==null?void 0:re[0];N&&Be(N)}function _e(q){var ve;const N=(ve=q.target.files)==null?void 0:ve[0];N&&Be(N)}function Ae(q){return new Promise((N,ve)=>{const re=new Image;re.onload=()=>{const bt=Math.min(1,640/Math.max(re.naturalWidth,re.naturalHeight)),Dt=Math.max(1,Math.round(re.naturalWidth*bt)),Vt=Math.max(1,Math.round(re.naturalHeight*bt)),Bn=document.createElement("canvas");Bn.width=Dt,Bn.height=Vt;const zn=Bn.getContext("2d",{willReadFrequently:!0});zn.drawImage(re,0,0,Dt,Vt);const w=zn.getImageData(0,0,Dt,Vt),{data:H}=w,Y=[[0,0],[Dt-1,0],[0,Vt-1],[Dt-1,Vt-1],[Math.floor(Dt/2),0],[Math.floor(Dt/2),Vt-1]],$=Y.reduce((z,[pe,Ce])=>{const De=(Ce*Dt+pe)*4;return[z[0]+H[De],z[1]+H[De+1],z[2]+H[De+2]]},[0,0,0]).map(z=>z/Y.length);for(let z=0;z<H.length;z+=4){const pe=Math.hypot(H[z]-$[0],H[z+1]-$[1],H[z+2]-$[2]);pe<42?H[z+3]=0:pe<70&&(H[z+3]=Math.round((pe-42)/28*255))}zn.putImageData(w,0,0),N(Bn.toDataURL("image/png"))},re.onerror=ve,re.src=q})}function Be(q){if(!q.type.startsWith("image/")){T("仅支持图片（JPG、PNG）和文本（html、txt、md）文件");return}window.clearTimeout(X),x.value=q.name,g.value="正在读取本地图片...",p.value=!0;const N=new FileReader;N.onload=ve=>{d.value=String(ve.target.result||""),f.value="",g.value="正在提取纹样轮廓...",X=window.setTimeout(async()=>{try{f.value=await Ae(d.value),g.value="本地提取完成，可保存到纹样库"}catch{g.value="提取失败，已保留原图，请重试"}finally{p.value=!1}},900)},N.onerror=()=>{g.value="图片读取失败，请重试",p.value=!1},N.readAsDataURL(q)}function $e(){window.clearTimeout(X),d.value="",f.value="",x.value="",g.value="等待上传图片",p.value=!1,h.value&&(h.value.value="")}function we(){if(!f.value){k("请先完成图片提取");return}_.value={...L[0],id:"uploaded-pattern",name:x.value.replace(/\.[^.]+$/,"")||"我的纹样",categoryName:"我的采集",meaning:"本次上传并提取的自定义纹样",image:f.value},o.value=_.value.id,k(`「${_.value.name}」已用于 3D 创作`),J("studio")}function Ye(q){return q==="scale"?`${M.scale}%`:q==="rotate"?`${M.rotate}°`:q==="patternSize"?`${M.patternSize}%`:q==="repeatX"?`${Number(M.repeatX).toFixed(1)}×`:q==="gloss"?`${M.gloss}%`:M[q]}function Ke(q){const N=M.gloss/100,ve={ceramic:{roughness:Mn.lerp(.62,.12,N),clearcoat:.72,clearcoatRoughness:Mn.lerp(.34,.08,N)},paper:{roughness:Mn.lerp(.94,.64,N),clearcoat:.02,clearcoatRoughness:.72},textile:{roughness:Mn.lerp(1,.76,N),clearcoat:0,clearcoatRoughness:1},polymer:{roughness:Mn.lerp(.58,.2,N),clearcoat:.46,clearcoatRoughness:Mn.lerp(.32,.12,N)}};return ve[q]||ve.ceramic}function Je(q="ceramic",N={}){const ve=Ke(q),re=new Na({color:N.color??16777215,map:N.useTexture===!1?null:ge||null,roughness:ve.roughness,metalness:N.metalness??0,clearcoat:ve.clearcoat,clearcoatRoughness:ve.clearcoatRoughness,ior:q==="ceramic"?1.47:1.42,sheen:q==="textile"?.68:0,sheenColor:q==="textile"?new lt(16050905):new lt(0),sheenRoughness:q==="textile"?.82:1,side:N.side??Ri});return re.userData.studioSurface=!0,re.userData.surfaceKind=q,re}function V(){const q=new Mi,N=new xc([new Ee(.215,-1.22),new Ee(.275,-1.17),new Ee(.315,-.98),new Ee(.39,-.72),new Ee(.485,-.38),new Ee(.515,-.08),new Ee(.485,.18),new Ee(.405,.43),new Ee(.29,.65),new Ee(.225,.82),new Ee(.205,1.05),new Ee(.215,1.24)]),ve=new lo(N.getPoints(64),128);ve.computeVertexNormals();const re=new pt(ve,Je("ceramic"));re.rotation.y=Math.PI;const ct=new pt(new qs(.23,.205,.075,96),Je("ceramic",{color:16314853,useTexture:!1}));ct.position.y=-1.245;const bt=new pt(new Yr(.205,.022,20,96),Je("ceramic",{color:16116959,useTexture:!1}));bt.rotation.x=Math.PI/2,bt.position.y=-1.282;const Dt=new pt(new Yr(.19,.027,24,128),Je("ceramic",{color:16776178,useTexture:!1}));Dt.rotation.x=Math.PI/2,Dt.position.y=1.245;const Vt=new Na({color:1516597,roughness:.78,metalness:0,side:In}),Bn=new pt(new qs(.168,.178,.54,96,1,!0),Vt);Bn.position.y=1;const zn=new pt(new $s(.178,96),Vt.clone());return zn.rotation.x=-Math.PI/2,zn.position.y=.735,q.add(re,ct,bt,Dt,Bn,zn),q}function Ne(){const q=new Mi,N=new xc([new Ee(.2,-.6),new Ee(.31,-.56),new Ee(.39,-.34),new Ee(.42,.04),new Ee(.4,.3)]),ve=new pt(new lo(N.getPoints(34),96),Je("ceramic")),re=new pt(new qs(.53,.42,.055,72),Je("ceramic",{color:15985372,useTexture:!1}));re.position.y=-.645;const ct=new pt(new Yr(.39,.026,18,96),Je("ceramic",{color:16776178,useTexture:!1}));ct.rotation.x=Math.PI/2,ct.position.y=.31;const bt=new pt(new $s(.365,72),new Na({color:1516597,roughness:.76,side:In}));bt.rotation.x=-Math.PI/2,bt.position.y=.292;const Dt=new Qf(new B(.37,.18,0),new B(.78,.2,0),new B(.78,-.4,0),new B(.34,-.44,0)),Vt=new pt(new Kc(Dt,56,.052,16,!1),Je("ceramic",{color:16248803,useTexture:!1}));return q.add(ve,re,ct,bt,Vt),q}function ne(){const q=new Mi,N=new pt(new za(1.7,.56,1.28,4,.055),Je("paper",{color:16183007})),ve=new pt(new za(1.78,.15,1.35,4,.045),Je("paper",{color:16775145}));ve.position.y=.35;const re=new pt(new qs(.105,.105,.025,40),new tp({color:13195321,roughness:.7}));return re.position.set(0,.435,0),q.add(N,ve,re),q}function he(){const q=new Gi(2.35,2.15,36,36),N=q.attributes.position;for(let re=0;re<N.count;re+=1){const ct=N.getX(re),bt=N.getY(re);N.setZ(re,Math.sin(ct*2.6)*.06+Math.sin(bt*3.2)*.05-Math.pow(Math.max(Math.abs(ct/1.18),Math.abs(bt/1.08)),2)*.16)}q.computeVertexNormals();const ve=Je("textile",{color:16314854,side:In});return new pt(q,ve)}function Oe(){const q=new Mi,N=new pt(new za(.88,1.72,.13,5,.11),Je("polymer",{color:1585223,useTexture:!1})),ve=new pt(new Gi(.79,1.61),Je("polymer",{color:16777215}));ve.position.z=.071;const re=new pt(new za(.28,.34,.035,4,.055),Je("polymer",{color:1058106,useTexture:!1}));re.position.set(-.23,.56,.088);const ct=new Na({color:528667,metalness:.45,roughness:.18}),bt=new pt(new $s(.062,32),ct);bt.position.set(-.23,.64,.108);const Dt=new pt(new $s(.062,32),ct.clone());return Dt.position.set(-.23,.49,.108),q.add(N,ve,re,bt,Dt),q}function Pe(){if(!Me)return;Ve&&(Me.remove(Ve),Ve.traverse(N=>{var ve;(ve=N.geometry)==null||ve.dispose(),N.material&&(Array.isArray(N.material)?N.material:[N.material]).forEach(ct=>ct.dispose())})),Ve=new Mi;const q={vase:V,cup:Ne,box:ne,silk:he,phone:Oe}[l.value]();q.traverse(N=>{N.isMesh&&(N.castShadow=!0,N.receiveShadow=!0)}),ae=new gr().setFromObject(q).min.y,Ve.add(q),Me.add(Ve),Qe(),Ve.traverse(N=>{(Array.isArray(N.material)?N.material:N.material?[N.material]:[]).forEach(re=>{re.wireframe=We.value,re.needsUpdate=!0})})}function Qe(){if(Ve){const q=M.scale/100;Ve.scale.setScalar(q),Ve.rotation.y=M.rotate*Math.PI/180,Ve.position.y=yl-ae*q+M.offset/60}if(Ve==null||Ve.traverse(q=>{(Array.isArray(q.material)?q.material:q.material?[q.material]:[]).forEach(ve=>{if(ve.isMeshStandardMaterial&&ve.userData.studioSurface){const re=Ke(ve.userData.surfaceKind);ve.roughness=re.roughness,ve.isMeshPhysicalMaterial&&(ve.clearcoat=re.clearcoat,ve.clearcoatRoughness=re.clearcoatRoughness),ve.needsUpdate=!0}})}),ge){const q=100/M.patternSize;ge.repeat.set(M.repeatX*q,q),ge.offset.set(M.textureOffsetX/100,M.textureOffsetY/100),ge.needsUpdate=!0}}function Pt(q){var N,ve;y.value&&(I.active=!0,I.x=q.clientX,I.y=q.clientY,(ve=(N=q.currentTarget).setPointerCapture)==null||ve.call(N,q.pointerId))}function Ht(q){I.active&&(M.textureOffsetX-=(q.clientX-I.x)*.35,M.textureOffsetY+=(q.clientY-I.y)*.35,M.textureOffsetX=Math.max(-100,Math.min(100,M.textureOffsetX)),M.textureOffsetY=Math.max(-100,Math.min(100,M.textureOffsetY)),I.x=q.clientX,I.y=q.clientY)}function ht(){I.active=!1}function vn(q,N){const re=document.createElement("canvas");re.width=1024,re.height=1024;const ct=re.getContext("2d",{willReadFrequently:!0}),bt=Mn.clamp((N==null?void 0:N.textureCrop)||0,0,.3),Dt=q.naturalWidth||q.width,Vt=q.naturalHeight||q.height,Bn=Dt*bt,zn=Vt*bt,w=Dt*(1-bt*2),H=Vt*(1-bt*2);ct.drawImage(q,Bn,zn,w,H,0,0,1024,1024);const Y=ct.getImageData(0,0,1024,1024),{data:$}=Y,z=[246,240,228],pe=[16,54,92],Ce=(N==null?void 0:N.texturePolarity)==="light";for(let Fe=0;Fe<$.length;Fe+=4){const je=$[Fe+3]/255,Ze=($[Fe]*.2126+$[Fe+1]*.7152+$[Fe+2]*.0722)/255,ze=Mn.smoothstep(Ze,.28,.8),ut=(Ce?ze:1-ze)*je;$[Fe]=Math.round(Mn.lerp(z[0],pe[0],ut)),$[Fe+1]=Math.round(Mn.lerp(z[1],pe[1],ut)),$[Fe+2]=Math.round(Mn.lerp(z[2],pe[2],ut)),$[Fe+3]=255}ct.putImageData(Y,0,0);const De=new yh(re);return De.wrapS=ia,De.wrapT=ia,De.colorSpace=mn,De.anisotropy=ue?Math.min(8,ue.capabilities.getMaxAnisotropy()):1,De}function kn(){const q=document.createElement("canvas");q.width=512,q.height=256;const N=q.getContext("2d"),ve=N.createRadialGradient(256,128,8,256,128,235);return ve.addColorStop(0,"rgba(34, 42, 48, .42)"),ve.addColorStop(.34,"rgba(45, 50, 53, .22)"),ve.addColorStop(1,"rgba(65, 62, 57, 0)"),N.fillStyle=ve,N.fillRect(0,0,q.width,q.height),new yh(q)}function yr(){var ve;if(!((ve=U.value)!=null&&ve.image)||!Me)return;const q=++Ge;new Vy().load(U.value.image,re=>{if(q!==Ge){re.dispose();return}const ct=vn(re.image,U.value);re.dispose(),ge==null||ge.dispose(),ge=ct,Pe()},void 0,()=>{q===Ge&&(ge==null||ge.dispose(),ge=null,Pe())})}function br(){if(ue||!R.value)return;const q=R.value.clientWidth||640,N=R.value.clientHeight||520;Me=new xy,Me.background=new lt(a.value==="home"?1059917:16051940),Re=new Ln(35,q/N,.1,100),Re.position.set(...E[l.value].camera),ue=new DE({antialias:!0,preserveDrawingBuffer:!0}),ue.setPixelRatio(Math.min(window.devicePixelRatio,2)),ue.setSize(q,N),ue.shadowMap.enabled=!0,ue.shadowMap.type=Qn,ue.outputColorSpace=mn,ue.toneMapping=wf,ue.toneMappingExposure=a.value==="home"?1.05:1.12,R.value.appendChild(ue.domElement),Me.add(new Gy(a.value==="home"?16249576:16775405,a.value==="home"?1522532:6320512,1.05));const ve=new Th(16772562,a.value==="home"?2.8:2.7);ve.position.set(3.6,5.2,4.5),ve.castShadow=!0,ve.shadow.mapSize.set(2048,2048),ve.shadow.camera.left=-2.8,ve.shadow.camera.right=2.8,ve.shadow.camera.top=3.2,ve.shadow.camera.bottom=-2.4,ve.shadow.bias=-5e-5,ve.shadow.normalBias=.025,ve.shadow.radius=7,ve.shadow.blurSamples=12,Me.add(ve);const re=new $y(14215669,a.value==="home"?1.8:2.2,3.2,4.2);re.position.set(-3.4,1.7,3.2),re.lookAt(0,0,0),Me.add(re);const ct=new Th(14477823,1.15);ct.position.set(-2.4,3.4,-3.2),Me.add(ct);const bt=new pt(new Gi(200,200),new Fy({opacity:a.value==="home"?.3:.17}));bt.rotation.x=-Math.PI/2,bt.position.y=yl,bt.receiveShadow=!0,Me.add(bt),Ue=new pt(new Gi(1,1),new qc({map:kn(),transparent:!0,opacity:a.value==="home"?.38:.25,depthWrite:!1})),Ue.rotation.x=-Math.PI/2,Ue.rotation.z=-.1,Me.add(Ue),Ie=new IE(Re,ue.domElement),Ie.enableDamping=!0,Ie.dampingFactor=.08,Ie.minDistance=3,Ie.maxDistance=8,Ie.target.set(...E[l.value].target),Ie.addEventListener("start",()=>{y.value=!1}),ke=new ResizeObserver(()=>{if(!ue||!R.value)return;const Dt=R.value.clientWidth,Vt=R.value.clientHeight;Re.aspect=Dt/Vt,Re.updateProjectionMatrix(),ue.setSize(Dt,Vt)}),ke.observe(R.value),A.value=!0,Pe(),F(),yr(),Kn()}function Kn(){Te=window.requestAnimationFrame(Kn),Ie==null||Ie.update(),ue==null||ue.render(Me,Re)}function Mr(){if(!ue)return;ue.render(Me,Re);const q=document.createElement("a");q.download=`patternx-${U.value.name}-${l.value}.png`,q.href=ue.domElement.toDataURL("image/png"),q.click(),k("渲染图已导出")}function Sr(){Ge+=1,window.cancelAnimationFrame(Te),ke==null||ke.disconnect(),Ie==null||Ie.dispose(),ge==null||ge.dispose(),ue==null||ue.dispose(),ue==null||ue.domElement.remove(),ue=null,Me=null,Re=null,Ie=null,Ve=null,Ue=null,ge=null}return si(o,()=>{(a.value==="home"||a.value==="studio")&&yr()}),si(l,()=>{Pe(),F()}),si(M,Qe,{deep:!0}),si(y,q=>{Ie&&(Ie.enabled=!q)}),si(a,q=>{Sr(),A.value=!1,(q==="home"||q==="studio")&&wl(br)}),pr(()=>{(a.value==="home"||a.value==="studio")&&wl(br)}),Ss(()=>{window.clearTimeout(Z),window.clearTimeout(se),window.clearTimeout(X),Sr()}),(q,N)=>{var ve;return oe(),ye("section",$E,[m("div",qE,[m("header",YE,[m("button",{class:"patternx-brand",type:"button",onClick:N[0]||(N[0]=re=>Q("/"))},[...N[20]||(N[20]=[m("img",{class:"patternx-brand-logo",src:gf,alt:"大临蓝印"},null,-1),m("span",null,[m("strong",null,"大临蓝印"),m("small",null,"非遗纹样数字化平台")],-1)])]),m("nav",jE,[m("button",{type:"button",onClick:N[1]||(N[1]=re=>Q("/"))},"主站首页"),m("button",{type:"button",onClick:te},"蓝印纹库"),(oe(),ye(at,null,xt([{key:"home",label:"工坊首页"},{key:"studio",label:"3D 创作"},{key:"upload",label:"智能采集"}],re=>m("button",{key:re.key,type:"button",class:Et({active:a.value===re.key}),onClick:ct=>J(re.key)},me(re.label),11,KE)),64))]),m("button",{class:"patternx-nav-search",type:"button","aria-label":"返回蓝印纹库",title:"返回蓝印纹库",onClick:te},[Se(de(xs),{size:20})])]),m("main",ZE,[a.value==="home"?(oe(),ye("section",JE,[m("section",QE,[m("div",eT,[N[23]||(N[23]=m("p",{class:"patternx-kicker"},"HERITAGE · PATTERN · FUTURE",-1)),N[24]||(N[24]=m("h1",null,[nt("让千年纹样"),m("br"),nt("重新流动"),m("span",{class:"patternx-seal"},[nt("非"),m("br"),nt("遗")])],-1)),N[25]||(N[25]=m("div",{class:"patternx-landing-subtitle"},[m("i"),m("strong",null,"非遗纹样数字资产平台"),m("i")],-1)),N[26]||(N[26]=m("p",{class:"patternx-landing-description"},[nt("采集、溯源、再设计，让传统纹样进入现代创作。"),m("br"),nt("以数字之名，传承东方美学，赋能当代设计。")],-1)),m("div",tT,[m("button",{class:"patternx-button primary",type:"button",onClick:te},[N[21]||(N[21]=nt("从蓝印纹库选纹 ",-1)),Se(de(ri),{size:17})]),m("button",{class:"patternx-button secondary",type:"button",onClick:N[2]||(N[2]=re=>J("studio"))},[N[22]||(N[22]=nt("进入 3D 工坊 ",-1)),Se(de(cs),{size:17})])])]),m("div",nT,[m("div",iT,[Se(de(cs),{size:16}),N[27]||(N[27]=nt(" 3D 实时预览",-1))]),N[38]||(N[38]=m("div",{class:"patternx-preview-rings","aria-hidden":"true"},[m("i"),m("i")],-1)),m("div",{ref_key:"canvasHost",ref:R,class:"patternx-landing-canvas patternx-canvas",onPointerdown:Pt,onPointermove:Ht,onPointerup:ht,onPointercancel:ht,onPointerleave:ht},[A.value?Rt("",!0):(oe(),ye("div",sT,[...N[28]||(N[28]=[m("span",{class:"patternx-spinner"},null,-1),m("p",null,"正在准备 3D 预览...",-1)])]))],544),m("aside",rT,[m("div",null,[m("h2",null,me(U.value.name),1),m("button",{type:"button","aria-label":"收藏纹样",onClick:N[3]||(N[3]=re=>fe(U.value))},[Se(de(Hu),{size:18,fill:C.value.has(U.value.id)?"currentColor":"none"},null,8,["fill"])])]),m("p",null,[N[29]||(N[29]=m("span",null,"年代",-1)),nt(me(U.value.era),1)]),m("p",null,[N[30]||(N[30]=m("span",null,"分类",-1)),nt(me(U.value.categoryName),1)]),m("p",null,[N[31]||(N[31]=m("span",null,"寓意",-1)),nt(me(U.value.meaning),1)]),m("p",null,[N[32]||(N[32]=m("span",null,"应用",-1)),nt(me(U.value.modernUse.slice(0,2).join(" / ")),1)])]),m("button",{class:"patternx-pattern-switch",type:"button",onClick:b},[m("img",{src:U.value.image,alt:U.value.name},null,8,aT),N[33]||(N[33]=m("span",null,"更换纹样",-1))]),m("div",oT,[m("button",{type:"button",title:"旋转模型",onClick:N[4]||(N[4]=re=>M.rotate=(M.rotate+45)%360)},[Se(de(Xu),{size:18}),N[34]||(N[34]=m("span",null,"旋转",-1))]),m("button",{type:"button",title:"重置视角",onClick:v},[Se(de(Bo),{size:18}),N[35]||(N[35]=m("span",null,"重置",-1))]),m("button",{type:"button",title:"全屏预览",onClick:j},[Se(de(Gu),{size:18}),N[36]||(N[36]=m("span",null,"全屏",-1))])]),m("p",lT,[Se(de(Bo),{size:14}),N[37]||(N[37]=nt(" 拖拽旋转 · 滚轮缩放 · 点击更换纹样",-1))])])]),m("section",cT,[(oe(),ye(at,null,xt(ie,re=>m("button",{key:re.title,type:"button",onClick:ct=>ee(re)},[m("span",hT,[(oe(),It(Js(re.icon),{size:28}))]),m("span",null,[m("strong",null,me(re.title),1),m("small",null,me(re.description),1),m("em",null,[nt(me(re.action)+" ",1),Se(de(ri),{size:14})])])],8,uT)),64))]),m("section",dT,[m("div",fT,[N[40]||(N[40]=m("div",null,[m("h2",null,"动物纹创作精选"),m("p",null,"图片与蓝印纹库保持一致")],-1)),m("button",{type:"button",class:"patternx-text-button",onClick:te},[N[39]||(N[39]=nt("查看动物纹 ",-1)),Se(de(ri),{size:15})])]),m("div",pT,[(oe(!0),ye(at,null,xt(G.value,re=>(oe(),ye("article",{key:re.id,class:"patternx-popular-card",onClick:ct=>ce(re)},[m("button",{type:"button",class:"patternx-popular-image",onClick:Kt(ct=>ce(re),["stop"])},[m("img",{src:re.image,alt:re.name},null,8,_T)],8,gT),m("div",null,[m("h3",null,me(re.name),1),m("small",null,me(re.era)+" · "+me(re.categoryName),1),m("p",null,me(re.meaning),1),m("footer",null,[m("span",null,[Se(de(Hu),{size:14}),nt(" "+me(re.likes),1)]),m("button",{type:"button","aria-label":"查看纹样详情",onClick:Kt(ct=>ce(re),["stop"])},[Se(de(ri),{size:15})],8,vT)])])],8,mT))),128))])])])):a.value==="upload"?(oe(),ye("section",xT,[N[48]||(N[48]=m("header",{class:"patternx-page-header compact-header"},[m("p",{class:"patternx-kicker"},"COLLECT / EXTRACT / PRESERVE"),m("h1",null,"上传纹样"),m("p",null,"拍摄或上传一张带有传统纹样的图片，开始你的数字采集。")],-1)),d.value?Rt("",!0):(oe(),ye("div",{key:0,class:"patternx-upload-zone",role:"button",tabindex:"0",onClick:xe,onKeydown:mf(xe,["enter"]),onDragover:N[5]||(N[5]=Kt(()=>{},["prevent"])),onDrop:Kt(He,["prevent"])},[Se(de($g),{size:42}),N[41]||(N[41]=m("h2",null,"拖拽图片到这里，或点击上传",-1)),N[42]||(N[42]=m("p",null,"支持 JPG、PNG 等常见图片格式，建议纹样清晰、主体完整",-1)),N[43]||(N[43]=m("span",null,"选择本地文件",-1))],32)),m("input",{ref_key:"fileInput",ref:h,class:"patternx-hidden-input",type:"file",accept:".jpg,.jpeg,.png,.html,.txt,.md,image/jpeg,image/png,text/html,text/plain,text/markdown",onChange:_e},null,544),d.value?(oe(),ye("div",yT,[m("div",bT,[m("div",MT,[Se(de(Vu),{size:18}),N[44]||(N[44]=nt(" 原图",-1))]),m("div",ST,[m("img",{src:d.value,alt:x.value},null,8,ET)])]),m("div",TT,[m("div",wT,[Se(de(rr),{size:18}),N[45]||(N[45]=nt(" 纹样提取结果",-1))]),m("div",AT,[f.value?(oe(),ye("img",{key:0,src:f.value,alt:"纹样提取结果"},null,8,CT)):(oe(),ye("span",RT))]),m("p",{class:Et(["patternx-status",{complete:!p.value}])},me(g.value),3)])])):Rt("",!0),d.value?(oe(),ye("div",PT,[m("button",{class:"patternx-button primary",type:"button",disabled:p.value,onClick:we},[N[46]||(N[46]=nt("用于 3D 创作 ",-1)),Se(de(zu),{size:17})],8,DT),m("button",{class:"patternx-button secondary",type:"button",onClick:$e},[N[47]||(N[47]=nt("重新上传 ",-1)),Se(de(ar),{size:17})])])):Rt("",!0)])):(oe(),ye("section",LT,[N[62]||(N[62]=m("header",{class:"patternx-studio-header"},[m("p",{class:"patternx-kicker"},"TEXTURE / FORM / MOTION"),m("h1",null,"3D 工坊"),m("p",null,"选择纹样和载体，实时预览三维效果。拖拽画布旋转载体，滚轮缩放查看细节。")],-1)),m("div",IT,[m("aside",UT,[m("section",NT,[m("div",FT,[Se(de(rr),{size:18}),N[49]||(N[49]=nt(" 选择纹样",-1))]),m("div",OT,[(oe(!0),ye(at,null,xt(O.value,re=>(oe(),ye("button",{key:re.id,type:"button",class:Et({selected:o.value===re.id}),onClick:ct=>be(re)},[m("span",BT,[re.image?(oe(),ye("img",{key:0,src:re.image,alt:re.name},null,8,zT)):Rt("",!0)]),m("span",null,me(re.name),1),o.value===re.id?(oe(),It(de(zu),{key:0,size:15})):Rt("",!0)],10,kT))),128))]),m("button",{class:"patternx-library-return",type:"button",onClick:te},[Se(de(xs),{size:14}),N[50]||(N[50]=nt(" 返回蓝印纹库选纹",-1))])]),m("section",HT,[m("div",VT,[Se(de(Wu),{size:18}),N[51]||(N[51]=nt(" 选择载体",-1))]),m("div",GT,[(oe(),ye(at,null,xt(D,re=>m("button",{key:re.key,type:"button",class:Et({selected:l.value===re.key}),onClick:ct=>l.value=re.key},[(oe(),It(Js(re.icon),{size:22})),m("span",null,me(re.label),1)],10,WT)),64))])]),m("section",XT,[m("div",$T,[Se(de($u),{size:18}),N[52]||(N[52]=nt(" 调整参数",-1))]),(oe(),ye(at,null,xt(At,re=>m("label",{key:re.key,class:"patternx-slider"},[m("span",null,me(re.label),1),Rd(m("input",{"onUpdate:modelValue":ct=>M[re.key]=ct,type:"range",min:re.min,max:re.max,step:re.step},null,8,qT),[[pf,M[re.key],void 0,{number:!0}]]),m("output",null,me(Ye(re.key)),1)])),64))])]),m("div",YT,[m("div",{ref_key:"canvasHost",ref:R,class:Et(["patternx-canvas studio-workspace",[`model-${l.value}`,{"texture-drag-active":y.value}]]),onPointerdown:Pt,onPointermove:Ht,onPointerup:ht,onPointercancel:ht,onPointerleave:ht},[A.value?Rt("",!0):(oe(),ye("div",jT,[...N[53]||(N[53]=[m("span",{class:"patternx-spinner"},null,-1),m("p",null,"正在准备 3D 工坊...",-1)])])),m("div",KT,[m("button",{type:"button",title:"重置场景","aria-label":"重置场景",onPointerdown:N[6]||(N[6]=Kt(()=>{},["stop"])),onClick:v},[Se(de(a_),{size:19})],32),N[54]||(N[54]=m("i",null,null,-1)),m("button",{type:"button",title:"实体视图","aria-label":"实体视图",class:Et({active:!We.value}),onPointerdown:N[7]||(N[7]=Kt(()=>{},["stop"])),onClick:N[8]||(N[8]=re=>We.value&&K())},[Se(de(cs),{size:18})],34),m("button",{type:"button",title:"线框视图","aria-label":"线框视图",class:Et({active:We.value}),onPointerdown:N[9]||(N[9]=Kt(()=>{},["stop"])),onClick:K},[Se(de($u),{size:18})],34),N[55]||(N[55]=m("i",null,null,-1)),m("button",{type:"button",title:"全屏预览","aria-label":"全屏预览",onPointerdown:N[10]||(N[10]=Kt(()=>{},["stop"])),onClick:j},[Se(de(Gu),{size:19})],32)]),m("div",ZT,[m("button",{type:"button",title:"放大","aria-label":"放大",onPointerdown:N[11]||(N[11]=Kt(()=>{},["stop"])),onClick:N[12]||(N[12]=re=>W(-1))},[Se(de(bf),{size:19}),N[56]||(N[56]=m("span",null,"缩放",-1))],32),m("button",{type:"button",title:"缩小","aria-label":"缩小",onPointerdown:N[13]||(N[13]=Kt(()=>{},["stop"])),onClick:N[14]||(N[14]=re=>W(1))},[Se(de(l_),{size:19}),N[57]||(N[57]=m("span",null,"缩小",-1))],32),m("button",{type:"button",title:"旋转 45 度","aria-label":"旋转 45 度",onPointerdown:N[15]||(N[15]=Kt(()=>{},["stop"])),onClick:N[16]||(N[16]=re=>M.rotate=(M.rotate+45)%360)},[Se(de(Xu),{size:19}),N[58]||(N[58]=m("span",null,"旋转",-1))],32),m("button",{type:"button",title:y.value?"完成纹样平移":"平移纹样","aria-label":y.value?"完成纹样平移":"平移纹样",class:Et({active:y.value}),onPointerdown:N[17]||(N[17]=Kt(()=>{},["stop"])),onClick:N[18]||(N[18]=re=>y.value=!y.value)},[Se(de(Qg),{size:19}),m("span",null,me(y.value?"完成":"纹样"),1)],42,JT),m("button",{type:"button",title:"复位","aria-label":"复位",onPointerdown:N[19]||(N[19]=Kt(()=>{},["stop"])),onClick:v},[Se(de(Bo),{size:19}),N[59]||(N[59]=m("span",null,"复位",-1))],32)]),m("div",QT,[m("div",null,[m("strong",null,me(U.value.name),1),m("small",null,me((ve=D.find(re=>re.key===l.value))==null?void 0:ve.label)+" · 实时预览",1)]),m("img",{src:U.value.image,alt:U.value.name},null,8,ew)])],34),m("div",tw,[m("div",null,[m("strong",null,me(U.value.name),1),m("span",null,me(U.value.meaning),1),N[60]||(N[60]=m("i",null,null,-1))]),m("button",{class:"patternx-button primary",type:"button",onClick:Mr},[Se(de(Ul),{size:18}),N[61]||(N[61]=nt(" 导出渲染图",-1))])])])]),m("footer",nw,[(oe(),ye(at,null,xt(P,re=>m("article",{key:re.title},[m("span",null,[(oe(),It(Js(re.icon),{size:24}))]),m("div",null,[m("strong",null,me(re.title),1),m("small",null,me(re.description),1)])])),64))])]))])]),Se(Fc,{name:"file-alert"},{default:_o(()=>[u.value?(oe(),ye("div",iw,[m("span",sw,[Se(de(Wg),{size:18})]),m("span",rw,me(u.value),1),m("button",{type:"button","aria-label":"关闭文件格式提示",onClick:le},[Se(de(ar),{size:20})])])):Rt("",!0)]),_:1}),c.value?(oe(),ye("div",aw,me(c.value),1)):Rt("",!0)])}}},lw=ua(ow,[["__scopeId","data-v-9a93a899"]]),cw={class:"app-shell"},uw={__name:"App",setup(n){const{routeName:e,routePath:t,navigate:i}=m_(),s=et("all"),r=St(()=>decodeURIComponent(t.value.replace("/pattern/",""))),a=St(()=>gn.some(u=>u.id===r.value));function o(u){i(`/pattern/${u.id}`)}function l(u){s.value=u}function c(u){i(`/patternx?pattern=${encodeURIComponent(u.id)}&view=studio`)}return(u,h)=>(oe(),ye("div",cw,[de(e)!=="find-game"&&de(e)!=="find-card"&&de(e)!=="patternx"?(oe(),It(p_,{key:0,"route-name":de(e),"route-path":de(t),onNavigate:de(i)},null,8,["route-name","route-path","onNavigate"])):Rt("",!0),Se(Fc,{name:"page",mode:"out-in"},{default:_o(()=>[(oe(),ye("main",{key:de(e)+de(t),class:Et(["page",{"page-find-menu":de(e)==="find-menu"}])},[de(e)==="home"?(oe(),It(Yu,{key:0,onNavigate:de(i),onOpenPattern:o,onSelectCategory:l,onCreatePattern:c},null,8,["onNavigate"])):de(e)==="library"?(oe(),It(Lv,{key:1,"initial-category":s.value,onOpenPattern:o,onCreatePattern:c},null,8,["initial-category"])):de(e)==="pattern"&&a.value?(oe(),It(Wv,{key:2,"pattern-id":r.value,onNavigate:de(i),onOpenPattern:o,onCreatePattern:c},null,8,["pattern-id","onNavigate"])):de(e)==="heritage"?(oe(),It(w0,{key:3})):de(e)==="find-menu"?(oe(),It(u0,{key:4,onNavigate:de(i)},null,8,["onNavigate"])):de(e)==="find-card"?(oe(),It(P_,{key:5,onNavigate:de(i)},null,8,["onNavigate"])):de(e)==="find-game"?(oe(),It(K_,{key:6,onNavigate:de(i)},null,8,["onNavigate"])):de(e)==="patternx"?(oe(),It(lw,{key:7,onNavigate:de(i),onSelectCategory:l},null,8,["onNavigate"])):(oe(),It(Yu,{key:8,onNavigate:de(i),onOpenPattern:o,onSelectCategory:l,onCreatePattern:c},null,8,["onNavigate"]))],2))]),_:1}),de(e)!=="home"&&de(e)!=="find-menu"&&de(e)!=="find-card"&&de(e)!=="patternx"?(oe(),It(zg,{key:1,onNavigate:de(i)},null,8,["onNavigate"])):Rt("",!0)]))}};Fg(uw).mount("#app");
