"use strict";(self.webpackChunkangular_18_test=self.webpackChunkangular_18_test||[]).push([[8113],{88113:(me,H,p)=>{p.r(H),p.d(H,{classBreaks:()=>Q,heatmapStatistics:()=>w,histogram:()=>X,summaryStatistics:()=>ne,uniqueValues:()=>ie});var y=p(10467),A=p(19093),j=p(59377);function ne(E){return R.apply(this,arguments)}function R(){return(R=(0,y.A)(function*(E){const{attribute:r,features:D}=E,{normalizationType:M,normalizationField:h,minValue:P,maxValue:$,fieldType:T}=r,U=yield(0,A.Jc)({field:r.field,valueExpression:r.valueExpression,normalizationType:M,normalizationField:h,normalizationTotal:r.normalizationTotal,viewInfoParams:r.viewInfoParams,timeZone:r.timeZone,fieldInfos:r.fieldInfos},D),q=(0,j.Vb)({normalizationType:M,normalizationField:h,minValue:P,maxValue:$}),re={value:.5,fieldType:T},le="esriFieldTypeString"===T?(0,j.z9)({values:U,supportsNullCount:q,percentileParams:re}):(0,j.G_)({values:U,minValue:P,maxValue:$,useSampleStdDev:!M,supportsNullCount:q,percentileParams:re});return(0,j.oZ)(le,"esriFieldTypeDate"===T)})).apply(this,arguments)}function ie(E){return Z.apply(this,arguments)}function Z(){return(Z=(0,y.A)(function*(E){const{attribute:r,features:D}=E,M=yield(0,A.Jc)({field:r.field,field2:r.field2,field3:r.field3,fieldDelimiter:r.fieldDelimiter,valueExpression:r.valueExpression,viewInfoParams:r.viewInfoParams,timeZone:r.timeZone,fieldInfos:r.fieldInfos},D,!1),h=(0,j.b3)(M);return(0,j.lv)(h,r.domains,r.returnAllCodedValues,r.fieldDelimiter)})).apply(this,arguments)}function Q(E){return K.apply(this,arguments)}function K(){return(K=(0,y.A)(function*(E){const{attribute:r,features:D}=E,{field:M,normalizationType:h,normalizationField:P,normalizationTotal:$,classificationMethod:T}=r,U=yield(0,A.Jc)({field:M,valueExpression:r.valueExpression,normalizationType:h,normalizationField:P,normalizationTotal:$,viewInfoParams:r.viewInfoParams,timeZone:r.timeZone,fieldInfos:r.fieldInfos},D),q=(0,j.Rw)(U,{field:M,normalizationType:h,normalizationField:P,normalizationTotal:$,classificationMethod:T,standardDeviationInterval:r.standardDeviationInterval,numClasses:r.numClasses,minValue:r.minValue,maxValue:r.maxValue});return(0,j.jM)(q,T)})).apply(this,arguments)}function X(E){return S.apply(this,arguments)}function S(){return(S=(0,y.A)(function*(E){const{attribute:r,features:D}=E,{field:M,normalizationType:h,normalizationField:P,normalizationTotal:$,classificationMethod:T}=r,U=yield(0,A.Jc)({field:M,valueExpression:r.valueExpression,normalizationType:h,normalizationField:P,normalizationTotal:$,viewInfoParams:r.viewInfoParams,timeZone:r.timeZone,fieldInfos:r.fieldInfos},D);return(0,j.$y)(U,{field:M,normalizationType:h,normalizationField:P,normalizationTotal:$,classificationMethod:T,standardDeviationInterval:r.standardDeviationInterval,numBins:r.numBins,minValue:r.minValue,maxValue:r.maxValue})})).apply(this,arguments)}function w(E){return k.apply(this,arguments)}function k(){return(k=(0,y.A)(function*(E){const{attribute:r,features:D}=E,{field:M,radius:h,transform:P,spatialReference:$}=r,T=r.size??[0,0],U=(0,A.$r)(D??[],P,$,T);return(0,A.gV)(U,h??void 0,M,T[0],T[1])})).apply(this,arguments)}},19093:(me,H,p)=>{p.d(H,{$r:()=>h,Jc:()=>T,gV:()=>P,rb:()=>$});var y=p(10467),ne=(p(21152),p(5922),p(67685)),R=p(97442),ie=p(32034),Z=p(721),Q=p(58701),K=p(86300),X=p(78592),S=p(43039),w=p(59377),k=p(48218),E=p(1749);let r=null;const D=/^(?<hh>([0-1][0-9])|([2][0-3])):(?<mm>[0-5][0-9])(:(?<ss>[0-5][0-9]))?([.](?<ms>\d+))?$/;function h(i,t,o,f){const _=(0,Q.d9)(o)?(0,Q.Vp)(o):null,O=_?Math.round((_.valid[1]-_.valid[0])/t.scale[0]):null;return i.map(z=>{const C=new E.A(z.geometry);return(0,Z.Gy)(t,C,C),z.geometry=_?function M(i,t,o){return i.x<0?i.x+=t:i.x>o&&(i.x-=t),i}(C,O??0,f[0]):C,z})}function P(i,t=18,o,f,_){const O=new Float64Array(f*_);t=Math.round((0,ne.Lz)(t));let z=Number.POSITIVE_INFINITY,C=Number.NEGATIVE_INFINITY;const N=(0,X.YW)(o);for(const{geometry:x,attributes:V}of i){const{x:F,y:v}=x,W=Math.max(0,F-t),J=Math.max(0,v-t),ue=Math.min(_,v+t),ae=Math.min(f,F+t),ee=+N(V);for(let Y=J;Y<ue;Y++)for(let G=W;G<ae;G++){const se=Y*f+G,oe=(0,X.hv)(G-F,Y-v,t)*ee,B=O[se]+=oe;z=Math.min(z,B),C=Math.max(C,B)}}return{min:z,max:C}}function $(i){const t=D.exec(i);if(!t)return null;const{hh:o,mm:f,ss:_,ms:O}=t.groups;return Number(o)*R.vf.hours+Number(f)*R.vf.minutes+Number(_)*R.vf.seconds+Number(O||0)}function T(i,t){return U.apply(this,arguments)}function U(){return(U=(0,y.A)(function*(i,t,o=!0){if(!t)return[];const{field:f,field2:_,field3:O,fieldDelimiter:z,fieldInfos:C,timeZone:N}=i,x=f&&C?.find(B=>B.name.toLowerCase()===f.toLowerCase()),V=!!x&&(0,K.OH)(x),F=!!x&&(0,S.fs)(x),v=i.valueExpression,W=i.normalizationType,J=i.normalizationField,ue=i.normalizationTotal,ae=[],ee=i.viewInfoParams;let Y=null,G=null;if(v){if(!r){const{arcadeUtils:B}=yield(0,k.lw)();r=B}r.hasGeometryOperations(v)&&(yield r.enableGeometryOperations()),Y=r.createFunction(v),G=ee?r.getViewInfo({viewingMode:ee.viewingMode,scale:ee.scale,spatialReference:new ie.A(ee.spatialReference)}):null}const se=i.fieldInfos,oe=t[0]&&"declaredClass"in t[0]&&"esri.Graphic"===t[0].declaredClass||!se?null:{fields:se};return t.forEach(B=>{const te=B.attributes;let I;if(v){const fe=oe?{...B,layer:oe}:B,ce=r.createExecContext(fe,G,N);I=r.executeFunction(Y,ce)}else te&&(I=te[f],_?(I=`${(0,w.gJ)(I)}${z}${(0,w.gJ)(te[_])}`,O&&(I=`${I}${z}${(0,w.gJ)(te[O])}`)):"string"==typeof I&&o&&(F?I=I?new Date(I).getTime():null:V&&(I=I?$(I):null)));if(W&&"number"==typeof I&&isFinite(I)){const fe=te&&parseFloat(te[J]);I=(0,w.zS)(I,W,fe,ue)}ae.push(I)}),ae})).apply(this,arguments)}},43039:(me,H,p)=>{p.d(H,{fs:()=>E,i0:()=>de});var y=p(48266),A=p(86300),R=(p(48218),p(71470),p(22639));function E(n){return(0,A.vE)(n)||(0,A.zD)(n)||(0,A.Ah)(n)}function de(n,m){const{format:d,timeZoneOptions:g,fieldType:b}=m??{};let L,i;if(g&&({timeZone:L,timeZoneName:i}=(0,R.hv)(g.layerTimeZone,g.datesInUnknownTimezone,g.viewTimeZone,(0,y.J2)(d||"short-date-short-time"),b)),"string"==typeof n&&isNaN(Date.parse("time-only"===b?`1970-01-01T${n}Z`:n)))return n;switch(b){case"date-only":{const t=(0,y.J2)(d||"short-date");return"string"==typeof n?(0,y.iS)(n,{...t}):(0,y.Yq)(n,{...t,timeZone:R.n$})}case"time-only":{const t=(0,y.J2)(d||"short-time");return"string"==typeof n?(0,y.F8)(n,t):(0,y.Yq)(n,{...t,timeZone:R.n$})}case"timestamp-offset":{if(!L&&"string"==typeof n&&new Date(n).toISOString()!==n)return n;const t=d||g?(0,y.J2)(d||"short-date-short-time"):void 0,o=t?{...t,timeZone:L,timeZoneName:i}:void 0;return"string"==typeof n?(0,y.Ey)(n,o):(0,y.Yq)(n,o)}default:{const t=d||g?(0,y.J2)(d||"short-date-short-time"):void 0;return(0,y.Yq)("string"==typeof n?new Date(n):n,t?{...t,timeZone:L,timeZoneName:i}:void 0)}}}}}]);