import{a as z}from"./chunk-2NH7HOKA.js";import{a as X}from"./chunk-I46GU3Q4.js";import{A as H,B as J,C as K,D as U,E as N,F as O,G as P,H as Q,I as R,J as W,a as d,b as o,c,d as l,e as p,f as V,g as w,h as y,i as _,j as B,k as F,l as m,m as A,n as g,o as I,p as b,q as v,r as $,s as k,t as E,u as M,v as S,w as j,x as q,y as L,z as T}from"./chunk-3M7QKELQ.js";import{D as C}from"./chunk-NJG4JJ4L.js";import{a as u,b as h}from"./chunk-3T7TAUC2.js";function ie(r,e=!1){return r<=C?e?new Array(r).fill(0):new Array(r):new Float32Array(r)}var n=class r{constructor(e,t){this.layout=e,this.buffer=typeof t=="number"?new ArrayBuffer(t*e.stride):t;for(let i of e.fields.keys()){let s=e.fields.get(i);this[i]=new s.constructor(this.buffer,s.offset,this.stride)}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(e,t){let i=this[e];return i&&i.elementCount===t.ElementCount&&i.elementType===t.ElementType?i:null}slice(e,t){return new r(this.layout,this.buffer.slice(e*this.stride,t*this.stride))}copyFrom(e,t=0,i=0,s=e.count){let f=this.stride;if(f%4==0){let a=new Uint32Array(e.buffer,t*f,s*f/4);new Uint32Array(this.buffer,i*f,s*f/4).set(a)}else{let a=new Uint8Array(e.buffer,t*f,s*f);new Uint8Array(this.buffer,i*f,s*f).set(a)}return this}get usedMemory(){return this.byteLength}dispose(){}},x=class r{constructor(e=null){this._stride=0,this._lastAligned=0,this._fields=new Map,e&&(this._stride=e.stride,e.fields.forEach(t=>this._fields.set(t[0],h(u({},t[1]),{constructor:ee(t[1].constructor)}))))}freeze(){return this}vec2f(e,t){return this._appendField(e,o,t),this}vec2f64(e,t){return this._appendField(e,B,t),this}vec3f(e,t){return this._appendField(e,c,t),this}vec3f64(e,t){return this._appendField(e,F,t),this}vec4f(e,t){return this._appendField(e,l,t),this}vec4f64(e,t){return this._appendField(e,m,t),this}mat3f(e,t){return this._appendField(e,p,t),this}mat3f64(e,t){return this._appendField(e,V,t),this}mat4f(e,t){return this._appendField(e,w,t),this}mat4f64(e,t){return this._appendField(e,y,t),this}vec4u8(e,t){return this._appendField(e,b,t),this}f32(e,t){return this._appendField(e,d,t),this}f64(e,t){return this._appendField(e,_,t),this}u8(e,t){return this._appendField(e,A,t),this}u16(e,t){return this._appendField(e,v,t),this}i8(e,t){return this._appendField(e,L,t),this}vec2i8(e,t){return this._appendField(e,T,t),this}vec2i16(e,t){return this._appendField(e,U,t),this}vec2u8(e,t){return this._appendField(e,g,t),this}vec4u16(e,t){return this._appendField(e,E,t),this}u32(e,t){return this._appendField(e,M,t),this}_appendField(e,t,i){if(this._fields.has(e))return void X(!1,`${e} already added to vertex buffer layout`);let s=t.ElementCount*z(t.ElementType),f=this._stride;this._stride+=s,this._fields.set(e,{size:s,constructor:t,offset:f,optional:i})}createBuffer(e){return new n(this,e)}createView(e){return new n(this,e)}clone(){let e=new r;return e._stride=this._stride,e._fields=new Map,this._fields.forEach((t,i)=>e._fields.set(i,t)),e.BufferType=this.BufferType,e}get stride(){if(this._lastAligned!==this._fields.size){let e=1;this._fields.forEach(t=>e=Math.max(e,z(t.constructor.ElementType))),this._stride=Math.floor((this._stride+e-1)/e)*e,this._lastAligned=this._fields.size}return this._stride}get fields(){return this._fields}};function ue(){return new x}var Y=class{constructor(e){this.fields=new Array,e.fields.forEach((t,i)=>{let s=h(u({},t),{constructor:Z(t.constructor)});this.fields.push([i,s])}),this.stride=e.stride}},G=[d,o,c,l,p,w,_,B,F,m,V,y,A,g,I,b,v,$,k,E,M,S,j,q,L,T,H,J,K,U,N,O,P,Q,R,W];function Z(r){return`${r.ElementType}_${r.ElementCount}`}function ee(r){return D.get(r)}var D=new Map;G.forEach(r=>D.set(Z(r),r));export{ue as a,Y as b,ie as c};
