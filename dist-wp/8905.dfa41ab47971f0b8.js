"use strict";(self.webpackChunkangular_18_test=self.webpackChunkangular_18_test||[]).push([[8905],{68905:(fn,_t,Ft)=>{Ft.r(_t),Ft.d(_t,{default:()=>fe});var pt,fe=(pt=typeof document<"u"?document.currentScript?.src:void 0,function(ve={}){var kt,Z,c=Object.assign({},ve),ye=new Promise((t,e)=>{kt=t,Z=e}),St=Object.assign({},c),F="";typeof document<"u"&&document.currentScript&&(F=document.currentScript.src),pt&&(F=pt),F=F.startsWith("blob:")?"":F.substr(0,F.replace(/[?#].*/,"").lastIndexOf("/")+1);var N,X,$e=c.print||console.log.bind(console),D=c.printErr||console.error.bind(console);Object.assign(c,St),St=null,c.wasmBinary&&(N=c.wasmBinary);var k,g,I,M,V,f,Ot,jt,Et=!1;function Rt(){var t=X.buffer;c.HEAP8=k=new Int8Array(t),c.HEAP16=I=new Int16Array(t),c.HEAPU8=g=new Uint8Array(t),c.HEAPU16=M=new Uint16Array(t),c.HEAP32=V=new Int32Array(t),c.HEAPU32=f=new Uint32Array(t),c.HEAPF32=Ot=new Float32Array(t),c.HEAPF64=jt=new Float64Array(t)}var Dt=[],It=[],Vt=[],E=0,z=null;function xt(t){c.onAbort?.(t),D(t="Aborted("+t+")"),Et=!0,t+=". Build with -sASSERTIONS for more info.";var e=new WebAssembly.RuntimeError(t);throw Z(e),e}var Y,Ht=t=>t.startsWith("data:application/octet-stream;base64,");function Ut(t){if(t==Y&&N)return new Uint8Array(N);throw"both async and sync fetching of the wasm failed"}function Bt(t,e,r){return function Se(t){return N||"function"!=typeof fetch?Promise.resolve().then(()=>Ut(t)):fetch(t,{credentials:"same-origin"}).then(e=>{if(!e.ok)throw`failed to load wasm binary file at '${t}'`;return e.arrayBuffer()}).catch(()=>Ut(t))}(t).then(n=>WebAssembly.instantiate(n,e)).then(r,n=>{D(`failed to asynchronously prepare wasm: ${n}`),xt(n)})}var ht=t=>{for(;t.length>0;)t.shift()(c)};class Re{constructor(e){this.excPtr=e,this.ptr=e-24}set_type(e){f[this.ptr+4>>2]=e}get_type(){return f[this.ptr+4>>2]}set_destructor(e){f[this.ptr+8>>2]=e}get_destructor(){return f[this.ptr+8>>2]}set_caught(e){k[this.ptr+12]=e=e?1:0}get_caught(){return 0!=k[this.ptr+12]}set_rethrown(e){k[this.ptr+13]=e=e?1:0}get_rethrown(){return 0!=k[this.ptr+13]}init(e,r){this.set_adjusted_ptr(0),this.set_type(e),this.set_destructor(r)}set_adjusted_ptr(e){f[this.ptr+16>>2]=e}get_adjusted_ptr(){return f[this.ptr+16>>2]}get_exception_ptr(){if(ce(this.get_type()))return f[this.excPtr>>2];var e=this.get_adjusted_ptr();return 0!==e?e:this.excPtr}}var tt={},dt=t=>{for(;t.length;){var e=t.pop();t.pop()(e)}};function q(t){return this.fromWireType(f[t>>2])}var Nt,Mt,x,H={},R={},et={},rt=t=>{throw new Nt(t)},S=(t,e,r)=>{function n(i){var s=r(i);s.length!==t.length&&rt("Mismatched type converter count");for(var l=0;l<t.length;++l)C(t[l],s[l])}t.forEach(function(i){et[i]=e});var a=new Array(e.length),o=[],u=0;e.forEach((i,s)=>{R.hasOwnProperty(i)?a[s]=R[i]:(o.push(i),H.hasOwnProperty(i)||(H[i]=[]),H[i].push(()=>{a[s]=R[i],++u===o.length&&n(a)}))}),0===o.length&&n(a)},m=t=>{for(var e="",r=t;g[r];)e+=Mt[g[r++]];return e},d=t=>{throw new x(t)};function C(t,e,r={}){if(!("argPackAdvance"in e))throw new TypeError("registerType registeredInstance requires argPackAdvance");return function Ue(t,e,r={}){var n=e.name;if(t||d(`type "${n}" must have a positive integer typeid pointer`),R.hasOwnProperty(t)){if(r.ignoreDuplicateRegistrations)return;d(`Cannot register type '${n}' twice`)}if(R[t]=e,delete et[t],H.hasOwnProperty(t)){var a=H[t];delete H[t],a.forEach(o=>o())}}(t,e,r)}var G,Ne=t=>({count:t.count,deleteScheduled:t.deleteScheduled,preservePointerOnDelete:t.preservePointerOnDelete,ptr:t.ptr,ptrType:t.ptrType,smartPtr:t.smartPtr,smartPtrType:t.smartPtrType}),ft=t=>{d(function e(r){return r.$$.ptrType.registeredClass.name}(t)+" instance already deleted")},vt=!1,zt=t=>{},qt=t=>{t.count.value-=1,0===t.count.value&&(t=>{t.smartPtr?t.smartPtrType.rawDestructor(t.smartPtr):t.ptrType.registeredClass.rawDestructor(t.ptr)})(t)},Gt=(t,e,r)=>{if(e===r)return t;if(void 0===r.baseClass)return null;var n=Gt(t,e,r.baseClass);return null===n?null:r.downcast(n)},Lt={},L=[],yt=()=>{for(;L.length;){var t=L.pop();t.$$.deleteScheduled=!1,t.delete()}},J={},nt=(t,e)=>(e.ptrType&&e.ptr||rt("makeClassHandle requires ptr and ptrType"),!!e.smartPtrType!=!!e.smartPtr&&rt("Both smartPtrType and smartPtr must be specified"),e.count={value:1},K(Object.create(t,{$$:{value:e,writable:!0}})));var K=t=>typeof FinalizationRegistry>"u"?(K=e=>e,t):(vt=new FinalizationRegistry(e=>{qt(e.$$)}),zt=e=>vt.unregister(e),(K=e=>{var r=e.$$;return r.smartPtr&&vt.register(e,{$$:r},e),e})(t));function at(){}var U=(t,e)=>Object.defineProperty(e,"name",{value:t}),Jt=(t,e,r)=>{if(void 0===t[e].overloadTable){var n=t[e];t[e]=function(...a){return t[e].overloadTable.hasOwnProperty(a.length)||d(`Function '${r}' called with an invalid number of arguments (${a.length}) - expects one of (${t[e].overloadTable})!`),t[e].overloadTable[a.length].apply(this,a)},t[e].overloadTable=[],t[e].overloadTable[n.argCount]=n}},mt=(t,e,r)=>{c.hasOwnProperty(t)?((void 0===r||void 0!==c[t].overloadTable&&void 0!==c[t].overloadTable[r])&&d(`Cannot register public name '${t}' twice`),Jt(c,t,t),c.hasOwnProperty(r)&&d(`Cannot register multiple overloads of a function with the same number of arguments (${r})!`),c[t].overloadTable[r]=e):(c[t]=e,void 0!==r&&(c[t].numArguments=r))};function er(t,e,r,n,a,o,u,i){this.name=t,this.constructor=e,this.instancePrototype=r,this.rawDestructor=n,this.baseClass=a,this.getActualType=o,this.upcast=u,this.downcast=i,this.pureVirtualFunctions=[]}var gt=(t,e,r)=>{for(;e!==r;)e.upcast||d(`Expected null or instance of ${r.name}, got an instance of ${e.name}`),t=e.upcast(t),e=e.baseClass;return t};function rr(t,e){return null===e?(this.isReference&&d(`null is not a valid ${this.name}`),0):(e.$$||d(`Cannot pass "${Pt(e)}" as a ${this.name}`),e.$$.ptr||d(`Cannot pass deleted object as a pointer of type ${this.name}`),gt(e.$$.ptr,e.$$.ptrType.registeredClass,this.registeredClass))}function nr(t,e){var r;if(null===e)return this.isReference&&d(`null is not a valid ${this.name}`),this.isSmartPointer?(r=this.rawConstructor(),null!==t&&t.push(this.rawDestructor,r),r):0;if(e&&e.$$||d(`Cannot pass "${Pt(e)}" as a ${this.name}`),e.$$.ptr||d(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&e.$$.ptrType.isConst&&d(`Cannot convert argument of type ${e.$$.smartPtrType?e.$$.smartPtrType.name:e.$$.ptrType.name} to parameter type ${this.name}`),r=gt(e.$$.ptr,e.$$.ptrType.registeredClass,this.registeredClass),this.isSmartPointer)switch(void 0===e.$$.smartPtr&&d("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:e.$$.smartPtrType===this?r=e.$$.smartPtr:d(`Cannot convert argument of type ${e.$$.smartPtrType?e.$$.smartPtrType.name:e.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:r=e.$$.smartPtr;break;case 2:if(e.$$.smartPtrType===this)r=e.$$.smartPtr;else{var a=e.clone();r=this.rawShare(r,$.toHandle(()=>a.delete())),null!==t&&t.push(this.rawDestructor,r)}break;default:d("Unsupporting sharing policy")}return r}function ar(t,e){return null===e?(this.isReference&&d(`null is not a valid ${this.name}`),0):(e.$$||d(`Cannot pass "${Pt(e)}" as a ${this.name}`),e.$$.ptr||d(`Cannot pass deleted object as a pointer of type ${this.name}`),e.$$.ptrType.isConst&&d(`Cannot convert argument of type ${e.$$.ptrType.name} to parameter type ${this.name}`),gt(e.$$.ptr,e.$$.ptrType.registeredClass,this.registeredClass))}function ot(t,e,r,n,a,o,u,i,s,l,p){this.name=t,this.registeredClass=e,this.isReference=r,this.isConst=n,this.isSmartPointer=a,this.pointeeType=o,this.sharingPolicy=u,this.rawGetPointee=i,this.rawConstructor=s,this.rawShare=l,this.rawDestructor=p,a||void 0!==e.baseClass?this.toWireType=nr:n?(this.toWireType=rr,this.destructorFunction=null):(this.toWireType=ar,this.destructorFunction=null)}var Kt,Qt,Zt=(t,e,r)=>{c.hasOwnProperty(t)||rt("Replacing nonexistent public symbol"),void 0!==c[t].overloadTable&&void 0!==r?c[t].overloadTable[r]=e:(c[t]=e,c[t].argCount=r)},it=[],Xt=t=>{var e=it[t];return e||(t>=it.length&&(it.length=t+1),it[t]=e=Kt.get(t)),e},b=(t,e)=>{t=m(t);var n=function r(){return t.includes("j")?((t,e)=>(...r)=>((t,e,r=[])=>t.includes("j")?((t,e,r)=>(t=t.replace(/p/g,"i"),(0,c["dynCall_"+t])(e,...r)))(t,e,r):Xt(e)(...r))(t,e,r))(t,e):Xt(e)}();return"function"!=typeof n&&d(`unknown function pointer with signature ${t}: ${e}`),n},Yt=t=>{var e=ue(t),r=m(e);return _(e),r},st=(t,e)=>{var r=[],n={};throw e.forEach(function a(o){n[o]||R[o]||(et[o]?et[o].forEach(a):(r.push(o),n[o]=!0))}),new Qt(`${t}: `+r.map(Yt).join([", "]))},$t=(t,e)=>{for(var r=[],n=0;n<t;n++)r.push(f[e+4*n>>2]);return r};function te(t){for(var e=1;e<t.length;++e)if(null!==t[e]&&void 0===t[e].destructorFunction)return!0;return!1}function ee(t,e){if(!(t instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof t} which is not a function`);var r=U(t.name||"unknownFunctionName",function(){});r.prototype=t.prototype;var n=new r,a=t.apply(n,e);return a instanceof Object?a:n}function wt(t,e,r,n,a,o){var u=e.length;u<2&&d("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var i=null!==e[1]&&null!==r,s=te(e),l="void"!==e[0].name,p=[t,d,n,a,dt,e[0],e[1]],h=0;h<u-2;++h)p.push(e[h+2]);if(!s)for(h=i?1:2;h<e.length;++h)null!==e[h].destructorFunction&&p.push(e[h].destructorFunction);let[v,y]=function pr(t,e,r,n){for(var a=te(t),o=t.length,u="",i="",s=0;s<o-2;++s)u+=(0!==s?", ":"")+"arg"+s,i+=(0!==s?", ":"")+"arg"+s+"Wired";var l=`\n        return function (${u}) {\n        if (arguments.length !== ${o-2}) {\n          throwBindingError('function ' + humanName + ' called with ' + arguments.length + ' arguments, expected ${o-2}');\n        }`;a&&(l+="var destructors = [];\n");var p=a?"destructors":"null",h=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"];for(e&&(l+="var thisWired = classParam['toWireType']("+p+", this);\n"),s=0;s<o-2;++s)l+="var arg"+s+"Wired = argType"+s+"['toWireType']("+p+", arg"+s+");\n",h.push("argType"+s);if(e&&(i="thisWired"+(i.length>0?", ":"")+i),l+=(r||n?"var rv = ":"")+"invoker(fn"+(i.length>0?", ":"")+i+");\n",a)l+="runDestructors(destructors);\n";else for(s=e?1:2;s<t.length;++s){var v=1===s?"thisWired":"arg"+(s-2)+"Wired";null!==t[s].destructorFunction&&(l+=`${v}_dtor(${v});\n`,h.push(`${v}_dtor`))}return r&&(l+="var ret = retType['fromWireType'](rv);\nreturn ret;\n"),[h,l+="}\n"]}(e,i,l,o);v.push(y);var T=ee(Function,v)(...p);return U(t,T)}var t,r,re=t=>{const e=(t=t.trim()).indexOf("(");return-1!==e?t.substr(0,e):t},Tt=[],W=[],bt=t=>{t>9&&0==--W[t+1]&&(W[t]=void 0,Tt.push(t))},$={toValue:t=>(t||d("Cannot use deleted val. handle = "+t),W[t]),toHandle:t=>{switch(t){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const e=Tt.pop()||W.length;return W[e]=t,W[e+1]=1,e}}}},mr={name:"emscripten::val",fromWireType:t=>{var e=$.toValue(t);return bt(t),e},toWireType:(t,e)=>$.toHandle(e),argPackAdvance:8,readValueFromPointer:q,destructorFunction:null},$r=(t,e,r)=>{switch(e){case 1:return r?function(n){return this.fromWireType(k[n])}:function(n){return this.fromWireType(g[n])};case 2:return r?function(n){return this.fromWireType(I[n>>1])}:function(n){return this.fromWireType(M[n>>1])};case 4:return r?function(n){return this.fromWireType(V[n>>2])}:function(n){return this.fromWireType(f[n>>2])};default:throw new TypeError(`invalid integer width (${e}): ${t}`)}},Ct=(t,e)=>{var r=R[t];return void 0===r&&d(`${e} has unknown type ${Yt(t)}`),r},Pt=t=>{if(null===t)return"null";var e=typeof t;return"object"===e||"array"===e||"function"===e?t.toString():""+t},br=(t,e)=>{switch(e){case 4:return function(r){return this.fromWireType(Ot[r>>2])};case 8:return function(r){return this.fromWireType(jt[r>>3])};default:throw new TypeError(`invalid float width (${e}): ${t}`)}},Ar=(t,e,r)=>{switch(e){case 1:return r?n=>k[n]:n=>g[n];case 2:return r?n=>I[n>>1]:n=>M[n>>1];case 4:return r?n=>V[n>>2]:n=>f[n>>2];default:throw new TypeError(`invalid integer width (${e}): ${t}`)}},ne=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0,ae=(t,e,r)=>{for(var n=e+r,a=e;t[a]&&!(a>=n);)++a;if(a-e>16&&t.buffer&&ne)return ne.decode(t.subarray(e,a));for(var o="";e<a;){var u=t[e++];if(128&u){var i=63&t[e++];if(192!=(224&u)){var s=63&t[e++];if((u=224==(240&u)?(15&u)<<12|i<<6|s:(7&u)<<18|i<<12|s<<6|63&t[e++])<65536)o+=String.fromCharCode(u);else{var l=u-65536;o+=String.fromCharCode(55296|l>>10,56320|1023&l)}}else o+=String.fromCharCode((31&u)<<6|i)}else o+=String.fromCharCode(u)}return o},Or=(t,e)=>t?ae(g,t,e):"",oe=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,Er=(t,e)=>{for(var r=t,n=r>>1,a=n+e/2;!(n>=a)&&M[n];)++n;if((r=n<<1)-t>32&&oe)return oe.decode(g.subarray(t,r));for(var o="",u=0;!(u>=e/2);++u){var i=I[t+2*u>>1];if(0==i)break;o+=String.fromCharCode(i)}return o},Rr=(t,e,r)=>{if(r??=2147483647,r<2)return 0;for(var n=e,a=(r-=2)<2*t.length?r/2:t.length,o=0;o<a;++o){var u=t.charCodeAt(o);I[e>>1]=u,e+=2}return I[e>>1]=0,e-n},Dr=t=>2*t.length,Ir=(t,e)=>{for(var r=0,n="";!(r>=e/4);){var a=V[t+4*r>>2];if(0==a)break;if(++r,a>=65536){var o=a-65536;n+=String.fromCharCode(55296|o>>10,56320|1023&o)}else n+=String.fromCharCode(a)}return n},Vr=(t,e,r)=>{if(r??=2147483647,r<4)return 0;for(var n=e,a=n+r-4,o=0;o<t.length;++o){var u=t.charCodeAt(o);if(u>=55296&&u<=57343&&(u=65536+((1023&u)<<10)|1023&t.charCodeAt(++o)),V[e>>2]=u,(e+=4)+4>a)break}return V[e>>2]=0,e-n},xr=t=>{for(var e=0,r=0;r<t.length;++r){var n=t.charCodeAt(r);n>=55296&&n<=57343&&++r,e+=4}return e},ie=(t,e,r)=>{var n=[],a=t.toWireType(n,r);return n.length&&(f[e>>2]=$.toHandle(n)),a},ut=[],Gr={},ct=t=>{var e=Gr[t];return void 0===e?m(t):e},se=()=>"object"==typeof globalThis?globalThis:Function("return this")(),an=t=>{var e=(t-X.buffer.byteLength+65535)/65536;try{return X.grow(e),Rt(),1}catch{}},cn=[null,[],[]],ln=(t,e)=>{var r=cn[t];0===e||10===e?((1===t?$e:D)(ae(r,0)),r.length=0):r.push(e)};Nt=c.InternalError=class extends Error{constructor(t){super(t),this.name="InternalError"}},(()=>{for(var t=new Array(256),e=0;e<256;++e)t[e]=String.fromCharCode(e);Mt=t})(),x=c.BindingError=class extends Error{constructor(t){super(t),this.name="BindingError"}},Object.assign(at.prototype,{isAliasOf(t){if(!(this instanceof at&&t instanceof at))return!1;var e=this.$$.ptrType.registeredClass,r=this.$$.ptr;t.$$=t.$$;for(var n=t.$$.ptrType.registeredClass,a=t.$$.ptr;e.baseClass;)r=e.upcast(r),e=e.baseClass;for(;n.baseClass;)a=n.upcast(a),n=n.baseClass;return e===n&&r===a},clone(){if(this.$$.ptr||ft(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var t=K(Object.create(Object.getPrototypeOf(this),{$$:{value:Ne(this.$$)}}));return t.$$.count.value+=1,t.$$.deleteScheduled=!1,t},delete(){this.$$.ptr||ft(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&d("Object already scheduled for deletion"),zt(this),qt(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},isDeleted(){return!this.$$.ptr},deleteLater(){return this.$$.ptr||ft(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&d("Object already scheduled for deletion"),L.push(this),1===L.length&&G&&G(yt),this.$$.deleteScheduled=!0,this}}),c.getInheritedInstanceCount=()=>Object.keys(J).length,c.getLiveInheritedInstances=()=>{var t=[];for(var e in J)J.hasOwnProperty(e)&&t.push(J[e]);return t},c.flushPendingDeletes=yt,c.setDelayFunction=t=>{G=t,L.length&&G&&G(yt)},Object.assign(ot.prototype,{getPointee(t){return this.rawGetPointee&&(t=this.rawGetPointee(t)),t},destructor(t){this.rawDestructor?.(t)},argPackAdvance:8,readValueFromPointer:q,fromWireType:function Qe(t){var e=this.getPointee(t);if(!e)return this.destructor(t),null;var r=((t,e)=>(e=((t,e)=>{for(void 0===e&&d("ptr should not be undefined");t.baseClass;)e=t.upcast(e),t=t.baseClass;return e})(t,e),J[e]))(this.registeredClass,e);if(void 0!==r){if(0===r.$$.count.value)return r.$$.ptr=e,r.$$.smartPtr=t,r.clone();var n=r.clone();return this.destructor(t),n}function a(){return nt(this.registeredClass.instancePrototype,this.isSmartPointer?{ptrType:this.pointeeType,ptr:e,smartPtrType:this,smartPtr:t}:{ptrType:this,ptr:t})}var o,u=this.registeredClass.getActualType(e),i=Lt[u];if(!i)return a.call(this);var s=Gt(e,this.registeredClass,(o=this.isConst?i.constPointerType:i.pointerType).registeredClass);return null===s?a.call(this):nt(o.registeredClass.instancePrototype,this.isSmartPointer?{ptrType:o,ptr:s,smartPtrType:this,smartPtr:t}:{ptrType:o,ptr:s})}}),Qt=c.UnboundTypeError=(t=Error,(r=U("UnboundTypeError",function(n){this.name="UnboundTypeError",this.message=n;var a=new Error(n).stack;void 0!==a&&(this.stack=this.toString()+"\n"+a.replace(/^Error(:[^\n]*)?\n/,""))})).prototype=Object.create(t.prototype),r.prototype.constructor=r,r.prototype.toString=function(){return void 0===this.message?this.name:`${this.name}: ${this.message}`},r),W.push(0,1,void 0,1,null,1,!0,1,!1,1),c.count_emval_handles=()=>W.length/2-5-Tt.length;var lt,hn={K:(t,e,r)=>{throw new Re(t).init(e,r),t},G:()=>{xt("")},s:t=>{var e=tt[t];delete tt[t];var r=e.rawConstructor,n=e.rawDestructor,a=e.fields,o=a.map(u=>u.getterReturnType).concat(a.map(u=>u.setterArgumentType));S([t],o,u=>{var i={};return a.forEach((s,l)=>{var h=u[l],v=s.getter,y=s.getterContext,T=u[l+a.length],B=s.setter,O=s.setterContext;i[s.fieldName]={read:j=>h.fromWireType(v(y,j)),write:(j,Q)=>{var w=[];B(O,j,T.toWireType(w,Q)),dt(w)}}}),[{name:e.name,fromWireType:s=>{var l={};for(var p in i)l[p]=i[p].read(s);return n(s),l},toWireType:(s,l)=>{for(var p in i)if(!(p in l))throw new TypeError(`Missing field: "${p}"`);var h=r();for(p in i)i[p].write(h,l[p]);return null!==s&&s.push(n,h),h},argPackAdvance:8,readValueFromPointer:q,destructorFunction:n}]})},C:(t,e,r,n,a)=>{},I:(t,e,r,n)=>{C(t,{name:e=m(e),fromWireType:function(a){return!!a},toWireType:function(a,o){return o?r:n},argPackAdvance:8,readValueFromPointer:function(a){return this.fromWireType(g[a])},destructorFunction:null})},w:(t,e,r,n,a,o,u,i,s,l,p,h,v)=>{p=m(p),o=b(a,o),i&&=b(u,i),l&&=b(s,l),v=b(h,v);var y=(t=>{if(void 0===t)return"_unknown";var e=(t=t.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return e>=48&&e<=57?`_${t}`:t})(p);mt(y,function(){st(`Cannot construct ${p} due to unbound types`,[n])}),S([t,e,r],n?[n]:[],T=>{var B,O;T=T[0],O=n?(B=T.registeredClass).instancePrototype:at.prototype;var j=U(p,function(...Wt){if(Object.getPrototypeOf(this)!==Q)throw new x("Use 'new' to construct "+p);if(void 0===w.constructor_body)throw new x(p+" has no accessible constructor");var de=w.constructor_body[Wt.length];if(void 0===de)throw new x(`Tried to invoke ctor of ${p} with invalid number of parameters (${Wt.length}) - expected (${Object.keys(w.constructor_body).toString()}) parameters instead!`);return de.apply(this,Wt)}),Q=Object.create(O,{constructor:{value:j}});j.prototype=Q;var w=new er(p,j,Q,v,B,o,i,l);w.baseClass&&(w.baseClass.__derivedClasses??=[],w.baseClass.__derivedClasses.push(w));var dn=new ot(p,w,!0,!1,!1),pe=new ot(p+"*",w,!1,!1,!1),he=new ot(p+" const*",w,!1,!0,!1);return Lt[t]={pointerType:pe,constPointerType:he},Zt(y,j),[dn,pe,he]})},v:(t,e,r,n,a,o)=>{var u=$t(e,r);a=b(n,a),S([],[t],i=>{var s=`constructor ${(i=i[0]).name}`;if(void 0===i.registeredClass.constructor_body&&(i.registeredClass.constructor_body=[]),void 0!==i.registeredClass.constructor_body[e-1])throw new x(`Cannot register multiple constructors with identical number of parameters (${e-1}) for class '${i.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return i.registeredClass.constructor_body[e-1]=()=>{st(`Cannot construct ${i.name} due to unbound types`,u)},S([],u,l=>(l.splice(1,0,null),i.registeredClass.constructor_body[e-1]=wt(s,l,null,a,o),[])),[]})},d:(t,e,r,n,a,o,u,i,s)=>{var l=$t(r,n);e=m(e),e=re(e),o=b(a,o),S([],[t],p=>{var h=`${(p=p[0]).name}.${e}`;function v(){st(`Cannot call ${h} due to unbound types`,l)}e.startsWith("@@")&&(e=Symbol[e.substring(2)]),i&&p.registeredClass.pureVirtualFunctions.push(e);var y=p.registeredClass.instancePrototype,T=y[e];return void 0===T||void 0===T.overloadTable&&T.className!==p.name&&T.argCount===r-2?(v.argCount=r-2,v.className=p.name,y[e]=v):(Jt(y,e,h),y[e].overloadTable[r-2]=v),S([],l,B=>{var O=wt(h,B,p,o,u,s);return void 0===y[e].overloadTable?(O.argCount=r-2,y[e]=O):y[e].overloadTable[r-2]=O,[]}),[]})},m:(t,e,r)=>{t=m(t),S([],[e],n=>(c[t]=(n=n[0]).fromWireType(r),[]))},H:t=>C(t,mr),o:(t,e,r,n)=>{function a(){}e=m(e),a.values={},C(t,{name:e,constructor:a,fromWireType:function(o){return this.constructor.values[o]},toWireType:(o,u)=>u.value,argPackAdvance:8,readValueFromPointer:$r(e,r,n),destructorFunction:null}),mt(e,a)},a:(t,e,r)=>{var n=Ct(t,"enum");e=m(e);var a=n.constructor,o=Object.create(n.constructor.prototype,{value:{value:r},constructor:{value:U(`${n.name}_${e}`,function(){})}});a.values[r]=o,a[e]=o},A:(t,e,r)=>{C(t,{name:e=m(e),fromWireType:n=>n,toWireType:(n,a)=>a,argPackAdvance:8,readValueFromPointer:br(e,r),destructorFunction:null})},k:(t,e,r,n,a,o,u)=>{var i=$t(e,r);t=m(t),t=re(t),a=b(n,a),mt(t,function(){st(`Cannot call ${t} due to unbound types`,i)},e-1),S([],i,s=>{var l=[s[0],null].concat(s.slice(1));return Zt(t,wt(t,l,null,a,o,u),e-1),[]})},l:(t,e,r,n,a)=>{e=m(e);var o=l=>l;if(0===n){var u=32-8*r;o=l=>l<<u>>>u}var i=e.includes("unsigned");C(t,{name:e,fromWireType:o,toWireType:i?function(l,p){return p>>>0}:function(l,p){return p},argPackAdvance:8,readValueFromPointer:Ar(e,r,0!==n),destructorFunction:null})},f:(t,e,r)=>{var n=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][e];function a(o){return new n(k.buffer,f[o+4>>2],f[o>>2])}C(t,{name:r=m(r),fromWireType:a,argPackAdvance:8,readValueFromPointer:a},{ignoreDuplicateRegistrations:!0})},z:(t,e)=>{var r="std::string"===(e=m(e));C(t,{name:e,fromWireType(n){var a,o=f[n>>2],u=n+4;if(r)for(var i=u,s=0;s<=o;++s){var l=u+s;if(s==o||0==g[l]){var p=Or(i,l-i);void 0===a?a=p:(a+="\0",a+=p),i=l+1}}else{var h=new Array(o);for(s=0;s<o;++s)h[s]=String.fromCharCode(g[u+s]);a=h.join("")}return _(n),a},toWireType(n,a){var o;a instanceof ArrayBuffer&&(a=new Uint8Array(a));var u="string"==typeof a;u||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int8Array||d("Cannot pass non-string to std::string"),o=r&&u?(t=>{for(var e=0,r=0;r<t.length;++r){var n=t.charCodeAt(r);n<=127?e++:n<=2047?e+=2:n>=55296&&n<=57343?(e+=4,++r):e+=3}return e})(a):a.length;var i=At(4+o+1),s=i+4;if(f[i>>2]=o,r&&u)((t,e,r)=>{((t,e,r,n)=>{if(!(n>0))return 0;for(var o=r+n-1,u=0;u<t.length;++u){var i=t.charCodeAt(u);if(i>=55296&&i<=57343&&(i=65536+((1023&i)<<10)|1023&t.charCodeAt(++u)),i<=127){if(r>=o)break;e[r++]=i}else if(i<=2047){if(r+1>=o)break;e[r++]=192|i>>6,e[r++]=128|63&i}else if(i<=65535){if(r+2>=o)break;e[r++]=224|i>>12,e[r++]=128|i>>6&63,e[r++]=128|63&i}else{if(r+3>=o)break;e[r++]=240|i>>18,e[r++]=128|i>>12&63,e[r++]=128|i>>6&63,e[r++]=128|63&i}}e[r]=0})(t,g,e,r)})(a,s,o+1);else if(u)for(var l=0;l<o;++l){var p=a.charCodeAt(l);p>255&&(_(s),d("String has UTF-16 code units that do not fit in 8 bits")),g[s+l]=p}else for(l=0;l<o;++l)g[s+l]=a[l];return null!==n&&n.push(_,i),i},argPackAdvance:8,readValueFromPointer:q,destructorFunction(n){_(n)}})},u:(t,e,r)=>{var n,a,o,u;r=m(r),2===e?(n=Er,a=Rr,u=Dr,o=i=>M[i>>1]):4===e&&(n=Ir,a=Vr,u=xr,o=i=>f[i>>2]),C(t,{name:r,fromWireType:i=>{for(var s,l=f[i>>2],p=i+4,h=0;h<=l;++h){var v=i+4+h*e;if(h==l||0==o(v)){var y=n(p,v-p);void 0===s?s=y:(s+="\0",s+=y),p=v+e}}return _(i),s},toWireType:(i,s)=>{"string"!=typeof s&&d(`Cannot pass non-string to C++ string type ${r}`);var l=u(s),p=At(4+l+e);return f[p>>2]=l/e,a(s,p+4,l+e),null!==i&&i.push(_,p),p},argPackAdvance:8,readValueFromPointer:q,destructorFunction(i){_(i)}})},t:(t,e,r,n,a,o)=>{tt[t]={name:m(e),rawConstructor:b(r,n),rawDestructor:b(a,o),fields:[]}},c:(t,e,r,n,a,o,u,i,s,l)=>{tt[t].fields.push({fieldName:m(e),getterReturnType:r,getter:b(n,a),getterContext:o,setterArgumentType:u,setter:b(i,s),setterContext:l})},J:(t,e)=>{C(t,{isVoid:!0,name:e=m(e),argPackAdvance:0,fromWireType:()=>{},toWireType:(r,n)=>{}})},F:(t,e,r)=>g.copyWithin(t,e,e+r),n:(t,e,r)=>(t=$.toValue(t),e=Ct(e,"emval::as"),ie(e,r,t)),q:(t,e,r,n)=>(t=ut[t])(null,e=$.toValue(e),r,n),p:(t,e,r,n,a)=>(t=ut[t])(e=$.toValue(e),e[r=ct(r)],n,a),b:bt,x:t=>0===t?$.toHandle(se()):(t=ct(t),$.toHandle(se()[t])),i:(t,e,r)=>{var n=((t,e)=>{for(var r=new Array(t),n=0;n<t;++n)r[n]=Ct(f[e+4*n>>2],"parameter "+n);return r})(t,e),a=n.shift();t--;var o="return function (obj, func, destructorsRef, args) {\n",u=0,i=[];0===r&&i.push("obj");for(var s=["retType"],l=[a],p=0;p<t;++p)i.push("arg"+p),s.push("argType"+p),l.push(n[p]),o+=`  var arg${p} = argType${p}.readValueFromPointer(args${u?"+"+u:""});\n`,u+=n[p].argPackAdvance;o+=`  var rv = ${1===r?"new func":"func.call"}(${i.join(", ")});\n`,a.isVoid||(s.push("emval_returnValue"),l.push(ie),o+="  return emval_returnValue(retType, destructorsRef, rv);\n"),s.push(o+="};\n");var h=ee(Function,s)(...l),v=`methodCaller<(${n.map(y=>y.name).join(", ")}) => ${a.name}>`;return(t=>{var e=ut.length;return ut.push(t),e})(U(v,h))},r:t=>(t=ct(t),$.toHandle(c[t])),g:(t,e)=>(t=$.toValue(t),e=$.toValue(e),$.toHandle(t[e])),j:t=>{t>9&&(W[t+1]+=1)},h:t=>$.toHandle(ct(t)),e:t=>{var e=$.toValue(t);dt(e),bt(t)},D:t=>{var i,e=g.length,r=2147483648;if((t>>>=0)>r)return!1;for(var a=1;a<=4;a*=2){var o=e*(1+.2/a);o=Math.min(o,t+100663296);var u=Math.min(r,(i=Math.max(t,o))+(65536-i%65536)%65536);if(an(u))return!0}return!1},E:t=>52,B:function un(t,e,r,n,a){return 70},y:(t,e,r,n)=>{for(var a=0,o=0;o<r;o++){var u=f[e>>2],i=f[e+4>>2];e+=8;for(var s=0;s<i;s++)ln(t,g[u+s]);a+=i}return f[n>>2]=a,0}},A=function Ee(){var t=function je(){return{a:hn}}();function e(n,a){return X=(A=n.exports).L,Rt(),Kt=A.Q,function Pe(t){It.unshift(t)}(A.M),function _e(t){if(E--,c.monitorRunDependencies?.(E),0==E&&z){var e=z;z=null,e()}}(),A}if(function We(t){E++,c.monitorRunDependencies?.(E)}(),c.instantiateWasm)try{return c.instantiateWasm(t,e)}catch(n){D(`Module.instantiateWasm callback failed with error: ${n}`),Z(n)}return Y||(Y=function ke(){var t="basis_transcoder.wasm";return Ht(t)?t:function ge(t){return c.locateFile?c.locateFile(t,F):F+t}(t)}()),function Oe(t,e,r,n){return t||"function"!=typeof WebAssembly.instantiateStreaming||Ht(e)||"function"!=typeof fetch?Bt(e,r,n):fetch(e,{credentials:"same-origin"}).then(a=>WebAssembly.instantiateStreaming(a,r).then(n,function(o){return D(`wasm streaming compile failed: ${o}`),D("falling back to ArrayBuffer instantiation"),Bt(e,r,n)}))}(N,Y,t,function r(n){e(n.instance)}).catch(Z),{}}(),ue=t=>(ue=A.N)(t),At=t=>(At=A.O)(t),_=t=>(_=A.P)(t),ce=t=>(ce=A.R)(t);function le(){function t(){lt||(lt=!0,c.calledRun=!0,Et||(function Te(){ht(It)}(),kt(c),c.onRuntimeInitialized&&c.onRuntimeInitialized(),function be(){if(c.postRun)for("function"==typeof c.postRun&&(c.postRun=[c.postRun]);c.postRun.length;)t=c.postRun.shift(),Vt.unshift(t);var t;ht(Vt)}()))}E>0||(function we(){if(c.preRun)for("function"==typeof c.preRun&&(c.preRun=[c.preRun]);c.preRun.length;)t=c.preRun.shift(),Dt.unshift(t);var t;ht(Dt)}(),E>0||(c.setStatus?(c.setStatus("Running..."),setTimeout(function(){setTimeout(function(){c.setStatus("")},1),t()},1)):t()))}if(c.dynCall_jiji=(t,e,r,n,a)=>(c.dynCall_jiji=A.S)(t,e,r,n,a),z=function t(){lt||le(),lt||(z=t)},c.preInit)for("function"==typeof c.preInit&&(c.preInit=[c.preInit]);c.preInit.length>0;)c.preInit.pop()();return le(),ye})}}]);