"use strict";(self.webpackChunkangular_18_test=self.webpackChunkangular_18_test||[]).push([[1943],{11943:(Ue,D,n)=>{n.r(D),n.d(D,{default:()=>Ve});var u=n(10467),i=n(8189),N=n(90660),E=n(31178),m=n(5922),te=n(4879),Q=n(39693),P=n(56492),B=n(48900),x=n(63484),H=n(45272),o=n(85211),re=(n(3248),n(35150)),I=(n(40707),n(17221)),J=n(76576),ne=n(95478),ie=n(94376),se=n(25936),oe=n(93410),le=n(23e3),ae=n(58277),de=n(29674),ue=n(17049),pe=n(85551),ye=n(1151),he=n(33036),fe=n(84311),ce=n(68438),F=n(22329),h=n(39729),X=n(3404),w=n(86300),ve=n(92165),me=n(79122),ge=(n(70176),n(92089),n(9826),n(15317),n(38582)),R=n(96128),be=n(13318),Ae=(n(85718),n(3046)),M=n(77806),Se=n(55098),Fe=n(89221),Me=n(50305),Ie=n(71224),Oe=n(727),K=n(69741),Ze=n(20329),je=n(73975),z=n(87086),Te=n(41843),G=n(91644);const W={key:"type",base:ge.A,errorContext:"renderer",typeMap:{simple:R.A,"unique-value":be.A,"class-breaks":me.A}},Y=(0,X.p)(),q=(0,Ie.C)({types:W});let Le=0;function O(e){const t=e.json.write;return"object"==typeof t?t.ignoreOrigin=!0:e.json.write={ignoreOrigin:!0},e}function Ee(e){switch(e){case"point":case"multipoint":return G.UK.clone();case"polyline":return G.A7.clone();case"polygon":case"multipatch":return G.Cx.clone();default:return null}}function k(e,t){return null==e?null:t.subtypes?.find(r=>r.code===e)}function xe(e,t){let r=null;switch(t.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":r="point";break;case"esriGeometryPolyline":r="line";break;case"esriGeometryPolygon":case"esriGeometryMultiPatch":r="polygon";break;default:r=null}const s={},a=k(e,t);if(null!=a){const{defaultValues:d}=a;for(const y in d)s[y]=d[y]}return s[t.subtypeField]=e,new K.A({name:"New Feature",drawingTool:r,prototype:{attributes:s}})}let l=class extends((0,Q.P)((0,N.O)((0,Ae.sA)(Se.A)))){constructor(e){super(e),this.charts=null,this.editingEnabled=!0,this.fieldOverrides=null,this.fieldsIndex=null,this.formTemplate=null,this.id=`${Date.now().toString(16)}-subtype-sublayer-${Le++}`,this.type="subtype-sublayer",this.labelsVisible=!0,this.labelingInfo=null,this.layerType="ArcGISFeatureLayer",this.legendEnabled=!0,this.listMode="show",this.minScale=0,this.maxScale=0,this.opacity=1,this.parent=null,this.popupEnabled=!0,this.popupTemplate=null,this.subtypeCode=null,this.templates=null,this.title=null,this.visible=!0}load(e){return(0,w.yp)(this.renderer,this.fieldsIndex),Promise.resolve(this)}get capabilities(){return this.parent?.capabilities}get effectiveCapabilities(){return this.parent?.effectiveCapabilities}get effectiveEditingEnabled(){const{parent:e}=this;return e?e.effectiveEditingEnabled&&this.editingEnabled:this.editingEnabled}get elevationInfo(){return this.parent?.elevationInfo}writeFieldOverrides(e,t,r){const{fields:s,parent:a}=this;let d;if(s){d=[];let y=0;s.forEach(({name:f,alias:g,editable:Z,visible:j})=>{if(!j)return;const c=a?.fields?.find($=>$.name===f);if(!c)return;const b={name:f};let S=!1;g!==c.alias&&(b.alias=g,S=!0),Z!==c.editable&&(b.editable=Z,S=!0),d.push(b),S&&y++}),0===y&&d.length===s.length&&(d=null)}else d=(0,M.o8)(e);d?.length&&(0,Fe.sM)(r,d,t)}get fields(){const{parent:e,fieldOverrides:t,subtypeCode:r}=this,s=e?.fields;if(!e||!s?.length)return null;const{subtypes:a,subtypeField:d}=e,y=a?.find(j=>j.code===r),f=y?.defaultValues,g=y?.domains,Z=[];for(const j of s){const c=j.clone(),{name:b}=c,S=t?.find(C=>C.name===b);if(c.visible=!t||!!S,S){const{alias:C,editable:$e}=S;C&&(c.alias=C),!1===$e&&(c.editable=!1)}c.defaultValue=b===d?r:f?.[b]??null;const U=g?.[b]??null;c.domain=b===d?null:U?"inherited"===U.type?c.domain:U.clone():null,Z.push(c)}return Z}get floorInfo(){return this.parent?.floorInfo}get geometryType(){return this.parent?.geometryType}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return{minScale:e,maxScale:t}}get objectIdField(){return this.parent||re.A.getLogger(this).error(A("objectIdField")),this.parent?.objectIdField}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){(0,w.yp)(e,this.fieldsIndex),this._override("renderer",e)}get renderer(){if(this._isOverridden("renderer"))return this._get("renderer");const{parent:e}=this;return e&&!e.isTable&&"mesh"!==e.geometryType?function Ce(e){return new R.A({symbol:Ee(e)})}(e.geometryType):null}readRendererFromService(e,t,r){if("Table"===t.type)return null;const s=t.drawingInfo?.renderer,a=q(s,t,r);let d;const{subtypeCode:y}=this;if(null!=y&&function Pe(e,t){return!(!t||"unique-value"!==e?.type||null==e.field||e.field.toLowerCase()!==t.toLowerCase()||e.field2||e.field3||e.valueExpression)}(a,t.subtypeField)){const f=a.uniqueValueInfos?.find(({value:g})=>(g="number"==typeof g?String(g):g)===String(y));f&&(d=new R.A({symbol:f.symbol}))}else"simple"!==a?.type||a.visualVariables?.length||(d=a);return d}readRenderer(e,t,r){const s=t?.layerDefinition?.drawingInfo?.renderer;return s?s.visualVariables?.some(d=>"rotationInfo"!==d.type)?void 0:q(s,t,r)||void 0:void 0}get spatialReference(){return this.parent?.spatialReference}get subtypeField(){return this.parent?.subtypeField}readTemplatesFromService(e,t){return[xe(this.subtypeCode,t)]}readTitleFromService(e,t){const r=k(this.subtypeCode,t);return null!=r?r.name:null}get url(){return this.parent?.url}get userHasUpdateItemPrivileges(){return!!this.parent?.userHasUpdateItemPrivileges}addAttachment(e,t){var r=this;return(0,u.A)(function*(){const{parent:s}=r;if(!s)throw A("addAttachment");if(e.getAttribute(s.subtypeField)!==r.subtypeCode)throw new m.A("subtype-sublayer:addAttachment","The feature provided does not belong to this SubtypeSublayer");return s.addAttachment(e,t)})()}updateAttachment(e,t,r){var s=this;return(0,u.A)(function*(){const{parent:a}=s;if(!a)throw A("updateAttachment");if(e.getAttribute(a.subtypeField)!==s.subtypeCode)throw new m.A("subtype-sublayer:updateAttachment","The feature provided does not belong to this SubtypeSublayer");return a.updateAttachment(e,t,r)})()}deleteAttachments(e,t){var r=this;return(0,u.A)(function*(){const{parent:s}=r;if(!s)throw A("deleteAttachments");if(e.getAttribute(s.subtypeField)!==r.subtypeCode)throw new m.A("subtype-sublayer:deleteAttachments","The feature provided does not belong to this SubtypeSublayer");return s.deleteAttachments(e,t)})()}applyEdits(e,t){var r=this;return(0,u.A)(function*(){if(!r.parent)throw A("applyEdits");return r.parent.applyEdits(e,t)})()}createPopupTemplate(e){let t=this;const{parent:r,fields:s,title:a}=this;if(r){const{displayField:d,editFieldsInfo:y,objectIdField:f}=r;t={displayField:d,editFieldsInfo:y,fields:s,objectIdField:f,title:a}}return(0,Te.tn)(t,e)}createQuery(){if(!this.parent)throw A("createQuery");const e=(0,h.VZ)(this.parent);return e.where=(0,x.m)(`${this.parent.subtypeField}=${this.subtypeCode}`,this.parent.definitionExpression),e}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e){return this._getLayerDomain(e)}queryAttachments(e,t){var r=this;return(0,u.A)(function*(){const s=yield r.load();if(!s.parent)throw A("queryAttachments");const a=e.clone();return a.where=_(a.where,s.parent.subtypeField,s.subtypeCode),s.parent.queryAttachments(e,t)})()}queryFeatures(e,t){var r=this;return(0,u.A)(function*(){const s=yield r.load();if(!s.parent)throw A("queryFeatures");const a=z.A.from(e)??s.createQuery();return null!=e&&(a.where=_(a.where,s.parent.subtypeField,s.subtypeCode)),s.parent.queryFeatures(a,t)})()}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}};(0,i._)([(0,o.MZ)({readOnly:!0,json:{read:!1}})],l.prototype,"capabilities",null),(0,i._)([(0,o.MZ)({readOnly:!0,json:{read:!1}})],l.prototype,"effectiveCapabilities",null),(0,i._)([(0,o.MZ)({json:{write:{ignoreOrigin:!0}}})],l.prototype,"charts",void 0),(0,i._)([(0,o.MZ)({type:Boolean,nonNullable:!0,json:{name:"enableEditing",write:{ignoreOrigin:!0}}})],l.prototype,"editingEnabled",void 0),(0,i._)([(0,o.MZ)({type:Boolean,readOnly:!0})],l.prototype,"effectiveEditingEnabled",null),(0,i._)([(0,o.MZ)({readOnly:!0,json:{read:!1}})],l.prototype,"elevationInfo",null),(0,i._)([(0,o.MZ)({json:{name:"layerDefinition.fieldOverrides",origins:{service:{read:!1}},write:{ignoreOrigin:!0,allowNull:!0}}})],l.prototype,"fieldOverrides",void 0),(0,i._)([(0,Me.K)("fieldOverrides")],l.prototype,"writeFieldOverrides",null),(0,i._)([(0,o.MZ)({...Y.fields,readOnly:!0,json:{read:!1}})],l.prototype,"fields",null),(0,i._)([(0,o.MZ)(Y.fieldsIndex)],l.prototype,"fieldsIndex",void 0),(0,i._)([(0,o.MZ)({readOnly:!0,json:{read:!1}})],l.prototype,"floorInfo",null),(0,i._)([(0,o.MZ)({type:Oe.A,json:{name:"formInfo",write:{ignoreOrigin:!0}}})],l.prototype,"formTemplate",void 0),(0,i._)([(0,o.MZ)({type:String,clonable:!1,readOnly:!0,json:{origins:{service:{read:!1},"portal-item":{read:!1}},write:{ignoreOrigin:!0}}})],l.prototype,"id",void 0),(0,i._)([(0,o.MZ)({readOnly:!0,json:{read:!1}})],l.prototype,"geometryType",null),(0,i._)([(0,o.MZ)({readOnly:!0,json:{read:!1}})],l.prototype,"type",void 0),(0,i._)([(0,o.MZ)(O((0,M.o8)(F.kF)))],l.prototype,"labelsVisible",void 0),(0,i._)([(0,o.MZ)({type:[Ze.A],json:{name:"layerDefinition.drawingInfo.labelingInfo",origins:{service:{read:!1}},read:{reader:je.w},write:{ignoreOrigin:!0}}})],l.prototype,"labelingInfo",void 0),(0,i._)([(0,o.MZ)({type:["ArcGISFeatureLayer"],readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],l.prototype,"layerType",void 0),(0,i._)([(0,o.MZ)(O((0,M.o8)(F.fV)))],l.prototype,"legendEnabled",void 0),(0,i._)([(0,o.MZ)({type:["show","hide"]})],l.prototype,"listMode",void 0),(0,i._)([(0,o.MZ)((()=>{const e=(0,M.o8)(F.hn);return e.json.origins.service.read=!1,O(e)})())],l.prototype,"minScale",void 0),(0,i._)([(0,o.MZ)((()=>{const e=(0,M.o8)(F.hG);return e.json.origins.service.read=!1,O(e)})())],l.prototype,"maxScale",void 0),(0,i._)([(0,o.MZ)({readOnly:!0})],l.prototype,"effectiveScaleRange",null),(0,i._)([(0,o.MZ)({readOnly:!0,json:{read:!1}})],l.prototype,"objectIdField",null),(0,i._)([(0,o.MZ)({type:Number,range:{min:0,max:1},nonNullable:!0,json:{write:{ignoreOrigin:!0}}})],l.prototype,"opacity",void 0),(0,i._)([(0,o.MZ)({clonable:!1})],l.prototype,"parent",void 0),(0,i._)([(0,o.MZ)(O((0,M.o8)(F.M6)))],l.prototype,"popupEnabled",void 0),(0,i._)([(0,o.MZ)({type:ve.A,json:{name:"popupInfo",write:{ignoreOrigin:!0}}})],l.prototype,"popupTemplate",void 0),(0,i._)([(0,o.MZ)({readOnly:!0})],l.prototype,"defaultPopupTemplate",null),(0,i._)([(0,o.MZ)({types:W,json:{write:{target:"layerDefinition.drawingInfo.renderer",ignoreOrigin:!0}}})],l.prototype,"renderer",null),(0,i._)([(0,I.w)("service","renderer",["drawingInfo.renderer","subtypeField","type"])],l.prototype,"readRendererFromService",null),(0,i._)([(0,I.w)("renderer",["layerDefinition.drawingInfo.renderer"])],l.prototype,"readRenderer",null),(0,i._)([(0,o.MZ)({readOnly:!0,json:{read:!1}})],l.prototype,"spatialReference",null),(0,i._)([(0,o.MZ)({type:Number,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],l.prototype,"subtypeCode",void 0),(0,i._)([(0,o.MZ)({readOnly:!0,json:{read:!1}})],l.prototype,"subtypeField",null),(0,i._)([(0,o.MZ)({type:[K.A],json:{name:"layerDefinition.templates",write:{ignoreOrigin:!0}}})],l.prototype,"templates",void 0),(0,i._)([(0,I.w)("service","templates",["geometryType","subtypeField","subtypes","type"])],l.prototype,"readTemplatesFromService",null),(0,i._)([(0,o.MZ)({type:String,json:{write:{ignoreOrigin:!0}}})],l.prototype,"title",void 0),(0,i._)([(0,I.w)("service","title",["subtypes"])],l.prototype,"readTitleFromService",null),(0,i._)([(0,o.MZ)({readOnly:!0,json:{read:!1}})],l.prototype,"url",null),(0,i._)([(0,o.MZ)({readOnly:!0})],l.prototype,"userHasUpdateItemPrivileges",null),(0,i._)([(0,o.MZ)({type:Boolean,nonNullable:!0,json:{name:"visibility",write:{ignoreOrigin:!0}}})],l.prototype,"visible",void 0),l=(0,i._)([(0,J.$)("esri.layers.support.SubtypeSublayer")],l);const _=(e,t,r)=>{const s=new RegExp(`${t}\\s*=\\s*\\d+`),a=`${t}=${r}`,d=e??"";return s.test(d)?d.replace(s,a):(0,x.m)(a,d)},A=e=>new m.A(`This sublayer must have a parent SubtypeGroupLayer in order to use ${e}`),T=l;var we=n(38488),Re=n(5540),L=n(71655);const v="SubtypeGroupLayer";function ee(e,t){return new m.A("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${t}`,{layer:e})}const V=(0,X.p)();let p=class extends((0,de.j)((0,ae.w6)((0,oe.dM)((0,fe.e)((0,he.j)((0,ye.J)((0,se.b)((0,ue.q)((0,pe.A)((0,Q.P)((0,le.d)((0,ie.p)((0,N.O)(ne.A)))))))))))))){constructor(...e){var t;super(...e),t=this,this._sublayerLookup=new Map,this.fields=null,this.fieldsIndex=null,this.outFields=null,this.sublayers=new(E.A.ofType(T)),this.supportedSourceTypes=new Set(["Feature Layer"]),this.timeInfo=null,this.title="Layer",this.type="subtype-group",this._debouncedSaveOperations=(0,P.sg)(function(){var r=(0,u.A)(function*(s,a,d){const{save:y,saveAs:f}=yield Promise.all([n.e(2076),n.e(9063)]).then(n.bind(n,90639));switch(s){case L.X.SAVE:return y(t,a);case L.X.SAVE_AS:return f(t,d,a)}});return function(s,a,d){return r.apply(this,arguments)}}()),this.addHandles((0,B.wB)(()=>this.sublayers,(r,s)=>this._handleSublayersChange(r,s),B.OH))}destroy(){this.source?.destroy()}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){var t=this;const r=null!=e?e.signal:null,s=this.loadFromPortal({supportedTypes:["Feature Service"]},e).catch(P.QP).then((0,u.A)(function*(){if(!t.url)throw new m.A("subtype-grouplayer:missing-url-or-source","SubtypeGroupLayer must be created with either a url or a portal item");if(null==t.layerId)throw new m.A("subtype-grouplayer:missing-layerid","layerId is required for a SubtypeGroupLayer created with url");return t._initLayerProperties(yield t.createGraphicsSource(r))})).then(()=>(0,h.VA)(this,"load",e));return this.addResolvingPromise(s),Promise.resolve(this)}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("gdbVersion"),this.commitProperty("historicMoment"),this.commitProperty("returnZ"),this.commitProperty("capabilities"),this.commitProperty("returnM"),(this._get("createQueryVersion")??0)+1}get editingEnabled(){return this.loaded&&null!=this.capabilities&&this.capabilities.operations.supportsEditing&&this.userHasEditingPrivileges}get effectiveEditingEnabled(){return(0,h.C$)(this)}get parsedUrl(){const e=(0,H.An)(this.url);return null!=e&&null!=this.layerId&&(e.path=(0,H.fj)(e.path,this.layerId.toString())),e}set source(e){this._get("source")!==e&&this._set("source",e)}readTitleFromService(e,{name:t}){return this.url?(0,ce.yG)(this.url,t):t}addAttachment(e,t){var r=this;return(0,u.A)(function*(){return(0,h.Xl)(r,e,t,v)})()}updateAttachment(e,t,r){var s=this;return(0,u.A)(function*(){return(0,h.bt)(s,e,t,r,v)})()}applyEdits(e,t){var r=this;return(0,u.A)(function*(){return(0,h.ct)(r,e,t)})()}on(e,t){return super.on(e,t)}createGraphicsSource(e){var t=this;return(0,u.A)(function*(){const{default:r}=yield(0,P.qr)(Promise.all([n.e(1732),n.e(1277),n.e(5434),n.e(3647),n.e(143),n.e(2767),n.e(5931),n.e(3718)]).then(n.bind(n,63718)),e);return new r({layer:t,supportedSourceTypes:t.supportedSourceTypes}).load({signal:e})})()}createQuery(){const e=(0,h.VZ)(this),t=this.sublayers.map(r=>r.subtypeCode);return e.where=(0,x.m)(`${this.subtypeField} IN (${t.join(",")})`,this.definitionExpression),e}deleteAttachments(e,t){var r=this;return(0,u.A)(function*(){return(0,h.mm)(r,e,t,v)})()}fetchRecomputedExtents(e){var t=this;return(0,u.A)(function*(){return(0,h.WP)(t,e,v)})()}findSublayerForFeature(e){const t=this.fieldsIndex.get(this.subtypeField);return this.findSublayerForSubtypeCode(e.attributes[t.name])}findSublayerForSubtypeCode(e){return this._sublayerLookup.get(e)}getFieldDomain(e,t){return this._getLayerDomain(e)}getField(e){return this.fieldsIndex.get(e)}loadAll(){return(0,te.g)(this,e=>{e(this.sublayers)})}queryAttachments(e,t){var r=this;return(0,u.A)(function*(){return(0,h.lV)(r,e,t,v)})()}queryFeatures(e,t){var r=this;return(0,u.A)(function*(){const s=yield r.load(),a=z.A.from(e)??s.createQuery(),d=a.outFields??[];d.includes(r.subtypeField)||(d.push(r.subtypeField),a.outFields=d);const y=yield s.source.queryFeatures(a,t);if(y?.features)for(const f of y.features)f.layer=f.sourceLayer=r.findSublayerForFeature(f);return y})()}queryObjectIds(e,t){var r=this;return(0,u.A)(function*(){return(0,h.sg)(r,e,t,v)})()}queryFeatureCount(e,t){var r=this;return(0,u.A)(function*(){return(0,h.Ye)(r,e,t,v)})()}queryExtent(e,t){var r=this;return(0,u.A)(function*(){return(0,h.B5)(r,e,t,v)})()}queryRelatedFeatures(e,t){var r=this;return(0,u.A)(function*(){return(0,h.hM)(r,e,t,v)})()}queryRelatedFeaturesCount(e,t){var r=this;return(0,u.A)(function*(){return(0,h.S2)(r,e,t,v)})()}save(e){var t=this;return(0,u.A)(function*(){return t._debouncedSaveOperations(L.X.SAVE,e)})()}saveAs(e,t){var r=this;return(0,u.A)(function*(){return r._debouncedSaveOperations(L.X.SAVE_AS,t,e)})()}write(e,t){const{origin:r,layerContainerType:s,messages:a}=t;if(this.isTable){if("web-scene"===r||"web-map"===r&&"tables"!==s)return a?.push(ee(this,"using a table source cannot be written to web scenes and web maps")),null}else if(this.loaded&&"web-map"===r&&"tables"===s)return a?.push(ee(this,"using a non-table source cannot be written to tables in web maps")),null;return this.sublayers?.length?super.write(e,t):(a?.push(new m.A("web-document-write:invalid-property",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' has invalid value for 'sublayers' property. 'sublayers' collection should contain at least one sublayer`,{layer:this})),null)}serviceSupportsSpatialReference(e){return!!this.loaded&&(0,Re.D)(this,e)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}_initLayerProperties(e){var t=this;return(0,u.A)(function*(){t._set("source",e);const{sourceJSON:r}=e;if(r&&(t.sourceJSON=r,t.read(r,{origin:"service",url:t.parsedUrl})),!t.subtypes?.length)throw new m.A("subtype-grouplayer:missing-subtypes","SubtypeGroupLayer must be created using a layer with subtypes");t._verifyFields(),(0,w.sv)(t.timeInfo,t.fieldsIndex)})()}hasDataChanged(){var e=this;return(0,u.A)(function*(){return(0,h.jp)(e)})()}_verifyFields(){const e=this.parsedUrl?.path??"undefined";this.objectIdField||console.log("SubtypeGroupLayer: 'objectIdField' property is not defined (url: "+e+")"),this.isTable||-1!==e.search(/\/FeatureServer\//i)||this.fields?.some(t=>"geometry"===t.type)||console.log("SubtypeGroupLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: "+e+")")}_handleSublayersChange(e,t){t&&(t.forEach(r=>{r.parent=null}),this.removeHandles("sublayers-owner"),this._sublayerLookup.clear()),e&&(e.forEach(r=>{r.parent=this,this._sublayerLookup.set(r.subtypeCode,r)}),this.addHandles([e.on("after-add",({item:r})=>{r.parent=this,this._sublayerLookup.set(r.subtypeCode,r)}),e.on("after-remove",({item:r})=>{r.parent=null,this._sublayerLookup.delete(r.subtypeCode)})],"sublayers-owner"))}};(0,i._)([(0,o.MZ)({readOnly:!0})],p.prototype,"createQueryVersion",null),(0,i._)([(0,o.MZ)({readOnly:!0})],p.prototype,"editingEnabled",null),(0,i._)([(0,o.MZ)({readOnly:!0})],p.prototype,"effectiveEditingEnabled",null),(0,i._)([(0,o.MZ)({...V.fields,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}})],p.prototype,"fields",void 0),(0,i._)([(0,o.MZ)(V.fieldsIndex)],p.prototype,"fieldsIndex",void 0),(0,i._)([(0,o.MZ)(F.id)],p.prototype,"id",void 0),(0,i._)([(0,o.MZ)({type:["show","hide","hide-children"],json:{origins:{"portal-item":{read:!1,write:!1}}}})],p.prototype,"listMode",void 0),(0,i._)([(0,o.MZ)({value:"SubtypeGroupLayer",type:["SubtypeGroupLayer"],json:{origins:{"portal-item":{name:"layerType",write:{enabled:!0,ignoreOrigin:!0}}}}})],p.prototype,"operationalLayerType",void 0),(0,i._)([(0,o.MZ)(V.outFields)],p.prototype,"outFields",void 0),(0,i._)([(0,o.MZ)({readOnly:!0})],p.prototype,"parsedUrl",null),(0,i._)([(0,o.MZ)({clonable:!1})],p.prototype,"source",null),(0,i._)([(0,o.MZ)({type:E.A.ofType(T),json:{origins:{service:{read:{source:"subtypes",reader:(e,t,r)=>{const s=e.map(({code:a})=>{const d=new T({subtypeCode:a});return d.read(t,r),d});return new(E.A.ofType(T))(s)}}}},name:"layers",write:{ignoreOrigin:!0}}})],p.prototype,"sublayers",void 0),(0,i._)([(0,o.MZ)({type:we.A})],p.prototype,"timeInfo",void 0),(0,i._)([(0,o.MZ)({json:{origins:{"portal-item":{write:{enabled:!0,ignoreOrigin:!0,writerEnsuresNonNull:!0}}}}})],p.prototype,"title",void 0),(0,i._)([(0,I.w)("service","title",["name"])],p.prototype,"readTitleFromService",null),(0,i._)([(0,o.MZ)({json:{read:!1}})],p.prototype,"type",void 0),p=(0,i._)([(0,J.$)("esri.layers.SubtypeGroupLayer")],p);const Ve=p}}]);