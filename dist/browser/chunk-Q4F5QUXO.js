import{b}from"./chunk-SLOQYZWS.js";import{a as B}from"./chunk-ASQCBKGS.js";import{a as A}from"./chunk-KM4AMTZA.js";import{c as z}from"./chunk-6ZXTJQND.js";import{a as q}from"./chunk-ME7KOLYX.js";import{a as N}from"./chunk-DGXL7ZQL.js";import{a as V}from"./chunk-VSMVTOQ2.js";import{a as E}from"./chunk-O3JFLEEW.js";import{a as l,b as S}from"./chunk-54B74EIH.js";import{j as D,t as T}from"./chunk-UHTPPTOJ.js";import{a as g}from"./chunk-LP5GLSKB.js";import{a as O,b as c}from"./chunk-LTDZH3EN.js";import{D as U,I as W,_ as w,d,r as M}from"./chunk-AANS6QE5.js";import{H as o,S as I}from"./chunk-RMOOROEO.js";import{S as h}from"./chunk-ZP7G4HN4.js";import{a as r}from"./chunk-W3WDPWBE.js";import{b as v,n as P,u as x}from"./chunk-3DV77WOO.js";import{a as f,g as L}from"./chunk-3T7TAUC2.js";var R,n=R=class extends I{constructor(e){super(e)}clone(){return new R({customLayerParameters:v(this.customLayerParameters),customParameters:v(this.customParameters),layerIdentifier:this.layerIdentifier,tileMatrixSet:this.tileMatrixSet,url:this.url})}};r([o({json:{type:Object,write:!0}})],n.prototype,"customLayerParameters",void 0),r([o({json:{type:Object,write:!0}})],n.prototype,"customParameters",void 0),r([o({type:String,json:{write:!0}})],n.prototype,"layerIdentifier",void 0),r([o({type:String,json:{write:!0}})],n.prototype,"tileMatrixSet",void 0),r([o({type:String,json:{write:!0}})],n.prototype,"url",void 0),n=R=r([h("esri.layers.support.WMTSLayerInfo")],n);var j,i=j=class extends z(A(q(N(B(E(V)))))){constructor(...e){super(...e),this.copyright="",this.fullExtent=new T(-20037508342787e-6,-2003750834278e-5,2003750834278e-5,20037508342787e-6,c.WebMercator),this.legendEnabled=!1,this.isReference=null,this.popupEnabled=!1,this.spatialReference=c.WebMercator,this.subDomains=null,this.tileInfo=new S({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new D({x:-20037508342787e-6,y:20037508342787e-6,spatialReference:c.WebMercator}),spatialReference:c.WebMercator,lods:[new l({level:0,scale:591657527591555e-6,resolution:156543.033928}),new l({level:1,scale:295828763795777e-6,resolution:78271.5169639999}),new l({level:2,scale:147914381897889e-6,resolution:39135.7584820001}),new l({level:3,scale:73957190948944e-6,resolution:19567.8792409999}),new l({level:4,scale:36978595474472e-6,resolution:9783.93962049996}),new l({level:5,scale:18489297737236e-6,resolution:4891.96981024998}),new l({level:6,scale:9244648868618e-6,resolution:2445.98490512499}),new l({level:7,scale:4622324434309e-6,resolution:1222.99245256249}),new l({level:8,scale:2311162217155e-6,resolution:611.49622628138}),new l({level:9,scale:1155581108577e-6,resolution:305.748113140558}),new l({level:10,scale:577790.554289,resolution:152.874056570411}),new l({level:11,scale:288895.277144,resolution:76.4370282850732}),new l({level:12,scale:144447.638572,resolution:38.2185141425366}),new l({level:13,scale:72223.819286,resolution:19.1092570712683}),new l({level:14,scale:36111.909643,resolution:9.55462853563415}),new l({level:15,scale:18055.954822,resolution:4.77731426794937}),new l({level:16,scale:9027.977411,resolution:2.38865713397468}),new l({level:17,scale:4513.988705,resolution:1.19432856685505}),new l({level:18,scale:2256.994353,resolution:.597164283559817}),new l({level:19,scale:1128.497176,resolution:.298582141647617}),new l({level:20,scale:564.248588,resolution:.14929107082380833}),new l({level:21,scale:282.124294,resolution:.07464553541190416}),new l({level:22,scale:141.062147,resolution:.03732276770595208}),new l({level:23,scale:70.5310735,resolution:.01866138385297604})]}),this.type="web-tile",this.urlTemplate=null,this.wmtsInfo=null}normalizeCtorArgs(e,t){return typeof e=="string"?f({urlTemplate:e},t):e}load(e){let t=this.loadFromPortal({supportedTypes:["WMTS"]},e).then(()=>{let s="";if(this.urlTemplate)if(this.spatialReference.equals(this.tileInfo.spatialReference)){let a=new d(this.urlTemplate);!(this.subDomains&&this.subDomains.length>0)&&a.authority?.includes("{subDomain}")&&(s="is missing 'subDomains' property")}else s="spatialReference must match tileInfo.spatialReference";else s="is missing the required 'urlTemplate' property value";if(s)throw new x("web-tile-layer:load",`WebTileLayer (title: '${this.title}', id: '${this.id}') ${s}`)});return this.addResolvingPromise(t),Promise.resolve(this)}get levelValues(){let e=[];if(!this.tileInfo)return null;for(let t of this.tileInfo.lods)e[t.level]=t.levelValue||t.level;return e}readSpatialReference(e,t){return e||c.fromJSON(t.fullExtent?.spatialReference)}get tileServers(){if(!this.urlTemplate)return null;let e=[],{urlTemplate:t,subDomains:s}=this,a=new d(t),p=a.scheme?a.scheme+"://":"//",y=p+a.authority+"/",m=a.authority;if(m?.includes("{subDomain}")){if(s&&s.length>0&&m.split(".").length>1)for(let u of s)e.push(p+m.replaceAll(/\{subDomain\}/gi,u)+"/")}else e.push(y);return e.map(W)}get urlPath(){if(!this.urlTemplate)return null;let e=this.urlTemplate,t=new d(e),s=(t.scheme?t.scheme+"://":"//")+t.authority+"/";return e.substring(s.length)}readUrlTemplate(e,t){return e||t.templateUrl}writeUrlTemplate(e,t){U(e)&&(e="https:"+e),e&&(e=e.replaceAll(/\{z\}/gi,"{level}").replaceAll(/\{x\}/gi,"{col}").replaceAll(/\{y\}/gi,"{row}"),e=M(e)),t.templateUrl=e}fetchTile(e,t,s,a={}){let{signal:p}=a,y=this.getTileUrl(e,t,s),m={responseType:"image",signal:p,query:f({},this.refreshParameters)};return w(y,m).then(u=>u.data)}fetchImageBitmapTile(p,y,m){return L(this,arguments,function*(e,t,s,a={}){let{signal:u}=a;if(this.fetchTile!==j.prototype.fetchTile){let C=yield this.fetchTile(e,t,s,a);return b(C,e,t,s,u)}let J=this.getTileUrl(e,t,s),$={responseType:"blob",signal:u,query:f({},this.refreshParameters)},{data:_}=yield w(J,$);return b(_,e,t,s,u)})}getTileUrl(e,t,s){let{levelValues:a,tileServers:p,urlPath:y}=this;if(!a||!p||!y)return"";let m=a[e];return p[t%p.length]+P(y,{level:m,z:m,col:s,x:s,row:t,y:t})}};r([o({type:String,value:"",json:{write:!0}})],i.prototype,"copyright",void 0),r([o({type:T,json:{write:!0},nonNullable:!0})],i.prototype,"fullExtent",void 0),r([o({readOnly:!0,json:{read:!1,write:!1}})],i.prototype,"legendEnabled",void 0),r([o({type:["show","hide"]})],i.prototype,"listMode",void 0),r([o({json:{read:!0,write:!0}})],i.prototype,"blendMode",void 0),r([o()],i.prototype,"levelValues",null),r([o({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],i.prototype,"isReference",void 0),r([o({type:["WebTiledLayer"],value:"WebTiledLayer"})],i.prototype,"operationalLayerType",void 0),r([o({readOnly:!0,json:{read:!1,write:!1}})],i.prototype,"popupEnabled",void 0),r([o({type:c})],i.prototype,"spatialReference",void 0),r([g("spatialReference",["spatialReference","fullExtent.spatialReference"])],i.prototype,"readSpatialReference",null),r([o({type:[String],json:{write:!0}})],i.prototype,"subDomains",void 0),r([o({type:S,json:{write:!0}})],i.prototype,"tileInfo",void 0),r([o({readOnly:!0})],i.prototype,"tileServers",null),r([o({json:{read:!1}})],i.prototype,"type",void 0),r([o()],i.prototype,"urlPath",null),r([o({type:String,json:{origins:{"portal-item":{read:{source:"url"}}}}})],i.prototype,"urlTemplate",void 0),r([g("urlTemplate",["urlTemplate","templateUrl"])],i.prototype,"readUrlTemplate",null),r([O("urlTemplate",{templateUrl:{type:String}})],i.prototype,"writeUrlTemplate",null),r([o({type:n,json:{write:!0}})],i.prototype,"wmtsInfo",void 0),i=j=r([h("esri.layers.WebTileLayer")],i);var xe=i;export{n as a,xe as b};
