(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Kl(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const St={},Os=[],Yn=()=>{},Ed=()=>!1,Ha=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Va=n=>n.startsWith("onUpdate:"),kt=Object.assign,Zl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Ih=Object.prototype.hasOwnProperty,pt=(n,e)=>Ih.call(n,e),We=Array.isArray,Bs=n=>Fr(n)==="[object Map]",Td=n=>Fr(n)==="[object Set]",Dc=n=>Fr(n)==="[object Date]",Ze=n=>typeof n=="function",At=n=>typeof n=="string",Zn=n=>typeof n=="symbol",_t=n=>n!==null&&typeof n=="object",Ad=n=>(_t(n)||Ze(n))&&Ze(n.then)&&Ze(n.catch),wd=Object.prototype.toString,Fr=n=>wd.call(n),Uh=n=>Fr(n).slice(8,-1),Cd=n=>Fr(n)==="[object Object]",Jl=n=>At(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,xr=Kl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ga=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},Nh=/-\w/g,nn=Ga(n=>n.replace(Nh,e=>e.slice(1).toUpperCase())),Fh=/\B([A-Z])/g,ki=Ga(n=>n.replace(Fh,"-$1").toLowerCase()),Wa=Ga(n=>n.charAt(0).toUpperCase()+n.slice(1)),so=Ga(n=>n?`on${Wa(n)}`:""),Xn=(n,e)=>!Object.is(n,e),ga=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Rd=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Ql=n=>{const e=parseFloat(n);return isNaN(e)?n:e},Oh=n=>{const e=At(n)?Number(n):NaN;return isNaN(e)?n:e};let Lc;const Xa=()=>Lc||(Lc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function en(n){if(We(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=At(i)?Hh(i):en(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(At(n)||_t(n))return n}const Bh=/;(?![^(]*\))/g,kh=/:([^]+)/,zh=/\/\*[^]*?\*\//g;function Hh(n){const e={};return n.replace(zh,"").split(Bh).forEach(t=>{if(t){const i=t.split(kh);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function xt(n){let e="";if(At(n))e=n;else if(We(n))for(let t=0;t<n.length;t++){const i=xt(n[t]);i&&(e+=i+" ")}else if(_t(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Vh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Gh=Kl(Vh);function Pd(n){return!!n||n===""}function Wh(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=ec(n[i],e[i]);return t}function ec(n,e){if(n===e)return!0;let t=Dc(n),i=Dc(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=Zn(n),i=Zn(e),t||i)return n===e;if(t=We(n),i=We(e),t||i)return t&&i?Wh(n,e):!1;if(t=_t(n),i=_t(e),t||i){if(!t||!i)return!1;const s=Object.keys(n).length,r=Object.keys(e).length;if(s!==r)return!1;for(const a in n){const o=n.hasOwnProperty(a),l=e.hasOwnProperty(a);if(o&&!l||!o&&l||!ec(n[a],e[a]))return!1}}return String(n)===String(e)}const Dd=n=>!!(n&&n.__v_isRef===!0),ue=n=>At(n)?n:n==null?"":We(n)||_t(n)&&(n.toString===wd||!Ze(n.toString))?Dd(n)?ue(n.value):JSON.stringify(n,Ld,2):String(n),Ld=(n,e)=>Dd(e)?Ld(n,e.value):Bs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[ro(i,r)+" =>"]=s,t),{})}:Td(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>ro(t))}:Zn(e)?ro(e):_t(e)&&!We(e)&&!Cd(e)?String(e):e,ro=(n,e="")=>{var t;return Zn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ht;class Xh{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Ht&&(Ht.active?(this.parent=Ht,this.index=(Ht.scopes||(Ht.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){const i=this.scopes.slice();for(e=0,t=i.length;e<t;e++)i[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){const s=this.scopes.slice();for(e=0,t=s.length;e<t;e++)s[e].resume()}const i=this.effects.slice();for(e=0,t=i.length;e<t;e++)i[e].resume()}}run(e){if(this._active){const t=Ht;try{return Ht=this,e()}finally{Ht=t}}}on(){++this._on===1&&(this.prevScope=Ht,Ht=this)}off(){if(this._on>0&&--this._on===0){if(Ht===this)Ht=this.prevScope;else{let e=Ht;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(t=0,i=s.length;t<i;t++)s[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function $h(){return Ht}let Et;const ao=new WeakSet;class Id{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ht&&(Ht.active?Ht.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ao.has(this)&&(ao.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Nd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ic(this),Fd(this);const e=Et,t=Nn;Et=this,Nn=!0;try{return this.fn()}finally{Od(this),Et=e,Nn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ic(e);this.deps=this.depsTail=void 0,Ic(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ao.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Yo(this)&&this.run()}get dirty(){return Yo(this)}}let Ud=0,yr,br;function Nd(n,e=!1){if(n.flags|=8,e){n.next=br,br=n;return}n.next=yr,yr=n}function tc(){Ud++}function nc(){if(--Ud>0)return;if(br){let e=br;for(br=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;yr;){let e=yr;for(yr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Fd(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Od(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),ic(i),jh(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function Yo(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Bd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Bd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Tr)||(n.globalVersion=Tr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Yo(n))))return;n.flags|=2;const e=n.dep,t=Et,i=Nn;Et=n,Nn=!0;try{Fd(n);const s=n.fn(n._value);(e.version===0||Xn(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{Et=t,Nn=i,Od(n),n.flags&=-3}}function ic(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)ic(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function jh(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Nn=!0;const kd=[];function mi(){kd.push(Nn),Nn=!1}function gi(){const n=kd.pop();Nn=n===void 0?!0:n}function Ic(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Et;Et=void 0;try{e()}finally{Et=t}}}let Tr=0;class qh{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class sc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Et||!Nn||Et===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Et)t=this.activeLink=new qh(Et,this),Et.deps?(t.prevDep=Et.depsTail,Et.depsTail.nextDep=t,Et.depsTail=t):Et.deps=Et.depsTail=t,zd(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Et.depsTail,t.nextDep=void 0,Et.depsTail.nextDep=t,Et.depsTail=t,Et.deps===t&&(Et.deps=i)}return t}trigger(e){this.version++,Tr++,this.notify(e)}notify(e){tc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{nc()}}}function zd(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)zd(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Ko=new WeakMap,rs=Symbol(""),Zo=Symbol(""),Ar=Symbol("");function jt(n,e,t){if(Nn&&Et){let i=Ko.get(n);i||Ko.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new sc),s.map=i,s.key=t),s.track()}}function ci(n,e,t,i,s,r){const a=Ko.get(n);if(!a){Tr++;return}const o=l=>{l&&l.trigger()};if(tc(),e==="clear")a.forEach(o);else{const l=We(n),c=l&&Jl(t);if(l&&t==="length"){const u=Number(i);a.forEach((d,h)=>{(h==="length"||h===Ar||!Zn(h)&&h>=u)&&o(d)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),c&&o(a.get(Ar)),e){case"add":l?c&&o(a.get("length")):(o(a.get(rs)),Bs(n)&&o(a.get(Zo)));break;case"delete":l||(o(a.get(rs)),Bs(n)&&o(a.get(Zo)));break;case"set":Bs(n)&&o(a.get(rs));break}}nc()}function _s(n){const e=ut(n);return e===n?e:(jt(e,"iterate",Ar),An(n)?e:e.map(On))}function $a(n){return jt(n=ut(n),"iterate",Ar),n}function Vn(n,e){return _i(n)?$s(as(n)?On(e):e):On(e)}const Yh={__proto__:null,[Symbol.iterator](){return oo(this,Symbol.iterator,n=>Vn(this,n))},concat(...n){return _s(this).concat(...n.map(e=>We(e)?_s(e):e))},entries(){return oo(this,"entries",n=>(n[1]=Vn(this,n[1]),n))},every(n,e){return Qn(this,"every",n,e,void 0,arguments)},filter(n,e){return Qn(this,"filter",n,e,t=>t.map(i=>Vn(this,i)),arguments)},find(n,e){return Qn(this,"find",n,e,t=>Vn(this,t),arguments)},findIndex(n,e){return Qn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Qn(this,"findLast",n,e,t=>Vn(this,t),arguments)},findLastIndex(n,e){return Qn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Qn(this,"forEach",n,e,void 0,arguments)},includes(...n){return lo(this,"includes",n)},indexOf(...n){return lo(this,"indexOf",n)},join(n){return _s(this).join(n)},lastIndexOf(...n){return lo(this,"lastIndexOf",n)},map(n,e){return Qn(this,"map",n,e,void 0,arguments)},pop(){return ar(this,"pop")},push(...n){return ar(this,"push",n)},reduce(n,...e){return Uc(this,"reduce",n,e)},reduceRight(n,...e){return Uc(this,"reduceRight",n,e)},shift(){return ar(this,"shift")},some(n,e){return Qn(this,"some",n,e,void 0,arguments)},splice(...n){return ar(this,"splice",n)},toReversed(){return _s(this).toReversed()},toSorted(n){return _s(this).toSorted(n)},toSpliced(...n){return _s(this).toSpliced(...n)},unshift(...n){return ar(this,"unshift",n)},values(){return oo(this,"values",n=>Vn(this,n))}};function oo(n,e,t){const i=$a(n),s=i[e]();return i!==n&&!An(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const Kh=Array.prototype;function Qn(n,e,t,i,s,r){const a=$a(n),o=a!==n&&!An(n),l=a[e];if(l!==Kh[e]){const d=l.apply(n,r);return o?On(d):d}let c=t;a!==n&&(o?c=function(d,h){return t.call(this,Vn(n,d),h,n)}:t.length>2&&(c=function(d,h){return t.call(this,d,h,n)}));const u=l.call(a,c,i);return o&&s?s(u):u}function Uc(n,e,t,i){const s=$a(n),r=s!==n&&!An(n);let a=t,o=!1;s!==n&&(r?(o=i.length===0,a=function(c,u,d){return o&&(o=!1,c=Vn(n,c)),t.call(this,c,Vn(n,u),d,n)}):t.length>3&&(a=function(c,u,d){return t.call(this,c,u,d,n)}));const l=s[e](a,...i);return o?Vn(n,l):l}function lo(n,e,t){const i=ut(n);jt(i,"iterate",Ar);const s=i[e](...t);return(s===-1||s===!1)&&oc(t[0])?(t[0]=ut(t[0]),i[e](...t)):s}function ar(n,e,t=[]){mi(),tc();const i=ut(n)[e].apply(n,t);return nc(),gi(),i}const Zh=Kl("__proto__,__v_isRef,__isVue"),Hd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Zn));function Jh(n){Zn(n)||(n=String(n));const e=ut(this);return jt(e,"has",n),e.hasOwnProperty(n)}class Vd{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?lp:$d:r?Xd:Wd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=We(e);if(!s){let l;if(a&&(l=Yh[t]))return l;if(t==="hasOwnProperty")return Jh}const o=Reflect.get(e,t,Yt(e)?e:i);if((Zn(t)?Hd.has(t):Zh(t))||(s||jt(e,"get",t),r))return o;if(Yt(o)){const l=a&&Jl(t)?o:o.value;return s&&_t(l)?Qo(l):l}return _t(o)?s?Qo(o):wr(o):o}}class Gd extends Vd{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const a=We(e)&&Jl(t);if(!this._isShallow){const c=_i(r);if(!An(i)&&!_i(i)&&(r=ut(r),i=ut(i)),!a&&Yt(r)&&!Yt(i))return c||(r.value=i),!0}const o=a?Number(t)<e.length:pt(e,t),l=Reflect.set(e,t,i,Yt(e)?e:s);return e===ut(s)&&l&&(o?Xn(i,r)&&ci(e,"set",t,i):ci(e,"add",t,i)),l}deleteProperty(e,t){const i=pt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&ci(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!Zn(t)||!Hd.has(t))&&jt(e,"has",t),i}ownKeys(e){return jt(e,"iterate",We(e)?"length":rs),Reflect.ownKeys(e)}}class Qh extends Vd{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const ep=new Gd,tp=new Qh,np=new Gd(!0);const Jo=n=>n,Wr=n=>Reflect.getPrototypeOf(n);function ip(n,e,t){return function(...i){const s=this.__v_raw,r=ut(s),a=Bs(r),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=s[n](...i),u=t?Jo:e?$s:On;return!e&&jt(r,"iterate",l?Zo:rs),kt(Object.create(c),{next(){const{value:d,done:h}=c.next();return h?{value:d,done:h}:{value:o?[u(d[0]),u(d[1])]:u(d),done:h}}})}}function Xr(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function sp(n,e){const t={get(s){const r=this.__v_raw,a=ut(r),o=ut(s);n||(Xn(s,o)&&jt(a,"get",s),jt(a,"get",o));const{has:l}=Wr(a),c=e?Jo:n?$s:On;if(l.call(a,s))return c(r.get(s));if(l.call(a,o))return c(r.get(o));r!==a&&r.get(s)},get size(){const s=this.__v_raw;return!n&&jt(ut(s),"iterate",rs),s.size},has(s){const r=this.__v_raw,a=ut(r),o=ut(s);return n||(Xn(s,o)&&jt(a,"has",s),jt(a,"has",o)),s===o?r.has(s):r.has(s)||r.has(o)},forEach(s,r){const a=this,o=a.__v_raw,l=ut(o),c=e?Jo:n?$s:On;return!n&&jt(l,"iterate",rs),o.forEach((u,d)=>s.call(r,c(u),c(d),a))}};return kt(t,n?{add:Xr("add"),set:Xr("set"),delete:Xr("delete"),clear:Xr("clear")}:{add(s){const r=ut(this),a=Wr(r),o=ut(s),l=!e&&!An(s)&&!_i(s)?o:s;return a.has.call(r,l)||Xn(s,l)&&a.has.call(r,s)||Xn(o,l)&&a.has.call(r,o)||(r.add(l),ci(r,"add",l,l)),this},set(s,r){!e&&!An(r)&&!_i(r)&&(r=ut(r));const a=ut(this),{has:o,get:l}=Wr(a);let c=o.call(a,s);c||(s=ut(s),c=o.call(a,s));const u=l.call(a,s);return a.set(s,r),c?Xn(r,u)&&ci(a,"set",s,r):ci(a,"add",s,r),this},delete(s){const r=ut(this),{has:a,get:o}=Wr(r);let l=a.call(r,s);l||(s=ut(s),l=a.call(r,s)),o&&o.call(r,s);const c=r.delete(s);return l&&ci(r,"delete",s,void 0),c},clear(){const s=ut(this),r=s.size!==0,a=s.clear();return r&&ci(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=ip(s,n,e)}),t}function rc(n,e){const t=sp(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(pt(t,s)&&s in i?t:i,s,r)}const rp={get:rc(!1,!1)},ap={get:rc(!1,!0)},op={get:rc(!0,!1)};const Wd=new WeakMap,Xd=new WeakMap,$d=new WeakMap,lp=new WeakMap;function cp(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function wr(n){return _i(n)?n:ac(n,!1,ep,rp,Wd)}function up(n){return ac(n,!1,np,ap,Xd)}function Qo(n){return ac(n,!0,tp,op,$d)}function ac(n,e,t,i,s){if(!_t(n)||n.__v_raw&&!(e&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const r=s.get(n);if(r)return r;const a=cp(Uh(n));if(a===0)return n;const o=new Proxy(n,a===2?i:t);return s.set(n,o),o}function as(n){return _i(n)?as(n.__v_raw):!!(n&&n.__v_isReactive)}function _i(n){return!!(n&&n.__v_isReadonly)}function An(n){return!!(n&&n.__v_isShallow)}function oc(n){return n?!!n.__v_raw:!1}function ut(n){const e=n&&n.__v_raw;return e?ut(e):n}function dp(n){return!pt(n,"__v_skip")&&Object.isExtensible(n)&&Rd(n,"__v_skip",!0),n}const On=n=>_t(n)?wr(n):n,$s=n=>_t(n)?Qo(n):n;function Yt(n){return n?n.__v_isRef===!0:!1}function Ye(n){return fp(n,!1)}function fp(n,e){return Yt(n)?n:new hp(n,e)}class hp{constructor(e,t){this.dep=new sc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:ut(e),this._value=t?e:On(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||An(e)||_i(e);e=i?e:ut(e),Xn(e,t)&&(this._rawValue=e,this._value=i?e:On(e),this.dep.trigger())}}function _e(n){return Yt(n)?n.value:n}const pp={get:(n,e,t)=>e==="__v_raw"?n:_e(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return Yt(s)&&!Yt(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function jd(n){return as(n)?n:new Proxy(n,pp)}class mp{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new sc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Tr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Et!==this)return Nd(this,!0),!0}get value(){const e=this.dep.track();return Bd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function gp(n,e,t=!1){let i,s;return Ze(n)?i=n:(i=n.get,s=n.set),new mp(i,s,t)}const $r={},wa=new WeakMap;let Ji;function _p(n,e=!1,t=Ji){if(t){let i=wa.get(t);i||wa.set(t,i=[]),i.push(n)}}function vp(n,e,t=St){const{immediate:i,deep:s,once:r,scheduler:a,augmentJob:o,call:l}=t,c=b=>s?b:An(b)||s===!1||s===0?ui(b,1):ui(b);let u,d,h,p,v=!1,y=!1;if(Yt(n)?(d=()=>n.value,v=An(n)):as(n)?(d=()=>c(n),v=!0):We(n)?(y=!0,v=n.some(b=>as(b)||An(b)),d=()=>n.map(b=>{if(Yt(b))return b.value;if(as(b))return c(b);if(Ze(b))return l?l(b,2):b()})):Ze(n)?e?d=l?()=>l(n,2):n:d=()=>{if(h){mi();try{h()}finally{gi()}}const b=Ji;Ji=u;try{return l?l(n,3,[p]):n(p)}finally{Ji=b}}:d=Yn,e&&s){const b=d,I=s===!0?1/0:s;d=()=>ui(b(),I)}const g=$h(),f=()=>{u.stop(),g&&g.active&&Zl(g.effects,u)};if(r&&e){const b=e;e=(...I)=>{const w=b(...I);return f(),w}}let C=y?new Array(n.length).fill($r):$r;const R=b=>{if(!(!(u.flags&1)||!u.dirty&&!b))if(e){const I=u.run();if(b||s||v||(y?I.some((w,A)=>Xn(w,C[A])):Xn(I,C))){h&&h();const w=Ji;Ji=u;try{const A=[I,C===$r?void 0:y&&C[0]===$r?[]:C,p];C=I,l?l(e,3,A):e(...A)}finally{Ji=w}}}else u.run()};return o&&o(R),u=new Id(d),u.scheduler=a?()=>a(R,!1):R,p=b=>_p(b,!1,u),h=u.onStop=()=>{const b=wa.get(u);if(b){if(l)l(b,4);else for(const I of b)I();wa.delete(u)}},e?i?R(!0):C=u.run():a?a(R.bind(null,!0),!0):u.run(),f.pause=u.pause.bind(u),f.resume=u.resume.bind(u),f.stop=f,f}function ui(n,e=1/0,t){if(e<=0||!_t(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Yt(n))ui(n.value,e,t);else if(We(n))for(let i=0;i<n.length;i++)ui(n[i],e,t);else if(Td(n)||Bs(n))n.forEach(i=>{ui(i,e,t)});else if(Cd(n)){for(const i in n)ui(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&ui(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Or(n,e,t,i){try{return i?n(...i):n()}catch(s){ja(s,e,t)}}function wn(n,e,t,i){if(Ze(n)){const s=Or(n,e,t,i);return s&&Ad(s)&&s.catch(r=>{ja(r,e,t)}),s}if(We(n)){const s=[];for(let r=0;r<n.length;r++)s.push(wn(n[r],e,t,i));return s}}function ja(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||St;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const u=o.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](n,l,c)===!1)return}o=o.parent}if(r){mi(),Or(r,null,10,[n,l,c]),gi();return}}xp(n,t,s,i,a)}function xp(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const Qt=[];let Hn=-1;const ks=[];let Ci=null,Ls=0;const qd=Promise.resolve();let Ca=null;function el(n){const e=Ca||qd;return n?e.then(this?n.bind(this):n):e}function yp(n){let e=Hn+1,t=Qt.length;for(;e<t;){const i=e+t>>>1,s=Qt[i],r=Cr(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function lc(n){if(!(n.flags&1)){const e=Cr(n),t=Qt[Qt.length-1];!t||!(n.flags&2)&&e>=Cr(t)?Qt.push(n):Qt.splice(yp(e),0,n),n.flags|=1,Yd()}}function Yd(){Ca||(Ca=qd.then(Zd))}function bp(n){We(n)?ks.push(...n):Ci&&n.id===-1?Ci.splice(Ls+1,0,n):n.flags&1||(ks.push(n),n.flags|=1),Yd()}function Nc(n,e,t=Hn+1){for(;t<Qt.length;t++){const i=Qt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Qt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Kd(n){if(ks.length){const e=[...new Set(ks)].sort((t,i)=>Cr(t)-Cr(i));if(ks.length=0,Ci){Ci.push(...e);return}for(Ci=e,Ls=0;Ls<Ci.length;Ls++){const t=Ci[Ls];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Ci=null,Ls=0}}const Cr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Zd(n){try{for(Hn=0;Hn<Qt.length;Hn++){const e=Qt[Hn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Or(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Hn<Qt.length;Hn++){const e=Qt[Hn];e&&(e.flags&=-2)}Hn=-1,Qt.length=0,Kd(),Ca=null,(Qt.length||ks.length)&&Zd()}}let mn=null,Jd=null;function Ra(n){const e=mn;return mn=n,Jd=n&&n.type.__scopeId||null,e}function qa(n,e=mn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&Ia(-1);const r=Ra(e),a=os.length;let o;try{o=n(...s)}finally{for(let l=os.length;l>a;l--)Rf();Ra(r),i._d&&Ia(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function tl(n,e){if(mn===null)return n;const t=Qa(mn),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,a,o,l=St]=e[s];r&&(Ze(r)&&(r={mounted:r,updated:r}),r.deep&&ui(a),i.push({dir:r,instance:t,value:a,oldValue:void 0,arg:o,modifiers:l}))}return n}function Vi(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let a=0;a<s.length;a++){const o=s[a];r&&(o.oldValue=r[a].value);let l=o.dir[i];l&&(mi(),wn(l,t,8,[n.el,o,n,e]),gi())}}function Mp(n,e){if(qt){let t=qt.provides;const i=qt.parent&&qt.parent.provides;i===t&&(t=qt.provides=Object.create(i)),t[n]=e}}function _a(n,e,t=!1){const i=Lf();if(i||zs){let s=zs?zs._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&Ze(e)?e.call(i&&i.proxy):e}}const Sp=Symbol.for("v-scx"),Ep=()=>_a(Sp);function $n(n,e,t){return Qd(n,e,t)}function Qd(n,e,t=St){const{immediate:i,deep:s,flush:r,once:a}=t,o=kt({},t),l=e&&i||!e&&r!=="post";let c;if(Dr){if(r==="sync"){const p=Ep();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=Yn,p.resume=Yn,p.pause=Yn,p}}const u=qt;o.call=(p,v,y)=>wn(p,u,v,y);let d=!1;r==="post"?o.scheduler=p=>{ln(p,u&&u.suspense)}:r!=="sync"&&(d=!0,o.scheduler=(p,v)=>{v?p():lc(p)}),o.augmentJob=p=>{e&&(p.flags|=4),d&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const h=vp(n,e,o);return Dr&&(c?c.push(h):l&&h()),h}function Tp(n,e,t){const i=this.proxy,s=At(n)?n.includes(".")?ef(i,n):()=>i[n]:n.bind(i,i);let r;Ze(e)?r=e:(r=e.handler,t=e);const a=Br(this),o=Qd(s,r.bind(i),t);return a(),o}function ef(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const Ap=Symbol("_vte"),tf=n=>n.__isTeleport,En=Symbol("_leaveCb"),or=Symbol("_enterCb");function wp(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return tr(()=>{n.isMounted=!0}),fs(()=>{n.isUnmounting=!0}),n}const bn=[Function,Array],nf={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:bn,onEnter:bn,onAfterEnter:bn,onEnterCancelled:bn,onBeforeLeave:bn,onLeave:bn,onAfterLeave:bn,onLeaveCancelled:bn,onBeforeAppear:bn,onAppear:bn,onAfterAppear:bn,onAppearCancelled:bn},sf=n=>{const e=n.subTree;return e.component?sf(e.component):e},Cp={name:"BaseTransition",props:nf,setup(n,{slots:e}){const t=Lf(),i=wp();return()=>{const s=e.default&&of(e.default(),!0),r=s&&s.length?rf(s):t.subTree?vt():void 0;if(!r)return;const a=ut(n),{mode:o}=a;if(i.isLeaving)return co(r);const l=Fc(r);if(!l)return co(r);let c=nl(l,a,i,t,d=>c=d);l.type!==tn&&Rr(l,c);let u=t.subTree&&Fc(t.subTree);if(u&&u.type!==tn&&!es(u,l)&&sf(t).type!==tn){let d=nl(u,a,i,t);if(Rr(u,d),o==="out-in"&&l.type!==tn)return i.isLeaving=!0,d.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete d.afterLeave,u=void 0},co(r);o==="in-out"&&l.type!==tn?d.delayLeave=(h,p,v)=>{const y=af(i,u);y[String(u.key)]=u,h[En]=()=>{p(),h[En]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{v(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function rf(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==tn){e=t;break}}return e}const Rp=Cp;function af(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function nl(n,e,t,i,s){const{appear:r,mode:a,persisted:o=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:h,onLeave:p,onAfterLeave:v,onLeaveCancelled:y,onBeforeAppear:g,onAppear:f,onAfterAppear:C,onAppearCancelled:R}=e,b=String(n.key),I=af(t,n),w=(S,M)=>{S&&wn(S,i,9,M)},A=(S,M)=>{const U=M[1];w(S,M),We(S)?S.every(F=>F.length<=1)&&U():S.length<=1&&U()},L={mode:a,persisted:o,beforeEnter(S){let M=l;if(!t.isMounted)if(r)M=g||l;else return;S[En]&&S[En](!0);const U=I[b];U&&es(n,U)&&U.el[En]&&U.el[En](),w(M,[S])},enter(S){if(I[b]===n)return;let M=c,U=u,F=d;if(!t.isMounted)if(r)M=f||c,U=C||u,F=R||d;else return;let B=!1;S[or]=ne=>{B||(B=!0,ne?w(F,[S]):w(U,[S]),L.delayedLeave&&L.delayedLeave(),S[or]=void 0)};const X=S[or].bind(null,!1);M?A(M,[S,X]):X()},leave(S,M){const U=String(n.key);if(S[or]&&S[or](!0),t.isUnmounting)return M();w(h,[S]);let F=!1;S[En]=X=>{F||(F=!0,M(),X?w(y,[S]):w(v,[S]),S[En]=void 0,I[U]===n&&delete I[U])};const B=S[En].bind(null,!1);I[U]=n,p?A(p,[S,B]):B()},clone(S){const M=nl(S,e,t,i,s);return s&&s(M),M}};return L}function co(n){if(Ya(n))return n=Fi(n),n.children=null,n}function Fc(n){if(!Ya(n))return tf(n.type)&&n.children?rf(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&Ze(t.default))return t.default()}}function Rr(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Rr(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function of(n,e=!1,t){let i=[],s=0;for(let r=0;r<n.length;r++){let a=n[r];const o=t==null?a.key:String(t)+String(a.key!=null?a.key:r);a.type===et?(a.patchFlag&128&&s++,i=i.concat(of(a.children,e,o))):(e||a.type!==tn)&&i.push(o!=null?Fi(a,{key:o}):a)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function lf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Oc(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const Pa=new WeakMap;function Mr(n,e,t,i,s=!1){if(We(n)){n.forEach((y,g)=>Mr(y,e&&(We(e)?e[g]:e),t,i,s));return}if(Sr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Mr(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?Qa(i.component):i.el,a=s?null:r,{i:o,r:l}=n,c=e&&e.r,u=o.refs===St?o.refs={}:o.refs,d=o.setupState,h=ut(d),p=d===St?Ed:y=>Oc(u,y)?!1:pt(h,y),v=(y,g)=>!(g&&Oc(u,g));if(c!=null&&c!==l){if(Bc(e),At(c))u[c]=null,p(c)&&(d[c]=null);else if(Yt(c)){const y=e;v(c,y.k)&&(c.value=null),y.k&&(u[y.k]=null)}}if(Ze(l))Or(l,o,12,[a,u]);else{const y=At(l),g=Yt(l);if(y||g){const f=()=>{if(n.f){const C=y?p(l)?d[l]:u[l]:v()||!n.k?l.value:u[n.k];if(s)We(C)&&Zl(C,r);else if(We(C))C.includes(r)||C.push(r);else if(y)u[l]=[r],p(l)&&(d[l]=u[l]);else{const R=[r];v(l,n.k)&&(l.value=R),n.k&&(u[n.k]=R)}}else y?(u[l]=a,p(l)&&(d[l]=a)):g&&(v(l,n.k)&&(l.value=a),n.k&&(u[n.k]=a))};if(a){const C=()=>{f(),Pa.delete(n)};C.id=-1,Pa.set(n,C),ln(C,t)}else Bc(n),f()}}}function Bc(n){const e=Pa.get(n);e&&(e.flags|=8,Pa.delete(n))}Xa().requestIdleCallback;Xa().cancelIdleCallback;const Sr=n=>!!n.type.__asyncLoader,Ya=n=>n.type.__isKeepAlive;function Pp(n,e){cf(n,"a",e)}function Dp(n,e){cf(n,"da",e)}function cf(n,e,t=qt){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Ka(e,i,t),t){let s=t.parent;for(;s&&s.parent;)Ya(s.parent.vnode)&&Lp(i,e,t,s),s=s.parent}}function Lp(n,e,t,i){const s=Ka(e,n,i,!0);uf(()=>{Zl(i[e],s)},t)}function Ka(n,e,t=qt,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...a)=>{mi();const o=Br(t),l=wn(e,t,n,a);return o(),gi(),l});return i?s.unshift(r):s.push(r),r}}const xi=n=>(e,t=qt)=>{(!Dr||n==="sp")&&Ka(n,(...i)=>e(...i),t)},Ip=xi("bm"),tr=xi("m"),Up=xi("bu"),Np=xi("u"),fs=xi("bum"),uf=xi("um"),Fp=xi("sp"),Op=xi("rtg"),Bp=xi("rtc");function kp(n,e=qt){Ka("ec",n,e)}const zp="components",df=Symbol.for("v-ndc");function Da(n){return At(n)?Hp(zp,n,!1)||n:n||df}function Hp(n,e,t=!0,i=!1){const s=mn||qt;if(s){const r=s.type;{const o=Tm(r,!1);if(o&&(o===e||o===nn(e)||o===Wa(nn(e))))return r}const a=kc(s[n]||r[n],e)||kc(s.appContext[n],e);return!a&&i?r:a}}function kc(n,e){return n&&(n[e]||n[nn(e)]||n[Wa(nn(e))])}function gt(n,e,t,i){let s;const r=t,a=We(n);if(a||At(n)){const o=a&&as(n);let l=!1,c=!1;o&&(l=!An(n),c=_i(n),n=$a(n)),s=new Array(n.length);for(let u=0,d=n.length;u<d;u++)s[u]=e(l?c?$s(On(n[u])):On(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let o=0;o<n;o++)s[o]=e(o+1,o,void 0,r)}else if(_t(n))if(n[Symbol.iterator])s=Array.from(n,(o,l)=>e(o,l,void 0,r));else{const o=Object.keys(n);s=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}const il=n=>n?If(n)?Qa(n):il(n.parent):null,Er=kt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>il(n.parent),$root:n=>il(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>hf(n),$forceUpdate:n=>n.f||(n.f=()=>{lc(n.update)}),$nextTick:n=>n.n||(n.n=el.bind(n.proxy)),$watch:n=>Tp.bind(n)}),uo=(n,e)=>n!==St&&!n.__isScriptSetup&&pt(n,e),Vp={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:a,type:o,appContext:l}=n;if(e[0]!=="$"){const h=a[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(uo(i,e))return a[e]=1,i[e];if(s!==St&&pt(s,e))return a[e]=2,s[e];if(pt(r,e))return a[e]=3,r[e];if(t!==St&&pt(t,e))return a[e]=4,t[e];sl&&(a[e]=0)}}const c=Er[e];let u,d;if(c)return e==="$attrs"&&jt(n.attrs,"get",""),c(n);if((u=o.__cssModules)&&(u=u[e]))return u;if(t!==St&&pt(t,e))return a[e]=4,t[e];if(d=l.config.globalProperties,pt(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return uo(s,e)?(s[e]=t,!0):i!==St&&pt(i,e)?(i[e]=t,!0):pt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:a}},o){let l;return!!(t[o]||n!==St&&o[0]!=="$"&&pt(n,o)||uo(e,o)||pt(r,o)||pt(i,o)||pt(Er,o)||pt(s.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:pt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function zc(n){return We(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let sl=!0;function Gp(n){const e=hf(n),t=n.proxy,i=n.ctx;sl=!1,e.beforeCreate&&Hc(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:d,mounted:h,beforeUpdate:p,updated:v,activated:y,deactivated:g,beforeDestroy:f,beforeUnmount:C,destroyed:R,unmounted:b,render:I,renderTracked:w,renderTriggered:A,errorCaptured:L,serverPrefetch:S,expose:M,inheritAttrs:U,components:F,directives:B,filters:X}=e;if(c&&Wp(c,i,null),a)for(const ie in a){const V=a[ie];Ze(V)&&(i[ie]=V.bind(t))}if(s){const ie=s.call(t,t);_t(ie)&&(n.data=wr(ie))}if(sl=!0,r)for(const ie in r){const V=r[ie],me=Ze(V)?V.bind(t,t):Ze(V.get)?V.get.bind(t,t):Yn,Me=!Ze(V)&&Ze(V.set)?V.set.bind(t):Yn,Se=mt({get:me,set:Me});Object.defineProperty(i,ie,{enumerable:!0,configurable:!0,get:()=>Se.value,set:Ie=>Se.value=Ie})}if(o)for(const ie in o)ff(o[ie],i,t,ie);if(l){const ie=Ze(l)?l.call(t):l;Reflect.ownKeys(ie).forEach(V=>{Mp(V,ie[V])})}u&&Hc(u,n,"c");function K(ie,V){We(V)?V.forEach(me=>ie(me.bind(t))):V&&ie(V.bind(t))}if(K(Ip,d),K(tr,h),K(Up,p),K(Np,v),K(Pp,y),K(Dp,g),K(kp,L),K(Bp,w),K(Op,A),K(fs,C),K(uf,b),K(Fp,S),We(M))if(M.length){const ie=n.exposed||(n.exposed={});M.forEach(V=>{Object.defineProperty(ie,V,{get:()=>t[V],set:me=>t[V]=me,enumerable:!0})})}else n.exposed||(n.exposed={});I&&n.render===Yn&&(n.render=I),U!=null&&(n.inheritAttrs=U),F&&(n.components=F),B&&(n.directives=B),S&&lf(n)}function Wp(n,e,t=Yn){We(n)&&(n=rl(n));for(const i in n){const s=n[i];let r;_t(s)?"default"in s?r=_a(s.from||i,s.default,!0):r=_a(s.from||i):r=_a(s),Yt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:a=>r.value=a}):e[i]=r}}function Hc(n,e,t){wn(We(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function ff(n,e,t,i){let s=i.includes(".")?ef(t,i):()=>t[i];if(At(n)){const r=e[n];Ze(r)&&$n(s,r)}else if(Ze(n))$n(s,n.bind(t));else if(_t(n))if(We(n))n.forEach(r=>ff(r,e,t,i));else{const r=Ze(n.handler)?n.handler.bind(t):e[n.handler];Ze(r)&&$n(s,r,n)}}function hf(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:a}}=n.appContext,o=r.get(e);let l;return o?l=o:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>La(l,c,a,!0)),La(l,e,a)),_t(e)&&r.set(e,l),l}function La(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&La(n,r,t,!0),s&&s.forEach(a=>La(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=Xp[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const Xp={data:Vc,props:Gc,emits:Gc,methods:gr,computed:gr,beforeCreate:Zt,created:Zt,beforeMount:Zt,mounted:Zt,beforeUpdate:Zt,updated:Zt,beforeDestroy:Zt,beforeUnmount:Zt,destroyed:Zt,unmounted:Zt,activated:Zt,deactivated:Zt,errorCaptured:Zt,serverPrefetch:Zt,components:gr,directives:gr,watch:jp,provide:Vc,inject:$p};function Vc(n,e){return e?n?function(){return kt(Ze(n)?n.call(this,this):n,Ze(e)?e.call(this,this):e)}:e:n}function $p(n,e){return gr(rl(n),rl(e))}function rl(n){if(We(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Zt(n,e){return n?[...new Set([].concat(n,e))]:e}function gr(n,e){return n?kt(Object.create(null),n,e):e}function Gc(n,e){return n?We(n)&&We(e)?[...new Set([...n,...e])]:kt(Object.create(null),zc(n),zc(e??{})):e}function jp(n,e){if(!n)return e;if(!e)return n;const t=kt(Object.create(null),n);for(const i in e)t[i]=Zt(n[i],e[i]);return t}function pf(){return{app:null,config:{isNativeTag:Ed,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let qp=0;function Yp(n,e){return function(i,s=null){Ze(i)||(i=kt({},i)),s!=null&&!_t(s)&&(s=null);const r=pf(),a=new WeakSet,o=[];let l=!1;const c=r.app={_uid:qp++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:wm,get config(){return r.config},set config(u){},use(u,...d){return a.has(u)||(u&&Ze(u.install)?(a.add(u),u.install(c,...d)):Ze(u)&&(a.add(u),u(c,...d))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,d){return d?(r.components[u]=d,c):r.components[u]},directive(u,d){return d?(r.directives[u]=d,c):r.directives[u]},mount(u,d,h){if(!l){const p=c._ceVNode||Pe(i,s);return p.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),n(p,u,h),l=!0,c._container=u,u.__vue_app__=c,Qa(p.component)}},onUnmount(u){o.push(u)},unmount(){l&&(wn(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,d){return r.provides[u]=d,c},runWithContext(u){const d=zs;zs=c;try{return u()}finally{zs=d}}};return c}}let zs=null;const Kp=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${nn(e)}Modifiers`]||n[`${ki(e)}Modifiers`];function Zp(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||St;let s=t;const r=e.startsWith("update:"),a=r&&Kp(i,e.slice(7));a&&(a.trim&&(s=t.map(u=>At(u)?u.trim():u)),a.number&&(s=t.map(Ql)));let o,l=i[o=so(e)]||i[o=so(nn(e))];!l&&r&&(l=i[o=so(ki(e))]),l&&wn(l,n,6,s);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,wn(c,n,6,s)}}const Jp=new WeakMap;function mf(n,e,t=!1){const i=t?Jp:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let a={},o=!1;if(!Ze(n)){const l=c=>{const u=mf(c,e,!0);u&&(o=!0,kt(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!o?(_t(n)&&i.set(n,null),null):(We(r)?r.forEach(l=>a[l]=null):kt(a,r),_t(n)&&i.set(n,a),a)}function Za(n,e){return!n||!Ha(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),pt(n,e[0].toLowerCase()+e.slice(1))||pt(n,ki(e))||pt(n,e))}function Wc(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:d,data:h,setupState:p,ctx:v,inheritAttrs:y}=n,g=Ra(n);let f,C;try{if(t.shapeFlag&4){const b=s||i,I=b;f=Gn(c.call(I,b,u,d,p,h,v)),C=o}else{const b=e;f=Gn(b.length>1?b(d,{attrs:o,slots:a,emit:l}):b(d,null)),C=e.props?o:Qp(o)}}catch(b){os.length=0,ja(b,n,1),f=Pe(tn)}let R=f;if(C&&y!==!1){const b=Object.keys(C),{shapeFlag:I}=R;b.length&&I&7&&(r&&b.some(Va)&&(C=em(C,r)),R=Fi(R,C,!1,!0))}return t.dirs&&(R=Fi(R,null,!1,!0),R.dirs=R.dirs?R.dirs.concat(t.dirs):t.dirs),t.transition&&Rr(R,t.transition),f=R,Ra(g),f}const Qp=n=>{let e;for(const t in n)(t==="class"||t==="style"||Ha(t))&&((e||(e={}))[t]=n[t]);return e},em=(n,e)=>{const t={};for(const i in n)(!Va(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function tm(n,e,t){const{props:i,children:s,component:r}=n,{props:a,children:o,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Xc(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(gf(a,i,h)&&!Za(c,h))return!0}}}else return(s||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?Xc(i,a,c):!0:!!a;return!1}function Xc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(gf(e,n,r)&&!Za(t,r))return!0}return!1}function gf(n,e,t){const i=n[t],s=e[t];return t==="style"&&_t(i)&&_t(s)?!ec(i,s):i!==s}function nm({vnode:n,parent:e,suspense:t},i){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const _f={},vf=()=>Object.create(_f),xf=n=>Object.getPrototypeOf(n)===_f;function im(n,e,t,i=!1){const s={},r=vf();n.propsDefaults=Object.create(null),yf(n,e,s,r);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=i?s:up(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function sm(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:a}}=n,o=ut(s),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];if(Za(n.emitsOptions,h))continue;const p=e[h];if(l)if(pt(r,h))p!==r[h]&&(r[h]=p,c=!0);else{const v=nn(h);s[v]=al(l,o,v,p,n,!1)}else p!==r[h]&&(r[h]=p,c=!0)}}}else{yf(n,e,s,r)&&(c=!0);let u;for(const d in o)(!e||!pt(e,d)&&((u=ki(d))===d||!pt(e,u)))&&(l?t&&(t[d]!==void 0||t[u]!==void 0)&&(s[d]=al(l,o,d,void 0,n,!0)):delete s[d]);if(r!==o)for(const d in r)(!e||!pt(e,d))&&(delete r[d],c=!0)}c&&ci(n.attrs,"set","")}function yf(n,e,t,i){const[s,r]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(xr(l))continue;const c=e[l];let u;s&&pt(s,u=nn(l))?!r||!r.includes(u)?t[u]=c:(o||(o={}))[u]=c:Za(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(r){const l=ut(t),c=o||St;for(let u=0;u<r.length;u++){const d=r[u];t[d]=al(s,l,d,c[d],n,!pt(c,d))}}return a}function al(n,e,t,i,s,r){const a=n[t];if(a!=null){const o=pt(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&Ze(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=Br(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}a[0]&&(r&&!o?i=!1:a[1]&&(i===""||i===ki(t))&&(i=!0))}return i}const rm=new WeakMap;function bf(n,e,t=!1){const i=t?rm:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,a={},o=[];let l=!1;if(!Ze(n)){const u=d=>{l=!0;const[h,p]=bf(d,e,!0);kt(a,h),p&&o.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return _t(n)&&i.set(n,Os),Os;if(We(r))for(let u=0;u<r.length;u++){const d=nn(r[u]);$c(d)&&(a[d]=St)}else if(r)for(const u in r){const d=nn(u);if($c(d)){const h=r[u],p=a[d]=We(h)||Ze(h)?{type:h}:kt({},h),v=p.type;let y=!1,g=!0;if(We(v))for(let f=0;f<v.length;++f){const C=v[f],R=Ze(C)&&C.name;if(R==="Boolean"){y=!0;break}else R==="String"&&(g=!1)}else y=Ze(v)&&v.name==="Boolean";p[0]=y,p[1]=g,(y||pt(p,"default"))&&o.push(d)}}const c=[a,o];return _t(n)&&i.set(n,c),c}function $c(n){return n[0]!=="$"&&!xr(n)}const cc=n=>n==="_"||n==="_ctx"||n==="$stable",uc=n=>We(n)?n.map(Gn):[Gn(n)],am=(n,e,t)=>{if(e._n)return e;const i=qa((...s)=>uc(e(...s)),t);return i._c=!1,i},Mf=(n,e,t)=>{const i=n._ctx;for(const s in n){if(cc(s))continue;const r=n[s];if(Ze(r))e[s]=am(s,r,i);else if(r!=null){const a=uc(r);e[s]=()=>a}}},Sf=(n,e)=>{const t=uc(e);n.slots.default=()=>t},Ef=(n,e,t)=>{for(const i in e)(t||!cc(i))&&(n[i]=e[i])},om=(n,e,t)=>{const i=n.slots=vf();if(n.vnode.shapeFlag&32){const s=e._;s?(Ef(i,e,t),t&&Rd(i,"_",s,!0)):Mf(e,i)}else e&&Sf(n,e)},lm=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,a=St;if(i.shapeFlag&32){const o=e._;o?t&&o===1?r=!1:Ef(s,e,t):(r=!e.$stable,Mf(e,s)),a=e}else e&&(Sf(n,e),a={default:1});if(r)for(const o in s)!cc(o)&&a[o]==null&&delete s[o]},ln=hm;function cm(n){return um(n)}function um(n,e){const t=Xa();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:h,setScopeId:p=Yn,insertStaticContent:v}=n,y=(P,k,E,oe=null,ee=null,J=null,te=void 0,le=null,Q=!!k.dynamicChildren)=>{if(P===k)return;P&&!es(P,k)&&(oe=Ee(P),Ie(P,ee,J,!0),P=null),k.patchFlag===-2&&(Q=!1,k.dynamicChildren=null);const{type:x,ref:_,shapeFlag:O}=k;switch(x){case Ja:g(P,k,E,oe);break;case tn:f(P,k,E,oe);break;case va:P==null&&C(k,E,oe,te);break;case et:F(P,k,E,oe,ee,J,te,le,Q);break;default:O&1?I(P,k,E,oe,ee,J,te,le,Q):O&6?B(P,k,E,oe,ee,J,te,le,Q):(O&64||O&128)&&x.process(P,k,E,oe,ee,J,te,le,Q,$e)}_!=null&&ee?Mr(_,P&&P.ref,J,k||P,!k):_==null&&P&&P.ref!=null&&Mr(P.ref,null,J,P,!0)},g=(P,k,E,oe)=>{if(P==null)i(k.el=o(k.children),E,oe);else{const ee=k.el=P.el;k.children!==P.children&&c(ee,k.children)}},f=(P,k,E,oe)=>{P==null?i(k.el=l(k.children||""),E,oe):k.el=P.el},C=(P,k,E,oe)=>{[P.el,P.anchor]=v(P.children,k,E,oe,P.el,P.anchor)},R=({el:P,anchor:k},E,oe)=>{let ee;for(;P&&P!==k;)ee=h(P),i(P,E,oe),P=ee;i(k,E,oe)},b=({el:P,anchor:k})=>{let E;for(;P&&P!==k;)E=h(P),s(P),P=E;s(k)},I=(P,k,E,oe,ee,J,te,le,Q)=>{if(k.type==="svg"?te="svg":k.type==="math"&&(te="mathml"),P==null)w(k,E,oe,ee,J,te,le,Q);else{const x=P.el&&P.el._isVueCE?P.el:null;try{x&&x._beginPatch(),S(P,k,ee,J,te,le,Q)}finally{x&&x._endPatch()}}},w=(P,k,E,oe,ee,J,te,le)=>{let Q,x;const{props:_,shapeFlag:O,transition:W,dirs:q}=P;if(Q=P.el=a(P.type,J,_&&_.is,_),O&8?u(Q,P.children):O&16&&L(P.children,Q,null,oe,ee,fo(P,J),te,le),q&&Vi(P,null,oe,"created"),A(Q,P,P.scopeId,te,oe),_){for(const ye in _)ye!=="value"&&!xr(ye)&&r(Q,ye,null,_[ye],J,oe);"value"in _&&r(Q,"value",null,_.value,J),(x=_.onVnodeBeforeMount)&&zn(x,oe,P)}q&&Vi(P,null,oe,"beforeMount");const j=dm(ee,W);j&&W.beforeEnter(Q),i(Q,k,E),((x=_&&_.onVnodeMounted)||j||q)&&ln(()=>{try{x&&zn(x,oe,P),j&&W.enter(Q),q&&Vi(P,null,oe,"mounted")}finally{}},ee)},A=(P,k,E,oe,ee)=>{if(E&&p(P,E),oe)for(let J=0;J<oe.length;J++)p(P,oe[J]);if(ee){let J=ee.subTree;if(k===J||Cf(J.type)&&(J.ssContent===k||J.ssFallback===k)){const te=ee.vnode;A(P,te,te.scopeId,te.slotScopeIds,ee.parent)}}},L=(P,k,E,oe,ee,J,te,le,Q=0)=>{for(let x=Q;x<P.length;x++){const _=P[x]=le?li(P[x]):Gn(P[x]);y(null,_,k,E,oe,ee,J,te,le)}},S=(P,k,E,oe,ee,J,te)=>{const le=k.el=P.el;let{patchFlag:Q,dynamicChildren:x,dirs:_}=k;Q|=P.patchFlag&16;const O=P.props||St,W=k.props||St;let q;if(E&&Gi(E,!1),(q=W.onVnodeBeforeUpdate)&&zn(q,E,k,P),_&&Vi(k,P,E,"beforeUpdate"),E&&Gi(E,!0),x&&(!P.dynamicChildren||P.dynamicChildren.length!==x.length)&&(Q=0,te=!1,x=null),(O.innerHTML&&W.innerHTML==null||O.textContent&&W.textContent==null)&&u(le,""),x?M(P.dynamicChildren,x,le,E,oe,fo(k,ee),J):te||V(P,k,le,null,E,oe,fo(k,ee),J,!1),Q>0){if(Q&16)U(le,O,W,E,ee);else if(Q&2&&O.class!==W.class&&r(le,"class",null,W.class,ee),Q&4&&r(le,"style",O.style,W.style,ee),Q&8){const j=k.dynamicProps;for(let ye=0;ye<j.length;ye++){const fe=j[ye],xe=O[fe],Ne=W[fe];(Ne!==xe||fe==="value")&&r(le,fe,xe,Ne,ee,E)}}Q&1&&P.children!==k.children&&u(le,k.children)}else!te&&x==null&&U(le,O,W,E,ee);((q=W.onVnodeUpdated)||_)&&ln(()=>{q&&zn(q,E,k,P),_&&Vi(k,P,E,"updated")},oe)},M=(P,k,E,oe,ee,J,te)=>{for(let le=0;le<k.length;le++){const Q=P[le],x=k[le],_=Q.el&&(Q.type===et||!es(Q,x)||Q.shapeFlag&198)?d(Q.el):E;y(Q,x,_,null,oe,ee,J,te,!0)}},U=(P,k,E,oe,ee)=>{if(k!==E){if(k!==St)for(const J in k)!xr(J)&&!(J in E)&&r(P,J,k[J],null,ee,oe);for(const J in E){if(xr(J))continue;const te=E[J],le=k[J];te!==le&&J!=="value"&&r(P,J,le,te,ee,oe)}"value"in E&&r(P,"value",k.value,E.value,ee)}},F=(P,k,E,oe,ee,J,te,le,Q)=>{const x=k.el=P?P.el:o(""),_=k.anchor=P?P.anchor:o("");let{patchFlag:O,dynamicChildren:W,slotScopeIds:q}=k;q&&(le=le?le.concat(q):q),P==null?(i(x,E,oe),i(_,E,oe),L(k.children||[],E,_,ee,J,te,le,Q)):O>0&&O&64&&W&&P.dynamicChildren&&P.dynamicChildren.length===W.length?(M(P.dynamicChildren,W,E,ee,J,te,le),(k.key!=null||ee&&k===ee.subTree)&&Tf(P,k,!0)):V(P,k,E,_,ee,J,te,le,Q)},B=(P,k,E,oe,ee,J,te,le,Q)=>{k.slotScopeIds=le,P==null?k.shapeFlag&512?ee.ctx.activate(k,E,oe,te,Q):X(k,E,oe,ee,J,te,Q):ne(P,k,Q)},X=(P,k,E,oe,ee,J,te)=>{const le=P.component=ym(P,oe,ee);if(Ya(P)&&(le.ctx.renderer=$e),bm(le,!1,te),le.asyncDep){if(ee&&ee.registerDep(le,K,te),!P.el){const Q=le.subTree=Pe(tn);f(null,Q,k,E),P.placeholder=Q.el}}else K(le,P,k,E,ee,J,te)},ne=(P,k,E)=>{const oe=k.component=P.component;if(tm(P,k,E))if(oe.asyncDep&&!oe.asyncResolved){ie(oe,k,E);return}else oe.next=k,oe.update();else k.el=P.el,oe.vnode=k},K=(P,k,E,oe,ee,J,te)=>{const le=()=>{if(P.isMounted){let{next:O,bu:W,u:q,parent:j,vnode:ye}=P;{const Te=Af(P);if(Te){O&&(O.el=ye.el,ie(P,O,te)),Te.asyncDep.then(()=>{ln(()=>{P.isUnmounted||x()},ee)});return}}let fe=O,xe;Gi(P,!1),O?(O.el=ye.el,ie(P,O,te)):O=ye,W&&ga(W),(xe=O.props&&O.props.onVnodeBeforeUpdate)&&zn(xe,j,O,ye),Gi(P,!0);const Ne=Wc(P),he=P.subTree;P.subTree=Ne,y(he,Ne,d(he.el),Ee(he),P,ee,J),O.el=Ne.el,fe===null&&nm(P,Ne.el),q&&ln(q,ee),(xe=O.props&&O.props.onVnodeUpdated)&&ln(()=>zn(xe,j,O,ye),ee)}else{let O;const{el:W,props:q}=k,{bm:j,m:ye,parent:fe,root:xe,type:Ne}=P,he=Sr(k);Gi(P,!1),j&&ga(j),!he&&(O=q&&q.onVnodeBeforeMount)&&zn(O,fe,k),Gi(P,!0);{xe.ce&&xe.ce._hasShadowRoot()&&xe.ce._injectChildStyle(Ne,P.parent?P.parent.type:void 0);const Te=P.subTree=Wc(P);y(null,Te,E,oe,P,ee,J),k.el=Te.el}if(ye&&ln(ye,ee),!he&&(O=q&&q.onVnodeMounted)){const Te=k;ln(()=>zn(O,fe,Te),ee)}(k.shapeFlag&256||fe&&Sr(fe.vnode)&&fe.vnode.shapeFlag&256)&&P.a&&ln(P.a,ee),P.isMounted=!0,k=E=oe=null}};P.scope.on();const Q=P.effect=new Id(le);P.scope.off();const x=P.update=Q.run.bind(Q),_=P.job=Q.runIfDirty.bind(Q);_.i=P,_.id=P.uid,Q.scheduler=()=>lc(_),Gi(P,!0),x()},ie=(P,k,E)=>{k.component=P;const oe=P.vnode.props;P.vnode=k,P.next=null,sm(P,k.props,oe,E),lm(P,k.children,E),mi(),Nc(P),gi()},V=(P,k,E,oe,ee,J,te,le,Q=!1)=>{const x=P&&P.children,_=P?P.shapeFlag:0,O=k.children,{patchFlag:W,shapeFlag:q}=k;if(W>0){if(W&128){Me(x,O,E,oe,ee,J,te,le,Q);return}else if(W&256){me(x,O,E,oe,ee,J,te,le,Q);return}}q&8?(_&16&&Re(x,ee,J),O!==x&&u(E,O)):_&16?q&16?Me(x,O,E,oe,ee,J,te,le,Q):Re(x,ee,J,!0):(_&8&&u(E,""),q&16&&L(O,E,oe,ee,J,te,le,Q))},me=(P,k,E,oe,ee,J,te,le,Q)=>{P=P||Os,k=k||Os;const x=P.length,_=k.length,O=Math.min(x,_);let W;for(W=0;W<O;W++){const q=k[W]=Q?li(k[W]):Gn(k[W]);y(P[W],q,E,null,ee,J,te,le,Q)}x>_?Re(P,ee,J,!0,!1,O):L(k,E,oe,ee,J,te,le,Q,O)},Me=(P,k,E,oe,ee,J,te,le,Q)=>{let x=0;const _=k.length;let O=P.length-1,W=_-1;for(;x<=O&&x<=W;){const q=P[x],j=k[x]=Q?li(k[x]):Gn(k[x]);if(es(q,j))y(q,j,E,null,ee,J,te,le,Q);else break;x++}for(;x<=O&&x<=W;){const q=P[O],j=k[W]=Q?li(k[W]):Gn(k[W]);if(es(q,j))y(q,j,E,null,ee,J,te,le,Q);else break;O--,W--}if(x>O){if(x<=W){const q=W+1,j=q<_?k[q].el:oe;for(;x<=W;)y(null,k[x]=Q?li(k[x]):Gn(k[x]),E,j,ee,J,te,le,Q),x++}}else if(x>W)for(;x<=O;)Ie(P[x],ee,J,!0),x++;else{const q=x,j=x,ye=new Map;for(x=j;x<=W;x++){const be=k[x]=Q?li(k[x]):Gn(k[x]);be.key!=null&&ye.set(be.key,x)}let fe,xe=0;const Ne=W-j+1;let he=!1,Te=0;const Ue=new Array(Ne);for(x=0;x<Ne;x++)Ue[x]=0;for(x=q;x<=O;x++){const be=P[x];if(xe>=Ne){Ie(be,ee,J,!0);continue}let Ve;if(be.key!=null)Ve=ye.get(be.key);else for(fe=j;fe<=W;fe++)if(Ue[fe-j]===0&&es(be,k[fe])){Ve=fe;break}Ve===void 0?Ie(be,ee,J,!0):(Ue[Ve-j]=x+1,Ve>=Te?Te=Ve:he=!0,y(be,k[Ve],E,null,ee,J,te,le,Q),xe++)}const ke=he?fm(Ue):Os;for(fe=ke.length-1,x=Ne-1;x>=0;x--){const be=j+x,Ve=k[be],je=k[be+1],ct=be+1<_?je.el||wf(je):oe;Ue[x]===0?y(null,Ve,E,ct,ee,J,te,le,Q):he&&(fe<0||x!==ke[fe]?Se(Ve,E,ct,2):fe--)}}},Se=(P,k,E,oe,ee=null)=>{const{el:J,type:te,transition:le,children:Q,shapeFlag:x}=P;if(x&6){Se(P.component.subTree,k,E,oe);return}if(x&128){P.suspense.move(k,E,oe);return}if(x&64){te.move(P,k,E,$e);return}if(te===et){i(J,k,E);for(let O=0;O<Q.length;O++)Se(Q[O],k,E,oe);i(P.anchor,k,E);return}if(te===va){R(P,k,E);return}if(oe!==2&&x&1&&le)if(oe===0)le.persisted&&!J[En]?i(J,k,E):(le.beforeEnter(J),i(J,k,E),ln(()=>le.enter(J),ee));else{const{leave:O,delayLeave:W,afterLeave:q}=le,j=()=>{P.ctx.isUnmounted?s(J):i(J,k,E)},ye=()=>{const fe=J._isLeaving||!!J[En];J._isLeaving&&J[En](!0),le.persisted&&!fe?j():O(J,()=>{j(),q&&q()})};W?W(J,j,ye):ye()}else i(J,k,E)},Ie=(P,k,E,oe=!1,ee=!1)=>{const{type:J,props:te,ref:le,children:Q,dynamicChildren:x,shapeFlag:_,patchFlag:O,dirs:W,cacheIndex:q,memo:j}=P;if(O===-2&&(ee=!1),le!=null&&(mi(),Mr(le,null,E,P,!0),gi()),q!=null&&(k.renderCache[q]=void 0),_&256){k.ctx.deactivate(P);return}const ye=_&1&&W,fe=!Sr(P);let xe;if(fe&&(xe=te&&te.onVnodeBeforeUnmount)&&zn(xe,k,P),_&6)ve(P.component,E,oe);else{if(_&128){P.suspense.unmount(E,oe);return}ye&&Vi(P,null,k,"beforeUnmount"),_&64?P.type.remove(P,k,E,$e,oe):x&&!x.hasOnce&&(J!==et||O>0&&O&64)?Re(x,k,E,!1,!0):(J===et&&O&384||!ee&&_&16)&&Re(Q,k,E),oe&&Xe(P)}const Ne=j!=null&&q==null;(fe&&(xe=te&&te.onVnodeUnmounted)||ye||Ne)&&ln(()=>{xe&&zn(xe,k,P),ye&&Vi(P,null,k,"unmounted"),Ne&&(P.el=null)},E)},Xe=P=>{const{type:k,el:E,anchor:oe,transition:ee}=P;if(k===et){ae(E,oe);return}if(k===va){b(P);return}const J=()=>{s(E),ee&&!ee.persisted&&ee.afterLeave&&ee.afterLeave()};if(P.shapeFlag&1&&ee&&!ee.persisted){const{leave:te,delayLeave:le}=ee,Q=()=>te(E,J);le?le(P.el,J,Q):Q()}else J()},ae=(P,k)=>{let E;for(;P!==k;)E=h(P),s(P),P=E;s(k)},ve=(P,k,E)=>{const{bum:oe,scope:ee,job:J,subTree:te,um:le,m:Q,a:x}=P;jc(Q),jc(x),oe&&ga(oe),ee.stop(),J&&(J.flags|=8,Ie(te,P,k,E)),le&&ln(le,k),ln(()=>{P.isUnmounted=!0},k)},Re=(P,k,E,oe=!1,ee=!1,J=0)=>{for(let te=J;te<P.length;te++)Ie(P[te],k,E,oe,ee)},Ee=P=>{if(P.shapeFlag&6)return Ee(P.component.subTree);if(P.shapeFlag&128)return P.suspense.next();const k=h(P.anchor||P.el),E=k&&k[Ap];return E?h(E):k};let Be=!1;const Fe=(P,k,E)=>{let oe;P==null?k._vnode&&(Ie(k._vnode,null,null,!0),oe=k._vnode.component):y(k._vnode||null,P,k,null,null,null,E),k._vnode=P,Be||(Be=!0,Nc(oe),Kd(),Be=!1)},$e={p:y,um:Ie,m:Se,r:Xe,mt:X,mc:L,pc:V,pbc:M,n:Ee,o:n};return{render:Fe,hydrate:void 0,createApp:Yp(Fe)}}function fo({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Gi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function dm(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Tf(n,e,t=!1){const i=n.children,s=e.children;if(We(i)&&We(s))for(let r=0;r<i.length;r++){const a=i[r];let o=s[r];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=s[r]=li(s[r]),o.el=a.el),!t&&o.patchFlag!==-2&&Tf(a,o)),o.type===Ja&&(o.patchFlag===-1&&(o=s[r]=li(o)),o.el=a.el),o.type===tn&&!o.el&&(o.el=a.el)}}function fm(n){const e=n.slice(),t=[0];let i,s,r,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,a=t.length-1;r<a;)o=r+a>>1,n[t[o]]<c?r=o+1:a=o;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,a=t[r-1];r-- >0;)t[r]=a,a=e[a];return t}function Af(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Af(e)}function jc(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function wf(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?wf(e.subTree):null}const Cf=n=>n.__isSuspense;function hm(n,e){e&&e.pendingBranch?We(n)?e.effects.push(...n):e.effects.push(n):bp(n)}const et=Symbol.for("v-fgt"),Ja=Symbol.for("v-txt"),tn=Symbol.for("v-cmt"),va=Symbol.for("v-stc"),os=[];let gn=null;function re(n=!1){os.push(gn=n?null:[])}function Rf(){os.pop(),gn=os[os.length-1]||null}let Pr=1;function Ia(n,e=!1){Pr+=n,n<0&&gn&&e&&(gn.hasOnce=!0)}function Pf(n){return n.dynamicChildren=Pr>0?gn||Os:null,Rf(),Pr>0&&gn&&gn.push(n),n}function pe(n,e,t,i,s,r){return Pf(m(n,e,t,i,s,r,!0))}function Ct(n,e,t,i,s){return Pf(Pe(n,e,t,i,s,!0))}function Ua(n){return n?n.__v_isVNode===!0:!1}function es(n,e){return n.type===e.type&&n.key===e.key}const Df=({key:n})=>n??null,xa=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?At(n)||Yt(n)||Ze(n)?{i:mn,r:n,k:e,f:!!t}:n:null);function m(n,e=null,t=null,i=0,s=null,r=n===et?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Df(e),ref:e&&xa(e),scopeId:Jd,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:mn};return o?(Na(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=At(t)?8:16),Pr>0&&!a&&gn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&gn.push(l),l}const Pe=pm;function pm(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===df)&&(n=tn),Ua(n)){const o=Fi(n,e,!0);return t&&Na(o,t),Pr>0&&!r&&gn&&(o.shapeFlag&6?gn[gn.indexOf(n)]=o:gn.push(o)),o.patchFlag=-2,o}if(Am(n)&&(n=n.__vccOpts),e){e=mm(e);let{class:o,style:l}=e;o&&!At(o)&&(e.class=xt(o)),_t(l)&&(oc(l)&&!We(l)&&(l=kt({},l)),e.style=en(l))}const a=At(n)?1:Cf(n)?128:tf(n)?64:_t(n)?4:Ze(n)?2:0;return m(n,e,t,i,s,a,r,!0)}function mm(n){return n?oc(n)||xf(n)?kt({},n):n:null}function Fi(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:a,children:o,transition:l}=n,c=e?_m(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Df(c),ref:e&&e.ref?t&&r?We(r)?r.concat(xa(e)):[r,xa(e)]:xa(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==et?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Fi(n.ssContent),ssFallback:n.ssFallback&&Fi(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Rr(u,l.clone(u)),u}function st(n=" ",e=0){return Pe(Ja,null,n,e)}function gm(n,e){const t=Pe(va,null,n);return t.staticCount=e,t}function vt(n="",e=!1){return e?(re(),Ct(tn,null,n)):Pe(tn,null,n)}function Gn(n){return n==null||typeof n=="boolean"?Pe(tn):We(n)?Pe(et,null,n.slice()):Ua(n)?li(n):Pe(Ja,null,String(n))}function li(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Fi(n)}function Na(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(We(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Na(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!xf(e)?e._ctx=mn:s===3&&mn&&(mn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else if(Ze(e)){if(i&65){Na(n,{default:e});return}e={default:e,_ctx:mn},t=32}else e=String(e),i&64?(t=16,e=[st(e)]):t=8;n.children=e,n.shapeFlag|=t}function _m(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=xt([e.class,i.class]));else if(s==="style")e.style=en([e.style,i.style]);else if(Ha(s)){const r=e[s],a=i[s];a&&r!==a&&!(We(r)&&r.includes(a))?e[s]=r?[].concat(r,a):a:a==null&&r==null&&!Va(s)&&(e[s]=a)}else s!==""&&(e[s]=i[s])}return e}function zn(n,e,t,i=null){wn(n,e,7,[t,i])}const vm=pf();let xm=0;function ym(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||vm,r={uid:xm++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Xh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:bf(i,s),emitsOptions:mf(i,s),emit:null,emitted:null,propsDefaults:St,inheritAttrs:i.inheritAttrs,ctx:St,data:St,props:St,attrs:St,slots:St,refs:St,setupState:St,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Zp.bind(null,r),n.ce&&n.ce(r),r}let qt=null;const Lf=()=>qt||mn;let Fa,ol;{const n=Xa(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(a=>a(r)):s[0](r)}};Fa=e("__VUE_INSTANCE_SETTERS__",t=>qt=t),ol=e("__VUE_SSR_SETTERS__",t=>Dr=t)}const Br=n=>{const e=qt;return Fa(n),n.scope.on(),()=>{n.scope.off(),Fa(e)}},qc=()=>{qt&&qt.scope.off(),Fa(null)};function If(n){return n.vnode.shapeFlag&4}let Dr=!1;function bm(n,e=!1,t=!1){e&&ol(e);const{props:i,children:s}=n.vnode,r=If(n);im(n,i,r,e),om(n,s,t||e);const a=r?Mm(n,e):void 0;return e&&ol(!1),a}function Mm(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Vp);const{setup:i}=t;if(i){mi();const s=n.setupContext=i.length>1?Em(n):null,r=Br(n),a=Or(i,n,0,[n.props,s]),o=Ad(a);if(gi(),r(),(o||n.sp)&&!Sr(n)&&lf(n),o){if(a.then(qc,qc),e)return a.then(l=>{Yc(n,l)}).catch(l=>{ja(l,n,0)});n.asyncDep=a}else Yc(n,a)}else Uf(n)}function Yc(n,e,t){Ze(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:_t(e)&&(n.setupState=jd(e)),Uf(n)}function Uf(n,e,t){const i=n.type;n.render||(n.render=i.render||Yn);{const s=Br(n);mi();try{Gp(n)}finally{gi(),s()}}}const Sm={get(n,e){return jt(n,"get",""),n[e]}};function Em(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Sm),slots:n.slots,emit:n.emit,expose:e}}function Qa(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(jd(dp(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Er)return Er[t](n)},has(e,t){return t in e||t in Er}})):n.proxy}function Tm(n,e=!0){return Ze(n)?n.displayName||n.name:n.name||e&&n.__name}function Am(n){return Ze(n)&&"__vccOpts"in n}const mt=(n,e)=>gp(n,e,Dr);function Oa(n,e,t){try{Ia(-1);const i=arguments.length;return i===2?_t(e)&&!We(e)?Ua(e)?Pe(n,null,[e]):Pe(n,e):Pe(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Ua(t)&&(t=[t]),Pe(n,e,t))}finally{Ia(1)}}const wm="3.5.40";/**
* @vue/runtime-dom v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ll;const Kc=typeof window<"u"&&window.trustedTypes;if(Kc)try{ll=Kc.createPolicy("vue",{createHTML:n=>n})}catch{}const Nf=ll?n=>ll.createHTML(n):n=>n,Cm="http://www.w3.org/2000/svg",Rm="http://www.w3.org/1998/Math/MathML",oi=typeof document<"u"?document:null,Zc=oi&&oi.createElement("template"),Pm={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?oi.createElementNS(Cm,n):e==="mathml"?oi.createElementNS(Rm,n):t?oi.createElement(n,{is:t}):oi.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>oi.createTextNode(n),createComment:n=>oi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>oi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const a=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Zc.innerHTML=Nf(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=Zc.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},bi="transition",lr="animation",Lr=Symbol("_vtc"),Ff={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Dm=kt({},nf,Ff),Lm=n=>(n.displayName="Transition",n.props=Dm,n),dc=Lm((n,{slots:e})=>Oa(Rp,Im(n),e)),Wi=(n,e=[])=>{We(n)?n.forEach(t=>t(...e)):n&&n(...e)},Jc=n=>n?We(n)?n.some(e=>e.length>1):n.length>1:!1;function Im(n){const e={};for(const F in n)F in Ff||(e[F]=n[F]);if(n.css===!1)return e;const{name:t="v",type:i,duration:s,enterFromClass:r=`${t}-enter-from`,enterActiveClass:a=`${t}-enter-active`,enterToClass:o=`${t}-enter-to`,appearFromClass:l=r,appearActiveClass:c=a,appearToClass:u=o,leaveFromClass:d=`${t}-leave-from`,leaveActiveClass:h=`${t}-leave-active`,leaveToClass:p=`${t}-leave-to`}=n,v=Um(s),y=v&&v[0],g=v&&v[1],{onBeforeEnter:f,onEnter:C,onEnterCancelled:R,onLeave:b,onLeaveCancelled:I,onBeforeAppear:w=f,onAppear:A=C,onAppearCancelled:L=R}=e,S=(F,B,X,ne)=>{F._enterCancelled=ne,Xi(F,B?u:o),Xi(F,B?c:a),X&&X()},M=(F,B)=>{F._isLeaving=!1,Xi(F,d),Xi(F,p),Xi(F,h),B&&B()},U=F=>(B,X)=>{const ne=F?A:C,K=()=>S(B,F,X);Wi(ne,[B,K]),Qc(()=>{Xi(B,F?l:r),ei(B,F?u:o),Jc(ne)||eu(B,i,y,K)})};return kt(e,{onBeforeEnter(F){Wi(f,[F]),ei(F,r),ei(F,a)},onBeforeAppear(F){Wi(w,[F]),ei(F,l),ei(F,c)},onEnter:U(!1),onAppear:U(!0),onLeave(F,B){F._isLeaving=!0;const X=()=>M(F,B);ei(F,d),F._enterCancelled?(ei(F,h),iu(F)):(iu(F),ei(F,h)),Qc(()=>{F._isLeaving&&(Xi(F,d),ei(F,p),Jc(b)||eu(F,i,g,X))}),Wi(b,[F,X])},onEnterCancelled(F){S(F,!1,void 0,!0),Wi(R,[F])},onAppearCancelled(F){S(F,!0,void 0,!0),Wi(L,[F])},onLeaveCancelled(F){M(F),Wi(I,[F])}})}function Um(n){if(n==null)return null;if(_t(n))return[ho(n.enter),ho(n.leave)];{const e=ho(n);return[e,e]}}function ho(n){return Oh(n)}function ei(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[Lr]||(n[Lr]=new Set)).add(e)}function Xi(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[Lr];t&&(t.delete(e),t.size||(n[Lr]=void 0))}function Qc(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let Nm=0;function eu(n,e,t,i){const s=n._endId=++Nm,r=()=>{s===n._endId&&i()};if(t!=null)return setTimeout(r,t);const{type:a,timeout:o,propCount:l}=Fm(n,e);if(!a)return i();const c=a+"end";let u=0;const d=()=>{n.removeEventListener(c,h),r()},h=p=>{p.target===n&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},o+1),n.addEventListener(c,h)}function Fm(n,e){const t=window.getComputedStyle(n),i=v=>(t[v]||"").split(", "),s=i(`${bi}Delay`),r=i(`${bi}Duration`),a=tu(s,r),o=i(`${lr}Delay`),l=i(`${lr}Duration`),c=tu(o,l);let u=null,d=0,h=0;e===bi?a>0&&(u=bi,d=a,h=r.length):e===lr?c>0&&(u=lr,d=c,h=l.length):(d=Math.max(a,c),u=d>0?a>c?bi:lr:null,h=u?u===bi?r.length:l.length:0);const p=u===bi&&/\b(?:transform|all)(?:,|$)/.test(i(`${bi}Property`).toString());return{type:u,timeout:d,propCount:h,hasTransform:p}}function tu(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>nu(t)+nu(n[i])))}function nu(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function iu(n){return(n?n.ownerDocument:document).body.offsetHeight}function Om(n,e,t){const i=n[Lr];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const su=Symbol("_vod"),Bm=Symbol("_vsh"),km=Symbol(""),zm=/(?:^|;)\s*display\s*:/;function Hm(n,e,t){const i=n.style,s=At(t);let r=!1;if(t&&!s){if(e)if(At(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&_r(i,o,"")}else for(const a in e)t[a]==null&&_r(i,a,"");for(const a in t){a==="display"&&(r=!0);const o=t[a];o!=null?Gm(n,a,!At(e)&&e?e[a]:void 0,o)||_r(i,a,o):_r(i,a,"")}}else if(s){if(e!==t){const a=i[km];a&&(t+=";"+a),i.cssText=t,r=zm.test(t)}}else e&&n.removeAttribute("style");su in n&&(n[su]=r?i.display:"",n[Bm]&&(i.display="none"))}const ru=/\s*!important$/;function _r(n,e,t){if(We(t))t.forEach(i=>_r(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Vm(n,e);ru.test(t)?n.setProperty(ki(i),t.replace(ru,""),"important"):n[i]=t}}const au=["Webkit","Moz","ms"],po={};function Vm(n,e){const t=po[e];if(t)return t;let i=nn(e);if(i!=="filter"&&i in n)return po[e]=i;i=Wa(i);for(let s=0;s<au.length;s++){const r=au[s]+i;if(r in n)return po[e]=r}return e}function Gm(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&At(i)&&t===i}const ou="http://www.w3.org/1999/xlink";function lu(n,e,t,i,s,r=Gh(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(ou,e.slice(6,e.length)):n.setAttributeNS(ou,e,t):t==null||r&&!Pd(t)?n.removeAttribute(e):n.setAttribute(e,r?"":Zn(t)?String(t):t)}function cu(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Nf(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const o=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=Pd(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(s||e)}function Is(n,e,t,i){n.addEventListener(e,t,i)}function Wm(n,e,t,i){n.removeEventListener(e,t,i)}const uu=Symbol("_vei");function Xm(n,e,t,i,s=null){const r=n[uu]||(n[uu]={}),a=r[e];if(i&&a)a.value=i;else{const[o,l]=qm(e);if(i){const c=r[e]=Zm(i,s);Is(n,o,c,l)}else a&&(Wm(n,o,a,l),r[e]=void 0)}}const $m=/(Once|Passive|Capture)$/,jm=/^on:?(?:Once|Passive|Capture)$/;function qm(n){let e,t;for(;(t=n.match($m))&&!jm.test(n);)e||(e={}),n=n.slice(0,n.length-t[1].length),e[t[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):ki(n.slice(2)),e]}let mo=0;const Ym=Promise.resolve(),Km=()=>mo||(Ym.then(()=>mo=0),mo=Date.now());function Zm(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;const s=t.value;if(We(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const a=s.slice(),o=[i];for(let l=0;l<a.length&&!i._stopped;l++){const c=a[l];c&&wn(c,e,5,o)}}else wn(s,e,5,[i])};return t.value=n,t.attached=Km(),t}const du=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Jm=(n,e,t,i,s,r)=>{const a=s==="svg";e==="class"?Om(n,i,a):e==="style"?Hm(n,t,i):Ha(e)?Va(e)||Xm(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Qm(n,e,i,a))?(cu(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&lu(n,e,i,a,r,e!=="value")):n._isVueCE&&(eg(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!At(i)))?cu(n,nn(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),lu(n,e,i,a))};function Qm(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&du(e)&&Ze(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return du(e)&&At(t)?!1:e in n}function eg(n,e){const t=n._def.props;if(!t)return!1;const i=nn(e);return Array.isArray(t)?t.some(s=>nn(s)===i):Object.keys(t).some(s=>nn(s)===i)}const fu=n=>{const e=n.props["onUpdate:modelValue"]||!1;return We(e)?t=>ga(e,t):e};function tg(n){n.target.composing=!0}function hu(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const go=Symbol("_assign");function pu(n,e,t){return e&&(n=n.trim()),t&&(n=Ql(n)),n}const cl={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n[go]=fu(s);const r=i||s.props&&s.props.type==="number";Is(n,e?"change":"input",a=>{a.target.composing||n[go](pu(n.value,t,r))}),(t||r)&&Is(n,"change",()=>{n.value=pu(n.value,t,r)}),e||(Is(n,"compositionstart",tg),Is(n,"compositionend",hu),Is(n,"change",hu))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:s,number:r}},a){if(n[go]=fu(a),n.composing)return;const o=(r||n.type==="number")&&!/^0\d/.test(n.value)?Ql(n.value):n.value,l=e??"";if(o===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&e===t||s&&n.value.trim()===l)||(n.value=l)}},ng=["ctrl","shift","alt","meta"],ig={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>ng.some(t=>n[`${t}Key`]&&!e.includes(t))},Ln=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=((s,...r)=>{for(let a=0;a<e.length;a++){const o=ig[e[a]];if(o&&o(s,e))return}return n(s,...r)}))},sg={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Of=(n,e)=>{const t=n._withKeys||(n._withKeys={}),i=e.join(".");return t[i]||(t[i]=(s=>{if(!("key"in s))return;const r=ki(s.key);if(e.some(a=>a===r||sg[a]===r))return n(s)}))},rg=kt({patchProp:Jm},Pm);let mu;function ag(){return mu||(mu=cm(rg))}const og=((...n)=>{const e=ag().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=cg(i);if(!s)return;const r=e._component;!Ze(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=t(s,!1,lg(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e});function lg(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function cg(n){return At(n)?document.querySelector(n):n}const ug={class:"site-footer"},dg={__name:"SiteFooter",emits:["navigate"],setup(n){return(e,t)=>(re(),pe("footer",ug,[t[4]||(t[4]=m("div",null,[m("strong",null,"大临蓝印"),m("p",null,"一个关于大临村蓝印花布的数字展示平台，让非遗纹样被看见、被理解、被重新使用。")],-1)),m("div",null,[t[3]||(t[3]=m("span",null,"快速链接",-1)),m("button",{type:"button",onClick:t[0]||(t[0]=i=>e.$emit("navigate","/library"))},"蓝印纹库"),m("button",{type:"button",onClick:t[1]||(t[1]=i=>e.$emit("navigate","/heritage"))},"她与蓝"),m("button",{type:"button",onClick:t[2]||(t[2]=i=>e.$emit("navigate","/find-blue"))},"寻找你的蓝")]),t[5]||(t[5]=m("div",null,[m("span",null,"非遗信息"),m("p",null,"浙江嘉兴桐乡市大临村（石门镇） · 国家级非物质文化遗产"),m("small",null,"© 2026 大临村蓝印花布数字展示平台")],-1))]))}},fg="/assets/logo.jpg";/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var jr={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg=({size:n,strokeWidth:e=2,absoluteStrokeWidth:t,color:i,iconNode:s,name:r,class:a,...o},{slots:l})=>Oa("svg",{...jr,width:n||jr.width,height:n||jr.height,stroke:i||jr.stroke,"stroke-width":t?Number(e)*24/Number(n):e,class:["lucide",`lucide-${hg(r??"icon")}`],...o},[...s.map(c=>Oa(...c)),...l.default?[l.default()]:[]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dt=(n,e)=>(t,{slots:i})=>Oa(pg,{...t,iconNode:e,name:n},i);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cr=dt("ArrowDownIcon",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eo=dt("ArrowLeftIcon",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hs=dt("ArrowRightIcon",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bf=dt("BookOpenIcon",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gu=dt("BoxIcon",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=dt("CameraIcon",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _u=dt("CheckIcon",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=dt("CircleAlertIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g=dt("Clock3Icon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vu=dt("CloudUploadIcon",[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg=dt("CoffeeIcon",[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kf=dt("DownloadIcon",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg=dt("Gamepad2Icon",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg=dt("HandHeartIcon",[["path",{d:"M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16",key:"1ifwr1"}],["path",{d:"m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9",key:"17abbs"}],["path",{d:"m2 15 6 6",key:"10dquu"}],["path",{d:"M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z",key:"1h3036"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xu=dt("HeartIcon",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yu=dt("ImagePlusIcon",[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zf=dt("LayersIcon",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=dt("MapPinIcon",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg=dt("MenuIcon",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bu=dt("PackageIcon",[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7",key:"yx3hmr"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hf=dt("RotateCcwIcon",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg=dt("RouteIcon",[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fc=dt("SearchIcon",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=dt("ShirtIcon",[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",key:"1wgbhj"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=dt("SmartphoneIcon",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const di=dt("SparklesIcon",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag=dt("StarIcon",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=dt("TrophyIcon",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=dt("UsersRoundIcon",[["path",{d:"M18 21a8 8 0 0 0-16 0",key:"3ypg7q"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3",key:"10s06x"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ls=dt("XIcon",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg=dt("ZoomInIcon",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]),Pg=[{label:"首页",path:"/"},{label:"蓝印纹库",path:"/library"},{label:"她与蓝",path:"/heritage"},{label:"寻找你的蓝",path:"/find-blue"},{label:"纹脉工坊",path:"/patternx"}],Vf=[{key:"plant",name:"植物纹",title:"草木有灵",description:"缠枝莲、牡丹、梅兰竹菊，取法自然",patternClass:"pattern-floral",image:"/assets/categories/plant.jpg"},{key:"animal",name:"动物纹",title:"瑞兽祥禽",description:"龙凤呈祥、蝶恋花、鱼跃龙门",patternClass:"pattern-wing",image:"/assets/categories/animal.jpg"},{key:"auspicious",name:"吉祥纹",title:"福禄寿喜",description:"福字、寿字、八宝、暗八仙",patternClass:"pattern-coin",image:"/assets/categories/auspicious.jpg"},{key:"geometry",name:"几何纹",title:"方圆之道",description:"回纹、万字纹、方胜纹、盘长纹",patternClass:"pattern-grid",image:"/assets/categories/geometry.jpg"}],Gf=[{title:"刻版",short:"牛皮纸上刻出纹样",text:"将画稿覆在牛皮纸版上，用刻刀一点点镂刻出花纹轮廓。刀要稳，手要准，纹样的精神从这里开始。"},{title:"刮浆",short:"黄豆粉与石灰调成防染浆",text:"将黄豆粉、石灰调成防染浆，均匀刮在布面与花版之间。这层浆，是蓝与白之间最重要的界线。"},{title:"染色",short:"浸入靛蓝染缸，氧化显色",text:"布料浸入植物靛蓝染缸，出缸后与空气接触慢慢氧化，颜色由浅变深，靛蓝的生命从水中醒来。"},{title:"刮白",short:"刮去防染浆，露出白花",text:"待染色稳定后刮去防染浆，原本被保护的白色花纹显现出来，蓝白对比在这一刻最动人。"},{title:"清洗",short:"流水洗净浮色",text:"用清水洗去浮色和残浆，让纹样更清朗、布面更柔和。布料在水里舒展开来，像呼吸一样。"},{title:"晾晒",short:"阳光下晾干，靛蓝定格",text:"将布料悬挂晾晒，让风与阳光慢慢带走湿气，靛蓝与素白由此定格成日常生活里的美。"}],Mn=Gf.map(n=>n.short),_n=[{id:"chanzhi-lian",name:"缠枝莲纹",category:"plant",categoryName:"植物纹",patternClass:"pattern-floral",meaning:"生生不息，连绵不断",meaningDetail:"缠枝莲纹以莲花为主体，藤蔓缠绕连绵，寓意生生不息。在蓝印花布中，它寄托了江南人家对家族兴旺、绵延不绝的美好祈愿。",story:"相传大临村的缠枝莲纹源于宋元以来的民间布样。每逢婚嫁，母亲常以莲花与藤蔓入纹，祝愿女儿的新家清正和美、根脉相连。",era:"明清",usage:"被面、包袱布、帐檐",technique:Mn,modernUse:["丝巾图案","文创包装","展陈导视"],relatedIds:["mudan","shiliu","huiwen"],tags:["莲花","缠枝","植物","智慧","清雅"]},{id:"mudan",name:"牡丹团花纹",category:"plant",categoryName:"植物纹",patternClass:"pattern-rosette",meaning:"花开富贵，圆满安康",meaningDetail:"牡丹团花构图饱满，常用于节庆和婚嫁布品，表达富贵、圆满与热闹的生活愿望。",story:"大临村老布样中，牡丹常与蝴蝶、团寿、回纹组合，既有喜庆气，也有民间礼俗中的祝福秩序。",era:"明清",usage:"婚嫁被面、桌围、礼布",technique:Mn,modernUse:["伴手礼包装","抱枕面料","节庆海报"],relatedIds:["chanzhi-lian","shuangxi","hudie"],tags:["牡丹","富贵","团花","喜庆"]},{id:"shiliu",name:"石榴团圆纹",category:"plant",categoryName:"植物纹",patternClass:"pattern-seed",meaning:"多子多福，家族团圆",meaningDetail:"石榴籽粒繁多，寓意家族兴旺、团圆丰足，是礼俗布样中常见的祝福纹样。",story:"旧时嫁妆布中常见石榴与卷草相伴，既好看，也把长辈对新家庭的祝愿藏进一针一线。",era:"清代",usage:"嫁妆布、包袱布、礼盒布",technique:Mn,modernUse:["礼盒内衬","桌旗","节日贴纸"],relatedIds:["mudan","chanzhi-lian","shouzi"],tags:["石榴","团圆","多福","植物"]},{id:"hudie",name:"蝶恋花纹",category:"animal",categoryName:"动物纹",patternClass:"pattern-wing",meaning:"破茧成蝶，自由美好",meaningDetail:"蝴蝶轻盈灵动，常与花草相伴，寓意爱情、美好与生命转化。",story:"蝶恋花在民间布样中很受欢迎，轻巧的蝶形可以让沉静的靛蓝布面有一种活泼的呼吸感。",era:"清代",usage:"丝巾、发带、衣饰边纹",technique:Mn,modernUse:["服饰印花","手机壁纸","明信片"],relatedIds:["mudan","yu-lian","longfeng"],tags:["蝴蝶","自由","爱情","动物"]},{id:"yu-lian",name:"鱼跃莲纹",category:"animal",categoryName:"动物纹",patternClass:"pattern-wave",meaning:"年年有余，生机流动",meaningDetail:"鱼与莲组合，谐音连年有余，表达生活丰足与生命流动。",story:"江南水乡的鱼、莲、波纹常常同框出现，既来自眼前生活，也沉淀成民间祝福。",era:"明清",usage:"儿童布品、方巾、挂布",technique:Mn,modernUse:["儿童文创","帆布袋","互动纹样背景"],relatedIds:["chanzhi-lian","hudie","huiwen"],tags:["鱼","莲","有余","动物"]},{id:"longfeng",name:"龙凤呈祥纹",category:"animal",categoryName:"动物纹",patternClass:"pattern-cloud",meaning:"祥瑞圆满，喜庆成双",meaningDetail:"龙凤是礼俗纹样中的重要符号，常用于婚庆、祝福与大型陈设。",story:"龙凤纹在蓝印花布中会被简化成更适合刻版的线条，保留气势，也适合反复印染。",era:"清代",usage:"婚礼布置、门帘、挂幛",technique:Mn,modernUse:["展览主视觉","礼品包装","屏风纹样"],relatedIds:["shuangxi","mudan","shouzi"],tags:["龙凤","祥瑞","婚庆","动物"]},{id:"shouzi",name:"团寿字纹",category:"auspicious",categoryName:"吉祥纹",patternClass:"pattern-shou",meaning:"福寿双全，圆满长久",meaningDetail:"寿字经过团形化处理，构图稳定，寓意健康长寿与家宅圆满。",story:"祝寿布、厅堂陈设中常见团寿字，蓝底白字庄重清朗，很适合做中心纹。",era:"明清",usage:"祝寿布、被面、厅堂挂布",technique:Mn,modernUse:["茶礼包装","挂画","长辈礼品"],relatedIds:["huiwen","wufu","mudan"],tags:["寿","长寿","吉祥","团形"]},{id:"shuangxi",name:"双喜团花纹",category:"auspicious",categoryName:"吉祥纹",patternClass:"pattern-doublehappy",meaning:"喜事成双，良缘圆满",meaningDetail:"双喜纹是婚嫁礼俗中最直观的祝福符号，常与牡丹、莲花、蝴蝶搭配。",story:"在旧时婚嫁布置中，双喜纹既是装饰，也是仪式语言，让喜庆被看见、被记住。",era:"清代",usage:"婚嫁布、红包封、礼布",technique:Mn,modernUse:["婚礼伴手礼","红包封套","节庆海报"],relatedIds:["mudan","hudie","longfeng"],tags:["双喜","喜庆","婚嫁","吉祥"]},{id:"wufu",name:"五福蝠纹",category:"auspicious",categoryName:"吉祥纹",patternClass:"pattern-wing",meaning:"五福临门，福气绵延",meaningDetail:"蝙蝠取福的谐音，五蝠围合表达长寿、富贵、康宁、好德、善终的传统祝愿。",story:"民间图像常用谐音讲祝福，五福纹就是把语言、图案和愿望压进一块布里的例子。",era:"明清",usage:"门帘、礼品布、垫布",technique:Mn,modernUse:["家居软装","新年礼盒","导视图标"],relatedIds:["shouzi","huiwen","shuangxi"],tags:["五福","蝙蝠","平安","吉祥"]},{id:"huiwen",name:"回纹",category:"geometry",categoryName:"几何纹",patternClass:"pattern-grid",meaning:"回环不断，平安长久",meaningDetail:"回纹以连续折线构成循环结构，寓意周而复始、平安绵长。",story:"回纹常作为边饰出现，像给一块布加上秩序清晰的边界，也让主纹样更有仪式感。",era:"明清",usage:"边饰、帐檐、器物装饰",technique:Mn,modernUse:["网页边框","包装腰封","导视系统"],relatedIds:["shouzi","fangsheng","yu-lian"],tags:["回纹","平安","几何","边饰"]},{id:"fangsheng",name:"方胜纹",category:"geometry",categoryName:"几何纹",patternClass:"pattern-diamond",meaning:"同心相连，方正有序",meaningDetail:"方胜纹由菱形或方形连续组合，象征连接、守护与稳定。",story:"几何纹在蓝印花布中很适合大面积铺陈，蓝白节奏明确，也方便今天转译成数字图形。",era:"明清",usage:"包袱布、桌布、服饰底纹",technique:Mn,modernUse:["品牌辅助纹样","桌垫","网页背景"],relatedIds:["huiwen","pan-chang","chanzhi-lian"],tags:["方胜","几何","秩序","现代"]},{id:"pan-chang",name:"盘长纹",category:"geometry",categoryName:"几何纹",patternClass:"pattern-knot",meaning:"连绵不绝，福运长久",meaningDetail:"盘长纹线条回环不断，是传统吉祥符号中关于延续和连接的表达。",story:"盘长纹很像一条不断回到自身的路，适合表达家族、手艺和地方记忆的延续。",era:"明清",usage:"边框、礼布、门帘",technique:Mn,modernUse:["纪念票券","包装纹样","交互背景"],relatedIds:["huiwen","fangsheng","wufu"],tags:["盘长","几何","延续","福运"]}],Dg={class:"site-header"},Lg=["onClick"],Ig={class:"header-actions"},Ug={__name:"SiteHeader",props:{routeName:{type:String,required:!0},routePath:{type:String,required:!0}},emits:["navigate"],setup(n,{emit:e}){const t=e,i=Ye(!1);function s(r){i.value=!1,t("navigate",r)}return(r,a)=>(re(),pe("header",Dg,[m("button",{class:"brand",type:"button",onClick:a[0]||(a[0]=o=>s("/"))},[...a[3]||(a[3]=[m("img",{class:"brand-logo",src:fg,alt:"大临蓝印 logo"},null,-1),m("strong",null,"大临蓝印",-1)])]),m("nav",{class:xt({open:i.value})},[(re(!0),pe(et,null,gt(_e(Pg),o=>(re(),pe("button",{key:o.path,type:"button",class:xt({active:n.routePath===o.path||o.path==="/library"&&n.routeName==="pattern"||o.path==="/find-blue"&&n.routePath.startsWith("/find-blue")}),onClick:l=>s(o.path)},ue(o.label),11,Lg))),128))],2),m("div",Ig,[m("button",{class:"icon-button",type:"button","aria-label":"搜索",onClick:a[1]||(a[1]=o=>s("/library"))},[Pe(_e(fc),{size:19})]),m("button",{class:"icon-button menu-button",type:"button","aria-label":"菜单",onClick:a[2]||(a[2]=o=>i.value=!i.value)},[i.value?(re(),Ct(_e(ls),{key:1,size:20})):(re(),Ct(_e(Mg),{key:0,size:20}))])])]))}};function Ng(){const n=Ye(window.location.pathname),e=mt(()=>n.value==="/library"?"library":n.value.startsWith("/pattern/")?"pattern":n.value==="/heritage"?"heritage":n.value==="/find-blue"?"find-menu":n.value==="/find-blue/card"?"find-card":n.value==="/find-blue/game"?"find-game":n.value==="/patternx"?"patternx":"home");function t(s){n.value!==s&&(window.history.pushState({},"",s),n.value=window.location.pathname),window.scrollTo({top:0,behavior:"smooth"})}function i(){n.value=window.location.pathname}return tr(()=>{window.addEventListener("popstate",i)}),fs(()=>{window.removeEventListener("popstate",i)}),{routeName:e,routePath:n,navigate:t}}const kr=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},Fg={class:"blue-card-studio"},Og={key:0,class:"quiz-panel"},Bg={class:"quiz-progress"},kg={class:"quiz-question"},zg={class:"quiz-options"},Hg=["onClick"],Vg={key:1,class:"card-preview-panel"},Gg=["src","alt"],Wg={class:"personality-card-copy"},Xg={class:"selected-tags"},$g={class:"studio-actions result-actions"},jg={__name:"BlueCardStudio",setup(n){const e=Ye([]),t=Ye(""),i=[{title:"旅行到大临村，你最先被什么吸引？",options:[{text:"老街、河道和安静的生活气息",trait:"steady"},{text:"工坊里一双双正在制作的手",trait:"warm"},{text:"蓝白纹样里不断重复的秩序",trait:"wise"},{text:"可以亲手体验的新鲜感",trait:"free"}]},{title:"面对一件需要耐心完成的事，你通常会？",options:[{text:"按步骤慢慢推进",trait:"steady"},{text:"先理解它背后的意义",trait:"wise"},{text:"边做边找新的方法",trait:"free"},{text:"希望和身边人一起完成",trait:"warm"}]},{title:"你更喜欢哪一种蓝印花布寓意？",options:[{text:"平安长久",trait:"steady"},{text:"花开富贵",trait:"joyful"},{text:"生生不息",trait:"resilient"},{text:"自在生长",trait:"free"}]},{title:"朋友眼中的你更接近？",options:[{text:"可靠，能让人安心",trait:"steady"},{text:"热情，愿意照顾别人",trait:"warm"},{text:"清醒，善于观察判断",trait:"wise"},{text:"有趣，喜欢尝试变化",trait:"free"}]},{title:"如果把一天交给你安排，你会选择？",options:[{text:"走一条熟悉但舒服的路线",trait:"steady"},{text:"约上亲友一起吃饭聊天",trait:"warm"},{text:"看展、读资料、慢慢理解一件事",trait:"wise"},{text:"临时出发，遇见什么算什么",trait:"free"}]},{title:"你希望这张蓝印卡给你什么力量？",options:[{text:"稳稳向前",trait:"steady"},{text:"被爱与好运围绕",trait:"joyful"},{text:"在低谷里继续生长",trait:"resilient"},{text:"保持心里的清明",trait:"wise"}]},{title:"看到复杂纹样时，你会先注意到？",options:[{text:"边框和对称结构",trait:"steady"},{text:"花朵与枝蔓的生命感",trait:"resilient"},{text:"里面藏着的祝福符号",trait:"joyful"},{text:"它可以被重新设计的可能",trait:"free"}]},{title:"离开大临村时，你最想带走？",options:[{text:"一份安定的记忆",trait:"steady"},{text:"一份给家人的祝福",trait:"warm"},{text:"一份继续探索的灵感",trait:"free"},{text:"一份关于传统的理解",trait:"wise"}]}],s={steady:{title:"静水守心型",patternId:"huiwen",blessing:"愿你岁岁平安，步履从容，心中常有安定的蓝。",summary:"你重视秩序、稳定和长久的陪伴。适合你的蓝印纹样，像回纹一样周而复始，把平安与耐心织进日常。"},warm:{title:"暖枝相伴型",patternId:"shiliu",blessing:"愿你所到之处皆有温情，家人团圆，福气生长。",summary:"你很在意人与人之间的连接，也愿意把好运分享给身边的人。石榴团圆纹适合这种温暖、丰足的性格。"},wise:{title:"清蓝观照型",patternId:"chanzhi-lian",blessing:"愿你心有清明，见微知著，在纷繁里保持自己的判断。",summary:"你喜欢理解事物背后的脉络，安静却有力量。缠枝莲纹的连绵结构，像你对世界持续而细致的观察。"},free:{title:"风蝶自在型",patternId:"hudie",blessing:"愿你自由生长，所行皆有新意，所遇皆成风景。",summary:"你愿意尝试、变化，也愿意让生活保持弹性。蝶恋花纹轻盈灵动，适合你的自在与好奇。"},resilient:{title:"青藤生生型",patternId:"pan-chang",blessing:"愿你穿过风雨仍能生长，福运绵延，心力不断。",summary:"你有韧性，遇到困难也会慢慢找到出路。盘长纹回环不绝，正适合这种持续向前的生命力。"},joyful:{title:"喜花迎福型",patternId:"mudan",blessing:"愿你花开富贵，喜气常在，每一天都有热闹的好光景。",summary:"你容易被美好、庆祝和丰盛的气氛打动。牡丹团花纹饱满明亮，适合你的喜悦和好运感。"}},r=mt(()=>Math.min(e.value.length,i.length-1)),a=mt(()=>i[r.value]),o=mt(()=>e.value.length===i.length),l=mt(()=>Math.round(e.value.length/i.length*100)),c=mt(()=>{var I;const b=e.value.reduce((w,A)=>(w[A.trait]=(w[A.trait]||0)+1,w),{});return((I=Object.entries(b).sort((w,A)=>A[1]-w[1])[0])==null?void 0:I[0])||"steady"}),u=mt(()=>s[c.value]),d=mt(()=>_n.find(b=>b.id===u.value.patternId)||_n[0]),h=mt(()=>e.value.map(b=>b.text)),p=mt(()=>`/assets/personality-card/${u.value.patternId}.jpg`);function v(b){o.value||(e.value=[...e.value,b],e.value.length===i.length&&g())}function y(){e.value=[],t.value=""}function g(){t.value=new Intl.DateTimeFormat("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(new Date)}function f(b){return String(b).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;")}function C(b,I,w,A,L,S){const M=[];for(let U=0;U<b.length;U+=A)M.push(b.slice(U,U+A));return M.map((U,F)=>`<text x="${I}" y="${w+F*L}" ${S}>${f(U)}</text>`).join("")}function R(){if(!o.value)return;const b=d.value,I=u.value,A=`
    <svg xmlns="http://www.w3.org/2000/svg" width="960" height="1280" viewBox="0 0 960 1280">
      <rect width="960" height="1280" fill="#f7f5f0"/>
      <rect x="64" y="64" width="832" height="1152" rx="34" fill="#1a3a5c"/>
      <g fill="#f7f5f0" opacity=".88">${Array.from({length:9}).map((U,F)=>Array.from({length:6}).map((B,X)=>{const ne=150+X*132,K=150+F*78;return`<circle cx="${ne}" cy="${K}" r="14"/><circle cx="${ne+22}" cy="${K+22}" r="10"/><circle cx="${ne-22}" cy="${K+22}" r="10"/>`}).join("")).join("")}</g>
      <rect x="112" y="680" width="736" height="420" rx="26" fill="#f7f5f0" opacity=".96"/>
      <text x="152" y="750" fill="#4a7ba7" font-size="24" font-family="sans-serif" font-weight="700" letter-spacing="4">DALIN BLUE CALICO</text>
      <text x="152" y="830" fill="#0d1f33" font-size="58" font-family="serif" font-weight="700">${f(I.title)}</text>
      <text x="152" y="900" fill="#1a3a5c" font-size="38" font-family="serif" font-weight="700">${f(b.name)}</text>
      ${C(I.blessing,152,960,18,36,'fill="#2c2c2c" font-size="28" font-family="sans-serif"')}
      <text x="152" y="1112" fill="#8a8580" font-size="22" font-family="sans-serif">生成时间：${f(t.value)}</text>
    </svg>`,L=new Blob([A],{type:"image/svg+xml;charset=utf-8"}),S=URL.createObjectURL(L),M=document.createElement("a");M.href=S,M.download=`大临蓝印-${I.title}-${b.name}.svg`,M.click(),URL.revokeObjectURL(S)}return(b,I)=>(re(),pe("div",Fg,[m("div",{class:xt(["personality-layout",{complete:o.value}])},[o.value?vt("",!0):(re(),pe("section",Og,[m("div",Bg,[m("span",null,ue(e.value.length)+"/"+ue(i.length),1),m("div",null,[m("i",{style:en({width:`${l.value}%`})},null,4)])]),m("div",kg,[I[0]||(I[0]=m("p",{class:"eyebrow"},"Blue Personality Test",-1)),m("h3",null,ue(a.value.title),1),m("div",zg,[(re(!0),pe(et,null,gt(a.value.options,w=>(re(),pe("button",{key:w.text,type:"button",onClick:A=>v(w)},[st(ue(w.text)+" ",1),Pe(_e(Hs),{size:16})],8,Hg))),128))])])])),o.value?(re(),pe("section",Vg,[m("article",{class:xt(["blue-personality-card",{ready:o.value}])},[m("img",{class:"blue-card-pattern",src:p.value,alt:d.value.name},null,8,Gg),m("div",Wg,[I[1]||(I[1]=m("p",{class:"eyebrow"},"大临蓝印 · 性格纹样卡",-1)),m("h2",null,ue(u.value.title),1),m("h3",null,ue(d.value.name),1),m("p",null,ue(u.value.blessing),1),m("div",Xg,[(re(!0),pe(et,null,gt(h.value.slice(-3),w=>(re(),pe("span",{key:w},ue(w),1))),128))]),m("small",null,ue(t.value),1)])],2),m("div",$g,[m("button",{class:"primary-button",type:"button",onClick:R},[Pe(_e(kf),{size:18}),I[2]||(I[2]=st(" 下载保存卡片 ",-1))]),m("button",{class:"secondary-button",type:"button",onClick:y},[Pe(_e(Hf),{size:18}),I[3]||(I[3]=st(" 重新测试 ",-1))])])])):vt("",!0)],2)]))}},qg=kr(jg,[["__scopeId","data-v-d30f0583"]]),Yg={class:"section top-section find-blue-card-page"},Kg={__name:"FindBlueCardPage",emits:["navigate"],setup(n){return(e,t)=>(re(),pe("section",Yg,[m("button",{class:"text-link back-link",type:"button",onClick:t[0]||(t[0]=i=>e.$emit("navigate","/find-blue"))},[Pe(_e(eo),{size:17}),t[1]||(t[1]=st(" 返回体验菜单 ",-1))]),t[2]||(t[2]=m("div",{class:"page-heading"},[m("p",{class:"eyebrow"},"Blue Personality Test"),m("h1",null,"专属蓝印性格卡"),m("p",null,"回答 8 个问题，生成与你性格相合的蓝印花布纹样、祝福语和可下载纪念卡。")],-1)),Pe(qg)]))}},Zg="/assets/games/flip/card-back.jpg",Jg={class:"memory-game"},Qg={class:"game-sidebar"},e_={class:"game-stats"},t_={class:"game-layout"},n_={class:"board-shell"},i_=["onClick"],s_={class:"memory-card-inner"},r_={class:"memory-card-face memory-card-front"},a_=["src","alt"],o_={class:"knowledge-panel-card"},l_=["src","alt"],c_={class:"knowledge-panel-copy"},u_={key:0,class:"result-overlay"},d_={class:"result-card"},f_={class:"result-grid"},h_={__name:"PatternMemoryGame",setup(n){const e=[{id:"lion",name:"瑞狮纳福纹",category:"瑞兽纹",image:"/assets/games/flip/pattern-01.png",meaning:"镇宅纳福，吉庆安康",desc:"瑞狮纹常见于蓝印花布被面、门帘与嫁妆织物，借威严兽形寄托守护家宅、迎祥纳福的愿望。"},{id:"fish-lotus",name:"连年有余纹",category:"民俗纹样",image:"/assets/games/flip/pattern-02.jpg",meaning:"年年富足，阖家圆满",desc:"鱼与莲花谐音成意，是大临村传统被面经典纹样，适合表达丰收、团圆与绵延不断的生活祝福。"},{id:"peony",name:"牡丹富贵纹",category:"花草纹",image:"/assets/games/flip/pattern-03.jpg",meaning:"花开富贵，生活兴旺",desc:"牡丹纹以饱满花形表现富贵气象，蓝白留白之间呈现朴素而隆重的民间审美。"},{id:"pomegranate",name:"石榴多子纹",category:"花草纹",image:"/assets/games/flip/pattern-04.jpg",meaning:"多子多福，家族兴旺",desc:"石榴籽粒繁密，常被用于婚嫁和家用布饰，寓意人丁兴旺与福气延续。"},{id:"shou",name:"团寿吉祥纹",category:"福寿纹",image:"/assets/games/flip/pattern-05.jpg",meaning:"福寿绵长，平安顺遂",desc:"寿字与团形结构结合，讲究对称与秩序，是蓝印花布中辨识度很高的祝寿类纹样。"},{id:"butterfly",name:"蝶恋花纹",category:"花草纹",image:"/assets/games/flip/pattern-06.jpg",meaning:"美满相伴，春意常在",desc:"蝴蝶与花卉组合轻盈灵动，常用于表现生活中的喜悦、爱意与自然生机。"},{id:"crane",name:"仙鹤延年纹",category:"瑞兽纹",image:"/assets/games/flip/pattern-07.png",meaning:"延年益寿，清雅高洁",desc:"仙鹤在传统图像中象征长寿与高洁，蓝印花布用简练的蓝白块面保留其舒展姿态。"},{id:"gourd",name:"葫芦福禄纹",category:"民俗纹样",image:"/assets/games/flip/pattern-08.jpg",meaning:"福禄双全，辟邪纳祥",desc:"葫芦与福禄谐音，形体饱满，常被民间用来表达护佑、丰足与平安。"},{id:"plum",name:"梅开五福纹",category:"花草纹",image:"/assets/games/flip/pattern-09.jpg",meaning:"坚韧清雅，五福临门",desc:"梅花不畏寒霜，蓝印花布中的梅花纹通过枝蔓与花点变化表现坚韧品格。"},{id:"phoenix",name:"凤穿牡丹纹",category:"瑞兽纹",image:"/assets/games/flip/pattern-10.png",meaning:"吉祥华美，富贵和合",desc:"凤鸟与牡丹组合常见于喜庆织物，体现民间对婚姻美满与家业兴盛的祝愿。"},{id:"coin",name:"方胜盘长纹",category:"几何纹",image:"/assets/games/flip/pattern-11.jpg",meaning:"连续不断，事事如意",desc:"几何纹样重视连续构成，方胜与盘长结构适合作为边饰或满地纹，象征福泽不断。"},{id:"lotus",name:"莲花清廉纹",category:"花草纹",image:"/assets/games/flip/pattern-12.jpg",meaning:"清正雅洁，和美安宁",desc:"莲花纹以舒展花瓣和叶形构成画面中心，在蓝印工艺中呈现清爽、端正的视觉气质。"}],t={standard:{label:"进阶 12 张",pairs:6,cols:4}},i=Ye("standard"),s=Ye([]),r=Ye([]),a=Ye(0),o=Ye(0),l=Ye(0),c=Ye(!1),u=Ye(!1),d=Ye(null),h=Ye(!1);let p=null,v=null;const y=mt(()=>t[i.value].pairs),g=mt(()=>Math.ceil(s.value.length/t[i.value].cols)),f=mt(()=>({"--board-cols":String(t[i.value].cols),"--board-rows":String(g.value),gridTemplateColumns:`repeat(${t[i.value].cols}, minmax(0, 1fr))`,gridTemplateRows:`repeat(${g.value}, minmax(0, 1fr))`})),C=mt(()=>i.value==="standard"&&l.value<=55&&o.value<=10?"蓝印识纹达人":o.value<=16?"非遗纹样初学者":"初识大临蓝印");function R(F){const B=[...F];for(let X=B.length-1;X>0;X-=1){const ne=Math.floor(Math.random()*(X+1));[B[X],B[ne]]=[B[ne],B[X]]}return B}function b(F){const B=String(Math.floor(F/60)).padStart(2,"0"),X=String(F%60).padStart(2,"0");return`${B}:${X}`}function I(){c.value||(c.value=!0,p=window.setInterval(()=>{l.value+=1},1e3))}function w(){window.clearInterval(p),p=null}function A(){const F=R(e).slice(0,t[i.value].pairs);return R(F.flatMap(B=>[{...B,cardId:`${B.id}-a`,state:"hidden"},{...B,cardId:`${B.id}-b`,state:"hidden"}]))}function L(F=i.value){w(),window.clearTimeout(v),i.value=F,s.value=A(),r.value=[],a.value=0,o.value=0,l.value=0,c.value=!1,u.value=!1,d.value=null,h.value=!1}function S(){window.clearTimeout(v),d.value=null}function M(F){if(u.value)return;const B=s.value.find(X=>X.cardId===F);!B||B.state!=="hidden"||(I(),B.state="open",r.value=[...r.value,B],r.value.length===2&&(o.value+=1,U()))}function U(){const[F,B]=r.value;if(u.value=!0,F.id===B.id){window.setTimeout(()=>{s.value.forEach(X=>{(X.cardId===F.cardId||X.cardId===B.cardId)&&(X.state="matched")}),a.value+=1,d.value=F,window.clearTimeout(v),v=window.setTimeout(()=>{d.value=null},3e3),r.value=[],u.value=!1,a.value===y.value&&(w(),h.value=!0)},320);return}window.setTimeout(()=>{s.value.forEach(X=>{(X.cardId===F.cardId||X.cardId===B.cardId)&&(X.state="hidden")}),r.value=[],u.value=!1},760)}return fs(()=>{w(),window.clearTimeout(v)}),L(),(F,B)=>(re(),pe("div",Jg,[m("aside",Qg,[B[6]||(B[6]=m("div",{class:"game-title"},[m("p",{class:"eyebrow"},"Blue Calico Match"),m("h3",null,"蓝印纹样翻翻乐")],-1)),m("div",e_,[m("article",null,[Pe(_e(_g),{size:18}),B[2]||(B[2]=m("span",null,"用时",-1)),m("strong",null,ue(b(l.value)),1)]),m("article",null,[B[3]||(B[3]=m("span",null,"步数",-1)),m("strong",null,ue(o.value),1)]),m("article",null,[Pe(_e(wg),{size:18}),B[4]||(B[4]=m("span",null,"配对",-1)),m("strong",null,ue(a.value)+"/"+ue(y.value),1)])]),m("button",{class:"secondary-button",type:"button",onClick:B[0]||(B[0]=X=>L())},[Pe(_e(Hf),{size:16}),B[5]||(B[5]=st(" 重新开始 ",-1))])]),m("section",t_,[m("div",n_,[m("div",{class:"board",style:en(f.value)},[(re(!0),pe(et,null,gt(s.value,X=>(re(),pe("button",{key:X.cardId,type:"button",class:xt(["memory-card",[`state-${X.state}`]]),onClick:ne=>M(X.cardId)},[m("span",s_,[B[7]||(B[7]=m("span",{class:"memory-card-face memory-card-back"},[m("img",{class:"memory-card-back-image",src:Zg,alt:""})],-1)),m("span",r_,[m("img",{src:X.image,alt:X.name},null,8,a_)])])],10,i_))),128))],4)]),Pe(dc,{name:"knowledge-panel"},{default:qa(()=>[d.value?(re(),pe("aside",{key:0,class:"knowledge-panel-overlay",onClick:S},[m("div",o_,[m("img",{src:d.value.image,alt:d.value.name},null,8,l_),m("div",c_,[B[8]||(B[8]=m("p",{class:"eyebrow"},"配对成功",-1)),m("h4",null,ue(d.value.name),1),m("strong",null,ue(d.value.meaning),1),m("p",null,ue(d.value.desc),1),m("span",null,ue(d.value.category),1)]),m("button",{type:"button",class:"knowledge-close","aria-label":"关闭纹样介绍",onClick:S},[Pe(_e(ls),{size:18})])])])):vt("",!0)]),_:1})]),h.value?(re(),pe("div",u_,[m("div",d_,[B[11]||(B[11]=m("p",{class:"eyebrow"},"全部配对完成",-1)),m("h4",null,ue(C.value),1),m("div",f_,[m("article",null,[B[9]||(B[9]=m("span",null,"本局用时",-1)),m("strong",null,ue(b(l.value)),1)]),m("article",null,[B[10]||(B[10]=m("span",null,"总步数",-1)),m("strong",null,ue(o.value),1)])]),m("p",null,"你完成了 "+ue(y.value)+" 组蓝印花布纹样配对，在翻牌中记住了纹样名称、寓意和文化背景。",1),m("button",{class:"primary-button",type:"button",onClick:B[1]||(B[1]=X=>L())},"再来一局")])])):vt("",!0)]))}},p_=kr(h_,[["__scopeId","data-v-56c02213"]]),m_={class:"find-game-header"},g_={__name:"FindBlueGamePage",emits:["navigate"],setup(n){return tr(()=>{document.documentElement.classList.add("game-lock-scroll")}),fs(()=>{document.documentElement.classList.remove("game-lock-scroll")}),(e,t)=>(re(),pe("section",{class:"section top-section find-game-page",onWheel:t[1]||(t[1]=Ln(()=>{},["prevent"]))},[m("div",m_,[m("button",{class:"text-link back-link",type:"button",onClick:t[0]||(t[0]=i=>e.$emit("navigate","/find-blue"))},[Pe(_e(eo),{size:17}),t[2]||(t[2]=st(" 返回体验菜单 ",-1))]),t[3]||(t[3]=m("div",{class:"page-heading"},[m("p",{class:"eyebrow"},"Pattern Memory Game"),m("h1",null,"蓝印纹样翻翻乐")],-1))]),Pe(p_)],32))}},__={class:"find-menu-page"},v_={class:"find-menu-stage"},x_={class:"find-carousel","aria-label":"互动体验轮播菜单"},y_=["onClick"],b_=["src","alt"],M_={key:1,class:"card-cover-intro"},S_={key:2,class:"card-copy"},E_={key:3,class:"card-action"},T_={class:"find-menu-footer"},A_={class:"find-menu-actions"},w_={class:"find-menu-dots"},C_=["aria-label","onClick"],R_={__name:"FindBluePage",emits:["navigate"],setup(n,{emit:e}){const t=e,i=[{key:"card",title:"专属蓝印卡",subtitle:"选择你的寓意",description:"从平安、富贵、长寿、团圆中选取心意，生成属于你的蓝印纹样卡。",path:"/find-blue/card",cover:"/assets/find-blue/card-cover.png",accent:"柔和生成",status:"available"},{key:"game",title:"纹样翻翻乐",subtitle:"翻牌识纹样",description:"在配对互动里认识大临村蓝印花布的经典图案，边玩边记住它们的寓意。",path:"/find-blue/game",cover:"/assets/find-blue/memory-cover.png",accent:"互动挑战",status:"available"},{key:"coming-soon",title:"更多体验",subtitle:"持续更新中",description:"后续将加入更多与蓝印花布相关的互动体验，形成完整的数字游览路径。",path:"",cover:"",accent:"敬请期待",status:"coming"}],s=Ye(1);function r(){s.value=(s.value-1+i.length)%i.length}function a(){s.value=(s.value+1)%i.length}function o(c){const u=(c-s.value+i.length)%i.length;return u===0?"is-center":u===1?"is-right":"is-left"}function l(c){if(c!==s.value){s.value=c;return}i[c].status==="available"&&t("navigate",i[c].path)}return(c,u)=>(re(),pe("section",__,[u[2]||(u[2]=m("div",{class:"find-menu-hero"},[m("p",{class:"find-menu-kicker"},"SELECT YOUR BLUE EXPERIENCE"),m("h1",null,"寻找你的蓝")],-1)),m("div",v_,[m("button",{class:"carousel-arrow left",type:"button","aria-label":"上一个体验",onClick:r},[Pe(_e(eo),{size:24})]),m("div",x_,[(re(),pe(et,null,gt(i,(d,h)=>m("button",{key:d.key,type:"button",class:xt(["find-carousel-card",[o(h),{disabled:d.status!=="available","has-cover":!!d.cover}]]),onClick:p=>l(h)},[d.cover?(re(),pe("img",{key:0,class:"card-cover-image",src:d.cover,alt:d.title},null,8,b_)):vt("",!0),u[0]||(u[0]=m("span",{class:"card-overlay"},null,-1)),u[1]||(u[1]=m("span",{class:"card-noise"},null,-1)),d.cover?(re(),pe("span",M_,[m("b",null,ue(d.subtitle),1),m("small",null,ue(d.description),1)])):vt("",!0),d.cover?vt("",!0):(re(),pe("span",S_,[m("i",null,ue(d.accent),1),m("strong",null,ue(d.title),1),m("em",null,ue(d.subtitle),1),m("small",null,ue(d.description),1)])),d.cover?vt("",!0):(re(),pe("span",E_,[(re(),Ct(Da(d.key==="card"?_e(di):d.key==="game"?_e(xg):_e(di)),{size:18})),st(" "+ue(d.status==="available"?"点击进入":"即将开放"),1)]))],10,y_)),64))]),m("button",{class:"carousel-arrow right",type:"button","aria-label":"下一个体验",onClick:a},[Pe(_e(Hs),{size:24})])]),m("div",T_,[m("div",A_,[m("div",w_,[(re(),pe(et,null,gt(i,(d,h)=>m("button",{key:d.key,type:"button",class:xt({active:s.value===h}),"aria-label":`切换到${d.title}`,onClick:p=>s.value=h},null,10,C_)),64))])])])]))}},P_=kr(R_,[["__scopeId","data-v-c506155d"]]),D_={class:"heritage-page section top-section"},L_={class:"heritage-hero heritage-visitor-hero"},I_={class:"page-heading heritage-visitor-copy"},U_={class:"heritage-hero-actions"},N_={class:"heritage-visitor-focus"},F_={class:"heritage-section"},O_={class:"heritage-story-grid"},B_={class:"heritage-section heritage-visit-section"},k_={class:"heritage-visit-path"},z_={class:"heritage-section"},H_={class:"heritage-process"},V_={class:"heritage-section"},G_={class:"heritage-gallery"},W_=["src","alt"],X_="/assets/heritage/dalin-workshop.png",$_={__name:"HeritagePage",emits:["navigate"],setup(n,{emit:e}){const t=e,i=[{src:"/assets/heritage/artisan-at-work.jpeg",alt:"传承人在花版上进行刮浆工序",caption:"手上的工艺：刮浆与花版"},{src:"/assets/heritage/artisan-portrait.png",alt:"蓝印花布传承人与工坊布样",caption:"工坊里的传承人和布样"},{src:"/assets/heritage/dalin-workshop.png",alt:"大临村蓝印花布工坊外景",caption:"大临村工坊与晾晒布样"},{src:"/assets/heritage/archive-pattern-table.png",alt:"桌面上的蓝印花布样品",caption:"一桌蓝白：纹样与日用布品"},{src:"/assets/heritage/archive-table-runner.png",alt:"蓝印花布桌旗",caption:"传统纹样进入当代日用"},{src:"/assets/heritage/archive-craft-store.png",alt:"游客挑选蓝印花布文创",caption:"在工坊挑选一片属于自己的蓝"},{src:"/assets/heritage/archive-visitor-demo.png",alt:"游客观看蓝印花布体验演示",caption:"围在工作台前看见手艺"},{src:"/assets/heritage/archive-cultural-products.png",alt:"蓝印花布文创产品与花版",caption:"从花版到可带走的日常物件"},{src:"/assets/heritage/archive-tote-bag.png",alt:"蓝印花布帆布袋",caption:"把蓝白纹样带进生活"},{src:"/assets/heritage/archive-apparel.png",alt:"蓝印花布服装与围裙",caption:"蓝印花布的新衣与新用法"},{src:"/assets/heritage/archive-drying.png",alt:"晾晒中的蓝印花布",caption:"阳光下定格的靛蓝与素白"},{src:"/assets/heritage/archive-family-workshop.png",alt:"儿童参与蓝印花布体验",caption:"亲子体验：让手艺被下一代看见"},{src:"/assets/heritage/archive-drying-tour.png",alt:"游客参观蓝印花布晾晒场景",caption:"走进布样之间，听见村庄的故事"}],s=[{value:"01",label:"先看人",text:"从传承人的手、工具和故事进入蓝印花布。"},{value:"02",label:"再看工艺",text:"理解刻版、防染、入靛、刮白这些关键步骤。"},{value:"03",label:"最后看纹样",text:"把花草、瑞兽、吉祥符号和江南生活联系起来。"}],r=[{icon:yg,title:"匠人 / 传承故事",text:"大临村的蓝印花布先存在于人的手上。老一辈把纹样、浆料比例、入靛火候和晾晒经验留在日复一日的制作里，年轻人则用展览、文创和数字方式让它继续被看见。"},{icon:zf,title:"制作过程",text:"一块布从画稿到成品，需要经过刻版、刮浆、染色、刮白、清洗、晾晒。每一步都不只是技术，也是一种和时间相处的方式。"},{icon:mg,title:"相关图片资料",text:"图片资料记录布样、工具、纹样细节和村落现场。游客可以通过这些图像，把展柜里的蓝白纹样重新放回真实生活。"},{icon:Bf,title:"文化价值",text:"蓝印花布连接江南日用审美、礼俗祝福、女性手工经验和地方记忆。它既是一匹布，也是一座村庄可以向外讲述的文化名片。"}],a=[{icon:bg,title:"来到大临村",text:"先认识蓝印花布与村落之间的关系，知道这门手艺为什么在这里生长。"},{icon:Cg,title:"听见传承人",text:"从口述故事里理解手艺人的坚持、家庭记忆和代际传承。"},{icon:Sg,title:"走完工艺线",text:"按制作顺序观看工序，把“蓝”和“白”如何出现看明白。"},{icon:di,title:"带走一片蓝",text:"在纹样库、互动卡片或文创体验中，选择一个属于自己的蓝印记忆。"}];return(o,l)=>(re(),pe("section",D_,[m("div",L_,[m("div",I_,[l[3]||(l[3]=m("p",{class:"eyebrow"},"People Story Of Dalin Blue Calico",-1)),l[4]||(l[4]=m("h1",null,"她与蓝",-1)),l[5]||(l[5]=m("p",null,"给来到大临村的游客看的传承故事：看见做布的人，理解靛蓝的工艺，也把一段江南记忆带回去。",-1)),m("div",U_,[m("button",{class:"primary-button",type:"button",onClick:l[0]||(l[0]=c=>t("navigate","/library"))},[l[2]||(l[2]=st(" 去看纹样 ",-1)),Pe(_e(Hs),{size:18})]),m("button",{class:"secondary-button",type:"button",onClick:l[1]||(l[1]=c=>t("navigate","/find-blue"))}," 寻找你的蓝 ")])]),m("div",{class:"heritage-hero-image heritage-visitor-image"},[m("img",{src:X_,alt:"大临村蓝印花布现场资料"}),l[6]||(l[6]=m("span",null,"大临村蓝印花布 · 人物与工艺故事",-1))])]),m("div",N_,[(re(),pe(et,null,gt(s,c=>m("article",{key:c.value},[m("strong",null,ue(c.value),1),m("span",null,ue(c.label),1),m("p",null,ue(c.text),1)])),64))]),m("section",F_,[l[7]||(l[7]=m("div",{class:"section-title-row"},[m("div",null,[m("p",{class:"eyebrow"},"For Visitors"),m("h2",null,"这页想带游客看什么")])],-1)),m("div",O_,[(re(),pe(et,null,gt(r,c=>m("article",{key:c.title},[(re(),Ct(Da(c.icon),{size:24})),m("h2",null,ue(c.title),1),m("p",null,ue(c.text),1)])),64))])]),m("section",B_,[l[8]||(l[8]=m("div",{class:"section-title-row"},[m("div",null,[m("p",{class:"eyebrow"},"Village Visit Path"),m("h2",null,"游客在村里的一条观看路径")])],-1)),m("div",k_,[(re(),pe(et,null,gt(a,(c,u)=>m("article",{key:c.title},[m("span",null,ue(String(u+1).padStart(2,"0")),1),(re(),Ct(Da(c.icon),{size:24})),m("strong",null,ue(c.title),1),m("p",null,ue(c.text),1)])),64))])]),m("section",z_,[l[9]||(l[9]=m("div",{class:"section-title-row"},[m("div",null,[m("p",{class:"eyebrow"},"Craft Process"),m("h2",null,"一块布经过的路")])],-1)),m("div",H_,[(re(!0),pe(et,null,gt(_e(Gf),(c,u)=>(re(),pe("article",{key:c.title},[m("span",null,ue(String(u+1).padStart(2,"0")),1),m("strong",null,ue(c.title),1),m("p",null,ue(c.text),1)]))),128))])]),m("section",V_,[l[10]||(l[10]=m("div",{class:"section-title-row"},[m("div",null,[m("p",{class:"eyebrow"},"Image Archive"),m("h2",null,"相关图片资料")])],-1)),m("div",G_,[(re(),pe(et,null,gt(i,c=>m("figure",{key:c.src},[m("img",{src:c.src,alt:c.alt,loading:"lazy",decoding:"async"},null,8,W_),m("figcaption",null,ue(c.caption),1)])),64))])]),l[11]||(l[11]=m("section",{class:"heritage-value"},[m("p",{class:"eyebrow"},"Cultural Value"),m("h2",null,"让游客带走的不只是照片"),m("p",null,"大临村蓝印花布的价值，不只在“好看”，也在它把地方、家庭、祝福和手艺连接起来。游客看完这一页，应该能记住：蓝印花布是一种生活里的美，也是一代代人共同守住的村庄记忆。")],-1))]))}},j_="/assets/heritage/dalin-workshop.png",q_="/assets/home/dalin-workshop-ambience.mp4",Y_="/assets/home-craft-gray.png",K_="/assets/home-craft-color.png",Z_={class:"section-dot-nav","aria-label":"首页模块导航"},J_=["onClick"],Q_={__name:"HomeSectionNav",props:{sections:{type:Array,required:!0},activeIndex:{type:Number,required:!0}},emits:["select"],setup(n){return(e,t)=>(re(),pe("nav",Z_,[(re(!0),pe(et,null,gt(n.sections,(i,s)=>(re(),pe("button",{key:i.id,type:"button",class:xt({active:n.activeIndex===s}),onClick:r=>e.$emit("select",s)},[t[0]||(t[0]=m("span",null,null,-1)),m("em",null,ue(i.label),1)],10,J_))),128))]))}},e0={class:"tag"},hc={__name:"PatternCard",props:{pattern:{type:Object,required:!0}},emits:["open"],setup(n){return(e,t)=>(re(),pe("button",{class:"pattern-card",type:"button",onClick:t[0]||(t[0]=i=>e.$emit("open",n.pattern))},[m("span",{class:xt(["pattern-thumb",n.pattern.previewImage?"pattern-thumb-real":n.pattern.patternClass]),style:en(n.pattern.previewImage?{backgroundImage:`url(${n.pattern.previewImage})`}:void 0)},null,6),m("span",e0,ue(n.pattern.categoryName),1),m("strong",null,ue(n.pattern.name),1),m("em",null,ue(n.pattern.meaning),1)]))}},Li=[{id:"0182ff04858b98ea9248cd301d0a278b",src:"/assets/collected/0182ff04858b98ea9248cd301d0a278b.png",type:"png",label:"本地采集素材"},{id:"01d3fbd3b8f8eaa31ab01d39e47b749b",src:"/assets/collected/01d3fbd3b8f8eaa31ab01d39e47b749b.jpg",type:"jpg",label:"本地采集素材"},{id:"028c51947c5f7d191432534f8c8c406f",src:"/assets/collected/028c51947c5f7d191432534f8c8c406f.jpg",type:"jpg",label:"本地采集素材"},{id:"0510ada6fecb96ca4478872090ce1809",src:"/assets/collected/0510ada6fecb96ca4478872090ce1809.png",type:"png",label:"本地采集素材"},{id:"063fc35152b12d6a935623315a207fba",src:"/assets/collected/063fc35152b12d6a935623315a207fba.png",type:"png",label:"本地采集素材"},{id:"0b36d07490865ddd888e047c84f87060",src:"/assets/collected/0b36d07490865ddd888e047c84f87060.jpg",type:"jpg",label:"本地采集素材"},{id:"0ca7611e8ef81537becc001309dd50ff",src:"/assets/collected/0ca7611e8ef81537becc001309dd50ff.jpg",type:"jpg",label:"本地采集素材"},{id:"17c2bbe479aaa0a10a14425a3f40c241",src:"/assets/collected/17c2bbe479aaa0a10a14425a3f40c241.png",type:"png",label:"本地采集素材"},{id:"1c18f8641254020b0d9104c027e34da0",src:"/assets/collected/1c18f8641254020b0d9104c027e34da0.jpg",type:"jpg",label:"本地采集素材"},{id:"1dec0874756fc99aecc3dde98dd0b138",src:"/assets/collected/1dec0874756fc99aecc3dde98dd0b138.jpg",type:"jpg",label:"本地采集素材"},{id:"2246f57e0873288260af7f41c41a6976",src:"/assets/collected/2246f57e0873288260af7f41c41a6976.png",type:"png",label:"本地采集素材"},{id:"230ca8c118f0d457075e9a880cb11ce2",src:"/assets/collected/230ca8c118f0d457075e9a880cb11ce2.png",type:"png",label:"本地采集素材"},{id:"2691bc01b70c4aea6e8e2706ee7d6cf9",src:"/assets/collected/2691bc01b70c4aea6e8e2706ee7d6cf9.jpg",type:"jpg",label:"本地采集素材"},{id:"275171d7ac3f67dba86dea6d213e75a1",src:"/assets/collected/275171d7ac3f67dba86dea6d213e75a1.png",type:"png",label:"本地采集素材"},{id:"2bf7d9e1e70726a91f0ba439e36990a2",src:"/assets/collected/2bf7d9e1e70726a91f0ba439e36990a2.jpg",type:"jpg",label:"本地采集素材"},{id:"2c6c79079ef39f3b22350f904442715c",src:"/assets/collected/2c6c79079ef39f3b22350f904442715c.jpg",type:"jpg",label:"本地采集素材"},{id:"2e893155afc5490962042b940759d35c",src:"/assets/collected/2e893155afc5490962042b940759d35c.png",type:"png",label:"本地采集素材"},{id:"2fdbc0300df013de14debb9db68d64d7",src:"/assets/collected/2fdbc0300df013de14debb9db68d64d7.jpg",type:"jpg",label:"本地采集素材"},{id:"324910dabd935b3b9fc53691ac2c649b",src:"/assets/collected/324910dabd935b3b9fc53691ac2c649b.png",type:"png",label:"本地采集素材"},{id:"34c98322b14ccc7f47c9ab92a6df184a",src:"/assets/collected/34c98322b14ccc7f47c9ab92a6df184a.jpg",type:"jpg",label:"本地采集素材"},{id:"35dc1a9b5612b397206e2ebf84d07780",src:"/assets/collected/35dc1a9b5612b397206e2ebf84d07780.jpg",type:"jpg",label:"本地采集素材"},{id:"3708619f6bed006638e9fbc7ea411e04",src:"/assets/collected/3708619f6bed006638e9fbc7ea411e04.jpg",type:"jpg",label:"本地采集素材"},{id:"3ac372d48709177036177764830b849e",src:"/assets/collected/3ac372d48709177036177764830b849e.jpg",type:"jpg",label:"本地采集素材"},{id:"3d0469c6ff646794023faf609e637939",src:"/assets/collected/3d0469c6ff646794023faf609e637939.png",type:"png",label:"本地采集素材"},{id:"3f17a3f7b548c8c32c7492cac0fa86eb",src:"/assets/collected/3f17a3f7b548c8c32c7492cac0fa86eb.png",type:"png",label:"本地采集素材"},{id:"4b8c9b2cbba29e814bb7ce2fe0953107",src:"/assets/collected/4b8c9b2cbba29e814bb7ce2fe0953107.png",type:"png",label:"本地采集素材"},{id:"4d0cb2417a23d896335cddf73f442da1",src:"/assets/collected/4d0cb2417a23d896335cddf73f442da1.png",type:"png",label:"本地采集素材"},{id:"4da996bff8295857987fc7f9f56b91b0",src:"/assets/collected/4da996bff8295857987fc7f9f56b91b0.png",type:"png",label:"本地采集素材"},{id:"530f782160a39b53cf8951ebc95aa7b7",src:"/assets/collected/530f782160a39b53cf8951ebc95aa7b7.jpg",type:"jpg",label:"本地采集素材"},{id:"54b24ed6b6f0b22af05359bf14f2dbc3",src:"/assets/collected/54b24ed6b6f0b22af05359bf14f2dbc3.png",type:"png",label:"本地采集素材"},{id:"58bd49b0928148989e0b4f815b8d279a",src:"/assets/collected/58bd49b0928148989e0b4f815b8d279a.png",type:"png",label:"本地采集素材"},{id:"594e82c876b9f35dc0be26dae405386d",src:"/assets/collected/594e82c876b9f35dc0be26dae405386d.jpg",type:"jpg",label:"本地采集素材"},{id:"5bdeac4d4e4ec6612b382cbfaa270ee7",src:"/assets/collected/5bdeac4d4e4ec6612b382cbfaa270ee7.jpg",type:"jpg",label:"本地采集素材"},{id:"659ed3552cdfd5b0659f4dba2e49f8d8",src:"/assets/collected/659ed3552cdfd5b0659f4dba2e49f8d8.png",type:"png",label:"本地采集素材"},{id:"66b0da1261a8c1401fde337052745c02",src:"/assets/collected/66b0da1261a8c1401fde337052745c02.jpg",type:"jpg",label:"本地采集素材"},{id:"673982225804e7019209df35840bbf03",src:"/assets/collected/673982225804e7019209df35840bbf03.png",type:"png",label:"本地采集素材"},{id:"6b6fb65a39529d6efb573a4c990e4682",src:"/assets/collected/6b6fb65a39529d6efb573a4c990e4682.png",type:"png",label:"本地采集素材"},{id:"6f46c2e5a178aa7cc2a6393aa718ed05",src:"/assets/collected/6f46c2e5a178aa7cc2a6393aa718ed05.jpg",type:"jpg",label:"本地采集素材"},{id:"7ac1b46d27db0a05b32d96a8da2dba30",src:"/assets/collected/7ac1b46d27db0a05b32d96a8da2dba30.jpg",type:"jpg",label:"本地采集素材"},{id:"8106d0f42a9cbd09f4cd60fa946db380",src:"/assets/collected/8106d0f42a9cbd09f4cd60fa946db380.jpg",type:"jpg",label:"本地采集素材"},{id:"83392733fb8e3e4b475ba6aa1c0a90d8",src:"/assets/collected/83392733fb8e3e4b475ba6aa1c0a90d8.jpg",type:"jpg",label:"本地采集素材"},{id:"9038c7891ac392215722ce6608aa9ae1",src:"/assets/collected/9038c7891ac392215722ce6608aa9ae1.png",type:"png",label:"本地采集素材"},{id:"96c96855da17133eec54d41f762e460f",src:"/assets/collected/96c96855da17133eec54d41f762e460f.png",type:"png",label:"本地采集素材"},{id:"9973bc3eb72224ae3e9c4fa173b61c11",src:"/assets/collected/9973bc3eb72224ae3e9c4fa173b61c11.jpg",type:"jpg",label:"本地采集素材"},{id:"a008186996b5a9f46c8c03d5cf756b69",src:"/assets/collected/a008186996b5a9f46c8c03d5cf756b69.png",type:"png",label:"本地采集素材"},{id:"a102aae0cc43ae8aca1febbba5eba620",src:"/assets/collected/a102aae0cc43ae8aca1febbba5eba620.png",type:"png",label:"本地采集素材"},{id:"a248e54f8817dedfee01f2a1e424d3dc",src:"/assets/collected/a248e54f8817dedfee01f2a1e424d3dc.png",type:"png",label:"本地采集素材"},{id:"a5025258cbfafe3333a05ae6a2887fe0",src:"/assets/collected/a5025258cbfafe3333a05ae6a2887fe0.png",type:"png",label:"本地采集素材"},{id:"a6ee57472cd4a608ca0d99c85b252431",src:"/assets/collected/a6ee57472cd4a608ca0d99c85b252431.jpg",type:"jpg",label:"本地采集素材"},{id:"aaf63ef83c86bd848855be37bf7aea66",src:"/assets/collected/aaf63ef83c86bd848855be37bf7aea66.png",type:"png",label:"本地采集素材"},{id:"adb0e449f63cd23d42acd0cdace235ed",src:"/assets/collected/adb0e449f63cd23d42acd0cdace235ed.jpg",type:"jpg",label:"本地采集素材"},{id:"adcd1ee4c5be390784f052f28d09a4ce",src:"/assets/collected/adcd1ee4c5be390784f052f28d09a4ce.png",type:"png",label:"本地采集素材"},{id:"b76631d4954d917e54371641d9b46595",src:"/assets/collected/b76631d4954d917e54371641d9b46595.png",type:"png",label:"本地采集素材"},{id:"b83a4a44ed164163e3895f6573fb93e4",src:"/assets/collected/b83a4a44ed164163e3895f6573fb93e4.jpg",type:"jpg",label:"本地采集素材"},{id:"bdf4a5b824555bd323429e96ea687c31",src:"/assets/collected/bdf4a5b824555bd323429e96ea687c31.jpg",type:"jpg",label:"本地采集素材"},{id:"bff7aa846d3d407b880de891a9e4f6f9",src:"/assets/collected/bff7aa846d3d407b880de891a9e4f6f9.jpg",type:"jpg",label:"本地采集素材"},{id:"c2073e183b8aa8813f494875d96352b3",src:"/assets/collected/c2073e183b8aa8813f494875d96352b3.png",type:"png",label:"本地采集素材"},{id:"c382ef04972b7c084bb8e89c70976482",src:"/assets/collected/c382ef04972b7c084bb8e89c70976482.png",type:"png",label:"本地采集素材"},{id:"c52959dd9f41ff25b19684fb71194ef2",src:"/assets/collected/c52959dd9f41ff25b19684fb71194ef2.png",type:"png",label:"本地采集素材"},{id:"c5b5ec240c6263e68a233973ffa0fa28",src:"/assets/collected/c5b5ec240c6263e68a233973ffa0fa28.png",type:"png",label:"本地采集素材"},{id:"cc3613d3674fcc3d8669fb83b6804782",src:"/assets/collected/cc3613d3674fcc3d8669fb83b6804782.jpg",type:"jpg",label:"本地采集素材"},{id:"ce4739428e270e4332bf1703bfd11717",src:"/assets/collected/ce4739428e270e4332bf1703bfd11717.png",type:"png",label:"本地采集素材"},{id:"d1aea8bfc6c156c3269d85b252e416ab",src:"/assets/collected/d1aea8bfc6c156c3269d85b252e416ab.png",type:"png",label:"本地采集素材"},{id:"d68d85f766b2c565502e594ca7f7e5d5",src:"/assets/collected/d68d85f766b2c565502e594ca7f7e5d5.jpg",type:"jpg",label:"本地采集素材"},{id:"d7f179ec28ba0eea0fcfb1ead0edc69b",src:"/assets/collected/d7f179ec28ba0eea0fcfb1ead0edc69b.png",type:"png",label:"本地采集素材"},{id:"d82b7f3028f63eb14000e15b09869e2b",src:"/assets/collected/d82b7f3028f63eb14000e15b09869e2b.jpg",type:"jpg",label:"本地采集素材"},{id:"d92e1a3bfafc574d8adea527d99d492c",src:"/assets/collected/d92e1a3bfafc574d8adea527d99d492c.png",type:"png",label:"本地采集素材"},{id:"da1dfc74855a5bd7b8fb10bfca02c37f",src:"/assets/collected/da1dfc74855a5bd7b8fb10bfca02c37f.png",type:"png",label:"本地采集素材"},{id:"db4bb2dde73e7966c20bc3a9145ef4aa",src:"/assets/collected/db4bb2dde73e7966c20bc3a9145ef4aa.png",type:"png",label:"本地采集素材"},{id:"dc7b3f595c08ead49161a85f1b62458e",src:"/assets/collected/dc7b3f595c08ead49161a85f1b62458e.jpg",type:"jpg",label:"本地采集素材"},{id:"de78690463eebb2de88a4a74746cc1be",src:"/assets/collected/de78690463eebb2de88a4a74746cc1be.png",type:"png",label:"本地采集素材"},{id:"df201fbbb1ad9d14fe455e470acb3a20",src:"/assets/collected/df201fbbb1ad9d14fe455e470acb3a20.jpg",type:"jpg",label:"本地采集素材"},{id:"e051e2c5b0e1bf5cf8d2a00f59f5bd70",src:"/assets/collected/e051e2c5b0e1bf5cf8d2a00f59f5bd70.jpg",type:"jpg",label:"本地采集素材"},{id:"e7cc2dfc9d894bd2ba4129b022d8fe8e",src:"/assets/collected/e7cc2dfc9d894bd2ba4129b022d8fe8e.jpg",type:"jpg",label:"本地采集素材"},{id:"eac803ad793c736e3372d312e7023f45",src:"/assets/collected/eac803ad793c736e3372d312e7023f45.png",type:"png",label:"本地采集素材"},{id:"ecc422c955836351c9c7187a6d5ce98d",src:"/assets/collected/ecc422c955836351c9c7187a6d5ce98d.png",type:"png",label:"本地采集素材"},{id:"ed2aadad1f03f71c17858ef5b966757d",src:"/assets/collected/ed2aadad1f03f71c17858ef5b966757d.jpg",type:"jpg",label:"本地采集素材"},{id:"f102cfa7934a6e6c37fb1a6653628e43",src:"/assets/collected/f102cfa7934a6e6c37fb1a6653628e43.png",type:"png",label:"本地采集素材"},{id:"f68fc7941afa48ed3a3b502014198d6d",src:"/assets/collected/f68fc7941afa48ed3a3b502014198d6d.png",type:"png",label:"本地采集素材"},{id:"fab766042e42b53e823a3b8de34c1068",src:"/assets/collected/fab766042e42b53e823a3b8de34c1068.png",type:"png",label:"本地采集素材"},{id:"fe8860c17a0ef8c0b8fb414b6a7cb6f1",src:"/assets/collected/fe8860c17a0ef8c0b8fb414b6a7cb6f1.png",type:"png",label:"本地采集素材"},{id:"ff9bc2f738ba667416eefadce5454489",src:"/assets/collected/ff9bc2f738ba667416eefadce5454489.png",type:"png",label:"本地采集素材"}],t0={class:"home-panel hero-panel"},n0={class:"hero-content"},i0={class:"home-panel intro-panel"},s0={class:"home-panel-inner intro-section"},r0={class:"intro-side"},a0={class:"stat-index"},o0={class:"stat-value"},l0={class:"stat-meta"},c0={class:"stat-meter","aria-hidden":"true"},u0=["src"],d0={class:"intro-material-overlay"},f0={class:"home-panel"},h0={class:"home-panel-inner"},p0={class:"section-title-row"},m0={class:"category-grid"},g0=["onClick"],_0={class:"category-copy"},v0={class:"home-panel craft-panel"},x0={class:"home-panel-inner craft-spotlight-layout"},y0={key:0,class:"craft-poster"},b0={key:1,class:"craft-spotlight-tip"},M0={class:"home-panel"},S0={class:"home-panel-inner"},E0={class:"section-title-row"},T0={class:"pattern-slider"},A0={class:"home-panel cta-panel"},_o=140,w0=16/9,Mu={__name:"HomePage",emits:["navigate","open-pattern","select-category"],setup(n,{emit:e}){const t=e,i=Ye(0),s=Ye(null),r=Ye({x:0,y:0,r:0,active:!1}),a=Ye(!1);let o=!1;const l=[{id:"chanzhi-lian",previewImage:"/assets/patterns/preview-plant.png"},{id:"huiwen",previewImage:"/assets/patterns/preview-geometry.png"},{id:"hudie",previewImage:"/assets/patterns/preview-animal.png"},{id:"shouzi",previewImage:"/assets/patterns/preview-auspicious.png"}],c=mt(()=>l.map(({id:w,previewImage:A})=>{const L=_n.find(S=>S.id===w);return L?{...L,previewImage:A}:null}).filter(Boolean)),u=mt(()=>Li.find(w=>w.type==="jpg")||Li[0]),d=[{index:"01",value:"128",unit:"枚",label:"收录纹样",english:"Pattern Archive",level:82},{index:"02",value:"6",unit:"道",label:"工艺步骤",english:"Craft Process",level:100},{index:"03",value:"800+",unit:"年",label:"传承历史",english:"Living Heritage",level:88}],h=[{id:"hero",label:"大临蓝印"},{id:"intro",label:"项目引言"},{id:"categories",label:"纹样分类"},{id:"craft",label:"工艺时间轴"},{id:"featured",label:"精选纹样"},{id:"cta",label:"寻找你的蓝"}];function p(w){i.value=Math.min(Math.max(w,0),h.length-1)}function v(w){Math.abs(w.deltaY)<8||o||(w.preventDefault(),o=!0,p(i.value+(w.deltaY>0?1:-1)),window.setTimeout(()=>{o=!1},720))}function y(w){t("select-category",w),t("navigate","/library")}function g(){const w=s.value;if(!w)return null;const A=w.clientWidth,L=w.clientHeight;if(!A||!L)return null;const S=A/L,M=w0;if(S>M){const F=L*M;return{left:(A-F)/2,top:0,width:F,height:L}}const U=A/M;return{left:0,top:(L-U)/2,width:A,height:U}}function f(){const w=g();w&&(r.value={x:w.left+w.width/2,y:w.top+w.height/2,r:0,active:!1})}function C(){a.value=!0,window.requestAnimationFrame(f)}function R(){a.value=!1,window.requestAnimationFrame(f)}function b(w){if(!a.value)return;const A=s.value,L=g();if(!A||!L)return;const S=A.getBoundingClientRect(),M=w.clientX-S.left,U=w.clientY-S.top,F=Math.min(_o,L.width/2),B=Math.min(_o,L.height/2),X=Math.min(Math.max(M,L.left+F),L.left+L.width-F),ne=Math.min(Math.max(U,L.top+B),L.top+L.height-B);r.value={x:X,y:ne,r:_o,active:!0}}function I(){f()}return tr(()=>{document.documentElement.classList.add("home-lock-scroll"),window.addEventListener("resize",f,{passive:!0}),window.requestAnimationFrame(f)}),fs(()=>{document.documentElement.classList.remove("home-lock-scroll"),window.removeEventListener("resize",f)}),(w,A)=>(re(),pe("section",{class:"home-page",onWheel:v},[Pe(Q_,{sections:h,"active-index":i.value,onSelect:p},null,8,["active-index"]),m("div",{class:"home-stage",style:en({transform:`translateY(-${i.value*100}vh)`})},[m("section",t0,[A[13]||(A[13]=m("video",{class:"hero-video",autoplay:"",muted:"",loop:"",playsinline:"",poster:j_,"aria-hidden":"true"},[m("source",{src:q_,type:"video/mp4"})],-1)),A[14]||(A[14]=m("div",{class:"hero-pattern pattern-floral"},null,-1)),m("div",n0,[A[11]||(A[11]=m("p",{class:"eyebrow"},"浙江嘉兴桐乡市大临村",-1)),m("h1",null,[(re(),pe(et,null,gt("大临蓝印",(L,S)=>m("span",{key:`${L}-${S}`,style:en({animationDelay:`${S*50}ms`})},ue(L),5)),64))]),A[12]||(A[12]=m("p",{class:"hero-subtitle"},"千年药斑布，一靛染江南",-1)),m("button",{class:"primary-button",type:"button",onClick:A[0]||(A[0]=L=>w.$emit("navigate","/library"))},[A[10]||(A[10]=st(" 探索纹样 ",-1)),Pe(_e(Hs),{size:18})])]),m("button",{class:"scroll-cue",type:"button",onClick:A[1]||(A[1]=L=>p(1))},[Pe(_e(cr),{size:24})])]),m("section",i0,[m("div",s0,[A[19]||(A[19]=m("div",{class:"section-copy"},[m("p",{class:"eyebrow"},"Project Introduction"),m("h2",null,"以数字之名，让靛蓝重新流动"),m("p",null,"大临村，浙江桐乡石门镇的一座江南古村，是蓝印花布的发源地之一。这里的一布一纹，承载着从宋元走来的防染智慧。我们以数字之名，让靛蓝重新流动。")],-1)),m("div",r0,[m("div",{class:xt(["stats",{"is-visible":i.value===1}]),"aria-label":"蓝印花布数字档案概览"},[(re(),pe(et,null,gt(d,L=>m("article",{key:L.index,class:"stat-card"},[m("header",null,[m("span",a0,ue(L.index),1),A[15]||(A[15]=m("span",{class:"stat-status"},[m("i"),st(" LIVE")],-1))]),m("div",o0,[m("strong",null,ue(L.value),1),m("small",null,ue(L.unit),1)]),m("div",l0,[m("span",null,ue(L.label),1),m("em",null,ue(L.english),1)]),m("span",c0,[m("i",{style:en({"--stat-level":`${L.level}%`})},null,4)])])),64))],2),m("button",{class:"intro-material-card",type:"button",onClick:A[2]||(A[2]=L=>w.$emit("navigate","/library"))},[m("img",{src:u.value.src,alt:"本地采集的蓝印花布布面纹样",loading:"lazy",decoding:"async"},null,8,u0),m("span",d0,[A[17]||(A[17]=m("small",null,"LOCAL MATERIAL ARCHIVE",-1)),A[18]||(A[18]=m("strong",null,"82 张采集素材",-1)),m("em",null,[A[16]||(A[16]=st("进入纹样图录 ",-1)),Pe(_e(Hs),{size:16})])])])])]),m("button",{class:"scroll-cue scroll-cue-on-light",type:"button","aria-label":"继续浏览纹样分类",onClick:A[3]||(A[3]=L=>p(2))},[Pe(_e(cr),{size:24})])]),m("section",f0,[m("div",h0,[m("div",p0,[A[21]||(A[21]=m("div",null,[m("p",{class:"eyebrow"},"Pattern System"),m("h2",null,"四大纹样分类")],-1)),m("button",{class:"text-link",type:"button",onClick:A[4]||(A[4]=L=>w.$emit("navigate","/library"))},[A[20]||(A[20]=st(" 进入纹库 ",-1)),Pe(_e(Hs),{size:16})])]),m("div",m0,[(re(!0),pe(et,null,gt(_e(Vf),L=>(re(),pe("button",{key:L.key,type:"button",onClick:S=>y(L.key)},[m("span",{class:xt(["category-image",L.image?["category-image-real",`category-image-${L.key}`]:L.patternClass]),style:en({backgroundImage:`url(${L.image})`})},null,6),m("span",_0,[m("strong",null,ue(L.title),1),m("em",null,ue(L.description),1),A[22]||(A[22]=m("i",null,"查看全部 →",-1))])],8,g0))),128))])]),m("button",{class:"scroll-cue scroll-cue-on-light",type:"button","aria-label":"继续浏览工艺流程",onClick:A[5]||(A[5]=L=>p(3))},[Pe(_e(cr),{size:24})])]),m("section",v0,[m("div",x0,[vt("",!0),m("div",{ref_key:"craftBoardRef",ref:s,class:"craft-spotlight-board",style:en({"--spotlight-x":`${r.value.x}px`,"--spotlight-y":`${r.value.y}px`,"--spotlight-r":`${r.value.r}px`}),onMousemove:b,onMouseleave:I},[a.value?vt("",!0):(re(),pe("div",y0,[m("div",{class:"craft-poster-inner"},[A[24]||(A[24]=m("p",{class:"eyebrow"},"Craft Timeline",-1)),A[25]||(A[25]=m("h2",null,"从刻版到晾晒，一块布要走过六道手艺",-1)),A[26]||(A[26]=m("p",null,"点击海报开启探照体验。彩色会在鼠标所到之处显现，帮助游客直观看到大临蓝印花布六道工序的完整流转。",-1)),m("button",{class:"primary-button craft-start-button",type:"button",onClick:C},"开启探照")])])),A[29]||(A[29]=m("img",{class:"craft-board-image grayscale",src:Y_,alt:"craft grayscale board"},null,-1)),A[30]||(A[30]=m("img",{class:"craft-board-image color",src:K_,alt:"craft color board"},null,-1)),m("div",{class:xt(["craft-spotlight-glow",{active:r.value.active}])},null,2),a.value?(re(),pe("div",b0,[A[27]||(A[27]=m("span",null,"探照工艺图",-1)),A[28]||(A[28]=m("em",null,"鼠标移动到哪里，哪里就恢复彩色",-1)),m("button",{class:"craft-restart-button",type:"button",onClick:Ln(R,["stop"])},"重新开始")])):vt("",!0)],36)]),m("button",{class:"scroll-cue",type:"button","aria-label":"继续浏览精选纹样",onClick:A[6]||(A[6]=L=>p(4))},[Pe(_e(cr),{size:24})])]),m("section",M0,[m("div",S0,[m("div",E0,[A[31]||(A[31]=m("div",null,[m("p",{class:"eyebrow"},"Selected Patterns"),m("h2",null,"精选纹样预览")],-1)),m("button",{class:"primary-button compact",type:"button",onClick:A[7]||(A[7]=L=>w.$emit("navigate","/library"))},"进入纹库")]),m("div",T0,[(re(!0),pe(et,null,gt(c.value,L=>(re(),Ct(hc,{key:L.id,pattern:L,onOpen:S=>w.$emit("open-pattern",L)},null,8,["pattern","onOpen"]))),128))])]),m("button",{class:"scroll-cue scroll-cue-on-light",type:"button","aria-label":"继续寻找你的蓝",onClick:A[8]||(A[8]=L=>p(5))},[Pe(_e(cr),{size:24})])]),m("section",A0,[A[33]||(A[33]=m("p",{class:"eyebrow"},"Find Your Blue",-1)),A[34]||(A[34]=m("h2",null,"你的蓝，是什么？",-1)),A[35]||(A[35]=m("p",null,"选择几个关键词，生成一张属于你的大临蓝印纹样卡。",-1)),m("button",{class:"primary-button",type:"button",onClick:A[9]||(A[9]=L=>w.$emit("navigate","/find-blue"))},[A[32]||(A[32]=st(" 寻找你的蓝 ",-1)),Pe(_e(di),{size:18})])])],4)],32))}},C0={class:"material-gallery-heading"},R0={class:"material-gallery-count"},P0={class:"material-gallery-toolbar"},D0={class:"material-gallery-filters",role:"group","aria-label":"素材类型筛选"},L0=["onClick"],I0={class:"material-gallery-note"},U0={class:"material-gallery-grid"},N0=["onClick"],F0={class:"material-tile-image"},O0=["src","alt"],B0={class:"material-tile-zoom"},k0={class:"material-tile-meta"},z0={class:"material-lightbox-content"},H0=["src"],V0={__name:"MaterialGallery",setup(n){const e=Ye("all"),t=Ye(null),i=[{key:"all",label:"全部素材"},{key:"png",label:"单纹样 / 刻版"},{key:"jpg",label:"布面 / 版样"}],s=mt(()=>e.value==="all"?Li:Li.filter(l=>l.type===e.value));function r(l){return l.type==="png"?"单纹样 / 刻版素材":"布面 / 版样素材"}function a(l){t.value=l}function o(){t.value=null}return(l,c)=>(re(),pe("section",{class:"material-gallery",onKeyup:Of(o,["esc"])},[m("div",C0,[c[1]||(c[1]=m("div",null,[m("p",{class:"eyebrow"},"Local Material Archive"),m("h2",null,"本地采集素材图录"),m("p",null,"先把采集到的纹样、边饰和布面资料完整保留下来，后续再逐张补充名称、寓意与来源。")],-1)),m("div",R0,[m("strong",null,ue(_e(Li).length),1),c[0]||(c[0]=m("span",null,"张本地素材",-1))])]),m("div",P0,[m("div",D0,[(re(),pe(et,null,gt(i,u=>m("button",{key:u.key,type:"button",class:xt({active:e.value===u.key}),onClick:d=>e.value=u.key},ue(u.label),11,L0)),64))]),m("span",I0,[Pe(_e(zf),{size:16}),c[2]||(c[2]=st("仅使用本地文件",-1))])]),m("div",U0,[(re(!0),pe(et,null,gt(s.value,(u,d)=>(re(),pe("button",{key:u.id,class:"material-tile",type:"button",onClick:h=>a(u)},[m("span",F0,[m("img",{src:u.src,alt:`本地采集素材 ${d+1}`,loading:"lazy",decoding:"async"},null,8,O0),m("span",B0,[Pe(_e(Rg),{size:17})])]),m("span",k0,[m("strong",null,"素材 "+ue(String(d+1).padStart(2,"0")),1),m("small",null,ue(r(u)),1)])],8,N0))),128))]),t.value?(re(),pe("div",{key:0,class:"material-lightbox",onClick:Ln(o,["self"])},[m("button",{class:"material-lightbox-close",type:"button","aria-label":"关闭素材预览",onClick:o},[Pe(_e(ls),{size:22})]),m("figure",z0,[m("img",{src:t.value.src,alt:"本地采集素材大图"},null,8,H0),m("figcaption",null,[m("span",null,ue(r(t.value)),1),m("small",null,"本地素材文件 · "+ue(t.value.id),1)])])])):vt("",!0)],32))}},G0=kr(V0,[["__scopeId","data-v-411e3d2f"]]),W0={class:"library-page section top-section"},X0={class:"page-heading"},$0={class:"library-tools"},j0={class:"search-field"},q0={class:"filter-tabs"},Y0=["onClick"],K0={key:0,class:"library-grid"},Z0={key:1,class:"empty-state"},J0={__name:"LibraryPage",props:{initialCategory:{type:String,default:"all"}},emits:["open-pattern"],setup(n){const e=n,t=Ye(e.initialCategory),i=Ye(""),s=Ye(8),r=mt(()=>[{key:"all",name:"全部"},...Vf]),a=mt(()=>{const l=i.value.trim();return _n.filter(c=>{const u=t.value==="all"||c.category===t.value,d=`${c.name}${c.categoryName}${c.meaning}${c.meaningDetail}${c.tags.join("")}`;return u&&(!l||d.includes(l))})}),o=mt(()=>a.value.slice(0,s.value));return $n(()=>e.initialCategory,l=>{t.value=l}),$n([t,i],()=>{s.value=8}),(l,c)=>(re(),pe("section",W0,[m("div",X0,[c[2]||(c[2]=m("p",{class:"eyebrow"},"Pattern Archive",-1)),c[3]||(c[3]=m("h1",null,"蓝印纹库",-1)),m("p",null,"已整理 "+ue(_e(_n).length)+" 个有语义说明的示范纹样，并接入 "+ue(_e(Li).length)+" 张本地采集素材。",1)]),m("div",$0,[m("label",j0,[Pe(_e(fc),{size:18}),tl(m("input",{"onUpdate:modelValue":c[0]||(c[0]=u=>i.value=u),type:"search",placeholder:"搜索纹样名称、寓意、标签"},null,512),[[cl,i.value]])]),m("div",q0,[(re(!0),pe(et,null,gt(r.value,u=>(re(),pe("button",{key:u.key,type:"button",class:xt({active:t.value===u.key}),onClick:d=>t.value=u.key},ue(u.name),11,Y0))),128))])]),o.value.length?(re(),pe("div",K0,[(re(!0),pe(et,null,gt(o.value,u=>(re(),Ct(hc,{key:u.id,pattern:u,onOpen:d=>l.$emit("open-pattern",u)},null,8,["pattern","onOpen"]))),128))])):(re(),pe("div",Z0,[Pe(_e(Bf),{size:34}),c[4]||(c[4]=m("h2",null,"未找到相关纹样",-1)),c[5]||(c[5]=m("p",null,"试试“莲花”“平安”“富贵”这样的关键词。",-1))])),s.value<a.value.length?(re(),pe("button",{key:2,class:"secondary-button load-more",type:"button",onClick:c[1]||(c[1]=u=>s.value+=8)}," 加载更多 ")):vt("",!0),Pe(G0)]))}},Q0={class:"detail-page section top-section"},ev={class:"detail-layout"},tv={class:"detail-content"},nv={class:"eyebrow"},iv={class:"lead"},sv={class:"detail-block"},rv={class:"mini-timeline"},av={class:"detail-block"},ov={class:"use-grid"},lv={class:"detail-block"},cv={class:"library-grid compact-grid"},uv={__name:"PatternDetailPage",props:{patternId:{type:String,required:!0}},emits:["navigate","open-pattern"],setup(n,{emit:e}){const t=n,i=Ye(!1),s=mt(()=>_n.find(a=>a.id===t.patternId)||_n[0]),r=mt(()=>{const a=s.value.relatedIds.map(o=>_n.find(l=>l.id===o)).filter(Boolean);return a.length?a.slice(0,4):_n.filter(o=>o.category===s.value.category).slice(0,4)});return(a,o)=>(re(),pe("section",Q0,[m("button",{class:"text-link back-link",type:"button",onClick:o[0]||(o[0]=l=>a.$emit("navigate","/library"))},[Pe(_e(eo),{size:17}),o[4]||(o[4]=st(" 返回纹库 ",-1))]),m("div",ev,[m("button",{class:xt(["detail-image",s.value.patternClass]),type:"button",onClick:o[1]||(o[1]=l=>i.value=!0)},[...o[5]||(o[5]=[m("span",null,"点击放大",-1)])],2),m("article",tv,[m("p",nv,ue(s.value.categoryName),1),m("h1",null,ue(s.value.name),1),m("p",iv,ue(s.value.meaning),1),m("dl",null,[m("div",null,[o[6]||(o[6]=m("dt",null,"年代",-1)),m("dd",null,ue(s.value.era),1)]),m("div",null,[o[7]||(o[7]=m("dt",null,"传统用途",-1)),m("dd",null,ue(s.value.usage),1)]),m("div",null,[o[8]||(o[8]=m("dt",null,"文化寓意",-1)),m("dd",null,ue(s.value.meaningDetail),1)]),m("div",null,[o[9]||(o[9]=m("dt",null,"背景故事",-1)),m("dd",null,ue(s.value.story),1)])])])]),m("div",sv,[o[10]||(o[10]=m("p",{class:"eyebrow"},"Technique",-1)),o[11]||(o[11]=m("h2",null,"工艺图解",-1)),m("div",rv,[(re(!0),pe(et,null,gt(s.value.technique,l=>(re(),pe("article",{key:l},ue(l),1))),128))])]),m("div",av,[o[12]||(o[12]=m("p",{class:"eyebrow"},"Modern Use",-1)),o[13]||(o[13]=m("h2",null,"创新应用",-1)),m("div",ov,[(re(!0),pe(et,null,gt(s.value.modernUse,l=>(re(),pe("article",{key:l},ue(l),1))),128))])]),m("div",lv,[o[14]||(o[14]=m("div",{class:"section-title-row"},[m("div",null,[m("p",{class:"eyebrow"},"Related"),m("h2",null,"猜你喜欢")])],-1)),m("div",cv,[(re(!0),pe(et,null,gt(r.value,l=>(re(),Ct(hc,{key:l.id,pattern:l,onOpen:c=>a.$emit("open-pattern",l)},null,8,["pattern","onOpen"]))),128))])]),i.value?(re(),pe("div",{key:0,class:"lightbox",onClick:o[3]||(o[3]=Ln(l=>i.value=!1,["self"]))},[m("button",{class:"icon-button close-lightbox",type:"button",onClick:o[2]||(o[2]=l=>i.value=!1)},[Pe(_e(ls),{size:22})]),m("div",{class:xt(["lightbox-pattern",s.value.patternClass])},null,2)])):vt("",!0)]))}};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pc="172",Vs={ROTATE:0,DOLLY:1,PAN:2},Ns={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},dv=0,Su=1,fv=2,Wf=1,Xf=2,ai=3,Oi=0,un=1,jn=2,Ii=0,Gs=1,Eu=2,Tu=3,Au=4,hv=5,ts=100,pv=101,mv=102,gv=103,_v=104,vv=200,xv=201,yv=202,bv=203,ul=204,dl=205,Mv=206,Sv=207,Ev=208,Tv=209,Av=210,wv=211,Cv=212,Rv=213,Pv=214,fl=0,hl=1,pl=2,js=3,ml=4,gl=5,_l=6,vl=7,$f=0,Dv=1,Lv=2,Ui=0,Iv=1,Uv=2,Nv=3,Fv=4,Ov=5,Bv=6,kv=7,jf=300,qs=301,Ys=302,xl=303,yl=304,to=306,Ir=1e3,is=1001,bl=1002,Fn=1003,zv=1004,qr=1005,qn=1006,vo=1007,ss=1008,vi=1009,qf=1010,Yf=1011,Ur=1012,mc=1013,cs=1014,fi=1015,zr=1016,gc=1017,_c=1018,Ks=1020,Kf=35902,Zf=1021,Jf=1022,Un=1023,Qf=1024,eh=1025,Ws=1026,Zs=1027,th=1028,vc=1029,nh=1030,xc=1031,yc=1033,ya=33776,ba=33777,Ma=33778,Sa=33779,Ml=35840,Sl=35841,El=35842,Tl=35843,Al=36196,wl=37492,Cl=37496,Rl=37808,Pl=37809,Dl=37810,Ll=37811,Il=37812,Ul=37813,Nl=37814,Fl=37815,Ol=37816,Bl=37817,kl=37818,zl=37819,Hl=37820,Vl=37821,Ea=36492,Gl=36494,Wl=36495,ih=36283,Xl=36284,$l=36285,jl=36286,Hv=3200,Vv=3201,sh=0,Gv=1,Pi="",cn="srgb",Js="srgb-linear",Ba="linear",bt="srgb",vs=7680,wu=519,Wv=512,Xv=513,$v=514,rh=515,jv=516,qv=517,Yv=518,Kv=519,Cu=35044,Ru="300 es",hi=2e3,ka=2001;class hs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ta=Math.PI/180,ql=180/Math.PI;function Hr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]).toLowerCase()}function tt(n,e,t){return Math.max(e,Math.min(t,n))}function Zv(n,e){return(n%e+e)%e}function xo(n,e,t){return(1-t)*n+t*e}function ur(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function an(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Jv={DEG2RAD:Ta};class Ge{constructor(e=0,t=0){Ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Je{constructor(e,t,i,s,r,a,o,l,c){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],p=i[5],v=i[8],y=s[0],g=s[3],f=s[6],C=s[1],R=s[4],b=s[7],I=s[2],w=s[5],A=s[8];return r[0]=a*y+o*C+l*I,r[3]=a*g+o*R+l*w,r[6]=a*f+o*b+l*A,r[1]=c*y+u*C+d*I,r[4]=c*g+u*R+d*w,r[7]=c*f+u*b+d*A,r[2]=h*y+p*C+v*I,r[5]=h*g+p*R+v*w,r[8]=h*f+p*b+v*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*r,p=c*r-a*l,v=t*d+i*h+s*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return e[0]=d*y,e[1]=(s*c-u*i)*y,e[2]=(o*i-s*a)*y,e[3]=h*y,e[4]=(u*t-s*l)*y,e[5]=(s*r-o*t)*y,e[6]=p*y,e[7]=(i*l-c*t)*y,e[8]=(a*t-i*r)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(yo.makeScale(e,t)),this}rotate(e){return this.premultiply(yo.makeRotation(-e)),this}translate(e,t){return this.premultiply(yo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const yo=new Je;function ah(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Nr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Qv(){const n=Nr("canvas");return n.style.display="block",n}const Pu={};function Us(n){n in Pu||(Pu[n]=!0,console.warn(n))}function ex(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function tx(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function nx(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Du=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lu=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ix(){const n={enabled:!0,workingColorSpace:Js,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===bt&&(s.r=pi(s.r),s.g=pi(s.g),s.b=pi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===bt&&(s.r=Xs(s.r),s.g=Xs(s.g),s.b=Xs(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Pi?Ba:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Js]:{primaries:e,whitePoint:i,transfer:Ba,toXYZ:Du,fromXYZ:Lu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:cn},outputColorSpaceConfig:{drawingBufferColorSpace:cn}},[cn]:{primaries:e,whitePoint:i,transfer:bt,toXYZ:Du,fromXYZ:Lu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:cn}}}),n}const lt=ix();function pi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Xs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let xs;class sx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{xs===void 0&&(xs=Nr("canvas")),xs.width=e.width,xs.height=e.height;const i=xs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=xs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Nr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=pi(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(pi(t[i]/255)*255):t[i]=pi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let rx=0;class oh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rx++}),this.uuid=Hr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(bo(s[a].image)):r.push(bo(s[a]))}else r=bo(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function bo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?sx.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ax=0;class sn extends hs{constructor(e=sn.DEFAULT_IMAGE,t=sn.DEFAULT_MAPPING,i=is,s=is,r=qn,a=ss,o=Un,l=vi,c=sn.DEFAULT_ANISOTROPY,u=Pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ax++}),this.uuid=Hr(),this.name="",this.source=new oh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ir:e.x=e.x-Math.floor(e.x);break;case is:e.x=e.x<0?0:1;break;case bl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ir:e.y=e.y-Math.floor(e.y);break;case is:e.y=e.y<0?0:1;break;case bl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=jf;sn.DEFAULT_ANISOTROPY=1;class Rt{constructor(e=0,t=0,i=0,s=1){Rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],v=l[9],y=l[2],g=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-y)<.01&&Math.abs(v-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+y)<.1&&Math.abs(v+g)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(c+1)/2,b=(p+1)/2,I=(f+1)/2,w=(u+h)/4,A=(d+y)/4,L=(v+g)/4;return R>b&&R>I?R<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(R),s=w/i,r=A/i):b>I?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=w/s,r=L/s):I<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),i=A/r,s=L/r),this.set(i,s,r,t),this}let C=Math.sqrt((g-v)*(g-v)+(d-y)*(d-y)+(h-u)*(h-u));return Math.abs(C)<.001&&(C=1),this.x=(g-v)/C,this.y=(d-y)/C,this.z=(h-u)/C,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this.w=tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this.w=tt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ox extends hs{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Rt(0,0,e,t),this.scissorTest=!1,this.viewport=new Rt(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new sn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new oh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class us extends ox{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class lh extends sn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=is,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class lx extends sn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=is,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ds{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3];const h=r[a+0],p=r[a+1],v=r[a+2],y=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=h,e[t+1]=p,e[t+2]=v,e[t+3]=y;return}if(d!==y||l!==h||c!==p||u!==v){let g=1-o;const f=l*h+c*p+u*v+d*y,C=f>=0?1:-1,R=1-f*f;if(R>Number.EPSILON){const I=Math.sqrt(R),w=Math.atan2(I,f*C);g=Math.sin(g*w)/I,o=Math.sin(o*w)/I}const b=o*C;if(l=l*g+h*b,c=c*g+p*b,u=u*g+v*b,d=d*g+y*b,g===1-o){const I=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=I,c*=I,u*=I,d*=I}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[a],h=r[a+1],p=r[a+2],v=r[a+3];return e[t]=o*v+u*d+l*p-c*h,e[t+1]=l*v+u*h+c*d-o*p,e[t+2]=c*v+u*p+o*h-l*d,e[t+3]=u*v-o*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),d=o(r/2),h=l(i/2),p=l(s/2),v=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*p*v,this._y=c*p*d-h*u*v,this._z=c*u*v+h*p*d,this._w=c*u*d-h*p*v;break;case"YXZ":this._x=h*u*d+c*p*v,this._y=c*p*d-h*u*v,this._z=c*u*v-h*p*d,this._w=c*u*d+h*p*v;break;case"ZXY":this._x=h*u*d-c*p*v,this._y=c*p*d+h*u*v,this._z=c*u*v+h*p*d,this._w=c*u*d-h*p*v;break;case"ZYX":this._x=h*u*d-c*p*v,this._y=c*p*d+h*u*v,this._z=c*u*v-h*p*d,this._w=c*u*d+h*p*v;break;case"YZX":this._x=h*u*d+c*p*v,this._y=c*p*d+h*u*v,this._z=c*u*v-h*p*d,this._w=c*u*d-h*p*v;break;case"XZY":this._x=h*u*d-c*p*v,this._y=c*p*d-h*u*v,this._z=c*u*v+h*p*d,this._w=c*u*d+h*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=i+o+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*d+this._w*h,this._x=i*d+this._x*h,this._y=s*d+this._y*h,this._z=r*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,t=0,i=0){$.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Iu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Iu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),u=2*(o*t-r*s),d=2*(r*i-a*t);return this.x=t+l*c+a*d-o*u,this.y=i+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Mo.copy(this).projectOnVector(e),this.sub(Mo)}reflect(e){return this.sub(Mo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Mo=new $,Iu=new ds;class Vr{constructor(e=new $(1/0,1/0,1/0),t=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Rn):Rn.fromBufferAttribute(r,a),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Yr.copy(i.boundingBox)),Yr.applyMatrix4(e.matrixWorld),this.union(Yr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(dr),Kr.subVectors(this.max,dr),ys.subVectors(e.a,dr),bs.subVectors(e.b,dr),Ms.subVectors(e.c,dr),Mi.subVectors(bs,ys),Si.subVectors(Ms,bs),$i.subVectors(ys,Ms);let t=[0,-Mi.z,Mi.y,0,-Si.z,Si.y,0,-$i.z,$i.y,Mi.z,0,-Mi.x,Si.z,0,-Si.x,$i.z,0,-$i.x,-Mi.y,Mi.x,0,-Si.y,Si.x,0,-$i.y,$i.x,0];return!So(t,ys,bs,Ms,Kr)||(t=[1,0,0,0,1,0,0,0,1],!So(t,ys,bs,Ms,Kr))?!1:(Zr.crossVectors(Mi,Si),t=[Zr.x,Zr.y,Zr.z],So(t,ys,bs,Ms,Kr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ti=[new $,new $,new $,new $,new $,new $,new $,new $],Rn=new $,Yr=new Vr,ys=new $,bs=new $,Ms=new $,Mi=new $,Si=new $,$i=new $,dr=new $,Kr=new $,Zr=new $,ji=new $;function So(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){ji.fromArray(n,r);const o=s.x*Math.abs(ji.x)+s.y*Math.abs(ji.y)+s.z*Math.abs(ji.z),l=e.dot(ji),c=t.dot(ji),u=i.dot(ji);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const cx=new Vr,fr=new $,Eo=new $;class bc{constructor(e=new $,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):cx.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fr.subVectors(e,this.center);const t=fr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(fr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Eo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fr.copy(e.center).add(Eo)),this.expandByPoint(fr.copy(e.center).sub(Eo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ni=new $,To=new $,Jr=new $,Ei=new $,Ao=new $,Qr=new $,wo=new $;class ch{constructor(e=new $,t=new $(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ni.copy(this.origin).addScaledVector(this.direction,t),ni.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){To.copy(e).add(t).multiplyScalar(.5),Jr.copy(t).sub(e).normalize(),Ei.copy(this.origin).sub(To);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Jr),o=Ei.dot(this.direction),l=-Ei.dot(Jr),c=Ei.lengthSq(),u=Math.abs(1-a*a);let d,h,p,v;if(u>0)if(d=a*l-o,h=a*o-l,v=r*u,d>=0)if(h>=-v)if(h<=v){const y=1/u;d*=y,h*=y,p=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h<=-v?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c):h<=v?(d=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(To).addScaledVector(Jr,h),p}intersectSphere(e,t){ni.subVectors(e.center,this.origin);const i=ni.dot(this.direction),s=ni.dot(ni)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ni)!==null}intersectTriangle(e,t,i,s,r){Ao.subVectors(t,e),Qr.subVectors(i,e),wo.crossVectors(Ao,Qr);let a=this.direction.dot(wo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ei.subVectors(this.origin,e);const l=o*this.direction.dot(Qr.crossVectors(Ei,Qr));if(l<0)return null;const c=o*this.direction.dot(Ao.cross(Ei));if(c<0||l+c>a)return null;const u=-o*Ei.dot(wo);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pt{constructor(e,t,i,s,r,a,o,l,c,u,d,h,p,v,y,g){Pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,u,d,h,p,v,y,g)}set(e,t,i,s,r,a,o,l,c,u,d,h,p,v,y,g){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=v,f[11]=y,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Ss.setFromMatrixColumn(e,0).length(),r=1/Ss.setFromMatrixColumn(e,1).length(),a=1/Ss.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const h=a*u,p=a*d,v=o*u,y=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+v*c,t[5]=h-y*c,t[9]=-o*l,t[2]=y-h*c,t[6]=v+p*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,p=l*d,v=c*u,y=c*d;t[0]=h+y*o,t[4]=v*o-p,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=p*o-v,t[6]=y+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,p=l*d,v=c*u,y=c*d;t[0]=h-y*o,t[4]=-a*d,t[8]=v+p*o,t[1]=p+v*o,t[5]=a*u,t[9]=y-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,p=a*d,v=o*u,y=o*d;t[0]=l*u,t[4]=v*c-p,t[8]=h*c+y,t[1]=l*d,t[5]=y*c+h,t[9]=p*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,p=a*c,v=o*l,y=o*c;t[0]=l*u,t[4]=y-h*d,t[8]=v*d+p,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*d+v,t[10]=h-y*d}else if(e.order==="XZY"){const h=a*l,p=a*c,v=o*l,y=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+y,t[5]=a*u,t[9]=p*d-v,t[2]=v*d-p,t[6]=o*u,t[10]=y*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ux,e,dx)}lookAt(e,t,i){const s=this.elements;return hn.subVectors(e,t),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),Ti.crossVectors(i,hn),Ti.lengthSq()===0&&(Math.abs(i.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),Ti.crossVectors(i,hn)),Ti.normalize(),ea.crossVectors(hn,Ti),s[0]=Ti.x,s[4]=ea.x,s[8]=hn.x,s[1]=Ti.y,s[5]=ea.y,s[9]=hn.y,s[2]=Ti.z,s[6]=ea.z,s[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],p=i[13],v=i[2],y=i[6],g=i[10],f=i[14],C=i[3],R=i[7],b=i[11],I=i[15],w=s[0],A=s[4],L=s[8],S=s[12],M=s[1],U=s[5],F=s[9],B=s[13],X=s[2],ne=s[6],K=s[10],ie=s[14],V=s[3],me=s[7],Me=s[11],Se=s[15];return r[0]=a*w+o*M+l*X+c*V,r[4]=a*A+o*U+l*ne+c*me,r[8]=a*L+o*F+l*K+c*Me,r[12]=a*S+o*B+l*ie+c*Se,r[1]=u*w+d*M+h*X+p*V,r[5]=u*A+d*U+h*ne+p*me,r[9]=u*L+d*F+h*K+p*Me,r[13]=u*S+d*B+h*ie+p*Se,r[2]=v*w+y*M+g*X+f*V,r[6]=v*A+y*U+g*ne+f*me,r[10]=v*L+y*F+g*K+f*Me,r[14]=v*S+y*B+g*ie+f*Se,r[3]=C*w+R*M+b*X+I*V,r[7]=C*A+R*U+b*ne+I*me,r[11]=C*L+R*F+b*K+I*Me,r[15]=C*S+R*B+b*ie+I*Se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],p=e[14],v=e[3],y=e[7],g=e[11],f=e[15];return v*(+r*l*d-s*c*d-r*o*h+i*c*h+s*o*p-i*l*p)+y*(+t*l*p-t*c*h+r*a*h-s*a*p+s*c*u-r*l*u)+g*(+t*c*d-t*o*p-r*a*d+i*a*p+r*o*u-i*c*u)+f*(-s*o*u-t*l*d+t*o*h+s*a*d-i*a*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],p=e[11],v=e[12],y=e[13],g=e[14],f=e[15],C=d*g*c-y*h*c+y*l*p-o*g*p-d*l*f+o*h*f,R=v*h*c-u*g*c-v*l*p+a*g*p+u*l*f-a*h*f,b=u*y*c-v*d*c+v*o*p-a*y*p-u*o*f+a*d*f,I=v*d*l-u*y*l-v*o*h+a*y*h+u*o*g-a*d*g,w=t*C+i*R+s*b+r*I;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=C*A,e[1]=(y*h*r-d*g*r-y*s*p+i*g*p+d*s*f-i*h*f)*A,e[2]=(o*g*r-y*l*r+y*s*c-i*g*c-o*s*f+i*l*f)*A,e[3]=(d*l*r-o*h*r-d*s*c+i*h*c+o*s*p-i*l*p)*A,e[4]=R*A,e[5]=(u*g*r-v*h*r+v*s*p-t*g*p-u*s*f+t*h*f)*A,e[6]=(v*l*r-a*g*r-v*s*c+t*g*c+a*s*f-t*l*f)*A,e[7]=(a*h*r-u*l*r+u*s*c-t*h*c-a*s*p+t*l*p)*A,e[8]=b*A,e[9]=(v*d*r-u*y*r-v*i*p+t*y*p+u*i*f-t*d*f)*A,e[10]=(a*y*r-v*o*r+v*i*c-t*y*c-a*i*f+t*o*f)*A,e[11]=(u*o*r-a*d*r-u*i*c+t*d*c+a*i*p-t*o*p)*A,e[12]=I*A,e[13]=(u*y*s-v*d*s+v*i*h-t*y*h-u*i*g+t*d*g)*A,e[14]=(v*o*s-a*y*s-v*i*l+t*y*l+a*i*g-t*o*g)*A,e[15]=(a*d*s-u*o*s+u*i*l-t*d*l-a*i*h+t*o*h)*A,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,d=o+o,h=r*c,p=r*u,v=r*d,y=a*u,g=a*d,f=o*d,C=l*c,R=l*u,b=l*d,I=i.x,w=i.y,A=i.z;return s[0]=(1-(y+f))*I,s[1]=(p+b)*I,s[2]=(v-R)*I,s[3]=0,s[4]=(p-b)*w,s[5]=(1-(h+f))*w,s[6]=(g+C)*w,s[7]=0,s[8]=(v+R)*A,s[9]=(g-C)*A,s[10]=(1-(h+y))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Ss.set(s[0],s[1],s[2]).length();const a=Ss.set(s[4],s[5],s[6]).length(),o=Ss.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Pn.copy(this);const c=1/r,u=1/a,d=1/o;return Pn.elements[0]*=c,Pn.elements[1]*=c,Pn.elements[2]*=c,Pn.elements[4]*=u,Pn.elements[5]*=u,Pn.elements[6]*=u,Pn.elements[8]*=d,Pn.elements[9]*=d,Pn.elements[10]*=d,t.setFromRotationMatrix(Pn),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=hi){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),d=(t+e)/(t-e),h=(i+s)/(i-s);let p,v;if(o===hi)p=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===ka)p=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=hi){const l=this.elements,c=1/(t-e),u=1/(i-s),d=1/(a-r),h=(t+e)*c,p=(i+s)*u;let v,y;if(o===hi)v=(a+r)*d,y=-2*d;else if(o===ka)v=r*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ss=new $,Pn=new Pt,ux=new $(0,0,0),dx=new $(1,1,1),Ti=new $,ea=new $,hn=new $,Uu=new Pt,Nu=new ds;class Jn{constructor(e=0,t=0,i=0,s=Jn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(tt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-tt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Uu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Uu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nu.setFromEuler(this),this.setFromQuaternion(Nu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jn.DEFAULT_ORDER="XYZ";class uh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fx=0;const Fu=new $,Es=new ds,ii=new Pt,ta=new $,hr=new $,hx=new $,px=new ds,Ou=new $(1,0,0),Bu=new $(0,1,0),ku=new $(0,0,1),zu={type:"added"},mx={type:"removed"},Ts={type:"childadded",child:null},Co={type:"childremoved",child:null};class Vt extends hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fx++}),this.uuid=Hr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vt.DEFAULT_UP.clone();const e=new $,t=new Jn,i=new ds,s=new $(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Pt},normalMatrix:{value:new Je}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=Vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Es.setFromAxisAngle(e,t),this.quaternion.multiply(Es),this}rotateOnWorldAxis(e,t){return Es.setFromAxisAngle(e,t),this.quaternion.premultiply(Es),this}rotateX(e){return this.rotateOnAxis(Ou,e)}rotateY(e){return this.rotateOnAxis(Bu,e)}rotateZ(e){return this.rotateOnAxis(ku,e)}translateOnAxis(e,t){return Fu.copy(e).applyQuaternion(this.quaternion),this.position.add(Fu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ou,e)}translateY(e){return this.translateOnAxis(Bu,e)}translateZ(e){return this.translateOnAxis(ku,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ta.copy(e):ta.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(hr,ta,this.up):ii.lookAt(ta,hr,this.up),this.quaternion.setFromRotationMatrix(ii),s&&(ii.extractRotation(s.matrixWorld),Es.setFromRotationMatrix(ii),this.quaternion.premultiply(Es.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zu),Ts.child=e,this.dispatchEvent(Ts),Ts.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(mx),Co.child=e,this.dispatchEvent(Co),Co.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zu),Ts.child=e,this.dispatchEvent(Ts),Ts.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,e,hx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,px,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),p=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=s,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Vt.DEFAULT_UP=new $(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dn=new $,si=new $,Ro=new $,ri=new $,As=new $,ws=new $,Hu=new $,Po=new $,Do=new $,Lo=new $,Io=new Rt,Uo=new Rt,No=new Rt;class In{constructor(e=new $,t=new $,i=new $){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Dn.subVectors(e,t),s.cross(Dn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Dn.subVectors(s,t),si.subVectors(i,t),Ro.subVectors(e,t);const a=Dn.dot(Dn),o=Dn.dot(si),l=Dn.dot(Ro),c=si.dot(si),u=si.dot(Ro),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const h=1/d,p=(c*l-o*u)*h,v=(a*u-o*l)*h;return r.set(1-p-v,v,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ri.x),l.addScaledVector(a,ri.y),l.addScaledVector(o,ri.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return Io.setScalar(0),Uo.setScalar(0),No.setScalar(0),Io.fromBufferAttribute(e,t),Uo.fromBufferAttribute(e,i),No.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Io,r.x),a.addScaledVector(Uo,r.y),a.addScaledVector(No,r.z),a}static isFrontFacing(e,t,i,s){return Dn.subVectors(i,t),si.subVectors(e,t),Dn.cross(si).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),si.subVectors(this.a,this.b),Dn.cross(si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return In.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return In.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return In.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return In.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return In.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;As.subVectors(s,i),ws.subVectors(r,i),Po.subVectors(e,i);const l=As.dot(Po),c=ws.dot(Po);if(l<=0&&c<=0)return t.copy(i);Do.subVectors(e,s);const u=As.dot(Do),d=ws.dot(Do);if(u>=0&&d<=u)return t.copy(s);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(As,a);Lo.subVectors(e,r);const p=As.dot(Lo),v=ws.dot(Lo);if(v>=0&&p<=v)return t.copy(r);const y=p*c-l*v;if(y<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(i).addScaledVector(ws,o);const g=u*v-p*d;if(g<=0&&d-u>=0&&p-v>=0)return Hu.subVectors(r,s),o=(d-u)/(d-u+(p-v)),t.copy(s).addScaledVector(Hu,o);const f=1/(g+y+h);return a=y*f,o=h*f,t.copy(i).addScaledVector(As,a).addScaledVector(ws,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const dh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},na={h:0,s:0,l:0};function Fo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class rt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=lt.workingColorSpace){return this.r=e,this.g=t,this.b=i,lt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=lt.workingColorSpace){if(e=Zv(e,1),t=tt(t,0,1),i=tt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Fo(a,r,e+1/3),this.g=Fo(a,r,e),this.b=Fo(a,r,e-1/3)}return lt.toWorkingColorSpace(this,s),this}setStyle(e,t=cn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=cn){const i=dh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pi(e.r),this.g=pi(e.g),this.b=pi(e.b),this}copyLinearToSRGB(e){return this.r=Xs(e.r),this.g=Xs(e.g),this.b=Xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=cn){return lt.fromWorkingColorSpace($t.copy(this),e),Math.round(tt($t.r*255,0,255))*65536+Math.round(tt($t.g*255,0,255))*256+Math.round(tt($t.b*255,0,255))}getHexString(e=cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.fromWorkingColorSpace($t.copy(this),t);const i=$t.r,s=$t.g,r=$t.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=lt.workingColorSpace){return lt.fromWorkingColorSpace($t.copy(this),t),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=cn){lt.fromWorkingColorSpace($t.copy(this),e);const t=$t.r,i=$t.g,s=$t.b;return e!==cn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ai),this.setHSL(Ai.h+e,Ai.s+t,Ai.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ai),e.getHSL(na);const i=xo(Ai.h,na.h,t),s=xo(Ai.s,na.s,t),r=xo(Ai.l,na.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $t=new rt;rt.NAMES=dh;let gx=0;class nr extends hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gx++}),this.uuid=Hr(),this.name="",this.type="Material",this.blending=Gs,this.side=Oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ul,this.blendDst=dl,this.blendEquation=ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vs,this.stencilZFail=vs,this.stencilZPass=vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Gs&&(i.blending=this.blending),this.side!==Oi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ul&&(i.blendSrc=this.blendSrc),this.blendDst!==dl&&(i.blendDst=this.blendDst),this.blendEquation!==ts&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==js&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==vs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==vs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class fh extends nr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=$f,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lt=new $,ia=new Ge;class Kn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Cu,this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ia.fromBufferAttribute(this,t),ia.applyMatrix3(e),this.setXY(t,ia.x,ia.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ur(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=an(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ur(t,this.array)),t}setX(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ur(t,this.array)),t}setY(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ur(t,this.array)),t}setZ(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ur(t,this.array)),t}setW(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),i=an(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),i=an(i,this.array),s=an(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),i=an(i,this.array),s=an(s,this.array),r=an(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cu&&(e.usage=this.usage),e}}class hh extends Kn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ph extends Kn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Nt extends Kn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let _x=0;const Sn=new Pt,Oo=new Vt,Cs=new $,pn=new Vr,pr=new Vr,Bt=new $;class Bn extends hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_x++}),this.uuid=Hr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ah(e)?ph:hh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,i){return Sn.makeTranslation(e,t,i),this.applyMatrix4(Sn),this}scale(e,t,i){return Sn.makeScale(e,t,i),this.applyMatrix4(Sn),this}lookAt(e){return Oo.lookAt(e),Oo.updateMatrix(),this.applyMatrix4(Oo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Nt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];pn.setFromBufferAttribute(r),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const i=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];pr.setFromBufferAttribute(o),this.morphTargetsRelative?(Bt.addVectors(pn.min,pr.min),pn.expandByPoint(Bt),Bt.addVectors(pn.max,pr.max),pn.expandByPoint(Bt)):(pn.expandByPoint(pr.min),pn.expandByPoint(pr.max))}pn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Bt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Bt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Bt.fromBufferAttribute(o,c),l&&(Cs.fromBufferAttribute(e,c),Bt.add(Cs)),s=Math.max(s,i.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<i.count;L++)o[L]=new $,l[L]=new $;const c=new $,u=new $,d=new $,h=new Ge,p=new Ge,v=new Ge,y=new $,g=new $;function f(L,S,M){c.fromBufferAttribute(i,L),u.fromBufferAttribute(i,S),d.fromBufferAttribute(i,M),h.fromBufferAttribute(r,L),p.fromBufferAttribute(r,S),v.fromBufferAttribute(r,M),u.sub(c),d.sub(c),p.sub(h),v.sub(h);const U=1/(p.x*v.y-v.x*p.y);isFinite(U)&&(y.copy(u).multiplyScalar(v.y).addScaledVector(d,-p.y).multiplyScalar(U),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(U),o[L].add(y),o[S].add(y),o[M].add(y),l[L].add(g),l[S].add(g),l[M].add(g))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let L=0,S=C.length;L<S;++L){const M=C[L],U=M.start,F=M.count;for(let B=U,X=U+F;B<X;B+=3)f(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const R=new $,b=new $,I=new $,w=new $;function A(L){I.fromBufferAttribute(s,L),w.copy(I);const S=o[L];R.copy(S),R.sub(I.multiplyScalar(I.dot(S))).normalize(),b.crossVectors(w,S);const U=b.dot(l[L])<0?-1:1;a.setXYZW(L,R.x,R.y,R.z,U)}for(let L=0,S=C.length;L<S;++L){const M=C[L],U=M.start,F=M.count;for(let B=U,X=U+F;B<X;B+=3)A(e.getX(B+0)),A(e.getX(B+1)),A(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Kn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const s=new $,r=new $,a=new $,o=new $,l=new $,c=new $,u=new $,d=new $;if(e)for(let h=0,p=e.count;h<p;h+=3){const v=e.getX(h+0),y=e.getX(h+1),g=e.getX(h+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,g),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,g),o.add(u),l.add(u),c.add(u),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let p=0,v=0;for(let y=0,g=l.length;y<g;y++){o.isInterleavedBufferAttribute?p=l[y]*o.data.stride+o.offset:p=l[y]*u;for(let f=0;f<u;f++)h[v++]=c[p++]}return new Kn(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bn,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],p=e(h,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vu=new Pt,qi=new ch,sa=new bc,Gu=new $,ra=new $,aa=new $,oa=new $,Bo=new $,la=new $,Wu=new $,ca=new $;class Ut extends Vt{constructor(e=new Bn,t=new fh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){la.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],d=r[l];u!==0&&(Bo.fromBufferAttribute(d,e),a?la.addScaledVector(Bo,u):la.addScaledVector(Bo.sub(t),u))}t.add(la)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),sa.copy(i.boundingSphere),sa.applyMatrix4(r),qi.copy(e.ray).recast(e.near),!(sa.containsPoint(qi.origin)===!1&&(qi.intersectSphere(sa,Gu)===null||qi.origin.distanceToSquared(Gu)>(e.far-e.near)**2))&&(Vu.copy(r).invert(),qi.copy(e.ray).applyMatrix4(Vu),!(i.boundingBox!==null&&qi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,qi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,y=h.length;v<y;v++){const g=h[v],f=a[g.materialIndex],C=Math.max(g.start,p.start),R=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let b=C,I=R;b<I;b+=3){const w=o.getX(b),A=o.getX(b+1),L=o.getX(b+2);s=ua(this,f,e,i,c,u,d,w,A,L),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const v=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let g=v,f=y;g<f;g+=3){const C=o.getX(g),R=o.getX(g+1),b=o.getX(g+2);s=ua(this,a,e,i,c,u,d,C,R,b),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,y=h.length;v<y;v++){const g=h[v],f=a[g.materialIndex],C=Math.max(g.start,p.start),R=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let b=C,I=R;b<I;b+=3){const w=b,A=b+1,L=b+2;s=ua(this,f,e,i,c,u,d,w,A,L),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const v=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let g=v,f=y;g<f;g+=3){const C=g,R=g+1,b=g+2;s=ua(this,a,e,i,c,u,d,C,R,b),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function vx(n,e,t,i,s,r,a,o){let l;if(e.side===un?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Oi,o),l===null)return null;ca.copy(o),ca.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ca);return c<t.near||c>t.far?null:{distance:c,point:ca.clone(),object:n}}function ua(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,ra),n.getVertexPosition(l,aa),n.getVertexPosition(c,oa);const u=vx(n,e,t,i,ra,aa,oa,Wu);if(u){const d=new $;In.getBarycoord(Wu,ra,aa,oa,d),s&&(u.uv=In.getInterpolatedAttribute(s,o,l,c,d,new Ge)),r&&(u.uv1=In.getInterpolatedAttribute(r,o,l,c,d,new Ge)),a&&(u.normal=In.getInterpolatedAttribute(a,o,l,c,d,new $),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new $,materialIndex:0};In.getNormal(ra,aa,oa,h.normal),u.face=h,u.barycoord=d}return u}class Ni extends Bn{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,p=0;v("z","y","x",-1,-1,i,t,e,a,r,0),v("z","y","x",1,-1,i,t,-e,a,r,1),v("x","z","y",1,1,e,i,t,s,a,2),v("x","z","y",1,-1,e,i,-t,s,a,3),v("x","y","z",1,-1,e,t,i,s,r,4),v("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Nt(c,3)),this.setAttribute("normal",new Nt(u,3)),this.setAttribute("uv",new Nt(d,2));function v(y,g,f,C,R,b,I,w,A,L,S){const M=b/A,U=I/L,F=b/2,B=I/2,X=w/2,ne=A+1,K=L+1;let ie=0,V=0;const me=new $;for(let Me=0;Me<K;Me++){const Se=Me*U-B;for(let Ie=0;Ie<ne;Ie++){const Xe=Ie*M-F;me[y]=Xe*C,me[g]=Se*R,me[f]=X,c.push(me.x,me.y,me.z),me[y]=0,me[g]=0,me[f]=w>0?1:-1,u.push(me.x,me.y,me.z),d.push(Ie/A),d.push(1-Me/L),ie+=1}}for(let Me=0;Me<L;Me++)for(let Se=0;Se<A;Se++){const Ie=h+Se+ne*Me,Xe=h+Se+ne*(Me+1),ae=h+(Se+1)+ne*(Me+1),ve=h+(Se+1)+ne*Me;l.push(Ie,Xe,ve),l.push(Xe,ae,ve),V+=6}o.addGroup(p,V,S),p+=V,h+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ni(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Jt(n){const e={};for(let t=0;t<n.length;t++){const i=Qs(n[t]);for(const s in i)e[s]=i[s]}return e}function xx(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function mh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}const yx={clone:Qs,merge:Jt};var bx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bi extends nr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bx,this.fragmentShader=Mx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qs(e.uniforms),this.uniformsGroups=xx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class gh extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=hi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const wi=new $,Xu=new Ge,$u=new Ge;class Tn extends gh{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ql*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ta*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ql*2*Math.atan(Math.tan(Ta*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wi.x,wi.y).multiplyScalar(-e/wi.z),wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(wi.x,wi.y).multiplyScalar(-e/wi.z)}getViewSize(e,t){return this.getViewBounds(e,Xu,$u),t.subVectors($u,Xu)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ta*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Rs=-90,Ps=1;class Sx extends Vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Tn(Rs,Ps,e,t);s.layers=this.layers,this.add(s);const r=new Tn(Rs,Ps,e,t);r.layers=this.layers,this.add(r);const a=new Tn(Rs,Ps,e,t);a.layers=this.layers,this.add(a);const o=new Tn(Rs,Ps,e,t);o.layers=this.layers,this.add(o);const l=new Tn(Rs,Ps,e,t);l.layers=this.layers,this.add(l);const c=new Tn(Rs,Ps,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===hi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ka)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(d,h,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class _h extends sn{constructor(e,t,i,s,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:qs,super(e,t,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ex extends us{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new _h(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:qn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ni(5,5,5),r=new Bi({name:"CubemapFromEquirect",uniforms:Qs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:Ii});r.uniforms.tEquirect.value=t;const a=new Ut(s,r),o=t.minFilter;return t.minFilter===ss&&(t.minFilter=qn),new Sx(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}class Tx extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jn,this.environmentIntensity=1,this.environmentRotation=new Jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ko=new $,Ax=new $,wx=new Je;class Ri{constructor(e=new $(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=ko.subVectors(i,t).cross(Ax.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ko),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||wx.getNormalMatrix(e),s=this.coplanarPoint(ko).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yi=new bc,da=new $;class Mc{constructor(e=new Ri,t=new Ri,i=new Ri,s=new Ri,r=new Ri,a=new Ri){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=hi){const i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],d=s[6],h=s[7],p=s[8],v=s[9],y=s[10],g=s[11],f=s[12],C=s[13],R=s[14],b=s[15];if(i[0].setComponents(l-r,h-c,g-p,b-f).normalize(),i[1].setComponents(l+r,h+c,g+p,b+f).normalize(),i[2].setComponents(l+a,h+u,g+v,b+C).normalize(),i[3].setComponents(l-a,h-u,g-v,b-C).normalize(),i[4].setComponents(l-o,h-d,g-y,b-R).normalize(),t===hi)i[5].setComponents(l+o,h+d,g+y,b+R).normalize();else if(t===ka)i[5].setComponents(o,d,y,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yi)}intersectsSprite(e){return Yi.center.set(0,0,0),Yi.radius=.7071067811865476,Yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(da.x=s.normal.x>0?e.max.x:e.min.x,da.y=s.normal.y>0?e.max.y:e.min.y,da.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(da)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Di extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class vh extends sn{constructor(e,t,i,s,r,a,o,l,c,u=Ws){if(u!==Ws&&u!==Zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ws&&(i=cs),i===void 0&&u===Zs&&(i=Ks),super(null,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Fn,this.minFilter=l!==void 0?l:Fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class za extends Bn{constructor(e=[new Ge(0,-.5),new Ge(.5,0),new Ge(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=tt(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],u=1/t,d=new $,h=new Ge,p=new $,v=new $,y=new $;let g=0,f=0;for(let C=0;C<=e.length-1;C++)switch(C){case 0:g=e[C+1].x-e[C].x,f=e[C+1].y-e[C].y,p.x=f*1,p.y=-g,p.z=f*0,y.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(y.x,y.y,y.z);break;default:g=e[C+1].x-e[C].x,f=e[C+1].y-e[C].y,p.x=f*1,p.y=-g,p.z=f*0,v.copy(p),p.x+=y.x,p.y+=y.y,p.z+=y.z,p.normalize(),l.push(p.x,p.y,p.z),y.copy(v)}for(let C=0;C<=t;C++){const R=i+C*u*s,b=Math.sin(R),I=Math.cos(R);for(let w=0;w<=e.length-1;w++){d.x=e[w].x*b,d.y=e[w].y,d.z=e[w].x*I,a.push(d.x,d.y,d.z),h.x=C/t,h.y=w/(e.length-1),o.push(h.x,h.y);const A=l[3*w+0]*b,L=l[3*w+1],S=l[3*w+0]*I;c.push(A,L,S)}}for(let C=0;C<t;C++)for(let R=0;R<e.length-1;R++){const b=R+C*e.length,I=b,w=b+e.length,A=b+e.length+1,L=b+1;r.push(I,w,L),r.push(A,L,w)}this.setIndex(r),this.setAttribute("position",new Nt(a,3)),this.setAttribute("uv",new Nt(o,2)),this.setAttribute("normal",new Nt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new za(e.points,e.segments,e.phiStart,e.phiLength)}}class Sc extends Bn{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new $,u=new Ge;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){const p=i+d/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[h]/e+1)/2,u.y=(a[h+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Nt(a,3)),this.setAttribute("normal",new Nt(o,3)),this.setAttribute("uv",new Nt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ec extends Bn{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],h=[],p=[];let v=0;const y=[],g=i/2;let f=0;C(),a===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(u),this.setAttribute("position",new Nt(d,3)),this.setAttribute("normal",new Nt(h,3)),this.setAttribute("uv",new Nt(p,2));function C(){const b=new $,I=new $;let w=0;const A=(t-e)/i;for(let L=0;L<=r;L++){const S=[],M=L/r,U=M*(t-e)+e;for(let F=0;F<=s;F++){const B=F/s,X=B*l+o,ne=Math.sin(X),K=Math.cos(X);I.x=U*ne,I.y=-M*i+g,I.z=U*K,d.push(I.x,I.y,I.z),b.set(ne,A,K).normalize(),h.push(b.x,b.y,b.z),p.push(B,1-M),S.push(v++)}y.push(S)}for(let L=0;L<s;L++)for(let S=0;S<r;S++){const M=y[S][L],U=y[S+1][L],F=y[S+1][L+1],B=y[S][L+1];(e>0||S!==0)&&(u.push(M,U,B),w+=3),(t>0||S!==r-1)&&(u.push(U,F,B),w+=3)}c.addGroup(f,w,0),f+=w}function R(b){const I=v,w=new Ge,A=new $;let L=0;const S=b===!0?e:t,M=b===!0?1:-1;for(let F=1;F<=s;F++)d.push(0,g*M,0),h.push(0,M,0),p.push(.5,.5),v++;const U=v;for(let F=0;F<=s;F++){const X=F/s*l+o,ne=Math.cos(X),K=Math.sin(X);A.x=S*K,A.y=g*M,A.z=S*ne,d.push(A.x,A.y,A.z),h.push(0,M,0),w.x=ne*.5+.5,w.y=K*.5*M+.5,p.push(w.x,w.y),v++}for(let F=0;F<s;F++){const B=I+F,X=U+F;b===!0?u.push(X,X+1,B):u.push(X+1,X,B),L+=3}c.addGroup(f,L,b===!0?1:2),f+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ec(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class er extends Bn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,d=e/o,h=t/l,p=[],v=[],y=[],g=[];for(let f=0;f<u;f++){const C=f*h-a;for(let R=0;R<c;R++){const b=R*d-r;v.push(b,-C,0),y.push(0,0,1),g.push(R/o),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let C=0;C<o;C++){const R=C+c*f,b=C+c*(f+1),I=C+1+c*(f+1),w=C+1+c*f;p.push(R,b,w),p.push(b,I,w)}this.setIndex(p),this.setAttribute("position",new Nt(v,3)),this.setAttribute("normal",new Nt(y,3)),this.setAttribute("uv",new Nt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new er(e.width,e.height,e.widthSegments,e.heightSegments)}}class Tc extends Bn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new $,h=new $,p=[],v=[],y=[],g=[];for(let f=0;f<=i;f++){const C=[],R=f/i;let b=0;f===0&&a===0?b=.5/t:f===i&&l===Math.PI&&(b=-.5/t);for(let I=0;I<=t;I++){const w=I/t;d.x=-e*Math.cos(s+w*r)*Math.sin(a+R*o),d.y=e*Math.cos(a+R*o),d.z=e*Math.sin(s+w*r)*Math.sin(a+R*o),v.push(d.x,d.y,d.z),h.copy(d).normalize(),y.push(h.x,h.y,h.z),g.push(w+b,1-R),C.push(c++)}u.push(C)}for(let f=0;f<i;f++)for(let C=0;C<t;C++){const R=u[f][C+1],b=u[f][C],I=u[f+1][C],w=u[f+1][C+1];(f!==0||a>0)&&p.push(R,b,w),(f!==i-1||l<Math.PI)&&p.push(b,I,w)}this.setIndex(p),this.setAttribute("position",new Nt(v,3)),this.setAttribute("normal",new Nt(y,3)),this.setAttribute("uv",new Nt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Cx extends nr{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new rt(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class mr extends nr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sh,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Rx extends nr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Px extends nr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ju={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Dx{constructor(e,t,i){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const p=c[d],v=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return v}return null}}}const Lx=new Dx;class Ac{constructor(e){this.manager=e!==void 0?e:Lx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ac.DEFAULT_MATERIAL_NAME="__DEFAULT";class Ix extends Ac{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=ju.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=Nr("img");function l(){u(),ju.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(d){u(),s&&s(d),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class Ux extends Ac{constructor(e){super(e)}load(e,t,i,s){const r=new sn,a=new Ix(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class xh extends Vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new rt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Nx extends xh{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new rt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const zo=new Pt,qu=new $,Yu=new $;class Fx{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.map=null,this.mapPass=null,this.matrix=new Pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mc,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;qu.setFromMatrixPosition(e.matrixWorld),t.position.copy(qu),Yu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Yu),t.updateMatrixWorld(),zo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(zo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class yh extends gh{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Ox extends Fx{constructor(){super(new yh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Bx extends xh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.shadow=new Ox}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class kx extends Tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ku{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=tt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(tt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class zx extends hs{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function Zu(n,e,t,i){const s=Hx(i);switch(t){case Zf:return n*e;case Qf:return n*e;case eh:return n*e*2;case th:return n*e/s.components*s.byteLength;case vc:return n*e/s.components*s.byteLength;case nh:return n*e*2/s.components*s.byteLength;case xc:return n*e*2/s.components*s.byteLength;case Jf:return n*e*3/s.components*s.byteLength;case Un:return n*e*4/s.components*s.byteLength;case yc:return n*e*4/s.components*s.byteLength;case ya:case ba:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ma:case Sa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Sl:case Tl:return Math.max(n,16)*Math.max(e,8)/4;case Ml:case El:return Math.max(n,8)*Math.max(e,8)/2;case Al:case wl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Cl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Rl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Pl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Dl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ll:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Il:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ul:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Nl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Fl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ol:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Bl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case kl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case zl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Hl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Vl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ea:case Gl:case Wl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ih:case Xl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case $l:case jl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Hx(n){switch(n){case vi:case qf:return{byteLength:1,components:1};case Ur:case Yf:case zr:return{byteLength:2,components:1};case gc:case _c:return{byteLength:2,components:4};case cs:case mc:case fi:return{byteLength:4,components:1};case Kf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pc);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function bh(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Vx(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,u);else{d.sort((p,v)=>p.start-v.start);let h=0;for(let p=1;p<d.length;p++){const v=d[h],y=d[p];y.start<=v.start+v.count+1?v.count=Math.max(v.count,y.start+y.count-v.start):(++h,d[h]=y)}d.length=h+1;for(let p=0,v=d.length;p<v;p++){const y=d[p];n.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Gx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wx=`#ifdef USE_ALPHAHASH
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
#endif`,Xx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$x=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yx=`#ifdef USE_AOMAP
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
#endif`,Kx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zx=`#ifdef USE_BATCHING
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
#endif`,Jx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ey=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ty=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ny=`#ifdef USE_IRIDESCENCE
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
#endif`,iy=`#ifdef USE_BUMPMAP
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
#endif`,sy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ry=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ay=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,oy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ly=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dy=`#if defined( USE_COLOR_ALPHA )
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
#endif`,fy=`#define PI 3.141592653589793
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
} // validated`,hy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,py=`vec3 transformedNormal = objectNormal;
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
#endif`,my=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_y=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xy="gl_FragColor = linearToOutputTexel( gl_FragColor );",yy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,by=`#ifdef USE_ENVMAP
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
#endif`,My=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sy=`#ifdef USE_ENVMAP
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
#endif`,Ey=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ty=`#ifdef USE_ENVMAP
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
#endif`,Ay=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ry=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Py=`#ifdef USE_GRADIENTMAP
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
}`,Dy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ly=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Iy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Uy=`uniform bool receiveShadow;
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
#endif`,Ny=`#ifdef USE_ENVMAP
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
#endif`,Fy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Oy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,By=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ky=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zy=`PhysicalMaterial material;
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
#endif`,Hy=`struct PhysicalMaterial {
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
}`,Vy=`
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
#endif`,Gy=`#if defined( RE_IndirectDiffuse )
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
#endif`,Wy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$y=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ky=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Jy=`#if defined( USE_POINTS_UV )
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
#endif`,Qy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ib=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sb=`#ifdef USE_MORPHTARGETS
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
#endif`,rb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ab=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ob=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ub=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,db=`#ifdef USE_NORMALMAP
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
#endif`,fb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_b=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Eb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ab=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,wb=`float getShadowMask() {
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
}`,Cb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rb=`#ifdef USE_SKINNING
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
#endif`,Pb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Db=`#ifdef USE_SKINNING
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
#endif`,Lb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ib=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ub=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Nb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fb=`#ifdef USE_TRANSMISSION
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
#endif`,Ob=`#ifdef USE_TRANSMISSION
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
#endif`,Bb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gb=`uniform sampler2D t2D;
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
}`,Wb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$b=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qb=`#include <common>
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
}`,Yb=`#if DEPTH_PACKING == 3200
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
}`,Kb=`#define DISTANCE
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
}`,Zb=`#define DISTANCE
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
}`,Jb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eM=`uniform float scale;
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
}`,tM=`uniform vec3 diffuse;
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
}`,nM=`#include <common>
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
}`,iM=`uniform vec3 diffuse;
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
}`,sM=`#define LAMBERT
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
}`,rM=`#define LAMBERT
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
}`,aM=`#define MATCAP
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
}`,oM=`#define MATCAP
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
}`,lM=`#define NORMAL
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
}`,cM=`#define NORMAL
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
}`,uM=`#define PHONG
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
}`,dM=`#define PHONG
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
}`,fM=`#define STANDARD
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
}`,hM=`#define STANDARD
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
}`,pM=`#define TOON
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
}`,mM=`#define TOON
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
}`,gM=`uniform float size;
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
}`,_M=`uniform vec3 diffuse;
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
}`,vM=`#include <common>
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
}`,xM=`uniform vec3 color;
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
}`,yM=`uniform float rotation;
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
}`,bM=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:Gx,alphahash_pars_fragment:Wx,alphamap_fragment:Xx,alphamap_pars_fragment:$x,alphatest_fragment:jx,alphatest_pars_fragment:qx,aomap_fragment:Yx,aomap_pars_fragment:Kx,batching_pars_vertex:Zx,batching_vertex:Jx,begin_vertex:Qx,beginnormal_vertex:ey,bsdfs:ty,iridescence_fragment:ny,bumpmap_pars_fragment:iy,clipping_planes_fragment:sy,clipping_planes_pars_fragment:ry,clipping_planes_pars_vertex:ay,clipping_planes_vertex:oy,color_fragment:ly,color_pars_fragment:cy,color_pars_vertex:uy,color_vertex:dy,common:fy,cube_uv_reflection_fragment:hy,defaultnormal_vertex:py,displacementmap_pars_vertex:my,displacementmap_vertex:gy,emissivemap_fragment:_y,emissivemap_pars_fragment:vy,colorspace_fragment:xy,colorspace_pars_fragment:yy,envmap_fragment:by,envmap_common_pars_fragment:My,envmap_pars_fragment:Sy,envmap_pars_vertex:Ey,envmap_physical_pars_fragment:Ny,envmap_vertex:Ty,fog_vertex:Ay,fog_pars_vertex:wy,fog_fragment:Cy,fog_pars_fragment:Ry,gradientmap_pars_fragment:Py,lightmap_pars_fragment:Dy,lights_lambert_fragment:Ly,lights_lambert_pars_fragment:Iy,lights_pars_begin:Uy,lights_toon_fragment:Fy,lights_toon_pars_fragment:Oy,lights_phong_fragment:By,lights_phong_pars_fragment:ky,lights_physical_fragment:zy,lights_physical_pars_fragment:Hy,lights_fragment_begin:Vy,lights_fragment_maps:Gy,lights_fragment_end:Wy,logdepthbuf_fragment:Xy,logdepthbuf_pars_fragment:$y,logdepthbuf_pars_vertex:jy,logdepthbuf_vertex:qy,map_fragment:Yy,map_pars_fragment:Ky,map_particle_fragment:Zy,map_particle_pars_fragment:Jy,metalnessmap_fragment:Qy,metalnessmap_pars_fragment:eb,morphinstance_vertex:tb,morphcolor_vertex:nb,morphnormal_vertex:ib,morphtarget_pars_vertex:sb,morphtarget_vertex:rb,normal_fragment_begin:ab,normal_fragment_maps:ob,normal_pars_fragment:lb,normal_pars_vertex:cb,normal_vertex:ub,normalmap_pars_fragment:db,clearcoat_normal_fragment_begin:fb,clearcoat_normal_fragment_maps:hb,clearcoat_pars_fragment:pb,iridescence_pars_fragment:mb,opaque_fragment:gb,packing:_b,premultiplied_alpha_fragment:vb,project_vertex:xb,dithering_fragment:yb,dithering_pars_fragment:bb,roughnessmap_fragment:Mb,roughnessmap_pars_fragment:Sb,shadowmap_pars_fragment:Eb,shadowmap_pars_vertex:Tb,shadowmap_vertex:Ab,shadowmask_pars_fragment:wb,skinbase_vertex:Cb,skinning_pars_vertex:Rb,skinning_vertex:Pb,skinnormal_vertex:Db,specularmap_fragment:Lb,specularmap_pars_fragment:Ib,tonemapping_fragment:Ub,tonemapping_pars_fragment:Nb,transmission_fragment:Fb,transmission_pars_fragment:Ob,uv_pars_fragment:Bb,uv_pars_vertex:kb,uv_vertex:zb,worldpos_vertex:Hb,background_vert:Vb,background_frag:Gb,backgroundCube_vert:Wb,backgroundCube_frag:Xb,cube_vert:$b,cube_frag:jb,depth_vert:qb,depth_frag:Yb,distanceRGBA_vert:Kb,distanceRGBA_frag:Zb,equirect_vert:Jb,equirect_frag:Qb,linedashed_vert:eM,linedashed_frag:tM,meshbasic_vert:nM,meshbasic_frag:iM,meshlambert_vert:sM,meshlambert_frag:rM,meshmatcap_vert:aM,meshmatcap_frag:oM,meshnormal_vert:lM,meshnormal_frag:cM,meshphong_vert:uM,meshphong_frag:dM,meshphysical_vert:fM,meshphysical_frag:hM,meshtoon_vert:pM,meshtoon_frag:mM,points_vert:gM,points_frag:_M,shadow_vert:vM,shadow_frag:xM,sprite_vert:yM,sprite_frag:bM},we={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},Wn={basic:{uniforms:Jt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:Jt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new rt(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:Jt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:Jt([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:Jt([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new rt(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:Jt([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:Jt([we.points,we.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:Jt([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:Jt([we.common,we.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:Jt([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:Jt([we.sprite,we.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:Jt([we.common,we.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:Jt([we.lights,we.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};Wn.physical={uniforms:Jt([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const fa={r:0,b:0,g:0},Ki=new Jn,MM=new Pt;function SM(n,e,t,i,s,r,a){const o=new rt(0);let l=r===!0?0:1,c,u,d=null,h=0,p=null;function v(R){let b=R.isScene===!0?R.background:null;return b&&b.isTexture&&(b=(R.backgroundBlurriness>0?t:e).get(b)),b}function y(R){let b=!1;const I=v(R);I===null?f(o,l):I&&I.isColor&&(f(I,1),b=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(R,b){const I=v(b);I&&(I.isCubeTexture||I.mapping===to)?(u===void 0&&(u=new Ut(new Ni(1,1,1),new Bi({name:"BackgroundCubeMaterial",uniforms:Qs(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,A,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ki.copy(b.backgroundRotation),Ki.x*=-1,Ki.y*=-1,Ki.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Ki.y*=-1,Ki.z*=-1),u.material.uniforms.envMap.value=I,u.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(MM.makeRotationFromEuler(Ki)),u.material.toneMapped=lt.getTransfer(I.colorSpace)!==bt,(d!==I||h!==I.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=I,h=I.version,p=n.toneMapping),u.layers.enableAll(),R.unshift(u,u.geometry,u.material,0,0,null)):I&&I.isTexture&&(c===void 0&&(c=new Ut(new er(2,2),new Bi({name:"BackgroundMaterial",uniforms:Qs(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:Oi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=I,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=lt.getTransfer(I.colorSpace)!==bt,I.matrixAutoUpdate===!0&&I.updateMatrix(),c.material.uniforms.uvTransform.value.copy(I.matrix),(d!==I||h!==I.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=I,h=I.version,p=n.toneMapping),c.layers.enableAll(),R.unshift(c,c.geometry,c.material,0,0,null))}function f(R,b){R.getRGB(fa,mh(n)),i.buffers.color.setClear(fa.r,fa.g,fa.b,b,a)}function C(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(R,b=1){o.set(R),l=b,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(R){l=R,f(o,l)},render:y,addToRenderList:g,dispose:C}}function EM(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,a=!1;function o(M,U,F,B,X){let ne=!1;const K=d(B,F,U);r!==K&&(r=K,c(r.object)),ne=p(M,B,F,X),ne&&v(M,B,F,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(ne||a)&&(a=!1,b(M,U,F,B),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function d(M,U,F){const B=F.wireframe===!0;let X=i[M.id];X===void 0&&(X={},i[M.id]=X);let ne=X[U.id];ne===void 0&&(ne={},X[U.id]=ne);let K=ne[B];return K===void 0&&(K=h(l()),ne[B]=K),K}function h(M){const U=[],F=[],B=[];for(let X=0;X<t;X++)U[X]=0,F[X]=0,B[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:F,attributeDivisors:B,object:M,attributes:{},index:null}}function p(M,U,F,B){const X=r.attributes,ne=U.attributes;let K=0;const ie=F.getAttributes();for(const V in ie)if(ie[V].location>=0){const Me=X[V];let Se=ne[V];if(Se===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(Se=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(Se=M.instanceColor)),Me===void 0||Me.attribute!==Se||Se&&Me.data!==Se.data)return!0;K++}return r.attributesNum!==K||r.index!==B}function v(M,U,F,B){const X={},ne=U.attributes;let K=0;const ie=F.getAttributes();for(const V in ie)if(ie[V].location>=0){let Me=ne[V];Me===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(Me=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(Me=M.instanceColor));const Se={};Se.attribute=Me,Me&&Me.data&&(Se.data=Me.data),X[V]=Se,K++}r.attributes=X,r.attributesNum=K,r.index=B}function y(){const M=r.newAttributes;for(let U=0,F=M.length;U<F;U++)M[U]=0}function g(M){f(M,0)}function f(M,U){const F=r.newAttributes,B=r.enabledAttributes,X=r.attributeDivisors;F[M]=1,B[M]===0&&(n.enableVertexAttribArray(M),B[M]=1),X[M]!==U&&(n.vertexAttribDivisor(M,U),X[M]=U)}function C(){const M=r.newAttributes,U=r.enabledAttributes;for(let F=0,B=U.length;F<B;F++)U[F]!==M[F]&&(n.disableVertexAttribArray(F),U[F]=0)}function R(M,U,F,B,X,ne,K){K===!0?n.vertexAttribIPointer(M,U,F,X,ne):n.vertexAttribPointer(M,U,F,B,X,ne)}function b(M,U,F,B){y();const X=B.attributes,ne=F.getAttributes(),K=U.defaultAttributeValues;for(const ie in ne){const V=ne[ie];if(V.location>=0){let me=X[ie];if(me===void 0&&(ie==="instanceMatrix"&&M.instanceMatrix&&(me=M.instanceMatrix),ie==="instanceColor"&&M.instanceColor&&(me=M.instanceColor)),me!==void 0){const Me=me.normalized,Se=me.itemSize,Ie=e.get(me);if(Ie===void 0)continue;const Xe=Ie.buffer,ae=Ie.type,ve=Ie.bytesPerElement,Re=ae===n.INT||ae===n.UNSIGNED_INT||me.gpuType===mc;if(me.isInterleavedBufferAttribute){const Ee=me.data,Be=Ee.stride,Fe=me.offset;if(Ee.isInstancedInterleavedBuffer){for(let $e=0;$e<V.locationSize;$e++)f(V.location+$e,Ee.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let $e=0;$e<V.locationSize;$e++)g(V.location+$e);n.bindBuffer(n.ARRAY_BUFFER,Xe);for(let $e=0;$e<V.locationSize;$e++)R(V.location+$e,Se/V.locationSize,ae,Me,Be*ve,(Fe+Se/V.locationSize*$e)*ve,Re)}else{if(me.isInstancedBufferAttribute){for(let Ee=0;Ee<V.locationSize;Ee++)f(V.location+Ee,me.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Ee=0;Ee<V.locationSize;Ee++)g(V.location+Ee);n.bindBuffer(n.ARRAY_BUFFER,Xe);for(let Ee=0;Ee<V.locationSize;Ee++)R(V.location+Ee,Se/V.locationSize,ae,Me,Se*ve,Se/V.locationSize*Ee*ve,Re)}}else if(K!==void 0){const Me=K[ie];if(Me!==void 0)switch(Me.length){case 2:n.vertexAttrib2fv(V.location,Me);break;case 3:n.vertexAttrib3fv(V.location,Me);break;case 4:n.vertexAttrib4fv(V.location,Me);break;default:n.vertexAttrib1fv(V.location,Me)}}}}C()}function I(){L();for(const M in i){const U=i[M];for(const F in U){const B=U[F];for(const X in B)u(B[X].object),delete B[X];delete U[F]}delete i[M]}}function w(M){if(i[M.id]===void 0)return;const U=i[M.id];for(const F in U){const B=U[F];for(const X in B)u(B[X].object),delete B[X];delete U[F]}delete i[M.id]}function A(M){for(const U in i){const F=i[U];if(F[M.id]===void 0)continue;const B=F[M.id];for(const X in B)u(B[X].object),delete B[X];delete F[M.id]}}function L(){S(),a=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:S,dispose:I,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:g,disableUnusedAttributes:C}}function TM(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),t.update(u,i,d))}function o(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let v=0;v<d;v++)p+=u[v];t.update(p,i,1)}function l(c,u,d,h){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)a(c[v],u[v],h[v]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,d);let v=0;for(let y=0;y<d;y++)v+=u[y]*h[y];t.update(v,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function AM(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==Un&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const L=A===zr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==vi&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==fi&&!L)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),C=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),R=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=v>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:v,maxTextureSize:y,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:C,maxVaryings:R,maxFragmentUniforms:b,vertexTextures:I,maxSamples:w}}function wM(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new Ri,o=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||s;return s=h,i=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,p){const v=d.clippingPlanes,y=d.clipIntersection,g=d.clipShadows,f=n.get(d);if(!s||v===null||v.length===0||r&&!g)r?u(null):c();else{const C=r?0:i,R=C*4;let b=f.clippingState||null;l.value=b,b=u(v,h,R,p);for(let I=0;I!==R;++I)b[I]=t[I];f.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=C}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,p,v){const y=d!==null?d.length:0;let g=null;if(y!==0){if(g=l.value,v!==!0||g===null){const f=p+y*4,C=h.matrixWorldInverse;o.getNormalMatrix(C),(g===null||g.length<f)&&(g=new Float32Array(f));for(let R=0,b=p;R!==y;++R,b+=4)a.copy(d[R]).applyMatrix4(C,o),a.normal.toArray(g,b),g[b+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}function CM(n){let e=new WeakMap;function t(a,o){return o===xl?a.mapping=qs:o===yl&&(a.mapping=Ys),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===xl||o===yl)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Ex(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const Fs=4,Ju=[.125,.215,.35,.446,.526,.582],ns=20,Ho=new yh,Qu=new rt;let Vo=null,Go=0,Wo=0,Xo=!1;const Qi=(1+Math.sqrt(5))/2,Ds=1/Qi,ed=[new $(-Qi,Ds,0),new $(Qi,Ds,0),new $(-Ds,0,Qi),new $(Ds,0,Qi),new $(0,Qi,-Ds),new $(0,Qi,Ds),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)];class td{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Vo=this._renderer.getRenderTarget(),Go=this._renderer.getActiveCubeFace(),Wo=this._renderer.getActiveMipmapLevel(),Xo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=id(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vo,Go,Wo),this._renderer.xr.enabled=Xo,e.scissorTest=!1,ha(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qs||e.mapping===Ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vo=this._renderer.getRenderTarget(),Go=this._renderer.getActiveCubeFace(),Wo=this._renderer.getActiveMipmapLevel(),Xo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:qn,minFilter:qn,generateMipmaps:!1,type:zr,format:Un,colorSpace:Js,depthBuffer:!1},s=nd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nd(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=RM(r)),this._blurMaterial=PM(r,e,t)}return s}_compileMaterial(e){const t=new Ut(this._lodPlanes[0],e);this._renderer.compile(t,Ho)}_sceneToCubeUV(e,t,i,s){const o=new Tn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(Qu),u.toneMapping=Ui,u.autoClear=!1;const p=new fh({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),v=new Ut(new Ni,p);let y=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,y=!0):(p.color.copy(Qu),y=!0);for(let f=0;f<6;f++){const C=f%3;C===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):C===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const R=this._cubeSize;ha(s,C*R,f>2?R:0,R,R),u.setRenderTarget(s),y&&u.render(v,o),u.render(e,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===qs||e.mapping===Ys;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=sd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=id());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ut(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;ha(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Ho)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ed[(s-r-1)%ed.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Ut(this._lodPlanes[s],c),h=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ns-1),y=r/v,g=isFinite(r)?1+Math.floor(u*y):ns;g>ns&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ns}`);const f=[];let C=0;for(let A=0;A<ns;++A){const L=A/y,S=Math.exp(-L*L/2);f.push(S),A===0?C+=S:A<g&&(C+=2*S)}for(let A=0;A<f.length;A++)f[A]=f[A]/C;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=f,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:R}=this;h.dTheta.value=v,h.mipInt.value=R-i;const b=this._sizeLods[s],I=3*b*(s>R-Fs?s-R+Fs:0),w=4*(this._cubeSize-b);ha(t,I,w,3*b,2*b),l.setRenderTarget(t),l.render(d,Ho)}}function RM(n){const e=[],t=[],i=[];let s=n;const r=n-Fs+1+Ju.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>n-Fs?l=Ju[a-n+Fs-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,v=6,y=3,g=2,f=1,C=new Float32Array(y*v*p),R=new Float32Array(g*v*p),b=new Float32Array(f*v*p);for(let w=0;w<p;w++){const A=w%3*2/3-1,L=w>2?0:-1,S=[A,L,0,A+2/3,L,0,A+2/3,L+1,0,A,L,0,A+2/3,L+1,0,A,L+1,0];C.set(S,y*v*w),R.set(h,g*v*w);const M=[w,w,w,w,w,w];b.set(M,f*v*w)}const I=new Bn;I.setAttribute("position",new Kn(C,y)),I.setAttribute("uv",new Kn(R,g)),I.setAttribute("faceIndex",new Kn(b,f)),e.push(I),s>Fs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function nd(n,e,t){const i=new us(n,e,t);return i.texture.mapping=to,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ha(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function PM(n,e,t){const i=new Float32Array(ns),s=new $(0,1,0);return new Bi({name:"SphericalGaussianBlur",defines:{n:ns,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:wc(),fragmentShader:`

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
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function id(){return new Bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wc(),fragmentShader:`

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
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function sd(){return new Bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function wc(){return`

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
	`}function DM(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===xl||l===yl,u=l===qs||l===Ys;if(c||u){let d=e.get(o);const h=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new td(n)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new td(n)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function LM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Us("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function IM(n,e,t,i){const s={},r=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);h.removeEventListener("dispose",a),delete s[h.id];const p=r.get(h);p&&(e.remove(p),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const p in h)e.update(h[p],n.ARRAY_BUFFER)}function c(d){const h=[],p=d.index,v=d.attributes.position;let y=0;if(p!==null){const C=p.array;y=p.version;for(let R=0,b=C.length;R<b;R+=3){const I=C[R+0],w=C[R+1],A=C[R+2];h.push(I,w,w,A,A,I)}}else if(v!==void 0){const C=v.array;y=v.version;for(let R=0,b=C.length/3-1;R<b;R+=3){const I=R+0,w=R+1,A=R+2;h.push(I,w,w,A,A,I)}}else return;const g=new(ah(h)?ph:hh)(h,1);g.version=y;const f=r.get(d);f&&e.remove(f),r.set(d,g)}function u(d){const h=r.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function UM(n,e,t){let i;function s(h){i=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,p){n.drawElements(i,p,r,h*a),t.update(p,i,1)}function c(h,p,v){v!==0&&(n.drawElementsInstanced(i,p,r,h*a,v),t.update(p,i,v))}function u(h,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,h,0,v);let g=0;for(let f=0;f<v;f++)g+=p[f];t.update(g,i,1)}function d(h,p,v,y){if(v===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let f=0;f<h.length;f++)c(h[f]/a,p[f],y[f]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,r,h,0,y,0,v);let f=0;for(let C=0;C<v;C++)f+=p[C]*y[C];t.update(f,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function NM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function FM(n,e,t){const i=new WeakMap,s=new Rt;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==d){let M=function(){L.dispose(),i.delete(o),o.removeEventListener("dispose",M)};var p=M;h!==void 0&&h.texture.dispose();const v=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],C=o.morphAttributes.normal||[],R=o.morphAttributes.color||[];let b=0;v===!0&&(b=1),y===!0&&(b=2),g===!0&&(b=3);let I=o.attributes.position.count*b,w=1;I>e.maxTextureSize&&(w=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const A=new Float32Array(I*w*4*d),L=new lh(A,I,w,d);L.type=fi,L.needsUpdate=!0;const S=b*4;for(let U=0;U<d;U++){const F=f[U],B=C[U],X=R[U],ne=I*w*4*U;for(let K=0;K<F.count;K++){const ie=K*S;v===!0&&(s.fromBufferAttribute(F,K),A[ne+ie+0]=s.x,A[ne+ie+1]=s.y,A[ne+ie+2]=s.z,A[ne+ie+3]=0),y===!0&&(s.fromBufferAttribute(B,K),A[ne+ie+4]=s.x,A[ne+ie+5]=s.y,A[ne+ie+6]=s.z,A[ne+ie+7]=0),g===!0&&(s.fromBufferAttribute(X,K),A[ne+ie+8]=s.x,A[ne+ie+9]=s.y,A[ne+ie+10]=s.z,A[ne+ie+11]=X.itemSize===4?s.w:1)}}h={count:d,texture:L,size:new Ge(I,w)},i.set(o,h),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let v=0;for(let g=0;g<c.length;g++)v+=c[g];const y=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(n,"morphTargetBaseInfluence",y),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function OM(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return d}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const Mh=new sn,rd=new vh(1,1),Sh=new lh,Eh=new lx,Th=new _h,ad=[],od=[],ld=new Float32Array(16),cd=new Float32Array(9),ud=new Float32Array(4);function ir(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=ad[s];if(r===void 0&&(r=new Float32Array(s),ad[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Ft(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ot(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function no(n,e){let t=od[e];t===void 0&&(t=new Int32Array(e),od[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function BM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function kM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2fv(this.addr,e),Ot(t,e)}}function zM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;n.uniform3fv(this.addr,e),Ot(t,e)}}function HM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4fv(this.addr,e),Ot(t,e)}}function VM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,i))return;ud.set(i),n.uniformMatrix2fv(this.addr,!1,ud),Ot(t,i)}}function GM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,i))return;cd.set(i),n.uniformMatrix3fv(this.addr,!1,cd),Ot(t,i)}}function WM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,i))return;ld.set(i),n.uniformMatrix4fv(this.addr,!1,ld),Ot(t,i)}}function XM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function $M(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2iv(this.addr,e),Ot(t,e)}}function jM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;n.uniform3iv(this.addr,e),Ot(t,e)}}function qM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4iv(this.addr,e),Ot(t,e)}}function YM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function KM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2uiv(this.addr,e),Ot(t,e)}}function ZM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;n.uniform3uiv(this.addr,e),Ot(t,e)}}function JM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4uiv(this.addr,e),Ot(t,e)}}function QM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(rd.compareFunction=rh,r=rd):r=Mh,t.setTexture2D(e||r,s)}function eS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Eh,s)}function tS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Th,s)}function nS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Sh,s)}function iS(n){switch(n){case 5126:return BM;case 35664:return kM;case 35665:return zM;case 35666:return HM;case 35674:return VM;case 35675:return GM;case 35676:return WM;case 5124:case 35670:return XM;case 35667:case 35671:return $M;case 35668:case 35672:return jM;case 35669:case 35673:return qM;case 5125:return YM;case 36294:return KM;case 36295:return ZM;case 36296:return JM;case 35678:case 36198:case 36298:case 36306:case 35682:return QM;case 35679:case 36299:case 36307:return eS;case 35680:case 36300:case 36308:case 36293:return tS;case 36289:case 36303:case 36311:case 36292:return nS}}function sS(n,e){n.uniform1fv(this.addr,e)}function rS(n,e){const t=ir(e,this.size,2);n.uniform2fv(this.addr,t)}function aS(n,e){const t=ir(e,this.size,3);n.uniform3fv(this.addr,t)}function oS(n,e){const t=ir(e,this.size,4);n.uniform4fv(this.addr,t)}function lS(n,e){const t=ir(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function cS(n,e){const t=ir(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function uS(n,e){const t=ir(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function dS(n,e){n.uniform1iv(this.addr,e)}function fS(n,e){n.uniform2iv(this.addr,e)}function hS(n,e){n.uniform3iv(this.addr,e)}function pS(n,e){n.uniform4iv(this.addr,e)}function mS(n,e){n.uniform1uiv(this.addr,e)}function gS(n,e){n.uniform2uiv(this.addr,e)}function _S(n,e){n.uniform3uiv(this.addr,e)}function vS(n,e){n.uniform4uiv(this.addr,e)}function xS(n,e,t){const i=this.cache,s=e.length,r=no(t,s);Ft(i,r)||(n.uniform1iv(this.addr,r),Ot(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Mh,r[a])}function yS(n,e,t){const i=this.cache,s=e.length,r=no(t,s);Ft(i,r)||(n.uniform1iv(this.addr,r),Ot(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Eh,r[a])}function bS(n,e,t){const i=this.cache,s=e.length,r=no(t,s);Ft(i,r)||(n.uniform1iv(this.addr,r),Ot(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Th,r[a])}function MS(n,e,t){const i=this.cache,s=e.length,r=no(t,s);Ft(i,r)||(n.uniform1iv(this.addr,r),Ot(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Sh,r[a])}function SS(n){switch(n){case 5126:return sS;case 35664:return rS;case 35665:return aS;case 35666:return oS;case 35674:return lS;case 35675:return cS;case 35676:return uS;case 5124:case 35670:return dS;case 35667:case 35671:return fS;case 35668:case 35672:return hS;case 35669:case 35673:return pS;case 5125:return mS;case 36294:return gS;case 36295:return _S;case 36296:return vS;case 35678:case 36198:case 36298:case 36306:case 35682:return xS;case 35679:case 36299:case 36307:return yS;case 35680:case 36300:case 36308:case 36293:return bS;case 36289:case 36303:case 36311:case 36292:return MS}}class ES{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=iS(t.type)}}class TS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=SS(t.type)}}class AS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const $o=/(\w+)(\])?(\[|\.)?/g;function dd(n,e){n.seq.push(e),n.map[e.id]=e}function wS(n,e,t){const i=n.name,s=i.length;for($o.lastIndex=0;;){const r=$o.exec(i),a=$o.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){dd(t,c===void 0?new ES(o,n,e):new TS(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new AS(o),dd(t,d)),t=d}}}class Aa{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);wS(r,a,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function fd(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const CS=37297;let RS=0;function PS(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const hd=new Je;function DS(n){lt._getMatrix(hd,lt.workingColorSpace,n);const e=`mat3( ${hd.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(n)){case Ba:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function pd(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+PS(n.getShaderSource(e),a)}else return s}function LS(n,e){const t=DS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function IS(n,e){let t;switch(e){case Iv:t="Linear";break;case Uv:t="Reinhard";break;case Nv:t="Cineon";break;case Fv:t="ACESFilmic";break;case Bv:t="AgX";break;case kv:t="Neutral";break;case Ov:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const pa=new $;function US(){lt.getLuminanceCoefficients(pa);const n=pa.x.toFixed(4),e=pa.y.toFixed(4),t=pa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function NS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vr).join(`
`)}function FS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function OS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function vr(n){return n!==""}function md(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const BS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yl(n){return n.replace(BS,zS)}const kS=new Map;function zS(n,e){let t=Qe[e];if(t===void 0){const i=kS.get(e);if(i!==void 0)t=Qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Yl(t)}const HS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _d(n){return n.replace(HS,VS)}function VS(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function vd(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function GS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Wf?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Xf?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ai&&(e="SHADOWMAP_TYPE_VSM"),e}function WS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case qs:case Ys:e="ENVMAP_TYPE_CUBE";break;case to:e="ENVMAP_TYPE_CUBE_UV";break}return e}function XS(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ys:e="ENVMAP_MODE_REFRACTION";break}return e}function $S(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case $f:e="ENVMAP_BLENDING_MULTIPLY";break;case Dv:e="ENVMAP_BLENDING_MIX";break;case Lv:e="ENVMAP_BLENDING_ADD";break}return e}function jS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function qS(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=GS(t),c=WS(t),u=XS(t),d=$S(t),h=jS(t),p=NS(t),v=FS(r),y=s.createProgram();let g,f,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(vr).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(vr).join(`
`),f.length>0&&(f+=`
`)):(g=[vd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vr).join(`
`),f=[vd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ui?"#define TONE_MAPPING":"",t.toneMapping!==Ui?Qe.tonemapping_pars_fragment:"",t.toneMapping!==Ui?IS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,LS("linearToOutputTexel",t.outputColorSpace),US(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(vr).join(`
`)),a=Yl(a),a=md(a,t),a=gd(a,t),o=Yl(o),o=md(o,t),o=gd(o,t),a=_d(a),o=_d(o),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",t.glslVersion===Ru?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ru?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const R=C+g+a,b=C+f+o,I=fd(s,s.VERTEX_SHADER,R),w=fd(s,s.FRAGMENT_SHADER,b);s.attachShader(y,I),s.attachShader(y,w),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function A(U){if(n.debug.checkShaderErrors){const F=s.getProgramInfoLog(y).trim(),B=s.getShaderInfoLog(I).trim(),X=s.getShaderInfoLog(w).trim();let ne=!0,K=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(ne=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,I,w);else{const ie=pd(s,I,"vertex"),V=pd(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+F+`
`+ie+`
`+V)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(B===""||X==="")&&(K=!1);K&&(U.diagnostics={runnable:ne,programLog:F,vertexShader:{log:B,prefix:g},fragmentShader:{log:X,prefix:f}})}s.deleteShader(I),s.deleteShader(w),L=new Aa(s,y),S=OS(s,y)}let L;this.getUniforms=function(){return L===void 0&&A(this),L};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(y,CS)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=RS++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=I,this.fragmentShader=w,this}let YS=0;class KS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new ZS(e),t.set(e,i)),i}}class ZS{constructor(e){this.id=YS++,this.code=e,this.usedTimes=0}}function JS(n,e,t,i,s,r,a){const o=new uh,l=new KS,c=new Set,u=[],d=s.logarithmicDepthBuffer,h=s.vertexTextures;let p=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,M,U,F,B){const X=F.fog,ne=B.geometry,K=S.isMeshStandardMaterial?F.environment:null,ie=(S.isMeshStandardMaterial?t:e).get(S.envMap||K),V=ie&&ie.mapping===to?ie.image.height:null,me=v[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const Me=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Se=Me!==void 0?Me.length:0;let Ie=0;ne.morphAttributes.position!==void 0&&(Ie=1),ne.morphAttributes.normal!==void 0&&(Ie=2),ne.morphAttributes.color!==void 0&&(Ie=3);let Xe,ae,ve,Re;if(me){const it=Wn[me];Xe=it.vertexShader,ae=it.fragmentShader}else Xe=S.vertexShader,ae=S.fragmentShader,l.update(S),ve=l.getVertexShaderID(S),Re=l.getFragmentShaderID(S);const Ee=n.getRenderTarget(),Be=n.state.buffers.depth.getReversed(),Fe=B.isInstancedMesh===!0,$e=B.isBatchedMesh===!0,yt=!!S.map,P=!!S.matcap,k=!!ie,E=!!S.aoMap,oe=!!S.lightMap,ee=!!S.bumpMap,J=!!S.normalMap,te=!!S.displacementMap,le=!!S.emissiveMap,Q=!!S.metalnessMap,x=!!S.roughnessMap,_=S.anisotropy>0,O=S.clearcoat>0,W=S.dispersion>0,q=S.iridescence>0,j=S.sheen>0,ye=S.transmission>0,fe=_&&!!S.anisotropyMap,xe=O&&!!S.clearcoatMap,Ne=O&&!!S.clearcoatNormalMap,he=O&&!!S.clearcoatRoughnessMap,Te=q&&!!S.iridescenceMap,Ue=q&&!!S.iridescenceThicknessMap,ke=j&&!!S.sheenColorMap,be=j&&!!S.sheenRoughnessMap,Ve=!!S.specularMap,je=!!S.specularColorMap,ct=!!S.specularIntensityMap,z=ye&&!!S.transmissionMap,Ae=ye&&!!S.thicknessMap,N=!!S.gradientMap,D=!!S.alphaMap,se=S.alphaTest>0,de=!!S.alphaHash,Oe=!!S.extensions;let ce=Ui;S.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(ce=n.toneMapping);const nt={shaderID:me,shaderType:S.type,shaderName:S.name,vertexShader:Xe,fragmentShader:ae,defines:S.defines,customVertexShaderID:ve,customFragmentShaderID:Re,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:$e,batchingColor:$e&&B._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&B.instanceColor!==null,instancingMorph:Fe&&B.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:Ee===null?n.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:Js,alphaToCoverage:!!S.alphaToCoverage,map:yt,matcap:P,envMap:k,envMapMode:k&&ie.mapping,envMapCubeUVHeight:V,aoMap:E,lightMap:oe,bumpMap:ee,normalMap:J,displacementMap:h&&te,emissiveMap:le,normalMapObjectSpace:J&&S.normalMapType===Gv,normalMapTangentSpace:J&&S.normalMapType===sh,metalnessMap:Q,roughnessMap:x,anisotropy:_,anisotropyMap:fe,clearcoat:O,clearcoatMap:xe,clearcoatNormalMap:Ne,clearcoatRoughnessMap:he,dispersion:W,iridescence:q,iridescenceMap:Te,iridescenceThicknessMap:Ue,sheen:j,sheenColorMap:ke,sheenRoughnessMap:be,specularMap:Ve,specularColorMap:je,specularIntensityMap:ct,transmission:ye,transmissionMap:z,thicknessMap:Ae,gradientMap:N,opaque:S.transparent===!1&&S.blending===Gs&&S.alphaToCoverage===!1,alphaMap:D,alphaTest:se,alphaHash:de,combine:S.combine,mapUv:yt&&y(S.map.channel),aoMapUv:E&&y(S.aoMap.channel),lightMapUv:oe&&y(S.lightMap.channel),bumpMapUv:ee&&y(S.bumpMap.channel),normalMapUv:J&&y(S.normalMap.channel),displacementMapUv:te&&y(S.displacementMap.channel),emissiveMapUv:le&&y(S.emissiveMap.channel),metalnessMapUv:Q&&y(S.metalnessMap.channel),roughnessMapUv:x&&y(S.roughnessMap.channel),anisotropyMapUv:fe&&y(S.anisotropyMap.channel),clearcoatMapUv:xe&&y(S.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&y(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&y(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&y(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&y(S.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&y(S.sheenColorMap.channel),sheenRoughnessMapUv:be&&y(S.sheenRoughnessMap.channel),specularMapUv:Ve&&y(S.specularMap.channel),specularColorMapUv:je&&y(S.specularColorMap.channel),specularIntensityMapUv:ct&&y(S.specularIntensityMap.channel),transmissionMapUv:z&&y(S.transmissionMap.channel),thicknessMapUv:Ae&&y(S.thicknessMap.channel),alphaMapUv:D&&y(S.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(J||_),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!ne.attributes.uv&&(yt||D),fog:!!X,useFog:S.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Be,skinning:B.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Ie,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:ce,decodeVideoTexture:yt&&S.map.isVideoTexture===!0&&lt.getTransfer(S.map.colorSpace)===bt,decodeVideoTextureEmissive:le&&S.emissiveMap.isVideoTexture===!0&&lt.getTransfer(S.emissiveMap.colorSpace)===bt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===jn,flipSided:S.side===un,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Oe&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&S.extensions.multiDraw===!0||$e)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return nt.vertexUv1s=c.has(1),nt.vertexUv2s=c.has(2),nt.vertexUv3s=c.has(3),c.clear(),nt}function f(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const U in S.defines)M.push(U),M.push(S.defines[U]);return S.isRawShaderMaterial===!1&&(C(M,S),R(M,S),M.push(n.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function C(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function R(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function b(S){const M=v[S.type];let U;if(M){const F=Wn[M];U=yx.clone(F.uniforms)}else U=S.uniforms;return U}function I(S,M){let U;for(let F=0,B=u.length;F<B;F++){const X=u[F];if(X.cacheKey===M){U=X,++U.usedTimes;break}}return U===void 0&&(U=new qS(n,M,S,r),u.push(U)),U}function w(S){if(--S.usedTimes===0){const M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),S.destroy()}}function A(S){l.remove(S)}function L(){l.dispose()}return{getParameters:g,getProgramCacheKey:f,getUniforms:b,acquireProgram:I,releaseProgram:w,releaseShaderCache:A,programs:u,dispose:L}}function QS(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function e1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function xd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function yd(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(d,h,p,v,y,g){let f=n[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:v,renderOrder:d.renderOrder,z:y,group:g},n[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=v,f.renderOrder=d.renderOrder,f.z=y,f.group=g),e++,f}function o(d,h,p,v,y,g){const f=a(d,h,p,v,y,g);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):t.push(f)}function l(d,h,p,v,y,g){const f=a(d,h,p,v,y,g);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function c(d,h){t.length>1&&t.sort(d||e1),i.length>1&&i.sort(h||xd),s.length>1&&s.sort(h||xd)}function u(){for(let d=e,h=n.length;d<h;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function t1(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new yd,n.set(i,[a])):s>=r.length?(a=new yd,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function n1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new $,color:new rt};break;case"SpotLight":t={position:new $,direction:new $,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new $,color:new rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new $,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":t={color:new rt,position:new $,halfWidth:new $,halfHeight:new $};break}return n[e.id]=t,t}}}function i1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let s1=0;function r1(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function a1(n){const e=new n1,t=i1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new $);const s=new $,r=new Pt,a=new Pt;function o(c){let u=0,d=0,h=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,v=0,y=0,g=0,f=0,C=0,R=0,b=0,I=0,w=0,A=0;c.sort(r1);for(let S=0,M=c.length;S<M;S++){const U=c[S],F=U.color,B=U.intensity,X=U.distance,ne=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)u+=F.r*B,d+=F.g*B,h+=F.b*B;else if(U.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(U.sh.coefficients[K],B);A++}else if(U.isDirectionalLight){const K=e.get(U);if(K.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const ie=U.shadow,V=t.get(U);V.shadowIntensity=ie.intensity,V.shadowBias=ie.bias,V.shadowNormalBias=ie.normalBias,V.shadowRadius=ie.radius,V.shadowMapSize=ie.mapSize,i.directionalShadow[p]=V,i.directionalShadowMap[p]=ne,i.directionalShadowMatrix[p]=U.shadow.matrix,C++}i.directional[p]=K,p++}else if(U.isSpotLight){const K=e.get(U);K.position.setFromMatrixPosition(U.matrixWorld),K.color.copy(F).multiplyScalar(B),K.distance=X,K.coneCos=Math.cos(U.angle),K.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),K.decay=U.decay,i.spot[y]=K;const ie=U.shadow;if(U.map&&(i.spotLightMap[I]=U.map,I++,ie.updateMatrices(U),U.castShadow&&w++),i.spotLightMatrix[y]=ie.matrix,U.castShadow){const V=t.get(U);V.shadowIntensity=ie.intensity,V.shadowBias=ie.bias,V.shadowNormalBias=ie.normalBias,V.shadowRadius=ie.radius,V.shadowMapSize=ie.mapSize,i.spotShadow[y]=V,i.spotShadowMap[y]=ne,b++}y++}else if(U.isRectAreaLight){const K=e.get(U);K.color.copy(F).multiplyScalar(B),K.halfWidth.set(U.width*.5,0,0),K.halfHeight.set(0,U.height*.5,0),i.rectArea[g]=K,g++}else if(U.isPointLight){const K=e.get(U);if(K.color.copy(U.color).multiplyScalar(U.intensity),K.distance=U.distance,K.decay=U.decay,U.castShadow){const ie=U.shadow,V=t.get(U);V.shadowIntensity=ie.intensity,V.shadowBias=ie.bias,V.shadowNormalBias=ie.normalBias,V.shadowRadius=ie.radius,V.shadowMapSize=ie.mapSize,V.shadowCameraNear=ie.camera.near,V.shadowCameraFar=ie.camera.far,i.pointShadow[v]=V,i.pointShadowMap[v]=ne,i.pointShadowMatrix[v]=U.shadow.matrix,R++}i.point[v]=K,v++}else if(U.isHemisphereLight){const K=e.get(U);K.skyColor.copy(U.color).multiplyScalar(B),K.groundColor.copy(U.groundColor).multiplyScalar(B),i.hemi[f]=K,f++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=we.LTC_FLOAT_1,i.rectAreaLTC2=we.LTC_FLOAT_2):(i.rectAreaLTC1=we.LTC_HALF_1,i.rectAreaLTC2=we.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const L=i.hash;(L.directionalLength!==p||L.pointLength!==v||L.spotLength!==y||L.rectAreaLength!==g||L.hemiLength!==f||L.numDirectionalShadows!==C||L.numPointShadows!==R||L.numSpotShadows!==b||L.numSpotMaps!==I||L.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=g,i.point.length=v,i.hemi.length=f,i.directionalShadow.length=C,i.directionalShadowMap.length=C,i.pointShadow.length=R,i.pointShadowMap.length=R,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=C,i.pointShadowMatrix.length=R,i.spotLightMatrix.length=b+I-w,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=A,L.directionalLength=p,L.pointLength=v,L.spotLength=y,L.rectAreaLength=g,L.hemiLength=f,L.numDirectionalShadows=C,L.numPointShadows=R,L.numSpotShadows=b,L.numSpotMaps=I,L.numLightProbes=A,i.version=s1++)}function l(c,u){let d=0,h=0,p=0,v=0,y=0;const g=u.matrixWorldInverse;for(let f=0,C=c.length;f<C;f++){const R=c[f];if(R.isDirectionalLight){const b=i.directional[d];b.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),d++}else if(R.isSpotLight){const b=i.spot[p];b.position.setFromMatrixPosition(R.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),p++}else if(R.isRectAreaLight){const b=i.rectArea[v];b.position.setFromMatrixPosition(R.matrixWorld),b.position.applyMatrix4(g),a.identity(),r.copy(R.matrixWorld),r.premultiply(g),a.extractRotation(r),b.halfWidth.set(R.width*.5,0,0),b.halfHeight.set(0,R.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),v++}else if(R.isPointLight){const b=i.point[h];b.position.setFromMatrixPosition(R.matrixWorld),b.position.applyMatrix4(g),h++}else if(R.isHemisphereLight){const b=i.hemi[y];b.direction.setFromMatrixPosition(R.matrixWorld),b.direction.transformDirection(g),y++}}}return{setup:o,setupView:l,state:i}}function bd(n){const e=new a1(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function o1(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new bd(n),e.set(s,[o])):r>=a.length?(o=new bd(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const l1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,c1=`uniform sampler2D shadow_pass;
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
}`;function u1(n,e,t){let i=new Mc;const s=new Ge,r=new Ge,a=new Rt,o=new Rx({depthPacking:Vv}),l=new Px,c={},u=t.maxTextureSize,d={[Oi]:un,[un]:Oi,[jn]:jn},h=new Bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:l1,fragmentShader:c1}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const v=new Bn;v.setAttribute("position",new Kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Ut(v,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wf;let f=this.type;this.render=function(w,A,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;const S=n.getRenderTarget(),M=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),F=n.state;F.setBlending(Ii),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const B=f!==ai&&this.type===ai,X=f===ai&&this.type!==ai;for(let ne=0,K=w.length;ne<K;ne++){const ie=w[ne],V=ie.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const me=V.getFrameExtents();if(s.multiply(me),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/me.x),s.x=r.x*me.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/me.y),s.y=r.y*me.y,V.mapSize.y=r.y)),V.map===null||B===!0||X===!0){const Se=this.type!==ai?{minFilter:Fn,magFilter:Fn}:{};V.map!==null&&V.map.dispose(),V.map=new us(s.x,s.y,Se),V.map.texture.name=ie.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const Me=V.getViewportCount();for(let Se=0;Se<Me;Se++){const Ie=V.getViewport(Se);a.set(r.x*Ie.x,r.y*Ie.y,r.x*Ie.z,r.y*Ie.w),F.viewport(a),V.updateMatrices(ie,Se),i=V.getFrustum(),b(A,L,V.camera,ie,this.type)}V.isPointLightShadow!==!0&&this.type===ai&&C(V,L),V.needsUpdate=!1}f=this.type,g.needsUpdate=!1,n.setRenderTarget(S,M,U)};function C(w,A){const L=e.update(y);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new us(s.x,s.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(A,null,L,h,y,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(A,null,L,p,y,null)}function R(w,A,L,S){let M=null;const U=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(U!==void 0)M=U;else if(M=L.isPointLight===!0?l:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const F=M.uuid,B=A.uuid;let X=c[F];X===void 0&&(X={},c[F]=X);let ne=X[B];ne===void 0&&(ne=M.clone(),X[B]=ne,A.addEventListener("dispose",I)),M=ne}if(M.visible=A.visible,M.wireframe=A.wireframe,S===ai?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:d[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const F=n.properties.get(M);F.light=L}return M}function b(w,A,L,S,M){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===ai)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);const B=e.update(w),X=w.material;if(Array.isArray(X)){const ne=B.groups;for(let K=0,ie=ne.length;K<ie;K++){const V=ne[K],me=X[V.materialIndex];if(me&&me.visible){const Me=R(w,me,S,M);w.onBeforeShadow(n,w,A,L,B,Me,V),n.renderBufferDirect(L,null,B,Me,w,V),w.onAfterShadow(n,w,A,L,B,Me,V)}}}else if(X.visible){const ne=R(w,X,S,M);w.onBeforeShadow(n,w,A,L,B,ne,null),n.renderBufferDirect(L,null,B,ne,w,null),w.onAfterShadow(n,w,A,L,B,ne,null)}}const F=w.children;for(let B=0,X=F.length;B<X;B++)b(F[B],A,L,S,M)}function I(w){w.target.removeEventListener("dispose",I);for(const L in c){const S=c[L],M=w.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const d1={[fl]:hl,[pl]:_l,[ml]:vl,[js]:gl,[hl]:fl,[_l]:pl,[vl]:ml,[gl]:js};function f1(n,e){function t(){let z=!1;const Ae=new Rt;let N=null;const D=new Rt(0,0,0,0);return{setMask:function(se){N!==se&&!z&&(n.colorMask(se,se,se,se),N=se)},setLocked:function(se){z=se},setClear:function(se,de,Oe,ce,nt){nt===!0&&(se*=ce,de*=ce,Oe*=ce),Ae.set(se,de,Oe,ce),D.equals(Ae)===!1&&(n.clearColor(se,de,Oe,ce),D.copy(Ae))},reset:function(){z=!1,N=null,D.set(-1,0,0,0)}}}function i(){let z=!1,Ae=!1,N=null,D=null,se=null;return{setReversed:function(de){if(Ae!==de){const Oe=e.get("EXT_clip_control");Ae?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT);const ce=se;se=null,this.setClear(ce)}Ae=de},getReversed:function(){return Ae},setTest:function(de){de?Ee(n.DEPTH_TEST):Be(n.DEPTH_TEST)},setMask:function(de){N!==de&&!z&&(n.depthMask(de),N=de)},setFunc:function(de){if(Ae&&(de=d1[de]),D!==de){switch(de){case fl:n.depthFunc(n.NEVER);break;case hl:n.depthFunc(n.ALWAYS);break;case pl:n.depthFunc(n.LESS);break;case js:n.depthFunc(n.LEQUAL);break;case ml:n.depthFunc(n.EQUAL);break;case gl:n.depthFunc(n.GEQUAL);break;case _l:n.depthFunc(n.GREATER);break;case vl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}D=de}},setLocked:function(de){z=de},setClear:function(de){se!==de&&(Ae&&(de=1-de),n.clearDepth(de),se=de)},reset:function(){z=!1,N=null,D=null,se=null,Ae=!1}}}function s(){let z=!1,Ae=null,N=null,D=null,se=null,de=null,Oe=null,ce=null,nt=null;return{setTest:function(it){z||(it?Ee(n.STENCIL_TEST):Be(n.STENCIL_TEST))},setMask:function(it){Ae!==it&&!z&&(n.stencilMask(it),Ae=it)},setFunc:function(it,Gt,dn){(N!==it||D!==Gt||se!==dn)&&(n.stencilFunc(it,Gt,dn),N=it,D=Gt,se=dn)},setOp:function(it,Gt,dn){(de!==it||Oe!==Gt||ce!==dn)&&(n.stencilOp(it,Gt,dn),de=it,Oe=Gt,ce=dn)},setLocked:function(it){z=it},setClear:function(it){nt!==it&&(n.clearStencil(it),nt=it)},reset:function(){z=!1,Ae=null,N=null,D=null,se=null,de=null,Oe=null,ce=null,nt=null}}}const r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let u={},d={},h=new WeakMap,p=[],v=null,y=!1,g=null,f=null,C=null,R=null,b=null,I=null,w=null,A=new rt(0,0,0),L=0,S=!1,M=null,U=null,F=null,B=null,X=null;const ne=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,ie=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(V)[1]),K=ie>=1):V.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),K=ie>=2);let me=null,Me={};const Se=n.getParameter(n.SCISSOR_BOX),Ie=n.getParameter(n.VIEWPORT),Xe=new Rt().fromArray(Se),ae=new Rt().fromArray(Ie);function ve(z,Ae,N,D){const se=new Uint8Array(4),de=n.createTexture();n.bindTexture(z,de),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Oe=0;Oe<N;Oe++)z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?n.texImage3D(Ae,0,n.RGBA,1,1,D,0,n.RGBA,n.UNSIGNED_BYTE,se):n.texImage2D(Ae+Oe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,se);return de}const Re={};Re[n.TEXTURE_2D]=ve(n.TEXTURE_2D,n.TEXTURE_2D,1),Re[n.TEXTURE_CUBE_MAP]=ve(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Re[n.TEXTURE_2D_ARRAY]=ve(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Re[n.TEXTURE_3D]=ve(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Ee(n.DEPTH_TEST),a.setFunc(js),ee(!1),J(Su),Ee(n.CULL_FACE),E(Ii);function Ee(z){u[z]!==!0&&(n.enable(z),u[z]=!0)}function Be(z){u[z]!==!1&&(n.disable(z),u[z]=!1)}function Fe(z,Ae){return d[z]!==Ae?(n.bindFramebuffer(z,Ae),d[z]=Ae,z===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Ae),z===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Ae),!0):!1}function $e(z,Ae){let N=p,D=!1;if(z){N=h.get(Ae),N===void 0&&(N=[],h.set(Ae,N));const se=z.textures;if(N.length!==se.length||N[0]!==n.COLOR_ATTACHMENT0){for(let de=0,Oe=se.length;de<Oe;de++)N[de]=n.COLOR_ATTACHMENT0+de;N.length=se.length,D=!0}}else N[0]!==n.BACK&&(N[0]=n.BACK,D=!0);D&&n.drawBuffers(N)}function yt(z){return v!==z?(n.useProgram(z),v=z,!0):!1}const P={[ts]:n.FUNC_ADD,[pv]:n.FUNC_SUBTRACT,[mv]:n.FUNC_REVERSE_SUBTRACT};P[gv]=n.MIN,P[_v]=n.MAX;const k={[vv]:n.ZERO,[xv]:n.ONE,[yv]:n.SRC_COLOR,[ul]:n.SRC_ALPHA,[Av]:n.SRC_ALPHA_SATURATE,[Ev]:n.DST_COLOR,[Mv]:n.DST_ALPHA,[bv]:n.ONE_MINUS_SRC_COLOR,[dl]:n.ONE_MINUS_SRC_ALPHA,[Tv]:n.ONE_MINUS_DST_COLOR,[Sv]:n.ONE_MINUS_DST_ALPHA,[wv]:n.CONSTANT_COLOR,[Cv]:n.ONE_MINUS_CONSTANT_COLOR,[Rv]:n.CONSTANT_ALPHA,[Pv]:n.ONE_MINUS_CONSTANT_ALPHA};function E(z,Ae,N,D,se,de,Oe,ce,nt,it){if(z===Ii){y===!0&&(Be(n.BLEND),y=!1);return}if(y===!1&&(Ee(n.BLEND),y=!0),z!==hv){if(z!==g||it!==S){if((f!==ts||b!==ts)&&(n.blendEquation(n.FUNC_ADD),f=ts,b=ts),it)switch(z){case Gs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Eu:n.blendFunc(n.ONE,n.ONE);break;case Tu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Au:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Gs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Eu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Tu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Au:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}C=null,R=null,I=null,w=null,A.set(0,0,0),L=0,g=z,S=it}return}se=se||Ae,de=de||N,Oe=Oe||D,(Ae!==f||se!==b)&&(n.blendEquationSeparate(P[Ae],P[se]),f=Ae,b=se),(N!==C||D!==R||de!==I||Oe!==w)&&(n.blendFuncSeparate(k[N],k[D],k[de],k[Oe]),C=N,R=D,I=de,w=Oe),(ce.equals(A)===!1||nt!==L)&&(n.blendColor(ce.r,ce.g,ce.b,nt),A.copy(ce),L=nt),g=z,S=!1}function oe(z,Ae){z.side===jn?Be(n.CULL_FACE):Ee(n.CULL_FACE);let N=z.side===un;Ae&&(N=!N),ee(N),z.blending===Gs&&z.transparent===!1?E(Ii):E(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),r.setMask(z.colorWrite);const D=z.stencilWrite;o.setTest(D),D&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),le(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?Ee(n.SAMPLE_ALPHA_TO_COVERAGE):Be(n.SAMPLE_ALPHA_TO_COVERAGE)}function ee(z){M!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),M=z)}function J(z){z!==dv?(Ee(n.CULL_FACE),z!==U&&(z===Su?n.cullFace(n.BACK):z===fv?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Be(n.CULL_FACE),U=z}function te(z){z!==F&&(K&&n.lineWidth(z),F=z)}function le(z,Ae,N){z?(Ee(n.POLYGON_OFFSET_FILL),(B!==Ae||X!==N)&&(n.polygonOffset(Ae,N),B=Ae,X=N)):Be(n.POLYGON_OFFSET_FILL)}function Q(z){z?Ee(n.SCISSOR_TEST):Be(n.SCISSOR_TEST)}function x(z){z===void 0&&(z=n.TEXTURE0+ne-1),me!==z&&(n.activeTexture(z),me=z)}function _(z,Ae,N){N===void 0&&(me===null?N=n.TEXTURE0+ne-1:N=me);let D=Me[N];D===void 0&&(D={type:void 0,texture:void 0},Me[N]=D),(D.type!==z||D.texture!==Ae)&&(me!==N&&(n.activeTexture(N),me=N),n.bindTexture(z,Ae||Re[z]),D.type=z,D.texture=Ae)}function O(){const z=Me[me];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function W(){try{n.compressedTexImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function q(){try{n.compressedTexImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function j(){try{n.texSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ye(){try{n.texSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function fe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function xe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ne(){try{n.texStorage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function he(){try{n.texStorage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Te(){try{n.texImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ue(){try{n.texImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ke(z){Xe.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),Xe.copy(z))}function be(z){ae.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),ae.copy(z))}function Ve(z,Ae){let N=c.get(Ae);N===void 0&&(N=new WeakMap,c.set(Ae,N));let D=N.get(z);D===void 0&&(D=n.getUniformBlockIndex(Ae,z.name),N.set(z,D))}function je(z,Ae){const D=c.get(Ae).get(z);l.get(Ae)!==D&&(n.uniformBlockBinding(Ae,D,z.__bindingPointIndex),l.set(Ae,D))}function ct(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},me=null,Me={},d={},h=new WeakMap,p=[],v=null,y=!1,g=null,f=null,C=null,R=null,b=null,I=null,w=null,A=new rt(0,0,0),L=0,S=!1,M=null,U=null,F=null,B=null,X=null,Xe.set(0,0,n.canvas.width,n.canvas.height),ae.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Ee,disable:Be,bindFramebuffer:Fe,drawBuffers:$e,useProgram:yt,setBlending:E,setMaterial:oe,setFlipSided:ee,setCullFace:J,setLineWidth:te,setPolygonOffset:le,setScissorTest:Q,activeTexture:x,bindTexture:_,unbindTexture:O,compressedTexImage2D:W,compressedTexImage3D:q,texImage2D:Te,texImage3D:Ue,updateUBOMapping:Ve,uniformBlockBinding:je,texStorage2D:Ne,texStorage3D:he,texSubImage2D:j,texSubImage3D:ye,compressedTexSubImage2D:fe,compressedTexSubImage3D:xe,scissor:ke,viewport:be,reset:ct}}function h1(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ge,u=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(x,_){return p?new OffscreenCanvas(x,_):Nr("canvas")}function y(x,_,O){let W=1;const q=Q(x);if((q.width>O||q.height>O)&&(W=O/Math.max(q.width,q.height)),W<1)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap||typeof VideoFrame<"u"&&x instanceof VideoFrame){const j=Math.floor(W*q.width),ye=Math.floor(W*q.height);d===void 0&&(d=v(j,ye));const fe=_?v(j,ye):d;return fe.width=j,fe.height=ye,fe.getContext("2d").drawImage(x,0,0,j,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+j+"x"+ye+")."),fe}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),x;return x}function g(x){return x.generateMipmaps}function f(x){n.generateMipmap(x)}function C(x){return x.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:x.isWebGL3DRenderTarget?n.TEXTURE_3D:x.isWebGLArrayRenderTarget||x.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function R(x,_,O,W,q=!1){if(x!==null){if(n[x]!==void 0)return n[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let j=_;if(_===n.RED&&(O===n.FLOAT&&(j=n.R32F),O===n.HALF_FLOAT&&(j=n.R16F),O===n.UNSIGNED_BYTE&&(j=n.R8)),_===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(j=n.R8UI),O===n.UNSIGNED_SHORT&&(j=n.R16UI),O===n.UNSIGNED_INT&&(j=n.R32UI),O===n.BYTE&&(j=n.R8I),O===n.SHORT&&(j=n.R16I),O===n.INT&&(j=n.R32I)),_===n.RG&&(O===n.FLOAT&&(j=n.RG32F),O===n.HALF_FLOAT&&(j=n.RG16F),O===n.UNSIGNED_BYTE&&(j=n.RG8)),_===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(j=n.RG8UI),O===n.UNSIGNED_SHORT&&(j=n.RG16UI),O===n.UNSIGNED_INT&&(j=n.RG32UI),O===n.BYTE&&(j=n.RG8I),O===n.SHORT&&(j=n.RG16I),O===n.INT&&(j=n.RG32I)),_===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(j=n.RGB8UI),O===n.UNSIGNED_SHORT&&(j=n.RGB16UI),O===n.UNSIGNED_INT&&(j=n.RGB32UI),O===n.BYTE&&(j=n.RGB8I),O===n.SHORT&&(j=n.RGB16I),O===n.INT&&(j=n.RGB32I)),_===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),O===n.UNSIGNED_INT&&(j=n.RGBA32UI),O===n.BYTE&&(j=n.RGBA8I),O===n.SHORT&&(j=n.RGBA16I),O===n.INT&&(j=n.RGBA32I)),_===n.RGB&&O===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),_===n.RGBA){const ye=q?Ba:lt.getTransfer(W);O===n.FLOAT&&(j=n.RGBA32F),O===n.HALF_FLOAT&&(j=n.RGBA16F),O===n.UNSIGNED_BYTE&&(j=ye===bt?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function b(x,_){let O;return x?_===null||_===cs||_===Ks?O=n.DEPTH24_STENCIL8:_===fi?O=n.DEPTH32F_STENCIL8:_===Ur&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===cs||_===Ks?O=n.DEPTH_COMPONENT24:_===fi?O=n.DEPTH_COMPONENT32F:_===Ur&&(O=n.DEPTH_COMPONENT16),O}function I(x,_){return g(x)===!0||x.isFramebufferTexture&&x.minFilter!==Fn&&x.minFilter!==qn?Math.log2(Math.max(_.width,_.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?_.mipmaps.length:1}function w(x){const _=x.target;_.removeEventListener("dispose",w),L(_),_.isVideoTexture&&u.delete(_)}function A(x){const _=x.target;_.removeEventListener("dispose",A),M(_)}function L(x){const _=i.get(x);if(_.__webglInit===void 0)return;const O=x.source,W=h.get(O);if(W){const q=W[_.__cacheKey];q.usedTimes--,q.usedTimes===0&&S(x),Object.keys(W).length===0&&h.delete(O)}i.remove(x)}function S(x){const _=i.get(x);n.deleteTexture(_.__webglTexture);const O=x.source,W=h.get(O);delete W[_.__cacheKey],a.memory.textures--}function M(x){const _=i.get(x);if(x.depthTexture&&(x.depthTexture.dispose(),i.remove(x.depthTexture)),x.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(_.__webglFramebuffer[W]))for(let q=0;q<_.__webglFramebuffer[W].length;q++)n.deleteFramebuffer(_.__webglFramebuffer[W][q]);else n.deleteFramebuffer(_.__webglFramebuffer[W]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[W])}else{if(Array.isArray(_.__webglFramebuffer))for(let W=0;W<_.__webglFramebuffer.length;W++)n.deleteFramebuffer(_.__webglFramebuffer[W]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let W=0;W<_.__webglColorRenderbuffer.length;W++)_.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[W]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const O=x.textures;for(let W=0,q=O.length;W<q;W++){const j=i.get(O[W]);j.__webglTexture&&(n.deleteTexture(j.__webglTexture),a.memory.textures--),i.remove(O[W])}i.remove(x)}let U=0;function F(){U=0}function B(){const x=U;return x>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+s.maxTextures),U+=1,x}function X(x){const _=[];return _.push(x.wrapS),_.push(x.wrapT),_.push(x.wrapR||0),_.push(x.magFilter),_.push(x.minFilter),_.push(x.anisotropy),_.push(x.internalFormat),_.push(x.format),_.push(x.type),_.push(x.generateMipmaps),_.push(x.premultiplyAlpha),_.push(x.flipY),_.push(x.unpackAlignment),_.push(x.colorSpace),_.join()}function ne(x,_){const O=i.get(x);if(x.isVideoTexture&&te(x),x.isRenderTargetTexture===!1&&x.version>0&&O.__version!==x.version){const W=x.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ae(O,x,_);return}}t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+_)}function K(x,_){const O=i.get(x);if(x.version>0&&O.__version!==x.version){ae(O,x,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+_)}function ie(x,_){const O=i.get(x);if(x.version>0&&O.__version!==x.version){ae(O,x,_);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+_)}function V(x,_){const O=i.get(x);if(x.version>0&&O.__version!==x.version){ve(O,x,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+_)}const me={[Ir]:n.REPEAT,[is]:n.CLAMP_TO_EDGE,[bl]:n.MIRRORED_REPEAT},Me={[Fn]:n.NEAREST,[zv]:n.NEAREST_MIPMAP_NEAREST,[qr]:n.NEAREST_MIPMAP_LINEAR,[qn]:n.LINEAR,[vo]:n.LINEAR_MIPMAP_NEAREST,[ss]:n.LINEAR_MIPMAP_LINEAR},Se={[Wv]:n.NEVER,[Kv]:n.ALWAYS,[Xv]:n.LESS,[rh]:n.LEQUAL,[$v]:n.EQUAL,[Yv]:n.GEQUAL,[jv]:n.GREATER,[qv]:n.NOTEQUAL};function Ie(x,_){if(_.type===fi&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===qn||_.magFilter===vo||_.magFilter===qr||_.magFilter===ss||_.minFilter===qn||_.minFilter===vo||_.minFilter===qr||_.minFilter===ss)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(x,n.TEXTURE_WRAP_S,me[_.wrapS]),n.texParameteri(x,n.TEXTURE_WRAP_T,me[_.wrapT]),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,me[_.wrapR]),n.texParameteri(x,n.TEXTURE_MAG_FILTER,Me[_.magFilter]),n.texParameteri(x,n.TEXTURE_MIN_FILTER,Me[_.minFilter]),_.compareFunction&&(n.texParameteri(x,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(x,n.TEXTURE_COMPARE_FUNC,Se[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Fn||_.minFilter!==qr&&_.minFilter!==ss||_.type===fi&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(x,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Xe(x,_){let O=!1;x.__webglInit===void 0&&(x.__webglInit=!0,_.addEventListener("dispose",w));const W=_.source;let q=h.get(W);q===void 0&&(q={},h.set(W,q));const j=X(_);if(j!==x.__cacheKey){q[j]===void 0&&(q[j]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,O=!0),q[j].usedTimes++;const ye=q[x.__cacheKey];ye!==void 0&&(q[x.__cacheKey].usedTimes--,ye.usedTimes===0&&S(_)),x.__cacheKey=j,x.__webglTexture=q[j].texture}return O}function ae(x,_,O){let W=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(W=n.TEXTURE_3D);const q=Xe(x,_),j=_.source;t.bindTexture(W,x.__webglTexture,n.TEXTURE0+O);const ye=i.get(j);if(j.version!==ye.__version||q===!0){t.activeTexture(n.TEXTURE0+O);const fe=lt.getPrimaries(lt.workingColorSpace),xe=_.colorSpace===Pi?null:lt.getPrimaries(_.colorSpace),Ne=_.colorSpace===Pi||fe===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let he=y(_.image,!1,s.maxTextureSize);he=le(_,he);const Te=r.convert(_.format,_.colorSpace),Ue=r.convert(_.type);let ke=R(_.internalFormat,Te,Ue,_.colorSpace,_.isVideoTexture);Ie(W,_);let be;const Ve=_.mipmaps,je=_.isVideoTexture!==!0,ct=ye.__version===void 0||q===!0,z=j.dataReady,Ae=I(_,he);if(_.isDepthTexture)ke=b(_.format===Zs,_.type),ct&&(je?t.texStorage2D(n.TEXTURE_2D,1,ke,he.width,he.height):t.texImage2D(n.TEXTURE_2D,0,ke,he.width,he.height,0,Te,Ue,null));else if(_.isDataTexture)if(Ve.length>0){je&&ct&&t.texStorage2D(n.TEXTURE_2D,Ae,ke,Ve[0].width,Ve[0].height);for(let N=0,D=Ve.length;N<D;N++)be=Ve[N],je?z&&t.texSubImage2D(n.TEXTURE_2D,N,0,0,be.width,be.height,Te,Ue,be.data):t.texImage2D(n.TEXTURE_2D,N,ke,be.width,be.height,0,Te,Ue,be.data);_.generateMipmaps=!1}else je?(ct&&t.texStorage2D(n.TEXTURE_2D,Ae,ke,he.width,he.height),z&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,he.width,he.height,Te,Ue,he.data)):t.texImage2D(n.TEXTURE_2D,0,ke,he.width,he.height,0,Te,Ue,he.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){je&&ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ae,ke,Ve[0].width,Ve[0].height,he.depth);for(let N=0,D=Ve.length;N<D;N++)if(be=Ve[N],_.format!==Un)if(Te!==null)if(je){if(z)if(_.layerUpdates.size>0){const se=Zu(be.width,be.height,_.format,_.type);for(const de of _.layerUpdates){const Oe=be.data.subarray(de*se/be.data.BYTES_PER_ELEMENT,(de+1)*se/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,N,0,0,de,be.width,be.height,1,Te,Oe)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,N,0,0,0,be.width,be.height,he.depth,Te,be.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,N,ke,be.width,be.height,he.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else je?z&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,N,0,0,0,be.width,be.height,he.depth,Te,Ue,be.data):t.texImage3D(n.TEXTURE_2D_ARRAY,N,ke,be.width,be.height,he.depth,0,Te,Ue,be.data)}else{je&&ct&&t.texStorage2D(n.TEXTURE_2D,Ae,ke,Ve[0].width,Ve[0].height);for(let N=0,D=Ve.length;N<D;N++)be=Ve[N],_.format!==Un?Te!==null?je?z&&t.compressedTexSubImage2D(n.TEXTURE_2D,N,0,0,be.width,be.height,Te,be.data):t.compressedTexImage2D(n.TEXTURE_2D,N,ke,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?z&&t.texSubImage2D(n.TEXTURE_2D,N,0,0,be.width,be.height,Te,Ue,be.data):t.texImage2D(n.TEXTURE_2D,N,ke,be.width,be.height,0,Te,Ue,be.data)}else if(_.isDataArrayTexture)if(je){if(ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ae,ke,he.width,he.height,he.depth),z)if(_.layerUpdates.size>0){const N=Zu(he.width,he.height,_.format,_.type);for(const D of _.layerUpdates){const se=he.data.subarray(D*N/he.data.BYTES_PER_ELEMENT,(D+1)*N/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,D,he.width,he.height,1,Te,Ue,se)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Te,Ue,he.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ke,he.width,he.height,he.depth,0,Te,Ue,he.data);else if(_.isData3DTexture)je?(ct&&t.texStorage3D(n.TEXTURE_3D,Ae,ke,he.width,he.height,he.depth),z&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Te,Ue,he.data)):t.texImage3D(n.TEXTURE_3D,0,ke,he.width,he.height,he.depth,0,Te,Ue,he.data);else if(_.isFramebufferTexture){if(ct)if(je)t.texStorage2D(n.TEXTURE_2D,Ae,ke,he.width,he.height);else{let N=he.width,D=he.height;for(let se=0;se<Ae;se++)t.texImage2D(n.TEXTURE_2D,se,ke,N,D,0,Te,Ue,null),N>>=1,D>>=1}}else if(Ve.length>0){if(je&&ct){const N=Q(Ve[0]);t.texStorage2D(n.TEXTURE_2D,Ae,ke,N.width,N.height)}for(let N=0,D=Ve.length;N<D;N++)be=Ve[N],je?z&&t.texSubImage2D(n.TEXTURE_2D,N,0,0,Te,Ue,be):t.texImage2D(n.TEXTURE_2D,N,ke,Te,Ue,be);_.generateMipmaps=!1}else if(je){if(ct){const N=Q(he);t.texStorage2D(n.TEXTURE_2D,Ae,ke,N.width,N.height)}z&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Te,Ue,he)}else t.texImage2D(n.TEXTURE_2D,0,ke,Te,Ue,he);g(_)&&f(W),ye.__version=j.version,_.onUpdate&&_.onUpdate(_)}x.__version=_.version}function ve(x,_,O){if(_.image.length!==6)return;const W=Xe(x,_),q=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,x.__webglTexture,n.TEXTURE0+O);const j=i.get(q);if(q.version!==j.__version||W===!0){t.activeTexture(n.TEXTURE0+O);const ye=lt.getPrimaries(lt.workingColorSpace),fe=_.colorSpace===Pi?null:lt.getPrimaries(_.colorSpace),xe=_.colorSpace===Pi||ye===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Ne=_.isCompressedTexture||_.image[0].isCompressedTexture,he=_.image[0]&&_.image[0].isDataTexture,Te=[];for(let D=0;D<6;D++)!Ne&&!he?Te[D]=y(_.image[D],!0,s.maxCubemapSize):Te[D]=he?_.image[D].image:_.image[D],Te[D]=le(_,Te[D]);const Ue=Te[0],ke=r.convert(_.format,_.colorSpace),be=r.convert(_.type),Ve=R(_.internalFormat,ke,be,_.colorSpace),je=_.isVideoTexture!==!0,ct=j.__version===void 0||W===!0,z=q.dataReady;let Ae=I(_,Ue);Ie(n.TEXTURE_CUBE_MAP,_);let N;if(Ne){je&&ct&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,Ve,Ue.width,Ue.height);for(let D=0;D<6;D++){N=Te[D].mipmaps;for(let se=0;se<N.length;se++){const de=N[se];_.format!==Un?ke!==null?je?z&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,se,0,0,de.width,de.height,ke,de.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,se,Ve,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):je?z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,se,0,0,de.width,de.height,ke,be,de.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,se,Ve,de.width,de.height,0,ke,be,de.data)}}}else{if(N=_.mipmaps,je&&ct){N.length>0&&Ae++;const D=Q(Te[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,Ve,D.width,D.height)}for(let D=0;D<6;D++)if(he){je?z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,0,0,Te[D].width,Te[D].height,ke,be,Te[D].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,Ve,Te[D].width,Te[D].height,0,ke,be,Te[D].data);for(let se=0;se<N.length;se++){const Oe=N[se].image[D].image;je?z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,se+1,0,0,Oe.width,Oe.height,ke,be,Oe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,se+1,Ve,Oe.width,Oe.height,0,ke,be,Oe.data)}}else{je?z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,0,0,ke,be,Te[D]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,Ve,ke,be,Te[D]);for(let se=0;se<N.length;se++){const de=N[se];je?z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,se+1,0,0,ke,be,de.image[D]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,se+1,Ve,ke,be,de.image[D])}}}g(_)&&f(n.TEXTURE_CUBE_MAP),j.__version=q.version,_.onUpdate&&_.onUpdate(_)}x.__version=_.version}function Re(x,_,O,W,q,j){const ye=r.convert(O.format,O.colorSpace),fe=r.convert(O.type),xe=R(O.internalFormat,ye,fe,O.colorSpace),Ne=i.get(_),he=i.get(O);if(he.__renderTarget=_,!Ne.__hasExternalTextures){const Te=Math.max(1,_.width>>j),Ue=Math.max(1,_.height>>j);q===n.TEXTURE_3D||q===n.TEXTURE_2D_ARRAY?t.texImage3D(q,j,xe,Te,Ue,_.depth,0,ye,fe,null):t.texImage2D(q,j,xe,Te,Ue,0,ye,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,x),J(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,q,he.__webglTexture,0,ee(_)):(q===n.TEXTURE_2D||q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,q,he.__webglTexture,j),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ee(x,_,O){if(n.bindRenderbuffer(n.RENDERBUFFER,x),_.depthBuffer){const W=_.depthTexture,q=W&&W.isDepthTexture?W.type:null,j=b(_.stencilBuffer,q),ye=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=ee(_);J(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,j,_.width,_.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,j,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,j,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ye,n.RENDERBUFFER,x)}else{const W=_.textures;for(let q=0;q<W.length;q++){const j=W[q],ye=r.convert(j.format,j.colorSpace),fe=r.convert(j.type),xe=R(j.internalFormat,ye,fe,j.colorSpace),Ne=ee(_);O&&J(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,xe,_.width,_.height):J(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ne,xe,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,xe,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Be(x,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,x),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const W=i.get(_.depthTexture);W.__renderTarget=_,(!W.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),ne(_.depthTexture,0);const q=W.__webglTexture,j=ee(_);if(_.depthTexture.format===Ws)J(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,q,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,q,0);else if(_.depthTexture.format===Zs)J(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,q,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function Fe(x){const _=i.get(x),O=x.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==x.depthTexture){const W=x.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),W){const q=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,W.removeEventListener("dispose",q)};W.addEventListener("dispose",q),_.__depthDisposeCallback=q}_.__boundDepthTexture=W}if(x.depthTexture&&!_.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Be(_.__webglFramebuffer,x)}else if(O){_.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[W]),_.__webglDepthbuffer[W]===void 0)_.__webglDepthbuffer[W]=n.createRenderbuffer(),Ee(_.__webglDepthbuffer[W],x,!1);else{const q=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=_.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,q,n.RENDERBUFFER,j)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),Ee(_.__webglDepthbuffer,x,!1);else{const W=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,W,n.RENDERBUFFER,q)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function $e(x,_,O){const W=i.get(x);_!==void 0&&Re(W.__webglFramebuffer,x,x.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&Fe(x)}function yt(x){const _=x.texture,O=i.get(x),W=i.get(_);x.addEventListener("dispose",A);const q=x.textures,j=x.isWebGLCubeRenderTarget===!0,ye=q.length>1;if(ye||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=_.version,a.memory.textures++),j){O.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[fe]=[];for(let xe=0;xe<_.mipmaps.length;xe++)O.__webglFramebuffer[fe][xe]=n.createFramebuffer()}else O.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let fe=0;fe<_.mipmaps.length;fe++)O.__webglFramebuffer[fe]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(ye)for(let fe=0,xe=q.length;fe<xe;fe++){const Ne=i.get(q[fe]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=n.createTexture(),a.memory.textures++)}if(x.samples>0&&J(x)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let fe=0;fe<q.length;fe++){const xe=q[fe];O.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[fe]);const Ne=r.convert(xe.format,xe.colorSpace),he=r.convert(xe.type),Te=R(xe.internalFormat,Ne,he,xe.colorSpace,x.isXRRenderTarget===!0),Ue=ee(x);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue,Te,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,O.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),x.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),Ee(O.__webglDepthRenderbuffer,x,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),Ie(n.TEXTURE_CUBE_MAP,_);for(let fe=0;fe<6;fe++)if(_.mipmaps&&_.mipmaps.length>0)for(let xe=0;xe<_.mipmaps.length;xe++)Re(O.__webglFramebuffer[fe][xe],x,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,xe);else Re(O.__webglFramebuffer[fe],x,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);g(_)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let fe=0,xe=q.length;fe<xe;fe++){const Ne=q[fe],he=i.get(Ne);t.bindTexture(n.TEXTURE_2D,he.__webglTexture),Ie(n.TEXTURE_2D,Ne),Re(O.__webglFramebuffer,x,Ne,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,0),g(Ne)&&f(n.TEXTURE_2D)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(fe=x.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,W.__webglTexture),Ie(fe,_),_.mipmaps&&_.mipmaps.length>0)for(let xe=0;xe<_.mipmaps.length;xe++)Re(O.__webglFramebuffer[xe],x,_,n.COLOR_ATTACHMENT0,fe,xe);else Re(O.__webglFramebuffer,x,_,n.COLOR_ATTACHMENT0,fe,0);g(_)&&f(fe),t.unbindTexture()}x.depthBuffer&&Fe(x)}function P(x){const _=x.textures;for(let O=0,W=_.length;O<W;O++){const q=_[O];if(g(q)){const j=C(x),ye=i.get(q).__webglTexture;t.bindTexture(j,ye),f(j),t.unbindTexture()}}}const k=[],E=[];function oe(x){if(x.samples>0){if(J(x)===!1){const _=x.textures,O=x.width,W=x.height;let q=n.COLOR_BUFFER_BIT;const j=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=i.get(x),fe=_.length>1;if(fe)for(let xe=0;xe<_.length;xe++)t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let xe=0;xe<_.length;xe++){if(x.resolveDepthBuffer&&(x.depthBuffer&&(q|=n.DEPTH_BUFFER_BIT),x.stencilBuffer&&x.resolveStencilBuffer&&(q|=n.STENCIL_BUFFER_BIT)),fe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ye.__webglColorRenderbuffer[xe]);const Ne=i.get(_[xe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ne,0)}n.blitFramebuffer(0,0,O,W,0,0,O,W,q,n.NEAREST),l===!0&&(k.length=0,E.length=0,k.push(n.COLOR_ATTACHMENT0+xe),x.depthBuffer&&x.resolveDepthBuffer===!1&&(k.push(j),E.push(j),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,E)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,k))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let xe=0;xe<_.length;xe++){t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,ye.__webglColorRenderbuffer[xe]);const Ne=i.get(_[xe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,Ne,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(x.depthBuffer&&x.resolveDepthBuffer===!1&&l){const _=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function ee(x){return Math.min(s.maxSamples,x.samples)}function J(x){const _=i.get(x);return x.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function te(x){const _=a.render.frame;u.get(x)!==_&&(u.set(x,_),x.update())}function le(x,_){const O=x.colorSpace,W=x.format,q=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||O!==Js&&O!==Pi&&(lt.getTransfer(O)===bt?(W!==Un||q!==vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),_}function Q(x){return typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement?(c.width=x.naturalWidth||x.width,c.height=x.naturalHeight||x.height):typeof VideoFrame<"u"&&x instanceof VideoFrame?(c.width=x.displayWidth,c.height=x.displayHeight):(c.width=x.width,c.height=x.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=F,this.setTexture2D=ne,this.setTexture2DArray=K,this.setTexture3D=ie,this.setTextureCube=V,this.rebindTextures=$e,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=J}function p1(n,e){function t(i,s=Pi){let r;const a=lt.getTransfer(s);if(i===vi)return n.UNSIGNED_BYTE;if(i===gc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===_c)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Kf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===qf)return n.BYTE;if(i===Yf)return n.SHORT;if(i===Ur)return n.UNSIGNED_SHORT;if(i===mc)return n.INT;if(i===cs)return n.UNSIGNED_INT;if(i===fi)return n.FLOAT;if(i===zr)return n.HALF_FLOAT;if(i===Zf)return n.ALPHA;if(i===Jf)return n.RGB;if(i===Un)return n.RGBA;if(i===Qf)return n.LUMINANCE;if(i===eh)return n.LUMINANCE_ALPHA;if(i===Ws)return n.DEPTH_COMPONENT;if(i===Zs)return n.DEPTH_STENCIL;if(i===th)return n.RED;if(i===vc)return n.RED_INTEGER;if(i===nh)return n.RG;if(i===xc)return n.RG_INTEGER;if(i===yc)return n.RGBA_INTEGER;if(i===ya||i===ba||i===Ma||i===Sa)if(a===bt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ya)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ya)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ba)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ma)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Sa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ml||i===Sl||i===El||i===Tl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ml)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Sl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===El)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Tl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Al||i===wl||i===Cl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Al||i===wl)return a===bt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Cl)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Rl||i===Pl||i===Dl||i===Ll||i===Il||i===Ul||i===Nl||i===Fl||i===Ol||i===Bl||i===kl||i===zl||i===Hl||i===Vl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Rl)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Pl)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Dl)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ll)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Il)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ul)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Nl)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Fl)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ol)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Bl)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===kl)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===zl)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Hl)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Vl)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ea||i===Gl||i===Wl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ea)return a===bt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Gl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Wl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ih||i===Xl||i===$l||i===jl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ea)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Xl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===$l)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===jl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ks?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const m1={type:"move"};class jo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Di,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Di,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Di,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const y of e.hand.values()){const g=t.getJointPose(y,i),f=this._getHandJoint(c,y);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,v=.005;c.inputState.pinching&&h>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(m1)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Di;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const g1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_1=`
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

}`;class v1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new sn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Bi({vertexShader:g1,fragmentShader:_1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ut(new er(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class x1 extends hs{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,v=null;const y=new v1,g=t.getContextAttributes();let f=null,C=null;const R=[],b=[],I=new Ge;let w=null;const A=new Tn;A.viewport=new Rt;const L=new Tn;L.viewport=new Rt;const S=[A,L],M=new kx;let U=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let ve=R[ae];return ve===void 0&&(ve=new jo,R[ae]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(ae){let ve=R[ae];return ve===void 0&&(ve=new jo,R[ae]=ve),ve.getGripSpace()},this.getHand=function(ae){let ve=R[ae];return ve===void 0&&(ve=new jo,R[ae]=ve),ve.getHandSpace()};function B(ae){const ve=b.indexOf(ae.inputSource);if(ve===-1)return;const Re=R[ve];Re!==void 0&&(Re.update(ae.inputSource,ae.frame,c||a),Re.dispatchEvent({type:ae.type,data:ae.inputSource}))}function X(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",ne);for(let ae=0;ae<R.length;ae++){const ve=b[ae];ve!==null&&(b[ae]=null,R[ae].disconnect(ve))}U=null,F=null,y.reset(),e.setRenderTarget(f),p=null,h=null,d=null,s=null,C=null,Xe.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){r=ae,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){o=ae,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ae){c=ae},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(ae){if(s=ae,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",X),s.addEventListener("inputsourceschange",ne),g.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(I),s.enabledFeatures!==void 0&&s.enabledFeatures.includes("layers")){let Re=null,Ee=null,Be=null;g.depth&&(Be=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Re=g.stencil?Zs:Ws,Ee=g.stencil?Ks:cs);const Fe={colorFormat:t.RGBA8,depthFormat:Be,scaleFactor:r};d=new XRWebGLBinding(s,t),h=d.createProjectionLayer(Fe),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),C=new us(h.textureWidth,h.textureHeight,{format:Un,type:vi,depthTexture:new vh(h.textureWidth,h.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,Re),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}else{const Re={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Re),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),C=new us(p.framebufferWidth,p.framebufferHeight,{format:Un,type:vi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}C.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Xe.setContext(s),Xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function ne(ae){for(let ve=0;ve<ae.removed.length;ve++){const Re=ae.removed[ve],Ee=b.indexOf(Re);Ee>=0&&(b[Ee]=null,R[Ee].disconnect(Re))}for(let ve=0;ve<ae.added.length;ve++){const Re=ae.added[ve];let Ee=b.indexOf(Re);if(Ee===-1){for(let Fe=0;Fe<R.length;Fe++)if(Fe>=b.length){b.push(Re),Ee=Fe;break}else if(b[Fe]===null){b[Fe]=Re,Ee=Fe;break}if(Ee===-1)break}const Be=R[Ee];Be&&Be.connect(Re)}}const K=new $,ie=new $;function V(ae,ve,Re){K.setFromMatrixPosition(ve.matrixWorld),ie.setFromMatrixPosition(Re.matrixWorld);const Ee=K.distanceTo(ie),Be=ve.projectionMatrix.elements,Fe=Re.projectionMatrix.elements,$e=Be[14]/(Be[10]-1),yt=Be[14]/(Be[10]+1),P=(Be[9]+1)/Be[5],k=(Be[9]-1)/Be[5],E=(Be[8]-1)/Be[0],oe=(Fe[8]+1)/Fe[0],ee=$e*E,J=$e*oe,te=Ee/(-E+oe),le=te*-E;if(ve.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(le),ae.translateZ(te),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),Be[10]===-1)ae.projectionMatrix.copy(ve.projectionMatrix),ae.projectionMatrixInverse.copy(ve.projectionMatrixInverse);else{const Q=$e+te,x=yt+te,_=ee-le,O=J+(Ee-le),W=P*yt/x*Q,q=k*yt/x*Q;ae.projectionMatrix.makePerspective(_,O,W,q,Q,x),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function me(ae,ve){ve===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(ve.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(s===null)return;let ve=ae.near,Re=ae.far;y.texture!==null&&(y.depthNear>0&&(ve=y.depthNear),y.depthFar>0&&(Re=y.depthFar)),M.near=L.near=A.near=ve,M.far=L.far=A.far=Re,(U!==M.near||F!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),U=M.near,F=M.far),A.layers.mask=ae.layers.mask|2,L.layers.mask=ae.layers.mask|4,M.layers.mask=A.layers.mask|L.layers.mask;const Ee=ae.parent,Be=M.cameras;me(M,Ee);for(let Fe=0;Fe<Be.length;Fe++)me(Be[Fe],Ee);Be.length===2?V(M,A,L):M.projectionMatrix.copy(A.projectionMatrix),Me(ae,M,Ee)};function Me(ae,ve,Re){Re===null?ae.matrix.copy(ve.matrixWorld):(ae.matrix.copy(Re.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(ve.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(ve.projectionMatrix),ae.projectionMatrixInverse.copy(ve.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=ql*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(ae){l=ae,h!==null&&(h.fixedFoveation=ae),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ae)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(M)};let Se=null;function Ie(ae,ve){if(u=ve.getViewerPose(c||a),v=ve,u!==null){const Re=u.views;p!==null&&(e.setRenderTargetFramebuffer(C,p.framebuffer),e.setRenderTarget(C));let Ee=!1;Re.length!==M.cameras.length&&(M.cameras.length=0,Ee=!0);for(let Fe=0;Fe<Re.length;Fe++){const $e=Re[Fe];let yt=null;if(p!==null)yt=p.getViewport($e);else{const k=d.getViewSubImage(h,$e);yt=k.viewport,Fe===0&&(e.setRenderTargetTextures(C,k.colorTexture,h.ignoreDepthValues?void 0:k.depthStencilTexture),e.setRenderTarget(C))}let P=S[Fe];P===void 0&&(P=new Tn,P.layers.enable(Fe),P.viewport=new Rt,S[Fe]=P),P.matrix.fromArray($e.transform.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale),P.projectionMatrix.fromArray($e.projectionMatrix),P.projectionMatrixInverse.copy(P.projectionMatrix).invert(),P.viewport.set(yt.x,yt.y,yt.width,yt.height),Fe===0&&(M.matrix.copy(P.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Ee===!0&&M.cameras.push(P)}const Be=s.enabledFeatures;if(Be&&Be.includes("depth-sensing")){const Fe=d.getDepthInformation(Re[0]);Fe&&Fe.isValid&&Fe.texture&&y.init(e,Fe,s.renderState)}}for(let Re=0;Re<R.length;Re++){const Ee=b[Re],Be=R[Re];Ee!==null&&Be!==void 0&&Be.update(Ee,ve,c||a)}Se&&Se(ae,ve),ve.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ve}),v=null}const Xe=new bh;Xe.setAnimationLoop(Ie),this.setAnimationLoop=function(ae){Se=ae},this.dispose=function(){}}}const Zi=new Jn,y1=new Pt;function b1(n,e){function t(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function i(g,f){f.color.getRGB(g.fogColor.value,mh(n)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function s(g,f,C,R,b){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(g,f):f.isMeshToonMaterial?(r(g,f),d(g,f)):f.isMeshPhongMaterial?(r(g,f),u(g,f)):f.isMeshStandardMaterial?(r(g,f),h(g,f),f.isMeshPhysicalMaterial&&p(g,f,b)):f.isMeshMatcapMaterial?(r(g,f),v(g,f)):f.isMeshDepthMaterial?r(g,f):f.isMeshDistanceMaterial?(r(g,f),y(g,f)):f.isMeshNormalMaterial?r(g,f):f.isLineBasicMaterial?(a(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?l(g,f,C,R):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,t(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===un&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,t(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===un&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,t(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,t(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const C=e.get(f),R=C.envMap,b=C.envMapRotation;R&&(g.envMap.value=R,Zi.copy(b),Zi.x*=-1,Zi.y*=-1,Zi.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Zi.y*=-1,Zi.z*=-1),g.envMapRotation.value.setFromMatrix4(y1.makeRotationFromEuler(Zi)),g.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,g.aoMapTransform))}function a(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,C,R){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*C,g.scale.value=R*.5,f.map&&(g.map.value=f.map,t(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function u(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function d(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function h(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,C){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===un&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=C.texture,g.transmissionSamplerSize.value.set(C.width,C.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,f){f.matcap&&(g.matcap.value=f.matcap)}function y(g,f){const C=e.get(f).light;g.referencePosition.value.setFromMatrixPosition(C.matrixWorld),g.nearDistance.value=C.shadow.camera.near,g.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function M1(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(C,R){const b=R.program;i.uniformBlockBinding(C,b)}function c(C,R){let b=s[C.id];b===void 0&&(v(C),b=u(C),s[C.id]=b,C.addEventListener("dispose",g));const I=R.program;i.updateUBOMapping(C,I);const w=e.render.frame;r[C.id]!==w&&(h(C),r[C.id]=w)}function u(C){const R=d();C.__bindingPointIndex=R;const b=n.createBuffer(),I=C.__size,w=C.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,I,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,R,b),b}function d(){for(let C=0;C<o;C++)if(a.indexOf(C)===-1)return a.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(C){const R=s[C.id],b=C.uniforms,I=C.__cache;n.bindBuffer(n.UNIFORM_BUFFER,R);for(let w=0,A=b.length;w<A;w++){const L=Array.isArray(b[w])?b[w]:[b[w]];for(let S=0,M=L.length;S<M;S++){const U=L[S];if(p(U,w,S,I)===!0){const F=U.__offset,B=Array.isArray(U.value)?U.value:[U.value];let X=0;for(let ne=0;ne<B.length;ne++){const K=B[ne],ie=y(K);typeof K=="number"||typeof K=="boolean"?(U.__data[0]=K,n.bufferSubData(n.UNIFORM_BUFFER,F+X,U.__data)):K.isMatrix3?(U.__data[0]=K.elements[0],U.__data[1]=K.elements[1],U.__data[2]=K.elements[2],U.__data[3]=0,U.__data[4]=K.elements[3],U.__data[5]=K.elements[4],U.__data[6]=K.elements[5],U.__data[7]=0,U.__data[8]=K.elements[6],U.__data[9]=K.elements[7],U.__data[10]=K.elements[8],U.__data[11]=0):(K.toArray(U.__data,X),X+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,U.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(C,R,b,I){const w=C.value,A=R+"_"+b;if(I[A]===void 0)return typeof w=="number"||typeof w=="boolean"?I[A]=w:I[A]=w.clone(),!0;{const L=I[A];if(typeof w=="number"||typeof w=="boolean"){if(L!==w)return I[A]=w,!0}else if(L.equals(w)===!1)return L.copy(w),!0}return!1}function v(C){const R=C.uniforms;let b=0;const I=16;for(let A=0,L=R.length;A<L;A++){const S=Array.isArray(R[A])?R[A]:[R[A]];for(let M=0,U=S.length;M<U;M++){const F=S[M],B=Array.isArray(F.value)?F.value:[F.value];for(let X=0,ne=B.length;X<ne;X++){const K=B[X],ie=y(K),V=b%I,me=V%ie.boundary,Me=V+me;b+=me,Me!==0&&I-Me<ie.storage&&(b+=I-Me),F.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=b,b+=ie.storage}}}const w=b%I;return w>0&&(b+=I-w),C.__size=b,C.__cache={},this}function y(C){const R={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(R.boundary=4,R.storage=4):C.isVector2?(R.boundary=8,R.storage=8):C.isVector3||C.isColor?(R.boundary=16,R.storage=12):C.isVector4?(R.boundary=16,R.storage=16):C.isMatrix3?(R.boundary=48,R.storage=48):C.isMatrix4?(R.boundary=64,R.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),R}function g(C){const R=C.target;R.removeEventListener("dispose",g);const b=a.indexOf(R.__bindingPointIndex);a.splice(b,1),n.deleteBuffer(s[R.id]),delete s[R.id],delete r[R.id]}function f(){for(const C in s)n.deleteBuffer(s[C]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}class S1{constructor(e={}){const{canvas:t=Qv(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const v=new Uint32Array(4),y=new Int32Array(4);let g=null,f=null;const C=[],R=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=cn,this.toneMapping=Ui,this.toneMappingExposure=1;const b=this;let I=!1,w=0,A=0,L=null,S=-1,M=null;const U=new Rt,F=new Rt;let B=null;const X=new rt(0);let ne=0,K=t.width,ie=t.height,V=1,me=null,Me=null;const Se=new Rt(0,0,K,ie),Ie=new Rt(0,0,K,ie);let Xe=!1;const ae=new Mc;let ve=!1,Re=!1;this.transmissionResolutionScale=1;const Ee=new Pt,Be=new Pt,Fe=new $,$e=new Rt,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let P=!1;function k(){return L===null?V:1}let E=i;function oe(T,H){return t.getContext(T,H)}try{const T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${pc}`),t.addEventListener("webglcontextlost",D,!1),t.addEventListener("webglcontextrestored",se,!1),t.addEventListener("webglcontextcreationerror",de,!1),E===null){const H="webgl2";if(E=oe(H,T),E===null)throw oe(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ee,J,te,le,Q,x,_,O,W,q,j,ye,fe,xe,Ne,he,Te,Ue,ke,be,Ve,je,ct,z;function Ae(){ee=new LM(E),ee.init(),je=new p1(E,ee),J=new AM(E,ee,e,je),te=new f1(E,ee),J.reverseDepthBuffer&&h&&te.buffers.depth.setReversed(!0),le=new NM(E),Q=new QS,x=new h1(E,ee,te,Q,J,je,le),_=new CM(b),O=new DM(b),W=new Vx(E),ct=new EM(E,W),q=new IM(E,W,le,ct),j=new OM(E,q,W,le),ke=new FM(E,J,x),he=new wM(Q),ye=new JS(b,_,O,ee,J,ct,he),fe=new b1(b,Q),xe=new t1,Ne=new o1(ee),Ue=new SM(b,_,O,te,j,p,l),Te=new u1(b,j,J),z=new M1(E,le,J,te),be=new TM(E,ee,le),Ve=new UM(E,ee,le),le.programs=ye.programs,b.capabilities=J,b.extensions=ee,b.properties=Q,b.renderLists=xe,b.shadowMap=Te,b.state=te,b.info=le}Ae();const N=new x1(b,E);this.xr=N,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){const T=ee.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ee.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(T){T!==void 0&&(V=T,this.setSize(K,ie,!1))},this.getSize=function(T){return T.set(K,ie)},this.setSize=function(T,H,Y=!0){if(N.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=T,ie=H,t.width=Math.floor(T*V),t.height=Math.floor(H*V),Y===!0&&(t.style.width=T+"px",t.style.height=H+"px"),this.setViewport(0,0,T,H)},this.getDrawingBufferSize=function(T){return T.set(K*V,ie*V).floor()},this.setDrawingBufferSize=function(T,H,Y){K=T,ie=H,V=Y,t.width=Math.floor(T*Y),t.height=Math.floor(H*Y),this.setViewport(0,0,T,H)},this.getCurrentViewport=function(T){return T.copy(U)},this.getViewport=function(T){return T.copy(Se)},this.setViewport=function(T,H,Y,Z){T.isVector4?Se.set(T.x,T.y,T.z,T.w):Se.set(T,H,Y,Z),te.viewport(U.copy(Se).multiplyScalar(V).round())},this.getScissor=function(T){return T.copy(Ie)},this.setScissor=function(T,H,Y,Z){T.isVector4?Ie.set(T.x,T.y,T.z,T.w):Ie.set(T,H,Y,Z),te.scissor(F.copy(Ie).multiplyScalar(V).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(T){te.setScissorTest(Xe=T)},this.setOpaqueSort=function(T){me=T},this.setTransparentSort=function(T){Me=T},this.getClearColor=function(T){return T.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor.apply(Ue,arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha.apply(Ue,arguments)},this.clear=function(T=!0,H=!0,Y=!0){let Z=0;if(T){let G=!1;if(L!==null){const ge=L.texture.format;G=ge===yc||ge===xc||ge===vc}if(G){const ge=L.texture.type,Ce=ge===vi||ge===cs||ge===Ur||ge===Ks||ge===gc||ge===_c,De=Ue.getClearColor(),Le=Ue.getClearAlpha(),qe=De.r,Ke=De.g,ze=De.b;Ce?(v[0]=qe,v[1]=Ke,v[2]=ze,v[3]=Le,E.clearBufferuiv(E.COLOR,0,v)):(y[0]=qe,y[1]=Ke,y[2]=ze,y[3]=Le,E.clearBufferiv(E.COLOR,0,y))}else Z|=E.COLOR_BUFFER_BIT}H&&(Z|=E.DEPTH_BUFFER_BIT),Y&&(Z|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",D,!1),t.removeEventListener("webglcontextrestored",se,!1),t.removeEventListener("webglcontextcreationerror",de,!1),Ue.dispose(),xe.dispose(),Ne.dispose(),Q.dispose(),_.dispose(),O.dispose(),j.dispose(),ct.dispose(),z.dispose(),ye.dispose(),N.dispose(),N.removeEventListener("sessionstart",sr),N.removeEventListener("sessionend",vn),kn.stop()};function D(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function se(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const T=le.autoReset,H=Te.enabled,Y=Te.autoUpdate,Z=Te.needsUpdate,G=Te.type;Ae(),le.autoReset=T,Te.enabled=H,Te.autoUpdate=Y,Te.needsUpdate=Z,Te.type=G}function de(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Oe(T){const H=T.target;H.removeEventListener("dispose",Oe),ce(H)}function ce(T){nt(T),Q.remove(T)}function nt(T){const H=Q.get(T).programs;H!==void 0&&(H.forEach(function(Y){ye.releaseProgram(Y)}),T.isShaderMaterial&&ye.releaseShaderCache(T))}this.renderBufferDirect=function(T,H,Y,Z,G,ge){H===null&&(H=yt);const Ce=G.isMesh&&G.matrixWorld.determinant()<0,De=wh(T,H,Y,Z,G);te.setMaterial(Z,Ce);let Le=Y.index,qe=1;if(Z.wireframe===!0){if(Le=q.getWireframeAttribute(Y),Le===void 0)return;qe=2}const Ke=Y.drawRange,ze=Y.attributes.position;let at=Ke.start*qe,ft=(Ke.start+Ke.count)*qe;ge!==null&&(at=Math.max(at,ge.start*qe),ft=Math.min(ft,(ge.start+ge.count)*qe)),Le!==null?(at=Math.max(at,0),ft=Math.min(ft,Le.count)):ze!=null&&(at=Math.max(at,0),ft=Math.min(ft,ze.count));const Dt=ft-at;if(Dt<0||Dt===1/0)return;ct.setup(G,Z,De,Y,Le);let wt,ot=be;if(Le!==null&&(wt=W.get(Le),ot=Ve,ot.setIndex(wt)),G.isMesh)Z.wireframe===!0?(te.setLineWidth(Z.wireframeLinewidth*k()),ot.setMode(E.LINES)):ot.setMode(E.TRIANGLES);else if(G.isLine){let He=Z.linewidth;He===void 0&&(He=1),te.setLineWidth(He*k()),G.isLineSegments?ot.setMode(E.LINES):G.isLineLoop?ot.setMode(E.LINE_LOOP):ot.setMode(E.LINE_STRIP)}else G.isPoints?ot.setMode(E.POINTS):G.isSprite&&ot.setMode(E.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)ot.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(ee.get("WEBGL_multi_draw"))ot.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const He=G._multiDrawStarts,zt=G._multiDrawCounts,ht=G._multiDrawCount,Cn=Le?W.get(Le).bytesPerElement:1,gs=Q.get(Z).currentProgram.getUniforms();for(let fn=0;fn<ht;fn++)gs.setValue(E,"_gl_DrawID",fn),ot.render(He[fn]/Cn,zt[fn])}else if(G.isInstancedMesh)ot.renderInstances(at,Dt,G.count);else if(Y.isInstancedBufferGeometry){const He=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,zt=Math.min(Y.instanceCount,He);ot.renderInstances(at,Dt,zt)}else ot.render(at,Dt)};function it(T,H,Y){T.transparent===!0&&T.side===jn&&T.forceSinglePass===!1?(T.side=un,T.needsUpdate=!0,Gr(T,H,Y),T.side=Oi,T.needsUpdate=!0,Gr(T,H,Y),T.side=jn):Gr(T,H,Y)}this.compile=function(T,H,Y=null){Y===null&&(Y=T),f=Ne.get(Y),f.init(H),R.push(f),Y.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(f.pushLight(G),G.castShadow&&f.pushShadow(G))}),T!==Y&&T.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(f.pushLight(G),G.castShadow&&f.pushShadow(G))}),f.setupLights();const Z=new Set;return T.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ge=G.material;if(ge)if(Array.isArray(ge))for(let Ce=0;Ce<ge.length;Ce++){const De=ge[Ce];it(De,Y,G),Z.add(De)}else it(ge,Y,G),Z.add(ge)}),R.pop(),f=null,Z},this.compileAsync=function(T,H,Y=null){const Z=this.compile(T,H,Y);return new Promise(G=>{function ge(){if(Z.forEach(function(Ce){Q.get(Ce).currentProgram.isReady()&&Z.delete(Ce)}),Z.size===0){G(T);return}setTimeout(ge,10)}ee.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let Gt=null;function dn(T){Gt&&Gt(T)}function sr(){kn.stop()}function vn(){kn.start()}const kn=new bh;kn.setAnimationLoop(dn),typeof self<"u"&&kn.setContext(self),this.setAnimationLoop=function(T){Gt=T,N.setAnimationLoop(T),T===null?kn.stop():kn.start()},N.addEventListener("sessionstart",sr),N.addEventListener("sessionend",vn),this.render=function(T,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),N.enabled===!0&&N.isPresenting===!0&&(N.cameraAutoUpdate===!0&&N.updateCamera(H),H=N.getCamera()),T.isScene===!0&&T.onBeforeRender(b,T,H,L),f=Ne.get(T,R.length),f.init(H),R.push(f),Be.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),ae.setFromProjectionMatrix(Be),Re=this.localClippingEnabled,ve=he.init(this.clippingPlanes,Re),g=xe.get(T,C.length),g.init(),C.push(g),N.enabled===!0&&N.isPresenting===!0){const ge=b.xr.getDepthSensingMesh();ge!==null&&zi(ge,H,-1/0,b.sortObjects)}zi(T,H,0,b.sortObjects),g.finish(),b.sortObjects===!0&&g.sort(me,Me),P=N.enabled===!1||N.isPresenting===!1||N.hasDepthSensing()===!1,P&&Ue.addToRenderList(g,T),this.info.render.frame++,ve===!0&&he.beginShadows();const Y=f.state.shadowsArray;Te.render(Y,T,H),ve===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=g.opaque,G=g.transmissive;if(f.setupLights(),H.isArrayCamera){const ge=H.cameras;if(G.length>0)for(let Ce=0,De=ge.length;Ce<De;Ce++){const Le=ge[Ce];yi(Z,G,T,Le)}P&&Ue.render(T);for(let Ce=0,De=ge.length;Ce<De;Ce++){const Le=ge[Ce];Wt(g,T,Le,Le.viewport)}}else G.length>0&&yi(Z,G,T,H),P&&Ue.render(T),Wt(g,T,H);L!==null&&A===0&&(x.updateMultisampleRenderTarget(L),x.updateRenderTargetMipmap(L)),T.isScene===!0&&T.onAfterRender(b,T,H),ct.resetDefaultState(),S=-1,M=null,R.pop(),R.length>0?(f=R[R.length-1],ve===!0&&he.setGlobalState(b.clippingPlanes,f.state.camera)):f=null,C.pop(),C.length>0?g=C[C.length-1]:g=null};function zi(T,H,Y,Z){if(T.visible===!1)return;if(T.layers.test(H.layers)){if(T.isGroup)Y=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(H);else if(T.isLight)f.pushLight(T),T.castShadow&&f.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ae.intersectsSprite(T)){Z&&$e.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Be);const Ce=j.update(T),De=T.material;De.visible&&g.push(T,Ce,De,Y,$e.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ae.intersectsObject(T))){const Ce=j.update(T),De=T.material;if(Z&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),$e.copy(T.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),$e.copy(Ce.boundingSphere.center)),$e.applyMatrix4(T.matrixWorld).applyMatrix4(Be)),Array.isArray(De)){const Le=Ce.groups;for(let qe=0,Ke=Le.length;qe<Ke;qe++){const ze=Le[qe],at=De[ze.materialIndex];at&&at.visible&&g.push(T,Ce,at,Y,$e.z,ze)}}else De.visible&&g.push(T,Ce,De,Y,$e.z,null)}}const ge=T.children;for(let Ce=0,De=ge.length;Ce<De;Ce++)zi(ge[Ce],H,Y,Z)}function Wt(T,H,Y,Z){const G=T.opaque,ge=T.transmissive,Ce=T.transparent;f.setupLightsView(Y),ve===!0&&he.setGlobalState(b.clippingPlanes,Y),Z&&te.viewport(U.copy(Z)),G.length>0&&ps(G,H,Y),ge.length>0&&ps(ge,H,Y),Ce.length>0&&ps(Ce,H,Y),te.buffers.depth.setTest(!0),te.buffers.depth.setMask(!0),te.buffers.color.setMask(!0),te.setPolygonOffset(!1)}function yi(T,H,Y,Z){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[Z.id]===void 0&&(f.state.transmissionRenderTarget[Z.id]=new us(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float")?zr:vi,minFilter:ss,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace}));const ge=f.state.transmissionRenderTarget[Z.id],Ce=Z.viewport||U;ge.setSize(Ce.z*b.transmissionResolutionScale,Ce.w*b.transmissionResolutionScale);const De=b.getRenderTarget();b.setRenderTarget(ge),b.getClearColor(X),ne=b.getClearAlpha(),ne<1&&b.setClearColor(16777215,.5),b.clear(),P&&Ue.render(Y);const Le=b.toneMapping;b.toneMapping=Ui;const qe=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),f.setupLightsView(Z),ve===!0&&he.setGlobalState(b.clippingPlanes,Z),ps(T,Y,Z),x.updateMultisampleRenderTarget(ge),x.updateRenderTargetMipmap(ge),ee.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let ze=0,at=H.length;ze<at;ze++){const ft=H[ze],Dt=ft.object,wt=ft.geometry,ot=ft.material,He=ft.group;if(ot.side===jn&&Dt.layers.test(Z.layers)){const zt=ot.side;ot.side=un,ot.needsUpdate=!0,ms(Dt,Y,Z,wt,ot,He),ot.side=zt,ot.needsUpdate=!0,Ke=!0}}Ke===!0&&(x.updateMultisampleRenderTarget(ge),x.updateRenderTargetMipmap(ge))}b.setRenderTarget(De),b.setClearColor(X,ne),qe!==void 0&&(Z.viewport=qe),b.toneMapping=Le}function ps(T,H,Y){const Z=H.isScene===!0?H.overrideMaterial:null;for(let G=0,ge=T.length;G<ge;G++){const Ce=T[G],De=Ce.object,Le=Ce.geometry,qe=Z===null?Ce.material:Z,Ke=Ce.group;De.layers.test(Y.layers)&&ms(De,H,Y,Le,qe,Ke)}}function ms(T,H,Y,Z,G,ge){T.onBeforeRender(b,H,Y,Z,G,ge),T.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),G.onBeforeRender(b,H,Y,Z,T,ge),G.transparent===!0&&G.side===jn&&G.forceSinglePass===!1?(G.side=un,G.needsUpdate=!0,b.renderBufferDirect(Y,H,Z,G,T,ge),G.side=Oi,G.needsUpdate=!0,b.renderBufferDirect(Y,H,Z,G,T,ge),G.side=jn):b.renderBufferDirect(Y,H,Z,G,T,ge),T.onAfterRender(b,H,Y,Z,G,ge)}function Gr(T,H,Y){H.isScene!==!0&&(H=yt);const Z=Q.get(T),G=f.state.lights,ge=f.state.shadowsArray,Ce=G.state.version,De=ye.getParameters(T,G.state,ge,H,Y),Le=ye.getProgramCacheKey(De);let qe=Z.programs;Z.environment=T.isMeshStandardMaterial?H.environment:null,Z.fog=H.fog,Z.envMap=(T.isMeshStandardMaterial?O:_).get(T.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&T.envMap===null?H.environmentRotation:T.envMapRotation,qe===void 0&&(T.addEventListener("dispose",Oe),qe=new Map,Z.programs=qe);let Ke=qe.get(Le);if(Ke!==void 0){if(Z.currentProgram===Ke&&Z.lightsStateVersion===Ce)return Pc(T,De),Ke}else De.uniforms=ye.getUniforms(T),T.onBeforeCompile(De,b),Ke=ye.acquireProgram(De,Le),qe.set(Le,Ke),Z.uniforms=De.uniforms;const ze=Z.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(ze.clippingPlanes=he.uniform),Pc(T,De),Z.needsLights=Rh(T),Z.lightsStateVersion=Ce,Z.needsLights&&(ze.ambientLightColor.value=G.state.ambient,ze.lightProbe.value=G.state.probe,ze.directionalLights.value=G.state.directional,ze.directionalLightShadows.value=G.state.directionalShadow,ze.spotLights.value=G.state.spot,ze.spotLightShadows.value=G.state.spotShadow,ze.rectAreaLights.value=G.state.rectArea,ze.ltc_1.value=G.state.rectAreaLTC1,ze.ltc_2.value=G.state.rectAreaLTC2,ze.pointLights.value=G.state.point,ze.pointLightShadows.value=G.state.pointShadow,ze.hemisphereLights.value=G.state.hemi,ze.directionalShadowMap.value=G.state.directionalShadowMap,ze.directionalShadowMatrix.value=G.state.directionalShadowMatrix,ze.spotShadowMap.value=G.state.spotShadowMap,ze.spotLightMatrix.value=G.state.spotLightMatrix,ze.spotLightMap.value=G.state.spotLightMap,ze.pointShadowMap.value=G.state.pointShadowMap,ze.pointShadowMatrix.value=G.state.pointShadowMatrix),Z.currentProgram=Ke,Z.uniformsList=null,Ke}function Rc(T){if(T.uniformsList===null){const H=T.currentProgram.getUniforms();T.uniformsList=Aa.seqWithValue(H.seq,T.uniforms)}return T.uniformsList}function Pc(T,H){const Y=Q.get(T);Y.outputColorSpace=H.outputColorSpace,Y.batching=H.batching,Y.batchingColor=H.batchingColor,Y.instancing=H.instancing,Y.instancingColor=H.instancingColor,Y.instancingMorph=H.instancingMorph,Y.skinning=H.skinning,Y.morphTargets=H.morphTargets,Y.morphNormals=H.morphNormals,Y.morphColors=H.morphColors,Y.morphTargetsCount=H.morphTargetsCount,Y.numClippingPlanes=H.numClippingPlanes,Y.numIntersection=H.numClipIntersection,Y.vertexAlphas=H.vertexAlphas,Y.vertexTangents=H.vertexTangents,Y.toneMapping=H.toneMapping}function wh(T,H,Y,Z,G){H.isScene!==!0&&(H=yt),x.resetTextureUnits();const ge=H.fog,Ce=Z.isMeshStandardMaterial?H.environment:null,De=L===null?b.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Js,Le=(Z.isMeshStandardMaterial?O:_).get(Z.envMap||Ce),qe=Z.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ke=!!Y.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),ze=!!Y.morphAttributes.position,at=!!Y.morphAttributes.normal,ft=!!Y.morphAttributes.color;let Dt=Ui;Z.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Dt=b.toneMapping);const wt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ot=wt!==void 0?wt.length:0,He=Q.get(Z),zt=f.state.lights;if(ve===!0&&(Re===!0||T!==M)){const Kt=T===M&&Z.id===S;he.setState(Z,T,Kt)}let ht=!1;Z.version===He.__version?(He.needsLights&&He.lightsStateVersion!==zt.state.version||He.outputColorSpace!==De||G.isBatchedMesh&&He.batching===!1||!G.isBatchedMesh&&He.batching===!0||G.isBatchedMesh&&He.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&He.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&He.instancing===!1||!G.isInstancedMesh&&He.instancing===!0||G.isSkinnedMesh&&He.skinning===!1||!G.isSkinnedMesh&&He.skinning===!0||G.isInstancedMesh&&He.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&He.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&He.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&He.instancingMorph===!1&&G.morphTexture!==null||He.envMap!==Le||Z.fog===!0&&He.fog!==ge||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==he.numPlanes||He.numIntersection!==he.numIntersection)||He.vertexAlphas!==qe||He.vertexTangents!==Ke||He.morphTargets!==ze||He.morphNormals!==at||He.morphColors!==ft||He.toneMapping!==Dt||He.morphTargetsCount!==ot)&&(ht=!0):(ht=!0,He.__version=Z.version);let Cn=He.currentProgram;ht===!0&&(Cn=Gr(Z,H,G));let gs=!1,fn=!1,rr=!1;const Tt=Cn.getUniforms(),xn=He.uniforms;if(te.useProgram(Cn.program)&&(gs=!0,fn=!0,rr=!0),Z.id!==S&&(S=Z.id,fn=!0),gs||M!==T){te.buffers.depth.getReversed()?(Ee.copy(T.projectionMatrix),tx(Ee),nx(Ee),Tt.setValue(E,"projectionMatrix",Ee)):Tt.setValue(E,"projectionMatrix",T.projectionMatrix),Tt.setValue(E,"viewMatrix",T.matrixWorldInverse);const rn=Tt.map.cameraPosition;rn!==void 0&&rn.setValue(E,Fe.setFromMatrixPosition(T.matrixWorld)),J.logarithmicDepthBuffer&&Tt.setValue(E,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Tt.setValue(E,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,fn=!0,rr=!0)}if(G.isSkinnedMesh){Tt.setOptional(E,G,"bindMatrix"),Tt.setOptional(E,G,"bindMatrixInverse");const Kt=G.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),Tt.setValue(E,"boneTexture",Kt.boneTexture,x))}G.isBatchedMesh&&(Tt.setOptional(E,G,"batchingTexture"),Tt.setValue(E,"batchingTexture",G._matricesTexture,x),Tt.setOptional(E,G,"batchingIdTexture"),Tt.setValue(E,"batchingIdTexture",G._indirectTexture,x),Tt.setOptional(E,G,"batchingColorTexture"),G._colorsTexture!==null&&Tt.setValue(E,"batchingColorTexture",G._colorsTexture,x));const yn=Y.morphAttributes;if((yn.position!==void 0||yn.normal!==void 0||yn.color!==void 0)&&ke.update(G,Y,Cn),(fn||He.receiveShadow!==G.receiveShadow)&&(He.receiveShadow=G.receiveShadow,Tt.setValue(E,"receiveShadow",G.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(xn.envMap.value=Le,xn.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&H.environment!==null&&(xn.envMapIntensity.value=H.environmentIntensity),fn&&(Tt.setValue(E,"toneMappingExposure",b.toneMappingExposure),He.needsLights&&Ch(xn,rr),ge&&Z.fog===!0&&fe.refreshFogUniforms(xn,ge),fe.refreshMaterialUniforms(xn,Z,V,ie,f.state.transmissionRenderTarget[T.id]),Aa.upload(E,Rc(He),xn,x)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Aa.upload(E,Rc(He),xn,x),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Tt.setValue(E,"center",G.center),Tt.setValue(E,"modelViewMatrix",G.modelViewMatrix),Tt.setValue(E,"normalMatrix",G.normalMatrix),Tt.setValue(E,"modelMatrix",G.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const Kt=Z.uniformsGroups;for(let rn=0,io=Kt.length;rn<io;rn++){const Hi=Kt[rn];z.update(Hi,Cn),z.bind(Hi,Cn)}}return Cn}function Ch(T,H){T.ambientLightColor.needsUpdate=H,T.lightProbe.needsUpdate=H,T.directionalLights.needsUpdate=H,T.directionalLightShadows.needsUpdate=H,T.pointLights.needsUpdate=H,T.pointLightShadows.needsUpdate=H,T.spotLights.needsUpdate=H,T.spotLightShadows.needsUpdate=H,T.rectAreaLights.needsUpdate=H,T.hemisphereLights.needsUpdate=H}function Rh(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(T,H,Y){Q.get(T.texture).__webglTexture=H,Q.get(T.depthTexture).__webglTexture=Y;const Z=Q.get(T);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=Y===void 0,Z.__autoAllocateDepthBuffer||ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,H){const Y=Q.get(T);Y.__webglFramebuffer=H,Y.__useDefaultFramebuffer=H===void 0};const Ph=E.createFramebuffer();this.setRenderTarget=function(T,H=0,Y=0){L=T,w=H,A=Y;let Z=!0,G=null,ge=!1,Ce=!1;if(T){const Le=Q.get(T);if(Le.__useDefaultFramebuffer!==void 0)te.bindFramebuffer(E.FRAMEBUFFER,null),Z=!1;else if(Le.__webglFramebuffer===void 0)x.setupRenderTarget(T);else if(Le.__hasExternalTextures)x.rebindTextures(T,Q.get(T.texture).__webglTexture,Q.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const ze=T.depthTexture;if(Le.__boundDepthTexture!==ze){if(ze!==null&&Q.has(ze)&&(T.width!==ze.image.width||T.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");x.setupDepthRenderbuffer(T)}}const qe=T.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Ce=!0);const Ke=Q.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ke[H])?G=Ke[H][Y]:G=Ke[H],ge=!0):T.samples>0&&x.useMultisampledRTT(T)===!1?G=Q.get(T).__webglMultisampledFramebuffer:Array.isArray(Ke)?G=Ke[Y]:G=Ke,U.copy(T.viewport),F.copy(T.scissor),B=T.scissorTest}else U.copy(Se).multiplyScalar(V).floor(),F.copy(Ie).multiplyScalar(V).floor(),B=Xe;if(Y!==0&&(G=Ph),te.bindFramebuffer(E.FRAMEBUFFER,G)&&Z&&te.drawBuffers(T,G),te.viewport(U),te.scissor(F),te.setScissorTest(B),ge){const Le=Q.get(T.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+H,Le.__webglTexture,Y)}else if(Ce){const Le=Q.get(T.texture),qe=H;E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,Le.__webglTexture,Y,qe)}else if(T!==null&&Y!==0){const Le=Q.get(T.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Le.__webglTexture,Y)}S=-1},this.readRenderTargetPixels=function(T,H,Y,Z,G,ge,Ce){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=Q.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ce!==void 0&&(De=De[Ce]),De){te.bindFramebuffer(E.FRAMEBUFFER,De);try{const Le=T.texture,qe=Le.format,Ke=Le.type;if(!J.textureFormatReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!J.textureTypeReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=T.width-Z&&Y>=0&&Y<=T.height-G&&E.readPixels(H,Y,Z,G,je.convert(qe),je.convert(Ke),ge)}finally{const Le=L!==null?Q.get(L).__webglFramebuffer:null;te.bindFramebuffer(E.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(T,H,Y,Z,G,ge,Ce){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=Q.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ce!==void 0&&(De=De[Ce]),De){const Le=T.texture,qe=Le.format,Ke=Le.type;if(!J.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=T.width-Z&&Y>=0&&Y<=T.height-G){te.bindFramebuffer(E.FRAMEBUFFER,De);const ze=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,ze),E.bufferData(E.PIXEL_PACK_BUFFER,ge.byteLength,E.STREAM_READ),E.readPixels(H,Y,Z,G,je.convert(qe),je.convert(Ke),0);const at=L!==null?Q.get(L).__webglFramebuffer:null;te.bindFramebuffer(E.FRAMEBUFFER,at);const ft=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await ex(E,ft,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,ze),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,ge),E.deleteBuffer(ze),E.deleteSync(ft),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,H=null,Y=0){T.isTexture!==!0&&(Us("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,T=arguments[1]);const Z=Math.pow(2,-Y),G=Math.floor(T.image.width*Z),ge=Math.floor(T.image.height*Z),Ce=H!==null?H.x:0,De=H!==null?H.y:0;x.setTexture2D(T,0),E.copyTexSubImage2D(E.TEXTURE_2D,Y,0,0,Ce,De,G,ge),te.unbindTexture()};const Dh=E.createFramebuffer(),Lh=E.createFramebuffer();this.copyTextureToTexture=function(T,H,Y=null,Z=null,G=0,ge=null){T.isTexture!==!0&&(Us("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,T=arguments[1],H=arguments[2],ge=arguments[3]||0,Y=null),ge===null&&(G!==0?(Us("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ge=G,G=0):ge=0);let Ce,De,Le,qe,Ke,ze,at,ft,Dt;const wt=T.isCompressedTexture?T.mipmaps[ge]:T.image;if(Y!==null)Ce=Y.max.x-Y.min.x,De=Y.max.y-Y.min.y,Le=Y.isBox3?Y.max.z-Y.min.z:1,qe=Y.min.x,Ke=Y.min.y,ze=Y.isBox3?Y.min.z:0;else{const yn=Math.pow(2,-G);Ce=Math.floor(wt.width*yn),De=Math.floor(wt.height*yn),T.isDataArrayTexture?Le=wt.depth:T.isData3DTexture?Le=Math.floor(wt.depth*yn):Le=1,qe=0,Ke=0,ze=0}Z!==null?(at=Z.x,ft=Z.y,Dt=Z.z):(at=0,ft=0,Dt=0);const ot=je.convert(H.format),He=je.convert(H.type);let zt;H.isData3DTexture?(x.setTexture3D(H,0),zt=E.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(x.setTexture2DArray(H,0),zt=E.TEXTURE_2D_ARRAY):(x.setTexture2D(H,0),zt=E.TEXTURE_2D),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,H.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,H.unpackAlignment);const ht=E.getParameter(E.UNPACK_ROW_LENGTH),Cn=E.getParameter(E.UNPACK_IMAGE_HEIGHT),gs=E.getParameter(E.UNPACK_SKIP_PIXELS),fn=E.getParameter(E.UNPACK_SKIP_ROWS),rr=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,wt.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,wt.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,qe),E.pixelStorei(E.UNPACK_SKIP_ROWS,Ke),E.pixelStorei(E.UNPACK_SKIP_IMAGES,ze);const Tt=T.isDataArrayTexture||T.isData3DTexture,xn=H.isDataArrayTexture||H.isData3DTexture;if(T.isDepthTexture){const yn=Q.get(T),Kt=Q.get(H),rn=Q.get(yn.__renderTarget),io=Q.get(Kt.__renderTarget);te.bindFramebuffer(E.READ_FRAMEBUFFER,rn.__webglFramebuffer),te.bindFramebuffer(E.DRAW_FRAMEBUFFER,io.__webglFramebuffer);for(let Hi=0;Hi<Le;Hi++)Tt&&(E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Q.get(T).__webglTexture,G,ze+Hi),E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Q.get(H).__webglTexture,ge,Dt+Hi)),E.blitFramebuffer(qe,Ke,Ce,De,at,ft,Ce,De,E.DEPTH_BUFFER_BIT,E.NEAREST);te.bindFramebuffer(E.READ_FRAMEBUFFER,null),te.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else if(G!==0||T.isRenderTargetTexture||Q.has(T)){const yn=Q.get(T),Kt=Q.get(H);te.bindFramebuffer(E.READ_FRAMEBUFFER,Dh),te.bindFramebuffer(E.DRAW_FRAMEBUFFER,Lh);for(let rn=0;rn<Le;rn++)Tt?E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,yn.__webglTexture,G,ze+rn):E.framebufferTexture2D(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,yn.__webglTexture,G),xn?E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Kt.__webglTexture,ge,Dt+rn):E.framebufferTexture2D(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Kt.__webglTexture,ge),G!==0?E.blitFramebuffer(qe,Ke,Ce,De,at,ft,Ce,De,E.COLOR_BUFFER_BIT,E.NEAREST):xn?E.copyTexSubImage3D(zt,ge,at,ft,Dt+rn,qe,Ke,Ce,De):E.copyTexSubImage2D(zt,ge,at,ft,qe,Ke,Ce,De);te.bindFramebuffer(E.READ_FRAMEBUFFER,null),te.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else xn?T.isDataTexture||T.isData3DTexture?E.texSubImage3D(zt,ge,at,ft,Dt,Ce,De,Le,ot,He,wt.data):H.isCompressedArrayTexture?E.compressedTexSubImage3D(zt,ge,at,ft,Dt,Ce,De,Le,ot,wt.data):E.texSubImage3D(zt,ge,at,ft,Dt,Ce,De,Le,ot,He,wt):T.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,ge,at,ft,Ce,De,ot,He,wt.data):T.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,ge,at,ft,wt.width,wt.height,ot,wt.data):E.texSubImage2D(E.TEXTURE_2D,ge,at,ft,Ce,De,ot,He,wt);E.pixelStorei(E.UNPACK_ROW_LENGTH,ht),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Cn),E.pixelStorei(E.UNPACK_SKIP_PIXELS,gs),E.pixelStorei(E.UNPACK_SKIP_ROWS,fn),E.pixelStorei(E.UNPACK_SKIP_IMAGES,rr),ge===0&&H.generateMipmaps&&E.generateMipmap(zt),te.unbindTexture()},this.copyTextureToTexture3D=function(T,H,Y=null,Z=null,G=0){return T.isTexture!==!0&&(Us("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,Z=arguments[1]||null,T=arguments[2],H=arguments[3],G=arguments[4]||0),Us('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,H,Y,Z,G)},this.initRenderTarget=function(T){Q.get(T).__webglFramebuffer===void 0&&x.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?x.setTextureCube(T,0):T.isData3DTexture?x.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?x.setTexture2DArray(T,0):x.setTexture2D(T,0),te.unbindTexture()},this.resetState=function(){w=0,A=0,L=null,te.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}}const Md={type:"change"},Cc={type:"start"},Ah={type:"end"},ma=new ch,Sd=new Ri,E1=Math.cos(70*Jv.DEG2RAD),It=new $,on=2*Math.PI,Mt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},qo=1e-6;class T1 extends zx{constructor(e,t=null){super(e,t),this.state=Mt.NONE,this.enabled=!0,this.target=new $,this.cursor=new $,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Vs.ROTATE,MIDDLE:Vs.DOLLY,RIGHT:Vs.PAN},this.touches={ONE:Ns.ROTATE,TWO:Ns.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new $,this._lastQuaternion=new ds,this._lastTargetPosition=new $,this._quat=new ds().setFromUnitVectors(e.up,new $(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ku,this._sphericalDelta=new Ku,this._scale=1,this._panOffset=new $,this._rotateStart=new Ge,this._rotateEnd=new Ge,this._rotateDelta=new Ge,this._panStart=new Ge,this._panEnd=new Ge,this._panDelta=new Ge,this._dollyStart=new Ge,this._dollyEnd=new Ge,this._dollyDelta=new Ge,this._dollyDirection=new $,this._mouse=new Ge,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=w1.bind(this),this._onPointerDown=A1.bind(this),this._onPointerUp=C1.bind(this),this._onContextMenu=N1.bind(this),this._onMouseWheel=D1.bind(this),this._onKeyDown=L1.bind(this),this._onTouchStart=I1.bind(this),this._onTouchMove=U1.bind(this),this._onMouseDown=R1.bind(this),this._onMouseMove=P1.bind(this),this._interceptControlDown=F1.bind(this),this._interceptControlUp=O1.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Md),this.update(),this.state=Mt.NONE}update(e=null){const t=this.object.position;It.copy(t).sub(this.target),It.applyQuaternion(this._quat),this._spherical.setFromVector3(It),this.autoRotate&&this.state===Mt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=on:i>Math.PI&&(i-=on),s<-Math.PI?s+=on:s>Math.PI&&(s-=on),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(It.setFromSpherical(this._spherical),It.applyQuaternion(this._quatInverse),t.copy(this.target).add(It),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=It.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new $(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new $(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=It.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(ma.origin.copy(this.object.position),ma.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ma.direction))<E1?this.object.lookAt(this.target):(Sd.setFromNormalAndCoplanarPoint(this.object.up,this.target),ma.intersectPlane(Sd,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>qo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>qo||this._lastTargetPosition.distanceToSquared(this.target)>qo?(this.dispatchEvent(Md),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?on/60*this.autoRotateSpeed*e:on/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){It.setFromMatrixColumn(t,0),It.multiplyScalar(-e),this._panOffset.add(It)}_panUp(e,t){this.screenSpacePanning===!0?It.setFromMatrixColumn(t,1):(It.setFromMatrixColumn(t,0),It.crossVectors(this.object.up,It)),It.multiplyScalar(e),this._panOffset.add(It)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;It.copy(s).sub(this.target);let r=It.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(on*this._rotateDelta.x/t.clientHeight),this._rotateUp(on*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(on*this._rotateDelta.x/t.clientHeight),this._rotateUp(on*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ge,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function A1(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function w1(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function C1(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ah),this.state=Mt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function R1(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Vs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Mt.DOLLY;break;case Vs.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Mt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Mt.ROTATE}break;case Vs.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Mt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Mt.PAN}break;default:this.state=Mt.NONE}this.state!==Mt.NONE&&this.dispatchEvent(Cc)}function P1(n){switch(this.state){case Mt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Mt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Mt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function D1(n){this.enabled===!1||this.enableZoom===!1||this.state!==Mt.NONE||(n.preventDefault(),this.dispatchEvent(Cc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Ah))}function L1(n){this.enabled!==!1&&this._handleKeyDown(n)}function I1(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Ns.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Mt.TOUCH_ROTATE;break;case Ns.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Mt.TOUCH_PAN;break;default:this.state=Mt.NONE}break;case 2:switch(this.touches.TWO){case Ns.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Mt.TOUCH_DOLLY_PAN;break;case Ns.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Mt.TOUCH_DOLLY_ROTATE;break;default:this.state=Mt.NONE}break;default:this.state=Mt.NONE}this.state!==Mt.NONE&&this.dispatchEvent(Cc)}function U1(n){switch(this._trackPointer(n),this.state){case Mt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Mt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Mt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Mt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Mt.NONE}}function N1(n){this.enabled!==!1&&n.preventDefault()}function F1(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function O1(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const B1={class:"patternx-page"},k1={class:"patternx-shell"},z1={class:"patternx-nav"},H1={class:"patternx-tabs","aria-label":"纹脉工坊导航"},V1=["onClick"],G1={class:"patternx-main"},W1={key:0,class:"patternx-home"},X1={class:"patternx-home-grid"},$1={class:"patternx-feature-list"},j1={class:"patternx-actions"},q1={class:"patternx-home-art","aria-label":"纹样载体预览"},Y1={class:"patternx-art-float float-top"},K1=["src"],Z1={class:"patternx-art-float float-bottom"},J1=["src"],Q1={class:"patternx-card hot-card"},eE={class:"patternx-section-title"},tE={class:"patternx-grid compact"},nE=["onClick"],iE=["src","alt"],sE={class:"patternx-pattern-info"},rE={key:1,class:"patternx-subpage"},aE={key:1,class:"patternx-upload-result"},oE={class:"patternx-card upload-preview-card"},lE={class:"patternx-card-title"},cE={class:"patternx-image-preview"},uE=["src","alt"],dE={class:"patternx-card upload-preview-card"},fE={class:"patternx-card-title"},hE={class:"patternx-image-preview extraction"},pE=["src"],mE={key:1,class:"patternx-spinner"},gE={key:2,class:"patternx-actions upload-actions"},_E=["disabled"],vE={key:2,class:"patternx-subpage"},xE={class:"patternx-card gallery-tools"},yE={class:"patternx-search"},bE={class:"patternx-filter-row"},ME=["onClick"],SE={class:"patternx-stats"},EE={class:"patternx-grid gallery-grid"},TE=["onClick"],AE=["onClick"],wE=["src","alt"],CE={class:"patternx-pattern-info"},RE={class:"patternx-tags"},PE={class:"accent-tag"},DE={class:"patternx-card-actions"},LE=["onClick"],IE=["onClick"],UE={key:0,class:"patternx-empty"},NE={key:3,class:"patternx-subpage studio-page"},FE={class:"patternx-studio-layout"},OE={class:"patternx-sidebar"},BE={class:"patternx-card"},kE={class:"patternx-card-title"},zE={class:"patternx-studio-patterns"},HE=["onClick"],VE={class:"patternx-mini-thumb"},GE=["src","alt"],WE={class:"patternx-card"},XE={class:"patternx-card-title"},$E={class:"patternx-model-grid"},jE=["onClick"],qE={class:"patternx-card"},YE={class:"patternx-card-title"},KE=["onUpdate:modelValue","min","max","step"],ZE={class:"patternx-studio-main"},JE={key:0,class:"patternx-canvas-loading"},QE={class:"patternx-canvas-label"},eT={class:"patternx-studio-footer"},tT={class:"patternx-modal",role:"dialog","aria-modal":"true","aria-labelledby":"patternx-modal-title"},nT={class:"patternx-modal-head"},iT=["src","alt"],sT={class:"patternx-kicker"},rT={id:"patternx-modal-title"},aT={class:"patternx-tags"},oT={class:"accent-tag"},lT={class:"patternx-modal-section"},cT={class:"patternx-modal-section"},uT={class:"patternx-actions"},dT={key:0,class:"patternx-file-alert",role:"alert"},fT={class:"patternx-file-alert-icon"},hT={class:"patternx-file-alert-message"},pT={key:1,class:"patternx-toast",role:"status"},mT={__name:"PatternXPage",setup(n){var Ae;const e=Ye("home"),t=Ye(""),i=Ye("all"),s=Ye(((Ae=_n[0])==null?void 0:Ae.id)||""),r=Ye("vase"),a=Ye(null),o=Ye(""),l=Ye(""),c=Ye(null),u=Ye(""),d=Ye(""),h=Ye(""),p=Ye("等待上传图片"),v=Ye(!1),y=Ye(null),g=Ye(!1),f=Ye(!1),C=wr({active:!1,x:0,y:0}),R=Ye(new Set),b=Ye(new Set),I=wr({scale:100,rotate:0,offset:0,repeatX:1,repeatY:1,textureOffsetX:0,textureOffsetY:0}),w=[{key:"vase",label:"花瓶",icon:bu},{key:"cup",label:"茶杯",icon:vg},{key:"box",label:"包装盒",icon:gu},{key:"silk",label:"丝巾",icon:Eg},{key:"phone",label:"手机壳",icon:Tg}],A=["all",...new Set(_n.map(N=>N.categoryName))],L=["#b85c38","#5a7d5a","#c9a227","#7a6048","#6c8295","#a08060"],S=_n.map((N,D)=>{var se;return{...N,region:["大临村","江南工坊","桐乡","民间布样"][D%4],color:L[D%L.length],likes:64+D*23,image:(se=Li[D%Li.length])==null?void 0:se.src}}),M=mt(()=>S.find(N=>N.id===s.value)||S[0]),U=mt(()=>S.filter(N=>{const D=t.value.trim(),se=i.value==="all"||N.categoryName===i.value,de=`${N.name}${N.categoryName}${N.region}${N.meaning}${N.tags.join("")}`;return se&&(!D||de.includes(D))})),F=mt(()=>S.slice(0,4)),B=mt(()=>b.value.size),X=mt(()=>R.value.size);let ne,K,ie,V,me,Me,Se,Ie,Xe,ae,ve;function Re(N){o.value=N,window.clearTimeout(ne),ne=window.setTimeout(()=>{o.value=""},2600)}function Ee(N){l.value=N,window.clearTimeout(K),K=window.setTimeout(()=>{l.value=""},5200)}function Be(){window.clearTimeout(K),l.value=""}function Fe(N){e.value=N,N==="studio"&&el(()=>Ve()),window.scrollTo({top:0,behavior:"smooth"})}function $e(N){a.value=N}function yt(){a.value=null}function P(N){s.value=N.id,Fe("studio"),Re(`已选择：${N.name}`)}function k(N){const D=new Set(R.value);D.has(N.id)?D.delete(N.id):D.add(N.id),R.value=D}function E(N){const D=new Set(b.value),se=D.has(N.id);se?D.delete(N.id):D.add(N.id),b.value=D,Re(se?"已取消收藏":"已收藏到你的纹样夹")}function oe(){var N;(N=c.value)==null||N.click()}function ee(N){var se,de;const D=(de=(se=N.dataTransfer)==null?void 0:se.files)==null?void 0:de[0];D&&le(D)}function J(N){var se;const D=(se=N.target.files)==null?void 0:se[0];D&&le(D)}function te(N){return new Promise((D,se)=>{const de=new Image;de.onload=()=>{const ce=Math.min(1,640/Math.max(de.naturalWidth,de.naturalHeight)),nt=Math.max(1,Math.round(de.naturalWidth*ce)),it=Math.max(1,Math.round(de.naturalHeight*ce)),Gt=document.createElement("canvas");Gt.width=nt,Gt.height=it;const dn=Gt.getContext("2d",{willReadFrequently:!0});dn.drawImage(de,0,0,nt,it);const sr=dn.getImageData(0,0,nt,it),{data:vn}=sr,kn=[[0,0],[nt-1,0],[0,it-1],[nt-1,it-1],[Math.floor(nt/2),0],[Math.floor(nt/2),it-1]],zi=kn.reduce((Wt,[yi,ps])=>{const ms=(ps*nt+yi)*4;return[Wt[0]+vn[ms],Wt[1]+vn[ms+1],Wt[2]+vn[ms+2]]},[0,0,0]).map(Wt=>Wt/kn.length);for(let Wt=0;Wt<vn.length;Wt+=4){const yi=Math.hypot(vn[Wt]-zi[0],vn[Wt+1]-zi[1],vn[Wt+2]-zi[2]);yi<42?vn[Wt+3]=0:yi<70&&(vn[Wt+3]=Math.round((yi-42)/28*255))}dn.putImageData(sr,0,0),D(Gt.toDataURL("image/png"))},de.onerror=se,de.src=N})}function le(N){if(!N.type.startsWith("image/")){Ee("仅支持图片（JPG、PNG）和文本（html、txt、md）文件");return}window.clearTimeout(ie),h.value=N.name,p.value="正在读取本地图片...",v.value=!0;const D=new FileReader;D.onload=se=>{u.value=String(se.target.result||""),d.value="",p.value="正在提取纹样轮廓...",ie=window.setTimeout(async()=>{try{d.value=await te(u.value),p.value="本地提取完成，可保存到纹样库"}catch{p.value="提取失败，已保留原图，请重试"}finally{v.value=!1}},900)},D.onerror=()=>{p.value="图片读取失败，请重试",v.value=!1},D.readAsDataURL(N)}function Q(){window.clearTimeout(ie),u.value="",d.value="",h.value="",p.value="等待上传图片",v.value=!1,c.value&&(c.value.value="")}function x(){if(!d.value){Re("请先完成图片提取");return}Re(`「${h.value}」已保存为本地演示素材`),Fe("gallery")}function _(N){return N==="all"?"全部":N}function O(N){return N==="scale"?`${I.scale}%`:N==="rotate"?`${I.rotate}°`:I[N]}function W(N){return new mr({color:16777215,map:Xe||null,roughness:.36,metalness:.04,side:jn})}function q(){const N=[[0,-1.2],[.09,-1.18],[.12,-1.1],[.17,-.95],[.25,-.7],[.34,-.35],[.36,.05],[.3,.38],[.2,.72],[.18,.98],[.02,1.04]].map(([se,de])=>new Ge(se,de)),D=new Ut(new za(N,64),W());return D.castShadow=!0,D.receiveShadow=!0,D}function j(){const N=new Di,D=[[0,-.62],[.1,-.6],[.2,-.43],[.32,-.16],[.35,.08],[.32,.14],[0,.14]].map(([Oe,ce])=>new Ge(Oe,ce)),se=new Ut(new za(D,48),W()),de=new Ut(new Ec(.46,.4,.04,48),new mr({color:15061692,roughness:.42}));return de.position.y=-.65,N.add(se,de),N}function ye(){const N=new Di,D=new Ut(new Ni(1.7,.52,1.3),W()),se=new Ut(new Ni(1.7,.12,1.3),new mr({color:12096876,roughness:.4}));se.position.y=.32;const de=new Ut(new Tc(.08,20,14),new mr({color:9136404,metalness:.5,roughness:.28}));return de.position.y=.42,N.add(D,se,de),N}function fe(){const N=new er(2.35,2.15,36,36),D=N.attributes.position;for(let se=0;se<D.count;se+=1){const de=D.getX(se),Oe=D.getY(se);D.setZ(se,Math.sin(de*2.6)*.06+Math.sin(Oe*3.2)*.05-Math.pow(Math.max(Math.abs(de/1.18),Math.abs(Oe/1.08)),2)*.16)}return N.computeVertexNormals(),new Ut(N,W())}function xe(){const N=new Di,D=new Ut(new Ni(.84,1.64,.12),new mr({color:2763326,metalness:.65,roughness:.26})),se=new Ut(new er(.73,1.52),W());return se.position.z=.07,N.add(D,se),N}function Ne(){if(!me)return;Ie&&(me.remove(Ie),Ie.traverse(D=>{var se;(se=D.geometry)==null||se.dispose(),D.material&&(Array.isArray(D.material)?D.material:[D.material]).forEach(Oe=>Oe.dispose())})),Ie=new Di;const N={vase:q,cup:j,box:ye,silk:fe,phone:xe}[r.value]();N.traverse(D=>{D.isMesh&&(D.castShadow=!0,D.receiveShadow=!0)}),Ie.add(N),me.add(Ie),he()}function he(){if(Ie){const N=I.scale/100;Ie.scale.setScalar(N),Ie.rotation.y=I.rotate*Math.PI/180,Ie.position.y=I.offset/60}Xe&&(Xe.repeat.set(I.repeatX,I.repeatY),Xe.offset.set(I.textureOffsetX/100,I.textureOffsetY/100),Xe.needsUpdate=!0)}function Te(N){var D,se;f.value&&(C.active=!0,C.x=N.clientX,C.y=N.clientY,(se=(D=N.currentTarget).setPointerCapture)==null||se.call(D,N.pointerId))}function Ue(N){C.active&&(I.textureOffsetX-=(N.clientX-C.x)*.35,I.textureOffsetY+=(N.clientY-C.y)*.35,I.textureOffsetX=Math.max(-100,Math.min(100,I.textureOffsetX)),I.textureOffsetY=Math.max(-100,Math.min(100,I.textureOffsetY)),C.x=N.clientX,C.y=N.clientY)}function ke(){C.active=!1}function be(){var D;if(!((D=M.value)!=null&&D.image)||!me)return;new Ux().load(M.value.image,se=>{se.wrapS=Ir,se.wrapT=Ir,se.colorSpace=cn,Xe==null||Xe.dispose(),Xe=se,Ne()},void 0,()=>{Xe==null||Xe.dispose(),Xe=null,Ne()})}function Ve(){if(V||!y.value)return;const N=y.value.clientWidth||640,D=y.value.clientHeight||520;me=new Tx,me.background=new rt(15788252),Me=new Tn(35,N/D,.1,100),Me.position.set(0,.35,4.8),V=new S1({antialias:!0,preserveDrawingBuffer:!0}),V.setPixelRatio(Math.min(window.devicePixelRatio,2)),V.setSize(N,D),V.shadowMap.enabled=!0,V.shadowMap.type=Xf,V.outputColorSpace=cn,y.value.appendChild(V.domElement),me.add(new Nx(16774632,9073501,1.2));const se=new Bx(16773336,2.2);se.position.set(3,5,4),se.castShadow=!0,me.add(se);const de=new Ut(new Sc(3,64),new Cx({opacity:.22}));de.rotation.x=-Math.PI/2,de.position.y=-1.3,de.receiveShadow=!0,me.add(de),Se=new T1(Me,V.domElement),Se.enableDamping=!0,Se.dampingFactor=.08,Se.minDistance=2.5,Se.maxDistance=8,Se.target.set(0,0,0),Se.addEventListener("start",()=>{f.value=!1}),ve=new ResizeObserver(()=>{if(!V||!y.value)return;const Oe=y.value.clientWidth,ce=y.value.clientHeight;Me.aspect=Oe/ce,Me.updateProjectionMatrix(),V.setSize(Oe,ce)}),ve.observe(y.value),g.value=!0,Ne(),be(),je()}function je(){ae=window.requestAnimationFrame(je),!f.value&&Ie&&(Ie.rotation.y+=.003),Se==null||Se.update(),V==null||V.render(me,Me)}function ct(){if(!V)return;V.render(me,Me);const N=document.createElement("a");N.download=`patternx-${M.value.name}-${r.value}.png`,N.href=V.domElement.toDataURL("image/png"),N.click(),Re("渲染图已导出")}function z(){window.cancelAnimationFrame(ae),ve==null||ve.disconnect(),Se==null||Se.dispose(),Xe==null||Xe.dispose(),V==null||V.dispose(),V==null||V.domElement.remove(),V=null,me=null,Me=null,Se=null,Ie=null,Xe=null}return $n(s,()=>{e.value==="studio"&&be()}),$n(r,()=>Ne()),$n(I,he,{deep:!0}),$n(f,N=>{Se&&(Se.enabled=!N)}),$n(e,N=>{N==="studio"&&el(Ve)}),tr(()=>{e.value==="studio"&&Ve()}),fs(()=>{window.clearTimeout(ne),window.clearTimeout(K),window.clearTimeout(ie),z()}),(N,D)=>{var se,de,Oe;return re(),pe("section",B1,[m("div",k1,[m("header",z1,[m("button",{class:"patternx-brand",type:"button",onClick:D[0]||(D[0]=ce=>Fe("home"))},[...D[10]||(D[10]=[m("span",{class:"patternx-brand-mark"},"纹",-1),m("span",null,[m("strong",null,"纹脉"),m("small",null,"PatternX")],-1),m("em",null,"Demo 预览",-1)])]),m("nav",H1,[(re(),pe(et,null,gt([{key:"home",label:"首页"},{key:"upload",label:"上传纹样"},{key:"gallery",label:"纹样库"},{key:"studio",label:"3D 工坊"}],ce=>m("button",{key:ce.key,type:"button",class:xt({active:e.value===ce.key}),onClick:nt=>Fe(ce.key)},ue(ce.label),11,V1)),64))])]),m("main",G1,[e.value==="home"?(re(),pe("section",W1,[m("div",X1,[m("div",null,[D[19]||(D[19]=m("div",{class:"patternx-page-header"},[m("p",{class:"patternx-kicker"},"NON-HERITAGE PATTERN REIMAGINED"),m("h1",null,[st("让千年纹样"),m("br"),m("i",null,"走进现代创作")]),m("p",null,"非遗纹样采集、溯源与二创平台。人人都是非遗守护者，也可以成为下一位纹样创作者。")],-1)),m("div",$1,[m("article",null,[Pe(_e(yu),{size:21}),D[11]||(D[11]=m("strong",null,"纹样采集",-1)),D[12]||(D[12]=m("span",null,"上传图片，提取创作灵感",-1))]),m("article",null,[Pe(_e(di),{size:21}),D[13]||(D[13]=m("strong",null,"纹样库",-1)),D[14]||(D[14]=m("span",null,"浏览传统纹样与文化寓意",-1))]),m("article",null,[Pe(_e(gu),{size:21}),D[15]||(D[15]=m("strong",null,"3D 二创",-1)),D[16]||(D[16]=m("span",null,"实时预览载体与纹理效果",-1))])]),m("div",j1,[m("button",{class:"patternx-button primary",type:"button",onClick:D[1]||(D[1]=ce=>Fe("upload"))},[D[17]||(D[17]=st("开始上传纹样 ",-1)),Pe(_e(vu),{size:17})]),m("button",{class:"patternx-button secondary",type:"button",onClick:D[2]||(D[2]=ce=>Fe("studio"))},[...D[18]||(D[18]=[st("进入 3D 工坊 ",-1),m("span",null,"↗",-1)])])])]),m("div",q1,[D[20]||(D[20]=gm('<div class="patternx-art-ring ring-one" data-v-4a640fd3></div><div class="patternx-art-ring ring-two" data-v-4a640fd3></div><div class="patternx-art-glow" data-v-4a640fd3></div><div class="patternx-vase-art" data-v-4a640fd3><div class="patternx-vase-rim" data-v-4a640fd3></div><div class="patternx-vase-pattern pattern-rosette" data-v-4a640fd3></div><div class="patternx-vase-highlight" data-v-4a640fd3></div></div>',4)),m("div",Y1,[m("img",{src:(se=F.value[2])==null?void 0:se.image,alt:"牡丹纹样"},null,8,K1)]),m("div",Z1,[m("img",{src:(de=F.value[0])==null?void 0:de.image,alt:"缠枝莲纹样"},null,8,J1)]),D[21]||(D[21]=m("span",{class:"patternx-art-caption"},"点击纹样进入 3D 工坊",-1))])]),m("section",Q1,[m("div",eE,[D[23]||(D[23]=m("div",null,[m("p",{class:"patternx-kicker"},"FROM THE ARCHIVE"),m("h2",null,"热门纹样")],-1)),m("button",{type:"button",class:"patternx-text-button",onClick:D[3]||(D[3]=ce=>Fe("gallery"))},[...D[22]||(D[22]=[st("查看全部 ",-1),m("span",null,"→",-1)])])]),m("div",tE,[(re(!0),pe(et,null,gt(F.value,ce=>(re(),pe("button",{key:ce.id,class:"patternx-pattern-card",type:"button",onClick:nt=>$e(ce)},[m("span",{class:"patternx-thumb",style:en({backgroundColor:`${ce.color}20`})},[ce.image?(re(),pe("img",{key:0,src:ce.image,alt:ce.name},null,8,iE)):vt("",!0)],4),m("span",sE,[m("strong",null,ue(ce.name),1),m("small",null,ue(ce.categoryName)+" · "+ue(ce.region),1)])],8,nE))),128))])])])):e.value==="upload"?(re(),pe("section",rE,[D[31]||(D[31]=m("header",{class:"patternx-page-header compact-header"},[m("p",{class:"patternx-kicker"},"COLLECT / EXTRACT / PRESERVE"),m("h1",null,"上传纹样"),m("p",null,"拍摄或上传一张带有传统纹样的图片，开始你的数字采集。")],-1)),u.value?vt("",!0):(re(),pe("div",{key:0,class:"patternx-upload-zone",role:"button",tabindex:"0",onClick:oe,onKeydown:Of(oe,["enter"]),onDragover:D[4]||(D[4]=Ln(()=>{},["prevent"])),onDrop:Ln(ee,["prevent"])},[Pe(_e(vu),{size:42}),D[24]||(D[24]=m("h2",null,"拖拽图片到这里，或点击上传",-1)),D[25]||(D[25]=m("p",null,"支持 JPG、PNG 等常见图片格式，建议纹样清晰、主体完整",-1)),D[26]||(D[26]=m("span",null,"选择本地文件",-1))],32)),m("input",{ref_key:"fileInput",ref:c,class:"patternx-hidden-input",type:"file",accept:".jpg,.jpeg,.png,.html,.txt,.md,image/jpeg,image/png,text/html,text/plain,text/markdown",onChange:J},null,544),u.value?(re(),pe("div",aE,[m("div",oE,[m("div",lE,[Pe(_e(yu),{size:18}),D[27]||(D[27]=st(" 原图",-1))]),m("div",cE,[m("img",{src:u.value,alt:h.value},null,8,uE)])]),m("div",dE,[m("div",fE,[Pe(_e(di),{size:18}),D[28]||(D[28]=st(" 纹样提取结果",-1))]),m("div",hE,[d.value?(re(),pe("img",{key:0,src:d.value,alt:"纹样提取结果"},null,8,pE)):(re(),pe("span",mE))]),m("p",{class:xt(["patternx-status",{complete:!v.value}])},ue(p.value),3)])])):vt("",!0),u.value?(re(),pe("div",gE,[m("button",{class:"patternx-button primary",type:"button",disabled:v.value,onClick:x},[D[29]||(D[29]=st("保存到纹样库 ",-1)),Pe(_e(_u),{size:17})],8,_E),m("button",{class:"patternx-button secondary",type:"button",onClick:Q},[D[30]||(D[30]=st("重新上传 ",-1)),Pe(_e(ls),{size:17})])])):vt("",!0)])):e.value==="gallery"?(re(),pe("section",vE,[D[36]||(D[36]=m("header",{class:"patternx-page-header compact-header"},[m("p",{class:"patternx-kicker"},"THE PATTERN ARCHIVE"),m("h1",null,"纹样库"),m("p",null,"探索传统纹样的结构、地域与文化寓意，发现可以继续生长的视觉语言。")],-1)),m("div",xE,[m("label",yE,[Pe(_e(fc),{size:18}),tl(m("input",{"onUpdate:modelValue":D[5]||(D[5]=ce=>t.value=ce),type:"search",placeholder:"搜索纹样名称、分类、地域..."},null,512),[[cl,t.value]])]),m("div",bE,[D[32]||(D[32]=m("span",null,"分类：",-1)),(re(),pe(et,null,gt(A,ce=>m("button",{key:ce,type:"button",class:xt({active:i.value===ce}),onClick:nt=>i.value=ce},ue(_(ce)),11,ME)),64))])]),m("div",SE,[m("span",null,[m("strong",null,ue(U.value.length),1),D[33]||(D[33]=st(" 个纹样",-1))]),m("span",null,[m("strong",null,ue(B.value),1),D[34]||(D[34]=st(" 个收藏",-1))]),m("span",null,[m("strong",null,ue(X.value),1),D[35]||(D[35]=st(" 次点赞",-1))])]),m("div",EE,[(re(!0),pe(et,null,gt(U.value,ce=>(re(),pe("article",{key:ce.id,class:"patternx-pattern-card gallery-pattern-card",onClick:nt=>$e(ce)},[m("button",{class:"patternx-thumb",type:"button",style:en({backgroundColor:`${ce.color}20`}),onClick:Ln(nt=>$e(ce),["stop"])},[ce.image?(re(),pe("img",{key:0,src:ce.image,alt:ce.name},null,8,wE)):(re(),pe("span",{key:1,style:en({background:ce.color})},null,4))],12,AE),m("div",CE,[m("h3",null,ue(ce.name),1),m("div",RE,[m("span",PE,ue(ce.categoryName),1),m("span",null,ue(ce.region),1)]),m("div",DE,[m("button",{type:"button",class:xt({liked:R.value.has(ce.id)}),onClick:Ln(nt=>k(ce),["stop"])},[Pe(_e(xu),{size:14,fill:R.value.has(ce.id)?"currentColor":"none"},null,8,["fill"]),st(" "+ue(ce.likes+(R.value.has(ce.id)?1:0)),1)],10,LE),m("button",{type:"button",class:xt({favorited:b.value.has(ce.id)}),onClick:Ln(nt=>E(ce),["stop"])},[Pe(_e(Ag),{size:14,fill:b.value.has(ce.id)?"currentColor":"none"},null,8,["fill"]),st(" "+ue(b.value.has(ce.id)?"已收藏":"收藏"),1)],10,IE)])])],8,TE))),128))]),U.value.length?vt("",!0):(re(),pe("div",UE,"没有找到匹配的纹样，换一个关键词试试。"))])):(re(),pe("section",NE,[D[42]||(D[42]=m("header",{class:"patternx-page-header compact-header"},[m("p",{class:"patternx-kicker"},"TEXTURE / FORM / MOTION"),m("h1",null,"3D 工坊"),m("p",null,"选择纹样和载体，实时预览二创效果。拖拽画布旋转载体，滚轮调整观看距离。")],-1)),m("div",FE,[m("aside",OE,[m("section",BE,[m("div",kE,[Pe(_e(di),{size:18}),D[37]||(D[37]=st(" 选择纹样",-1))]),m("div",zE,[(re(!0),pe(et,null,gt(_e(S).slice(0,8),ce=>(re(),pe("button",{key:ce.id,type:"button",class:xt({selected:s.value===ce.id}),onClick:nt=>P(ce)},[m("span",VE,[ce.image?(re(),pe("img",{key:0,src:ce.image,alt:ce.name},null,8,GE)):vt("",!0)]),m("span",null,ue(ce.name),1),s.value===ce.id?(re(),Ct(_e(_u),{key:0,size:15})):vt("",!0)],10,HE))),128))])]),m("section",WE,[m("div",XE,[Pe(_e(bu),{size:18}),D[38]||(D[38]=st(" 选择载体",-1))]),m("div",$E,[(re(),pe(et,null,gt(w,ce=>m("button",{key:ce.key,type:"button",class:xt({selected:r.value===ce.key}),onClick:nt=>r.value=ce.key},[(re(),Ct(Da(ce.icon),{size:22})),m("span",null,ue(ce.label),1)],10,jE)),64))])]),m("section",qE,[m("div",YE,[Pe(_e(di),{size:18}),D[39]||(D[39]=st(" 调整参数",-1))]),(re(),pe(et,null,gt([{key:"scale",label:"缩放",min:50,max:150,step:1},{key:"rotate",label:"旋转",min:0,max:360,step:1},{key:"offset",label:"位置",min:-50,max:50,step:1},{key:"repeatX",label:"横向重复",min:1,max:8,step:1},{key:"repeatY",label:"纵向重复",min:1,max:8,step:1},{key:"textureOffsetX",label:"横向偏移",min:-100,max:100,step:1},{key:"textureOffsetY",label:"纵向偏移",min:-100,max:100,step:1}],ce=>m("label",{key:ce.key,class:"patternx-slider"},[m("span",null,ue(ce.label),1),tl(m("input",{"onUpdate:modelValue":nt=>I[ce.key]=nt,type:"range",min:ce.min,max:ce.max,step:ce.step},null,8,KE),[[cl,I[ce.key],void 0,{number:!0}]]),m("output",null,ue(O(ce.key)),1)])),64))])]),m("div",ZE,[m("div",{ref_key:"canvasHost",ref:y,class:xt(["patternx-canvas",`model-${r.value}`]),onPointerdown:Te,onPointermove:Ue,onPointerup:ke,onPointercancel:ke,onPointerleave:ke},[g.value?vt("",!0):(re(),pe("div",JE,[...D[40]||(D[40]=[m("span",{class:"patternx-spinner"},null,-1),m("p",null,"正在准备 3D 工坊...",-1)])])),m("div",QE,[m("span",null,ue(M.value.name),1),m("small",null,ue((Oe=w.find(ce=>ce.key===r.value))==null?void 0:Oe.label)+" · 实时预览",1)]),m("button",{class:xt(["patternx-drag-toggle",{active:f.value}]),type:"button",onPointerdown:D[6]||(D[6]=Ln(()=>{},["stop"])),onClick:D[7]||(D[7]=ce=>f.value=!f.value)},ue(f.value?"纹样拖拽：开":"纹样拖拽：关"),35)],34),m("div",eT,[m("div",null,[m("strong",null,ue(M.value.name),1),m("span",null,ue(M.value.meaning),1)]),m("button",{class:"patternx-button primary",type:"button",onClick:ct},[Pe(_e(kf),{size:17}),D[41]||(D[41]=st(" 导出渲染图",-1))])])])])]))])]),a.value?(re(),pe("div",{key:0,class:"patternx-modal-backdrop",onClick:Ln(yt,["self"])},[m("article",tT,[m("button",{class:"patternx-modal-close",type:"button","aria-label":"关闭详情",onClick:yt},[Pe(_e(ls),{size:18})]),m("div",nT,[m("div",{class:"patternx-modal-thumb",style:en({backgroundColor:`${a.value.color}20`})},[a.value.image?(re(),pe("img",{key:0,src:a.value.image,alt:a.value.name},null,8,iT)):vt("",!0)],4),m("div",null,[m("p",sT,ue(a.value.categoryName)+" · "+ue(a.value.region),1),m("h2",rT,ue(a.value.name),1),m("div",aT,[m("span",oT,ue(a.value.era),1),m("span",null,ue(a.value.usage),1)])])]),m("div",lT,[D[43]||(D[43]=m("h3",null,"纹样故事",-1)),m("p",null,ue(a.value.story),1)]),m("div",cT,[D[44]||(D[44]=m("h3",null,"文化寓意",-1)),m("p",null,ue(a.value.meaningDetail),1)]),m("div",uT,[m("button",{class:"patternx-button primary",type:"button",onClick:D[8]||(D[8]=ce=>{P(a.value),yt()})},[D[45]||(D[45]=st("去 3D 工坊创作 ",-1)),Pe(_e(di),{size:17})]),m("button",{class:"patternx-button secondary",type:"button",onClick:D[9]||(D[9]=ce=>E(a.value))},[Pe(_e(xu),{size:17,fill:b.value.has(a.value.id)?"currentColor":"none"},null,8,["fill"]),st(" "+ue(b.value.has(a.value.id)?"已收藏":"收藏"),1)])])])])):vt("",!0),Pe(dc,{name:"file-alert"},{default:qa(()=>[l.value?(re(),pe("div",dT,[m("span",fT,[Pe(_e(gg),{size:18})]),m("span",hT,ue(l.value),1),m("button",{type:"button","aria-label":"关闭文件格式提示",onClick:Be},[Pe(_e(ls),{size:20})])])):vt("",!0)]),_:1}),o.value?(re(),pe("div",pT,ue(o.value),1)):vt("",!0)])}}},gT=kr(mT,[["__scopeId","data-v-4a640fd3"]]),_T={class:"app-shell"},vT={__name:"App",setup(n){const{routeName:e,routePath:t,navigate:i}=Ng(),s=Ye("all"),r=mt(()=>decodeURIComponent(t.value.replace("/pattern/",""))),a=mt(()=>_n.some(c=>c.id===r.value));function o(c){i(`/pattern/${c.id}`)}function l(c){s.value=c}return(c,u)=>(re(),pe("div",_T,[_e(e)!=="find-game"&&_e(e)!=="find-card"?(re(),Ct(Ug,{key:0,"route-name":_e(e),"route-path":_e(t),onNavigate:_e(i)},null,8,["route-name","route-path","onNavigate"])):vt("",!0),Pe(dc,{name:"page",mode:"out-in"},{default:qa(()=>[(re(),pe("main",{key:_e(e)+_e(t),class:xt(["page",{"page-find-menu":_e(e)==="find-menu"}])},[_e(e)==="home"?(re(),Ct(Mu,{key:0,onNavigate:_e(i),onOpenPattern:o,onSelectCategory:l},null,8,["onNavigate"])):_e(e)==="library"?(re(),Ct(J0,{key:1,"initial-category":s.value,onOpenPattern:o},null,8,["initial-category"])):_e(e)==="pattern"&&a.value?(re(),Ct(uv,{key:2,"pattern-id":r.value,onNavigate:_e(i),onOpenPattern:o},null,8,["pattern-id","onNavigate"])):_e(e)==="heritage"?(re(),Ct($_,{key:3})):_e(e)==="find-menu"?(re(),Ct(P_,{key:4,onNavigate:_e(i)},null,8,["onNavigate"])):_e(e)==="find-card"?(re(),Ct(Kg,{key:5,onNavigate:_e(i)},null,8,["onNavigate"])):_e(e)==="find-game"?(re(),Ct(g_,{key:6,onNavigate:_e(i)},null,8,["onNavigate"])):_e(e)==="patternx"?(re(),Ct(gT,{key:7})):(re(),Ct(Mu,{key:8,onNavigate:_e(i),onOpenPattern:o,onSelectCategory:l},null,8,["onNavigate"]))],2))]),_:1}),_e(e)!=="home"&&_e(e)!=="find-menu"&&_e(e)!=="find-card"?(re(),Ct(dg,{key:1,onNavigate:_e(i)},null,8,["onNavigate"])):vt("",!0)]))}};og(vT).mount("#app");
