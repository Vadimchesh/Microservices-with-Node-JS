/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/getProductById.ts":
/*!*******************************!*\
  !*** ./src/getProductById.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.handler = void 0;\nconst productList_json_1 = __importDefault(__webpack_require__(/*! ./productList.json */ \"./src/productList.json\"));\nconst responsHelper_1 = __webpack_require__(/*! ./responsHelper */ \"./src/responsHelper.ts\");\nasync function handler(event) {\n    const { id: idParametr } = event.pathParameters;\n    if (!idParametr)\n        return responsHelper_1.respondJson({ message: 'No product' }, 400);\n    const product = productList_json_1.default.find(({ id }) => id === idParametr);\n    if (!product)\n        return responsHelper_1.respondJson({ message: 'No product' }, 400);\n    return responsHelper_1.respondJson({ ...product }, 200);\n}\nexports.handler = handler;\n\n\n//# sourceURL=webpack://product-service/./src/getProductById.ts?");

/***/ }),

/***/ "./src/responsHelper.ts":
/*!******************************!*\
  !*** ./src/responsHelper.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.respondJson = void 0;\nfunction respondJson(body, statusCode) {\n    return {\n        statusCode,\n        headers: {\n            'Content-Type': 'application/json',\n            'Access-Control-Allow-Origin': '*',\n            'Access-Control-Allow-Credentials': true,\n        },\n        body: JSON.stringify(body),\n    };\n}\nexports.respondJson = respondJson;\n\n\n//# sourceURL=webpack://product-service/./src/responsHelper.ts?");

/***/ }),

/***/ "./src/productList.json":
/*!******************************!*\
  !*** ./src/productList.json ***!
  \******************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('[{\"count\":4,\"description\":\"The Very Cherry Mickey sock says what we\\'re all thinking: a design so sweet we could eat it. After some thorough testing, we can confidently say that you should put these yummy socks on your feet, not in your mouth. Pair up: also available in sizes for kids.\",\"id\":\"7567ec4b-b10c-48c5-9345-fc73c48a80aa\",\"price\":255.99,\"title\":\"Very Cherry Mickey Sock\"},{\"count\":6,\"description\":\"The missing piece on days when the world feels like a giant puzzle: the Keep It Together sock. The 80\\'s inspired special edition design turns your favourite Disney characters\\' signature details into a colour-popping pattern.\",\"id\":\"7567ec4b-b10c-48c5-9345-fc73c48a80a0\",\"price\":1199,\"title\":\"Keep It Together Sock\"},{\"count\":7,\"description\":\"Do some cloud watching without going out. The sky\\'s the limit.\",\"id\":\"7567ec4b-b10c-48c5-9345-fc73c48a80a2\",\"price\":329,\"title\":\"Cloudy Sock\"},{\"count\":7,\"description\":\"Who can say no to a pair of Banana socks? The half moon-like curves in yellow and blue can be enjoyed as it is, or maybe you combine it with another design for a fruit salad style.\",\"id\":\"7567ec4b-b10c-48c5-9345-fc73c48a81a2\",\"price\":329,\"title\":\"Banana Sock\"}]');\n\n//# sourceURL=webpack://product-service/./src/productList.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/getProductById.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;