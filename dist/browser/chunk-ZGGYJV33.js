import{t as M}from"./chunk-UHTPPTOJ.js";function c(a=g){return[a[0],a[1],a[2],a[3],a[4],a[5]]}function F(a,i,e,t,o,m,u=c()){return u[0]=a,u[1]=i,u[2]=e,u[3]=t,u[4]=o,u[5]=m,u}function T(a,i){let e=isFinite(a[2])||isFinite(a[5]);return new M(e?{xmin:a[0],xmax:a[3],ymin:a[1],ymax:a[4],zmin:a[2],zmax:a[5],spatialReference:i}:{xmin:a[0],xmax:a[3],ymin:a[1],ymax:a[4],spatialReference:i})}function V(a,i){a[0]=Math.min(a[0],i[0]),a[1]=Math.min(a[1],i[1]),a[2]=Math.min(a[2],i[2]),a[3]=Math.max(a[3],i[3]),a[4]=Math.max(a[4],i[4]),a[5]=Math.max(a[5],i[5])}function z(a,i){a[0]=Math.min(a[0],i[0]),a[1]=Math.min(a[1],i[1]),a[2]=Math.min(a[2],i[2]),a[3]=Math.max(a[3],i[0]),a[4]=Math.max(a[4],i[1]),a[5]=Math.max(a[5],i[2])}function A(a,i,e=0,t=i.length/3){let o=a[0],m=a[1],u=a[2],f=a[3],r=a[4],h=a[5];for(let s=0;s<t;s++)o=Math.min(o,i[e+3*s]),m=Math.min(m,i[e+3*s+1]),u=Math.min(u,i[e+3*s+2]),f=Math.max(f,i[e+3*s]),r=Math.max(r,i[e+3*s+1]),h=Math.max(h,i[e+3*s+2]);a[0]=o,a[1]=m,a[2]=u,a[3]=f,a[4]=r,a[5]=h}function n(a){return a[0]>=a[3]?0:a[3]-a[0]}function I(a){return a[1]>=a[4]?0:a[4]-a[1]}function p(a){return a[2]>=a[5]?0:a[5]-a[2]}function R(a,i=[0,0,0]){return i[0]=n(a),i[1]=I(a),i[2]=p(a),i}function W(a,i,e=a){return e[0]=i[0],e[1]=i[1],e[2]=i[2],e!==a&&(e[3]=a[3],e[4]=a[4],e[5]=a[5]),e}function P(a,i,e=a){return e[3]=i[0],e[4]=i[1],e[5]=i[2],e!==a&&(e[0]=a[0],e[1]=a[1],e[2]=a[2]),a}function N(a,i){return a[0]=i[0],a[1]=i[1],a[2]=i[2],a[3]=i[3],a[4]=i[4],a[5]=i[5],a}function b(a){return a?N(a,l):c(l)}function Y(a,i){return a[0]=i[0],a[1]=i[1],a[2]=Number.NEGATIVE_INFINITY,a[3]=i[2],a[4]=i[3],a[5]=Number.POSITIVE_INFINITY,a}function _(a,i,e,t,o){return a[0]=i,a[1]=e,a[2]=Number.NEGATIVE_INFINITY,a[3]=t,a[4]=o,a[5]=Number.POSITIVE_INFINITY,a}function x(a){return a.length===6}function w(a,i,e){if(a==null||i==null)return a===i;if(!x(a)||!x(i))return!1;if(e){for(let t=0;t<a.length;t++)if(!e(a[t],i[t]))return!1}else for(let t=0;t<a.length;t++)if(a[t]!==i[t])return!1;return!0}var B=[-1/0,-1/0,-1/0,1/0,1/0,1/0],l=[1/0,1/0,1/0,-1/0,-1/0,-1/0],g=[0,0,0,0,0,0],O=c();export{c as a,F as b,T as c,V as d,z as e,A as f,R as g,W as h,P as i,N as j,b as k,Y as l,_ as m,x as n,w as o,l as p,g as q};