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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  font-family: Arial, Helvetica, sans-serif;\\n}\\n\\n.modal {\\n  position: fixed;\\n  width: 100vw;\\n  height: 100vh;\\n  opacity: 0;\\n  visibility: hidden;\\n  transition: all 0.3s ease;\\n  top: 0;\\n  left: 0;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 5px;\\n}\\n.open {\\n  visibility: visible;\\n  opacity: 1;\\n  transition-delay: 0s;\\n}\\n.bg {\\n  position: absolute;\\n  background: teal;\\n  width: 100%;\\n  height: 100%;\\n}\\n.container {\\n  border-radius: 10px;\\n  background: #fff;\\n  position: relative;\\n  padding: 30px;\\n}\\n.close {\\n  position: absolute;\\n  right: 15px;\\n  top: 15px;\\n  outline: none;\\n  appearance: none;\\n  color: red;\\n  background: none;\\n  border: 0px;\\n  font-weight: bold;\\n  cursor: pointer;\\n}\\n\\nnav {\\n  width: 50rem;\\n  margin: auto;\\n  font-weight: bold;\\n  background-color: #808080;\\n  padding: 0.5rem;\\n}\\n\\nul {\\n  display: flex;\\n  justify-content: center;\\n  gap: 1rem;\\n  list-style-type: none;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\n.modal-button {\\n  width: 11rem;\\n}\\n\\n.modal-input {\\n  width: 11rem;\\n}\\n\\n.tab {\\n  width: 20rem;\\n  margin: auto;\\n}\\n\\n.select-button {\\n  margin: 0.5rem;\\n}\\n\\n.list {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 0.5rem;\\n}\\n\\n.project-list {\\n  display: grid;\\n  width: 20rem;\\n  grid-gap: 0.5rem;\\n  grid-template-columns: 2fr 1fr 1fr;\\n  align-items: center;\\n}\\n\\n.todo-list {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 0.5rem;\\n}\\n\\n.todo {\\n  width: 20rem;\\n  border: solid 1px #000000;\\n  margin: 0.5rem;\\n  padding: 0.5rem;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-dos/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-dos/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-dos/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-dos/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-dos/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-dos/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-dos/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-dos/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-dos/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-dos/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\n\n\n\n\nlocalStorage.clear();\nlocalStorage.setItem(\"projects\", JSON.stringify([]));\nlet projectList = JSON.parse(localStorage.getItem(\"projects\"));\nconst defaultProject = (0,_project__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"Default\");\nprojectList.push(defaultProject);\nlocalStorage.setItem(\"projects\", JSON.stringify(projectList));\n\nconst content = document.querySelector(\"#content\");\n\nconst menuNav = document.createElement(\"nav\");\nconst menuUL = document.createElement(\"ul\");\n\nconst tab = document.createElement(\"div\");\ntab.classList.add(\"tab\");\n\nconst createProjectList = function () {\n  const projectListElem = document.createElement(\"div\");\n  projectListElem.classList.add(\"project-list\");\n\n  projectList = JSON.parse(localStorage.getItem(\"projects\"));\n\n  projectList.forEach((elem) => {\n    const project = document.createElement(\"div\");\n\n    project.innerText = elem.title;\n    projectListElem.appendChild(project);\n\n    const projectSelectButton = document.createElement(\"button\");\n    projectSelectButton.classList.add(\"select-button\");\n    projectSelectButton.addEventListener(\"click\", (e) => {\n      const todos = createProjectTodo(elem);\n      tab.innerHTML = \"\";\n      tab.appendChild(todos);\n    });\n    projectSelectButton.innerText = \"Select\";\n    projectListElem.appendChild(projectSelectButton);\n\n    const removeProjectButton = document.createElement(\"button\");\n    removeProjectButton.classList.add(\"select-button\");\n    removeProjectButton.innerText = \"Remove\";\n    removeProjectButton.addEventListener(\"click\", (e) => {\n      const index = projectList.indexOf(project);\n\n      projectList.splice(index, 1);\n      localStorage.setItem(\"projects\", JSON.stringify(projectList));\n\n      tab.innerHTML = \"\";\n      tab.appendChild(createProjectList());\n    });\n    projectListElem.appendChild(removeProjectButton);\n  });\n\n  return projectListElem;\n};\n\nconst createProjectTodo = function (project) {\n  const projectTodo = document.createElement(\"div\");\n  projectTodo.classList.add(\"todo-list\");\n\n  const projectTodoListElem = document.createElement(\"ul\");\n  projectTodoListElem.classList.add(\"list\");\n\n  project.todos.forEach((elem) => {\n    const todo = document.createElement(\"li\");\n    todo.classList.add(\"todo\");\n\n    const todoTitle = document.createElement(\"div\");\n    todoTitle.innerText = \"Title: \" + elem.title;\n    todo.appendChild(todoTitle);\n\n    const todoDescription = document.createElement(\"div\");\n    todoDescription.innerText = \"Description: \" + elem.description;\n    todo.appendChild(todoDescription);\n\n    const todoDate = document.createElement(\"div\");\n    todoDate.innerText = \"Due date: \" + elem.dueDate;\n    todo.appendChild(todoDate);\n\n    const todoPriority = document.createElement(\"div\");\n    todoPriority.innerText = \"Priority: \" + elem.priority;\n    todo.appendChild(todoPriority);\n\n    const editTodoModal = document.createElement(\"div\");\n    editTodoModal.classList.add(\"modal\");\n    editTodoModal.setAttribute(\"id\", \"edit-todo\");\n    const editTodoModalExit = document.createElement(\"button\");\n    editTodoModalExit.classList.add(\"modal-bg\", \"modal-exit\");\n    editTodoModal.appendChild(projectModalExit);\n    const editTodoModalContainer = document.createElement(\"div\");\n    editTodoModalContainer.classList.add(\"modal-container\");\n    const editTodoModalExitButton = document.createElement(\"button\");\n    editTodoModalExitButton.classList.add(\n      \"modal-close\",\n      \"modal-exit\",\n      \"modal-button\"\n    );\n    editTodoModalExitButton.innerText = \"editTxit\";\n    editTodoModalContainer.appendChild(editTodoModalExitButton);\n    const editTodoModalName = document.createElement(\"input\");\n    editTodoModalName.classList.add(\"modal-input\");\n    editTodoModalName.setAttribute(\"placeholder\", \"Todo name\");\n    editTodoModalName.setAttribute(\"value\", elem.title);\n    editTodoModal.appendChild(editTodoModalName);\n    const editTodoModalDescription = document.createElement(\"input\");\n    editTodoModalDescription.classList.add(\"modal-input\");\n    editTodoModalDescription.setAttribute(\"placeholder\", \"Description\");\n    editTodoModalDescription.setAttribute(\"value\", elem.description);\n    editTodoModal.appendChild(editTodoModalDescription);\n    const editTodoModalDateLabel = document.createElement(\"label\");\n    editTodoModalDateLabel.setAttribute(\"for\", \"edit-date\");\n    editTodoModalDateLabel.innerText = \"Due date\";\n    editTodoModal.appendChild(editTodoModalDateLabel);\n    const editTodoModalDate = document.createElement(\"input\");\n    editTodoModalDate.setAttribute(\"type\", \"date\");\n    editTodoModalDate.setAttribute(\"id\", \"edit-date\");\n    editTodoModalDate.setAttribute(\"value\", elem.dueDate);\n    editTodoModal.appendChild(editTodoModalDate);\n    const editTodoModalPriority = document.createElement(\"input\");\n    editTodoModalPriority.setAttribute(\"type\", \"range\");\n    editTodoModalPriority.setAttribute(\"min\", \"0\");\n    editTodoModalPriority.setAttribute(\"max\", \"5\");\n    editTodoModalPriority.setAttribute(\"id\", \"edit-priority\");\n    editTodoModalPriority.setAttribute(\"value\", elem.priority);\n    editTodoModal.appendChild(editTodoModalPriority);\n    const editTodoModalOK = document.createElement(\"button\");\n    editTodoModalOK.classList.add(\"modal-button\");\n    editTodoModalOK.innerText = \"OK\";\n    editTodoModalOK.addEventListener(\"click\", (e) => {\n      elem.title = editTodoModalName.value;\n      elem.description = editTodoModalDescription.value;\n      elem.dueDate = editTodoModalDate.value;\n      elem.priority = editTodoModalPriority.value;\n\n      editTodoModal.classList.remove(\"open\");\n\n      localStorage.setItem(\"projects\", JSON.stringify(projectList));\n\n      tab.innerHTML = \"\";\n      printProjectTodos(project);\n    });\n    editTodoModal.appendChild(editTodoModalOK);\n    content.appendChild(editTodoModal);\n\n    const editButton = document.createElement(\"button\");\n    editButton.innerText = \"Edit\";\n    editButton.addEventListener(\"click\", (e) => {\n      e.preventDefault();\n      editTodoModal.classList.add(\"open\");\n      editTodoModalExitButton.addEventListener(\"click\", (e) => {\n        e.preventDefault();\n        editTodoModal.classList.remove(\"open\");\n      });\n    });\n    todo.appendChild(editButton);\n\n    const removeTodoButton = document.createElement(\"button\");\n    removeTodoButton.classList.add(\"select-button\");\n    removeTodoButton.innerText = \"Remove\";\n    removeTodoButton.addEventListener(\"click\", (e) => {\n      let projectInList = projectList.filter((el) => el == project)[0];\n      const index = projectInList.todos.indexOf(elem);\n      if (index != -1) {\n        projectInList.todos.splice(index, 1);\n      }\n      localStorage.setItem(\"projects\", JSON.stringify(projectList));\n\n      const todos = createProjectTodo(projectInList);\n      tab.replaceChild(todos, tab.childNodes[0]);\n    });\n    todo.appendChild(removeTodoButton);\n\n    projectTodoListElem.appendChild(todo);\n  });\n  projectTodo.appendChild(projectTodoListElem);\n\n  const todoModal = document.createElement(\"div\");\n  todoModal.classList.add(\"modal\");\n  todoModal.setAttribute(\"id\", \"create-todo\");\n  const todoModalExit = document.createElement(\"div\");\n  todoModalExit.classList.add(\"modal-bg\", \"modal-exit\");\n  todoModal.appendChild(projectModalExit);\n  const todoModalContainer = document.createElement(\"div\");\n  todoModalContainer.classList.add(\"modal-container\");\n  const todoModalExitButton = document.createElement(\"button\");\n  todoModalExitButton.classList.add(\n    \"modal-close\",\n    \"modal-exit\",\n    \"modal-button\"\n  );\n  todoModalExitButton.innerText = \"Exit\";\n  todoModalContainer.appendChild(todoModalExitButton);\n  const todoModalName = document.createElement(\"input\");\n  todoModalName.classList.add(\"modal-input\");\n  todoModalName.setAttribute(\"placeholder\", \"Todo name\");\n  todoModal.appendChild(todoModalName);\n  const todoModalDescription = document.createElement(\"input\");\n  todoModalDescription.classList.add(\"modal-input\");\n  todoModalDescription.setAttribute(\"placeholder\", \"Description\");\n  todoModal.appendChild(todoModalDescription);\n  const todoModalDateLabel = document.createElement(\"label\");\n  todoModalDateLabel.setAttribute(\"for\", \"due-date\");\n  todoModalDateLabel.innerText = \"Due date\";\n  todoModal.appendChild(todoModalDateLabel);\n  const todoModalDate = document.createElement(\"input\");\n  todoModalDate.setAttribute(\"type\", \"date\");\n  todoModalDate.setAttribute(\"id\", \"due-date\");\n  todoModal.appendChild(todoModalDate);\n  const todoModalPriorityLabel = document.createElement(\"label\");\n  todoModalPriorityLabel.setAttribute(\"for\", \"priority\");\n  todoModalPriorityLabel.innerText = \"Priority\";\n  todoModal.appendChild(todoModalPriorityLabel);\n  const todoModalPriority = document.createElement(\"input\");\n  todoModalPriority.setAttribute(\"type\", \"range\");\n  todoModalPriority.setAttribute(\"min\", \"0\");\n  todoModalPriority.setAttribute(\"max\", \"5\");\n  todoModalPriority.setAttribute(\"id\", \"priority\");\n  todoModal.appendChild(todoModalPriority);\n  const todoModalOK = document.createElement(\"button\");\n  todoModalOK.classList.add(\"modal-button\");\n  todoModalOK.innerText = \"OK\";\n  todoModalOK.addEventListener(\"click\", (e) => {\n    const name = todoModalName.value;\n    const description = todoModalDescription.value;\n    const dueDate = todoModalDate.value;\n    const priority = todoModalPriority.value;\n\n    todoModal.classList.remove(\"open\");\n\n    const newTodo = (0,_todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(name, description, dueDate, priority);\n    const currProject = projectList.filter((e) => project === e)[0];\n    projectList.splice(projectList.indexOf(currProject));\n    currProject.todos.push(newTodo);\n    projectList.push(currProject);\n    localStorage.setItem(\"projects\", JSON.stringify(projectList));\n\n    tab.innerHTML = \"\";\n    printProjectTodos(currProject);\n  });\n  todoModal.appendChild(todoModalOK);\n  content.appendChild(todoModal);\n\n  const createTodoButton = document.createElement(\"button\");\n  createTodoButton.innerText = \"New Todo\";\n  createTodoButton.addEventListener(\"click\", (e) => {\n    e.preventDefault();\n    todoModal.classList.add(\"open\");\n    todoModalExitButton.addEventListener(\"click\", (e) => {\n      e.preventDefault();\n      todotModal.classList.remove(\"open\");\n    });\n  });\n  projectTodo.appendChild(createTodoButton);\n\n  const backButton = document.createElement(\"button\");\n  backButton.innerText = \"Back\";\n  backButton.addEventListener(\"click\", (e) => {\n    e.preventDefault();\n    tab.innerText = \"\";\n\n    const projects = createProjectList();\n    tab.appendChild(projects);\n  });\n  projectTodo.appendChild(backButton);\n\n  return projectTodo;\n};\n\nconst printProjectTodos = function (project) {\n  const todos = createProjectTodo(project);\n\n  tab.innerHTML = \"\";\n  tab.appendChild(todos);\n};\n\nconst createProjectLinkLI = document.createElement(\"li\");\nconst createProjectLink = document.createElement(\"a\");\ncreateProjectLink.innerText = \"Create New Project\";\ncreateProjectLink.setAttribute(\"data-modal\", \"create-project\");\n\nconst projectModal = document.createElement(\"div\");\nprojectModal.classList.add(\"modal\");\nprojectModal.setAttribute(\"id\", \"create-project\");\nconst projectModalExit = document.createElement(\"div\");\nprojectModalExit.classList.add(\"modal-bg\", \"modal-exit\");\nprojectModal.appendChild(projectModalExit);\nconst projectModalContainer = document.createElement(\"div\");\nprojectModalContainer.classList.add(\"modal-container\");\nconst projectModalExitButton = document.createElement(\"button\");\nprojectModalExitButton.classList.add(\n  \"modal-close\",\n  \"modal-exit\",\n  \"modal-button\"\n);\nprojectModalExitButton.innerText = \"Exit\";\nprojectModalContainer.appendChild(projectModalExitButton);\nconst projectModalName = document.createElement(\"input\");\nprojectModalName.classList.add(\"modal-input\");\nprojectModalName.setAttribute(\"placeholder\", \"Project name\");\nprojectModal.appendChild(projectModalName);\nconst projectModalOK = document.createElement(\"button\");\nprojectModalOK.classList.add(\"modal-button\");\nprojectModalOK.innerText = \"OK\";\nprojectModalOK.addEventListener(\"click\", (e) => {\n  e.preventDefault();\n  const newProject = (0,_project__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(projectModalName.value);\n  const storedProjects = JSON.parse(localStorage.getItem(\"projects\"));\n  storedProjects.push(newProject);\n  localStorage.setItem(\"projects\", JSON.stringify(storedProjects));\n\n  projectModal.classList.remove(\"open\");\n\n  projectList = JSON.parse(localStorage.getItem(\"projects\"));\n\n  projectModalName.value = \"\";\n\n  tab.innerHTML = \"\";\n  tab.appendChild(createProjectList());\n  content.appendChild(tab);\n});\nprojectModal.appendChild(projectModalOK);\nprojectModal.appendChild(projectModalContainer);\n\ncreateProjectLink.addEventListener(\"click\", (e) => {\n  e.preventDefault();\n  tab.innerHTML = \"\";\n  projectModal.classList.add(\"open\");\n  projectModalExitButton.addEventListener(\"click\", (e) => {\n    e.preventDefault();\n    projectModal.classList.remove(\"open\");\n  });\n});\n\ncreateProjectLinkLI.appendChild(createProjectLink);\nmenuUL.appendChild(createProjectLinkLI);\n\nconst displayProjectsLinkLI = document.createElement(\"li\");\nconst displayProjectsLink = document.createElement(\"a\");\ndisplayProjectsLink.innerText = \"Projects\";\ndisplayProjectsLink.addEventListener(\"click\", e => {\n  e.preventDefault();\n  tab.innerHTML = \"\";\n  tab.appendChild(createProjectList());\n  content.appendChild(tab);\n});\ndisplayProjectsLinkLI.appendChild(displayProjectsLink);\nmenuUL.appendChild(displayProjectsLinkLI);\n\nmenuNav.appendChild(menuUL);\ncontent.appendChild(menuNav);\ncontent.appendChild(projectModal);\n\n\n//# sourceURL=webpack://to-dos/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst project = function (title) {\n    return {\n        title,\n        todos: [],\n        addTodo: todo => {\n            todos.push(todo);\n        },\n        changeTitle: title => {\n            this.title = title;\n        },\n        removeTodo: todo => {\n            todos.filter(e => e !== todo);\n        }\n    }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (project);\n\n//# sourceURL=webpack://to-dos/./src/project.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst todo = function (title, description, dueDate, priority) {\n    return {\n        title,\n        description,\n        dueDate,\n        priority,\n        complete: false,\n        setComplete: () => {this.complete = true},\n        setPriority: (newPriority) => {this.priority = newPriority},\n        changeTitle: (newTitle) => {title = newTitle},\n        changeDescription: (newDescription) => {this.description = newDescription},\n        changeDueDate: (newDueDate) => (this.dueDate = newDueDate),\n    };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todo);\n\n\n//# sourceURL=webpack://to-dos/./src/todo.js?");

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