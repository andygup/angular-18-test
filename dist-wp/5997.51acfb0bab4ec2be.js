"use strict";(self.webpackChunkangular_18_test=self.webpackChunkangular_18_test||[]).push([[5997],{5997:(L,u,t)=>{t.r(u),t.d(u,{queryAssociations:()=>O});var p=t(10467),d=t(89563),v=t(23159),m=t(35150),g=t(96073),i=t(68800),y=t(8189),f=t(71065),h=t(85211),A=(t(3248),t(40707),t(76576)),S=t(56386);let e=class extends f.oY{constructor(s){super(s),this.associations=[]}};(0,y._)([(0,h.MZ)({type:[S.A],json:{write:!0}})],e.prototype,"associations",void 0),e=(0,y._)([(0,A.$)("esri.rest.networks.support.QueryAssociationsResult")],e);const j=e;function J(s){const{returnDeletes:o,elements:r,gdbVersion:a,moment:c}=s.toJSON();return{returnDeletes:o,elements:JSON.stringify(r.map(n=>({globalId:n.globalId,networkSourceId:n.networkSourceId,terminalId:n.terminalId}))),types:JSON.stringify(s.types.map(n=>g.XZ.toJSON(n))).replaceAll('"connectivity"','"junctionJunctionConnectivity"'),gdbVersion:a,moment:c}}function O(s,o,r){return l.apply(this,arguments)}function l(){return(l=(0,p.A)(function*(s,o,r){const a=(0,i.Dl)(s),c={...J(o),f:"json"},n=(0,i.lF)({...a.query,...c}),I=(0,i.jV)(n,{...r,method:"post"}),N=`${a.path}/associations/query`,{data:x}=yield(0,d.A)(N,I),C=j.fromJSON(x);return o.types.includes("connectivity")&&(0,v.Lx)(m.A.getLogger("esri/rest/networks/support/QueryAssociationsParameters"),"types",{replacement:"Please use 'junction-junction-connectivity' instead of 'connectivity'.",see:"https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-networks-support-QueryAssociationsParameters.html#types",version:"4.29",warnOnce:!0}),C})).apply(this,arguments)}}}]);