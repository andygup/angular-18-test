"use strict";(self.webpackChunkangular_18_test=self.webpackChunkangular_18_test||[]).push([[6062],{56062:(L,v,n)=>{n.r(v),n.d(v,{CalciteModal:()=>x,defineCustomElement:()=>P});var c=n(10467),t=n(58560),r=n(42357),s=n(32597),d=n(86187),a=n(40789),f=n(21090),u=n(20818),y=n(82887),C=n(51594),O=n(58182),D=n(31032),w=n(13594),M=n(28859);const i_modal="modal",i_container="container",i_containerOpen="container--open",i_content="content",i_contentNoFooter="content--no-footer",i_slottedInShell="slotted-in-shell";let g=0,_="";const h=(0,t.w$)(class extends t.wt{constructor(){var e;super(),e=this,this.__registerHost(),this.__attachShadow(),this.calciteModalBeforeClose=(0,t.lh)(this,"calciteModalBeforeClose",6),this.calciteModalClose=(0,t.lh)(this,"calciteModalClose",6),this.calciteModalBeforeOpen=(0,t.lh)(this,"calciteModalBeforeOpen",6),this.calciteModalOpen=(0,t.lh)(this,"calciteModalOpen",6),this.ignoreOpenChange=!1,this.mutationObserver=(0,f.c)("mutation",()=>this.handleMutationObserver()),this.cssVarObserver=(0,f.c)("mutation",()=>{this.updateSizeCssVars()}),this.openTransitionProp="opacity",this.setTransitionEl=b=>{this.transitionEl=b},this.openEnd=()=>{this.setFocus(),this.el.removeEventListener("calciteModalOpen",this.openEnd)},this.handleCloseClick=()=>{this.open=!1},this.handleOutsideClose=()=>{this.outsideCloseDisabled||(this.open=!1)},this.closeModal=(0,c.A)(function*(){if(e.beforeClose)try{yield e.beforeClose(e.el)}catch{return void requestAnimationFrame(()=>{e.ignoreOpenChange=!0,e.open=!0,e.ignoreOpenChange=!1})}g--,e.opened=!1,e.removeOverflowHiddenClass()}),this.handleMutationObserver=()=>{this.updateFooterVisibility(),this.updateFocusTrapElements()},this.updateFooterVisibility=()=>{this.hasFooter=!!(0,s.g)(this.el,["back","primary","secondary"])},this.updateSizeCssVars=()=>{this.cssWidth=getComputedStyle(this.el).getPropertyValue("--calcite-modal-width"),this.cssHeight=getComputedStyle(this.el).getPropertyValue("--calcite-modal-height")},this.contentTopSlotChangeHandler=b=>{this.hasContentTop=(0,s.d)(b)},this.contentBottomSlotChangeHandler=b=>{this.hasContentBottom=(0,s.d)(b)},this.open=!1,this.opened=!1,this.beforeClose=void 0,this.closeButtonDisabled=!1,this.focusTrapDisabled=!1,this.outsideCloseDisabled=!1,this.docked=void 0,this.escapeDisabled=!1,this.scale="m",this.widthScale="m",this.fullscreen=void 0,this.kind=void 0,this.messages=void 0,this.messageOverrides=void 0,this.slottedInShell=void 0,this.cssWidth=void 0,this.cssHeight=void 0,this.hasFooter=!0,this.hasContentTop=!1,this.hasContentBottom=!1,this.effectiveLocale=void 0,this.defaultMessages=void 0}handleFocusTrapDisabled(e){this.open&&(e?(0,d.d)(this):(0,d.a)(this))}onMessagesChange(){}componentWillLoad(){var e=this;return(0,c.A)(function*(){yield(0,C.s)(e),(0,a.s)(e),e.open&&e.openModal()})()}componentDidLoad(){(0,a.a)(this)}connectedCallback(){this.mutationObserver?.observe(this.el,{childList:!0,subtree:!0}),this.cssVarObserver?.observe(this.el,{attributeFilter:["style"]}),this.updateSizeCssVars(),this.updateFooterVisibility(),(0,r.c)(this),(0,y.c)(this),(0,C.c)(this),(0,d.c)(this)}disconnectedCallback(){this.removeOverflowHiddenClass(),this.mutationObserver?.disconnect(),this.cssVarObserver?.disconnect(),(0,r.d)(this),(0,d.d)(this),(0,y.d)(this),(0,C.d)(this),this.slottedInShell=!1}render(){return(0,t.h)(t.xr,{key:"b7f4d97818454e50db3870714f97cc626b97dd33","aria-describedby":this.contentId,"aria-labelledby":this.titleId,"aria-modal":"true",role:"dialog"},(0,t.h)("div",{key:"721d5a12fdfcc99dc9dba820b17cd7ffecd9d0b1",class:{[i_container]:!0,[i_containerOpen]:this.opened,[i_slottedInShell]:this.slottedInShell}},(0,t.h)("calcite-scrim",{key:"842588afb9d19ec36a355277ba06b8cb1a454ba3",class:"scrim",onClick:this.handleOutsideClose}),this.renderStyle(),(0,t.h)("div",{key:"b98514b2ef65856b94cca345285785fc0b056f45",class:{[i_modal]:!0},ref:this.setTransitionEl},(0,t.h)("div",{key:"fdbe8abc670bd2889c05ccd6597f485bc0c0b135",class:"header"},this.renderCloseButton(),(0,t.h)("header",{key:"d956c14a762c22d13920e0e34b11fc8bc1b9305b",class:"title"},(0,t.h)("slot",{key:"d7dcd4a9a4e2029a8e5961519538aeaad6092942",name:"header"}))),this.renderContentTop(),(0,t.h)("div",{key:"5b3fd60ed69388e2b001bd188be169c86f5d40db",class:{[i_content]:!0,[i_contentNoFooter]:!this.hasFooter},ref:e=>this.modalContent=e},(0,t.h)("slot",{key:"84a4dbeb3d1188c3f9c5b7877bf751f735262a87",name:"content"})),this.renderContentBottom(),this.renderFooter())))}renderFooter(){return this.hasFooter?(0,t.h)("div",{class:"footer",key:"footer"},(0,t.h)("span",{class:"back"},(0,t.h)("slot",{name:"back"})),(0,t.h)("span",{class:"secondary"},(0,t.h)("slot",{name:"secondary"})),(0,t.h)("span",{class:"primary"},(0,t.h)("slot",{name:"primary"}))):null}renderContentTop(){return(0,t.h)("div",{class:"content-top",hidden:!this.hasContentTop},(0,t.h)("slot",{name:"content-top",onSlotchange:this.contentTopSlotChangeHandler}))}renderContentBottom(){return(0,t.h)("div",{class:"content-bottom",hidden:!this.hasContentBottom},(0,t.h)("slot",{name:"content-bottom",onSlotchange:this.contentBottomSlotChangeHandler}))}renderCloseButton(){return this.closeButtonDisabled?null:(0,t.h)("button",{"aria-label":this.messages.close,class:"close",key:"button",onClick:this.handleCloseClick,title:this.messages.close,ref:e=>this.closeButtonEl=e},(0,t.h)("calcite-icon",{icon:"x",scale:(0,O.g)(this.scale)}))}renderStyle(){if(!this.fullscreen&&(this.cssWidth||this.cssHeight))return(0,t.h)("style",null,`.container {\n              ${this.docked&&this.cssWidth?"align-items: center !important;":""}\n            }\n            .modal {\n              block-size: ${this.cssHeight?this.cssHeight:"auto"} !important;\n              ${this.cssWidth?`inline-size: ${this.cssWidth} !important;`:""}\n              ${this.cssWidth?`max-inline-size: ${this.cssWidth} !important;`:""}\n              ${this.docked?"border-radius: var(--calcite-border-radius) !important;":""}\n            }\n            @media screen and (max-width: ${this.cssWidth}) {\n              .container {\n                ${this.docked?"align-items: flex-end !important;":""}\n              }\n              .modal {\n                max-block-size: 100% !important;\n                inline-size: 100% !important;\n                max-inline-size: 100% !important;\n                min-inline-size: 100% !important;\n                margin: 0 !important;\n                ${this.docked?"":"block-size: 100% !important;"}\n                ${this.docked?"":"border-radius: 0 !important;"}\n                ${this.docked?"border-radius: var(--calcite-border-radius) var(--calcite-border-radius) 0 0 !important;":""}\n              }\n            }\n          `)}effectiveLocaleChange(){(0,C.u)(this,this.effectiveLocale)}handleEscape(e){this.open&&!this.escapeDisabled&&"Escape"===e.key&&!e.defaultPrevented&&(this.open=!1,e.preventDefault())}setFocus(){var e=this;return(0,c.A)(function*(){yield(0,a.c)(e),(0,s.f)(e.el)})()}updateFocusTrapElements(){var e=this;return(0,c.A)(function*(){(0,d.u)(e)})()}scrollContent(e=0,b=0){var z=this;return(0,c.A)(function*(){z.modalContent&&(z.modalContent.scrollTo?z.modalContent.scrollTo({top:e,left:b,behavior:"smooth"}):(z.modalContent.scrollTop=e,z.modalContent.scrollLeft=b))})()}onBeforeOpen(){this.transitionEl.classList.add("modal--opening-active"),this.calciteModalBeforeOpen.emit()}onOpen(){this.transitionEl.classList.remove("modal--opening-idle","modal--opening-active"),this.calciteModalOpen.emit(),(0,d.a)(this)}onBeforeClose(){this.transitionEl.classList.add("modal--closing-active"),this.calciteModalBeforeClose.emit()}onClose(){this.transitionEl.classList.remove("modal--closing-idle","modal--closing-active"),this.calciteModalClose.emit(),(0,d.d)(this)}toggleModal(e){this.ignoreOpenChange||(e?this.openModal():this.closeModal())}handleOpenedChange(e){this.transitionEl.classList.add(e?"modal--opening-idle":"modal--closing-idle"),(0,u.o)(this)}openModal(){var e=this;return(0,c.A)(function*(){yield(0,O.c)(e.el),e.el.addEventListener("calciteModalOpen",e.openEnd),e.opened=!0;const b=(0,s.g)(e.el,"header"),z=(0,s.g)(e.el,"content");e.titleId=(0,s.E)(b),e.contentId=(0,s.E)(z),e.slottedInShell||(0===g&&(_=document.documentElement.style.overflow),g++,document.documentElement.style.setProperty("overflow","hidden"))})()}removeOverflowHiddenClass(){document.documentElement.style.setProperty("overflow",_)}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{focusTrapDisabled:["handleFocusTrapDisabled"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"],open:["toggleModal"],opened:["handleOpenedChange"]}}static get style(){return":host{--calcite-modal-scrim-background:rgba(0, 0, 0, 0.85);position:absolute;inset:0px;z-index:var(--calcite-z-index-overlay);display:flex;opacity:0;visibility:hidden !important;transition:visibility 0ms linear var(--calcite-internal-animation-timing-slow), opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88);--calcite-modal-scrim-background-internal:rgba(0, 0, 0, 0.85)}.content-top[hidden],.content-bottom[hidden]{display:none}.container{position:fixed;inset:0px;z-index:var(--calcite-z-index-overlay);display:flex;align-items:center;justify-content:center;overflow-y:hidden;color:var(--calcite-color-text-2);opacity:0;visibility:hidden !important;transition:visibility 0ms linear var(--calcite-internal-animation-timing-slow), opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88)}:host([scale=s]){--calcite-modal-padding-internal:0.75rem;--calcite-modal-padding-large-internal:1rem;--calcite-modal-title-text-internal:var(--calcite-font-size-1);--calcite-modal-content-text-internal:var(--calcite-font-size--1)}:host([scale=m]){--calcite-modal-padding-internal:1rem;--calcite-modal-padding-large-internal:1.25rem;--calcite-modal-title-text-internal:var(--calcite-font-size-2);--calcite-modal-content-text-internal:var(--calcite-font-size-0)}:host([scale=l]){--calcite-modal-padding-internal:1.25rem;--calcite-modal-padding-large-internal:1.5rem;--calcite-modal-title-text-internal:var(--calcite-font-size-3);--calcite-modal-content-text-internal:var(--calcite-font-size-1)}.scrim{--calcite-scrim-background:var(--calcite-modal-scrim-background, var(--calcite-color-transparent-scrim));position:fixed;inset:0px;display:flex;overflow-y:hidden}.modal{pointer-events:none;z-index:var(--calcite-z-index-modal);float:none;margin:1.5rem;box-sizing:border-box;display:flex;inline-size:100%;flex-direction:column;overflow:hidden;border-radius:0.25rem;background-color:var(--calcite-color-foreground-1);opacity:0;--tw-shadow:0 2px 12px -4px rgba(0, 0, 0, 0.2), 0 2px 4px -2px rgba(0, 0, 0, 0.16);--tw-shadow-colored:0 2px 12px -4px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);-webkit-overflow-scrolling:touch;visibility:hidden;transition:transform var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear var(--calcite-internal-animation-timing-slow), opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88);--calcite-modal-hidden-position:translate3d(0, 20px, 0);--calcite-modal-shown-position:translate3d(0, 0, 0)}.modal--opening-idle{transform:var(--calcite-modal-hidden-position)}.modal--opening-active{transform:var(--calcite-modal-shown-position)}.modal--closing-idle{transform:var(--calcite-modal-shown-position)}.modal--closing-active{transform:var(--calcite-modal-hidden-position)}:host([opened]){opacity:1;visibility:visible !important;transition-delay:0ms}.container--open{opacity:1;visibility:visible !important;transition-delay:0ms}.container--open .modal{pointer-events:auto;visibility:visible;opacity:1;transition:transform var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear, opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), max-inline-size var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), max-block-size var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88);transition-delay:0ms}.header{z-index:var(--calcite-z-index-header);display:flex;min-inline-size:0px;max-inline-size:100%;border-start-start-radius:0.25rem;border-start-end-radius:0.25rem;border-width:0px;border-block-end-width:1px;border-style:solid;border-color:var(--calcite-color-border-3);background-color:var(--calcite-color-foreground-1);flex:0 0 auto}.close{order:2;margin:0px;cursor:pointer;appearance:none;border-style:none;background-color:transparent;color:var(--calcite-color-text-3);outline-color:transparent;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-block:var(--calcite-modal-padding-internal);padding-inline:var(--calcite-modal-padding-internal);flex:0 0 auto}.close calcite-icon{pointer-events:none;vertical-align:-2px}.close:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.close:hover,.close:focus,.close:active{background-color:var(--calcite-color-foreground-2);color:var(--calcite-color-text-1)}.title{order:1;display:flex;min-inline-size:0px;align-items:center;flex:1 1 auto;padding-block:var(--calcite-modal-padding-internal);padding-inline:var(--calcite-modal-padding-large-internal)}slot[name=header]::slotted(*),*::slotted([slot=header]){margin:0px;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-1);font-size:var(--calcite-modal-title-text-internal)}.content{position:relative;box-sizing:border-box;display:block;block-size:100%;overflow:auto;padding:0px;background-color:var(--calcite-modal-content-background, var(--calcite-color-foreground-1));max-block-size:100%;padding:var(--calcite-modal-content-padding, var(--calcite-modal-padding-internal))}.content-top,.content-bottom{z-index:var(--calcite-z-index-header);display:flex;border-width:0px;border-style:solid;border-color:var(--calcite-color-border-3);background-color:var(--calcite-color-foreground-1);flex:0 0 auto;padding:var(--calcite-modal-padding-internal)}.content-top{min-inline-size:0px;max-inline-size:100%;border-block-end-width:1px}.content-bottom{margin-block-start:auto;box-sizing:border-box;inline-size:100%;justify-content:space-between;border-block-start-width:1px}.content-top:not(.header~.content-top){border-start-start-radius:0.25rem;border-start-end-radius:0.25rem}.content-bottom:not(.content-bottom~.footer),.content--no-footer{border-end-end-radius:0.25rem;border-end-start-radius:0.25rem}slot[name=content]::slotted(*),*::slotted([slot=content]){font-size:var(--calcite-modal-context-text-internal)}.footer{z-index:var(--calcite-z-index-header);margin-block-start:auto;box-sizing:border-box;display:flex;inline-size:100%;justify-content:space-between;border-end-end-radius:0.25rem;border-end-start-radius:0.25rem;border-width:0px;border-block-start-width:1px;border-style:solid;border-color:var(--calcite-color-border-3);background-color:var(--calcite-color-foreground-1);flex:0 0 auto;padding-block:var(--calcite-modal-padding-internal);padding-inline:var(--calcite-modal-padding-large-internal)}.footer--hide-back .back,.footer--hide-secondary .secondary{display:none}.back{display:block;margin-inline-end:auto}.secondary{margin-inline:0.25rem;display:block}slot[name=primary]{display:block}:host([width=small]) .modal{inline-size:auto}:host([width-scale=s]) .modal{max-block-size:100%;max-inline-size:100%;inline-size:var(--calcite-modal-width, 32rem);block-size:var(--calcite-modal-height, auto)}@media screen and (max-width: 35rem){:host([width-scale=s]) .modal{margin:0px;block-size:100%;max-block-size:100%;inline-size:100%;max-inline-size:100%}:host([width-scale=s]) .content{flex:1 1 auto;max-block-size:unset}:host([width-scale=s][docked]) .container{align-items:flex-end}}:host([width-scale=m]) .modal{max-block-size:100%;max-inline-size:100%;inline-size:var(--calcite-modal-width, 48rem);block-size:var(--calcite-modal-height, auto)}@media screen and (max-width: 51rem){:host([width-scale=m]) .modal{margin:0px;block-size:100%;max-block-size:100%;inline-size:100%;max-inline-size:100%}:host([width-scale=m]) .content{flex:1 1 auto;max-block-size:unset}:host([width-scale=m][docked]) .container{align-items:flex-end}}:host([width-scale=l]) .modal{max-block-size:100%;max-inline-size:100%;inline-size:var(--calcite-modal-width, 94rem);block-size:var(--calcite-modal-height, auto)}@media screen and (max-width: 97rem){:host([width-scale=l]) .modal{margin:0px;block-size:100%;max-block-size:100%;inline-size:100%;max-inline-size:100%}:host([width-scale=l]) .content{flex:1 1 auto;max-block-size:unset}:host([width-scale=l][docked]) .container{align-items:flex-end}}:host([fullscreen]) .modal{margin:0px;block-size:100%;max-block-size:100%;inline-size:100%;max-inline-size:100%;border-radius:0px;--calcite-modal-hidden-position:translate3D(0, 20px, 0) scale(0.95);--calcite-modal-shown-position:translate3D(0, 0, 0) scale(1)}:host([fullscreen]) .content{max-block-size:100%;flex:1 1 auto}:host([opened][fullscreen]) .header,:host([opened][fullscreen]) .footer,:host([opened][fullscreen]) .content-top,:host([opened][fullscreen]) .content-bottom{border-radius:0}:host([docked]) .modal{block-size:var(--calcite-modal-height, auto)}:host([docked]) .content{block-size:auto;flex:1 1 auto}:host([kind=brand]) .modal{border-color:var(--calcite-color-brand)}:host([kind=danger]) .modal{border-color:var(--calcite-color-status-danger)}:host([kind=info]) .modal{border-color:var(--calcite-color-status-info)}:host([kind=success]) .modal{border-color:var(--calcite-color-status-success)}:host([kind=warning]) .modal{border-color:var(--calcite-color-status-warning)}:host([kind=brand]) .modal,:host([kind=danger]) .modal,:host([kind=info]) .modal,:host([kind=success]) .modal,:host([kind=warning]) .modal{border-width:0px;border-block-start-width:4px;border-style:solid}:host([kind=brand]) .header,:host([kind=brand]) .content-top,:host([kind=danger]) .header,:host([kind=danger]) .content-top,:host([kind=info]) .header,:host([kind=info]) .content-top,:host([kind=success]) .header,:host([kind=success]) .content-top,:host([kind=warning]) .header,:host([kind=warning]) .content-top{border-radius:0.25rem;border-end-end-radius:0px;border-end-start-radius:0px}@media screen and (max-width: 860px){* slot[name=header]::slotted(content-top),* content-top::slotted([slot=header]){font-size:var(--calcite-font-size-1)}.footer,.content-bottom{position:sticky;inset-block-end:0px}}@media screen and (max-width: 480px){.footer,.content-bottom{flex-direction:column}.back,.secondary{margin:0px;margin-block-end:0.25rem}}.container.slotted-in-shell{position:absolute;pointer-events:auto}.container.slotted-in-shell calcite-scrim{position:absolute}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-modal",{open:[1540],opened:[1540],beforeClose:[16],closeButtonDisabled:[516,"close-button-disabled"],focusTrapDisabled:[516,"focus-trap-disabled"],outsideCloseDisabled:[516,"outside-close-disabled"],docked:[516],escapeDisabled:[516,"escape-disabled"],scale:[513],widthScale:[513,"width-scale"],fullscreen:[516],kind:[513],messages:[1040],messageOverrides:[1040],slottedInShell:[1028,"slotted-in-shell"],cssWidth:[32],cssHeight:[32],hasFooter:[32],hasContentTop:[32],hasContentBottom:[32],effectiveLocale:[32],defaultMessages:[32],setFocus:[64],updateFocusTrapElements:[64],scrollContent:[64]},[[8,"keydown","handleEscape"]],{focusTrapDisabled:["handleFocusTrapDisabled"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"],open:["toggleModal"],opened:["handleOpenedChange"]}]);function E(){typeof customElements>"u"||["calcite-modal","calcite-icon","calcite-loader","calcite-scrim"].forEach(e=>{switch(e){case"calcite-modal":customElements.get(e)||customElements.define(e,h);break;case"calcite-icon":customElements.get(e)||(0,D.d)();break;case"calcite-loader":customElements.get(e)||(0,w.d)();break;case"calcite-scrim":customElements.get(e)||(0,M.d)()}})}E();const x=h,P=E},58182:(L,v,n)=>{n.d(v,{c:()=>r,g:()=>t});var c=n(10467);function t(a){return"l"===a?"m":"s"}function r(a){return s.apply(this,arguments)}function s(){return(s=(0,c.A)(function*(a){yield function d(a){return"function"==typeof a.componentOnReady}(a)?a.componentOnReady():new Promise(f=>requestAnimationFrame(()=>f()))})).apply(this,arguments)}},42357:(L,v,n)=>{n.d(v,{c:()=>d,d:()=>a});var c=n(58560),t=n(21090);let r;const s={childList:!0};function d(u){r||(r=(0,t.c)("mutation",f)),r.observe(u.el,s)}function a(u){r.unobserve(u.el)}function f(u){u.forEach(({target:y})=>{(0,c.$x)(y)})}},31032:(L,v,n)=>{n.d(v,{I:()=>M,d:()=>i});var c=n(10467),t=n(58560),r=n(32597),s=n(21090);const d_flipRtl="flip-rtl",a={},f={},u={s:16,m:24,l:32};function C(){return(C=(0,c.A)(function*({icon:l,scale:o}){const p=u[o],m=function O(l){const o=!isNaN(Number(l.charAt(0))),p=l.split("-");if(p.length>0){const g=/[a-z]/i;l=p.map((_,h)=>_.replace(g,function(x,P){return 0===h&&0===P?x:x.toUpperCase()})).join("")}return o?`i${l}`:l}(l),g="F"===m.charAt(m.length-1),h=`${g?m.substring(0,m.length-1):m}${p}${g?"F":""}`;if(a[h])return a[h];f[h]||(f[h]=fetch((0,t.OX)(`./assets/icon/${h}.json`)).then(x=>x.json()).catch(()=>(console.error(`"${h}" is not a valid calcite-ui-icon name`),"")));const E=yield f[h];return a[h]=E,E})).apply(this,arguments)}const M=(0,t.w$)(class extends t.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.icon=null,this.flipRtl=!1,this.scale="m",this.textLabel=void 0,this.pathData=void 0,this.visible=!1}connectedCallback(){this.waitUntilVisible(()=>{this.visible=!0,this.loadIconPathData()})}disconnectedCallback(){this.intersectionObserver?.disconnect(),this.intersectionObserver=null}componentWillLoad(){var o=this;return(0,c.A)(function*(){o.loadIconPathData()})()}render(){const{el:o,flipRtl:p,pathData:m,scale:g,textLabel:_}=this,h=(0,r.a)(o),E=u[g],x=!!_,P=[].concat(m||"");return(0,t.h)(t.xr,{key:"5eb4d26c41c6df7a4fe28e6647a452d4a91106a2","aria-hidden":(0,r.t)(!x),"aria-label":x?_:null,role:x?"img":null},(0,t.h)("svg",{key:"cd87fba0ba564d4a16ca5f18176d99b1f974b8fa","aria-hidden":"true",class:{[d_flipRtl]:"rtl"===h&&p,svg:!0},fill:"currentColor",height:"100%",viewBox:`0 0 ${E} ${E}`,width:"100%",xmlns:"http://www.w3.org/2000/svg"},P.map(k=>(0,t.h)("path","string"==typeof k?{d:k}:{d:k.d,opacity:"opacity"in k?k.opacity:1}))))}loadIconPathData(){var o=this;return(0,c.A)(function*(){const{icon:p,scale:m,visible:g}=o;if(!t.L2.isBrowser||!p||!g)return;const _=yield function y(l){return C.apply(this,arguments)}({icon:p,scale:m});p===o.icon&&(o.pathData=_)})()}waitUntilVisible(o){this.intersectionObserver=(0,s.c)("intersection",p=>{p.forEach(m=>{m.isIntersecting&&(this.intersectionObserver.disconnect(),this.intersectionObserver=null,o())})},{rootMargin:"50px"}),this.intersectionObserver?this.intersectionObserver.observe(this.el):o()}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{icon:["loadIconPathData"],scale:["loadIconPathData"]}}static get style(){return":host{display:inline-flex;color:var(--calcite-ui-icon-color)}:host([scale=s]){inline-size:16px;block-size:16px;min-inline-size:16px;min-block-size:16px}:host([scale=m]){inline-size:24px;block-size:24px;min-inline-size:24px;min-block-size:24px}:host([scale=l]){inline-size:32px;block-size:32px;min-inline-size:32px;min-block-size:32px}.flip-rtl{transform:scaleX(-1)}.svg{display:block}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-icon",{icon:[513],flipRtl:[516,"flip-rtl"],scale:[513],textLabel:[1,"text-label"],pathData:[32],visible:[32]},void 0,{icon:["loadIconPathData"],scale:["loadIconPathData"]}]);function i(){typeof customElements>"u"||["calcite-icon"].forEach(o=>{"calcite-icon"===o&&(customElements.get(o)||customElements.define(o,M))})}i()},28859:(L,v,n)=>{n.d(v,{S:()=>D,d:()=>w});var c=n(10467),t=n(58560),r=n(82887),s=n(51594),d=n(21090),a=n(32597),f=n(13594);const D=(0,t.w$)(class extends t.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.resizeObserver=(0,d.c)("resize",()=>this.handleResize()),this.handleDefaultSlotChange=i=>{this.hasContent=(0,a.r)(i)},this.storeLoaderEl=i=>{this.loaderEl=i,this.handleResize()},this.loading=!1,this.messages=void 0,this.messageOverrides=void 0,this.loaderScale=void 0,this.defaultMessages=void 0,this.effectiveLocale="",this.hasContent=!1}onMessagesChange(){}effectiveLocaleChange(){(0,s.u)(this,this.effectiveLocale)}connectedCallback(){(0,r.c)(this),(0,s.c)(this),this.resizeObserver?.observe(this.el)}componentWillLoad(){var i=this;return(0,c.A)(function*(){yield(0,s.s)(i)})()}disconnectedCallback(){(0,r.d)(this),(0,s.d)(this),this.resizeObserver?.disconnect()}render(){const{hasContent:i,loading:l,messages:o}=this;return(0,t.h)("div",{key:"7a0aeafa981a687bb129a2ba939f5db1325d3a36",class:"scrim"},l?(0,t.h)("calcite-loader",{label:o.loading,scale:this.loaderScale,ref:this.storeLoaderEl}):null,(0,t.h)("div",{key:"7c3c32b66e2012e95e569fbb2dd651b774c124b0",class:"content",hidden:!i},(0,t.h)("slot",{key:"4d2fc58294f4c5aa4655a58d41e5e2034578453e",onSlotchange:this.handleDefaultSlotChange})))}getScale(i){return i<72?"s":i>=480?"l":"m"}handleResize(){const{loaderEl:i,el:l}=this;i&&(this.loaderScale=this.getScale(Math.min(l.clientHeight,l.clientWidth)??0))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host{--calcite-scrim-background:var(--calcite-color-transparent-scrim);position:absolute;inset:0px;z-index:var(--calcite-z-index-overlay);display:flex;block-size:100%;inline-size:100%;flex-direction:column;align-items:stretch}@keyframes calcite-scrim-fade-in{0%{--tw-bg-opacity:0}100%{--tw-text-opacity:1}}.scrim{position:absolute;inset:0px;display:flex;flex-direction:column;align-content:center;align-items:center;justify-content:center;overflow:hidden;animation:calcite-scrim-fade-in var(--calcite-internal-animation-timing-medium) ease-in-out;background-color:var(--calcite-scrim-background, var(--calcite-color-transparent-scrim))}.content{padding:1rem}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-scrim",{loading:[516],messages:[1040],messageOverrides:[1040],loaderScale:[32],defaultMessages:[32],effectiveLocale:[32],hasContent:[32]},void 0,{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function w(){typeof customElements>"u"||["calcite-scrim","calcite-loader"].forEach(i=>{switch(i){case"calcite-scrim":customElements.get(i)||customElements.define(i,D);break;case"calcite-loader":customElements.get(i)||(0,f.d)()}})}w()}}]);