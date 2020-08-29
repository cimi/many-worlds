import './index.css';
import * as serviceWorker from './serviceWorker';
import { getMicMediaStream } from './mic';
import { showFpsCounter } from "./stats";
import Meyda from 'meyda';

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

window.onload = async function onLoad() {
  const analyzer = await makeMicAnalyzer();
  showFpsCounter(true);
  requestAnimationFrame(function loop(timestamp) {
    if (analyzer) {
      const features = analyzer.get(["rms"]);
      const el = document.getElementById("root");
      el.innerHTML = `<p>${features ? features.rms * 10000 : 0}</p>`;
    }

    requestAnimationFrame(loop);
  });
};
