import{c as A}from"./chunk-55GSL4CS.js";import{b as B}from"./chunk-HMFOSO25.js";import{b as M}from"./chunk-EN6NYR66.js";import{a as b}from"./chunk-6VELEYJV.js";import{a as E,b as v,c as x}from"./chunk-IZMSELEB.js";import{b as I}from"./chunk-XXDXVXAL.js";import{l as f,q as g}from"./chunk-PE5J6BL3.js";import{a as p}from"./chunk-T62VBPHF.js";import{d as s,f as u,h as d,i as h,j as m}from"./chunk-NFHPZN57.js";import{g as r}from"./chunk-3T7TAUC2.js";function c(a,e){return(a+e)%e}var C={menu:"menu",defaultTrigger:"default-trigger"},w={tooltip:"tooltip",trigger:"trigger"},P={menu:"ellipsis"},S="data-active",H=":host{box-sizing:border-box;display:flex;flex-direction:column;font-size:var(--calcite-font-size-1);color:var(--calcite-color-text-2)}::slotted(calcite-action-group){border-block-end:1px solid var(--calcite-color-border-3)}::slotted(calcite-action-group:last-child){border-block-end:0}.default-trigger{position:relative;block-size:100%;flex:0 1 auto;align-self:stretch}slot[name=trigger]::slotted(calcite-action),calcite-action::slotted([slot=trigger]){position:relative;block-size:100%;flex:0 1 auto;align-self:stretch}.menu{max-block-size:45vh;flex-direction:column;flex-wrap:nowrap;overflow-y:auto;overflow-x:hidden;outline:2px solid transparent;outline-offset:2px}:host([hidden]){display:none}[hidden]{display:none}",T=H,L=["ArrowUp","ArrowDown","End","Home"],R=d(class extends m{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteActionMenuOpen=u(this,"calciteActionMenuOpen",6),this.actionElements=[],this.guid=`calcite-action-menu-${p()}`,this.menuId=`${this.guid}-menu`,this.menuButtonId=`${this.guid}-menu-button`,this.connectMenuButtonEl=()=>{let{menuButtonId:e,menuId:t,open:n,label:o}=this,i=this.slottedMenuButtonEl||this.defaultMenuButtonEl;this.menuButtonEl!==i&&(this.disconnectMenuButtonEl(),this.menuButtonEl=i,this.setTooltipReferenceElement(),i&&(i.active=n,i.setAttribute("aria-controls",t),i.setAttribute("aria-expanded",g(n)),i.setAttribute("aria-haspopup","true"),i.id||(i.id=e),i.label||(i.label=o),i.text||(i.text=o),i.addEventListener("click",this.menuButtonClick),i.addEventListener("keydown",this.menuButtonKeyDown)))},this.disconnectMenuButtonEl=()=>{let{menuButtonEl:e}=this;e&&(e.removeEventListener("click",this.menuButtonClick),e.removeEventListener("keydown",this.menuButtonKeyDown))},this.setMenuButtonEl=e=>{let t=e.target.assignedElements({flatten:!0}).filter(n=>n?.matches("calcite-action"));this.slottedMenuButtonEl=t[0],this.connectMenuButtonEl()},this.setDefaultMenuButtonEl=e=>{this.defaultMenuButtonEl=e,this.connectMenuButtonEl()},this.handleCalciteActionClick=()=>{this.open=!1,this.setFocus()},this.menuButtonClick=()=>{this.toggleOpen()},this.updateTooltip=e=>{let t=e.target.assignedElements({flatten:!0}).filter(n=>n?.matches("calcite-tooltip"));this.tooltipEl=t[0],this.setTooltipReferenceElement()},this.setTooltipReferenceElement=()=>{let{tooltipEl:e,expanded:t,menuButtonEl:n,open:o}=this;e&&(e.referenceElement=!t&&!o?n:null)},this.updateAction=(e,t)=>{let{guid:n,activeMenuItemIndex:o}=this,i=`${n}-action-${t}`;e.tabIndex=-1,e.setAttribute("role","menuitem"),e.id||(e.id=i),e.toggleAttribute(S,t===o)},this.updateActions=e=>{e?.forEach(this.updateAction)},this.handleDefaultSlotChange=e=>{let t=e.target.assignedElements({flatten:!0}).reduce((n,o)=>o?.matches("calcite-action")?(n.push(o),n):o?.matches("calcite-action-group")?n.concat(Array.from(o.querySelectorAll("calcite-action"))):n,[]);this.actionElements=t.filter(n=>!n.disabled&&!n.hidden)},this.menuButtonKeyDown=e=>{let{key:t}=e,{actionElements:n,activeMenuItemIndex:o,open:i}=this;if(n.length){if(b(t)){if(e.preventDefault(),!i){this.toggleOpen();return}let l=n[o];l?l.click():this.toggleOpen(!1)}if(t==="Tab"){this.open=!1;return}if(t==="Escape"){this.toggleOpen(!1),e.preventDefault();return}this.handleActionNavigation(e,t,n)}},this.handleActionNavigation=(e,t,n)=>{if(!this.isValidKey(t,L))return;if(e.preventDefault(),!this.open){this.toggleOpen(),(t==="Home"||t==="ArrowDown")&&(this.activeMenuItemIndex=0),(t==="End"||t==="ArrowUp")&&(this.activeMenuItemIndex=n.length-1);return}t==="Home"&&(this.activeMenuItemIndex=0),t==="End"&&(this.activeMenuItemIndex=n.length-1);let o=this.activeMenuItemIndex;t==="ArrowUp"&&(this.activeMenuItemIndex=c(Math.max(o-1,-1),n.length)),t==="ArrowDown"&&(this.activeMenuItemIndex=c(o+1,n.length))},this.toggleOpenEnd=()=>{this.setFocus(),this.el.removeEventListener("calcitePopoverOpen",this.toggleOpenEnd)},this.toggleOpen=(e=!this.open)=>{this.el.addEventListener("calcitePopoverOpen",this.toggleOpenEnd),this.open=e},this.handlePopoverOpen=()=>{this.open=!0},this.handlePopoverClose=()=>{this.open=!1},this.appearance="solid",this.expanded=!1,this.flipPlacements=void 0,this.label=void 0,this.open=!1,this.overlayPositioning="absolute",this.placement="auto",this.scale=void 0,this.menuButtonEl=void 0,this.activeMenuItemIndex=-1}connectedCallback(){this.connectMenuButtonEl()}componentWillLoad(){E(this)}componentDidLoad(){v(this)}disconnectedCallback(){this.disconnectMenuButtonEl()}expandedHandler(){this.open=!1,this.setTooltipReferenceElement()}openHandler(e){this.activeMenuItemIndex=this.open?0:-1,this.menuButtonEl&&(this.menuButtonEl.active=e),this.calciteActionMenuOpen.emit(),this.setTooltipReferenceElement()}activeMenuItemIndexHandler(){this.updateActions(this.actionElements)}setFocus(){return r(this,null,function*(){return yield x(this),f(this.menuButtonEl)})}renderMenuButton(){let{appearance:e,label:t,scale:n,expanded:o}=this;return s("slot",{name:w.trigger,onSlotchange:this.setMenuButtonEl},s("calcite-action",{appearance:e,class:C.defaultTrigger,icon:P.menu,scale:n,text:t,textEnabled:o,ref:this.setDefaultMenuButtonEl}))}renderMenuItems(){let{actionElements:e,activeMenuItemIndex:t,open:n,menuId:o,menuButtonEl:i,label:l,placement:y,overlayPositioning:O,flipPlacements:D}=this,k=e[t]?.id||null;return s("calcite-popover",{autoClose:!0,flipPlacements:D,focusTrapDisabled:!0,label:l,offsetDistance:0,onCalcitePopoverClose:this.handlePopoverClose,onCalcitePopoverOpen:this.handlePopoverOpen,open:n,overlayPositioning:O,placement:y,pointerDisabled:!0,referenceElement:i},s("div",{"aria-activedescendant":k,"aria-labelledby":i?.id,class:C.menu,id:o,onClick:this.handleCalciteActionClick,role:"menu",tabIndex:-1},s("slot",{onSlotchange:this.handleDefaultSlotChange})))}render(){return s(h,{key:"172df111e58778a1006253a0eb444e767ad2d12b"},this.renderMenuButton(),this.renderMenuItems(),s("slot",{key:"1df982aa86cbdd0c2c7d847e9b6f0a4d35b5ba15",name:w.tooltip,onSlotchange:this.updateTooltip}))}isValidKey(e,t){return!!t.find(n=>n===e)}get el(){return this}static get watchers(){return{expanded:["expandedHandler"],open:["openHandler"],activeMenuItemIndex:["activeMenuItemIndexHandler"]}}static get style(){return T}},[1,"calcite-action-menu",{appearance:[513],expanded:[516],flipPlacements:[16],label:[1],open:[1540],overlayPositioning:[513,"overlay-positioning"],placement:[513],scale:[513],menuButtonEl:[32],activeMenuItemIndex:[32],setFocus:[64]},void 0,{expanded:["expandedHandler"],open:["openHandler"],activeMenuItemIndex:["activeMenuItemIndexHandler"]}]);function $(){if(typeof customElements>"u")return;["calcite-action-menu","calcite-action","calcite-icon","calcite-loader","calcite-popover"].forEach(e=>{switch(e){case"calcite-action-menu":customElements.get(e)||customElements.define(e,R);break;case"calcite-action":customElements.get(e)||B();break;case"calcite-icon":customElements.get(e)||I();break;case"calcite-loader":customElements.get(e)||M();break;case"calcite-popover":customElements.get(e)||A();break}})}$();export{w as a,$ as b};