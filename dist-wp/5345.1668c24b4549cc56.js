"use strict";(self.webpackChunkangular_18_test=self.webpackChunkangular_18_test||[]).push([[5345],{65345:(Q,m,o)=>{o.r(m),o.d(m,{executeRelationshipQuery:()=>D,executeRelationshipQueryForCount:()=>N});var i=o(10467),R=o(68800),S=o(89563),v=o(58701),I=o(1832);function A(n,e){const t=n.toJSON();return t.objectIds&&(t.objectIds=t.objectIds.join(",")),t.orderByFields&&(t.orderByFields=t.orderByFields.join(",")),t.outFields&&!e?.returnCountOnly?t.outFields=t.outFields.includes("*")?"*":t.outFields.join(","):delete t.outFields,t.outSR&&(t.outSR=(0,v.YX)(t.outSR)),t.dynamicDataSource&&(t.layer=JSON.stringify({source:t.dynamicDataSource}),delete t.dynamicDataSource),t}function d(){return(d=(0,i.A)(function*(n,e,t){const u=yield x(n,e,t),r=u.data,a=r.geometryType,s=r.spatialReference,l={};for(const c of r.relatedRecordGroups){const j={fields:void 0,objectIdFieldName:void 0,geometryType:a,spatialReference:s,hasZ:!!r.hasZ,hasM:!!r.hasM,features:c.relatedRecords};if(null!=c.objectId)l[c.objectId]=j;else for(const F of Object.keys(c))"relatedRecords"!==F&&(l[c[F]]=j)}return{...u,data:l}})).apply(this,arguments)}function f(){return(f=(0,i.A)(function*(n,e,t){const u=yield x(n,e,t,{returnCountOnly:!0}),r=u.data,a={};for(const s of r.relatedRecordGroups)null!=s.objectId&&(a[s.objectId]=s.count);return{...u,data:a}})).apply(this,arguments)}function x(n,e){return y.apply(this,arguments)}function y(){return(y=(0,i.A)(function*(n,e,t={},u){const r=(0,I.z)({...n.query,f:"json",...u,...A(e,u)});return(0,S.A)(n.path+"/queryRelatedRecords",{...t,query:{...t.query,...r}})})).apply(this,arguments)}var C=o(93327),g=o(59487);function D(n,e,t){return p.apply(this,arguments)}function p(){return p=(0,i.A)(function*(n,e,t){return e=g.default.from(e),function O(n,e,t){return d.apply(this,arguments)}((0,R.Dl)(n),e,t).then(r=>{const a=r.data,s={};return Object.keys(a).forEach(l=>s[l]=C.A.fromJSON(a[l])),s})}),p.apply(this,arguments)}function N(n,e,t){return h.apply(this,arguments)}function h(){return h=(0,i.A)(function*(n,e,t){return e=g.default.from(e),function b(n,e,t){return f.apply(this,arguments)}((0,R.Dl)(n),e,{...t}).then(r=>r.data)}),h.apply(this,arguments)}}}]);