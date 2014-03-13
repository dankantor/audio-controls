Audio Controls
==============

Uses PlayQueue to give audio control buttons functionality

## Install

    npm install audio-controls


## Usage

    var AudioControls = require('audio-controls');
    var audioControls = new AudioControls(
        {
            'playQueue': playQueue,
            'playPause': '#control-play-pause',
            'previous': '#control-previous',
            'next': '#control-next'
        }
    );
