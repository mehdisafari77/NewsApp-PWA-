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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/domMethods.js":
/*!*********************************!*\
  !*** ./assets/js/domMethods.js ***!
  \*********************************/
/*! exports provided: createElement */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/MehdiSA/Desktop/Coding Journey/Berkeley Coding Bootcamp/NewsApp-PWA-/client/assets/js/domMethods.js: Identifier 'createPlaceholders' has already been declared. (63:9)\\n\\n\\u001b[0m \\u001b[90m 61 |\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 62 |\\u001b[39m \\u001b[90m// Create and return 4 placeholder articles\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 63 |\\u001b[39m \\u001b[36mfunction\\u001b[39m createPlaceholders() {\\u001b[0m\\n\\u001b[0m \\u001b[90m    |\\u001b[39m          \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 64 |\\u001b[39m   \\u001b[36mconst\\u001b[39m fragment \\u001b[33m=\\u001b[39m document\\u001b[33m.\\u001b[39mcreateDocumentFragment()\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 65 |\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 66 |\\u001b[39m   \\u001b[36mfor\\u001b[39m (\\u001b[36mlet\\u001b[39m i \\u001b[33m=\\u001b[39m \\u001b[35m0\\u001b[39m\\u001b[33m;\\u001b[39m i \\u001b[33m<\\u001b[39m \\u001b[35m4\\u001b[39m\\u001b[33m;\\u001b[39m i\\u001b[33m++\\u001b[39m) {\\u001b[0m\\n    at Parser._raise (/Users/MehdiSA/Desktop/Coding Journey/Berkeley Coding Bootcamp/NewsApp-PWA-/client/node_modules/@babel/parser/lib/index.js:541:17)\\n    at Parser.raiseWithData (/Users/MehdiSA/Desktop/Coding Journey/Berkeley Coding Bootcamp/NewsApp-PWA-/client/node_modules/@babel/parser/lib/index.js:534:17)\\n    at Parser.raise (/Users/MehdiSA/Desktop/Coding Journey/Berkeley Coding Bootcamp/NewsApp-PWA-/client/node_modules/@babel/parser/lib/index.js:495:17)\\n    at ScopeHandler.checkRedeclarationInScope (/Users/MehdiSA/Desktop/Coding Journey/Berkeley Coding Bootcamp/NewsApp-PWA-/client/node_modules/@babel/parser/lib/index.js:1688:12)\\n    at ScopeHandler.declareName (/Users/MehdiSA/Desktop/Coding Journey/Berkeley Coding Bootcamp/NewsApp-PWA-/client/node_modules/@babel/parser/lib/index.js:1654:12)\\n    at Parser.registerFunctionStatementId (/Users/MehdiSA/Desktop/Coding Journey/Berkeley Coding Bootcamp/NewsApp-PWA-/client/node_modules/@babel/parser/lib/index.js:14100:16)\\n    at Parser.parseFunction (/Users/MehdiSA/Desktop/Coding Journey/Berkeley Coding Bootcamp/NewsApp-PWA-/client/node_modules/@babel/parser/lib/index.js:14080:12)\\n    at Parser.parseFunctionStatement (/Users/MehdiSA/Desktop/Coding Journey/Berkeley Coding Bootcamp/NewsApp-PWA-/client/node_modules/@babel/parser/lib/index.js:13709:17)\\n    at Parser.parseStatementContent (/Users/MehdiSA/Desktop/Coding Journey/Berkeley Coding Bootcamp/NewsApp-PWA-/client/node_modules/@babel/parser/lib/index.js:13392:21)\\n    at Parser.parseStatement (/Users/MehdiSA/Desktop/Coding Journey/Berkeley Coding Bootcamp/NewsApp-PWA-/client/node_modules/@babel/parser/lib/index.js:13352:17)\\n    at Parser.parseBlockOrModuleBlockBody (/Users/MehdiSA/Desktop/Coding Journey/Berkeley Coding Bootcamp/NewsApp-PWA-/client/node_modules/@babel/parser/lib/index.js:13941:25)\\n    at Parser.parseBlockBody (/Users/MehdiSA/Desktop/Coding Journey/Berkeley Coding Bootcamp/NewsApp-PWA-/client/node_modules/@babel/parser/lib/index.js:13932:10)\\n    at Parser.parseProgram (/Users/MehdiSA/Desktop/Coding Journey/Berkeley Coding Bootcamp/NewsApp-PWA-/client/node_modules/@babel/parser/lib/index.js:13272:10)\\n    at Parser.parseTopLevel (/Users/MehdiSA/Desktop/Coding Journey/Berkeley Coding Bootcamp/NewsApp-PWA-/client/node_modules/@babel/parser/lib/index.js:13263:25)\\n    at Parser.parse (/Users/MehdiSA/Desktop/Coding Journey/Berkeley Coding Bootcamp/NewsApp-PWA-/client/node_modules/@babel/parser/lib/index.js:15037:10)\\n    at parse (/Users/MehdiSA/Desktop/Coding Journey/Berkeley Coding Bootcamp/NewsApp-PWA-/client/node_modules/@babel/parser/lib/index.js:15089:38)\\n    at parser (/Users/MehdiSA/Desktop/Coding Journey/Berkeley Coding Bootcamp/NewsApp-PWA-/client/node_modules/@babel/core/lib/parser/index.js:52:34)\\n    at parser.next (<anonymous>)\\n    at normalizeFile (/Users/MehdiSA/Desktop/Coding Journey/Berkeley Coding Bootcamp/NewsApp-PWA-/client/node_modules/@babel/core/lib/transformation/normalize-file.js:87:38)\\n    at normalizeFile.next (<anonymous>)\\n    at run (/Users/MehdiSA/Desktop/Coding Journey/Berkeley Coding Bootcamp/NewsApp-PWA-/client/node_modules/@babel/core/lib/transformation/index.js:29:50)\\n    at run.next (<anonymous>)\\n    at Function.transform (/Users/MehdiSA/Desktop/Coding Journey/Berkeley Coding Bootcamp/NewsApp-PWA-/client/node_modules/@babel/core/lib/transform.js:25:41)\\n    at transform.next (<anonymous>)\\n    at step (/Users/MehdiSA/Desktop/Coding Journey/Berkeley Coding Bootcamp/NewsApp-PWA-/client/node_modules/gensync/index.js:261:32)\\n    at /Users/MehdiSA/Desktop/Coding Journey/Berkeley Coding Bootcamp/NewsApp-PWA-/client/node_modules/gensync/index.js:273:13\\n    at async.call.result.err.err (/Users/MehdiSA/Desktop/Coding Journey/Berkeley Coding Bootcamp/NewsApp-PWA-/client/node_modules/gensync/index.js:223:11)\\n    at processTicksAndRejections (internal/process/task_queues.js:95:5)\");\n\n//# sourceURL=webpack:///./assets/js/domMethods.js?");

/***/ }),

/***/ "./assets/js/index.js":
/*!****************************!*\
  !*** ./assets/js/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _domMethods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domMethods */ \"./assets/js/domMethods.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n // Setting up dummy topics data\n\nvar topicData = [{\n  id: 1,\n  name: \"Politics\"\n}, {\n  id: 2,\n  name: \"Environment\"\n}, {\n  id: 3,\n  name: \"Sports\"\n}, {\n  id: 4,\n  name: \"Entertainment\"\n}];\nvar lastId = 4; // Empty topic container, render topics\n\nfunction renderTopics() {\n  var topicContainer = document.querySelector(\".topic-container\");\n  var topics = createTopics(topicData);\n\n  while (topicContainer.firstChild) {\n    topicContainer.removeChild(topicContainer.firstChild);\n  }\n\n  topicContainer.appendChild(topics);\n} // Return HTML for each topic provided\n\n\nfunction createTopics(topicData) {\n  var fragment = document.createDocumentFragment();\n  topicData.forEach(function (data) {\n    var topic = createTopic(data);\n    fragment.appendChild(topic);\n  });\n  return fragment;\n} // Return markup for a topic object\n\n\nfunction createTopic(_ref) {\n  var name = _ref.name,\n      id = _ref.id;\n  return Object(_domMethods__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n    \"class\": \"topic\"\n  }, Object(_domMethods__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"button\", {\n    \"aria-label\": \"Close\",\n    \"data-id\": id,\n    onClick: handleTopicDelete\n  }, \"×\"), Object(_domMethods__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"a\", {\n    href: \"topic.html?query=\".concat(name)\n  }, name));\n} // Deletes a topic on click\n\n\nfunction handleTopicDelete(event) {\n  var id = Number(event.target.getAttribute(\"data-id\"));\n  topicData = topicData.filter(function (topic) {\n    return topic.id !== id;\n  });\n  renderTopics();\n}\n\nfunction handleTopicAdd(event) {\n  event.preventDefault();\n  var input = document.querySelector(\"#add-topic\");\n  var value = input.value.trim();\n\n  if (!value) {\n    return;\n  }\n\n  topicData = [].concat(_toConsumableArray(topicData), [{\n    id: ++lastId,\n    name: value\n  }]);\n  input.value = \"\";\n  renderTopics();\n} // Renders topics on page load\n\n\nrenderTopics(); // Handle new topic submissions\n\ndocument.querySelector(\"#submit-topic\").addEventListener(\"click\", handleTopicAdd);\n\n//# sourceURL=webpack:///./assets/js/index.js?");

/***/ })

/******/ });