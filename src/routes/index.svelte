<script>
import { onMount } from 'svelte';

	const n = Math.pow(2, 20);
	const fragmentShaderCode = `
precision highp float;

varying float v_t;

const float PI = 3.14159265359;

vec3 cubehelix(float x, float y, float z) {
	float a = y * z * (1.0 - z);
	float c = cos(x + PI / 2.0);
	float s = sin(x + PI / 2.0);
	return vec3(
		z + a * (1.78277 * s - 0.14861 * c),
		z - a * (0.29227 * c + 0.90649 * s),
		z + a * (1.97294 * c)
	);
}

vec3 rainbow(float t) {
	if (t < 0.0 || t > 1.0) t -= floor(t);
	float ts = abs(t - 0.5);
	return cubehelix(
		(360.0 * t - 100.0) / 180.0 * PI,
		1.5 - 1.5 * ts,
		0.8 - 0.9 * ts
	);
}

void main() {
	gl_FragColor = vec4(rainbow(v_t / 4.0 + 0.25), 1.0);
}
`;
	const vertexShaderCode = `
precision highp float;

const float PI = 3.14159265359;

uniform float u_a;
uniform float u_b;
uniform float u_c;
uniform float u_d;

attribute vec2 a_position;

varying float v_t;

void main() {
  float x1, x2 = a_position.x;
  float y1, y2 = a_position.y;
  for (int i = 0; i < 8; i++) {
    x1 = x2, y1 = y2;
    x2 = sin(u_a * y1) - cos(u_b * x1);
    y2 = sin(u_c * x1) - cos(u_d * y1);
  }
  v_t = atan(a_position.y, a_position.x) / PI;
  gl_Position = vec4(x2 / 2.0, y2 / 2.0, 0.0, 1.0);
  gl_PointSize = 1.5;
}
`;

	onMount(async () => {
	const GlslCanvas = (await import("glslCanvas")).default;
	const Meyda = (await import("Meyda")).default;
	console.log(GlslCanvas)
	console.log("meyda", Meyda)
	const width = 980;
	const height = width;
	const canvas = document.createElement('canvas');
	const sandbox = new GlslCanvas(canvas);
	
	// const canvas = DOM.canvas(width * devicePixelRatio, height * devicePixelRatio);
	canvas.width = width * devicePixelRatio;
	canvas.height = height * devicePixelRatio;
	canvas.style = `width: ${width}px; height: ${height}px;border:1px solid black;`;
	const gl = canvas.value = canvas.getContext("webgl", {antialias: false, depth: false});
	gl.getExtension("OES_texture_float");

	gl.viewport(0, 0, gl.width, gl.height);
	const fragmentShader = (() => {
		const shader = gl.createShader(gl.FRAGMENT_SHADER);
		gl.shaderSource(shader, fragmentShaderCode);
		gl.compileShader(shader);
		if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) throw gl.getShaderInfoLog(shader);
		return shader;
	})();
	const vertexShader = (() => {
		const shader = gl.createShader(gl.VERTEX_SHADER);
  		gl.shaderSource(shader, vertexShaderCode);
		gl.compileShader(shader);
		if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) throw gl.getShaderInfoLog(shader);
		return shader;
	})();
	const program = (() => {
		const program = gl.createProgram();
		gl.attachShader(program, vertexShader);
		gl.attachShader(program, fragmentShader);
		gl.linkProgram(program);
		if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw gl.getProgramInfoLog(program);
		return program;
	})();
	const vertexBuffer = (() => {
		const array = new Float32Array(n * 2).map(() => Math.random() * 2 - 1);
		const buffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
		gl.bufferData(gl.ARRAY_BUFFER, array, gl.STATIC_DRAW);
		return buffer;
	})();

	gl.useProgram(program);
	gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
	const a_position = gl.getAttribLocation(program, "a_position")
	gl.vertexAttribPointer(a_position, 2, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(a_position);

	let a = -2.5;
	const b = -2.0;
	const c = -1.2;
	const d = 2.0;

	document.getElementById("attractor").appendChild(canvas);
	let start;
	sandbox.setUniform("u_a", a);
	sandbox.setUniform("u_b", b);
	sandbox.setUniform("u_c", c);
	sandbox.setUniform("u_d", d);
	sandbox.load(fragmentShaderCode, vertexShaderCode);
	let analyzer = {get:()=>{}};
	function step(timestamp) {
		if (start === undefined) {
			start = timestamp;
		}
		const elapsed = timestamp - start;

		const features = analyzer.get(['rms']);
		const audioLevel = features ? features.rms : 0;
		const multiplier = Math.floor(audioLevel * 10000);
		const shocking = Math.min(Math.max(Math.sin(elapsed) * multiplier, -66), 66);
		console.log(shocking);
		document.getElementById("attractor").style.transform = 'translateX(' + shocking + 'px)';
		const a = -2.0 + Math.sin(timestamp / 8000);
		sandbox.setUniform("u_a", a);
		sandbox.setUniform("u_b", b);
		sandbox.setUniform("u_c", c);
		sandbox.setUniform("u_d", d);

		window.requestAnimationFrame(step);
	}
	window.requestAnimationFrame(step);

	(function () {
		console.log("Microphone?")
		var errorCallback = function (err) {
			throw err;
		};

		try {
			navigator.getUserMedia = navigator.webkitGetUserMedia ||
				navigator.getUserMedia || navigator.mediaDevices.getUserMedia;
			var constraints = { video: false, audio: true };
			var successCallback = function (mediaStream) {
				const context = new AudioContext();
				analyzer = Meyda.createMeydaAnalyzer({
					audioContext: context,
					bufferSize: 512,
					source: context.createMediaStreamSource(mediaStream),
					windowingFunction: 'blackman',
					featureExtractors: ["rms"],
				});

				// document.getElementById('audioControl').style.display = 'none';
				console.log('User allowed microphone access.');
				console.log('Initializing AudioNode from MediaStream');
				console.log('Setting Meyda Source to Microphone');
				console.groupEnd();
			};

			console.log('Asking for permission...');
			let getUserMediaPromise = navigator.getUserMedia(
				constraints,
				successCallback,
				errorCallback
			);
			if (getUserMediaPromise) {
				p.then(successCallback);
				p.catch(errorCallback);
			}
		} catch (e) {
			errorCallback();
		}
	})();
});
</script>

<style>
	
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<div id="attractor"></div>
<!-- <h1>Great success!</h1> -->
