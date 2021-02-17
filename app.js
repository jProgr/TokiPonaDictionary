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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/styles/animations.css
// extracted by mini-css-extract-plugin

// CONCATENATED MODULE: ./src/styles/main.css
// extracted by mini-css-extract-plugin

// CONCATENATED MODULE: ./src/search.js
/**
 * Handles the visibility of a set of DOM elements
 * according to a search query.
 */
class ElementSearcher {
  /**
   * Creates an ElementSearcher.
   *
   * @param {iterable} nodes - A bunch of HTMLElement.
   */
  constructor(nodes) {
    this._nodes = new Map();
    let i = 0;
    for (const node of nodes) {
      this._nodes.set(i, node);
      i++;
    }

    this._boot();
  }

  /**
   * Does some extra work to initialize the object.
   *
   * @return {undefined}
   */
  _boot() {
    this._textNodes = new Map();
    this._nodes.forEach((node, id) => {
      this._textNodes.set(
        id,
        this._getTextNodesRecursively(node)
      );
    });
  }

  /**
   * Performs a search in the text nodes of this_nodes by
   * showing or hiding the elements.
   *
   * @param {string} query
   * @return {undefined}
   */
  search(query) {
    if (!query) {
      this.showAll();
      return;
    }

    this._nodes.forEach((element, id) => {
      if (this._textNodes.get(id).has(query)) { this._showElement(element); }
      else { this._hideElement(element); }
    });
  }

  /**
   * Marks all of the nodes as visible.
   *
   * @return {undefined}
   */
  showAll() {
    this._nodes.forEach(this._showElement);
  }

  /**
   * Marks element as visible.
   *
   * @param {HTMLElement} element
   * @return {undefined}
   */
  _showElement(element) {
    element.style.display = 'flex';
  }

  /**
   * Marks element as invisible.
   *
   * @param {HTMLElement} element
   * @return {undefined}
   */
  _hideElement(element) {
    element.style.display = 'none';
  }

  /**
   * Extracts the text node of element if any.
   *
   * @param {HTMLElement} element
   * @return {string} May be an empty string.
   */
  _getTextNode(element) {
    for (const node of element.childNodes) {
      if (node.nodeType === Node.TEXT_NODE) return node.nodeValue.toLowerCase();
    }

    return '';
  }

  /**
   * Extracts the text node of element and of any of its descendants.
   *
   * @param {HTMLElement} element
   * @param {Set} [textNodes] - Holds the strings of the text nodes already found.
   * @return {Set} Set of strings that the element and its descendants have as text
   * nodes in no particular order.
   */
  _getTextNodesRecursively(element, textNodes = new Set()) {
      this._getTextNode(element)
        .split(/\W+/)
        .forEach(textNodes.add, textNodes);

    if (element.hasChildNodes()) {
      for (const node of element.childNodes) this._getTextNodesRecursively(node, textNodes)
    }

    return textNodes;
  }
}

// CONCATENATED MODULE: ./src/main.js




const wordElements = document.querySelectorAll('div[class=word]');
const searcher = new ElementSearcher(wordElements);

const searchElement = document.getElementById('search');
searchElement.addEventListener('keyup', () => {
  const query = searchElement.value.trim().toLowerCase();
  searcher.search(query);
});


/***/ })
/******/ ]);