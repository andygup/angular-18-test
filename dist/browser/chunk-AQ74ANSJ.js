var a=/^-?(\d+(\.\d+)?)\s*((px)|(pt))?$/i,u="screenUtils.toPt: input not recognized!";function s(r){return r?r/72*96:0}function i(r){return r?72*r/96:0}function f(r){if(typeof r=="string"){let n=r.match(a);if(n){let e=Number(n[1]),c=n[3]&&n[3].toLowerCase(),o=r.charAt(0)==="-",t=c==="px"?i(e):e;return o?-t:t}return console.warn(u),null}return r}function y(r=0,n=0){return{x:r,y:n}}function x(r=0,n=0){return[r,n]}export{s as a,i as b,f as c,y as d,x as e};
