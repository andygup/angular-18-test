"use strict";(self.webpackChunkangular_18_test=self.webpackChunkangular_18_test||[]).push([[6883],{86187:(te,B,E)=>{E.d(B,{a:()=>Z,c:()=>X,d:()=>ae,u:()=>q});var l=E(32597);function T(o,a){var c=Object.keys(o);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(o);a&&(s=s.filter(function(h){return Object.getOwnPropertyDescriptor(o,h).enumerable})),c.push.apply(c,s)}return c}function O(o){for(var a=1;a<arguments.length;a++){var c=null!=arguments[a]?arguments[a]:{};a%2?T(Object(c),!0).forEach(function(s){x(o,s,c[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(c)):T(Object(c)).forEach(function(s){Object.defineProperty(o,s,Object.getOwnPropertyDescriptor(c,s))})}return o}function x(o,a,c){return a=function k(o){var a=function n(o,a){if("object"!=typeof o||null===o)return o;var c=o[Symbol.toPrimitive];if(void 0!==c){var s=c.call(o,a||"default");if("object"!=typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===a?String:Number)(o)}(o,"string");return"symbol"==typeof a?a:String(a)}(a),a in o?Object.defineProperty(o,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):o[a]=c,o}var m=function(a){return"Tab"===a?.key||9===a?.keyCode},D=function(a){return m(a)&&!a.shiftKey},A=function(a){return m(a)&&a.shiftKey},M=function(a){return setTimeout(a,0)},z=function(a,c){var s=-1;return a.every(function(h,u){return!c(h)||(s=u,!1)}),s},w=function(a){for(var c=arguments.length,s=new Array(c>1?c-1:0),h=1;h<c;h++)s[h-1]=arguments[h];return"function"==typeof a?a.apply(void 0,s):a},F=function(a){return a.target.shadowRoot&&"function"==typeof a.composedPath?a.composedPath()[0]:a.target},K=[],J=function(a,c){var L,s=c?.document||document,h=c?.trapStack||K,u=O({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0,isKeyForward:D,isKeyBackward:A},c),r={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0,recentNavEvent:void 0},N=function(t,e,i){return t&&void 0!==t[e]?t[e]:u[i||e]},S=function(t,e){var i="function"==typeof e?.composedPath?e.composedPath():void 0;return r.containerGroups.findIndex(function(d){var f=d.container,b=d.tabbableNodes;return f.contains(t)||i?.includes(f)||b.find(function(p){return p===t})})},W=function(t){var e=u[t];if("function"==typeof e){for(var i=arguments.length,d=new Array(i>1?i-1:0),f=1;f<i;f++)d[f-1]=arguments[f];e=e.apply(void 0,d)}if(!0===e&&(e=void 0),!e){if(void 0===e||!1===e)return e;throw new Error("`".concat(t,"` was specified but was not a node, or did not return a node"))}var b=e;if("string"==typeof e&&!(b=s.querySelector(e)))throw new Error("`".concat(t,"` as selector refers to no known node"));return b},G=function(){var t=W("initialFocus");if(!1===t)return!1;if(void 0===t||!(0,l.h)(t,u.tabbableOptions))if(S(s.activeElement)>=0)t=s.activeElement;else{var e=r.tabbableGroups[0];t=e&&e.firstTabbableNode||W("fallbackFocus")}if(!t)throw new Error("Your focus-trap needs to have at least one focusable element");return t},$=function(){if(r.containerGroups=r.containers.map(function(t){var e=(0,l.j)(t,u.tabbableOptions),i=(0,l.k)(t,u.tabbableOptions),d=e.length>0?e[0]:void 0,f=e.length>0?e[e.length-1]:void 0,b=i.find(function(g){return(0,l.l)(g)}),p=i.slice().reverse().find(function(g){return(0,l.l)(g)}),_=!!e.find(function(g){return(0,l.m)(g)>0});return{container:t,tabbableNodes:e,focusableNodes:i,posTabIndexesFound:_,firstTabbableNode:d,lastTabbableNode:f,firstDomTabbableNode:b,lastDomTabbableNode:p,nextTabbableNode:function(j){var Y=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],R=e.indexOf(j);return R<0?Y?i.slice(i.indexOf(j)+1).find(function(V){return(0,l.l)(V)}):i.slice(0,i.indexOf(j)).reverse().find(function(V){return(0,l.l)(V)}):e[R+(Y?1:-1)]}}}),r.tabbableGroups=r.containerGroups.filter(function(t){return t.tabbableNodes.length>0}),r.tabbableGroups.length<=0&&!W("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");if(r.containerGroups.find(function(t){return t.posTabIndexesFound})&&r.containerGroups.length>1)throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")},be=function v(t){var e=t.activeElement;if(e)return e.shadowRoot&&null!==e.shadowRoot.activeElement?v(e.shadowRoot):e},I=function v(t){if(!1!==t&&t!==be(document)){if(!t||!t.focus)return void v(G());t.focus({preventScroll:!!u.preventScroll}),r.mostRecentlyFocusedNode=t,function(a){return a.tagName&&"input"===a.tagName.toLowerCase()&&"function"==typeof a.select}(t)&&t.select()}},oe=function(t){var e=W("setReturnFocus",t);return e||!1!==e&&t},se=function(t){var e=t.target,i=t.event,d=t.isBackward,f=void 0!==d&&d;e=e||F(i),$();var b=null;if(r.tabbableGroups.length>0){var p=S(e,i),_=p>=0?r.containerGroups[p]:void 0;if(p<0)b=f?r.tabbableGroups[r.tabbableGroups.length-1].lastTabbableNode:r.tabbableGroups[0].firstTabbableNode;else if(f){var g=z(r.tabbableGroups,function(ie){return e===ie.firstTabbableNode});if(g<0&&(_.container===e||(0,l.h)(e,u.tabbableOptions)&&!(0,l.l)(e,u.tabbableOptions)&&!_.nextTabbableNode(e,!1))&&(g=p),g>=0){var Y=r.tabbableGroups[0===g?r.tabbableGroups.length-1:g-1];b=(0,l.m)(e)>=0?Y.lastTabbableNode:Y.lastDomTabbableNode}else m(i)||(b=_.nextTabbableNode(e,!1))}else{var R=z(r.tabbableGroups,function(ie){return e===ie.lastTabbableNode});if(R<0&&(_.container===e||(0,l.h)(e,u.tabbableOptions)&&!(0,l.l)(e,u.tabbableOptions)&&!_.nextTabbableNode(e))&&(R=p),R>=0){var ve=r.tabbableGroups[R===r.tabbableGroups.length-1?0:R+1];b=(0,l.m)(e)>=0?ve.firstTabbableNode:ve.firstDomTabbableNode}else m(i)||(b=_.nextTabbableNode(e))}}else b=W("fallbackFocus");return b},ee=function(t){var e=F(t);if(!(S(e,t)>=0)){if(w(u.clickOutsideDeactivates,t))return void L.deactivate({returnFocus:u.returnFocusOnDeactivate});w(u.allowOutsideClick,t)||t.preventDefault()}},ce=function(t){var e=F(t),i=S(e,t)>=0;if(i||e instanceof Document)i&&(r.mostRecentlyFocusedNode=e);else{t.stopImmediatePropagation();var d,f=!0;if(r.mostRecentlyFocusedNode)if((0,l.m)(r.mostRecentlyFocusedNode)>0){var b=S(r.mostRecentlyFocusedNode),p=r.containerGroups[b].tabbableNodes;if(p.length>0){var _=p.findIndex(function(g){return g===r.mostRecentlyFocusedNode});_>=0&&(u.isKeyForward(r.recentNavEvent)?_+1<p.length&&(d=p[_+1],f=!1):_-1>=0&&(d=p[_-1],f=!1))}}else r.containerGroups.some(function(g){return g.tabbableNodes.some(function(j){return(0,l.m)(j)>0})})||(f=!1);else f=!1;f&&(d=se({target:r.mostRecentlyFocusedNode,isBackward:u.isKeyBackward(r.recentNavEvent)})),I(d||r.mostRecentlyFocusedNode||G())}r.recentNavEvent=void 0},le=function(t){if(function(a){return"Escape"===a?.key||"Esc"===a?.key||27===a?.keyCode}(t)&&!1!==w(u.escapeDeactivates,t))return t.preventDefault(),void L.deactivate();(u.isKeyForward(t)||u.isKeyBackward(t))&&function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];r.recentNavEvent=t;var i=se({event:t,isBackward:e});i&&(m(t)&&t.preventDefault(),I(i))}(t,u.isKeyBackward(t))},ue=function(t){var e=F(t);S(e,t)>=0||w(u.clickOutsideDeactivates,t)||w(u.allowOutsideClick,t)||(t.preventDefault(),t.stopImmediatePropagation())},de=function(){if(r.active)return function(a,c){if(a.length>0){var s=a[a.length-1];s!==c&&s.pause()}var h=a.indexOf(c);-1===h||a.splice(h,1),a.push(c)}(h,L),r.delayInitialFocusTimer=u.delayInitialFocus?M(function(){I(G())}):I(G()),s.addEventListener("focusin",ce,!0),s.addEventListener("mousedown",ee,{capture:!0,passive:!1}),s.addEventListener("touchstart",ee,{capture:!0,passive:!1}),s.addEventListener("click",ue,{capture:!0,passive:!1}),s.addEventListener("keydown",le,{capture:!0,passive:!1}),L},fe=function(){if(r.active)return s.removeEventListener("focusin",ce,!0),s.removeEventListener("mousedown",ee,!0),s.removeEventListener("touchstart",ee,!0),s.removeEventListener("click",ue,!0),s.removeEventListener("keydown",le,!0),L},re=typeof window<"u"&&"MutationObserver"in window?new MutationObserver(function(t){t.some(function(i){return Array.from(i.removedNodes).some(function(f){return f===r.mostRecentlyFocusedNode})})&&I(G())}):void 0,H=function(){re&&(re.disconnect(),r.active&&!r.paused&&r.containers.map(function(t){re.observe(t,{subtree:!0,childList:!0})}))};return(L={get active(){return r.active},get paused(){return r.paused},activate:function(t){if(r.active)return this;var e=N(t,"onActivate"),i=N(t,"onPostActivate"),d=N(t,"checkCanFocusTrap");d||$(),r.active=!0,r.paused=!1,r.nodeFocusedBeforeActivation=s.activeElement,e?.();var f=function(){d&&$(),de(),H(),i?.()};return d?(d(r.containers.concat()).then(f,f),this):(f(),this)},deactivate:function(t){if(!r.active)return this;var e=O({onDeactivate:u.onDeactivate,onPostDeactivate:u.onPostDeactivate,checkCanReturnFocus:u.checkCanReturnFocus},t);clearTimeout(r.delayInitialFocusTimer),r.delayInitialFocusTimer=void 0,fe(),r.active=!1,r.paused=!1,H(),function(a,c){var s=a.indexOf(c);-1!==s&&a.splice(s,1),a.length>0&&a[a.length-1].unpause()}(h,L);var i=N(e,"onDeactivate"),d=N(e,"onPostDeactivate"),f=N(e,"checkCanReturnFocus"),b=N(e,"returnFocus","returnFocusOnDeactivate");i?.();var p=function(){M(function(){b&&I(oe(r.nodeFocusedBeforeActivation)),d?.()})};return b&&f?(f(oe(r.nodeFocusedBeforeActivation)).then(p,p),this):(p(),this)},pause:function(t){if(r.paused||!r.active)return this;var e=N(t,"onPause"),i=N(t,"onPostPause");return r.paused=!0,e?.(),fe(),H(),i?.(),this},unpause:function(t){if(!r.paused||!r.active)return this;var e=N(t,"onUnpause"),i=N(t,"onPostUnpause");return r.paused=!1,e?.(),$(),de(),H(),i?.(),this},updateContainerElements:function(t){var e=[].concat(t).filter(Boolean);return r.containers=e.map(function(i){return"string"==typeof i?s.querySelector(i):i}),r.active&&$(),H(),this}}).updateContainerElements(a),L};const U=globalThis.calciteConfig?.focusTrapStack||[];function X(o,a){const{el:c}=o,s=a?.focusTrapEl||c;if(!s)return;const h={clickOutsideDeactivates:!0,escapeDeactivates:!1,fallbackFocus:s,setReturnFocus:u=>((0,l.e)(u),!1),...a?.focusTrapOptions,document:c.ownerDocument,tabbableOptions:l.n,trapStack:U};o.focusTrap=J(s,h)}function Z(o,a){o.focusTrapDisabled||o.focusTrap?.activate(a)}function ae(o,a){o.focusTrap?.deactivate(a)}function q(o){o.focusTrap?.updateContainerElements(o.el)}},40789:(te,B,E)=>{E.d(B,{a:()=>k,c:()=>y,s:()=>n});var l=E(10467),T=E(58560);const O=new WeakMap,x=new WeakMap;function n(m){x.set(m,new Promise(D=>O.set(m,D)))}function k(m){O.get(m)()}function y(m){return P.apply(this,arguments)}function P(){return(P=(0,l.A)(function*(m){if(yield function C(m){return x.get(m)}(m),T.L2.isBrowser)return(0,T.$x)(m),new Promise(D=>requestAnimationFrame(()=>D()))})).apply(this,arguments)}},13594:(te,B,E)=>{E.d(B,{L:()=>n,d:()=>k});var l=E(58560),T=E(95044);const n=(0,l.w$)(class extends l.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.inline=!1,this.label=void 0,this.scale="m",this.type=void 0,this.value=0,this.text=""}render(){const{el:y,inline:P,label:m,scale:D,text:A,type:M,value:z}=this,w=y.id||(0,T.g)(),K=P?this.getInlineSize(D):this.getSize(D),J=.45*K,Q=`0 0 ${K} ${K}`,U="determinate"===M,X=2*J*Math.PI,Z=z/100*X,ae=X-Z,q=Math.floor(z),a={r:J,cx:K/2,cy:K/2},c={"stroke-dasharray":`${Z} ${ae}`};return(0,l.h)(l.xr,{key:"1042b6b24e04a6e4582947c6a544da715ff255a4","aria-label":m,id:w,role:"progressbar",...U?{"aria-valuenow":q,"aria-valuemin":0,"aria-valuemax":100,complete:100===q}:{}},(0,l.h)("div",{key:"4fa16470d15e126378e330a03732e0f5f5fe12a6",class:"loader__svgs"},(0,l.h)("svg",{key:"f2f2349163dd4280309cae9a53d20596850e89ae","aria-hidden":"true",class:"loader__svg loader__svg--1",viewBox:Q},(0,l.h)("circle",{key:"cab1f07b5e5f275709446ee13e9a06212bc544a9",...a})),(0,l.h)("svg",{key:"f8d6bedac7cef0c7f619eec7734a1cda1b8021db","aria-hidden":"true",class:"loader__svg loader__svg--2",viewBox:Q},(0,l.h)("circle",{key:"778a680d0d93cdf7896c8bf225f153ea806e76ce",...a})),(0,l.h)("svg",{key:"80f42b04b4f0dd270c0a0f8063c9c5e6ed687b79","aria-hidden":"true",class:"loader__svg loader__svg--3",viewBox:Q,...U?{style:c}:{}},(0,l.h)("circle",{key:"3d4cb781a9af29810069f020aecffba667c72335",...a}))),A&&(0,l.h)("div",{key:"4e7b35dddd29bbcfc4043aecd14ee22131c9f5cc",class:"loader__text"},A),U&&(0,l.h)("div",{key:"396313f330b54f7f7a45ebac7ccb1cf8b8116471",class:"loader__percentage"},z))}getSize(y){return{s:32,m:56,l:80}[y]}getInlineSize(y){return{s:12,m:16,l:20}[y]}get el(){return this}static get style(){return'@charset "UTF-8";@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:host{position:relative;margin-inline:auto;display:none;align-items:center;justify-content:center;opacity:1;min-block-size:var(--calcite-loader-size);font-size:var(--calcite-loader-font-size);stroke:var(--calcite-color-brand);stroke-width:3;fill:none;transform:scale(1, 1);animation:loader-color-shift calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 2 / var(--calcite-internal-duration-factor)) alternate-reverse infinite linear;padding-block:var(--calcite-loader-padding, 4rem);will-change:contents}:host([scale=s]){--calcite-loader-font-size:var(--calcite-font-size--2);--calcite-loader-size:2rem;--calcite-loader-size-inline:0.75rem}:host([scale=m]){--calcite-loader-font-size:var(--calcite-font-size-0);--calcite-loader-size:4rem;--calcite-loader-size-inline:1rem}:host([scale=l]){--calcite-loader-font-size:var(--calcite-font-size-2);--calcite-loader-size:6rem;--calcite-loader-size-inline:1.5rem}:host([no-padding]){padding-block:0px}:host{display:flex}.loader__text{display:block;text-align:center;font-size:var(--calcite-font-size--2);line-height:1rem;color:var(--calcite-color-text-1);margin-block-start:calc(var(--calcite-loader-size) + 1.5rem)}.loader__percentage{position:absolute;display:block;text-align:center;color:var(--calcite-color-text-1);font-size:var(--calcite-loader-font-size);inline-size:var(--calcite-loader-size);inset-inline-start:50%;margin-inline-start:calc(var(--calcite-loader-size) / 2 * -1);line-height:0.25;transform:scale(1, 1)}.loader__svgs{position:absolute;overflow:visible;opacity:1;inline-size:var(--calcite-loader-size);block-size:var(--calcite-loader-size);inset-inline-start:50%;margin-inline-start:calc(var(--calcite-loader-size) / 2 * -1);animation-iteration-count:infinite;animation-timing-function:linear;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 6.66 / var(--calcite-internal-duration-factor));animation-name:loader-clockwise}.loader__svg{position:absolute;inset-block-start:0px;transform-origin:center;overflow:visible;inset-inline-start:0;inline-size:var(--calcite-loader-size);block-size:var(--calcite-loader-size);animation-iteration-count:infinite;animation-timing-function:linear}.loader__svg--1{animation-name:loader-offset-1}.loader__svg--2{animation-name:loader-offset-2}.loader__svg--3{animation-name:loader-offset-3}:host([type=determinate]){animation:none;stroke:var(--calcite-color-border-3)}:host([type=determinate]) .loader__svgs{animation:none}:host([type=determinate]) .loader__svg--3{animation:none;stroke:var(--calcite-color-brand);stroke-dasharray:150.79632;transform:rotate(-90deg);transition:all var(--calcite-internal-animation-timing-fast) linear}:host([inline]){position:relative;margin:0px;animation:none;stroke:currentColor;stroke-width:2;padding-block:0px;block-size:var(--calcite-loader-size-inline);min-block-size:var(--calcite-loader-size-inline);inline-size:var(--calcite-loader-size-inline);margin-inline-end:calc(var(--calcite-loader-size-inline) * 0.5);vertical-align:calc(var(--calcite-loader-size-inline) * -1 * 0.2)}:host([inline]) .loader__svgs{inset-block-start:0px;margin:0px;inset-inline-start:0;inline-size:var(--calcite-loader-size-inline);block-size:var(--calcite-loader-size-inline)}:host([inline]) .loader__svg{inline-size:var(--calcite-loader-size-inline);block-size:var(--calcite-loader-size-inline)}:host([complete]){opacity:0;transform:scale(0.75, 0.75);transform-origin:center;transition:opacity var(--calcite-internal-animation-timing-medium) linear 1000ms, transform var(--calcite-internal-animation-timing-medium) linear 1000ms}:host([complete]) .loader__svgs{opacity:0;transform:scale(0.75, 0.75);transform-origin:center;transition:opacity calc(180ms * var(--calcite-internal-duration-factor)) linear 800ms, transform calc(180ms * var(--calcite-internal-duration-factor)) linear 800ms}:host([complete]) .loader__percentage{color:var(--calcite-color-brand);transform:scale(1.05, 1.05);transform-origin:center;transition:color var(--calcite-internal-animation-timing-medium) linear, transform var(--calcite-internal-animation-timing-medium) linear}.loader__svg--1{stroke-dasharray:27.9252444444 139.6262222222;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 4.8 / var(--calcite-internal-duration-factor))}@keyframes loader-offset-1{0%{stroke-dasharray:27.9252444444 251.3272;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222 139.6262222222;stroke-dashoffset:-83.7757333333}100%{stroke-dasharray:27.9252444444 251.3272;stroke-dashoffset:-279.2524444444}}.loader__svg--2{stroke-dasharray:55.8504888889 139.6262222222;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 6.4 / var(--calcite-internal-duration-factor))}@keyframes loader-offset-2{0%{stroke-dasharray:55.8504888889 223.4019555556;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222 139.6262222222;stroke-dashoffset:-97.7383555556}100%{stroke-dasharray:55.8504888889 223.4019555556;stroke-dashoffset:-279.2524444444}}.loader__svg--3{stroke-dasharray:13.9626222222 139.6262222222;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 7.734 / var(--calcite-internal-duration-factor))}@keyframes loader-offset-3{0%{stroke-dasharray:13.9626222222 265.2898222222;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222 139.6262222222;stroke-dashoffset:-76.7944222222}100%{stroke-dasharray:13.9626222222 265.2898222222;stroke-dashoffset:-279.2524444444}}@keyframes loader-color-shift{0%{stroke:var(--calcite-color-brand)}33%{stroke:var(--calcite-color-brand-press)}66%{stroke:var(--calcite-color-brand-hover)}100%{stroke:var(--calcite-color-brand)}}@keyframes loader-clockwise{100%{transform:rotate(360deg)}}:host([hidden]){display:none}[hidden]{display:none}'}},[1,"calcite-loader",{inline:[516],label:[1],scale:[513],type:[513],value:[2],text:[1]}]);function k(){typeof customElements>"u"||["calcite-loader"].forEach(y=>{"calcite-loader"===y&&(customElements.get(y)||customElements.define(y,n))})}k()},20818:(te,B,E)=>{E.d(B,{o:()=>x});var l=E(58560);function T(n){return"opened"in n?n.opened:n.open}function O(n,k=!1){(k?n[n.transitionProp]:T(n))?n.onBeforeOpen():n.onBeforeClose(),(k?n[n.transitionProp]:T(n))?n.onOpen():n.onClose()}function x(n,k=!1){(0,l.gv)(()=>{if(n.transitionEl){let z=function(F){F.propertyName===n.openTransitionProp&&F.target===n.transitionEl&&(clearTimeout(M),n.transitionEl.removeEventListener("transitionstart",z),(k?n[n.transitionProp]:T(n))?n.onBeforeOpen():n.onBeforeClose())},w=function(F){F.propertyName===n.openTransitionProp&&F.target===n.transitionEl&&((k?n[n.transitionProp]:T(n))?n.onOpen():n.onClose(),n.transitionEl.removeEventListener("transitionend",w),n.transitionEl.removeEventListener("transitioncancel",w))};const{transitionDuration:C,transitionProperty:y}=getComputedStyle(n.transitionEl),P=C.split(","),A=P[y.split(",").indexOf(n.openTransitionProp)]??P[0];if("0s"===A)return void O(n,k);const M=setTimeout(()=>{n.transitionEl.removeEventListener("transitionstart",z),n.transitionEl.removeEventListener("transitionend",w),n.transitionEl.removeEventListener("transitioncancel",w),O(n,k)},1e3*parseFloat(A));n.transitionEl.addEventListener("transitionstart",z),n.transitionEl.addEventListener("transitionend",w),n.transitionEl.addEventListener("transitioncancel",w)}})}}}]);