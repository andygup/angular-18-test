"use strict";(self.webpackChunkangular_18_test=self.webpackChunkangular_18_test||[]).push([[2644],{22644:(Le,de,M)=>{M.r(de),M.d(de,{PieChartAm5:()=>Z,PieSeriesAm5:()=>q});var K=M(8189),x=M(5276),a=M(33568),me=M(11264),fe=M(7551);class U extends a.w{constructor(){super(...arguments),Object.defineProperty(this,"_display",{enumerable:!0,configurable:!0,writable:!0,value:this._root._renderer.makeRadialText("",this.textStyle)})}_afterNew(){super._afterNew()}_beforeChanged(){super._beforeChanged(),this._display.clear(),this.isDirty("textType")&&(this._display.textType=this.get("textType"),this.markDirtyBounds()),this.isDirty("radius")&&(this._display.radius=this.get("radius"),this.markDirtyBounds()),this.isDirty("startAngle")&&(this._display.startAngle=(this.get("startAngle",0)+90)*a.x,this.markDirtyBounds()),this.isDirty("inside")&&(this._display.inside=this.get("inside"),this.markDirtyBounds()),this.isDirty("orientation")&&(this._display.orientation=this.get("orientation"),this.markDirtyBounds()),this.isDirty("kerning")&&(this._display.kerning=this.get("kerning"),this.markDirtyBounds())}}Object.defineProperty(U,"className",{enumerable:!0,configurable:!0,writable:!0,value:"RadialText"}),Object.defineProperty(U,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:a.w.classNames.concat([U.className])});class J extends a.L{constructor(){super(...arguments),Object.defineProperty(this,"_flipped",{enumerable:!0,configurable:!0,writable:!0,value:!1})}_afterNew(){this._textKeys.push("textType","kerning"),super._afterNew()}_makeText(){this._text=this.children.push(U.new(this._root,{}))}baseRadius(){const t=this.getPrivate("radius",0),e=this.getPrivate("innerRadius",0),i=this.get("baseRadius",0);return e+(0,a.l)(i,t-e)}radius(){const t=this.get("inside",!1);return this.baseRadius()+this.get("radius",0)*(t?-1:1)}_updateChildren(){if(super._updateChildren(),this.isDirty("baseRadius")||this.isPrivateDirty("radius")||this.isPrivateDirty("innerRadius")||this.isDirty("labelAngle")||this.isDirty("radius")||this.isDirty("inside")||this.isDirty("orientation")||this.isDirty("textType")){const t=this.get("textType","adjusted"),e=this.get("inside",!1),i=this.get("orientation");let s=(0,a.y)(this.get("labelAngle",0));this._text.set("startAngle",this.get("labelAngle",0)),this._text.set("inside",e);const n=(0,a.z)(s),o=(0,a.A)(s);let r=this.baseRadius(),b=this.radius();if(this._display.angle=0,"circular"==t)this.setAll({paddingTop:0,paddingBottom:0,paddingLeft:0,paddingRight:0}),this.setRaw("x",void 0),this.setRaw("y",void 0),this._text.set("orientation",i),this._text.set("radius",b);else{0==r&&(s=0,b=0);let u=b*o,l=b*n;"radial"==t?(this.setRaw("x",u),this.setRaw("y",l),s<90||s>270||"auto"!=i?(this._display.angle=s,this._flipped=!1):(this._display.angle=s+180,this._flipped=!0),this._dirty.rotation=!1):"adjusted"==t?(this.setRaw("centerX",a.p),this.setRaw("centerY",a.p),this.setRaw("x",u),this.setRaw("y",l)):"regular"==t&&(this.setRaw("x",u),this.setRaw("y",l))}this.markDirtyPosition(),this.markDirtyBounds()}}_updatePosition(){const t=this.get("textType","regular"),e=this.get("inside",!1);let i=0,s=0,n=this.get("labelAngle",0),o=this.localBounds(),r=o.right-o.left,b=o.bottom-o.top;if("radial"==t){if(this._flipped){let u=this.get("centerX");u instanceof a.P&&(r*=1-2*u.value),i=r*(0,a.A)(n),s=r*(0,a.z)(n)}}else e||"adjusted"!=t||(i=r/2*(0,a.A)(n),s=b/2*(0,a.z)(n));this.setRaw("dx",i),this.setRaw("dy",s),super._updatePosition()}get text(){return this._text}}Object.defineProperty(J,"className",{enumerable:!0,configurable:!0,writable:!0,value:"RadialLabel"}),Object.defineProperty(J,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:a.L.classNames.concat([J.className])});const ge=Math.abs,v=Math.atan2,I=Math.cos,_e=Math.max,ae=Math.min,P=Math.sin,B=Math.sqrt,D=1e-12,Y=Math.PI,Q=Y/2,ve=2*Y;function pe(g){return g>=1?Q:g<=-1?-Q:Math.asin(g)}function De(g){return g.innerRadius}function we(g){return g.outerRadius}function ke(g){return g.startAngle}function Ae(g){return g.endAngle}function Re(g){return g&&g.padAngle}function G(g,t,e,i,s,n,o){var r=g-e,b=t-i,u=(o?n:-n)/B(r*r+b*b),l=u*b,p=-u*r,c=g+l,d=t+p,m=e+l,_=i+p,T=(c+m)/2,f=(d+_)/2,h=m-c,y=_-d,R=h*h+y*y,C=s-n,w=c*_-m*d,L=(y<0?-1:1)*B(_e(0,C*C*R-w*w)),j=(w*y-h*L)/R,S=(-w*h-y*L)/R,z=(w*y+h*L)/R,F=(-w*h+y*L)/R,O=j-T,k=S-f,A=z-T,H=F-f;return O*O+k*k>A*A+H*H&&(j=z,S=F),{cx:j,cy:S,x01:-l,y01:-p,x11:j*(s/C-1),y11:S*(s/C-1)}}function Te(){var g=De,t=we,e=(0,x.c)(0),i=null,s=ke,n=Ae,o=Re,r=null,b=(0,x.w)(u);function u(){var l,p,c=+g.apply(this,arguments),d=+t.apply(this,arguments),m=s.apply(this,arguments)-Q,_=n.apply(this,arguments)-Q,T=ge(_-m),f=_>m;if(r||(r=l=b()),d<c&&(p=d,d=c,c=p),d>D)if(T>ve-D)r.moveTo(d*I(m),d*P(m)),r.arc(0,0,d,m,_,!f),c>D&&(r.moveTo(c*I(_),c*P(_)),r.arc(0,0,c,_,m,f));else{var h,y,R=m,C=_,w=m,L=_,j=T,S=T,z=o.apply(this,arguments)/2,F=z>D&&(i?+i.apply(this,arguments):B(c*c+d*d)),O=ae(ge(d-c)/2,+e.apply(this,arguments)),k=O,A=O;if(F>D){var H=pe(F/c*P(z)),re=pe(F/d*P(z));(j-=2*H)>D?(w+=H*=f?1:-1,L-=H):(j=0,w=L=(m+_)/2),(S-=2*re)>D?(R+=re*=f?1:-1,C-=re):(S=0,R=C=(m+_)/2)}var W=d*I(R),X=d*P(R),ee=c*I(L),te=c*P(L);if(O>D){var N,ie=d*I(C),se=d*P(C),ne=c*I(w),le=c*P(w);if(T<Y)if(N=function Pe(g,t,e,i,s,n,o,r){var b=e-g,u=i-t,l=o-s,p=r-n,c=p*b-l*u;if(!(c*c<D))return[g+(c=(l*(t-n)-p*(g-s))/c)*b,t+c*u]}(W,X,ne,le,ie,se,ee,te)){var oe=W-N[0],ue=X-N[1],he=ie-N[0],ce=se-N[1],ye=1/P(function xe(g){return g>1?0:g<-1?Y:Math.acos(g)}((oe*he+ue*ce)/(B(oe*oe+ue*ue)*B(he*he+ce*ce)))/2),be=B(N[0]*N[0]+N[1]*N[1]);k=ae(O,(c-be)/(ye-1)),A=ae(O,(d-be)/(ye+1))}else k=A=0}S>D?A>D?(h=G(ne,le,W,X,d,A,f),y=G(ie,se,ee,te,d,A,f),r.moveTo(h.cx+h.x01,h.cy+h.y01),A<O?r.arc(h.cx,h.cy,A,v(h.y01,h.x01),v(y.y01,y.x01),!f):(r.arc(h.cx,h.cy,A,v(h.y01,h.x01),v(h.y11,h.x11),!f),r.arc(0,0,d,v(h.cy+h.y11,h.cx+h.x11),v(y.cy+y.y11,y.cx+y.x11),!f),r.arc(y.cx,y.cy,A,v(y.y11,y.x11),v(y.y01,y.x01),!f))):(r.moveTo(W,X),r.arc(0,0,d,R,C,!f)):r.moveTo(W,X),c>D&&j>D?k>D?(h=G(ee,te,ie,se,c,-k,f),y=G(W,X,ne,le,c,-k,f),r.lineTo(h.cx+h.x01,h.cy+h.y01),k<O?r.arc(h.cx,h.cy,k,v(h.y01,h.x01),v(y.y01,y.x01),!f):(r.arc(h.cx,h.cy,k,v(h.y01,h.x01),v(h.y11,h.x11),!f),r.arc(0,0,c,v(h.cy+h.y11,h.cx+h.x11),v(y.cy+y.y11,y.cx+y.x11),f),r.arc(y.cx,y.cy,k,v(y.y11,y.x11),v(y.y01,y.x01),!f))):r.arc(0,0,c,L,w,f):r.lineTo(ee,te)}else r.moveTo(0,0);if(r.closePath(),l)return r=null,l+""||null}return u.centroid=function(){var l=(+g.apply(this,arguments)+ +t.apply(this,arguments))/2,p=(+s.apply(this,arguments)+ +n.apply(this,arguments))/2-Y/2;return[I(p)*l,P(p)*l]},u.innerRadius=function(l){return arguments.length?(g="function"==typeof l?l:(0,x.c)(+l),u):g},u.outerRadius=function(l){return arguments.length?(t="function"==typeof l?l:(0,x.c)(+l),u):t},u.cornerRadius=function(l){return arguments.length?(e="function"==typeof l?l:(0,x.c)(+l),u):e},u.padRadius=function(l){return arguments.length?(i=null==l?null:"function"==typeof l?l:(0,x.c)(+l),u):i},u.startAngle=function(l){return arguments.length?(s="function"==typeof l?l:(0,x.c)(+l),u):s},u.endAngle=function(l){return arguments.length?(n="function"==typeof l?l:(0,x.c)(+l),u):n},u.padAngle=function(l){return arguments.length?(o="function"==typeof l?l:(0,x.c)(+l),u):o},u.context=function(l){return arguments.length?(r=l??null,u):r},u}class $ extends a.e{constructor(){super(...arguments),Object.defineProperty(this,"ix",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"iy",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_generator",{enumerable:!0,configurable:!0,writable:!0,value:Te()})}_getTooltipPoint(){let t=this.get("tooltipX"),e=this.get("tooltipY"),i=0,s=0;(0,a.k)(t)&&(i=t),(0,a.k)(e)&&(s=e);let n=this.get("radius",0),o=this.get("innerRadius",0);return n+=this.get("dRadius",0),o+=this.get("dInnerRadius",0),o<0&&(o=n+o),t instanceof a.P&&(i=this.ix*(o+(n-o)*t.value)),e instanceof a.P&&(s=this.iy*(o+(n-o)*e.value)),this.get("arc")>=360&&0==o&&(i=0,s=0),{x:i,y:s}}_beforeChanged(){super._beforeChanged(),(this.isDirty("radius")||this.isDirty("arc")||this.isDirty("innerRadius")||this.isDirty("startAngle")||this.isDirty("dRadius")||this.isDirty("dInnerRadius")||this.isDirty("cornerRadius")||this.isDirty("shiftRadius"))&&(this._clear=!0)}_changed(){if(super._changed(),this._clear){let t=this.get("startAngle",0),e=this.get("arc",0);const i=this._generator;e<0&&(t+=e,e*=-1),e>.1&&i.cornerRadius(this.get("cornerRadius",0)),i.context(this._display);let s=this.get("radius",0),n=this.get("innerRadius",0);s+=this.get("dRadius",0),n+=this.get("dInnerRadius",0),n<0&&(n=s+n),i({innerRadius:n,outerRadius:s,startAngle:(t+90)*a.x,endAngle:(t+e+90)*a.x});let o=t+e/2;this.ix=(0,a.A)(o),this.iy=(0,a.z)(o);const r=this.get("shiftRadius",0);this.setRaw("dx",this.ix*r),this.setRaw("dy",this.iy*r),this.markDirtyPosition()}}}Object.defineProperty($,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Slice"}),Object.defineProperty($,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:a.e.classNames.concat([$.className])});class Ce extends a.T{setupDefaultRules(){super.setupDefaultRules();const t=this._root.interfaceColors,e=this.rule.bind(this);e("PercentSeries").setAll({legendLabelText:"{category}",legendValueText:"{valuePercentTotal.formatNumber('0.00p')}",colors:me.C.new(this._root,{}),width:a.a,height:a.a}),e("PieChart").setAll({radius:(0,a.j)(80),startAngle:-90,endAngle:270}),e("PieSeries").setAll({alignLabels:!0,startAngle:-90,endAngle:270}),e("PieSeries").states.create("hidden",{endAngle:-90,opacity:0}),e("Slice",["pie"]).setAll({position:"absolute",isMeasured:!1,x:0,y:0,toggleKey:"active",tooltipText:"{category}: {valuePercentTotal.formatNumber('0.00p')}",strokeWidth:1,strokeOpacity:1,role:"figure",lineJoin:"round"}),e("Slice",["pie"]).states.create("active",{shiftRadius:20,scale:1}),e("Slice",["pie"]).states.create("hoverActive",{scale:1.04}),e("Slice",["pie"]).states.create("hover",{scale:1.04}),e("RadialLabel",["pie"]).setAll({textType:"aligned",radius:10,text:"{category}: {valuePercentTotal.formatNumber('0.00p')}",paddingTop:5,paddingBottom:5,populateText:!0}),e("Tick",["pie"]).setAll({location:1}),e("SlicedChart").setAll({paddingLeft:10,paddingRight:10,paddingTop:10,paddingBottom:10}),e("FunnelSeries").setAll({startLocation:0,endLocation:1,orientation:"vertical",alignLabels:!0,sequencedInterpolation:!0}),e("FunnelSlice").setAll({interactive:!0,expandDistance:0}),e("FunnelSlice").states.create("hover",{expandDistance:.15}),e("Label",["funnel"]).setAll({populateText:!0,text:"{category}: {valuePercentTotal.formatNumber('0.00p')}",centerY:a.p}),e("Label",["funnel","horizontal"]).setAll({centerX:0,centerY:a.p,rotation:-90}),e("Label",["funnel","vertical"]).setAll({centerY:a.p,centerX:0}),e("Tick",["funnel"]).setAll({location:1}),e("FunnelSlice",["funnel","link"]).setAll({fillOpacity:.5,strokeOpacity:0,expandDistance:-.1}),e("FunnelSlice",["funnel","link","vertical"]).setAll({height:10}),e("FunnelSlice",["funnel","link","horizontal"]).setAll({width:10}),e("PyramidSeries").setAll({valueIs:"area"}),e("FunnelSlice",["pyramid","link"]).setAll({fillOpacity:.5}),e("FunnelSlice",["pyramid","link","vertical"]).setAll({height:0}),e("FunnelSlice",["pyramid","link","horizontal"]).setAll({width:0}),e("FunnelSlice",["pyramid"]).setAll({interactive:!0,expandDistance:0}),e("FunnelSlice",["pyramid"]).states.create("hover",{expandDistance:.15}),e("Label",["pyramid"]).setAll({populateText:!0,text:"{category}: {valuePercentTotal.formatNumber('0.00p')}",centerY:a.p}),e("Label",["pyramid","horizontal"]).setAll({centerX:0,centerY:a.p,rotation:-90}),e("Label",["pyramid","vertical"]).setAll({centerY:a.p,centerX:0}),e("Tick",["pyramid"]).setAll({location:1}),e("FunnelSlice",["pictorial"]).setAll({interactive:!0,tooltipText:"{category}: {valuePercentTotal.formatNumber('0.00p')}"}),e("Label",["pictorial"]).setAll({populateText:!0,text:"{category}: {valuePercentTotal.formatNumber('0.00p')}",centerY:a.p}),e("Label",["pictorial","horizontal"]).setAll({centerX:0,centerY:a.p,rotation:-90}),e("Label",["pictorial","vertical"]).setAll({centerY:a.p,centerX:0}),e("FunnelSlice",["pictorial","link"]).setAll({fillOpacity:.5,width:0,height:0}),e("Tick",["pictorial"]).setAll({location:.5});{const i=e("Graphics",["pictorial","background"]);i.setAll({fillOpacity:.2}),(0,fe.s)(i,"fill",t,"alternativeBackground")}}}class E extends x.S{_afterNew(){this._defaultThemes.push(Ce.new(this._root)),super._afterNew(),this.chartContainer.children.push(this.seriesContainer),this.seriesContainer.children.push(this.bulletsContainer)}_processSeries(t){super._processSeries(t),this.seriesContainer.children.moveValue(this.bulletsContainer,this.seriesContainer.children.length-1)}}Object.defineProperty(E,"className",{enumerable:!0,configurable:!0,writable:!0,value:"PercentChart"}),Object.defineProperty(E,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:x.S.classNames.concat([E.className])});class V extends x.a{constructor(){super(...arguments),Object.defineProperty(this,"slicesContainer",{enumerable:!0,configurable:!0,writable:!0,value:this.children.push(a.g.new(this._root,{position:"absolute",isMeasured:!1}))}),Object.defineProperty(this,"labelsContainer",{enumerable:!0,configurable:!0,writable:!0,value:this.children.push(a.g.new(this._root,{position:"absolute",isMeasured:!1}))}),Object.defineProperty(this,"ticksContainer",{enumerable:!0,configurable:!0,writable:!0,value:this.children.push(a.g.new(this._root,{position:"absolute",isMeasured:!1}))}),Object.defineProperty(this,"_lLabels",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"_rLabels",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"_hLabels",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"slices",{enumerable:!0,configurable:!0,writable:!0,value:this._makeSlices()}),Object.defineProperty(this,"labels",{enumerable:!0,configurable:!0,writable:!0,value:this._makeLabels()}),Object.defineProperty(this,"ticks",{enumerable:!0,configurable:!0,writable:!0,value:this._makeTicks()})}makeSlice(t){const e=this.slicesContainer.children.push(this.slices.make());return e.on("fill",()=>{this.updateLegendMarker(t)}),e.on("stroke",()=>{this.updateLegendMarker(t)}),e._setDataItem(t),t.set("slice",e),this.slices.push(e),e}makeLabel(t){const e=this.labelsContainer.children.push(this.labels.make());return e._setDataItem(t),t.set("label",e),this.labels.push(e),e}_shouldMakeBullet(t){return null!=t.get("value")}makeTick(t){const e=this.ticksContainer.children.push(this.ticks.make());return e._setDataItem(t),t.set("tick",e),this.ticks.push(e),e}_afterNew(){this.fields.push("category","fill"),super._afterNew()}_onDataClear(){const t=this.get("colors");t&&t.reset()}_prepareChildren(){if(super._prepareChildren(),this._lLabels=[],this._rLabels=[],this._hLabels=[],this._valuesDirty){let t=0,e=0,i=0,s=1/0,n=0;(0,a.i)(this._dataItems,o=>{let r=o.get("valueWorking",0);t+=r,e+=Math.abs(r)}),(0,a.i)(this._dataItems,o=>{let r=o.get("valueWorking",0);r>i&&(i=r),r<s&&(s=r),n++;let b=r/e;0==e&&(b=0),o.setRaw("valuePercentTotal",100*b)}),this.setPrivateRaw("valueLow",s),this.setPrivateRaw("valueHigh",i),this.setPrivateRaw("valueSum",t),this.setPrivateRaw("valueAverage",t/n),this.setPrivateRaw("valueAbsoluteSum",e)}}show(t){const e=Object.create(null,{show:{get:()=>super.show}});return(0,K.b)(this,void 0,void 0,function*(){let i=[];i.push(e.show.call(this,t)),i.push(this._sequencedShowHide(!0,t)),yield Promise.all(i)})}hide(t){const e=Object.create(null,{hide:{get:()=>super.hide}});return(0,K.b)(this,void 0,void 0,function*(){let i=[];i.push(e.hide.call(this,t)),i.push(this._sequencedShowHide(!1,t)),yield Promise.all(i)})}_updateChildren(){super._updateChildren(),this._valuesDirty&&(0,a.i)(this._dataItems,t=>{t.get("label").text.markDirtyText()}),(this.isDirty("legendLabelText")||this.isDirty("legendValueText"))&&(0,a.i)(this._dataItems,t=>{this.updateLegendValue(t)}),this._arrange()}_arrange(){this._arrangeDown(this._lLabels),this._arrangeUp(this._lLabels),this._arrangeDown(this._rLabels),this._arrangeUp(this._rLabels),this._arrangeLeft(this._hLabels),this._arrangeRight(this._hLabels),(0,a.i)(this.dataItems,t=>{this._updateTick(t)})}_afterChanged(){super._afterChanged(),this._arrange()}processDataItem(t){if(super.processDataItem(t),null==t.get("fill")){let e=this.get("colors");e&&t.setRaw("fill",e.next())}}showDataItem(t,e){const i=Object.create(null,{showDataItem:{get:()=>super.showDataItem}});return(0,K.b)(this,void 0,void 0,function*(){const s=[i.showDataItem.call(this,t,e)];(0,a.k)(e)||(e=this.get("stateAnimationDuration",0));const n=this.get("stateAnimationEasing");let o=t.get("value");const r=t.animate({key:"valueWorking",to:o,duration:e,easing:n});r&&s.push(r.waitForStop());const b=t.get("tick");b&&s.push(b.show(e));const u=t.get("label");u&&s.push(u.show(e));const l=t.get("slice");l&&s.push(l.show(e)),l.get("active")&&l.states.applyAnimate("active"),yield Promise.all(s)})}hideDataItem(t,e){const i=Object.create(null,{hideDataItem:{get:()=>super.hideDataItem}});return(0,K.b)(this,void 0,void 0,function*(){const s=[i.hideDataItem.call(this,t,e)],n=this.states.create("hidden",{});(0,a.k)(e)||(e=n.get("stateAnimationDuration",this.get("stateAnimationDuration",0)));const o=n.get("stateAnimationEasing",this.get("stateAnimationEasing")),r=t.animate({key:"valueWorking",to:0,duration:e,easing:o});r&&s.push(r.waitForStop());const b=t.get("tick");b&&s.push(b.hide(e));const u=t.get("label");u&&s.push(u.hide(e));const l=t.get("slice");l.hideTooltip(),l&&s.push(l.hide(e)),yield Promise.all(s)})}disposeDataItem(t){super.disposeDataItem(t);let e=t.get("label");e&&(this.labels.removeValue(e),e.dispose());let i=t.get("tick");i&&(this.ticks.removeValue(i),i.dispose());let s=t.get("slice");s&&(this.slices.removeValue(s),s.dispose())}hoverDataItem(t){const e=t.get("slice");e&&!e.isHidden()&&e.hover()}unhoverDataItem(t){const e=t.get("slice");e&&e.unhover()}updateLegendMarker(t){if(t){const e=t.get("slice");if(e){const i=t.get("legendDataItem");if(i){const s=i.get("markerRectangle");(0,a.i)(a.v,n=>{null!=e.get(n)&&s.set(n,e.get(n))})}}}}_arrangeDown(t){if(t){let e=this._getNextDown();t.sort((i,s)=>i.y>s.y?1:i.y<s.y?-1:0),(0,a.i)(t,i=>{const s=i.label.adjustedLocalBounds();let n=s.top;i.y+n<e&&(i.y=e-n),i.label.set("y",i.y),e=i.y+s.bottom})}}_getNextUp(){return this.labelsContainer.maxHeight()}_getNextDown(){return 0}_arrangeUp(t){if(t){let e=this._getNextUp();t.sort((i,s)=>i.y<s.y?1:i.y>s.y?-1:0),(0,a.i)(t,i=>{const s=i.label.adjustedLocalBounds();let n=s.bottom;i.y+n>e&&(i.y=e-n),i.label.set("y",i.y),e=i.y+s.top})}}_arrangeRight(t){if(t){let e=0;t.sort((i,s)=>i.y>s.y?1:i.y<s.y?-1:0),(0,a.i)(t,i=>{const s=i.label.adjustedLocalBounds();let n=s.left;i.y+n<e&&(i.y=e-n),i.label.set("x",i.y),e=i.y+s.right})}}_arrangeLeft(t){if(t){let e=this.labelsContainer.maxWidth();t.sort((i,s)=>i.y<s.y?1:i.y>s.y?-1:0),(0,a.i)(t,i=>{const s=i.label.adjustedLocalBounds();let n=s.right;i.y+n>e&&(i.y=e-n),i.label.set("x",i.y),e=i.y+s.left})}}_updateSize(){super._updateSize(),this.markDirty()}_updateTick(t){}_dispose(){super._dispose();const t=this.chart;t&&t.series.removeValue(this)}}Object.defineProperty(V,"className",{enumerable:!0,configurable:!0,writable:!0,value:"PercentSeries"}),Object.defineProperty(V,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:x.a.classNames.concat([V.className])});class Z extends E{constructor(){super(...arguments),Object.defineProperty(this,"_maxRadius",{enumerable:!0,configurable:!0,writable:!0,value:1})}_afterNew(){super._afterNew(),this.seriesContainer.setAll({x:a.p,y:a.p})}_prepareChildren(){super._prepareChildren();const t=this.chartContainer,e=t.innerWidth(),i=t.innerHeight(),s=this.get("startAngle",0),n=this.get("endAngle",0),o=this.get("innerRadius");let r=(0,a.B)(0,0,s,n,1);const b=e/(r.right-r.left),u=i/(r.bottom-r.top);let l={left:0,right:0,top:0,bottom:0};if(o instanceof a.P){let d=o.value,m=Math.min(b,u);d=Math.max(m*d,m-Math.min(i,e))/m,l=(0,a.B)(0,0,s,n,d),this.setPrivateRaw("irModifyer",d/o.value)}r=(0,a.D)([r,l]);const p=this._maxRadius;this._maxRadius=Math.min(b,u);const c=(0,a.l)(this.get("radius",0),this._maxRadius);this.seriesContainer.setAll({dy:-c*(r.bottom+r.top)/2,dx:-c*(r.right+r.left)/2}),(this.isDirty("startAngle")||this.isDirty("endAngle")||p!=this._maxRadius)&&this.series.each(d=>{d._markDirtyKey("startAngle")}),(this.isDirty("innerRadius")||this.isDirty("radius"))&&this.series.each(d=>{d._markDirtyKey("innerRadius")})}radius(t){let e=(0,a.l)(this.get("radius",0),this._maxRadius),i=(0,a.l)(this.get("innerRadius",0),e);if(t){let s=this.series.indexOf(t),n=this.series.length,o=t.get("radius");return null!=o?i+(0,a.l)(o,e-i):i+(e-i)/n*(s+1)}return e}innerRadius(t){const e=this.radius();let i=(0,a.l)(this.get("innerRadius",0),e);if(i<0&&(i=e+i),t){let s=this.series.indexOf(t),n=this.series.length,o=t.get("innerRadius");return null!=o?i+(0,a.l)(o,e-i):i+(e-i)/n*s}return i}_updateSize(){super._updateSize(),this.markDirtyKey("radius")}}Object.defineProperty(Z,"className",{enumerable:!0,configurable:!0,writable:!0,value:"PieChart"}),Object.defineProperty(Z,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:E.classNames.concat([Z.className])});class q extends V{_makeSlices(){return new a.t(a.u.new({}),()=>$._new(this._root,{themeTags:(0,a.m)(this.slices.template.get("themeTags",[]),["pie","series"])},[this.slices.template]))}_makeLabels(){return new a.t(a.u.new({}),()=>J._new(this._root,{themeTags:(0,a.m)(this.labels.template.get("themeTags",[]),["pie","series"])},[this.labels.template]))}_makeTicks(){return new a.t(a.u.new({}),()=>x.T._new(this._root,{themeTags:(0,a.m)(this.ticks.template.get("themeTags",[]),["pie","series"])},[this.ticks.template]))}processDataItem(t){super.processDataItem(t);const e=this.makeSlice(t);e.on("scale",()=>{this._updateTick(t)}),e.on("shiftRadius",()=>{this._updateTick(t)}),e.events.on("positionchanged",()=>{this._updateTick(t)});const i=this.makeLabel(t);i.events.on("positionchanged",()=>{this._updateTick(t)}),this.makeTick(t),e.events.on("positionchanged",()=>{i.markDirty()})}_getNextUp(){const t=this.chart;return t?t._maxRadius:this.labelsContainer.maxHeight()/2}_getNextDown(){const t=this.chart;return t?-t._maxRadius:-this.labelsContainer.maxHeight()/2}_prepareChildren(){super._prepareChildren();const t=this.chart;if(t){if(this.isDirty("alignLabels")){let e=this.labels.template;if(this.get("alignLabels"))e.set("textType","aligned");else{let i=e.get("textType");null!=i&&"aligned"!=i||e.set("textType","adjusted")}}if(this._valuesDirty||this.isDirty("radius")||this.isDirty("innerRadius")||this.isDirty("startAngle")||this.isDirty("endAngle")||this.isDirty("alignLabels")){this.markDirtyBounds();const e=this.get("startAngle",t.get("startAngle",-90)),i=this.get("endAngle",t.get("endAngle",270))-e;let s=e;const n=t.radius(this);this.setPrivateRaw("radius",n);let o=t.innerRadius(this)*t.getPrivate("irModifyer",1);o<0&&(o=n+o),(0,a.i)(this._dataItems,r=>{this.updateLegendValue(r);let b=i*r.get("valuePercentTotal")/100;const u=r.get("slice");if(u){u.set("radius",n),u.set("innerRadius",o),u.set("startAngle",s),u.set("arc",b);const c=r.get("fill");u._setDefault("fill",c),u._setDefault("stroke",c)}let l=(0,a.y)(s+b/2);const p=r.get("label");if(p&&(p.setPrivate("radius",n),p.setPrivate("innerRadius",o),p.set("labelAngle",l),"aligned"==p.get("textType"))){let c=n+p.get("radius",0),d=n*(0,a.z)(l);l>90&&l<=270?(p.isHidden()||p.isHiding()||this._lLabels.push({label:p,y:d}),c*=-1,c-=this.labelsContainer.get("paddingLeft",0),p.set("centerX",a.a),p.setPrivateRaw("left",!0)):(p.isHidden()||p.isHiding()||this._rLabels.push({label:p,y:d}),c+=this.labelsContainer.get("paddingRight",0),p.set("centerX",0),p.setPrivateRaw("left",!1)),p.set("x",c),p.set("y",n*(0,a.z)(l))}s+=b,this._updateTick(r)})}}}_updateTick(t){const e=t.get("tick"),i=t.get("label"),s=t.get("slice"),n=e.get("location",1);if(e&&i&&s){const o=(s.get("shiftRadius",0)+s.get("radius",0))*s.get("scale",1)*n,r=i.get("labelAngle",0),b=(0,a.A)(r),u=(0,a.z)(r),l=this.labelsContainer,p=l.get("paddingLeft",0),c=l.get("paddingRight",0);let d=0,m=0;d=i.x(),m=i.y();let _=[];if(0!=d&&0!=m){if("circular"==i.get("textType")){const f=i.radius()-i.get("paddingBottom",0),h=i.get("labelAngle",0);d=f*(0,a.A)(h),m=f*(0,a.z)(h)}let T=-c;i.getPrivate("left")&&(T=p),_=[{x:s.x()+o*b,y:s.y()+o*u},{x:d+T,y:m},{x:d,y:m}]}e.set("points",_)}}_positionBullet(t){const e=t.get("sprite");if(e){const i=e.dataItem.get("slice");if(i){const s=i.get("innerRadius",0),n=i.get("radius",0),o=i.get("startAngle",0)+i.get("arc",0)*t.get("locationX",.5),r=s+(n-s)*t.get("locationY",.5);e.setAll({x:(0,a.A)(o)*r,y:(0,a.z)(o)*r})}}}}Object.defineProperty(q,"className",{enumerable:!0,configurable:!0,writable:!0,value:"PieSeries"}),Object.defineProperty(q,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:V.classNames.concat([q.className])})}}]);