(this["webpackJsonpmany-worlds"]=this["webpackJsonpmany-worlds"]||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var a=n(6),i=n(0),o=n.n(i),r=n(1),s=n(2),c=n(3),u=n(4),l=n.n(u);!function(e,t,n){function a(e,t){return typeof e===t}function i(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):l?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}var o=[],r=[],s={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout((function(){t(n[e])}),0)},addTest:function(e,t,n){r.push({name:e,fn:t,options:n})},addAsyncTest:function(e){r.push({name:null,fn:e})}},c=function(){};c.prototype=s,(c=new c).addTest("eventlistener","addEventListener"in e);var u=t.documentElement,l="svg"===u.nodeName.toLowerCase();c.addTest("audio",(function(){var e=i("audio"),t=!1;try{(t=!!e.canPlayType)&&((t=new Boolean(t)).ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),t.mp3=e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/,""),t.opus=e.canPlayType('audio/ogg; codecs="opus"')||e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/,""),t.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),t.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(n){}return t})),c.addTest("canvas",(function(){var e=i("canvas");return!(!e.getContext||!e.getContext("2d"))})),c.addTest("webgl",(function(){var t=i("canvas"),n="probablySupportsContext"in t?"probablySupportsContext":"supportsContext";return n in t?t[n]("webgl")||t[n]("experimental-webgl"):"WebGLRenderingContext"in e})),c.addAsyncTest((function(){if(c.webglextensions=!1,c.webgl){var e,t,a;try{a=(t=(e=i("canvas")).getContext("webgl")||e.getContext("experimental-webgl")).getSupportedExtensions()}catch(s){return}t!==n&&(c.webglextensions=new Boolean(!0));for(var o=-1,r=a.length;++o<r;)c.webglextensions[a[o]]=!0;e=n}})),function(){var e,t,n,i,s,u;for(var l in r)if(r.hasOwnProperty(l)){if(e=[],(t=r[l]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(i=a(t.fn,"function")?t.fn():t.fn,s=0;s<e.length;s++)1===(u=e[s].split(".")).length?c[u[0]]=i:(!c[u[0]]||c[u[0]]instanceof Boolean||(c[u[0]]=new Boolean(c[u[0]])),c[u[0]][u[1]]=i),o.push((i?"":"no-")+u.join("-"))}}(),function(e){var t=u.className,n=c._config.classPrefix||"";if(l&&(t=t.baseVal),c._config.enableJSClass){var a=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(a,"$1"+n+"js$2")}c._config.enableClasses&&(t+=" "+n+e.join(" "+n),l?u.className.baseVal=t:u.className=t)}(o),delete s.addTest,delete s.addAsyncTest;for(var h=0;h<c._q.length;h++)c._q[h]();e.Modernizr=c}(window,document);var h=window.Modernizr;function f(){return d.apply(this,arguments)}function d(){return(d=Object(r.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t={audio:!0,videol:!1},!navigator.mediaDevices.getUserMedia){e.next=6;break}return console.log("Using navigator.mediaDevices"),e.abrupt("return",navigator.mediaDevices.getUserMedia(t));case 6:if(!navigator.webkitGetUserMedia&&!navigator.getUserMedia){e.next=9;break}return navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia,e.abrupt("return",new Promise((function(e,n){navigator.getUserMedia(t,e,n)})));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return p.apply(this,arguments)}function p(){return(p=Object(r.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:return t=e.sent,n=y(),e.abrupt("return",{context:n,source:n.createMediaStreamSource(t),stream:t});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(){return v.apply(this,arguments)}function v(){return(v=Object(r.a)(o.a.mark((function e(){var t,n,a,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.createElement("audio"),(n=document.createElement("source")).src="/many-worlds/max-cooper-fragments-of-self-sample.mp3",t.appendChild(n),a=y(),(i=a.createMediaElementSource(t)).connect(a.destination),e.abrupt("return",{context:a,source:i,audio:t});case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(){return new(window.AudioContext||window.webkitAudioContext||!1)}var w,x=n(5),b=n.n(x);function _(){return _.stats||(_.stats=new b.a),_.stats}var k=function(e){var t=_();e&&!w?(document.body.appendChild(t.dom),t.dom.style.right=0,t.dom.style.left=null,w=requestAnimationFrame((function e(){t.update(),w=requestAnimationFrame(e)}))):!e&&w&&(cancelAnimationFrame(w),w=void 0,document.body.removeChild(t.dom))};n(9),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var E=function(){function e(t){var n=this;Object(s.a)(this,e),this.app=t,this.el=document.getElementById("menu"),this.playback=document.getElementById("playback"),this.progress=document.getElementById("progress"),this.mic=document.getElementById("mic"),this.toggle=document.getElementById("toggle-controls"),this.fullscreen=document.getElementById("fullscreen"),this.info=document.getElementById("info"),this.fullscreen.addEventListener("click",(function(){return n._toggleFullscreen()})),this.mic.addEventListener("click",Object(r.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._toggleMicrophone();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))),this.playback.addEventListener("click",(function(){return n._togglePlayback()})),this.toggle.addEventListener("click",(function(){return n._toggleControls()})),this.info.addEventListener("click",(function(){return n._toggleInfo()})),document.addEventListener("keypress",function(){var e=Object(r.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(104!==t.keyCode&&"h"!==t.key){e.next=4;break}n._toggleControls(),e.next=14;break;case 4:if(103!==t.keyCode&&"f"!==t.key){e.next=8;break}n._toggleFullscreen(),e.next=14;break;case 8:if(109!==t.keyCode&&"m"!==t.key){e.next=13;break}return e.next=11,n._toggleMicrophone();case 11:e.next=14;break;case 13:112===t.keyCode||"p"===t.key?n._togglePlayback():105!==t.keyCode&&"i"!==t.key||n._toggleInfo();case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),this.el.className=""}return Object(c.a)(e,[{key:"_toggleMicrophone",value:function(){var e=Object(r.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this._toggle(this.mic)){e.next=7;break}return this.progress.className="hide",e.next=5,this.app.useMic();case 5:e.next=8;break;case 7:this.app.stopMic();case 8:this.playback.className="off";case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_togglePlayback",value:function(){var e=this;this._toggle(this.playback),this.mic.className="off";var t=this.app.useAudio();this.progress.className="",t.addEventListener("timeupdate",(function(){e.progress.value=Math.round(t.currentTime/t.duration*100)}))}},{key:"_toggleInfo",value:function(){this._toggle(this.info);var e=document.getElementById("info-box");"hide"===e.className?e.className="":e.className="hide"}},{key:"_toggleControls",value:function(){"hide"===this.el.className?(k(!0),this.el.className=""):(k(!1),this.el.className="hide")}},{key:"_toggleFullscreen",value:function(){this._toggle(this.fullscreen)&&!document.fullscreenElement?document.documentElement.requestFullscreen():document.exitFullscreen&&document.exitFullscreen()}},{key:"_toggle",value:function(e){return"on"===e.className?e.className="off":e.className="on","on"===e.className}}]),e}();"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}));var P=function(){function e(t){Object(s.a)(this,e),this.canvas=document.createElement("canvas"),this.setWidth(Math.min(window.innerHeight,window.innerWidth)),this.setHeight(this.width),this.setMargin((window.innerHeight-this.height)/2),this.canvas.style="width: ".concat(this.width,"px; height: ").concat(this.height,"px; margin: ").concat(this.margin,";"),this.gl=this.canvas.getContext("webgl",{antialias:!0,depth:!1}),this.program=this.compileShaders("\nprecision highp float;\n\nuniform float u_color;\n\nvarying float v_t;\n\nconst float PI = 3.14159265359;\n\nvec3 cubehelix(float x, float y, float z) {\n  float a = y * z * (1.0 - z);\n  float c = cos(x + PI / 2.0);\n  float s = sin(x + PI / 2.0);\n  return vec3(\n    z + a * (1.78277 * s - 0.14861 * c),\n    z - a * (0.29227 * c + 0.90649 * s),\n    z + a * (1.97294 * c)\n  );\n}\n\nvec3 rainbow(float t) {\n  if (t < 0.0 || t > 1.0) t -= floor(t);\n  float ts = abs(t - 0.5);\n  return cubehelix(\n    (360.0 * t - 100.0) / 180.0 * PI,\n    1.5 - 1.5 * ts,\n    u_color - 0.9 * ts\n  );\n}\n\nvoid main() {\n  gl_FragColor = vec4(rainbow(v_t / 4.0 + 0.25), 1.0);\n}\n","\nprecision highp float;\n\nconst float PI = 3.14159265359;\n\nuniform float u_pointSize;\nuniform float u_a;\nuniform float u_b;\nuniform float u_c;\nuniform float u_d;\n\nattribute vec2 a_position;\n\nvarying float v_t;\n\nvoid main() {\nfloat x1, x2 = a_position.x;\nfloat y1, y2 = a_position.y;\nfor (int i = 0; i < 8; i++) {\n  x1 = x2, y1 = y2;\n  x2 = sin(u_a * y1) - cos(u_b * x1);\n  y2 = sin(u_c * x1) - cos(u_d * y1);\n}\nv_t = atan(a_position.y, a_position.x) / PI;\ngl_Position = vec4(x2 / 2.0, y2 / 2.0, 0.0, 1.0);\ngl_PointSize = u_pointSize;\n}\n"),this.gl.useProgram(this.program);var n=this.gl.getUniformLocation(this.program,"u_pointSize");this.gl.uniform1f(n,devicePixelRatio>1?1.5:.75),this.numPoints=t,this.useVertexBuffer();var a=document.getElementById("root");a.style="width: ".concat(this.width,"px; height: ").concat(this.height,"px"),a.appendChild(this.canvas)}return Object(c.a)(e,[{key:"setWidth",value:function(e){this.width=e,this.canvas.width=e*devicePixelRatio,this.canvas.style=this.canvas.style+"width: ".concat(e,"px;")}},{key:"setHeight",value:function(e){this.height=e,this.canvas.height=e*devicePixelRatio,this.canvas.style=this.canvas.style+"height: ".concat(e,"px;")}},{key:"setMargin",value:function(e){this.margin=e,this.canvas.style=this.canvas.style+"margin: ".concat(e," auto;")}},{key:"compileShaders",value:function(e,t){var n=this.gl,a=n.createShader(n.VERTEX_SHADER);if(n.shaderSource(a,t),n.compileShader(a),!n.getShaderParameter(a,n.COMPILE_STATUS))throw n.getShaderInfoLog(a);var i=n.createShader(n.FRAGMENT_SHADER);if(n.shaderSource(i,e),n.compileShader(i),!n.getShaderParameter(i,n.COMPILE_STATUS))throw n.getShaderInfoLog(i);var o=n.createProgram();if(n.attachShader(o,a),n.attachShader(o,i),n.linkProgram(o),!n.getProgramParameter(o,n.LINK_STATUS))throw n.getProgramInfoLog(o);return o}},{key:"useVertexBuffer",value:function(){var e=this.gl,t=new Float32Array(2*this.numPoints).map((function(){return 2*Math.random()-1})),n=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,n),e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW),e.bindBuffer(e.ARRAY_BUFFER,n);var a=e.getAttribLocation(this.program,"a_position");e.vertexAttribPointer(a,2,e.FLOAT,!1,0,0),e.enableVertexAttribArray(a)}},{key:"setUniforms",value:function(e,t,n,a,i){var o=this.gl.getUniformLocation(this.program,"u_a"),r=this.gl.getUniformLocation(this.program,"u_b"),s=this.gl.getUniformLocation(this.program,"u_c"),c=this.gl.getUniformLocation(this.program,"u_d"),u=this.gl.getUniformLocation(this.program,"u_color");this.gl.uniform1f(o,e),this.gl.uniform1f(r,t),this.gl.uniform1f(s,n),this.gl.uniform1f(c,a),this.gl.uniform1f(u,i)}},{key:"draw",value:function(){var e=this.gl;e.drawArrays(e.POINTS,0,this.numPoints)}}]),e}(),A=function(){function e(){Object(s.a)(this,e),this.energy=0,this.features={}}return Object(c.a)(e,[{key:"getUniforms",value:function(e,t){if(e){var n=e.get(["energy","spectralFlatness"]);n?(this.energy+=n.energy,this.features=n):this.features={}}switch(this._energyBin()%10){case 1:case 4:case 7:return[-2,this._oscillation(t)-2,-1.2,2,this._getColor(t)];case 2:case 5:return[-2,-2.53,this._oscillation(t)-1.61,2,this._getColor(t)];default:return[this._oscillation(t)-2,-2,-1.2,this._getD(),this._getColor(t)]}}},{key:"_getD",value:function(){return this.features.flatness<.05?2-this.features.energy:2}},{key:"_getColor",value:function(e){return this.features.energy<.5?0:this.features.energy<2?Math.min(.8,(Math.sin(e/8e3)+1)/2):.8}},{key:"_energyBin",value:function(){return Math.floor(this.energy/100)}},{key:"_oscillation",value:function(e){return Math.sin(this.energy/100+e/1e4)}}]),e}(),C=function(){function e(){Object(s.a)(this,e);var t=devicePixelRatio>1?Math.pow(2,20):Math.pow(2,19);this.attractor=new P(t)}return Object(c.a)(e,[{key:"loadFile",value:function(){var e=Object(r.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:this.file=e.sent;case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"useMic",value:function(){var e=Object(r.a)(o.a.mark((function e(){var t,n,a,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:t=e.sent,n=t.context,a=t.source,i=t.stream,this.playbackActive&&(this.playbackActive=!1,this.audio.pause(),this.paused=!0),this.stream=i,this.context=n,this.analyzer=this._makeAnalyzer(n,a);case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"stopMic",value:function(){this.analyzer=null,this.context&&"running"===this.context.state&&(console.log(this.context.state),this.context.close()),this.stream&&(this.stream.getTracks().forEach((function(e){return e.stop()})),this.stream=null)}},{key:"useAudio",value:function(){return this.playbackActive?this.paused?(console.log("play"),this.audio.play(),this.paused=!1):(console.log("pause"),this.audio.pause(),this.paused=!0):(this.stopMic(),this.audio=this.file.audio,this.context=this.file.context,this.analyzer=this._makeAnalyzer(this.context,this.file.source),this.playbackActive=!0,this.paused=!1,this.audio.play(),"suspended"===this.context.state&&(this.context.resume(),console.log("resume + play"))),this.audio}},{key:"_makeAnalyzer",value:function(e,t){return l.a.createMeydaAnalyzer({audioContext:e,bufferSize:512,source:t,windowingFunction:"blackman",featureExtractors:["energy","spectralFlatness"]})}}]),e}();window.onload=function(){var e=Object(r.a)(o.a.mark((function e(){var t,n,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),t=new C,e.next=4,t.loadFile();case 4:n=new A,i=new E(t),h.audio&&h.webgl&&h.canvas||(document.getElementById("warn-support").className="",i._toggleInfo()),requestAnimationFrame((function e(i){var o,r=n.getUniforms(t.analyzer,i);(o=t.attractor).setUniforms.apply(o,Object(a.a)(r)),t.attractor.draw(),requestAnimationFrame(e)}));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},7:function(e,t,n){e.exports=n(10)},9:function(e,t,n){}},[[7,1,2]]]);
//# sourceMappingURL=main.684239e2.chunk.js.map