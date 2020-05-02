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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _nacrtaj_HTML_elemente_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nacrtaj_HTML_elemente.js */ \"./src/nacrtaj_HTML_elemente.js\");\n\r\n\r\nObject(_nacrtaj_HTML_elemente_js__WEBPACK_IMPORTED_MODULE_0__[\"nacrtajPocetnuStranu\"])(document.body);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBuYWNydGFqUG9jZXRudVN0cmFudSB9IGZyb20gXCIuL25hY3J0YWpfSFRNTF9lbGVtZW50ZS5qc1wiO1xyXG5cclxubmFjcnRhalBvY2V0bnVTdHJhbnUoZG9jdW1lbnQuYm9keSk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/nacrtaj_HTML_elemente.js":
/*!**************************************!*\
  !*** ./src/nacrtaj_HTML_elemente.js ***!
  \**************************************/
/*! exports provided: nacrtajPocetnuStranu, napraviElement, nacrtajDugmice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"nacrtajPocetnuStranu\", function() { return nacrtajPocetnuStranu; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"napraviElement\", function() { return napraviElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"nacrtajDugmice\", function() { return nacrtajDugmice; });\nfunction nacrtajPocetnuStranu(roditelj)\r\n{\r\n    const kontejner = napraviElement(roditelj, \"div\", \"kontejner\");\r\n    const naslov= napraviElement(roditelj, \"div\", naslov);\r\n    const dugmiciSlika= napraviElement(roditelj,\"div\", \"dugmiciSlika\");\r\n\r\n    const dugmici= nacrtajDugmice(dugmiciSlika);\r\n    const slika= napraviElement(dugmiciSlika,\"div\",\"slika\");\r\n\r\n\r\n\r\n}\r\n\r\nfunction napraviElement(roditelj, tip, imeKlase)\r\n{\r\n    let element = document.createElement(tip);\r\n    element.className = imeKlase;\r\n    roditelj.appendChild(element);\r\n    return element;\r\n}\r\n\r\nfunction nacrtajDugmice(roditelj)\r\n{\r\n        \r\n\r\n\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbmFjcnRhal9IVE1MX2VsZW1lbnRlLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL25hY3J0YWpfSFRNTF9lbGVtZW50ZS5qcz9iZGFmIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBuYWNydGFqUG9jZXRudVN0cmFudShyb2RpdGVsailcclxue1xyXG4gICAgY29uc3Qga29udGVqbmVyID0gbmFwcmF2aUVsZW1lbnQocm9kaXRlbGosIFwiZGl2XCIsIFwia29udGVqbmVyXCIpO1xyXG4gICAgY29uc3QgbmFzbG92PSBuYXByYXZpRWxlbWVudChyb2RpdGVsaiwgXCJkaXZcIiwgbmFzbG92KTtcclxuICAgIGNvbnN0IGR1Z21pY2lTbGlrYT0gbmFwcmF2aUVsZW1lbnQocm9kaXRlbGosXCJkaXZcIiwgXCJkdWdtaWNpU2xpa2FcIik7XHJcblxyXG4gICAgY29uc3QgZHVnbWljaT0gbmFjcnRhakR1Z21pY2UoZHVnbWljaVNsaWthKTtcclxuICAgIGNvbnN0IHNsaWthPSBuYXByYXZpRWxlbWVudChkdWdtaWNpU2xpa2EsXCJkaXZcIixcInNsaWthXCIpO1xyXG5cclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbmFwcmF2aUVsZW1lbnQocm9kaXRlbGosIHRpcCwgaW1lS2xhc2UpXHJcbntcclxuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0aXApO1xyXG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBpbWVLbGFzZTtcclxuICAgIHJvZGl0ZWxqLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBuYWNydGFqRHVnbWljZShyb2RpdGVsailcclxue1xyXG4gICAgICAgIFxyXG5cclxuXHJcbn0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/nacrtaj_HTML_elemente.js\n");

/***/ })

/******/ });