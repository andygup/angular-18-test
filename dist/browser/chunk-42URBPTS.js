import{b as q}from"./chunk-YKDWLKGE.js";import"./chunk-5E3PODWI.js";import"./chunk-6WUYBFKW.js";import"./chunk-PTXLSCMJ.js";import"./chunk-UZSTUBKI.js";import"./chunk-YQNUGDFH.js";import"./chunk-45N2JYAW.js";import"./chunk-POPMQIOF.js";import{a as j,b as P}from"./chunk-5P55LZ7U.js";import"./chunk-6CK56SXG.js";import"./chunk-OW7DVBQB.js";import"./chunk-X2T2CBLR.js";import"./chunk-6UADMSXH.js";import"./chunk-675N36PI.js";import"./chunk-7LGSGFQI.js";import"./chunk-X2KSOPZ6.js";import"./chunk-IFFYADB3.js";import"./chunk-7EQBH2NW.js";import"./chunk-2KTPIKCJ.js";import"./chunk-I46GU3Q4.js";import"./chunk-H5IJXG2U.js";import{a as S}from"./chunk-FJAXVFKU.js";import"./chunk-PDBE4PO2.js";import"./chunk-6CNLUW6T.js";import"./chunk-AWF4Z7TU.js";import"./chunk-IT6EB7VG.js";import"./chunk-NILEV7NP.js";import"./chunk-SQNW6FUV.js";import"./chunk-Z6XPPWSB.js";import"./chunk-T6U45BGW.js";import"./chunk-AIOXCJIZ.js";import"./chunk-BVW6ULEA.js";import"./chunk-7C6Z24SS.js";import"./chunk-3M7QKELQ.js";import{a as E}from"./chunk-OVFZVLK3.js";import"./chunk-2E6TO2WI.js";import"./chunk-I3S324BU.js";import"./chunk-3UBRSNPL.js";import"./chunk-XDRSKFBJ.js";import"./chunk-ZGGYJV33.js";import"./chunk-2EA2KAER.js";import"./chunk-63TUJPJR.js";import"./chunk-MJ4RSERD.js";import{g as U}from"./chunk-GDTXLKQK.js";import"./chunk-YNFZN34N.js";import"./chunk-SHSMFEO2.js";import"./chunk-J57HR4DB.js";import"./chunk-6A4M7X3R.js";import"./chunk-3CS3BPVL.js";import"./chunk-R2K3CL3U.js";import"./chunk-SAOUSUZE.js";import"./chunk-VNBPSOCW.js";import"./chunk-CPGZIEVH.js";import"./chunk-L2DEVDHE.js";import"./chunk-Z5Q76SB7.js";import"./chunk-RU7UW4IO.js";import"./chunk-5QLB7ZJ7.js";import"./chunk-2ETW6ZBA.js";import"./chunk-6K7P7RRW.js";import"./chunk-7LRMKXZV.js";import"./chunk-BCREO4Q5.js";import"./chunk-E5R4OI7X.js";import"./chunk-BNUHB4AP.js";import"./chunk-ZGLJFDS6.js";import"./chunk-RSDQHAJX.js";import"./chunk-RZA5H63B.js";import"./chunk-Y4PMIX35.js";import"./chunk-KVCIO4DX.js";import"./chunk-NWBXT4EB.js";import"./chunk-FKQYBEPG.js";import"./chunk-ZHAVTBSG.js";import"./chunk-SBO2F6VY.js";import{j as F}from"./chunk-UHTPPTOJ.js";import"./chunk-LP5GLSKB.js";import"./chunk-LTDZH3EN.js";import{U as M}from"./chunk-3SBMUUA6.js";import"./chunk-X7Z55FTO.js";import"./chunk-B66V4PSA.js";import"./chunk-A4HCVMB4.js";import"./chunk-AANS6QE5.js";import"./chunk-RMOOROEO.js";import"./chunk-ZP7G4HN4.js";import"./chunk-W3WDPWBE.js";import"./chunk-43GG6PFR.js";import"./chunk-MLSR6YE6.js";import"./chunk-JPDAKIWT.js";import"./chunk-D62JNIRP.js";import"./chunk-VU5W7W6Y.js";import{s as b}from"./chunk-3DV77WOO.js";import"./chunk-NJG4JJ4L.js";import{g as v}from"./chunk-3T7TAUC2.js";function _(e,t,o){return v(this,null,function*(){let u;return L(e)||e instanceof E?(u=yield(yield H(e)).createElevationSampler(t,{demResolution:o?.demResolution??"finest-contiguous"}),I(u,t,{material:o?.material})):typeof o?.demResolution=="string"?(b.getLogger("esri.geometry.support.meshUtils.elevation").error("create()","demResolution must be a number when used directly with a sampler"),null):I(e,t,{material:o?.material,demResolution:o?.demResolution})})}function I(e,t,o){let u=M(t.spatialReference),R=(o?.demResolution??e.demResolution.min)/u,s=Math.round(t.width/R),l=Math.round(t.height/R),n=s+1,w=l+1,m=new Float64Array(n*w*3),y=new Float32Array(n*w*2),f=0,A=0,a=new Uint32Array(s*l*2*3),i=0,r=0,V=!e.spatialReference.equals(t.spatialReference);d.spatialReference=t.spatialReference;let{xmin:k,ymin:z,height:B,width:C}=t;for(let c=0;c<w;c++){let h=z+B*(c/l);for(let p=0;p<n;p++){let g=k+C*(p/s);if(m[f++]=g,m[f++]=h,V){d.x=g,d.y=h;let x=U(d,e.spatialReference);m[f++]=e.elevationAt(x.x,x.y)??0}else m[f++]=e.elevationAt(g,h)??0;let D=p/s,G=c/l;y[A++]=D,y[A++]=G,c!==l&&p!==s&&(a[r++]=i+1,a[r++]=i+n+1,a[r++]=i+n,a[r++]=i,a[r++]=i+1,a[r++]=i+n),i++}}return new q({vertexAttributes:new j({position:m,uv:y}),components:[new P({faces:S(a),shading:"smooth",material:o?.material??null})],spatialReference:t.spatialReference})}function H(e){return v(this,null,function*(){return L(e)?e.load():(yield e.load(),yield Promise.allSettled(e.layers.items.map(t=>t.load())),e)})}function L(e){return"type"in e&&(e.type==="elevation"||e.type==="base-elevation")}var d=new F;export{_ as create};