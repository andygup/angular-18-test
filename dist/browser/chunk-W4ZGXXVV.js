import{c as l}from"./chunk-KVCIO4DX.js";import{M as i}from"./chunk-ZP7G4HN4.js";import{h as a}from"./chunk-43GG6PFR.js";import{g as s}from"./chunk-3T7TAUC2.js";function u(r,e,m){return s(this,null,function*(){let o=r&&r.getAtOrigin&&r.getAtOrigin("renderer",e.origin);if(o&&o.type==="unique-value"&&o.styleOrigin){let t=yield l(o.populateFromStyle());if(a(m),t.ok===!1){let n=t.error;e?.messages&&e.messages.push(new i("renderer:style-reference",`Failed to create unique value renderer from style reference: ${n.message}`,{error:n,context:e})),r.clear("renderer",e?.origin)}}})}export{u as a};
