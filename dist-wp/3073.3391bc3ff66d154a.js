"use strict";(self.webpackChunkangular_18_test=self.webpackChunkangular_18_test||[]).push([[3073],{32954:(Oe,se,p)=>{function H(){return[1,0,0,0,1,0,0,0,1]}function $(W,A,b,w,X,U,D,q,K){return[W,A,b,w,X,U,D,q,K]}p.d(se,{fA:()=>$,vt:()=>H,zK:()=>Y});const Y=[1,0,0,0,1,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:Y,clone:function x(W){return[W[0],W[1],W[2],W[3],W[4],W[5],W[6],W[7],W[8]]},create:H,createView:function Q(W,A){return new Float64Array(W,A,9)},fromValues:$},Symbol.toStringTag,{value:"Module"}))},3567:(Oe,se,p)=>{p.d(se,{w:()=>Y});var H=p(89952),$=(p(3248),p(12438)),Q=p(17694);class Y{constructor(l=9,u){this._compareMinX=U,this._compareMinY=D,this._toBBox=d=>d,this._maxEntries=Math.max(4,l||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),u&&("function"==typeof u?this._toBBox=u:this._initFormat(u)),this.clear()}destroy(){this.clear(),te.prune(),g.prune(),c.prune(),f.prune()}all(l){W(this._data,l)}search(l,u){let d=this._data;const v=this._toBBox;if(he(l,d))for(te.clear();d;){for(let P=0,I=d.children.length;P<I;P++){const _=d.children[P],j=d.leaf?v(_):_;he(l,j)&&(d.leaf?u(_):ee(l,j)?W(_,u):te.push(_))}d=te.pop()}}collides(l){let u=this._data;const d=this._toBBox;if(!he(l,u))return!1;for(te.clear();u;){for(let v=0,P=u.children.length;v<P;v++){const I=u.children[v],_=u.leaf?d(I):I;if(he(l,_)){if(u.leaf||ee(l,_))return!0;te.push(I)}}u=te.pop()}return!1}load(l){if(!l.length)return this;if(l.length<this._minEntries){for(let d=0,v=l.length;d<v;d++)this.insert(l[d]);return this}let u=this._build(l.slice(0,l.length),0,l.length-1,0);if(this._data.children.length)if(this._data.height===u.height)this._splitRoot(this._data,u);else{if(this._data.height<u.height){const d=this._data;this._data=u,u=d}this._insert(u,this._data.height-u.height-1,!0)}else this._data=u;return this}insert(l){return l&&this._insert(l,this._data.height-1),this}clear(){return this._data=new E([]),this}remove(l){if(!l)return this;let u,d=this._data,v=null,P=0,I=!1;const _=this._toBBox(l);for(c.clear(),f.clear();d||c.length>0;){if(d||(d=c.pop(),v=c.data[c.length-1],P=f.pop()??0,I=!0),d.leaf&&(u=(0,H.qh)(d.children,l,d.children.length,d.indexHint),-1!==u))return d.children.splice(u,1),c.push(d),this._condense(c),this;I||d.leaf||!ee(d,_)?v?(P++,d=v.children[P],I=!1):d=null:(c.push(d),f.push(P),P=0,v=d,d=d.children[0])}return this}toJSON(){return this._data}fromJSON(l){return this._data=l,this}_build(l,u,d,v){const P=d-u+1;let I=this._maxEntries;if(P<=I){const L=new E(l.slice(u,d+1));return b(L,this._toBBox),L}v||(v=Math.ceil(Math.log(P)/Math.log(I)),I=Math.ceil(P/I**(v-1)));const _=new S([]);_.height=v;const j=Math.ceil(P/I),Z=j*Math.ceil(Math.sqrt(I));ve(l,u,d,Z,this._compareMinX);for(let L=u;L<=d;L+=Z){const C=Math.min(L+Z-1,d);ve(l,L,C,j,this._compareMinY);for(let N=L;N<=C;N+=j){const F=Math.min(N+j-1,C);_.children.push(this._build(l,N,F,v-1))}}return b(_,this._toBBox),_}_insert(l,u,d){const P=d?l:(0,this._toBBox)(l);c.clear();const I=function z(m,l,u,d){for(;d.push(l),!0!==l.leaf&&d.length-1!==u;){let v,P=1/0,I=1/0;for(let _=0,j=l.children.length;_<j;_++){const Z=l.children[_],L=q(Z),C=ce(m,Z)-L;C<I?(I=C,P=L<P?L:P,v=Z):C===I&&L<P&&(P=L,v=Z)}l=v||l.children[0]}return l}(P,this._data,u,c);for(I.children.push(l),X(I,P);u>=0&&c.data[u].children.length>this._maxEntries;)this._split(c,u),u--;!function A(m,l,u){for(let d=u;d>=0;d--)X(l.data[d],m)}(P,c,u)}_split(l,u){const d=l.data[u],v=d.children.length,P=this._minEntries;this._chooseSplitAxis(d,P,v);const I=this._chooseSplitIndex(d,P,v);if(!I)return;const _=d.children.splice(I,d.children.length-I),j=d.leaf?new E(_):new S(_);j.height=d.height,b(d,this._toBBox),b(j,this._toBBox),u?l.data[u-1].children.push(j):this._splitRoot(d,j)}_splitRoot(l,u){this._data=new S([l,u]),this._data.height=l.height+1,b(this._data,this._toBBox)}_chooseSplitIndex(l,u,d){let v,P,I;v=P=1/0;for(let _=u;_<=d-u;_++){const j=w(l,0,_,this._toBBox),Z=w(l,_,d,this._toBBox),L=xe(j,Z),C=q(j)+q(Z);L<v?(v=L,I=_,P=C<P?C:P):L===v&&C<P&&(P=C,I=_)}return I}_chooseSplitAxis(l,u,d){const v=l.leaf?this._compareMinX:U,P=l.leaf?this._compareMinY:D;this._allDistMargin(l,u,d,v)<this._allDistMargin(l,u,d,P)&&l.children.sort(v)}_allDistMargin(l,u,d,v){l.children.sort(v);const P=this._toBBox,I=w(l,0,u,P),_=w(l,d-u,d,P);let j=K(I)+K(_);for(let Z=u;Z<d-u;Z++){const L=l.children[Z];X(I,l.leaf?P(L):L),j+=K(I)}for(let Z=d-u-1;Z>=u;Z--){const L=l.children[Z];X(_,l.leaf?P(L):L),j+=K(_)}return j}_condense(l){for(let u=l.length-1;u>=0;u--){const d=l.data[u];if(0===d.children.length)if(u>0){const v=l.data[u-1],P=v.children;P.splice((0,H.qh)(P,d,P.length,v.indexHint),1)}else this.clear();else b(d,this._toBBox)}}_initFormat(l){const u=["return a"," - b",";"];this._compareMinX=new Function("a","b",u.join(l[0])),this._compareMinY=new Function("a","b",u.join(l[1])),this._toBBox=new Function("a","return {minX: a"+l[0]+", minY: a"+l[1]+", maxX: a"+l[2]+", maxY: a"+l[3]+"};")}}function W(m,l){let u=m;for(g.clear();u;){if(!0===u.leaf)for(const d of u.children)l(d);else g.pushArray(u.children);u=g.pop()??null}}function b(m,l){w(m,0,m.children.length,l,m)}function w(m,l,u,d,v){v||(v=new E([])),v.minX=1/0,v.minY=1/0,v.maxX=-1/0,v.maxY=-1/0;for(let P,I=l;I<u;I++)P=m.children[I],X(v,m.leaf?d(P):P);return v}function X(m,l){m.minX=Math.min(m.minX,l.minX),m.minY=Math.min(m.minY,l.minY),m.maxX=Math.max(m.maxX,l.maxX),m.maxY=Math.max(m.maxY,l.maxY)}function U(m,l){return m.minX-l.minX}function D(m,l){return m.minY-l.minY}function q(m){return(m.maxX-m.minX)*(m.maxY-m.minY)}function K(m){return m.maxX-m.minX+(m.maxY-m.minY)}function ce(m,l){return(Math.max(l.maxX,m.maxX)-Math.min(l.minX,m.minX))*(Math.max(l.maxY,m.maxY)-Math.min(l.minY,m.minY))}function xe(m,l){const u=Math.max(m.minX,l.minX),d=Math.max(m.minY,l.minY),v=Math.min(m.maxX,l.maxX),P=Math.min(m.maxY,l.maxY);return Math.max(0,v-u)*Math.max(0,P-d)}function ee(m,l){return m.minX<=l.minX&&m.minY<=l.minY&&l.maxX<=m.maxX&&l.maxY<=m.maxY}function he(m,l){return l.minX<=m.maxX&&l.minY<=m.maxY&&l.maxX>=m.minX&&l.maxY>=m.minY}function ve(m,l,u,d,v){const P=[l,u];for(;P.length;){const I=P.pop(),_=P.pop();if(I-_<=d)continue;const j=_+Math.ceil((I-_)/d/2)*d;(0,Q.q)(m,j,_,I,v),P.push(_,j,j,I)}}const te=new $.A,g=new $.A,c=new $.A,f=new $.A({deallocator:void 0});class y{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class R extends y{constructor(){super(...arguments),this.height=1,this.indexHint=new H.vW}}class E extends R{constructor(l){super(),this.children=l,this.leaf=!0}}class S extends R{constructor(l){super(),this.children=l,this.leaf=!1}}},15584:(Oe,se,p)=>{p.d(se,{b3:()=>b,jZ:()=>A});var H=p(71065),x=p(51995),$=p(83065),Q=p(15268),Y=p(61320),z=p(20914),W=p(58701);function A(g){return w(g,!0)}function b(g){return w(g,!1)}function w(g,c){if(null==g)return null;const f=g.spatialReference,y=(0,W.Vp)(f),R=(0,H.Wj)(g)?g.toJSON():g;if(!y)return R;const E=(0,W.K8)(f)?102100:4326,S=z.j7[E].maxX,m=z.j7[E].minX;if((0,Y.fT)(R))return U(R,S,m);if((0,Y.U9)(R))return R.points=R.points.map(l=>U(l,S,m)),R;if((0,Y.ZC)(R))return function X(g,c){if(!c)return g;const f=function D(g,c){const f=[],{ymin:y,ymax:R,xmin:E,xmax:S}=g,m=g.xmax-g.xmin,[l,u]=c.valid,{x:d,frameId:v}=q(g.xmin,c),{x:P,frameId:I}=q(g.xmax,c),_=d===P&&m>0;if(m>2*u){const j={xmin:E<S?d:P,ymin:y,xmax:u,ymax:R},Z={xmin:l,ymin:y,xmax:E<S?P:d,ymax:R},L={xmin:0,ymin:y,xmax:u,ymax:R},C={xmin:l,ymin:y,xmax:0,ymax:R},N=[],F=[];K(j,L)&&N.push(v),K(j,C)&&F.push(v),K(Z,L)&&N.push(I),K(Z,C)&&F.push(I);for(let ne=v+1;ne<I;ne++)N.push(ne),F.push(ne);f.push(new ee(j,[v]),new ee(Z,[I]),new ee(L,N),new ee(C,F))}else d>P||_?f.push(new ee({xmin:d,ymin:y,xmax:u,ymax:R},[v]),new ee({xmin:l,ymin:y,xmax:P,ymax:R},[I])):f.push(new ee({xmin:d,ymin:y,xmax:P,ymax:R},[v]));return f}(g,c).map(y=>y.extent);return f.length<2?f[0]||g:f.length>2?(g.xmin=c.valid[0],g.xmax=c.valid[1],g):{rings:f.map(y=>[[y.xmin,y.ymin],[y.xmin,y.ymax],[y.xmax,y.ymax],[y.xmax,y.ymin],[y.xmin,y.ymin]])}}(R,y);if((0,Y.Bi)(R)||(0,Y.Rg)(R)){const l=(0,$.Rg)(he,R),u={xmin:l[0],ymin:l[1],xmax:l[2],ymax:l[3]},d=(0,z.kd)(u.xmin,m)*(2*S),v=0===d?R:(0,z.kS)(R,d);return u.xmin+=d,u.xmax+=d,u.xmax>S?xe(v,S,c):u.xmin<m?xe(v,m,c):v}return R}function U(g,c,f){if(Array.isArray(g)){const y=g[0];if(y>c){const R=(0,z.kd)(y,c);g[0]=y+R*(-2*c)}else if(y<f){const R=(0,z.kd)(y,f);g[0]=y+R*(-2*f)}}else{const y=g.x;if(y>c){const R=(0,z.kd)(y,c);g.x+=R*(-2*c)}else if(y<f){const R=(0,z.kd)(y,f);g.x+=R*(-2*f)}}return g}function q(g,c){const[f,y]=c.valid,R=2*y;let E,S=0;return g>y?(E=Math.ceil(Math.abs(g-y)/R),g-=E*R,S=E):g<f&&(E=Math.ceil(Math.abs(g-f)/R),g+=E*R,S=-E),{x:g,frameId:S}}function K(g,c){const{xmin:f,ymin:y,xmax:R,ymax:E}=c;return ce(g,f,y)&&ce(g,f,E)&&ce(g,R,E)&&ce(g,R,y)}function ce(g,c,f){return c>=g.xmin&&c<=g.xmax&&f>=g.ymin&&f<=g.ymax}function xe(g,c,f=!0){const y=!(0,Y.Rg)(g);if(y&&(0,Q.m3)(g),f)return(new ve).cut(g,c);const R=y?g.rings:g.paths,E=y?4:2,S=R.length,m=-2*c;for(let l=0;l<S;l++){const u=R[l];if(u&&u.length>=E){const d=[];for(const v of u)d.push([v[0]+m,v[1]]);R.push(d)}}return y?g.rings=R:g.paths=R,g}class ee{constructor(c,f){this.extent=c,this.frameIds=f}}const he=(0,x.vt)();class ve{constructor(){this._linesIn=[],this._linesOut=[]}cut(c,f){let y;if(this._xCut=f,c.rings)this._closed=!0,y=c.rings,this._minPts=4;else{if(!c.paths)return null;this._closed=!1,y=c.paths,this._minPts=2}for(const E of y){if(!E||E.length<this._minPts)continue;let S=!0;for(const m of E)S?(this.moveTo(m),S=!1):this.lineTo(m);this._closed&&this.close()}this._pushLineIn(),this._pushLineOut(),y=[];for(const E of this._linesIn)E&&E.length>=this._minPts&&y.push(E);const R=-2*this._xCut;for(const E of this._linesOut)if(E&&E.length>=this._minPts){for(const S of E)S[0]+=R;y.push(E)}return this._closed?c.rings=y:c.paths=y,c}moveTo(c){this._pushLineIn(),this._pushLineOut(),this._prevSide=this._side(c[0]),this._moveTo(c[0],c[1],this._prevSide),this._prevPt=c,this._firstPt=c}lineTo(c){const f=this._side(c[0]);if(f*this._prevSide==-1){const y=this._intersect(this._prevPt,c);this._lineTo(this._xCut,y,0),this._prevSide=0,this._lineTo(c[0],c[1],f)}else this._lineTo(c[0],c[1],f);this._prevSide=f,this._prevPt=c}close(){const c=this._firstPt,f=this._prevPt;c[0]===f[0]&&c[1]===f[1]||this.lineTo(c),this._checkClosingPt(this._lineIn),this._checkClosingPt(this._lineOut)}_moveTo(c,f,y){this._closed?(this._lineIn.push([y<=0?c:this._xCut,f]),this._lineOut.push([y>=0?c:this._xCut,f])):(y<=0&&this._lineIn.push([c,f]),y>=0&&this._lineOut.push([c,f]))}_lineTo(c,f,y){this._closed?(te(this._lineIn,y<=0?c:this._xCut,f),te(this._lineOut,y>=0?c:this._xCut,f)):y<0?(0===this._prevSide&&this._pushLineOut(),this._lineIn.push([c,f])):y>0?(0===this._prevSide&&this._pushLineIn(),this._lineOut.push([c,f])):this._prevSide<0?(this._lineIn.push([c,f]),this._lineOut.push([c,f])):this._prevSide>0&&(this._lineOut.push([c,f]),this._lineIn.push([c,f]))}_checkClosingPt(c){const f=c.length;f>3&&c[0][0]===this._xCut&&c[f-2][0]===this._xCut&&c[1][0]===this._xCut&&(c[0][1]=c[f-2][1],c.pop())}_side(c){return c<this._xCut?-1:c>this._xCut?1:0}_intersect(c,f){return c[1]+(this._xCut-c[0])/(f[0]-c[0])*(f[1]-c[1])}_pushLineIn(){this._lineIn&&this._lineIn.length>=this._minPts&&this._linesIn.push(this._lineIn),this._lineIn=[]}_pushLineOut(){this._lineOut&&this._lineOut.length>=this._minPts&&this._linesOut.push(this._lineOut),this._lineOut=[]}}function te(g,c,f){const y=g.length;y>1&&g[y-1][0]===c&&g[y-2][0]===c?g[y-1][1]=f:g.push([c,f])}},92072:(Oe,se,p)=>{p.r(se),p.d(se,{default:()=>Bt});var H=p(10467),x=p(8189),$=p(31178),Q=p(5922),Y=p(35150),z=p(39693),W=p(56492),A=p(85211),b=p(48669),U=(p(40707),p(3248),p(17221)),D=p(76576),q=p(50305),K=p(26514),ce=p(95478),xe=p(93410),ee=p(17049),he=p(85551),ve=p(33036),te=p(90660),g=p(71065),c=p(10249),f=p(67685),y=p(31610),R=p(32954),E=p(83953),S=p(45475),m=p(1749),l=p(55861),u=p(11817),d=p(32034);let v=class extends te.P{projectOrWarn(e,t){if(null==e)return e;const{geometry:n,pending:a}=(0,u.projectOrLoad)(e,t);return a?null:a||n?n:(Y.A.getLogger(this).warn("geometry could not be projected to the spatial reference",{georeference:this,geometry:e,sourceSpatialReference:e.spatialReference,targetSpatialReference:t}),null)}};v=(0,x._)([(0,D.$)("esri.layers.support.GeoreferenceBase")],v);const P=v,I=(0,R.vt)(),_=(0,S.vt)();let j=class extends g.oY{};(0,x._)([(0,A.MZ)({type:Number,json:{write:!0}})],j.prototype,"x",void 0),(0,x._)([(0,A.MZ)({type:Number,json:{write:!0}})],j.prototype,"y",void 0),j=(0,x._)([(0,D.$)("esri.layers.support.ControlPointsGeoreference.ControlPointJSONType")],j);let Z=class extends te.P{constructor(){super(...arguments),this.sourcePoint=null,this.mapPoint=null}};(0,x._)([(0,A.MZ)()],Z.prototype,"sourcePoint",void 0),(0,x._)([(0,A.MZ)({type:m.A})],Z.prototype,"mapPoint",void 0),Z=(0,x._)([(0,D.$)("esri.layers.support.ControlPointsGeoreference.ControlPoint")],Z);let L=class extends((0,g.Te)(P)){constructor(e){super(e),this.controlPoints=null,this.height=0,this.type="control-points",this.width=0}readControlPoints(e,t){const n=d.A.fromJSON(t.spatialReference),a=(0,R.fA)(...t.coefficients,1);return e.map(h=>((0,E.hZ)(_,h.x,h.y),(0,c.W)(_,_,a),{sourcePoint:h,mapPoint:new m.A({x:_[0],y:_[1],spatialReference:n})}))}writeControlPoints(e,t,n,a){if(null!=this.transform)null!=e&&C(e[0])&&(t.controlPoints=e.map(h=>{const M=h.sourcePoint;return{x:M.x,y:M.y}}),t.spatialReference=e[0].mapPoint.spatialReference.toJSON(),t.coefficients=this.transform.slice(0,8));else{const h=new Q.A("web-document-write:invalid-georeference","Invalid 'controlPoints', 'width', 'height' configuration.",{layer:a?.layer,georeference:this});a?.messages?a.messages.push(h):Y.A.getLogger(this).error(h.name,h.message)}}get coords(){if(null==this.controlPoints)return null;const e=this._updateTransform(I);return null!=e&&C(this.controlPoints[0])?function et(e,t,n,a){const h=(0,S.fA)(0,n),M=(0,S.fA)(0,0),O=(0,S.fA)(t,0),B=(0,S.fA)(t,n);return(0,c.W)(h,h,e),(0,c.W)(M,M,e),(0,c.W)(O,O,e),(0,c.W)(B,B,e),new l.A({rings:[[h,M,O,B,h]],spatialReference:a})}(e,this.width,this.height,this.controlPoints[0].mapPoint.spatialReference):null}set coords(e){if(null==this.controlPoints||!C(this.controlPoints[0]))return;const t=this.controlPoints[0].mapPoint.spatialReference;if(null==(e=this.projectOrWarn(e,t)))return;const{width:n,height:a}=this,{rings:[[h,M,O,B]]}=e,T={sourcePoint:(0,f.tc)(0,a),mapPoint:new m.A({x:h[0],y:h[1],spatialReference:t})},V={sourcePoint:(0,f.tc)(0,0),mapPoint:new m.A({x:M[0],y:M[1],spatialReference:t})},G={sourcePoint:(0,f.tc)(n,0),mapPoint:new m.A({x:O[0],y:O[1],spatialReference:t})},k={sourcePoint:(0,f.tc)(n,a),mapPoint:new m.A({x:B[0],y:B[1],spatialReference:t})};C(T)&&C(V)&&C(G)&&C(k)&&(be(I,T,V,G,k),this.controlPoints=this.controlPoints.map(({sourcePoint:ie})=>((0,E.hZ)(_,ie.x,ie.y),(0,c.W)(_,_,I),{sourcePoint:ie,mapPoint:new m.A({x:_[0],y:_[1],spatialReference:t})})))}get inverseTransform(){return null==this.transform?null:(0,y.B8)((0,R.vt)(),this.transform)}get transform(){return this._updateTransform()}toMap(e){if(null==e||null==this.transform||null==this.controlPoints||!C(this.controlPoints[0]))return null;(0,E.hZ)(_,e.x,e.y);const t=this.controlPoints[0].mapPoint.spatialReference;return(0,c.W)(_,_,this.transform),new m.A({x:_[0],y:_[1],spatialReference:t})}toSource(e){if(null==e||null==this.inverseTransform||null==this.controlPoints||!C(this.controlPoints[0]))return null;const t=this.controlPoints[0].mapPoint.spatialReference;return e=e.normalize(),null==(e=(0,u.projectOrLoad)(e,t).geometry)?null:((0,E.hZ)(_,e.x,e.y),(0,c.W)(_,_,this.inverseTransform),(0,f.tc)(_[0],_[1]))}toSourceNormalized(e){const t=this.toSource(e);return null!=t&&(t.x/=this.width,t.y/=this.height),t}_updateTransform(e){const{controlPoints:t,width:n,height:a}=this;if(!(null!=t&&n>0&&a>0))return null;const[h,M,O,B]=t;if(!C(h))return null;const T=h.mapPoint.spatialReference,V=this._projectControlPoint(M,T),G=this._projectControlPoint(O,T),k=this._projectControlPoint(B,T);if(!(V.valid&&G.valid&&k.valid&&C(V.controlPoint)))return null;null==e&&(e=(0,R.vt)());let ie=null;return ie=C(G.controlPoint)&&C(k.controlPoint)?be(e,h,V.controlPoint,G.controlPoint,k.controlPoint):C(G.controlPoint)?function Qe(e,t,n,a){return ae(N,re,t),ae(F,le,n),ae(ne,ye,a),(0,E.Cc)(ue,N,F,.5),(0,E.e$)(ue,ne,ue,Math.PI),(0,E.Cc)(de,re,le,.5),(0,E.e$)(de,ye,de,Math.PI),Se(e,N,F,ne,ue,re,le,ye,de)}(e,h,V.controlPoint,G.controlPoint):function Je(e,t,n){return ae(N,re,t),ae(F,le,n),(0,E.e$)(ne,F,N,we),(0,E.e$)(ue,N,F,we),(0,E.e$)(ye,le,re,-we),(0,E.e$)(de,re,le,-we),Se(e,N,F,ne,ue,re,le,ye,de)}(e,h,V.controlPoint),ie.every(Le=>0===Le)?null:ie}_projectControlPoint(e,t){if(!C(e))return{valid:!0,controlPoint:e};const{sourcePoint:n,mapPoint:a}=e,{geometry:h,pending:M}=(0,u.projectOrLoad)(a,t);return M?{valid:!1,controlPoint:null}:M||h?{valid:!0,controlPoint:{sourcePoint:n,mapPoint:h}}:(Y.A.getLogger(this).warn("map point could not be projected to the spatial reference",{georeference:this,controlPoint:e,sourceSpatialReference:a.spatialReference,targetSpatialReference:t}),{valid:!1,controlPoint:null})}};function C(e){return null!=e?.sourcePoint&&null!=e.mapPoint}(0,x._)([(0,A.MZ)({type:[Z],json:{write:{allowNull:!1,isRequired:!0,target:{controlPoints:{type:[j]},coefficients:{type:[Number]},spatialReference:{type:d.A}}}}})],L.prototype,"controlPoints",void 0),(0,x._)([(0,U.w)("controlPoints")],L.prototype,"readControlPoints",null),(0,x._)([(0,q.K)("controlPoints")],L.prototype,"writeControlPoints",null),(0,x._)([(0,A.MZ)({clonable:!1})],L.prototype,"coords",null),(0,x._)([(0,A.MZ)({type:Number,nonNullable:!0,json:{write:!0}})],L.prototype,"height",void 0),(0,x._)([(0,A.MZ)({readOnly:!0})],L.prototype,"inverseTransform",null),(0,x._)([(0,A.MZ)({readOnly:!0})],L.prototype,"transform",null),(0,x._)([(0,A.MZ)({type:Number,nonNullable:!0,json:{write:!0}})],L.prototype,"width",void 0),L=(0,x._)([(0,D.$)("esri.layers.support.ControlPointsGeoreference")],L);const N=(0,S.vt)(),F=(0,S.vt)(),ne=(0,S.vt)(),ue=(0,S.vt)(),re=(0,S.vt)(),le=(0,S.vt)(),ye=(0,S.vt)(),de=(0,S.vt)(),we=Math.PI/2;function ae(e,t,n){(0,E.hZ)(e,n.sourcePoint.x,n.sourcePoint.y),(0,E.hZ)(t,n.mapPoint.x,n.mapPoint.y)}function be(e,t,n,a,h){return ae(N,re,t),ae(F,le,n),ae(ne,ye,a),ae(ue,de,h),Se(e,N,F,ne,ue,re,le,ye,de)}const ke=new Array(8).fill(0),qe=new Array(8).fill(0);function Ue(e,t,n,a,h){return e[0]=t[0],e[1]=t[1],e[2]=n[0],e[3]=n[1],e[4]=a[0],e[5]=a[1],e[6]=h[0],e[7]=h[1],e}function Se(e,t,n,a,h,M,O,B,T){return(0,c.O)(e,Ue(ke,t,n,a,h),Ue(qe,M,O,B,T))}const Re=L;var tt=p(89563),nt=p(48116),Pe=p(45272),it=p(43085),ot=p(3046),De=p(55098);const Ie=(0,S.vt)();let me=class extends P{constructor(e){super(e),this.bottomLeft=null,this.bottomRight=null,this.topLeft=null,this.topRight=null,this.type="corners"}get coords(){let{topLeft:e,topRight:t,bottomLeft:n,bottomRight:a}=this;if(null==e||null==t||null==n||null==a)return null;const h=e.spatialReference;return t=this.projectOrWarn(t,h),n=this.projectOrWarn(n,h),a=this.projectOrWarn(a,h),null==t||null==n||null==a?null:new l.A({rings:[[[n.x,n.y],[e.x,e.y],[t.x,t.y],[a.x,a.y],[n.x,n.y]]],spatialReference:h})}set coords(e){const{topLeft:t}=this;if(null==t)return;const n=t.spatialReference;if(null==(e=this.projectOrWarn(e,n)))return;const{rings:[[a,h,M,O]]}=e;this.bottomLeft=new m.A({x:a[0],y:a[1],spatialReference:n}),this.topLeft=new m.A({x:h[0],y:h[1],spatialReference:n}),this.topRight=new m.A({x:M[0],y:M[1],spatialReference:n}),this.bottomRight=new m.A({x:O[0],y:O[1],spatialReference:n})}toSourceNormalized(e){const{topLeft:t,topRight:n,bottomRight:a,bottomLeft:h}=this;if(null==e||null==t||null==n||null==a||null==h)return null;const M=t.spatialReference;e=e.normalize();const O=(0,u.projectOrLoad)(e,M).geometry;if(null==O)return null;(0,E.hZ)(Ie,O.x,O.y);const B=(0,c.O)((0,R.vt)(),[t.x,t.y,h.x,h.y,n.x,n.y,a.x,a.y],[0,0,0,1,1,0,1,1]);return(0,c.W)(Ie,Ie,B),(0,f.tc)(Ie[0],Ie[1])}};(0,x._)([(0,A.MZ)({clonable:!1})],me.prototype,"coords",null),(0,x._)([(0,A.MZ)({type:m.A})],me.prototype,"bottomLeft",void 0),(0,x._)([(0,A.MZ)({type:m.A})],me.prototype,"bottomRight",void 0),(0,x._)([(0,A.MZ)({type:m.A})],me.prototype,"topLeft",void 0),(0,x._)([(0,A.MZ)({type:m.A})],me.prototype,"topRight",void 0),me=(0,x._)([(0,D.$)("esri.layers.support.CornersGeoreference")],me);const st=me;var Te=p(69287),rt=p(85952),je=p(28067);let _e=class extends P{constructor(e){super(e),this.extent=null,this.rotation=0,this.type="extent-and-rotation"}get coords(){if(null==this.extent)return null;const{xmin:e,ymin:t,xmax:n,ymax:a,spatialReference:h}=this.extent;let M;if(this.rotation){const{x:O,y:B}=this.extent.center,T=Ce(O,B,this.rotation);M=[T(e,t),T(e,a),T(n,a),T(n,t)],M.push(M[0])}else M=[[e,t],[e,a],[n,a],[n,t],[e,t]];return new l.A({rings:[M],spatialReference:h})}set coords(e){if(null==e||null==this.extent)return;const t=this.extent.spatialReference;if(e=this.projectOrWarn(e,t),null==e?.extent)return;const{rings:[[n,a,h]],extent:{center:{x:M,y:O}}}=e,B=(0,Te.KJ)(Math.PI/2-Math.atan2(a[1]-n[1],a[0]-n[0])),T=Ce(M,O,-B),[V,G]=T(n[0],n[1]),[k,ie]=T(h[0],h[1]);this.extent=new je.A({xmin:V,ymin:G,xmax:k,ymax:ie,spatialReference:t}),this.rotation=B}toSourceNormalized(e){const{extent:t,rotation:n}=this;if(null==e||null==t)return null;const{xmin:a,ymin:h,xmax:M,ymax:O,center:B,spatialReference:T}=t;e=e.normalize();const V=(0,u.projectOrLoad)(e,T).geometry;if(null==V)return null;let G=V.x,k=V.y;return n&&([G,k]=Ce(B.x,B.y,-n)(G,k)),(0,f.tc)((0,Te.hs)(G,a,M,0,1),(0,Te.hs)(k,O,h,0,1))}};function Ce(e,t,n){const a=(0,rt.DF)(n),h=Math.cos(a),M=Math.sin(a);return(O,B)=>[h*(O-e)+M*(B-t)+e,h*(B-t)-M*(O-e)+t]}(0,x._)([(0,A.MZ)({clonable:!1})],_e.prototype,"coords",null),(0,x._)([(0,A.MZ)({type:je.A})],_e.prototype,"extent",void 0),(0,x._)([(0,A.MZ)({type:Number})],_e.prototype,"rotation",void 0),_e=(0,x._)([(0,D.$)("esri.layers.support.ExtentAndRotationGeoreference")],_e);const lt=_e;p(21152);var at=p(58701);function He(e,t){const n=(0,K.aB)(t);return function ht(e){return"media"===e?.type}(e)&&!!e.portalItem&&null!=n&&n>K.Gr.PORTAL_ITEM}const dt={key:"type",base:P,typeMap:{"control-points":Re,corners:st,"extent-and-rotation":lt}},mt={key:"type",base:P,typeMap:{"control-points":Re}};let ge=class extends((0,ot.PH)((0,z.P)(De.A))){constructor(e){super(e),this.georeference=null,this.opacity=1}readGeoreference(e){return Re.fromJSON(e)}writeGeoreference(e,t,n,a){const h=a?.resources?.pendingOperations,M=()=>{const O=function ut(e,t,n){if(!e||"control-points"===e.type)return e;const{coords:a}=e;if(5!==a?.rings[0]?.length)return null;const[h,M,O,B]=a.rings[0],{spatialReference:T}=a;return new Re({controlPoints:[{mapPoint:new m.A({x:h[0],y:h[1],spatialReference:T}),sourcePoint:(0,f.tc)(0,n)},{mapPoint:new m.A({x:M[0],y:M[1],spatialReference:T}),sourcePoint:(0,f.tc)(0,0)},{mapPoint:new m.A({x:O[0],y:O[1],spatialReference:T}),sourcePoint:(0,f.tc)(t,0)},{mapPoint:new m.A({x:B[0],y:B[1],spatialReference:T}),sourcePoint:(0,f.tc)(t,n)}],width:t,height:n})}(this.georeference,this.contentWidth,this.contentHeight);O&&("control-points"!==e.type&&Y.A.getLogger(this).warn(`only georeference of type 'control-points' may be persisted. The georeference of type '${e.type}' has been automatically converted.`),t[n]=O.write({},a))};if("control-points"!==e.type&&!this.loaded&&h)return t[n]={},void h.push(this.load().then(M));M()}get contentWidth(){return 0}get contentHeight(){return 0}toSource(e){const{georeference:t,contentWidth:n,contentHeight:a}=this;if(null==e||null==t||0===n||0===a)return null;const h=t.toSourceNormalized(e);return null==h?null:(h.x*=n,h.y*=a,h)}};(0,x._)([(0,A.MZ)({types:dt,json:{write:!0,types:mt}})],ge.prototype,"georeference",void 0),(0,x._)([(0,U.w)("georeference")],ge.prototype,"readGeoreference",null),(0,x._)([(0,q.K)("georeference")],ge.prototype,"writeGeoreference",null),(0,x._)([(0,A.MZ)({json:{read:!1,write:!1}})],ge.prototype,"opacity",void 0),ge=(0,x._)([(0,D.$)("esri.layers.support.MediaElementBase")],ge);const Ze=ge;var pt=p(20368),Ae=p(88135);let oe=class extends Ze{constructor(e){super(e),this.animationOptions=null,this.content=null,this.image=null,this.type="image",this.image=null}load(){const e=this.image;if("string"==typeof e){const t=(0,nt.M5)(e).then(n=>{this._set("content",n)});this.addResolvingPromise(t)}else if(e instanceof HTMLImageElement){const t=e.decode().then(()=>{this._set("content",e)});this.addResolvingPromise(t)}else e?this._set("content",e):this.addResolvingPromise(Promise.reject(new Q.A("image-element:invalid-image-type","Invalid image type",{image:e})));return Promise.resolve(this)}get contentWidth(){return null==this.content?0:this.content instanceof HTMLImageElement?this.content.naturalWidth:this.content.width}get contentHeight(){return null==this.content?0:this.content instanceof HTMLImageElement?this.content.naturalHeight:this.content.height}readImage(e,t,n){return(0,Ae.f)(t.url,n)}writeImage(e,t,n,a){if(null==e)return;const h=a?.portalItem,M=a?.resources;if(!h||!M)return void("string"==typeof e&&(t[n]=(0,Ae.t)(e,a)));const O=function ft(e){return"string"==typeof e&&!(0,Pe.DB)(e)&&!(0,Pe.w8)(e)}(e)?e:null;if(O){if(null==(0,Ae.i)(O))return void(t[n]=O);const B=(0,Ae.t)(O,{...a,verifyItemRelativeUrls:a?.verifyItemRelativeUrls?{writtenUrls:a.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},Ae.M.NO);if(h&&B&&!(0,Pe.oP)(B))return M.toKeep.push({resource:h.resourceFromPath(B),compress:!1}),void(t[n]=B)}t[n]="<pending>",M.pendingOperations.push(function yt(e){return Ye.apply(this,arguments)}(e).then(B=>{const T=function xt(e,t){const n=(0,it.lk)(),a=`${(0,Pe.fj)("media",n)}.${(0,pt.n)({type:"blob",blob:e})}`;return t.resourceFromPath(a)}(B,h);t[n]=T.itemRelativeUrl,M.toAdd.push({resource:T,content:{type:"blob",blob:B},compress:!1,finish:V=>{this.image=V.url}})}))}write(e,t){const n=super.write(e,t);return"mediaType"in n&&!n.url&&delete n.mediaType,n}};(0,x._)([(0,A.MZ)()],oe.prototype,"animationOptions",void 0),(0,x._)([(0,A.MZ)({readOnly:!0})],oe.prototype,"content",void 0),(0,x._)([(0,A.MZ)({readOnly:!0})],oe.prototype,"contentWidth",null),(0,x._)([(0,A.MZ)({readOnly:!0})],oe.prototype,"contentHeight",null),(0,x._)([(0,A.MZ)({json:{name:"url",type:String,write:{overridePolicy:(e,t,n)=>({enabled:!He(n?.layer,n?.origin)})}}})],oe.prototype,"image",void 0),(0,x._)([(0,U.w)("image",["url"])],oe.prototype,"readImage",null),(0,x._)([(0,q.K)("image")],oe.prototype,"writeImage",null),(0,x._)([(0,A.MZ)({readOnly:!0,json:{read:!1,write:{target:"mediaType",ignoreOrigin:!0}}})],oe.prototype,"type",void 0),oe=(0,x._)([(0,D.$)("esri.layers.support.ImageElement")],oe);const Ne=oe;function Ye(){return(Ye=(0,H.A)(function*(e){return"string"==typeof e?(0,Pe.DB)(e)?(0,Pe.N9)(e):(yield(0,tt.A)(e,{responseType:"blob"})).data:new Promise(t=>function gt(e){if(e instanceof HTMLCanvasElement)return e;const t=e instanceof HTMLImageElement?e.naturalWidth:e.width,n=e instanceof HTMLImageElement?e.naturalHeight:e.height,a=document.createElement("canvas"),h=a.getContext("2d");return a.width=t,a.height=n,e instanceof HTMLImageElement?h.drawImage(e,0,0,e.width,e.height):e instanceof ImageData&&h.putImageData(e,0,0),a}(e).toBlob(t))})).apply(this,arguments)}var vt=p(5605),Pt=p(42425),_t=p(64261),Mt=p(48900),Rt=p(51995),It=p(62928),At=p(59894),Et=p(28),Ot=p(40611);let fe=class extends Ze{constructor(e){super(e),this.autoplay=!0,this.content=null,this.type="video"}load(){const e=this.video;if("string"==typeof e){const t=document.createElement("video");t.src=e,t.crossOrigin="anonymous",t.autoplay=!0,t.muted=!0,t.loop=!0,t.playsInline=!0,this.addResolvingPromise(this._loadVideo(t).then(()=>{this._set("content",t)}))}else e instanceof HTMLVideoElement?this.addResolvingPromise(this._loadVideo(e).then(()=>{this._set("content",e)})):this.addResolvingPromise(Promise.reject(new Q.A("video-element:invalid-video-type","Invalid video type",{video:e})));return Promise.resolve(this)}get contentWidth(){return this.content?.videoWidth??0}get contentHeight(){return this.content?.videoHeight??0}set video(e){"not-loaded"===this.loadStatus?this._set("video",e):Y.A.getLogger(this).error("#video","video cannot be changed after the element is loaded.")}_loadVideo(e){return new Promise((t,n)=>{const a=(0,Ot.Oo)(e,"canplay",()=>{this.removeHandles("canplay"),this.autoplay?e.play().then(t,n):t()});this.addHandles(a,"canplay"),"anonymous"!==e.crossOrigin&&(e.crossOrigin="anonymous",e.src?.includes("blob:")||(e.src=e.src))})}};(0,x._)([(0,A.MZ)()],fe.prototype,"autoplay",void 0),(0,x._)([(0,A.MZ)({readOnly:!0})],fe.prototype,"content",void 0),(0,x._)([(0,A.MZ)({readOnly:!0})],fe.prototype,"contentWidth",null),(0,x._)([(0,A.MZ)({readOnly:!0})],fe.prototype,"contentHeight",null),(0,x._)([(0,A.MZ)()],fe.prototype,"video",null),fe=(0,x._)([(0,D.$)("esri.layers.support.VideoElement")],fe);const Ve=fe,Ke=$.A.ofType({key:"type",defaultKeyValue:"image",base:Ze,typeMap:{image:Ne,video:Ve}});let Me=class extends(De.A.LoadableMixin((0,_t.g)(Pt.A.EventedAccessor))){constructor(e){super(e),this._index=new At.F,this._elementViewsMap=new Map,this._elementsIndexes=new Map,this._elementsChangedHandler=t=>{for(const a of t.removed){const h=this._elementViewsMap.get(a);this._elementViewsMap.delete(a),this._index.delete(h),this.removeHandles(h),h.destroy(),this.notifyChange("fullExtent")}const{spatialReference:n}=this;for(const a of t.added){if(this._elementViewsMap.get(a))continue;const h=new Et._({spatialReference:n,element:a});this._elementViewsMap.set(a,h);const M=(0,Mt.wB)(()=>h.coords,()=>this._updateIndexForElement(h,!1));this._updateIndexForElement(h,!0),this.addHandles(M,h)}this._elementsIndexes.clear(),this.elements.forEach((a,h)=>this._elementsIndexes.set(a,h)),this.emit("refresh")},this.elements=new Ke}load(e){var t=this;return(0,H.A)(function*(){if((0,W.Te)(e),!t.spatialReference){const n=t.elements.find(a=>null!=a.georeference?.coords);t._set("spatialReference",n?n.georeference.coords.spatialReference:d.A.WGS84)}return t._elementsChangedHandler({added:t.elements.items,removed:[]}),t.addHandles(t.elements.on("change",t._elementsChangedHandler)),t})()}destroy(){this._index.clear(),this._elementViewsMap.clear(),this._elementsIndexes.clear()}set elements(e){this._set("elements",(0,vt.V)(e,this._get("elements"),Ke))}get fullExtent(){if("not-loaded"===this.loadStatus)return null;const e=this._index.fullBounds;return null==e?null:new je.A({xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3],spatialReference:this.spatialReference})}set spatialReference(e){"not-loaded"===this.loadStatus?this._set("spatialReference",e):Y.A.getLogger(this).error("#spatialReference","spatialReference cannot be changed after the source is loaded.")}queryElements(e,t){var n=this;return(0,H.A)(function*(){yield n.load(),yield(0,u.initializeProjection)(e.spatialReference,n.spatialReference,null,t);const a=(0,at.aI)(e.spatialReference,n.spatialReference)?e:(0,u.project)(e,n.spatialReference);if(!a)return[];const h=a.normalize(),M=[];for(const O of h)n._index.forEachInBounds((0,Rt.VY)(O),({normalizedCoords:B,element:T})=>{null!=B&&(0,It.fA)(O,B)&&M.push(T)});return M.sort((O,B)=>n._elementsIndexes.get(O)-n._elementsIndexes.get(B)),M})()}hasElement(e){return this.elements.includes(e)}_updateIndexForElement(e,t){const n=e.normalizedBounds,a=this._index.has(e),h=null!=n;this._index.delete(e),h&&this._index.set(e,n),this.notifyChange("fullExtent"),t||(a!==h?this.emit("refresh"):this.emit("change",{element:e.element}))}};(0,x._)([(0,A.MZ)()],Me.prototype,"elements",null),(0,x._)([(0,A.MZ)({readOnly:!0})],Me.prototype,"fullExtent",null),(0,x._)([(0,A.MZ)()],Me.prototype,"spatialReference",null),Me=(0,x._)([(0,D.$)("esri.layers.support.LocalMediaElementSource")],Me);const Ee=Me;var Be=p(71655);function We(e){return"object"==typeof e&&null!=e&&"type"in e}function Ge(e){return We(e)&&"image"===e.type}let J=class extends((0,xe.dM)((0,ve.j)((0,ee.q)((0,he.A)((0,z.P)(ce.A)))))){constructor(e){var t;super(e),t=this,this.effectiveSource=null,this.georeference=null,this.copyright=null,this.operationalLayerType="MediaLayer",this.spatialReference=null,this.type="media",this._debouncedSaveOperations=(0,W.sg)(function(){var n=(0,H.A)(function*(a,h,M){const{save:O,saveAs:B}=yield Promise.all([p.e(2076),p.e(3145)]).then(p.bind(p,44905));switch(a){case Be.X.SAVE:return O(t,h);case Be.X.SAVE_AS:return B(t,M,h)}});return function(a,h,M){return n.apply(this,arguments)}}()),this.source=new Ee}load(e){return this.addResolvingPromise(this._doLoad(e)),Promise.resolve(this)}_doLoad(e){var t=this;return(0,H.A)(function*(){yield t.loadFromPortal({supportedTypes:["Media Layer"]},e);let n=t.source;if(!n)throw new Q.A("media-layer:source-missing","Set 'MediaLayer.source' before loading the layer.");const a=t._getSourceOverride(n,t.georeference);a&&(t.setAtOrigin("source",a,"web-map"),t.setAtOrigin("source",a,"web-scene"),n=a);const h=We(n)?new Ee({elements:new $.A([n])}):n;t._set("effectiveSource",h),t.spatialReference&&(h.spatialReference=t.spatialReference),yield h.load(e),t.spatialReference=h.spatialReference})()}destroy(){this.effectiveSource?.destroy(),this.effectiveSource!==this.source&&this.source?.destroy()}readGeoreference(e,t){return e&&"itemId"in t&&t.itemId?e:void 0}get fullExtent(){return this.loaded?this.effectiveSource.fullExtent:null}set source(e){"loaded"!==this.loadStatus&&"failed"!==this.loadStatus?this._set("source",e):Y.A.getLogger(this).error("#source","source cannot be changed after the layer is loaded.")}castSource(e){return e?Array.isArray(e)?new Ee({elements:new $.A(e)}):e instanceof $.A?new Ee({elements:e}):e:null}readSource(e,t,n){if("itemId"in t&&t.itemId)return;const a=this._createSource(t);return a?.read(t,n),a}writeSource(e,t,n,a){if(e&&e instanceof Ee){const h=e.elements.length;if(1!==h)return void(a?.messages&&a.messages.push(new Q.A("media-layer:unsupported-source",`local media element source can only be persisted if it contains exactly one ImageElement, but it has ${h}.`)));e=e.elements.at(0)}Ge(e)?e.write(t,a):a?.messages&&a.messages.push(new Q.A("media-layer:unsupported-source",e?"only media elements of type 'ImageElement' can be persisted":"the media layer is missing a source"))}save(e){var t=this;return(0,H.A)(function*(){return t._debouncedSaveOperations(Be.X.SAVE,e)})()}saveAs(e,t){var n=this;return(0,H.A)(function*(){return n._debouncedSaveOperations(Be.X.SAVE_AS,t,e)})()}_createSource(e){if("mediaType"in e)switch(e.mediaType){case"image":return new Ne;case"video":return new Ve}return null}_getSourceOverride(e,t){if(We(e)&&this.originIdOf("source")===K.Gr.PORTAL_ITEM&&t&&(this.originIdOf("georeference")===K.Gr.WEB_MAP||this.originIdOf("georeference")===K.Gr.WEB_SCENE)){const n=e.toJSON(),a=this._createSource(n);return a.read({...n},{origin:"portal-item"}),a.read({georeference:t},{origin:"web-map"}),a.read({georeference:t},{origin:"web-scene"}),a}return null}};(0,x._)([(0,A.MZ)({readOnly:!0})],J.prototype,"effectiveSource",void 0),(0,x._)([(0,A.MZ)({readOnly:!0,json:{read:!1,write:!1,origins:{"web-document":{read:!0}}}})],J.prototype,"georeference",void 0),(0,x._)([(0,U.w)("web-document","georeference")],J.prototype,"readGeoreference",null),(0,x._)([(0,A.MZ)({type:String})],J.prototype,"copyright",void 0),(0,x._)([(0,A.MZ)({readOnly:!0})],J.prototype,"fullExtent",null),(0,x._)([(0,A.MZ)({type:["MediaLayer"]})],J.prototype,"operationalLayerType",void 0),(0,x._)([(0,A.MZ)({type:["show","hide"]})],J.prototype,"listMode",void 0),(0,x._)([(0,A.MZ)({nonNullable:!0,json:{write:{enabled:!0,allowNull:!1,target:{url:{type:String},mediaType:{type:["image"]},georeference:{type:Re}},overridePolicy(e,t,n){return{enabled:!0,allowNull:!1,ignoreOrigin:He(this,n?.origin)&&Ge(e)&&!!e.georeference&&e.originIdOf("georeference")>K.Gr.PORTAL_ITEM}}}}})],J.prototype,"source",null),(0,x._)([(0,b.w)("source")],J.prototype,"castSource",null),(0,x._)([(0,U.w)("source",["url"])],J.prototype,"readSource",null),(0,x._)([(0,q.K)("source")],J.prototype,"writeSource",null),(0,x._)([(0,A.MZ)()],J.prototype,"spatialReference",void 0),(0,x._)([(0,A.MZ)({readOnly:!0})],J.prototype,"type",void 0),J=(0,x._)([(0,D.$)("esri.layers.MediaLayer")],J);const Bt=J},59894:(Oe,se,p)=>{p.d(se,{F:()=>A});var H=p(3248),x=p(3567),$=p(51995);const Y={minX:0,minY:0,maxX:0,maxY:0};class A{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new x.w(9,(0,H.A)("esri-csp-restrictions")?w=>({minX:w[0],minY:w[1],maxX:w[2],maxY:w[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const w=new Array(this._idByBounds.size);let X=0;this._idByBounds.forEach((U,D)=>{w[X++]=D}),this._indexInvalid=!1,this._index.clear(),this._index.load(w)}else this._boundsToLoad.length&&(this._index.load(Array.from(new Set(this._boundsToLoad.filter(w=>this._idByBounds.has(w))))),this._boundsToLoad.length=0)}}get fullBounds(){if(!this._boundsById.size)return null;const w=(0,$.Ie)();for(const X of this._boundsById.values())X&&(w[0]=Math.min(X[0],w[0]),w[1]=Math.min(X[1],w[1]),w[2]=Math.max(X[2],w[2]),w[3]=Math.max(X[3],w[3]));return w}get valid(){return!this._indexInvalid}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(w){const X=this._boundsById.get(w);this._boundsById.delete(w),X&&(this._idByBounds.delete(X),this._indexInvalid||this._index.remove(X))}forEachInBounds(w,X){this._loadIndex(),function W(b,w,X){(function z(b){Y.minX=b[0],Y.minY=b[1],Y.maxX=b[2],Y.maxY=b[3]})(w),b.search(Y,X)}(this._index,w,U=>X(this._idByBounds.get(U)))}get(w){return this._boundsById.get(w)}has(w){return this._boundsById.has(w)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(w,X){if(!this._indexInvalid){const U=this._boundsById.get(w);U&&(this._index.remove(U),this._idByBounds.delete(U))}this._boundsById.set(w,X),X&&(this._idByBounds.set(X,w),this._indexInvalid||(this._boundsToLoad.push(X),this._boundsToLoad.length>5e4&&this._loadIndex()))}}}}]);