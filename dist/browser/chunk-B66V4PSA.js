import{i as u}from"./chunk-3DV77WOO.js";import{a as e}from"./chunk-3T7TAUC2.js";var o=class{constructor(t,s={ignoreUnknown:!1,useNumericKeys:!1}){this._jsonToAPI=t,this._options=s,this.apiValues=[],this.jsonValues=[],this._apiToJSON=c(t),this.apiValues=h(this._apiToJSON),this.jsonValues=h(this._jsonToAPI),this.read=i=>this.fromJSON(i),this.write=(i,a,p)=>{let r=this.toJSON(i);r!==void 0&&u(p,r,a)},this.write.isJSONMapWriter=!0}toJSON(t){if(t==null)return null;if(this._apiToJSON.hasOwnProperty(t)){let s=this._apiToJSON[t];return this._options.useNumericKeys?+s:s}return this._options.ignoreUnknown?void 0:t}fromJSON(t){return t!=null&&this._jsonToAPI.hasOwnProperty(t)?this._jsonToAPI[t]:this._options.ignoreUnknown?void 0:t}};function c(n){let t={};for(let s in n)t[n[s]]=s;return t}function h(n){let t=[];for(let s in n)t.push(s);return t.sort(),t}function N(){return function(n,t){return new o(n,e({ignoreUnknown:!0},t))}}export{o as a,N as b};
