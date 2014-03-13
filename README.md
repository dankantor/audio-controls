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
    
## Example HTML

    <div class="controls">
        <div class="control previous" id="control-previous"></div>
        <div class="control play-pause" id="control-play-pause"></div>
        <div class="control next" id="control-next"></div>
    </div>
    
## Example CSS

    .controls {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        width: 135px;
    }
    .control {
        font-family: font-awesome;
        position: absolute;
        top: 22px;
        font-size: 26px;
        color: #6B6B6B;
    }
    .control:active {
        color: #333333;
    }
    .previous {
        left: 15px;
    }
    .previous:before {
        content: '\f04a';
    }
    .play-pause {
        left: 59px;
        font-size: 30px;
        top: 20px;
    }
    .play-pause:before {
        content: '\f04b';
    }
    .play-pause.pause:before {
        content: '\f04c';
    }
    .next {
        left: 103px;
    }
    .next:before {
        content: '\f04e';
    }
