import{$ as F,Ga as T,Ha as z,R as c,S as f,V as m,W as g,X as J,Z as d,_ as h,a as S,aa as N,b as u,ba as D,c as l,ca as x,da as L,ea as j,fa as b,ga as E,ha as I,oa as P,qa as C,ra as V,sa as q,ta as M}from"./chunk-6KEVGVAJ.js";import{a as k}from"./chunk-OCNYIIP3.js";import{a as o}from"./chunk-MYC65FI6.js";import{a as A}from"./chunk-UHTPPTOJ.js";import{g as w}from"./chunk-3T7TAUC2.js";function K(t){B=t}var B;function y(t){return t===null?null:b(t)?t.clone():f(t)?t:d(t)?t.clone():j(t)?t.toArray().map(s=>y(s)):h(t)?t.map(s=>y(s)):F(t)?B.createFromArcadeFeature(t):x(t)||N(t)?t:D(t)||t?.declaredClass==="esri.arcade.Attachment"?t.deepClone():(t?.declaredClass==="esri.arcade.Portal"||L(t)||t instanceof S||c(t),t)}function p(t,s,e=!1,n=!1){if(t==null)return null;if(J(t))return V(t);if(g(t))return M(t);if(m(t))return P(t);if(b(t))return q(t,s);if(E(t)||I(t))return t;if(h(t)){let i=[];for(let a of t)i.push(p(a,s,e,n));return i}if(n&&d(t))return t;let r=new v;r.immutable=!1;for(let i of Object.keys(t)){let a=t[i];a!==void 0&&r.setField(i,p(a,s,e,n))}return r.immutable=e,r}var v=class t{constructor(s){this.declaredClass="esri.arcade.Dictionary",this.attributes=null,this.plain=!1,this.immutable=!0,this.attributes=s instanceof t?s.attributes:s??{}}field(s){let e=s.toLowerCase(),n=this.attributes[s];if(n!==void 0)return n;for(let r in this.attributes)if(r.toLowerCase()===e)return this.attributes[r];throw new l(null,u.FieldNotFound,null,{key:s})}setField(s,e){if(this.immutable)throw new l(null,u.Immutable,null);if(c(e))throw new l(null,u.NoFunctionInDictionary,null);let n=s.toLowerCase();if(e instanceof Date&&(e=o.dateJSToArcadeDate(e)),this.attributes[s]===void 0){for(let r in this.attributes)if(r.toLowerCase()===n)return void(this.attributes[r]=e);this.attributes[s]=e}else this.attributes[s]=e}hasField(s){let e=s.toLowerCase();if(this.attributes[s]!==void 0)return!0;for(let n in this.attributes)if(n.toLowerCase()===e)return!0;return!1}keys(){let s=[];for(let e in this.attributes)s.push(e);return s=s.sort(),s}castToText(s=!1){let e="";for(let n in this.attributes){e!==""&&(e+=",");let r=this.attributes[n];r==null?e+=JSON.stringify(n)+":null":g(r)||J(r)||m(r)?e+=JSON.stringify(n)+":"+JSON.stringify(r):r instanceof A?e+=JSON.stringify(n)+":"+C(r):r instanceof k||Array.isArray(r)?e+=JSON.stringify(n)+":"+C(r,null,s):r instanceof o?e+=s?JSON.stringify(n)+":"+JSON.stringify(r.getTime()):JSON.stringify(n)+":"+r.stringify():r!==null&&typeof r=="object"&&r.castToText!==void 0&&(e+=JSON.stringify(n)+":"+r.castToText(s))}return"{"+e+"}"}static convertObjectToArcadeDictionary(s,e,n=!0,r=!1){let i=new t;i.immutable=!1;for(let a in s){let O=s[a];O!==void 0&&i.setField(a.toString(),p(O,e,n,r))}return i.immutable=n,i}static convertJsonToArcade(s,e,n=!1,r=!1){return p(s,e,n,r)}castAsJson(s=null){let e={};for(let n in this.attributes){let r=this.attributes[n];r!==void 0&&(s?.keyTranslate&&(n=s.keyTranslate(n)),e[n]=T(r,s))}return e}castDictionaryValueAsJsonAsync(s,e,n,r=null,i){return w(this,null,function*(){let a=yield z(n,r,i);return s[e]=a,a})}castAsJsonAsync(s=null,e=null){return w(this,null,function*(){let n={},r=[];for(let i in this.attributes){let a=this.attributes[i];e?.keyTranslate&&(i=e.keyTranslate(i)),a!==void 0&&(f(a)||a instanceof A||a instanceof o?n[i]=T(a,e):r.push(this.castDictionaryValueAsJsonAsync(n,i,a,s,e)))}return r.length>0&&(yield Promise.all(r)),n})}deepClone(){let s=new t;s.immutable=!1;for(let e of this.keys())s.setField(e,y(this.field(e)));return s}};export{K as a,y as b,v as c};