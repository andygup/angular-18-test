"use strict";(self.webpackChunkangular_18_test=self.webpackChunkangular_18_test||[]).push([[5020],{75020:(L,h,e)=>{e.r(h),e.d(h,{clearBoundingBoxCache:()=>P,computeIconLayerResourceSize:()=>D,computeObjectLayerResourceSize:()=>M});var c=e(10467),y=e(89563),o=e(5922),E=e(33087),f=e(25866),i=e(2296),g=e(64439);let l=m();function m(){return new E.q(50)}function P(){l=m()}function D(t,n){return u.apply(this,arguments)}function u(){return(u=(0,c.A)(function*(t,n){if(t.resource?.href)return function O(t){return(0,y.A)(t,{responseType:"image"}).then(n=>n.data)}(t.resource.href).then(s=>[s.width,s.height]);if(t.resource?.primitive)return null!=n?[n,n]:[256,256];throw new o.A("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")})).apply(this,arguments)}function M(t){return a.apply(this,arguments)}function a(){return(a=(0,c.A)(function*(t,n=null){if(!t.isPrimitive){const r=t.resource?.href;if(!r)throw new o.A("symbol:invalid-resource","The symbol does not have a valid resource");const v=l.get(r);if(void 0!==v)return v;const{fetch:A}=yield Promise.all([e.e(6136),e.e(5434),e.e(3647),e.e(143),e.e(9641),e.e(109),e.e(2076),e.e(8908)]).then(e.bind(e,38908)),B=yield A(r,{disableTextures:!0}),d=(0,i.Ej)(B.referenceBoundingBox,(0,f.vt)());return l.put(r,d),d}if(!t.resource?.primitive)throw new o.A("symbol:invalid-resource","The symbol does not have a valid resource");const s=(0,i.vt)((0,g.Fq)(t.resource.primitive));if(null!=n)for(let r=0;r<s.length;r++)s[r]*=n;return(0,i.Ej)(s,(0,f.vt)())})).apply(this,arguments)}}}]);