(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global['audio-controls'] = {})));
}(this, (function (exports) { 'use strict';

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var classCallCheck = createCommonjsModule(function (module, exports) {
"use strict";

exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
});

var _classCallCheck = unwrapExports(classCallCheck);

var _global = createCommonjsModule(function (module) {
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
});

var _core = createCommonjsModule(function (module) {
var core = module.exports = { version: '2.6.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
});

var _aFunction = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

// optional / simple context binding

var _ctx = function (fn, that, length) {
  _aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

var _isObject = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

var _anObject = function (it) {
  if (!_isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

var _fails = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

// Thank's IE8 for his funny defineProperty
var _descriptors = !_fails(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

var document$1 = _global.document;
// typeof document.createElement is 'object' in old IE
var is = _isObject(document$1) && _isObject(document$1.createElement);
var _domCreate = function (it) {
  return is ? document$1.createElement(it) : {};
};

var _ie8DomDefine = !_descriptors && !_fails(function () {
  return Object.defineProperty(_domCreate('div'), 'a', { get: function () { return 7; } }).a != 7;
});

// 7.1.1 ToPrimitive(input [, PreferredType])

// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var _toPrimitive = function (it, S) {
  if (!_isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

var dP = Object.defineProperty;

var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  _anObject(O);
  P = _toPrimitive(P, true);
  _anObject(Attributes);
  if (_ie8DomDefine) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var _objectDp = {
	f: f
};

var _propertyDesc = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var _hide = _descriptors ? function (object, key, value) {
  return _objectDp.f(object, key, _propertyDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var hasOwnProperty = {}.hasOwnProperty;
var _has = function (it, key) {
  return hasOwnProperty.call(it, key);
};

var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] : (_global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && _has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? _ctx(out, _global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) _hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
var _export = $export;

// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
_export(_export.S + _export.F * !_descriptors, 'Object', { defineProperty: _objectDp.f });

var $Object = _core.Object;
var defineProperty$2 = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};

var defineProperty = createCommonjsModule(function (module) {
module.exports = { "default": defineProperty$2, __esModule: true };
});

unwrapExports(defineProperty);

var createClass = createCommonjsModule(function (module, exports) {
"use strict";

exports.__esModule = true;



var _defineProperty2 = _interopRequireDefault(defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
});

var _createClass = unwrapExports(createClass);

var AudioControls = function () {
  function AudioControls(opts) {
    _classCallCheck(this, AudioControls);

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
      if (this.playQueue) {
        this.playQueue.playPause();
      } else if (this.audio) {
        this.toggleAudio();
      }
    }
  }, {
    key: 'toggleAudio',
    value: function toggleAudio() {
      if (this.audio.paused === true) {
        this.audio.play();
      } else {
        this.audio.pause();
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
          if (this.playQueue) {
            this.playQueue.playPause();
          } else if (this.audio) {
            this.toggleAudio();
          }
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

exports.AudioControls = AudioControls;

Object.defineProperty(exports, '__esModule', { value: true });

})));
