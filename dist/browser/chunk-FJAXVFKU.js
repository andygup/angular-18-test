import{A as i,D as t}from"./chunk-NJG4JJ4L.js";function c(n){if(i(n)){if(n.length<t)return n}else if(n.length<t)return Array.from(n);let r=!0,e=!0;return n.some((o,A)=>(r=r&&o===0,e=e&&o===A,!r&&!e)),r?s(n.length):e?w(n.length):i(n)||n.BYTES_PER_ELEMENT!==Uint16Array.BYTES_PER_ELEMENT?l(n):n}function l(n){let r=!0;for(let e of n){if(e>=65536)return i(n)?new Uint32Array(n):n;e>=256&&(r=!1)}return r?new Uint8Array(n):new Uint16Array(n)}function g(n){return n<=t?new Array(n):n<=65536?new Uint16Array(n):new Uint32Array(n)}var a=(()=>{let n=new Uint32Array(131072);for(let r=0;r<n.length;++r)n[r]=r;return n})(),y=[0],u=(()=>{let n=new Uint16Array(65536);for(let r=0;r<n.length;++r)n[r]=r;return n})();function w(n){if(n===1)return y;if(n<t)return Array.from(new Uint16Array(u.buffer,0,n));if(n<u.length)return new Uint16Array(u.buffer,0,n);if(n>a.length){let r=Math.max(2*a.length,n);a=new Uint32Array(r);for(let e=0;e<a.length;e++)a[e]=e}return new Uint32Array(a.buffer,0,n)}var f=new Uint8Array(65536);function s(n){if(n===1)return y;if(n<t)return new Array(n).fill(0);if(n>f.length){let r=Math.max(2*f.length,n);f=new Uint8Array(r)}return new Uint8Array(f.buffer,0,n)}export{c as a,g as b,w as c};
