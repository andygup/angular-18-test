"use strict";(self.webpackChunkangular_18_test=self.webpackChunkangular_18_test||[]).push([[568],{80568:(m,_,r)=>{r.r(_),r.d(_,{destroyWasm:()=>b,initialize:()=>c,process:()=>y});var g=r(10467),u=r(48600),h=r(62200);let a,t;function y(n){return l.apply(this,arguments)}function l(){return(l=(0,g.A)(function*(n){if(yield c(),n.inputs.length<1)return{result:{status:u.Qg.Failed,error:"",jobDescJson:"",data:new Uint8Array(0),missingInputUrls:[]},transferList:[]};const i={ptrs:[],sizes:[]};for(const s of n.inputs){const d=t._malloc(s.byteLength);new Uint8Array(t.HEAPU8.buffer,d,s.byteLength).set(new Uint8Array(s)),i.ptrs.push(d),i.sizes.push(s.byteLength)}const e=t.process(n.jobDescJson,i,n.isMissingResourceCase),f=e.status===u.Qg.Succeeded&&e.data,p=e.status===u.Qg.MissingInputs&&e.missingInputUrls.length>0;if(f){const s=e.data.slice();e.data=s}else p&&(e.jobDescJson=e.jobDescJson.slice(0),e.originalInputs=n.inputs);for(let s=0;s<i.ptrs.length;++s)t._free(i.ptrs[s]);const o=[];if(f)o.push(e.data.buffer);else if(p)for(const s of n.inputs)o.push(s);return{result:e,transferList:o}})).apply(this,arguments)}function b(){t&&(t.uninitialize_lyr3d_worker_wasm(),t=null)}function c(){return t?Promise.resolve():(a||(a=(0,h.h)().then(n=>{t=n,t.initialize_lyr3d_worker_wasm(),a=null})),a)}}}]);