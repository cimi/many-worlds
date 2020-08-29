export async function getMicMediaStream() {
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
