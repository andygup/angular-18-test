"use strict";(self.webpackChunkangular_18_test=self.webpackChunkangular_18_test||[]).push([[2916],{40856:(j,I,r)=>{r.d(I,{X_:()=>M,i1:()=>E,zx:()=>p});var v=r(69287),o=r(82663);const h=96;function M(a,u){const O=u||a.extent,L=a.width,g=(0,o.GA)(O?.spatialReference);return O&&L?O.width/L*g*o.dy*h:0}function E(a,u){return a/((0,o.GA)(u)*o.dy*h)}function p(a,u,O){return function x(a,u){return 0===u||(0,v.Sp)(a,u)||a<u}(a,u)&&function S(a,u){return 0===u||(0,v.Sp)(a,u)||a>u}(a,O)}},39425:(j,I,r)=>{r.r(I),r.d(I,{default:()=>te});var v=r(10467),o=r(8189),h=r(89563),M=r(12849),E=r(5922),T=r(4879),A=r(39693),U=r(56492),p=r(85211),x=r(55739),u=(r(40707),r(3248),r(17221)),O=r(76576),L=r(50305),g=r(26514),K=r(28067),W=r(40856),Z=r(58701),b=r(95478),F=r(94376),N=r(50630),J=r(25936),G=r(93410),$=r(23e3),V=r(17049),z=r(85551),H=r(1151),X=r(33036),Q=r(58993),Y=r(84311),w=r(22329),k=r(76974),q=r(63014),ee=r(49498),B=r(87293),re=r(5540),C=r(22639);let i=class extends((0,G.dM)((0,Y.e)((0,X.j)((0,Q.I)((0,N.V)((0,J.b)((0,V.q)((0,z.A)((0,A.P)((0,H.J)((0,F.p)((0,$.d)(b.A))))))))))))){constructor(...t){super(...t),this._exportImageParameters=new k.g({layer:this}),this.dateFieldsTimeZone=null,this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.preferredTimeZone=null,this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(t,s){return"string"==typeof t?{url:t,...s}:t}load(t){const s=null!=t?t.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},t).catch(U.QP).then(()=>this._fetchService(s))),Promise.resolve(this)}destroy(){this._exportImageParameters.destroy()}readImageFormat(t,s){const m=s.supportedImageFormatTypes;return m&&m.includes("PNG32")?"png32":"png24"}writeSublayers(t,s,m,d){if(!this.loaded||!t)return;const c=t.slice().reverse().flatten(({sublayers:l})=>l&&l.toArray().reverse()).toArray();let _=!1;const y=(0,g.aB)(d.origin);if(this.capabilities?.operations.supportsExportMap&&this.capabilities?.exportMap?.supportsDynamicLayers)if(y===g.Gr.PORTAL_ITEM){const l=this.createSublayersForOrigin("service").sublayers;_=(0,B.Zx)(c,l,g.Gr.SERVICE)}else if(y>g.Gr.PORTAL_ITEM){const l=this.createSublayersForOrigin("portal-item");_=(0,B.Zx)(c,l.sublayers,(0,g.aB)(l.origin))}const P=[],f={writeSublayerStructure:_,...d};let D=_||this.hasVisibleLayersForOrigin(y);c.forEach(l=>{const R=l.write({},f);P.push(R),D=D||"user"===l.originOf("visible")}),P.some(l=>Object.keys(l).length>1)&&(s.layers=P),D&&(s.visibleLayers=c.filter(l=>l.visible).map(l=>l.id))}createExportImageParameters(t,s,m,d){const c=d?.pixelRatio||1;t&&this.version>=10&&(t=t.clone().shiftCentralMeridian()),this._exportImageParameters.floors=d?.floors??null,this._exportImageParameters.scale=(0,W.X_)({extent:t,width:s})*c;const _=this._exportImageParameters.toJSON(),y=!d?.rotation||this.version<10.3?{}:{rotation:-d.rotation},P=t?.spatialReference,f=(0,Z.YX)(P);_.dpi*=c;const D={};if(d?.timeExtent){const{start:l,end:R}=d.timeExtent.toJSON();D.time=l&&R&&l===R?""+l:`${l??"null"},${R??"null"}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(D.time="null,null");return{bbox:t&&t.xmin+","+t.ymin+","+t.xmax+","+t.ymax,bboxSR:f,imageSR:f,size:s+","+m,..._,...y,...D}}fetchImage(t,s,m,d){var c=this;return(0,v.A)(function*(){const{data:_}=yield c._fetchImage("image",t,s,m,d);return _})()}fetchImageBitmap(t,s,m,d){var c=this;return(0,v.A)(function*(){const{data:_,url:y}=yield c._fetchImage("blob",t,s,m,d);return(0,q.m)(_,y,d?.signal)})()}fetchRecomputedExtents(t={}){var s=this;return(0,v.A)(function*(){const m={...t,query:{returnUpdates:!0,f:"json",...s.customParameters,token:s.apiKey}},{data:d}=yield(0,h.A)(s.url,m),{extent:c,fullExtent:_,timeExtent:y}=d,P=c||_;return{fullExtent:P&&K.A.fromJSON(P),timeExtent:y&&M.A.fromJSON({start:y[0],end:y[1]})}})()}loadAll(){return(0,T.g)(this,t=>{t(this.allSublayers)})}serviceSupportsSpatialReference(t){return(0,re.D)(this,t)}_fetchImage(t,s,m,d,c){var _=this;return(0,v.A)(function*(){const y={responseType:t,signal:c?.signal??null,query:{..._.parsedUrl.query,..._.createExportImageParameters(s,m,d,c),f:"image",..._.refreshParameters,..._.customParameters,token:_.apiKey}},P=_.parsedUrl.path+"/export";if(null!=y.query?.dynamicLayers&&!_.capabilities?.exportMap?.supportsDynamicLayers)throw new E.A("mapimagelayer:dynamiclayer-not-supported",`service ${_.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:y.query});try{const{data:f}=yield(0,h.A)(P,y);return{data:f,url:P}}catch(f){throw(0,U.zf)(f)?f:new E.A("mapimagelayer:image-fetch-error",`Unable to load image: ${P}`,{error:f})}})()}_fetchService(t){var s=this;return(0,v.A)(function*(){if(s.sourceJSON)return void s.read(s.sourceJSON,{origin:"service",url:s.parsedUrl});const{data:m,ssl:d}=yield(0,h.A)(s.parsedUrl.path,{query:{f:"json",...s.parsedUrl.query,...s.customParameters,token:s.apiKey},signal:t});d&&(s.url=s.url.replace(/^http:/i,"https:")),s.sourceJSON=m,s.read(m,{origin:"service",url:s.parsedUrl})})()}hasVisibleLayersForOrigin(t){return!(null==t||!this.sublayersSourceJSON[t]?.visibleLayers)}};(0,o._)([(0,p.MZ)((0,C.P6)("dateFieldsTimeReference"))],i.prototype,"dateFieldsTimeZone",void 0),(0,o._)([(0,p.MZ)({type:Boolean})],i.prototype,"datesInUnknownTimezone",void 0),(0,o._)([(0,p.MZ)()],i.prototype,"dpi",void 0),(0,o._)([(0,p.MZ)()],i.prototype,"gdbVersion",void 0),(0,o._)([(0,p.MZ)()],i.prototype,"imageFormat",void 0),(0,o._)([(0,u.w)("imageFormat",["supportedImageFormatTypes"])],i.prototype,"readImageFormat",null),(0,o._)([(0,p.MZ)({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],i.prototype,"imageMaxHeight",void 0),(0,o._)([(0,p.MZ)({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],i.prototype,"imageMaxWidth",void 0),(0,o._)([(0,p.MZ)()],i.prototype,"imageTransparency",void 0),(0,o._)([(0,p.MZ)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],i.prototype,"isReference",void 0),(0,o._)([(0,p.MZ)({json:{read:!1,write:!1}})],i.prototype,"labelsVisible",void 0),(0,o._)([(0,p.MZ)({type:["ArcGISMapServiceLayer"]})],i.prototype,"operationalLayerType",void 0),(0,o._)([(0,p.MZ)({json:{read:!1,write:!1}})],i.prototype,"popupEnabled",void 0),(0,o._)([(0,p.MZ)((0,C.P6)("preferredTimeReference"))],i.prototype,"preferredTimeZone",void 0),(0,o._)([(0,p.MZ)()],i.prototype,"sourceJSON",void 0),(0,o._)([(0,p.MZ)({json:{write:{ignoreOrigin:!0}}})],i.prototype,"sublayers",void 0),(0,o._)([(0,L.K)("sublayers",{layers:{type:[ee.A]},visibleLayers:{type:[x.jz]}})],i.prototype,"writeSublayers",null),(0,o._)([(0,p.MZ)({type:["show","hide","hide-children"]})],i.prototype,"listMode",void 0),(0,o._)([(0,p.MZ)({json:{read:!1},readOnly:!0,value:"map-image"})],i.prototype,"type",void 0),(0,o._)([(0,p.MZ)(w.OZ)],i.prototype,"url",void 0),i=(0,o._)([(0,O.$)("esri.layers.MapImageLayer")],i);const te=i},14916:(j,I,r)=>{function v(M){const E=M.layer;return"floorInfo"in E&&E.floorInfo?.floorField&&"floors"in M.view?h(M.view.floors,E.floorInfo.floorField):null}function o(M,E){return"floorInfo"in E&&E.floorInfo?.floorField?h(M,E.floorInfo.floorField):null}function h(M,E){if(!M?.length)return null;const T=M.filter(A=>""!==A).map(A=>`'${A}'`);return T.push("''"),`${E} IN (${T.join(",")}) OR ${E} IS NULL`}r.d(I,{E:()=>v,f:()=>o})}}]);