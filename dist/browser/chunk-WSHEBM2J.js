import{a as m}from"./chunk-XDRSKFBJ.js";import{c as p}from"./chunk-AQ74ANSJ.js";import{a as h}from"./chunk-RU7UW4IO.js";import{b as R}from"./chunk-BNUHB4AP.js";import{a as C}from"./chunk-LP5GLSKB.js";import{a as g}from"./chunk-LTDZH3EN.js";import{a as N}from"./chunk-X7Z55FTO.js";import{a as S}from"./chunk-B66V4PSA.js";import{H as e,S as j}from"./chunk-RMOOROEO.js";import{S as n,w as K}from"./chunk-ZP7G4HN4.js";import{a as o}from"./chunk-W3WDPWBE.js";import{b as a}from"./chunk-3DV77WOO.js";import{a as D,b as M,g as B}from"./chunk-3T7TAUC2.js";var I=["none","underline","line-through"],X=["normal","italic","oblique"],E=["normal","lighter","bold","bolder"],G={type:Number,cast:t=>{let r=K(t);return r===0?1:R(r,.1,4)},nonNullable:!0},it=["left","right","center"],st=["baseline","top","middle","bottom"],Q={type:it,nonNullable:!0},U={type:st,nonNullable:!0},at=8;var P,u=P=class extends j{constructor(t){super(t),this.decoration="none",this.family="sans-serif",this.size=9,this.style="normal",this.weight="normal"}castSize(t){return p(t)}clone(){return new P({decoration:this.decoration,family:this.family,size:this.size,style:this.style,weight:this.weight})}hash(){return`${this.decoration}.${this.family}.${this.size}.${this.style}.${this.weight}`}};o([e({type:I,json:{default:"none",write:!0}})],u.prototype,"decoration",void 0),o([e({type:String,json:{write:!0}})],u.prototype,"family",void 0),o([e({type:Number,json:{write:{overridePolicy:(t,r,s)=>({enabled:!s||!s.textSymbol3D})}}})],u.prototype,"size",void 0),o([N("size")],u.prototype,"castSize",null),o([e({type:X,json:{default:"normal",write:!0}})],u.prototype,"style",void 0),o([e({type:E,json:{default:"normal",write:!0}})],u.prototype,"weight",void 0),u=P=o([n("esri.symbols.Font")],u);var A=u;var Y=new S({esriSMS:"simple-marker",esriPMS:"picture-marker",esriSLS:"simple-line",esriSFS:"simple-fill",esriPFS:"picture-fill",esriTS:"text",esriSHD:"shield-label-symbol",PointSymbol3D:"point-3d",LineSymbol3D:"line-3d",PolygonSymbol3D:"polygon-3d",WebStyleSymbol:"web-style",MeshSymbol3D:"mesh-3d",LabelSymbol3D:"label-3d",CIMSymbolReference:"cim"}),lt=0,x=class extends j{constructor(t){super(t),this.id="sym"+lt++,this.type=null,this.color=new m([0,0,0,1])}readColor(t){return t?.[0]!=null?[t[0],t[1],t[2],t[3]/255]:t}collectRequiredFields(t,r){return B(this,null,function*(){})}hash(){return JSON.stringify(this.toJSON())}clone(){}};o([e({type:Y.apiValues,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0,writer:Y.write}}})],x.prototype,"type",void 0),o([e({type:m,json:{write:{allowNull:!0}}})],x.prototype,"color",void 0),o([C("color")],x.prototype,"readColor",null),x=o([n("esri.symbols.Symbol")],x);var w=x;var z=class extends w{constructor(t){super(t),this.type="simple-line",this.width=.75}hash(){return`${this.type}.${this.width}`}};o([h({esriSLS:"simple-line"},{readOnly:!0})],z.prototype,"type",void 0),o([e({type:Number,cast:p,json:{write:!0}})],z.prototype,"width",void 0),z=o([n("esri.symbols.LineSymbol")],z);var Z=z;var It=["begin","end","begin-end"],tt=["arrow","circle","square","diamond","cross","x"];var O,y=O=class extends j{constructor(t){super(t),this.placement="begin-end",this.type="line-marker",this.style="arrow"}writeStyle(t,r,s,i){r[s]=i?.origin==="web-map"?"arrow":t}set color(t){this._set("color",t)}readColor(t){return t?.[0]!=null?[t[0],t[1],t[2],t[3]/255]:t}writeColor(t,r,s,i){i?.origin==="web-map"||(r[s]=t)}clone(){return new O({color:a(this.color),placement:this.placement,style:this.style})}hash(){return`${this.placement}.${this.color?.hash()}.${this.style}`}};o([e({type:["begin","end","begin-end"],json:{write:!0}})],y.prototype,"placement",void 0),o([h({"line-marker":"line-marker"},{readOnly:!0}),e({json:{origins:{"web-map":{write:!1}}}})],y.prototype,"type",void 0),o([e({type:tt})],y.prototype,"style",void 0),o([g("style")],y.prototype,"writeStyle",null),o([e({type:m,value:null,json:{write:{allowNull:!0}}})],y.prototype,"color",null),o([C("color")],y.prototype,"readColor",null),o([g("color")],y.prototype,"writeColor",null),y=O=o([n("esri.symbols.LineSymbolMarker")],y);var ot=y;var W,F=new S({esriSLSSolid:"solid",esriSLSDash:"dash",esriSLSDot:"dot",esriSLSDashDot:"dash-dot",esriSLSDashDotDot:"long-dash-dot-dot",esriSLSNull:"none",esriSLSShortDash:"short-dash",esriSLSShortDot:"short-dot",esriSLSShortDashDot:"short-dash-dot",esriSLSShortDashDotDot:"short-dash-dot-dot",esriSLSLongDash:"long-dash",esriSLSLongDashDot:"long-dash-dot"}),c=W=class extends Z{constructor(...t){super(...t),this.type="simple-line",this.style="solid",this.cap="round",this.join="round",this.marker=null,this.miterLimit=2}normalizeCtorArgs(t,r,s,i,f,q){if(t&&typeof t!="string")return t;let v={};return t!=null&&(v.style=t),r!=null&&(v.color=r),s!=null&&(v.width=p(s)),i!=null&&(v.cap=i),f!=null&&(v.join=f),q!=null&&(v.miterLimit=p(q)),v}clone(){return new W({color:a(this.color),style:this.style,width:this.width,cap:this.cap,join:this.join,miterLimit:this.miterLimit,marker:this.marker?.clone()})}hash(){return`${super.hash()}.${this.color?.hash()}.${this.style}.${this.cap}.${this.join}.${this.miterLimit}.${this.marker?.hash()}`}};o([h({esriSLS:"simple-line"},{readOnly:!0})],c.prototype,"type",void 0),o([e({type:F.apiValues,json:{read:F.read,write:F.write}})],c.prototype,"style",void 0),o([e({type:["butt","round","square"],json:{write:{overridePolicy:(t,r,s)=>({enabled:t!=="round"&&s?.origin==null})}}})],c.prototype,"cap",void 0),o([e({type:["miter","round","bevel"],json:{write:{overridePolicy:(t,r,s)=>({enabled:t!=="round"&&s?.origin==null})}}})],c.prototype,"join",void 0),o([e({types:{key:"type",base:null,defaultKeyValue:"line-marker",typeMap:{"line-marker":ot}},json:{write:!0,origins:{"web-scene":{write:!1}}}})],c.prototype,"marker",void 0),o([e({type:Number,json:{read:!1,write:!1}})],c.prototype,"miterLimit",void 0),c=W=o([n("esri.symbols.SimpleLineSymbol")],c);var $=c;var k=class extends w{constructor(t){super(t),this.outline=null,this.type=null}hash(){return`${this.type}.${this.outline?.hash()}`}};o([e({types:{key:"type",base:null,defaultKeyValue:"simple-line",typeMap:{"simple-line":$}},json:{default:null,write:!0}})],k.prototype,"outline",void 0),o([e({type:["simple-fill","picture-fill"],readOnly:!0})],k.prototype,"type",void 0),k=o([n("esri.symbols.FillSymbol")],k);var et=k;var _,H=new S({esriSFSSolid:"solid",esriSFSNull:"none",esriSFSHorizontal:"horizontal",esriSFSVertical:"vertical",esriSFSForwardDiagonal:"forward-diagonal",esriSFSBackwardDiagonal:"backward-diagonal",esriSFSCross:"cross",esriSFSDiagonalCross:"diagonal-cross"}),L=_=class extends et{constructor(...t){super(...t),this.color=new m([0,0,0,.25]),this.outline=new $,this.type="simple-fill",this.style="solid"}normalizeCtorArgs(t,r,s){if(t&&typeof t!="string")return t;let i={};return t&&(i.style=t),r&&(i.outline=r),s&&(i.color=s),i}clone(){return new _({color:a(this.color),outline:this.outline&&this.outline.clone(),style:this.style})}hash(){return`${super.hash()}${this.style}.${this.color&&this.color.hash()}`}};o([e()],L.prototype,"color",void 0),o([e()],L.prototype,"outline",void 0),o([h({esriSFS:"simple-fill"},{readOnly:!0})],L.prototype,"type",void 0),o([e({type:H.apiValues,json:{read:H.read,write:H.write}})],L.prototype,"style",void 0),L=_=o([n("esri.symbols.SimpleFillSymbol")],L);var Bo=L;var b=class extends w{constructor(t){super(t),this.angle=0,this.type=null,this.xoffset=0,this.yoffset=0,this.size=9}hash(){return`${this.type}.${this.angle}.${this.size}.${this.xoffset}.${this.yoffset}`}};o([e({type:Number,json:{read:t=>t&&-1*t,write:(t,r)=>r.angle=t&&-1*t}})],b.prototype,"angle",void 0),o([e({type:["simple-marker","picture-marker"],readOnly:!0})],b.prototype,"type",void 0),o([e({type:Number,cast:p,json:{write:!0}})],b.prototype,"xoffset",void 0),o([e({type:Number,cast:p,json:{write:!0}})],b.prototype,"yoffset",void 0),o([e({type:Number,cast:t=>t==="auto"?t:p(t),json:{write:!0}})],b.prototype,"size",void 0),b=o([n("esri.symbols.MarkerSymbol")],b);var rt=b;var T,J=new S({esriSMSCircle:"circle",esriSMSSquare:"square",esriSMSCross:"cross",esriSMSX:"x",esriSMSDiamond:"diamond",esriSMSTriangle:"triangle",esriSMSPath:"path"}),d=T=class extends rt{constructor(...t){super(...t),this.color=new m([255,255,255,.25]),this.type="simple-marker",this.size=12,this.style="circle",this.outline=new $}normalizeCtorArgs(t,r,s,i){if(t&&typeof t!="string")return t;let f={};return t&&(f.style=t),r!=null&&(f.size=p(r)),s&&(f.outline=s),i&&(f.color=i),f}writeColor(t,r){t&&this.style!=="x"&&this.style!=="cross"&&(r.color=t.toJSON()),t===null&&(r.color=null)}set path(t){this.style="path",this._set("path",t)}clone(){return new T({angle:this.angle,color:a(this.color),outline:this.outline&&this.outline.clone(),path:this.path,size:this.size,style:this.style,xoffset:this.xoffset,yoffset:this.yoffset})}hash(){return`${super.hash()}.${this.color&&this.color.hash()}.${this.path}.${this.style}.${this.outline?.hash()}`}};o([e()],d.prototype,"color",void 0),o([g("color")],d.prototype,"writeColor",null),o([h({esriSMS:"simple-marker"},{readOnly:!0})],d.prototype,"type",void 0),o([e()],d.prototype,"size",void 0),o([e({type:J.apiValues,json:{read:J.read,write:J.write}})],d.prototype,"style",void 0),o([e({type:String,json:{write:!0}})],d.prototype,"path",null),o([e({types:{key:"type",base:null,defaultKeyValue:"simple-line",typeMap:{"simple-line":$}},json:{default:null,write:!0}})],d.prototype,"outline",void 0),d=T=o([n("esri.symbols.SimpleMarkerSymbol")],d);var ce=d;var V,l=V=class extends w{constructor(...t){super(...t),this.backgroundColor=null,this.borderLineColor=null,this.borderLineSize=null,this.font=new A,this.horizontalAlignment="center",this.kerning=!0,this.haloColor=null,this.haloSize=null,this.rightToLeft=null,this.rotated=!1,this.text="",this.type="text",this.verticalAlignment="baseline",this.xoffset=0,this.yoffset=0,this.angle=0,this.width=null,this.lineWidth=192,this.lineHeight=1}normalizeCtorArgs(t,r,s){if(t&&typeof t!="string")return t;let i={};return t&&(i.text=t),r&&(i.font=r),s&&(i.color=s),i}writeLineWidth(t,r,s,i){i&&typeof i!="string"?i.origin:r[s]=t}castLineWidth(t){return p(t)}writeLineHeight(t,r,s,i){i&&typeof i!="string"?i.origin:r[s]=t}clone(){return new V({angle:this.angle,backgroundColor:a(this.backgroundColor),borderLineColor:a(this.borderLineColor),borderLineSize:this.borderLineSize,color:a(this.color),font:this.font&&this.font.clone(),haloColor:a(this.haloColor),haloSize:this.haloSize,horizontalAlignment:this.horizontalAlignment,kerning:this.kerning,lineHeight:this.lineHeight,lineWidth:this.lineWidth,rightToLeft:this.rightToLeft,rotated:this.rotated,text:this.text,verticalAlignment:this.verticalAlignment,width:this.width,xoffset:this.xoffset,yoffset:this.yoffset})}hash(){return`${this.backgroundColor?.hash()}.${this.borderLineColor}.${this.borderLineSize}.${this.color?.hash()}.${this.font&&this.font.hash()}.${this.haloColor?.hash()}.${this.haloSize}.${this.horizontalAlignment}.${this.kerning}.${this.rightToLeft}.${this.rotated}.${this.text}.${this.verticalAlignment}.${this.width}.${this.xoffset}.${this.yoffset}.${this.lineHeight}.${this.lineWidth}.${this.angle}`}};o([e({type:m,json:{write:!0}})],l.prototype,"backgroundColor",void 0),o([e({type:m,json:{write:!0}})],l.prototype,"borderLineColor",void 0),o([e({type:Number,json:{write:!0},cast:p})],l.prototype,"borderLineSize",void 0),o([e({type:A,json:{write:!0}})],l.prototype,"font",void 0),o([e(M(D({},Q),{json:{write:!0}}))],l.prototype,"horizontalAlignment",void 0),o([e({type:Boolean,json:{write:!0}})],l.prototype,"kerning",void 0),o([e({type:m,json:{write:!0}})],l.prototype,"haloColor",void 0),o([e({type:Number,cast:p,json:{write:!0}})],l.prototype,"haloSize",void 0),o([e({type:Boolean,json:{write:!0}})],l.prototype,"rightToLeft",void 0),o([e({type:Boolean,json:{write:!0}})],l.prototype,"rotated",void 0),o([e({type:String,json:{write:!0}})],l.prototype,"text",void 0),o([h({esriTS:"text"},{readOnly:!0})],l.prototype,"type",void 0),o([e(M(D({},U),{json:{write:!0}}))],l.prototype,"verticalAlignment",void 0),o([e({type:Number,cast:p,json:{write:!0}})],l.prototype,"xoffset",void 0),o([e({type:Number,cast:p,json:{write:!0}})],l.prototype,"yoffset",void 0),o([e({type:Number,json:{read:t=>t&&-1*t,write:(t,r)=>r.angle=t&&-1*t}})],l.prototype,"angle",void 0),o([e({type:Number,json:{write:!0}})],l.prototype,"width",void 0),o([e({type:Number})],l.prototype,"lineWidth",void 0),o([g("lineWidth")],l.prototype,"writeLineWidth",null),o([N("lineWidth")],l.prototype,"castLineWidth",null),o([e(G)],l.prototype,"lineHeight",void 0),o([g("lineHeight")],l.prototype,"writeLineHeight",null),l=V=o([n("esri.symbols.TextSymbol")],l);var De=l;export{G as a,Q as b,U as c,at as d,A as e,w as f,It as g,tt as h,$ as i,et as j,Bo as k,rt as l,ce as m,De as n};