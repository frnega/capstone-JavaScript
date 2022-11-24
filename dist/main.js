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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Courgette&family=Patrick+Hand&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  padding: 0;\\n  margin: 0;\\n  box-sizing: border-box;\\n  font-family: \\\"Poppins\\\", sans-serif;\\n  list-style: none;\\n}\\n\\nbody {\\n  background-color: #f0f9cf;\\n}\\n\\nnav .openMenu {\\n  display: flex;\\n  flex-direction: row-reverse;\\n  font-size: 1.5rem;\\n  margin: 20px;\\n  cursor: pointer;\\n  color: #236128;\\n}\\n\\nnav .nav-items {\\n  display: none;\\n  position: fixed;\\n  height: 100vh;\\n  flex-direction: column;\\n  top: 0;\\n  left: 0;\\n  right: 0;\\n  z-index: 10;\\n  align-items: center;\\n  justify-content: center;\\n  gap: 1rem;\\n  list-style: none;\\n  background: rgba(235, 255, 161, 0.9);\\n}\\n\\nnav .closeMenu {\\n  font-size: 1.7rem;\\n}\\n\\nnav .nav-items .closeMenu {\\n  position: absolute;\\n  top: 20px;\\n  right: 20px;\\n}\\n\\n.item a {\\n  font-size: 1.5rem;\\n  cursor: pointer;\\n}\\n\\n.nav-link {\\n  text-decoration: none;\\n  position: relative;\\n  display: inline-block;\\n  margin: 0 0.75rem;\\n  font-size: 1rem;\\n  letter-spacing: 0.5px;\\n  color: rgb(49, 49, 49);\\n  font-weight: 500;\\n  opacity: 0.9;\\n  transition: 0.3s;\\n}\\n\\n.nav-link::after {\\n  content: \\\"\\\";\\n  position: absolute;\\n  width: 50%;\\n  height: 7px;\\n  border-radius: 5px;\\n  bottom: -10px;\\n  left: 0;\\n  z-index: -1;\\n  opacity: 0;\\n  transition: 0.3s;\\n}\\n\\n.nav-link:hover::after {\\n  width: 100%;\\n  opacity: 1;\\n}\\n\\n.headlinetext h2 {\\n  text-align: center;\\n  font-size: 40px;\\n  font-weight: 500;\\n  margin-top: 10%;\\n  letter-spacing: 2px;\\n  font-family: \\\"Courgette\\\", cursive;\\n}\\n\\n.recipe-cards {\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.card {\\n  position: relative;\\n  width: 300px;\\n  height: auto;\\n  margin: 40px;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  padding: 1rem 0.5rem;\\n  border: 1px solid #fff;\\n  border-radius: 25px;\\n  background: #fff;\\n  box-shadow:\\n    rgb(50 50 93 / 25%) 0 6px 12px -2px,\\n    rgb(0 0 0 / 30%) 0 3px 7px -3px;\\n}\\n\\nimg {\\n  width: 100%;\\n  border-radius: 20px;\\n}\\n\\n.card-img img {\\n  width: 100%;\\n  border-radius: 20px;\\n}\\n\\n.card-info {\\n  display: flex;\\n  flex-direction: column;\\n  align-content: flex-start;\\n  width: 100%;\\n}\\n\\n.card-info h2 {\\n  font-family: \\\"Patrick Hand\\\", cursive;\\n  font-size: 2rem;\\n  letter-spacing: 2px;\\n}\\n\\n.card-info ul {\\n  display: flex;\\n  margin-top: 5%;\\n  justify-content: space-between;\\n  list-style: none;\\n}\\n\\n.comment-btn {\\n  padding: 5% 15%;\\n  font-family: \\\"Patrick Hand\\\", cursive;\\n  font-size: 1.3rem;\\n  border-radius: 15px;\\n  cursor: pointer;\\n  transition: 0.3s;\\n}\\n\\n.comment-btn:hover {\\n  background-color: #236128;\\n}\\n\\n.like-btn {\\n  background: none;\\n  border: none;\\n  font-size: 1.7rem;\\n  margin-right: 0.5rem;\\n  cursor: pointer;\\n}\\n\\n.like-btn .fa-heart {\\n  margin-right: 0.75rem;\\n}\\n\\n#contact {\\n  width: 90%;\\n  border: 2px solid;\\n  border-radius: 20px;\\n  margin: 80px auto;\\n  padding: 20px;\\n  text-align: center;\\n  color: #23832b;\\n  font-size: 1.25rem;\\n}\\n\\n.contact-icon {\\n  font-size: 1.5rem;\\n  color: var(--text-color-2);\\n  padding: 0 0 0 5px;\\n}\\n\\n.contact-icon > i:hover {\\n  transform: scale(1.5, 1.5);\\n}\\n\\n.contact-info > ul > li {\\n  list-style: none;\\n  font-weight: 500;\\n}\\n\\n.hidden {\\n  display: none;\\n}\\n\\n.no-scroll {\\n  overflow: hidden;\\n}\\n\\n.footer {\\n  width: 100%;\\n  text-align: center;\\n  background-color: #c8e073;\\n  padding: 20px;\\n}\\n\\n.footer a {\\n  color: #2a7703;\\n  text-decoration: none;\\n  transition: 0.2s;\\n}\\n\\n.footer a:hover {\\n  cursor: pointer;\\n  font-size: 1.5rem;\\n  transform: scale(1.2, 1.2);\\n}\\n\\n@media screen and (min-width: 768px) {\\n  nav .openMenu {\\n    display: none;\\n  }\\n\\n  nav .nav-items .closeMenu {\\n    display: none;\\n    cursor: pointer;\\n  }\\n\\n  nav .nav-items {\\n    display: flex;\\n    flex-direction: row;\\n    height: auto;\\n    align-items: center;\\n    justify-content: center;\\n    gap: 3rem;\\n    list-style: none;\\n    padding: 2%;\\n    background-color: #fff;\\n    margin: auto;\\n  }\\n\\n  .item a {\\n    font-size: 16px;\\n  }\\n\\n  .headlinetext h2 {\\n    font-size: 40px;\\n  }\\n\\n  footer {\\n    font-size: 16px;\\n  }\\n\\n  #contact {\\n    font-size: 46px;\\n  }\\n\\n  .contact-icon {\\n    font-size: 56px;\\n  }\\n}\\n\\n/* popup Styling */\\n\\n.popup-container {\\n  position: fixed;\\n  width: 100%;\\n  height: 100%;\\n  top: 0;\\n  left: 0;\\n  background-color: rgba(7, 8, 8, 0.861);\\n  box-sizing: border-box;\\n  overflow-y: scroll;\\n}\\n\\n.close-btn {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n#close {\\n  color: red;\\n  background-color: #fff;\\n  padding: 6px;\\n  transition: 0.5s;\\n  margin: 5px;\\n  cursor: pointer;\\n  border-radius: 5px;\\n}\\n\\n#close:hover {\\n  color: white;\\n  background-color: #000;\\n}\\n\\n.popup-image {\\n  background-color: white;\\n  padding: 10px;\\n  border-radius: 20px;\\n}\\n\\n.popup-window {\\n  background-color: orange;\\n  width: 80%;\\n  margin: auto;\\n  margin-top: 10%;\\n  padding: 10px;\\n  border-radius: 20px;\\n  border: 2px solid black;\\n}\\n\\n.dish-name,\\n.comments-counter,\\n.add {\\n  font-family: \\\"Courgette\\\", cursive;\\n  font-size: 25px;\\n  text-align: center;\\n  padding: 10px;\\n  color: #fff;\\n}\\n\\n.commentrow-bg {\\n  background-color: #fff;\\n}\\n\\n.comments-generator {\\n  border: 2px solid black;\\n}\\n\\n.date {\\n  padding: 5px;\\n}\\n\\ninput {\\n  display: block;\\n  margin-bottom: 4px;\\n  border-radius: 5px;\\n  padding: 7px;\\n  border: none;\\n}\\n\\n.btn {\\n  cursor: pointer;\\n}\\n\\n@media screen and (min-width: 50em) {\\n  .popup-window {\\n    width: 50%;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://capstone-javascript/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://capstone-javascript/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://capstone-javascript/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://capstone-javascript/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://capstone-javascript/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://capstone-javascript/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://capstone-javascript/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://capstone-javascript/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://capstone-javascript/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://capstone-javascript/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_displayfooditem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/displayfooditem.js */ \"./src/modules/displayfooditem.js\");\n/* eslint-disable linebreak-style */\n/* eslint-disable no-unused-vars */\n/* eslint-disable linebreak-style */\n\n\n\nconst contactBtn = document.querySelector('#contactSection');\nconst recipesSection = document.querySelector('#recipesSection');\nconst tagline = document.querySelector('.tagline');\n\nconst recipes = document.querySelector('#recipe-section');\nconst contact = document.querySelector('#contact');\n\nconst mainMenu = document.querySelector('.nav-items');\nconst closeMenu = document.querySelector('.closeMenu');\nconst openMenu = document.querySelector('.openMenu');\nconst menuItems = document.querySelectorAll('nav .nav-items li');\n\ncontactBtn.addEventListener('click', () => {\n  recipes.classList.add('hidden');\n  contact.classList.remove('hidden');\n  tagline.classList.add('hidden');\n});\n\nrecipesSection.addEventListener('click', () => {\n  contact.classList.add('hidden');\n  recipes.classList.remove('hidden');\n  tagline.classList.remove('hidden');\n});\n\nopenMenu.addEventListener('click', () => {\n  mainMenu.style = 'display: flex; top:0;';\n});\n\ncloseMenu.addEventListener('click', () => {\n  mainMenu.style = 'display: none;';\n});\n\nmenuItems.forEach((item) => {\n  item.addEventListener('click', () => {\n    mainMenu.style = 'display: ';\n  });\n});\n\nwindow.addEventListener('DOMContentLoaded', () => {\n  (0,_modules_displayfooditem_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  contact.classList.add('hidden');\n  recipes.classList.remove('hidden');\n});\n\n\n//# sourceURL=webpack://capstone-javascript/./src/index.js?");

/***/ }),

/***/ "./src/modules/comment.js":
/*!********************************!*\
  !*** ./src/modules/comment.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _commentApi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentApi.js */ \"./src/modules/commentApi.js\");\n\n\nconst CommentModal = document.querySelector('.popup-container');\nconst modalImage = document.querySelector('.popup-image img');\nconst mealName = document.querySelector('.dish-name');\nconst recipe = document.querySelector('.recipe');\nconst close = document.querySelector('#close');\nconst formContainer = document.querySelector('.add-comment');\n\nconst baseURL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';\nconst createForm = (id) => {\n  formContainer.innerHTML = '<h4 class=\"add\"> Add a comment</h4>';\n  const form = document.createElement('form');\n  form.classList.add('form');\n  form.id = id;\n  form.innerHTML = `\n         <div class=\"input-con\">\n         <input class='name' name='name' type=\"text\" placeholder=\"Your Name\" pattern=\"[a-zA-Z ]{1,30}\" required>\n          <input class='new-comment' name='comment' type=\"text\" placeholder=\"Write your insight\" pattern=\"[a-zA-Z9-0 ]{1,150}\" required>\n          <input class=\"btn\" name='comment-button' type=\"submit\" value=\"Comment\">\n          </div>\n          `;\n  formContainer.appendChild(form);\n  const name = document.querySelector('.name');\n  const comment = document.querySelector('.new-comment');\n  form.addEventListener('submit', (e) => {\n    e.preventDefault();\n    if (name.value && comment.value) {\n      (0,_commentApi_js__WEBPACK_IMPORTED_MODULE_0__.postComment)(name.value, comment.value, form.id);\n      form.reset();\n    }\n  });\n};\n\nconst modalComment = () => {\n  const commentBtn = document.querySelectorAll('.comment-btn');\n\n  commentBtn.forEach((button) => {\n    button.addEventListener('click', () => {\n      createForm(button.id);\n      (0,_commentApi_js__WEBPACK_IMPORTED_MODULE_0__.fetchComments)(button.id);\n      fetch(`${baseURL}${button.id}`)\n        .then((response) => response.json())\n        .then((elem) => {\n          CommentModal.classList.remove('hidden');\n          modalImage.setAttribute('src', elem.meals[0].strMealThumb);\n          mealName.innerHTML = elem.meals[0].strMeal;\n          recipe.innerHTML = elem.meals[0].strInstructions;\n        });\n    });\n  });\n\n  close.addEventListener('click', () => {\n    CommentModal.classList.add('hidden');\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalComment);\n\n//           const deleteBtn = comments.querySelector('button#delete-btn');\n//           deleteBtn.addEventListener('click', () => {\n//             comments.remove();\n//           })\n//           document.body.appendChild(comments);\n//         }\n//       })\n//     })\n// }\n\n//# sourceURL=webpack://capstone-javascript/./src/modules/comment.js?");

/***/ }),

/***/ "./src/modules/commentApi.js":
/*!***********************************!*\
  !*** ./src/modules/commentApi.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchComments\": () => (/* binding */ fetchComments),\n/* harmony export */   \"postComment\": () => (/* binding */ postComment)\n/* harmony export */ });\n/* harmony import */ var _commentCounter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentCounter.js */ \"./src/modules/commentCounter.js\");\n\n\nconst appKey = 'kMoYqkIjxGGhhy0t9Ado';\nconst baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';\n\nconst header = document.querySelector('.comments-container h4');\nconst fetchComments = async (id) => {\n  header.innerHTML = 'Comments (0)';\n  await fetch(`${baseURL}${appKey}/comments?item_id=${id}`)\n    .then((response) => response.json())\n    .then((json) => {\n      (0,_commentCounter_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(json, header);\n      const commentList = document.querySelector('.comments-generator');\n      commentList.innerHTML = '';\n     json.map((comment, index) => { // eslint-disable-line\n        const userReview = document.createElement('li');\n        if (index % 2 !== 0) {\n          userReview.classList.add('commentrow-bg');\n        }\n        userReview.innerHTML = `\n       <span class=\"date\">${comment.creation_date}</span><span class=\"date\">${comment.username}:</span> <span\n       class=\"date\">${comment.comment}</span>\n       `;\n        commentList.appendChild(userReview);\n      }).join('');\n    });\n};\n\nconst postComment = async (username, comment, id) => {\n  await fetch(`${baseURL}${appKey}/comments/`, {\n    method: 'POST',\n    body: JSON.stringify({\n      item_id: id,\n      username,\n      comment,\n    }),\n    headers: {\n      'Content-type': 'application/json; charset=UTF-8',\n    },\n  }).then(() => {\n\n  });\n};\n\n\n\n\n//# sourceURL=webpack://capstone-javascript/./src/modules/commentApi.js?");

/***/ }),

/***/ "./src/modules/commentCounter.js":
/*!***************************************!*\
  !*** ./src/modules/commentCounter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst commentsCounter = (data, link) => {\n  if (data.length) {\n    link.innerHTML = `Comments (${data.length})`;\n  }\n  return data.length;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentsCounter);\n\n//# sourceURL=webpack://capstone-javascript/./src/modules/commentCounter.js?");

/***/ }),

/***/ "./src/modules/displayfooditem.js":
/*!****************************************!*\
  !*** ./src/modules/displayfooditem.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _likeitems_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./likeitems.js */ \"./src/modules/likeitems.js\");\n/* harmony import */ var _itemCounter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./itemCounter.js */ \"./src/modules/itemCounter.js\");\n/* harmony import */ var _comment_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comment.js */ \"./src/modules/comment.js\");\n\n\n\n\nconst recipeCount = document.querySelector('.item-count');\nconst recipeCards = document.querySelector('.recipe-cards');\n\nconst displayfoodCards = async () => {\n  await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')\n    .then((response) => response.json())\n    .then((data) => {\n      let html = '';\n      data.meals.forEach((meal) => {\n        html += `<div class=\"card\" id=\"${meal.idMeal}\">\n               <div class=\"card-img\">\n                   <img src=\"${meal.strMealThumb}\" alt=\"${meal.strMeal}\">\n               </div>\n               <div class=\"card-info\">\n                   <h2>${meal.strMeal}</h2>\n                   <ul>\n                       <li><button id=${meal.idMeal} class=\"comment-btn\" type=\"button\">Comments</button></li>\n                       <li><button class=\"like-btn\"><i class=\"fa-regular fa-heart\"></i><span class=\"like-count\">0</span></button></li>\n                   </ul>\n               </div>\n             </div>`;\n        recipeCards.innerHTML = html;\n      });\n      (0,_comment_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n      (0,_likeitems_js__WEBPACK_IMPORTED_MODULE_0__.getnumberofLikes)();\n      (0,_likeitems_js__WEBPACK_IMPORTED_MODULE_0__.Interactlikebutton)();\n      (0,_itemCounter_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data.meals, recipeCount);\n    });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayfoodCards);\n\n\n//# sourceURL=webpack://capstone-javascript/./src/modules/displayfooditem.js?");

/***/ }),

/***/ "./src/modules/itemCounter.js":
/*!************************************!*\
  !*** ./src/modules/itemCounter.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst itemsCounter = (data, link) => {\n  link.innerHTML = `Recipes(${data.length})`;\n  return data.length;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (itemsCounter);\n\n\n//# sourceURL=webpack://capstone-javascript/./src/modules/itemCounter.js?");

/***/ }),

/***/ "./src/modules/likeitems.js":
/*!**********************************!*\
  !*** ./src/modules/likeitems.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Interactlikebutton\": () => (/* binding */ Interactlikebutton),\n/* harmony export */   \"getnumberofLikes\": () => (/* binding */ getnumberofLikes)\n/* harmony export */ });\nconst url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/kMoYqkIjxGGhhy0t9Ado/likes';\nconst getnumberofLikes = async () => {\n  const cards = document.querySelectorAll('.card');\n  const likeCount = document.querySelectorAll('.like-count');\n  await fetch(url)\n    .then((response) => response.json())\n    .then((json) => {\n      cards.forEach((card, index) => {\n        json.forEach((item) => {\n          if (item.item_id === card.id) {\n            likeCount[index].innerHTML = item.likes;\n          }\n        });\n      });\n    });\n};\nconst Interactlikebutton = async () => {\n  const likeBtns = document.querySelectorAll('.like-btn');\n  const likeBtnIcon = document.querySelectorAll('.fa-heart');\n  const likeBtnCount = document.querySelectorAll('.like-count');\n  const cards = document.querySelectorAll('.card');\n  likeBtns.forEach((btn, index) => {\n    btn.addEventListener('click', () => {\n      likeBtnIcon[index].classList.remove('fa-regular');\n      likeBtnIcon[index].classList.add('fa-solid');\n      likeBtnCount[index].innerHTML = Number(likeBtnCount[index].innerHTML) + 1;\n      fetch(url, {\n        method: 'POST',\n        body: JSON.stringify({\n          item_id: cards[index].id,\n        }),\n        headers: {\n          'Content-type': 'application/json; charset=UTF-8',\n        },\n      });\n    });\n  });\n};\n\n\n\n//# sourceURL=webpack://capstone-javascript/./src/modules/likeitems.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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