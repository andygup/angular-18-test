import{b as It}from"./chunk-VU5W7W6Y.js";import"./chunk-3T7TAUC2.js";var Ot,it,Ht,zt={exports:{}};Ot=zt,it=typeof document<"u"&&document.currentScript?document.currentScript.src:void 0,Ht=function(J={}){var ot,z,i=J!==void 0?J:{};i.ready=new Promise((t,n)=>{ot=t,z=n});var at=Object.assign({},i),ut=typeof window=="object",D=typeof importScripts=="function";typeof process=="object"&&typeof process.versions=="object"&&process.versions.node;var K,b="";function Dt(t){return i.locateFile?i.locateFile(t,b):b+t}(ut||D)&&(D?b=self.location.href:typeof document<"u"&&document.currentScript&&(b=document.currentScript.src),it&&(b=it),b=b.indexOf("blob:")!==0?b.substr(0,b.replace(/[?#].*/,"").lastIndexOf("/")+1):"",D&&(K=t=>{var n=new XMLHttpRequest;return n.open("GET",t,!1),n.responseType="arraybuffer",n.send(null),new Uint8Array(n.response)}));var U,V,Vt=i.print||console.log.bind(console),F=i.printErr||console.warn.bind(console);Object.assign(i,at),at=null,i.arguments&&i.arguments,i.thisProgram&&i.thisProgram,i.quit&&i.quit,i.wasmBinary&&(U=i.wasmBinary),i.noExitRuntime,typeof WebAssembly!="object"&&B("no native wasm support detected");var E,v,R,M,W,p,ct,st,ft,lt=!1;function dt(){var t=V.buffer;i.HEAP8=E=new Int8Array(t),i.HEAP16=R=new Int16Array(t),i.HEAP32=W=new Int32Array(t),i.HEAPU8=v=new Uint8Array(t),i.HEAPU16=M=new Uint16Array(t),i.HEAPU32=p=new Uint32Array(t),i.HEAPF32=ct=new Float32Array(t),i.HEAPF64=st=new Float64Array(t)}var pt=[],vt=[],ht=[];function Mt(){if(i.preRun)for(typeof i.preRun=="function"&&(i.preRun=[i.preRun]);i.preRun.length;)Nt(i.preRun.shift());Q(pt)}function Bt(){Q(vt)}function qt(){if(i.postRun)for(typeof i.postRun=="function"&&(i.postRun=[i.postRun]);i.postRun.length;)Gt(i.postRun.shift());Q(ht)}function Nt(t){pt.unshift(t)}function Lt(t){vt.unshift(t)}function Gt(t){ht.unshift(t)}var k=0,I=null;function Xt(t){k++,i.monitorRunDependencies&&i.monitorRunDependencies(k)}function Zt(t){if(k--,i.monitorRunDependencies&&i.monitorRunDependencies(k),k==0&&I){var n=I;I=null,n()}}function B(t){i.onAbort&&i.onAbort(t),F(t="Aborted("+t+")"),lt=!0,t+=". Build with -sASSERTIONS for more info.";var n=new WebAssembly.RuntimeError(t);throw z(n),n}var O,$t="data:application/octet-stream;base64,";function mt(t){return t.startsWith($t)}function gt(t){try{if(t==O&&U)return new Uint8Array(U);if(K)return K(t);throw"both async and sync fetching of the wasm failed"}catch(n){B(n)}}function Jt(t){return U||!ut&&!D||typeof fetch!="function"?Promise.resolve().then(()=>gt(t)):fetch(t,{credentials:"same-origin"}).then(n=>{if(!n.ok)throw"failed to load wasm binary file at '"+t+"'";return n.arrayBuffer()}).catch(()=>gt(t))}function yt(t,n,e){return Jt(t).then(r=>WebAssembly.instantiate(r,n)).then(r=>r).then(e,r=>{F("failed to asynchronously prepare wasm: "+r),B(r)})}function Kt(t,n,e,r){return t||typeof WebAssembly.instantiateStreaming!="function"||mt(n)||typeof fetch!="function"?yt(n,e,r):fetch(n,{credentials:"same-origin"}).then(o=>WebAssembly.instantiateStreaming(o,e).then(r,function(u){return F("wasm streaming compile failed: "+u),F("falling back to ArrayBuffer instantiation"),yt(n,e,r)}))}function Qt(){var t={env:Rt,wasi_snapshot_preview1:Rt};function n(r,o){var u=r.exports;return i.asm=u,V=i.asm.memory,dt(),ft=i.asm.__indirect_function_table,Lt(i.asm.__wasm_call_ctors),Zt(),u}function e(r){n(r.instance)}if(Xt(),i.instantiateWasm)try{return i.instantiateWasm(t,n)}catch(r){F("Module.instantiateWasm callback failed with error: "+r),z(r)}return Kt(U,O,t,e).catch(z),{}}function Q(t){for(;t.length>0;)t.shift()(i)}mt(O="i3s.wasm")||(O=Dt(O));var q=[];function Y(t){var n=q[t];return n||(t>=q.length&&(q.length=t+1),q[t]=n=ft.get(t)),n}function Yt(t,n){Y(t)(n)}function tn(t){this.excPtr=t,this.ptr=t-24,this.set_type=function(n){p[this.ptr+4>>2]=n},this.get_type=function(){return p[this.ptr+4>>2]},this.set_destructor=function(n){p[this.ptr+8>>2]=n},this.get_destructor=function(){return p[this.ptr+8>>2]},this.set_caught=function(n){n=n?1:0,E[this.ptr+12|0]=n},this.get_caught=function(){return E[this.ptr+12|0]!=0},this.set_rethrown=function(n){n=n?1:0,E[this.ptr+13|0]=n},this.get_rethrown=function(){return E[this.ptr+13|0]!=0},this.init=function(n,e){this.set_adjusted_ptr(0),this.set_type(n),this.set_destructor(e)},this.set_adjusted_ptr=function(n){p[this.ptr+16>>2]=n},this.get_adjusted_ptr=function(){return p[this.ptr+16>>2]},this.get_exception_ptr=function(){if(xt(this.get_type()))return p[this.excPtr>>2];var n=this.get_adjusted_ptr();return n!==0?n:this.excPtr}}function nn(t,n,e){throw new tn(t).init(n,e),t}var N={};function _t(t){for(;t.length;){var n=t.pop();t.pop()(n)}}function L(t){return this.fromWireType(W[t>>2])}var S={},j={},G={},en=48,rn=57;function on(t){if(t===void 0)return"_unknown";var n=(t=t.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return n>=en&&n<=rn?"_"+t:t}function an(t,n){return t=on(t),{[t]:function(){return n.apply(this,arguments)}}[t]}function tt(t,n){var e=an(n,function(r){this.name=n,this.message=r;var o=new Error(r).stack;o!==void 0&&(this.stack=this.toString()+`
`+o.replace(/^Error(:[^\n]*)?\n/,""))});return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.prototype.toString=function(){return this.message===void 0?this.name:this.name+": "+this.message},e}var wt=void 0;function bt(t){throw new wt(t)}function At(t,n,e){function r(a){var s=e(a);s.length!==t.length&&bt("Mismatched type converter count");for(var f=0;f<t.length;++f)A(t[f],s[f])}t.forEach(function(a){G[a]=n});var o=new Array(n.length),u=[],c=0;n.forEach((a,s)=>{j.hasOwnProperty(a)?o[s]=j[a]:(u.push(a),S.hasOwnProperty(a)||(S[a]=[]),S[a].push(()=>{o[s]=j[a],++c===u.length&&r(o)}))}),u.length===0&&r(o)}function un(t){var n=N[t];delete N[t];var e=n.rawConstructor,r=n.rawDestructor,o=n.fields;At([t],o.map(u=>u.getterReturnType).concat(o.map(u=>u.setterArgumentType)),u=>{var c={};return o.forEach((a,s)=>{var f=a.fieldName,l=u[s],d=a.getter,C=a.getterContext,y=u[s+o.length],_=a.setter,P=a.setterContext;c[f]={read:w=>l.fromWireType(d(C,w)),write:(w,rt)=>{var $=[];_(P,w,y.toWireType($,rt)),_t($)}}}),[{name:n.name,fromWireType:function(a){var s={};for(var f in c)s[f]=c[f].read(a);return r(a),s},toWireType:function(a,s){for(var f in c)if(!(f in s))throw new TypeError('Missing field:  "'+f+'"');var l=e();for(f in c)c[f].write(l,s[f]);return a!==null&&a.push(r,l),l},argPackAdvance:8,readValueFromPointer:L,destructorFunction:r}]})}function cn(t,n,e,r,o){}function nt(t){switch(t){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+t)}}function sn(){for(var t=new Array(256),n=0;n<256;++n)t[n]=String.fromCharCode(n);Tt=t}var Tt=void 0;function h(t){for(var n="",e=t;v[e];)n+=Tt[v[e++]];return n}var Ct=void 0;function m(t){throw new Ct(t)}function A(t,n,e={}){if(!("argPackAdvance"in n))throw new TypeError("registerType registeredInstance requires argPackAdvance");var r=n.name;if(t||m('type "'+r+'" must have a positive integer typeid pointer'),j.hasOwnProperty(t)){if(e.ignoreDuplicateRegistrations)return;m("Cannot register type '"+r+"' twice")}if(j[t]=n,delete G[t],S.hasOwnProperty(t)){var o=S[t];delete S[t],o.forEach(u=>u())}}function fn(t,n,e,r,o){var u=nt(e);A(t,{name:n=h(n),fromWireType:function(c){return!!c},toWireType:function(c,a){return a?r:o},argPackAdvance:8,readValueFromPointer:function(c){var a;if(e===1)a=E;else if(e===2)a=R;else{if(e!==4)throw new TypeError("Unknown boolean type size: "+n);a=W}return this.fromWireType(a[c>>u])},destructorFunction:null})}function ln(){this.allocated=[void 0],this.freelist=[],this.get=function(t){return this.allocated[t]},this.allocate=function(t){let n=this.freelist.pop()||this.allocated.length;return this.allocated[n]=t,n},this.free=function(t){this.allocated[t]=void 0,this.freelist.push(t)}}var g=new ln;function Pt(t){t>=g.reserved&&--g.get(t).refcount==0&&g.free(t)}function dn(){for(var t=0,n=g.reserved;n<g.allocated.length;++n)g.allocated[n]!==void 0&&++t;return t}function pn(){g.allocated.push({value:void 0},{value:null},{value:!0},{value:!1}),g.reserved=g.allocated.length,i.count_emval_handles=dn}var X={toValue:t=>(t||m("Cannot use deleted val. handle = "+t),g.get(t).value),toHandle:t=>{switch(t){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:return g.allocate({refcount:1,value:t})}}};function vn(t,n){A(t,{name:n=h(n),fromWireType:function(e){var r=X.toValue(e);return Pt(e),r},toWireType:function(e,r){return X.toHandle(r)},argPackAdvance:8,readValueFromPointer:L,destructorFunction:null})}function hn(t,n){switch(n){case 2:return function(e){return this.fromWireType(ct[e>>2])};case 3:return function(e){return this.fromWireType(st[e>>3])};default:throw new TypeError("Unknown float type: "+t)}}function mn(t,n,e){var r=nt(e);A(t,{name:n=h(n),fromWireType:function(o){return o},toWireType:function(o,u){return u},argPackAdvance:8,readValueFromPointer:hn(n,r),destructorFunction:null})}function gn(t,n,e,r,o,u){var c=n.length;c<2&&m("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var a=n[1]!==null&&e!==null,s=!1,f=1;f<n.length;++f)if(n[f]!==null&&n[f].destructorFunction===void 0){s=!0;break}var l=n[0].name!=="void",d=c-2,C=new Array(d),y=[],_=[];return function(){var P;arguments.length!==d&&m("function "+t+" called with "+arguments.length+" arguments, expected "+d+" args!"),_.length=0,y.length=a?2:1,y[0]=o,a&&(P=n[1].toWireType(_,this),y[1]=P);for(var w=0;w<d;++w)C[w]=n[w+2].toWireType(_,arguments[w]),y.push(C[w]);function rt($){if(s)_t(_);else for(var x=a?1:2;x<n.length;x++){var ue=x===1?P:C[x-2];n[x].destructorFunction!==null&&n[x].destructorFunction(ue)}if(l)return n[0].fromWireType($)}return rt(r.apply(null,y))}}function yn(t,n,e){if(t[n].overloadTable===void 0){var r=t[n];t[n]=function(){return t[n].overloadTable.hasOwnProperty(arguments.length)||m("Function '"+e+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+t[n].overloadTable+")!"),t[n].overloadTable[arguments.length].apply(this,arguments)},t[n].overloadTable=[],t[n].overloadTable[r.argCount]=r}}function _n(t,n,e){i.hasOwnProperty(t)?((e===void 0||i[t].overloadTable!==void 0&&i[t].overloadTable[e]!==void 0)&&m("Cannot register public name '"+t+"' twice"),yn(i,t,t),i.hasOwnProperty(e)&&m("Cannot register multiple overloads of a function with the same number of arguments ("+e+")!"),i[t].overloadTable[e]=n):(i[t]=n,e!==void 0&&(i[t].numArguments=e))}function wn(t,n){for(var e=[],r=0;r<t;r++)e.push(p[n+4*r>>2]);return e}function bn(t,n,e){i.hasOwnProperty(t)||bt("Replacing nonexistant public symbol"),i[t].overloadTable!==void 0&&e!==void 0?i[t].overloadTable[e]=n:(i[t]=n,i[t].argCount=e)}function An(t,n,e){var r=i["dynCall_"+t];return e&&e.length?r.apply(null,[n].concat(e)):r.call(null,n)}function Tn(t,n,e){return t.includes("j")?An(t,n,e):Y(n).apply(null,e)}function Cn(t,n){var e=[];return function(){return e.length=0,Object.assign(e,arguments),Tn(t,n,e)}}function H(t,n){function e(){return t.includes("j")?Cn(t,n):Y(n)}t=h(t);var r=e();return typeof r!="function"&&m("unknown function pointer with signature "+t+": "+n),r}var Et=void 0;function Wt(t){var n=St(t),e=h(n);return T(n),e}function Pn(t,n){var e=[],r={};function o(u){r[u]||j[u]||(G[u]?G[u].forEach(o):(e.push(u),r[u]=!0))}throw n.forEach(o),new Et(t+": "+e.map(Wt).join([", "]))}function En(t,n,e,r,o,u,c){var a=wn(n,e);t=h(t),o=H(r,o),_n(t,function(){Pn("Cannot call "+t+" due to unbound types",a)},n-1),At([],a,function(s){var f=[s[0],null].concat(s.slice(1));return bn(t,gn(t,f,null,o,u),n-1),[]})}function Wn(t,n,e){switch(n){case 0:return e?function(r){return E[r]}:function(r){return v[r]};case 1:return e?function(r){return R[r>>1]}:function(r){return M[r>>1]};case 2:return e?function(r){return W[r>>2]}:function(r){return p[r>>2]};default:throw new TypeError("Unknown integer type: "+t)}}function kn(t,n,e,r,o){n=h(n);var u=nt(e),c=l=>l;if(r===0){var a=32-8*e;c=l=>l<<a>>>a}var s=n.includes("unsigned"),f=(l,d)=>{};A(t,{name:n,fromWireType:c,toWireType:s?function(l,d){return f(d,this.name),d>>>0}:function(l,d){return f(d,this.name),d},argPackAdvance:8,readValueFromPointer:Wn(n,u,r!==0),destructorFunction:null})}function jn(t,n,e){var r=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][n];function o(u){var c=p,a=c[u>>=2],s=c[u+1];return new r(c.buffer,s,a)}A(t,{name:e=h(e),fromWireType:o,argPackAdvance:8,readValueFromPointer:o},{ignoreDuplicateRegistrations:!0})}function Fn(t,n,e,r){if(!(r>0))return 0;for(var o=e,u=e+r-1,c=0;c<t.length;++c){var a=t.charCodeAt(c);if(a>=55296&&a<=57343&&(a=65536+((1023&a)<<10)|1023&t.charCodeAt(++c)),a<=127){if(e>=u)break;n[e++]=a}else if(a<=2047){if(e+1>=u)break;n[e++]=192|a>>6,n[e++]=128|63&a}else if(a<=65535){if(e+2>=u)break;n[e++]=224|a>>12,n[e++]=128|a>>6&63,n[e++]=128|63&a}else{if(e+3>=u)break;n[e++]=240|a>>18,n[e++]=128|a>>12&63,n[e++]=128|a>>6&63,n[e++]=128|63&a}}return n[e]=0,e-o}function Rn(t,n,e){return Fn(t,v,n,e)}function Sn(t){for(var n=0,e=0;e<t.length;++e){var r=t.charCodeAt(e);r<=127?n++:r<=2047?n+=2:r>=55296&&r<=57343?(n+=4,++e):n+=3}return n}var kt=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0;function jt(t,n,e){for(var r=n+e,o=n;t[o]&&!(o>=r);)++o;if(o-n>16&&t.buffer&&kt)return kt.decode(t.subarray(n,o));for(var u="";n<o;){var c=t[n++];if(128&c){var a=63&t[n++];if((224&c)!=192){var s=63&t[n++];if((c=(240&c)==224?(15&c)<<12|a<<6|s:(7&c)<<18|a<<12|s<<6|63&t[n++])<65536)u+=String.fromCharCode(c);else{var f=c-65536;u+=String.fromCharCode(55296|f>>10,56320|1023&f)}}else u+=String.fromCharCode((31&c)<<6|a)}else u+=String.fromCharCode(c)}return u}function xn(t,n){return t?jt(v,t,n):""}function Un(t,n){var e=(n=h(n))==="std::string";A(t,{name:n,fromWireType:function(r){var o,u=p[r>>2],c=r+4;if(e)for(var a=c,s=0;s<=u;++s){var f=c+s;if(s==u||v[f]==0){var l=xn(a,f-a);o===void 0?o=l:(o+="\0",o+=l),a=f+1}}else{var d=new Array(u);for(s=0;s<u;++s)d[s]=String.fromCharCode(v[c+s]);o=d.join("")}return T(r),o},toWireType:function(r,o){var u;o instanceof ArrayBuffer&&(o=new Uint8Array(o));var c=typeof o=="string";c||o instanceof Uint8Array||o instanceof Uint8ClampedArray||o instanceof Int8Array||m("Cannot pass non-string to std::string"),u=e&&c?Sn(o):o.length;var a=et(4+u+1),s=a+4;if(p[a>>2]=u,e&&c)Rn(o,s,u+1);else if(c)for(var f=0;f<u;++f){var l=o.charCodeAt(f);l>255&&(T(s),m("String has UTF-16 code units that do not fit in 8 bits")),v[s+f]=l}else for(f=0;f<u;++f)v[s+f]=o[f];return r!==null&&r.push(T,a),a},argPackAdvance:8,readValueFromPointer:L,destructorFunction:function(r){T(r)}})}var Ft=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0;function In(t,n){for(var e=t,r=e>>1,o=r+n/2;!(r>=o)&&M[r];)++r;if((e=r<<1)-t>32&&Ft)return Ft.decode(v.subarray(t,e));for(var u="",c=0;!(c>=n/2);++c){var a=R[t+2*c>>1];if(a==0)break;u+=String.fromCharCode(a)}return u}function On(t,n,e){if(e===void 0&&(e=2147483647),e<2)return 0;for(var r=n,o=(e-=2)<2*t.length?e/2:t.length,u=0;u<o;++u){var c=t.charCodeAt(u);R[n>>1]=c,n+=2}return R[n>>1]=0,n-r}function Hn(t){return 2*t.length}function zn(t,n){for(var e=0,r="";!(e>=n/4);){var o=W[t+4*e>>2];if(o==0)break;if(++e,o>=65536){var u=o-65536;r+=String.fromCharCode(55296|u>>10,56320|1023&u)}else r+=String.fromCharCode(o)}return r}function Dn(t,n,e){if(e===void 0&&(e=2147483647),e<4)return 0;for(var r=n,o=r+e-4,u=0;u<t.length;++u){var c=t.charCodeAt(u);if(c>=55296&&c<=57343&&(c=65536+((1023&c)<<10)|1023&t.charCodeAt(++u)),W[n>>2]=c,(n+=4)+4>o)break}return W[n>>2]=0,n-r}function Vn(t){for(var n=0,e=0;e<t.length;++e){var r=t.charCodeAt(e);r>=55296&&r<=57343&&++e,n+=4}return n}function Mn(t,n,e){var r,o,u,c,a;e=h(e),n===2?(r=In,o=On,c=Hn,u=()=>M,a=1):n===4&&(r=zn,o=Dn,c=Vn,u=()=>p,a=2),A(t,{name:e,fromWireType:function(s){for(var f,l=p[s>>2],d=u(),C=s+4,y=0;y<=l;++y){var _=s+4+y*n;if(y==l||d[_>>a]==0){var P=r(C,_-C);f===void 0?f=P:(f+="\0",f+=P),C=_+n}}return T(s),f},toWireType:function(s,f){typeof f!="string"&&m("Cannot pass non-string to C++ string type "+e);var l=c(f),d=et(4+l+n);return p[d>>2]=l>>a,o(f,d+4,l+n),s!==null&&s.push(T,d),d},argPackAdvance:8,readValueFromPointer:L,destructorFunction:function(s){T(s)}})}function Bn(t,n,e,r,o,u){N[t]={name:h(n),rawConstructor:H(e,r),rawDestructor:H(o,u),fields:[]}}function qn(t,n,e,r,o,u,c,a,s,f){N[t].fields.push({fieldName:h(n),getterReturnType:e,getter:H(r,o),getterContext:u,setterArgumentType:c,setter:H(a,s),setterContext:f})}function Nn(t,n){A(t,{isVoid:!0,name:n=h(n),argPackAdvance:0,fromWireType:function(){},toWireType:function(e,r){}})}function Ln(t){t>4&&(g.get(t).refcount+=1)}var Gn={};function Xn(t){var n=Gn[t];return n===void 0?h(t):n}function Zn(t){return X.toHandle(Xn(t))}function $n(t,n){var e=j[t];return e===void 0&&m(n+" has unknown type "+Wt(t)),e}function Jn(t,n){var e=(t=$n(t,"_emval_take_value")).readValueFromPointer(n);return X.toHandle(e)}function Kn(){B("")}function Qn(t,n,e){v.copyWithin(t,n,n+e)}function Yn(){return 2147483648}function te(t){var n=V.buffer;try{return V.grow(t-n.byteLength+65535>>>16),dt(),1}catch{}}function ne(t){var n=v.length;t>>>=0;var e=Yn();if(t>e)return!1;let r=(c,a)=>c+(a-c%a)%a;for(var o=1;o<=4;o*=2){var u=n*(1+.2/o);if(u=Math.min(u,t+100663296),te(Math.min(e,r(Math.max(t,u),65536))))return!0}return!1}function ee(t){return 52}function re(t,n,e,r,o){return 70}var ie=[null,[],[]];function oe(t,n){var e=ie[t];n===0||n===10?((t===1?Vt:F)(jt(e,0)),e.length=0):e.push(n)}function ae(t,n,e,r){for(var o=0,u=0;u<e;u++){var c=p[n>>2],a=p[n+4>>2];n+=8;for(var s=0;s<a;s++)oe(t,v[c+s]);o+=a}return p[r>>2]=o,0}wt=i.InternalError=tt(Error,"InternalError"),sn(),Ct=i.BindingError=tt(Error,"BindingError"),pn(),Et=i.UnboundTypeError=tt(Error,"UnboundTypeError");var Rt={__call_sighandler:Yt,__cxa_throw:nn,_embind_finalize_value_object:un,_embind_register_bigint:cn,_embind_register_bool:fn,_embind_register_emval:vn,_embind_register_float:mn,_embind_register_function:En,_embind_register_integer:kn,_embind_register_memory_view:jn,_embind_register_std_string:Un,_embind_register_std_wstring:Mn,_embind_register_value_object:Bn,_embind_register_value_object_field:qn,_embind_register_void:Nn,_emval_decref:Pt,_emval_incref:Ln,_emval_new_cstring:Zn,_emval_take_value:Jn,abort:Kn,emscripten_memcpy_big:Qn,emscripten_resize_heap:ne,fd_close:ee,fd_seek:re,fd_write:ae};Qt();var et=function(){return(et=i.asm.malloc).apply(null,arguments)},T=function(){return(T=i.asm.free).apply(null,arguments)},St=function(){return(St=i.asm.__getTypeName).apply(null,arguments)};i.__embind_initialize_bindings=function(){return(i.__embind_initialize_bindings=i.asm._embind_initialize_bindings).apply(null,arguments)};var Z,xt=function(){return(xt=i.asm.__cxa_is_pointer_type).apply(null,arguments)};function Ut(){function t(){Z||(Z=!0,i.calledRun=!0,lt||(Bt(),ot(i),i.onRuntimeInitialized&&i.onRuntimeInitialized(),qt()))}k>0||(Mt(),k>0||(i.setStatus?(i.setStatus("Running..."),setTimeout(function(){setTimeout(function(){i.setStatus("")},1),t()},1)):t()))}if(i.dynCall_vij=function(){return(i.dynCall_vij=i.asm.dynCall_vij).apply(null,arguments)},i.dynCall_jiji=function(){return(i.dynCall_jiji=i.asm.dynCall_jiji).apply(null,arguments)},I=function t(){Z||Ut(),Z||(I=t)},i.preInit)for(typeof i.preInit=="function"&&(i.preInit=[i.preInit]);i.preInit.length>0;)i.preInit.pop()();return Ut(),J.ready},Ot.exports=Ht;var ce=It(zt.exports),fe=Object.freeze(Object.defineProperty({__proto__:null,default:ce},Symbol.toStringTag,{value:"Module"}));export{fe as i};
