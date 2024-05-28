import{a as q,b as R,c as P,f as J,i as K,l as Q}from"./chunk-VLYLJQZR.js";import{a as X,h as Y,i as B}from"./chunk-PVKVZEHO.js";import"./chunk-HUYHDVA2.js";import"./chunk-C5NQJ2VI.js";import"./chunk-DDNVXGXG.js";import"./chunk-2TKGGTPN.js";import"./chunk-FVB5KK7E.js";import"./chunk-VYW7XM4C.js";import{t as A}from"./chunk-AKHHPLWL.js";import"./chunk-LJMIV7GW.js";import{i as U,m as W}from"./chunk-WSHEBM2J.js";import"./chunk-3UBRSNPL.js";import{a as E}from"./chunk-XDRSKFBJ.js";import"./chunk-MGUWZFOE.js";import"./chunk-ZGGYJV33.js";import"./chunk-63TUJPJR.js";import{a as j}from"./chunk-MDSLION2.js";import"./chunk-K6KBTDPE.js";import"./chunk-6A4M7X3R.js";import"./chunk-Y3PZSOWT.js";import"./chunk-KLDBOMH5.js";import"./chunk-USX74UBG.js";import"./chunk-LDBOA2H7.js";import"./chunk-CXUCQMGY.js";import"./chunk-3CS3BPVL.js";import"./chunk-WOZZR3L4.js";import"./chunk-LW5IAFEX.js";import"./chunk-AQ74ANSJ.js";import"./chunk-R2K3CL3U.js";import"./chunk-SAOUSUZE.js";import"./chunk-VNBPSOCW.js";import"./chunk-F7Q25XKV.js";import"./chunk-CPGZIEVH.js";import"./chunk-L2DEVDHE.js";import"./chunk-RU7UW4IO.js";import"./chunk-5QLB7ZJ7.js";import"./chunk-2ETW6ZBA.js";import"./chunk-6K7P7RRW.js";import"./chunk-7LRMKXZV.js";import"./chunk-BCREO4Q5.js";import"./chunk-BNUHB4AP.js";import"./chunk-ZGLJFDS6.js";import"./chunk-RSDQHAJX.js";import"./chunk-PSYXGXKI.js";import"./chunk-Q6TYOK45.js";import"./chunk-QMDBAMTG.js";import"./chunk-RZA5H63B.js";import"./chunk-Y4PMIX35.js";import"./chunk-KVCIO4DX.js";import"./chunk-NWBXT4EB.js";import"./chunk-4R2OFZPD.js";import"./chunk-WBI2AIMN.js";import"./chunk-FKQYBEPG.js";import"./chunk-ZHAVTBSG.js";import"./chunk-SBO2F6VY.js";import"./chunk-MMYIAMQR.js";import"./chunk-UHTPPTOJ.js";import"./chunk-LP5GLSKB.js";import"./chunk-LTDZH3EN.js";import"./chunk-3SBMUUA6.js";import"./chunk-II7TJXWX.js";import"./chunk-X7Z55FTO.js";import"./chunk-B66V4PSA.js";import"./chunk-A4HCVMB4.js";import"./chunk-AANS6QE5.js";import"./chunk-RMOOROEO.js";import"./chunk-ZP7G4HN4.js";import"./chunk-W3WDPWBE.js";import"./chunk-43GG6PFR.js";import"./chunk-MLSR6YE6.js";import"./chunk-JPDAKIWT.js";import"./chunk-D62JNIRP.js";import"./chunk-VU5W7W6Y.js";import{b as H}from"./chunk-3DV77WOO.js";import"./chunk-NJG4JJ4L.js";import{g as z}from"./chunk-3T7TAUC2.js";var F;function ae(e){switch(e){case"circle":return{rings:[[[8.5,.2],[7.06,.33],[5.66,.7],[4.35,1.31],[3.16,2.14],[2.14,3.16],[1.31,4.35],[.7,5.66],[.33,7.06],[.2,8.5],[.33,9.94],[.7,11.34],[1.31,12.65],[2.14,13.84],[3.16,14.86],[4.35,15.69],[5.66,16.3],[7.06,16.67],[8.5,16.8],[9.94,16.67],[11.34,16.3],[12.65,15.69],[13.84,14.86],[14.86,13.84],[15.69,12.65],[16.3,11.34],[16.67,9.94],[16.8,8.5],[16.67,7.06],[16.3,5.66],[15.69,4.35],[14.86,3.16],[13.84,2.14],[12.65,1.31],[11.34,.7],[9.94,.33],[8.5,.2]]]};case"square":return{rings:[[[.5,.5],[.5,16.5],[16.5,16.5],[16.5,.5],[.5,.5]]]};case"diamond":return{rings:[[[8.5,.5],[.2,8.5],[8.5,16.5],[16.5,8.5],[8.5,.5]]]};case"hexagon-pointy":return{rings:[[[15.86,12.75],[15.86,4.25],[8.5,0],[1.14,4.25],[1.14,12.75],[8.5,17],[15.86,12.75]]]};case"hexagon-flat":return{rings:[[[12.75,15.86],[17,8.5],[12.75,1.14],[4.25,1.14],[0,8.5],[4.25,15.86],[12.75,15.86]]]}}}function N(e){return e?.type==="CIMVectorMarker"?e.markerGraphics?.[0]:void 0}function Z(e){return e?.symbol?.type==="CIMPolygonSymbol"?e.symbol.symbolLayers?.[0]:void 0}function le(e,n){e?.type==="CIMVectorMarker"&&n!=null&&(e.size=n)}function se(e,n){let r=N(e);r&&n!=null&&(r.geometry=ae(n))}function ce(e,n){let r=Z(N(e));r&&n!=null&&(r.color=n.toArray())}function ue(e,n,r){let o=Z(N(e));o&&n!=null&&r&&(o.colorLocked=n)}function _(e,n){let{outerRingSize:r,innerDotSize:o,type:t,color:i,colorLocked:s,primitiveOverrides:a}=n,u=e.data.symbol?.type==="CIMPolygonSymbol"?e.data.symbol.symbolLayers:null;if(u?.length===2)for(let c of u){let m=c.primitiveName===F.OuterRing;le(c,m?r:o),se(c,t),ce(c,i),ue(c,s,m)}return r!=null&&o!=null&&(e.data.primitiveOverrides=null),a!==void 0&&(e.data.primitiveOverrides=H(a)),e}(function(e){e.OuterRing="reference-size-outer-ring",e.InnerDot="reference-size-inner-dot"})(F||(F={}));var ee=30,ne=12,T=24,re=[255,255,255],G=[200,200,200],w=[128,128,128],me=20,fe=5;function ye(e){return e.declaredClass==="esri.symbols.SimpleMarkerSymbol"}function pe(e){return e.declaredClass==="esri.symbols.PictureMarkerSymbol"}function Se(e){return e.declaredClass==="esri.symbols.SimpleLineSymbol"}function be(e){return e.declaredClass==="esri.symbols.TextSymbol"}function ve(e,n){let r=e.length-1;return e.map((o,t)=>J(o,t,r,n))}function Je(e,n,r,o,t,i,s){return z(this,null,function*(){let a=n.legendOptions,u=a?.customValues,c=s||(yield he(e,r)),m=n.stops,V=!!c,S=!!u,b=n.minSize!=null&&n.maxSize!=null,v=m&&m.length>1,d=!!n.target;if(!V||!S&&!(b||v&&!d))return;let f=B(c),y=!1,l=null,I=null;l=f&&!v?P([n.minDataValue,n.maxDataValue]):u??(yield we(n,c,o,t?.type));let M=e?.authoringInfo,$=M?.type==="univariate-color-size",k=$&&M?.univariateTheme==="above-and-below",C=!!Q(e);if(!l&&v&&(l=m.map(p=>p.value),y=m.some(p=>!!p.label),e.type==="flow"&&(l=P(l)),y&&(I=m.map(p=>p.label))),f&&l!=null&&l?.length>2&&!k&&(l=[l[0],l[l.length-1]]),!l)return null;$&&l?.length!==5&&(l=ie({minSize:l[0],maxSize:l[l.length-1]}));let L=f?ze(e,l):null,g=Y(c),h=y?null:ve(l,i);return(yield Promise.all(l.map((p,D)=>z(this,null,function*(){let O=f?L[D]:yield x(n,c,p,o,t?.type);return{value:p,symbol:!C||e.type!=="class-breaks"&&e.type!=="unique-value"?$e(k&&e.type==="class-breaks"?ge(e,D):c,O):de(e,O,n.maxSize,r)??c,label:y?I[D]:h[D],size:C?T:O,outlineSize:g}})))).reverse()})}function ze(e,n){let r=e?.authoringInfo,o=r?.type==="univariate-color-size",t=[ne,ee];if(o){let i=n[0],s=n[n.length-1],a=ne,u=ee;t=n.map(c=>a+(c-i)/(s-i)*(u-a))}return o&&r?.univariateTheme==="below"&&t.reverse(),t}function de(e,n,r,o){let t=e.type==="class-breaks",i=t?e.classBreakInfos?.[0]?.symbol?.clone():e.uniqueValueInfos?.[0]?.symbol?.clone();return i&&"type"in i&&i.type==="cim"?(_(i,{color:o??(t?null:new E(G)),innerDotSize:n*(T/r)||1,outerRingSize:T}),i):null}function ge(e,n){let r=e.classBreakInfos,o=r.length,t=o<2||!(n>=2)?r[0].symbol.clone():r[o-1].symbol.clone();return e.visualVariables.some(i=>i.type==="color")&&(t.type.includes("3d")?te(t):oe(t)),t}function he(e,n){return z(this,null,function*(){if(e.type==="flow")return K(e,n);if(e.type==="pie-chart")return new W({color:null,outline:e.outline?.width?e.outline:new U});let r=null,o=null;if(e.type==="simple")r=e.symbol;else if(e.type==="class-breaks"){let t=e.classBreakInfos;r=t&&t[0]&&t[0].symbol,o=t.length>1}else if(e.type==="unique-value"){let t=e.uniqueValueInfos;r=t?.[0]?.symbol,o=t!=null&&t.length>1}return!r||xe(r)?null:(r=r.clone(),(n||o)&&(r.type.includes("3d")?te(r):oe(r)),r)})}function xe(e){return e?A(e)?!!e.symbolLayers&&e.symbolLayers.some(n=>n&&n.type==="fill"):e.type.includes("fill"):!1}function te(e){e.type==="line-3d"?e.symbolLayers.forEach(n=>{n.material={color:w}}):e.symbolLayers.forEach(n=>{n.type!=="icon"||n.resource?.href?n.material={color:G}:(n.material={color:re},n.outline={color:w,size:1.5})})}function oe(e){let n=j();e.type==="cim"?X(e,new E(G)):e.type.includes("line")?e.color=w:(e.color=n?w:re,e.type==="simple-marker"&&(e.outline?e.outline?.color?.toHex()==="#ffffff"&&(e.outline.color=w):e.outline={color:w,width:1.5}))}function we(e,n,r,o){return z(this,null,function*(){let t=(yield import("./chunk-UZBCY7CH.js")).getSizeRangeAtScale(e,r,o),i=t&&ie(t);if(!t||!i)return;let s=i.map(a=>Ie(a,e,t));s=P(s);for(let a=1;a<s.length-1;a++){let u=yield Me(e,n,s[a],s[a-1],r,o);u&&(s[a]=u[0],i[a]=u[1])}return s})}function ie(e){let n=e.minSize,r=e.maxSize,o=fe,t=(r-n)/(o-1),i=[];for(let s=0;s<o;s++)i.push(n+t*s);return i}function Ie(e,n,r){let o=r.minSize,t=r.maxSize,i=n.minDataValue,s=n.maxDataValue,a;return e<=o?a=i:e>=t?a=s:a=(e-o)/(t-o)*(s-i)+i,a}function Me(e,n,r,o,t,i){return z(this,null,function*(){let s=yield x(e,n,r,t,i),a=yield x(e,n,o,t,i),u=q(r),c=u.fractional,m=me,V=u.integer,S=null,b=null;r>0&&r<1&&(S=10**c,V=q(r*=S).integer);for(let v=V-1;v>=0;v--){let d=10**v,f=Math.floor(r/d)*d,y=Math.ceil(r/d)*d;S!=null&&(f/=S,y/=S);let l=(f+y)/2;[,l]=P([f,l,y],{indexes:[1]});let I=yield x(e,n,f,t,i),M=yield x(e,n,y,t,i),$=yield x(e,n,l,t,i),k=R(s,I,a,null),C=R(s,M,a,null),L=R(s,$,a,null),g=k.previous<=m,h=C.previous<=m;if(g&&h&&(k.previous<=C.previous?(g=!0,h=!1):(h=!0,g=!1)),g?b=[f,I]:h?b=[y,M]:L.previous<=m&&(b=[l,$]),b)break}return b})}function x(e,n,r,o,t){return z(this,null,function*(){let{getSize:i}=yield import("./chunk-UZBCY7CH.js");return i(e,r,{scale:o,view:t,shape:n.type==="simple-marker"?n.style:null})})}function $e(e,n){let r=e.clone();if(A(r))B(r)||r.symbolLayers.forEach(o=>{o.type!=="fill"&&(o.size=n)});else if(ye(r))r.size=n;else if(pe(r)){let o=r.width,t=r.height;r.height=n,r.width=n*(o/t)}else Se(r)?r.width=n:be(r)&&r.font&&(r.font.size=n);return r}export{Je as getRampStops,de as getReferenceSizeSymbol,ee as realWorldMaxSize,ne as realWorldMinSize};
