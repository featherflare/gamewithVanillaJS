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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/pacman.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/images/pacman/block.png":
/*!****************************************!*\
  !*** ./assets/images/pacman/block.png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "837ce00cf5fe953590b8faa0c5f463ed.png");

/***/ }),

/***/ "./assets/images/pacman/capBottom.png":
/*!********************************************!*\
  !*** ./assets/images/pacman/capBottom.png ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "475eced911482f3b456f605843f9b1e9.png");

/***/ }),

/***/ "./assets/images/pacman/capLeft.png":
/*!******************************************!*\
  !*** ./assets/images/pacman/capLeft.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0844a08110274effeedcb4269305bcbb.png");

/***/ }),

/***/ "./assets/images/pacman/capRight.png":
/*!*******************************************!*\
  !*** ./assets/images/pacman/capRight.png ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "64655c1841eabd3730bb6fffb7727c75.png");

/***/ }),

/***/ "./assets/images/pacman/capTop.png":
/*!*****************************************!*\
  !*** ./assets/images/pacman/capTop.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "8d7dc706c68dd179dee57e553c0a48d3.png");

/***/ }),

/***/ "./assets/images/pacman/pipeConnectorBottom.png":
/*!******************************************************!*\
  !*** ./assets/images/pacman/pipeConnectorBottom.png ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "5759f41ddbf69dbd4cd3f2120ae60ff4.png");

/***/ }),

/***/ "./assets/images/pacman/pipeConnectorLeft.png":
/*!****************************************************!*\
  !*** ./assets/images/pacman/pipeConnectorLeft.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a13dc575c4192d98edb17b696c2d62bd.png");

/***/ }),

/***/ "./assets/images/pacman/pipeConnectorRight.png":
/*!*****************************************************!*\
  !*** ./assets/images/pacman/pipeConnectorRight.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "4af5644112c21ada65f912445451fbd8.png");

/***/ }),

/***/ "./assets/images/pacman/pipeConnectorTop.png":
/*!***************************************************!*\
  !*** ./assets/images/pacman/pipeConnectorTop.png ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "eb2089e1044a6e28e126d658787c901b.png");

/***/ }),

/***/ "./assets/images/pacman/pipeCorner1.png":
/*!**********************************************!*\
  !*** ./assets/images/pacman/pipeCorner1.png ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ecb073ccdcb62c4b00d1c2267c7dd39e.png");

/***/ }),

/***/ "./assets/images/pacman/pipeCorner2.png":
/*!**********************************************!*\
  !*** ./assets/images/pacman/pipeCorner2.png ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "04c8bbf54d28ea758ba42592ddd115e7.png");

/***/ }),

/***/ "./assets/images/pacman/pipeCorner3.png":
/*!**********************************************!*\
  !*** ./assets/images/pacman/pipeCorner3.png ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c4b88e63e1ee520fcfad406cb54a2f40.png");

/***/ }),

/***/ "./assets/images/pacman/pipeCorner4.png":
/*!**********************************************!*\
  !*** ./assets/images/pacman/pipeCorner4.png ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "6a13d68e60846307cd891a4ca77faada.png");

/***/ }),

/***/ "./assets/images/pacman/pipeCross.png":
/*!********************************************!*\
  !*** ./assets/images/pacman/pipeCross.png ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f9b0276f6ca5131cfefc0d69d4d61258.png");

/***/ }),

/***/ "./assets/images/pacman/pipeHorizontal.png":
/*!*************************************************!*\
  !*** ./assets/images/pacman/pipeHorizontal.png ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "14ec8a40ca6a166f28d81ab681aa38d5.png");

/***/ }),

/***/ "./assets/images/pacman/pipeVertical.png":
/*!***********************************************!*\
  !*** ./assets/images/pacman/pipeVertical.png ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f70e7e7e2120b81f445f0ecf0725ab32.png");

/***/ }),

/***/ "./assets/js/pacman.js":
/*!*****************************!*\
  !*** ./assets/js/pacman.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _images_pacman_pipeHorizontal_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/pacman/pipeHorizontal.png */ "./assets/images/pacman/pipeHorizontal.png");
/* harmony import */ var _images_pacman_pipeVertical_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/pacman/pipeVertical.png */ "./assets/images/pacman/pipeVertical.png");
/* harmony import */ var _images_pacman_pipeCorner1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/pacman/pipeCorner1.png */ "./assets/images/pacman/pipeCorner1.png");
/* harmony import */ var _images_pacman_pipeCorner2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/pacman/pipeCorner2.png */ "./assets/images/pacman/pipeCorner2.png");
/* harmony import */ var _images_pacman_pipeCorner3_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/pacman/pipeCorner3.png */ "./assets/images/pacman/pipeCorner3.png");
/* harmony import */ var _images_pacman_pipeCorner4_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/pacman/pipeCorner4.png */ "./assets/images/pacman/pipeCorner4.png");
/* harmony import */ var _images_pacman_pipeConnectorTop_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/pacman/pipeConnectorTop.png */ "./assets/images/pacman/pipeConnectorTop.png");
/* harmony import */ var _images_pacman_pipeConnectorLeft_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/pacman/pipeConnectorLeft.png */ "./assets/images/pacman/pipeConnectorLeft.png");
/* harmony import */ var _images_pacman_pipeConnectorRight_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/pacman/pipeConnectorRight.png */ "./assets/images/pacman/pipeConnectorRight.png");
/* harmony import */ var _images_pacman_pipeConnectorBottom_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/pacman/pipeConnectorBottom.png */ "./assets/images/pacman/pipeConnectorBottom.png");
/* harmony import */ var _images_pacman_capLeft_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../images/pacman/capLeft.png */ "./assets/images/pacman/capLeft.png");
/* harmony import */ var _images_pacman_capRight_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../images/pacman/capRight.png */ "./assets/images/pacman/capRight.png");
/* harmony import */ var _images_pacman_capTop_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../images/pacman/capTop.png */ "./assets/images/pacman/capTop.png");
/* harmony import */ var _images_pacman_capBottom_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../images/pacman/capBottom.png */ "./assets/images/pacman/capBottom.png");
/* harmony import */ var _images_pacman_pipeCross_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../images/pacman/pipeCross.png */ "./assets/images/pacman/pipeCross.png");
/* harmony import */ var _images_pacman_block_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../images/pacman/block.png */ "./assets/images/pacman/block.png");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
















var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
var scoreEl = document.getElementById('scoreEl');
var liveEl = document.getElementById('liveEl');
var screenPauseEl = document.getElementById('screenPauseEl');
var textEl = document.getElementById('textEl');
var btnEl = document.getElementById('btnEl');
var restartEl = document.getElementById('restartEl');
var resumeEl = document.getElementById('resumeEl');
var newEl = document.getElementById('newEl');
canvas.width = 19 * 40;
canvas.height = 20 * 40;
var Boundary = /*#__PURE__*/function () {
  function Boundary(_ref) {
    var position = _ref.position,
      image = _ref.image;
    _classCallCheck(this, Boundary);
    this.position = position;
    this.width = 40;
    this.height = 40;
    this.image = image;
  }
  _createClass(Boundary, [{
    key: "draw",
    value: function draw() {
      // c.fillStyle = 'blue'
      // c.fillRect(this.position.x, this.position.y, this.width, this.height)
      c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }
  }]);
  return Boundary;
}();
_defineProperty(Boundary, "width", 40);
_defineProperty(Boundary, "height", 40);
var Player = /*#__PURE__*/function () {
  function Player(_ref2) {
    var position = _ref2.position,
      velocity = _ref2.velocity;
    _classCallCheck(this, Player);
    this.position = position;
    this.velocity = velocity;
    this.radius = 15;
    this.radians = 0.75;
    this.openRate = 0.06;
    this.rotation = 0;
  }
  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      c.save();
      c.translate(this.position.x, this.position.y);
      c.rotate(Math.PI * this.rotation);
      c.translate(-this.position.x, -this.position.y);
      c.beginPath();
      c.arc(this.position.x, this.position.y, this.radius, this.radians, Math.PI * 2 - this.radians);
      c.lineTo(this.position.x, this.position.y);
      c.fillStyle = 'yellow';
      c.fill();
      c.closePath();
      c.restore();
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
      if (this.radians < 0 || this.radians > 0.75) {
        this.openRate = -this.openRate;
      }
      this.radians += this.openRate;
    }
  }]);
  return Player;
}();
var Ghost = /*#__PURE__*/function () {
  function Ghost(_ref3) {
    var position = _ref3.position,
      velocity = _ref3.velocity,
      _ref3$color = _ref3.color,
      color = _ref3$color === void 0 ? 'red' : _ref3$color;
    _classCallCheck(this, Ghost);
    this.position = position;
    this.velocity = velocity;
    this.radius = 15;
    this.color = color;
    this.prevCollisions = [];
    this.speed = 2;
    this.scared = false;
    this.expried = false;
  }
  _createClass(Ghost, [{
    key: "draw",
    value: function draw() {
      c.beginPath();
      c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
      c.fillStyle = this.scared ? this.expried ? this.color : 'blue' : this.color;
      c.fill();
      c.closePath();
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
    }
  }]);
  return Ghost;
}();
_defineProperty(Ghost, "speed", 2);
var Pellet = /*#__PURE__*/function () {
  function Pellet(_ref4) {
    var position = _ref4.position;
    _classCallCheck(this, Pellet);
    this.position = position;
    this.radius = 3;
  }
  _createClass(Pellet, [{
    key: "draw",
    value: function draw() {
      c.beginPath();
      c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
      c.fillStyle = 'white';
      c.fill();
      c.closePath();
    }
  }]);
  return Pellet;
}();
var PowerUp = /*#__PURE__*/function () {
  function PowerUp(_ref5) {
    var position = _ref5.position;
    _classCallCheck(this, PowerUp);
    this.position = position;
    this.radius = 8;
  }
  _createClass(PowerUp, [{
    key: "draw",
    value: function draw() {
      c.beginPath();
      c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
      c.fillStyle = 'white';
      c.fill();
      c.closePath();
    }
  }]);
  return PowerUp;
}();
var Score = /*#__PURE__*/function () {
  function Score(_ref6) {
    var position = _ref6.position,
      velocity = _ref6.velocity,
      score = _ref6.score;
    _classCallCheck(this, Score);
    this.position = position;
    this.velocity = velocity;
    this.opacity = 1;
    this.score = score;
  }
  _createClass(Score, [{
    key: "draw",
    value: function draw() {
      c.save();
      c.globalAlpha = this.opacity;
      c.font = '14px sans-serif';
      c.fillStyle = 'white';
      c.textAlign = 'center';
      c.fillText(this.score, this.position.x, this.position.y);
      c.restore();
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.opacity -= 0.02;
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
    }
  }]);
  return Score;
}();
var pellets = [];
var boundaries = [];
var powerUps = [];
var scores = [];
var ghosts = [];
var player = new Player({
  position: {
    x: Boundary.width + Boundary.width / 2,
    y: Boundary.height + Boundary.height / 2
  },
  velocity: {
    x: 0,
    y: 0
  }
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
var status = {
  isPause: false,
  isOver: false
};
var lastKey = '';
var score = 0;
var live = 3;
var plusScore = 10;
var level = 0;
var map = [['1', '-', '-', '-', '-', '-', '-', '5', '-', '-', '-', '5', '-', '-', '-', '-', '-', '-', '2'], ['|', ' ', '.', '.', '.', '.', '.', '|', '.', '.', '.', '|', '.', '.', '.', '.', '.', '.', '|'], ['|', '.', '[', ']', '.', '^', '.', '_', '.', '^', '.', '_', '.', '^', '.', '[', ']', '.', '|'], ['|', '.', '.', 'p', '.', '|', '.', '.', '.', '|', '.', '.', '.', '|', '.', 'p', '.', '.', '|'], ['|', '.', '1', ']', '.', '4', '-', ']', '.', '|', '.', '[', '-', '3', '.', '[', '2', '.', '|'], ['|', '.', '|', '.', '.', '.', '.', '.', '.', '|', '.', '.', '.', '.', '.', '.', '|', '.', '|'], ['_', '.', '_', '.', '[', ']', '.', '[', '-', '7', '-', ']', '.', '[', ']', '.', '_', '.', '_'], [' ', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', ' '], ['^', '.', '[', ']', '.', '^', '.', '1', ']', ' ', '[', '2', '.', '^', '.', '[', ']', '.', '^'], ['|', '.', '.', '.', '.', '|', '.', '|', ' ', ' ', ' ', '|', '.', '|', '.', '.', '.', '.', '|'], ['|', '.', '[', '2', '.', '|', '.', '6', '-', '-', '-', '8', '.', '|', '.', '1', ']', '.', '|'], ['|', '.', '.', '|', '.', '_', '.', '_', '.', '.', '.', '_', '.', '_', '.', '|', '.', '.', '|'], ['4', ']', '.', '|', '.', '.', '.', '.', '.', '^', '.', '.', '.', '.', '.', '|', '.', '[', '3'], [' ', '.', '.', '|', '.', '1', '-', ']', '.', '_', '.', '[', '-', '2', '.', '|', '.', '.', ' '], ['^', '.', '[', '3', '.', '|', '.', '.', '.', '.', '.', '.', '.', '|', '.', '4', ']', '.', '^'], ['|', '.', '.', '.', '.', '|', '.', '^', '.', '^', '.', '^', '.', '|', '.', '.', '.', '.', '|'], ['|', '.', '^', '.', '[', '3', '.', '|', '.', '_', '.', '|', '.', '4', ']', '.', '^', '.', '|'], ['|', '.', '_', 'p', '.', '.', '.', '_', '.', '.', '.', '_', '.', '.', '.', 'p', '_', '.', '|'], ['|', '.', '.', '.', '1', '2', '.', '.', '.', '^', '.', '.', '.', '1', '2', '.', '.', '.', '|'], ['4', '-', '-', '-', '7', '7', '-', '-', '-', '7', '-', '-', '-', '7', '7', '-', '-', '-', '3']];
function createImage(src) {
  var image = new Image();
  image.src = src;
  return image;
}
function generateMap() {
  if (level < 4) {
    level++;
  }
  console.log(level);
  map.forEach(function (row, i) {
    row.forEach(function (symbol, j) {
      switch (symbol) {
        case '-':
          boundaries.push(new Boundary({
            position: {
              x: Boundary.width * j,
              y: Boundary.height * i
            },
            image: createImage(_images_pacman_pipeHorizontal_png__WEBPACK_IMPORTED_MODULE_0__["default"])
          }));
          break;
        case '|':
          boundaries.push(new Boundary({
            position: {
              x: Boundary.width * j,
              y: Boundary.height * i
            },
            image: createImage(_images_pacman_pipeVertical_png__WEBPACK_IMPORTED_MODULE_1__["default"])
          }));
          break;
        case '1':
          boundaries.push(new Boundary({
            position: {
              x: Boundary.width * j,
              y: Boundary.height * i
            },
            image: createImage(_images_pacman_pipeCorner1_png__WEBPACK_IMPORTED_MODULE_2__["default"])
          }));
          break;
        case '2':
          boundaries.push(new Boundary({
            position: {
              x: Boundary.width * j,
              y: Boundary.height * i
            },
            image: createImage(_images_pacman_pipeCorner2_png__WEBPACK_IMPORTED_MODULE_3__["default"])
          }));
          break;
        case '3':
          boundaries.push(new Boundary({
            position: {
              x: Boundary.width * j,
              y: Boundary.height * i
            },
            image: createImage(_images_pacman_pipeCorner3_png__WEBPACK_IMPORTED_MODULE_4__["default"])
          }));
          break;
        case '4':
          boundaries.push(new Boundary({
            position: {
              x: Boundary.width * j,
              y: Boundary.height * i
            },
            image: createImage(_images_pacman_pipeCorner4_png__WEBPACK_IMPORTED_MODULE_5__["default"])
          }));
          break;
        case '5':
          boundaries.push(new Boundary({
            position: {
              x: Boundary.width * j,
              y: Boundary.height * i
            },
            image: createImage(_images_pacman_pipeConnectorBottom_png__WEBPACK_IMPORTED_MODULE_9__["default"])
          }));
          break;
        case '6':
          boundaries.push(new Boundary({
            position: {
              x: Boundary.width * j,
              y: Boundary.height * i
            },
            image: createImage(_images_pacman_pipeConnectorRight_png__WEBPACK_IMPORTED_MODULE_8__["default"])
          }));
          break;
        case '7':
          boundaries.push(new Boundary({
            position: {
              x: Boundary.width * j,
              y: Boundary.height * i
            },
            image: createImage(_images_pacman_pipeConnectorTop_png__WEBPACK_IMPORTED_MODULE_6__["default"])
          }));
          break;
        case '8':
          boundaries.push(new Boundary({
            position: {
              x: Boundary.width * j,
              y: Boundary.height * i
            },
            image: createImage(_images_pacman_pipeConnectorLeft_png__WEBPACK_IMPORTED_MODULE_7__["default"])
          }));
          break;
        case 'b':
          boundaries.push(new Boundary({
            position: {
              x: Boundary.width * j,
              y: Boundary.height * i
            },
            image: createImage(_images_pacman_block_png__WEBPACK_IMPORTED_MODULE_15__["default"])
          }));
          break;
        case '[':
          boundaries.push(new Boundary({
            position: {
              x: Boundary.width * j,
              y: Boundary.height * i
            },
            image: createImage(_images_pacman_capLeft_png__WEBPACK_IMPORTED_MODULE_10__["default"])
          }));
          break;
        case ']':
          boundaries.push(new Boundary({
            position: {
              x: Boundary.width * j,
              y: Boundary.height * i
            },
            image: createImage(_images_pacman_capRight_png__WEBPACK_IMPORTED_MODULE_11__["default"])
          }));
          break;
        case '^':
          boundaries.push(new Boundary({
            position: {
              x: Boundary.width * j,
              y: Boundary.height * i
            },
            image: createImage(_images_pacman_capTop_png__WEBPACK_IMPORTED_MODULE_12__["default"])
          }));
          break;
        case '_':
          boundaries.push(new Boundary({
            position: {
              x: Boundary.width * j,
              y: Boundary.height * i
            },
            image: createImage(_images_pacman_capBottom_png__WEBPACK_IMPORTED_MODULE_13__["default"])
          }));
          break;
        case '+':
          boundaries.push(new Boundary({
            position: {
              x: Boundary.width * j,
              y: Boundary.height * i
            },
            image: createImage(_images_pacman_pipeCross_png__WEBPACK_IMPORTED_MODULE_14__["default"])
          }));
          break;
        case '.':
          pellets.push(new Pellet({
            position: {
              x: Boundary.width * j + Boundary.width / 2,
              y: Boundary.height * i + Boundary.height / 2
            }
          }));
          break;
        case 'p':
          powerUps.push(new PowerUp({
            position: {
              x: Boundary.width * j + Boundary.width / 2,
              y: Boundary.height * i + Boundary.height / 2
            }
          }));
          break;
      }
    });
  });
  var color = ['red', 'pink', 'lightblue', 'orange'];
  for (var i = 0; i < level; i++) {
    ghosts.pop();
  }
  console.log(ghosts);
  for (var i = 0; i < level; i++) {
    ghosts.push(new Ghost({
      position: {
        x: Boundary.width * 9 + Boundary.width / 2,
        y: Boundary.height * 9 + Boundary.height / 2
      },
      velocity: {
        x: 0,
        y: -Ghost.speed
      },
      color: color[i]
    }));
  }
}
generateMap();
function circleCollidesWithRectangle(_ref7) {
  var circle = _ref7.circle,
    rectangle = _ref7.rectangle;
  var padding = Boundary.width / 2 - circle.radius - 1;
  return circle.position.y - circle.radius + circle.velocity.y <= rectangle.position.y + rectangle.height + padding && circle.position.x + circle.radius + circle.velocity.x >= rectangle.position.x - padding && circle.position.y + circle.radius + circle.velocity.y >= rectangle.position.y - padding && circle.position.x - circle.radius + circle.velocity.x <= rectangle.position.x + rectangle.width + padding;
}
function pipeTeleport(_ref8) {
  var object = _ref8.object;
  var positionY = object.position.y;
  object.position.y = positionY;
  if (object.position.x - object.radius <= 10) {
    object.velocity.y = 0;
    object.position.x = 21 * 40 - object.radius - 40;
  } else if (object.position.x + object.radius >= 21 * 40 - 10) {
    object.velocity.y = 0;
    object.position.x = object.radius + 40;
  }
}
var frame = 0;
var animationId;
function animate() {
  if (status.isPause || status.isOver) {
    screenPauseEl.style.display = 'block';
    if (status.isPause && !status.isOver) {
      newEl.style.display = 'none';
      textEl.innerHTML = 'Pause Game';
    }
    if (!status.isPause && status.isOver) {
      resumeEl.style.display = 'none';
      restartEl.style.display = 'none';
      textEl.innerHTML = 'Game Over';
    }
    return;
  } else {
    screenPauseEl.style.display = 'none';
  }
  animationId = requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  if (keys.w.pressed && lastKey === 'w') {
    for (var i = 0; i < boundaries.length; i++) {
      var boundary = boundaries[i];
      if (circleCollidesWithRectangle({
        circle: _objectSpread(_objectSpread({}, player), {}, {
          velocity: {
            x: 0,
            y: -5
          }
        }),
        rectangle: boundary
      })) {
        player.velocity.y = 0;
        break;
      } else {
        player.velocity.y = -5;
      }
    }
  } else if (keys.a.pressed && lastKey === 'a') {
    for (var _i = 0; _i < boundaries.length; _i++) {
      var _boundary = boundaries[_i];
      if (circleCollidesWithRectangle({
        circle: _objectSpread(_objectSpread({}, player), {}, {
          velocity: {
            x: -5,
            y: 0
          }
        }),
        rectangle: _boundary
      })) {
        player.velocity.x = 0;
        break;
      } else {
        player.velocity.x = -5;
      }
    }
  } else if (keys.s.pressed && lastKey === 's') {
    for (var _i2 = 0; _i2 < boundaries.length; _i2++) {
      var _boundary2 = boundaries[_i2];
      if (circleCollidesWithRectangle({
        circle: _objectSpread(_objectSpread({}, player), {}, {
          velocity: {
            x: 0,
            y: 5
          }
        }),
        rectangle: _boundary2
      })) {
        player.velocity.y = 0;
        break;
      } else {
        player.velocity.y = 5;
      }
    }
  } else if (keys.d.pressed && lastKey === 'd') {
    for (var _i3 = 0; _i3 < boundaries.length; _i3++) {
      var _boundary3 = boundaries[_i3];
      if (circleCollidesWithRectangle({
        circle: _objectSpread(_objectSpread({}, player), {}, {
          velocity: {
            x: 5,
            y: 0
          }
        }),
        rectangle: _boundary3
      })) {
        player.velocity.x = 0;
        break;
      } else {
        player.velocity.x = 5;
      }
    }
  }

  // detect collision between ghost and player
  for (var _i4 = ghosts.length - 1; 0 <= _i4; _i4--) {
    var ghost = ghosts[_i4];
    //ghost touches player
    if (Math.hypot(ghost.position.x - player.position.x, ghost.position.y - player.position.y) < ghost.radius + player.radius) {
      if (ghost.scared) {
        ghosts.splice(_i4, 1);
        score += 500;
        scoreEl.innerHTML = score;
        scores.push(new Score({
          position: {
            x: ghost.position.x,
            y: ghost.position.y
          },
          velocity: {
            x: 0,
            y: -0.05
          },
          score: '500'
        }));
      } else {
        if (live > 0) {
          live -= 1;
          liveEl.innerHTML = live;
          player.position.x = Boundary.width + Boundary.width / 2;
          player.position.y = Boundary.height + Boundary.height / 2;
          player.velocity.x = 0;
          player.velocity.y = 0;
        } else {
          status.isOver = true;
          screenPauseEl.style.display = 'block';
          resumeEl.style.display = 'none';
          restartEl.style.display = 'none';
          textEl.innerHTML = 'Game Over';
          cancelAnimationFrame(animationId);
        }
      }
    }
  }

  //win condition goes here
  if (pellets.length === 0) {
    generateMap();
  }

  // power up here
  for (var _i5 = powerUps.length - 1; 0 <= _i5; _i5--) {
    var powerUp = powerUps[_i5];
    powerUp.draw();

    // player collides with power up
    if (Math.hypot(powerUp.position.x - player.position.x, powerUp.position.y - player.position.y) < powerUp.radius + player.radius) {
      powerUps.splice(_i5, 1);

      // make ghosts scared
      ghosts.forEach(function (ghost) {
        ghost.scared = true;
        plusScore = 50;
        setTimeout(function () {
          ghost.expried = true;
        }, 2000);
        var color = ghost.color;
        setTimeout(function () {
          plusScore = 10;
          ghost.color = color;
          ghost.scared = false;
          ghost.expried = false;
        }, 3000);
      });
    }
  }

  // touch pellet here
  for (var _i6 = pellets.length - 1; 0 <= _i6; _i6--) {
    var pellet = pellets[_i6];
    pellet.draw();
    if (Math.hypot(pellet.position.x - player.position.x, pellet.position.y - player.position.y) < pellet.radius + player.radius) {
      pellets.splice(_i6, 1);
      score += plusScore;
      scoreEl.innerHTML = score;
      scores.push(new Score({
        position: {
          x: pellet.position.x,
          y: pellet.position.y
        },
        velocity: {
          x: 0,
          y: -0.05
        },
        score: "".concat(plusScore)
      }));
    }
  }
  scores.forEach(function (score, i) {
    if (score.opacity <= 0) {
      setTimeout(function () {
        scores.splice(i, 1);
      }, 0);
    } else score.update();
  });
  boundaries.forEach(function (boundary) {
    boundary.draw();
    if (circleCollidesWithRectangle({
      circle: player,
      rectangle: boundary
    })) {
      player.velocity.y = 0;
      player.velocity.x = 0;
    }
  });
  player.update();
  ghosts.forEach(function (ghost) {
    if (ghost.expried) {
      if (frame % 10 == 5) {
        console.log('1');
        ghost.color = 'blue';
      } else if (frame % 10 == 0) {
        console.log('2');
        ghost.color = 'white';
      }
    }
    ghost.update();
    var collisions = [];
    boundaries.forEach(function (boundary) {
      if (!collisions.includes('right') && circleCollidesWithRectangle({
        circle: _objectSpread(_objectSpread({}, ghost), {}, {
          velocity: {
            x: ghost.speed,
            y: 0
          }
        }),
        rectangle: boundary
      })) {
        collisions.push('right');
      }
      if (!collisions.includes('left') && circleCollidesWithRectangle({
        circle: _objectSpread(_objectSpread({}, ghost), {}, {
          velocity: {
            x: -ghost.speed,
            y: 0
          }
        }),
        rectangle: boundary
      })) {
        collisions.push('left');
      }
      if (!collisions.includes('up') && circleCollidesWithRectangle({
        circle: _objectSpread(_objectSpread({}, ghost), {}, {
          velocity: {
            x: 0,
            y: -ghost.speed
          }
        }),
        rectangle: boundary
      })) {
        collisions.push('up');
      }
      if (!collisions.includes('down') && circleCollidesWithRectangle({
        circle: _objectSpread(_objectSpread({}, ghost), {}, {
          velocity: {
            x: 0,
            y: ghost.speed
          }
        }),
        rectangle: boundary
      })) {
        collisions.push('down');
      }
    });
    if (collisions.length > ghost.prevCollisions.length) ghost.prevCollisions = collisions;
    if (ghost.position.x - ghost.radius <= 5) {
      ghost.prevCollisions = [];
      ghost.velocity.x = -5;
      ghost.position.x = 21 * 40 - ghost.radius - 40;
    } else if (ghost.position.x + ghost.radius >= 20 * 40 - 5) {
      ghost.prevCollisions = [];
      ghost.velocity.x = 5;
      ghost.position.x = 0 + ghost.radius + 40;
    }
    if (JSON.stringify(collisions) != JSON.stringify(ghost.prevCollisions)) {
      if (ghost.velocity.x > 0) ghost.prevCollisions.push('right');else if (ghost.velocity.x < 0) ghost.prevCollisions.push('left');else if (ghost.velocity.y < 0) ghost.prevCollisions.push('up');else if (ghost.velocity.y > 0) ghost.prevCollisions.push('down');
      var pathways = ghost.prevCollisions.filter(function (collision) {
        return !collisions.includes(collision);
      });
      var direction = pathways[Math.floor(Math.random() * pathways.length)];
      switch (direction) {
        case 'down':
          ghost.velocity.y = ghost.speed;
          ghost.velocity.x = 0;
          break;
        case 'up':
          ghost.velocity.y = -ghost.speed;
          ghost.velocity.x = 0;
          break;
        case 'right':
          ghost.velocity.y = 0;
          ghost.velocity.x = ghost.speed;
          break;
        case 'left':
          ghost.velocity.y = 0;
          ghost.velocity.x = -ghost.speed;
          break;
      }
      ghost.prevCollisions = [];
    }
  });
  if (player.velocity.x > 0) player.rotation = 0;else if (player.velocity.x < 0) player.rotation = 1;else if (player.velocity.y > 0) player.rotation = 0.5;else if (player.velocity.y < 0) player.rotation = 1.5;
  pipeTeleport({
    object: player
  });
  frame++;
} // end of animate()

animate();
addEventListener('keydown', function (_ref9) {
  var key = _ref9.key;
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
    case ' ':
      status.isPause = !status.isPause;
      if (!status.isPause) {
        requestAnimationFrame(animate);
      }
      break;
  }
});
addEventListener('keyup', function (_ref10) {
  var key = _ref10.key;
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
    case ' ':
      break;
  }
});
resumeEl.addEventListener('click', function () {
  status.isPause = !status.isPause;
  requestAnimationFrame(animate);
});
restartEl.addEventListener('click', function () {
  status.isOver = false;
  status.isPause = false;
  player.velocity.x = 0;
  player.velocity.y = 0;
  player.position.x = Boundary.width + Boundary.width / 2;
  player.position.y = Boundary.height + Boundary.height / 2;
  player.rotation = 0;
  score = 0;
  level = 0;
  generateMap();
  requestAnimationFrame(animate);
});
newEl.addEventListener('click', function () {
  status.isOver = false;
  status.isPause = false;
  player.velocity.x = 0;
  player.velocity.y = 0;
  player.position.x = Boundary.width + Boundary.width / 2;
  player.position.y = Boundary.height + Boundary.height / 2;
  player.rotation = 0;
  score = 0;
  level = 0;
  generateMap();
  requestAnimationFrame(animate);
});

/***/ })

/******/ });
//# sourceMappingURL=pacman.bundle.js.map