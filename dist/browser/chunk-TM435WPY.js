import{a as x,b as D}from"./chunk-ZVQ6WPUX.js";import{b as O}from"./chunk-RZU6EEB3.js";import{a as M}from"./chunk-7Q7N656Y.js";import{b as j,e as I}from"./chunk-ZSMLWXCC.js";import{a as ee,c as A,d as G}from"./chunk-SYNRDAMR.js";import{w as C}from"./chunk-FOMR7EMA.js";import{a as w}from"./chunk-UAPVW6JM.js";import{a as oe,d as se}from"./chunk-VOMQSOTD.js";import{a as z}from"./chunk-VYW7XM4C.js";import{n as T}from"./chunk-67EKH3Q4.js";import{y as ie}from"./chunk-AKHHPLWL.js";import{m as te}from"./chunk-WSHEBM2J.js";import{a as re}from"./chunk-63TUJPJR.js";import{a as Y,f as Z}from"./chunk-6A4M7X3R.js";import{c as f}from"./chunk-AQ74ANSJ.js";import{a as L}from"./chunk-RU7UW4IO.js";import{a as g}from"./chunk-LP5GLSKB.js";import{a as R}from"./chunk-LTDZH3EN.js";import{H as n,S as v}from"./chunk-RMOOROEO.js";import{S as d}from"./chunk-ZP7G4HN4.js";import{a as o}from"./chunk-W3WDPWBE.js";import{b as u,i as F,s as W,u as X}from"./chunk-3DV77WOO.js";import{a as k}from"./chunk-NJG4JJ4L.js";var S=class extends re(v){constructor(t){super(t),this.expression=null,this.title=null,this.returnType=null}};o([n({type:String,json:{write:!0}})],S.prototype,"expression",void 0),o([n({type:String,json:{write:!0}})],S.prototype,"title",void 0),o([n({type:String,json:{write:!0}})],S.prototype,"returnType",void 0),S=o([d("esri.layers.support.ExpressionInfo")],S);var _=S;var q,y=q=class extends v{constructor(t){super(t),this.isAutoGenerated=!1,this.name=null,this.alias=null,this.onStatisticField=null,this.onStatisticExpression=null,this.statisticType=null}clone(){return new q({name:this.name,alias:this.alias,isAutoGenerated:this.isAutoGenerated,onStatisticExpression:u(this.onStatisticExpression),onStatisticField:this.onStatisticField,statisticType:this.statisticType})}};o([n({type:Boolean,json:{write:!0}})],y.prototype,"isAutoGenerated",void 0),o([n({type:String,json:{write:!0}})],y.prototype,"name",void 0),o([n({type:String,json:{write:!0}})],y.prototype,"alias",void 0),o([n({type:String,json:{write:!0}})],y.prototype,"onStatisticField",void 0),o([n({type:_,json:{write:!0}})],y.prototype,"onStatisticExpression",void 0),o([n({type:String,json:{write:!0}})],y.prototype,"statisticType",void 0),y=q=o([d("esri.layers.support.AggregateField")],y);var m=y;var B,p=B=class extends x{constructor(t){super(t),this.type="binning",this.binType="geohash",this.fixedBinLevel=null,this.labelingInfo=null,this.labelsVisible=!0,this.maxScale=0,this.popupEnabled=!0,this.popupTemplate=null,this.size=f("12px"),this.fields=[],this.renderer=null}writeFields(t,s,e){let r=t.filter(i=>i.statisticType!=="avg_angle").map(i=>i.toJSON());F(e,r,s)}readRenderer(t,s,e){let r=s.drawingInfo?.renderer;return r?I(r,s,e)??void 0:C(s,e)}clone(){return new B({fields:u(this.fields),fixedBinLevel:this.fixedBinLevel,labelingInfo:u(this.labelingInfo),labelsVisible:this.labelsVisible,maxScale:this.maxScale,popupEnabled:this.popupEnabled,popupTemplate:u(this.popupTemplate),renderer:u(this.renderer),binType:u(this.binType),size:this.size})}};o([L({binning:"binning"})],p.prototype,"type",void 0),o([L({geohash:"geohash",square:"square"}),n({type:["geohash","square"]})],p.prototype,"binType",void 0),o([n({type:Number,json:{write:!0}})],p.prototype,"fixedBinLevel",void 0),o([n({type:[M],json:{read:{source:"drawingInfo.labelingInfo"},write:{target:"drawingInfo.labelingInfo"}}})],p.prototype,"labelingInfo",void 0),o([n(G)],p.prototype,"labelsVisible",void 0),o([n({type:Number,json:{default:0,name:"visibilityInfo.maxScale"}})],p.prototype,"maxScale",void 0),o([n(A)],p.prototype,"popupEnabled",void 0),o([n({type:T,json:{name:"popupInfo",write:!0}})],p.prototype,"popupTemplate",void 0),o([n({type:Number,cast:t=>t==="auto"?t:f(t)})],p.prototype,"size",void 0),o([n({type:[m],json:{write:!0}})],p.prototype,"fields",void 0),o([R("fields")],p.prototype,"writeFields",null),o([n({types:j,json:{write:{target:"drawingInfo.renderer"}}})],p.prototype,"renderer",void 0),o([g("renderer",["drawingInfo.renderer"])],p.prototype,"readRenderer",null),p=B=o([d("esri.layers.support.FeatureReductionBinning")],p);var J=p;var P;function ne(t){return t.type==="simple"&&!t.visualVariables?.length}var l=P=class extends v{constructor(t){super(t),this.type="cluster",this.clusterRadius=f("80px"),this.clusterMinSize=f("12px"),this.clusterMaxSize=f("50px"),this.maxScale=0,this.popupEnabled=!0,this.popupTemplate=null,this.renderer=null,this.symbol=null,this.labelingInfo=null,this.labelsVisible=!0,this.fields=[]}readRenderer(t,s,e){let r=s.drawingInfo?.renderer;return r?.authoringInfo?.isAutoGenerated?null:r?ne(r)?null:I(r,s,e)??void 0:C(s,e)}readSymbol(t,s,e){let r=s.drawingInfo?.renderer;return r?.authoringInfo?.isAutoGenerated?null:r&&ne(r)?I(r,s,e)?.symbol:null}writeSymbol(t,s,e,r){let i=this.renderer?.authoringInfo?.isAutoGenerated;if(!this.renderer||i){let a=new w({symbol:t});s.drawingInfo={renderer:a.write({},r)}}}writeFields(t,s,e){let r=t.filter(i=>i.statisticType!=="avg_angle").map(i=>i.toJSON());F(e,r,s)}readFields(t,s,e){return t.filter(r=>!r.isAutoGenerated).map(r=>m.fromJSON(r))}clone(){return new P({clusterRadius:this.clusterRadius,clusterMinSize:this.clusterMinSize,clusterMaxSize:this.clusterMaxSize,labelingInfo:u(this.labelingInfo),labelsVisible:this.labelsVisible,fields:u(this.fields),maxScale:this.maxScale,renderer:u(this.renderer),symbol:u(this.symbol),popupEnabled:this.popupEnabled,popupTemplate:u(this.popupTemplate)})}};o([n({type:["cluster"],readOnly:!0,json:{write:!0}})],l.prototype,"type",void 0),o([n({type:Number,cast:t=>t==="auto"?t:f(t),json:{write:!0}})],l.prototype,"clusterRadius",void 0),o([n({type:Number,cast:f,json:{write:!0}})],l.prototype,"clusterMinSize",void 0),o([n({type:Number,cast:f,json:{write:!0}})],l.prototype,"clusterMaxSize",void 0),o([n({type:Number,json:{default:0,name:"visibilityInfo.maxScale"}})],l.prototype,"maxScale",void 0),o([n(A)],l.prototype,"popupEnabled",void 0),o([n({type:T,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],l.prototype,"popupTemplate",void 0),o([n({types:j,json:{write:{target:"drawingInfo.renderer"}}})],l.prototype,"renderer",void 0),o([g("renderer",["drawingInfo.renderer"])],l.prototype,"readRenderer",null),o([n({types:ie})],l.prototype,"symbol",void 0),o([g("symbol",["drawingInfo.renderer"])],l.prototype,"readSymbol",null),o([R("symbol")],l.prototype,"writeSymbol",null),o([n({type:[M],json:{read:{source:"drawingInfo.labelingInfo"},write:{target:"drawingInfo.labelingInfo"}}})],l.prototype,"labelingInfo",void 0),o([n(G)],l.prototype,"labelsVisible",void 0),o([n({type:[m],json:{write:!0}})],l.prototype,"fields",void 0),o([R("fields")],l.prototype,"writeFields",null),o([g("fields")],l.prototype,"readFields",null),l=P=o([d("esri.layers.support.FeatureReductionCluster")],l);var U=l;var ae={key:"type",base:x,typeMap:{cluster:U,binning:J}},le={types:{key:"type",base:x,typeMap:{selection:D,cluster:U,binning:J}},json:{name:"layerDefinition.featureReduction",write:{allowNull:!0},origins:{"web-map":{types:ae},"portal-item":{types:ae},"web-scene":{types:{key:"type",base:x,typeMap:{selection:D}},name:"layerDefinition.featureReduction",write:{layerContainerTypes:ee}}}}};var me=()=>W.getLogger("esri.views.2d.layers.support.clusterUtils");k.add("esri-cluster-arcade-enabled",!0);var de=k("esri-cluster-arcade-enabled"),fe=new Set(["simple-line","simple-fill","picture-fill"]);function H(t,s){let e=s.clone();if(!ce(e))return e;if(s.getSymbols().some(r=>fe.has(r.type))&&(e=new w({symbol:new te})),e.authoringInfo||(e.authoringInfo=new oe),e.authoringInfo.isAutoGenerated=!0,"visualVariables"in e){let r=(e.visualVariables||[]).filter(i=>i.valueExpression!=="$view.scale");r.forEach(i=>{i.type==="rotation"?i.field?i.field=b(t,i.field,"avg_angle","number"):i.valueExpression&&(i.field=E(t,i.valueExpression,"avg_angle","number"),i.valueExpression=null):i.normalizationField?(i.field=b(t,i.field,"avg_norm","number",i.normalizationField),i.normalizationField=null):i.field?i.field=b(t,i.field,"avg","number"):i.valueExpression&&(i.field=E(t,i.valueExpression,"avg","number"),i.valueExpression=null)}),e.visualVariables=r}switch(e.type){case"simple":break;case"pie-chart":for(let r of e.attributes)r.field?r.field=b(t,r.field,"sum","number"):r.valueExpression&&(r.field=E(t,r.valueExpression,"sum","number"),r.valueExpression=null);break;case"unique-value":e.field?e.field=b(t,e.field,"mode","string"):e.valueExpression&&(e.field=E(t,e.valueExpression,"mode","string"),e.valueExpression=null);break;case"class-breaks":e.normalizationField?(e.field=b(t,e.field,"avg_norm","number",e.normalizationField),e.normalizationField=null):e.field?e.field=b(t,e.field,"avg","number"):e.valueExpression&&(e.field=E(t,e.valueExpression,"avg","number"),e.valueExpression=null)}return e}var ce=t=>{let s=e=>me().error(new X("Unsupported-renderer",e,{renderer:t}));if(!t)return!1;switch(t.type){case"unique-value":if(t.field2||t.field3)return s("FeatureReductionCluster does not support multi-field UniqueValueRenderers"),!1;break;case"class-breaks":if(t.normalizationField){let e=t.normalizationType;if(e!=="field")return s(`FeatureReductionCluster does not support a normalizationType of ${e}`),!1}break;case"simple":case"pie-chart":break;default:return s(`FeatureReductionCluster does not support renderers of type ${t.type}`),!1}if(!de){if("valueExpression"in t&&t.valueExpression)return s("FeatureReductionCluster does not currently support renderer.valueExpression. Support will be added in a future release"),!1;if(("visualVariables"in t&&t.visualVariables||[]).some(e=>!(!("valueExpression"in e)||!e.valueExpression)))return s("FeatureReductionCluster does not currently support visualVariables with a valueExpression. Support will be added in a future release"),!1}return!0};function ye(t,s,e){switch(t){case"sum":return`cluster_sum_${s}`;case"avg":case"avg_angle":return`cluster_avg_${s}`;case"mode":return`cluster_type_${s}`;case"avg_norm":{let r=e,i="field",a=s.toLowerCase()+",norm:"+i+","+r.toLowerCase();return"cluster_avg_"+O(a)}}}function E(t,s,e,r){let i=O(s),a=e==="mode"?`cluster_type_${i}`:e==="sum"?`cluster_sum_${i}`:`cluster_avg_${i}`;return t.some(c=>c.name===a)||t.push(new m({name:a,isAutoGenerated:!0,onStatisticExpression:new _({expression:s,returnType:r}),statisticType:e})),a}function b(t,s,e,r,i){if(s==="cluster_count"||t.some(c=>c.name===s))return s;let a=ye(e,s,i);return t.some(c=>c.name===a)||(e==="avg_norm"?t.push(new m({name:a,isAutoGenerated:!0,onStatisticExpression:new _({expression:`$feature.${s} / $feature.${i}`,returnType:r}),statisticType:"avg"})):t.push(new m({name:a,isAutoGenerated:!0,onStatisticField:s,statisticType:e}))),a}var Ct=t=>{let s=class extends t{constructor(...e){super(...e),this.addHandles(Y(()=>this.renderer,()=>{if(this.featureReduction){let r=this._normalizeFeatureReduction(this.featureReduction);this._set("featureReduction",r)}},Z))}set featureReduction(e){let r=this._normalizeFeatureReduction(e);this._set("featureReduction",r)}set renderer(e){}_withClusterVariable(e,r,i){let a=e.clone();return"visualVariables"in a&&(a.visualVariables||(a.visualVariables=[]),a.visualVariables.some(c=>c.type==="size")||a.visualVariables.push(new se({field:"cluster_count",stops:[new z({value:1}),new z({useMinValue:!0,size:r}),new z({useMaxValue:!0,size:i})]}))),a}_normalizeFeatureReduction(e){if(e?.type!=="cluster")return e;let r=e.clone(),i=[new m({name:"cluster_count",isAutoGenerated:!0,statisticType:"count"})],a=(r.fields??[]).filter(h=>!h.isAutoGenerated),c=e.renderer&&!e.renderer.authoringInfo?.isAutoGenerated,{clusterMinSize:N,clusterMaxSize:$}=r;if(c){r.fields=[...i,...a];let h=this._withClusterVariable(r.renderer,N,$);return r.effectiveFeatureRenderer=h,r.effectiveClusterRenderer=h,r}if(e.symbol){if(r.fields=[...i,...a],r.renderer=null,!this.renderer)return r.effectiveFeatureRenderer=null,r.effectiveClusterRenderer=null,r;let h=H(i,this.renderer),V=this._withClusterVariable(h,N,$),pe="visualVariables"in V&&V.visualVariables?V.visualVariables:[],ue=new w({symbol:e.symbol,visualVariables:pe});return r.fields=[...i,...a],r.effectiveFeatureRenderer=V,r.effectiveClusterRenderer=ue,r}if(!this.renderer)return e;let K=H(i,this.renderer);r.fields=[...i,...a],r.renderer=K;let Q=this._withClusterVariable(K,N,$);return r.effectiveFeatureRenderer=Q,r.effectiveClusterRenderer=Q,r}};return o([n(le)],s.prototype,"featureReduction",null),s=o([d("esri.layers.mixins.FeatureReductionLayer")],s),s};export{le as a,Ct as b};
