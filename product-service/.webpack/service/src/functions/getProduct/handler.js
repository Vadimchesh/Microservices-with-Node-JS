/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functions/getProduct/handler.ts":
/*!*********************************************!*\
  !*** ./src/functions/getProduct/handler.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"main\": () => (/* binding */ main)\n/* harmony export */ });\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ \"source-map-support/register\");\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _libs_apiGateway__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @libs/apiGateway */ \"./src/libs/apiGateway.ts\");\n/* harmony import */ var _libs_lambda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @libs/lambda */ \"./src/libs/lambda.ts\");\n/* harmony import */ var src_productList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/productList */ \"./src/productList.ts\");\n\n\n\n\nconst getProduct = async (event) => {\n    return (0,_libs_apiGateway__WEBPACK_IMPORTED_MODULE_1__.formatJSONResponse)({\n        products: src_productList__WEBPACK_IMPORTED_MODULE_3__.productList,\n        event,\n    });\n};\nconst main = (0,_libs_lambda__WEBPACK_IMPORTED_MODULE_2__.middyfy)(getProduct);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL2dldFByb2R1Y3QvaGFuZGxlci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUdBO0FBQ0E7QUFHQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvZHVjdC8uL3NyYy9mdW5jdGlvbnMvZ2V0UHJvZHVjdC9oYW5kbGVyLnRzPzU4MmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXInO1xuXG5pbXBvcnQgdHlwZSB7IFZhbGlkYXRlZEV2ZW50QVBJR2F0ZXdheVByb3h5RXZlbnQgfSBmcm9tICdAbGlicy9hcGlHYXRld2F5JztcbmltcG9ydCB7IGZvcm1hdEpTT05SZXNwb25zZSB9IGZyb20gJ0BsaWJzL2FwaUdhdGV3YXknO1xuaW1wb3J0IHsgbWlkZHlmeSB9IGZyb20gJ0BsaWJzL2xhbWJkYSc7XG5cbmltcG9ydCBzY2hlbWEgZnJvbSAnLi4vLi4vc2NoZW1hJztcbmltcG9ydCB7IHByb2R1Y3RMaXN0IH0gZnJvbSAnc3JjL3Byb2R1Y3RMaXN0JztcblxuY29uc3QgZ2V0UHJvZHVjdDogVmFsaWRhdGVkRXZlbnRBUElHYXRld2F5UHJveHlFdmVudDx0eXBlb2Ygc2NoZW1hPiA9IGFzeW5jIChcbiAgZXZlbnRcbikgPT4ge1xuICByZXR1cm4gZm9ybWF0SlNPTlJlc3BvbnNlKHtcbiAgICBwcm9kdWN0czogcHJvZHVjdExpc3QsXG4gICAgZXZlbnQsXG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IG1haW4gPSBtaWRkeWZ5KGdldFByb2R1Y3QpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/functions/getProduct/handler.ts\n");

/***/ }),

/***/ "./src/libs/apiGateway.ts":
/*!********************************!*\
  !*** ./src/libs/apiGateway.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"formatJSONResponse\": () => (/* binding */ formatJSONResponse)\n/* harmony export */ });\nconst formatJSONResponse = (response) => {\n    return {\n        statusCode: 200,\n        headers: {\n            'Access-Control-Allow-Origin': '*',\n            'Access-Control-Allow-Credentials': true,\n        },\n        body: JSON.stringify(response),\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9hcGlHYXRld2F5LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2R1Y3QvLi9zcmMvbGlicy9hcGlHYXRld2F5LnRzPzYyNTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge1xuICBBUElHYXRld2F5UHJveHlFdmVudCxcbiAgQVBJR2F0ZXdheVByb3h5UmVzdWx0LFxuICBIYW5kbGVyLFxufSBmcm9tICdhd3MtbGFtYmRhJztcbmltcG9ydCB0eXBlIHsgRnJvbVNjaGVtYSB9IGZyb20gJ2pzb24tc2NoZW1hLXRvLXRzJztcblxudHlwZSBWYWxpZGF0ZWRBUElHYXRld2F5UHJveHlFdmVudDxTPiA9IE9taXQ8QVBJR2F0ZXdheVByb3h5RXZlbnQsICdib2R5Jz4gJiB7XG4gIGJvZHk6IEZyb21TY2hlbWE8Uz47XG59O1xuZXhwb3J0IHR5cGUgVmFsaWRhdGVkRXZlbnRBUElHYXRld2F5UHJveHlFdmVudDxTPiA9IEhhbmRsZXI8XG4gIFZhbGlkYXRlZEFQSUdhdGV3YXlQcm94eUV2ZW50PFM+LFxuICBBUElHYXRld2F5UHJveHlSZXN1bHRcbj47XG5cbmV4cG9ydCBjb25zdCBmb3JtYXRKU09OUmVzcG9uc2UgPSAocmVzcG9uc2U6IFJlY29yZDxzdHJpbmcsIHVua25vd24+KSA9PiB7XG4gIHJldHVybiB7XG4gICAgc3RhdHVzQ29kZTogMjAwLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKicsXG4gICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctQ3JlZGVudGlhbHMnOiB0cnVlLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpLFxuICB9O1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/libs/apiGateway.ts\n");

/***/ }),

/***/ "./src/libs/lambda.ts":
/*!****************************!*\
  !*** ./src/libs/lambda.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"middyfy\": () => (/* binding */ middyfy)\n/* harmony export */ });\n/* harmony import */ var _middy_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @middy/core */ \"@middy/core\");\n/* harmony import */ var _middy_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_middy_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @middy/http-json-body-parser */ \"@middy/http-json-body-parser\");\n/* harmony import */ var _middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst middyfy = (handler) => {\n    return _middy_core__WEBPACK_IMPORTED_MODULE_0___default()(handler).use(_middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1___default()());\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9sYW1iZGEudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvZHVjdC8uL3NyYy9saWJzL2xhbWJkYS50cz82YjI1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtaWRkeSBmcm9tICdAbWlkZHkvY29yZSc7XG5pbXBvcnQgbWlkZHlKc29uQm9keVBhcnNlciBmcm9tICdAbWlkZHkvaHR0cC1qc29uLWJvZHktcGFyc2VyJztcblxuZXhwb3J0IGNvbnN0IG1pZGR5ZnkgPSAoaGFuZGxlcikgPT4ge1xuICByZXR1cm4gbWlkZHkoaGFuZGxlcikudXNlKG1pZGR5SnNvbkJvZHlQYXJzZXIoKSk7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/libs/lambda.ts\n");

/***/ }),

/***/ "./src/productList.ts":
/*!****************************!*\
  !*** ./src/productList.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"productList\": () => (/* binding */ productList)\n/* harmony export */ });\nconst productList = [\n    {\n        count: 4,\n        description: 'Short Product Description1',\n        id: '7567ec4b-b10c-48c5-9345-fc73c48a80aa',\n        price: 2.4,\n        title: 'Sock 1',\n    },\n    {\n        count: 6,\n        description: 'Short Product Description3',\n        id: '7567ec4b-b10c-48c5-9345-fc73c48a80a0',\n        price: 10,\n        title: 'Sock 2',\n    },\n    {\n        count: 7,\n        description: 'Short Product Description2',\n        id: '7567ec4b-b10c-48c5-9345-fc73c48a80a2',\n        price: 23,\n        title: 'Sock 3',\n    },\n    {\n        count: 12,\n        description: 'Short Product Description7',\n        id: '7567ec4b-b10c-48c5-9345-fc73c48a80a1',\n        price: 15,\n        title: 'Sock 4',\n    },\n    {\n        count: 7,\n        description: 'Short Product Description2',\n        id: '7567ec4b-b10c-48c5-9345-fc73c48a80a2',\n        price: 23,\n        title: 'Product',\n    },\n    {\n        count: 8,\n        description: 'Short Product Description4',\n        id: '7567ec4b-b10c-48c5-9345-fc73348a80a1',\n        price: 15,\n        title: 'Sock 5',\n    },\n    {\n        count: 2,\n        description: 'Short Product Descriptio1',\n        id: '7567ec4b-b10c-48c5-9445-fc73c48a80a2',\n        price: 23,\n        title: 'Sock6',\n    },\n    {\n        count: 3,\n        description: 'Short Product Description7',\n        id: '7567ec4b-b10c-45c5-9345-fc73c48a80a1',\n        price: 15,\n        title: 'Sock7',\n    },\n];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHJvZHVjdExpc3QudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvZHVjdC8uL3NyYy9wcm9kdWN0TGlzdC50cz9jNTAwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBwcm9kdWN0TGlzdCA9IFtcbiAge1xuICAgIGNvdW50OiA0LFxuICAgIGRlc2NyaXB0aW9uOiAnU2hvcnQgUHJvZHVjdCBEZXNjcmlwdGlvbjEnLFxuICAgIGlkOiAnNzU2N2VjNGItYjEwYy00OGM1LTkzNDUtZmM3M2M0OGE4MGFhJyxcbiAgICBwcmljZTogMi40LFxuICAgIHRpdGxlOiAnU29jayAxJyxcbiAgfSxcbiAge1xuICAgIGNvdW50OiA2LFxuICAgIGRlc2NyaXB0aW9uOiAnU2hvcnQgUHJvZHVjdCBEZXNjcmlwdGlvbjMnLFxuICAgIGlkOiAnNzU2N2VjNGItYjEwYy00OGM1LTkzNDUtZmM3M2M0OGE4MGEwJyxcbiAgICBwcmljZTogMTAsXG4gICAgdGl0bGU6ICdTb2NrIDInLFxuICB9LFxuICB7XG4gICAgY291bnQ6IDcsXG4gICAgZGVzY3JpcHRpb246ICdTaG9ydCBQcm9kdWN0IERlc2NyaXB0aW9uMicsXG4gICAgaWQ6ICc3NTY3ZWM0Yi1iMTBjLTQ4YzUtOTM0NS1mYzczYzQ4YTgwYTInLFxuICAgIHByaWNlOiAyMyxcbiAgICB0aXRsZTogJ1NvY2sgMycsXG4gIH0sXG4gIHtcbiAgICBjb3VudDogMTIsXG4gICAgZGVzY3JpcHRpb246ICdTaG9ydCBQcm9kdWN0IERlc2NyaXB0aW9uNycsXG4gICAgaWQ6ICc3NTY3ZWM0Yi1iMTBjLTQ4YzUtOTM0NS1mYzczYzQ4YTgwYTEnLFxuICAgIHByaWNlOiAxNSxcbiAgICB0aXRsZTogJ1NvY2sgNCcsXG4gIH0sXG4gIHtcbiAgICBjb3VudDogNyxcbiAgICBkZXNjcmlwdGlvbjogJ1Nob3J0IFByb2R1Y3QgRGVzY3JpcHRpb24yJyxcbiAgICBpZDogJzc1NjdlYzRiLWIxMGMtNDhjNS05MzQ1LWZjNzNjNDhhODBhMicsXG4gICAgcHJpY2U6IDIzLFxuICAgIHRpdGxlOiAnUHJvZHVjdCcsXG4gIH0sXG4gIHtcbiAgICBjb3VudDogOCxcbiAgICBkZXNjcmlwdGlvbjogJ1Nob3J0IFByb2R1Y3QgRGVzY3JpcHRpb240JyxcbiAgICBpZDogJzc1NjdlYzRiLWIxMGMtNDhjNS05MzQ1LWZjNzMzNDhhODBhMScsXG4gICAgcHJpY2U6IDE1LFxuICAgIHRpdGxlOiAnU29jayA1JyxcbiAgfSxcbiAge1xuICAgIGNvdW50OiAyLFxuICAgIGRlc2NyaXB0aW9uOiAnU2hvcnQgUHJvZHVjdCBEZXNjcmlwdGlvMScsXG4gICAgaWQ6ICc3NTY3ZWM0Yi1iMTBjLTQ4YzUtOTQ0NS1mYzczYzQ4YTgwYTInLFxuICAgIHByaWNlOiAyMyxcbiAgICB0aXRsZTogJ1NvY2s2JyxcbiAgfSxcbiAge1xuICAgIGNvdW50OiAzLFxuICAgIGRlc2NyaXB0aW9uOiAnU2hvcnQgUHJvZHVjdCBEZXNjcmlwdGlvbjcnLFxuICAgIGlkOiAnNzU2N2VjNGItYjEwYy00NWM1LTkzNDUtZmM3M2M0OGE4MGExJyxcbiAgICBwcmljZTogMTUsXG4gICAgdGl0bGU6ICdTb2NrNycsXG4gIH0sXG5dO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/productList.ts\n");

/***/ }),

/***/ "@middy/core":
/*!******************************!*\
  !*** external "@middy/core" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@middy/core");

/***/ }),

/***/ "@middy/http-json-body-parser":
/*!***********************************************!*\
  !*** external "@middy/http-json-body-parser" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@middy/http-json-body-parser");

/***/ }),

/***/ "source-map-support/register":
/*!**********************************************!*\
  !*** external "source-map-support/register" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("source-map-support/register");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/functions/getProduct/handler.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;