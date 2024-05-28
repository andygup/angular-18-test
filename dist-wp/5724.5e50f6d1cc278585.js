"use strict";(self.webpackChunkangular_18_test=self.webpackChunkangular_18_test||[]).push([[5724],{55724:(q,O,l)=>{l.r(O),l.d(O,{createArcadeExecutor:()=>V,createArcadeProfile:()=>Q});var S=l(10467),B=l(81098),E=l(61299),F=l(42970),C=l(5922),K=l(77806),h=l(87257),P=l(29752),k=l(35940),G=l(73874),Z=l(93327),Y=l(48218);let m=null;function J(e,n,a,o={}){const r=n.elementType,s="value",i="array"===r.type?[{name:s,type:r.type,elementType:r.elementType}]:"dictionary"===r.type?[{name:s,type:r.type,properties:r.properties}]:[{name:s,type:r.type}];return new F.A(e.map(c=>{const t={};return b(t,i,{[s]:c},a,o),t[s]}))}function z(e,n,a={}){const o=e instanceof Z.A?new k.default({source:e.features,geometryType:e.geometryType,fields:e.fields,spatialReference:e.spatialReference}):e;return n.constructFeatureSet(o,a.spatialReference,null,!0,a.lruCache,a.interceptor)}function N(e,n,a={}){const{spatialReference:o,interceptor:r,lruCache:s}=a;return"string"==typeof e?n.createFeatureSetCollectionFromService(e,o,s,r):n.createFeatureSetCollectionFromMap(e,o,s,r)}function H(e,n,a,o={}){const r={};return b(r,n.properties,e,a,o),new m.Dictionary(r)}function b(e,n,a,o,r={}){const s={};for(const i of Object.keys(a))s[i.toLowerCase()]=a[i];for(const i of n){const c=i.name.toLowerCase();if(r.variablesPreProcessed)e[c]=s[c];else switch(i.type){case"array":{const t=s[c];e[c]=null==t?null:J(t,i,o,r);break}case"feature":{const t=s[c];e[c]=null==t?null:m.Feature.createFromGraphic(t,r?.timeZone);break}case"featureSet":{const t=s[c];e[c]=null==t?null:o?z(t,o,r):null;break}case"featureSetCollection":{const t=s[c];e[c]=null==t?null:o?N(t,o,r):null;break}case"dictionary":{const t=s[c];e[c]=null==t?null:H(t,i,o,r);break}case"date":{const t=s[c];e[c]=t?t instanceof E.lY?t:r?.timeZone?E.lY.dateJSAndZoneToArcadeDate(t,r?.timeZone):E.lY.dateJSToArcadeDate(t):null;break}case"dateOnly":{const t=s[c];e[c]=t?t instanceof h.n?t:h.n.fromReader(t):null;break}case"time":{const t=s[c];e[c]=t?t instanceof P.k?t:P.k.fromReader(t):null;break}case"knowledgeGraph":case"geometry":case"boolean":case"text":case"number":e[c]=s[c]}}}function $(e,n){for(const a of e)n.push(a),"dictionary"===a.type&&$(a.properties,n);return n}function M(e,n,a,o,r){const{spatialReference:s,interceptor:i,lruCache:c,console:t,abortSignal:_,timeZone:p,services:D={portal:G.A.getDefault()}}=a,d={vars:{},spatialReference:s,interceptor:i,timeZone:p,lrucache:c,useAsync:r,services:D,console:t,abortSignal:_};return n&&b(d.vars,e.variables,n,o,a),d}function A(e,n){switch(n.getArcadeType(e)){case"number":case"text":case"boolean":case"point":case"polygon":case"polyline":case"multipoint":case"extent":return e;case"date":return e.toJSDate();case"time":case"dateOnly":return e.toString();case"feature":{const a=e,o="geometry"in a?a.geometry():null,r="readAttributes"in a?a.readAttributes():a.attributes;return new B.A({geometry:o,attributes:r})}case"dictionary":{const a=e,o=a.attributes,r={};for(const s of Object.keys(o))r[s]=A(a.field(s),n);return r}case"array":return("toArray"in e?e.toArray():e).map(a=>A(a,n))}return e}const T={variables:[{name:"$feature",type:"feature"},{name:"$layer",type:"featureSet"},{name:"$datastore",type:"featureSetCollection"},{name:"$map",type:"featureSetCollection"},{name:"$userInput",type:"geometry"},{name:"$graph",type:"knowledgeGraph"}]},R={variables:[{name:"$feature",type:"feature"},{name:"$aggregatedFeatures",type:"featureSet"}]},L=new Map([["aggregate-field",{variables:[{name:"$feature",type:"feature"}]}],["form-constraint",{variables:[{name:"$feature",type:"feature"}]}],["feature-z",{variables:[{name:"$feature",type:"feature"}]}],["field-calculation",{variables:[{name:"$feature",type:"feature"},{name:"$datastore",type:"featureSetCollection"}]}],["form-calculation",{variables:[{name:"$feature",type:"feature"},{name:"$originalFeature",type:"feature"},{name:"$layer",type:"featureSet"},{name:"$featureSet",type:"featureSet"},{name:"$datastore",type:"featureSetCollection"},{name:"$map",type:"featureSetCollection"},{name:"$editContext",type:"dictionary",properties:[{name:"editType",type:"text"}]}]}],["labeling",{variables:[{name:"$feature",type:"feature"}]}],["popup",T],["popup-element",T],["feature-reduction-popup",R],["feature-reduction-popup-element",R],["visualization",{variables:[{name:"$feature",type:"feature"},{name:"$view",type:"dictionary",properties:[{name:"scale",type:"number"}]}]}]]);function Q(e){const n=L.get(e);if(!n){const a=Array.from(L.keys()).map(o=>`'${o}'`).join(", ");throw new C.A("createArcadeProfile:invalid-profile-name",`Invalid profile name '${e}'. You must specify one of the following values: ${a}`)}return(0,K.o8)(n)}function V(e,n){return g.apply(this,arguments)}function g(){return g=(0,S.A)(function*(e,n,a={}){m||(m=yield(0,Y.lw)());const{arcade:o,arcadeUtils:r}=m,{loadScriptDependencies:s,referencesMember:i,scriptIsAsync:c}=o,t=$(n.variables,[]),_=t.filter(u=>"featureSet"===u.type||"featureSetCollection"===u.type).map(u=>u.name.toLowerCase()),p=o.parseScript(e,_);if(!p)throw new C.A("arcade:invalid-script","Unable to create SyntaxTree");const D=r.extractFieldNames(p),d=o.scriptTouchesGeometry(p),U=t.map(u=>u.name.toLowerCase()).filter(u=>i(p,u)),f=c(p,_);yield s(p,f,_);const w={vars:{},spatialReference:null,useAsync:f};for(const u of U)w.vars[u]="any";const{lruCache:j}=a,x=o.compileScript(p,w),I=o.featureSetUtils(),{services:X}=a;return{execute:(u,v={})=>{if(f)throw new C.A("arcade:invalid-execution-mode","Cannot execute the script in synchronous mode");const y=x(M(n,u,{lruCache:j,...v},I,f));return v.rawOutput?y:A(y,r)},executeAsync:(u=(0,S.A)(function*(v,y={}){const W=yield x(M(n,v,{lruCache:j,services:X,...y},I,f));return y.rawOutput?W:A(W,r)}),function(y){return u.apply(this,arguments)}),isAsync:f,variablesUsed:U,fieldsUsed:D,geometryUsed:d,syntaxTree:p};var u}),g.apply(this,arguments)}}}]);