import{w as m,z as f}from"./chunk-AANS6QE5.js";import{h as o}from"./chunk-43GG6PFR.js";import{u as r}from"./chunk-3DV77WOO.js";import{g as s}from"./chunk-3T7TAUC2.js";function y(e){let t=g(e);return t!=null?t.toDataURL():""}function T(e,t){return s(this,null,function*(){let a=g(e);if(a==null)throw new r("imageToArrayBuffer","Unsupported image type");let n=p(e),i=yield new Promise(u=>a.toBlob(u,n));if(o(t),!i)throw new r("imageToArrayBuffer","Failed to encode image");let c=yield i.arrayBuffer();return o(t),{data:c,type:n}})}function p(e){if(!(e instanceof HTMLImageElement))return"image/png";let t=e.src;if(m(t)){let a=f(t);return a?.mediaType==="image/jpeg"?a.mediaType:"image/png"}return/\.png$/i.test(t)?"image/png":/\.(jpg|jpeg)$/i.test(t)?"image/jpeg":"image/png"}function g(e){if(e instanceof HTMLCanvasElement)return e;if(e instanceof HTMLVideoElement)return null;let t=document.createElement("canvas");t.width=e.width,t.height=e.height;let a=t.getContext("2d");return e instanceof HTMLImageElement?a.drawImage(e,0,0,e.width,e.height):e instanceof ImageData&&a.putImageData(e,0,0),t}function A(e){let t=[],a=new Uint8Array(e);for(let n=0;n<a.length;n++)t.push(String.fromCharCode(a[n]));return"data:application/octet-stream;base64,"+btoa(t.join(""))}function B(e){if(e.byteLength<8)return!1;let t=new Uint8Array(e);return t[0]===137&&t[1]===80&&t[2]===78&&t[3]===71&&t[4]===13&&t[5]===10&&t[6]===26&&t[7]===10}export{y as a,T as b,A as c,B as d};
