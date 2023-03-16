/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/pokemon.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/audios/pokemon/battle.mp3":
/*!******************************************!*\
  !*** ./assets/audios/pokemon/battle.mp3 ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0047da0265f446b8d5bc4cfee5529631.mp3");

/***/ }),

/***/ "./assets/audios/pokemon/fireballHit.wav":
/*!***********************************************!*\
  !*** ./assets/audios/pokemon/fireballHit.wav ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c7dd5376f8788a7c0c34364a7fac189f.wav");

/***/ }),

/***/ "./assets/audios/pokemon/initBattle.wav":
/*!**********************************************!*\
  !*** ./assets/audios/pokemon/initBattle.wav ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "8a9c4032207228ec964cc08169fe0fb1.wav");

/***/ }),

/***/ "./assets/audios/pokemon/initFireball.wav":
/*!************************************************!*\
  !*** ./assets/audios/pokemon/initFireball.wav ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c88d03559c8c3b28b1058c6dfa72c27a.wav");

/***/ }),

/***/ "./assets/audios/pokemon/map.wav":
/*!***************************************!*\
  !*** ./assets/audios/pokemon/map.wav ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "1079bd1c9c01b13cccb0dfae9650967e.wav");

/***/ }),

/***/ "./assets/audios/pokemon/tackleHit.wav":
/*!*********************************************!*\
  !*** ./assets/audios/pokemon/tackleHit.wav ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "6bb08dcc48eff766ae7a1e8a5f30f859.wav");

/***/ }),

/***/ "./assets/audios/pokemon/victory.wav":
/*!*******************************************!*\
  !*** ./assets/audios/pokemon/victory.wav ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "67b1813c9c4a45d4f71774ad7bbaf815.wav");

/***/ }),

/***/ "./assets/images/pokemon/battleBackground.png":
/*!****************************************************!*\
  !*** ./assets/images/pokemon/battleBackground.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "80b51c219ab89fdec3427c1d336b4885.png");

/***/ }),

/***/ "./assets/images/pokemon/draggleSprite.png":
/*!*************************************************!*\
  !*** ./assets/images/pokemon/draggleSprite.png ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "dcaef42f5394d52df250830c62aa901a.png");

/***/ }),

/***/ "./assets/images/pokemon/embySprite.png":
/*!**********************************************!*\
  !*** ./assets/images/pokemon/embySprite.png ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "8a945b4f8a793dfe42b88aea4726b9ac.png");

/***/ }),

/***/ "./assets/images/pokemon/fireball.png":
/*!********************************************!*\
  !*** ./assets/images/pokemon/fireball.png ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "82f6433b68e24bda4c9ee1f67c1fa6a3.png");

/***/ }),

/***/ "./assets/images/pokemon/foreground.png":
/*!**********************************************!*\
  !*** ./assets/images/pokemon/foreground.png ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "7a10c7e73ab76be54be9ca7ea4682e18.png");

/***/ }),

/***/ "./assets/images/pokemon/pelletTown.png":
/*!**********************************************!*\
  !*** ./assets/images/pokemon/pelletTown.png ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "49d1e8e78408beeffac12bb4cb903789.png");

/***/ }),

/***/ "./assets/images/pokemon/playerDown.png":
/*!**********************************************!*\
  !*** ./assets/images/pokemon/playerDown.png ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "1e65efe9883d2c4410f175a565df0811.png");

/***/ }),

/***/ "./assets/images/pokemon/playerLeft.png":
/*!**********************************************!*\
  !*** ./assets/images/pokemon/playerLeft.png ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "900f05a7e1073d8429191ba5a9ef500a.png");

/***/ }),

/***/ "./assets/images/pokemon/playerRight.png":
/*!***********************************************!*\
  !*** ./assets/images/pokemon/playerRight.png ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "9205bb91389883ce0c319c01c0eb141a.png");

/***/ }),

/***/ "./assets/images/pokemon/playerUp.png":
/*!********************************************!*\
  !*** ./assets/images/pokemon/playerUp.png ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a9c53af0596ff7bc89e22c0ad83a4a7d.png");

/***/ }),

/***/ "./assets/js/pokemon.js":
/*!******************************!*\
  !*** ./assets/js/pokemon.js ***!
  \******************************/
/*! exports provided: battle, animate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "battle", function() { return battle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animate", function() { return animate; });
/* harmony import */ var _images_pokemon_pelletTown_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/pokemon/pelletTown.png */ "./assets/images/pokemon/pelletTown.png");
/* harmony import */ var _images_pokemon_foreground_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/pokemon/foreground.png */ "./assets/images/pokemon/foreground.png");
/* harmony import */ var _images_pokemon_playerDown_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/pokemon/playerDown.png */ "./assets/images/pokemon/playerDown.png");
/* harmony import */ var _images_pokemon_playerUp_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/pokemon/playerUp.png */ "./assets/images/pokemon/playerUp.png");
/* harmony import */ var _images_pokemon_playerLeft_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/pokemon/playerLeft.png */ "./assets/images/pokemon/playerLeft.png");
/* harmony import */ var _images_pokemon_playerRight_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/pokemon/playerRight.png */ "./assets/images/pokemon/playerRight.png");
/* harmony import */ var _pokemon_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pokemon/data */ "./assets/js/pokemon/data.js");
/* harmony import */ var _pokemon_classes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pokemon/classes */ "./assets/js/pokemon/classes.js");
/* harmony import */ var _pokemon_battleZone__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pokemon/battleZone */ "./assets/js/pokemon/battleZone.js");
/* harmony import */ var _pokemon_battleScene__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pokemon/battleScene */ "./assets/js/pokemon/battleScene.js");
/* harmony import */ var _pokemon_audio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pokemon/audio */ "./assets/js/pokemon/audio.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }











var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = 1024;
canvas.height = 576;
var collisionsMap = [];
for (var i = 0; i < _pokemon_data__WEBPACK_IMPORTED_MODULE_6__["collision"].length; i += 70) {
  collisionsMap.push(_pokemon_data__WEBPACK_IMPORTED_MODULE_6__["collision"].slice(i, 70 + i));
}
var battleZonesMap = [];
for (var _i = 0; _i < _pokemon_battleZone__WEBPACK_IMPORTED_MODULE_8__["battleZone"].length; _i += 70) {
  battleZonesMap.push(_pokemon_battleZone__WEBPACK_IMPORTED_MODULE_8__["battleZone"].slice(_i, 70 + _i));
}
var boundaries = [];
var offset = {
  x: -735,
  y: -610
};
collisionsMap.forEach(function (row, i) {
  row.forEach(function (symbol, j) {
    if (symbol === 1025) boundaries.push(new _pokemon_classes__WEBPACK_IMPORTED_MODULE_7__["Boundary"]({
      position: {
        x: j * _pokemon_classes__WEBPACK_IMPORTED_MODULE_7__["Boundary"].width + offset.x,
        y: i * _pokemon_classes__WEBPACK_IMPORTED_MODULE_7__["Boundary"].height + offset.y
      }
    }));
  });
});
var battleZones = [];
battleZonesMap.forEach(function (row, i) {
  row.forEach(function (symbol, j) {
    if (symbol === 1025) battleZones.push(new _pokemon_classes__WEBPACK_IMPORTED_MODULE_7__["Boundary"]({
      position: {
        x: j * _pokemon_classes__WEBPACK_IMPORTED_MODULE_7__["Boundary"].width + offset.x,
        y: i * _pokemon_classes__WEBPACK_IMPORTED_MODULE_7__["Boundary"].height + offset.y
      }
    }));
  });
});
var image = new Image();
image.src = _images_pokemon_pelletTown_png__WEBPACK_IMPORTED_MODULE_0__["default"];
var playerDownImage = new Image();
playerDownImage.src = _images_pokemon_playerDown_png__WEBPACK_IMPORTED_MODULE_2__["default"];
var playerUpImage = new Image();
playerUpImage.src = _images_pokemon_playerUp_png__WEBPACK_IMPORTED_MODULE_3__["default"];
var playerLeftImage = new Image();
playerLeftImage.src = _images_pokemon_playerLeft_png__WEBPACK_IMPORTED_MODULE_4__["default"];
var playerRightImage = new Image();
playerRightImage.src = _images_pokemon_playerRight_png__WEBPACK_IMPORTED_MODULE_5__["default"];
var foreGround = new Image();
foreGround.src = _images_pokemon_foreground_png__WEBPACK_IMPORTED_MODULE_1__["default"];
var player = new _pokemon_classes__WEBPACK_IMPORTED_MODULE_7__["Sprite"]({
  position: {
    x: canvas.width / 2 - 192 / 4 / 2,
    y: canvas.height / 2 - 68 / 2
  },
  image: playerDownImage,
  frames: {
    max: 4,
    hold: 10
  },
  sprites: {
    up: playerUpImage,
    left: playerLeftImage,
    down: playerDownImage,
    right: playerRightImage
  }
});
var background = new _pokemon_classes__WEBPACK_IMPORTED_MODULE_7__["Sprite"]({
  position: {
    x: offset.x,
    y: offset.y
  },
  image: image
});
var foreground = new _pokemon_classes__WEBPACK_IMPORTED_MODULE_7__["Sprite"]({
  position: {
    x: offset.x,
    y: offset.y
  },
  image: foreGround
});
var keys = {
  w: {
    pressed: false
  },
  a: {
    pressed: false
  },
  s: {
    pressed: false
  },
  d: {
    pressed: false
  }
};
var testBoundary = new _pokemon_classes__WEBPACK_IMPORTED_MODULE_7__["Boundary"]({
  position: {
    x: 400,
    y: 400
  }
});
var movables = [background, foreground].concat(boundaries, battleZones);
function rectangularCollision(_ref) {
  var rectangle1 = _ref.rectangle1,
    rectangle2 = _ref.rectangle2;
  return rectangle1.position.x + rectangle1.width >= rectangle2.position.x && rectangle1.position.x <= rectangle2.position.x + rectangle2.width && rectangle1.position.y + rectangle1.height >= rectangle2.position.y && rectangle1.position.y <= rectangle2.position.y + rectangle2.height;
}
var battle = {
  initiated: false
};
function animate() {
  var animationId = requestAnimationFrame(animate);
  background.draw();
  boundaries.forEach(function (boundary) {
    boundary.draw();
  });
  battleZones.forEach(function (battleZone) {
    battleZone.draw();
  });
  player.draw();
  foreground.draw();
  var moving = true;
  player.animate = false;
  if (battle.initiated) return;
  if (keys.w.pressed || keys.a.pressed || keys.s.pressed || keys.d.pressed) {
    for (var _i2 = 0; _i2 < battleZones.length; _i2++) {
      var _battleZone = battleZones[_i2];
      var overlappingArea = (Math.min(player.position.x + player.width, _battleZone.position.x + _battleZone.width) - Math.max(player.position.x, _battleZone.position.x)) * (Math.min(player.position.y + player.height, _battleZone.position.y + _battleZone.height) - Math.max(player.position.y, _battleZone.position.y));
      if (rectangularCollision({
        rectangle1: player,
        rectangle2: _battleZone
      }) && overlappingArea > player.width * player.height / 2 && Math.random() < 0.01) {
        // deactivate current animation loop
        cancelAnimationFrame(animationId);
        _pokemon_audio__WEBPACK_IMPORTED_MODULE_10__["audio"].Map.stop();
        _pokemon_audio__WEBPACK_IMPORTED_MODULE_10__["audio"].InitBattle.play();
        _pokemon_audio__WEBPACK_IMPORTED_MODULE_10__["audio"].Battle.play();
        battle.initiated = true;
        gsap.to('#overlappingDiv', {
          opacity: 1,
          repeat: 3,
          yoyo: true,
          duration: 0.4,
          onComplete: function onComplete() {
            gsap.to('#overlappingDiv', {
              opacity: 1,
              duration: 0.4,
              onComplete: function onComplete() {
                // active a new animation loop
                Object(_pokemon_battleScene__WEBPACK_IMPORTED_MODULE_9__["initBattle"])();
                Object(_pokemon_battleScene__WEBPACK_IMPORTED_MODULE_9__["animateBattle"])();
                gsap.to('#overlappingDiv', {
                  opacity: 0,
                  duration: 0.4
                });
              }
            });
          }
        });
        break;
      }
    }
  }
  if (keys.w.pressed && lastKey === 'w') {
    player.animate = true;
    player.image = player.sprites.up;
    for (var _i3 = 0; _i3 < boundaries.length; _i3++) {
      var boundary = boundaries[_i3];
      if (rectangularCollision({
        rectangle1: player,
        rectangle2: _objectSpread(_objectSpread({}, boundary), {}, {
          position: {
            x: boundary.position.x,
            y: boundary.position.y + 3
          }
        })
      })) {
        moving = false;
        break;
      }
    }
    if (moving) movables.forEach(function (movable) {
      movable.position.y += 3;
    });
  } else if (keys.a.pressed && lastKey === 'a') {
    player.animate = true;
    player.image = player.sprites.left;
    for (var _i4 = 0; _i4 < boundaries.length; _i4++) {
      var _boundary = boundaries[_i4];
      if (rectangularCollision({
        rectangle1: player,
        rectangle2: _objectSpread(_objectSpread({}, _boundary), {}, {
          position: {
            x: _boundary.position.x + 3,
            y: _boundary.position.y
          }
        })
      })) {
        moving = false;
        break;
      }
    }
    if (moving) movables.forEach(function (movable) {
      movable.position.x += 3;
    });
  } else if (keys.s.pressed && lastKey === 's') {
    player.animate = true;
    player.image = player.sprites.down;
    for (var _i5 = 0; _i5 < boundaries.length; _i5++) {
      var _boundary2 = boundaries[_i5];
      if (rectangularCollision({
        rectangle1: player,
        rectangle2: _objectSpread(_objectSpread({}, _boundary2), {}, {
          position: {
            x: _boundary2.position.x,
            y: _boundary2.position.y - 3
          }
        })
      })) {
        moving = false;
        break;
      }
    }
    if (moving) movables.forEach(function (movable) {
      movable.position.y -= 3;
    });
  } else if (keys.d.pressed && lastKey === 'd') {
    player.animate = true;
    player.image = player.sprites.right;
    for (var _i6 = 0; _i6 < boundaries.length; _i6++) {
      var _boundary3 = boundaries[_i6];
      if (rectangularCollision({
        rectangle1: player,
        rectangle2: _objectSpread(_objectSpread({}, _boundary3), {}, {
          position: {
            x: _boundary3.position.x - 3,
            y: _boundary3.position.y
          }
        })
      })) {
        moving = false;
        break;
      }
    }
    if (moving) movables.forEach(function (movable) {
      movable.position.x -= 3;
    });
  }
}
animate();
var lastKey = '';
addEventListener('keydown', function (_ref2) {
  var key = _ref2.key;
  switch (key) {
    case 'w':
      keys.w.pressed = true;
      lastKey = 'w';
      break;
    case 'a':
      keys.a.pressed = true;
      lastKey = 'a';
      break;
    case 's':
      keys.s.pressed = true;
      lastKey = 's';
      break;
    case 'd':
      keys.d.pressed = true;
      lastKey = 'd';
      break;
  }
});
addEventListener('keyup', function (_ref3) {
  var key = _ref3.key;
  switch (key) {
    case 'w':
      keys.w.pressed = false;
      break;
    case 'a':
      keys.a.pressed = false;
      break;
    case 's':
      keys.s.pressed = false;
      break;
    case 'd':
      keys.d.pressed = false;
      break;
  }
});
var clicked = false;
addEventListener('click', function () {
  if (!clicked) {
    _pokemon_audio__WEBPACK_IMPORTED_MODULE_10__["audio"].Map.play();
    clicked = true;
  }
});

/***/ }),

/***/ "./assets/js/pokemon/attacks.js":
/*!**************************************!*\
  !*** ./assets/js/pokemon/attacks.js ***!
  \**************************************/
/*! exports provided: attacks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attacks", function() { return attacks; });
var attacks = {
  Tackle: {
    name: 'Tackle',
    damage: 10,
    type: 'Normal',
    color: 'black'
  },
  Fireball: {
    name: 'Fireball',
    damage: 25,
    type: 'Fire',
    color: 'red'
  }
};

/***/ }),

/***/ "./assets/js/pokemon/audio.js":
/*!************************************!*\
  !*** ./assets/js/pokemon/audio.js ***!
  \************************************/
/*! exports provided: audio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "audio", function() { return audio; });
/* harmony import */ var _audios_pokemon_map_wav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../audios/pokemon/map.wav */ "./assets/audios/pokemon/map.wav");
/* harmony import */ var _audios_pokemon_battle_mp3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../audios/pokemon/battle.mp3 */ "./assets/audios/pokemon/battle.mp3");
/* harmony import */ var _audios_pokemon_fireballHit_wav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../audios/pokemon/fireballHit.wav */ "./assets/audios/pokemon/fireballHit.wav");
/* harmony import */ var _audios_pokemon_initBattle_wav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../audios/pokemon/initBattle.wav */ "./assets/audios/pokemon/initBattle.wav");
/* harmony import */ var _audios_pokemon_initFireball_wav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../audios/pokemon/initFireball.wav */ "./assets/audios/pokemon/initFireball.wav");
/* harmony import */ var _audios_pokemon_tackleHit_wav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../audios/pokemon/tackleHit.wav */ "./assets/audios/pokemon/tackleHit.wav");
/* harmony import */ var _audios_pokemon_victory_wav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../audios/pokemon/victory.wav */ "./assets/audios/pokemon/victory.wav");







var audio = {
  Map: new Howl({
    src: _audios_pokemon_map_wav__WEBPACK_IMPORTED_MODULE_0__["default"],
    html5: true,
    volume: 0.1
  }),
  InitBattle: new Howl({
    src: _audios_pokemon_initBattle_wav__WEBPACK_IMPORTED_MODULE_3__["default"],
    html5: true,
    volume: 0.1
  }),
  Battle: new Howl({
    src: _audios_pokemon_battle_mp3__WEBPACK_IMPORTED_MODULE_1__["default"],
    html5: true,
    volume: 0.1
  }),
  TackleHit: new Howl({
    src: _audios_pokemon_tackleHit_wav__WEBPACK_IMPORTED_MODULE_5__["default"],
    html5: true,
    volume: 0.1
  }),
  InitFireball: new Howl({
    src: _audios_pokemon_initFireball_wav__WEBPACK_IMPORTED_MODULE_4__["default"],
    html5: true,
    volume: 0.1
  }),
  FireballHit: new Howl({
    src: _audios_pokemon_fireballHit_wav__WEBPACK_IMPORTED_MODULE_2__["default"],
    html5: true,
    volume: 0.1
  }),
  Victory: new Howl({
    src: _audios_pokemon_victory_wav__WEBPACK_IMPORTED_MODULE_6__["default"],
    html5: true,
    volume: 0.1
  })
};

/***/ }),

/***/ "./assets/js/pokemon/battleScene.js":
/*!******************************************!*\
  !*** ./assets/js/pokemon/battleScene.js ***!
  \******************************************/
/*! exports provided: initBattle, animateBattle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initBattle", function() { return initBattle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animateBattle", function() { return animateBattle; });
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes */ "./assets/js/pokemon/classes.js");
/* harmony import */ var _attacks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attacks */ "./assets/js/pokemon/attacks.js");
/* harmony import */ var _images_pokemon_battleBackground_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/pokemon/battleBackground.png */ "./assets/images/pokemon/battleBackground.png");
/* harmony import */ var _monsters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./monsters */ "./assets/js/pokemon/monsters.js");
/* harmony import */ var _pokemon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pokemon */ "./assets/js/pokemon.js");
/* harmony import */ var _audio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./audio */ "./assets/js/pokemon/audio.js");






var battleBackGroundImage = new Image();
battleBackGroundImage.src = _images_pokemon_battleBackground_png__WEBPACK_IMPORTED_MODULE_2__["default"];
var battleBG = new _classes__WEBPACK_IMPORTED_MODULE_0__["Sprite"]({
  position: {
    x: 0,
    y: 0
  },
  image: battleBackGroundImage
});
var draggle = new _classes__WEBPACK_IMPORTED_MODULE_0__["Monster"](_monsters__WEBPACK_IMPORTED_MODULE_3__["monster"].Draggle);
var emby = new _classes__WEBPACK_IMPORTED_MODULE_0__["Monster"](_monsters__WEBPACK_IMPORTED_MODULE_3__["monster"].Emby);
var renderedSprites = [draggle, emby];
var battleAnimationId;
var queue;
function initBattle() {
  document.querySelector('#userInterface').style.display = 'block';
  document.querySelector('#dialogueBox').style.display = 'none';
  document.querySelector('#enemyHealthBar').style.width = '100%';
  document.querySelector('#playerHealthBar').style.width = '100%';
  document.querySelector('#attackBox').replaceChildren();
  draggle = new _classes__WEBPACK_IMPORTED_MODULE_0__["Monster"](_monsters__WEBPACK_IMPORTED_MODULE_3__["monster"].Draggle);
  emby = new _classes__WEBPACK_IMPORTED_MODULE_0__["Monster"](_monsters__WEBPACK_IMPORTED_MODULE_3__["monster"].Emby);
  renderedSprites = [draggle, emby];
  queue = [];
  emby.attacks.forEach(function (attack) {
    var button = document.createElement('button');
    button.innerHTML = attack.name;
    document.querySelector('#attackBox').append(button);
  });

  // Our event listener for our buttons (attack)
  document.querySelectorAll('button').forEach(function (button) {
    button.addEventListener('click', function (e) {
      var selectedAttack = _attacks__WEBPACK_IMPORTED_MODULE_1__["attacks"][e.currentTarget.innerHTML];
      emby.attack({
        attack: selectedAttack,
        recipient: draggle,
        renderedSprites: renderedSprites
      });
      if (draggle.health <= 0) {
        queue.push(function () {
          draggle.faint();
        });
        queue.push(function () {
          // fade back to black
          gsap.to('#overlappingDiv', {
            opacity: 1,
            onComplete: function onComplete() {
              cancelAnimationFrame(battleAnimationId);
              Object(_pokemon__WEBPACK_IMPORTED_MODULE_4__["animate"])();
              document.querySelector('#userInterface').style.display = 'none';
              gsap.to('#overlappingDiv', {
                opacity: 0
              });
              _pokemon__WEBPACK_IMPORTED_MODULE_4__["battle"].initiated = false;
              _audio__WEBPACK_IMPORTED_MODULE_5__["audio"].Map.play();
            }
          });
        });
      }

      // draggle or enemy attack right here
      var randomAttack = draggle.attacks[Math.floor(Math.random() * draggle.attacks.length)];
      queue.push(function () {
        draggle.attack({
          attack: randomAttack,
          recipient: emby,
          renderedSprites: renderedSprites
        });
        if (emby.health <= 0) {
          queue.push(function () {
            emby.faint();
          });
          queue.push(function () {
            // fade back to black
            gsap.to('#overlappingDiv', {
              opacity: 1,
              onComplete: function onComplete() {
                cancelAnimationFrame(battleAnimationId);
                Object(_pokemon__WEBPACK_IMPORTED_MODULE_4__["animate"])();
                document.querySelector('#userInterface').style.display = 'none';
                gsap.to('#overlappingDiv', {
                  opacity: 0
                });
                _pokemon__WEBPACK_IMPORTED_MODULE_4__["battle"].initiated = false;
                _audio__WEBPACK_IMPORTED_MODULE_5__["audio"].Map.play();
              }
            });
          });
        }
      });
    });
    button.addEventListener('mouseenter', function (e) {
      var selectedAttack = _attacks__WEBPACK_IMPORTED_MODULE_1__["attacks"][e.currentTarget.innerHTML];
      document.querySelector('#attackType').innerHTML = selectedAttack.type;
      document.querySelector('#attackType').style.color = selectedAttack.color;
    });
  });
}
function animateBattle() {
  battleAnimationId = requestAnimationFrame(animateBattle);
  battleBG.draw();
  renderedSprites.forEach(function (sprite) {
    sprite.draw();
  });
}
document.querySelector('#dialogueBox').addEventListener('click', function (e) {
  if (queue.length > 0) {
    queue[0]();
    queue.shift();
  } else e.currentTarget.style.display = 'none';
});

/***/ }),

/***/ "./assets/js/pokemon/battleZone.js":
/*!*****************************************!*\
  !*** ./assets/js/pokemon/battleZone.js ***!
  \*****************************************/
/*! exports provided: battleZone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "battleZone", function() { return battleZone; });
var battleZone = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

/***/ }),

/***/ "./assets/js/pokemon/classes.js":
/*!**************************************!*\
  !*** ./assets/js/pokemon/classes.js ***!
  \**************************************/
/*! exports provided: Sprite, Monster, Boundary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sprite", function() { return Sprite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Monster", function() { return Monster; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Boundary", function() { return Boundary; });
/* harmony import */ var _images_pokemon_fireball_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../images/pokemon/fireball.png */ "./assets/images/pokemon/fireball.png");
/* harmony import */ var _audio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./audio */ "./assets/js/pokemon/audio.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
var Sprite = /*#__PURE__*/function () {
  function Sprite(_ref) {
    var _this = this;
    var position = _ref.position,
      image = _ref.image,
      _ref$frames = _ref.frames,
      frames = _ref$frames === void 0 ? {
        max: 1,
        hold: 10
      } : _ref$frames,
      sprites = _ref.sprites,
      _ref$animate = _ref.animate,
      animate = _ref$animate === void 0 ? false : _ref$animate,
      _ref$rotation = _ref.rotation,
      rotation = _ref$rotation === void 0 ? 0 : _ref$rotation;
    _classCallCheck(this, Sprite);
    this.position = position;
    this.image = new Image();
    this.frames = _objectSpread(_objectSpread({}, frames), {}, {
      val: 0,
      elapsed: 0
    });
    this.image.src = image.src;
    this.image.onload = function () {
      _this.width = _this.image.width / _this.frames.max;
      _this.height = _this.image.height;
    };
    this.animate = animate;
    this.sprites = sprites;
    this.opacity = 1;
    this.rotation = rotation;
  }
  _createClass(Sprite, [{
    key: "draw",
    value: function draw() {
      c.save();
      c.translate(this.position.x + this.width / 2, this.position.y + this.height / 2);
      c.rotate(this.rotation);
      c.globalAlpha = this.opacity;
      c.translate(-(this.position.x + this.width / 2), -(this.position.y + this.height / 2));
      c.drawImage(this.image, this.frames.val * this.width, 0, this.image.width / this.frames.max, this.image.height, this.position.x, this.position.y, this.image.width / this.frames.max, this.image.height);
      c.restore();
      if (!this.animate) return;
      if (this.frames.max > 1) {
        this.frames.elapsed++;
      }
      if (this.frames.elapsed % this.frames.hold === 0) {
        if (this.frames.val < this.frames.max - 1) this.frames.val++;else this.frames.val = 0;
      }
    }
  }]);
  return Sprite;
}();
var Monster = /*#__PURE__*/function (_Sprite) {
  _inherits(Monster, _Sprite);
  var _super = _createSuper(Monster);
  function Monster(_ref2) {
    var _this2;
    var position = _ref2.position,
      image = _ref2.image,
      _ref2$frames = _ref2.frames,
      frames = _ref2$frames === void 0 ? {
        max: 1,
        hold: 10
      } : _ref2$frames,
      sprites = _ref2.sprites,
      _ref2$animate = _ref2.animate,
      animate = _ref2$animate === void 0 ? false : _ref2$animate,
      _ref2$rotation = _ref2.rotation,
      rotation = _ref2$rotation === void 0 ? 0 : _ref2$rotation,
      _ref2$isEnemy = _ref2.isEnemy,
      isEnemy = _ref2$isEnemy === void 0 ? false : _ref2$isEnemy,
      name = _ref2.name,
      attacks = _ref2.attacks;
    _classCallCheck(this, Monster);
    _this2 = _super.call(this, {
      position: position,
      image: image,
      frames: frames,
      sprites: sprites,
      animate: animate,
      rotation: rotation
    });
    _this2.health = 100;
    _this2.isEnemy = isEnemy;
    _this2.name = name;
    _this2.attacks = attacks;
    return _this2;
  }
  _createClass(Monster, [{
    key: "faint",
    value: function faint() {
      var dialogue = document.querySelector('#dialogueBox');
      dialogue.innerHTML = this.name + ' fainted!';
      gsap.to(this.position, {
        y: this.position.y + 20
      });
      gsap.to(this, {
        opacity: 0
      });
      _audio__WEBPACK_IMPORTED_MODULE_1__["audio"].Battle.stop();
      _audio__WEBPACK_IMPORTED_MODULE_1__["audio"].Victory.play();
    }
  }, {
    key: "attack",
    value: function attack(_ref3) {
      var _attack = _ref3.attack,
        recipient = _ref3.recipient,
        renderedSprites = _ref3.renderedSprites;
      var dialogue = document.querySelector('#dialogueBox');
      dialogue.style.display = 'block';
      dialogue.innerHTML = this.name + ' used ' + _attack.name;
      var healthBar = '#enemyHealthBar';
      if (this.isEnemy) healthBar = '#playerHealthBar';
      var rotation = 1;
      if (this.isEnemy) rotation = -2.2;
      recipient.health -= _attack.damage;
      switch (_attack.name) {
        case 'Tackle':
          var tl = gsap.timeline();
          var movementDistance = 20;
          if (this.isEnemy) movementDistance = -20;
          tl.to(this.position, {
            x: this.position.x - movementDistance
          }).to(this.position, {
            x: this.position.x + movementDistance * 2,
            duration: 0.1,
            onComplete: function onComplete() {
              // Enemy actually gets hit
              _audio__WEBPACK_IMPORTED_MODULE_1__["audio"].TackleHit.play();
              gsap.to(healthBar, {
                width: recipient.health + '%'
              });
              gsap.to(recipient.position, {
                x: recipient.position.x + 10,
                yoyo: true,
                repeat: 5,
                duration: 0.08
              });
              gsap.to(recipient, {
                opacity: 0,
                yoyo: true,
                repeat: 5,
                duration: 0.08
              });
            }
          }).to(this.position, {
            x: this.position.x
          });
          break;
        case 'Fireball':
          _audio__WEBPACK_IMPORTED_MODULE_1__["audio"].InitFireball.play();
          var fireballImage = new Image();
          fireballImage.src = _images_pokemon_fireball_png__WEBPACK_IMPORTED_MODULE_0__["default"];
          var fireball = new Sprite({
            position: {
              x: this.position.x,
              y: this.position.y
            },
            image: fireballImage,
            frames: {
              max: 4,
              hold: 10
            },
            animate: true,
            rotation: rotation
          });
          renderedSprites.splice(1, 0, fireball);
          gsap.to(fireball.position, {
            x: recipient.position.x,
            y: recipient.position.y,
            onComplete: function onComplete() {
              // Enemy actually gets hit
              _audio__WEBPACK_IMPORTED_MODULE_1__["audio"].FireballHit.play();
              gsap.to(healthBar, {
                width: recipient.health + '%'
              });
              gsap.to(recipient.position, {
                x: recipient.position.x + 10,
                yoyo: true,
                repeat: 5,
                duration: 0.08
              });
              gsap.to(recipient, {
                opacity: 0,
                yoyo: true,
                repeat: 5,
                duration: 0.08
              });
              renderedSprites.splice(1, 1);
            }
          });
          break;
      }
    }
  }]);
  return Monster;
}(Sprite);
var Boundary = /*#__PURE__*/function () {
  function Boundary(_ref4) {
    var position = _ref4.position;
    _classCallCheck(this, Boundary);
    this.position = position;
    this.width = 48;
    this.height = 48;
  }
  _createClass(Boundary, [{
    key: "draw",
    value: function draw() {
      c.fillStyle = 'rgba(255,0,0,0.0)';
      c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
  }]);
  return Boundary;
}();
_defineProperty(Boundary, "width", 48);
_defineProperty(Boundary, "height", 48);

/***/ }),

/***/ "./assets/js/pokemon/data.js":
/*!***********************************!*\
  !*** ./assets/js/pokemon/data.js ***!
  \***********************************/
/*! exports provided: collision */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collision", function() { return collision; });
var collision = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 1025, 1025, 0, 1025, 0, 0, 0, 0, 0, 0, 1025, 0, 1025, 1025, 0, 0, 1025, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 1025, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 1025, 1025, 1025, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 1025, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 0, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 1025, 0, 0, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 1025, 1025, 0, 0, 0, 1025, 1025, 1025, 0, 1025, 1025, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 1025, 1025, 1025, 0, 0, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 1025, 0, 0, 0, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 0, 0, 0, 0, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 0, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 0, 0, 0, 1025, 1025, 1025, 1025, 1025, 0, 1025, 1025, 1025, 0, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 1025, 0, 0, 0, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 1025, 0, 1025, 1025, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

/***/ }),

/***/ "./assets/js/pokemon/monsters.js":
/*!***************************************!*\
  !*** ./assets/js/pokemon/monsters.js ***!
  \***************************************/
/*! exports provided: monster */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monster", function() { return monster; });
/* harmony import */ var _images_pokemon_embySprite_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../images/pokemon/embySprite.png */ "./assets/images/pokemon/embySprite.png");
/* harmony import */ var _images_pokemon_draggleSprite_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/pokemon/draggleSprite.png */ "./assets/images/pokemon/draggleSprite.png");
/* harmony import */ var _attacks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attacks */ "./assets/js/pokemon/attacks.js");



var embyImage = new Image();
embyImage.src = _images_pokemon_embySprite_png__WEBPACK_IMPORTED_MODULE_0__["default"];
var draggleImage = new Image();
draggleImage.src = _images_pokemon_draggleSprite_png__WEBPACK_IMPORTED_MODULE_1__["default"];
var monster = {
  Emby: {
    position: {
      x: 280,
      y: 325
    },
    image: {
      src: _images_pokemon_embySprite_png__WEBPACK_IMPORTED_MODULE_0__["default"]
    },
    frames: {
      max: 4,
      hold: 30
    },
    animate: true,
    name: 'Emby',
    attacks: [_attacks__WEBPACK_IMPORTED_MODULE_2__["attacks"].Tackle, _attacks__WEBPACK_IMPORTED_MODULE_2__["attacks"].Fireball]
  },
  Draggle: {
    position: {
      x: 800,
      y: 100
    },
    image: {
      src: _images_pokemon_draggleSprite_png__WEBPACK_IMPORTED_MODULE_1__["default"]
    },
    frames: {
      max: 4,
      hold: 30
    },
    animate: true,
    isEnemy: true,
    name: 'Draggle',
    attacks: [_attacks__WEBPACK_IMPORTED_MODULE_2__["attacks"].Tackle, _attacks__WEBPACK_IMPORTED_MODULE_2__["attacks"].Fireball]
  }
};

/***/ })

/******/ });
//# sourceMappingURL=pokemon.bundle.js.map