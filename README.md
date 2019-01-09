Audio Controls
==============

Connect events (play, pause, previous, next) from [PlayQueue](https://www.npmjs.com/package/playqueue) or
the Audio element to HTML elements. 


## Install

```
npm install audio-controls
```


## Usage

```js
  import AudioControls from 'audio-controls';
    
  const audioControls = new AudioControls({
    'playQueue': playQueue, // optional if audio is provided
    'audio': audioObject, // optional if playQueue is provided
    'playPause': '#control-play-pause',
    'previous': '#control-previous',
    'next': '#control-next'
  });
```
    
## Example HTML

```html
  <div class="controls">
    <div class="control previous" id="control-previous"></div>
    <div class="control play-pause" id="control-play-pause"></div>
    <div class="control next" id="control-next"></div>
  </div>
```
