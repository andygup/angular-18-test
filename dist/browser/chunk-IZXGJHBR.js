import{a as z}from"./chunk-RU7UW4IO.js";import{a as k}from"./chunk-B66V4PSA.js";import{H as y,S as C}from"./chunk-RMOOROEO.js";import{S as w}from"./chunk-ZP7G4HN4.js";import{a as v}from"./chunk-W3WDPWBE.js";import{s as S}from"./chunk-3DV77WOO.js";var F=new k({esriClassifyEqualInterval:"equal-interval",esriClassifyManual:"manual",esriClassifyNaturalBreaks:"natural-breaks",esriClassifyQuantile:"quantile",esriClassifyStandardDeviation:"standard-deviation",esriClassifyDefinedInterval:"defined-interval"}),I=new k({esriNormalizeByLog:"log",esriNormalizeByPercentOfTotal:"percent-of-total",esriNormalizeByField:"field"}),V=class extends C{constructor(t){super(t),this.type="class-breaks-definition",this.breakCount=null,this.classificationField=null,this.classificationMethod=null,this.normalizationField=null,this.normalizationType=null}set standardDeviationInterval(t){this.classificationMethod==="standard-deviation"&&this._set("standardDeviationInterval",t)}set definedInterval(t){this.classificationMethod==="defined-interval"&&this._set("definedInterval",t)}};v([z({classBreaksDef:"class-breaks-definition"})],V.prototype,"type",void 0),v([y({json:{write:!0}})],V.prototype,"breakCount",void 0),v([y({json:{write:!0}})],V.prototype,"classificationField",void 0),v([y({type:String,json:{read:F.read,write:F.write}})],V.prototype,"classificationMethod",void 0),v([y({json:{write:!0}})],V.prototype,"normalizationField",void 0),v([y({json:{read:I.read,write:I.write}})],V.prototype,"normalizationType",void 0),v([y({value:null,json:{write:!0}})],V.prototype,"standardDeviationInterval",null),v([y({value:null,json:{write:!0}})],V.prototype,"definedInterval",null),V=v([w("esri.rest.support.ClassBreaksDefinition")],V);var W=V;var B=()=>S.getLogger("esri.rest.support.generateRendererUtils");function M(t,o){return Number(t.toFixed(o))}function $(t){let{normalizationTotal:o}=t;return{classBreaks:j(t),normalizationTotal:o}}function j(t){let o=t.definition,{classificationMethod:a,normalizationType:s,definedInterval:m}=o,f=o.breakCount??1,u=[],l=t.values;if(l.length===0)return[];l=l.sort((r,c)=>r-c);let d=l[0],p=l[l.length-1];if(a==="equal-interval")if(l.length>=f){let r=(p-d)/f,c=d;for(let n=1;n<f;n++){let e=M(d+n*r,6);u.push({minValue:c,maxValue:e,label:b(c,e,s)}),c=e}u.push({minValue:c,maxValue:p,label:b(c,p,s)})}else l.forEach(r=>{u.push({minValue:r,maxValue:r,label:b(r,r,s)})});else if(a==="natural-breaks"){let r=D(l),c=t.valueFrequency||r.valueFrequency,n=T(r.uniqueValues,c,f),e=d;for(let i=1;i<f;i++)if(r.uniqueValues.length>i){let h=M(r.uniqueValues[n[i]],6);u.push({minValue:e,maxValue:h,label:b(e,h,s)}),e=h}u.push({minValue:e,maxValue:p,label:b(e,p,s)})}else if(a==="quantile")if(l.length>=f&&d!==p){let r=d,c=Math.ceil(l.length/f),n=0;for(let e=1;e<f;e++){let i=c+n-1;i>l.length&&(i=l.length-1),i<0&&(i=0),u.push({minValue:r,maxValue:l[i],label:b(r,l[i],s)}),r=l[i],n+=c,c=Math.ceil((l.length-n)/(f-e))}u.push({minValue:r,maxValue:p,label:b(r,p,s)})}else{let r=-1;for(let c=0;c<l.length;c++){let n=l[c];n!==r&&(r=n,u.push({minValue:r,maxValue:n,label:b(r,n,s)}),r=n)}}else if(a==="standard-deviation"){let r=L(l),c=O(l,r);if(c===0)u.push({minValue:l[0],maxValue:l[0],label:b(l[0],l[0],s)});else{let n=_(d,p,f,r,c)*c,e=0,i=d;for(let g=f;g>=1;g--){let q=M(r-(g-.5)*n,6);u.push({minValue:i,maxValue:q,label:b(i,q,s)}),i=q,e++}let h=M(r+.5*n,6);u.push({minValue:i,maxValue:h,label:b(i,h,s)}),i=h,e++;for(let g=1;g<=f;g++)h=e===2*f?p:M(r+(g+.5)*n,6),u.push({minValue:i,maxValue:h,label:b(i,h,s)}),i=h,e++}}else if(a==="defined-interval"){if(!m)return u;let r=l[0],c=l[l.length-1],n=Math.ceil((c-r)/m),e=r;for(let i=1;i<n;i++){let h=M(r+i*m,6);u.push({minValue:e,maxValue:h,label:b(e,h,s)}),e=h}u.push({minValue:e,maxValue:c,label:b(e,c,s)})}return u}function b(t,o,a){let s=null;return s=t===o?a&&a==="percent-of-total"?t+"%":t.toString():a&&a==="percent-of-total"?t+"% - "+o+"%":t+" - "+o,s}function D(t){let o=[],a=[],s=Number.MIN_VALUE,m=1,f=-1;for(let u=0;u<t.length;u++){let l=t[u];l===s?(m++,a[f]=m):l!==null&&(o.push(l),s=l,m=1,a.push(m),f++)}return{uniqueValues:o,valueFrequency:a}}function T(t,o,a){let s=t.length,m=[];a>s&&(a=s);for(let u=0;u<a;u++)m.push(Math.round(u*s/a-1));m.push(s-1);let f=N(m,t,o,a);return E(f.mean,f.sdcm,m,t,o,a)&&(f=N(m,t,o,a)),m}function N(t,o,a,s){let m=[],f=[],u=[],l=0,d=[],p=[];for(let e=0;e<s;e++){let i=x(e,t,o,a);d.push(i.sbMean),p.push(i.sbSdcm),l+=p[e]}let r,c=l,n=!0;for(;n||l<c;){n=!1,m=[];for(let e=0;e<s;e++)m.push(t[e]);for(let e=0;e<s;e++)for(let i=t[e]+1;i<=t[e+1];i++)if(r=o[i],e>0&&i!==t[e+1]&&Math.abs(r-d[e])>Math.abs(r-d[e-1]))t[e]=i;else if(e<s-1&&t[e]!==i-1&&Math.abs(r-d[e])>Math.abs(r-d[e+1])){t[e+1]=i-1;break}c=l,l=0,f=[],u=[];for(let e=0;e<s;e++){f.push(d[e]),u.push(p[e]);let i=x(e,t,o,a);d[e]=i.sbMean,p[e]=i.sbSdcm,l+=p[e]}}if(l>c){for(let e=0;e<s;e++)t[e]=m[e],d[e]=f[e],p[e]=u[e];l=c}return{mean:d,sdcm:p}}function E(t,o,a,s,m,f){let u=0,l=0,d=0,p=0,r=!0;for(let c=0;c<2&&r;c++){c===0&&(r=!1);for(let n=0;n<f-1;n++)for(;a[n+1]+1!==a[n+2];){a[n+1]=a[n+1]+1;let e=x(n,a,s,m);d=e.sbMean,u=e.sbSdcm;let i=x(n+1,a,s,m);if(p=i.sbMean,l=i.sbSdcm,!(u+l<o[n]+o[n+1])){a[n+1]=a[n+1]-1;break}o[n]=u,o[n+1]=l,t[n]=d,t[n+1]=p,r=!0}for(let n=f-1;n>0;n--)for(;a[n]!==a[n-1]+1;){a[n]=a[n]-1;let e=x(n-1,a,s,m);d=e.sbMean,u=e.sbSdcm;let i=x(n,a,s,m);if(p=i.sbMean,l=i.sbSdcm,!(u+l<o[n-1]+o[n])){a[n]=a[n]+1;break}o[n-1]=u,o[n]=l,t[n-1]=d,t[n]=p,r=!0}}return r}function _(t,o,a,s,m){let f=Math.max(s-t,o-s)/m/a;return f=f>=1?1:f>=.5?.5:.25,f}function L(t){let o=0;for(let a=0;a<t.length;a++)o+=t[a];return o/=t.length,o}function O(t,o){let a=0;for(let s=0;s<t.length;s++){let m=t[s];a+=(m-o)*(m-o)}return a/=t.length,Math.sqrt(a)}function x(t,o,a,s){let m=0,f=0;for(let d=o[t]+1;d<=o[t+1];d++){let p=s[d];m+=a[d]*p,f+=p}f<=0&&B().warn("Exception in Natural Breaks calculation");let u=m/f,l=0;for(let d=o[t]+1;d<=o[t+1];d++)l+=s[d]*(a[d]-u)**2;return{sbMean:u,sbSdcm:l}}export{W as a,$ as b};
