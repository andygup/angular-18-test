import{b as _,c as x}from"./chunk-VZCQ5OSW.js";import"./chunk-S4UJT4YQ.js";import"./chunk-CKGQR2CH.js";import"./chunk-4ZAXI7OO.js";import"./chunk-HBLTLHNB.js";import"./chunk-B7IX6UFG.js";import"./chunk-ZAQLF7TN.js";import"./chunk-4KGZTO2H.js";import"./chunk-2TKGGTPN.js";import"./chunk-OMJZXS5V.js";import"./chunk-2FWBXOKU.js";import"./chunk-TAD4ATBE.js";import"./chunk-XDRSKFBJ.js";import"./chunk-6A4M7X3R.js";import"./chunk-LDBOA2H7.js";import{b as h}from"./chunk-LW5IAFEX.js";import"./chunk-AQ74ANSJ.js";import"./chunk-R2K3CL3U.js";import"./chunk-SAOUSUZE.js";import"./chunk-VNBPSOCW.js";import"./chunk-CPGZIEVH.js";import"./chunk-L2DEVDHE.js";import"./chunk-5QLB7ZJ7.js";import"./chunk-2ETW6ZBA.js";import"./chunk-6K7P7RRW.js";import"./chunk-7LRMKXZV.js";import"./chunk-BCREO4Q5.js";import"./chunk-BNUHB4AP.js";import"./chunk-ZGLJFDS6.js";import"./chunk-RSDQHAJX.js";import{b as y}from"./chunk-RZA5H63B.js";import"./chunk-Y4PMIX35.js";import"./chunk-KVCIO4DX.js";import"./chunk-NWBXT4EB.js";import"./chunk-SBO2F6VY.js";import"./chunk-UHTPPTOJ.js";import"./chunk-LP5GLSKB.js";import"./chunk-LTDZH3EN.js";import"./chunk-3SBMUUA6.js";import"./chunk-X7Z55FTO.js";import"./chunk-B66V4PSA.js";import"./chunk-A4HCVMB4.js";import"./chunk-AANS6QE5.js";import{H as a}from"./chunk-RMOOROEO.js";import{S as u}from"./chunk-ZP7G4HN4.js";import{a as r}from"./chunk-W3WDPWBE.js";import{a as S,b as $,q as C,y as F}from"./chunk-43GG6PFR.js";import"./chunk-MLSR6YE6.js";import"./chunk-JPDAKIWT.js";import"./chunk-D62JNIRP.js";import"./chunk-VU5W7W6Y.js";import{s as b}from"./chunk-3DV77WOO.js";import"./chunk-NJG4JJ4L.js";import{g as v}from"./chunk-3T7TAUC2.js";var c=Symbol(),U=n=>{let e=class extends n{constructor(){super(...arguments),this.layerViews=new y,this._debouncedUpdate=F(()=>v(this,null,function*(){let{layer:i,parent:s}=this,d=s?.footprintLayerView,o=[],p=this._createQuery();if(p&&d){let{features:f}=yield d.queryFeatures(p);this.suspended||(o=f.map(w=>i.acquireLayer(w)))}this.removeHandles(c),this.addHandles(o,c)}))}get creatingLayerViews(){return this.view?.layerViewManager.isCreatingLayerViewsForLayer(this.layer)??!1}isUpdating(){return this.creatingLayerViews||this.layer.updating||this.layerViews.some(i=>i.updating)}enableLayerUpdates(){return $([this._updatingHandles.addWhen(()=>this.parent?.footprintLayerView?.dataUpdating===!1,()=>this.updateLayers()),this._updatingHandles.add(()=>[this.layer.maximumVisibleSublayers,this.layer.parent?.orderBy,this.parent?.footprintLayerView?.filter,this.parent?.footprintLayerView?.timeExtent,this.suspended],()=>this.updateLayers()),S(()=>this.removeHandles(c))])}updateLayers(){this.suspended?this.removeHandles(c):this._updatingHandles.addPromise(C(this._debouncedUpdate()).catch(i=>{b.getLogger(this).error(i)}))}_createQuery(){let i=this.parent?.footprintLayerView,s=this.layer?.parent;if(!i||!s||s.destroyed)return null;let{layer:{maximumVisibleSublayers:d},view:{scale:o}}=this,{itemTypeField:p,itemSourceField:f,itemNameField:w,minScaleField:g,maxScaleField:V,objectIdField:H,orderBy:I}=s,A=h(`${g} IS NULL OR ${o} <= ${g} OR ${g} = 0`,`${V} IS NULL OR ${o} >= ${V}`),l=I?.find(m=>m.field&&!m.valueExpression),t=i.createQuery();if(t.returnGeometry=!1,t.num=d,t.outFields=[H,f,w],t.where=h(t.where,A),this.unsupportedItemTypes!=null){let m=`${p} NOT IN (${this.unsupportedItemTypes.map(O=>`'${O}'`)})`;t.where=h(t.where,m)}return l?.field&&(t.orderByFields=[`${l.field} ${l.order==="descending"?"DESC":"ASC"}`],t.outFields.push(l.field)),t}};return r([a({readOnly:!0})],e.prototype,"creatingLayerViews",null),r([a()],e.prototype,"layer",void 0),r([a()],e.prototype,"layerViews",void 0),r([a({readOnly:!0})],e.prototype,"unsupportedItemTypes",void 0),r([a()],e.prototype,"parent",void 0),r([a({readOnly:!0})],e.prototype,"isUpdating",null),e=r([u("esri.views.layers.CatalogDynamicGroupLayerView")],e),e};var L=class extends U(_(x)){constructor(){super(...arguments),this.unsupportedItemTypes=["Scene Service"],this.layerViews=new y}attach(){this.addAttachHandles([this.layerViews.on("after-changes",()=>this._updateStageChildren()),this.enableLayerUpdates()])}detach(){this.container.removeAllChildren()}update(n){this.updateLayers()}viewChange(){}moveEnd(){this.requestUpdate()}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((n,e)=>this.container.addChildAt(n.container,e))}};L=r([u("esri.views.2d.layers.CatalogDynamicGroupLayerView2D")],L);var ie=L;export{ie as default};
