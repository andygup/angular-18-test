import{j as c,l as f}from"./chunk-ZGLJFDS6.js";var h=new Float32Array(1);function E(n){--n;for(let a=1;a<32;a<<=1)n|=n>>a;return n+1}function M(n,a,e){return Math.min(Math.max(n,a),e)}function T(n){return n--,n|=n>>1,n|=n>>2,n|=n>>4,n|=n>>8,n|=n>>16,++n}function p(n,a,e){return n+(a-n)*e}function x(n,a,e,r,t){return p(r,t,(n-a)/(e-a))}function N(n){return n*Math.PI/180}function P(n){return 180*n/Math.PI}function B(n){return Math.acos(M(n,-1,1))}function F(n){return Math.asin(M(n,-1,1))}function s(n,a,e=1e-6){return n===a?!0:!Number.isFinite(n)||!Number.isFinite(a)?!1:(n>a?n-a:a-n)<=e}var u=new DataView(new ArrayBuffer(Float64Array.BYTES_PER_ELEMENT));function o(n){return u.setFloat64(0,n),u.getBigInt64(0)}function g(n){return u.setBigInt64(0,n),u.getFloat64(0)}var i=BigInt("1000000"),w=m(1);function m(n){let a=o(n=Math.abs(n)),e=g(a<=i?i:a-i);return Math.abs(n-e)}function I(n,a,e=w){if(n===a)return!0;if(!Number.isFinite(n)||!Number.isFinite(a))return!1;if(e!=null&&m(Math.min(Math.abs(n),Math.abs(a)))<e)return Math.abs(n-a)<=e;let r=o(n),t=o(a);return r<0!=t<0?!1:!((r<t?t-r:r-t)>i)}function A(n){return b(Math.max(-l,Math.min(n,l)))}function b(n){return h[0]=n,h[0]}function O(n,a){let e=c(n),r=F(n[2]/e),t=Math.atan2(n[1]/e,n[0]/e);return f(a,e,r,t),a}function y(n){let a=n[0]*n[0]+n[1]*n[1]+n[2]*n[2],e=n[3]*n[3]+n[4]*n[4]+n[5]*n[5],r=n[6]*n[6]+n[7]*n[7]+n[8]*n[8];return!(s(a,1)&&s(e,1)&&s(r,1))}var l=b(34028234663852886e22);export{E as a,M as b,T as c,p as d,x as e,N as f,P as g,B as h,F as i,s as j,I as k,A as l,O as m,y as n,l as o};
