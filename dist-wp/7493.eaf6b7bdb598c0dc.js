"use strict";(self.webpackChunkangular_18_test=self.webpackChunkangular_18_test||[]).push([[7493],{76582:(H,f,e)=>{e.d(f,{LG:()=>D,mb:()=>W,yr:()=>B});var y=e(10467),l=e(56492),s=e(31610),x=e(12273),n=e(88532),P=e(63888),c=e(28399),T=e(50915),j=e(26136),S=e(4931);function D(h){return h&&"render"in h}function B(h){const t=document.createElement("canvas");return t.width=h.width,t.height=h.height,h.render(t.getContext("2d")),t}class W extends P.q{constructor(t=null,r=!1){super(),this.blendFunction="standard",this._sourceWidth=0,this._sourceHeight=0,this._textureInvalidated=!1,this._texture=null,this.stencilRef=0,this.coordScale=[1,1],this._height=void 0,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this._width=void 0,this.x=0,this.y=0,this.immutable=r,this.source=t,this.requestRender=this.requestRender.bind(this)}destroy(){this._texture&&(this._texture.dispose(),this._texture=null),null!=this._uploadStatus&&(this._uploadStatus.controller.abort(),this._uploadStatus=null)}get isSourceScaled(){return this.width!==this._sourceWidth||this.height!==this._sourceHeight}get height(){return void 0!==this._height?this._height:this._sourceHeight}set height(t){this._height=t}get source(){return this._source}set source(t){null==t&&null==this._source||(this._source=t,this.invalidateTexture(),this.requestRender())}get width(){return void 0!==this._width?this._width:this._sourceWidth}set width(t){this._width=t}beforeRender(t){super.beforeRender(t),this.updateTexture(t)}setSourceAsync(t,r){var i=this;return(0,y.A)(function*(){null!=i._uploadStatus&&i._uploadStatus.controller.abort();const p=new AbortController,d=(0,l.Tw)();return(0,l.NY)(r,()=>p.abort()),(0,l.NY)(p,u=>d.reject(u)),i._uploadStatus={controller:p,resolver:d},i.source=t,d.promise})()}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this._source instanceof HTMLImageElement?(this._sourceHeight=this._source.naturalHeight,this._sourceWidth=this._source.naturalWidth):this._source&&(this._sourceHeight=this._source.height,this._sourceWidth=this._source.width))}updateTransitionProperties(t,r){t>=64&&(this.fadeTransitionEnabled=!1,this.inFadeTransition=!1),super.updateTransitionProperties(t,r)}setTransform(t){const r=(0,s.D_)(this.transforms.displayViewScreenMat3),[i,p]=t.toScreenNoRotation([0,0],[this.x,this.y]),d=this.resolution/this.pixelRatio/t.resolution,u=d*this.width,v=d*this.height,o=Math.PI*this.rotation/180;(0,s.Tl)(r,r,(0,n.fA)(i,p)),(0,s.Tl)(r,r,(0,n.fA)(u/2,v/2)),(0,s.e$)(r,r,-o),(0,s.Tl)(r,r,(0,n.fA)(-u/2,-v/2)),(0,s.Oe)(r,r,(0,n.fA)(u,v)),(0,s.lw)(this.transforms.displayViewScreenMat3,t.displayViewMat3,r)}setSamplingProfile(t){this._texture&&(t.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(t.samplingMode))}bind(t,r){this._texture&&t.bindTexture(this._texture,r)}updateTexture({context:t,painter:r}){var i=this;return(0,y.A)(function*(){if(!i._textureInvalidated)return;if(i._textureInvalidated=!1,i._texture||(i._texture=i._createTexture(t)),!i.source)return void i._texture.setData(null);i._texture.resize(i._sourceWidth,i._sourceHeight);const p=function O(h){return D(h)?h instanceof c.A?h.getRenderedRasterPixels()?.renderedRasterPixels:B(h):h}(i.source);try{if(null!=i._uploadStatus){const{controller:d,resolver:u}=i._uploadStatus,v={signal:d.signal},{width:o,height:a}=i,g=i._texture;yield r.textureUploadManager.enqueueTextureUpdate({data:p,texture:g,width:o,height:a},v),u.resolve(),i._uploadStatus=null}else i._texture.setData(p);i.ready()}catch(d){(0,l.jH)(d)}})()}onDetach(){this.destroy()}_createTransforms(){return{displayViewScreenMat3:(0,x.vt)()}}_createTexture(t){const r=this.immutable,i=new S.R;return i.internalFormat=r?T.H0.RGBA8:T.Ab.RGBA,i.wrapMode=T.pF.CLAMP_TO_EDGE,i.isImmutable=r,i.width=this._sourceWidth,i.height=this._sourceHeight,new j.g(t,i)}}},28399:(H,f,e)=>{e.d(f,{A:()=>y});class y{constructor(s,x,n){this.pixelBlock=s,this.extent=x,this.originalPixelBlock=n}get width(){return null!=this.pixelBlock?this.pixelBlock.width:0}get height(){return null!=this.pixelBlock?this.pixelBlock.height:0}render(s){const x=this.pixelBlock;if(null==x)return;const n=this.filter({extent:this.extent,pixelBlock:this.originalPixelBlock??x});if(null==n.pixelBlock)return;n.pixelBlock.maskIsAlpha&&(n.pixelBlock.premultiplyAlpha=!0);const P=n.pixelBlock.getAsRGBA(),c=s.createImageData(n.pixelBlock.width,n.pixelBlock.height);c.data.set(P),s.putImageData(c,0,0)}getRenderedRasterPixels(){const s=this.filter({extent:this.extent,pixelBlock:this.pixelBlock});return null==s.pixelBlock?null:(s.pixelBlock.maskIsAlpha&&(s.pixelBlock.premultiplyAlpha=!0),{width:s.pixelBlock.width,height:s.pixelBlock.height,renderedRasterPixels:new Uint8Array(s.pixelBlock.getAsRGBA().buffer)})}}},45400:(H,f,e)=>{e.r(f),e.d(f,{default:()=>v});var y=e(10467),l=e(8189),s=e(35150),x=e(11432),n=e(56492),P=e(48900),c=e(85211),S=(e(3248),e(40707),e(76576)),D=e(28067),B=e(72663),O=e(29459),W=e(68418),h=e(41474),t=e(96081),r=e(5922),i=e(2277),p=e(31876);const d=o=>{let a=class extends o{initialize(){this.exportImageParameters=new i.r({layer:this.layer})}destroy(){this.exportImageParameters=(0,x.pR)(this.exportImageParameters)}get exportImageVersion(){return this.exportImageParameters?.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}get timeExtent(){return(0,p.F)(this.layer,this.view?.timeExtent,this._get("timeExtent"))}fetchPopupFeaturesAtLocation(g,_){var E=this;return(0,y.A)(function*(){const{layer:R}=E;if(!g)throw new r.A("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:R});const{popupEnabled:m}=R;if(!m)throw new r.A("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:m});const M=E.createFetchPopupFeaturesQuery(g);if(!M)return[];const{extent:w,width:A,height:I,x:L,y:b}=M;if(!(w&&A&&I))throw new r.A("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:w,width:A,height:I});const C=yield R.fetchFeatureInfo(w,A,I,L,b);return(0,n.Te)(_),C})()}};return(0,l._)([(0,c.MZ)()],a.prototype,"exportImageParameters",void 0),(0,l._)([(0,c.MZ)({readOnly:!0})],a.prototype,"exportImageVersion",null),(0,l._)([(0,c.MZ)()],a.prototype,"layer",void 0),(0,l._)([(0,c.MZ)({readOnly:!0})],a.prototype,"timeExtent",null),a=(0,l._)([(0,S.$)("esri.views.layers.WMSLayerView")],a),a};let u=class extends(d((0,t.A)((0,O.e)(h.A)))){constructor(){super(...arguments),this.bitmapContainer=new B.l}supportsSpatialReference(o){return this.layer.serviceSupportsSpatialReference(o)}update(o){this.strategy.update(o).catch(a=>{(0,n.zf)(a)||s.A.getLogger(this).error(a)})}attach(){const{layer:o}=this,{imageMaxHeight:a,imageMaxWidth:g}=o;this.bitmapContainer=new B.l,this.container.addChild(this.bitmapContainer),this.strategy=new W.A({container:this.bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:a,imageMaxWidth:g,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.addAttachHandles((0,P.wB)(()=>this.exportImageVersion,()=>this.requestUpdate()))}detach(){this.strategy=(0,x.pR)(this.strategy),this.container.removeAllChildren()}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQuery(o){const{view:a,bitmapContainer:g}=this,{x:_,y:E}=o,{spatialReference:R}=a;let m,M=0,w=0;if(g.children.some(b=>{const{width:C,height:V,resolution:K,x:U,y:F}=b,G=U+K*C,Z=F-K*V;return _>=U&&_<=G&&E<=F&&E>=Z&&(m=new D.A({xmin:U,ymin:Z,xmax:G,ymax:F,spatialReference:R}),M=C,w=V,!0)}),!m)return null;const A=m.width/M,I=Math.round((_-m.xmin)/A),L=Math.round((m.ymax-E)/A);return{extent:m,width:M,height:w,x:I,y:L}}doRefresh(){var o=this;return(0,y.A)(function*(){o.requestUpdate()})()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(o,a,g,_){return this.layer.fetchImageBitmap(o,a,g,{timeExtent:this.timeExtent,..._})}};(0,l._)([(0,c.MZ)()],u.prototype,"strategy",void 0),(0,l._)([(0,c.MZ)()],u.prototype,"updating",void 0),u=(0,l._)([(0,S.$)("esri.views.2d.layers.WMSLayerView2D")],u);const v=u}}]);