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

/***/ "./source/js/components/card.js":
/*!**************************************!*\
  !*** ./source/js/components/card.js ***!
  \**************************************/
/*! exports provided: createCardTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCardTemplate", function() { return createCardTemplate; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./source/js/utils.js");

var createCardTemplate = function createCardTemplate(_ref) {
  var item = _ref.item,
      title = _ref.title,
      price = _ref.price;
  return "<li>\n      <img width=\"68\" height=\"190\" src=\"img/guitars/guitar-".concat(item, ".png\" alt=\"\u0424\u043E\u0442\u043E \u0433\u0438\u0442\u0430\u0440\u044B\">\n      <p>\n        <span class=\"catalog__rating-overlay\">\n          <span class=\"catalog__stars\">\n            <svg width=\"9.93\" height=\"9.48\"><use xlink:href=\"#icon-star\"></use></svg>\n            <svg width=\"9.93\" height=\"9.48\"><use xlink:href=\"#icon-star\"></use></svg>\n            <svg width=\"9.93\" height=\"9.48\"><use xlink:href=\"#icon-star\"></use></svg>\n            <svg width=\"9.93\" height=\"9.48\"><use xlink:href=\"#icon-star\"></use></svg>\n            <svg width=\"9.93\" height=\"9.48\"><use xlink:href=\"#icon-star\"></use></svg>\n          </span>\n          <span class=\"catalog__stars--full\">\n            <svg width=\"9.93\" height=\"9.48\"><use xlink:href=\"#icon-star-full\"></use></svg>\n            <svg width=\"9.93\" height=\"9.48\"><use xlink:href=\"#icon-star-full\"></use></svg>\n            <svg width=\"9.93\" height=\"9.48\"><use xlink:href=\"#icon-star-full\"></use></svg>\n            <svg width=\"9.93\" height=\"9.48\"><use xlink:href=\"#icon-star-full\"></use></svg>\n            <svg width=\"9.93\" height=\"9.48\"><use xlink:href=\"#icon-star-full\"></use></svg>\n          </span>\n        </span>\n        <span>15</span>\n      </p>\n      <p>\n        <span>").concat(title, "</span>\n        <span>").concat(Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["formatPrice"])(price), " \u20BD</span>\n      </p>\n      <p>\n        <a class=\"button\" href=\"https://htmlacademy.ru/\">\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435</a>\n        <button class=\"button button--buy\" type=\"button\">\n          <svg width=\"10.36\" height=\"10.5\"><use xlink:href=\"#icon-buy\"></use></svg>\n          \u041A\u0443\u043F\u0438\u0442\u044C\n        </button>\n      </p>\n    </li>");
};

/***/ }),

/***/ "./source/js/main.js":
/*!***************************!*\
  !*** ./source/js/main.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_card_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/card.js */ "./source/js/components/card.js");
/* harmony import */ var _mocks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mocks.js */ "./source/js/mocks.js");


var CARDS_PER_PAGE = 9;

var render = function render(container, template, place) {
  container.insertAdjacentHTML(place, template);
};

var catalogList = document.querySelector(".catalog__list");
_mocks_js__WEBPACK_IMPORTED_MODULE_1__["GUITARS"].slice(0, CARDS_PER_PAGE).forEach(function (card) {
  return render(catalogList, Object(_components_card_js__WEBPACK_IMPORTED_MODULE_0__["createCardTemplate"])(card), "beforeend");
});

/***/ }),

/***/ "./source/js/mocks.js":
/*!****************************!*\
  !*** ./source/js/mocks.js ***!
  \****************************/
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

/***/ "./source/js/utils.js":
/*!****************************!*\
  !*** ./source/js/utils.js ***!
  \****************************/
/*! exports provided: formatPrice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatPrice", function() { return formatPrice; });
var formatPrice = function formatPrice(price) {
  return price.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
};

/***/ })

/******/ });
//# sourceMappingURL=main.js.map