import{b as e}from"./chunk-RZA5H63B.js";import{b as c,c as f}from"./chunk-KVCIO4DX.js";import{a as u}from"./chunk-FKQYBEPG.js";import{g as n}from"./chunk-3T7TAUC2.js";function w(o,t){return n(this,null,function*(){return yield o.load(),m(o,t)})}function m(o,t){return n(this,null,function*(){let s=[],i=(...a)=>{for(let l of a)l!=null&&(Array.isArray(l)?i(...l):e.isCollection(l)?l.forEach(d=>i(d)):u.isLoadable(l)&&s.push(l))};t(i);let r=null;if(yield c(s,a=>n(this,null,function*(){let l=yield f(p(a)?a.loadAll():a.load());l.ok!==!1||r||(r=l)})),r)throw r.error;return o})}function p(o){return"loadAll"in o&&typeof o.loadAll=="function"}export{w as a,m as b};
