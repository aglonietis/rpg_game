var Fp=Object.defineProperty;var Bp=(n,e,t)=>e in n?Fp(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var wt=(n,e,t)=>Bp(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.11
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function pc(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const it={},gr=[],Cn=()=>{},zp=()=>!1,Go=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),mc=n=>n.startsWith("onUpdate:"),At=Object.assign,gc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Hp=Object.prototype.hasOwnProperty,Ze=(n,e)=>Hp.call(n,e),He=Array.isArray,Kr=n=>Wo(n)==="[object Map]",kp=n=>Wo(n)==="[object Set]",ze=n=>typeof n=="function",St=n=>typeof n=="string",Ir=n=>typeof n=="symbol",ht=n=>n!==null&&typeof n=="object",bh=n=>(ht(n)||ze(n))&&ze(n.then)&&ze(n.catch),Vp=Object.prototype.toString,Wo=n=>Vp.call(n),Gp=n=>Wo(n).slice(8,-1),Wp=n=>Wo(n)==="[object Object]",_c=n=>St(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,jr=pc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Xo=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Xp=/-(\w)/g,an=Xo(n=>n.replace(Xp,(e,t)=>t?t.toUpperCase():"")),qp=/\B([A-Z])/g,qi=Xo(n=>n.replace(qp,"-$1").toLowerCase()),qo=Xo(n=>n.charAt(0).toUpperCase()+n.slice(1)),ua=Xo(n=>n?`on${qo(n)}`:""),gi=(n,e)=>!Object.is(n,e),fa=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Th=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Yp=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let hu;const Ah=()=>hu||(hu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function vc(n){if(He(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=St(i)?Zp(i):vc(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(St(n)||ht(n))return n}const $p=/;(?![^(]*\))/g,Kp=/:([^]+)/,jp=/\/\*[^]*?\*\//g;function Zp(n){const e={};return n.replace(jp,"").split($p).forEach(t=>{if(t){const i=t.split(Kp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function xc(n){let e="";if(St(n))e=n;else if(He(n))for(let t=0;t<n.length;t++){const i=xc(n[t]);i&&(e+=i+" ")}else if(ht(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Jp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Qp=pc(Jp);function wh(n){return!!n||n===""}/**
* @vue/reactivity v3.5.11
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Zt;class Rh{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Zt,!e&&Zt&&(this.index=(Zt.scopes||(Zt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Zt;try{return Zt=this,e()}finally{Zt=t}}}on(){Zt=this}off(){Zt=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function em(n){return new Rh(n)}function tm(){return Zt}let rt;const ha=new WeakSet;class Ch{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Zt&&Zt.active&&Zt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ha.has(this)&&(ha.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Lh(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,du(this),Dh(this);const e=rt,t=vn;rt=this,vn=!0;try{return this.fn()}finally{Ih(this),rt=e,vn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Mc(e);this.deps=this.depsTail=void 0,du(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ha.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){al(this)&&this.run()}get dirty(){return al(this)}}let Ph=0,Zr,Jr;function Lh(n,e=!1){if(n.flags|=8,e){n.next=Jr,Jr=n;return}n.next=Zr,Zr=n}function Sc(){Ph++}function yc(){if(--Ph>0)return;if(Jr){let e=Jr;for(Jr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Zr;){let e=Zr;for(Zr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Dh(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Ih(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Mc(i),nm(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function al(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Uh(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Uh(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===ls))return;n.globalVersion=ls;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!al(n)){n.flags&=-3;return}const t=rt,i=vn;rt=n,vn=!0;try{Dh(n);const r=n.fn(n._value);(e.version===0||gi(r,n._value))&&(n._value=r,e.version++)}catch(r){throw e.version++,r}finally{rt=t,vn=i,Ih(n),n.flags&=-3}}function Mc(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i),!t.subs&&t.computed){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Mc(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function nm(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let vn=!0;const Nh=[];function vi(){Nh.push(vn),vn=!1}function xi(){const n=Nh.pop();vn=n===void 0?!0:n}function du(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=rt;rt=void 0;try{e()}finally{rt=t}}}let ls=0;class im{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ec{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!rt||!vn||rt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==rt)t=this.activeLink=new im(rt,this),rt.deps?(t.prevDep=rt.depsTail,rt.depsTail.nextDep=t,rt.depsTail=t):rt.deps=rt.depsTail=t,Oh(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=rt.depsTail,t.nextDep=void 0,rt.depsTail.nextDep=t,rt.depsTail=t,rt.deps===t&&(rt.deps=i)}return t}trigger(e){this.version++,ls++,this.notify(e)}notify(e){Sc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{yc()}}}function Oh(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Oh(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const ll=new WeakMap,Hi=Symbol(""),cl=Symbol(""),cs=Symbol("");function It(n,e,t){if(vn&&rt){let i=ll.get(n);i||ll.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Ec),r.map=i,r.key=t),r.track()}}function Yn(n,e,t,i,r,s){const o=ll.get(n);if(!o){ls++;return}const a=l=>{l&&l.trigger()};if(Sc(),e==="clear")o.forEach(a);else{const l=He(n),c=l&&_c(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===cs||!Ir(h)&&h>=u)&&a(f)})}else switch(t!==void 0&&a(o.get(t)),c&&a(o.get(cs)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Hi)),Kr(n)&&a(o.get(cl)));break;case"delete":l||(a(o.get(Hi)),Kr(n)&&a(o.get(cl)));break;case"set":Kr(n)&&a(o.get(Hi));break}}yc()}function Ki(n){const e=Qe(n);return e===n?e:(It(e,"iterate",cs),xn(n)?e:e.map(Ft))}function bc(n){return It(n=Qe(n),"iterate",cs),n}const rm={__proto__:null,[Symbol.iterator](){return da(this,Symbol.iterator,Ft)},concat(...n){return Ki(this).concat(...n.map(e=>He(e)?Ki(e):e))},entries(){return da(this,"entries",n=>(n[1]=Ft(n[1]),n))},every(n,e){return Nn(this,"every",n,e,void 0,arguments)},filter(n,e){return Nn(this,"filter",n,e,t=>t.map(Ft),arguments)},find(n,e){return Nn(this,"find",n,e,Ft,arguments)},findIndex(n,e){return Nn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Nn(this,"findLast",n,e,Ft,arguments)},findLastIndex(n,e){return Nn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Nn(this,"forEach",n,e,void 0,arguments)},includes(...n){return pa(this,"includes",n)},indexOf(...n){return pa(this,"indexOf",n)},join(n){return Ki(this).join(n)},lastIndexOf(...n){return pa(this,"lastIndexOf",n)},map(n,e){return Nn(this,"map",n,e,void 0,arguments)},pop(){return Fr(this,"pop")},push(...n){return Fr(this,"push",n)},reduce(n,...e){return pu(this,"reduce",n,e)},reduceRight(n,...e){return pu(this,"reduceRight",n,e)},shift(){return Fr(this,"shift")},some(n,e){return Nn(this,"some",n,e,void 0,arguments)},splice(...n){return Fr(this,"splice",n)},toReversed(){return Ki(this).toReversed()},toSorted(n){return Ki(this).toSorted(n)},toSpliced(...n){return Ki(this).toSpliced(...n)},unshift(...n){return Fr(this,"unshift",n)},values(){return da(this,"values",Ft)}};function da(n,e,t){const i=bc(n),r=i[e]();return i!==n&&!xn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=t(s.value)),s}),r}const sm=Array.prototype;function Nn(n,e,t,i,r,s){const o=bc(n),a=o!==n&&!xn(n),l=o[e];if(l!==sm[e]){const f=l.apply(n,s);return a?Ft(f):f}let c=t;o!==n&&(a?c=function(f,h){return t.call(this,Ft(f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function pu(n,e,t,i){const r=bc(n);let s=t;return r!==n&&(xn(n)?t.length>3&&(s=function(o,a,l){return t.call(this,o,a,l,n)}):s=function(o,a,l){return t.call(this,o,Ft(a),l,n)}),r[e](s,...i)}function pa(n,e,t){const i=Qe(n);It(i,"iterate",cs);const r=i[e](...t);return(r===-1||r===!1)&&Rc(t[0])?(t[0]=Qe(t[0]),i[e](...t)):r}function Fr(n,e,t=[]){vi(),Sc();const i=Qe(n)[e].apply(n,t);return yc(),xi(),i}const om=pc("__proto__,__v_isRef,__isVue"),Fh=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Ir));function am(n){Ir(n)||(n=String(n));const e=Qe(this);return It(e,"has",n),e.hasOwnProperty(n)}class Bh{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Sm:Vh:s?kh:Hh).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=He(e);if(!r){let l;if(o&&(l=rm[t]))return l;if(t==="hasOwnProperty")return am}const a=Reflect.get(e,t,Dt(e)?e:i);return(Ir(t)?Fh.has(t):om(t))||(r||It(e,"get",t),s)?a:Dt(a)?o&&_c(t)?a:a.value:ht(a)?r?Wh(a):$o(a):a}}class zh extends Bh{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];if(!this._isShallow){const l=Vi(s);if(!xn(i)&&!Vi(i)&&(s=Qe(s),i=Qe(i)),!He(e)&&Dt(s)&&!Dt(i))return l?!1:(s.value=i,!0)}const o=He(e)&&_c(t)?Number(t)<e.length:Ze(e,t),a=Reflect.set(e,t,i,Dt(e)?e:r);return e===Qe(r)&&(o?gi(i,s)&&Yn(e,"set",t,i):Yn(e,"add",t,i)),a}deleteProperty(e,t){const i=Ze(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Yn(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Ir(t)||!Fh.has(t))&&It(e,"has",t),i}ownKeys(e){return It(e,"iterate",He(e)?"length":Hi),Reflect.ownKeys(e)}}class lm extends Bh{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const cm=new zh,um=new lm,fm=new zh(!0);const Tc=n=>n,Yo=n=>Reflect.getPrototypeOf(n);function Cs(n,e,t=!1,i=!1){n=n.__v_raw;const r=Qe(n),s=Qe(e);t||(gi(e,s)&&It(r,"get",e),It(r,"get",s));const{has:o}=Yo(r),a=i?Tc:t?Cc:Ft;if(o.call(r,e))return a(n.get(e));if(o.call(r,s))return a(n.get(s));n!==r&&n.get(e)}function Ps(n,e=!1){const t=this.__v_raw,i=Qe(t),r=Qe(n);return e||(gi(n,r)&&It(i,"has",n),It(i,"has",r)),n===r?t.has(n):t.has(n)||t.has(r)}function Ls(n,e=!1){return n=n.__v_raw,!e&&It(Qe(n),"iterate",Hi),Reflect.get(n,"size",n)}function mu(n,e=!1){!e&&!xn(n)&&!Vi(n)&&(n=Qe(n));const t=Qe(this);return Yo(t).has.call(t,n)||(t.add(n),Yn(t,"add",n,n)),this}function gu(n,e,t=!1){!t&&!xn(e)&&!Vi(e)&&(e=Qe(e));const i=Qe(this),{has:r,get:s}=Yo(i);let o=r.call(i,n);o||(n=Qe(n),o=r.call(i,n));const a=s.call(i,n);return i.set(n,e),o?gi(e,a)&&Yn(i,"set",n,e):Yn(i,"add",n,e),this}function _u(n){const e=Qe(this),{has:t,get:i}=Yo(e);let r=t.call(e,n);r||(n=Qe(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&Yn(e,"delete",n,void 0),s}function vu(){const n=Qe(this),e=n.size!==0,t=n.clear();return e&&Yn(n,"clear",void 0,void 0),t}function Ds(n,e){return function(i,r){const s=this,o=s.__v_raw,a=Qe(o),l=e?Tc:n?Cc:Ft;return!n&&It(a,"iterate",Hi),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function Is(n,e,t){return function(...i){const r=this.__v_raw,s=Qe(r),o=Kr(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?Tc:e?Cc:Ft;return!e&&It(s,"iterate",l?cl:Hi),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Qn(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function hm(){const n={get(s){return Cs(this,s)},get size(){return Ls(this)},has:Ps,add:mu,set:gu,delete:_u,clear:vu,forEach:Ds(!1,!1)},e={get(s){return Cs(this,s,!1,!0)},get size(){return Ls(this)},has:Ps,add(s){return mu.call(this,s,!0)},set(s,o){return gu.call(this,s,o,!0)},delete:_u,clear:vu,forEach:Ds(!1,!0)},t={get(s){return Cs(this,s,!0)},get size(){return Ls(this,!0)},has(s){return Ps.call(this,s,!0)},add:Qn("add"),set:Qn("set"),delete:Qn("delete"),clear:Qn("clear"),forEach:Ds(!0,!1)},i={get(s){return Cs(this,s,!0,!0)},get size(){return Ls(this,!0)},has(s){return Ps.call(this,s,!0)},add:Qn("add"),set:Qn("set"),delete:Qn("delete"),clear:Qn("clear"),forEach:Ds(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Is(s,!1,!1),t[s]=Is(s,!0,!1),e[s]=Is(s,!1,!0),i[s]=Is(s,!0,!0)}),[n,t,e,i]}const[dm,pm,mm,gm]=hm();function Ac(n,e){const t=e?n?gm:mm:n?pm:dm;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Ze(t,r)&&r in i?t:i,r,s)}const _m={get:Ac(!1,!1)},vm={get:Ac(!1,!0)},xm={get:Ac(!0,!1)};const Hh=new WeakMap,kh=new WeakMap,Vh=new WeakMap,Sm=new WeakMap;function ym(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Mm(n){return n.__v_skip||!Object.isExtensible(n)?0:ym(Gp(n))}function $o(n){return Vi(n)?n:wc(n,!1,cm,_m,Hh)}function Gh(n){return wc(n,!1,fm,vm,kh)}function Wh(n){return wc(n,!0,um,xm,Vh)}function wc(n,e,t,i,r){if(!ht(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const o=Mm(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function Qr(n){return Vi(n)?Qr(n.__v_raw):!!(n&&n.__v_isReactive)}function Vi(n){return!!(n&&n.__v_isReadonly)}function xn(n){return!!(n&&n.__v_isShallow)}function Rc(n){return n?!!n.__v_raw:!1}function Qe(n){const e=n&&n.__v_raw;return e?Qe(e):n}function Xh(n){return!Ze(n,"__v_skip")&&Object.isExtensible(n)&&Th(n,"__v_skip",!0),n}const Ft=n=>ht(n)?$o(n):n,Cc=n=>ht(n)?Wh(n):n;function Dt(n){return n?n.__v_isRef===!0:!1}function wo(n){return Yh(n,!1)}function qh(n){return Yh(n,!0)}function Yh(n,e){return Dt(n)?n:new Em(n,e)}class Em{constructor(e,t){this.dep=new Ec,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Qe(e),this._value=t?e:Ft(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||xn(e)||Vi(e);e=i?e:Qe(e),gi(e,t)&&(this._rawValue=e,this._value=i?e:Ft(e),this.dep.trigger())}}function di(n){return Dt(n)?n.value:n}const bm={get:(n,e,t)=>e==="__v_raw"?n:di(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Dt(r)&&!Dt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function $h(n){return Qr(n)?n:new Proxy(n,bm)}class Tm{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Ec(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ls-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&rt!==this)return Lh(this,!0),!0}get value(){const e=this.dep.track();return Uh(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Am(n,e,t=!1){let i,r;return ze(n)?i=n:(i=n.get,r=n.set),new Tm(i,r,t)}const Us={},Ro=new WeakMap;let Li;function wm(n,e=!1,t=Li){if(t){let i=Ro.get(t);i||Ro.set(t,i=[]),i.push(n)}}function Rm(n,e,t=it){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=E=>r?E:xn(E)||r===!1||r===0?ui(E,1):ui(E);let u,f,h,d,_=!1,x=!1;if(Dt(n)?(f=()=>n.value,_=xn(n)):Qr(n)?(f=()=>c(n),_=!0):He(n)?(x=!0,_=n.some(E=>Qr(E)||xn(E)),f=()=>n.map(E=>{if(Dt(E))return E.value;if(Qr(E))return c(E);if(ze(E))return l?l(E,2):E()})):ze(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){vi();try{h()}finally{xi()}}const E=Li;Li=u;try{return l?l(n,3,[d]):n(d)}finally{Li=E}}:f=Cn,e&&r){const E=f,O=r===!0?1/0:r;f=()=>ui(E(),O)}const m=tm(),p=()=>{u.stop(),m&&gc(m.effects,u)};if(s&&e){const E=e;e=(...O)=>{E(...O),p()}}let A=x?new Array(n.length).fill(Us):Us;const y=E=>{if(!(!(u.flags&1)||!u.dirty&&!E))if(e){const O=u.run();if(r||_||(x?O.some((P,R)=>gi(P,A[R])):gi(O,A))){h&&h();const P=Li;Li=u;try{const R=[O,A===Us?void 0:x&&A[0]===Us?[]:A,d];l?l(e,3,R):e(...R),A=O}finally{Li=P}}}else u.run()};return a&&a(y),u=new Ch(f),u.scheduler=o?()=>o(y,!1):y,d=E=>wm(E,!1,u),h=u.onStop=()=>{const E=Ro.get(u);if(E){if(l)l(E,4);else for(const O of E)O();Ro.delete(u)}},e?i?y(!0):A=u.run():o?o(y.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function ui(n,e=1/0,t){if(e<=0||!ht(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Dt(n))ui(n.value,e,t);else if(He(n))for(let i=0;i<n.length;i++)ui(n[i],e,t);else if(kp(n)||Kr(n))n.forEach(i=>{ui(i,e,t)});else if(Wp(n)){for(const i in n)ui(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&ui(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.11
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ss(n,e,t,i){try{return i?n(...i):n()}catch(r){Ko(r,e,t)}}function Ln(n,e,t,i){if(ze(n)){const r=Ss(n,e,t,i);return r&&bh(r)&&r.catch(s=>{Ko(s,e,t)}),r}if(He(n)){const r=[];for(let s=0;s<n.length;s++)r.push(Ln(n[s],e,t,i));return r}}function Ko(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||it;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(s){vi(),Ss(s,null,10,[n,l,c]),xi();return}}Cm(n,t,r,i,o)}function Cm(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Bt=[];let Tn=-1;const _r=[];let ai=null,hr=0;const Kh=Promise.resolve();let Co=null;function jh(n){const e=Co||Kh;return n?e.then(this?n.bind(this):n):e}function Pm(n){let e=Tn+1,t=Bt.length;for(;e<t;){const i=e+t>>>1,r=Bt[i],s=us(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Pc(n){if(!(n.flags&1)){const e=us(n),t=Bt[Bt.length-1];!t||!(n.flags&2)&&e>=us(t)?Bt.push(n):Bt.splice(Pm(e),0,n),n.flags|=1,Zh()}}function Zh(){Co||(Co=Kh.then(Qh))}function Lm(n){He(n)?_r.push(...n):ai&&n.id===-1?ai.splice(hr+1,0,n):n.flags&1||(_r.push(n),n.flags|=1),Zh()}function xu(n,e,t=Tn+1){for(;t<Bt.length;t++){const i=Bt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Bt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Jh(n){if(_r.length){const e=[...new Set(_r)].sort((t,i)=>us(t)-us(i));if(_r.length=0,ai){ai.push(...e);return}for(ai=e,hr=0;hr<ai.length;hr++){const t=ai[hr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}ai=null,hr=0}}const us=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Qh(n){try{for(Tn=0;Tn<Bt.length;Tn++){const e=Bt[Tn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ss(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Tn<Bt.length;Tn++){const e=Bt[Tn];e&&(e.flags&=-2)}Tn=-1,Bt.length=0,Jh(),Co=null,(Bt.length||_r.length)&&Qh()}}let sn=null,ed=null;function Po(n){const e=sn;return sn=n,ed=n&&n.type.__scopeId||null,e}function Lo(n,e=sn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Ru(-1);const s=Po(e);let o;try{o=n(...r)}finally{Po(s),i._d&&Ru(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Ei(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(vi(),Ln(l,t,8,[n.el,a,n,e]),xi())}}const Dm=Symbol("_vte"),Im=n=>n.__isTeleport;function Lc(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Lc(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}/*! #__NO_SIDE_EFFECTS__ */function ys(n,e){return ze(n)?At({name:n.name},e,{setup:n}):n}function td(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Um(n){const e=Cg(),t=qh(null);if(e){const r=e.refs===it?e.refs={}:e.refs;Object.defineProperty(r,n,{enumerable:!0,get:()=>t.value,set:s=>t.value=s})}return t}function ul(n,e,t,i,r=!1){if(He(n)){n.forEach((_,x)=>ul(_,e&&(He(e)?e[x]:e),t,i,r));return}if(es(i)&&!r)return;const s=i.shapeFlag&4?Oc(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===it?a.refs={}:a.refs,f=a.setupState,h=Qe(f),d=f===it?()=>!1:_=>Ze(h,_);if(c!=null&&c!==l&&(St(c)?(u[c]=null,d(c)&&(f[c]=null)):Dt(c)&&(c.value=null)),ze(l))Ss(l,a,12,[o,u]);else{const _=St(l),x=Dt(l);if(_||x){const m=()=>{if(n.f){const p=_?d(l)?f[l]:u[l]:l.value;r?He(p)&&gc(p,s):He(p)?p.includes(s)||p.push(s):_?(u[l]=[s],d(l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else _?(u[l]=o,d(l)&&(f[l]=o)):x&&(l.value=o,n.k&&(u[n.k]=o))};o?(m.id=-1,jt(m,t)):m()}}}const es=n=>!!n.type.__asyncLoader,nd=n=>n.type.__isKeepAlive;function Nm(n,e){id(n,"a",e)}function Om(n,e){id(n,"da",e)}function id(n,e,t=Tt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(jo(e,i,t),t){let r=t.parent;for(;r&&r.parent;)nd(r.parent.vnode)&&Fm(i,e,t,r),r=r.parent}}function Fm(n,e,t,i){const r=jo(e,n,i,!0);ad(()=>{gc(i[e],r)},t)}function jo(n,e,t=Tt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{vi();const a=Ms(t),l=Ln(e,t,n,o);return a(),xi(),l});return i?r.unshift(s):r.push(s),s}}const Zn=n=>(e,t=Tt)=>{(!ea||n==="sp")&&jo(n,(...i)=>e(...i),t)},rd=Zn("bm"),sd=Zn("m"),Bm=Zn("bu"),zm=Zn("u"),od=Zn("bum"),ad=Zn("um"),Hm=Zn("sp"),km=Zn("rtg"),Vm=Zn("rtc");function Gm(n,e=Tt){jo("ec",n,e)}const Wm="components";function ld(n,e){return qm(Wm,n,!0,e)||n}const Xm=Symbol.for("v-ndc");function qm(n,e,t=!0,i=!1){const r=sn||Tt;if(r){const s=r.type;{const a=Ug(s,!1);if(a&&(a===e||a===an(e)||a===qo(an(e))))return s}const o=Su(r[n]||s[n],e)||Su(r.appContext[n],e);return!o&&i?s:o}}function Su(n,e){return n&&(n[e]||n[an(e)]||n[qo(an(e))])}const fl=n=>n?Rd(n)?Oc(n):fl(n.parent):null,ts=At(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>fl(n.parent),$root:n=>fl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Dc(n),$forceUpdate:n=>n.f||(n.f=()=>{Pc(n.update)}),$nextTick:n=>n.n||(n.n=jh.bind(n.proxy)),$watch:n=>dg.bind(n)}),ma=(n,e)=>n!==it&&!n.__isScriptSetup&&Ze(n,e),Ym={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(ma(i,e))return o[e]=1,i[e];if(r!==it&&Ze(r,e))return o[e]=2,r[e];if((c=n.propsOptions[0])&&Ze(c,e))return o[e]=3,s[e];if(t!==it&&Ze(t,e))return o[e]=4,t[e];hl&&(o[e]=0)}}const u=ts[e];let f,h;if(u)return e==="$attrs"&&It(n.attrs,"get",""),u(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==it&&Ze(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,Ze(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return ma(r,e)?(r[e]=t,!0):i!==it&&Ze(i,e)?(i[e]=t,!0):Ze(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==it&&Ze(n,o)||ma(e,o)||(a=s[0])&&Ze(a,o)||Ze(i,o)||Ze(ts,o)||Ze(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Ze(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function yu(n){return He(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let hl=!0;function $m(n){const e=Dc(n),t=n.proxy,i=n.ctx;hl=!1,e.beforeCreate&&Mu(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:_,activated:x,deactivated:m,beforeDestroy:p,beforeUnmount:A,destroyed:y,unmounted:E,render:O,renderTracked:P,renderTriggered:R,errorCaptured:U,serverPrefetch:re,expose:S,inheritAttrs:b,components:K,directives:q,filters:J}=e;if(c&&Km(c,i,null),o)for(const Q in o){const X=o[Q];ze(X)&&(i[Q]=X.bind(t))}if(r){const Q=r.call(t,t);ht(Q)&&(n.data=$o(Q))}if(hl=!0,s)for(const Q in s){const X=s[Q],ge=ze(X)?X.bind(t,t):ze(X.get)?X.get.bind(t,t):Cn,xe=!ze(X)&&ze(X.set)?X.set.bind(t):Cn,ve=dn({get:ge,set:xe});Object.defineProperty(i,Q,{enumerable:!0,configurable:!0,get:()=>ve.value,set:Oe=>ve.value=Oe})}if(a)for(const Q in a)cd(a[Q],i,t,Q);if(l){const Q=ze(l)?l.call(t):l;Reflect.ownKeys(Q).forEach(X=>{mo(X,Q[X])})}u&&Mu(u,n,"c");function W(Q,X){He(X)?X.forEach(ge=>Q(ge.bind(t))):X&&Q(X.bind(t))}if(W(rd,f),W(sd,h),W(Bm,d),W(zm,_),W(Nm,x),W(Om,m),W(Gm,U),W(Vm,P),W(km,R),W(od,A),W(ad,E),W(Hm,re),He(S))if(S.length){const Q=n.exposed||(n.exposed={});S.forEach(X=>{Object.defineProperty(Q,X,{get:()=>t[X],set:ge=>t[X]=ge})})}else n.exposed||(n.exposed={});O&&n.render===Cn&&(n.render=O),b!=null&&(n.inheritAttrs=b),K&&(n.components=K),q&&(n.directives=q),re&&td(n)}function Km(n,e,t=Cn){He(n)&&(n=dl(n));for(const i in n){const r=n[i];let s;ht(r)?"default"in r?s=$n(r.from||i,r.default,!0):s=$n(r.from||i):s=$n(r),Dt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Mu(n,e,t){Ln(He(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function cd(n,e,t,i){let r=i.includes(".")?Ed(t,i):()=>t[i];if(St(n)){const s=e[n];ze(s)&&go(r,s)}else if(ze(n))go(r,n.bind(t));else if(ht(n))if(He(n))n.forEach(s=>cd(s,e,t,i));else{const s=ze(n.handler)?n.handler.bind(t):e[n.handler];ze(s)&&go(r,s,n)}}function Dc(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>Do(l,c,o,!0)),Do(l,e,o)),ht(e)&&s.set(e,l),l}function Do(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Do(n,s,t,!0),r&&r.forEach(o=>Do(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=jm[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const jm={data:Eu,props:bu,emits:bu,methods:qr,computed:qr,beforeCreate:Nt,created:Nt,beforeMount:Nt,mounted:Nt,beforeUpdate:Nt,updated:Nt,beforeDestroy:Nt,beforeUnmount:Nt,destroyed:Nt,unmounted:Nt,activated:Nt,deactivated:Nt,errorCaptured:Nt,serverPrefetch:Nt,components:qr,directives:qr,watch:Jm,provide:Eu,inject:Zm};function Eu(n,e){return e?n?function(){return At(ze(n)?n.call(this,this):n,ze(e)?e.call(this,this):e)}:e:n}function Zm(n,e){return qr(dl(n),dl(e))}function dl(n){if(He(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Nt(n,e){return n?[...new Set([].concat(n,e))]:e}function qr(n,e){return n?At(Object.create(null),n,e):e}function bu(n,e){return n?He(n)&&He(e)?[...new Set([...n,...e])]:At(Object.create(null),yu(n),yu(e??{})):e}function Jm(n,e){if(!n)return e;if(!e)return n;const t=At(Object.create(null),n);for(const i in e)t[i]=Nt(n[i],e[i]);return t}function ud(){return{app:null,config:{isNativeTag:zp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Qm=0;function eg(n,e){return function(i,r=null){ze(i)||(i=At({},i)),r!=null&&!ht(r)&&(r=null);const s=ud(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:Qm++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Og,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&ze(u.install)?(o.add(u),u.install(c,...f)):ze(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const d=c._ceVNode||Lt(i,r);return d.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),f&&e?e(d,u):n(d,u,h),l=!0,c._container=u,u.__vue_app__=c,Oc(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Ln(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=vr;vr=c;try{return u()}finally{vr=f}}};return c}}let vr=null;function mo(n,e){if(Tt){let t=Tt.provides;const i=Tt.parent&&Tt.parent.provides;i===t&&(t=Tt.provides=Object.create(i)),t[n]=e}}function $n(n,e,t=!1){const i=Tt||sn;if(i||vr){const r=vr?vr._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&ze(e)?e.call(i&&i.proxy):e}}const fd={},hd=()=>Object.create(fd),dd=n=>Object.getPrototypeOf(n)===fd;function tg(n,e,t,i=!1){const r={},s=hd();n.propsDefaults=Object.create(null),pd(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:Gh(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function ng(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=Qe(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Zo(n.emitsOptions,h))continue;const d=e[h];if(l)if(Ze(s,h))d!==s[h]&&(s[h]=d,c=!0);else{const _=an(h);r[_]=pl(l,a,_,d,n,!1)}else d!==s[h]&&(s[h]=d,c=!0)}}}else{pd(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!Ze(e,f)&&((u=qi(f))===f||!Ze(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=pl(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!Ze(e,f))&&(delete s[f],c=!0)}c&&Yn(n.attrs,"set","")}function pd(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(jr(l))continue;const c=e[l];let u;r&&Ze(r,u=an(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:Zo(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=Qe(t),c=a||it;for(let u=0;u<s.length;u++){const f=s[u];t[f]=pl(r,l,f,c[f],n,!Ze(c,f))}}return o}function pl(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=Ze(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ze(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=Ms(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===qi(t))&&(i=!0))}return i}const ig=new WeakMap;function md(n,e,t=!1){const i=t?ig:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!ze(n)){const u=f=>{l=!0;const[h,d]=md(f,e,!0);At(o,h),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return ht(n)&&i.set(n,gr),gr;if(He(s))for(let u=0;u<s.length;u++){const f=an(s[u]);Tu(f)&&(o[f]=it)}else if(s)for(const u in s){const f=an(u);if(Tu(f)){const h=s[u],d=o[f]=He(h)||ze(h)?{type:h}:At({},h),_=d.type;let x=!1,m=!0;if(He(_))for(let p=0;p<_.length;++p){const A=_[p],y=ze(A)&&A.name;if(y==="Boolean"){x=!0;break}else y==="String"&&(m=!1)}else x=ze(_)&&_.name==="Boolean";d[0]=x,d[1]=m,(x||Ze(d,"default"))&&a.push(f)}}const c=[o,a];return ht(n)&&i.set(n,c),c}function Tu(n){return n[0]!=="$"&&!jr(n)}const gd=n=>n[0]==="_"||n==="$stable",Ic=n=>He(n)?n.map(wn):[wn(n)],rg=(n,e,t)=>{if(e._n)return e;const i=Lo((...r)=>Ic(e(...r)),t);return i._c=!1,i},_d=(n,e,t)=>{const i=n._ctx;for(const r in n){if(gd(r))continue;const s=n[r];if(ze(s))e[r]=rg(r,s,i);else if(s!=null){const o=Ic(s);e[r]=()=>o}}},vd=(n,e)=>{const t=Ic(e);n.slots.default=()=>t},xd=(n,e,t)=>{for(const i in e)(t||i!=="_")&&(n[i]=e[i])},sg=(n,e,t)=>{const i=n.slots=hd();if(n.vnode.shapeFlag&32){const r=e._;r?(xd(i,e,t),t&&Th(i,"_",r,!0)):_d(e,i)}else e&&vd(n,e)},og=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=it;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:xd(r,e,t):(s=!e.$stable,_d(e,r)),o=e}else e&&(vd(n,e),o={default:1});if(s)for(const a in r)!gd(a)&&o[a]==null&&delete r[a]},jt=Sg;function ag(n){return lg(n)}function lg(n,e){const t=Ah();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=Cn,insertStaticContent:_}=n,x=(g,w,L,N=null,I=null,Y=null,Z=void 0,M=null,v=!!w.dynamicChildren)=>{if(g===w)return;g&&!Br(g,w)&&(N=F(g),Oe(g,I,Y,!0),g=null),w.patchFlag===-2&&(v=!1,w.dynamicChildren=null);const{type:C,ref:G,shapeFlag:H}=w;switch(C){case Jo:m(g,w,L,N);break;case fs:p(g,w,L,N);break;case va:g==null&&A(w,L,N,Z);break;case hn:K(g,w,L,N,I,Y,Z,M,v);break;default:H&1?O(g,w,L,N,I,Y,Z,M,v):H&6?q(g,w,L,N,I,Y,Z,M,v):(H&64||H&128)&&C.process(g,w,L,N,I,Y,Z,M,v,fe)}G!=null&&I&&ul(G,g&&g.ref,Y,w||g,!w)},m=(g,w,L,N)=>{if(g==null)i(w.el=a(w.children),L,N);else{const I=w.el=g.el;w.children!==g.children&&c(I,w.children)}},p=(g,w,L,N)=>{g==null?i(w.el=l(w.children||""),L,N):w.el=g.el},A=(g,w,L,N)=>{[g.el,g.anchor]=_(g.children,w,L,N,g.el,g.anchor)},y=({el:g,anchor:w},L,N)=>{let I;for(;g&&g!==w;)I=h(g),i(g,L,N),g=I;i(w,L,N)},E=({el:g,anchor:w})=>{let L;for(;g&&g!==w;)L=h(g),r(g),g=L;r(w)},O=(g,w,L,N,I,Y,Z,M,v)=>{w.type==="svg"?Z="svg":w.type==="math"&&(Z="mathml"),g==null?P(w,L,N,I,Y,Z,M,v):re(g,w,I,Y,Z,M,v)},P=(g,w,L,N,I,Y,Z,M)=>{let v,C;const{props:G,shapeFlag:H,transition:V,dirs:le}=g;if(v=g.el=o(g.type,Y,G&&G.is,G),H&8?u(v,g.children):H&16&&U(g.children,v,null,N,I,ga(g,Y),Z,M),le&&Ei(g,null,N,"created"),R(v,g,g.scopeId,Z,N),G){for(const de in G)de!=="value"&&!jr(de)&&s(v,de,null,G[de],Y,N);"value"in G&&s(v,"value",null,G.value,Y),(C=G.onVnodeBeforeMount)&&Mn(C,N,g)}le&&Ei(g,null,N,"beforeMount");const ae=cg(I,V);ae&&V.beforeEnter(v),i(v,w,L),((C=G&&G.onVnodeMounted)||ae||le)&&jt(()=>{C&&Mn(C,N,g),ae&&V.enter(v),le&&Ei(g,null,N,"mounted")},I)},R=(g,w,L,N,I)=>{if(L&&d(g,L),N)for(let Y=0;Y<N.length;Y++)d(g,N[Y]);if(I){let Y=I.subTree;if(w===Y||Td(Y.type)&&(Y.ssContent===w||Y.ssFallback===w)){const Z=I.vnode;R(g,Z,Z.scopeId,Z.slotScopeIds,I.parent)}}},U=(g,w,L,N,I,Y,Z,M,v=0)=>{for(let C=v;C<g.length;C++){const G=g[C]=M?li(g[C]):wn(g[C]);x(null,G,w,L,N,I,Y,Z,M)}},re=(g,w,L,N,I,Y,Z)=>{const M=w.el=g.el;let{patchFlag:v,dynamicChildren:C,dirs:G}=w;v|=g.patchFlag&16;const H=g.props||it,V=w.props||it;let le;if(L&&bi(L,!1),(le=V.onVnodeBeforeUpdate)&&Mn(le,L,w,g),G&&Ei(w,g,L,"beforeUpdate"),L&&bi(L,!0),(H.innerHTML&&V.innerHTML==null||H.textContent&&V.textContent==null)&&u(M,""),C?S(g.dynamicChildren,C,M,L,N,ga(w,I),Y):Z||X(g,w,M,null,L,N,ga(w,I),Y,!1),v>0){if(v&16)b(M,H,V,L,I);else if(v&2&&H.class!==V.class&&s(M,"class",null,V.class,I),v&4&&s(M,"style",H.style,V.style,I),v&8){const ae=w.dynamicProps;for(let de=0;de<ae.length;de++){const Re=ae[de],ue=H[Re],me=V[Re];(me!==ue||Re==="value")&&s(M,Re,ue,me,I,L)}}v&1&&g.children!==w.children&&u(M,w.children)}else!Z&&C==null&&b(M,H,V,L,I);((le=V.onVnodeUpdated)||G)&&jt(()=>{le&&Mn(le,L,w,g),G&&Ei(w,g,L,"updated")},N)},S=(g,w,L,N,I,Y,Z)=>{for(let M=0;M<w.length;M++){const v=g[M],C=w[M],G=v.el&&(v.type===hn||!Br(v,C)||v.shapeFlag&70)?f(v.el):L;x(v,C,G,null,N,I,Y,Z,!0)}},b=(g,w,L,N,I)=>{if(w!==L){if(w!==it)for(const Y in w)!jr(Y)&&!(Y in L)&&s(g,Y,w[Y],null,I,N);for(const Y in L){if(jr(Y))continue;const Z=L[Y],M=w[Y];Z!==M&&Y!=="value"&&s(g,Y,M,Z,I,N)}"value"in L&&s(g,"value",w.value,L.value,I)}},K=(g,w,L,N,I,Y,Z,M,v)=>{const C=w.el=g?g.el:a(""),G=w.anchor=g?g.anchor:a("");let{patchFlag:H,dynamicChildren:V,slotScopeIds:le}=w;le&&(M=M?M.concat(le):le),g==null?(i(C,L,N),i(G,L,N),U(w.children||[],L,G,I,Y,Z,M,v)):H>0&&H&64&&V&&g.dynamicChildren?(S(g.dynamicChildren,V,L,I,Y,Z,M),(w.key!=null||I&&w===I.subTree)&&Sd(g,w,!0)):X(g,w,L,G,I,Y,Z,M,v)},q=(g,w,L,N,I,Y,Z,M,v)=>{w.slotScopeIds=M,g==null?w.shapeFlag&512?I.ctx.activate(w,L,N,Z,v):J(w,L,N,I,Y,Z,v):se(g,w,v)},J=(g,w,L,N,I,Y,Z)=>{const M=g.component=Rg(g,N,I);if(nd(g)&&(M.ctx.renderer=fe),Pg(M,!1,Z),M.asyncDep){if(I&&I.registerDep(M,W,Z),!g.el){const v=M.subTree=Lt(fs);p(null,v,w,L)}}else W(M,g,w,L,I,Y,Z)},se=(g,w,L)=>{const N=w.component=g.component;if(vg(g,w,L))if(N.asyncDep&&!N.asyncResolved){Q(N,w,L);return}else N.next=w,N.update();else w.el=g.el,N.vnode=w},W=(g,w,L,N,I,Y,Z)=>{const M=()=>{if(g.isMounted){let{next:H,bu:V,u:le,parent:ae,vnode:de}=g;{const Pe=yd(g);if(Pe){H&&(H.el=de.el,Q(g,H,Z)),Pe.asyncDep.then(()=>{g.isUnmounted||M()});return}}let Re=H,ue;bi(g,!1),H?(H.el=de.el,Q(g,H,Z)):H=de,V&&fa(V),(ue=H.props&&H.props.onVnodeBeforeUpdate)&&Mn(ue,ae,H,de),bi(g,!0);const me=_a(g),De=g.subTree;g.subTree=me,x(De,me,f(De.el),F(De),g,I,Y),H.el=me.el,Re===null&&xg(g,me.el),le&&jt(le,I),(ue=H.props&&H.props.onVnodeUpdated)&&jt(()=>Mn(ue,ae,H,de),I)}else{let H;const{el:V,props:le}=w,{bm:ae,m:de,parent:Re,root:ue,type:me}=g,De=es(w);if(bi(g,!1),ae&&fa(ae),!De&&(H=le&&le.onVnodeBeforeMount)&&Mn(H,Re,w),bi(g,!0),V&&ee){const Pe=()=>{g.subTree=_a(g),ee(V,g.subTree,g,I,null)};De&&me.__asyncHydrate?me.__asyncHydrate(V,g,Pe):Pe()}else{ue.ce&&ue.ce._injectChildStyle(me);const Pe=g.subTree=_a(g);x(null,Pe,L,N,g,I,Y),w.el=Pe.el}if(de&&jt(de,I),!De&&(H=le&&le.onVnodeMounted)){const Pe=w;jt(()=>Mn(H,Re,Pe),I)}(w.shapeFlag&256||Re&&es(Re.vnode)&&Re.vnode.shapeFlag&256)&&g.a&&jt(g.a,I),g.isMounted=!0,w=L=N=null}};g.scope.on();const v=g.effect=new Ch(M);g.scope.off();const C=g.update=v.run.bind(v),G=g.job=v.runIfDirty.bind(v);G.i=g,G.id=g.uid,v.scheduler=()=>Pc(G),bi(g,!0),C()},Q=(g,w,L)=>{w.component=g;const N=g.vnode.props;g.vnode=w,g.next=null,ng(g,w.props,N,L),og(g,w.children,L),vi(),xu(g),xi()},X=(g,w,L,N,I,Y,Z,M,v=!1)=>{const C=g&&g.children,G=g?g.shapeFlag:0,H=w.children,{patchFlag:V,shapeFlag:le}=w;if(V>0){if(V&128){xe(C,H,L,N,I,Y,Z,M,v);return}else if(V&256){ge(C,H,L,N,I,Y,Z,M,v);return}}le&8?(G&16&&Se(C,I,Y),H!==C&&u(L,H)):G&16?le&16?xe(C,H,L,N,I,Y,Z,M,v):Se(C,I,Y,!0):(G&8&&u(L,""),le&16&&U(H,L,N,I,Y,Z,M,v))},ge=(g,w,L,N,I,Y,Z,M,v)=>{g=g||gr,w=w||gr;const C=g.length,G=w.length,H=Math.min(C,G);let V;for(V=0;V<H;V++){const le=w[V]=v?li(w[V]):wn(w[V]);x(g[V],le,L,null,I,Y,Z,M,v)}C>G?Se(g,I,Y,!0,!1,H):U(w,L,N,I,Y,Z,M,v,H)},xe=(g,w,L,N,I,Y,Z,M,v)=>{let C=0;const G=w.length;let H=g.length-1,V=G-1;for(;C<=H&&C<=V;){const le=g[C],ae=w[C]=v?li(w[C]):wn(w[C]);if(Br(le,ae))x(le,ae,L,null,I,Y,Z,M,v);else break;C++}for(;C<=H&&C<=V;){const le=g[H],ae=w[V]=v?li(w[V]):wn(w[V]);if(Br(le,ae))x(le,ae,L,null,I,Y,Z,M,v);else break;H--,V--}if(C>H){if(C<=V){const le=V+1,ae=le<G?w[le].el:N;for(;C<=V;)x(null,w[C]=v?li(w[C]):wn(w[C]),L,ae,I,Y,Z,M,v),C++}}else if(C>V)for(;C<=H;)Oe(g[C],I,Y,!0),C++;else{const le=C,ae=C,de=new Map;for(C=ae;C<=V;C++){const Ie=w[C]=v?li(w[C]):wn(w[C]);Ie.key!=null&&de.set(Ie.key,C)}let Re,ue=0;const me=V-ae+1;let De=!1,Pe=0;const Me=new Array(me);for(C=0;C<me;C++)Me[C]=0;for(C=le;C<=H;C++){const Ie=g[C];if(ue>=me){Oe(Ie,I,Y,!0);continue}let Xe;if(Ie.key!=null)Xe=de.get(Ie.key);else for(Re=ae;Re<=V;Re++)if(Me[Re-ae]===0&&Br(Ie,w[Re])){Xe=Re;break}Xe===void 0?Oe(Ie,I,Y,!0):(Me[Xe-ae]=C+1,Xe>=Pe?Pe=Xe:De=!0,x(Ie,w[Xe],L,null,I,Y,Z,M,v),ue++)}const We=De?ug(Me):gr;for(Re=We.length-1,C=me-1;C>=0;C--){const Ie=ae+C,Xe=w[Ie],B=Ie+1<G?w[Ie+1].el:N;Me[C]===0?x(null,Xe,L,B,I,Y,Z,M,v):De&&(Re<0||C!==We[Re]?ve(Xe,L,B,2):Re--)}}},ve=(g,w,L,N,I=null)=>{const{el:Y,type:Z,transition:M,children:v,shapeFlag:C}=g;if(C&6){ve(g.component.subTree,w,L,N);return}if(C&128){g.suspense.move(w,L,N);return}if(C&64){Z.move(g,w,L,fe);return}if(Z===hn){i(Y,w,L);for(let H=0;H<v.length;H++)ve(v[H],w,L,N);i(g.anchor,w,L);return}if(Z===va){y(g,w,L);return}if(N!==2&&C&1&&M)if(N===0)M.beforeEnter(Y),i(Y,w,L),jt(()=>M.enter(Y),I);else{const{leave:H,delayLeave:V,afterLeave:le}=M,ae=()=>i(Y,w,L),de=()=>{H(Y,()=>{ae(),le&&le()})};V?V(Y,ae,de):de()}else i(Y,w,L)},Oe=(g,w,L,N=!1,I=!1)=>{const{type:Y,props:Z,ref:M,children:v,dynamicChildren:C,shapeFlag:G,patchFlag:H,dirs:V,cacheIndex:le}=g;if(H===-2&&(I=!1),M!=null&&ul(M,null,L,g,!0),le!=null&&(w.renderCache[le]=void 0),G&256){w.ctx.deactivate(g);return}const ae=G&1&&V,de=!es(g);let Re;if(de&&(Re=Z&&Z.onVnodeBeforeUnmount)&&Mn(Re,w,g),G&6)he(g.component,L,N);else{if(G&128){g.suspense.unmount(L,N);return}ae&&Ei(g,null,w,"beforeUnmount"),G&64?g.type.remove(g,w,L,fe,N):C&&!C.hasOnce&&(Y!==hn||H>0&&H&64)?Se(C,w,L,!1,!0):(Y===hn&&H&384||!I&&G&16)&&Se(v,w,L),N&&Ge(g)}(de&&(Re=Z&&Z.onVnodeUnmounted)||ae)&&jt(()=>{Re&&Mn(Re,w,g),ae&&Ei(g,null,w,"unmounted")},L)},Ge=g=>{const{type:w,el:L,anchor:N,transition:I}=g;if(w===hn){ne(L,N);return}if(w===va){E(g);return}const Y=()=>{r(L),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(g.shapeFlag&1&&I&&!I.persisted){const{leave:Z,delayLeave:M}=I,v=()=>Z(L,Y);M?M(g.el,Y,v):v()}else Y()},ne=(g,w)=>{let L;for(;g!==w;)L=h(g),r(g),g=L;r(w)},he=(g,w,L)=>{const{bum:N,scope:I,job:Y,subTree:Z,um:M,m:v,a:C}=g;Au(v),Au(C),N&&fa(N),I.stop(),Y&&(Y.flags|=8,Oe(Z,g,w,L)),M&&jt(M,w),jt(()=>{g.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve())},Se=(g,w,L,N=!1,I=!1,Y=0)=>{for(let Z=Y;Z<g.length;Z++)Oe(g[Z],w,L,N,I)},F=g=>{if(g.shapeFlag&6)return F(g.component.subTree);if(g.shapeFlag&128)return g.suspense.next();const w=h(g.anchor||g.el),L=w&&w[Dm];return L?h(L):w};let oe=!1;const ie=(g,w,L)=>{g==null?w._vnode&&Oe(w._vnode,null,null,!0):x(w._vnode||null,g,w,null,null,null,L),w._vnode=g,oe||(oe=!0,xu(),Jh(),oe=!1)},fe={p:x,um:Oe,m:ve,r:Ge,mt:J,mc:U,pc:X,pbc:S,n:F,o:n};let Te,ee;return{render:ie,hydrate:Te,createApp:eg(ie,Te)}}function ga({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function bi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function cg(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Sd(n,e,t=!1){const i=n.children,r=e.children;if(He(i)&&He(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=li(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&Sd(o,a)),a.type===Jo&&(a.el=o.el)}}function ug(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function yd(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:yd(e)}function Au(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const fg=Symbol.for("v-scx"),hg=()=>$n(fg);function go(n,e,t){return Md(n,e,t)}function Md(n,e,t=it){const{immediate:i,deep:r,flush:s,once:o}=t,a=At({},t);let l;if(ea)if(s==="sync"){const h=hg();l=h.__watcherHandles||(h.__watcherHandles=[])}else if(!e||i)a.once=!0;else{const h=()=>{};return h.stop=Cn,h.resume=Cn,h.pause=Cn,h}const c=Tt;a.call=(h,d,_)=>Ln(h,c,d,_);let u=!1;s==="post"?a.scheduler=h=>{jt(h,c&&c.suspense)}:s!=="sync"&&(u=!0,a.scheduler=(h,d)=>{d?h():Pc(h)}),a.augmentJob=h=>{e&&(h.flags|=4),u&&(h.flags|=2,c&&(h.id=c.uid,h.i=c))};const f=Rm(n,e,a);return l&&l.push(f),f}function dg(n,e,t){const i=this.proxy,r=St(n)?n.includes(".")?Ed(i,n):()=>i[n]:n.bind(i,i);let s;ze(e)?s=e:(s=e.handler,t=e);const o=Ms(this),a=Md(r,s.bind(i),t);return o(),a}function Ed(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const pg=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${an(e)}Modifiers`]||n[`${qi(e)}Modifiers`];function mg(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||it;let r=t;const s=e.startsWith("update:"),o=s&&pg(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>St(u)?u.trim():u)),o.number&&(r=t.map(Yp)));let a,l=i[a=ua(e)]||i[a=ua(an(e))];!l&&s&&(l=i[a=ua(qi(e))]),l&&Ln(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Ln(c,n,6,r)}}function bd(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!ze(n)){const l=c=>{const u=bd(c,e,!0);u&&(a=!0,At(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(ht(n)&&i.set(n,null),null):(He(s)?s.forEach(l=>o[l]=null):At(o,s),ht(n)&&i.set(n,o),o)}function Zo(n,e){return!n||!Go(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ze(n,e[0].toLowerCase()+e.slice(1))||Ze(n,qi(e))||Ze(n,e))}function _a(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:_,inheritAttrs:x}=n,m=Po(n);let p,A;try{if(t.shapeFlag&4){const E=r||i,O=E;p=wn(c.call(O,E,u,f,d,h,_)),A=a}else{const E=e;p=wn(E.length>1?E(f,{attrs:a,slots:o,emit:l}):E(f,null)),A=e.props?a:gg(a)}}catch(E){ns.length=0,Ko(E,n,1),p=Lt(fs)}let y=p;if(A&&x!==!1){const E=Object.keys(A),{shapeFlag:O}=y;E.length&&O&7&&(s&&E.some(mc)&&(A=_g(A,s)),y=br(y,A,!1,!0))}return t.dirs&&(y=br(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(t.dirs):t.dirs),t.transition&&Lc(y,t.transition),p=y,Po(m),p}const gg=n=>{let e;for(const t in n)(t==="class"||t==="style"||Go(t))&&((e||(e={}))[t]=n[t]);return e},_g=(n,e)=>{const t={};for(const i in n)(!mc(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function vg(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?wu(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!Zo(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?wu(i,o,c):!0:!!o;return!1}function wu(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!Zo(t,s))return!0}return!1}function xg({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Td=n=>n.__isSuspense;function Sg(n,e){e&&e.pendingBranch?He(n)?e.effects.push(...n):e.effects.push(n):Lm(n)}const hn=Symbol.for("v-fgt"),Jo=Symbol.for("v-txt"),fs=Symbol.for("v-cmt"),va=Symbol.for("v-stc"),ns=[];let Jt=null;function Qo(n=!1){ns.push(Jt=n?null:[])}function yg(){ns.pop(),Jt=ns[ns.length-1]||null}let hs=1;function Ru(n){hs+=n,n<0&&Jt&&(Jt.hasOnce=!0)}function Ad(n){return n.dynamicChildren=hs>0?Jt||gr:null,yg(),hs>0&&Jt&&Jt.push(n),n}function Uc(n,e,t,i,r,s){return Ad(Pt(n,e,t,i,r,s,!0))}function Mg(n,e,t,i,r){return Ad(Lt(n,e,t,i,r,!0))}function Io(n){return n?n.__v_isVNode===!0:!1}function Br(n,e){return n.type===e.type&&n.key===e.key}const wd=({key:n})=>n??null,_o=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?St(n)||Dt(n)||ze(n)?{i:sn,r:n,k:e,f:!!t}:n:null);function Pt(n,e=null,t=null,i=0,r=null,s=n===hn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&wd(e),ref:e&&_o(e),scopeId:ed,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:sn};return a?(Nc(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=St(t)?8:16),hs>0&&!o&&Jt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Jt.push(l),l}const Lt=Eg;function Eg(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Xm)&&(n=fs),Io(n)){const a=br(n,e,!0);return t&&Nc(a,t),hs>0&&!s&&Jt&&(a.shapeFlag&6?Jt[Jt.indexOf(n)]=a:Jt.push(a)),a.patchFlag=-2,a}if(Ng(n)&&(n=n.__vccOpts),e){e=bg(e);let{class:a,style:l}=e;a&&!St(a)&&(e.class=xc(a)),ht(l)&&(Rc(l)&&!He(l)&&(l=At({},l)),e.style=vc(l))}const o=St(n)?1:Td(n)?128:Im(n)?64:ht(n)?4:ze(n)?2:0;return Pt(n,e,t,i,r,o,s,!0)}function bg(n){return n?Rc(n)||dd(n)?At({},n):n:null}function br(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?Tg(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&wd(c),ref:e&&e.ref?t&&s?He(s)?s.concat(_o(e)):[s,_o(e)]:_o(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==hn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&br(n.ssContent),ssFallback:n.ssFallback&&br(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Lc(u,l.clone(u)),u}function Oi(n=" ",e=0){return Lt(Jo,null,n,e)}function wn(n){return n==null||typeof n=="boolean"?Lt(fs):He(n)?Lt(hn,null,n.slice()):Io(n)?li(n):Lt(Jo,null,String(n))}function li(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:br(n)}function Nc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(He(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Nc(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!dd(e)?e._ctx=sn:r===3&&sn&&(sn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else ze(e)?(e={default:e,_ctx:sn},t=32):(e=String(e),i&64?(t=16,e=[Oi(e)]):t=8);n.children=e,n.shapeFlag|=t}function Tg(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=xc([e.class,i.class]));else if(r==="style")e.style=vc([e.style,i.style]);else if(Go(r)){const s=e[r],o=i[r];o&&s!==o&&!(He(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function Mn(n,e,t,i=null){Ln(n,e,7,[t,i])}const Ag=ud();let wg=0;function Rg(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Ag,s={uid:wg++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Rh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:md(i,r),emitsOptions:bd(i,r),emit:null,emitted:null,propsDefaults:it,inheritAttrs:i.inheritAttrs,ctx:it,data:it,props:it,attrs:it,slots:it,refs:it,setupState:it,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=mg.bind(null,s),n.ce&&n.ce(s),s}let Tt=null;const Cg=()=>Tt||sn;let Uo,ml;{const n=Ah(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Uo=e("__VUE_INSTANCE_SETTERS__",t=>Tt=t),ml=e("__VUE_SSR_SETTERS__",t=>ea=t)}const Ms=n=>{const e=Tt;return Uo(n),n.scope.on(),()=>{n.scope.off(),Uo(e)}},Cu=()=>{Tt&&Tt.scope.off(),Uo(null)};function Rd(n){return n.vnode.shapeFlag&4}let ea=!1;function Pg(n,e=!1,t=!1){e&&ml(e);const{props:i,children:r}=n.vnode,s=Rd(n);tg(n,i,s,e),sg(n,r,t);const o=s?Lg(n,e):void 0;return e&&ml(!1),o}function Lg(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Ym);const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?Ig(n):null,s=Ms(n);vi();const o=Ss(i,n,0,[n.props,r]);if(xi(),s(),bh(o)){if(es(n)||td(n),o.then(Cu,Cu),e)return o.then(a=>{Pu(n,a,e)}).catch(a=>{Ko(a,n,0)});n.asyncDep=o}else Pu(n,o,e)}else Cd(n,e)}function Pu(n,e,t){ze(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:ht(e)&&(n.setupState=$h(e)),Cd(n,t)}let Lu;function Cd(n,e,t){const i=n.type;if(!n.render){if(!e&&Lu&&!i.render){const r=i.template||Dc(n).template;if(r){const{isCustomElement:s,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=At(At({isCustomElement:s,delimiters:a},o),l);i.render=Lu(r,c)}}n.render=i.render||Cn}{const r=Ms(n);vi();try{$m(n)}finally{xi(),r()}}}const Dg={get(n,e){return It(n,"get",""),n[e]}};function Ig(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Dg),slots:n.slots,emit:n.emit,expose:e}}function Oc(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy($h(Xh(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in ts)return ts[t](n)},has(e,t){return t in e||t in ts}})):n.proxy}function Ug(n,e=!0){return ze(n)?n.displayName||n.name:n.name||e&&n.__name}function Ng(n){return ze(n)&&"__vccOpts"in n}const dn=(n,e)=>Am(n,e,ea);function Pd(n,e,t){const i=arguments.length;return i===2?ht(e)&&!He(e)?Io(e)?Lt(n,null,[e]):Lt(n,e):Lt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Io(t)&&(t=[t]),Lt(n,e,t))}const Og="3.5.11";/**
* @vue/runtime-dom v3.5.11
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let gl;const Du=typeof window<"u"&&window.trustedTypes;if(Du)try{gl=Du.createPolicy("vue",{createHTML:n=>n})}catch{}const Ld=gl?n=>gl.createHTML(n):n=>n,Fg="http://www.w3.org/2000/svg",Bg="http://www.w3.org/1998/Math/MathML",Wn=typeof document<"u"?document:null,Iu=Wn&&Wn.createElement("template"),zg={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Wn.createElementNS(Fg,n):e==="mathml"?Wn.createElementNS(Bg,n):t?Wn.createElement(n,{is:t}):Wn.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Wn.createTextNode(n),createComment:n=>Wn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Wn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Iu.innerHTML=Ld(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Iu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Hg=Symbol("_vtc");function kg(n,e,t){const i=n[Hg];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Uu=Symbol("_vod"),Vg=Symbol("_vsh"),Gg=Symbol(""),Wg=/(^|;)\s*display\s*:/;function Xg(n,e,t){const i=n.style,r=St(t);let s=!1;if(t&&!r){if(e)if(St(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&vo(i,a,"")}else for(const o in e)t[o]==null&&vo(i,o,"");for(const o in t)o==="display"&&(s=!0),vo(i,o,t[o])}else if(r){if(e!==t){const o=i[Gg];o&&(t+=";"+o),i.cssText=t,s=Wg.test(t)}}else e&&n.removeAttribute("style");Uu in n&&(n[Uu]=s?i.display:"",n[Vg]&&(i.display="none"))}const Nu=/\s*!important$/;function vo(n,e,t){if(He(t))t.forEach(i=>vo(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=qg(n,e);Nu.test(t)?n.setProperty(qi(i),t.replace(Nu,""),"important"):n[i]=t}}const Ou=["Webkit","Moz","ms"],xa={};function qg(n,e){const t=xa[e];if(t)return t;let i=an(e);if(i!=="filter"&&i in n)return xa[e]=i;i=qo(i);for(let r=0;r<Ou.length;r++){const s=Ou[r]+i;if(s in n)return xa[e]=s}return e}const Fu="http://www.w3.org/1999/xlink";function Bu(n,e,t,i,r,s=Qp(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Fu,e.slice(6,e.length)):n.setAttributeNS(Fu,e,t):t==null||s&&!wh(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Ir(t)?String(t):t)}function zu(n,e,t,i){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Ld(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const o=r==="OPTION"?n.getAttribute("value")||"":n.value,a=t==null?n.type==="checkbox"?"on":"":String(t);(o!==a||!("_value"in n))&&(n.value=a),t==null&&n.removeAttribute(e),n._value=t;return}let s=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=wh(t):t==null&&o==="string"?(t="",s=!0):o==="number"&&(t=0,s=!0)}try{n[e]=t}catch{}s&&n.removeAttribute(e)}function Yg(n,e,t,i){n.addEventListener(e,t,i)}function $g(n,e,t,i){n.removeEventListener(e,t,i)}const Hu=Symbol("_vei");function Kg(n,e,t,i,r=null){const s=n[Hu]||(n[Hu]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=jg(e);if(i){const c=s[e]=Qg(i,r);Yg(n,a,c,l)}else o&&($g(n,a,o,l),s[e]=void 0)}}const ku=/(?:Once|Passive|Capture)$/;function jg(n){let e;if(ku.test(n)){e={};let i;for(;i=n.match(ku);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):qi(n.slice(2)),e]}let Sa=0;const Zg=Promise.resolve(),Jg=()=>Sa||(Zg.then(()=>Sa=0),Sa=Date.now());function Qg(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Ln(e_(i,t.value),e,5,[i])};return t.value=n,t.attached=Jg(),t}function e_(n,e){if(He(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Vu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,t_=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?kg(n,i,o):e==="style"?Xg(n,t,i):Go(e)?mc(e)||Kg(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):n_(n,e,i,o))?(zu(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Bu(n,e,i,o,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!St(i))?zu(n,an(e),i):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Bu(n,e,i,o))};function n_(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Vu(e)&&ze(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Vu(e)&&St(t)?!1:e in n}const i_=At({patchProp:t_},zg);let Gu;function r_(){return Gu||(Gu=ag(i_))}const s_=(...n)=>{const e=r_().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=a_(i);if(!r)return;const s=e._component;!ze(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,o_(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function o_(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function a_(n){return St(n)?document.querySelector(n):n}var l_=!1;/*!
 * pinia v2.2.4
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */const c_=Symbol();var Wu;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(Wu||(Wu={}));function u_(){const n=em(!0),e=n.run(()=>wo({}));let t=[],i=[];const r=Xh({install(s){r._a=s,s.provide(c_,r),s.config.globalProperties.$pinia=r,i.forEach(o=>t.push(o)),i=[]},use(s){return!this._a&&!l_?i.push(s):t.push(s),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return r}/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const dr=typeof document<"u";function Dd(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function f_(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&Dd(n.default)}const tt=Object.assign;function ya(n,e){const t={};for(const i in e){const r=e[i];t[i]=yn(r)?r.map(n):n(r)}return t}const is=()=>{},yn=Array.isArray,Id=/#/g,h_=/&/g,d_=/\//g,p_=/=/g,m_=/\?/g,Ud=/\+/g,g_=/%5B/g,__=/%5D/g,Nd=/%5E/g,v_=/%60/g,Od=/%7B/g,x_=/%7C/g,Fd=/%7D/g,S_=/%20/g;function Fc(n){return encodeURI(""+n).replace(x_,"|").replace(g_,"[").replace(__,"]")}function y_(n){return Fc(n).replace(Od,"{").replace(Fd,"}").replace(Nd,"^")}function _l(n){return Fc(n).replace(Ud,"%2B").replace(S_,"+").replace(Id,"%23").replace(h_,"%26").replace(v_,"`").replace(Od,"{").replace(Fd,"}").replace(Nd,"^")}function M_(n){return _l(n).replace(p_,"%3D")}function E_(n){return Fc(n).replace(Id,"%23").replace(m_,"%3F")}function b_(n){return n==null?"":E_(n).replace(d_,"%2F")}function ds(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const T_=/\/$/,A_=n=>n.replace(T_,"");function Ma(n,e,t="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=n(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=P_(i??e,t),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:ds(o)}}function w_(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Xu(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function R_(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&Tr(e.matched[i],t.matched[r])&&Bd(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Tr(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Bd(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!C_(n[t],e[t]))return!1;return!0}function C_(n,e){return yn(n)?qu(n,e):yn(e)?qu(e,n):n===e}function qu(n,e){return yn(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function P_(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const ei={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ps;(function(n){n.pop="pop",n.push="push"})(ps||(ps={}));var rs;(function(n){n.back="back",n.forward="forward",n.unknown=""})(rs||(rs={}));function L_(n){if(!n)if(dr){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),A_(n)}const D_=/^[^#]+#/;function I_(n,e){return n.replace(D_,"#")+e}function U_(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const ta=()=>({left:window.scrollX,top:window.scrollY});function N_(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=U_(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Yu(n,e){return(history.state?history.state.position-e:-1)+n}const vl=new Map;function O_(n,e){vl.set(n,e)}function F_(n){const e=vl.get(n);return vl.delete(n),e}let B_=()=>location.protocol+"//"+location.host;function zd(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let a=r.includes(n.slice(s))?n.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),Xu(l,"")}return Xu(t,n)+i+r}function z_(n,e,t,i){let r=[],s=[],o=null;const a=({state:h})=>{const d=zd(n,location),_=t.value,x=e.value;let m=0;if(h){if(t.value=d,e.value=h,o&&o===_){o=null;return}m=x?h.position-x.position:0}else i(d);r.forEach(p=>{p(t.value,_,{delta:m,type:ps.pop,direction:m?m>0?rs.forward:rs.back:rs.unknown})})};function l(){o=t.value}function c(h){r.push(h);const d=()=>{const _=r.indexOf(h);_>-1&&r.splice(_,1)};return s.push(d),d}function u(){const{history:h}=window;h.state&&h.replaceState(tt({},h.state,{scroll:ta()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function $u(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?ta():null}}function H_(n){const{history:e,location:t}=window,i={value:zd(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=n.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:B_()+n+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(d){console.error(d),t[u?"replace":"assign"](h)}}function o(l,c){const u=tt({},e.state,$u(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=tt({},r.value,e.state,{forward:l,scroll:ta()});s(u.current,u,!0);const f=tt({},$u(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function k_(n){n=L_(n);const e=H_(n),t=z_(n,e.state,e.location,e.replace);function i(s,o=!0){o||t.pauseListeners(),history.go(s)}const r=tt({location:"",base:n,go:i,createHref:I_.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function V_(n){return typeof n=="string"||n&&typeof n=="object"}function Hd(n){return typeof n=="string"||typeof n=="symbol"}const kd=Symbol("");var Ku;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Ku||(Ku={}));function Ar(n,e){return tt(new Error,{type:n,[kd]:!0},e)}function On(n,e){return n instanceof Error&&kd in n&&(e==null||!!(n.type&e))}const ju="[^/]+?",G_={sensitive:!1,strict:!1,start:!0,end:!0},W_=/[.+*?^${}()[\]/\\]/g;function X_(n,e){const t=tt({},G_,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const h=c[f];let d=40+(t.sensitive?.25:0);if(h.type===0)f||(r+="/"),r+=h.value.replace(W_,"\\$&"),d+=40;else if(h.type===1){const{value:_,repeatable:x,optional:m,regexp:p}=h;s.push({name:_,repeatable:x,optional:m});const A=p||ju;if(A!==ju){d+=10;try{new RegExp(`(${A})`)}catch(E){throw new Error(`Invalid custom RegExp for param "${_}" (${A}): `+E.message)}}let y=x?`((?:${A})(?:/(?:${A}))*)`:`(${A})`;f||(y=m&&c.length<2?`(?:/${y})`:"/"+y),m&&(y+="?"),r+=y,d+=20,m&&(d+=-8),x&&(d+=-20),A===".*"&&(d+=-50)}u.push(d)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const d=u[h]||"",_=s[h-1];f[_.name]=d&&_.repeatable?d.split("/"):d}return f}function l(c){let u="",f=!1;for(const h of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const d of h)if(d.type===0)u+=d.value;else if(d.type===1){const{value:_,repeatable:x,optional:m}=d,p=_ in c?c[_]:"";if(yn(p)&&!x)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const A=yn(p)?p.join("/"):p;if(!A)if(m)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);u+=A}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function q_(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Vd(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=q_(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(Zu(i))return 1;if(Zu(r))return-1}return r.length-i.length}function Zu(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const Y_={type:0,value:""},$_=/[a-zA-Z0-9_]/;function K_(n){if(!n)return[[]];if(n==="/")return[[Y_]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(d){throw new Error(`ERR (${t})/"${c}": ${d}`)}let t=0,i=t;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){c&&(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),t=1):h();break;case 4:h(),t=i;break;case 1:l==="("?t=2:$_.test(l)?h():(f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function j_(n,e,t){const i=X_(K_(n.path),t),r=tt(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Z_(n,e){const t=[],i=new Map;e=tf({strict:!1,end:!0,sensitive:!1},e);function r(f){return i.get(f)}function s(f,h,d){const _=!d,x=Qu(f);x.aliasOf=d&&d.record;const m=tf(e,f),p=[x];if("alias"in f){const E=typeof f.alias=="string"?[f.alias]:f.alias;for(const O of E)p.push(Qu(tt({},x,{components:d?d.record.components:x.components,path:O,aliasOf:d?d.record:x})))}let A,y;for(const E of p){const{path:O}=E;if(h&&O[0]!=="/"){const P=h.record.path,R=P[P.length-1]==="/"?"":"/";E.path=h.record.path+(O&&R+O)}if(A=j_(E,h,m),d?d.alias.push(A):(y=y||A,y!==A&&y.alias.push(A),_&&f.name&&!ef(A)&&o(f.name)),Gd(A)&&l(A),x.children){const P=x.children;for(let R=0;R<P.length;R++)s(P[R],A,d&&d.children[R])}d=d||A}return y?()=>{o(y)}:is}function o(f){if(Hd(f)){const h=i.get(f);h&&(i.delete(f),t.splice(t.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=t.indexOf(f);h>-1&&(t.splice(h,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return t}function l(f){const h=ev(f,t);t.splice(h,0,f),f.record.name&&!ef(f)&&i.set(f.record.name,f)}function c(f,h){let d,_={},x,m;if("name"in f&&f.name){if(d=i.get(f.name),!d)throw Ar(1,{location:f});m=d.record.name,_=tt(Ju(h.params,d.keys.filter(y=>!y.optional).concat(d.parent?d.parent.keys.filter(y=>y.optional):[]).map(y=>y.name)),f.params&&Ju(f.params,d.keys.map(y=>y.name))),x=d.stringify(_)}else if(f.path!=null)x=f.path,d=t.find(y=>y.re.test(x)),d&&(_=d.parse(x),m=d.record.name);else{if(d=h.name?i.get(h.name):t.find(y=>y.re.test(h.path)),!d)throw Ar(1,{location:f,currentLocation:h});m=d.record.name,_=tt({},h.params,f.params),x=d.stringify(_)}const p=[];let A=d;for(;A;)p.unshift(A.record),A=A.parent;return{name:m,path:x,params:_,matched:p,meta:Q_(p)}}n.forEach(f=>s(f));function u(){t.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function Ju(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function Qu(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:J_(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function J_(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function ef(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Q_(n){return n.reduce((e,t)=>tt(e,t.meta),{})}function tf(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function ev(n,e){let t=0,i=e.length;for(;t!==i;){const s=t+i>>1;Vd(n,e[s])<0?i=s:t=s+1}const r=tv(n);return r&&(i=e.lastIndexOf(r,i-1)),i}function tv(n){let e=n;for(;e=e.parent;)if(Gd(e)&&Vd(n,e)===0)return e}function Gd({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function nv(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(Ud," "),o=s.indexOf("="),a=ds(o<0?s:s.slice(0,o)),l=o<0?null:ds(s.slice(o+1));if(a in e){let c=e[a];yn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function nf(n){let e="";for(let t in n){const i=n[t];if(t=M_(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(yn(i)?i.map(s=>s&&_l(s)):[i&&_l(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function iv(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=yn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const rv=Symbol(""),rf=Symbol(""),Bc=Symbol(""),Wd=Symbol(""),xl=Symbol("");function zr(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function ci(n,e,t,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=h=>{h===!1?l(Ar(4,{from:t,to:e})):h instanceof Error?l(h):V_(h)?l(Ar(2,{from:e,to:h})):(o&&i.enterCallbacks[r]===o&&typeof h=="function"&&o.push(h),a())},u=s(()=>n.call(i&&i.instances[r],e,t,c));let f=Promise.resolve(u);n.length<3&&(f=f.then(c)),f.catch(h=>l(h))})}function Ea(n,e,t,i,r=s=>s()){const s=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Dd(l)){const u=(l.__vccOpts||l)[e];u&&s.push(ci(u,t,i,o,a,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=f_(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const d=(f.__vccOpts||f)[e];return d&&ci(d,t,i,o,a,r)()}))}}return s}function sf(n){const e=$n(Bc),t=$n(Wd),i=dn(()=>{const l=di(n.to);return e.resolve(l)}),r=dn(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const h=f.findIndex(Tr.bind(null,u));if(h>-1)return h;const d=of(l[c-2]);return c>1&&of(u)===d&&f[f.length-1].path!==d?f.findIndex(Tr.bind(null,l[c-2])):h}),s=dn(()=>r.value>-1&&lv(t.params,i.value.params)),o=dn(()=>r.value>-1&&r.value===t.matched.length-1&&Bd(t.params,i.value.params));function a(l={}){return av(l)?e[di(n.replace)?"replace":"push"](di(n.to)).catch(is):Promise.resolve()}return{route:i,href:dn(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}const sv=ys({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:sf,setup(n,{slots:e}){const t=$o(sf(n)),{options:i}=$n(Bc),r=dn(()=>({[af(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[af(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return n.custom?s:Pd("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),ov=sv;function av(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function lv(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!yn(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function of(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const af=(n,e,t)=>n??e??t,cv=ys({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=$n(xl),r=dn(()=>n.route||i.value),s=$n(rf,0),o=dn(()=>{let c=di(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=dn(()=>r.value.matched[o.value]);mo(rf,dn(()=>o.value+1)),mo(rv,a),mo(xl,r);const l=wo();return go(()=>[l.value,a.value,n.name],([c,u,f],[h,d,_])=>{u&&(u.instances[f]=c,d&&d!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!Tr(u,d)||!h)&&(u.enterCallbacks[f]||[]).forEach(x=>x(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,f=a.value,h=f&&f.components[u];if(!h)return lf(t.default,{Component:h,route:c});const d=f.props[u],_=d?d===!0?c.params:typeof d=="function"?d(c):d:null,m=Pd(h,tt({},_,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return lf(t.default,{Component:m,route:c})||m}}});function lf(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const Xd=cv;function uv(n){const e=Z_(n.routes,n),t=n.parseQuery||nv,i=n.stringifyQuery||nf,r=n.history,s=zr(),o=zr(),a=zr(),l=qh(ei);let c=ei;dr&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ya.bind(null,F=>""+F),f=ya.bind(null,b_),h=ya.bind(null,ds);function d(F,oe){let ie,fe;return Hd(F)?(ie=e.getRecordMatcher(F),fe=oe):fe=F,e.addRoute(fe,ie)}function _(F){const oe=e.getRecordMatcher(F);oe&&e.removeRoute(oe)}function x(){return e.getRoutes().map(F=>F.record)}function m(F){return!!e.getRecordMatcher(F)}function p(F,oe){if(oe=tt({},oe||l.value),typeof F=="string"){const w=Ma(t,F,oe.path),L=e.resolve({path:w.path},oe),N=r.createHref(w.fullPath);return tt(w,L,{params:h(L.params),hash:ds(w.hash),redirectedFrom:void 0,href:N})}let ie;if(F.path!=null)ie=tt({},F,{path:Ma(t,F.path,oe.path).path});else{const w=tt({},F.params);for(const L in w)w[L]==null&&delete w[L];ie=tt({},F,{params:f(w)}),oe.params=f(oe.params)}const fe=e.resolve(ie,oe),Te=F.hash||"";fe.params=u(h(fe.params));const ee=w_(i,tt({},F,{hash:y_(Te),path:fe.path})),g=r.createHref(ee);return tt({fullPath:ee,hash:Te,query:i===nf?iv(F.query):F.query||{}},fe,{redirectedFrom:void 0,href:g})}function A(F){return typeof F=="string"?Ma(t,F,l.value.path):tt({},F)}function y(F,oe){if(c!==F)return Ar(8,{from:oe,to:F})}function E(F){return R(F)}function O(F){return E(tt(A(F),{replace:!0}))}function P(F){const oe=F.matched[F.matched.length-1];if(oe&&oe.redirect){const{redirect:ie}=oe;let fe=typeof ie=="function"?ie(F):ie;return typeof fe=="string"&&(fe=fe.includes("?")||fe.includes("#")?fe=A(fe):{path:fe},fe.params={}),tt({query:F.query,hash:F.hash,params:fe.path!=null?{}:F.params},fe)}}function R(F,oe){const ie=c=p(F),fe=l.value,Te=F.state,ee=F.force,g=F.replace===!0,w=P(ie);if(w)return R(tt(A(w),{state:typeof w=="object"?tt({},Te,w.state):Te,force:ee,replace:g}),oe||ie);const L=ie;L.redirectedFrom=oe;let N;return!ee&&R_(i,fe,ie)&&(N=Ar(16,{to:L,from:fe}),ve(fe,fe,!0,!1)),(N?Promise.resolve(N):S(L,fe)).catch(I=>On(I)?On(I,2)?I:xe(I):X(I,L,fe)).then(I=>{if(I){if(On(I,2))return R(tt({replace:g},A(I.to),{state:typeof I.to=="object"?tt({},Te,I.to.state):Te,force:ee}),oe||L)}else I=K(L,fe,!0,g,Te);return b(L,fe,I),I})}function U(F,oe){const ie=y(F,oe);return ie?Promise.reject(ie):Promise.resolve()}function re(F){const oe=ne.values().next().value;return oe&&typeof oe.runWithContext=="function"?oe.runWithContext(F):F()}function S(F,oe){let ie;const[fe,Te,ee]=fv(F,oe);ie=Ea(fe.reverse(),"beforeRouteLeave",F,oe);for(const w of fe)w.leaveGuards.forEach(L=>{ie.push(ci(L,F,oe))});const g=U.bind(null,F,oe);return ie.push(g),Se(ie).then(()=>{ie=[];for(const w of s.list())ie.push(ci(w,F,oe));return ie.push(g),Se(ie)}).then(()=>{ie=Ea(Te,"beforeRouteUpdate",F,oe);for(const w of Te)w.updateGuards.forEach(L=>{ie.push(ci(L,F,oe))});return ie.push(g),Se(ie)}).then(()=>{ie=[];for(const w of ee)if(w.beforeEnter)if(yn(w.beforeEnter))for(const L of w.beforeEnter)ie.push(ci(L,F,oe));else ie.push(ci(w.beforeEnter,F,oe));return ie.push(g),Se(ie)}).then(()=>(F.matched.forEach(w=>w.enterCallbacks={}),ie=Ea(ee,"beforeRouteEnter",F,oe,re),ie.push(g),Se(ie))).then(()=>{ie=[];for(const w of o.list())ie.push(ci(w,F,oe));return ie.push(g),Se(ie)}).catch(w=>On(w,8)?w:Promise.reject(w))}function b(F,oe,ie){a.list().forEach(fe=>re(()=>fe(F,oe,ie)))}function K(F,oe,ie,fe,Te){const ee=y(F,oe);if(ee)return ee;const g=oe===ei,w=dr?history.state:{};ie&&(fe||g?r.replace(F.fullPath,tt({scroll:g&&w&&w.scroll},Te)):r.push(F.fullPath,Te)),l.value=F,ve(F,oe,ie,g),xe()}let q;function J(){q||(q=r.listen((F,oe,ie)=>{if(!he.listening)return;const fe=p(F),Te=P(fe);if(Te){R(tt(Te,{replace:!0}),fe).catch(is);return}c=fe;const ee=l.value;dr&&O_(Yu(ee.fullPath,ie.delta),ta()),S(fe,ee).catch(g=>On(g,12)?g:On(g,2)?(R(g.to,fe).then(w=>{On(w,20)&&!ie.delta&&ie.type===ps.pop&&r.go(-1,!1)}).catch(is),Promise.reject()):(ie.delta&&r.go(-ie.delta,!1),X(g,fe,ee))).then(g=>{g=g||K(fe,ee,!1),g&&(ie.delta&&!On(g,8)?r.go(-ie.delta,!1):ie.type===ps.pop&&On(g,20)&&r.go(-1,!1)),b(fe,ee,g)}).catch(is)}))}let se=zr(),W=zr(),Q;function X(F,oe,ie){xe(F);const fe=W.list();return fe.length?fe.forEach(Te=>Te(F,oe,ie)):console.error(F),Promise.reject(F)}function ge(){return Q&&l.value!==ei?Promise.resolve():new Promise((F,oe)=>{se.add([F,oe])})}function xe(F){return Q||(Q=!F,J(),se.list().forEach(([oe,ie])=>F?ie(F):oe()),se.reset()),F}function ve(F,oe,ie,fe){const{scrollBehavior:Te}=n;if(!dr||!Te)return Promise.resolve();const ee=!ie&&F_(Yu(F.fullPath,0))||(fe||!ie)&&history.state&&history.state.scroll||null;return jh().then(()=>Te(F,oe,ee)).then(g=>g&&N_(g)).catch(g=>X(g,F,oe))}const Oe=F=>r.go(F);let Ge;const ne=new Set,he={currentRoute:l,listening:!0,addRoute:d,removeRoute:_,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:x,resolve:p,options:n,push:E,replace:O,go:Oe,back:()=>Oe(-1),forward:()=>Oe(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:W.add,isReady:ge,install(F){const oe=this;F.component("RouterLink",ov),F.component("RouterView",Xd),F.config.globalProperties.$router=oe,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>di(l)}),dr&&!Ge&&l.value===ei&&(Ge=!0,E(r.location).catch(Te=>{}));const ie={};for(const Te in ei)Object.defineProperty(ie,Te,{get:()=>l.value[Te],enumerable:!0});F.provide(Bc,oe),F.provide(Wd,Gh(ie)),F.provide(xl,l);const fe=F.unmount;ne.add(F),F.unmount=function(){ne.delete(F),ne.size<1&&(c=ei,q&&q(),q=null,l.value=ei,Ge=!1,Q=!1),fe()}}};function Se(F){return F.reduce((oe,ie)=>oe.then(()=>re(ie)),Promise.resolve())}return he}function fv(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(n.matched.find(c=>Tr(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>Tr(c,l))||r.push(l))}return[t,i,r]}const hv=ys({__name:"App",setup(n){return(e,t)=>(Qo(),Mg(di(Xd)))}}),qd=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},dv={},pv={class:"navigation"},mv={class:"navigation-item"},gv={class:"navigation-item"};function _v(n,e){const t=ld("RouterLink");return Qo(),Uc("header",null,[Pt("ul",pv,[Pt("li",mv,[Lt(t,{class:"navigation-link",to:"/"},{default:Lo(()=>e[0]||(e[0]=[Oi("Home")])),_:1})]),Pt("li",gv,[Lt(t,{to:"/game",class:"navigation-link"},{default:Lo(()=>e[1]||(e[1]=[Oi("Game")])),_:1})])])])}const vv=qd(dv,[["render",_v],["__scopeId","data-v-f928e2c9"]]),xv=ys({__name:"HomeView",setup(n){return(e,t)=>(Qo(),Uc(hn,null,[Lt(vv),t[0]||(t[0]=Pt("main",null,null,-1))],64))}});/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zc="169",Sv=0,cf=1,yv=2,Yd=1,Mv=2,Gn=3,_i=0,Gt=1,pn=2,pi=0,xr=1,uf=2,ff=3,hf=4,Ev=5,Ui=100,bv=101,Tv=102,Av=103,wv=104,Rv=200,Cv=201,Pv=202,Lv=203,Sl=204,yl=205,Dv=206,Iv=207,Uv=208,Nv=209,Ov=210,Fv=211,Bv=212,zv=213,Hv=214,Ml=0,El=1,bl=2,wr=3,Tl=4,Al=5,wl=6,Rl=7,$d=0,kv=1,Vv=2,mi=0,Gv=1,Wv=2,Xv=3,qv=4,Yv=5,$v=6,Kv=7,Kd=300,Rr=301,Cr=302,Cl=303,Pl=304,na=306,Ll=1e3,Fi=1001,Dl=1002,on=1003,jv=1004,Ns=1005,mn=1006,ba=1007,Bi=1008,Kn=1009,jd=1010,Zd=1011,ms=1012,Hc=1013,Gi=1014,Xn=1015,Es=1016,kc=1017,Vc=1018,Pr=1020,Jd=35902,Qd=1021,ep=1022,_n=1023,tp=1024,np=1025,Sr=1026,Lr=1027,ip=1028,Gc=1029,rp=1030,Wc=1031,Xc=1033,xo=33776,So=33777,yo=33778,Mo=33779,Il=35840,Ul=35841,Nl=35842,Ol=35843,Fl=36196,Bl=37492,zl=37496,Hl=37808,kl=37809,Vl=37810,Gl=37811,Wl=37812,Xl=37813,ql=37814,Yl=37815,$l=37816,Kl=37817,jl=37818,Zl=37819,Jl=37820,Ql=37821,Eo=36492,ec=36494,tc=36495,sp=36283,nc=36284,ic=36285,rc=36286,Zv=3200,Jv=3201,Qv=0,e0=1,fi="",An="srgb",Si="srgb-linear",qc="display-p3",ia="display-p3-linear",No="linear",at="srgb",Oo="rec709",Fo="p3",ji=7680,df=519,t0=512,n0=513,i0=514,op=515,r0=516,s0=517,o0=518,a0=519,sc=35044,pf="300 es",qn=2e3,Bo=2001;class Yi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let mf=1234567;const yr=Math.PI/180,gs=180/Math.PI;function Pn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Rt[n&255]+Rt[n>>8&255]+Rt[n>>16&255]+Rt[n>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[t&63|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[i&255]+Rt[i>>8&255]+Rt[i>>16&255]+Rt[i>>24&255]).toLowerCase()}function vt(n,e,t){return Math.max(e,Math.min(t,n))}function Yc(n,e){return(n%e+e)%e}function l0(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function c0(n,e,t){return n!==e?(t-n)/(e-n):0}function ss(n,e,t){return(1-t)*n+t*e}function u0(n,e,t,i){return ss(n,e,1-Math.exp(-t*i))}function f0(n,e=1){return e-Math.abs(Yc(n,e*2)-e)}function h0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function d0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function p0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function m0(n,e){return n+Math.random()*(e-n)}function g0(n){return n*(.5-Math.random())}function _0(n){n!==void 0&&(mf=n);let e=mf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function v0(n){return n*yr}function x0(n){return n*gs}function S0(n){return(n&n-1)===0&&n!==0}function y0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function M0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function E0(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),f=s((e-i)/2),h=o((e-i)/2),d=s((i-e)/2),_=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*f,l*h,a*c);break;case"YZY":n.set(l*h,a*u,l*f,a*c);break;case"ZXZ":n.set(l*f,l*h,a*u,a*c);break;case"XZX":n.set(a*u,l*_,l*d,a*c);break;case"YXY":n.set(l*d,a*u,l*_,a*c);break;case"ZYZ":n.set(l*_,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function gn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function nt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const b0={DEG2RAD:yr,RAD2DEG:gs,generateUUID:Pn,clamp:vt,euclideanModulo:Yc,mapLinear:l0,inverseLerp:c0,lerp:ss,damp:u0,pingpong:f0,smoothstep:h0,smootherstep:d0,randInt:p0,randFloat:m0,randFloatSpread:g0,seededRandom:_0,degToRad:v0,radToDeg:x0,isPowerOfTwo:S0,ceilPowerOfTwo:y0,floorPowerOfTwo:M0,setQuaternionFromProperEuler:E0,normalize:nt,denormalize:gn};class ye{constructor(e=0,t=0){ye.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,t,i,r,s,o,a,l,c){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],_=i[8],x=r[0],m=r[3],p=r[6],A=r[1],y=r[4],E=r[7],O=r[2],P=r[5],R=r[8];return s[0]=o*x+a*A+l*O,s[3]=o*m+a*y+l*P,s[6]=o*p+a*E+l*R,s[1]=c*x+u*A+f*O,s[4]=c*m+u*y+f*P,s[7]=c*p+u*E+f*R,s[2]=h*x+d*A+_*O,s[5]=h*m+d*y+_*P,s[8]=h*p+d*E+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,_=t*f+i*h+r*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=f*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=h*x,e[4]=(u*t-r*l)*x,e[5]=(r*s-a*t)*x,e[6]=d*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ta.makeScale(e,t)),this}rotate(e){return this.premultiply(Ta.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ta.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ta=new Ve;function ap(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function zo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function T0(){const n=zo("canvas");return n.style.display="block",n}const gf={};function bo(n){n in gf||(gf[n]=!0,console.warn(n))}function A0(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function w0(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function R0(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const _f=new Ve().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),vf=new Ve().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Hr={[Si]:{transfer:No,primaries:Oo,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[An]:{transfer:at,primaries:Oo,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[ia]:{transfer:No,primaries:Fo,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(vf),fromReference:n=>n.applyMatrix3(_f)},[qc]:{transfer:at,primaries:Fo,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(vf),fromReference:n=>n.applyMatrix3(_f).convertLinearToSRGB()}},C0=new Set([Si,ia]),Je={enabled:!0,_workingColorSpace:Si,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!C0.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Hr[e].toReference,r=Hr[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Hr[n].primaries},getTransfer:function(n){return n===fi?No:Hr[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(Hr[e].luminanceCoefficients)}};function Mr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Aa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Zi;class P0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Zi===void 0&&(Zi=zo("canvas")),Zi.width=e.width,Zi.height=e.height;const i=Zi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Zi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=zo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Mr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Mr(t[i]/255)*255):t[i]=Mr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let L0=0;class lp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:L0++}),this.uuid=Pn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(wa(r[o].image)):s.push(wa(r[o]))}else s=wa(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function wa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?P0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let D0=0;class Wt extends Yi{constructor(e=Wt.DEFAULT_IMAGE,t=Wt.DEFAULT_MAPPING,i=Fi,r=Fi,s=mn,o=Bi,a=_n,l=Kn,c=Wt.DEFAULT_ANISOTROPY,u=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:D0++}),this.uuid=Pn(),this.name="",this.source=new lp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ye(0,0),this.repeat=new ye(1,1),this.center=new ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ll:e.x=e.x-Math.floor(e.x);break;case Fi:e.x=e.x<0?0:1;break;case Dl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ll:e.y=e.y-Math.floor(e.y);break;case Fi:e.y=e.y<0?0:1;break;case Dl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=Kd;Wt.DEFAULT_ANISOTROPY=1;class st{constructor(e=0,t=0,i=0,r=1){st.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],_=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+x)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,E=(d+1)/2,O=(p+1)/2,P=(u+h)/4,R=(f+x)/4,U=(_+m)/4;return y>E&&y>O?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=P/i,s=R/i):E>O?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=P/r,s=U/r):O<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(O),i=R/s,r=U/s),this.set(i,r,s,t),this}let A=Math.sqrt((m-_)*(m-_)+(f-x)*(f-x)+(h-u)*(h-u));return Math.abs(A)<.001&&(A=1),this.x=(m-_)/A,this.y=(f-x)/A,this.z=(h-u)/A,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class I0 extends Yi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Wt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new lp(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wi extends I0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class cp extends Wt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class U0 extends Wt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bs{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],d=s[o+1],_=s[o+2],x=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=d,e[t+2]=_,e[t+3]=x;return}if(f!==x||l!==h||c!==d||u!==_){let m=1-a;const p=l*h+c*d+u*_+f*x,A=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const O=Math.sqrt(y),P=Math.atan2(O,p*A);m=Math.sin(m*P)/O,a=Math.sin(a*P)/O}const E=a*A;if(l=l*m+h*E,c=c*m+d*E,u=u*m+_*E,f=f*m+x*E,m===1-a){const O=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=O,c*=O,u*=O,f*=O}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],d=s[o+2],_=s[o+3];return e[t]=a*_+u*f+l*d-c*h,e[t+1]=l*_+u*h+c*f-a*d,e[t+2]=c*_+u*d+a*h-l*f,e[t+3]=u*_-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),d=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"YXZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"ZXY":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"ZYX":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"YZX":this._x=h*u*f+c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f-h*d*_;break;case"XZY":this._x=h*u*f-c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f+h*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ra.copy(this).projectOnVector(e),this.sub(Ra)}reflect(e){return this.sub(Ra.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ra=new D,xf=new bs;class yi{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,cn):cn.fromBufferAttribute(s,o),cn.applyMatrix4(e.matrixWorld),this.expandByPoint(cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Os.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Os.copy(i.boundingBox)),Os.applyMatrix4(e.matrixWorld),this.union(Os)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,cn),cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(kr),Fs.subVectors(this.max,kr),Ji.subVectors(e.a,kr),Qi.subVectors(e.b,kr),er.subVectors(e.c,kr),ti.subVectors(Qi,Ji),ni.subVectors(er,Qi),Ti.subVectors(Ji,er);let t=[0,-ti.z,ti.y,0,-ni.z,ni.y,0,-Ti.z,Ti.y,ti.z,0,-ti.x,ni.z,0,-ni.x,Ti.z,0,-Ti.x,-ti.y,ti.x,0,-ni.y,ni.x,0,-Ti.y,Ti.x,0];return!Ca(t,Ji,Qi,er,Fs)||(t=[1,0,0,0,1,0,0,0,1],!Ca(t,Ji,Qi,er,Fs))?!1:(Bs.crossVectors(ti,ni),t=[Bs.x,Bs.y,Bs.z],Ca(t,Ji,Qi,er,Fs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Fn=[new D,new D,new D,new D,new D,new D,new D,new D],cn=new D,Os=new yi,Ji=new D,Qi=new D,er=new D,ti=new D,ni=new D,Ti=new D,kr=new D,Fs=new D,Bs=new D,Ai=new D;function Ca(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Ai.fromArray(n,s);const a=r.x*Math.abs(Ai.x)+r.y*Math.abs(Ai.y)+r.z*Math.abs(Ai.z),l=e.dot(Ai),c=t.dot(Ai),u=i.dot(Ai);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const N0=new yi,Vr=new D,Pa=new D;class Ur{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):N0.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vr.subVectors(e,this.center);const t=Vr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Vr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vr.copy(e.center).add(Pa)),this.expandByPoint(Vr.copy(e.center).sub(Pa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Bn=new D,La=new D,zs=new D,ii=new D,Da=new D,Hs=new D,Ia=new D;class $c{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bn.copy(this.origin).addScaledVector(this.direction,t),Bn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){La.copy(e).add(t).multiplyScalar(.5),zs.copy(t).sub(e).normalize(),ii.copy(this.origin).sub(La);const s=e.distanceTo(t)*.5,o=-this.direction.dot(zs),a=ii.dot(this.direction),l=-ii.dot(zs),c=ii.lengthSq(),u=Math.abs(1-o*o);let f,h,d,_;if(u>0)if(f=o*l-a,h=o*a-l,_=s*u,f>=0)if(h>=-_)if(h<=_){const x=1/u;f*=x,h*=x,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(La).addScaledVector(zs,h),d}intersectSphere(e,t){Bn.subVectors(e.center,this.origin);const i=Bn.dot(this.direction),r=Bn.dot(Bn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Bn)!==null}intersectTriangle(e,t,i,r,s){Da.subVectors(t,e),Hs.subVectors(i,e),Ia.crossVectors(Da,Hs);let o=this.direction.dot(Ia),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ii.subVectors(this.origin,e);const l=a*this.direction.dot(Hs.crossVectors(ii,Hs));if(l<0)return null;const c=a*this.direction.dot(Da.cross(ii));if(c<0||l+c>o)return null;const u=-a*ii.dot(Ia);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(e,t,i,r,s,o,a,l,c,u,f,h,d,_,x,m){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,h,d,_,x,m)}set(e,t,i,r,s,o,a,l,c,u,f,h,d,_,x,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=_,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/tr.setFromMatrixColumn(e,0).length(),s=1/tr.setFromMatrixColumn(e,1).length(),o=1/tr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,d=o*f,_=a*u,x=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+_*c,t[5]=h-x*c,t[9]=-a*l,t[2]=x-h*c,t[6]=_+d*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,_=c*u,x=c*f;t[0]=h+x*a,t[4]=_*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-_,t[6]=x+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,_=c*u,x=c*f;t[0]=h-x*a,t[4]=-o*f,t[8]=_+d*a,t[1]=d+_*a,t[5]=o*u,t[9]=x-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*f,_=a*u,x=a*f;t[0]=l*u,t[4]=_*c-d,t[8]=h*c+x,t[1]=l*f,t[5]=x*c+h,t[9]=d*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,_=a*l,x=a*c;t[0]=l*u,t[4]=x-h*f,t[8]=_*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+_,t[10]=h-x*f}else if(e.order==="XZY"){const h=o*l,d=o*c,_=a*l,x=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+x,t[5]=o*u,t[9]=d*f-_,t[2]=_*f-d,t[6]=a*u,t[10]=x*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(O0,e,F0)}lookAt(e,t,i){const r=this.elements;return $t.subVectors(e,t),$t.lengthSq()===0&&($t.z=1),$t.normalize(),ri.crossVectors(i,$t),ri.lengthSq()===0&&(Math.abs(i.z)===1?$t.x+=1e-4:$t.z+=1e-4,$t.normalize(),ri.crossVectors(i,$t)),ri.normalize(),ks.crossVectors($t,ri),r[0]=ri.x,r[4]=ks.x,r[8]=$t.x,r[1]=ri.y,r[5]=ks.y,r[9]=$t.y,r[2]=ri.z,r[6]=ks.z,r[10]=$t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],_=i[2],x=i[6],m=i[10],p=i[14],A=i[3],y=i[7],E=i[11],O=i[15],P=r[0],R=r[4],U=r[8],re=r[12],S=r[1],b=r[5],K=r[9],q=r[13],J=r[2],se=r[6],W=r[10],Q=r[14],X=r[3],ge=r[7],xe=r[11],ve=r[15];return s[0]=o*P+a*S+l*J+c*X,s[4]=o*R+a*b+l*se+c*ge,s[8]=o*U+a*K+l*W+c*xe,s[12]=o*re+a*q+l*Q+c*ve,s[1]=u*P+f*S+h*J+d*X,s[5]=u*R+f*b+h*se+d*ge,s[9]=u*U+f*K+h*W+d*xe,s[13]=u*re+f*q+h*Q+d*ve,s[2]=_*P+x*S+m*J+p*X,s[6]=_*R+x*b+m*se+p*ge,s[10]=_*U+x*K+m*W+p*xe,s[14]=_*re+x*q+m*Q+p*ve,s[3]=A*P+y*S+E*J+O*X,s[7]=A*R+y*b+E*se+O*ge,s[11]=A*U+y*K+E*W+O*xe,s[15]=A*re+y*q+E*Q+O*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],_=e[3],x=e[7],m=e[11],p=e[15];return _*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*d-i*l*d)+x*(+t*l*d-t*c*h+s*o*h-r*o*d+r*c*u-s*l*u)+m*(+t*c*f-t*a*d-s*o*f+i*o*d+s*a*u-i*c*u)+p*(-r*a*u-t*l*f+t*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],_=e[12],x=e[13],m=e[14],p=e[15],A=f*m*c-x*h*c+x*l*d-a*m*d-f*l*p+a*h*p,y=_*h*c-u*m*c-_*l*d+o*m*d+u*l*p-o*h*p,E=u*x*c-_*f*c+_*a*d-o*x*d-u*a*p+o*f*p,O=_*f*l-u*x*l-_*a*h+o*x*h+u*a*m-o*f*m,P=t*A+i*y+r*E+s*O;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/P;return e[0]=A*R,e[1]=(x*h*s-f*m*s-x*r*d+i*m*d+f*r*p-i*h*p)*R,e[2]=(a*m*s-x*l*s+x*r*c-i*m*c-a*r*p+i*l*p)*R,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*d-i*l*d)*R,e[4]=y*R,e[5]=(u*m*s-_*h*s+_*r*d-t*m*d-u*r*p+t*h*p)*R,e[6]=(_*l*s-o*m*s-_*r*c+t*m*c+o*r*p-t*l*p)*R,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*d+t*l*d)*R,e[8]=E*R,e[9]=(_*f*s-u*x*s-_*i*d+t*x*d+u*i*p-t*f*p)*R,e[10]=(o*x*s-_*a*s+_*i*c-t*x*c-o*i*p+t*a*p)*R,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*d-t*a*d)*R,e[12]=O*R,e[13]=(u*x*r-_*f*r+_*i*h-t*x*h-u*i*m+t*f*m)*R,e[14]=(_*a*r-o*x*r-_*i*l+t*x*l+o*i*m-t*a*m)*R,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*h+t*a*h)*R,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,_=s*f,x=o*u,m=o*f,p=a*f,A=l*c,y=l*u,E=l*f,O=i.x,P=i.y,R=i.z;return r[0]=(1-(x+p))*O,r[1]=(d+E)*O,r[2]=(_-y)*O,r[3]=0,r[4]=(d-E)*P,r[5]=(1-(h+p))*P,r[6]=(m+A)*P,r[7]=0,r[8]=(_+y)*R,r[9]=(m-A)*R,r[10]=(1-(h+x))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=tr.set(r[0],r[1],r[2]).length();const o=tr.set(r[4],r[5],r[6]).length(),a=tr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],un.copy(this);const c=1/s,u=1/o,f=1/a;return un.elements[0]*=c,un.elements[1]*=c,un.elements[2]*=c,un.elements[4]*=u,un.elements[5]*=u,un.elements[6]*=u,un.elements[8]*=f,un.elements[9]*=f,un.elements[10]*=f,t.setFromRotationMatrix(un),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=qn){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let d,_;if(a===qn)d=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Bo)d=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=qn){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(o-s),h=(t+e)*c,d=(i+r)*u;let _,x;if(a===qn)_=(o+s)*f,x=-2*f;else if(a===Bo)_=s*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const tr=new D,un=new lt,O0=new D(0,0,0),F0=new D(1,1,1),ri=new D,ks=new D,$t=new D,Sf=new lt,yf=new bs;class Dn{constructor(e=0,t=0,i=0,r=Dn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-vt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Sf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yf.setFromEuler(this),this.setFromQuaternion(yf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Dn.DEFAULT_ORDER="XYZ";class Kc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let B0=0;const Mf=new D,nr=new bs,zn=new lt,Vs=new D,Gr=new D,z0=new D,H0=new bs,Ef=new D(1,0,0),bf=new D(0,1,0),Tf=new D(0,0,1),Af={type:"added"},k0={type:"removed"},ir={type:"childadded",child:null},Ua={type:"childremoved",child:null};class Xt extends Yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:B0++}),this.uuid=Pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xt.DEFAULT_UP.clone();const e=new D,t=new Dn,i=new bs,r=new D(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new lt},normalMatrix:{value:new Ve}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=Xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return nr.setFromAxisAngle(e,t),this.quaternion.multiply(nr),this}rotateOnWorldAxis(e,t){return nr.setFromAxisAngle(e,t),this.quaternion.premultiply(nr),this}rotateX(e){return this.rotateOnAxis(Ef,e)}rotateY(e){return this.rotateOnAxis(bf,e)}rotateZ(e){return this.rotateOnAxis(Tf,e)}translateOnAxis(e,t){return Mf.copy(e).applyQuaternion(this.quaternion),this.position.add(Mf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ef,e)}translateY(e){return this.translateOnAxis(bf,e)}translateZ(e){return this.translateOnAxis(Tf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Vs.copy(e):Vs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(Gr,Vs,this.up):zn.lookAt(Vs,Gr,this.up),this.quaternion.setFromRotationMatrix(zn),r&&(zn.extractRotation(r.matrixWorld),nr.setFromRotationMatrix(zn),this.quaternion.premultiply(nr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Af),ir.child=e,this.dispatchEvent(ir),ir.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(k0),Ua.child=e,this.dispatchEvent(Ua),Ua.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Af),ir.child=e,this.dispatchEvent(ir),ir.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gr,e,z0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gr,H0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Xt.DEFAULT_UP=new D(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fn=new D,Hn=new D,Na=new D,kn=new D,rr=new D,sr=new D,wf=new D,Oa=new D,Fa=new D,Ba=new D,za=new st,Ha=new st,ka=new st;class rn{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),fn.subVectors(e,t),r.cross(fn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){fn.subVectors(r,t),Hn.subVectors(i,t),Na.subVectors(e,t);const o=fn.dot(fn),a=fn.dot(Hn),l=fn.dot(Na),c=Hn.dot(Hn),u=Hn.dot(Na),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,_=(o*u-a*l)*h;return s.set(1-d-_,_,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,kn)===null?!1:kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,kn.x),l.addScaledVector(o,kn.y),l.addScaledVector(a,kn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return za.setScalar(0),Ha.setScalar(0),ka.setScalar(0),za.fromBufferAttribute(e,t),Ha.fromBufferAttribute(e,i),ka.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(za,s.x),o.addScaledVector(Ha,s.y),o.addScaledVector(ka,s.z),o}static isFrontFacing(e,t,i,r){return fn.subVectors(i,t),Hn.subVectors(e,t),fn.cross(Hn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),fn.cross(Hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return rn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return rn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;rr.subVectors(r,i),sr.subVectors(s,i),Oa.subVectors(e,i);const l=rr.dot(Oa),c=sr.dot(Oa);if(l<=0&&c<=0)return t.copy(i);Fa.subVectors(e,r);const u=rr.dot(Fa),f=sr.dot(Fa);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(rr,o);Ba.subVectors(e,s);const d=rr.dot(Ba),_=sr.dot(Ba);if(_>=0&&d<=_)return t.copy(s);const x=d*c-l*_;if(x<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(sr,a);const m=u*_-d*f;if(m<=0&&f-u>=0&&d-_>=0)return wf.subVectors(s,r),a=(f-u)/(f-u+(d-_)),t.copy(r).addScaledVector(wf,a);const p=1/(m+x+h);return o=x*p,a=h*p,t.copy(i).addScaledVector(rr,o).addScaledVector(sr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const up={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},si={h:0,s:0,l:0},Gs={h:0,s:0,l:0};function Va(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class $e{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=An){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Je.workingColorSpace){return this.r=e,this.g=t,this.b=i,Je.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Je.workingColorSpace){if(e=Yc(e,1),t=vt(t,0,1),i=vt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Va(o,s,e+1/3),this.g=Va(o,s,e),this.b=Va(o,s,e-1/3)}return Je.toWorkingColorSpace(this,r),this}setStyle(e,t=An){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=An){const i=up[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mr(e.r),this.g=Mr(e.g),this.b=Mr(e.b),this}copyLinearToSRGB(e){return this.r=Aa(e.r),this.g=Aa(e.g),this.b=Aa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=An){return Je.fromWorkingColorSpace(Ct.copy(this),e),Math.round(vt(Ct.r*255,0,255))*65536+Math.round(vt(Ct.g*255,0,255))*256+Math.round(vt(Ct.b*255,0,255))}getHexString(e=An){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace(Ct.copy(this),t);const i=Ct.r,r=Ct.g,s=Ct.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=An){Je.fromWorkingColorSpace(Ct.copy(this),e);const t=Ct.r,i=Ct.g,r=Ct.b;return e!==An?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(si),this.setHSL(si.h+e,si.s+t,si.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(si),e.getHSL(Gs);const i=ss(si.h,Gs.h,t),r=ss(si.s,Gs.s,t),s=ss(si.l,Gs.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ct=new $e;$e.NAMES=up;let V0=0;class Ts extends Yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:V0++}),this.uuid=Pn(),this.name="",this.type="Material",this.blending=xr,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sl,this.blendDst=yl,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=df,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ji,this.stencilZFail=ji,this.stencilZPass=ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==xr&&(i.blending=this.blending),this.side!==_i&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Sl&&(i.blendSrc=this.blendSrc),this.blendDst!==yl&&(i.blendDst=this.blendDst),this.blendEquation!==Ui&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==wr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==df&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ji&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ji&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ji&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class zi extends Ts{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=$d,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pt=new D,Ws=new ye;class Sn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=sc,this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ws.fromBufferAttribute(this,t),Ws.applyMatrix3(e),this.setXY(t,Ws.x,Ws.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix3(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix4(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.applyNormalMatrix(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.transformDirection(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=gn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=nt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gn(t,this.array)),t}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gn(t,this.array)),t}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gn(t,this.array)),t}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array),r=nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array),r=nt(r,this.array),s=nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sc&&(e.usage=this.usage),e}}class fp extends Sn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class hp extends Sn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class xt extends Sn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let G0=0;const tn=new lt,Ga=new Xt,or=new D,Kt=new yi,Wr=new yi,_t=new D;class Qt extends Yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:G0++}),this.uuid=Pn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ap(e)?hp:fp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return tn.makeRotationFromQuaternion(e),this.applyMatrix4(tn),this}rotateX(e){return tn.makeRotationX(e),this.applyMatrix4(tn),this}rotateY(e){return tn.makeRotationY(e),this.applyMatrix4(tn),this}rotateZ(e){return tn.makeRotationZ(e),this.applyMatrix4(tn),this}translate(e,t,i){return tn.makeTranslation(e,t,i),this.applyMatrix4(tn),this}scale(e,t,i){return tn.makeScale(e,t,i),this.applyMatrix4(tn),this}lookAt(e){return Ga.lookAt(e),Ga.updateMatrix(),this.applyMatrix4(Ga.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(or).negate(),this.translate(or.x,or.y,or.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new xt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Kt.setFromBufferAttribute(s),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,Kt.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,Kt.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint(Kt.min),this.boundingBox.expandByPoint(Kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ur);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(Kt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Wr.setFromBufferAttribute(a),this.morphTargetsRelative?(_t.addVectors(Kt.min,Wr.min),Kt.expandByPoint(_t),_t.addVectors(Kt.max,Wr.max),Kt.expandByPoint(_t)):(Kt.expandByPoint(Wr.min),Kt.expandByPoint(Wr.max))}Kt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)_t.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(_t));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)_t.fromBufferAttribute(a,c),l&&(or.fromBufferAttribute(e,c),_t.add(or)),r=Math.max(r,i.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Sn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<i.count;U++)a[U]=new D,l[U]=new D;const c=new D,u=new D,f=new D,h=new ye,d=new ye,_=new ye,x=new D,m=new D;function p(U,re,S){c.fromBufferAttribute(i,U),u.fromBufferAttribute(i,re),f.fromBufferAttribute(i,S),h.fromBufferAttribute(s,U),d.fromBufferAttribute(s,re),_.fromBufferAttribute(s,S),u.sub(c),f.sub(c),d.sub(h),_.sub(h);const b=1/(d.x*_.y-_.x*d.y);isFinite(b)&&(x.copy(u).multiplyScalar(_.y).addScaledVector(f,-d.y).multiplyScalar(b),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(b),a[U].add(x),a[re].add(x),a[S].add(x),l[U].add(m),l[re].add(m),l[S].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let U=0,re=A.length;U<re;++U){const S=A[U],b=S.start,K=S.count;for(let q=b,J=b+K;q<J;q+=3)p(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const y=new D,E=new D,O=new D,P=new D;function R(U){O.fromBufferAttribute(r,U),P.copy(O);const re=a[U];y.copy(re),y.sub(O.multiplyScalar(O.dot(re))).normalize(),E.crossVectors(P,re);const b=E.dot(l[U])<0?-1:1;o.setXYZW(U,y.x,y.y,y.z,b)}for(let U=0,re=A.length;U<re;++U){const S=A[U],b=S.start,K=S.count;for(let q=b,J=b+K;q<J;q+=3)R(e.getX(q+0)),R(e.getX(q+1)),R(e.getX(q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Sn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new D,s=new D,o=new D,a=new D,l=new D,c=new D,u=new D,f=new D;if(e)for(let h=0,d=e.count;h<d;h+=3){const _=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)_t.fromBufferAttribute(e,t),_t.normalize(),e.setXYZ(t,_t.x,_t.y,_t.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,_=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*u;for(let p=0;p<u;p++)h[_++]=c[d++]}return new Sn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Qt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Rf=new lt,wi=new $c,Xs=new Ur,Cf=new D,qs=new D,Ys=new D,$s=new D,Wa=new D,Ks=new D,Pf=new D,js=new D;class zt extends Xt{constructor(e=new Qt,t=new zi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ks.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Wa.fromBufferAttribute(f,e),o?Ks.addScaledVector(Wa,u):Ks.addScaledVector(Wa.sub(t),u))}t.add(Ks)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Xs.copy(i.boundingSphere),Xs.applyMatrix4(s),wi.copy(e.ray).recast(e.near),!(Xs.containsPoint(wi.origin)===!1&&(wi.intersectSphere(Xs,Cf)===null||wi.origin.distanceToSquared(Cf)>(e.far-e.near)**2))&&(Rf.copy(s).invert(),wi.copy(e.ray).applyMatrix4(Rf),!(i.boundingBox!==null&&wi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,wi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=h.length;_<x;_++){const m=h[_],p=o[m.materialIndex],A=Math.max(m.start,d.start),y=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let E=A,O=y;E<O;E+=3){const P=a.getX(E),R=a.getX(E+1),U=a.getX(E+2);r=Zs(this,p,e,i,c,u,f,P,R,U),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=_,p=x;m<p;m+=3){const A=a.getX(m),y=a.getX(m+1),E=a.getX(m+2);r=Zs(this,o,e,i,c,u,f,A,y,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=h.length;_<x;_++){const m=h[_],p=o[m.materialIndex],A=Math.max(m.start,d.start),y=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let E=A,O=y;E<O;E+=3){const P=E,R=E+1,U=E+2;r=Zs(this,p,e,i,c,u,f,P,R,U),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=_,p=x;m<p;m+=3){const A=m,y=m+1,E=m+2;r=Zs(this,o,e,i,c,u,f,A,y,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function W0(n,e,t,i,r,s,o,a){let l;if(e.side===Gt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===_i,a),l===null)return null;js.copy(a),js.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(js);return c<t.near||c>t.far?null:{distance:c,point:js.clone(),object:n}}function Zs(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,qs),n.getVertexPosition(l,Ys),n.getVertexPosition(c,$s);const u=W0(n,e,t,i,qs,Ys,$s,Pf);if(u){const f=new D;rn.getBarycoord(Pf,qs,Ys,$s,f),r&&(u.uv=rn.getInterpolatedAttribute(r,a,l,c,f,new ye)),s&&(u.uv1=rn.getInterpolatedAttribute(s,a,l,c,f,new ye)),o&&(u.normal=rn.getInterpolatedAttribute(o,a,l,c,f,new D),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new D,materialIndex:0};rn.getNormal(qs,Ys,$s,h.normal),u.face=h,u.barycoord=f}return u}class Nr extends Qt{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new xt(c,3)),this.setAttribute("normal",new xt(u,3)),this.setAttribute("uv",new xt(f,2));function _(x,m,p,A,y,E,O,P,R,U,re){const S=E/R,b=O/U,K=E/2,q=O/2,J=P/2,se=R+1,W=U+1;let Q=0,X=0;const ge=new D;for(let xe=0;xe<W;xe++){const ve=xe*b-q;for(let Oe=0;Oe<se;Oe++){const Ge=Oe*S-K;ge[x]=Ge*A,ge[m]=ve*y,ge[p]=J,c.push(ge.x,ge.y,ge.z),ge[x]=0,ge[m]=0,ge[p]=P>0?1:-1,u.push(ge.x,ge.y,ge.z),f.push(Oe/R),f.push(1-xe/U),Q+=1}}for(let xe=0;xe<U;xe++)for(let ve=0;ve<R;ve++){const Oe=h+ve+se*xe,Ge=h+ve+se*(xe+1),ne=h+(ve+1)+se*(xe+1),he=h+(ve+1)+se*xe;l.push(Oe,Ge,he),l.push(Ge,ne,he),X+=6}a.addGroup(d,X,re),d+=X,h+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Dr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Ot(n){const e={};for(let t=0;t<n.length;t++){const i=Dr(n[t]);for(const r in i)e[r]=i[r]}return e}function X0(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function dp(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const jc={clone:Dr,merge:Ot};var q0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Y0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class jn extends Ts{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=q0,this.fragmentShader=Y0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Dr(e.uniforms),this.uniformsGroups=X0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class pp extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=qn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const oi=new D,Lf=new ye,Df=new ye;class nn extends pp{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=gs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(yr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gs*2*Math.atan(Math.tan(yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(oi.x,oi.y).multiplyScalar(-e/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(oi.x,oi.y).multiplyScalar(-e/oi.z)}getViewSize(e,t){return this.getViewBounds(e,Lf,Df),t.subVectors(Df,Lf)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(yr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ar=-90,lr=1;class $0 extends Xt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new nn(ar,lr,e,t);r.layers=this.layers,this.add(r);const s=new nn(ar,lr,e,t);s.layers=this.layers,this.add(s);const o=new nn(ar,lr,e,t);o.layers=this.layers,this.add(o);const a=new nn(ar,lr,e,t);a.layers=this.layers,this.add(a);const l=new nn(ar,lr,e,t);l.layers=this.layers,this.add(l);const c=new nn(ar,lr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===qn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Bo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class mp extends Wt{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Rr,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class K0 extends Wi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new mp(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:mn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Nr(5,5,5),s=new jn({name:"CubemapFromEquirect",uniforms:Dr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Gt,blending:pi});s.uniforms.tEquirect.value=t;const o=new zt(r,s),a=t.minFilter;return t.minFilter===Bi&&(t.minFilter=mn),new $0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Xa=new D,j0=new D,Z0=new Ve;class Di{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Xa.subVectors(i,t).cross(j0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Xa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Z0.getNormalMatrix(e),r=this.coplanarPoint(Xa).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ri=new Ur,Js=new D;class gp{constructor(e=new Di,t=new Di,i=new Di,r=new Di,s=new Di,o=new Di){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=qn){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],d=r[8],_=r[9],x=r[10],m=r[11],p=r[12],A=r[13],y=r[14],E=r[15];if(i[0].setComponents(l-s,h-c,m-d,E-p).normalize(),i[1].setComponents(l+s,h+c,m+d,E+p).normalize(),i[2].setComponents(l+o,h+u,m+_,E+A).normalize(),i[3].setComponents(l-o,h-u,m-_,E-A).normalize(),i[4].setComponents(l-a,h-f,m-x,E-y).normalize(),t===qn)i[5].setComponents(l+a,h+f,m+x,E+y).normalize();else if(t===Bo)i[5].setComponents(a,f,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(e){return Ri.center.set(0,0,0),Ri.radius=.7071067811865476,Ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Js.x=r.normal.x>0?e.max.x:e.min.x,Js.y=r.normal.y>0?e.max.y:e.min.y,Js.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Js)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function _p(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function J0(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((d,_)=>d.start-_.start);let h=0;for(let d=1;d<f.length;d++){const _=f[h],x=f[d];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++h,f[h]=x)}f.length=h+1;for(let d=0,_=f.length;d<_;d++){const x=f[d];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class As extends Qt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,d=[],_=[],x=[],m=[];for(let p=0;p<u;p++){const A=p*h-o;for(let y=0;y<c;y++){const E=y*f-s;_.push(E,-A,0),x.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let A=0;A<a;A++){const y=A+c*p,E=A+c*(p+1),O=A+1+c*(p+1),P=A+1+c*p;d.push(y,E,P),d.push(E,O,P)}this.setIndex(d),this.setAttribute("position",new xt(_,3)),this.setAttribute("normal",new xt(x,3)),this.setAttribute("uv",new xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new As(e.width,e.height,e.widthSegments,e.heightSegments)}}var Q0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ex=`#ifdef USE_ALPHAHASH
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
#endif`,tx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ix=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sx=`#ifdef USE_AOMAP
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
#endif`,ox=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ax=`#ifdef USE_BATCHING
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
#endif`,lx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ux=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hx=`#ifdef USE_IRIDESCENCE
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
#endif`,dx=`#ifdef USE_BUMPMAP
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
#endif`,px=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_x=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Sx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Mx=`#define PI 3.141592653589793
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
} // validated`,Ex=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bx=`vec3 transformedNormal = objectNormal;
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
#endif`,Tx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ax=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Px=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lx=`#ifdef USE_ENVMAP
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
#endif`,Dx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ix=`#ifdef USE_ENVMAP
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
#endif`,Ux=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nx=`#ifdef USE_ENVMAP
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
#endif`,Ox=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hx=`#ifdef USE_GRADIENTMAP
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
}`,kx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wx=`uniform bool receiveShadow;
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
#endif`,Xx=`#ifdef USE_ENVMAP
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
#endif`,qx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$x=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jx=`PhysicalMaterial material;
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
#endif`,Zx=`struct PhysicalMaterial {
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
}`,Jx=`
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
#endif`,Qx=`#if defined( RE_IndirectDiffuse )
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
#endif`,eS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,oS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,aS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lS=`#if defined( USE_POINTS_UV )
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
#endif`,cS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pS=`#ifdef USE_MORPHTARGETS
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
#endif`,mS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_S=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yS=`#ifdef USE_NORMALMAP
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
#endif`,MS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ES=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,TS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,AS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,RS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,CS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,PS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,LS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,DS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,IS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,US=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,NS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,OS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,FS=`float getShadowMask() {
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
}`,BS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zS=`#ifdef USE_SKINNING
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
#endif`,HS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kS=`#ifdef USE_SKINNING
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
#endif`,VS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,GS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,WS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,XS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qS=`#ifdef USE_TRANSMISSION
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
#endif`,YS=`#ifdef USE_TRANSMISSION
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
#endif`,$S=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,KS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ZS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const JS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,QS=`uniform sampler2D t2D;
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
}`,ey=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ty=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ny=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ry=`#include <common>
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
}`,sy=`#if DEPTH_PACKING == 3200
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
}`,oy=`#define DISTANCE
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
}`,ay=`#define DISTANCE
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
}`,ly=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uy=`uniform float scale;
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
}`,fy=`uniform vec3 diffuse;
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
}`,hy=`#include <common>
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
}`,dy=`uniform vec3 diffuse;
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
}`,py=`#define LAMBERT
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
}`,my=`#define LAMBERT
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
}`,gy=`#define MATCAP
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
}`,_y=`#define MATCAP
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
}`,vy=`#define NORMAL
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
}`,xy=`#define NORMAL
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
}`,Sy=`#define PHONG
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
}`,yy=`#define PHONG
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
}`,My=`#define STANDARD
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
}`,Ey=`#define STANDARD
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
}`,by=`#define TOON
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
}`,Ty=`#define TOON
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
}`,Ay=`uniform float size;
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
}`,wy=`uniform vec3 diffuse;
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
}`,Ry=`#include <common>
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
}`,Cy=`uniform vec3 color;
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
}`,Py=`uniform float rotation;
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
}`,Ly=`uniform vec3 diffuse;
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
}`,ke={alphahash_fragment:Q0,alphahash_pars_fragment:ex,alphamap_fragment:tx,alphamap_pars_fragment:nx,alphatest_fragment:ix,alphatest_pars_fragment:rx,aomap_fragment:sx,aomap_pars_fragment:ox,batching_pars_vertex:ax,batching_vertex:lx,begin_vertex:cx,beginnormal_vertex:ux,bsdfs:fx,iridescence_fragment:hx,bumpmap_pars_fragment:dx,clipping_planes_fragment:px,clipping_planes_pars_fragment:mx,clipping_planes_pars_vertex:gx,clipping_planes_vertex:_x,color_fragment:vx,color_pars_fragment:xx,color_pars_vertex:Sx,color_vertex:yx,common:Mx,cube_uv_reflection_fragment:Ex,defaultnormal_vertex:bx,displacementmap_pars_vertex:Tx,displacementmap_vertex:Ax,emissivemap_fragment:wx,emissivemap_pars_fragment:Rx,colorspace_fragment:Cx,colorspace_pars_fragment:Px,envmap_fragment:Lx,envmap_common_pars_fragment:Dx,envmap_pars_fragment:Ix,envmap_pars_vertex:Ux,envmap_physical_pars_fragment:Xx,envmap_vertex:Nx,fog_vertex:Ox,fog_pars_vertex:Fx,fog_fragment:Bx,fog_pars_fragment:zx,gradientmap_pars_fragment:Hx,lightmap_pars_fragment:kx,lights_lambert_fragment:Vx,lights_lambert_pars_fragment:Gx,lights_pars_begin:Wx,lights_toon_fragment:qx,lights_toon_pars_fragment:Yx,lights_phong_fragment:$x,lights_phong_pars_fragment:Kx,lights_physical_fragment:jx,lights_physical_pars_fragment:Zx,lights_fragment_begin:Jx,lights_fragment_maps:Qx,lights_fragment_end:eS,logdepthbuf_fragment:tS,logdepthbuf_pars_fragment:nS,logdepthbuf_pars_vertex:iS,logdepthbuf_vertex:rS,map_fragment:sS,map_pars_fragment:oS,map_particle_fragment:aS,map_particle_pars_fragment:lS,metalnessmap_fragment:cS,metalnessmap_pars_fragment:uS,morphinstance_vertex:fS,morphcolor_vertex:hS,morphnormal_vertex:dS,morphtarget_pars_vertex:pS,morphtarget_vertex:mS,normal_fragment_begin:gS,normal_fragment_maps:_S,normal_pars_fragment:vS,normal_pars_vertex:xS,normal_vertex:SS,normalmap_pars_fragment:yS,clearcoat_normal_fragment_begin:MS,clearcoat_normal_fragment_maps:ES,clearcoat_pars_fragment:bS,iridescence_pars_fragment:TS,opaque_fragment:AS,packing:wS,premultiplied_alpha_fragment:RS,project_vertex:CS,dithering_fragment:PS,dithering_pars_fragment:LS,roughnessmap_fragment:DS,roughnessmap_pars_fragment:IS,shadowmap_pars_fragment:US,shadowmap_pars_vertex:NS,shadowmap_vertex:OS,shadowmask_pars_fragment:FS,skinbase_vertex:BS,skinning_pars_vertex:zS,skinning_vertex:HS,skinnormal_vertex:kS,specularmap_fragment:VS,specularmap_pars_fragment:GS,tonemapping_fragment:WS,tonemapping_pars_fragment:XS,transmission_fragment:qS,transmission_pars_fragment:YS,uv_pars_fragment:$S,uv_pars_vertex:KS,uv_vertex:jS,worldpos_vertex:ZS,background_vert:JS,background_frag:QS,backgroundCube_vert:ey,backgroundCube_frag:ty,cube_vert:ny,cube_frag:iy,depth_vert:ry,depth_frag:sy,distanceRGBA_vert:oy,distanceRGBA_frag:ay,equirect_vert:ly,equirect_frag:cy,linedashed_vert:uy,linedashed_frag:fy,meshbasic_vert:hy,meshbasic_frag:dy,meshlambert_vert:py,meshlambert_frag:my,meshmatcap_vert:gy,meshmatcap_frag:_y,meshnormal_vert:vy,meshnormal_frag:xy,meshphong_vert:Sy,meshphong_frag:yy,meshphysical_vert:My,meshphysical_frag:Ey,meshtoon_vert:by,meshtoon_frag:Ty,points_vert:Ay,points_frag:wy,shadow_vert:Ry,shadow_frag:Cy,sprite_vert:Py,sprite_frag:Ly},_e={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Vt={basic:{uniforms:Ot([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Ot([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new $e(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Ot([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Ot([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Ot([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new $e(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Ot([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Ot([_e.points,_e.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Ot([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Ot([_e.common,_e.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Ot([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Ot([_e.sprite,_e.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:Ot([_e.common,_e.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:Ot([_e.lights,_e.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};Vt.physical={uniforms:Ot([Vt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const Qs={r:0,b:0,g:0},Ci=new Dn,Dy=new lt;function Iy(n,e,t,i,r,s,o){const a=new $e(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function _(A){let y=A.isScene===!0?A.background:null;return y&&y.isTexture&&(y=(A.backgroundBlurriness>0?t:e).get(y)),y}function x(A){let y=!1;const E=_(A);E===null?p(a,l):E&&E.isColor&&(p(E,1),y=!0);const O=n.xr.getEnvironmentBlendMode();O==="additive"?i.buffers.color.setClear(0,0,0,1,o):O==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(A,y){const E=_(y);E&&(E.isCubeTexture||E.mapping===na)?(u===void 0&&(u=new zt(new Nr(1,1,1),new jn({name:"BackgroundCubeMaterial",uniforms:Dr(Vt.backgroundCube.uniforms),vertexShader:Vt.backgroundCube.vertexShader,fragmentShader:Vt.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(O,P,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Ci.copy(y.backgroundRotation),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Dy.makeRotationFromEuler(Ci)),u.material.toneMapped=Je.getTransfer(E.colorSpace)!==at,(f!==E||h!==E.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,f=E,h=E.version,d=n.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new zt(new As(2,2),new jn({name:"BackgroundMaterial",uniforms:Dr(Vt.background.uniforms),vertexShader:Vt.background.vertexShader,fragmentShader:Vt.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Je.getTransfer(E.colorSpace)!==at,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||h!==E.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=E,h=E.version,d=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function p(A,y){A.getRGB(Qs,dp(n)),i.buffers.color.setClear(Qs.r,Qs.g,Qs.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(A,y=1){a.set(A),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,p(a,l)},render:x,addToRenderList:m}}function Uy(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(S,b,K,q,J){let se=!1;const W=f(q,K,b);s!==W&&(s=W,c(s.object)),se=d(S,q,K,J),se&&_(S,q,K,J),J!==null&&e.update(J,n.ELEMENT_ARRAY_BUFFER),(se||o)&&(o=!1,E(S,b,K,q),J!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function f(S,b,K){const q=K.wireframe===!0;let J=i[S.id];J===void 0&&(J={},i[S.id]=J);let se=J[b.id];se===void 0&&(se={},J[b.id]=se);let W=se[q];return W===void 0&&(W=h(l()),se[q]=W),W}function h(S){const b=[],K=[],q=[];for(let J=0;J<t;J++)b[J]=0,K[J]=0,q[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:K,attributeDivisors:q,object:S,attributes:{},index:null}}function d(S,b,K,q){const J=s.attributes,se=b.attributes;let W=0;const Q=K.getAttributes();for(const X in Q)if(Q[X].location>=0){const xe=J[X];let ve=se[X];if(ve===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(ve=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(ve=S.instanceColor)),xe===void 0||xe.attribute!==ve||ve&&xe.data!==ve.data)return!0;W++}return s.attributesNum!==W||s.index!==q}function _(S,b,K,q){const J={},se=b.attributes;let W=0;const Q=K.getAttributes();for(const X in Q)if(Q[X].location>=0){let xe=se[X];xe===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(xe=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(xe=S.instanceColor));const ve={};ve.attribute=xe,xe&&xe.data&&(ve.data=xe.data),J[X]=ve,W++}s.attributes=J,s.attributesNum=W,s.index=q}function x(){const S=s.newAttributes;for(let b=0,K=S.length;b<K;b++)S[b]=0}function m(S){p(S,0)}function p(S,b){const K=s.newAttributes,q=s.enabledAttributes,J=s.attributeDivisors;K[S]=1,q[S]===0&&(n.enableVertexAttribArray(S),q[S]=1),J[S]!==b&&(n.vertexAttribDivisor(S,b),J[S]=b)}function A(){const S=s.newAttributes,b=s.enabledAttributes;for(let K=0,q=b.length;K<q;K++)b[K]!==S[K]&&(n.disableVertexAttribArray(K),b[K]=0)}function y(S,b,K,q,J,se,W){W===!0?n.vertexAttribIPointer(S,b,K,J,se):n.vertexAttribPointer(S,b,K,q,J,se)}function E(S,b,K,q){x();const J=q.attributes,se=K.getAttributes(),W=b.defaultAttributeValues;for(const Q in se){const X=se[Q];if(X.location>=0){let ge=J[Q];if(ge===void 0&&(Q==="instanceMatrix"&&S.instanceMatrix&&(ge=S.instanceMatrix),Q==="instanceColor"&&S.instanceColor&&(ge=S.instanceColor)),ge!==void 0){const xe=ge.normalized,ve=ge.itemSize,Oe=e.get(ge);if(Oe===void 0)continue;const Ge=Oe.buffer,ne=Oe.type,he=Oe.bytesPerElement,Se=ne===n.INT||ne===n.UNSIGNED_INT||ge.gpuType===Hc;if(ge.isInterleavedBufferAttribute){const F=ge.data,oe=F.stride,ie=ge.offset;if(F.isInstancedInterleavedBuffer){for(let fe=0;fe<X.locationSize;fe++)p(X.location+fe,F.meshPerAttribute);S.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let fe=0;fe<X.locationSize;fe++)m(X.location+fe);n.bindBuffer(n.ARRAY_BUFFER,Ge);for(let fe=0;fe<X.locationSize;fe++)y(X.location+fe,ve/X.locationSize,ne,xe,oe*he,(ie+ve/X.locationSize*fe)*he,Se)}else{if(ge.isInstancedBufferAttribute){for(let F=0;F<X.locationSize;F++)p(X.location+F,ge.meshPerAttribute);S.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let F=0;F<X.locationSize;F++)m(X.location+F);n.bindBuffer(n.ARRAY_BUFFER,Ge);for(let F=0;F<X.locationSize;F++)y(X.location+F,ve/X.locationSize,ne,xe,ve*he,ve/X.locationSize*F*he,Se)}}else if(W!==void 0){const xe=W[Q];if(xe!==void 0)switch(xe.length){case 2:n.vertexAttrib2fv(X.location,xe);break;case 3:n.vertexAttrib3fv(X.location,xe);break;case 4:n.vertexAttrib4fv(X.location,xe);break;default:n.vertexAttrib1fv(X.location,xe)}}}}A()}function O(){U();for(const S in i){const b=i[S];for(const K in b){const q=b[K];for(const J in q)u(q[J].object),delete q[J];delete b[K]}delete i[S]}}function P(S){if(i[S.id]===void 0)return;const b=i[S.id];for(const K in b){const q=b[K];for(const J in q)u(q[J].object),delete q[J];delete b[K]}delete i[S.id]}function R(S){for(const b in i){const K=i[b];if(K[S.id]===void 0)continue;const q=K[S.id];for(const J in q)u(q[J].object),delete q[J];delete K[S.id]}}function U(){re(),o=!0,s!==r&&(s=r,c(s.object))}function re(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:U,resetDefaultState:re,dispose:O,releaseStatesOfGeometry:P,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:A}}function Ny(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let d=0;for(let _=0;_<f;_++)d+=u[_];t.update(d,i,1)}function l(c,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)o(c[_],u[_],h[_]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let _=0;for(let x=0;x<f;x++)_+=u[x];for(let x=0;x<h.length;x++)t.update(_,i,h[x])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Oy(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==_n&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const U=R===Es&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Kn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Xn&&!U)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(h===!0){const R=e.get("EXT_clip_control");R.clipControlEXT(R.LOWER_LEFT_EXT,R.ZERO_TO_ONE_EXT)}const d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),O=_>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:A,maxVaryings:y,maxFragmentUniforms:E,vertexTextures:O,maxSamples:P}}function Fy(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Di,a=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||r;return r=h,i=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const _=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const A=s?0:i,y=A*4;let E=p.clippingState||null;l.value=E,E=u(_,h,y,d);for(let O=0;O!==y;++O)E[O]=t[O];p.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,_){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=l.value,_!==!0||m===null){const p=d+x*4,A=h.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,E=d;y!==x;++y,E+=4)o.copy(f[y]).applyMatrix4(A,a),o.normal.toArray(m,E),m[E+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function By(n){let e=new WeakMap;function t(o,a){return a===Cl?o.mapping=Rr:a===Pl&&(o.mapping=Cr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Cl||a===Pl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new K0(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class zy extends pp{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const pr=4,If=[.125,.215,.35,.446,.526,.582],Ni=20,qa=new zy,Uf=new $e;let Ya=null,$a=0,Ka=0,ja=!1;const Ii=(1+Math.sqrt(5))/2,cr=1/Ii,Nf=[new D(-Ii,cr,0),new D(Ii,cr,0),new D(-cr,0,Ii),new D(cr,0,Ii),new D(0,Ii,-cr),new D(0,Ii,cr),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class Of{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Ya=this._renderer.getRenderTarget(),$a=this._renderer.getActiveCubeFace(),Ka=this._renderer.getActiveMipmapLevel(),ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ya,$a,Ka),this._renderer.xr.enabled=ja,e.scissorTest=!1,eo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Rr||e.mapping===Cr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ya=this._renderer.getRenderTarget(),$a=this._renderer.getActiveCubeFace(),Ka=this._renderer.getActiveMipmapLevel(),ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:Es,format:_n,colorSpace:Si,depthBuffer:!1},r=Ff(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ff(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hy(s)),this._blurMaterial=ky(s,e,t)}return r}_compileMaterial(e){const t=new zt(this._lodPlanes[0],e);this._renderer.compile(t,qa)}_sceneToCubeUV(e,t,i,r){const a=new nn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Uf),u.toneMapping=mi,u.autoClear=!1;const d=new zi({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1}),_=new zt(new Nr,d);let x=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,x=!0):(d.color.copy(Uf),x=!0);for(let p=0;p<6;p++){const A=p%3;A===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):A===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const y=this._cubeSize;eo(r,A*y,p>2?y:0,y,y),u.setRenderTarget(r),x&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Rr||e.mapping===Cr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=zf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bf());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new zt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;eo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,qa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Nf[(r-s-1)%Nf.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new zt(this._lodPlanes[r],c),h=c.uniforms,d=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Ni-1),x=s/_,m=isFinite(s)?1+Math.floor(u*x):Ni;m>Ni&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ni}`);const p=[];let A=0;for(let R=0;R<Ni;++R){const U=R/x,re=Math.exp(-U*U/2);p.push(re),R===0?A+=re:R<m&&(A+=2*re)}for(let R=0;R<p.length;R++)p[R]=p[R]/A;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:y}=this;h.dTheta.value=_,h.mipInt.value=y-i;const E=this._sizeLods[r],O=3*E*(r>y-pr?r-y+pr:0),P=4*(this._cubeSize-E);eo(t,O,P,3*E,2*E),l.setRenderTarget(t),l.render(f,qa)}}function Hy(n){const e=[],t=[],i=[];let r=n;const s=n-pr+1+If.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-pr?l=If[o-n+pr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,_=6,x=3,m=2,p=1,A=new Float32Array(x*_*d),y=new Float32Array(m*_*d),E=new Float32Array(p*_*d);for(let P=0;P<d;P++){const R=P%3*2/3-1,U=P>2?0:-1,re=[R,U,0,R+2/3,U,0,R+2/3,U+1,0,R,U,0,R+2/3,U+1,0,R,U+1,0];A.set(re,x*_*P),y.set(h,m*_*P);const S=[P,P,P,P,P,P];E.set(S,p*_*P)}const O=new Qt;O.setAttribute("position",new Sn(A,x)),O.setAttribute("uv",new Sn(y,m)),O.setAttribute("faceIndex",new Sn(E,p)),e.push(O),r>pr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ff(n,e,t){const i=new Wi(n,e,t);return i.texture.mapping=na,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function eo(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function ky(n,e,t){const i=new Float32Array(Ni),r=new D(0,1,0);return new jn({name:"SphericalGaussianBlur",defines:{n:Ni,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Zc(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Bf(){return new jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zc(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function zf(){return new jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Zc(){return`

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
	`}function Vy(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Cl||l===Pl,u=l===Rr||l===Cr;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Of(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&r(d)?(t===null&&(t=new Of(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Gy(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&bo("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Wy(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const x=h.morphAttributes[_];for(let m=0,p=x.length;m<p;m++)e.remove(x[m])}h.removeEventListener("dispose",o),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)e.update(h[_],n.ARRAY_BUFFER);const d=f.morphAttributes;for(const _ in d){const x=d[_];for(let m=0,p=x.length;m<p;m++)e.update(x[m],n.ARRAY_BUFFER)}}function c(f){const h=[],d=f.index,_=f.attributes.position;let x=0;if(d!==null){const A=d.array;x=d.version;for(let y=0,E=A.length;y<E;y+=3){const O=A[y+0],P=A[y+1],R=A[y+2];h.push(O,P,P,R,R,O)}}else if(_!==void 0){const A=_.array;x=_.version;for(let y=0,E=A.length/3-1;y<E;y+=3){const O=y+0,P=y+1,R=y+2;h.push(O,P,P,R,R,O)}}else return;const m=new(ap(h)?hp:fp)(h,1);m.version=x;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function Xy(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){n.drawElements(i,d,s,h*o),t.update(d,i,1)}function c(h,d,_){_!==0&&(n.drawElementsInstanced(i,d,s,h*o,_),t.update(d,i,_))}function u(h,d,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,_);let m=0;for(let p=0;p<_;p++)m+=d[p];t.update(m,i,1)}function f(h,d,_,x){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/o,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,s,h,0,x,0,_);let p=0;for(let A=0;A<_;A++)p+=d[A];for(let A=0;A<x.length;A++)t.update(p,i,x[A])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function qy(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Yy(n,e,t){const i=new WeakMap,r=new st;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let S=function(){U.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var d=S;h!==void 0&&h.texture.dispose();const _=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],A=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let E=0;_===!0&&(E=1),x===!0&&(E=2),m===!0&&(E=3);let O=a.attributes.position.count*E,P=1;O>e.maxTextureSize&&(P=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const R=new Float32Array(O*P*4*f),U=new cp(R,O,P,f);U.type=Xn,U.needsUpdate=!0;const re=E*4;for(let b=0;b<f;b++){const K=p[b],q=A[b],J=y[b],se=O*P*4*b;for(let W=0;W<K.count;W++){const Q=W*re;_===!0&&(r.fromBufferAttribute(K,W),R[se+Q+0]=r.x,R[se+Q+1]=r.y,R[se+Q+2]=r.z,R[se+Q+3]=0),x===!0&&(r.fromBufferAttribute(q,W),R[se+Q+4]=r.x,R[se+Q+5]=r.y,R[se+Q+6]=r.z,R[se+Q+7]=0),m===!0&&(r.fromBufferAttribute(J,W),R[se+Q+8]=r.x,R[se+Q+9]=r.y,R[se+Q+10]=r.z,R[se+Q+11]=J.itemSize===4?r.w:1)}}h={count:f,texture:U,size:new ye(O,P)},i.set(a,h),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const x=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function $y(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class vp extends Wt{constructor(e,t,i,r,s,o,a,l,c,u=Sr){if(u!==Sr&&u!==Lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Sr&&(i=Gi),i===void 0&&u===Lr&&(i=Pr),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:on,this.minFilter=l!==void 0?l:on,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const xp=new Wt,Hf=new vp(1,1),Sp=new cp,yp=new U0,Mp=new mp,kf=[],Vf=[],Gf=new Float32Array(16),Wf=new Float32Array(9),Xf=new Float32Array(4);function Or(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=kf[r];if(s===void 0&&(s=new Float32Array(r),kf[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function mt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function gt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ra(n,e){let t=Vf[e];t===void 0&&(t=new Int32Array(e),Vf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Ky(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function jy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;n.uniform2fv(this.addr,e),gt(t,e)}}function Zy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mt(t,e))return;n.uniform3fv(this.addr,e),gt(t,e)}}function Jy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;n.uniform4fv(this.addr,e),gt(t,e)}}function Qy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,i))return;Xf.set(i),n.uniformMatrix2fv(this.addr,!1,Xf),gt(t,i)}}function eM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,i))return;Wf.set(i),n.uniformMatrix3fv(this.addr,!1,Wf),gt(t,i)}}function tM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,i))return;Gf.set(i),n.uniformMatrix4fv(this.addr,!1,Gf),gt(t,i)}}function nM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function iM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;n.uniform2iv(this.addr,e),gt(t,e)}}function rM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;n.uniform3iv(this.addr,e),gt(t,e)}}function sM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;n.uniform4iv(this.addr,e),gt(t,e)}}function oM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function aM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;n.uniform2uiv(this.addr,e),gt(t,e)}}function lM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;n.uniform3uiv(this.addr,e),gt(t,e)}}function cM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;n.uniform4uiv(this.addr,e),gt(t,e)}}function uM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Hf.compareFunction=op,s=Hf):s=xp,t.setTexture2D(e||s,r)}function fM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||yp,r)}function hM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Mp,r)}function dM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Sp,r)}function pM(n){switch(n){case 5126:return Ky;case 35664:return jy;case 35665:return Zy;case 35666:return Jy;case 35674:return Qy;case 35675:return eM;case 35676:return tM;case 5124:case 35670:return nM;case 35667:case 35671:return iM;case 35668:case 35672:return rM;case 35669:case 35673:return sM;case 5125:return oM;case 36294:return aM;case 36295:return lM;case 36296:return cM;case 35678:case 36198:case 36298:case 36306:case 35682:return uM;case 35679:case 36299:case 36307:return fM;case 35680:case 36300:case 36308:case 36293:return hM;case 36289:case 36303:case 36311:case 36292:return dM}}function mM(n,e){n.uniform1fv(this.addr,e)}function gM(n,e){const t=Or(e,this.size,2);n.uniform2fv(this.addr,t)}function _M(n,e){const t=Or(e,this.size,3);n.uniform3fv(this.addr,t)}function vM(n,e){const t=Or(e,this.size,4);n.uniform4fv(this.addr,t)}function xM(n,e){const t=Or(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function SM(n,e){const t=Or(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function yM(n,e){const t=Or(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function MM(n,e){n.uniform1iv(this.addr,e)}function EM(n,e){n.uniform2iv(this.addr,e)}function bM(n,e){n.uniform3iv(this.addr,e)}function TM(n,e){n.uniform4iv(this.addr,e)}function AM(n,e){n.uniform1uiv(this.addr,e)}function wM(n,e){n.uniform2uiv(this.addr,e)}function RM(n,e){n.uniform3uiv(this.addr,e)}function CM(n,e){n.uniform4uiv(this.addr,e)}function PM(n,e,t){const i=this.cache,r=e.length,s=ra(t,r);mt(i,s)||(n.uniform1iv(this.addr,s),gt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||xp,s[o])}function LM(n,e,t){const i=this.cache,r=e.length,s=ra(t,r);mt(i,s)||(n.uniform1iv(this.addr,s),gt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||yp,s[o])}function DM(n,e,t){const i=this.cache,r=e.length,s=ra(t,r);mt(i,s)||(n.uniform1iv(this.addr,s),gt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Mp,s[o])}function IM(n,e,t){const i=this.cache,r=e.length,s=ra(t,r);mt(i,s)||(n.uniform1iv(this.addr,s),gt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Sp,s[o])}function UM(n){switch(n){case 5126:return mM;case 35664:return gM;case 35665:return _M;case 35666:return vM;case 35674:return xM;case 35675:return SM;case 35676:return yM;case 5124:case 35670:return MM;case 35667:case 35671:return EM;case 35668:case 35672:return bM;case 35669:case 35673:return TM;case 5125:return AM;case 36294:return wM;case 36295:return RM;case 36296:return CM;case 35678:case 36198:case 36298:case 36306:case 35682:return PM;case 35679:case 36299:case 36307:return LM;case 35680:case 36300:case 36308:case 36293:return DM;case 36289:case 36303:case 36311:case 36292:return IM}}class NM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=pM(t.type)}}class OM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=UM(t.type)}}class FM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Za=/(\w+)(\])?(\[|\.)?/g;function qf(n,e){n.seq.push(e),n.map[e.id]=e}function BM(n,e,t){const i=n.name,r=i.length;for(Za.lastIndex=0;;){const s=Za.exec(i),o=Za.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){qf(t,c===void 0?new NM(a,n,e):new OM(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new FM(a),qf(t,f)),t=f}}}class To{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);BM(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Yf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const zM=37297;let HM=0;function kM(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function VM(n){const e=Je.getPrimaries(Je.workingColorSpace),t=Je.getPrimaries(n);let i;switch(e===t?i="":e===Fo&&t===Oo?i="LinearDisplayP3ToLinearSRGB":e===Oo&&t===Fo&&(i="LinearSRGBToLinearDisplayP3"),n){case Si:case ia:return[i,"LinearTransferOETF"];case An:case qc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function $f(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+kM(n.getShaderSource(e),o)}else return r}function GM(n,e){const t=VM(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function WM(n,e){let t;switch(e){case Gv:t="Linear";break;case Wv:t="Reinhard";break;case Xv:t="Cineon";break;case qv:t="ACESFilmic";break;case $v:t="AgX";break;case Kv:t="Neutral";break;case Yv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const to=new D;function XM(){Je.getLuminanceCoefficients(to);const n=to.x.toFixed(4),e=to.y.toFixed(4),t=to.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yr).join(`
`)}function YM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function $M(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Yr(n){return n!==""}function Kf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const KM=/^[ \t]*#include +<([\w\d./]+)>/gm;function oc(n){return n.replace(KM,ZM)}const jM=new Map;function ZM(n,e){let t=ke[e];if(t===void 0){const i=jM.get(e);if(i!==void 0)t=ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return oc(t)}const JM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zf(n){return n.replace(JM,QM)}function QM(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Jf(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function eE(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Yd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Mv?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Gn&&(e="SHADOWMAP_TYPE_VSM"),e}function tE(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Rr:case Cr:e="ENVMAP_TYPE_CUBE";break;case na:e="ENVMAP_TYPE_CUBE_UV";break}return e}function nE(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Cr:e="ENVMAP_MODE_REFRACTION";break}return e}function iE(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case $d:e="ENVMAP_BLENDING_MULTIPLY";break;case kv:e="ENVMAP_BLENDING_MIX";break;case Vv:e="ENVMAP_BLENDING_ADD";break}return e}function rE(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function sE(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=eE(t),c=tE(t),u=nE(t),f=iE(t),h=rE(t),d=qM(t),_=YM(s),x=r.createProgram();let m,p,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Yr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Yr).join(`
`),p.length>0&&(p+=`
`)):(m=[Jf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yr).join(`
`),p=[Jf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mi?"#define TONE_MAPPING":"",t.toneMapping!==mi?ke.tonemapping_pars_fragment:"",t.toneMapping!==mi?WM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,GM("linearToOutputTexel",t.outputColorSpace),XM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Yr).join(`
`)),o=oc(o),o=Kf(o,t),o=jf(o,t),a=oc(a),a=Kf(a,t),a=jf(a,t),o=Zf(o),a=Zf(a),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===pf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=A+m+o,E=A+p+a,O=Yf(r,r.VERTEX_SHADER,y),P=Yf(r,r.FRAGMENT_SHADER,E);r.attachShader(x,O),r.attachShader(x,P),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function R(b){if(n.debug.checkShaderErrors){const K=r.getProgramInfoLog(x).trim(),q=r.getShaderInfoLog(O).trim(),J=r.getShaderInfoLog(P).trim();let se=!0,W=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(se=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,O,P);else{const Q=$f(r,O,"vertex"),X=$f(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+K+`
`+Q+`
`+X)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(q===""||J==="")&&(W=!1);W&&(b.diagnostics={runnable:se,programLog:K,vertexShader:{log:q,prefix:m},fragmentShader:{log:J,prefix:p}})}r.deleteShader(O),r.deleteShader(P),U=new To(r,x),re=$M(r,x)}let U;this.getUniforms=function(){return U===void 0&&R(this),U};let re;this.getAttributes=function(){return re===void 0&&R(this),re};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(x,zM)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=HM++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=O,this.fragmentShader=P,this}let oE=0;class aE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new lE(e),t.set(e,i)),i}}class lE{constructor(e){this.id=oE++,this.code=e,this.usedTimes=0}}function cE(n,e,t,i,r,s,o){const a=new Kc,l=new aE,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.reverseDepthBuffer,d=r.vertexTextures;let _=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(S){return c.add(S),S===0?"uv":`uv${S}`}function p(S,b,K,q,J){const se=q.fog,W=J.geometry,Q=S.isMeshStandardMaterial?q.environment:null,X=(S.isMeshStandardMaterial?t:e).get(S.envMap||Q),ge=X&&X.mapping===na?X.image.height:null,xe=x[S.type];S.precision!==null&&(_=r.getMaxPrecision(S.precision),_!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",_,"instead."));const ve=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Oe=ve!==void 0?ve.length:0;let Ge=0;W.morphAttributes.position!==void 0&&(Ge=1),W.morphAttributes.normal!==void 0&&(Ge=2),W.morphAttributes.color!==void 0&&(Ge=3);let ne,he,Se,F;if(xe){const kt=Vt[xe];ne=kt.vertexShader,he=kt.fragmentShader}else ne=S.vertexShader,he=S.fragmentShader,l.update(S),Se=l.getVertexShaderID(S),F=l.getFragmentShaderID(S);const oe=n.getRenderTarget(),ie=J.isInstancedMesh===!0,fe=J.isBatchedMesh===!0,Te=!!S.map,ee=!!S.matcap,g=!!X,w=!!S.aoMap,L=!!S.lightMap,N=!!S.bumpMap,I=!!S.normalMap,Y=!!S.displacementMap,Z=!!S.emissiveMap,M=!!S.metalnessMap,v=!!S.roughnessMap,C=S.anisotropy>0,G=S.clearcoat>0,H=S.dispersion>0,V=S.iridescence>0,le=S.sheen>0,ae=S.transmission>0,de=C&&!!S.anisotropyMap,Re=G&&!!S.clearcoatMap,ue=G&&!!S.clearcoatNormalMap,me=G&&!!S.clearcoatRoughnessMap,De=V&&!!S.iridescenceMap,Pe=V&&!!S.iridescenceThicknessMap,Me=le&&!!S.sheenColorMap,We=le&&!!S.sheenRoughnessMap,Ie=!!S.specularMap,Xe=!!S.specularColorMap,B=!!S.specularIntensityMap,Ae=ae&&!!S.transmissionMap,te=ae&&!!S.thicknessMap,ce=!!S.gradientMap,Ee=!!S.alphaMap,we=S.alphaTest>0,qe=!!S.alphaHash,dt=!!S.extensions;let Ht=mi;S.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Ht=n.toneMapping);const Ye={shaderID:xe,shaderType:S.type,shaderName:S.name,vertexShader:ne,fragmentShader:he,defines:S.defines,customVertexShaderID:Se,customFragmentShaderID:F,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:_,batching:fe,batchingColor:fe&&J._colorsTexture!==null,instancing:ie,instancingColor:ie&&J.instanceColor!==null,instancingMorph:ie&&J.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:oe===null?n.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Si,alphaToCoverage:!!S.alphaToCoverage,map:Te,matcap:ee,envMap:g,envMapMode:g&&X.mapping,envMapCubeUVHeight:ge,aoMap:w,lightMap:L,bumpMap:N,normalMap:I,displacementMap:d&&Y,emissiveMap:Z,normalMapObjectSpace:I&&S.normalMapType===e0,normalMapTangentSpace:I&&S.normalMapType===Qv,metalnessMap:M,roughnessMap:v,anisotropy:C,anisotropyMap:de,clearcoat:G,clearcoatMap:Re,clearcoatNormalMap:ue,clearcoatRoughnessMap:me,dispersion:H,iridescence:V,iridescenceMap:De,iridescenceThicknessMap:Pe,sheen:le,sheenColorMap:Me,sheenRoughnessMap:We,specularMap:Ie,specularColorMap:Xe,specularIntensityMap:B,transmission:ae,transmissionMap:Ae,thicknessMap:te,gradientMap:ce,opaque:S.transparent===!1&&S.blending===xr&&S.alphaToCoverage===!1,alphaMap:Ee,alphaTest:we,alphaHash:qe,combine:S.combine,mapUv:Te&&m(S.map.channel),aoMapUv:w&&m(S.aoMap.channel),lightMapUv:L&&m(S.lightMap.channel),bumpMapUv:N&&m(S.bumpMap.channel),normalMapUv:I&&m(S.normalMap.channel),displacementMapUv:Y&&m(S.displacementMap.channel),emissiveMapUv:Z&&m(S.emissiveMap.channel),metalnessMapUv:M&&m(S.metalnessMap.channel),roughnessMapUv:v&&m(S.roughnessMap.channel),anisotropyMapUv:de&&m(S.anisotropyMap.channel),clearcoatMapUv:Re&&m(S.clearcoatMap.channel),clearcoatNormalMapUv:ue&&m(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&m(S.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&m(S.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&m(S.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&m(S.sheenColorMap.channel),sheenRoughnessMapUv:We&&m(S.sheenRoughnessMap.channel),specularMapUv:Ie&&m(S.specularMap.channel),specularColorMapUv:Xe&&m(S.specularColorMap.channel),specularIntensityMapUv:B&&m(S.specularIntensityMap.channel),transmissionMapUv:Ae&&m(S.transmissionMap.channel),thicknessMapUv:te&&m(S.thicknessMap.channel),alphaMapUv:Ee&&m(S.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(I||C),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!W.attributes.uv&&(Te||Ee),fog:!!se,useFog:S.fog===!0,fogExp2:!!se&&se.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:h,skinning:J.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Oe,morphTextureStride:Ge,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&K.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ht,decodeVideoTexture:Te&&S.map.isVideoTexture===!0&&Je.getTransfer(S.map.colorSpace)===at,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===pn,flipSided:S.side===Gt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:dt&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(dt&&S.extensions.multiDraw===!0||fe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ye.vertexUv1s=c.has(1),Ye.vertexUv2s=c.has(2),Ye.vertexUv3s=c.has(3),c.clear(),Ye}function A(S){const b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(const K in S.defines)b.push(K),b.push(S.defines[K]);return S.isRawShaderMaterial===!1&&(y(b,S),E(b,S),b.push(n.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function y(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function E(S,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.alphaToCoverage&&a.enable(20),S.push(a.mask)}function O(S){const b=x[S.type];let K;if(b){const q=Vt[b];K=jc.clone(q.uniforms)}else K=S.uniforms;return K}function P(S,b){let K;for(let q=0,J=u.length;q<J;q++){const se=u[q];if(se.cacheKey===b){K=se,++K.usedTimes;break}}return K===void 0&&(K=new sE(n,b,S,s),u.push(K)),K}function R(S){if(--S.usedTimes===0){const b=u.indexOf(S);u[b]=u[u.length-1],u.pop(),S.destroy()}}function U(S){l.remove(S)}function re(){l.dispose()}return{getParameters:p,getProgramCacheKey:A,getUniforms:O,acquireProgram:P,releaseProgram:R,releaseShaderCache:U,programs:u,dispose:re}}function uE(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function fE(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Qf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function eh(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,d,_,x,m){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:_,renderOrder:f.renderOrder,z:x,group:m},n[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=_,p.renderOrder=f.renderOrder,p.z=x,p.group=m),e++,p}function a(f,h,d,_,x,m){const p=o(f,h,d,_,x,m);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):t.push(p)}function l(f,h,d,_,x,m){const p=o(f,h,d,_,x,m);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function c(f,h){t.length>1&&t.sort(f||fE),i.length>1&&i.sort(h||Qf),r.length>1&&r.sort(h||Qf)}function u(){for(let f=e,h=n.length;f<h;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function hE(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new eh,n.set(i,[o])):r>=s.length?(o=new eh,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function dE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new $e};break;case"SpotLight":t={position:new D,direction:new D,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}function pE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let mE=0;function gE(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function _E(n){const e=new dE,t=pE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);const r=new D,s=new lt,o=new lt;function a(c){let u=0,f=0,h=0;for(let re=0;re<9;re++)i.probe[re].set(0,0,0);let d=0,_=0,x=0,m=0,p=0,A=0,y=0,E=0,O=0,P=0,R=0;c.sort(gE);for(let re=0,S=c.length;re<S;re++){const b=c[re],K=b.color,q=b.intensity,J=b.distance,se=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)u+=K.r*q,f+=K.g*q,h+=K.b*q;else if(b.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(b.sh.coefficients[W],q);R++}else if(b.isDirectionalLight){const W=e.get(b);if(W.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const Q=b.shadow,X=t.get(b);X.shadowIntensity=Q.intensity,X.shadowBias=Q.bias,X.shadowNormalBias=Q.normalBias,X.shadowRadius=Q.radius,X.shadowMapSize=Q.mapSize,i.directionalShadow[d]=X,i.directionalShadowMap[d]=se,i.directionalShadowMatrix[d]=b.shadow.matrix,A++}i.directional[d]=W,d++}else if(b.isSpotLight){const W=e.get(b);W.position.setFromMatrixPosition(b.matrixWorld),W.color.copy(K).multiplyScalar(q),W.distance=J,W.coneCos=Math.cos(b.angle),W.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),W.decay=b.decay,i.spot[x]=W;const Q=b.shadow;if(b.map&&(i.spotLightMap[O]=b.map,O++,Q.updateMatrices(b),b.castShadow&&P++),i.spotLightMatrix[x]=Q.matrix,b.castShadow){const X=t.get(b);X.shadowIntensity=Q.intensity,X.shadowBias=Q.bias,X.shadowNormalBias=Q.normalBias,X.shadowRadius=Q.radius,X.shadowMapSize=Q.mapSize,i.spotShadow[x]=X,i.spotShadowMap[x]=se,E++}x++}else if(b.isRectAreaLight){const W=e.get(b);W.color.copy(K).multiplyScalar(q),W.halfWidth.set(b.width*.5,0,0),W.halfHeight.set(0,b.height*.5,0),i.rectArea[m]=W,m++}else if(b.isPointLight){const W=e.get(b);if(W.color.copy(b.color).multiplyScalar(b.intensity),W.distance=b.distance,W.decay=b.decay,b.castShadow){const Q=b.shadow,X=t.get(b);X.shadowIntensity=Q.intensity,X.shadowBias=Q.bias,X.shadowNormalBias=Q.normalBias,X.shadowRadius=Q.radius,X.shadowMapSize=Q.mapSize,X.shadowCameraNear=Q.camera.near,X.shadowCameraFar=Q.camera.far,i.pointShadow[_]=X,i.pointShadowMap[_]=se,i.pointShadowMatrix[_]=b.shadow.matrix,y++}i.point[_]=W,_++}else if(b.isHemisphereLight){const W=e.get(b);W.skyColor.copy(b.color).multiplyScalar(q),W.groundColor.copy(b.groundColor).multiplyScalar(q),i.hemi[p]=W,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const U=i.hash;(U.directionalLength!==d||U.pointLength!==_||U.spotLength!==x||U.rectAreaLength!==m||U.hemiLength!==p||U.numDirectionalShadows!==A||U.numPointShadows!==y||U.numSpotShadows!==E||U.numSpotMaps!==O||U.numLightProbes!==R)&&(i.directional.length=d,i.spot.length=x,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=E+O-P,i.spotLightMap.length=O,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=R,U.directionalLength=d,U.pointLength=_,U.spotLength=x,U.rectAreaLength=m,U.hemiLength=p,U.numDirectionalShadows=A,U.numPointShadows=y,U.numSpotShadows=E,U.numSpotMaps=O,U.numLightProbes=R,i.version=mE++)}function l(c,u){let f=0,h=0,d=0,_=0,x=0;const m=u.matrixWorldInverse;for(let p=0,A=c.length;p<A;p++){const y=c[p];if(y.isDirectionalLight){const E=i.directional[f];E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),f++}else if(y.isSpotLight){const E=i.spot[d];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),d++}else if(y.isRectAreaLight){const E=i.rectArea[_];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){const E=i.point[h];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(m),h++}else if(y.isHemisphereLight){const E=i.hemi[x];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function th(n){const e=new _E(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function vE(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new th(n),e.set(r,[a])):s>=o.length?(a=new th(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class xE extends Ts{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class SE extends Ts{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const yE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ME=`uniform sampler2D shadow_pass;
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
}`;function EE(n,e,t){let i=new gp;const r=new ye,s=new ye,o=new st,a=new xE({depthPacking:Jv}),l=new SE,c={},u=t.maxTextureSize,f={[_i]:Gt,[Gt]:_i,[pn]:pn},h=new jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ye},radius:{value:4}},vertexShader:yE,fragmentShader:ME}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const _=new Qt;_.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new zt(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yd;let p=this.type;this.render=function(P,R,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const re=n.getRenderTarget(),S=n.getActiveCubeFace(),b=n.getActiveMipmapLevel(),K=n.state;K.setBlending(pi),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const q=p!==Gn&&this.type===Gn,J=p===Gn&&this.type!==Gn;for(let se=0,W=P.length;se<W;se++){const Q=P[se],X=Q.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const ge=X.getFrameExtents();if(r.multiply(ge),s.copy(X.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ge.x),r.x=s.x*ge.x,X.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ge.y),r.y=s.y*ge.y,X.mapSize.y=s.y)),X.map===null||q===!0||J===!0){const ve=this.type!==Gn?{minFilter:on,magFilter:on}:{};X.map!==null&&X.map.dispose(),X.map=new Wi(r.x,r.y,ve),X.map.texture.name=Q.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();const xe=X.getViewportCount();for(let ve=0;ve<xe;ve++){const Oe=X.getViewport(ve);o.set(s.x*Oe.x,s.y*Oe.y,s.x*Oe.z,s.y*Oe.w),K.viewport(o),X.updateMatrices(Q,ve),i=X.getFrustum(),E(R,U,X.camera,Q,this.type)}X.isPointLightShadow!==!0&&this.type===Gn&&A(X,U),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(re,S,b)};function A(P,R){const U=e.update(x);h.defines.VSM_SAMPLES!==P.blurSamples&&(h.defines.VSM_SAMPLES=P.blurSamples,d.defines.VSM_SAMPLES=P.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Wi(r.x,r.y)),h.uniforms.shadow_pass.value=P.map.texture,h.uniforms.resolution.value=P.mapSize,h.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(R,null,U,h,x,null),d.uniforms.shadow_pass.value=P.mapPass.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(R,null,U,d,x,null)}function y(P,R,U,re){let S=null;const b=U.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(b!==void 0)S=b;else if(S=U.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const K=S.uuid,q=R.uuid;let J=c[K];J===void 0&&(J={},c[K]=J);let se=J[q];se===void 0&&(se=S.clone(),J[q]=se,R.addEventListener("dispose",O)),S=se}if(S.visible=R.visible,S.wireframe=R.wireframe,re===Gn?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:f[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,U.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const K=n.properties.get(S);K.light=U}return S}function E(P,R,U,re,S){if(P.visible===!1)return;if(P.layers.test(R.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&S===Gn)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,P.matrixWorld);const q=e.update(P),J=P.material;if(Array.isArray(J)){const se=q.groups;for(let W=0,Q=se.length;W<Q;W++){const X=se[W],ge=J[X.materialIndex];if(ge&&ge.visible){const xe=y(P,ge,re,S);P.onBeforeShadow(n,P,R,U,q,xe,X),n.renderBufferDirect(U,null,q,xe,P,X),P.onAfterShadow(n,P,R,U,q,xe,X)}}}else if(J.visible){const se=y(P,J,re,S);P.onBeforeShadow(n,P,R,U,q,se,null),n.renderBufferDirect(U,null,q,se,P,null),P.onAfterShadow(n,P,R,U,q,se,null)}}const K=P.children;for(let q=0,J=K.length;q<J;q++)E(K[q],R,U,re,S)}function O(P){P.target.removeEventListener("dispose",O);for(const U in c){const re=c[U],S=P.target.uuid;S in re&&(re[S].dispose(),delete re[S])}}}const bE={[Ml]:El,[bl]:wl,[Tl]:Rl,[wr]:Al,[El]:Ml,[wl]:bl,[Rl]:Tl,[Al]:wr};function TE(n){function e(){let B=!1;const Ae=new st;let te=null;const ce=new st(0,0,0,0);return{setMask:function(Ee){te!==Ee&&!B&&(n.colorMask(Ee,Ee,Ee,Ee),te=Ee)},setLocked:function(Ee){B=Ee},setClear:function(Ee,we,qe,dt,Ht){Ht===!0&&(Ee*=dt,we*=dt,qe*=dt),Ae.set(Ee,we,qe,dt),ce.equals(Ae)===!1&&(n.clearColor(Ee,we,qe,dt),ce.copy(Ae))},reset:function(){B=!1,te=null,ce.set(-1,0,0,0)}}}function t(){let B=!1,Ae=!1,te=null,ce=null,Ee=null;return{setReversed:function(we){Ae=we},setTest:function(we){we?Se(n.DEPTH_TEST):F(n.DEPTH_TEST)},setMask:function(we){te!==we&&!B&&(n.depthMask(we),te=we)},setFunc:function(we){if(Ae&&(we=bE[we]),ce!==we){switch(we){case Ml:n.depthFunc(n.NEVER);break;case El:n.depthFunc(n.ALWAYS);break;case bl:n.depthFunc(n.LESS);break;case wr:n.depthFunc(n.LEQUAL);break;case Tl:n.depthFunc(n.EQUAL);break;case Al:n.depthFunc(n.GEQUAL);break;case wl:n.depthFunc(n.GREATER);break;case Rl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ce=we}},setLocked:function(we){B=we},setClear:function(we){Ee!==we&&(n.clearDepth(we),Ee=we)},reset:function(){B=!1,te=null,ce=null,Ee=null}}}function i(){let B=!1,Ae=null,te=null,ce=null,Ee=null,we=null,qe=null,dt=null,Ht=null;return{setTest:function(Ye){B||(Ye?Se(n.STENCIL_TEST):F(n.STENCIL_TEST))},setMask:function(Ye){Ae!==Ye&&!B&&(n.stencilMask(Ye),Ae=Ye)},setFunc:function(Ye,kt,Un){(te!==Ye||ce!==kt||Ee!==Un)&&(n.stencilFunc(Ye,kt,Un),te=Ye,ce=kt,Ee=Un)},setOp:function(Ye,kt,Un){(we!==Ye||qe!==kt||dt!==Un)&&(n.stencilOp(Ye,kt,Un),we=Ye,qe=kt,dt=Un)},setLocked:function(Ye){B=Ye},setClear:function(Ye){Ht!==Ye&&(n.clearStencil(Ye),Ht=Ye)},reset:function(){B=!1,Ae=null,te=null,ce=null,Ee=null,we=null,qe=null,dt=null,Ht=null}}}const r=new e,s=new t,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,h=[],d=null,_=!1,x=null,m=null,p=null,A=null,y=null,E=null,O=null,P=new $e(0,0,0),R=0,U=!1,re=null,S=null,b=null,K=null,q=null;const J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let se=!1,W=0;const Q=n.getParameter(n.VERSION);Q.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(Q)[1]),se=W>=1):Q.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),se=W>=2);let X=null,ge={};const xe=n.getParameter(n.SCISSOR_BOX),ve=n.getParameter(n.VIEWPORT),Oe=new st().fromArray(xe),Ge=new st().fromArray(ve);function ne(B,Ae,te,ce){const Ee=new Uint8Array(4),we=n.createTexture();n.bindTexture(B,we),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let qe=0;qe<te;qe++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(Ae,0,n.RGBA,1,1,ce,0,n.RGBA,n.UNSIGNED_BYTE,Ee):n.texImage2D(Ae+qe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ee);return we}const he={};he[n.TEXTURE_2D]=ne(n.TEXTURE_2D,n.TEXTURE_2D,1),he[n.TEXTURE_CUBE_MAP]=ne(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[n.TEXTURE_2D_ARRAY]=ne(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),he[n.TEXTURE_3D]=ne(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),Se(n.DEPTH_TEST),s.setFunc(wr),L(!1),N(cf),Se(n.CULL_FACE),g(pi);function Se(B){c[B]!==!0&&(n.enable(B),c[B]=!0)}function F(B){c[B]!==!1&&(n.disable(B),c[B]=!1)}function oe(B,Ae){return u[B]!==Ae?(n.bindFramebuffer(B,Ae),u[B]=Ae,B===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Ae),B===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Ae),!0):!1}function ie(B,Ae){let te=h,ce=!1;if(B){te=f.get(Ae),te===void 0&&(te=[],f.set(Ae,te));const Ee=B.textures;if(te.length!==Ee.length||te[0]!==n.COLOR_ATTACHMENT0){for(let we=0,qe=Ee.length;we<qe;we++)te[we]=n.COLOR_ATTACHMENT0+we;te.length=Ee.length,ce=!0}}else te[0]!==n.BACK&&(te[0]=n.BACK,ce=!0);ce&&n.drawBuffers(te)}function fe(B){return d!==B?(n.useProgram(B),d=B,!0):!1}const Te={[Ui]:n.FUNC_ADD,[bv]:n.FUNC_SUBTRACT,[Tv]:n.FUNC_REVERSE_SUBTRACT};Te[Av]=n.MIN,Te[wv]=n.MAX;const ee={[Rv]:n.ZERO,[Cv]:n.ONE,[Pv]:n.SRC_COLOR,[Sl]:n.SRC_ALPHA,[Ov]:n.SRC_ALPHA_SATURATE,[Uv]:n.DST_COLOR,[Dv]:n.DST_ALPHA,[Lv]:n.ONE_MINUS_SRC_COLOR,[yl]:n.ONE_MINUS_SRC_ALPHA,[Nv]:n.ONE_MINUS_DST_COLOR,[Iv]:n.ONE_MINUS_DST_ALPHA,[Fv]:n.CONSTANT_COLOR,[Bv]:n.ONE_MINUS_CONSTANT_COLOR,[zv]:n.CONSTANT_ALPHA,[Hv]:n.ONE_MINUS_CONSTANT_ALPHA};function g(B,Ae,te,ce,Ee,we,qe,dt,Ht,Ye){if(B===pi){_===!0&&(F(n.BLEND),_=!1);return}if(_===!1&&(Se(n.BLEND),_=!0),B!==Ev){if(B!==x||Ye!==U){if((m!==Ui||y!==Ui)&&(n.blendEquation(n.FUNC_ADD),m=Ui,y=Ui),Ye)switch(B){case xr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case uf:n.blendFunc(n.ONE,n.ONE);break;case ff:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case hf:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case xr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case uf:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case ff:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case hf:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}p=null,A=null,E=null,O=null,P.set(0,0,0),R=0,x=B,U=Ye}return}Ee=Ee||Ae,we=we||te,qe=qe||ce,(Ae!==m||Ee!==y)&&(n.blendEquationSeparate(Te[Ae],Te[Ee]),m=Ae,y=Ee),(te!==p||ce!==A||we!==E||qe!==O)&&(n.blendFuncSeparate(ee[te],ee[ce],ee[we],ee[qe]),p=te,A=ce,E=we,O=qe),(dt.equals(P)===!1||Ht!==R)&&(n.blendColor(dt.r,dt.g,dt.b,Ht),P.copy(dt),R=Ht),x=B,U=!1}function w(B,Ae){B.side===pn?F(n.CULL_FACE):Se(n.CULL_FACE);let te=B.side===Gt;Ae&&(te=!te),L(te),B.blending===xr&&B.transparent===!1?g(pi):g(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),s.setFunc(B.depthFunc),s.setTest(B.depthTest),s.setMask(B.depthWrite),r.setMask(B.colorWrite);const ce=B.stencilWrite;o.setTest(ce),ce&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Y(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?Se(n.SAMPLE_ALPHA_TO_COVERAGE):F(n.SAMPLE_ALPHA_TO_COVERAGE)}function L(B){re!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),re=B)}function N(B){B!==Sv?(Se(n.CULL_FACE),B!==S&&(B===cf?n.cullFace(n.BACK):B===yv?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):F(n.CULL_FACE),S=B}function I(B){B!==b&&(se&&n.lineWidth(B),b=B)}function Y(B,Ae,te){B?(Se(n.POLYGON_OFFSET_FILL),(K!==Ae||q!==te)&&(n.polygonOffset(Ae,te),K=Ae,q=te)):F(n.POLYGON_OFFSET_FILL)}function Z(B){B?Se(n.SCISSOR_TEST):F(n.SCISSOR_TEST)}function M(B){B===void 0&&(B=n.TEXTURE0+J-1),X!==B&&(n.activeTexture(B),X=B)}function v(B,Ae,te){te===void 0&&(X===null?te=n.TEXTURE0+J-1:te=X);let ce=ge[te];ce===void 0&&(ce={type:void 0,texture:void 0},ge[te]=ce),(ce.type!==B||ce.texture!==Ae)&&(X!==te&&(n.activeTexture(te),X=te),n.bindTexture(B,Ae||he[B]),ce.type=B,ce.texture=Ae)}function C(){const B=ge[X];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function G(){try{n.compressedTexImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function H(){try{n.compressedTexImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function V(){try{n.texSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function le(){try{n.texSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ae(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function de(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Re(){try{n.texStorage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ue(){try{n.texStorage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function me(){try{n.texImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function De(){try{n.texImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Pe(B){Oe.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),Oe.copy(B))}function Me(B){Ge.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),Ge.copy(B))}function We(B,Ae){let te=l.get(Ae);te===void 0&&(te=new WeakMap,l.set(Ae,te));let ce=te.get(B);ce===void 0&&(ce=n.getUniformBlockIndex(Ae,B.name),te.set(B,ce))}function Ie(B,Ae){const ce=l.get(Ae).get(B);a.get(Ae)!==ce&&(n.uniformBlockBinding(Ae,ce,B.__bindingPointIndex),a.set(Ae,ce))}function Xe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},X=null,ge={},u={},f=new WeakMap,h=[],d=null,_=!1,x=null,m=null,p=null,A=null,y=null,E=null,O=null,P=new $e(0,0,0),R=0,U=!1,re=null,S=null,b=null,K=null,q=null,Oe.set(0,0,n.canvas.width,n.canvas.height),Ge.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:Se,disable:F,bindFramebuffer:oe,drawBuffers:ie,useProgram:fe,setBlending:g,setMaterial:w,setFlipSided:L,setCullFace:N,setLineWidth:I,setPolygonOffset:Y,setScissorTest:Z,activeTexture:M,bindTexture:v,unbindTexture:C,compressedTexImage2D:G,compressedTexImage3D:H,texImage2D:me,texImage3D:De,updateUBOMapping:We,uniformBlockBinding:Ie,texStorage2D:Re,texStorage3D:ue,texSubImage2D:V,texSubImage3D:le,compressedTexSubImage2D:ae,compressedTexSubImage3D:de,scissor:Pe,viewport:Me,reset:Xe}}function nh(n,e,t,i){const r=AE(i);switch(t){case Qd:return n*e;case tp:return n*e;case np:return n*e*2;case ip:return n*e/r.components*r.byteLength;case Gc:return n*e/r.components*r.byteLength;case rp:return n*e*2/r.components*r.byteLength;case Wc:return n*e*2/r.components*r.byteLength;case ep:return n*e*3/r.components*r.byteLength;case _n:return n*e*4/r.components*r.byteLength;case Xc:return n*e*4/r.components*r.byteLength;case xo:case So:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case yo:case Mo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ul:case Ol:return Math.max(n,16)*Math.max(e,8)/4;case Il:case Nl:return Math.max(n,8)*Math.max(e,8)/2;case Fl:case Bl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case zl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Hl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case kl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Vl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Gl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Wl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Xl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ql:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Yl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case $l:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Kl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case jl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Zl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Jl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ql:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Eo:case ec:case tc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case sp:case nc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ic:case rc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function AE(n){switch(n){case Kn:case jd:return{byteLength:1,components:1};case ms:case Zd:case Es:return{byteLength:2,components:1};case kc:case Vc:return{byteLength:2,components:4};case Gi:case Hc:case Xn:return{byteLength:4,components:1};case Jd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function wE(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ye,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(M,v){return d?new OffscreenCanvas(M,v):zo("canvas")}function x(M,v,C){let G=1;const H=Z(M);if((H.width>C||H.height>C)&&(G=C/Math.max(H.width,H.height)),G<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const V=Math.floor(G*H.width),le=Math.floor(G*H.height);f===void 0&&(f=_(V,le));const ae=v?_(V,le):f;return ae.width=V,ae.height=le,ae.getContext("2d").drawImage(M,0,0,V,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+H.width+"x"+H.height+") to ("+V+"x"+le+")."),ae}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+H.width+"x"+H.height+")."),M;return M}function m(M){return M.generateMipmaps&&M.minFilter!==on&&M.minFilter!==mn}function p(M){n.generateMipmap(M)}function A(M,v,C,G,H=!1){if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let V=v;if(v===n.RED&&(C===n.FLOAT&&(V=n.R32F),C===n.HALF_FLOAT&&(V=n.R16F),C===n.UNSIGNED_BYTE&&(V=n.R8)),v===n.RED_INTEGER&&(C===n.UNSIGNED_BYTE&&(V=n.R8UI),C===n.UNSIGNED_SHORT&&(V=n.R16UI),C===n.UNSIGNED_INT&&(V=n.R32UI),C===n.BYTE&&(V=n.R8I),C===n.SHORT&&(V=n.R16I),C===n.INT&&(V=n.R32I)),v===n.RG&&(C===n.FLOAT&&(V=n.RG32F),C===n.HALF_FLOAT&&(V=n.RG16F),C===n.UNSIGNED_BYTE&&(V=n.RG8)),v===n.RG_INTEGER&&(C===n.UNSIGNED_BYTE&&(V=n.RG8UI),C===n.UNSIGNED_SHORT&&(V=n.RG16UI),C===n.UNSIGNED_INT&&(V=n.RG32UI),C===n.BYTE&&(V=n.RG8I),C===n.SHORT&&(V=n.RG16I),C===n.INT&&(V=n.RG32I)),v===n.RGB_INTEGER&&(C===n.UNSIGNED_BYTE&&(V=n.RGB8UI),C===n.UNSIGNED_SHORT&&(V=n.RGB16UI),C===n.UNSIGNED_INT&&(V=n.RGB32UI),C===n.BYTE&&(V=n.RGB8I),C===n.SHORT&&(V=n.RGB16I),C===n.INT&&(V=n.RGB32I)),v===n.RGBA_INTEGER&&(C===n.UNSIGNED_BYTE&&(V=n.RGBA8UI),C===n.UNSIGNED_SHORT&&(V=n.RGBA16UI),C===n.UNSIGNED_INT&&(V=n.RGBA32UI),C===n.BYTE&&(V=n.RGBA8I),C===n.SHORT&&(V=n.RGBA16I),C===n.INT&&(V=n.RGBA32I)),v===n.RGB&&C===n.UNSIGNED_INT_5_9_9_9_REV&&(V=n.RGB9_E5),v===n.RGBA){const le=H?No:Je.getTransfer(G);C===n.FLOAT&&(V=n.RGBA32F),C===n.HALF_FLOAT&&(V=n.RGBA16F),C===n.UNSIGNED_BYTE&&(V=le===at?n.SRGB8_ALPHA8:n.RGBA8),C===n.UNSIGNED_SHORT_4_4_4_4&&(V=n.RGBA4),C===n.UNSIGNED_SHORT_5_5_5_1&&(V=n.RGB5_A1)}return(V===n.R16F||V===n.R32F||V===n.RG16F||V===n.RG32F||V===n.RGBA16F||V===n.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function y(M,v){let C;return M?v===null||v===Gi||v===Pr?C=n.DEPTH24_STENCIL8:v===Xn?C=n.DEPTH32F_STENCIL8:v===ms&&(C=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Gi||v===Pr?C=n.DEPTH_COMPONENT24:v===Xn?C=n.DEPTH_COMPONENT32F:v===ms&&(C=n.DEPTH_COMPONENT16),C}function E(M,v){return m(M)===!0||M.isFramebufferTexture&&M.minFilter!==on&&M.minFilter!==mn?Math.log2(Math.max(v.width,v.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?v.mipmaps.length:1}function O(M){const v=M.target;v.removeEventListener("dispose",O),R(v),v.isVideoTexture&&u.delete(v)}function P(M){const v=M.target;v.removeEventListener("dispose",P),re(v)}function R(M){const v=i.get(M);if(v.__webglInit===void 0)return;const C=M.source,G=h.get(C);if(G){const H=G[v.__cacheKey];H.usedTimes--,H.usedTimes===0&&U(M),Object.keys(G).length===0&&h.delete(C)}i.remove(M)}function U(M){const v=i.get(M);n.deleteTexture(v.__webglTexture);const C=M.source,G=h.get(C);delete G[v.__cacheKey],o.memory.textures--}function re(M){const v=i.get(M);if(M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(v.__webglFramebuffer[G]))for(let H=0;H<v.__webglFramebuffer[G].length;H++)n.deleteFramebuffer(v.__webglFramebuffer[G][H]);else n.deleteFramebuffer(v.__webglFramebuffer[G]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[G])}else{if(Array.isArray(v.__webglFramebuffer))for(let G=0;G<v.__webglFramebuffer.length;G++)n.deleteFramebuffer(v.__webglFramebuffer[G]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let G=0;G<v.__webglColorRenderbuffer.length;G++)v.__webglColorRenderbuffer[G]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[G]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const C=M.textures;for(let G=0,H=C.length;G<H;G++){const V=i.get(C[G]);V.__webglTexture&&(n.deleteTexture(V.__webglTexture),o.memory.textures--),i.remove(C[G])}i.remove(M)}let S=0;function b(){S=0}function K(){const M=S;return M>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),S+=1,M}function q(M){const v=[];return v.push(M.wrapS),v.push(M.wrapT),v.push(M.wrapR||0),v.push(M.magFilter),v.push(M.minFilter),v.push(M.anisotropy),v.push(M.internalFormat),v.push(M.format),v.push(M.type),v.push(M.generateMipmaps),v.push(M.premultiplyAlpha),v.push(M.flipY),v.push(M.unpackAlignment),v.push(M.colorSpace),v.join()}function J(M,v){const C=i.get(M);if(M.isVideoTexture&&I(M),M.isRenderTargetTexture===!1&&M.version>0&&C.__version!==M.version){const G=M.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ge(C,M,v);return}}t.bindTexture(n.TEXTURE_2D,C.__webglTexture,n.TEXTURE0+v)}function se(M,v){const C=i.get(M);if(M.version>0&&C.__version!==M.version){Ge(C,M,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,C.__webglTexture,n.TEXTURE0+v)}function W(M,v){const C=i.get(M);if(M.version>0&&C.__version!==M.version){Ge(C,M,v);return}t.bindTexture(n.TEXTURE_3D,C.__webglTexture,n.TEXTURE0+v)}function Q(M,v){const C=i.get(M);if(M.version>0&&C.__version!==M.version){ne(C,M,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+v)}const X={[Ll]:n.REPEAT,[Fi]:n.CLAMP_TO_EDGE,[Dl]:n.MIRRORED_REPEAT},ge={[on]:n.NEAREST,[jv]:n.NEAREST_MIPMAP_NEAREST,[Ns]:n.NEAREST_MIPMAP_LINEAR,[mn]:n.LINEAR,[ba]:n.LINEAR_MIPMAP_NEAREST,[Bi]:n.LINEAR_MIPMAP_LINEAR},xe={[t0]:n.NEVER,[a0]:n.ALWAYS,[n0]:n.LESS,[op]:n.LEQUAL,[i0]:n.EQUAL,[o0]:n.GEQUAL,[r0]:n.GREATER,[s0]:n.NOTEQUAL};function ve(M,v){if(v.type===Xn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===mn||v.magFilter===ba||v.magFilter===Ns||v.magFilter===Bi||v.minFilter===mn||v.minFilter===ba||v.minFilter===Ns||v.minFilter===Bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(M,n.TEXTURE_WRAP_S,X[v.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,X[v.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,X[v.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,ge[v.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,ge[v.minFilter]),v.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,xe[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===on||v.minFilter!==Ns&&v.minFilter!==Bi||v.type===Xn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const C=e.get("EXT_texture_filter_anisotropic");n.texParameterf(M,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Oe(M,v){let C=!1;M.__webglInit===void 0&&(M.__webglInit=!0,v.addEventListener("dispose",O));const G=v.source;let H=h.get(G);H===void 0&&(H={},h.set(G,H));const V=q(v);if(V!==M.__cacheKey){H[V]===void 0&&(H[V]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,C=!0),H[V].usedTimes++;const le=H[M.__cacheKey];le!==void 0&&(H[M.__cacheKey].usedTimes--,le.usedTimes===0&&U(v)),M.__cacheKey=V,M.__webglTexture=H[V].texture}return C}function Ge(M,v,C){let G=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(G=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(G=n.TEXTURE_3D);const H=Oe(M,v),V=v.source;t.bindTexture(G,M.__webglTexture,n.TEXTURE0+C);const le=i.get(V);if(V.version!==le.__version||H===!0){t.activeTexture(n.TEXTURE0+C);const ae=Je.getPrimaries(Je.workingColorSpace),de=v.colorSpace===fi?null:Je.getPrimaries(v.colorSpace),Re=v.colorSpace===fi||ae===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let ue=x(v.image,!1,r.maxTextureSize);ue=Y(v,ue);const me=s.convert(v.format,v.colorSpace),De=s.convert(v.type);let Pe=A(v.internalFormat,me,De,v.colorSpace,v.isVideoTexture);ve(G,v);let Me;const We=v.mipmaps,Ie=v.isVideoTexture!==!0,Xe=le.__version===void 0||H===!0,B=V.dataReady,Ae=E(v,ue);if(v.isDepthTexture)Pe=y(v.format===Lr,v.type),Xe&&(Ie?t.texStorage2D(n.TEXTURE_2D,1,Pe,ue.width,ue.height):t.texImage2D(n.TEXTURE_2D,0,Pe,ue.width,ue.height,0,me,De,null));else if(v.isDataTexture)if(We.length>0){Ie&&Xe&&t.texStorage2D(n.TEXTURE_2D,Ae,Pe,We[0].width,We[0].height);for(let te=0,ce=We.length;te<ce;te++)Me=We[te],Ie?B&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,Me.width,Me.height,me,De,Me.data):t.texImage2D(n.TEXTURE_2D,te,Pe,Me.width,Me.height,0,me,De,Me.data);v.generateMipmaps=!1}else Ie?(Xe&&t.texStorage2D(n.TEXTURE_2D,Ae,Pe,ue.width,ue.height),B&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ue.width,ue.height,me,De,ue.data)):t.texImage2D(n.TEXTURE_2D,0,Pe,ue.width,ue.height,0,me,De,ue.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ie&&Xe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ae,Pe,We[0].width,We[0].height,ue.depth);for(let te=0,ce=We.length;te<ce;te++)if(Me=We[te],v.format!==_n)if(me!==null)if(Ie){if(B)if(v.layerUpdates.size>0){const Ee=nh(Me.width,Me.height,v.format,v.type);for(const we of v.layerUpdates){const qe=Me.data.subarray(we*Ee/Me.data.BYTES_PER_ELEMENT,(we+1)*Ee/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,we,Me.width,Me.height,1,me,qe,0,0)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,Me.width,Me.height,ue.depth,me,Me.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,te,Pe,Me.width,Me.height,ue.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?B&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,Me.width,Me.height,ue.depth,me,De,Me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,te,Pe,Me.width,Me.height,ue.depth,0,me,De,Me.data)}else{Ie&&Xe&&t.texStorage2D(n.TEXTURE_2D,Ae,Pe,We[0].width,We[0].height);for(let te=0,ce=We.length;te<ce;te++)Me=We[te],v.format!==_n?me!==null?Ie?B&&t.compressedTexSubImage2D(n.TEXTURE_2D,te,0,0,Me.width,Me.height,me,Me.data):t.compressedTexImage2D(n.TEXTURE_2D,te,Pe,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?B&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,Me.width,Me.height,me,De,Me.data):t.texImage2D(n.TEXTURE_2D,te,Pe,Me.width,Me.height,0,me,De,Me.data)}else if(v.isDataArrayTexture)if(Ie){if(Xe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ae,Pe,ue.width,ue.height,ue.depth),B)if(v.layerUpdates.size>0){const te=nh(ue.width,ue.height,v.format,v.type);for(const ce of v.layerUpdates){const Ee=ue.data.subarray(ce*te/ue.data.BYTES_PER_ELEMENT,(ce+1)*te/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ce,ue.width,ue.height,1,me,De,Ee)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,me,De,ue.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Pe,ue.width,ue.height,ue.depth,0,me,De,ue.data);else if(v.isData3DTexture)Ie?(Xe&&t.texStorage3D(n.TEXTURE_3D,Ae,Pe,ue.width,ue.height,ue.depth),B&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,me,De,ue.data)):t.texImage3D(n.TEXTURE_3D,0,Pe,ue.width,ue.height,ue.depth,0,me,De,ue.data);else if(v.isFramebufferTexture){if(Xe)if(Ie)t.texStorage2D(n.TEXTURE_2D,Ae,Pe,ue.width,ue.height);else{let te=ue.width,ce=ue.height;for(let Ee=0;Ee<Ae;Ee++)t.texImage2D(n.TEXTURE_2D,Ee,Pe,te,ce,0,me,De,null),te>>=1,ce>>=1}}else if(We.length>0){if(Ie&&Xe){const te=Z(We[0]);t.texStorage2D(n.TEXTURE_2D,Ae,Pe,te.width,te.height)}for(let te=0,ce=We.length;te<ce;te++)Me=We[te],Ie?B&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,me,De,Me):t.texImage2D(n.TEXTURE_2D,te,Pe,me,De,Me);v.generateMipmaps=!1}else if(Ie){if(Xe){const te=Z(ue);t.texStorage2D(n.TEXTURE_2D,Ae,Pe,te.width,te.height)}B&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,me,De,ue)}else t.texImage2D(n.TEXTURE_2D,0,Pe,me,De,ue);m(v)&&p(G),le.__version=V.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function ne(M,v,C){if(v.image.length!==6)return;const G=Oe(M,v),H=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+C);const V=i.get(H);if(H.version!==V.__version||G===!0){t.activeTexture(n.TEXTURE0+C);const le=Je.getPrimaries(Je.workingColorSpace),ae=v.colorSpace===fi?null:Je.getPrimaries(v.colorSpace),de=v.colorSpace===fi||le===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Re=v.isCompressedTexture||v.image[0].isCompressedTexture,ue=v.image[0]&&v.image[0].isDataTexture,me=[];for(let ce=0;ce<6;ce++)!Re&&!ue?me[ce]=x(v.image[ce],!0,r.maxCubemapSize):me[ce]=ue?v.image[ce].image:v.image[ce],me[ce]=Y(v,me[ce]);const De=me[0],Pe=s.convert(v.format,v.colorSpace),Me=s.convert(v.type),We=A(v.internalFormat,Pe,Me,v.colorSpace),Ie=v.isVideoTexture!==!0,Xe=V.__version===void 0||G===!0,B=H.dataReady;let Ae=E(v,De);ve(n.TEXTURE_CUBE_MAP,v);let te;if(Re){Ie&&Xe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,We,De.width,De.height);for(let ce=0;ce<6;ce++){te=me[ce].mipmaps;for(let Ee=0;Ee<te.length;Ee++){const we=te[Ee];v.format!==_n?Pe!==null?Ie?B&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ee,0,0,we.width,we.height,Pe,we.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ee,We,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ee,0,0,we.width,we.height,Pe,Me,we.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ee,We,we.width,we.height,0,Pe,Me,we.data)}}}else{if(te=v.mipmaps,Ie&&Xe){te.length>0&&Ae++;const ce=Z(me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,We,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(ue){Ie?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,me[ce].width,me[ce].height,Pe,Me,me[ce].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,We,me[ce].width,me[ce].height,0,Pe,Me,me[ce].data);for(let Ee=0;Ee<te.length;Ee++){const qe=te[Ee].image[ce].image;Ie?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ee+1,0,0,qe.width,qe.height,Pe,Me,qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ee+1,We,qe.width,qe.height,0,Pe,Me,qe.data)}}else{Ie?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Pe,Me,me[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,We,Pe,Me,me[ce]);for(let Ee=0;Ee<te.length;Ee++){const we=te[Ee];Ie?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ee+1,0,0,Pe,Me,we.image[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ee+1,We,Pe,Me,we.image[ce])}}}m(v)&&p(n.TEXTURE_CUBE_MAP),V.__version=H.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function he(M,v,C,G,H,V){const le=s.convert(C.format,C.colorSpace),ae=s.convert(C.type),de=A(C.internalFormat,le,ae,C.colorSpace);if(!i.get(v).__hasExternalTextures){const ue=Math.max(1,v.width>>V),me=Math.max(1,v.height>>V);H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?t.texImage3D(H,V,de,ue,me,v.depth,0,le,ae,null):t.texImage2D(H,V,de,ue,me,0,le,ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,M),N(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,H,i.get(C).__webglTexture,0,L(v)):(H===n.TEXTURE_2D||H>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&H<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,G,H,i.get(C).__webglTexture,V),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Se(M,v,C){if(n.bindRenderbuffer(n.RENDERBUFFER,M),v.depthBuffer){const G=v.depthTexture,H=G&&G.isDepthTexture?G.type:null,V=y(v.stencilBuffer,H),le=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=L(v);N(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae,V,v.width,v.height):C?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,V,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,V,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,le,n.RENDERBUFFER,M)}else{const G=v.textures;for(let H=0;H<G.length;H++){const V=G[H],le=s.convert(V.format,V.colorSpace),ae=s.convert(V.type),de=A(V.internalFormat,le,ae,V.colorSpace),Re=L(v);C&&N(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,de,v.width,v.height):N(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Re,de,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,de,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function F(M,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,M),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),J(v.depthTexture,0);const G=i.get(v.depthTexture).__webglTexture,H=L(v);if(v.depthTexture.format===Sr)N(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,G,0,H):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,G,0);else if(v.depthTexture.format===Lr)N(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,G,0,H):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,G,0);else throw new Error("Unknown depthTexture format")}function oe(M){const v=i.get(M),C=M.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==M.depthTexture){const G=M.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),G){const H=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,G.removeEventListener("dispose",H)};G.addEventListener("dispose",H),v.__depthDisposeCallback=H}v.__boundDepthTexture=G}if(M.depthTexture&&!v.__autoAllocateDepthBuffer){if(C)throw new Error("target.depthTexture not supported in Cube render targets");F(v.__webglFramebuffer,M)}else if(C){v.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[G]),v.__webglDepthbuffer[G]===void 0)v.__webglDepthbuffer[G]=n.createRenderbuffer(),Se(v.__webglDepthbuffer[G],M,!1);else{const H=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=v.__webglDepthbuffer[G];n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,H,n.RENDERBUFFER,V)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),Se(v.__webglDepthbuffer,M,!1);else{const G=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,H=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,H),n.framebufferRenderbuffer(n.FRAMEBUFFER,G,n.RENDERBUFFER,H)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ie(M,v,C){const G=i.get(M);v!==void 0&&he(G.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),C!==void 0&&oe(M)}function fe(M){const v=M.texture,C=i.get(M),G=i.get(v);M.addEventListener("dispose",P);const H=M.textures,V=M.isWebGLCubeRenderTarget===!0,le=H.length>1;if(le||(G.__webglTexture===void 0&&(G.__webglTexture=n.createTexture()),G.__version=v.version,o.memory.textures++),V){C.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(v.mipmaps&&v.mipmaps.length>0){C.__webglFramebuffer[ae]=[];for(let de=0;de<v.mipmaps.length;de++)C.__webglFramebuffer[ae][de]=n.createFramebuffer()}else C.__webglFramebuffer[ae]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){C.__webglFramebuffer=[];for(let ae=0;ae<v.mipmaps.length;ae++)C.__webglFramebuffer[ae]=n.createFramebuffer()}else C.__webglFramebuffer=n.createFramebuffer();if(le)for(let ae=0,de=H.length;ae<de;ae++){const Re=i.get(H[ae]);Re.__webglTexture===void 0&&(Re.__webglTexture=n.createTexture(),o.memory.textures++)}if(M.samples>0&&N(M)===!1){C.__webglMultisampledFramebuffer=n.createFramebuffer(),C.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let ae=0;ae<H.length;ae++){const de=H[ae];C.__webglColorRenderbuffer[ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,C.__webglColorRenderbuffer[ae]);const Re=s.convert(de.format,de.colorSpace),ue=s.convert(de.type),me=A(de.internalFormat,Re,ue,de.colorSpace,M.isXRRenderTarget===!0),De=L(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,De,me,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,C.__webglColorRenderbuffer[ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(C.__webglDepthRenderbuffer=n.createRenderbuffer(),Se(C.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(V){t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture),ve(n.TEXTURE_CUBE_MAP,v);for(let ae=0;ae<6;ae++)if(v.mipmaps&&v.mipmaps.length>0)for(let de=0;de<v.mipmaps.length;de++)he(C.__webglFramebuffer[ae][de],M,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,de);else he(C.__webglFramebuffer[ae],M,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(v)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(le){for(let ae=0,de=H.length;ae<de;ae++){const Re=H[ae],ue=i.get(Re);t.bindTexture(n.TEXTURE_2D,ue.__webglTexture),ve(n.TEXTURE_2D,Re),he(C.__webglFramebuffer,M,Re,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,0),m(Re)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let ae=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(ae=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ae,G.__webglTexture),ve(ae,v),v.mipmaps&&v.mipmaps.length>0)for(let de=0;de<v.mipmaps.length;de++)he(C.__webglFramebuffer[de],M,v,n.COLOR_ATTACHMENT0,ae,de);else he(C.__webglFramebuffer,M,v,n.COLOR_ATTACHMENT0,ae,0);m(v)&&p(ae),t.unbindTexture()}M.depthBuffer&&oe(M)}function Te(M){const v=M.textures;for(let C=0,G=v.length;C<G;C++){const H=v[C];if(m(H)){const V=M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,le=i.get(H).__webglTexture;t.bindTexture(V,le),p(V),t.unbindTexture()}}}const ee=[],g=[];function w(M){if(M.samples>0){if(N(M)===!1){const v=M.textures,C=M.width,G=M.height;let H=n.COLOR_BUFFER_BIT;const V=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=i.get(M),ae=v.length>1;if(ae)for(let de=0;de<v.length;de++)t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let de=0;de<v.length;de++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(H|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(H|=n.STENCIL_BUFFER_BIT)),ae){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,le.__webglColorRenderbuffer[de]);const Re=i.get(v[de]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Re,0)}n.blitFramebuffer(0,0,C,G,0,0,C,G,H,n.NEAREST),l===!0&&(ee.length=0,g.length=0,ee.push(n.COLOR_ATTACHMENT0+de),M.depthBuffer&&M.resolveDepthBuffer===!1&&(ee.push(V),g.push(V),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,g)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ee))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ae)for(let de=0;de<v.length;de++){t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,le.__webglColorRenderbuffer[de]);const Re=i.get(v[de]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,Re,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){const v=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function L(M){return Math.min(r.maxSamples,M.samples)}function N(M){const v=i.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function I(M){const v=o.render.frame;u.get(M)!==v&&(u.set(M,v),M.update())}function Y(M,v){const C=M.colorSpace,G=M.format,H=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||C!==Si&&C!==fi&&(Je.getTransfer(C)===at?(G!==_n||H!==Kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",C)),v}function Z(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=K,this.resetTextureUnits=b,this.setTexture2D=J,this.setTexture2DArray=se,this.setTexture3D=W,this.setTextureCube=Q,this.rebindTextures=ie,this.setupRenderTarget=fe,this.updateRenderTargetMipmap=Te,this.updateMultisampleRenderTarget=w,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=he,this.useMultisampledRTT=N}function RE(n,e){function t(i,r=fi){let s;const o=Je.getTransfer(r);if(i===Kn)return n.UNSIGNED_BYTE;if(i===kc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Vc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Jd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===jd)return n.BYTE;if(i===Zd)return n.SHORT;if(i===ms)return n.UNSIGNED_SHORT;if(i===Hc)return n.INT;if(i===Gi)return n.UNSIGNED_INT;if(i===Xn)return n.FLOAT;if(i===Es)return n.HALF_FLOAT;if(i===Qd)return n.ALPHA;if(i===ep)return n.RGB;if(i===_n)return n.RGBA;if(i===tp)return n.LUMINANCE;if(i===np)return n.LUMINANCE_ALPHA;if(i===Sr)return n.DEPTH_COMPONENT;if(i===Lr)return n.DEPTH_STENCIL;if(i===ip)return n.RED;if(i===Gc)return n.RED_INTEGER;if(i===rp)return n.RG;if(i===Wc)return n.RG_INTEGER;if(i===Xc)return n.RGBA_INTEGER;if(i===xo||i===So||i===yo||i===Mo)if(o===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===xo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===So)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===yo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Mo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===xo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===So)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===yo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Mo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Il||i===Ul||i===Nl||i===Ol)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Il)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ul)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Nl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ol)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Fl||i===Bl||i===zl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Fl||i===Bl)return o===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===zl)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Hl||i===kl||i===Vl||i===Gl||i===Wl||i===Xl||i===ql||i===Yl||i===$l||i===Kl||i===jl||i===Zl||i===Jl||i===Ql)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Hl)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===kl)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Vl)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Gl)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Wl)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Xl)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ql)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Yl)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===$l)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Kl)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===jl)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Zl)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Jl)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ql)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Eo||i===ec||i===tc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Eo)return o===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ec)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===tc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===sp||i===nc||i===ic||i===rc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Eo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===nc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ic)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===rc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Pr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class CE extends nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class $r extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const PE={type:"move"};class Ja{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $r,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $r,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $r,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,_=.005;c.inputState.pinching&&h>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(PE)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new $r;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const LE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,DE=`
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

}`;class IE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Wt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new jn({vertexShader:LE,fragmentShader:DE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new zt(new As(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class UE extends Yi{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,_=null;const x=new IE,m=t.getContextAttributes();let p=null,A=null;const y=[],E=[],O=new ye;let P=null;const R=new nn;R.layers.enable(1),R.viewport=new st;const U=new nn;U.layers.enable(2),U.viewport=new st;const re=[R,U],S=new CE;S.layers.enable(1),S.layers.enable(2);let b=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let he=y[ne];return he===void 0&&(he=new Ja,y[ne]=he),he.getTargetRaySpace()},this.getControllerGrip=function(ne){let he=y[ne];return he===void 0&&(he=new Ja,y[ne]=he),he.getGripSpace()},this.getHand=function(ne){let he=y[ne];return he===void 0&&(he=new Ja,y[ne]=he),he.getHandSpace()};function q(ne){const he=E.indexOf(ne.inputSource);if(he===-1)return;const Se=y[he];Se!==void 0&&(Se.update(ne.inputSource,ne.frame,c||o),Se.dispatchEvent({type:ne.type,data:ne.inputSource}))}function J(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",J),r.removeEventListener("inputsourceschange",se);for(let ne=0;ne<y.length;ne++){const he=E[ne];he!==null&&(E[ne]=null,y[ne].disconnect(he))}b=null,K=null,x.reset(),e.setRenderTarget(p),d=null,h=null,f=null,r=null,A=null,Ge.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(O.width,O.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){s=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){a=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(ne){if(r=ne,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",J),r.addEventListener("inputsourceschange",se),m.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(O),r.renderState.layers===void 0){const he={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,he),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),A=new Wi(d.framebufferWidth,d.framebufferHeight,{format:_n,type:Kn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let he=null,Se=null,F=null;m.depth&&(F=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=m.stencil?Lr:Sr,Se=m.stencil?Pr:Gi);const oe={colorFormat:t.RGBA8,depthFormat:F,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(oe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),A=new Wi(h.textureWidth,h.textureHeight,{format:_n,type:Kn,depthTexture:new vp(h.textureWidth,h.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ge.setContext(r),Ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function se(ne){for(let he=0;he<ne.removed.length;he++){const Se=ne.removed[he],F=E.indexOf(Se);F>=0&&(E[F]=null,y[F].disconnect(Se))}for(let he=0;he<ne.added.length;he++){const Se=ne.added[he];let F=E.indexOf(Se);if(F===-1){for(let ie=0;ie<y.length;ie++)if(ie>=E.length){E.push(Se),F=ie;break}else if(E[ie]===null){E[ie]=Se,F=ie;break}if(F===-1)break}const oe=y[F];oe&&oe.connect(Se)}}const W=new D,Q=new D;function X(ne,he,Se){W.setFromMatrixPosition(he.matrixWorld),Q.setFromMatrixPosition(Se.matrixWorld);const F=W.distanceTo(Q),oe=he.projectionMatrix.elements,ie=Se.projectionMatrix.elements,fe=oe[14]/(oe[10]-1),Te=oe[14]/(oe[10]+1),ee=(oe[9]+1)/oe[5],g=(oe[9]-1)/oe[5],w=(oe[8]-1)/oe[0],L=(ie[8]+1)/ie[0],N=fe*w,I=fe*L,Y=F/(-w+L),Z=Y*-w;if(he.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(Z),ne.translateZ(Y),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),oe[10]===-1)ne.projectionMatrix.copy(he.projectionMatrix),ne.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const M=fe+Y,v=Te+Y,C=N-Z,G=I+(F-Z),H=ee*Te/v*M,V=g*Te/v*M;ne.projectionMatrix.makePerspective(C,G,H,V,M,v),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function ge(ne,he){he===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(he.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(r===null)return;let he=ne.near,Se=ne.far;x.texture!==null&&(x.depthNear>0&&(he=x.depthNear),x.depthFar>0&&(Se=x.depthFar)),S.near=U.near=R.near=he,S.far=U.far=R.far=Se,(b!==S.near||K!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),b=S.near,K=S.far);const F=ne.parent,oe=S.cameras;ge(S,F);for(let ie=0;ie<oe.length;ie++)ge(oe[ie],F);oe.length===2?X(S,R,U):S.projectionMatrix.copy(R.projectionMatrix),xe(ne,S,F)};function xe(ne,he,Se){Se===null?ne.matrix.copy(he.matrixWorld):(ne.matrix.copy(Se.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(he.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(he.projectionMatrix),ne.projectionMatrixInverse.copy(he.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=gs*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(ne){l=ne,h!==null&&(h.fixedFoveation=ne),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ne)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let ve=null;function Oe(ne,he){if(u=he.getViewerPose(c||o),_=he,u!==null){const Se=u.views;d!==null&&(e.setRenderTargetFramebuffer(A,d.framebuffer),e.setRenderTarget(A));let F=!1;Se.length!==S.cameras.length&&(S.cameras.length=0,F=!0);for(let ie=0;ie<Se.length;ie++){const fe=Se[ie];let Te=null;if(d!==null)Te=d.getViewport(fe);else{const g=f.getViewSubImage(h,fe);Te=g.viewport,ie===0&&(e.setRenderTargetTextures(A,g.colorTexture,h.ignoreDepthValues?void 0:g.depthStencilTexture),e.setRenderTarget(A))}let ee=re[ie];ee===void 0&&(ee=new nn,ee.layers.enable(ie),ee.viewport=new st,re[ie]=ee),ee.matrix.fromArray(fe.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(fe.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(Te.x,Te.y,Te.width,Te.height),ie===0&&(S.matrix.copy(ee.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),F===!0&&S.cameras.push(ee)}const oe=r.enabledFeatures;if(oe&&oe.includes("depth-sensing")){const ie=f.getDepthInformation(Se[0]);ie&&ie.isValid&&ie.texture&&x.init(e,ie,r.renderState)}}for(let Se=0;Se<y.length;Se++){const F=E[Se],oe=y[Se];F!==null&&oe!==void 0&&oe.update(F,he,c||o)}ve&&ve(ne,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),_=null}const Ge=new _p;Ge.setAnimationLoop(Oe),this.setAnimationLoop=function(ne){ve=ne},this.dispose=function(){}}}const Pi=new Dn,NE=new lt;function OE(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,dp(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,A,y,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,E)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),x(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,A,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Gt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Gt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const A=e.get(p),y=A.envMap,E=A.envMapRotation;y&&(m.envMap.value=y,Pi.copy(E),Pi.x*=-1,Pi.y*=-1,Pi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Pi.y*=-1,Pi.z*=-1),m.envMapRotation.value.setFromMatrix4(NE.makeRotationFromEuler(Pi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,A,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*A,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,A){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Gt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const A=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function FE(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,y){const E=y.program;i.uniformBlockBinding(A,E)}function c(A,y){let E=r[A.id];E===void 0&&(_(A),E=u(A),r[A.id]=E,A.addEventListener("dispose",m));const O=y.program;i.updateUBOMapping(A,O);const P=e.render.frame;s[A.id]!==P&&(h(A),s[A.id]=P)}function u(A){const y=f();A.__bindingPointIndex=y;const E=n.createBuffer(),O=A.__size,P=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,O,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,E),E}function f(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(A){const y=r[A.id],E=A.uniforms,O=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let P=0,R=E.length;P<R;P++){const U=Array.isArray(E[P])?E[P]:[E[P]];for(let re=0,S=U.length;re<S;re++){const b=U[re];if(d(b,P,re,O)===!0){const K=b.__offset,q=Array.isArray(b.value)?b.value:[b.value];let J=0;for(let se=0;se<q.length;se++){const W=q[se],Q=x(W);typeof W=="number"||typeof W=="boolean"?(b.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,K+J,b.__data)):W.isMatrix3?(b.__data[0]=W.elements[0],b.__data[1]=W.elements[1],b.__data[2]=W.elements[2],b.__data[3]=0,b.__data[4]=W.elements[3],b.__data[5]=W.elements[4],b.__data[6]=W.elements[5],b.__data[7]=0,b.__data[8]=W.elements[6],b.__data[9]=W.elements[7],b.__data[10]=W.elements[8],b.__data[11]=0):(W.toArray(b.__data,J),J+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,K,b.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(A,y,E,O){const P=A.value,R=y+"_"+E;if(O[R]===void 0)return typeof P=="number"||typeof P=="boolean"?O[R]=P:O[R]=P.clone(),!0;{const U=O[R];if(typeof P=="number"||typeof P=="boolean"){if(U!==P)return O[R]=P,!0}else if(U.equals(P)===!1)return U.copy(P),!0}return!1}function _(A){const y=A.uniforms;let E=0;const O=16;for(let R=0,U=y.length;R<U;R++){const re=Array.isArray(y[R])?y[R]:[y[R]];for(let S=0,b=re.length;S<b;S++){const K=re[S],q=Array.isArray(K.value)?K.value:[K.value];for(let J=0,se=q.length;J<se;J++){const W=q[J],Q=x(W),X=E%O,ge=X%Q.boundary,xe=X+ge;E+=ge,xe!==0&&O-xe<Q.storage&&(E+=O-xe),K.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=E,E+=Q.storage}}}const P=E%O;return P>0&&(E+=O-P),A.__size=E,A.__cache={},this}function x(A){const y={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(y.boundary=4,y.storage=4):A.isVector2?(y.boundary=8,y.storage=8):A.isVector3||A.isColor?(y.boundary=16,y.storage=12):A.isVector4?(y.boundary=16,y.storage=16):A.isMatrix3?(y.boundary=48,y.storage=48):A.isMatrix4?(y.boundary=64,y.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),y}function m(A){const y=A.target;y.removeEventListener("dispose",m);const E=o.indexOf(y.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function p(){for(const A in r)n.deleteBuffer(r[A]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class BE{constructor(e={}){const{canvas:t=T0(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const d=new Uint32Array(4),_=new Int32Array(4);let x=null,m=null;const p=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=An,this.toneMapping=mi,this.toneMappingExposure=1;const y=this;let E=!1,O=0,P=0,R=null,U=-1,re=null;const S=new st,b=new st;let K=null;const q=new $e(0);let J=0,se=t.width,W=t.height,Q=1,X=null,ge=null;const xe=new st(0,0,se,W),ve=new st(0,0,se,W);let Oe=!1;const Ge=new gp;let ne=!1,he=!1;const Se=new lt,F=new lt,oe=new D,ie=new st,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Te=!1;function ee(){return R===null?Q:1}let g=i;function w(T,z){return t.getContext(T,z)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${zc}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",Ee,!1),t.addEventListener("webglcontextcreationerror",we,!1),g===null){const z="webgl2";if(g=w(z,T),g===null)throw w(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let L,N,I,Y,Z,M,v,C,G,H,V,le,ae,de,Re,ue,me,De,Pe,Me,We,Ie,Xe,B;function Ae(){L=new Gy(g),L.init(),Ie=new RE(g,L),N=new Oy(g,L,e,Ie),I=new TE(g),N.reverseDepthBuffer&&I.buffers.depth.setReversed(!0),Y=new qy(g),Z=new uE,M=new wE(g,L,I,Z,N,Ie,Y),v=new By(y),C=new Vy(y),G=new J0(g),Xe=new Uy(g,G),H=new Wy(g,G,Y,Xe),V=new $y(g,H,G,Y),Pe=new Yy(g,N,M),ue=new Fy(Z),le=new cE(y,v,C,L,N,Xe,ue),ae=new OE(y,Z),de=new hE,Re=new vE(L),De=new Iy(y,v,C,I,V,h,l),me=new EE(y,V,N),B=new FE(g,Y,N,I),Me=new Ny(g,L,Y),We=new Xy(g,L,Y),Y.programs=le.programs,y.capabilities=N,y.extensions=L,y.properties=Z,y.renderLists=de,y.shadowMap=me,y.state=I,y.info=Y}Ae();const te=new UE(y,g);this.xr=te,this.getContext=function(){return g},this.getContextAttributes=function(){return g.getContextAttributes()},this.forceContextLoss=function(){const T=L.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=L.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(T){T!==void 0&&(Q=T,this.setSize(se,W,!1))},this.getSize=function(T){return T.set(se,W)},this.setSize=function(T,z,$=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=T,W=z,t.width=Math.floor(T*Q),t.height=Math.floor(z*Q),$===!0&&(t.style.width=T+"px",t.style.height=z+"px"),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(se*Q,W*Q).floor()},this.setDrawingBufferSize=function(T,z,$){se=T,W=z,Q=$,t.width=Math.floor(T*$),t.height=Math.floor(z*$),this.setViewport(0,0,T,z)},this.getCurrentViewport=function(T){return T.copy(S)},this.getViewport=function(T){return T.copy(xe)},this.setViewport=function(T,z,$,j){T.isVector4?xe.set(T.x,T.y,T.z,T.w):xe.set(T,z,$,j),I.viewport(S.copy(xe).multiplyScalar(Q).round())},this.getScissor=function(T){return T.copy(ve)},this.setScissor=function(T,z,$,j){T.isVector4?ve.set(T.x,T.y,T.z,T.w):ve.set(T,z,$,j),I.scissor(b.copy(ve).multiplyScalar(Q).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(T){I.setScissorTest(Oe=T)},this.setOpaqueSort=function(T){X=T},this.setTransparentSort=function(T){ge=T},this.getClearColor=function(T){return T.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(T=!0,z=!0,$=!0){let j=0;if(T){let k=!1;if(R!==null){const pe=R.texture.format;k=pe===Xc||pe===Wc||pe===Gc}if(k){const pe=R.texture.type,be=pe===Kn||pe===Gi||pe===ms||pe===Pr||pe===kc||pe===Vc,Ce=De.getClearColor(),Le=De.getClearAlpha(),Fe=Ce.r,Be=Ce.g,Ue=Ce.b;be?(d[0]=Fe,d[1]=Be,d[2]=Ue,d[3]=Le,g.clearBufferuiv(g.COLOR,0,d)):(_[0]=Fe,_[1]=Be,_[2]=Ue,_[3]=Le,g.clearBufferiv(g.COLOR,0,_))}else j|=g.COLOR_BUFFER_BIT}z&&(j|=g.DEPTH_BUFFER_BIT,g.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),$&&(j|=g.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),g.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",Ee,!1),t.removeEventListener("webglcontextcreationerror",we,!1),de.dispose(),Re.dispose(),Z.dispose(),v.dispose(),C.dispose(),V.dispose(),Xe.dispose(),B.dispose(),le.dispose(),te.dispose(),te.removeEventListener("sessionstart",ru),te.removeEventListener("sessionend",su),Mi.stop()};function ce(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const T=Y.autoReset,z=me.enabled,$=me.autoUpdate,j=me.needsUpdate,k=me.type;Ae(),Y.autoReset=T,me.enabled=z,me.autoUpdate=$,me.needsUpdate=j,me.type=k}function we(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function qe(T){const z=T.target;z.removeEventListener("dispose",qe),dt(z)}function dt(T){Ht(T),Z.remove(T)}function Ht(T){const z=Z.get(T).programs;z!==void 0&&(z.forEach(function($){le.releaseProgram($)}),T.isShaderMaterial&&le.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,$,j,k,pe){z===null&&(z=fe);const be=k.isMesh&&k.matrixWorld.determinant()<0,Ce=Ip(T,z,$,j,k);I.setMaterial(j,be);let Le=$.index,Fe=1;if(j.wireframe===!0){if(Le=H.getWireframeAttribute($),Le===void 0)return;Fe=2}const Be=$.drawRange,Ue=$.attributes.position;let et=Be.start*Fe,ot=(Be.start+Be.count)*Fe;pe!==null&&(et=Math.max(et,pe.start*Fe),ot=Math.min(ot,(pe.start+pe.count)*Fe)),Le!==null?(et=Math.max(et,0),ot=Math.min(ot,Le.count)):Ue!=null&&(et=Math.max(et,0),ot=Math.min(ot,Ue.count));const ut=ot-et;if(ut<0||ut===1/0)return;Xe.setup(k,j,Ce,$,Le);let qt,Ke=Me;if(Le!==null&&(qt=G.get(Le),Ke=We,Ke.setIndex(qt)),k.isMesh)j.wireframe===!0?(I.setLineWidth(j.wireframeLinewidth*ee()),Ke.setMode(g.LINES)):Ke.setMode(g.TRIANGLES);else if(k.isLine){let Ne=j.linewidth;Ne===void 0&&(Ne=1),I.setLineWidth(Ne*ee()),k.isLineSegments?Ke.setMode(g.LINES):k.isLineLoop?Ke.setMode(g.LINE_LOOP):Ke.setMode(g.LINE_STRIP)}else k.isPoints?Ke.setMode(g.POINTS):k.isSprite&&Ke.setMode(g.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Ke.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(L.get("WEBGL_multi_draw"))Ke.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Ne=k._multiDrawStarts,yt=k._multiDrawCounts,je=k._multiDrawCount,ln=Le?G.get(Le).bytesPerElement:1,$i=Z.get(j).currentProgram.getUniforms();for(let Yt=0;Yt<je;Yt++)$i.setValue(g,"_gl_DrawID",Yt),Ke.render(Ne[Yt]/ln,yt[Yt])}else if(k.isInstancedMesh)Ke.renderInstances(et,ut,k.count);else if($.isInstancedBufferGeometry){const Ne=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,yt=Math.min($.instanceCount,Ne);Ke.renderInstances(et,ut,yt)}else Ke.render(et,ut)};function Ye(T,z,$){T.transparent===!0&&T.side===pn&&T.forceSinglePass===!1?(T.side=Gt,T.needsUpdate=!0,Rs(T,z,$),T.side=_i,T.needsUpdate=!0,Rs(T,z,$),T.side=pn):Rs(T,z,$)}this.compile=function(T,z,$=null){$===null&&($=T),m=Re.get($),m.init(z),A.push(m),$.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),T!==$&&T.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights();const j=new Set;return T.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const pe=k.material;if(pe)if(Array.isArray(pe))for(let be=0;be<pe.length;be++){const Ce=pe[be];Ye(Ce,$,k),j.add(Ce)}else Ye(pe,$,k),j.add(pe)}),A.pop(),m=null,j},this.compileAsync=function(T,z,$=null){const j=this.compile(T,z,$);return new Promise(k=>{function pe(){if(j.forEach(function(be){Z.get(be).currentProgram.isReady()&&j.delete(be)}),j.size===0){k(T);return}setTimeout(pe,10)}L.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let kt=null;function Un(T){kt&&kt(T)}function ru(){Mi.stop()}function su(){Mi.start()}const Mi=new _p;Mi.setAnimationLoop(Un),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(T){kt=T,te.setAnimationLoop(T),T===null?Mi.stop():Mi.start()},te.addEventListener("sessionstart",ru),te.addEventListener("sessionend",su),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(z),z=te.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,z,R),m=Re.get(T,A.length),m.init(z),A.push(m),F.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Ge.setFromProjectionMatrix(F),he=this.localClippingEnabled,ne=ue.init(this.clippingPlanes,he),x=de.get(T,p.length),x.init(),p.push(x),te.enabled===!0&&te.isPresenting===!0){const pe=y.xr.getDepthSensingMesh();pe!==null&&oa(pe,z,-1/0,y.sortObjects)}oa(T,z,0,y.sortObjects),x.finish(),y.sortObjects===!0&&x.sort(X,ge),Te=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,Te&&De.addToRenderList(x,T),this.info.render.frame++,ne===!0&&ue.beginShadows();const $=m.state.shadowsArray;me.render($,T,z),ne===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=x.opaque,k=x.transmissive;if(m.setupLights(),z.isArrayCamera){const pe=z.cameras;if(k.length>0)for(let be=0,Ce=pe.length;be<Ce;be++){const Le=pe[be];au(j,k,T,Le)}Te&&De.render(T);for(let be=0,Ce=pe.length;be<Ce;be++){const Le=pe[be];ou(x,T,Le,Le.viewport)}}else k.length>0&&au(j,k,T,z),Te&&De.render(T),ou(x,T,z);R!==null&&(M.updateMultisampleRenderTarget(R),M.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(y,T,z),Xe.resetDefaultState(),U=-1,re=null,A.pop(),A.length>0?(m=A[A.length-1],ne===!0&&ue.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function oa(T,z,$,j){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)$=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ge.intersectsSprite(T)){j&&ie.setFromMatrixPosition(T.matrixWorld).applyMatrix4(F);const be=V.update(T),Ce=T.material;Ce.visible&&x.push(T,be,Ce,$,ie.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ge.intersectsObject(T))){const be=V.update(T),Ce=T.material;if(j&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ie.copy(T.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),ie.copy(be.boundingSphere.center)),ie.applyMatrix4(T.matrixWorld).applyMatrix4(F)),Array.isArray(Ce)){const Le=be.groups;for(let Fe=0,Be=Le.length;Fe<Be;Fe++){const Ue=Le[Fe],et=Ce[Ue.materialIndex];et&&et.visible&&x.push(T,be,et,$,ie.z,Ue)}}else Ce.visible&&x.push(T,be,Ce,$,ie.z,null)}}const pe=T.children;for(let be=0,Ce=pe.length;be<Ce;be++)oa(pe[be],z,$,j)}function ou(T,z,$,j){const k=T.opaque,pe=T.transmissive,be=T.transparent;m.setupLightsView($),ne===!0&&ue.setGlobalState(y.clippingPlanes,$),j&&I.viewport(S.copy(j)),k.length>0&&ws(k,z,$),pe.length>0&&ws(pe,z,$),be.length>0&&ws(be,z,$),I.buffers.depth.setTest(!0),I.buffers.depth.setMask(!0),I.buffers.color.setMask(!0),I.setPolygonOffset(!1)}function au(T,z,$,j){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[j.id]===void 0&&(m.state.transmissionRenderTarget[j.id]=new Wi(1,1,{generateMipmaps:!0,type:L.has("EXT_color_buffer_half_float")||L.has("EXT_color_buffer_float")?Es:Kn,minFilter:Bi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const pe=m.state.transmissionRenderTarget[j.id],be=j.viewport||S;pe.setSize(be.z,be.w);const Ce=y.getRenderTarget();y.setRenderTarget(pe),y.getClearColor(q),J=y.getClearAlpha(),J<1&&y.setClearColor(16777215,.5),y.clear(),Te&&De.render($);const Le=y.toneMapping;y.toneMapping=mi;const Fe=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),m.setupLightsView(j),ne===!0&&ue.setGlobalState(y.clippingPlanes,j),ws(T,$,j),M.updateMultisampleRenderTarget(pe),M.updateRenderTargetMipmap(pe),L.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let Ue=0,et=z.length;Ue<et;Ue++){const ot=z[Ue],ut=ot.object,qt=ot.geometry,Ke=ot.material,Ne=ot.group;if(Ke.side===pn&&ut.layers.test(j.layers)){const yt=Ke.side;Ke.side=Gt,Ke.needsUpdate=!0,lu(ut,$,j,qt,Ke,Ne),Ke.side=yt,Ke.needsUpdate=!0,Be=!0}}Be===!0&&(M.updateMultisampleRenderTarget(pe),M.updateRenderTargetMipmap(pe))}y.setRenderTarget(Ce),y.setClearColor(q,J),Fe!==void 0&&(j.viewport=Fe),y.toneMapping=Le}function ws(T,z,$){const j=z.isScene===!0?z.overrideMaterial:null;for(let k=0,pe=T.length;k<pe;k++){const be=T[k],Ce=be.object,Le=be.geometry,Fe=j===null?be.material:j,Be=be.group;Ce.layers.test($.layers)&&lu(Ce,z,$,Le,Fe,Be)}}function lu(T,z,$,j,k,pe){T.onBeforeRender(y,z,$,j,k,pe),T.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),k.onBeforeRender(y,z,$,j,T,pe),k.transparent===!0&&k.side===pn&&k.forceSinglePass===!1?(k.side=Gt,k.needsUpdate=!0,y.renderBufferDirect($,z,j,k,T,pe),k.side=_i,k.needsUpdate=!0,y.renderBufferDirect($,z,j,k,T,pe),k.side=pn):y.renderBufferDirect($,z,j,k,T,pe),T.onAfterRender(y,z,$,j,k,pe)}function Rs(T,z,$){z.isScene!==!0&&(z=fe);const j=Z.get(T),k=m.state.lights,pe=m.state.shadowsArray,be=k.state.version,Ce=le.getParameters(T,k.state,pe,z,$),Le=le.getProgramCacheKey(Ce);let Fe=j.programs;j.environment=T.isMeshStandardMaterial?z.environment:null,j.fog=z.fog,j.envMap=(T.isMeshStandardMaterial?C:v).get(T.envMap||j.environment),j.envMapRotation=j.environment!==null&&T.envMap===null?z.environmentRotation:T.envMapRotation,Fe===void 0&&(T.addEventListener("dispose",qe),Fe=new Map,j.programs=Fe);let Be=Fe.get(Le);if(Be!==void 0){if(j.currentProgram===Be&&j.lightsStateVersion===be)return uu(T,Ce),Be}else Ce.uniforms=le.getUniforms(T),T.onBeforeCompile(Ce,y),Be=le.acquireProgram(Ce,Le),Fe.set(Le,Be),j.uniforms=Ce.uniforms;const Ue=j.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ue.clippingPlanes=ue.uniform),uu(T,Ce),j.needsLights=Np(T),j.lightsStateVersion=be,j.needsLights&&(Ue.ambientLightColor.value=k.state.ambient,Ue.lightProbe.value=k.state.probe,Ue.directionalLights.value=k.state.directional,Ue.directionalLightShadows.value=k.state.directionalShadow,Ue.spotLights.value=k.state.spot,Ue.spotLightShadows.value=k.state.spotShadow,Ue.rectAreaLights.value=k.state.rectArea,Ue.ltc_1.value=k.state.rectAreaLTC1,Ue.ltc_2.value=k.state.rectAreaLTC2,Ue.pointLights.value=k.state.point,Ue.pointLightShadows.value=k.state.pointShadow,Ue.hemisphereLights.value=k.state.hemi,Ue.directionalShadowMap.value=k.state.directionalShadowMap,Ue.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ue.spotShadowMap.value=k.state.spotShadowMap,Ue.spotLightMatrix.value=k.state.spotLightMatrix,Ue.spotLightMap.value=k.state.spotLightMap,Ue.pointShadowMap.value=k.state.pointShadowMap,Ue.pointShadowMatrix.value=k.state.pointShadowMatrix),j.currentProgram=Be,j.uniformsList=null,Be}function cu(T){if(T.uniformsList===null){const z=T.currentProgram.getUniforms();T.uniformsList=To.seqWithValue(z.seq,T.uniforms)}return T.uniformsList}function uu(T,z){const $=Z.get(T);$.outputColorSpace=z.outputColorSpace,$.batching=z.batching,$.batchingColor=z.batchingColor,$.instancing=z.instancing,$.instancingColor=z.instancingColor,$.instancingMorph=z.instancingMorph,$.skinning=z.skinning,$.morphTargets=z.morphTargets,$.morphNormals=z.morphNormals,$.morphColors=z.morphColors,$.morphTargetsCount=z.morphTargetsCount,$.numClippingPlanes=z.numClippingPlanes,$.numIntersection=z.numClipIntersection,$.vertexAlphas=z.vertexAlphas,$.vertexTangents=z.vertexTangents,$.toneMapping=z.toneMapping}function Ip(T,z,$,j,k){z.isScene!==!0&&(z=fe),M.resetTextureUnits();const pe=z.fog,be=j.isMeshStandardMaterial?z.environment:null,Ce=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Si,Le=(j.isMeshStandardMaterial?C:v).get(j.envMap||be),Fe=j.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Be=!!$.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ue=!!$.morphAttributes.position,et=!!$.morphAttributes.normal,ot=!!$.morphAttributes.color;let ut=mi;j.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(ut=y.toneMapping);const qt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Ke=qt!==void 0?qt.length:0,Ne=Z.get(j),yt=m.state.lights;if(ne===!0&&(he===!0||T!==re)){const en=T===re&&j.id===U;ue.setState(j,T,en)}let je=!1;j.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==yt.state.version||Ne.outputColorSpace!==Ce||k.isBatchedMesh&&Ne.batching===!1||!k.isBatchedMesh&&Ne.batching===!0||k.isBatchedMesh&&Ne.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ne.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ne.instancing===!1||!k.isInstancedMesh&&Ne.instancing===!0||k.isSkinnedMesh&&Ne.skinning===!1||!k.isSkinnedMesh&&Ne.skinning===!0||k.isInstancedMesh&&Ne.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ne.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ne.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ne.instancingMorph===!1&&k.morphTexture!==null||Ne.envMap!==Le||j.fog===!0&&Ne.fog!==pe||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==ue.numPlanes||Ne.numIntersection!==ue.numIntersection)||Ne.vertexAlphas!==Fe||Ne.vertexTangents!==Be||Ne.morphTargets!==Ue||Ne.morphNormals!==et||Ne.morphColors!==ot||Ne.toneMapping!==ut||Ne.morphTargetsCount!==Ke)&&(je=!0):(je=!0,Ne.__version=j.version);let ln=Ne.currentProgram;je===!0&&(ln=Rs(j,z,k));let $i=!1,Yt=!1,aa=!1;const ft=ln.getUniforms(),Jn=Ne.uniforms;if(I.useProgram(ln.program)&&($i=!0,Yt=!0,aa=!0),j.id!==U&&(U=j.id,Yt=!0),$i||re!==T){N.reverseDepthBuffer?(Se.copy(T.projectionMatrix),w0(Se),R0(Se),ft.setValue(g,"projectionMatrix",Se)):ft.setValue(g,"projectionMatrix",T.projectionMatrix),ft.setValue(g,"viewMatrix",T.matrixWorldInverse);const en=ft.map.cameraPosition;en!==void 0&&en.setValue(g,oe.setFromMatrixPosition(T.matrixWorld)),N.logarithmicDepthBuffer&&ft.setValue(g,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&ft.setValue(g,"isOrthographic",T.isOrthographicCamera===!0),re!==T&&(re=T,Yt=!0,aa=!0)}if(k.isSkinnedMesh){ft.setOptional(g,k,"bindMatrix"),ft.setOptional(g,k,"bindMatrixInverse");const en=k.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),ft.setValue(g,"boneTexture",en.boneTexture,M))}k.isBatchedMesh&&(ft.setOptional(g,k,"batchingTexture"),ft.setValue(g,"batchingTexture",k._matricesTexture,M),ft.setOptional(g,k,"batchingIdTexture"),ft.setValue(g,"batchingIdTexture",k._indirectTexture,M),ft.setOptional(g,k,"batchingColorTexture"),k._colorsTexture!==null&&ft.setValue(g,"batchingColorTexture",k._colorsTexture,M));const la=$.morphAttributes;if((la.position!==void 0||la.normal!==void 0||la.color!==void 0)&&Pe.update(k,$,ln),(Yt||Ne.receiveShadow!==k.receiveShadow)&&(Ne.receiveShadow=k.receiveShadow,ft.setValue(g,"receiveShadow",k.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Jn.envMap.value=Le,Jn.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&z.environment!==null&&(Jn.envMapIntensity.value=z.environmentIntensity),Yt&&(ft.setValue(g,"toneMappingExposure",y.toneMappingExposure),Ne.needsLights&&Up(Jn,aa),pe&&j.fog===!0&&ae.refreshFogUniforms(Jn,pe),ae.refreshMaterialUniforms(Jn,j,Q,W,m.state.transmissionRenderTarget[T.id]),To.upload(g,cu(Ne),Jn,M)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(To.upload(g,cu(Ne),Jn,M),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&ft.setValue(g,"center",k.center),ft.setValue(g,"modelViewMatrix",k.modelViewMatrix),ft.setValue(g,"normalMatrix",k.normalMatrix),ft.setValue(g,"modelMatrix",k.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const en=j.uniformsGroups;for(let ca=0,Op=en.length;ca<Op;ca++){const fu=en[ca];B.update(fu,ln),B.bind(fu,ln)}}return ln}function Up(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function Np(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,z,$){Z.get(T.texture).__webglTexture=z,Z.get(T.depthTexture).__webglTexture=$;const j=Z.get(T);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=$===void 0,j.__autoAllocateDepthBuffer||L.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,z){const $=Z.get(T);$.__webglFramebuffer=z,$.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(T,z=0,$=0){R=T,O=z,P=$;let j=!0,k=null,pe=!1,be=!1;if(T){const Le=Z.get(T);if(Le.__useDefaultFramebuffer!==void 0)I.bindFramebuffer(g.FRAMEBUFFER,null),j=!1;else if(Le.__webglFramebuffer===void 0)M.setupRenderTarget(T);else if(Le.__hasExternalTextures)M.rebindTextures(T,Z.get(T.texture).__webglTexture,Z.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ue=T.depthTexture;if(Le.__boundDepthTexture!==Ue){if(Ue!==null&&Z.has(Ue)&&(T.width!==Ue.image.width||T.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(T)}}const Fe=T.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(be=!0);const Be=Z.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Be[z])?k=Be[z][$]:k=Be[z],pe=!0):T.samples>0&&M.useMultisampledRTT(T)===!1?k=Z.get(T).__webglMultisampledFramebuffer:Array.isArray(Be)?k=Be[$]:k=Be,S.copy(T.viewport),b.copy(T.scissor),K=T.scissorTest}else S.copy(xe).multiplyScalar(Q).floor(),b.copy(ve).multiplyScalar(Q).floor(),K=Oe;if(I.bindFramebuffer(g.FRAMEBUFFER,k)&&j&&I.drawBuffers(T,k),I.viewport(S),I.scissor(b),I.setScissorTest(K),pe){const Le=Z.get(T.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_CUBE_MAP_POSITIVE_X+z,Le.__webglTexture,$)}else if(be){const Le=Z.get(T.texture),Fe=z||0;g.framebufferTextureLayer(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,Le.__webglTexture,$||0,Fe)}U=-1},this.readRenderTargetPixels=function(T,z,$,j,k,pe,be){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Z.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&be!==void 0&&(Ce=Ce[be]),Ce){I.bindFramebuffer(g.FRAMEBUFFER,Ce);try{const Le=T.texture,Fe=Le.format,Be=Le.type;if(!N.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!N.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-j&&$>=0&&$<=T.height-k&&g.readPixels(z,$,j,k,Ie.convert(Fe),Ie.convert(Be),pe)}finally{const Le=R!==null?Z.get(R).__webglFramebuffer:null;I.bindFramebuffer(g.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(T,z,$,j,k,pe,be){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=Z.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&be!==void 0&&(Ce=Ce[be]),Ce){const Le=T.texture,Fe=Le.format,Be=Le.type;if(!N.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!N.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=T.width-j&&$>=0&&$<=T.height-k){I.bindFramebuffer(g.FRAMEBUFFER,Ce);const Ue=g.createBuffer();g.bindBuffer(g.PIXEL_PACK_BUFFER,Ue),g.bufferData(g.PIXEL_PACK_BUFFER,pe.byteLength,g.STREAM_READ),g.readPixels(z,$,j,k,Ie.convert(Fe),Ie.convert(Be),0);const et=R!==null?Z.get(R).__webglFramebuffer:null;I.bindFramebuffer(g.FRAMEBUFFER,et);const ot=g.fenceSync(g.SYNC_GPU_COMMANDS_COMPLETE,0);return g.flush(),await A0(g,ot,4),g.bindBuffer(g.PIXEL_PACK_BUFFER,Ue),g.getBufferSubData(g.PIXEL_PACK_BUFFER,0,pe),g.deleteBuffer(Ue),g.deleteSync(ot),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,z=null,$=0){T.isTexture!==!0&&(bo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,T=arguments[1]);const j=Math.pow(2,-$),k=Math.floor(T.image.width*j),pe=Math.floor(T.image.height*j),be=z!==null?z.x:0,Ce=z!==null?z.y:0;M.setTexture2D(T,0),g.copyTexSubImage2D(g.TEXTURE_2D,$,0,0,be,Ce,k,pe),I.unbindTexture()},this.copyTextureToTexture=function(T,z,$=null,j=null,k=0){T.isTexture!==!0&&(bo("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,T=arguments[1],z=arguments[2],k=arguments[3]||0,$=null);let pe,be,Ce,Le,Fe,Be;$!==null?(pe=$.max.x-$.min.x,be=$.max.y-$.min.y,Ce=$.min.x,Le=$.min.y):(pe=T.image.width,be=T.image.height,Ce=0,Le=0),j!==null?(Fe=j.x,Be=j.y):(Fe=0,Be=0);const Ue=Ie.convert(z.format),et=Ie.convert(z.type);M.setTexture2D(z,0),g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,z.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,z.unpackAlignment);const ot=g.getParameter(g.UNPACK_ROW_LENGTH),ut=g.getParameter(g.UNPACK_IMAGE_HEIGHT),qt=g.getParameter(g.UNPACK_SKIP_PIXELS),Ke=g.getParameter(g.UNPACK_SKIP_ROWS),Ne=g.getParameter(g.UNPACK_SKIP_IMAGES),yt=T.isCompressedTexture?T.mipmaps[k]:T.image;g.pixelStorei(g.UNPACK_ROW_LENGTH,yt.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,yt.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Ce),g.pixelStorei(g.UNPACK_SKIP_ROWS,Le),T.isDataTexture?g.texSubImage2D(g.TEXTURE_2D,k,Fe,Be,pe,be,Ue,et,yt.data):T.isCompressedTexture?g.compressedTexSubImage2D(g.TEXTURE_2D,k,Fe,Be,yt.width,yt.height,Ue,yt.data):g.texSubImage2D(g.TEXTURE_2D,k,Fe,Be,pe,be,Ue,et,yt),g.pixelStorei(g.UNPACK_ROW_LENGTH,ot),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,ut),g.pixelStorei(g.UNPACK_SKIP_PIXELS,qt),g.pixelStorei(g.UNPACK_SKIP_ROWS,Ke),g.pixelStorei(g.UNPACK_SKIP_IMAGES,Ne),k===0&&z.generateMipmaps&&g.generateMipmap(g.TEXTURE_2D),I.unbindTexture()},this.copyTextureToTexture3D=function(T,z,$=null,j=null,k=0){T.isTexture!==!0&&(bo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,j=arguments[1]||null,T=arguments[2],z=arguments[3],k=arguments[4]||0);let pe,be,Ce,Le,Fe,Be,Ue,et,ot;const ut=T.isCompressedTexture?T.mipmaps[k]:T.image;$!==null?(pe=$.max.x-$.min.x,be=$.max.y-$.min.y,Ce=$.max.z-$.min.z,Le=$.min.x,Fe=$.min.y,Be=$.min.z):(pe=ut.width,be=ut.height,Ce=ut.depth,Le=0,Fe=0,Be=0),j!==null?(Ue=j.x,et=j.y,ot=j.z):(Ue=0,et=0,ot=0);const qt=Ie.convert(z.format),Ke=Ie.convert(z.type);let Ne;if(z.isData3DTexture)M.setTexture3D(z,0),Ne=g.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)M.setTexture2DArray(z,0),Ne=g.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,z.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,z.unpackAlignment);const yt=g.getParameter(g.UNPACK_ROW_LENGTH),je=g.getParameter(g.UNPACK_IMAGE_HEIGHT),ln=g.getParameter(g.UNPACK_SKIP_PIXELS),$i=g.getParameter(g.UNPACK_SKIP_ROWS),Yt=g.getParameter(g.UNPACK_SKIP_IMAGES);g.pixelStorei(g.UNPACK_ROW_LENGTH,ut.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,ut.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Le),g.pixelStorei(g.UNPACK_SKIP_ROWS,Fe),g.pixelStorei(g.UNPACK_SKIP_IMAGES,Be),T.isDataTexture||T.isData3DTexture?g.texSubImage3D(Ne,k,Ue,et,ot,pe,be,Ce,qt,Ke,ut.data):z.isCompressedArrayTexture?g.compressedTexSubImage3D(Ne,k,Ue,et,ot,pe,be,Ce,qt,ut.data):g.texSubImage3D(Ne,k,Ue,et,ot,pe,be,Ce,qt,Ke,ut),g.pixelStorei(g.UNPACK_ROW_LENGTH,yt),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,je),g.pixelStorei(g.UNPACK_SKIP_PIXELS,ln),g.pixelStorei(g.UNPACK_SKIP_ROWS,$i),g.pixelStorei(g.UNPACK_SKIP_IMAGES,Yt),k===0&&z.generateMipmaps&&g.generateMipmap(Ne),I.unbindTexture()},this.initRenderTarget=function(T){Z.get(T).__webglFramebuffer===void 0&&M.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?M.setTextureCube(T,0):T.isData3DTexture?M.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?M.setTexture2DArray(T,0):M.setTexture2D(T,0),I.unbindTexture()},this.resetState=function(){O=0,P=0,R=null,I.reset(),Xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===qc?"display-p3":"srgb",t.unpackColorSpace=Je.workingColorSpace===ia?"display-p3":"srgb"}}class zE extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dn,this.environmentIntensity=1,this.environmentRotation=new Dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class HE{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=sc,this.updateRanges=[],this.version=0,this.uuid=Pn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ut=new D;class hi{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=gn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=nt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=gn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=gn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=gn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=gn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array),r=nt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array),r=nt(r,this.array),s=nt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Sn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new hi(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ep extends Ts{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ho=new D,ko=new D,ih=new lt,Xr=new $c,no=new Ur,Qa=new D,rh=new D;class kE extends Xt{constructor(e=new Qt,t=new Ep){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Ho.fromBufferAttribute(t,r-1),ko.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Ho.distanceTo(ko);e.setAttribute("lineDistance",new xt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),no.copy(i.boundingSphere),no.applyMatrix4(r),no.radius+=s,e.ray.intersectsSphere(no)===!1)return;ih.copy(r).invert(),Xr.copy(e.ray).applyMatrix4(ih);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let x=d,m=_-1;x<m;x+=c){const p=u.getX(x),A=u.getX(x+1),y=io(this,e,Xr,l,p,A);y&&t.push(y)}if(this.isLineLoop){const x=u.getX(_-1),m=u.getX(d),p=io(this,e,Xr,l,x,m);p&&t.push(p)}}else{const d=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let x=d,m=_-1;x<m;x+=c){const p=io(this,e,Xr,l,x,x+1);p&&t.push(p)}if(this.isLineLoop){const x=io(this,e,Xr,l,_-1,d);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function io(n,e,t,i,r,s){const o=n.geometry.attributes.position;if(Ho.fromBufferAttribute(o,r),ko.fromBufferAttribute(o,s),t.distanceSqToSegment(Ho,ko,Qa,rh)>i)return;Qa.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Qa);if(!(l<e.near||l>e.far))return{distance:l,point:rh.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:n}}const sh=new D,oh=new D;class VE extends kE{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)sh.fromBufferAttribute(t,r),oh.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+sh.distanceTo(oh);e.setAttribute("lineDistance",new xt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class In{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],h=i[r+1]-u,d=(o-u)/h;return(r+d)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new ye:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new D,r=[],s=[],o=[],a=new D,l=new lt;for(let d=0;d<=e;d++){const _=d/e;r[d]=this.getTangentAt(_,new D)}s[0]=new D,o[0]=new D;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(vt(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,_))}o[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(vt(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],d*_)),o[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Jc extends In{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ye){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,d=c-this.aY;l=h*u-d*f+this.aX,c=h*f+d*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class GE extends Jc{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Qc(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,f){let h=(o-s)/c-(a-s)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+f)+(l-a)/f;h*=u,d*=u,r(o,a,h,d)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const ro=new D,el=new Qc,tl=new Qc,nl=new Qc;class WE extends In{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new D){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(ro.subVectors(r[0],r[1]).add(r[0]),c=ro);const f=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(ro.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=ro),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(u),d);x<1e-4&&(x=1),_<1e-4&&(_=x),m<1e-4&&(m=x),el.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,_,x,m),tl.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,_,x,m),nl.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,_,x,m)}else this.curveType==="catmullrom"&&(el.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),tl.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),nl.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return i.set(el.calc(l),tl.calc(l),nl.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new D().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function ah(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function XE(n,e){const t=1-n;return t*t*e}function qE(n,e){return 2*(1-n)*n*e}function YE(n,e){return n*n*e}function os(n,e,t,i){return XE(n,e)+qE(n,t)+YE(n,i)}function $E(n,e){const t=1-n;return t*t*t*e}function KE(n,e){const t=1-n;return 3*t*t*n*e}function jE(n,e){return 3*(1-n)*n*n*e}function ZE(n,e){return n*n*n*e}function as(n,e,t,i,r){return $E(n,e)+KE(n,t)+jE(n,i)+ZE(n,r)}class bp extends In{constructor(e=new ye,t=new ye,i=new ye,r=new ye){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new ye){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(as(e,r.x,s.x,o.x,a.x),as(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class JE extends In{constructor(e=new D,t=new D,i=new D,r=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new D){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(as(e,r.x,s.x,o.x,a.x),as(e,r.y,s.y,o.y,a.y),as(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Tp extends In{constructor(e=new ye,t=new ye){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ye){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ye){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class QE extends In{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ap extends In{constructor(e=new ye,t=new ye,i=new ye){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ye){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(os(e,r.x,s.x,o.x),os(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class eb extends In{constructor(e=new D,t=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new D){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(os(e,r.x,s.x,o.x),os(e,r.y,s.y,o.y),os(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class wp extends In{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ye){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(ah(a,l.x,c.x,u.x,f.x),ah(a,l.y,c.y,u.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new ye().fromArray(r))}return this}}var ac=Object.freeze({__proto__:null,ArcCurve:GE,CatmullRomCurve3:WE,CubicBezierCurve:bp,CubicBezierCurve3:JE,EllipseCurve:Jc,LineCurve:Tp,LineCurve3:QE,QuadraticBezierCurve:Ap,QuadraticBezierCurve3:eb,SplineCurve:wp});class tb extends In{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ac[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new ac[r.type]().fromJSON(r))}return this}}class lc extends tb{constructor(e){super(),this.type="Path",this.currentPoint=new ye,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Tp(this.currentPoint.clone(),new ye(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new Ap(this.currentPoint.clone(),new ye(e,t),new ye(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){const a=new bp(this.currentPoint.clone(),new ye(e,t),new ye(i,r),new ye(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new wp(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,r,s,o,a,l),this}absellipse(e,t,i,r,s,o,a,l){const c=new Jc(e,t,i,r,s,o,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Vo extends Qt{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],h=[],d=[];let _=0;const x=[],m=i/2;let p=0;A(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new xt(f,3)),this.setAttribute("normal",new xt(h,3)),this.setAttribute("uv",new xt(d,2));function A(){const E=new D,O=new D;let P=0;const R=(t-e)/i;for(let U=0;U<=s;U++){const re=[],S=U/s,b=S*(t-e)+e;for(let K=0;K<=r;K++){const q=K/r,J=q*l+a,se=Math.sin(J),W=Math.cos(J);O.x=b*se,O.y=-S*i+m,O.z=b*W,f.push(O.x,O.y,O.z),E.set(se,R,W).normalize(),h.push(E.x,E.y,E.z),d.push(q,1-S),re.push(_++)}x.push(re)}for(let U=0;U<r;U++)for(let re=0;re<s;re++){const S=x[re][U],b=x[re+1][U],K=x[re+1][U+1],q=x[re][U+1];e>0&&(u.push(S,b,q),P+=3),t>0&&(u.push(b,K,q),P+=3)}c.addGroup(p,P,0),p+=P}function y(E){const O=_,P=new ye,R=new D;let U=0;const re=E===!0?e:t,S=E===!0?1:-1;for(let K=1;K<=r;K++)f.push(0,m*S,0),h.push(0,S,0),d.push(.5,.5),_++;const b=_;for(let K=0;K<=r;K++){const J=K/r*l+a,se=Math.cos(J),W=Math.sin(J);R.x=re*W,R.y=m*S,R.z=re*se,f.push(R.x,R.y,R.z),h.push(0,S,0),P.x=se*.5+.5,P.y=W*.5*S+.5,d.push(P.x,P.y),_++}for(let K=0;K<r;K++){const q=O+K,J=b+K;E===!0?u.push(J,J+1,q):u.push(J+1,J,q),U+=3}c.addGroup(p,U,E===!0?1:2),p+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const so=new D,oo=new D,il=new D,ao=new rn;class nb extends Qt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(yr*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],f=new Array(3),h={},d=[];for(let _=0;_<l;_+=3){o?(c[0]=o.getX(_),c[1]=o.getX(_+1),c[2]=o.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:x,b:m,c:p}=ao;if(x.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),ao.getNormal(il),f[0]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,f[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,f[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let A=0;A<3;A++){const y=(A+1)%3,E=f[A],O=f[y],P=ao[u[A]],R=ao[u[y]],U=`${E}_${O}`,re=`${O}_${E}`;re in h&&h[re]?(il.dot(h[re].normal)<=s&&(d.push(P.x,P.y,P.z),d.push(R.x,R.y,R.z)),h[re]=null):U in h||(h[U]={index0:c[A],index1:c[y],normal:il.clone()})}}for(const _ in h)if(h[_]){const{index0:x,index1:m}=h[_];so.fromBufferAttribute(a,x),oo.fromBufferAttribute(a,m),d.push(so.x,so.y,so.z),d.push(oo.x,oo.y,oo.z)}this.setAttribute("position",new xt(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Ao extends lc{constructor(e){super(e),this.uuid=Pn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new lc().fromJSON(r))}return this}}const ib={triangulate:function(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=Rp(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,f,h,d;if(i&&(s=lb(n,e,s,t)),n.length>80*t){a=c=n[0],l=u=n[1];for(let _=t;_<r;_+=t)f=n[_],h=n[_+1],f<a&&(a=f),h<l&&(l=h),f>c&&(c=f),h>u&&(u=h);d=Math.max(c-a,u-l),d=d!==0?32767/d:0}return _s(s,o,t,a,l,d,0),o}};function Rp(n,e,t,i,r){let s,o;if(r===xb(n,e,t,i)>0)for(s=e;s<t;s+=i)o=lh(s,n[s],n[s+1],o);else for(s=t-i;s>=e;s-=i)o=lh(s,n[s],n[s+1],o);return o&&sa(o,o.next)&&(xs(o),o=o.next),o}function Xi(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(sa(t,t.next)||ct(t.prev,t,t.next)===0)){if(xs(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function _s(n,e,t,i,r,s,o){if(!n)return;!o&&s&&db(n,i,r,s);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,s?sb(n,i,r,s):rb(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),xs(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=ob(Xi(n),e,t),_s(n,e,t,i,r,s,2)):o===2&&ab(n,e,t,i,r,s):_s(Xi(n),e,t,i,r,s,1);break}}}function rb(n){const e=n.prev,t=n,i=n.next;if(ct(e,t,i)>=0)return!1;const r=e.x,s=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=r<s?r<o?r:o:s<o?s:o,f=a<l?a<c?a:c:l<c?l:c,h=r>s?r>o?r:o:s>o?s:o,d=a>l?a>c?a:c:l>c?l:c;let _=i.next;for(;_!==e;){if(_.x>=u&&_.x<=h&&_.y>=f&&_.y<=d&&mr(r,a,s,l,o,c,_.x,_.y)&&ct(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function sb(n,e,t,i){const r=n.prev,s=n,o=n.next;if(ct(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,f=s.y,h=o.y,d=a<l?a<c?a:c:l<c?l:c,_=u<f?u<h?u:h:f<h?f:h,x=a>l?a>c?a:c:l>c?l:c,m=u>f?u>h?u:h:f>h?f:h,p=cc(d,_,e,t,i),A=cc(x,m,e,t,i);let y=n.prevZ,E=n.nextZ;for(;y&&y.z>=p&&E&&E.z<=A;){if(y.x>=d&&y.x<=x&&y.y>=_&&y.y<=m&&y!==r&&y!==o&&mr(a,u,l,f,c,h,y.x,y.y)&&ct(y.prev,y,y.next)>=0||(y=y.prevZ,E.x>=d&&E.x<=x&&E.y>=_&&E.y<=m&&E!==r&&E!==o&&mr(a,u,l,f,c,h,E.x,E.y)&&ct(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;y&&y.z>=p;){if(y.x>=d&&y.x<=x&&y.y>=_&&y.y<=m&&y!==r&&y!==o&&mr(a,u,l,f,c,h,y.x,y.y)&&ct(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;E&&E.z<=A;){if(E.x>=d&&E.x<=x&&E.y>=_&&E.y<=m&&E!==r&&E!==o&&mr(a,u,l,f,c,h,E.x,E.y)&&ct(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function ob(n,e,t){let i=n;do{const r=i.prev,s=i.next.next;!sa(r,s)&&Cp(r,i,i.next,s)&&vs(r,s)&&vs(s,r)&&(e.push(r.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),xs(i),xs(i.next),i=n=s),i=i.next}while(i!==n);return Xi(i)}function ab(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&gb(o,a)){let l=Pp(o,a);o=Xi(o,o.next),l=Xi(l,l.next),_s(o,e,t,i,r,s,0),_s(l,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function lb(n,e,t,i){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:n.length,c=Rp(n,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(mb(c));for(r.sort(cb),s=0;s<r.length;s++)t=ub(r[s],t);return t}function cb(n,e){return n.x-e.x}function ub(n,e){const t=fb(n,e);if(!t)return e;const i=Pp(t,n);return Xi(i,i.next),Xi(t,t.next)}function fb(n,e){let t=e,i=-1/0,r;const s=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const h=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=s&&h>i&&(i=h,r=t.x<t.next.x?t:t.next,h===s))return r}t=t.next}while(t!==e);if(!r)return null;const a=r,l=r.x,c=r.y;let u=1/0,f;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&mr(o<c?s:i,o,l,c,o<c?i:s,o,t.x,t.y)&&(f=Math.abs(o-t.y)/(s-t.x),vs(t,n)&&(f<u||f===u&&(t.x>r.x||t.x===r.x&&hb(r,t)))&&(r=t,u=f)),t=t.next;while(t!==a);return r}function hb(n,e){return ct(n.prev,n,e.prev)<0&&ct(e.next,n,n.next)<0}function db(n,e,t,i){let r=n;do r.z===0&&(r.z=cc(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,pb(r)}function pb(n){let e,t,i,r,s,o,a,l,c=1;do{for(t=n,n=null,s=null,o=0;t;){for(o++,i=t,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;t=i}s.nextZ=null,c*=2}while(o>1);return n}function cc(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function mb(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function mr(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function gb(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!_b(n,e)&&(vs(n,e)&&vs(e,n)&&vb(n,e)&&(ct(n.prev,n,e.prev)||ct(n,e.prev,e))||sa(n,e)&&ct(n.prev,n,n.next)>0&&ct(e.prev,e,e.next)>0)}function ct(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function sa(n,e){return n.x===e.x&&n.y===e.y}function Cp(n,e,t,i){const r=co(ct(n,e,t)),s=co(ct(n,e,i)),o=co(ct(t,i,n)),a=co(ct(t,i,e));return!!(r!==s&&o!==a||r===0&&lo(n,t,e)||s===0&&lo(n,i,e)||o===0&&lo(t,n,i)||a===0&&lo(t,e,i))}function lo(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function co(n){return n>0?1:n<0?-1:0}function _b(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Cp(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function vs(n,e){return ct(n.prev,n,n.next)<0?ct(n,e,n.next)>=0&&ct(n,n.prev,e)>=0:ct(n,e,n.prev)<0||ct(n,n.next,e)<0}function vb(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Pp(n,e){const t=new uc(n.i,n.x,n.y),i=new uc(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function lh(n,e,t,i){const r=new uc(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function xs(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function uc(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function xb(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class Er{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return Er.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];ch(e),uh(i,e);let o=e.length;t.forEach(ch);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,uh(i,t[l]);const a=ib.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function ch(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function uh(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class eu extends Qt{constructor(e=new Ao([new ye(.5,.5),new ye(-.5,.5),new ye(-.5,-.5),new ye(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new xt(r,3)),this.setAttribute("uv",new xt(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:d-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,A=t.UVGenerator!==void 0?t.UVGenerator:Sb;let y,E=!1,O,P,R,U;p&&(y=p.getSpacedPoints(u),E=!0,h=!1,O=p.computeFrenetFrames(u,!1),P=new D,R=new D,U=new D),h||(m=0,d=0,_=0,x=0);const re=a.extractPoints(c);let S=re.shape;const b=re.holes;if(!Er.isClockWise(S)){S=S.reverse();for(let ee=0,g=b.length;ee<g;ee++){const w=b[ee];Er.isClockWise(w)&&(b[ee]=w.reverse())}}const q=Er.triangulateShape(S,b),J=S;for(let ee=0,g=b.length;ee<g;ee++){const w=b[ee];S=S.concat(w)}function se(ee,g,w){return g||console.error("THREE.ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector(g,w)}const W=S.length,Q=q.length;function X(ee,g,w){let L,N,I;const Y=ee.x-g.x,Z=ee.y-g.y,M=w.x-ee.x,v=w.y-ee.y,C=Y*Y+Z*Z,G=Y*v-Z*M;if(Math.abs(G)>Number.EPSILON){const H=Math.sqrt(C),V=Math.sqrt(M*M+v*v),le=g.x-Z/H,ae=g.y+Y/H,de=w.x-v/V,Re=w.y+M/V,ue=((de-le)*v-(Re-ae)*M)/(Y*v-Z*M);L=le+Y*ue-ee.x,N=ae+Z*ue-ee.y;const me=L*L+N*N;if(me<=2)return new ye(L,N);I=Math.sqrt(me/2)}else{let H=!1;Y>Number.EPSILON?M>Number.EPSILON&&(H=!0):Y<-Number.EPSILON?M<-Number.EPSILON&&(H=!0):Math.sign(Z)===Math.sign(v)&&(H=!0),H?(L=-Z,N=Y,I=Math.sqrt(C)):(L=Y,N=Z,I=Math.sqrt(C/2))}return new ye(L/I,N/I)}const ge=[];for(let ee=0,g=J.length,w=g-1,L=ee+1;ee<g;ee++,w++,L++)w===g&&(w=0),L===g&&(L=0),ge[ee]=X(J[ee],J[w],J[L]);const xe=[];let ve,Oe=ge.concat();for(let ee=0,g=b.length;ee<g;ee++){const w=b[ee];ve=[];for(let L=0,N=w.length,I=N-1,Y=L+1;L<N;L++,I++,Y++)I===N&&(I=0),Y===N&&(Y=0),ve[L]=X(w[L],w[I],w[Y]);xe.push(ve),Oe=Oe.concat(ve)}for(let ee=0;ee<m;ee++){const g=ee/m,w=d*Math.cos(g*Math.PI/2),L=_*Math.sin(g*Math.PI/2)+x;for(let N=0,I=J.length;N<I;N++){const Y=se(J[N],ge[N],L);F(Y.x,Y.y,-w)}for(let N=0,I=b.length;N<I;N++){const Y=b[N];ve=xe[N];for(let Z=0,M=Y.length;Z<M;Z++){const v=se(Y[Z],ve[Z],L);F(v.x,v.y,-w)}}}const Ge=_+x;for(let ee=0;ee<W;ee++){const g=h?se(S[ee],Oe[ee],Ge):S[ee];E?(R.copy(O.normals[0]).multiplyScalar(g.x),P.copy(O.binormals[0]).multiplyScalar(g.y),U.copy(y[0]).add(R).add(P),F(U.x,U.y,U.z)):F(g.x,g.y,0)}for(let ee=1;ee<=u;ee++)for(let g=0;g<W;g++){const w=h?se(S[g],Oe[g],Ge):S[g];E?(R.copy(O.normals[ee]).multiplyScalar(w.x),P.copy(O.binormals[ee]).multiplyScalar(w.y),U.copy(y[ee]).add(R).add(P),F(U.x,U.y,U.z)):F(w.x,w.y,f/u*ee)}for(let ee=m-1;ee>=0;ee--){const g=ee/m,w=d*Math.cos(g*Math.PI/2),L=_*Math.sin(g*Math.PI/2)+x;for(let N=0,I=J.length;N<I;N++){const Y=se(J[N],ge[N],L);F(Y.x,Y.y,f+w)}for(let N=0,I=b.length;N<I;N++){const Y=b[N];ve=xe[N];for(let Z=0,M=Y.length;Z<M;Z++){const v=se(Y[Z],ve[Z],L);E?F(v.x,v.y+y[u-1].y,y[u-1].x+w):F(v.x,v.y,f+w)}}}ne(),he();function ne(){const ee=r.length/3;if(h){let g=0,w=W*g;for(let L=0;L<Q;L++){const N=q[L];oe(N[2]+w,N[1]+w,N[0]+w)}g=u+m*2,w=W*g;for(let L=0;L<Q;L++){const N=q[L];oe(N[0]+w,N[1]+w,N[2]+w)}}else{for(let g=0;g<Q;g++){const w=q[g];oe(w[2],w[1],w[0])}for(let g=0;g<Q;g++){const w=q[g];oe(w[0]+W*u,w[1]+W*u,w[2]+W*u)}}i.addGroup(ee,r.length/3-ee,0)}function he(){const ee=r.length/3;let g=0;Se(J,g),g+=J.length;for(let w=0,L=b.length;w<L;w++){const N=b[w];Se(N,g),g+=N.length}i.addGroup(ee,r.length/3-ee,1)}function Se(ee,g){let w=ee.length;for(;--w>=0;){const L=w;let N=w-1;N<0&&(N=ee.length-1);for(let I=0,Y=u+m*2;I<Y;I++){const Z=W*I,M=W*(I+1),v=g+L+Z,C=g+N+Z,G=g+N+M,H=g+L+M;ie(v,C,G,H)}}}function F(ee,g,w){l.push(ee),l.push(g),l.push(w)}function oe(ee,g,w){fe(ee),fe(g),fe(w);const L=r.length/3,N=A.generateTopUV(i,r,L-3,L-2,L-1);Te(N[0]),Te(N[1]),Te(N[2])}function ie(ee,g,w,L){fe(ee),fe(g),fe(L),fe(g),fe(w),fe(L);const N=r.length/3,I=A.generateSideWallUV(i,r,N-6,N-3,N-2,N-1);Te(I[0]),Te(I[1]),Te(I[3]),Te(I[1]),Te(I[2]),Te(I[3])}function fe(ee){r.push(l[ee*3+0]),r.push(l[ee*3+1]),r.push(l[ee*3+2])}function Te(ee){s.push(ee.x),s.push(ee.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return yb(t,i,e)}static fromJSON(e,t){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new ac[r.type]().fromJSON(r)),new eu(i,e.options)}}const Sb={generateTopUV:function(n,e,t,i,r){const s=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new ye(s,o),new ye(a,l),new ye(c,u)]},generateSideWallUV:function(n,e,t,i,r,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],f=e[i*3+2],h=e[r*3],d=e[r*3+1],_=e[r*3+2],x=e[s*3],m=e[s*3+1],p=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new ye(o,1-l),new ye(c,1-f),new ye(h,1-_),new ye(x,1-p)]:[new ye(a,1-l),new ye(u,1-f),new ye(d,1-_),new ye(m,1-p)]}};function yb(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Mb extends Qt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],i=new Set,r=new D,s=new D;if(e.index!==null){const o=e.attributes.position,a=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const f=l[c],h=f.start,d=f.count;for(let _=h,x=h+d;_<x;_+=3)for(let m=0;m<3;m++){const p=a.getX(_+m),A=a.getX(_+(m+1)%3);r.fromBufferAttribute(o,p),s.fromBufferAttribute(o,A),fh(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{const o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const u=3*a+c,f=3*a+(c+1)%3;r.fromBufferAttribute(o,u),s.fromBufferAttribute(o,f),fh(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new xt(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function fh(n,e,t){const i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(r)===!0?!1:(t.add(i),t.add(r),!0)}const hh={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Eb{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],_=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null}}}const bb=new Eb;class tu{constructor(e){this.manager=e!==void 0?e:bb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}tu.DEFAULT_MATERIAL_NAME="__DEFAULT";const Vn={};class Tb extends Error{constructor(e,t){super(e),this.response=t}}class Ab extends tu{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=hh.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Vn[e]!==void 0){Vn[e].push({onLoad:t,onProgress:i,onError:r});return}Vn[e]=[],Vn[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Vn[e],f=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=h?parseInt(h):0,_=d!==0;let x=0;const m=new ReadableStream({start(p){A();function A(){f.read().then(({done:y,value:E})=>{if(y)p.close();else{x+=E.byteLength;const O=new ProgressEvent("progress",{lengthComputable:_,loaded:x,total:d});for(let P=0,R=u.length;P<R;P++){const U=u[P];U.onProgress&&U.onProgress(O)}p.enqueue(E),A()}},y=>{p.error(y)})}}});return new Response(m)}else throw new Tb(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return c.arrayBuffer().then(_=>d.decode(_))}}}).then(c=>{hh.add(e,c);const u=Vn[e];delete Vn[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Vn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Vn[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class wb extends Qt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Rb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=dh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=dh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function dh(){return performance.now()}class fc extends HE{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}const ph=new lt;class Cb{constructor(e,t,i=0,r=1/0){this.ray=new $c(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Kc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ph.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ph),this}intersectObject(e,t=!0,i=[]){return hc(e,this,i,t),i.sort(mh),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)hc(e[r],this,i,t);return i.sort(mh),i}}function mh(n,e){return n.distance-e.distance}function hc(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)hc(s[o],e,t,!0)}}const gh=new D,uo=new D;class Pb{constructor(e=new D,t=new D){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){gh.subVectors(e,this.start),uo.subVectors(this.end,this.start);const i=uo.dot(uo);let s=uo.dot(gh)/i;return t&&(s=vt(s,0,1)),s}closestPointToPoint(e,t,i){const r=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class Lb{constructor(){this.type="ShapePath",this.color=new $e,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new lc,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,r){return this.currentPath.quadraticCurveTo(e,t,i,r),this}bezierCurveTo(e,t,i,r,s,o){return this.currentPath.bezierCurveTo(e,t,i,r,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(p){const A=[];for(let y=0,E=p.length;y<E;y++){const O=p[y],P=new Ao;P.curves=O.curves,A.push(P)}return A}function i(p,A){const y=A.length;let E=!1;for(let O=y-1,P=0;P<y;O=P++){let R=A[O],U=A[P],re=U.x-R.x,S=U.y-R.y;if(Math.abs(S)>Number.EPSILON){if(S<0&&(R=A[P],re=-re,U=A[O],S=-S),p.y<R.y||p.y>U.y)continue;if(p.y===R.y){if(p.x===R.x)return!0}else{const b=S*(p.x-R.x)-re*(p.y-R.y);if(b===0)return!0;if(b<0)continue;E=!E}}else{if(p.y!==R.y)continue;if(U.x<=p.x&&p.x<=R.x||R.x<=p.x&&p.x<=U.x)return!0}}return E}const r=Er.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const c=[];if(s.length===1)return a=s[0],l=new Ao,l.curves=a.curves,c.push(l),c;let u=!r(s[0].getPoints());u=e?!u:u;const f=[],h=[];let d=[],_=0,x;h[_]=void 0,d[_]=[];for(let p=0,A=s.length;p<A;p++)a=s[p],x=a.getPoints(),o=r(x),o=e?!o:o,o?(!u&&h[_]&&_++,h[_]={s:new Ao,p:x},h[_].s.curves=a.curves,u&&_++,d[_]=[]):d[_].push({h:a,p:x[0]});if(!h[0])return t(s);if(h.length>1){let p=!1,A=0;for(let y=0,E=h.length;y<E;y++)f[y]=[];for(let y=0,E=h.length;y<E;y++){const O=d[y];for(let P=0;P<O.length;P++){const R=O[P];let U=!0;for(let re=0;re<h.length;re++)i(R.p,h[re].p)&&(y!==re&&A++,U?(U=!1,f[re].push(R)):p=!0);U&&f[y].push(R)}}A>0&&p===!1&&(d=f)}let m;for(let p=0,A=h.length;p<A;p++){l=h[p].s,c.push(l),m=d[p];for(let y=0,E=m.length;y<E;y++)l.holes.push(m[y].h)}return c}}class Db extends Yi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zc);const ur=new Dn(0,0,0,"YXZ"),fr=new D,Ib={type:"change"},Ub={type:"lock"},Nb={type:"unlock"},_h=Math.PI/2;class Ob extends Db{constructor(e,t=null){super(e,t),this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=Fb.bind(this),this._onPointerlockChange=Bb.bind(this),this._onPointerlockError=zb.bind(this),this.domElement!==null&&this.connect()}connect(){this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getObject(){return console.warn("THREE.PointerLockControls: getObject() has been deprecated. Use controls.object instead."),this.object}getDirection(e){return e.set(0,0,-1).applyQuaternion(this.object.quaternion)}moveForward(e){if(this.enabled===!1)return;const t=this.object;fr.setFromMatrixColumn(t.matrix,0),fr.crossVectors(t.up,fr),t.position.addScaledVector(fr,e)}moveRight(e){if(this.enabled===!1)return;const t=this.object;fr.setFromMatrixColumn(t.matrix,0),t.position.addScaledVector(fr,e)}lock(){this.domElement.requestPointerLock()}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function Fb(n){if(this.enabled===!1||this.isLocked===!1)return;const e=n.movementX||n.mozMovementX||n.webkitMovementX||0,t=n.movementY||n.mozMovementY||n.webkitMovementY||0,i=this.object;ur.setFromQuaternion(i.quaternion),ur.y-=e*.002*this.pointerSpeed,ur.x-=t*.002*this.pointerSpeed,ur.x=Math.max(_h-this.maxPolarAngle,Math.min(_h-this.minPolarAngle,ur.x)),i.quaternion.setFromEuler(ur),this.dispatchEvent(Ib)}function Bb(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(Ub),this.isLocked=!0):(this.dispatchEvent(Nb),this.isLocked=!1)}function zb(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}class Hb extends tu{constructor(e){super(e)}load(e,t,i,r){const s=this,o=new Ab(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){const l=s.parse(JSON.parse(a));t&&t(l)},i,r)}parse(e){return new kb(e)}}class kb{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const i=[],r=Vb(e,t,this.data);for(let s=0,o=r.length;s<o;s++)i.push(...r[s].toShapes());return i}}function Vb(n,e,t){const i=Array.from(n),r=e/t.resolution,s=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*r,o=[];let a=0,l=0;for(let c=0;c<i.length;c++){const u=i[c];if(u===`
`)a=0,l-=s;else{const f=Gb(u,r,a,l,t);a+=f.offsetX,o.push(f.path)}}return o}function Gb(n,e,t,i,r){const s=r.glyphs[n]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+n+'" does not exists in font family '+r.familyName+".");return}const o=new Lb;let a,l,c,u,f,h,d,_;if(s.o){const x=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let m=0,p=x.length;m<p;)switch(x[m++]){case"m":a=x[m++]*e+t,l=x[m++]*e+i,o.moveTo(a,l);break;case"l":a=x[m++]*e+t,l=x[m++]*e+i,o.lineTo(a,l);break;case"q":c=x[m++]*e+t,u=x[m++]*e+i,f=x[m++]*e+t,h=x[m++]*e+i,o.quadraticCurveTo(f,h,c,u);break;case"b":c=x[m++]*e+t,u=x[m++]*e+i,f=x[m++]*e+t,h=x[m++]*e+i,d=x[m++]*e+t,_=x[m++]*e+i,o.bezierCurveTo(f,h,d,_,c,u);break}}return{offsetX:s.ha*e,path:o}}class Wb extends eu{constructor(e,t={}){const i=t.font;if(i===void 0)super();else{const r=i.generateShapes(e,t.size);t.depth===void 0&&t.height!==void 0&&console.warn("THREE.TextGeometry: .height is now depreciated. Please use .depth instead"),t.depth=t.depth!==void 0?t.depth:t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(r,t)}this.type="TextGeometry"}}class Xb{constructor(e){this.scene=e}addCube(e,t,i,r,s,o=void 0){const a=new Nr(r,r,r),l=new zi({color:s}),c=new zt(a,l);c.position.set(e+r/2,t+r/2,i+r/2),o!==void 0&&(c.rotation.y=o),this.scene.add(c);const u=new nb(a),f=new Ep({color:0}),h=new VE(u,f);h.position.copy(c.position),o!==void 0&&h.rotation.copy(c.rotation),this.scene.add(h)}addPlane(){const e=new As(500,500),t=new zi({color:4298762,side:pn}),i=new zt(e,t);i.rotation.x=-Math.PI/2,this.scene.add(i)}createManyCubesInCircle(e,t,i,r,s,o){for(let a=0;a<e;a++){const l=a*r+t,c=s*Math.cos(l),u=s*Math.sin(l),f=a*o;this.addCube(c,f,u,4,i,l)}}build(){this.addCilinder(0,100,0,46,5,16777215),this.addHollowCilinder(0,254,0,53,200,16777215),this.addCube(0,0,0,2,6766855),this.addCube(4,0,0,4,6766855),this.addCube(-8,-2,0,4,6766855),this.addCube(-4,0,0,4,6766855),this.addCube(0,2,0,4,6766855),this.addCube(4,4,0,4,6766855),this.addCube(8,6,0,4,6766855),this.addCube(12,8,0,4,6766855),this.addCube(16,10,0,4,6766855),this.addCube(20,12,0,4,6766855),this.addCube(15,0,0,5,65280),this.addCube(0,0,15,5,16711680),this.addCube(-15,0,0,5,255),this.addCube(0,0,-15,5,14540253),this.addCube(0,0,-15,5,14540253),this.addPlane()}addCilinder(e,t,i,r,s,o){const a=new Vo(r,r,s,32),l=new zi({color:o,opacity:.5,transparent:!0}),c=new zt(a,l);c.position.set(e,t,i),this.scene.add(c)}addHollowCilinder(e,t,i,r,s,o){const a=new Vo(s,r,1,32,32,!0),l=new zi({color:o,opacity:.5,transparent:!0,side:pn}),c=new zt(a,l);c.position.set(e,t,i),this.scene.add(c)}}class qb{constructor(e,t,i,r,s){wt(this,"moveForward",!1);wt(this,"moveLeft",!1);wt(this,"moveRight",!1);wt(this,"moveBackward",!1);wt(this,"canJump",!0);wt(this,"velocity",new D);wt(this,"direction",new D);this.controls=i,this.htmlElement=e,this.clock=r,this.scene=t,this.speed=3,this.mass=100,this.horizontalDeceleration=10,this.verticalDeceleration=2.5,this.jumpVelociy=70,this.elevation=s,this.connect(),this.raycaster=new Cb(new D,new D(0,-1,0),0,100)}connect(){document.addEventListener("keydown",this.onKeyDown.bind(this)),document.addEventListener("keyup",this.onKeyUp.bind(this))}updatePosition(){const e=this.clock.getDelta(),t=this.controls.getObject().position.clone();t.y-=this.elevation,this.raycaster.ray.origin.copy(t);const i=this.raycaster.intersectObjects(this.scene.children,!1);let r=100;i.forEach(function(a){a.distance<r&&(r=a.distance)});const s=i.length>0&&r<=1;this.velocity.x-=this.velocity.x*this.horizontalDeceleration*e,this.velocity.z-=this.velocity.z*this.horizontalDeceleration*e,this.velocity.y-=this.verticalDeceleration*this.mass*e,this.direction.z=Number(this.moveForward)-Number(this.moveBackward),this.direction.x=Number(this.moveRight)-Number(this.moveLeft),this.direction.normalize(),(this.moveForward||this.moveBackward)&&(this.velocity.z-=this.direction.z*this.speed*e),(this.moveLeft||this.moveRight)&&(this.velocity.x-=this.direction.x*this.speed*e),s===!0&&(this.velocity.y=Math.max(0,this.velocity.y),this.canJump=!0),this.controls.moveRight(-this.velocity.x),this.controls.moveForward(-this.velocity.z);const o=this.velocity.y*e;this.controls.object.position.y+=o>0?o:Math.max(o,-r),this.controls.object.position.y<this.elevation&&(this.velocity.y=0,this.controls.object.position.y=this.elevation,this.canJump=!0)}onKeyDown(e){switch(console.log("key down"),e.code){case"ArrowUp":case"KeyW":this.moveForward=!0;break;case"ArrowLeft":case"KeyA":this.moveLeft=!0;break;case"ArrowDown":case"KeyS":this.moveBackward=!0;break;case"ArrowRight":case"KeyD":this.moveRight=!0;break;case"Space":this.canJump===!0&&(this.velocity.y+=this.jumpVelociy),this.canJump=!1;break}}onKeyUp(e){switch(console.log("key up"),e.code){case"ArrowUp":case"KeyW":this.moveForward=!1;break;case"ArrowLeft":case"KeyA":this.moveLeft=!1;break;case"ArrowDown":case"KeyS":this.moveBackward=!1;break;case"ArrowRight":case"KeyD":this.moveRight=!1;break}}}class Yb{constructor(e,t,i,r,s,o,a){wt(this,"oldPosition",null);this.camera=t,this.scene=i,this.clock=r,this.controls=o,this.height=a,this.movementControls=new qb(e,i,o,r,a)}initPosition(){this.camera.position.set(52,257,2),this.camera.lookAt(0,257,0)}updatePosition(){this.movementControls.updatePosition(),this.checkCollisions()}checkCollisions(){}}const vh=new yi,fo=new D;class Lp extends wb{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new xt(e,3)),this.setAttribute("uv",new xt(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new fc(t,6,1);return this.setAttribute("instanceStart",new hi(i,3,0)),this.setAttribute("instanceEnd",new hi(i,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new fc(t,6,1);return this.setAttribute("instanceColorStart",new hi(i,3,0)),this.setAttribute("instanceColorEnd",new hi(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new Mb(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yi);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),vh.setFromBufferAttribute(t),this.boundingBox.union(vh))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ur),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const i=this.boundingSphere.center;this.boundingBox.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)fo.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(fo)),fo.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(fo));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}_e.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new ye(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Vt.line={uniforms:jc.merge([_e.common,_e.fog,_e.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class nu extends jn{constructor(e){super({type:"LineMaterial",uniforms:jc.clone(Vt.line.uniforms),vertexShader:Vt.line.vertexShader,fragmentShader:Vt.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const rl=new st,xh=new D,Sh=new D,Mt=new st,Et=new st,En=new st,sl=new D,ol=new lt,bt=new Pb,yh=new D,ho=new yi,po=new Ur,bn=new st;let Rn,ki;function Mh(n,e,t){return bn.set(0,0,-e,1).applyMatrix4(n.projectionMatrix),bn.multiplyScalar(1/bn.w),bn.x=ki/t.width,bn.y=ki/t.height,bn.applyMatrix4(n.projectionMatrixInverse),bn.multiplyScalar(1/bn.w),Math.abs(Math.max(bn.x,bn.y))}function $b(n,e){const t=n.matrixWorld,i=n.geometry,r=i.attributes.instanceStart,s=i.attributes.instanceEnd,o=Math.min(i.instanceCount,r.count);for(let a=0,l=o;a<l;a++){bt.start.fromBufferAttribute(r,a),bt.end.fromBufferAttribute(s,a),bt.applyMatrix4(t);const c=new D,u=new D;Rn.distanceSqToSegment(bt.start,bt.end,u,c),u.distanceTo(c)<ki*.5&&e.push({point:u,pointOnLine:c,distance:Rn.origin.distanceTo(u),object:n,face:null,faceIndex:a,uv:null,uv1:null})}}function Kb(n,e,t){const i=e.projectionMatrix,s=n.material.resolution,o=n.matrixWorld,a=n.geometry,l=a.attributes.instanceStart,c=a.attributes.instanceEnd,u=Math.min(a.instanceCount,l.count),f=-e.near;Rn.at(1,En),En.w=1,En.applyMatrix4(e.matrixWorldInverse),En.applyMatrix4(i),En.multiplyScalar(1/En.w),En.x*=s.x/2,En.y*=s.y/2,En.z=0,sl.copy(En),ol.multiplyMatrices(e.matrixWorldInverse,o);for(let h=0,d=u;h<d;h++){if(Mt.fromBufferAttribute(l,h),Et.fromBufferAttribute(c,h),Mt.w=1,Et.w=1,Mt.applyMatrix4(ol),Et.applyMatrix4(ol),Mt.z>f&&Et.z>f)continue;if(Mt.z>f){const y=Mt.z-Et.z,E=(Mt.z-f)/y;Mt.lerp(Et,E)}else if(Et.z>f){const y=Et.z-Mt.z,E=(Et.z-f)/y;Et.lerp(Mt,E)}Mt.applyMatrix4(i),Et.applyMatrix4(i),Mt.multiplyScalar(1/Mt.w),Et.multiplyScalar(1/Et.w),Mt.x*=s.x/2,Mt.y*=s.y/2,Et.x*=s.x/2,Et.y*=s.y/2,bt.start.copy(Mt),bt.start.z=0,bt.end.copy(Et),bt.end.z=0;const x=bt.closestPointToPointParameter(sl,!0);bt.at(x,yh);const m=b0.lerp(Mt.z,Et.z,x),p=m>=-1&&m<=1,A=sl.distanceTo(yh)<ki*.5;if(p&&A){bt.start.fromBufferAttribute(l,h),bt.end.fromBufferAttribute(c,h),bt.start.applyMatrix4(o),bt.end.applyMatrix4(o);const y=new D,E=new D;Rn.distanceSqToSegment(bt.start,bt.end,E,y),t.push({point:E,pointOnLine:y,distance:Rn.origin.distanceTo(E),object:n,face:null,faceIndex:h,uv:null,uv1:null})}}}class jb extends zt{constructor(e=new Lp,t=new nu({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let o=0,a=0,l=t.count;o<l;o++,a+=2)xh.fromBufferAttribute(t,o),Sh.fromBufferAttribute(i,o),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+xh.distanceTo(Sh);const s=new fc(r,2,1);return e.setAttribute("instanceDistanceStart",new hi(s,1,0)),e.setAttribute("instanceDistanceEnd",new hi(s,1,1)),this}raycast(e,t){const i=this.material.worldUnits,r=e.camera;r===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;Rn=e.ray;const o=this.matrixWorld,a=this.geometry,l=this.material;ki=l.linewidth+s,a.boundingSphere===null&&a.computeBoundingSphere(),po.copy(a.boundingSphere).applyMatrix4(o);let c;if(i)c=ki*.5;else{const f=Math.max(r.near,po.distanceToPoint(Rn.origin));c=Mh(r,f,l.resolution)}if(po.radius+=c,Rn.intersectsSphere(po)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),ho.copy(a.boundingBox).applyMatrix4(o);let u;if(i)u=ki*.5;else{const f=Math.max(r.near,ho.distanceToPoint(Rn.origin));u=Mh(r,f,l.resolution)}ho.expandByScalar(u),Rn.intersectsBox(ho)!==!1&&(i?$b(this,t):Kb(this,r,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(rl),this.material.uniforms.resolution.value.set(rl.z,rl.w))}}class Dp extends Lp{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,i=new Float32Array(2*t);for(let r=0;r<t;r+=3)i[2*r]=e[r],i[2*r+1]=e[r+1],i[2*r+2]=e[r+2],i[2*r+3]=e[r+3],i[2*r+4]=e[r+4],i[2*r+5]=e[r+5];return super.setPositions(i),this}setColors(e){const t=e.length-3,i=new Float32Array(2*t);for(let r=0;r<t;r+=3)i[2*r]=e[r],i[2*r+1]=e[r+1],i[2*r+2]=e[r+2],i[2*r+3]=e[r+3],i[2*r+4]=e[r+4],i[2*r+5]=e[r+5];return super.setColors(i),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class Zb extends jb{constructor(e=new Dp,t=new nu({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}}const Jb=new Hb;let dc=null;Jb.load("https://unpkg.com/three@0.77.0/examples/fonts/helvetiker_bold.typeface.json",function(n){dc=n,console.log("Font loaded")});let Eh=0;class Qb{constructor(){wt(this,"width",null);wt(this,"height",null);wt(this,"htmlElement",null);wt(this,"renderer",null);wt(this,"clock",null);wt(this,"camera",null);wt(this,"scene",null);console.debug("game creating"),this.clock=new Rb,this.renderer=new BE,this.scene=new zE,this.scene.background=new $e(8900331),console.debug("game created")}init(e,t,i){console.debug("game initializing"),this.width=t,this.height=i,this.htmlElement=e,this.camera=new nn(75,this.width/this.height,.1,1e3),this.renderer.setSize(this.width,this.height),this.htmlElement.appendChild(this.renderer.domElement),this.renderer.setAnimationLoop(this.animate.bind(this)),this.controls=new Ob(this.camera,this.htmlElement),this.environment=new Xb(this.scene),this.environment.build(),this.character=new Yb(this.htmlElement,this.camera,this.scene,this.clock,this.renderer,this.controls,1.8),this.character.initPosition(),console.debug("game initialized")}animate(){this.controls.isLocked===!0&&this.character.updatePosition(),this.renderer.render(this.scene,this.camera)}isReady(){return this.renderer!==null}processTextInput(e){if(!this.controls.isLocked){console.log("Ignoring text input, user is not in the game");return}console.log("Processing Text:",e);const t=new Wb(e,{font:dc,size:1,height:.1,curveSegments:12,bevelEnabled:!1,bevelThickness:.01,bevelSize:.01,bevelOffset:0,bevelSegments:5}),i=new zi({color:1599914}),r=new zt(t,i);r.position.set(42+Eh,2,2),r.rotation.z=Math.PI,r.rotation.y=Math.PI/2,r.rotation.x=Math.PI,this.scene.add(r),console.log("Text processed:",e),Eh++;const s=new $r;s.position.copy(r.position.clone()),s.position.x+=.1001,s.rotation.copy(r.rotation.clone());const o=new nu({color:0,lineWidth:.1});dc.generateShapes(e,1).forEach(l=>{let c=l.getPoints(),u=[];c.forEach(d=>{u.push(d.x,d.y,0)});const f=new Dp;f.setPositions(u);const h=new Zb(f,o);h.computeLineDistances(),s.add(h)}),this.scene.add(s)}focus(){this.controls.lock()}}const eT=["open"],tT={class:"instructions"},nT=ys({__name:"GameView",setup(n){const e=new Qb,t=Um("gameScreen"),i=wo("gameMenu"),r=wo(!0),s=new(window.SpeechRecognition||window.webkitSpeechRecognition||window.mozSpeechRecognition||window.msSpeechRecognition);s.lang="en-US",s.continuous=!0,s.interimResults=!1;const o=()=>{document.pointerLockElement?r.value=!1:r.value=!0};return rd(()=>{s.start(),s.onresult=a=>{if(!a.results[a.results.length-1].isFinal){console.debug("Transcript has not yet processed");return}const l=a.results[a.results.length-1][0].transcript;if(!l){console.debug("Transcript is empty!");return}e.processTextInput(l)}}),od(()=>{s.stop(),document.removeEventListener("pointerlockchange",o)}),sd(()=>{const a=t.value,l=a.getBoundingClientRect();if(e.init(a,l.width,l.height),e.isReady()){const c=document.getElementById("game-screen-fallback");c&&(c.style.display="none")}document.addEventListener("pointerlockchange",o)}),(a,l)=>{const c=ld("RouterLink");return Qo(),Uc(hn,null,[Pt("dialog",{ref_key:"gameMenu",ref:i,class:"game-menu",open:r.value,onClick:l[1]||(l[1]=u=>di(e).focus())},[Pt("div",tT,[l[3]||(l[3]=Pt("p",{style:{"font-size":"36px"}}," Click to play ",-1)),l[4]||(l[4]=Pt("p",null,[Oi(" Move: WASD"),Pt("br"),Oi(" Jump: SPACE"),Pt("br"),Oi(" Look: MOUSE ")],-1)),Lt(c,{to:"/",class:"quit-link",onClick:l[0]||(l[0]=u=>u.stopPropagation())},{default:Lo(()=>l[2]||(l[2]=[Oi("Quit")])),_:1})])],8,eT),Pt("main",{class:"game-screen",ref_key:"gameScreen",ref:t},null,512),l[5]||(l[5]=Pt("div",{class:"game-screen-fallback",id:"game-screen-fallback"},[Pt("h1",{class:"backup-text"}," This is the game! "),Pt("p",{class:"backup-text"}," If you see this screen, the game is either loading or you are one of the unlucky ones and should contact support ")],-1))],64)}}}),iT=qd(nT,[["__scopeId","data-v-3fee4b00"]]),rT=uv({history:k_("/"),routes:[{path:"/",name:"home",component:xv},{path:"/game",name:"game",component:()=>iT}]}),iu=s_(hv);iu.use(u_());iu.use(rT);iu.mount("#app");
