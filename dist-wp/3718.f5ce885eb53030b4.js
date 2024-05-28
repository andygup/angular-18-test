"use strict";(self.webpackChunkangular_18_test=self.webpackChunkangular_18_test||[]).push([[3718,1447],{78200:(we,Y,g)=>{g.d(Y,{F:()=>O});const O={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByAnonymous:!0,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}},13828:(we,Y,g)=>{g.r(Y),g.d(Y,{applyEdits:()=>Ve,checkEditingCapabilities:()=>je,isFeatureIdentifierArrayWithGlobalId:()=>De,isFeatureIdentifierArrayWithObjectId:()=>Te,isFeatureIdentifierWithGlobalId:()=>ve,isFeatureIdentifierWithObjectId:()=>oe,normalizeCollections:()=>$e,normalizeEdits:()=>re,normalizeGeometries:()=>Se,shallowCloneFeature:()=>me,uploadAssets:()=>ie});var O=g(10467),k=g(81098),Ae=g(31178),U=g(5922),L=g(77806),he=g(35150),se=g(56492),Q=g(45272),ne=g(43085),pe=g(77098),_=g(58701),C=g(58277),J=g(86300),K=g(6829),ee=g(58443);function ae(h){return null!=h?.applyEdits}function oe(h){return"object"==typeof h&&null!=h&&"objectId"in h&&!!h.objectId}function Te(h){return h.every(oe)}function ve(h){return"object"==typeof h&&null!=h&&"globalId"in h&&!!h.globalId}function De(h){return h.every(ve)}function Ve(h,v,I){return ce.apply(this,arguments)}function ce(){return ce=(0,O.A)(function*(h,v,I,F={}){let x;const V=F.gdbVersion??("gdbVersion"in h?h.gdbVersion:null);(0,C.Mk)(h)&&h.url?x=(0,C.Zk)(h.url,h.layerId,V,"original-and-current-features"===F.returnServiceEditsOption):(x=(0,se.Tw)(),x.promise.then(P=>{(P.addedFeatures.length||P.updatedFeatures.length||P.deletedFeatures.length||P.addedAttachments.length||P.updatedAttachments.length||P.deletedAttachments.length)&&h.emit("edits",P)}),h.emit("apply-edits",{result:x.promise}));try{const{results:M,edits:P}=yield function Qe(h,v,I,F){return fe.apply(this,arguments)}(h,v,I,F),W=$=>$.filter(ge=>!ge.error).map(L.o8),le={edits:P,addedFeatures:W(M.addFeatureResults),updatedFeatures:W(M.updateFeatureResults),deletedFeatures:W(M.deleteFeatureResults),addedAttachments:W(M.addAttachmentResults),updatedAttachments:W(M.updateAttachmentResults),deletedAttachments:W(M.deleteAttachmentResults),exceededTransferLimit:!1,historicMoment:M.editMoment?new Date(M.editMoment):null,globalIdToObjectId:F.globalIdToObjectId};return M.editedFeatureResults?.length&&(le.editedFeatures=M.editedFeatureResults),x.resolve(le),M}catch(M){throw x.reject(M),M}}),ce.apply(this,arguments)}function fe(){return fe=(0,O.A)(function*(h,v,I,F){if(yield h.load(),!ae(v))throw new U.A(`${h.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:h});if(!(0,ee.tk)(h))throw new U.A(`${h.type}-layer:editing-disabled`,"Editing is disabled for layer",{layer:h});const{edits:x,options:D}=yield function Ke(h,v,I){return Ee.apply(this,arguments)}(h,I,F);return x.addFeatures?.length||x.updateFeatures?.length||x.deleteFeatures?.length||x.addAttachments?.length||x.updateAttachments?.length||x.deleteAttachments?.length?{edits:x,results:yield v.applyEdits(x,D)}:{edits:x,results:{addFeatureResults:[],updateFeatureResults:[],deleteFeatureResults:[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}}),fe.apply(this,arguments)}function Ee(){return Ee=(0,O.A)(function*(h,v,I){const F=(0,ee.BR)(h),V=null!=h.infoFor3D;if(je(v,F,I,!(!v||!(v.addFeatures||v.updateFeatures||v.deleteFeatures)),!(!v||!(v.addAttachments||v.updateAttachments||v.deleteAttachments)),`${h.type}-layer`),!F.data.isVersioned&&I?.gdbVersion)throw new U.A(`${h.type}-layer:invalid-parameter`,"'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");if(!F.editing.supportsRollbackOnFailure&&I?.rollbackOnFailureEnabled)throw new U.A(`${h.type}-layer:invalid-parameter`,"This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");const M={...I};if(null!=M.rollbackOnFailureEnabled||F.editing.supportsRollbackOnFailure||(M.rollbackOnFailureEnabled=!0),M.rollbackOnFailureEnabled||"original-and-current-features"!==M.returnServiceEditsOption||(!1===M.rollbackOnFailureEnabled&&he.A.getLogger("esri.layers.graphics.editingSupport").warn(`${h.type}-layer:invalid-parameter`,"'original-and-current-features' is valid for 'returnServiceEditsOption' only when 'rollBackOnFailure' is true, but 'rollBackOnFailure' was set to false. 'rollBackOnFailure' has been overwritten and set to true."),M.rollbackOnFailureEnabled=!0),!F.editing.supportsReturnServiceEditsInSourceSpatialReference&&M.returnServiceEditsInSourceSR)throw new U.A(`${h.type}-layer:invalid-parameter`,"This layer does not support 'returnServiceEditsInSourceSR' parameter. See: 'capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference'");if(M.returnServiceEditsInSourceSR&&"original-and-current-features"!==M.returnServiceEditsOption)throw new U.A(`${h.type}-layer:invalid-parameter`,"'returnServiceEditsInSourceSR' is valid only when 'returnServiceEditsOption' is set to 'original-and-current-features'");const P=re(v,F,`${h.type}-layer`),W=I?.globalIdUsed||V,le=h.fields.filter($=>"big-integer"===$.type||"oid"===$.type&&($.length||0)>=8);if(W){const{globalIdField:$}=h;if(null==$)throw new U.A(`${h.type}-layer:invalid-parameter`,"Layer does not specify a global id field.");P.addFeatures.forEach(ge=>function Ce(h,v){const{attributes:I}=h;null==I[v]&&(I[v]=(0,ne.yS)())}(ge,$))}return P.addFeatures.forEach($=>function ze(h,v,I,F){Fe(h,v,I,F),Re(h,v)}($,h,W,le)),P.updateFeatures.forEach($=>function Pe(h,v,I,F){Fe(h,v,I,F),Re(h,v);const x=(0,ee.BR)(v);if("geometry"in h&&null!=h.geometry&&!x?.editing.supportsGeometryUpdate)throw new U.A(`${v.type}-layer:unsupported-operation`,"Layer does not support geometry updates.")}($,h,W,le)),P.deleteFeatures.forEach($=>function Ze(h,v,I,F){Fe(h,v,I,F)}($,h,W,le)),P.addAttachments.forEach($=>be($,h)),P.updateAttachments.forEach($=>be($,h)),V&&(yield function Le(h,v){return ye.apply(this,arguments)}(P,h)),{edits:yield Se(P),options:M}}),Ee.apply(this,arguments)}function Fe(h,v,I,F){if(I){if("attributes"in h&&!h.attributes[v.globalIdField])throw new U.A(`${v.type}-layer:invalid-parameter`,`Feature should have '${v.globalIdField}' when 'globalIdUsed' is true`);if(!("attributes"in h)&&!h.globalId)throw new U.A(`${v.type}-layer:invalid-parameter`,"`'globalId' of the feature should be passed when 'globalIdUsed' is true")}if(F.length&&"attributes"in h)for(const x of F){const D=h.attributes[x.name];if(void 0!==D&&!(0,J.OG)(x,D))throw new U.A(`${v.type}-layer:invalid-parameter`,`Big-integer field '${x.name}' of the feature must be less than ${Number.MAX_SAFE_INTEGER}`,{feature:h})}if("geometry"in h&&null!=h.geometry){if(h.geometry.hasZ&&!1===v.capabilities?.data.supportsZ)throw new U.A(`${v.type}-layer:z-unsupported`,"Layer does not support z values while feature has z values.");if(h.geometry.hasM&&!1===v.capabilities?.data.supportsM)throw new U.A(`${v.type}-layer:m-unsupported`,"Layer does not support m values while feature has m values.")}}function Re(h,v){if("geometry"in h&&"mesh"===h.geometry?.type&&null!=v.infoFor3D&&null!=v.spatialReference){const{geometry:I}=h,{spatialReference:F,vertexSpace:x}=I,D=v.spatialReference,V="local"===x.type,M=(0,_.EA)(D),P=(0,_.aI)(D,F),W=P||(0,_.oT)(D)&&((0,_.oT)(F)||(0,_.K8)(F));if(!(V&&M&&W||!V&&!M&&P))throw new U.A(`${v.type}-layer:mesh-unsupported`,`Uploading a mesh with a ${x.type} vertex space and a spatial reference wkid:${F.wkid} to a layer with a spatial reference wkid:${D.wkid} is not supported.`)}}function be(h,v){const{feature:I,attachment:F}=h;if(!I||"attributes"in I&&!I.attributes[v.globalIdField])throw new U.A(`${v.type}-layer:invalid-parameter`,"Attachment should have reference to a feature with 'globalId'");if(!("attributes"in I)&&!I.globalId)throw new U.A(`${v.type}-layer:invalid-parameter`,"Attachment should have reference to 'globalId' of the parent feature");if(!F.globalId)throw new U.A(`${v.type}-layer:invalid-parameter`,"Attachment should have 'globalId'");if(!F.data&&!F.uploadId)throw new U.A(`${v.type}-layer:invalid-parameter`,"Attachment should have 'data' or 'uploadId'");if(!(F.data instanceof File&&F.data.name||F.name))throw new U.A(`${v.type}-layer:invalid-parameter`,"'name' is required when attachment is specified as Base64 encoded string using 'data'");if(!v.capabilities?.editing.supportsUploadWithItemId&&F.uploadId)throw new U.A(`${v.type}-layer:invalid-parameter`,"This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if("string"==typeof F.data){const x=(0,Q.r$)(F.data);if(x&&!x.isBase64)throw new U.A(`${v.type}-layer:invalid-parameter`,"Attachment 'data' should be a Blob, File or Base64 encoded string")}}function Se(h){return Ie.apply(this,arguments)}function Ie(){return(Ie=(0,O.A)(function*(h){const v=h.addFeatures??[],I=h.updateFeatures??[],F=v.concat(I).map(M=>M.geometry),x=yield(0,pe.el)(F),D=v.length,V=I.length;return x.slice(0,D).forEach((M,P)=>v[P].geometry=M),x.slice(D,D+V).forEach((M,P)=>I[P].geometry=M),h})).apply(this,arguments)}function $e(h){return{addFeatures:Array.from(h?.addFeatures??[]),updateFeatures:Array.from(h?.updateFeatures??[]),deleteFeatures:h&&Ae.A.isCollection(h.deleteFeatures)?h.deleteFeatures.toArray():h.deleteFeatures||[],addAttachments:h.addAttachments||[],updateAttachments:h.updateAttachments||[],deleteAttachments:h.deleteAttachments||[]}}function re(h,v,I){const F=$e(h);if(F.addFeatures?.length&&!v.operations.supportsAdd)throw new U.A(`${I}:unsupported-operation`,"Layer does not support adding features.");if(F.updateFeatures?.length&&!v.operations.supportsUpdate)throw new U.A(`${I}:unsupported-operation`,"Layer does not support updating features.");if(F.deleteFeatures?.length&&!v.operations.supportsDelete)throw new U.A(`${I}:unsupported-operation`,"Layer does not support deleting features.");return F.addFeatures=F.addFeatures.map(me),F.updateFeatures=F.updateFeatures.map(me),F.addAssetFeatures=[],F}function je(h,v,I,F,x,D){if(!h||!F&&!x)throw new U.A(`${D}:missing-parameters`,"'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");if(!v.editing.supportsGlobalId&&I?.globalIdUsed)throw new U.A(`${D}:invalid-parameter`,"This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");if(!v.editing.supportsGlobalId&&x)throw new U.A(`${D}:invalid-parameter`,"'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");if(!I?.globalIdUsed&&x)throw new U.A(`${D}:invalid-parameter`,"When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true")}function me(h){const v=new k.A;return h.attributes||(h.attributes={}),v.geometry=h.geometry,v.attributes=h.attributes,v}function ye(){return(ye=(0,O.A)(function*(h,v){if(null==v.infoFor3D)return;const{infoFor3D:I}=v,F=(0,K.R_)("model/gltf-binary",I.supportedFormats)??(0,K.E1)("glb",I.supportedFormats);if(!F||!I.editFormats.includes(F))throw new U.A(`${v.type}-layer:binary-gltf-asset-not-supported`,"3DObjectFeatureLayer requires binary glTF (.glb) support for updating mesh geometry.");h.addAssetFeatures??=[];const{addAssetFeatures:x}=h;for(const D of h.addFeatures??[])xe(D)&&x.push(D);for(const D of h.updateFeatures??[])xe(D)&&x.push(D)})).apply(this,arguments)}function xe(h){return"mesh"===h?.geometry?.type}function ie(h,v,I,F){if(!ae(v))throw new U.A(`${h.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:h});if(!v.uploadAssets)throw new U.A(`${h.type}-layer:no-asset-upload-support`,"Layer source does not support uploadAssets capability",{layer:h});return v.uploadAssets(I,F)}},63718:(we,Y,g)=>{g.r(Y),g.d(Y,{default:()=>Et});var O=g(10467),k=g(8189),U=(g(21152),g(77469)),L=g(89563),he=g(12849),se=g(89952),Q=g(5922),ne=g(3248),pe=g(49976),_=g(55098),C=g(35150),J=g(89221),K=g(56492),ee=g(45272),ae=g(43085),oe=g(85211),Te=g(76576),ve=g(28067),De=g(38352),ce=(g(23159),g(77806)),fe=(g(62767),g(39465)),Re=(g(25866),g(58315),g(1490),g(12738));function ge(d,u,p){return Be.apply(this,arguments)}function Be(){return(Be=(0,O.A)(function*(d,u,p){yield Promise.resolve(),(0,K.Te)(p);const y=(0,Re.UR)(d,u);if(!y)throw new Q.A("meshUtils:convertVertexSpace()","Failed to convert to provided vertex space due to projection errors");const f=d.cloneAndModifyVertexAttributes(new fe.H({...y,uv:(0,ce.o8)(d.vertexAttributes.uv),color:(0,ce.o8)(d.vertexAttributes.color)}),u);return f.transform=null,f})).apply(this,arguments)}g(28714),g(86507);var ke=g(78559),_e=g(33019),et=g(81098),He=g(82663),Ge=g(11817),tt=g(61320),rt=g(36812),st=g(58701),qe=g(13828);function Xe(d,u,p){return Ne.apply(this,arguments)}function Ne(){return(Ne=(0,O.A)(function*(d,u,p){const{geometry:y}=u,f={...u.attributes};if(null!=p&&"mesh"===y?.type){const{transformFieldRoles:E}=p,{origin:A,spatialReference:R,vertexSpace:b}=y,S=y.transform??new rt.A,w="local"===b.type,T=d.spatialReference,N=T.isGeographic,z=(0,st.aI)(T,R),Z=(0,Ge.isEqualBaseGCS)(R,T)&&(0,Ge.canProjectWithoutEngine)(R,T);if(!(w&&N&&Z||!w&&!N&&z))return null;const j=(0,Ge.projectWithoutEngine)(A,R,T);if(null==j)return null;if(f[E.originX]=j.x,f[E.originY]=j.y,f[E.originZ]=j.z??0,null!=S){const{translation:B,scale:de,rotation:G}=S,X=w?1:(0,He.KX)(R)/(0,He.KX)(T);f[E.translationX]=B[0]*X,f[E.translationY]=B[2]*X,f[E.translationZ]=-B[1]*X,f[E.scaleX]=de[0],f[E.scaleY]=de[2],f[E.scaleZ]=de[1],f[E.rotationX]=G[0],f[E.rotationY]=G[2],f[E.rotationZ]=-G[1],f[E.rotationDeg]=G[3]}return{attributes:f}}return null==y?{attributes:f}:"mesh"===y.type||"extent"===y.type?null:{geometry:y.toJSON(),attributes:f}})).apply(this,arguments)}function We(){return(We=(0,O.A)(function*(d,u){const p=yield Promise.all((u.addAttachments??[]).map(E=>Ye(d,E))),y=yield Promise.all((u.updateAttachments??[]).map(E=>Ye(d,E))),f=u.deleteAttachments??[];return p.length||y.length||f.length?{adds:p,updates:y,deletes:[...f]}:null})).apply(this,arguments)}function Ye(d,u){return Je.apply(this,arguments)}function Je(){return(Je=(0,O.A)(function*(d,u){const{feature:p,attachment:y}=u,{globalId:f,name:E,contentType:A,data:R,uploadId:b}=y,S={globalId:f};if(p&&("attributes"in p?S.parentGlobalId=p.attributes?.[d.globalIdField]:p.globalId&&(S.parentGlobalId=p.globalId)),b)S.uploadId=b;else if(R){const w=yield(0,ee._0)(R);w&&(S.contentType=w.mediaType,S.data=w.data),R instanceof File&&(S.name=R.name)}return E&&(S.name=E),A&&(S.contentType=A),S})).apply(this,arguments)}function te(d){const u=!0===d.success?null:d.error||{code:void 0,description:void 0};return{objectId:d.objectId,globalId:d.globalId,error:u?new Q.A("feature-layer-source:edit-failure",u.description,{code:u.code}):null}}function Oe(d,u){return new et.A({attributes:d.attributes,geometry:(0,tt.rS)({...d.geometry,spatialReference:u})})}function it(d,u){return{adds:d?.adds?.map(p=>Oe(p,u))||[],updates:d?.updates?.map(p=>({original:Oe(p[0],u),current:Oe(p[1],u)}))||[],deletes:d?.deletes?.map(p=>Oe(p,u))||[],spatialReference:u}}var ut=g(89962),dt=g(5931),pt=g(68438),Ue=g(39729),ct=g(6829),yt=g(34687),ht=g(28872),ft=g(87086),Me=g(30448),mt=g(32034);const gt=new pe.J({originalAndCurrentFeatures:"original-and-current-features",none:"none"}),At=new pe.J({Started:"published",Publishing:"publishing",Stopped:"unavailable"});let ue=class extends _.A{constructor(){var d;super(...arguments),d=this,this.type="feature-layer",this.supportedSourceTypes=new Set(["Feature Layer","Oriented Imagery Layer","Table","Catalog Layer"]),this.refresh=(0,K.sg)((0,O.A)(function*(){yield d.load();const u=d.sourceJSON.editingInfo?.lastEditDate;if(null==u)return{dataChanged:!0,updates:{}};try{yield d._fetchService(null)}catch{return{dataChanged:!0,updates:{}}}const p=u!==d.sourceJSON.editingInfo?.lastEditDate;return{dataChanged:p,updates:p?{editingInfo:d.sourceJSON.editingInfo,extent:d.sourceJSON.extent}:null}})),this._ongoingAssetUploads=new Map}load(d){const p=this._fetchService(this.layer.sourceJSON,{...d}).then(()=>this.layer.setUserPrivileges(this.sourceJSON.serviceItemId,d)).then(()=>this._ensureLatestMetadata(d));return this.addResolvingPromise(p),Promise.resolve(this)}get queryTask(){const{capabilities:d,parsedUrl:u,dynamicDataSource:p,infoFor3D:y,gdbVersion:f,spatialReference:E,fieldsIndex:A}=this.layer,R=(0,ne.A)("featurelayer-pbf")&&d?.query.supportsFormatPBF&&null==y;return new dt.A({url:u.path,pbfSupported:R,fieldsIndex:A,infoFor3D:y,dynamicDataSource:p,gdbVersion:f,sourceSpatialReference:E,queryAttachmentsSupported:d?.operations?.supportsQueryAttachments??!1})}addAttachment(d,u){var p=this;return(0,O.A)(function*(){yield p.load();const{layer:y}=p;yield(0,Ue.VA)(y,"editing");const f=d.attributes[y.objectIdField],E=y.parsedUrl.path+"/"+f+"/addAttachment",A=p._getLayerRequestOptions(),R=p._getFormDataForAttachment(u,A.query);try{return te((yield(0,L.A)(E,{body:R})).data.addAttachmentResult)}catch(b){throw p._createAttachmentErrorResult(f,b)}})()}updateAttachment(d,u,p){var y=this;return(0,O.A)(function*(){yield y.load();const{layer:f}=y;yield(0,Ue.VA)(f,"editing");const E=d.attributes[f.objectIdField],A=f.parsedUrl.path+"/"+E+"/updateAttachment",R=y._getLayerRequestOptions({query:{attachmentId:u}}),b=y._getFormDataForAttachment(p,R.query);try{return te((yield(0,L.A)(A,{body:b})).data.updateAttachmentResult)}catch(S){throw y._createAttachmentErrorResult(E,S)}})()}applyEdits(d,u){var p=this;return(0,O.A)(function*(){yield p.load();const{layer:y}=p;yield(0,Ue.VA)(y,"editing");const f=y.infoFor3D,E=null!=f,A=E||(u?.globalIdUsed??!1),R=E?yield p._uploadMeshesAndGetAssetMapEditsJSON(d):null,b=d.addFeatures?.map(q=>Xe(p.layer,q,f))??[],S=(yield Promise.all(b)).filter(se.Ru),w=d.updateFeatures?.map(q=>Xe(p.layer,q,f))??[],T=(yield Promise.all(w)).filter(se.Ru),N=function at(d,u,p){if(!u||0===u.length)return[];if(p&&(0,qe.isFeatureIdentifierArrayWithGlobalId)(u))return u.map(f=>f.globalId);if((0,qe.isFeatureIdentifierArrayWithObjectId)(u))return u.map(f=>f.objectId);const y=p?d.globalIdField:d.objectIdField;return y?u.map(f=>f.getAttribute(y)):[]}(p.layer,d.deleteFeatures,A);(0,ht.u)(S,T,y.spatialReference);const z=yield function nt(d,u){return We.apply(this,arguments)}(p.layer,d),Z=y.capabilities.editing.supportsAsyncApplyEdits&&E,j=u?.gdbVersion||y.gdbVersion,B={gdbVersion:j,rollbackOnFailure:u?.rollbackOnFailureEnabled,useGlobalIds:A,returnEditMoment:u?.returnEditMoment,usePreviousEditMoment:u?.usePreviousEditMoment,async:Z};yield(0,Me.ZJ)(p.layer.url,j,!0);const de=(0,Me.w5)(p.layer.url,j||null);if(yield(0,Me.We)(y.url,j,y.historicMoment))throw new Q.A("feature-layer-source:historic-version","Editing a historic version is not allowed");u?.returnServiceEditsOption?(B.edits=JSON.stringify([{id:y.layerId,adds:S.length?S:null,updates:T.length?T:null,deletes:N.length?N:null,attachments:z,assetMaps:R}]),B.returnServiceEditsOption=gt.toJSON(u?.returnServiceEditsOption),B.returnServiceEditsInSourceSR=u?.returnServiceEditsInSourceSR):(B.adds=S.length?JSON.stringify(S):null,B.updates=T.length?JSON.stringify(T):null,B.deletes=N.length?A?JSON.stringify(N):N.join(","):null,B.attachments=z&&JSON.stringify(z),B.assetMaps=null!=R?JSON.stringify(R):void 0);const G=p._getLayerRequestOptions({method:"post",query:B});de&&(G.authMode="immediate",G.query.returnEditMoment=!0,G.query.sessionId=Me.TA);const X=u?.returnServiceEditsOption?y.url:y.parsedUrl.path;let H;try{H=Z?yield p._asyncApplyEdits(X+"/applyEdits",G):yield(0,L.A)(X+"/applyEdits",G)}catch(q){if(!function lt(d){const u=d.details.raw,y=+u.extendedCode;return 500==+u.code&&(-2147217144===y||-2147467261===y)}(q))throw q;G.authMode="immediate",H=Z?yield p._asyncApplyEdits(X+"/applyEdits",G):yield(0,L.A)(X+"/applyEdits",G)}return!y.capabilities.operations?.supportsEditing&&y.effectiveCapabilities?.operations?.supportsEditing&&(yield U.id?.findCredential(y.url)?.refreshToken()),p._createEditsResult(H)})()}deleteAttachments(d,u){var p=this;return(0,O.A)(function*(){yield p.load();const{layer:y}=p;yield(0,Ue.VA)(y,"editing");const f=d.attributes[y.objectIdField],E=y.parsedUrl.path+"/"+f+"/deleteAttachments";try{return(yield(0,L.A)(E,p._getLayerRequestOptions({query:{attachmentIds:u.join(",")},method:"post"}))).data.deleteAttachmentResults.map(te)}catch(A){throw p._createAttachmentErrorResult(f,A)}})()}fetchRecomputedExtents(d={}){var u=this;return this.load({signal:d.signal}).then((0,O.A)(function*(){const y=u._getLayerRequestOptions({...d,query:{returnUpdates:!0}}),{layerId:f,url:E}=u.layer,{data:A}=yield(0,L.A)(`${E}/${f}`,y),{id:R,extent:b,fullExtent:S,timeExtent:w}=A,T=b||S;return{id:R,fullExtent:T&&ve.A.fromJSON(T),timeExtent:w&&he.A.fromJSON({start:w[0],end:w[1]})}}))}queryAttachments(d,u={}){var p=this;return(0,O.A)(function*(){yield p.load();const y=p._getLayerRequestOptions(u);return p.queryTask.executeAttachmentQuery(d,y)})()}queryFeatures(d,u){var p=this;return(0,O.A)(function*(){yield p.load();const y=yield p.queryTask.execute(d,{...u,query:p._createRequestQueryOptions(u)});return d.outStatistics?.length&&y.features.length&&y.features.forEach(f=>{const E=f.attributes;d.outStatistics?.forEach(({outStatisticFieldName:A})=>{if(A){const R=A.toLowerCase();R&&R in E&&A!==R&&(E[A]=E[R],delete E[R])}})}),y})()}queryFeaturesJSON(d,u){var p=this;return(0,O.A)(function*(){return yield p.load(),p.queryTask.executeJSON(d,{...u,query:p._createRequestQueryOptions(u)})})()}queryObjectIds(d,u){var p=this;return(0,O.A)(function*(){return yield p.load(),p.queryTask.executeForIds(d,{...u,query:p._createRequestQueryOptions(u)})})()}queryFeatureCount(d,u){var p=this;return(0,O.A)(function*(){return yield p.load(),p.queryTask.executeForCount(d,{...u,query:p._createRequestQueryOptions(u)})})()}queryExtent(d,u){var p=this;return(0,O.A)(function*(){return yield p.load(),p.queryTask.executeForExtent(d,{...u,query:p._createRequestQueryOptions(u)})})()}queryRelatedFeatures(d,u){var p=this;return(0,O.A)(function*(){return yield p.load(),p.queryTask.executeRelationshipQuery(d,{...u,query:p._createRequestQueryOptions(u)})})()}queryRelatedFeaturesCount(d,u){var p=this;return(0,O.A)(function*(){return yield p.load(),p.queryTask.executeRelationshipQueryForCount(d,{...u,query:p._createRequestQueryOptions(u)})})()}queryTopFeatures(d,u){var p=this;return(0,O.A)(function*(){return yield p.load(),p.queryTask.executeTopFeaturesQuery(d,{...u,query:p._createRequestQueryOptions(u)})})()}queryTopObjectIds(d,u){var p=this;return(0,O.A)(function*(){return yield p.load(),p.queryTask.executeForTopIds(d,{...u,query:p._createRequestQueryOptions(u)})})()}queryTopExtents(d,u){var p=this;return(0,O.A)(function*(){return yield p.load(),p.queryTask.executeForTopExtents(d,{...u,query:p._createRequestQueryOptions(u)})})()}queryTopCount(d,u){var p=this;return(0,O.A)(function*(){return yield p.load(),p.queryTask.executeForTopCount(d,{...u,query:p._createRequestQueryOptions(u)})})()}fetchPublishingStatus(){var d=this;return(0,O.A)(function*(){if(!(0,pt.Wo)(d.layer.url))return"unavailable";const u=(0,ee.fj)(d.layer.url,"status"),p=yield(0,L.A)(u,{query:{f:"json"}});return At.fromJSON(p.data.status)})()}uploadAssets(d,u){var p=this;return(0,O.A)(function*(){const{uploadAssets:y}=yield Promise.all([g.e(2076),g.e(2403)]).then(g.bind(g,22403));return y(d,{layer:p.layer,ongoingUploads:p._ongoingAssetUploads},u)})()}_asyncApplyEdits(d,u){return(0,O.A)(function*(){const p=(yield(0,L.A)(d,u)).data.statusUrl;for(;;){const y=(yield(0,L.A)(p,{query:{f:"json"},responseType:"json"})).data;switch(y.status){case"Completed":return(0,L.A)(y.resultUrl,{query:{f:"json"},responseType:"json"});case"CompletedWithErrors":throw new Q.A("async-applyEdits-failed","asynchronous applyEdits call failed.");case"Failed ImportChanges":case"InProgress":case"Pending":case"ExportAttachments":case"ExportChanges":case"ExportingData":case"ExportingSnapshot":case"ImportAttachments":case"ProvisioningReplica":case"UnRegisteringReplica":break;default:throw new Q.A("async-applyEdits-failed","asynchronous applyEdits call failed (undefined response status)")}yield(0,K.Pl)(vt)}})()}_createRequestQueryOptions(d){const u={...this.layer.customParameters,token:this.layer.apiKey,...d?.query};return this.layer.datesInUnknownTimezone&&(u.timeReferenceUnknownClient=!0),u}_fetchService(d,u){var p=this;return(0,O.A)(function*(){if(!d){const f={};(0,ne.A)("featurelayer-advanced-symbols")&&(f.returnAdvancedSymbols=!0),u?.cacheBust&&(f._ts=Date.now());const{data:E}=yield(0,L.A)(p.layer.parsedUrl.path,p._getLayerRequestOptions({query:f,signal:u?.signal}));d=E}p.sourceJSON=yield p._patchServiceJSON(d,u?.signal);const y=d.type;if(!p.supportedSourceTypes.has(y))throw new Q.A("feature-layer-source:unsupported-type",`Source type "${y}" is not supported`)})()}_patchServiceJSON(d,u){var p=this;return(0,O.A)(function*(){if("Table"!==d.type&&d.geometryType&&!d?.drawingInfo?.renderer&&!d.defaultSymbol){const y=(0,ut.F0)(d.geometryType).renderer;(0,J.sM)("drawingInfo.renderer",y,d)}if("esriGeometryMultiPatch"===d.geometryType&&d.infoFor3D&&(d.geometryType="mesh"),null==d.extent)try{const{data:y}=yield(0,L.A)(p.layer.url,p._getLayerRequestOptions({signal:u}));y.spatialReference&&(d.extent={xmin:0,ymin:0,xmax:0,ymax:0,spatialReference:y.spatialReference})}catch(y){(0,K.QP)(y)}return d})()}_ensureLatestMetadata(d){var u=this;return(0,O.A)(function*(){if(u.layer.userHasUpdateItemPrivileges&&u.sourceJSON.cacheMaxAge>0)return u._fetchService(null,{...d,cacheBust:!0})})()}_uploadMeshesAndGetAssetMapEditsJSON(d){var u=this;return(0,O.A)(function*(){const{addAssetFeatures:p}=d;if(!p?.length||(yield u._areAllAssetsAlreadyMapped(p)))return null;const y=d.addFeatures.filter(A=>A.geometry);if(p.length!==y.length+d.updateFeatures.length)throw new Q.A("feature-layer-source:unsupported-mesh-edits","Mixing attribute only edits with mesh geometry edits is not currently supported");const f=new Array,E=new Map;for(const A of p){const{geometry:R}=A,{vertexSpace:b}=R;if((0,ke.Hq)(b))f.push(R);else{const S=R.anchor,w=yield ge(R,new De.A({origin:[S.x,S.y,S.z??0]}));E.set(w,R),A.geometry=w,f.push(w)}}yield u.uploadAssets(f);for(const[A,R]of E)R.addExternalSources(A.metadata.externalSources.items);return{adds:u._getAssetMapEditsJSON(p),updates:[],deletes:[]}})()}_getAssetMapEditsJSON(d){const u=new Array,p=this.layer.globalIdField,y=this.layer.parsedUrl;for(const f of d){const E=f.geometry,{metadata:A}=E,R=A.getExternalSourcesOnService(y),b=f.getAttribute(p);if(0===R.length){C.A.getLogger(this).error(`Skipping feature ${b}. The mesh it is associated with has not been uploaded to the service and cannot be mapped to it.`);continue}const{source:S}=R.find(_e.dK)??R[0];for(const w of S)1===w.parts.length?u.push({globalId:(0,ae.yS)(),parentGlobalId:b,assetName:w.assetName,assetHash:w.parts[0].partHash,flags:[]}):C.A.getLogger(this).error(`Skipping asset ${w.assetName}. It does not have exactly one part, so we cannot map it to a feature.`)}return u}_createEditsResult(d){const u=d.data,{layerId:p}=this.layer,y=[];let f=null;if(Array.isArray(u))for(const A of u)y.push({id:A.id,editedFeatures:A.editedFeatures}),A.id===p&&(f={addResults:A.addResults??[],updateResults:A.updateResults??[],deleteResults:A.deleteResults??[],attachments:A.attachments,editMoment:A.editMoment});else f=u;const E=function ot(d){const u=d?.assetMaps;if(u){for(const f of u.addResults)f.success||C.A.getLogger("esri.layers.graphics.sources.support.sourceUtils").error(`Failed to map asset to feature with globalId ${f.globalId}.`);for(const f of u.updateResults)f.success||C.A.getLogger("esri.layers.graphics.sources.support.sourceUtils").error(`Failed to map asset to feature with globalId ${f.globalId}.`)}const p=d?.attachments,y={addFeatureResults:d?.addResults?.map(te)??[],updateFeatureResults:d?.updateResults?.map(te)??[],deleteFeatureResults:d?.deleteResults?.map(te)??[],addAttachmentResults:p?.addResults?p.addResults.map(te):[],updateAttachmentResults:p?.updateResults?p.updateResults.map(te):[],deleteAttachmentResults:p?.deleteResults?p.deleteResults.map(te):[]};return d?.editMoment&&(y.editMoment=d.editMoment),y}(f);if(y.length>0){E.editedFeatureResults=[];for(const A of y){const{editedFeatures:R}=A,b=R?.spatialReference?new mt.A(R.spatialReference):null;E.editedFeatureResults.push({layerId:A.id,editedFeatures:it(R,b)})}}return E}_createAttachmentErrorResult(d,u){return{objectId:d,globalId:null,error:new Q.A("feature-layer-source:attachment-failure",u.details.messages?.[0]||u.message,{code:u.details.httpStatus||u.details.messageCode})}}_getFormDataForAttachment(d,u){const p=d instanceof FormData?d:d&&d.elements?new FormData(d):null;if(p)for(const y in u){const f=u[y];null!=f&&(p.set?p.set(y,f):p.append(y,f))}return p}_getLayerRequestOptions(d={}){const{parsedUrl:u,gdbVersion:p,dynamicDataSource:y}=this.layer;return{...d,query:{gdbVersion:p,layer:y?JSON.stringify({source:y}):void 0,...u.query,f:"json",...this._createRequestQueryOptions(d)},responseType:"json"}}_areAllAssetsAlreadyMapped(d){var u=this;return(0,O.A)(function*(){const{layer:p}=u,{globalIdField:y,infoFor3D:f,parsedUrl:E}=p;if(null==f||null==y)return!1;const A=(0,ct.JZ)(f);if(null==A)return!1;const R=(0,ee.fj)(E.path,`../${A.id}`),b=new Array;for(const j of d){if(!(j.geometry.metadata.getExternalSourcesOnService(E).length>0))return!1;b.push(j)}const S=b.map(j=>j.getAttribute(y)).filter(se.Ru);if(0===S.length)return!1;const{assetMapFieldRoles:{parentGlobalId:w,assetHash:T}}=f,N=new ft.A({where:`${w} IN (${S.map(j=>`'${j}'`)})`,outFields:[T,w],returnGeometry:!1}),z=yield(0,yt.s)(R,N),{features:Z}=z;return 0!==Z.length&&!b.some(j=>{const B=j.getAttribute(y);if(!B)return!0;const{metadata:de}=j.geometry,G=Z.filter(H=>H.getAttribute(w)===B);if(0===G.length)return!0;const X=G.map(H=>H.getAttribute(T));return de.getExternalSourcesOnService(E).flatMap(({source:H})=>H.flatMap(q=>q.parts.map(Ft=>Ft.partHash))).some(H=>X.every(q=>H!==q))})})()}};(0,k._)([(0,oe.MZ)()],ue.prototype,"type",void 0),(0,k._)([(0,oe.MZ)({constructOnly:!0})],ue.prototype,"layer",void 0),(0,k._)([(0,oe.MZ)({constructOnly:!0})],ue.prototype,"supportedSourceTypes",void 0),(0,k._)([(0,oe.MZ)({readOnly:!0})],ue.prototype,"queryTask",null),ue=(0,k._)([(0,Te.$)("esri.layers.graphics.sources.FeatureLayerSource")],ue);const vt=1e3,Et=ue},89962:(we,Y,g)=>{g.d(Y,{F0:()=>L,Vx:()=>Q,e2:()=>pe,f:()=>_});var O=g(3248),k=g(77806),Ae=g(78200),U=g(48254);function L(C){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===C||"esriGeometryMultipoint"===C?U.Cb:"esriGeometryPolyline"===C?U.yM:U.WR}}}const he=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let se=1;function Q(C,J){if((0,O.A)("esri-csp-restrictions"))return()=>({[J]:null,...C});try{let K=`this${ne(J)} = null;`;for(const ae in C)K+=`this${ne(ae)} = ${JSON.stringify(C[ae])};`;const ee=new Function(`\n      return class AttributesClass$${se++} {\n        constructor() {\n          ${K};\n        }\n      }\n    `)();return()=>new ee}catch{return()=>({[J]:null,...C})}}function ne(C){return he.test(C)?`.${C}`:`["${C}"]`}function pe(C={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,k.o8)(C)}}]}function _(C,J){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:C},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:J,supportsDelete:J,supportsEditing:J,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:J,supportsExceedsLimitStatistics:!0,supportsAsyncConvert3D:!1},query:Ae.F,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:J,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}}}]);