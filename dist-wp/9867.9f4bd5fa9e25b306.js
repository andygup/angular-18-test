"use strict";(self.webpackChunkangular_18_test=self.webpackChunkangular_18_test||[]).push([[9867],{39867:(S,o,_)=>{_.r(o),_.d(o,{default:()=>G});var l=_(10467),M=_(8189),A=_(17715),C=_(35150),D=_(56492),O=_(85211),U=(_(3248),_(40707),_(76576)),L=_(58701),m=_(27641),W=(_(5922),_(3804),_(58272),_(29430),_(23098),_(69287),_(28067),_(9015),_(68643),_(21870),_(1749),_(55861),_(93615),_(41510),_(91766),_(47763),_(69630),_(71045),_(82854),_(65264),_(70614),_(88918),_(3691),_(25867),_(39516),_(57249),_(2544),_(34572),_(56854),_(47942),_(53737),_(3688),_(68051),_(65374),_(47669),_(88532),_(30365),_(91644),_(1684),_(86468),_(40702),_(42425),_(62931),_(69473),_(82047),_(11242),_(77440),_(50915),_(79061),_(92517),_(68165),_(26136),_(83693),_(9599),_(96764),_(88258),_(23070),_(97550),_(55900),_(52321),_(54e3),_(20904),_(6115),_(89563),_(45272),_(55912),_(64559),_(63367),_(38730),_(22818),_(8137),_(16006),_(13494),_(58096),_(82870),_(79184),_(76740),_(7610),_(99046),_(2296),_(68677),_(3991),_(26248),_(26689),_(37121),_(8052),_(41396),_(93093),_(20047),_(67399),_(13031)),R=(_(89447),_(31178),_(76410),_(90949),_(92405),_(12225),_(20914),_(32034),_(47258),_(21152),_(77469),_(18800),_(56985),_(43431),_(96604)),B=_(29459),c=_(9468),h=_(86131),j=_(54290),g=_(74847),d=_(67347),K=_(77031),y=_(41474),p=_(96081),T=_(47624),u=_(23868);const V=[0,0];let n=class extends((0,p.A)((0,R.Y)((0,B.e)(y.A)))){constructor(){super(...arguments),this._fetchQueue=null,this._highlightGraphics=new m.Y,this._highlightView=null,this._popupHighlightHelper=null,this._tileStrategy=null,this.layer=null}get resampling(){return!("resampling"in this.layer)||!1!==this.layer.resampling}get tilemapCache(){return"tilemapCache"in this.layer?this.layer.tilemapCache:null}update(t){this._fetchQueue.pause(),this._fetchQueue.state=t.state,this._tileStrategy.update(t),this._fetchQueue.resume(),this._highlightView?.processUpdate(t)}attach(){const t="tileServers"in this.layer?this.layer.tileServers:null,e=this.tilemapCache;if(this._tileInfoView=new j.A(this.layer.tileInfo,this.layer.fullExtent,e?.effectiveMinLOD,e?.effectiveMaxLOD),this._fetchQueue=new d.A({tileInfoView:this._tileInfoView,concurrency:t&&10*t.length||10,process:(s,i)=>this.fetchTile(s,i)}),this._tileStrategy=new K.A({cachePolicy:"keep",resampling:this.resampling,acquireTile:s=>this.acquireTile(s),releaseTile:s=>this.releaseTile(s),tileInfoView:this._tileInfoView}),(0,T.ox)(this,this.layer)){const s=this._highlightView=new W.A({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new c.A(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1});this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new T.Uh({createFetchPopupFeaturesQueryGeometry:(i,E)=>(0,u.V)(i,E,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(i,E)=>{s.graphicUpdateHandler({graphic:i,property:E})},layerView:this,updatingHandles:this._updatingHandles})}this.requestUpdate(),this.addAttachHandles(this._updatingHandles.add(()=>this.resampling,()=>{this.doRefresh()})),super.attach()}detach(){super.detach(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._popupHighlightHelper?.destroy(),this._highlightView?.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=this._popupHighlightHelper=null}fetchPopupFeaturesAtLocation(t,e){var s=this;return(0,l.A)(function*(){return s._popupHighlightHelper?s._popupHighlightHelper.fetchPopupFeaturesAtLocation(t,e):[]})()}highlight(t){return this._popupHighlightHelper?this._popupHighlightHelper.highlight(t):(0,A.hA)()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}supportsSpatialReference(t){return(0,L.aI)(this.layer.tileInfo?.spatialReference,t)}doRefresh(){var t=this;return(0,l.A)(function*(){if(t.attached){if(t.suspended)return t._tileStrategy.clear(),void t.requestUpdate();t._fetchQueue.reset(),t._tileStrategy.refresh(e=>t._updatingHandles.addPromise(t._enqueueTileFetch(e)))}})()}acquireTile(t){const e=this._bitmapView.createTile(t),s=e.bitmap;return[s.x,s.y]=this._tileInfoView.getTileCoords(V,e.key),s.resolution=this._tileInfoView.getTileResolution(e.key),[s.width,s.height]=this._tileInfoView.tileInfo.size,this._updatingHandles.addPromise(this._enqueueTileFetch(e)),this._bitmapView.addChild(e),this.requestUpdate(),e}releaseTile(t){this._fetchQueue.abort(t.key.id),this._bitmapView.removeChild(t),t.once("detach",()=>t.destroy()),this.requestUpdate()}fetchTile(t,e={}){var s=this;return(0,l.A)(function*(){const i=s.tilemapCache,{signal:E,resamplingLevel:v=0}=e;if(!i)try{return yield s._fetchImage(t,E)}catch(a){if(!(0,D.zf)(a)&&!s.resampling)return(0,h.G)(s._tileInfoView.tileInfo.size);if(v<3){const I=s._tileInfoView.getTileParentId(t.id);if(I){const f=new g.A(I),H=yield s.fetchTile(f,{...e,resamplingLevel:v+1});return(0,h.t)(s._tileInfoView,H,f,t)}}throw a}const r=new g.A(0,0,0,0);let P;try{if(yield i.fetchAvailabilityUpsample(t.level,t.row,t.col,r,{signal:E}),r.level!==t.level&&!s.resampling)return(0,h.G)(s._tileInfoView.tileInfo.size);P=yield s._fetchImage(r,E)}catch(a){if((0,D.zf)(a))throw a;P=yield s._fetchImage(t,E)}return s.resampling?(0,h.t)(s._tileInfoView,P,r,t):P})()}_enqueueTileFetch(t){var e=this;return(0,l.A)(function*(){if(!e._fetchQueue.has(t.key.id)){try{const s=yield e._fetchQueue.push(t.key);t.bitmap.source=s,t.bitmap.width=e._tileInfoView.tileInfo.size[0],t.bitmap.height=e._tileInfoView.tileInfo.size[1],t.once("attach",()=>e.requestUpdate())}catch(s){(0,D.zf)(s)||C.A.getLogger(e).error(s)}e.requestUpdate()}})()}_fetchImage(t,e){var s=this;return(0,l.A)(function*(){return s.layer.fetchImageBitmapTile(t.level,t.row,t.col,{signal:e})})()}};(0,M._)([(0,O.MZ)()],n.prototype,"resampling",null),(0,M._)([(0,O.MZ)()],n.prototype,"tilemapCache",null),n=(0,M._)([(0,U.$)("esri.views.2d.layers.TileLayerView2D")],n);const G=n}}]);