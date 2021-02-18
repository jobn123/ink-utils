/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["inkUtils"] = factory();
	else
		root["inkUtils"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/func/bind.js":
/*!**************************!*\
  !*** ./src/func/bind.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const call = __webpack_require__(/*! ./call */ \"./src/func/call.js\")\n\nmodule.exports = (Fn, obj, ...args) => {\n  return (...args2) => call.call(Fn, obj, ...args, ...args2)\n}\n\n//# sourceURL=webpack://inkUtils/./src/func/bind.js?");

/***/ }),

/***/ "./src/func/call.js":
/*!**************************!*\
  !*** ./src/func/call.js ***!
  \**************************/
/***/ ((module) => {

eval("module.exports =  {\n  call: (Fn, obj, ...args) => {\n    // 如果obj为null,undefined 指向全局\n    if (obj === undefined || obj === null) {\n      obj = globalThis\n    }\n    // 创建临时方法\n    obj.temp = Fn\n    // 调用temp方法\n    let result = obj.temp(...args)\n    // 删除临时方法\n    delete obj.temp\n    // 返回结果\n    return result\n  }\n}\n\n//# sourceURL=webpack://inkUtils/./src/func/call.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const bind = __webpack_require__(/*! ./func/bind */ \"./src/func/bind.js\")\n\n// \nfunction add(a, b) {\n  console.log(a + b + this.c)\n  return a + b + this.c\n}\n\nlet obj = {\n  c: 3\n}\n\nglobalThis.c = 100\n\n// let fn = bind(add, obj, 1, 2)\n// console.log(fn())\n\nlet fn = bind(add, obj)\nconsole.log(fn(1, 2))\n\n//# sourceURL=webpack://inkUtils/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});