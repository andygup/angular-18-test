import{d as P}from"./chunk-MLSR6YE6.js";import{u as g}from"./chunk-3DV77WOO.js";import{a as A,b as T,g as u}from"./chunk-3T7TAUC2.js";var x={remove:()=>{}};function l(e){return e?{remove(){e&&(e(),e=void 0)}}:x}function C(e){e.forEach(t=>t?.remove())}function N(e){return l(()=>C(e))}function I(e){return{setTimeout:(t,r)=>{let n=e.setTimeout(t,r);return l(()=>e.clearTimeout(n))}}}var j=I(globalThis);function L(e){return $(e)||k(e)}function $(e){return e!=null&&typeof e=="object"&&"on"in e&&typeof e.on=="function"}function k(e){return e!=null&&typeof e=="object"&&"addEventListener"in e&&typeof e.addEventListener=="function"}function D(e,t,r){if(!L(e))throw new TypeError("target is not a Evented or EventTarget object");return k(e)?V(e,t,r):e.on(t,r)}function V(e,t,r,n){if(Array.isArray(t)){let o=t.slice();for(let i of o)e.addEventListener(i,r,n);return l(()=>{for(let i of o)e.removeEventListener(i,r,n)})}return e.addEventListener(t,r,n),l(()=>e.removeEventListener(t,r,n))}function p(e,t,r){if(!L(e))throw new TypeError("target is not a Evented or EventTarget object");if("once"in e)return e.once(t,r);let n=D(e,t,o=>{n.remove(),r.call(e,o)});return n}function c(e="Aborted"){return new g("AbortError",e)}function O(e,t="Aborted"){if(W(e))throw c(t)}function d(e){return e instanceof AbortSignal?e:e?.signal}function W(e){let t=d(e);return t!=null&&t.aborted}function _(e){if(h(e))throw e}function ee(e){if(!h(e))throw e}function m(e,t){let r=d(e);if(r!=null){if(!r.aborted)return p(r,"abort",()=>t());t()}}function te(e,t){let r=d(e);if(r!=null)return O(r),p(r,"abort",()=>t(c()))}function re(e,t){return d(t)==null?e:new Promise((r,n)=>{let o=m(t,()=>n(c())),i=()=>{o=P(o)};e.then(i,i),e.then(r,n)})}function h(e){return e?.name==="AbortError"}function ne(e){return u(this,null,function*(){try{return yield e}catch(t){if(!h(t))throw t;return}})}function F(e){return u(this,null,function*(){if(!e)return;if(typeof e.forEach!="function"){let r=Object.keys(e),n=r.map(a=>e[a]),o=yield F(n),i={};return r.map((a,f)=>i[a]=o[f]),i}let t=e;return Promise.allSettled(t).then(r=>Array.from(t,(n,o)=>{let i=r[o];return i.status==="fulfilled"?{promise:n,value:i.value}:{promise:n,error:i.reason}}))})}function oe(e){return u(this,null,function*(){return(yield Promise.allSettled(e)).filter(t=>t.status==="fulfilled").map(t=>t.value)})}function ie(e){return u(this,null,function*(){return(yield Promise.allSettled(e)).filter(t=>t.status==="rejected").map(t=>t.reason)})}function G(e,t=void 0,r){let n=new AbortController;return m(r,()=>n.abort()),new Promise((o,i)=>{let a=setTimeout(()=>{a=0,o(t)},e);m(n,()=>{a&&(clearTimeout(a),i(c()))})})}function ae(e,t){let r=new AbortController,n=setTimeout(()=>r.abort(),t);return m(e,()=>{r.abort(),clearTimeout(n)}),T(A({},e),{signal:r.signal})}function M(e){return e&&typeof e.then=="function"}function S(e){return M(e)?e:Promise.resolve(e)}function se(e,t=-1){let r,n,o,i,a=null,f=(...b)=>{if(r){n=b,i&&i.reject(c()),i=H();let s=i.promise;if(a){let v=a;a=null,v.abort()}return s}if(o=i||H(),i=null,t>0){let s=new AbortController;r=S(e(...b,s.signal));let v=r;G(t).then(()=>{r===v&&(i?s.abort():a=s)})}else r=1,r=S(e(...b));let y=()=>{let s=n;n=o=r=a=null,s!=null&&f(...s)},E=r,w=o;return E.then(y,y),E.then(w.resolve,w.reject),w.promise};return f}function H(){let e,t,r=new Promise((o,i)=>{e=o,t=i}),n=o=>{e(o)};return n.resolve=o=>e(o),n.reject=o=>t(o),n.timeout=(o,i)=>j.setTimeout(()=>n.reject(i),o),n.promise=r,n}function ue(e){return u(this,null,function*(){yield Promise.resolve(),O(e)})}export{l as a,N as b,j as c,L as d,D as e,p as f,c as g,O as h,d as i,W as j,_ as k,ee as l,m,te as n,re as o,h as p,ne as q,F as r,oe as s,ie as t,G as u,ae as v,M as w,S as x,se as y,H as z,ue as A};
