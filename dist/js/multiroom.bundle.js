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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/multiroom.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/images/multiroom/backgroundLevel1.png":
/*!******************************************************!*\
  !*** ./assets/images/multiroom/backgroundLevel1.png ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "9a19cac509dd3548628394db8bbfbc86.png");

/***/ }),

/***/ "./assets/images/multiroom/backgroundLevel2.png":
/*!******************************************************!*\
  !*** ./assets/images/multiroom/backgroundLevel2.png ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "42d8b68bac4b6e9d8bdb7be5cf6815e3.png");

/***/ }),

/***/ "./assets/images/multiroom/backgroundLevel3.png":
/*!******************************************************!*\
  !*** ./assets/images/multiroom/backgroundLevel3.png ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ddff85d44896f3f52bdec92bfa6c53b4.png");

/***/ }),

/***/ "./assets/images/multiroom/doorOpen.png":
/*!**********************************************!*\
  !*** ./assets/images/multiroom/doorOpen.png ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "8f2d01fc2a42da0b4988aea0e603a0ec.png");

/***/ }),

/***/ "./assets/images/multiroom/king/enterDoor.png":
/*!****************************************************!*\
  !*** ./assets/images/multiroom/king/enterDoor.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "14ed4761261adb70da6643a370d322c4.png");

/***/ }),

/***/ "./assets/images/multiroom/king/idle.png":
/*!***********************************************!*\
  !*** ./assets/images/multiroom/king/idle.png ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "06baa01b819edb80fb0b77202d6f7d71.png");

/***/ }),

/***/ "./assets/images/multiroom/king/idleLeft.png":
/*!***************************************************!*\
  !*** ./assets/images/multiroom/king/idleLeft.png ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c9d10b00ac388a56815410fc44a8bd8f.png");

/***/ }),

/***/ "./assets/images/multiroom/king/runLeft.png":
/*!**************************************************!*\
  !*** ./assets/images/multiroom/king/runLeft.png ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "7164213b6b40ff25c4ffc21318c03af9.png");

/***/ }),

/***/ "./assets/images/multiroom/king/runRight.png":
/*!***************************************************!*\
  !*** ./assets/images/multiroom/king/runRight.png ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c99cc96afd2f063c29734f3f2c906c8e.png");

/***/ }),

/***/ "./assets/js/multiroom.js":
/*!********************************!*\
  !*** ./assets/js/multiroom.js ***!
  \********************************/
/*! exports provided: doors, player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doors", function() { return doors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "player", function() { return player; });
/* harmony import */ var _multiroom_Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./multiroom/Player */ "./assets/js/multiroom/Player.js");
/* harmony import */ var _multiroom_Sprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./multiroom/Sprite */ "./assets/js/multiroom/Sprite.js");
/* harmony import */ var _multiroom_eventListener__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./multiroom/eventListener */ "./assets/js/multiroom/eventListener.js");
/* harmony import */ var _images_multiroom_backgroundLevel1_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/multiroom/backgroundLevel1.png */ "./assets/images/multiroom/backgroundLevel1.png");
/* harmony import */ var _images_multiroom_backgroundLevel2_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/multiroom/backgroundLevel2.png */ "./assets/images/multiroom/backgroundLevel2.png");
/* harmony import */ var _images_multiroom_backgroundLevel3_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/multiroom/backgroundLevel3.png */ "./assets/images/multiroom/backgroundLevel3.png");
/* harmony import */ var _images_multiroom_doorOpen_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/multiroom/doorOpen.png */ "./assets/images/multiroom/doorOpen.png");
/* harmony import */ var _images_multiroom_king_idle_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/multiroom/king/idle.png */ "./assets/images/multiroom/king/idle.png");
/* harmony import */ var _images_multiroom_king_idleLeft_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/multiroom/king/idleLeft.png */ "./assets/images/multiroom/king/idleLeft.png");
/* harmony import */ var _images_multiroom_king_runRight_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/multiroom/king/runRight.png */ "./assets/images/multiroom/king/runRight.png");
/* harmony import */ var _images_multiroom_king_runLeft_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../images/multiroom/king/runLeft.png */ "./assets/images/multiroom/king/runLeft.png");
/* harmony import */ var _images_multiroom_king_enterDoor_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../images/multiroom/king/enterDoor.png */ "./assets/images/multiroom/king/enterDoor.png");
/* harmony import */ var _multiroom_data__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./multiroom/data */ "./assets/js/multiroom/data.js");
/* harmony import */ var _multiroom_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./multiroom/utils */ "./assets/js/multiroom/utils.js");














var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = 1024;
canvas.height = 576;
var parsedCollisions;
var collisionBlocks;
var background;
var doors;
var player = new _multiroom_Player__WEBPACK_IMPORTED_MODULE_0__["Player"]({
  imageSrc: _images_multiroom_king_idle_png__WEBPACK_IMPORTED_MODULE_7__["default"],
  frameRate: 11,
  animations: {
    idleRight: {
      frameRate: 11,
      frameBuffer: 2,
      loop: true,
      imageSrc: _images_multiroom_king_idle_png__WEBPACK_IMPORTED_MODULE_7__["default"]
    },
    idleLeft: {
      frameRate: 11,
      frameBuffer: 2,
      loop: true,
      imageSrc: _images_multiroom_king_idleLeft_png__WEBPACK_IMPORTED_MODULE_8__["default"]
    },
    runRight: {
      frameRate: 8,
      frameBuffer: 4,
      loop: true,
      imageSrc: _images_multiroom_king_runRight_png__WEBPACK_IMPORTED_MODULE_9__["default"]
    },
    runLeft: {
      frameRate: 8,
      frameBuffer: 4,
      loop: true,
      imageSrc: _images_multiroom_king_runLeft_png__WEBPACK_IMPORTED_MODULE_10__["default"]
    },
    enterDoor: {
      frameRate: 8,
      frameBuffer: 4,
      loop: false,
      imageSrc: _images_multiroom_king_enterDoor_png__WEBPACK_IMPORTED_MODULE_11__["default"],
      onComplete: function onComplete() {
        gsap.to(overlay, {
          opacity: 1,
          onComplete: function onComplete() {
            level++;
            if (level === 4) level = 1;
            levels[level].init();
            player.switchSprite('idleRight');
            player.preventInput = false;
            gsap.to(overlay, {
              opacity: 0
            });
          }
        });
      }
    }
  }
});
var level = 1;
var levels = {
  1: {
    init: function init() {
      parsedCollisions = _multiroom_data__WEBPACK_IMPORTED_MODULE_12__["collisionsLevel1"].parse2D();
      collisionBlocks = parsedCollisions.createObjectsFrom2D();
      player.collisionBlocks = collisionBlocks;
      if (player.currentAnimation) player.currentAnimation.isActive = false;
      background = new _multiroom_Sprite__WEBPACK_IMPORTED_MODULE_1__["Sprite"]({
        position: {
          x: 0,
          y: 0
        },
        imageSrc: _images_multiroom_backgroundLevel1_png__WEBPACK_IMPORTED_MODULE_3__["default"]
      });
      doors = [new _multiroom_Sprite__WEBPACK_IMPORTED_MODULE_1__["Sprite"]({
        position: {
          x: 767,
          y: 270
        },
        imageSrc: _images_multiroom_doorOpen_png__WEBPACK_IMPORTED_MODULE_6__["default"],
        frameRate: 5,
        frameBuffer: 5,
        loop: false,
        autoplay: false
      })];
    }
  },
  2: {
    init: function init() {
      parsedCollisions = _multiroom_data__WEBPACK_IMPORTED_MODULE_12__["collisionsLevel2"].parse2D();
      collisionBlocks = parsedCollisions.createObjectsFrom2D();
      player.collisionBlocks = collisionBlocks;
      player.position.x = 96;
      player.position.y = 140;
      if (player.currentAnimation) player.currentAnimation.isActive = false;
      background = new _multiroom_Sprite__WEBPACK_IMPORTED_MODULE_1__["Sprite"]({
        position: {
          x: 0,
          y: 0
        },
        imageSrc: _images_multiroom_backgroundLevel2_png__WEBPACK_IMPORTED_MODULE_4__["default"]
      });
      doors = [new _multiroom_Sprite__WEBPACK_IMPORTED_MODULE_1__["Sprite"]({
        position: {
          x: 772,
          y: 336
        },
        imageSrc: _images_multiroom_doorOpen_png__WEBPACK_IMPORTED_MODULE_6__["default"],
        frameRate: 5,
        frameBuffer: 5,
        loop: false,
        autoplay: false
      })];
    }
  },
  3: {
    init: function init() {
      parsedCollisions = _multiroom_data__WEBPACK_IMPORTED_MODULE_12__["collisionsLevel3"].parse2D();
      collisionBlocks = parsedCollisions.createObjectsFrom2D();
      player.collisionBlocks = collisionBlocks;
      player.position.x = 750;
      player.position.y = 230;
      if (player.currentAnimation) player.currentAnimation.isActive = false;
      background = new _multiroom_Sprite__WEBPACK_IMPORTED_MODULE_1__["Sprite"]({
        position: {
          x: 0,
          y: 0
        },
        imageSrc: _images_multiroom_backgroundLevel3_png__WEBPACK_IMPORTED_MODULE_5__["default"]
      });
      doors = [new _multiroom_Sprite__WEBPACK_IMPORTED_MODULE_1__["Sprite"]({
        position: {
          x: 175,
          y: 335
        },
        imageSrc: _images_multiroom_doorOpen_png__WEBPACK_IMPORTED_MODULE_6__["default"],
        frameRate: 5,
        frameBuffer: 5,
        loop: false,
        autoplay: false
      })];
    }
  }
};
var overlay = {
  opacity: 0
};
function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = 'black';
  c.fillRect(0, 0, canvas.width, canvas.height);
  background.draw();

  // collisionBlocks.forEach((collisionBlock) => {
  //   collisionBlock.draw()
  // })

  doors.forEach(function (door) {
    door.draw();
  });
  player.handleInput(_multiroom_eventListener__WEBPACK_IMPORTED_MODULE_2__["keys"]);
  player.draw();
  player.update();
  c.save();
  c.globalAlpha = overlay.opacity;
  c.fillStyle = 'black';
  c.fillRect(0, 0, canvas.width, canvas.height);
  c.restore();
}
levels[level].init();
animate();

/***/ }),

/***/ "./assets/js/multiroom/CollisionBlock.js":
/*!***********************************************!*\
  !*** ./assets/js/multiroom/CollisionBlock.js ***!
  \***********************************************/
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
    var position = _ref.position;
    _classCallCheck(this, CollisionBlock);
    this.position = position;
    this.width = 64;
    this.height = 64;
  }
  _createClass(CollisionBlock, [{
    key: "draw",
    value: function draw() {
      c.fillStyle = 'rgba(255,0,0,0.5)';
      c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
  }]);
  return CollisionBlock;
}();

/***/ }),

/***/ "./assets/js/multiroom/Player.js":
/*!***************************************!*\
  !*** ./assets/js/multiroom/Player.js ***!
  \***************************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sprite */ "./assets/js/multiroom/Sprite.js");
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
    var _ref$collisionBlocks = _ref.collisionBlocks,
      collisionBlocks = _ref$collisionBlocks === void 0 ? [] : _ref$collisionBlocks,
      imageSrc = _ref.imageSrc,
      frameRate = _ref.frameRate,
      animations = _ref.animations,
      loop = _ref.loop;
    _classCallCheck(this, Player);
    _this = _super.call(this, {
      imageSrc: imageSrc,
      frameRate: frameRate,
      animations: animations,
      loop: loop
    });
    _this.position = {
      x: 200,
      y: 200
    };
    _this.velocity = {
      x: 0,
      y: 0
    };
    _this.sides = {
      bottom: _this.position.y + _this.height
    };
    _this.gravity = 1;
    _this.collisionBlocks = collisionBlocks;
    return _this;
  }
  _createClass(Player, [{
    key: "update",
    value: function update() {
      this.position.x += this.velocity.x;
      this.updateHitbox();
      this.checkForHorizontalCollisions();
      this.applyGravity();
      this.updateHitbox();
      this.checkForVerticalCollisions();
    }
  }, {
    key: "handleInput",
    value: function handleInput(keys) {
      if (this.preventInput) return;
      this.velocity.x = 0;
      if (keys.d.pressed) {
        this.switchSprite('runRight');
        this.lastDirection = 'right';
        this.velocity.x = 5;
      } else if (keys.a.pressed) {
        this.switchSprite('runLeft');
        this.lastDirection = 'left';
        this.velocity.x = -5;
      } else {
        if (this.lastDirection === 'left') this.switchSprite('idleLeft');else this.switchSprite('idleRight');
      }
    }
  }, {
    key: "switchSprite",
    value: function switchSprite(name) {
      if (this.image === this.animations[name].image) return;
      this.currentFrame = 0;
      this.image = this.animations[name].image;
      this.frameRate = this.animations[name].frameRate;
      this.frameBuffer = this.animations[name].frameBuffer;
      this.loop = this.animations[name].loop;
      this.currentAnimation = this.animations[name];
    }
  }, {
    key: "updateHitbox",
    value: function updateHitbox() {
      this.hitbox = {
        position: {
          x: this.position.x + 58,
          y: this.position.y + 34
        },
        width: 50,
        height: 53
      };
    }
  }, {
    key: "checkForHorizontalCollisions",
    value: function checkForHorizontalCollisions() {
      for (var i = 0; i < this.collisionBlocks.length; i++) {
        var collisionBlock = this.collisionBlocks[i];

        // if a collision exists
        if (this.hitbox.position.x <= collisionBlock.position.x + collisionBlock.width && this.hitbox.position.x + this.hitbox.width >= collisionBlock.position.x && this.hitbox.position.y + this.hitbox.height >= collisionBlock.position.y && this.hitbox.position.y <= collisionBlock.position.y + collisionBlock.height) {
          // collision on x axis going to the left
          if (this.velocity.x < 0) {
            var offset = this.hitbox.position.x - this.position.x;
            this.position.x = collisionBlock.position.x + collisionBlock.width - offset + 0.01;
            break;
          }
          if (this.velocity.x > 0) {
            var _offset = this.hitbox.position.x - this.position.x + this.hitbox.width;
            this.position.x = collisionBlock.position.x - _offset - 0.01;
            break;
          }
        }
      }
    }
  }, {
    key: "applyGravity",
    value: function applyGravity() {
      this.velocity.y += this.gravity;
      this.position.y += this.velocity.y;
    }
  }, {
    key: "checkForVerticalCollisions",
    value: function checkForVerticalCollisions() {
      for (var i = 0; i < this.collisionBlocks.length; i++) {
        var collisionBlock = this.collisionBlocks[i];

        // if a collision exists
        if (this.hitbox.position.x <= collisionBlock.position.x + collisionBlock.width && this.hitbox.position.x + this.hitbox.width >= collisionBlock.position.x && this.hitbox.position.y + this.hitbox.height >= collisionBlock.position.y && this.hitbox.position.y <= collisionBlock.position.y + collisionBlock.height) {
          if (this.velocity.y < 0) {
            this.velocity.y = 0;
            var offset = this.hitbox.position.y - this.position.y;
            this.position.y = collisionBlock.position.y + collisionBlock.height - offset + 0.01;
            break;
          }
          if (this.velocity.y > 0) {
            this.velocity.y = 0;
            var _offset2 = this.hitbox.position.y - this.position.y + this.hitbox.height;
            this.position.y = collisionBlock.position.y - _offset2 - 0.01;
            break;
          }
        }
      }
    }
  }]);
  return Player;
}(_Sprite__WEBPACK_IMPORTED_MODULE_0__["Sprite"]);

/***/ }),

/***/ "./assets/js/multiroom/Sprite.js":
/*!***************************************!*\
  !*** ./assets/js/multiroom/Sprite.js ***!
  \***************************************/
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
      animations = _ref.animations,
      _ref$frameBuffer = _ref.frameBuffer,
      frameBuffer = _ref$frameBuffer === void 0 ? 2 : _ref$frameBuffer,
      _ref$loop = _ref.loop,
      loop = _ref$loop === void 0 ? true : _ref$loop,
      _ref$autoplay = _ref.autoplay,
      autoplay = _ref$autoplay === void 0 ? true : _ref$autoplay;
    _classCallCheck(this, Sprite);
    this.position = position;
    this.image = new Image();
    this.image.onload = function () {
      _this.loaded = true;
      _this.width = _this.image.width / _this.frameRate;
      _this.height = _this.image.height;
    };
    this.image.src = imageSrc;
    this.loaded = false;
    this.frameRate = frameRate;
    this.currentFrame = 0;
    this.elapsedFrames = 0;
    this.frameBuffer = frameBuffer;
    this.animations = animations;
    this.loop = loop;
    this.autoplay = autoplay;
    this.currentAnimation;
    if (this.animations) {
      for (var key in this.animations) {
        var image = new Image();
        image.src = this.animations[key].imageSrc;
        this.animations[key].image = image;
      }
    }
  }
  _createClass(Sprite, [{
    key: "draw",
    value: function draw() {
      if (!this.loaded) return;
      var cropBox = {
        position: {
          x: this.width * this.currentFrame,
          y: 0
        },
        width: this.width,
        height: this.height
      };
      c.drawImage(this.image, cropBox.position.x, cropBox.position.y, cropBox.width, cropBox.height, this.position.x, this.position.y, this.width, this.height);
      this.updateFrames();
    }
  }, {
    key: "play",
    value: function play() {
      this.autoplay = true;
    }
  }, {
    key: "updateFrames",
    value: function updateFrames() {
      var _this$currentAnimatio;
      if (!this.autoplay) return;
      this.elapsedFrames++;
      if (this.elapsedFrames % this.frameBuffer === 0) {
        if (this.currentFrame < this.frameRate - 1) this.currentFrame++;else if (this.loop) this.currentFrame = 0;
      }
      if ((_this$currentAnimatio = this.currentAnimation) !== null && _this$currentAnimatio !== void 0 && _this$currentAnimatio.onComplete) {
        if (this.currentFrame === this.frameRate - 1 && !this.currentAnimation.isActive) {
          this.currentAnimation.onComplete();
          this.currentAnimation.isActive = true;
        }
      }
    }
  }]);
  return Sprite;
}();

/***/ }),

/***/ "./assets/js/multiroom/data.js":
/*!*************************************!*\
  !*** ./assets/js/multiroom/data.js ***!
  \*************************************/
/*! exports provided: collisionsLevel1, collisionsLevel2, collisionsLevel3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collisionsLevel1", function() { return collisionsLevel1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collisionsLevel2", function() { return collisionsLevel2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collisionsLevel3", function() { return collisionsLevel3; });
var collisionsLevel1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 0, 0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0, 0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0, 0, 292, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0, 0, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var collisionsLevel2 = [292, 292, 292, 292, 292, 292, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0, 0, 0, 0, 0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0, 0, 0, 0, 0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 292, 292, 292, 0, 0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0, 0, 292, 0, 0, 292, 292, 292, 292, 292, 292, 0, 0, 292, 292, 292, 0, 0, 292, 292, 292, 292, 0, 0, 0, 0, 292, 0, 0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0, 0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 292, 292, 292, 292, 292, 0, 0, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 0, 0, 0, 0];
var collisionsLevel3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 0, 0, 250, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 250, 0, 0, 250, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 250, 0, 0, 250, 0, 0, 0, 0, 0, 0, 0, 0, 250, 250, 250, 250, 250, 0, 0, 250, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 250, 0, 0, 0, 250, 250, 0, 0, 0, 0, 0, 0, 0, 0, 0, 250, 250, 0, 0, 0, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

/***/ }),

/***/ "./assets/js/multiroom/eventListener.js":
/*!**********************************************!*\
  !*** ./assets/js/multiroom/eventListener.js ***!
  \**********************************************/
/*! exports provided: keys */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return keys; });
/* harmony import */ var _multiroom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../multiroom */ "./assets/js/multiroom.js");

var keys = {
  w: {
    pressed: false
  },
  a: {
    pressed: false
  },
  d: {
    pressed: false
  }
};
addEventListener('keydown', function (_ref) {
  var key = _ref.key;
  if (_multiroom__WEBPACK_IMPORTED_MODULE_0__["player"].preventInput) return;
  switch (key) {
    case 'w':
      for (var i = 0; i < _multiroom__WEBPACK_IMPORTED_MODULE_0__["doors"].length; i++) {
        var door = _multiroom__WEBPACK_IMPORTED_MODULE_0__["doors"][i];
        if (_multiroom__WEBPACK_IMPORTED_MODULE_0__["player"].hitbox.position.x + _multiroom__WEBPACK_IMPORTED_MODULE_0__["player"].hitbox.width <= door.position.x + door.width && _multiroom__WEBPACK_IMPORTED_MODULE_0__["player"].hitbox.position.x >= door.position.x && _multiroom__WEBPACK_IMPORTED_MODULE_0__["player"].hitbox.position.y + _multiroom__WEBPACK_IMPORTED_MODULE_0__["player"].hitbox.height >= door.position.y && _multiroom__WEBPACK_IMPORTED_MODULE_0__["player"].hitbox.position.y <= door.position.y + door.height) {
          _multiroom__WEBPACK_IMPORTED_MODULE_0__["player"].velocity.x = 0;
          _multiroom__WEBPACK_IMPORTED_MODULE_0__["player"].preventInput = true;
          _multiroom__WEBPACK_IMPORTED_MODULE_0__["player"].switchSprite('enterDoor');
          door.play();
          return;
        }
      }
      if (_multiroom__WEBPACK_IMPORTED_MODULE_0__["player"].velocity.y === 0) _multiroom__WEBPACK_IMPORTED_MODULE_0__["player"].velocity.y = -20;
      break;
    case 'a':
      keys.a.pressed = true;
      break;
    case 'd':
      keys.d.pressed = true;
      break;
  }
});
addEventListener('keyup', function (_ref2) {
  var key = _ref2.key;
  switch (key) {
    case 'a':
      keys.a.pressed = false;
      break;
    case 'd':
      keys.d.pressed = false;
      break;
  }
});

/***/ }),

/***/ "./assets/js/multiroom/utils.js":
/*!**************************************!*\
  !*** ./assets/js/multiroom/utils.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CollisionBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CollisionBlock */ "./assets/js/multiroom/CollisionBlock.js");

Array.prototype.parse2D = function () {
  var rows = [];
  for (var i = 0; i < this.length; i += 16) {
    rows.push(this.slice(i, i + 16));
  }
  return rows;
};
Array.prototype.createObjectsFrom2D = function () {
  var objects = [];
  this.forEach(function (row, y) {
    row.forEach(function (symbol, x) {
      if (symbol === 292 || symbol === 250) {
        // push a new collision into collisionblocks array
        objects.push(new _CollisionBlock__WEBPACK_IMPORTED_MODULE_0__["CollisionBlock"]({
          position: {
            x: x * 64,
            y: y * 64
          }
        }));
      }
    });
  });
  return objects;
};

/***/ })

/******/ });
//# sourceMappingURL=multiroom.bundle.js.map