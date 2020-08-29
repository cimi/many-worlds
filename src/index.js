import GlslCanvas from 'glslCanvas';
import Meyda from 'meyda';

import { getMicMediaStream } from './mic';
import { showFpsCounter } from "./stats";
import './index.css';
import * as serviceWorker from './serviceWorker';
import { fragmentShader, vertexShader } from './shaders';


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

async function makeMicAnalyzer() {
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
    featureExtractors: ["rms"],
  });
};

const [a, b, c, d] = [-2.5, -2.0, -1.2, 2.0];
// let a = -2.5;
// const b = -2.0;
// const c = -1.2;
// const d = 2.0;


function makeGlslCanvas() {
  const width = 980;
  const height = width;
  const canvas = document.createElement('canvas');
  canvas.width = width * devicePixelRatio;
  canvas.height = height * devicePixelRatio;
  canvas.style = `width: ${width}px; height: ${height}px;border:1px solid black;`;

  const sandbox = new GlslCanvas(canvas);
  setUniforms(sandbox, a, b, c, d);
  sandbox.load(fragmentShader, vertexShader);
  document.getElementById("root").appendChild(canvas);
  return sandbox;
}

function setUniforms(sandbox, a, b, c, d) {
  sandbox.setUniform("u_a", a);
  sandbox.setUniform("u_b", b);
  sandbox.setUniform("u_c", c);
  sandbox.setUniform("u_d", d);
}

window.onload = async function onLoad() {
  const analyzer = await makeMicAnalyzer();
  showFpsCounter(true);
  const webGlCanvas = makeGlslCanvas();

  requestAnimationFrame(function loop(timestamp) {
    let rms = 0;
    if (analyzer) {
      const features = analyzer.get(["rms"]);
      const el = document.getElementById("meyda-debug");
      rms = features ? features.rms : 0
      el.innerHTML = `${rms}`;
    }
    setUniforms(webGlCanvas, Math.sin(timestamp / 8000) + rms, b, c, d);
    requestAnimationFrame(loop);
  });
};
