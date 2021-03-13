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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_sorting_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/sorting.js */ \"./src/js/components/sorting.js\");\n/* harmony import */ var _components_comments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/comments.js */ \"./src/js/components/comments.js\");\nconst Utils = __webpack_require__(/*! ./utils */ \"./src/js/utils.js\");\r\n\r\nnew Utils();\r\n\r\n\r\nconst url =\r\n  \"https://my-json-server.typicode.com/telegraph/front-end-exercise-contractors/comments\";\r\nconsole.log(\"tres\");\r\nconst _wrapper = document.querySelector(\".wrapper\");\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", function () {\r\n  // Create new instance\r\n  const _sorting = new _components_sorting_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n  _sorting.renderSection(_wrapper);\r\n  const _comments = new _components_comments_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n  _comments.fetchContents(url, _wrapper);\r\n});\r\n\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/components/comment.js":
/*!**************************************!*\
  !*** ./src/js/components/comment.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/helpers.js */ \"./src/js/helpers/helpers.js\");\n\r\n\r\n/**\r\n *\r\n * @param {Object} item\r\n\r\n */\r\nclass Comment {\r\n  constructor(item) {\r\n    //this.comments = this.fetchContents(url);\r\n  }\r\n\r\n  /** outputs the comment on page\r\n   * @param {object} item\r\n   *\r\n   */\r\n\r\n  renderArticle(item) {\r\n    let article = Object(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"createNode\"])(\"article\");\r\n    article.classList.add(\"content\");\r\n\r\n    let h1 = Object(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"createNode\"])(\"h1\");\r\n    h1.innerHTML = `${item.name}`;\r\n\r\n    let _date = Object(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"createNode\"])(\"date\");\r\n    _date.datetime = Object(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"formatDate\"])(item.date);\r\n    _date.innerHTML = `${Object(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"formatDate\"])(item.date)}`;\r\n\r\n    let span = Object(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"createNode\"])(\"span\");\r\n    span.innerHTML = `${item.likes} Likes`;\r\n\r\n    let headerDiv = Object(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"createNode\"])(\"header\");\r\n    let innerDiv = Object(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"createNode\"])(\"div\");\r\n    innerDiv.classList.add(\"is-flex\");\r\n\r\n    Object(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"append\"])(headerDiv, innerDiv);\r\n    Object(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"append\"])(innerDiv, h1);\r\n    Object(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"append\"])(innerDiv, _date);\r\n    Object(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"append\"])(headerDiv, span);\r\n\r\n    Object(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"append\"])(article, headerDiv);\r\n\r\n    let p = Object(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"createNode\"])(\"p\");\r\n    p.innerHTML = `${item.body}`;\r\n    Object(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"append\"])(article, p);\r\n\r\n    return article;\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Comment);\r\n\n\n//# sourceURL=webpack:///./src/js/components/comment.js?");

/***/ }),

/***/ "./src/js/components/comments.js":
/*!***************************************!*\
  !*** ./src/js/components/comments.js ***!
  \***************************************/
/*! exports provided: commentsArray, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"commentsArray\", function() { return commentsArray; });\n/* harmony import */ var _comment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comment.js */ \"./src/js/components/comment.js\");\n/* harmony import */ var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/helpers.js */ \"./src/js/helpers/helpers.js\");\n\r\n\r\n\r\nlet commentsArray;\r\n/**\r\n * @param {String} url\r\n * @param {Object} _wrapper\r\n */\r\nclass Comments {\r\n  constructor(url, _wrapper) {\r\n    //this.comments = this.fetchContents(url, _wrapper);\r\n  }\r\n\r\n  /** Outputs number of comments to screen\r\n   *\r\n   * @param {String} _length\r\n   */\r\n\r\n  renderCommentLength(_length) {\r\n    document\r\n      .querySelector(\".comments-head\")\r\n      .insertAdjacentHTML(\"afterbegin\", `<h2>${_length} Comments</h2`);\r\n  }\r\n\r\n  /** Outputs individual comment\r\n   *\r\n   * @param {Array} responseJson\r\n   * @return {Object} HTML element\r\n   */\r\n\r\n  renderComment(responseJson, _wrapper) {\r\n    console.log(\"_wrapper ---\", _wrapper);\r\n    return responseJson.map(function (comment) {\r\n      const _comment = new _comment_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n      Object(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__[\"append\"])(_wrapper, _comment.renderArticle(comment));\r\n    });\r\n  }\r\n\r\n  /** API call to get data and update contents of page with\r\n   * call to renderComment method\r\n   *\r\n   * @return {JSON}\r\n   */\r\n  async fetchContents(url, _wrapper) {\r\n    const response = await fetch(url);\r\n    const responseJson = await response.json();\r\n    commentsArray = responseJson;\r\n\r\n    //inject comment count into header of wrapper section\r\n    // TODO : add svg\r\n    // TODO create component for this section\r\n    this.renderCommentLength(responseJson.length);\r\n\r\n    this.renderComment(responseJson, _wrapper);\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Comments);\r\n\n\n//# sourceURL=webpack:///./src/js/components/comments.js?");

/***/ }),

/***/ "./src/js/components/sorting.js":
/*!**************************************!*\
  !*** ./src/js/components/sorting.js ***!
  \**************************************/
/*! exports provided: reorderedArray, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reorderedArray\", function() { return reorderedArray; });\n/* harmony import */ var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/helpers.js */ \"./src/js/helpers/helpers.js\");\n/* harmony import */ var _comments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comments.js */ \"./src/js/components/comments.js\");\n/* harmony import */ var _comment_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comment.js */ \"./src/js/components/comment.js\");\n\r\n\r\n\r\n\r\n\r\nlet reorderedArray;\r\n\r\n/**\r\n * @param {object} _wrapper\r\n *\r\n */\r\nclass Sorting {\r\n  constructor(_wrapper) {}\r\n\r\n  /** Add click listener to element\r\n   * trigger call to this.sortComments\r\n   *\r\n   *@param {String} _class\r\n   */\r\n  addListener(_class) {\r\n    document.querySelectorAll(`.${_class}`).forEach((item) => {\r\n      item.addEventListener(\"click\", (event) => {\r\n        this.sortComments(event, _comments_js__WEBPACK_IMPORTED_MODULE_1__[\"commentsArray\"]);\r\n      });\r\n    });\r\n  }\r\n\r\n  /** Sort comments by either likes or date\r\n   *\r\n   *@param {Object} event\r\n   */\r\n  sortComments(event, commentsArray) {\r\n    //event.preventDefault();\r\n    let _fieldName = event.target.id == \"likes\" ? \"likes\" : \"date\";\r\n    console.log(\"commentsArray ---\", commentsArray);\r\n    console.log(\"_fieldName ===\", _fieldName);\r\n\r\n    if (_fieldName == \"likes\") {\r\n      reorderedArray = commentsArray.sort(\r\n        (a, b) => parseFloat(b.likes) - parseFloat(a.likes)\r\n      );\r\n\r\n      //console.log(reorderedArray);\r\n    } else {\r\n      reorderedArray = commentsArray.sort(function (a, b) {\r\n        // Turn your strings into dates, and then subtract them\r\n        // to get a value that is either negative, positive, or zero.\r\n        return new Date(b.date) - new Date(a.date);\r\n      });\r\n\r\n      //console.log(reorderedArray);\r\n    }\r\n\r\n    //console.log(\"reorderedArray ---\", reorderedArray);\r\n    // remove articles from DOM TODO tranfer to separate helper method\r\n    //let elem = document.querySelectorAll(\"article\");\r\n    let a_list = document.getElementsByTagName(\"article\");\r\n    for (let i = a_list.length - 1; i >= 0; i--) {\r\n      let a = a_list[i];\r\n\r\n      a.parentNode.removeChild(a);\r\n    }\r\n\r\n    //elem.remove();\r\n    // inject article element / comment using new sorted Array\r\n    setTimeout(function () {\r\n      reorderedArray.map(function (comment) {\r\n        const _comment = new _comment_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n        const _wrapper = document.querySelector(\".wrapper\");\r\n        Object(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"append\"])(_wrapper, _comment.renderArticle(comment));\r\n      });\r\n    }, 500);\r\n  }\r\n\r\n  /** Renders HTML for section above comments showing sorting buttons\r\n   *\r\n   *@param {Object} _wrapper\r\n   * @return {Object} header\r\n   */\r\n\r\n  renderSection(_wrapper) {\r\n    let header = Object(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"createNode\"])(\"header\");\r\n    header.classList.add(\"comments-head\");\r\n\r\n    let nav = Object(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"createNode\"])(\"nav\");\r\n    nav.innerHTML = ` <nav class=\"comments-head--nav\"><span class=\"is-bullet has-black-keyline\">Sort</span> <span\r\n    class=\"js-sort capsule--plain\" id=\"likes\">Likes</span>\r\n<span class=\"js-sort capsule--black\" id=\"new\">Newest</span>\r\n</nav>`;\r\n\r\n    Object(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"append\"])(header, nav);\r\n    Object(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"append\"])(_wrapper, header);\r\n\r\n    window.setTimeout(() => {\r\n      this.addListener(\"js-sort\");\r\n    }, 500);\r\n\r\n    return header;\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sorting);\r\n\n\n//# sourceURL=webpack:///./src/js/components/sorting.js?");

/***/ }),

/***/ "./src/js/helpers/helpers.js":
/*!***********************************!*\
  !*** ./src/js/helpers/helpers.js ***!
  \***********************************/
/*! exports provided: createNode, append, formatDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createNode\", function() { return createNode; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"append\", function() { return append; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formatDate\", function() { return formatDate; });\n/**\r\n * Creates HTML node in DOM\r\n * @param {String} element\r\n * @return {Object} dynamic HTML node\r\n */\r\nconst createNode = (element) => {\r\n  return document.createElement(element);\r\n};\r\n\r\n/**\r\n * Adds HTML element to a given parent element\r\n * @param {Object} parent\r\n * @param {Object} paelrent\r\n * @return {Object} dynamic HTML insertion of node\r\n */\r\nconst append = (parent, el) => {\r\n  return parent.appendChild(el);\r\n};\r\n/**\r\n * Formats dateTime string to date format\r\n * @param {String} dateString\r\n *\r\n * @return {Date} formated date\r\n */\r\nconst formatDate = (dateString) => {\r\n  let date = new Date(dateString);\r\n  date =\r\n    date.toLocaleDateString(undefined, { day: \"2-digit\" }) +\r\n    \" \" +\r\n    date.toLocaleDateString(undefined, { month: \"short\" }) +\r\n    \" \" +\r\n    date.toLocaleDateString(undefined, { year: \"numeric\" });\r\n  return date;\r\n};\r\n\n\n//# sourceURL=webpack:///./src/js/helpers/helpers.js?");

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\r\n * Dummy utility class to demonstrate a basic JS\r\n * structure and assoiciated test\r\n * @param {Object} params - containing:\r\n * @param {String} homePagePath - the pathname of the homepage (defaults to '/')\r\n */\r\nclass Utils {\r\n\tconstructor(params) {\r\n\t\tthis.params = Object.assign({\r\n\t\t\thomePagePath: '/'\r\n\t\t}, params);\r\n\t}\r\n\r\n\t/**\r\n\t * Is the user on the hompage\r\n\t * @return {Boolean}\r\n\t */\r\n\tisHomePage() {\r\n\t\treturn document.location.pathname === this.params.homePagePath;\r\n\t}\r\n}\r\n\r\nmodule.exports = Utils;\r\n\n\n//# sourceURL=webpack:///./src/js/utils.js?");

/***/ })

/******/ });