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


const n = Math.pow(2, 20);

function makeProgram(gl) {
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

function glCanvas() {
  const width = Math.min(window.innerHeight, window.innerWidth);
  const height = width;
  const canvas = document.createElement('canvas');
  canvas.width = width * devicePixelRatio;
  canvas.height = height * devicePixelRatio;
  const margin = (window.innerHeight - height) / 2;
  canvas.style = `width: ${width}px; height: ${height}px; margin: ${margin};`;

  const gl = canvas.getContext("webgl", {antialias: true, depth: false});
  const program = makeProgram(gl);
  gl.useProgram(program);
  const array = new Float32Array(n * 2).map(() => Math.random() * 2 - 1);
  const vertexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, array, gl.STATIC_DRAW);
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  const a_position = gl.getAttribLocation(program, "a_position");
  gl.vertexAttribPointer(a_position, 2, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(a_position);

  const rootEl = document.getElementById("root");
  rootEl.style = `width: ${width}px; height: ${height}px`;
  rootEl.appendChild(canvas);
  return { gl, program };
}

function setUniforms(gl, program, a, b, c, d) {
  const u_a = gl.getUniformLocation(program, "u_a")
  const u_b = gl.getUniformLocation(program, "u_b")
  const u_c = gl.getUniformLocation(program, "u_c")
  const u_d = gl.getUniformLocation(program, "u_d")
  gl.uniform1f(u_a, a);
  gl.uniform1f(u_b, b);
  gl.uniform1f(u_c, c);
  gl.uniform1f(u_d, d);
}
let energy = 0;
window.onload = async function onLoad() {
  let analyzer;
  showFpsCounter(true);
  const { gl, program } = glCanvas();
  requestAnimationFrame(function loop(timestamp) {
    let mod = 0;
    let flatness;
    if (analyzer) {
      const features = analyzer.get(["energy", "spectralFlatness"]);
      mod = features ? features.energy * 10 : 0;
      energy += features ? features.energy / 2 : 0;
      flatness = features ? features.spectralFlatness : 0;
      // console.log(Math.sin(energy), Math.sin(timestamp));
      // const el = document.getElementById("meyda-debug");
      // el.innerHTML = `${mod}`;
    }
    gl.drawArrays(gl.POINTS, 0, n);
    const a = Math.sin(energy + timestamp / 10000) - 2.0;
    const [b, c] = [-2.0, -1.2];
    const d = (flatness < .05) ? 2.0 - mod : 2.0;
    setUniforms(gl, program, a, b, c, d);

    requestAnimationFrame(loop);
  });
  analyzer = await micAnalyzer();
};
