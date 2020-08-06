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
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/js/components/abstract-component.js":
/*!****************************************************!*\
  !*** ./source/js/components/abstract-component.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AbstractComponent; });
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/render.js */ "./source/js/utils/render.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var AbstractComponent = /*#__PURE__*/function () {
  function AbstractComponent() {
    _classCallCheck(this, AbstractComponent);

    if ((this instanceof AbstractComponent ? this.constructor : void 0) === AbstractComponent) {
      throw new Error("Can't instantiate AbstractComponent, only concrete one.");
    }

    this._element = null;
  }

  _createClass(AbstractComponent, [{
    key: "getTemplate",
    value: function getTemplate() {
      throw new Error("Abstract method not implemented: getTemplate");
    }
  }, {
    key: "getElement",
    value: function getElement() {
      if (!this._element) {
        this._element = Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
      }

      return this._element;
    }
  }, {
    key: "removeElement",
    value: function removeElement() {
      this._element = null;
    }
  }]);

  return AbstractComponent;
}();



/***/ }),

/***/ "./source/js/components/card.js":
/*!**************************************!*\
  !*** ./source/js/components/card.js ***!
  \**************************************/
/*! exports provided: createCardTemplate, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCardTemplate", function() { return createCardTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Card; });
/* harmony import */ var _abstract_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-component.js */ "./source/js/components/abstract-component.js");
/* harmony import */ var _utils_format_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/format.js */ "./source/js/utils/format.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../const.js */ "./source/js/const.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var createCardTemplate = function createCardTemplate(_ref) {
  var item = _ref.item,
      title = _ref.title,
      type = _ref.type,
      popularity = _ref.popularity,
      price = _ref.price;

  var getImage = function getImage() {
    return item < 8 ? "img/guitars/guitar-".concat(item, ".png") : _const_js__WEBPACK_IMPORTED_MODULE_2__["IMAGES"][type];
  };

  return "<li>\n      <img width=\"68\" height=\"190\" src=\"".concat(getImage(), "\" alt=\"\u0424\u043E\u0442\u043E \u0433\u0438\u0442\u0430\u0440\u044B\">\n      <p>\n        <span class=\"catalog__rating-overlay\">\n          <span class=\"catalog__stars\">\n            <svg width=\"9.93\" height=\"9.48\"><use xlink:href=\"#icon-star\"></use></svg>\n            <svg width=\"9.93\" height=\"9.48\"><use xlink:href=\"#icon-star\"></use></svg>\n            <svg width=\"9.93\" height=\"9.48\"><use xlink:href=\"#icon-star\"></use></svg>\n            <svg width=\"9.93\" height=\"9.48\"><use xlink:href=\"#icon-star\"></use></svg>\n            <svg width=\"9.93\" height=\"9.48\"><use xlink:href=\"#icon-star\"></use></svg>\n          </span>\n          <span class=\"catalog__stars--full\">\n            <svg width=\"9.93\" height=\"9.48\"><use xlink:href=\"#icon-star-full\"></use></svg>\n            <svg width=\"9.93\" height=\"9.48\"><use xlink:href=\"#icon-star-full\"></use></svg>\n            <svg width=\"9.93\" height=\"9.48\"><use xlink:href=\"#icon-star-full\"></use></svg>\n            <svg width=\"9.93\" height=\"9.48\"><use xlink:href=\"#icon-star-full\"></use></svg>\n            <svg width=\"9.93\" height=\"9.48\"><use xlink:href=\"#icon-star-full\"></use></svg>\n          </span>\n        </span>\n        <span>").concat(popularity, "</span>\n      </p>\n      <p>\n        <span>").concat(title, "</span>\n        <span>").concat(Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatPrice"])(price), " \u20BD</span>\n      </p>\n      <p>\n        <a class=\"button\" href=\"https://htmlacademy.ru/\">\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435</a>\n        <button class=\"button button--buy\" type=\"button\">\n          <svg width=\"10.36\" height=\"10.5\"><use xlink:href=\"#icon-buy\"></use></svg>\n          \u041A\u0443\u043F\u0438\u0442\u044C\n        </button>\n      </p>\n    </li>");
};

var Card = /*#__PURE__*/function (_AbstractComponent) {
  _inherits(Card, _AbstractComponent);

  var _super = _createSuper(Card);

  function Card(card) {
    var _this;

    _classCallCheck(this, Card);

    _this = _super.call(this);
    _this._card = card;
    return _this;
  }

  _createClass(Card, [{
    key: "getTemplate",
    value: function getTemplate() {
      return createCardTemplate(this._card);
    }
  }, {
    key: "setBuyButtonClickHandler",
    value: function setBuyButtonClickHandler(handler) {
      this.getElement().querySelector(".button--buy").addEventListener("click", handler);
    }
  }]);

  return Card;
}(_abstract_component_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./source/js/components/cards-list.js":
/*!********************************************!*\
  !*** ./source/js/components/cards-list.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CardsList; });
/* harmony import */ var _abstract_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-component.js */ "./source/js/components/abstract-component.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var createCardsListTemplate = function createCardsListTemplate() {
  return "<ul class=\"catalog__list\">\n    </ul>";
};

var CardsList = /*#__PURE__*/function (_AbstractComponent) {
  _inherits(CardsList, _AbstractComponent);

  var _super = _createSuper(CardsList);

  function CardsList() {
    _classCallCheck(this, CardsList);

    return _super.apply(this, arguments);
  }

  _createClass(CardsList, [{
    key: "getTemplate",
    value: function getTemplate() {
      return createCardsListTemplate();
    }
  }]);

  return CardsList;
}(_abstract_component_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./source/js/components/catalog-content.js":
/*!*************************************************!*\
  !*** ./source/js/components/catalog-content.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CatalogContent; });
/* harmony import */ var _abstract_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-component.js */ "./source/js/components/abstract-component.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var createCatalogContentTemplate = function createCatalogContentTemplate() {
  return "<div class=\"catalog__content\">\n    </div>";
};

var CatalogContent = /*#__PURE__*/function (_AbstractComponent) {
  _inherits(CatalogContent, _AbstractComponent);

  var _super = _createSuper(CatalogContent);

  function CatalogContent() {
    _classCallCheck(this, CatalogContent);

    return _super.apply(this, arguments);
  }

  _createClass(CatalogContent, [{
    key: "getTemplate",
    value: function getTemplate() {
      return createCatalogContentTemplate();
    }
  }]);

  return CatalogContent;
}(_abstract_component_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./source/js/components/filter.js":
/*!****************************************!*\
  !*** ./source/js/components/filter.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Filter; });
/* harmony import */ var _abstract_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-component.js */ "./source/js/components/abstract-component.js");
/* harmony import */ var _utils_debounce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/debounce.js */ "./source/js/utils/debounce.js");
/* harmony import */ var _utils_format_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/format.js */ "./source/js/utils/format.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





var createCheckboxMarkup = function createCheckboxMarkup(type, item) {
  return "<input\n      class=\"visually-hidden\"\n      type=\"checkbox\"\n      name=\"".concat(type, "\"\n      id=\"").concat(item.type, "\"\n      aria-label=\"").concat(item.label, "\"\n      ").concat(item.isChecked ? "checked" : "", "\n      ").concat(item.isDisabled ? "disabled" : "", "\n      data-label=\"").concat(item.item, "\"\n    >\n    <label\n      for=\"").concat(item.type, "\"\n    >\n    ").concat(item.label, "\n    </label>");
};

var createCheckboxFieldset = function createCheckboxFieldset(filter) {
  var checkboxMarkup = filter.checkboxes.map(function (item) {
    return createCheckboxMarkup(filter.type, item);
  }).join("\n");
  return "<fieldset class=\"form__checkbox-fieldset ".concat(filter.type, "\">\n      <legend>").concat(filter.title, "</legend>\n      ").concat(checkboxMarkup, "\n    </fieldset>");
};

var createFilterTemplate = function createFilterTemplate(filters, cards, minPrice, maxPrice) {
  var prices = cards.map(function (card) {
    return Number(card.price);
  });
  var checkboxFieldsets = filters.map(function (filter) {
    return createCheckboxFieldset(filter);
  }).join("\n");
  return "<form class=\"form\" method=\"post\">\n      <h3>\u0424\u0438\u043B\u044C\u0442\u0440</h3>\n      <fieldset class=\"form__price-fieldset\">\n        <legend>\u0426\u0435\u043D\u0430, <span>\u20BD</span></legend>\n        <p>\n          <input\n            type=\"number\"\n            name=\"price\"\n            id=\"min-price\"\n            placeholder=\"".concat(Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_2__["formatPrice"])(Math.min.apply(Math, _toConsumableArray(prices))), "\"\n            value=").concat(cards.length ? minPrice : 0, "\n          >\n          <label class=\"visually-hidden\" for=\"min-price\">\u0426\u0435\u043D\u0430 \u043E\u0442</label>\n          <input\n            type=\"number\"\n            name=\"price\"\n            id=\"max-price\"\n            placeholder=\"").concat(Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_2__["formatPrice"])(Math.max.apply(Math, _toConsumableArray(prices))), "\"\n            value=").concat(cards.length ? maxPrice : 0, "\n          >\n          <label class=\"visually-hidden\" for=\"max-price\">\u0426\u0435\u043D\u0430 \u0434\u043E</label>\n        </p>\n      </fieldset>\n      ").concat(checkboxFieldsets, "\n    </form>");
};

var Filter = /*#__PURE__*/function (_AbstractComponent) {
  _inherits(Filter, _AbstractComponent);

  var _super = _createSuper(Filter);

  function Filter(filters, cards, minPrice, maxPrice) {
    var _this;

    _classCallCheck(this, Filter);

    _this = _super.call(this);
    _this._filters = filters;
    _this._cards = cards;
    _this._minPrice = minPrice;
    _this._maxPrice = maxPrice;

    _this._subscribeOnEvents();

    return _this;
  }

  _createClass(Filter, [{
    key: "getTemplate",
    value: function getTemplate() {
      return createFilterTemplate(this._filters, this._cards, this._minPrice, this._maxPrice);
    }
  }, {
    key: "setFilterChangeHandler",
    value: function setFilterChangeHandler(handler) {
      var element = this.getElement();
      element.addEventListener("change", Object(_utils_debounce_js__WEBPACK_IMPORTED_MODULE_1__["debounce"])(function () {
        var checkedCheckboxes = Array.from(element.querySelectorAll("input:checked"));
        var checkboxNames = checkedCheckboxes.map(function (item) {
          return item.dataset.label;
        });
        var minPrice = element.querySelector("#min-price").value;
        var maxPrice = element.querySelector("#max-price").value;
        handler(checkboxNames, minPrice, maxPrice);
      }));
    }
  }, {
    key: "_subscribeOnEvents",
    value: function _subscribeOnEvents() {
      var element = this.getElement();
      var filters = this._filters;
      element.querySelector(".form__price-fieldset").addEventListener("change", function () {
        var minPrice = element.querySelector("#min-price");
        var maxPrice = element.querySelector("#max-price");

        if (maxPrice.value && minPrice.value && Number(maxPrice.value) < Number(minPrice.value)) {
          minPrice.value = maxPrice.value;
          maxPrice.value = minPrice.value;
        }

        if (minPrice.value < 0) {
          minPrice.value = 0;
        }

        if (maxPrice.value < 0) {
          maxPrice.value = 0;
        }
      });
      element.querySelector(".guitar-type").addEventListener("change", function (evt) {
        if (evt.target.tagName !== "INPUT") {
          return;
        }

        filters[0].checkboxes.forEach(function (checkbox) {
          if (checkbox.item === evt.target.dataset.label) {
            checkbox.isChecked = evt.target.checked;
          }
        });
      });
      element.querySelector(".strings-number").addEventListener("change", function (evt) {
        if (evt.target.tagName !== "INPUT") {
          return;
        }

        filters[1].checkboxes.forEach(function (checkbox) {
          if (checkbox.item === evt.target.dataset.label) {
            checkbox.isChecked = evt.target.checked;
          }
        });
      });
    }
  }]);

  return Filter;
}(_abstract_component_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./source/js/components/pagination.js":
/*!********************************************!*\
  !*** ./source/js/components/pagination.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Pagination; });
/* harmony import */ var _abstract_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-component.js */ "./source/js/components/abstract-component.js");
/* harmony import */ var _utils_format_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/format.js */ "./source/js/utils/format.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var createPageElement = function createPageElement(page, activePage) {
  return "<li class=\"pagination__item ".concat(page === activePage ? "pagination__item--active" : "", "\">\n      ").concat(page === "..." ? page : "<a>".concat(page, "</a>"), "\n    </li>");
};

var createPaginationTemplate = function createPaginationTemplate(cards, pagesNumber, activePage) {
  var pages = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["createArray"])(pagesNumber);
  pages.push(4, 5, 6, 7); // чтобы было как в макете

  if (pages.length > 3) {
    pages = [].concat(pages.slice(0, 2), "...", pages[pages.length - 1]);
  }

  var pagesTemplate = pages.map(function (pageNumber) {
    return createPageElement(pageNumber, activePage);
  }).join("\n");
  return "<ul class=\"pagination\">\n      ".concat(pagesTemplate, "\n      <li class=\"pagination__item pagination__next\">\n        <a href=\"#\">\u0414\u0430\u043B\u0435\u0435</a>\n      </li>\n    </ul>");
};

var Pagination = /*#__PURE__*/function (_AbstractComponent) {
  _inherits(Pagination, _AbstractComponent);

  var _super = _createSuper(Pagination);

  function Pagination(cards, pagesNumber, activePage) {
    var _this;

    _classCallCheck(this, Pagination);

    _this = _super.call(this);
    _this._cards = cards;
    _this._pagesNumber = pagesNumber;
    _this._activePage = activePage;
    return _this;
  }

  _createClass(Pagination, [{
    key: "getTemplate",
    value: function getTemplate() {
      return createPaginationTemplate(this._cards, this._pagesNumber, this._activePage);
    }
  }]);

  return Pagination;
}(_abstract_component_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./source/js/components/sort.js":
/*!**************************************!*\
  !*** ./source/js/components/sort.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sort; });
/* harmony import */ var _abstract_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-component.js */ "./source/js/components/abstract-component.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const.js */ "./source/js/const.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var createSortTemplate = function createSortTemplate(featureSortType, directionSortType) {
  return "<div class=\"catalog__sort-buttons\">\n      \u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C:\n      <button\n        class=\"".concat(featureSortType === _const_js__WEBPACK_IMPORTED_MODULE_1__["SortType"].PRICE ? "catalog__sort-buttons--active" : "", "\"\n        data-sort-type=\"").concat(_const_js__WEBPACK_IMPORTED_MODULE_1__["SortType"].PRICE, "\"\n        type=\"button\"\n      >\n        \u043F\u043E \u0446\u0435\u043D\u0435\n      </button>\n      <button\n        class=\"").concat(featureSortType === _const_js__WEBPACK_IMPORTED_MODULE_1__["SortType"].POPULARITY ? "catalog__sort-buttons--active" : "", "\"\n        data-sort-type=\"").concat(_const_js__WEBPACK_IMPORTED_MODULE_1__["SortType"].POPULARITY, "\"\n        type=\"button\"\n      >\n        \u043F\u043E \u043F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u043E\u0441\u0442\u0438\n      </button>\n      <div class=\"sort-arrows\">\n        <button\n          class=\"").concat(directionSortType === _const_js__WEBPACK_IMPORTED_MODULE_1__["SortType"].ASCENDING ? "sort-arrows__active-element" : "", "\"\n          data-sort-type=\"").concat(_const_js__WEBPACK_IMPORTED_MODULE_1__["SortType"].ASCENDING, "\"\n          type=\"button\"\n        >\n          <span class=\"visually-hidden\">\u043F\u043E \u0432\u043E\u0437\u0440\u0430\u0441\u0442\u0430\u043D\u0438\u044E</span>\n        </button>\n        <button\n          class=\"").concat(directionSortType === _const_js__WEBPACK_IMPORTED_MODULE_1__["SortType"].DESCENDING ? "sort-arrows__active-element" : "", "\"\n          data-sort-type=\"").concat(_const_js__WEBPACK_IMPORTED_MODULE_1__["SortType"].DESCENDING, "\"\n          type=\"button\"\n        >\n          <span class=\"visually-hidden\">\u043F\u043E \u0443\u0431\u044B\u0432\u0430\u043D\u0438\u044E</span>\n        </button>\n      </div>\n    </div>");
};

var Sort = /*#__PURE__*/function (_AbstractComponent) {
  _inherits(Sort, _AbstractComponent);

  var _super = _createSuper(Sort);

  function Sort(currentSortFeatureType, currentSortDirectionType) {
    var _this;

    _classCallCheck(this, Sort);

    _this = _super.call(this);
    _this._currentSortFeatureType = currentSortFeatureType;
    _this._currentSortDirectionType = currentSortDirectionType;
    return _this;
  }

  _createClass(Sort, [{
    key: "getTemplate",
    value: function getTemplate() {
      return createSortTemplate(this._currentSortFeatureType, this._currentSortDirectionType);
    }
  }, {
    key: "setSortFeatureTypeChangeHandler",
    value: function setSortFeatureTypeChangeHandler(handler) {
      var _this2 = this;

      this.getElement().addEventListener("click", function (evt) {
        if (evt.target.tagName !== "BUTTON") {
          return;
        }

        var sortType = evt.target.dataset.sortType;
        var parentElement = evt.target.parentElement;

        if (_this2._currentSortFeatureType === sortType || !parentElement.classList.contains("catalog__sort-buttons")) {
          return;
        }

        handler(sortType);
      });
    }
  }, {
    key: "setSortDirectionTypeChangeHandler",
    value: function setSortDirectionTypeChangeHandler(handler) {
      var _this3 = this;

      this.getElement().addEventListener("click", function (evt) {
        if (evt.target.tagName !== "BUTTON") {
          return;
        }

        var sortType = evt.target.dataset.sortType;
        var parentElement = evt.target.parentElement;

        if (_this3._currentSorDirectionType === sortType || !parentElement.classList.contains("sort-arrows")) {
          return;
        }

        handler(sortType);
      });
    }
  }]);

  return Sort;
}(_abstract_component_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./source/js/const.js":
/*!****************************!*\
  !*** ./source/js/const.js ***!
  \****************************/
/*! exports provided: CARDS_PER_PAGE, Filters, IMAGES, SortType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CARDS_PER_PAGE", function() { return CARDS_PER_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Filters", function() { return Filters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMAGES", function() { return IMAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortType", function() { return SortType; });
var CARDS_PER_PAGE = 9;
var Filters = [{
  'title': "\u0422\u0438\u043F \u0433\u0438\u0442\u0430\u0440",
  'type': "guitar-type",
  'checkboxes': [{
    'type': "acoustic",
    'label': "\u0410\u043A\u0443\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0433\u0438\u0442\u0430\u0440\u044B",
    'item': "\u0430\u043A\u0443\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0433\u0438\u0442\u0430\u0440\u0430",
    'isChecked': false,
    'isDisabled': false
  }, {
    'type': "electro",
    'label': "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u0433\u0438\u0442\u0430\u0440\u044B",
    'item': "\u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0433\u0438\u0442\u0430\u0440\u0430",
    'isChecked': false,
    'isDisabled': false
  }, {
    'type': "ukulele",
    'label': "\u0423\u043A\u0443\u043B\u0435\u043B\u0435",
    'item': "\u0443\u043A\u0443\u043B\u0435\u043B\u0435",
    'isChecked': false,
    'isDisabled': false
  }]
}, {
  'title': "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0441\u0442\u0440\u0443\u043D",
  'type': "strings-number",
  'checkboxes': [{
    'type': "4-strings",
    'label': "4",
    'item': "4",
    'isChecked': false,
    'isDisabled': false
  }, {
    'type': "6-strings",
    'label': "6",
    'item': "6",
    'isChecked': false,
    'isDisabled': false
  }, {
    'type': "7-strings",
    'label': "7",
    'item': "7",
    'isChecked': false,
    'isDisabled': false
  }, {
    'type': "12-strings",
    'label': "12",
    'item': "12",
    'isChecked': false,
    'isDisabled': false
  }]
}];
var IMAGES = {
  'акустическая гитара': "img/guitars/guitar-5.png",
  'электрогитара': "img/guitars/guitar-1.png",
  'укулеле': "img/guitars/guitar-3.png"
};
var SortType = {
  DEFAULT: "default",
  PRICE: "price",
  POPULARITY: "popularity",
  ASCENDING: "ascending",
  DESCENDING: "descending"
};

/***/ }),

/***/ "./source/js/controllers/card.js":
/*!***************************************!*\
  !*** ./source/js/controllers/card.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CardControlled; });
/* harmony import */ var _components_card_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/card.js */ "./source/js/components/card.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/render.js */ "./source/js/utils/render.js");
/* harmony import */ var _utils_popup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/popup.js */ "./source/js/utils/popup.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var CardControlled = /*#__PURE__*/function () {
  function CardControlled(container) {
    _classCallCheck(this, CardControlled);

    this._container = container;
    this._cardComponent = null;
    this._card = null;
  }

  _createClass(CardControlled, [{
    key: "render",
    value: function render(card) {
      this._card = card;
      this._cardComponent = new _components_card_js__WEBPACK_IMPORTED_MODULE_0__["default"](this._card);

      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_1__["render"])(this._container, this._cardComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_1__["RenderPosition"].BEFOREEND);

      this.setCardListeners();
    }
  }, {
    key: "setCardListeners",
    value: function setCardListeners() {
      this._cardComponent.setBuyButtonClickHandler(function (evt) {
        evt.preventDefault();
        var popup = document.querySelector("#add-to-cart");
        Object(_utils_popup_js__WEBPACK_IMPORTED_MODULE_2__["openPopup"])(popup);
      });
    }
  }]);

  return CardControlled;
}();



/***/ }),

/***/ "./source/js/controllers/cards.js":
/*!****************************************!*\
  !*** ./source/js/controllers/cards.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CardsController; });
/* harmony import */ var _components_cards_list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/cards-list.js */ "./source/js/components/cards-list.js");
/* harmony import */ var _components_pagination_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/pagination.js */ "./source/js/components/pagination.js");
/* harmony import */ var _components_sort_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/sort.js */ "./source/js/components/sort.js");
/* harmony import */ var _card_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card.js */ "./source/js/controllers/card.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/render.js */ "./source/js/utils/render.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../const.js */ "./source/js/const.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








var CardsController = /*#__PURE__*/function () {
  function CardsController(container, cardsModel) {
    _classCallCheck(this, CardsController);

    this._container = container;
    this._cardsModel = cardsModel;
    this._currentSortFeatureType = _const_js__WEBPACK_IMPORTED_MODULE_5__["SortType"].DEFAULT;
    this._currentSortDirectionType = _const_js__WEBPACK_IMPORTED_MODULE_5__["SortType"].DEFAULT;
    this._cardsListComponent = new _components_cards_list_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this._paginationComponent = null;
    this._activePage = 1;
    this._onFilterChange = this._onFilterChange.bind(this);
    this._onSortFeatureTypeChange = this._onSortFeatureTypeChange.bind(this);
    this._onSortDirectionTypeChange = this._onSortDirectionTypeChange.bind(this);

    this._cardsModel.setFilterChangeHandler(this._onFilterChange);

    this._cardContollers = [];
    this._sortChangeHandlers = [];
  }

  _createClass(CardsController, [{
    key: "render",
    value: function render() {
      var container = this._container;

      var cards = this._cardsModel.getCards();

      this._renderSortComponents();

      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_4__["render"])(container, this._cardsListComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_4__["RenderPosition"].BEFOREEND);

      this._renderCards(cards);

      this._renderPagination(cards);
    }
  }, {
    key: "_renderCards",
    value: function _renderCards(cards) {
      var catalogList = document.querySelector(".catalog__list");

      var renderCardControlles = function renderCardControlles() {
        var cardControllers = [];
        cards.slice(0, _const_js__WEBPACK_IMPORTED_MODULE_5__["CARDS_PER_PAGE"]).forEach(function (card) {
          var cardController = new _card_js__WEBPACK_IMPORTED_MODULE_3__["default"](catalogList);
          cardController.render(card);
          cardControllers.push(cardController);
        });
        return cardControllers;
      };

      this._cardContollers = renderCardControlles();
    }
  }, {
    key: "_renderPagination",
    value: function _renderPagination(cards) {
      var pagesNumber = Math.ceil(cards.length / _const_js__WEBPACK_IMPORTED_MODULE_5__["CARDS_PER_PAGE"]);
      var activePage = this._activePage;

      if (pagesNumber !== 1) {
        this._paginationComponent = new _components_pagination_js__WEBPACK_IMPORTED_MODULE_1__["default"](cards, pagesNumber, activePage);

        Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_4__["render"])(this._container, this._paginationComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_4__["RenderPosition"].BEFOREEND);
      }
    }
  }, {
    key: "_renderSortComponents",
    value: function _renderSortComponents() {
      this._sortComponent = new _components_sort_js__WEBPACK_IMPORTED_MODULE_2__["default"](this._currentSortFeatureType, this._currentSortDirectionType);

      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_4__["render"])(this._container, this._sortComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_4__["RenderPosition"].AFTERBEGIN);

      this._sortComponent.setSortFeatureTypeChangeHandler(this._onSortFeatureTypeChange);

      this._sortComponent.setSortDirectionTypeChangeHandler(this._onSortDirectionTypeChange);
    }
  }, {
    key: "_removeCards",
    value: function _removeCards() {
      var catalogList = this._cardsListComponent.getElement();

      catalogList.innerHTML = "";
      this._cardContollers = [];
    }
  }, {
    key: "_removePagination",
    value: function _removePagination() {
      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_4__["remove"])(this._paginationComponent);
    }
  }, {
    key: "_update",
    value: function _update() {
      this._removeCards();

      this._removePagination();

      this._renderCards(this._cardsModel.getCards());

      this._renderPagination(this._cardsModel.getCards());

      this._currentSortFeatureType = _const_js__WEBPACK_IMPORTED_MODULE_5__["SortType"].DEFAULT;
      this._currentSortDirectionType = _const_js__WEBPACK_IMPORTED_MODULE_5__["SortType"].DEFAULT;
      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_4__["remove"])(this._sortComponent);

      this._renderSortComponents();
    }
  }, {
    key: "_onFilterChange",
    value: function _onFilterChange() {
      this._update();
    }
  }, {
    key: "_onSortFeatureTypeChange",
    value: function _onSortFeatureTypeChange(sortType) {
      var _this = this;

      this._currentSortFeatureType = sortType;
      var sortedCards = [];

      var cards = this._cardsModel.getCards();

      if (this._currentSortDirectionType === _const_js__WEBPACK_IMPORTED_MODULE_5__["SortType"].DEFAULT) {
        this._currentSortDirectionType = _const_js__WEBPACK_IMPORTED_MODULE_5__["SortType"].ASCENDING;
      }

      switch (sortType) {
        case _const_js__WEBPACK_IMPORTED_MODULE_5__["SortType"].PRICE:
          sortedCards = cards.slice().sort(function (a, b) {
            return _this._currentSortDirectionType === _const_js__WEBPACK_IMPORTED_MODULE_5__["SortType"].ASCENDING ? a.price - b.price : b.price - a.price;
          });
          break;

        case _const_js__WEBPACK_IMPORTED_MODULE_5__["SortType"].POPULARITY:
          sortedCards = cards.slice().sort(function (a, b) {
            return _this._currentSortDirectionType === _const_js__WEBPACK_IMPORTED_MODULE_5__["SortType"].ASCENDING ? a.popularity - b.popularity : b.popularity - a.popularity;
          });
          break;

        case _const_js__WEBPACK_IMPORTED_MODULE_5__["SortType"].DEFAUL:
          sortedCards = cards;
          break;
      }

      this._removeCards();

      this._renderCards(sortedCards);

      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_4__["remove"])(this._sortComponent);

      this._renderSortComponents();
    }
  }, {
    key: "_onSortDirectionTypeChange",
    value: function _onSortDirectionTypeChange(sortType) {
      var _this2 = this;

      this._currentSortDirectionType = sortType;
      var sortedCards = [];

      var cards = this._cardsModel.getCards();

      if (this._currentSortFeatureType === _const_js__WEBPACK_IMPORTED_MODULE_5__["SortType"].DEFAULT) {
        this._currentSortFeatureType = _const_js__WEBPACK_IMPORTED_MODULE_5__["SortType"].PRICE;
      }

      switch (sortType) {
        case _const_js__WEBPACK_IMPORTED_MODULE_5__["SortType"].ASCENDING:
          sortedCards = cards.slice().sort(function (a, b) {
            return _this2._currentSortFeatureType === _const_js__WEBPACK_IMPORTED_MODULE_5__["SortType"].PRICE ? a.price - b.price : a.popularity - b.popularity;
          });
          break;

        case _const_js__WEBPACK_IMPORTED_MODULE_5__["SortType"].DESCENDING:
          sortedCards = cards.slice().sort(function (a, b) {
            return _this2._currentSortFeatureType === _const_js__WEBPACK_IMPORTED_MODULE_5__["SortType"].PRICE ? b.price - a.price : b.popularity - a.popularity;
          });
          break;

        case _const_js__WEBPACK_IMPORTED_MODULE_5__["SortType"].DEFAUL:
          sortedCards = cards;
          break;
      }

      this._removeCards();

      this._renderCards(sortedCards);

      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_4__["remove"])(this._sortComponent);

      this._renderSortComponents();
    }
  }]);

  return CardsController;
}();



/***/ }),

/***/ "./source/js/controllers/filter.js":
/*!*****************************************!*\
  !*** ./source/js/controllers/filter.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilterController; });
/* harmony import */ var _components_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/filter.js */ "./source/js/components/filter.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/render.js */ "./source/js/utils/render.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../const.js */ "./source/js/const.js");
/* harmony import */ var _utils_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/filter.js */ "./source/js/utils/filter.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var FilterController = /*#__PURE__*/function () {
  function FilterController(container, cardsModel) {
    _classCallCheck(this, FilterController);

    this._container = container;
    this._cardsModel = cardsModel;
    this._checkedCheckboxes = [];
    this._minPrice = null;
    this._maxPrice = null;
    this._filterComponent = null;
    this._onFilterChange = this._onFilterChange.bind(this);
  }

  _createClass(FilterController, [{
    key: "render",
    value: function render() {
      var _this = this;

      var container = this._container;
      var oldComponent = this._filterComponent;

      var cards = this._cardsModel.getCards();

      var minPrice = this._minPrice;
      var maxPrice = this._maxPrice;
      var guitarTypeCheckboxes = _const_js__WEBPACK_IMPORTED_MODULE_2__["Filters"][0].checkboxes.map(function (checkbox) {
        return checkbox.item;
      });

      var guitarTypeCheckedCheckboxes = this._checkedCheckboxes.filter(function (filter) {
        return guitarTypeCheckboxes.includes(filter);
      });

      _const_js__WEBPACK_IMPORTED_MODULE_2__["Filters"][1].checkboxes.forEach(function (checkbox) {
        var arrayLength = Object(_utils_filter_js__WEBPACK_IMPORTED_MODULE_3__["getSameStringsType"])(_this._cardsModel.getCardsByGuitarTypeFilter(), checkbox.item).length;
        checkbox.isDisabled = arrayLength === 0 && guitarTypeCheckedCheckboxes.length ? true : false;
      });
      this._filterComponent = new _components_filter_js__WEBPACK_IMPORTED_MODULE_0__["default"](_const_js__WEBPACK_IMPORTED_MODULE_2__["Filters"], cards, minPrice, maxPrice);

      this._filterComponent.setFilterChangeHandler(this._onFilterChange);

      if (oldComponent) {
        Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_1__["replace"])(this._filterComponent, oldComponent);
      } else {
        Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_1__["render"])(container, this._filterComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_1__["RenderPosition"].BEFOREEND);
      }
    }
  }, {
    key: "_onFilterChange",
    value: function _onFilterChange(checkboxNames, minPrice, maxPrice) {
      this._cardsModel.setFilter(checkboxNames, minPrice, maxPrice);

      this._checkedCheckboxes = checkboxNames;
      this._minPrice = minPrice;
      this._maxPrice = maxPrice;
      this.render();
    }
  }]);

  return FilterController;
}();



/***/ }),

/***/ "./source/js/guitars.js":
/*!******************************!*\
  !*** ./source/js/guitars.js ***!
  \******************************/
/*! exports provided: GUITARS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GUITARS", function() { return GUITARS; });
var GUITARS = [{
  'item': "1",
  'article': "SO757575",
  'title': "\u0427\u0435\u0441\u0442\u0435\u0440 Bass",
  'type': "\u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0433\u0438\u0442\u0430\u0440\u0430",
  'popularity': "15",
  'strings': "7",
  'price': "17500"
}, {
  'item': "2",
  'article': "TK129049",
  'title': "\u0421URT Z300",
  'type': "\u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0433\u0438\u0442\u0430\u0440\u0430",
  'popularity': "9",
  'strings': "7",
  'price': "29500"
}, {
  'item': "3",
  'article': "RO111111",
  'title': "Roman LX",
  'type': "\u0443\u043A\u0443\u043B\u0435\u043B\u0435",
  'popularity': "21",
  'strings': "4",
  'price': "6800"
}, {
  'item': "4",
  'article': "TK436457",
  'title': "\u0421URT T300",
  'type': "\u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0433\u0438\u0442\u0430\u0440\u0430",
  'popularity': "15",
  'strings': "6",
  'price': "30000"
}, {
  'item': "5",
  'article': "DI192138",
  'title': "Dania Super",
  'type': "\u0430\u043A\u0443\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0433\u0438\u0442\u0430\u0440\u0430",
  'popularity': "5",
  'strings': "7",
  'price': "3500"
}, {
  'item': "6",
  'article': "SO934345",
  'title': "\u0427\u0435\u0441\u0442\u0435\u0440 WX",
  'type': "\u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0433\u0438\u0442\u0430\u0440\u0430",
  'popularity': "17",
  'strings': "6",
  'price': "15300"
}, {
  'item': "7",
  'article': "DI082347",
  'title': "Dania VX",
  'type': "\u0443\u043A\u0443\u043B\u0435\u043B\u0435",
  'popularity': "5",
  'strings': "4",
  'price': "2200"
}, {
  'item': "8",
  'article': "SO135646",
  'title': "\u0427\u0435\u0441\u0442\u0435\u0440 Plus",
  'type': "\u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0433\u0438\u0442\u0430\u0440\u0430",
  'popularity': "27",
  'strings': "4",
  'price': "30000"
}, {
  'item': "9",
  'article': "VO154751",
  'title': "\u0412\u0438\u043E\u043B\u0430\u043D\u0430 300",
  'type': "\u0430\u043A\u0443\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0433\u0438\u0442\u0430\u0440\u0430",
  'popularity': "3",
  'strings': "7",
  'price': "1700"
}, {
  'item': "10",
  'article': "TK244556",
  'title': "\u0421URT Clasic",
  'type': "\u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0433\u0438\u0442\u0430\u0440\u0430",
  'popularity': "20",
  'strings': "4",
  'price': "23000"
}, {
  'item': "11",
  'article': "TK134663",
  'title': "\u0421URT Z250",
  'type': "\u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0433\u0438\u0442\u0430\u0440\u0430",
  'popularity': "19",
  'strings': "4",
  'price': "18700"
}, {
  'item': "12",
  'article': "SO123212",
  'title': "\u0427\u0435\u0441\u0442\u0435\u0440 7X",
  'type': "\u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0433\u0438\u0442\u0430\u0440\u0430",
  'popularity': "30",
  'strings': "7",
  'price': "35000"
}, {
  'item': "13",
  'article': "SO123234",
  'title': "\u0427\u0435\u0441\u0442\u0435\u0440 6V",
  'type': "\u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0433\u0438\u0442\u0430\u0440\u0430",
  'popularity': "28",
  'strings': "6",
  'price': "14900"
}, {
  'item': "14",
  'article': "VO519510",
  'title': "\u0412\u0438\u043E\u043B\u0430\u043D\u0430 Mix",
  'type': "\u0430\u043A\u0443\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0433\u0438\u0442\u0430\u0440\u0430",
  'popularity': "7",
  'strings': "6",
  'price': "7600"
}, {
  'item': "15",
  'article': "VO457369",
  'title': "\u0412\u0438\u043E\u043B\u0430\u043D\u0430 250x",
  'type': "\u0430\u043A\u0443\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0433\u0438\u0442\u0430\u0440\u0430",
  'popularity': "19",
  'strings': "6",
  'price': "6500"
}, {
  'item': "16",
  'article': "FB625903",
  'title': "\u0424\u0430\u0431\u0438\u043E \u041B\u0430\u0439\u0442",
  'type': "\u0430\u043A\u0443\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0433\u0438\u0442\u0430\u0440\u0430",
  'popularity': "26",
  'strings': "7",
  'price': "12000"
}, {
  'item': "17",
  'article': "FB576948",
  'title': "\u0424\u0430\u0431\u0438\u043E L100",
  'type': "\u0430\u043A\u0443\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0433\u0438\u0442\u0430\u0440\u0430",
  'popularity': "31",
  'strings': "7",
  'price': "9900"
}, {
  'item': "18",
  'article': "LU012032",
  'title': "Liana Z200",
  'type': "\u0430\u043A\u0443\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0433\u0438\u0442\u0430\u0440\u0430",
  'popularity': "28",
  'strings': "12",
  'price': "8900"
}, {
  'item': "19",
  'article': "LU546853",
  'title': "Liana Z100",
  'type': "\u0430\u043A\u0443\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0433\u0438\u0442\u0430\u0440\u0430",
  'popularity': "34",
  'strings': "12",
  'price': "10500"
}, {
  'item': "20",
  'article': "LU458283",
  'title': "Liana Z300",
  'type': "\u0430\u043A\u0443\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0433\u0438\u0442\u0430\u0440\u0430",
  'popularity': "9",
  'strings': "6",
  'price': "13300"
}, {
  'item': "21",
  'article': "RO324341",
  'title': "Roman RX",
  'type': "\u0443\u043A\u0443\u043B\u0435\u043B\u0435",
  'popularity': "37",
  'strings': "4",
  'price': "4800"
}, {
  'item': "22",
  'article': "RO214235",
  'title': "Roman TX",
  'type': "\u0443\u043A\u0443\u043B\u0435\u043B\u0435",
  'popularity': "5",
  'strings': "4",
  'price': "1900"
}, {
  'item': "23",
  'article': "DI132414",
  'title': "Dania U100",
  'type': "\u0443\u043A\u0443\u043B\u0435\u043B\u0435",
  'popularity': "23",
  'strings': "4",
  'price': "2500"
}, {
  'item': "24",
  'article': "DI934754",
  'title': "Dania WR",
  'type': "\u0443\u043A\u0443\u043B\u0435\u043B\u0435",
  'popularity': "3",
  'strings': "4",
  'price': "3800"
}, {
  'item': "25",
  'article': "DI034292",
  'title': "Dania LE",
  'type': "\u0443\u043A\u0443\u043B\u0435\u043B\u0435",
  'popularity': "10",
  'strings': "4",
  'price': "4100"
}, {
  'item': "26",
  'article': "MI193214",
  'title': "Mirana V10",
  'type': "\u0443\u043A\u0443\u043B\u0435\u043B\u0435",
  'popularity': "14",
  'strings': "4",
  'price': "2700"
}, {
  'item': "27",
  'article': "VO043244",
  'title': "\u0412\u0438\u043E\u043B\u0430\u043D\u0430 Mini",
  'type': "\u0443\u043A\u0443\u043B\u0435\u043B\u0435",
  'popularity': "29",
  'strings': "4",
  'price': "6700"
}];

/***/ }),

/***/ "./source/js/main.js":
/*!***************************!*\
  !*** ./source/js/main.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _guitars_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guitars.js */ "./source/js/guitars.js");
/* harmony import */ var _models_cards_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/cards.js */ "./source/js/models/cards.js");
/* harmony import */ var _controllers_cards_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controllers/cards.js */ "./source/js/controllers/cards.js");
/* harmony import */ var _controllers_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controllers/filter.js */ "./source/js/controllers/filter.js");
/* harmony import */ var _components_catalog_content_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/catalog-content.js */ "./source/js/components/catalog-content.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/render.js */ "./source/js/utils/render.js");






var cardsModel = new _models_cards_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
cardsModel.setCards(_guitars_js__WEBPACK_IMPORTED_MODULE_0__["GUITARS"]);
var catalogSection = document.querySelector(".catalog");
var filterController = new _controllers_filter_js__WEBPACK_IMPORTED_MODULE_3__["default"](catalogSection, cardsModel);
filterController.render();
Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_5__["render"])(catalogSection, new _components_catalog_content_js__WEBPACK_IMPORTED_MODULE_4__["default"](), _utils_render_js__WEBPACK_IMPORTED_MODULE_5__["RenderPosition"].BEFOREEND);
var catalogContentSection = document.querySelector(".catalog__content");
var cardsController = new _controllers_cards_js__WEBPACK_IMPORTED_MODULE_2__["default"](catalogContentSection, cardsModel);
cardsController.render();

/***/ }),

/***/ "./source/js/models/cards.js":
/*!***********************************!*\
  !*** ./source/js/models/cards.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cards; });
/* harmony import */ var _utils_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/filter.js */ "./source/js/utils/filter.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Cards = /*#__PURE__*/function () {
  function Cards() {
    _classCallCheck(this, Cards);

    this._cards = [];
    this._filterChangeHandlers = [];
    this._checkboxNames = [];
    this._minPrice = null;
    this._maxPrice = null;
  }

  _createClass(Cards, [{
    key: "getCards",
    value: function getCards() {
      return Object(_utils_filter_js__WEBPACK_IMPORTED_MODULE_0__["getCardsByFilter"])(this._cards, this._checkboxNames, this._minPrice, this._maxPrice);
    }
  }, {
    key: "getCardsByGuitarTypeFilter",
    value: function getCardsByGuitarTypeFilter() {
      return Object(_utils_filter_js__WEBPACK_IMPORTED_MODULE_0__["getSameGuitarType"])(this._cards, this._checkboxNames, this._minPrice, this._maxPrice);
    }
  }, {
    key: "setCards",
    value: function setCards(cards) {
      this._cards = cards;
    }
  }, {
    key: "setFilter",
    value: function setFilter(checkboxNames, minPrice, maxPrice) {
      this._checkboxNames = checkboxNames;
      this._minPrice = minPrice;
      this._maxPrice = maxPrice;

      this._callHandlers(this._filterChangeHandlers);
    }
  }, {
    key: "setFilterChangeHandler",
    value: function setFilterChangeHandler(handler) {
      this._filterChangeHandlers.push(handler);
    }
  }, {
    key: "_callHandlers",
    value: function _callHandlers(handlers) {
      handlers.forEach(function (handler) {
        return handler();
      });
    }
  }]);

  return Cards;
}();



/***/ }),

/***/ "./source/js/utils/debounce.js":
/*!*************************************!*\
  !*** ./source/js/utils/debounce.js ***!
  \*************************************/
/*! exports provided: debounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
var DEBOUNCE_INTERVAL = 500;
var debounce = function debounce(cb) {
  var lastTimeout = null;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (lastTimeout) {
      window.clearTimeout(lastTimeout);
    }

    lastTimeout = window.setTimeout(function () {
      cb.apply(void 0, args);
    }, DEBOUNCE_INTERVAL);
  };
};

/***/ }),

/***/ "./source/js/utils/filter.js":
/*!***********************************!*\
  !*** ./source/js/utils/filter.js ***!
  \***********************************/
/*! exports provided: getSameGuitarType, getSameStringsType, getCardsByFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSameGuitarType", function() { return getSameGuitarType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSameStringsType", function() { return getSameStringsType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCardsByFilter", function() { return getCardsByFilter; });
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const.js */ "./source/js/const.js");


var getSamePrice = function getSamePrice(card, minPrice, maxPrice) {
  if (minPrice && maxPrice) {
    return Number(card.price) <= maxPrice && Number(card.price) >= minPrice;
  } else if (minPrice) {
    return Number(card.price) >= minPrice;
  } else if (maxPrice) {
    return Number(card.price) <= maxPrice;
  } else {
    return card;
  }
};

var getSameGuitarType = function getSameGuitarType(cards, checkboxNames, minPrice, maxPrice) {
  return cards.filter(function (card) {
    return checkboxNames.includes(card.type) && getSamePrice(card, minPrice, maxPrice);
  });
};
var getSameStringsType = function getSameStringsType(cards, checkboxNames, minPrice, maxPrice) {
  return cards.filter(function (card) {
    return checkboxNames.includes(card.strings) && getSamePrice(card, minPrice, maxPrice);
  });
};

var getSameFilters = function getSameFilters(cards, checkboxNames, minPrice, maxPrice) {
  return cards.filter(function (card) {
    return checkboxNames.includes(card.type) && checkboxNames.includes(card.strings) && getSamePrice(card, minPrice, maxPrice);
  });
};

var guitarTypeCheckboxes = _const_js__WEBPACK_IMPORTED_MODULE_0__["Filters"][0].checkboxes.map(function (checkbox) {
  return checkbox.item;
});
var stringsNumberCheckboxes = _const_js__WEBPACK_IMPORTED_MODULE_0__["Filters"][1].checkboxes.map(function (checkbox) {
  return checkbox.item;
});
var getCardsByFilter = function getCardsByFilter(cards, checkboxNames, minPrice, maxPrice) {
  var guitarTypeCheckedCheckboxes = checkboxNames.filter(function (filter) {
    return guitarTypeCheckboxes.includes(filter);
  });
  var stirngsNumberCheckedCheckboxes = checkboxNames.filter(function (filter) {
    return stringsNumberCheckboxes.includes(filter);
  });

  if (checkboxNames.length) {
    if (guitarTypeCheckedCheckboxes.length && !stirngsNumberCheckedCheckboxes.length) {
      return getSameGuitarType(cards, guitarTypeCheckedCheckboxes, minPrice, maxPrice);
    } else if (!guitarTypeCheckedCheckboxes.length && stirngsNumberCheckedCheckboxes.length) {
      return getSameStringsType(cards, stirngsNumberCheckedCheckboxes, minPrice, maxPrice);
    } else {
      return getSameFilters(cards, checkboxNames, minPrice, maxPrice);
    }
  } else {
    return cards.filter(function (card) {
      return getSamePrice(card, minPrice, maxPrice);
    });
  }
};

/***/ }),

/***/ "./source/js/utils/format.js":
/*!***********************************!*\
  !*** ./source/js/utils/format.js ***!
  \***********************************/
/*! exports provided: formatPrice, createArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatPrice", function() { return formatPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createArray", function() { return createArray; });
var formatPrice = function formatPrice(price) {
  return price.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
};
var createArray = function createArray(maxValue) {
  var array = [];

  for (var i = 1; i <= maxValue; i++) {
    array.push(i);
  }

  return array;
};

/***/ }),

/***/ "./source/js/utils/popup.js":
/*!**********************************!*\
  !*** ./source/js/utils/popup.js ***!
  \**********************************/
/*! exports provided: openPopup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openPopup", function() { return openPopup; });
var openPopup = function openPopup(popup) {
  var closePopup = popup.querySelector(".popup__close-button");
  var overlay = document.querySelector(".overlay");
  var body = document.querySelector("body");

  var onOpenButtonClick = function onOpenButtonClick() {
    popup.classList.remove("popup--closed");
    overlay.classList.remove("overlay--hidden");
    body.classList.add("no-scroll");
    window.addEventListener("keydown", onEscPress);
  };

  var onCloseButtonClick = function onCloseButtonClick() {
    popup.classList.add("popup--closed");
    overlay.classList.add("overlay--hidden");
    body.classList.remove("no-scroll");
    window.removeEventListener("keydown", onEscPress);
  };

  var onEscPress = function onEscPress(evt) {
    if (evt.keyCode === 27 && !popup.classList.contains("popup--closed")) {
      onCloseButtonClick(evt);
    }
  };

  onOpenButtonClick();
  closePopup.addEventListener("click", onCloseButtonClick);
  overlay.addEventListener("click", onCloseButtonClick);
};

/***/ }),

/***/ "./source/js/utils/render.js":
/*!***********************************!*\
  !*** ./source/js/utils/render.js ***!
  \***********************************/
/*! exports provided: RenderPosition, createElement, render, replace, remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderPosition", function() { return RenderPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return replace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
var RenderPosition = {
  AFTERBEGIN: "afterbegin",
  BEFOREEND: "beforeend"
};
var createElement = function createElement(template) {
  var newElement = document.createElement("div");
  newElement.innerHTML = template;
  return newElement.firstChild;
};
var render = function render(container, component, place) {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(component.getElement());
      break;

    case RenderPosition.BEFOREEND:
      container.append(component.getElement());
      break;
  }
};
var replace = function replace(newComponent, oldComponent) {
  var parentElement = oldComponent.getElement().parentElement;
  var newElement = newComponent.getElement();
  var oldElement = oldComponent.getElement();
  var isExistElements = !!(parentElement && newElement && oldElement);

  if (isExistElements && parentElement.contains(oldElement)) {
    parentElement.replaceChild(newElement, oldElement);
  }
};
var remove = function remove(component) {
  component.getElement().remove();
  component.removeElement();
};

/***/ })

/******/ });
//# sourceMappingURL=main.js.map