(this["webpackJsonpmany-worlds"]=this["webpackJsonpmany-worlds"]||[]).push([[0],{10:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),r=n(6),o=n(2),s=n(3),c=n(1),h=n(4),u=n.n(h);function l(){return f.apply(this,arguments)}function f(){return(f=Object(c.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e={audio:!0,videol:!1},!navigator.mediaDevices.getUserMedia){t.next=6;break}return console.log("Using navigator.mediaDevices"),t.abrupt("return",navigator.mediaDevices.getUserMedia(e));case 6:if(!navigator.webkitGetUserMedia&&!navigator.getUserMedia){t.next=9;break}return navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia,t.abrupt("return",new Promise((function(t,n){navigator.getUserMedia(e,t,n)})));case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var g,d=n(5),m=n.n(d);function v(){return v.stats||(v.stats=new m.a),v.stats}var p=function(t){var e=v();t&&!g?(document.body.appendChild(e.dom),e.dom.style.right=0,e.dom.style.left=null,g=requestAnimationFrame((function t(){e.update(),g=requestAnimationFrame(t)}))):!t&&g&&(cancelAnimationFrame(g),g=void 0,document.body.removeChild(e.dom))};n(9),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(){return w.apply(this,arguments)}function w(){return(w=Object(c.a)(i.a.mark((function t(){var e,n,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l();case 2:return e=t.sent,n=window.AudioContext||window.webkitAudioContext||!1,a=new n,t.abrupt("return",u.a.createMeydaAnalyzer({audioContext:a,bufferSize:512,source:a.createMediaStreamSource(e),windowingFunction:"blackman",featureExtractors:["energy","spectralFlatness"]}));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}));var _=function(){function t(e,n,a){Object(o.a)(this,t),this.canvas=document.createElement("canvas"),this.setWidth(Math.min(window.innerHeight,window.innerWidth)),this.setHeight(this.width),this.setMargin((window.innerHeight-this.height)/2),this.canvas.style="width: ".concat(this.width,"px; height: ").concat(this.height,"px; margin: ").concat(this.margin,";"),this.gl=this.canvas.getContext("webgl",{antialias:!0,depth:!1}),this.program=this.compileShaders(e,n),this.gl.useProgram(this.program),this.numPoints=a,this.useVertexBuffer();var i=document.getElementById("root");i.style="width: ".concat(this.width,"px; height: ").concat(this.height,"px"),i.appendChild(this.canvas)}return Object(s.a)(t,[{key:"setWidth",value:function(t){this.width=t,this.canvas.width=t*devicePixelRatio,this.canvas.style=this.canvas.style+"width: ".concat(t,"px;")}},{key:"setHeight",value:function(t){this.height=t,this.canvas.height=t*devicePixelRatio,this.canvas.style=this.canvas.style+"height: ".concat(t,"px;")}},{key:"setMargin",value:function(t){this.margin=t,this.canvas.style=this.canvas.style+"margin: ".concat(t," auto;")}},{key:"compileShaders",value:function(t,e){var n=this.gl,a=n.createShader(n.VERTEX_SHADER);if(n.shaderSource(a,e),n.compileShader(a),!n.getShaderParameter(a,n.COMPILE_STATUS))throw n.getShaderInfoLog(a);var i=n.createShader(n.FRAGMENT_SHADER);if(n.shaderSource(i,t),n.compileShader(i),!n.getShaderParameter(i,n.COMPILE_STATUS))throw n.getShaderInfoLog(i);var r=n.createProgram();if(n.attachShader(r,a),n.attachShader(r,i),n.linkProgram(r),!n.getProgramParameter(r,n.LINK_STATUS))throw n.getProgramInfoLog(r);return r}},{key:"useVertexBuffer",value:function(){var t=this.gl,e=new Float32Array(2*this.numPoints).map((function(){return 2*Math.random()-1})),n=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,n),t.bufferData(t.ARRAY_BUFFER,e,t.STATIC_DRAW),t.bindBuffer(t.ARRAY_BUFFER,n);var a=t.getAttribLocation(this.program,"a_position");t.vertexAttribPointer(a,2,t.FLOAT,!1,0,0),t.enableVertexAttribArray(a)}},{key:"setUniforms",value:function(t,e,n,a,i){var r=this.gl.getUniformLocation(this.program,"u_a"),o=this.gl.getUniformLocation(this.program,"u_b"),s=this.gl.getUniformLocation(this.program,"u_c"),c=this.gl.getUniformLocation(this.program,"u_d"),h=this.gl.getUniformLocation(this.program,"u_color");this.gl.uniform1f(r,t),this.gl.uniform1f(o,e),this.gl.uniform1f(s,n),this.gl.uniform1f(c,a),this.gl.uniform1f(h,i)}},{key:"draw",value:function(){var t=this.gl;t.drawArrays(t.POINTS,0,this.numPoints)}}]),t}(),x=function(){function t(){Object(o.a)(this,t),this.energy=0,this.features={}}return Object(s.a)(t,[{key:"getUniforms",value:function(t,e){if(t){var n=t.get(["energy","spectralFlatness"]);n?(this.energy+=n.energy,this.features=n):this.features={}}switch(this._energyBin()%10){case 1:case 4:case 7:return[-2,this._oscillation(e)-2,-1.2,2,this._getColor(e)];case 2:case 5:return[-2,-2.53,this._oscillation(e)-1.61,2,this._getColor(e)];default:return[this._oscillation(e)-2,-2,-1.2,this._getD(),this._getColor(e)]}}},{key:"_getD",value:function(){return this.features.flatness<.05?2-this.features.energy:2}},{key:"_getColor",value:function(t){return this.features.energy<.05?0:this.features.energy<.2?Math.min(.8,(Math.sin(t/8e3)+1)/2):.8}},{key:"_energyBin",value:function(){return Math.floor(this.energy/100)}},{key:"_oscillation",value:function(t){return Math.sin(this.energy+t/1e4)}}]),t}();window.onload=function(){var t=Object(c.a)(i.a.mark((function t(){var e,n,a,o;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return p(!0),e=devicePixelRatio>1?Math.pow(2,20):Math.pow(2,19),n=new _("\nprecision highp float;\n\nuniform float u_color;\n\nvarying float v_t;\n\nconst float PI = 3.14159265359;\n\nvec3 cubehelix(float x, float y, float z) {\n  float a = y * z * (1.0 - z);\n  float c = cos(x + PI / 2.0);\n  float s = sin(x + PI / 2.0);\n  return vec3(\n    z + a * (1.78277 * s - 0.14861 * c),\n    z - a * (0.29227 * c + 0.90649 * s),\n    z + a * (1.97294 * c)\n  );\n}\n\nvec3 rainbow(float t) {\n  if (t < 0.0 || t > 1.0) t -= floor(t);\n  float ts = abs(t - 0.5);\n  return cubehelix(\n    (360.0 * t - 100.0) / 180.0 * PI,\n    1.5 - 1.5 * ts,\n    u_color - 0.9 * ts\n  );\n}\n\nvoid main() {\n  gl_FragColor = vec4(rainbow(v_t / 4.0 + 0.25), 1.0);\n}\n","\nprecision highp float;\n\nconst float PI = 3.14159265359;\n\nuniform float u_a;\nuniform float u_b;\nuniform float u_c;\nuniform float u_d;\n\nattribute vec2 a_position;\n\nvarying float v_t;\n\nvoid main() {\nfloat x1, x2 = a_position.x;\nfloat y1, y2 = a_position.y;\nfor (int i = 0; i < 8; i++) {\n  x1 = x2, y1 = y2;\n  x2 = sin(u_a * y1) - cos(u_b * x1);\n  y2 = sin(u_c * x1) - cos(u_d * y1);\n}\nv_t = atan(a_position.y, a_position.x) / PI;\ngl_Position = vec4(x2 / 2.0, y2 / 2.0, 0.0, 1.0);\ngl_PointSize = 1.5;\n}\n",e),o=new x,requestAnimationFrame((function t(e){var i=o.getUniforms(a,e);n.setUniforms.apply(n,Object(r.a)(i)),n.draw(),document.getElementById("meyda-debug").innerHTML="".concat(Math.floor(o.energy)," ").concat(Math.floor(o._energyBin())),requestAnimationFrame(t)})),t.prev=5,t.next=8,y();case 8:a=t.sent,t.next=14;break;case 11:t.prev=11,t.t0=t.catch(5),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[5,11]])})));return function(){return t.apply(this,arguments)}}()},7:function(t,e,n){t.exports=n(10)},9:function(t,e,n){}},[[7,1,2]]]);
//# sourceMappingURL=main.302f1025.chunk.js.map