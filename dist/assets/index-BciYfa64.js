(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function lc(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const wt={},Ys=[],li=()=>{},Hd=()=>!1,to=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),no=n=>n.startsWith("onUpdate:"),Kt=Object.assign,cc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},$h=Object.prototype.hasOwnProperty,vt=(n,e)=>$h.call(n,e),$e=Array.isArray,Ks=n=>ea(n)==="[object Map]",Vd=n=>ea(n)==="[object Set]",Vc=n=>ea(n)==="[object Date]",et=n=>typeof n=="function",Ft=n=>typeof n=="string",ui=n=>typeof n=="symbol",yt=n=>n!==null&&typeof n=="object",Gd=n=>(yt(n)||et(n))&&et(n.then)&&et(n.catch),Wd=Object.prototype.toString,ea=n=>Wd.call(n),jh=n=>ea(n).slice(8,-1),Xd=n=>ea(n)==="[object Object]",uc=n=>Ft(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ir=lc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),io=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},qh=/-\w/g,pn=io(n=>n.replace(qh,e=>e.slice(1).toUpperCase())),Yh=/\B([A-Z])/g,Ji=io(n=>n.replace(Yh,"-$1").toLowerCase()),so=io(n=>n.charAt(0).toUpperCase()+n.slice(1)),vo=io(n=>n?`on${so(n)}`:""),ii=(n,e)=>!Object.is(n,e),La=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},$d=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},dc=n=>{const e=parseFloat(n);return isNaN(e)?n:e},Kh=n=>{const e=Ft(n)?Number(n):NaN;return isNaN(e)?n:e};let Gc;const ro=()=>Gc||(Gc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Fn(n){if($e(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Ft(i)?ep(i):Fn(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Ft(n)||yt(n))return n}const Zh=/;(?![^(]*\))/g,Jh=/:([^]+)/,Qh=/\/\*[^]*?\*\//g;function ep(n){const e={};return n.replace(Qh,"").split(Zh).forEach(t=>{if(t){const i=t.split(Jh);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function bt(n){let e="";if(Ft(n))e=n;else if($e(n))for(let t=0;t<n.length;t++){const i=bt(n[t]);i&&(e+=i+" ")}else if(yt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const tp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",np=lc(tp);function jd(n){return!!n||n===""}function ip(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=fc(n[i],e[i]);return t}function fc(n,e){if(n===e)return!0;let t=Vc(n),i=Vc(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=ui(n),i=ui(e),t||i)return n===e;if(t=$e(n),i=$e(e),t||i)return t&&i?ip(n,e):!1;if(t=yt(n),i=yt(e),t||i){if(!t||!i)return!1;const s=Object.keys(n).length,r=Object.keys(e).length;if(s!==r)return!1;for(const a in n){const o=n.hasOwnProperty(a),l=e.hasOwnProperty(a);if(o&&!l||!o&&l||!fc(n[a],e[a]))return!1}}return String(n)===String(e)}const qd=n=>!!(n&&n.__v_isRef===!0),he=n=>Ft(n)?n:n==null?"":$e(n)||yt(n)&&(n.toString===Wd||!et(n.toString))?qd(n)?he(n.value):JSON.stringify(n,Yd,2):String(n),Yd=(n,e)=>qd(e)?Yd(n,e.value):Ks(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[xo(i,r)+" =>"]=s,t),{})}:Vd(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>xo(t))}:ui(e)?xo(e):yt(e)&&!$e(e)&&!Xd(e)?String(e):e,xo=(n,e="")=>{var t;return ui(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Qt;class sp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Qt&&(Qt.active?(this.parent=Qt,this.index=(Qt.scopes||(Qt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){const i=this.scopes.slice();for(e=0,t=i.length;e<t;e++)i[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){const s=this.scopes.slice();for(e=0,t=s.length;e<t;e++)s[e].resume()}const i=this.effects.slice();for(e=0,t=i.length;e<t;e++)i[e].resume()}}run(e){if(this._active){const t=Qt;try{return Qt=this,e()}finally{Qt=t}}}on(){++this._on===1&&(this.prevScope=Qt,Qt=this)}off(){if(this._on>0&&--this._on===0){if(Qt===this)Qt=this.prevScope;else{let e=Qt;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(t=0,i=s.length;t<i;t++)s[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function rp(){return Qt}let Ct;const yo=new WeakSet;class Kd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Qt&&(Qt.active?Qt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,yo.has(this)&&(yo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Jd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Wc(this),Qd(this);const e=Ct,t=$n;Ct=this,$n=!0;try{return this.fn()}finally{ef(this),Ct=e,$n=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)mc(e);this.deps=this.depsTail=void 0,Wc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?yo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){cl(this)&&this.run()}get dirty(){return cl(this)}}let Zd=0,Ur,Nr;function Jd(n,e=!1){if(n.flags|=8,e){n.next=Nr,Nr=n;return}n.next=Ur,Ur=n}function hc(){Zd++}function pc(){if(--Zd>0)return;if(Nr){let e=Nr;for(Nr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Ur;){let e=Ur;for(Ur=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Qd(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function ef(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),mc(i),ap(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function cl(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(tf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function tf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Vr)||(n.globalVersion=Vr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!cl(n))))return;n.flags|=2;const e=n.dep,t=Ct,i=$n;Ct=n,$n=!0;try{Qd(n);const s=n.fn(n._value);(e.version===0||ii(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ct=t,$n=i,ef(n),n.flags&=-3}}function mc(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)mc(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function ap(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let $n=!0;const nf=[];function Ri(){nf.push($n),$n=!1}function Pi(){const n=nf.pop();$n=n===void 0?!0:n}function Wc(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Ct;Ct=void 0;try{e()}finally{Ct=t}}}let Vr=0;class op{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class gc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ct||!$n||Ct===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Ct)t=this.activeLink=new op(Ct,this),Ct.deps?(t.prevDep=Ct.depsTail,Ct.depsTail.nextDep=t,Ct.depsTail=t):Ct.deps=Ct.depsTail=t,sf(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Ct.depsTail,t.nextDep=void 0,Ct.depsTail.nextDep=t,Ct.depsTail=t,Ct.deps===t&&(Ct.deps=i)}return t}trigger(e){this.version++,Vr++,this.notify(e)}notify(e){hc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{pc()}}}function sf(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)sf(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const ul=new WeakMap,vs=Symbol(""),dl=Symbol(""),Gr=Symbol("");function sn(n,e,t){if($n&&Ct){let i=ul.get(n);i||ul.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new gc),s.map=i,s.key=t),s.track()}}function Si(n,e,t,i,s,r){const a=ul.get(n);if(!a){Vr++;return}const o=l=>{l&&l.trigger()};if(hc(),e==="clear")a.forEach(o);else{const l=$e(n),c=l&&uc(t);if(l&&t==="length"){const u=Number(i);a.forEach((d,f)=>{(f==="length"||f===Gr||!ui(f)&&f>=u)&&o(d)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),c&&o(a.get(Gr)),e){case"add":l?c&&o(a.get("length")):(o(a.get(vs)),Ks(n)&&o(a.get(dl)));break;case"delete":l||(o(a.get(vs)),Ks(n)&&o(a.get(dl)));break;case"set":Ks(n)&&o(a.get(vs));break}}pc()}function Cs(n){const e=pt(n);return e===n?e:(sn(e,"iterate",Gr),On(n)?e:e.map(qn))}function ao(n){return sn(n=pt(n),"iterate",Gr),n}function ei(n,e){return Di(n)?sr(xs(n)?qn(e):e):qn(e)}const lp={__proto__:null,[Symbol.iterator](){return Mo(this,Symbol.iterator,n=>ei(this,n))},concat(...n){return Cs(this).concat(...n.map(e=>$e(e)?Cs(e):e))},entries(){return Mo(this,"entries",n=>(n[1]=ei(this,n[1]),n))},every(n,e){return pi(this,"every",n,e,void 0,arguments)},filter(n,e){return pi(this,"filter",n,e,t=>t.map(i=>ei(this,i)),arguments)},find(n,e){return pi(this,"find",n,e,t=>ei(this,t),arguments)},findIndex(n,e){return pi(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return pi(this,"findLast",n,e,t=>ei(this,t),arguments)},findLastIndex(n,e){return pi(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return pi(this,"forEach",n,e,void 0,arguments)},includes(...n){return bo(this,"includes",n)},indexOf(...n){return bo(this,"indexOf",n)},join(n){return Cs(this).join(n)},lastIndexOf(...n){return bo(this,"lastIndexOf",n)},map(n,e){return pi(this,"map",n,e,void 0,arguments)},pop(){return Mr(this,"pop")},push(...n){return Mr(this,"push",n)},reduce(n,...e){return Xc(this,"reduce",n,e)},reduceRight(n,...e){return Xc(this,"reduceRight",n,e)},shift(){return Mr(this,"shift")},some(n,e){return pi(this,"some",n,e,void 0,arguments)},splice(...n){return Mr(this,"splice",n)},toReversed(){return Cs(this).toReversed()},toSorted(n){return Cs(this).toSorted(n)},toSpliced(...n){return Cs(this).toSpliced(...n)},unshift(...n){return Mr(this,"unshift",n)},values(){return Mo(this,"values",n=>ei(this,n))}};function Mo(n,e,t){const i=ao(n),s=i[e]();return i!==n&&!On(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const cp=Array.prototype;function pi(n,e,t,i,s,r){const a=ao(n),o=a!==n&&!On(n),l=a[e];if(l!==cp[e]){const d=l.apply(n,r);return o?qn(d):d}let c=t;a!==n&&(o?c=function(d,f){return t.call(this,ei(n,d),f,n)}:t.length>2&&(c=function(d,f){return t.call(this,d,f,n)}));const u=l.call(a,c,i);return o&&s?s(u):u}function Xc(n,e,t,i){const s=ao(n),r=s!==n&&!On(n);let a=t,o=!1;s!==n&&(r?(o=i.length===0,a=function(c,u,d){return o&&(o=!1,c=ei(n,c)),t.call(this,c,ei(n,u),d,n)}):t.length>3&&(a=function(c,u,d){return t.call(this,c,u,d,n)}));const l=s[e](a,...i);return o?ei(n,l):l}function bo(n,e,t){const i=pt(n);sn(i,"iterate",Gr);const s=i[e](...t);return(s===-1||s===!1)&&xc(t[0])?(t[0]=pt(t[0]),i[e](...t)):s}function Mr(n,e,t=[]){Ri(),hc();const i=pt(n)[e].apply(n,t);return pc(),Pi(),i}const up=lc("__proto__,__v_isRef,__isVue"),rf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(ui));function dp(n){ui(n)||(n=String(n));const e=pt(this);return sn(e,"has",n),e.hasOwnProperty(n)}class af{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?Mp:uf:r?cf:lf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=$e(e);if(!s){let l;if(a&&(l=lp[t]))return l;if(t==="hasOwnProperty")return dp}const o=Reflect.get(e,t,an(e)?e:i);if((ui(t)?rf.has(t):up(t))||(s||sn(e,"get",t),r))return o;if(an(o)){const l=a&&uc(t)?o:o.value;return s&&yt(l)?hl(l):l}return yt(o)?s?hl(o):Wr(o):o}}class of extends af{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const a=$e(e)&&uc(t);if(!this._isShallow){const c=Di(r);if(!On(i)&&!Di(i)&&(r=pt(r),i=pt(i)),!a&&an(r)&&!an(i))return c||(r.value=i),!0}const o=a?Number(t)<e.length:vt(e,t),l=Reflect.set(e,t,i,an(e)?e:s);return e===pt(s)&&l&&(o?ii(i,r)&&Si(e,"set",t,i):Si(e,"add",t,i)),l}deleteProperty(e,t){const i=vt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&Si(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!ui(t)||!rf.has(t))&&sn(e,"has",t),i}ownKeys(e){return sn(e,"iterate",$e(e)?"length":vs),Reflect.ownKeys(e)}}class fp extends af{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const hp=new of,pp=new fp,mp=new of(!0);const fl=n=>n,aa=n=>Reflect.getPrototypeOf(n);function gp(n,e,t){return function(...i){const s=this.__v_raw,r=pt(s),a=Ks(r),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=s[n](...i),u=t?fl:e?sr:qn;return!e&&sn(r,"iterate",l?dl:vs),Kt(Object.create(c),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:o?[u(d[0]),u(d[1])]:u(d),done:f}}})}}function oa(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function _p(n,e){const t={get(s){const r=this.__v_raw,a=pt(r),o=pt(s);n||(ii(s,o)&&sn(a,"get",s),sn(a,"get",o));const{has:l}=aa(a),c=e?fl:n?sr:qn;if(l.call(a,s))return c(r.get(s));if(l.call(a,o))return c(r.get(o));r!==a&&r.get(s)},get size(){const s=this.__v_raw;return!n&&sn(pt(s),"iterate",vs),s.size},has(s){const r=this.__v_raw,a=pt(r),o=pt(s);return n||(ii(s,o)&&sn(a,"has",s),sn(a,"has",o)),s===o?r.has(s):r.has(s)||r.has(o)},forEach(s,r){const a=this,o=a.__v_raw,l=pt(o),c=e?fl:n?sr:qn;return!n&&sn(l,"iterate",vs),o.forEach((u,d)=>s.call(r,c(u),c(d),a))}};return Kt(t,n?{add:oa("add"),set:oa("set"),delete:oa("delete"),clear:oa("clear")}:{add(s){const r=pt(this),a=aa(r),o=pt(s),l=!e&&!On(s)&&!Di(s)?o:s;return a.has.call(r,l)||ii(s,l)&&a.has.call(r,s)||ii(o,l)&&a.has.call(r,o)||(r.add(l),Si(r,"add",l,l)),this},set(s,r){!e&&!On(r)&&!Di(r)&&(r=pt(r));const a=pt(this),{has:o,get:l}=aa(a);let c=o.call(a,s);c||(s=pt(s),c=o.call(a,s));const u=l.call(a,s);return a.set(s,r),c?ii(r,u)&&Si(a,"set",s,r):Si(a,"add",s,r),this},delete(s){const r=pt(this),{has:a,get:o}=aa(r);let l=a.call(r,s);l||(s=pt(s),l=a.call(r,s)),o&&o.call(r,s);const c=r.delete(s);return l&&Si(r,"delete",s,void 0),c},clear(){const s=pt(this),r=s.size!==0,a=s.clear();return r&&Si(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=gp(s,n,e)}),t}function _c(n,e){const t=_p(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(vt(t,s)&&s in i?t:i,s,r)}const vp={get:_c(!1,!1)},xp={get:_c(!1,!0)},yp={get:_c(!0,!1)};const lf=new WeakMap,cf=new WeakMap,uf=new WeakMap,Mp=new WeakMap;function bp(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Wr(n){return Di(n)?n:vc(n,!1,hp,vp,lf)}function Sp(n){return vc(n,!1,mp,xp,cf)}function hl(n){return vc(n,!0,pp,yp,uf)}function vc(n,e,t,i,s){if(!yt(n)||n.__v_raw&&!(e&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const r=s.get(n);if(r)return r;const a=bp(jh(n));if(a===0)return n;const o=new Proxy(n,a===2?i:t);return s.set(n,o),o}function xs(n){return Di(n)?xs(n.__v_raw):!!(n&&n.__v_isReactive)}function Di(n){return!!(n&&n.__v_isReadonly)}function On(n){return!!(n&&n.__v_isShallow)}function xc(n){return n?!!n.__v_raw:!1}function pt(n){const e=n&&n.__v_raw;return e?pt(e):n}function Ep(n){return!vt(n,"__v_skip")&&Object.isExtensible(n)&&$d(n,"__v_skip",!0),n}const qn=n=>yt(n)?Wr(n):n,sr=n=>yt(n)?hl(n):n;function an(n){return n?n.__v_isRef===!0:!1}function Qe(n){return Tp(n,!1)}function Tp(n,e){return an(n)?n:new wp(n,e)}class wp{constructor(e,t){this.dep=new gc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:pt(e),this._value=t?e:qn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||On(e)||Di(e);e=i?e:pt(e),ii(e,t)&&(this._rawValue=e,this._value=i?e:qn(e),this.dep.trigger())}}function de(n){return an(n)?n.value:n}const Ap={get:(n,e,t)=>e==="__v_raw"?n:de(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return an(s)&&!an(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function df(n){return xs(n)?n:new Proxy(n,Ap)}class Cp{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new gc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Vr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Ct!==this)return Jd(this,!0),!0}get value(){const e=this.dep.track();return tf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Rp(n,e,t=!1){let i,s;return et(n)?i=n:(i=n.get,s=n.set),new Cp(i,s,t)}const la={},Ha=new WeakMap;let us;function Pp(n,e=!1,t=us){if(t){let i=Ha.get(t);i||Ha.set(t,i=[]),i.push(n)}}function Dp(n,e,t=wt){const{immediate:i,deep:s,once:r,scheduler:a,augmentJob:o,call:l}=t,c=y=>s?y:On(y)||s===!1||s===0?Ei(y,1):Ei(y);let u,d,f,p,_=!1,M=!1;if(an(n)?(d=()=>n.value,_=On(n)):xs(n)?(d=()=>c(n),_=!0):$e(n)?(M=!0,_=n.some(y=>xs(y)||On(y)),d=()=>n.map(y=>{if(an(y))return y.value;if(xs(y))return c(y);if(et(y))return l?l(y,2):y()})):et(n)?e?d=l?()=>l(n,2):n:d=()=>{if(f){Ri();try{f()}finally{Pi()}}const y=us;us=u;try{return l?l(n,3,[p]):n(p)}finally{us=y}}:d=li,e&&s){const y=d,L=s===!0?1/0:s;d=()=>Ei(y(),L)}const g=rp(),h=()=>{u.stop(),g&&g.active&&cc(g.effects,u)};if(r&&e){const y=e;e=(...L)=>{const C=y(...L);return h(),C}}let A=M?new Array(n.length).fill(la):la;const R=y=>{if(!(!(u.flags&1)||!u.dirty&&!y))if(e){const L=u.run();if(y||s||_||(M?L.some((C,S)=>ii(C,A[S])):ii(L,A))){f&&f();const C=us;us=u;try{const S=[L,A===la?void 0:M&&A[0]===la?[]:A,p];A=L,l?l(e,3,S):e(...S)}finally{us=C}}}else u.run()};return o&&o(R),u=new Kd(d),u.scheduler=a?()=>a(R,!1):R,p=y=>Pp(y,!1,u),f=u.onStop=()=>{const y=Ha.get(u);if(y){if(l)l(y,4);else for(const L of y)L();Ha.delete(u)}},e?i?R(!0):A=u.run():a?a(R.bind(null,!0),!0):u.run(),h.pause=u.pause.bind(u),h.resume=u.resume.bind(u),h.stop=h,h}function Ei(n,e=1/0,t){if(e<=0||!yt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,an(n))Ei(n.value,e,t);else if($e(n))for(let i=0;i<n.length;i++)Ei(n[i],e,t);else if(Vd(n)||Ks(n))n.forEach(i=>{Ei(i,e,t)});else if(Xd(n)){for(const i in n)Ei(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Ei(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ta(n,e,t,i){try{return i?n(...i):n()}catch(s){oo(s,e,t)}}function kn(n,e,t,i){if(et(n)){const s=ta(n,e,t,i);return s&&Gd(s)&&s.catch(r=>{oo(r,e,t)}),s}if($e(n)){const s=[];for(let r=0;r<n.length;r++)s.push(kn(n[r],e,t,i));return s}}function oo(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||wt;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const u=o.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](n,l,c)===!1)return}o=o.parent}if(r){Ri(),ta(r,null,10,[n,l,c]),Pi();return}}Lp(n,t,s,i,a)}function Lp(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const fn=[];let Jn=-1;const Zs=[];let Vi=null,Gs=0;const ff=Promise.resolve();let Va=null;function pl(n){const e=Va||ff;return n?e.then(this?n.bind(this):n):e}function Ip(n){let e=Jn+1,t=fn.length;for(;e<t;){const i=e+t>>>1,s=fn[i],r=Xr(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function yc(n){if(!(n.flags&1)){const e=Xr(n),t=fn[fn.length-1];!t||!(n.flags&2)&&e>=Xr(t)?fn.push(n):fn.splice(Ip(e),0,n),n.flags|=1,hf()}}function hf(){Va||(Va=ff.then(mf))}function Up(n){$e(n)?Zs.push(...n):Vi&&n.id===-1?Vi.splice(Gs+1,0,n):n.flags&1||(Zs.push(n),n.flags|=1),hf()}function $c(n,e,t=Jn+1){for(;t<fn.length;t++){const i=fn[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;fn.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function pf(n){if(Zs.length){const e=[...new Set(Zs)].sort((t,i)=>Xr(t)-Xr(i));if(Zs.length=0,Vi){Vi.push(...e);return}for(Vi=e,Gs=0;Gs<Vi.length;Gs++){const t=Vi[Gs];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Vi=null,Gs=0}}const Xr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function mf(n){try{for(Jn=0;Jn<fn.length;Jn++){const e=fn[Jn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ta(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Jn<fn.length;Jn++){const e=fn[Jn];e&&(e.flags&=-2)}Jn=-1,fn.length=0,pf(),Va=null,(fn.length||Zs.length)&&mf()}}let wn=null,gf=null;function Ga(n){const e=wn;return wn=n,gf=n&&n.type.__scopeId||null,e}function lo(n,e=wn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&$a(-1);const r=Ga(e),a=ys.length;let o;try{o=n(...s)}finally{for(let l=ys.length;l>a;l--)jf();Ga(r),i._d&&$a(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function _f(n,e){if(wn===null)return n;const t=po(wn),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,a,o,l=wt]=e[s];r&&(et(r)&&(r={mounted:r,updated:r}),r.deep&&Ei(a),i.push({dir:r,instance:t,value:a,oldValue:void 0,arg:o,modifiers:l}))}return n}function es(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let a=0;a<s.length;a++){const o=s[a];r&&(o.oldValue=r[a].value);let l=o.dir[i];l&&(Ri(),kn(l,t,8,[n.el,o,n,e]),Pi())}}function Np(n,e){if(rn){let t=rn.provides;const i=rn.parent&&rn.parent.provides;i===t&&(t=rn.provides=Object.create(i)),t[n]=e}}function Ia(n,e,t=!1){const i=Kf();if(i||Qs){let s=Qs?Qs._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&et(e)?e.call(i&&i.proxy):e}}const Fp=Symbol.for("v-scx"),Op=()=>Ia(Fp);function si(n,e,t){return vf(n,e,t)}function vf(n,e,t=wt){const{immediate:i,deep:s,flush:r,once:a}=t,o=Kt({},t),l=e&&i||!e&&r!=="post";let c;if(qr){if(r==="sync"){const p=Op();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=li,p.resume=li,p.pause=li,p}}const u=rn;o.call=(p,_,M)=>kn(p,u,_,M);let d=!1;r==="post"?o.scheduler=p=>{_n(p,u&&u.suspense)}:r!=="sync"&&(d=!0,o.scheduler=(p,_)=>{_?p():yc(p)}),o.augmentJob=p=>{e&&(p.flags|=4),d&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const f=Dp(n,e,o);return qr&&(c?c.push(f):l&&f()),f}function kp(n,e,t){const i=this.proxy,s=Ft(n)?n.includes(".")?xf(i,n):()=>i[n]:n.bind(i,i);let r;et(e)?r=e:(r=e.handler,t=e);const a=na(this),o=vf(s,r.bind(i),t);return a(),o}function xf(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const Bp=Symbol("_vte"),yf=n=>n.__isTeleport,Un=Symbol("_leaveCb"),br=Symbol("_enterCb");function zp(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return pr(()=>{n.isMounted=!0}),Ts(()=>{n.isUnmounting=!0}),n}const Dn=[Function,Array],Mf={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Dn,onEnter:Dn,onAfterEnter:Dn,onEnterCancelled:Dn,onBeforeLeave:Dn,onLeave:Dn,onAfterLeave:Dn,onLeaveCancelled:Dn,onBeforeAppear:Dn,onAppear:Dn,onAfterAppear:Dn,onAppearCancelled:Dn},bf=n=>{const e=n.subTree;return e.component?bf(e.component):e},Hp={name:"BaseTransition",props:Mf,setup(n,{slots:e}){const t=Kf(),i=zp();return()=>{const s=e.default&&Tf(e.default(),!0),r=s&&s.length?Sf(s):t.subTree?Rt():void 0;if(!r)return;const a=pt(n),{mode:o}=a;if(i.isLeaving)return So(r);const l=jc(r);if(!l)return So(r);let c=ml(l,a,i,t,d=>c=d);l.type!==hn&&$r(l,c);let u=t.subTree&&jc(t.subTree);if(u&&u.type!==hn&&!hs(u,l)&&bf(t).type!==hn){let d=ml(u,a,i,t);if($r(u,d),o==="out-in"&&l.type!==hn)return i.isLeaving=!0,d.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete d.afterLeave,u=void 0},So(r);o==="in-out"&&l.type!==hn?d.delayLeave=(f,p,_)=>{const M=Ef(i,u);M[String(u.key)]=u,f[Un]=()=>{p(),f[Un]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{_(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function Sf(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==hn){e=t;break}}return e}const Vp=Hp;function Ef(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function ml(n,e,t,i,s){const{appear:r,mode:a,persisted:o=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:f,onLeave:p,onAfterLeave:_,onLeaveCancelled:M,onBeforeAppear:g,onAppear:h,onAfterAppear:A,onAppearCancelled:R}=e,y=String(n.key),L=Ef(t,n),C=(E,b)=>{E&&kn(E,i,9,b)},S=(E,b)=>{const U=b[1];C(E,b),$e(E)?E.every(I=>I.length<=1)&&U():E.length<=1&&U()},D={mode:a,persisted:o,beforeEnter(E){let b=l;if(!t.isMounted)if(r)b=g||l;else return;E[Un]&&E[Un](!0);const U=L[y];U&&hs(n,U)&&U.el[Un]&&U.el[Un](),C(b,[E])},enter(E){if(L[y]===n)return;let b=c,U=u,I=d;if(!t.isMounted)if(r)b=h||c,U=A||u,I=R||d;else return;let N=!1;E[br]=ne=>{N||(N=!0,ne?C(I,[E]):C(U,[E]),D.delayedLeave&&D.delayedLeave(),E[br]=void 0)};const X=E[br].bind(null,!1);b?S(b,[E,X]):X()},leave(E,b){const U=String(n.key);if(E[br]&&E[br](!0),t.isUnmounting)return b();C(f,[E]);let I=!1;E[Un]=X=>{I||(I=!0,b(),X?C(M,[E]):C(_,[E]),E[Un]=void 0,L[U]===n&&delete L[U])};const N=E[Un].bind(null,!1);L[U]=n,p?S(p,[E,N]):N()},clone(E){const b=ml(E,e,t,i,s);return s&&s(b),b}};return D}function So(n){if(co(n))return n=Ki(n),n.children=null,n}function jc(n){if(!co(n))return yf(n.type)&&n.children?Sf(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&et(t.default))return t.default()}}function $r(n,e){n.shapeFlag&6&&n.component?(n.transition=e,$r(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Tf(n,e=!1,t){let i=[],s=0;for(let r=0;r<n.length;r++){let a=n[r];const o=t==null?a.key:String(t)+String(a.key!=null?a.key:r);a.type===rt?(a.patchFlag&128&&s++,i=i.concat(Tf(a.children,e,o))):(e||a.type!==hn)&&i.push(o!=null?Ki(a,{key:o}):a)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function wf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function qc(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const Wa=new WeakMap;function Fr(n,e,t,i,s=!1){if($e(n)){n.forEach((M,g)=>Fr(M,e&&($e(e)?e[g]:e),t,i,s));return}if(Or(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Fr(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?po(i.component):i.el,a=s?null:r,{i:o,r:l}=n,c=e&&e.r,u=o.refs===wt?o.refs={}:o.refs,d=o.setupState,f=pt(d),p=d===wt?Hd:M=>qc(u,M)?!1:vt(f,M),_=(M,g)=>!(g&&qc(u,g));if(c!=null&&c!==l){if(Yc(e),Ft(c))u[c]=null,p(c)&&(d[c]=null);else if(an(c)){const M=e;_(c,M.k)&&(c.value=null),M.k&&(u[M.k]=null)}}if(et(l))ta(l,o,12,[a,u]);else{const M=Ft(l),g=an(l);if(M||g){const h=()=>{if(n.f){const A=M?p(l)?d[l]:u[l]:_()||!n.k?l.value:u[n.k];if(s)$e(A)&&cc(A,r);else if($e(A))A.includes(r)||A.push(r);else if(M)u[l]=[r],p(l)&&(d[l]=u[l]);else{const R=[r];_(l,n.k)&&(l.value=R),n.k&&(u[n.k]=R)}}else M?(u[l]=a,p(l)&&(d[l]=a)):g&&(_(l,n.k)&&(l.value=a),n.k&&(u[n.k]=a))};if(a){const A=()=>{h(),Wa.delete(n)};A.id=-1,Wa.set(n,A),_n(A,t)}else Yc(n),h()}}}function Yc(n){const e=Wa.get(n);e&&(e.flags|=8,Wa.delete(n))}ro().requestIdleCallback;ro().cancelIdleCallback;const Or=n=>!!n.type.__asyncLoader,co=n=>n.type.__isKeepAlive;function Gp(n,e){Af(n,"a",e)}function Wp(n,e){Af(n,"da",e)}function Af(n,e,t=rn){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(uo(e,i,t),t){let s=t.parent;for(;s&&s.parent;)co(s.parent.vnode)&&Xp(i,e,t,s),s=s.parent}}function Xp(n,e,t,i){const s=uo(e,n,i,!0);Cf(()=>{cc(i[e],s)},t)}function uo(n,e,t=rn,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...a)=>{Ri();const o=na(t),l=kn(e,t,n,a);return o(),Pi(),l});return i?s.unshift(r):s.push(r),r}}const Ui=n=>(e,t=rn)=>{(!qr||n==="sp")&&uo(n,(...i)=>e(...i),t)},$p=Ui("bm"),pr=Ui("m"),jp=Ui("bu"),qp=Ui("u"),Ts=Ui("bum"),Cf=Ui("um"),Yp=Ui("sp"),Kp=Ui("rtg"),Zp=Ui("rtc");function Jp(n,e=rn){uo("ec",n,e)}const Qp="components",Rf=Symbol.for("v-ndc");function Js(n){return Ft(n)?em(Qp,n,!1)||n:n||Rf}function em(n,e,t=!0,i=!1){const s=wn||rn;if(s){const r=s.type;{const o=Om(r,!1);if(o&&(o===e||o===pn(e)||o===so(pn(e))))return r}const a=Kc(s[n]||r[n],e)||Kc(s.appContext[n],e);return!a&&i?r:a}}function Kc(n,e){return n&&(n[e]||n[pn(e)]||n[so(pn(e))])}function xt(n,e,t,i){let s;const r=t,a=$e(n);if(a||Ft(n)){const o=a&&xs(n);let l=!1,c=!1;o&&(l=!On(n),c=Di(n),n=ao(n)),s=new Array(n.length);for(let u=0,d=n.length;u<d;u++)s[u]=e(l?c?sr(qn(n[u])):qn(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let o=0;o<n;o++)s[o]=e(o+1,o,void 0,r)}else if(yt(n))if(n[Symbol.iterator])s=Array.from(n,(o,l)=>e(o,l,void 0,r));else{const o=Object.keys(n);s=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}const gl=n=>n?Zf(n)?po(n):gl(n.parent):null,kr=Kt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>gl(n.parent),$root:n=>gl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Df(n),$forceUpdate:n=>n.f||(n.f=()=>{yc(n.update)}),$nextTick:n=>n.n||(n.n=pl.bind(n.proxy)),$watch:n=>kp.bind(n)}),Eo=(n,e)=>n!==wt&&!n.__isScriptSetup&&vt(n,e),tm={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:a,type:o,appContext:l}=n;if(e[0]!=="$"){const f=a[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(Eo(i,e))return a[e]=1,i[e];if(s!==wt&&vt(s,e))return a[e]=2,s[e];if(vt(r,e))return a[e]=3,r[e];if(t!==wt&&vt(t,e))return a[e]=4,t[e];_l&&(a[e]=0)}}const c=kr[e];let u,d;if(c)return e==="$attrs"&&sn(n.attrs,"get",""),c(n);if((u=o.__cssModules)&&(u=u[e]))return u;if(t!==wt&&vt(t,e))return a[e]=4,t[e];if(d=l.config.globalProperties,vt(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return Eo(s,e)?(s[e]=t,!0):i!==wt&&vt(i,e)?(i[e]=t,!0):vt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:a}},o){let l;return!!(t[o]||n!==wt&&o[0]!=="$"&&vt(n,o)||Eo(e,o)||vt(r,o)||vt(i,o)||vt(kr,o)||vt(s.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:vt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Zc(n){return $e(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let _l=!0;function nm(n){const e=Df(n),t=n.proxy,i=n.ctx;_l=!1,e.beforeCreate&&Jc(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:p,updated:_,activated:M,deactivated:g,beforeDestroy:h,beforeUnmount:A,destroyed:R,unmounted:y,render:L,renderTracked:C,renderTriggered:S,errorCaptured:D,serverPrefetch:E,expose:b,inheritAttrs:U,components:I,directives:N,filters:X}=e;if(c&&im(c,i,null),a)for(const se in a){const z=a[se];et(z)&&(i[se]=z.bind(t))}if(s){const se=s.call(t,t);yt(se)&&(n.data=Wr(se))}if(_l=!0,r)for(const se in r){const z=r[se],me=et(z)?z.bind(t,t):et(z.get)?z.get.bind(t,t):li,Te=!et(z)&&et(z.set)?z.set.bind(t):li,ye=Et({get:me,set:Te});Object.defineProperty(i,se,{enumerable:!0,configurable:!0,get:()=>ye.value,set:Ie=>ye.value=Ie})}if(o)for(const se in o)Pf(o[se],i,t,se);if(l){const se=et(l)?l.call(t):l;Reflect.ownKeys(se).forEach(z=>{Np(z,se[z])})}u&&Jc(u,n,"c");function Y(se,z){$e(z)?z.forEach(me=>se(me.bind(t))):z&&se(z.bind(t))}if(Y($p,d),Y(pr,f),Y(jp,p),Y(qp,_),Y(Gp,M),Y(Wp,g),Y(Jp,D),Y(Zp,C),Y(Kp,S),Y(Ts,A),Y(Cf,y),Y(Yp,E),$e(b))if(b.length){const se=n.exposed||(n.exposed={});b.forEach(z=>{Object.defineProperty(se,z,{get:()=>t[z],set:me=>t[z]=me,enumerable:!0})})}else n.exposed||(n.exposed={});L&&n.render===li&&(n.render=L),U!=null&&(n.inheritAttrs=U),I&&(n.components=I),N&&(n.directives=N),E&&wf(n)}function im(n,e,t=li){$e(n)&&(n=vl(n));for(const i in n){const s=n[i];let r;yt(s)?"default"in s?r=Ia(s.from||i,s.default,!0):r=Ia(s.from||i):r=Ia(s),an(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:a=>r.value=a}):e[i]=r}}function Jc(n,e,t){kn($e(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Pf(n,e,t,i){let s=i.includes(".")?xf(t,i):()=>t[i];if(Ft(n)){const r=e[n];et(r)&&si(s,r)}else if(et(n))si(s,n.bind(t));else if(yt(n))if($e(n))n.forEach(r=>Pf(r,e,t,i));else{const r=et(n.handler)?n.handler.bind(t):e[n.handler];et(r)&&si(s,r,n)}}function Df(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:a}}=n.appContext,o=r.get(e);let l;return o?l=o:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>Xa(l,c,a,!0)),Xa(l,e,a)),yt(e)&&r.set(e,l),l}function Xa(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&Xa(n,r,t,!0),s&&s.forEach(a=>Xa(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=sm[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const sm={data:Qc,props:eu,emits:eu,methods:Rr,computed:Rr,beforeCreate:cn,created:cn,beforeMount:cn,mounted:cn,beforeUpdate:cn,updated:cn,beforeDestroy:cn,beforeUnmount:cn,destroyed:cn,unmounted:cn,activated:cn,deactivated:cn,errorCaptured:cn,serverPrefetch:cn,components:Rr,directives:Rr,watch:am,provide:Qc,inject:rm};function Qc(n,e){return e?n?function(){return Kt(et(n)?n.call(this,this):n,et(e)?e.call(this,this):e)}:e:n}function rm(n,e){return Rr(vl(n),vl(e))}function vl(n){if($e(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function cn(n,e){return n?[...new Set([].concat(n,e))]:e}function Rr(n,e){return n?Kt(Object.create(null),n,e):e}function eu(n,e){return n?$e(n)&&$e(e)?[...new Set([...n,...e])]:Kt(Object.create(null),Zc(n),Zc(e??{})):e}function am(n,e){if(!n)return e;if(!e)return n;const t=Kt(Object.create(null),n);for(const i in e)t[i]=cn(n[i],e[i]);return t}function Lf(){return{app:null,config:{isNativeTag:Hd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let om=0;function lm(n,e){return function(i,s=null){et(i)||(i=Kt({},i)),s!=null&&!yt(s)&&(s=null);const r=Lf(),a=new WeakSet,o=[];let l=!1;const c=r.app={_uid:om++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Bm,get config(){return r.config},set config(u){},use(u,...d){return a.has(u)||(u&&et(u.install)?(a.add(u),u.install(c,...d)):et(u)&&(a.add(u),u(c,...d))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,d){return d?(r.components[u]=d,c):r.components[u]},directive(u,d){return d?(r.directives[u]=d,c):r.directives[u]},mount(u,d,f){if(!l){const p=c._ceVNode||Ee(i,s);return p.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),n(p,u,f),l=!0,c._container=u,u.__vue_app__=c,po(p.component)}},onUnmount(u){o.push(u)},unmount(){l&&(kn(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,d){return r.provides[u]=d,c},runWithContext(u){const d=Qs;Qs=c;try{return u()}finally{Qs=d}}};return c}}let Qs=null;const cm=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${pn(e)}Modifiers`]||n[`${Ji(e)}Modifiers`];function um(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||wt;let s=t;const r=e.startsWith("update:"),a=r&&cm(i,e.slice(7));a&&(a.trim&&(s=t.map(u=>Ft(u)?u.trim():u)),a.number&&(s=t.map(dc)));let o,l=i[o=vo(e)]||i[o=vo(pn(e))];!l&&r&&(l=i[o=vo(Ji(e))]),l&&kn(l,n,6,s);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,kn(c,n,6,s)}}const dm=new WeakMap;function If(n,e,t=!1){const i=t?dm:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let a={},o=!1;if(!et(n)){const l=c=>{const u=If(c,e,!0);u&&(o=!0,Kt(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!o?(yt(n)&&i.set(n,null),null):($e(r)?r.forEach(l=>a[l]=null):Kt(a,r),yt(n)&&i.set(n,a),a)}function fo(n,e){return!n||!to(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),vt(n,e[0].toLowerCase()+e.slice(1))||vt(n,Ji(e))||vt(n,e))}function tu(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:d,data:f,setupState:p,ctx:_,inheritAttrs:M}=n,g=Ga(n);let h,A;try{if(t.shapeFlag&4){const y=s||i,L=y;h=ti(c.call(L,y,u,d,p,f,_)),A=o}else{const y=e;h=ti(y.length>1?y(d,{attrs:o,slots:a,emit:l}):y(d,null)),A=e.props?o:fm(o)}}catch(y){ys.length=0,oo(y,n,1),h=Ee(hn)}let R=h;if(A&&M!==!1){const y=Object.keys(A),{shapeFlag:L}=R;y.length&&L&7&&(r&&y.some(no)&&(A=hm(A,r)),R=Ki(R,A,!1,!0))}return t.dirs&&(R=Ki(R,null,!1,!0),R.dirs=R.dirs?R.dirs.concat(t.dirs):t.dirs),t.transition&&$r(R,t.transition),h=R,Ga(g),h}const fm=n=>{let e;for(const t in n)(t==="class"||t==="style"||to(t))&&((e||(e={}))[t]=n[t]);return e},hm=(n,e)=>{const t={};for(const i in n)(!no(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function pm(n,e,t){const{props:i,children:s,component:r}=n,{props:a,children:o,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?nu(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(Uf(a,i,f)&&!fo(c,f))return!0}}}else return(s||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?nu(i,a,c):!0:!!a;return!1}function nu(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(Uf(e,n,r)&&!fo(t,r))return!0}return!1}function Uf(n,e,t){const i=n[t],s=e[t];return t==="style"&&yt(i)&&yt(s)?!fc(i,s):i!==s}function mm({vnode:n,parent:e,suspense:t},i){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const Nf={},Ff=()=>Object.create(Nf),Of=n=>Object.getPrototypeOf(n)===Nf;function gm(n,e,t,i=!1){const s={},r=Ff();n.propsDefaults=Object.create(null),kf(n,e,s,r);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=i?s:Sp(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function _m(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:a}}=n,o=pt(s),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(fo(n.emitsOptions,f))continue;const p=e[f];if(l)if(vt(r,f))p!==r[f]&&(r[f]=p,c=!0);else{const _=pn(f);s[_]=xl(l,o,_,p,n,!1)}else p!==r[f]&&(r[f]=p,c=!0)}}}else{kf(n,e,s,r)&&(c=!0);let u;for(const d in o)(!e||!vt(e,d)&&((u=Ji(d))===d||!vt(e,u)))&&(l?t&&(t[d]!==void 0||t[u]!==void 0)&&(s[d]=xl(l,o,d,void 0,n,!0)):delete s[d]);if(r!==o)for(const d in r)(!e||!vt(e,d))&&(delete r[d],c=!0)}c&&Si(n.attrs,"set","")}function kf(n,e,t,i){const[s,r]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(Ir(l))continue;const c=e[l];let u;s&&vt(s,u=pn(l))?!r||!r.includes(u)?t[u]=c:(o||(o={}))[u]=c:fo(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(r){const l=pt(t),c=o||wt;for(let u=0;u<r.length;u++){const d=r[u];t[d]=xl(s,l,d,c[d],n,!vt(c,d))}}return a}function xl(n,e,t,i,s,r){const a=n[t];if(a!=null){const o=vt(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&et(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=na(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}a[0]&&(r&&!o?i=!1:a[1]&&(i===""||i===Ji(t))&&(i=!0))}return i}const vm=new WeakMap;function Bf(n,e,t=!1){const i=t?vm:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,a={},o=[];let l=!1;if(!et(n)){const u=d=>{l=!0;const[f,p]=Bf(d,e,!0);Kt(a,f),p&&o.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return yt(n)&&i.set(n,Ys),Ys;if($e(r))for(let u=0;u<r.length;u++){const d=pn(r[u]);iu(d)&&(a[d]=wt)}else if(r)for(const u in r){const d=pn(u);if(iu(d)){const f=r[u],p=a[d]=$e(f)||et(f)?{type:f}:Kt({},f),_=p.type;let M=!1,g=!0;if($e(_))for(let h=0;h<_.length;++h){const A=_[h],R=et(A)&&A.name;if(R==="Boolean"){M=!0;break}else R==="String"&&(g=!1)}else M=et(_)&&_.name==="Boolean";p[0]=M,p[1]=g,(M||vt(p,"default"))&&o.push(d)}}const c=[a,o];return yt(n)&&i.set(n,c),c}function iu(n){return n[0]!=="$"&&!Ir(n)}const Mc=n=>n==="_"||n==="_ctx"||n==="$stable",bc=n=>$e(n)?n.map(ti):[ti(n)],xm=(n,e,t)=>{if(e._n)return e;const i=lo((...s)=>bc(e(...s)),t);return i._c=!1,i},zf=(n,e,t)=>{const i=n._ctx;for(const s in n){if(Mc(s))continue;const r=n[s];if(et(r))e[s]=xm(s,r,i);else if(r!=null){const a=bc(r);e[s]=()=>a}}},Hf=(n,e)=>{const t=bc(e);n.slots.default=()=>t},Vf=(n,e,t)=>{for(const i in e)(t||!Mc(i))&&(n[i]=e[i])},ym=(n,e,t)=>{const i=n.slots=Ff();if(n.vnode.shapeFlag&32){const s=e._;s?(Vf(i,e,t),t&&$d(i,"_",s,!0)):zf(e,i)}else e&&Hf(n,e)},Mm=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,a=wt;if(i.shapeFlag&32){const o=e._;o?t&&o===1?r=!1:Vf(s,e,t):(r=!e.$stable,zf(e,s)),a=e}else e&&(Hf(n,e),a={default:1});if(r)for(const o in s)!Mc(o)&&a[o]==null&&delete s[o]},_n=wm;function bm(n){return Sm(n)}function Sm(n,e){const t=ro();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:p=li,insertStaticContent:_}=n,M=(P,k,T,ae=null,J=null,Q=null,te=void 0,le=null,Z=!!k.dynamicChildren)=>{if(P===k)return;P&&!hs(P,k)&&(ae=Se(P),Ie(P,J,Q,!0),P=null),k.patchFlag===-2&&(Z=!1,k.dynamicChildren=null);const{type:x,ref:v,shapeFlag:F}=k;switch(x){case ho:g(P,k,T,ae);break;case hn:h(P,k,T,ae);break;case wo:P==null&&A(k,T,ae,te);break;case rt:I(P,k,T,ae,J,Q,te,le,Z);break;default:F&1?L(P,k,T,ae,J,Q,te,le,Z):F&6?N(P,k,T,ae,J,Q,te,le,Z):(F&64||F&128)&&x.process(P,k,T,ae,J,Q,te,le,Z,Xe)}v!=null&&J?Fr(v,P&&P.ref,Q,k||P,!k):v==null&&P&&P.ref!=null&&Fr(P.ref,null,Q,P,!0)},g=(P,k,T,ae)=>{if(P==null)i(k.el=o(k.children),T,ae);else{const J=k.el=P.el;k.children!==P.children&&c(J,k.children)}},h=(P,k,T,ae)=>{P==null?i(k.el=l(k.children||""),T,ae):k.el=P.el},A=(P,k,T,ae)=>{[P.el,P.anchor]=_(P.children,k,T,ae,P.el,P.anchor)},R=({el:P,anchor:k},T,ae)=>{let J;for(;P&&P!==k;)J=f(P),i(P,T,ae),P=J;i(k,T,ae)},y=({el:P,anchor:k})=>{let T;for(;P&&P!==k;)T=f(P),s(P),P=T;s(k)},L=(P,k,T,ae,J,Q,te,le,Z)=>{if(k.type==="svg"?te="svg":k.type==="math"&&(te="mathml"),P==null)C(k,T,ae,J,Q,te,le,Z);else{const x=P.el&&P.el._isVueCE?P.el:null;try{x&&x._beginPatch(),E(P,k,J,Q,te,le,Z)}finally{x&&x._endPatch()}}},C=(P,k,T,ae,J,Q,te,le)=>{let Z,x;const{props:v,shapeFlag:F,transition:W,dirs:j}=P;if(Z=P.el=a(P.type,Q,v&&v.is,v),F&8?u(Z,P.children):F&16&&D(P.children,Z,null,ae,J,To(P,Q),te,le),j&&es(P,null,ae,"created"),S(Z,P,P.scopeId,te,ae),v){for(const be in v)be!=="value"&&!Ir(be)&&r(Z,be,null,v[be],Q,ae);"value"in v&&r(Z,"value",null,v.value,Q),(x=v.onVnodeBeforeMount)&&Kn(x,ae,P)}j&&es(P,null,ae,"beforeMount");const q=Em(J,W);q&&W.beforeEnter(Z),i(Z,k,T),((x=v&&v.onVnodeMounted)||q||j)&&_n(()=>{try{x&&Kn(x,ae,P),q&&W.enter(Z),j&&es(P,null,ae,"mounted")}finally{}},J)},S=(P,k,T,ae,J)=>{if(T&&p(P,T),ae)for(let Q=0;Q<ae.length;Q++)p(P,ae[Q]);if(J){let Q=J.subTree;if(k===Q||$f(Q.type)&&(Q.ssContent===k||Q.ssFallback===k)){const te=J.vnode;S(P,te,te.scopeId,te.slotScopeIds,J.parent)}}},D=(P,k,T,ae,J,Q,te,le,Z=0)=>{for(let x=Z;x<P.length;x++){const v=P[x]=le?bi(P[x]):ti(P[x]);M(null,v,k,T,ae,J,Q,te,le)}},E=(P,k,T,ae,J,Q,te)=>{const le=k.el=P.el;let{patchFlag:Z,dynamicChildren:x,dirs:v}=k;Z|=P.patchFlag&16;const F=P.props||wt,W=k.props||wt;let j;if(T&&ts(T,!1),(j=W.onVnodeBeforeUpdate)&&Kn(j,T,k,P),v&&es(k,P,T,"beforeUpdate"),T&&ts(T,!0),x&&(!P.dynamicChildren||P.dynamicChildren.length!==x.length)&&(Z=0,te=!1,x=null),(F.innerHTML&&W.innerHTML==null||F.textContent&&W.textContent==null)&&u(le,""),x?b(P.dynamicChildren,x,le,T,ae,To(k,J),Q):te||z(P,k,le,null,T,ae,To(k,J),Q,!1),Z>0){if(Z&16)U(le,F,W,T,J);else if(Z&2&&F.class!==W.class&&r(le,"class",null,W.class,J),Z&4&&r(le,"style",F.style,W.style,J),Z&8){const q=k.dynamicProps;for(let be=0;be<q.length;be++){const fe=q[be],ve=F[fe],ze=W[fe];(ze!==ve||fe==="value")&&r(le,fe,ve,ze,J,T)}}Z&1&&P.children!==k.children&&u(le,k.children)}else!te&&x==null&&U(le,F,W,T,J);((j=W.onVnodeUpdated)||v)&&_n(()=>{j&&Kn(j,T,k,P),v&&es(k,P,T,"updated")},ae)},b=(P,k,T,ae,J,Q,te)=>{for(let le=0;le<k.length;le++){const Z=P[le],x=k[le],v=Z.el&&(Z.type===rt||!hs(Z,x)||Z.shapeFlag&198)?d(Z.el):T;M(Z,x,v,null,ae,J,Q,te,!0)}},U=(P,k,T,ae,J)=>{if(k!==T){if(k!==wt)for(const Q in k)!Ir(Q)&&!(Q in T)&&r(P,Q,k[Q],null,J,ae);for(const Q in T){if(Ir(Q))continue;const te=T[Q],le=k[Q];te!==le&&Q!=="value"&&r(P,Q,le,te,J,ae)}"value"in T&&r(P,"value",k.value,T.value,J)}},I=(P,k,T,ae,J,Q,te,le,Z)=>{const x=k.el=P?P.el:o(""),v=k.anchor=P?P.anchor:o("");let{patchFlag:F,dynamicChildren:W,slotScopeIds:j}=k;j&&(le=le?le.concat(j):j),P==null?(i(x,T,ae),i(v,T,ae),D(k.children||[],T,v,J,Q,te,le,Z)):F>0&&F&64&&W&&P.dynamicChildren&&P.dynamicChildren.length===W.length?(b(P.dynamicChildren,W,T,J,Q,te,le),(k.key!=null||J&&k===J.subTree)&&Gf(P,k,!0)):z(P,k,T,v,J,Q,te,le,Z)},N=(P,k,T,ae,J,Q,te,le,Z)=>{k.slotScopeIds=le,P==null?k.shapeFlag&512?J.ctx.activate(k,T,ae,te,Z):X(k,T,ae,J,Q,te,Z):ne(P,k,Z)},X=(P,k,T,ae,J,Q,te)=>{const le=P.component=Lm(P,ae,J);if(co(P)&&(le.ctx.renderer=Xe),Im(le,!1,te),le.asyncDep){if(J&&J.registerDep(le,Y,te),!P.el){const Z=le.subTree=Ee(hn);h(null,Z,k,T),P.placeholder=Z.el}}else Y(le,P,k,T,J,Q,te)},ne=(P,k,T)=>{const ae=k.component=P.component;if(pm(P,k,T))if(ae.asyncDep&&!ae.asyncResolved){se(ae,k,T);return}else ae.next=k,ae.update();else k.el=P.el,ae.vnode=k},Y=(P,k,T,ae,J,Q,te)=>{const le=()=>{if(P.isMounted){let{next:F,bu:W,u:j,parent:q,vnode:be}=P;{const Ae=Wf(P);if(Ae){F&&(F.el=be.el,se(P,F,te)),Ae.asyncDep.then(()=>{_n(()=>{P.isUnmounted||x()},J)});return}}let fe=F,ve;ts(P,!1),F?(F.el=be.el,se(P,F,te)):F=be,W&&La(W),(ve=F.props&&F.props.onVnodeBeforeUpdate)&&Kn(ve,q,F,be),ts(P,!0);const ze=tu(P),pe=P.subTree;P.subTree=ze,M(pe,ze,d(pe.el),Se(pe),P,J,Q),F.el=ze.el,fe===null&&mm(P,ze.el),j&&_n(j,J),(ve=F.props&&F.props.onVnodeUpdated)&&_n(()=>Kn(ve,q,F,be),J)}else{let F;const{el:W,props:j}=k,{bm:q,m:be,parent:fe,root:ve,type:ze}=P,pe=Or(k);ts(P,!1),q&&La(q),!pe&&(F=j&&j.onVnodeBeforeMount)&&Kn(F,fe,k),ts(P,!0);{ve.ce&&ve.ce._hasShadowRoot()&&ve.ce._injectChildStyle(ze,P.parent?P.parent.type:void 0);const Ae=P.subTree=tu(P);M(null,Ae,T,ae,P,J,Q),k.el=Ae.el}if(be&&_n(be,J),!pe&&(F=j&&j.onVnodeMounted)){const Ae=k;_n(()=>Kn(F,fe,Ae),J)}(k.shapeFlag&256||fe&&Or(fe.vnode)&&fe.vnode.shapeFlag&256)&&P.a&&_n(P.a,J),P.isMounted=!0,k=T=ae=null}};P.scope.on();const Z=P.effect=new Kd(le);P.scope.off();const x=P.update=Z.run.bind(Z),v=P.job=Z.runIfDirty.bind(Z);v.i=P,v.id=P.uid,Z.scheduler=()=>yc(v),ts(P,!0),x()},se=(P,k,T)=>{k.component=P;const ae=P.vnode.props;P.vnode=k,P.next=null,_m(P,k.props,ae,T),Mm(P,k.children,T),Ri(),$c(P),Pi()},z=(P,k,T,ae,J,Q,te,le,Z=!1)=>{const x=P&&P.children,v=P?P.shapeFlag:0,F=k.children,{patchFlag:W,shapeFlag:j}=k;if(W>0){if(W&128){Te(x,F,T,ae,J,Q,te,le,Z);return}else if(W&256){me(x,F,T,ae,J,Q,te,le,Z);return}}j&8?(v&16&&Ue(x,J,Q),F!==x&&u(T,F)):v&16?j&16?Te(x,F,T,ae,J,Q,te,le,Z):Ue(x,J,Q,!0):(v&8&&u(T,""),j&16&&D(F,T,ae,J,Q,te,le,Z))},me=(P,k,T,ae,J,Q,te,le,Z)=>{P=P||Ys,k=k||Ys;const x=P.length,v=k.length,F=Math.min(x,v);let W;for(W=0;W<F;W++){const j=k[W]=Z?bi(k[W]):ti(k[W]);M(P[W],j,T,null,J,Q,te,le,Z)}x>v?Ue(P,J,Q,!0,!1,F):D(k,T,ae,J,Q,te,le,Z,F)},Te=(P,k,T,ae,J,Q,te,le,Z)=>{let x=0;const v=k.length;let F=P.length-1,W=v-1;for(;x<=F&&x<=W;){const j=P[x],q=k[x]=Z?bi(k[x]):ti(k[x]);if(hs(j,q))M(j,q,T,null,J,Q,te,le,Z);else break;x++}for(;x<=F&&x<=W;){const j=P[F],q=k[W]=Z?bi(k[W]):ti(k[W]);if(hs(j,q))M(j,q,T,null,J,Q,te,le,Z);else break;F--,W--}if(x>F){if(x<=W){const j=W+1,q=j<v?k[j].el:ae;for(;x<=W;)M(null,k[x]=Z?bi(k[x]):ti(k[x]),T,q,J,Q,te,le,Z),x++}}else if(x>W)for(;x<=F;)Ie(P[x],J,Q,!0),x++;else{const j=x,q=x,be=new Map;for(x=q;x<=W;x++){const we=k[x]=Z?bi(k[x]):ti(k[x]);we.key!=null&&be.set(we.key,x)}let fe,ve=0;const ze=W-q+1;let pe=!1,Ae=0;const Fe=new Array(ze);for(x=0;x<ze;x++)Fe[x]=0;for(x=j;x<=F;x++){const we=P[x];if(ve>=ze){Ie(we,J,Q,!0);continue}let qe;if(we.key!=null)qe=be.get(we.key);else for(fe=q;fe<=W;fe++)if(Fe[fe-q]===0&&hs(we,k[fe])){qe=fe;break}qe===void 0?Ie(we,J,Q,!0):(Fe[qe-q]=x+1,qe>=Ae?Ae=qe:pe=!0,M(we,k[qe],T,null,J,Q,te,le,Z),ve++)}const Ge=pe?Tm(Fe):Ys;for(fe=Ge.length-1,x=ze-1;x>=0;x--){const we=q+x,qe=k[we],Ye=k[we+1],ht=we+1<v?Ye.el||Xf(Ye):ae;Fe[x]===0?M(null,qe,T,ht,J,Q,te,le,Z):pe&&(fe<0||x!==Ge[fe]?ye(qe,T,ht,2):fe--)}}},ye=(P,k,T,ae,J=null)=>{const{el:Q,type:te,transition:le,children:Z,shapeFlag:x}=P;if(x&6){ye(P.component.subTree,k,T,ae);return}if(x&128){P.suspense.move(k,T,ae);return}if(x&64){te.move(P,k,T,Xe);return}if(te===rt){i(Q,k,T);for(let F=0;F<Z.length;F++)ye(Z[F],k,T,ae);i(P.anchor,k,T);return}if(te===wo){R(P,k,T);return}if(ae!==2&&x&1&&le)if(ae===0)le.persisted&&!Q[Un]?i(Q,k,T):(le.beforeEnter(Q),i(Q,k,T),_n(()=>le.enter(Q),J));else{const{leave:F,delayLeave:W,afterLeave:j}=le,q=()=>{P.ctx.isUnmounted?s(Q):i(Q,k,T)},be=()=>{const fe=Q._isLeaving||!!Q[Un];Q._isLeaving&&Q[Un](!0),le.persisted&&!fe?q():F(Q,()=>{q(),j&&j()})};W?W(Q,q,be):be()}else i(Q,k,T)},Ie=(P,k,T,ae=!1,J=!1)=>{const{type:Q,props:te,ref:le,children:Z,dynamicChildren:x,shapeFlag:v,patchFlag:F,dirs:W,cacheIndex:j,memo:q}=P;if(F===-2&&(J=!1),le!=null&&(Ri(),Fr(le,null,T,P,!0),Pi()),j!=null&&(k.renderCache[j]=void 0),v&256){k.ctx.deactivate(P);return}const be=v&1&&W,fe=!Or(P);let ve;if(fe&&(ve=te&&te.onVnodeBeforeUnmount)&&Kn(ve,k,P),v&6)Me(P.component,T,ae);else{if(v&128){P.suspense.unmount(T,ae);return}be&&es(P,null,k,"beforeUnmount"),v&64?P.type.remove(P,k,T,Xe,ae):x&&!x.hasOnce&&(Q!==rt||F>0&&F&64)?Ue(x,k,T,!1,!0):(Q===rt&&F&384||!J&&v&16)&&Ue(Z,k,T),ae&&je(P)}const ze=q!=null&&j==null;(fe&&(ve=te&&te.onVnodeUnmounted)||be||ze)&&_n(()=>{ve&&Kn(ve,k,P),be&&es(P,null,k,"unmounted"),ze&&(P.el=null)},T)},je=P=>{const{type:k,el:T,anchor:ae,transition:J}=P;if(k===rt){re(T,ae);return}if(k===wo){y(P);return}const Q=()=>{s(T),J&&!J.persisted&&J.afterLeave&&J.afterLeave()};if(P.shapeFlag&1&&J&&!J.persisted){const{leave:te,delayLeave:le}=J,Z=()=>te(T,Q);le?le(P.el,Q,Z):Z()}else Q()},re=(P,k)=>{let T;for(;P!==k;)T=f(P),s(P),P=T;s(k)},Me=(P,k,T)=>{const{bum:ae,scope:J,job:Q,subTree:te,um:le,m:Z,a:x}=P;su(Z),su(x),ae&&La(ae),J.stop(),Q&&(Q.flags|=8,Ie(te,P,k,T)),le&&_n(le,k),_n(()=>{P.isUnmounted=!0},k)},Ue=(P,k,T,ae=!1,J=!1,Q=0)=>{for(let te=Q;te<P.length;te++)Ie(P[te],k,T,ae,J)},Se=P=>{if(P.shapeFlag&6)return Se(P.component.subTree);if(P.shapeFlag&128)return P.suspense.next();const k=f(P.anchor||P.el),T=k&&k[Bp];return T?f(T):k};let Be=!1;const We=(P,k,T)=>{let ae;P==null?k._vnode&&(Ie(k._vnode,null,null,!0),ae=k._vnode.component):M(k._vnode||null,P,k,null,null,null,T),k._vnode=P,Be||(Be=!0,$c(ae),pf(),Be=!1)},Xe={p:M,um:Ie,m:ye,r:je,mt:X,mc:D,pc:z,pbc:b,n:Se,o:n};return{render:We,hydrate:void 0,createApp:lm(We)}}function To({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function ts({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Em(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Gf(n,e,t=!1){const i=n.children,s=e.children;if($e(i)&&$e(s))for(let r=0;r<i.length;r++){const a=i[r];let o=s[r];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=s[r]=bi(s[r]),o.el=a.el),!t&&o.patchFlag!==-2&&Gf(a,o)),o.type===ho&&(o.patchFlag===-1&&(o=s[r]=bi(o)),o.el=a.el),o.type===hn&&!o.el&&(o.el=a.el)}}function Tm(n){const e=n.slice(),t=[0];let i,s,r,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,a=t.length-1;r<a;)o=r+a>>1,n[t[o]]<c?r=o+1:a=o;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,a=t[r-1];r-- >0;)t[r]=a,a=e[a];return t}function Wf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Wf(e)}function su(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Xf(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Xf(e.subTree):null}const $f=n=>n.__isSuspense;function wm(n,e){e&&e.pendingBranch?$e(n)?e.effects.push(...n):e.effects.push(n):Up(n)}const rt=Symbol.for("v-fgt"),ho=Symbol.for("v-txt"),hn=Symbol.for("v-cmt"),wo=Symbol.for("v-stc"),ys=[];let An=null;function oe(n=!1){ys.push(An=n?null:[])}function jf(){ys.pop(),An=ys[ys.length-1]||null}let jr=1;function $a(n,e=!1){jr+=n,n<0&&An&&e&&(An.hasOnce=!0)}function qf(n){return n.dynamicChildren=jr>0?An||Ys:null,jf(),jr>0&&An&&An.push(n),n}function xe(n,e,t,i,s,r){return qf(m(n,e,t,i,s,r,!0))}function Nt(n,e,t,i,s){return qf(Ee(n,e,t,i,s,!0))}function ja(n){return n?n.__v_isVNode===!0:!1}function hs(n,e){return n.type===e.type&&n.key===e.key}const Yf=({key:n})=>n??null,Ua=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Ft(n)||an(n)||et(n)?{i:wn,r:n,k:e,f:!!t}:n:null);function m(n,e=null,t=null,i=0,s=null,r=n===rt?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Yf(e),ref:e&&Ua(e),scopeId:gf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:wn};return o?(qa(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Ft(t)?8:16),jr>0&&!a&&An&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&An.push(l),l}const Ee=Am;function Am(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===Rf)&&(n=hn),ja(n)){const o=Ki(n,e,!0);return t&&qa(o,t),jr>0&&!r&&An&&(o.shapeFlag&6?An[An.indexOf(n)]=o:An.push(o)),o.patchFlag=-2,o}if(km(n)&&(n=n.__vccOpts),e){e=Cm(e);let{class:o,style:l}=e;o&&!Ft(o)&&(e.class=bt(o)),yt(l)&&(xc(l)&&!$e(l)&&(l=Kt({},l)),e.style=Fn(l))}const a=Ft(n)?1:$f(n)?128:yf(n)?64:yt(n)?4:et(n)?2:0;return m(n,e,t,i,s,a,r,!0)}function Cm(n){return n?xc(n)||Of(n)?Kt({},n):n:null}function Ki(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:a,children:o,transition:l}=n,c=e?Rm(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Yf(c),ref:e&&e.ref?t&&r?$e(r)?r.concat(Ua(e)):[r,Ua(e)]:Ua(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==rt?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ki(n.ssContent),ssFallback:n.ssFallback&&Ki(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&$r(u,l.clone(u)),u}function tt(n=" ",e=0){return Ee(ho,null,n,e)}function Rt(n="",e=!1){return e?(oe(),Nt(hn,null,n)):Ee(hn,null,n)}function ti(n){return n==null||typeof n=="boolean"?Ee(hn):$e(n)?Ee(rt,null,n.slice()):ja(n)?bi(n):Ee(ho,null,String(n))}function bi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Ki(n)}function qa(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if($e(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),qa(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Of(e)?e._ctx=wn:s===3&&wn&&(wn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else if(et(e)){if(i&65){qa(n,{default:e});return}e={default:e,_ctx:wn},t=32}else e=String(e),i&64?(t=16,e=[tt(e)]):t=8;n.children=e,n.shapeFlag|=t}function Rm(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=bt([e.class,i.class]));else if(s==="style")e.style=Fn([e.style,i.style]);else if(to(s)){const r=e[s],a=i[s];a&&r!==a&&!($e(r)&&r.includes(a))?e[s]=r?[].concat(r,a):a:a==null&&r==null&&!no(s)&&(e[s]=a)}else s!==""&&(e[s]=i[s])}return e}function Kn(n,e,t,i=null){kn(n,e,7,[t,i])}const Pm=Lf();let Dm=0;function Lm(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||Pm,r={uid:Dm++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new sp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Bf(i,s),emitsOptions:If(i,s),emit:null,emitted:null,propsDefaults:wt,inheritAttrs:i.inheritAttrs,ctx:wt,data:wt,props:wt,attrs:wt,slots:wt,refs:wt,setupState:wt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=um.bind(null,r),n.ce&&n.ce(r),r}let rn=null;const Kf=()=>rn||wn;let Ya,yl;{const n=ro(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(a=>a(r)):s[0](r)}};Ya=e("__VUE_INSTANCE_SETTERS__",t=>rn=t),yl=e("__VUE_SSR_SETTERS__",t=>qr=t)}const na=n=>{const e=rn;return Ya(n),n.scope.on(),()=>{n.scope.off(),Ya(e)}},ru=()=>{rn&&rn.scope.off(),Ya(null)};function Zf(n){return n.vnode.shapeFlag&4}let qr=!1;function Im(n,e=!1,t=!1){e&&yl(e);const{props:i,children:s}=n.vnode,r=Zf(n);gm(n,i,r,e),ym(n,s,t||e);const a=r?Um(n,e):void 0;return e&&yl(!1),a}function Um(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,tm);const{setup:i}=t;if(i){Ri();const s=n.setupContext=i.length>1?Fm(n):null,r=na(n),a=ta(i,n,0,[n.props,s]),o=Gd(a);if(Pi(),r(),(o||n.sp)&&!Or(n)&&wf(n),o){if(a.then(ru,ru),e)return a.then(l=>{au(n,l)}).catch(l=>{oo(l,n,0)});n.asyncDep=a}else au(n,a)}else Jf(n)}function au(n,e,t){et(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:yt(e)&&(n.setupState=df(e)),Jf(n)}function Jf(n,e,t){const i=n.type;n.render||(n.render=i.render||li);{const s=na(n);Ri();try{nm(n)}finally{Pi(),s()}}}const Nm={get(n,e){return sn(n,"get",""),n[e]}};function Fm(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Nm),slots:n.slots,emit:n.emit,expose:e}}function po(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(df(Ep(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in kr)return kr[t](n)},has(e,t){return t in e||t in kr}})):n.proxy}function Om(n,e=!0){return et(n)?n.displayName||n.name:n.name||e&&n.__name}function km(n){return et(n)&&"__vccOpts"in n}const Et=(n,e)=>Rp(n,e,qr);function Ka(n,e,t){try{$a(-1);const i=arguments.length;return i===2?yt(e)&&!$e(e)?ja(e)?Ee(n,null,[e]):Ee(n,e):Ee(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&ja(t)&&(t=[t]),Ee(n,e,t))}finally{$a(1)}}const Bm="3.5.40";/**
* @vue/runtime-dom v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ml;const ou=typeof window<"u"&&window.trustedTypes;if(ou)try{Ml=ou.createPolicy("vue",{createHTML:n=>n})}catch{}const Qf=Ml?n=>Ml.createHTML(n):n=>n,zm="http://www.w3.org/2000/svg",Hm="http://www.w3.org/1998/Math/MathML",Mi=typeof document<"u"?document:null,lu=Mi&&Mi.createElement("template"),Vm={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?Mi.createElementNS(zm,n):e==="mathml"?Mi.createElementNS(Hm,n):t?Mi.createElement(n,{is:t}):Mi.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Mi.createTextNode(n),createComment:n=>Mi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Mi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const a=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{lu.innerHTML=Qf(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=lu.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Ni="transition",Sr="animation",Yr=Symbol("_vtc"),eh={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Gm=Kt({},Mf,eh),Wm=n=>(n.displayName="Transition",n.props=Gm,n),Sc=Wm((n,{slots:e})=>Ka(Vp,Xm(n),e)),ns=(n,e=[])=>{$e(n)?n.forEach(t=>t(...e)):n&&n(...e)},cu=n=>n?$e(n)?n.some(e=>e.length>1):n.length>1:!1;function Xm(n){const e={};for(const I in n)I in eh||(e[I]=n[I]);if(n.css===!1)return e;const{name:t="v",type:i,duration:s,enterFromClass:r=`${t}-enter-from`,enterActiveClass:a=`${t}-enter-active`,enterToClass:o=`${t}-enter-to`,appearFromClass:l=r,appearActiveClass:c=a,appearToClass:u=o,leaveFromClass:d=`${t}-leave-from`,leaveActiveClass:f=`${t}-leave-active`,leaveToClass:p=`${t}-leave-to`}=n,_=$m(s),M=_&&_[0],g=_&&_[1],{onBeforeEnter:h,onEnter:A,onEnterCancelled:R,onLeave:y,onLeaveCancelled:L,onBeforeAppear:C=h,onAppear:S=A,onAppearCancelled:D=R}=e,E=(I,N,X,ne)=>{I._enterCancelled=ne,is(I,N?u:o),is(I,N?c:a),X&&X()},b=(I,N)=>{I._isLeaving=!1,is(I,d),is(I,p),is(I,f),N&&N()},U=I=>(N,X)=>{const ne=I?S:A,Y=()=>E(N,I,X);ns(ne,[N,Y]),uu(()=>{is(N,I?l:r),mi(N,I?u:o),cu(ne)||du(N,i,M,Y)})};return Kt(e,{onBeforeEnter(I){ns(h,[I]),mi(I,r),mi(I,a)},onBeforeAppear(I){ns(C,[I]),mi(I,l),mi(I,c)},onEnter:U(!1),onAppear:U(!0),onLeave(I,N){I._isLeaving=!0;const X=()=>b(I,N);mi(I,d),I._enterCancelled?(mi(I,f),pu(I)):(pu(I),mi(I,f)),uu(()=>{I._isLeaving&&(is(I,d),mi(I,p),cu(y)||du(I,i,g,X))}),ns(y,[I,X])},onEnterCancelled(I){E(I,!1,void 0,!0),ns(R,[I])},onAppearCancelled(I){E(I,!0,void 0,!0),ns(D,[I])},onLeaveCancelled(I){b(I),ns(L,[I])}})}function $m(n){if(n==null)return null;if(yt(n))return[Ao(n.enter),Ao(n.leave)];{const e=Ao(n);return[e,e]}}function Ao(n){return Kh(n)}function mi(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[Yr]||(n[Yr]=new Set)).add(e)}function is(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[Yr];t&&(t.delete(e),t.size||(n[Yr]=void 0))}function uu(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let jm=0;function du(n,e,t,i){const s=n._endId=++jm,r=()=>{s===n._endId&&i()};if(t!=null)return setTimeout(r,t);const{type:a,timeout:o,propCount:l}=qm(n,e);if(!a)return i();const c=a+"end";let u=0;const d=()=>{n.removeEventListener(c,f),r()},f=p=>{p.target===n&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},o+1),n.addEventListener(c,f)}function qm(n,e){const t=window.getComputedStyle(n),i=_=>(t[_]||"").split(", "),s=i(`${Ni}Delay`),r=i(`${Ni}Duration`),a=fu(s,r),o=i(`${Sr}Delay`),l=i(`${Sr}Duration`),c=fu(o,l);let u=null,d=0,f=0;e===Ni?a>0&&(u=Ni,d=a,f=r.length):e===Sr?c>0&&(u=Sr,d=c,f=l.length):(d=Math.max(a,c),u=d>0?a>c?Ni:Sr:null,f=u?u===Ni?r.length:l.length:0);const p=u===Ni&&/\b(?:transform|all)(?:,|$)/.test(i(`${Ni}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:p}}function fu(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>hu(t)+hu(n[i])))}function hu(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function pu(n){return(n?n.ownerDocument:document).body.offsetHeight}function Ym(n,e,t){const i=n[Yr];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const mu=Symbol("_vod"),Km=Symbol("_vsh"),Zm=Symbol(""),Jm=/(?:^|;)\s*display\s*:/;function Qm(n,e,t){const i=n.style,s=Ft(t);let r=!1;if(t&&!s){if(e)if(Ft(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&Pr(i,o,"")}else for(const a in e)t[a]==null&&Pr(i,a,"");for(const a in t){a==="display"&&(r=!0);const o=t[a];o!=null?tg(n,a,!Ft(e)&&e?e[a]:void 0,o)||Pr(i,a,o):Pr(i,a,"")}}else if(s){if(e!==t){const a=i[Zm];a&&(t+=";"+a),i.cssText=t,r=Jm.test(t)}}else e&&n.removeAttribute("style");mu in n&&(n[mu]=r?i.display:"",n[Km]&&(i.display="none"))}const gu=/\s*!important$/;function Pr(n,e,t){if($e(t))t.forEach(i=>Pr(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=eg(n,e);gu.test(t)?n.setProperty(Ji(i),t.replace(gu,""),"important"):n[i]=t}}const _u=["Webkit","Moz","ms"],Co={};function eg(n,e){const t=Co[e];if(t)return t;let i=pn(e);if(i!=="filter"&&i in n)return Co[e]=i;i=so(i);for(let s=0;s<_u.length;s++){const r=_u[s]+i;if(r in n)return Co[e]=r}return e}function tg(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Ft(i)&&t===i}const vu="http://www.w3.org/1999/xlink";function xu(n,e,t,i,s,r=np(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(vu,e.slice(6,e.length)):n.setAttributeNS(vu,e,t):t==null||r&&!jd(t)?n.removeAttribute(e):n.setAttribute(e,r?"":ui(t)?String(t):t)}function yu(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Qf(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const o=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=jd(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(s||e)}function Ws(n,e,t,i){n.addEventListener(e,t,i)}function ng(n,e,t,i){n.removeEventListener(e,t,i)}const Mu=Symbol("_vei");function ig(n,e,t,i,s=null){const r=n[Mu]||(n[Mu]={}),a=r[e];if(i&&a)a.value=i;else{const[o,l]=ag(e);if(i){const c=r[e]=cg(i,s);Ws(n,o,c,l)}else a&&(ng(n,o,a,l),r[e]=void 0)}}const sg=/(Once|Passive|Capture)$/,rg=/^on:?(?:Once|Passive|Capture)$/;function ag(n){let e,t;for(;(t=n.match(sg))&&!rg.test(n);)e||(e={}),n=n.slice(0,n.length-t[1].length),e[t[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):Ji(n.slice(2)),e]}let Ro=0;const og=Promise.resolve(),lg=()=>Ro||(og.then(()=>Ro=0),Ro=Date.now());function cg(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;const s=t.value;if($e(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const a=s.slice(),o=[i];for(let l=0;l<a.length&&!i._stopped;l++){const c=a[l];c&&kn(c,e,5,o)}}else kn(s,e,5,[i])};return t.value=n,t.attached=lg(),t}const bu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,ug=(n,e,t,i,s,r)=>{const a=s==="svg";e==="class"?Ym(n,i,a):e==="style"?Qm(n,t,i):to(e)?no(e)||ig(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):dg(n,e,i,a))?(yu(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&xu(n,e,i,a,r,e!=="value")):n._isVueCE&&(fg(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!Ft(i)))?yu(n,pn(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),xu(n,e,i,a))};function dg(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&bu(e)&&et(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return bu(e)&&Ft(t)?!1:e in n}function fg(n,e){const t=n._def.props;if(!t)return!1;const i=pn(e);return Array.isArray(t)?t.some(s=>pn(s)===i):Object.keys(t).some(s=>pn(s)===i)}const Su=n=>{const e=n.props["onUpdate:modelValue"]||!1;return $e(e)?t=>La(e,t):e};function hg(n){n.target.composing=!0}function Eu(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Po=Symbol("_assign");function Tu(n,e,t){return e&&(n=n.trim()),t&&(n=dc(n)),n}const th={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n[Po]=Su(s);const r=i||s.props&&s.props.type==="number";Ws(n,e?"change":"input",a=>{a.target.composing||n[Po](Tu(n.value,t,r))}),(t||r)&&Ws(n,"change",()=>{n.value=Tu(n.value,t,r)}),e||(Ws(n,"compositionstart",hg),Ws(n,"compositionend",Eu),Ws(n,"change",Eu))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:s,number:r}},a){if(n[Po]=Su(a),n.composing)return;const o=(r||n.type==="number")&&!/^0\d/.test(n.value)?dc(n.value):n.value,l=e??"";if(o===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&e===t||s&&n.value.trim()===l)||(n.value=l)}},pg=["ctrl","shift","alt","meta"],mg={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>pg.some(t=>n[`${t}Key`]&&!e.includes(t))},Yt=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=((s,...r)=>{for(let a=0;a<e.length;a++){const o=mg[e[a]];if(o&&o(s,e))return}return n(s,...r)}))},gg={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},nh=(n,e)=>{const t=n._withKeys||(n._withKeys={}),i=e.join(".");return t[i]||(t[i]=(s=>{if(!("key"in s))return;const r=Ji(s.key);if(e.some(a=>a===r||gg[a]===r))return n(s)}))},_g=Kt({patchProp:ug},Vm);let wu;function vg(){return wu||(wu=bm(_g))}const xg=((...n)=>{const e=vg().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=Mg(i);if(!s)return;const r=e._component;!et(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=t(s,!1,yg(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e});function yg(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Mg(n){return Ft(n)?document.querySelector(n):n}const bg={class:"site-footer"},Sg={__name:"SiteFooter",emits:["navigate"],setup(n){return(e,t)=>(oe(),xe("footer",bg,[t[4]||(t[4]=m("div",null,[m("strong",null,"大临蓝印"),m("p",null,"一个关于大临村蓝印花布的数字展示平台，让非遗纹样被看见、被理解、被重新使用。")],-1)),m("div",null,[t[3]||(t[3]=m("span",null,"快速链接",-1)),m("button",{type:"button",onClick:t[0]||(t[0]=i=>e.$emit("navigate","/library"))},"蓝印纹库"),m("button",{type:"button",onClick:t[1]||(t[1]=i=>e.$emit("navigate","/heritage"))},"她与蓝"),m("button",{type:"button",onClick:t[2]||(t[2]=i=>e.$emit("navigate","/find-blue"))},"寻找你的蓝")]),t[5]||(t[5]=m("div",null,[m("span",null,"非遗信息"),m("p",null,"浙江嘉兴桐乡市大临村（石门镇） · 国家级非物质文化遗产"),m("small",null,"© 2026 大临村蓝印花布数字展示平台")],-1))]))}},ih="/assets/logo.jpg";/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ca={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=({size:n,strokeWidth:e=2,absoluteStrokeWidth:t,color:i,iconNode:s,name:r,class:a,...o},{slots:l})=>Ka("svg",{...ca,width:n||ca.width,height:n||ca.height,stroke:i||ca.stroke,"stroke-width":t?Number(e)*24/Number(n):e,class:["lucide",`lucide-${Eg(r??"icon")}`],...o},[...s.map(c=>Ka(...c)),...l.default?[l.default()]:[]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const at=(n,e)=>(t,{slots:i})=>Ka(Tg,{...t,iconNode:e,name:n},i);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Er=at("ArrowDownIcon",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ms=at("ArrowLeftIcon",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ai=at("ArrowRightIcon",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sh=at("BookOpenIcon",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ds=at("BoxIcon",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=at("CameraIcon",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Au=at("CheckIcon",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag=at("CircleAlertIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=at("Clock3Icon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg=at("CloudUploadIcon",[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg=at("CoffeeIcon",[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bl=at("DownloadIcon",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=at("Gamepad2Icon",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg=at("HandHeartIcon",[["path",{d:"M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16",key:"1ifwr1"}],["path",{d:"m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9",key:"17abbs"}],["path",{d:"m2 15 6 6",key:"10dquu"}],["path",{d:"M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z",key:"1h3036"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cu=at("HeartIcon",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ru=at("ImagePlusIcon",[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rh=at("LayersIcon",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=at("LeafIcon",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug=at("MapPinIcon",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pu=at("Maximize2Icon",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng=at("MenuIcon",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Do=at("MousePointer2Icon",[["path",{d:"M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z",key:"edeuup"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg=at("MoveIcon",[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"m15 19-3 3-3-3",key:"11eu04"}],["path",{d:"m19 9 3 3-3 3",key:"1mg7y2"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"m5 9-3 3 3 3",key:"j64kie"}],["path",{d:"m9 5 3-3 3 3",key:"l8vdw6"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og=at("OrbitIcon",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M10.4 21.9a10 10 0 0 0 9.941-15.416",key:"eohfx2"}],["path",{d:"M13.5 2.1a10 10 0 0 0-9.841 15.416",key:"19pvbm"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Du=at("PackageIcon",[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7",key:"yx3hmr"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ah=at("RotateCcwIcon",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lu=at("RotateCwIcon",[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg=at("RouteIcon",[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iu=at("ScanLineIcon",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M7 12h10",key:"b7w52i"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oh=at("SearchIcon",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg=at("ShieldCheckIcon",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=at("ShirtIcon",[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",key:"1wgbhj"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg=at("SmartphoneIcon",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rr=at("SparklesIcon",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg=at("TrophyIcon",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg=at("Undo2Icon",[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wg=at("UsersRoundIcon",[["path",{d:"M18 21a8 8 0 0 0-16 0",key:"3ypg7q"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3",key:"10s06x"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ar=at("XIcon",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lh=at("ZoomInIcon",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xg=at("ZoomOutIcon",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]),$i=[{id:"0182ff04858b98ea9248cd301d0a278b",src:"/assets/collected/0182ff04858b98ea9248cd301d0a278b.png",type:"png",label:"本地采集素材"},{id:"01d3fbd3b8f8eaa31ab01d39e47b749b",src:"/assets/collected/01d3fbd3b8f8eaa31ab01d39e47b749b.jpg",type:"jpg",label:"本地采集素材"},{id:"028c51947c5f7d191432534f8c8c406f",src:"/assets/collected/028c51947c5f7d191432534f8c8c406f.jpg",type:"jpg",label:"本地采集素材"},{id:"0510ada6fecb96ca4478872090ce1809",src:"/assets/collected/0510ada6fecb96ca4478872090ce1809.png",type:"png",label:"本地采集素材"},{id:"063fc35152b12d6a935623315a207fba",src:"/assets/collected/063fc35152b12d6a935623315a207fba.png",type:"png",label:"本地采集素材"},{id:"0b36d07490865ddd888e047c84f87060",src:"/assets/collected/0b36d07490865ddd888e047c84f87060.jpg",type:"jpg",label:"本地采集素材"},{id:"0ca7611e8ef81537becc001309dd50ff",src:"/assets/collected/0ca7611e8ef81537becc001309dd50ff.jpg",type:"jpg",label:"本地采集素材"},{id:"17c2bbe479aaa0a10a14425a3f40c241",src:"/assets/collected/17c2bbe479aaa0a10a14425a3f40c241.png",type:"png",label:"本地采集素材"},{id:"1c18f8641254020b0d9104c027e34da0",src:"/assets/collected/1c18f8641254020b0d9104c027e34da0.jpg",type:"jpg",label:"本地采集素材"},{id:"1dec0874756fc99aecc3dde98dd0b138",src:"/assets/collected/1dec0874756fc99aecc3dde98dd0b138.jpg",type:"jpg",label:"本地采集素材"},{id:"2246f57e0873288260af7f41c41a6976",src:"/assets/collected/2246f57e0873288260af7f41c41a6976.png",type:"png",label:"本地采集素材"},{id:"230ca8c118f0d457075e9a880cb11ce2",src:"/assets/collected/230ca8c118f0d457075e9a880cb11ce2.png",type:"png",label:"本地采集素材"},{id:"2691bc01b70c4aea6e8e2706ee7d6cf9",src:"/assets/collected/2691bc01b70c4aea6e8e2706ee7d6cf9.jpg",type:"jpg",label:"本地采集素材"},{id:"275171d7ac3f67dba86dea6d213e75a1",src:"/assets/collected/275171d7ac3f67dba86dea6d213e75a1.png",type:"png",label:"本地采集素材"},{id:"2bf7d9e1e70726a91f0ba439e36990a2",src:"/assets/collected/2bf7d9e1e70726a91f0ba439e36990a2.jpg",type:"jpg",label:"本地采集素材"},{id:"2c6c79079ef39f3b22350f904442715c",src:"/assets/collected/2c6c79079ef39f3b22350f904442715c.jpg",type:"jpg",label:"本地采集素材"},{id:"2e893155afc5490962042b940759d35c",src:"/assets/collected/2e893155afc5490962042b940759d35c.png",type:"png",label:"本地采集素材"},{id:"2fdbc0300df013de14debb9db68d64d7",src:"/assets/collected/2fdbc0300df013de14debb9db68d64d7.jpg",type:"jpg",label:"本地采集素材"},{id:"324910dabd935b3b9fc53691ac2c649b",src:"/assets/collected/324910dabd935b3b9fc53691ac2c649b.png",type:"png",label:"本地采集素材"},{id:"34c98322b14ccc7f47c9ab92a6df184a",src:"/assets/collected/34c98322b14ccc7f47c9ab92a6df184a.jpg",type:"jpg",label:"本地采集素材"},{id:"35dc1a9b5612b397206e2ebf84d07780",src:"/assets/collected/35dc1a9b5612b397206e2ebf84d07780.jpg",type:"jpg",label:"本地采集素材"},{id:"3708619f6bed006638e9fbc7ea411e04",src:"/assets/collected/3708619f6bed006638e9fbc7ea411e04.jpg",type:"jpg",label:"本地采集素材"},{id:"3ac372d48709177036177764830b849e",src:"/assets/collected/3ac372d48709177036177764830b849e.jpg",type:"jpg",label:"本地采集素材"},{id:"3d0469c6ff646794023faf609e637939",src:"/assets/collected/3d0469c6ff646794023faf609e637939.png",type:"png",label:"本地采集素材"},{id:"3f17a3f7b548c8c32c7492cac0fa86eb",src:"/assets/collected/3f17a3f7b548c8c32c7492cac0fa86eb.png",type:"png",label:"本地采集素材"},{id:"4b8c9b2cbba29e814bb7ce2fe0953107",src:"/assets/collected/4b8c9b2cbba29e814bb7ce2fe0953107.png",type:"png",label:"本地采集素材"},{id:"4d0cb2417a23d896335cddf73f442da1",src:"/assets/collected/4d0cb2417a23d896335cddf73f442da1.png",type:"png",label:"本地采集素材"},{id:"4da996bff8295857987fc7f9f56b91b0",src:"/assets/collected/4da996bff8295857987fc7f9f56b91b0.png",type:"png",label:"本地采集素材"},{id:"530f782160a39b53cf8951ebc95aa7b7",src:"/assets/collected/530f782160a39b53cf8951ebc95aa7b7.jpg",type:"jpg",label:"本地采集素材"},{id:"54b24ed6b6f0b22af05359bf14f2dbc3",src:"/assets/collected/54b24ed6b6f0b22af05359bf14f2dbc3.png",type:"png",label:"本地采集素材"},{id:"58bd49b0928148989e0b4f815b8d279a",src:"/assets/collected/58bd49b0928148989e0b4f815b8d279a.png",type:"png",label:"本地采集素材"},{id:"594e82c876b9f35dc0be26dae405386d",src:"/assets/collected/594e82c876b9f35dc0be26dae405386d.jpg",type:"jpg",label:"本地采集素材"},{id:"5bdeac4d4e4ec6612b382cbfaa270ee7",src:"/assets/collected/5bdeac4d4e4ec6612b382cbfaa270ee7.jpg",type:"jpg",label:"本地采集素材"},{id:"659ed3552cdfd5b0659f4dba2e49f8d8",src:"/assets/collected/659ed3552cdfd5b0659f4dba2e49f8d8.png",type:"png",label:"本地采集素材"},{id:"66b0da1261a8c1401fde337052745c02",src:"/assets/collected/66b0da1261a8c1401fde337052745c02.jpg",type:"jpg",label:"本地采集素材"},{id:"673982225804e7019209df35840bbf03",src:"/assets/collected/673982225804e7019209df35840bbf03.png",type:"png",label:"本地采集素材"},{id:"6b6fb65a39529d6efb573a4c990e4682",src:"/assets/collected/6b6fb65a39529d6efb573a4c990e4682.png",type:"png",label:"本地采集素材"},{id:"6f46c2e5a178aa7cc2a6393aa718ed05",src:"/assets/collected/6f46c2e5a178aa7cc2a6393aa718ed05.jpg",type:"jpg",label:"本地采集素材"},{id:"7ac1b46d27db0a05b32d96a8da2dba30",src:"/assets/collected/7ac1b46d27db0a05b32d96a8da2dba30.jpg",type:"jpg",label:"本地采集素材"},{id:"8106d0f42a9cbd09f4cd60fa946db380",src:"/assets/collected/8106d0f42a9cbd09f4cd60fa946db380.jpg",type:"jpg",label:"本地采集素材"},{id:"83392733fb8e3e4b475ba6aa1c0a90d8",src:"/assets/collected/83392733fb8e3e4b475ba6aa1c0a90d8.jpg",type:"jpg",label:"本地采集素材"},{id:"9038c7891ac392215722ce6608aa9ae1",src:"/assets/collected/9038c7891ac392215722ce6608aa9ae1.png",type:"png",label:"本地采集素材"},{id:"96c96855da17133eec54d41f762e460f",src:"/assets/collected/96c96855da17133eec54d41f762e460f.png",type:"png",label:"本地采集素材"},{id:"9973bc3eb72224ae3e9c4fa173b61c11",src:"/assets/collected/9973bc3eb72224ae3e9c4fa173b61c11.jpg",type:"jpg",label:"本地采集素材"},{id:"a008186996b5a9f46c8c03d5cf756b69",src:"/assets/collected/a008186996b5a9f46c8c03d5cf756b69.png",type:"png",label:"本地采集素材"},{id:"a102aae0cc43ae8aca1febbba5eba620",src:"/assets/collected/a102aae0cc43ae8aca1febbba5eba620.png",type:"png",label:"本地采集素材"},{id:"a248e54f8817dedfee01f2a1e424d3dc",src:"/assets/collected/a248e54f8817dedfee01f2a1e424d3dc.png",type:"png",label:"本地采集素材"},{id:"a5025258cbfafe3333a05ae6a2887fe0",src:"/assets/collected/a5025258cbfafe3333a05ae6a2887fe0.png",type:"png",label:"本地采集素材"},{id:"a6ee57472cd4a608ca0d99c85b252431",src:"/assets/collected/a6ee57472cd4a608ca0d99c85b252431.jpg",type:"jpg",label:"本地采集素材"},{id:"aaf63ef83c86bd848855be37bf7aea66",src:"/assets/collected/aaf63ef83c86bd848855be37bf7aea66.png",type:"png",label:"本地采集素材"},{id:"adb0e449f63cd23d42acd0cdace235ed",src:"/assets/collected/adb0e449f63cd23d42acd0cdace235ed.jpg",type:"jpg",label:"本地采集素材"},{id:"adcd1ee4c5be390784f052f28d09a4ce",src:"/assets/collected/adcd1ee4c5be390784f052f28d09a4ce.png",type:"png",label:"本地采集素材"},{id:"b76631d4954d917e54371641d9b46595",src:"/assets/collected/b76631d4954d917e54371641d9b46595.png",type:"png",label:"本地采集素材"},{id:"b83a4a44ed164163e3895f6573fb93e4",src:"/assets/collected/b83a4a44ed164163e3895f6573fb93e4.jpg",type:"jpg",label:"本地采集素材"},{id:"bdf4a5b824555bd323429e96ea687c31",src:"/assets/collected/bdf4a5b824555bd323429e96ea687c31.jpg",type:"jpg",label:"本地采集素材"},{id:"bff7aa846d3d407b880de891a9e4f6f9",src:"/assets/collected/bff7aa846d3d407b880de891a9e4f6f9.jpg",type:"jpg",label:"本地采集素材"},{id:"c2073e183b8aa8813f494875d96352b3",src:"/assets/collected/c2073e183b8aa8813f494875d96352b3.png",type:"png",label:"本地采集素材"},{id:"c382ef04972b7c084bb8e89c70976482",src:"/assets/collected/c382ef04972b7c084bb8e89c70976482.png",type:"png",label:"本地采集素材"},{id:"c52959dd9f41ff25b19684fb71194ef2",src:"/assets/collected/c52959dd9f41ff25b19684fb71194ef2.png",type:"png",label:"本地采集素材"},{id:"c5b5ec240c6263e68a233973ffa0fa28",src:"/assets/collected/c5b5ec240c6263e68a233973ffa0fa28.png",type:"png",label:"本地采集素材"},{id:"cc3613d3674fcc3d8669fb83b6804782",src:"/assets/collected/cc3613d3674fcc3d8669fb83b6804782.jpg",type:"jpg",label:"本地采集素材"},{id:"ce4739428e270e4332bf1703bfd11717",src:"/assets/collected/ce4739428e270e4332bf1703bfd11717.png",type:"png",label:"本地采集素材"},{id:"d1aea8bfc6c156c3269d85b252e416ab",src:"/assets/collected/d1aea8bfc6c156c3269d85b252e416ab.png",type:"png",label:"本地采集素材"},{id:"d68d85f766b2c565502e594ca7f7e5d5",src:"/assets/collected/d68d85f766b2c565502e594ca7f7e5d5.jpg",type:"jpg",label:"本地采集素材"},{id:"d7f179ec28ba0eea0fcfb1ead0edc69b",src:"/assets/collected/d7f179ec28ba0eea0fcfb1ead0edc69b.png",type:"png",label:"本地采集素材"},{id:"d82b7f3028f63eb14000e15b09869e2b",src:"/assets/collected/d82b7f3028f63eb14000e15b09869e2b.jpg",type:"jpg",label:"本地采集素材"},{id:"d92e1a3bfafc574d8adea527d99d492c",src:"/assets/collected/d92e1a3bfafc574d8adea527d99d492c.png",type:"png",label:"本地采集素材"},{id:"da1dfc74855a5bd7b8fb10bfca02c37f",src:"/assets/collected/da1dfc74855a5bd7b8fb10bfca02c37f.png",type:"png",label:"本地采集素材"},{id:"db4bb2dde73e7966c20bc3a9145ef4aa",src:"/assets/collected/db4bb2dde73e7966c20bc3a9145ef4aa.png",type:"png",label:"本地采集素材"},{id:"dc7b3f595c08ead49161a85f1b62458e",src:"/assets/collected/dc7b3f595c08ead49161a85f1b62458e.jpg",type:"jpg",label:"本地采集素材"},{id:"de78690463eebb2de88a4a74746cc1be",src:"/assets/collected/de78690463eebb2de88a4a74746cc1be.png",type:"png",label:"本地采集素材"},{id:"df201fbbb1ad9d14fe455e470acb3a20",src:"/assets/collected/df201fbbb1ad9d14fe455e470acb3a20.jpg",type:"jpg",label:"本地采集素材"},{id:"e051e2c5b0e1bf5cf8d2a00f59f5bd70",src:"/assets/collected/e051e2c5b0e1bf5cf8d2a00f59f5bd70.jpg",type:"jpg",label:"本地采集素材"},{id:"e7cc2dfc9d894bd2ba4129b022d8fe8e",src:"/assets/collected/e7cc2dfc9d894bd2ba4129b022d8fe8e.jpg",type:"jpg",label:"本地采集素材"},{id:"eac803ad793c736e3372d312e7023f45",src:"/assets/collected/eac803ad793c736e3372d312e7023f45.png",type:"png",label:"本地采集素材"},{id:"ecc422c955836351c9c7187a6d5ce98d",src:"/assets/collected/ecc422c955836351c9c7187a6d5ce98d.png",type:"png",label:"本地采集素材"},{id:"ed2aadad1f03f71c17858ef5b966757d",src:"/assets/collected/ed2aadad1f03f71c17858ef5b966757d.jpg",type:"jpg",label:"本地采集素材"},{id:"f102cfa7934a6e6c37fb1a6653628e43",src:"/assets/collected/f102cfa7934a6e6c37fb1a6653628e43.png",type:"png",label:"本地采集素材"},{id:"f68fc7941afa48ed3a3b502014198d6d",src:"/assets/collected/f68fc7941afa48ed3a3b502014198d6d.png",type:"png",label:"本地采集素材"},{id:"fab766042e42b53e823a3b8de34c1068",src:"/assets/collected/fab766042e42b53e823a3b8de34c1068.png",type:"png",label:"本地采集素材"},{id:"fe8860c17a0ef8c0b8fb414b6a7cb6f1",src:"/assets/collected/fe8860c17a0ef8c0b8fb414b6a7cb6f1.png",type:"png",label:"本地采集素材"},{id:"ff9bc2f738ba667416eefadce5454489",src:"/assets/collected/ff9bc2f738ba667416eefadce5454489.png",type:"png",label:"本地采集素材"}],$g=[{label:"首页",path:"/"},{label:"蓝印纹库",path:"/library"},{label:"她与蓝",path:"/heritage"},{label:"寻找你的蓝",path:"/find-blue"},{label:"纹脉工坊",path:"/patternx"}],ch=[{key:"plant",name:"植物纹",title:"草木有灵",description:"缠枝莲、牡丹、梅兰竹菊，取法自然",patternClass:"pattern-floral",image:"/assets/categories/plant.jpg"},{key:"animal",name:"动物纹",title:"瑞兽祥禽",description:"龙凤呈祥、蝶恋花、鱼跃龙门",patternClass:"pattern-wing",image:"/assets/categories/animal.jpg"},{key:"auspicious",name:"吉祥纹",title:"福禄寿喜",description:"福字、寿字、八宝、暗八仙",patternClass:"pattern-coin",image:"/assets/categories/auspicious.jpg"},{key:"geometry",name:"几何纹",title:"方圆之道",description:"回纹、万字纹、方胜纹、盘长纹",patternClass:"pattern-grid",image:"/assets/categories/geometry.jpg"}],uh=[{title:"刻版",short:"牛皮纸上刻出纹样",text:"将画稿覆在牛皮纸版上，用刻刀一点点镂刻出花纹轮廓。刀要稳，手要准，纹样的精神从这里开始。"},{title:"刮浆",short:"黄豆粉与石灰调成防染浆",text:"将黄豆粉、石灰调成防染浆，均匀刮在布面与花版之间。这层浆，是蓝与白之间最重要的界线。"},{title:"染色",short:"浸入靛蓝染缸，氧化显色",text:"布料浸入植物靛蓝染缸，出缸后与空气接触慢慢氧化，颜色由浅变深，靛蓝的生命从水中醒来。"},{title:"刮白",short:"刮去防染浆，露出白花",text:"待染色稳定后刮去防染浆，原本被保护的白色花纹显现出来，蓝白对比在这一刻最动人。"},{title:"清洗",short:"流水洗净浮色",text:"用清水洗去浮色和残浆，让纹样更清朗、布面更柔和。布料在水里舒展开来，像呼吸一样。"},{title:"晾晒",short:"阳光下晾干，靛蓝定格",text:"将布料悬挂晾晒，让风与阳光慢慢带走湿气，靛蓝与素白由此定格成日常生活里的美。"}],Ln=uh.map(n=>n.short),jg=[{id:"chanzhi-lian",name:"缠枝莲纹",category:"plant",categoryName:"植物纹",patternClass:"pattern-floral",meaning:"生生不息，连绵不断",meaningDetail:"缠枝莲纹以莲花为主体，藤蔓缠绕连绵，寓意生生不息。在蓝印花布中，它寄托了江南人家对家族兴旺、绵延不绝的美好祈愿。",story:"相传大临村的缠枝莲纹源于宋元以来的民间布样。每逢婚嫁，母亲常以莲花与藤蔓入纹，祝愿女儿的新家清正和美、根脉相连。",era:"明清",usage:"被面、包袱布、帐檐",technique:Ln,modernUse:["丝巾图案","文创包装","展陈导视"],relatedIds:["mudan","shiliu","huiwen"],tags:["莲花","缠枝","植物","智慧","清雅"]},{id:"mudan",name:"牡丹团花纹",category:"plant",categoryName:"植物纹",patternClass:"pattern-rosette",meaning:"花开富贵，圆满安康",meaningDetail:"牡丹团花构图饱满，常用于节庆和婚嫁布品，表达富贵、圆满与热闹的生活愿望。",story:"大临村老布样中，牡丹常与蝴蝶、团寿、回纹组合，既有喜庆气，也有民间礼俗中的祝福秩序。",era:"明清",usage:"婚嫁被面、桌围、礼布",technique:Ln,modernUse:["伴手礼包装","抱枕面料","节庆海报"],relatedIds:["chanzhi-lian","shuangxi","hudie"],tags:["牡丹","富贵","团花","喜庆"]},{id:"shiliu",name:"石榴团圆纹",category:"plant",categoryName:"植物纹",patternClass:"pattern-seed",meaning:"多子多福，家族团圆",meaningDetail:"石榴籽粒繁多，寓意家族兴旺、团圆丰足，是礼俗布样中常见的祝福纹样。",story:"旧时嫁妆布中常见石榴与卷草相伴，既好看，也把长辈对新家庭的祝愿藏进一针一线。",era:"清代",usage:"嫁妆布、包袱布、礼盒布",technique:Ln,modernUse:["礼盒内衬","桌旗","节日贴纸"],relatedIds:["mudan","chanzhi-lian","shouzi"],tags:["石榴","团圆","多福","植物"]},{id:"hudie",name:"蝶恋花纹",category:"animal",categoryName:"动物纹",patternClass:"pattern-wing",meaning:"破茧成蝶，自由美好",meaningDetail:"蝴蝶轻盈灵动，常与花草相伴，寓意爱情、美好与生命转化。",story:"蝶恋花在民间布样中很受欢迎，轻巧的蝶形可以让沉静的靛蓝布面有一种活泼的呼吸感。",era:"清代",usage:"丝巾、发带、衣饰边纹",technique:Ln,modernUse:["服饰印花","手机壁纸","明信片"],relatedIds:["mudan","yu-lian","longfeng"],tags:["蝴蝶","自由","爱情","动物"]},{id:"yu-lian",name:"鱼跃莲纹",category:"animal",categoryName:"动物纹",patternClass:"pattern-wave",meaning:"年年有余，生机流动",meaningDetail:"鱼与莲组合，谐音连年有余，表达生活丰足与生命流动。",story:"江南水乡的鱼、莲、波纹常常同框出现，既来自眼前生活，也沉淀成民间祝福。",era:"明清",usage:"儿童布品、方巾、挂布",technique:Ln,modernUse:["儿童文创","帆布袋","互动纹样背景"],relatedIds:["chanzhi-lian","hudie","huiwen"],tags:["鱼","莲","有余","动物"]},{id:"longfeng",name:"龙凤呈祥纹",category:"animal",categoryName:"动物纹",patternClass:"pattern-cloud",meaning:"祥瑞圆满，喜庆成双",meaningDetail:"龙凤是礼俗纹样中的重要符号，常用于婚庆、祝福与大型陈设。",story:"龙凤纹在蓝印花布中会被简化成更适合刻版的线条，保留气势，也适合反复印染。",era:"清代",usage:"婚礼布置、门帘、挂幛",technique:Ln,modernUse:["展览主视觉","礼品包装","屏风纹样"],relatedIds:["shuangxi","mudan","shouzi"],tags:["龙凤","祥瑞","婚庆","动物"]},{id:"shouzi",name:"团寿字纹",category:"auspicious",categoryName:"吉祥纹",patternClass:"pattern-shou",meaning:"福寿双全，圆满长久",meaningDetail:"寿字经过团形化处理，构图稳定，寓意健康长寿与家宅圆满。",story:"祝寿布、厅堂陈设中常见团寿字，蓝底白字庄重清朗，很适合做中心纹。",era:"明清",usage:"祝寿布、被面、厅堂挂布",technique:Ln,modernUse:["茶礼包装","挂画","长辈礼品"],relatedIds:["huiwen","wufu","mudan"],tags:["寿","长寿","吉祥","团形"]},{id:"shuangxi",name:"双喜团花纹",category:"auspicious",categoryName:"吉祥纹",patternClass:"pattern-doublehappy",meaning:"喜事成双，良缘圆满",meaningDetail:"双喜纹是婚嫁礼俗中最直观的祝福符号，常与牡丹、莲花、蝴蝶搭配。",story:"在旧时婚嫁布置中，双喜纹既是装饰，也是仪式语言，让喜庆被看见、被记住。",era:"清代",usage:"婚嫁布、红包封、礼布",technique:Ln,modernUse:["婚礼伴手礼","红包封套","节庆海报"],relatedIds:["mudan","hudie","longfeng"],tags:["双喜","喜庆","婚嫁","吉祥"]},{id:"wufu",name:"五福蝠纹",category:"auspicious",categoryName:"吉祥纹",patternClass:"pattern-wing",meaning:"五福临门，福气绵延",meaningDetail:"蝙蝠取福的谐音，五蝠围合表达长寿、富贵、康宁、好德、善终的传统祝愿。",story:"民间图像常用谐音讲祝福，五福纹就是把语言、图案和愿望压进一块布里的例子。",era:"明清",usage:"门帘、礼品布、垫布",technique:Ln,modernUse:["家居软装","新年礼盒","导视图标"],relatedIds:["shouzi","huiwen","shuangxi"],tags:["五福","蝙蝠","平安","吉祥"]},{id:"huiwen",name:"回纹",category:"geometry",categoryName:"几何纹",patternClass:"pattern-grid",meaning:"回环不断，平安长久",meaningDetail:"回纹以连续折线构成循环结构，寓意周而复始、平安绵长。",story:"回纹常作为边饰出现，像给一块布加上秩序清晰的边界，也让主纹样更有仪式感。",era:"明清",usage:"边饰、帐檐、器物装饰",technique:Ln,modernUse:["网页边框","包装腰封","导视系统"],relatedIds:["shouzi","fangsheng","yu-lian"],tags:["回纹","平安","几何","边饰"]},{id:"fangsheng",name:"方胜纹",category:"geometry",categoryName:"几何纹",patternClass:"pattern-diamond",meaning:"同心相连，方正有序",meaningDetail:"方胜纹由菱形或方形连续组合，象征连接、守护与稳定。",story:"几何纹在蓝印花布中很适合大面积铺陈，蓝白节奏明确，也方便今天转译成数字图形。",era:"明清",usage:"包袱布、桌布、服饰底纹",technique:Ln,modernUse:["品牌辅助纹样","桌垫","网页背景"],relatedIds:["huiwen","pan-chang","chanzhi-lian"],tags:["方胜","几何","秩序","现代"]},{id:"pan-chang",name:"盘长纹",category:"geometry",categoryName:"几何纹",patternClass:"pattern-knot",meaning:"连绵不绝，福运长久",meaningDetail:"盘长纹线条回环不断，是传统吉祥符号中关于延续和连接的表达。",story:"盘长纹很像一条不断回到自身的路，适合表达家族、手艺和地方记忆的延续。",era:"明清",usage:"边框、礼布、门帘",technique:Ln,modernUse:["纪念票券","包装纹样","交互背景"],relatedIds:["huiwen","fangsheng","wufu"],tags:["盘长","几何","延续","福运"]}],xn=jg.map((n,e)=>{var t;return{...n,previewImage:(t=$i[e%$i.length])==null?void 0:t.src}}),qg={class:"site-header"},Yg=["onClick"],Kg={class:"header-actions"},Zg={__name:"SiteHeader",props:{routeName:{type:String,required:!0},routePath:{type:String,required:!0}},emits:["navigate"],setup(n,{emit:e}){const t=e,i=Qe(!1);function s(r){i.value=!1,t("navigate",r)}return(r,a)=>(oe(),xe("header",qg,[m("button",{class:"brand",type:"button",onClick:a[0]||(a[0]=o=>s("/"))},[...a[3]||(a[3]=[m("img",{class:"brand-logo",src:ih,alt:"大临蓝印 logo"},null,-1),m("strong",null,"大临蓝印",-1)])]),m("nav",{class:bt({open:i.value})},[(oe(!0),xe(rt,null,xt(de($g),o=>(oe(),xe("button",{key:o.path,type:"button",class:bt({active:n.routePath===o.path||o.path==="/library"&&n.routeName==="pattern"||o.path==="/find-blue"&&n.routePath.startsWith("/find-blue")}),onClick:l=>s(o.path)},he(o.label),11,Yg))),128))],2),m("div",Kg,[m("button",{class:"icon-button",type:"button","aria-label":"搜索",onClick:a[1]||(a[1]=o=>s("/library"))},[Ee(de(oh),{size:19})]),m("button",{class:"icon-button menu-button",type:"button","aria-label":"菜单",onClick:a[2]||(a[2]=o=>i.value=!i.value)},[i.value?(oe(),Nt(de(ar),{key:1,size:20})):(oe(),Nt(de(Ng),{key:0,size:20}))])])]))}};function Jg(){const n=Qe(window.location.pathname),e=Et(()=>n.value==="/library"?"library":n.value.startsWith("/pattern/")?"pattern":n.value==="/heritage"?"heritage":n.value==="/find-blue"?"find-menu":n.value==="/find-blue/card"?"find-card":n.value==="/find-blue/game"?"find-game":n.value==="/patternx"?"patternx":"home");function t(s){n.value!==s&&(window.history.pushState({},"",s),n.value=window.location.pathname),window.scrollTo({top:0,behavior:"smooth"})}function i(){n.value=window.location.pathname}return pr(()=>{window.addEventListener("popstate",i)}),Ts(()=>{window.removeEventListener("popstate",i)}),{routeName:e,routePath:n,navigate:t}}const ia=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},Qg={class:"blue-card-studio"},e_={key:0,class:"quiz-panel"},t_={class:"quiz-progress"},n_={class:"quiz-question"},i_={class:"quiz-options"},s_=["onClick"],r_={key:1,class:"card-preview-panel"},a_=["src","alt"],o_={class:"personality-card-copy"},l_={class:"selected-tags"},c_={class:"studio-actions result-actions"},u_={__name:"BlueCardStudio",setup(n){const e=Qe([]),t=Qe(""),i=[{title:"旅行到大临村，你最先被什么吸引？",options:[{text:"老街、河道和安静的生活气息",trait:"steady"},{text:"工坊里一双双正在制作的手",trait:"warm"},{text:"蓝白纹样里不断重复的秩序",trait:"wise"},{text:"可以亲手体验的新鲜感",trait:"free"}]},{title:"面对一件需要耐心完成的事，你通常会？",options:[{text:"按步骤慢慢推进",trait:"steady"},{text:"先理解它背后的意义",trait:"wise"},{text:"边做边找新的方法",trait:"free"},{text:"希望和身边人一起完成",trait:"warm"}]},{title:"你更喜欢哪一种蓝印花布寓意？",options:[{text:"平安长久",trait:"steady"},{text:"花开富贵",trait:"joyful"},{text:"生生不息",trait:"resilient"},{text:"自在生长",trait:"free"}]},{title:"朋友眼中的你更接近？",options:[{text:"可靠，能让人安心",trait:"steady"},{text:"热情，愿意照顾别人",trait:"warm"},{text:"清醒，善于观察判断",trait:"wise"},{text:"有趣，喜欢尝试变化",trait:"free"}]},{title:"如果把一天交给你安排，你会选择？",options:[{text:"走一条熟悉但舒服的路线",trait:"steady"},{text:"约上亲友一起吃饭聊天",trait:"warm"},{text:"看展、读资料、慢慢理解一件事",trait:"wise"},{text:"临时出发，遇见什么算什么",trait:"free"}]},{title:"你希望这张蓝印卡给你什么力量？",options:[{text:"稳稳向前",trait:"steady"},{text:"被爱与好运围绕",trait:"joyful"},{text:"在低谷里继续生长",trait:"resilient"},{text:"保持心里的清明",trait:"wise"}]},{title:"看到复杂纹样时，你会先注意到？",options:[{text:"边框和对称结构",trait:"steady"},{text:"花朵与枝蔓的生命感",trait:"resilient"},{text:"里面藏着的祝福符号",trait:"joyful"},{text:"它可以被重新设计的可能",trait:"free"}]},{title:"离开大临村时，你最想带走？",options:[{text:"一份安定的记忆",trait:"steady"},{text:"一份给家人的祝福",trait:"warm"},{text:"一份继续探索的灵感",trait:"free"},{text:"一份关于传统的理解",trait:"wise"}]}],s={steady:{title:"静水守心型",patternId:"huiwen",blessing:"愿你岁岁平安，步履从容，心中常有安定的蓝。",summary:"你重视秩序、稳定和长久的陪伴。适合你的蓝印纹样，像回纹一样周而复始，把平安与耐心织进日常。"},warm:{title:"暖枝相伴型",patternId:"shiliu",blessing:"愿你所到之处皆有温情，家人团圆，福气生长。",summary:"你很在意人与人之间的连接，也愿意把好运分享给身边的人。石榴团圆纹适合这种温暖、丰足的性格。"},wise:{title:"清蓝观照型",patternId:"chanzhi-lian",blessing:"愿你心有清明，见微知著，在纷繁里保持自己的判断。",summary:"你喜欢理解事物背后的脉络，安静却有力量。缠枝莲纹的连绵结构，像你对世界持续而细致的观察。"},free:{title:"风蝶自在型",patternId:"hudie",blessing:"愿你自由生长，所行皆有新意，所遇皆成风景。",summary:"你愿意尝试、变化，也愿意让生活保持弹性。蝶恋花纹轻盈灵动，适合你的自在与好奇。"},resilient:{title:"青藤生生型",patternId:"pan-chang",blessing:"愿你穿过风雨仍能生长，福运绵延，心力不断。",summary:"你有韧性，遇到困难也会慢慢找到出路。盘长纹回环不绝，正适合这种持续向前的生命力。"},joyful:{title:"喜花迎福型",patternId:"mudan",blessing:"愿你花开富贵，喜气常在，每一天都有热闹的好光景。",summary:"你容易被美好、庆祝和丰盛的气氛打动。牡丹团花纹饱满明亮，适合你的喜悦和好运感。"}},r=Et(()=>Math.min(e.value.length,i.length-1)),a=Et(()=>i[r.value]),o=Et(()=>e.value.length===i.length),l=Et(()=>Math.round(e.value.length/i.length*100)),c=Et(()=>{var L;const y=e.value.reduce((C,S)=>(C[S.trait]=(C[S.trait]||0)+1,C),{});return((L=Object.entries(y).sort((C,S)=>S[1]-C[1])[0])==null?void 0:L[0])||"steady"}),u=Et(()=>s[c.value]),d=Et(()=>xn.find(y=>y.id===u.value.patternId)||xn[0]),f=Et(()=>e.value.map(y=>y.text)),p=Et(()=>`/assets/personality-card/${u.value.patternId}.jpg`);function _(y){o.value||(e.value=[...e.value,y],e.value.length===i.length&&g())}function M(){e.value=[],t.value=""}function g(){t.value=new Intl.DateTimeFormat("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(new Date)}function h(y){return String(y).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;")}function A(y,L,C,S,D,E){const b=[];for(let U=0;U<y.length;U+=S)b.push(y.slice(U,U+S));return b.map((U,I)=>`<text x="${L}" y="${C+I*D}" ${E}>${h(U)}</text>`).join("")}function R(){if(!o.value)return;const y=d.value,L=u.value,S=`
    <svg xmlns="http://www.w3.org/2000/svg" width="960" height="1280" viewBox="0 0 960 1280">
      <rect width="960" height="1280" fill="#f7f5f0"/>
      <rect x="64" y="64" width="832" height="1152" rx="34" fill="#1a3a5c"/>
      <g fill="#f7f5f0" opacity=".88">${Array.from({length:9}).map((U,I)=>Array.from({length:6}).map((N,X)=>{const ne=150+X*132,Y=150+I*78;return`<circle cx="${ne}" cy="${Y}" r="14"/><circle cx="${ne+22}" cy="${Y+22}" r="10"/><circle cx="${ne-22}" cy="${Y+22}" r="10"/>`}).join("")).join("")}</g>
      <rect x="112" y="680" width="736" height="420" rx="26" fill="#f7f5f0" opacity=".96"/>
      <text x="152" y="750" fill="#4a7ba7" font-size="24" font-family="sans-serif" font-weight="700" letter-spacing="4">DALIN BLUE CALICO</text>
      <text x="152" y="830" fill="#0d1f33" font-size="58" font-family="serif" font-weight="700">${h(L.title)}</text>
      <text x="152" y="900" fill="#1a3a5c" font-size="38" font-family="serif" font-weight="700">${h(y.name)}</text>
      ${A(L.blessing,152,960,18,36,'fill="#2c2c2c" font-size="28" font-family="sans-serif"')}
      <text x="152" y="1112" fill="#8a8580" font-size="22" font-family="sans-serif">生成时间：${h(t.value)}</text>
    </svg>`,D=new Blob([S],{type:"image/svg+xml;charset=utf-8"}),E=URL.createObjectURL(D),b=document.createElement("a");b.href=E,b.download=`大临蓝印-${L.title}-${y.name}.svg`,b.click(),URL.revokeObjectURL(E)}return(y,L)=>(oe(),xe("div",Qg,[m("div",{class:bt(["personality-layout",{complete:o.value}])},[o.value?Rt("",!0):(oe(),xe("section",e_,[m("div",t_,[m("span",null,he(e.value.length)+"/"+he(i.length),1),m("div",null,[m("i",{style:Fn({width:`${l.value}%`})},null,4)])]),m("div",n_,[L[0]||(L[0]=m("p",{class:"eyebrow"},"Blue Personality Test",-1)),m("h3",null,he(a.value.title),1),m("div",i_,[(oe(!0),xe(rt,null,xt(a.value.options,C=>(oe(),xe("button",{key:C.text,type:"button",onClick:S=>_(C)},[tt(he(C.text)+" ",1),Ee(de(ai),{size:16})],8,s_))),128))])])])),o.value?(oe(),xe("section",r_,[m("article",{class:bt(["blue-personality-card",{ready:o.value}])},[m("img",{class:"blue-card-pattern",src:p.value,alt:d.value.name},null,8,a_),m("div",o_,[L[1]||(L[1]=m("p",{class:"eyebrow"},"大临蓝印 · 性格纹样卡",-1)),m("h2",null,he(u.value.title),1),m("h3",null,he(d.value.name),1),m("p",null,he(u.value.blessing),1),m("div",l_,[(oe(!0),xe(rt,null,xt(f.value.slice(-3),C=>(oe(),xe("span",{key:C},he(C),1))),128))]),m("small",null,he(t.value),1)])],2),m("div",c_,[m("button",{class:"primary-button",type:"button",onClick:R},[Ee(de(bl),{size:18}),L[2]||(L[2]=tt(" 下载保存卡片 ",-1))]),m("button",{class:"secondary-button",type:"button",onClick:M},[Ee(de(ah),{size:18}),L[3]||(L[3]=tt(" 重新测试 ",-1))])])])):Rt("",!0)],2)]))}},d_=ia(u_,[["__scopeId","data-v-d30f0583"]]),f_={class:"section top-section find-blue-card-page"},h_={__name:"FindBlueCardPage",emits:["navigate"],setup(n){return(e,t)=>(oe(),xe("section",f_,[m("button",{class:"text-link back-link",type:"button",onClick:t[0]||(t[0]=i=>e.$emit("navigate","/find-blue"))},[Ee(de(Ms),{size:17}),t[1]||(t[1]=tt(" 返回体验菜单 ",-1))]),t[2]||(t[2]=m("div",{class:"page-heading"},[m("p",{class:"eyebrow"},"Blue Personality Test"),m("h1",null,"专属蓝印性格卡"),m("p",null,"回答 8 个问题，生成与你性格相合的蓝印花布纹样、祝福语和可下载纪念卡。")],-1)),Ee(d_)]))}},p_="/assets/games/flip/card-back.jpg",m_={class:"memory-game"},g_={class:"game-sidebar"},__={class:"game-stats"},v_={class:"game-layout"},x_={class:"board-shell"},y_=["onClick"],M_={class:"memory-card-inner"},b_={class:"memory-card-face memory-card-front"},S_=["src","alt"],E_={class:"knowledge-panel-card"},T_=["src","alt"],w_={class:"knowledge-panel-copy"},A_={key:0,class:"result-overlay"},C_={class:"result-card"},R_={class:"result-grid"},P_={__name:"PatternMemoryGame",setup(n){const e=[{id:"lion",name:"瑞狮纳福纹",category:"瑞兽纹",image:"/assets/games/flip/pattern-01.png",meaning:"镇宅纳福，吉庆安康",desc:"瑞狮纹常见于蓝印花布被面、门帘与嫁妆织物，借威严兽形寄托守护家宅、迎祥纳福的愿望。"},{id:"fish-lotus",name:"连年有余纹",category:"民俗纹样",image:"/assets/games/flip/pattern-02.jpg",meaning:"年年富足，阖家圆满",desc:"鱼与莲花谐音成意，是大临村传统被面经典纹样，适合表达丰收、团圆与绵延不断的生活祝福。"},{id:"peony",name:"牡丹富贵纹",category:"花草纹",image:"/assets/games/flip/pattern-03.jpg",meaning:"花开富贵，生活兴旺",desc:"牡丹纹以饱满花形表现富贵气象，蓝白留白之间呈现朴素而隆重的民间审美。"},{id:"pomegranate",name:"石榴多子纹",category:"花草纹",image:"/assets/games/flip/pattern-04.jpg",meaning:"多子多福，家族兴旺",desc:"石榴籽粒繁密，常被用于婚嫁和家用布饰，寓意人丁兴旺与福气延续。"},{id:"shou",name:"团寿吉祥纹",category:"福寿纹",image:"/assets/games/flip/pattern-05.jpg",meaning:"福寿绵长，平安顺遂",desc:"寿字与团形结构结合，讲究对称与秩序，是蓝印花布中辨识度很高的祝寿类纹样。"},{id:"butterfly",name:"蝶恋花纹",category:"花草纹",image:"/assets/games/flip/pattern-06.jpg",meaning:"美满相伴，春意常在",desc:"蝴蝶与花卉组合轻盈灵动，常用于表现生活中的喜悦、爱意与自然生机。"},{id:"crane",name:"仙鹤延年纹",category:"瑞兽纹",image:"/assets/games/flip/pattern-07.png",meaning:"延年益寿，清雅高洁",desc:"仙鹤在传统图像中象征长寿与高洁，蓝印花布用简练的蓝白块面保留其舒展姿态。"},{id:"gourd",name:"葫芦福禄纹",category:"民俗纹样",image:"/assets/games/flip/pattern-08.jpg",meaning:"福禄双全，辟邪纳祥",desc:"葫芦与福禄谐音，形体饱满，常被民间用来表达护佑、丰足与平安。"},{id:"plum",name:"梅开五福纹",category:"花草纹",image:"/assets/games/flip/pattern-09.jpg",meaning:"坚韧清雅，五福临门",desc:"梅花不畏寒霜，蓝印花布中的梅花纹通过枝蔓与花点变化表现坚韧品格。"},{id:"phoenix",name:"凤穿牡丹纹",category:"瑞兽纹",image:"/assets/games/flip/pattern-10.png",meaning:"吉祥华美，富贵和合",desc:"凤鸟与牡丹组合常见于喜庆织物，体现民间对婚姻美满与家业兴盛的祝愿。"},{id:"coin",name:"方胜盘长纹",category:"几何纹",image:"/assets/games/flip/pattern-11.jpg",meaning:"连续不断，事事如意",desc:"几何纹样重视连续构成，方胜与盘长结构适合作为边饰或满地纹，象征福泽不断。"},{id:"lotus",name:"莲花清廉纹",category:"花草纹",image:"/assets/games/flip/pattern-12.jpg",meaning:"清正雅洁，和美安宁",desc:"莲花纹以舒展花瓣和叶形构成画面中心，在蓝印工艺中呈现清爽、端正的视觉气质。"}],t={standard:{label:"进阶 12 张",pairs:6,cols:4}},i=Qe("standard"),s=Qe([]),r=Qe([]),a=Qe(0),o=Qe(0),l=Qe(0),c=Qe(!1),u=Qe(!1),d=Qe(null),f=Qe(!1);let p=null,_=null;const M=Et(()=>t[i.value].pairs),g=Et(()=>Math.ceil(s.value.length/t[i.value].cols)),h=Et(()=>({"--board-cols":String(t[i.value].cols),"--board-rows":String(g.value),gridTemplateColumns:`repeat(${t[i.value].cols}, minmax(0, 1fr))`,gridTemplateRows:`repeat(${g.value}, minmax(0, 1fr))`})),A=Et(()=>i.value==="standard"&&l.value<=55&&o.value<=10?"蓝印识纹达人":o.value<=16?"非遗纹样初学者":"初识大临蓝印");function R(I){const N=[...I];for(let X=N.length-1;X>0;X-=1){const ne=Math.floor(Math.random()*(X+1));[N[X],N[ne]]=[N[ne],N[X]]}return N}function y(I){const N=String(Math.floor(I/60)).padStart(2,"0"),X=String(I%60).padStart(2,"0");return`${N}:${X}`}function L(){c.value||(c.value=!0,p=window.setInterval(()=>{l.value+=1},1e3))}function C(){window.clearInterval(p),p=null}function S(){const I=R(e).slice(0,t[i.value].pairs);return R(I.flatMap(N=>[{...N,cardId:`${N.id}-a`,state:"hidden"},{...N,cardId:`${N.id}-b`,state:"hidden"}]))}function D(I=i.value){C(),window.clearTimeout(_),i.value=I,s.value=S(),r.value=[],a.value=0,o.value=0,l.value=0,c.value=!1,u.value=!1,d.value=null,f.value=!1}function E(){window.clearTimeout(_),d.value=null}function b(I){if(u.value)return;const N=s.value.find(X=>X.cardId===I);!N||N.state!=="hidden"||(L(),N.state="open",r.value=[...r.value,N],r.value.length===2&&(o.value+=1,U()))}function U(){const[I,N]=r.value;if(u.value=!0,I.id===N.id){window.setTimeout(()=>{s.value.forEach(X=>{(X.cardId===I.cardId||X.cardId===N.cardId)&&(X.state="matched")}),a.value+=1,d.value=I,window.clearTimeout(_),_=window.setTimeout(()=>{d.value=null},3e3),r.value=[],u.value=!1,a.value===M.value&&(C(),f.value=!0)},320);return}window.setTimeout(()=>{s.value.forEach(X=>{(X.cardId===I.cardId||X.cardId===N.cardId)&&(X.state="hidden")}),r.value=[],u.value=!1},760)}return Ts(()=>{C(),window.clearTimeout(_)}),D(),(I,N)=>(oe(),xe("div",m_,[m("aside",g_,[N[6]||(N[6]=m("div",{class:"game-title"},[m("p",{class:"eyebrow"},"Blue Calico Match"),m("h3",null,"蓝印纹样翻翻乐")],-1)),m("div",__,[m("article",null,[Ee(de(Cg),{size:18}),N[2]||(N[2]=m("span",null,"用时",-1)),m("strong",null,he(y(l.value)),1)]),m("article",null,[N[3]||(N[3]=m("span",null,"步数",-1)),m("strong",null,he(o.value),1)]),m("article",null,[Ee(de(Vg),{size:18}),N[4]||(N[4]=m("span",null,"配对",-1)),m("strong",null,he(a.value)+"/"+he(M.value),1)])]),m("button",{class:"secondary-button",type:"button",onClick:N[0]||(N[0]=X=>D())},[Ee(de(ah),{size:16}),N[5]||(N[5]=tt(" 重新开始 ",-1))])]),m("section",v_,[m("div",x_,[m("div",{class:"board",style:Fn(h.value)},[(oe(!0),xe(rt,null,xt(s.value,X=>(oe(),xe("button",{key:X.cardId,type:"button",class:bt(["memory-card",[`state-${X.state}`]]),onClick:ne=>b(X.cardId)},[m("span",M_,[N[7]||(N[7]=m("span",{class:"memory-card-face memory-card-back"},[m("img",{class:"memory-card-back-image",src:p_,alt:""})],-1)),m("span",b_,[m("img",{src:X.image,alt:X.name},null,8,S_)])])],10,y_))),128))],4)]),Ee(Sc,{name:"knowledge-panel"},{default:lo(()=>[d.value?(oe(),xe("aside",{key:0,class:"knowledge-panel-overlay",onClick:E},[m("div",E_,[m("img",{src:d.value.image,alt:d.value.name},null,8,T_),m("div",w_,[N[8]||(N[8]=m("p",{class:"eyebrow"},"配对成功",-1)),m("h4",null,he(d.value.name),1),m("strong",null,he(d.value.meaning),1),m("p",null,he(d.value.desc),1),m("span",null,he(d.value.category),1)]),m("button",{type:"button",class:"knowledge-close","aria-label":"关闭纹样介绍",onClick:E},[Ee(de(ar),{size:18})])])])):Rt("",!0)]),_:1})]),f.value?(oe(),xe("div",A_,[m("div",C_,[N[11]||(N[11]=m("p",{class:"eyebrow"},"全部配对完成",-1)),m("h4",null,he(A.value),1),m("div",R_,[m("article",null,[N[9]||(N[9]=m("span",null,"本局用时",-1)),m("strong",null,he(y(l.value)),1)]),m("article",null,[N[10]||(N[10]=m("span",null,"总步数",-1)),m("strong",null,he(o.value),1)])]),m("p",null,"你完成了 "+he(M.value)+" 组蓝印花布纹样配对，在翻牌中记住了纹样名称、寓意和文化背景。",1),m("button",{class:"primary-button",type:"button",onClick:N[1]||(N[1]=X=>D())},"再来一局")])])):Rt("",!0)]))}},D_=ia(P_,[["__scopeId","data-v-56c02213"]]),L_={class:"find-game-header"},I_={__name:"FindBlueGamePage",emits:["navigate"],setup(n){return pr(()=>{document.documentElement.classList.add("game-lock-scroll")}),Ts(()=>{document.documentElement.classList.remove("game-lock-scroll")}),(e,t)=>(oe(),xe("section",{class:"section top-section find-game-page",onWheel:t[1]||(t[1]=Yt(()=>{},["prevent"]))},[m("div",L_,[m("button",{class:"text-link back-link",type:"button",onClick:t[0]||(t[0]=i=>e.$emit("navigate","/find-blue"))},[Ee(de(Ms),{size:17}),t[2]||(t[2]=tt(" 返回体验菜单 ",-1))]),t[3]||(t[3]=m("div",{class:"page-heading"},[m("p",{class:"eyebrow"},"Pattern Memory Game"),m("h1",null,"蓝印纹样翻翻乐")],-1))]),Ee(D_)],32))}},U_={class:"find-menu-page"},N_={class:"find-menu-stage"},F_={class:"find-carousel","aria-label":"互动体验轮播菜单"},O_=["onClick"],k_=["src","alt"],B_={key:1,class:"card-cover-intro"},z_={key:2,class:"card-copy"},H_={key:3,class:"card-action"},V_={class:"find-menu-footer"},G_={class:"find-menu-actions"},W_={class:"find-menu-dots"},X_=["aria-label","onClick"],$_={__name:"FindBluePage",emits:["navigate"],setup(n,{emit:e}){const t=e,i=[{key:"card",title:"专属蓝印卡",subtitle:"选择你的寓意",description:"从平安、富贵、长寿、团圆中选取心意，生成属于你的蓝印纹样卡。",path:"/find-blue/card",cover:"/assets/find-blue/card-cover.png",accent:"柔和生成",status:"available"},{key:"game",title:"纹样翻翻乐",subtitle:"翻牌识纹样",description:"在配对互动里认识大临村蓝印花布的经典图案，边玩边记住它们的寓意。",path:"/find-blue/game",cover:"/assets/find-blue/memory-cover.png",accent:"互动挑战",status:"available"},{key:"coming-soon",title:"更多体验",subtitle:"持续更新中",description:"后续将加入更多与蓝印花布相关的互动体验，形成完整的数字游览路径。",path:"",cover:"",accent:"敬请期待",status:"coming"}],s=Qe(1);function r(){s.value=(s.value-1+i.length)%i.length}function a(){s.value=(s.value+1)%i.length}function o(c){const u=(c-s.value+i.length)%i.length;return u===0?"is-center":u===1?"is-right":"is-left"}function l(c){if(c!==s.value){s.value=c;return}i[c].status==="available"&&t("navigate",i[c].path)}return(c,u)=>(oe(),xe("section",U_,[u[2]||(u[2]=m("div",{class:"find-menu-hero"},[m("p",{class:"find-menu-kicker"},"SELECT YOUR BLUE EXPERIENCE"),m("h1",null,"寻找你的蓝")],-1)),m("div",N_,[m("button",{class:"carousel-arrow left",type:"button","aria-label":"上一个体验",onClick:r},[Ee(de(Ms),{size:24})]),m("div",F_,[(oe(),xe(rt,null,xt(i,(d,f)=>m("button",{key:d.key,type:"button",class:bt(["find-carousel-card",[o(f),{disabled:d.status!=="available","has-cover":!!d.cover}]]),onClick:p=>l(f)},[d.cover?(oe(),xe("img",{key:0,class:"card-cover-image",src:d.cover,alt:d.title},null,8,k_)):Rt("",!0),u[0]||(u[0]=m("span",{class:"card-overlay"},null,-1)),u[1]||(u[1]=m("span",{class:"card-noise"},null,-1)),d.cover?(oe(),xe("span",B_,[m("b",null,he(d.subtitle),1),m("small",null,he(d.description),1)])):Rt("",!0),d.cover?Rt("",!0):(oe(),xe("span",z_,[m("i",null,he(d.accent),1),m("strong",null,he(d.title),1),m("em",null,he(d.subtitle),1),m("small",null,he(d.description),1)])),d.cover?Rt("",!0):(oe(),xe("span",H_,[(oe(),Nt(Js(d.key==="card"?de(rr):d.key==="game"?de(Dg):de(rr)),{size:18})),tt(" "+he(d.status==="available"?"点击进入":"即将开放"),1)]))],10,O_)),64))]),m("button",{class:"carousel-arrow right",type:"button","aria-label":"下一个体验",onClick:a},[Ee(de(ai),{size:24})])]),m("div",V_,[m("div",G_,[m("div",W_,[(oe(),xe(rt,null,xt(i,(d,f)=>m("button",{key:d.key,type:"button",class:bt({active:s.value===f}),"aria-label":`切换到${d.title}`,onClick:p=>s.value=f},null,10,X_)),64))])])])]))}},j_=ia($_,[["__scopeId","data-v-c506155d"]]),q_={class:"heritage-page section top-section"},Y_={class:"heritage-hero heritage-visitor-hero"},K_={class:"page-heading heritage-visitor-copy"},Z_={class:"heritage-hero-actions"},J_={class:"heritage-visitor-focus"},Q_={class:"heritage-section"},e0={class:"heritage-story-grid"},t0={class:"heritage-section heritage-visit-section"},n0={class:"heritage-visit-path"},i0={class:"heritage-section"},s0={class:"heritage-process"},r0={class:"heritage-section"},a0={class:"heritage-gallery"},o0=["src","alt"],l0="/assets/heritage/dalin-workshop.png",c0={__name:"HeritagePage",emits:["navigate"],setup(n,{emit:e}){const t=e,i=[{src:"/assets/heritage/artisan-at-work.jpeg",alt:"传承人在花版上进行刮浆工序",caption:"手上的工艺：刮浆与花版"},{src:"/assets/heritage/artisan-portrait.png",alt:"蓝印花布传承人与工坊布样",caption:"工坊里的传承人和布样"},{src:"/assets/heritage/dalin-workshop.png",alt:"大临村蓝印花布工坊外景",caption:"大临村工坊与晾晒布样"},{src:"/assets/heritage/archive-pattern-table.png",alt:"桌面上的蓝印花布样品",caption:"一桌蓝白：纹样与日用布品"},{src:"/assets/heritage/archive-table-runner.png",alt:"蓝印花布桌旗",caption:"传统纹样进入当代日用"},{src:"/assets/heritage/archive-craft-store.png",alt:"游客挑选蓝印花布文创",caption:"在工坊挑选一片属于自己的蓝"},{src:"/assets/heritage/archive-visitor-demo.png",alt:"游客观看蓝印花布体验演示",caption:"围在工作台前看见手艺"},{src:"/assets/heritage/archive-cultural-products.png",alt:"蓝印花布文创产品与花版",caption:"从花版到可带走的日常物件"},{src:"/assets/heritage/archive-tote-bag.png",alt:"蓝印花布帆布袋",caption:"把蓝白纹样带进生活"},{src:"/assets/heritage/archive-apparel.png",alt:"蓝印花布服装与围裙",caption:"蓝印花布的新衣与新用法"},{src:"/assets/heritage/archive-drying.png",alt:"晾晒中的蓝印花布",caption:"阳光下定格的靛蓝与素白"},{src:"/assets/heritage/archive-family-workshop.png",alt:"儿童参与蓝印花布体验",caption:"亲子体验：让手艺被下一代看见"},{src:"/assets/heritage/archive-drying-tour.png",alt:"游客参观蓝印花布晾晒场景",caption:"走进布样之间，听见村庄的故事"}],s=[{value:"01",label:"先看人",text:"从传承人的手、工具和故事进入蓝印花布。"},{value:"02",label:"再看工艺",text:"理解刻版、防染、入靛、刮白这些关键步骤。"},{value:"03",label:"最后看纹样",text:"把花草、瑞兽、吉祥符号和江南生活联系起来。"}],r=[{icon:Lg,title:"匠人 / 传承故事",text:"大临村的蓝印花布先存在于人的手上。老一辈把纹样、浆料比例、入靛火候和晾晒经验留在日复一日的制作里，年轻人则用展览、文创和数字方式让它继续被看见。"},{icon:rh,title:"制作过程",text:"一块布从画稿到成品，需要经过刻版、刮浆、染色、刮白、清洗、晾晒。每一步都不只是技术，也是一种和时间相处的方式。"},{icon:wg,title:"相关图片资料",text:"图片资料记录布样、工具、纹样细节和村落现场。游客可以通过这些图像，把展柜里的蓝白纹样重新放回真实生活。"},{icon:sh,title:"文化价值",text:"蓝印花布连接江南日用审美、礼俗祝福、女性手工经验和地方记忆。它既是一匹布，也是一座村庄可以向外讲述的文化名片。"}],a=[{icon:Ug,title:"来到大临村",text:"先认识蓝印花布与村落之间的关系，知道这门手艺为什么在这里生长。"},{icon:Wg,title:"听见传承人",text:"从口述故事里理解手艺人的坚持、家庭记忆和代际传承。"},{icon:kg,title:"走完工艺线",text:"按制作顺序观看工序，把“蓝”和“白”如何出现看明白。"},{icon:rr,title:"带走一片蓝",text:"在纹样库、互动卡片或文创体验中，选择一个属于自己的蓝印记忆。"}];return(o,l)=>(oe(),xe("section",q_,[m("div",Y_,[m("div",K_,[l[3]||(l[3]=m("p",{class:"eyebrow"},"People Story Of Dalin Blue Calico",-1)),l[4]||(l[4]=m("h1",null,"她与蓝",-1)),l[5]||(l[5]=m("p",null,"给来到大临村的游客看的传承故事：看见做布的人，理解靛蓝的工艺，也把一段江南记忆带回去。",-1)),m("div",Z_,[m("button",{class:"primary-button",type:"button",onClick:l[0]||(l[0]=c=>t("navigate","/library"))},[l[2]||(l[2]=tt(" 去看纹样 ",-1)),Ee(de(ai),{size:18})]),m("button",{class:"secondary-button",type:"button",onClick:l[1]||(l[1]=c=>t("navigate","/find-blue"))}," 寻找你的蓝 ")])]),m("div",{class:"heritage-hero-image heritage-visitor-image"},[m("img",{src:l0,alt:"大临村蓝印花布现场资料"}),l[6]||(l[6]=m("span",null,"大临村蓝印花布 · 人物与工艺故事",-1))])]),m("div",J_,[(oe(),xe(rt,null,xt(s,c=>m("article",{key:c.value},[m("strong",null,he(c.value),1),m("span",null,he(c.label),1),m("p",null,he(c.text),1)])),64))]),m("section",Q_,[l[7]||(l[7]=m("div",{class:"section-title-row"},[m("div",null,[m("p",{class:"eyebrow"},"For Visitors"),m("h2",null,"这页想带游客看什么")])],-1)),m("div",e0,[(oe(),xe(rt,null,xt(r,c=>m("article",{key:c.title},[(oe(),Nt(Js(c.icon),{size:24})),m("h2",null,he(c.title),1),m("p",null,he(c.text),1)])),64))])]),m("section",t0,[l[8]||(l[8]=m("div",{class:"section-title-row"},[m("div",null,[m("p",{class:"eyebrow"},"Village Visit Path"),m("h2",null,"游客在村里的一条观看路径")])],-1)),m("div",n0,[(oe(),xe(rt,null,xt(a,(c,u)=>m("article",{key:c.title},[m("span",null,he(String(u+1).padStart(2,"0")),1),(oe(),Nt(Js(c.icon),{size:24})),m("strong",null,he(c.title),1),m("p",null,he(c.text),1)])),64))])]),m("section",i0,[l[9]||(l[9]=m("div",{class:"section-title-row"},[m("div",null,[m("p",{class:"eyebrow"},"Craft Process"),m("h2",null,"一块布经过的路")])],-1)),m("div",s0,[(oe(!0),xe(rt,null,xt(de(uh),(c,u)=>(oe(),xe("article",{key:c.title},[m("span",null,he(String(u+1).padStart(2,"0")),1),m("strong",null,he(c.title),1),m("p",null,he(c.text),1)]))),128))])]),m("section",r0,[l[10]||(l[10]=m("div",{class:"section-title-row"},[m("div",null,[m("p",{class:"eyebrow"},"Image Archive"),m("h2",null,"相关图片资料")])],-1)),m("div",a0,[(oe(),xe(rt,null,xt(i,c=>m("figure",{key:c.src},[m("img",{src:c.src,alt:c.alt,loading:"lazy",decoding:"async"},null,8,o0),m("figcaption",null,he(c.caption),1)])),64))])]),l[11]||(l[11]=m("section",{class:"heritage-value"},[m("p",{class:"eyebrow"},"Cultural Value"),m("h2",null,"让游客带走的不只是照片"),m("p",null,"大临村蓝印花布的价值，不只在“好看”，也在它把地方、家庭、祝福和手艺连接起来。游客看完这一页，应该能记住：蓝印花布是一种生活里的美，也是一代代人共同守住的村庄记忆。")],-1))]))}},u0="/assets/heritage/dalin-workshop.png",d0="/assets/home/dalin-workshop-ambience.mp4",f0="/assets/home-craft-gray.png",h0="/assets/home-craft-color.png",p0={class:"section-dot-nav","aria-label":"首页模块导航"},m0=["onClick"],g0={__name:"HomeSectionNav",props:{sections:{type:Array,required:!0},activeIndex:{type:Number,required:!0}},emits:["select"],setup(n){return(e,t)=>(oe(),xe("nav",p0,[(oe(!0),xe(rt,null,xt(n.sections,(i,s)=>(oe(),xe("button",{key:i.id,type:"button",class:bt({active:n.activeIndex===s}),onClick:r=>e.$emit("select",s)},[t[0]||(t[0]=m("span",null,null,-1)),m("em",null,he(i.label),1)],10,m0))),128))]))}},_0={class:"pattern-card"},v0={class:"tag"},Ec={__name:"PatternCard",props:{pattern:{type:Object,required:!0}},emits:["open","create"],setup(n){return(e,t)=>(oe(),xe("article",_0,[m("button",{class:"pattern-card-main",type:"button",onClick:t[0]||(t[0]=i=>e.$emit("open",n.pattern))},[m("span",{class:bt(["pattern-thumb",n.pattern.previewImage?"pattern-thumb-real":n.pattern.patternClass]),style:Fn(n.pattern.previewImage?{backgroundImage:`url(${n.pattern.previewImage})`}:void 0)},null,6),m("span",v0,he(n.pattern.categoryName),1),m("strong",null,he(n.pattern.name),1),m("em",null,he(n.pattern.meaning),1)]),m("button",{class:"pattern-card-create",type:"button",onClick:t[1]||(t[1]=i=>e.$emit("create",n.pattern))},"用于 3D 创作")]))}},x0={class:"home-panel hero-panel"},y0={class:"hero-content"},M0={class:"home-panel intro-panel"},b0={class:"home-panel-inner intro-section"},S0={class:"intro-side"},E0={class:"stat-index"},T0={class:"stat-value"},w0={class:"stat-meta"},A0=["src"],C0={class:"intro-material-overlay"},R0={class:"home-panel"},P0={class:"home-panel-inner"},D0={class:"section-title-row"},L0={class:"category-grid"},I0=["onClick"],U0={class:"category-copy"},N0={class:"home-panel craft-panel"},F0={class:"home-panel-inner craft-spotlight-layout"},O0={key:0,class:"craft-poster"},k0={key:1,class:"craft-spotlight-tip"},B0={class:"home-panel"},z0={class:"home-panel-inner"},H0={class:"section-title-row"},V0={class:"pattern-slider"},G0={class:"home-panel cta-panel"},Lo=140,W0=16/9,Uu={__name:"HomePage",emits:["navigate","open-pattern","select-category","create-pattern"],setup(n,{emit:e}){const t=e,i=Qe(0),s=Qe(null),r=Qe({x:0,y:0,r:0,active:!1}),a=Qe(!1);let o=!1;const l=[{id:"chanzhi-lian",previewImage:"/assets/patterns/preview-plant.png"},{id:"huiwen",previewImage:"/assets/patterns/preview-geometry.png"},{id:"hudie",previewImage:"/assets/patterns/preview-animal.png"},{id:"shouzi",previewImage:"/assets/patterns/preview-auspicious.png"}],c=Et(()=>l.map(({id:C,previewImage:S})=>{const D=xn.find(E=>E.id===C);return D?{...D,previewImage:S}:null}).filter(Boolean)),u=Et(()=>$i.find(C=>C.type==="jpg")||$i[0]),d=[{index:"01",value:"128",unit:"枚",label:"收录纹样",english:"Pattern Archive"},{index:"02",value:"6",unit:"道",label:"工艺步骤",english:"Craft Process"},{index:"03",value:"800+",unit:"年",label:"传承历史",english:"Living Heritage"}],f=[{id:"hero",label:"大临蓝印"},{id:"intro",label:"项目引言"},{id:"categories",label:"纹样分类"},{id:"craft",label:"工艺时间轴"},{id:"featured",label:"精选纹样"},{id:"cta",label:"寻找你的蓝"}];function p(C){i.value=Math.min(Math.max(C,0),f.length-1)}function _(C){Math.abs(C.deltaY)<8||o||(C.preventDefault(),o=!0,p(i.value+(C.deltaY>0?1:-1)),window.setTimeout(()=>{o=!1},720))}function M(C){t("select-category",C),t("navigate","/library")}function g(){const C=s.value;if(!C)return null;const S=C.clientWidth,D=C.clientHeight;if(!S||!D)return null;const E=S/D,b=W0;if(E>b){const I=D*b;return{left:(S-I)/2,top:0,width:I,height:D}}const U=S/b;return{left:0,top:(D-U)/2,width:S,height:U}}function h(){const C=g();C&&(r.value={x:C.left+C.width/2,y:C.top+C.height/2,r:0,active:!1})}function A(){a.value=!0,window.requestAnimationFrame(h)}function R(){a.value=!1,window.requestAnimationFrame(h)}function y(C){if(!a.value)return;const S=s.value,D=g();if(!S||!D)return;const E=S.getBoundingClientRect(),b=C.clientX-E.left,U=C.clientY-E.top,I=Math.min(Lo,D.width/2),N=Math.min(Lo,D.height/2),X=Math.min(Math.max(b,D.left+I),D.left+D.width-I),ne=Math.min(Math.max(U,D.top+N),D.top+D.height-N);r.value={x:X,y:ne,r:Lo,active:!0}}function L(){h()}return pr(()=>{document.documentElement.classList.add("home-lock-scroll"),window.addEventListener("resize",h,{passive:!0}),window.requestAnimationFrame(h)}),Ts(()=>{document.documentElement.classList.remove("home-lock-scroll"),window.removeEventListener("resize",h)}),(C,S)=>(oe(),xe("section",{class:"home-page",onWheel:_},[Ee(g0,{sections:f,"active-index":i.value,onSelect:p},null,8,["active-index"]),m("div",{class:"home-stage",style:Fn({transform:`translateY(-${i.value*100}vh)`})},[m("section",x0,[S[13]||(S[13]=m("video",{class:"hero-video",autoplay:"",muted:"",loop:"",playsinline:"",poster:u0,"aria-hidden":"true"},[m("source",{src:d0,type:"video/mp4"})],-1)),S[14]||(S[14]=m("div",{class:"hero-pattern pattern-floral"},null,-1)),m("div",y0,[S[11]||(S[11]=m("p",{class:"eyebrow"},"浙江嘉兴桐乡市大临村",-1)),m("h1",null,[(oe(),xe(rt,null,xt("大临蓝印",(D,E)=>m("span",{key:`${D}-${E}`,style:Fn({animationDelay:`${E*50}ms`})},he(D),5)),64))]),S[12]||(S[12]=m("p",{class:"hero-subtitle"},"千年药斑布，一靛染江南",-1)),m("button",{class:"primary-button",type:"button",onClick:S[0]||(S[0]=D=>C.$emit("navigate","/library"))},[S[10]||(S[10]=tt(" 探索纹样 ",-1)),Ee(de(ai),{size:18})])]),m("button",{class:"scroll-cue",type:"button",onClick:S[1]||(S[1]=D=>p(1))},[Ee(de(Er),{size:24})])]),m("section",M0,[m("div",b0,[S[18]||(S[18]=m("div",{class:"section-copy"},[m("p",{class:"eyebrow"},"Project Introduction"),m("h2",null,"以数字之名，让靛蓝重新流动"),m("p",null,"大临村，浙江桐乡石门镇的一座江南古村，是蓝印花布的发源地之一。这里的一布一纹，承载着从宋元走来的防染智慧。我们以数字之名，让靛蓝重新流动。")],-1)),m("div",S0,[m("div",{class:bt(["stats",{"is-visible":i.value===1}]),"aria-label":"蓝印花布数字档案概览"},[(oe(),xe(rt,null,xt(d,D=>m("article",{key:D.index},[m("span",E0,he(D.index),1),m("div",T0,[m("strong",null,he(D.value),1),m("small",null,he(D.unit),1)]),m("div",w0,[m("span",null,he(D.label),1),m("em",null,he(D.english),1)])])),64))],2),m("button",{class:"intro-material-card",type:"button",onClick:S[2]||(S[2]=D=>C.$emit("navigate","/library"))},[m("img",{src:u.value.src,alt:"本地采集的蓝印花布布面纹样",loading:"lazy",decoding:"async"},null,8,A0),m("span",C0,[S[16]||(S[16]=m("small",null,"LOCAL MATERIAL ARCHIVE",-1)),S[17]||(S[17]=m("strong",null,"82 张采集素材",-1)),m("em",null,[S[15]||(S[15]=tt("进入纹样图录 ",-1)),Ee(de(ai),{size:16})])])])])]),m("button",{class:"scroll-cue scroll-cue-on-light",type:"button","aria-label":"继续浏览纹样分类",onClick:S[3]||(S[3]=D=>p(2))},[Ee(de(Er),{size:24})])]),m("section",R0,[m("div",P0,[m("div",D0,[S[20]||(S[20]=m("div",null,[m("p",{class:"eyebrow"},"Pattern System"),m("h2",null,"四大纹样分类")],-1)),m("button",{class:"text-link",type:"button",onClick:S[4]||(S[4]=D=>C.$emit("navigate","/library"))},[S[19]||(S[19]=tt(" 进入纹库 ",-1)),Ee(de(ai),{size:16})])]),m("div",L0,[(oe(!0),xe(rt,null,xt(de(ch),D=>(oe(),xe("button",{key:D.key,type:"button",onClick:E=>M(D.key)},[m("span",{class:bt(["category-image",D.image?["category-image-real",`category-image-${D.key}`]:D.patternClass]),style:Fn({backgroundImage:`url(${D.image})`})},null,6),m("span",U0,[m("strong",null,he(D.title),1),m("em",null,he(D.description),1),S[21]||(S[21]=m("i",null,"查看全部 →",-1))])],8,I0))),128))])]),m("button",{class:"scroll-cue scroll-cue-on-light",type:"button","aria-label":"继续浏览工艺流程",onClick:S[5]||(S[5]=D=>p(3))},[Ee(de(Er),{size:24})])]),m("section",N0,[m("div",F0,[Rt("",!0),m("div",{ref_key:"craftBoardRef",ref:s,class:"craft-spotlight-board",style:Fn({"--spotlight-x":`${r.value.x}px`,"--spotlight-y":`${r.value.y}px`,"--spotlight-r":`${r.value.r}px`}),onMousemove:y,onMouseleave:L},[a.value?Rt("",!0):(oe(),xe("div",O0,[m("div",{class:"craft-poster-inner"},[S[23]||(S[23]=m("p",{class:"eyebrow"},"Craft Timeline",-1)),S[24]||(S[24]=m("h2",null,"从刻版到晾晒，一块布要走过六道手艺",-1)),S[25]||(S[25]=m("p",null,"点击海报开启探照体验。彩色会在鼠标所到之处显现，帮助游客直观看到大临蓝印花布六道工序的完整流转。",-1)),m("button",{class:"primary-button craft-start-button",type:"button",onClick:A},"开启探照")])])),S[28]||(S[28]=m("img",{class:"craft-board-image grayscale",src:f0,alt:"craft grayscale board"},null,-1)),S[29]||(S[29]=m("img",{class:"craft-board-image color",src:h0,alt:"craft color board"},null,-1)),m("div",{class:bt(["craft-spotlight-glow",{active:r.value.active}])},null,2),a.value?(oe(),xe("div",k0,[S[26]||(S[26]=m("span",null,"探照工艺图",-1)),S[27]||(S[27]=m("em",null,"鼠标移动到哪里，哪里就恢复彩色",-1)),m("button",{class:"craft-restart-button",type:"button",onClick:Yt(R,["stop"])},"重新开始")])):Rt("",!0)],36)]),m("button",{class:"scroll-cue",type:"button","aria-label":"继续浏览精选纹样",onClick:S[6]||(S[6]=D=>p(4))},[Ee(de(Er),{size:24})])]),m("section",B0,[m("div",z0,[m("div",H0,[S[30]||(S[30]=m("div",null,[m("p",{class:"eyebrow"},"Selected Patterns"),m("h2",null,"精选纹样预览")],-1)),m("button",{class:"primary-button compact",type:"button",onClick:S[7]||(S[7]=D=>C.$emit("navigate","/library"))},"进入纹库")]),m("div",V0,[(oe(!0),xe(rt,null,xt(c.value,D=>(oe(),Nt(Ec,{key:D.id,pattern:D,onOpen:E=>C.$emit("open-pattern",D),onCreate:E=>C.$emit("create-pattern",D)},null,8,["pattern","onOpen","onCreate"]))),128))])]),m("button",{class:"scroll-cue scroll-cue-on-light",type:"button","aria-label":"继续寻找你的蓝",onClick:S[8]||(S[8]=D=>p(5))},[Ee(de(Er),{size:24})])]),m("section",G0,[S[32]||(S[32]=m("p",{class:"eyebrow"},"Find Your Blue",-1)),S[33]||(S[33]=m("h2",null,"你的蓝，是什么？",-1)),S[34]||(S[34]=m("p",null,"选择几个关键词，生成一张属于你的大临蓝印纹样卡。",-1)),m("button",{class:"primary-button",type:"button",onClick:S[9]||(S[9]=D=>C.$emit("navigate","/find-blue"))},[S[31]||(S[31]=tt(" 寻找你的蓝 ",-1)),Ee(de(rr),{size:18})])])],4)],32))}},X0={class:"material-gallery-heading"},$0={class:"material-gallery-count"},j0={class:"material-gallery-toolbar"},q0={class:"material-gallery-filters",role:"group","aria-label":"素材类型筛选"},Y0=["onClick"],K0={class:"material-gallery-note"},Z0={class:"material-gallery-grid"},J0=["onClick"],Q0={class:"material-tile-image"},ev=["src","alt"],tv={class:"material-tile-zoom"},nv={class:"material-tile-meta"},iv={class:"material-lightbox-content"},sv=["src"],rv={__name:"MaterialGallery",setup(n){const e=Qe("all"),t=Qe(null),i=[{key:"all",label:"全部素材"},{key:"png",label:"单纹样 / 刻版"},{key:"jpg",label:"布面 / 版样"}],s=Et(()=>e.value==="all"?$i:$i.filter(l=>l.type===e.value));function r(l){return l.type==="png"?"单纹样 / 刻版素材":"布面 / 版样素材"}function a(l){t.value=l}function o(){t.value=null}return(l,c)=>(oe(),xe("section",{class:"material-gallery",onKeyup:nh(o,["esc"])},[m("div",X0,[c[1]||(c[1]=m("div",null,[m("p",{class:"eyebrow"},"Local Material Archive"),m("h2",null,"本地采集素材图录"),m("p",null,"先把采集到的纹样、边饰和布面资料完整保留下来，后续再逐张补充名称、寓意与来源。")],-1)),m("div",$0,[m("strong",null,he(de($i).length),1),c[0]||(c[0]=m("span",null,"张本地素材",-1))])]),m("div",j0,[m("div",q0,[(oe(),xe(rt,null,xt(i,u=>m("button",{key:u.key,type:"button",class:bt({active:e.value===u.key}),onClick:d=>e.value=u.key},he(u.label),11,Y0)),64))]),m("span",K0,[Ee(de(rh),{size:16}),c[2]||(c[2]=tt("仅使用本地文件",-1))])]),m("div",Z0,[(oe(!0),xe(rt,null,xt(s.value,(u,d)=>(oe(),xe("button",{key:u.id,class:"material-tile",type:"button",onClick:f=>a(u)},[m("span",Q0,[m("img",{src:u.src,alt:`本地采集素材 ${d+1}`,loading:"lazy",decoding:"async"},null,8,ev),m("span",tv,[Ee(de(lh),{size:17})])]),m("span",nv,[m("strong",null,"素材 "+he(String(d+1).padStart(2,"0")),1),m("small",null,he(r(u)),1)])],8,J0))),128))]),t.value?(oe(),xe("div",{key:0,class:"material-lightbox",onClick:Yt(o,["self"])},[m("button",{class:"material-lightbox-close",type:"button","aria-label":"关闭素材预览",onClick:o},[Ee(de(ar),{size:22})]),m("figure",iv,[m("img",{src:t.value.src,alt:"本地采集素材大图"},null,8,sv),m("figcaption",null,[m("span",null,he(r(t.value)),1),m("small",null,"本地素材文件 · "+he(t.value.id),1)])])])):Rt("",!0)],32))}},av=ia(rv,[["__scopeId","data-v-411e3d2f"]]),ov={class:"library-page section top-section"},lv={class:"page-heading"},cv={class:"library-tools"},uv={class:"search-field"},dv={class:"filter-tabs"},fv=["onClick"],hv={key:0,class:"library-grid"},pv={key:1,class:"empty-state"},mv={__name:"LibraryPage",props:{initialCategory:{type:String,default:"all"}},emits:["open-pattern","create-pattern"],setup(n){const e=n,t=Qe(e.initialCategory),i=Qe(""),s=Qe(8),r=Et(()=>[{key:"all",name:"全部"},...ch]),a=Et(()=>{const l=i.value.trim();return xn.filter(c=>{const u=t.value==="all"||c.category===t.value,d=`${c.name}${c.categoryName}${c.meaning}${c.meaningDetail}${c.tags.join("")}`;return u&&(!l||d.includes(l))})}),o=Et(()=>a.value.slice(0,s.value));return si(()=>e.initialCategory,l=>{t.value=l}),si([t,i],()=>{s.value=8}),(l,c)=>(oe(),xe("section",ov,[m("div",lv,[c[2]||(c[2]=m("p",{class:"eyebrow"},"Pattern Archive",-1)),c[3]||(c[3]=m("h1",null,"蓝印纹库",-1)),m("p",null,"已整理 "+he(de(xn).length)+" 个有语义说明的示范纹样，并接入 "+he(de($i).length)+" 张本地采集素材。",1)]),m("div",cv,[m("label",uv,[Ee(de(oh),{size:18}),_f(m("input",{"onUpdate:modelValue":c[0]||(c[0]=u=>i.value=u),type:"search",placeholder:"搜索纹样名称、寓意、标签"},null,512),[[th,i.value]])]),m("div",dv,[(oe(!0),xe(rt,null,xt(r.value,u=>(oe(),xe("button",{key:u.key,type:"button",class:bt({active:t.value===u.key}),onClick:d=>t.value=u.key},he(u.name),11,fv))),128))])]),o.value.length?(oe(),xe("div",hv,[(oe(!0),xe(rt,null,xt(o.value,u=>(oe(),Nt(Ec,{key:u.id,pattern:u,onOpen:d=>l.$emit("open-pattern",u),onCreate:d=>l.$emit("create-pattern",u)},null,8,["pattern","onOpen","onCreate"]))),128))])):(oe(),xe("div",pv,[Ee(de(sh),{size:34}),c[4]||(c[4]=m("h2",null,"未找到相关纹样",-1)),c[5]||(c[5]=m("p",null,"试试“莲花”“平安”“富贵”这样的关键词。",-1))])),s.value<a.value.length?(oe(),xe("button",{key:2,class:"secondary-button load-more",type:"button",onClick:c[1]||(c[1]=u=>s.value+=8)}," 加载更多 ")):Rt("",!0),Ee(av)]))}},gv={class:"detail-page section top-section"},_v={class:"detail-layout"},vv={class:"detail-content"},xv={class:"eyebrow"},yv={class:"lead"},Mv={class:"detail-block"},bv={class:"mini-timeline"},Sv={class:"detail-block"},Ev={class:"use-grid"},Tv={class:"detail-block"},wv={class:"library-grid compact-grid"},Av={__name:"PatternDetailPage",props:{patternId:{type:String,required:!0}},emits:["navigate","open-pattern","create-pattern"],setup(n,{emit:e}){const t=n,i=e,s=Qe(!1),r=Et(()=>xn.find(o=>o.id===t.patternId)||xn[0]),a=Et(()=>{const o=r.value.relatedIds.map(l=>xn.find(c=>c.id===l)).filter(Boolean);return o.length?o.slice(0,4):xn.filter(l=>l.category===r.value.category).slice(0,4)});return(o,l)=>(oe(),xe("section",gv,[m("button",{class:"text-link back-link",type:"button",onClick:l[0]||(l[0]=c=>o.$emit("navigate","/library"))},[Ee(de(Ms),{size:17}),l[5]||(l[5]=tt(" 返回纹库 ",-1))]),m("div",_v,[m("button",{class:bt(["detail-image",r.value.previewImage?"detail-image-real":r.value.patternClass]),style:Fn(r.value.previewImage?{backgroundImage:`url(${r.value.previewImage})`}:void 0),type:"button",onClick:l[1]||(l[1]=c=>s.value=!0)},[...l[6]||(l[6]=[m("span",null,"点击放大",-1)])],6),m("article",vv,[m("p",xv,he(r.value.categoryName),1),m("h1",null,he(r.value.name),1),m("p",yv,he(r.value.meaning),1),m("button",{class:"primary-button detail-create-button",type:"button",onClick:l[2]||(l[2]=c=>i("create-pattern",r.value))},[Ee(de(ds),{size:18}),l[7]||(l[7]=tt(" 用此纹样进入 3D 工坊 ",-1))]),m("dl",null,[m("div",null,[l[8]||(l[8]=m("dt",null,"年代",-1)),m("dd",null,he(r.value.era),1)]),m("div",null,[l[9]||(l[9]=m("dt",null,"传统用途",-1)),m("dd",null,he(r.value.usage),1)]),m("div",null,[l[10]||(l[10]=m("dt",null,"文化寓意",-1)),m("dd",null,he(r.value.meaningDetail),1)]),m("div",null,[l[11]||(l[11]=m("dt",null,"背景故事",-1)),m("dd",null,he(r.value.story),1)])])])]),m("div",Mv,[l[12]||(l[12]=m("p",{class:"eyebrow"},"Technique",-1)),l[13]||(l[13]=m("h2",null,"工艺图解",-1)),m("div",bv,[(oe(!0),xe(rt,null,xt(r.value.technique,c=>(oe(),xe("article",{key:c},he(c),1))),128))])]),m("div",Sv,[l[14]||(l[14]=m("p",{class:"eyebrow"},"Modern Use",-1)),l[15]||(l[15]=m("h2",null,"创新应用",-1)),m("div",Ev,[(oe(!0),xe(rt,null,xt(r.value.modernUse,c=>(oe(),xe("article",{key:c},he(c),1))),128))])]),m("div",Tv,[l[16]||(l[16]=m("div",{class:"section-title-row"},[m("div",null,[m("p",{class:"eyebrow"},"Related"),m("h2",null,"猜你喜欢")])],-1)),m("div",wv,[(oe(!0),xe(rt,null,xt(a.value,c=>(oe(),Nt(Ec,{key:c.id,pattern:c,onOpen:u=>o.$emit("open-pattern",c),onCreate:u=>o.$emit("create-pattern",c)},null,8,["pattern","onOpen","onCreate"]))),128))])]),s.value?(oe(),xe("div",{key:0,class:"lightbox",onClick:l[4]||(l[4]=Yt(c=>s.value=!1,["self"]))},[m("button",{class:"icon-button close-lightbox",type:"button",onClick:l[3]||(l[3]=c=>s.value=!1)},[Ee(de(ar),{size:22})]),m("div",{class:bt(["lightbox-pattern",r.value.previewImage?"detail-image-real":r.value.patternClass]),style:Fn(r.value.previewImage?{backgroundImage:`url(${r.value.previewImage})`}:void 0)},null,6)])):Rt("",!0)]))}};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Tc="172",er={ROTATE:0,DOLLY:1,PAN:2},js={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Cv=0,Nu=1,Rv=2,dh=1,Pv=2,Qn=3,Li=0,yn=1,ri=2,ji=0,tr=1,Fu=2,Ou=3,ku=4,Dv=5,ps=100,Lv=101,Iv=102,Uv=103,Nv=104,Fv=200,Ov=201,kv=202,Bv=203,Sl=204,El=205,zv=206,Hv=207,Vv=208,Gv=209,Wv=210,Xv=211,$v=212,jv=213,qv=214,Tl=0,wl=1,Al=2,or=3,Cl=4,Rl=5,Pl=6,Dl=7,fh=0,Yv=1,Kv=2,qi=0,Zv=1,Jv=2,Qv=3,hh=4,ex=5,tx=6,nx=7,ph=300,lr=301,cr=302,Ll=303,Il=304,mo=306,Kr=1e3,gs=1001,Ul=1002,jn=1003,ix=1004,ua=1005,oi=1006,Io=1007,_s=1008,Ii=1009,mh=1010,gh=1011,Zr=1012,wc=1013,bs=1014,wi=1015,sa=1016,Ac=1017,Cc=1018,ur=1020,_h=35902,vh=1021,xh=1022,Xn=1023,yh=1024,Mh=1025,nr=1026,dr=1027,bh=1028,Rc=1029,Sh=1030,Pc=1031,Dc=1033,Na=33776,Fa=33777,Oa=33778,ka=33779,Nl=35840,Fl=35841,Ol=35842,kl=35843,Bl=36196,zl=37492,Hl=37496,Vl=37808,Gl=37809,Wl=37810,Xl=37811,$l=37812,jl=37813,ql=37814,Yl=37815,Kl=37816,Zl=37817,Jl=37818,Ql=37819,ec=37820,tc=37821,Ba=36492,nc=36494,ic=36495,Eh=36283,sc=36284,rc=36285,ac=36286,sx=3200,rx=3201,Th=0,ax=1,Wi="",vn="srgb",fr="srgb-linear",Za="linear",St="srgb",Rs=7680,Bu=519,ox=512,lx=513,cx=514,wh=515,ux=516,dx=517,fx=518,hx=519,zu=35044,Hu="300 es",Ai=2e3,Ja=2001;class ws{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Vu=1234567;const Br=Math.PI/180,Jr=180/Math.PI;function mr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[t&63|128]+tn[t>>8&255]+"-"+tn[t>>16&255]+tn[t>>24&255]+tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function nt(n,e,t){return Math.max(e,Math.min(t,n))}function Lc(n,e){return(n%e+e)%e}function px(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function mx(n,e,t){return n!==e?(t-n)/(e-n):0}function zr(n,e,t){return(1-t)*n+t*e}function gx(n,e,t,i){return zr(n,e,1-Math.exp(-t*i))}function _x(n,e=1){return e-Math.abs(Lc(n,e*2)-e)}function vx(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function xx(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function yx(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Mx(n,e){return n+Math.random()*(e-n)}function bx(n){return n*(.5-Math.random())}function Sx(n){n!==void 0&&(Vu=n);let e=Vu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ex(n){return n*Br}function Tx(n){return n*Jr}function wx(n){return(n&n-1)===0&&n!==0}function Ax(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Cx(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Rx(n,e,t,i,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),u=a((e+i)/2),d=r((e-i)/2),f=a((e-i)/2),p=r((i-e)/2),_=a((i-e)/2);switch(s){case"XYX":n.set(o*u,l*d,l*f,o*c);break;case"YZY":n.set(l*f,o*u,l*d,o*c);break;case"ZXZ":n.set(l*d,l*f,o*u,o*c);break;case"XZX":n.set(o*u,l*_,l*p,o*c);break;case"YXY":n.set(l*p,o*u,l*_,o*c);break;case"ZYZ":n.set(l*_,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Xs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function un(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Zn={DEG2RAD:Br,RAD2DEG:Jr,generateUUID:mr,clamp:nt,euclideanModulo:Lc,mapLinear:px,inverseLerp:mx,lerp:zr,damp:gx,pingpong:_x,smoothstep:vx,smootherstep:xx,randInt:yx,randFloat:Mx,randFloatSpread:bx,seededRandom:Sx,degToRad:Ex,radToDeg:Tx,isPowerOfTwo:wx,ceilPowerOfTwo:Ax,floorPowerOfTwo:Cx,setQuaternionFromProperEuler:Rx,normalize:un,denormalize:Xs};class Oe{constructor(e=0,t=0){Oe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class it{constructor(e,t,i,s,r,a,o,l,c){it.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],p=i[5],_=i[8],M=s[0],g=s[3],h=s[6],A=s[1],R=s[4],y=s[7],L=s[2],C=s[5],S=s[8];return r[0]=a*M+o*A+l*L,r[3]=a*g+o*R+l*C,r[6]=a*h+o*y+l*S,r[1]=c*M+u*A+d*L,r[4]=c*g+u*R+d*C,r[7]=c*h+u*y+d*S,r[2]=f*M+p*A+_*L,r[5]=f*g+p*R+_*C,r[8]=f*h+p*y+_*S,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,f=o*l-u*r,p=c*r-a*l,_=t*d+i*f+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/_;return e[0]=d*M,e[1]=(s*c-u*i)*M,e[2]=(o*i-s*a)*M,e[3]=f*M,e[4]=(u*t-s*l)*M,e[5]=(s*r-o*t)*M,e[6]=p*M,e[7]=(i*l-c*t)*M,e[8]=(a*t-i*r)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Uo.makeScale(e,t)),this}rotate(e){return this.premultiply(Uo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Uo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Uo=new it;function Ah(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Qr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Px(){const n=Qr("canvas");return n.style.display="block",n}const Gu={};function $s(n){n in Gu||(Gu[n]=!0,console.warn(n))}function Dx(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function Lx(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Ix(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Wu=new it().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xu=new it().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ux(){const n={enabled:!0,workingColorSpace:fr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===St&&(s.r=Ci(s.r),s.g=Ci(s.g),s.b=Ci(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===St&&(s.r=ir(s.r),s.g=ir(s.g),s.b=ir(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Wi?Za:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[fr]:{primaries:e,whitePoint:i,transfer:Za,toXYZ:Wu,fromXYZ:Xu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:vn},outputColorSpaceConfig:{drawingBufferColorSpace:vn}},[vn]:{primaries:e,whitePoint:i,transfer:St,toXYZ:Wu,fromXYZ:Xu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:vn}}}),n}const ft=Ux();function Ci(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ir(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ps;class Nx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ps===void 0&&(Ps=Qr("canvas")),Ps.width=e.width,Ps.height=e.height;const i=Ps.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ps}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Qr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ci(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ci(t[i]/255)*255):t[i]=Ci(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Fx=0;class Ch{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fx++}),this.uuid=mr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(No(s[a].image)):r.push(No(s[a]))}else r=No(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function No(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Nx.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ox=0;class on extends ws{constructor(e=on.DEFAULT_IMAGE,t=on.DEFAULT_MAPPING,i=gs,s=gs,r=oi,a=_s,o=Xn,l=Ii,c=on.DEFAULT_ANISOTROPY,u=Wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ox++}),this.uuid=mr(),this.name="",this.source=new Ch(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ph)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Kr:e.x=e.x-Math.floor(e.x);break;case gs:e.x=e.x<0?0:1;break;case Ul:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Kr:e.y=e.y-Math.floor(e.y);break;case gs:e.y=e.y<0?0:1;break;case Ul:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=ph;on.DEFAULT_ANISOTROPY=1;class Bt{constructor(e=0,t=0,i=0,s=1){Bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],_=l[9],M=l[2],g=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-M)<.01&&Math.abs(_-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+M)<.1&&Math.abs(_+g)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(c+1)/2,y=(p+1)/2,L=(h+1)/2,C=(u+f)/4,S=(d+M)/4,D=(_+g)/4;return R>y&&R>L?R<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(R),s=C/i,r=S/i):y>L?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=C/s,r=D/s):L<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),i=S/r,s=D/r),this.set(i,s,r,t),this}let A=Math.sqrt((g-_)*(g-_)+(d-M)*(d-M)+(f-u)*(f-u));return Math.abs(A)<.001&&(A=1),this.x=(g-_)/A,this.y=(d-M)/A,this.z=(f-u)/A,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this.w=nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this.w=nt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kx extends ws{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Bt(0,0,e,t),this.scissorTest=!1,this.viewport=new Bt(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:oi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new on(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new Ch(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ss extends kx{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Rh extends on{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=jn,this.minFilter=jn,this.wrapR=gs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Bx extends on{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=jn,this.minFilter=jn,this.wrapR=gs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Es{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3];const f=r[a+0],p=r[a+1],_=r[a+2],M=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=_,e[t+3]=M;return}if(d!==M||l!==f||c!==p||u!==_){let g=1-o;const h=l*f+c*p+u*_+d*M,A=h>=0?1:-1,R=1-h*h;if(R>Number.EPSILON){const L=Math.sqrt(R),C=Math.atan2(L,h*A);g=Math.sin(g*C)/L,o=Math.sin(o*C)/L}const y=o*A;if(l=l*g+f*y,c=c*g+p*y,u=u*g+_*y,d=d*g+M*y,g===1-o){const L=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=L,c*=L,u*=L,d*=L}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[a],f=r[a+1],p=r[a+2],_=r[a+3];return e[t]=o*_+u*d+l*p-c*f,e[t+1]=l*_+u*f+c*d-o*p,e[t+2]=c*_+u*p+o*f-l*d,e[t+3]=u*_-o*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),d=o(r/2),f=l(i/2),p=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=f*u*d+c*p*_,this._y=c*p*d-f*u*_,this._z=c*u*_+f*p*d,this._w=c*u*d-f*p*_;break;case"YXZ":this._x=f*u*d+c*p*_,this._y=c*p*d-f*u*_,this._z=c*u*_-f*p*d,this._w=c*u*d+f*p*_;break;case"ZXY":this._x=f*u*d-c*p*_,this._y=c*p*d+f*u*_,this._z=c*u*_+f*p*d,this._w=c*u*d-f*p*_;break;case"ZYX":this._x=f*u*d-c*p*_,this._y=c*p*d+f*u*_,this._z=c*u*_-f*p*d,this._w=c*u*d+f*p*_;break;case"YZX":this._x=f*u*d+c*p*_,this._y=c*p*d+f*u*_,this._z=c*u*_-f*p*d,this._w=c*u*d-f*p*_;break;case"XZY":this._x=f*u*d-c*p*_,this._y=c*p*d-f*u*_,this._z=c*u*_+f*p*d,this._w=c*u*d+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=i+o+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,i=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($u.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($u.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),u=2*(o*t-r*s),d=2*(r*i-a*t);return this.x=t+l*c+a*d-o*u,this.y=i+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Fo.copy(this).projectOnVector(e),this.sub(Fo)}reflect(e){return this.sub(Fo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fo=new G,$u=new Es;class ra{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Hn):Hn.fromBufferAttribute(r,a),Hn.applyMatrix4(e.matrixWorld),this.expandByPoint(Hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),da.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),da.copy(i.boundingBox)),da.applyMatrix4(e.matrixWorld),this.union(da)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Tr),fa.subVectors(this.max,Tr),Ds.subVectors(e.a,Tr),Ls.subVectors(e.b,Tr),Is.subVectors(e.c,Tr),Fi.subVectors(Ls,Ds),Oi.subVectors(Is,Ls),ss.subVectors(Ds,Is);let t=[0,-Fi.z,Fi.y,0,-Oi.z,Oi.y,0,-ss.z,ss.y,Fi.z,0,-Fi.x,Oi.z,0,-Oi.x,ss.z,0,-ss.x,-Fi.y,Fi.x,0,-Oi.y,Oi.x,0,-ss.y,ss.x,0];return!Oo(t,Ds,Ls,Is,fa)||(t=[1,0,0,0,1,0,0,0,1],!Oo(t,Ds,Ls,Is,fa))?!1:(ha.crossVectors(Fi,Oi),t=[ha.x,ha.y,ha.z],Oo(t,Ds,Ls,Is,fa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const gi=[new G,new G,new G,new G,new G,new G,new G,new G],Hn=new G,da=new ra,Ds=new G,Ls=new G,Is=new G,Fi=new G,Oi=new G,ss=new G,Tr=new G,fa=new G,ha=new G,rs=new G;function Oo(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){rs.fromArray(n,r);const o=s.x*Math.abs(rs.x)+s.y*Math.abs(rs.y)+s.z*Math.abs(rs.z),l=e.dot(rs),c=t.dot(rs),u=i.dot(rs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const zx=new ra,wr=new G,ko=new G;class Ic{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):zx.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wr.subVectors(e,this.center);const t=wr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(wr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ko.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wr.copy(e.center).add(ko)),this.expandByPoint(wr.copy(e.center).sub(ko))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _i=new G,Bo=new G,pa=new G,ki=new G,zo=new G,ma=new G,Ho=new G;class Ph{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_i)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_i.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_i.copy(this.origin).addScaledVector(this.direction,t),_i.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Bo.copy(e).add(t).multiplyScalar(.5),pa.copy(t).sub(e).normalize(),ki.copy(this.origin).sub(Bo);const r=e.distanceTo(t)*.5,a=-this.direction.dot(pa),o=ki.dot(this.direction),l=-ki.dot(pa),c=ki.lengthSq(),u=Math.abs(1-a*a);let d,f,p,_;if(u>0)if(d=a*l-o,f=a*o-l,_=r*u,d>=0)if(f>=-_)if(f<=_){const M=1/u;d*=M,f*=M,p=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Bo).addScaledVector(pa,f),p}intersectSphere(e,t){_i.subVectors(e.center,this.origin);const i=_i.dot(this.direction),s=_i.dot(_i)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,_i)!==null}intersectTriangle(e,t,i,s,r){zo.subVectors(t,e),ma.subVectors(i,e),Ho.crossVectors(zo,ma);let a=this.direction.dot(Ho),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ki.subVectors(this.origin,e);const l=o*this.direction.dot(ma.crossVectors(ki,ma));if(l<0)return null;const c=o*this.direction.dot(zo.cross(ki));if(c<0||l+c>a)return null;const u=-o*ki.dot(Ho);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ot{constructor(e,t,i,s,r,a,o,l,c,u,d,f,p,_,M,g){Ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,u,d,f,p,_,M,g)}set(e,t,i,s,r,a,o,l,c,u,d,f,p,_,M,g){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=s,h[1]=r,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=_,h[11]=M,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ot().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Us.setFromMatrixColumn(e,0).length(),r=1/Us.setFromMatrixColumn(e,1).length(),a=1/Us.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=a*u,p=a*d,_=o*u,M=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+_*c,t[5]=f-M*c,t[9]=-o*l,t[2]=M-f*c,t[6]=_+p*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,p=l*d,_=c*u,M=c*d;t[0]=f+M*o,t[4]=_*o-p,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=p*o-_,t[6]=M+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,p=l*d,_=c*u,M=c*d;t[0]=f-M*o,t[4]=-a*d,t[8]=_+p*o,t[1]=p+_*o,t[5]=a*u,t[9]=M-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,p=a*d,_=o*u,M=o*d;t[0]=l*u,t[4]=_*c-p,t[8]=f*c+M,t[1]=l*d,t[5]=M*c+f,t[9]=p*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,p=a*c,_=o*l,M=o*c;t[0]=l*u,t[4]=M-f*d,t[8]=_*d+p,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*d+_,t[10]=f-M*d}else if(e.order==="XZY"){const f=a*l,p=a*c,_=o*l,M=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+M,t[5]=a*u,t[9]=p*d-_,t[2]=_*d-p,t[6]=o*u,t[10]=M*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hx,e,Vx)}lookAt(e,t,i){const s=this.elements;return En.subVectors(e,t),En.lengthSq()===0&&(En.z=1),En.normalize(),Bi.crossVectors(i,En),Bi.lengthSq()===0&&(Math.abs(i.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),Bi.crossVectors(i,En)),Bi.normalize(),ga.crossVectors(En,Bi),s[0]=Bi.x,s[4]=ga.x,s[8]=En.x,s[1]=Bi.y,s[5]=ga.y,s[9]=En.y,s[2]=Bi.z,s[6]=ga.z,s[10]=En.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],p=i[13],_=i[2],M=i[6],g=i[10],h=i[14],A=i[3],R=i[7],y=i[11],L=i[15],C=s[0],S=s[4],D=s[8],E=s[12],b=s[1],U=s[5],I=s[9],N=s[13],X=s[2],ne=s[6],Y=s[10],se=s[14],z=s[3],me=s[7],Te=s[11],ye=s[15];return r[0]=a*C+o*b+l*X+c*z,r[4]=a*S+o*U+l*ne+c*me,r[8]=a*D+o*I+l*Y+c*Te,r[12]=a*E+o*N+l*se+c*ye,r[1]=u*C+d*b+f*X+p*z,r[5]=u*S+d*U+f*ne+p*me,r[9]=u*D+d*I+f*Y+p*Te,r[13]=u*E+d*N+f*se+p*ye,r[2]=_*C+M*b+g*X+h*z,r[6]=_*S+M*U+g*ne+h*me,r[10]=_*D+M*I+g*Y+h*Te,r[14]=_*E+M*N+g*se+h*ye,r[3]=A*C+R*b+y*X+L*z,r[7]=A*S+R*U+y*ne+L*me,r[11]=A*D+R*I+y*Y+L*Te,r[15]=A*E+R*N+y*se+L*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],p=e[14],_=e[3],M=e[7],g=e[11],h=e[15];return _*(+r*l*d-s*c*d-r*o*f+i*c*f+s*o*p-i*l*p)+M*(+t*l*p-t*c*f+r*a*f-s*a*p+s*c*u-r*l*u)+g*(+t*c*d-t*o*p-r*a*d+i*a*p+r*o*u-i*c*u)+h*(-s*o*u-t*l*d+t*o*f+s*a*d-i*a*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],p=e[11],_=e[12],M=e[13],g=e[14],h=e[15],A=d*g*c-M*f*c+M*l*p-o*g*p-d*l*h+o*f*h,R=_*f*c-u*g*c-_*l*p+a*g*p+u*l*h-a*f*h,y=u*M*c-_*d*c+_*o*p-a*M*p-u*o*h+a*d*h,L=_*d*l-u*M*l-_*o*f+a*M*f+u*o*g-a*d*g,C=t*A+i*R+s*y+r*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/C;return e[0]=A*S,e[1]=(M*f*r-d*g*r-M*s*p+i*g*p+d*s*h-i*f*h)*S,e[2]=(o*g*r-M*l*r+M*s*c-i*g*c-o*s*h+i*l*h)*S,e[3]=(d*l*r-o*f*r-d*s*c+i*f*c+o*s*p-i*l*p)*S,e[4]=R*S,e[5]=(u*g*r-_*f*r+_*s*p-t*g*p-u*s*h+t*f*h)*S,e[6]=(_*l*r-a*g*r-_*s*c+t*g*c+a*s*h-t*l*h)*S,e[7]=(a*f*r-u*l*r+u*s*c-t*f*c-a*s*p+t*l*p)*S,e[8]=y*S,e[9]=(_*d*r-u*M*r-_*i*p+t*M*p+u*i*h-t*d*h)*S,e[10]=(a*M*r-_*o*r+_*i*c-t*M*c-a*i*h+t*o*h)*S,e[11]=(u*o*r-a*d*r-u*i*c+t*d*c+a*i*p-t*o*p)*S,e[12]=L*S,e[13]=(u*M*s-_*d*s+_*i*f-t*M*f-u*i*g+t*d*g)*S,e[14]=(_*o*s-a*M*s-_*i*l+t*M*l+a*i*g-t*o*g)*S,e[15]=(a*d*s-u*o*s+u*i*l-t*d*l-a*i*f+t*o*f)*S,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,d=o+o,f=r*c,p=r*u,_=r*d,M=a*u,g=a*d,h=o*d,A=l*c,R=l*u,y=l*d,L=i.x,C=i.y,S=i.z;return s[0]=(1-(M+h))*L,s[1]=(p+y)*L,s[2]=(_-R)*L,s[3]=0,s[4]=(p-y)*C,s[5]=(1-(f+h))*C,s[6]=(g+A)*C,s[7]=0,s[8]=(_+R)*S,s[9]=(g-A)*S,s[10]=(1-(f+M))*S,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Us.set(s[0],s[1],s[2]).length();const a=Us.set(s[4],s[5],s[6]).length(),o=Us.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Vn.copy(this);const c=1/r,u=1/a,d=1/o;return Vn.elements[0]*=c,Vn.elements[1]*=c,Vn.elements[2]*=c,Vn.elements[4]*=u,Vn.elements[5]*=u,Vn.elements[6]*=u,Vn.elements[8]*=d,Vn.elements[9]*=d,Vn.elements[10]*=d,t.setFromRotationMatrix(Vn),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=Ai){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s);let p,_;if(o===Ai)p=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Ja)p=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Ai){const l=this.elements,c=1/(t-e),u=1/(i-s),d=1/(a-r),f=(t+e)*c,p=(i+s)*u;let _,M;if(o===Ai)_=(a+r)*d,M=-2*d;else if(o===Ja)_=r*d,M=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=M,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Us=new G,Vn=new Ot,Hx=new G(0,0,0),Vx=new G(1,1,1),Bi=new G,ga=new G,En=new G,ju=new Ot,qu=new Es;class di{constructor(e=0,t=0,i=0,s=di.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(nt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-nt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ju.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ju,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qu.setFromEuler(this),this.setFromQuaternion(qu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}di.DEFAULT_ORDER="XYZ";class Dh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Gx=0;const Yu=new G,Ns=new Es,vi=new Ot,_a=new G,Ar=new G,Wx=new G,Xx=new Es,Ku=new G(1,0,0),Zu=new G(0,1,0),Ju=new G(0,0,1),Qu={type:"added"},$x={type:"removed"},Fs={type:"childadded",child:null},Vo={type:"childremoved",child:null};class en extends ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gx++}),this.uuid=mr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=en.DEFAULT_UP.clone();const e=new G,t=new di,i=new Es,s=new G(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ot},normalMatrix:{value:new it}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=en.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.premultiply(Ns),this}rotateX(e){return this.rotateOnAxis(Ku,e)}rotateY(e){return this.rotateOnAxis(Zu,e)}rotateZ(e){return this.rotateOnAxis(Ju,e)}translateOnAxis(e,t){return Yu.copy(e).applyQuaternion(this.quaternion),this.position.add(Yu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ku,e)}translateY(e){return this.translateOnAxis(Zu,e)}translateZ(e){return this.translateOnAxis(Ju,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?_a.copy(e):_a.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(Ar,_a,this.up):vi.lookAt(_a,Ar,this.up),this.quaternion.setFromRotationMatrix(vi),s&&(vi.extractRotation(s.matrixWorld),Ns.setFromRotationMatrix(vi),this.quaternion.premultiply(Ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qu),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($x),Vo.child=e,this.dispatchEvent(Vo),Vo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qu),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,e,Wx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,Xx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),f=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=s,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}en.DEFAULT_UP=new G(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gn=new G,xi=new G,Go=new G,yi=new G,Os=new G,ks=new G,ed=new G,Wo=new G,Xo=new G,$o=new G,jo=new Bt,qo=new Bt,Yo=new Bt;class Wn{constructor(e=new G,t=new G,i=new G){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Gn.subVectors(e,t),s.cross(Gn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Gn.subVectors(s,t),xi.subVectors(i,t),Go.subVectors(e,t);const a=Gn.dot(Gn),o=Gn.dot(xi),l=Gn.dot(Go),c=xi.dot(xi),u=xi.dot(Go),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const f=1/d,p=(c*l-o*u)*f,_=(a*u-o*l)*f;return r.set(1-p-_,_,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,yi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,yi.x),l.addScaledVector(a,yi.y),l.addScaledVector(o,yi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return jo.setScalar(0),qo.setScalar(0),Yo.setScalar(0),jo.fromBufferAttribute(e,t),qo.fromBufferAttribute(e,i),Yo.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(jo,r.x),a.addScaledVector(qo,r.y),a.addScaledVector(Yo,r.z),a}static isFrontFacing(e,t,i,s){return Gn.subVectors(i,t),xi.subVectors(e,t),Gn.cross(xi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gn.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),Gn.cross(xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Wn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;Os.subVectors(s,i),ks.subVectors(r,i),Wo.subVectors(e,i);const l=Os.dot(Wo),c=ks.dot(Wo);if(l<=0&&c<=0)return t.copy(i);Xo.subVectors(e,s);const u=Os.dot(Xo),d=ks.dot(Xo);if(u>=0&&d<=u)return t.copy(s);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Os,a);$o.subVectors(e,r);const p=Os.dot($o),_=ks.dot($o);if(_>=0&&p<=_)return t.copy(r);const M=p*c-l*_;if(M<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(ks,o);const g=u*_-p*d;if(g<=0&&d-u>=0&&p-_>=0)return ed.subVectors(r,s),o=(d-u)/(d-u+(p-_)),t.copy(s).addScaledVector(ed,o);const h=1/(g+M+f);return a=M*h,o=f*h,t.copy(i).addScaledVector(Os,a).addScaledVector(ks,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Lh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},va={h:0,s:0,l:0};function Ko(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ot{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=ft.workingColorSpace){return this.r=e,this.g=t,this.b=i,ft.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=ft.workingColorSpace){if(e=Lc(e,1),t=nt(t,0,1),i=nt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Ko(a,r,e+1/3),this.g=Ko(a,r,e),this.b=Ko(a,r,e-1/3)}return ft.toWorkingColorSpace(this,s),this}setStyle(e,t=vn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vn){const i=Lh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ci(e.r),this.g=Ci(e.g),this.b=Ci(e.b),this}copyLinearToSRGB(e){return this.r=ir(e.r),this.g=ir(e.g),this.b=ir(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vn){return ft.fromWorkingColorSpace(nn.copy(this),e),Math.round(nt(nn.r*255,0,255))*65536+Math.round(nt(nn.g*255,0,255))*256+Math.round(nt(nn.b*255,0,255))}getHexString(e=vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.fromWorkingColorSpace(nn.copy(this),t);const i=nn.r,s=nn.g,r=nn.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ft.workingColorSpace){return ft.fromWorkingColorSpace(nn.copy(this),t),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=vn){ft.fromWorkingColorSpace(nn.copy(this),e);const t=nn.r,i=nn.g,s=nn.b;return e!==vn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+t,zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(zi),e.getHSL(va);const i=zr(zi.h,va.h,t),s=zr(zi.s,va.s,t),r=zr(zi.l,va.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new ot;ot.NAMES=Lh;let jx=0;class gr extends ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jx++}),this.uuid=mr(),this.name="",this.type="Material",this.blending=tr,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sl,this.blendDst=El,this.blendEquation=ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=or,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rs,this.stencilZFail=Rs,this.stencilZPass=Rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==tr&&(i.blending=this.blending),this.side!==Li&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Sl&&(i.blendSrc=this.blendSrc),this.blendDst!==El&&(i.blendDst=this.blendDst),this.blendEquation!==ps&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==or&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Rs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Rs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Rs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Uc extends gr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.combine=fh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Gt=new G,xa=new Oe;class ci{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=zu,this.updateRanges=[],this.gpuType=wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)xa.fromBufferAttribute(this,t),xa.applyMatrix3(e),this.setXY(t,xa.x,xa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Xs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=un(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xs(t,this.array)),t}setX(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xs(t,this.array)),t}setY(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xs(t,this.array)),t}setW(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),i=un(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),i=un(i,this.array),s=un(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),i=un(i,this.array),s=un(s,this.array),r=un(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zu&&(e.usage=this.usage),e}}class Ih extends ci{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Uh extends ci{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class zt extends ci{constructor(e,t,i){super(new Float32Array(e),t,i)}}let qx=0;const In=new Ot,Zo=new en,Bs=new G,Tn=new ra,Cr=new ra,qt=new G;class Bn extends ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qx++}),this.uuid=mr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ah(e)?Uh:Ih)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new it().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return In.makeRotationFromQuaternion(e),this.applyMatrix4(In),this}rotateX(e){return In.makeRotationX(e),this.applyMatrix4(In),this}rotateY(e){return In.makeRotationY(e),this.applyMatrix4(In),this}rotateZ(e){return In.makeRotationZ(e),this.applyMatrix4(In),this}translate(e,t,i){return In.makeTranslation(e,t,i),this.applyMatrix4(In),this}scale(e,t,i){return In.makeScale(e,t,i),this.applyMatrix4(In),this}lookAt(e){return Zo.lookAt(e),Zo.updateMatrix(),this.applyMatrix4(Zo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bs).negate(),this.translate(Bs.x,Bs.y,Bs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new zt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ra);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Tn.setFromBufferAttribute(r),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ic);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(Tn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Cr.setFromBufferAttribute(o),this.morphTargetsRelative?(qt.addVectors(Tn.min,Cr.min),Tn.expandByPoint(qt),qt.addVectors(Tn.max,Cr.max),Tn.expandByPoint(qt)):(Tn.expandByPoint(Cr.min),Tn.expandByPoint(Cr.max))}Tn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)qt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(qt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)qt.fromBufferAttribute(o,c),l&&(Bs.fromBufferAttribute(e,c),qt.add(Bs)),s=Math.max(s,i.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ci(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<i.count;D++)o[D]=new G,l[D]=new G;const c=new G,u=new G,d=new G,f=new Oe,p=new Oe,_=new Oe,M=new G,g=new G;function h(D,E,b){c.fromBufferAttribute(i,D),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,b),f.fromBufferAttribute(r,D),p.fromBufferAttribute(r,E),_.fromBufferAttribute(r,b),u.sub(c),d.sub(c),p.sub(f),_.sub(f);const U=1/(p.x*_.y-_.x*p.y);isFinite(U)&&(M.copy(u).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(U),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(U),o[D].add(M),o[E].add(M),o[b].add(M),l[D].add(g),l[E].add(g),l[b].add(g))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let D=0,E=A.length;D<E;++D){const b=A[D],U=b.start,I=b.count;for(let N=U,X=U+I;N<X;N+=3)h(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const R=new G,y=new G,L=new G,C=new G;function S(D){L.fromBufferAttribute(s,D),C.copy(L);const E=o[D];R.copy(E),R.sub(L.multiplyScalar(L.dot(E))).normalize(),y.crossVectors(C,E);const U=y.dot(l[D])<0?-1:1;a.setXYZW(D,R.x,R.y,R.z,U)}for(let D=0,E=A.length;D<E;++D){const b=A[D],U=b.start,I=b.count;for(let N=U,X=U+I;N<X;N+=3)S(e.getX(N+0)),S(e.getX(N+1)),S(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ci(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const s=new G,r=new G,a=new G,o=new G,l=new G,c=new G,u=new G,d=new G;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),M=e.getX(f+1),g=e.getX(f+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,M),a.fromBufferAttribute(t,g),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,g),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)qt.fromBufferAttribute(e,t),qt.normalize(),e.setXYZ(t,qt.x,qt.y,qt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,f=new c.constructor(l.length*u);let p=0,_=0;for(let M=0,g=l.length;M<g;M++){o.isInterleavedBufferAttribute?p=l[M]*o.data.stride+o.offset:p=l[M]*u;for(let h=0;h<u;h++)f[_++]=c[p++]}return new ci(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bn,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){const f=c[u],p=e(f,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const td=new Ot,as=new Ph,ya=new Ic,nd=new G,Ma=new G,ba=new G,Sa=new G,Jo=new G,Ea=new G,id=new G,Ta=new G;class Lt extends en{constructor(e=new Bn,t=new Uc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Ea.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],d=r[l];u!==0&&(Jo.fromBufferAttribute(d,e),a?Ea.addScaledVector(Jo,u):Ea.addScaledVector(Jo.sub(t),u))}t.add(Ea)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ya.copy(i.boundingSphere),ya.applyMatrix4(r),as.copy(e.ray).recast(e.near),!(ya.containsPoint(as.origin)===!1&&(as.intersectSphere(ya,nd)===null||as.origin.distanceToSquared(nd)>(e.far-e.near)**2))&&(td.copy(r).invert(),as.copy(e.ray).applyMatrix4(td),!(i.boundingBox!==null&&as.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,as)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,M=f.length;_<M;_++){const g=f[_],h=a[g.materialIndex],A=Math.max(g.start,p.start),R=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let y=A,L=R;y<L;y+=3){const C=o.getX(y),S=o.getX(y+1),D=o.getX(y+2);s=wa(this,h,e,i,c,u,d,C,S,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),M=Math.min(o.count,p.start+p.count);for(let g=_,h=M;g<h;g+=3){const A=o.getX(g),R=o.getX(g+1),y=o.getX(g+2);s=wa(this,a,e,i,c,u,d,A,R,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,M=f.length;_<M;_++){const g=f[_],h=a[g.materialIndex],A=Math.max(g.start,p.start),R=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let y=A,L=R;y<L;y+=3){const C=y,S=y+1,D=y+2;s=wa(this,h,e,i,c,u,d,C,S,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let g=_,h=M;g<h;g+=3){const A=g,R=g+1,y=g+2;s=wa(this,a,e,i,c,u,d,A,R,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function Yx(n,e,t,i,s,r,a,o){let l;if(e.side===yn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Li,o),l===null)return null;Ta.copy(o),Ta.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ta);return c<t.near||c>t.far?null:{distance:c,point:Ta.clone(),object:n}}function wa(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Ma),n.getVertexPosition(l,ba),n.getVertexPosition(c,Sa);const u=Yx(n,e,t,i,Ma,ba,Sa,id);if(u){const d=new G;Wn.getBarycoord(id,Ma,ba,Sa,d),s&&(u.uv=Wn.getInterpolatedAttribute(s,o,l,c,d,new Oe)),r&&(u.uv1=Wn.getInterpolatedAttribute(r,o,l,c,d,new Oe)),a&&(u.normal=Wn.getInterpolatedAttribute(a,o,l,c,d,new G),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new G,materialIndex:0};Wn.getNormal(Ma,ba,Sa,f.normal),u.face=f,u.barycoord=d}return u}class Yi extends Bn{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],d=[];let f=0,p=0;_("z","y","x",-1,-1,i,t,e,a,r,0),_("z","y","x",1,-1,i,t,-e,a,r,1),_("x","z","y",1,1,e,i,t,s,a,2),_("x","z","y",1,-1,e,i,-t,s,a,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new zt(c,3)),this.setAttribute("normal",new zt(u,3)),this.setAttribute("uv",new zt(d,2));function _(M,g,h,A,R,y,L,C,S,D,E){const b=y/S,U=L/D,I=y/2,N=L/2,X=C/2,ne=S+1,Y=D+1;let se=0,z=0;const me=new G;for(let Te=0;Te<Y;Te++){const ye=Te*U-N;for(let Ie=0;Ie<ne;Ie++){const je=Ie*b-I;me[M]=je*A,me[g]=ye*R,me[h]=X,c.push(me.x,me.y,me.z),me[M]=0,me[g]=0,me[h]=C>0?1:-1,u.push(me.x,me.y,me.z),d.push(Ie/S),d.push(1-Te/D),se+=1}}for(let Te=0;Te<D;Te++)for(let ye=0;ye<S;ye++){const Ie=f+ye+ne*Te,je=f+ye+ne*(Te+1),re=f+(ye+1)+ne*(Te+1),Me=f+(ye+1)+ne*Te;l.push(Ie,je,Me),l.push(je,re,Me),z+=6}o.addGroup(p,z,E),p+=z,f+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function hr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function dn(n){const e={};for(let t=0;t<n.length;t++){const i=hr(n[t]);for(const s in i)e[s]=i[s]}return e}function Kx(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Nh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}const Zx={clone:hr,merge:dn};var Jx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zi extends gr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jx,this.fragmentShader=Qx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hr(e.uniforms),this.uniformsGroups=Kx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Fh extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot,this.coordinateSystem=Ai}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Hi=new G,sd=new Oe,rd=new Oe;class Nn extends Fh{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Jr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Br*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jr*2*Math.atan(Math.tan(Br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z)}getViewSize(e,t){return this.getViewBounds(e,sd,rd),t.subVectors(rd,sd)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Br*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const zs=-90,Hs=1;class ey extends en{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Nn(zs,Hs,e,t);s.layers=this.layers,this.add(s);const r=new Nn(zs,Hs,e,t);r.layers=this.layers,this.add(r);const a=new Nn(zs,Hs,e,t);a.layers=this.layers,this.add(a);const o=new Nn(zs,Hs,e,t);o.layers=this.layers,this.add(o);const l=new Nn(zs,Hs,e,t);l.layers=this.layers,this.add(l);const c=new Nn(zs,Hs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Ai)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ja)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(d,f,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Oh extends on{constructor(e,t,i,s,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:lr,super(e,t,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ty extends Ss{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Oh(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:oi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Yi(5,5,5),r=new Zi({name:"CubemapFromEquirect",uniforms:hr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:yn,blending:ji});r.uniforms.tEquirect.value=t;const a=new Lt(s,r),o=t.minFilter;return t.minFilter===_s&&(t.minFilter=oi),new ey(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}class ny extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new di,this.environmentIntensity=1,this.environmentRotation=new di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Qo=new G,iy=new G,sy=new it;class Gi{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Qo.subVectors(i,t).cross(iy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Qo),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||sy.getNormalMatrix(e),s=this.coplanarPoint(Qo).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const os=new Ic,Aa=new G;class Nc{constructor(e=new Gi,t=new Gi,i=new Gi,s=new Gi,r=new Gi,a=new Gi){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ai){const i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],d=s[6],f=s[7],p=s[8],_=s[9],M=s[10],g=s[11],h=s[12],A=s[13],R=s[14],y=s[15];if(i[0].setComponents(l-r,f-c,g-p,y-h).normalize(),i[1].setComponents(l+r,f+c,g+p,y+h).normalize(),i[2].setComponents(l+a,f+u,g+_,y+A).normalize(),i[3].setComponents(l-a,f-u,g-_,y-A).normalize(),i[4].setComponents(l-o,f-d,g-M,y-R).normalize(),t===Ai)i[5].setComponents(l+o,f+d,g+M,y+R).normalize();else if(t===Ja)i[5].setComponents(o,d,M,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),os.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),os.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(os)}intersectsSprite(e){return os.center.set(0,0,0),os.radius=.7071067811865476,os.applyMatrix4(e.matrixWorld),this.intersectsSphere(os)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Aa.x=s.normal.x>0?e.max.x:e.min.x,Aa.y=s.normal.y>0?e.max.y:e.min.y,Aa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Aa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ti extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}}class ad extends on{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class kh extends on{constructor(e,t,i,s,r,a,o,l,c,u=nr){if(u!==nr&&u!==dr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===nr&&(i=bs),i===void 0&&u===dr&&(i=ur),super(null,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:jn,this.minFilter=l!==void 0?l:jn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ry{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let s=0;const r=i.length;let a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);const u=i[s],f=i[s+1]-u,p=(a-u)/f;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new Oe:new G);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new G,s=[],r=[],a=[],o=new G,l=new Ot;for(let p=0;p<=e;p++){const _=p/e;s[p]=this.getTangentAt(_,new G)}r[0]=new G,a[0]=new G;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),f<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(nt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,_))}a[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(nt(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],p*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function od(n,e,t,i,s){const r=(i-e)*.5,a=(s-t)*.5,o=n*n,l=n*o;return(2*t-2*i+r+a)*l+(-3*t+3*i-2*r-a)*o+r*n+t}class ay extends ry{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Oe){const i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return i.set(od(o,l.x,c.x,u.x,d.x),od(o,l.y,c.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new Oe().fromArray(s))}return this}}class Qa extends Bn{constructor(e=[new Oe(0,-.5),new Oe(.5,0),new Oe(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=nt(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],u=1/t,d=new G,f=new Oe,p=new G,_=new G,M=new G;let g=0,h=0;for(let A=0;A<=e.length-1;A++)switch(A){case 0:g=e[A+1].x-e[A].x,h=e[A+1].y-e[A].y,p.x=h*1,p.y=-g,p.z=h*0,M.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(M.x,M.y,M.z);break;default:g=e[A+1].x-e[A].x,h=e[A+1].y-e[A].y,p.x=h*1,p.y=-g,p.z=h*0,_.copy(p),p.x+=M.x,p.y+=M.y,p.z+=M.z,p.normalize(),l.push(p.x,p.y,p.z),M.copy(_)}for(let A=0;A<=t;A++){const R=i+A*u*s,y=Math.sin(R),L=Math.cos(R);for(let C=0;C<=e.length-1;C++){d.x=e[C].x*y,d.y=e[C].y,d.z=e[C].x*L,a.push(d.x,d.y,d.z),f.x=A/t,f.y=C/(e.length-1),o.push(f.x,f.y);const S=l[3*C+0]*y,D=l[3*C+1],E=l[3*C+0]*L;c.push(S,D,E)}}for(let A=0;A<t;A++)for(let R=0;R<e.length-1;R++){const y=R+A*e.length,L=y,C=y+e.length,S=y+e.length+1,D=y+1;r.push(L,C,D),r.push(S,D,C)}this.setIndex(r),this.setAttribute("position",new zt(a,3)),this.setAttribute("uv",new zt(o,2)),this.setAttribute("normal",new zt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qa(e.points,e.segments,e.phiStart,e.phiLength)}}class Fc extends Bn{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new G,u=new Oe;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){const p=i+d/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[f]/e+1)/2,u.y=(a[f+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new zt(a,3)),this.setAttribute("normal",new zt(o,3)),this.setAttribute("uv",new zt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Hr extends Bn{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],f=[],p=[];let _=0;const M=[],g=i/2;let h=0;A(),a===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(u),this.setAttribute("position",new zt(d,3)),this.setAttribute("normal",new zt(f,3)),this.setAttribute("uv",new zt(p,2));function A(){const y=new G,L=new G;let C=0;const S=(t-e)/i;for(let D=0;D<=r;D++){const E=[],b=D/r,U=b*(t-e)+e;for(let I=0;I<=s;I++){const N=I/s,X=N*l+o,ne=Math.sin(X),Y=Math.cos(X);L.x=U*ne,L.y=-b*i+g,L.z=U*Y,d.push(L.x,L.y,L.z),y.set(ne,S,Y).normalize(),f.push(y.x,y.y,y.z),p.push(N,1-b),E.push(_++)}M.push(E)}for(let D=0;D<s;D++)for(let E=0;E<r;E++){const b=M[E][D],U=M[E+1][D],I=M[E+1][D+1],N=M[E][D+1];(e>0||E!==0)&&(u.push(b,U,N),C+=3),(t>0||E!==r-1)&&(u.push(U,I,N),C+=3)}c.addGroup(h,C,0),h+=C}function R(y){const L=_,C=new Oe,S=new G;let D=0;const E=y===!0?e:t,b=y===!0?1:-1;for(let I=1;I<=s;I++)d.push(0,g*b,0),f.push(0,b,0),p.push(.5,.5),_++;const U=_;for(let I=0;I<=s;I++){const X=I/s*l+o,ne=Math.cos(X),Y=Math.sin(X);S.x=E*Y,S.y=g*b,S.z=E*ne,d.push(S.x,S.y,S.z),f.push(0,b,0),C.x=ne*.5+.5,C.y=Y*.5*b+.5,p.push(C.x,C.y),_++}for(let I=0;I<s;I++){const N=L+I,X=U+I;y===!0?u.push(X,X+1,N):u.push(X+1,X,N),D+=3}c.addGroup(h,D,y===!0?1:2),h+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Xi extends Bn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,d=e/o,f=t/l,p=[],_=[],M=[],g=[];for(let h=0;h<u;h++){const A=h*f-a;for(let R=0;R<c;R++){const y=R*d-r;_.push(y,-A,0),M.push(0,0,1),g.push(R/o),g.push(1-h/l)}}for(let h=0;h<l;h++)for(let A=0;A<o;A++){const R=A+c*h,y=A+c*(h+1),L=A+1+c*(h+1),C=A+1+c*h;p.push(R,y,C),p.push(y,L,C)}this.setIndex(p),this.setAttribute("position",new zt(_,3)),this.setAttribute("normal",new zt(M,3)),this.setAttribute("uv",new zt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xi(e.width,e.height,e.widthSegments,e.heightSegments)}}class Oc extends Bn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new G,f=new G,p=[],_=[],M=[],g=[];for(let h=0;h<=i;h++){const A=[],R=h/i;let y=0;h===0&&a===0?y=.5/t:h===i&&l===Math.PI&&(y=-.5/t);for(let L=0;L<=t;L++){const C=L/t;d.x=-e*Math.cos(s+C*r)*Math.sin(a+R*o),d.y=e*Math.cos(a+R*o),d.z=e*Math.sin(s+C*r)*Math.sin(a+R*o),_.push(d.x,d.y,d.z),f.copy(d).normalize(),M.push(f.x,f.y,f.z),g.push(C+y,1-R),A.push(c++)}u.push(A)}for(let h=0;h<i;h++)for(let A=0;A<t;A++){const R=u[h][A+1],y=u[h][A],L=u[h+1][A],C=u[h+1][A+1];(h!==0||a>0)&&p.push(R,y,C),(h!==i-1||l<Math.PI)&&p.push(y,L,C)}this.setIndex(p),this.setAttribute("position",new zt(_,3)),this.setAttribute("normal",new zt(M,3)),this.setAttribute("uv",new zt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class eo extends Bn{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const a=[],o=[],l=[],c=[],u=new G,d=new G,f=new G;for(let p=0;p<=i;p++)for(let _=0;_<=s;_++){const M=_/s*r,g=p/i*Math.PI*2;d.x=(e+t*Math.cos(g))*Math.cos(M),d.y=(e+t*Math.cos(g))*Math.sin(M),d.z=t*Math.sin(g),o.push(d.x,d.y,d.z),u.x=e*Math.cos(M),u.y=e*Math.sin(M),f.subVectors(d,u).normalize(),l.push(f.x,f.y,f.z),c.push(_/s),c.push(p/i)}for(let p=1;p<=i;p++)for(let _=1;_<=s;_++){const M=(s+1)*p+_-1,g=(s+1)*(p-1)+_-1,h=(s+1)*(p-1)+_,A=(s+1)*p+_;a.push(M,g,A),a.push(g,h,A)}this.setIndex(a),this.setAttribute("position",new zt(o,3)),this.setAttribute("normal",new zt(l,3)),this.setAttribute("uv",new zt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new eo(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class oy extends gr{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ot(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Dr extends gr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Th,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ld extends Dr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return nt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ot(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ot(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ot(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class ly extends gr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cy extends gr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const cd={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class uy{constructor(e,t,i){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){const p=c[d],_=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null}}}const dy=new uy;class kc{constructor(e){this.manager=e!==void 0?e:dy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}kc.DEFAULT_MATERIAL_NAME="__DEFAULT";class fy extends kc{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=cd.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=Qr("img");function l(){u(),cd.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(d){u(),s&&s(d),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class hy extends kc{constructor(e){super(e)}load(e,t,i,s){const r=new on,a=new fy(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class Bc extends en{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class py extends Bc{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ot(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const el=new Ot,ud=new G,dd=new G;class my{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.map=null,this.mapPass=null,this.matrix=new Ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nc,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new Bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;ud.setFromMatrixPosition(e.matrixWorld),t.position.copy(ud),dd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(dd),t.updateMatrixWorld(),el.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(el),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(el)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Bh extends Fh{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class gy extends my{constructor(){super(new Bh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fd extends Bc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.shadow=new gy}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class _y extends Bc{constructor(e,t,i=10,s=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=i,this.height=s}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class vy extends Nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class hd{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=nt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(nt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class xy extends ws{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function pd(n,e,t,i){const s=yy(i);switch(t){case vh:return n*e;case yh:return n*e;case Mh:return n*e*2;case bh:return n*e/s.components*s.byteLength;case Rc:return n*e/s.components*s.byteLength;case Sh:return n*e*2/s.components*s.byteLength;case Pc:return n*e*2/s.components*s.byteLength;case xh:return n*e*3/s.components*s.byteLength;case Xn:return n*e*4/s.components*s.byteLength;case Dc:return n*e*4/s.components*s.byteLength;case Na:case Fa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Oa:case ka:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Fl:case kl:return Math.max(n,16)*Math.max(e,8)/4;case Nl:case Ol:return Math.max(n,8)*Math.max(e,8)/2;case Bl:case zl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Hl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Vl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Gl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Wl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Xl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case $l:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case jl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ql:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Yl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Kl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Zl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Jl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ql:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ec:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case tc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ba:case nc:case ic:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Eh:case sc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case rc:case ac:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function yy(n){switch(n){case Ii:case mh:return{byteLength:1,components:1};case Zr:case gh:case sa:return{byteLength:2,components:1};case Ac:case Cc:return{byteLength:2,components:4};case bs:case wc:case wi:return{byteLength:4,components:1};case _h:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tc);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function zh(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function My(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,u);else{d.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<d.length;p++){const _=d[f],M=d[p];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++f,d[f]=M)}d.length=f+1;for(let p=0,_=d.length;p<_;p++){const M=d[p];n.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var by=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sy=`#ifdef USE_ALPHAHASH
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
#endif`,Ey=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ty=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ay=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cy=`#ifdef USE_AOMAP
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
#endif`,Ry=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Py=`#ifdef USE_BATCHING
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
#endif`,Dy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ly=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Iy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Uy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ny=`#ifdef USE_IRIDESCENCE
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
#endif`,Fy=`#ifdef USE_BUMPMAP
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
#endif`,Oy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ky=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,By=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Wy=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Xy=`#define PI 3.141592653589793
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
} // validated`,$y=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jy=`vec3 transformedNormal = objectNormal;
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
#endif`,qy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ky=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,eM=`#ifdef USE_ENVMAP
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
#endif`,tM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nM=`#ifdef USE_ENVMAP
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
#endif`,iM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sM=`#ifdef USE_ENVMAP
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
#endif`,rM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,aM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,oM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cM=`#ifdef USE_GRADIENTMAP
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
}`,uM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hM=`uniform bool receiveShadow;
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
#endif`,pM=`#ifdef USE_ENVMAP
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
#endif`,mM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_M=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xM=`PhysicalMaterial material;
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
#endif`,yM=`struct PhysicalMaterial {
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
}`,MM=`
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
#endif`,bM=`#if defined( RE_IndirectDiffuse )
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
#endif`,SM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,EM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,TM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,CM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,RM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,PM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,DM=`#if defined( USE_POINTS_UV )
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
#endif`,LM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,IM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,UM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,NM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,FM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,OM=`#ifdef USE_MORPHTARGETS
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
#endif`,kM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,BM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,HM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,WM=`#ifdef USE_NORMALMAP
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
#endif`,XM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$M=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,YM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,KM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ZM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,JM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,QM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ib=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ab=`float getShadowMask() {
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
}`,ob=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lb=`#ifdef USE_SKINNING
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
#endif`,cb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ub=`#ifdef USE_SKINNING
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
#endif`,db=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mb=`#ifdef USE_TRANSMISSION
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
#endif`,gb=`#ifdef USE_TRANSMISSION
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
#endif`,_b=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Mb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bb=`uniform sampler2D t2D;
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
}`,Sb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Eb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Tb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ab=`#include <common>
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
}`,Cb=`#if DEPTH_PACKING == 3200
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
}`,Rb=`#define DISTANCE
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
}`,Pb=`#define DISTANCE
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
}`,Db=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ib=`uniform float scale;
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
}`,Ub=`uniform vec3 diffuse;
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
}`,Nb=`#include <common>
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
}`,Fb=`uniform vec3 diffuse;
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
}`,Ob=`#define LAMBERT
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
}`,kb=`#define LAMBERT
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
}`,Bb=`#define MATCAP
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
}`,zb=`#define MATCAP
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
}`,Hb=`#define NORMAL
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
}`,Vb=`#define NORMAL
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
}`,Gb=`#define PHONG
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
}`,Wb=`#define PHONG
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
}`,Xb=`#define STANDARD
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
}`,$b=`#define STANDARD
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
}`,jb=`#define TOON
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
}`,qb=`#define TOON
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
}`,Yb=`uniform float size;
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
}`,Kb=`uniform vec3 diffuse;
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
}`,Zb=`#include <common>
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
}`,Jb=`uniform vec3 color;
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
}`,Qb=`uniform float rotation;
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
}`,e1=`uniform vec3 diffuse;
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
}`,st={alphahash_fragment:by,alphahash_pars_fragment:Sy,alphamap_fragment:Ey,alphamap_pars_fragment:Ty,alphatest_fragment:wy,alphatest_pars_fragment:Ay,aomap_fragment:Cy,aomap_pars_fragment:Ry,batching_pars_vertex:Py,batching_vertex:Dy,begin_vertex:Ly,beginnormal_vertex:Iy,bsdfs:Uy,iridescence_fragment:Ny,bumpmap_pars_fragment:Fy,clipping_planes_fragment:Oy,clipping_planes_pars_fragment:ky,clipping_planes_pars_vertex:By,clipping_planes_vertex:zy,color_fragment:Hy,color_pars_fragment:Vy,color_pars_vertex:Gy,color_vertex:Wy,common:Xy,cube_uv_reflection_fragment:$y,defaultnormal_vertex:jy,displacementmap_pars_vertex:qy,displacementmap_vertex:Yy,emissivemap_fragment:Ky,emissivemap_pars_fragment:Zy,colorspace_fragment:Jy,colorspace_pars_fragment:Qy,envmap_fragment:eM,envmap_common_pars_fragment:tM,envmap_pars_fragment:nM,envmap_pars_vertex:iM,envmap_physical_pars_fragment:pM,envmap_vertex:sM,fog_vertex:rM,fog_pars_vertex:aM,fog_fragment:oM,fog_pars_fragment:lM,gradientmap_pars_fragment:cM,lightmap_pars_fragment:uM,lights_lambert_fragment:dM,lights_lambert_pars_fragment:fM,lights_pars_begin:hM,lights_toon_fragment:mM,lights_toon_pars_fragment:gM,lights_phong_fragment:_M,lights_phong_pars_fragment:vM,lights_physical_fragment:xM,lights_physical_pars_fragment:yM,lights_fragment_begin:MM,lights_fragment_maps:bM,lights_fragment_end:SM,logdepthbuf_fragment:EM,logdepthbuf_pars_fragment:TM,logdepthbuf_pars_vertex:wM,logdepthbuf_vertex:AM,map_fragment:CM,map_pars_fragment:RM,map_particle_fragment:PM,map_particle_pars_fragment:DM,metalnessmap_fragment:LM,metalnessmap_pars_fragment:IM,morphinstance_vertex:UM,morphcolor_vertex:NM,morphnormal_vertex:FM,morphtarget_pars_vertex:OM,morphtarget_vertex:kM,normal_fragment_begin:BM,normal_fragment_maps:zM,normal_pars_fragment:HM,normal_pars_vertex:VM,normal_vertex:GM,normalmap_pars_fragment:WM,clearcoat_normal_fragment_begin:XM,clearcoat_normal_fragment_maps:$M,clearcoat_pars_fragment:jM,iridescence_pars_fragment:qM,opaque_fragment:YM,packing:KM,premultiplied_alpha_fragment:ZM,project_vertex:JM,dithering_fragment:QM,dithering_pars_fragment:eb,roughnessmap_fragment:tb,roughnessmap_pars_fragment:nb,shadowmap_pars_fragment:ib,shadowmap_pars_vertex:sb,shadowmap_vertex:rb,shadowmask_pars_fragment:ab,skinbase_vertex:ob,skinning_pars_vertex:lb,skinning_vertex:cb,skinnormal_vertex:ub,specularmap_fragment:db,specularmap_pars_fragment:fb,tonemapping_fragment:hb,tonemapping_pars_fragment:pb,transmission_fragment:mb,transmission_pars_fragment:gb,uv_pars_fragment:_b,uv_pars_vertex:vb,uv_vertex:xb,worldpos_vertex:yb,background_vert:Mb,background_frag:bb,backgroundCube_vert:Sb,backgroundCube_frag:Eb,cube_vert:Tb,cube_frag:wb,depth_vert:Ab,depth_frag:Cb,distanceRGBA_vert:Rb,distanceRGBA_frag:Pb,equirect_vert:Db,equirect_frag:Lb,linedashed_vert:Ib,linedashed_frag:Ub,meshbasic_vert:Nb,meshbasic_frag:Fb,meshlambert_vert:Ob,meshlambert_frag:kb,meshmatcap_vert:Bb,meshmatcap_frag:zb,meshnormal_vert:Hb,meshnormal_frag:Vb,meshphong_vert:Gb,meshphong_frag:Wb,meshphysical_vert:Xb,meshphysical_frag:$b,meshtoon_vert:jb,meshtoon_frag:qb,points_vert:Yb,points_frag:Kb,shadow_vert:Zb,shadow_frag:Jb,sprite_vert:Qb,sprite_frag:e1},Pe={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},envMapRotation:{value:new it},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},ni={basic:{uniforms:dn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:dn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new ot(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:dn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:dn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:dn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new ot(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:dn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:dn([Pe.points,Pe.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:dn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:dn([Pe.common,Pe.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:dn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:dn([Pe.sprite,Pe.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new it}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:dn([Pe.common,Pe.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:dn([Pe.lights,Pe.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};ni.physical={uniforms:dn([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};const Ca={r:0,b:0,g:0},ls=new di,t1=new Ot;function n1(n,e,t,i,s,r,a){const o=new ot(0);let l=r===!0?0:1,c,u,d=null,f=0,p=null;function _(R){let y=R.isScene===!0?R.background:null;return y&&y.isTexture&&(y=(R.backgroundBlurriness>0?t:e).get(y)),y}function M(R){let y=!1;const L=_(R);L===null?h(o,l):L&&L.isColor&&(h(L,1),y=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(R,y){const L=_(y);L&&(L.isCubeTexture||L.mapping===mo)?(u===void 0&&(u=new Lt(new Yi(1,1,1),new Zi({name:"BackgroundCubeMaterial",uniforms:hr(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,S,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ls.copy(y.backgroundRotation),ls.x*=-1,ls.y*=-1,ls.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(ls.y*=-1,ls.z*=-1),u.material.uniforms.envMap.value=L,u.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(t1.makeRotationFromEuler(ls)),u.material.toneMapped=ft.getTransfer(L.colorSpace)!==St,(d!==L||f!==L.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=L,f=L.version,p=n.toneMapping),u.layers.enableAll(),R.unshift(u,u.geometry,u.material,0,0,null)):L&&L.isTexture&&(c===void 0&&(c=new Lt(new Xi(2,2),new Zi({name:"BackgroundMaterial",uniforms:hr(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=L,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=ft.getTransfer(L.colorSpace)!==St,L.matrixAutoUpdate===!0&&L.updateMatrix(),c.material.uniforms.uvTransform.value.copy(L.matrix),(d!==L||f!==L.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=L,f=L.version,p=n.toneMapping),c.layers.enableAll(),R.unshift(c,c.geometry,c.material,0,0,null))}function h(R,y){R.getRGB(Ca,Nh(n)),i.buffers.color.setClear(Ca.r,Ca.g,Ca.b,y,a)}function A(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(R,y=1){o.set(R),l=y,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(R){l=R,h(o,l)},render:M,addToRenderList:g,dispose:A}}function i1(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,a=!1;function o(b,U,I,N,X){let ne=!1;const Y=d(N,I,U);r!==Y&&(r=Y,c(r.object)),ne=p(b,N,I,X),ne&&_(b,N,I,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(ne||a)&&(a=!1,y(b,U,I,N),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return n.createVertexArray()}function c(b){return n.bindVertexArray(b)}function u(b){return n.deleteVertexArray(b)}function d(b,U,I){const N=I.wireframe===!0;let X=i[b.id];X===void 0&&(X={},i[b.id]=X);let ne=X[U.id];ne===void 0&&(ne={},X[U.id]=ne);let Y=ne[N];return Y===void 0&&(Y=f(l()),ne[N]=Y),Y}function f(b){const U=[],I=[],N=[];for(let X=0;X<t;X++)U[X]=0,I[X]=0,N[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:I,attributeDivisors:N,object:b,attributes:{},index:null}}function p(b,U,I,N){const X=r.attributes,ne=U.attributes;let Y=0;const se=I.getAttributes();for(const z in se)if(se[z].location>=0){const Te=X[z];let ye=ne[z];if(ye===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&(ye=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&(ye=b.instanceColor)),Te===void 0||Te.attribute!==ye||ye&&Te.data!==ye.data)return!0;Y++}return r.attributesNum!==Y||r.index!==N}function _(b,U,I,N){const X={},ne=U.attributes;let Y=0;const se=I.getAttributes();for(const z in se)if(se[z].location>=0){let Te=ne[z];Te===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&(Te=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&(Te=b.instanceColor));const ye={};ye.attribute=Te,Te&&Te.data&&(ye.data=Te.data),X[z]=ye,Y++}r.attributes=X,r.attributesNum=Y,r.index=N}function M(){const b=r.newAttributes;for(let U=0,I=b.length;U<I;U++)b[U]=0}function g(b){h(b,0)}function h(b,U){const I=r.newAttributes,N=r.enabledAttributes,X=r.attributeDivisors;I[b]=1,N[b]===0&&(n.enableVertexAttribArray(b),N[b]=1),X[b]!==U&&(n.vertexAttribDivisor(b,U),X[b]=U)}function A(){const b=r.newAttributes,U=r.enabledAttributes;for(let I=0,N=U.length;I<N;I++)U[I]!==b[I]&&(n.disableVertexAttribArray(I),U[I]=0)}function R(b,U,I,N,X,ne,Y){Y===!0?n.vertexAttribIPointer(b,U,I,X,ne):n.vertexAttribPointer(b,U,I,N,X,ne)}function y(b,U,I,N){M();const X=N.attributes,ne=I.getAttributes(),Y=U.defaultAttributeValues;for(const se in ne){const z=ne[se];if(z.location>=0){let me=X[se];if(me===void 0&&(se==="instanceMatrix"&&b.instanceMatrix&&(me=b.instanceMatrix),se==="instanceColor"&&b.instanceColor&&(me=b.instanceColor)),me!==void 0){const Te=me.normalized,ye=me.itemSize,Ie=e.get(me);if(Ie===void 0)continue;const je=Ie.buffer,re=Ie.type,Me=Ie.bytesPerElement,Ue=re===n.INT||re===n.UNSIGNED_INT||me.gpuType===wc;if(me.isInterleavedBufferAttribute){const Se=me.data,Be=Se.stride,We=me.offset;if(Se.isInstancedInterleavedBuffer){for(let Xe=0;Xe<z.locationSize;Xe++)h(z.location+Xe,Se.meshPerAttribute);b.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Xe=0;Xe<z.locationSize;Xe++)g(z.location+Xe);n.bindBuffer(n.ARRAY_BUFFER,je);for(let Xe=0;Xe<z.locationSize;Xe++)R(z.location+Xe,ye/z.locationSize,re,Te,Be*Me,(We+ye/z.locationSize*Xe)*Me,Ue)}else{if(me.isInstancedBufferAttribute){for(let Se=0;Se<z.locationSize;Se++)h(z.location+Se,me.meshPerAttribute);b.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Se=0;Se<z.locationSize;Se++)g(z.location+Se);n.bindBuffer(n.ARRAY_BUFFER,je);for(let Se=0;Se<z.locationSize;Se++)R(z.location+Se,ye/z.locationSize,re,Te,ye*Me,ye/z.locationSize*Se*Me,Ue)}}else if(Y!==void 0){const Te=Y[se];if(Te!==void 0)switch(Te.length){case 2:n.vertexAttrib2fv(z.location,Te);break;case 3:n.vertexAttrib3fv(z.location,Te);break;case 4:n.vertexAttrib4fv(z.location,Te);break;default:n.vertexAttrib1fv(z.location,Te)}}}}A()}function L(){D();for(const b in i){const U=i[b];for(const I in U){const N=U[I];for(const X in N)u(N[X].object),delete N[X];delete U[I]}delete i[b]}}function C(b){if(i[b.id]===void 0)return;const U=i[b.id];for(const I in U){const N=U[I];for(const X in N)u(N[X].object),delete N[X];delete U[I]}delete i[b.id]}function S(b){for(const U in i){const I=i[U];if(I[b.id]===void 0)continue;const N=I[b.id];for(const X in N)u(N[X].object),delete N[X];delete I[b.id]}}function D(){E(),a=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:E,dispose:L,releaseStatesOfGeometry:C,releaseStatesOfProgram:S,initAttributes:M,enableAttribute:g,disableUnusedAttributes:A}}function s1(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),t.update(u,i,d))}function o(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let _=0;_<d;_++)p+=u[_];t.update(p,i,1)}function l(c,u,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)a(c[_],u[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let _=0;for(let M=0;M<d;M++)_+=u[M]*f[M];t.update(_,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function r1(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const S=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(S){return!(S!==Xn&&i.convert(S)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(S){const D=S===sa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(S!==Ii&&i.convert(S)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==wi&&!D)}function l(S){if(S==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),R=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=_>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:g,maxAttributes:h,maxVertexUniforms:A,maxVaryings:R,maxFragmentUniforms:y,vertexTextures:L,maxSamples:C}}function a1(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new Gi,o=new it,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||s;return s=f,i=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,p){const _=d.clippingPlanes,M=d.clipIntersection,g=d.clipShadows,h=n.get(d);if(!s||_===null||_.length===0||r&&!g)r?u(null):c();else{const A=r?0:i,R=A*4;let y=h.clippingState||null;l.value=y,y=u(_,f,R,p);for(let L=0;L!==R;++L)y[L]=t[L];h.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,p,_){const M=d!==null?d.length:0;let g=null;if(M!==0){if(g=l.value,_!==!0||g===null){const h=p+M*4,A=f.matrixWorldInverse;o.getNormalMatrix(A),(g===null||g.length<h)&&(g=new Float32Array(h));for(let R=0,y=p;R!==M;++R,y+=4)a.copy(d[R]).applyMatrix4(A,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,g}}function o1(n){let e=new WeakMap;function t(a,o){return o===Ll?a.mapping=lr:o===Il&&(a.mapping=cr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ll||o===Il)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new ty(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const qs=4,md=[.125,.215,.35,.446,.526,.582],ms=20,tl=new Bh,gd=new ot;let nl=null,il=0,sl=0,rl=!1;const fs=(1+Math.sqrt(5))/2,Vs=1/fs,_d=[new G(-fs,Vs,0),new G(fs,Vs,0),new G(-Vs,0,fs),new G(Vs,0,fs),new G(0,fs,-Vs),new G(0,fs,Vs),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)];class vd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){nl=this._renderer.getRenderTarget(),il=this._renderer.getActiveCubeFace(),sl=this._renderer.getActiveMipmapLevel(),rl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Md(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(nl,il,sl),this._renderer.xr.enabled=rl,e.scissorTest=!1,Ra(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===lr||e.mapping===cr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nl=this._renderer.getRenderTarget(),il=this._renderer.getActiveCubeFace(),sl=this._renderer.getActiveMipmapLevel(),rl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:oi,minFilter:oi,generateMipmaps:!1,type:sa,format:Xn,colorSpace:fr,depthBuffer:!1},s=xd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xd(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=l1(r)),this._blurMaterial=c1(r,e,t)}return s}_compileMaterial(e){const t=new Lt(this._lodPlanes[0],e);this._renderer.compile(t,tl)}_sceneToCubeUV(e,t,i,s){const o=new Nn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(gd),u.toneMapping=qi,u.autoClear=!1;const p=new Uc({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1}),_=new Lt(new Yi,p);let M=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,M=!0):(p.color.copy(gd),M=!0);for(let h=0;h<6;h++){const A=h%3;A===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):A===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));const R=this._cubeSize;Ra(s,A*R,h>2?R:0,R,R),u.setRenderTarget(s),M&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===lr||e.mapping===cr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Md()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yd());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Lt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Ra(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,tl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=_d[(s-r-1)%_d.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Lt(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ms-1),M=r/_,g=isFinite(r)?1+Math.floor(u*M):ms;g>ms&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ms}`);const h=[];let A=0;for(let S=0;S<ms;++S){const D=S/M,E=Math.exp(-D*D/2);h.push(E),S===0?A+=E:S<g&&(A+=2*E)}for(let S=0;S<h.length;S++)h[S]=h[S]/A;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=h,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:R}=this;f.dTheta.value=_,f.mipInt.value=R-i;const y=this._sizeLods[s],L=3*y*(s>R-qs?s-R+qs:0),C=4*(this._cubeSize-y);Ra(t,L,C,3*y,2*y),l.setRenderTarget(t),l.render(d,tl)}}function l1(n){const e=[],t=[],i=[];let s=n;const r=n-qs+1+md.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>n-qs?l=md[a-n+qs-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,_=6,M=3,g=2,h=1,A=new Float32Array(M*_*p),R=new Float32Array(g*_*p),y=new Float32Array(h*_*p);for(let C=0;C<p;C++){const S=C%3*2/3-1,D=C>2?0:-1,E=[S,D,0,S+2/3,D,0,S+2/3,D+1,0,S,D,0,S+2/3,D+1,0,S,D+1,0];A.set(E,M*_*C),R.set(f,g*_*C);const b=[C,C,C,C,C,C];y.set(b,h*_*C)}const L=new Bn;L.setAttribute("position",new ci(A,M)),L.setAttribute("uv",new ci(R,g)),L.setAttribute("faceIndex",new ci(y,h)),e.push(L),s>qs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function xd(n,e,t){const i=new Ss(n,e,t);return i.texture.mapping=mo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ra(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function c1(n,e,t){const i=new Float32Array(ms),s=new G(0,1,0);return new Zi({name:"SphericalGaussianBlur",defines:{n:ms,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:zc(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function yd(){return new Zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zc(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Md(){return new Zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function zc(){return`

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
	`}function u1(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ll||l===Il,u=l===lr||l===cr;if(c||u){let d=e.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new vd(n)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new vd(n)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function d1(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&$s("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function f1(n,e,t,i){const s={},r=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",a),delete s[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const p in f)e.update(f[p],n.ARRAY_BUFFER)}function c(d){const f=[],p=d.index,_=d.attributes.position;let M=0;if(p!==null){const A=p.array;M=p.version;for(let R=0,y=A.length;R<y;R+=3){const L=A[R+0],C=A[R+1],S=A[R+2];f.push(L,C,C,S,S,L)}}else if(_!==void 0){const A=_.array;M=_.version;for(let R=0,y=A.length/3-1;R<y;R+=3){const L=R+0,C=R+1,S=R+2;f.push(L,C,C,S,S,L)}}else return;const g=new(Ah(f)?Uh:Ih)(f,1);g.version=M;const h=r.get(d);h&&e.remove(h),r.set(d,g)}function u(d){const f=r.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function h1(n,e,t){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){n.drawElements(i,p,r,f*a),t.update(p,i,1)}function c(f,p,_){_!==0&&(n.drawElementsInstanced(i,p,r,f*a,_),t.update(p,i,_))}function u(f,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,_);let g=0;for(let h=0;h<_;h++)g+=p[h];t.update(g,i,1)}function d(f,p,_,M){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let h=0;h<f.length;h++)c(f[h]/a,p[h],M[h]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,M,0,_);let h=0;for(let A=0;A<_;A++)h+=p[A]*M[A];t.update(h,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function p1(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function m1(n,e,t){const i=new WeakMap,s=new Bt;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(o);if(f===void 0||f.count!==d){let b=function(){D.dispose(),i.delete(o),o.removeEventListener("dispose",b)};var p=b;f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],A=o.morphAttributes.normal||[],R=o.morphAttributes.color||[];let y=0;_===!0&&(y=1),M===!0&&(y=2),g===!0&&(y=3);let L=o.attributes.position.count*y,C=1;L>e.maxTextureSize&&(C=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const S=new Float32Array(L*C*4*d),D=new Rh(S,L,C,d);D.type=wi,D.needsUpdate=!0;const E=y*4;for(let U=0;U<d;U++){const I=h[U],N=A[U],X=R[U],ne=L*C*4*U;for(let Y=0;Y<I.count;Y++){const se=Y*E;_===!0&&(s.fromBufferAttribute(I,Y),S[ne+se+0]=s.x,S[ne+se+1]=s.y,S[ne+se+2]=s.z,S[ne+se+3]=0),M===!0&&(s.fromBufferAttribute(N,Y),S[ne+se+4]=s.x,S[ne+se+5]=s.y,S[ne+se+6]=s.z,S[ne+se+7]=0),g===!0&&(s.fromBufferAttribute(X,Y),S[ne+se+8]=s.x,S[ne+se+9]=s.y,S[ne+se+10]=s.z,S[ne+se+11]=X.itemSize===4?s.w:1)}}f={count:d,texture:D,size:new Oe(L,C)},i.set(o,f),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let _=0;for(let g=0;g<c.length;g++)_+=c[g];const M=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",M),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function g1(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const Hh=new on,bd=new kh(1,1),Vh=new Rh,Gh=new Bx,Wh=new Oh,Sd=[],Ed=[],Td=new Float32Array(16),wd=new Float32Array(9),Ad=new Float32Array(4);function _r(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Sd[s];if(r===void 0&&(r=new Float32Array(s),Sd[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function $t(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function jt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function go(n,e){let t=Ed[e];t===void 0&&(t=new Int32Array(e),Ed[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function _1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function v1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2fv(this.addr,e),jt(t,e)}}function x1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($t(t,e))return;n.uniform3fv(this.addr,e),jt(t,e)}}function y1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4fv(this.addr,e),jt(t,e)}}function M1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),jt(t,e)}else{if($t(t,i))return;Ad.set(i),n.uniformMatrix2fv(this.addr,!1,Ad),jt(t,i)}}function b1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),jt(t,e)}else{if($t(t,i))return;wd.set(i),n.uniformMatrix3fv(this.addr,!1,wd),jt(t,i)}}function S1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),jt(t,e)}else{if($t(t,i))return;Td.set(i),n.uniformMatrix4fv(this.addr,!1,Td),jt(t,i)}}function E1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function T1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2iv(this.addr,e),jt(t,e)}}function w1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;n.uniform3iv(this.addr,e),jt(t,e)}}function A1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4iv(this.addr,e),jt(t,e)}}function C1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function R1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2uiv(this.addr,e),jt(t,e)}}function P1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;n.uniform3uiv(this.addr,e),jt(t,e)}}function D1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4uiv(this.addr,e),jt(t,e)}}function L1(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(bd.compareFunction=wh,r=bd):r=Hh,t.setTexture2D(e||r,s)}function I1(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Gh,s)}function U1(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Wh,s)}function N1(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Vh,s)}function F1(n){switch(n){case 5126:return _1;case 35664:return v1;case 35665:return x1;case 35666:return y1;case 35674:return M1;case 35675:return b1;case 35676:return S1;case 5124:case 35670:return E1;case 35667:case 35671:return T1;case 35668:case 35672:return w1;case 35669:case 35673:return A1;case 5125:return C1;case 36294:return R1;case 36295:return P1;case 36296:return D1;case 35678:case 36198:case 36298:case 36306:case 35682:return L1;case 35679:case 36299:case 36307:return I1;case 35680:case 36300:case 36308:case 36293:return U1;case 36289:case 36303:case 36311:case 36292:return N1}}function O1(n,e){n.uniform1fv(this.addr,e)}function k1(n,e){const t=_r(e,this.size,2);n.uniform2fv(this.addr,t)}function B1(n,e){const t=_r(e,this.size,3);n.uniform3fv(this.addr,t)}function z1(n,e){const t=_r(e,this.size,4);n.uniform4fv(this.addr,t)}function H1(n,e){const t=_r(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function V1(n,e){const t=_r(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function G1(n,e){const t=_r(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function W1(n,e){n.uniform1iv(this.addr,e)}function X1(n,e){n.uniform2iv(this.addr,e)}function $1(n,e){n.uniform3iv(this.addr,e)}function j1(n,e){n.uniform4iv(this.addr,e)}function q1(n,e){n.uniform1uiv(this.addr,e)}function Y1(n,e){n.uniform2uiv(this.addr,e)}function K1(n,e){n.uniform3uiv(this.addr,e)}function Z1(n,e){n.uniform4uiv(this.addr,e)}function J1(n,e,t){const i=this.cache,s=e.length,r=go(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),jt(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Hh,r[a])}function Q1(n,e,t){const i=this.cache,s=e.length,r=go(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),jt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Gh,r[a])}function eS(n,e,t){const i=this.cache,s=e.length,r=go(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),jt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Wh,r[a])}function tS(n,e,t){const i=this.cache,s=e.length,r=go(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),jt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Vh,r[a])}function nS(n){switch(n){case 5126:return O1;case 35664:return k1;case 35665:return B1;case 35666:return z1;case 35674:return H1;case 35675:return V1;case 35676:return G1;case 5124:case 35670:return W1;case 35667:case 35671:return X1;case 35668:case 35672:return $1;case 35669:case 35673:return j1;case 5125:return q1;case 36294:return Y1;case 36295:return K1;case 36296:return Z1;case 35678:case 36198:case 36298:case 36306:case 35682:return J1;case 35679:case 36299:case 36307:return Q1;case 35680:case 36300:case 36308:case 36293:return eS;case 36289:case 36303:case 36311:case 36292:return tS}}class iS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=F1(t.type)}}class sS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=nS(t.type)}}class rS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const al=/(\w+)(\])?(\[|\.)?/g;function Cd(n,e){n.seq.push(e),n.map[e.id]=e}function aS(n,e,t){const i=n.name,s=i.length;for(al.lastIndex=0;;){const r=al.exec(i),a=al.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Cd(t,c===void 0?new iS(o,n,e):new sS(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new rS(o),Cd(t,d)),t=d}}}class za{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);aS(r,a,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function Rd(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const oS=37297;let lS=0;function cS(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Pd=new it;function uS(n){ft._getMatrix(Pd,ft.workingColorSpace,n);const e=`mat3( ${Pd.elements.map(t=>t.toFixed(4))} )`;switch(ft.getTransfer(n)){case Za:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Dd(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+cS(n.getShaderSource(e),a)}else return s}function dS(n,e){const t=uS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function fS(n,e){let t;switch(e){case Zv:t="Linear";break;case Jv:t="Reinhard";break;case Qv:t="Cineon";break;case hh:t="ACESFilmic";break;case tx:t="AgX";break;case nx:t="Neutral";break;case ex:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Pa=new G;function hS(){ft.getLuminanceCoefficients(Pa);const n=Pa.x.toFixed(4),e=Pa.y.toFixed(4),t=Pa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lr).join(`
`)}function mS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function gS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Lr(n){return n!==""}function Ld(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Id(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _S=/^[ \t]*#include +<([\w\d./]+)>/gm;function oc(n){return n.replace(_S,xS)}const vS=new Map;function xS(n,e){let t=st[e];if(t===void 0){const i=vS.get(e);if(i!==void 0)t=st[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return oc(t)}const yS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ud(n){return n.replace(yS,MS)}function MS(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Nd(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function bS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===dh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Pv?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Qn&&(e="SHADOWMAP_TYPE_VSM"),e}function SS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case lr:case cr:e="ENVMAP_TYPE_CUBE";break;case mo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ES(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case cr:e="ENVMAP_MODE_REFRACTION";break}return e}function TS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case fh:e="ENVMAP_BLENDING_MULTIPLY";break;case Yv:e="ENVMAP_BLENDING_MIX";break;case Kv:e="ENVMAP_BLENDING_ADD";break}return e}function wS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function AS(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=bS(t),c=SS(t),u=ES(t),d=TS(t),f=wS(t),p=pS(t),_=mS(r),M=s.createProgram();let g,h,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Lr).join(`
`),g.length>0&&(g+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Lr).join(`
`),h.length>0&&(h+=`
`)):(g=[Nd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lr).join(`
`),h=[Nd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qi?"#define TONE_MAPPING":"",t.toneMapping!==qi?st.tonemapping_pars_fragment:"",t.toneMapping!==qi?fS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,dS("linearToOutputTexel",t.outputColorSpace),hS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Lr).join(`
`)),a=oc(a),a=Ld(a,t),a=Id(a,t),o=oc(o),o=Ld(o,t),o=Id(o,t),a=Ud(a),o=Ud(o),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,h=["#define varying in",t.glslVersion===Hu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const R=A+g+a,y=A+h+o,L=Rd(s,s.VERTEX_SHADER,R),C=Rd(s,s.FRAGMENT_SHADER,y);s.attachShader(M,L),s.attachShader(M,C),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function S(U){if(n.debug.checkShaderErrors){const I=s.getProgramInfoLog(M).trim(),N=s.getShaderInfoLog(L).trim(),X=s.getShaderInfoLog(C).trim();let ne=!0,Y=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(ne=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,M,L,C);else{const se=Dd(s,L,"vertex"),z=Dd(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+I+`
`+se+`
`+z)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(N===""||X==="")&&(Y=!1);Y&&(U.diagnostics={runnable:ne,programLog:I,vertexShader:{log:N,prefix:g},fragmentShader:{log:X,prefix:h}})}s.deleteShader(L),s.deleteShader(C),D=new za(s,M),E=gS(s,M)}let D;this.getUniforms=function(){return D===void 0&&S(this),D};let E;this.getAttributes=function(){return E===void 0&&S(this),E};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(M,oS)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=lS++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=L,this.fragmentShader=C,this}let CS=0;class RS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new PS(e),t.set(e,i)),i}}class PS{constructor(e){this.id=CS++,this.code=e,this.usedTimes=0}}function DS(n,e,t,i,s,r,a){const o=new Dh,l=new RS,c=new Set,u=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(E){return c.add(E),E===0?"uv":`uv${E}`}function g(E,b,U,I,N){const X=I.fog,ne=N.geometry,Y=E.isMeshStandardMaterial?I.environment:null,se=(E.isMeshStandardMaterial?t:e).get(E.envMap||Y),z=se&&se.mapping===mo?se.image.height:null,me=_[E.type];E.precision!==null&&(p=s.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const Te=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,ye=Te!==void 0?Te.length:0;let Ie=0;ne.morphAttributes.position!==void 0&&(Ie=1),ne.morphAttributes.normal!==void 0&&(Ie=2),ne.morphAttributes.color!==void 0&&(Ie=3);let je,re,Me,Ue;if(me){const ct=ni[me];je=ct.vertexShader,re=ct.fragmentShader}else je=E.vertexShader,re=E.fragmentShader,l.update(E),Me=l.getVertexShaderID(E),Ue=l.getFragmentShaderID(E);const Se=n.getRenderTarget(),Be=n.state.buffers.depth.getReversed(),We=N.isInstancedMesh===!0,Xe=N.isBatchedMesh===!0,At=!!E.map,P=!!E.matcap,k=!!se,T=!!E.aoMap,ae=!!E.lightMap,J=!!E.bumpMap,Q=!!E.normalMap,te=!!E.displacementMap,le=!!E.emissiveMap,Z=!!E.metalnessMap,x=!!E.roughnessMap,v=E.anisotropy>0,F=E.clearcoat>0,W=E.dispersion>0,j=E.iridescence>0,q=E.sheen>0,be=E.transmission>0,fe=v&&!!E.anisotropyMap,ve=F&&!!E.clearcoatMap,ze=F&&!!E.clearcoatNormalMap,pe=F&&!!E.clearcoatRoughnessMap,Ae=j&&!!E.iridescenceMap,Fe=j&&!!E.iridescenceThicknessMap,Ge=q&&!!E.sheenColorMap,we=q&&!!E.sheenRoughnessMap,qe=!!E.specularMap,Ye=!!E.specularColorMap,ht=!!E.specularIntensityMap,B=be&&!!E.transmissionMap,Re=be&&!!E.thicknessMap,ie=!!E.gradientMap,ce=!!E.alphaMap,Ce=E.alphaTest>0,De=!!E.alphaHash,Je=!!E.extensions;let Pt=qi;E.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(Pt=n.toneMapping);const Wt={shaderID:me,shaderType:E.type,shaderName:E.name,vertexShader:je,fragmentShader:re,defines:E.defines,customVertexShaderID:Me,customFragmentShaderID:Ue,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Xe,batchingColor:Xe&&N._colorsTexture!==null,instancing:We,instancingColor:We&&N.instanceColor!==null,instancingMorph:We&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Se===null?n.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:fr,alphaToCoverage:!!E.alphaToCoverage,map:At,matcap:P,envMap:k,envMapMode:k&&se.mapping,envMapCubeUVHeight:z,aoMap:T,lightMap:ae,bumpMap:J,normalMap:Q,displacementMap:f&&te,emissiveMap:le,normalMapObjectSpace:Q&&E.normalMapType===ax,normalMapTangentSpace:Q&&E.normalMapType===Th,metalnessMap:Z,roughnessMap:x,anisotropy:v,anisotropyMap:fe,clearcoat:F,clearcoatMap:ve,clearcoatNormalMap:ze,clearcoatRoughnessMap:pe,dispersion:W,iridescence:j,iridescenceMap:Ae,iridescenceThicknessMap:Fe,sheen:q,sheenColorMap:Ge,sheenRoughnessMap:we,specularMap:qe,specularColorMap:Ye,specularIntensityMap:ht,transmission:be,transmissionMap:B,thicknessMap:Re,gradientMap:ie,opaque:E.transparent===!1&&E.blending===tr&&E.alphaToCoverage===!1,alphaMap:ce,alphaTest:Ce,alphaHash:De,combine:E.combine,mapUv:At&&M(E.map.channel),aoMapUv:T&&M(E.aoMap.channel),lightMapUv:ae&&M(E.lightMap.channel),bumpMapUv:J&&M(E.bumpMap.channel),normalMapUv:Q&&M(E.normalMap.channel),displacementMapUv:te&&M(E.displacementMap.channel),emissiveMapUv:le&&M(E.emissiveMap.channel),metalnessMapUv:Z&&M(E.metalnessMap.channel),roughnessMapUv:x&&M(E.roughnessMap.channel),anisotropyMapUv:fe&&M(E.anisotropyMap.channel),clearcoatMapUv:ve&&M(E.clearcoatMap.channel),clearcoatNormalMapUv:ze&&M(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&M(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&M(E.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&M(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&M(E.sheenColorMap.channel),sheenRoughnessMapUv:we&&M(E.sheenRoughnessMap.channel),specularMapUv:qe&&M(E.specularMap.channel),specularColorMapUv:Ye&&M(E.specularColorMap.channel),specularIntensityMapUv:ht&&M(E.specularIntensityMap.channel),transmissionMapUv:B&&M(E.transmissionMap.channel),thicknessMapUv:Re&&M(E.thicknessMap.channel),alphaMapUv:ce&&M(E.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(Q||v),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!ne.attributes.uv&&(At||ce),fog:!!X,useFog:E.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Be,skinning:N.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:Ie,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:Pt,decodeVideoTexture:At&&E.map.isVideoTexture===!0&&ft.getTransfer(E.map.colorSpace)===St,decodeVideoTextureEmissive:le&&E.emissiveMap.isVideoTexture===!0&&ft.getTransfer(E.emissiveMap.colorSpace)===St,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ri,flipSided:E.side===yn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Je&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Je&&E.extensions.multiDraw===!0||Xe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Wt.vertexUv1s=c.has(1),Wt.vertexUv2s=c.has(2),Wt.vertexUv3s=c.has(3),c.clear(),Wt}function h(E){const b=[];if(E.shaderID?b.push(E.shaderID):(b.push(E.customVertexShaderID),b.push(E.customFragmentShaderID)),E.defines!==void 0)for(const U in E.defines)b.push(U),b.push(E.defines[U]);return E.isRawShaderMaterial===!1&&(A(b,E),R(b,E),b.push(n.outputColorSpace)),b.push(E.customProgramCacheKey),b.join()}function A(E,b){E.push(b.precision),E.push(b.outputColorSpace),E.push(b.envMapMode),E.push(b.envMapCubeUVHeight),E.push(b.mapUv),E.push(b.alphaMapUv),E.push(b.lightMapUv),E.push(b.aoMapUv),E.push(b.bumpMapUv),E.push(b.normalMapUv),E.push(b.displacementMapUv),E.push(b.emissiveMapUv),E.push(b.metalnessMapUv),E.push(b.roughnessMapUv),E.push(b.anisotropyMapUv),E.push(b.clearcoatMapUv),E.push(b.clearcoatNormalMapUv),E.push(b.clearcoatRoughnessMapUv),E.push(b.iridescenceMapUv),E.push(b.iridescenceThicknessMapUv),E.push(b.sheenColorMapUv),E.push(b.sheenRoughnessMapUv),E.push(b.specularMapUv),E.push(b.specularColorMapUv),E.push(b.specularIntensityMapUv),E.push(b.transmissionMapUv),E.push(b.thicknessMapUv),E.push(b.combine),E.push(b.fogExp2),E.push(b.sizeAttenuation),E.push(b.morphTargetsCount),E.push(b.morphAttributeCount),E.push(b.numDirLights),E.push(b.numPointLights),E.push(b.numSpotLights),E.push(b.numSpotLightMaps),E.push(b.numHemiLights),E.push(b.numRectAreaLights),E.push(b.numDirLightShadows),E.push(b.numPointLightShadows),E.push(b.numSpotLightShadows),E.push(b.numSpotLightShadowsWithMaps),E.push(b.numLightProbes),E.push(b.shadowMapType),E.push(b.toneMapping),E.push(b.numClippingPlanes),E.push(b.numClipIntersection),E.push(b.depthPacking)}function R(E,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),E.push(o.mask)}function y(E){const b=_[E.type];let U;if(b){const I=ni[b];U=Zx.clone(I.uniforms)}else U=E.uniforms;return U}function L(E,b){let U;for(let I=0,N=u.length;I<N;I++){const X=u[I];if(X.cacheKey===b){U=X,++U.usedTimes;break}}return U===void 0&&(U=new AS(n,b,E,r),u.push(U)),U}function C(E){if(--E.usedTimes===0){const b=u.indexOf(E);u[b]=u[u.length-1],u.pop(),E.destroy()}}function S(E){l.remove(E)}function D(){l.dispose()}return{getParameters:g,getProgramCacheKey:h,getUniforms:y,acquireProgram:L,releaseProgram:C,releaseShaderCache:S,programs:u,dispose:D}}function LS(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function IS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Fd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Od(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(d,f,p,_,M,g){let h=n[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:_,renderOrder:d.renderOrder,z:M,group:g},n[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=_,h.renderOrder=d.renderOrder,h.z=M,h.group=g),e++,h}function o(d,f,p,_,M,g){const h=a(d,f,p,_,M,g);p.transmission>0?i.push(h):p.transparent===!0?s.push(h):t.push(h)}function l(d,f,p,_,M,g){const h=a(d,f,p,_,M,g);p.transmission>0?i.unshift(h):p.transparent===!0?s.unshift(h):t.unshift(h)}function c(d,f){t.length>1&&t.sort(d||IS),i.length>1&&i.sort(f||Fd),s.length>1&&s.sort(f||Fd)}function u(){for(let d=e,f=n.length;d<f;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function US(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new Od,n.set(i,[a])):s>=r.length?(a=new Od,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function NS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new ot};break;case"SpotLight":t={position:new G,direction:new G,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":t={color:new ot,position:new G,halfWidth:new G,halfHeight:new G};break}return n[e.id]=t,t}}}function FS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let OS=0;function kS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function BS(n){const e=new NS,t=FS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new G);const s=new G,r=new Ot,a=new Ot;function o(c){let u=0,d=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,_=0,M=0,g=0,h=0,A=0,R=0,y=0,L=0,C=0,S=0;c.sort(kS);for(let E=0,b=c.length;E<b;E++){const U=c[E],I=U.color,N=U.intensity,X=U.distance,ne=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)u+=I.r*N,d+=I.g*N,f+=I.b*N;else if(U.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(U.sh.coefficients[Y],N);S++}else if(U.isDirectionalLight){const Y=e.get(U);if(Y.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const se=U.shadow,z=t.get(U);z.shadowIntensity=se.intensity,z.shadowBias=se.bias,z.shadowNormalBias=se.normalBias,z.shadowRadius=se.radius,z.shadowMapSize=se.mapSize,i.directionalShadow[p]=z,i.directionalShadowMap[p]=ne,i.directionalShadowMatrix[p]=U.shadow.matrix,A++}i.directional[p]=Y,p++}else if(U.isSpotLight){const Y=e.get(U);Y.position.setFromMatrixPosition(U.matrixWorld),Y.color.copy(I).multiplyScalar(N),Y.distance=X,Y.coneCos=Math.cos(U.angle),Y.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),Y.decay=U.decay,i.spot[M]=Y;const se=U.shadow;if(U.map&&(i.spotLightMap[L]=U.map,L++,se.updateMatrices(U),U.castShadow&&C++),i.spotLightMatrix[M]=se.matrix,U.castShadow){const z=t.get(U);z.shadowIntensity=se.intensity,z.shadowBias=se.bias,z.shadowNormalBias=se.normalBias,z.shadowRadius=se.radius,z.shadowMapSize=se.mapSize,i.spotShadow[M]=z,i.spotShadowMap[M]=ne,y++}M++}else if(U.isRectAreaLight){const Y=e.get(U);Y.color.copy(I).multiplyScalar(N),Y.halfWidth.set(U.width*.5,0,0),Y.halfHeight.set(0,U.height*.5,0),i.rectArea[g]=Y,g++}else if(U.isPointLight){const Y=e.get(U);if(Y.color.copy(U.color).multiplyScalar(U.intensity),Y.distance=U.distance,Y.decay=U.decay,U.castShadow){const se=U.shadow,z=t.get(U);z.shadowIntensity=se.intensity,z.shadowBias=se.bias,z.shadowNormalBias=se.normalBias,z.shadowRadius=se.radius,z.shadowMapSize=se.mapSize,z.shadowCameraNear=se.camera.near,z.shadowCameraFar=se.camera.far,i.pointShadow[_]=z,i.pointShadowMap[_]=ne,i.pointShadowMatrix[_]=U.shadow.matrix,R++}i.point[_]=Y,_++}else if(U.isHemisphereLight){const Y=e.get(U);Y.skyColor.copy(U.color).multiplyScalar(N),Y.groundColor.copy(U.groundColor).multiplyScalar(N),i.hemi[h]=Y,h++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Pe.LTC_FLOAT_1,i.rectAreaLTC2=Pe.LTC_FLOAT_2):(i.rectAreaLTC1=Pe.LTC_HALF_1,i.rectAreaLTC2=Pe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const D=i.hash;(D.directionalLength!==p||D.pointLength!==_||D.spotLength!==M||D.rectAreaLength!==g||D.hemiLength!==h||D.numDirectionalShadows!==A||D.numPointShadows!==R||D.numSpotShadows!==y||D.numSpotMaps!==L||D.numLightProbes!==S)&&(i.directional.length=p,i.spot.length=M,i.rectArea.length=g,i.point.length=_,i.hemi.length=h,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=R,i.pointShadowMap.length=R,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=R,i.spotLightMatrix.length=y+L-C,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=S,D.directionalLength=p,D.pointLength=_,D.spotLength=M,D.rectAreaLength=g,D.hemiLength=h,D.numDirectionalShadows=A,D.numPointShadows=R,D.numSpotShadows=y,D.numSpotMaps=L,D.numLightProbes=S,i.version=OS++)}function l(c,u){let d=0,f=0,p=0,_=0,M=0;const g=u.matrixWorldInverse;for(let h=0,A=c.length;h<A;h++){const R=c[h];if(R.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),d++}else if(R.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(R.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),p++}else if(R.isRectAreaLight){const y=i.rectArea[_];y.position.setFromMatrixPosition(R.matrixWorld),y.position.applyMatrix4(g),a.identity(),r.copy(R.matrixWorld),r.premultiply(g),a.extractRotation(r),y.halfWidth.set(R.width*.5,0,0),y.halfHeight.set(0,R.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),_++}else if(R.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(R.matrixWorld),y.position.applyMatrix4(g),f++}else if(R.isHemisphereLight){const y=i.hemi[M];y.direction.setFromMatrixPosition(R.matrixWorld),y.direction.transformDirection(g),M++}}}return{setup:o,setupView:l,state:i}}function kd(n){const e=new BS(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function zS(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new kd(n),e.set(s,[o])):r>=a.length?(o=new kd(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const HS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,VS=`uniform sampler2D shadow_pass;
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
}`;function GS(n,e,t){let i=new Nc;const s=new Oe,r=new Oe,a=new Bt,o=new ly({depthPacking:rx}),l=new cy,c={},u=t.maxTextureSize,d={[Li]:yn,[yn]:Li,[ri]:ri},f=new Zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:HS,fragmentShader:VS}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new Bn;_.setAttribute("position",new ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Lt(_,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dh;let h=this.type;this.render=function(C,S,D){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;const E=n.getRenderTarget(),b=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),I=n.state;I.setBlending(ji),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const N=h!==Qn&&this.type===Qn,X=h===Qn&&this.type!==Qn;for(let ne=0,Y=C.length;ne<Y;ne++){const se=C[ne],z=se.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const me=z.getFrameExtents();if(s.multiply(me),r.copy(z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/me.x),s.x=r.x*me.x,z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/me.y),s.y=r.y*me.y,z.mapSize.y=r.y)),z.map===null||N===!0||X===!0){const ye=this.type!==Qn?{minFilter:jn,magFilter:jn}:{};z.map!==null&&z.map.dispose(),z.map=new Ss(s.x,s.y,ye),z.map.texture.name=se.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();const Te=z.getViewportCount();for(let ye=0;ye<Te;ye++){const Ie=z.getViewport(ye);a.set(r.x*Ie.x,r.y*Ie.y,r.x*Ie.z,r.y*Ie.w),I.viewport(a),z.updateMatrices(se,ye),i=z.getFrustum(),y(S,D,z.camera,se,this.type)}z.isPointLightShadow!==!0&&this.type===Qn&&A(z,D),z.needsUpdate=!1}h=this.type,g.needsUpdate=!1,n.setRenderTarget(E,b,U)};function A(C,S){const D=e.update(M);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ss(s.x,s.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(S,null,D,f,M,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(S,null,D,p,M,null)}function R(C,S,D,E){let b=null;const U=D.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(U!==void 0)b=U;else if(b=D.isPointLight===!0?l:o,n.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const I=b.uuid,N=S.uuid;let X=c[I];X===void 0&&(X={},c[I]=X);let ne=X[N];ne===void 0&&(ne=b.clone(),X[N]=ne,S.addEventListener("dispose",L)),b=ne}if(b.visible=S.visible,b.wireframe=S.wireframe,E===Qn?b.side=S.shadowSide!==null?S.shadowSide:S.side:b.side=S.shadowSide!==null?S.shadowSide:d[S.side],b.alphaMap=S.alphaMap,b.alphaTest=S.alphaTest,b.map=S.map,b.clipShadows=S.clipShadows,b.clippingPlanes=S.clippingPlanes,b.clipIntersection=S.clipIntersection,b.displacementMap=S.displacementMap,b.displacementScale=S.displacementScale,b.displacementBias=S.displacementBias,b.wireframeLinewidth=S.wireframeLinewidth,b.linewidth=S.linewidth,D.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const I=n.properties.get(b);I.light=D}return b}function y(C,S,D,E,b){if(C.visible===!1)return;if(C.layers.test(S.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&b===Qn)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,C.matrixWorld);const N=e.update(C),X=C.material;if(Array.isArray(X)){const ne=N.groups;for(let Y=0,se=ne.length;Y<se;Y++){const z=ne[Y],me=X[z.materialIndex];if(me&&me.visible){const Te=R(C,me,E,b);C.onBeforeShadow(n,C,S,D,N,Te,z),n.renderBufferDirect(D,null,N,Te,C,z),C.onAfterShadow(n,C,S,D,N,Te,z)}}}else if(X.visible){const ne=R(C,X,E,b);C.onBeforeShadow(n,C,S,D,N,ne,null),n.renderBufferDirect(D,null,N,ne,C,null),C.onAfterShadow(n,C,S,D,N,ne,null)}}const I=C.children;for(let N=0,X=I.length;N<X;N++)y(I[N],S,D,E,b)}function L(C){C.target.removeEventListener("dispose",L);for(const D in c){const E=c[D],b=C.target.uuid;b in E&&(E[b].dispose(),delete E[b])}}}const WS={[Tl]:wl,[Al]:Pl,[Cl]:Dl,[or]:Rl,[wl]:Tl,[Pl]:Al,[Dl]:Cl,[Rl]:or};function XS(n,e){function t(){let B=!1;const Re=new Bt;let ie=null;const ce=new Bt(0,0,0,0);return{setMask:function(Ce){ie!==Ce&&!B&&(n.colorMask(Ce,Ce,Ce,Ce),ie=Ce)},setLocked:function(Ce){B=Ce},setClear:function(Ce,De,Je,Pt,Wt){Wt===!0&&(Ce*=Pt,De*=Pt,Je*=Pt),Re.set(Ce,De,Je,Pt),ce.equals(Re)===!1&&(n.clearColor(Ce,De,Je,Pt),ce.copy(Re))},reset:function(){B=!1,ie=null,ce.set(-1,0,0,0)}}}function i(){let B=!1,Re=!1,ie=null,ce=null,Ce=null;return{setReversed:function(De){if(Re!==De){const Je=e.get("EXT_clip_control");Re?Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.ZERO_TO_ONE_EXT):Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.NEGATIVE_ONE_TO_ONE_EXT);const Pt=Ce;Ce=null,this.setClear(Pt)}Re=De},getReversed:function(){return Re},setTest:function(De){De?Se(n.DEPTH_TEST):Be(n.DEPTH_TEST)},setMask:function(De){ie!==De&&!B&&(n.depthMask(De),ie=De)},setFunc:function(De){if(Re&&(De=WS[De]),ce!==De){switch(De){case Tl:n.depthFunc(n.NEVER);break;case wl:n.depthFunc(n.ALWAYS);break;case Al:n.depthFunc(n.LESS);break;case or:n.depthFunc(n.LEQUAL);break;case Cl:n.depthFunc(n.EQUAL);break;case Rl:n.depthFunc(n.GEQUAL);break;case Pl:n.depthFunc(n.GREATER);break;case Dl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ce=De}},setLocked:function(De){B=De},setClear:function(De){Ce!==De&&(Re&&(De=1-De),n.clearDepth(De),Ce=De)},reset:function(){B=!1,ie=null,ce=null,Ce=null,Re=!1}}}function s(){let B=!1,Re=null,ie=null,ce=null,Ce=null,De=null,Je=null,Pt=null,Wt=null;return{setTest:function(ct){B||(ct?Se(n.STENCIL_TEST):Be(n.STENCIL_TEST))},setMask:function(ct){Re!==ct&&!B&&(n.stencilMask(ct),Re=ct)},setFunc:function(ct,Mn,Cn){(ie!==ct||ce!==Mn||Ce!==Cn)&&(n.stencilFunc(ct,Mn,Cn),ie=ct,ce=Mn,Ce=Cn)},setOp:function(ct,Mn,Cn){(De!==ct||Je!==Mn||Pt!==Cn)&&(n.stencilOp(ct,Mn,Cn),De=ct,Je=Mn,Pt=Cn)},setLocked:function(ct){B=ct},setClear:function(ct){Wt!==ct&&(n.clearStencil(ct),Wt=ct)},reset:function(){B=!1,Re=null,ie=null,ce=null,Ce=null,De=null,Je=null,Pt=null,Wt=null}}}const r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,p=[],_=null,M=!1,g=null,h=null,A=null,R=null,y=null,L=null,C=null,S=new ot(0,0,0),D=0,E=!1,b=null,U=null,I=null,N=null,X=null;const ne=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,se=0;const z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(z)[1]),Y=se>=1):z.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),Y=se>=2);let me=null,Te={};const ye=n.getParameter(n.SCISSOR_BOX),Ie=n.getParameter(n.VIEWPORT),je=new Bt().fromArray(ye),re=new Bt().fromArray(Ie);function Me(B,Re,ie,ce){const Ce=new Uint8Array(4),De=n.createTexture();n.bindTexture(B,De),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Je=0;Je<ie;Je++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(Re,0,n.RGBA,1,1,ce,0,n.RGBA,n.UNSIGNED_BYTE,Ce):n.texImage2D(Re+Je,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ce);return De}const Ue={};Ue[n.TEXTURE_2D]=Me(n.TEXTURE_2D,n.TEXTURE_2D,1),Ue[n.TEXTURE_CUBE_MAP]=Me(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ue[n.TEXTURE_2D_ARRAY]=Me(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ue[n.TEXTURE_3D]=Me(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Se(n.DEPTH_TEST),a.setFunc(or),J(!1),Q(Nu),Se(n.CULL_FACE),T(ji);function Se(B){u[B]!==!0&&(n.enable(B),u[B]=!0)}function Be(B){u[B]!==!1&&(n.disable(B),u[B]=!1)}function We(B,Re){return d[B]!==Re?(n.bindFramebuffer(B,Re),d[B]=Re,B===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Re),B===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Re),!0):!1}function Xe(B,Re){let ie=p,ce=!1;if(B){ie=f.get(Re),ie===void 0&&(ie=[],f.set(Re,ie));const Ce=B.textures;if(ie.length!==Ce.length||ie[0]!==n.COLOR_ATTACHMENT0){for(let De=0,Je=Ce.length;De<Je;De++)ie[De]=n.COLOR_ATTACHMENT0+De;ie.length=Ce.length,ce=!0}}else ie[0]!==n.BACK&&(ie[0]=n.BACK,ce=!0);ce&&n.drawBuffers(ie)}function At(B){return _!==B?(n.useProgram(B),_=B,!0):!1}const P={[ps]:n.FUNC_ADD,[Lv]:n.FUNC_SUBTRACT,[Iv]:n.FUNC_REVERSE_SUBTRACT};P[Uv]=n.MIN,P[Nv]=n.MAX;const k={[Fv]:n.ZERO,[Ov]:n.ONE,[kv]:n.SRC_COLOR,[Sl]:n.SRC_ALPHA,[Wv]:n.SRC_ALPHA_SATURATE,[Vv]:n.DST_COLOR,[zv]:n.DST_ALPHA,[Bv]:n.ONE_MINUS_SRC_COLOR,[El]:n.ONE_MINUS_SRC_ALPHA,[Gv]:n.ONE_MINUS_DST_COLOR,[Hv]:n.ONE_MINUS_DST_ALPHA,[Xv]:n.CONSTANT_COLOR,[$v]:n.ONE_MINUS_CONSTANT_COLOR,[jv]:n.CONSTANT_ALPHA,[qv]:n.ONE_MINUS_CONSTANT_ALPHA};function T(B,Re,ie,ce,Ce,De,Je,Pt,Wt,ct){if(B===ji){M===!0&&(Be(n.BLEND),M=!1);return}if(M===!1&&(Se(n.BLEND),M=!0),B!==Dv){if(B!==g||ct!==E){if((h!==ps||y!==ps)&&(n.blendEquation(n.FUNC_ADD),h=ps,y=ps),ct)switch(B){case tr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fu:n.blendFunc(n.ONE,n.ONE);break;case Ou:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ku:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case tr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ou:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ku:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}A=null,R=null,L=null,C=null,S.set(0,0,0),D=0,g=B,E=ct}return}Ce=Ce||Re,De=De||ie,Je=Je||ce,(Re!==h||Ce!==y)&&(n.blendEquationSeparate(P[Re],P[Ce]),h=Re,y=Ce),(ie!==A||ce!==R||De!==L||Je!==C)&&(n.blendFuncSeparate(k[ie],k[ce],k[De],k[Je]),A=ie,R=ce,L=De,C=Je),(Pt.equals(S)===!1||Wt!==D)&&(n.blendColor(Pt.r,Pt.g,Pt.b,Wt),S.copy(Pt),D=Wt),g=B,E=!1}function ae(B,Re){B.side===ri?Be(n.CULL_FACE):Se(n.CULL_FACE);let ie=B.side===yn;Re&&(ie=!ie),J(ie),B.blending===tr&&B.transparent===!1?T(ji):T(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);const ce=B.stencilWrite;o.setTest(ce),ce&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),le(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?Se(n.SAMPLE_ALPHA_TO_COVERAGE):Be(n.SAMPLE_ALPHA_TO_COVERAGE)}function J(B){b!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),b=B)}function Q(B){B!==Cv?(Se(n.CULL_FACE),B!==U&&(B===Nu?n.cullFace(n.BACK):B===Rv?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Be(n.CULL_FACE),U=B}function te(B){B!==I&&(Y&&n.lineWidth(B),I=B)}function le(B,Re,ie){B?(Se(n.POLYGON_OFFSET_FILL),(N!==Re||X!==ie)&&(n.polygonOffset(Re,ie),N=Re,X=ie)):Be(n.POLYGON_OFFSET_FILL)}function Z(B){B?Se(n.SCISSOR_TEST):Be(n.SCISSOR_TEST)}function x(B){B===void 0&&(B=n.TEXTURE0+ne-1),me!==B&&(n.activeTexture(B),me=B)}function v(B,Re,ie){ie===void 0&&(me===null?ie=n.TEXTURE0+ne-1:ie=me);let ce=Te[ie];ce===void 0&&(ce={type:void 0,texture:void 0},Te[ie]=ce),(ce.type!==B||ce.texture!==Re)&&(me!==ie&&(n.activeTexture(ie),me=ie),n.bindTexture(B,Re||Ue[B]),ce.type=B,ce.texture=Re)}function F(){const B=Te[me];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function W(){try{n.compressedTexImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function j(){try{n.compressedTexImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function q(){try{n.texSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function be(){try{n.texSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function fe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ve(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ze(){try{n.texStorage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function pe(){try{n.texStorage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ae(){try{n.texImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Fe(){try{n.texImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ge(B){je.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),je.copy(B))}function we(B){re.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),re.copy(B))}function qe(B,Re){let ie=c.get(Re);ie===void 0&&(ie=new WeakMap,c.set(Re,ie));let ce=ie.get(B);ce===void 0&&(ce=n.getUniformBlockIndex(Re,B.name),ie.set(B,ce))}function Ye(B,Re){const ce=c.get(Re).get(B);l.get(Re)!==ce&&(n.uniformBlockBinding(Re,ce,B.__bindingPointIndex),l.set(Re,ce))}function ht(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},me=null,Te={},d={},f=new WeakMap,p=[],_=null,M=!1,g=null,h=null,A=null,R=null,y=null,L=null,C=null,S=new ot(0,0,0),D=0,E=!1,b=null,U=null,I=null,N=null,X=null,je.set(0,0,n.canvas.width,n.canvas.height),re.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Se,disable:Be,bindFramebuffer:We,drawBuffers:Xe,useProgram:At,setBlending:T,setMaterial:ae,setFlipSided:J,setCullFace:Q,setLineWidth:te,setPolygonOffset:le,setScissorTest:Z,activeTexture:x,bindTexture:v,unbindTexture:F,compressedTexImage2D:W,compressedTexImage3D:j,texImage2D:Ae,texImage3D:Fe,updateUBOMapping:qe,uniformBlockBinding:Ye,texStorage2D:ze,texStorage3D:pe,texSubImage2D:q,texSubImage3D:be,compressedTexSubImage2D:fe,compressedTexSubImage3D:ve,scissor:Ge,viewport:we,reset:ht}}function $S(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Oe,u=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(x,v){return p?new OffscreenCanvas(x,v):Qr("canvas")}function M(x,v,F){let W=1;const j=Z(x);if((j.width>F||j.height>F)&&(W=F/Math.max(j.width,j.height)),W<1)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap||typeof VideoFrame<"u"&&x instanceof VideoFrame){const q=Math.floor(W*j.width),be=Math.floor(W*j.height);d===void 0&&(d=_(q,be));const fe=v?_(q,be):d;return fe.width=q,fe.height=be,fe.getContext("2d").drawImage(x,0,0,q,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+q+"x"+be+")."),fe}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),x;return x}function g(x){return x.generateMipmaps}function h(x){n.generateMipmap(x)}function A(x){return x.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:x.isWebGL3DRenderTarget?n.TEXTURE_3D:x.isWebGLArrayRenderTarget||x.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function R(x,v,F,W,j=!1){if(x!==null){if(n[x]!==void 0)return n[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let q=v;if(v===n.RED&&(F===n.FLOAT&&(q=n.R32F),F===n.HALF_FLOAT&&(q=n.R16F),F===n.UNSIGNED_BYTE&&(q=n.R8)),v===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(q=n.R8UI),F===n.UNSIGNED_SHORT&&(q=n.R16UI),F===n.UNSIGNED_INT&&(q=n.R32UI),F===n.BYTE&&(q=n.R8I),F===n.SHORT&&(q=n.R16I),F===n.INT&&(q=n.R32I)),v===n.RG&&(F===n.FLOAT&&(q=n.RG32F),F===n.HALF_FLOAT&&(q=n.RG16F),F===n.UNSIGNED_BYTE&&(q=n.RG8)),v===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(q=n.RG8UI),F===n.UNSIGNED_SHORT&&(q=n.RG16UI),F===n.UNSIGNED_INT&&(q=n.RG32UI),F===n.BYTE&&(q=n.RG8I),F===n.SHORT&&(q=n.RG16I),F===n.INT&&(q=n.RG32I)),v===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(q=n.RGB8UI),F===n.UNSIGNED_SHORT&&(q=n.RGB16UI),F===n.UNSIGNED_INT&&(q=n.RGB32UI),F===n.BYTE&&(q=n.RGB8I),F===n.SHORT&&(q=n.RGB16I),F===n.INT&&(q=n.RGB32I)),v===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),F===n.UNSIGNED_INT&&(q=n.RGBA32UI),F===n.BYTE&&(q=n.RGBA8I),F===n.SHORT&&(q=n.RGBA16I),F===n.INT&&(q=n.RGBA32I)),v===n.RGB&&F===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),v===n.RGBA){const be=j?Za:ft.getTransfer(W);F===n.FLOAT&&(q=n.RGBA32F),F===n.HALF_FLOAT&&(q=n.RGBA16F),F===n.UNSIGNED_BYTE&&(q=be===St?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function y(x,v){let F;return x?v===null||v===bs||v===ur?F=n.DEPTH24_STENCIL8:v===wi?F=n.DEPTH32F_STENCIL8:v===Zr&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===bs||v===ur?F=n.DEPTH_COMPONENT24:v===wi?F=n.DEPTH_COMPONENT32F:v===Zr&&(F=n.DEPTH_COMPONENT16),F}function L(x,v){return g(x)===!0||x.isFramebufferTexture&&x.minFilter!==jn&&x.minFilter!==oi?Math.log2(Math.max(v.width,v.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?v.mipmaps.length:1}function C(x){const v=x.target;v.removeEventListener("dispose",C),D(v),v.isVideoTexture&&u.delete(v)}function S(x){const v=x.target;v.removeEventListener("dispose",S),b(v)}function D(x){const v=i.get(x);if(v.__webglInit===void 0)return;const F=x.source,W=f.get(F);if(W){const j=W[v.__cacheKey];j.usedTimes--,j.usedTimes===0&&E(x),Object.keys(W).length===0&&f.delete(F)}i.remove(x)}function E(x){const v=i.get(x);n.deleteTexture(v.__webglTexture);const F=x.source,W=f.get(F);delete W[v.__cacheKey],a.memory.textures--}function b(x){const v=i.get(x);if(x.depthTexture&&(x.depthTexture.dispose(),i.remove(x.depthTexture)),x.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(v.__webglFramebuffer[W]))for(let j=0;j<v.__webglFramebuffer[W].length;j++)n.deleteFramebuffer(v.__webglFramebuffer[W][j]);else n.deleteFramebuffer(v.__webglFramebuffer[W]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[W])}else{if(Array.isArray(v.__webglFramebuffer))for(let W=0;W<v.__webglFramebuffer.length;W++)n.deleteFramebuffer(v.__webglFramebuffer[W]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let W=0;W<v.__webglColorRenderbuffer.length;W++)v.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[W]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const F=x.textures;for(let W=0,j=F.length;W<j;W++){const q=i.get(F[W]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),a.memory.textures--),i.remove(F[W])}i.remove(x)}let U=0;function I(){U=0}function N(){const x=U;return x>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+s.maxTextures),U+=1,x}function X(x){const v=[];return v.push(x.wrapS),v.push(x.wrapT),v.push(x.wrapR||0),v.push(x.magFilter),v.push(x.minFilter),v.push(x.anisotropy),v.push(x.internalFormat),v.push(x.format),v.push(x.type),v.push(x.generateMipmaps),v.push(x.premultiplyAlpha),v.push(x.flipY),v.push(x.unpackAlignment),v.push(x.colorSpace),v.join()}function ne(x,v){const F=i.get(x);if(x.isVideoTexture&&te(x),x.isRenderTargetTexture===!1&&x.version>0&&F.__version!==x.version){const W=x.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(F,x,v);return}}t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+v)}function Y(x,v){const F=i.get(x);if(x.version>0&&F.__version!==x.version){re(F,x,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+v)}function se(x,v){const F=i.get(x);if(x.version>0&&F.__version!==x.version){re(F,x,v);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+v)}function z(x,v){const F=i.get(x);if(x.version>0&&F.__version!==x.version){Me(F,x,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+v)}const me={[Kr]:n.REPEAT,[gs]:n.CLAMP_TO_EDGE,[Ul]:n.MIRRORED_REPEAT},Te={[jn]:n.NEAREST,[ix]:n.NEAREST_MIPMAP_NEAREST,[ua]:n.NEAREST_MIPMAP_LINEAR,[oi]:n.LINEAR,[Io]:n.LINEAR_MIPMAP_NEAREST,[_s]:n.LINEAR_MIPMAP_LINEAR},ye={[ox]:n.NEVER,[hx]:n.ALWAYS,[lx]:n.LESS,[wh]:n.LEQUAL,[cx]:n.EQUAL,[fx]:n.GEQUAL,[ux]:n.GREATER,[dx]:n.NOTEQUAL};function Ie(x,v){if(v.type===wi&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===oi||v.magFilter===Io||v.magFilter===ua||v.magFilter===_s||v.minFilter===oi||v.minFilter===Io||v.minFilter===ua||v.minFilter===_s)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(x,n.TEXTURE_WRAP_S,me[v.wrapS]),n.texParameteri(x,n.TEXTURE_WRAP_T,me[v.wrapT]),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,me[v.wrapR]),n.texParameteri(x,n.TEXTURE_MAG_FILTER,Te[v.magFilter]),n.texParameteri(x,n.TEXTURE_MIN_FILTER,Te[v.minFilter]),v.compareFunction&&(n.texParameteri(x,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(x,n.TEXTURE_COMPARE_FUNC,ye[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===jn||v.minFilter!==ua&&v.minFilter!==_s||v.type===wi&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(x,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function je(x,v){let F=!1;x.__webglInit===void 0&&(x.__webglInit=!0,v.addEventListener("dispose",C));const W=v.source;let j=f.get(W);j===void 0&&(j={},f.set(W,j));const q=X(v);if(q!==x.__cacheKey){j[q]===void 0&&(j[q]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,F=!0),j[q].usedTimes++;const be=j[x.__cacheKey];be!==void 0&&(j[x.__cacheKey].usedTimes--,be.usedTimes===0&&E(v)),x.__cacheKey=q,x.__webglTexture=j[q].texture}return F}function re(x,v,F){let W=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(W=n.TEXTURE_3D);const j=je(x,v),q=v.source;t.bindTexture(W,x.__webglTexture,n.TEXTURE0+F);const be=i.get(q);if(q.version!==be.__version||j===!0){t.activeTexture(n.TEXTURE0+F);const fe=ft.getPrimaries(ft.workingColorSpace),ve=v.colorSpace===Wi?null:ft.getPrimaries(v.colorSpace),ze=v.colorSpace===Wi||fe===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);let pe=M(v.image,!1,s.maxTextureSize);pe=le(v,pe);const Ae=r.convert(v.format,v.colorSpace),Fe=r.convert(v.type);let Ge=R(v.internalFormat,Ae,Fe,v.colorSpace,v.isVideoTexture);Ie(W,v);let we;const qe=v.mipmaps,Ye=v.isVideoTexture!==!0,ht=be.__version===void 0||j===!0,B=q.dataReady,Re=L(v,pe);if(v.isDepthTexture)Ge=y(v.format===dr,v.type),ht&&(Ye?t.texStorage2D(n.TEXTURE_2D,1,Ge,pe.width,pe.height):t.texImage2D(n.TEXTURE_2D,0,Ge,pe.width,pe.height,0,Ae,Fe,null));else if(v.isDataTexture)if(qe.length>0){Ye&&ht&&t.texStorage2D(n.TEXTURE_2D,Re,Ge,qe[0].width,qe[0].height);for(let ie=0,ce=qe.length;ie<ce;ie++)we=qe[ie],Ye?B&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,we.width,we.height,Ae,Fe,we.data):t.texImage2D(n.TEXTURE_2D,ie,Ge,we.width,we.height,0,Ae,Fe,we.data);v.generateMipmaps=!1}else Ye?(ht&&t.texStorage2D(n.TEXTURE_2D,Re,Ge,pe.width,pe.height),B&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,pe.width,pe.height,Ae,Fe,pe.data)):t.texImage2D(n.TEXTURE_2D,0,Ge,pe.width,pe.height,0,Ae,Fe,pe.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ye&&ht&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,Ge,qe[0].width,qe[0].height,pe.depth);for(let ie=0,ce=qe.length;ie<ce;ie++)if(we=qe[ie],v.format!==Xn)if(Ae!==null)if(Ye){if(B)if(v.layerUpdates.size>0){const Ce=pd(we.width,we.height,v.format,v.type);for(const De of v.layerUpdates){const Je=we.data.subarray(De*Ce/we.data.BYTES_PER_ELEMENT,(De+1)*Ce/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,De,we.width,we.height,1,Ae,Je)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,we.width,we.height,pe.depth,Ae,we.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ie,Ge,we.width,we.height,pe.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ye?B&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,we.width,we.height,pe.depth,Ae,Fe,we.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ie,Ge,we.width,we.height,pe.depth,0,Ae,Fe,we.data)}else{Ye&&ht&&t.texStorage2D(n.TEXTURE_2D,Re,Ge,qe[0].width,qe[0].height);for(let ie=0,ce=qe.length;ie<ce;ie++)we=qe[ie],v.format!==Xn?Ae!==null?Ye?B&&t.compressedTexSubImage2D(n.TEXTURE_2D,ie,0,0,we.width,we.height,Ae,we.data):t.compressedTexImage2D(n.TEXTURE_2D,ie,Ge,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?B&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,we.width,we.height,Ae,Fe,we.data):t.texImage2D(n.TEXTURE_2D,ie,Ge,we.width,we.height,0,Ae,Fe,we.data)}else if(v.isDataArrayTexture)if(Ye){if(ht&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,Ge,pe.width,pe.height,pe.depth),B)if(v.layerUpdates.size>0){const ie=pd(pe.width,pe.height,v.format,v.type);for(const ce of v.layerUpdates){const Ce=pe.data.subarray(ce*ie/pe.data.BYTES_PER_ELEMENT,(ce+1)*ie/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ce,pe.width,pe.height,1,Ae,Fe,Ce)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Ae,Fe,pe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ge,pe.width,pe.height,pe.depth,0,Ae,Fe,pe.data);else if(v.isData3DTexture)Ye?(ht&&t.texStorage3D(n.TEXTURE_3D,Re,Ge,pe.width,pe.height,pe.depth),B&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Ae,Fe,pe.data)):t.texImage3D(n.TEXTURE_3D,0,Ge,pe.width,pe.height,pe.depth,0,Ae,Fe,pe.data);else if(v.isFramebufferTexture){if(ht)if(Ye)t.texStorage2D(n.TEXTURE_2D,Re,Ge,pe.width,pe.height);else{let ie=pe.width,ce=pe.height;for(let Ce=0;Ce<Re;Ce++)t.texImage2D(n.TEXTURE_2D,Ce,Ge,ie,ce,0,Ae,Fe,null),ie>>=1,ce>>=1}}else if(qe.length>0){if(Ye&&ht){const ie=Z(qe[0]);t.texStorage2D(n.TEXTURE_2D,Re,Ge,ie.width,ie.height)}for(let ie=0,ce=qe.length;ie<ce;ie++)we=qe[ie],Ye?B&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,Ae,Fe,we):t.texImage2D(n.TEXTURE_2D,ie,Ge,Ae,Fe,we);v.generateMipmaps=!1}else if(Ye){if(ht){const ie=Z(pe);t.texStorage2D(n.TEXTURE_2D,Re,Ge,ie.width,ie.height)}B&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ae,Fe,pe)}else t.texImage2D(n.TEXTURE_2D,0,Ge,Ae,Fe,pe);g(v)&&h(W),be.__version=q.version,v.onUpdate&&v.onUpdate(v)}x.__version=v.version}function Me(x,v,F){if(v.image.length!==6)return;const W=je(x,v),j=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,x.__webglTexture,n.TEXTURE0+F);const q=i.get(j);if(j.version!==q.__version||W===!0){t.activeTexture(n.TEXTURE0+F);const be=ft.getPrimaries(ft.workingColorSpace),fe=v.colorSpace===Wi?null:ft.getPrimaries(v.colorSpace),ve=v.colorSpace===Wi||be===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const ze=v.isCompressedTexture||v.image[0].isCompressedTexture,pe=v.image[0]&&v.image[0].isDataTexture,Ae=[];for(let ce=0;ce<6;ce++)!ze&&!pe?Ae[ce]=M(v.image[ce],!0,s.maxCubemapSize):Ae[ce]=pe?v.image[ce].image:v.image[ce],Ae[ce]=le(v,Ae[ce]);const Fe=Ae[0],Ge=r.convert(v.format,v.colorSpace),we=r.convert(v.type),qe=R(v.internalFormat,Ge,we,v.colorSpace),Ye=v.isVideoTexture!==!0,ht=q.__version===void 0||W===!0,B=j.dataReady;let Re=L(v,Fe);Ie(n.TEXTURE_CUBE_MAP,v);let ie;if(ze){Ye&&ht&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,qe,Fe.width,Fe.height);for(let ce=0;ce<6;ce++){ie=Ae[ce].mipmaps;for(let Ce=0;Ce<ie.length;Ce++){const De=ie[Ce];v.format!==Xn?Ge!==null?Ye?B&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ce,0,0,De.width,De.height,Ge,De.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ce,qe,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ce,0,0,De.width,De.height,Ge,we,De.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ce,qe,De.width,De.height,0,Ge,we,De.data)}}}else{if(ie=v.mipmaps,Ye&&ht){ie.length>0&&Re++;const ce=Z(Ae[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,qe,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(pe){Ye?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Ae[ce].width,Ae[ce].height,Ge,we,Ae[ce].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,qe,Ae[ce].width,Ae[ce].height,0,Ge,we,Ae[ce].data);for(let Ce=0;Ce<ie.length;Ce++){const Je=ie[Ce].image[ce].image;Ye?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ce+1,0,0,Je.width,Je.height,Ge,we,Je.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ce+1,qe,Je.width,Je.height,0,Ge,we,Je.data)}}else{Ye?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Ge,we,Ae[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,qe,Ge,we,Ae[ce]);for(let Ce=0;Ce<ie.length;Ce++){const De=ie[Ce];Ye?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ce+1,0,0,Ge,we,De.image[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ce+1,qe,Ge,we,De.image[ce])}}}g(v)&&h(n.TEXTURE_CUBE_MAP),q.__version=j.version,v.onUpdate&&v.onUpdate(v)}x.__version=v.version}function Ue(x,v,F,W,j,q){const be=r.convert(F.format,F.colorSpace),fe=r.convert(F.type),ve=R(F.internalFormat,be,fe,F.colorSpace),ze=i.get(v),pe=i.get(F);if(pe.__renderTarget=v,!ze.__hasExternalTextures){const Ae=Math.max(1,v.width>>q),Fe=Math.max(1,v.height>>q);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?t.texImage3D(j,q,ve,Ae,Fe,v.depth,0,be,fe,null):t.texImage2D(j,q,ve,Ae,Fe,0,be,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,x),Q(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,j,pe.__webglTexture,0,J(v)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,j,pe.__webglTexture,q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Se(x,v,F){if(n.bindRenderbuffer(n.RENDERBUFFER,x),v.depthBuffer){const W=v.depthTexture,j=W&&W.isDepthTexture?W.type:null,q=y(v.stencilBuffer,j),be=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=J(v);Q(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,q,v.width,v.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,q,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,q,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,be,n.RENDERBUFFER,x)}else{const W=v.textures;for(let j=0;j<W.length;j++){const q=W[j],be=r.convert(q.format,q.colorSpace),fe=r.convert(q.type),ve=R(q.internalFormat,be,fe,q.colorSpace),ze=J(v);F&&Q(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ze,ve,v.width,v.height):Q(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ze,ve,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,ve,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Be(x,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,x),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const W=i.get(v.depthTexture);W.__renderTarget=v,(!W.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),ne(v.depthTexture,0);const j=W.__webglTexture,q=J(v);if(v.depthTexture.format===nr)Q(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0);else if(v.depthTexture.format===dr)Q(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function We(x){const v=i.get(x),F=x.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==x.depthTexture){const W=x.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),W){const j=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,W.removeEventListener("dispose",j)};W.addEventListener("dispose",j),v.__depthDisposeCallback=j}v.__boundDepthTexture=W}if(x.depthTexture&&!v.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Be(v.__webglFramebuffer,x)}else if(F){v.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[W]),v.__webglDepthbuffer[W]===void 0)v.__webglDepthbuffer[W]=n.createRenderbuffer(),Se(v.__webglDepthbuffer[W],x,!1);else{const j=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=v.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,q)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),Se(v.__webglDepthbuffer,x,!1);else{const W=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,W,n.RENDERBUFFER,j)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Xe(x,v,F){const W=i.get(x);v!==void 0&&Ue(W.__webglFramebuffer,x,x.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&We(x)}function At(x){const v=x.texture,F=i.get(x),W=i.get(v);x.addEventListener("dispose",S);const j=x.textures,q=x.isWebGLCubeRenderTarget===!0,be=j.length>1;if(be||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=v.version,a.memory.textures++),q){F.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[fe]=[];for(let ve=0;ve<v.mipmaps.length;ve++)F.__webglFramebuffer[fe][ve]=n.createFramebuffer()}else F.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let fe=0;fe<v.mipmaps.length;fe++)F.__webglFramebuffer[fe]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(be)for(let fe=0,ve=j.length;fe<ve;fe++){const ze=i.get(j[fe]);ze.__webglTexture===void 0&&(ze.__webglTexture=n.createTexture(),a.memory.textures++)}if(x.samples>0&&Q(x)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let fe=0;fe<j.length;fe++){const ve=j[fe];F.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[fe]);const ze=r.convert(ve.format,ve.colorSpace),pe=r.convert(ve.type),Ae=R(ve.internalFormat,ze,pe,ve.colorSpace,x.isXRRenderTarget===!0),Fe=J(x);n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe,Ae,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,F.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),x.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),Se(F.__webglDepthRenderbuffer,x,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),Ie(n.TEXTURE_CUBE_MAP,v);for(let fe=0;fe<6;fe++)if(v.mipmaps&&v.mipmaps.length>0)for(let ve=0;ve<v.mipmaps.length;ve++)Ue(F.__webglFramebuffer[fe][ve],x,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ve);else Ue(F.__webglFramebuffer[fe],x,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);g(v)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let fe=0,ve=j.length;fe<ve;fe++){const ze=j[fe],pe=i.get(ze);t.bindTexture(n.TEXTURE_2D,pe.__webglTexture),Ie(n.TEXTURE_2D,ze),Ue(F.__webglFramebuffer,x,ze,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,0),g(ze)&&h(n.TEXTURE_2D)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(fe=x.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,W.__webglTexture),Ie(fe,v),v.mipmaps&&v.mipmaps.length>0)for(let ve=0;ve<v.mipmaps.length;ve++)Ue(F.__webglFramebuffer[ve],x,v,n.COLOR_ATTACHMENT0,fe,ve);else Ue(F.__webglFramebuffer,x,v,n.COLOR_ATTACHMENT0,fe,0);g(v)&&h(fe),t.unbindTexture()}x.depthBuffer&&We(x)}function P(x){const v=x.textures;for(let F=0,W=v.length;F<W;F++){const j=v[F];if(g(j)){const q=A(x),be=i.get(j).__webglTexture;t.bindTexture(q,be),h(q),t.unbindTexture()}}}const k=[],T=[];function ae(x){if(x.samples>0){if(Q(x)===!1){const v=x.textures,F=x.width,W=x.height;let j=n.COLOR_BUFFER_BIT;const q=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=i.get(x),fe=v.length>1;if(fe)for(let ve=0;ve<v.length;ve++)t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let ve=0;ve<v.length;ve++){if(x.resolveDepthBuffer&&(x.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),x.stencilBuffer&&x.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),fe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,be.__webglColorRenderbuffer[ve]);const ze=i.get(v[ve]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ze,0)}n.blitFramebuffer(0,0,F,W,0,0,F,W,j,n.NEAREST),l===!0&&(k.length=0,T.length=0,k.push(n.COLOR_ATTACHMENT0+ve),x.depthBuffer&&x.resolveDepthBuffer===!1&&(k.push(q),T.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,T)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,k))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let ve=0;ve<v.length;ve++){t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,be.__webglColorRenderbuffer[ve]);const ze=i.get(v[ve]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,ze,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(x.depthBuffer&&x.resolveDepthBuffer===!1&&l){const v=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function J(x){return Math.min(s.maxSamples,x.samples)}function Q(x){const v=i.get(x);return x.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function te(x){const v=a.render.frame;u.get(x)!==v&&(u.set(x,v),x.update())}function le(x,v){const F=x.colorSpace,W=x.format,j=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||F!==fr&&F!==Wi&&(ft.getTransfer(F)===St?(W!==Xn||j!==Ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),v}function Z(x){return typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement?(c.width=x.naturalWidth||x.width,c.height=x.naturalHeight||x.height):typeof VideoFrame<"u"&&x instanceof VideoFrame?(c.width=x.displayWidth,c.height=x.displayHeight):(c.width=x.width,c.height=x.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=I,this.setTexture2D=ne,this.setTexture2DArray=Y,this.setTexture3D=se,this.setTextureCube=z,this.rebindTextures=Xe,this.setupRenderTarget=At,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=Q}function jS(n,e){function t(i,s=Wi){let r;const a=ft.getTransfer(s);if(i===Ii)return n.UNSIGNED_BYTE;if(i===Ac)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Cc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===_h)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===mh)return n.BYTE;if(i===gh)return n.SHORT;if(i===Zr)return n.UNSIGNED_SHORT;if(i===wc)return n.INT;if(i===bs)return n.UNSIGNED_INT;if(i===wi)return n.FLOAT;if(i===sa)return n.HALF_FLOAT;if(i===vh)return n.ALPHA;if(i===xh)return n.RGB;if(i===Xn)return n.RGBA;if(i===yh)return n.LUMINANCE;if(i===Mh)return n.LUMINANCE_ALPHA;if(i===nr)return n.DEPTH_COMPONENT;if(i===dr)return n.DEPTH_STENCIL;if(i===bh)return n.RED;if(i===Rc)return n.RED_INTEGER;if(i===Sh)return n.RG;if(i===Pc)return n.RG_INTEGER;if(i===Dc)return n.RGBA_INTEGER;if(i===Na||i===Fa||i===Oa||i===ka)if(a===St)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Na)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Na)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Fa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Oa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ka)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Nl||i===Fl||i===Ol||i===kl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Nl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Fl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ol)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===kl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Bl||i===zl||i===Hl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Bl||i===zl)return a===St?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Hl)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Vl||i===Gl||i===Wl||i===Xl||i===$l||i===jl||i===ql||i===Yl||i===Kl||i===Zl||i===Jl||i===Ql||i===ec||i===tc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Vl)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Gl)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Wl)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Xl)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===$l)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===jl)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ql)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Yl)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Kl)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Zl)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Jl)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ql)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ec)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===tc)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ba||i===nc||i===ic)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ba)return a===St?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===nc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ic)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Eh||i===sc||i===rc||i===ac)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ba)return r.COMPRESSED_RED_RGTC1_EXT;if(i===sc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===rc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ac)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ur?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const qS={type:"move"};class ol{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ti,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ti,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ti,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const M of e.hand.values()){const g=t.getJointPose(M,i),h=this._getHandJoint(c,M);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(qS)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ti;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const YS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,KS=`
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

}`;class ZS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new on,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Zi({vertexShader:YS,fragmentShader:KS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Lt(new Xi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class JS extends ws{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,_=null;const M=new ZS,g=t.getContextAttributes();let h=null,A=null;const R=[],y=[],L=new Oe;let C=null;const S=new Nn;S.viewport=new Bt;const D=new Nn;D.viewport=new Bt;const E=[S,D],b=new vy;let U=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let Me=R[re];return Me===void 0&&(Me=new ol,R[re]=Me),Me.getTargetRaySpace()},this.getControllerGrip=function(re){let Me=R[re];return Me===void 0&&(Me=new ol,R[re]=Me),Me.getGripSpace()},this.getHand=function(re){let Me=R[re];return Me===void 0&&(Me=new ol,R[re]=Me),Me.getHandSpace()};function N(re){const Me=y.indexOf(re.inputSource);if(Me===-1)return;const Ue=R[Me];Ue!==void 0&&(Ue.update(re.inputSource,re.frame,c||a),Ue.dispatchEvent({type:re.type,data:re.inputSource}))}function X(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",ne);for(let re=0;re<R.length;re++){const Me=y[re];Me!==null&&(y[re]=null,R[re].disconnect(Me))}U=null,I=null,M.reset(),e.setRenderTarget(h),p=null,f=null,d=null,s=null,A=null,je.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){r=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){o=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(re){c=re},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(re){if(s=re,s!==null){if(h=e.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",X),s.addEventListener("inputsourceschange",ne),g.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(L),s.enabledFeatures!==void 0&&s.enabledFeatures.includes("layers")){let Ue=null,Se=null,Be=null;g.depth&&(Be=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ue=g.stencil?dr:nr,Se=g.stencil?ur:bs);const We={colorFormat:t.RGBA8,depthFormat:Be,scaleFactor:r};d=new XRWebGLBinding(s,t),f=d.createProjectionLayer(We),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),A=new Ss(f.textureWidth,f.textureHeight,{format:Xn,type:Ii,depthTexture:new kh(f.textureWidth,f.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,Ue),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}else{const Ue={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Ue),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),A=new Ss(p.framebufferWidth,p.framebufferHeight,{format:Xn,type:Ii,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),je.setContext(s),je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function ne(re){for(let Me=0;Me<re.removed.length;Me++){const Ue=re.removed[Me],Se=y.indexOf(Ue);Se>=0&&(y[Se]=null,R[Se].disconnect(Ue))}for(let Me=0;Me<re.added.length;Me++){const Ue=re.added[Me];let Se=y.indexOf(Ue);if(Se===-1){for(let We=0;We<R.length;We++)if(We>=y.length){y.push(Ue),Se=We;break}else if(y[We]===null){y[We]=Ue,Se=We;break}if(Se===-1)break}const Be=R[Se];Be&&Be.connect(Ue)}}const Y=new G,se=new G;function z(re,Me,Ue){Y.setFromMatrixPosition(Me.matrixWorld),se.setFromMatrixPosition(Ue.matrixWorld);const Se=Y.distanceTo(se),Be=Me.projectionMatrix.elements,We=Ue.projectionMatrix.elements,Xe=Be[14]/(Be[10]-1),At=Be[14]/(Be[10]+1),P=(Be[9]+1)/Be[5],k=(Be[9]-1)/Be[5],T=(Be[8]-1)/Be[0],ae=(We[8]+1)/We[0],J=Xe*T,Q=Xe*ae,te=Se/(-T+ae),le=te*-T;if(Me.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(le),re.translateZ(te),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),Be[10]===-1)re.projectionMatrix.copy(Me.projectionMatrix),re.projectionMatrixInverse.copy(Me.projectionMatrixInverse);else{const Z=Xe+te,x=At+te,v=J-le,F=Q+(Se-le),W=P*At/x*Z,j=k*At/x*Z;re.projectionMatrix.makePerspective(v,F,W,j,Z,x),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function me(re,Me){Me===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(Me.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(s===null)return;let Me=re.near,Ue=re.far;M.texture!==null&&(M.depthNear>0&&(Me=M.depthNear),M.depthFar>0&&(Ue=M.depthFar)),b.near=D.near=S.near=Me,b.far=D.far=S.far=Ue,(U!==b.near||I!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),U=b.near,I=b.far),S.layers.mask=re.layers.mask|2,D.layers.mask=re.layers.mask|4,b.layers.mask=S.layers.mask|D.layers.mask;const Se=re.parent,Be=b.cameras;me(b,Se);for(let We=0;We<Be.length;We++)me(Be[We],Se);Be.length===2?z(b,S,D):b.projectionMatrix.copy(S.projectionMatrix),Te(re,b,Se)};function Te(re,Me,Ue){Ue===null?re.matrix.copy(Me.matrixWorld):(re.matrix.copy(Ue.matrixWorld),re.matrix.invert(),re.matrix.multiply(Me.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(Me.projectionMatrix),re.projectionMatrixInverse.copy(Me.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=Jr*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(re){l=re,f!==null&&(f.fixedFoveation=re),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=re)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(b)};let ye=null;function Ie(re,Me){if(u=Me.getViewerPose(c||a),_=Me,u!==null){const Ue=u.views;p!==null&&(e.setRenderTargetFramebuffer(A,p.framebuffer),e.setRenderTarget(A));let Se=!1;Ue.length!==b.cameras.length&&(b.cameras.length=0,Se=!0);for(let We=0;We<Ue.length;We++){const Xe=Ue[We];let At=null;if(p!==null)At=p.getViewport(Xe);else{const k=d.getViewSubImage(f,Xe);At=k.viewport,We===0&&(e.setRenderTargetTextures(A,k.colorTexture,f.ignoreDepthValues?void 0:k.depthStencilTexture),e.setRenderTarget(A))}let P=E[We];P===void 0&&(P=new Nn,P.layers.enable(We),P.viewport=new Bt,E[We]=P),P.matrix.fromArray(Xe.transform.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale),P.projectionMatrix.fromArray(Xe.projectionMatrix),P.projectionMatrixInverse.copy(P.projectionMatrix).invert(),P.viewport.set(At.x,At.y,At.width,At.height),We===0&&(b.matrix.copy(P.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),Se===!0&&b.cameras.push(P)}const Be=s.enabledFeatures;if(Be&&Be.includes("depth-sensing")){const We=d.getDepthInformation(Ue[0]);We&&We.isValid&&We.texture&&M.init(e,We,s.renderState)}}for(let Ue=0;Ue<R.length;Ue++){const Se=y[Ue],Be=R[Ue];Se!==null&&Be!==void 0&&Be.update(Se,Me,c||a)}ye&&ye(re,Me),Me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Me}),_=null}const je=new zh;je.setAnimationLoop(Ie),this.setAnimationLoop=function(re){ye=re},this.dispose=function(){}}}const cs=new di,QS=new Ot;function eE(n,e){function t(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function i(g,h){h.color.getRGB(g.fogColor.value,Nh(n)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function s(g,h,A,R,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(g,h):h.isMeshToonMaterial?(r(g,h),d(g,h)):h.isMeshPhongMaterial?(r(g,h),u(g,h)):h.isMeshStandardMaterial?(r(g,h),f(g,h),h.isMeshPhysicalMaterial&&p(g,h,y)):h.isMeshMatcapMaterial?(r(g,h),_(g,h)):h.isMeshDepthMaterial?r(g,h):h.isMeshDistanceMaterial?(r(g,h),M(g,h)):h.isMeshNormalMaterial?r(g,h):h.isLineBasicMaterial?(a(g,h),h.isLineDashedMaterial&&o(g,h)):h.isPointsMaterial?l(g,h,A,R):h.isSpriteMaterial?c(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,t(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,t(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,t(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===yn&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,t(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===yn&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,t(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,t(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);const A=e.get(h),R=A.envMap,y=A.envMapRotation;R&&(g.envMap.value=R,cs.copy(y),cs.x*=-1,cs.y*=-1,cs.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(cs.y*=-1,cs.z*=-1),g.envMapRotation.value.setFromMatrix4(QS.makeRotationFromEuler(cs)),g.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap&&(g.lightMap.value=h.lightMap,g.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,g.lightMapTransform)),h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,g.aoMapTransform))}function a(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,t(h.map,g.mapTransform))}function o(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function l(g,h,A,R){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*A,g.scale.value=R*.5,h.map&&(g.map.value=h.map,t(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,t(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function c(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,t(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,t(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function u(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function d(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function f(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,g.roughnessMapTransform)),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function p(g,h,A){g.ior.value=h.ior,h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===yn&&g.clearcoatNormalScale.value.negate())),h.dispersion>0&&(g.dispersion.value=h.dispersion),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=A.texture,g.transmissionSamplerSize.value.set(A.width,A.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,h){h.matcap&&(g.matcap.value=h.matcap)}function M(g,h){const A=e.get(h).light;g.referencePosition.value.setFromMatrixPosition(A.matrixWorld),g.nearDistance.value=A.shadow.camera.near,g.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function tE(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,R){const y=R.program;i.uniformBlockBinding(A,y)}function c(A,R){let y=s[A.id];y===void 0&&(_(A),y=u(A),s[A.id]=y,A.addEventListener("dispose",g));const L=R.program;i.updateUBOMapping(A,L);const C=e.render.frame;r[A.id]!==C&&(f(A),r[A.id]=C)}function u(A){const R=d();A.__bindingPointIndex=R;const y=n.createBuffer(),L=A.__size,C=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,L,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,R,y),y}function d(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){const R=s[A.id],y=A.uniforms,L=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,R);for(let C=0,S=y.length;C<S;C++){const D=Array.isArray(y[C])?y[C]:[y[C]];for(let E=0,b=D.length;E<b;E++){const U=D[E];if(p(U,C,E,L)===!0){const I=U.__offset,N=Array.isArray(U.value)?U.value:[U.value];let X=0;for(let ne=0;ne<N.length;ne++){const Y=N[ne],se=M(Y);typeof Y=="number"||typeof Y=="boolean"?(U.__data[0]=Y,n.bufferSubData(n.UNIFORM_BUFFER,I+X,U.__data)):Y.isMatrix3?(U.__data[0]=Y.elements[0],U.__data[1]=Y.elements[1],U.__data[2]=Y.elements[2],U.__data[3]=0,U.__data[4]=Y.elements[3],U.__data[5]=Y.elements[4],U.__data[6]=Y.elements[5],U.__data[7]=0,U.__data[8]=Y.elements[6],U.__data[9]=Y.elements[7],U.__data[10]=Y.elements[8],U.__data[11]=0):(Y.toArray(U.__data,X),X+=se.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,I,U.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(A,R,y,L){const C=A.value,S=R+"_"+y;if(L[S]===void 0)return typeof C=="number"||typeof C=="boolean"?L[S]=C:L[S]=C.clone(),!0;{const D=L[S];if(typeof C=="number"||typeof C=="boolean"){if(D!==C)return L[S]=C,!0}else if(D.equals(C)===!1)return D.copy(C),!0}return!1}function _(A){const R=A.uniforms;let y=0;const L=16;for(let S=0,D=R.length;S<D;S++){const E=Array.isArray(R[S])?R[S]:[R[S]];for(let b=0,U=E.length;b<U;b++){const I=E[b],N=Array.isArray(I.value)?I.value:[I.value];for(let X=0,ne=N.length;X<ne;X++){const Y=N[X],se=M(Y),z=y%L,me=z%se.boundary,Te=z+me;y+=me,Te!==0&&L-Te<se.storage&&(y+=L-Te),I.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=y,y+=se.storage}}}const C=y%L;return C>0&&(y+=L-C),A.__size=y,A.__cache={},this}function M(A){const R={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(R.boundary=4,R.storage=4):A.isVector2?(R.boundary=8,R.storage=8):A.isVector3||A.isColor?(R.boundary=16,R.storage=12):A.isVector4?(R.boundary=16,R.storage=16):A.isMatrix3?(R.boundary=48,R.storage=48):A.isMatrix4?(R.boundary=64,R.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),R}function g(A){const R=A.target;R.removeEventListener("dispose",g);const y=a.indexOf(R.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(s[R.id]),delete s[R.id],delete r[R.id]}function h(){for(const A in s)n.deleteBuffer(s[A]);a=[],s={},r={}}return{bind:l,update:c,dispose:h}}class nE{constructor(e={}){const{canvas:t=Px(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const _=new Uint32Array(4),M=new Int32Array(4);let g=null,h=null;const A=[],R=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=vn,this.toneMapping=qi,this.toneMappingExposure=1;const y=this;let L=!1,C=0,S=0,D=null,E=-1,b=null;const U=new Bt,I=new Bt;let N=null;const X=new ot(0);let ne=0,Y=t.width,se=t.height,z=1,me=null,Te=null;const ye=new Bt(0,0,Y,se),Ie=new Bt(0,0,Y,se);let je=!1;const re=new Nc;let Me=!1,Ue=!1;this.transmissionResolutionScale=1;const Se=new Ot,Be=new Ot,We=new G,Xe=new Bt,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let P=!1;function k(){return D===null?z:1}let T=i;function ae(w,H){return t.getContext(w,H)}try{const w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Tc}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",Ce,!1),t.addEventListener("webglcontextcreationerror",De,!1),T===null){const H="webgl2";if(T=ae(H,w),T===null)throw ae(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let J,Q,te,le,Z,x,v,F,W,j,q,be,fe,ve,ze,pe,Ae,Fe,Ge,we,qe,Ye,ht,B;function Re(){J=new d1(T),J.init(),Ye=new jS(T,J),Q=new r1(T,J,e,Ye),te=new XS(T,J),Q.reverseDepthBuffer&&f&&te.buffers.depth.setReversed(!0),le=new p1(T),Z=new LS,x=new $S(T,J,te,Z,Q,Ye,le),v=new o1(y),F=new u1(y),W=new My(T),ht=new i1(T,W),j=new f1(T,W,le,ht),q=new g1(T,j,W,le),Ge=new m1(T,Q,x),pe=new a1(Z),be=new DS(y,v,F,J,Q,ht,pe),fe=new eE(y,Z),ve=new US,ze=new zS(J),Fe=new n1(y,v,F,te,q,p,l),Ae=new GS(y,q,Q),B=new tE(T,le,Q,te),we=new s1(T,J,le),qe=new h1(T,J,le),le.programs=be.programs,y.capabilities=Q,y.extensions=J,y.properties=Z,y.renderLists=ve,y.shadowMap=Ae,y.state=te,y.info=le}Re();const ie=new JS(y,T);this.xr=ie,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const w=J.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=J.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(w){w!==void 0&&(z=w,this.setSize(Y,se,!1))},this.getSize=function(w){return w.set(Y,se)},this.setSize=function(w,H,$=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=w,se=H,t.width=Math.floor(w*z),t.height=Math.floor(H*z),$===!0&&(t.style.width=w+"px",t.style.height=H+"px"),this.setViewport(0,0,w,H)},this.getDrawingBufferSize=function(w){return w.set(Y*z,se*z).floor()},this.setDrawingBufferSize=function(w,H,$){Y=w,se=H,z=$,t.width=Math.floor(w*$),t.height=Math.floor(H*$),this.setViewport(0,0,w,H)},this.getCurrentViewport=function(w){return w.copy(U)},this.getViewport=function(w){return w.copy(ye)},this.setViewport=function(w,H,$,K){w.isVector4?ye.set(w.x,w.y,w.z,w.w):ye.set(w,H,$,K),te.viewport(U.copy(ye).multiplyScalar(z).round())},this.getScissor=function(w){return w.copy(Ie)},this.setScissor=function(w,H,$,K){w.isVector4?Ie.set(w.x,w.y,w.z,w.w):Ie.set(w,H,$,K),te.scissor(I.copy(Ie).multiplyScalar(z).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(w){te.setScissorTest(je=w)},this.setOpaqueSort=function(w){me=w},this.setTransparentSort=function(w){Te=w},this.getClearColor=function(w){return w.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor.apply(Fe,arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha.apply(Fe,arguments)},this.clear=function(w=!0,H=!0,$=!0){let K=0;if(w){let V=!1;if(D!==null){const _e=D.texture.format;V=_e===Dc||_e===Pc||_e===Rc}if(V){const _e=D.texture.type,Le=_e===Ii||_e===bs||_e===Zr||_e===ur||_e===Ac||_e===Cc,Ne=Fe.getClearColor(),ke=Fe.getClearAlpha(),Ke=Ne.r,Ze=Ne.g,He=Ne.b;Le?(_[0]=Ke,_[1]=Ze,_[2]=He,_[3]=ke,T.clearBufferuiv(T.COLOR,0,_)):(M[0]=Ke,M[1]=Ze,M[2]=He,M[3]=ke,T.clearBufferiv(T.COLOR,0,M))}else K|=T.COLOR_BUFFER_BIT}H&&(K|=T.DEPTH_BUFFER_BIT),$&&(K|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",Ce,!1),t.removeEventListener("webglcontextcreationerror",De,!1),Fe.dispose(),ve.dispose(),ze.dispose(),Z.dispose(),v.dispose(),F.dispose(),q.dispose(),ht.dispose(),B.dispose(),be.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",vr),ie.removeEventListener("sessionend",xr),ee.stop()};function ce(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function Ce(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const w=le.autoReset,H=Ae.enabled,$=Ae.autoUpdate,K=Ae.needsUpdate,V=Ae.type;Re(),le.autoReset=w,Ae.enabled=H,Ae.autoUpdate=$,Ae.needsUpdate=K,Ae.type=V}function De(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Je(w){const H=w.target;H.removeEventListener("dispose",Je),Pt(H)}function Pt(w){Wt(w),Z.remove(w)}function Wt(w){const H=Z.get(w).programs;H!==void 0&&(H.forEach(function($){be.releaseProgram($)}),w.isShaderMaterial&&be.releaseShaderCache(w))}this.renderBufferDirect=function(w,H,$,K,V,_e){H===null&&(H=At);const Le=V.isMesh&&V.matrixWorld.determinant()<0,Ne=bn(w,H,$,K,V);te.setMaterial(K,Le);let ke=$.index,Ke=1;if(K.wireframe===!0){if(ke=j.getWireframeAttribute($),ke===void 0)return;Ke=2}const Ze=$.drawRange,He=$.attributes.position;let lt=Ze.start*Ke,gt=(Ze.start+Ze.count)*Ke;_e!==null&&(lt=Math.max(lt,_e.start*Ke),gt=Math.min(gt,(_e.start+_e.count)*Ke)),ke!==null?(lt=Math.max(lt,0),gt=Math.min(gt,ke.count)):He!=null&&(lt=Math.max(lt,0),gt=Math.min(gt,He.count));const Vt=gt-lt;if(Vt<0||Vt===1/0)return;ht.setup(V,K,Ne,$,ke);let kt,dt=we;if(ke!==null&&(kt=W.get(ke),dt=qe,dt.setIndex(kt)),V.isMesh)K.wireframe===!0?(te.setLineWidth(K.wireframeLinewidth*k()),dt.setMode(T.LINES)):dt.setMode(T.TRIANGLES);else if(V.isLine){let Ve=K.linewidth;Ve===void 0&&(Ve=1),te.setLineWidth(Ve*k()),V.isLineSegments?dt.setMode(T.LINES):V.isLineLoop?dt.setMode(T.LINE_LOOP):dt.setMode(T.LINE_STRIP)}else V.isPoints?dt.setMode(T.POINTS):V.isSprite&&dt.setMode(T.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)dt.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(J.get("WEBGL_multi_draw"))dt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Ve=V._multiDrawStarts,Jt=V._multiDrawCounts,_t=V._multiDrawCount,zn=ke?W.get(ke).bytesPerElement:1,As=Z.get(K).currentProgram.getUniforms();for(let Sn=0;Sn<_t;Sn++)As.setValue(T,"_gl_DrawID",Sn),dt.render(Ve[Sn]/zn,Jt[Sn])}else if(V.isInstancedMesh)dt.renderInstances(lt,Vt,V.count);else if($.isInstancedBufferGeometry){const Ve=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Jt=Math.min($.instanceCount,Ve);dt.renderInstances(lt,Vt,Jt)}else dt.render(lt,Vt)};function ct(w,H,$){w.transparent===!0&&w.side===ri&&w.forceSinglePass===!1?(w.side=yn,w.needsUpdate=!0,Dt(w,H,$),w.side=Li,w.needsUpdate=!0,Dt(w,H,$),w.side=ri):Dt(w,H,$)}this.compile=function(w,H,$=null){$===null&&($=w),h=ze.get($),h.init(H),R.push(h),$.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(h.pushLight(V),V.castShadow&&h.pushShadow(V))}),w!==$&&w.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(h.pushLight(V),V.castShadow&&h.pushShadow(V))}),h.setupLights();const K=new Set;return w.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const _e=V.material;if(_e)if(Array.isArray(_e))for(let Le=0;Le<_e.length;Le++){const Ne=_e[Le];ct(Ne,$,V),K.add(Ne)}else ct(_e,$,V),K.add(_e)}),R.pop(),h=null,K},this.compileAsync=function(w,H,$=null){const K=this.compile(w,H,$);return new Promise(V=>{function _e(){if(K.forEach(function(Le){Z.get(Le).currentProgram.isReady()&&K.delete(Le)}),K.size===0){V(w);return}setTimeout(_e,10)}J.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let Mn=null;function Cn(w){Mn&&Mn(w)}function vr(){ee.stop()}function xr(){ee.start()}const ee=new zh;ee.setAnimationLoop(Cn),typeof self<"u"&&ee.setContext(self),this.setAnimationLoop=function(w){Mn=w,ie.setAnimationLoop(w),w===null?ee.stop():ee.start()},ie.addEventListener("sessionstart",vr),ie.addEventListener("sessionend",xr),this.render=function(w,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(H),H=ie.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,H,D),h=ze.get(w,R.length),h.init(H),R.push(h),Be.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),re.setFromProjectionMatrix(Be),Ue=this.localClippingEnabled,Me=pe.init(this.clippingPlanes,Ue),g=ve.get(w,A.length),g.init(),A.push(g),ie.enabled===!0&&ie.isPresenting===!0){const _e=y.xr.getDepthSensingMesh();_e!==null&&O(_e,H,-1/0,y.sortObjects)}O(w,H,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(me,Te),P=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,P&&Fe.addToRenderList(g,w),this.info.render.frame++,Me===!0&&pe.beginShadows();const $=h.state.shadowsArray;Ae.render($,w,H),Me===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=g.opaque,V=g.transmissive;if(h.setupLights(),H.isArrayCamera){const _e=H.cameras;if(V.length>0)for(let Le=0,Ne=_e.length;Le<Ne;Le++){const ke=_e[Le];ue(K,V,w,ke)}P&&Fe.render(w);for(let Le=0,Ne=_e.length;Le<Ne;Le++){const ke=_e[Le];ge(g,w,ke,ke.viewport)}}else V.length>0&&ue(K,V,w,H),P&&Fe.render(w),ge(g,w,H);D!==null&&S===0&&(x.updateMultisampleRenderTarget(D),x.updateRenderTargetMipmap(D)),w.isScene===!0&&w.onAfterRender(y,w,H),ht.resetDefaultState(),E=-1,b=null,R.pop(),R.length>0?(h=R[R.length-1],Me===!0&&pe.setGlobalState(y.clippingPlanes,h.state.camera)):h=null,A.pop(),A.length>0?g=A[A.length-1]:g=null};function O(w,H,$,K){if(w.visible===!1)return;if(w.layers.test(H.layers)){if(w.isGroup)$=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(H);else if(w.isLight)h.pushLight(w),w.castShadow&&h.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||re.intersectsSprite(w)){K&&Xe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Be);const Le=q.update(w),Ne=w.material;Ne.visible&&g.push(w,Le,Ne,$,Xe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||re.intersectsObject(w))){const Le=q.update(w),Ne=w.material;if(K&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Xe.copy(w.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),Xe.copy(Le.boundingSphere.center)),Xe.applyMatrix4(w.matrixWorld).applyMatrix4(Be)),Array.isArray(Ne)){const ke=Le.groups;for(let Ke=0,Ze=ke.length;Ke<Ze;Ke++){const He=ke[Ke],lt=Ne[He.materialIndex];lt&&lt.visible&&g.push(w,Le,lt,$,Xe.z,He)}}else Ne.visible&&g.push(w,Le,Ne,$,Xe.z,null)}}const _e=w.children;for(let Le=0,Ne=_e.length;Le<Ne;Le++)O(_e[Le],H,$,K)}function ge(w,H,$,K){const V=w.opaque,_e=w.transmissive,Le=w.transparent;h.setupLightsView($),Me===!0&&pe.setGlobalState(y.clippingPlanes,$),K&&te.viewport(U.copy(K)),V.length>0&&ut(V,H,$),_e.length>0&&ut(_e,H,$),Le.length>0&&ut(Le,H,$),te.buffers.depth.setTest(!0),te.buffers.depth.setMask(!0),te.buffers.color.setMask(!0),te.setPolygonOffset(!1)}function ue(w,H,$,K){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[K.id]===void 0&&(h.state.transmissionRenderTarget[K.id]=new Ss(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")||J.has("EXT_color_buffer_float")?sa:Ii,minFilter:_s,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ft.workingColorSpace}));const _e=h.state.transmissionRenderTarget[K.id],Le=K.viewport||U;_e.setSize(Le.z*y.transmissionResolutionScale,Le.w*y.transmissionResolutionScale);const Ne=y.getRenderTarget();y.setRenderTarget(_e),y.getClearColor(X),ne=y.getClearAlpha(),ne<1&&y.setClearColor(16777215,.5),y.clear(),P&&Fe.render($);const ke=y.toneMapping;y.toneMapping=qi;const Ke=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),h.setupLightsView(K),Me===!0&&pe.setGlobalState(y.clippingPlanes,K),ut(w,$,K),x.updateMultisampleRenderTarget(_e),x.updateRenderTargetMipmap(_e),J.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let He=0,lt=H.length;He<lt;He++){const gt=H[He],Vt=gt.object,kt=gt.geometry,dt=gt.material,Ve=gt.group;if(dt.side===ri&&Vt.layers.test(K.layers)){const Jt=dt.side;dt.side=yn,dt.needsUpdate=!0,mt(Vt,$,K,kt,dt,Ve),dt.side=Jt,dt.needsUpdate=!0,Ze=!0}}Ze===!0&&(x.updateMultisampleRenderTarget(_e),x.updateRenderTargetMipmap(_e))}y.setRenderTarget(Ne),y.setClearColor(X,ne),Ke!==void 0&&(K.viewport=Ke),y.toneMapping=ke}function ut(w,H,$){const K=H.isScene===!0?H.overrideMaterial:null;for(let V=0,_e=w.length;V<_e;V++){const Le=w[V],Ne=Le.object,ke=Le.geometry,Ke=K===null?Le.material:K,Ze=Le.group;Ne.layers.test($.layers)&&mt(Ne,H,$,ke,Ke,Ze)}}function mt(w,H,$,K,V,_e){w.onBeforeRender(y,H,$,K,V,_e),w.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),V.onBeforeRender(y,H,$,K,w,_e),V.transparent===!0&&V.side===ri&&V.forceSinglePass===!1?(V.side=yn,V.needsUpdate=!0,y.renderBufferDirect($,H,K,V,w,_e),V.side=Li,V.needsUpdate=!0,y.renderBufferDirect($,H,K,V,w,_e),V.side=ri):y.renderBufferDirect($,H,K,V,w,_e),w.onAfterRender(y,H,$,K,V,_e)}function Dt(w,H,$){H.isScene!==!0&&(H=At);const K=Z.get(w),V=h.state.lights,_e=h.state.shadowsArray,Le=V.state.version,Ne=be.getParameters(w,V.state,_e,H,$),ke=be.getProgramCacheKey(Ne);let Ke=K.programs;K.environment=w.isMeshStandardMaterial?H.environment:null,K.fog=H.fog,K.envMap=(w.isMeshStandardMaterial?F:v).get(w.envMap||K.environment),K.envMapRotation=K.environment!==null&&w.envMap===null?H.environmentRotation:w.envMapRotation,Ke===void 0&&(w.addEventListener("dispose",Je),Ke=new Map,K.programs=Ke);let Ze=Ke.get(ke);if(Ze!==void 0){if(K.currentProgram===Ze&&K.lightsStateVersion===Le)return Zt(w,Ne),Ze}else Ne.uniforms=be.getUniforms(w),w.onBeforeCompile(Ne,y),Ze=be.acquireProgram(Ne,ke),Ke.set(ke,Ze),K.uniforms=Ne.uniforms;const He=K.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(He.clippingPlanes=pe.uniform),Zt(w,Ne),K.needsLights=Mt(w),K.lightsStateVersion=Le,K.needsLights&&(He.ambientLightColor.value=V.state.ambient,He.lightProbe.value=V.state.probe,He.directionalLights.value=V.state.directional,He.directionalLightShadows.value=V.state.directionalShadow,He.spotLights.value=V.state.spot,He.spotLightShadows.value=V.state.spotShadow,He.rectAreaLights.value=V.state.rectArea,He.ltc_1.value=V.state.rectAreaLTC1,He.ltc_2.value=V.state.rectAreaLTC2,He.pointLights.value=V.state.point,He.pointLightShadows.value=V.state.pointShadow,He.hemisphereLights.value=V.state.hemi,He.directionalShadowMap.value=V.state.directionalShadowMap,He.directionalShadowMatrix.value=V.state.directionalShadowMatrix,He.spotShadowMap.value=V.state.spotShadowMap,He.spotLightMatrix.value=V.state.spotLightMatrix,He.spotLightMap.value=V.state.spotLightMap,He.pointShadowMap.value=V.state.pointShadowMap,He.pointShadowMatrix.value=V.state.pointShadowMatrix),K.currentProgram=Ze,K.uniformsList=null,Ze}function Ht(w){if(w.uniformsList===null){const H=w.currentProgram.getUniforms();w.uniformsList=za.seqWithValue(H.seq,w.uniforms)}return w.uniformsList}function Zt(w,H){const $=Z.get(w);$.outputColorSpace=H.outputColorSpace,$.batching=H.batching,$.batchingColor=H.batchingColor,$.instancing=H.instancing,$.instancingColor=H.instancingColor,$.instancingMorph=H.instancingMorph,$.skinning=H.skinning,$.morphTargets=H.morphTargets,$.morphNormals=H.morphNormals,$.morphColors=H.morphColors,$.morphTargetsCount=H.morphTargetsCount,$.numClippingPlanes=H.numClippingPlanes,$.numIntersection=H.numClipIntersection,$.vertexAlphas=H.vertexAlphas,$.vertexTangents=H.vertexTangents,$.toneMapping=H.toneMapping}function bn(w,H,$,K,V){H.isScene!==!0&&(H=At),x.resetTextureUnits();const _e=H.fog,Le=K.isMeshStandardMaterial?H.environment:null,Ne=D===null?y.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:fr,ke=(K.isMeshStandardMaterial?F:v).get(K.envMap||Le),Ke=K.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Ze=!!$.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),He=!!$.morphAttributes.position,lt=!!$.morphAttributes.normal,gt=!!$.morphAttributes.color;let Vt=qi;K.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Vt=y.toneMapping);const kt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,dt=kt!==void 0?kt.length:0,Ve=Z.get(K),Jt=h.state.lights;if(Me===!0&&(Ue===!0||w!==b)){const ln=w===b&&K.id===E;pe.setState(K,w,ln)}let _t=!1;K.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Jt.state.version||Ve.outputColorSpace!==Ne||V.isBatchedMesh&&Ve.batching===!1||!V.isBatchedMesh&&Ve.batching===!0||V.isBatchedMesh&&Ve.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Ve.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Ve.instancing===!1||!V.isInstancedMesh&&Ve.instancing===!0||V.isSkinnedMesh&&Ve.skinning===!1||!V.isSkinnedMesh&&Ve.skinning===!0||V.isInstancedMesh&&Ve.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ve.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ve.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ve.instancingMorph===!1&&V.morphTexture!==null||Ve.envMap!==ke||K.fog===!0&&Ve.fog!==_e||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==pe.numPlanes||Ve.numIntersection!==pe.numIntersection)||Ve.vertexAlphas!==Ke||Ve.vertexTangents!==Ze||Ve.morphTargets!==He||Ve.morphNormals!==lt||Ve.morphColors!==gt||Ve.toneMapping!==Vt||Ve.morphTargetsCount!==dt)&&(_t=!0):(_t=!0,Ve.__version=K.version);let zn=Ve.currentProgram;_t===!0&&(zn=Dt(K,H,V));let As=!1,Sn=!1,yr=!1;const Ut=zn.getUniforms(),Rn=Ve.uniforms;if(te.useProgram(zn.program)&&(As=!0,Sn=!0,yr=!0),K.id!==E&&(E=K.id,Sn=!0),As||b!==w){te.buffers.depth.getReversed()?(Se.copy(w.projectionMatrix),Lx(Se),Ix(Se),Ut.setValue(T,"projectionMatrix",Se)):Ut.setValue(T,"projectionMatrix",w.projectionMatrix),Ut.setValue(T,"viewMatrix",w.matrixWorldInverse);const mn=Ut.map.cameraPosition;mn!==void 0&&mn.setValue(T,We.setFromMatrixPosition(w.matrixWorld)),Q.logarithmicDepthBuffer&&Ut.setValue(T,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Ut.setValue(T,"isOrthographic",w.isOrthographicCamera===!0),b!==w&&(b=w,Sn=!0,yr=!0)}if(V.isSkinnedMesh){Ut.setOptional(T,V,"bindMatrix"),Ut.setOptional(T,V,"bindMatrixInverse");const ln=V.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),Ut.setValue(T,"boneTexture",ln.boneTexture,x))}V.isBatchedMesh&&(Ut.setOptional(T,V,"batchingTexture"),Ut.setValue(T,"batchingTexture",V._matricesTexture,x),Ut.setOptional(T,V,"batchingIdTexture"),Ut.setValue(T,"batchingIdTexture",V._indirectTexture,x),Ut.setOptional(T,V,"batchingColorTexture"),V._colorsTexture!==null&&Ut.setValue(T,"batchingColorTexture",V._colorsTexture,x));const Pn=$.morphAttributes;if((Pn.position!==void 0||Pn.normal!==void 0||Pn.color!==void 0)&&Ge.update(V,$,zn),(Sn||Ve.receiveShadow!==V.receiveShadow)&&(Ve.receiveShadow=V.receiveShadow,Ut.setValue(T,"receiveShadow",V.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Rn.envMap.value=ke,Rn.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&H.environment!==null&&(Rn.envMapIntensity.value=H.environmentIntensity),Sn&&(Ut.setValue(T,"toneMappingExposure",y.toneMappingExposure),Ve.needsLights&&Yn(Rn,yr),_e&&K.fog===!0&&fe.refreshFogUniforms(Rn,_e),fe.refreshMaterialUniforms(Rn,K,z,se,h.state.transmissionRenderTarget[w.id]),za.upload(T,Ht(Ve),Rn,x)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(za.upload(T,Ht(Ve),Rn,x),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Ut.setValue(T,"center",V.center),Ut.setValue(T,"modelViewMatrix",V.modelViewMatrix),Ut.setValue(T,"normalMatrix",V.normalMatrix),Ut.setValue(T,"modelMatrix",V.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const ln=K.uniformsGroups;for(let mn=0,_o=ln.length;mn<_o;mn++){const Qi=ln[mn];B.update(Qi,zn),B.bind(Qi,zn)}}return zn}function Yn(w,H){w.ambientLightColor.needsUpdate=H,w.lightProbe.needsUpdate=H,w.directionalLights.needsUpdate=H,w.directionalLightShadows.needsUpdate=H,w.pointLights.needsUpdate=H,w.pointLightShadows.needsUpdate=H,w.spotLights.needsUpdate=H,w.spotLightShadows.needsUpdate=H,w.rectAreaLights.needsUpdate=H,w.hemisphereLights.needsUpdate=H}function Mt(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(w,H,$){Z.get(w.texture).__webglTexture=H,Z.get(w.depthTexture).__webglTexture=$;const K=Z.get(w);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=$===void 0,K.__autoAllocateDepthBuffer||J.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,H){const $=Z.get(w);$.__webglFramebuffer=H,$.__useDefaultFramebuffer=H===void 0};const fi=T.createFramebuffer();this.setRenderTarget=function(w,H=0,$=0){D=w,C=H,S=$;let K=!0,V=null,_e=!1,Le=!1;if(w){const ke=Z.get(w);if(ke.__useDefaultFramebuffer!==void 0)te.bindFramebuffer(T.FRAMEBUFFER,null),K=!1;else if(ke.__webglFramebuffer===void 0)x.setupRenderTarget(w);else if(ke.__hasExternalTextures)x.rebindTextures(w,Z.get(w.texture).__webglTexture,Z.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const He=w.depthTexture;if(ke.__boundDepthTexture!==He){if(He!==null&&Z.has(He)&&(w.width!==He.image.width||w.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");x.setupDepthRenderbuffer(w)}}const Ke=w.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(Le=!0);const Ze=Z.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ze[H])?V=Ze[H][$]:V=Ze[H],_e=!0):w.samples>0&&x.useMultisampledRTT(w)===!1?V=Z.get(w).__webglMultisampledFramebuffer:Array.isArray(Ze)?V=Ze[$]:V=Ze,U.copy(w.viewport),I.copy(w.scissor),N=w.scissorTest}else U.copy(ye).multiplyScalar(z).floor(),I.copy(Ie).multiplyScalar(z).floor(),N=je;if($!==0&&(V=fi),te.bindFramebuffer(T.FRAMEBUFFER,V)&&K&&te.drawBuffers(w,V),te.viewport(U),te.scissor(I),te.setScissorTest(N),_e){const ke=Z.get(w.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+H,ke.__webglTexture,$)}else if(Le){const ke=Z.get(w.texture),Ke=H;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,ke.__webglTexture,$,Ke)}else if(w!==null&&$!==0){const ke=Z.get(w.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,ke.__webglTexture,$)}E=-1},this.readRenderTargetPixels=function(w,H,$,K,V,_e,Le){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=Z.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Le!==void 0&&(Ne=Ne[Le]),Ne){te.bindFramebuffer(T.FRAMEBUFFER,Ne);try{const ke=w.texture,Ke=ke.format,Ze=ke.type;if(!Q.textureFormatReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Q.textureTypeReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=w.width-K&&$>=0&&$<=w.height-V&&T.readPixels(H,$,K,V,Ye.convert(Ke),Ye.convert(Ze),_e)}finally{const ke=D!==null?Z.get(D).__webglFramebuffer:null;te.bindFramebuffer(T.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(w,H,$,K,V,_e,Le){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=Z.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Le!==void 0&&(Ne=Ne[Le]),Ne){const ke=w.texture,Ke=ke.format,Ze=ke.type;if(!Q.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Q.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=w.width-K&&$>=0&&$<=w.height-V){te.bindFramebuffer(T.FRAMEBUFFER,Ne);const He=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,He),T.bufferData(T.PIXEL_PACK_BUFFER,_e.byteLength,T.STREAM_READ),T.readPixels(H,$,K,V,Ye.convert(Ke),Ye.convert(Ze),0);const lt=D!==null?Z.get(D).__webglFramebuffer:null;te.bindFramebuffer(T.FRAMEBUFFER,lt);const gt=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await Dx(T,gt,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,He),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,_e),T.deleteBuffer(He),T.deleteSync(gt),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,H=null,$=0){w.isTexture!==!0&&($s("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,w=arguments[1]);const K=Math.pow(2,-$),V=Math.floor(w.image.width*K),_e=Math.floor(w.image.height*K),Le=H!==null?H.x:0,Ne=H!==null?H.y:0;x.setTexture2D(w,0),T.copyTexSubImage2D(T.TEXTURE_2D,$,0,0,Le,Ne,V,_e),te.unbindTexture()};const hi=T.createFramebuffer(),It=T.createFramebuffer();this.copyTextureToTexture=function(w,H,$=null,K=null,V=0,_e=null){w.isTexture!==!0&&($s("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,w=arguments[1],H=arguments[2],_e=arguments[3]||0,$=null),_e===null&&(V!==0?($s("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),_e=V,V=0):_e=0);let Le,Ne,ke,Ke,Ze,He,lt,gt,Vt;const kt=w.isCompressedTexture?w.mipmaps[_e]:w.image;if($!==null)Le=$.max.x-$.min.x,Ne=$.max.y-$.min.y,ke=$.isBox3?$.max.z-$.min.z:1,Ke=$.min.x,Ze=$.min.y,He=$.isBox3?$.min.z:0;else{const Pn=Math.pow(2,-V);Le=Math.floor(kt.width*Pn),Ne=Math.floor(kt.height*Pn),w.isDataArrayTexture?ke=kt.depth:w.isData3DTexture?ke=Math.floor(kt.depth*Pn):ke=1,Ke=0,Ze=0,He=0}K!==null?(lt=K.x,gt=K.y,Vt=K.z):(lt=0,gt=0,Vt=0);const dt=Ye.convert(H.format),Ve=Ye.convert(H.type);let Jt;H.isData3DTexture?(x.setTexture3D(H,0),Jt=T.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(x.setTexture2DArray(H,0),Jt=T.TEXTURE_2D_ARRAY):(x.setTexture2D(H,0),Jt=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,H.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,H.unpackAlignment);const _t=T.getParameter(T.UNPACK_ROW_LENGTH),zn=T.getParameter(T.UNPACK_IMAGE_HEIGHT),As=T.getParameter(T.UNPACK_SKIP_PIXELS),Sn=T.getParameter(T.UNPACK_SKIP_ROWS),yr=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,kt.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,kt.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Ke),T.pixelStorei(T.UNPACK_SKIP_ROWS,Ze),T.pixelStorei(T.UNPACK_SKIP_IMAGES,He);const Ut=w.isDataArrayTexture||w.isData3DTexture,Rn=H.isDataArrayTexture||H.isData3DTexture;if(w.isDepthTexture){const Pn=Z.get(w),ln=Z.get(H),mn=Z.get(Pn.__renderTarget),_o=Z.get(ln.__renderTarget);te.bindFramebuffer(T.READ_FRAMEBUFFER,mn.__webglFramebuffer),te.bindFramebuffer(T.DRAW_FRAMEBUFFER,_o.__webglFramebuffer);for(let Qi=0;Qi<ke;Qi++)Ut&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Z.get(w).__webglTexture,V,He+Qi),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Z.get(H).__webglTexture,_e,Vt+Qi)),T.blitFramebuffer(Ke,Ze,Le,Ne,lt,gt,Le,Ne,T.DEPTH_BUFFER_BIT,T.NEAREST);te.bindFramebuffer(T.READ_FRAMEBUFFER,null),te.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(V!==0||w.isRenderTargetTexture||Z.has(w)){const Pn=Z.get(w),ln=Z.get(H);te.bindFramebuffer(T.READ_FRAMEBUFFER,hi),te.bindFramebuffer(T.DRAW_FRAMEBUFFER,It);for(let mn=0;mn<ke;mn++)Ut?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Pn.__webglTexture,V,He+mn):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Pn.__webglTexture,V),Rn?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,ln.__webglTexture,_e,Vt+mn):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,ln.__webglTexture,_e),V!==0?T.blitFramebuffer(Ke,Ze,Le,Ne,lt,gt,Le,Ne,T.COLOR_BUFFER_BIT,T.NEAREST):Rn?T.copyTexSubImage3D(Jt,_e,lt,gt,Vt+mn,Ke,Ze,Le,Ne):T.copyTexSubImage2D(Jt,_e,lt,gt,Ke,Ze,Le,Ne);te.bindFramebuffer(T.READ_FRAMEBUFFER,null),te.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else Rn?w.isDataTexture||w.isData3DTexture?T.texSubImage3D(Jt,_e,lt,gt,Vt,Le,Ne,ke,dt,Ve,kt.data):H.isCompressedArrayTexture?T.compressedTexSubImage3D(Jt,_e,lt,gt,Vt,Le,Ne,ke,dt,kt.data):T.texSubImage3D(Jt,_e,lt,gt,Vt,Le,Ne,ke,dt,Ve,kt):w.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,_e,lt,gt,Le,Ne,dt,Ve,kt.data):w.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,_e,lt,gt,kt.width,kt.height,dt,kt.data):T.texSubImage2D(T.TEXTURE_2D,_e,lt,gt,Le,Ne,dt,Ve,kt);T.pixelStorei(T.UNPACK_ROW_LENGTH,_t),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,zn),T.pixelStorei(T.UNPACK_SKIP_PIXELS,As),T.pixelStorei(T.UNPACK_SKIP_ROWS,Sn),T.pixelStorei(T.UNPACK_SKIP_IMAGES,yr),_e===0&&H.generateMipmaps&&T.generateMipmap(Jt),te.unbindTexture()},this.copyTextureToTexture3D=function(w,H,$=null,K=null,V=0){return w.isTexture!==!0&&($s("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,K=arguments[1]||null,w=arguments[2],H=arguments[3],V=arguments[4]||0),$s('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,H,$,K,V)},this.initRenderTarget=function(w){Z.get(w).__webglFramebuffer===void 0&&x.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?x.setTextureCube(w,0):w.isData3DTexture?x.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?x.setTexture2DArray(w,0):x.setTexture2D(w,0),te.unbindTexture()},this.resetState=function(){C=0,S=0,D=null,te.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=ft._getUnpackColorSpace()}}const Bd={type:"change"},Hc={type:"start"},Xh={type:"end"},Da=new Ph,zd=new Gi,iE=Math.cos(70*Zn.DEG2RAD),Xt=new G,gn=2*Math.PI,Tt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ll=1e-6;class sE extends xy{constructor(e,t=null){super(e,t),this.state=Tt.NONE,this.enabled=!0,this.target=new G,this.cursor=new G,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:er.ROTATE,MIDDLE:er.DOLLY,RIGHT:er.PAN},this.touches={ONE:js.ROTATE,TWO:js.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new G,this._lastQuaternion=new Es,this._lastTargetPosition=new G,this._quat=new Es().setFromUnitVectors(e.up,new G(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new hd,this._sphericalDelta=new hd,this._scale=1,this._panOffset=new G,this._rotateStart=new Oe,this._rotateEnd=new Oe,this._rotateDelta=new Oe,this._panStart=new Oe,this._panEnd=new Oe,this._panDelta=new Oe,this._dollyStart=new Oe,this._dollyEnd=new Oe,this._dollyDelta=new Oe,this._dollyDirection=new G,this._mouse=new Oe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=aE.bind(this),this._onPointerDown=rE.bind(this),this._onPointerUp=oE.bind(this),this._onContextMenu=pE.bind(this),this._onMouseWheel=uE.bind(this),this._onKeyDown=dE.bind(this),this._onTouchStart=fE.bind(this),this._onTouchMove=hE.bind(this),this._onMouseDown=lE.bind(this),this._onMouseMove=cE.bind(this),this._interceptControlDown=mE.bind(this),this._interceptControlUp=gE.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Bd),this.update(),this.state=Tt.NONE}update(e=null){const t=this.object.position;Xt.copy(t).sub(this.target),Xt.applyQuaternion(this._quat),this._spherical.setFromVector3(Xt),this.autoRotate&&this.state===Tt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=gn:i>Math.PI&&(i-=gn),s<-Math.PI?s+=gn:s>Math.PI&&(s-=gn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Xt.setFromSpherical(this._spherical),Xt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Xt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Xt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new G(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new G(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Xt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Da.origin.copy(this.object.position),Da.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Da.direction))<iE?this.object.lookAt(this.target):(zd.setFromNormalAndCoplanarPoint(this.object.up,this.target),Da.intersectPlane(zd,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ll||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ll||this._lastTargetPosition.distanceToSquared(this.target)>ll?(this.dispatchEvent(Bd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?gn/60*this.autoRotateSpeed*e:gn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Xt.setFromMatrixColumn(t,0),Xt.multiplyScalar(-e),this._panOffset.add(Xt)}_panUp(e,t){this.screenSpacePanning===!0?Xt.setFromMatrixColumn(t,1):(Xt.setFromMatrixColumn(t,0),Xt.crossVectors(this.object.up,Xt)),Xt.multiplyScalar(e),this._panOffset.add(Xt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Xt.copy(s).sub(this.target);let r=Xt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(gn*this._rotateDelta.x/t.clientHeight),this._rotateUp(gn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(gn*this._rotateDelta.x/t.clientHeight),this._rotateUp(gn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Oe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function rE(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function aE(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function oE(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Xh),this.state=Tt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function lE(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case er.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Tt.DOLLY;break;case er.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Tt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Tt.ROTATE}break;case er.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Tt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Tt.PAN}break;default:this.state=Tt.NONE}this.state!==Tt.NONE&&this.dispatchEvent(Hc)}function cE(n){switch(this.state){case Tt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Tt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Tt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function uE(n){this.enabled===!1||this.enableZoom===!1||this.state!==Tt.NONE||(n.preventDefault(),this.dispatchEvent(Hc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Xh))}function dE(n){this.enabled!==!1&&this._handleKeyDown(n)}function fE(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case js.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Tt.TOUCH_ROTATE;break;case js.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Tt.TOUCH_PAN;break;default:this.state=Tt.NONE}break;case 2:switch(this.touches.TWO){case js.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Tt.TOUCH_DOLLY_PAN;break;case js.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Tt.TOUCH_DOLLY_ROTATE;break;default:this.state=Tt.NONE}break;default:this.state=Tt.NONE}this.state!==Tt.NONE&&this.dispatchEvent(Hc)}function hE(n){switch(this._trackPointer(n),this.state){case Tt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Tt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Tt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Tt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Tt.NONE}}function pE(n){this.enabled!==!1&&n.preventDefault()}function mE(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function gE(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const _E={class:"patternx-page"},vE={class:"patternx-shell"},xE={class:"patternx-nav"},yE={class:"patternx-tabs","aria-label":"纹脉工坊导航"},ME=["onClick"],bE={class:"patternx-main"},SE={key:0,class:"patternx-home"},EE={class:"patternx-landing-hero"},TE={class:"patternx-landing-copy"},wE={class:"patternx-actions landing-actions"},AE={class:"patternx-live-preview"},CE={class:"patternx-preview-badge"},RE={key:0,class:"patternx-canvas-loading"},PE={class:"patternx-preview-info"},DE=["src","alt"],LE={class:"patternx-preview-tools"},IE={class:"patternx-preview-hint"},UE={class:"patternx-feature-band","aria-label":"平台功能"},NE=["onClick"],FE={class:"patternx-feature-icon"},OE={class:"patternx-popular-section"},kE={class:"patternx-section-title"},BE={class:"patternx-popular-grid"},zE=["onClick"],HE=["onClick"],VE=["src","alt"],GE=["onClick"],WE={key:1,class:"patternx-subpage"},XE={key:1,class:"patternx-upload-result"},$E={class:"patternx-card upload-preview-card"},jE={class:"patternx-card-title"},qE={class:"patternx-image-preview"},YE=["src","alt"],KE={class:"patternx-card upload-preview-card"},ZE={class:"patternx-card-title"},JE={class:"patternx-image-preview extraction"},QE=["src"],eT={key:1,class:"patternx-spinner"},tT={key:2,class:"patternx-actions upload-actions"},nT=["disabled"],iT={key:2,class:"patternx-subpage studio-page"},sT={class:"patternx-studio-layout"},rT={class:"patternx-sidebar"},aT={class:"patternx-studio-panel pattern-panel"},oT={class:"patternx-card-title"},lT={class:"patternx-studio-patterns"},cT=["onClick"],uT={class:"patternx-mini-thumb"},dT=["src","alt"],fT={class:"patternx-studio-panel"},hT={class:"patternx-card-title"},pT={class:"patternx-model-grid"},mT=["onClick"],gT={class:"patternx-studio-panel parameter-panel"},_T={class:"patternx-card-title"},vT=["onUpdate:modelValue","min","max","step"],xT={class:"patternx-studio-main"},yT={key:0,class:"patternx-canvas-loading"},MT={class:"studio-top-tools","aria-label":"场景工具"},bT={class:"studio-side-tools","aria-label":"视图控制"},ST={class:"patternx-canvas-label"},ET=["src","alt"],TT={class:"patternx-studio-footer"},wT={class:"patternx-capability-band","aria-label":"工坊能力"},AT={key:0,class:"patternx-file-alert",role:"alert"},CT={class:"patternx-file-alert-icon"},RT={class:"patternx-file-alert-message"},PT={key:0,class:"patternx-toast",role:"status"},DT={__name:"PatternXPage",emits:["navigate","select-category"],setup(n,{emit:e}){var vr,xr;const t=e,i=new URLSearchParams(window.location.search).get("pattern"),s=new URLSearchParams(window.location.search).get("view"),r=xn.filter(ee=>ee.category==="animal"),a=Qe(s==="studio"?"studio":"home"),o=Qe(xn.some(ee=>ee.id===i)?i:((vr=r[0])==null?void 0:vr.id)||((xr=xn[0])==null?void 0:xr.id)||""),l=Qe("vase"),c=Qe(""),u=Qe(""),d=Qe(null),f=Qe(""),p=Qe(""),_=Qe(null),M=Qe(""),g=Qe("等待上传图片"),h=Qe(!1),A=Qe(null),R=Qe(!1),y=Qe(!1),L=Wr({active:!1,x:0,y:0}),C=Qe(new Set),S=Wr({scale:100,rotate:0,offset:0,repeatX:1,repeatY:1,textureOffsetX:0,textureOffsetY:0,gloss:45}),D=[{key:"vase",label:"花瓶",icon:Du},{key:"cup",label:"茶杯",icon:Pg},{key:"box",label:"包装盒",icon:ds},{key:"silk",label:"丝巾",icon:zg},{key:"phone",label:"手机壳",icon:Hg}],E=["#b85c38","#5a7d5a","#c9a227","#7a6048","#6c8295","#a08060"],b=xn.map((ee,O)=>({...ee,region:["大临村","江南工坊","桐乡","民间布样"][O%4],color:E[O%E.length],likes:64+O*23,image:ee.previewImage})),U=Et(()=>_.value?[_.value,...N.value]:N.value),I=Et(()=>{var ee;return((ee=_.value)==null?void 0:ee.id)===o.value?_.value:b.find(O=>O.id===o.value)||b[0]}),N=Et(()=>r.map(ee=>b.find(O=>O.id===ee.id)).filter(Boolean)),X=[{title:"纹样智能采集",description:"上传图片，智能提取纹样结构与视觉特征",action:"立即体验",page:"upload",icon:Ru},{title:"蓝印纹库",description:"返回主站查看动物纹实拍图与文化档案",action:"查看动物纹",actionType:"library",icon:Ms},{title:"纹样 3D 创作",description:"选择器物载体，实时预览纹理与形态效果",action:"进入 3D 工坊",page:"studio",icon:ds}];let ne,Y,se,z,me,Te,ye,Ie,je,re,Me,Ue=0;const Se=Qe(!1),Be=[{key:"scale",label:"缩放",min:50,max:150,step:1},{key:"rotate",label:"旋转",min:0,max:360,step:1},{key:"offset",label:"位置",min:-50,max:50,step:1},{key:"gloss",label:"光泽度",min:0,max:100,step:1}],We=[{title:"非遗纹样 · 数字新生",description:"让千年纹样走进现代创作",icon:Ig},{title:"高清渲染",description:"高分辨率 PNG 输出",icon:ds},{title:"多角度展示",description:"360° 旋转预览",icon:Og},{title:"一键导出",description:"PNG 渲染图",icon:bl},{title:"商用可用",description:"版权信息可追溯",icon:Bg}];function Xe(ee){c.value=ee,window.clearTimeout(ne),ne=window.setTimeout(()=>{c.value=""},2600)}function At(ee){u.value=ee,window.clearTimeout(Y),Y=window.setTimeout(()=>{u.value=""},5200)}function P(){window.clearTimeout(Y),u.value=""}function k(ee){a.value=ee,window.scrollTo({top:0,behavior:"smooth"})}function T(ee){t("navigate",ee)}function ae(){t("select-category","animal"),t("navigate","/library")}function J(ee){t("navigate",`/pattern/${ee.id}`)}function Q(ee){ee.actionType==="library"?ae():k(ee.page)}function te(){const ee=N.value.findIndex(ge=>ge.id===o.value),O=N.value[(ee+1)%N.value.length];O&&(o.value=O.id)}function le(){S.scale=100,S.rotate=0,S.offset=0,S.repeatX=1,S.repeatY=1,S.textureOffsetX=0,S.textureOffsetY=0,S.gloss=45,Se.value=!1,Ie==null||Ie.traverse(ee=>{(Array.isArray(ee.material)?ee.material:ee.material?[ee.material]:[]).forEach(ge=>{ge.wireframe=!1,ge.needsUpdate=!0})}),Te&&Te.position.set(0,1.6,5.35),ye==null||ye.target.set(0,.08,0),ye==null||ye.update()}function Z(ee){if(!Te)return;const O=Zn.clamp(Te.position.z+ee*.45,2.6,7);Te.position.z=O,ye==null||ye.update()}function x(){Se.value=!Se.value,Ie==null||Ie.traverse(ee=>{(Array.isArray(ee.material)?ee.material:ee.material?[ee.material]:[]).forEach(ge=>{ge.wireframe=Se.value,ge.needsUpdate=!0})})}function v(){var ee,O,ge;A.value&&(document.fullscreenElement?(ee=document.exitFullscreen)==null||ee.call(document):(ge=(O=A.value).requestFullscreen)==null||ge.call(O))}function F(ee){o.value=ee.id,k("studio"),Xe(`已选择：${ee.name}`)}function W(ee){const O=new Set(C.value),ge=O.has(ee.id);ge?O.delete(ee.id):O.add(ee.id),C.value=O,Xe(ge?"已取消收藏":"已收藏到你的纹样夹")}function j(){var ee;(ee=d.value)==null||ee.click()}function q(ee){var ge,ue;const O=(ue=(ge=ee.dataTransfer)==null?void 0:ge.files)==null?void 0:ue[0];O&&ve(O)}function be(ee){var ge;const O=(ge=ee.target.files)==null?void 0:ge[0];O&&ve(O)}function fe(ee){return new Promise((O,ge)=>{const ue=new Image;ue.onload=()=>{const mt=Math.min(1,640/Math.max(ue.naturalWidth,ue.naturalHeight)),Dt=Math.max(1,Math.round(ue.naturalWidth*mt)),Ht=Math.max(1,Math.round(ue.naturalHeight*mt)),Zt=document.createElement("canvas");Zt.width=Dt,Zt.height=Ht;const bn=Zt.getContext("2d",{willReadFrequently:!0});bn.drawImage(ue,0,0,Dt,Ht);const Yn=bn.getImageData(0,0,Dt,Ht),{data:Mt}=Yn,fi=[[0,0],[Dt-1,0],[0,Ht-1],[Dt-1,Ht-1],[Math.floor(Dt/2),0],[Math.floor(Dt/2),Ht-1]],hi=fi.reduce((It,[w,H])=>{const $=(H*Dt+w)*4;return[It[0]+Mt[$],It[1]+Mt[$+1],It[2]+Mt[$+2]]},[0,0,0]).map(It=>It/fi.length);for(let It=0;It<Mt.length;It+=4){const w=Math.hypot(Mt[It]-hi[0],Mt[It+1]-hi[1],Mt[It+2]-hi[2]);w<42?Mt[It+3]=0:w<70&&(Mt[It+3]=Math.round((w-42)/28*255))}bn.putImageData(Yn,0,0),O(Zt.toDataURL("image/png"))},ue.onerror=ge,ue.src=ee})}function ve(ee){if(!ee.type.startsWith("image/")){At("仅支持图片（JPG、PNG）和文本（html、txt、md）文件");return}window.clearTimeout(se),M.value=ee.name,g.value="正在读取本地图片...",h.value=!0;const O=new FileReader;O.onload=ge=>{f.value=String(ge.target.result||""),p.value="",g.value="正在提取纹样轮廓...",se=window.setTimeout(async()=>{try{p.value=await fe(f.value),g.value="本地提取完成，可保存到纹样库"}catch{g.value="提取失败，已保留原图，请重试"}finally{h.value=!1}},900)},O.onerror=()=>{g.value="图片读取失败，请重试",h.value=!1},O.readAsDataURL(ee)}function ze(){window.clearTimeout(se),f.value="",p.value="",M.value="",g.value="等待上传图片",h.value=!1,d.value&&(d.value.value="")}function pe(){if(!p.value){Xe("请先完成图片提取");return}_.value={...b[0],id:"uploaded-pattern",name:M.value.replace(/\.[^.]+$/,"")||"我的纹样",categoryName:"我的采集",meaning:"本次上传并提取的自定义纹样",image:p.value},o.value=_.value.id,Xe(`「${_.value.name}」已用于 3D 创作`),k("studio")}function Ae(ee){return ee==="scale"?`${S.scale}%`:ee==="rotate"?`${S.rotate}°`:ee==="gloss"?`${S.gloss}%`:S[ee]}function Fe(ee=16315368,O=!0){const ge=new ld({color:ee,map:O&&je||null,roughness:Zn.clamp(.62-S.gloss*.005,.12,.62),metalness:0,clearcoat:.72,clearcoatRoughness:Zn.clamp(.34-S.gloss*.0024,.08,.34),ior:1.47,side:Li});return ge.userData.studioSurface=!0,ge}function Ge(){const ee=new Ti,O=new ay([new Oe(.215,-1.22),new Oe(.275,-1.17),new Oe(.315,-.98),new Oe(.39,-.72),new Oe(.485,-.38),new Oe(.515,-.08),new Oe(.485,.18),new Oe(.405,.43),new Oe(.29,.65),new Oe(.225,.82),new Oe(.205,1.05),new Oe(.215,1.24)]),ge=new Qa(O.getPoints(64),128);ge.computeVertexNormals();const ue=new Lt(ge,Fe(16777215));ue.rotation.y=Math.PI;const ut=new Lt(new Hr(.23,.205,.075,96),Fe(16314853,!1));ut.position.y=-1.245;const mt=new Lt(new eo(.205,.022,20,96),Fe(16116959,!1));mt.rotation.x=Math.PI/2,mt.position.y=-1.282;const Dt=new Lt(new eo(.19,.027,24,128),Fe(16776178,!1));Dt.rotation.x=Math.PI/2,Dt.position.y=1.245;const Ht=new ld({color:1516597,roughness:.78,metalness:0,side:ri}),Zt=new Lt(new Hr(.168,.178,.54,96,1,!0),Ht);Zt.position.y=1;const bn=new Lt(new Fc(.178,96),Ht.clone());return bn.rotation.x=-Math.PI/2,bn.position.y=.735,ee.add(ue,ut,mt,Dt,Zt,bn),ee}function we(){const ee=new Ti,O=[[0,-.62],[.1,-.6],[.2,-.43],[.32,-.16],[.35,.08],[.32,.14],[0,.14]].map(([ut,mt])=>new Oe(ut,mt)),ge=new Lt(new Qa(O,48),Fe(16117995)),ue=new Lt(new Hr(.46,.4,.04,48),new Dr({color:15061692,roughness:.42}));return ue.position.y=-.65,ee.add(ge,ue),ee}function qe(){const ee=new Ti,O=new Lt(new Yi(1.7,.52,1.3),Fe(13215868)),ge=new Lt(new Yi(1.7,.12,1.3),new Dr({color:12096876,roughness:.4}));ge.position.y=.32;const ue=new Lt(new Oc(.08,20,14),new Dr({color:9136404,metalness:.5,roughness:.28}));return ue.position.y=.42,ee.add(O,ge,ue),ee}function Ye(){const ee=new Xi(2.35,2.15,36,36),O=ee.attributes.position;for(let ge=0;ge<O.count;ge+=1){const ue=O.getX(ge),ut=O.getY(ge);O.setZ(ge,Math.sin(ue*2.6)*.06+Math.sin(ut*3.2)*.05-Math.pow(Math.max(Math.abs(ue/1.18),Math.abs(ut/1.08)),2)*.16)}return ee.computeVertexNormals(),new Lt(ee,Fe(16117995))}function ht(){const ee=new Ti,O=new Lt(new Yi(.84,1.64,.12),new Dr({color:2763326,metalness:.65,roughness:.26})),ge=new Lt(new Xi(.73,1.52),Fe(16117995));return ge.position.z=.07,ee.add(O,ge),ee}function B(){if(!me)return;Ie&&(me.remove(Ie),Ie.traverse(O=>{var ge;(ge=O.geometry)==null||ge.dispose(),O.material&&(Array.isArray(O.material)?O.material:[O.material]).forEach(ut=>ut.dispose())})),Ie=new Ti;const ee={vase:Ge,cup:we,box:qe,silk:Ye,phone:ht}[l.value]();ee.traverse(O=>{O.isMesh&&(O.castShadow=!0,O.receiveShadow=!0)}),Ie.add(ee),me.add(Ie),Re(),Ie.traverse(O=>{(Array.isArray(O.material)?O.material:O.material?[O.material]:[]).forEach(ue=>{ue.wireframe=Se.value,ue.needsUpdate=!0})})}function Re(){if(Ie){const ee=S.scale/100;Ie.scale.setScalar(ee),Ie.rotation.y=S.rotate*Math.PI/180,Ie.position.y=S.offset/60}Ie==null||Ie.traverse(ee=>{(Array.isArray(ee.material)?ee.material:ee.material?[ee.material]:[]).forEach(ge=>{ge.isMeshStandardMaterial&&(ge.roughness=ge.userData.studioSurface?Zn.clamp(.62-S.gloss*.005,.12,.62):ge.roughness,ge.isMeshPhysicalMaterial&&ge.userData.studioSurface&&(ge.clearcoatRoughness=Zn.clamp(.34-S.gloss*.0024,.08,.34)),ge.needsUpdate=!0)})}),je&&(je.repeat.set(S.repeatX,S.repeatY),je.offset.set(S.textureOffsetX/100,S.textureOffsetY/100),je.needsUpdate=!0)}function ie(ee){var O,ge;y.value&&(L.active=!0,L.x=ee.clientX,L.y=ee.clientY,(ge=(O=ee.currentTarget).setPointerCapture)==null||ge.call(O,ee.pointerId))}function ce(ee){L.active&&(S.textureOffsetX-=(ee.clientX-L.x)*.35,S.textureOffsetY+=(ee.clientY-L.y)*.35,S.textureOffsetX=Math.max(-100,Math.min(100,S.textureOffsetX)),S.textureOffsetY=Math.max(-100,Math.min(100,S.textureOffsetY)),L.x=ee.clientX,L.y=ee.clientY)}function Ce(){L.active=!1}function De(ee){const ge=document.createElement("canvas");ge.width=1024,ge.height=1024;const ue=ge.getContext("2d",{willReadFrequently:!0});ue.drawImage(ee,0,0,1024,1024);const ut=ue.getImageData(0,0,1024,1024),{data:mt}=ut,Dt=[[3,3],[1020,3],[3,1020],[1020,1020],[Math.floor(1024/2),3],[Math.floor(1024/2),1020]],Ht=Dt.reduce((Mt,[fi,hi])=>{const It=(hi*1024+fi)*4;return[Mt[0]+mt[It],Mt[1]+mt[It+1],Mt[2]+mt[It+2],Mt[3]+mt[It+3]]},[0,0,0,0]).map(Mt=>Mt/Dt.length),Zt=[246,240,228],bn=[16,54,92];for(let Mt=0;Mt<mt.length;Mt+=4){const fi=mt[Mt+3]/255,hi=Math.hypot(mt[Mt]-Ht[0],mt[Mt+1]-Ht[1],mt[Mt+2]-Ht[2]),It=Ht[3]<40?fi:Zn.smoothstep(hi,30,105)*fi;mt[Mt]=Math.round(Zn.lerp(Zt[0],bn[0],It)),mt[Mt+1]=Math.round(Zn.lerp(Zt[1],bn[1],It)),mt[Mt+2]=Math.round(Zn.lerp(Zt[2],bn[2],It)),mt[Mt+3]=255}ue.putImageData(ut,0,0);const Yn=new ad(ge);return Yn.wrapS=Kr,Yn.wrapT=Kr,Yn.colorSpace=vn,Yn.anisotropy=z?Math.min(8,z.capabilities.getMaxAnisotropy()):1,Yn}function Je(){const ee=document.createElement("canvas");ee.width=512,ee.height=256;const O=ee.getContext("2d"),ge=O.createRadialGradient(256,128,8,256,128,235);return ge.addColorStop(0,"rgba(34, 42, 48, .42)"),ge.addColorStop(.34,"rgba(45, 50, 53, .22)"),ge.addColorStop(1,"rgba(65, 62, 57, 0)"),O.fillStyle=ge,O.fillRect(0,0,ee.width,ee.height),new ad(ee)}function Pt(){var ge;if(!((ge=I.value)!=null&&ge.image)||!me)return;const ee=++Ue;new hy().load(I.value.image,ue=>{if(ee!==Ue){ue.dispose();return}const ut=De(ue.image);ue.dispose(),je==null||je.dispose(),je=ut,B()},void 0,()=>{je==null||je.dispose(),je=null,B()})}function Wt(){if(z||!A.value)return;const ee=A.value.clientWidth||640,O=A.value.clientHeight||520;me=new ny,me.background=new ot(a.value==="home"?1059917:16051940),Te=new Nn(35,ee/O,.1,100),Te.position.set(0,1.6,5.35),z=new nE({antialias:!0,preserveDrawingBuffer:!0}),z.setPixelRatio(Math.min(window.devicePixelRatio,2)),z.setSize(ee,O),z.shadowMap.enabled=!0,z.shadowMap.type=Qn,z.outputColorSpace=vn,z.toneMapping=hh,z.toneMappingExposure=a.value==="home"?1.05:1.12,A.value.appendChild(z.domElement),me.add(new py(a.value==="home"?16249576:16775405,a.value==="home"?1522532:6320512,1.05));const ge=new fd(16772562,a.value==="home"?2.8:2.7);ge.position.set(3.6,5.2,4.5),ge.castShadow=!0,ge.shadow.mapSize.set(2048,2048),ge.shadow.camera.left=-2.8,ge.shadow.camera.right=2.8,ge.shadow.camera.top=3.2,ge.shadow.camera.bottom=-2.4,ge.shadow.bias=-5e-5,ge.shadow.normalBias=.025,ge.shadow.radius=7,ge.shadow.blurSamples=12,me.add(ge);const ue=new _y(14215669,a.value==="home"?1.8:2.2,3.2,4.2);ue.position.set(-3.4,1.7,3.2),ue.lookAt(0,0,0),me.add(ue);const ut=new fd(14477823,1.15);ut.position.set(-2.4,3.4,-3.2),me.add(ut);const mt=new Lt(new Xi(200,200),new oy({opacity:a.value==="home"?.3:.17}));mt.rotation.x=-Math.PI/2,mt.position.y=-1.305,mt.receiveShadow=!0,me.add(mt);const Dt=new Lt(new Xi(1.7,.72),new Uc({map:Je(),transparent:!0,opacity:a.value==="home"?.38:.25,depthWrite:!1}));Dt.rotation.x=-Math.PI/2,Dt.rotation.z=-.1,Dt.position.set(-.08,-1.29,.08),me.add(Dt),ye=new sE(Te,z.domElement),ye.enableDamping=!0,ye.dampingFactor=.08,ye.minDistance=3,ye.maxDistance=8,ye.target.set(0,.08,0),ye.addEventListener("start",()=>{y.value=!1}),Me=new ResizeObserver(()=>{if(!z||!A.value)return;const Ht=A.value.clientWidth,Zt=A.value.clientHeight;Te.aspect=Ht/Zt,Te.updateProjectionMatrix(),z.setSize(Ht,Zt)}),Me.observe(A.value),R.value=!0,B(),Pt(),ct()}function ct(){re=window.requestAnimationFrame(ct),ye==null||ye.update(),z==null||z.render(me,Te)}function Mn(){if(!z)return;z.render(me,Te);const ee=document.createElement("a");ee.download=`patternx-${I.value.name}-${l.value}.png`,ee.href=z.domElement.toDataURL("image/png"),ee.click(),Xe("渲染图已导出")}function Cn(){window.cancelAnimationFrame(re),Me==null||Me.disconnect(),ye==null||ye.dispose(),je==null||je.dispose(),z==null||z.dispose(),z==null||z.domElement.remove(),z=null,me=null,Te=null,ye=null,Ie=null,je=null}return si(o,()=>{(a.value==="home"||a.value==="studio")&&Pt()}),si(l,()=>B()),si(S,Re,{deep:!0}),si(y,ee=>{ye&&(ye.enabled=!ee)}),si(a,ee=>{Cn(),R.value=!1,(ee==="home"||ee==="studio")&&pl(Wt)}),pr(()=>{(a.value==="home"||a.value==="studio")&&pl(Wt)}),Ts(()=>{window.clearTimeout(ne),window.clearTimeout(Y),window.clearTimeout(se),Cn()}),(ee,O)=>{var ge;return oe(),xe("section",_E,[m("div",vE,[m("header",xE,[m("button",{class:"patternx-brand",type:"button",onClick:O[0]||(O[0]=ue=>T("/"))},[...O[22]||(O[22]=[m("img",{class:"patternx-brand-logo",src:ih,alt:"大临蓝印"},null,-1),m("span",null,[m("strong",null,"大临蓝印"),m("small",null,"非遗纹样数字化平台")],-1)])]),m("nav",yE,[m("button",{type:"button",onClick:O[1]||(O[1]=ue=>T("/"))},"主站首页"),m("button",{type:"button",onClick:ae},"蓝印纹库"),(oe(),xe(rt,null,xt([{key:"home",label:"工坊首页"},{key:"studio",label:"3D 创作"},{key:"upload",label:"智能采集"}],ue=>m("button",{key:ue.key,type:"button",class:bt({active:a.value===ue.key}),onClick:ut=>k(ue.key)},he(ue.label),11,ME)),64))]),m("button",{class:"patternx-nav-search",type:"button","aria-label":"返回蓝印纹库",title:"返回蓝印纹库",onClick:ae},[Ee(de(Ms),{size:20})])]),m("main",bE,[a.value==="home"?(oe(),xe("section",SE,[m("section",EE,[m("div",TE,[O[25]||(O[25]=m("p",{class:"patternx-kicker"},"HERITAGE · PATTERN · FUTURE",-1)),O[26]||(O[26]=m("h1",null,[tt("让千年纹样"),m("br"),tt("重新流动"),m("span",{class:"patternx-seal"},[tt("非"),m("br"),tt("遗")])],-1)),O[27]||(O[27]=m("div",{class:"patternx-landing-subtitle"},[m("i"),m("strong",null,"非遗纹样数字资产平台"),m("i")],-1)),O[28]||(O[28]=m("p",{class:"patternx-landing-description"},[tt("采集、溯源、再设计，让传统纹样进入现代创作。"),m("br"),tt("以数字之名，传承东方美学，赋能当代设计。")],-1)),m("div",wE,[m("button",{class:"patternx-button primary",type:"button",onClick:ae},[O[23]||(O[23]=tt("从蓝印纹库选纹 ",-1)),Ee(de(ai),{size:17})]),m("button",{class:"patternx-button secondary",type:"button",onClick:O[2]||(O[2]=ue=>k("studio"))},[O[24]||(O[24]=tt("进入 3D 工坊 ",-1)),Ee(de(ds),{size:17})])])]),m("div",AE,[m("div",CE,[Ee(de(ds),{size:16}),O[29]||(O[29]=tt(" 3D 实时预览",-1))]),O[40]||(O[40]=m("div",{class:"patternx-preview-rings","aria-hidden":"true"},[m("i"),m("i")],-1)),m("div",{ref_key:"canvasHost",ref:A,class:"patternx-landing-canvas patternx-canvas",onPointerdown:ie,onPointermove:ce,onPointerup:Ce,onPointercancel:Ce,onPointerleave:Ce},[R.value?Rt("",!0):(oe(),xe("div",RE,[...O[30]||(O[30]=[m("span",{class:"patternx-spinner"},null,-1),m("p",null,"正在准备 3D 预览...",-1)])]))],544),m("aside",PE,[m("div",null,[m("h2",null,he(I.value.name),1),m("button",{type:"button","aria-label":"收藏纹样",onClick:O[3]||(O[3]=ue=>W(I.value))},[Ee(de(Cu),{size:18,fill:C.value.has(I.value.id)?"currentColor":"none"},null,8,["fill"])])]),m("p",null,[O[31]||(O[31]=m("span",null,"年代",-1)),tt(he(I.value.era),1)]),m("p",null,[O[32]||(O[32]=m("span",null,"分类",-1)),tt(he(I.value.categoryName),1)]),m("p",null,[O[33]||(O[33]=m("span",null,"寓意",-1)),tt(he(I.value.meaning),1)]),m("p",null,[O[34]||(O[34]=m("span",null,"应用",-1)),tt(he(I.value.modernUse.slice(0,2).join(" / ")),1)])]),m("button",{class:"patternx-pattern-switch",type:"button",onClick:te},[m("img",{src:I.value.image,alt:I.value.name},null,8,DE),O[35]||(O[35]=m("span",null,"更换纹样",-1))]),m("div",LE,[m("button",{type:"button",title:"旋转模型",onClick:O[4]||(O[4]=ue=>S.rotate=(S.rotate+45)%360)},[Ee(de(Lu),{size:18}),O[36]||(O[36]=m("span",null,"旋转",-1))]),m("button",{type:"button",title:"重置视角",onClick:le},[Ee(de(Do),{size:18}),O[37]||(O[37]=m("span",null,"重置",-1))]),m("button",{type:"button",title:"全屏预览",onClick:v},[Ee(de(Pu),{size:18}),O[38]||(O[38]=m("span",null,"全屏",-1))])]),m("p",IE,[Ee(de(Do),{size:14}),O[39]||(O[39]=tt(" 拖拽旋转 · 滚轮缩放 · 点击更换纹样",-1))])])]),m("section",UE,[(oe(),xe(rt,null,xt(X,ue=>m("button",{key:ue.title,type:"button",onClick:ut=>Q(ue)},[m("span",FE,[(oe(),Nt(Js(ue.icon),{size:28}))]),m("span",null,[m("strong",null,he(ue.title),1),m("small",null,he(ue.description),1),m("em",null,[tt(he(ue.action)+" ",1),Ee(de(ai),{size:14})])])],8,NE)),64))]),m("section",OE,[m("div",kE,[O[42]||(O[42]=m("div",null,[m("h2",null,"动物纹创作精选"),m("p",null,"图片与蓝印纹库保持一致")],-1)),m("button",{type:"button",class:"patternx-text-button",onClick:ae},[O[41]||(O[41]=tt("查看动物纹 ",-1)),Ee(de(ai),{size:15})])]),m("div",BE,[(oe(!0),xe(rt,null,xt(N.value,ue=>(oe(),xe("article",{key:ue.id,class:"patternx-popular-card",onClick:ut=>J(ue)},[m("button",{type:"button",class:"patternx-popular-image",onClick:Yt(ut=>J(ue),["stop"])},[m("img",{src:ue.image,alt:ue.name},null,8,VE)],8,HE),m("div",null,[m("h3",null,he(ue.name),1),m("small",null,he(ue.era)+" · "+he(ue.categoryName),1),m("p",null,he(ue.meaning),1),m("footer",null,[m("span",null,[Ee(de(Cu),{size:14}),tt(" "+he(ue.likes),1)]),m("button",{type:"button","aria-label":"查看纹样详情",onClick:Yt(ut=>J(ue),["stop"])},[Ee(de(ai),{size:15})],8,GE)])])],8,zE))),128))])])])):a.value==="upload"?(oe(),xe("section",WE,[O[50]||(O[50]=m("header",{class:"patternx-page-header compact-header"},[m("p",{class:"patternx-kicker"},"COLLECT / EXTRACT / PRESERVE"),m("h1",null,"上传纹样"),m("p",null,"拍摄或上传一张带有传统纹样的图片，开始你的数字采集。")],-1)),f.value?Rt("",!0):(oe(),xe("div",{key:0,class:"patternx-upload-zone",role:"button",tabindex:"0",onClick:j,onKeydown:nh(j,["enter"]),onDragover:O[5]||(O[5]=Yt(()=>{},["prevent"])),onDrop:Yt(q,["prevent"])},[Ee(de(Rg),{size:42}),O[43]||(O[43]=m("h2",null,"拖拽图片到这里，或点击上传",-1)),O[44]||(O[44]=m("p",null,"支持 JPG、PNG 等常见图片格式，建议纹样清晰、主体完整",-1)),O[45]||(O[45]=m("span",null,"选择本地文件",-1))],32)),m("input",{ref_key:"fileInput",ref:d,class:"patternx-hidden-input",type:"file",accept:".jpg,.jpeg,.png,.html,.txt,.md,image/jpeg,image/png,text/html,text/plain,text/markdown",onChange:be},null,544),f.value?(oe(),xe("div",XE,[m("div",$E,[m("div",jE,[Ee(de(Ru),{size:18}),O[46]||(O[46]=tt(" 原图",-1))]),m("div",qE,[m("img",{src:f.value,alt:M.value},null,8,YE)])]),m("div",KE,[m("div",ZE,[Ee(de(rr),{size:18}),O[47]||(O[47]=tt(" 纹样提取结果",-1))]),m("div",JE,[p.value?(oe(),xe("img",{key:0,src:p.value,alt:"纹样提取结果"},null,8,QE)):(oe(),xe("span",eT))]),m("p",{class:bt(["patternx-status",{complete:!h.value}])},he(g.value),3)])])):Rt("",!0),f.value?(oe(),xe("div",tT,[m("button",{class:"patternx-button primary",type:"button",disabled:h.value,onClick:pe},[O[48]||(O[48]=tt("用于 3D 创作 ",-1)),Ee(de(Au),{size:17})],8,nT),m("button",{class:"patternx-button secondary",type:"button",onClick:ze},[O[49]||(O[49]=tt("重新上传 ",-1)),Ee(de(ar),{size:17})])])):Rt("",!0)])):(oe(),xe("section",iT,[O[65]||(O[65]=m("header",{class:"patternx-studio-header"},[m("p",{class:"patternx-kicker"},"TEXTURE / FORM / MOTION"),m("h1",null,"3D 工坊"),m("p",null,"选择纹样和载体，实时预览三维效果。拖拽画布旋转载体，滚轮缩放查看细节。")],-1)),m("div",sT,[m("aside",rT,[m("section",aT,[m("div",oT,[Ee(de(rr),{size:18}),O[51]||(O[51]=tt(" 选择纹样",-1))]),m("div",lT,[(oe(!0),xe(rt,null,xt(U.value,ue=>(oe(),xe("button",{key:ue.id,type:"button",class:bt({selected:o.value===ue.id}),onClick:ut=>F(ue)},[m("span",uT,[ue.image?(oe(),xe("img",{key:0,src:ue.image,alt:ue.name},null,8,dT)):Rt("",!0)]),m("span",null,he(ue.name),1),o.value===ue.id?(oe(),Nt(de(Au),{key:0,size:15})):Rt("",!0)],10,cT))),128))]),m("button",{class:"patternx-library-return",type:"button",onClick:ae},[Ee(de(Ms),{size:14}),O[52]||(O[52]=tt(" 返回蓝印纹库选纹",-1))])]),m("section",fT,[m("div",hT,[Ee(de(Du),{size:18}),O[53]||(O[53]=tt(" 选择载体",-1))]),m("div",pT,[(oe(),xe(rt,null,xt(D,ue=>m("button",{key:ue.key,type:"button",class:bt({selected:l.value===ue.key}),onClick:ut=>l.value=ue.key},[(oe(),Nt(Js(ue.icon),{size:22})),m("span",null,he(ue.label),1)],10,mT)),64))])]),m("section",gT,[m("div",_T,[Ee(de(Iu),{size:18}),O[54]||(O[54]=tt(" 调整参数",-1))]),(oe(),xe(rt,null,xt(Be,ue=>m("label",{key:ue.key,class:"patternx-slider"},[m("span",null,he(ue.label),1),_f(m("input",{"onUpdate:modelValue":ut=>S[ue.key]=ut,type:"range",min:ue.min,max:ue.max,step:ue.step},null,8,vT),[[th,S[ue.key],void 0,{number:!0}]]),m("output",null,he(Ae(ue.key)),1)])),64))])]),m("div",xT,[m("div",{ref_key:"canvasHost",ref:A,class:bt(["patternx-canvas studio-workspace",[`model-${l.value}`,{"texture-drag-active":y.value}]]),onPointerdown:ie,onPointermove:ce,onPointerup:Ce,onPointercancel:Ce,onPointerleave:Ce},[R.value?Rt("",!0):(oe(),xe("div",yT,[...O[55]||(O[55]=[m("span",{class:"patternx-spinner"},null,-1),m("p",null,"正在准备 3D 工坊...",-1)])])),m("div",MT,[m("button",{type:"button",title:"重置场景","aria-label":"重置场景",onPointerdown:O[6]||(O[6]=Yt(()=>{},["stop"])),onClick:le},[Ee(de(Gg),{size:19})],32),O[56]||(O[56]=m("i",null,null,-1)),m("button",{type:"button",title:"实体视图","aria-label":"实体视图",class:bt({active:!Se.value}),onPointerdown:O[7]||(O[7]=Yt(()=>{},["stop"])),onClick:O[8]||(O[8]=ue=>Se.value&&x())},[Ee(de(ds),{size:18})],34),m("button",{type:"button",title:"线框视图","aria-label":"线框视图",class:bt({active:Se.value}),onPointerdown:O[9]||(O[9]=Yt(()=>{},["stop"])),onClick:x},[Ee(de(Iu),{size:18})],34),O[57]||(O[57]=m("i",null,null,-1)),m("button",{type:"button",title:"全屏预览","aria-label":"全屏预览",onPointerdown:O[10]||(O[10]=Yt(()=>{},["stop"])),onClick:v},[Ee(de(Pu),{size:19})],32)]),m("button",{class:bt(["patternx-drag-toggle",{active:y.value}]),type:"button",onPointerdown:O[11]||(O[11]=Yt(()=>{},["stop"])),onClick:O[12]||(O[12]=ue=>y.value=!y.value)},"纹样贴图："+he(y.value?"开":"关"),35),m("div",bT,[m("button",{type:"button",title:"放大","aria-label":"放大",onPointerdown:O[13]||(O[13]=Yt(()=>{},["stop"])),onClick:O[14]||(O[14]=ue=>Z(-1))},[Ee(de(lh),{size:19}),O[58]||(O[58]=m("span",null,"缩放",-1))],32),m("button",{type:"button",title:"缩小","aria-label":"缩小",onPointerdown:O[15]||(O[15]=Yt(()=>{},["stop"])),onClick:O[16]||(O[16]=ue=>Z(1))},[Ee(de(Xg),{size:19}),O[59]||(O[59]=m("span",null,"缩小",-1))],32),m("button",{type:"button",title:"旋转 45 度","aria-label":"旋转 45 度",onPointerdown:O[17]||(O[17]=Yt(()=>{},["stop"])),onClick:O[18]||(O[18]=ue=>S.rotate=(S.rotate+45)%360)},[Ee(de(Lu),{size:19}),O[60]||(O[60]=m("span",null,"旋转",-1))],32),m("button",{type:"button",title:"拖动纹样","aria-label":"拖动纹样",class:bt({active:y.value}),onPointerdown:O[19]||(O[19]=Yt(()=>{},["stop"])),onClick:O[20]||(O[20]=ue=>y.value=!y.value)},[Ee(de(Fg),{size:19}),O[61]||(O[61]=m("span",null,"平移",-1))],34),m("button",{type:"button",title:"复位","aria-label":"复位",onPointerdown:O[21]||(O[21]=Yt(()=>{},["stop"])),onClick:le},[Ee(de(Do),{size:19}),O[62]||(O[62]=m("span",null,"复位",-1))],32)]),m("div",ST,[m("div",null,[m("strong",null,he(I.value.name),1),m("small",null,he((ge=D.find(ue=>ue.key===l.value))==null?void 0:ge.label)+" · 实时预览",1)]),m("img",{src:I.value.image,alt:I.value.name},null,8,ET)])],34),m("div",TT,[m("div",null,[m("strong",null,he(I.value.name),1),m("span",null,he(I.value.meaning),1),O[63]||(O[63]=m("i",null,null,-1))]),m("button",{class:"patternx-button primary",type:"button",onClick:Mn},[Ee(de(bl),{size:18}),O[64]||(O[64]=tt(" 导出渲染图",-1))])])])]),m("footer",wT,[(oe(),xe(rt,null,xt(We,ue=>m("article",{key:ue.title},[m("span",null,[(oe(),Nt(Js(ue.icon),{size:24}))]),m("div",null,[m("strong",null,he(ue.title),1),m("small",null,he(ue.description),1)])])),64))])]))])]),Ee(Sc,{name:"file-alert"},{default:lo(()=>[u.value?(oe(),xe("div",AT,[m("span",CT,[Ee(de(Ag),{size:18})]),m("span",RT,he(u.value),1),m("button",{type:"button","aria-label":"关闭文件格式提示",onClick:P},[Ee(de(ar),{size:20})])])):Rt("",!0)]),_:1}),c.value?(oe(),xe("div",PT,he(c.value),1)):Rt("",!0)])}}},LT=ia(DT,[["__scopeId","data-v-ca6dad36"]]),IT={class:"app-shell"},UT={__name:"App",setup(n){const{routeName:e,routePath:t,navigate:i}=Jg(),s=Qe("all"),r=Et(()=>decodeURIComponent(t.value.replace("/pattern/",""))),a=Et(()=>xn.some(u=>u.id===r.value));function o(u){i(`/pattern/${u.id}`)}function l(u){s.value=u}function c(u){i(`/patternx?pattern=${encodeURIComponent(u.id)}&view=studio`)}return(u,d)=>(oe(),xe("div",IT,[de(e)!=="find-game"&&de(e)!=="find-card"&&de(e)!=="patternx"?(oe(),Nt(Zg,{key:0,"route-name":de(e),"route-path":de(t),onNavigate:de(i)},null,8,["route-name","route-path","onNavigate"])):Rt("",!0),Ee(Sc,{name:"page",mode:"out-in"},{default:lo(()=>[(oe(),xe("main",{key:de(e)+de(t),class:bt(["page",{"page-find-menu":de(e)==="find-menu"}])},[de(e)==="home"?(oe(),Nt(Uu,{key:0,onNavigate:de(i),onOpenPattern:o,onSelectCategory:l,onCreatePattern:c},null,8,["onNavigate"])):de(e)==="library"?(oe(),Nt(mv,{key:1,"initial-category":s.value,onOpenPattern:o,onCreatePattern:c},null,8,["initial-category"])):de(e)==="pattern"&&a.value?(oe(),Nt(Av,{key:2,"pattern-id":r.value,onNavigate:de(i),onOpenPattern:o,onCreatePattern:c},null,8,["pattern-id","onNavigate"])):de(e)==="heritage"?(oe(),Nt(c0,{key:3})):de(e)==="find-menu"?(oe(),Nt(j_,{key:4,onNavigate:de(i)},null,8,["onNavigate"])):de(e)==="find-card"?(oe(),Nt(h_,{key:5,onNavigate:de(i)},null,8,["onNavigate"])):de(e)==="find-game"?(oe(),Nt(I_,{key:6,onNavigate:de(i)},null,8,["onNavigate"])):de(e)==="patternx"?(oe(),Nt(LT,{key:7,onNavigate:de(i),onSelectCategory:l},null,8,["onNavigate"])):(oe(),Nt(Uu,{key:8,onNavigate:de(i),onOpenPattern:o,onSelectCategory:l,onCreatePattern:c},null,8,["onNavigate"]))],2))]),_:1}),de(e)!=="home"&&de(e)!=="find-menu"&&de(e)!=="find-card"&&de(e)!=="patternx"?(oe(),Nt(Sg,{key:1,onNavigate:de(i)},null,8,["onNavigate"])):Rt("",!0)]))}};xg(UT).mount("#app");
