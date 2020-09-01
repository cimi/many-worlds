import Meyda from 'meyda';

import { getMicMediaStream } from './mic';
import { showFpsCounter } from "./stats";
import './index.css';
import * as serviceWorker from './serviceWorker';
import { fragmentShaderCode, vertexShaderCode } from './shaders';


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

async function micAnalyzer() {
  const mediaStream = await getMicMediaStream();
  const AudioContext = window.AudioContext // Default
  || window.webkitAudioContext // Safari and old versions of Chrome
  || false;
  const context = new AudioContext();
  return Meyda.createMeydaAnalyzer({
    audioContext: context,
    bufferSize: 512,
    source: context.createMediaStreamSource(mediaStream),
    windowingFunction: 'blackman',
    // perceptualSharpness, zcr, rms
    featureExtractors: ["energy", "spectralFlatness"],
  });
};

class GlAttractor {
  constructor(fragmentShaderCode, vertexShaderCode, numPoints) {
    this.canvas = document.createElement('canvas');
    this.setWidth(Math.min(window.innerHeight, window.innerWidth));
    this.setHeight(this.width);
    this.setMargin((window.innerHeight - this.height) / 2)
    this.canvas.style = `width: ${this.width}px; height: ${this.height}px; margin: ${this.margin};`;
    this.gl = this.canvas.getContext("webgl", {antialias: true, depth: false});
    this.program = this.compileShaders(fragmentShaderCode, vertexShaderCode);
    this.gl.useProgram(this.program);
    this.numPoints = numPoints;
    this.useVertexBuffer();

    const rootEl = document.getElementById("root");
    rootEl.style = `width: ${this.width}px; height: ${this.height}px`;
    rootEl.appendChild(this.canvas);
  }

  setWidth(width) {
    this.width = width;
    this.canvas.width = width * devicePixelRatio;
    this.canvas.style = this.canvas.style + `width: ${width}px;`;
  }

  setHeight(height) {
    this.height = height;
    this.canvas.height = height * devicePixelRatio;
    this.canvas.style = this.canvas.style + `height: ${height}px;`;
  }

  setMargin(margin) {
    this.margin = margin;
    this.canvas.style = this.canvas.style + `margin: ${margin} auto;`;
  }

  compileShaders(fragmentShaderCode, vertexShaderCode) {
    const gl = this.gl;
    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderCode);
    gl.compileShader(vertexShader);
    if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) throw gl.getShaderInfoLog(vertexShader);

    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderCode);
    gl.compileShader(fragmentShader);
    if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) throw gl.getShaderInfoLog(fragmentShader);

    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw gl.getProgramInfoLog(program);

    return program;
  }

  useVertexBuffer() {
    const gl = this.gl;
    const array = new Float32Array(this.numPoints * 2).map(() => Math.random() * 2 - 1);
    const vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, array, gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    const a_position = gl.getAttribLocation(this.program, "a_position");
    gl.vertexAttribPointer(a_position, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(a_position);
  }

  setUniforms(a, b, c, d, color) {
    const u_a = this.gl.getUniformLocation(this.program, "u_a")
    const u_b = this.gl.getUniformLocation(this.program, "u_b")
    const u_c = this.gl.getUniformLocation(this.program, "u_c")
    const u_d = this.gl.getUniformLocation(this.program, "u_d")
    const u_color = this.gl.getUniformLocation(this.program, "u_color")
    this.gl.uniform1f(u_a, a);
    this.gl.uniform1f(u_b, b);
    this.gl.uniform1f(u_c, c);
    this.gl.uniform1f(u_d, d);
    this.gl.uniform1f(u_color, color);
  }

  draw() {
    const gl = this.gl;
    gl.drawArrays(gl.POINTS, 0, this.numPoints);
  }
}

window.onload = async function onLoad() {
  showFpsCounter(true);
  const points = devicePixelRatio > 1 ? Math.pow(2, 20) : Math.pow(2, 19);
  const attractor = new GlAttractor(fragmentShaderCode, vertexShaderCode, points);
  let analyzer;
  let energy = 0;
  requestAnimationFrame(function loop(timestamp) {
    let [distort, flatness] = [0, 0];
    if (analyzer) {
      const features = analyzer.get(["energy", "spectralFlatness"]);
      distort = features ? features.energy * 10 : 0;
      energy += features ? features.energy / 2 : 0;
      flatness = features ? features.spectralFlatness : 0;
    }
    const a = Math.sin(energy + timestamp / 10000) - 2.0;
    const [b, c] = ((Math.floor(energy / 100) % 2) === 0) ? [-2.0, -1.2] : [-2.53, -1.61];
    const d = (flatness < .05) ? 2.0 - distort : 2.0;
    const color = Math.min(.8, (Math.sin(timestamp / 8000) + 1) / 2);

    attractor.setUniforms(a, b, c, d, color);
    attractor.draw();
    requestAnimationFrame(loop);
  });

  try {
    analyzer = await micAnalyzer();
  } catch (e) {
    console.log(e);
  }

};
