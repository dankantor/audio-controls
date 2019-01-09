import {AudioControls} from './../index.js';

class App {
  
  constructor() {
    const audio = new Audio();
    audio.src = 'example.m4a';
    const audioControls = new AudioControls({
      'audio': audio,
      'previous': '#previous',
      'playPause': '#play-pause',
      'next': '#next',
      'listenForKeyEvents': true
    });
  }
  
}

window.addEventListener('load', e => {
  new App();
});