import { showFpsCounter } from "./stats";

export class Menu {
  constructor(app) {
    this.app = app;
    this.el = document.getElementById('menu');

    this.playback = document.getElementById('playback');
    this.progress = document.getElementById('progress');
    this.mic = document.getElementById('mic');
    this.toggle = document.getElementById('toggle-controls');
    this.fullscreen = document.getElementById('fullscreen');

    this.fullscreen.addEventListener('click', () => this._toggleFullscreen());
    this.mic.addEventListener('click', async () => await this._toggleMicrophone());
    this.playback.addEventListener('click', () => this._togglePlayback());
    this.toggle.addEventListener('click', () => this._toggleControls());

    document.addEventListener('keypress', async (event) => {
      if (event.keyCode === 104 || event.key === "h") {
        this._toggleControls();
      } else if (event.keyCode === 103 || event.key === "f") {
        this._toggleFullscreen();
      } else if (event.keyCode === 109 || event.key === "m") {
        await this._toggleMicrophone();
      } else if (event.keyCode === 112 || event.key === "p") {
        this._togglePlayback();
      } else if (event.keyCode === 105 || event.key === "i") {
        this._toggleInfo();
      }
    });
    // prevents FOUC
    this.el.className = '';
  }

  async _toggleMicrophone() {
    const active = this._toggle(this.mic);
    if (active) {
      this.progress.className = 'hide';
      await this.app.useMic();
    } else {
      this.app.stopMic();
    }
    this.playback.className = 'off';
  }

  _togglePlayback() {
    this._toggle(this.playback);
    this.mic.className = 'off';
    const audio = this.app.useAudio();
    this.progress.className = '';
    // TODO: check if handler is duplicated
    audio.addEventListener('timeupdate', () => {
      // console.log(audio.currentTime, audio.duration, audio.currentTime / audio.duration)
      this.progress.value = Math.round((audio.currentTime / audio.duration) * 100);
      // this.playback.setAttribute('data-progress', audio.currentTime / audio.duration);
    });
  }

  _toggleInfo() {

  }

  _toggleControls() {
    if (this.el.className === 'hide') {
      showFpsCounter(true);
      this.el.className = '';
    } else {
      showFpsCounter(false);
      this.el.className = 'hide';
    }
  }

  _toggleFullscreen() {
    const active = this._toggle(this.fullscreen);
    if (active && !document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  _toggle(el) {
    if (el.className === 'on') {
      el.className = 'off';
    } else {
      el.className = 'on';
    }
    return el.className === 'on';
  }
}
