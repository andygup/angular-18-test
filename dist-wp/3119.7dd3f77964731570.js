"use strict";(self.webpackChunkangular_18_test=self.webpackChunkangular_18_test||[]).push([[3119],{83119:(R,g,e)=>{e.r(g),e.d(g,{default:()=>h});var t=e(8189),r=(e(35150),e(3248),e(40707),e(5922),e(76576)),m=e(29459),n=e(31178),i=e(5605),l=e(48900),u=e(85211),M=e(41474);let y=class extends M.A{constructor(s){super(s),this.type="group",this.layerViews=new n.A}destroy(){this.layerViews.length=0}_allLayerViewVisibility(s){this.layerViews.forEach(a=>{a.visible=s})}initialize(){this.addHandles([this.layerViews.on("change",s=>this._layerViewsChangeHandler(s)),(0,l.wB)(()=>this.layer?.visibilityMode,()=>{this.layer&&this._applyVisibility(()=>this._allLayerViewVisibility(this.visible),()=>this._applyExclusiveVisibility(null))},l.OH),(0,l.wB)(()=>this.visible,s=>{this._applyVisibility(()=>this._allLayerViewVisibility(s),()=>{})},l.OH)],"grouplayerview"),this._layerViewsChangeHandler({target:null,added:this.layerViews.toArray(),removed:[],moved:[]})}get creatingLayerViews(){return this.view?.layerViewManager?.isCreatingLayerViewsForLayer(this.layer)??!1}set layerViews(s){this._set("layerViews",(0,i.V)(s,this._get("layerViews")))}get updatingProgress(){return 0===this.layerViews.length?1:this.layerViews.reduce((s,a)=>s+a.updatingProgress,0)/this.layerViews.length}isUpdating(){return this.creatingLayerViews||this.layerViews.some(s=>s.updating)}_hasLayerViewVisibleOverrides(){return this.layerViews.some(s=>s._isOverridden("visible"))}_findLayerViewForLayer(s){return s&&this.layerViews.find(a=>a.layer===s)}_firstVisibleOnLayerOrder(){const s=this.layer.layers.find(a=>!!this._findLayerViewForLayer(a)?.visible);return s&&this._findLayerViewForLayer(s)}_applyExclusiveVisibility(s){null==s&&null==(s=this._firstVisibleOnLayerOrder())&&this.layerViews.length>0&&(s=this._findLayerViewForLayer(this.layer.layers.at(0))),this.layerViews.forEach(a=>{a.visible=a===s})}_layerViewsChangeHandler(s){this.removeHandles("grouplayerview:visible"),this.addHandles(this.layerViews.map(P=>(0,l.wB)(()=>P.visible,C=>this._applyVisibility(()=>{C!==this.visible&&(P.visible=this.visible)},()=>this._applyExclusiveVisibility(C?P:null)),l.OH)).toArray(),"grouplayerview:visible");const a=s.added[s.added.length-1];this._applyVisibility(()=>this._allLayerViewVisibility(this.visible),()=>this._applyExclusiveVisibility(a?.visible?a:null))}_applyVisibility(s,a){this._hasLayerViewVisibleOverrides()&&("inherited"===this.layer?.visibilityMode?s():"exclusive"===this.layer?.visibilityMode&&a())}};(0,t._)([(0,u.MZ)({readOnly:!0})],y.prototype,"creatingLayerViews",null),(0,t._)([(0,u.MZ)({cast:i.H})],y.prototype,"layerViews",null),(0,t._)([(0,u.MZ)({readOnly:!0})],y.prototype,"updatingProgress",null),(0,t._)([(0,u.MZ)()],y.prototype,"view",void 0),y=(0,t._)([(0,r.$)("esri.views.layers.GroupLayerView")],y);const o=y;let p=class extends((0,m.e)(o)){attach(){this._updateStageChildren(),this.addAttachHandles(this.layerViews.on("after-changes",()=>this._updateStageChildren()))}detach(){this.container.removeAllChildren()}update(s){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((s,a)=>this.container.addChildAt(s.container,a))}};p=(0,t._)([(0,r.$)("esri.views.2d.layers.GroupLayerView2D")],p);const h=p},29459:(R,g,e)=>{e.d(g,{e:()=>S});var o,t=e(8189),O=e(31178),E=e(5605),f=e(5922),d=e(48900),r=e(85211),l=(e(3248),e(35150),e(40707),e(76576)),u=e(88766),M=e(60746),y=e(66727);let p=o=class extends y.A{constructor(L){super(L),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new o({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}};(0,t._)([(0,r.MZ)({type:[Number,String],json:{write:!0}})],p.prototype,"left",void 0),(0,t._)([(0,r.MZ)({type:[Number,String],json:{write:!0}})],p.prototype,"right",void 0),(0,t._)([(0,r.MZ)({type:[Number,String],json:{write:!0}})],p.prototype,"top",void 0),(0,t._)([(0,r.MZ)({type:[Number,String],json:{write:!0}})],p.prototype,"bottom",void 0),p=o=(0,t._)([(0,l.$)("esri.views.layers.support.ClipRect")],p);const h=p;var s=e(75644);let a=class extends y.A{constructor(L){super(L),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}};(0,t._)([(0,r.MZ)({type:[[[Number]]],json:{write:!0}})],a.prototype,"path",void 0),a=(0,t._)([(0,l.$)("esri.views.layers.support.Path")],a);const P=a;var C=e(6558);const V=O.A.ofType({key:"type",base:null,typeMap:{rect:h,path:P,geometry:s.A}}),S=L=>{let v=class extends L{constructor(){super(...arguments),this.attached=!1,this.clips=new V,this.highlightOptions=null,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this._visibleAtCurrentScale=!0}initialize(){const c=this.view?.spatialReferenceLocked??!0;this.view?.spatialReference&&c&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new f.A("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new u.m),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.addHandles([(0,d.wB)(()=>this.suspended,_=>{this.container&&(this.container.visible=!_)},d.pc),(0,d.wB)(()=>this.updateSuspended,_=>{this.view&&!_&&this.updateRequested&&this.view.requestUpdate()},d.pc),(0,d.wB)(()=>this.layer?.opacity??1,_=>{this.container&&(this.container.opacity=_)},d.pc),(0,d.wB)(()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal",_=>{this.container&&(this.container.blendMode=_)},d.pc),(0,d.wB)(()=>this.layer&&"effect"in this.layer?this.layer.effect:null,_=>{this.container&&(this.container.effect=_)},d.pc),(0,d.wB)(()=>this.highlightOptions,_=>this.container.highlightOptions=_,d.pc),(0,d.on)(()=>this.clips,"change",()=>{this.container&&(this.container.clips=this.clips)},d.pc),(0,d.wB)(()=>({scale:this.view?.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null}),({scale:_,scaleRange:w})=>{const D=(0,C.E5)(w,_);D!==this._visibleAtCurrentScale&&(this._visibleAtCurrentScale=D)},d.pc)],"constructor"),this.view?.whenLayerView?this.view.whenLayerView(this.layer).then(_=>{_===this&&this.processAttach()},()=>{}):this.when().then(()=>{this.processAttach()},()=>{}))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){const c=this.view?.spatialReference;return null==c||this.supportsSpatialReference(c)}get updating(){return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!!this._updatingHandles?.updating)}get visibleAtCurrentScale(){return this._visibleAtCurrentScale}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.removeHandles("attach"),this.detach(),this.updateRequested=!1)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.updateSuspended||this.view.requestUpdate())}processUpdate(c){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",c),this.updateRequested&&!this.updateSuspended&&(this.updateRequested=!1,this.update(c))):this.updateRequested=!1}hitTest(c,A){return Promise.resolve(null)}supportsSpatialReference(c){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const c=super.getSuspendInfo(),A=!this.spatialReferenceSupported;return A&&(c.spatialReferenceNotSupported=A),c}addAttachHandles(c){this.addHandles(c,"attach")}};return(0,t._)([(0,r.MZ)()],v.prototype,"attached",void 0),(0,t._)([(0,r.MZ)({type:V,set(c){const A=(0,E.V)(c,this._get("clips"),V);this._set("clips",A)}})],v.prototype,"clips",void 0),(0,t._)([(0,r.MZ)()],v.prototype,"container",void 0),(0,t._)([(0,r.MZ)({type:M.A})],v.prototype,"highlightOptions",void 0),(0,t._)([(0,r.MZ)()],v.prototype,"moving",void 0),(0,t._)([(0,r.MZ)({readOnly:!0})],v.prototype,"spatialReferenceSupported",null),(0,t._)([(0,r.MZ)({readOnly:!0})],v.prototype,"updateParameters",void 0),(0,t._)([(0,r.MZ)()],v.prototype,"updateRequested",void 0),(0,t._)([(0,r.MZ)()],v.prototype,"updating",null),(0,t._)([(0,r.MZ)()],v.prototype,"view",void 0),(0,t._)([(0,r.MZ)()],v.prototype,"_visibleAtCurrentScale",void 0),(0,t._)([(0,r.MZ)({readOnly:!0})],v.prototype,"visibleAtCurrentScale",null),v=(0,t._)([(0,l.$)("esri.views.2d.layers.LayerView2D")],v),v}},41474:(R,g,e)=>{e.d(g,{A:()=>p});var t=e(8189),O=e(98877),E=e(42425),f=e(3046),d=e(35150),r=e(11432),m=e(64261),n=e(85211),u=(e(3248),e(40707),e(76576)),M=e(56985),y=e(6558);let o=class extends((0,f.sA)((0,m.g)(E.A.EventedMixin(O.A)))){constructor(h){super(h),this._updatingHandles=new M.U,this.layer=null,this.parent=null}initialize(){this.when().catch(h=>{if("layerview:create-error"!==h.name){const s=this.layer&&this.layer.id||"no id",a=this.layer?.title||"no title";d.A.getLogger(this).error("#resolve()",`Failed to resolve layer view (layer title: '${a}', id: '${s}')`,h)}})}destroy(){this._updatingHandles=(0,r.pR)(this._updatingHandles)}get fullOpacity(){return(this.layer?.opacity??1)*(this.parent?.fullOpacity??1)}get suspended(){return this.destroyed||!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer?.legendEnabled}get updating(){return!(!this._updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get updateSuspended(){return this.suspended}get visible(){return!0===this.layer?.visible}set visible(h){this._overrideIfSome("visible",h)}get visibleAtCurrentScale(){return!0}get visibleAtCurrentTimeExtent(){const h=this.view.timeExtent,s=this.layer?.visibilityTimeExtent;return!h||!s||!h.intersection(s).isEmpty}canResume(){const h=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready&&(0,y.g7)(h)&&this.visibleAtCurrentScale&&this.visibleAtCurrentTimeExtent||!1}getSuspendInfo(){const h=this.parent?.suspended?this.parent.suspendInfo:{};return this.view?.ready||(h.viewNotReady=!0),this.layer&&this.layer.loaded||(h.layerNotLoaded=!0),(0,y.g7)(this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null)&&this.visibleAtCurrentScale||(h.outsideScaleRange=!0),this.visibleAtCurrentTimeExtent||(h.outsideVisibilityTimeExtent=!0),this.visible||(h.layerInvisible=!0),h}isUpdating(){return!1}};(0,t._)([(0,n.MZ)()],o.prototype,"view",void 0),(0,t._)([(0,n.MZ)()],o.prototype,"fullOpacity",null),(0,t._)([(0,n.MZ)()],o.prototype,"layer",void 0),(0,t._)([(0,n.MZ)()],o.prototype,"parent",void 0),(0,t._)([(0,n.MZ)({readOnly:!0})],o.prototype,"suspended",null),(0,t._)([(0,n.MZ)({readOnly:!0})],o.prototype,"suspendInfo",null),(0,t._)([(0,n.MZ)({readOnly:!0})],o.prototype,"legendEnabled",null),(0,t._)([(0,n.MZ)({type:Boolean,readOnly:!0})],o.prototype,"updating",null),(0,t._)([(0,n.MZ)({readOnly:!0})],o.prototype,"updatingProgress",null),(0,t._)([(0,n.MZ)()],o.prototype,"updateSuspended",null),(0,t._)([(0,n.MZ)()],o.prototype,"visible",null),(0,t._)([(0,n.MZ)({readOnly:!0})],o.prototype,"visibleAtCurrentScale",null),(0,t._)([(0,n.MZ)({readOnly:!0})],o.prototype,"visibleAtCurrentTimeExtent",null),o=(0,t._)([(0,u.$)("esri.views.layers.LayerView")],o);const p=o},66727:(R,g,e)=>{e.d(g,{A:()=>i});var t=e(8189),O=e(71065),E=e(85211),m=(e(3248),e(35150),e(40707),e(76576));let n=class extends O.oY{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};(0,t._)([(0,E.MZ)({readOnly:!0})],n.prototype,"version",null),n=(0,t._)([(0,m.$)("esri.views.layers.support.ClipArea")],n);const i=n},75644:(R,g,e)=>{e.d(g,{A:()=>h});var y,t=e(8189),E=(e(21152),e(85211)),m=(e(3248),e(35150),e(40707),e(76576)),n=e(68643),i=e(61320),l=e(66727),u=e(28067),M=e(55861);const o={base:n.A,key:"type",typeMap:{extent:u.A,polygon:M.A}};let p=y=class extends l.A{constructor(s){super(s),this.type="geometry",this.geometry=null}clone(){return new y({geometry:this.geometry?.clone()??null})}commitVersionProperties(){this.commitProperty("geometry")}};(0,t._)([(0,E.MZ)({types:o,json:{read:i.rS,write:!0}})],p.prototype,"geometry",void 0),p=y=(0,t._)([(0,m.$)("esri.views.layers.support.Geometry")],p);const h=p},6558:(R,g,e)=>{function t(i){return i&&"function"==typeof i.highlight}function f(i,l){if(l&&i){const{minScale:u,maxScale:M}=i;if(function d(i,l){return null!=i&&i>0||null!=l&&l>0}(u,M))return function E(i,l,u){return null==i||i>=u&&(0===l||i<=l)}(l,u,M)}return!0}function r(i){return!i?.minScale||!i.maxScale||i.minScale>=i.maxScale}e.d(g,{E5:()=>f,Of:()=>t,g7:()=>r})}}]);