var f={convertToGEGeometry:u,exportPoint:l,exportPolygon:p,exportPolyline:v,exportMultipoint:M,exportExtent:d};function u(i,t){return t==null?null:i.convertJSONToGeometry(t)}var a=class{constructor(t,s,n){this.x=t,this.y=s,this.spatialReference=n,this.z=void 0,this.m=void 0}};function l(i,t,s){let n=new a(i.getPointX(t),i.getPointY(t),s),o=i.hasZ(t),e=i.hasM(t);return o&&(n.z=i.getPointZ(t)),e&&(n.m=i.getPointM(t)),n}var r=class{constructor(t,s,n,o){this.rings=t,this.spatialReference=s,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),o&&(this.hasM=o)}};function p(i,t,s){return new r(i.exportPaths(t),s,i.hasZ(t),i.hasM(t))}var c=class{constructor(t,s,n,o){this.paths=t,this.spatialReference=s,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),o&&(this.hasM=o)}};function v(i,t,s){return new c(i.exportPaths(t),s,i.hasZ(t),i.hasM(t))}var m=class{constructor(t,s,n,o){this.points=t,this.spatialReference=s,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),o&&(this.hasM=o)}};function M(i,t,s){return new m(i.exportPoints(t),s,i.hasZ(t),i.hasM(t))}var x=class{constructor(t,s,n,o,e){this.xmin=t,this.ymin=s,this.xmax=n,this.ymax=o,this.spatialReference=e,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}};function d(i,t,s){let n=i.hasZ(t),o=i.hasM(t),e=new x(i.getXMin(t),i.getYMin(t),i.getXMax(t),i.getYMax(t),s);if(n){let h=i.getZExtent(t);e.zmin=h.vmin,e.zmax=h.vmax}if(o){let h=i.getMExtent(t);e.mmin=h.vmin,e.mmax=h.vmax}return e}export{f as a};