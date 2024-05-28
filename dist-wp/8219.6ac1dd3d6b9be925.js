"use strict";(self.webpackChunkangular_18_test=self.webpackChunkangular_18_test||[]).push([[8219],{3567:(K,X,l)=>{l.d(X,{w:()=>T});var I=l(89952),D=(l(3248),l(12438)),O=l(17694);class T{constructor(t=9,e){this._compareMinX=A,this._compareMinY=L,this._toBBox=n=>n,this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),e&&("function"==typeof e?this._toBBox=e:this._initFormat(e)),this.clear()}destroy(){this.clear(),v.prune(),w.prune(),m.prune(),_.prune()}all(t){U(this._data,t)}search(t,e){let n=this._data;const h=this._toBBox;if(g(t,n))for(v.clear();n;){for(let i=0,c=n.children.length;i<c;i++){const f=n.children[i],x=n.leaf?h(f):f;g(t,x)&&(n.leaf?e(f):S(t,x)?U(f,e):v.push(f))}n=v.pop()}}collides(t){let e=this._data;const n=this._toBBox;if(!g(t,e))return!1;for(v.clear();e;){for(let h=0,i=e.children.length;h<i;h++){const c=e.children[h],f=e.leaf?n(c):c;if(g(t,f)){if(e.leaf||S(t,f))return!0;v.push(c)}}e=v.pop()}return!1}load(t){if(!t.length)return this;if(t.length<this._minEntries){for(let n=0,h=t.length;n<h;n++)this.insert(t[n]);return this}let e=this._build(t.slice(0,t.length),0,t.length-1,0);if(this._data.children.length)if(this._data.height===e.height)this._splitRoot(this._data,e);else{if(this._data.height<e.height){const n=this._data;this._data=e,e=n}this._insert(e,this._data.height-e.height-1,!0)}else this._data=e;return this}insert(t){return t&&this._insert(t,this._data.height-1),this}clear(){return this._data=new B([]),this}remove(t){if(!t)return this;let e,n=this._data,h=null,i=0,c=!1;const f=this._toBBox(t);for(m.clear(),_.clear();n||m.length>0;){if(n||(n=m.pop(),h=m.data[m.length-1],i=_.pop()??0,c=!0),n.leaf&&(e=(0,I.qh)(n.children,t,n.children.length,n.indexHint),-1!==e))return n.children.splice(e,1),m.push(n),this._condense(m),this;c||n.leaf||!S(n,f)?h?(i++,n=h.children[i],c=!1):n=null:(m.push(n),_.push(i),i=0,h=n,n=n.children[0])}return this}toJSON(){return this._data}fromJSON(t){return this._data=t,this}_build(t,e,n,h){const i=n-e+1;let c=this._maxEntries;if(i<=c){const p=new B(t.slice(e,n+1));return R(p,this._toBBox),p}h||(h=Math.ceil(Math.log(i)/Math.log(c)),c=Math.ceil(i/c**(h-1)));const f=new F([]);f.height=h;const x=Math.ceil(i/c),C=x*Math.ceil(Math.sqrt(c));M(t,e,n,C,this._compareMinX);for(let p=e;p<=n;p+=C){const j=Math.min(p+C-1,n);M(t,p,j,x,this._compareMinY);for(let Q=p;Q<=j;Q+=x){const N=Math.min(Q+x-1,j);f.children.push(this._build(t,Q,N,h-1))}}return R(f,this._toBBox),f}_insert(t,e,n){const i=n?t:(0,this._toBBox)(t);m.clear();const c=function W(r,t,e,n){for(;n.push(t),!0!==t.leaf&&n.length-1!==e;){let h,i=1/0,c=1/0;for(let f=0,x=t.children.length;f<x;f++){const C=t.children[f],p=o(C),j=E(r,C)-p;j<c?(c=j,i=p<i?p:i,h=C):j===c&&p<i&&(i=p,h=C)}t=h||t.children[0]}return t}(i,this._data,e,m);for(c.children.push(t),y(c,i);e>=0&&m.data[e].children.length>this._maxEntries;)this._split(m,e),e--;!function Y(r,t,e){for(let n=e;n>=0;n--)y(t.data[n],r)}(i,m,e)}_split(t,e){const n=t.data[e],h=n.children.length,i=this._minEntries;this._chooseSplitAxis(n,i,h);const c=this._chooseSplitIndex(n,i,h);if(!c)return;const f=n.children.splice(c,n.children.length-c),x=n.leaf?new B(f):new F(f);x.height=n.height,R(n,this._toBBox),R(x,this._toBBox),e?t.data[e-1].children.push(x):this._splitRoot(n,x)}_splitRoot(t,e){this._data=new F([t,e]),this._data.height=t.height+1,R(this._data,this._toBBox)}_chooseSplitIndex(t,e,n){let h,i,c;h=i=1/0;for(let f=e;f<=n-e;f++){const x=d(t,0,f,this._toBBox),C=d(t,f,n,this._toBBox),p=P(x,C),j=o(x)+o(C);p<h?(h=p,c=f,i=j<i?j:i):p===h&&j<i&&(i=j,c=f)}return c}_chooseSplitAxis(t,e,n){const h=t.leaf?this._compareMinX:A,i=t.leaf?this._compareMinY:L;this._allDistMargin(t,e,n,h)<this._allDistMargin(t,e,n,i)&&t.children.sort(h)}_allDistMargin(t,e,n,h){t.children.sort(h);const i=this._toBBox,c=d(t,0,e,i),f=d(t,n-e,n,i);let x=u(c)+u(f);for(let C=e;C<n-e;C++){const p=t.children[C];y(c,t.leaf?i(p):p),x+=u(c)}for(let C=n-e-1;C>=e;C--){const p=t.children[C];y(f,t.leaf?i(p):p),x+=u(f)}return x}_condense(t){for(let e=t.length-1;e>=0;e--){const n=t.data[e];if(0===n.children.length)if(e>0){const h=t.data[e-1],i=h.children;i.splice((0,I.qh)(i,n,i.length,h.indexHint),1)}else this.clear();else R(n,this._toBBox)}}_initFormat(t){const e=["return a"," - b",";"];this._compareMinX=new Function("a","b",e.join(t[0])),this._compareMinY=new Function("a","b",e.join(t[1])),this._toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}function U(r,t){let e=r;for(w.clear();e;){if(!0===e.leaf)for(const n of e.children)t(n);else w.pushArray(e.children);e=w.pop()??null}}function R(r,t){d(r,0,r.children.length,t,r)}function d(r,t,e,n,h){h||(h=new B([])),h.minX=1/0,h.minY=1/0,h.maxX=-1/0,h.maxY=-1/0;for(let i,c=t;c<e;c++)i=r.children[c],y(h,r.leaf?n(i):i);return h}function y(r,t){r.minX=Math.min(r.minX,t.minX),r.minY=Math.min(r.minY,t.minY),r.maxX=Math.max(r.maxX,t.maxX),r.maxY=Math.max(r.maxY,t.maxY)}function A(r,t){return r.minX-t.minX}function L(r,t){return r.minY-t.minY}function o(r){return(r.maxX-r.minX)*(r.maxY-r.minY)}function u(r){return r.maxX-r.minX+(r.maxY-r.minY)}function E(r,t){return(Math.max(t.maxX,r.maxX)-Math.min(t.minX,r.minX))*(Math.max(t.maxY,r.maxY)-Math.min(t.minY,r.minY))}function P(r,t){const e=Math.max(r.minX,t.minX),n=Math.max(r.minY,t.minY),h=Math.min(r.maxX,t.maxX),i=Math.min(r.maxY,t.maxY);return Math.max(0,h-e)*Math.max(0,i-n)}function S(r,t){return r.minX<=t.minX&&r.minY<=t.minY&&t.maxX<=r.maxX&&t.maxY<=r.maxY}function g(r,t){return t.minX<=r.maxX&&t.minY<=r.maxY&&t.maxX>=r.minX&&t.maxY>=r.minY}function M(r,t,e,n,h){const i=[t,e];for(;i.length;){const c=i.pop(),f=i.pop();if(c-f<=n)continue;const x=f+Math.ceil((c-f)/n/2)*n;(0,O.q)(r,x,f,c,h),i.push(f,x,x,c)}}const v=new D.A,w=new D.A,m=new D.A,_=new D.A({deallocator:void 0});class a{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class s extends a{constructor(){super(...arguments),this.height=1,this.indexHint=new I.vW}}class B extends s{constructor(t){super(),this.children=t,this.leaf=!0}}class F extends s{constructor(t){super(),this.children=t,this.leaf=!1}}},59894:(K,X,l)=>{l.d(X,{F:()=>Y});var I=l(3248),b=l(3567),D=l(51995);const T={minX:0,minY:0,maxX:0,maxY:0};class Y{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new b.w(9,(0,I.A)("esri-csp-restrictions")?d=>({minX:d[0],minY:d[1],maxX:d[2],maxY:d[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const d=new Array(this._idByBounds.size);let y=0;this._idByBounds.forEach((A,L)=>{d[y++]=L}),this._indexInvalid=!1,this._index.clear(),this._index.load(d)}else this._boundsToLoad.length&&(this._index.load(Array.from(new Set(this._boundsToLoad.filter(d=>this._idByBounds.has(d))))),this._boundsToLoad.length=0)}}get fullBounds(){if(!this._boundsById.size)return null;const d=(0,D.Ie)();for(const y of this._boundsById.values())y&&(d[0]=Math.min(y[0],d[0]),d[1]=Math.min(y[1],d[1]),d[2]=Math.max(y[2],d[2]),d[3]=Math.max(y[3],d[3]));return d}get valid(){return!this._indexInvalid}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(d){const y=this._boundsById.get(d);this._boundsById.delete(d),y&&(this._idByBounds.delete(y),this._indexInvalid||this._index.remove(y))}forEachInBounds(d,y){this._loadIndex(),function U(R,d,y){(function W(R){T.minX=R[0],T.minY=R[1],T.maxX=R[2],T.maxY=R[3]})(d),R.search(T,y)}(this._index,d,A=>y(this._idByBounds.get(A)))}get(d){return this._boundsById.get(d)}has(d){return this._boundsById.has(d)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(d,y){if(!this._indexInvalid){const A=this._boundsById.get(d);A&&(this._index.remove(A),this._idByBounds.delete(A))}this._boundsById.set(d,y),y&&(this._idByBounds.set(y,d),this._indexInvalid||(this._boundsToLoad.push(y),this._boundsToLoad.length>5e4&&this._loadIndex()))}}},64373:(K,X,l)=>{l.d(X,{A:()=>A});var I=l(89952),b=l(5922),D=l(42425),O=l(35150),T=l(2296),W=l(51995),U=l(31732),Y=l(59894),R=l(95985),d=l(50690);const y=(0,T.vt)();class A{constructor(o){this.geometryInfo=o,this._boundsStore=new Y.F,this._featuresById=new Map,this._markedIds=new Set,this.events=new D.A,this.featureAdapter=d.T}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){return this._boundsStore.fullBounds}get storeStatistics(){let o=0;return this._featuresById.forEach(u=>{null!=u.geometry&&u.geometry.coords&&(o+=u.geometry.coords.length)}),{featureCount:this._featuresById.size,vertexCount:o/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}getFullExtent(o){if(null==this.fullBounds)return null;const[u,E,P,S]=this.fullBounds;return{xmin:u,ymin:E,xmax:P,ymax:S,spatialReference:(0,R.ag)(o)}}add(o){this._add(o),this._emitChanged()}addMany(o){for(const u of o)this._add(u);this._emitChanged()}upsertMany(o){const u=o.map(E=>this._upsert(E));return this._emitChanged(),u.filter(I.Ru)}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(o){const u=this._featuresById.get(o);return u?(this._remove(u),this._emitChanged(),u):null}removeManyById(o){this._boundsStore.invalidateIndex();for(const u of o){const E=this._featuresById.get(u);E&&this._remove(E)}this._emitChanged()}forEachBounds(o,u){for(const E of o){const P=this._boundsStore.get(E.objectId);P&&u((0,T.Jt)(y,P))}}getFeature(o){return this._featuresById.get(o)}has(o){return this._featuresById.has(o)}forEach(o){this._featuresById.forEach(u=>o(u))}forEachInBounds(o,u){this._boundsStore.forEachInBounds(o,E=>{u(this._featuresById.get(E))})}startMarkingUsedFeatures(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}sweep(){let o=!1;this._featuresById.forEach((u,E)=>{this._markedIds.has(E)||(o=!0,this._remove(u))}),this._markedIds.clear(),o&&this._emitChanged()}_emitChanged(){this.events.emit("changed",void 0)}_add(o){if(!o)return;const u=o.objectId;if(null==u)return void O.A.getLogger("esri.layers.graphics.data.FeatureStore").error(new b.A("featurestore:invalid-feature","feature id is missing",{feature:o}));const E=this._featuresById.get(u);let P;if(this._markedIds.add(u),E?(o.displayId=E.displayId,P=this._boundsStore.get(u),this._boundsStore.delete(u)):null!=this.onFeatureAdd&&this.onFeatureAdd(o),!o.geometry?.coords?.length)return this._boundsStore.set(u,null),void this._featuresById.set(u,o);P=(0,U.jQ)(P??(0,W.vt)(),o.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),null!=P&&this._boundsStore.set(u,P),this._featuresById.set(u,o)}_upsert(o){const u=o?.objectId;if(null==u)return O.A.getLogger("esri.layers.graphics.data.FeatureStore").error(new b.A("featurestore:invalid-feature","feature id is missing",{feature:o})),null;const E=this._featuresById.get(u);if(!E)return this._add(o),o;this._markedIds.add(u);const{geometry:P,attributes:S}=o;for(const g in S)E.attributes[g]=S[g];return P&&(E.geometry=P,this._boundsStore.set(u,(0,U.jQ)((0,W.vt)(),P,this.geometryInfo.hasZ,this.geometryInfo.hasM)??null)),E}_remove(o){null!=this.onFeatureRemove&&this.onFeatureRemove(o);const u=o.objectId;return this._markedIds.delete(u),this._boundsStore.delete(u),this._featuresById.delete(u),o}}},18219:(K,X,l)=>{l.r(X),l.d(X,{default:()=>S});var I=l(10467),b=l(89447),D=l(5922),O=l(35150),T=l(56492),W=l(96996),U=l(58701),Y=l(31732),R=l(64373),d=l(88840),y=l(33594),A=l(36761),L=l(51248),o=l(73650),u=l(73258),E=l(22639);const P="esri.layers.WFSLayer";class S{constructor(){this._customParameters=null,this._queryEngine=null,this._supportsPagination=!0}destroy(){this._queryEngine?.destroy(),this._queryEngine=null}load(_,a={}){var s=this;return(0,I.A)(function*(){const{getFeatureUrl:B,getFeatureOutputFormat:F,fields:r,geometryType:t,featureType:e,maxRecordCount:n,maxTotalRecordCount:h,maxPageCount:i,objectIdField:c,customParameters:f}=_,{spatialReference:x,getFeatureSpatialReference:C}=(0,o.UH)(B,e,_.spatialReference);try{yield(0,d.Nk)(C,x)}catch{throw new D.A("unsupported-projection","Projection not supported",{inSpatialReference:C,outSpatialReference:x})}(0,T.Te)(a),s._customParameters=f,s._featureType=e,s._fieldsIndex=u.A.fromLayerJSON({fields:r,dateFieldsTimeReference:r.some(j=>"esriFieldTypeDate"===j.type)?{timeZoneIANA:E.n$}:null}),s._geometryType=t,s._getFeatureUrl=B,s._getFeatureOutputFormat=F,s._getFeatureSpatialReference=C,s._maxRecordCount=n,s._maxTotalRecordCount=h,s._maxPageCount=i,s._objectIdField=c,s._spatialReference=x;let p=yield s._snapshotFeatures(a);if(p.errors.length>0&&(s._supportsPagination=!1,p=yield s._snapshotFeatures(a),p.errors.length>0))throw p.errors[0];return s._queryEngine=new y.d({fieldsIndex:s._fieldsIndex,geometryType:t,hasM:!1,hasZ:!1,objectIdField:c,spatialReference:x,timeInfo:null,featureStore:new R.A({geometryType:t,hasM:!1,hasZ:!1})}),s._queryEngine.featureStore.addMany(p.features),{warnings:w(p),extent:(yield s._queryEngine.fetchRecomputedExtents()).fullExtent}})()}applyEdits(){return(0,I.A)(function*(){throw new D.A("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")})()}queryFeatures(_={},a={}){var s=this;return(0,I.A)(function*(){return yield s._waitSnapshotComplete(),s._queryEngine.executeQuery(_,a.signal)})()}queryFeatureCount(_={},a={}){var s=this;return(0,I.A)(function*(){return yield s._waitSnapshotComplete(),s._queryEngine.executeQueryForCount(_,a.signal)})()}queryObjectIds(_={},a={}){var s=this;return(0,I.A)(function*(){return yield s._waitSnapshotComplete(),s._queryEngine.executeQueryForIds(_,a.signal)})()}queryExtent(_={},a={}){var s=this;return(0,I.A)(function*(){return yield s._waitSnapshotComplete(),s._queryEngine.executeQueryForExtent(_,a.signal)})()}querySnapping(_,a={}){var s=this;return(0,I.A)(function*(){return yield s._waitSnapshotComplete(),s._queryEngine.executeQueryForSnapping(_,a.signal)})()}refresh(_){var a=this;return(0,I.A)(function*(){return a._customParameters=_.customParameters,a._maxRecordCount=_.maxRecordCount,a._maxTotalRecordCount=_.maxTotalRecordCount,a._maxPageCount=_.maxPageCount,a._snapshotTask?.abort(),a._snapshotTask=(0,b.UT)(s=>a._snapshotFeatures({signal:s})),a._snapshotTask.promise.then(s=>{a._queryEngine.featureStore.clear(),a._queryEngine.featureStore.addMany(s.features);for(const B of w(s))O.A.getLogger(P).warn(new W.A("wfs-layer:refresh-warning",B.message,B.details));s.errors?.length&&O.A.getLogger(P).warn(new W.A("wfs-layer:refresh-error","Refresh completed with errors",{errors:s.errors}))},()=>{a._queryEngine.featureStore.clear()}),yield a._waitSnapshotComplete(),{extent:(yield a._queryEngine.fetchRecomputedExtents()).fullExtent}})()}_waitSnapshotComplete(){var _=this;return(0,I.A)(function*(){if(_._snapshotTask&&!_._snapshotTask.finished){try{yield _._snapshotTask.promise}catch{}return _._waitSnapshotComplete()}})()}_snapshotFeatures(_){var a=this;return(0,I.A)(function*(){const s=_?.signal,B=a._maxTotalRecordCount,F=a._maxPageCount,r=a._supportsPagination?yield(0,o.E)(a._getFeatureUrl,a._featureType.typeName,{customParameters:a._customParameters,signal:s}):void 0;let t=[];const e=[];if(null==r)try{t=yield a._singleQuery(s)}catch(n){(0,T.zf)(n)||e.push(n)}else{const n=Math.min(r,B),h=function*g(m,_,a){for(let s=0;s<_;s++)yield m._pageQuery(s,a)}(a,Math.max(1,Math.min(Math.ceil(n/a._maxRecordCount),F)),s);yield Promise.allSettled(Array.from({length:10}).map(()=>function M(m,_,a){return v.apply(this,arguments)}(h,t,e)))}return(0,T.Te)(s),{features:t,totalRecordCount:r,maxTotalRecordCount:B,maxPageCount:F,errors:e}})()}_singleQuery(_){var a=this;return(0,I.A)(function*(){const s=yield(0,o.x$)(a._getFeatureUrl,a._featureType.typeName,a._getFeatureSpatialReference,a._getFeatureOutputFormat,{customParameters:a._customParameters,signal:_});return a._processGeoJSON(s,{signal:_})})()}_pageQuery(_,a){var s=this;return(0,I.A)(function*(){const B=_*s._maxRecordCount,F=yield(0,o.x$)(s._getFeatureUrl,s._featureType.typeName,s._getFeatureSpatialReference,s._getFeatureOutputFormat,{customParameters:s._customParameters,startIndex:B,count:s._maxRecordCount,signal:a});return s._processGeoJSON(F,{startIndex:B,signal:a})})()}_processGeoJSON(_,a){(0,A.sO)(_,this._getFeatureSpatialReference.wkid);const{startIndex:s,signal:B}=a;(0,T.Te)(B);const F=(0,A.bd)(_,{geometryType:this._geometryType,hasZ:!1,objectIdField:this._objectIdField});if(!(0,U.aI)(this._spatialReference,this._getFeatureSpatialReference))for(const t of F)null!=t.geometry&&(t.geometry=(0,Y.Ux)((0,d.Cv)((0,Y.zv)(t.geometry,this._geometryType,!1,!1),this._getFeatureSpatialReference,this._spatialReference)));let r=s??1;for(const t of F){const e={};(0,L.MB)(this._fieldsIndex,e,t.attributes,!0),t.attributes=e,null==e[this._objectIdField]&&(t.objectId=e[this._objectIdField]=r++)}return F}}function v(){return(v=(0,I.A)(function*(m,_,a){let s=m.next();for(;!s.done;){try{const B=yield s.value;_.push(...B)}catch(B){(0,T.zf)(B)||a.push(B)}s=m.next()}})).apply(this,arguments)}function w(m){const _=[];return null!=m.totalRecordCount&&(m.features.length<m.totalRecordCount&&_.push({name:"wfs-layer:maxRecordCount-too-low",message:`Could only fetch ${m.features.length} of ${m.totalRecordCount} in ${m.maxPageCount} queries. Try increasing the value of WFSLayer.maxRecordCount.`,details:{recordCount:m.features.length,totalRecordCount:m.totalRecordCount}}),m.totalRecordCount>m.maxTotalRecordCount&&_.push({name:"wfs-layer:large-dataset",message:`The number of ${m.totalRecordCount} features exceeds the maximum allowed of ${m.maxTotalRecordCount}.`,details:{recordCount:m.features.length,totalRecordCount:m.totalRecordCount,maxTotalRecordCount:m.maxTotalRecordCount}})),_}},51248:(K,X,l)=>{l.d(X,{$1:()=>P,CR:()=>o,MB:()=>y,Yx:()=>U,bP:()=>R});var I=l(10467),b=l(28250),D=l(58701),O=l(86300);class T{constructor(){this.code=null,this.description=null}}class W{constructor(M){this.error=new T,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=M}}function U(g){return new W(g)}class Y{constructor(M){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=M}}function R(g){return new Y(g)}const d=new Set;function y(g,M,v,w=!1){d.clear();for(const m in v){const _=g.get(m);if(!_)continue;const a=A(_,v[m]);if(d.add(_.name),_&&(w||_.editable)){const s=(0,O.CJ)(_,a);if(s)return U((0,O.uo)(s,_,a));M[_.name]=a}}for(const m of g?.requiredFields??[])if(!d.has(m.name))return U(`missing required field "${m.name}"`);return null}function A(g,M){let v=M;return(0,O.WA)(g)&&"string"==typeof M?v=parseFloat(M):(0,O.yM)(g)&&null!=M&&"string"!=typeof M?v=String(M):(0,O.vE)(g)&&"string"==typeof M&&(v=(0,b._U)(M)),(0,O.WX)(v)}let L;function o(g,M){if(!g||!(0,D.fn)(M))return g;if("rings"in g||"paths"in g){if(null==L)throw new TypeError("geometry engine not loaded");return L.simplify(M,g)}return g}function E(){return(E=(0,I.A)(function*(){return null==L&&(L=yield Promise.all([l.e(3930),l.e(2076),l.e(2296)]).then(l.bind(l,27815))),L})).apply(this,arguments)}function P(g,M){return S.apply(this,arguments)}function S(){return S=(0,I.A)(function*(g,M){!(0,D.fn)(g)||"esriGeometryPolygon"!==M&&"esriGeometryPolyline"!==M||(yield function u(){return E.apply(this,arguments)}())}),S.apply(this,arguments)}}}]);