"use strict";(self.webpackChunkangular_18_test=self.webpackChunkangular_18_test||[]).push([[8908],{75915:(Me,Z,_)=>{_.d(Z,{D:()=>ot,b:()=>pe});var P=_(18238),R=_(43208),B=_(74567),I=_(29359),y=_(93877),A=_(20367),w=_(34416),X=_(79052),b=_(67334),V=_(66874),de=_(23388),ee=_(17304),U=_(81077),D=_(27961),re=_(28799),ue=_(39190),oe=_(62770),Y=_(44987),he=_(94031),z=_(6698),ne=_(87522),q=_(9933),Q=_(55189),N=_(41377),te=_(98541),le=_(21589),me=_(79110),Ee=_(19213),ye=_(3906),nt=_(88791),at=_(18356),_t=_(65840),He=_(93093),lt=_(56857),ct=_(35089),Te=_(83415),be=_(40972);function pe(ge){const De=new lt.N5,{vertex:ut,fragment:k,varyings:Oe}=De;if((0,ye.NB)(ut,ge),De.include(X.I),Oe.add("vpos","vec3"),De.include(te.A,ge),De.include(A.BK,ge),De.include(U.G,ge),De.include(N.q2,ge),ge.output===B.V.Color){De.include(N.Sx,ge),De.include(N.MU,ge),De.include(N.O1,ge),De.include(N.QM,ge),(0,ye.yu)(ut,ge),De.include(w.Y,ge),De.include(y.d,ge);const xe=ge.normalType===w.W.Attribute||ge.normalType===w.W.Compressed;xe&&ge.offsetBackfaces&&De.include(R.M),De.include(re.W,ge),De.include(ee.Mh,ge),ge.instancedColor&&De.attributes.add(be.r.INSTANCECOLOR,"vec4"),Oe.add("vPositionLocal","vec3"),De.include(V.U,ge),De.include(P.oD,ge),De.include(b.K,ge),De.include(de.c,ge),ut.uniforms.add(new at.E("externalColor",Re=>Re.externalColor)),Oe.add("vcolorExt","vec4"),ge.multipassEnabled&&Oe.add("depth","float"),ut.code.add(He.H`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${ge.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${He.H.float(le.y)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = getVertexInLocalOriginSpace();
          vPositionLocal = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${xe?He.H`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${ge.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${xe&&ge.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${ge.multipassEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        forwardColorUV();
        forwardNormalUV();
        forwardEmissiveUV();
        forwardOcclusionUV();
        forwardMetallicRoughnessUV();
      }
    `),De.include(I.HQ,ge),De.include(oe.kA,ge),De.include(ue.n,ge),De.include(me.S,ge),De.include(ge.instancedDoublePrecision?Q.G:Q.Bz,ge),De.include(he.Q,ge),(0,ye.yu)(k,ge),k.uniforms.add(ut.uniforms.get("localOrigin"),new nt.t("ambient",Re=>Re.ambient),new nt.t("diffuse",Re=>Re.diffuse),new _t.m("opacity",Re=>Re.opacity),new _t.m("layerOpacity",Re=>Re.layerOpacity)),ge.hasColorTexture&&k.uniforms.add(new ct.N("tex",Re=>Re.texture)),De.include(q._Z,ge),De.include(ne.c,ge),k.include(Ee.N),De.include(z.r,ge),(0,oe.a8)(k),(0,oe.eU)(k),(0,Y.O4)(k),ge.transparencyPassType===Te.y.ColorAlpha&&(De.outputs.add("fragColor","vec4",0),De.outputs.add("fragAlpha","float",1)),k.code.add(He.H`
      void main() {
        discardBySlice(vpos);
        ${ge.multipassEnabled?"terrainDepthTest(depth);":""}
        ${ge.hasColorTexture?He.H`
                vec4 texColor = texture(tex, ${ge.hasColorTextureTransform?He.H`colorUV`:He.H`vuv0`});
                ${ge.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:He.H`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${ge.normalType===w.W.ScreenDerivative?He.H`
                vec3 normal = screenDerivativeNormal(vPositionLocal);`:He.H`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${ge.pbrMode===q.A9.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${ge.receiveShadows?"readShadowMap(vpos, linearDepth)":ge.spherical?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${ge.hasVertexColors?He.H`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:He.H`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${ge.hasNormalTexture?He.H`
                mat3 tangentSpace = ${ge.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, ${ge.hasNormalTextureTransform?He.H`normalUV`:"vuv0"});`:He.H`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${ge.spherical?He.H`normalize(posWorld);`:He.H`vec3(0.0, 0.0, 1.0);`}

        ${ge.snowCover?He.H`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${ge.pbrMode===q.A9.Normal||ge.pbrMode===q.A9.Schematic?He.H`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${ge.snowCover?He.H`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:He.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${ge.transparencyPassType===Te.y.ColorAlpha?He.H`
                  fragColor = premultiplyAlpha(fragColor);
                  fragAlpha = fragColor.a;`:""}
      }
    `)}return De.include(D.E,ge),De}const ot=Object.freeze(Object.defineProperty({__proto__:null,build:pe},Symbol.toStringTag,{value:"Module"}))},34187:(Me,Z,_)=>{_.d(Z,{R:()=>ct,b:()=>lt});var P=_(18238),R=_(43208),B=_(74567),I=_(29359),y=_(93877),A=_(20367),w=_(34416),X=_(79052),b=_(67334),V=_(66874),de=_(23388),ee=_(81077),U=_(27961),D=_(39190),re=_(62770),ue=_(44987),oe=_(94031),Y=_(87522),he=_(9933),z=_(55189),ne=_(98541),q=_(21589),Q=_(79110),N=_(19213),te=_(3906),le=_(88791),me=_(18356),Ee=_(65840),ye=_(93093),nt=_(56857),at=_(35089),_t=_(83415),He=_(40972);function lt(Te){const be=new nt.N5,{vertex:pe,fragment:ot,varyings:ge}=be;return(0,te.NB)(pe,Te),be.include(X.I),ge.add("vpos","vec3"),be.include(ne.A,Te),be.include(A.BK,Te),be.include(ee.G,Te),Te.output===B.V.Color&&((0,te.yu)(be.vertex,Te),be.include(w.Y,Te),be.include(y.d,Te),Te.offsetBackfaces&&be.include(R.M),Te.instancedColor&&be.attributes.add(He.r.INSTANCECOLOR,"vec4"),ge.add("vNormalWorld","vec3"),ge.add("localvpos","vec3"),Te.multipassEnabled&&ge.add("depth","float"),be.include(V.U,Te),be.include(P.oD,Te),be.include(b.K,Te),be.include(de.c,Te),pe.uniforms.add(new me.E("externalColor",De=>De.externalColor)),ge.add("vcolorExt","vec4"),pe.code.add(ye.H`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${Te.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${ye.H.float(q.y)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = getVertexInLocalOriginSpace();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${Te.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${Te.multipassEnabled?ye.H`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),Te.output===B.V.Color&&(be.include(I.HQ,Te),be.include(re.kA,Te),be.include(D.n,Te),be.include(Q.S,Te),be.include(Te.instancedDoublePrecision?z.G:z.Bz,Te),be.include(oe.Q,Te),(0,te.yu)(be.fragment,Te),(0,ue.Gc)(ot),(0,re.a8)(ot),(0,re.eU)(ot),ot.uniforms.add(pe.uniforms.get("localOrigin"),pe.uniforms.get("view"),new le.t("ambient",De=>De.ambient),new le.t("diffuse",De=>De.diffuse),new Ee.m("opacity",De=>De.opacity),new Ee.m("layerOpacity",De=>De.layerOpacity)),Te.hasColorTexture&&ot.uniforms.add(new at.N("tex",De=>De.texture)),be.include(he._Z,Te),be.include(Y.c,Te),ot.include(N.N),Te.transparencyPassType===_t.y.ColorAlpha&&(be.outputs.add("fragColor","vec4",0),be.outputs.add("fragAlpha","float",1)),(0,ue.O4)(ot),ot.code.add(ye.H`
      void main() {
        discardBySlice(vpos);
        ${Te.multipassEnabled?ye.H`terrainDepthTest(depth);`:""}
        ${Te.hasColorTexture?ye.H`
                vec4 texColor = texture(tex, ${Te.hasColorTextureTransform?ye.H`colorUV`:ye.H`vuv0`});
                ${Te.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:ye.H`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${Te.pbrMode===he.A9.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${Te.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":Te.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${Te.hasVertexColors?ye.H`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:ye.H`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${Te.snowCover?ye.H`albedo = mix(albedo, vec3(1), 0.9);`:ye.H``}
        ${ye.H`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * mainLightIntensity;`}
        ${Te.pbrMode===he.A9.Normal||Te.pbrMode===he.A9.Schematic?Te.spherical?ye.H`vec3 normalGround = normalize(vpos + localOrigin);`:ye.H`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:ye.H``}
        ${Te.pbrMode===he.A9.Normal||Te.pbrMode===he.A9.Schematic?ye.H`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${Te.snowCover?ye.H`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:ye.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${Te.transparencyPassType===_t.y.ColorAlpha?ye.H`
                fragColor = premultiplyAlpha(fragColor);
                fragAlpha = fragColor.a;`:""}
      }
    `)),be.include(U.E,Te),be}const ct=Object.freeze(Object.defineProperty({__proto__:null,build:lt},Symbol.toStringTag,{value:"Module"}))},30493:(Me,Z,_)=>{_.d(Z,{S:()=>re,b:()=>ee,g:()=>U});var P=_(83953),R=_(45475),B=_(65152),I=_(85340),y=_(8733),A=_(99286),w=_(65840),X=_(93093),b=_(56857),V=_(35089);const de=16;function ee(){const ue=new b.N5,oe=ue.fragment;return ue.include(B.c),ue.include(y.Ir),oe.include(I.E),oe.uniforms.add(new w.m("radius",(Y,he)=>U(he.camera))).code.add(X.H`vec3 sphere[16] = vec3[16](
vec3(0.186937, 0.0, 0.0),
vec3(0.700542, 0.0, 0.0),
vec3(-0.864858, -0.481795, -0.111713),
vec3(-0.624773, 0.102853, -0.730153),
vec3(-0.387172, 0.260319, 0.007229),
vec3(-0.222367, -0.642631, -0.707697),
vec3(-0.01336, -0.014956, 0.169662),
vec3(0.122575, 0.1544, -0.456944),
vec3(-0.177141, 0.85997, -0.42346),
vec3(-0.131631, 0.814545, 0.524355),
vec3(-0.779469, 0.007991, 0.624833),
vec3(0.308092, 0.209288,0.35969),
vec3(0.359331, -0.184533, -0.377458),
vec3(0.192633, -0.482999, -0.065284),
vec3(0.233538, 0.293706, -0.055139),
vec3(0.417709, -0.386701, 0.442449)
);
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn - bias, 0.0);
}`),oe.code.add(X.H`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),oe.uniforms.add(new V.N("normalMap",Y=>Y.normalTexture),new V.N("depthMap",Y=>Y.depthTexture),new w.m("projScale",Y=>Y.projScale),new V.N("rnm",Y=>Y.noiseTexture),new A.G("rnmScale",(Y,he)=>(0,P.hZ)(D,he.camera.fullWidth/Y.noiseTexture.descriptor.width,he.camera.fullHeight/Y.noiseTexture.descriptor.height)),new w.m("intensity",Y=>Y.intensity),new A.G("screenSize",(Y,he)=>(0,P.hZ)(D,he.camera.fullWidth,he.camera.fullHeight))),ue.outputs.add("fragOcclusion","float"),oe.code.add(X.H`
    void main(void) {
      float depth = depthFromTexture(depthMap, uv);

      // Early out if depth is out of range, such as in the sky
      if (depth >= 1.0 || depth <= 0.0) {
        fragOcclusion = 1.0;
        return;
      }

      // get the normal of current fragment
      vec4 norm4 = texture(normalMap, uv);
      if(norm4.a != 1.0) {
        fragOcclusion = 1.0;
        return;
      }
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;

      float currentPixelDepth = linearizeDepth(depth);
      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy, currentPixelDepth);

      float sum = 0.0;
      vec3 tapPixelPos;

      vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${X.H.int(de)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        // don't use current or very nearby samples
        if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
          continue;
        }

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap);

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum += aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${X.H.int(de)}), 0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
      A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;

      fragOcclusion = A;
    }
  `),ue}function U(ue){return Math.max(10,20*ue.computeScreenPixelSizeAtDist(Math.abs(4*ue.relativeElevation)))}const D=(0,R.vt)(),re=Object.freeze(Object.defineProperty({__proto__:null,build:ee,getRadius:U},Symbol.toStringTag,{value:"Module"}))},84254:(Me,Z,_)=>{_.d(Z,{S:()=>ee,b:()=>de});var P=_(28714),R=_(65152),B=_(85340),I=_(15683),y=_(65840),A=_(93093),w=_(56857),X=_(91784),b=_(35089);const V=4;function de(){const U=new w.N5,D=U.fragment;U.include(R.c);const re=(V+1)/2,ue=1/(2*re*re);return D.include(B.E),D.uniforms.add(new b.N("depthMap",oe=>oe.depthTexture),new X.o("tex",oe=>oe.colorTexture),new I.t("blurSize",oe=>oe.blurSize),new y.m("projScale",(oe,Y)=>{const he=(0,P.r)(Y.camera.eye,Y.camera.center);return he>5e4?Math.max(0,oe.projScale-(he-5e4)):oe.projScale})),D.code.add(A.H`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${A.H.float(ue)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),U.outputs.add("fragBlur","float"),D.code.add(A.H`
    void main(void) {
      float b = 0.0;
      float w_total = 0.0;

      float center_d = linearDepthFromTexture(depthMap, uv);

      float sharpness = -0.05 * projScale / center_d;
      for (int r = -${A.H.int(V)}; r <= ${A.H.int(V)}; ++r) {
        float rf = float(r);
        vec2 uvOffset = uv + rf * blurSize;
        blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
      }

      fragBlur = b / w_total;
    }
  `),U}const ee=Object.freeze(Object.defineProperty({__proto__:null,build:de},Symbol.toStringTag,{value:"Module"}))},94268:(Me,Z,_)=>{_.d(Z,{a:()=>Y,b:()=>Q,c:()=>re,f:()=>te,g:()=>N,j:()=>He,n:()=>Oe}),_(3248),_(35150);var B=_(69287),I=_(92771),y=_(28714),A=_(25866),w=_(53781),X=_(89141),b=_(85952),V=_(41510),de=_(55703),ee=_(99608),U=_(19741);const D=re();function re(){return(0,X.vt)()}const ue=w.e,oe=w.e;function Y(G,W){return(0,w.c)(W,G)}function Q(G){return G[3]}function N(G){return G}function te(G,W,ae,fe){return(0,X.fA)(G,W,ae,fe)}function Ee(G,W,ae){if(null==W||!at(G,W,nt))return!1;let{t0:fe,t1:ce}=nt;if((fe<0||ce<fe&&ce>0)&&(fe=ce),fe<0)return!1;if(ae){const{origin:Ae,direction:qe}=W;ae[0]=Ae[0]+qe[0]*fe,ae[1]=Ae[1]+qe[1]*fe,ae[2]=Ae[2]+qe[2]*fe}return!0}const nt={t0:0,t1:0};function at(G,W,ae){const{origin:fe,direction:ce}=W,Ae=_t;Ae[0]=fe[0]-G[0],Ae[1]=fe[1]-G[1],Ae[2]=fe[2]-G[2];const qe=ce[0]*ce[0]+ce[1]*ce[1]+ce[2]*ce[2];if(0===qe)return!1;const Ie=2*(ce[0]*Ae[0]+ce[1]*Ae[1]+ce[2]*Ae[2]),pt=Ie*Ie-4*qe*(Ae[0]*Ae[0]+Ae[1]*Ae[1]+Ae[2]*Ae[2]-G[3]*G[3]);if(pt<0)return!1;const wt=Math.sqrt(pt);return ae.t0=(-Ie-wt)/(2*qe),ae.t1=(-Ie+wt)/(2*qe),!0}const _t=(0,A.vt)();function He(G,W){return Ee(G,W,null)}function ct(G,W,ae){const fe=U.rq.get(),ce=U.Rc.get();(0,y.b)(fe,W.origin,W.direction);const Ae=Q(G);(0,y.b)(ae,fe,W.origin),(0,y.j)(ae,ae,1/(0,y.l)(ae)*Ae);const qe=ot(G,W.origin),Ie=(0,ee.g7)(W.origin,ae);return(0,I.$0)(ce,Ie+qe,fe),(0,y.h)(ae,ae,ce),ae}function be(G,W,ae){const fe=(0,y.f)(U.rq.get(),W,G),ce=(0,y.j)(U.rq.get(),fe,G[3]/(0,y.l)(fe));return(0,y.g)(ae,ce,G)}function ot(G,W){const ae=(0,y.f)(U.rq.get(),W,G),fe=(0,y.l)(ae),ce=Q(G),Ae=ce+Math.abs(ce-fe);return(0,B.XM)(ce/Ae)}const ge=(0,A.vt)();function De(G,W,ae,fe){const ce=(0,y.f)(ge,W,G);switch(ae){case V._.X:{const Ae=(0,B.jU)(ce,ge)[2];return(0,y.s)(fe,-Math.sin(Ae),Math.cos(Ae),0)}case V._.Y:{const Ae=(0,B.jU)(ce,ge),qe=Ae[1],Ie=Ae[2],pt=Math.sin(qe);return(0,y.s)(fe,-pt*Math.cos(Ie),-pt*Math.sin(Ie),Math.cos(qe))}case V._.Z:return(0,y.n)(fe,ce);default:return}}function ut(G,W){const ae=(0,y.f)(Re,W,G);return(0,y.l)(ae)-G[3]}function Oe(G,W){const ae=(0,y.a)(G,W),fe=Q(G);return ae<=fe*fe}const Re=(0,A.vt)(),ht=re();Object.freeze(Object.defineProperty({__proto__:null,NullSphere:D,altitudeAt:ut,angleToSilhouette:ot,axisAt:De,clear:function ne(G){G[0]=G[1]=G[2]=G[3]=0},closestPoint:function Te(G,W,ae){return Ee(G,W,ae)?ae:((0,de.oC)(W,G,ae),be(G,ae,ae))},closestPointOnSilhouette:ct,containsPoint:Oe,copy:Y,create:re,distanceToSilhouette:function pe(G,W){const ae=(0,y.f)(U.rq.get(),W,G),fe=(0,y.q)(ae);return Math.sqrt(Math.abs(fe-G[3]*G[3]))},elevate:function le(G,W,ae){return G!==ae&&(ae[0]=G[0],ae[1]=G[1],ae[2]=G[2]),ae[3]=G[3]+W,ae},equals:oe,exactEquals:ue,fromCenterAndRadius:function he(G,W){return(0,X.fA)(G[0],G[1],G[2],W)},fromRadius:function q(G,W){return G[0]=G[1]=G[2]=0,G[3]=W,G},fromValues:te,getCenter:N,getRadius:Q,intersectLine:function ye(G,W,ae){const fe=(0,de.Cr)(W,ae);if(!at(G,fe,nt))return[];const{origin:ce,direction:Ae}=fe,{t0:qe,t1:Ie}=nt,pt=wt=>{const Wt=(0,A.vt)();return(0,y.u)(Wt,ce,Ae,wt),be(G,Wt,Wt)};return Math.abs(qe-Ie)<(0,b.FD)()?[pt(qe)]:[pt(qe),pt(Ie)]},intersectRay:Ee,intersectRayClosestSilhouette:function lt(G,W,ae){if(Ee(G,W,ae))return ae;const fe=ct(G,W,U.rq.get());return(0,y.g)(ae,W.origin,(0,y.j)(U.rq.get(),W.direction,(0,y.r)(W.origin,fe)/(0,y.l)(W.direction))),ae},intersectsRay:He,projectPoint:be,setAltitudeAt:function k(G,W,ae,fe){const ce=ut(G,W),Ae=De(G,W,V._.Z,Re),qe=(0,y.j)(Re,Ae,ae-ce);return(0,y.g)(fe,W,qe)},setExtent:function me(G,W,ae){return G!==ae&&Y(G,ae),ae},tmpSphere:ht,union:function xe(G,W,ae=(0,X.vt)()){const fe=(0,y.r)(G,W),ce=G[3],Ae=W[3];return fe+Ae<ce?((0,w.c)(ae,G),ae):fe+ce<Ae?((0,w.c)(ae,W),ae):((0,y.o)(ae,G,W,(fe+Ae-ce)/(2*fe)),ae[3]=(fe+ce+Ae)/2,ae)},wrap:function z(G){return G}},Symbol.toStringTag,{value:"Module"}))},67571:(Me,Z,_)=>{_.d(Z,{O:()=>P});class P{constructor(){this._outer=new Map}clear(){this._outer.clear()}get empty(){return 0===this._outer.size}get(B,I){return this._outer.get(B)?.get(I)}set(B,I,y){const A=this._outer.get(B);A?A.set(I,y):this._outer.set(B,new Map([[I,y]]))}delete(B,I){const y=this._outer.get(B);y&&(y.delete(I),0===y.size&&this._outer.delete(B))}forEach(B){this._outer.forEach((I,y)=>B(I,y))}}},81596:(Me,Z,_)=>{_.d(Z,{oe:()=>R});var P=_(79139);function R(A,w=!1){return A<=P.y9?w?new Array(A).fill(0):new Array(A):new Float32Array(A)}},55703:(Me,Z,_)=>{_.d(Z,{Cr:()=>de,LV:()=>b,fA:()=>ee,oC:()=>D,vt:()=>A}),_(89952);var R=_(84149),B=_(28714),I=_(25866);function A(Y){return Y?w((0,I.o8)(Y.origin),(0,I.o8)(Y.direction)):w((0,I.vt)(),(0,I.vt)())}function w(Y,he){return{origin:Y,direction:he}}function b(Y,he){const z=ue.get();return z.origin=Y,z.direction=he,z}function de(Y,he,z=A()){return(0,B.c)(z.origin,Y),(0,B.f)(z.direction,he,Y),z}function ee(Y,he,z=A()){return(0,B.c)(z.origin,Y),(0,B.c)(z.direction,he),z}function D(Y,he,z){const ne=(0,B.m)(Y.direction,(0,B.f)(z,he,Y.origin));return(0,B.g)(z,Y.origin,(0,B.j)(z,Y.direction,ne)),z}_(19741);const ue=new R.I(()=>A());(0,I.vt)()},38908:(Me,Z,_)=>{_.r(Z),_.d(Z,{fetch:()=>Zi,gltfToEngineResources:()=>en,parseUrl:()=>qr});var P=_(10467),R=_(7201),B=_(69287),I=_(31610),y=_(32954),A=_(92771),w=_(62789),X=_(45475),b=_(28714),V=_(25866),de=_(2296),ee=_(81596),U=_(45434),D=_(10442),re=_(17559),ue=_(23225),oe=_(18201),Y=_(25590),he=_(85303),z=_(52867),ne=_(61362),q=_(39690),Q=_(88532);function N(M){if(null==M)return null;const T=null!=M.offset?M.offset:Q.uY,x=null!=M.rotation?M.rotation:0,O=null!=M.scale?M.scale:Q.Un,F=(0,y.fA)(1,0,0,0,1,0,T[0],T[1],1),C=(0,y.fA)(Math.cos(x),-Math.sin(x),0,Math.sin(x),Math.cos(x),0,0,0,1),L=(0,y.fA)(O[0],0,0,0,O[1],0,0,0,1),j=(0,y.vt)();return(0,I.lw)(j,C,L),(0,I.lw)(j,F,j),j}class te{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}}class le{constructor(T,x,O){this.name=T,this.lodThreshold=x,this.pivotOffset=O,this.stageResources=new te,this.numberOfVertices=0}}var me=_(89563),Ee=_(89447),ye=_(4277),nt=_(5922),at=_(35150),_t=_(67571),He=_(56492),lt=_(43420),ct=_(83034),Te=_(96797),be=_(83346),pe=_(67496),ot=_(45584),ge=_(3248),De=_(42425),ut=_(11432),k=_(79139),Oe=_(45272),xe=_(3450),Re=_(90261);let Ge;var G,M;(M=G||(G={}))[M.ETC1_RGB=0]="ETC1_RGB",M[M.ETC2_RGBA=1]="ETC2_RGBA",M[M.BC1_RGB=2]="BC1_RGB",M[M.BC3_RGBA=3]="BC3_RGBA",M[M.BC4_R=4]="BC4_R",M[M.BC5_RG=5]="BC5_RG",M[M.BC7_M6_RGB=6]="BC7_M6_RGB",M[M.BC7_M5_RGBA=7]="BC7_M5_RGBA",M[M.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",M[M.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",M[M.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",M[M.ATC_RGB=11]="ATC_RGB",M[M.ATC_RGBA=12]="ATC_RGBA",M[M.FXT1_RGB=17]="FXT1_RGB",M[M.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",M[M.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",M[M.ETC2_EAC_R11=20]="ETC2_EAC_R11",M[M.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",M[M.RGBA32=13]="RGBA32",M[M.RGB565=14]="RGB565",M[M.BGR565=15]="BGR565",M[M.RGBA4444=16]="RGBA4444";var W=_(50915),ae=_(26136),fe=_(84757);let ce=null,Ae=null;function qe(){return Ie.apply(this,arguments)}function Ie(){return Ie=(0,P.A)(function*(){return null==Ae&&(Ae=function ht(){return Ge??=(0,P.A)(function*(){const M=yield _.e(8905).then(_.bind(_,68905)),T=yield M.default({locateFile:x=>(0,Re.s)(`esri/libs/basisu/${x}`)});return T.initializeBasis(),T})(),Ge}(),ce=yield Ae),Ae}),Ie.apply(this,arguments)}function Wt(M,T,x,O,F){const C=(0,fe.IB)(T?W.CQ.COMPRESSED_RGBA8_ETC2_EAC:W.CQ.COMPRESSED_RGB8_ETC2);return Math.ceil(x*O*C*(F&&M>1?(4**M-1)/(3*4**(M-1)):1))}function At(M){return M.getNumImages()>=1&&!M.isUASTC()}function Vt(M){return M.getFaces()>=1&&M.isETC1S()}function Rt(){return Rt=(0,P.A)(function*(M,T,x){null==ce&&(ce=yield qe());const O=new ce.BasisFile(new Uint8Array(x));if(!At(O))return null;O.startTranscoding();const F=or(M,T,O.getNumLevels(0),O.getHasAlpha(),O.getImageWidth(0,0),O.getImageHeight(0,0),(C,L)=>O.getImageTranscodedSizeInBytes(0,C,L),(C,L,j)=>O.transcodeImage(j,0,C,L,0,0));return O.close(),O.delete(),F}),Rt.apply(this,arguments)}function Nt(){return Nt=(0,P.A)(function*(M,T,x){null==ce&&(ce=yield qe());const O=new ce.KTX2File(new Uint8Array(x));if(!Vt(O))return null;O.startTranscoding();const F=or(M,T,O.getLevels(),O.getHasAlpha(),O.getWidth(),O.getHeight(),(C,L)=>O.getImageTranscodedSizeInBytes(C,0,0,L),(C,L,j)=>O.transcodeImage(j,C,0,0,L,0,-1,-1));return O.close(),O.delete(),F}),Nt.apply(this,arguments)}function or(M,T,x,O,F,C,L,j){const{compressedTextureETC:S,compressedTextureS3TC:K}=M.capabilities,[J,_e]=S?O?[G.ETC2_RGBA,W.CQ.COMPRESSED_RGBA8_ETC2_EAC]:[G.ETC1_RGB,W.CQ.COMPRESSED_RGB8_ETC2]:K?O?[G.BC3_RGBA,W.CQ.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[G.BC1_RGB,W.CQ.COMPRESSED_RGB_S3TC_DXT1_EXT]:[G.RGBA32,W.Ab.RGBA],Le=T.hasMipmap?x:Math.min(1,x),Ue=[];for(let Fe=0;Fe<Le;Fe++)Ue.push(new Uint8Array(L(Fe,J))),j(Fe,J,Ue[Fe]);return T.internalFormat=_e,T.hasMipmap=Ue.length>1,T.samplingMode=T.hasMipmap?W.Cj.LINEAR_MIPMAP_LINEAR:W.Cj.LINEAR,T.width=F,T.height=C,new ae.g(M,T,{type:"compressed",levels:Ue})}var H=_(43448),$=_(98176);const se=()=>at.A.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil");function mt(M){return M.charCodeAt(0)+(M.charCodeAt(1)<<8)+(M.charCodeAt(2)<<16)+(M.charCodeAt(3)<<24)}const cn=mt("DXT1"),dn=mt("DXT3"),un=mt("DXT5");function pr(M,T,x){if(M instanceof ImageData)return pr(Lr(M),T,x);const O=document.createElement("canvas");return O.width=T,O.height=x,O.getContext("2d").drawImage(M,0,0,O.width,O.height),O}function Lr(M){const T=document.createElement("canvas");T.width=M.width,T.height=M.height;const x=T.getContext("2d");if(null==x)throw new nt.A("Failed to create 2d context from HTMLCanvasElement");return x.putImageData(M,0,0),T}var rr,gt=_(65388),Pn=_(4931);class Ir extends H.J{get parameters(){return this._parameters}constructor(T,x){super(),this._data=T,this.type=$.X.Texture,this._glTexture=null,this._loadingPromise=null,this._loadingController=null,this.events=new De.A,this._parameters={...Dn,...x},this._startPreload(T)}dispose(){this.unload(),this._data=this.frameUpdate=void 0}_startPreload(T){null!=T&&(T instanceof HTMLVideoElement?(this.frameUpdate=x=>this._frameUpdate(T,x),this._startPreloadVideoElement(T)):T instanceof HTMLImageElement&&this._startPreloadImageElement(T))}_startPreloadVideoElement(T){if(!((0,Oe.w8)(T.src)||"auto"===T.preload&&T.crossOrigin)){T.preload="auto",T.crossOrigin="anonymous";const x=!T.paused;if(T.src=T.src,x&&T.autoplay){const O=()=>{T.removeEventListener("canplay",O),T.play()};T.addEventListener("canplay",O)}}}_startPreloadImageElement(T){(0,Oe.DB)(T.src)||(0,Oe.w8)(T.src)||T.crossOrigin||(T.crossOrigin="anonymous",T.src=T.src)}_createDescriptor(T){const x=new Pn.R;return x.wrapMode=this._parameters.wrap??W.pF.REPEAT,x.flipped=!this._parameters.noUnpackFlip,x.samplingMode=this._parameters.mipmap?W.Cj.LINEAR_MIPMAP_LINEAR:W.Cj.LINEAR,x.hasMipmap=!!this._parameters.mipmap,x.preMultiplyAlpha=!!this._parameters.preMultiplyAlpha,x.maxAnisotropy=this._parameters.maxAnisotropy??(this._parameters.mipmap?T.parameters.maxMaxAnisotropy:1),x}get glTexture(){return this._glTexture}get memoryEstimate(){return this._glTexture?.usedMemory||function yn(M,T){if(null==M)return 0;if((0,k.mw)(M)||(0,k.mg)(M))return T.encoding===pe.JS.KTX2_ENCODING?function wt(M,T){if(null==ce)return M.byteLength;const x=new ce.KTX2File(new Uint8Array(M)),O=Vt(x)?Wt(x.getLevels(),x.getHasAlpha(),x.getWidth(),x.getHeight(),T):0;return x.close(),x.delete(),O}(M,!!T.mipmap):T.encoding===pe.JS.BASIS_ENCODING?function pt(M,T){if(null==ce)return M.byteLength;const x=new ce.BasisFile(new Uint8Array(M)),O=At(x)?Wt(x.getNumLevels(0),x.getHasAlpha(),x.getImageWidth(0,0),x.getImageHeight(0,0),T):0;return x.close(),x.delete(),O}(M,!!T.mipmap):M.byteLength;const{width:x,height:O}=M instanceof Image||M instanceof ImageData||M instanceof HTMLCanvasElement||M instanceof HTMLVideoElement?Ur(M):T;return(T.mipmap?4/3:1)*x*O*(T.components||4)||0}(this._data,this._parameters)}load(T){if(this._glTexture)return this._glTexture;if(this._loadingPromise)return this._loadingPromise;const x=this._data;return null==x?(this._glTexture=new ae.g(T,this._createDescriptor(T),null),this._glTexture):(this._parameters.reloadable||(this._data=void 0),"string"==typeof x?this._loadFromURL(T,x):x instanceof Image?this._loadFromImageElement(T,x):x instanceof HTMLVideoElement?this._loadFromVideoElement(T,x):x instanceof ImageData||x instanceof HTMLCanvasElement?this._loadFromImage(T,x):((0,k.mw)(x)||(0,k.mg)(x))&&this._parameters.encoding===pe.JS.DDS_ENCODING?this._loadFromDDSData(T,x):((0,k.mw)(x)||(0,k.mg)(x))&&this._parameters.encoding===pe.JS.KTX2_ENCODING?this._loadFromKTX2(T,x):((0,k.mw)(x)||(0,k.mg)(x))&&this._parameters.encoding===pe.JS.BASIS_ENCODING?this._loadFromBasis(T,x):(0,k.mg)(x)?this._loadFromPixelData(T,x):(0,k.mw)(x)?this._loadFromPixelData(T,new Uint8Array(x)):null)}_frameUpdate(T,x){return null==this._glTexture||T.readyState<rr.HAVE_CURRENT_DATA||x===T.currentTime?x:(this._glTexture.setData(T),this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this._parameters.updateCallback&&this._parameters.updateCallback(),T.currentTime)}_loadFromDDSData(T,x){return this._glTexture=function Mn(M,T,x){const O=function xn(M,T){const x=new Int32Array(M,0,31);if(542327876!==x[0])return se().error("Invalid magic number in DDS header"),null;if(!(4&x[20]))return se().error("Unsupported format, must contain a FourCC code"),null;const O=x[21];let F,C;switch(O){case cn:F=8,C=W.CQ.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case dn:F=16,C=W.CQ.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case un:F=16,C=W.CQ.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return se().error("Unsupported FourCC code:",function Qt(M){return String.fromCharCode(255&M,M>>8&255,M>>16&255,M>>24&255)}(O)),null}let L=1,j=x[4],S=x[3];(3&j||3&S)&&(se().warn("Rounding up compressed texture size to nearest multiple of 4."),j=j+3&-4,S=S+3&-4);const K=j,J=S;let _e,Le;131072&x[2]&&!1!==T&&(L=Math.max(1,x[7]));let Ue=x[1]+4;const Fe=[];for(let Xe=0;Xe<L;++Xe)Le=(j+3>>2)*(S+3>>2)*F,_e=new Uint8Array(M,Ue,Le),Fe.push(_e),Ue+=Le,j=Math.max(1,j>>1),S=Math.max(1,S>>1);return{textureData:{type:"compressed",levels:Fe},internalFormat:C,width:K,height:J}}(x,T.hasMipmap??!1);if(null==O)throw new Error("DDS texture data is null");const{textureData:F,internalFormat:C,width:L,height:j}=O;return T.samplingMode=F.levels.length>1?W.Cj.LINEAR_MIPMAP_LINEAR:W.Cj.LINEAR,T.hasMipmap=F.levels.length>1,T.internalFormat=C,T.width=L,T.height=j,new ae.g(M,T,F)}(T,this._createDescriptor(T),x),this._glTexture}_loadFromKTX2(T,x){return this._loadAsync(()=>function Jt(M,T,x){return Nt.apply(this,arguments)}(T,this._createDescriptor(T),x).then(O=>(this._glTexture=O,O)))}_loadFromBasis(T,x){return this._loadAsync(()=>function Ct(M,T,x){return Rt.apply(this,arguments)}(T,this._createDescriptor(T),x).then(O=>(this._glTexture=O,O)))}_loadFromPixelData(T,x){(0,gt.vA)(this._parameters.width>0&&this._parameters.height>0);const O=this._createDescriptor(T);return O.pixelFormat=1===this._parameters.components?W.Ab.LUMINANCE:3===this._parameters.components?W.Ab.RGB:W.Ab.RGBA,O.width=this._parameters.width??0,O.height=this._parameters.height??0,this._glTexture=new ae.g(T,O,x),this._glTexture}_loadFromURL(T,x){var O=this;return this._loadAsync(function(){var F=(0,P.A)(function*(C){const L=yield(0,Te.D)(x,{signal:C});return(0,He.Te)(C),O._loadFromImage(T,L)});return function(C){return F.apply(this,arguments)}}())}_loadFromImageElement(T,x){var O=this;return x.complete?this._loadFromImage(T,x):this._loadAsync(function(){var F=(0,P.A)(function*(C){const L=yield(0,xe.Sx)(x,x.src,!1,C);return(0,He.Te)(C),O._loadFromImage(T,L)});return function(C){return F.apply(this,arguments)}}())}_loadFromVideoElement(T,x){return x.readyState>=rr.HAVE_CURRENT_DATA?this._loadFromImage(T,x):this._loadFromVideoElementAsync(T,x)}_loadFromVideoElementAsync(T,x){return this._loadAsync(O=>new Promise((F,C)=>{const L=()=>{x.removeEventListener("loadeddata",j),x.removeEventListener("error",S),(0,ut.xt)(K)},j=()=>{x.readyState>=rr.HAVE_CURRENT_DATA&&(L(),F(this._loadFromImage(T,x)))},S=J=>{L(),C(J||new nt.A("Failed to load video"))};x.addEventListener("loadeddata",j),x.addEventListener("error",S);const K=(0,He.u7)(O,()=>S((0,He.NK)()))}))}_loadFromImage(T,x){let O=x;if(!(O instanceof HTMLVideoElement)){const{maxTextureSize:L}=T.parameters;O=this._parameters.downsampleUncompressed?function On(M,T){let C=M.width*M.height;if(C<4096)return M instanceof ImageData?Lr(M):M;let L=M.width,j=M.height;do{L=Math.ceil(L/2),j=Math.ceil(j/2),C=L*j}while(C>1048576||null!=T&&(L>T||j>T));return pr(M,L,j)}(O,L):function An(M,T){const x=Math.max(M.width,M.height);if(x<=T)return M;const O=T/x;return pr(M,Math.round(M.width*O),Math.round(M.height*O))}(O,L)}const F=Ur(O);this._parameters.width=F.width,this._parameters.height=F.height;const C=this._createDescriptor(T);return C.pixelFormat=3===this._parameters.components?W.Ab.RGB:W.Ab.RGBA,C.width=F.width,C.height=F.height,this._glTexture=new ae.g(T,C,O),this._glTexture}_loadAsync(T){const x=new AbortController;this._loadingController=x;const O=T(x.signal);this._loadingPromise=O;const F=()=>{this._loadingController===x&&(this._loadingController=null),this._loadingPromise===O&&(this._loadingPromise=null)};return O.then(F,F),O}unload(){if(this._glTexture=(0,ut.WD)(this._glTexture),null!=this._loadingController){const T=this._loadingController;this._loadingController=null,this._loadingPromise=null,T.abort()}this.events.emit("unloaded")}}function Ur(M){return M instanceof HTMLVideoElement?{width:M.videoWidth,height:M.videoHeight}:M}!function(M){M[M.HAVE_NOTHING=0]="HAVE_NOTHING",M[M.HAVE_METADATA=1]="HAVE_METADATA",M[M.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",M[M.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",M[M.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"}(rr||(rr={}));const Dn={wrap:{s:W.pF.REPEAT,t:W.pF.REPEAT},mipmap:!0,noUnpackFlip:!1,preMultiplyAlpha:!1,downsampleUncompressed:!1};var st=_(40972),lr=_(23191),Cn=_(48499),Mt=_(74567),Gt=_(34416),Kt=_(6698),nr=_(9933),Sn=_(2284),Br=_(43087),jt=_(83415),kt=_(41396);const bn=(0,kt.p3)(W.dn.SRC_ALPHA,W.dn.ONE,W.dn.ONE_MINUS_SRC_ALPHA,W.dn.ONE_MINUS_SRC_ALPHA),Rn=(0,kt.p3)(W.dn.ONE,W.dn.ZERO,W.dn.ONE,W.dn.ONE_MINUS_SRC_ALPHA);function Ln(M){return M===jt.y.FrontFace?null:Rn}const Un={factor:-1,units:-2};function Bn(M){return M?Un:null}function wn(M,T=W.MT.LESS){return M===jt.y.NONE||M===jt.y.FrontFace?T:W.MT.LEQUAL}function Wn(M){return M===jt.y.ColorAlpha?{buffers:[W.Nm.COLOR_ATTACHMENT0,W.Nm.COLOR_ATTACHMENT1]}:null}class Nn{constructor(T=!1,x=!0){this.isVerticalRay=T,this.normalRequired=x}}const cr=(0,de.vt)();function Fn(M,T,x,O,F,C){if(!M.visible)return;const L=(0,b.A)(Nr,O,x),j=(K,J,_e)=>{C(K,_e,J,!1)},S=new Nn(!1,T.options.normalRequired);if(M.boundingInfo)(0,gt.vA)(M.type===$.X.Mesh),wr(M.boundingInfo,x,L,T.tolerance,F,S,j);else{const K=M.attributes.get(st.r.POSITION),J=K.indices;!function Wr(M,T,x,O,F,C,L,j,S,K){const J=T,_e=Jn,Le=Math.abs(J[0]),Ue=Math.abs(J[1]),Fe=Math.abs(J[2]),Xe=Le>=Ue?Le>=Fe?0:2:Ue>=Fe?1:2,Ke=Xe,tt=J[Ke]<0?2:1,Qe=(Xe+tt)%3,ke=(Xe+(3-tt))%3,it=J[Qe]/J[Ke],rt=J[ke]/J[Ke],Ze=1/J[Ke],Ce=zn,Be=Vn,$e=Gn,{normalRequired:we}=S;for(let Se=x;Se<O;++Se){const Ve=3*Se,Pe=L*F[Ve];(0,b.s)(_e[0],C[Pe+0],C[Pe+1],C[Pe+2]);const Ye=L*F[Ve+1];(0,b.s)(_e[1],C[Ye+0],C[Ye+1],C[Ye+2]);const Je=L*F[Ve+2];(0,b.s)(_e[2],C[Je+0],C[Je+1],C[Je+2]),j&&((0,b.c)(_e[0],j.applyToVertex(_e[0][0],_e[0][1],_e[0][2],Se)),(0,b.c)(_e[1],j.applyToVertex(_e[1][0],_e[1][1],_e[1][2],Se)),(0,b.c)(_e[2],j.applyToVertex(_e[2][0],_e[2][1],_e[2][2],Se))),(0,b.A)(Ce,_e[0],M),(0,b.A)(Be,_e[1],M),(0,b.A)($e,_e[2],M);const et=Ce[Qe]-it*Ce[Ke],dt=Ce[ke]-rt*Ce[Ke],Et=Be[Qe]-it*Be[Ke],Pt=Be[ke]-rt*Be[Ke],yt=$e[Qe]-it*$e[Ke],Dt=$e[ke]-rt*$e[Ke],ft=yt*Pt-Dt*Et,xt=et*Dt-dt*yt,Ot=Et*dt-Pt*et;if((ft<0||xt<0||Ot<0)&&(ft>0||xt>0||Ot>0))continue;const St=ft+xt+Ot;if(0===St)continue;const vt=ft*(Ze*Ce[Ke])+xt*(Ze*Be[Ke])+Ot*(Ze*$e[Ke]);if(vt*Math.sign(St)<0)continue;const bt=vt/St;bt>=0&&K(bt,Se,we?Kn(_e):null)}}(x,L,0,J.length/3,J,K.data,K.stride,F,S,j)}}const Hn=(0,V.vt)();function wr(M,T,x,O,F,C,L){if(null==M)return;const j=function $n(M,T){return(0,b.s)(T,1/M[0],1/M[1],1/M[2])}(x,Hn);if((0,de.Ne)(cr,M.bbMin),(0,de.vI)(cr,M.bbMax),F?.applyToAabb(cr),function Yn(M,T,x,O){return function Xn(M,T,x,O,F){const C=(M[0]-O-T[0])*x[0],L=(M[3]+O-T[0])*x[0];let j=Math.min(C,L),S=Math.max(C,L);const K=(M[1]-O-T[1])*x[1],J=(M[4]+O-T[1])*x[1];if(S=Math.min(S,Math.max(K,J)),S<0||(j=Math.max(j,Math.min(K,J)),j>S))return!1;const _e=(M[2]-O-T[2])*x[2],Le=(M[5]+O-T[2])*x[2];return S=Math.min(S,Math.max(_e,Le)),!(S<0)&&(j=Math.max(j,Math.min(_e,Le)),!(j>S)&&j<F)}(M,T,x,O,1/0)}(cr,T,j,O)){const{primitiveIndices:S,position:K}=M,J=S?S.length:K.indices.length/3;if(J>Zn){const _e=M.getChildren();if(void 0!==_e){for(const Le of _e)wr(Le,T,x,O,F,C,L);return}}!function jn(M,T,x,O,F,C,L,j,S,K,J){const _e=M[0],Le=M[1],Ue=M[2],Fe=T[0],Xe=T[1],Ke=T[2],{normalRequired:tt}=K;for(let Qe=x;Qe<O;++Qe){const ke=j[Qe],it=3*ke,rt=L*F[it];let Ze=C[rt],Ce=C[rt+1],Be=C[rt+2];const $e=L*F[it+1];let we=C[$e],Se=C[$e+1],Ve=C[$e+2];const Pe=L*F[it+2];let Ye=C[Pe],Je=C[Pe+1],et=C[Pe+2];null!=S&&([Ze,Ce,Be]=S.applyToVertex(Ze,Ce,Be,Qe),[we,Se,Ve]=S.applyToVertex(we,Se,Ve,Qe),[Ye,Je,et]=S.applyToVertex(Ye,Je,et,Qe));const dt=we-Ze,Et=Se-Ce,Pt=Ve-Be,yt=Ye-Ze,Dt=Je-Ce,ft=et-Be,xt=Xe*ft-Dt*Ke,Ot=Ke*yt-ft*Fe,St=Fe*Dt-yt*Xe,vt=dt*xt+Et*Ot+Pt*St;if(Math.abs(vt)<=Tr)continue;const bt=_e-Ze,It=Le-Ce,Ut=Ue-Be,Tt=bt*xt+It*Ot+Ut*St;if(vt>0){if(Tt<0||Tt>vt)continue}else if(Tt>0||Tt<vt)continue;const Bt=It*Pt-Et*Ut,Yt=Ut*dt-Pt*bt,Xt=bt*Et-dt*It,Ht=Fe*Bt+Xe*Yt+Ke*Xt;if(vt>0){if(Ht<0||Tt+Ht>vt)continue}else if(Ht>0||Tt+Ht<vt)continue;const Zt=(yt*Bt+Dt*Yt+ft*Xt)/vt;Zt>=0&&J(Zt,ke,tt?Er(dt,Et,Pt,yt,Dt,ft,$t):null)}}(T,x,0,J,K.indices,K.data,K.stride,S,F,C,L)}}const $t=(0,V.vt)();const zn=(0,V.vt)(),Vn=(0,V.vt)(),Gn=(0,V.vt)();function Er(M,T,x,O,F,C,L){return(0,b.s)(dr,M,T,x),(0,b.s)(ur,O,F,C),(0,b.b)(L,dr,ur),(0,b.n)(L,L),L}function Kn(M){return(0,b.A)(dr,M[1],M[0]),(0,b.A)(ur,M[2],M[0]),(0,b.b)($t,dr,ur),(0,b.n)($t,$t),$t}const dr=(0,V.vt)(),ur=(0,V.vt)(),Zn=1e3,Tr=1e-7,Nr=(0,V.vt)(),Jn=[(0,V.vt)(),(0,V.vt)(),(0,V.vt)()];var ir;!function(M){M[M.INTEGRATED_MESH=0]="INTEGRATED_MESH",M[M.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",M[M.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",M[M.OPAQUE_NO_SSAO_DEPTH=3]="OPAQUE_NO_SSAO_DEPTH",M[M.TRANSPARENT_MATERIAL=4]="TRANSPARENT_MATERIAL",M[M.TRANSPARENT_NO_SSAO_DEPTH=5]="TRANSPARENT_NO_SSAO_DEPTH",M[M.TRANSPARENT_TERRAIN=6]="TRANSPARENT_TERRAIN",M[M.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL=7]="TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL",M[M.OCCLUDED_TERRAIN=8]="OCCLUDED_TERRAIN",M[M.OCCLUDER_MATERIAL=9]="OCCLUDER_MATERIAL",M[M.TRANSPARENT_OCCLUDER_MATERIAL=10]="TRANSPARENT_OCCLUDER_MATERIAL",M[M.OCCLUSION_PIXELS=11]="OCCLUSION_PIXELS",M[M.OPAQUE_ENVIRONMENT=12]="OPAQUE_ENVIRONMENT",M[M.TRANSPARENT_ENVIRONMENT=13]="TRANSPARENT_ENVIRONMENT",M[M.LASERLINES=14]="LASERLINES",M[M.LASERLINES_CONTRAST_CONTROL=15]="LASERLINES_CONTRAST_CONTROL",M[M.HUD_MATERIAL=16]="HUD_MATERIAL",M[M.LABEL_MATERIAL=17]="LABEL_MATERIAL",M[M.LINE_CALLOUTS=18]="LINE_CALLOUTS",M[M.LINE_CALLOUTS_HUD_DEPTH=19]="LINE_CALLOUTS_HUD_DEPTH",M[M.DRAPED_MATERIAL=20]="DRAPED_MATERIAL",M[M.DRAPED_WATER=21]="DRAPED_WATER",M[M.VIEWSHED=22]="VIEWSHED",M[M.VOXEL=23]="VOXEL",M[M.MAX_SLOTS=24]="MAX_SLOTS"}(ir||(ir={}));var Lt=_(94268),Fr=_(19641);const Hr=new class qn{constructor(T=0){this.offset=T,this.sphere=(0,Lt.c)(),this.tmpVertex=(0,V.vt)()}applyToVertex(T,x,O){const F=this.objectTransform.transform,C=(0,b.s)(Mr,T,x,O),L=(0,b.h)(C,C,F),j=this.offset/(0,b.l)(L);return(0,b.u)(L,L,L,j),(0,b.h)(this.tmpVertex,L,this.objectTransform.inverse),this.tmpVertex}applyToMinMax(T,x){const O=this.offset/(0,b.l)(T);(0,b.u)(T,T,T,O);const F=this.offset/(0,b.l)(x);(0,b.u)(x,x,x,F)}applyToAabb(T){const x=this.offset/Math.sqrt(T[0]*T[0]+T[1]*T[1]+T[2]*T[2]);T[0]+=T[0]*x,T[1]+=T[1]*x,T[2]+=T[2]*x;const O=this.offset/Math.sqrt(T[3]*T[3]+T[4]*T[4]+T[5]*T[5]);return T[3]+=T[3]*O,T[4]+=T[4]*O,T[5]+=T[5]*O,T}applyToBoundingSphere(T){const x=(0,b.l)((0,Lt.g)(T)),O=this.offset/x;return(0,b.u)((0,Lt.g)(this.sphere),(0,Lt.g)(T),(0,Lt.g)(T),O),this.sphere[3]=T[3]+T[3]*this.offset/x,this.sphere}};new class kn{constructor(T=0){this.componentLocalOriginLength=0,this._totalOffset=0,this._offset=0,this._tmpVertex=(0,V.vt)(),this._tmpMbs=(0,Lt.c)(),this._tmpObb=new Fr.ab,this._resetOffset(T)}_resetOffset(T){this._offset=T,this._totalOffset=T}set offset(T){this._resetOffset(T)}get offset(){return this._offset}set componentOffset(T){this._totalOffset=this._offset+T}set localOrigin(T){this.componentLocalOriginLength=(0,b.l)(T)}applyToVertex(T,x,O){const F=(0,b.s)(Mr,T,x,O),C=(0,b.s)(Vr,T,x,O+this.componentLocalOriginLength),L=this._totalOffset/(0,b.l)(C);return(0,b.u)(this._tmpVertex,F,C,L),this._tmpVertex}applyToAabb(T){const x=this.componentLocalOriginLength,O=T[0],F=T[1],C=T[2]+x,L=T[3],j=T[4],S=T[5]+x,K=Math.abs(O),J=Math.abs(F),_e=Math.abs(C),Le=Math.abs(L),Ue=Math.abs(j),Fe=Math.abs(S),Xe=.5*(1+Math.sign(O*L))*Math.min(K,Le),Ke=.5*(1+Math.sign(F*j))*Math.min(J,Ue),tt=.5*(1+Math.sign(C*S))*Math.min(_e,Fe),Qe=Math.max(K,Le),ke=Math.max(J,Ue),it=Math.max(_e,Fe),rt=Math.sqrt(Xe*Xe+Ke*Ke+tt*tt),Ze=Math.sign(K+O),Ce=Math.sign(J+F),Be=Math.sign(_e+C),$e=Math.sign(Le+L),we=Math.sign(Ue+j),Se=Math.sign(Fe+S),Ve=this._totalOffset;if(rt<Ve)return T[0]-=(1-Ze)*Ve,T[1]-=(1-Ce)*Ve,T[2]-=(1-Be)*Ve,T[3]+=$e*Ve,T[4]+=we*Ve,T[5]+=Se*Ve,T;const Pe=Ve/Math.sqrt(Qe*Qe+ke*ke+it*it),Ye=Ve/rt,Je=Ye-Pe,et=-Je;return T[0]+=O*(Ze*et+Ye),T[1]+=F*(Ce*et+Ye),T[2]+=C*(Be*et+Ye),T[3]+=L*($e*Je+Pe),T[4]+=j*(we*Je+Pe),T[5]+=S*(Se*Je+Pe),T}applyToMbs(T){const x=(0,b.l)((0,Lt.g)(T)),O=this._totalOffset/x;return(0,b.u)((0,Lt.g)(this._tmpMbs),(0,Lt.g)(T),(0,Lt.g)(T),O),this._tmpMbs[3]=T[3]+T[3]*this._totalOffset/x,this._tmpMbs}applyToObb(T){return(0,Fr.gm)(T,this._totalOffset,this._totalOffset,lr.RT.Global,this._tmpObb),this._tmpObb}},new class Qn{constructor(T=0){this.offset=T,this.tmpVertex=(0,V.vt)()}applyToVertex(T,x,O){const F=(0,b.s)(Mr,T,x,O),C=(0,b.g)(Vr,F,this.localOrigin),L=this.offset/(0,b.l)(C);return(0,b.u)(this.tmpVertex,F,C,L),this.tmpVertex}applyToAabb(T){const x=ti,O=ri,F=ni;for(let S=0;S<3;++S)x[S]=T[0+S]+this.localOrigin[S],O[S]=T[3+S]+this.localOrigin[S],F[S]=x[S];const C=this.applyToVertex(x[0],x[1],x[2]);for(let S=0;S<3;++S)T[S]=C[S],T[S+3]=C[S];const L=S=>{const K=this.applyToVertex(S[0],S[1],S[2]);for(let J=0;J<3;++J)T[J]=Math.min(T[J],K[J]),T[J+3]=Math.max(T[J+3],K[J])};for(let S=1;S<8;++S){for(let K=0;K<3;++K)F[K]=S&1<<K?O[K]:x[K];L(F)}let j=0;for(let S=0;S<3;++S)x[S]*O[S]<0&&(j|=1<<S);if(0!==j&&7!==j)for(let S=0;S<8;++S)if(!(j&S)){for(let K=0;K<3;++K)F[K]=j&1<<K?0:S&1<<K?x[K]:O[K];L(F)}for(let S=0;S<3;++S)T[S]-=this.localOrigin[S],T[S+3]-=this.localOrigin[S];return T}};const Mr=(0,V.vt)(),Vr=(0,V.vt)(),ti=(0,V.vt)(),ri=(0,V.vt)(),ni=(0,V.vt)();function Gr(M,T,x){const{data:O,indices:F}=M,C=T.typedBuffer,L=T.typedBufferStride,j=F.length;x*=L;for(let S=0;S<j;++S){const K=2*F[S];C[x]=O[K],C[x+1]=O[K+1],x+=L}}function Kr(M,T,x,O){const{data:F,indices:C}=M,L=T.typedBuffer,j=T.typedBufferStride,S=C.length;if(x*=j,null==O||1===O)for(let K=0;K<S;++K){const J=3*C[K];L[x]=F[J],L[x+1]=F[J+1],L[x+2]=F[J+2],x+=j}else for(let K=0;K<S;++K){const J=3*C[K];for(let _e=0;_e<O;++_e)L[x]=F[J],L[x+1]=F[J+1],L[x+2]=F[J+2],x+=j}}function $r(M,T,x,O=1){const{data:F,indices:C}=M,L=T.typedBuffer,j=T.typedBufferStride,S=C.length;if(x*=j,1===O)for(let K=0;K<S;++K){const J=4*C[K];L[x]=F[J],L[x+1]=F[J+1],L[x+2]=F[J+2],L[x+3]=F[J+3],x+=j}else for(let K=0;K<S;++K){const J=4*C[K];for(let _e=0;_e<O;++_e)L[x]=F[J],L[x+1]=F[J+1],L[x+2]=F[J+2],L[x+3]=F[J+3],x+=j}}function ci(M,T,x,O,F=1){const C=T.typedBuffer,L=T.typedBufferStride;if(O*=L,1===F)for(let j=0;j<x;++j)C[O]=M[0],C[O+1]=M[1],C[O+2]=M[2],C[O+3]=M[3],O+=L;else for(let j=0;j<x;++j)for(let S=0;S<F;++S)C[O]=M[0],C[O+1]=M[1],C[O+2]=M[2],C[O+3]=M[3],O+=L}function ui(M,T,x,O,F,C){switch(M){case st.r.POSITION:{(0,gt.vA)(3===T.size);const L=F.getField(M,U.xs);(0,gt.vA)(!!L,`No buffer view for ${M}`),L&&function ii(M,T,x,O,F=1){if(!T)return void Kr(M,x,O,F);const{data:C,indices:L}=M,j=x.typedBuffer,S=x.typedBufferStride,K=L.length,J=T[0],_e=T[1],Le=T[2],Ue=T[4],Fe=T[5],Xe=T[6],Ke=T[8],tt=T[9],Qe=T[10],ke=T[12],it=T[13],rt=T[14];O*=S;let Ze=0,Ce=0,Be=0;const $e=(0,A.tZ)(T)?we=>{Ze=C[we]+ke,Ce=C[we+1]+it,Be=C[we+2]+rt}:we=>{const Se=C[we],Ve=C[we+1],Pe=C[we+2];Ze=J*Se+Ue*Ve+Ke*Pe+ke,Ce=_e*Se+Fe*Ve+tt*Pe+it,Be=Le*Se+Xe*Ve+Qe*Pe+rt};if(1===F)for(let we=0;we<K;++we)$e(3*L[we]),j[O]=Ze,j[O+1]=Ce,j[O+2]=Be,O+=S;else for(let we=0;we<K;++we){$e(3*L[we]);for(let Se=0;Se<F;++Se)j[O]=Ze,j[O+1]=Ce,j[O+2]=Be,O+=S}}(T,x,L,C);break}case st.r.NORMAL:{(0,gt.vA)(3===T.size);const L=F.getField(M,U.xs);(0,gt.vA)(!!L,`No buffer view for ${M}`),L&&function si(M,T,x,O,F=1){if(!T)return void Kr(M,x,O,F);const{data:C,indices:L}=M,j=T,S=x.typedBuffer,K=x.typedBufferStride,J=L.length,_e=j[0],Le=j[1],Ue=j[2],Fe=j[4],Xe=j[5],Ke=j[6],tt=j[8],Qe=j[9],ke=j[10],it=!(0,A.ut)(j),rt=1e-6,Ze=1-rt;O*=K;let Ce=0,Be=0,$e=0;const we=(0,A.tZ)(j)?Se=>{Ce=C[Se],Be=C[Se+1],$e=C[Se+2]}:Se=>{const Ve=C[Se],Pe=C[Se+1],Ye=C[Se+2];Ce=_e*Ve+Fe*Pe+tt*Ye,Be=Le*Ve+Xe*Pe+Qe*Ye,$e=Ue*Ve+Ke*Pe+ke*Ye};if(1===F)if(it)for(let Se=0;Se<J;++Se){we(3*L[Se]);const Ve=Ce*Ce+Be*Be+$e*$e;if(Ve<Ze&&Ve>rt){const Pe=1/Math.sqrt(Ve);S[O]=Ce*Pe,S[O+1]=Be*Pe,S[O+2]=$e*Pe}else S[O]=Ce,S[O+1]=Be,S[O+2]=$e;O+=K}else for(let Se=0;Se<J;++Se)we(3*L[Se]),S[O]=Ce,S[O+1]=Be,S[O+2]=$e,O+=K;else for(let Se=0;Se<J;++Se){if(we(3*L[Se]),it){const Ve=Ce*Ce+Be*Be+$e*$e;if(Ve<Ze&&Ve>rt){const Pe=1/Math.sqrt(Ve);Ce*=Pe,Be*=Pe,$e*=Pe}}for(let Ve=0;Ve<F;++Ve)S[O]=Ce,S[O+1]=Be,S[O+2]=$e,O+=K}}(T,O,L,C);break}case st.r.NORMALCOMPRESSED:{(0,gt.vA)(2===T.size);const L=F.getField(M,U.mJ);(0,gt.vA)(!!L,`No buffer view for ${M}`),L&&Gr(T,L,C);break}case st.r.UV0:{(0,gt.vA)(2===T.size);const L=F.getField(M,U.gH);(0,gt.vA)(!!L,`No buffer view for ${M}`),L&&Gr(T,L,C);break}case st.r.COLOR:case st.r.SYMBOLCOLOR:{const L=F.getField(M,U.XP);(0,gt.vA)(!!L,`No buffer view for ${M}`),(0,gt.vA)(3===T.size||4===T.size),!L||3!==T.size&&4!==T.size||function ai(M,T,x,O,F=1){const{data:C,indices:L}=M,j=x.typedBuffer,S=x.typedBufferStride,K=L.length;if(O*=S,T!==C.length||4!==T)if(1!==F)if(4!==T)for(let J=0;J<K;++J){const _e=3*L[J];for(let Le=0;Le<F;++Le)j[O]=C[_e],j[O+1]=C[_e+1],j[O+2]=C[_e+2],j[O+3]=255,O+=S}else for(let J=0;J<K;++J){const _e=4*L[J];for(let Le=0;Le<F;++Le)j[O]=C[_e],j[O+1]=C[_e+1],j[O+2]=C[_e+2],j[O+3]=C[_e+3],O+=S}else{if(4===T){for(let J=0;J<K;++J){const _e=4*L[J];j[O]=C[_e],j[O+1]=C[_e+1],j[O+2]=C[_e+2],j[O+3]=C[_e+3],O+=S}return}for(let J=0;J<K;++J){const _e=3*L[J];j[O]=C[_e],j[O+1]=C[_e+1],j[O+2]=C[_e+2],j[O+3]=255,O+=S}}else{j[O]=C[0],j[O+1]=C[1],j[O+2]=C[2],j[O+3]=C[3];const J=new Uint32Array(x.typedBuffer.buffer,x.start),_e=S/4,Le=J[O/=4];O+=_e;const Ue=K*F;for(let Fe=1;Fe<Ue;++Fe)J[O]=Le,O+=_e}}(T,T.size,L,C);break}case st.r.COLORFEATUREATTRIBUTE:{const L=F.getField(M,U.Y$);(0,gt.vA)(!!L,`No buffer view for ${M}`),(0,gt.vA)(1===T.size),L&&1===T.size&&function li(M,T,x){const{data:O,indices:F}=M,C=T.typedBuffer,L=T.typedBufferStride,j=F.length,S=O[0];x*=L;for(let K=0;K<j;++K)C[x]=S,x+=L}(T,L,C);break}case st.r.TANGENT:{(0,gt.vA)(4===T.size);const L=F.getField(M,U.Eq);(0,gt.vA)(!!L,`No buffer view for ${M}`),L&&function oi(M,T,x,O,F=1){if(!T)return void $r(M,x,O,F);const{data:C,indices:L}=M,S=x.typedBuffer,K=x.typedBufferStride,J=L.length,_e=T[0],Le=T[1],Ue=T[2],Fe=T[4],Xe=T[5],Ke=T[6],tt=T[8],Qe=T[9],ke=T[10],it=!(0,A.ut)(T),rt=1e-6,Ze=1-rt;if(O*=K,1===F)for(let Ce=0;Ce<J;++Ce){const Be=4*L[Ce],$e=C[Be],we=C[Be+1],Se=C[Be+2],Ve=C[Be+3];let Pe=_e*$e+Fe*we+tt*Se,Ye=Le*$e+Xe*we+Qe*Se,Je=Ue*$e+Ke*we+ke*Se;if(it){const et=Pe*Pe+Ye*Ye+Je*Je;if(et<Ze&&et>rt){const dt=1/Math.sqrt(et);Pe*=dt,Ye*=dt,Je*=dt}}S[O]=Pe,S[O+1]=Ye,S[O+2]=Je,S[O+3]=Ve,O+=K}else for(let Ce=0;Ce<J;++Ce){const Be=4*L[Ce],$e=C[Be],we=C[Be+1],Se=C[Be+2],Ve=C[Be+3];let Pe=_e*$e+Fe*we+tt*Se,Ye=Le*$e+Xe*we+Qe*Se,Je=Ue*$e+Ke*we+ke*Se;if(it){const et=Pe*Pe+Ye*Ye+Je*Je;if(et<Ze&&et>rt){const dt=1/Math.sqrt(et);Pe*=dt,Ye*=dt,Je*=dt}}for(let et=0;et<F;++et)S[O]=Pe,S[O+1]=Ye,S[O+2]=Je,S[O+3]=Ve,O+=K}}(T,x,L,C);break}case st.r.PROFILERIGHT:case st.r.PROFILEUP:case st.r.PROFILEVERTEXANDNORMAL:case st.r.FEATUREVALUE:{(0,gt.vA)(4===T.size);const L=F.getField(M,U.Eq);(0,gt.vA)(!!L,`No buffer view for ${M}`),L&&$r(T,L,C)}}}class hi{constructor(T){this.vertexBufferLayout=T}elementCount(T){return T.attributes.get(st.r.POSITION).indices.length}write(T,x,O,F,C){!function di(M,T,x,O,F,C){for(const L of T.fields.keys()){const j=M.attributes.get(L),S=j?.indices;if(j&&S)ui(L,j,x,O,F,C);else if(L===st.r.OBJECTANDLAYERIDCOLOR&&null!=M.objectAndLayerIdColor){const K=M.attributes.get(st.r.POSITION)?.indices;if(K){const J=K.length,_e=F.getField(L,U.XP);ci(M.objectAndLayerIdColor,_e,J,C)}}}}(O,this.vertexBufferLayout,T,x,F,C)}}var _i=_(94417),fi=_(89141),_r=_(66874),Yr=_(17304),mi=_(21589),Xr=_(11556),vi=_(66307),gi=_(14253),pi=_(50758);const Ei={mask:255},Ti={function:{func:W.MT.ALWAYS,ref:pe.dd.OutlineVisualElementMask,mask:pe.dd.OutlineVisualElementMask},operation:{fail:W.eA.KEEP,zFail:W.eA.KEEP,zPass:W.eA.ZERO}},Mi={function:{func:W.MT.ALWAYS,ref:pe.dd.OutlineVisualElementMask,mask:pe.dd.OutlineVisualElementMask},operation:{fail:W.eA.KEEP,zFail:W.eA.KEEP,zPass:W.eA.REPLACE}},Zr=[1,1,.5],Oi=[0,.6,.2],Ai=[0,1,.2];var Pi=_(75915);class yi extends Yr.Zo{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=(0,V.ci)(Zr),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=pe.s2.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveFactor=(0,V.fA)(0,0,0),this.instancedDoublePrecision=!1,this.normalType=Gt.W.Attribute,this.receiveShadows=!0,this.receiveAmbientOcclusion=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=(0,V.fA)(.2,.2,.2),this.diffuse=(0,V.fA)(.8,.8,.8),this.externalColor=(0,fi.fA)(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=(0,V.vt)(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.transparent=!1,this.writeDepth=!0,this.customDepthTest=pe.it.Less,this.textureAlphaMode=pe.sf.Blend,this.textureAlphaCutoff=mi.H,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=Br.m$.Occlude,this.isDecoration=!1}}class sr extends vi.w{initializeConfiguration(T,x){x.spherical=T.viewingMode===lr.RT.Global,x.doublePrecisionRequiresObfuscation=T.rctx.driverTest.doublePrecisionRequiresObfuscation.result,x.textureCoordinateType=x.hasColorTexture||x.hasMetallicRoughnessTexture||x.hasEmissionTexture||x.hasOcclusionTexture||x.hasNormalTexture?_r.q.Default:_r.q.None,x.objectAndLayerIdColorInstanced=x.instanced}initializeProgram(T){return this._initializeProgram(T,sr.shader)}_initializeProgram(T,x){return new pi.B(T.rctx,x.get().build(this.configuration),gi.D)}_makePipeline(T,x){const O=this.configuration,F=T===jt.y.NONE,C=T===jt.y.FrontFace;return(0,kt.Ey)({blending:O.output===Mt.V.Color&&O.transparent?F?bn:Ln(T):null,culling:Ci(O)?(0,kt.Xt)(O.cullFace):null,depthTest:{func:wn(T,Di(O.customDepthTest))},depthWrite:(F||C)&&O.writeDepth?kt.kn:null,drawBuffers:O.output===Mt.V.Depth?{buffers:[W.Hr.NONE]}:Wn(T),colorWrite:kt.wE,stencilWrite:O.hasOccludees?Ei:null,stencilTest:O.hasOccludees?x?Mi:Ti:null,polygonOffset:F||C?null:Bn(O.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._makePipeline(this.configuration.transparencyPassType,!0),this._makePipeline(this.configuration.transparencyPassType,!1)}getPipeline(T){return T?this._occludeePipelineState:super.getPipeline()}}function Di(M){return M===pe.it.Lequal?W.MT.LEQUAL:W.MT.LESS}function Ci(M){return M.cullFace!==pe.s2.None||!M.hasSlicePlane&&!M.transparent&&!M.doubleSidedMode}sr.shader=new Xr.$(Pi.D,()=>_.e(5301).then(_.bind(_,45301)));var We=_(8189),Ne=_(58041),Si=_(20367),bi=_(20951);class fr extends Si.nW{}(0,We._)([(0,Ne.W)({constValue:!0})],fr.prototype,"hasSliceHighlight",void 0),(0,We._)([(0,Ne.W)({constValue:!1})],fr.prototype,"hasSliceInVertexProgram",void 0),(0,We._)([(0,Ne.W)({constValue:bi.c.Pass})],fr.prototype,"pbrTextureBindType",void 0);class ze extends fr{constructor(){super(...arguments),this.output=Mt.V.Color,this.alphaDiscardMode=pe.sf.Opaque,this.doubleSidedMode=Kt.W.None,this.pbrMode=nr.A9.Disabled,this.cullFace=pe.s2.None,this.transparencyPassType=jt.y.NONE,this.normalType=Gt.W.Attribute,this.textureCoordinateType=_r.q.None,this.customDepthTest=pe.it.Less,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.multipassEnabled=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.objectAndLayerIdColorInstanced=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1}}(0,We._)([(0,Ne.W)({count:Mt.V.COUNT})],ze.prototype,"output",void 0),(0,We._)([(0,Ne.W)({count:pe.sf.COUNT})],ze.prototype,"alphaDiscardMode",void 0),(0,We._)([(0,Ne.W)({count:Kt.W.COUNT})],ze.prototype,"doubleSidedMode",void 0),(0,We._)([(0,Ne.W)({count:nr.A9.COUNT})],ze.prototype,"pbrMode",void 0),(0,We._)([(0,Ne.W)({count:pe.s2.COUNT})],ze.prototype,"cullFace",void 0),(0,We._)([(0,Ne.W)({count:jt.y.COUNT})],ze.prototype,"transparencyPassType",void 0),(0,We._)([(0,Ne.W)({count:Gt.W.COUNT})],ze.prototype,"normalType",void 0),(0,We._)([(0,Ne.W)({count:_r.q.COUNT})],ze.prototype,"textureCoordinateType",void 0),(0,We._)([(0,Ne.W)({count:pe.it.COUNT})],ze.prototype,"customDepthTest",void 0),(0,We._)([(0,Ne.W)()],ze.prototype,"spherical",void 0),(0,We._)([(0,Ne.W)()],ze.prototype,"hasVertexColors",void 0),(0,We._)([(0,Ne.W)()],ze.prototype,"hasSymbolColors",void 0),(0,We._)([(0,Ne.W)()],ze.prototype,"hasVerticalOffset",void 0),(0,We._)([(0,Ne.W)()],ze.prototype,"hasSlicePlane",void 0),(0,We._)([(0,Ne.W)()],ze.prototype,"hasSliceHighlight",void 0),(0,We._)([(0,Ne.W)()],ze.prototype,"hasColorTexture",void 0),(0,We._)([(0,Ne.W)()],ze.prototype,"hasMetallicRoughnessTexture",void 0),(0,We._)([(0,Ne.W)()],ze.prototype,"hasEmissionTexture",void 0),(0,We._)([(0,Ne.W)()],ze.prototype,"hasOcclusionTexture",void 0),(0,We._)([(0,Ne.W)()],ze.prototype,"hasNormalTexture",void 0),(0,We._)([(0,Ne.W)()],ze.prototype,"hasScreenSizePerspective",void 0),(0,We._)([(0,Ne.W)()],ze.prototype,"hasVertexTangents",void 0),(0,We._)([(0,Ne.W)()],ze.prototype,"hasOccludees",void 0),(0,We._)([(0,Ne.W)()],ze.prototype,"multipassEnabled",void 0),(0,We._)([(0,Ne.W)()],ze.prototype,"hasModelTransformation",void 0),(0,We._)([(0,Ne.W)()],ze.prototype,"offsetBackfaces",void 0),(0,We._)([(0,Ne.W)()],ze.prototype,"vvSize",void 0),(0,We._)([(0,Ne.W)()],ze.prototype,"vvColor",void 0),(0,We._)([(0,Ne.W)()],ze.prototype,"receiveShadows",void 0),(0,We._)([(0,Ne.W)()],ze.prototype,"receiveAmbientOcclusion",void 0),(0,We._)([(0,Ne.W)()],ze.prototype,"textureAlphaPremultiplied",void 0),(0,We._)([(0,Ne.W)()],ze.prototype,"instanced",void 0),(0,We._)([(0,Ne.W)()],ze.prototype,"instancedColor",void 0),(0,We._)([(0,Ne.W)()],ze.prototype,"objectAndLayerIdColorInstanced",void 0),(0,We._)([(0,Ne.W)()],ze.prototype,"instancedDoublePrecision",void 0),(0,We._)([(0,Ne.W)()],ze.prototype,"doublePrecisionRequiresObfuscation",void 0),(0,We._)([(0,Ne.W)()],ze.prototype,"writeDepth",void 0),(0,We._)([(0,Ne.W)()],ze.prototype,"transparent",void 0),(0,We._)([(0,Ne.W)()],ze.prototype,"enableOffset",void 0),(0,We._)([(0,Ne.W)()],ze.prototype,"cullAboveGround",void 0),(0,We._)([(0,Ne.W)()],ze.prototype,"snowCover",void 0),(0,We._)([(0,Ne.W)()],ze.prototype,"hasColorTextureTransform",void 0),(0,We._)([(0,Ne.W)()],ze.prototype,"hasEmissionTextureTransform",void 0),(0,We._)([(0,Ne.W)()],ze.prototype,"hasNormalTextureTransform",void 0),(0,We._)([(0,Ne.W)()],ze.prototype,"hasOcclusionTextureTransform",void 0),(0,We._)([(0,Ne.W)()],ze.prototype,"hasMetallicRoughnessTextureTransform",void 0),(0,We._)([(0,Ne.W)({constValue:!1})],ze.prototype,"occlusionPass",void 0),(0,We._)([(0,Ne.W)({constValue:!0})],ze.prototype,"hasVvInstancing",void 0),(0,We._)([(0,Ne.W)({constValue:!1})],ze.prototype,"useCustomDTRExponentForWater",void 0),(0,We._)([(0,Ne.W)({constValue:!1})],ze.prototype,"supportsTextureAtlas",void 0),(0,We._)([(0,Ne.W)({constValue:!0})],ze.prototype,"useFillLights",void 0);var Ri=_(34187);class mr extends sr{initializeConfiguration(T,x){super.initializeConfiguration(T,x),x.hasMetallicRoughnessTexture=!1,x.hasEmissionTexture=!1,x.hasOcclusionTexture=!1,x.hasNormalTexture=!1,x.hasModelTransformation=!1,x.normalType=Gt.W.Attribute,x.doubleSidedMode=Kt.W.WindingOrder,x.hasVertexTangents=!1}initializeProgram(T){return this._initializeProgram(T,mr.shader)}}mr.shader=new Xr.$(Ri.R,()=>_.e(8093).then(_.bind(_,88093)));class vr extends Br.im{constructor(T){super(T,Ui),this.supportsEdges=!0,this.produces=new Map([[ir.OPAQUE_MATERIAL,x=>((0,Mt.XY)(x)||(0,Mt.PJ)(x))&&!this.parameters.transparent],[ir.TRANSPARENT_MATERIAL,x=>((0,Mt.XY)(x)||(0,Mt.PJ)(x))&&this.parameters.transparent&&this.parameters.writeDepth],[ir.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,x=>((0,Mt.XY)(x)||(0,Mt.PJ)(x))&&this.parameters.transparent&&!this.parameters.writeDepth]]),this._configuration=new ze,this._vertexBufferLayout=function Bi(M){const T=(0,Cn.BP)().vec3f(st.r.POSITION);return M.normalType===Gt.W.Compressed?T.vec2i16(st.r.NORMALCOMPRESSED,{glNormalized:!0}):T.vec3f(st.r.NORMAL),M.hasVertexTangents&&T.vec4f(st.r.TANGENT),(M.textureId||M.normalTextureId||M.metallicRoughnessTextureId||M.emissiveTextureId||M.occlusionTextureId)&&T.vec2f(st.r.UV0),M.hasVertexColors&&T.vec4u8(st.r.COLOR),M.hasSymbolColors&&T.vec4u8(st.r.SYMBOLCOLOR),(0,ge.A)("enable-feature:objectAndLayerId-rendering")&&T.vec4u8(st.r.OBJECTANDLAYERIDCOLOR),T}(this.parameters)}isVisibleForOutput(T){return T!==Mt.V.Shadow&&T!==Mt.V.ShadowExcludeHighlight&&T!==Mt.V.ShadowHighlight||this.parameters.castShadows}isVisible(){const T=this.parameters;if(!super.isVisible()||0===T.layerOpacity)return!1;const{hasInstancedColor:x,hasVertexColors:O,hasSymbolColors:F,vvColor:C}=T,L="replace"===T.colorMixMode,j=T.opacity>0,S=T.externalColor&&T.externalColor[3]>0,K=x||C||F;return O&&K?L||j:O?L?S:j:K?L||j:L?S:j}getConfiguration(T,x){return this._configuration.output=T,this._configuration.hasNormalTexture=!!this.parameters.normalTextureId,this._configuration.hasColorTexture=!!this.parameters.textureId,this._configuration.hasVertexTangents=this.parameters.hasVertexTangents,this._configuration.instanced=this.parameters.isInstanced,this._configuration.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.hasVerticalOffset=null!=this.parameters.verticalOffset,this._configuration.hasScreenSizePerspective=null!=this.parameters.screenSizePerspective,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasSliceHighlight=this.parameters.hasSliceHighlight,this._configuration.alphaDiscardMode=this.parameters.textureAlphaMode,this._configuration.normalType=this.parameters.normalType,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,null!=this.parameters.customDepthTest&&(this._configuration.customDepthTest=this.parameters.customDepthTest),this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.cullFace=this.parameters.hasSlicePlane?pe.s2.None:this.parameters.cullFace,this._configuration.multipassEnabled=x.multipassEnabled,this._configuration.cullAboveGround=x.multipassTerrain.cullAboveGround,this._configuration.hasModelTransformation=null!=this.parameters.modelTransformation,T===Mt.V.Color&&(this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.hasSymbolColors=this.parameters.hasSymbolColors,this._configuration.doubleSidedMode=this.parameters.treeRendering?Kt.W.WindingOrder:this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?Kt.W.View:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?Kt.W.WindingOrder:Kt.W.None,this._configuration.instancedColor=this.parameters.hasInstancedColor,this._configuration.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this._configuration.receiveAmbientOcclusion=this.parameters.receiveAmbientOcclusion&&null!=x.ssao,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this._configuration.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?nr.A9.Schematic:nr.A9.Normal:nr.A9.Disabled,this._configuration.hasMetallicRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this._configuration.hasEmissionTexture=!!this.parameters.emissiveTextureId,this._configuration.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this._configuration.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this._configuration.transparencyPassType=x.transparencyPassType,this._configuration.enableOffset=x.camera.relativeElevation<5e5,this._configuration.snowCover=this.hasSnowCover(x),this._configuration.hasColorTextureTransform=!!this.parameters.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!this.parameters.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!this.parameters.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!this.parameters.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!this.parameters.metallicRoughnessTextureTransformMatrix),this._configuration}hasSnowCover(T){return null!=T.weather&&T.weatherVisible&&"snowy"===T.weather.type&&"enabled"===T.weather.snowCover}intersect(T,x,O,F,C,L){if(null!=this.parameters.verticalOffset){const j=O.camera;(0,b.s)(Or,x[12],x[13],x[14]);let S=null;switch(O.viewingMode){case lr.RT.Global:S=(0,b.n)(Jr,Or);break;case lr.RT.Local:S=(0,b.c)(Jr,Ni)}let K=0;const J=(0,b.f)(Fi,Or,j.eye),_e=(0,b.l)(J),Le=(0,b.j)(J,J,1/_e);let Ue=null;this.parameters.screenSizePerspective&&(Ue=(0,b.m)(S,Le)),K+=(0,_i.kE)(j,_e,this.parameters.verticalOffset,Ue??0,this.parameters.screenSizePerspective),(0,b.j)(S,S,K),(0,b.t)(xr,S,O.transform.inverseRotation),F=(0,b.f)(wi,F,xr),C=(0,b.f)(Wi,C,xr)}Fn(T,O,F,C,function ei(M){return null!=M?(Hr.offset=M,Hr):null}(O.verticalOffset),L)}createGLMaterial(T){return new Li(T)}createBufferWriter(){return new hi(this._vertexBufferLayout)}}class Li extends Sn.m{constructor(T){super({...T,...T.material.parameters})}_updateShadowState(T){T.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:T.shadowMap.enabled})}_updateOccludeeState(T){T.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:T.hasOccludees})}beginSlot(T){this._output===Mt.V.Color&&(this._updateShadowState(T),this._updateOccludeeState(T));const x=this._material.parameters;this.updateTexture(x.textureId);const O=T.camera.viewInverseTransposeMatrix;return(0,b.s)(x.origin,O[3],O[7],O[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(x.treeRendering?mr:sr,T)}}const Ui=new class Ii extends yi{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}},wi=(0,V.vt)(),Wi=(0,V.vt)(),Ni=(0,V.fA)(0,0,1),Jr=(0,V.vt)(),xr=(0,V.vt)(),Or=(0,V.vt)(),Fi=(0,V.vt)(),Ft=()=>at.A.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");function Ar(){return Ar=(0,P.A)(function*(M,T){const x=yield function ji(M,T){return Pr.apply(this,arguments)}(M,T),O=yield function $i(M,T){return Dr.apply(this,arguments)}(x.textureDefinitions??{},T);let F=0;for(const C in O)if(O.hasOwnProperty(C)){const L=O[C];F+=L?.image?L.image.width*L.image.height*4:0}return{resource:x,textures:O,size:F+(0,ye.iL)(x)}}),Ar.apply(this,arguments)}function Pr(){return Pr=(0,P.A)(function*(M,T){const x=T?.streamDataRequester;if(x)return function zi(M,T,x){return yr.apply(this,arguments)}(M,x,T);const O=yield(0,Ee.Ke)((0,me.A)(M,T));if(!0===O.ok)return O.value.data;(0,He.QP)(O.error),Qr(O.error)}),Pr.apply(this,arguments)}function yr(){return yr=(0,P.A)(function*(M,T,x){const O=yield(0,Ee.Ke)(T.request(M,"json",x));if(!0===O.ok)return O.value;(0,He.QP)(O.error),Qr(O.error.details.url)}),yr.apply(this,arguments)}function Qr(M){throw new nt.A("",`Request for object resource failed: ${M}`)}function Vi(M){const T=M.params,x=T.topology;let O=!0;switch(T.vertexAttributes||(Ft().warn("Geometry must specify vertex attributes"),O=!1),T.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const C=T.faces;if(C){if(T.vertexAttributes)for(const L in T.vertexAttributes){const j=C[L];j?.values?(null!=j.valueType&&"UInt32"!==j.valueType&&(Ft().warn(`Unsupported indexed geometry indices type '${j.valueType}', only UInt32 is currently supported`),O=!1),null!=j.valuesPerElement&&1!==j.valuesPerElement&&(Ft().warn(`Unsupported indexed geometry values per element '${j.valuesPerElement}', only 1 is currently supported`),O=!1)):(Ft().warn(`Indexed geometry does not specify face indices for '${L}' attribute`),O=!1)}}else Ft().warn("Indexed geometries must specify faces"),O=!1;break}default:Ft().warn(`Unsupported topology '${x}'`),O=!1}M.params.material||(Ft().warn("Geometry requires material"),O=!1);const F=M.params.vertexAttributes;for(const C in F)F[C].values||(Ft().warn("Geometries with externally defined attributes are not yet supported"),O=!1);return O}function Ki(M){const T=(0,de.Ie)();return M.forEach(x=>{const O=x.boundingInfo;null!=O&&((0,de.iT)(T,O.bbMin),(0,de.iT)(T,O.bbMax))}),T}function Dr(){return Dr=(0,P.A)(function*(M,T){const x=new Array;for(const C in M){const L=M[C],j=L.images[0].data;if(!j){Ft().warn("Externally referenced texture data is not yet supported");continue}const S=L.encoding+";base64,"+j,K="/textureDefinitions/"+C,J="rgba"===L.channels?L.alphaChannelUsage||"transparency":"none",_e={noUnpackFlip:!0,wrap:{s:W.pF.REPEAT,t:W.pF.REPEAT},preMultiplyAlpha:kr(J)!==pe.sf.Opaque},Le=T?.disableTextures?Promise.resolve(null):(0,Te.D)(S,T);x.push(Le.then(Ue=>({refId:K,image:Ue,parameters:_e,alphaChannelUsage:J})))}const O=yield Promise.all(x),F={};for(const C of O)F[C.refId]=C;return F}),Dr.apply(this,arguments)}function kr(M){switch(M){case"mask":return pe.sf.Mask;case"maskAndTransparency":return pe.sf.MaskBlend;case"none":return pe.sf.Opaque;default:return pe.sf.Blend}}function Yi(M){const T=M.params;return{id:1,material:T.material,texture:T.texture,region:T.texture}}const Xi=new lt.R(1,2,"wosr");var qt=_(61605);function Zi(M,T){return Cr.apply(this,arguments)}function Cr(){return Cr=(0,P.A)(function*(M,T){const x=qr((0,R.EM)(M));if("wosr"===x.fileType){const _e=yield T.cache?T.cache.loadWOSR(x.url,T):function Hi(M,T){return Ar.apply(this,arguments)}(x.url,T),{engineResources:Le,referenceBoundingBox:Ue}=function Gi(M,T){const x=new Array,O=new Array,F=new Array,C=new _t.O,L=M.resource,j=lt.R.parse(L.version||"1.0","wosr");Xi.validate(j);const S=L.model.name,K=L.model.geometries,J=L.materialDefinitions??{},_e=M.textures;let Le=0;const Ue=new Map;for(let Fe=0;Fe<K.length;Fe++){const Xe=K[Fe];if(!Vi(Xe))continue;const Ke=Yi(Xe),tt=Xe.params.vertexAttributes,Qe=[],ke=Pe=>{if("PerAttributeArray"===Xe.params.topology)return null;const Ye=Xe.params.faces;for(const Je in Ye)if(Je===Pe)return Ye[Je].values;return null},it=tt[st.r.POSITION],rt=it.values.length/it.valuesPerElement;for(const Pe in tt){const Ye=tt[Pe],Je=Ye.values,et=ke(Pe)??(0,ct.tM)(rt);Qe.push([Pe,new be.n(Je,et,Ye.valuesPerElement,!0)])}const Ze=Ke.texture,Ce=_e&&_e[Ze];if(Ce&&!Ue.has(Ze)){const{image:Pe,parameters:Ye}=Ce,Je=new Ir(Pe,Ye);O.push(Je),Ue.set(Ze,Je)}const Be=Ue.get(Ze),$e=Be?Be.id:void 0,we=Ke.material;let Se=C.get(we,Ze);if(null==Se){const Pe=J[we.substring(we.lastIndexOf("/")+1)].params;1===Pe.transparency&&(Pe.transparency=0);const Ye=Ce&&Ce.alphaChannelUsage,Je=Pe.transparency>0||"transparency"===Ye||"maskAndTransparency"===Ye,et=Ce?kr(Ce.alphaChannelUsage):void 0,dt={ambient:(0,V.ci)(Pe.diffuse),diffuse:(0,V.ci)(Pe.diffuse),opacity:1-(Pe.transparency||0),transparent:Je,textureAlphaMode:et,textureAlphaCutoff:.33,textureId:$e,initTextureTransparent:!0,doubleSided:!0,cullFace:pe.s2.None,colorMixMode:Pe.externalColorMixMode||"tint",textureAlphaPremultiplied:Ce?.parameters.preMultiplyAlpha??!1};T?.materialParameters&&Object.assign(dt,T.materialParameters),Se=new vr(dt),C.set(we,Ze,Se)}F.push(Se);const Ve=new ot.V(Se,Qe);Le+=Qe.find(Pe=>Pe[0]===st.r.POSITION)?.[1]?.indices.length??0,x.push(Ve)}return{engineResources:[{name:S,stageResources:{textures:O,materials:F,geometries:x},pivotOffset:L.model.pivotOffset,numberOfVertices:Le,lodThreshold:null}],referenceBoundingBox:Ki(x)}}(_e,T);return{lods:Le,referenceBoundingBox:Ue,isEsriSymbolResource:!1,isWosr:!0}}const O=yield T.cache?T.cache.loadGLTF(x.url,T,!!T.usePBR):(0,z.y)(new he.R(T.streamDataRequester),x.url,T,T.usePBR),F=O.model.meta?.ESRI_proxyEllipsoid,C=O.meta.isEsriSymbolResource&&null!=F&&"EsriRealisticTreesStyle"===O.meta.ESRI_webstyle;C&&!O.customMeta.esriTreeRendering&&(O.customMeta.esriTreeRendering=!0,function qi(M,T){for(let x=0;x<M.model.lods.length;++x){const O=M.model.lods[x];for(const F of O.parts){const C=F.attributes.normal;if(null==C)return;const L=F.attributes.position,j=L.count,S=(0,V.vt)(),K=(0,V.vt)(),J=(0,V.vt)(),_e=new Uint8Array(4*j),Le=new Float64Array(3*j),Ue=(0,A.B8)((0,w.vt)(),F.transform);let Fe=0,Xe=0;for(let Ke=0;Ke<j;Ke++){L.getVec(Ke,K),C.getVec(Ke,S),(0,b.h)(K,K,F.transform),(0,b.f)(J,K,T.center),(0,b.F)(J,J,T.radius);const tt=J[2],Qe=(0,b.l)(J),ke=Math.min(.45+.55*Qe*Qe,1);(0,b.F)(J,J,T.radius),null!==Ue&&(0,b.h)(J,J,Ue),(0,b.n)(J,J),x+1!==M.model.lods.length&&M.model.lods.length>1&&(0,b.o)(J,J,S,tt>-1?.2:Math.min(-4*tt-3.8,1)),Le[Fe]=J[0],Le[Fe+1]=J[1],Le[Fe+2]=J[2],Fe+=3,_e[Xe]=255*ke,_e[Xe+1]=255*ke,_e[Xe+2]=255*ke,_e[Xe+3]=255,Xe+=4}F.attributes.normal=new U.xs(Le),F.attributes.color=new U.XP(_e)}}}(O,F));const L=!!T.usePBR,j=O.meta.isEsriSymbolResource?{usePBR:L,isSchematic:!1,treeRendering:C,mrrFactors:[...Ai]}:{usePBR:L,isSchematic:!1,treeRendering:!1,mrrFactors:[...Zr]},S={...T.materialParameters,treeRendering:C},{engineResources:K,referenceBoundingBox:J}=en(O,j,S,T.skipHighLods&&null==x.specifiedLodIndex?{skipHighLods:!0}:{skipHighLods:!1,singleLodIndex:x.specifiedLodIndex});return{lods:K,referenceBoundingBox:J,isEsriSymbolResource:O.meta.isEsriSymbolResource,isWosr:!1}}),Cr.apply(this,arguments)}function qr(M){const T=M.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return T?{fileType:"gltf",url:T[1],specifiedLodIndex:null!=T[4]?Number(T[4]):null}:M.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:M,specifiedLodIndex:null}:{fileType:"unknown",url:M,specifiedLodIndex:null}}function en(M,T,x,O){const F=M.model,C=new Array,L=new Map,j=new Map,S=F.lods.length,K=(0,de.Ie)();return F.lods.forEach((J,_e)=>{const Le=!0===O.skipHighLods&&(S>1&&0===_e||S>3&&1===_e)||!1===O.skipHighLods&&null!=O.singleLodIndex&&_e!==O.singleLodIndex;if(Le&&0!==_e)return;const Ue=new le(J.name,J.lodThreshold,[0,0,0]);J.parts.forEach(Fe=>{const Xe=Le?new vr({}):function Ji(M,T,x,O,F,C,L){const j=T.material+(T.attributes.normal?"_normal":"")+(T.attributes.color?"_color":"")+(T.attributes.texCoord0?"_texCoord0":"")+(T.attributes.tangent?"_tangent":""),S=M.materials.get(T.material),K=null!=T.attributes.texCoord0,J=null!=T.attributes.normal;if(null==S)return null;const _e=function ki(M){switch(M){case"BLEND":return pe.sf.Blend;case"MASK":return pe.sf.Mask;case"OPAQUE":case null:case void 0:return pe.sf.Opaque}}(S.alphaMode);if(!C.has(j)){if(K){const Ze=(Ce,Be=!1)=>{if(null!=Ce&&!L.has(Ce)){const $e=M.textures.get(Ce);if(null!=$e){const we=$e.data;L.set(Ce,new Ir((0,q.x3)(we)?we.data:we,{...$e.parameters,preMultiplyAlpha:!(0,q.x3)(we)&&Be,encoding:(0,q.x3)(we)&&null!=we.encoding?we.encoding:void 0}))}}};Ze(S.textureColor,_e!==pe.sf.Opaque),Ze(S.textureNormal),Ze(S.textureOcclusion),Ze(S.textureEmissive),Ze(S.textureMetallicRoughness)}const Ue=S.color[0]**(1/qt.T),Fe=S.color[1]**(1/qt.T),Xe=S.color[2]**(1/qt.T),Ke=S.emissiveFactor[0]**(1/qt.T),tt=S.emissiveFactor[1]**(1/qt.T),Qe=S.emissiveFactor[2]**(1/qt.T),ke=null!=S.textureColor&&K?L.get(S.textureColor):null,it=function xi({normalTexture:M,metallicRoughnessTexture:T,metallicFactor:x,roughnessFactor:O,emissiveTexture:F,emissiveFactor:C,occlusionTexture:L}){return null==M&&null==T&&null==F&&(null==C||(0,b.e)(C,V.uY))&&null==L&&(null==O||1===O)&&(null==x||1===x)}({normalTexture:S.textureNormal,metallicRoughnessTexture:S.textureMetallicRoughness,metallicFactor:S.metallicFactor,roughnessFactor:S.roughnessFactor,emissiveTexture:S.textureEmissive,emissiveFactor:S.emissiveFactor,occlusionTexture:S.textureOcclusion}),rt=null!=S.normalTextureTransform?.scale?S.normalTextureTransform?.scale:X.Un;C.set(j,new vr({...O,transparent:_e===pe.sf.Blend,customDepthTest:pe.it.Lequal,textureAlphaMode:_e,textureAlphaCutoff:S.alphaCutoff,diffuse:[Ue,Fe,Xe],ambient:[Ue,Fe,Xe],opacity:S.opacity,doubleSided:S.doubleSided,doubleSidedType:"winding-order",cullFace:S.doubleSided?pe.s2.None:pe.s2.Back,hasVertexColors:!!T.attributes.color,hasVertexTangents:!!T.attributes.tangent,normalType:J?Gt.W.Attribute:Gt.W.ScreenDerivative,castShadows:!0,receiveShadows:S.receiveShadows,receiveAmbientOcclusion:S.receiveAmbientOcclustion,textureId:ke?.id,colorMixMode:S.colorMixMode,normalTextureId:null!=S.textureNormal&&K?L.get(S.textureNormal).id:void 0,textureAlphaPremultiplied:null!=ke&&!!ke.parameters.preMultiplyAlpha,occlusionTextureId:null!=S.textureOcclusion&&K?L.get(S.textureOcclusion).id:void 0,emissiveTextureId:null!=S.textureEmissive&&K?L.get(S.textureEmissive).id:void 0,metallicRoughnessTextureId:null!=S.textureMetallicRoughness&&K?L.get(S.textureMetallicRoughness).id:void 0,emissiveFactor:[Ke,tt,Qe],mrrFactors:it?[...Oi]:[S.metallicFactor,S.roughnessFactor,O.mrrFactors[2]],isSchematic:it,colorTextureTransformMatrix:N(S.colorTextureTransform),normalTextureTransformMatrix:N(S.normalTextureTransform),scale:[rt[0],rt[1]],occlusionTextureTransformMatrix:N(S.occlusionTextureTransform),emissiveTextureTransformMatrix:N(S.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:N(S.metallicRoughnessTextureTransform),...F}))}const Le=C.get(j);if(x.stageResources.materials.push(Le),K){const Ue=Fe=>{null!=Fe&&x.stageResources.textures.push(L.get(Fe))};Ue(S.textureColor),Ue(S.textureNormal),Ue(S.textureOcclusion),Ue(S.textureEmissive),Ue(S.textureMetallicRoughness)}return Le}(F,Fe,Ue,T,x,L,j),{geometry:Ke,vertexCount:tt}=function Qi(M,T){const x=M.attributes.position.count,O=(0,ne.x)(M.indices||x,M.primitiveType),F=(0,ee.oe)(3*x),{typedBuffer:C,typedBufferStride:L}=M.attributes.position;(0,D.a)(F,C,M.transform,3,L);const j=[[st.r.POSITION,new be.n(F,O,3,!0)]];if(null!=M.attributes.normal){const K=(0,ee.oe)(3*x),{typedBuffer:J,typedBufferStride:_e}=M.attributes.normal;(0,I.Ge)(er,M.transform),(0,D.t)(K,J,er,3,_e),(0,B.or)(er)&&(0,D.n)(K,K),j.push([st.r.NORMAL,new be.n(K,O,3,!0)])}if(null!=M.attributes.tangent){const K=(0,ee.oe)(4*x),{typedBuffer:J,typedBufferStride:_e}=M.attributes.tangent;(0,I.z0)(er,M.transform),(0,re.t)(K,J,er,4,_e),(0,B.or)(er)&&(0,D.n)(K,K,4),j.push([st.r.TANGENT,new be.n(K,O,4,!0)])}if(null!=M.attributes.texCoord0){const K=(0,ee.oe)(2*x),{typedBuffer:J,typedBufferStride:_e}=M.attributes.texCoord0;(0,ue.n)(K,J,2,_e),j.push([st.r.UV0,new be.n(K,O,2,!0)])}const S=M.attributes.color;if(null!=S){const K=new Uint8Array(4*x);4===S.elementCount?S instanceof U.Eq?(0,re.s)(K,S,255):S instanceof U.XP?(0,Y.c)(K,S):S instanceof U.Uz&&(0,re.s)(K,S,1/256):(K.fill(255),S instanceof U.xs?(0,D.s)(K,S.typedBuffer,255,4,S.typedBufferStride):M.attributes.color instanceof U.eI?(0,oe.c)(K,S.typedBuffer,4,M.attributes.color.typedBufferStride):M.attributes.color instanceof U.nS&&(0,D.s)(K,S.typedBuffer,1/256,4,S.typedBufferStride)),j.push([st.r.COLOR,new be.n(K,O,4,!0)])}return{geometry:new ot.V(T,j),vertexCount:x}}(Fe,Xe??new vr({})),Qe=Ke.boundingInfo;null!=Qe&&0===_e&&((0,de.iT)(K,Qe.bbMin),(0,de.iT)(K,Qe.bbMax)),null!=Xe&&(Ue.stageResources.geometries.push(Ke),Ue.numberOfVertices+=tt)}),Le||C.push(Ue)}),{engineResources:C,referenceBoundingBox:K}}const er=(0,y.vt)()},10136:(Me,Z,_)=>{var R,b;_.d(Z,{k5:()=>R}),_(69287),(b=R||(R={}))[b.Multiply=1]="Multiply",b[b.Ignore=2]="Ignore",b[b.Replace=3]="Replace",b[b.Tint=4]="Tint"},48499:(Me,Z,_)=>{_.d(Z,{BP:()=>A,l5:()=>w});var P=_(45434),R=_(44703),B=_(65388);class I{constructor(U,D){this.layout=U,this.buffer="number"==typeof D?new ArrayBuffer(D*U.stride):D;for(const re of U.fields.keys()){const ue=U.fields.get(re);this[re]=new ue.constructor(this.buffer,ue.offset,this.stride)}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(U,D){const re=this[U];return re&&re.elementCount===D.ElementCount&&re.elementType===D.ElementType?re:null}slice(U,D){return new I(this.layout,this.buffer.slice(U*this.stride,D*this.stride))}copyFrom(U,D=0,re=0,ue=U.count){const oe=this.stride;if(oe%4==0){const Y=new Uint32Array(U.buffer,D*oe,ue*oe/4);new Uint32Array(this.buffer,re*oe,ue*oe/4).set(Y)}else{const Y=new Uint8Array(U.buffer,D*oe,ue*oe);new Uint8Array(this.buffer,re*oe,ue*oe).set(Y)}return this}get usedMemory(){return this.byteLength}dispose(){}}class y{constructor(U=null){this._stride=0,this._lastAligned=0,this._fields=new Map,U&&(this._stride=U.stride,U.fields.forEach(D=>{return this._fields.set(D[0],{...D[1],constructor:(ee=D[1].constructor,de.get(ee))});var ee}))}freeze(){return this}vec2f(U,D){return this._appendField(U,P.gH,D),this}vec2f64(U,D){return this._appendField(U,P.si,D),this}vec3f(U,D){return this._appendField(U,P.xs,D),this}vec3f64(U,D){return this._appendField(U,P.Xm,D),this}vec4f(U,D){return this._appendField(U,P.Eq,D),this}vec4f64(U,D){return this._appendField(U,P.Aj,D),this}mat3f(U,D){return this._appendField(U,P.jZ,D),this}mat3f64(U,D){return this._appendField(U,P.j0,D),this}mat4f(U,D){return this._appendField(U,P.Sx,D),this}mat4f64(U,D){return this._appendField(U,P.E$,D),this}vec4u8(U,D){return this._appendField(U,P.XP,D),this}f32(U,D){return this._appendField(U,P.Y$,D),this}f64(U,D){return this._appendField(U,P.qB,D),this}u8(U,D){return this._appendField(U,P.SL,D),this}u16(U,D){return this._appendField(U,P.h,D),this}i8(U,D){return this._appendField(U,P.bf,D),this}vec2i8(U,D){return this._appendField(U,P.D6,D),this}vec2i16(U,D){return this._appendField(U,P.mJ,D),this}vec2u8(U,D){return this._appendField(U,P.LC,D),this}vec4u16(U,D){return this._appendField(U,P.Uz,D),this}u32(U,D){return this._appendField(U,P.P,D),this}_appendField(U,D,re){if(this._fields.has(U))return void(0,B.vA)(!1,`${U} already added to vertex buffer layout`);const ue=D.ElementCount*(0,R.GJ)(D.ElementType),oe=this._stride;this._stride+=ue,this._fields.set(U,{size:ue,constructor:D,offset:oe,optional:re})}createBuffer(U){return new I(this,U)}createView(U){return new I(this,U)}clone(){const U=new y;return U._stride=this._stride,U._fields=new Map,this._fields.forEach((D,re)=>U._fields.set(re,D)),U.BufferType=this.BufferType,U}get stride(){if(this._lastAligned!==this._fields.size){let U=1;this._fields.forEach(D=>U=Math.max(U,(0,R.GJ)(D.constructor.ElementType))),this._stride=Math.floor((this._stride+U-1)/U)*U,this._lastAligned=this._fields.size}return this._stride}get fields(){return this._fields}}function A(){return new y}class w{constructor(U){this.fields=new Array,U.fields.forEach((D,re)=>{const ue={...D,constructor:b(D.constructor)};this.fields.push([re,ue])}),this.stride=U.stride}}const X=[P.Y$,P.gH,P.xs,P.Eq,P.jZ,P.Sx,P.qB,P.si,P.Xm,P.Aj,P.j0,P.E$,P.SL,P.LC,P.eI,P.XP,P.h,P.Yi,P.nS,P.Uz,P.P,P.An,P.H$,P.ml,P.bf,P.D6,P.m8,P.TX,P.Qt,P.mJ,P.Vp,P.E7,P.My,P.UL,P.zD,P.Y4];function b(ee){return`${ee.ElementType}_${ee.ElementCount}`}const de=new Map;X.forEach(ee=>de.set(b(ee),ee))},61079:(Me,Z,_)=>{_.d(Z,{A:()=>B});var P=_(10136),R=_(93093);function B(I){I.vertex.code.add(R.H`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${R.H.int(P.k5.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${R.H.int(P.k5.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${R.H.int(P.k5.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${R.H.int(P.k5.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}},18238:(Me,Z,_)=>{_.d(Z,{i$:()=>w,oD:()=>X,xJ:()=>A});var P=_(74567),R=_(83224),B=_(99286),I=_(93093);function y(b){b.varyings.add("linearDepth","float")}function A(b){b.vertex.uniforms.add(new B.G("nearFar",(V,de)=>de.camera.nearFar))}function w(b){b.vertex.code.add(I.H`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function X(b,V){const{vertex:de}=b;switch(V.output){case P.V.Color:if(V.receiveShadows)return y(b),void de.code.add(I.H`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case P.V.Shadow:case P.V.ShadowHighlight:case P.V.ShadowExcludeHighlight:case P.V.ViewshedShadow:return b.include(R.em,V),y(b),A(b),w(b),void de.code.add(I.H`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}de.code.add(I.H`void forwardLinearDepth() {}`)}},43208:(Me,Z,_)=>{_.d(Z,{M:()=>R});var P=_(93093);function R(B){B.vertex.code.add(P.H`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}},65152:(Me,Z,_)=>{_.d(Z,{c:()=>B});var P=_(93093),R=_(40972);function B(I,y=!0){I.attributes.add(R.r.POSITION,"vec2"),y&&I.varyings.add("uv","vec2"),I.vertex.code.add(P.H`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      ${y?P.H`uv = position * 0.5 + vec2(0.5);`:""}
    }
  `)}},74567:(Me,Z,_)=>{var P,D;function B(D){return D===P.Shadow||D===P.ShadowHighlight||D===P.ShadowExcludeHighlight||D===P.ViewshedShadow}function I(D){return function ee(D){return function de(D){return function w(D){return D===P.Color}(D)||function y(D){return D===P.Highlight||D===P.ObjectAndLayerIdColor}(D)}(D)||function U(D){return D===P.Depth}(D)}(D)||D===P.Normal}_.d(Z,{PJ:()=>B,V:()=>P,XY:()=>I}),(D=P||(P={}))[D.Color=0]="Color",D[D.Depth=1]="Depth",D[D.Normal=2]="Normal",D[D.Shadow=3]="Shadow",D[D.ShadowHighlight=4]="ShadowHighlight",D[D.ShadowExcludeHighlight=5]="ShadowExcludeHighlight",D[D.ViewshedShadow=6]="ViewshedShadow",D[D.Highlight=7]="Highlight",D[D.ObjectAndLayerIdColor=8]="ObjectAndLayerIdColor",D[D.COUNT=9]="COUNT"},29359:(Me,Z,_)=>{_.d(Z,{HQ:()=>V});var P=_(92771),R=_(62789),B=_(28714),I=_(25866),y=_(41030),w=(_(88791),_(93093));function V(ne,q){!function de(ne,q,...Q){if(!q.hasSlicePlane){const me=w.H`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return q.hasSliceInVertexProgram&&ne.vertex.code.add(me),void ne.fragment.code.add(me)}q.hasSliceInVertexProgram&&ne.vertex.uniforms.add(...Q),ne.fragment.uniforms.add(...Q);const N=w.H`struct SliceFactors {
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
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,te=w.H`vec4 applySliceHighlight(vec4 color, vec3 pos) {
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
}`,le=q.hasSliceHighlight?w.H`
        ${te}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:w.H`#define highlightSlice(_color_, _pos_) (_color_)`;q.hasSliceInVertexProgram&&ne.vertex.code.add(N),ne.fragment.code.add(N),ne.fragment.code.add(le)}(ne,q,new y.W("slicePlaneOrigin",(Q,N)=>function re(ne,q,Q){if(null==Q.slicePlane)return I.uY;const N=ee(ne,q,Q),te=U(N,Q.slicePlane),le=D(ne,N,Q);return null!=le?(0,B.h)(Y,te,le):te}(q,Q,N)),new y.W("slicePlaneBasis1",(Q,N)=>ue(q,Q,N,N.slicePlane?.basis1)),new y.W("slicePlaneBasis2",(Q,N)=>ue(q,Q,N,N.slicePlane?.basis2)))}function ee(ne,q,Q){return ne.instancedDoublePrecision?(0,B.s)(oe,Q.camera.viewInverseTransposeMatrix[3],Q.camera.viewInverseTransposeMatrix[7],Q.camera.viewInverseTransposeMatrix[11]):q.slicePlaneLocalOrigin}function U(ne,q){return null!=ne?(0,B.f)(Y,q.origin,ne):q.origin}function D(ne,q,Q){return ne.hasSliceTranslatedView?null!=q?(0,P.Tl)(z,Q.camera.viewMatrix,q):Q.camera.viewMatrix:null}function ue(ne,q,Q,N){if(null==N||null==Q.slicePlane)return I.uY;const te=ee(ne,q,Q),le=U(te,Q.slicePlane),me=D(ne,te,Q);return null!=me?((0,B.g)(he,N,le),(0,B.h)(Y,le,me),(0,B.h)(he,he,me),(0,B.f)(he,he,Y)):N}const oe=(0,I.vt)(),Y=(0,I.vt)(),he=(0,I.vt)(),z=(0,R.vt)()},93877:(Me,Z,_)=>{_.d(Z,{d:()=>B});var P=_(18238),R=_(93093);function B(I){(0,P.i$)(I),I.vertex.code.add(R.H`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),I.vertex.code.add(R.H`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}},20367:(Me,Z,_)=>{_.d(Z,{BK:()=>z,nW:()=>oe});var P=_(8189),R=_(31610),B=_(32954),I=_(62789),y=_(28714),A=_(25866),w=_(74567),X=_(28825),b=_(3906),V=_(41030),de=_(93093),ee=_(33724),U=_(57887),D=_(58041),re=_(40972),ue=_(45825);class oe extends D.K{constructor(){super(...arguments),this.instancedDoublePrecision=!1,this.hasModelTransformation=!1}}(0,P._)([(0,D.W)()],oe.prototype,"instancedDoublePrecision",void 0),(0,P._)([(0,D.W)()],oe.prototype,"hasModelTransformation",void 0);const he=(0,B.vt)();function z(q,Q){const N=Q.hasModelTransformation,te=Q.instancedDoublePrecision;N&&(q.vertex.uniforms.add(new U.X("model",me=>me.modelTransformation??I.zK)),q.vertex.uniforms.add(new ee.k("normalLocalOriginFromModel",me=>((0,R.Ge)(he,me.modelTransformation??I.zK),he)))),Q.instanced&&te&&(q.attributes.add(re.r.INSTANCEMODELORIGINHI,"vec3"),q.attributes.add(re.r.INSTANCEMODELORIGINLO,"vec3"),q.attributes.add(re.r.INSTANCEMODEL,"mat3"),q.attributes.add(re.r.INSTANCEMODELNORMAL,"mat3"));const le=q.vertex;te&&(le.include(X.u,Q),le.uniforms.add(new V.W("viewOriginHi",(me,Ee)=>(0,ue.Zo)((0,y.s)(ne,Ee.camera.viewInverseTransposeMatrix[3],Ee.camera.viewInverseTransposeMatrix[7],Ee.camera.viewInverseTransposeMatrix[11]),ne)),new V.W("viewOriginLo",(me,Ee)=>(0,ue.jA)((0,y.s)(ne,Ee.camera.viewInverseTransposeMatrix[3],Ee.camera.viewInverseTransposeMatrix[7],Ee.camera.viewInverseTransposeMatrix[11]),ne)))),le.code.add(de.H`
    vec3 getVertexInLocalOriginSpace() {
      return ${N?te?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":te?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${te?de.H`
          // Negated inputs are intentionally the first two arguments. The other way around the obfuscation in dpAdd() stopped
          // working for macOS 14+ and iOS 17+.
          // Issue: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(-instanceModelOriginHi, -instanceModelOriginLo, viewOriginHi, viewOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),le.code.add(de.H`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${N?te?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":te?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),Q.output===w.V.Normal&&((0,b.S7)(le),le.code.add(de.H`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${N?te?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":te?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),Q.hasVertexTangents&&le.code.add(de.H`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${N?te?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":te?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}const ne=(0,A.vt)()},34416:(Me,Z,_)=>{_.d(Z,{W:()=>y,Y:()=>I});var y,A,P=_(69690),R=_(93093),B=_(40972);function I(A,w){switch(w.normalType){case y.Compressed:A.attributes.add(B.r.NORMALCOMPRESSED,"vec2"),A.vertex.code.add(R.H`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case y.Attribute:A.attributes.add(B.r.NORMAL,"vec3"),A.vertex.code.add(R.H`vec3 normalModel() {
return normal;
}`);break;case y.ScreenDerivative:A.fragment.code.add(R.H`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:(0,P.Xb)(w.normalType);case y.COUNT:case y.Ground:}}(A=y||(y={}))[A.Attribute=0]="Attribute",A[A.Compressed=1]="Compressed",A[A.Ground=2]="Ground",A[A.ScreenDerivative=3]="ScreenDerivative",A[A.COUNT=4]="COUNT"},79052:(Me,Z,_)=>{_.d(Z,{I:()=>B});var P=_(93093),R=_(40972);function B(I){I.attributes.add(R.r.POSITION,"vec3"),I.vertex.code.add(P.H`vec3 positionModel() { return position; }`)}},67334:(Me,Z,_)=>{_.d(Z,{K:()=>A});var P=_(61079),R=_(41204),B=_(93093),I=_(40972),y=_(94417);function A(w,X){X.hasSymbolColors?(w.include(P.A),w.attributes.add(I.r.SYMBOLCOLOR,"vec4"),w.varyings.add("colorMixMode","mediump float"),w.vertex.code.add(B.H`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(w.fragment.uniforms.add(new R.c("colorMixMode",b=>y.Um[b.colorMixMode])),w.vertex.code.add(B.H`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}},66874:(Me,Z,_)=>{_.d(Z,{U:()=>y,q:()=>I});var I,A,P=_(69690),R=_(93093),B=_(40972);function y(A,w){switch(w.textureCoordinateType){case I.Default:return A.attributes.add(B.r.UV0,"vec2"),A.varyings.add("vuv0","vec2"),void A.vertex.code.add(R.H`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case I.Compressed:return A.attributes.add(B.r.UV0,"vec2"),A.varyings.add("vuv0","vec2"),void A.vertex.code.add(R.H`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case I.Atlas:return A.attributes.add(B.r.UV0,"vec2"),A.varyings.add("vuv0","vec2"),A.attributes.add(B.r.UVREGION,"vec4"),A.varyings.add("vuvRegion","vec4"),void A.vertex.code.add(R.H`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:(0,P.Xb)(w.textureCoordinateType);case I.None:return void A.vertex.code.add(R.H`void forwardTextureCoordinates() {}`);case I.COUNT:return}}(A=I||(I={}))[A.None=0]="None",A[A.Default=1]="Default",A[A.Atlas=2]="Atlas",A[A.Compressed=3]="Compressed",A[A.COUNT=4]="COUNT"},23388:(Me,Z,_)=>{_.d(Z,{c:()=>B});var P=_(93093),R=_(40972);function B(I,y){y.hasVertexColors?(I.attributes.add(R.r.COLOR,"vec4"),I.varyings.add("vColor","vec4"),I.vertex.code.add(P.H`void forwardVertexColor() { vColor = color; }`),I.vertex.code.add(P.H`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):I.vertex.code.add(P.H`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}},17304:(Me,Z,_)=>{_.d(Z,{Mh:()=>b,Zo:()=>V,gy:()=>de});var P=_(69690),R=_(32954),B=_(89141),I=_(34416),y=_(83224),A=_(93093),w=_(14705),X=_(33724);function b(ee,U){switch(U.normalType){case I.W.Attribute:case I.W.Compressed:ee.include(I.Y,U),ee.varyings.add("vNormalWorld","vec3"),ee.varyings.add("vNormalView","vec3"),ee.vertex.uniforms.add(new w.h("transformNormalGlobalFromModel",D=>D.transformNormalGlobalFromModel),new X.k("transformNormalViewFromGlobal",D=>D.transformNormalViewFromGlobal)),ee.vertex.code.add(A.H`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case I.W.Ground:ee.include(y.em,U),ee.varyings.add("vNormalWorld","vec3"),ee.vertex.code.add(A.H`
        void forwardNormal() {
          vNormalWorld = ${U.spherical?A.H`normalize(vPositionWorldCameraRelative);`:A.H`vec3(0.0, 0.0, 1.0);`}
        }
        `);break;case I.W.ScreenDerivative:ee.vertex.code.add(A.H`void forwardNormal() {}`);break;default:(0,P.Xb)(U.normalType);case I.W.COUNT:}}class V extends y.dO{constructor(){super(...arguments),this.transformNormalViewFromGlobal=(0,R.vt)()}}class de extends y.EM{constructor(){super(...arguments),this.transformNormalGlobalFromModel=(0,R.vt)(),this.toMapSpace=(0,B.vt)()}}},83224:(Me,Z,_)=>{_.d(Z,{EM:()=>D,dO:()=>U,em:()=>ee});var P=_(32954),R=_(62789),B=_(25866),I=_(79052),y=_(28825),A=_(41030),w=_(88791),X=_(93093),b=_(14705),V=_(33724),de=_(57887);function ee(re,ue){re.include(I.I);const oe=re.vertex;oe.include(y.u,ue),re.varyings.add("vPositionWorldCameraRelative","vec3"),re.varyings.add("vPosition_view","vec3"),oe.uniforms.add(new w.t("transformWorldFromViewTH",Y=>Y.transformWorldFromViewTH),new w.t("transformWorldFromViewTL",Y=>Y.transformWorldFromViewTL),new V.k("transformViewFromCameraRelativeRS",Y=>Y.transformViewFromCameraRelativeRS),new de.X("transformProjFromView",Y=>Y.transformProjFromView),new b.h("transformWorldFromModelRS",Y=>Y.transformWorldFromModelRS),new A.W("transformWorldFromModelTH",Y=>Y.transformWorldFromModelTH),new A.W("transformWorldFromModelTL",Y=>Y.transformWorldFromModelTL)),oe.code.add(X.H`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),oe.code.add(X.H`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${ue.spherical?X.H`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:X.H`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),re.fragment.uniforms.add(new w.t("transformWorldFromViewTL",Y=>Y.transformWorldFromViewTL)),oe.code.add(X.H`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),re.fragment.code.add(X.H`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}class U extends X.Y{constructor(){super(...arguments),this.transformWorldFromViewTH=(0,B.vt)(),this.transformWorldFromViewTL=(0,B.vt)(),this.transformViewFromCameraRelativeRS=(0,P.vt)(),this.transformProjFromView=(0,R.vt)()}}class D extends X.Y{constructor(){super(...arguments),this.transformWorldFromModelRS=(0,P.vt)(),this.transformWorldFromModelTH=(0,B.vt)(),this.transformWorldFromModelTL=(0,B.vt)()}}},10728:(Me,Z,_)=>{_.d(Z,{r:()=>y});var P=_(69690),R=_(66874),B=_(93093);function I(A){A.fragment.code.add(B.H`vec4 textureAtlasLookup(sampler2D tex, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
return textureGrad(tex, uvAtlas, dUVdx, dUVdy);
}`)}function y(A,w){switch(A.include(R.U,w),w.textureCoordinateType){case R.q.Default:case R.q.Compressed:return void A.fragment.code.add(B.H`vec4 textureLookup(sampler2D tex, vec2 uv) {
return texture(tex, uv);
}`);case R.q.Atlas:return A.include(I),void A.fragment.code.add(B.H`vec4 textureLookup(sampler2D tex, vec2 uv) {
return textureAtlasLookup(tex, uv, vuvRegion);
}`);default:(0,P.Xb)(w.textureCoordinateType);case R.q.None:case R.q.COUNT:return}}},81077:(Me,Z,_)=>{_.d(Z,{G:()=>D});var P=_(53781),R=_(89141),B=_(28714),I=_(25866),y=_(88791),A=_(93093);function w(oe){oe.vertex.code.add(A.H`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),oe.vertex.code.add(A.H`vec3 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec3 params) {
return vec3(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z
);
}`),oe.vertex.code.add(A.H`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),oe.vertex.code.add(A.H`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),oe.vertex.code.add(A.H`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),oe.vertex.code.add(A.H`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}const de=(0,I.vt)();var ee=_(3906),U=_(18356);function D(oe,Y){const he=oe.vertex;Y.hasVerticalOffset?(function ue(oe){oe.uniforms.add(new U.E("verticalOffset",(Y,he)=>{const{minWorldLength:z,maxWorldLength:ne,screenLength:q}=Y.verticalOffset,Q=Math.tan(.5*he.camera.fovY)/(.5*he.camera.fullViewport[3]);return(0,P.s)(re,q*(he.camera.pixelRatio||1),Q,z,ne)}))}(he),Y.hasScreenSizePerspective&&(oe.include(w),function b(oe){oe.uniforms.add(new y.t("screenSizePerspectiveAlignment",Y=>function V(oe){return(0,B.s)(de,oe.parameters.divisor,oe.parameters.offset,oe.minScaleFactor)}(Y.screenSizePerspectiveAlignment||Y.screenSizePerspective)))}(he),(0,ee.yu)(oe.vertex,Y)),he.code.add(A.H`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${Y.spherical?A.H`vec3 worldNormal = normalize(worldPos + localOrigin);`:A.H`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${Y.hasScreenSizePerspective?A.H`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:A.H`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):he.code.add(A.H`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const re=(0,R.vt)()},27961:(Me,Z,_)=>{_.d(Z,{E:()=>q});var P=_(18238),R=_(74567),B=_(29359),I=_(93877),y=_(34416),A=_(93093),w=_(40972);function X(Q,N){const te=N.output===R.V.ObjectAndLayerIdColor,le=N.objectAndLayerIdColorInstanced;te&&(Q.varyings.add("objectAndLayerIdColorVarying","vec4"),Q.attributes.add(le?w.r.INSTANCEOBJECTANDLAYERIDCOLOR:w.r.OBJECTANDLAYERIDCOLOR,"vec4")),Q.vertex.code.add(A.H`
     void forwardObjectAndLayerIdColor() {
      ${te?le?A.H`objectAndLayerIdColorVarying = instanceObjectAndLayerIdColor * 0.003921568627451;`:A.H`objectAndLayerIdColorVarying = objectAndLayerIdColor * 0.003921568627451;`:A.H``} }`),Q.fragment.code.add(A.H`
      void outputObjectAndLayerIdColor() {
        ${te?A.H`fragColor = objectAndLayerIdColorVarying;`:A.H``} }`)}var b=_(66874),V=_(17304),de=_(91322);function ee(Q,N){switch(N.output){case R.V.Shadow:case R.V.ShadowHighlight:case R.V.ShadowExcludeHighlight:case R.V.ViewshedShadow:Q.fragment.include(de.U),Q.fragment.code.add(A.H`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth) {
fragColor = floatToRgba4(_calculateFragDepth(_linearDepth));
}`)}}var U=_(89141),D=_(35089);const re=(0,U.fA)(1,1,0,1),ue=(0,U.fA)(1,0,1,1);function oe(Q){Q.fragment.uniforms.add(new D.N("depthTexture",(N,te)=>te.mainDepth)),Q.fragment.constants.add("occludedHighlightFlag","vec4",re).add("unoccludedHighlightFlag","vec4",ue),Q.fragment.code.add(A.H`void outputHighlight() {
float sceneDepth = float(texelFetch(depthTexture, ivec2(gl_FragCoord.xy), 0).x);
if (gl_FragCoord.z > sceneDepth + 5e-7) {
fragColor = occludedHighlightFlag;
} else {
fragColor = unoccludedHighlightFlag;
}
}`)}var Y=_(98541),he=_(79110),z=_(3906),ne=_(67496);function q(Q,N){const{vertex:te,fragment:le}=Q,me=N.hasColorTexture&&N.alphaDiscardMode!==ne.sf.Opaque;switch(N.output){case R.V.Depth:(0,z.NB)(te,N),Q.include(I.d,N),Q.include(B.HQ,N),Q.include(b.U,N),me&&le.uniforms.add(new D.N("tex",Ee=>Ee.texture)),te.code.add(A.H`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),Q.include(he.S,N),le.code.add(A.H`
          void main(void) {
            discardBySlice(vpos);
            ${me?A.H`
                    vec4 texColor = texture(tex, ${N.hasColorTextureTransform?A.H`colorUV`:A.H`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
          }
        `);break;case R.V.Shadow:case R.V.ShadowHighlight:case R.V.ShadowExcludeHighlight:case R.V.ViewshedShadow:case R.V.ObjectAndLayerIdColor:(0,z.NB)(te,N),Q.include(I.d,N),Q.include(b.U,N),Q.include(Y.A,N),Q.include(ee,N),Q.include(B.HQ,N),Q.include(X,N),(0,P.xJ)(Q),Q.varyings.add("depth","float"),me&&le.uniforms.add(new D.N("tex",Ee=>Ee.texture)),te.code.add(A.H`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();
}`),Q.include(he.S,N),le.code.add(A.H`
          void main(void) {
            discardBySlice(vpos);
            ${me?A.H`
                    vec4 texColor = texture(tex, ${N.hasColorTextureTransform?A.H`colorUV`:A.H`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            ${N.output===R.V.ObjectAndLayerIdColor?A.H`outputObjectAndLayerIdColor();`:A.H`outputDepth(depth);`}
          }
        `);break;case R.V.Normal:(0,z.NB)(te,N),Q.include(I.d,N),Q.include(y.Y,N),Q.include(V.Mh,N),Q.include(b.U,N),Q.include(Y.A,N),me&&le.uniforms.add(new D.N("tex",ye=>ye.texture)),N.normalType===y.W.ScreenDerivative&&Q.varyings.add("vPositionView","vec3"),te.code.add(A.H`
          void main(void) {
            vpos = getVertexInLocalOriginSpace();

            ${N.normalType===y.W.Attribute||N.normalType===y.W.Compressed?A.H`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:A.H`
                  // Get vertex position in camera space for screen-space derivative normals
                  vPositionView = (view * vec4(vpos, 1.0)).xyz;
                `}
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            forwardTextureCoordinates();
          }
        `),Q.include(B.HQ,N),Q.include(he.S,N),le.code.add(A.H`
          void main() {
            discardBySlice(vpos);
            ${me?A.H`
                    vec4 texColor = texture(tex, ${N.hasColorTextureTransform?A.H`colorUV`:A.H`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}

            ${N.normalType===y.W.ScreenDerivative?A.H`vec3 normal = screenDerivativeNormal(vPositionView);`:A.H`
                  vec3 normal = normalize(vNormalWorld);
                  if (gl_FrontFacing == false){
                    normal = -normal;
                  }`}
            fragColor = vec4(0.5 + 0.5 * normal, 1.0);
          }
        `);break;case R.V.Highlight:(0,z.NB)(te,N),Q.include(I.d,N),Q.include(b.U,N),Q.include(Y.A,N),me&&le.uniforms.add(new D.N("tex",Ee=>Ee.texture)),te.code.add(A.H`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),Q.include(B.HQ,N),Q.include(he.S,N),Q.include(oe,N),le.code.add(A.H`
          void main() {
            discardBySlice(vpos);
            ${me?A.H`
                    vec4 texColor = texture(tex, ${N.hasColorTextureTransform?A.H`colorUV`:A.H`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            outputHighlight();
          }
        `)}}},85340:(Me,Z,_)=>{_.d(Z,{E:()=>w});var P=_(83953),R=_(45475),I=(_(35955),_(99286)),y=_(93093);function w(V){V.uniforms.add(new I.G("zProjectionMap",(de,ee)=>function X(V){const de=V.projectionMatrix;return(0,P.hZ)(b,de[14],de[10])}(ee.camera))),V.code.add(y.H`float linearizeDepth(float depth) {
float depthNdc = depth * 2.0 - 1.0;
float c1 = zProjectionMap[0];
float c2 = zProjectionMap[1];
return -(c1 / (depthNdc + c2 + 1e-7));
}`),V.code.add(y.H`float depthFromTexture(sampler2D depthTexture, vec2 uv) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthTexture, 0)));
float depth = texelFetch(depthTexture, iuv, 0).r;
return depth;
}`),V.code.add(y.H`float linearDepthFromTexture(sampler2D depthTexture, vec2 uv) {
return linearizeDepth(depthFromTexture(depthTexture, uv));
}`)}const b=(0,R.vt)()},28799:(Me,Z,_)=>{_.d(Z,{W:()=>U});var P=_(32954),R=_(45475),B=_(66874),I=_(10728),y=_(6698),A=_(99286),w=_(93093),X=_(33724),b=_(91784),V=_(35089),de=_(20951),ee=_(40972);function U(D,re){const ue=D.fragment;re.hasVertexTangents?(D.attributes.add(ee.r.TANGENT,"vec4"),D.varyings.add("vTangent","vec4"),ue.code.add(re.doubleSidedMode===y.W.WindingOrder?w.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`:w.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):ue.code.add(w.H`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`),re.textureCoordinateType!==B.q.None&&(D.include(I.r,re),ue.uniforms.add(re.pbrTextureBindType===de.c.Pass?new V.N("normalTexture",oe=>oe.textureNormal):new b.o("normalTexture",oe=>oe.textureNormal)),re.hasNormalTextureTransform&&(ue.uniforms.add(new A.G("scale",oe=>oe.scale??R.Un)),ue.uniforms.add(new X.k("normalTextureTransformMatrix",oe=>oe.normalTextureTransformMatrix??P.zK))),ue.code.add(w.H`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),re.hasNormalTextureTransform&&ue.code.add(w.H`mat3 normalTextureRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalTextureRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),ue.code.add(w.H`return tangentSpace * rawNormal;
}`))}},39190:(Me,Z,_)=>{_.d(Z,{n:()=>Oe});var D,re,xe,P=_(93093),R=_(35089),B=_(8189),I=_(69287),y=_(11432),A=_(48900),w=_(82595),X=_(85211),ee=(_(3248),_(35150),_(40707),_(76576)),U=_(83953);(xe=D||(D={}))[xe.RED=0]="RED",xe[xe.RG=1]="RG",xe[xe.RGBA4=2]="RGBA4",xe[xe.RGBA=3]="RGBA",xe[xe.RGBA_MIPMAP=4]="RGBA_MIPMAP",xe[xe.R16F=5]="R16F",xe[xe.RGBA16F=6]="RGBA16F",function(xe){xe[xe.DEPTH_STENCIL_TEXTURE=0]="DEPTH_STENCIL_TEXTURE",xe[xe.DEPTH16_BUFFER=1]="DEPTH16_BUFFER"}(re||(re={}));var ue=_(98877),oe=_(5922),Y=_(67496);let he=class extends ue.A{constructor(xe){super(xe),this.view=null,this.consumes={required:[]},this.produces="composite-color",this._context=null,this._dirty=!0}initialize(){this.addHandles([(0,A.wB)(()=>this.view.ready,xe=>{xe&&this.view._stage?.renderer.addRenderNode(this)},A.Vh)])}destroy(){this.view._stage?.renderer?.removeRenderNode(this)}render(){throw new oe.A("RenderNode:render-function-not-implemented","render() is not implemented.")}get camera(){return this.view.state.camera.clone()}get sunLight(){return this.bindParameters.lighting.legacy}get gl(){return this.view._stage.renderView.renderingContext.gl}acquireOutputFramebuffer(){const xe=this._frameBuffer?.getTexture()?.descriptor,Re=this.view._stage.renderer.fboCache.acquire(xe?.width??640,xe?.height??480,this.produces);return Re.fbo?.initializeAndBind(),Re}bindRenderTarget(){return this._frameBuffer?.fbo?.initializeAndBind(),this._frameBuffer}requestRender(xe){xe===Y.C7.UPDATE&&this.view._stage?.renderView.requestRender(xe),this._dirty=!0}resetWebGLState(){this.renderingContext.resetState(),this.renderingContext.bindFramebuffer(this._frameBuffer?.fbo)}get fboCache(){return this.view._stage.renderer.fboCache}get bindParameters(){return this._context.bindParameters}get renderingContext(){return this.view._stage.renderView.renderingContext}updateAnimation(){return!!this._dirty&&(this._dirty=!1,!0)}doRender(xe,Re){this._context=Re,this._frameBuffer=xe.find(({name:ht})=>ht===this.produces);try{return this.render(xe)}finally{this._frameBuffer=null}}};(0,B._)([(0,X.MZ)({constructOnly:!0})],he.prototype,"view",void 0),(0,B._)([(0,X.MZ)({constructOnly:!0})],he.prototype,"consumes",void 0),(0,B._)([(0,X.MZ)()],he.prototype,"produces",void 0),he=(0,B._)([(0,ee.$)("esri.views.3d.webgl.RenderNode")],he);const z=he;var Q=_(11556),N=_(66307),te=_(14253),le=_(50758),me=_(84254),Ee=_(41396);class ye extends N.w{initializeProgram(Re){return new le.B(Re.rctx,ye.shader.get().build(),te.D)}initializePipeline(){return(0,Ee.Ey)({colorWrite:Ee.wE})}}ye.shader=new Q.$(me.S,()=>_.e(7496).then(_.bind(_,77496)));var at=_(45475);class _t extends P.Y{constructor(){super(...arguments),this.projScale=1}}class He extends _t{constructor(){super(...arguments),this.intensity=1}}class lt extends P.Y{}class ct extends lt{constructor(){super(...arguments),this.blurSize=(0,at.vt)()}}var Te=_(30493);class be extends N.w{initializeProgram(Re){return new le.B(Re.rctx,be.shader.get().build(),te.D)}initializePipeline(){return(0,Ee.Ey)({colorWrite:Ee.wE})}}be.shader=new Q.$(Te.S,()=>_.e(2863).then(_.bind(_,42863)));var pe=_(50915),ot=_(26136),ge=_(4931);const De=2;let ut=class extends z{constructor(xe){super(xe),this.consumes={required:["normals"]},this.produces="ssao",this.isEnabled=()=>!1,this._enableTime=(0,w.l5)(0),this._passParameters=new He,this._drawParameters=new ct}initialize(){const xe=Uint8Array.from(atob("eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM"),ht=>ht.charCodeAt(0)),Re=new ge.R;Re.wrapMode=pe.pF.CLAMP_TO_EDGE,Re.pixelFormat=pe.Ab.RGB,Re.wrapMode=pe.pF.REPEAT,Re.hasMipmap=!0,Re.width=32,Re.height=32,this._passParameters.noiseTexture=new ot.g(this.renderingContext,Re,xe),this._ssaoTechnique=this.techniques.acquire(be),this._blurTechnique=this.techniques.acquire(ye),this.addHandles((0,A.wB)(()=>this.isEnabled(),()=>this._enableTime=(0,w.l5)(0)))}destroy(){this._passParameters.noiseTexture=(0,y.WD)(this._passParameters.noiseTexture),this._blurTechnique.release(),this._ssaoTechnique.release()}render(xe){const Re=this.bindParameters,ht=xe.find(({name:Nt})=>"normals"===Nt),Ge=ht?.getTexture(),G=ht?.getTexture(pe.nI),W=this.fboCache,ae=Re.camera,fe=ae.fullViewport[2],ce=ae.fullViewport[3],Ae=Math.round(fe/De),qe=Math.round(ce/De);if(!this._ssaoTechnique.compiled||!this._blurTechnique.compiled)return this._enableTime=(0,w.l5)(performance.now()),this.requestRender(),W.acquire(Ae,qe,"ssao",D.RED);0===this._enableTime&&(this._enableTime=(0,w.l5)(performance.now()));const Ie=this.renderingContext,pt=this.view.qualitySettings.fadeDuration,Wt=(0,I.qE)((5e5-ae.relativeElevation)/2e5,0,1),At=pt>0?Math.min(pt,performance.now()-this._enableTime)/pt:1,Vt=At*Wt;this._passParameters.normalTexture=Ge,this._passParameters.depthTexture=G,this._passParameters.projScale=1/ae.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*k/(0,Te.g)(ae)**6*Vt;const Ct=W.acquire(fe,ce,"ssao input",D.RG);Ie.unbindTexture(Ct.fbo.colorTexture),Ie.bindFramebuffer(Ct.fbo),Ie.setViewport(0,0,fe,ce),Ie.bindTechnique(this._ssaoTechnique,Re,this._passParameters,this._drawParameters),Ie.screen.draw();const Rt=W.acquire(Ae,qe,"ssao blur",D.RED);Ie.unbindTexture(Rt.fbo.colorTexture),Ie.bindFramebuffer(Rt.fbo),this._drawParameters.colorTexture=Ct.getTexture(),(0,U.hZ)(this._drawParameters.blurSize,0,De/ce),Ie.bindTechnique(this._blurTechnique,Re,this._passParameters,this._drawParameters),Ie.setViewport(0,0,Ae,qe),Ie.screen.draw(),Ct.release();const Jt=W.acquire(Ae,qe,"ssao",D.RED);return Ie.unbindTexture(Jt.fbo.colorTexture),Ie.bindFramebuffer(Jt.fbo),Ie.setViewport(0,0,fe,ce),Ie.setClearColor(1,1,1,0),Ie.clear(pe.hn.COLOR_BUFFER_BIT),this._drawParameters.colorTexture=Rt.getTexture(),(0,U.hZ)(this._drawParameters.blurSize,De/fe,0),Ie.bindTechnique(this._blurTechnique,Re,this._passParameters,this._drawParameters),Ie.setViewport(0,0,Ae,qe),Ie.screen.draw(),Ie.setViewport4fv(ae.fullViewport),Rt.release(),At<1&&this.requestRender(Y.C7.UPDATE),Jt}};(0,B._)([(0,X.MZ)()],ut.prototype,"consumes",void 0),(0,B._)([(0,X.MZ)()],ut.prototype,"produces",void 0),(0,B._)([(0,X.MZ)({constructOnly:!0})],ut.prototype,"techniques",void 0),(0,B._)([(0,X.MZ)({constructOnly:!0})],ut.prototype,"isEnabled",void 0),ut=(0,B._)([(0,ee.$)("esri.views.3d.webgl-engine.effects.ssao.SSAO")],ut);const k=.5;function Oe(xe,Re){const ht=xe.fragment;Re.receiveAmbientOcclusion?(ht.uniforms.add(new R.N("ssaoTex",(Ge,G)=>G.ssao?.getTexture())),ht.constants.add("blurSizePixelsInverse","float",1/De),ht.code.add(P.H`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):ht.code.add(P.H`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}},62770:(Me,Z,_)=>{_.d(Z,{kA:()=>ht,a8:()=>xe,eU:()=>Re});var P=_(69690),R=_(28714),B=_(25866),I=_(53781),y=_(89141),A=_(9933),w=_(88791),X=_(18356),b=_(93093);function V(Ge,G){const W=Ge.fragment,ae=void 0!==G.lightingSphericalHarmonicsOrder?G.lightingSphericalHarmonicsOrder:2;0===ae?(W.uniforms.add(new w.t("lightingAmbientSH0",(fe,ce)=>(0,R.s)(de,ce.lighting.sh.r[0],ce.lighting.sh.g[0],ce.lighting.sh.b[0]))),W.code.add(b.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===ae?(W.uniforms.add(new X.E("lightingAmbientSH_R",(fe,ce)=>(0,I.s)(ee,ce.lighting.sh.r[0],ce.lighting.sh.r[1],ce.lighting.sh.r[2],ce.lighting.sh.r[3])),new X.E("lightingAmbientSH_G",(fe,ce)=>(0,I.s)(ee,ce.lighting.sh.g[0],ce.lighting.sh.g[1],ce.lighting.sh.g[2],ce.lighting.sh.g[3])),new X.E("lightingAmbientSH_B",(fe,ce)=>(0,I.s)(ee,ce.lighting.sh.b[0],ce.lighting.sh.b[1],ce.lighting.sh.b[2],ce.lighting.sh.b[3]))),W.code.add(b.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`)):2===ae&&(W.uniforms.add(new w.t("lightingAmbientSH0",(fe,ce)=>(0,R.s)(de,ce.lighting.sh.r[0],ce.lighting.sh.g[0],ce.lighting.sh.b[0])),new X.E("lightingAmbientSH_R1",(fe,ce)=>(0,I.s)(ee,ce.lighting.sh.r[1],ce.lighting.sh.r[2],ce.lighting.sh.r[3],ce.lighting.sh.r[4])),new X.E("lightingAmbientSH_G1",(fe,ce)=>(0,I.s)(ee,ce.lighting.sh.g[1],ce.lighting.sh.g[2],ce.lighting.sh.g[3],ce.lighting.sh.g[4])),new X.E("lightingAmbientSH_B1",(fe,ce)=>(0,I.s)(ee,ce.lighting.sh.b[1],ce.lighting.sh.b[2],ce.lighting.sh.b[3],ce.lighting.sh.b[4])),new X.E("lightingAmbientSH_R2",(fe,ce)=>(0,I.s)(ee,ce.lighting.sh.r[5],ce.lighting.sh.r[6],ce.lighting.sh.r[7],ce.lighting.sh.r[8])),new X.E("lightingAmbientSH_G2",(fe,ce)=>(0,I.s)(ee,ce.lighting.sh.g[5],ce.lighting.sh.g[6],ce.lighting.sh.g[7],ce.lighting.sh.g[8])),new X.E("lightingAmbientSH_B2",(fe,ce)=>(0,I.s)(ee,ce.lighting.sh.b[5],ce.lighting.sh.b[6],ce.lighting.sh.b[7],ce.lighting.sh.b[8]))),W.code.add(b.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`),G.pbrMode!==A.A9.Normal&&G.pbrMode!==A.A9.Schematic||W.code.add(b.H`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const de=(0,B.vt)(),ee=(0,y.vt)();var U=_(39190),D=_(44987),re=_(87522),ue=_(64570),oe=_(35589),Y=_(20951);class he extends oe.n{constructor(G,W){super(G,"bool",Y.c.Pass,(ae,fe,ce)=>ae.setUniform1b(G,W(fe,ce)))}}var z=_(65840);_(69287),(0,B.vt)();const ut=.4;function xe(Ge){Ge.constants.add("ambientBoostFactor","float",ut)}function Re(Ge){Ge.uniforms.add(new z.m("lightingGlobalFactor",(G,W)=>W.lighting.globalFactor))}function ht(Ge,G){const W=Ge.fragment;switch(Ge.include(U.n,G),G.pbrMode!==A.A9.Disabled&&Ge.include(re.c,G),Ge.include(V,G),Ge.include(ue.p),W.code.add(b.H`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${G.pbrMode===A.A9.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),xe(W),Re(W),(0,D.Gc)(W),W.code.add(b.H`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${G.spherical?b.H`normalize(vPosWorld)`:b.H`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),(0,D.O4)(W),W.code.add(b.H`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),G.pbrMode){case A.A9.Disabled:case A.A9.WaterOnIntegratedMesh:case A.A9.Water:Ge.include(D.qU),W.code.add(b.H`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case A.A9.Normal:case A.A9.Schematic:W.code.add(b.H`const float fillLightIntensity = 0.25;
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
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),W.code.add(b.H`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),G.useFillLights?W.uniforms.add(new he("hasFillLights",(ae,fe)=>fe.enableFillLights)):W.constants.add("hasFillLights","bool",!1),W.code.add(b.H`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),W.uniforms.add(new z.m("lightingSpecularStrength",(ae,fe)=>fe.lighting.mainLight.specularStrength),new z.m("lightingEnvironmentStrength",(ae,fe)=>fe.lighting.mainLight.environmentStrength)),W.code.add(b.H`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),W.code.add(b.H`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = _emission == vec3(0.0) ? _emission : pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${G.pbrMode!==A.A9.Schematic||G.hasColorTexture?b.H`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`:b.H`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case A.A9.Simplified:case A.A9.TerrainWithWater:Ge.include(D.qU),W.code.add(b.H`const float roughnessTerrain = 0.5;
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
}`);break;default:(0,P.Xb)(G.pbrMode);case A.A9.COUNT:}}(0,B.vt)()},44987:(Me,Z,_)=>{_.d(Z,{Gc:()=>B,O4:()=>I,qU:()=>y});var P=_(88791),R=_(93093);function B(A){A.uniforms.add(new P.t("mainLightDirection",(w,X)=>X.lighting.mainLight.direction))}function I(A){A.uniforms.add(new P.t("mainLightIntensity",(w,X)=>X.lighting.mainLight.intensity))}function y(A){B(A.fragment),I(A.fragment),A.fragment.code.add(R.H`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadowing) * dotVal);
}`)}},94031:(Me,Z,_)=>{_.d(Z,{Q:()=>I});var P=_(85340),R=_(93093),B=_(35089);function I(A,w){if(!w.multipassEnabled)return;A.fragment.include(P.E),A.fragment.uniforms.add(new B.N("terrainDepthTexture",(b,V)=>V.multipassTerrain.depth?.attachment));const X=w.occlusionPass;A.fragment.code.add(R.H`
   ${X?"bool":"void"} terrainDepthTest(float fragmentDepth) {
      float depth = texelFetch(terrainDepthTexture, ivec2(gl_FragCoord.xy), 0).r;
      float linearDepth = linearizeDepth(depth);
      ${X?R.H`return fragmentDepth < linearDepth && depth < 1.0;`:R.H`
          if(fragmentDepth ${w.cullAboveGround?">":"<="} linearDepth){
            discard;
          }`}
    }`)}},6698:(Me,Z,_)=>{_.d(Z,{W:()=>I,r:()=>B});var I,y,P=_(69690),R=_(93093);function B(y,A){const w=y.fragment;switch(w.code.add(R.H`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),A.doubleSidedMode){case I.None:w.code.add(R.H`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case I.View:w.code.add(R.H`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case I.WindingOrder:w.code.add(R.H`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:(0,P.Xb)(A.doubleSidedMode);case I.COUNT:}}(y=I||(I={}))[y.None=0]="None",y[y.View=1]="View",y[y.WindingOrder=2]="WindingOrder",y[y.COUNT=3]="COUNT"},87522:(Me,Z,_)=>{_.d(Z,{c:()=>y});var P=_(93093);function R(w){const X=w.fragment.code;X.add(P.H`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),X.add(P.H`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),X.add(P.H`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}var B=_(9933),I=_(64570);function y(w,X){const b=w.fragment.code;w.include(I.p),X.pbrMode!==B.A9.Normal&&X.pbrMode!==B.A9.Schematic&&X.pbrMode!==B.A9.Simplified&&X.pbrMode!==B.A9.TerrainWithWater||(b.add(P.H`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),b.add(P.H`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),X.pbrMode!==B.A9.Normal&&X.pbrMode!==B.A9.Schematic||(w.include(R),b.add(P.H`struct PBRShadingInfo
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
};`),b.add(P.H`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),b.add(P.H`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),b.add(P.H`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}},9933:(Me,Z,_)=>{_.d(Z,{A9:()=>b,_Z:()=>de});var b,ee,P=_(10728),R=_(41030),B=_(88791),I=_(93093),y=_(91784),A=_(35089),w=_(20951);function de(ee,U){const D=ee.fragment;if(U.pbrMode===b.Normal&&(U.hasMetallicRoughnessTexture||U.hasEmissionTexture||U.hasOcclusionTexture)&&ee.include(P.r,U),U.pbrMode!==b.Schematic)if(U.pbrMode!==b.Disabled){if(U.pbrMode===b.Normal){D.code.add(I.H`vec3 mrr;
vec3 emission;
float occlusion;`);const ue=U.pbrTextureBindType;U.hasMetallicRoughnessTexture&&(D.uniforms.add(ue===w.c.Pass?new A.N("texMetallicRoughness",oe=>oe.textureMetallicRoughness):new y.o("texMetallicRoughness",oe=>oe.textureMetallicRoughness)),D.code.add(I.H`void applyMetallnessAndRoughness(vec2 uv) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),U.hasEmissionTexture&&(D.uniforms.add(ue===w.c.Pass?new A.N("texEmission",oe=>oe.textureEmissive):new y.o("texEmission",oe=>oe.textureEmissive)),D.code.add(I.H`void applyEmission(vec2 uv) {
emission *= textureLookup(texEmission, uv).rgb;
}`)),U.hasOcclusionTexture?(D.uniforms.add(ue===w.c.Pass?new A.N("texOcclusion",oe=>oe.textureOcclusion):new y.o("texOcclusion",oe=>oe.textureOcclusion)),D.code.add(I.H`void applyOcclusion(vec2 uv) {
occlusion *= textureLookup(texOcclusion, uv).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):D.code.add(I.H`float getBakedOcclusion() { return 1.0; }`),ue===w.c.Pass?D.uniforms.add(new B.t("emissionFactor",oe=>oe.emissiveFactor),new B.t("mrrFactors",oe=>oe.mrrFactors)):D.uniforms.add(new R.W("emissionFactor",oe=>oe.emissiveFactor),new R.W("mrrFactors",oe=>oe.mrrFactors)),D.code.add(I.H`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;

      ${U.hasMetallicRoughnessTexture?I.H`applyMetallnessAndRoughness(${U.hasMetallicRoughnessTextureTransform?I.H`metallicRoughnessUV`:"vuv0"});`:""}

      ${U.hasEmissionTexture?I.H`applyEmission(${U.hasEmissiveTextureTransform?I.H`emissiveUV`:"vuv0"});`:""}

      ${U.hasOcclusionTexture?I.H`applyOcclusion(${U.hasOcclusionTextureTransform?I.H`occlusionUV`:"vuv0"});`:""}
    }
  `)}}else D.code.add(I.H`float getBakedOcclusion() { return 1.0; }`);else D.code.add(I.H`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}_(2284),(ee=b||(b={}))[ee.Disabled=0]="Disabled",ee[ee.Normal=1]="Normal",ee[ee.Schematic=2]="Schematic",ee[ee.Water=3]="Water",ee[ee.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",ee[ee.Simplified=5]="Simplified",ee[ee.TerrainWithWater=6]="TerrainWithWater",ee[ee.COUNT=7]="COUNT"},64570:(Me,Z,_)=>{_.d(Z,{p:()=>R});var P=_(93093);function R(B){B.vertex.code.add(P.H`const float PI = 3.141592653589793;`),B.fragment.code.add(P.H`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}},55189:(Me,Z,_)=>{_.d(Z,{Bz:()=>oe,G:()=>ue}),_(62789),_(25866);var B=_(91322),I=_(18356),y=_(41204),A=_(93093),w=_(35589),X=_(20951);class b extends w.n{constructor(z,ne,q){super(z,"mat4",X.c.Draw,(Q,N,te,le)=>Q.setUniformMatrix4fv(z,ne(N,te,le)),q)}}class V extends w.n{constructor(z,ne,q){super(z,"mat4",X.c.Pass,(Q,N,te)=>Q.setUniformMatrix4fv(z,ne(N,te)),q)}}var de=_(35089);function ue(he,z){z.receiveShadows&&(he.fragment.uniforms.add(new V("shadowMapMatrix",(ne,q)=>q.shadowMap.getShadowMapMatrices(ne.origin),4)),Y(he))}function oe(he,z){z.receiveShadows&&(he.fragment.uniforms.add(new b("shadowMapMatrix",(ne,q)=>q.shadowMap.getShadowMapMatrices(ne.origin),4)),Y(he))}function Y(he){const z=he.fragment;z.include(B.U),z.uniforms.add(new de.N("shadowMap",(ne,q)=>q.shadowMap.depthTexture),new y.c("numCascades",(ne,q)=>q.shadowMap.numCascades),new I.E("cascadeDistances",(ne,q)=>q.shadowMap.cascadeDistances)),z.code.add(A.H`int chooseCascade(float depth, out mat4 mat) {
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
}`)}},41377:(Me,Z,_)=>{_.d(Z,{MU:()=>w,O1:()=>X,QM:()=>b,Sx:()=>A,q2:()=>y});var P=_(32954),R=_(66874),B=_(93093),I=_(33724);function y(V,de){de.hasColorTextureTransform?(V.vertex.uniforms.add(new I.k("colorTextureTransformMatrix",ee=>ee.colorTextureTransformMatrix??P.zK)),V.varyings.add("colorUV","vec2"),V.vertex.code.add(B.H`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):V.vertex.code.add(B.H`void forwardColorUV(){}`)}function A(V,de){de.hasNormalTextureTransform&&de.textureCoordinateType!==R.q.None?(V.vertex.uniforms.add(new I.k("normalTextureTransformMatrix",ee=>ee.normalTextureTransformMatrix??P.zK)),V.varyings.add("normalUV","vec2"),V.vertex.code.add(B.H`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):V.vertex.code.add(B.H`void forwardNormalUV(){}`)}function w(V,de){de.hasEmissionTextureTransform&&de.textureCoordinateType!==R.q.None?(V.vertex.uniforms.add(new I.k("emissiveTextureTransformMatrix",ee=>ee.emissiveTextureTransformMatrix??P.zK)),V.varyings.add("emissiveUV","vec2"),V.vertex.code.add(B.H`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):V.vertex.code.add(B.H`void forwardEmissiveUV(){}`)}function X(V,de){de.hasOcclusionTextureTransform&&de.textureCoordinateType!==R.q.None?(V.vertex.uniforms.add(new I.k("occlusionTextureTransformMatrix",ee=>ee.occlusionTextureTransformMatrix??P.zK)),V.varyings.add("occlusionUV","vec2"),V.vertex.code.add(B.H`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):V.vertex.code.add(B.H`void forwardOcclusionUV(){}`)}function b(V,de){de.hasMetallicRoughnessTextureTransform&&de.textureCoordinateType!==R.q.None?(V.vertex.uniforms.add(new I.k("metallicRoughnessTextureTransformMatrix",ee=>ee.metallicRoughnessTextureTransformMatrix??P.zK)),V.varyings.add("metallicRoughnessUV","vec2"),V.vertex.code.add(B.H`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):V.vertex.code.add(B.H`void forwardMetallicRoughnessUV(){}`)}},98541:(Me,Z,_)=>{_.d(Z,{A:()=>or});var P=_(88791),R=_(35589),B=_(20951);class I extends R.n{constructor($,se,ve){super($,"vec4",B.c.Pass,(ie,je,mt)=>ie.setUniform4fv($,se(je,mt)),ve)}}class y extends R.n{constructor($,se,ve){super($,"float",B.c.Pass,(ie,je,mt)=>ie.setUniform1fv($,se(je,mt)),ve)}}var A=_(93093),w=_(33724),X=_(40972),D=(_(3248),_(69287),_(31610),_(32954),_(92771),_(62789)),ue=(_(28714),_(25866)),Y=(_(48716),_(8189)),he=_(98877),z=_(85211),Q=(_(35150),_(40707),_(76576));let N=class extends he.A{constructor(){super(...arguments),this.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!1,this.DECONFLICTOR_SHOW_VISIBLE=!1,this.DECONFLICTOR_SHOW_INVISIBLE=!1,this.DECONFLICTOR_SHOW_GRID=!1,this.LABELS_SHOW_BORDER=!1,this.TEXT_SHOW_BASELINE=!1,this.TEXT_SHOW_BORDER=!1,this.OVERLAY_DRAW_DEBUG_TEXTURE=!1,this.OVERLAY_SHOW_CENTER=!1,this.SHOW_POI=!1,this.TESTS_DISABLE_OPTIMIZATIONS=!1,this.TESTS_DISABLE_FAST_UPDATES=!1,this.DRAW_MESH_GEOMETRY_NORMALS=!1,this.FEATURE_TILE_FETCH_SHOW_TILES=!1,this.FEATURE_TILE_TREE_SHOW_TILES=!1,this.TERRAIN_TILE_TREE_SHOW_TILES=!1,this.I3S_TREE_SHOW_TILES=!1,this.I3S_SHOW_MODIFICATIONS=!1,this.LOD_INSTANCE_RENDERER_DISABLE_UPDATES=!1,this.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL=!1,this.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES=!1,this.LINE_WIREFRAMES=!1}};var le,me,H;(0,Y._)([(0,z.MZ)()],N.prototype,"SCENEVIEW_HITTEST_RETURN_INTERSECTOR",void 0),(0,Y._)([(0,z.MZ)()],N.prototype,"DECONFLICTOR_SHOW_VISIBLE",void 0),(0,Y._)([(0,z.MZ)()],N.prototype,"DECONFLICTOR_SHOW_INVISIBLE",void 0),(0,Y._)([(0,z.MZ)()],N.prototype,"DECONFLICTOR_SHOW_GRID",void 0),(0,Y._)([(0,z.MZ)()],N.prototype,"LABELS_SHOW_BORDER",void 0),(0,Y._)([(0,z.MZ)()],N.prototype,"TEXT_SHOW_BASELINE",void 0),(0,Y._)([(0,z.MZ)()],N.prototype,"TEXT_SHOW_BORDER",void 0),(0,Y._)([(0,z.MZ)()],N.prototype,"OVERLAY_DRAW_DEBUG_TEXTURE",void 0),(0,Y._)([(0,z.MZ)()],N.prototype,"OVERLAY_SHOW_CENTER",void 0),(0,Y._)([(0,z.MZ)()],N.prototype,"SHOW_POI",void 0),(0,Y._)([(0,z.MZ)()],N.prototype,"TESTS_DISABLE_OPTIMIZATIONS",void 0),(0,Y._)([(0,z.MZ)()],N.prototype,"TESTS_DISABLE_FAST_UPDATES",void 0),(0,Y._)([(0,z.MZ)()],N.prototype,"DRAW_MESH_GEOMETRY_NORMALS",void 0),(0,Y._)([(0,z.MZ)()],N.prototype,"FEATURE_TILE_FETCH_SHOW_TILES",void 0),(0,Y._)([(0,z.MZ)()],N.prototype,"FEATURE_TILE_TREE_SHOW_TILES",void 0),(0,Y._)([(0,z.MZ)()],N.prototype,"TERRAIN_TILE_TREE_SHOW_TILES",void 0),(0,Y._)([(0,z.MZ)()],N.prototype,"I3S_TREE_SHOW_TILES",void 0),(0,Y._)([(0,z.MZ)()],N.prototype,"I3S_SHOW_MODIFICATIONS",void 0),(0,Y._)([(0,z.MZ)()],N.prototype,"LOD_INSTANCE_RENDERER_DISABLE_UPDATES",void 0),(0,Y._)([(0,z.MZ)()],N.prototype,"LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL",void 0),(0,Y._)([(0,z.MZ)()],N.prototype,"EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES",void 0),(0,Y._)([(0,z.MZ)()],N.prototype,"LINE_WIREFRAMES",void 0),N=(0,Y._)([(0,Q.$)("esri.views.3d.support.debugFlags")],N),new N,(H=le||(le={}))[H.Undefined=0]="Undefined",H[H.DefinedSize=1]="DefinedSize",H[H.DefinedScale=2]="DefinedScale",function(H){H[H.Undefined=0]="Undefined",H[H.DefinedAngle=1]="DefinedAngle"}(me||(me={})),(0,D.vt)(),(0,ue.vt)(),(0,D.vt)(),_(43087);const Nt=8;function or(H,$){const{vertex:se,attributes:ve}=H;$.hasVvInstancing&&($.vvSize||$.vvColor)&&ve.add(X.r.INSTANCEFEATUREATTRIBUTE,"vec4"),$.vvSize?(se.uniforms.add(new P.t("vvSizeMinSize",ie=>ie.vvSize.minSize)),se.uniforms.add(new P.t("vvSizeMaxSize",ie=>ie.vvSize.maxSize)),se.uniforms.add(new P.t("vvSizeOffset",ie=>ie.vvSize.offset)),se.uniforms.add(new P.t("vvSizeFactor",ie=>ie.vvSize.factor)),se.uniforms.add(new w.k("vvSymbolRotationMatrix",ie=>ie.vvSymbolRotationMatrix)),se.uniforms.add(new P.t("vvSymbolAnchor",ie=>ie.vvSymbolAnchor)),se.code.add(A.H`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),se.code.add(A.H`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${$.hasVvInstancing?A.H`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):se.code.add(A.H`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),$.vvColor?(se.constants.add("vvColorNumber","int",Nt),se.uniforms.add(new y("vvColorValues",ie=>ie.vvColor.values,Nt),new I("vvColorColors",ie=>ie.vvColor.colors,Nt)),se.code.add(A.H`
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

      ${$.hasVvInstancing?A.H`
            vec4 vvColor() {
              return vvGetColor(instanceFeatureAttribute);
            }`:"vec4 vvColor() { return vec4(1.0); }"}
    `)):se.code.add(A.H`vec4 vvColor() { return vec4(1.0); }`)}},21589:(Me,Z,_)=>{_.d(Z,{H:()=>P,y:()=>R});const P=.1,R=.001},79110:(Me,Z,_)=>{_.d(Z,{S:()=>b});var P=_(21589),R=_(93093);function B(ee){ee.fragment.code.add(R.H`
    #define discardOrAdjustAlpha(color) { if (color.a < ${R.H.float(P.y)}) { discard; } }
  `)}_(35589),_(20951);var w=_(65840),X=_(67496);function b(ee,U){!function de(ee,U,D){const re=ee.fragment;switch(U.alphaDiscardMode!==X.sf.Mask&&U.alphaDiscardMode!==X.sf.MaskBlend||re.uniforms.add(D),U.alphaDiscardMode){case X.sf.Blend:return ee.include(B);case X.sf.Opaque:re.code.add(R.H`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case X.sf.Mask:re.code.add(R.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case X.sf.MaskBlend:ee.fragment.code.add(R.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}(ee,U,new w.m("textureAlphaCutoff",D=>D.textureAlphaCutoff))}},8733:(Me,Z,_)=>{_.d(Z,{Ir:()=>X});var P=_(83953),R=_(45475),B=_(53781),I=_(89141),y=_(99286),A=_(18356),w=_(93093);function X(U){U.fragment.uniforms.add(new A.E("projInfo",(D,re)=>function b(U){const D=U.projectionMatrix;return 0===D[11]?(0,B.s)(V,2/(U.fullWidth*D[0]),2/(U.fullHeight*D[5]),(1+D[12])/D[0],(1+D[13])/D[5]):(0,B.s)(V,-2/(U.fullWidth*D[0]),-2/(U.fullHeight*D[5]),(1-D[8])/D[0],(1-D[9])/D[5])}(re.camera))),U.fragment.uniforms.add(new y.G("zScale",(D,re)=>function de(U){return 0===U.projectionMatrix[11]?(0,P.hZ)(ee,0,1):(0,P.hZ)(ee,1,0)}(re.camera))),U.fragment.code.add(w.H`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}const V=(0,I.vt)(),ee=(0,R.vt)()},28825:(Me,Z,_)=>{_.d(Z,{u:()=>R});var P=_(93093);function R({code:B},I){B.add(I.doublePrecisionRequiresObfuscation?P.H`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`:P.H`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}},19213:(Me,Z,_)=>{_.d(Z,{N:()=>I});var P=_(10136),R=_(93093);function B(y){y.code.add(R.H`vec4 premultiplyAlpha(vec4 v) {
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
}`)}function I(y){y.include(B),y.code.add(R.H`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${R.H.int(P.k5.Multiply)}) {
        return allMixed;
      }
      if (mode == ${R.H.int(P.k5.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${R.H.int(P.k5.Replace)}) {
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

      if (mode == ${R.H.int(P.k5.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${R.H.int(P.k5.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}},91322:(Me,Z,_)=>{_.d(Z,{U:()=>R});var P=_(93093);function R(B){B.code.add(P.H`const float MAX_RGBA4_FLOAT =
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
}`)}},35955:(Me,Z,_)=>{_(93093)},3906:(Me,Z,_)=>{_.d(Z,{yu:()=>ee,NB:()=>U,S7:()=>ue});var P=_(92771),R=_(62789),B=_(28714),I=_(25866),y=_(41030),A=_(88791),X=(_(65840),_(35589)),b=_(20951);class V extends X.n{constructor(he,z){super(he,"mat4",b.c.Draw,(ne,q,Q)=>ne.setUniformMatrix4fv(he,z(q,Q)))}}var de=_(57887);function ee(Y,he){he.instancedDoublePrecision?Y.constants.add("cameraPosition","vec3",I.uY):Y.uniforms.add(new y.W("cameraPosition",(z,ne)=>(0,B.s)(re,ne.camera.viewInverseTransposeMatrix[3]-z.origin[0],ne.camera.viewInverseTransposeMatrix[7]-z.origin[1],ne.camera.viewInverseTransposeMatrix[11]-z.origin[2])))}function U(Y,he){if(!he.instancedDoublePrecision)return void Y.uniforms.add(new de.X("proj",(ne,q)=>q.camera.projectionMatrix),new V("view",(ne,q)=>(0,P.Tl)(D,q.camera.viewMatrix,ne.origin)),new y.W("localOrigin",ne=>ne.origin));const z=ne=>(0,B.s)(re,ne.camera.viewInverseTransposeMatrix[3],ne.camera.viewInverseTransposeMatrix[7],ne.camera.viewInverseTransposeMatrix[11]);Y.uniforms.add(new de.X("proj",(ne,q)=>q.camera.projectionMatrix),new de.X("view",(ne,q)=>(0,P.Tl)(D,q.camera.viewMatrix,z(q))),new A.t("localOrigin",(ne,q)=>z(q)))}const D=(0,R.vt)(),re=(0,I.vt)();function ue(Y){Y.uniforms.add(new de.X("viewNormal",(he,z)=>z.camera.viewInverseTransposeMatrix))}},15683:(Me,Z,_)=>{_.d(Z,{t:()=>B});var P=_(35589),R=_(20951);class B extends P.n{constructor(y,A){super(y,"vec2",R.c.Draw,(w,X,b,V)=>w.setUniform2fv(y,A(X,b,V)))}}},99286:(Me,Z,_)=>{_.d(Z,{G:()=>B});var P=_(35589),R=_(20951);class B extends P.n{constructor(y,A){super(y,"vec2",R.c.Pass,(w,X,b)=>w.setUniform2fv(y,A(X,b)))}}},41030:(Me,Z,_)=>{_.d(Z,{W:()=>B});var P=_(35589),R=_(20951);class B extends P.n{constructor(y,A){super(y,"vec3",R.c.Draw,(w,X,b,V)=>w.setUniform3fv(y,A(X,b,V)))}}},88791:(Me,Z,_)=>{_.d(Z,{t:()=>B});var P=_(35589),R=_(20951);class B extends P.n{constructor(y,A){super(y,"vec3",R.c.Pass,(w,X,b)=>w.setUniform3fv(y,A(X,b)))}}},18356:(Me,Z,_)=>{_.d(Z,{E:()=>B});var P=_(35589),R=_(20951);class B extends P.n{constructor(y,A){super(y,"vec4",R.c.Pass,(w,X,b)=>w.setUniform4fv(y,A(X,b)))}}},65840:(Me,Z,_)=>{_.d(Z,{m:()=>B});var P=_(35589),R=_(20951);class B extends P.n{constructor(y,A){super(y,"float",R.c.Pass,(w,X,b)=>w.setUniform1f(y,A(X,b)))}}},41204:(Me,Z,_)=>{_.d(Z,{c:()=>B});var P=_(35589),R=_(20951);class B extends P.n{constructor(y,A){super(y,"int",R.c.Pass,(w,X,b)=>w.setUniform1i(y,A(X,b)))}}},14705:(Me,Z,_)=>{_.d(Z,{h:()=>B});var P=_(35589),R=_(20951);class B extends P.n{constructor(y,A){super(y,"mat3",R.c.Draw,(w,X,b)=>w.setUniformMatrix3fv(y,A(X,b)))}}},33724:(Me,Z,_)=>{_.d(Z,{k:()=>B});var P=_(35589),R=_(20951);class B extends P.n{constructor(y,A){super(y,"mat3",R.c.Pass,(w,X,b)=>w.setUniformMatrix3fv(y,A(X,b)))}}},57887:(Me,Z,_)=>{_.d(Z,{X:()=>B});var P=_(35589),R=_(20951);class B extends P.n{constructor(y,A){super(y,"mat4",R.c.Pass,(w,X,b)=>w.setUniformMatrix4fv(y,A(X,b)))}}},56857:(Me,Z,_)=>{_.d(Z,{N5:()=>X});var P=_(5922),B=(_(3248),_(35150)),I=_(20951),y=_(65388);class w{constructor(){this._includedModules=new Map}include(z,ne){this._includedModules.has(z)?this._includedModules.get(z):(this._includedModules.set(z,ne),z(this.builder,ne))}}class X extends w{constructor(){super(...arguments),this.vertex=new de,this.fragment=new de,this.attributes=new ee,this.varyings=new U,this.extensions=new D,this.constants=new ue,this.outputs=new re}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(z){const ne=this.extensions.generateSource(z),q=this.attributes.generateSource(z),Q=this.varyings.generateSource(z),N="vertex"===z?this.vertex:this.fragment,te=N.uniforms.generateSource(),le=N.code.generateSource(),me="vertex"===z?Y:oe,Ee=this.constants.generateSource().concat(N.constants.generateSource()),ye=this.outputs.generateSource(z);return`#version 300 es\n${ne.join("\n")}\n\n${me}\n\n${Ee.join("\n")}\n\n${te.join("\n")}\n\n${q.join("\n")}\n\n${Q.join("\n")}\n\n${ye.join("\n")}\n\n${le.join("\n")}`}generateBindPass(z){const ne=new Map;this.vertex.uniforms.entries.forEach(N=>{const te=N.bind[I.c.Pass];te&&ne.set(N.name,te)}),this.fragment.uniforms.entries.forEach(N=>{const te=N.bind[I.c.Pass];te&&ne.set(N.name,te)});const q=Array.from(ne.values()),Q=q.length;return(N,te)=>{for(let le=0;le<Q;++le)q[le](z,N,te)}}generateBindDraw(z){const ne=new Map;this.vertex.uniforms.entries.forEach(N=>{const te=N.bind[I.c.Draw];te&&ne.set(N.name,te)}),this.fragment.uniforms.entries.forEach(N=>{const te=N.bind[I.c.Draw];te&&ne.set(N.name,te)});const q=Array.from(ne.values()),Q=q.length;return(N,te,le)=>{for(let me=0;me<Q;++me)q[me](z,N,te,le)}}}class b{constructor(z){this._stage=z,this._entries=new Map}add(...z){for(const ne of z)this._add(ne);return this._stage}get(z){return this._entries.get(z)}_add(z){if(null!=z){if(this._entries.has(z.name)&&!this._entries.get(z.name).equals(z))throw new P.A(`Duplicate uniform name ${z.name} for different uniform type`);this._entries.set(z.name,z)}else B.A.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder").error(`Trying to add null Uniform from ${(new Error).stack}.`)}generateSource(){return Array.from(this._entries.values()).map(z=>null!=z.arraySize?`uniform ${z.type} ${z.name}[${z.arraySize}];`:`uniform ${z.type} ${z.name};`)}get entries(){return Array.from(this._entries.values())}}class V{constructor(z){this._stage=z,this._entries=new Array}add(z){return this._entries.push(z),this._stage}generateSource(){return this._entries}}class de extends w{constructor(){super(...arguments),this.uniforms=new b(this),this.code=new V(this),this.constants=new ue}get builder(){return this}}class ee{constructor(){this._entries=new Array}add(z,ne){this._entries.push([z,ne])}generateSource(z){return"fragment"===z?[]:this._entries.map(ne=>`in ${ne[1]} ${ne[0]};`)}}class U{constructor(){this._entries=new Map}add(z,ne){this._entries.has(z)&&(0,y.vA)(this._entries.get(z)===ne),this._entries.set(z,ne)}generateSource(z){const ne=new Array;return this._entries.forEach((q,Q)=>ne.push("vertex"===z?`out ${q} ${Q};`:`in ${q} ${Q};`)),ne}}class D{constructor(){this._entries=new Set}add(z){this._entries.add(z)}generateSource(z){const ne="vertex"===z?D.ALLOWLIST_VERTEX:D.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter(q=>ne.includes(q)).map(q=>`#extension ${q} : enable`)}}D.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],D.ALLOWLIST_VERTEX=[];class re{constructor(){this._entries=new Map}add(z,ne,q=0){const Q=this._entries.get(q);Q?(0,y.vA)(Q.name===z&&Q.type===ne,`Fragment shader output location ${q} occupied`):this._entries.set(q,{name:z,type:ne})}generateSource(z){if("vertex"===z)return[];0===this._entries.size&&this._entries.set(0,{name:re.DEFAULT_NAME,type:re.DEFAULT_TYPE});const ne=new Array;return this._entries.forEach((q,Q)=>ne.push(`layout(location = ${Q}) out ${q.type} ${q.name};`)),ne}}re.DEFAULT_TYPE="vec4",re.DEFAULT_NAME="fragColor";class ue{constructor(){this._entries=new Set}add(z,ne,q){let Q="ERROR_CONSTRUCTOR_STRING";switch(ne){case"float":Q=ue._numberToFloatStr(q);break;case"int":Q=ue._numberToIntStr(q);break;case"bool":Q=q.toString();break;case"vec2":Q=`vec2(${ue._numberToFloatStr(q[0])},                            ${ue._numberToFloatStr(q[1])})`;break;case"vec3":Q=`vec3(${ue._numberToFloatStr(q[0])},                            ${ue._numberToFloatStr(q[1])},                            ${ue._numberToFloatStr(q[2])})`;break;case"vec4":Q=`vec4(${ue._numberToFloatStr(q[0])},                            ${ue._numberToFloatStr(q[1])},                            ${ue._numberToFloatStr(q[2])},                            ${ue._numberToFloatStr(q[3])})`;break;case"ivec2":Q=`ivec2(${ue._numberToIntStr(q[0])},                             ${ue._numberToIntStr(q[1])})`;break;case"ivec3":Q=`ivec3(${ue._numberToIntStr(q[0])},                             ${ue._numberToIntStr(q[1])},                             ${ue._numberToIntStr(q[2])})`;break;case"ivec4":Q=`ivec4(${ue._numberToIntStr(q[0])},                             ${ue._numberToIntStr(q[1])},                             ${ue._numberToIntStr(q[2])},                             ${ue._numberToIntStr(q[3])})`;break;case"mat2":case"mat3":case"mat4":Q=`${ne}(${Array.prototype.map.call(q,N=>ue._numberToFloatStr(N)).join(", ")})`}return this._entries.add(`const ${ne} ${z} = ${Q};`),this}static _numberToIntStr(z){return z.toFixed(0)}static _numberToFloatStr(z){return Number.isInteger(z)?z.toFixed(1):z.toString()}generateSource(){return Array.from(this._entries)}}const oe="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",Y="precision highp float;\nprecision highp sampler2D;"},91784:(Me,Z,_)=>{_.d(Z,{o:()=>B});var P=_(35589),R=_(20951);class B extends P.n{constructor(y,A){super(y,"sampler2D",R.c.Draw,(w,X,b)=>w.bindTexture(y,A(X,b)))}}},35089:(Me,Z,_)=>{_.d(Z,{N:()=>B});var P=_(35589),R=_(20951);class B extends P.n{constructor(y,A){super(y,"sampler2D",R.c.Pass,(w,X,b)=>w.bindTexture(y,A(X,b)))}}},35589:(Me,Z,_)=>{_.d(Z,{n:()=>R});var P=_(20951);class R{constructor(I,y,A,w,X=null){if(this.name=I,this.type=y,this.arraySize=X,this.bind={[P.c.Pass]:null,[P.c.Draw]:null},w)switch(A){case P.c.Pass:this.bind[P.c.Pass]=w;break;case P.c.Draw:this.bind[P.c.Draw]=w}}equals(I){return this.type===I.type&&this.name===I.name&&this.arraySize===I.arraySize}}},93093:(Me,Z,_)=>{_.d(Z,{H:()=>B,Y:()=>R});const R=class P{};function B(I,...y){let A="";for(let w=0;w<y.length;w++)A+=I[w]+y[w];return A+=I[I.length-1],A}var I;(I=B||(B={})).int=function y(w){return Math.round(w).toString()},I.float=function A(w){return w.toPrecision(8)}},20951:(Me,Z,_)=>{var P,R;_.d(Z,{c:()=>P}),(R=P||(P={}))[R.Pass=0]="Pass",R[R.Draw=1]="Draw"},11556:(Me,Z,_)=>{_.d(Z,{$:()=>R});var P=_(10467);class R{constructor(I,y){this._module=I,this._loadModule=y}get(){return this._module}reload(){var I=this;return(0,P.A)(function*(){return I._module=yield I._loadModule(),I._module})()}}},66307:(Me,Z,_)=>{_.d(Z,{w:()=>B});var P=_(11432),R=_(50915);class B{constructor(y,A,w){this.release=w,this.initializeConfiguration(y,A),this._configuration=A.snapshot(),this._program=this.initializeProgram(y),this._pipeline=this.initializePipeline(y)}destroy(){this._program=(0,P.WD)(this._program),this._pipeline=this._configuration=null}reload(y){(0,P.WD)(this._program),this._program=this.initializeProgram(y),this._pipeline=this.initializePipeline(y)}get program(){return this._program}get compiled(){return this.program.compiled}get key(){return this._configuration.key}get configuration(){return this._configuration}ensureAttributeLocations(y){this.program.assertCompatibleVertexAttributeLocations(y)}get primitiveType(){return R.WR.TRIANGLES}getPipeline(y,A,w){return this._pipeline}initializeConfiguration(y,A){}}},58041:(Me,Z,_)=>{_.d(Z,{K:()=>R,W:()=>B});var P=_(93093);class R extends P.Y{constructor(){super(),this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map(()=>0):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const y=this._parameterNames,A={key:this.key};for(const w of y)A[w]=this[w];return A}}function B(I={}){return(y,A)=>{if(y._parameterNames=y._parameterNames??[],y._parameterNames.push(A),null!=I.constValue)Object.defineProperty(y,A,{get:()=>I.constValue});else{const w=y._parameterNames.length-1,b=Math.ceil(Math.log2(I.count||2)),V=y._parameterBits??[0];let de=0;for(;V[de]+b>16;)de++,de>=V.length&&V.push(0);y._parameterBits=V;const ee=V[de],U=(1<<b)-1<<ee;V[de]+=b,Object.defineProperty(y,A,{get(){return this[w]},set(D){if(this[w]!==D&&(this[w]=D,this._keyDirty=!0,this._parameterBits[de]=this._parameterBits[de]&~U|+D<<ee&U,"number"!=typeof D&&"boolean"!=typeof D))throw new Error("Configuration value for "+A+" must be boolean or number, got "+typeof D)}})}}}},14253:(Me,Z,_)=>{_.d(Z,{D:()=>R});var P=_(40972);const R=new Map([[P.r.POSITION,0],[P.r.NORMAL,1],[P.r.NORMALCOMPRESSED,1],[P.r.UV0,2],[P.r.COLOR,3],[P.r.COLORFEATUREATTRIBUTE,3],[P.r.SIZE,4],[P.r.TANGENT,4],[P.r.CENTEROFFSETANDDISTANCE,5],[P.r.SYMBOLCOLOR,5],[P.r.FEATUREATTRIBUTE,6],[P.r.INSTANCEFEATUREATTRIBUTE,6],[P.r.INSTANCECOLOR,7],[P.r.OBJECTANDLAYERIDCOLOR,7],[P.r.INSTANCEOBJECTANDLAYERIDCOLOR,7],[P.r.INSTANCEMODEL,8],[P.r.INSTANCEMODELNORMAL,12],[P.r.INSTANCEMODELORIGINHI,11],[P.r.INSTANCEMODELORIGINLO,15]])},2284:(Me,Z,_)=>{_.d(Z,{m:()=>A});var P=_(11432),R=_(56492),B=_(93093),I=_(67496);class y{constructor(b){this._material=b.material,this._techniques=b.techniques,this._output=b.output}dispose(){this._techniques.release(this._technique)}get technique(){return this._technique}get _stippleTextures(){return this._techniques.constructionContext.stippleTextures}get _markerTextures(){return this._techniques.constructionContext.markerTextures}ensureTechnique(b,V){return this._technique=this._techniques.releaseAndAcquire(b,this._material.getConfiguration(this._output,V),this._technique),this._technique}ensureResources(b){return I.Am.LOADED}}class A extends y{constructor(b){super(b),this._numLoading=0,this._disposed=!1,this._textures=b.textures,this._textureId=b.textureId,this._acquire(b.textureId,V=>this._texture=V),this._acquire(b.normalTextureId,V=>this._textureNormal=V),this._acquire(b.emissiveTextureId,V=>this._textureEmissive=V),this._acquire(b.occlusionTextureId,V=>this._textureOcclusion=V),this._acquire(b.metallicRoughnessTextureId,V=>this._textureMetallicRoughness=V)}dispose(){this._texture=(0,P.Gz)(this._texture),this._textureNormal=(0,P.Gz)(this._textureNormal),this._textureEmissive=(0,P.Gz)(this._textureEmissive),this._textureOcclusion=(0,P.Gz)(this._textureOcclusion),this._textureMetallicRoughness=(0,P.Gz)(this._textureMetallicRoughness),this._disposed=!0}ensureResources(b){return 0===this._numLoading?I.Am.LOADED:I.Am.LOADING}get textureBindParameters(){return new w(null!=this._texture?this._texture.glTexture:null,null!=this._textureNormal?this._textureNormal.glTexture:null,null!=this._textureEmissive?this._textureEmissive.glTexture:null,null!=this._textureOcclusion?this._textureOcclusion.glTexture:null,null!=this._textureMetallicRoughness?this._textureMetallicRoughness.glTexture:null)}updateTexture(b){null!=this._texture&&b===this._texture.id||(this._texture=(0,P.Gz)(this._texture),this._textureId=b,this._acquire(this._textureId,V=>this._texture=V))}_acquire(b,V){if(null==b)return void V(null);const de=this._textures.acquire(b);if((0,R.$X)(de))return++this._numLoading,void de.then(ee=>{if(this._disposed)return(0,P.Gz)(ee),void V(null);V(ee)}).finally(()=>--this._numLoading);V(de)}}class w extends B.Y{constructor(b=null,V=null,de=null,ee=null,U=null,D,re){super(),this.texture=b,this.textureNormal=V,this.textureEmissive=de,this.textureOcclusion=ee,this.textureMetallicRoughness=U,this.scale=D,this.normalTextureTransformMatrix=re}}},43087:(Me,Z,_)=>{_.d(Z,{im:()=>V,m$:()=>ee});var P=_(25866);_(93093);var ee,D,y=_(67496),A=_(43448),w=_(98176),X=_(14253),b=_(94417);class V extends A.J{constructor(re,ue){super(),this.type=w.X.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._vertexAttributeLocations=X.D,this._pp0=(0,P.fA)(0,0,1),this._pp1=(0,P.fA)(0,0,0),this._parameters=(0,b.qu)(re,ue),this.validateParameters(this._parameters)}get parameters(){return this._parameters}update(re){return!1}setParameters(re,ue=!0){(0,b.MB)(this._parameters,re)&&(this.validateParameters(this._parameters),ue&&this.parametersChanged())}validateParameters(re){}get visible(){return this._visible}set visible(re){re!==this._visible&&(this._visible=re,this.parametersChanged())}shouldRender(re){return this.isVisible()&&this.isVisibleForOutput(re.output)&&(!this.parameters.isDecoration||re.bindParameters.decorations===y.ID.ON)&&!!(this.parameters.renderOccluded&re.renderOccludedMask)}isVisibleForOutput(re){return!0}get renderPriority(){return this._renderPriority}set renderPriority(re){re!==this._renderPriority&&(this._renderPriority=re,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){this.repository?.materialChanged(this)}queryRenderOccludedState(re){return this.isVisible()&&this.parameters.renderOccluded===re}intersectDraped(re,ue,oe,Y,he,z){return this._pp0[0]=this._pp1[0]=Y[0],this._pp0[1]=this._pp1[1]=Y[1],this.intersect(re,ue,oe,this._pp0,this._pp1,he)}}(D=ee||(ee={}))[D.None=0]="None",D[D.Occlude=1]="Occlude",D[D.Transparent=2]="Transparent",D[D.OccludeAndTransparent=4]="OccludeAndTransparent",D[D.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",D[D.Opaque=16]="Opaque"},50758:(Me,Z,_)=>{_.d(Z,{B:()=>B});var P=_(12438),R=_(77440);class B{constructor(y,A,w){this._context=y,this._locations=w,this._textures=new Map,this._freeTextureUnits=new P.A({deallocator:null}),this._glProgram=y.programCache.acquire(A.generate("vertex"),A.generate("fragment"),w),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=A.generateBindPass(this),this.bindDraw=A.generateBindDraw(this),this._fragmentUniforms=(0,R.en)()?A.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get hasTransformFeedbackVaryings(){return this._glProgram.hasTransformFeedbackVaryings}get compiled(){return this._glProgram.compiled}setUniform1b(y,A){this._glProgram.setUniform1i(y,A?1:0)}setUniform1i(y,A){this._glProgram.setUniform1i(y,A)}setUniform1f(y,A){this._glProgram.setUniform1f(y,A)}setUniform2fv(y,A){this._glProgram.setUniform2fv(y,A)}setUniform3fv(y,A){this._glProgram.setUniform3fv(y,A)}setUniform4fv(y,A){this._glProgram.setUniform4fv(y,A)}setUniformMatrix3fv(y,A){this._glProgram.setUniformMatrix3fv(y,A)}setUniformMatrix4fv(y,A){this._glProgram.setUniformMatrix4fv(y,A)}setUniform1fv(y,A){this._glProgram.setUniform1fv(y,A)}setUniform1iv(y,A){this._glProgram.setUniform1iv(y,A)}setUniform2iv(y,A){this._glProgram.setUniform3iv(y,A)}setUniform3iv(y,A){this._glProgram.setUniform3iv(y,A)}setUniform4iv(y,A){this._glProgram.setUniform4iv(y,A)}assertCompatibleVertexAttributeLocations(y){y.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(y,A){if(null==A?.glName){const X=this._textures.get(y);return X&&(this._context.bindTexture(null,X.unit),this._freeTextureUnit(X),this._textures.delete(y)),null}let w=this._textures.get(y);return null==w?(w=this._allocTextureUnit(A),this._textures.set(y,w)):w.texture=A,this._context.useProgram(this),this.setUniform1i(y,w.unit),this._context.bindTexture(A,w.unit),w.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach((y,A)=>{this._context.bindTexture(y.texture,y.unit),this.setUniform1i(A,y.unit)}),this._fragmentUniforms?.forEach(y=>{"sampler2D"!==y.type&&"samplerCube"!==y.type||this._textures.has(y.name)||console.error(`Texture sampler ${y.name} has no bound texture`)})}_allocTextureUnit(y){return{texture:y,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(y){this._freeTextureUnits.push(y.unit)}}},83415:(Me,Z,_)=>{var P,R;_.d(Z,{y:()=>P}),(R=P||(P={}))[R.ColorAlpha=0]="ColorAlpha",R[R.FrontFace=1]="FrontFace",R[R.NONE=2]="NONE",R[R.COUNT=3]="COUNT"},94417:(Me,Z,_)=>{_.d(Z,{Um:()=>Q,qu:()=>z,MB:()=>ne,kE:()=>he});var P=_(89952),R=_(69287);_(23191),(0,R.kU)(10),(0,R.kU)(12),(0,R.kU)(70),(0,R.kU)(40);const oe={scale:0,factor:0,minScaleFactor:0};function he(N,te,le,me,Ee){let ye=(le.screenLength||0)*N.pixelRatio;null!=Ee&&(ye=function ee(N,te,le,me){return function X(N,te){return(0,R.Cc)(N*Math.max(te.scale,te.minScaleFactor),N,te.factor)}(N,function w(N,te,le){const me=le.parameters;return oe.scale=Math.min(me.divisor/(te-me.offset),1),oe.factor=function A(N){return Math.abs(N*N*N)}(N),oe}(te,le,me))}(ye,me,te,Ee));const nt=ye*Math.tan(.5*N.fovY)/(.5*N.fullHeight);return(0,R.qE)(nt*te,le.minWorldLength||0,null!=le.maxWorldLength?le.maxWorldLength:1/0)}function z(N,te){const le=te?z(te):{};for(const me in N){let Ee=N[me];Ee?.forEach&&(Ee=q(Ee)),null==Ee&&me in le||(le[me]=Ee)}return le}function ne(N,te){let le=!1;for(const me in te){const Ee=te[me];void 0!==Ee&&(Array.isArray(Ee)?null===N[me]?(N[me]=Ee.slice(),le=!0):(0,P.yo)(N[me],Ee)&&(le=!0):N[me]!==Ee&&(le=!0,N[me]=Ee))}return le}function q(N){const te=[];return N.forEach(le=>te.push(le)),te}const Q={multiply:1,ignore:2,replace:3,tint:4}},41396:(Me,Z,_)=>{_.d(Z,{Ey:()=>he,Ms:()=>ut,Xt:()=>w,kn:()=>X,ox:()=>B,p3:()=>I,wE:()=>b});var P=_(67496),R=_(50915);function B(k,Oe,xe=R.Tb.ADD,Re=[0,0,0,0]){return{srcRgb:k,srcAlpha:k,dstRgb:Oe,dstAlpha:Oe,opRgb:xe,opAlpha:xe,color:{r:Re[0],g:Re[1],b:Re[2],a:Re[3]}}}function I(k,Oe,xe,Re,ht=R.Tb.ADD,Ge=R.Tb.ADD,G=[0,0,0,0]){return{srcRgb:k,srcAlpha:Oe,dstRgb:xe,dstAlpha:Re,opRgb:ht,opAlpha:Ge,color:{r:G[0],g:G[1],b:G[2],a:G[3]}}}const y={face:R.Y7.BACK,mode:R.Ac.CCW},A={face:R.Y7.FRONT,mode:R.Ac.CCW},w=k=>k===P.s2.Back?y:k===P.s2.Front?A:null,X={zNear:0,zFar:1},b={r:!0,g:!0,b:!0,a:!0};function V(k){return q.intern(k)}function de(k){return N.intern(k)}function ee(k){return le.intern(k)}function U(k){return Ee.intern(k)}function D(k){return nt.intern(k)}function re(k){return _t.intern(k)}function ue(k){return lt.intern(k)}function oe(k){return Te.intern(k)}function Y(k){return pe.intern(k)}function he(k){return ge.intern(k)}class z{constructor(Oe,xe){this._makeKey=Oe,this._makeRef=xe,this._interns=new Map}intern(Oe){if(!Oe)return null;const xe=this._makeKey(Oe),Re=this._interns;return Re.has(xe)||Re.set(xe,this._makeRef(Oe)),Re.get(xe)??null}}function ne(k){return"["+k.join(",")+"]"}const q=new z(Q,k=>({__tag:"Blending",...k}));function Q(k){return k?ne([k.srcRgb,k.srcAlpha,k.dstRgb,k.dstAlpha,k.opRgb,k.opAlpha,k.color.r,k.color.g,k.color.b,k.color.a]):null}const N=new z(te,k=>({__tag:"Culling",...k}));function te(k){return k?ne([k.face,k.mode]):null}const le=new z(me,k=>({__tag:"PolygonOffset",...k}));function me(k){return k?ne([k.factor,k.units]):null}const Ee=new z(ye,k=>({__tag:"DepthTest",...k}));function ye(k){return k?ne([k.func]):null}const nt=new z(at,k=>({__tag:"StencilTest",...k}));function at(k){return k?ne([k.function.func,k.function.ref,k.function.mask,k.operation.fail,k.operation.zFail,k.operation.zPass]):null}const _t=new z(He,k=>({__tag:"DepthWrite",...k}));function He(k){return k?ne([k.zNear,k.zFar]):null}const lt=new z(ct,k=>({__tag:"ColorWrite",...k}));function ct(k){return k?ne([k.r,k.g,k.b,k.a]):null}const Te=new z(be,k=>({__tag:"StencilWrite",...k}));function be(k){return k?ne([k.mask]):null}const pe=new z(ot,k=>({__tag:"DrawBuffers",...k}));function ot(k){return k?ne(k.buffers):null}const ge=new z(function De(k){return k?ne([Q(k.blending),te(k.culling),me(k.polygonOffset),ye(k.depthTest),at(k.stencilTest),He(k.depthWrite),ct(k.colorWrite),be(k.stencilWrite),ot(k.drawBuffers)]):null},k=>({blending:V(k.blending),culling:de(k.culling),polygonOffset:ee(k.polygonOffset),depthTest:U(k.depthTest),stencilTest:D(k.stencilTest),depthWrite:re(k.depthWrite),colorWrite:ue(k.colorWrite),stencilWrite:oe(k.stencilWrite),drawBuffers:Y(k.drawBuffers)}));class ut{constructor(Oe){this._pipelineInvalid=!0,this._blendingInvalid=!0,this._cullingInvalid=!0,this._polygonOffsetInvalid=!0,this._depthTestInvalid=!0,this._stencilTestInvalid=!0,this._depthWriteInvalid=!0,this._colorWriteInvalid=!0,this._stencilWriteInvalid=!0,this._drawBuffersInvalid=!0,this._stateSetters=Oe}setPipeline(Oe){(this._pipelineInvalid||Oe!==this._pipeline)&&(this._setBlending(Oe.blending),this._setCulling(Oe.culling),this._setPolygonOffset(Oe.polygonOffset),this._setDepthTest(Oe.depthTest),this._setStencilTest(Oe.stencilTest),this._setDepthWrite(Oe.depthWrite),this._setColorWrite(Oe.colorWrite),this._setStencilWrite(Oe.stencilWrite),this._setDrawBuffers(Oe.drawBuffers),this._pipeline=Oe),this._pipelineInvalid=!1}invalidateBlending(){this._blendingInvalid=!0,this._pipelineInvalid=!0}invalidateCulling(){this._cullingInvalid=!0,this._pipelineInvalid=!0}invalidatePolygonOffset(){this._polygonOffsetInvalid=!0,this._pipelineInvalid=!0}invalidateDepthTest(){this._depthTestInvalid=!0,this._pipelineInvalid=!0}invalidateStencilTest(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}invalidateDepthWrite(){this._depthWriteInvalid=!0,this._pipelineInvalid=!0}invalidateColorWrite(){this._colorWriteInvalid=!0,this._pipelineInvalid=!0}invalidateStencilWrite(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}invalidateDrawBuffers(){this._drawBuffersInvalid=!0,this._pipelineInvalid=!0}_setBlending(Oe){this._blending=this._setSubState(Oe,this._blending,this._blendingInvalid,this._stateSetters.setBlending),this._blendingInvalid=!1}_setCulling(Oe){this._culling=this._setSubState(Oe,this._culling,this._cullingInvalid,this._stateSetters.setCulling),this._cullingInvalid=!1}_setPolygonOffset(Oe){this._polygonOffset=this._setSubState(Oe,this._polygonOffset,this._polygonOffsetInvalid,this._stateSetters.setPolygonOffset),this._polygonOffsetInvalid=!1}_setDepthTest(Oe){this._depthTest=this._setSubState(Oe,this._depthTest,this._depthTestInvalid,this._stateSetters.setDepthTest),this._depthTestInvalid=!1}_setStencilTest(Oe){this._stencilTest=this._setSubState(Oe,this._stencilTest,this._stencilTestInvalid,this._stateSetters.setStencilTest),this._stencilTestInvalid=!1}_setDepthWrite(Oe){this._depthWrite=this._setSubState(Oe,this._depthWrite,this._depthWriteInvalid,this._stateSetters.setDepthWrite),this._depthWriteInvalid=!1}_setColorWrite(Oe){this._colorWrite=this._setSubState(Oe,this._colorWrite,this._colorWriteInvalid,this._stateSetters.setColorWrite),this._colorWriteInvalid=!1}_setStencilWrite(Oe){this._stencilWrite=this._setSubState(Oe,this._stencilWrite,this._stencilWriteInvalid,this._stateSetters.setStencilWrite),this._stencilTestInvalid=!1}_setDrawBuffers(Oe){this._drawBuffers=this._setSubState(Oe,this._drawBuffers,this._drawBuffersInvalid,this._stateSetters.setDrawBuffers),this._drawBuffersInvalid=!1}_setSubState(Oe,xe,Re,ht){return(Re||Oe!==xe)&&(ht(Oe),this._pipelineInvalid=!0),Oe}}}}]);