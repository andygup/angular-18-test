import{K as O,L as N,M as E,P as J,h as v,j as u,k as c,l as p,m as y}from"./chunk-RMOOROEO.js";import{S as h,b as g}from"./chunk-ZP7G4HN4.js";import{a as l}from"./chunk-W3WDPWBE.js";import{b as S}from"./chunk-3DV77WOO.js";var f=class a{constructor(){this._propertyOriginMap=new Map,this._originStores=new Array(c),this._values=new Map,this.multipleOriginsSupported=!0}clone(r){let t=new a,i=this._originStores[u.DEFAULTS];i&&i.forEach((e,s)=>{t.set(s,S(e),u.DEFAULTS)});for(let e=u.SERVICE;e<c;e++){let s=this._originStores[e];s&&s.forEach((o,n)=>{r&&r.has(n)||t.set(n,S(o),e)})}return t}get(r,t){let i=t===void 0?this._values:this._originStores[t];return i?i.get(r):void 0}keys(r){let t=r==null?this._values:this._originStores[r];return t?[...t.keys()]:[]}set(r,t,i=u.USER){let e=this._originStores[i];if(e||(e=new Map,this._originStores[i]=e),e.set(r,t),!this._values.has(r)||this._propertyOriginMap.get(r)<=i){let s=this._values.get(r);return this._values.set(r,t),this._propertyOriginMap.set(r,i),s!==t}return!1}delete(r,t=u.USER){let i=this._originStores[t];if(!i)return;let e=i.get(r);if(i.delete(r),this._values.has(r)&&this._propertyOriginMap.get(r)===t){this._values.delete(r);for(let s=t-1;s>=0;s--){let o=this._originStores[s];if(o&&o.has(r)){this._values.set(r,o.get(r)),this._propertyOriginMap.set(r,s);break}}}return e}has(r,t){let i=t===void 0?this._values:this._originStores[t];return!!i&&i.has(r)}revert(r,t){for(;t>0&&!this.has(r,t);)--t;let i=this._originStores[t],e=i?.get(r),s=this._values.get(r);return this._values.set(r,e),this._propertyOriginMap.set(r,t),s!==e}originOf(r){return this._propertyOriginMap.get(r)||u.DEFAULTS}forEach(r){this._values.forEach(r)}};var _=a=>{let r=class extends a{constructor(...t){super(...t);let i=g(this),e=i.store,s=new f;i.store=s,N(i,e,s)}read(t,i){E(this,t,i)}getAtOrigin(t,i){let e=d(this),s=p(i);if(typeof t=="string")return e.get(t,s);let o={};return t.forEach(n=>{o[n]=e.get(n,s)}),o}originOf(t){return y(this.originIdOf(t))}originIdOf(t){return d(this).originOf(t)}revert(t,i){let e=d(this),s=p(i),o=g(this),n;n=typeof t=="string"?t==="*"?e.keys(s):[t]:t,n.forEach(m=>{o.invalidate(m),e.revert(m,s),o.commit(m)})}};return r=l([h("esri.core.ReadOnlyMultiOriginJSONSupport")],r),r};function d(a){return g(a).store}var x=class extends _(O){};x=l([h("esri.core.ReadOnlyMultiOriginJSONSupport")],x);var I=a=>{let r=class extends a{constructor(...t){super(...t)}clear(t,i="user"){return M(this).delete(t,p(i))}write(t,i){return J(this,t=t||{},i),t}setAtOrigin(t,i,e){g(this).setAtOrigin(t,i,p(e))}removeOrigin(t){let i=M(this),e=p(t),s=i.keys(e);for(let o of s)i.originOf(o)===e&&i.set(o,i.get(o,e),u.USER)}updateOrigin(t,i){let e=M(this),s=p(i),o=v(this,t);for(let n=s+1;n<c;++n)e.delete(t,n);e.set(t,o,s)}toJSON(t){return this.write({},t)}};return r=l([h("esri.core.MultiOriginJSONSupport.WriteableMultiOriginJSONSupport")],r),r.prototype.toJSON.isDefaultToJSON=!0,r};function M(a){return g(a).store}var R=a=>{let r=class extends I(_(a)){constructor(...t){super(...t)}};return r=l([h("esri.core.MultiOriginJSONSupport")],r),r},w=class extends R(O){};w=l([h("esri.core.MultiOriginJSONSupport")],w);export{R as a,w as b};