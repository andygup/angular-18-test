import{a as s,c as r,d as c,e as d,n as u}from"./chunk-67EKH3Q4.js";import{M as F,o as f,u as m,v as p}from"./chunk-WOZZR3L4.js";import{a as l,b as o}from"./chunk-3T7TAUC2.js";function G({displayField:e,editFieldsInfo:t,fields:i,objectIdField:n,title:w},g){if(!i)return null;let a=S({editFieldsInfo:t,fields:i,objectIdField:n},g);if(!a.length)return null;let y=h({titleBase:w,fields:i,displayField:e}),v=T();return new u({title:y,content:v,fieldInfos:a})}var I=(e,t)=>t.visibleFieldNames?t.visibleFieldNames.has(e.name):p(e,t);function C(e,t){let i=e;return t&&(e=e.filter(n=>!t.includes(n.type))),e===i&&(e=e.slice()),e.sort(N),e}function N(e,t){return e.type==="oid"?-1:t.type==="oid"?1:b(e)?-1:b(t)?1:(e.alias||e.name).toLocaleLowerCase().localeCompare((t.alias||t.name).toLocaleLowerCase())}function S(e,t){let i=t?.visibleFieldNames;return C(e.fields??[],t?.ignoreFieldTypes||x).map(n=>new c({fieldName:n.name,isEditable:m(n,e),label:n.alias,format:L(n),visible:I(n,o(l({},e),{visibleFieldNames:i}))}))}function L(e){switch(e.type){case"small-integer":case"integer":case"single":return new r({digitSeparator:!0,places:0});case"double":return new r({digitSeparator:!0,places:2});case"string":return F(e.name)?new r({digitSeparator:!0,places:0}):void 0;default:return}}function T(){return[new d,new s]}function h(e){let t=f(e),{titleBase:i}=e;return t?`${i}: {${t.trim()}}`:i??""}function b(e){return(e.name&&e.name.toLowerCase())==="name"?!0:e.alias?.toLowerCase()==="name"}var x=["geometry","blob","raster","guid","xml"];export{G as a};
