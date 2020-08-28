import{S as t,i as e,s as n,a as o,e as a,q as r,d as i,c as s,b as c,f as l,g as d,h as f,n as u,o as h,j as m}from"./client.0968727e.js";const{document:g}=m;function _(t){let e,n;return{c(){e=o(),n=a("div"),this.h()},l(t){r('[data-svelte="svelte-oh6yg0"]',g.head).forEach(i),e=s(t),n=c(t,"DIV",{id:!0}),l(n).forEach(i),this.h()},h(){g.title="Sapper project template",d(n,"id","attractor")},m(t,o){f(t,e,o),f(t,n,o)},p:u,i:u,o:u,d(t){t&&i(e),t&&i(n)}}}function v(t){const e=Math.pow(2,20),n="\nprecision highp float;\n\nvarying float v_t;\n\nconst float PI = 3.14159265359;\n\nvec3 cubehelix(float x, float y, float z) {\n\tfloat a = y * z * (1.0 - z);\n\tfloat c = cos(x + PI / 2.0);\n\tfloat s = sin(x + PI / 2.0);\n\treturn vec3(\n\t\tz + a * (1.78277 * s - 0.14861 * c),\n\t\tz - a * (0.29227 * c + 0.90649 * s),\n\t\tz + a * (1.97294 * c)\n\t);\n}\n\nvec3 rainbow(float t) {\n\tif (t < 0.0 || t > 1.0) t -= floor(t);\n\tfloat ts = abs(t - 0.5);\n\treturn cubehelix(\n\t\t(360.0 * t - 100.0) / 180.0 * PI,\n\t\t1.5 - 1.5 * ts,\n\t\t0.8 - 0.9 * ts\n\t);\n}\n\nvoid main() {\n\tgl_FragColor = vec4(rainbow(v_t / 4.0 + 0.25), 1.0);\n}\n",o="\nprecision highp float;\n\nconst float PI = 3.14159265359;\n\nuniform float u_a;\nuniform float u_b;\nuniform float u_c;\nuniform float u_d;\n\nattribute vec2 a_position;\n\nvarying float v_t;\n\nvoid main() {\n  float x1, x2 = a_position.x;\n  float y1, y2 = a_position.y;\n  for (int i = 0; i < 8; i++) {\n    x1 = x2, y1 = y2;\n    x2 = sin(u_a * y1) - cos(u_b * x1);\n    y2 = sin(u_c * x1) - cos(u_d * y1);\n  }\n  v_t = atan(a_position.y, a_position.x) / PI;\n  gl_Position = vec4(x2 / 2.0, y2 / 2.0, 0.0, 1.0);\n  gl_PointSize = 1.5;\n}\n";return h(async()=>{const t=(await import("./GlslCanvas.es.669ce6a5.js")).default,a=(await import("./meyda.min.5cd90de2.js").then((function(t){return t.m}))).default;console.log(t),console.log("meyda",a);const r=document.createElement("canvas"),i=new t(r);r.width=980*devicePixelRatio,r.height=980*devicePixelRatio,r.style="width: 980px; height: 980px;border:1px solid black;";const s=r.value=r.getContext("webgl",{antialias:!1,depth:!1});s.getExtension("OES_texture_float"),s.viewport(0,0,s.width,s.height);const c=(()=>{const t=s.createShader(s.FRAGMENT_SHADER);if(s.shaderSource(t,n),s.compileShader(t),!s.getShaderParameter(t,s.COMPILE_STATUS))throw s.getShaderInfoLog(t);return t})(),l=(()=>{const t=s.createShader(s.VERTEX_SHADER);if(s.shaderSource(t,o),s.compileShader(t),!s.getShaderParameter(t,s.COMPILE_STATUS))throw s.getShaderInfoLog(t);return t})(),d=(()=>{const t=s.createProgram();if(s.attachShader(t,l),s.attachShader(t,c),s.linkProgram(t),!s.getProgramParameter(t,s.LINK_STATUS))throw s.getProgramInfoLog(t);return t})(),f=(()=>{const t=new Float32Array(2*e).map(()=>2*Math.random()-1),n=s.createBuffer();return s.bindBuffer(s.ARRAY_BUFFER,n),s.bufferData(s.ARRAY_BUFFER,t,s.STATIC_DRAW),n})();s.useProgram(d),s.bindBuffer(s.ARRAY_BUFFER,f);const u=s.getAttribLocation(d,"a_position");s.vertexAttribPointer(u,2,s.FLOAT,!1,0,0),s.enableVertexAttribArray(u);let h;document.getElementById("attractor").appendChild(r),i.setUniform("u_a",-2.5),i.setUniform("u_b",-2),i.setUniform("u_c",-1.2),i.setUniform("u_d",2),i.load(n,o);let m={get:()=>{}};window.requestAnimationFrame((function t(e){void 0===h&&(h=e);const n=e-h,o=m.get(["rms"]),a=o?o.rms:0,r=Math.floor(1e4*a),s=Math.min(Math.max(Math.sin(n)*r,-66),66);console.log(s),document.getElementById("attractor").style.transform="translateX("+s+"px)";const c=-2+Math.sin(e/8e3);i.setUniform("u_a",c),i.setUniform("u_b",-2),i.setUniform("u_c",-1.2),i.setUniform("u_d",2),window.requestAnimationFrame(t)})),function(){console.log("Microphone?");var t=function(t){throw t};try{navigator.getUserMedia=navigator.webkitGetUserMedia||navigator.getUserMedia||navigator.mediaDevices.getUserMedia;var e=function(t){const e=new AudioContext;m=a.createMeydaAnalyzer({audioContext:e,bufferSize:512,source:e.createMediaStreamSource(t),windowingFunction:"blackman",featureExtractors:["rms"]}),console.log("User allowed microphone access."),console.log("Initializing AudioNode from MediaStream"),console.log("Setting Meyda Source to Microphone"),console.groupEnd()};console.log("Asking for permission..."),navigator.getUserMedia({video:!1,audio:!0},e,t)&&(p.then(e),p.catch(t))}catch(e){t()}}()}),[]}export default class extends t{constructor(t){super(),e(this,t,v,_,n,{})}}
