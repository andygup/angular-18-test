import{t as m}from"./chunk-UHTPPTOJ.js";import"./chunk-LP5GLSKB.js";import{b as p}from"./chunk-LTDZH3EN.js";import"./chunk-3SBMUUA6.js";import"./chunk-X7Z55FTO.js";import"./chunk-B66V4PSA.js";import"./chunk-A4HCVMB4.js";import"./chunk-AANS6QE5.js";import{H as e,S as a}from"./chunk-RMOOROEO.js";import{S as n,y as i}from"./chunk-ZP7G4HN4.js";import{a as o}from"./chunk-W3WDPWBE.js";import"./chunk-43GG6PFR.js";import"./chunk-MLSR6YE6.js";import"./chunk-JPDAKIWT.js";import"./chunk-D62JNIRP.js";import"./chunk-3DV77WOO.js";import"./chunk-NJG4JJ4L.js";import"./chunk-3T7TAUC2.js";var s,t=s=class extends a{static from(r){return i(s,r)}constructor(r){super(r),this.returnAttachmentAssociations=!1,this.returnConnectivityAssociations=!1,this.returnContainmentAssociations=!1,this.extent=null,this.maxGeometryCount=null,this.outSpatialReference=null,this.gdbVersion=null,this.moment=null}};o([e({type:Boolean,json:{read:{source:"attachmentAssociations"},write:{target:"attachmentAssociations"}}})],t.prototype,"returnAttachmentAssociations",void 0),o([e({type:Boolean,json:{read:{source:"connectivityAssociations"},write:{target:"connectivityAssociations"}}})],t.prototype,"returnConnectivityAssociations",void 0),o([e({type:Boolean,json:{read:{source:"containmentAssociations"},write:{target:"containmentAssociations"}}})],t.prototype,"returnContainmentAssociations",void 0),o([e({type:m,json:{write:!0}})],t.prototype,"extent",void 0),o([e({type:Number,json:{write:!0}})],t.prototype,"maxGeometryCount",void 0),o([e({type:p,json:{read:{source:"outSR"},write:{target:"outSR"}}})],t.prototype,"outSpatialReference",void 0),o([e({type:String,json:{write:!0}})],t.prototype,"gdbVersion",void 0),o([e({type:Date,json:{type:Number,write:{writer:(r,c)=>{c.moment=r?.getTime()}}}})],t.prototype,"moment",void 0),t=s=o([n("esri.rest.networks.support.SynthesizeAssociationGeometriesParameters")],t);var g=t;export{g as default};