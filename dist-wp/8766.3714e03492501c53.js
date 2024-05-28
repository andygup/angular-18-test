"use strict";(self.webpackChunkangular_18_test=self.webpackChunkangular_18_test||[]).push([[8766],{40702:(G,I,l)=>{l.d(I,{$B:()=>A});var R=l(8189),m=l(98877),E=l(3248),v=l(77806),f=l(35150),r=l(85211),i=l(76576),c=l(79845),p=l(26073);let A=class extends m.A{constructor(h){super(h),this._from=null,this._to=null,this._final=null,this._current=[],this._time=0,this.duration=(0,E.A)("mapview-transitions-duration"),this.effects=[]}set effect(h){if(this._get("effect")!==(h=h||"")){this._set("effect",h);try{this._transitionTo(b(h))}catch(n){this._transitionTo([]),f.A.getLogger(this).warn("Invalid Effect",{effect:h,error:n})}}}get hasEffects(){return this.transitioning||!!this.effects.length}set scale(h){this._updateForScale(h)}get transitioning(){return null!==this._to}canTransitionTo(h){try{return this.scale>0&&U(this._current,b(h),this.scale)}catch{return!1}}transitionStep(h,n){this._applyTimeTransition(h),this._updateForScale(n)}endTransitions(){this._applyTimeTransition(this.duration)}_transitionTo(h){this.scale>0&&U(this._current,h,this.scale)?(this._final=h,this._to=(0,v.o8)(h),function N(h,n,d){const u=h.length>n.length?h:n,s=h.length>n.length?n:h,e=s[s.length-1],o=e?.scale??d,a=e?.effects??[];for(let _=s.length;_<u.length;_++)s.push({scale:o,effects:[...a]});for(let _=0;_<u.length;_++)s[_].scale=-1===s[_].scale?d:s[_].scale,u[_].scale=-1===u[_].scale?d:u[_].scale,(0,p.O9)(s[_].effects,u[_].effects)}(this._current,this._to,this.scale),this._from=(0,v.o8)(this._current),this._time=0):(this._from=this._to=this._final=null,this._current=h),this._set("effects",this._current[0]?(0,v.o8)(this._current[0].effects):[])}_applyTimeTransition(h){if(!(this._to&&this._from&&this._current&&this._final))return;this._time+=h;const n=Math.min(1,this._time/this.duration);for(let d=0;d<this._current.length;d++){const u=this._current[d],s=this._from[d],e=this._to[d];u.scale=W(s.scale,e.scale,n);for(let o=0;o<u.effects.length;o++)u.effects[o].interpolate(s.effects[o],e.effects[o],n)}1===n&&(this._current=this._final,this._set("effects",this._current[0]?(0,v.o8)(this._current[0].effects):[]),this._from=this._to=this._final=null)}_updateForScale(h){if(this._set("scale",h),0===this._current.length)return;const n=this._current,d=this._current.length-1;let u,s,e=1;if(1===n.length||h>=n[0].scale)s=u=n[0].effects;else if(h<=n[d].scale)s=u=n[d].effects;else for(let o=0;o<d;o++){const a=n[o],_=n[o+1];if(a.scale>=h&&_.scale<=h){e=(h-a.scale)/(_.scale-a.scale),u=a.effects,s=_.effects;break}}for(let o=0;o<this.effects.length;o++)this.effects[o].interpolate(u[o],s[o],e)}};function b(h){const n=(0,c.q)(h)||[];return function B(h){const n=h[0];return!!n&&"type"in n}(n)?[{scale:-1,effects:n}]:n}function U(h,n,d){return!h[0]?.effects||!n[0]?.effects||!((-1===h[0]?.scale||-1===n[0]?.scale)&&(h.length>1||n.length>1)&&d<=0)&&(0,p.mj)(h[0].effects,n[0].effects)}function W(h,n,d){return h+(n-h)*d}(0,R._)([(0,r.MZ)()],A.prototype,"_to",void 0),(0,R._)([(0,r.MZ)()],A.prototype,"duration",void 0),(0,R._)([(0,r.MZ)({value:""})],A.prototype,"effect",null),(0,R._)([(0,r.MZ)({readOnly:!0})],A.prototype,"effects",void 0),(0,R._)([(0,r.MZ)({readOnly:!0})],A.prototype,"hasEffects",null),(0,R._)([(0,r.MZ)({value:0})],A.prototype,"scale",null),(0,R._)([(0,r.MZ)({readOnly:!0})],A.prototype,"transitioning",null),A=(0,R._)([(0,i.$)("esri.layers.effects.EffectView")],A)},88766:(G,I,l)=>{l.d(I,{m:()=>f});var R=l(12273),m=l(40702),E=l(63888),v=l(62931);class f extends E.q{constructor(){super(...arguments),this._childrenSet=new Set,this._needsSort=!1,this._children=[],this._effectView=null,this._highlightOptions=null,this._highlightGradient=null}get blendMode(){return this._blendMode}set blendMode(i){this._blendMode=i,this.requestRender()}get children(){return this._children}get clips(){return this._clips}set clips(i){this._clips=i,this.children.forEach(c=>c.clips=i)}get computedEffects(){return this._effectView?.effects??null}get effect(){return this._effectView?.effect??""}set effect(i){(this._effectView||i)&&(this._effectView||(this._effectView=new m.$B),this._effectView.effect=i,this.requestRender())}get highlightOptions(){return this._highlightOptions}set highlightOptions(i){if(!i)return this._highlightOptions=null,void(this._highlightGradient&&(this._highlightGradient.destroy(),this._highlightGradient=null,this.requestRender()));this._highlightOptions?.equals(i)||(this._highlightOptions=i,this._highlightGradient=(0,v.u4)(this._highlightGradient,i),this.requestRender())}get hasBlending(){return!!this.blendMode}get hasHighlight(){return this.children.some(i=>i.hasHighlight)}get hasLabels(){return this.children.some(i=>i.hasLabels)}get requiresDedicatedFBO(){return this.children.some(i=>"blendMode"in i&&i.blendMode&&"normal"!==i.blendMode)}updateTransitionProperties(i,c){super.updateTransitionProperties(i,c),this._effectView&&(this._effectView.transitionStep(i,c),this._effectView.transitioning&&this.requestRender())}doRender(i){const c=this.createRenderParams(i),{painter:p}=c;p.beforeRenderLayer(c,this._clips?.length?255:0,this.computedOpacity),this.renderChildren(c),p.afterRenderLayer(c,this.computedOpacity)}addChild(i){return this.addChildAt(i,this.children.length)}addChildAt(i,c=this.children.length){if(!i||this.contains(i))return i;this._needsSort=!0;const p=i.parent;return p&&p!==this&&p.removeChild(i),c>=this.children.length?this.children.push(i):this.children.splice(c,0,i),this._childrenSet.add(i),i.parent=this,i.stage=this.stage,this!==this.stage&&(i.clips=this.clips),this.requestRender(),i}contains(i){return this._childrenSet.has(i)}endTransitions(){super.endTransitions(),this._effectView&&(this._effectView.endTransitions(),this.requestRender())}removeAllChildren(){this._childrenSet.clear(),this._needsSort=!0;for(const i of this.children)this!==this.stage&&(i.clips=null),i.stage=null,i.parent=null;this.children.length=0}removeChild(i){return this.contains(i)?this.removeChildAt(this.children.indexOf(i)):i}removeChildAt(i){if(i<0||i>=this.children.length)return null;this._needsSort=!0;const c=this.children.splice(i,1)[0];return this._childrenSet.delete(c),this!==this.stage&&(c.clips=null),c.stage=null,c.parent=null,c}sortChildren(i){this._needsSort&&(this.children.sort(i),this._needsSort=!1)}beforeRender(i){super.beforeRender(i);for(const c of this.children)c.beforeRender(i)}afterRender(i){super.afterRender(i);for(const c of this.children)c.afterRender(i)}_createTransforms(){return{displayViewScreenMat3:(0,R.vt)()}}onAttach(){super.onAttach();const i=this.stage;for(const c of this.children)c.stage=i}onDetach(){super.onDetach();for(const i of this.children)i.stage=null}renderChildren(i){for(const c of this.children)c.processRender(i)}createRenderParams(i){return{...i,requireFBO:this.requiresDedicatedFBO,blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:i.globalOpacity*this.computedOpacity,inFadeTransition:this.inFadeTransition,highlightGradient:this._highlightGradient||i.highlightGradient}}}},63888:(G,I,l)=>{l.d(I,{q:()=>v});var R=l(42425),m=l(3248),E=l(56492);class v extends R.A{constructor(){super(...arguments),this._fadeOutResolver=null,this._fadeInResolver=null,this._clips=null,this.computedVisible=!0,this.computedOpacity=1,this.fadeTransitionEnabled=!1,this.inFadeTransition=!1,this._isReady=!1,this._opacity=1,this.parent=null,this._stage=null,this._visible=!0}get clips(){return this._clips}set clips(r){this._clips=r,this.requestRender()}get isReady(){return this._isReady}get opacity(){return this._opacity}set opacity(r){this._opacity!==r&&(this._opacity=Math.min(1,Math.max(r,0)),this.requestRender())}get stage(){return this._stage}set stage(r){if(this._stage===r)return;const i=this._stage;this._stage=r,r?this._stage?.untrashDisplayObject(this)||(this.onAttach(),this.emit("attach")):i?.trashDisplayObject(this)}get transforms(){return this._getTransforms()}_getTransforms(){return null==this._transforms&&(this._transforms=this._createTransforms()),this._transforms}get visible(){return this._visible}set visible(r){this._visible!==r&&(this._visible=r,this.requestRender())}get hasLabels(){return!1}get hasHighlight(){return!1}get hasBlending(){return!1}fadeIn(){return this._fadeInResolver||(this._fadeOutResolver&&(this._fadeOutResolver(),this._fadeOutResolver=null),this.opacity=1,this.computedOpacity=0,this.fadeTransitionEnabled=!0,this._fadeInResolver=(0,E.Tw)(),this.requestRender()),this._fadeInResolver.promise}fadeOut(){return this._fadeOutResolver||(this.opacity=0,this._fadeInResolver&&(this._fadeInResolver(),this._fadeInResolver=null),this.fadeTransitionEnabled=!0,this._fadeOutResolver=(0,E.Tw)(),this.requestRender()),this._fadeOutResolver.promise}endTransitions(){this._fadeInResolver?.(),this._fadeInResolver=null,this._fadeOutResolver?.(),this._fadeOutResolver=null,this.computedOpacity=this.visible?this.opacity:0,this.requestRender()}beforeRender(r){this.updateTransitionProperties(r.deltaTime,r.state.scale),this.setTransform(r.state)}afterRender(r){this._fadeInResolver&&this.computedOpacity===this.opacity?(this._fadeInResolver(),this._fadeInResolver=null):this._fadeOutResolver&&0===this.computedOpacity&&(this._fadeOutResolver(),this._fadeOutResolver=null)}remove(){this.parent?.removeChild(this)}setTransform(r){}processRender(r){this.stage&&this.computedVisible&&this.doRender(r)}requestRender(){this.stage&&this.stage.requestRender()}processDetach(){this._fadeInResolver&&(this._fadeInResolver(),this._fadeInResolver=null),this._fadeOutResolver&&(this._fadeOutResolver(),this._fadeOutResolver=null),this.onDetach(),this.emit("detach")}updateTransitionProperties(r,i){const c=0===(0,m.A)("mapview-transitions-duration")?0:1/(0,m.A)("mapview-transitions-duration");if(this.fadeTransitionEnabled&&0!==c){const p=this._fadeOutResolver||!this.visible?0:this.opacity,t=this.computedOpacity;if(t===p)this.computedVisible=this.visible;else{const A=r*c;this.computedOpacity=t>p?Math.max(p,t-A):Math.min(p,t+A),this.computedVisible=this.computedOpacity>0;const b=p===this.computedOpacity;this.inFadeTransition=!b,b||this.requestRender()}}else this.computedOpacity=this.opacity,this.computedVisible=this.visible}onAttach(){}onDetach(){}doRender(r){}ready(){this._isReady||(this._isReady=!0,this.emit("isReady"),this.requestRender())}}},25735:(G,I,l)=>{l.d(I,{$r:()=>v,M$:()=>f,mF:()=>E});var R=l(68677),m=l(60746);const E={selection:r=>new m.A({color:new R.A([r.color.r/2,r.color.g/2,r.color.b/2,r.color.a])}),highlight:r=>r,popup:r=>new m.A({color:new R.A([r.color.g,r.color.b,r.color.r,r.color.a])})};function v(r){if(!r)return 0;let i=1;for(const c in E){if(c===r)break;i<<=1}return i}const f=Object.keys(E)},47669:(G,I,l)=>{l.d(I,{$U:()=>tt,C2:()=>a,CQ:()=>r,CR:()=>j,C_:()=>it,Cp:()=>Y,DY:()=>W,GR:()=>Et,Gh:()=>$,LY:()=>V,O5:()=>dt,Pq:()=>y,Qb:()=>at,Sr:()=>x,TB:()=>pt,V3:()=>q,Vl:()=>gt,Xh:()=>ft,YS:()=>O,YV:()=>t,_M:()=>J,_x:()=>_t,cp:()=>Rt,dV:()=>F,eG:()=>o,eI:()=>ut,fq:()=>lt,fy:()=>z,g0:()=>Q,hM:()=>K,ie:()=>k,ju:()=>U,lL:()=>S,mg:()=>et,n9:()=>D,nM:()=>g,nW:()=>rt,p:()=>st,qM:()=>E,r1:()=>ct,sn:()=>H,uM:()=>P,ue:()=>M,vN:()=>Z,vd:()=>w,yA:()=>ot,yv:()=>ht,z2:()=>L});const E=1e-30,r=512,t=16777216,U=8,W=29,o=24,a=4,y=0,M=0,O=0,P=1,L=2,g=3,S=4,H=5,D=6,x=12,w=5,j=6,Y=5,Z=6;var F,T;(T=F||(F={}))[T.FilterFlags=0]="FilterFlags",T[T.Animation=1]="Animation",T[T.GPGPU=2]="GPGPU",T[T.VV=3]="VV",T[T.DD0=4]="DD0",T[T.DD1=5]="DD1",T[T.DD2=6]="DD2";const V=8,Q=V<<1,$=1.05,z=3,q=1,J=3,k=3,tt=5,et=6,it=1.15,K=2,st=128,ot=256-2*K,rt=2,lt=10,ht=1024,at=128,ct=4,dt=1,_t=1<<20,ut=.75,ft=10,gt=.75,pt=256,Et=32,Rt=512},22049:(G,I,l)=>{l.d(I,{Ci:()=>v,HQ:()=>m,No:()=>f,XK:()=>E,aY:()=>R});const R=1,m=[0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],E=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],v=256,f={outlineWidth:1.3,outerHaloWidth:.4,innerHaloWidth:.4,outlinePosition:0}},69473:(G,I,l)=>{var R,m,E,v,f,r,i,c,p,t;l.d(I,{Be:()=>f,Gn:()=>E,RI:()=>i,S5:()=>m,ch:()=>c,uC:()=>p}),(t=R||(R={}))[t.FILL=0]="FILL",t[t.LINE=1]="LINE",t[t.MARKER=2]="MARKER",t[t.TEXT=3]="TEXT",t[t.LABEL=4]="LABEL",function(t){t[t.NONE=0]="NONE",t[t.MAP=1]="MAP",t[t.LABEL=2]="LABEL",t[t.LABEL_ALPHA=4]="LABEL_ALPHA",t[t.HITTEST=8]="HITTEST",t[t.HIGHLIGHT=16]="HIGHLIGHT",t[t.CLIP=32]="CLIP",t[t.DEBUG=64]="DEBUG",t[t.NUM_DRAW_PHASES=9]="NUM_DRAW_PHASES"}(m||(m={})),function(t){t[t.SIZE=0]="SIZE",t[t.COLOR=1]="COLOR",t[t.OPACITY=2]="OPACITY",t[t.ROTATION=3]="ROTATION"}(E||(E={})),function(t){t[t.MINMAX_TARGETS_OUTLINE=128]="MINMAX_TARGETS_OUTLINE",t[t.SCALE_TARGETS_OUTLINE=256]="SCALE_TARGETS_OUTLINE",t[t.FIELD_TARGETS_OUTLINE=512]="FIELD_TARGETS_OUTLINE",t[t.UNIT_TARGETS_OUTLINE=1024]="UNIT_TARGETS_OUTLINE"}(v||(v={})),function(t){t[t.SPRITE=0]="SPRITE",t[t.GLYPH=1]="GLYPH"}(f||(f={})),function(t){t[t.DEFAULT=0]="DEFAULT",t[t.SIMPLE=1]="SIMPLE",t[t.DOT_DENSITY=2]="DOT_DENSITY",t[t.OUTLINE_FILL=3]="OUTLINE_FILL",t[t.OUTLINE_FILL_SIMPLE=4]="OUTLINE_FILL_SIMPLE",t[t.HEATMAP=5]="HEATMAP",t[t.PIE_CHART=6]="PIE_CHART"}(r||(r={})),function(t){t[t.All=0]="All",t[t.Highlight=1]="Highlight",t[t.InsideEffect=2]="InsideEffect",t[t.OutsideEffect=3]="OutsideEffect"}(i||(i={})),function(t){t[t.BATCHING=0]="BATCHING",t[t.STRICT_ORDER=1]="STRICT_ORDER",t[t.STRICT_MARKERS_AND_TEXT=2]="STRICT_MARKERS_AND_TEXT"}(c||(c={})),function(t){t[t.FILL=0]="FILL",t[t.LINE=1]="LINE",t[t.MARKER=2]="MARKER",t[t.TEXT=3]="TEXT"}(p||(p={}))},23070:(G,I,l)=>{l.d(I,{Eq:()=>t,L4:()=>c,Pr:()=>h,QA:()=>N,Qu:()=>B,dJ:()=>p,r3:()=>U,vT:()=>W});var R=l(82663),m=l(47669),E=l(69473),v=l(50915);const f={color:{write:[!0,!0,!0,!0],blendMode:"composite"},depth:!1,stencil:{write:!1,test:{ref:n=>n.stencilRef,compare:v.MT.EQUAL,mask:255,op:{fail:v.eA.KEEP,zFail:v.eA.KEEP,zPass:v.eA.REPLACE}}}},r={color:{write:[!0,!0,!0,!0],blendMode:"additive"},depth:!1,stencil:!1},i={...f,color:{write:[!0,!0,!0,!0],blendMode:"delete"}};function c({pixelRatio:n,state:d,displayLevel:u,requiredLevel:s},e){const o=1/2**(u-e.key.level),a=1/2**(s-e.key.level);return{displayMat3:Array.from(d.displayMat3),displayViewMat3:Array.from(d.displayViewMat3),displayViewScreenMat3:Array.from(e.transforms.displayViewScreenMat3),viewMat3:Array.from(d.viewMat3),tileMat3:Array.from(e.transforms.tileMat3),displayZoomFactor:o,requiredZoomFactor:a,tileOffset:[e.x,e.y],currentScale:d.scale,currentZoom:u,metersPerSRUnit:(0,R.GA)(d.spatialReference),rotation:d.rotation,pixelRatio:n}}function p(n){return"highlight"===n.passOptions?.type}function t(n){return"hittest"===n.passOptions?.type}function A(n){if(!t(n))return null;const{position:d,distance:u,smallSymbolDistance:s,smallSymbolSizeThreshold:e}=n.passOptions;return{position:d,distance:u,smallSymbolDistance:s,smallSymbolSizeThreshold:e}}function b(n){if(!p(n))return null;const{activeReasons:d,highlightAll:u}=n.passOptions;return{activeReasons:d,highlightAll:u?1:0}}function U(n,d,u){const s={};for(const e in u)s[e]=u[e]instanceof Function?u[e](n,d):u[e];return s}function N(n,d){const{attributeView:u,context:s}=n;return{storage:u.getUniforms(s),view:c(n,d),hittestRequest:A(n),highlight:b(n)}}function W(n){return{inside:n.selection===E.RI.InsideEffect,outside:n.selection===E.RI.OutsideEffect}}function B(n){return t(n)?r:p(n)&&"clear"===n.passOptions.stepType?i:f}function h(n){const{row:d,col:u}=n.key,s=u*m.CQ,e=d*m.CQ;return{tileOffsetFromLocalOrigin:[s%m.YV,e%m.YV],maxIntsToLocalOrigin:[Math.floor(s/m.YV),Math.floor(e/m.YV)]}}},62931:(G,I,l)=>{l.d(I,{H_:()=>n,u4:()=>d,lB:()=>u,eh:()=>B});var R=l(49976),m=l(35150),E=l(25735),v=l(47669),f=l(22049),r=l(50915),i=l(26136),c=l(4931);const p=()=>m.A.getLogger("esri.views.2d.engine.webgl.painter.highlight.HighlightGradient"),A=[0,0,0,0];class b{constructor(){this.type="single",this._convertedHighlightOptions={fillColor:[.2*.75,.6*.75,.675,.75],outlineColor:[.2*.9,.54,.81,.9],outlinePosition:f.No.outlinePosition,outlineWidth:f.No.outlineWidth,innerHaloWidth:f.No.innerHaloWidth,outerHaloWidth:f.No.outerHaloWidth},this._shadeTexChanged=!0,this._texelData=new Uint8Array(4*f.Ci),this._minMaxDistance=[0,0]}setHighlightOptions(e){const o=this._convertedHighlightOptions;!function t(s,e){e.fillColor[0]=s.color.r/255,e.fillColor[1]=s.color.g/255,e.fillColor[2]=s.color.b/255,e.fillColor[3]=s.color.a,s.haloColor?(e.outlineColor[0]=s.haloColor.r/255,e.outlineColor[1]=s.haloColor.g/255,e.outlineColor[2]=s.haloColor.b/255,e.outlineColor[3]=s.haloColor.a):(e.outlineColor[0]=e.fillColor[0],e.outlineColor[1]=e.fillColor[1],e.outlineColor[2]=e.fillColor[2],e.outlineColor[3]=e.fillColor[3]),e.fillColor[3]*=s.fillOpacity,e.outlineColor[3]*=s.haloOpacity,e.fillColor[0]*=e.fillColor[3],e.fillColor[1]*=e.fillColor[3],e.fillColor[2]*=e.fillColor[3],e.outlineColor[0]*=e.outlineColor[3],e.outlineColor[1]*=e.outlineColor[3],e.outlineColor[2]*=e.outlineColor[3],e.outlineWidth=f.No.outlineWidth,e.outerHaloWidth=f.No.outerHaloWidth,e.innerHaloWidth=f.No.innerHaloWidth,e.outlinePosition=f.No.outlinePosition}(e,o);const a=o.outlinePosition-o.outlineWidth/2-o.outerHaloWidth,_=o.outlinePosition-o.outlineWidth/2,C=o.outlinePosition+o.outlineWidth/2,y=o.outlinePosition+o.outlineWidth/2+o.innerHaloWidth,M=Math.sqrt(Math.PI/2)*f.aY,O=Math.abs(a)>M?Math.round(10*(Math.abs(a)-M))/10:0,P=Math.abs(y)>M?Math.round(10*(Math.abs(y)-M))/10:0;let L;O&&!P?p().error("The outer rim of the highlight is "+O+"px away from the edge of the feature; consider reducing some width values or shifting the outline position towards positive values (inwards)."):!O&&P?p().error("The inner rim of the highlight is "+P+"px away from the edge of the feature; consider reducing some width values or shifting the outline position towards negative values (outwards)."):O&&P&&p().error("The highlight is "+Math.max(O,P)+"px away from the edge of the feature; consider reducing some width values.");const g=[void 0,void 0,void 0,void 0];function S(D,x,w){g[0]=(1-w)*D[0]+w*x[0],g[1]=(1-w)*D[1]+w*x[1],g[2]=(1-w)*D[2]+w*x[2],g[3]=(1-w)*D[3]+w*x[3]}const{_texelData:H}=this;for(let D=0;D<f.Ci;++D)L=a+D/(f.Ci-1)*(y-a),L<a?(g[0]=0,g[1]=0,g[2]=0,g[3]=0):L<_?S(A,o.outlineColor,(L-a)/(_-a)):L<C?[g[0],g[1],g[2],g[3]]=o.outlineColor:L<y?S(o.outlineColor,o.fillColor,(L-C)/(y-C)):[g[0],g[1],g[2],g[3]]=o.fillColor,H[4*D]=255*g[0],H[4*D+1]=255*g[1],H[4*D+2]=255*g[2],H[4*D+3]=255*g[3];this._minMaxDistance[0]=a,this._minMaxDistance[1]=y,this._shadeTexChanged=!0}applyHighlightOptions(e,o){if(!this._shadeTex){const a=new c.R;a.wrapMode=r.pF.CLAMP_TO_EDGE,a.width=f.Ci,a.height=1,this._shadeTex=new i.g(e,a)}this._shadeTexChanged&&(this._shadeTex.updateData(0,0,0,f.Ci,1,this._texelData),this._shadeTexChanged=!1),e.bindTexture(this._shadeTex,v.CR),o.setUniform2fv("u_minMaxDistance",this._minMaxDistance)}destroy(){this._shadeTex?.dispose(),this._shadeTex=null}getReasonsWithGradients(){return[{activeReasons:(1<<E.M$.length)-1,activeGradient:this}]}}class U{constructor(){this.type="multi";const e={};for(const o in E.mF)e[o]=new b;this.gradients=e}setHighlightOptions(e){for(const o in E.mF){const a=E.mF[o](e);this.gradients[o].setHighlightOptions(a)}}applyHighlightOptions(e,o,a){this.gradients[a].applyHighlightOptions(e,o)}destroy(){for(const e in E.mF)this.gradients[e].destroy()}getReasonsWithGradients(){let e=1;const o=[];for(const a in this.gradients)o.push({activeReasons:e,activeGradient:this.gradients[a]}),e<<=1;return o}}var N=l(23070);const W=new R.J({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch",mesh:"mesh"});function B(s){return W.toJSON(s)}function n(s){const{bandCount:e,attributeTable:o,colormap:a,pixelType:_}=s.raster.rasterInfo;return 1===e&&(null!=o||null!=a||"u8"===_||"s8"===_)}function d(s,e){return"single"===s?.type&&e.multiHighlightEnabled&&(s.destroy(),s=null),"multi"!==s?.type||e.multiHighlightEnabled||(s.destroy(),s=null),s||(s=e.multiHighlightEnabled?new U:new b),s.setHighlightOptions(e),s}function u(s,e,o){const{painter:a,highlightGradient:_}=s,{highlight:C}=a.effects;if(!_)return;const y=s.passOptions,M=_.getReasonsWithGradients();for(let O=0;O<M.length;O++){const P={...s,passOptions:{type:"highlight",activeGradient:M[O].activeGradient,activeReasons:M[O].activeReasons,stepType:"burn",highlightAll:e}};if(C.bind(P),o(P),O<M.length-1){let g=0;for(let S=O+1;S<M.length;S++)g|=M[S].activeReasons;o({...s,passOptions:{type:"highlight",activeGradient:M[O].activeGradient,activeReasons:g,stepType:"clear",highlightAll:e}})}const L={...s,passOptions:{type:"highlight",activeGradient:M[O].activeGradient,activeReasons:M[O].activeReasons,stepType:"draw",highlightAll:e}};a.setPipelineState((0,N.Qu)(s)),a.updatePipelineState(s.context),C.draw(L),C.unbind()}s.passOptions=y}}}]);