import{b as h}from"./chunk-P5F6DDDU.js";import{f as w}from"./chunk-L2DEVDHE.js";import{j as p}from"./chunk-UHTPPTOJ.js";import{a as f,b as l,g as i}from"./chunk-3T7TAUC2.js";function a(e){return Array.isArray(e)?e[0]?.spatialReference:e?.spatialReference}function m(e){return e&&(Array.isArray(e)?e.map(m):e.toJSON?e.toJSON():e)}function s(e){return Array.isArray(e)?e.map(t=>w(t)):w(e)}function A(e,t){let r;return Array.isArray(e)?r=e:(r=[],r.push(e),t!=null&&r.push(t)),r}var d;function S(){return i(this,null,function*(){return d||(d=h("geometryEngineWorker",{strategy:"distributed"})),d})}function n(e,t){return i(this,null,function*(){return(yield S()).invoke("executeGEOperation",{operation:e,parameters:m(t)})})}function x(e,t){return i(this,null,function*(){let r=yield S();return Promise.all(r.broadcast("executeGEOperation",{operation:e,parameters:m(t)}))})}function L(e){return n("extendedSpatialReferenceInfo",[e])}function T(e,t){return i(this,null,function*(){return s(yield n("clip",[a(e),e,t]))})}function V(e,t){return i(this,null,function*(){return s(yield n("cut",[a(e),e,t]))})}function v(e,t){return n("contains",[a(e),e,t])}function E(e,t){return n("crosses",[a(e),e,t])}function b(e,t,r){return n("distance",[a(e),e,t,r])}function z(e,t){return n("equals",[a(e),e,t])}function H(e,t){return n("intersects",[a(e),e,t])}function I(e,t){return n("touches",[a(e),e,t])}function P(e,t){return n("within",[a(e),e,t])}function j(e,t){return n("disjoint",[a(e),e,t])}function k(e,t){return n("overlaps",[a(e),e,t])}function q(e,t,r){return n("relate",[a(e),e,t,r])}function B(e){return n("isSimple",[a(e),e])}function C(e){return i(this,null,function*(){return s(yield n("simplify",[a(e),e]))})}function G(e,t=!1){return i(this,null,function*(){return s(yield n("convexHull",[a(e),e,t]))})}function W(e,t){return i(this,null,function*(){return s(yield n("difference",[a(e),e,t]))})}function F(e,t){return i(this,null,function*(){return s(yield n("symmetricDifference",[a(e),e,t]))})}function K(e,t){return i(this,null,function*(){return s(yield n("intersect",[a(e),e,t]))})}function M(e,t=null){return i(this,null,function*(){let r=A(e,t);return s(yield n("union",[a(r),r]))})}function Q(e,t,r,c,o,y){return i(this,null,function*(){return s(yield n("offset",[a(e),e,t,r,c,o,y]))})}function U(e,t,r,c=!1){return i(this,null,function*(){let o=[a(e),e,t,r,c];return s(yield n("buffer",o))})}function X(e,t,r,c,o,y){return i(this,null,function*(){let R=[a(e),e,t,r,c,o,y];return s(yield n("geodesicBuffer",R))})}function Y(e,t,r=!0){return i(this,null,function*(){let c=yield n("nearestCoordinate",[a(e),e,t,r]);return l(f({},c),{coordinate:p.fromJSON(c.coordinate)})})}function _(e,t){return i(this,null,function*(){let r=yield n("nearestVertex",[a(e),e,t]);return l(f({},r),{coordinate:p.fromJSON(r.coordinate)})})}function $(e,t,r,c){return i(this,null,function*(){return(yield n("nearestVertices",[a(e),e,t,r,c])).map(o=>l(f({},o),{coordinate:p.fromJSON(o.coordinate)}))})}function g(e){return"xmin"in e?e.center:"x"in e?e:e.extent?.center}function Z(e,t,r){return i(this,null,function*(){if(e==null)throw new u;let c=e.spatialReference;if((r=r??g(e))==null)throw new u;let o=e.constructor.fromJSON(yield n("rotate",[c,e,t,r]));return o.spatialReference=c,o})}function ee(e,t){return i(this,null,function*(){if(e==null)throw new u;let r=e.spatialReference;if((t=t??g(e))==null)throw new u;let c=e.constructor.fromJSON(yield n("flipHorizontal",[r,e,t]));return c.spatialReference=r,c})}function te(e,t){return i(this,null,function*(){if(e==null)throw new u;let r=e.spatialReference;if((t=t??g(e))==null)throw new u;let c=e.constructor.fromJSON(yield n("flipVertical",[r,e,t]));return c.spatialReference=r,c})}function re(e,t,r,c){return i(this,null,function*(){return s(yield n("generalize",[a(e),e,t,r,c]))})}function ne(e,t,r){return i(this,null,function*(){return s(yield n("densify",[a(e),e,t,r]))})}function ae(e,t,r,c=0){return i(this,null,function*(){return s(yield n("geodesicDensify",[a(e),e,t,r,c]))})}function ie(e,t){return n("planarArea",[a(e),e,t])}function ce(e,t){return n("planarLength",[a(e),e,t])}function se(e,t,r){return n("geodesicArea",[a(e),e,t,r])}function oe(e,t,r){return n("geodesicLength",[a(e),e,t,r])}function ue(e,t){return i(this,null,function*(){return s(yield n("intersectLinesToPoints",[a(e),e,t]))})}function fe(e,t){return i(this,null,function*(){yield x("changeDefaultSpatialReferenceTolerance",[e,t])})}function le(e){return i(this,null,function*(){yield x("clearDefaultSpatialReferenceTolerance",[e])})}var u=class extends Error{constructor(){super("Illegal Argument Exception")}};export{L as a,T as b,V as c,v as d,E as e,b as f,z as g,H as h,I as i,P as j,j as k,k as l,q as m,B as n,C as o,G as p,W as q,F as r,K as s,M as t,Q as u,U as v,X as w,Y as x,_ as y,$ as z,Z as A,ee as B,te as C,re as D,ne as E,ae as F,ie as G,ce as H,se as I,oe as J,ue as K,fe as L,le as M};
