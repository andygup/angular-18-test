function f(r){let n={};for(let e in r){if(e==="declaredClass")continue;let t=r[e];if(t!=null&&typeof t!="function")if(Array.isArray(t)){n[e]=[];for(let o=0;o<t.length;o++)n[e][o]=f(t[o])}else typeof t=="object"?t.toJSON&&(n[e]=JSON.stringify(t)):n[e]=t}return n}export{f as a};