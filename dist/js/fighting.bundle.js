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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/fighting.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/images/fighting/background.png":
/*!***********************************************!*\
  !*** ./assets/images/fighting/background.png ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "3ed950731455d7715e8911da45adf7b1.png");

/***/ }),

/***/ "./assets/images/fighting/kenji/Attack1.png":
/*!**************************************************!*\
  !*** ./assets/images/fighting/kenji/Attack1.png ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "5bc009632f2c0fd484795505cd8ee044.png");

/***/ }),

/***/ "./assets/images/fighting/kenji/Death.png":
/*!************************************************!*\
  !*** ./assets/images/fighting/kenji/Death.png ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "2b3515119b862cc76655fb09b3a24fc5.png");

/***/ }),

/***/ "./assets/images/fighting/kenji/Fall.png":
/*!***********************************************!*\
  !*** ./assets/images/fighting/kenji/Fall.png ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "13699aebe5a598ffdcdd5d6af2d9f164.png");

/***/ }),

/***/ "./assets/images/fighting/kenji/Idle.png":
/*!***********************************************!*\
  !*** ./assets/images/fighting/kenji/Idle.png ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "5457470fa0650c48a80b9f5e564565a6.png");

/***/ }),

/***/ "./assets/images/fighting/kenji/Jump.png":
/*!***********************************************!*\
  !*** ./assets/images/fighting/kenji/Jump.png ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cff33b1ab0b6d8e0d1f5970e8399a4ee.png");

/***/ }),

/***/ "./assets/images/fighting/kenji/Run.png":
/*!**********************************************!*\
  !*** ./assets/images/fighting/kenji/Run.png ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "066a893541826d62751fa508a99b1e03.png");

/***/ }),

/***/ "./assets/images/fighting/kenji/Take hit.png":
/*!***************************************************!*\
  !*** ./assets/images/fighting/kenji/Take hit.png ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "e981349119e47c319ba31c39b7119e6a.png");

/***/ }),

/***/ "./assets/images/fighting/samuraiMack/Attack1.png":
/*!********************************************************!*\
  !*** ./assets/images/fighting/samuraiMack/Attack1.png ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "2d84d94a42242412871d6c1b4be3faa8.png");

/***/ }),

/***/ "./assets/images/fighting/samuraiMack/Death.png":
/*!******************************************************!*\
  !*** ./assets/images/fighting/samuraiMack/Death.png ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "712077513795d232f701ff7c71b36c11.png");

/***/ }),

/***/ "./assets/images/fighting/samuraiMack/Fall.png":
/*!*****************************************************!*\
  !*** ./assets/images/fighting/samuraiMack/Fall.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b446a48eb33ce56b4bc73c3b498831b4.png");

/***/ }),

/***/ "./assets/images/fighting/samuraiMack/Idle.png":
/*!*****************************************************!*\
  !*** ./assets/images/fighting/samuraiMack/Idle.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "6dca1e696c1426e533e74ed653d2a7c6.png");

/***/ }),

/***/ "./assets/images/fighting/samuraiMack/Jump.png":
/*!*****************************************************!*\
  !*** ./assets/images/fighting/samuraiMack/Jump.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "137ef1108ec1c7fe58ba20e129b27770.png");

/***/ }),

/***/ "./assets/images/fighting/samuraiMack/Run.png":
/*!****************************************************!*\
  !*** ./assets/images/fighting/samuraiMack/Run.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b9dbc6e6bb8693be90146422103709af.png");

/***/ }),

/***/ "./assets/images/fighting/samuraiMack/Take Hit - white silhouette.png":
/*!****************************************************************************!*\
  !*** ./assets/images/fighting/samuraiMack/Take Hit - white silhouette.png ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "e1e2d595ddc8e71307903e1574e5ab55.png");

/***/ }),

/***/ "./assets/images/fighting/shop.png":
/*!*****************************************!*\
  !*** ./assets/images/fighting/shop.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c609dd4aae9185dfa3d1502e5a67af9b.png");

/***/ }),

/***/ "./assets/js/fighting.js":
/*!*******************************!*\
  !*** ./assets/js/fighting.js ***!
  \*******************************/
/*! exports provided: player, enemy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "player", function() { return player; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enemy", function() { return enemy; });
/* harmony import */ var _fighting_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fighting/classes */ "./assets/js/fighting/classes.js");
/* harmony import */ var _images_fighting_background_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/fighting/background.png */ "./assets/images/fighting/background.png");
/* harmony import */ var _images_fighting_shop_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/fighting/shop.png */ "./assets/images/fighting/shop.png");
/* harmony import */ var _images_fighting_samuraiMack_Attack1_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/fighting/samuraiMack/Attack1.png */ "./assets/images/fighting/samuraiMack/Attack1.png");
/* harmony import */ var _images_fighting_samuraiMack_Death_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/fighting/samuraiMack/Death.png */ "./assets/images/fighting/samuraiMack/Death.png");
/* harmony import */ var _images_fighting_samuraiMack_Fall_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/fighting/samuraiMack/Fall.png */ "./assets/images/fighting/samuraiMack/Fall.png");
/* harmony import */ var _images_fighting_samuraiMack_Idle_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/fighting/samuraiMack/Idle.png */ "./assets/images/fighting/samuraiMack/Idle.png");
/* harmony import */ var _images_fighting_samuraiMack_Jump_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/fighting/samuraiMack/Jump.png */ "./assets/images/fighting/samuraiMack/Jump.png");
/* harmony import */ var _images_fighting_samuraiMack_Run_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/fighting/samuraiMack/Run.png */ "./assets/images/fighting/samuraiMack/Run.png");
/* harmony import */ var _images_fighting_samuraiMack_Take_Hit_white_silhouette_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/fighting/samuraiMack/Take Hit - white silhouette.png */ "./assets/images/fighting/samuraiMack/Take Hit - white silhouette.png");
/* harmony import */ var _images_fighting_kenji_Attack1_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../images/fighting/kenji/Attack1.png */ "./assets/images/fighting/kenji/Attack1.png");
/* harmony import */ var _images_fighting_kenji_Death_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../images/fighting/kenji/Death.png */ "./assets/images/fighting/kenji/Death.png");
/* harmony import */ var _images_fighting_kenji_Fall_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../images/fighting/kenji/Fall.png */ "./assets/images/fighting/kenji/Fall.png");
/* harmony import */ var _images_fighting_kenji_Idle_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../images/fighting/kenji/Idle.png */ "./assets/images/fighting/kenji/Idle.png");
/* harmony import */ var _images_fighting_kenji_Jump_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../images/fighting/kenji/Jump.png */ "./assets/images/fighting/kenji/Jump.png");
/* harmony import */ var _images_fighting_kenji_Run_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../images/fighting/kenji/Run.png */ "./assets/images/fighting/kenji/Run.png");
/* harmony import */ var _images_fighting_kenji_Take_hit_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../images/fighting/kenji/Take hit.png */ "./assets/images/fighting/kenji/Take hit.png");
/* harmony import */ var _fighting_utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./fighting/utils */ "./assets/js/fighting/utils.js");
var _Fighter, _Fighter2;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


















var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = 1024;
canvas.height = 576;
var background = new _fighting_classes__WEBPACK_IMPORTED_MODULE_0__["Sprite"]({
  position: {
    x: 0,
    y: 0
  },
  imageSrc: _images_fighting_background_png__WEBPACK_IMPORTED_MODULE_1__["default"]
});
var shop = new _fighting_classes__WEBPACK_IMPORTED_MODULE_0__["Sprite"]({
  position: {
    x: 600,
    y: 128
  },
  imageSrc: _images_fighting_shop_png__WEBPACK_IMPORTED_MODULE_2__["default"],
  scale: 2.75,
  frames: {
    max: 6
  }
});
var player = new _fighting_classes__WEBPACK_IMPORTED_MODULE_0__["Fighter"]((_Fighter = {
  position: {
    x: 0,
    y: 0
  },
  velocity: {
    x: 0,
    y: 0
  },
  offset: {
    x: 0,
    y: 0
  },
  imageSrc: _images_fighting_samuraiMack_Idle_png__WEBPACK_IMPORTED_MODULE_6__["default"],
  frames: {
    max: 8
  },
  scale: 2.5
}, _defineProperty(_Fighter, "offset", {
  x: 215,
  y: 157
}), _defineProperty(_Fighter, "sprites", {
  idle: {
    imageSrc: _images_fighting_samuraiMack_Idle_png__WEBPACK_IMPORTED_MODULE_6__["default"],
    frames: {
      max: 8
    }
  },
  run: {
    imageSrc: _images_fighting_samuraiMack_Run_png__WEBPACK_IMPORTED_MODULE_8__["default"],
    frames: {
      max: 8
    }
  },
  jump: {
    imageSrc: _images_fighting_samuraiMack_Jump_png__WEBPACK_IMPORTED_MODULE_7__["default"],
    frames: {
      max: 2
    }
  },
  fall: {
    imageSrc: _images_fighting_samuraiMack_Fall_png__WEBPACK_IMPORTED_MODULE_5__["default"],
    frames: {
      max: 2
    }
  },
  attack1: {
    imageSrc: _images_fighting_samuraiMack_Attack1_png__WEBPACK_IMPORTED_MODULE_3__["default"],
    frames: {
      max: 6
    }
  },
  takeHit: {
    imageSrc: _images_fighting_samuraiMack_Take_Hit_white_silhouette_png__WEBPACK_IMPORTED_MODULE_9__["default"],
    frames: {
      max: 4
    }
  },
  death: {
    imageSrc: _images_fighting_samuraiMack_Death_png__WEBPACK_IMPORTED_MODULE_4__["default"],
    frames: {
      max: 6
    }
  }
}), _defineProperty(_Fighter, "attackBox", {
  offset: {
    x: 100,
    y: 50
  },
  width: 160,
  height: 50
}), _Fighter));
var enemy = new _fighting_classes__WEBPACK_IMPORTED_MODULE_0__["Fighter"]((_Fighter2 = {
  position: {
    x: 400,
    y: 100
  },
  velocity: {
    x: 0,
    y: 0
  },
  color: 'blue',
  offset: {
    x: -50,
    y: 0
  },
  imageSrc: _images_fighting_kenji_Idle_png__WEBPACK_IMPORTED_MODULE_13__["default"],
  frames: {
    max: 4
  },
  scale: 2.5
}, _defineProperty(_Fighter2, "offset", {
  x: 215,
  y: 167
}), _defineProperty(_Fighter2, "sprites", {
  idle: {
    imageSrc: _images_fighting_kenji_Idle_png__WEBPACK_IMPORTED_MODULE_13__["default"],
    frames: {
      max: 4
    }
  },
  run: {
    imageSrc: _images_fighting_kenji_Run_png__WEBPACK_IMPORTED_MODULE_15__["default"],
    frames: {
      max: 8
    }
  },
  jump: {
    imageSrc: _images_fighting_kenji_Jump_png__WEBPACK_IMPORTED_MODULE_14__["default"],
    frames: {
      max: 2
    }
  },
  fall: {
    imageSrc: _images_fighting_kenji_Fall_png__WEBPACK_IMPORTED_MODULE_12__["default"],
    frames: {
      max: 2
    }
  },
  attack1: {
    imageSrc: _images_fighting_kenji_Attack1_png__WEBPACK_IMPORTED_MODULE_10__["default"],
    frames: {
      max: 4
    }
  },
  takeHit: {
    imageSrc: _images_fighting_kenji_Take_hit_png__WEBPACK_IMPORTED_MODULE_16__["default"],
    frames: {
      max: 3
    }
  },
  death: {
    imageSrc: _images_fighting_kenji_Death_png__WEBPACK_IMPORTED_MODULE_11__["default"],
    frames: {
      max: 7
    }
  }
}), _defineProperty(_Fighter2, "attackBox", {
  offset: {
    x: -170,
    y: 50
  },
  width: 170,
  height: 50
}), _Fighter2));
var keys = {
  a: {
    pressed: false
  },
  d: {
    pressed: false
  },
  ArrowRight: {
    pressed: false
  },
  ArrowLeft: {
    pressed: false
  }
};
Object(_fighting_utils__WEBPACK_IMPORTED_MODULE_17__["decreaseTimer"])();
function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = 'black';
  c.fillRect(0, 0, canvas.width, canvas.height);
  background.update();
  shop.update();
  c.fillStyle = 'rgba(255,255,255,0.15)';
  c.fillRect(0, 0, canvas.width, canvas.height);
  player.update();
  enemy.update();
  player.velocity.x = 0;
  enemy.velocity.x = 0;

  // player movement
  if (keys.a.pressed && player.lastKey === 'a') {
    player.velocity.x = -5;
    player.switchSprites('run');
  } else if (keys.d.pressed && player.lastKey === 'd') {
    player.velocity.x = 5;
    player.switchSprites('run');
  } else {
    player.switchSprites('idle');
  }
  if (player.velocity.y < 0) {
    player.switchSprites('jump');
  } else if (player.velocity.y > 0) {
    player.switchSprites('fall');
  }

  // enemy movement
  if (keys.ArrowRight.pressed && enemy.lastKey === 'ArrowRight') {
    enemy.velocity.x = 5;
    enemy.switchSprites('run');
  } else if (keys.ArrowLeft.pressed && enemy.lastKey === 'ArrowLeft') {
    enemy.velocity.x = -5;
    enemy.switchSprites('run');
  } else {
    enemy.switchSprites('idle');
  }
  if (enemy.velocity.y < 0) {
    enemy.switchSprites('jump');
  } else if (enemy.velocity.y > 0) {
    enemy.switchSprites('fall');
  }

  // detect for collision & enemy gets hit
  if (Object(_fighting_utils__WEBPACK_IMPORTED_MODULE_17__["rectangularCollision"])({
    rectangle1: player,
    rectangle2: enemy
  }) && player.isAttacking && player.frames.val === 4) {
    enemy.takeHit();
    player.isAttacking = false;
    gsap.to('#enemyHealth', {
      width: enemy.health + '%'
    });
  }

  // if player misses
  if (player.isAttacking && player.frames.val === 4) {
    player.isAttacking = false;
  }
  if (Object(_fighting_utils__WEBPACK_IMPORTED_MODULE_17__["rectangularCollision"])({
    rectangle1: enemy,
    rectangle2: player
  }) && enemy.isAttacking && enemy.frames.val === 2) {
    player.takeHit();
    enemy.isAttacking = false;
    gsap.to('#playerHealth', {
      width: player.health + '%'
    });
  }

  // if enemy misses
  if (enemy.isAttacking && enemy.frames.val === 2) {
    enemy.isAttacking = false;
  }

  // end game base on health
  if (enemy.health <= 0 || player.health <= 0) {
    Object(_fighting_utils__WEBPACK_IMPORTED_MODULE_17__["determineWinner"])({
      player: player,
      enemy: enemy,
      timerId: _fighting_utils__WEBPACK_IMPORTED_MODULE_17__["timerId"]
    });
  }
}
animate();
addEventListener('keydown', function (_ref) {
  var key = _ref.key;
  if (!player.dead) {
    switch (key) {
      case 'd':
        keys.d.pressed = true;
        player.lastKey = 'd';
        break;
      case 'a':
        keys.a.pressed = true;
        player.lastKey = 'a';
        break;
      case 'w':
        player.velocity.y -= 10;
        break;
      case ' ':
        player.attack();
        break;
    }
  }
  if (!enemy.dead) {
    switch (key) {
      case 'ArrowRight':
        keys.ArrowRight.pressed = true;
        enemy.lastKey = 'ArrowRight';
        break;
      case 'ArrowLeft':
        keys.ArrowLeft.pressed = true;
        enemy.lastKey = 'ArrowLeft';
        break;
      case 'ArrowUp':
        enemy.velocity.y -= 10;
        break;
      case 'ArrowDown':
        enemy.attack();
        break;
    }
  }
});
addEventListener('keyup', function (_ref2) {
  var key = _ref2.key;
  switch (key) {
    case 'd':
      keys.d.pressed = false;
      break;
    case 'a':
      keys.a.pressed = false;
      break;
  }

  // enemy keys
  switch (key) {
    case 'ArrowRight':
      keys.ArrowRight.pressed = false;
      break;
    case 'ArrowLeft':
      keys.ArrowLeft.pressed = false;
      break;
  }
});

/***/ }),

/***/ "./assets/js/fighting/classes.js":
/*!***************************************!*\
  !*** ./assets/js/fighting/classes.js ***!
  \***************************************/
/*! exports provided: Sprite, Fighter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sprite", function() { return Sprite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fighter", function() { return Fighter; });
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
var gravity = 0.2;
var Sprite = /*#__PURE__*/function () {
  function Sprite(_ref) {
    var position = _ref.position,
      velocity = _ref.velocity,
      imageSrc = _ref.imageSrc,
      _ref$scale = _ref.scale,
      scale = _ref$scale === void 0 ? 1 : _ref$scale,
      _ref$frames = _ref.frames,
      frames = _ref$frames === void 0 ? {
        max: 1
      } : _ref$frames,
      _ref$offset = _ref.offset,
      offset = _ref$offset === void 0 ? {
        x: 0,
        y: 0
      } : _ref$offset;
    _classCallCheck(this, Sprite);
    this.position = position;
    this.velocity = velocity;
    this.height = 150;
    this.width = 50;
    this.image = new Image();
    this.image.src = imageSrc;
    this.scale = scale;
    this.frames = _objectSpread(_objectSpread({}, frames), {}, {
      elapsed: 0,
      val: 0,
      hold: 5
    });
    this.offset = offset;
  }
  _createClass(Sprite, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.frames.val * (this.image.width / this.frames.max), 0, this.image.width / this.frames.max, this.image.height, this.position.x - this.offset.x, this.position.y - this.offset.y, this.image.width / this.frames.max * this.scale, this.image.height * this.scale);
    }
  }, {
    key: "animateFrames",
    value: function animateFrames() {
      if (this.frames.max > 1) {
        this.frames.elapsed++;
      }
      if (this.frames.elapsed % this.frames.hold === 0) {
        if (this.frames.val < this.frames.max - 1) this.frames.val++;else this.frames.val = 0;
      }
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.animateFrames();
    }
  }]);
  return Sprite;
}();
var Fighter = /*#__PURE__*/function (_Sprite) {
  _inherits(Fighter, _Sprite);
  var _super = _createSuper(Fighter);
  function Fighter(_ref2) {
    var _this;
    var position = _ref2.position,
      velocity = _ref2.velocity,
      _ref2$color = _ref2.color,
      color = _ref2$color === void 0 ? 'red' : _ref2$color,
      imageSrc = _ref2.imageSrc,
      _ref2$scale = _ref2.scale,
      scale = _ref2$scale === void 0 ? 1 : _ref2$scale,
      _ref2$frames = _ref2.frames,
      frames = _ref2$frames === void 0 ? {
        max: 1
      } : _ref2$frames,
      _ref2$offset = _ref2.offset,
      offset = _ref2$offset === void 0 ? {
        x: 0,
        y: 0
      } : _ref2$offset,
      sprites = _ref2.sprites,
      _ref2$attackBox = _ref2.attackBox,
      attackBox = _ref2$attackBox === void 0 ? {
        offset: {},
        width: undefined,
        height: undefined
      } : _ref2$attackBox;
    _classCallCheck(this, Fighter);
    _this = _super.call(this, {
      position: position,
      imageSrc: imageSrc,
      scale: scale,
      offset: offset
    });
    _this.velocity = velocity;
    _this.height = 150;
    _this.width = 50;
    _this.lastKey;
    _this.attackBox = {
      position: {
        x: _this.position.x,
        y: _this.position.y
      },
      offset: attackBox.offset,
      width: attackBox.width,
      height: attackBox.height
    };
    _this.color = color;
    _this.isAttacking;
    _this.health = 100;
    _this.frames = _objectSpread(_objectSpread({}, frames), {}, {
      elapsed: 0,
      val: 0,
      hold: 10
    });
    _this.sprites = sprites;
    _this.dead = false;
    for (var sprite in sprites) {
      sprites[sprite].image = new Image();
      sprites[sprite].image.src = sprites[sprite].imageSrc;
    }
    return _this;
  }
  _createClass(Fighter, [{
    key: "update",
    value: function update() {
      this.draw();
      if (!this.dead) this.animateFrames();

      // attack boxes
      this.attackBox.position.x = this.position.x + this.attackBox.offset.x;
      this.attackBox.position.y = this.position.y + this.attackBox.offset.y;

      // draw the attack box
      // c.fillRect(
      //   this.attackBox.position.x,
      //   this.attackBox.position.y,
      //   this.attackBox.width,
      //   this.attackBox.height
      // )

      this.position.y += this.velocity.y;
      this.position.x += this.velocity.x;
      if (this.position.y + this.height + this.velocity.y >= canvas.height - 96) {
        this.velocity.y = 0;
        this.position.y = 330;
      } else {
        this.velocity.y += gravity;
      }
    }
  }, {
    key: "attack",
    value: function attack() {
      this.switchSprites('attack1');
      this.isAttacking = true;
    }
  }, {
    key: "takeHit",
    value: function takeHit() {
      this.health -= 20;
      if (this.health <= 0) {
        this.switchSprites('death');
      } else {
        this.switchSprites('takeHit');
      }
    }
  }, {
    key: "switchSprites",
    value: function switchSprites(sprite) {
      if (this.image === this.sprites.death.image) {
        if (this.frames.val === this.sprites.death.frames.max - 1) this.dead = true;
        return;
      }

      // overriding all other animations with the attack animation
      if (this.image === this.sprites.attack1.image && this.frames.val < this.sprites.attack1.frames.max - 1) return;

      // overide when fighter gets hit
      if (this.image === this.sprites.takeHit.image && this.frames.val < this.sprites.takeHit.frames.max - 1) return;
      switch (sprite) {
        case 'idle':
          if (this.image !== this.sprites.idle.image) {
            this.image = this.sprites.idle.image;
            this.frames.max = this.sprites.idle.frames.max;
            this.frames.val = 0;
          }
          break;
        case 'run':
          if (this.image !== this.sprites.run.image) {
            this.image = this.sprites.run.image;
            this.frames.max = this.sprites.run.frames.max;
            this.frames.val = 0;
          }
          break;
        case 'jump':
          if (this.image !== this.sprites.jump.image) {
            this.image = this.sprites.jump.image;
            this.frames.max = this.sprites.jump.frames.max;
            this.frames.val = 0;
          }
          break;
        case 'fall':
          if (this.image !== this.sprites.fall.image) {
            this.image = this.sprites.fall.image;
            this.frames.max = this.sprites.fall.frames.max;
            this.frames.val = 0;
          }
          break;
        case 'attack1':
          if (this.image !== this.sprites.attack1.image) {
            this.image = this.sprites.attack1.image;
            this.frames.max = this.sprites.attack1.frames.max;
            this.frames.val = 0;
          }
          break;
        case 'takeHit':
          if (this.image !== this.sprites.takeHit.image) {
            this.image = this.sprites.takeHit.image;
            this.frames.max = this.sprites.takeHit.frames.max;
            this.frames.val = 0;
          }
          break;
        case 'death':
          if (this.image !== this.sprites.death.image) {
            this.image = this.sprites.death.image;
            this.frames.max = this.sprites.death.frames.max;
            this.frames.val = 0;
          }
          break;
      }
    }
  }]);
  return Fighter;
}(Sprite);

/***/ }),

/***/ "./assets/js/fighting/utils.js":
/*!*************************************!*\
  !*** ./assets/js/fighting/utils.js ***!
  \*************************************/
/*! exports provided: rectangularCollision, determineWinner, timerId, decreaseTimer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rectangularCollision", function() { return rectangularCollision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "determineWinner", function() { return determineWinner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timerId", function() { return timerId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decreaseTimer", function() { return decreaseTimer; });
/* harmony import */ var _fighting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fighting */ "./assets/js/fighting.js");

function rectangularCollision(_ref) {
  var rectangle1 = _ref.rectangle1,
    rectangle2 = _ref.rectangle2;
  return rectangle1.attackBox.position.x + rectangle1.attackBox.width >= rectangle2.position.x && rectangle1.attackBox.position.x <= rectangle2.position.x + rectangle2.width && rectangle1.attackBox.position.y + rectangle1.attackBox.height >= rectangle2.position.y && rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height;
}
function determineWinner(_ref2) {
  var player = _ref2.player,
    enemy = _ref2.enemy,
    timerId = _ref2.timerId;
  clearTimeout(timerId);
  document.querySelector('#displayText').style.display = 'flex';
  if (player.health === enemy.health) {
    document.querySelector('#displayText').innerHTML = 'Tie';
  } else if (player.health > enemy.health) {
    document.querySelector('#displayText').innerHTML = 'Player 1 Wins';
  } else if (player.health < enemy.health) {
    document.querySelector('#displayText').innerHTML = 'Player 2 Wins';
  }
}
var timer = 60;
var timerId;
function decreaseTimer() {
  timerId = setTimeout(decreaseTimer, 1000);
  if (timer > 0) {
    timer--;
    document.querySelector('#timer').innerHTML = timer;
  }
  if (timer === 0) {
    determineWinner({
      player: _fighting__WEBPACK_IMPORTED_MODULE_0__["player"],
      enemy: _fighting__WEBPACK_IMPORTED_MODULE_0__["enemy"],
      timerId: timerId
    });
  }
}

/***/ })

/******/ });
//# sourceMappingURL=fighting.bundle.js.map