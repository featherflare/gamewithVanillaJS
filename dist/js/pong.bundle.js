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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/pong.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/pong.js":
/*!***************************!*\
  !*** ./assets/js/pong.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
var Paddle = /*#__PURE__*/function () {
  function Paddle(_ref) {
    var position = _ref.position;
    _classCallCheck(this, Paddle);
    this.position = position;
    this.velocity = {
      x: 0,
      y: 0
    };
    this.width = 10;
    this.height = 100;
  }
  _createClass(Paddle, [{
    key: "draw",
    value: function draw() {
      c.fillStyle = 'white';
      c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      if (this.position.y + this.velocity.y > 0 && this.position.y + this.height + this.velocity.y < canvas.height) this.position.y += this.velocity.y;
    }
  }]);
  return Paddle;
}();
var Ball = /*#__PURE__*/function () {
  function Ball(_ref2) {
    var position = _ref2.position;
    _classCallCheck(this, Ball);
    this.position = position;
    var speed = 2;
    var direction = {
      x: Math.random() - 0.5 >= 0 ? -speed : speed,
      y: Math.random() - 0.5 >= 0 ? -speed : speed
    };
    this.velocity = {
      x: direction.x,
      y: direction.y
    };
    this.radius = 10;
  }
  _createClass(Ball, [{
    key: "draw",
    value: function draw() {
      c.fillStyle = 'white';
      c.fillRect(this.position.x, this.position.y, this.radius, this.radius);
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      var rightSide = this.position.x + this.radius + this.velocity.x;
      var leftSide = this.position.x + this.velocity.x;
      var topSide = this.position.y + this.radius + this.velocity.y;
      var bottomSide = this.position.y + this.velocity.y;
      if (leftSide <= paddle1.position.x + paddle1.width && bottomSide >= paddle1.position.y && topSide <= paddle1.position.y + paddle1.height) {
        this.velocity.x = -this.velocity.x;
      }
      if (rightSide >= paddle2.position.x && bottomSide >= paddle2.position.y && topSide <= paddle2.position.y + paddle2.height) {
        this.velocity.x = -this.velocity.x;
      }
      if (topSide >= canvas.height || bottomSide <= 0) {
        this.velocity.y = -this.velocity.y;
      }
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
    }
  }]);
  return Ball;
}();
var paddle1 = new Paddle({
  position: {
    x: 10,
    y: 100
  }
});
var paddle2 = new Paddle({
  position: {
    x: canvas.width - 10 * 2,
    y: 100
  }
});
var ball = new Ball({
  position: {
    x: canvas.width / 2,
    y: canvas.height / 2
  }
});
function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = 'black';
  c.fillRect(0, 0, canvas.width, canvas.height);
  paddle1.update();
  paddle2.update();
  ball.update();
}
animate();
addEventListener('keydown', function (_ref3) {
  var key = _ref3.key;
  var speed = 6;
  switch (key) {
    case 'w':
      paddle1.velocity.y = -speed;
      break;
    case 's':
      paddle1.velocity.y = speed;
      break;
    case 'ArrowUp':
      paddle2.velocity.y = -speed;
      break;
    case 'ArrowDown':
      paddle2.velocity.y = speed;
      break;
  }
});

/***/ })

/******/ });
//# sourceMappingURL=pong.bundle.js.map