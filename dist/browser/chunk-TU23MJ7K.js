import{a as P,b as pe}from"./chunk-SPZCBP4U.js";import{a as S,b as M,c as te,d as ae,e as le,f as se,g as ne,h as re,i as oe,j as ie,k as ce,l as L}from"./chunk-TH4OZ7JG.js";import{c as X,f as T,g as Y,i as _,j as ee}from"./chunk-PVKVZEHO.js";import{a as J}from"./chunk-PT7FWA2O.js";import{b as K,c as Q}from"./chunk-RDFYI3QE.js";import{f as G,h as $}from"./chunk-AKHHPLWL.js";import{a as v}from"./chunk-AQ74ANSJ.js";import{a as R}from"./chunk-A4HCVMB4.js";import{s as A,u as H}from"./chunk-3DV77WOO.js";import{a as E,b as V,g as C}from"./chunk-3T7TAUC2.js";var x=S.size,O=S.maxSize,q=S.maxOutlineSize,ue=S.lineWidth,F=S.tallSymbolWidth;function z(e){let t=e.outline,s=e.material!=null?e.material.color:null,a=s!=null?s.toHex():null;if(t==null||"pattern"in t&&t.pattern!=null&&t.pattern.type==="style"&&t.pattern.style==="none")return e.type==="fill"&&a==="#ffffff"?{color:"#bdc3c7",width:.75}:null;let l=v(t.size)||0;return{color:"rgba("+(t.color!=null?t.color.toRgba():"255,255,255,1")+")",width:Math.min(l,q),style:"pattern"in t&&t.pattern!=null&&t.pattern.type==="style"?T(t.pattern.style):null,join:"butt",cap:"patternCap"in t?t.patternCap:"butt"}}function me(e,t){return C(this,null,function*(){if(e.thumbnail?.url)return e.thumbnail.url;if(t.type==="icon"&&t?.resource?.href)return ee(t);let s=R("esri/images/Legend/legend3dsymboldefault.png");if(e.styleOrigin&&(e.styleOrigin.styleName||e.styleOrigin.styleUrl)){let a=yield J(e.styleOrigin,{portal:e.styleOrigin.portal},"webRef").catch(()=>null);if(a&&"thumbnail"in a&&a.thumbnail?.url)return a.thumbnail.url}return s})}function U(e,t=1){let s=e.a,a=Q(e),l=a.h,c=a.s/t,o=100-(100-a.v)/t,{r:p,g:d,b:u}=K({h:l,s:c,v:o});return[p,d,u,s]}function W(e){return e.type==="water"?e.color==null?null:e.color:e.material?.color==null?null:e.material.color}function r(e,t=0){let s=W(e);if(!s){if(e.type==="fill")return null;let l=Y.r,c=L(l,t);return[c,c,c,100]}let a=s.toRgba();for(let l=0;l<3;l++)a[l]=L(a[l],t);return a}function fe(e,t){return C(this,null,function*(){let s=e.style;return s==="none"?null:{type:"pattern",x:0,y:0,src:yield X(R(`esri/symbols/patterns/${s}.png`),t.toCss(!0)),width:5,height:5}})}function he(e){return e.outline?z(e):{color:"rgba(0, 0, 0, 1)",width:1.5}}function B(e,t){let s=W(e);if(!s)return null;let a="rgba(";return a+=L(s.r,t)+",",a+=L(s.g,t)+",",a+=L(s.b,t)+",",a+s.a+");"}function Z(e,t){let s=B(e,t);return s?"pattern"in e&&e.pattern!=null&&e.pattern.type==="style"&&e.pattern.style==="none"?null:{color:s,width:Math.min(e.size?v(e.size):.75,q),style:"pattern"in e&&e.pattern!=null&&e.pattern.type==="style"?T(e.pattern.style):null,cap:"cap"in e?e.cap:null,join:"join"in e?e.join==="miter"?v(2):e.join:null}:{}}function D(e,t,s){let a=s!=null?.75*s:0;return{type:"linear",x1:a?.25*a:0,y1:a?.5*a:0,x2:a||4,y2:a?.5*a:4,colors:[{color:e,offset:0},{color:t,offset:1}]}}function ye(e){let t=e.depth,s=e.height,a=e.width;return a!==0&&t!==0&&s!==0&&a===t&&a!=null&&s!=null&&a<s}function de(e,t,s){let a=[];if(!e)return a;switch(e.type){case"icon":{let o=t,p=t;switch(e.resource?.primitive??G){case"circle":a.push({shape:{type:"circle",cx:0,cy:0,r:.5*t},fill:r(e,0),stroke:z(e)});break;case"square":a.push({shape:{type:"path",path:[{command:"M",values:[0,p]},{command:"L",values:[0,0]},{command:"L",values:[o,0]},{command:"L",values:[o,p]},{command:"Z",values:[]}]},fill:r(e,0),stroke:z(e)});break;case"triangle":a.push({shape:{type:"path",path:[{command:"M",values:[0,p]},{command:"L",values:[.5*o,0]},{command:"L",values:[o,p]},{command:"Z",values:[]}]},fill:r(e,0),stroke:z(e)});break;case"cross":a.push({shape:{type:"path",path:[{command:"M",values:[.5*o,0]},{command:"L",values:[.5*o,p]},{command:"M",values:[0,.5*p]},{command:"L",values:[o,.5*p]}]},stroke:he(e)});break;case"x":a.push({shape:{type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[o,p]},{command:"M",values:[o,0]},{command:"L",values:[0,p]}]},stroke:he(e)});break;case"kite":a.push({shape:{type:"path",path:[{command:"M",values:[0,.5*p]},{command:"L",values:[.5*o,0]},{command:"L",values:[o,.5*p]},{command:"L",values:[.5*o,p]},{command:"Z",values:[]}]},fill:r(e,0),stroke:z(e)})}break}case"object":switch(e.resource?.primitive??$){case"cone":{let l=D(r(e,0),r(e,-.6),s?F:t),c=re(t,s);a.push({shape:c[0],fill:l},{shape:c[1],fill:l});break}case"inverted-cone":{let l=r(e,0),c=D(l,r(e,-.6),t),o=oe(t);a.push({shape:o[0],fill:c},{shape:o[1],fill:l});break}case"cube":{let l=se(t,s);a.push({shape:l[0],fill:r(e,0)},{shape:l[1],fill:r(e,-.3)},{shape:l[2],fill:r(e,-.5)});break}case"cylinder":{let l=D(r(e,0),r(e,-.6),s?F:t),c=ne(t,s);a.push({shape:c[0],fill:l},{shape:c[1],fill:l},{shape:c[2],fill:r(e,0)});break}case"diamond":{let l=ie(t);a.push({shape:l[0],fill:r(e,-.3)},{shape:l[1],fill:r(e,0)},{shape:l[2],fill:r(e,-.3)},{shape:l[3],fill:r(e,-.7)});break}case"sphere":{let l=D(r(e,0),r(e,-.6));l.x1=0,l.y1=0,l.x2=.25*t,l.y2=.25*t,a.push({shape:{type:"circle",cx:0,cy:0,r:.5*t},fill:l});break}case"tetrahedron":{let l=ce(t);a.push({shape:l[0],fill:r(e,-.3)},{shape:l[1],fill:r(e,0)},{shape:l[2],fill:r(e,-.6)});break}}break}return a}function N(e){let t=typeof e?.size=="number"?e?.size:null;return t?v(t):null}function be(e){return e.type==="icon"?"multiply":"tint"}function ge(e,t){return C(this,null,function*(){let s=N(t),a=t?.maxSize?v(t.maxSize):null,l=t?.disableUpsampling??!1,c=e.symbolLayers,o=[],p=0,d=0,u=c.at(-1),b;u&&u.type==="icon"&&(b=u.size&&v(u.size)),c.forEach(n=>{if(n.type!=="icon"&&n.type!=="object")return;let h=n.type==="icon"?n.size&&v(n.size):0,y=s||h?Math.ceil(Math.min(s||h,a||O)):x;if(n?.resource?.href){let i=me(e,n).then(m=>{let g=n?.material?.color,k=be(n);return pe(m,y,g,k,l)}).then(m=>{let g=m.width,k=m.height;return p=Math.max(p,g),d=Math.max(d,k),[{shape:{type:"image",x:0,y:0,width:g,height:k,src:m.url},fill:null,stroke:null}]});o.push(i)}else{let i=y;n.type==="icon"&&b&&s&&(i=y*(h/b));let m=t?.symbolConfig==="tall"||t?.symbolConfig?.isTall||n.type==="object"&&ye(n);p=Math.max(p,m?F:i),d=Math.max(d,i),o.push(Promise.resolve(de(n,i,m)))}});let w=yield Promise.allSettled(o),f=[];return w.forEach(n=>{n.status==="fulfilled"?f.push(n.value):n.reason&&A.getLogger("esri.symbols.support.previewSymbol3D").warn("error while building swatchInfo!",n.reason)}),P(f,[p,d],{node:t?.node,scale:!1,opacity:t?.opacity,ariaLabel:t?.ariaLabel})})}function ke(e,t){let s=e.symbolLayers,a=[],l=_(e),c=N(t),o=(t?.maxSize?v(t.maxSize):null)||q,p,d=0,u=0;return s.forEach((b,w)=>{if(!b||b.type!=="line"&&b.type!=="path")return;let f=[];switch(b.type){case"line":{let n=Z(b,0);if(n==null)break;let h=n?.width||0;w===0&&(p=h);let y=Math.min(c||h,o),i=w===0?y:c?y*(h/p):y,m=i>ue/2?2*i:ue;u=Math.max(u,i),d=Math.max(d,m),n.width=i,f.push({shape:{type:"path",path:[{command:"M",values:[0,.5*u]},{command:"L",values:[d,.5*u]}]},stroke:n});break}case"path":{let n=Math.min(c||x,o),h=r(b,0),y=r(b,-.2),i=B(b,-.4),m=i?{color:i,width:1}:{};if(b.profile==="quad"){let g=b.width,k=b.height,j=te(g&&k?g/k:1,k===0,g===0),I=V(E({},m),{join:"bevel"});f.push({shape:j[0],fill:y,stroke:I},{shape:j[1],fill:y,stroke:I},{shape:j[2],fill:h,stroke:I})}else f.push({shape:M.pathSymbol3DLayer[0],fill:y,stroke:m},{shape:M.pathSymbol3DLayer[1],fill:h,stroke:m});u=Math.max(u,n),d=u}}a.push(f)}),Promise.resolve(P(a,[d,u],{node:t?.node,scale:l,opacity:t?.opacity,ariaLabel:t?.ariaLabel}))}function ve(e,t){return C(this,null,function*(){let s=e.type==="mesh-3d",a=e.symbolLayers,l=N(t),c=t?.maxSize?v(t.maxSize):null,o=l||x,p=[],d=0,u=0,b=!1;for(let w=0;w<a.length;w++){let f=a.at(w),n=[];if(!s||f.type==="fill"){switch(f.type){case"fill":{let h=Math.min(o,c||O);if(d=Math.max(d,h),u=Math.max(u,h),b=!0,s){let y=M.meshSymbol3DFill,i=B(f,-.4),m=i?{color:i,width:1,join:"round"}:{};n.push({shape:y[0],fill:r(f,0),stroke:m},{shape:y[1],fill:r(f,-.2),stroke:m},{shape:y[2],fill:r(f,-.6),stroke:m})}else{let y=r(f,0),i="pattern"in f?f.pattern:null,m=z(f),g=W(f);i!=null&&i.type==="style"&&i.style!=="solid"&&g&&(y=yield fe(i,g)),n.push({shape:M.fill[0],fill:y,stroke:m})}break}case"line":{let h=Z(f,0);if(h==null)break;let y={stroke:h,shape:M.fill[0]};d=Math.max(d,x),u=Math.max(u,x),n.push(y);break}case"extrude":{let h=E({join:"round",width:1},Z(f,-.4)),y=r(f,0),i=r(f,-.2),m=Math.min(o,c||O),g=ae(m);h.width=1,n.push({shape:g[0],fill:i,stroke:h},{shape:g[1],fill:i,stroke:h},{shape:g[2],fill:y,stroke:h});let k=x,j=.7*x+.5*m;d=Math.max(d,k),u=Math.max(u,j);break}case"water":{let h=W(f),y=U(h),i=U(h,2),m=U(h,3),g=le();b=!0,n.push({shape:g[0],fill:y},{shape:g[1],fill:i},{shape:g[2],fill:m});let k=Math.min(o,c||O);d=Math.max(d,k),u=Math.max(u,k);break}}p.push(n)}}return P(p,[d,u],{node:t?.node,scale:b,opacity:t?.opacity,ariaLabel:t?.ariaLabel})})}function Ee(e,t){if(e.symbolLayers.length===0)return Promise.reject(new H("symbolPreview: renderPreviewHTML3D","No symbolLayers in the symbol."));switch(e.type){case"point-3d":return ge(e,t);case"line-3d":return ke(e,t);case"polygon-3d":case"mesh-3d":return ve(e,t)}return Promise.reject(new H("symbolPreview: swatchInfo3D","symbol not supported."))}export{r as a,fe as b,N as c,Ee as d};