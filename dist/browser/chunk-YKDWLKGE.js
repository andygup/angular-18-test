import{a as ot}from"./chunk-UZSTUBKI.js";import{b as er,c as tr}from"./chunk-45N2JYAW.js";import{c as at,d as rr,e as or}from"./chunk-POPMQIOF.js";import{a as oe,b as B}from"./chunk-5P55LZ7U.js";import{a as q,b as nt,c as Qt}from"./chunk-X2T2CBLR.js";import{a as Z,c as Kt}from"./chunk-IFFYADB3.js";import{a as et}from"./chunk-2KTPIKCJ.js";import{a as Qe}from"./chunk-FJAXVFKU.js";import{a as z,b as Ue,c as tt,d as re,e as We,f as ve,g as Jt}from"./chunk-PDBE4PO2.js";import{a as te,b as ye}from"./chunk-6CNLUW6T.js";import{a as I}from"./chunk-AWF4Z7TU.js";import{a as C,b,c as Ve,d as De,e as ze,f as Be,k as Ge,l as ke,n as $t}from"./chunk-IT6EB7VG.js";import{a as rt,b as Ht,c as Xt}from"./chunk-SQNW6FUV.js";import{a as qt}from"./chunk-T6U45BGW.js";import{b as Le}from"./chunk-AIOXCJIZ.js";import{a as D}from"./chunk-BVW6ULEA.js";import{a as _e}from"./chunk-7C6Z24SS.js";import{a as Gt,f as kt,q as Wt}from"./chunk-ZGGYJV33.js";import{b as Yt}from"./chunk-63TUJPJR.js";import{a as Zt}from"./chunk-MJ4RSERD.js";import{a as wt,c as bt}from"./chunk-6A4M7X3R.js";import{d as Ut,e as Oe,g as Ce,j as Vt,l as Ee,m as Ne,n as Dt,o as zt,p as je,q as Bt}from"./chunk-5QLB7ZJ7.js";import{o as Ke}from"./chunk-2ETW6ZBA.js";import{g as ge}from"./chunk-6K7P7RRW.js";import{a as M}from"./chunk-BCREO4Q5.js";import{f as Te,g as Je}from"./chunk-BNUHB4AP.js";import{A as Ie,B as $e,F as Lt,G as xe,a as v,b as de,c as W,d as Mt,e as ee,f as It,g as Tt,h as Ot,i as Ct,k as Et,l as Y,m as Nt,n as jt,u as _t}from"./chunk-ZGLJFDS6.js";import{b as At}from"./chunk-RZA5H63B.js";import{a as St}from"./chunk-FKQYBEPG.js";import{a as vt}from"./chunk-SBO2F6VY.js";import{a as Pt,j as P,t as he}from"./chunk-UHTPPTOJ.js";import{S as Rt,U as Ft}from"./chunk-3SBMUUA6.js";import{G as yt,q as xt}from"./chunk-AANS6QE5.js";import{H as d,S as dt,a as mt,c as ft}from"./chunk-RMOOROEO.js";import{S as Q}from"./chunk-ZP7G4HN4.js";import{a as h}from"./chunk-W3WDPWBE.js";import{g as ut,h as K,j as ht,o as Me,s as gt}from"./chunk-43GG6PFR.js";import{s as U,u as V}from"./chunk-3DV77WOO.js";import{a as ue,b as Pe,g as N}from"./chunk-3T7TAUC2.js";function T(e=st){return[e[0],e[1],e[2],e[3]]}function we(e,t,o=T()){return Et(o,e),o[3]=t,o}function Ze(e,t=T()){let o=Dt(Ae,e);return pr(t,Je(nt(t,o))),t}function nr(e,t,o=T()){return q(Ae,e,H(e)),q(ar,t,H(t)),Qt(Ae,ar,Ae),pr(o,Je(nt(o,Ae)))}function lr(e,t,o,r=T()){return we(Tt,e,Ye),we(Ot,t,sr),we(Ct,o,ir),nr(Ye,sr,Ye),nr(Ye,ir,r),r}function cr(e){return e[3]}function H(e){return Te(e[3])}function pr(e,t){return e[3]=t,e}var st=[0,0,1,0],Ae=Z(),ar=Z(),No=T(),Ye=T(),sr=T(),ir=T();var it,j=it=class extends dt{constructor(e){super(e),this.translation=v(),this.rotationAxis=Mt(st),this.rotationAngle=0,this.scale=W(1,1,1)}get rotation(){return we(this.rotationAxis,this.rotationAngle)}set rotation(e){this.rotationAxis=de(e),this.rotationAngle=cr(e)}get localMatrix(){let e=D();return q(mr,this.rotation,H(this.rotation)),zt(e,mr,this.translation,this.scale),e}get localMatrixInverse(){return Ut(D(),this.localMatrix)}equals(e){return this===e||e!=null&&Bt(this.localMatrix,e.localMatrix)}clone(){let e={translation:de(this.translation),rotationAxis:de(this.rotationAxis),rotationAngle:this.rotationAngle,scale:de(this.scale)};return new it(e)}};h([d({type:[Number],nonNullable:!0,json:{write:!0}})],j.prototype,"translation",void 0),h([d({type:[Number],nonNullable:!0,json:{write:!0}})],j.prototype,"rotationAxis",void 0),h([d({type:Number,nonNullable:!0,json:{write:!0}})],j.prototype,"rotationAngle",void 0),h([d({type:[Number],nonNullable:!0,json:{write:!0}})],j.prototype,"scale",void 0),h([d()],j.prototype,"rotation",null),h([d()],j.prototype,"localMatrix",null),h([d()],j.prototype,"localMatrixInverse",null),j=it=h([Q("esri.geometry.support.MeshTransform")],j);var mr=Z(),G=j;var fr="Mesh must be loaded before applying operations",ur="Provided component is not part of the list of components",hr="Expected polygon to be a Polygon instance",ne="Expected location to be a Point instance",be=class extends V{constructor(){super("invalid-input:location",ne)}};function Hr(e,t,o,r){let n=(s=>!Array.isArray(s[0]))(t)?(s,i)=>t[3*s+i]:(s,i)=>t[s][i],a=r?Ft(r)/Rt(r):1;return tr(e,(s,i)=>Y(s,n(i,0)*a,n(i,1)*a,n(i,2)),o)}function dr(e,t,o){let r=Hr(gr,e,t,o)?gr:[0,0,1];return Math.abs(r[2])>Math.cos(Te(80))?M.Z:Math.abs(r[1])>Math.abs(r[0])?M.Y:M.X}var gr=er();function xr(e){let t=$r(e.rings,e.hasZ,He.CCW_IS_HOLE,e.spatialReference),o=new Array,r=0,n=0;for(let i of t.polygons){let c=i.count,l=i.index,m=Xt(t.position,3*l,3*c),u=i.holeIndices.map(p=>p-l),f=Qe(ot(m,u,3));o.push({position:m,faces:f}),r+=m.length,n+=f.length}let a=Xr(o,r,n),s=Array.isArray(a.position)?et(a.position,3,{originalIndices:a.faces}):et(a.position.buffer,6,{originalIndices:a.faces});return a.position=Ht(new Float64Array(s.buffer)),a.faces=s.indices,a}function Xr(e,t,o){if(e.length===1)return e[0];let r=rt(t),n=new Array(o),a=0,s=0,i=0;for(let c of e){for(let l=0;l<c.position.length;l++)r[a++]=c.position[l];for(let l of c.faces)n[s++]=l+i;i=a/3}return{position:r,faces:Qe(n)}}function $r(e,t,o,r){let n=e.length,a=new Array(n),s=new Array(n),i=new Array(n),c=0;for(let g=0;g<n;++g)c+=e[g].length;let l=0,m=0,u=0,f=rt(3*c),p=0;for(let g=n-1;g>=0;g--){let x=e[g],R=o===He.CCW_IS_HOLE&&Jr(x,t,r);if(R&&n!==1)a[l++]=x;else{let E=x.length;for(let y=0;y<l;++y)E+=a[y].length;let w={index:p,pathLengths:new Array(l+1),count:E,holeIndices:new Array(l)};w.pathLengths[0]=x.length,x.length>0&&(i[u++]={index:p,count:x.length}),p=R?qe(x,x.length-1,-1,f,p,x.length,t):qe(x,0,1,f,p,x.length,t);for(let y=0;y<l;++y){let F=a[y];w.holeIndices[y]=p,w.pathLengths[y+1]=F.length,F.length>0&&(i[u++]={index:p,count:F.length}),p=qe(F,0,1,f,p,F.length,t)}l=0,w.count>0&&(s[m++]=w)}}for(let g=0;g<l;++g){let x=a[g];x.length>0&&(i[u++]={index:p,count:x.length}),p=qe(x,0,1,f,p,x.length,t)}return s.length=m,i.length=u,{position:f,polygons:s,outlines:i}}function qe(e,t,o,r,n,a,s){n*=3;for(let i=0;i<a;++i){let c=e[t];r[n++]=c[0],r[n++]=c[1],r[n++]=s?c[2]:0,t+=o}return n/3}function Jr(e,t,o){if(!t)return!ge(e);let r=e.length-1;switch(dr(e,r,o)){case M.X:return!ge(e,M.Y,M.Z);case M.Y:return!ge(e,M.X,M.Z);case M.Z:return!ge(e,M.X,M.Y)}}var He;(function(e){e[e.NONE=0]="NONE",e[e.CCW_IS_HOLE=1]="CCW_IS_HOLE"})(He||(He={}));function vr([e,t,o,r,n,a],s,i,c){yr??=new Float64Array(24);let l=yr;return l[0]=e,l[1]=t,l[2]=o,l[3]=e,l[4]=n,l[5]=o,l[6]=r,l[7]=n,l[8]=o,l[9]=r,l[10]=t,l[11]=o,l[12]=e,l[13]=t,l[14]=a,l[15]=e,l[16]=n,l[17]=a,l[18]=r,l[19]=n,l[20]=a,l[21]=r,l[22]=t,l[23]=a,$t({positions:l,transform:s,vertexSpace:i,inSpatialReference:c,outSpatialReference:c,outPositions:l}),ct(l,c)}var yr=null;function lt(e){if(e.length===0)return Wt;let t=Gt([Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,-Number.POSITIVE_INFINITY,-Number.POSITIVE_INFINITY,-Number.POSITIVE_INFINITY]);return kt(t,e),t}function ct(e,t){let[o,r,n,a,s,i]=lt(e);return new he({xmin:o,ymin:r,zmin:n,xmax:a,ymax:s,zmax:i,spatialReference:t})}function ae(e,t,o,r){if(r!==void 0){ft(e(),"option: geographic",{replacement:"use mesh vertexSpace and spatial reference to control how operations are performed",version:"4.29",warnOnce:!0});let n=t.type==="local";if(!z(t)||r===n)return o.isGeographic||o.isWebMercator&&r;e().warnOnce(`Specifying the 'geographic' parameter (${r}) for a Mesh vertex space of type "${t.type}" is not supported. This parameter will be ignored.`)}switch(t.type){case"georeferenced":return o.isGeographic;case"local":return o.isGeographic||o.isWebMercator}}var Se=()=>U.getLogger("esri.geometry.support.meshUtils.centerAt");function Ar(e,t,o){if(!e.vertexAttributes?.position)return;let{vertexSpace:r}=e,n=o?.origin??e.anchor,a=ae(Se,r,n.spatialReference,o?.geographic);z(r)?Kr(e,t,n):a?Qr(e,t,n):eo(e,t,n)}function Kr(e,t,o){let{vertexSpace:r}=e;if(!z(r))return;let n=br,a=wr;if(!I(t,a,e.spatialReference))return void b(Se(),t.spatialReference,e.spatialReference,C);if(!I(o,n,e.spatialReference)){let i=e.origin;return n[0]=i.x,n[1]=i.y,n[2]=i.z,void b(Se(),o.spatialReference,e.spatialReference,C)}let s=jt(ro,a,n);r.origin=Nt(v(),r.origin,s)}function Qr(e,t,o){let r=W(o.x,o.y,o.z??0),n=ve(e,new ye({origin:r}));if(!n)return;let a=W(t.x,t.y,t.z??0),s=ve({vertexAttributes:n,spatialReference:e.spatialReference,vertexSpace:new ye({origin:a})},new te);if(!s)return;let{position:i,normal:c,tangent:l}=s;e.vertexAttributes.position=i,e.vertexAttributes.normal=c,e.vertexAttributes.tangent=l,e.vertexAttributesChanged()}function eo(e,t,o){let r=br,n=wr;if(I(t,n,e.spatialReference)){if(!I(o,r,e.spatialReference)){let a=e.origin;return r[0]=a.x,r[1]=a.y,r[2]=a.z,void b(Se(),o.spatialReference,e.spatialReference,C)}to(e.vertexAttributes.position,n,r),e.vertexAttributesChanged()}else b(Se(),t.spatialReference,e.spatialReference,C)}function to(e,t,o){if(e)for(let r=0;r<e.length;r+=3)for(let n=0;n<3;n++)e[r+n]+=t[n]-o[n]}var wr=v(),br=v(),ro=v();function Sr(e,t,o){return N(this,null,function*(){let{source:r}=t,{loadGLTFMesh:n}=yield Me(import("./chunk-WYNSDS44.js"),o),a=yield no(r,o);K(o);let s=n(new P({x:0,y:0,z:0,spatialReference:e.spatialReference}),a.url,{resolveFile:oo(a),signal:o?.signal,expectedType:a.type});s.then(()=>a.dispose(),()=>a.dispose());let{vertexAttributes:i,components:c}=yield s;e.vertexAttributes=i,e.components=c})}function oo(e){let t=yt(e.url);return o=>{let r=xt(o,t,t),n=r?r.replace(/^ *\.\//,""):null;return(n?e.files.get(n):null)??o}}function no(e,t){return N(this,null,function*(){if(Array.isArray(e)){if(!e.length)throw new V("mesh-load-external:missing-assets","There must be at least one file to load");return e[0]instanceof File?so(e):io(e,t)}return Rr(e)})}function ao(e,t){return N(this,null,function*(){let{parts:o,assetMimeType:r,assetName:n}=e;if(o.length===1)return new se(o[0].partUrl);let a=yield e.toBlob(t);return K(t),se.fromBlob(a,Ir(n,r))})}function Rr(e){return se.fromBlob(e,Ir(e.name,e.type))}function so(e){return Mr(e.map(t=>({name:t.name,mimeType:t.type,source:Rr(t)})))}function io(e,t){return N(this,null,function*(){let o=yield gt(e.map(r=>N(this,null,function*(){let n=yield ao(r);return K(t),{name:r.assetName,mimeType:r.assetMimeType,source:n}})));if(ht(t))throw o.forEach(r=>r.source.dispose()),ut();return Mr(o)})}var Fr=/^model\/gltf\+json$/,Pr=/^model\/gltf-binary$/,pt=/\.gltf$/i,lo=/\.glb$/i;function Mr(e){let t=new Map,o,r=null;for(let{name:n,mimeType:a,source:s}of e)r===null&&(Fr.test(a)||pt.test(n)?(r=s.url,o="gltf"):(Pr.test(a)||lo.test(n))&&(r=s.url,o="glb")),t.set(n,s.url),s.files.forEach((i,c)=>t.set(c,i));if(r==null)throw new V("mesh-load-external:missing-files","Missing files to load external mesh source");return new se(r,()=>e.forEach(({source:n})=>n.dispose()),t,o)}var se=class e{constructor(t,o=()=>{},r=new Map,n){this.url=t,this.dispose=o,this.files=r,this.type=n}static fromBlob(t,o){let r=URL.createObjectURL(t);return new e(r,()=>URL.revokeObjectURL(r),void 0,o)}};function Ir(e,t){return Fr.test(t)||pt.test(e)?"gltf":Pr.test(t)||pt.test(e)?"glb":void 0}var L=class extends Yt{constructor(e){super(e),this.externalSources=new At,this._explicitDisplaySource=null,this.addHandles(bt(()=>this.externalSources,"after-remove",({item:t})=>{t===this._explicitDisplaySource&&(this._explicitDisplaySource=null)},{sync:!0,onListenerRemove:()=>this._explicitDisplaySource=null}))}get displaySource(){return this._explicitDisplaySource??this._implicitDisplaySource}set displaySource(e){if(e!=null&&!at(e))throw new Error("Cannot use this source for display: it is not in a supported format.");this._explicitDisplaySource=e,e&&this.externalSources.every(t=>!or(t,e))&&this.externalSources.add(e)}clearSources(){this.externalSources.removeAll()}getExternalSourcesOnService(e){return this.externalSources.items.filter(t=>rr(t,e))}get _implicitDisplaySource(){return this.externalSources.find(at)}};h([d()],L.prototype,"externalSources",void 0),h([d()],L.prototype,"displaySource",null),h([d()],L.prototype,"_implicitDisplaySource",null),h([d()],L.prototype,"_explicitDisplaySource",void 0),L=h([Q("esri.geometry.support.meshUtils.Metadata")],L);function Tr(){let{faceDescriptions:e,faceVertexOffsets:t,uvScales:o}=fo,r=4*e.length,n=new Float64Array(3*r),a=new Float32Array(3*r),s=new Float32Array(2*r),i=new Uint32Array(2*e.length*3),c=0,l=0,m=0,u=0;for(let f=0;f<e.length;f++){let p=e[f],g=c/3;for(let R of t)i[u++]=g+R;let x=p.corners;for(let R=0;R<4;R++){let E=x[R],w=0;s[m++]=.25*o[R][0]+p.uvOrigin[0],s[m++]=p.uvOrigin[1]-.25*o[R][1];for(let y=0;y<3;y++)p.axis[y]!==0?(n[c++]=.5*p.axis[y],a[l++]=p.axis[y]):(n[c++]=.5*E[w++],a[l++]=0)}}return{position:n,normal:a,uv:s,faces:i}}function Or(e,t){let o=e.components[0],r=o.faces,n=uo[t],a=6*n,s=new Array(6),i=new Array(r.length-6),c=0,l=0;for(let m=0;m<r.length;m++)m>=a&&m<a+6?s[c++]=r[m]:i[l++]=r[m];if(e.vertexAttributes.uv!=null){let m=new Float32Array(e.vertexAttributes.uv),u=4*n*2,f=[0,1,1,1,1,0,0,0];for(let p=0;p<f.length;p++)m[u+p]=f[p];e.vertexAttributes.uv=m}return e.components=[new B({faces:s,material:o.material}),new B({faces:i})],e}function Cr(e=0){let t=Math.round(8*2**e),o=2*t,r=(t-1)*(o+1)+2*o,n=new Float64Array(3*r),a=new Float32Array(3*r),s=new Float32Array(2*r),i=new Uint32Array(3*((t-1)*o*2)),c=0,l=0,m=0,u=0;for(let f=0;f<=t;f++){let p=f/t*Math.PI+.5*Math.PI,g=Math.cos(p),x=Math.sin(p);A[2]=x;let R=f===0||f===t,E=R?o-1:o;for(let w=0;w<=E;w++){let y=w/E*2*Math.PI;A[0]=-Math.sin(y)*g,A[1]=Math.cos(y)*g;for(let F=0;F<3;F++)n[c]=.5*A[F],a[c]=A[F],++c;s[l++]=(w+(R?.5:0))/o,s[l++]=f/t,f!==0&&w!==o&&(f!==t&&(i[m++]=u,i[m++]=u+1,i[m++]=u-o),f!==1&&(i[m++]=u,i[m++]=u-o,i[m++]=u-o-1)),u++}}return{position:n,normal:a,uv:s,faces:i}}function Er(e=0){let o=Math.round(16*2**e),r=4*(o+1)+2*o,n=new Float64Array(3*r),a=new Float32Array(3*r),s=new Float32Array(2*r),i=new Uint32Array(3*(4*o)),c=0,l=0,m=0,u=0,f=0;for(let p=0;p<=5;p++){let g=p===0||p===5,x=p<=1||p>=4,R=p===2||p===4,E=g?o-1:o;for(let w=0;w<=E;w++){let y=w/E*2*Math.PI,F=g?0:.5;A[0]=F*Math.sin(y),A[1]=F*-Math.cos(y),A[2]=p<=2?.5:-.5;for(let J=0;J<3;J++)n[c++]=A[J],a[l++]=x?J===2?p<=1?1:-1:0:J===2?0:A[J]/F;s[m++]=(w+(g?.5:0))/o,s[m++]=p<=1?1*p/3:p<=3?1*(p-2)/3+1/3:1*(p-4)/3+2/3,R||p===0||w===o||(p!==5&&(i[u++]=f,i[u++]=f+1,i[u++]=f-o),p!==1&&(i[u++]=f,i[u++]=f-o,i[u++]=f-o-1)),f++}}return{position:n,normal:a,uv:s,faces:i}}function Nr(e,t){let o=typeof t=="number"?t:t!=null?t.width:1,r=typeof t=="number"?t:t!=null?t.height:1;switch(e){case"up":case"down":return{width:o,depth:r};case"north":case"south":return{width:o,height:r};case"east":case"west":return{depth:o,height:r}}}function jr(e){let t=Re.facingAxisOrderSwap[e],o=Re.position,r=Re.normal,n=new Float64Array(o.length),a=new Float32Array(r.length),s=0;for(let i=0;i<4;i++){let c=s;for(let l=0;l<3;l++){let m=t[l],u=Math.abs(m)-1,f=m>=0?1:-1;n[s]=o[c+u]*f,a[s]=r[c+u]*f,s++}}return{position:n,normal:a,uv:new Float32Array(Re.uv),faces:new Uint32Array(Re.faces),isPlane:!0}}var ie=1,le=2,ce=3,Re={position:[-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0],normal:[0,0,1,0,0,1,0,0,1,0,0,1],uv:[0,1,1,1,1,0,0,0],faces:[0,1,2,0,2,3],facingAxisOrderSwap:{east:[ce,ie,le],west:[-ce,-ie,le],north:[-ie,ce,le],south:[ie,-ce,le],up:[ie,le,ce],down:[ie,-le,-ce]}};function Fe(e,t,o){e.isPlane||co(e),mo(e,po(o?.size,o?.unit,t.spatialReference));let r=re(t,o),n=t.spatialReference.isGeographic?re(t):r,a=ve({vertexAttributes:e,vertexSpace:n,spatialReference:t.spatialReference},r,{allowBufferReuse:!0});return{vertexAttributes:new oe(Pe(ue({},a),{uv:e.uv})),vertexSpace:r,components:[new B({faces:e.faces,material:o?.material||null})],spatialReference:t.spatialReference}}function co(e){for(let t=0;t<e.position.length;t+=3)e.position[t+2]+=.5}function po(e,t,o){let r=Jt(t,o);if(e==null&&r===1)return null;if(e==null)return[r,r,r];if(typeof e=="number"){let n=e*r;return[n,n,n]}return[e.width!=null?e.width*r:r,e.depth!=null?e.depth*r:r,e.height!=null?e.height*r:r]}function mo(e,t){if(t!=null){k[0]=t[0],k[4]=t[1],k[8]=t[2];for(let o=0;o<e.position.length;o+=3){for(let r=0;r<3;r++)A[r]=e.position[o+r];xe(A,A,k);for(let r=0;r<3;r++)e.position[o+r]=A[r]}if(t[0]!==t[1]||t[1]!==t[2]){k[0]=1/t[0],k[4]=1/t[1],k[8]=1/t[2];for(let o=0;o<e.normal.length;o+=3){for(let r=0;r<3;r++)A[r]=e.normal[o+r];xe(A,A,k),$e(A,A);for(let r=0;r<3;r++)e.normal[o+r]=A[r]}}}}var fo={faceDescriptions:[{axis:[0,-1,0],uvOrigin:[0,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[1,0,0],uvOrigin:[.25,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,1,0],uvOrigin:[.5,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[-1,0,0],uvOrigin:[.75,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[0,0,1],uvOrigin:[0,.375],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,0,-1],uvOrigin:[0,.875],corners:[[-1,1],[1,1],[1,-1],[-1,-1]]}],uvScales:[[0,0],[1,0],[1,1],[0,1]],faceVertexOffsets:[0,1,2,0,2,3]},uo={south:0,east:1,north:2,west:3,up:4,down:5},A=v(),k=_e();var X=()=>U.getLogger("esri.geometry.support.meshUtils.rotate");function Dr(e,t,o){if(!e.vertexAttributes?.position||t[3]===0)return;let{spatialReference:r,vertexSpace:n}=e,a=o?.origin??e.anchor,s=o?.geographic,i=ae(X,n,r,s);Ue(e)?ho(e,t,a):i?go(e,t,a):xo(e,t,a)}function ho(e,t,o){e.transform??=new G;let{vertexSpace:r,transform:n,spatialReference:a}=e,[s,i,c]=r.origin,l=new P({x:s,y:i,z:c,spatialReference:a}),m=pe;if(l.equals(o))Y(m,0,0,0);else if(!We(m,o,e))return void b(X(),o.spatialReference,a,C);q(Vr,t,H(t));let u=je(_r,Vr,ee,It,m),{localMatrix:f}=n,p=Oe(_r,u,f);n.scale=Ne(v(),p),Ce(p,p,Ie(pe,n.scale));let g=n.rotationAxis;n.rotation=Ze(p),n.rotationAngle===0&&(n.rotationAxis=g),n.translation=Ee(v(),p)}function go(e,t,o){let r=e.spatialReference,n=Le(r),a=zr;if(!I(o,a,n)&&(b(X(),o.spatialReference,n,"Falling back to mesh origin"),!I(e.origin,a,n)))return void b(X(),e.origin.spatialReference,n);let s=e.vertexAttributes.position,i=e.vertexAttributes.normal,c=e.vertexAttributes.tangent,l=new Float64Array(s.length),m=i!=null?new Float32Array(i.length):null,u=c!=null?new Float32Array(c.length):null;qt(n,a,Xe,n),Zt(Ur,Xe);let f=Lr;xe(Lr,t,Ur),f[3]=t[3],ze(s,r,l)&&(i==null||m==null||Ve(i,s,l,r,m))&&(c==null||u==null||Ge(c,s,l,r,u))?(me(l,f,3,a),Be(l,s,r)&&(i==null||m==null||(me(m,f,3),De(m,s,l,r,i)))&&(c==null||u==null||(me(u,f,4),ke(u,s,l,r,c)))?e.vertexAttributesChanged():b(X(),n,r)):b(X(),r,n)}function xo(e,t,o){let r=zr;if(!I(o,r,e.spatialReference)){let n=e.origin;return r[0]=n.x,r[1]=n.y,r[2]=n.z,void b(X(),o.spatialReference,e.spatialReference,C)}me(e.vertexAttributes.position,t,3,r),me(e.vertexAttributes.normal,t,3),me(e.vertexAttributes.tangent,t,4),e.vertexAttributesChanged()}function me(e,t,o,r=ee){if(e!=null){Vt(Xe,H(t),t);for(let n=0;n<e.length;n+=o){for(let a=0;a<3;a++)pe[a]=e[n+a]-r[a];Lt(pe,pe,Xe);for(let a=0;a<3;a++)e[n+a]=pe[a]+r[a]}}}var pe=v(),_r=D(),Lr=T(),Xe=D(),Ur=_e(),zr=v(),Vr=Z();var $=()=>U.getLogger("esri.geometry.support.meshUtils.scale");function Gr(e,t,o){if(!e.vertexAttributes?.position)return;let{vertexSpace:r,spatialReference:n}=e,a=o?.origin??e.anchor,s=o?.geographic,i=ae($,r,n,s);Ue(e)?yo(e,t,a):i?vo(e,t,a):Ao(e,t,a)}function yo(e,t,o){e.transform??=new G;let{vertexSpace:r,transform:n,spatialReference:a}=e,[s,i,c]=r.origin,l=new P({x:s,y:i,z:c,spatialReference:a}),m=fe;if(l.equals(o))Y(m,0,0,0);else if(!We(m,o,e))return void b($(),o.spatialReference,a,C);let u=Y(wo,t,t,t),f=je(Br,Kt,ee,u,m),{localMatrix:p}=n,g=Oe(Br,f,p);n.scale=Ne(v(),g),Ce(g,g,Ie(fe,n.scale));let x=n.rotationAxis;n.rotation=Ze(g),n.rotationAngle===0&&(n.rotationAxis=x),n.translation=Ee(v(),g)}function vo(e,t,o){let r=e.spatialReference,n=Le(r),a=Wr;if(!I(o,a,n)&&(b($(),o.spatialReference,n,"Falling back to mesh origin"),!I(e.origin,a,n)))return void b($(),e.origin.spatialReference,n);let s=e.vertexAttributes.position,i=e.vertexAttributes.normal,c=e.vertexAttributes.tangent,l=new Float64Array(s.length),m=i!=null?new Float32Array(i.length):null,u=c!=null?new Float32Array(c.length):null;ze(s,r,l)&&(i==null||m==null||Ve(i,s,l,r,m))&&(c==null||u==null||Ge(c,s,l,r,u))?(kr(l,t,a),Be(l,s,r)&&(i==null||m==null||De(m,s,l,r,i))&&(c==null||u==null||ke(u,s,l,r,c))?e.vertexAttributesChanged():b($(),n,r)):b($(),r,n)}function Ao(e,t,o){let r=Wr;if(!I(o,r,e.spatialReference)){let n=e.origin;return r[0]=n.x,r[1]=n.y,r[2]=n.z,void b($(),o.spatialReference,e.spatialReference,C)}kr(e.vertexAttributes.position,t,r),e.vertexAttributesChanged()}function kr(e,t,o=ee){if(e)for(let r=0;r<e.length;r+=3){for(let n=0;n<3;n++)fe[n]=e[r+n]-o[n];_t(fe,fe,t);for(let n=0;n<3;n++)e[r+n]=fe[n]+o[n]}}var fe=v(),wo=v(),Br=D(),Wr=v();var O,Zr="esri.geometry.Mesh";function _(){return U.getLogger(Zr)}var bo={base:null,key:"type",defaultKeyValue:"georeferenced",typeMap:{georeferenced:te,local:ye}},S=O=class extends St.LoadableMixin(vt(Pt)){constructor(e){super(e),this.components=null,this.vertexSpace=new te,this.transform=null,this.metadata=new L,this.hasZ=!0,this.hasM=!1,this.vertexAttributes=new oe,this.type="mesh"}initialize(){(this.metadata.externalSources.length===0||this.vertexAttributes.position.length)&&(this.loadStatus="loaded"),this.when(()=>{this.addHandles(wt(()=>({vertexAttributes:this.vertexAttributes,components:this.components?.map(e=>e.clone())}),()=>this._clearSources(),{once:!0,sync:!0}))})}get hasExtent(){return this.loaded?this.vertexAttributes.position.length>0&&(!this.components||this.components.length>0):this.metadata.displaySource?.extent!=null}get _transformedExtent(){let{components:e,spatialReference:t,vertexAttributes:o,vertexSpace:r}=this,n=o.position;if(n.length===0||e&&e.length===0)return new he({xmin:0,ymin:0,zmin:0,xmax:0,ymax:0,zmax:0,spatialReference:t});if(z(r)){let{_untransformedBounds:a,transform:s}=this;return vr(a,s,r,t)}return ct(n,t)}get _untransformedBounds(){return lt(this.vertexAttributes.position)}get anchor(){let e=tt(this.vertexSpace,this.spatialReference);if(e!=null)return e;let{center:t,zmin:o}=this._transformedExtent;return new P({x:t.x,y:t.y,z:o,spatialReference:this.spatialReference})}get origin(){let e=tt(this.vertexSpace,this.spatialReference);return e??this._transformedExtent.center}get extent(){return this.loaded||this.metadata?.displaySource?.extent==null?this._transformedExtent:this.metadata.displaySource.extent.clone()}addComponent(e){this._checkIfLoaded("addComponent()")&&(this.components||(this.components=[]),this.components.push(B.from(e)),this.notifyChange("components"))}removeComponent(e){if(this._checkIfLoaded("removeComponent()")){if(this.components){let t=this.components.indexOf(e);if(t!==-1)return this.components.splice(t,1),void this.notifyChange("components")}_().error("removeComponent()",ur)}}rotate(e,t,o,r){return lr(e,t,o,Yr),Dr(this,Yr,r),this}offset(e,t,o){if(!this._checkIfLoaded("offset()"))return this;let{vertexSpace:r,vertexAttributes:n}=this,a=n?.position;if(!a)return this;if(z(r)){let[s,i,c]=r.origin;r.origin=W(s+e,i+t,c+o)}else{for(let s=0;s<a.length;s+=3)a[s]+=e,a[s+1]+=t,a[s+2]+=o;this.vertexAttributesChanged()}return this}scale(e,t){return this._checkIfLoaded("scale()")?(Gr(this,e,t),this):this}centerAt(e,t){return this._checkIfLoaded("centerAt()")?(Ar(this,e,t),this):this}load(e){let{metadata:{displaySource:t}}=this;return t&&this.addResolvingPromise(Sr(this,t,e)),Promise.resolve(this)}addExternalSources(e){this.metadata.externalSources.addMany(e)}updateDisplaySource(e){this.metadata.displaySource=e}clone(){return this.cloneAndModifyVertexAttributes(this.vertexAttributes.clone(),this.vertexSpace.clone())}cloneAndModifyVertexAttributes(e,t){let o=null;if(this.components){let n=new Map,a=new Map;o=this.components.map(s=>s.cloneWithDeduplication(n,a))}let r={components:o,spatialReference:this.spatialReference,vertexAttributes:e,vertexSpace:t,transform:this.transform?.clone()??null,metadata:this.metadata.clone()};return new O(r)}cloneShallow(){return new O({components:this.components,spatialReference:this.spatialReference,vertexAttributes:this.vertexAttributes,vertexSpace:this.vertexSpace.clone(),transform:this.transform,metadata:this.metadata})}vertexAttributesChanged(){this.notifyChange("vertexAttributes")}toBinaryGLTF(e){return N(this,null,function*(){let[{toBinaryGLTF:t}]=yield Promise.all([import("./chunk-IKNTY5TE.js"),this.load(e)]);return K(e),yield t(this,e)})}get memoryUsage(){let e=0;if(e+=this.vertexAttributes.memoryUsage,this.components!=null)for(let t of this.components)e+=t.memoryUsage;return e}_clearSources(){this.metadata.clearSources()}_checkIfLoaded(e){return!!this.loaded||(_().error(e,fr),!1)}static createBox(e,t){if(!(e instanceof P))return _().error(".createBox()",ne),null;let o=new O(Fe(Tr(),e,t));return t?.imageFace&&t.imageFace!=="all"?Or(o,t.imageFace):o}static createSphere(e,t){return e instanceof P?new O(Fe(Cr(t?.densificationFactor||0),e,t)):(_().error(".createSphere()",ne),null)}static createCylinder(e,t){return e instanceof P?new O(Fe(Er(t?.densificationFactor||0),e,t)):(_().error(".createCylinder()",ne),null)}static createPlane(e,t){if(!(e instanceof P))return _().error(".createPlane()",ne),null;let o=t?.facing??"up",r=Nr(o,t?.size);return new O(Fe(jr(o),e,Pe(ue({},t),{size:r})))}static createFromPolygon(e,t){if(!(e instanceof Ke))return _().error(".createFromPolygon()",hr),null;let o=xr(e);return new O({vertexAttributes:new oe({position:o.position}),components:[new B({faces:o.faces,shading:"flat",material:t?.material??null})],spatialReference:e.spatialReference,vertexSpace:new te})}static createFromGLTF(e,t,o){return N(this,null,function*(){if(!(e instanceof P)){let n=new be;throw _().error(".createfromGLTF()",n.message),n}let{loadGLTFMesh:r}=yield Me(import("./chunk-WYNSDS44.js"),o);return new O(yield r(e,t,o))})}static createFromFiles(e,t,o){return N(this,null,function*(){mt(_(),"`Mesh.createFromFiles` is deprecated in favor of 'SceneLayer.convertMesh'",{replacement:"SceneLayer.convertMesh",version:"4.29"});let r=n=>_().error(".createFromFiles()",n.message);if(!(e instanceof P)){let n=new be;throw r(n),n}if(!o?.layer)throw new V("invalid:no-layer","SceneLayer required for file to mesh conversion.");return o.layer.convertMesh(t,ue({location:e},o))})}static createWithExternalSource(e,t,o){let r=o?.extent??null,{spatialReference:n}=e,a=o?.transform?.clone()??new G,s=re(e,o),i={source:t,extent:r},c=new L;return c.externalSources.push(i),new O({metadata:c,transform:a,vertexSpace:s,spatialReference:n})}static createIncomplete(e,t){let{spatialReference:o}=e,r=t?.transform?.clone()??new G,n=re(e,t),a=new O({transform:r,vertexSpace:n,spatialReference:o});return a.addResolvingPromise(Promise.reject(new V("mesh-incomplete","Mesh resources are not complete"))),a}};h([d({type:[B],json:{write:!0}})],S.prototype,"components",void 0),h([d({nonNullable:!0,types:bo,constructOnly:!0,json:{write:!0}})],S.prototype,"vertexSpace",void 0),h([d({type:G,json:{write:!0}})],S.prototype,"transform",void 0),h([d({constructOnly:!0})],S.prototype,"metadata",void 0),h([d()],S.prototype,"hasExtent",null),h([d()],S.prototype,"_transformedExtent",null),h([d()],S.prototype,"_untransformedBounds",null),h([d()],S.prototype,"anchor",null),h([d()],S.prototype,"origin",null),h([d({readOnly:!0,json:{read:!1}})],S.prototype,"extent",null),h([d({readOnly:!0,json:{read:!1,write:!0,default:!0}})],S.prototype,"hasZ",void 0),h([d({readOnly:!0,json:{read:!1,write:!0,default:!1}})],S.prototype,"hasM",void 0),h([d({type:oe,nonNullable:!0,json:{write:!0}})],S.prototype,"vertexAttributes",void 0),S=O=h([Q(Zr)],S);var Yr=T(),js=S;export{G as a,js as b};