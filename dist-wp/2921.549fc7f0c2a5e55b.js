"use strict";(self.webpackChunkangular_18_test=self.webpackChunkangular_18_test||[]).push([[2921],{72921:(le,L,o)=>{o.r(L),o.d(L,{default:()=>ee});var R=o(10467),l=o(8189),N=(o(21152),o(81098)),h=(o(47280),o(31178)),B=o(5922),S=o(77806),W=o(39693),U=o(89221),b=o(96996),i=o(85211),f=(o(3248),o(35150),o(17221)),v=o(76576),K=o(50305),c=o(11817),p=o(51995),J=o(77098),x=o(58701),Z=o(35940),w=o(36819),G=o(95478),F=o(18056),z=o(93410),$=o(17049),H=o(85551),Q=o(33036),T=o(29141),V=o(88521),X=o(55417),C=o(46602),Y=o(47705),M=o(32034),k=o(28067);function g(t){return"markup"===t.featureCollectionType||t.layers.some(e=>null!=e.layerDefinition.visibilityField||!I(e))}function I({layerDefinition:t,featureSet:e}){const r=t.geometryType??e.geometryType;return D.find(n=>r===n.geometryTypeJSON&&t.drawingInfo?.renderer?.symbol?.type===n.identifyingSymbol.type)}function A(){return new k.A({xmin:-180,ymin:-90,xmax:180,ymax:90})}const j=new T.A({name:"OBJECTID",alias:"OBJECTID",type:"oid",nullable:!1,editable:!1}),q=new T.A({name:"title",alias:"Title",type:"string",nullable:!0,editable:!0,length:255});let d=class extends w.A{constructor(t){super(t),this.visibilityMode="inherited"}initialize(){for(const t of this.graphics)t.sourceLayer=this.layer;this.graphics.on("after-add",t=>{t.item.sourceLayer=this.layer}),this.graphics.on("after-remove",t=>{t.item.sourceLayer=null})}get fullExtent(){const t=this.layer?.spatialReference,e=this.fullBounds;return t?null==e?(0,c.projectOrLoad)(A(),t).geometry:(0,p.w1)(e,t):null}get fullBounds(){const t=this.layer?.spatialReference;if(!t)return null;const e=(0,p.Ie)();return this.graphics.forEach(r=>{const n=null!=r.geometry?(0,c.projectOrLoad)(r.geometry,t).geometry:null;null!=n&&(0,p.fT)(e,"point"===n.type?n:n.extent,e)}),(0,p.aI)(e,p.qv)?null:e}get sublayers(){return this.graphics}};(0,l._)([(0,i.MZ)({readOnly:!0})],d.prototype,"fullExtent",null),(0,l._)([(0,i.MZ)({readOnly:!0})],d.prototype,"fullBounds",null),(0,l._)([(0,i.MZ)({readOnly:!0})],d.prototype,"sublayers",null),(0,l._)([(0,i.MZ)()],d.prototype,"layer",void 0),(0,l._)([(0,i.MZ)()],d.prototype,"layerId",void 0),(0,l._)([(0,i.MZ)({readOnly:!0})],d.prototype,"visibilityMode",void 0),d=(0,l._)([(0,v.$)("esri.layers.MapNotesLayer.MapNotesSublayer")],d);const D=[{geometryType:"polygon",geometryTypeJSON:"esriGeometryPolygon",id:"polygonLayer",layerId:0,title:"Polygons",identifyingSymbol:(new V.A).toJSON()},{geometryType:"polyline",geometryTypeJSON:"esriGeometryPolyline",id:"polylineLayer",layerId:1,title:"Polylines",identifyingSymbol:(new X.A).toJSON()},{geometryType:"multipoint",geometryTypeJSON:"esriGeometryMultipoint",id:"multipointLayer",layerId:2,title:"Multipoints",identifyingSymbol:(new C.A).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"pointLayer",layerId:3,title:"Points",identifyingSymbol:(new C.A).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"textLayer",layerId:4,title:"Text",identifyingSymbol:(new Y.A).toJSON()}];let a=class extends((0,z.dM)((0,Q.j)((0,$.q)((0,H.A)((0,W.P)(G.A)))))){constructor(t){super(t),this.capabilities={operations:{supportsMapNotesEditing:!0}},this.featureCollections=null,this.featureCollectionJSON=null,this.featureCollectionType="notes",this.legendEnabled=!1,this.listMode="hide-children",this.minScale=0,this.maxScale=0,this.spatialReference=M.A.WGS84,this.sublayers=new h.A(D.map(e=>new d({id:e.id,layerId:e.layerId,title:e.title,layer:this}))),this.title="Map Notes",this.type="map-notes",this.visibilityMode="inherited"}readCapabilities(t,e,r){return{operations:{supportsMapNotesEditing:!g(e)&&"portal-item"!==r?.origin}}}readFeatureCollections(t,e,r){if(!g(e))return null;const n=e.layers.map(y=>{const s=new Z.default;return s.read(y,r),s});return new h.A({items:n})}readLegacyfeatureCollectionJSON(t,e){return g(e)?(0,S.o8)(e.featureCollection):null}get fullExtent(){const t=this.spatialReference,e=(0,p.Ie)();return null!=this.sublayers?this.sublayers.forEach(({fullBounds:r})=>null!=r?(0,p.fT)(e,r,e):e,e):this.featureCollectionJSON?.layers.some(r=>r.layerDefinition.extent)&&this.featureCollectionJSON.layers.forEach(r=>{const n=(0,c.projectOrLoad)(r.layerDefinition.extent,t).geometry;null!=n&&(0,p.fT)(e,n,e)}),(0,p.aI)(e,p.qv)?(0,c.projectOrLoad)(A(),t).geometry:(0,p.w1)(e,t)}readMinScale(t,e){for(const r of e.layers)if(null!=r.layerDefinition.minScale)return r.layerDefinition.minScale;return 0}readMaxScale(t,e){for(const r of e.layers)if(null!=r.layerDefinition.maxScale)return r.layerDefinition.maxScale;return 0}get multipointLayer(){return this._findSublayer("multipointLayer")}get pointLayer(){return this._findSublayer("pointLayer")}get polygonLayer(){return this._findSublayer("polygonLayer")}get polylineLayer(){return this._findSublayer("polylineLayer")}readSpatialReference(t,e){return e.layers.length?M.A.fromJSON(e.layers[0].layerDefinition.spatialReference):M.A.WGS84}readSublayers(t,e,r){if(g(e))return null;const n=[];let y=e.layers.reduce((s,_)=>Math.max(s,_.layerDefinition.id??-1),-1)+1;for(const s of e.layers){const{layerDefinition:_,featureSet:u}=s,O=_.id??y++,m=I(s);if(null!=m){const E=new d({id:m.id,title:_.name,layerId:O,layer:this,graphics:u.features.map(({geometry:P,symbol:te,attributes:re,popupInfo:oe})=>N.A.fromJSON({attributes:re,geometry:P,symbol:te,popupTemplate:oe}))});n.push(E)}}return new h.A(n)}writeSublayers(t,e,r,n){const{minScale:y,maxScale:s}=this;if(null==t)return;const _=t.some(m=>m.graphics.length>0);if(!this.capabilities.operations.supportsMapNotesEditing)return void(_&&n?.messages?.push(new B.A("map-notes-layer:editing-not-supported","New map notes cannot be added to this layer")));const u=[];let O=this.spatialReference.toJSON();e:for(const m of t)for(const E of m.graphics)if(null!=E.geometry){O=E.geometry.spatialReference.toJSON();break e}for(const m of D){const E=t.find(P=>m.id===P.id);this._writeMapNoteSublayer(u,E,m,y,s,O,n)}(0,U.sM)("featureCollection.layers",u,e)}get textLayer(){return this._findSublayer("textLayer")}load(t){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},t)),Promise.resolve(this)}read(t,e){"featureCollection"in t&&(t=(0,S.o8)(t),Object.assign(t,t.featureCollection)),super.read(t,e)}beforeSave(){var t=this;return(0,R.A)(function*(){if(null==t.sublayers)return;let e=null;const r=[];for(const y of t.sublayers)for(const s of y.graphics)if(null!=s.geometry){const _=s.geometry;e?(0,x.aI)(_.spatialReference,e)||((0,c.canProjectWithoutEngine)(_.spatialReference,e)||(0,c.isLoaded)()||(yield(0,c.load)()),s.geometry=(0,c.project)(_,e)):e=_.spatialReference,r.push(s)}const n=yield(0,J.el)(r.map(y=>y.geometry));r.forEach((y,s)=>y.geometry=n[s])})()}_findSublayer(t){return null==this.sublayers?null:this.sublayers?.find(e=>e.id===t)??null}_writeMapNoteSublayer(t,e,r,n,y,s,_){const u=[];if(null!=e){for(const O of e.graphics)this._writeMapNote(u,O,r.geometryType,_);this._normalizeObjectIds(u,j),t.push({layerDefinition:{name:e.title,drawingInfo:{renderer:{type:"simple",symbol:(0,S.o8)(r.identifyingSymbol)}},id:e.layerId,geometryType:r.geometryTypeJSON,minScale:n,maxScale:y,objectIdField:"OBJECTID",fields:[j.toJSON(),q.toJSON()],spatialReference:s},featureSet:{features:u,geometryType:r.geometryTypeJSON}})}}_writeMapNote(t,e,r,n){if(null==e)return;const{geometry:y,symbol:s,popupTemplate:_}=e;if(null==y)return;if(y.type!==r)return void n?.messages?.push(new b.A("map-notes-layer:invalid-geometry-type",`Geometry "${y.type}" cannot be saved in "${r}" layer`,{graphic:e}));if(null==s)return void n?.messages?.push(new b.A("map-notes-layer:no-symbol","Skipping map notes with no symbol",{graphic:e}));const u={attributes:{...e.attributes},geometry:y.toJSON(),symbol:s.toJSON()};null!=_&&(u.popupInfo=_.toJSON()),t.push(u)}_normalizeObjectIds(t,e){const r=e.name;let n=(0,F.H)(r,t)+1;const y=new Set;for(const s of t){s.attributes||(s.attributes={});const{attributes:_}=s;(null==_[r]||y.has(_[r]))&&(_[r]=n++),y.add(_[r])}}};(0,l._)([(0,i.MZ)({readOnly:!0})],a.prototype,"capabilities",void 0),(0,l._)([(0,f.w)(["portal-item","web-map"],"capabilities",["layers"])],a.prototype,"readCapabilities",null),(0,l._)([(0,i.MZ)({readOnly:!0})],a.prototype,"featureCollections",void 0),(0,l._)([(0,f.w)(["web-map","portal-item"],"featureCollections",["layers"])],a.prototype,"readFeatureCollections",null),(0,l._)([(0,i.MZ)({readOnly:!0,json:{origins:{"web-map":{write:{enabled:!0,target:"featureCollection"}}}}})],a.prototype,"featureCollectionJSON",void 0),(0,l._)([(0,f.w)(["web-map","portal-item"],"featureCollectionJSON",["featureCollection"])],a.prototype,"readLegacyfeatureCollectionJSON",null),(0,l._)([(0,i.MZ)({readOnly:!0,json:{read:!0,write:{enabled:!0,ignoreOrigin:!0}}})],a.prototype,"featureCollectionType",void 0),(0,l._)([(0,i.MZ)({readOnly:!0})],a.prototype,"fullExtent",null),(0,l._)([(0,i.MZ)({readOnly:!0,json:{origins:{"web-map":{write:{target:"featureCollection.showLegend",overridePolicy(){return{enabled:null!=this.featureCollectionJSON}}}}}}})],a.prototype,"legendEnabled",void 0),(0,l._)([(0,i.MZ)({type:["show","hide","hide-children"]})],a.prototype,"listMode",void 0),(0,l._)([(0,i.MZ)({type:Number,nonNullable:!0,json:{write:!1}})],a.prototype,"minScale",void 0),(0,l._)([(0,f.w)(["web-map","portal-item"],"minScale",["layers"])],a.prototype,"readMinScale",null),(0,l._)([(0,i.MZ)({type:Number,nonNullable:!0,json:{write:!1}})],a.prototype,"maxScale",void 0),(0,l._)([(0,f.w)(["web-map","portal-item"],"maxScale",["layers"])],a.prototype,"readMaxScale",null),(0,l._)([(0,i.MZ)({readOnly:!0})],a.prototype,"multipointLayer",null),(0,l._)([(0,i.MZ)({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],a.prototype,"operationalLayerType",void 0),(0,l._)([(0,i.MZ)({readOnly:!0})],a.prototype,"pointLayer",null),(0,l._)([(0,i.MZ)({readOnly:!0})],a.prototype,"polygonLayer",null),(0,l._)([(0,i.MZ)({readOnly:!0})],a.prototype,"polylineLayer",null),(0,l._)([(0,i.MZ)({type:M.A})],a.prototype,"spatialReference",void 0),(0,l._)([(0,f.w)(["web-map","portal-item"],"spatialReference",["layers"])],a.prototype,"readSpatialReference",null),(0,l._)([(0,i.MZ)({readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],a.prototype,"sublayers",void 0),(0,l._)([(0,f.w)("web-map","sublayers",["layers"])],a.prototype,"readSublayers",null),(0,l._)([(0,K.K)("web-map","sublayers")],a.prototype,"writeSublayers",null),(0,l._)([(0,i.MZ)({readOnly:!0})],a.prototype,"textLayer",null),(0,l._)([(0,i.MZ)()],a.prototype,"title",void 0),(0,l._)([(0,i.MZ)({readOnly:!0,json:{read:!1}})],a.prototype,"type",void 0),a=(0,l._)([(0,v.$)("esri.layers.MapNotesLayer")],a);const ee=a}}]);