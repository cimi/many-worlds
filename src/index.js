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
    this.gl = this.canvas.getContext("webgl", {antialias: true, depth: false, xrCompatible: true});
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

class SoundMapper {
  constructor() {
    this.energy = 0;
    this.features = {};
  }

  getUniforms(analyzer, ts) {
    if (analyzer) {
      const features = analyzer.get(["energy", "spectralFlatness"]);
      if (features) {
        this.energy += features.energy;
        this.features = features;
      } else {
        this.features = {};
      }
    }
    switch (this._energyBin() % 10) {
      case 1:
      case 4:
      case 7:
        return [-2.0, this._oscillation(ts)-2.0, -1.2, 2.0, this._getColor(ts)]
      case 2:
      case 5:
        return [-2.0, -2.53, this._oscillation(ts)-1.61, 2.0, this._getColor(ts)]
      default:
        return [this._oscillation(ts) - 2.0, -2.0, -1.2, this._getD(), this._getColor(ts)]
    }
  }

  _getD() {
    return (this.features.flatness < .05) ? 2.0 - this.features.energy : 2.0;
  }

  _getColor(ts) {
    if (this.features.energy < .05) {
      return .0;
    } else if (this.features.energy < .2) {
      return Math.min(.8, (Math.sin(ts / 8000) + 1) / 2);
    } else {
      return .8;
    }
  }

  _energyBin() {
    return Math.floor(this.energy / 100);
  }

  _oscillation(ts) {
    return Math.sin(this.energy / 4 + ts / 10000);
  }
}
if (navigator.xr) {
  window.onload = async function onLoadVR() {
    const points = Math.pow(2, 10);
    const attractor = new GlAttractor(fragmentShaderCode, vertexShaderCode, points);
    const button = document.createElement('a');
    button.innerHTML = 'ENTER VR'
    await attractor.gl.makeXRCompatible();
    navigator.xr.isSessionSupported('immersive-vr').then((isSupported) => {
      if (isSupported) {
        document.body.appendChild(button);
        button.addEventListener('click', onButtonClicked);
        button.innerHTML = 'Enter XR';
        button.disabled = false;
      } else {
        console.log("WebXR doesn't support immersive-vr mode!");
      }
    });
    async function onButtonClicked() {
      const xrSession = await navigator.xr.requestSession('immersive-vr');
      const xrRefSpace = await xrSession.requestReferenceSpace('local');

      // ??? maybe these are useful, not sure
      // const uProjectionMatrix = attractor.gl.getUniformLocation(attractor.program, "uProjectionMatrix");
      // const uModelViewMatrix = attractor.gl.getUniformLocation(attractor.program, "uModelViewMatrix");

      // eslint-disable-next-line no-undef
      xrSession.updateRenderState({ baseLayer: new XRWebGLLayer(xrSession, attractor.gl) });

      // TODO: fix mic analyzer when serving over http
      const mapper = new SoundMapper();
      xrSession.requestAnimationFrame(function vrLoop(ts, xrFrame) {
        const xrViewerPose = xrFrame.getViewerPose(xrRefSpace);
        if (xrViewerPose) {
          const layer = xrSession.renderState.baseLayer;

          const uniforms = mapper.getUniforms(undefined, ts);
          attractor.setUniforms(...uniforms);

          attractor.gl.bindFramebuffer(attractor.gl.FRAMEBUFFER, layer.framebuffer);
          attractor.gl.clear(attractor.gl.COLOR_BUFFER_BIT | attractor.gl.DEPTH_BUFFER_BIT);

          for (const view of xrViewerPose.views) {
            const viewport = layer.getViewport(view);

            attractor.gl.viewport(viewport.x, viewport.y, viewport.width, viewport.height);

            // ??? no idea
            // attractor.gl.uniformMatrix4fv(uProjectionMatrix, false, view.projectionMatrix);
            // attractor.gl.uniformMatrix4fv(uModelViewMatrix, false, view.transform.matrix);

            attractor.draw();
          }
        }
        xrSession.requestAnimationFrame(vrLoop);
      });
    }
  }
} else {
  window.onload = async function onLoad() {
    showFpsCounter(true);
    // const points = devicePixelRatio > 1 ? Math.pow(2, 20) : Math.pow(2, 19);
    const points = Math.pow(2, 20);
    const attractor = new GlAttractor(fragmentShaderCode, vertexShaderCode, points);
    let analyzer;
    let mapper = new SoundMapper();
    requestAnimationFrame(function loop(timestamp) {
      const uniforms = mapper.getUniforms(analyzer, timestamp);
      attractor.setUniforms(...uniforms);
      attractor.draw();
      // document.getElementById("meyda-debug").innerHTML = `${Math.floor(mapper.energy)} ${Math.floor(mapper._energyBin())}`;
      requestAnimationFrame(loop);
    });

    try {
      analyzer = await micAnalyzer();
    } catch (e) {
      console.log(e);
    }
  };
}
