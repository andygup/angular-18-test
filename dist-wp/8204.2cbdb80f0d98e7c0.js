"use strict";(self.webpackChunkangular_18_test=self.webpackChunkangular_18_test||[]).push([[8204],{98204:(E,S,e)=>{e.r(S),e.d(S,{default:()=>I});var d,l=e(10467),O=(e(21152),e(93822)),n=e(21980),A=e(99263),m=e(40275),J=e(78400),u=e(40018),v=e(48104),y=e(50444),N=e(39181),h=e(8189),g=(e(35150),e(3248),e(40707),e(5922),e(15463)),P=e(76576),B=e(55490);let c=d=class extends B.A{constructor(){super(...arguments),this.type="identity"}clone(){return new d}};(0,h._)([(0,g.e)({IdentityXform:"identity"})],c.prototype,"type",void 0),c=d=(0,h._)([(0,P.$)("esri.layers.support.rasterTransforms.IdentityTransform")],c);const z=c;var T=e(47168);const p={GCSShiftXform:N.A,IdentityXform:z,PolynomialXform:T.A};Object.keys(p);var G=e(54636),R=e(91551),f=e(28067),C=e(1749);class I{convertVectorFieldData(t){const s=n.A.fromJSON(t.pixelBlock),o=(0,y.FI)(s,t.type);return Promise.resolve(null!=o?o.toJSON():null)}computeStatisticsHistograms(t){const s=n.A.fromJSON(t.pixelBlock),o=(0,v.eH)(s);return Promise.resolve(o)}decode(t){return(0,l.A)(function*(){const s=yield(0,A.D)(t.data,t.options);return s&&s.toJSON()})()}symbolize(t){t.pixelBlock=n.A.fromJSON(t.pixelBlock),t.extent=t.extent?f.A.fromJSON(t.extent):null;const s=this.symbolizer.symbolize(t);return Promise.resolve(null!=s?s.toJSON():null)}updateSymbolizer(t){var s=this;return(0,l.A)(function*(){s.symbolizer=G.A.fromJSON(t.symbolizerJSON),t.histograms&&"rasterStretch"===s.symbolizer?.rendererJSON.type&&(s.symbolizer.rendererJSON.histograms=t.histograms)})()}updateRasterFunction(t){var s=this;return(0,l.A)(function*(){s.rasterFunction=(0,J.vt)(t.rasterFunctionJSON)})()}process(t){var s=this;return(0,l.A)(function*(){const o=s.rasterFunction.process({extent:f.A.fromJSON(t.extent),primaryPixelBlocks:t.primaryPixelBlocks.map(r=>null!=r?n.A.fromJSON(r):null),primaryPixelSizes:t.primaryPixelSizes?.map(r=>null!=r?C.A.fromJSON(r):null),primaryRasterIds:t.primaryRasterIds});return null!=o?o.toJSON():null})()}stretch(t){const s=this.symbolizer.simpleStretch(n.A.fromJSON(t.srcPixelBlock),t.stretchParams);return Promise.resolve(s?.toJSON())}estimateStatisticsHistograms(t){const s=(0,v.f4)(n.A.fromJSON(t.srcPixelBlock));return Promise.resolve(s)}split(t){const s=(0,m.lD)(n.A.fromJSON(t.srcPixelBlock),t.tileSize,t.maximumPyramidLevel??0,!1===t.useBilinear);return s&&s.forEach((o,r)=>{s.set(r,o?.toJSON())}),Promise.resolve(s)}clipTile(t){const s=n.A.fromJSON(t.pixelBlock),o=(0,m.J$)({...t,pixelBlock:s});return Promise.resolve(o?.toJSON())}mosaicAndTransform(t){return(0,l.A)(function*(){const s=t.srcPixelBlocks.map(x=>x?new n.A(x):null),o=(0,m.z7)(s,t.srcMosaicSize,{blockWidths:t.blockWidths,alignmentInfo:t.alignmentInfo,clipOffset:t.clipOffset,clipSize:t.clipSize});let r,i=o;return t.coefs&&(i=(0,m.$i)(o,t.destDimension,t.coefs,t.sampleSpacing,t.interpolation)),t.projectDirections&&t.gcsGrid&&(r=(0,m.QF)(t.destDimension,t.gcsGrid),i=(0,y.Y2)(i,t.isUV?"vector-uv":"vector-magdir",r)),{pixelBlock:i?.toJSON(),localNorthDirections:r}})()}createFlowMesh(t,s){return(0,l.A)(function*(){const o={data:new Float32Array(t.flowData.buffer),mask:new Uint8Array(t.flowData.maskBuffer),width:t.flowData.width,height:t.flowData.height},{vertexData:r,indexData:i}=yield(0,R.CW)(t.meshType,t.simulationSettings,o,s.signal);return{result:{vertexBuffer:r.buffer,indexBuffer:i.buffer},transferList:[r.buffer,i.buffer]}})()}getProjectionOffsetGrid(t){return(0,l.A)(function*(){const s=f.A.fromJSON(t.projectedExtent),o=f.A.fromJSON(t.srcBufferExtent);let r=null;t.datumTransformationSteps&&(r=new O.A({steps:t.datumTransformationSteps})),(t.includeGCSGrid||(0,u.xh)(s.spatialReference,o.spatialReference,r))&&(yield(0,u.Hh)());const i=t.rasterTransform?function F(a){if(!a?.type)return null;const s=p[a?.type];if(s){const o=new s;return o.read(a),o}return null}(t.rasterTransform):null;return(0,u.l0)({...t,projectedExtent:s,srcBufferExtent:o,datumTransformation:r,rasterTransform:i})})()}}}}]);