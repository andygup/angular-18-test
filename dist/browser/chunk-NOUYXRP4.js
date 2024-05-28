import{a as l,b as c}from"./chunk-37H4LYIE.js";var g=class a{constructor(t,e,i,h){this.computedX=0,this.computedY=0,this.center=c(t,e),this.centerT=l(),this.halfWidth=i/2,this.halfHeight=h/2,this.width=i,this.height=h}get x(){return this.center[0]}get y(){return this.center[1]}get blX(){return this.center[0]+this.halfWidth}get blY(){return this.center[1]+this.halfHeight}get trX(){return this.center[0]-this.halfWidth}get trY(){return this.center[1]-this.halfHeight}get xmin(){return this.x-this.halfWidth}get xmax(){return this.x+this.halfWidth}get ymin(){return this.y-this.halfHeight}get ymax(){return this.y+this.halfHeight}set x(t){this.center[0]=t}set y(t){this.center[1]=t}clone(){return new a(this.x,this.y,this.width,this.height)}serialize(t){return t.writeF32(this.center[0]),t.writeF32(this.center[1]),t.push(this.width),t.push(this.height),t}findCollisionDelta(t,e=4){let i=Math.abs(t.centerT[0]-this.centerT[0]),h=Math.abs(t.centerT[1]-this.centerT[1]),s=(t.halfWidth+this.halfWidth+e)/i,r=(t.halfHeight+this.halfHeight+e)/h,n=Math.min(s,r);return Math.log2(n)}extend(t){let e=Math.min(this.xmin,t.xmin),i=Math.min(this.ymin,t.ymin),h=Math.max(this.xmax,t.xmax)-e,s=Math.max(this.ymax,t.ymax)-i,r=e+h/2,n=i+s/2;this.width=h,this.height=s,this.halfWidth=h/2,this.halfHeight=s/2,this.x=r,this.y=n}static deserialize(t){let e=t.readF32(),i=t.readF32(),h=t.readInt32(),s=t.readInt32();return new a(e,i,h,s)}};export{g as a};