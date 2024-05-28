import{a as A}from"./chunk-V2JYXY4D.js";import{a as _}from"./chunk-7LRMKXZV.js";import{d as W,j as w}from"./chunk-UHTPPTOJ.js";import{a as j}from"./chunk-LP5GLSKB.js";import{a as M,b as S}from"./chunk-LTDZH3EN.js";import{B as G,U as I,n as P,o as N,q as F}from"./chunk-3SBMUUA6.js";import{a as L}from"./chunk-B66V4PSA.js";import{H as n,S as R}from"./chunk-RMOOROEO.js";import{H as y,S as z}from"./chunk-ZP7G4HN4.js";import{a as l}from"./chunk-W3WDPWBE.js";import{a as T}from"./chunk-3T7TAUC2.js";var E,h=E=class extends R{constructor(e){super(e),this.cols=null,this.level=0,this.levelValue=null,this.origin=null,this.resolution=0,this.rows=null,this.scale=0}clone(){return new E({cols:this.cols,level:this.level,levelValue:this.levelValue,resolution:this.resolution,rows:this.rows,scale:this.scale})}};l([n({json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],h.prototype,"cols",void 0),l([n({type:y,json:{write:!0}})],h.prototype,"level",void 0),l([n({type:String,json:{write:!0}})],h.prototype,"levelValue",void 0),l([n({json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],h.prototype,"origin",void 0),l([n({type:Number,json:{write:!0}})],h.prototype,"resolution",void 0),l([n({json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],h.prototype,"rows",void 0),l([n({type:Number,json:{write:!0}})],h.prototype,"scale",void 0),h=E=l([z("esri.layers.support.LOD")],h);var m=h;var d,D=new L({PNG:"png",PNG8:"png8",PNG24:"png24",PNG32:"png32",JPEG:"jpg",JPG:"jpg",DIB:"dib",TIFF:"tiff",EMF:"emf",PS:"ps",PDF:"pdf",GIF:"gif",SVG:"svg",SVGZ:"svgz",Mixed:"mixed",MIXED:"mixed",LERC:"lerc",LERC2D:"lerc2d",RAW:"raw",pbf:"pbf"}),a=d=class extends R{static create(e={}){let{resolutionFactor:t=1,scales:o,size:r=256,spatialReference:i=S.WebMercator,numLODs:s=24}=e;if(!G(i)){let c=[];if(o)for(let u=0;u<o.length;u++){let f=o[u];c.push(new m({level:u,scale:f,resolution:f}))}else{let u=5e-4;for(let f=s-1;f>=0;f--)c.unshift(new m({level:f,scale:u,resolution:u})),u*=2}return new d({dpi:96,lods:c,origin:new w(0,0,i),size:[r,r],spatialReference:i})}let p=N(i),v=e.origin?new w({x:e.origin.x,y:e.origin.y,spatialReference:i}):new w(p?{x:p.origin[0],y:p.origin[1],spatialReference:i}:{x:0,y:0,spatialReference:i}),x=96,g=1/(I(i)*39.37*x),O=[];if(o)for(let c=0;c<o.length;c++){let u=o[c],f=u*g;O.push(new m({level:c,scale:u,resolution:f}))}else{let c=F(i)?512/r*5916575275917094e-7:256/r*591657527591555e-6,u=Math.ceil(s/t);O.push(new m({level:0,scale:c,resolution:c*g}));for(let f=1;f<u;f++){let b=c/2**t,V=b*g;O.push(new m({level:f,scale:b,resolution:V})),c=b}}return new d({dpi:x,lods:O,origin:v,size:[r,r],spatialReference:i})}constructor(e){super(e),this.dpi=96,this.format=null,this.origin=null,this.size=null,this.spatialReference=null}get isWrappable(){let{spatialReference:e,origin:t}=this;if(e&&t){let o=N(e);return e.isWrappable&&!!o&&Math.abs(o.origin[0]-t.x)<=o.dx}return!1}readOrigin(e,t){return w.fromJSON(T({spatialReference:t.spatialReference},e))}set lods(e){let t=0,o=0,r=[],i=this._levelToLOD={};e&&(t=-1/0,o=1/0,e.forEach(s=>{r.push(s.scale),t=s.scale>t?s.scale:t,o=s.scale<o?s.scale:o,i[s.level]=s})),this._set("scales",r),this._set("lods",e),this._initializeUpsampleLevels()}readSize(e,t){return[t.cols,t.rows]}writeSize(e,t){t.cols=e[0],t.rows=e[1]}zoomToScale(e){let t=this.scales;if(e<=0)return t[0];if(e>=t.length-1)return t[t.length-1];let o=Math.floor(e),r=o+1;return t[o]/(t[o]/t[r])**(e-o)}scaleToZoom(e){let t=this.scales,o=t.length-1,r=0;for(;r<o;r++){let i=t[r],s=t[r+1];if(i<=e)return r;if(s===e)return r+1;if(i>e&&s<e)return r+Math.log(i/e)/Math.log(i/s)}return r}tileAt(e,t,o,r){let i=this.lodAt(e);if(!i)return null;let s,p;if(typeof t=="number")s=t,p=o;else if(P(t.spatialReference,this.spatialReference))s=t.x,p=t.y,r=o;else{let g=W(t,this.spatialReference);if(g==null)return null;s=g.x,p=g.y,r=o}let v=i.resolution*this.size[0],x=i.resolution*this.size[1];return r||(r=new A(null,0,0,0,_())),r.level=e,r.row=Math.floor((this.origin.y-p)/x+.001),r.col=Math.floor((s-this.origin.x)/v+.001),this.updateTileInfo(r),r}updateTileInfo(e,t=d.ExtrapolateOptions.NONE){let o=this.lodAt(e.level);if(!o&&t===d.ExtrapolateOptions.POWER_OF_TWO){let p=this.lods[this.lods.length-1];p.level<e.level&&(o=p)}if(!o)return;let r=e.level-o.level,i=o.resolution*this.size[0]/2**r,s=o.resolution*this.size[1]/2**r;e.id=`${e.level}/${e.row}/${e.col}`,e.extent||(e.extent=_()),e.extent[0]=this.origin.x+e.col*i,e.extent[1]=this.origin.y-(e.row+1)*s,e.extent[2]=e.extent[0]+i,e.extent[3]=e.extent[1]+s}upsampleTile(e){let t=this._upsampleLevels[e.level];return!(!t||t.parentLevel===-1)&&(e.level=t.parentLevel,e.row=Math.floor(e.row/t.factor+.001),e.col=Math.floor(e.col/t.factor+.001),this.updateTileInfo(e),!0)}getTileBounds(e,t){let o=this.lodAt(t.level);if(o==null)return null;let{resolution:r}=o,i=r*this.size[0],s=r*this.size[1];return e[0]=this.origin.x+t.col*i,e[1]=this.origin.y-(t.row+1)*s,e[2]=e[0]+i,e[3]=e[1]+s,e}lodAt(e){return this._levelToLOD?.[e]??null}clone(){return d.fromJSON(this.write({}))}getCompatibleForVTL(e){if(this.size[0]!==this.size[1]||this.size[0]===256&&e===512)return null;let t=(this.size[0]===512&&e===256?-1:0)+(this.spatialReference.isGeographic?1:0);if(this.size[0]===e&&t===0)return this;let o=[],r=this.lods.length-t;for(let i=0;i<r;i++){let s=i+t,{scale:p,resolution:v}=s>=0?this.lods[s]:{scale:2*this.lods[0].scale,resolution:2*this.lods[0].resolution};o.push(new m({level:i,scale:p,resolution:v}))}return new d({size:[e,e],dpi:this.dpi,format:this.format,compressionQuality:this.compressionQuality,origin:this.origin,spatialReference:this.spatialReference,lods:o})}_initializeUpsampleLevels(){let e=this.lods;this._upsampleLevels=[];let t=null;for(let o=0;o<e.length;o++){let r=e[o];this._upsampleLevels[r.level]={parentLevel:t?t.level:-1,factor:t?t.resolution/r.resolution:0},t=r}}};l([n({type:Number,json:{write:!0}})],a.prototype,"compressionQuality",void 0),l([n({type:Number,json:{write:!0}})],a.prototype,"dpi",void 0),l([n({type:String,json:{read:D.read,write:D.write,origins:{"web-scene":{read:!1,write:!1}}}})],a.prototype,"format",void 0),l([n({readOnly:!0})],a.prototype,"isWrappable",null),l([n({type:w,json:{write:!0}})],a.prototype,"origin",void 0),l([j("origin")],a.prototype,"readOrigin",null),l([n({type:[m],value:null,json:{write:!0}})],a.prototype,"lods",null),l([n({readOnly:!0})],a.prototype,"scales",void 0),l([n({cast:e=>Array.isArray(e)?e:typeof e=="number"?[e,e]:[256,256]})],a.prototype,"size",void 0),l([j("size",["rows","cols"])],a.prototype,"readSize",null),l([M("size",{cols:{type:y},rows:{type:y}})],a.prototype,"writeSize",null),l([n({type:S,json:{write:!0}})],a.prototype,"spatialReference",void 0),a=d=l([z("esri.layers.support.TileInfo")],a),function(e){var t;(t=e.ExtrapolateOptions||(e.ExtrapolateOptions={}))[t.NONE=0]="NONE",t[t.POWER_OF_TWO=1]="POWER_OF_TWO"}(a||(a={}));var me=a;export{m as a,me as b};
