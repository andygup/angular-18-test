import{M as i,S as l,n as s}from"./chunk-3SBMUUA6.js";function h(e,t,o){if(t==null||o==null||o.vcsWkid||s(t,o)||i(t)||i(o))return null;let n=l(t)/l(o);if(n===1)return null;switch(e){case"point":case"esriGeometryPoint":return r=>c(r,n);case"polyline":case"esriGeometryPolyline":return r=>f(r,n);case"polygon":case"esriGeometryPolygon":return r=>a(r,n);case"multipoint":case"esriGeometryMultipoint":return r=>u(r,n);case"extent":case"esriGeometryEnvelope":return r=>m(r,n);default:return null}}function c(e,t){e?.z!=null&&(e.z*=t)}function a(e,t){if(e)for(let o of e.rings)for(let n of o)n.length>2&&(n[2]*=t)}function f(e,t){if(e)for(let o of e.paths)for(let n of o)n.length>2&&(n[2]*=t)}function u(e,t){if(e)for(let o of e.points)o.length>2&&(o[2]*=t)}function m(e,t){e&&e.zmin!=null&&e.zmax!=null&&(e.zmin*=t,e.zmax*=t)}export{h as a};
