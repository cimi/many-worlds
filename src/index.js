import Meyda from 'meyda';
// import Modernizr from './modernizr-custom';
import { micSource, fileSource } from './audio';
import { showFpsCounter } from "./stats";
import './index.css';
import * as serviceWorker from './serviceWorker';
import { fragmentShaderCode, vertexShaderCode } from './shaders';
import { Menu } from './menu';

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

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
    const u_pointSize = this.gl.getUniformLocation(this.program, "u_pointSize");
    this.gl.uniform1f(u_pointSize, devicePixelRatio > 1 ? 1.5 : .75);

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
    if (this.features.energy < .5) {
      return .0;
    } else if (this.features.energy < 2) {
      return Math.min(.8, (Math.sin(ts / 8000) + 1) / 2);
    } else {
      return .8;
    }
  }

  _energyBin() {
    return Math.floor(this.energy / 100);
  }

  _oscillation(ts) {
    return Math.sin(this.energy / 100 + ts / 10000);
  }
}

class App {
  constructor() {
    const points = devicePixelRatio > 1 ? Math.pow(2, 20) : Math.pow(2, 19);
    this.attractor = new GlAttractor(fragmentShaderCode, vertexShaderCode, points);
  }

  async loadFile() {
    this.file = await fileSource();
  }

  async useMic() {
    const {context, source, stream} = await micSource();
    if (this.playbackActive) {
      this.playbackActive = false;
      this.audio.pause();
      this.paused = true;
    }

    this.stream = stream;
    this.context = context;
    this.analyzer = this._makeAnalyzer(context, source);
  }

  stopMic() {
    this.analyzer = null;
    if (this.context && this.context.state === 'running') {
      console.log(this.context.state);
      this.context.close();
    }
    if (this.stream) {
      this.stream.getTracks().forEach(track => track.stop());
      this.stream = null;
    }
  }

  useAudio() {
    if (this.playbackActive) {
      if (this.paused) {
        console.log('play');
        this.audio.play();
        this.paused = false;
      } else {
        console.log('pause');
        this.audio.pause();
        this.paused = true;
      }
    } else {
      this.stopMic();
      this.audio = this.file.audio;
      this.context = this.file.context;
      this.analyzer = this._makeAnalyzer(this.context, this.file.source);
      this.playbackActive = true;
      this.paused = false;
      this.audio.play();
      if (this.context.state === 'suspended') {
        this.context.resume();
        console.log('resume + play');
      }
    }
    return this.audio;
  }

  _makeAnalyzer(context, source) {
    return Meyda.createMeydaAnalyzer({
      audioContext: context,
      bufferSize: 512,
      source,
      windowingFunction: 'blackman',
      // perceptualSharpness, zcr, rms
      featureExtractors: ["energy", "spectralFlatness"],
    });
  }
}

window.onload = async function onLoad() {
  showFpsCounter(true);
  const app = new App();
  await app.loadFile();
  const mapper = new SoundMapper();
  const menu = new Menu(app);
  // if (!(Modernizr.audio && Modernizr.webgl && Modernizr.canvas)) {
  //   document.getElementById("warn-support").className = '';
  //   menu._toggleInfo();
  // }
  requestAnimationFrame(function loop(timestamp) {
    const uniforms = mapper.getUniforms(app.analyzer, timestamp);
    app.attractor.setUniforms(...uniforms);
    app.attractor.draw();

    // document.getElementById("meyda-debug").innerHTML = `${Math.floor(mapper.energy)} ${Math.floor(mapper.features.energy)}`;
    requestAnimationFrame(loop);
  });
};
