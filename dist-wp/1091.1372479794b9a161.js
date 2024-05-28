"use strict";(self.webpackChunkangular_18_test=self.webpackChunkangular_18_test||[]).push([[1091],{92517:(Z,H,m)=>{m.d(H,{b:()=>F,l:()=>U,o:()=>n});var L,B=m(93293),x={exports:{}};void 0!==(L=["precision","highp","mediump","lowp","attribute","const","uniform","varying","break","continue","do","for","while","if","else","in","out","inout","float","int","void","bool","true","false","discard","return","mat2","mat3","mat4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","struct","asm","class","union","enum","typedef","template","this","packed","goto","switch","default","inline","noinline","volatile","public","static","extern","external","interface","long","short","double","half","fixed","unsigned","input","output","hvec2","hvec3","hvec4","dvec2","dvec3","dvec4","fvec2","fvec3","fvec4","sampler2DRect","sampler3DRect","sampler2DRectShadow","sizeof","cast","namespace","using"])&&(x.exports=L);const U=(0,B.g)(x.exports);var I,R={exports:{}};void 0!==(I=["<<=",">>=","++","--","<<",">>","<=",">=","==","!=","&&","||","+=","-=","*=","/=","%=","&=","^^","^=","|=","(",")","[","]",".","!","~","*","/","%","+","-","<",">","&","^","|","?",":","=",",",";","{","}"])&&(R.exports=I);const n=(0,B.g)(R.exports);var S,v,p={exports:{}};S=p,void 0!==(v=function(){return["abs","acos","all","any","asin","atan","ceil","clamp","cos","cross","dFdx","dFdy","degrees","distance","dot","equal","exp","exp2","faceforward","floor","fract","gl_BackColor","gl_BackLightModelProduct","gl_BackLightProduct","gl_BackMaterial","gl_BackSecondaryColor","gl_ClipPlane","gl_ClipVertex","gl_Color","gl_DepthRange","gl_DepthRangeParameters","gl_EyePlaneQ","gl_EyePlaneR","gl_EyePlaneS","gl_EyePlaneT","gl_Fog","gl_FogCoord","gl_FogFragCoord","gl_FogParameters","gl_FragColor","gl_FragCoord","gl_FragData","gl_FragDepth","gl_FragDepthEXT","gl_FrontColor","gl_FrontFacing","gl_FrontLightModelProduct","gl_FrontLightProduct","gl_FrontMaterial","gl_FrontSecondaryColor","gl_LightModel","gl_LightModelParameters","gl_LightModelProducts","gl_LightProducts","gl_LightSource","gl_LightSourceParameters","gl_MaterialParameters","gl_MaxClipPlanes","gl_MaxCombinedTextureImageUnits","gl_MaxDrawBuffers","gl_MaxFragmentUniformComponents","gl_MaxLights","gl_MaxTextureCoords","gl_MaxTextureImageUnits","gl_MaxTextureUnits","gl_MaxVaryingFloats","gl_MaxVertexAttribs","gl_MaxVertexTextureImageUnits","gl_MaxVertexUniformComponents","gl_ModelViewMatrix","gl_ModelViewMatrixInverse","gl_ModelViewMatrixInverseTranspose","gl_ModelViewMatrixTranspose","gl_ModelViewProjectionMatrix","gl_ModelViewProjectionMatrixInverse","gl_ModelViewProjectionMatrixInverseTranspose","gl_ModelViewProjectionMatrixTranspose","gl_MultiTexCoord0","gl_MultiTexCoord1","gl_MultiTexCoord2","gl_MultiTexCoord3","gl_MultiTexCoord4","gl_MultiTexCoord5","gl_MultiTexCoord6","gl_MultiTexCoord7","gl_Normal","gl_NormalMatrix","gl_NormalScale","gl_ObjectPlaneQ","gl_ObjectPlaneR","gl_ObjectPlaneS","gl_ObjectPlaneT","gl_Point","gl_PointCoord","gl_PointParameters","gl_PointSize","gl_Position","gl_ProjectionMatrix","gl_ProjectionMatrixInverse","gl_ProjectionMatrixInverseTranspose","gl_ProjectionMatrixTranspose","gl_SecondaryColor","gl_TexCoord","gl_TextureEnvColor","gl_TextureMatrix","gl_TextureMatrixInverse","gl_TextureMatrixInverseTranspose","gl_TextureMatrixTranspose","gl_Vertex","greaterThan","greaterThanEqual","inversesqrt","length","lessThan","lessThanEqual","log","log2","matrixCompMult","max","min","mix","mod","normalize","not","notEqual","pow","radians","reflect","refract","sign","sin","smoothstep","sqrt","step","tan","texture2D","texture2DLod","texture2DProj","texture2DProjLod","textureCube","textureCubeLod","texture2DLodEXT","texture2DProjLodEXT","textureCubeLodEXT","texture2DGradEXT","texture2DProjGradEXT","textureCubeGradEXT","textureSize","texelFetch"]}())&&(S.exports=v);const F=(0,B.g)(p.exports)},32788:(Z,H,m)=>{m.d(H,{g:()=>S});var B=m(10467),L=m(89952),U=(m(3248),m(35150)),w=m(79139),R=m(77440),n=m(50915);const p=()=>U.A.getLogger("esri.views.webgl.BufferObject");class S{static createIndex(_,f,E){return new S(_,n.NZ.ELEMENT_ARRAY_BUFFER,f,E)}static createVertex(_,f,E){return new S(_,n.NZ.ARRAY_BUFFER,f,E)}static createUniform(_,f,E){return new S(_,n.NZ.UNIFORM_BUFFER,f,E)}static createPixelPack(_,f=n._U.STREAM_READ,E){const A=new S(_,n.NZ.PIXEL_PACK_BUFFER,f);return E&&A.setSize(E),A}static createPixelUnpack(_,f=n._U.STREAM_DRAW,E){return new S(_,n.NZ.PIXEL_UNPACK_BUFFER,f,E)}static createTransformFeedback(_,f=n._U.STATIC_DRAW,E){const A=new S(_,n.NZ.TRANSFORM_FEEDBACK_BUFFER,f);return A.setSize(E),A}constructor(_,f,E,A){this._context=_,this.bufferType=f,this.usage=E,this._glName=null,this._size=-1,this._indexType=void 0,_.instanceCounter.increment(n.vt.BufferObject,this),this._glName=this._context.gl.createBuffer(),(0,R.Y2)(this._context.gl),A&&this.setData(A)}get glName(){return this._glName}get size(){return this._size}get indexType(){return this._indexType}get usedMemory(){return this.bufferType===n.NZ.ELEMENT_ARRAY_BUFFER?this._indexType===n.pe.UNSIGNED_INT?4*this._size:2*this._size:this._size}get _isVAOAware(){return this.bufferType===n.NZ.ELEMENT_ARRAY_BUFFER||this.bufferType===n.NZ.ARRAY_BUFFER}dispose(){this._context?.gl?(this._glName&&(this._context.gl.deleteBuffer(this._glName),this._glName=null),this._context.instanceCounter.decrement(n.vt.BufferObject,this),this._context=null):this._glName&&p().warn("Leaked WebGL buffer object")}setSize(_,f=null){if(this.bufferType===n.NZ.ELEMENT_ARRAY_BUFFER&&null!=f)switch(this._indexType=f,f){case n.pe.UNSIGNED_SHORT:_*=2;break;case n.pe.UNSIGNED_INT:_*=4}this._setBufferData(_)}setData(_){if(!_)return;let f=_.byteLength;this.bufferType===n.NZ.ELEMENT_ARRAY_BUFFER&&((0,w.jq)(_)&&(f/=2,this._indexType=n.pe.UNSIGNED_SHORT),(0,w.XJ)(_)&&(f/=4,this._indexType=n.pe.UNSIGNED_INT)),this._setBufferData(f,_)}_setBufferData(_,f=null){this._size=_;const E=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const A=this._context.gl;A.bufferData(this.bufferType,null!=f?f:_,this.usage),(0,R.Y2)(A),this._isVAOAware&&this._context.bindVAO(E)}setSubData(_,f,E,A){if(!_)return;const j=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const{gl:T}=this._context;T.bufferSubData(this.bufferType,f*_.BYTES_PER_ELEMENT,_,E,A-E),(0,R.Y2)(T),this._isVAOAware&&this._context.bindVAO(j)}getSubData(_,f=0,E,A){if(E<0||A<0)return;const j=function I(v){return(0,L.Xj)(v)}(_)?_.BYTES_PER_ELEMENT:1;if(j*((E??0)+(A??0))>_.byteLength)return;f+j*(A??0)>this.usedMemory&&p().warn("Potential problem getting subdata: requested data exceeds buffer size!");const T=this._context.gl;this.bufferType===n.NZ.TRANSFORM_FEEDBACK_BUFFER?(this._context.bindBuffer(this,n.NZ.TRANSFORM_FEEDBACK_BUFFER),T.getBufferSubData(n.NZ.TRANSFORM_FEEDBACK_BUFFER,f,_,E,A),this._context.unbindBuffer(n.NZ.TRANSFORM_FEEDBACK_BUFFER)):(this._context.bindBuffer(this,n.NZ.COPY_READ_BUFFER),T.getBufferSubData(n.NZ.COPY_READ_BUFFER,f,_,E,A),this._context.unbindBuffer(n.NZ.COPY_READ_BUFFER))}getSubDataAsync(_,f=0,E,A){var j=this;return(0,B.A)(function*(){yield j._context.clientWaitAsync(),j.getSubData(_,f,E,A)})()}}},79061:(Z,H,m)=>{m.d(H,{H:()=>v});var B=m(10467),x=(m(3248),m(35150)),U=m(11432),w=m(32788),R=m(77440),n=m(50915),p=m(68165),F=m(17107),S=m(26136);class v{constructor(o,a,l=null){this._context=o,this._glName=null,this._colorAttachments=new Map,this._depthStencilBuffer=null,this._depthStencilTexture=null,this._initialized=!1,o.instanceCounter.increment(n.vt.FramebufferObject,this);const b=_(a)?a:new S.g(this._context,a);if(this._colorAttachments.set(n.Nm.COLOR_ATTACHMENT0,b),this._validateTextureDescriptor(b.descriptor),this._validateColorAttachmentPoint(n.Nm.COLOR_ATTACHMENT0),null!=l)if(function E(T){return _(T)||null!=T&&"pixelFormat"in T}(l))this._depthStencilTexture=_(l)?l:new S.g(this._context,l),this._validateTextureDescriptor(this._depthStencilTexture.descriptor);else{const P=function f(T){return null!=T&&"type"in T&&T.type===p.p.RenderBuffer}(l)?l:new F.l(this._context,l);this._depthStencilBuffer=P,this._validateRenderBufferDescriptor(P.descriptor)}}dispose(){if(0===this._colorAttachments.size&&!this._glName)return;const o=this._context.getBoundFramebufferObject();this._colorAttachments.forEach((a,l)=>this.detachColorTexture(l)?.dispose()),this.detachDepthStencilBuffer()?.dispose(),this.detachDepthStencilTexture()?.dispose(),this._glName&&(this._context.gl.deleteFramebuffer(this._glName),this._glName=null),this._context.bindFramebuffer(o),this._context.instanceCounter.decrement(n.vt.FramebufferObject,this)}get glName(){return this._glName}get colorTexture(){return this._colorAttachments.get(n.Nm.COLOR_ATTACHMENT0)}get depthStencil(){return this._depthStencilTexture||this._depthStencilBuffer}get depthStencilTexture(){return this._depthStencilTexture}get width(){return this._colorAttachments.get(n.Nm.COLOR_ATTACHMENT0)?.descriptor?.width??0}get height(){return this._colorAttachments.get(n.Nm.COLOR_ATTACHMENT0)?.descriptor?.height??0}get usedMemory(){return[...this._colorAttachments].reduce((o,[a,l])=>o+l.usedMemory,this.depthStencil?.usedMemory??0)}getColorTexture(o){const a=this._colorAttachments.get(o);return a&&_(a)?a:null}get colorAttachments(){return[...this._colorAttachments.keys()]}attachColorTexture(o,a=n.Nm.COLOR_ATTACHMENT0){o&&(this._validateColorAttachmentPoint(a),this._validateTextureDescriptor(o.descriptor),this.detachColorTexture(a)?.dispose(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(o.glName,a)),this._colorAttachments.set(a,o))}detachColorTexture(o=n.Nm.COLOR_ATTACHMENT0){const a=this._colorAttachments.get(o);if(a){if(this._initialized){const l=this._context.getBoundFramebufferObject();this._context.bindFramebuffer(this),this._framebufferTexture2D(null,o),this._context.bindFramebuffer(l)}return this._colorAttachments.delete(o),a}}setColorTextureTarget(o,a=n.Nm.COLOR_ATTACHMENT0){const l=this._colorAttachments.get(a);l&&this._framebufferTexture2D(l.glName,a,o)}attachDepthStencil(o){if(o)switch(o.type){case p.p.Texture:return this._attachDepthStencilTexture(o);case p.p.RenderBuffer:return this._attachDepthStencilBuffer(o)}}_attachDepthStencilTexture(o){if(null==o)return;const a=o.descriptor;a.pixelFormat!==n.Ab.DEPTH_STENCIL&&a.pixelFormat!==n.Ab.DEPTH24_STENCIL8&&console.error("Depth/Stencil texture must have a pixel type of DEPTH_STENCIL!"),a.dataType!==n.ld.UNSIGNED_INT_24_8&&console.error("Depth/Stencil texture must have data type of UNSIGNED_INT_24_8!"),this._validateTextureDescriptor(a),this._disposeDepthStencilAttachments(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(o.glName,n.nI)),this._depthStencilTexture?.dispose(),this._depthStencilTexture=o}detachDepthStencilTexture(){const o=this._depthStencilTexture;if(o&&this._initialized){const a=this._context.getBoundFramebufferObject();this._context.bindFramebuffer(this),this._framebufferTexture2D(null,n.nI),this._context.bindFramebuffer(a)}return this._depthStencilTexture=null,o}_attachDepthStencilBuffer(o){if(null==o)return;const a=o.descriptor;if(this._validateRenderBufferDescriptor(a),this._disposeDepthStencilAttachments(),this._initialized){this._context.bindFramebuffer(this);const l=this._context.gl,b=this._getGLAttachmentPoint(a);l.framebufferRenderbuffer(n.R.FRAMEBUFFER,b,l.RENDERBUFFER,o.glName)}this._depthStencilBuffer=o}detachDepthStencilBuffer(){const o=this._depthStencilBuffer;if(o&&this._initialized){const a=this._context.getBoundFramebufferObject();this._context.bindFramebuffer(this);const l=this._context.gl,b=this._getGLAttachmentPoint(o.descriptor);l.framebufferRenderbuffer(n.R.FRAMEBUFFER,b,l.RENDERBUFFER,null),this._context.bindFramebuffer(a)}return this._depthStencilBuffer=null,o}copyToTexture(o,a,l,b,P,V,X){(o<0||a<0||P<0||V<0)&&console.error("Offsets cannot be negative!"),(l<=0||b<=0)&&console.error("Copy width and height must be greater than zero!");const N=X.descriptor;X.descriptor.target!==n.Ap.TEXTURE_2D&&console.error("Texture target must be TEXTURE_2D!"),(null==N?.width||null==N?.height||o+l>this.width||a+b>this.height||P+l>N.width||V+b>N.height)&&console.error("Bad dimensions, the current input values will attempt to read or copy out of bounds!");const G=this._context,W=G.bindTexture(X,S.g.TEXTURE_UNIT_FOR_UPDATES);G.setActiveTexture(S.g.TEXTURE_UNIT_FOR_UPDATES),G.bindFramebuffer(this),G.gl.copyTexSubImage2D(n.Ap.TEXTURE_2D,0,P,V,o,a,l,b),G.bindTexture(W,S.g.TEXTURE_UNIT_FOR_UPDATES)}readPixels(o,a,l,b,P,V,X){(l<=0||b<=0)&&console.error("Copy width and height must be greater than zero!"),X||console.error("Target memory is not initialized!"),this._context.bindFramebuffer(this),this._context.gl.readPixels(o,a,l,b,P,V,X)}readPixelsAsync(o,a,l,b,P,V,X){var N=this;return(0,B.A)(function*(){const{gl:G}=N._context,W=w.g.createPixelPack(N._context,n._U.STREAM_READ,X.byteLength);N._context.bindBuffer(W),N._context.bindFramebuffer(N),G.readPixels(o,a,l,b,P,V,0),N._context.unbindBuffer(n.NZ.PIXEL_PACK_BUFFER),yield W.getSubDataAsync(X),W.dispose()})()}resize(o,a){if(this.width===o&&this.height===a)return;const l={width:o,height:a};A(l,this._context.parameters.maxTextureSize),this._colorAttachments.forEach(b=>b.resize(l.width,l.height)),this._depthStencilTexture?.resize(l.width,l.height),this._initialized&&(A(l,this._context.parameters.maxRenderbufferSize),this._depthStencilBuffer?.resize(l.width,l.height),this._context.getBoundFramebufferObject()===this&&this._context.bindFramebuffer(null),this._initialized=!1)}initializeAndBind(o=n.R.FRAMEBUFFER){const a=this._context.gl;if(this._initialized)return void a.bindFramebuffer(o,this.glName);this._glName&&a.deleteFramebuffer(this._glName);const l=a.createFramebuffer();if(a.bindFramebuffer(o,l),this._colorAttachments.forEach((b,P)=>this._framebufferTexture2D(b.glName,P,j(b),o)),this._depthStencilBuffer){const b=this._getGLAttachmentPoint(this._depthStencilBuffer.descriptor);a.framebufferRenderbuffer(o,b,a.RENDERBUFFER,this._depthStencilBuffer.glName)}else this._depthStencilTexture&&this._framebufferTexture2D(this._depthStencilTexture.glName,a.DEPTH_STENCIL_ATTACHMENT,j(this._depthStencilTexture),o);(0,R.en)()&&a.checkFramebufferStatus(o)!==a.FRAMEBUFFER_COMPLETE&&console.error("Framebuffer is incomplete!"),this._glName=l,this._initialized=!0}_framebufferTexture2D(o,a=n.Nm.COLOR_ATTACHMENT0,l=n.Ap.TEXTURE_2D,b=n.R.FRAMEBUFFER,P=0){this._context.gl.framebufferTexture2D(b,a,l,o,P)}_disposeDepthStencilAttachments(){const o=this._context.gl;if(this._depthStencilBuffer){if(this._initialized){this._context.bindFramebuffer(this);const a=this._getGLAttachmentPoint(this._depthStencilBuffer.descriptor);o.framebufferRenderbuffer(n.R.FRAMEBUFFER,a,o.RENDERBUFFER,null)}this._depthStencilBuffer=(0,U.WD)(this._depthStencilBuffer)}this._depthStencilTexture&&(this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,o.DEPTH_STENCIL_ATTACHMENT)),this._depthStencilTexture=(0,U.WD)(this._depthStencilTexture))}_validateTextureDescriptor(o){o.target!==n.Ap.TEXTURE_2D&&o.target!==n.Ap.TEXTURE_CUBE_MAP&&console.error("Texture type must be TEXTURE_2D or TEXTURE_CUBE_MAP!"),A(o,this._context.parameters.maxTextureSize),this._validateBufferDimensions(o)}_validateRenderBufferDescriptor(o){A(o,this._context.parameters.maxRenderbufferSize),this._validateBufferDimensions(o)}_validateBufferDimensions(o){o.width<=0&&(o.width=this.width),o.height<=0&&(o.height=this.height),this.width>0&&this.height>0&&(this.width===o.width&&this.height===o.height||console.error("Attachment size must match framebuffer size!"))}_getGLAttachmentPoint(o){switch(o.internalFormat){case n.yQ.DEPTH_COMPONENT16:case n.yQ.DEPTH_COMPONENT24:case n.yQ.DEPTH_COMPONENT32F:return this._context.gl.DEPTH_ATTACHMENT;case n.yQ.DEPTH24_STENCIL8:case n.yQ.DEPTH32F_STENCIL8:case n.yQ.DEPTH_STENCIL:return this._context.gl.DEPTH_STENCIL_ATTACHMENT;case n.yQ.STENCIL_INDEX8:return this._context.gl.STENCIL_ATTACHMENT}}_validateColorAttachmentPoint(o){if(-1===v._MAX_COLOR_ATTACHMENTS){const{gl:l}=this._context;v._MAX_COLOR_ATTACHMENTS=l.getParameter(l.MAX_COLOR_ATTACHMENTS)}const a=o-n.Nm.COLOR_ATTACHMENT0;a+1>v._MAX_COLOR_ATTACHMENTS&&x.A.getLogger("esri.views.webgl.FrameBufferObject").error("esri.FrameBufferObject",`illegal attachment point for color attachment: ${a+1}. Implementation supports up to ${v._MAX_COLOR_ATTACHMENTS} color attachments`)}}function _(T){return null!=T&&"type"in T&&T.type===p.p.Texture}function A(T,o){const a=Math.max(T.width,T.height);if(a>o){x.A.getLogger("esri.views.webgl.FramebufferObject").warn(`Resizing FBO attachment size ${T.width}x${T.height} to device limit ${o}`);const l=o/a;return T.width=Math.round(T.width*l),T.height=Math.round(T.height*l),!1}return!0}function j(T){return T.descriptor.target===n.Ap.TEXTURE_CUBE_MAP?n.Ap.TEXTURE_CUBE_MAP_POSITIVE_X:n.Ap.TEXTURE_2D}v._MAX_COLOR_ATTACHMENTS=-1},23063:(Z,H,m)=>{m.d(H,{B:()=>le}),m(3248);var L=m(77440),x=m(50915);const U=["layout","centroid","smooth","case","mat2x2","mat2x3","mat2x4","mat3x2","mat3x3","mat3x4","mat4x2","mat4x3","mat4x4","uint","uvec2","uvec3","uvec4","samplerCubeShadow","sampler2DArray","sampler2DArrayShadow","isampler2D","isampler3D","isamplerCube","isampler2DArray","usampler2D","usampler3D","usamplerCube","usampler2DArray","coherent","restrict","readonly","writeonly","resource","atomic_uint","noperspective","patch","sample","subroutine","common","partition","active","filter","image1D","image2D","image3D","imageCube","iimage1D","iimage2D","iimage3D","iimageCube","uimage1D","uimage2D","uimage3D","uimageCube","image1DArray","image2DArray","iimage1DArray","iimage2DArray","uimage1DArray","uimage2DArray","image1DShadow","image2DShadow","image1DArrayShadow","image2DArrayShadow","imageBuffer","iimageBuffer","uimageBuffer","sampler1DArray","sampler1DArrayShadow","isampler1D","isampler1DArray","usampler1D","usampler1DArray","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","trunc","round","roundEven","isnan","isinf","floatBitsToInt","floatBitsToUint","intBitsToFloat","uintBitsToFloat","packSnorm2x16","unpackSnorm2x16","packUnorm2x16","unpackUnorm2x16","packHalf2x16","unpackHalf2x16","outerProduct","transpose","determinant","inverse","texture","textureSize","textureProj","textureLod","textureOffset","texelFetch","texelFetchOffset","textureProjOffset","textureLodOffset","textureProjLod","textureProjLodOffset","textureGrad","textureGradOffset","textureProjGrad","textureProjGradOffset"],w_enableCache=!1;var R=m(92517),n=999,p=9999,F=0,S=1,I=2,v=3,_=4,f=5,E=6,A=7,j=8,T=9,o=10,a=11,l=["block-comment","line-comment","preprocessor","operator","integer","float","ident","builtin","keyword","whitespace","eof","integer"];function V(i){return function P(i){var t=function b(){var i,t,r,e=0,c=0,h=n,s=[],g=[],d=1,u=0,D=0,M=!1,k=!1,y="";return function(C){return g=[],null!==C?function de(C){var K;for(e=0,r=(y+=C).length;i=y[e],e<r;){switch(K=e,h){case F:e="/"===i&&"*"===t?(s.push(i),O(s.join("")),h=n,e+1):(s.push(i),t=i,e+1);break;case S:case I:e=re();break;case v:e=Ee();break;case _:e="."===i||/[eE]/.test(i)?(s.push(i),h=f,t=i,e+1):"x"===i&&1===s.length&&"0"===s[0]?(h=a,s.push(i),t=i,e+1):/[^\d]/.test(i)?(O(s.join("")),h=n,e):(s.push(i),t=i,e+1);break;case a:e=/[^a-fA-F0-9]/.test(i)?(O(s.join("")),h=n,e):(s.push(i),t=i,e+1);break;case f:"f"===i&&(s.push(i),t=i,e+=1),e=/[eE]/.test(i)||"-"===i&&/[eE]/.test(t)?(s.push(i),t=i,e+1):/[^\d]/.test(i)?(O(s.join("")),h=n,e):(s.push(i),t=i,e+1);break;case p:e=Re();break;case T:e=/[^\s]/g.test(i)?(O(s.join("")),h=n,e):(s.push(i),t=i,e+1);break;case n:s=s.length?[]:s,e="/"===t&&"*"===i?(D=c+e-1,h=F,t=i,e+1):"/"===t&&"/"===i?(D=c+e-1,h=S,t=i,e+1):"#"===i?(h=I,D=c+e,e):/\s/.test(i)?(h=T,D=c+e,e):(M=/\d/.test(i),k=/[^\w_]/.test(i),D=c+e,h=M?_:k?v:p,e)}K!==e&&("\n"===y[K]?(u=0,++d):++u)}return c+=e,y=y.slice(e),g}(C.replace?C.replace(/\r\n/g,"\n"):C):function me(C){return s.length&&O(s.join("")),h=o,O("(eof)"),g}()};function O(C){C.length&&g.push({type:l[h],data:C,position:D,line:d,column:u})}function re(){return"\r"!==i&&"\n"!==i||"\\"===t?(s.push(i),t=i,e+1):(O(s.join("")),h=n,e)}function Ee(){if("."===t&&/\d/.test(i))return h=f,e;if("/"===t&&"*"===i)return h=F,e;if("/"===t&&"/"===i)return h=S,e;if("."===i&&s.length){for(;Q(s););return h=f,e}if(";"===i||")"===i||"("===i){if(s.length)for(;Q(s););return O(i),h=n,e+1}var C=2===s.length&&"="!==i;if(/[\w_\d\s]/.test(i)||C){for(;Q(s););return h=n,e}return s.push(i),t=i,e+1}function Q(C){for(var K,$,ie=0;;){if(K=R.o.indexOf(C.slice(0,C.length+ie).join("")),$=R.o[K],-1===K){if(ie--+C.length>0)continue;$=C.slice(0,1).join("")}return O($),D+=$.length,(s=s.slice($.length)).length}}function Re(){if(/[^\d\w_]/.test(i)){var C=s.join("");return h=R.l.indexOf(C)>-1?j:R.b.indexOf(C)>-1?A:E,O(s.join("")),h=n,e}return s.push(i),t=i,e+1}}(),r=[];return(r=r.concat(t(i))).concat(t(null))}(i)}const N=new Set(["GL_OES_standard_derivatives","GL_EXT_frag_depth","GL_EXT_draw_buffers","GL_EXT_shader_texture_lod"]);function W(i,t){for(let r=t-1;r>=0;r--){const e=i[r];if("whitespace"!==e.type&&"block-comment"!==e.type){if("keyword"!==e.type)break;if("attribute"===e.data||"in"===e.data)return!0}}return!1}function Y(i,t,r,e){e=e||r;for(const c of i)if("ident"===c.type&&c.data===r)return e in t?t[e]++:t[e]=0,Y(i,t,e+"_"+t[e],e);return r}function J(i,t,r="afterVersion"){function e(d,u){for(let D=u;D<d.length;D++){const M=d[D];if("operator"===M.type&&";"===M.data)return D}return null}const h={data:"\n",type:"whitespace"},s=d=>d<i.length&&/[^\r\n]$/.test(i[d].data);let g=function c(d){let u=-1,D=0,M=-1;for(let k=0;k<d.length;k++){const y=d[k];if("preprocessor"===y.type&&(/#(if|ifdef|ifndef)\s+.+/.test(y.data)?++D:/#endif\s*.*/.test(y.data)&&--D),"afterVersion"!==r&&"afterPrecision"!==r||"preprocessor"===y.type&&y.data.startsWith("#version")&&(M=Math.max(M,k)),"afterPrecision"===r&&"keyword"===y.type&&"precision"===y.data){const O=e(d,k);if(null===O)throw new Error("precision statement not followed by any semicolons!");M=Math.max(M,O)}u<M&&0===D&&(u=k)}return u+1}(i);s(g-1)&&i.splice(g++,0,h);for(const d of t)i.splice(g++,0,d);s(g-1)&&s(g)&&i.splice(g,0,h)}function ne(i,t,r,e="lowp"){J(i,[{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:e},{type:"whitespace",data:" "},{type:"keyword",data:r},{type:"whitespace",data:" "},{type:"ident",data:t},{type:"operator",data:";"}],"afterPrecision")}function oe(i,t,r,e,c="lowp"){J(i,[{type:"keyword",data:"layout"},{type:"operator",data:"("},{type:"keyword",data:"location"},{type:"whitespace",data:" "},{type:"operator",data:"="},{type:"whitespace",data:" "},{type:"integer",data:e.toString()},{type:"operator",data:")"},{type:"whitespace",data:" "},{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:c},{type:"whitespace",data:" "},{type:"keyword",data:r},{type:"whitespace",data:" "},{type:"ident",data:t},{type:"operator",data:";"}],"afterPrecision")}function se(i,t){let r,e,c=-1;for(let h=t;h<i.length;h++){const s=i[h];if("operator"===s.type&&("["===s.data&&(r=h),"]"===s.data)){e=h;break}"integer"===s.type&&(c=parseInt(s.data,10))}return r&&e&&i.splice(r,e-r+1),c}function q(i,t){if(i.startsWith("#version 300"))return i;const r=function ae(i){return w_enableCache?ee.get(i):null}(i);if(null!=r)return r;const e=V(i);if("300 es"===function G(i,t="100",r="300 es"){const e=/^\s*#version\s+([0-9]+(\s+[a-zA-Z]+)?)\s*/;for(const c of i)if("preprocessor"===c.type){const h=e.exec(c.data);if(h){const s=h[1].replaceAll(/\s{2,}/g," ");if(s===r)return s;if(s===t)return c.data="#version "+r,t;throw new Error("unknown glsl version: "+s)}}return i.splice(0,0,{type:"preprocessor",data:"#version "+r},{type:"whitespace",data:"\n"}),null}(e,"100","300 es"))return i;let c=null,h=null;const s={},g={};for(let d=0;d<e.length;++d){const u=e[d];switch(u.type){case"keyword":t===x.Co.VERTEX_SHADER&&"attribute"===u.data?u.data="in":"varying"===u.data&&(u.data=t===x.Co.VERTEX_SHADER?"out":"in");break;case"builtin":if(/^texture(2D|Cube)(Proj)?(Lod|Grad)?(EXT)?$/.test(u.data.trim())&&(u.data=u.data.replaceAll(/(2D|Cube|EXT)/g,"")),t===x.Co.FRAGMENT_SHADER&&"gl_FragColor"===u.data&&(c||(c=Y(e,s,"fragColor"),ne(e,c,"vec4")),u.data=c),t===x.Co.FRAGMENT_SHADER&&"gl_FragData"===u.data){const D=se(e,d+1),M=Y(e,s,"fragData");oe(e,M,"vec4",D,"mediump"),u.data=M}else t===x.Co.FRAGMENT_SHADER&&"gl_FragDepthEXT"===u.data&&(h||(h=Y(e,s,"gl_FragDepth")),u.data=h);break;case"ident":if(U.includes(u.data)){if(t===x.Co.VERTEX_SHADER&&W(e,d))throw new Error("attribute in vertex shader uses a name that is a reserved word in glsl 300 es");u.data in g||(g[u.data]=Y(e,s,u.data)),u.data=g[u.data]}}}for(let d=e.length-1;d>=0;--d){const u=e[d];if("preprocessor"===u.type){const D=u.data.match(/#extension\s+(.*):/);if(D?.[1]&&N.has(D[1].trim())){const y=e[d+1];e.splice(d,y&&"whitespace"===y.type?2:1)}const M=u.data.match(/#ifdef\s+(.*)/);M?.[1]&&N.has(M[1].trim())&&(u.data="#if 1");const k=u.data.match(/#ifndef\s+(.*)/);k?.[1]&&N.has(k[1].trim())&&(u.data="#if 0")}}return function he(i,t){return w_enableCache&&ee.set(i,t),t}(i,function X(i){return i.map(t=>"eof"!==t.type?t.data:"").join("")}(e))}const ee=new Map;class le{constructor(t,r,e,c,h=new Map,s=[]){this._context=t,this._locations=c,this._uniformBlockBindings=h,this._transformFeedbackVaryings=s,this._refCount=1,this._compiled=!1,this._linesOfCode=0,this._nameToUniformLocation=new Map,this._nameToUniform1=new Map,this._nameToUniform1v=new Map,this._nameToUniform2=new Map,this._nameToUniform3=new Map,this._nameToUniform4=new Map,this._nameToUniformMatrix3=new Map,this._nameToUniformMatrix4=new Map,t||console.error("RenderingContext isn't initialized!"),0===r.length&&console.error("Shaders source should not be empty!"),r=q(r,x.Co.VERTEX_SHADER),e=q(e,x.Co.FRAGMENT_SHADER),this._vShader=te(this._context,x.Co.VERTEX_SHADER,r),this._fShader=te(this._context,x.Co.FRAGMENT_SHADER,e),fe.enabled&&(this._linesOfCode=r.match(/\n/g).length+e.match(/\n/g).length+2,this._context.instanceCounter.increment(x.vt.LinesOfCode,this._vShader,this._linesOfCode)),this._vShader&&this._fShader||console.error("Error loading shaders!"),this._context.instanceCounter.increment(x.vt.Shader,this),(0,L.Xc)()&&(this.vertexShader=r,this.fragmentShader=e),this.usedMemory=r.length+e.length;const g=this._context.gl,d=g.createProgram();g.attachShader(d,this._vShader),g.attachShader(d,this._fShader),this._locations.forEach((u,D)=>g.bindAttribLocation(d,u,D)),this._transformFeedbackVaryings?.length&&g.transformFeedbackVaryings(d,this._transformFeedbackVaryings,g.SEPARATE_ATTRIBS),g.linkProgram(d),(0,L.Xc)()&&!g.getProgramParameter(d,g.LINK_STATUS)&&console.error(`Could not link shader\nvalidated: ${g.getProgramParameter(d,g.VALIDATE_STATUS)}, gl error ${g.getError()}, vertex: ${g.getShaderParameter(this._vShader,g.COMPILE_STATUS)}, fragment: ${g.getShaderParameter(this._fShader,g.COMPILE_STATUS)}, info log: ${g.getProgramInfoLog(d)}, vertex source: ${this.vertexShader}, fragment source: ${this.fragmentShader}`);for(const[u,D]of this._uniformBlockBindings){const M=g.getUniformBlockIndex(d,u);M<4294967295&&g.uniformBlockBinding(d,M,D)}this._glName=d,this._context.instanceCounter.increment(x.vt.Program,this)}get glName(){return this._glName}get hasGLName(){return null!=this._glName}get hasTransformFeedbackVaryings(){return!!this._transformFeedbackVaryings?.length}get compiled(){if(this._compiled)return!0;const t=this._context.gl.getExtension("KHR_parallel_shader_compile");return null==t||null==this.glName?(this._compiled=!0,!0):(this._compiled=!!this._context.gl.getProgramParameter(this.glName,t.COMPLETION_STATUS_KHR),this._compiled)}dispose(){if(--this._refCount>0)return;const t=this._context.gl,r=this._context.instanceCounter;this._nameToUniformLocation.forEach(e=>e&&r.decrement(x.vt.Uniform,e)),this._nameToUniformLocation.clear(),this._vShader&&(this._linesOfCode>0&&(r.decrement(x.vt.LinesOfCode,this._vShader,this._linesOfCode),this._linesOfCode=0),t.deleteShader(this._vShader),this._vShader=null,r.decrement(x.vt.Shader,this)),this._fShader&&(t.deleteShader(this._fShader),this._fShader=null),this._glName&&(t.deleteProgram(this._glName),this._glName=null,r.decrement(x.vt.Program,this))}ref(){++this._refCount}_getUniformLocation(t){const r=this._nameToUniformLocation.get(t);if(void 0!==r)return r;if(this.glName){const e=this._context.gl.getUniformLocation(this.glName,t);return this._nameToUniformLocation.set(t,e),e&&this._context.instanceCounter.increment(x.vt.Uniform,e),e}return null}hasUniform(t){return null!=this._getUniformLocation(t)}setUniform1i(t,r){const e=this._nameToUniform1.get(t);void 0!==e&&r===e||(this._context.gl.uniform1i(this._getUniformLocation(t),r),this._nameToUniform1.set(t,r))}setUniform1iv(t,r){z(this._nameToUniform1v,t,r)&&this._context.gl.uniform1iv(this._getUniformLocation(t),r)}setUniform2iv(t,r){z(this._nameToUniform2,t,r)&&this._context.gl.uniform2iv(this._getUniformLocation(t),r)}setUniform3iv(t,r){z(this._nameToUniform3,t,r)&&this._context.gl.uniform3iv(this._getUniformLocation(t),r)}setUniform4iv(t,r){z(this._nameToUniform4,t,r)&&this._context.gl.uniform4iv(this._getUniformLocation(t),r)}setUniform1f(t,r){const e=this._nameToUniform1.get(t);void 0!==e&&r===e||(this._context.gl.uniform1f(this._getUniformLocation(t),r),this._nameToUniform1.set(t,r))}setUniform1fv(t,r){z(this._nameToUniform1v,t,r)&&this._context.gl.uniform1fv(this._getUniformLocation(t),r)}setUniform2f(t,r,e){const c=this._nameToUniform2.get(t);void 0===c?(this._context.gl.uniform2f(this._getUniformLocation(t),r,e),this._nameToUniform2.set(t,[r,e])):r===c[0]&&e===c[1]||(this._context.gl.uniform2f(this._getUniformLocation(t),r,e),c[0]=r,c[1]=e)}setUniform2fv(t,r){z(this._nameToUniform2,t,r)&&this._context.gl.uniform2fv(this._getUniformLocation(t),r)}setUniform3f(t,r,e,c){const h=this._nameToUniform3.get(t);void 0===h?(this._context.gl.uniform3f(this._getUniformLocation(t),r,e,c),this._nameToUniform3.set(t,[r,e,c])):r===h[0]&&e===h[1]&&c===h[2]||(this._context.gl.uniform3f(this._getUniformLocation(t),r,e,c),h[0]=r,h[1]=e,h[2]=c)}setUniform3fv(t,r){const e=this._getUniformLocation(t);null!=e&&z(this._nameToUniform3,t,r)&&this._context.gl.uniform3fv(e,r)}setUniform4f(t,r,e,c,h){const s=this._nameToUniform4.get(t);void 0===s?(this._context.gl.uniform4f(this._getUniformLocation(t),r,e,c,h),this._nameToUniform4.set(t,[r,e,c,h])):void 0!==s&&r===s[0]&&e===s[1]&&c===s[2]&&h===s[3]||(this._context.gl.uniform4f(this._getUniformLocation(t),r,e,c,h),s[0]=r,s[1]=e,s[2]=c,s[3]=h)}setUniform4fv(t,r){const e=this._getUniformLocation(t);null!=e&&z(this._nameToUniform4,t,r)&&this._context.gl.uniform4fv(e,r)}setUniformMatrix3fv(t,r,e=!1){const c=this._getUniformLocation(t);null!=c&&z(this._nameToUniformMatrix3,t,r)&&this._context.gl.uniformMatrix3fv(c,e,r)}setUniformMatrix4fv(t,r,e=!1){const c=this._getUniformLocation(t);null!=c&&z(this._nameToUniformMatrix4,t,r)&&this._context.gl.uniformMatrix4fv(c,e,r)}stop(){}}function te(i,t,r){const e=i.gl,c=e.createShader(t);return e.shaderSource(c,r),e.compileShader(c),(0,L.Xc)()&&!e.getShaderParameter(c,e.COMPILE_STATUS)&&(console.error("Compile error in ".concat(t===x.Co.VERTEX_SHADER?"vertex":"fragment"," shader")),console.error(e.getShaderInfoLog(c)),console.error(function _e(i){let t=2;return i.replaceAll("\n",()=>"\n"+function ue(i){return i>=1e3?i.toString():("  "+i).slice(-3)}(t++)+":")}(r))),c}function z(i,t,r){const e=i.get(t);if(!e)return i.set(t,Array.from(r)),!0;const c=r.length;if(e.length!==c)return i.set(t,Array.from(r)),!0;for(let h=0;h<c;++h){const s=r[h];if(e[h]!==s){for(e[h]=s;h<c;++h)e[h]=r[h];return!0}}return!1}const fe={enabled:!1}},17107:(Z,H,m)=>{m.d(H,{l:()=>U});var B=m(50915),L=m(68165),x=m(49950);class U{constructor(R,n){this._context=R,this._descriptor=n,this.type=L.p.RenderBuffer,this._context.instanceCounter.increment(B.vt.Renderbuffer,this);const p=this._context.gl;this.glName=p.createRenderbuffer(),this._context.bindRenderbuffer(this);const{width:F,height:S,internalFormat:I,multisampled:v}=n;v?p.renderbufferStorageMultisample(p.RENDERBUFFER,this.samples,I,F,S):p.renderbufferStorage(p.RENDERBUFFER,I,F,S),this._context.bindRenderbuffer(null)}get descriptor(){return this._descriptor}get samples(){const R=this._descriptor.samples,n=this._context.parameters.maxSamples;return R?Math.min(R,n):n}get usedMemory(){return(0,x.e)(this._descriptor)}resize(R,n){const p=this._descriptor;if(p.width===R&&p.height===n)return;p.width=R,p.height=n;const F=this._context.gl;this._context.bindRenderbuffer(this),p.multisampled?F.renderbufferStorageMultisample(F.RENDERBUFFER,this.samples,p.internalFormat,p.width,p.height):F.renderbufferStorage(F.RENDERBUFFER,p.internalFormat,p.width,p.height),this._context.bindRenderbuffer(null)}dispose(){this._context&&(this._context.gl.deleteRenderbuffer(this.glName),this._context.instanceCounter.decrement(B.vt.Renderbuffer,this),this._context=null)}}},49950:(Z,H,m)=>{m.d(H,{e:()=>x,q:()=>L});var B=m(84757);class L{constructor(w,R,n=R){this.internalFormat=w,this.width=R,this.height=n,this.multisampled=!1,this.samples=1}}function x(U){return U.width<=0||U.height<=0||null==U.internalFormat?0:U.width*U.height*(0,B.IB)(U.internalFormat)}}}]);