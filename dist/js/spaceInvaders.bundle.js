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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/spaceInvaders.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/images/spaceInvaders/invader.png":
/*!*************************************************!*\
  !*** ./assets/images/spaceInvaders/invader.png ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "4793e7f635a6f442db1aefdfa44b9f2b.png");

/***/ }),

/***/ "./assets/images/spaceInvaders/spaceship.png":
/*!***************************************************!*\
  !*** ./assets/images/spaceInvaders/spaceship.png ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "52a211ddafab2140bf3ab40d76be1e79.png");

/***/ }),

/***/ "./assets/js/spaceInvaders.js":
/*!************************************!*\
  !*** ./assets/js/spaceInvaders.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _images_spaceInvaders_spaceship_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/spaceInvaders/spaceship.png */ "./assets/images/spaceInvaders/spaceship.png");
/* harmony import */ var _images_spaceInvaders_invader_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/spaceInvaders/invader.png */ "./assets/images/spaceInvaders/invader.png");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var canvas = document.querySelector('canvas');
var scoreEl = document.querySelector('#scoreEl');
var c = canvas.getContext('2d');
canvas.width = 1024;
canvas.height = 576;
var Player = /*#__PURE__*/function () {
  function Player() {
    var _this = this;
    _classCallCheck(this, Player);
    this.velocity = {
      x: 0,
      y: 0
    };
    this.rotation = 0;
    this.opacity = 1;
    var image = new Image();
    image.src = _images_spaceInvaders_spaceship_png__WEBPACK_IMPORTED_MODULE_0__["default"];
    image.onload = function () {
      var scale = 0.15;
      _this.image = image;
      _this.width = image.width * scale;
      _this.height = image.height * scale;
      _this.position = {
        x: canvas.width / 2 - _this.width / 2,
        y: canvas.height - _this.height - 20
      };
    };
  }
  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      // c.fillStyle = 'red'
      // c.fillRect(this.position.x, this.position.y, this.width, this.height)
      c.save();
      c.globalAlpha = this.opacity;
      c.translate(player.position.x + player.width / 2, player.position.y + player.height / 2);
      c.rotate(this.rotation);
      c.translate(-player.position.x - player.width / 2, -player.position.y - player.height / 2);
      c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
      c.restore();
    }
  }, {
    key: "update",
    value: function update() {
      if (this.image) {
        this.draw();
        this.position.x += this.velocity.x;
      }
    }
  }]);
  return Player;
}();
var Projectile = /*#__PURE__*/function () {
  function Projectile(_ref) {
    var position = _ref.position,
      velocity = _ref.velocity;
    _classCallCheck(this, Projectile);
    this.position = position;
    this.velocity = velocity;
    this.radius = 3;
  }
  _createClass(Projectile, [{
    key: "draw",
    value: function draw() {
      c.beginPath();
      c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
      c.fillStyle = 'red';
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
  return Projectile;
}();
var Particle = /*#__PURE__*/function () {
  function Particle(_ref2) {
    var position = _ref2.position,
      velocity = _ref2.velocity,
      radius = _ref2.radius,
      color = _ref2.color,
      fades = _ref2.fades;
    _classCallCheck(this, Particle);
    this.position = position;
    this.velocity = velocity;
    this.radius = radius;
    this.color = color;
    this.opcity = 1;
    this.fades = fades;
  }
  _createClass(Particle, [{
    key: "draw",
    value: function draw() {
      c.save();
      c.globalAlpha = this.opcity;
      c.beginPath();
      c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
      c.fillStyle = this.color;
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
      if (this.fades) this.opcity -= 0.01;
    }
  }]);
  return Particle;
}();
var InvaderProjectile = /*#__PURE__*/function () {
  function InvaderProjectile(_ref3) {
    var position = _ref3.position,
      velocity = _ref3.velocity;
    _classCallCheck(this, InvaderProjectile);
    this.position = position;
    this.velocity = velocity;
    this.width = 3;
    this.height = 10;
  }
  _createClass(InvaderProjectile, [{
    key: "draw",
    value: function draw() {
      c.fillStyle = 'white';
      c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
    }
  }]);
  return InvaderProjectile;
}();
var Invader = /*#__PURE__*/function () {
  function Invader(_ref4) {
    var _this2 = this;
    var position = _ref4.position;
    _classCallCheck(this, Invader);
    this.velocity = {
      x: 0,
      y: 0
    };
    var image = new Image();
    image.src = _images_spaceInvaders_invader_png__WEBPACK_IMPORTED_MODULE_1__["default"];
    image.onload = function () {
      var scale = 1;
      _this2.image = image;
      _this2.width = image.width * scale;
      _this2.height = image.height * scale;
      _this2.position = {
        x: position.x,
        y: position.y
      };
    };
  }
  _createClass(Invader, [{
    key: "draw",
    value: function draw() {
      // c.fillStyle = 'red'
      // c.fillRect(this.position.x, this.position.y, this.width, this.height)
      c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update(_ref5) {
      var velocity = _ref5.velocity;
      if (this.image) {
        this.draw();
        this.position.x += velocity.x;
        this.position.y += velocity.y;
      }
    }
  }, {
    key: "shoot",
    value: function shoot(invaderProjectile) {
      invaderProjectile.push(new InvaderProjectile({
        position: {
          x: this.position.x + this.width / 2,
          y: this.position.y + this.height
        },
        velocity: {
          x: 0,
          y: 5
        }
      }));
    }
  }]);
  return Invader;
}();
var Grid = /*#__PURE__*/function () {
  function Grid() {
    _classCallCheck(this, Grid);
    this.position = {
      x: 0,
      y: 0
    };
    this.velocity = {
      x: 2,
      y: 0
    };
    this.invaders = [];
    var columns = Math.floor(Math.random() * 10 + 2);
    var rows = Math.floor(Math.random() * 5 + 2);
    this.width = columns * 30;
    for (var x = 0; x < columns; x++) {
      for (var y = 0; y < rows; y++) {
        this.invaders.push(new Invader({
          position: {
            x: x * 30,
            y: y * 30
          }
        }));
      }
    }
  }
  _createClass(Grid, [{
    key: "update",
    value: function update() {
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
      this.velocity.y = 0;
      if (this.position.x + this.width >= canvas.width || this.position.x <= 0) {
        this.velocity.x = -this.velocity.x;
        this.velocity.y = 30;
      }
    }
  }]);
  return Grid;
}();
var Score = /*#__PURE__*/function () {
  function Score(_ref6) {
    var position = _ref6.position,
      velocity = _ref6.velocity;
    _classCallCheck(this, Score);
    this.position = position;
    this.velocity = velocity;
    this.opacity = 1;
  }
  _createClass(Score, [{
    key: "draw",
    value: function draw() {
      c.save();
      c.globalAlpha = this.opacity;
      c.font = '14px sans-serif';
      c.fillStyle = 'white';
      c.textAlign = 'center';
      c.fillText('100', this.position.x, this.position.y);
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
var Bomb = /*#__PURE__*/function () {
  function Bomb(_ref7) {
    var position = _ref7.position,
      velocity = _ref7.velocity,
      color = _ref7.color;
    _classCallCheck(this, Bomb);
    this.position = position;
    this.velocity = velocity;
    this.color = color;
    this.radius = 20;
    this.opacity = 1;
    this.radiusUpdate = 0;
    this.opacityUpdate = 0;
    this.explode = false;
  }
  _createClass(Bomb, [{
    key: "draw",
    value: function draw() {
      c.save();
      c.globalAlpha = this.opacity;
      c.beginPath();
      c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
      c.fillStyle = this.color;
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
      this.radius += this.radiusUpdate;
      this.opacity += this.opacityUpdate;
      if (this.position.x + this.radius >= canvas.width || this.position.x - this.radius <= 0) {
        this.velocity.x = -this.velocity.x;
      }
      if (this.position.y + this.radius >= canvas.height || this.position.y - this.radius <= 0) {
        this.velocity.y = -this.velocity.y;
      }
    }
  }]);
  return Bomb;
}();
var PowerUp = /*#__PURE__*/function () {
  function PowerUp(_ref8) {
    var position = _ref8.position,
      velocity = _ref8.velocity,
      color = _ref8.color;
    _classCallCheck(this, PowerUp);
    this.position = position;
    this.velocity = velocity;
    this.color = color;
    this.radius = 10;
    this.hit = false;
    this.opacity = 1;
  }
  _createClass(PowerUp, [{
    key: "draw",
    value: function draw() {
      c.save();
      c.globalAlpha = this.opacity;
      c.beginPath();
      c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
      c.fillStyle = this.color;
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
      if (this.hit) {
        projectiles.push(new Projectile({
          position: {
            x: player.position.x + player.width / 2,
            y: player.position.y
          },
          velocity: {
            x: 0,
            y: -15
          }
        }));
      }
    }
  }, {
    key: "shoot",
    value: function shoot(_ref9) {
      var hit = _ref9.hit;
      this.hit = hit;
    }
  }]);
  return PowerUp;
}();
var player = new Player();
var projectiles = [];
var grids = [];
var invaderProjectiles = [];
var scores = [];
var particles = [];
var bombs = [];
var powerUps = [];
var keys = {
  a: {
    pressed: false
  },
  d: {
    pressed: false
  },
  space: {
    pressed: false
  }
};
var frame = 0;
var randomInterval = Math.floor(Math.random() * 500) + 500;
var game = {
  over: false,
  active: true
};
var score = 0;
for (var i = 0; i < 100; i++) {
  particles.push(new Particle({
    position: {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height
    },
    velocity: {
      x: 0,
      y: 0.3
    },
    radius: Math.random() * 3,
    color: 'white'
  }));
}
function createParticles(_ref10) {
  var object = _ref10.object,
    color = _ref10.color,
    fades = _ref10.fades;
  for (var _i = 0; _i < 15; _i++) {
    particles.push(new Particle({
      position: {
        x: object.position.x + object.width / 2,
        y: object.position.y + object.height / 2
      },
      velocity: {
        x: (Math.random() - 0.5) * 2,
        y: (Math.random() - 0.5) * 2
      },
      radius: Math.random() * 3,
      color: color || '#baa0de',
      fades: fades
    }));
  }
}
function collisionCheckCircleRect(circle, rect) {
  var distx = Math.abs(circle.position.x - rect.position.x);
  var disty = Math.abs(circle.position.y - rect.position.y);
  if (distx > rect.width / 2 + circle.radius) {
    return false;
  }
  if (disty > rect.height / 2 + circle.radius) {
    return false;
  }
  if (distx <= rect.width / 2) {
    return true;
  }
  if (disty <= rect.height / 2) {
    return true;
  }
  var hypot = (distx - rect.width / 2) * (distx - rect.width / 2) + (disty - rect.height / 2) * (disty - rect.height / 2);
  return hypot <= circle.radius * circle.radius;
}
function animate() {
  if (!game.active) return;
  requestAnimationFrame(animate);
  c.fillStyle = 'black';
  c.fillRect(0, 0, canvas.width, canvas.height);
  player.update();
  particles.forEach(function (particle, i) {
    if (particle.position.y - particle.radius >= canvas.height) {
      particle.position.x = Math.random() * canvas.width;
      particle.position.y = particle.radius;
    }
    if (particle.opcity <= 0) {
      setTimeout(function () {
        particles.splice(i, 1);
      }, 0);
    } else particle.update();
  });
  scores.forEach(function (score, i) {
    if (score.opacity <= 0) {
      setTimeout(function () {
        scores.splice(i, 1);
      }, 0);
    } else score.update();
  });
  powerUps.forEach(function (powerUp, i) {
    if (powerUp.position.x >= canvas.width && powerUp.hit == false) {
      setTimeout(function () {
        powerUps.splice(i, 1);
      }, 0);
    } else {
      if (frame % 20 === 0) {
        powerUp.color = 'rgb(255,255,100)';
      } else if (frame % 20 === 10) {
        powerUp.color = 'yelow';
      }
      powerUp.update();
    }
    projectiles.forEach(function (projectile, i) {
      if (projectile.position.y - projectile.radius <= powerUp.position.y + powerUp.radius && projectile.position.x + projectile.radius >= powerUp.position.x - powerUp.radius && projectile.position.x - projectile.radius <= powerUp.position.x + powerUp.radius && projectile.position.y + projectile.radius >= powerUp.position.y - powerUp.radius) {
        powerUp.shoot({
          hit: true
        });
        powerUp.opacity = 0;
        powerUp.update();
        setTimeout(function () {
          powerUp.shoot({
            hit: false
          });
          powerUps.splice(i, 1);
        }, 2000);
        projectiles.splice(i, 1);
      }
    });
  });
  bombs.forEach(function (bomb, i) {
    if (bomb.opacity <= 0) {
      setTimeout(function () {
        bombs.splice(i, 1);
      }, 0);
    } else {
      if (frame % 20 === 0) {
        bomb.color = 'rgb(255,100,100)';
      } else if (frame % 20 === 10) {
        bomb.color = 'red';
      }
      bomb.update();
    }
    projectiles.forEach(function (projectile, i) {
      if (projectile.position.y - projectile.radius <= bomb.position.y + bomb.radius && projectile.position.x + projectile.radius >= bomb.position.x - bomb.radius && projectile.position.x - projectile.radius <= bomb.position.x + bomb.radius && projectile.position.y + projectile.radius >= bomb.position.y - bomb.radius) {
        bomb.radiusUpdate += 2;
        bomb.opacityUpdate -= 0.02;
        bomb.explode = true;
        projectiles.splice(i, 1);
      }
    });
  });
  invaderProjectiles.forEach(function (invaderProjectile, index) {
    if (invaderProjectile.position.y + invaderProjectile.height >= canvas.height) {
      setTimeout(function () {
        invaderProjectiles.splice(index, 1);
      }, 0);
    } else invaderProjectile.update();
    if (invaderProjectile.position.y + invaderProjectile.height >= player.position.y && invaderProjectile.position.x + invaderProjectile.width >= player.position.x && invaderProjectile.position.x <= player.position.x + player.width) {
      setTimeout(function () {
        invaderProjectiles.splice(index, 1);
        player.opacity = 0;
        game.over = true;
      }, 0);
      setTimeout(function () {
        game.active = false;
      }, 2000);
      createParticles({
        object: player,
        color: 'white',
        fades: true
      });
    }
  });
  projectiles.forEach(function (projectile, index) {
    if (projectile.position.y + projectile.radius <= 0) {
      setTimeout(function () {
        projectiles.splice(index, 1);
      }, 0);
    }
    projectile.update();
  });
  grids.forEach(function (grid, gridIndex) {
    grid.update();
    if (frame % 100 === 0 && grid.invaders.length > 0) {
      grid.invaders[Math.floor(Math.random() * grid.invaders.length)].shoot(invaderProjectiles);
    }
    grid.invaders.forEach(function (invader, i) {
      invader.update({
        velocity: grid.velocity
      });

      // bomb hit enemy
      bombs.forEach(function (bomb, i) {
        if (bomb.explode && collisionCheckCircleRect(bomb, invader)) {
          setTimeout(function () {
            var invaderFound = grid.invaders.find(function (invader2) {
              return invader2 === invader;
            });
            var bombFound = bombs.find(function (bomb2) {
              return bomb2 === bomb;
            });

            //remove invader
            if (invaderFound && bombFound) {
              score += 50;
              scoreEl.innerHTML = score;
              scores.push(new Score({
                position: {
                  x: invader.position.x + invader.width / 2,
                  y: invader.position.y + invader.height / 2
                },
                velocity: {
                  x: 0,
                  y: -0.05
                }
              }));
              createParticles({
                object: invader,
                fades: true
              });
              grid.invaders.splice(i, 1);
            }
          }, 0);
        }
      });

      // projectile hit enemy
      projectiles.forEach(function (projectile, j) {
        if (projectile.position.y - projectile.radius <= invader.position.y + invader.height && projectile.position.x + projectile.radius >= invader.position.x && projectile.position.x - projectile.radius <= invader.position.x + invader.width && projectile.position.y + projectile.radius >= invader.position.y) {
          setTimeout(function () {
            var invaderFound = grid.invaders.find(function (invader2) {
              return invader2 === invader;
            });
            var projectileFound = projectiles.find(function (projectile2) {
              return projectile2 === projectile;
            });

            //remove invader
            if (invaderFound && projectileFound) {
              score += 100;
              scoreEl.innerHTML = score;
              scores.push(new Score({
                position: {
                  x: invader.position.x + invader.width / 2,
                  y: invader.position.y + invader.height / 2
                },
                velocity: {
                  x: 0,
                  y: -0.05
                }
              }));
              createParticles({
                object: invader,
                fades: true
              });
              grid.invaders.splice(i, 1);
              projectiles.splice(j, 1);
              if (grid.invaders.length > 0) {
                var firstInvader = grid.invaders[0];
                var lastInvader = grid.invaders[grid.invaders.length - 1];
                grid.width = lastInvader.position.x - firstInvader.position.x + lastInvader.width;
                grid.position.x = firstInvader.position.x;
              } else {
                grids.splice(gridIndex, 1);
              }
            }
          }, 0);
        }
      });
    });
  });
  if (keys.a.pressed && player.position.x >= 0) {
    player.velocity.x = -7;
    player.rotation = -0.15;
  } else if (keys.d.pressed && player.position.x + player.width <= canvas.width) {
    player.velocity.x = 7;
    player.rotation = 0.15;
  } else {
    player.velocity.x = 0;
    player.rotation = 0;
  }
  if (keys.space.pressed) {
    projectiles.push(new Projectile({
      position: {
        x: player.position.x + player.width / 2,
        y: player.position.y
      },
      velocity: {
        x: 0,
        y: -15
      }
    }));
  }
  if (frame % (randomInterval / 2) === 0) {
    var speed = (Math.random() - 0.5) * 8 + 2;
    bombs.push(new Bomb({
      position: {
        x: (Math.random() + 0.05) * canvas.width - 20,
        y: (Math.random() + 0.05) * canvas.height - 20
      },
      velocity: {
        x: speed,
        y: speed
      },
      color: 'red'
    }));
  }
  if (frame % (randomInterval / 3) === 0) {
    powerUps.push(new PowerUp({
      position: {
        x: 0,
        y: Math.abs(Math.random() - 0.5) * canvas.height
      },
      velocity: {
        x: 2,
        y: 0
      }
    }));
  }
  if (frame % randomInterval === 0) {
    grids.push(new Grid());
    randomInterval = Math.floor(Math.random() * 500) + 500;
  }
  frame++;
}
animate();
addEventListener('keydown', function (_ref11) {
  var key = _ref11.key;
  if (game.over) return;
  switch (key) {
    case 'a':
      keys.a.pressed = true;
      break;
    case 'd':
      keys.d.pressed = true;
      break;
    case ' ':
      projectiles.push(new Projectile({
        position: {
          x: player.position.x + player.width / 2,
          y: player.position.y
        },
        velocity: {
          x: 0,
          y: -15
        }
      }));
      //   keys.space.pressed = true
      break;
  }
});
addEventListener('keyup', function (_ref12) {
  var key = _ref12.key;
  switch (key) {
    case 'a':
      keys.a.pressed = false;
      break;
    case 'd':
      keys.d.pressed = false;
      break;
    case ' ':
      //   keys.space.pressed = false
      break;
  }
});

/***/ })

/******/ });
//# sourceMappingURL=spaceInvaders.bundle.js.map