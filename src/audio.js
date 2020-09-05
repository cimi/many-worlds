async function getMicMediaStream() {
  const constraints = { audio: true, videol: false };
  if (navigator.mediaDevices.getUserMedia) {
    console.log("Using navigator.mediaDevices");
    return navigator.mediaDevices.getUserMedia(constraints);
  } else if (navigator.webkitGetUserMedia || navigator.getUserMedia) {
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia;
    return new Promise((resolve, reject) => {
      navigator.getUserMedia(constraints, resolve, reject);
    });
  }
}

export async function micSource() {
  const mediaStream = await getMicMediaStream();
  const context = newAudioContext();
  return { context, source: context.createMediaStreamSource(mediaStream), stream: mediaStream};
};


export async function fileSource() {
  const audio = document.createElement('audio');
  const sourceEl = document.createElement('source');
  sourceEl.src = process.env.PUBLIC_URL + "/max-cooper-fragments-of-self-sample.mp3";
  audio.appendChild(sourceEl);
  const context = newAudioContext();
  const source = context.createMediaElementSource(audio);
  source.connect(context.destination);
  return { context, source, audio };
}

function newAudioContext() {
  const AudioContext = window.AudioContext // Default
  || window.webkitAudioContext // Safari and old versions of Chrome
  || false;
  return new AudioContext();
}
