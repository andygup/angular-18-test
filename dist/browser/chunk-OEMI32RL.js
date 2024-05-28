import{e as ye,f as we}from"./chunk-NIPH2J6R.js";import{b as Rt}from"./chunk-46IOK233.js";import{a as w,c as Dt,d as Nt}from"./chunk-E4Z6GAFJ.js";import{a as S,b as At,d as zt}from"./chunk-43UANMP5.js";import{a as W,b as It,c as u,f as _e,g as E,h as be,i as _,j as p,k as Te,l as D,m as F}from"./chunk-ZYBGZLJ2.js";import{a as Se}from"./chunk-7FVU4GPM.js";import{a as T,b as H}from"./chunk-PCE3ZAVU.js";import{a as y,b as o}from"./chunk-GMW3QDVG.js";import{a as wt,i as Mt,j as Ct}from"./chunk-HBLTLHNB.js";import{a as v}from"./chunk-RHABF3KL.js";import{a as Pt,b as Ot}from"./chunk-6WUYBFKW.js";import{b as Lt,c as Ft}from"./chunk-PTXLSCMJ.js";import{c as xe,d as ae,g as L,h as Et}from"./chunk-OW7DVBQB.js";import{a as St,b as _t,l as $e,n as bt,y as Tt}from"./chunk-ZAQLF7TN.js";import{a as l}from"./chunk-H5IJXG2U.js";import{a as O,c as ge}from"./chunk-BVW6ULEA.js";import{a as G}from"./chunk-7C6Z24SS.js";import{a as xt}from"./chunk-2EA2KAER.js";import{n as yt}from"./chunk-MJ4RSERD.js";import{b as Ke}from"./chunk-J57HR4DB.js";import{a as he,g as gt}from"./chunk-6A4M7X3R.js";import{a as oe,b as Xe}from"./chunk-Z5Q76SB7.js";import{f as j}from"./chunk-5QLB7ZJ7.js";import{b as P}from"./chunk-E5R4OI7X.js";import{b as N,d as Ze,f as re}from"./chunk-BNUHB4AP.js";import{F as ve,a as h,c as ee,e as te,l as b,m as ke,n as Je}from"./chunk-ZGLJFDS6.js";import{H as d,K as pe}from"./chunk-RMOOROEO.js";import{S as U}from"./chunk-ZP7G4HN4.js";import{a as c}from"./chunk-W3WDPWBE.js";import{w as vt}from"./chunk-43GG6PFR.js";import{c as Q,f as R}from"./chunk-MLSR6YE6.js";import{a as ht}from"./chunk-D62JNIRP.js";import{u as pt}from"./chunk-3DV77WOO.js";import{e as ft}from"./chunk-NJG4JJ4L.js";import{g as ut}from"./chunk-3T7TAUC2.js";var M;function V(e,t){switch(t.textureCoordinateType){case M.Default:return e.attributes.add(l.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(o`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case M.Compressed:return e.attributes.add(l.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(o`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case M.Atlas:return e.attributes.add(l.UV0,"vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add(l.UVREGION,"vec4"),e.varyings.add("vuvRegion","vec4"),void e.vertex.code.add(o`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:t.textureCoordinateType;case M.None:return void e.vertex.code.add(o`void forwardTextureCoordinates() {}`);case M.COUNT:return}}(function(e){e[e.None=0]="None",e[e.Default=1]="Default",e[e.Atlas=2]="Atlas",e[e.Compressed=3]="Compressed",e[e.COUNT=4]="COUNT"})(M||(M={}));function Gt(e){e.fragment.code.add(o`vec4 textureAtlasLookup(sampler2D tex, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
return textureGrad(tex, uvAtlas, dUVdx, dUVdy);
}`)}function Ht(e,t){switch(e.include(V,t),t.textureCoordinateType){case M.Default:case M.Compressed:return void e.fragment.code.add(o`vec4 textureLookup(sampler2D tex, vec2 uv) {
return texture(tex, uv);
}`);case M.Atlas:return e.include(Gt),void e.fragment.code.add(o`vec4 textureLookup(sampler2D tex, vec2 uv) {
return textureAtlasLookup(tex, uv, vuvRegion);
}`);default:t.textureCoordinateType;case M.None:case M.COUNT:return}}var Me=class{constructor(t){this._material=t.material,this._techniques=t.techniques,this._output=t.output}dispose(){this._techniques.release(this._technique)}get technique(){return this._technique}get _stippleTextures(){return this._techniques.constructionContext.stippleTextures}get _markerTextures(){return this._techniques.constructionContext.markerTextures}ensureTechnique(t,r){return this._technique=this._techniques.releaseAndAcquire(t,this._material.getConfiguration(this._output,r),this._technique),this._technique}ensureResources(t){return ae.LOADED}};var Vt=class extends Me{constructor(t){super(t),this._numLoading=0,this._disposed=!1,this._textures=t.textures,this._textureId=t.textureId,this._acquire(t.textureId,r=>this._texture=r),this._acquire(t.normalTextureId,r=>this._textureNormal=r),this._acquire(t.emissiveTextureId,r=>this._textureEmissive=r),this._acquire(t.occlusionTextureId,r=>this._textureOcclusion=r),this._acquire(t.metallicRoughnessTextureId,r=>this._textureMetallicRoughness=r)}dispose(){this._texture=R(this._texture),this._textureNormal=R(this._textureNormal),this._textureEmissive=R(this._textureEmissive),this._textureOcclusion=R(this._textureOcclusion),this._textureMetallicRoughness=R(this._textureMetallicRoughness),this._disposed=!0}ensureResources(t){return this._numLoading===0?ae.LOADED:ae.LOADING}get textureBindParameters(){return new Ce(this._texture!=null?this._texture.glTexture:null,this._textureNormal!=null?this._textureNormal.glTexture:null,this._textureEmissive!=null?this._textureEmissive.glTexture:null,this._textureOcclusion!=null?this._textureOcclusion.glTexture:null,this._textureMetallicRoughness!=null?this._textureMetallicRoughness.glTexture:null)}updateTexture(t){this._texture!=null&&t===this._texture.id||(this._texture=R(this._texture),this._textureId=t,this._acquire(this._textureId,r=>this._texture=r))}_acquire(t,r){if(t==null)return void r(null);let a=this._textures.acquire(t);if(vt(a))return++this._numLoading,void a.then(s=>{if(this._disposed)return R(s),void r(null);r(s)}).finally(()=>--this._numLoading);r(a)}},Ce=class extends y{constructor(t=null,r=null,a=null,s=null,i=null,n,g){super(),this.texture=t,this.textureNormal=r,this.textureEmissive=a,this.textureOcclusion=s,this.textureMetallicRoughness=i,this.scale=n,this.normalTextureTransformMatrix=g}};var m;(function(e){e[e.Disabled=0]="Disabled",e[e.Normal=1]="Normal",e[e.Schematic=2]="Schematic",e[e.Water=3]="Water",e[e.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",e[e.Simplified=5]="Simplified",e[e.TerrainWithWater=6]="TerrainWithWater",e[e.COUNT=7]="COUNT"})(m||(m={}));function Eo(e,t){let r=e.fragment,a=t.hasMetallicRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;if(t.pbrMode===m.Normal&&a&&e.include(Ht,t),t.pbrMode!==m.Schematic)if(t.pbrMode!==m.Disabled){if(t.pbrMode===m.Normal){r.code.add(o`vec3 mrr;
vec3 emission;
float occlusion;`);let s=t.pbrTextureBindType;t.hasMetallicRoughnessTexture&&(r.uniforms.add(s===v.Pass?new S("texMetallicRoughness",i=>i.textureMetallicRoughness):new Se("texMetallicRoughness",i=>i.textureMetallicRoughness)),r.code.add(o`void applyMetallnessAndRoughness(vec2 uv) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),t.hasEmissionTexture&&(r.uniforms.add(s===v.Pass?new S("texEmission",i=>i.textureEmissive):new Se("texEmission",i=>i.textureEmissive)),r.code.add(o`void applyEmission(vec2 uv) {
emission *= textureLookup(texEmission, uv).rgb;
}`)),t.hasOcclusionTexture?(r.uniforms.add(s===v.Pass?new S("texOcclusion",i=>i.textureOcclusion):new Se("texOcclusion",i=>i.textureOcclusion)),r.code.add(o`void applyOcclusion(vec2 uv) {
occlusion *= textureLookup(texOcclusion, uv).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(o`float getBakedOcclusion() { return 1.0; }`),s===v.Pass?r.uniforms.add(new p("emissionFactor",i=>i.emissiveFactor),new p("mrrFactors",i=>i.mrrFactors)):r.uniforms.add(new _("emissionFactor",i=>i.emissiveFactor),new _("mrrFactors",i=>i.mrrFactors)),r.code.add(o`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;

      ${t.hasMetallicRoughnessTexture?o`applyMetallnessAndRoughness(${t.hasMetallicRoughnessTextureTransform?o`metallicRoughnessUV`:"vuv0"});`:""}

      ${t.hasEmissionTexture?o`applyEmission(${t.hasEmissiveTextureTransform?o`emissiveUV`:"vuv0"});`:""}

      ${t.hasOcclusionTexture?o`applyOcclusion(${t.hasOcclusionTextureTransform?o`occlusionUV`:"vuv0"});`:""}
    }
  `)}}else r.code.add(o`float getBakedOcclusion() { return 1.0; }`);else r.code.add(o`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}var Bt;(function(e){e[e.ColorAlpha=0]="ColorAlpha",e[e.FrontFace=1]="FrontFace",e[e.NONE=2]="NONE",e[e.COUNT=3]="COUNT"})(Bt||(Bt={}));function Ut(e){e.attributes.add(l.POSITION,"vec3"),e.vertex.code.add(o`vec3 positionModel() { return position; }`)}function Ee(e,t){e.include(Ut);let r=e.vertex;r.include(be,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),r.uniforms.add(new p("transformWorldFromViewTH",a=>a.transformWorldFromViewTH),new p("transformWorldFromViewTL",a=>a.transformWorldFromViewTL),new D("transformViewFromCameraRelativeRS",a=>a.transformViewFromCameraRelativeRS),new F("transformProjFromView",a=>a.transformProjFromView),new Te("transformWorldFromModelRS",a=>a.transformWorldFromModelRS),new _("transformWorldFromModelTH",a=>a.transformWorldFromModelTH),new _("transformWorldFromModelTL",a=>a.transformWorldFromModelTL)),r.code.add(o`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),r.code.add(o`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${t.spherical?o`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:o`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),e.fragment.uniforms.add(new p("transformWorldFromViewTL",a=>a.transformWorldFromViewTL)),r.code.add(o`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),e.fragment.code.add(o`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}var Pe=class extends y{constructor(){super(...arguments),this.transformWorldFromViewTH=h(),this.transformWorldFromViewTL=h(),this.transformViewFromCameraRelativeRS=G(),this.transformProjFromView=O()}};function Wt(e,t){switch(t.normalType){case E.Attribute:case E.Compressed:e.include(_e,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add(new Te("transformNormalGlobalFromModel",r=>r.transformNormalGlobalFromModel),new D("transformNormalViewFromGlobal",r=>r.transformNormalViewFromGlobal)),e.vertex.code.add(o`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case E.Ground:e.include(Ee,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(o`
        void forwardNormal() {
          vNormalWorld = ${t.spherical?o`normalize(vPositionWorldCameraRelative);`:o`vec3(0.0, 0.0, 1.0);`}
        }
        `);break;case E.ScreenDerivative:e.vertex.code.add(o`void forwardNormal() {}`);break;default:t.normalType;case E.COUNT:}}var jt=class extends Pe{constructor(){super(...arguments),this.transformNormalViewFromGlobal=G()}};function qt(e){e.varyings.add("linearDepth","float")}function et(e){e.vertex.uniforms.add(new At("nearFar",(t,r)=>r.camera.nearFar))}function tt(e){e.vertex.code.add(o`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function na(e,t){let{vertex:r}=e;switch(t.output){case u.Color:if(t.receiveShadows)return qt(e),void r.code.add(o`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case u.Shadow:case u.ShadowHighlight:case u.ShadowExcludeHighlight:case u.ViewshedShadow:return e.include(Ee,t),qt(e),et(e),tt(e),void r.code.add(o`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}r.code.add(o`void forwardLinearDepth() {}`)}function da(e){e.vertex.code.add(o`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function se(e,t){Or(e,t,new _("slicePlaneOrigin",(r,a)=>Lr(t,r,a)),new _("slicePlaneBasis1",(r,a)=>Yt(t,r,a,a.slicePlane?.basis1)),new _("slicePlaneBasis2",(r,a)=>Yt(t,r,a,a.slicePlane?.basis2)))}function Or(e,t,...r){if(!t.hasSlicePlane){let n=o`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return t.hasSliceInVertexProgram&&e.vertex.code.add(n),void e.fragment.code.add(n)}t.hasSliceInVertexProgram&&e.vertex.uniforms.add(...r),e.fragment.uniforms.add(...r);let a=o`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,s=o`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,i=t.hasSliceHighlight?o`
        ${s}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:o`#define highlightSlice(_color_, _pos_) (_color_)`;t.hasSliceInVertexProgram&&e.vertex.code.add(a),e.fragment.code.add(a),e.fragment.code.add(i)}function kt(e,t,r){return e.instancedDoublePrecision?b(Fr,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]):t.slicePlaneLocalOrigin}function Jt(e,t){return e!=null?Je(Oe,t.origin,e):t.origin}function Zt(e,t,r){return e.hasSliceTranslatedView?t!=null?j(Ir,r.camera.viewMatrix,t):r.camera.viewMatrix:null}function Lr(e,t,r){if(r.slicePlane==null)return te;let a=kt(e,t,r),s=Jt(a,r.slicePlane),i=Zt(e,a,r);return i!=null?ve(Oe,s,i):s}function Yt(e,t,r,a){if(a==null||r.slicePlane==null)return te;let s=kt(e,t,r),i=Jt(s,r.slicePlane),n=Zt(e,s,r);return n!=null?(ke(ie,a,i),ve(Oe,i,n),ve(ie,ie,n),Je(ie,ie,Oe)):a}var Fr=h(),Oe=h(),ie=h(),Ir=O();function ne(e){tt(e),e.vertex.code.add(o`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),e.vertex.code.add(o`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}var Le=class extends T{constructor(t,r){super(t,"mat4",v.Draw,(a,s,i)=>a.setUniformMatrix4fv(t,r(s,i)))}};function Kt(e,t){t.instancedDoublePrecision?e.constants.add("cameraPosition","vec3",te):e.uniforms.add(new _("cameraPosition",(r,a)=>b($t,a.camera.viewInverseTransposeMatrix[3]-r.origin[0],a.camera.viewInverseTransposeMatrix[7]-r.origin[1],a.camera.viewInverseTransposeMatrix[11]-r.origin[2])))}function le(e,t){if(!t.instancedDoublePrecision)return void e.uniforms.add(new F("proj",(a,s)=>s.camera.projectionMatrix),new Le("view",(a,s)=>j(Xt,s.camera.viewMatrix,a.origin)),new _("localOrigin",a=>a.origin));let r=a=>b($t,a.camera.viewInverseTransposeMatrix[3],a.camera.viewInverseTransposeMatrix[7],a.camera.viewInverseTransposeMatrix[11]);e.uniforms.add(new F("proj",(a,s)=>s.camera.projectionMatrix),new F("view",(a,s)=>j(Xt,s.camera.viewMatrix,r(s))),new p("localOrigin",(a,s)=>r(s)))}var Xt=O(),$t=h();function Qt(e){e.uniforms.add(new F("viewNormal",(t,r)=>r.camera.viewInverseTransposeMatrix))}var Fe=class extends y{constructor(){super(),this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map(()=>0):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){let t=this._parameterNames,r={key:this.key};for(let a of t)r[a]=this[a];return r}};function rt(e={}){return(t,r)=>{if(t._parameterNames=t._parameterNames??[],t._parameterNames.push(r),e.constValue!=null)Object.defineProperty(t,r,{get:()=>e.constValue});else{let a=t._parameterNames.length-1,s=e.count||2,i=Math.ceil(Math.log2(s)),n=t._parameterBits??[0],g=0;for(;n[g]+i>16;)g++,g>=n.length&&n.push(0);t._parameterBits=n;let A=n[g],z=(1<<i)-1<<A;n[g]+=i,Object.defineProperty(t,r,{get(){return this[a]},set(C){if(this[a]!==C&&(this[a]=C,this._keyDirty=!0,this._parameterBits[g]=this._parameterBits[g]&~z|+C<<A&z,typeof C!="number"&&typeof C!="boolean"))throw new Error("Configuration value for "+r+" must be boolean or number, got "+typeof C)}})}}}var Ae=class extends Fe{constructor(){super(...arguments),this.instancedDoublePrecision=!1,this.hasModelTransformation=!1}};c([rt()],Ae.prototype,"instancedDoublePrecision",void 0),c([rt()],Ae.prototype,"hasModelTransformation",void 0);var er=G();function ei(e,t){let r=t.hasModelTransformation,a=t.instancedDoublePrecision;r&&(e.vertex.uniforms.add(new F("model",i=>i.modelTransformation??ge)),e.vertex.uniforms.add(new D("normalLocalOriginFromModel",i=>(yt(er,i.modelTransformation??ge),er)))),t.instanced&&a&&(e.attributes.add(l.INSTANCEMODELORIGINHI,"vec3"),e.attributes.add(l.INSTANCEMODELORIGINLO,"vec3"),e.attributes.add(l.INSTANCEMODEL,"mat3"),e.attributes.add(l.INSTANCEMODELNORMAL,"mat3"));let s=e.vertex;a&&(s.include(be,t),s.uniforms.add(new _("viewOriginHi",(i,n)=>Lt(b(Ie,n.camera.viewInverseTransposeMatrix[3],n.camera.viewInverseTransposeMatrix[7],n.camera.viewInverseTransposeMatrix[11]),Ie)),new _("viewOriginLo",(i,n)=>Ft(b(Ie,n.camera.viewInverseTransposeMatrix[3],n.camera.viewInverseTransposeMatrix[7],n.camera.viewInverseTransposeMatrix[11]),Ie)))),s.code.add(o`
    vec3 getVertexInLocalOriginSpace() {
      return ${r?a?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":a?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${a?o`
          // Negated inputs are intentionally the first two arguments. The other way around the obfuscation in dpAdd() stopped
          // working for macOS 14+ and iOS 17+.
          // Issue: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(-instanceModelOriginHi, -instanceModelOriginLo, viewOriginHi, viewOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),s.code.add(o`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${r?a?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":a?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),t.output===u.Normal&&(Qt(s),s.code.add(o`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${r?a?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":a?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),t.hasVertexTangents&&s.code.add(o`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${r?a?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":a?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}var Ie=h();var q=class extends T{constructor(t,r){super(t,"int",v.Pass,(a,s,i)=>a.setUniform1i(t,r(s,i)))}};function Ar(e){return Math.abs(e*e*e)}function zr(e,t,r){let a=r.parameters;return ot.scale=Math.min(a.divisor/(t-a.offset),1),ot.factor=Ar(e),ot}function Rr(e,t){return Ze(e*Math.max(t.scale,t.minScaleFactor),e,t.factor)}function tr(e,t,r,a){return Rr(e,zr(t,r,a))}var li={curvatureDependent:{min:{curvature:re(10),tiltAngle:re(12),scaleFallOffFactor:.5},max:{curvature:re(70),tiltAngle:re(40),scaleFallOffFactor:.8}},scaleStart:.3,scaleFallOffRange:.65,minPixelSize:0};var ot={scale:0,factor:0,minScaleFactor:0};function fi(e,t,r,a,s){let i=(r.screenLength||0)*e.pixelRatio;s!=null&&(i=tr(i,a,t,s));let n=i*Math.tan(.5*e.fovY)/(.5*e.fullHeight);return N(n*t,r.minWorldLength||0,r.maxWorldLength!=null?r.maxWorldLength:1/0)}function at(e,t){let r=t?at(t):{};for(let a in e){let s=e[a];s?.forEach&&(s=Dr(s)),s==null&&a in r||(r[a]=s)}return r}function rr(e,t){let r=!1;for(let a in t){let s=t[a];s!==void 0&&(Array.isArray(s)?e[a]===null?(e[a]=s.slice(),r=!0):ft(e[a],s)&&(r=!0):e[a]!==s&&(r=!0,e[a]=s))}return r}function Dr(e){let t=[];return e.forEach(r=>t.push(r)),t}var or={multiply:1,ignore:2,replace:3,tint:4};function _i(e,t){t.hasSymbolColors?(e.include(It),e.attributes.add(l.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float"),e.vertex.code.add(o`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(e.fragment.uniforms.add(new q("colorMixMode",r=>or[r.colorMixMode])),e.vertex.code.add(o`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}function wi(e,t){t.hasVertexColors?(e.attributes.add(l.COLOR,"vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(o`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add(o`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add(o`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}function ar(e){e.vertex.code.add(o`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),e.vertex.code.add(o`vec3 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec3 params) {
return vec3(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z
);
}`),e.vertex.code.add(o`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),e.vertex.code.add(o`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),e.vertex.code.add(o`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),e.vertex.code.add(o`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function ir(e){e.uniforms.add(new p("screenSizePerspectiveAlignment",t=>Nr(t.screenSizePerspectiveAlignment||t.screenSizePerspective)))}function Nr(e){return b(Gr,e.parameters.divisor,e.parameters.offset,e.minScaleFactor)}var Gr=h();function Ni(e,t){let r=e.vertex;t.hasVerticalOffset?(Vr(r),t.hasScreenSizePerspective&&(e.include(ar),ir(r),Kt(e.vertex,t)),r.code.add(o`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${t.spherical?o`vec3 worldNormal = normalize(worldPos + localOrigin);`:o`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${t.hasScreenSizePerspective?o`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:o`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):r.code.add(o`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}var Hr=oe();function Vr(e){e.uniforms.add(new w("verticalOffset",(t,r)=>{let{minWorldLength:a,maxWorldLength:s,screenLength:i}=t.verticalOffset,n=Math.tan(.5*r.camera.fovY)/(.5*r.camera.fullViewport[3]),g=r.camera.pixelRatio||1;return P(Hr,i*g,n,a,s)}))}var ze=class extends T{constructor(t,r,a){super(t,"vec4",v.Pass,(s,i,n)=>s.setUniform4fv(t,r(i,n)),a)}};var Re=class extends T{constructor(t,r,a){super(t,"float",v.Pass,(s,i,n)=>s.setUniform1fv(t,r(i,n)),a)}};var f=class extends pe{constructor(){super(...arguments),this.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!1,this.DECONFLICTOR_SHOW_VISIBLE=!1,this.DECONFLICTOR_SHOW_INVISIBLE=!1,this.DECONFLICTOR_SHOW_GRID=!1,this.LABELS_SHOW_BORDER=!1,this.TEXT_SHOW_BASELINE=!1,this.TEXT_SHOW_BORDER=!1,this.OVERLAY_DRAW_DEBUG_TEXTURE=!1,this.OVERLAY_SHOW_CENTER=!1,this.SHOW_POI=!1,this.TESTS_DISABLE_OPTIMIZATIONS=!1,this.TESTS_DISABLE_FAST_UPDATES=!1,this.DRAW_MESH_GEOMETRY_NORMALS=!1,this.FEATURE_TILE_FETCH_SHOW_TILES=!1,this.FEATURE_TILE_TREE_SHOW_TILES=!1,this.TERRAIN_TILE_TREE_SHOW_TILES=!1,this.I3S_TREE_SHOW_TILES=!1,this.I3S_SHOW_MODIFICATIONS=!1,this.LOD_INSTANCE_RENDERER_DISABLE_UPDATES=!1,this.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL=!1,this.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES=!1,this.LINE_WIREFRAMES=!1}};c([d()],f.prototype,"SCENEVIEW_HITTEST_RETURN_INTERSECTOR",void 0),c([d()],f.prototype,"DECONFLICTOR_SHOW_VISIBLE",void 0),c([d()],f.prototype,"DECONFLICTOR_SHOW_INVISIBLE",void 0),c([d()],f.prototype,"DECONFLICTOR_SHOW_GRID",void 0),c([d()],f.prototype,"LABELS_SHOW_BORDER",void 0),c([d()],f.prototype,"TEXT_SHOW_BASELINE",void 0),c([d()],f.prototype,"TEXT_SHOW_BORDER",void 0),c([d()],f.prototype,"OVERLAY_DRAW_DEBUG_TEXTURE",void 0),c([d()],f.prototype,"OVERLAY_SHOW_CENTER",void 0),c([d()],f.prototype,"SHOW_POI",void 0),c([d()],f.prototype,"TESTS_DISABLE_OPTIMIZATIONS",void 0),c([d()],f.prototype,"TESTS_DISABLE_FAST_UPDATES",void 0),c([d()],f.prototype,"DRAW_MESH_GEOMETRY_NORMALS",void 0),c([d()],f.prototype,"FEATURE_TILE_FETCH_SHOW_TILES",void 0),c([d()],f.prototype,"FEATURE_TILE_TREE_SHOW_TILES",void 0),c([d()],f.prototype,"TERRAIN_TILE_TREE_SHOW_TILES",void 0),c([d()],f.prototype,"I3S_TREE_SHOW_TILES",void 0),c([d()],f.prototype,"I3S_SHOW_MODIFICATIONS",void 0),c([d()],f.prototype,"LOD_INSTANCE_RENDERER_DISABLE_UPDATES",void 0),c([d()],f.prototype,"LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL",void 0),c([d()],f.prototype,"EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES",void 0),c([d()],f.prototype,"LINE_WIREFRAMES",void 0),f=c([U("esri.views.3d.support.debugFlags")],f);var Br=new f;var sr,nr;(function(e){e[e.Undefined=0]="Undefined",e[e.DefinedSize=1]="DefinedSize",e[e.DefinedScale=2]="DefinedScale"})(sr||(sr={})),function(e){e[e.Undefined=0]="Undefined",e[e.DefinedAngle=1]="DefinedAngle"}(nr||(nr={}));var bs=O(),Ts=h(),ys=O();var Y=new Map([[l.POSITION,0],[l.NORMAL,1],[l.NORMALCOMPRESSED,1],[l.UV0,2],[l.COLOR,3],[l.COLORFEATUREATTRIBUTE,3],[l.SIZE,4],[l.TANGENT,4],[l.CENTEROFFSETANDDISTANCE,5],[l.SYMBOLCOLOR,5],[l.FEATUREATTRIBUTE,6],[l.INSTANCEFEATUREATTRIBUTE,6],[l.INSTANCECOLOR,7],[l.OBJECTANDLAYERIDCOLOR,7],[l.INSTANCEOBJECTANDLAYERIDCOLOR,7],[l.INSTANCEMODEL,8],[l.INSTANCEMODELNORMAL,12],[l.INSTANCEMODELORIGINHI,11],[l.INSTANCEMODELORIGINLO,15]]);var lr=class extends Ot{constructor(t,r){super(),this.type=Pt.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._vertexAttributeLocations=Y,this._pp0=ee(0,0,1),this._pp1=ee(0,0,0),this._parameters=at(t,r),this.validateParameters(this._parameters)}get parameters(){return this._parameters}update(t){return!1}setParameters(t,r=!0){rr(this._parameters,t)&&(this.validateParameters(this._parameters),r&&this.parametersChanged())}validateParameters(t){}get visible(){return this._visible}set visible(t){t!==this._visible&&(this._visible=t,this.parametersChanged())}shouldRender(t){return this.isVisible()&&this.isVisibleForOutput(t.output)&&(!this.parameters.isDecoration||t.bindParameters.decorations===Et.ON)&&!!(this.parameters.renderOccluded&t.renderOccludedMask)}isVisibleForOutput(t){return!0}get renderPriority(){return this._renderPriority}set renderPriority(t){t!==this._renderPriority&&(this._renderPriority=t,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){this.repository?.materialChanged(this)}queryRenderOccludedState(t){return this.isVisible()&&this.parameters.renderOccluded===t}intersectDraped(t,r,a,s,i,n){return this._pp0[0]=this._pp1[0]=s[0],this._pp0[1]=this._pp1[1]=s[1],this.intersect(t,r,a,this._pp0,this._pp1,i)}};var it;(function(e){e[e.None=0]="None",e[e.Occlude=1]="Occlude",e[e.Transparent=2]="Transparent",e[e.OccludeAndTransparent=4]="OccludeAndTransparent",e[e.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",e[e.Opaque=16]="Opaque"})(it||(it={}));var De=8;function Ne(e,t){let{vertex:r,attributes:a}=e;t.hasVvInstancing&&(t.vvSize||t.vvColor)&&a.add(l.INSTANCEFEATUREATTRIBUTE,"vec4"),t.vvSize?(r.uniforms.add(new p("vvSizeMinSize",s=>s.vvSize.minSize)),r.uniforms.add(new p("vvSizeMaxSize",s=>s.vvSize.maxSize)),r.uniforms.add(new p("vvSizeOffset",s=>s.vvSize.offset)),r.uniforms.add(new p("vvSizeFactor",s=>s.vvSize.factor)),r.uniforms.add(new D("vvSymbolRotationMatrix",s=>s.vvSymbolRotationMatrix)),r.uniforms.add(new p("vvSymbolAnchor",s=>s.vvSymbolAnchor)),r.code.add(o`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),r.code.add(o`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${t.hasVvInstancing?o`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):r.code.add(o`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),t.vvColor?(r.constants.add("vvColorNumber","int",De),r.uniforms.add(new Re("vvColorValues",s=>s.vvColor.values,De),new ze("vvColorColors",s=>s.vvColor.colors,De)),r.code.add(o`
      vec4 interpolateVVColor(float value) {
        if (value <= vvColorValues[0]) {
          return vvColorColors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (vvColorValues[i] >= value) {
            float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
            return mix(vvColorColors[i-1], vvColorColors[i], f);
          }
        }
        return vvColorColors[vvColorNumber - 1];
      }

      vec4 vvGetColor(vec4 featureAttribute) {
        return interpolateVVColor(featureAttribute.y);
      }

      ${t.hasVvInstancing?o`
            vec4 vvColor() {
              return vvGetColor(instanceFeatureAttribute);
            }`:"vec4 vvColor() { return vec4(1.0); }"}
    `)):r.code.add(o`vec4 vvColor() { return vec4(1.0); }`)}function cr(e){e.fragment.code.add(o`
    #define discardOrAdjustAlpha(color) { if (color.a < ${o.float(.001)}) { discard; } }
  `)}function ce(e,t){Wr(e,t,new H("textureAlphaCutoff",r=>r.textureAlphaCutoff))}function Wr(e,t,r){let a=e.fragment;switch(t.alphaDiscardMode!==L.Mask&&t.alphaDiscardMode!==L.MaskBlend||a.uniforms.add(r),t.alphaDiscardMode){case L.Blend:return e.include(cr);case L.Opaque:a.code.add(o`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case L.Mask:a.code.add(o`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case L.MaskBlend:e.fragment.code.add(o`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}function dr(e,t){let r=t.output===u.ObjectAndLayerIdColor,a=t.objectAndLayerIdColorInstanced;r&&(e.varyings.add("objectAndLayerIdColorVarying","vec4"),a?e.attributes.add(l.INSTANCEOBJECTANDLAYERIDCOLOR,"vec4"):e.attributes.add(l.OBJECTANDLAYERIDCOLOR,"vec4")),e.vertex.code.add(o`
     void forwardObjectAndLayerIdColor() {
      ${r?a?o`objectAndLayerIdColorVarying = instanceObjectAndLayerIdColor * 0.003921568627451;`:o`objectAndLayerIdColorVarying = objectAndLayerIdColor * 0.003921568627451;`:o``} }`),e.fragment.code.add(o`
      void outputObjectAndLayerIdColor() {
        ${r?o`fragColor = objectAndLayerIdColorVarying;`:o``} }`)}function Ge(e){e.code.add(o`const float MAX_RGBA4_FLOAT =
15.0 / 16.0 +
15.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 / 16.0;
const vec4 FIXED_POINT_FACTORS_RGBA4 = vec4(1.0, 16.0, 16.0 * 16.0, 16.0 * 16.0 * 16.0);
vec4 floatToRgba4(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA4_FLOAT);
vec4 fixedPointU4 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS_RGBA4) * 16.0);
const float toU4AsFloat = 1.0 / 15.0;
return fixedPointU4 * toU4AsFloat;
}
const vec4 RGBA4_2_FLOAT_FACTORS = vec4(
15.0 / (16.0),
15.0 / (16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0 * 16.0)
);
float rgba4ToFloat(vec4 rgba) {
return dot(rgba, RGBA4_2_FLOAT_FACTORS);
}`)}function mr(e,t){switch(t.output){case u.Shadow:case u.ShadowHighlight:case u.ShadowExcludeHighlight:case u.ViewshedShadow:e.fragment.include(Ge),e.fragment.code.add(o`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth) {
fragColor = floatToRgba4(_calculateFragDepth(_linearDepth));
}`)}}var qr=Xe(1,1,0,1),Yr=Xe(1,0,1,1);function ur(e){e.fragment.uniforms.add(new S("depthTexture",(t,r)=>r.mainDepth)),e.fragment.constants.add("occludedHighlightFlag","vec4",qr).add("unoccludedHighlightFlag","vec4",Yr),e.fragment.code.add(o`void outputHighlight() {
float sceneDepth = float(texelFetch(depthTexture, ivec2(gl_FragCoord.xy), 0).x);
if (gl_FragCoord.z > sceneDepth + 5e-7) {
fragColor = occludedHighlightFlag;
} else {
fragColor = unoccludedHighlightFlag;
}
}`)}function Bn(e,t){let{vertex:r,fragment:a}=e,s=t.hasColorTexture&&t.alphaDiscardMode!==L.Opaque;switch(t.output){case u.Depth:le(r,t),e.include(ne,t),e.include(se,t),e.include(V,t),s&&a.uniforms.add(new S("tex",i=>i.texture)),r.code.add(o`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),e.include(ce,t),a.code.add(o`
          void main(void) {
            discardBySlice(vpos);
            ${s?o`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?o`colorUV`:o`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
          }
        `);break;case u.Shadow:case u.ShadowHighlight:case u.ShadowExcludeHighlight:case u.ViewshedShadow:case u.ObjectAndLayerIdColor:le(r,t),e.include(ne,t),e.include(V,t),e.include(Ne,t),e.include(mr,t),e.include(se,t),e.include(dr,t),et(e),e.varyings.add("depth","float"),s&&a.uniforms.add(new S("tex",i=>i.texture)),r.code.add(o`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();
}`),e.include(ce,t),a.code.add(o`
          void main(void) {
            discardBySlice(vpos);
            ${s?o`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?o`colorUV`:o`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            ${t.output===u.ObjectAndLayerIdColor?o`outputObjectAndLayerIdColor();`:o`outputDepth(depth);`}
          }
        `);break;case u.Normal:{le(r,t),e.include(ne,t),e.include(_e,t),e.include(Wt,t),e.include(V,t),e.include(Ne,t),s&&a.uniforms.add(new S("tex",n=>n.texture)),t.normalType===E.ScreenDerivative&&e.varyings.add("vPositionView","vec3");let i=t.normalType===E.Attribute||t.normalType===E.Compressed;r.code.add(o`
          void main(void) {
            vpos = getVertexInLocalOriginSpace();

            ${i?o`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:o`
                  // Get vertex position in camera space for screen-space derivative normals
                  vPositionView = (view * vec4(vpos, 1.0)).xyz;
                `}
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            forwardTextureCoordinates();
          }
        `),e.include(se,t),e.include(ce,t),a.code.add(o`
          void main() {
            discardBySlice(vpos);
            ${s?o`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?o`colorUV`:o`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}

            ${t.normalType===E.ScreenDerivative?o`vec3 normal = screenDerivativeNormal(vPositionView);`:o`
                  vec3 normal = normalize(vNormalWorld);
                  if (gl_FrontFacing == false){
                    normal = -normal;
                  }`}
            fragColor = vec4(0.5 + 0.5 * normal, 1.0);
          }
        `);break}case u.Highlight:le(r,t),e.include(ne,t),e.include(V,t),e.include(Ne,t),s&&a.uniforms.add(new S("tex",i=>i.texture)),r.code.add(o`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),e.include(se,t),e.include(ce,t),e.include(ur,t),a.code.add(o`
          void main() {
            discardBySlice(vpos);
            ${s?o`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?o`colorUV`:o`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            outputHighlight();
          }
        `)}}var B,fr;(function(e){e[e.RED=0]="RED",e[e.RG=1]="RG",e[e.RGBA4=2]="RGBA4",e[e.RGBA=3]="RGBA",e[e.RGBA_MIPMAP=4]="RGBA_MIPMAP",e[e.R16F=5]="R16F",e[e.RGBA16F=6]="RGBA16F"})(B||(B={})),function(e){e[e.DEPTH_STENCIL_TEXTURE=0]="DEPTH_STENCIL_TEXTURE",e[e.DEPTH16_BUFFER=1]="DEPTH16_BUFFER"}(fr||(fr={}));var k=class extends pe{constructor(e){super(e),this.view=null,this.consumes={required:[]},this.produces="composite-color",this._context=null,this._dirty=!0}initialize(){this.addHandles([he(()=>this.view.ready,e=>{e&&this.view._stage?.renderer.addRenderNode(this)},gt)])}destroy(){this.view._stage?.renderer?.removeRenderNode(this)}render(){throw new pt("RenderNode:render-function-not-implemented","render() is not implemented.")}get camera(){return this.view.state.camera.clone()}get sunLight(){return this.bindParameters.lighting.legacy}get gl(){return this.view._stage.renderView.renderingContext.gl}acquireOutputFramebuffer(){let e=this._frameBuffer?.getTexture()?.descriptor,t=this.view._stage.renderer.fboCache.acquire(e?.width??640,e?.height??480,this.produces);return t.fbo?.initializeAndBind(),t}bindRenderTarget(){return this._frameBuffer?.fbo?.initializeAndBind(),this._frameBuffer}requestRender(e){e===xe.UPDATE&&this.view._stage?.renderView.requestRender(e),this._dirty=!0}resetWebGLState(){this.renderingContext.resetState(),this.renderingContext.bindFramebuffer(this._frameBuffer?.fbo)}get fboCache(){return this.view._stage.renderer.fboCache}get bindParameters(){return this._context.bindParameters}get renderingContext(){return this.view._stage.renderView.renderingContext}updateAnimation(){return!!this._dirty&&(this._dirty=!1,!0)}doRender(e,t){this._context=t,this._frameBuffer=e.find(({name:r})=>r===this.produces);try{return this.render(e)}finally{this._frameBuffer=null}}};c([d({constructOnly:!0})],k.prototype,"view",void 0),c([d({constructOnly:!0})],k.prototype,"consumes",void 0),c([d()],k.prototype,"produces",void 0),k=c([U("esri.views.3d.webgl.RenderNode")],k);var pr=k;var J=class{constructor(t,r){this._module=t,this._loadModule=r}get(){return this._module}reload(){return ut(this,null,function*(){return this._module=yield this._loadModule(),this._module})}};var Z=class{constructor(t,r,a){this.release=a,this.initializeConfiguration(t,r),this._configuration=r.snapshot(),this._program=this.initializeProgram(t),this._pipeline=this.initializePipeline(t)}destroy(){this._program=Q(this._program),this._pipeline=this._configuration=null}reload(t){Q(this._program),this._program=this.initializeProgram(t),this._pipeline=this.initializePipeline(t)}get program(){return this._program}get compiled(){return this.program.compiled}get key(){return this._configuration.key}get configuration(){return this._configuration}ensureAttributeLocations(t){this.program.assertCompatibleVertexAttributeLocations(t)}get primitiveType(){return _t.TRIANGLES}getPipeline(t,r,a){return this._pipeline}initializeConfiguration(t,r){}};var X=class{constructor(t,r,a){this._context=t,this._locations=a,this._textures=new Map,this._freeTextureUnits=new ht({deallocator:null}),this._glProgram=t.programCache.acquire(r.generate("vertex"),r.generate("fragment"),a),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=r.generateBindPass(this),this.bindDraw=r.generateBindDraw(this),this._fragmentUniforms=wt()?r.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get hasTransformFeedbackVaryings(){return this._glProgram.hasTransformFeedbackVaryings}get compiled(){return this._glProgram.compiled}setUniform1b(t,r){this._glProgram.setUniform1i(t,r?1:0)}setUniform1i(t,r){this._glProgram.setUniform1i(t,r)}setUniform1f(t,r){this._glProgram.setUniform1f(t,r)}setUniform2fv(t,r){this._glProgram.setUniform2fv(t,r)}setUniform3fv(t,r){this._glProgram.setUniform3fv(t,r)}setUniform4fv(t,r){this._glProgram.setUniform4fv(t,r)}setUniformMatrix3fv(t,r){this._glProgram.setUniformMatrix3fv(t,r)}setUniformMatrix4fv(t,r){this._glProgram.setUniformMatrix4fv(t,r)}setUniform1fv(t,r){this._glProgram.setUniform1fv(t,r)}setUniform1iv(t,r){this._glProgram.setUniform1iv(t,r)}setUniform2iv(t,r){this._glProgram.setUniform3iv(t,r)}setUniform3iv(t,r){this._glProgram.setUniform3iv(t,r)}setUniform4iv(t,r){this._glProgram.setUniform4iv(t,r)}assertCompatibleVertexAttributeLocations(t){t.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(t,r){if(r?.glName==null){let s=this._textures.get(t);return s&&(this._context.bindTexture(null,s.unit),this._freeTextureUnit(s),this._textures.delete(t)),null}let a=this._textures.get(t);return a==null?(a=this._allocTextureUnit(r),this._textures.set(t,a)):a.texture=r,this._context.useProgram(this),this.setUniform1i(t,a.unit),this._context.bindTexture(r,a.unit),a.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach((t,r)=>{this._context.bindTexture(t.texture,t.unit),this.setUniform1i(r,t.unit)}),this._fragmentUniforms?.forEach(t=>{t.type!=="sampler2D"&&t.type!=="samplerCube"||this._textures.has(t.name)||console.error(`Texture sampler ${t.name} has no bound texture`)})}_allocTextureUnit(t){return{texture:t,unit:this._freeTextureUnits.length===0?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(t){this._freeTextureUnits.push(t.unit)}};var de=class e extends Z{initializeProgram(t){return new X(t.rctx,e.shader.get().build(),Y)}initializePipeline(){return we({colorWrite:ye})}};de.shader=new J(Rt,()=>import("./chunk-NNVGUDKW.js"));var hr="eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM";var st=class extends y{constructor(){super(...arguments),this.projScale=1}},He=class extends st{constructor(){super(...arguments),this.intensity=1}},nt=class extends y{},Ve=class extends nt{constructor(){super(...arguments),this.blurSize=xt()}};var me=class e extends Z{initializeProgram(t){return new X(t.rctx,e.shader.get().build(),Y)}initializePipeline(){return we({colorWrite:ye})}};me.shader=new J(Nt,()=>import("./chunk-GRNXPARF.js"));var $=2,K=class extends pr{constructor(e){super(e),this.consumes={required:["normals"]},this.produces="ssao",this.isEnabled=()=>!1,this._enableTime=0,this._passParameters=new He,this._drawParameters=new Ve}initialize(){let e=Uint8Array.from(atob(hr),r=>r.charCodeAt(0)),t=new Mt;t.wrapMode=$e.CLAMP_TO_EDGE,t.pixelFormat=bt.RGB,t.wrapMode=$e.REPEAT,t.hasMipmap=!0,t.width=32,t.height=32,this._passParameters.noiseTexture=new Ct(this.renderingContext,t,e),this._ssaoTechnique=this.techniques.acquire(me),this._blurTechnique=this.techniques.acquire(de),this.addHandles(he(()=>this.isEnabled(),()=>this._enableTime=0))}destroy(){this._passParameters.noiseTexture=Q(this._passParameters.noiseTexture),this._blurTechnique.release(),this._ssaoTechnique.release()}render(e){let t=this.bindParameters,r=e.find(({name:Er})=>Er==="normals"),a=r?.getTexture(),s=r?.getTexture(Tt),i=this.fboCache,n=t.camera,g=n.fullViewport[2],A=n.fullViewport[3],z=Math.round(g/$),C=Math.round(A/$);if(!this._ssaoTechnique.compiled||!this._blurTechnique.compiled)return this._enableTime=performance.now(),this.requestRender(),i.acquire(z,C,"ssao",B.RED);this._enableTime===0&&(this._enableTime=performance.now());let x=this.renderingContext,qe=this.view.qualitySettings.fadeDuration,Mr=n.relativeElevation,Cr=N((5e5-Mr)/2e5,0,1),mt=qe>0?Math.min(qe,performance.now()-this._enableTime)/qe:1,Pr=mt*Cr;this._passParameters.normalTexture=a,this._passParameters.depthTexture=s,this._passParameters.projScale=1/n.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*Jr/Dt(n)**6*Pr;let ue=i.acquire(g,A,"ssao input",B.RG);x.unbindTexture(ue.fbo.colorTexture),x.bindFramebuffer(ue.fbo),x.setViewport(0,0,g,A),x.bindTechnique(this._ssaoTechnique,t,this._passParameters,this._drawParameters),x.screen.draw();let fe=i.acquire(z,C,"ssao blur",B.RED);x.unbindTexture(fe.fbo.colorTexture),x.bindFramebuffer(fe.fbo),this._drawParameters.colorTexture=ue.getTexture(),Ke(this._drawParameters.blurSize,0,$/A),x.bindTechnique(this._blurTechnique,t,this._passParameters,this._drawParameters),x.setViewport(0,0,z,C),x.screen.draw(),ue.release();let Ye=i.acquire(z,C,"ssao",B.RED);return x.unbindTexture(Ye.fbo.colorTexture),x.bindFramebuffer(Ye.fbo),x.setViewport(0,0,g,A),x.setClearColor(1,1,1,0),x.clear(St.COLOR_BUFFER_BIT),this._drawParameters.colorTexture=fe.getTexture(),Ke(this._drawParameters.blurSize,$/g,0),x.bindTechnique(this._blurTechnique,t,this._passParameters,this._drawParameters),x.setViewport(0,0,z,C),x.screen.draw(),x.setViewport4fv(n.fullViewport),fe.release(),mt<1&&this.requestRender(xe.UPDATE),Ye}};c([d()],K.prototype,"consumes",void 0),c([d()],K.prototype,"produces",void 0),c([d({constructOnly:!0})],K.prototype,"techniques",void 0),c([d({constructOnly:!0})],K.prototype,"isEnabled",void 0),K=c([U("esri.views.3d.webgl-engine.effects.ssao.SSAO")],K);var Jr=.5;function gr(e,t){let r=e.fragment;t.receiveAmbientOcclusion?(r.uniforms.add(new S("ssaoTex",(a,s)=>s.ssao?.getTexture())),r.constants.add("blurSizePixelsInverse","float",1/$),r.code.add(o`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):r.code.add(o`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}function lt(e){e.uniforms.add(new p("mainLightDirection",(t,r)=>r.lighting.mainLight.direction))}function ct(e){e.uniforms.add(new p("mainLightIntensity",(t,r)=>r.lighting.mainLight.intensity))}function dt(e){lt(e.fragment),ct(e.fragment),e.fragment.code.add(o`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadowing) * dotVal);
}`)}function xr(e){let t=e.fragment.code;t.add(o`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),t.add(o`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),t.add(o`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function Be(e){e.vertex.code.add(o`const float PI = 3.141592653589793;`),e.fragment.code.add(o`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}function Sr(e,t){let r=e.fragment.code;e.include(Be),t.pbrMode!==m.Normal&&t.pbrMode!==m.Schematic&&t.pbrMode!==m.Simplified&&t.pbrMode!==m.TerrainWithWater||(r.add(o`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add(o`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),t.pbrMode!==m.Normal&&t.pbrMode!==m.Schematic||(e.include(xr),r.add(o`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),r.add(o`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add(o`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add(o`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}function br(e,t){let r=e.fragment,a=t.lightingSphericalHarmonicsOrder!==void 0?t.lightingSphericalHarmonicsOrder:2;a===0?(r.uniforms.add(new p("lightingAmbientSH0",(s,i)=>b(_r,i.lighting.sh.r[0],i.lighting.sh.g[0],i.lighting.sh.b[0]))),r.code.add(o`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):a===1?(r.uniforms.add(new w("lightingAmbientSH_R",(s,i)=>P(I,i.lighting.sh.r[0],i.lighting.sh.r[1],i.lighting.sh.r[2],i.lighting.sh.r[3])),new w("lightingAmbientSH_G",(s,i)=>P(I,i.lighting.sh.g[0],i.lighting.sh.g[1],i.lighting.sh.g[2],i.lighting.sh.g[3])),new w("lightingAmbientSH_B",(s,i)=>P(I,i.lighting.sh.b[0],i.lighting.sh.b[1],i.lighting.sh.b[2],i.lighting.sh.b[3]))),r.code.add(o`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):a===2&&(r.uniforms.add(new p("lightingAmbientSH0",(s,i)=>b(_r,i.lighting.sh.r[0],i.lighting.sh.g[0],i.lighting.sh.b[0])),new w("lightingAmbientSH_R1",(s,i)=>P(I,i.lighting.sh.r[1],i.lighting.sh.r[2],i.lighting.sh.r[3],i.lighting.sh.r[4])),new w("lightingAmbientSH_G1",(s,i)=>P(I,i.lighting.sh.g[1],i.lighting.sh.g[2],i.lighting.sh.g[3],i.lighting.sh.g[4])),new w("lightingAmbientSH_B1",(s,i)=>P(I,i.lighting.sh.b[1],i.lighting.sh.b[2],i.lighting.sh.b[3],i.lighting.sh.b[4])),new w("lightingAmbientSH_R2",(s,i)=>P(I,i.lighting.sh.r[5],i.lighting.sh.r[6],i.lighting.sh.r[7],i.lighting.sh.r[8])),new w("lightingAmbientSH_G2",(s,i)=>P(I,i.lighting.sh.g[5],i.lighting.sh.g[6],i.lighting.sh.g[7],i.lighting.sh.g[8])),new w("lightingAmbientSH_B2",(s,i)=>P(I,i.lighting.sh.b[5],i.lighting.sh.b[6],i.lighting.sh.b[7],i.lighting.sh.b[8]))),r.code.add(o`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),t.pbrMode!==m.Normal&&t.pbrMode!==m.Schematic||r.code.add(o`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}var _r=h(),I=oe();var Ue=class extends T{constructor(t,r){super(t,"bool",v.Pass,(a,s,i)=>a.setUniform1b(t,r(s,i)))}};var Hc=h();var Tr=.4;var Zc=h();function $r(e){e.constants.add("ambientBoostFactor","float",Tr)}function Qr(e){e.uniforms.add(new H("lightingGlobalFactor",(t,r)=>r.lighting.globalFactor))}function ld(e,t){let r=e.fragment;switch(e.include(gr,t),t.pbrMode!==m.Disabled&&e.include(Sr,t),e.include(br,t),e.include(Be),r.code.add(o`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${t.pbrMode===m.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),$r(r),Qr(r),lt(r),r.code.add(o`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${t.spherical?o`normalize(vPosWorld)`:o`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),ct(r),r.code.add(o`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),t.pbrMode){case m.Disabled:case m.WaterOnIntegratedMesh:case m.Water:e.include(dt),r.code.add(o`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case m.Normal:case m.Schematic:r.code.add(o`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),r.code.add(o`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),t.useFillLights?r.uniforms.add(new Ue("hasFillLights",(a,s)=>s.enableFillLights)):r.constants.add("hasFillLights","bool",!1),r.code.add(o`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),r.uniforms.add(new H("lightingSpecularStrength",(a,s)=>s.lighting.mainLight.specularStrength),new H("lightingEnvironmentStrength",(a,s)=>s.lighting.mainLight.environmentStrength)),r.code.add(o`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),r.code.add(o`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = _emission == vec3(0.0) ? _emission : pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${t.pbrMode!==m.Schematic||t.hasColorTexture?o`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`:o`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case m.Simplified:case m.TerrainWithWater:e.include(dt),r.code.add(o`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluatePBRSimplifiedLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = pow(c, vec3(GAMMA_SRGB));
float lightness = 0.3 * albedoLinear[0] + 0.5 * albedoLinear[1] + 0.2 * albedoLinear[2];
vec3 f0 = (0.85 * lightness + 0.15) * fresnelReflectionTerrain;
vec3 f90 =  vec3(clamp(dot(f0, vec3(50.0 * 0.33)), 0.0, 1.0));
vec3 mainLightIrradianceComponent = (1. - shadow) * NdotL * mainLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(n, ssao) + al;
vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;
vec3 indirectDiffuse = ((1.0 - NdotNG) * mainLightIrradianceComponent + (1.0 + NdotNG ) * ambientSky) * 0.5;
vec3 outDiffColor = albedoLinear * (1.0 - f0) * indirectDiffuse / PI;
vec3 mainLightRadianceComponent = normalDistribution(NdotH, roughnessTerrain) * mainLightIntensity;
vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, NdotV);
vec3 specularColor = f0 * dfg.x + f90 * dfg.y;
vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;
vec3 outColorLinear = outDiffColor + specularComponent;
vec3 outColor = pow(outColorLinear, vec3(INV_GAMMA_SRGB));
return outColor;
}`);break;default:t.pbrMode;case m.COUNT:}}function fd(e,t){if(!t.multipassEnabled)return;e.fragment.include(zt),e.fragment.uniforms.add(new S("terrainDepthTexture",(a,s)=>s.multipassTerrain.depth?.attachment));let r=t.occlusionPass;e.fragment.code.add(o`
   ${r?"bool":"void"} terrainDepthTest(float fragmentDepth) {
      float depth = texelFetch(terrainDepthTexture, ivec2(gl_FragCoord.xy), 0).r;
      float linearDepth = linearizeDepth(depth);
      ${r?o`return fragmentDepth < linearDepth && depth < 1.0;`:o`
          if(fragmentDepth ${t.cullAboveGround?">":"<="} linearDepth){
            discard;
          }`}
    }`)}var je=class extends T{constructor(t,r,a){super(t,"mat4",v.Draw,(s,i,n,g)=>s.setUniformMatrix4fv(t,r(i,n,g)),a)}};var We=class extends T{constructor(t,r,a){super(t,"mat4",v.Pass,(s,i,n)=>s.setUniformMatrix4fv(t,r(i,n)),a)}};function Ld(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new We("shadowMapMatrix",(r,a)=>a.shadowMap.getShadowMapMatrices(r.origin),4)),yr(e))}function Fd(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new je("shadowMapMatrix",(r,a)=>a.shadowMap.getShadowMapMatrices(r.origin),4)),yr(e))}function yr(e){let t=e.fragment;t.include(Ge),t.uniforms.add(new S("shadowMap",(r,a)=>a.shadowMap.depthTexture),new q("numCascades",(r,a)=>a.shadowMap.numCascades),new w("cascadeDistances",(r,a)=>a.shadowMap.cascadeDistances)),t.code.add(o`int chooseCascade(float depth, out mat4 mat) {
vec4 distance = cascadeDistances;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, ivec2 textureSize, vec3 lvpos) {
float xScale = float(textureSize.y) / float(textureSize.x);
return vec2((float(i) + lvpos.x) * xScale, lvpos.y);
}
float readShadowMapDepth(ivec2 uv, sampler2D _depthTex) {
return rgba4ToFloat(texelFetch(_depthTex, uv, 0));
}
float posIsInShadow(ivec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, ivec2 texSize, sampler2D _depthTex) {
vec2 st = fract(uv * vec2(texSize) + vec2(0.5));
ivec2 base = ivec2(uv * vec2(texSize) - vec2(0.5));
float s00 = posIsInShadow(ivec2(base.x, base.y), lvpos, _depthTex);
float s10 = posIsInShadow(ivec2(base.x + 1, base.y), lvpos, _depthTex);
float s11 = posIsInShadow(ivec2(base.x + 1, base.y + 1), lvpos, _depthTex);
float s01 = posIsInShadow(ivec2(base.x, base.y + 1), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
ivec2 size = textureSize(shadowMap, 0);
vec2 uv = cascadeCoordinates(i, size, lvpos);
return filterShadow(uv, lvpos, size, shadowMap);
}`)}function wr(e){e.code.add(o`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}function Gd(e){e.include(wr),e.code.add(o`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${o.int(W.Multiply)}) {
        return allMixed;
      }
      if (mode == ${o.int(W.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${o.int(W.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${o.int(W.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${o.int(W.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}export{M as a,V as b,Ht as c,Vt as d,m as e,Eo as f,Y as g,fi as h,lr as i,it as j,Bt as k,Ut as l,Wt as m,jt as n,J as o,Z as p,X as q,na as r,da as s,se as t,ne as u,Kt as v,le as w,rt as x,Ae as y,ei as z,_i as A,wi as B,Ni as C,Ne as D,ce as E,Bn as F,gr as G,lt as H,ct as I,Sr as J,$r as K,Qr as L,ld as M,fd as N,Ld as O,Fd as P,Gd as Q};
