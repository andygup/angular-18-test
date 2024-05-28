import{b as v}from"./chunk-6VELEYJV.js";import{a as L}from"./chunk-BIQ63WI5.js";import{j as $,k as C}from"./chunk-PE5J6BL3.js";import{a as N,b as O}from"./chunk-NFHPZN57.js";import{a as b,g as m}from"./chunk-3T7TAUC2.js";var z=new RegExp("\\.(0+)?$"),k=new RegExp("0+$"),a=class e{constructor(t){if(t instanceof e)return t;let[s,n]=K(t).split(".").concat("");this.value=BigInt(s+n.padEnd(e.DECIMALS,"0").slice(0,e.DECIMALS))+BigInt(e.ROUNDED&&n[e.DECIMALS]>="5"),this.isNegative=t.charAt(0)==="-"}getIntegersAndDecimals(){let t=this.value.toString().replace("-","").padStart(e.DECIMALS+1,"0"),s=t.slice(0,-e.DECIMALS),n=t.slice(-e.DECIMALS).replace(k,"");return{integers:s,decimals:n}}toString(){let{integers:t,decimals:s}=this.getIntegersAndDecimals();return`${this.isNegative?"-":""}${t}${s.length?"."+s:""}`}formatToParts(t){let{integers:s,decimals:n}=this.getIntegersAndDecimals(),r=t.numberFormatter.formatToParts(BigInt(s));return this.isNegative&&r.unshift({type:"minusSign",value:t.minusSign}),n.length&&(r.push({type:"decimal",value:t.decimal}),n.split("").forEach(i=>r.push({type:"fraction",value:i}))),r}format(t){let{integers:s,decimals:n}=this.getIntegersAndDecimals(),r=`${this.isNegative?t.minusSign:""}${t.numberFormatter.format(BigInt(s))}`,i=n.length?`${t.decimal}${n.split("").map(l=>t.numberFormatter.format(Number(l))).join("")}`:"";return`${r}${i}`}add(t){return e.fromBigInt(this.value+new e(t).value)}subtract(t){return e.fromBigInt(this.value-new e(t).value)}multiply(t){return e._divRound(this.value*new e(t).value,e.SHIFT)}divide(t){return e._divRound(this.value*e.SHIFT,new e(t).value)}};a.DECIMALS=100;a.ROUNDED=!0;a.SHIFT=BigInt("1"+"0".repeat(a.DECIMALS));a._divRound=(e,t)=>a.fromBigInt(e/t+(a.ROUNDED?e*BigInt(2)/t%BigInt(2):BigInt(0)));a.fromBigInt=e=>Object.assign(Object.create(a.prototype),{value:e,isNegative:e<BigInt(0)});function w(e){return!(!e||isNaN(Number(e)))}function ae(e){return!e||!J(e)?"":d(e,t=>{let s=!1,n=t.split("").filter((r,i)=>r.match(/\./g)&&!s?(s=!0,!0):r.match(/\-/g)&&i===0?!0:v.includes(r)).join("");return w(n)?new a(n).toString():""})}var M=/^([-0])0+(?=\d)/,P=/(?!^\.)\.$/,H=/(?!^-)-/g,U=/^-\b0\b\.?0*$/,Z=/0*$/,ce=e=>d(e,t=>{let s=t.replace(H,"").replace(P,"").replace(M,"$1");return w(s)?U.test(s)?s:G(s):t});function G(e){let t=e.split(".")[1],s=new a(e).toString(),[n,r]=s.split(".");return t&&r!==t?`${n}.${t}`:s}function d(e,t){if(!e)return e;let s=e.toLowerCase().indexOf("e")+1;return s?e.replace(/[eE]*$/g,"").substring(0,s).concat(e.slice(s).replace(/[eE]/g,"")).split(/[eE]/).map((n,r)=>t(r===1?n.replace(/\./g,""):n)).join("e").replace(/^e/,"1e"):t(e)}function K(e){let t=e.split(/[eE]/);if(t.length===1)return e;let s=+e;if(Number.isSafeInteger(s))return`${s}`;let n=e.charAt(0)==="-",r=+t[1],i=t[0].split("."),l=(n?i[0].substring(1):i[0])||"",I=i[1]||"",R=(c,o)=>{let g=Math.abs(o)-c.length,p=g>0?`${"0".repeat(g)}${c}`:c;return`${p.slice(0,o)}.${p.slice(o)}`},j=(c,o)=>{let g=o>c.length?`${c}${"0".repeat(o-c.length)}`:c;return`${g.slice(0,o)}.${g.slice(o)}`},F=r>0?`${l}${j(I,r)}`:`${R(l,r)}${I}`;return`${n?"-":""}${F.charAt(0)==="."?"0":""}${F.replace(z,"").replace(M,"")}`}function J(e){return v.some(t=>e.includes(t))}function oe(e,t,s){let n=t.split(".")[1];if(n){let r=n.match(Z)[0];if(r&&s.delocalize(e).length!==t.length&&n.indexOf("e")===-1){let i=s.decimal;return e=e.includes(i)?e:`${e}${i}`,e.padEnd(e.length+r.length,s.localize("0"))}}return e}var u="en",W=["ar","bg","bs","ca","cs","da","de","el",u,"es","et","fi","fr","he","hr","hu","id","it","ja","ko","lt","lv","no","nl","pl","pt-BR","pt-PT","ro","ru","sk","sl","sr","sv","th","tr","uk","vi","zh-CN","zh-HK","zh-TW"],X=["ar","bg","bs","ca","cs","da","de","de-AT","de-CH","el",u,"en-AU","en-CA","en-GB","es","es-MX","et","fi","fr","fr-CH","he","hi","hr","hu","id","it","it-CH","ja","ko","lt","lv","mk","no","nl","pl","pt","pt-PT","ro","ru","sk","sl","sr","sv","th","tr","uk","vi","zh-CN","zh-HK","zh-TW"],q=["arab","arabext","latn"],A=e=>q.includes(e),S=new Intl.NumberFormat().resolvedOptions().numberingSystem,B=S==="arab"||!A(S)?"latn":S,Q=e=>A(e)?e:B;function y(e,t="cldr"){let s=t==="cldr"?X:W;return e?s.includes(e)?e:(e=e.toLowerCase(),e==="nb"?"no":t==="t9n"&&e==="pt"?"pt-BR":(e.includes("-")&&(e=e.replace(/(\w+)-(\w+)/,(n,r,i)=>`${r}-${i.toUpperCase()}`),s.includes(e)||(e=e.split("-")[0])),e==="zh"?"zh-CN":s.includes(e)?e:(console.warn(`Translations for the "${e}" locale are not available and will fall back to the default, English (en).`),u))):u}var h=new Set;function ue(e){Y(e),h.size===0&&_?.observe(document.documentElement,{attributes:!0,attributeFilter:["lang"],subtree:!0}),h.add(e)}function Y(e){e.effectiveLocale=V(e)}function le(e){h.delete(e),h.size===0&&_.disconnect()}var _=L("mutation",e=>{e.forEach(t=>{let s=t.target;h.forEach(n=>{if(!C(s,n.el))return;let i=$(n.el,"[lang]");if(!i){n.effectiveLocale=u;return}let l=i.lang;n.effectiveLocale=i.hasAttribute("lang")&&l===""?u:l})})});function V(e){return e.el.lang||$(e.el,"[lang]")?.lang||document.documentElement.lang||u}var D=class{constructor(){this.delocalize=t=>this._numberFormatOptions?d(t,s=>s.replace(new RegExp(`[${this._minusSign}]`,"g"),"-").replace(new RegExp(`[${this._group}]`,"g"),"").replace(new RegExp(`[${this._decimal}]`,"g"),".").replace(new RegExp(`[${this._digits.join("")}]`,"g"),this._getDigitIndex)):t,this.localize=t=>this._numberFormatOptions?d(t,s=>w(s.trim())?new a(s.trim()).format(this).replace(new RegExp(`[${this._actualGroup}]`,"g"),this._group):s):t}get group(){return this._group}get decimal(){return this._decimal}get minusSign(){return this._minusSign}get digits(){return this._digits}get numberFormatter(){return this._numberFormatter}get numberFormatOptions(){return this._numberFormatOptions}set numberFormatOptions(t){if(t.locale=y(t?.locale),t.numberingSystem=Q(t?.numberingSystem),!this._numberFormatOptions&&t.locale===u&&t.numberingSystem===B&&Object.keys(t).length===2||JSON.stringify(this._numberFormatOptions)===JSON.stringify(t))return;this._numberFormatOptions=t,this._numberFormatter=new Intl.NumberFormat(this._numberFormatOptions.locale,this._numberFormatOptions),this._digits=[...new Intl.NumberFormat(this._numberFormatOptions.locale,{useGrouping:!1,numberingSystem:this._numberFormatOptions.numberingSystem}).format(9876543210)].reverse();let s=new Map(this._digits.map((r,i)=>[r,i])),n=new Intl.NumberFormat(this._numberFormatOptions.locale,{numberingSystem:this._numberFormatOptions.numberingSystem}).formatToParts(-123456789e-1);this._actualGroup=n.find(r=>r.type==="group").value,this._group=this._actualGroup.trim().length===0||this._actualGroup==" "?"\xA0":this._actualGroup,this._decimal=n.find(r=>r.type==="decimal").value,this._minusSign=n.find(r=>r.type==="minusSign").value,this._getDigitIndex=r=>s.get(r)}},ge=new D;var f={};function ee(e,t){return m(this,null,function*(){let s=`${t}_${e}`;return f[s]||(f[s]=fetch(O(`./assets/${t}/t9n/messages_${e}.json`)).then(n=>(n.ok||T(),n.json())).catch(()=>T())),f[s]})}function T(){throw new Error("could not fetch component message bundle")}function E(e){e.messages=b(b({},e.defaultMessages),e.messageOverrides)}function fe(e){return m(this,null,function*(){e.defaultMessages=yield x(e,e.effectiveLocale),E(e)})}function x(e,t){return m(this,null,function*(){if(!N.isBrowser)return{};let{el:s}=e,r=s.tagName.toLowerCase().replace("calcite-","");return ee(y(t,"t9n"),r)})}function pe(e,t){return m(this,null,function*(){e.defaultMessages=yield x(e,t),E(e)})}function be(e){e.onMessagesChange=te}function $e(e){e.onMessagesChange=void 0}function te(){E(this)}export{a,w as b,ae as c,ce as d,oe as e,ue as f,le as g,ge as h,fe as i,pe as j,be as k,$e as l};
