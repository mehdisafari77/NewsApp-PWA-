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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/favorites.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/api.js":
/*!**************************!*\
  !*** ./assets/js/api.js ***!
  \**************************/
/*! exports provided: loadArticles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadArticles\", function() { return loadArticles; });\n/* harmony import */ var _topic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./topic */ \"./assets/js/topic.js\");\n // Loads articles\n\nfunction loadArticles() {\n  var BASE_URL = \"https://newsapi.org/v2/everything?sortBy=published&apiKey=e41ee36d9a714a199911b42cb75a4fe3&q=\";\n\n  var _getParams = getParams(),\n      query = _getParams.query;\n\n  return new Promise(function (resolve, reject) {\n    fetch(BASE_URL + query).then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      var articles = Object(_topic__WEBPACK_IMPORTED_MODULE_0__[\"createArticleIds\"])(data.articles);\n      resolve(articles);\n    });\n  });\n} // Return HTML for each article provided\n\nfunction createArticles(articleData) {\n  var fragment = document.createDocumentFragment();\n  articleData.forEach(function (data) {\n    var article = createArticle(data);\n    fragment.appendChild(article);\n  });\n  return fragment;\n}\n\n//# sourceURL=webpack:///./assets/js/api.js?");

/***/ }),

/***/ "./assets/js/domMethods.js":
/*!*********************************!*\
  !*** ./assets/js/domMethods.js ***!
  \*********************************/
/*! exports provided: createElement */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/MehdiSA/Desktop/Coding Journey/Berkeley Coding Bootcamp/NewsApp-PWA-/client/assets/js/domMethods.js: Identifier 'createPlaceholders' has already been declared. (63:9)\\n\\n\\u001b[0m \\u001b[90m 61 |\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 62 |\\u001b[39m \\u001b[90m// Create and return 4 placeholder articles\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 63 |\\u001b[39m \\u001b[36mfunction\\u001b[39m createPlaceholders() {\\u001b[0m\\n\\u001b[0m \\u001b[90m    |\\u001b[39m          \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 64 |\\u001b[39m   \\u001b[36mconst\\u001b[39m fragment \\u001b[33m=\\u001b[39m document\\u001b[33m.\\u001b[39mcreateDocumentFragment()\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 65 |\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 66 |\\u001b[39m   \\u001b[36mfor\\u001b[39m (\\u001b[36mlet\\u001b[39m i \\u001b[33m=\\u001b[39m \\u001b[35m0\\u001b[39m\\u001b[33m;\\u001b[39m i \\u001b[33m<\\u001b[39m \\u001b[35m4\\u001b[39m\\u001b[33m;\\u001b[39m i\\u001b[33m++\\u001b[39m) {\\u001b[0m\\n    at Parser._raise (/Users/MehdiSA/Desktop/Coding Journey/Berkeley Coding Bootcamp/NewsApp-PWA-/client/node_modules/@babel/parser/lib/index.js:541:17)\\n    at Parser.raiseWithData (/Users/MehdiSA/Desktop/Coding Journey/Berkeley Coding Bootcamp/NewsApp-PWA-/client/node_modules/@babel/parser/lib/index.js:534:17)\\n    at Parser.raise (/Users/MehdiSA/Desktop/Coding Journey/Berkeley Coding Bootcamp/NewsApp-PWA-/client/node_modules/@babel/parser/lib/index.js:495:17)\\n    at ScopeHandler.checkRedeclarationInScope (/Users/MehdiSA/Desktop/Coding Journey/Berkeley Coding Bootcamp/NewsApp-PWA-/client/node_modules/@babel/parser/lib/index.js:1688:12)\\n    at ScopeHandler.declareName (/Users/MehdiSA/Desktop/Coding Journey/Berkeley Coding Bootcamp/NewsApp-PWA-/client/node_modules/@babel/parser/lib/index.js:1654:12)\\n    at Parser.registerFunctionStatementId (/Users/MehdiSA/Desktop/Coding Journey/Berkeley Coding Bootcamp/NewsApp-PWA-/client/node_modules/@babel/parser/lib/index.js:14100:16)\\n    at Parser.parseFunction (/Users/MehdiSA/Desktop/Coding Journey/Berkeley Coding Bootcamp/NewsApp-PWA-/client/node_modules/@babel/parser/lib/index.js:14080:12)\\n    at Parser.parseFunctionStatement (/Users/MehdiSA/Desktop/Coding Journey/Berkeley Coding Bootcamp/NewsApp-PWA-/client/node_modules/@babel/parser/lib/index.js:13709:17)\\n    at Parser.parseStatementContent (/Users/MehdiSA/Desktop/Coding Journey/Berkeley Coding Bootcamp/NewsApp-PWA-/client/node_modules/@babel/parser/lib/index.js:13392:21)\\n    at Parser.parseStatement (/Users/MehdiSA/Desktop/Coding Journey/Berkeley Coding Bootcamp/NewsApp-PWA-/client/node_modules/@babel/parser/lib/index.js:13352:17)\\n    at Parser.parseBlockOrModuleBlockBody (/Users/MehdiSA/Desktop/Coding Journey/Berkeley Coding Bootcamp/NewsApp-PWA-/client/node_modules/@babel/parser/lib/index.js:13941:25)\\n    at Parser.parseBlockBody (/Users/MehdiSA/Desktop/Coding Journey/Berkeley Coding Bootcamp/NewsApp-PWA-/client/node_modules/@babel/parser/lib/index.js:13932:10)\\n    at Parser.parseProgram (/Users/MehdiSA/Desktop/Coding Journey/Berkeley Coding Bootcamp/NewsApp-PWA-/client/node_modules/@babel/parser/lib/index.js:13272:10)\\n    at Parser.parseTopLevel (/Users/MehdiSA/Desktop/Coding Journey/Berkeley Coding Bootcamp/NewsApp-PWA-/client/node_modules/@babel/parser/lib/index.js:13263:25)\\n    at Parser.parse (/Users/MehdiSA/Desktop/Coding Journey/Berkeley Coding Bootcamp/NewsApp-PWA-/client/node_modules/@babel/parser/lib/index.js:15037:10)\\n    at parse (/Users/MehdiSA/Desktop/Coding Journey/Berkeley Coding Bootcamp/NewsApp-PWA-/client/node_modules/@babel/parser/lib/index.js:15089:38)\\n    at parser (/Users/MehdiSA/Desktop/Coding Journey/Berkeley Coding Bootcamp/NewsApp-PWA-/client/node_modules/@babel/core/lib/parser/index.js:52:34)\\n    at parser.next (<anonymous>)\\n    at normalizeFile (/Users/MehdiSA/Desktop/Coding Journey/Berkeley Coding Bootcamp/NewsApp-PWA-/client/node_modules/@babel/core/lib/transformation/normalize-file.js:87:38)\\n    at normalizeFile.next (<anonymous>)\\n    at run (/Users/MehdiSA/Desktop/Coding Journey/Berkeley Coding Bootcamp/NewsApp-PWA-/client/node_modules/@babel/core/lib/transformation/index.js:29:50)\\n    at run.next (<anonymous>)\\n    at Function.transform (/Users/MehdiSA/Desktop/Coding Journey/Berkeley Coding Bootcamp/NewsApp-PWA-/client/node_modules/@babel/core/lib/transform.js:25:41)\\n    at transform.next (<anonymous>)\\n    at step (/Users/MehdiSA/Desktop/Coding Journey/Berkeley Coding Bootcamp/NewsApp-PWA-/client/node_modules/gensync/index.js:261:32)\\n    at /Users/MehdiSA/Desktop/Coding Journey/Berkeley Coding Bootcamp/NewsApp-PWA-/client/node_modules/gensync/index.js:273:13\\n    at async.call.result.err.err (/Users/MehdiSA/Desktop/Coding Journey/Berkeley Coding Bootcamp/NewsApp-PWA-/client/node_modules/gensync/index.js:223:11)\\n    at processTicksAndRejections (internal/process/task_queues.js:95:5)\");\n\n//# sourceURL=webpack:///./assets/js/domMethods.js?");

/***/ }),

/***/ "./assets/js/favorites.js":
/*!********************************!*\
  !*** ./assets/js/favorites.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _domMethods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domMethods */ \"./assets/js/domMethods.js\");\n/* harmony import */ var _indexedDB__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./indexedDB */ \"./assets/js/indexedDB.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ \"./assets/js/api.js\");\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utilities */ \"./assets/js/utilities.js\");\n// @TODO Add remove from favorites functionality\n\n\n\n // Empties article container and appends articles\n\nfunction renderArticles(articleData) {\n  Object(_domMethods__WEBPACK_IMPORTED_MODULE_0__[\"renderPlaceHolders\"])();\n  var articleContainer = document.querySelector(\".article-container\");\n  var topicHeader = document.querySelector(\"header h1\");\n  var articles = Object(_api__WEBPACK_IMPORTED_MODULE_2__[\"createArticles\"])(articleData);\n\n  while (articleContainer.firstChild) {\n    articleContainer.removeChild(articleContainer.firstChild);\n  }\n\n  var _getParams = Object(_utilities__WEBPACK_IMPORTED_MODULE_3__[\"getParams\"])(),\n      query = _getParams.query;\n\n  topicHeader.textContent = query;\n  articleContainer.appendChild(articles);\n} // Formats and returns date in MMMM/DD/YYYY format\n\n\nfunction formatDate(dateStr) {\n  var date = new Date(dateStr);\n  var options = {\n    year: \"numeric\",\n    month: \"long\",\n    day: \"numeric\"\n  };\n  return date.toLocaleDateString(options);\n}\n\nfunction loadPage() {\n  if (Object(_indexedDB__WEBPACK_IMPORTED_MODULE_1__[\"checkForIndexedDb\"])()) {\n    Object(_indexedDB__WEBPACK_IMPORTED_MODULE_1__[\"useIndexedDb\"])(\"articles\", \"ArticleStore\", \"get\").then(function (results) {\n      renderArticles(results);\n    });\n  }\n}\n\nloadPage();\n\n//# sourceURL=webpack:///./assets/js/favorites.js?");

/***/ }),

/***/ "./assets/js/indexedDB.js":
/*!********************************!*\
  !*** ./assets/js/indexedDB.js ***!
  \********************************/
/*! exports provided: checkForIndexedDb, useIndexedDb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkForIndexedDb\", function() { return checkForIndexedDb; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useIndexedDb\", function() { return useIndexedDb; });\n// Returns a promise that can be used to access a given store in IndexedDb\nfunction checkForIndexedDb() {\n  window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;\n  window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;\n  window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;\n\n  if (!window.indexedDB) {\n    console.log(\"Your browser doesn't support a stable version of IndexedDB.\");\n    return false;\n  }\n\n  return true;\n}\nfunction useIndexedDb(databaseName, storeName, method, object) {\n  return new Promise(function (resolve, reject) {\n    var request = window.indexedDB.open(databaseName, 1);\n    var db, tx, store;\n\n    request.onupgradeneeded = function (e) {\n      var db = request.result;\n      db.createObjectStore(storeName, {\n        keyPath: \"_id\"\n      });\n    };\n\n    request.onerror = function (e) {\n      console.log(\"There was an error\");\n    };\n\n    request.onsuccess = function (e) {\n      db = request.result;\n      tx = db.transaction(storeName, \"readwrite\");\n      store = tx.objectStore(storeName);\n\n      db.onerror = function (e) {\n        console.log(\"error\");\n      };\n\n      if (method === \"put\") {\n        store.put(object);\n      } else if (method === \"get\") {\n        var all = store.getAll();\n\n        all.onsuccess = function () {\n          resolve(all.result);\n        };\n      } else if (method === \"delete\") {\n        store[\"delete\"](object._id);\n      }\n\n      tx.oncomplete = function () {\n        db.close();\n      };\n    };\n  });\n}\n\n//# sourceURL=webpack:///./assets/js/indexedDB.js?");

/***/ }),

/***/ "./assets/js/topic.js":
/*!****************************!*\
  !*** ./assets/js/topic.js ***!
  \****************************/
/*! exports provided: createArticleIds, getParams */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/MehdiSA/Desktop/Coding Journey/Berkeley Coding Bootcamp/NewsApp-PWA-/client/assets/js/topic.js: Identifier 'createArticle' has already been declared. (71:9)\\n\\n\\u001b[0m \\u001b[90m 69 |\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 70 |\\u001b[39m \\u001b[90m// Returns markup for a single article\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 71 |\\u001b[39m \\u001b[36mfunction\\u001b[39m createArticle({\\u001b[0m\\n\\u001b[0m \\u001b[90m    |\\u001b[39m          \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 72 |\\u001b[39m   source\\u001b[33m,\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 73 |\\u001b[39m   author\\u001b[33m,\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 74 |\\u001b[39m   title\\u001b[33m,\\u001b[39m\\u001b[0m\\n    at Parser._raise (/Users/MehdiSA/Desktop/Coding Journey/Berkeley Coding Bootcamp/NewsApp-PWA-/client/node_modules/@babel/parser/lib/index.js:541:17)\\n    at Parser.raiseWithData (/Users/MehdiSA/Desktop/Coding Journey/Berkeley Coding Bootcamp/NewsApp-PWA-/client/node_modules/@babel/parser/lib/index.js:534:17)\\n    at Parser.raise (/Users/MehdiSA/Desktop/Coding Journey/Berkeley Coding Bootcamp/NewsApp-PWA-/client/node_modules/@babel/parser/lib/index.js:495:17)\\n    at ScopeHandler.checkRedeclarationInScope (/Users/MehdiSA/Desktop/Coding Journey/Berkeley Coding Bootcamp/NewsApp-PWA-/client/node_modules/@babel/parser/lib/index.js:1688:12)\\n    at ScopeHandler.declareName (/Users/MehdiSA/Desktop/Coding Journey/Berkeley Coding Bootcamp/NewsApp-PWA-/client/node_modules/@babel/parser/lib/index.js:1654:12)\\n    at Parser.registerFunctionStatementId (/Users/MehdiSA/Desktop/Coding Journey/Berkeley Coding Bootcamp/NewsApp-PWA-/client/node_modules/@babel/parser/lib/index.js:14100:16)\\n    at Parser.parseFunction (/Users/MehdiSA/Desktop/Coding Journey/Berkeley Coding Bootcamp/NewsApp-PWA-/client/node_modules/@babel/parser/lib/index.js:14080:12)\\n    at Parser.parseFunctionStatement (/Users/MehdiSA/Desktop/Coding Journey/Berkeley Coding Bootcamp/NewsApp-PWA-/client/node_modules/@babel/parser/lib/index.js:13709:17)\\n    at Parser.parseStatementContent (/Users/MehdiSA/Desktop/Coding Journey/Berkeley Coding Bootcamp/NewsApp-PWA-/client/node_modules/@babel/parser/lib/index.js:13392:21)\\n    at Parser.parseStatement (/Users/MehdiSA/Desktop/Coding Journey/Berkeley Coding Bootcamp/NewsApp-PWA-/client/node_modules/@babel/parser/lib/index.js:13352:17)\\n    at Parser.parseBlockOrModuleBlockBody (/Users/MehdiSA/Desktop/Coding Journey/Berkeley Coding Bootcamp/NewsApp-PWA-/client/node_modules/@babel/parser/lib/index.js:13941:25)\\n    at Parser.parseBlockBody (/Users/MehdiSA/Desktop/Coding Journey/Berkeley Coding Bootcamp/NewsApp-PWA-/client/node_modules/@babel/parser/lib/index.js:13932:10)\\n    at Parser.parseProgram (/Users/MehdiSA/Desktop/Coding Journey/Berkeley Coding Bootcamp/NewsApp-PWA-/client/node_modules/@babel/parser/lib/index.js:13272:10)\\n    at Parser.parseTopLevel (/Users/MehdiSA/Desktop/Coding Journey/Berkeley Coding Bootcamp/NewsApp-PWA-/client/node_modules/@babel/parser/lib/index.js:13263:25)\\n    at Parser.parse (/Users/MehdiSA/Desktop/Coding Journey/Berkeley Coding Bootcamp/NewsApp-PWA-/client/node_modules/@babel/parser/lib/index.js:15037:10)\\n    at parse (/Users/MehdiSA/Desktop/Coding Journey/Berkeley Coding Bootcamp/NewsApp-PWA-/client/node_modules/@babel/parser/lib/index.js:15089:38)\\n    at parser (/Users/MehdiSA/Desktop/Coding Journey/Berkeley Coding Bootcamp/NewsApp-PWA-/client/node_modules/@babel/core/lib/parser/index.js:52:34)\\n    at parser.next (<anonymous>)\\n    at normalizeFile (/Users/MehdiSA/Desktop/Coding Journey/Berkeley Coding Bootcamp/NewsApp-PWA-/client/node_modules/@babel/core/lib/transformation/normalize-file.js:87:38)\\n    at normalizeFile.next (<anonymous>)\\n    at run (/Users/MehdiSA/Desktop/Coding Journey/Berkeley Coding Bootcamp/NewsApp-PWA-/client/node_modules/@babel/core/lib/transformation/index.js:29:50)\\n    at run.next (<anonymous>)\\n    at Function.transform (/Users/MehdiSA/Desktop/Coding Journey/Berkeley Coding Bootcamp/NewsApp-PWA-/client/node_modules/@babel/core/lib/transform.js:25:41)\\n    at transform.next (<anonymous>)\\n    at step (/Users/MehdiSA/Desktop/Coding Journey/Berkeley Coding Bootcamp/NewsApp-PWA-/client/node_modules/gensync/index.js:261:32)\\n    at /Users/MehdiSA/Desktop/Coding Journey/Berkeley Coding Bootcamp/NewsApp-PWA-/client/node_modules/gensync/index.js:273:13\\n    at async.call.result.err.err (/Users/MehdiSA/Desktop/Coding Journey/Berkeley Coding Bootcamp/NewsApp-PWA-/client/node_modules/gensync/index.js:223:11)\");\n\n//# sourceURL=webpack:///./assets/js/topic.js?");

/***/ }),

/***/ "./assets/js/utilities.js":
/*!********************************!*\
  !*** ./assets/js/utilities.js ***!
  \********************************/
/*! exports provided: getParams, removeSpecialCharsFromString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getParams\", function() { return getParams; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeSpecialCharsFromString\", function() { return removeSpecialCharsFromString; });\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n// Returns URL query params as object\nfunction getParams() {\n  return location.search.substring(1).split(\"&\").reduce(function (acc, curr) {\n    var _curr$split = curr.split(\"=\"),\n        _curr$split2 = _slicedToArray(_curr$split, 2),\n        key = _curr$split2[0],\n        value = _curr$split2[1];\n\n    acc[key] = value;\n    return acc;\n  }, {});\n}\nfunction removeSpecialCharsFromString(str) {\n  return str.replace(/[.,/#!$%^&*;:{}=\\-_`~()]/g, \"\").replace(/\\s/g, \"\");\n}\n\n//# sourceURL=webpack:///./assets/js/utilities.js?");

/***/ })

/******/ });