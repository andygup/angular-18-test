"use strict";(self.webpackChunkangular_18_test=self.webpackChunkangular_18_test||[]).push([[4835],{4835:(G,L,o)=>{o.r(L),o.d(L,{CalciteListItem:()=>D,defineCustomElement:()=>O});var c=o(10467),t=o(58560),r=o(32597),g=o(9089),p=o(82887),u=o(51594),C=o(40789),d=o(11079),a=o(35274),f=o(8843),v=o(31032);const z_handle="handle",z_handleSelected="handle--selected",x=(0,t.w$)(class extends t.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteHandleChange=(0,t.lh)(this,"calciteHandleChange",6),this.calciteHandleNudge=(0,t.lh)(this,"calciteHandleNudge",6),this.calciteInternalAssistiveTextChange=(0,t.lh)(this,"calciteInternalAssistiveTextChange",6),this.handleKeyDown=e=>{if(!this.disabled)switch(e.key){case" ":this.selected=!this.selected,this.calciteHandleChange.emit(),e.preventDefault();break;case"ArrowUp":if(!this.selected)return;e.preventDefault(),this.calciteHandleNudge.emit({direction:"up"});break;case"ArrowDown":if(!this.selected)return;e.preventDefault(),this.calciteHandleNudge.emit({direction:"down"})}},this.handleBlur=()=>{this.blurUnselectDisabled||this.disabled||this.selected&&(this.selected=!1,this.calciteHandleChange.emit())},this.selected=!1,this.disabled=!1,this.dragHandle=void 0,this.messages=void 0,this.setPosition=void 0,this.setSize=void 0,this.label=void 0,this.blurUnselectDisabled=!1,this.messageOverrides=void 0,this.effectiveLocale=void 0,this.defaultMessages=void 0}handleAriaTextChange(){const e=this.getAriaText("live");e&&this.calciteInternalAssistiveTextChange.emit({message:e})}onMessagesChange(){}connectedCallback(){(0,g.c)(this),(0,u.c)(this),(0,p.c)(this)}componentWillLoad(){var e=this;return(0,c.A)(function*(){(0,C.s)(e),yield(0,u.s)(e)})()}componentDidLoad(){(0,C.a)(this)}componentDidRender(){(0,g.u)(this)}disconnectedCallback(){(0,g.d)(this),(0,u.d)(this),(0,p.d)(this)}effectiveLocaleChange(){(0,u.u)(this,this.effectiveLocale)}setFocus(){var e=this;return(0,c.A)(function*(){yield(0,C.c)(e),e.handleButton?.focus()})()}getTooltip(){const{label:e,messages:n}=this;return n?e?n.dragHandle.replace("{itemLabel}",e):n.dragHandleUntitled:""}getAriaText(e){const{setPosition:n,setSize:i,label:s,messages:l,selected:h}=this;return l&&s&&"number"==typeof i&&"number"==typeof n?("label"===e?h?l.dragHandleChange:l.dragHandleIdle:h?l.dragHandleActive:l.dragHandleCommit).replace("{position}",n.toString()).replace("{itemLabel}",s).replace("{total}",i.toString()):null}render(){return(0,t.h)("span",{key:"985ea19917a01e2fc366466d13909b297afa4b19","aria-checked":this.disabled?null:(0,r.t)(this.selected),"aria-disabled":this.disabled?(0,r.t)(this.disabled):null,"aria-label":this.disabled?null:this.getAriaText("label"),class:{[z_handle]:!0,[z_handleSelected]:!this.disabled&&this.selected},onBlur:this.handleBlur,onKeyDown:this.handleKeyDown,role:"radio",tabIndex:this.disabled?null:0,title:this.getTooltip(),ref:e=>{this.handleButton=e}},(0,t.h)("calcite-icon",{key:"d904676f59997c1a673979adf1b58af369883eb3",icon:"drag",scale:"s"}))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messages:["handleAriaTextChange"],label:["handleAriaTextChange"],selected:["handleAriaTextChange"],setPosition:["handleAriaTextChange"],setSize:["handleAriaTextChange"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex}.handle{display:flex;align-items:center;justify-content:center;align-self:stretch;border-style:none;outline-color:transparent;color:var(--calcite-color-border-input);padding-block:0.75rem;padding-inline:0.25rem;line-height:0}.handle calcite-icon{color:inherit}:host(:not([disabled])) .handle{cursor:move}:host(:not([disabled])) .handle:hover{background-color:var(--calcite-color-foreground-2);color:var(--calcite-color-text-1)}:host(:not([disabled])) .handle:focus{color:var(--calcite-color-text-1);outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}:host(:not([disabled])) .handle--selected{background-color:var(--calcite-color-foreground-3);color:var(--calcite-color-text-1)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-handle",{selected:[1540],disabled:[516],dragHandle:[513,"drag-handle"],messages:[16],setPosition:[2,"set-position"],setSize:[2,"set-size"],label:[1],blurUnselectDisabled:[4,"blur-unselect-disabled"],messageOverrides:[16],effectiveLocale:[32],defaultMessages:[32],setFocus:[64]},void 0,{messages:["handleAriaTextChange"],label:["handleAriaTextChange"],selected:["handleAriaTextChange"],setPosition:["handleAriaTextChange"],setSize:["handleAriaTextChange"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function _(){typeof customElements>"u"||["calcite-handle","calcite-icon"].forEach(e=>{switch(e){case"calcite-handle":customElements.get(e)||customElements.define(e,x);break;case"calcite-icon":customElements.get(e)||(0,v.d)()}})}_();var A=o(13594);const E=new Map,w=(0,t.w$)(class extends t.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteListItemSelect=(0,t.lh)(this,"calciteListItemSelect",6),this.calciteListItemClose=(0,t.lh)(this,"calciteListItemClose",6),this.calciteListItemDragHandleChange=(0,t.lh)(this,"calciteListItemDragHandleChange",6),this.calciteListItemToggle=(0,t.lh)(this,"calciteListItemToggle",6),this.calciteInternalListItemSelect=(0,t.lh)(this,"calciteInternalListItemSelect",6),this.calciteInternalListItemSelectMultiple=(0,t.lh)(this,"calciteInternalListItemSelectMultiple",6),this.calciteInternalListItemActive=(0,t.lh)(this,"calciteInternalListItemActive",6),this.calciteInternalFocusPreviousItem=(0,t.lh)(this,"calciteInternalFocusPreviousItem",6),this.calciteInternalListItemChange=(0,t.lh)(this,"calciteInternalListItemChange",6),this.dragHandleSelectedChangeHandler=e=>{this.dragSelected=e.target.selected,this.calciteListItemDragHandleChange.emit(),e.stopPropagation()},this.emitInternalListItemActive=()=>{this.calciteInternalListItemActive.emit()},this.focusCellHandle=()=>{this.handleCellFocusIn(this.handleGridEl)},this.focusCellActionsStart=()=>{this.handleCellFocusIn(this.actionsStartEl)},this.focusCellContent=()=>{this.handleCellFocusIn(this.contentEl)},this.focusCellActionsEnd=()=>{this.handleCellFocusIn(this.actionsEndEl)},this.handleCloseClick=()=>{this.closed=!0,this.calciteListItemClose.emit()},this.handleContentSlotChange=e=>{this.hasCustomContent=(0,r.d)(e)},this.handleActionsStartSlotChange=e=>{this.hasActionsStart=(0,r.d)(e)},this.handleActionsEndSlotChange=e=>{this.hasActionsEnd=(0,r.d)(e)},this.handleContentStartSlotChange=e=>{this.hasContentStart=(0,r.d)(e)},this.handleContentEndSlotChange=e=>{this.hasContentEnd=(0,r.d)(e)},this.handleContentBottomSlotChange=e=>{this.hasContentBottom=(0,r.d)(e)},this.handleDefaultSlotChange=e=>{this.handleOpenableChange(e.target)},this.handleToggleClick=()=>{this.toggle()},this.toggle=(e=!this.open)=>{this.open=e,this.calciteListItemToggle.emit()},this.handleItemClick=e=>{e.defaultPrevented||this.toggleSelected(e.shiftKey)},this.toggleSelected=e=>{const{selectionMode:n,selected:i}=this;this.disabled||("multiple"===n||"single"===n?this.selected=!i:"single-persist"===n&&(this.selected=!0),this.calciteInternalListItemSelectMultiple.emit({selectMultiple:e&&"multiple"===n}),this.calciteListItemSelect.emit())},this.handleItemKeyDown=e=>{if(e.defaultPrevented)return;const{key:n}=e,i=e.composedPath(),{containerEl:s,actionsStartEl:l,actionsEndEl:h,open:b,openable:I}=this,m=this.getGridCells(),y=m.findIndex(k=>i.includes(k));if("Enter"!==n||i.includes(l)||i.includes(h)){if("ArrowRight"===n){e.preventDefault();const k=y+1;-1===y?!b&&I?(this.toggle(!0),this.focusCell(null)):m[0]&&this.focusCell(m[0]):m[y]&&m[k]&&this.focusCell(m[k])}else if("ArrowLeft"===n){e.preventDefault();const k=y-1;-1===y?(this.focusCell(null),b&&I?this.toggle(!1):this.calciteInternalFocusPreviousItem.emit()):0===y?(this.focusCell(null),s.focus()):m[y]&&m[k]&&this.focusCell(m[k])}}else e.preventDefault(),this.toggleSelected(e.shiftKey)},this.focusCellNull=()=>{this.focusCell(null)},this.handleCellFocusIn=e=>{this.setFocusCell(e,(0,r.C)(e),!0)},this.setFocusCell=(e,n,i)=>{const{parentListEl:s}=this;i&&E.set(s,null);const l=this.getGridCells();l.forEach(h=>{h.tabIndex=-1,h.removeAttribute(a.a)}),e&&(e.tabIndex=e===n?0:-1,e.setAttribute(a.a,""),i&&E.set(s,l.indexOf(e)))},this.focusCell=(e,n=!0)=>{const i=(0,r.C)(e);this.setFocusCell(e,i,n),i?.focus()},this.active=!1,this.bordered=!1,this.closable=!1,this.closed=!1,this.description=void 0,this.disabled=!1,this.dragDisabled=!1,this.dragHandle=!1,this.dragSelected=!1,this.filterHidden=!1,this.label=void 0,this.metadata=void 0,this.open=!1,this.setSize=null,this.setPosition=null,this.selected=!1,this.value=void 0,this.selectionMode=null,this.selectionAppearance=null,this.messageOverrides=void 0,this.messages=void 0,this.effectiveLocale="",this.defaultMessages=void 0,this.level=null,this.parentListEl=void 0,this.openable=!1,this.hasActionsStart=!1,this.hasActionsEnd=!1,this.hasCustomContent=!1,this.hasContentStart=!1,this.hasContentEnd=!1,this.hasContentBottom=!1}activeHandler(e){e||this.focusCell(null,!1)}handleClosedChange(){this.emitCalciteInternalListItemChange()}handleDisabledChange(){this.emitCalciteInternalListItemChange()}handleSelectedChange(){this.calciteInternalListItemSelect.emit()}onMessagesChange(){}handleCalciteInternalListDefaultSlotChanges(e){e.stopPropagation(),this.handleOpenableChange(this.defaultSlotEl)}effectiveLocaleChange(){(0,u.u)(this,this.effectiveLocale)}connectedCallback(){(0,g.c)(this),(0,p.c)(this),(0,u.c)(this);const{el:e}=this;this.parentListEl=e.closest("calcite-list"),this.level=(0,d.a)(e)+1,this.setSelectionDefaults()}componentWillLoad(){var e=this;return(0,c.A)(function*(){(0,C.s)(e),yield(0,u.s)(e)})()}componentDidLoad(){(0,C.a)(this)}componentDidRender(){(0,g.u)(this)}disconnectedCallback(){(0,g.d)(this),(0,p.d)(this),(0,u.d)(this)}setFocus(){var e=this;return(0,c.A)(function*(){yield(0,C.c)(e);const{containerEl:n,parentListEl:i}=e,s=E.get(i);if("number"!=typeof s)n?.focus();else{const l=e.getGridCells();l[s]?e.focusCell(l[s]):n?.focus()}})()}renderSelected(){const{selected:e,selectionMode:n,selectionAppearance:i}=this;return"none"===n||"border"===i?null:(0,t.h)("td",{class:{[a.C.selectionContainer]:!0,[a.C.selectionContainerSingle]:"single"===n||"single-persist"===n},key:"selection-container",onClick:this.handleItemClick},(0,t.h)("calcite-icon",{icon:e?"multiple"===n?a.I.selectedMultiple:a.I.selectedSingle:"multiple"===n?a.I.unselectedMultiple:a.I.unselectedSingle,scale:"s"}))}renderDragHandle(){const{label:e,dragHandle:n,dragSelected:i,dragDisabled:s,setPosition:l,setSize:h}=this;return n?(0,t.h)("td",{"aria-label":e,class:a.C.dragContainer,key:"drag-handle-container",onFocusin:this.focusCellHandle,role:"gridcell",ref:b=>this.handleGridEl=b},(0,t.h)("calcite-handle",{disabled:s,label:e,onCalciteHandleChange:this.dragHandleSelectedChangeHandler,selected:i,setPosition:l,setSize:h})):null}renderOpen(){const{el:e,open:n,openable:i,messages:s}=this,l=(0,r.a)(e),h=n?a.I.open:"rtl"===l?a.I.closedRTL:a.I.closedLTR;return i?(0,t.h)("td",{class:a.C.openContainer,key:"open-container",onClick:this.handleToggleClick,title:n?s.collapse:s.expand},(0,t.h)("calcite-icon",{icon:h,key:h,scale:"s"})):null}renderActionsStart(){const{label:e,hasActionsStart:n}=this;return(0,t.h)("td",{"aria-label":e,class:a.C.actionsStart,hidden:!n,key:"actions-start-container",onFocusin:this.focusCellActionsStart,role:"gridcell",ref:i=>this.actionsStartEl=i},(0,t.h)("slot",{name:a.S.actionsStart,onSlotchange:this.handleActionsStartSlotChange}))}renderActionsEnd(){const{label:e,hasActionsEnd:n,closable:i,messages:s}=this;return(0,t.h)("td",{"aria-label":e,class:a.C.actionsEnd,hidden:!(n||i),key:"actions-end-container",onFocusin:this.focusCellActionsEnd,role:"gridcell",ref:l=>this.actionsEndEl=l},(0,t.h)("slot",{name:a.S.actionsEnd,onSlotchange:this.handleActionsEndSlotChange}),i?(0,t.h)("calcite-action",{appearance:"transparent",icon:a.I.close,key:"close-action",label:s.close,onClick:this.handleCloseClick,text:s.close}):null)}renderContentStart(){const{hasContentStart:e}=this;return(0,t.h)("div",{class:a.C.contentStart,hidden:!e},(0,t.h)("slot",{name:a.S.contentStart,onSlotchange:this.handleContentStartSlotChange}))}renderCustomContent(){const{hasCustomContent:e}=this;return(0,t.h)("div",{class:a.C.customContent,hidden:!e},(0,t.h)("slot",{name:a.S.content,onSlotchange:this.handleContentSlotChange}))}renderContentEnd(){const{hasContentEnd:e}=this;return(0,t.h)("div",{class:a.C.contentEnd,hidden:!e},(0,t.h)("slot",{name:a.S.contentEnd,onSlotchange:this.handleContentEndSlotChange}))}renderContentBottom(){const{hasContentBottom:e}=this;return(0,t.h)("div",{class:a.C.contentBottom,hidden:!e},(0,t.h)("slot",{name:a.S.contentBottom,onSlotchange:this.handleContentBottomSlotChange}))}renderDefaultContainer(){return(0,t.h)("div",{class:{[a.C.nestedContainer]:!0,[a.C.nestedContainerHidden]:this.openable&&!this.open}},(0,t.h)("slot",{onSlotchange:this.handleDefaultSlotChange,ref:e=>this.defaultSlotEl=e}))}renderContentProperties(){const{label:e,description:n,hasCustomContent:i}=this;return i||!e&&!n?null:(0,t.h)("div",{class:a.C.content,key:"content"},e?(0,t.h)("div",{class:a.C.label,key:"label"},e):null,n?(0,t.h)("div",{class:a.C.description,key:"description"},n):null)}renderContentContainer(){const{description:e,label:n,selectionMode:i,hasCustomContent:s}=this,l=s||!!n||!!e,h=[this.renderContentStart(),this.renderCustomContent(),this.renderContentProperties(),this.renderContentEnd()];return(0,t.h)("td",{"aria-label":n,class:{[a.C.contentContainer]:!0,[a.C.contentContainerSelectable]:"none"!==i,[a.C.contentContainerHasCenterContent]:l},key:"content-container",onClick:this.handleItemClick,onFocusin:this.focusCellContent,role:"gridcell",ref:b=>this.contentEl=b},h)}render(){const{openable:e,open:n,level:i,setPosition:s,setSize:l,active:h,label:b,selected:I,selectionAppearance:m,selectionMode:y,closed:k,filterHidden:j,bordered:W,disabled:$}=this,K="none"!==y&&"border"===m,J=K&&I,Q=K&&!I;return(0,t.h)(t.xr,{key:"15651b0bef6af7db01d650ff74b732db28758292"},(0,t.h)(g.I,{key:"a0a4c2b6587a5c173710235518bf97aafc7d3b2a",disabled:$},(0,t.h)("div",{key:"f4dceb92cd6164d4d5445a9977aebfa9ae4073ff",class:{[a.C.wrapper]:!0,[a.C.wrapperBordered]:W}},(0,t.h)("tr",{key:"105d3b31fde1dabc1b606b25e28f9f7535367503","aria-expanded":e?(0,r.t)(n):null,"aria-label":b,"aria-level":i,"aria-posinset":s,"aria-selected":(0,r.t)(I),"aria-setsize":l,class:{[a.C.container]:!0,[a.C.containerHover]:!0,[a.C.containerBorder]:K,[a.C.containerBorderSelected]:J,[a.C.containerBorderUnselected]:Q},hidden:k||j,onFocus:this.focusCellNull,onFocusin:this.emitInternalListItemActive,onKeyDown:this.handleItemKeyDown,role:"row",tabIndex:h?0:-1,ref:V=>this.containerEl=V},this.renderDragHandle(),this.renderSelected(),this.renderOpen(),this.renderActionsStart(),this.renderContentContainer(),this.renderActionsEnd()),this.renderContentBottom()),(0,t.h)("div",{key:"2018e3a2e07547caca69c18ce58a3e19ae66b3e8",class:a.C.indent},this.renderDefaultContainer())))}emitCalciteInternalListItemChange(){this.calciteInternalListItemChange.emit()}setSelectionDefaults(){const{parentListEl:e,selectionMode:n,selectionAppearance:i}=this;e&&(n||(this.selectionMode=e.selectionMode),i||(this.selectionAppearance=e.selectionAppearance))}handleOpenableChange(e){if(!e)return;const n=(0,d.g)(e),i=(0,d.b)(e);(0,d.u)(n),this.openable=!!n.length||!!i.length}getGridCells(){return[this.handleGridEl,this.actionsStartEl,this.contentEl,this.actionsEndEl].filter(e=>e&&!e.hidden)}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{active:["activeHandler"],closed:["handleClosedChange"],disabled:["handleDisabledChange"],selected:["handleSelectedChange"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;flex-direction:column;background-color:var(--calcite-color-foreground-1);--calcite-list-item-icon-color:var(--calcite-color-brand)}:host([filter-hidden]),:host([closed]){display:none}.wrapper--bordered{border-block-end:1px solid var(--calcite-color-border-3)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.indent{display:flex;flex-direction:column;border-width:0px;border-style:solid;border-color:var(--calcite-color-border-3);margin-inline-start:var(--calcite-list-item-spacing-indent, 1.5rem)}.container{box-sizing:border-box;display:flex;flex:1 1 0%;background-color:var(--calcite-color-foreground-1)}.container *{box-sizing:border-box}.container--hover:hover{cursor:pointer;background-color:var(--calcite-color-foreground-2)}.container:active{background-color:var(--calcite-color-foreground-1)}.container--border{border-inline-start-width:4px;border-inline-start-style:solid}.container--border-selected{border-inline-start-color:var(--calcite-color-brand)}.container--border-unselected{border-inline-start-color:transparent}.container:hover.container--border-unselected{border-color:var(--calcite-color-border-1)}.nested-container{display:flex;flex-direction:column}.nested-container--hidden{display:none}.content-container{display:flex;flex:1 1 auto;-webkit-user-select:none;user-select:none;align-items:stretch;padding:0px;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-2)}tr,td{outline-color:transparent}tr:focus,td:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.content,.custom-content{display:flex;flex:1 1 auto;flex-direction:column;justify-content:center;padding-inline:0.75rem;padding-block:0.5rem;font-size:var(--calcite-font-size--2);line-height:1.375}.label,.description,.content-bottom{font-family:var(--calcite-font-family);font-size:var(--calcite-font-size--2);font-weight:var(--calcite-font-weight-normal);word-wrap:break-word;word-break:break-word}.label:only-child,.description:only-child,.content-bottom:only-child{margin:0px;padding-block:0.25rem}.label{color:var(--calcite-color-text-1)}:host([selected]) .label{font-weight:var(--calcite-font-weight-medium)}.description{margin-block-start:0.125rem;color:var(--calcite-color-text-3)}:host([selected]) .description{color:var(--calcite-color-text-2)}.content-start{justify-content:flex-start}.content-end{justify-content:flex-end}.content-start,.content-end{flex:1 1 auto}.content-start ::slotted(calcite-icon),.content-end ::slotted(calcite-icon){margin-inline:0.75rem;align-self:center}.content-bottom{display:flex;flex-direction:column}.content-container--has-center-content .content-start,.content-container--has-center-content .content-end{flex:0 1 auto}.selection-container{display:flex;padding-block:0px;color:var(--calcite-color-border-input);padding-inline:var(--calcite-spacing-md) var(--calcite-spacing-xxs)}.selection-container--single{color:transparent}:host(:not([disabled]):not([selected])) .container:hover .selection-container--single{color:var(--calcite-color-border-1)}:host([selected]:hover) .selection-container,:host([selected]:hover) .selection-container--single,:host([selected]) .selection-container{color:var(--calcite-list-item-icon-color)}.open-container{color:var(--calcite-color-text-3)}:host(:not([disabled])) .container:hover .open-container{color:var(--calcite-color-text-1)}.actions-start,.actions-end,.content-start,.content-end,.selection-container,.drag-container,.open-container{display:flex;align-items:center}.actions-start calcite-action,.actions-start calcite-handle,.actions-end calcite-action,.actions-end calcite-handle,.content-start calcite-action,.content-start calcite-handle,.content-end calcite-action,.content-end calcite-handle,.selection-container calcite-action,.selection-container calcite-handle,.drag-container calcite-action,.drag-container calcite-handle,.open-container calcite-action,.open-container calcite-handle{align-self:stretch}.open-container,.selection-container{cursor:pointer}.actions-start,.actions-end{padding:0px}.actions-start ::slotted(calcite-action),.actions-start ::slotted(calcite-action-menu),.actions-start ::slotted(calcite-handle),.actions-start ::slotted(calcite-dropdown),.actions-end ::slotted(calcite-action),.actions-end ::slotted(calcite-action-menu),.actions-end ::slotted(calcite-handle),.actions-end ::slotted(calcite-dropdown){align-self:stretch;color:inherit}::slotted(calcite-list:empty){border-block-start-width:0px}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-list-item",{active:[4],bordered:[4],closable:[516],closed:[1540],description:[1],disabled:[516],dragDisabled:[516,"drag-disabled"],dragHandle:[4,"drag-handle"],dragSelected:[1540,"drag-selected"],filterHidden:[516,"filter-hidden"],label:[1],metadata:[16],open:[1540],setSize:[2,"set-size"],setPosition:[2,"set-position"],selected:[1540],value:[8],selectionMode:[1025,"selection-mode"],selectionAppearance:[1025,"selection-appearance"],messageOverrides:[1040],messages:[1040],effectiveLocale:[32],defaultMessages:[32],level:[32],parentListEl:[32],openable:[32],hasActionsStart:[32],hasActionsEnd:[32],hasCustomContent:[32],hasContentStart:[32],hasContentEnd:[32],hasContentBottom:[32],setFocus:[64]},[[0,"calciteInternalListItemGroupDefaultSlotChange","handleCalciteInternalListDefaultSlotChanges"],[0,"calciteInternalListDefaultSlotChange","handleCalciteInternalListDefaultSlotChanges"]],{active:["activeHandler"],closed:["handleClosedChange"],disabled:["handleDisabledChange"],selected:["handleSelectedChange"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function T(){typeof customElements>"u"||["calcite-list-item","calcite-action","calcite-handle","calcite-icon","calcite-loader"].forEach(e=>{switch(e){case"calcite-list-item":customElements.get(e)||customElements.define(e,w);break;case"calcite-action":customElements.get(e)||(0,f.d)();break;case"calcite-handle":customElements.get(e)||_();break;case"calcite-icon":customElements.get(e)||(0,v.d)();break;case"calcite-loader":customElements.get(e)||(0,A.d)()}})}T();const D=w,O=T},40789:(G,L,o)=>{o.d(L,{a:()=>u,c:()=>d,s:()=>p});var c=o(10467),t=o(58560);const r=new WeakMap,g=new WeakMap;function p(f){g.set(f,new Promise(v=>r.set(f,v)))}function u(f){r.get(f)()}function d(f){return a.apply(this,arguments)}function a(){return(a=(0,c.A)(function*(f){if(yield function C(f){return g.get(f)}(f),t.L2.isBrowser)return(0,t.$x)(f),new Promise(v=>requestAnimationFrame(()=>v()))})).apply(this,arguments)}},13594:(G,L,o)=>{o.d(L,{L:()=>p,d:()=>u});var c=o(58560),t=o(95044);const p=(0,c.w$)(class extends c.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.inline=!1,this.label=void 0,this.scale="m",this.type=void 0,this.value=0,this.text=""}render(){const{el:d,inline:a,label:f,scale:v,text:z,type:P,value:S}=this,R=d.id||(0,t.g)(),x=a?this.getInlineSize(v):this.getSize(v),_=.45*x,A=`0 0 ${x} ${x}`,H="determinate"===P,M=2*_*Math.PI,E=S/100*M,F=M-E,w=Math.floor(S),D={r:_,cx:x/2,cy:x/2},O={"stroke-dasharray":`${E} ${F}`};return(0,c.h)(c.xr,{key:"1042b6b24e04a6e4582947c6a544da715ff255a4","aria-label":f,id:R,role:"progressbar",...H?{"aria-valuenow":w,"aria-valuemin":0,"aria-valuemax":100,complete:100===w}:{}},(0,c.h)("div",{key:"4fa16470d15e126378e330a03732e0f5f5fe12a6",class:"loader__svgs"},(0,c.h)("svg",{key:"f2f2349163dd4280309cae9a53d20596850e89ae","aria-hidden":"true",class:"loader__svg loader__svg--1",viewBox:A},(0,c.h)("circle",{key:"cab1f07b5e5f275709446ee13e9a06212bc544a9",...D})),(0,c.h)("svg",{key:"f8d6bedac7cef0c7f619eec7734a1cda1b8021db","aria-hidden":"true",class:"loader__svg loader__svg--2",viewBox:A},(0,c.h)("circle",{key:"778a680d0d93cdf7896c8bf225f153ea806e76ce",...D})),(0,c.h)("svg",{key:"80f42b04b4f0dd270c0a0f8063c9c5e6ed687b79","aria-hidden":"true",class:"loader__svg loader__svg--3",viewBox:A,...H?{style:O}:{}},(0,c.h)("circle",{key:"3d4cb781a9af29810069f020aecffba667c72335",...D}))),z&&(0,c.h)("div",{key:"4e7b35dddd29bbcfc4043aecd14ee22131c9f5cc",class:"loader__text"},z),H&&(0,c.h)("div",{key:"396313f330b54f7f7a45ebac7ccb1cf8b8116471",class:"loader__percentage"},S))}getSize(d){return{s:32,m:56,l:80}[d]}getInlineSize(d){return{s:12,m:16,l:20}[d]}get el(){return this}static get style(){return'@charset "UTF-8";@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:host{position:relative;margin-inline:auto;display:none;align-items:center;justify-content:center;opacity:1;min-block-size:var(--calcite-loader-size);font-size:var(--calcite-loader-font-size);stroke:var(--calcite-color-brand);stroke-width:3;fill:none;transform:scale(1, 1);animation:loader-color-shift calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 2 / var(--calcite-internal-duration-factor)) alternate-reverse infinite linear;padding-block:var(--calcite-loader-padding, 4rem);will-change:contents}:host([scale=s]){--calcite-loader-font-size:var(--calcite-font-size--2);--calcite-loader-size:2rem;--calcite-loader-size-inline:0.75rem}:host([scale=m]){--calcite-loader-font-size:var(--calcite-font-size-0);--calcite-loader-size:4rem;--calcite-loader-size-inline:1rem}:host([scale=l]){--calcite-loader-font-size:var(--calcite-font-size-2);--calcite-loader-size:6rem;--calcite-loader-size-inline:1.5rem}:host([no-padding]){padding-block:0px}:host{display:flex}.loader__text{display:block;text-align:center;font-size:var(--calcite-font-size--2);line-height:1rem;color:var(--calcite-color-text-1);margin-block-start:calc(var(--calcite-loader-size) + 1.5rem)}.loader__percentage{position:absolute;display:block;text-align:center;color:var(--calcite-color-text-1);font-size:var(--calcite-loader-font-size);inline-size:var(--calcite-loader-size);inset-inline-start:50%;margin-inline-start:calc(var(--calcite-loader-size) / 2 * -1);line-height:0.25;transform:scale(1, 1)}.loader__svgs{position:absolute;overflow:visible;opacity:1;inline-size:var(--calcite-loader-size);block-size:var(--calcite-loader-size);inset-inline-start:50%;margin-inline-start:calc(var(--calcite-loader-size) / 2 * -1);animation-iteration-count:infinite;animation-timing-function:linear;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 6.66 / var(--calcite-internal-duration-factor));animation-name:loader-clockwise}.loader__svg{position:absolute;inset-block-start:0px;transform-origin:center;overflow:visible;inset-inline-start:0;inline-size:var(--calcite-loader-size);block-size:var(--calcite-loader-size);animation-iteration-count:infinite;animation-timing-function:linear}.loader__svg--1{animation-name:loader-offset-1}.loader__svg--2{animation-name:loader-offset-2}.loader__svg--3{animation-name:loader-offset-3}:host([type=determinate]){animation:none;stroke:var(--calcite-color-border-3)}:host([type=determinate]) .loader__svgs{animation:none}:host([type=determinate]) .loader__svg--3{animation:none;stroke:var(--calcite-color-brand);stroke-dasharray:150.79632;transform:rotate(-90deg);transition:all var(--calcite-internal-animation-timing-fast) linear}:host([inline]){position:relative;margin:0px;animation:none;stroke:currentColor;stroke-width:2;padding-block:0px;block-size:var(--calcite-loader-size-inline);min-block-size:var(--calcite-loader-size-inline);inline-size:var(--calcite-loader-size-inline);margin-inline-end:calc(var(--calcite-loader-size-inline) * 0.5);vertical-align:calc(var(--calcite-loader-size-inline) * -1 * 0.2)}:host([inline]) .loader__svgs{inset-block-start:0px;margin:0px;inset-inline-start:0;inline-size:var(--calcite-loader-size-inline);block-size:var(--calcite-loader-size-inline)}:host([inline]) .loader__svg{inline-size:var(--calcite-loader-size-inline);block-size:var(--calcite-loader-size-inline)}:host([complete]){opacity:0;transform:scale(0.75, 0.75);transform-origin:center;transition:opacity var(--calcite-internal-animation-timing-medium) linear 1000ms, transform var(--calcite-internal-animation-timing-medium) linear 1000ms}:host([complete]) .loader__svgs{opacity:0;transform:scale(0.75, 0.75);transform-origin:center;transition:opacity calc(180ms * var(--calcite-internal-duration-factor)) linear 800ms, transform calc(180ms * var(--calcite-internal-duration-factor)) linear 800ms}:host([complete]) .loader__percentage{color:var(--calcite-color-brand);transform:scale(1.05, 1.05);transform-origin:center;transition:color var(--calcite-internal-animation-timing-medium) linear, transform var(--calcite-internal-animation-timing-medium) linear}.loader__svg--1{stroke-dasharray:27.9252444444 139.6262222222;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 4.8 / var(--calcite-internal-duration-factor))}@keyframes loader-offset-1{0%{stroke-dasharray:27.9252444444 251.3272;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222 139.6262222222;stroke-dashoffset:-83.7757333333}100%{stroke-dasharray:27.9252444444 251.3272;stroke-dashoffset:-279.2524444444}}.loader__svg--2{stroke-dasharray:55.8504888889 139.6262222222;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 6.4 / var(--calcite-internal-duration-factor))}@keyframes loader-offset-2{0%{stroke-dasharray:55.8504888889 223.4019555556;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222 139.6262222222;stroke-dashoffset:-97.7383555556}100%{stroke-dasharray:55.8504888889 223.4019555556;stroke-dashoffset:-279.2524444444}}.loader__svg--3{stroke-dasharray:13.9626222222 139.6262222222;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 7.734 / var(--calcite-internal-duration-factor))}@keyframes loader-offset-3{0%{stroke-dasharray:13.9626222222 265.2898222222;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222 139.6262222222;stroke-dashoffset:-76.7944222222}100%{stroke-dasharray:13.9626222222 265.2898222222;stroke-dashoffset:-279.2524444444}}@keyframes loader-color-shift{0%{stroke:var(--calcite-color-brand)}33%{stroke:var(--calcite-color-brand-press)}66%{stroke:var(--calcite-color-brand-hover)}100%{stroke:var(--calcite-color-brand)}}@keyframes loader-clockwise{100%{transform:rotate(360deg)}}:host([hidden]){display:none}[hidden]{display:none}'}},[1,"calcite-loader",{inline:[516],label:[1],scale:[513],type:[513],value:[2],text:[1]}]);function u(){typeof customElements>"u"||["calcite-loader"].forEach(d=>{"calcite-loader"===d&&(customElements.get(d)||customElements.define(d,p))})}u()}}]);