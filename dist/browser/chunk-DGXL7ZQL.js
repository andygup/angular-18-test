import{a as L,i as v,o as G}from"./chunk-SYNRDAMR.js";import{a as m}from"./chunk-VI3FHFCE.js";import{a as S}from"./chunk-LP5GLSKB.js";import{a as s}from"./chunk-LTDZH3EN.js";import{v as w}from"./chunk-AANS6QE5.js";import{H as n,N as I,O as T}from"./chunk-RMOOROEO.js";import{H as u,I as g,S as b}from"./chunk-ZP7G4HN4.js";import{a as i}from"./chunk-W3WDPWBE.js";import{u as l}from"./chunk-3DV77WOO.js";import{a as p,b as c}from"./chunk-3T7TAUC2.js";var A={ArcGISAnnotationLayer:!0,ArcGISDimensionLayer:!0,ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISStreamLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BingMapsAerial:!0,BingMapsHybrid:!0,BingMapsRoad:!0,CatalogLayer:!0,CSV:!0,GeoJSON:!0,GeoRSS:!0,GroupLayer:!0,KML:!0,KnowledgeGraphLayer:!0,MediaLayer:!0,OGCFeatureLayer:!0,OrientedImageryLayer:!0,SubtypeGroupLayer:!0,VectorTileLayer:!0,WFS:!0,WMS:!0,WebTiledLayer:!0},h={ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BingMapsAerial:!0,BingMapsHybrid:!0,BingMapsRoad:!0,OpenStreetMap:!0,VectorTileLayer:!0,WMS:!0,WebTiledLayer:!0},M={ArcGISFeatureLayer:!0,SubtypeGroupTable:!0},f={"web-scene/operational-layers":{ArcGISDimensionLayer:!0,ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISTiledElevationServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BuildingSceneLayer:!0,CatalogLayer:!0,CSV:!0,GeoJSON:!0,GroupLayer:!0,IntegratedMesh3DTilesLayer:!0,IntegratedMeshLayer:!0,KML:!0,LineOfSightLayer:!0,MediaLayer:!0,OGCFeatureLayer:!0,PointCloudLayer:!0,RasterDataLayer:!0,VectorTileLayer:!0,Voxel:!0,WFS:!0,WMS:!0,WebTiledLayer:!0},"web-scene/basemap":{ArcGISImageServiceLayer:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,WMS:!0,WebTiledLayer:!0},"web-scene/ground":{ArcGISTiledElevationServiceLayer:!0,RasterDataElevationLayer:!0},"web-scene/tables":{ArcGISFeatureLayer:!0},"web-map/operational-layers":A,"web-map/basemap":h,"web-map/tables":M,"link-chart/operational-layers":c(p({},A),{LinkChartLayer:!0}),"link-chart/basemap":h,"link-chart/tables":M,"portal-item/operational-layers":{ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISStreamLayer:!0,ArcGISTiledImageServiceLayer:!0,BuildingSceneLayer:!0,IntegratedMesh3DTilesLayer:!0,IntegratedMeshLayer:!0,MediaLayer:!0,OrientedImageryLayer:!0,PointCloudLayer:!0,SubtypeGroupLayer:!0}};var _=O=>{let a=class extends O{constructor(){super(...arguments),this.persistenceEnabled=!0,this.title=null}readId(r,e,t){return t?.portalItem?.type==="Group Layer"?void 0:r}writeListMode(r,e,t,o){(o&&o.layerContainerType==="ground"||r&&T(this,t,{},o))&&(e[t]=r)}writeOperationalLayerType(r,e,t,o){r&&o?.layerContainerType!=="tables"&&(e.layerType=r)}writeTitle(r,e){e.title=r??"Layer"}readTimeExtent(r){return r?m.fromArray(r):null}writeTimeExtent(r,e,t,o){r&&o.layerContainerType!=="tables"&&(r.isEmpty?o?.messages&&o.messages.push(new l("layer:invalid-visibilityTimeExtent","visibilityTimeExtent cannot be empty")):e[t]=r.toArray())}read(r,e){e&&(e.layer=this),I(this,r,t=>super.read(r,t),e)}write(r,e){if(!this.persistenceEnabled&&!e?.ignorePersistenceEnabled)return null;if(e?.origin){let y=`${e.origin}/${e.layerContainerType||"operational-layers"}`,d=!!f[y]?.[this.operationalLayerType];if(this.operationalLayerType==="ArcGISTiledElevationServiceLayer"&&y==="web-scene/operational-layers"&&(d=!1),this.operationalLayerType==="ArcGISDimensionLayer"&&y==="web-map/operational-layers"&&(d=!1),!d)return e.messages?.push(new l("layer:unsupported",`Layers (${this.title}, ${this.id}) of type '${this.declaredClass}' are not supported in the context of '${y}'`,{layer:this})),null}let t=super.write(r,c(p({},e),{layer:this})),o=!!e&&!!e.messages&&!!e.messages.filter(y=>y instanceof l&&y.name==="web-document-write:property-required").length;return w(t?.url)?(e?.messages?.push(new l("layer:invalid-url",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' using a Blob URL cannot be written to web scenes and web maps`,{layer:this})),null):!this.url&&o?null:t}beforeSave(){}};return i([n({type:String,json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}},"portal-item":{write:!1}}}})],a.prototype,"id",void 0),i([S("id",["id"])],a.prototype,"readId",null),i([n(G)],a.prototype,"listMode",void 0),i([s("listMode")],a.prototype,"writeListMode",null),i([n({type:String,readOnly:!0,json:{read:!1,write:{target:"layerType",ignoreOrigin:!0},origins:{"portal-item":{write:!1},"web-scene":{name:"layerType",read:!1,write:{enabled:!0,ignoreOrigin:!0,layerContainerTypes:L}}}}})],a.prototype,"operationalLayerType",void 0),i([s("operationalLayerType")],a.prototype,"writeOperationalLayerType",null),i([n(v)],a.prototype,"opacity",void 0),i([n({type:Boolean,readOnly:!1})],a.prototype,"persistenceEnabled",void 0),i([n({type:String,json:{write:{ignoreOrigin:!0,writerEnsuresNonNull:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0,writerEnsuresNonNull:!0}},"portal-item":{write:!1}}},value:"Layer"})],a.prototype,"title",void 0),i([s("title"),s(["web-scene"],"title")],a.prototype,"writeTitle",null),i([n({type:m,json:{origins:{"web-scene":{write:{layerContainerTypes:L}}}}})],a.prototype,"visibilityTimeExtent",void 0),i([S("visibilityTimeExtent")],a.prototype,"readTimeExtent",null),i([s(["portal-item","web-map","web-scene"],"visibilityTimeExtent",{visibilityTimeExtent:{type:[[u,g]]}})],a.prototype,"writeTimeExtent",null),i([n({type:Boolean,json:{origins:{"web-scene":{name:"visibility",write:{enabled:!0,layerContainerTypes:L}}},name:"visibility",write:!0}})],a.prototype,"visible",void 0),a=i([b("esri.layers.mixins.OperationalLayer")],a),a};export{_ as a};