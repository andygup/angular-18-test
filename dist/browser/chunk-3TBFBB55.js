import{p as n}from"./chunk-3DV77WOO.js";function a(e,r){let t;if(typeof e=="string")t=n(e+`-seed(${r})`);else{let o=12;t=e^r;do t=107*(t>>8^t)+o|0;while(--o!=0)}return(1+t/(1<<31))/2}function f(e){return Math.floor(a(e,s)*i)}var s=53290320,i=10;export{a,f as b};
