"use strict";(self.webpackChunkangular_18_test=self.webpackChunkangular_18_test||[]).push([[7985],{27985:(v,c,n)=>{n.r(c),n.d(c,{execute:()=>p});var f=n(10467),b=n(5922);function p(u,a){let e=a.responseType;e?"array-buffer"!==e&&"blob"!==e&&"json"!==e&&"native"!==e&&"native-request-init"!==e&&"text"!==e&&(e="text"):e="json",a.responseType=e;const d=a.signal;return delete a.signal,globalThis.invokeStaticMessage("request",{url:u,options:a},{signal:d}).then(function(){var h=(0,f.A)(function*(t){let l,s,i,_,r;if(t.data)if(t.data instanceof ArrayBuffer){if(!("json"!==e&&"text"!==e&&"blob"!==e||(l=new Blob([t.data]),"json"!==e&&"text"!==e||(_=yield l.text(),"json"!==e)))){try{s=JSON.parse(_||null)}catch(o){const g={...o,url:u,requestOptions:a};throw new b.A("request:server",o.message,g)}if(s.error){const o={...s.error,url:u,requestOptions:a};throw new b.A("request:server",s.error.message,o)}}}else"native"===e&&(t.data.signal=d,i=yield fetch(t.data.url,t.data),t.httpStatus=i.status);switch(e){case"blob":r=l;break;case"json":r=s;break;case"native":r=i;break;case"text":r=_;break;default:r=t.data}return{data:r,httpStatus:t.httpStatus,requestOptions:a,ssl:t.ssl,url:u}});return function(t){return h.apply(this,arguments)}}())}}}]);