"use strict";(self.webpackChunkangular_18_test=self.webpackChunkangular_18_test||[]).push([[6180],{56180:(ee,D,i)=>{i.r(D),i.d(D,{load:()=>w});var c=i(10467),_=i(5922),b=i(68438),S=i(23154),T=i(61597),j=i(66323),R=i(64833),U=i(73874),O=i(15764),y=i(43092),K=i(69927),W=i(8691),B=i(56151);function w(e,n){return d.apply(this,arguments)}function d(){return d=(0,c.A)(function*(e,n){const r=e.instance.portalItem;if(r?.id)return yield r.load(n),function F(e){const n=e.instance.portalItem;if(!n?.type||!e.supportedTypes.includes(n.type))throw new _.A("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:n?.type,expectedType:e.supportedTypes.join(", ")})}(e),e.validateItem&&e.validateItem(r),function J(e,n){return f.apply(this,arguments)}(e,n)}),d.apply(this,arguments)}function f(){return f=(0,c.A)(function*(e,n){const r=e.instance,t=r.portalItem;if(!t)return;const{url:s,title:l}=t,a=(0,O.v)(t,"portal-item");if("group"===r.type)return function G(e,n,r){return m.apply(this,arguments)}(r,a,e);s&&"media"!==r.type&&r.read({url:s},a);const u=new T.v,o=yield C(e,u,n);return o&&r.read(o,a),r.resourceReferences={portalItem:t,paths:a.readResourcePaths??[]},"subtype-group"!==r.type&&r.read({title:l},a),(0,W.L)(r,a)}),f.apply(this,arguments)}function m(){return m=(0,c.A)(function*(e,n,r){const t=e.portalItem;if(!e.sourceIsPortalItem)return;const{title:s,type:l}=t;if("Group Layer"===l){if(!(0,K.Y)(t,"Map"))throw new _.A("portal:invalid-layer-item-typekeyword","'Group Layer' item without 'Map' type keyword is not supported");return function N(e){return h.apply(this,arguments)}(e)}return e.read({title:s},n),function $(e,n){return g.apply(this,arguments)}(e,r)}),m.apply(this,arguments)}function h(){return(h=(0,c.A)(function*(e){const n=e.portalItem,r=yield n.fetchData("json");if(!r)return;const t=(0,O.v)(n,"web-map");e.read(r,t),yield(0,j.populateGroupLayer)(e,r,{context:t}),e.resourceReferences={portalItem:n,paths:t.readResourcePaths??[]}})).apply(this,arguments)}function g(){return g=(0,c.A)(function*(e,n){let r;const{portalItem:t}=e;if(!t)return;const s=t.type,l=n.layerModuleTypeMap;switch(s){case"Feature Service":case"Feature Collection":r=l.FeatureLayer;break;case"Stream Service":r=l.StreamLayer;break;case"Scene Service":r=l.SceneLayer;break;default:throw new _.A("portal:unsupported-item-type-as-group",`The item type '${s}' is not supported as a 'IGroupLayer'`)}const a=new T.v;let[u,o]=yield Promise.all([r(),C(n,a)]),p=()=>u;if("Feature Service"===s){const k=(0,y.pJ)(o)?.customParameters;o=t.url?yield(0,y.bO)(o,t.url,a):{},p=(yield function Z(e,n){return x.apply(this,arguments)}(o,l))||p;const q=yield function Y(e,n){return M.apply(this,arguments)}(t.url,{customParameters:k,loadContext:a});return yield P(e,p,o,q)}return"Scene Service"===s&&t.url&&(o=yield(0,y.nu)(t,o,a)),(0,y.XH)(o)>0?yield P(e,p,o):yield function H(e,n){return E.apply(this,arguments)}(e,p)}),g.apply(this,arguments)}function E(){return(E=(0,c.A)(function*(e,n){const{portalItem:r}=e;if(!r?.url)return;const t=yield(0,B.V)(r.url);t&&P(e,n,{layers:t.layers?.map(y._r),tables:t.tables?.map(y._r)})})).apply(this,arguments)}function P(e,n,r,t){return I.apply(this,arguments)}function I(){return(I=(0,c.A)(function*(e,n,r,t){let s=r.layers||[];const l=r.tables||[];if("Feature Collection"===e.portalItem?.type?(s.forEach((a,u)=>{a.id=u,"Table"===a?.layerDefinition?.type&&l.push(a)}),s=s.filter(a=>"Table"!==a?.layerDefinition?.type)):(s.reverse(),l.reverse()),s.forEach(a=>{const u=t?.(a);if(u||!t){const o=A(e,n(a),r,a,u);e.add(o)}}),l.length){const a=yield R.S.FeatureLayer();l.forEach(u=>{const o=t?.(u);if(o||!t){const p=A(e,a,r,u,o);e.tables.add(p)}})}})).apply(this,arguments)}function A(e,n,r,t,s){const l=e.portalItem,a={portalItem:l.clone(),layerId:t.id};null!=t.url&&(a.url=t.url);const u=new n(a);if("sourceJSON"in u&&(u.sourceJSON=s),"subtype-group"!==u.type&&"catalog"!==u.type&&(u.sublayerTitleMode="service-name"),"Feature Collection"===l.type){const o={origin:"portal-item",portal:l.portal||U.A.getDefault()};u.read(t,o);const p=r.showLegend;null!=p&&u.read({showLegend:p},o)}return u}function C(e,n,r){return v.apply(this,arguments)}function v(){return v=(0,c.A)(function*(e,n,r){if(!1===e.supportsData)return;const t=e.instance,s=t.portalItem;if(!s)return;let l=null;try{l=yield s.fetchData("json",r)}catch{}if(function Q(e){return"stream"!==e.type&&"layerId"in e}(t)){let a=null;const u=yield function X(e,n,r){return L.apply(this,arguments)}(s,l,n);if((l?.layers||l?.tables)&&u>0){if(null==t.layerId){const o=(0,y.iK)(t.type),p=o?(0,y.Ju)(l,o)[0]:(0,y.pJ)(l);p&&(t.layerId=p.id)}a=function z(e,n){const{layerId:r}=n,t=e.layers?.find(s=>s.id===r)||e.tables?.find(s=>s.id===r);return t&&function V(e,n){const r="layerType"in e&&e.layerType,{type:t}=n;return!("feature"===t&&r||"catalog"===t&&!r||"oriented-imagery"===t&&!r||"subtype-group"===t&&!r)}(t,n)?t:null}(l,t),a&&null!=l.showLegend&&(a.showLegend=l.showLegend)}return u>1&&"sublayerTitleMode"in t&&"service-name"!==t.sublayerTitleMode&&(t.sublayerTitleMode="item-title-and-service-name"),a}return l}),v.apply(this,arguments)}function L(){return(L=(0,c.A)(function*(e,n,r){if(n?.layers&&n?.tables)return(0,y.XH)(n);const t=(0,b.qg)(e.url);if(!t)return 1;const s=yield r.fetchServiceMetadata(t.url.path,{customParameters:(0,y.pJ)(n)?.customParameters}).catch(()=>null);return(n?.layers?.length??s?.layers?.length??0)+(n?.tables?.length??s?.tables?.length??0)})).apply(this,arguments)}function M(){return(M=(0,c.A)(function*(e,n){const{layersJSON:r}=yield(0,S.Q)(e,n);if(!r)return null;const t=[...r.layers,...r.tables];return s=>t.find(l=>l.id===s.id)})).apply(this,arguments)}function x(){return(x=(0,c.A)(function*(e,n){const{layers:r}=e;if(!r?.length)return;const t=new Set,s=[];for(const{layerType:u}of r){const o=u??"FeatureLayer";if(t.has(o))continue;t.add(o);const p=n[(0,y.K8)(o)];s.push(p())}const l=yield Promise.all(s),a=new Map;return Array.from(t).forEach((u,o)=>{a.set(u,l[o])}),({layerType:u})=>a.get(u??"FeatureLayer")})).apply(this,arguments)}}}]);