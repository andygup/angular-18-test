import{a as jt}from"./chunk-YQNUGDFH.js";import{c as ea,d as J,f as ia}from"./chunk-X2T2CBLR.js";import{a as Tt,c as na}from"./chunk-X2KSOPZ6.js";import{a as at,c as pt}from"./chunk-IFFYADB3.js";import{a as sa}from"./chunk-T6U45BGW.js";import{b as tt}from"./chunk-AIOXCJIZ.js";import{a as aa}from"./chunk-BVW6ULEA.js";import{a as $t,b as ta}from"./chunk-7C6Z24SS.js";import{a as oa}from"./chunk-XHOTVM3O.js";import{a as Kt}from"./chunk-2EA2KAER.js";import{j as Lt,m as Mt}from"./chunk-MJ4RSERD.js";import{c as Ct,h as ft}from"./chunk-SHSMFEO2.js";import{a as kt}from"./chunk-Z5Q76SB7.js";import{j as Ut}from"./chunk-E5R4OI7X.js";import{G as Xt,H as p,K as qt,M as At,O as Jt,a as u,c as L,e as Ht,i as wt,j as yt,l as H,m as X,o as Dt,q as $,r as Gt,s as Zt,t as Wt,u as D,v as ut}from"./chunk-ZGLJFDS6.js";import{J as Rt,v as Nt}from"./chunk-3SBMUUA6.js";var ht=1e-6,dt=u(),xt=u();function fa(e,t){let{data:a,size:s}=e,n=a.length/s;if(n<=0)return;let o=new Ft(e);Qt(dt,o.minProj,o.maxProj),Pt(dt,dt,.5),q(xt,o.maxProj,o.minProj);let r=Et(xt),c=new vt;c.quality=r,n<14&&(e=new jt(new Float64Array(o.buffer,112,42),3));let i=u(),h=u(),b=u(),l=u(),z=u(),C=u(),P=u();switch(Ma(o,e,P,i,h,b,l,z,C,c)){case 1:return void ma(dt,xt,t);case 2:return void Va(e,l,t)}pa(e,P,i,h,b,l,z,C,c),da(e,c.b0,c.b1,c.b2,ot,rt);let B=u();q(B,rt,ot),c.quality=Et(B),c.quality<r?la(c.b0,c.b1,c.b2,ot,rt,B,t):ma(dt,xt,t)}function Ma(e,t,a,s,n,o,r,c,i,h){return ja(e,s,n),Bt(s,n)<ht?1:(q(r,s,n),g(r,r),xa(t,s,r,o)<ht?2:(q(c,n,o),g(c,c),q(i,o,s),g(i,i),A(a,c,r),g(a,a),k(t,a,r,c,i,h),0))}var lt=u(),_t=u(),V=u(),N=u(),w=u(),G=u(),Z=u(),W=u();function pa(e,t,a,s,n,o,r,c,i){Sa(e,t,a,lt,_t),lt[0]!==void 0&&(q(V,lt,a),g(V,V),q(N,lt,s),g(N,N),q(w,lt,n),g(w,w),A(G,N,o),g(G,G),A(Z,w,r),g(Z,Z),A(W,V,c),g(W,W),k(e,G,o,N,V,i),k(e,Z,r,w,N,i),k(e,W,c,V,w,i)),_t[0]!==void 0&&(q(V,_t,a),g(V,V),q(N,_t,s),g(N,N),q(w,_t,n),g(w,w),A(G,N,o),g(G,G),A(Z,w,r),g(Z,Z),A(W,V,c),g(W,W),k(e,G,o,N,V,i),k(e,Z,r,w,N,i),k(e,W,c,V,w,i))}function ja(e,t,a){let s=Bt(e.maxVert[0],e.minVert[0]),n=0;for(let o=1;o<7;++o){let r=Bt(e.maxVert[o],e.minVert[o]);r>s&&(s=r,n=o)}x(t,e.minVert[n]),x(a,e.maxVert[n])}var y=[0,0,0];function xa(e,t,a,s){let{data:n,size:o}=e,r=Number.NEGATIVE_INFINITY,c=0;for(let i=0;i<n.length;i+=o){y[0]=n[i]-t[0],y[1]=n[i+1]-t[1],y[2]=n[i+2]-t[2];let h=a[0]*y[0]+a[1]*y[1]+a[2]*y[2],b=a[0]*a[0]+a[1]*a[1]+a[2]*a[2],l=y[0]*y[0]+y[1]*y[1]+y[2]*y[2]-h*h/b;l>r&&(r=l,c=i)}return x(s,n,c),r}var _=Kt();function Sa(e,t,a,s,n){za(e,t,_,n,s);let o=ga(a,t);_[1]-ht<=o&&(s[0]=void 0),_[0]+ht>=o&&(n[0]=void 0)}var ra=u(),ha=u(),ca=u(),st=u(),et=u(),St=u();function k(e,t,a,s,n,o){if(_a(t)<ht)return;A(ra,a,t),A(ha,s,t),A(ca,n,t),nt(e,t,_),et[1]=_[0],st[1]=_[1],St[1]=st[1]-et[1];let r=[a,s,n],c=[ra,ha,ca];for(let i=0;i<3;++i){nt(e,r[i],_),et[0]=_[0],st[0]=_[1],nt(e,c[i],_),et[2]=_[0],st[2]=_[1],St[0]=st[0]-et[0],St[2]=st[2]-et[2];let h=Et(St);h<o.quality&&(x(o.b0,r[i]),x(o.b1,t),x(o.b2,c[i]),o.quality=h)}}var Ia=u();function nt(e,t,a){let{data:s,size:n}=e;a[0]=Number.POSITIVE_INFINITY,a[1]=Number.NEGATIVE_INFINITY;for(let o=0;o<s.length;o+=n){let r=s[o]*t[0]+s[o+1]*t[1]+s[o+2]*t[2];a[0]=Math.min(a[0],r),a[1]=Math.max(a[1],r)}}function za(e,t,a,s,n){let{data:o,size:r}=e;x(s,o),x(n,s),a[0]=ga(Ia,t),a[1]=a[0];for(let c=r;c<o.length;c+=r){let i=o[c]*t[0]+o[c+1]*t[1]+o[c+2]*t[2];i<a[0]&&(a[0]=i,x(s,o,c)),i>a[1]&&(a[1]=i,x(n,o,c))}}function ma(e,t,a){a.center=e,a.halfSize=D(t,t,.5),a.quaternion=pt}var O=u(),it=u(),gt=u(),ot=u(),rt=u(),ua=u();function Va(e,t,a){x(O,t),Math.abs(t[0])>Math.abs(t[1])&&Math.abs(t[0])>Math.abs(t[2])?O[0]=0:Math.abs(t[1])>Math.abs(t[2])?O[1]=0:O[2]=0,_a(O)<ht&&(O[0]=O[1]=O[2]=1),A(it,t,O),g(it,it),A(gt,t,it),g(gt,gt),da(e,t,it,gt,ot,rt),q(ua,rt,ot),la(t,it,gt,ot,rt,ua,a)}function da(e,t,a,s,n,o){nt(e,t,_),n[0]=_[0],o[0]=_[1],nt(e,a,_),n[1]=_[0],o[1]=_[1],nt(e,s,_),n[2]=_[0],o[2]=_[1]}var U=u(),bt=u(),It=u(),E=ta(1,0,0,0,1,0,0,0,1),Na=at();function la(e,t,a,s,n,o,r){E[0]=e[0],E[1]=e[1],E[2]=e[2],E[3]=t[0],E[4]=t[1],E[5]=t[2],E[6]=a[0],E[7]=a[1],E[8]=a[2],r.quaternion=wa(Na,E),Qt(U,s,n),Pt(U,U,.5),Pt(bt,e,U[0]),Pt(It,t,U[1]),Qt(bt,bt,It),Pt(It,a,U[2]),r.center=X(bt,bt,It),r.halfSize=D(U,o,.5)}var j=7,Ft=class{constructor(t){this.minVert=new Array(j),this.maxVert=new Array(j);let a=64*j;this.buffer=new ArrayBuffer(a);let s=0;this.minProj=new Float64Array(this.buffer,s,j),s+=8*j,this.maxProj=new Float64Array(this.buffer,s,j),s+=8*j;for(let i=0;i<j;++i)this.minVert[i]=new Float64Array(this.buffer,s,3),s+=24;for(let i=0;i<j;++i)this.maxVert[i]=new Float64Array(this.buffer,s,3),s+=24;for(let i=0;i<j;++i)this.minProj[i]=Number.POSITIVE_INFINITY,this.maxProj[i]=Number.NEGATIVE_INFINITY;let n=new Array(j),o=new Array(j),{data:r,size:c}=t;for(let i=0;i<r.length;i+=c){let h=r[i];h<this.minProj[0]&&(this.minProj[0]=h,n[0]=i),h>this.maxProj[0]&&(this.maxProj[0]=h,o[0]=i),h=r[i+1],h<this.minProj[1]&&(this.minProj[1]=h,n[1]=i),h>this.maxProj[1]&&(this.maxProj[1]=h,o[1]=i),h=r[i+2],h<this.minProj[2]&&(this.minProj[2]=h,n[2]=i),h>this.maxProj[2]&&(this.maxProj[2]=h,o[2]=i),h=r[i]+r[i+1]+r[i+2],h<this.minProj[3]&&(this.minProj[3]=h,n[3]=i),h>this.maxProj[3]&&(this.maxProj[3]=h,o[3]=i),h=r[i]+r[i+1]-r[i+2],h<this.minProj[4]&&(this.minProj[4]=h,n[4]=i),h>this.maxProj[4]&&(this.maxProj[4]=h,o[4]=i),h=r[i]-r[i+1]+r[i+2],h<this.minProj[5]&&(this.minProj[5]=h,n[5]=i),h>this.maxProj[5]&&(this.maxProj[5]=h,o[5]=i),h=r[i]-r[i+1]-r[i+2],h<this.minProj[6]&&(this.minProj[6]=h,n[6]=i),h>this.maxProj[6]&&(this.maxProj[6]=h,o[6]=i)}for(let i=0;i<j;++i){let h=n[i];x(this.minVert[i],r,h),h=o[i],x(this.maxVert[i],r,h)}}},vt=class{constructor(){this.b0=L(1,0,0),this.b1=L(0,1,0),this.b2=L(0,0,1),this.quality=0}};function Et(e){return e[0]*e[1]+e[0]*e[2]+e[1]*e[2]}function Qt(e,t,a){e[0]=t[0]+a[0],e[1]=t[1]+a[1],e[2]=t[2]+a[2]}function q(e,t,a){e[0]=t[0]-a[0],e[1]=t[1]-a[1],e[2]=t[2]-a[2]}function Pt(e,t,a){e[0]=t[0]*a,e[1]=t[1]*a,e[2]=t[2]*a}function x(e,t,a=0){e[0]=t[a],e[1]=t[a+1],e[2]=t[a+2]}function A(e,t,a){let s=t[0],n=t[1],o=t[2],r=a[0],c=a[1],i=a[2];e[0]=n*i-o*c,e[1]=o*r-s*i,e[2]=s*c-n*r}function g(e,t){let a=t[0]*t[0]+t[1]*t[1]+t[2]*t[2];if(a>0){let s=1/Math.sqrt(a);e[0]=t[0]*s,e[1]=t[1]*s,e[2]=t[2]*s}}function _a(e){return e[0]*e[0]+e[1]*e[1]+e[2]*e[2]}function Bt(e,t){let a=t[0]-e[0],s=t[1]-e[1],n=t[2]-e[2];return a*a+s*s+n*n}function ga(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function wa(e,t){let a=t[0]+t[4]+t[8];if(a>0){let s=Math.sqrt(a+1);e[3]=.5*s,s=.5/s,e[0]=(t[5]-t[7])*s,e[1]=(t[6]-t[2])*s,e[2]=(t[1]-t[3])*s}else{let s=0;t[4]>t[0]&&(s=1),t[8]>t[3*s+s]&&(s=2);let n=(s+1)%3,o=(s+2)%3,r=Math.sqrt(t[3*s+s]-t[3*n+n]-t[3*o+o]+1);e[s]=.5*r,r=.5/r,e[3]=(t[3*n+o]-t[3*o+n])*r,e[n]=(t[3*n+s]+t[3*s+n])*r,e[o]=(t[3*o+s]+t[3*s+o])*r}return e}var Ot=class e{constructor(t=Ht,a=Ba,s=pt){this._data=[t[0],t[1],t[2],a[0],a[1],a[2],s[0],s[1],s[2],s[3]]}clone(){let t=new e;return t._data=this._data.slice(),t}invalidate(){this._data[3]=-1}get isValid(){return this._data[3]>=0}static fromData(t){let a=new e;return a._data=t.slice(),a}static fromJSON(t){return new e(t.center,t.halfSize,t.quaternion)}copy(t){this._data=t.data.slice()}get center(){return H(Tt.get(),this._data[0],this._data[1],this._data[2])}get centerX(){return this._data[0]}get centerY(){return this._data[1]}get centerZ(){return this._data[2]}getCenter(t){return t[0]=this._data[0],t[1]=this._data[1],t[2]=this._data[2],t}set center(t){this._data[0]=t[0],this._data[1]=t[1],this._data[2]=t[2]}setCenter(t,a,s){this._data[0]=t,this._data[1]=a,this._data[2]=s}get halfSize(){return H(Tt.get(),this._data[3],this._data[4],this._data[5])}get halfSizeX(){return this._data[3]}get halfSizeY(){return this._data[4]}get halfSizeZ(){return this._data[5]}getHalfSize(t){return t[0]=this._data[3],t[1]=this._data[4],t[2]=this._data[5],t}set halfSize(t){this._data[3]=t[0],this._data[4]=t[1],this._data[5]=t[2]}get quaternion(){return ia(na.get(),this._data[6],this._data[7],this._data[8],this._data[9])}getQuaternion(t){return t[0]=this._data[6],t[1]=this._data[7],t[2]=this._data[8],t[3]=this._data[9],t}set quaternion(t){this._data[6]=t[0],this._data[7]=t[1],this._data[8]=t[2],this._data[9]=t[3]}get data(){return this._data}getCorners(t){let a=d,s=this._data;a[0]=s[6],a[1]=s[7],a[2]=s[8],a[3]=s[9];for(let n=0;n<8;++n){let o=t[n];o[0]=(1&n?-1:1)*s[3],o[1]=(2&n?-1:1)*s[4],o[2]=(4&n?-1:1)*s[5],p(o,o,a),o[0]+=s[0],o[1]+=s[1],o[2]+=s[2]}}doesIntersectFrustumConservativeApproximation(t){return this.intersectPlane(t[0])<=0&&this.intersectPlane(t[1])<=0&&this.intersectPlane(t[2])<=0&&this.intersectPlane(t[3])<=0&&this.intersectPlane(t[4])<=0&&this.intersectPlane(t[5])<=0}get radius(){let t=this._data[3],a=this._data[4],s=this._data[5];return Math.sqrt(t*t+a*a+s*s)}intersectSphere(t){m[0]=this._data[0]-t[0],m[1]=this._data[1]-t[1],m[2]=this._data[2]-t[2];let a=this.getQuaternion(R);return J(d,a),p(m,m,d),$(m,m),Y[0]=Math.min(m[0],this._data[3]),Y[1]=Math.min(m[1],this._data[4]),Y[2]=Math.min(m[2],this._data[5]),At(Y,m)<t[3]*t[3]}intersectSphereWithMBS(t,a=this.radius){let s=this._data;m[0]=s[0]-t[0],m[1]=s[1]-t[1],m[2]=s[2]-t[2];let n=t[3],o=n+a;return!(Jt(m)>o*o)&&(d[0]=-s[6],d[1]=-s[7],d[2]=-s[8],d[3]=s[9],p(m,m,d),$(m,m),Y[0]=Math.min(m[0],s[3]),Y[1]=Math.min(m[1],s[4]),Y[2]=Math.min(m[2],s[5]),At(Y,m)<n*n)}intersectPlane(t){let a=t[0]*this._data[0]+t[1]*this._data[1]+t[2]*this._data[2]+t[3],s=this.projectedRadius(t);return a>s?1:a<-s?-1:0}intersectRay(t,a,s=0){let n=this._data,o=d;o[0]=-n[6],o[1]=-n[7],o[2]=-n[8],o[3]=n[9],m[0]=t[0]-n[0],m[1]=t[1]-n[1],m[2]=t[2]-n[2];let r=p(m,m,d),c=p(Y,a,d),i=-1/0,h=1/0,b=this.getHalfSize(mt);for(let l=0;l<3;l++){let z=r[l],C=c[l],P=b[l]+s;if(Math.abs(C)>1e-6){let B=(P-z)/C,M=(-P-z)/C;i=Math.max(i,Math.min(B,M)),h=Math.min(h,Math.max(B,M))}else if(z>P||z<-P)return!1}return i<=h}projectedArea(t,a,s,n){let o=this.getQuaternion(R);J(d,o),m[0]=t[0]-this._data[0],m[1]=t[1]-this._data[1],m[2]=t[2]-this._data[2],p(m,m,d);let r=this.getHalfSize(mt),c=m[0]<-r[0]?-1:m[0]>r[0]?1:0,i=m[1]<-r[1]?-1:m[1]>r[1]?1:0,h=m[2]<-r[2]?-1:m[2]>r[2]?1:0,b=Math.abs(c)+Math.abs(i)+Math.abs(h);if(b===0)return 1/0;let l=b===1?4:6,z=6*(c+3*i+9*h+13);Mt(ct,o),Lt(ct,ct,r);let C=this.getCenter(v);for(let M=0;M<l;M++){let Vt=Aa[z+M];H(m,((1&Vt)<<1)-1,(2&Vt)-1,((4&Vt)>>1)-1),Xt(m,m,ct),X(K,C,m),K[3]=1,Ut(K,K,a);let Yt=1/Math.max(1e-6,K[3]);T[2*M]=K[0]*Yt,T[2*M+1]=K[1]*Yt}let P=2*l-2,B=T[0]*(T[3]-T[P+1])+T[P]*(T[1]-T[P-1]);for(let M=2;M<P;M+=2)B+=T[M]*(T[M+3]-T[M-1]);return Math.abs(B)*s*n*.125}projectedRadius(t){let a=this.getQuaternion(R);return J(d,a),p(m,t,d),Math.abs(m[0]*this._data[3])+Math.abs(m[1]*this._data[4])+Math.abs(m[2]*this._data[5])}minimumDistancePlane(t){return t[0]*this._data[0]+t[1]*this._data[1]+t[2]*this._data[2]+t[3]-this.projectedRadius(t)}maximumDistancePlane(t){return t[0]*this._data[0]+t[1]*this._data[1]+t[2]*this._data[2]+t[3]+this.projectedRadius(t)}toAaBoundingBox(t){let a=this.getQuaternion(R),s=Mt(ct,a),n=this._data[3]*Math.abs(s[0])+this._data[4]*Math.abs(s[3])+this._data[5]*Math.abs(s[6]),o=this._data[3]*Math.abs(s[1])+this._data[4]*Math.abs(s[4])+this._data[5]*Math.abs(s[7]),r=this._data[3]*Math.abs(s[2])+this._data[4]*Math.abs(s[5])+this._data[5]*Math.abs(s[8]);t[0]=this._data[0]-n,t[1]=this._data[1]-o,t[2]=this._data[2]-r,t[3]=this._data[0]+n,t[4]=this._data[1]+o,t[5]=this._data[2]+r}transform(t,a,s,n=0,o=tt(s),r=tt(a),c=Ct(a,r)){if(s===o)a.isGeographic?va(this,t,a,n,r):Fa(this,t,a,n,r,c);else if(a.isWGS84&&(s.isWebMercator||Nt(s)))Ca(a,this,s,t,n);else if(a.isWebMercator&&Nt(s))Ta(a,this,s,t,n);else{let i=this.getCenter(v);i[2]+=n,ft(i,a,0,i,s,0,1),t.center=i,this!==t&&(t.quaternion=this.getQuaternion(R),t.halfSize=this.getHalfSize(mt))}}},d=at(),R=at(),ya=at(),m=u(),Y=u(),K=kt();function qa(e,t=new Ot){return fa(e,t),t}var T=[.1,.2,.3,.4,.5,.6,.7,.8,.9,1,1.1,1.2],Aa=(()=>{let e=new Int8Array(162),t=0,a=s=>{for(let n=0;n<s.length;n++)e[t+n]=s[n];t+=6};return a([6,2,3,1,5,4]),a([0,2,3,1,5,4]),a([0,2,3,7,5,4]),a([0,1,3,2,6,4]),a([0,1,3,2,0,0]),a([0,1,5,7,3,2]),a([0,1,3,7,6,4]),a([0,1,3,7,6,2]),a([0,1,5,7,6,2]),a([0,1,5,4,6,2]),a([0,1,5,4,0,0]),a([0,1,3,7,5,4]),a([0,2,6,4,0,0]),a([0,0,0,0,0,0]),a([1,3,7,5,0,0]),a([2,3,7,6,4,0]),a([2,3,7,6,0,0]),a([2,3,1,5,7,6]),a([0,1,5,7,6,2]),a([0,1,5,7,6,4]),a([0,1,3,7,6,4]),a([4,5,7,6,2,0]),a([4,5,7,6,0,0]),a([4,5,1,3,7,6]),a([0,2,3,7,5,4]),a([6,2,3,7,5,4]),a([6,2,3,1,5,4]),e})();function ds(e,t,a,s,n){let o=e.getQuaternion(R);n.quaternion=o,J(d,o);let r=e.getCenter(v),c=e.getHalfSize(mt);if(s===oa.Global){p(f,r,d),$(F,f),Zt(I,F,c),qt(I,F,I);let i=yt(I);X(I,F,c);let h=yt(I);if(i<a)n.center=r,H(f,a,a,a),n.halfSize=X(f,c,f);else{let b=h>0?1+t/h:1,l=i>0?1+a/i:1,z=(l+b)/2,C=(l-b)/2;D(I,F,C),n.halfSize=ut(I,I,c,z),D(I,F,z),ut(I,I,c,C),Gt(f,f),Dt(f,I,f);let P=e.getQuaternion(ya);n.center=p(f,f,P)}}else{n.center=ut(f,r,wt,(a+t)/2);let i=p(f,wt,d);$(i,i),n.halfSize=ut(F,c,i,(a-t)/2)}return n}function Ca(e,t,a,s,n){t.getCenter(v),v[2]+=n;let o=tt(a);ft(v,e,0,v,o,0,1),Pa(o,t,v,a,s)}function Ta(e,t,a,s,n){t.getCenter(v),v[2]+=n,Pa(e,t,v,a,s)}function Pa(e,t,a,s,n){let o=t.getQuaternion(R),r=Mt(ct,o),c=t.getHalfSize(mt);for(let i=0;i<8;++i){for(let h=0;h<3;++h)Q[h]=c[h]*(i&1<<h?-1:1);for(let h=0;h<3;++h){let b=a[h];for(let l=0;l<3;++l)b+=Q[l]*r[3*l+h];zt[3*i+h]=b}}ft(zt,e,0,zt,s,0,8),qa(Ea,n)}function Fa(e,t,a,s,n=tt(a),o=Ct(a,n)){e.getCorners(ba),e.getCenter(Q),Q[2]+=s,sa(a,Q,S,n),t.setCenter(S[12],S[13],S[14]);let r=2*Math.sqrt(1+S[0]+S[5]+S[10]);d[0]=(S[6]-S[9])/r,d[1]=(S[8]-S[2])/r,d[2]=(S[1]-S[4])/r,d[3]=.25*r;let c=e.getQuaternion(R);t.quaternion=ea(d,d,c),J(d,d),H(F,0,0,0);let i=t.getCenter(Qa);for(let h of ba)h[2]+=s,o(h,0,h,0),qt(f,h,i),p(f,f,d),$(f,f),Wt(F,F,f);t.halfSize=F}function va(e,t,a,s,n=tt(a)){let o=Rt(a),r=1+Math.max(0,s)/(o.radius+e.centerZ);e.getCenter(Q),Q[2]+=s,ft(Q,a,0,Q,n,0,1),t.center=Q;let c=e.getQuaternion(R);t.quaternion=c,J(d,c),H(f,0,0,1),p(f,f,d);let i=e.getHalfSize(mt);H(f,i[0]*Math.abs(f[0]),i[1]*Math.abs(f[1]),i[2]*Math.abs(f[2])),D(f,f,o.inverseFlattening),X(f,i,f),t.halfSize=D(f,f,r)}var zt=new Array(24),Ea=new jt(zt,3),Q=u(),v=u(),Qa=u(),mt=u(),ct=$t(),S=aa(),ba=[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],f=u(),F=u(),I=u(),Ba=L(-1,-1,-1);export{Ot as a,ds as b};
