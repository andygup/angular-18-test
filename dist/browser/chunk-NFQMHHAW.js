import{P as i}from"./chunk-AANS6QE5.js";function m(t){return p[a(t)]||l}function a(t){return t.type==="json"?"application/json":t.type==="blob"?t.blob.type:g(t.url)}function g(t){let e=i(t);return n[e]||o}var p={},o="text/plain",l=p[o],n={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip","bin.gz":"application/octet-stream"};for(let t in n)p[n[t]]=t;export{m as a};
