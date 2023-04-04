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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/page */ \"./src/modules/page.js\");\n\n\n(0,_modules_page__WEBPACK_IMPORTED_MODULE_0__.loadHomePage)();\n\n\n//# sourceURL=webpack://todo_list/./src/index.js?");

/***/ }),

/***/ "./src/modules/footer.js":
/*!*******************************!*\
  !*** ./src/modules/footer.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadFooter\": () => (/* binding */ loadFooter)\n/* harmony export */ });\n\nfunction loadFooter() {\n    const page = document.querySelector(\".page\");\n\n    const footer = document.createElement(\"footer\");\n    footer.textContent = \"Made by Aturnip 2023\";\n    \n    page.appendChild(footer);\n}\n\n\n\n//# sourceURL=webpack://todo_list/./src/modules/footer.js?");

/***/ }),

/***/ "./src/modules/header.js":
/*!*******************************!*\
  !*** ./src/modules/header.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadHeader\": () => (/* binding */ loadHeader)\n/* harmony export */ });\n\nfunction loadHeader() {\n    const page = document.querySelector(\".page\");\n\n    const header = document.createElement(\"div\");\n    header.classList.add(\"header\")\n    header.textContent = \"Your Todo List\";\n\n    page.appendChild(header);\n}\n\n\n\n//# sourceURL=webpack://todo_list/./src/modules/header.js?");

/***/ }),

/***/ "./src/modules/main.js":
/*!*****************************!*\
  !*** ./src/modules/main.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadMain\": () => (/* binding */ loadMain)\n/* harmony export */ });\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ \"./src/modules/modal.js\");\n\n\nfunction loadMain() {\n    const page = document.querySelector(\".page\");\n\n    const main = document.createElement(\"div\");\n    main.classList.add(\"main\");\n    \n    page.appendChild(main);\n    (0,_modal__WEBPACK_IMPORTED_MODULE_0__.loadModal)();\n    loadButton();\n    showModal();\n}\n\nfunction loadButton() {\n    const main = document.querySelector(\".main\");\n\n    const addButton = document.createElement(\"button\");\n    addButton.classList.add(\"btn\")\n    addButton.textContent = \"Add a todo\";\n    main.appendChild(addButton);\n}\n\nfunction showModal() {\n    const button = document.querySelector(\".btn\");\n    const modal = document.querySelector(\".modal\");\n\n    button.addEventListener(\"click\", () => {\n        modal.style.display = \"block\";\n        window.onclick = function(event) {\n            if (event.target == modal) {\n              modal.style.display = \"none\";\n            }\n          }\n    })\n}\n\n\n\n//# sourceURL=webpack://todo_list/./src/modules/main.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadModal\": () => (/* binding */ loadModal)\n/* harmony export */ });\n\nfunction loadModal() {\n    const page = document.querySelector(\".page\");\n\n    const modal = document.createElement(\"div\");\n    modal.classList.add(\"modal\");\n\n    const modalContent = document.createElement(\"div\");\n    modalContent.classList.add(\"modal_content\"); \n\n    modalContent.textContent = \"Text in a modal\";\n    \n    modal.appendChild(modalContent);\n    page.appendChild(modal);\n}\n\n\n\n\n//# sourceURL=webpack://todo_list/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/page.js":
/*!*****************************!*\
  !*** ./src/modules/page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadHomePage\": () => (/* binding */ loadHomePage)\n/* harmony export */ });\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer */ \"./src/modules/footer.js\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ \"./src/modules/header.js\");\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main */ \"./src/modules/main.js\");\n\n\n\n\nfunction loadHomePage() {\n    const body = document.querySelector(\"body\");\n\n    const page = document.createElement(\"div\");\n    page.classList.add(\"page\");\n\n    body.appendChild(page);\n\n    (0,_header__WEBPACK_IMPORTED_MODULE_1__.loadHeader)();\n    (0,_main__WEBPACK_IMPORTED_MODULE_2__.loadMain)();\n    (0,_footer__WEBPACK_IMPORTED_MODULE_0__.loadFooter)();\n}\n\n\n\n//# sourceURL=webpack://todo_list/./src/modules/page.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;