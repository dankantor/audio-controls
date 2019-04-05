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
  import {AudioControls} from 'audio-controls';
    
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

## Build

Watch JS and LESS files
```
npm run dev
```

Rollup JS and LESS files
```
npm run build
```

Run the example
To run it, you'll need a webserver. I recommend https://www.npmjs.com/package/http-server. After installing 
it run `http-server` and open a browser to http://localhost:8080/example/.