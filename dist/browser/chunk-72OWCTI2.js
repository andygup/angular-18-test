import{c as f}from"./chunk-6TZNHZAI.js";import{$ as m,G as p,Ja as g,Ka as F,La as V,Ma as j,Na as v,Oa as D,T,aa as s,b as c,c as d,ja as u,oa as y,qa as b,wa as A,xa as x,ya as w}from"./chunk-6KEVGVAJ.js";import"./chunk-OCNYIIP3.js";import"./chunk-H755O6VJ.js";import"./chunk-MYC65FI6.js";import"./chunk-JVM3RNQL.js";import"./chunk-O5CPPU3T.js";import"./chunk-YRTOHBUA.js";import"./chunk-L2DEVDHE.js";import"./chunk-RU7UW4IO.js";import"./chunk-2ETW6ZBA.js";import"./chunk-6K7P7RRW.js";import"./chunk-7LRMKXZV.js";import"./chunk-BCREO4Q5.js";import"./chunk-BNUHB4AP.js";import"./chunk-ZGLJFDS6.js";import"./chunk-RSDQHAJX.js";import"./chunk-MMYIAMQR.js";import"./chunk-UHTPPTOJ.js";import"./chunk-LP5GLSKB.js";import"./chunk-LTDZH3EN.js";import"./chunk-3SBMUUA6.js";import"./chunk-II7TJXWX.js";import"./chunk-X7Z55FTO.js";import"./chunk-B66V4PSA.js";import"./chunk-A4HCVMB4.js";import"./chunk-AANS6QE5.js";import"./chunk-RMOOROEO.js";import"./chunk-ZP7G4HN4.js";import"./chunk-W3WDPWBE.js";import"./chunk-43GG6PFR.js";import"./chunk-MLSR6YE6.js";import"./chunk-JPDAKIWT.js";import"./chunk-D62JNIRP.js";import"./chunk-3DV77WOO.js";import"./chunk-NJG4JJ4L.js";import{g as o}from"./chunk-3T7TAUC2.js";function I(t,e){return t&&t.domain?t.domain.type==="coded-value"||t.domain.type==="codedValue"?f.convertObjectToArcadeDictionary({type:"codedValue",name:t.domain.name,dataType:p[t.field.type],codedValues:t.domain.codedValues.map(a=>({name:a.name,code:a.code}))},v(e)):f.convertObjectToArcadeDictionary({type:"range",name:t.domain.name,dataType:p[t.field.type],min:t.domain.minValue,max:t.domain.maxValue},v(e)):null}function C(t){t.mode==="async"&&(t.functions.domain=function(e,a){return t.standardFunctionAsync(e,a,(i,l,n)=>o(this,null,function*(){if(u(n,2,3,e,a),m(n[0]))return I(g(n[0],y(n[1]),n[2]===void 0?void 0:n[2]),e);if(s(n[0]))return yield n[0]._ensureLoaded(),I(w(y(n[1]),n[0],null,n[2]===void 0?void 0:n[2]),e);throw new d(e,c.InvalidParameter,a)}))},t.functions.subtypes=function(e,a){return t.standardFunctionAsync(e,a,(i,l,n)=>o(this,null,function*(){if(u(n,1,1,e,a),m(n[0])){let r=F(n[0]);return r?f.convertObjectToArcadeDictionary(r,v(e)):null}if(s(n[0])){yield n[0]._ensureLoaded();let r=n[0].subtypeMetaData();return r?f.convertObjectToArcadeDictionary(r,v(e)):null}throw new d(e,c.InvalidParameter,a)}))},t.functions.domainname=function(e,a){return t.standardFunctionAsync(e,a,(i,l,n)=>o(this,null,function*(){if(u(n,2,4,e,a),m(n[0]))return V(n[0],y(n[1]),n[2],n[3]===void 0?void 0:n[3]);if(s(n[0])){yield n[0]._ensureLoaded();let r=w(y(n[1]),n[0],null,n[3]===void 0?void 0:n[3]);return A(r,n[2])}throw new d(e,c.InvalidParameter,a)}))},t.signatures.push({name:"domainname",min:2,max:4}),t.functions.domaincode=function(e,a){return t.standardFunctionAsync(e,a,(i,l,n)=>o(this,null,function*(){if(u(n,2,4,e,a),m(n[0]))return j(n[0],y(n[1]),n[2],n[3]===void 0?void 0:n[3]);if(s(n[0])){yield n[0]._ensureLoaded();let r=w(y(n[1]),n[0],null,n[3]===void 0?void 0:n[3]);return x(r,n[2])}throw new d(e,c.InvalidParameter,a)}))},t.signatures.push({name:"domaincode",min:2,max:4}),t.functions.text=function(e,a){return t.standardFunctionAsync(e,a,(i,l,n)=>o(this,null,function*(){if(u(n,1,2,e,a),s(n[0])){let r=T(n[1],"");if(r==="")return n[0].castToText();if(r.toLowerCase()==="schema")return n[0].convertToText("schema",i.abortSignal);if(r.toLowerCase()==="featureset")return n[0].convertToText("featureset",i.abortSignal);throw new d(e,c.InvalidParameter,a)}return b(n[0],n[1])}))},t.functions.gdbversion=function(e,a){return t.standardFunctionAsync(e,a,(i,l,n)=>o(this,null,function*(){if(u(n,1,1,e,a),m(n[0]))return n[0].gdbVersion();if(s(n[0]))return(yield n[0].load()).gdbVersion;throw new d(e,c.InvalidParameter,a)}))},t.functions.schema=function(e,a){return t.standardFunctionAsync(e,a,(i,l,n)=>o(this,null,function*(){if(u(n,1,1,e,a),s(n[0]))return yield n[0].load(),f.convertObjectToArcadeDictionary(n[0].schema(),v(e));if(m(n[0])){let r=D(n[0]);return r?f.convertObjectToArcadeDictionary(r,v(e)):null}throw new d(e,c.InvalidParameter,a)}))})}export{C as registerFunctions};