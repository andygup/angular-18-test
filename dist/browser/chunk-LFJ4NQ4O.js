import{b as L,e as A,f as P,g as q,h as H}from"./chunk-VOMQSOTD.js";import{a as R}from"./chunk-B5IFP6FP.js";import{E as $}from"./chunk-AKHHPLWL.js";import{c as V,k as F,n as J}from"./chunk-WOZZR3L4.js";import{a as O}from"./chunk-RU7UW4IO.js";import{a as j}from"./chunk-LP5GLSKB.js";import{a as C}from"./chunk-LTDZH3EN.js";import{a as M}from"./chunk-X7Z55FTO.js";import{a as _}from"./chunk-B66V4PSA.js";import{H as r,S as N}from"./chunk-RMOOROEO.js";import{S as g,v as E,w as z,z as T}from"./chunk-ZP7G4HN4.js";import{a}from"./chunk-W3WDPWBE.js";import{b as p,s as h}from"./chunk-3DV77WOO.js";import{a as I,b as B,g as d}from"./chunk-3T7TAUC2.js";var S,u=S=class extends N{constructor(e){super(e),this.description=null,this.label=null,this.minValue=null,this.maxValue=0,this.symbol=null}clone(){return new S({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,symbol:this.symbol?.clone()??null})}getMeshHash(){let e=JSON.stringify(this.symbol);return`${this.minValue}.${this.maxValue}.${e}`}};a([r({type:String,json:{write:!0}})],u.prototype,"description",void 0),a([r({type:String,json:{write:!0}})],u.prototype,"label",void 0),a([r({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],u.prototype,"minValue",void 0),a([r({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],u.prototype,"maxValue",void 0),a([r(q)],u.prototype,"symbol",void 0),u=S=a([g("esri.renderers.support.ClassBreakInfo")],u);var f=u;var w,G="log",x="percent-of-total",v="field",b=new _({esriNormalizeByLog:G,esriNormalizeByPercentOfTotal:x,esriNormalizeByField:v}),D=T(f),n=w=class extends A(L){constructor(e){super(e),this._compiledValueExpression={valueExpression:null,compiledFunction:null},this.backgroundFillSymbol=null,this.classBreakInfos=null,this.defaultLabel=null,this.defaultSymbol=null,this.field=null,this.isMaxInclusive=!0,this.legendOptions=null,this.normalizationField=null,this.normalizationTotal=null,this.type="class-breaks",this.valueExpression=null,this.valueExpressionTitle=null,this._set("classBreakInfos",[])}readClassBreakInfos(e,s,t){if(!Array.isArray(e))return;let i=s.minValue;return e.map(o=>{let l=new f;return l.read(o,t),l.minValue==null&&(l.minValue=i),l.maxValue==null&&(l.maxValue=l.minValue),i=l.maxValue,l})}writeClassBreakInfos(e,s,t,i){let o=e.map(l=>l.write({},i));this._areClassBreaksConsecutive()&&o.forEach(l=>delete l.classMinValue),s[t]=o}castField(e){return e==null?e:typeof e=="function"?(h.getLogger(this).error(".field: field must be a string value"),null):E(e)}get minValue(){return this.classBreakInfos&&this.classBreakInfos[0]&&this.classBreakInfos[0].minValue||0}get normalizationType(){let e=this._get("normalizationType"),s=!!this.normalizationField,t=this.normalizationTotal!=null;return s||t?(e=s&&v||t&&x||null,s&&t&&h.getLogger(this).warn("warning: both normalizationField and normalizationTotal are set!")):e!==v&&e!==x||(e=null),e}set normalizationType(e){this._set("normalizationType",e)}addClassBreakInfo(e,s,t){let i=null;i=typeof e=="number"?new f({minValue:e,maxValue:s,symbol:$(t)}):D(p(e)),this.classBreakInfos.push(i),this.classBreakInfos.length===1&&this.notifyChange("minValue")}removeClassBreakInfo(e,s){let t=this.classBreakInfos.length;for(let i=0;i<t;i++){let o=[this.classBreakInfos[i].minValue,this.classBreakInfos[i].maxValue];if(o[0]===e&&o[1]===s){this.classBreakInfos.splice(i,1);break}}}getBreakIndex(e,s){return this.valueExpression&&s?.arcade==null&&h.getLogger(this).warn(""),this.valueExpression?this._getBreakIndexForExpression(e,s):this._getBreakIndexForField(e)}getClassBreakInfo(e,s){return d(this,null,function*(){let t=s;this.valueExpression&&s?.arcade==null&&(t=B(I({},t),{arcade:yield V()}));let i=this.getBreakIndex(e,t);return i!==-1?this.classBreakInfos[i]:null})}getSymbol(e,s){if(this.valueExpression&&s?.arcade==null)return void h.getLogger(this).error("#getSymbol()","Please use getSymbolAsync if valueExpression is used");let t=this.getBreakIndex(e,s);return t>-1?this.classBreakInfos[t].symbol:this.defaultSymbol}getSymbolAsync(e,s){return d(this,null,function*(){let t=s;if(this.valueExpression&&s?.arcade==null){let o=yield V(),{arcadeUtils:l}=o;l.hasGeometryOperations(this.valueExpression)&&(yield l.enableGeometryOperations()),t=B(I({},t),{arcade:o})}let i=this.getBreakIndex(e,t);return i>-1?this.classBreakInfos[i].symbol:this.defaultSymbol})}getSymbols(){let e=[];return this.classBreakInfos.forEach(s=>{s.symbol&&e.push(s.symbol)}),this.defaultSymbol&&e.push(this.defaultSymbol),e}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce((e,s)=>e+s.getAttributeHash(),"")}getMeshHash(){let e=JSON.stringify(this.backgroundFillSymbol),s=JSON.stringify(this.defaultSymbol),t=`${this.normalizationField}.${this.normalizationType}.${this.normalizationTotal}`;return`${e}.${s}.${this.classBreakInfos.reduce((i,o)=>i+o.getMeshHash(),"")}.${t}.${this.field}.${this.valueExpression}`}get arcadeRequired(){return this.arcadeRequiredForVisualVariables||!!this.valueExpression}clone(){return new w({field:this.field,backgroundFillSymbol:this.backgroundFillSymbol?.clone(),defaultLabel:this.defaultLabel,defaultSymbol:this.defaultSymbol?.clone(),valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,classBreakInfos:p(this.classBreakInfos),isMaxInclusive:this.isMaxInclusive,normalizationField:this.normalizationField,normalizationTotal:this.normalizationTotal,normalizationType:this.normalizationType,visualVariables:p(this.visualVariables),legendOptions:p(this.legendOptions),authoringInfo:p(this.authoringInfo)})}collectRequiredFields(e,s){return d(this,null,function*(){let t=[this.collectVVRequiredFields(e,s),this.collectSymbolFields(e,s)];yield Promise.all(t)})}collectSymbolFields(e,s){return d(this,null,function*(){let t=[...this.getSymbols().map(i=>i.collectRequiredFields(e,s)),J(e,s,this.valueExpression)];F(e,s,this.field),F(e,s,this.normalizationField),yield Promise.all(t)})}_getBreakIndexForExpression(e,s){let{viewingMode:t,scale:i,spatialReference:o,arcade:l,timeZone:m}=s??{},{valueExpression:k}=this,y=this._compiledValueExpression.valueExpression===k?this._compiledValueExpression.compiledFunction:null,c=l.arcadeUtils;if(!y){let Z=c.createSyntaxTree(k);y=c.createFunction(Z),this._compiledValueExpression.compiledFunction=y}this._compiledValueExpression.valueExpression=k;let U=c.executeFunction(y,c.createExecContext(e,c.getViewInfo({viewingMode:t,scale:i,spatialReference:o}),m));return this._getBreakIndexfromInfos(U)}_getBreakIndexForField(e){let s=this.field,t=e.attributes,i=this.normalizationType,o=parseFloat(t[s]);if(i){let l=this.normalizationTotal,m=parseFloat(this.normalizationField?t[this.normalizationField]:void 0);if(i===G)o=Math.log(o)*Math.LOG10E;else if(i!==x||l==null||isNaN(l)){if(i===v&&!isNaN(m)){if(isNaN(o)||isNaN(m))return-1;o/=m}}else o=o/l*100}return this._getBreakIndexfromInfos(o)}_getBreakIndexfromInfos(e){let s=this.isMaxInclusive;if(e!=null&&typeof e=="number"&&!isNaN(e))for(let t=0;t<this.classBreakInfos.length;t++){let i=[this.classBreakInfos[t].minValue,this.classBreakInfos[t].maxValue];if(i[0]<=e&&(s?e<=i[1]:e<i[1]))return t}return-1}_areClassBreaksConsecutive(){let e=this.classBreakInfos,s=e.length;for(let t=1;t<s;t++)if(e[t-1].maxValue!==e[t].minValue)return!1;return!0}};a([r(H)],n.prototype,"backgroundFillSymbol",void 0),a([r({type:[f]})],n.prototype,"classBreakInfos",void 0),a([j("classBreakInfos")],n.prototype,"readClassBreakInfos",null),a([C("classBreakInfos")],n.prototype,"writeClassBreakInfos",null),a([r({type:String,json:{write:!0}})],n.prototype,"defaultLabel",void 0),a([r(P)],n.prototype,"defaultSymbol",void 0),a([r({type:String,json:{write:!0}})],n.prototype,"field",void 0),a([M("field")],n.prototype,"castField",null),a([r({type:Boolean})],n.prototype,"isMaxInclusive",void 0),a([r({type:R,json:{write:!0}})],n.prototype,"legendOptions",void 0),a([r({type:Number,readOnly:!0,value:null,json:{read:!1,write:{overridePolicy(){return this.classBreakInfos.length!==0&&this._areClassBreaksConsecutive()?{enabled:!0}:{enabled:!1}}}}})],n.prototype,"minValue",null),a([r({type:String,json:{write:!0}})],n.prototype,"normalizationField",void 0),a([r({type:Number,cast:e=>z(e),json:{write:!0}})],n.prototype,"normalizationTotal",void 0),a([r({type:b.apiValues,value:null,json:{type:b.jsonValues,read:b.read,write:b.write}})],n.prototype,"normalizationType",null),a([O({classBreaks:"class-breaks"})],n.prototype,"type",void 0),a([r({type:String,json:{write:!0}})],n.prototype,"valueExpression",void 0),a([r({type:String,json:{write:!0}})],n.prototype,"valueExpressionTitle",void 0),n=w=a([g("esri.renderers.ClassBreaksRenderer")],n);var Ve=n;export{f as a,Ve as b};
