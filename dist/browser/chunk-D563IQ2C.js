import{b as et}from"./chunk-VU5W7W6Y.js";import"./chunk-3T7TAUC2.js";function Ut(v,w){for(var p=0;p<w.length;p++){let e=w[p];if(typeof e!="string"&&!Array.isArray(e)){for(let h in e)if(h!=="default"&&!(h in v)){let g=Object.getOwnPropertyDescriptor(e,h);g&&Object.defineProperty(v,h,g.get?g:{enumerable:!0,get:()=>e[h]})}}}return Object.freeze(Object.defineProperty(v,Symbol.toStringTag,{value:"Module"}))}var nt,k,rt,it={exports:{}};nt=it,k=typeof document<"u"&&document.currentScript?document.currentScript.src:void 0,rt=function(v={}){var w,p,e=v;e.ready=new Promise((t,n)=>{w=t,p=n});var h=Object.assign({},e),g=typeof window=="object",I=typeof importScripts=="function";typeof process=="object"&&typeof process.versions=="object"&&process.versions.node;var M,l="";function at(t){return e.locateFile?e.locateFile(t,l):l+t}(g||I)&&(I?l=self.location.href:typeof document<"u"&&document.currentScript&&(l=document.currentScript.src),k&&(l=k),l=l.indexOf("blob:")!==0?l.substr(0,l.replace(/[?#].*/,"").lastIndexOf("/")+1):"",I&&(M=t=>{var n=new XMLHttpRequest;return n.open("GET",t,!1),n.responseType="arraybuffer",n.send(null),new Uint8Array(n.response)}));var A,x,ut=e.print||console.log.bind(console),b=e.printErr||console.error.bind(console);Object.assign(e,h),h=null,e.arguments&&e.arguments,e.thisProgram&&e.thisProgram,e.quit&&e.quit,e.wasmBinary&&(A=e.wasmBinary),typeof WebAssembly!="object"&&Y("no native wasm support detected");var T,j,q=!1;function L(){var t=x.buffer;e.HEAP8=new Int8Array(t),e.HEAP16=new Int16Array(t),e.HEAPU8=T=new Uint8Array(t),e.HEAPU16=new Uint16Array(t),e.HEAP32=new Int32Array(t),e.HEAPU32=j=new Uint32Array(t),e.HEAPF32=new Float32Array(t),e.HEAPF64=new Float64Array(t)}var z=[],N=[],$=[];function ft(){if(e.preRun)for(typeof e.preRun=="function"&&(e.preRun=[e.preRun]);e.preRun.length;)lt(e.preRun.shift());U(z)}function ct(){U(N)}function st(){if(e.postRun)for(typeof e.postRun=="function"&&(e.postRun=[e.postRun]);e.postRun.length;)ht(e.postRun.shift());U($)}function lt(t){z.unshift(t)}function pt(t){N.unshift(t)}function ht(t){$.unshift(t)}var y=0,E=null;function mt(t){y++,e.monitorRunDependencies?.(y)}function yt(t){if(y--,e.monitorRunDependencies?.(y),y==0&&E){var n=E;E=null,n()}}function Y(t){e.onAbort?.(t),b(t="Aborted("+t+")"),q=!0,t+=". Build with -sASSERTIONS for more info.";var n=new WebAssembly.RuntimeError(t);throw p(n),n}var R,dt="data:application/octet-stream;base64,",G=t=>t.startsWith(dt);function X(t){if(t==R&&A)return new Uint8Array(A);if(M)return M(t);throw"both async and sync fetching of the wasm failed"}function vt(t){return A||!g&&!I||typeof fetch!="function"?Promise.resolve().then(()=>X(t)):fetch(t,{credentials:"same-origin"}).then(n=>{if(!n.ok)throw"failed to load wasm binary file at '"+t+"'";return n.arrayBuffer()}).catch(()=>X(t))}function J(t,n,o){return vt(t).then(r=>WebAssembly.instantiate(r,n)).then(r=>r).then(o,r=>{b(`failed to asynchronously prepare wasm: ${r}`),Y(r)})}function gt(t,n,o,r){return t||typeof WebAssembly.instantiateStreaming!="function"||G(n)||typeof fetch!="function"?J(n,o,r):fetch(n,{credentials:"same-origin"}).then(i=>WebAssembly.instantiateStreaming(i,o).then(r,function(a){return b(`wasm streaming compile failed: ${a}`),b("falling back to ArrayBuffer instantiation"),J(n,o,r)}))}function bt(){var t={a:It};function n(r,i){return s=r.exports,x=s.i,L(),K=s.m,pt(s.j),yt(),s}function o(r){n(r.instance)}if(mt(),e.instantiateWasm)try{return e.instantiateWasm(t,n)}catch(r){b(`Module.instantiateWasm callback failed with error: ${r}`),p(r)}return gt(A,R,t,o).catch(p),{}}G(R="libtess.wasm")||(R=at(R));var U=t=>{for(;t.length>0;)t.shift()(e)};e.noExitRuntime;var K,wt=()=>{throw 1/0},At=(t,n,o)=>T.copyWithin(t,n,n+o),Et=()=>2147483648,Rt=t=>{var n=(t-x.buffer.byteLength+65535)/65536;try{return x.grow(n),L(),1}catch{}},Pt=t=>{var n=T.length;t>>>=0;var o=Et();if(t>o)return!1;for(var r=(f,c)=>f+(c-f%c)%c,i=1;i<=4;i*=2){var a=n*(1+.2/i);a=Math.min(a,t+100663296);var u=Math.min(o,r(Math.max(t,a),65536));if(Rt(u))return!0}return!1},St=[null,[],[]],Q=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0,_t=(t,n,o)=>{for(var r=n+o,i=n;t[i]&&!(i>=r);)++i;if(i-n>16&&t.buffer&&Q)return Q.decode(t.subarray(n,i));for(var a="";n<i;){var u=t[n++];if(128&u){var f=63&t[n++];if((224&u)!=192){var c=63&t[n++];if((u=(240&u)==224?(15&u)<<12|f<<6|c:(7&u)<<18|f<<12|c<<6|63&t[n++])<65536)a+=String.fromCharCode(u);else{var H=u-65536;a+=String.fromCharCode(55296|H>>10,56320|1023&H)}}else a+=String.fromCharCode((31&u)<<6|f)}else a+=String.fromCharCode(u)}return a},Ht=(t,n)=>{var o=St[t];n===0||n===10?((t===1?ut:b)(_t(o,0)),o.length=0):o.push(n)},O=[],W=t=>{var n=O[t];return n||(t>=O.length&&(O.length=t+1),O[t]=n=K.get(t)),n},It={e:wt,g:At,f:Pt,c:(t,n,o,r)=>{for(var i=0,a=0;a<o;a++){var u=j[n>>2],f=j[n+4>>2];n+=8;for(var c=0;c<f;c++)Ht(t,T[u+c]);i+=f}return j[r>>2]=i,0},b:jt,h:Ot,d:Tt,a:xt},s=bt();e._malloc=t=>(e._malloc=s.k)(t),e._free=t=>(e._free=s.l)(t),e._triangulate=(t,n,o,r,i,a)=>(e._triangulate=s.n)(t,n,o,r,i,a);var C,P=(t,n)=>(P=s.o)(t,n),S=()=>(S=s.p)(),_=t=>(_=s.q)(t);function xt(t,n,o){var r=S();try{W(t)(n,o)}catch(i){if(_(r),i!==i+0)throw i;P(1,0)}}function Tt(t,n){var o=S();try{W(t)(n)}catch(r){if(_(o),r!==r+0)throw r;P(1,0)}}function jt(t,n){var o=S();try{return W(t)(n)}catch(r){if(_(o),r!==r+0)throw r;P(1,0)}}function Ot(t,n,o,r){var i=S();try{return W(t)(n,o,r)}catch(a){if(_(i),a!==a+0)throw a;P(1,0)}}function V(){function t(){C||(C=!0,e.calledRun=!0,q||(ct(),w(e),e.onRuntimeInitialized&&e.onRuntimeInitialized(),st()))}y>0||(ft(),y>0||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1),t()},1)):t()))}if(E=function t(){C||V(),C||(E=t)},e.preInit)for(typeof e.preInit=="function"&&(e.preInit=[e.preInit]);e.preInit.length>0;)e.preInit.pop()();V();let B=null,m=null,d=null,F=null,Wt=2,Z=4e3,tt=0,Ct=(t,n,o)=>{B||(B=e._triangulate);let r=e.HEAPF32,i=e.HEAP32.BYTES_PER_ELEMENT,a=2,u=r.BYTES_PER_ELEMENT;o>tt&&(tt=o,d&&(e._free(d),d=0),m&&(e._free(m),m=0)),d||(d=e._malloc(o*u)),F||(F=e._malloc(Z*i));let f=o*Wt;m||(m=e._malloc(f*u)),r=e.HEAPF32,r.set(t,d/u),e.HEAP32.set(n,F/i);let c=f/a,H=B(d,F,Math.min(n.length,Z),a,m,c),Ft=H*a;r=e.HEAPF32;let Mt=r.slice(m/u,m/u+Ft),D={};return D.buffer=Mt,D.vertexCount=H,D};return e.triangulate=Ct,v.ready},nt.exports=rt;var ot=it.exports,Dt=Ut({__proto__:null,default:et(ot)},[ot]);export{Dt as l};
