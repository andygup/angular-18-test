import{a as c,b as r,f as d}from"./chunk-YU5D757X.js";import"./chunk-LIHFQDHK.js";import"./chunk-PE5J6BL3.js";import"./chunk-T62VBPHF.js";import"./chunk-MDAB6L5Y.js";import{d as t,e as i,f as l,h as o,j as s}from"./chunk-NFHPZN57.js";import"./chunk-3T7TAUC2.js";var h={container:"container"},m=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex}:host([alignment=start]){text-align:start}:host([alignment=end]){text-align:end}:host([alignment=center]){text-align:center}:host([scale=s]) .container{gap:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem;margin-block-end:var(--calcite-label-margin-bottom, 0.5rem)}:host([scale=m]) .container{gap:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem;margin-block-end:var(--calcite-label-margin-bottom, 0.75rem)}:host([scale=l]) .container{gap:0.5rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;margin-block-end:var(--calcite-label-margin-bottom, 1rem)}:host .container{margin-inline:0px;margin-block-start:0px;inline-size:100%;line-height:1.375;color:var(--calcite-color-text-1)}:host([layout=default]) .container{display:flex;flex-direction:column}:host([layout=inline]) .container,:host([layout=inline-space-between]) .container{display:flex;flex-direction:row;align-items:center;gap:0.5rem}:host([layout=inline][scale=l]) .container{gap:0.75rem}:host([layout=inline-space-between]) .container{justify-content:space-between}:host([disabled])>.container{opacity:var(--calcite-opacity-disabled)}:host([disabled]) ::slotted(*[disabled]),:host([disabled]) ::slotted(*[disabled] *){--tw-bg-opacity:1}:host([disabled]) ::slotted(calcite-input-message:not([active])){--tw-bg-opacity:0}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}",f=m,n=o(class extends s{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInternalLabelClick=l(this,"calciteInternalLabelClick",2),this.labelClickHandler=e=>{this.calciteInternalLabelClick.emit({sourceEvent:e})},this.alignment="start",this.for=void 0,this.scale="m",this.layout="default"}handleForChange(){d(this.el)}connectedCallback(){document.dispatchEvent(new CustomEvent(c))}disconnectedCallback(){document.dispatchEvent(new CustomEvent(r))}render(){return t(i,{key:"fc1ef6c0deb51a1cfb30b8efe5bb386bdb834380",onClick:this.labelClickHandler},t("div",{key:"23ac73d58f829394636f391ae5126332374e0857",class:h.container},t("slot",{key:"a2f2f7d660b6a3d31f14a027187e8f2d27fcb611"})))}get el(){return this}static get watchers(){return{for:["handleForChange"]}}static get style(){return f}},[1,"calcite-label",{alignment:[513],for:[513],scale:[513],layout:[513]},void 0,{for:["handleForChange"]}]);function a(){if(typeof customElements>"u")return;["calcite-label"].forEach(e=>{switch(e){case"calcite-label":customElements.get(e)||customElements.define(e,n);break}})}a();var v=n,E=a;export{v as CalciteLabel,E as defineCustomElement};