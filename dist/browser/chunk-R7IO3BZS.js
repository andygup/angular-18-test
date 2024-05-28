import{a as R}from"./chunk-7OXEO4DH.js";import{a as v}from"./chunk-35C65O7M.js";import{a as K}from"./chunk-FQTXYWH5.js";import"./chunk-KLXERNY4.js";import{a as _,b}from"./chunk-ZFWKCYYL.js";import"./chunk-ZGSGY25Q.js";import{a as $,b as j}from"./chunk-VAOQOXJE.js";import{b as L}from"./chunk-O3JFLEEW.js";import{b as V}from"./chunk-N75S7AVH.js";import{a as p,b as f,d as n,g as w}from"./chunk-QW4FGXMK.js";import{k as C}from"./chunk-CGEI3ID7.js";import"./chunk-YF3AUCDJ.js";import"./chunk-TUM5YCRC.js";import"./chunk-GDTXLKQK.js";import"./chunk-YNFZN34N.js";import"./chunk-SHSMFEO2.js";import"./chunk-V2KSICSA.js";import{d as y}from"./chunk-6A4M7X3R.js";import{d as M,e as G,f as E}from"./chunk-Y3PZSOWT.js";import"./chunk-KLDBOMH5.js";import"./chunk-USX74UBG.js";import"./chunk-LDBOA2H7.js";import"./chunk-3CS3BPVL.js";import"./chunk-AQ74ANSJ.js";import"./chunk-R2K3CL3U.js";import"./chunk-SAOUSUZE.js";import{e as D,f as g}from"./chunk-F7Q25XKV.js";import"./chunk-L2DEVDHE.js";import"./chunk-5QLB7ZJ7.js";import"./chunk-2ETW6ZBA.js";import"./chunk-6K7P7RRW.js";import"./chunk-7LRMKXZV.js";import"./chunk-BCREO4Q5.js";import"./chunk-BNUHB4AP.js";import"./chunk-ZGLJFDS6.js";import"./chunk-RSDQHAJX.js";import"./chunk-Q6TYOK45.js";import"./chunk-RZA5H63B.js";import"./chunk-Y4PMIX35.js";import"./chunk-KVCIO4DX.js";import"./chunk-NWBXT4EB.js";import{a as P}from"./chunk-4R2OFZPD.js";import{c as B}from"./chunk-WBI2AIMN.js";import"./chunk-FKQYBEPG.js";import"./chunk-ZHAVTBSG.js";import"./chunk-SBO2F6VY.js";import{h as T}from"./chunk-UHTPPTOJ.js";import"./chunk-LP5GLSKB.js";import{b as I}from"./chunk-LTDZH3EN.js";import{n as A}from"./chunk-3SBMUUA6.js";import"./chunk-II7TJXWX.js";import"./chunk-X7Z55FTO.js";import"./chunk-B66V4PSA.js";import"./chunk-A4HCVMB4.js";import{g as W,l as O}from"./chunk-AANS6QE5.js";import"./chunk-RMOOROEO.js";import"./chunk-ZP7G4HN4.js";import"./chunk-W3WDPWBE.js";import"./chunk-43GG6PFR.js";import"./chunk-MLSR6YE6.js";import"./chunk-JPDAKIWT.js";import"./chunk-D62JNIRP.js";import{u as m}from"./chunk-3DV77WOO.js";import"./chunk-NJG4JJ4L.js";import{g as s}from"./chunk-3T7TAUC2.js";var ne=["NatGeo_World_Map","Ocean_Basemap","USA_Topo_Maps","World_Imagery","World_Street_Map","World_Terrain_Base","World_Topo_Map","World_Hillshade","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Reference/World_Boundaries_and_Places","Reference/World_Reference_Overlay","Reference/World_Transportation"].map(a=>a.toLowerCase());function Ye(a,e,o){return s(this,null,function*(){o??={},se(a,e),yield y(()=>!e.updatingFromView),yield e.load(),yield Q(e),yield _(e),yield z(a,e);let r=e.portalItem,{json:t,jsonContext:i}=yield H(e,r);return b(i,{errorName:`${a.name}:save`},o),yield X(e,r),yield Te(a,e,r,t,i),yield Promise.all([e.updateItemThumbnail(),R(e.resourceReferences,i)]),r})}function H(a,e){return s(this,null,function*(){let o=V(e,"web-map",!0),r=a.write({},o);return yield Promise.all(o.resources.pendingOperations),{json:r,jsonContext:o}})}function Ze(a,e,o,r){return s(this,null,function*(){r??={};let t=pe(a,o);yield y(()=>!e.updatingFromView),yield e.load(),le(a,e),yield Q(e),yield _(e),yield z(a,e);let{json:i,jsonContext:l}=yield H(e,t);b(l,{errorName:`${a.name}:save`},r),yield de(e,t);let c=e.getThumbnailState();return(yield Pe(a,e,t,i,l,r))&&(e.resourceReferences.portalItem=t),e.restoreThumbnailFromState(c),yield Promise.all([e.updateItemThumbnail(),R(e.resourceReferences,l)]),t})}function se(a,e){if(!e.portalItem)throw new m(`${a.name}:portal-item-not-set`,"Portal item to save to has not been set on the WebMap");v(e.portalItem),q(a,e.portalItem)}function q(a,e){if(e.type!==a.itemType)throw new m(`${a.name}:portal-item-wrong-type`,`Portal item needs to have type "${a.itemType}"`)}function le(a,e){let o=e.allLayers.filter(r=>r.type==="unsupported"&&r.resourceInfo?.layerType==="KnowledgeGraphLayer");if(o.length)throw new m(`${a.name}:save-as-invalid-configuration`,`Failed to save a copy of ${a.name} to prevent persisting invalid configuration. See 'details.layers'`,{layers:o.toArray()})}function z(a,e){return s(this,null,function*(){if(!e.basemap?.baseLayers.length)throw new m(`${a.name}:save`,"Map does not have a valid basemap with a base layer.");let o=null;if(yield y(()=>{let r=E(e.initialViewProperties,e.basemap);return o=r.spatialReference,!r.updating}),!A(o,e.initialViewProperties.spatialReference))throw new m(`${a.name}:save`,"The spatial reference of the basemap is not compatible with the one from the map.",{expected:e.initialViewProperties.spatialReference,actual:o})})}function pe(a,e){let o=P.from(e);return o.id&&(o=o.clone(),o.id=null),o.type||(o.type=a.itemType),o.portal||(o.portal=B.getDefault()),v(o),q(a,o),o}function Q(a){let e=[];return a.basemap&&e.push(a.basemap.load()),a.ground&&e.push(a.ground.load()),Promise.allSettled(e).then(()=>{})}function X(a,e){return s(this,null,function*(){e.extent=yield Se(a.portalItem,a.initialViewProperties.viewpoint.targetGeometry),yield fe(a,e)})}var ce=w.JSAPI,Y="CollectorDisabled",k="Collector",x="Data Editing",Z="OfflineDisabled",F="Offline",ee="Workforce Project",ae="Workforce Worker",oe="Workforce Dispatcher",me="Offline Map Areas",ue="FieldMapsDisabled",N=w.DEVELOPER_BASEMAP,U="UtilityNetwork",J="IPS";function de(a,e){return s(this,null,function*(){n(e,Y),n(e,ue),n(e,w.METADATA),n(e,Z),n(e,me),n(e,oe),n(e,ee),n(e,ae),yield X(a,e)})}function fe(a,e){return s(this,null,function*(){p(e,ce),yield ye(a),he(a,e),ge(a,e),ve(a,e),_e(a,e),be(a,e),Re(a,e),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter((o,r,t)=>t.indexOf(o)===r))})}function ye(a){let e=S(a).map(o=>o.load()).toArray();return Promise.allSettled(e).then(()=>{})}function S(a){return a.allLayers.concat(a.allTables)}function re(a){return S(a).some(e=>e.loaded&&g(e)&&e.capabilities.operations.supportsEditing&&e.editingEnabled&&(e.type!=="subtype-group"||e.sublayers.some(o=>o.editingEnabled)))}function we(a){return S(a).filter(e=>e.type!=="group").every(e=>e.loaded&&Ae(a,e))}function he(a,e){f(e,Y)||f(e,ee)||f(e,ae)||f(e,oe)||!re(a)?n(e,k):p(e,k)}function ge(a,e){re(a)?p(e,x):n(e,x)}function ve(a,e){!f(e,Z)&&we(a)?p(e,F):n(e,F)}function _e(a,e){M(a.basemap)?p(e,N):n(e,N)}function be(a,e){a.utilityNetworks?.length?p(e,U):n(e,U)}function Re(a,e){a.ipsInfo?p(e,J):n(e,J)}function Se(a,e){return s(this,null,function*(){let o=e.clone().normalize(),r;if(o.length>1)for(let t of o)r?t.width>r.width&&(r=t):r=t;else r=o[0];return We(a,r)})}function We(a,e){return s(this,null,function*(){let o=e.spatialReference;if(o.isWGS84)return e.clone();if(o.isWebMercator)return T(e);let{getGeometryServiceURL:r}=yield import("./chunk-625T7G5Y.js"),t=yield r(a),i=new $({geometries:[e],outSpatialReference:I.WGS84});return(yield j(t,i))[0]})}function Oe(a){return D(a)||a.type==="map-notes"||a.type==="route"}function Ae(a,e){return g(e)&&e.capabilities.operations.supportsSync||Oe(e)&&!e.portalItem||(e.type==="tile"||e.type==="vector-tile")&&(e.capabilities.operations.supportsExportTiles||Ie(e)||G(e))&&e.spatialReference.equals(a.initialViewProperties.spatialReference)}function Ie(a){return a.type==="tile"&&C(a.url)&&ne.some(e=>a.url?.toLowerCase().includes("/"+e+"/"))}function Te(a,e,o,r,t){return s(this,null,function*(){yield o.update({data:r}),te(a,e,o,r,t)})}function Pe(a,e,o,r,t,i){return s(this,null,function*(){let l=e.portalItem,c={item:l,authenticated:!(!l?.id||!l.portal.user)},u=o.portal;yield u.signIn();let{copyAllowed:d,itemReloaded:h}=yield Le(c,u);if(c.authenticated||=h,!d)throw new m(`${a.name}:save-as-copy-not-allowed`,"Owner of this map does not allow others to save a copy");let ie=yield Ce(o,c,r,i);return e.portalItem=o,te(a,e,o,r,t),ie})}function Le(a,e){return s(this,null,function*(){let{item:o,authenticated:r}=a;return o?.id&&o.typeKeywords?.includes("useOnly")?o.portal.portalHostname!==e.portalHostname?{copyAllowed:!1,itemReloaded:!1}:(r||(yield o.reload()),{copyAllowed:o.itemControl==="admin"||o.itemControl==="update",itemReloaded:!0}):{copyAllowed:!0,itemReloaded:!1}})}function Ce(a,e,o,r){return s(this,null,function*(){let t=a.portal,{item:i}=e,{folder:l,copyAllResources:c}=r,u=!1;if(c&&i?.id&&O(i.portal.url,t.url)&&parseInt(i.portal.currentVersion,10)>=2023){let{total:d}=yield i.fetchResources();u=!!d}if(u){let d=yield i.copy({copyResources:"all",folder:l});a.id=d.id,a.portal=d.portal;let h=a.toJSON();yield a.load(),a.read(h),yield a.update({data:o})}else yield t.user?.addItem({item:a,folder:l,data:o});return u})}function te(a,e,o,r,t){L.prototype.read.call(e,{version:r.version,authoringApp:r.authoringApp,authoringAppVersion:r.authoringAppVersion},{origin:a.origin,ignoreDefaults:!0,url:o.itemUrl?W(o.itemUrl):void 0}),K(t),e.resourceInfo=r}export{H as createJSON,Ye as save,Ze as saveAs};