"use strict";(self.webpackChunkangular_18_test=self.webpackChunkangular_18_test||[]).push([[9078],{10581:(W,R,p)=>{p.d(R,{L0:()=>x,Ot:()=>C,W4:()=>A,uV:()=>_});var o=p(8189),I=p(71065),s=p(85211),l=(p(3248),p(35150),p(40707),p(15463)),d=p(76576);let A=class extends I.oY{constructor(){super(...arguments),this.nodesPerPage=null,this.rootIndex=0,this.lodSelectionMetricType=null}};(0,o._)([(0,s.MZ)({type:Number})],A.prototype,"nodesPerPage",void 0),(0,o._)([(0,s.MZ)({type:Number})],A.prototype,"rootIndex",void 0),(0,o._)([(0,s.MZ)({type:String})],A.prototype,"lodSelectionMetricType",void 0),A=(0,o._)([(0,d.$)("esri.layers.support.I3SLayerDefinitions.I3SNodePageDefinition")],A);let D=class extends I.oY{constructor(){super(...arguments),this.factor=1}};(0,o._)([(0,s.MZ)({type:Number,json:{read:{source:"textureSetDefinitionId"}}})],D.prototype,"id",void 0),(0,o._)([(0,s.MZ)({type:Number})],D.prototype,"factor",void 0),D=(0,o._)([(0,d.$)("esri.layers.support.I3SLayerDefinitions.I3SMaterialTexture")],D);let M=class extends I.oY{constructor(){super(...arguments),this.baseColorFactor=[1,1,1,1],this.baseColorTexture=null,this.metallicRoughnessTexture=null,this.metallicFactor=1,this.roughnessFactor=1}};(0,o._)([(0,s.MZ)({type:[Number]})],M.prototype,"baseColorFactor",void 0),(0,o._)([(0,s.MZ)({type:D})],M.prototype,"baseColorTexture",void 0),(0,o._)([(0,s.MZ)({type:D})],M.prototype,"metallicRoughnessTexture",void 0),(0,o._)([(0,s.MZ)({type:Number})],M.prototype,"metallicFactor",void 0),(0,o._)([(0,s.MZ)({type:Number})],M.prototype,"roughnessFactor",void 0),M=(0,o._)([(0,d.$)("esri.layers.support.I3SLayerDefinitions.I3SMaterialPBRMetallicRoughness")],M);let _=class extends I.oY{constructor(){super(...arguments),this.alphaMode="opaque",this.alphaCutoff=.25,this.doubleSided=!1,this.cullFace="none",this.normalTexture=null,this.occlusionTexture=null,this.emissiveTexture=null,this.emissiveFactor=null,this.pbrMetallicRoughness=null}};(0,o._)([(0,l.e)({opaque:"opaque",mask:"mask",blend:"blend"})],_.prototype,"alphaMode",void 0),(0,o._)([(0,s.MZ)({type:Number})],_.prototype,"alphaCutoff",void 0),(0,o._)([(0,s.MZ)({type:Boolean})],_.prototype,"doubleSided",void 0),(0,o._)([(0,l.e)({none:"none",back:"back",front:"front"})],_.prototype,"cullFace",void 0),(0,o._)([(0,s.MZ)({type:D})],_.prototype,"normalTexture",void 0),(0,o._)([(0,s.MZ)({type:D})],_.prototype,"occlusionTexture",void 0),(0,o._)([(0,s.MZ)({type:D})],_.prototype,"emissiveTexture",void 0),(0,o._)([(0,s.MZ)({type:[Number]})],_.prototype,"emissiveFactor",void 0),(0,o._)([(0,s.MZ)({type:M})],_.prototype,"pbrMetallicRoughness",void 0),_=(0,o._)([(0,d.$)("esri.layers.support.I3SLayerDefinitions.I3SMaterialDefinition")],_);let E=class extends I.oY{};(0,o._)([(0,s.MZ)({type:String,json:{read:{source:["name","index"],reader:(B,j)=>B??`${j.index}`}}})],E.prototype,"name",void 0),(0,o._)([(0,l.e)({jpg:"jpg",png:"png",dds:"dds","ktx-etc2":"ktx-etc2",ktx2:"ktx2",basis:"basis"})],E.prototype,"format",void 0),E=(0,o._)([(0,d.$)("esri.layers.support.I3SLayerDefinitions.I3STextureFormat")],E);let C=class extends I.oY{constructor(){super(...arguments),this.atlas=!1}};(0,o._)([(0,s.MZ)({type:[E]})],C.prototype,"formats",void 0),(0,o._)([(0,s.MZ)({type:Boolean})],C.prototype,"atlas",void 0),C=(0,o._)([(0,d.$)("esri.layers.support.I3SLayerDefinitions.I3STextureSetDefinition")],C);let S=class extends I.oY{};(0,o._)([(0,l.e)({Float32:"Float32",UInt64:"UInt64",UInt32:"UInt32",UInt16:"UInt16",UInt8:"UInt8"})],S.prototype,"type",void 0),(0,o._)([(0,s.MZ)({type:Number})],S.prototype,"component",void 0),S=(0,o._)([(0,d.$)("esri.layers.support.I3SLayerDefinitions.I3SGeometryAttribute")],S);let y=class extends I.oY{};(0,o._)([(0,l.e)({draco:"draco"})],y.prototype,"encoding",void 0),(0,o._)([(0,s.MZ)({type:[String]})],y.prototype,"attributes",void 0),y=(0,o._)([(0,d.$)("esri.layers.support.I3SLayerDefinitions.I3SGeometryCompressedAttributes")],y);let g=class extends I.oY{constructor(){super(...arguments),this.offset=0}};(0,o._)([(0,s.MZ)({type:Number})],g.prototype,"offset",void 0),(0,o._)([(0,s.MZ)({type:S})],g.prototype,"position",void 0),(0,o._)([(0,s.MZ)({type:S})],g.prototype,"normal",void 0),(0,o._)([(0,s.MZ)({type:S})],g.prototype,"uv0",void 0),(0,o._)([(0,s.MZ)({type:S})],g.prototype,"color",void 0),(0,o._)([(0,s.MZ)({type:S})],g.prototype,"uvRegion",void 0),(0,o._)([(0,s.MZ)({type:S})],g.prototype,"featureId",void 0),(0,o._)([(0,s.MZ)({type:S})],g.prototype,"faceRange",void 0),(0,o._)([(0,s.MZ)({type:y})],g.prototype,"compressedAttributes",void 0),g=(0,o._)([(0,d.$)("esri.layers.support.I3SLayerDefinitions.I3SGeometryBuffer")],g);let x=class extends I.oY{};(0,o._)([(0,l.e)({triangle:"triangle"})],x.prototype,"topology",void 0),(0,o._)([(0,s.MZ)()],x.prototype,"geometryBuffers",void 0),x=(0,o._)([(0,d.$)("esri.layers.support.I3SLayerDefinitions.I3SGeometryDefinition")],x)},86537:(W,R,p)=>{p.d(R,{L:()=>A});var o=p(10467),I=p(77469),s=p(89563),O=p(5922),U=p(56492),Z=p(68438),l=p(73874),d=p(46577);function A(i,m){return D.apply(this,arguments)}function D(){return D=(0,o.A)(function*(i,m){const v=(0,Z.qg)(i);if(!v)throw new O.A("invalid-url","Invalid scene service url");const c={...m,sceneServerUrl:v.url.path,layerId:v.sublayer??void 0};if(c.sceneLayerItem??=(yield function M(i){return _.apply(this,arguments)}(c)),null==c.sceneLayerItem)return g(c.sceneServerUrl.replace("/SceneServer","/FeatureServer"),c);const P=yield function B(i){return j.apply(this,arguments)}(c);if(!P?.url)throw new O.A("related-service-not-found","Could not find feature service through portal item relationship");c.featureServiceItem=P;const F=yield g(P.url,c);return F.portalItem=P,F}),D.apply(this,arguments)}function _(){return _=(0,o.A)(function*(i){const m=(yield E(i)).serviceItemId;if(!m)return null;const v=new d.default({id:m,apiKey:i.apiKey}),c=yield function S(i){return y.apply(this,arguments)}(i);null!=c&&(v.portal=new l.A({url:c}));try{return v.load({signal:i.signal})}catch(P){return(0,U.QP)(P),null}}),_.apply(this,arguments)}function E(i){return C.apply(this,arguments)}function C(){return(C=(0,o.A)(function*(i){if(i.rootDocument)return i.rootDocument;const m={query:{f:"json",...i.customParameters,token:i.apiKey},responseType:"json",signal:i.signal};try{const v=yield(0,s.A)(i.sceneServerUrl,m);i.rootDocument=v.data}catch{i.rootDocument={}}return i.rootDocument})).apply(this,arguments)}function y(){return(y=(0,o.A)(function*(i){const m=I.id?.findServerInfo(i.sceneServerUrl);if(m?.owningSystemUrl)return m.owningSystemUrl;const v=i.sceneServerUrl.replace(/(.*\/rest)\/.*/i,"$1")+"/info";try{const c=(yield(0,s.A)(v,{query:{f:"json"},responseType:"json",signal:i.signal})).data.owningSystemUrl;if(c)return c}catch(c){(0,U.QP)(c)}return null})).apply(this,arguments)}function g(i,m){return x.apply(this,arguments)}function x(){return(x=(0,o.A)(function*(i,m){const v=(0,Z.qg)(i);if(!v)throw new O.A("invalid-feature-service-url","Invalid feature service url");const c=v.url.path,P=m.layerId;if(null==P)return{serverUrl:c};const F=E(m),K=m.featureServiceItem?yield m.featureServiceItem.fetchData("json"):null,t=(K?.layers?.[0]||K?.tables?.[0])?.customParameters,r=h=>{const L={query:{f:"json",...t},responseType:"json",authMode:h,signal:m.signal};return(0,s.A)(c,L)},u=r("anonymous").catch(()=>r("no-prompt")),[a,f]=yield Promise.all([u,F]),T=f?.layers,b=a.data&&a.data.layers;if(!Array.isArray(b))throw new Error("expected layers array");if(Array.isArray(T)){for(let h=0;h<Math.min(T.length,b.length);h++)if(T[h].id===P)return{serverUrl:c,layerId:b[h].id}}else if(null!=P&&P<b.length)return{serverUrl:c,layerId:b[P].id};throw new Error("could not find matching associated sublayer")})).apply(this,arguments)}function j(){return(j=(0,o.A)(function*({sceneLayerItem:i,signal:m}){if(!i)return null;try{const v=(yield i.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:m})).find(P=>"Feature Service"===P.type)||null;if(!v)return null;const c=new d.default({portal:v.portal,id:v.id});return yield c.load(),c}catch(v){return(0,U.QP)(v),null}})).apply(this,arguments)}},75783:(W,R,p)=>{p.d(R,{P:()=>o});const o={analytics:{supportsCacheHint:!1},attachment:{supportsContentType:!1,supportsExifInfo:!1,supportsKeywords:!1,supportsName:!1,supportsSize:!1,supportsCacheHint:!1,supportsResize:!1},data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsAsyncApplyEdits:!1,zDefault:void 0},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1,supportsAsyncConvert3D:!1},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},query:{maxRecordCount:0,maxRecordCountFactor:0,standardMaxRecordCount:0,supportsCacheHint:!1,supportsCentroid:!1,supportsCompactGeometry:!1,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByAnonymous:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsSqlExpression:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsStatistics:!1,tileMaxRecordCount:0}}},73812:(W,R,p)=>{p.d(R,{$7:()=>m,B:()=>i,M7:()=>P,XF:()=>c,tW:()=>v,w7:()=>Z}),p(82663);var I=p(82575);function Z(t,r){return function O(t,r){return r?.mode?r.mode:function s(t){return t?F:K}(t).mode}(null!=t&&t.hasZ,r)}function i(t,r,u){return u&&u.mode!==r?`${t} only support ${r} elevation mode`:null}function m(t,r,u){return u?.mode===r?`${t} do not support ${r} elevation mode`:null}function v(t,r){return null!=r?.featureExpressionInfo&&"0"!==r.featureExpressionInfo.expression?`${t} do not support featureExpressionInfo`:null}function c(t,r){r&&t.warn(".elevationInfo=",r)}function P(t){return(t?.offset??0)*(0,I.Ao)(t?.unit)}const F={mode:"absolute-height",offset:0},K={mode:"on-the-ground",offset:null}},64935:(W,R,p)=>{p.d(R,{D8:()=>U,TO:()=>s});var o=p(10467),I=p(86300);function s(l){return O.apply(this,arguments)}function O(){return(O=(0,o.A)(function*(l,d=l.popupTemplate){if(null==d)return[];const A=yield d.getRequiredFields(l.fieldsIndex),{lastEditInfoEnabled:D}=d,{objectIdField:M,typeIdField:_,globalIdField:E,relationships:C}=l;if(A.includes("*"))return["*"];const S=D?(0,I.eX)(l):[],y=(0,I.DB)(l.fieldsIndex,[...A,...S]);return _&&y.push(_),y&&M&&l.fieldsIndex?.has(M)&&!y.includes(M)&&y.push(M),y&&E&&l.fieldsIndex?.has(E)&&!y.includes(E)&&y.push(E),C&&C.forEach(g=>{const{keyField:x}=g;y&&x&&l.fieldsIndex?.has(x)&&!y.includes(x)&&y.push(x)}),y})).apply(this,arguments)}function U(l,d){return l.popupTemplate?l.popupTemplate:null!=d&&d.defaultPopupTemplateEnabled&&null!=l.defaultPopupTemplate?l.defaultPopupTemplate:null}}}]);