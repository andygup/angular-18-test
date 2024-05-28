"use strict";(self.webpackChunkangular_18_test=self.webpackChunkangular_18_test||[]).push([[5357],{99305:(H,O,s)=>{function j(l){return l&&"getAtOrigin"in l&&"originOf"in l}s.d(O,{H:()=>j})},89957:(H,O,s)=>{s.r(O),s.d(O,{default:()=>Y});var j=s(10467),l=s(8189),R=s(31555);function S(o,f){return C(o)===C(f)}function C(o){if(null==o)return null;let h=null;return h=null!=o.objectId?o.objectId:null!=o.layer&&"objectIdField"in o.layer&&null!=o.layer.objectIdField&&null!=o.attributes?o.attributes[o.layer.objectIdField]:o.uid,null==h?null:`o-${null!=o.layer?o.layer.id:""}-${h}`}const M={json:{write:{writer:function W(o,f){null!=o?.layer?.objectIdField&&null!=o.attributes&&(f.feature={layerId:o.layer.id,objectId:o.attributes[o.layer.objectIdField]})},target:{"feature.layerId":{type:[Number,String]},"feature.objectId":{type:[Number,String]}}},origins:{"web-scene":{read:function G(o){if(null!=o.layerId&&null!=o.objectId)return{uid:null,layer:{id:o.layerId,objectIdField:"ObjectId"},attributes:{ObjectId:o.objectId}}}}}}};var B=s(98877),U=s(90660),$=s(71065),I=s(11432),d=s(85211),b=(s(3248),s(35150),s(40707),s(76576)),A=s(25968),w=s(1749),N=s(88485);let g=class extends((0,$.Te)((0,U.O)(B.A))){constructor(o){super(o),this.position=null,this.elevationInfo=null,this.feature=null}equals(o){return(0,I.CM)(this.position,o.position)&&(0,I.CM)(this.elevationInfo,o.elevationInfo)&&S(this.feature,o.feature)}};(0,l._)([(0,d.MZ)({type:w.A,json:{write:{isRequired:!0}}})],g.prototype,"position",void 0),(0,l._)([(0,d.MZ)({type:N.A}),(0,A.P)()],g.prototype,"elevationInfo",void 0),(0,l._)([(0,d.MZ)(M)],g.prototype,"feature",void 0),g=(0,l._)([(0,b.$)("esri.analysis.LineOfSightAnalysisObserver")],g);const T=g;let m=class extends((0,$.Te)(U.P)){constructor(o){super(o),this.position=null,this.elevationInfo=null,this.feature=null}equals(o){return(0,I.CM)(this.position,o.position)&&(0,I.CM)(this.elevationInfo,o.elevationInfo)&&S(this.feature,o.feature)}};(0,l._)([(0,d.MZ)({type:w.A}),(0,A.P)()],m.prototype,"position",void 0),(0,l._)([(0,d.MZ)({type:N.A}),(0,A.P)()],m.prototype,"elevationInfo",void 0),(0,l._)([(0,d.MZ)(M)],m.prototype,"feature",void 0),m=(0,l._)([(0,b.$)("esri.analysis.LineOfSightAnalysisTarget")],m);const z=m;var E=s(31178),L=s(5605),Z=s(48900),t=s(11817),r=s(2296),i=s(73812);const a=E.A.ofType(z);let u=class extends R.A{constructor(o){super(o),this.type="line-of-sight",this.observer=null,this.extent=null}initialize(){this.addHandles((0,Z.wB)(()=>this._computeExtent(),o=>{null==o?.pending&&this._set("extent",null!=o?o.extent:null)},Z.pc))}get targets(){return this._get("targets")||new a}set targets(o){this._set("targets",(0,L.V)(o,this.targets,a))}get spatialReference(){return null!=this.observer?.position?this.observer.position.spatialReference:null}get requiredPropertiesForEditing(){return[this.observer?.position]}waitComputeExtent(){var o=this;return(0,j.A)(function*(){const f=o._computeExtent();return null!=f?f.pending:Promise.resolve()})()}_computeExtent(){const o=this.spatialReference;if(null==this.observer?.position||null==o)return null;const f=P=>"absolute-height"===(0,i.w7)(P.position,P.elevationInfo),h=this.observer.position,J=(0,r.fA)(h.x,h.y,h.z,h.x,h.y,h.z);for(const P of this.targets)if(null!=P.position){const F=(0,t.projectOrLoad)(P.position,o);if(null!=F.pending)return{pending:F.pending,extent:null};if(null!=F.geometry){const{x:k,y:q,z:_}=F.geometry;(0,r.iT)(J,[k,q,_])}}const D=(0,r.w1)(J,o);return f(this.observer)&&this.targets.every(f)||(D.zmin=void 0,D.zmax=void 0),{pending:null,extent:D}}clear(){this.observer=null,this.targets.removeAll()}};(0,l._)([(0,d.MZ)({type:["line-of-sight"]})],u.prototype,"type",void 0),(0,l._)([(0,d.MZ)({type:T,json:{read:!0,write:!0}})],u.prototype,"observer",void 0),(0,l._)([(0,d.MZ)({cast:L.H,type:a,nonNullable:!0,json:{read:!0,write:!0}})],u.prototype,"targets",null),(0,l._)([(0,d.MZ)({value:null,readOnly:!0})],u.prototype,"extent",void 0),(0,l._)([(0,d.MZ)({readOnly:!0})],u.prototype,"spatialReference",null),(0,l._)([(0,d.MZ)({readOnly:!0})],u.prototype,"requiredPropertiesForEditing",null),u=(0,l._)([(0,b.$)("esri.analysis.LineOfSightAnalysis")],u);const p=u;var v=s(39693),c=s(95478),x=s(17049);const Q=E.A.ofType(z);let y=class extends((0,x.q)((0,v.P)(c.A))){constructor(o){super(o),this.type="line-of-sight",this.operationalLayerType="LineOfSightLayer",this.analysis=new p,this.opacity=1}initialize(){this.addHandles((0,Z.wB)(()=>this.analysis,(o,f)=>{null!=f&&f.parent===this&&(f.parent=null),null!=o&&(o.parent=this)},Z.pc))}load(){var o=this;return(0,j.A)(function*(){return null!=o.analysis&&o.addResolvingPromise(o.analysis.waitComputeExtent()),o})()}get observer(){return this.analysis?.observer}set observer(o){const{analysis:f}=this;f&&(f.observer=o)}get targets(){return null!=this.analysis?this.analysis.targets:new E.A}set targets(o){(0,L.V)(o,this.analysis?.targets)}get fullExtent(){return null!=this.analysis?this.analysis.extent:null}get spatialReference(){return null!=this.analysis?this.analysis.spatialReference:null}releaseAnalysis(o){this.analysis===o&&(this.analysis=new p)}};(0,l._)([(0,d.MZ)({json:{read:!1},readOnly:!0})],y.prototype,"type",void 0),(0,l._)([(0,d.MZ)({type:["LineOfSightLayer"]})],y.prototype,"operationalLayerType",void 0),(0,l._)([(0,d.MZ)({type:T,json:{read:!0,write:{isRequired:!0,ignoreOrigin:!0}}})],y.prototype,"observer",null),(0,l._)([(0,d.MZ)({type:Q,json:{read:!0,write:{ignoreOrigin:!0}}})],y.prototype,"targets",null),(0,l._)([(0,d.MZ)({nonNullable:!0,json:{read:!1,write:!1}})],y.prototype,"analysis",void 0),(0,l._)([(0,d.MZ)({readOnly:!0})],y.prototype,"fullExtent",null),(0,l._)([(0,d.MZ)({readOnly:!0})],y.prototype,"spatialReference",null),(0,l._)([(0,d.MZ)({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],y.prototype,"opacity",void 0),(0,l._)([(0,d.MZ)({type:["show","hide"]})],y.prototype,"listMode",void 0),y=(0,l._)([(0,b.$)("esri.layers.LineOfSightLayer")],y);const Y=y},73812:(H,O,s)=>{s.d(O,{$7:()=>T,B:()=>g,M7:()=>E,XF:()=>z,tW:()=>m,w7:()=>M}),s(82663);var l=s(82575);function M(t,r){return function S(t,r){return r?.mode?r.mode:function R(t){return t?L:Z}(t).mode}(null!=t&&t.hasZ,r)}function g(t,r,i){return i&&i.mode!==r?`${t} only support ${r} elevation mode`:null}function T(t,r,i){return i?.mode===r?`${t} do not support ${r} elevation mode`:null}function m(t,r){return null!=r?.featureExpressionInfo&&"0"!==r.featureExpressionInfo.expression?`${t} do not support featureExpressionInfo`:null}function z(t,r){r&&t.warn(".elevationInfo=",r)}function E(t){return(t?.offset??0)*(0,l.Ao)(t?.unit)}const L={mode:"absolute-height",offset:0},Z={mode:"on-the-ground",offset:null}}}]);