(function(){

// constructor
function AudioControls(opts){
    this.playQueue = null;
    this.audio = null;
    this.playPauseEl = null;
    this.previousEl = null;
    this.nextEl = null;
    this.pauseClassName = opts.pauseClassName || 'pause';
    this.pointerEvent = opts.pointerEvent || 'click';
    this.listenForKeyEvents = opts.listenForKeyEvents || false; 
    if(opts.playQueue){
        this.playQueue = opts.playQueue;
        this.audio = this.playQueue.audio;
    }
    else{
        this.audio = opts.audio;
    }
    this.cacheElements(opts);
    this.addListeners();
}

AudioControls.prototype.cacheElements = function(opts){
    if(opts.playPause){
        this.playPauseEl = $(opts.playPause);
    }
    if(opts.previous){
        this.previousEl = $(opts.previous);
    }
    if(opts.next){
        this.nextEl = $(opts.next);
    }
}

AudioControls.prototype.addListeners = function(){
    if(this.playQueue !== null){
        this.playQueue.addEventListener(
            'pause',
            this.onPause.bind(this),
            false
        );
        this.playQueue.addEventListener(
            'play',
            this.onPlay.bind(this),
            false
        );
    }
    else{
        if(this.audio !== null){
            this.audio.addEventListener(
                'pause',
                this.onPause.bind(this),
                false
            );
            this.audio.addEventListener(
                'play',
                this.onPlay.bind(this),
                false
            );
        }
    }
    if(this.playPauseEl){
        this.playPauseEl.on(
            this.pointerEvent,
            this.onPlayPausePointerEvent.bind(this)
        );
    }
    if(this.previousEl){
        this.previousEl.on(
            this.pointerEvent,
            this.onPreviousEvent.bind(this)
        );
    }
    if(this.nextEl){
        this.nextEl.on(
            this.pointerEvent,
            this.onNextEvent.bind(this)
        );
    }
    if(this.listenForKeyEvents === true){
        $(document).on(
            'keyup',
            this.onKeyup.bind(this)
        );
    }
}

AudioControls.prototype.onPause = function(e){
    if(this.playPauseEl !== null){
        this.playPauseEl.removeClass(this.pauseClassName);
    } 
}

AudioControls.prototype.onPlay = function(e){
    if(this.playPauseEl !== null){
        this.playPauseEl.addClass(this.pauseClassName);
    } 
}

AudioControls.prototype.onPlayPausePointerEvent = function(e){
    if(this.playQueue){
        this.playQueue.playPause();
    }
    else{
        if(this.audio){
            if(this.audio.paused === true){
                this.audio.play();
            }
            else{
                this.audio.pause();
            }
        }
    }
}

AudioControls.prototype.onPreviousEvent = function(e){
    if(this.playQueue){
        this.playQueue.previous();
    }
}

AudioControls.prototype.onNextEvent = function(e){
    if(this.playQueue){
        this.playQueue.next();
    }
}

// keyboard shortcuts
AudioControls.prototype.onKeyup = function(e){
    switch(e.keyCode){
        case 32:
            this.playQueue.playPause();
        break;
        case 37:
            this.playQueue.previous();
        break;
        case 38:
            this.playQueue.previous();
        break;
        case 39:
            this.playQueue.next();
        break;
        case 40:
            this.playQueue.next();
        break;
        default:
        break;
    }
}


// check if we've got require
if(typeof module !== "undefined"){
    module.exports = AudioControls;
}
else{
    window.ListSelector = AudioControls;
}

}()); // end wrapper