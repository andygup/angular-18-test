import{a as n}from"./chunk-TMNMAACS.js";import{c as i}from"./chunk-KWYL2RA7.js";import{p as d}from"./chunk-2ETW6ZBA.js";import{a as p}from"./chunk-LP5GLSKB.js";import{a as m}from"./chunk-LTDZH3EN.js";import{H as l,S as a}from"./chunk-RMOOROEO.js";import{S as s}from"./chunk-ZP7G4HN4.js";import{a as e}from"./chunk-W3WDPWBE.js";var o=class extends a{constructor(r){super(r),this.globalId=null,this.associationType=null,this.fromNetworkElement=null,this.toNetworkElement=null,this.geometry=null,this.errorMessage=null,this.percentAlong=null,this.errorCode=null,this.isContentVisible=null,this.status=null}readFromNetworkElement(r,t){return new n({globalId:t.fromGlobalId,networkSourceId:t.fromNetworkSourceId,terminalId:t.fromTerminalId})}writeFromNetworkElement(r,t){r&&(t.fromGlobalId=r.globalId,t.fromNetworkSourceId=r.networkSourceId,t.fromTerminalId=r.terminalId)}readToNetworkElement(r,t){return new n({globalId:t.toGlobalId,networkSourceId:t.toNetworkSourceId,terminalId:t.toTerminalId})}writeToNetworkElement(r,t){r&&(t.toGlobalId=r.globalId,t.toNetworkSourceId=r.networkSourceId,t.toTerminalId=r.terminalId)}};e([l({type:String,json:{write:!0}})],o.prototype,"globalId",void 0),e([l({type:i.apiValues,json:{type:i.jsonValues,read:i.read,write:i.write}})],o.prototype,"associationType",void 0),e([l({type:n,json:{write:{target:{fromGlobalId:{type:String},fromNetworkSourceId:{type:Number},fromTerminalId:{type:Number}}},read:{source:["fromGlobalId","fromNetworkSourceId","fromTerminalId"]}}})],o.prototype,"fromNetworkElement",void 0),e([p("fromNetworkElement")],o.prototype,"readFromNetworkElement",null),e([m("fromNetworkElement")],o.prototype,"writeFromNetworkElement",null),e([l({type:n,json:{write:{target:{toGlobalId:{type:String},toNetworkSourceId:{type:Number},toTerminalId:{type:Number}}},read:{source:["toGlobalId","toNetworkSourceId","toTerminalId"]}}})],o.prototype,"toNetworkElement",void 0),e([p("toNetworkElement")],o.prototype,"readToNetworkElement",null),e([m("toNetworkElement")],o.prototype,"writeToNetworkElement",null),e([l({type:d,json:{write:!0}})],o.prototype,"geometry",void 0),e([l({type:String,json:{write:!0}})],o.prototype,"errorMessage",void 0),e([l({type:Number,json:{write:!0}})],o.prototype,"percentAlong",void 0),e([l({type:Number,json:{write:!0}})],o.prototype,"errorCode",void 0),e([l({type:Boolean,json:{write:!0}})],o.prototype,"isContentVisible",void 0),e([l({type:Number,json:{write:!0}})],o.prototype,"status",void 0),o=e([s("esri.rest.networks.support.Association")],o);var j=o;export{j as a};
