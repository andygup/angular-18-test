import{a as g,b as _}from"./chunk-RSDQHAJX.js";function l(){return[0,0,0]}function Y(r){return[r[0],r[1],r[2]]}function m(r,n,s){return[r,n,s]}function w(r,n=l()){let s=Math.min(3,r.length);for(let e=0;e<s;++e)n[e]=r[e];return n}function D(r,n){return new Float64Array(r,n,3)}function p(){return l()}function q(){return m(1,1,1)}function x(){return m(1,0,0)}function y(){return m(0,1,0)}function N(){return m(0,0,1)}var R=p(),V=q(),L=x(),F=y(),k=N(),vr=Object.freeze(Object.defineProperty({__proto__:null,ONES:V,UNIT_X:L,UNIT_Y:F,UNIT_Z:k,ZEROS:R,clone:Y,create:l,createView:D,fromArray:w,fromValues:m,ones:q,unitX:x,unitY:y,unitZ:N,zeros:p},Symbol.toStringTag,{value:"Module"}));function S(r){let n=r[0],s=r[1],e=r[2];return Math.sqrt(n*n+s*s+e*e)}function B(r,n){return r[0]=n[0],r[1]=n[1],r[2]=n[2],r}function C(r,n,s,e){return r[0]=n,r[1]=s,r[2]=e,r}function G(r,n,s){return r[0]=n[0]+s[0],r[1]=n[1]+s[1],r[2]=n[2]+s[2],r}function T(r,n,s){return r[0]=n[0]-s[0],r[1]=n[1]-s[1],r[2]=n[2]-s[2],r}function v(r,n,s){return r[0]=n[0]*s[0],r[1]=n[1]*s[1],r[2]=n[2]*s[2],r}function z(r,n,s){return r[0]=n[0]/s[0],r[1]=n[1]/s[1],r[2]=n[2]/s[2],r}function H(r,n){return r[0]=Math.ceil(n[0]),r[1]=Math.ceil(n[1]),r[2]=Math.ceil(n[2]),r}function J(r,n){return r[0]=Math.floor(n[0]),r[1]=Math.floor(n[1]),r[2]=Math.floor(n[2]),r}function K(r,n){return r[0]=Math.abs(n[0]),r[1]=Math.abs(n[1]),r[2]=Math.abs(n[2]),r}function Q(r,n){return r[0]=Math.sign(n[0]),r[1]=Math.sign(n[1]),r[2]=Math.sign(n[2]),r}function W(r,n,s){return r[0]=Math.min(n[0],s[0]),r[1]=Math.min(n[1],s[1]),r[2]=Math.min(n[2],s[2]),r}function $(r,n,s){return r[0]=Math.max(n[0],s[0]),r[1]=Math.max(n[1],s[1]),r[2]=Math.max(n[2],s[2]),r}function rr(r,n){return r[0]=Math.round(n[0]),r[1]=Math.round(n[1]),r[2]=Math.round(n[2]),r}function nr(r,n,s){return r[0]=n[0]*s,r[1]=n[1]*s,r[2]=n[2]*s,r}function sr(r,n,s,e){return r[0]=n[0]+s[0]*e,r[1]=n[1]+s[1]*e,r[2]=n[2]+s[2]*e,r}function A(r,n){let s=n[0]-r[0],e=n[1]-r[1],o=n[2]-r[2];return Math.sqrt(s*s+e*e+o*o)}function E(r,n){let s=n[0]-r[0],e=n[1]-r[1],o=n[2]-r[2];return s*s+e*e+o*o}function U(r){let n=r[0],s=r[1],e=r[2];return n*n+s*s+e*e}function er(r,n){return r[0]=-n[0],r[1]=-n[1],r[2]=-n[2],r}function or(r,n){return r[0]=1/n[0],r[1]=1/n[1],r[2]=1/n[2],r}function b(r,n){let s=n[0],e=n[1],o=n[2],u=s*s+e*e+o*o;return u>0&&(u=1/Math.sqrt(u),r[0]=n[0]*u,r[1]=n[1]*u,r[2]=n[2]*u),r}function Z(r,n){return r[0]*n[0]+r[1]*n[1]+r[2]*n[2]}function ur(r,n,s){let e=n[0],o=n[1],u=n[2],t=s[0],c=s[1],a=s[2];return r[0]=o*a-u*c,r[1]=u*t-e*a,r[2]=e*c-o*t,r}function tr(r,n,s,e){let o=n[0],u=n[1],t=n[2];return r[0]=o+e*(s[0]-o),r[1]=u+e*(s[1]-u),r[2]=t+e*(s[2]-t),r}function ar(r,n,s,e,o,u){let t=u*u,c=t*(2*u-3)+1,a=t*(u-2)+u,i=t*(u-1),f=t*(3-2*u);return r[0]=n[0]*c+s[0]*a+e[0]*i+o[0]*f,r[1]=n[1]*c+s[1]*a+e[1]*i+o[1]*f,r[2]=n[2]*c+s[2]*a+e[2]*i+o[2]*f,r}function cr(r,n,s,e,o,u){let t=1-u,c=t*t,a=u*u,i=c*t,f=3*u*c,h=3*a*t,M=a*u;return r[0]=n[0]*i+s[0]*f+e[0]*h+o[0]*M,r[1]=n[1]*i+s[1]*f+e[1]*h+o[1]*M,r[2]=n[2]*i+s[2]*f+e[2]*h+o[2]*M,r}function ir(r,n){n=n||1;let s=_,e=2*s()*Math.PI,o=2*s()-1,u=Math.sqrt(1-o*o)*n;return r[0]=Math.cos(e)*u,r[1]=Math.sin(e)*u,r[2]=o*n,r}function fr(r,n,s){let e=n[0],o=n[1],u=n[2];return r[0]=s[0]*e+s[4]*o+s[8]*u+s[12],r[1]=s[1]*e+s[5]*o+s[9]*u+s[13],r[2]=s[2]*e+s[6]*o+s[10]*u+s[14],r}function hr(r,n,s){let e=n[0],o=n[1],u=n[2];return r[0]=e*s[0]+o*s[3]+u*s[6],r[1]=e*s[1]+o*s[4]+u*s[7],r[2]=e*s[2]+o*s[5]+u*s[8],r}function Mr(r,n,s){let e=s[0],o=s[1],u=s[2],t=s[3],c=n[0],a=n[1],i=n[2],f=o*i-u*a,h=u*c-e*i,M=e*a-o*c,j=o*M-u*h,P=u*f-e*M,X=e*h-o*f,d=2*t;return r[0]=c+f*d+2*j,r[1]=a+h*d+2*P,r[2]=i+M*d+2*X,r}function lr(r,n,s,e){let o=[],u=[];return o[0]=n[0]-s[0],o[1]=n[1]-s[1],o[2]=n[2]-s[2],u[0]=o[0],u[1]=o[1]*Math.cos(e)-o[2]*Math.sin(e),u[2]=o[1]*Math.sin(e)+o[2]*Math.cos(e),r[0]=u[0]+s[0],r[1]=u[1]+s[1],r[2]=u[2]+s[2],r}function mr(r,n,s,e){let o=[],u=[];return o[0]=n[0]-s[0],o[1]=n[1]-s[1],o[2]=n[2]-s[2],u[0]=o[2]*Math.sin(e)+o[0]*Math.cos(e),u[1]=o[1],u[2]=o[2]*Math.cos(e)-o[0]*Math.sin(e),r[0]=u[0]+s[0],r[1]=u[1]+s[1],r[2]=u[2]+s[2],r}function dr(r,n,s,e){let o=[],u=[];return o[0]=n[0]-s[0],o[1]=n[1]-s[1],o[2]=n[2]-s[2],u[0]=o[0]*Math.cos(e)-o[1]*Math.sin(e),u[1]=o[0]*Math.sin(e)+o[1]*Math.cos(e),u[2]=o[2],r[0]=u[0]+s[0],r[1]=u[1]+s[1],r[2]=u[2]+s[2],r}function br(r,n){b(O,r),b(I,n);let s=Z(O,I);return s>1?0:s<-1?Math.PI:Math.acos(s)}var O=l(),I=l();function gr(r){return"vec3("+r[0]+", "+r[1]+", "+r[2]+")"}function _r(r,n){return r[0]===n[0]&&r[1]===n[1]&&r[2]===n[2]}function pr(r,n){if(r===n)return!0;let s=r[0],e=r[1],o=r[2],u=n[0],t=n[1],c=n[2],a=g();return Math.abs(s-u)<=a*Math.max(1,Math.abs(s),Math.abs(u))&&Math.abs(e-t)<=a*Math.max(1,Math.abs(e),Math.abs(t))&&Math.abs(o-c)<=a*Math.max(1,Math.abs(o),Math.abs(c))}function qr(r,n,s){let e=s[0]-n[0],o=s[1]-n[1],u=s[2]-n[2],t=e*e+o*o+u*u;return t>0?(t=1/Math.sqrt(t),r[0]=e*t,r[1]=o*t,r[2]=u*t,r):(r[0]=0,r[1]=0,r[2]=0,r)}var xr=T,yr=v,Nr=z,Or=A,Ir=E,Sr=S,Tr=U,Ur=Object.freeze(Object.defineProperty({__proto__:null,abs:K,add:G,angle:br,bezier:cr,ceil:H,copy:B,cross:ur,direction:qr,dist:Or,distance:A,div:Nr,divide:z,dot:Z,equals:pr,exactEquals:_r,floor:J,hermite:ar,inverse:or,len:Sr,length:S,lerp:tr,max:$,min:W,mul:yr,multiply:v,negate:er,normalize:b,random:ir,rotateX:lr,rotateY:mr,rotateZ:dr,round:rr,scale:nr,scaleAndAdd:sr,set:C,sign:Q,sqrDist:Ir,sqrLen:Tr,squaredDistance:E,squaredLength:U,str:gr,sub:xr,subtract:T,transformMat3:hr,transformMat4:fr,transformQuat:Mr},Symbol.toStringTag,{value:"Module"}));export{l as a,Y as b,m as c,w as d,R as e,V as f,L as g,F as h,k as i,S as j,B as k,C as l,G as m,T as n,v as o,z as p,K as q,Q as r,W as s,$ as t,nr as u,sr as v,A as w,E as x,U as y,er as z,or as A,b as B,Z as C,ur as D,tr as E,fr as F,hr as G,Mr as H,_r as I,qr as J,xr as K,Or as L,Ir as M,Sr as N,Tr as O};
