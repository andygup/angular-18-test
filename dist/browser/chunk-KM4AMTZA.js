import{a as v}from"./chunk-SYNRDAMR.js";import{b as y}from"./chunk-RZA5H63B.js";import{a as g}from"./chunk-X7Z55FTO.js";import{D as u,H as i}from"./chunk-RMOOROEO.js";import{S as d}from"./chunk-ZP7G4HN4.js";import{a}from"./chunk-W3WDPWBE.js";import{q as p,y as c}from"./chunk-43GG6PFR.js";import{s as l}from"./chunk-3DV77WOO.js";import{g as m}from"./chunk-3T7TAUC2.js";var n=new y,o=new WeakMap;function b(r){R(r)&&n.push(new WeakRef(r))}function I(r){let e=n.find(s=>s.deref()===r);e&&n.remove(e)}function R(r){return r!=null&&typeof r=="object"&&"refreshInterval"in r&&"refresh"in r}function w(r,e){return Number.isFinite(r)&&Number.isFinite(e)?e<=0?r:w(e,r%e):0}var h=0,f=0;function T(){let r=Date.now(),e=!1;for(let s of n){let t=s.deref();t?t.refreshInterval&&r-(o.get(t)??0)+5>=6e4*t.refreshInterval&&(o.set(t,r),t.refresh(r)):e=!0}if(e)for(let s=n.length-1;s>=0;s--)n.at(s).deref()||n.removeAt(s)}u(()=>{let r=Date.now(),e=0;for(let s of n){let t=s.deref();t&&(e=w(Math.round(6e4*t.refreshInterval),e),t.refreshInterval?o.get(t)||o.set(t,r):o.delete(t))}if(e!==f){if(f=e,clearInterval(h),f===0)return void(h=0);h=setInterval(T,f)}});var L=.1,B=r=>{let e=class extends r{constructor(...s){super(...s),this.refreshInterval=0,this.refreshTimestamp=0,this._debounceHasDataChanged=c(()=>this.hasDataChanged()),this.when().then(()=>{this.destroyed||b(this)},()=>{})}destroy(){I(this)}castRefreshInterval(s){return s>=L?s:s<=0?0:L}get refreshParameters(){return{_ts:this.refreshTimestamp||null}}refresh(s=Date.now()){p(this._debounceHasDataChanged()).then(t=>{t&&this._set("refreshTimestamp",s),this.emit("refresh",{dataChanged:t})},t=>{l.getLogger(this).error(t),this.emit("refresh",{dataChanged:!1,error:t})})}hasDataChanged(){return m(this,null,function*(){return!0})}get test(){}};return a([i({type:Number,json:{write:!0,origins:{"web-scene":{write:{enabled:!0,layerContainerTypes:v}}}}})],e.prototype,"refreshInterval",void 0),a([g("refreshInterval")],e.prototype,"castRefreshInterval",null),a([i({readOnly:!0})],e.prototype,"refreshTimestamp",void 0),a([i({readOnly:!0})],e.prototype,"refreshParameters",null),e=a([d("esri.layers.mixins.RefreshableLayer")],e),e};export{B as a};