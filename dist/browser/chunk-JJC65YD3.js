import{a as k}from"./chunk-JVMAAW6M.js";import{a as I}from"./chunk-KOIUWRXN.js";import{a as A}from"./chunk-DGXL7ZQL.js";import"./chunk-SYNRDAMR.js";import{a as J}from"./chunk-VSMVTOQ2.js";import{a as _}from"./chunk-O3JFLEEW.js";import"./chunk-2FWBXOKU.js";import"./chunk-M6ZEQBQT.js";import"./chunk-3FUKLVTW.js";import"./chunk-VI3FHFCE.js";import"./chunk-W2FNMTJT.js";import"./chunk-3UBRSNPL.js";import{a as u}from"./chunk-XDRSKFBJ.js";import{b as P}from"./chunk-63TUJPJR.js";import{j as C}from"./chunk-GDTXLKQK.js";import"./chunk-YNFZN34N.js";import"./chunk-SHSMFEO2.js";import{a as b,h as v}from"./chunk-6A4M7X3R.js";import"./chunk-CXUCQMGY.js";import"./chunk-WOZZR3L4.js";import"./chunk-LW5IAFEX.js";import{b as E,c as j}from"./chunk-AQ74ANSJ.js";import{a as z,b as L}from"./chunk-R2K3CL3U.js";import"./chunk-SAOUSUZE.js";import"./chunk-VNBPSOCW.js";import"./chunk-CPGZIEVH.js";import"./chunk-L2DEVDHE.js";import"./chunk-2ETW6ZBA.js";import"./chunk-6K7P7RRW.js";import"./chunk-7LRMKXZV.js";import"./chunk-BCREO4Q5.js";import"./chunk-BNUHB4AP.js";import"./chunk-ZGLJFDS6.js";import"./chunk-RSDQHAJX.js";import"./chunk-PSYXGXKI.js";import"./chunk-Q6TYOK45.js";import"./chunk-QMDBAMTG.js";import{b as x}from"./chunk-RZA5H63B.js";import"./chunk-Y4PMIX35.js";import"./chunk-KVCIO4DX.js";import"./chunk-NWBXT4EB.js";import"./chunk-FKQYBEPG.js";import"./chunk-ZHAVTBSG.js";import"./chunk-SBO2F6VY.js";import"./chunk-MMYIAMQR.js";import{j as R,t as O}from"./chunk-UHTPPTOJ.js";import"./chunk-LP5GLSKB.js";import{a as T}from"./chunk-LTDZH3EN.js";import"./chunk-3SBMUUA6.js";import"./chunk-II7TJXWX.js";import{a as M}from"./chunk-X7Z55FTO.js";import"./chunk-B66V4PSA.js";import"./chunk-A4HCVMB4.js";import"./chunk-AANS6QE5.js";import{H as o,Q as w}from"./chunk-RMOOROEO.js";import{H as g,S as m,w as q}from"./chunk-ZP7G4HN4.js";import{a as t}from"./chunk-W3WDPWBE.js";import"./chunk-43GG6PFR.js";import"./chunk-MLSR6YE6.js";import"./chunk-JPDAKIWT.js";import"./chunk-D62JNIRP.js";import"./chunk-3DV77WOO.js";import"./chunk-NJG4JJ4L.js";import{g as h}from"./chunk-3T7TAUC2.js";var s=class extends w(P){constructor(e){super(e),this.type="simple",this.color=new u("black"),this.lineSize=2,this.fontSize=10,this.textColor=new u("black"),this.textBackgroundColor=new u([255,255,255,.6])}};t([o({type:["simple"],readOnly:!0,json:{write:{isRequired:!0}}})],s.prototype,"type",void 0),t([o({type:u,nonNullable:!0,json:{type:[g],write:{isRequired:!0}}})],s.prototype,"color",void 0),t([o({type:Number,cast:j,nonNullable:!0,range:{min:E(1)},json:{write:{isRequired:!0}}})],s.prototype,"lineSize",void 0),t([o({type:Number,cast:j,nonNullable:!0,json:{write:{isRequired:!0}}})],s.prototype,"fontSize",void 0),t([o({type:u,nonNullable:!0,json:{type:[g],write:{isRequired:!0}}})],s.prototype,"textColor",void 0),t([o({type:u,nonNullable:!0,json:{type:[g],write:{isRequired:!0}}})],s.prototype,"textBackgroundColor",void 0),s=t([m("esri.analysis.DimensionSimpleStyle")],s);var c=s;var y;(function(e){e.Horizontal="horizontal",e.Vertical="vertical",e.Direct="direct"})(y||(y={}));var H=[y.Horizontal,y.Vertical,y.Direct];var l=class extends w(P){constructor(e){super(e),this.type="length",this.startPoint=null,this.endPoint=null,this.measureType=y.Direct,this.offset=0,this.orientation=0}};t([o({type:["length"],json:{write:{isRequired:!0}}})],l.prototype,"type",void 0),t([o({type:R,json:{write:!0}})],l.prototype,"startPoint",void 0),t([o({type:R,json:{write:!0}})],l.prototype,"endPoint",void 0),t([o({type:H,nonNullable:!0,json:{write:{isRequired:!0}}})],l.prototype,"measureType",void 0),t([o({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}})],l.prototype,"offset",void 0),t([o({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),M(e=>I.normalize(q(e),0,!0))],l.prototype,"orientation",void 0),l=t([m("esri.analysis.LengthDimension")],l);var N=l;var S=x.ofType(N),p=class extends k{constructor(e){super(e),this.type="dimension",this.style=new c,this.extent=null}initialize(){this.addHandles(b(()=>this._computeExtent(),e=>{e?.pending==null&&this._set("extent",e!=null?e.extent:null)},v))}get dimensions(){return this._get("dimensions")||new S}set dimensions(e){this._set("dimensions",z(e,this.dimensions,S))}get spatialReference(){for(let e of this.dimensions){if(e.startPoint!=null)return e.startPoint.spatialReference;if(e.endPoint!=null)return e.endPoint.spatialReference}return null}get requiredPropertiesForEditing(){return this.dimensions.reduce((e,i)=>(e.push(i.startPoint,i.endPoint),e),[])}waitComputeExtent(){return h(this,null,function*(){let e=this._computeExtent();return e!=null?e.pending:Promise.resolve()})}_computeExtent(){let e=this.spatialReference;if(e==null)return{pending:null,extent:null};let i=[];for(let n of this.dimensions)n.startPoint!=null&&i.push(n.startPoint),n.endPoint!=null&&i.push(n.endPoint);let a=C(i,e);if(a.pending!=null)return{pending:a.pending,extent:null};let f=null;return a.geometries!=null&&(f=a.geometries.reduce((n,d)=>n==null?d!=null?O.fromPoint(d):null:d!=null?n.union(O.fromPoint(d)):n,null)),{pending:null,extent:f}}clear(){this.dimensions.removeAll()}};t([o({type:["dimension"]})],p.prototype,"type",void 0),t([o({cast:L,type:S,nonNullable:!0})],p.prototype,"dimensions",null),t([o({readOnly:!0})],p.prototype,"spatialReference",null),t([o({types:{key:"type",base:null,typeMap:{simple:c}},nonNullable:!0})],p.prototype,"style",void 0),t([o({value:null,readOnly:!0})],p.prototype,"extent",void 0),t([o({readOnly:!0})],p.prototype,"requiredPropertiesForEditing",null),p=t([m("esri.analysis.DimensionAnalysis")],p);var D=p;var r=class extends A(_(J)){constructor(e){if(super(e),this.type="dimension",this.operationalLayerType="ArcGISDimensionLayer",this.source=new D,this.opacity=1,e){let{source:i,style:a}=e;i&&a&&(i.style=a)}}initialize(){this.addHandles([b(()=>this.source,(e,i)=>{i!=null&&i.parent===this&&(i.parent=null),e!=null&&(e.parent=this)},v)])}load(){return h(this,null,function*(){return this.addResolvingPromise(this.source.waitComputeExtent()),this})}get spatialReference(){return this.source.spatialReference}get style(){return this.source.style}set style(e){this.source.style=e}get fullExtent(){return this.source.extent}releaseAnalysis(e){this.source===e&&(this.source=new D)}get analysis(){return this.source}set analysis(e){this.source=e}get dimensions(){return this.source.dimensions}set dimensions(e){this.source.dimensions=e}writeDimensions(e,i,a,f){i.dimensions=e.filter(({startPoint:n,endPoint:d})=>n!=null&&d!=null).map(n=>n.toJSON(f)).toJSON()}};t([o({json:{read:!1},readOnly:!0})],r.prototype,"type",void 0),t([o({type:["ArcGISDimensionLayer"]})],r.prototype,"operationalLayerType",void 0),t([o({nonNullable:!0})],r.prototype,"source",void 0),t([o({readOnly:!0})],r.prototype,"spatialReference",null),t([o({types:{key:"type",base:null,typeMap:{simple:c}},json:{write:{ignoreOrigin:!0}}})],r.prototype,"style",null),t([o({readOnly:!0})],r.prototype,"fullExtent",null),t([o({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],r.prototype,"opacity",void 0),t([o({type:["show","hide"]})],r.prototype,"listMode",void 0),t([o({type:x.ofType(N),json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{ignoreOrigin:!0}}}}})],r.prototype,"dimensions",null),t([T("web-scene","dimensions")],r.prototype,"writeDimensions",null),r=t([m("esri.layers.DimensionLayer")],r);var Ue=r;export{Ue as default};
