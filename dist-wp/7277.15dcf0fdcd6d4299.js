"use strict";(self.webpackChunkangular_18_test=self.webpackChunkangular_18_test||[]).push([[7277],{17277:(v,f,a)=>{a.r(f),a.d(f,{CalciteListItemGroup:()=>g,defineCustomElement:()=>l});var n=a(58560),c=a(9089),h=a(35274);const d=(0,n.w$)(class extends n.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInternalListItemGroupDefaultSlotChange=(0,n.lh)(this,"calciteInternalListItemGroupDefaultSlotChange",6),this.handleDefaultSlotChange=()=>{this.calciteInternalListItemGroupDefaultSlotChange.emit()},this.disabled=!1,this.filterHidden=!1,this.heading=void 0}connectedCallback(){(0,c.c)(this)}componentDidRender(){(0,c.u)(this)}disconnectedCallback(){(0,c.d)(this)}render(){const{disabled:r,heading:b}=this;return(0,n.h)(n.xr,{key:"aced6e7f4e0f88658a55973c6451bd3ade9a1095"},(0,n.h)(c.I,{key:"6a7e77734cc737dfc7779c38f958e23ad19da06a",disabled:r},(0,n.h)("tr",{key:"702a28ae4b478501503ab647fc46c33f25c1e8f7",class:"container"},(0,n.h)("td",{key:"24f50d9130578bbac482ad2dce2777c962f19cc2",class:"heading",colSpan:h.M},b)),(0,n.h)("slot",{key:"67ff643701086e093115a93eca5cdb3e1c6559d5",onSlotchange:this.handleDefaultSlotChange})))}get el(){return this}static get style(){return":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;flex-direction:column;background-color:var(--calcite-color-foreground-1)}:host([filter-hidden]){display:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.container{margin:0px;display:flex;flex:1 1 0%;padding:0.75rem;font-size:var(--calcite-font-size--1);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-2)}.heading{padding:0px}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-list-item-group",{disabled:[516],filterHidden:[516,"filter-hidden"],heading:[513]}]);function u(){typeof customElements>"u"||["calcite-list-item-group"].forEach(r=>{"calcite-list-item-group"===r&&(customElements.get(r)||customElements.define(r,d))})}u();const g=d,l=u},9089:(v,f,a)=>{a.d(f,{I:()=>k,c:()=>C,d:()=>D,g:()=>h,u:()=>p});var n=a(58560);function h(){if(!n.L2.isBrowser)return"";const e=function c(){return navigator.userAgentData}();return e?.brands?e.brands.map(({brand:t,version:o})=>`${t}/${o}`).join(" "):navigator.userAgent}const i=/firefox/i.test(h()),s=i?new WeakMap:null;function _(){const{disabled:e}=this;e||HTMLElement.prototype.click.call(this)}function d(e){const t=e.target;if(i&&!s.get(t))return;const{disabled:o}=t;o&&e.preventDefault()}const u=["mousedown","mouseup","click"];function g(e){const t=e.target;i&&!s.get(t)||t.disabled&&(e.stopImmediatePropagation(),e.preventDefault())}const l={capture:!0};function p(e){if(e.disabled)return e.el.setAttribute("aria-disabled","true"),e.el.contains(document.activeElement)&&document.activeElement.blur(),void r(e);m(e),e.el.removeAttribute("aria-disabled")}function r(e){if(e.el.click=_,i){const t=function I(e){return e.el.parentElement||e.el}(e),o=s.get(e.el);return o!==t&&(E(o),s.set(e.el,t)),void b(s.get(e.el))}b(e.el)}function b(e){e&&(e.addEventListener("pointerdown",d,l),u.forEach(t=>e.addEventListener(t,g,l)))}function m(e){if(delete e.el.click,i)return E(s.get(e.el)),void s.delete(e.el);E(e.el)}function E(e){e&&(e.removeEventListener("pointerdown",d,l),u.forEach(t=>e.removeEventListener(t,g,l)))}function C(e){!e.disabled||!i||r(e)}function D(e){i&&m(e)}const y={container:"interaction-container"};function k({disabled:e},t){return(0,n.h)("div",{class:y.container,inert:e},...t)}}}]);