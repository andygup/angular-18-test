import{h as b}from"./chunk-BNUHB4AP.js";import{B as f,C as m,I,a as t,j as p,n as g}from"./chunk-ZGLJFDS6.js";function z(n,r){let a=m(n,r)/(p(n)*p(r));return-b(a)}var B=t(),D=t();var K=t(),Q=t(),W=t(),Y=t(),Z=t();function _(n=X){return[n[0],n[1],n[2],n[3]]}function C(n,r,a,o=_()){let c=a[0]-r[0],u=a[1]-r[1],e=a[2]-r[2],s=n[0]-r[0],j=n[1]-r[1],y=n[2]-r[2],P=u*y-e*j,A=e*s-c*y,F=c*j-u*s,E=P*P+A*A+F*F,x=Math.abs(E-1)>1e-5&&E>1e-12?1/Math.sqrt(E):1;return o[0]=P*x,o[1]=A*x,o[2]=F*x,o[3]=-(o[0]*n[0]+o[1]*n[1]+o[2]*n[2]),o}function O(n,r,a,o=0,c=Math.floor(a*(1/3)),u=Math.floor(a*(2/3))){if(a<3)return!1;r(h,o);let e=c,s=!1;for(;e<a-1&&!s;)r(i,e),e++,s=!I(h,i);if(!s)return!1;for(e=Math.max(e,u),s=!1;e<a&&!s;)r(M,e),e++,g(N,h,i),f(N,N),g(d,i,M),f(d,d),s=!I(h,M)&&!I(i,M)&&Math.abs(m(N,d))<S;return s?(C(h,i,M,n),!0):(o!==0||c!==1||u!==2)&&O(n,r,a,0,1,2)}var S=.99619469809,h=t(),i=t(),M=t(),N=t(),d=t();var X=[0,0,1,0],l;(function(n){n[n.NONE=0]="NONE",n[n.CLAMP=1]="CLAMP",n[n.INFINITE_MIN=4]="INFINITE_MIN",n[n.INFINITE_MAX=8]="INFINITE_MAX"})(l||(l={}));var gn=l.INFINITE_MIN|l.INFINITE_MAX,In=l.INFINITE_MAX;export{z as a,_ as b,O as c};
