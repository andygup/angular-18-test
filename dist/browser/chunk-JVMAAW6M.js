import{a as p}from"./chunk-2FWBXOKU.js";import{a as m}from"./chunk-63TUJPJR.js";import{H as s,K as n,Q as l}from"./chunk-RMOOROEO.js";import{S as a}from"./chunk-ZP7G4HN4.js";import{a as e}from"./chunk-W3WDPWBE.js";import{m as o}from"./chunk-NJG4JJ4L.js";var c=0,t=class extends l(m(p(n))){constructor(r){super(r),this.id=`${Date.now().toString(16)}-analysis-${c++}`,this.title=null}get parent(){return this._get("parent")}set parent(r){let i=this.parent;if(i!=null)switch(i.type){case"line-of-sight":case"dimension":i.releaseAnalysis(this);break;case"2d":case"3d":i.analyses.includes(this)&&i.analyses.remove(this)}this._set("parent",r)}get isEditable(){return this.requiredPropertiesForEditing.every(o)}};e([s({type:String,constructOnly:!0,clonable:!1})],t.prototype,"id",void 0),e([s({type:String})],t.prototype,"title",void 0),e([s({clonable:!1,value:null})],t.prototype,"parent",null),e([s({readOnly:!0})],t.prototype,"isEditable",null),t=e([a("esri.analysis.Analysis")],t);var E=t;export{E as a};