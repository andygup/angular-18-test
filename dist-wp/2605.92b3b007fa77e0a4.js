"use strict";(self.webpackChunkangular_18_test=self.webpackChunkangular_18_test||[]).push([[2605],{42605:(y,l,s)=>{s.r(l),s.d(l,{default:()=>O});var r=s(8189),E=s(5922),d=s(39693),i=s(3804),t=s(85211),p=(s(3248),s(35150),s(40707),s(76576)),u=s(95478),M=s(85551);let o=class extends((0,M.A)((0,d.P)(u.A))){constructor(_){super(_),this.resourceInfo=null,this.persistenceEnabled=!0,this.type="unsupported"}initialize(){this.addResolvingPromise(new Promise((_,n)=>{(0,i._)(()=>{const e=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let a="Unsupported layer type";e&&(a+=" "+e),n(new E.A("layer:unsupported-layer-type",a,{layerType:e}))})}))}read(_,n){const e={resourceInfo:_};null!=_.id&&(e.id=_.id),null!=_.title&&(e.title=_.title),super.read(e,n)}write(_,n){return Object.assign(_||{},this.resourceInfo,{id:this.id})}};(0,r._)([(0,t.MZ)({readOnly:!0})],o.prototype,"resourceInfo",void 0),(0,r._)([(0,t.MZ)({type:["show","hide"]})],o.prototype,"listMode",void 0),(0,r._)([(0,t.MZ)({type:Boolean,readOnly:!1})],o.prototype,"persistenceEnabled",void 0),(0,r._)([(0,t.MZ)({json:{read:!1},readOnly:!0,value:"unsupported"})],o.prototype,"type",void 0),o=(0,r._)([(0,p.$)("esri.layers.UnsupportedLayer")],o);const O=o}}]);