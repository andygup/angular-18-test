import{a as o}from"./chunk-7OXEO4DH.js";import{i as c,j as p}from"./chunk-AWFXY4DH.js";import"./chunk-35C65O7M.js";import"./chunk-FQTXYWH5.js";import"./chunk-KLXERNY4.js";import"./chunk-ZFWKCYYL.js";import"./chunk-ZGSGY25Q.js";import{b as u}from"./chunk-N75S7AVH.js";import{d as n,f as i,g as m}from"./chunk-QW4FGXMK.js";import"./chunk-GDTXLKQK.js";import"./chunk-YNFZN34N.js";import"./chunk-SHSMFEO2.js";import"./chunk-V2KSICSA.js";import"./chunk-2ETW6ZBA.js";import"./chunk-6K7P7RRW.js";import"./chunk-7LRMKXZV.js";import"./chunk-BCREO4Q5.js";import"./chunk-BNUHB4AP.js";import"./chunk-ZGLJFDS6.js";import"./chunk-RSDQHAJX.js";import"./chunk-NWBXT4EB.js";import"./chunk-4R2OFZPD.js";import"./chunk-WBI2AIMN.js";import"./chunk-FKQYBEPG.js";import"./chunk-ZHAVTBSG.js";import"./chunk-SBO2F6VY.js";import"./chunk-UHTPPTOJ.js";import"./chunk-LP5GLSKB.js";import"./chunk-LTDZH3EN.js";import"./chunk-3SBMUUA6.js";import"./chunk-II7TJXWX.js";import"./chunk-X7Z55FTO.js";import"./chunk-B66V4PSA.js";import"./chunk-A4HCVMB4.js";import"./chunk-AANS6QE5.js";import"./chunk-RMOOROEO.js";import"./chunk-ZP7G4HN4.js";import"./chunk-W3WDPWBE.js";import"./chunk-43GG6PFR.js";import"./chunk-MLSR6YE6.js";import"./chunk-JPDAKIWT.js";import"./chunk-D62JNIRP.js";import"./chunk-3DV77WOO.js";import"./chunk-NJG4JJ4L.js";import{g as t}from"./chunk-3T7TAUC2.js";var l="Media Layer",E="media-layer-save",w="media-layer-save-as",y=["media-layer:unsupported-source"];function f(e){return{isValid:e.type==="media",errorMessage:"Layer.type should be 'media'"}}function d(e){return u(e,"portal-item",!0)}function v(e){return e.layerJSON}function x(e,r){return t(this,null,function*(){r.extent=e.fullExtent?yield i(e.fullExtent):null})}function A(e,r){return t(this,null,function*(){r.title||=e.title,yield x(e,r),n(r,m.METADATA)})}function P(e,r){return t(this,null,function*(){return c({layer:e,itemType:l,validateLayer:f,createJSONContext:a=>d(a),createItemData:v,errorNamePrefix:E,supplementalUnsupportedErrors:y,setItemProperties:x,saveResources:(a,s)=>o(e.resourceReferences,s)},r)})}function S(e,r,a){return t(this,null,function*(){return p({layer:e,itemType:l,validateLayer:f,createJSONContext:s=>d(s),createItemData:v,errorNamePrefix:w,supplementalUnsupportedErrors:y,newItem:r,setItemProperties:A,saveResources:(s,I)=>o(e.resourceReferences,I)},a)})}export{P as save,S as saveAs};