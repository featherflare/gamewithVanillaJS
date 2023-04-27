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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/verticalPlatform.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/images/verticalPlatform/background.png":
/*!*******************************************************!*\
  !*** ./assets/images/verticalPlatform/background.png ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "6869a11e0d49c9b184a750c27723ca30.png");

/***/ }),

/***/ "./assets/images/verticalPlatform/warrior/Fall.png":
/*!*********************************************************!*\
  !*** ./assets/images/verticalPlatform/warrior/Fall.png ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b50caef616cb13292976b94e2e298e21.png");

/***/ }),

/***/ "./assets/images/verticalPlatform/warrior/FallLeft.png":
/*!*************************************************************!*\
  !*** ./assets/images/verticalPlatform/warrior/FallLeft.png ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "9687fb6cea73d2772b8c861e8e3c75c8.png");

/***/ }),

/***/ "./assets/images/verticalPlatform/warrior/Idle.png":
/*!*********************************************************!*\
  !*** ./assets/images/verticalPlatform/warrior/Idle.png ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "18653442233e5d89d9d323550c9b2325.png");

/***/ }),

/***/ "./assets/images/verticalPlatform/warrior/IdleLeft.png":
/*!*************************************************************!*\
  !*** ./assets/images/verticalPlatform/warrior/IdleLeft.png ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "25d8c7289ae085ca714059f86e6b3a78.png");

/***/ }),

/***/ "./assets/images/verticalPlatform/warrior/Jump.png":
/*!*********************************************************!*\
  !*** ./assets/images/verticalPlatform/warrior/Jump.png ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "dbc6c84545d0bd02918a193e4a837218.png");

/***/ }),

/***/ "./assets/images/verticalPlatform/warrior/JumpLeft.png":
/*!*************************************************************!*\
  !*** ./assets/images/verticalPlatform/warrior/JumpLeft.png ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d1511b32fc2fff97ff45699f8ed9eec1.png");

/***/ }),

/***/ "./assets/images/verticalPlatform/warrior/Run.png":
/*!********************************************************!*\
  !*** ./assets/images/verticalPlatform/warrior/Run.png ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "207964795b9d6dc3f5d73d52b39abcfb.png");

/***/ }),

/***/ "./assets/images/verticalPlatform/warrior/RunLeft.png":
/*!************************************************************!*\
  !*** ./assets/images/verticalPlatform/warrior/RunLeft.png ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "af240eeb11a0eacf92a468446a74f55c.png");

/***/ }),

/***/ "./assets/js/verticalPlatform.js":
/*!***************************************!*\
  !*** ./assets/js/verticalPlatform.js ***!
  \***************************************/
/*! exports provided: gravity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gravity", function() { return gravity; });
/* harmony import */ var _verticalPlatform_classes_Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verticalPlatform/classes/Player */ "./assets/js/verticalPlatform/classes/Player.js");
/* harmony import */ var _images_verticalPlatform_background_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/verticalPlatform/background.png */ "./assets/images/verticalPlatform/background.png");
/* harmony import */ var _images_verticalPlatform_warrior_Idle_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/verticalPlatform/warrior/Idle.png */ "./assets/images/verticalPlatform/warrior/Idle.png");
/* harmony import */ var _images_verticalPlatform_warrior_Run_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/verticalPlatform/warrior/Run.png */ "./assets/images/verticalPlatform/warrior/Run.png");
/* harmony import */ var _images_verticalPlatform_warrior_Jump_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/verticalPlatform/warrior/Jump.png */ "./assets/images/verticalPlatform/warrior/Jump.png");
/* harmony import */ var _images_verticalPlatform_warrior_Fall_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/verticalPlatform/warrior/Fall.png */ "./assets/images/verticalPlatform/warrior/Fall.png");
/* harmony import */ var _images_verticalPlatform_warrior_FallLeft_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/verticalPlatform/warrior/FallLeft.png */ "./assets/images/verticalPlatform/warrior/FallLeft.png");
/* harmony import */ var _images_verticalPlatform_warrior_RunLeft_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/verticalPlatform/warrior/RunLeft.png */ "./assets/images/verticalPlatform/warrior/RunLeft.png");
/* harmony import */ var _images_verticalPlatform_warrior_IdleLeft_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/verticalPlatform/warrior/IdleLeft.png */ "./assets/images/verticalPlatform/warrior/IdleLeft.png");
/* harmony import */ var _images_verticalPlatform_warrior_JumpLeft_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/verticalPlatform/warrior/JumpLeft.png */ "./assets/images/verticalPlatform/warrior/JumpLeft.png");
/* harmony import */ var _verticalPlatform_classes_Sprite__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./verticalPlatform/classes/Sprite */ "./assets/js/verticalPlatform/classes/Sprite.js");
/* harmony import */ var _verticalPlatform_data_collisions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./verticalPlatform/data/collisions */ "./assets/js/verticalPlatform/data/collisions.js");
/* harmony import */ var _verticalPlatform_classes_CollisionBlock__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./verticalPlatform/classes/CollisionBlock */ "./assets/js/verticalPlatform/classes/CollisionBlock.js");













var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = 1024;
canvas.height = 576;
var scaledCanvas = {
  width: canvas.width / 4,
  height: canvas.height / 4
};
var floorCollisions2D = [];
for (var i = 0; i < _verticalPlatform_data_collisions__WEBPACK_IMPORTED_MODULE_11__["floorCollisions"].length; i += 36) {
  floorCollisions2D.push(_verticalPlatform_data_collisions__WEBPACK_IMPORTED_MODULE_11__["floorCollisions"].slice(i, i + 36));
}
var collisionBlocks = [];
floorCollisions2D.forEach(function (row, y) {
  row.forEach(function (symbol, x) {
    if (symbol === 202) {
      collisionBlocks.push(new _verticalPlatform_classes_CollisionBlock__WEBPACK_IMPORTED_MODULE_12__["CollisionBlock"]({
        position: {
          x: 16 * x,
          y: 16 * y
        }
      }));
    }
  });
});
var platformCollisions2D = [];
for (var _i = 0; _i < _verticalPlatform_data_collisions__WEBPACK_IMPORTED_MODULE_11__["platformCollisions"].length; _i += 36) {
  platformCollisions2D.push(_verticalPlatform_data_collisions__WEBPACK_IMPORTED_MODULE_11__["platformCollisions"].slice(_i, _i + 36));
}
var platformCollisionBlocks = [];
platformCollisions2D.forEach(function (row, y) {
  row.forEach(function (symbol, x) {
    if (symbol === 202) {
      platformCollisionBlocks.push(new _verticalPlatform_classes_CollisionBlock__WEBPACK_IMPORTED_MODULE_12__["CollisionBlock"]({
        position: {
          x: 16 * x,
          y: 16 * y
        },
        height: 4
      }));
    }
  });
});
var gravity = 0.1;
var background = new _verticalPlatform_classes_Sprite__WEBPACK_IMPORTED_MODULE_10__["Sprite"]({
  position: {
    x: 0,
    y: 0
  },
  imageSrc: _images_verticalPlatform_background_png__WEBPACK_IMPORTED_MODULE_1__["default"]
});
var player = new _verticalPlatform_classes_Player__WEBPACK_IMPORTED_MODULE_0__["Player"]({
  position: {
    x: 100,
    y: 300
  },
  collisionBlocks: collisionBlocks,
  platformCollisionBlocks: platformCollisionBlocks,
  imageSrc: _images_verticalPlatform_warrior_Idle_png__WEBPACK_IMPORTED_MODULE_2__["default"],
  frameRate: 8,
  animations: {
    Idle: {
      imageSrc: _images_verticalPlatform_warrior_Idle_png__WEBPACK_IMPORTED_MODULE_2__["default"],
      frameRate: 8,
      frameBuffer: 3
    },
    Run: {
      imageSrc: _images_verticalPlatform_warrior_Run_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      frameRate: 8,
      frameBuffer: 5
    },
    Jump: {
      imageSrc: _images_verticalPlatform_warrior_Jump_png__WEBPACK_IMPORTED_MODULE_4__["default"],
      frameRate: 2,
      frameBuffer: 3
    },
    Fall: {
      imageSrc: _images_verticalPlatform_warrior_Fall_png__WEBPACK_IMPORTED_MODULE_5__["default"],
      frameRate: 2,
      frameBuffer: 3
    },
    FallLeft: {
      imageSrc: _images_verticalPlatform_warrior_FallLeft_png__WEBPACK_IMPORTED_MODULE_6__["default"],
      frameRate: 2,
      frameBuffer: 3
    },
    RunLeft: {
      imageSrc: _images_verticalPlatform_warrior_RunLeft_png__WEBPACK_IMPORTED_MODULE_7__["default"],
      frameRate: 8,
      frameBuffer: 5
    },
    IdleLeft: {
      imageSrc: _images_verticalPlatform_warrior_IdleLeft_png__WEBPACK_IMPORTED_MODULE_8__["default"],
      frameRate: 8,
      frameBuffer: 3
    },
    JumpLeft: {
      imageSrc: _images_verticalPlatform_warrior_JumpLeft_png__WEBPACK_IMPORTED_MODULE_9__["default"],
      frameRate: 2,
      frameBuffer: 3
    }
  }
});
var backgroundImageHeight = 432;
var camera = {
  position: {
    x: 0,
    y: -backgroundImageHeight + scaledCanvas.height
  }
};
var keys = {
  d: {
    pressed: false
  },
  a: {
    pressed: false
  }
};
function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = 'black';
  c.fillRect(0, 0, canvas.width, canvas.height);
  c.save();
  c.scale(4, 4);
  c.translate(camera.position.x, camera.position.y);
  background.update();
  //   collisionBlocks.forEach((collisionBlock) => {
  //     collisionBlock.update()
  //   })

  //   platformCollisionBlocks.forEach((platformCollisionBlock) => {
  //     platformCollisionBlock.update()
  //   })

  player.checkForHorizontalCanvasCollision();
  player.update();
  player.velocity.x = 0;
  if (keys.d.pressed) {
    player.switchSprite('Run');
    player.velocity.x = 2;
    player.lastDirection = 'right';
    player.shouldPanCameraToTheLeft({
      canvas: canvas,
      camera: camera
    });
  } else if (keys.a.pressed) {
    player.switchSprite('RunLeft');
    player.velocity.x = -2;
    player.lastDirection = 'left';
    player.shouldPanCameraToTheRight({
      canvas: canvas,
      camera: camera
    });
  } else if (player.velocity.y === 0) {
    if (player.lastDirection === 'right') player.switchSprite('Idle');else player.switchSprite('IdleLeft');
  }
  if (player.velocity.y < 0) {
    player.shouldPanCameraDown({
      camera: camera,
      canvas: canvas
    });
    if (player.lastDirection === 'right') player.switchSprite('Jump');else player.switchSprite('JumpLeft');
  } else if (player.velocity.y > 0) {
    player.shouldPanCameraUp({
      camera: camera,
      canvas: canvas
    });
    if (player.lastDirection === 'right') player.switchSprite('Fall');else player.switchSprite('FallLeft');
  }
  c.restore();
}
animate();
addEventListener('keydown', function (_ref) {
  var key = _ref.key;
  switch (key) {
    case 'd':
      keys.d.pressed = true;
      break;
    case 'a':
      keys.a.pressed = true;
      break;
    case 'w':
      player.velocity.y = -4;
      break;
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
});

/***/ }),

/***/ "./assets/js/verticalPlatform/classes/CollisionBlock.js":
/*!**************************************************************!*\
  !*** ./assets/js/verticalPlatform/classes/CollisionBlock.js ***!
  \**************************************************************/
/*! exports provided: CollisionBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollisionBlock", function() { return CollisionBlock; });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = 1024;
canvas.height = 576;
var CollisionBlock = /*#__PURE__*/function () {
  function CollisionBlock(_ref) {
    var position = _ref.position,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 16 : _ref$height;
    _classCallCheck(this, CollisionBlock);
    this.position = position;
    this.width = 16;
    this.height = height;
  }
  _createClass(CollisionBlock, [{
    key: "draw",
    value: function draw() {
      c.fillStyle = 'rgba(255,0,0,0.5)';
      c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
    }
  }]);
  return CollisionBlock;
}();

/***/ }),

/***/ "./assets/js/verticalPlatform/classes/Player.js":
/*!******************************************************!*\
  !*** ./assets/js/verticalPlatform/classes/Player.js ***!
  \******************************************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony import */ var _verticalPlatform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../verticalPlatform */ "./assets/js/verticalPlatform.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./assets/js/verticalPlatform/utils.js");
/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sprite */ "./assets/js/verticalPlatform/classes/Sprite.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = 1024;
canvas.height = 576;
var Player = /*#__PURE__*/function (_Sprite) {
  _inherits(Player, _Sprite);
  var _super = _createSuper(Player);
  function Player(_ref) {
    var _this;
    var position = _ref.position,
      collisionBlocks = _ref.collisionBlocks,
      platformCollisionBlocks = _ref.platformCollisionBlocks,
      imageSrc = _ref.imageSrc,
      frameRate = _ref.frameRate,
      _ref$scale = _ref.scale,
      scale = _ref$scale === void 0 ? 0.5 : _ref$scale,
      animations = _ref.animations;
    _classCallCheck(this, Player);
    _this = _super.call(this, {
      imageSrc: imageSrc,
      frameRate: frameRate,
      scale: scale
    });
    _this.position = position;
    _this.velocity = {
      x: 0,
      y: 1
    };
    _this.collisionBlocks = collisionBlocks;
    _this.platformCollisionBlocks = platformCollisionBlocks;
    _this.hitbox = {
      position: {
        x: _this.position.x,
        y: _this.position.y
      },
      width: 10,
      height: 10
    };
    _this.animations = animations;
    _this.lastDirection = 'right';
    for (var key in _this.animations) {
      var image = new Image();
      image.src = _this.animations[key].imageSrc;
      _this.animations[key].image = image;
    }
    _this.camerabox = {
      position: {
        x: _this.position.x,
        y: _this.position.y
      },
      width: 200,
      height: 80
    };
    return _this;
  }
  _createClass(Player, [{
    key: "switchSprite",
    value: function switchSprite(key) {
      if (this.image === this.animations[key].image || !this.loaded) return;
      this.currentFrame = 0;
      this.image = this.animations[key].image;
      this.frameBuffer = this.animations[key].frameBuffer;
      this.frameRate = this.animations[key].frameRate;
    }
  }, {
    key: "updateCamerabox",
    value: function updateCamerabox() {
      this.camerabox = {
        position: {
          x: this.position.x - 50,
          y: this.position.y
        },
        width: 200,
        height: 80
      };
    }
  }, {
    key: "checkForHorizontalCanvasCollision",
    value: function checkForHorizontalCanvasCollision() {
      if (this.hitbox.position.x + this.hitbox.width + this.velocity.x >= 576 || this.hitbox.position.x + this.velocity.x <= 0) {
        this.velocity.x = 0;
      }
    }
  }, {
    key: "shouldPanCameraToTheLeft",
    value: function shouldPanCameraToTheLeft(_ref2) {
      var canvas = _ref2.canvas,
        camera = _ref2.camera;
      var cameraboxRightSide = this.camerabox.position.x + this.camerabox.width;
      var scaledDownCanvasWidth = canvas.width / 4;
      if (cameraboxRightSide >= 576) return;
      if (cameraboxRightSide >= scaledDownCanvasWidth + Math.abs(camera.position.x)) {
        camera.position.x -= this.velocity.x;
      }
    }
  }, {
    key: "shouldPanCameraToTheRight",
    value: function shouldPanCameraToTheRight(_ref3) {
      var canvas = _ref3.canvas,
        camera = _ref3.camera;
      if (this.camerabox.position.x <= 0) return;
      if (this.camerabox.position.x <= Math.abs(camera.position.x)) {
        camera.position.x -= this.velocity.x;
      }
    }
  }, {
    key: "shouldPanCameraDown",
    value: function shouldPanCameraDown(_ref4) {
      var canvas = _ref4.canvas,
        camera = _ref4.camera;
      if (this.camerabox.position.y + this.velocity.y <= 0) return;
      if (this.camerabox.position.y <= Math.abs(camera.position.y)) {
        camera.position.y -= this.velocity.y;
      }
    }
  }, {
    key: "shouldPanCameraUp",
    value: function shouldPanCameraUp(_ref5) {
      var canvas = _ref5.canvas,
        camera = _ref5.camera;
      if (this.camerabox.position.y + this.camerabox.height + this.velocity.y >= 432) return;
      var scaledCanvasHeight = canvas.height / 4;
      if (this.camerabox.position.y + this.camerabox.height >= Math.abs(camera.position.y) + scaledCanvasHeight) {
        camera.position.y -= this.velocity.y;
      }
    }
  }, {
    key: "update",
    value: function update() {
      this.updateFrames();
      this.updateHitbox();
      this.updateCamerabox();
      this.draw();
      this.position.x += this.velocity.x;
      this.updateHitbox();
      this.checkForHorizontalCollisions();
      this.applyGravity();
      this.updateHitbox();
      this.checkForVerticalCollisions();
    }
  }, {
    key: "updateHitbox",
    value: function updateHitbox() {
      this.hitbox = {
        position: {
          x: this.position.x + 35,
          y: this.position.y + 26
        },
        width: 14,
        height: 27
      };
    }
  }, {
    key: "checkForHorizontalCollisions",
    value: function checkForHorizontalCollisions() {
      for (var i = 0; i < this.collisionBlocks.length; i++) {
        var collisionBlock = this.collisionBlocks[i];
        if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["collision"])({
          object1: this.hitbox,
          object2: collisionBlock
        })) {
          if (this.velocity.x > 0) {
            this.velocity.x = 0;
            var offset = this.hitbox.position.x - this.position.x + this.hitbox.width;
            this.position.x = collisionBlock.position.x - offset - 0.01;
            break;
          }
          if (this.velocity.x < 0) {
            this.velocity.x = 0;
            var _offset = this.hitbox.position.x - this.position.x;
            this.position.x = collisionBlock.position.x + collisionBlock.width - _offset + 0.01;
            break;
          }
        }
      }
    }
  }, {
    key: "applyGravity",
    value: function applyGravity() {
      this.velocity.y += _verticalPlatform__WEBPACK_IMPORTED_MODULE_0__["gravity"];
      this.position.y += this.velocity.y;
    }
  }, {
    key: "checkForVerticalCollisions",
    value: function checkForVerticalCollisions() {
      for (var i = 0; i < this.collisionBlocks.length; i++) {
        var collisionBlock = this.collisionBlocks[i];
        if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["collision"])({
          object1: this.hitbox,
          object2: collisionBlock
        })) {
          if (this.velocity.y > 0) {
            this.velocity.y = 0;
            var offset = this.hitbox.position.y - this.position.y + this.hitbox.height;
            this.position.y = collisionBlock.position.y - offset - 0.01;
            break;
          }
          if (this.velocity.y < 0) {
            this.velocity.y = 0;
            var _offset2 = this.hitbox.position.y - this.position.y;
            this.position.y = collisionBlock.position.y + collisionBlock.height - _offset2 + 0.01;
            break;
          }
        }
      }
      for (var _i = 0; _i < this.platformCollisionBlocks.length; _i++) {
        var platformCollisionBlock = this.platformCollisionBlocks[_i];
        if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["platformCollision"])({
          object1: this.hitbox,
          object2: platformCollisionBlock
        })) {
          if (this.velocity.y > 0) {
            this.velocity.y = 0;
            var _offset3 = this.hitbox.position.y - this.position.y + this.hitbox.height;
            this.position.y = platformCollisionBlock.position.y - _offset3 - 0.01;
            break;
          }
        }
      }
    }
  }]);
  return Player;
}(_Sprite__WEBPACK_IMPORTED_MODULE_2__["Sprite"]);

/***/ }),

/***/ "./assets/js/verticalPlatform/classes/Sprite.js":
/*!******************************************************!*\
  !*** ./assets/js/verticalPlatform/classes/Sprite.js ***!
  \******************************************************/
/*! exports provided: Sprite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sprite", function() { return Sprite; });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = 1024;
canvas.height = 576;
var Sprite = /*#__PURE__*/function () {
  function Sprite(_ref) {
    var _this = this;
    var position = _ref.position,
      imageSrc = _ref.imageSrc,
      _ref$frameRate = _ref.frameRate,
      frameRate = _ref$frameRate === void 0 ? 1 : _ref$frameRate,
      _ref$frameBuffer = _ref.frameBuffer,
      frameBuffer = _ref$frameBuffer === void 0 ? 3 : _ref$frameBuffer,
      _ref$scale = _ref.scale,
      scale = _ref$scale === void 0 ? 1 : _ref$scale;
    _classCallCheck(this, Sprite);
    this.position = position;
    this.scale = scale;
    this.loaded = false;
    this.image = new Image();
    this.image.onload = function () {
      _this.width = _this.image.width / _this.frameRate * _this.scale;
      _this.height = _this.image.height * _this.scale;
      _this.loaded = true;
    };
    this.image.src = imageSrc;
    this.frameRate = frameRate;
    this.currentFrame = 0;
    this.elapsedFrames = 0;
    this.frameBuffer = frameBuffer;
  }
  _createClass(Sprite, [{
    key: "draw",
    value: function draw() {
      if (!this.image) return;
      var cropbox = {
        position: {
          x: this.image.width / this.frameRate * this.currentFrame,
          y: 0
        },
        width: this.image.width / this.frameRate,
        height: this.image.height
      };
      c.drawImage(this.image, cropbox.position.x, cropbox.position.y, cropbox.width, cropbox.height, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.updateFrames();
    }
  }, {
    key: "updateFrames",
    value: function updateFrames() {
      this.elapsedFrames++;
      if (this.elapsedFrames % this.frameBuffer === 0) {
        if (this.currentFrame < this.frameRate - 1) this.currentFrame++;else this.currentFrame = 0;
      }
    }
  }]);
  return Sprite;
}();

/***/ }),

/***/ "./assets/js/verticalPlatform/data/collisions.js":
/*!*******************************************************!*\
  !*** ./assets/js/verticalPlatform/data/collisions.js ***!
  \*******************************************************/
/*! exports provided: floorCollisions, platformCollisions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "floorCollisions", function() { return floorCollisions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "platformCollisions", function() { return platformCollisions; });
var floorCollisions = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 202, 202, 202, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 202, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 202, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 202, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var platformCollisions = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 202, 202, 202, 0, 0, 0, 0, 0, 0, 0, 0, 0, 202, 202, 202, 0, 0, 0, 0, 0, 0, 0, 0, 0, 202, 202, 202, 0, 0, 0, 202, 202, 202, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 202, 202, 202, 0, 0, 0, 0, 0, 0, 0, 0, 0, 202, 202, 202, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 202, 202, 202, 0, 0, 0, 0, 0, 0, 0, 0, 0, 202, 202, 202, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 202, 202, 202, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 202, 202, 202, 0, 0, 0, 0, 0, 0, 0, 0, 0, 202, 202, 202, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 202, 202, 202, 0, 0, 0, 0, 0, 0, 0, 202, 202, 202, 0, 0, 0, 0, 0, 0, 0, 0, 202, 202, 202, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 202, 202, 202, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 202, 202, 202, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 202, 202, 202, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 202, 202, 202, 0, 0, 0, 0, 0, 0, 0, 0, 0, 202, 202, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

/***/ }),

/***/ "./assets/js/verticalPlatform/utils.js":
/*!*********************************************!*\
  !*** ./assets/js/verticalPlatform/utils.js ***!
  \*********************************************/
/*! exports provided: collision, platformCollision */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collision", function() { return collision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "platformCollision", function() { return platformCollision; });
function collision(_ref) {
  var object1 = _ref.object1,
    object2 = _ref.object2;
  return object1.position.y + object1.height >= object2.position.y && object1.position.y <= object2.position.y + object2.height && object1.position.x <= object2.position.x + object2.width && object1.position.x + object1.width >= object2.position.x;
}
function platformCollision(_ref2) {
  var object1 = _ref2.object1,
    object2 = _ref2.object2;
  return object1.position.y + object1.height >= object2.position.y && object1.position.y + object1.height <= object2.position.y + object2.height && object1.position.x <= object2.position.x + object2.width && object1.position.x + object1.width >= object2.position.x;
}

/***/ })

/******/ });
//# sourceMappingURL=verticalPlatform.bundle.js.map