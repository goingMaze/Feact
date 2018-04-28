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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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

/***/ "./src/d2V.js":
/*!********************!*\
  !*** ./src/d2V.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _vnode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vnode */ \"./src/vnode.js\");\n/*\r\n*\tdom转vnode\r\n*/\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (tag, b, c) {\r\n\tlet data = {}, children, text;\r\n\tif (c !== undefined) {\r\n\t\tdata = b\r\n\t\tif (Array.isArray(c)) {\r\n\t\t\tchildren = c\r\n\t\t} else if (['number', 'string'].includes(typeof c)) {\r\n\t\t\ttext = c\r\n\t\t}\r\n\t} else if (b !== undefined) {\r\n\t\tif(Array.isArray(c)) {\r\n\t\t\tchildren = b\r\n\t\t} else if (['number', 'string'].includes(typeof b)) {\r\n\t\t\ttext = b\r\n\t\t} else {\r\n\t\t\tdata = b\r\n\t\t}\r\n\t}\r\n\tif(Array.isArray(children)) {\r\n\t\tfor(let i = 0; i < children.length; i++) {\r\n\t\t\tif(['number', 'string'].includes(typeof children[i])) {\r\n\t\t\t\tchildren[i] = Object(_vnode__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(undefined, undefined, undefined, children[i])\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\treturn Object(_vnode__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(tag, data, children, text, undefined)\r\n});\n\n//# sourceURL=webpack:///./src/d2V.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _patch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./patch */ \"./src/patch.js\");\n/* harmony import */ var _d2V__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./d2V */ \"./src/d2V.js\");\n/* harmony import */ var _modules_attributes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/attributes */ \"./src/modules/attributes.js\");\n/* harmony import */ var _modules_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/class */ \"./src/modules/class.js\");\n/* harmony import */ var _modules_props__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/props */ \"./src/modules/props.js\");\n/* harmony import */ var _modules_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/style */ \"./src/modules/style.js\");\nconsole.log(\"start----\");\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst patch = Object(_patch__WEBPACK_IMPORTED_MODULE_0__[\"init\"])([\r\n\t_modules_attributes__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\r\n\t_modules_class__WEBPACK_IMPORTED_MODULE_3__[\"default\"], // makes it easy to toggle classes\r\n\t_modules_props__WEBPACK_IMPORTED_MODULE_4__[\"default\"], // for setting properties on DOM elements\r\n\t_modules_style__WEBPACK_IMPORTED_MODULE_5__[\"default\"], // handles styling on elements with support for animations\r\n])\r\n\r\nvar someFn = function () {\r\n\tconsole.log('someFn', arguments);\r\n}\r\n\r\nvar anotherEventHandler = function () {\r\n\tconsole.log('anotherEventHandler', arguments);\r\n}\r\n\r\nvar vnode = Object(_d2V__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('div#container.two.classes', { on: { click: someFn } }, [\r\n\tObject(_d2V__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('p', { style: { fontWeight: 'bold' } }, 'This is bold'),\r\n\t' and this is just normal text',\r\n\tObject(_d2V__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('a', { props: { href: '/foo' } }, 'I\\'ll take you places!')\r\n]);\r\n\r\nconsole.log('vnode', vnode);\r\n\r\nvar newVnode = Object(_d2V__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('div#container.two.classes', { on: { click: anotherEventHandler } }, [\r\n\tObject(_d2V__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('span', { style: { fontWeight: 'normal', fontStyle: 'italic' } }, 'This is now italic type'),\r\n\t' and this is still just normal text',\r\n\tObject(_d2V__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('a', { props: { href: '/bar' } }, 'I\\'ll take you places!')\r\n]);\r\n\r\nconsole.log('newVnode', newVnode);\r\n\r\nfunction patchNew(vnode, newVnode) {\r\n\t// Second `patch` invocation\r\n\tlet n = patch(vnode, newVnode); // Snabbdom efficiently updates the old view to the new state\r\n\tconsole.log(n)\r\n}\r\n\r\nwindow.addEventListener('DOMContentLoaded', () => {\r\n\tvar container = document.getElementById('container');\r\n\r\n\tvnode = patch(container, vnode);\r\n\r\n\tsetTimeout(function () { patchNew(vnode, newVnode) }, 2000);\r\n});\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/attributes.js":
/*!***********************************!*\
  !*** ./src/modules/attributes.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction updateAttributes(oldVnode, vnode) {\r\n\tlet elm = vnode.elm, oldAttrs = oldVnode.data.attrs, attrs = vnode.data.attrs;\r\n\tif(!oldAttrs && !attrs) return;\r\n\toldAttrs = oldAttrs || {}\r\n\tattrs = attrs || {}\r\n\tfor(let key of Object.keys(attrs)) {\r\n\t\tlet cur = attrs[key], old = oldAttrs[key];\r\n\t\tif(old !== cur) {\r\n\t\t\telm.setAttribute(key, cur)\r\n\t\t}\r\n\t}\r\n\tfor(let key of Object.keys(oldAttrs)) {\r\n\t\tif(!elm.hasAttribute(key)) {\r\n\t\t\telm.removeAttribute(key)\r\n\t\t}\r\n\t}\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n\tcreate: updateAttributes,\r\n\tupdate: updateAttributes\r\n});\n\n//# sourceURL=webpack:///./src/modules/attributes.js?");

/***/ }),

/***/ "./src/modules/class.js":
/*!******************************!*\
  !*** ./src/modules/class.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction updateClasses(oldVnode, vnode) {\r\n\tlet elm = vnode.elm, oldClass = oldVnode.data.class, nclass = vnode.data.class;\r\n\tif(!oldClass && !nclass) return;\r\n\telm.className = nclass.join(' ')\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n\tcreate: updateClasses,\r\n\tupdate: updateClasses\r\n});\n\n//# sourceURL=webpack:///./src/modules/class.js?");

/***/ }),

/***/ "./src/modules/props.js":
/*!******************************!*\
  !*** ./src/modules/props.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction updateProps(oldVnode, vnode) {\r\n\tlet elm = vnode.elm, oldProps = oldVnode.data.props, props = vnode.data.props;\r\n\tif(!oldProps && !props) return;\r\n\toldProps = oldProps || {}\r\n\tprops = props || {}\r\n\tfor(let key of Object.keys(oldProps)) {\r\n\t\tif(!props[key]) {\r\n\t\t\tdelete elm[key]\r\n\t\t}\r\n\t}\r\n\tfor(let key of Object.keys(props)) {\r\n\t\tlet cur = props[key], old = oldProps[key];\r\n\t\tif(old !== cur && (key !== 'value' || elm[key] !== cur)) {\r\n\t\t\telm[key] = cur\r\n\t\t}\r\n\t}\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n\tcreate: updateProps,\r\n\tupdate: updateProps\r\n});\n\n//# sourceURL=webpack:///./src/modules/props.js?");

/***/ }),

/***/ "./src/modules/style.js":
/*!******************************!*\
  !*** ./src/modules/style.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction updateStyle(oldVnode, vnode) {\r\n\tlet elm = vnode.elm, oldStyle = oldVnode.data.style, style = vnode.data.style;\r\n\tif(!oldStyle && !style) return;\r\n\toldStyle = oldStyle || {}\r\n\tstyle = style || {}\r\n\tfor(let key of Object.keys(oldStyle)) {\r\n\t\tif(!style[name]) {\r\n\t\t\telm.style[name] = ''\r\n\t\t}\r\n\t}\r\n\tfor(let key of Object.keys(style)) {\r\n\t\telm.style[key] = style[key]\r\n\t}\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n\tcreate: updateStyle,\r\n\tupdate: updateStyle\r\n});\n\n//# sourceURL=webpack:///./src/modules/style.js?");

/***/ }),

/***/ "./src/patch.js":
/*!**********************!*\
  !*** ./src/patch.js ***!
  \**********************/
/*! exports provided: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init\", function() { return init; });\n/* harmony import */ var _vnode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vnode */ \"./src/vnode.js\");\n/*\r\n* 核心功能：diff不同节点 http://note.youdao.com/noteshare?id=46a339a80be370f85ad999c1f3e539ee&sub=1DA66C35CE5B475B82E9C7C93E674FE1\r\n*/\r\n\r\n\r\n\r\nconst hooks = ['create', 'update', 'remove', 'destory']\r\nconst emptyNode = Object(_vnode__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('', {}, [], undefined, undefined)\r\nconst cbs = {};\r\n\r\nfunction isDef(n) { return n !== undefined; }\r\nfunction isUnDef(n) { return n === undefined; }\r\n// 获取tag名\r\nfunction getVnodeInfo(vnode) {\r\n\tlet elm = {}, { tag, children, data, text } = vnode;\r\n\tif (isDef(tag)) {\r\n\t\tlet hashIdx = tag.indexOf('#'),\r\n\t\t\tdotIdx = tag.indexOf('.'),\r\n\t\t\thash = hashIdx > 0 ? hashIdx : tag.length,\r\n\t\t\tdot = dotIdx > 0 ? dotIdx : tag.length;\r\n\t\tif (hash < dot) elm.id = tag.slice(hash + 1, dot);\r\n\t\tif (dotIdx > 0) elm.className = tag.slice(dot + 1).replace(/\\./g, ' ');\r\n\t\treturn {\r\n\t\t\ttag: hashIdx !== -1 || dotIdx !== -1 ? tag.slice(0, Math.min(hash, dot)) : tag,\r\n\t\t\t...{ elm }\r\n\t\t}\r\n\t}\r\n\treturn vnode\r\n}\r\nfunction sameVnode(oldVnode, vnode) {\r\n\treturn getNodeInfo(oldVnode).tag === getNodeInfo(vnode).tage && oldVnode.key === vnode.key\r\n}\r\nfunction domToVnode(elm) {\r\n\tlet id = elm.id ? `#${elm.id}` : '';\r\n\tlet c = elm.className ? `.${elm.className.split(' ').join('.')}` : '';\r\n\treturn Object(_vnode__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(elm.tagName.toLowerCase() + id + c, {}, [], undefined, elm);\r\n}\r\nfunction init(modules = []) {\r\n\t// 添加钩子函数，处理样式、props、事件等\r\n\tfor (let i = 0; i < hooks.length; i++) {\r\n\t\tcbs[hooks[i]] = []\r\n\t\tfor (let j = 0; j < modules.length; j++) {\r\n\t\t\tif (isDef(modules[j][hooks[i]])) {\r\n\t\t\t\tcbs[hooks[i]].push(modules[j][hooks[i]])\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\treturn function patch(oldVnode, vnode) {\r\n\t\tif (isUnDef(oldVnode.tag)) {\r\n\t\t\toldVnode = domToVnode(oldVnode)\r\n\t\t}\r\n\t\tif (sameVnode(oldVnode, vnode)) {\r\n\t\t\tpatchVnode(oldVnode, vnode)\r\n\t\t} else {\r\n\t\t\tlet elm = oldVnode.elm, parentNode = elm.parentNode;\r\n\t\t\tcreateElm(vnode)\r\n\t\t\tif (parentNode !== null) {\r\n\t\t\t\tparentNode.insertBefore(vnode.elm, elm.nextSibling)\r\n\t\t\t\tremoveVnodes(parentNode, [oldVnode], 0, 0)\r\n\t\t\t}\r\n\t\t}\r\n\t\treturn vnode\r\n\t}\r\n}\r\nfunction patchVnode(oldVnode, vnode) {\r\n\tlet elm = vnode.elm = oldVnode.elm, oldCh = oldVnode.children, ch = vnode.children;\r\n\tif (oldVnode === vnode) return;\r\n\tif (!sameVnode(oldVnode, vnode)) {\r\n\t\tlet parentElm = oldVnode.elm.parentNode;\r\n\t\telm = createElm(vnode)\r\n\t\tparentElm.insertBefore(elm, oldVnode.elm)\r\n\t\tremoveVnodes(parentElm, [oldVnode], 0, 0)\r\n\t\treturn;\r\n\t}\r\n\tif (isDef(vnode.data)) {\r\n\t\tfor (let i = 0; i < cbs.update.length; i++) {\r\n\t\t\tcbs.update[i](oldVnode, vnode)\r\n\t\t}\r\n\t}\r\n\tlet { id = '', className = '' } = getVnodeInfo(vnode)\r\n\telm.id = id\r\n\telm.className = className\r\n\tif (isUnDef(vnode.text)) {\r\n\t\tif (isDef(oldCh) && isDef(ch)) {\r\n\t\t\tupdateChildren(elm, oldCh, ch)\r\n\t\t} else if (isDef(ch)) {\r\n\t\t\taddVnodes(elm, null, ch, 0, ch.length - 1)\r\n\t\t} else if (isDef(oldCh)) {\r\n\t\t\tremoveVnodes(elm, oldCh, 0, oldCh.length - 1)\r\n\t\t} else if (isDef(oldVnode.text)) {\r\n\t\t\telm.textContent = ''\r\n\t\t}\r\n\t} else if (oldVnode.text !== vnode.text) {\r\n\t\telm.textContent = vnode.text\r\n\t}\r\n}\r\nfunction updateChildren(parentElm, oldCh, newCh) {\r\n\tlet oldStartIdx = 0, oldEndIdx = oldCh.length - 1,\r\n\t\tnewStartIdx = 0, newEndIdx = newCh.length - 1;\r\n\tlet oldStartVnode = oldCh[0], oldEndVnode = oldCh[oldCh.length - 1],\r\n\t\tnewStartVnode = newCh[0], newEndVnode = newCh[newCh.length - 1];\r\n\tlet idxMap;\r\n\twhile (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {\r\n\t\tif (sameVnode(oldStartVnode, newStartVnode)) {\r\n\t\t\tpatchVnode(oldStartVnode, newStartVnode)\r\n\t\t\toldStartVnode = oldCh[++oldStartIdx]\r\n\t\t\tnewStartVnode = newCh[++newStartIdx]\r\n\t\t} else if (sameVnode(oldEndVnode, newEndVnode)) {\r\n\t\t\tpatchVnode(oldEndVnode, newEndVnode)\r\n\t\t\toldEndVnode = oldCh[--oldEndIdx]\r\n\t\t\tnewEndVnode = newCh[--newEndIdx]\r\n\t\t} else if (sameVnode(oldStartVnode, newEndVnode)) {\r\n\t\t\tpatchVnode(oldStartVnode, newEndVnode)\r\n\t\t\tparentElm.insertBefore(oldStartVnode.elm, oldEndVnode.elm.nextSibling)\r\n\t\t\toldStartVnode = oldCh[++oldStartIdx]\r\n\t\t\tnewEndVnode = newCh[--newEndIdx]\r\n\t\t} else if (sameVnode(oldEndVnode, newStartVnode)) {\r\n\t\t\tpatchVnode(oldEndVnode, newStartVnode)\r\n\t\t\tparentElm.insertBefore(oldEndVnode.elm, oldStartVnode.elm)\r\n\t\t\toldEndVnode = oldCh[--oldEndIdx]\r\n\t\t\tnewStartVnode = newCh[++newStartIdx]\r\n\t\t} else {\r\n\t\t\tif (isUnDef(idxMap)) {\r\n\t\t\t\tidxMap = mapKeyToIndex(oldCh)\r\n\t\t\t}\r\n\t\t\tlet tempIdx = idxMap[newStartVnode.key];\r\n\t\t\tif (isUnDef(tempIdx)) {\r\n\t\t\t\tlet newElm = createElm(newStartVnode);\r\n\t\t\t\tparentElm.insertBefore(newElm, oldStartVnode.elm)\r\n\t\t\t\tnewStartVnode = newCh[++newStartIdx]\r\n\t\t\t} else {\r\n\t\t\t\tpatchVnode(oldCh[tempIdx], newStartVnode)\r\n\t\t\t\tparentElm.insertBefore(oldCh[tempIdx], oldStartVnode.elm)\r\n\t\t\t\toldCh[tempIdx] = undefined // 标记表示已处理\r\n\t\t\t\tnewStartVnode = newCh[++newStartIdx]\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\tif (oldStartIdx > oldEndIdx) {\r\n\t\tlet before = isUnDef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;\r\n\t\taddVnodes(parentElm, before, newCh, newStartIdx, newEndIdx)\r\n\t} else if (newStartIdx > newEndIdx) {\r\n\t\tremoveVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx)\r\n\t}\r\n}\r\nfunction createElm(vnode) {\r\n\tlet elm = {}, { tag, children, data, text } = vnode;\r\n\tif (isDef(tag)) {\r\n\t\tlet hashIdx = tag.indexOf('#'),\r\n\t\t\tdotIdx = tag.indexOf('.'),\r\n\t\t\thash = hashIdx > 0 ? hashIdx : tag.length,\r\n\t\t\tdot = dotIdx > 0 ? dotIdx : tag.length;\r\n\t\tlet tempTag = hashIdx !== -1 || dotIdx !== -1 ? tag.slice(0, Math.min(hash, dot)) : tag,\r\n\t\t\telm = vnode.elm = document.createElement(tempTag);\r\n\t\tif (hash < dot) elm.id = tag.slice(hash + 1, dot);\r\n\t\tif (dotIdx > 0) elm.className = tag.slice(dot + 1).replace(/\\./g, ' ');\r\n\t\tif (Array.isArray(children)) {\r\n\t\t\tfor (let item of children) {\r\n\t\t\t\telm.appendChild(createElm(item))\r\n\t\t\t}\r\n\t\t} else if (['number', 'string'].includes(typeof text)) {\r\n\t\t\telm.appendChild(document.createTextNode(text))\r\n\t\t}\r\n\t\tfor (let i = 0; i < cbs.create.length; i++) {\r\n\t\t\tcbs.create[i](emptyNode, vnode)\r\n\t\t}\r\n\t} else {\r\n\t\telm = vnode.elm = document.createTextNode(text)\r\n\t}\r\n\treturn vnode.elm\r\n}\r\nfunction addVnodes(parentElm, before, vnodes, startIdx, endIdx) {\r\n\tfor (; startIdx <= endIdx; startIdx++) {\r\n\t\tparentElm.insertBefore(createElm(vnodes[startIdx]), before)\r\n\t}\r\n}\r\nfunction removeVnodes(parentElm, vnodes, startIdx, endIdx) {\r\n\tfor (; startIdx <= endIdx; startIdx++) {\r\n\t\tlet vnode = vnodes[startIdx]\r\n\t\tif (isDef(vnode)) {\r\n\t\t\tif (isDef(vnode.tag)) {\r\n\t\t\t\tvnode.elm.parentNode.removeChild(vnode.elm)\r\n\t\t\t\tfor (let i = 0; i < cbs.remove.length; i++) {\r\n\t\t\t\t\tcbs.remove[i](vnode)\r\n\t\t\t\t}\r\n\t\t\t} else {\r\n\t\t\t\tparentElm.removeChild(vnode.elm)\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\nfunction mapKeyToIndex(list, startIdx, endIdx) {\r\n\tlet keyMap = {}, key;\r\n\tfor (let i = startIdx; i <= endIdx; i++) {\r\n\t\tkey = list[i].key\r\n\t\tif (isDef(key)) {\r\n\t\t\tkeyMap[key] = i\r\n\t\t}\r\n\t}\r\n\treturn keyMap;\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/patch.js?");

/***/ }),

/***/ "./src/vnode.js":
/*!**********************!*\
  !*** ./src/vnode.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/*\r\n* 虚拟dom节点\r\n*/\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (tag, data, children, text, elm) {\r\n\tconst key = data === undefined ? undefined : data.key;\r\n\treturn {\r\n\t\ttag, data, children, text, elm, key\r\n\t};\r\n});\r\n\r\n// data: {\r\n// \tattr, // 原生属性\r\n// \tprops,\t// 自定义props\r\n// \tclass, // 类名\r\n// \tstyle, // 样式\r\n// \teventlistener, // 事件\r\n// \tdataset // 属性集\r\n// }\n\n//# sourceURL=webpack:///./src/vnode.js?");

/***/ })

/******/ });