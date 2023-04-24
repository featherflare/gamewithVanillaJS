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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/tower-defense.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/images/tower-defense/explosion.png":
/*!***************************************************!*\
  !*** ./assets/images/tower-defense/explosion.png ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "2672a07d6b8303540fb91077c7a6da99.png");

/***/ }),

/***/ "./assets/images/tower-defense/gameMap.png":
/*!*************************************************!*\
  !*** ./assets/images/tower-defense/gameMap.png ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b7c8340c7c27dcdeb8a9182bc4359951.png");

/***/ }),

/***/ "./assets/images/tower-defense/orc.png":
/*!*********************************************!*\
  !*** ./assets/images/tower-defense/orc.png ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0a94e21d28cef22387a76d76febb0ed8.png");

/***/ }),

/***/ "./assets/images/tower-defense/projectile.png":
/*!****************************************************!*\
  !*** ./assets/images/tower-defense/projectile.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "67dcf961fda378063525f69cec6d00cb.png");

/***/ }),

/***/ "./assets/images/tower-defense/tower.png":
/*!***********************************************!*\
  !*** ./assets/images/tower-defense/tower.png ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "949bdb42e6390fb0fc08620fac021030.png");

/***/ }),

/***/ "./assets/js/tower-defense.js":
/*!************************************!*\
  !*** ./assets/js/tower-defense.js ***!
  \************************************/
/*! exports provided: enemies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enemies", function() { return enemies; });
/* harmony import */ var _images_tower_defense_gameMap_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/tower-defense/gameMap.png */ "./assets/images/tower-defense/gameMap.png");
/* harmony import */ var _towerDefense_classes_Building__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./towerDefense/classes/Building */ "./assets/js/towerDefense/classes/Building.js");
/* harmony import */ var _towerDefense_classes_Enemy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./towerDefense/classes/Enemy */ "./assets/js/towerDefense/classes/Enemy.js");
/* harmony import */ var _towerDefense_classes_PlacementTile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./towerDefense/classes/PlacementTile */ "./assets/js/towerDefense/classes/PlacementTile.js");
/* harmony import */ var _towerDefense_classes_Sprite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./towerDefense/classes/Sprite */ "./assets/js/towerDefense/classes/Sprite.js");
/* harmony import */ var _towerDefense_placementTilesData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./towerDefense/placementTilesData */ "./assets/js/towerDefense/placementTilesData.js");
/* harmony import */ var _towerDefense_waypoints__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./towerDefense/waypoints */ "./assets/js/towerDefense/waypoints.js");
/* harmony import */ var _images_tower_defense_explosion_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/tower-defense/explosion.png */ "./assets/images/tower-defense/explosion.png");








var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = 1280;
canvas.height = 768;
var placementTilesData2D = [];
for (var i = 0; i < _towerDefense_placementTilesData__WEBPACK_IMPORTED_MODULE_5__["placementTilesData"].length; i += 20) {
  placementTilesData2D.push(_towerDefense_placementTilesData__WEBPACK_IMPORTED_MODULE_5__["placementTilesData"].slice(i, i + 20));
}
var placementTiles = [];
placementTilesData2D.forEach(function (row, y) {
  row.forEach(function (symbol, x) {
    if (symbol === 14) {
      placementTiles.push(new _towerDefense_classes_PlacementTile__WEBPACK_IMPORTED_MODULE_3__["PlacementTile"]({
        position: {
          x: 64 * x,
          y: 64 * y
        }
      }));
    }
  });
});
var gameMapImage = new Image();
gameMapImage.onload = function () {
  animate();
};
gameMapImage.src = _images_tower_defense_gameMap_png__WEBPACK_IMPORTED_MODULE_0__["default"];
var enemies = [];
function spawnEnemies(spawndCount) {
  for (var _i = 1; _i < spawndCount + 1; _i++) {
    var xOffset = _i * 150;
    enemies.push(new _towerDefense_classes_Enemy__WEBPACK_IMPORTED_MODULE_2__["Enemy"]({
      position: {
        x: _towerDefense_waypoints__WEBPACK_IMPORTED_MODULE_6__["waypoints"][0].x - xOffset,
        y: _towerDefense_waypoints__WEBPACK_IMPORTED_MODULE_6__["waypoints"][0].y
      }
    }));
  }
}
var buildings = [];
var activeTile = undefined;
var enemyCount = 3;
var hearts = 10;
var coins = 100;
var explosions = [];
spawnEnemies(enemyCount);
function animate() {
  var animationId = requestAnimationFrame(animate);
  c.drawImage(gameMapImage, 0, 0);
  for (var _i2 = enemies.length - 1; _i2 >= 0; _i2--) {
    var enemy = enemies[_i2];
    enemy.update();
    if (enemy.position.x > canvas.width) {
      hearts -= 1;
      enemies.splice(_i2, 1);
      document.querySelector('#hearts').innerHTML = hearts;
      if (hearts === 0) {
        cancelAnimationFrame(animationId);
        document.querySelector('#gameOver').style.display = 'flex';
      }
    }
  }
  for (var _i3 = explosions.length - 1; _i3 >= 0; _i3--) {
    var _explosion = explosions[_i3];
    _explosion.draw();
    _explosion.update();
    if (_explosion.frames.current >= _explosion.frames.max - 1) {
      explosions.splice(_i3, 1);
    }
  }

  // tracking total amount of enemies
  if (enemies.length === 0) {
    enemyCount += 2;
    spawnEnemies(enemyCount);
  }
  placementTiles.forEach(function (tile) {
    tile.update(mouse);
  });
  buildings.forEach(function (building) {
    building.update();
    building.target = null;
    var validEnemies = enemies.filter(function (enemy) {
      var xDifference = enemy.center.x - building.center.x;
      var yDifference = enemy.center.y - building.center.y;
      var distance = Math.hypot(xDifference, yDifference);
      return distance < enemy.radius + building.radius;
    });
    building.target = validEnemies[0];
    var _loop = function _loop() {
      var projectile = building.projectiles[_i4];
      projectile.update();
      var xDifference = projectile.enemy.center.x - projectile.position.x;
      var yDifference = projectile.enemy.center.y - projectile.position.y;
      var distance = Math.hypot(xDifference, yDifference);

      // this is when a projectile hits an enemy
      if (distance < projectile.enemy.radius + projectile.radius) {
        // enemy health and enemy removal
        projectile.enemy.health -= 20;
        if (projectile.enemy.health <= 0) {
          var enemyIndex = enemies.findIndex(function (enemy) {
            return projectile.enemy === enemy;
          });
          if (enemyIndex > -1) {
            enemies.splice(enemyIndex, 1);
            coins += 25;
            document.querySelector('#coins').innerHTML = coins;
          }
        }
        explosions.push(new _towerDefense_classes_Sprite__WEBPACK_IMPORTED_MODULE_4__["Sprite"]({
          position: {
            x: projectile.position.x,
            y: projectile.position.y
          },
          imageSrc: _images_tower_defense_explosion_png__WEBPACK_IMPORTED_MODULE_7__["default"],
          frames: {
            max: 4
          },
          offset: {
            x: 0,
            y: 0
          }
        }));
        building.projectiles.splice(_i4, 1);
      }
    };
    for (var _i4 = building.projectiles.length - 1; _i4 >= 0; _i4--) {
      _loop();
    }
  });
}
// animate()

var mouse = {
  x: undefined,
  y: undefined
};
canvas.addEventListener('click', function () {
  if (activeTile && !activeTile.isOccupied && coins - 50 >= 0) {
    coins -= 50;
    document.querySelector('#coins').innerHTML = coins;
    buildings.push(new _towerDefense_classes_Building__WEBPACK_IMPORTED_MODULE_1__["Building"]({
      position: {
        x: activeTile.position.x,
        y: activeTile.position.y
      }
    }));
    activeTile.isOccupied = true;
    buildings.sort(function (a, b) {
      return a.position.y - b.position.y;
    });
  }
});
addEventListener('mousemove', function (event) {
  var rect = canvas.getBoundingClientRect();
  //   console.log(event)÷
  mouse.x = event.clientX - rect.left;
  mouse.y = event.clientY - rect.top;
  activeTile = null;
  for (var _i5 = 0; _i5 < placementTiles.length; _i5++) {
    var tile = placementTiles[_i5];
    if (mouse.x > tile.position.x && mouse.x < tile.position.x + tile.size && mouse.y > tile.position.y && mouse.y < tile.position.y + tile.size) {
      activeTile = tile;
      break;
    }
  }
});

/***/ }),

/***/ "./assets/js/towerDefense/classes/Building.js":
/*!****************************************************!*\
  !*** ./assets/js/towerDefense/classes/Building.js ***!
  \****************************************************/
/*! exports provided: Building */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Building", function() { return Building; });
/* harmony import */ var _images_tower_defense_tower_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../images/tower-defense/tower.png */ "./assets/images/tower-defense/tower.png");
/* harmony import */ var _Projectile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Projectile */ "./assets/js/towerDefense/classes/Projectile.js");
/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sprite */ "./assets/js/towerDefense/classes/Sprite.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
var Building = /*#__PURE__*/function (_Sprite) {
  _inherits(Building, _Sprite);
  var _super = _createSuper(Building);
  function Building(_ref) {
    var _this;
    var _ref$position = _ref.position,
      position = _ref$position === void 0 ? {
        x: 0,
        y: 0
      } : _ref$position;
    _classCallCheck(this, Building);
    _this = _super.call(this, {
      position: position,
      imageSrc: _images_tower_defense_tower_png__WEBPACK_IMPORTED_MODULE_0__["default"],
      frames: {
        max: 19
      },
      offset: {
        x: 0,
        y: -80
      }
    });
    _this.width = 64 * 2;
    _this.height = 64;
    _this.center = {
      x: _this.position.x + _this.width / 2,
      y: _this.position.y + _this.height / 2
    };
    _this.projectiles = [];
    _this.radius = 250;
    _this.target;
    return _this;
  }
  _createClass(Building, [{
    key: "draw",
    value: function draw() {
      _get(_getPrototypeOf(Building.prototype), "draw", this).call(this);

      // c.beginPath()
      // c.arc(this.center.x, this.center.y, this.radius, 0, Math.PI * 2)
      // c.fillStyle = 'rgba(0, 0, 255,0.2)'
      // c.fill()
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      if (this.target || !this.target && this.frames.current !== 0) _get(_getPrototypeOf(Building.prototype), "update", this).call(this);
      if (this.target && this.frames.current === 6 && this.frames.elapsed % this.frames.hold === 0) this.shoot();
    }
  }, {
    key: "shoot",
    value: function shoot() {
      this.projectiles.push(new _Projectile__WEBPACK_IMPORTED_MODULE_1__["Projectile"]({
        position: {
          x: this.center.x - 20,
          y: this.center.y - 110
        },
        enemy: this.target
      }));
    }
  }]);
  return Building;
}(_Sprite__WEBPACK_IMPORTED_MODULE_2__["Sprite"]);

/***/ }),

/***/ "./assets/js/towerDefense/classes/Enemy.js":
/*!*************************************************!*\
  !*** ./assets/js/towerDefense/classes/Enemy.js ***!
  \*************************************************/
/*! exports provided: Enemy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Enemy", function() { return Enemy; });
/* harmony import */ var _images_tower_defense_orc_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../images/tower-defense/orc.png */ "./assets/images/tower-defense/orc.png");
/* harmony import */ var _waypoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../waypoints */ "./assets/js/towerDefense/waypoints.js");
/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sprite */ "./assets/js/towerDefense/classes/Sprite.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
var Enemy = /*#__PURE__*/function (_Sprite) {
  _inherits(Enemy, _Sprite);
  var _super = _createSuper(Enemy);
  function Enemy(_ref) {
    var _this;
    var _ref$position = _ref.position,
      position = _ref$position === void 0 ? {
        x: 0,
        y: 0
      } : _ref$position;
    _classCallCheck(this, Enemy);
    _this = _super.call(this, {
      position: position,
      imageSrc: _images_tower_defense_orc_png__WEBPACK_IMPORTED_MODULE_0__["default"],
      frames: {
        max: 7
      }
    });
    _this.width = 100;
    _this.height = 100;
    _this.waypointIndex = 0;
    _this.center = {
      x: _this.position.x + _this.width / 2,
      y: _this.position.y + _this.height / 2
    };
    _this.radius = 50;
    _this.health = 100;
    _this.velocity = {
      x: 0,
      y: 0
    };
    return _this;
  }
  _createClass(Enemy, [{
    key: "draw",
    value: function draw() {
      _get(_getPrototypeOf(Enemy.prototype), "draw", this).call(this);

      // health bar
      c.fillStyle = 'red';
      c.fillRect(this.position.x, this.position.y - 15, this.width, 10);
      c.fillStyle = 'green';
      c.fillRect(this.position.x, this.position.y - 15, this.width * this.health / 100, 10);
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      _get(_getPrototypeOf(Enemy.prototype), "update", this).call(this);
      var waypoint = _waypoints__WEBPACK_IMPORTED_MODULE_1__["waypoints"][this.waypointIndex];
      var yDistance = waypoint.y - this.center.y;
      var xDistance = waypoint.x - this.center.x;
      var angle = Math.atan2(yDistance, xDistance);
      var speed = 3;
      this.velocity.x = Math.cos(angle);
      this.velocity.y = Math.sin(angle);
      this.position.x += this.velocity.x * speed;
      this.position.y += this.velocity.y * speed;
      this.center = {
        x: this.position.x + this.width / 2,
        y: this.position.y + this.height / 2
      };
      if (Math.abs(Math.round(this.center.x) - Math.round(waypoint.x)) < Math.abs(this.velocity.x * speed) && Math.abs(Math.round(this.center.y) - Math.round(waypoint.y)) < Math.abs(this.velocity.y * speed) && this.waypointIndex < _waypoints__WEBPACK_IMPORTED_MODULE_1__["waypoints"].length - 1) {
        this.waypointIndex++;
      }
    }
  }]);
  return Enemy;
}(_Sprite__WEBPACK_IMPORTED_MODULE_2__["Sprite"]);

/***/ }),

/***/ "./assets/js/towerDefense/classes/PlacementTile.js":
/*!*********************************************************!*\
  !*** ./assets/js/towerDefense/classes/PlacementTile.js ***!
  \*********************************************************/
/*! exports provided: PlacementTile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacementTile", function() { return PlacementTile; });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
var PlacementTile = /*#__PURE__*/function () {
  function PlacementTile(_ref) {
    var _ref$position = _ref.position,
      position = _ref$position === void 0 ? {
        x: 0,
        y: 0
      } : _ref$position;
    _classCallCheck(this, PlacementTile);
    this.position = position;
    this.size = 64;
    this.color = 'rgba(255, 255, 255, 0.15)';
    this.isOccupied = false;
  }
  _createClass(PlacementTile, [{
    key: "draw",
    value: function draw() {
      c.fillStyle = this.color;
      c.fillRect(this.position.x, this.position.y, this.size, this.size);
    }
  }, {
    key: "update",
    value: function update(mouse) {
      this.draw();
      if (mouse.x > this.position.x && mouse.x < this.position.x + this.size && mouse.y > this.position.y && mouse.y < this.position.y + this.size) {
        this.color = 'white';
      } else {
        this.color = 'rgba(255, 255, 255, 0.15)';
      }
    }
  }]);
  return PlacementTile;
}();

/***/ }),

/***/ "./assets/js/towerDefense/classes/Projectile.js":
/*!******************************************************!*\
  !*** ./assets/js/towerDefense/classes/Projectile.js ***!
  \******************************************************/
/*! exports provided: Projectile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Projectile", function() { return Projectile; });
/* harmony import */ var _images_tower_defense_projectile_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../images/tower-defense/projectile.png */ "./assets/images/tower-defense/projectile.png");
/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sprite */ "./assets/js/towerDefense/classes/Sprite.js");
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
var Projectile = /*#__PURE__*/function (_Sprite) {
  _inherits(Projectile, _Sprite);
  var _super = _createSuper(Projectile);
  function Projectile(_ref) {
    var _this;
    var _ref$position = _ref.position,
      position = _ref$position === void 0 ? {
        x: 0,
        y: 0
      } : _ref$position,
      enemy = _ref.enemy;
    _classCallCheck(this, Projectile);
    _this = _super.call(this, {
      position: position,
      imageSrc: _images_tower_defense_projectile_png__WEBPACK_IMPORTED_MODULE_0__["default"]
    });
    _this.velocity = {
      x: 0,
      y: 0
    };
    _this.enemy = enemy;
    _this.radius = 10;
    return _this;
  }
  _createClass(Projectile, [{
    key: "update",
    value: function update() {
      this.draw();
      var angle = Math.atan2(this.enemy.center.y - this.position.y, this.enemy.center.x - this.position.x);
      var power = 5;
      this.velocity.x = Math.cos(angle) * power;
      this.velocity.y = Math.sin(angle) * power;
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
    }
  }]);
  return Projectile;
}(_Sprite__WEBPACK_IMPORTED_MODULE_1__["Sprite"]);

/***/ }),

/***/ "./assets/js/towerDefense/classes/Sprite.js":
/*!**************************************************!*\
  !*** ./assets/js/towerDefense/classes/Sprite.js ***!
  \**************************************************/
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
var Sprite = /*#__PURE__*/function () {
  function Sprite(_ref) {
    var _ref$position = _ref.position,
      position = _ref$position === void 0 ? {
        x: 0,
        y: 0
      } : _ref$position,
      imageSrc = _ref.imageSrc,
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
    this.image = new Image();
    this.image.src = imageSrc;
    this.frames = {
      max: frames.max,
      current: 0,
      elapsed: 0,
      hold: 5
    };
    this.offset = offset;
  }
  _createClass(Sprite, [{
    key: "draw",
    value: function draw() {
      var cropWidth = this.image.width / this.frames.max;
      var crop = {
        position: {
          x: cropWidth * this.frames.current,
          y: 0
        },
        width: cropWidth,
        height: this.image.height
      };
      c.drawImage(this.image, crop.position.x, crop.position.y, crop.width, crop.height, this.position.x + this.offset.x, this.position.y + this.offset.y, crop.width, crop.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.frames.elapsed++;
      if (this.frames.elapsed % this.frames.hold === 0) {
        this.frames.current++;
        if (this.frames.current >= this.frames.max) {
          this.frames.current = 0;
        }
      }
    }
  }]);
  return Sprite;
}();

/***/ }),

/***/ "./assets/js/towerDefense/placementTilesData.js":
/*!******************************************************!*\
  !*** ./assets/js/towerDefense/placementTilesData.js ***!
  \******************************************************/
/*! exports provided: placementTilesData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "placementTilesData", function() { return placementTilesData; });
var placementTilesData = [0, 14, 0, 14, 0, 14, 0, 14, 0, 14, 0, 14, 0, 14, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 14, 0, 14, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 14, 0, 0, 0, 14, 0, 14, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 14, 0, 14, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 0, 14, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

/***/ }),

/***/ "./assets/js/towerDefense/waypoints.js":
/*!*********************************************!*\
  !*** ./assets/js/towerDefense/waypoints.js ***!
  \*********************************************/
/*! exports provided: waypoints */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "waypoints", function() { return waypoints; });
var waypoints = [{
  x: -124.21331566744,
  y: 475.322954620735
}, {
  x: 276.581649552832,
  y: 472.01059953627
}, {
  x: 276.581649552832,
  y: 157.33686651209
}, {
  x: 735.342828751242,
  y: 158.993044054323
}, {
  x: 735.342828751242,
  y: 405.763497846969
}, {
  x: 606.160980457105,
  y: 407.419675389202
}, {
  x: 606.160980457105,
  y: 669.095727061941
}, {
  x: 1046.70420669096,
  y: 665.783371977476
}, {
  x: 1050.01656177542,
  y: 288.17489234846
}, {
  x: 1407.75091089765,
  y: 286.518714806227
}];

/***/ })

/******/ });
//# sourceMappingURL=towerDefense.bundle.js.map