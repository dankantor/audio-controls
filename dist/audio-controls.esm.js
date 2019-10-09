var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AudioControls = function () {
  function AudioControls(opts) {
    _classCallCheck(this, AudioControls);

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

  _createClass(AudioControls, [{
    key: 'cacheElements',
    value: function cacheElements(opts) {
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
  }, {
    key: 'addListeners',
    value: function addListeners() {
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
  }, {
    key: 'onPause',
    value: function onPause(e) {
      if (this.playPauseEl !== null) {
        this.playPauseEl.classList.remove(this.pauseClassName);
      }
    }
  }, {
    key: 'onPlay',
    value: function onPlay(e) {
      if (this.playPauseEl !== null) {
        this.playPauseEl.classList.add(this.pauseClassName);
      }
    }
  }, {
    key: 'onPlayPausePointerEvent',
    value: function onPlayPausePointerEvent(e) {
      this.toggleAudio();
    }
  }, {
    key: 'toggleAudio',
    value: function toggleAudio() {
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
  }, {
    key: 'onPreviousEvent',
    value: function onPreviousEvent(e) {
      if (this.playQueue) {
        this.playQueue.previous();
      }
    }
  }, {
    key: 'onNextEvent',
    value: function onNextEvent(e) {
      if (this.playQueue) {
        this.playQueue.next();
      }
    }
  }, {
    key: 'onKeyup',
    value: function onKeyup(e) {
      switch (e.keyCode) {
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
  }]);

  return AudioControls;
}();

export { AudioControls };
