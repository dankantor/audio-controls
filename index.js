class AudioControls {
  
  constructor(opts) {
    if (opts) {
      this.playQueue = null;
      this.audio = null;
      this.playPauseEl = null;
      this.previousEl = null;
      this.nextEl = null;
      this.pauseClassName = opts.pauseClassName || 'pause';
      this.pointerEvent = opts.pointerEvent || 'click';
      this.listenForKeyEvents = opts.listenForKeyEvents || false; 
      if (opts.playQueue) {
        this.playQueue = opts.playQueue;
        this.audio = this.playQueue.audio;
      } else {
        this.audio = opts.audio;
      }
      this.cacheElements(opts);
      this.addListeners();
    } else {
      throw TypeError('constructor arguments cannot be null or undefined');
    }
  }
  
  cacheElements(opts) {
    if (opts.playPause) {
      this.playPauseEl = document.querySelector(opts.playPause);
    }
    if (opts.previous) {
      this.previousEl = document.querySelector(opts.previous);
    }
    if (opts.next) {
      this.nextEl = document.querySelector(opts.next);
    }
  }
  
  addListeners() {
    if (this.playQueue !== null) {
      this.playQueue.on('pause', this.onPause.bind(this));
      this.playQueue.on('play', this.onPlay.bind(this));
    } else if (this.audio !== null) {
      this.audio.addEventListener('pause', this.onPause.bind(this));
      this.audio.addEventListener('play', this.onPlay.bind(this));
    }
    if (this.playPauseEl) {
      this.playPauseEl.addEventListener(this.pointerEvent, this.onPlayPausePointerEvent.bind(this));
    }
    if (this.previousEl) {
      this.previousEl.addEventListener(this.pointerEvent, this.onPreviousEvent.bind(this));
    }
    if (this.nextEl) {
      this.nextEl.addEventListener(this.pointerEvent, this.onNextEvent.bind(this));
    }
    if (this.listenForKeyEvents === true) {
      document.addEventListener('keyup', this.onKeyup.bind(this));
    }
  }
  
  onPause(e){
    if (this.playPauseEl !== null) {
      this.playPauseEl.classList.remove(this.pauseClassName);
    } 
  }
  
  onPlay(e){
    if (this.playPauseEl !== null) {
      this.playPauseEl.classList.add(this.pauseClassName);
    } 
  }
  
  onPlayPausePointerEvent(e) {
    this.toggleAudio();
  }
  
  toggleAudio() {
    if (this.playQueue) {
      this.playQueue.togglePlay();
    } else if (this.audio) {
      if (this.audio.paused === true) {
        this.audio.play();
      } else {
        this.audio.pause();
      }
    }
  }
  
  onPreviousEvent(e) {
    if (this.playQueue) {
      this.playQueue.previous();
    }
  }
  
  onNextEvent(e){
    if (this.playQueue) {
      this.playQueue.next();
    }
  }
  
  onKeyup(e) {
    switch(e.keyCode) {
      case 32:
        this.toggleAudio();
      break;
      case 37:
        if (this.playQueue) {
          this.playQueue.previous();
        }
      break;
      case 38:
        if (this.playQueue) {
          this.playQueue.previous();
        }
      break;
      case 39:
        if (this.playQueue) {
          this.playQueue.next();
        }
      break;
      case 40:
        if (this.playQueue) {
          this.playQueue.next();
        }
      break;
      default:
      break;
    }
  }
  
}

export {AudioControls}