import{a as h,b as x}from"./chunk-IZXGJHBR.js";var I="<Null>",S="equal-interval",N=1,C=5,k=10,M=/\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*/gi,B=new Set(["esriFieldTypeDate","esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong","esriFieldTypeOID","esriFieldTypeBigInteger"]),w=new Set(["esriFieldTypeTimeOnly","esriFieldTypeDateOnly"]),q=["min","max","avg","stddev","count","sum","variance","nullcount","median"];function T(t){return t==null||typeof t=="string"&&!t?I:t}function E(t){let e=t.normalizationField!=null||t.normalizationType!=null,l=t.minValue!=null||t.maxValue!=null,a=!!t.sqlExpression&&t.supportsSQLExpression;return!e&&!l&&!a}function tt(t){let e=t.returnDistinct?[...new Set(t.values)]:t.values,l=e.filter(n=>n!=null).sort(),a=l.length,i={count:a,min:l[0],max:l[a-1]};return t.supportsNullCount&&(i.nullcount=e.length-a),t.percentileParams&&(i.median=D(e,t.percentileParams)),i}function $(t){let{values:e,useSampleStdDev:l,supportsNullCount:a}=t,i=Number.POSITIVE_INFINITY,n=Number.NEGATIVE_INFINITY,r=null,s=null,o=null,f=null,u=0,d=t.minValue==null?-1/0:t.minValue,c=t.maxValue==null?1/0:t.maxValue;for(let m of e)Number.isFinite(m)?m>=d&&m<=c&&(r=r===null?m:r+m,i=Math.min(i,m),n=Math.max(n,m),u++):typeof m=="string"&&u++;if(u&&r!=null){s=r/u;let m=0;for(let v of e)Number.isFinite(v)&&v>=d&&v<=c&&(m+=(v-s)**2);f=l?u>1?m/(u-1):0:u>0?m/u:0,o=Math.sqrt(f)}else i=null,n=null;let p={avg:s,count:u,max:n,min:i,stddev:o,sum:r,variance:f};return a&&(p.nullcount=e.length-u),t.percentileParams&&(p.median=D(e,t.percentileParams)),p}function D(t,e){let{fieldType:l,value:a,orderBy:i,isDiscrete:n}=e,r=O(l,i==="desc");if((t=[...t].filter(p=>p!=null).sort((p,m)=>r(p,m))).length===0)return null;if(a<=0)return t[0];if(a>=1)return t[t.length-1];let s=(t.length-1)*a,o=Math.floor(s),f=o+1,u=s%1,d=t[o],c=t[f];return f>=t.length||n||typeof d=="string"||typeof c=="string"?d:d*(1-u)+c*u}function O(t,e){if(t){if(B.has(t))return F(e);if(w.has(t))return y(e,!1);if(t==="esriFieldTypeTimestampOffset")return L(e);let n=y(e,!0);if(t==="esriFieldTypeString")return n;if(t==="esriFieldTypeGUID"||t==="esriFieldTypeGlobalID")return(r,s)=>n(z(r),z(s))}let l=e?1:-1,a=F(e),i=y(e,!0);return(n,r)=>typeof n=="number"&&typeof r=="number"?a(n,r):typeof n=="string"&&typeof r=="string"?i(n,r):l}var g=(t,e)=>t==null?e==null?0:1:e==null?-1:null,V=(t,e)=>t==null?e==null?0:-1:e==null?1:null;function P(t){return t?g:V}var U=(t,e)=>V(t,e)??(t===e?0:new Date(t).getTime()-new Date(e).getTime()),G=(t,e)=>g(t,e)??(t===e?0:new Date(e).getTime()-new Date(t).getTime());function L(t){return t?G:U}var R=(t,e)=>V(t,e)??(t===e?0:t<e?-1:1),A=(t,e)=>g(t,e)??(t===e?0:t<e?1:-1);function y(t,e){if(!e)return t?A:R;let l=P(t);return t?(a,i)=>{let n=l(a,i);return n??((a=a.toUpperCase())>(i=i.toUpperCase())?-1:a<i?1:0)}:(a,i)=>{let n=l(a,i);return n??((a=a.toUpperCase())<(i=i.toUpperCase())?-1:a>i?1:0)}}var Y=(t,e)=>g(t,e)??e-t,_=(t,e)=>V(t,e)??t-e;function F(t){return t?Y:_}function z(t){return t.substr(24,12)+t.substr(19,4)+t.substr(16,2)+t.substr(14,2)+t.substr(11,2)+t.substr(9,2)+t.substr(6,2)+t.substr(4,2)+t.substr(2,2)+t.substr(0,2)}function et(t,e){let l;for(l in t)q.includes(l)&&(Number.isFinite(t[l])||(t[l]=null));return e&&["avg","stddev","variance"].forEach(a=>{t[a]!=null&&(t[a]=Math.ceil(t[a]??0))}),t}function lt(t){let e={};for(let l of t)(l==null||typeof l=="string"&&l.trim()==="")&&(l=null),e[l]==null?e[l]={count:1,data:l}:e[l].count++;return{count:e}}function b(t){return t?.type!=="coded-value"?[]:t.codedValues.map(e=>e.code)}function at(t,e,l,a){let i=t.count,n=[];if(l&&e){let r=[],s=b(e[0]);for(let o of s)if(e[1]){let f=b(e[1]);for(let u of f)if(e[2]){let d=b(e[2]);for(let c of d)r.push(`${T(o)}${a}${T(u)}${a}${T(c)}`)}else r.push(`${T(o)}${a}${T(u)}`)}else r.push(o);for(let o of r)i.hasOwnProperty(o)||(i[o]={data:o,count:0})}for(let r in i){let s=i[r];n.push({value:s.data,count:s.count,label:s.label})}return{uniqueValueInfos:n}}function it(t,e,l,a){let i=null;switch(e){case"log":t!==0&&(i=Math.log(t)*Math.LOG10E);break;case"percent-of-total":Number.isFinite(a)&&a!==0&&(i=t/a*100);break;case"field":Number.isFinite(l)&&l!==0&&(i=t/l);break;case"natural-log":t>0&&(i=Math.log(t));break;case"square-root":t>0&&(i=t**.5)}return i}function j(t,e){let l=Q({field:e.field,normalizationType:e.normalizationType,normalizationField:e.normalizationField,classificationMethod:e.classificationMethod,standardDeviationInterval:e.standardDeviationInterval,breakCount:e.numClasses||C});return t=H(t,e.minValue,e.maxValue),x({definition:l,values:t,normalizationTotal:e.normalizationTotal})}function H(t,e,l){let a=e??-1/0,i=l??1/0;return t.filter(n=>Number.isFinite(n)&&n>=a&&n<=i)}function Q(t){let{breakCount:e,field:l,normalizationField:a,normalizationType:i}=t,n=t.classificationMethod||S,r=n==="standard-deviation"?t.standardDeviationInterval||N:void 0;return new h({breakCount:e,classificationField:l,classificationMethod:n,normalizationField:i==="field"?a:void 0,normalizationType:i,standardDeviationInterval:r})}function nt(t,e){let l=t.classBreaks,a=l.length,i=l[0]?.minValue,n=l[a-1]?.maxValue,r=e==="standard-deviation",s=M;return l=l.map(o=>{let f=o.label,u={minValue:o.minValue,maxValue:o.maxValue,label:f};if(r&&f){let d=f.match(s),c=d?.map(p=>+p.trim())??[];c.length===2?(u.minStdDev=c[0],u.maxStdDev=c[1],c[0]<0&&c[1]>0&&(u.hasAvg=!0)):c.length===1&&(f.includes("<")?(u.minStdDev=null,u.maxStdDev=c[0]):f.includes(">")&&(u.minStdDev=c[0],u.maxStdDev=null))}return u}),{minValue:i,maxValue:n,classBreakInfos:l,normalizationTotal:t.normalizationTotal}}function rt(t,e){let l=J(t,e);if(l.min==null&&l.max==null)return{bins:[],minValue:l.min,maxValue:l.max,normalizationTotal:e.normalizationTotal};let a=l.intervals,i=l.min??0,n=l.max??0,r=a.map((s,o)=>({minValue:a[o][0],maxValue:a[o][1],count:0}));for(let s of t)if(s!=null&&s>=i&&s<=n){let o=K(a,s);o>-1&&r[o].count++}return{bins:r,minValue:i,maxValue:n,normalizationTotal:e.normalizationTotal}}function J(t,e){let{field:l,classificationMethod:a,standardDeviationInterval:i,normalizationType:n,normalizationField:r,normalizationTotal:s,minValue:o,maxValue:f}=e,u=e.numBins||k,d=null,c=null,p=null;if((!a||a==="equal-interval")&&!n){if(o!=null&&f!=null)d=o,c=f;else{let m=$({values:t,minValue:o,maxValue:f,useSampleStdDev:!n,supportsNullCount:E({normalizationType:n,normalizationField:r,minValue:o,maxValue:f})});d=m.min??null,c=m.max??null}p=W(d??0,c??0,u)}else{let{classBreaks:m}=j(t,{field:l,normalizationType:n,normalizationField:r,normalizationTotal:s,classificationMethod:a,standardDeviationInterval:i,minValue:o,maxValue:f,numClasses:u});d=m[0].minValue,c=m[m.length-1].maxValue,p=m.map(v=>[v.minValue,v.maxValue])}return{min:d,max:c,intervals:p}}function K(t,e){let l=-1;for(let a=t.length-1;a>=0;a--)if(e>=t[a][0]){l=a;break}return l}function W(t,e,l){let a=(e-t)/l,i=[],n,r=t;for(let s=1;s<=l;s++)n=r+a,n=Number(n.toFixed(16)),i.push([r,s===l?e:n]),r=n;return i}export{T as a,E as b,tt as c,$ as d,D as e,O as f,et as g,lt as h,at as i,it as j,j as k,nt as l,rt as m};
