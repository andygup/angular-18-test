import{b as y}from"./chunk-73WKP6FN.js";import{b as p}from"./chunk-KWYL2RA7.js";import{b as c}from"./chunk-LTDZH3EN.js";import"./chunk-3SBMUUA6.js";import{a as u}from"./chunk-B66V4PSA.js";import"./chunk-A4HCVMB4.js";import"./chunk-AANS6QE5.js";import{H as r,S as a}from"./chunk-RMOOROEO.js";import{S as s,y as m}from"./chunk-ZP7G4HN4.js";import{a as t}from"./chunk-W3WDPWBE.js";import"./chunk-43GG6PFR.js";import"./chunk-MLSR6YE6.js";import"./chunk-JPDAKIWT.js";import"./chunk-D62JNIRP.js";import"./chunk-3DV77WOO.js";import"./chunk-NJG4JJ4L.js";import"./chunk-3T7TAUC2.js";var n=new u({startingPoint:"starting-point",barrier:"barrier"}),i=class extends a{constructor(o){super(o),this.globalId=null,this.isFilterBarrier=!1,this.percentAlong=null,this.terminalId=null,this.type=null}};t([r({type:String,json:{write:!0}})],i.prototype,"globalId",void 0),t([r({type:Boolean,json:{write:!0}})],i.prototype,"isFilterBarrier",void 0),t([r({type:Number,json:{write:!0}})],i.prototype,"percentAlong",void 0),t([r({type:Number,json:{write:!0}})],i.prototype,"terminalId",void 0),t([r({type:n.apiValues,json:{type:n.jsonValues,read:{reader:n.read,source:"traceLocationType"},write:{writer:n.write,target:"traceLocationType"}}})],i.prototype,"type",void 0),i=t([s("esri.rest.networks.support.TraceLocation")],i);var d=i;var l,e=l=class extends a{static from(o){return m(l,o)}constructor(o){super(o),this.namedTraceConfigurationGlobalId=null,this.gdbVersion=null,this.traceLocations=[],this.moment=null,this.outSpatialReference=null,this.traceConfiguration=null,this.resultTypes=null,this.traceType=null}};t([r({type:String,json:{read:{source:"traceConfigurationGlobalId"},write:{target:"traceConfigurationGlobalId"}}})],e.prototype,"namedTraceConfigurationGlobalId",void 0),t([r({type:String,json:{write:!0}})],e.prototype,"gdbVersion",void 0),t([r({type:[d],json:{write:!0}})],e.prototype,"traceLocations",void 0),t([r({type:Date,json:{type:Number,write:{writer:(o,f)=>{f.moment=o?o.getTime():null}}}})],e.prototype,"moment",void 0),t([r({type:c,json:{read:!1}})],e.prototype,"outSpatialReference",void 0),t([r({type:y,json:{write:!0}})],e.prototype,"traceConfiguration",void 0),t([r({type:[Object],json:{write:!0}})],e.prototype,"resultTypes",void 0),t([r({type:p.apiValues,json:{type:p.jsonValues,read:p.read,write:p.write}})],e.prototype,"traceType",void 0),e=l=t([s("esri.rest.networks.support.TraceParameters")],e);var F=e;export{F as default};
