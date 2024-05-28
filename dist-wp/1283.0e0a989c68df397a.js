"use strict";(self.webpackChunkangular_18_test=self.webpackChunkangular_18_test||[]).push([[1283],{96604:(S,g,t)=>{t.d(g,{Y:()=>d});var e=t(8189),n=(t(35150),t(3248),t(40707),t(5922),t(76576)),v=t(51995),a=t(12273),s=t(76582),o=t(15442);class h extends o.Y{constructor(r,O,A,D,C,P,_=null){super(r,O,A,D,C,P),this.bitmap=new s.mb(_),this.bitmap.coordScale=[C,P],this.bitmap.once("isReady",()=>this.ready())}destroy(){super.destroy(),this.bitmap.destroy()}beforeRender(r){this.bitmap.beforeRender(r),super.beforeRender(r)}afterRender(r){this.bitmap.afterRender(r),super.afterRender(r)}set stencilRef(r){this.bitmap.stencilRef=r}get stencilRef(){return this.bitmap.stencilRef}_createTransforms(){return{displayViewScreenMat3:(0,a.vt)(),tileMat3:(0,a.vt)()}}setTransform(r){super.setTransform(r),this.bitmap.transforms.displayViewScreenMat3=this.transforms.displayViewScreenMat3}onAttach(){this.bitmap.stage=this.stage}onDetach(){this.bitmap&&(this.bitmap.stage=null)}}var p=t(12173),u=t(69473),l=t(37188);class c extends l.A{get requiresDedicatedFBO(){return this.children.some(r=>"additive"===r.bitmap.blendFunction)}createTile(r){const O=this._tileInfoView.getTileBounds((0,v.vt)(),r),A=this._tileInfoView.getTileResolution(r.level),[D,C]=this._tileInfoView.tileInfo.size;return new h(r,A,O[0],O[3],D,C)}prepareRenderPasses(r){const O=r.registerRenderPass({name:"bitmap (tile)",brushes:[p.d.bitmap],target:()=>this.children.map(A=>A.bitmap),drawPhase:u.S5.MAP});return[...super.prepareRenderPasses(r),O]}doRender(r){this.visible&&r.drawPhase===u.S5.MAP&&super.doRender(r)}}const d=y=>{let r=class extends y{attach(){this.view.timeline.record(`${this.layer.title} (BitmapTileLayer) Attach`),this._bitmapView=new c(this._tileInfoView),this.container.addChild(this._bitmapView)}detach(){this.container.removeChild(this._bitmapView),this._bitmapView?.removeAllChildren(),this._bitmapView=null}};return r=(0,e._)([(0,n.$)("esri.views.2d.layers.BitmapTileLayerView2D")],r),r}},29459:(S,g,t)=>{t.d(g,{e:()=>C});var l,e=t(8189),f=t(31178),M=t(5605),R=t(5922),i=t(48900),n=t(85211),o=(t(3248),t(35150),t(40707),t(76576)),h=t(88766),p=t(60746),u=t(66727);let c=l=class extends u.A{constructor(P){super(P),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new l({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}};(0,e._)([(0,n.MZ)({type:[Number,String],json:{write:!0}})],c.prototype,"left",void 0),(0,e._)([(0,n.MZ)({type:[Number,String],json:{write:!0}})],c.prototype,"right",void 0),(0,e._)([(0,n.MZ)({type:[Number,String],json:{write:!0}})],c.prototype,"top",void 0),(0,e._)([(0,n.MZ)({type:[Number,String],json:{write:!0}})],c.prototype,"bottom",void 0),c=l=(0,e._)([(0,o.$)("esri.views.layers.support.ClipRect")],c);const d=c;var y=t(75644);let r=class extends u.A{constructor(P){super(P),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}};(0,e._)([(0,n.MZ)({type:[[[Number]]],json:{write:!0}})],r.prototype,"path",void 0),r=(0,e._)([(0,o.$)("esri.views.layers.support.Path")],r);const O=r;var A=t(6558);const D=f.A.ofType({key:"type",base:null,typeMap:{rect:d,path:O,geometry:y.A}}),C=P=>{let _=class extends P{constructor(){super(...arguments),this.attached=!1,this.clips=new D,this.highlightOptions=null,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this._visibleAtCurrentScale=!0}initialize(){const m=this.view?.spatialReferenceLocked??!0;this.view?.spatialReference&&m&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new R.A("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new h.m),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.addHandles([(0,i.wB)(()=>this.suspended,E=>{this.container&&(this.container.visible=!E)},i.pc),(0,i.wB)(()=>this.updateSuspended,E=>{this.view&&!E&&this.updateRequested&&this.view.requestUpdate()},i.pc),(0,i.wB)(()=>this.layer?.opacity??1,E=>{this.container&&(this.container.opacity=E)},i.pc),(0,i.wB)(()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal",E=>{this.container&&(this.container.blendMode=E)},i.pc),(0,i.wB)(()=>this.layer&&"effect"in this.layer?this.layer.effect:null,E=>{this.container&&(this.container.effect=E)},i.pc),(0,i.wB)(()=>this.highlightOptions,E=>this.container.highlightOptions=E,i.pc),(0,i.on)(()=>this.clips,"change",()=>{this.container&&(this.container.clips=this.clips)},i.pc),(0,i.wB)(()=>({scale:this.view?.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null}),({scale:E,scaleRange:I})=>{const T=(0,A.E5)(I,E);T!==this._visibleAtCurrentScale&&(this._visibleAtCurrentScale=T)},i.pc)],"constructor"),this.view?.whenLayerView?this.view.whenLayerView(this.layer).then(E=>{E===this&&this.processAttach()},()=>{}):this.when().then(()=>{this.processAttach()},()=>{}))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){const m=this.view?.spatialReference;return null==m||this.supportsSpatialReference(m)}get updating(){return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!!this._updatingHandles?.updating)}get visibleAtCurrentScale(){return this._visibleAtCurrentScale}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.removeHandles("attach"),this.detach(),this.updateRequested=!1)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.updateSuspended||this.view.requestUpdate())}processUpdate(m){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",m),this.updateRequested&&!this.updateSuspended&&(this.updateRequested=!1,this.update(m))):this.updateRequested=!1}hitTest(m,L){return Promise.resolve(null)}supportsSpatialReference(m){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const m=super.getSuspendInfo(),L=!this.spatialReferenceSupported;return L&&(m.spatialReferenceNotSupported=L),m}addAttachHandles(m){this.addHandles(m,"attach")}};return(0,e._)([(0,n.MZ)()],_.prototype,"attached",void 0),(0,e._)([(0,n.MZ)({type:D,set(m){const L=(0,M.V)(m,this._get("clips"),D);this._set("clips",L)}})],_.prototype,"clips",void 0),(0,e._)([(0,n.MZ)()],_.prototype,"container",void 0),(0,e._)([(0,n.MZ)({type:p.A})],_.prototype,"highlightOptions",void 0),(0,e._)([(0,n.MZ)()],_.prototype,"moving",void 0),(0,e._)([(0,n.MZ)({readOnly:!0})],_.prototype,"spatialReferenceSupported",null),(0,e._)([(0,n.MZ)({readOnly:!0})],_.prototype,"updateParameters",void 0),(0,e._)([(0,n.MZ)()],_.prototype,"updateRequested",void 0),(0,e._)([(0,n.MZ)()],_.prototype,"updating",null),(0,e._)([(0,n.MZ)()],_.prototype,"view",void 0),(0,e._)([(0,n.MZ)()],_.prototype,"_visibleAtCurrentScale",void 0),(0,e._)([(0,n.MZ)({readOnly:!0})],_.prototype,"visibleAtCurrentScale",null),_=(0,e._)([(0,o.$)("esri.views.2d.layers.LayerView2D")],_),_}},86131:(S,g,t)=>{function M(i,n,v,a){if(v.level===a.level)return n;const s=i.tileInfo.size,o=i.getTileResolution(v.level),h=i.getTileResolution(a.level);let p=i.getLODInfoAt(a.level);const u=p.getXForColumn(a.col),l=p.getYForRow(a.row);p=i.getLODInfoAt(v.level);const c=p.getXForColumn(v.col),d=p.getYForRow(v.row),y=function e(i){return i instanceof HTMLImageElement?i.naturalWidth:i.width}(n)/s[0],r=function f(i){return i instanceof HTMLImageElement?i.naturalHeight:i.height}(n)/s[1],O=Math.round(y*((u-c)/o)),A=Math.round(r*(-(l-d)/o)),D=Math.round(y*s[0]*(h/o)),C=Math.round(r*s[1]*(h/o)),P=R(s);return P.getContext("2d").drawImage(n,O,A,D,C,0,0,s[0],s[1]),P}function R(i){const n=document.createElement("canvas");return[n.width,n.height]=i,n}t.d(g,{G:()=>R,t:()=>M})},41474:(S,g,t)=>{t.d(g,{A:()=>c});var e=t(8189),f=t(98877),M=t(42425),R=t(3046),i=t(35150),n=t(11432),v=t(64261),a=t(85211),h=(t(3248),t(40707),t(76576)),p=t(56985),u=t(6558);let l=class extends((0,R.sA)((0,v.g)(M.A.EventedMixin(f.A)))){constructor(d){super(d),this._updatingHandles=new p.U,this.layer=null,this.parent=null}initialize(){this.when().catch(d=>{if("layerview:create-error"!==d.name){const y=this.layer&&this.layer.id||"no id",r=this.layer?.title||"no title";i.A.getLogger(this).error("#resolve()",`Failed to resolve layer view (layer title: '${r}', id: '${y}')`,d)}})}destroy(){this._updatingHandles=(0,n.pR)(this._updatingHandles)}get fullOpacity(){return(this.layer?.opacity??1)*(this.parent?.fullOpacity??1)}get suspended(){return this.destroyed||!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer?.legendEnabled}get updating(){return!(!this._updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get updateSuspended(){return this.suspended}get visible(){return!0===this.layer?.visible}set visible(d){this._overrideIfSome("visible",d)}get visibleAtCurrentScale(){return!0}get visibleAtCurrentTimeExtent(){const d=this.view.timeExtent,y=this.layer?.visibilityTimeExtent;return!d||!y||!d.intersection(y).isEmpty}canResume(){const d=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready&&(0,u.g7)(d)&&this.visibleAtCurrentScale&&this.visibleAtCurrentTimeExtent||!1}getSuspendInfo(){const d=this.parent?.suspended?this.parent.suspendInfo:{};return this.view?.ready||(d.viewNotReady=!0),this.layer&&this.layer.loaded||(d.layerNotLoaded=!0),(0,u.g7)(this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null)&&this.visibleAtCurrentScale||(d.outsideScaleRange=!0),this.visibleAtCurrentTimeExtent||(d.outsideVisibilityTimeExtent=!0),this.visible||(d.layerInvisible=!0),d}isUpdating(){return!1}};(0,e._)([(0,a.MZ)()],l.prototype,"view",void 0),(0,e._)([(0,a.MZ)()],l.prototype,"fullOpacity",null),(0,e._)([(0,a.MZ)()],l.prototype,"layer",void 0),(0,e._)([(0,a.MZ)()],l.prototype,"parent",void 0),(0,e._)([(0,a.MZ)({readOnly:!0})],l.prototype,"suspended",null),(0,e._)([(0,a.MZ)({readOnly:!0})],l.prototype,"suspendInfo",null),(0,e._)([(0,a.MZ)({readOnly:!0})],l.prototype,"legendEnabled",null),(0,e._)([(0,a.MZ)({type:Boolean,readOnly:!0})],l.prototype,"updating",null),(0,e._)([(0,a.MZ)({readOnly:!0})],l.prototype,"updatingProgress",null),(0,e._)([(0,a.MZ)()],l.prototype,"updateSuspended",null),(0,e._)([(0,a.MZ)()],l.prototype,"visible",null),(0,e._)([(0,a.MZ)({readOnly:!0})],l.prototype,"visibleAtCurrentScale",null),(0,e._)([(0,a.MZ)({readOnly:!0})],l.prototype,"visibleAtCurrentTimeExtent",null),l=(0,e._)([(0,h.$)("esri.views.layers.LayerView")],l);const c=l},96081:(S,g,t)=>{t.d(g,{A:()=>s});var e=t(8189),f=t(35150),M=t(56492),R=t(48900),a=(t(3248),t(40707),t(5922),t(76576));const s=o=>{let h=class extends o{initialize(){this.addHandles((0,R.on)(()=>this.layer,"refresh",p=>{this.doRefresh(p.dataChanged).catch(u=>{(0,M.zf)(u)||f.A.getLogger(this).error(u)})}),"RefreshableLayerView")}};return h=(0,e._)([(0,a.$)("esri.views.layers.RefreshableLayerView")],h),h}},66727:(S,g,t)=>{t.d(g,{A:()=>s});var e=t(8189),f=t(71065),M=t(85211),v=(t(3248),t(35150),t(40707),t(76576));let a=class extends f.oY{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};(0,e._)([(0,M.MZ)({readOnly:!0})],a.prototype,"version",null),a=(0,e._)([(0,v.$)("esri.views.layers.support.ClipArea")],a);const s=a},75644:(S,g,t)=>{t.d(g,{A:()=>d});var u,e=t(8189),M=(t(21152),t(85211)),v=(t(3248),t(35150),t(40707),t(76576)),a=t(68643),s=t(61320),o=t(66727),h=t(28067),p=t(55861);const l={base:a.A,key:"type",typeMap:{extent:h.A,polygon:p.A}};let c=u=class extends o.A{constructor(y){super(y),this.type="geometry",this.geometry=null}clone(){return new u({geometry:this.geometry?.clone()??null})}commitVersionProperties(){this.commitProperty("geometry")}};(0,e._)([(0,M.MZ)({types:l,json:{read:s.rS,write:!0}})],c.prototype,"geometry",void 0),c=u=(0,e._)([(0,v.$)("esri.views.layers.support.Geometry")],c);const d=c},6558:(S,g,t)=>{function e(s){return s&&"function"==typeof s.highlight}function R(s,o){if(o&&s){const{minScale:h,maxScale:p}=s;if(function i(s,o){return null!=s&&s>0||null!=o&&o>0}(h,p))return function M(s,o,h){return null==s||s>=h&&(0===o||s<=o)}(o,h,p)}return!0}function n(s){return!s?.minScale||!s.maxScale||s.minScale>=s.maxScale}t.d(g,{E5:()=>R,Of:()=>e,g7:()=>n})}}]);