import{n as d}from"./chunk-67EKH3Q4.js";import{u as v}from"./chunk-AKHHPLWL.js";import{a as b}from"./chunk-63TUJPJR.js";import{b as h}from"./chunk-6A4M7X3R.js";import{a as f}from"./chunk-VNBPSOCW.js";import{f as p}from"./chunk-L2DEVDHE.js";import{B as n,H as o,R as y,S as c}from"./chunk-RMOOROEO.js";import{S as g}from"./chunk-ZP7G4HN4.js";import{a as s}from"./chunk-W3WDPWBE.js";import{a as m}from"./chunk-3T7TAUC2.js";var u;function _(e){if(!e)return null;let t={};for(let r in e){let a=p(e[r]);a&&(t[r]=a)}return Object.keys(t).length!==0?t:null}function T(e){if(e==null)return null;let t={};for(let r in e){let a=e[r];a&&(t[r]=a.toJSON())}return Object.keys(t).length!==0?t:null}var i=u=class extends b(c){constructor(e){super(e),this.isAggregate=!1,this.layer=null,this.origin=null,this.popupTemplate=null,this.sourceLayer=null,Object.defineProperty(this,"uid",{value:n(),configurable:!0}),Object.defineProperty(this,"_lastMeshTransform",{value:{},configurable:!0,writable:!0,enumerable:!1})}initialize(){this._watchMeshGeometryChanges()}set aggregateGeometries(e){let t=this._get("aggregateGeometries");JSON.stringify(t)!==JSON.stringify(e)&&this._set("aggregateGeometries",e)}set attributes(e){let t=this._get("attributes");t!==e&&(this._set("attributes",e),this._notifyLayer("attributes",t,e))}set geometry(e){let t=this._get("geometry");t!==e&&(this._set("geometry",e),e?.type!=="mesh"&&this._notifyLayer("geometry",t,e))}set symbol(e){let t=this._get("symbol");t!==e&&(this._set("symbol",e),this._notifyLayer("symbol",t,e))}set visible(e){let t=this._get("visible");t!==e&&(this._set("visible",e),this._notifyLayer("visible",t,e))}cloneShallow(){return new u({aggregateGeometries:this.aggregateGeometries,attributes:this.attributes,geometry:this.geometry,isAggregate:this.isAggregate,layer:this.layer,popupTemplate:this.popupTemplate,sourceLayer:this.sourceLayer,symbol:this.symbol,visible:this.visible,origin:this.origin})}getEffectivePopupTemplate(e=!1){if(this.popupTemplate)return this.popupTemplate;let t=this.origin&&"layer"in this.origin?this.origin.layer:null;for(let r of[t,this.sourceLayer,this.layer])if(r){if("popupTemplate"in r&&r.popupTemplate)return r.popupTemplate;if(e&&"defaultPopupTemplate"in r&&r.defaultPopupTemplate!=null)return r.defaultPopupTemplate}return null}getAttribute(e){return this.attributes?.[e]}setAttribute(e,t){if(this.attributes){let r=this.getAttribute(e);this.attributes[e]=t,this._notifyLayer("attributes",r,t,e)}else this.attributes={[e]:t},this._notifyLayer("attributes",void 0,t,e)}getObjectId(){return this.sourceLayer&&"objectIdField"in this.sourceLayer&&this.sourceLayer.objectIdField?this.getAttribute(this.sourceLayer.objectIdField):null}toJSON(){return{aggregateGeometries:T(this.aggregateGeometries),geometry:this.geometry!=null?this.geometry.toJSON():null,symbol:this.symbol!=null?this.symbol.toJSON():null,attributes:y(this.attributes)?this.attributes.toJSON():m({},this.attributes),popupTemplate:this.popupTemplate?.toJSON()??null}}notifyMeshTransformChanged(e={}){let{geometry:t}=this;if(t?.type==="mesh"){let r={origin:t.origin,transform:t.transform};this._notifyLayer("origin-transform",r,r,e.action)}}_notifyLayer(e,t,r,a){if(!this.layer||!("graphicChanged"in this.layer))return;let l={graphic:this,property:e,oldValue:t,newValue:r};e==="origin-transform"&&(l.action=a),e==="attributes"&&(l.attributeName=a),this.layer.graphicChanged(l)}_watchMeshGeometryChanges(){this.addHandles([h(()=>this.geometry?.type==="mesh"&&this.geometry.vertexSpace.origin?{localMatrix:this.geometry.transform?.localMatrix,origin:this.geometry.vertexSpace.origin}:void 0,({localMatrix:e,origin:t})=>{this._lastMeshTransform.localMatrix===e&&this._lastMeshTransform.origin===t||(this._lastMeshTransform.localMatrix=e,this._lastMeshTransform.origin=t,this.notifyMeshTransformChanged())}),h(()=>this.geometry?.type==="mesh"?{vertexAttributes:this.geometry.vertexAttributes}:void 0,()=>{let e=this.geometry;e?.type==="mesh"&&e.vertexSpace.origin?(this._lastMeshTransform.localMatrix=e.transform?.localMatrix,this._lastMeshTransform.origin=e.vertexSpace.origin):(this._lastMeshTransform.localMatrix=void 0,this._lastMeshTransform.origin=void 0),this._notifyLayer("geometry",this.geometry,this.geometry)},{equals:(e,t)=>e===t,sync:!0})])}};s([o({value:null,json:{read:_}})],i.prototype,"aggregateGeometries",null),s([o({value:null})],i.prototype,"attributes",null),s([o({value:null,types:f,json:{read:p}})],i.prototype,"geometry",null),s([o({type:Boolean})],i.prototype,"isAggregate",void 0),s([o({clonable:"reference"})],i.prototype,"layer",void 0),s([o({clonable:"reference"})],i.prototype,"origin",void 0),s([o({type:d})],i.prototype,"popupTemplate",void 0),s([o({clonable:"reference"})],i.prototype,"sourceLayer",void 0),s([o({value:null,types:v})],i.prototype,"symbol",null),s([o({type:Boolean,value:!0})],i.prototype,"visible",null),i=u=s([g("esri.Graphic")],i),function(e){e.generateUID=n}(i||(i={}));var F=i;export{F as a};
