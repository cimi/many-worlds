import './index.css';
import * as serviceWorker from './serviceWorker';
import { getMicMediaStream } from './mic';
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

async function onLoad() {
  const analyzer = await makeMicAnalyzer();

  function loop(timestamp) {
    if (analyzer) {
      const features = analyzer.get(["rms"]);
      document.body.innerHTML = `<p>${features ? features.rms * 10000 : 0}</p>`;
    }

    window.requestAnimationFrame(loop);
  }
  window.requestAnimationFrame(loop);
}

window.onload = onLoad;
