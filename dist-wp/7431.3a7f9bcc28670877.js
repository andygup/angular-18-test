"use strict";(self.webpackChunkangular_18_test=self.webpackChunkangular_18_test||[]).push([[7431],{58182:(E,v,n)=>{n.d(v,{c:()=>u,g:()=>e});var _=n(10467);function e(l){return"l"===l?"m":"s"}function u(l){return a.apply(this,arguments)}function a(){return(a=(0,_.A)(function*(l){yield function b(l){return"function"==typeof l.componentOnReady}(l)?l.componentOnReady():new Promise(p=>requestAnimationFrame(()=>p()))})).apply(this,arguments)}},31032:(E,v,n)=>{n.d(v,{I:()=>t,d:()=>f});var _=n(10467),e=n(58560),u=n(32597),a=n(21090);const b_flipRtl="flip-rtl",l={},p={},s={s:16,m:24,l:32};function o(){return(o=(0,_.A)(function*({icon:r,scale:i}){const c=s[i],d=function m(r){const i=!isNaN(Number(r.charAt(0))),c=r.split("-");if(c.length>0){const g=/[a-z]/i;r=c.map((w,h)=>w.replace(g,function(C,O){return 0===h&&0===O?C:C.toUpperCase()})).join("")}return i?`i${r}`:r}(r),g="F"===d.charAt(d.length-1),h=`${g?d.substring(0,d.length-1):d}${c}${g?"F":""}`;if(l[h])return l[h];p[h]||(p[h]=fetch((0,e.OX)(`./assets/icon/${h}.json`)).then(C=>C.json()).catch(()=>(console.error(`"${h}" is not a valid calcite-ui-icon name`),"")));const R=yield p[h];return l[h]=R,R})).apply(this,arguments)}const t=(0,e.w$)(class extends e.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.icon=null,this.flipRtl=!1,this.scale="m",this.textLabel=void 0,this.pathData=void 0,this.visible=!1}connectedCallback(){this.waitUntilVisible(()=>{this.visible=!0,this.loadIconPathData()})}disconnectedCallback(){this.intersectionObserver?.disconnect(),this.intersectionObserver=null}componentWillLoad(){var i=this;return(0,_.A)(function*(){i.loadIconPathData()})()}render(){const{el:i,flipRtl:c,pathData:d,scale:g,textLabel:w}=this,h=(0,u.a)(i),R=s[g],C=!!w,O=[].concat(d||"");return(0,e.h)(e.xr,{key:"5eb4d26c41c6df7a4fe28e6647a452d4a91106a2","aria-hidden":(0,u.t)(!C),"aria-label":C?w:null,role:C?"img":null},(0,e.h)("svg",{key:"cd87fba0ba564d4a16ca5f18176d99b1f974b8fa","aria-hidden":"true",class:{[b_flipRtl]:"rtl"===h&&c,svg:!0},fill:"currentColor",height:"100%",viewBox:`0 0 ${R} ${R}`,width:"100%",xmlns:"http://www.w3.org/2000/svg"},O.map(x=>(0,e.h)("path","string"==typeof x?{d:x}:{d:x.d,opacity:"opacity"in x?x.opacity:1}))))}loadIconPathData(){var i=this;return(0,_.A)(function*(){const{icon:c,scale:d,visible:g}=i;if(!e.L2.isBrowser||!c||!g)return;const w=yield function y(r){return o.apply(this,arguments)}({icon:c,scale:d});c===i.icon&&(i.pathData=w)})()}waitUntilVisible(i){this.intersectionObserver=(0,a.c)("intersection",c=>{c.forEach(d=>{d.isIntersecting&&(this.intersectionObserver.disconnect(),this.intersectionObserver=null,i())})},{rootMargin:"50px"}),this.intersectionObserver?this.intersectionObserver.observe(this.el):i()}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{icon:["loadIconPathData"],scale:["loadIconPathData"]}}static get style(){return":host{display:inline-flex;color:var(--calcite-ui-icon-color)}:host([scale=s]){inline-size:16px;block-size:16px;min-inline-size:16px;min-block-size:16px}:host([scale=m]){inline-size:24px;block-size:24px;min-inline-size:24px;min-block-size:24px}:host([scale=l]){inline-size:32px;block-size:32px;min-inline-size:32px;min-block-size:32px}.flip-rtl{transform:scaleX(-1)}.svg{display:block}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-icon",{icon:[513],flipRtl:[516,"flip-rtl"],scale:[513],textLabel:[1,"text-label"],pathData:[32],visible:[32]},void 0,{icon:["loadIconPathData"],scale:["loadIconPathData"]}]);function f(){typeof customElements>"u"||["calcite-icon"].forEach(i=>{"calcite-icon"===i&&(customElements.get(i)||customElements.define(i,t))})}f()},40789:(E,v,n)=>{n.d(v,{a:()=>l,c:()=>s,s:()=>b});var _=n(10467),e=n(58560);const u=new WeakMap,a=new WeakMap;function b(o){a.set(o,new Promise(m=>u.set(o,m)))}function l(o){u.get(o)()}function s(o){return y.apply(this,arguments)}function y(){return(y=(0,_.A)(function*(o){if(yield function p(o){return a.get(o)}(o),e.L2.isBrowser)return(0,e.$x)(o),new Promise(m=>requestAnimationFrame(()=>m()))})).apply(this,arguments)}},17431:(E,v,n)=>{n.d(v,{T:()=>m,d:()=>M});var _=n(10467),e=n(58560),u=n(40789),a=n(51594),b=n(82887),l=n(58182),p=n(31032);const s_contentCell="content-cell",s_numberCell="number-cell",s_selectionCell="selection-cell",s_bodyRow="body-row",s_footerRow="footer-row",s_multipleSelectionCell="cell--multiple-selection",s_active="active",s_selectedCell="selected-cell",s_lastCell="last-cell",s_staticCell="static-cell",m=(0,e.w$)(class extends e.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.onContainerBlur=()=>{this.focused=!1},this.onContainerFocus=()=>{this.focused=!0},this.alignment="start",this.colSpan=void 0,this.description=void 0,this.heading=void 0,this.rowSpan=void 0,this.interactionMode="interactive",this.lastCell=void 0,this.numberCell=!1,this.parentRowAlignment="start",this.parentRowIsSelected=void 0,this.parentRowType=void 0,this.positionInRow=void 0,this.scale=void 0,this.selectedRowCount=void 0,this.selectedRowCountLocalized=void 0,this.selectionCell=!1,this.selectionMode=void 0,this.bodyRowCount=void 0,this.messages=void 0,this.messageOverrides=void 0,this.defaultMessages=void 0,this.focused=!1,this.screenReaderText="",this.effectiveLocale=""}onSelectedChange(){this.updateScreenReaderText()}onMessagesChange(){}componentWillLoad(){var t=this;return(0,_.A)(function*(){(0,u.s)(t),yield(0,a.s)(t),t.updateScreenReaderText()})()}componentDidLoad(){(0,u.a)(this)}connectedCallback(){(0,b.c)(this),(0,a.c)(this)}disconnectedCallback(){(0,b.d)(this),(0,a.d)(this)}effectiveLocaleChange(){(0,a.u)(this,this.effectiveLocale)}setFocus(){var t=this;return(0,_.A)(function*(){yield(0,u.c)(t),t.containerEl.focus()})()}updateScreenReaderText(){let t="";const f=`${this.selectedRowCountLocalized} ${this.messages?.selected}`;t=this.numberCell?this.messages?.rowNumber:"single"===this.selectionMode?`${this.messages?.selectionColumn}. ${f}`:this.bodyRowCount===this.selectedRowCount?`${this.messages?.selectionColumn}. ${this.messages?.all} ${f} ${this.messages?.keyboardDeselectAll}`:`${this.messages?.selectionColumn}. ${f} ${this.messages?.keyboardSelectAll}`,this.screenReaderText=t}render(){const t=this.rowSpan?"rowgroup":this.colSpan?"colgroup":"body"===this.parentRowType?"row":"col",f=this.selectedRowCount===this.bodyRowCount,r=f?"check-square-f":"check-square",i="static"===this.interactionMode&&!this.selectionCell;return(0,e.h)(e.xr,{key:"8903d493aaa6fe46c1e7ee00814bc0d409fe05e4"},(0,e.h)("th",{key:"a8268eb7f5f7e272d9f228ee722ff09d2755fea7","aria-colindex":"head"===this.parentRowType?this.positionInRow:void 0,class:{[s_bodyRow]:"body"===this.parentRowType,[s_footerRow]:"foot"===this.parentRowType,[s_contentCell]:!this.numberCell&&!this.selectionCell,[s_numberCell]:this.numberCell,[s_selectionCell]:this.selectionCell,[s_selectedCell]:this.parentRowIsSelected,[s_multipleSelectionCell]:"multiple"===this.selectionMode,[s_staticCell]:i,[s_lastCell]:this.lastCell&&(!this.rowSpan||this.colSpan&&!!this.rowSpan),[this.parentRowAlignment]:"center"===this.parentRowAlignment||"end"===this.parentRowAlignment},colSpan:this.colSpan,onBlur:this.onContainerBlur,onFocus:this.onContainerFocus,role:"head"===this.parentRowType?"columnheader":"rowheader",rowSpan:this.rowSpan,scope:t,tabIndex:this.selectionCell?0:i?-1:0,ref:c=>this.containerEl=c},this.heading&&(0,e.h)("div",{key:"171a02cb89d9db736a4dda50b643e413e4de3828",class:"heading"},this.heading),this.description&&(0,e.h)("div",{key:"29fbf42a560ddcce82713de3003a70b67fd0c596",class:"description"},this.description),this.selectionCell&&"multiple"===this.selectionMode&&(0,e.h)("calcite-icon",{key:"232d1ac6051ad58768b94c5813e96357088b4c4a",class:{[s_active]:f},icon:r,scale:(0,l.g)(this.scale)}),(this.selectionCell||this.numberCell)&&(0,e.h)("span",{key:"f91e4e2de889f0c8397006470adb8b330d9c50d4","aria-hidden":!0,"aria-live":this.focused?"polite":"off",class:"assistive-text"},this.screenReaderText)))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{selectedRowCount:["onSelectedChange"],selectedRowCountLocalized:["onSelectedChange"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host{--calcite-internal-table-header-background:var(--calcite-table-header-background, var(--calcite-color-foreground-2));--calcite-internal-table-header-border-color:var(--calcite-table-border-color, var(--calcite-color-border-3));display:contents}:host([alignment=center]) th{text-align:center}:host([alignment=end]) th{text-align:end}.assistive-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}th{white-space:normal;text-align:start;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1);font-size:var(--calcite-internal-table-cell-font-size);border-inline-end:1px solid var(--calcite-internal-table-header-border-color);border-block-end:1px solid var(--calcite-internal-table-header-border-color);padding-block:calc(var(--calcite-internal-table-cell-padding) * 1.5);padding-inline:var(--calcite-internal-table-cell-padding);background-color:var(--calcite-internal-table-header-background)}th:not(.static-cell){outline-color:transparent}th:not(.static-cell):not(.static-cell):focus-within{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}th:not(.center):not(.end).content-cell{vertical-align:top}th.center{vertical-align:middle}th.end.content-cell{vertical-align:bottom}th.body-row,th.footer-row{padding-block:var(--calcite-internal-table-cell-padding);border-block-end:0}th.footer-row{border-block-start:1px solid var(--calcite-internal-table-header-border-color)}th.last-cell{border-inline-end:0}.cell--multiple-selection{cursor:pointer;vertical-align:middle;color:var(--calcite-color-text-3)}.cell--multiple-selection:not(.end){vertical-align:middle}.selected-cell:not(.number-cell):not(.footer-cell){--calcite-internal-table-header-background:var(--calcite-color-foreground-current)}.number-cell,.selection-cell{color:var(--calcite-color-text-2);inline-size:2rem;min-inline-size:2rem}.selection-cell calcite-icon.active{color:var(--calcite-color-brand)}.number-cell calcite-icon,.selection-cell calcite-icon{margin-inline-start:auto;margin-inline-end:auto;vertical-align:middle}.heading{color:var(--calcite-color-text-1)}.description{color:var(--calcite-color-text-3);font-size:var(--calcite-internal-table-cell-font-size-secondary)}"}},[1,"calcite-table-header",{alignment:[513],colSpan:[514,"col-span"],description:[513],heading:[513],rowSpan:[514,"row-span"],interactionMode:[1,"interaction-mode"],lastCell:[4,"last-cell"],numberCell:[4,"number-cell"],parentRowAlignment:[1,"parent-row-alignment"],parentRowIsSelected:[4,"parent-row-is-selected"],parentRowType:[1,"parent-row-type"],positionInRow:[2,"position-in-row"],scale:[1],selectedRowCount:[2,"selected-row-count"],selectedRowCountLocalized:[1,"selected-row-count-localized"],selectionCell:[4,"selection-cell"],selectionMode:[1,"selection-mode"],bodyRowCount:[2,"body-row-count"],messages:[1040],messageOverrides:[1040],defaultMessages:[32],focused:[32],screenReaderText:[32],effectiveLocale:[32],setFocus:[64]},void 0,{selectedRowCount:["onSelectedChange"],selectedRowCountLocalized:["onSelectedChange"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function M(){typeof customElements>"u"||["calcite-table-header","calcite-icon"].forEach(t=>{switch(t){case"calcite-table-header":customElements.get(t)||customElements.define(t,m);break;case"calcite-icon":customElements.get(t)||(0,p.d)()}})}M()}}]);