(this["webpackJsonpmany-worlds"]=this["webpackJsonpmany-worlds"]||[]).push([[0],{10:function(t,e,n){"use strict";n.r(e);var a=n(6),i=n(0),r=n.n(i),s=n(1),o=n(2),c=n(3),u=n(4),l=n.n(u);function h(){return f.apply(this,arguments)}function f(){return(f=Object(s.a)(r.a.mark((function t(){var e;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e={audio:!0,videol:!1},!navigator.mediaDevices.getUserMedia){t.next=6;break}return console.log("Using navigator.mediaDevices"),t.abrupt("return",navigator.mediaDevices.getUserMedia(e));case 6:if(!navigator.webkitGetUserMedia&&!navigator.getUserMedia){t.next=9;break}return navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia,t.abrupt("return",new Promise((function(t,n){navigator.getUserMedia(e,t,n)})));case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(){return d.apply(this,arguments)}function d(){return(d=Object(s.a)(r.a.mark((function t(){var e,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h();case 2:return e=t.sent,n=v(),t.abrupt("return",{context:n,source:n.createMediaStreamSource(e),stream:e});case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(){return p.apply(this,arguments)}function p(){return(p=Object(s.a)(r.a.mark((function t(){var e,n,a,i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=document.createElement("audio"),(n=document.createElement("source")).src="/many-worlds/max-cooper-fragments-of-self-sample.mp3",e.appendChild(n),a=v(),(i=a.createMediaElementSource(e)).connect(a.destination),t.abrupt("return",{context:a,source:i,audio:e});case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(){return new(window.AudioContext||window.webkitAudioContext||!1)}var y,k=n(5),x=n.n(k);function w(){return w.stats||(w.stats=new x.a),w.stats}var b=function(t){var e=w();t&&!y?(document.body.appendChild(e.dom),e.dom.style.right=0,e.dom.style.left=null,y=requestAnimationFrame((function t(){e.update(),y=requestAnimationFrame(t)}))):!t&&y&&(cancelAnimationFrame(y),y=void 0,document.body.removeChild(e.dom))};n(9),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _=function(){function t(e){var n=this;Object(o.a)(this,t),this.app=e,this.el=document.getElementById("menu"),this.playback=document.getElementById("playback"),this.progress=document.getElementById("progress"),this.mic=document.getElementById("mic"),this.toggle=document.getElementById("toggle-controls"),this.fullscreen=document.getElementById("fullscreen"),this.info=document.getElementById("info"),this.fullscreen.addEventListener("click",(function(){return n._toggleFullscreen()})),this.mic.addEventListener("click",Object(s.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n._toggleMicrophone();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))),this.playback.addEventListener("click",(function(){return n._togglePlayback()})),this.toggle.addEventListener("click",(function(){return n._toggleControls()})),this.info.addEventListener("click",(function(){return n._toggleInfo()})),document.addEventListener("keypress",function(){var t=Object(s.a)(r.a.mark((function t(e){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(104!==e.keyCode&&"h"!==e.key){t.next=4;break}n._toggleControls(),t.next=14;break;case 4:if(103!==e.keyCode&&"f"!==e.key){t.next=8;break}n._toggleFullscreen(),t.next=14;break;case 8:if(109!==e.keyCode&&"m"!==e.key){t.next=13;break}return t.next=11,n._toggleMicrophone();case 11:t.next=14;break;case 13:112===e.keyCode||"p"===e.key?n._togglePlayback():105!==e.keyCode&&"i"!==e.key||n._toggleInfo();case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),this.el.className=""}return Object(c.a)(t,[{key:"_toggleMicrophone",value:function(){var t=Object(s.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this._toggle(this.mic)){t.next=7;break}return this.progress.className="hide",t.next=5,this.app.useMic();case 5:t.next=8;break;case 7:this.app.stopMic();case 8:this.playback.className="off";case 9:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"_togglePlayback",value:function(){var t=this;this._toggle(this.playback),this.mic.className="off";var e=this.app.useAudio();this.progress.className="",e.addEventListener("timeupdate",(function(){t.progress.value=Math.round(e.currentTime/e.duration*100)}))}},{key:"_toggleInfo",value:function(){var t=document.getElementById("info-box");"hide"===t.className?t.className="":t.className="hide"}},{key:"_toggleControls",value:function(){"hide"===this.el.className?(b(!0),this.el.className=""):(b(!1),this.el.className="hide")}},{key:"_toggleFullscreen",value:function(){this._toggle(this.fullscreen)&&!document.fullscreenElement?document.documentElement.requestFullscreen():document.exitFullscreen&&document.exitFullscreen()}},{key:"_toggle",value:function(t){return"on"===t.className?t.className="off":t.className="on","on"===t.className}}]),t}();"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}));var A=function(){function t(e,n,a){Object(o.a)(this,t),this.canvas=document.createElement("canvas"),this.setWidth(Math.min(window.innerHeight,window.innerWidth)),this.setHeight(this.width),this.setMargin((window.innerHeight-this.height)/2),this.canvas.style="width: ".concat(this.width,"px; height: ").concat(this.height,"px; margin: ").concat(this.margin,";"),this.gl=this.canvas.getContext("webgl",{antialias:!0,depth:!1}),this.program=this.compileShaders(e,n),this.gl.useProgram(this.program),this.numPoints=a,this.useVertexBuffer();var i=document.getElementById("root");i.style="width: ".concat(this.width,"px; height: ").concat(this.height,"px"),i.appendChild(this.canvas)}return Object(c.a)(t,[{key:"setWidth",value:function(t){this.width=t,this.canvas.width=t*devicePixelRatio,this.canvas.style=this.canvas.style+"width: ".concat(t,"px;")}},{key:"setHeight",value:function(t){this.height=t,this.canvas.height=t*devicePixelRatio,this.canvas.style=this.canvas.style+"height: ".concat(t,"px;")}},{key:"setMargin",value:function(t){this.margin=t,this.canvas.style=this.canvas.style+"margin: ".concat(t," auto;")}},{key:"compileShaders",value:function(t,e){var n=this.gl,a=n.createShader(n.VERTEX_SHADER);if(n.shaderSource(a,e),n.compileShader(a),!n.getShaderParameter(a,n.COMPILE_STATUS))throw n.getShaderInfoLog(a);var i=n.createShader(n.FRAGMENT_SHADER);if(n.shaderSource(i,t),n.compileShader(i),!n.getShaderParameter(i,n.COMPILE_STATUS))throw n.getShaderInfoLog(i);var r=n.createProgram();if(n.attachShader(r,a),n.attachShader(r,i),n.linkProgram(r),!n.getProgramParameter(r,n.LINK_STATUS))throw n.getProgramInfoLog(r);return r}},{key:"useVertexBuffer",value:function(){var t=this.gl,e=new Float32Array(2*this.numPoints).map((function(){return 2*Math.random()-1})),n=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,n),t.bufferData(t.ARRAY_BUFFER,e,t.STATIC_DRAW),t.bindBuffer(t.ARRAY_BUFFER,n);var a=t.getAttribLocation(this.program,"a_position");t.vertexAttribPointer(a,2,t.FLOAT,!1,0,0),t.enableVertexAttribArray(a)}},{key:"setUniforms",value:function(t,e,n,a,i){var r=this.gl.getUniformLocation(this.program,"u_a"),s=this.gl.getUniformLocation(this.program,"u_b"),o=this.gl.getUniformLocation(this.program,"u_c"),c=this.gl.getUniformLocation(this.program,"u_d"),u=this.gl.getUniformLocation(this.program,"u_color");this.gl.uniform1f(r,t),this.gl.uniform1f(s,e),this.gl.uniform1f(o,n),this.gl.uniform1f(c,a),this.gl.uniform1f(u,i)}},{key:"draw",value:function(){var t=this.gl;t.drawArrays(t.POINTS,0,this.numPoints)}}]),t}(),E=function(){function t(){Object(o.a)(this,t),this.energy=0,this.features={}}return Object(c.a)(t,[{key:"getUniforms",value:function(t,e){if(t){var n=t.get(["energy","spectralFlatness"]);n?(this.energy+=n.energy,this.features=n):this.features={}}switch(this._energyBin()%10){case 1:case 4:case 7:return[-2,this._oscillation(e)-2,-1.2,2,this._getColor(e)];case 2:case 5:return[-2,-2.53,this._oscillation(e)-1.61,2,this._getColor(e)];default:return[this._oscillation(e)-2,-2,-1.2,this._getD(),this._getColor(e)]}}},{key:"_getD",value:function(){return this.features.flatness<.05?2-this.features.energy:2}},{key:"_getColor",value:function(t){return this.features.energy<.5?0:this.features.energy<2?Math.min(.8,(Math.sin(t/8e3)+1)/2):.8}},{key:"_energyBin",value:function(){return Math.floor(this.energy/100)}},{key:"_oscillation",value:function(t){return Math.sin(this.energy/100+t/1e4)}}]),t}(),M=function(){function t(){Object(o.a)(this,t);var e=devicePixelRatio>1?Math.pow(2,20):Math.pow(2,19);this.attractor=new A("\nprecision highp float;\n\nuniform float u_color;\n\nvarying float v_t;\n\nconst float PI = 3.14159265359;\n\nvec3 cubehelix(float x, float y, float z) {\n  float a = y * z * (1.0 - z);\n  float c = cos(x + PI / 2.0);\n  float s = sin(x + PI / 2.0);\n  return vec3(\n    z + a * (1.78277 * s - 0.14861 * c),\n    z - a * (0.29227 * c + 0.90649 * s),\n    z + a * (1.97294 * c)\n  );\n}\n\nvec3 rainbow(float t) {\n  if (t < 0.0 || t > 1.0) t -= floor(t);\n  float ts = abs(t - 0.5);\n  return cubehelix(\n    (360.0 * t - 100.0) / 180.0 * PI,\n    1.5 - 1.5 * ts,\n    u_color - 0.9 * ts\n  );\n}\n\nvoid main() {\n  gl_FragColor = vec4(rainbow(v_t / 4.0 + 0.25), 1.0);\n}\n","\nprecision highp float;\n\nconst float PI = 3.14159265359;\n\nuniform float u_a;\nuniform float u_b;\nuniform float u_c;\nuniform float u_d;\n\nattribute vec2 a_position;\n\nvarying float v_t;\n\nvoid main() {\nfloat x1, x2 = a_position.x;\nfloat y1, y2 = a_position.y;\nfor (int i = 0; i < 8; i++) {\n  x1 = x2, y1 = y2;\n  x2 = sin(u_a * y1) - cos(u_b * x1);\n  y2 = sin(u_c * x1) - cos(u_d * y1);\n}\nv_t = atan(a_position.y, a_position.x) / PI;\ngl_Position = vec4(x2 / 2.0, y2 / 2.0, 0.0, 1.0);\ngl_PointSize = 1.5;\n}\n",e)}return Object(c.a)(t,[{key:"loadFile",value:function(){var t=Object(s.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m();case 2:this.file=t.sent;case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"useMic",value:function(){var t=Object(s.a)(r.a.mark((function t(){var e,n,a,i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g();case 2:e=t.sent,n=e.context,a=e.source,i=e.stream,this.playbackActive&&(this.playbackActive=!1,this.audio.pause(),this.paused=!0),this.stream=i,this.context=n,this.analyzer=this._makeAnalyzer(n,a);case 10:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"stopMic",value:function(){this.analyzer=null,this.context&&"running"===this.context.state&&(console.log(this.context.state),this.context.close()),this.stream&&(this.stream.getTracks().forEach((function(t){return t.stop()})),this.stream=null)}},{key:"useAudio",value:function(){return this.playbackActive?this.paused?(console.log("play"),this.audio.play(),this.paused=!1):(console.log("pause"),this.audio.pause(),this.paused=!0):(this.stopMic(),this.audio=this.file.audio,this.context=this.file.context,this.analyzer=this._makeAnalyzer(this.context,this.file.source),this.playbackActive=!0,this.paused=!1,this.audio.play(),"suspended"===this.context.state&&(this.context.resume(),console.log("resume + play"))),this.audio}},{key:"_makeAnalyzer",value:function(t,e){return l.a.createMeydaAnalyzer({audioContext:t,bufferSize:512,source:e,windowingFunction:"blackman",featureExtractors:["energy","spectralFlatness"]})}}]),t}();window.onload=function(){var t=Object(s.a)(r.a.mark((function t(){var e,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return b(!0),e=new M,t.next=4,e.loadFile();case 4:n=new E,new _(e),requestAnimationFrame((function t(i){var r,s=n.getUniforms(e.analyzer,i);(r=e.attractor).setUniforms.apply(r,Object(a.a)(s)),e.attractor.draw(),requestAnimationFrame(t)}));case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},7:function(t,e,n){t.exports=n(10)},9:function(t,e,n){}},[[7,1,2]]]);
//# sourceMappingURL=main.ab5cac3e.chunk.js.map