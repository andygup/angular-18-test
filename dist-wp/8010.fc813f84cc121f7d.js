"use strict";(self.webpackChunkangular_18_test=self.webpackChunkangular_18_test||[]).push([[8010],{48010:(v,d,i)=>{i.r(d),i.d(d,{default:()=>L});var l=i(10467),h=i(48499);function c(e,t){return t.push(e.buffer),{buffer:e.buffer,layout:new h.l5(e.layout)}}var p=i(62447),g=i(66273),o=i(15096);class L{extract(t){return(0,l.A)(function*(){const n=f(t),s=(0,o.o6)(n),a=[n.data.buffer];return{result:y(s,a),transferList:a}})()}extractComponentsEdgeLocations(t){return(0,l.A)(function*(){const n=f(t),s=(0,o.hx)(n.data,n.skipDeduplicate,n.indices,n.indicesLength),u=[];return{result:c((0,g.K)(s,b).regular.instancesData,u),transferList:u}})()}extractEdgeLocations(t){return(0,l.A)(function*(){const n=f(t),s=(0,o.hx)(n.data,n.skipDeduplicate,n.indices,n.indicesLength),u=[];return{result:c((0,g.K)(s,w).regular.instancesData,u),transferList:u}})()}}function f(e){return{data:p.I$.createView(e.dataBuffer),indices:"Uint32Array"===e.indicesType?new Uint32Array(e.indices):"Uint16Array"===e.indicesType?new Uint16Array(e.indices):e.indices,indicesLength:e.indicesLength,writerSettings:e.writerSettings,skipDeduplicate:e.skipDeduplicate}}function y(e,t){return t.push(e.regular.lodInfo.lengths.buffer),t.push(e.silhouette.lodInfo.lengths.buffer),{regular:{instancesData:c(e.regular.instancesData,t),lodInfo:{lengths:e.regular.lodInfo.lengths.buffer}},silhouette:{instancesData:c(e.silhouette.instancesData,t),lodInfo:{lengths:e.silhouette.lodInfo.lengths.buffer}},averageEdgeLength:e.averageEdgeLength}}const w=new class D{allocate(t){return o.Jb.createBuffer(t)}trim(t,n){return t.slice(0,n)}write(t,n,s){t.position0.setVec(n,s.position0),t.position1.setVec(n,s.position1)}},b=new class I{allocate(t){return o.HY.createBuffer(t)}trim(t,n){return t.slice(0,n)}write(t,n,s){t.position0.setVec(n,s.position0),t.position1.setVec(n,s.position1),t.componentIndex.set(n,s.componentIndex)}}}}]);