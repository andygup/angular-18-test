import"./chunk-7GAPU6PI.js";import"./chunk-NNHSZNZG.js";import"./chunk-ZYBGZLJ2.js";import"./chunk-7FVU4GPM.js";import"./chunk-PCE3ZAVU.js";import"./chunk-GMW3QDVG.js";import"./chunk-RHABF3KL.js";import"./chunk-CD2DJ22A.js";import"./chunk-MJHLIPBA.js";import"./chunk-VKL3L6CG.js";import"./chunk-M7ZGDKKR.js";import"./chunk-YQNUGDFH.js";import"./chunk-45N2JYAW.js";import"./chunk-X2T2CBLR.js";import"./chunk-7LGSGFQI.js";import"./chunk-X2KSOPZ6.js";import"./chunk-IFFYADB3.js";import"./chunk-H5IJXG2U.js";import{a as V,b as k}from"./chunk-6CNLUW6T.js";import"./chunk-AWF4Z7TU.js";import{e as J}from"./chunk-SQNW6FUV.js";import{d as H,i as Y}from"./chunk-Z6XPPWSB.js";import"./chunk-T6U45BGW.js";import"./chunk-AIOXCJIZ.js";import"./chunk-BVW6ULEA.js";import"./chunk-7C6Z24SS.js";import"./chunk-XHOTVM3O.js";import"./chunk-SEBAYBYC.js";import"./chunk-VI3FHFCE.js";import"./chunk-KLIUUY5R.js";import"./chunk-I3S324BU.js";import"./chunk-JVM3RNQL.js";import"./chunk-XDRSKFBJ.js";import"./chunk-O5CPPU3T.js";import"./chunk-2EA2KAER.js";import"./chunk-63TUJPJR.js";import"./chunk-MJ4RSERD.js";import"./chunk-GDTXLKQK.js";import"./chunk-YNFZN34N.js";import"./chunk-SHSMFEO2.js";import"./chunk-CXUCQMGY.js";import"./chunk-AQ74ANSJ.js";import"./chunk-SAOUSUZE.js";import"./chunk-VNBPSOCW.js";import"./chunk-CPGZIEVH.js";import"./chunk-L2DEVDHE.js";import"./chunk-Z5Q76SB7.js";import"./chunk-RU7UW4IO.js";import"./chunk-5QLB7ZJ7.js";import"./chunk-2ETW6ZBA.js";import"./chunk-6K7P7RRW.js";import"./chunk-7LRMKXZV.js";import"./chunk-BCREO4Q5.js";import"./chunk-E5R4OI7X.js";import{n as j}from"./chunk-BNUHB4AP.js";import"./chunk-ZGLJFDS6.js";import"./chunk-RSDQHAJX.js";import"./chunk-QMDBAMTG.js";import"./chunk-NWBXT4EB.js";import"./chunk-MMYIAMQR.js";import"./chunk-UHTPPTOJ.js";import"./chunk-LP5GLSKB.js";import{b as F}from"./chunk-LTDZH3EN.js";import"./chunk-3SBMUUA6.js";import"./chunk-II7TJXWX.js";import"./chunk-X7Z55FTO.js";import"./chunk-B66V4PSA.js";import{a as D}from"./chunk-A4HCVMB4.js";import"./chunk-AANS6QE5.js";import"./chunk-RMOOROEO.js";import"./chunk-ZP7G4HN4.js";import"./chunk-W3WDPWBE.js";import"./chunk-43GG6PFR.js";import"./chunk-MLSR6YE6.js";import"./chunk-JPDAKIWT.js";import"./chunk-D62JNIRP.js";import"./chunk-3DV77WOO.js";import"./chunk-NJG4JJ4L.js";import{g as u}from"./chunk-3T7TAUC2.js";var I,z;(function(e){e[e.None=0]="None",e[e.Int16=1]="Int16",e[e.Int32=2]="Int32"})(I||(I={})),function(e){e[e.Replace=0]="Replace",e[e.Outside=1]="Outside",e[e.Inside=2]="Inside",e[e.Finished=3]="Finished"}(z||(z={}));function $(){return C||(C=new Promise(e=>import("./chunk-HWMHWIOL.js").then(t=>t.i).then(({default:t})=>{let i=t({locateFile:oe,onRuntimeInitialized:()=>e(i)});delete i.then})).catch(e=>{throw e})),C}function oe(e){return D(`esri/libs/i3s/${e}`)}var C;var G,y,W,q,K;(function(e){e[e.Unmodified=0]="Unmodified",e[e.Culled=1]="Culled",e[e.NotChecked=2]="NotChecked"})(G||(G={})),function(e){e[e.Unmodified=0]="Unmodified",e[e.PotentiallyModified=1]="PotentiallyModified",e[e.Culled=2]="Culled",e[e.Unknown=3]="Unknown",e[e.NotChecked=4]="NotChecked"}(y||(y={}));(function(e){e[e.Unknown=0]="Unknown",e[e.Uncached=1]="Uncached",e[e.Cached=2]="Cached"})(W||(W={})),function(e){e[e.None=0]="None",e[e.MaxScreenThreshold=1]="MaxScreenThreshold",e[e.ScreenSpaceRelative=2]="ScreenSpaceRelative",e[e.RemovedFeatureDiameter=3]="RemovedFeatureDiameter",e[e.DistanceRangeFromDefaultCamera=4]="DistanceRangeFromDefaultCamera"}(q||(q={})),function(e){e[e.Hole=0]="Hole",e[e.Leaf=1]="Leaf"}(K||(K={}));function Ae(e){return u(this,null,function*(){o=yield b();let t=[e.geometryBuffer];return{result:Q(o,e,t),transferList:t}})}function Le(e){return u(this,null,function*(){o=yield b();let t=[e.geometryBuffer],{geometryBuffer:i}=e,r=i.byteLength,a=o._malloc(r),d=new Uint8Array(o.HEAPU8.buffer,a,r);d.set(new Uint8Array(i));let c=o.dracoDecompressPointCloudData(a,d.byteLength);if(o._free(a),c.error.length>0)throw new Error(`i3s.wasm: ${c.error}`);let f=c.featureIds?.length>0?c.featureIds.slice():null,s=c.positions.slice();return f&&t.push(f.buffer),t.push(s.buffer),{result:{positions:s,featureIds:f},transferList:t}})}function Ue(e){return u(this,null,function*(){yield b(),re(e);let t={buffer:e.buffer};return{result:t,transferList:[t.buffer]}})}function Fe(e){return u(this,null,function*(){yield b(),ie(e)})}function Ce(e){return u(this,null,function*(){o=yield b(),o.setLegacySchema(e.context,e.jsonSchema)})}function Oe(e){return u(this,null,function*(){let{localMatrix:t,origin:i,positions:r,vertexSpace:a,localMode:d}=e,c=F.fromJSON(e.inSpatialReference),f=F.fromJSON(e.outSpatialReference),s,[{projectBuffer:w},{initializeProjection:A}]=yield Promise.all([import("./chunk-4CKSRPER.js"),import("./chunk-FJTJ6LPN.js")]);yield A(c,f);let R=[0,0,0];if(!w(i,c,0,R,f,0,1))throw new Error("Failed to project");if(a.type==="georeferenced"&&a.origin==null){if(s=new Float64Array(r.length),!w(r,c,0,s,f,0,s.length/3))throw new Error("Failed to project")}else{let l=a.type==="georeferenced"?V.fromJSON(a):k.fromJSON(a),{project:m}=yield import("./chunk-BFZ65CQO.js"),h=m({positions:r,transform:t?{localMatrix:t}:void 0,vertexSpace:l,inSpatialReference:c,outSpatialReference:f,localMode:d});if(!h)throw new Error("Failed to project");s=J(h)}let v=s.length,[S,M,x]=R;for(let l=0;l<v;l+=3)s[l]-=S,s[l+1]-=M,s[l+2]-=x;return{result:{projected:s,original:r,projectedOrigin:R},transferList:[s.buffer,r.buffer]}})}function Te(i){return u(this,arguments,function*({normalMatrix:e,normals:t}){let r=new Float32Array(t.length);return H(r,t,e),j(e)&&Y(r,r),{result:{transformed:r,original:t},transferList:[r.buffer,t.buffer]}})}function Pe(e){X(e)}var E,o;function ie(e){if(!o)return;let t=e.modifications,i=o._malloc(8*t.length),r=new Float64Array(o.HEAPU8.buffer,i,t.length);for(let a=0;a<t.length;++a)r[a]=t[a];o.setModifications(e.context,i,t.length,e.isGeodetic),o._free(i)}function Q(e,t,i){let{context:r,globalTrafo:a,mbs:d,obbData:c,elevationOffset:f,geometryBuffer:s,geometryDescriptor:w,indexToVertexProjector:A,vertexToRenderProjector:R}=t,v=e._malloc(s.byteLength),S=33,M=e._malloc(S*Float64Array.BYTES_PER_ELEMENT),x=new Uint8Array(e.HEAPU8.buffer,v,s.byteLength);x.set(new Uint8Array(s));let l=new Float64Array(e.HEAPU8.buffer,M,S);N(l,[NaN,NaN,NaN]);let m=l.byteOffset+3*l.BYTES_PER_ELEMENT,h=new Float64Array(l.buffer,m);N(h,a),m+=16*l.BYTES_PER_ELEMENT,h=new Float64Array(l.buffer,m),N(h,d),m+=4*l.BYTES_PER_ELEMENT,c&&(h=new Float64Array(l.buffer,m),N(h,c));let O=w,Z={isDraco:!1,isLegacy:!1,color:t.layouts.some(p=>p.some(g=>g.name==="color")),normal:t.needNormals&&t.layouts.some(p=>p.some(g=>g.name==="normalCompressed")),uv0:t.layouts.some(p=>p.some(g=>g.name==="uv0")),uvRegion:t.layouts.some(p=>p.some(g=>g.name==="uvRegion")),featureIndex:O.featureIndex},n=e.process(r,!!t.obbData,v,x.byteLength,O,Z,M,f,A,R,t.normalReferenceFrame);if(e._free(M),e._free(v),n.error.length>0)throw new Error(`i3s.wasm: ${n.error}`);if(n.discarded)return null;let L=n.componentOffsets.length>0?n.componentOffsets.slice():null,U=n.featureIds.length>0?n.featureIds.slice():null,ee=n.anchorIds.length>0?Array.from(n.anchorIds):null,te=n.anchors.length>0?Array.from(n.anchors):null,T=n.interleavedVertedData.slice().buffer,P=n.indicesType===I.Int16?new Uint16Array(n.indices.buffer,n.indices.byteOffset,n.indices.byteLength/2).slice():new Uint32Array(n.indices.buffer,n.indices.byteOffset,n.indices.byteLength/4).slice(),_=n.positions.slice(),B=n.positionIndicesType===I.Int16?new Uint16Array(n.positionIndices.buffer,n.positionIndices.byteOffset,n.positionIndices.byteLength/2).slice():new Uint32Array(n.positionIndices.buffer,n.positionIndices.byteOffset,n.positionIndices.byteLength/4).slice(),ne={layout:t.layouts[0],interleavedVertexData:T,indices:P,hasColors:n.hasColors,hasModifications:n.hasModifications,positionData:{data:_,indices:B}};return U&&i.push(U.buffer),L&&i.push(L.buffer),i.push(T),i.push(P.buffer),i.push(_.buffer),i.push(B.buffer),{componentOffsets:L,featureIds:U,anchorIds:ee,anchors:te,transformedGeometry:ne,obb:n.obb,globalTrafo:a}}function _e(e){return e===0?y.Unmodified:e===1?y.PotentiallyModified:e===2?y.Culled:y.Unknown}function re(e){if(!o)return;let{context:t,buffer:i}=e,r=o._malloc(i.byteLength),a=i.byteLength/Float64Array.BYTES_PER_ELEMENT,d=new Float64Array(o.HEAPU8.buffer,r,a),c=new Float64Array(i);d.set(c),o.filterOBBs(t,r,a),c.set(d),o._free(r)}function X(e){o&&o.destroy(e)===0&&(o=null)}function N(e,t){for(let i=0;i<t.length;++i)e[i]=t[i]}function Be(){return u(this,null,function*(){o||(yield b())})}function b(){return o?Promise.resolve(o):(E||(E=$().then(e=>(o=e,E=null,o))),E)}var De={transform:(e,t)=>o&&Q(o,e,t),destroy:X};export{Pe as destroyContext,Le as dracoDecompressPointCloudData,Ue as filterObbsForModifications,re as filterObbsForModificationsSync,Be as initialize,_e as interpretObbModificationResults,Ae as process,Oe as project,Ce as setLegacySchema,Fe as setModifications,ie as setModificationsSync,De as test,Te as transformNormals};