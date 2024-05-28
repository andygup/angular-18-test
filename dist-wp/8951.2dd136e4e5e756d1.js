"use strict";(self.webpackChunkangular_18_test=self.webpackChunkangular_18_test||[]).push([[8951],{78951:(rn,Re,Te)=>{Te.r(Re),Te.d(Re,{a:()=>jr});var _e,te=Te(93293),Ye={exports:{}};_e=typeof document<"u"&&document.currentScript?document.currentScript.src:void 0,Ye.exports=function(z){var c,Be,ae;z=z||{},c||(c=void 0!==z?z:{}),c.ready=new Promise(function(e,r){Be=e,ae=r});var Ve=Object.assign({},c),ze="./this.program",D="";typeof document<"u"&&document.currentScript&&(D=document.currentScript.src),_e&&(D=_e),D=0!==D.indexOf("blob:")?D.substr(0,D.replace(/[?#].*/,"").lastIndexOf("/")+1):"";var N,Sr=c.print||console.log.bind(console),Y=c.printErr||console.warn.bind(console);Object.assign(c,Ve),Ve=null,c.thisProgram&&(ze=c.thisProgram),c.wasmBinary&&(N=c.wasmBinary),"object"!=typeof WebAssembly&&G("no native wasm support detected");var Ce,Pe,j,_,I,q,w,y,Ne,qe,Le,Ge,Je=!1,Ze=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0;function oe(e,r,n){var t=r+n;for(n=r;e[n]&&!(n>=t);)++n;if(16<n-r&&e.buffer&&Ze)return Ze.decode(e.subarray(r,n));for(t="";r<n;){var a=e[r++];if(128&a){var o=63&e[r++];if(192==(224&a))t+=String.fromCharCode((31&a)<<6|o);else{var f=63&e[r++];65536>(a=224==(240&a)?(15&a)<<12|o<<6|f:(7&a)<<18|o<<12|f<<6|63&e[r++])?t+=String.fromCharCode(a):(a-=65536,t+=String.fromCharCode(55296|a>>10,56320|1023&a))}}else t+=String.fromCharCode(a)}return t}function Xe(e,r,n,t){if(0<t){t=n+t-1;for(var a=0;a<e.length;++a){var o=e.charCodeAt(a);if(55296<=o&&57343>=o&&(o=65536+((1023&o)<<10)|1023&e.charCodeAt(++a)),127>=o){if(n>=t)break;r[n++]=o}else{if(2047>=o){if(n+1>=t)break;r[n++]=192|o>>6}else{if(65535>=o){if(n+2>=t)break;r[n++]=224|o>>12}else{if(n+3>=t)break;r[n++]=240|o>>18,r[n++]=128|o>>12&63}r[n++]=128|o>>6&63}r[n++]=128|63&o}}r[n]=0}}function Ke(e){for(var r=0,n=0;n<e.length;++n){var t=e.charCodeAt(n);127>=t?r++:2047>=t?r+=2:55296<=t&&57343>=t?(r+=4,++n):r+=3}return r}function Qe(){var e=Ce.buffer;Pe=e,c.HEAP8=j=new Int8Array(e),c.HEAP16=I=new Int16Array(e),c.HEAP32=w=new Int32Array(e),c.HEAPU8=_=new Uint8Array(e),c.HEAPU16=q=new Uint16Array(e),c.HEAPU32=y=new Uint32Array(e),c.HEAPF32=Ne=new Float32Array(e),c.HEAPF64=Ge=new Float64Array(e),c.HEAP64=qe=new BigInt64Array(e),c.HEAPU64=Le=new BigUint64Array(e)}var er,rr=[],nr=[],tr=[];function Fr(){var e=c.preRun.shift();rr.unshift(e)}var S,R=0,L=null;function G(e){throw c.onAbort&&c.onAbort(e),Y(e="Aborted("+e+")"),Je=!0,e=new WebAssembly.RuntimeError(e+". Build with -sASSERTIONS for more info."),ae(e),e}function ar(){return S.startsWith("data:application/octet-stream;base64,")}if(S="arcgis-knowledge-client-core-simd.wasm",!ar()){var or=S;S=c.locateFile?c.locateFile(or,D):D+or}function ir(){var e=S;try{if(e==S&&N)return new Uint8Array(N);throw"both async and sync fetching of the wasm failed"}catch(r){G(r)}}function ke(e){for(;0<e.length;)e.shift()(c)}function Mr(e){this.ga=e-24,this.Za=function(r){y[this.ga+4>>2]=r},this.Ua=function(r){y[this.ga+8>>2]=r},this.Va=function(){w[this.ga>>2]=0},this.Oa=function(){j[this.ga+12|0]=0},this.Ya=function(){j[this.ga+13|0]=0},this.La=function(r,n){this.Ma(),this.Za(r),this.Ua(n),this.Va(),this.Oa(),this.Ya()},this.Ma=function(){y[this.ga+16>>2]=0}}var ie={};function ue(e){for(;e.length;){var r=e.pop();e.pop()(r)}}function J(e){return this.fromWireType(w[e>>2])}var B={},x={},ce={};function ur(e){if(void 0===e)return"_unknown";var r=(e=e.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return 48<=r&&57>=r?"_"+e:e}function $e(e,r){return e=ur(e),function(){return r.apply(this,arguments)}}function We(e){var r=Error,n=$e(e,function(t){this.name=e,this.message=t,void 0!==(t=Error(t).stack)&&(this.stack=this.toString()+"\n"+t.replace(/^Error(:[^\n]*)?\n/,""))});return n.prototype=Object.create(r.prototype),n.prototype.constructor=n,n.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},n}var cr=void 0;function fe(e){throw new cr(e)}function k(e,r,n){function t(u){(u=n(u)).length!==e.length&&fe("Mismatched type converter count");for(var l=0;l<e.length;++l)W(e[l],u[l])}e.forEach(function(u){ce[u]=r});var a=Array(r.length),o=[],f=0;r.forEach((u,l)=>{x.hasOwnProperty(u)?a[l]=x[u]:(o.push(u),B.hasOwnProperty(u)||(B[u]=[]),B[u].push(()=>{a[l]=x[u],++f===o.length&&t(a)}))}),0===o.length&&t(a)}function Z(e){if(null===e)return"null";var r=typeof e;return"object"===r||"array"===r||"function"===r?e.toString():""+e}var fr=void 0;function b(e){for(var r="";_[e];)r+=fr[_[e++]];return r}var V=void 0;function m(e){throw new V(e)}function W(e,r,n={}){if(!("argPackAdvance"in r))throw new TypeError("registerType registeredInstance requires argPackAdvance");var t=r.name;if(e||m('type "'+t+'" must have a positive integer typeid pointer'),x.hasOwnProperty(e)){if(n.Wa)return;m("Cannot register type '"+t+"' twice")}x[e]=r,delete ce[e],B.hasOwnProperty(e)&&(r=B[e],delete B[e],r.forEach(a=>a()))}function sr(e,r,n){switch(r){case 0:return n?function(t){return j[t]}:function(t){return _[t]};case 1:return n?function(t){return I[t>>1]}:function(t){return q[t>>1]};case 2:return n?function(t){return w[t>>2]}:function(t){return y[t>>2]};case 3:return n?function(t){return qe[t>>3]}:function(t){return Le[t>>3]};default:throw new TypeError("Unknown integer type: "+e)}}function X(e){switch(e){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+e)}}function Ee(e){m(e.ea.ha.fa.name+" instance already deleted")}var Oe=!1;function lr(){}function hr(e){--e.count.value,0===e.count.value&&(e.ja?e.la.oa(e.ja):e.ha.fa.oa(e.ga))}function pr(e,r,n){return r===n?e:void 0===n.ma||null===(e=pr(e,r,n.ma))?null:n.Ka(e)}var dr={},K=[];function je(){for(;K.length;){var e=K.pop();e.ea.ua=!1,e.delete()}}var Q=void 0,ee={};function se(e,r){return r.ha&&r.ga||fe("makeClassHandle requires ptr and ptrType"),!!r.la!=!!r.ja&&fe("Both smartPtrType and smartPtr must be specified"),r.count={value:1},le(Object.create(e,{ea:{value:r}}))}function le(e){return typeof FinalizationRegistry>"u"?(le=r=>r,e):(Oe=new FinalizationRegistry(r=>{hr(r.ea)}),lr=r=>{Oe.unregister(r)},(le=r=>{var n=r.ea;return n.ja&&Oe.register(r,{ea:n},r),r})(e))}function M(){}function Se(e,r,n){if(void 0===e[r].ia){var t=e[r];e[r]=function(){return e[r].ia.hasOwnProperty(arguments.length)||m("Function '"+n+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+e[r].ia+")!"),e[r].ia[arguments.length].apply(this,arguments)},e[r].ia=[],e[r].ia[t.ta]=t}}function Fe(e,r,n){c.hasOwnProperty(e)?((void 0===n||void 0!==c[e].ia&&void 0!==c[e].ia[n])&&m("Cannot register public name '"+e+"' twice"),Se(c,e,e),c.hasOwnProperty(n)&&m("Cannot register multiple overloads of a function with the same number of arguments ("+n+")!"),c[e].ia[n]=r):(c[e]=r,void 0!==n&&(c[e].lb=n))}function Ir(e,r,n,t,a,o,f,u){this.name=e,this.constructor=r,this.pa=n,this.oa=t,this.ma=a,this.Pa=o,this.wa=f,this.Ka=u,this.ab=[]}function he(e,r,n){for(;r!==n;)r.wa||m("Expected null or instance of "+n.name+", got an instance of "+r.name),e=r.wa(e),r=r.ma;return e}function Rr(e,r){return null===r?(this.Ba&&m("null is not a valid "+this.name),0):(r.ea||m('Cannot pass "'+Z(r)+'" as a '+this.name),r.ea.ga||m("Cannot pass deleted object as a pointer of type "+this.name),he(r.ea.ga,r.ea.ha.fa,this.fa))}function xr(e,r){if(null===r){if(this.Ba&&m("null is not a valid "+this.name),this.ya){var n=this.Ca();return null!==e&&e.push(this.oa,n),n}return 0}if(r.ea||m('Cannot pass "'+Z(r)+'" as a '+this.name),r.ea.ga||m("Cannot pass deleted object as a pointer of type "+this.name),!this.xa&&r.ea.ha.xa&&m("Cannot convert argument of type "+(r.ea.la?r.ea.la.name:r.ea.ha.name)+" to parameter type "+this.name),n=he(r.ea.ga,r.ea.ha.fa,this.fa),this.ya)switch(void 0===r.ea.ja&&m("Passing raw pointer to smart pointer is illegal"),this.gb){case 0:r.ea.la===this?n=r.ea.ja:m("Cannot convert argument of type "+(r.ea.la?r.ea.la.name:r.ea.ha.name)+" to parameter type "+this.name);break;case 1:n=r.ea.ja;break;case 2:if(r.ea.la===this)n=r.ea.ja;else{var t=r.clone();n=this.bb(n,$(function(){t.delete()})),null!==e&&e.push(this.oa,n)}break;default:m("Unsupporting sharing policy")}return n}function Hr(e,r){return null===r?(this.Ba&&m("null is not a valid "+this.name),0):(r.ea||m('Cannot pass "'+Z(r)+'" as a '+this.name),r.ea.ga||m("Cannot pass deleted object as a pointer of type "+this.name),r.ea.ha.xa&&m("Cannot convert argument of type "+r.ea.ha.name+" to parameter type "+this.name),he(r.ea.ga,r.ea.ha.fa,this.fa))}function O(e,r,n,t,a,o,f,u,l,s,h){this.name=e,this.fa=r,this.Ba=n,this.xa=t,this.ya=a,this.$a=o,this.gb=f,this.Ha=u,this.Ca=l,this.bb=s,this.oa=h,a||void 0!==r.ma?this.toWireType=xr:(this.toWireType=t?Rr:Hr,this.ka=null)}function vr(e,r,n){c.hasOwnProperty(e)||fe("Replacing nonexistant public symbol"),void 0!==c[e].ia&&void 0!==n?c[e].ia[n]=r:(c[e]=r,c[e].ta=n)}var pe=[];function T(e,r){e=b(e);var n=pe[r];return n||(r>=pe.length&&(pe.length=r+1),pe[r]=n=er.get(r)),"function"!=typeof n&&m("unknown function pointer with signature "+e+": "+r),n}var gr=void 0;function mr(e){var r=b(e=$r(e));return F(e),r}function H(e,r){var t=[],a={};throw r.forEach(function n(o){a[o]||x[o]||(ce[o]?ce[o].forEach(n):(t.push(o),a[o]=!0))}),new gr(e+": "+t.map(mr).join([", "]))}function de(e,r,n,t,a){var o=r.length;2>o&&m("argTypes array size mismatch! Must at least get return value and 'this' types!");var f=null!==r[1]&&null!==n,u=!1;for(n=1;n<r.length;++n)if(null!==r[n]&&void 0===r[n].ka){u=!0;break}var l="void"!==r[0].name,s=o-2,h=Array(s),d=[],v=[];return function(){if(arguments.length!==s&&m("function "+e+" called with "+arguments.length+" arguments, expected "+s+" args!"),v.length=0,d.length=f?2:1,d[0]=a,f){var i=r[1].toWireType(v,this);d[1]=i}for(var p=0;p<s;++p)h[p]=r[p+2].toWireType(v,arguments[p]),d.push(h[p]);if(p=t.apply(null,d),u)ue(v);else for(var g=f?1:2;g<r.length;g++)null!==r[g].ka&&r[g].ka(1===g?i:h[g-2]);return l?r[0].fromWireType(p):void 0}}function ve(e,r){for(var n=[],t=0;t<e;t++)n.push(y[r+4*t>>2]);return n}function yr(e,r,n){return e instanceof Object||m(n+' with invalid "this": '+e),e instanceof r.fa.constructor||m(n+' incompatible with "this" of type '+e.constructor.name),e.ea.ga||m("cannot call emscripten binding method "+n+" on deleted object"),he(e.ea.ga,e.ea.ha.fa,r.fa)}var De=[],E=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function Me(e){4<e&&0==--E[e].Da&&(E[e]=void 0,De.push(e))}var C=e=>(e||m("Cannot use deleted val. handle = "+e),E[e].value),$=e=>{switch(e){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var r=De.length?De.pop():E.length;return E[r]={Da:1,value:e},r}};function Yr(e,r,n){switch(r){case 0:return function(t){return this.fromWireType((n?j:_)[t])};case 1:return function(t){return this.fromWireType((n?I:q)[t>>1])};case 2:return function(t){return this.fromWireType((n?w:y)[t>>2])};default:throw new TypeError("Unknown integer type: "+e)}}function re(e,r){var n=x[e];return void 0===n&&m(r+" has unknown type "+mr(e)),n}function Br(e,r){switch(r){case 2:return function(n){return this.fromWireType(Ne[n>>2])};case 3:return function(n){return this.fromWireType(Ge[n>>3])};default:throw new TypeError("Unknown float type: "+e)}}var br=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0;function Vr(e,r){for(var n=e>>1,t=n+r/2;!(n>=t)&&q[n];)++n;if(32<(n<<=1)-e&&br)return br.decode(_.subarray(e,n));for(n="",t=0;!(t>=r/2);++t){var a=I[e+2*t>>1];if(0==a)break;n+=String.fromCharCode(a)}return n}function zr(e,r,n){if(void 0===n&&(n=2147483647),2>n)return 0;var t=r;n=(n-=2)<2*e.length?n/2:e.length;for(var a=0;a<n;++a)I[r>>1]=e.charCodeAt(a),r+=2;return I[r>>1]=0,r-t}function Nr(e){return 2*e.length}function qr(e,r){for(var n=0,t="";!(n>=r/4);){var a=w[e+4*n>>2];if(0==a)break;++n,65536<=a?(a-=65536,t+=String.fromCharCode(55296|a>>10,56320|1023&a)):t+=String.fromCharCode(a)}return t}function Lr(e,r,n){if(void 0===n&&(n=2147483647),4>n)return 0;var t=r;n=t+n-4;for(var a=0;a<e.length;++a){var o=e.charCodeAt(a);if(55296<=o&&57343>=o&&(o=65536+((1023&o)<<10)|1023&e.charCodeAt(++a)),w[r>>2]=o,(r+=4)+4>n)break}return w[r>>2]=0,r-t}function Gr(e){for(var r=0,n=0;n<e.length;++n){var t=e.charCodeAt(n);55296<=t&&57343>=t&&++n,r+=4}return r}function wr(e,r){for(var n=Array(e),t=0;t<e;++t)n[t]=re(y[r+4*t>>2],"parameter "+t);return n}var Jr={};function ge(e){var r=Jr[e];return void 0===r?b(e):r}var me=[];function Ar(){function e(r){r.$$$embind_global$$$=r;var n="object"==typeof $$$embind_global$$$&&r.$$$embind_global$$$==r;return n||delete r.$$$embind_global$$$,n}if("object"==typeof globalThis)return globalThis;if("object"==typeof $$$embind_global$$$||("object"==typeof te.c&&e(te.c)?$$$embind_global$$$=te.c:"object"==typeof self&&e(self)&&($$$embind_global$$$=self),"object"==typeof $$$embind_global$$$))return $$$embind_global$$$;throw Error("unable to get global object.")}var Tr=[],Ue={};function _r(){if(!Ie){var e,r={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"==typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:ze||"./this.program"};for(e in Ue)void 0===Ue[e]?delete r[e]:r[e]=Ue[e];var n=[];for(e in r)n.push(e+"="+r[e]);Ie=n}return Ie}var Ie,Xr=[null,[],[]];function ye(e){return e%4==0&&(e%100!=0||e%400==0)}var Cr=[31,29,31,30,31,30,31,31,30,31,30,31],Pr=[31,28,31,30,31,30,31,31,30,31,30,31];cr=c.InternalError=We("InternalError");for(var kr=Array(256),be=0;256>be;++be)kr[be]=String.fromCharCode(be);fr=kr,V=c.BindingError=We("BindingError"),M.prototype.isAliasOf=function(e){if(!(this instanceof M&&e instanceof M))return!1;var r=this.ea.ha.fa,n=this.ea.ga,t=e.ea.ha.fa;for(e=e.ea.ga;r.ma;)n=r.wa(n),r=r.ma;for(;t.ma;)e=t.wa(e),t=t.ma;return r===t&&n===e},M.prototype.clone=function(){if(this.ea.ga||Ee(this),this.ea.va)return this.ea.count.value+=1,this;var e=le,r=Object,n=r.create,t=Object.getPrototypeOf(this),a=this.ea;return(e=e(n.call(r,t,{ea:{value:{count:a.count,ua:a.ua,va:a.va,ga:a.ga,ha:a.ha,ja:a.ja,la:a.la}}}))).ea.count.value+=1,e.ea.ua=!1,e},M.prototype.delete=function(){this.ea.ga||Ee(this),this.ea.ua&&!this.ea.va&&m("Object already scheduled for deletion"),lr(this),hr(this.ea),this.ea.va||(this.ea.ja=void 0,this.ea.ga=void 0)},M.prototype.isDeleted=function(){return!this.ea.ga},M.prototype.deleteLater=function(){return this.ea.ga||Ee(this),this.ea.ua&&!this.ea.va&&m("Object already scheduled for deletion"),K.push(this),1===K.length&&Q&&Q(je),this.ea.ua=!0,this},c.getInheritedInstanceCount=function(){return Object.keys(ee).length},c.getLiveInheritedInstances=function(){var e,r=[];for(e in ee)ee.hasOwnProperty(e)&&r.push(ee[e]);return r},c.flushPendingDeletes=je,c.setDelayFunction=function(e){Q=e,K.length&&Q&&Q(je)},O.prototype.Qa=function(e){return this.Ha&&(e=this.Ha(e)),e},O.prototype.Fa=function(e){this.oa&&this.oa(e)},O.prototype.argPackAdvance=8,O.prototype.readValueFromPointer=J,O.prototype.deleteObject=function(e){null!==e&&e.delete()},O.prototype.fromWireType=function(e){function r(){return se(this.fa.pa,this.ya?{ha:this.$a,ga:n,la:this,ja:e}:{ha:this,ga:e})}var n=this.Qa(e);if(!n)return this.Fa(e),null;var t=function Ur(e,r){for(void 0===r&&m("ptr should not be undefined");e.ma;)r=e.wa(r),e=e.ma;return ee[r]}(this.fa,n);if(void 0!==t)return 0===t.ea.count.value?(t.ea.ga=n,t.ea.ja=e,t.clone()):(t=t.clone(),this.Fa(e),t);if(t=this.fa.Pa(n),!(t=dr[t]))return r.call(this);var a=pr(n,this.fa,(t=this.xa?t.Ia:t.pointerType).fa);return null===a?r.call(this):se(t.fa.pa,this.ya?{ha:t,ga:a,la:this,ja:e}:{ha:t,ga:a})},gr=c.UnboundTypeError=We("UnboundTypeError"),c.count_emval_handles=function(){for(var e=0,r=5;r<E.length;++r)void 0!==E[r]&&++e;return e},c.get_first_emval=function(){for(var e=5;e<E.length;++e)if(void 0!==E[e])return E[e];return null};var en={n:function(e){return Ae(e+24)+24},m:function(e,r,n){throw new Mr(e).La(r,n),e},s:function(e){var r=ie[e];delete ie[e];var n=r.Ca,t=r.oa,a=r.Ga;k([e],a.map(o=>o.Ta).concat(a.map(o=>o.eb)),o=>{var f={};return a.forEach((u,l)=>{var s=o[l],h=u.Ra,d=u.Sa,v=o[l+a.length],i=u.cb,p=u.fb;f[u.Na]={read:g=>s.fromWireType(h(d,g)),write:(g,A)=>{var P=[];i(p,g,v.toWireType(P,A)),ue(P)}}}),[{name:r.name,fromWireType:function(u){var l,s={};for(l in f)s[l]=f[l].read(u);return t(u),s},toWireType:function(u,l){for(var s in f)if(!(s in l))throw new TypeError('Missing field:  "'+s+'"');var h=n();for(s in f)f[s].write(h,l[s]);return null!==u&&u.push(t,h),h},argPackAdvance:8,readValueFromPointer:J,ka:t}]})},F:function(e,r,n,t,a){r=b(r),n=X(n);var o=-1!=r.indexOf("u");o&&(a=(1n<<64n)-1n),W(e,{name:r,fromWireType:function(f){return f},toWireType:function(f,u){if("bigint"!=typeof u&&"number"!=typeof u)throw new TypeError('Cannot convert "'+Z(u)+'" to '+this.name);if(u<t||u>a)throw new TypeError('Passing a number "'+Z(u)+'" from JS side to C/C++ side to an argument of type "'+r+'", which is outside the valid range ['+t+", "+a+"]!");return u},argPackAdvance:8,readValueFromPointer:sr(r,n,!o),ka:null})},S:function(e,r,n,t,a){var o=X(n);W(e,{name:r=b(r),fromWireType:function(f){return!!f},toWireType:function(f,u){return u?t:a},argPackAdvance:8,readValueFromPointer:function(f){if(1===n)var u=j;else if(2===n)u=I;else{if(4!==n)throw new TypeError("Unknown boolean type size: "+r);u=w}return this.fromWireType(u[f>>o])},ka:null})},f:function(e,r,n,t,a,o,f,u,l,s,h,d,v){h=b(h),o=T(a,o),u&&(u=T(f,u)),s&&(s=T(l,s)),v=T(d,v);var i=ur(h);Fe(i,function(){H("Cannot construct "+h+" due to unbound types",[t])}),k([e,r,n],t?[t]:[],function(p){if(p=p[0],t)var g=p.fa,A=g.pa;else A=M.prototype;p=$e(i,function(){if(Object.getPrototypeOf(this)!==P)throw new V("Use 'new' to construct "+h);if(void 0===U.qa)throw new V(h+" has no accessible constructor");var Er=U.qa[arguments.length];if(void 0===Er)throw new V("Tried to invoke ctor of "+h+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(U.qa).toString()+") parameters instead!");return Er.apply(this,arguments)});var P=Object.create(A,{constructor:{value:p}});p.prototype=P;var U=new Ir(h,p,P,v,g,o,u,s);g=new O(h,U,!0,!1,!1),A=new O(h+"*",U,!1,!1,!1);var ne=new O(h+" const*",U,!1,!0,!1);return dr[e]={pointerType:A,Ia:ne},vr(i,p),[g,A,ne]})},v:function(e,r,n,t,a,o,f){var u=ve(n,t);r=b(r),o=T(a,o),k([],[e],function(l){function s(){H("Cannot call "+h+" due to unbound types",u)}var h=(l=l[0]).name+"."+r;r.startsWith("@@")&&(r=Symbol[r.substring(2)]);var d=l.fa.constructor;return void 0===d[r]?(s.ta=n-1,d[r]=s):(Se(d,r,h),d[r].ia[n-1]=s),k([],u,function(v){return v=de(h,[v[0],null].concat(v.slice(1)),null,o,f),void 0===d[r].ia?(v.ta=n-1,d[r]=v):d[r].ia[n-1]=v,[]}),[]})},i:function(e,r,n,t,a,o){0<r||G();var f=ve(r,n);a=T(t,a),k([],[e],function(u){var l="constructor "+(u=u[0]).name;if(void 0===u.fa.qa&&(u.fa.qa=[]),void 0!==u.fa.qa[r-1])throw new V("Cannot register multiple constructors with identical number of parameters ("+(r-1)+") for class '"+u.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");return u.fa.qa[r-1]=()=>{H("Cannot construct "+u.name+" due to unbound types",f)},k([],f,function(s){return s.splice(1,0,null),u.fa.qa[r-1]=de(l,s,null,a,o),[]}),[]})},b:function(e,r,n,t,a,o,f,u){var l=ve(n,t);r=b(r),o=T(a,o),k([],[e],function(s){function h(){H("Cannot call "+d+" due to unbound types",l)}var d=(s=s[0]).name+"."+r;r.startsWith("@@")&&(r=Symbol[r.substring(2)]),u&&s.fa.ab.push(r);var v=s.fa.pa,i=v[r];return void 0===i||void 0===i.ia&&i.className!==s.name&&i.ta===n-2?(h.ta=n-2,h.className=s.name,v[r]=h):(Se(v,r,d),v[r].ia[n-2]=h),k([],l,function(p){return p=de(d,p,s,o,f),void 0===v[r].ia?(p.ta=n-2,v[r]=p):v[r].ia[n-2]=p,[]}),[]})},c:function(e,r,n,t,a,o,f,u,l,s){r=b(r),a=T(t,a),k([],[e],function(h){var d=(h=h[0]).name+"."+r,v={get:function(){H("Cannot access "+d+" due to unbound types",[n,f])},enumerable:!0,configurable:!0};return v.set=l?()=>{H("Cannot access "+d+" due to unbound types",[n,f])}:()=>{m(d+" is a read-only property")},Object.defineProperty(h.fa.pa,r,v),k([],l?[n,f]:[n],function(i){var p=i[0],g={get:function(){var P=yr(this,h,d+" getter");return p.fromWireType(a(o,P))},enumerable:!0};if(l){l=T(u,l);var A=i[1];g.set=function(P){var U=yr(this,h,d+" setter"),ne=[];l(s,U,A.toWireType(ne,P)),ue(ne)}}return Object.defineProperty(h.fa.pa,r,g),[]}),[]})},R:function(e,r){W(e,{name:r=b(r),fromWireType:function(n){var t=C(n);return Me(n),t},toWireType:function(n,t){return $(t)},argPackAdvance:8,readValueFromPointer:J,ka:null})},o:function(e,r,n,t){function a(){}n=X(n),r=b(r),a.values={},W(e,{name:r,constructor:a,fromWireType:function(o){return this.constructor.values[o]},toWireType:function(o,f){return f.value},argPackAdvance:8,readValueFromPointer:Yr(r,n,t),ka:null}),Fe(r,a)},e:function(e,r,n){var t=re(e,"enum");r=b(r),e=t.constructor,t=Object.create(t.constructor.prototype,{value:{value:n},constructor:{value:$e(t.name+"_"+r,function(){})}}),e.values[n]=t,e[r]=t},E:function(e,r,n){n=X(n),W(e,{name:r=b(r),fromWireType:function(t){return t},toWireType:function(t,a){return a},argPackAdvance:8,readValueFromPointer:Br(r,n),ka:null})},W:function(e,r,n,t,a,o){var f=ve(r,n);e=b(e),a=T(t,a),Fe(e,function(){H("Cannot call "+e+" due to unbound types",f)},r-1),k([],f,function(u){return vr(e,de(e,[u[0],null].concat(u.slice(1)),null,a,o),r-1),[]})},w:function(e,r,n,t,a){r=b(r),-1===a&&(a=4294967295),a=X(n);var o=u=>u;if(0===t){var f=32-8*n;o=u=>u<<f>>>f}n=r.includes("unsigned")?function(u,l){return l>>>0}:function(u,l){return l},W(e,{name:r,fromWireType:o,toWireType:n,argPackAdvance:8,readValueFromPointer:sr(r,a,0!==t),ka:null})},r:function(e,r,n){function t(o){return new a(Pe,y[1+(o>>=2)],y[o])}var a=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][r];W(e,{name:n=b(n),fromWireType:t,argPackAdvance:8,readValueFromPointer:t},{Wa:!0})},h:function(e,r,n,t,a,o,f,u,l,s,h,d){n=b(n),o=T(a,o),u=T(f,u),s=T(l,s),d=T(h,d),k([e],[r],function(v){return[new O(n,(v=v[0]).fa,!1,!1,!0,v,t,o,u,s,d)]})},G:function(e,r){var n="std::string"===(r=b(r));W(e,{name:r,fromWireType:function(t){var a=y[t>>2],o=t+4;if(n)for(var f=o,u=0;u<=a;++u){var l=o+u;if(u==a||0==_[l]){if(f=f?oe(_,f,l-f):"",void 0===s)var s=f;else s+="\0",s+=f;f=l+1}}else{for(s=Array(a),u=0;u<a;++u)s[u]=String.fromCharCode(_[o+u]);s=s.join("")}return F(t),s},toWireType:function(t,a){a instanceof ArrayBuffer&&(a=new Uint8Array(a));var o="string"==typeof a;o||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int8Array||m("Cannot pass non-string to std::string");var f=n&&o?Ke(a):a.length,u=Ae(4+f+1),l=u+4;if(y[u>>2]=f,n&&o)Xe(a,_,l,f+1);else if(o)for(o=0;o<f;++o){var s=a.charCodeAt(o);255<s&&(F(l),m("String has UTF-16 code units that do not fit in 8 bits")),_[l+o]=s}else for(o=0;o<f;++o)_[l+o]=a[o];return null!==t&&t.push(F,u),u},argPackAdvance:8,readValueFromPointer:J,ka:function(t){F(t)}})},B:function(e,r,n){if(n=b(n),2===r)var t=Vr,a=zr,o=Nr,f=()=>q,u=1;else 4===r&&(t=qr,a=Lr,o=Gr,f=()=>y,u=2);W(e,{name:n,fromWireType:function(l){for(var s,h=y[l>>2],d=f(),v=l+4,i=0;i<=h;++i){var p=l+4+i*r;i!=h&&0!=d[p>>u]||(v=t(v,p-v),void 0===s?s=v:(s+="\0",s+=v),v=p+r)}return F(l),s},toWireType:function(l,s){"string"!=typeof s&&m("Cannot pass non-string to C++ string type "+n);var h=o(s),d=Ae(4+h+r);return y[d>>2]=h>>u,a(s,d+4,h+r),null!==l&&l.push(F,d),d},argPackAdvance:8,readValueFromPointer:J,ka:function(l){F(l)}})},t:function(e,r,n,t,a,o){ie[e]={name:b(r),Ca:T(n,t),oa:T(a,o),Ga:[]}},j:function(e,r,n,t,a,o,f,u,l,s){ie[e].Ga.push({Na:b(r),Ta:n,Ra:T(t,a),Sa:o,eb:f,cb:T(u,l),fb:s})},T:function(e,r){W(e,{Xa:!0,name:r=b(r),argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},l:function(e,r,n){e=C(e),r=re(r,"emval::as");var t=[],a=$(t);return y[n>>2]=a,r.toWireType(t,e)},z:function(e,r){return e=C(e),(r=re(r,"emval::as")).toWireType(null,e)},X:function(e,r,n,t){e=C(e),n=wr(r,n);for(var a=Array(r),o=0;o<r;++o){var f=n[o];a[o]=f.readValueFromPointer(t),t+=f.argPackAdvance}return e=e.apply(void 0,a),$(e)},U:function(e,r,n,t,a){e=me[e],r=C(r),n=ge(n);var o=[];return y[t>>2]=$(o),e(r,n,o,a)},C:function(e,r,n,t){(e=me[e])(r=C(r),n=ge(n),null,t)},a:Me,H:function(e){return 0===e?$(Ar()):(e=ge(e),$(Ar()[e]))},A:function(e,r){var n=wr(e,r),t=n[0];r=t.name+"_$"+n.slice(1).map(function(f){return f.name}).join("_")+"$";var a=Tr[r];if(void 0!==a)return a;var o=Array(e-1);return a=function Zr(e){var r=me.length;return me.push(e),r}((f,u,l,s)=>{for(var h=0,d=0;d<e-1;++d)o[d]=n[d+1].readValueFromPointer(s+h),h+=n[d+1].argPackAdvance;for(f=f[u].apply(f,o),d=0;d<e-1;++d)n[d+1].Ja&&n[d+1].Ja(o[d]);if(!t.Xa)return t.toWireType(l,f)}),Tr[r]=a},q:function(e,r){return e=C(e),r=C(r),$(e[r])},g:function(e){4<e&&(E[e].Da+=1)},I:function(e,r){return(e=C(e))instanceof C(r)},u:function(e){return"number"==typeof(e=C(e))},x:function(e){return"string"==typeof(e=C(e))},V:function(){return $([])},p:function(e){return $(ge(e))},k:function(e){ue(C(e)),Me(e)},d:function(e,r){return e=(e=re(e,"_emval_take_value")).readValueFromPointer(r),$(e)},y:function(e){return e=C(e),$(typeof e)},D:function(){G("")},N:function(e,r,n){_.copyWithin(e,r,r+n)},M:function(e){var r=_.length;if(2147483648<(e>>>=0))return!1;for(var n=1;4>=n;n*=2){var t=r*(1+.2/n);t=Math.min(t,e+100663296);var a=Math;t=Math.max(e,t),a=a.min.call(a,2147483648,t+(65536-t%65536)%65536);e:{try{Ce.grow(a-Pe.byteLength+65535>>>16),Qe();var o=1;break e}catch{}o=void 0}if(o)return!0}return!1},K:function(e,r){var n=0;return _r().forEach(function(t,a){var o=r+n;for(a=y[e+4*a>>2]=o,o=0;o<t.length;++o)j[0|a++]=t.charCodeAt(o);j[0|a]=0,n+=t.length+1}),0},L:function(e,r){var n=_r();y[e>>2]=n.length;var t=0;return n.forEach(function(a){t+=a.length+1}),y[r>>2]=t,0},Q:function(){return 52},P:function(){return 70},O:function(e,r,n,t){for(var a=0,o=0;o<n;o++){var f=y[r>>2],u=y[r+4>>2];r+=8;for(var l=0;l<u;l++){var s=_[f+l],h=Xr[e];0===s||10===s?((1===e?Sr:Y)(oe(h,0)),h.length=0):h.push(s)}a+=u}return y[t>>2]=a,0},J:function(e,r,n,t){return function Qr(e,r,n,t){function a(i,p,g){for(i="number"==typeof i?i.toString():i||"";i.length<p;)i=g[0]+i;return i}function o(i,p){return a(i,p,"0")}function f(i,p){function g(P){return 0>P?-1:0<P?1:0}var A;return 0===(A=g(i.getFullYear()-p.getFullYear()))&&0===(A=g(i.getMonth()-p.getMonth()))&&(A=g(i.getDate()-p.getDate())),A}function u(i){switch(i.getDay()){case 0:return new Date(i.getFullYear()-1,11,29);case 1:return i;case 2:return new Date(i.getFullYear(),0,3);case 3:return new Date(i.getFullYear(),0,2);case 4:return new Date(i.getFullYear(),0,1);case 5:return new Date(i.getFullYear()-1,11,31);case 6:return new Date(i.getFullYear()-1,11,30)}}function l(i){var p=i.ra;for(i=new Date(new Date(i.sa+1900,0,1).getTime());0<p;){var g=i.getMonth(),A=(ye(i.getFullYear())?Cr:Pr)[g];if(!(p>A-i.getDate())){i.setDate(i.getDate()+p);break}p-=A-i.getDate()+1,i.setDate(1),11>g?i.setMonth(g+1):(i.setMonth(0),i.setFullYear(i.getFullYear()+1))}return g=new Date(i.getFullYear()+1,0,4),p=u(new Date(i.getFullYear(),0,4)),g=u(g),0>=f(p,i)?0>=f(g,i)?i.getFullYear()+1:i.getFullYear():i.getFullYear()-1}var s=w[t+40>>2];for(var h in t={jb:w[t>>2],ib:w[t+4>>2],za:w[t+8>>2],Ea:w[t+12>>2],Aa:w[t+16>>2],sa:w[t+20>>2],na:w[t+24>>2],ra:w[t+28>>2],mb:w[t+32>>2],hb:w[t+36>>2],kb:s&&s?oe(_,s):""},n=n?oe(_,n):"",s={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"})n=n.replace(new RegExp(h,"g"),s[h]);var d="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),v="January February March April May June July August September October November December".split(" ");for(h in s={"%a":function(i){return d[i.na].substring(0,3)},"%A":function(i){return d[i.na]},"%b":function(i){return v[i.Aa].substring(0,3)},"%B":function(i){return v[i.Aa]},"%C":function(i){return o((i.sa+1900)/100|0,2)},"%d":function(i){return o(i.Ea,2)},"%e":function(i){return a(i.Ea,2," ")},"%g":function(i){return l(i).toString().substring(2)},"%G":function(i){return l(i)},"%H":function(i){return o(i.za,2)},"%I":function(i){return 0==(i=i.za)?i=12:12<i&&(i-=12),o(i,2)},"%j":function(i){for(var p=0,g=0;g<=i.Aa-1;p+=(ye(i.sa+1900)?Cr:Pr)[g++]);return o(i.Ea+p,3)},"%m":function(i){return o(i.Aa+1,2)},"%M":function(i){return o(i.ib,2)},"%n":function(){return"\n"},"%p":function(i){return 0<=i.za&&12>i.za?"AM":"PM"},"%S":function(i){return o(i.jb,2)},"%t":function(){return"\t"},"%u":function(i){return i.na||7},"%U":function(i){return o(Math.floor((i.ra+7-i.na)/7),2)},"%V":function(i){var p=Math.floor((i.ra+7-(i.na+6)%7)/7);if(2>=(i.na+371-i.ra-2)%7&&p++,p)53==p&&(4==(g=(i.na+371-i.ra)%7)||3==g&&ye(i.sa)||(p=1));else{p=52;var g=(i.na+7-i.ra-1)%7;(4==g||5==g&&ye(i.sa%400-1))&&p++}return o(p,2)},"%w":function(i){return i.na},"%W":function(i){return o(Math.floor((i.ra+7-(i.na+6)%7)/7),2)},"%y":function(i){return(i.sa+1900).toString().substring(2)},"%Y":function(i){return i.sa+1900},"%z":function(i){return(0<=(i=i.hb)?"+":"-")+("0000"+((i=Math.abs(i)/60)/60*100+i%60)).slice(-4)},"%Z":function(i){return i.kb},"%%":function(){return"%"}},n=n.replace(/%%/g,"\0\0"),s)n.includes(h)&&(n=n.replace(new RegExp(h,"g"),s[h](t)));return(h=function Kr(e){var r=Array(Ke(e)+1);return Xe(e,r,0,r.length),r}(n=n.replace(/\0\0/g,"%"))).length>r?0:(j.set(h,e),h.length-1)}(e,r,n,t)}};(function(){function e(a){c.asm=a.exports,Ce=c.asm.Y,Qe(),er=c.asm.ca,nr.unshift(c.asm.Z),R--,c.monitorRunDependencies&&c.monitorRunDependencies(R),0==R&&L&&(a=L,L=null,a())}function r(a){e(a.instance)}function n(a){return function Dr(){return N||"function"!=typeof fetch?Promise.resolve().then(function(){return ir()}):fetch(S,{credentials:"same-origin"}).then(function(e){if(!e.ok)throw"failed to load wasm binary file at '"+S+"'";return e.arrayBuffer()}).catch(function(){return ir()})}().then(function(o){return WebAssembly.instantiate(o,t)}).then(function(o){return o}).then(a,function(o){Y("failed to asynchronously prepare wasm: "+o),G(o)})}var t={a:en};if(R++,c.monitorRunDependencies&&c.monitorRunDependencies(R),c.instantiateWasm)try{return c.instantiateWasm(t,e)}catch(a){Y("Module.instantiateWasm callback failed with error: "+a),ae(a)}(N||"function"!=typeof WebAssembly.instantiateStreaming||ar()||"function"!=typeof fetch?n(r):fetch(S,{credentials:"same-origin"}).then(function(a){return WebAssembly.instantiateStreaming(a,t).then(r,function(o){return Y("wasm streaming compile failed: "+o),Y("falling back to ArrayBuffer instantiation"),n(r)})})).catch(ae)})(),c.___wasm_call_ctors=function(){return(c.___wasm_call_ctors=c.asm.Z).apply(null,arguments)};var we,Ae=c._malloc=function(){return(Ae=c._malloc=c.asm._).apply(null,arguments)},F=c._free=function(){return(F=c._free=c.asm.$).apply(null,arguments)},$r=c.___getTypeName=function(){return($r=c.___getTypeName=c.asm.aa).apply(null,arguments)};function Wr(){function e(){if(!we&&(we=!0,c.calledRun=!0,!Je)){if(ke(nr),Be(c),c.onRuntimeInitialized&&c.onRuntimeInitialized(),c.postRun)for("function"==typeof c.postRun&&(c.postRun=[c.postRun]);c.postRun.length;){var r=c.postRun.shift();tr.unshift(r)}ke(tr)}}if(!(0<R)){if(c.preRun)for("function"==typeof c.preRun&&(c.preRun=[c.preRun]);c.preRun.length;)Fr();ke(rr),0<R||(c.setStatus?(c.setStatus("Running..."),setTimeout(function(){setTimeout(function(){c.setStatus("")},1),e()},1)):e())}}if(c.__embind_initialize_bindings=function(){return(c.__embind_initialize_bindings=c.asm.ba).apply(null,arguments)},c.___cxa_is_pointer_type=function(){return(c.___cxa_is_pointer_type=c.asm.da).apply(null,arguments)},L=function e(){we||Wr(),we||(L=e)},c.preInit)for("function"==typeof c.preInit&&(c.preInit=[c.preInit]);0<c.preInit.length;)c.preInit.pop()();return Wr(),z.ready};const Or=(0,te.g)(Ye.exports),jr=Object.freeze(Object.defineProperty({__proto__:null,default:Or},Symbol.toStringTag,{value:"Module"}))}}]);