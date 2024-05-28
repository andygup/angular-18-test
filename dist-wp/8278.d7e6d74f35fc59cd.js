"use strict";(self.webpackChunkangular_18_test=self.webpackChunkangular_18_test||[]).push([[8278],{8278:(x,_,s)=>{s.r(_),s.d(_,{CalciteIcon:()=>t,defineCustomElement:()=>f});var a=s(31032);const t=a.I,f=a.d},31032:(x,_,s)=>{s.d(_,{I:()=>C,d:()=>D});var a=s(10467),t=s(58560),f=s(32597),b=s(21090);const I_flipRtl="flip-rtl",p={},n={},h={s:16,m:24,l:32};function O(){return(O=(0,a.A)(function*({icon:r,scale:e}){const i=h[e],o=function w(r){const e=!isNaN(Number(r.charAt(0))),i=r.split("-");if(i.length>0){const l=/[a-z]/i;r=i.map((u,c)=>u.replace(l,function(d,g){return 0===c&&0===g?d:d.toUpperCase()})).join("")}return e?`i${r}`:r}(r),l="F"===o.charAt(o.length-1),c=`${l?o.substring(0,o.length-1):o}${i}${l?"F":""}`;if(p[c])return p[c];n[c]||(n[c]=fetch((0,t.OX)(`./assets/icon/${c}.json`)).then(d=>d.json()).catch(()=>(console.error(`"${c}" is not a valid calcite-ui-icon name`),"")));const v=yield n[c];return p[c]=v,v})).apply(this,arguments)}const C=(0,t.w$)(class extends t.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.icon=null,this.flipRtl=!1,this.scale="m",this.textLabel=void 0,this.pathData=void 0,this.visible=!1}connectedCallback(){this.waitUntilVisible(()=>{this.visible=!0,this.loadIconPathData()})}disconnectedCallback(){this.intersectionObserver?.disconnect(),this.intersectionObserver=null}componentWillLoad(){var e=this;return(0,a.A)(function*(){e.loadIconPathData()})()}render(){const{el:e,flipRtl:i,pathData:o,scale:l,textLabel:u}=this,c=(0,f.a)(e),v=h[l],d=!!u,g=[].concat(o||"");return(0,t.h)(t.xr,{key:"5eb4d26c41c6df7a4fe28e6647a452d4a91106a2","aria-hidden":(0,f.t)(!d),"aria-label":d?u:null,role:d?"img":null},(0,t.h)("svg",{key:"cd87fba0ba564d4a16ca5f18176d99b1f974b8fa","aria-hidden":"true",class:{[I_flipRtl]:"rtl"===c&&i,svg:!0},fill:"currentColor",height:"100%",viewBox:`0 0 ${v} ${v}`,width:"100%",xmlns:"http://www.w3.org/2000/svg"},g.map(E=>(0,t.h)("path","string"==typeof E?{d:E}:{d:E.d,opacity:"opacity"in E?E.opacity:1}))))}loadIconPathData(){var e=this;return(0,a.A)(function*(){const{icon:i,scale:o,visible:l}=e;if(!t.L2.isBrowser||!i||!l)return;const u=yield function m(r){return O.apply(this,arguments)}({icon:i,scale:o});i===e.icon&&(e.pathData=u)})()}waitUntilVisible(e){this.intersectionObserver=(0,b.c)("intersection",i=>{i.forEach(o=>{o.isIntersecting&&(this.intersectionObserver.disconnect(),this.intersectionObserver=null,e())})},{rootMargin:"50px"}),this.intersectionObserver?this.intersectionObserver.observe(this.el):e()}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{icon:["loadIconPathData"],scale:["loadIconPathData"]}}static get style(){return":host{display:inline-flex;color:var(--calcite-ui-icon-color)}:host([scale=s]){inline-size:16px;block-size:16px;min-inline-size:16px;min-block-size:16px}:host([scale=m]){inline-size:24px;block-size:24px;min-inline-size:24px;min-block-size:24px}:host([scale=l]){inline-size:32px;block-size:32px;min-inline-size:32px;min-block-size:32px}.flip-rtl{transform:scaleX(-1)}.svg{display:block}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-icon",{icon:[513],flipRtl:[516,"flip-rtl"],scale:[513],textLabel:[1,"text-label"],pathData:[32],visible:[32]},void 0,{icon:["loadIconPathData"],scale:["loadIconPathData"]}]);function D(){typeof customElements>"u"||["calcite-icon"].forEach(e=>{"calcite-icon"===e&&(customElements.get(e)||customElements.define(e,C))})}D()},21090:(x,_,s)=>{s.d(_,{c:()=>t});var a=s(58560);function t(b,I,p){if(!a.L2.isBrowser)return;const n=function f(b){class I extends window.MutationObserver{constructor(n){super(n),this.observedEntry=[],this.callback=n}observe(n,h){return this.observedEntry.push({target:n,options:h}),super.observe(n,h)}unobserve(n){const h=this.observedEntry.filter(m=>m.target!==n);this.observedEntry=[],this.callback(super.takeRecords(),this),this.disconnect(),h.forEach(m=>this.observe(m.target,m.options))}}return"intersection"===b?window.IntersectionObserver:"mutation"===b?I:window.ResizeObserver}(b);return new n(I,p)}}}]);