import{c as F,e as G}from"./chunk-M7ZGDKKR.js";import{a as k}from"./chunk-45N2JYAW.js";import{a as u,b as D}from"./chunk-X2KSOPZ6.js";import{a as C,b as v}from"./chunk-Z5Q76SB7.js";import{j as Y}from"./chunk-5QLB7ZJ7.js";import{a as m}from"./chunk-BCREO4Q5.js";import{a as M,l as j}from"./chunk-E5R4OI7X.js";import{h as X,m as x}from"./chunk-BNUHB4AP.js";import{B as Z,D as q,E as B,F as L,a as g,j as f,l as P,m as d,n as l,u as p,v as z,w as R,x as N,y as V}from"./chunk-ZGLJFDS6.js";import{a as O}from"./chunk-RSDQHAJX.js";var W=w();function w(){return C()}var $=j,tt=j;function H(t,s){return M(s,t)}function nt(t,s){return v(t[0],t[1],t[2],s)}function st(t){return t}function ot(t){t[0]=t[1]=t[2]=t[3]=0}function et(t,s){return t[0]=t[1]=t[2]=0,t[3]=s,t}function b(t){return t[3]}function rt(t){return t}function it(t,s,n,o){return v(t,s,n,o)}function at(t,s,n){return t!==n&&(n[0]=t[0],n[1]=t[1],n[2]=t[2]),n[3]=t[3]+s,n}function ct(t,s,n){return t!==n&&H(t,n),n}function y(t,s,n){if(s==null||!I(t,s,S))return!1;let{t0:o,t1:e}=S;if((o<0||e<o&&e>0)&&(o=e),o<0)return!1;if(n){let{origin:r,direction:i}=s;n[0]=r[0]+i[0]*o,n[1]=r[1]+i[1]*o,n[2]=r[2]+i[2]*o}return!0}function ut(t,s,n){let o=F(s,n);if(!I(t,o,S))return[];let{origin:e,direction:r}=o,{t0:i,t1:a}=S,c=h=>{let A=g();return z(A,e,r,h),E(t,A,A)};return Math.abs(i-a)<O()?[c(i)]:[c(i),c(a)]}var S={t0:0,t1:0};function I(t,s,n){let{origin:o,direction:e}=s,r=ft;r[0]=o[0]-t[0],r[1]=o[1]-t[1],r[2]=o[2]-t[2];let i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2];if(i===0)return!1;let a=2*(e[0]*r[0]+e[1]*r[1]+e[2]*r[2]),c=a*a-4*i*(r[0]*r[0]+r[1]*r[1]+r[2]*r[2]-t[3]*t[3]);if(c<0)return!1;let h=Math.sqrt(c);return n.t0=(-a-h)/(2*i),n.t1=(-a+h)/(2*i),!0}var ft=g();function lt(t,s){return y(t,s,null)}function mt(t,s,n){if(y(t,s,n))return n;let o=J(t,s,u.get());return d(n,s.origin,p(u.get(),s.direction,R(s.origin,o)/f(s.direction))),n}function J(t,s,n){let o=u.get(),e=D.get();q(o,s.origin,s.direction);let r=b(t);q(n,o,s.origin),p(n,n,1/f(n)*r);let i=K(t,s.origin),a=k(s.origin,n);return Y(e,a+i,o),L(n,n,e),n}function gt(t,s,n){return y(t,s,n)?n:(G(s,t,n),E(t,n,n))}function E(t,s,n){let o=l(u.get(),s,t),e=p(u.get(),o,t[3]/f(o));return d(n,e,t)}function pt(t,s){let n=l(u.get(),s,t),o=V(n),e=t[3]*t[3];return Math.sqrt(Math.abs(o-e))}function K(t,s){let n=l(u.get(),s,t),o=f(n),e=b(t),r=e+Math.abs(e-o);return X(e/r)}var T=g();function Q(t,s,n,o){let e=l(T,s,t);switch(n){case m.X:{let r=x(e,T)[2];return P(o,-Math.sin(r),Math.cos(r),0)}case m.Y:{let r=x(e,T),i=r[1],a=r[2],c=Math.sin(i);return P(o,-c*Math.cos(a),-c*Math.sin(a),Math.cos(i))}case m.Z:return Z(o,e);default:return}}function U(t,s){let n=l(_,s,t);return f(n)-t[3]}function ht(t,s,n,o){let e=U(t,s),r=Q(t,s,m.Z,_),i=p(_,r,n-e);return d(o,s,i)}function dt(t,s){let n=N(t,s),o=b(t);return n<=o*o}function Mt(t,s,n=C()){let o=R(t,s),e=t[3],r=s[3];return o+r<e?(M(n,t),n):o+e<r?(M(n,s),n):(B(n,t,s,(o+r-e)/(2*o)),n[3]=(o+e+r)/2,n)}var _=g(),St=w(),Et=Object.freeze(Object.defineProperty({__proto__:null,NullSphere:W,altitudeAt:U,angleToSilhouette:K,axisAt:Q,clear:ot,closestPoint:gt,closestPointOnSilhouette:J,containsPoint:dt,copy:H,create:w,distanceToSilhouette:pt,elevate:at,equals:tt,exactEquals:$,fromCenterAndRadius:nt,fromRadius:et,fromValues:it,getCenter:rt,getRadius:b,intersectLine:ut,intersectRay:y,intersectRayClosestSilhouette:mt,intersectsRay:lt,projectPoint:E,setAltitudeAt:ht,setExtent:ct,tmpSphere:St,union:Mt,wrap:st},Symbol.toStringTag,{value:"Module"}));export{w as a,H as b,b as c,lt as d,dt as e};
