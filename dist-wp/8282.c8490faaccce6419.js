"use strict";(self.webpackChunkangular_18_test=self.webpackChunkangular_18_test||[]).push([[8282],{55912:(te,K,R)=>{R.d(K,{A:()=>V});var Z,G,N=R(3248),Q=R(61591);(G=Z||(Z={}))[G.varint=0]="varint",G[G.fixed64=1]="fixed64",G[G.delimited=2]="delimited",G[G.fixed32=5]="fixed32",G[G.unknown=99]="unknown";const J=4294967296,j=new TextDecoder("utf-8"),L=(0,N.A)("safari")||(0,N.A)("ios")?6:(0,N.A)("ff")?12:32;class V{constructor(y,b,T=0,k=(y?y.byteLength:0)){this._tag=0,this._dataType=Z.unknown,this._init(y,b,T,k)}_init(y,b,T,k){this._data=y,this._dataView=b,this._pos=T,this._end=k}asUnsafe(){return this}clone(){return new V(this._data,this._dataView,this._pos,this._end)}pos(){return this._pos}move(y){this._pos=y}nextTag(y){for(;;){if(this._pos===this._end)return!1;const b=this._decodeVarint();if(this._tag=b>>3,this._dataType=7&b,!y||y===this._tag)break;this.skip()}return!0}next(){if(this._pos===this._end)return!1;const y=this._decodeVarint();return this._tag=y>>3,this._dataType=7&y,!0}empty(){return this._pos>=this._end}tag(){return this._tag}getInt32(){return this._decodeVarint()}getInt64(){return this._decodeVarint()}getUInt32(){let y=4294967295;if(y=(127&this._data[this._pos])>>>0,this._data[this._pos++]<128||(y=(y|(127&this._data[this._pos])<<7)>>>0,this._data[this._pos++]<128)||(y=(y|(127&this._data[this._pos])<<14)>>>0,this._data[this._pos++]<128)||(y=(y|(127&this._data[this._pos])<<21)>>>0,this._data[this._pos++]<128)||(y=(y|(15&this._data[this._pos])<<28)>>>0,this._data[this._pos++]<128))return y;throw new Error("Varint overflow")}getUInt64(){return this._decodeVarint()}getSInt32(){const y=this.getUInt32();return y>>>1^-(1&y)}getSInt64(){return this._decodeSVarint()}getBool(){const y=0!==this._data[this._pos];return this._skip(1),y}getEnum(){return this._decodeVarint()}getFixed64(){const y=this._dataView,b=this._pos,T=y.getUint32(b,!0)+y.getUint32(b+4,!0)*J;return this._skip(8),T}getSFixed64(){const y=this._dataView,b=this._pos,T=y.getUint32(b,!0)+y.getInt32(b+4,!0)*J;return this._skip(8),T}getDouble(){const y=this._dataView.getFloat64(this._pos,!0);return this._skip(8),y}getFixed32(){const y=this._dataView.getUint32(this._pos,!0);return this._skip(4),y}getSFixed32(){const y=this._dataView.getInt32(this._pos,!0);return this._skip(4),y}getFloat(){const y=this._dataView.getFloat32(this._pos,!0);return this._skip(4),y}getString(){const y=this._getLength(),b=this._pos,T=this._toString(this._data,b,b+y);return this._skip(y),T}getBytes(){const y=this._getLength(),b=this._pos,T=this._toBytes(this._data,b,b+y);return this._skip(y),T}getLength(){return this._getLengthUnsafe()}processMessageWithArgs(y,b,T,k){const w=this.getMessage(),z=y(w,b,T,k);return w.release(),z}processMessage(y){const b=this.getMessage(),T=y(b);return b.release(),T}getMessage(){const y=this._getLength(),b=V.pool.acquire();return b._init(this._data,this._dataView,this._pos,this._pos+y),this._skip(y),b}release(){V.pool.release(this)}dataType(){return this._dataType}skip(){switch(this._dataType){case Z.varint:this._decodeVarint();break;case Z.fixed64:this._skip(8);break;case Z.delimited:this._skip(this._getLength());break;case Z.fixed32:this._skip(4);break;default:throw new Error("Invalid data type!")}}skipLen(y){this._skip(y)}_skip(y){if(this._pos+y>this._end)throw new Error("Attempt to skip past the end of buffer!");this._pos+=y}_decodeVarint(){const y=this._data;let b=this._pos,T=0,k=0;if(this._end-b>=10)do{if(k=y[b++],T|=127&k,!(128&k&&(k=y[b++],T|=(127&k)<<7,128&k)&&(k=y[b++],T|=(127&k)<<14,128&k)&&(k=y[b++],T|=(127&k)<<21,128&k)&&(k=y[b++],T+=268435456*(127&k),128&k)&&(k=y[b++],T+=34359738368*(127&k),128&k)&&(k=y[b++],T+=4398046511104*(127&k),128&k)&&(k=y[b++],T+=562949953421312*(127&k),128&k)&&(k=y[b++],T+=72057594037927940*(127&k),128&k)&&(k=y[b++],T+=0x8000000000000000*(127&k),128&k)))break;throw new Error("Varint too long!")}while(0);else{let w=1;for(;b!==this._end&&(k=y[b],128&k);)++b,T+=(127&k)*w,w*=128;if(b===this._end)throw new Error("Varint overrun!");++b,T+=k*w}return this._pos=b,T}_decodeSVarint(){const y=this._data;let b,T=0,k=0;const w=1&y[this._pos];if(k=y[this._pos++],T|=127&k,!(128&k&&(k=y[this._pos++],T|=(127&k)<<7,128&k)&&(k=y[this._pos++],T|=(127&k)<<14,128&k)&&(k=y[this._pos++],T|=(127&k)<<21,128&k)&&(k=y[this._pos++],T+=268435456*(127&k),128&k)&&(k=y[this._pos++],T+=34359738368*(127&k),128&k)&&(k=y[this._pos++],T+=4398046511104*(127&k),128&k)))return w?-(T+1)/2:T/2;if(b=BigInt(T),k=y[this._pos++],b+=0x2000000000000n*BigInt(127&k),!(128&k&&(k=y[this._pos++],b+=0x100000000000000n*BigInt(127&k),128&k)&&(k=y[this._pos++],b+=0x8000000000000000n*BigInt(127&k),128&k)))return Number(w?-(b+1n)/2n:b/2n);throw new Error("Varint too long!")}_getLength(){if(this._dataType!==Z.delimited)throw new Error("Not a delimited data type!");return this._decodeVarint()}_getLengthUnsafe(){return this.getUInt32()}_toString(y,b,T){if((T=Math.min(this._end,T))-b>L){const z=y.subarray(b,T);return j.decode(z)}let k="",w="";for(let z=b;z<T;++z){const Y=y[z];128&Y?w+="%"+Y.toString(16):(k+=decodeURIComponent(w)+String.fromCharCode(Y),w="")}return w.length&&(k+=decodeURIComponent(w)),k}_toBytes(y,b,T){return T=Math.min(this._end,T),new Uint8Array(y.buffer,b,T-b)}}V.pool=new Q.A(V,void 0,G=>{G._data=null,G._dataView=null})},98455:(te,K,R)=>{R.d(K,{SH:()=>_e,ae:()=>re,cn:()=>se});var N=R(5922),Q=R(55912),Z=R(13682),J=R(42122);const j=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeString","esriFieldTypeDate","esriFieldTypeOID","esriFieldTypeGeometry","esriFieldTypeBlob","esriFieldTypeRaster","esriFieldTypeGUID","esriFieldTypeGlobalID","esriFieldTypeXML","esriFieldTypeBigInteger","esriFieldTypeDateOnly","esriFieldTypeTimeOnly","esriFieldTypeTimestampOffset"],L=["sqlTypeBigInt","sqlTypeBinary","sqlTypeBit","sqlTypeChar","sqlTypeDate","sqlTypeDecimal","sqlTypeDouble","sqlTypeFloat","sqlTypeGeometry","sqlTypeGUID","sqlTypeInteger","sqlTypeLongNVarchar","sqlTypeLongVarbinary","sqlTypeLongVarchar","sqlTypeNChar","sqlTypeNVarchar","sqlTypeOther","sqlTypeReal","sqlTypeSmallInt","sqlTypeSqlXml","sqlTypeTime","sqlTypeTimestamp","sqlTypeTimestamp2","sqlTypeTinyInt","sqlTypeVarbinary","sqlTypeVarchar"],V=["upperLeft","lowerLeft"];function G(x){return x>=j.length?null:j[x]}function y(x){return x>=L.length?null:L[x]}function b(x){return x>=V.length?null:V[x]}function T(x,P){return P>=x.geometryTypes.length?null:x.geometryTypes[P]}function k(x,P,A){const F=x.asUnsafe(),I=P.createPointGeometry(A);for(;F.next();)switch(F.tag()){case 3:{const C=F.getUInt32(),v=F.pos()+C;let E=0;for(;F.pos()<v;)P.addCoordinatePoint(I,F.getSInt64(),E++);break}default:F.skip()}return I}function w(x,P,A){const I=x.asUnsafe(),C=P.createGeometry(A),v=2+(A.hasZ?1:0)+(A.hasM?1:0);for(;I.next();)switch(I.tag()){case 2:{const E=I.getUInt32(),$=I.pos()+E;let D=0;for(;I.pos()<$;)P.addLength(C,I.getUInt32(),D++);break}case 3:{const E=I.getUInt32(),$=I.pos()+E;let D=0;for(P.allocateCoordinates(C);I.pos()<$;)P.addCoordinate(C,I.getSInt64(),D),D++,D===v&&(D=0);break}default:I.skip()}return C}function z(x){const F=x.asUnsafe(),I=new Z.A;let C="esriGeometryPoint";for(;F.next();)switch(F.tag()){case 2:{const v=F.getUInt32(),E=F.pos()+v;for(;F.pos()<E;)I.lengths.push(F.getUInt32());break}case 3:{const v=F.getUInt32(),E=F.pos()+v;for(;F.pos()<E;)I.coords.push(F.getSInt64());break}case 1:C=J.z[F.getEnum()];break;default:F.skip()}return{queryGeometry:I,queryGeometryType:C}}function Y(x){const D=x.asUnsafe();for(;D.next();)switch(D.tag()){case 1:return D.getString();case 2:return D.getFloat();case 3:return D.getDouble();case 4:return D.getSInt32();case 5:return D.getUInt32();case 6:return D.getInt64();case 7:return D.getUInt64();case 8:return D.getSInt64();case 9:return D.getBool();default:return D.skip(),null}return null}function se(x){const v=x.asUnsafe(),E={type:G(0)};for(;v.next();)switch(v.tag()){case 1:E.name=v.getString();break;case 2:E.type=G(v.getEnum());break;case 3:E.alias=v.getString();break;case 4:E.sqlType=y(v.getEnum());break;case 5:default:v.skip();break;case 6:E.defaultValue=v.getString()}return E}function ye(x){const S={},F=x.asUnsafe();for(;F.next();)switch(F.tag()){case 1:S.name=F.getString();break;case 2:S.isSystemMaintained=F.getBool();break;default:F.skip()}return S}function ie(x,P,A,S){const v=P.createFeature(A);let E=0;for(;x.next();)switch(x.tag()){case 1:{const $=S[E++].name;v.attributes[$]=x.processMessage(Y);break}case 2:v.geometry=x.processMessageWithArgs(w,P,A);break;case 4:v.centroid=x.processMessageWithArgs(k,P,A);break;default:x.skip()}return v}function oe(x){const I=[1,1,1,1],C=x.asUnsafe();for(;C.next();)switch(C.tag()){case 1:I[0]=C.getDouble();break;case 2:I[1]=C.getDouble();break;case 4:I[2]=C.getDouble();break;case 3:I[3]=C.getDouble();break;default:C.skip()}return I}function le(x){const I=[0,0,0,0],C=x.asUnsafe();for(;C.next();)switch(C.tag()){case 1:I[0]=C.getDouble();break;case 2:I[1]=C.getDouble();break;case 4:I[2]=C.getDouble();break;case 3:I[3]=C.getDouble();break;default:C.skip()}return I}function re(x){const F={originPosition:b(0)},I=x.asUnsafe();for(;I.next();)switch(I.tag()){case 1:F.originPosition=b(I.getEnum());break;case 2:F.scale=I.processMessage(oe);break;case 3:F.translate=I.processMessage(le);break;default:I.skip()}return F}function ue(x){const F={},I=x.asUnsafe();for(;I.next();)switch(I.tag()){case 1:F.shapeAreaFieldName=I.getString();break;case 2:F.shapeLengthFieldName=I.getString();break;case 3:F.units=I.getString();break;default:I.skip()}return F}function he(x,P){const v=P.createSpatialReference();for(;x.next();)switch(x.tag()){case 1:v.wkid=x.getUInt32();break;case 5:v.wkt=x.getString();break;case 2:v.latestWkid=x.getUInt32();break;case 3:v.vcsWkid=x.getUInt32();break;case 4:v.latestVcsWkid=x.getUInt32();break;default:x.skip()}return v}function me(x,P){const U=P.createFeatureResult(),O=x.asUnsafe();U.geometryType=T(P,0);let ae=!1;for(;O.next();)switch(O.tag()){case 1:U.objectIdFieldName=O.getString();break;case 3:U.globalIdFieldName=O.getString();break;case 4:U.geohashFieldName=O.getString();break;case 5:U.geometryProperties=O.processMessage(ue);break;case 7:U.geometryType=T(P,O.getEnum());break;case 8:U.spatialReference=O.processMessageWithArgs(he,P);break;case 10:U.hasZ=O.getBool();break;case 11:U.hasM=O.getBool();break;case 12:U.transform=O.processMessage(re);break;case 9:U.exceededTransferLimit=O.getBool();break;case 13:P.addField(U,O.processMessage(se));break;case 15:ae||(P.prepareFeatures(U),ae=!0),P.addFeature(U,O.processMessageWithArgs(ie,P,U,U.fields));break;case 2:U.uniqueIdField=O.processMessage(ye);break;default:O.skip()}return P.finishFeatureResult(U),U}function ce(x,P){const F={};let I=null;for(;x.next();)switch(x.tag()){case 4:I=x.processMessageWithArgs(z);break;case 1:F.featureResult=x.processMessageWithArgs(me,P);break;default:x.skip()}return null!=I&&F.featureResult&&P.addQueryGeometry(F,I),F}function _e(x,P){try{const S=new Q.A(new Uint8Array(x),new DataView(x)),F={};for(;S.next();)2===S.tag()?F.queryResult=S.processMessageWithArgs(ce,P):S.skip();return F}catch(A){throw new N.A("query:parsing-pbf","Error while parsing FeatureSet PBF payload",{error:A})}}},42122:(te,K,R)=>{R.d(K,{S:()=>V,z:()=>L});var N=R(82663),Q=R(58701),Z=R(42086),J=R(61808),j=R(13682);const L=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"];class V{constructor(y){this._options=y,this.geometryTypes=L,this._coordinatePtr=0,this._vertexDimension=0}createFeatureResult(){return new J.A}prepareFeatures(y){this._vertexDimension=2,y.hasZ&&this._vertexDimension++,y.hasM&&this._vertexDimension++}finishFeatureResult(y){if(!y?.features||!y.hasZ||!this._options.sourceSpatialReference||!y.spatialReference||(0,Q.aI)(y.spatialReference,this._options.sourceSpatialReference)||y.spatialReference.vcsWkid)return;const b=(0,N.G9)(this._options.sourceSpatialReference)/(0,N.G9)(y.spatialReference);if(1!==b)for(const T of y.features){if(!(0,Z.N3)(T))continue;const k=T.geometry.coords;for(let w=2;w<k.length;w+=3)k[w]*=b}}addFeature(y,b){y.features.push(b)}createFeature(){return new Z.Om}createSpatialReference(){return{wkid:0}}createGeometry(){return new j.A}addField(y,b){y.fields.push(b)}allocateCoordinates(y){y.coords.length=y.lengths.reduce((b,T)=>b+T,0)*this._vertexDimension,this._coordinatePtr=0}addCoordinate(y,b){y.coords[this._coordinatePtr++]=b}addCoordinatePoint(y,b){y.coords.push(b)}addLength(y,b){y.lengths.push(b)}addQueryGeometry(y,b){y.queryGeometry=b.queryGeometry,y.queryGeometryType=b.queryGeometryType}createPointGeometry(){return new j.A}}},78304:(te,K,R)=>{R.d(K,{m:()=>Q});var N=R(98455);function Q(Z,J){const j=(0,N.SH)(Z,J),L=j.queryResult.featureResult,V=j.queryResult.queryGeometry,G=j.queryResult.queryGeometryType;if(L&&L.features&&L.features.length&&L.objectIdFieldName){const y=L.objectIdFieldName;for(const b of L.features)b.attributes&&(b.objectId=b.attributes[y])}return L&&(L.queryGeometry=V,L.queryGeometryType=G),L}},28282:(te,K,R)=>{R.r(K),R.d(K,{default:()=>Me});var N=R(69690),Q=R(33894),Z=R(32034),J=R(23743),T=(R(3248),R(79139),R(2296),R(51995),R(721),R(6434),R(29141));R(69287),R(58701);class ce{constructor(d,g,_){this.uid=d,this.geometry=g,this.attributes=_,this.visible=!0,this.objectId=null,this.centroid=null}}class x{constructor(){this.exceededTransferLimit=!1,this.features=[],this.fields=[],this.hasM=!1,this.hasZ=!1,this.geometryType=null,this.objectIdFieldName=null,this.globalIdFieldName=null,this.geometryProperties=null,this.geohashFieldName=null,this.spatialReference=null,this.transform=null}}var de=R(31732);function be(f,d){return d}function ne(f,d,g,_){switch(g){case 0:return ee(f,d+_,0);case 1:return"lowerLeft"===f.originPosition?ee(f,d+_,1):function Te({translate:f,scale:d},g,_){return f[_]-g*d[_]}(f,d+_,1)}}function U(f,d,g,_){return 2===g?ee(f,d,2):ne(f,d,g,_)}function O(f,d,g,_){return 2===g?ee(f,d,3):ne(f,d,g,_)}function ae(f,d,g,_){return 3===g?ee(f,d,3):U(f,d,g,_)}function ee({translate:f,scale:d},g,_){return f[_]+g*d[_]}class xe{constructor(d){this._options=d,this.geometryTypes=["point","multipoint","polyline","polygon"],this._previousCoordinate=[0,0],this._transform=null,this._applyTransform=be,this._lengths=[],this._currentLengthIndex=0,this._toAddInCurrentPath=0,this._vertexDimension=0,this._coordinateBuffer=null,this._coordinateBufferPtr=0,this._attributesConstructor=class{},this._missingAttributes=[]}get missingAttributes(){return this._missingAttributes}createFeatureResult(){return new x}finishFeatureResult(d){if(this._options.applyTransform&&(d.transform=null),this._attributesConstructor=class{},this._coordinateBuffer=null,this._lengths.length=0,!d.hasZ)return;const g=(0,J.N)(d.geometryType,this._options.sourceSpatialReference,d.spatialReference);if(null!=g)for(const _ of d.features)g(_.geometry)}createSpatialReference(){return new Z.A}addField(d,g){d.fields.push(T.A.fromJSON(g));const _=d.fields.map(M=>M.name);this._attributesConstructor=function(){for(const M of _)this[M]=null}}addFeature(d,g){(function pe(f,d,g,_){if(d?.size&&null!=g&&f)for(const M in f){if(!d.has(M))continue;const B=f[M];"string"==typeof B&&B.length>g&&(_(M),f[M]="")}})(g.attributes,this._options.maxStringAttributeFields,this._options.maxStringAttributeLength,B=>{const W=g.attributes[d.objectIdFieldName];null!=W&&this._missingAttributes.push({objectId:W,attribute:B})}),d.features.push(g)}addQueryGeometry(d,g){const{queryGeometry:_,queryGeometryType:M}=g,B=(0,de.Ch)(_.clone(),_,!1,!1,this._transform),W=(0,de.zv)(B,M,!1,!1);let X=null;switch(M){case"esriGeometryPoint":X="point";break;case"esriGeometryPolygon":X="polygon";break;case"esriGeometryPolyline":X="polyline";break;case"esriGeometryMultipoint":X="multipoint"}W.type=X,d.queryGeometryType=M,d.queryGeometry=W}prepareFeatures(d){switch(this._transform=d.transform??null,this._options.applyTransform&&d.transform&&(this._applyTransform=this._deriveApplyTransform(d)),this._vertexDimension=2,d.hasZ&&this._vertexDimension++,d.hasM&&this._vertexDimension++,d.geometryType){case"point":this.addCoordinate=(g,_,M)=>this.addCoordinatePoint(g,_,M),this.createGeometry=g=>this.createPointGeometry(g);break;case"polygon":this.addCoordinate=(g,_,M)=>this._addCoordinatePolygon(g,_,M),this.createGeometry=g=>this._createPolygonGeometry(g);break;case"polyline":this.addCoordinate=(g,_,M)=>this._addCoordinatePolyline(g,_,M),this.createGeometry=g=>this._createPolylineGeometry(g);break;case"multipoint":this.addCoordinate=(g,_,M)=>this._addCoordinateMultipoint(g,_,M),this.createGeometry=g=>this._createMultipointGeometry(g);break;case"mesh":case"extent":break;default:(0,N.Xb)(d.geometryType)}}createFeature(){return this._lengths.length=0,this._currentLengthIndex=0,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0,new ce((0,Q.c)(),null,new this._attributesConstructor)}allocateCoordinates(){const d=this._lengths.reduce((g,_)=>g+_,0);this._coordinateBuffer=new Float64Array(d*this._vertexDimension),this._coordinateBufferPtr=0}addLength(d,g){0===this._lengths.length&&(this._toAddInCurrentPath=g),this._lengths.push(g)}createPointGeometry(d){const g={type:"point",x:0,y:0,spatialReference:d.spatialReference,hasZ:!!d.hasZ,hasM:!!d.hasM};return g.hasZ&&(g.z=0),g.hasM&&(g.m=0),g}addCoordinatePoint(d,g,_){const M=this._transform?this._applyTransform(this._transform,g,_,0):g;if(null!=M)switch(_){case 0:d.x=M;break;case 1:d.y=M;break;case 2:d.hasZ?d.z=M:d.m=M;break;case 3:d.m=M}}_transformPathLikeValue(d,g){let _=0;return g<=1&&(_=this._previousCoordinate[g],this._previousCoordinate[g]+=d),this._transform?this._applyTransform(this._transform,d,g,_):d}_addCoordinatePolyline(d,g,_){this._dehydratedAddPointsCoordinate(d.paths,g,_)}_addCoordinatePolygon(d,g,_){this._dehydratedAddPointsCoordinate(d.rings,g,_)}_addCoordinateMultipoint(d,g,_){0===_&&d.points.push([]);const M=this._transformPathLikeValue(g,_);d.points[d.points.length-1].push(M)}_createPolygonGeometry(d){return{type:"polygon",rings:[[]],spatialReference:d.spatialReference,hasZ:!!d.hasZ,hasM:!!d.hasM}}_createPolylineGeometry(d){return{type:"polyline",paths:[[]],spatialReference:d.spatialReference,hasZ:!!d.hasZ,hasM:!!d.hasM}}_createMultipointGeometry(d){return{type:"multipoint",points:[],spatialReference:d.spatialReference,hasZ:!!d.hasZ,hasM:!!d.hasM}}_dehydratedAddPointsCoordinate(d,g,_){0===_&&0==this._toAddInCurrentPath--&&(d.push([]),this._toAddInCurrentPath=this._lengths[++this._currentLengthIndex]-1,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0);const M=this._transformPathLikeValue(g,_),W=this._coordinateBuffer;if(W){if(0===_){const X=this._coordinateBufferPtr*Float64Array.BYTES_PER_ELEMENT;d[d.length-1].push(new Float64Array(W.buffer,X,this._vertexDimension))}W[this._coordinateBufferPtr++]=M}}_deriveApplyTransform(d){const{hasZ:g,hasM:_}=d;return g&&_?ae:g?U:_?O:ne}}var Fe=R(78304);class Ie{_parseFeatureQuery(d){const g=new xe(d.options),_=(0,Fe.m)(d.buffer,g),M={..._,spatialReference:_.spatialReference?.toJSON(),fields:_.fields?_.fields.map(B=>B.toJSON()):void 0,missingAttributes:g.missingAttributes};return Promise.resolve(M)}}function Me(){return new Ie}}}]);