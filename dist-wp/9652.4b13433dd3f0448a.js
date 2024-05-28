"use strict";(self.webpackChunkangular_18_test=self.webpackChunkangular_18_test||[]).push([[9652],{29459:(T,E,t)=>{t.d(E,{e:()=>W});var h,s=t(8189),P=t(31178),v=t(5605),O=t(5922),l=t(48900),o=t(85211),d=(t(3248),t(35150),t(40707),t(76576)),M=t(88766),f=t(60746),D=t(66727);let g=h=class extends D.A{constructor(U){super(U),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new h({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}};(0,s._)([(0,o.MZ)({type:[Number,String],json:{write:!0}})],g.prototype,"left",void 0),(0,s._)([(0,o.MZ)({type:[Number,String],json:{write:!0}})],g.prototype,"right",void 0),(0,s._)([(0,o.MZ)({type:[Number,String],json:{write:!0}})],g.prototype,"top",void 0),(0,s._)([(0,o.MZ)({type:[Number,String],json:{write:!0}})],g.prototype,"bottom",void 0),g=h=(0,s._)([(0,d.$)("esri.views.layers.support.ClipRect")],g);const _=g;var A=t(75644);let R=class extends D.A{constructor(U){super(U),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}};(0,s._)([(0,o.MZ)({type:[[[Number]]],json:{write:!0}})],R.prototype,"path",void 0),R=(0,s._)([(0,d.$)("esri.views.layers.support.Path")],R);const j=R;var w=t(6558);const B=P.A.ofType({key:"type",base:null,typeMap:{rect:_,path:j,geometry:A.A}}),W=U=>{let c=class extends U{constructor(){super(...arguments),this.attached=!1,this.clips=new B,this.highlightOptions=null,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this._visibleAtCurrentScale=!0}initialize(){const p=this.view?.spatialReferenceLocked??!0;this.view?.spatialReference&&p&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new O.A("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new M.m),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.addHandles([(0,l.wB)(()=>this.suspended,u=>{this.container&&(this.container.visible=!u)},l.pc),(0,l.wB)(()=>this.updateSuspended,u=>{this.view&&!u&&this.updateRequested&&this.view.requestUpdate()},l.pc),(0,l.wB)(()=>this.layer?.opacity??1,u=>{this.container&&(this.container.opacity=u)},l.pc),(0,l.wB)(()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal",u=>{this.container&&(this.container.blendMode=u)},l.pc),(0,l.wB)(()=>this.layer&&"effect"in this.layer?this.layer.effect:null,u=>{this.container&&(this.container.effect=u)},l.pc),(0,l.wB)(()=>this.highlightOptions,u=>this.container.highlightOptions=u,l.pc),(0,l.on)(()=>this.clips,"change",()=>{this.container&&(this.container.clips=this.clips)},l.pc),(0,l.wB)(()=>({scale:this.view?.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null}),({scale:u,scaleRange:K})=>{const I=(0,w.E5)(K,u);I!==this._visibleAtCurrentScale&&(this._visibleAtCurrentScale=I)},l.pc)],"constructor"),this.view?.whenLayerView?this.view.whenLayerView(this.layer).then(u=>{u===this&&this.processAttach()},()=>{}):this.when().then(()=>{this.processAttach()},()=>{}))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){const p=this.view?.spatialReference;return null==p||this.supportsSpatialReference(p)}get updating(){return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!!this._updatingHandles?.updating)}get visibleAtCurrentScale(){return this._visibleAtCurrentScale}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.removeHandles("attach"),this.detach(),this.updateRequested=!1)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.updateSuspended||this.view.requestUpdate())}processUpdate(p){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",p),this.updateRequested&&!this.updateSuspended&&(this.updateRequested=!1,this.update(p))):this.updateRequested=!1}hitTest(p,C){return Promise.resolve(null)}supportsSpatialReference(p){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const p=super.getSuspendInfo(),C=!this.spatialReferenceSupported;return C&&(p.spatialReferenceNotSupported=C),p}addAttachHandles(p){this.addHandles(p,"attach")}};return(0,s._)([(0,o.MZ)()],c.prototype,"attached",void 0),(0,s._)([(0,o.MZ)({type:B,set(p){const C=(0,v.V)(p,this._get("clips"),B);this._set("clips",C)}})],c.prototype,"clips",void 0),(0,s._)([(0,o.MZ)()],c.prototype,"container",void 0),(0,s._)([(0,o.MZ)({type:f.A})],c.prototype,"highlightOptions",void 0),(0,s._)([(0,o.MZ)()],c.prototype,"moving",void 0),(0,s._)([(0,o.MZ)({readOnly:!0})],c.prototype,"spatialReferenceSupported",null),(0,s._)([(0,o.MZ)({readOnly:!0})],c.prototype,"updateParameters",void 0),(0,s._)([(0,o.MZ)()],c.prototype,"updateRequested",void 0),(0,s._)([(0,o.MZ)()],c.prototype,"updating",null),(0,s._)([(0,o.MZ)()],c.prototype,"view",void 0),(0,s._)([(0,o.MZ)()],c.prototype,"_visibleAtCurrentScale",void 0),(0,s._)([(0,o.MZ)({readOnly:!0})],c.prototype,"visibleAtCurrentScale",null),c=(0,s._)([(0,d.$)("esri.views.2d.layers.LayerView2D")],c),c}},89652:(T,E,t)=>{t.r(E),t.d(E,{default:()=>V});var s=t(10467),P=t(8189),v=t(89952),O=t(31178),l=t(2993),o=t(17715),m=t(48900),n=t(85211),M=(t(3248),t(35150),t(76576)),f=t(58226),D=t(37304),h=t(23632),g=t(34720),_=t(51882),A=t(22560),R=t(48393),j=t(25735),w=t(29459),B=t(57052),W=t(13031),U=t(41474);const c=["route-info","direction-line","direction-point","polygon-barrier","polyline-barrier","point-barrier","stop"],p={graphic:null,property:null,oldValue:null,newValue:null};function C(e){return e instanceof f.A||e instanceof D.A||e instanceof h.A||e instanceof g.A||e instanceof _.A||e instanceof A.A||e instanceof R.A}let I=class extends((0,w.e)(U.A)){constructor(){super(...arguments),this._graphics=new O.A,this._highlightIds=new Map,this._networkFeatureMap=new Map,this._networkGraphicMap=new Map}get _routeItems(){return new l.A({getCollections:()=>null==this.layer||this.destroyed?[]:[null!=this.layer.routeInfo?new O.A([this.layer.routeInfo]):null,this.layer.directionLines,this.layer.directionPoints,this.layer.polygonBarriers,this.layer.polylineBarriers,this.layer.pointBarriers,this.layer.stops]})}initialize(){this._updatingHandles.addOnCollectionChange(()=>this._routeItems,e=>this._routeItemsChanged(e),m.Vh)}destroy(){this._networkFeatureMap.clear(),this._networkGraphicMap.clear(),this._graphics.removeAll(),this._get("_routeItems")?.destroy()}attach(){this._createGraphicsView()}detach(){this._destroyGraphicsView()}fetchPopupFeaturesAtLocation(e,i){var r=this;return(0,s.A)(function*(){return r._graphicsView.hitTest(e).filter(({popupTemplate:y})=>!!y)})()}highlight(e){let i;i=C(e)?[this._getNetworkFeatureUid(e)]:function K(e){return Array.isArray(e)&&e.length>0&&C(e[0])}(e)?e.map(y=>this._getNetworkFeatureUid(y)):function u(e){return O.A.isCollection(e)&&e.length&&C(e.at(0))}(e)?e.map(y=>this._getNetworkFeatureUid(y)).toArray():[e.uid];const r=i.filter(v.Ru);return r.length?(this._addHighlight(r),(0,o.hA)(()=>this._removeHighlight(r))):(0,o.hA)()}hitTest(e,i){var r=this;return(0,s.A)(function*(){if(r.suspended)return null;const y=r._graphicsView.hitTest(e).filter(v.Ru).map(L=>r._networkGraphicMap.get(L));if(!y.length)return null;const{layer:S}=r;return y.reverse().map(L=>({type:"route",layer:S,mapPoint:e,networkFeature:L}))})()}isUpdating(){return this._graphicsView.updating}moveEnd(){}update(e){this._graphicsView.processUpdate(e)}viewChange(){this._graphicsView.viewChange()}_addHighlight(e){for(const i of e)if(this._highlightIds.has(i)){const r=this._highlightIds.get(i);this._highlightIds.set(i,r+1)}else this._highlightIds.set(i,1);this._updateHighlight()}_createGraphic(e){const i=e.toGraphic();return i.layer=this.layer,i.sourceLayer=this.layer,i}_createGraphicsView(){const e=this.view,r=new B.A(e.featuresTilingScheme);this._graphicsView=new W.A({container:r,graphics:this._graphics,requestUpdateCallback:()=>this.requestUpdate(),view:e}),this.container.addChild(r),this._updateHighlight()}_destroyGraphicsView(){this.container.removeChild(this._graphicsView.container),this._graphicsView.destroy()}_getDrawOrder(e){const i=this._networkGraphicMap.get(e);return c.indexOf(i.type)}_getNetworkFeatureUid(e){return this._networkFeatureMap.has(e)?this._networkFeatureMap.get(e).uid:null}_removeHighlight(e){for(const i of e)if(this._highlightIds.has(i)){const r=this._highlightIds.get(i)-1;0===r?this._highlightIds.delete(i):this._highlightIds.set(i,r)}this._updateHighlight()}_routeItemsChanged(e){if(e.removed.length){this._graphics.removeMany(e.removed.map(i=>{const r=this._networkFeatureMap.get(i);return this._networkFeatureMap.delete(i),this._networkGraphicMap.delete(r),r}));for(const i of e.removed)this.removeHandles(i)}if(e.added.length){this._graphics.addMany(e.added.map(i=>{const r=this._createGraphic(i);return null==r.symbol?null:(this._networkFeatureMap.set(i,r),this._networkGraphicMap.set(r,i),r)}).filter(v.Ru));for(const i of e.added)this.addHandles([(0,m.wB)(()=>i.geometry,(r,y)=>{this._updateGraphic(i,"geometry",r,y)}),(0,m.wB)(()=>i.symbol,(r,y)=>{this._updateGraphic(i,"symbol",r,y)})],i);this._graphics.sort((i,r)=>this._getDrawOrder(i)-this._getDrawOrder(r))}}_updateGraphic(e,i,r,y){if(!this._networkFeatureMap.has(e)){const L=this._createGraphic(e);return this._networkFeatureMap.set(e,L),this._networkGraphicMap.set(L,e),void this._graphics.add(L)}const S=this._networkFeatureMap.get(e);S[i]=r,p.graphic=S,p.property=i,p.oldValue=y,p.newValue=r,this._graphicsView.graphicUpdateHandler(p)}_updateHighlight(){const e=Array.from(this._highlightIds.keys()),i=(0,j.$r)("highlight");this._graphicsView.setHighlight(e.map(r=>({objectId:r,highlightFlags:i})))}};(0,P._)([(0,n.MZ)()],I.prototype,"_graphics",void 0),(0,P._)([(0,n.MZ)()],I.prototype,"_routeItems",null),I=(0,P._)([(0,M.$)("esri.views.2d.layers.RouteLayerView2D")],I);const V=I},41474:(T,E,t)=>{t.d(E,{A:()=>g});var s=t(8189),P=t(98877),v=t(42425),O=t(3046),l=t(35150),o=t(11432),m=t(64261),n=t(85211),M=(t(3248),t(40707),t(76576)),f=t(56985),D=t(6558);let h=class extends((0,O.sA)((0,m.g)(v.A.EventedMixin(P.A)))){constructor(_){super(_),this._updatingHandles=new f.U,this.layer=null,this.parent=null}initialize(){this.when().catch(_=>{if("layerview:create-error"!==_.name){const A=this.layer&&this.layer.id||"no id",R=this.layer?.title||"no title";l.A.getLogger(this).error("#resolve()",`Failed to resolve layer view (layer title: '${R}', id: '${A}')`,_)}})}destroy(){this._updatingHandles=(0,o.pR)(this._updatingHandles)}get fullOpacity(){return(this.layer?.opacity??1)*(this.parent?.fullOpacity??1)}get suspended(){return this.destroyed||!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer?.legendEnabled}get updating(){return!(!this._updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get updateSuspended(){return this.suspended}get visible(){return!0===this.layer?.visible}set visible(_){this._overrideIfSome("visible",_)}get visibleAtCurrentScale(){return!0}get visibleAtCurrentTimeExtent(){const _=this.view.timeExtent,A=this.layer?.visibilityTimeExtent;return!_||!A||!_.intersection(A).isEmpty}canResume(){const _=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready&&(0,D.g7)(_)&&this.visibleAtCurrentScale&&this.visibleAtCurrentTimeExtent||!1}getSuspendInfo(){const _=this.parent?.suspended?this.parent.suspendInfo:{};return this.view?.ready||(_.viewNotReady=!0),this.layer&&this.layer.loaded||(_.layerNotLoaded=!0),(0,D.g7)(this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null)&&this.visibleAtCurrentScale||(_.outsideScaleRange=!0),this.visibleAtCurrentTimeExtent||(_.outsideVisibilityTimeExtent=!0),this.visible||(_.layerInvisible=!0),_}isUpdating(){return!1}};(0,s._)([(0,n.MZ)()],h.prototype,"view",void 0),(0,s._)([(0,n.MZ)()],h.prototype,"fullOpacity",null),(0,s._)([(0,n.MZ)()],h.prototype,"layer",void 0),(0,s._)([(0,n.MZ)()],h.prototype,"parent",void 0),(0,s._)([(0,n.MZ)({readOnly:!0})],h.prototype,"suspended",null),(0,s._)([(0,n.MZ)({readOnly:!0})],h.prototype,"suspendInfo",null),(0,s._)([(0,n.MZ)({readOnly:!0})],h.prototype,"legendEnabled",null),(0,s._)([(0,n.MZ)({type:Boolean,readOnly:!0})],h.prototype,"updating",null),(0,s._)([(0,n.MZ)({readOnly:!0})],h.prototype,"updatingProgress",null),(0,s._)([(0,n.MZ)()],h.prototype,"updateSuspended",null),(0,s._)([(0,n.MZ)()],h.prototype,"visible",null),(0,s._)([(0,n.MZ)({readOnly:!0})],h.prototype,"visibleAtCurrentScale",null),(0,s._)([(0,n.MZ)({readOnly:!0})],h.prototype,"visibleAtCurrentTimeExtent",null),h=(0,s._)([(0,M.$)("esri.views.layers.LayerView")],h);const g=h},66727:(T,E,t)=>{t.d(E,{A:()=>a});var s=t(8189),P=t(71065),v=t(85211),m=(t(3248),t(35150),t(40707),t(76576));let n=class extends P.oY{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};(0,s._)([(0,v.MZ)({readOnly:!0})],n.prototype,"version",null),n=(0,s._)([(0,m.$)("esri.views.layers.support.ClipArea")],n);const a=n},75644:(T,E,t)=>{t.d(E,{A:()=>_});var D,s=t(8189),v=(t(21152),t(85211)),m=(t(3248),t(35150),t(40707),t(76576)),n=t(68643),a=t(61320),d=t(66727),M=t(28067),f=t(55861);const h={base:n.A,key:"type",typeMap:{extent:M.A,polygon:f.A}};let g=D=class extends d.A{constructor(A){super(A),this.type="geometry",this.geometry=null}clone(){return new D({geometry:this.geometry?.clone()??null})}commitVersionProperties(){this.commitProperty("geometry")}};(0,s._)([(0,v.MZ)({types:h,json:{read:a.rS,write:!0}})],g.prototype,"geometry",void 0),g=D=(0,s._)([(0,m.$)("esri.views.layers.support.Geometry")],g);const _=g},6558:(T,E,t)=>{function s(a){return a&&"function"==typeof a.highlight}function O(a,d){if(d&&a){const{minScale:M,maxScale:f}=a;if(function l(a,d){return null!=a&&a>0||null!=d&&d>0}(M,f))return function v(a,d,M){return null==a||a>=M&&(0===d||a<=d)}(d,M,f)}return!0}function o(a){return!a?.minScale||!a.maxScale||a.minScale>=a.maxScale}t.d(E,{E5:()=>O,Of:()=>s,g7:()=>o})}}]);