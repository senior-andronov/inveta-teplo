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
/******/ 	return __webpack_require__(__webpack_require__.s = "./script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/@popperjs/core/lib/createPopper.js":
/*!***************************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/@popperjs/core/lib/createPopper.js ***!
  \***************************************************************************************************/
/*! exports provided: popperGenerator, createPopper, detectOverflow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popperGenerator", function() { return popperGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPopper", function() { return createPopper; });
/* harmony import */ var _dom_utils_getCompositeRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-utils/getCompositeRect.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js");
/* harmony import */ var _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-utils/getLayoutRect.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js");
/* harmony import */ var _dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-utils/listScrollParents.js */ "../../node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom-utils/getOffsetParent.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom-utils/getComputedStyle.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _utils_orderModifiers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/orderModifiers.js */ "../../node_modules/@popperjs/core/lib/utils/orderModifiers.js");
/* harmony import */ var _utils_debounce_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/debounce.js */ "../../node_modules/@popperjs/core/lib/utils/debounce.js");
/* harmony import */ var _utils_validateModifiers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/validateModifiers.js */ "../../node_modules/@popperjs/core/lib/utils/validateModifiers.js");
/* harmony import */ var _utils_uniqueBy_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/uniqueBy.js */ "../../node_modules/@popperjs/core/lib/utils/uniqueBy.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/getBasePlacement.js */ "../../node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _utils_mergeByName_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/mergeByName.js */ "../../node_modules/@popperjs/core/lib/utils/mergeByName.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/detectOverflow.js */ "../../node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "detectOverflow", function() { return _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dom-utils/instanceOf.js */ "../../node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./enums.js */ "../../node_modules/@popperjs/core/lib/enums.js");














var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(options) {
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: Object(_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_12__["isElement"])(reference) ? Object(_dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_2__["default"])(reference) : reference.contextElement ? Object(_dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_2__["default"])(reference.contextElement) : [],
          popper: Object(_dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_2__["default"])(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = Object(_utils_orderModifiers_js__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_utils_mergeByName_js__WEBPACK_IMPORTED_MODULE_10__["default"])([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned
        // if one of the modifiers is invalid for any reason

        if (true) {
          var modifiers = Object(_utils_uniqueBy_js__WEBPACK_IMPORTED_MODULE_8__["default"])([].concat(orderedModifiers, state.options.modifiers), function (_ref) {
            var name = _ref.name;
            return name;
          });
          Object(_utils_validateModifiers_js__WEBPACK_IMPORTED_MODULE_7__["default"])(modifiers);

          if (Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_9__["default"])(state.options.placement) === _enums_js__WEBPACK_IMPORTED_MODULE_13__["auto"]) {
            var flipModifier = state.orderedModifiers.find(function (_ref2) {
              var name = _ref2.name;
              return name === 'flip';
            });

            if (!flipModifier) {
              console.error(['Popper: "auto" placements require the "flip" modifier be', 'present and enabled to work.'].join(' '));
            }
          }

          var _getComputedStyle = Object(_dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_4__["default"])(popper),
              marginTop = _getComputedStyle.marginTop,
              marginRight = _getComputedStyle.marginRight,
              marginBottom = _getComputedStyle.marginBottom,
              marginLeft = _getComputedStyle.marginLeft; // We no longer take into account `margins` on the popper, and it can
          // cause bugs with positioning, so we'll warn the consumer


          if ([marginTop, marginRight, marginBottom, marginLeft].some(function (margin) {
            return parseFloat(margin);
          })) {
            console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', 'between the popper and its reference element or boundary.', 'To replicate margin, use the `offset` modifier, as well as', 'the `padding` option in the `preventOverflow` and `flip`', 'modifiers.'].join(' '));
          }
        }

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          if (true) {
            console.error(INVALID_ELEMENT_ERROR);
          }

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: Object(_dom_utils_getCompositeRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(reference, Object(_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_3__["default"])(popper), state.options.strategy === 'fixed'),
          popper: Object(_dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_1__["default"])(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (true) {
            __debug_loops__ += 1;

            if (__debug_loops__ > 100) {
              console.error(INFINITE_LOOP_ERROR);
              break;
            }
          }

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Object(_utils_debounce_js__WEBPACK_IMPORTED_MODULE_6__["default"])(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {
      if (true) {
        console.error(INVALID_ELEMENT_ERROR);
      }

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}
var createPopper = /*#__PURE__*/popperGenerator(); // eslint-disable-next-line import/no-unused-modules



/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/dom-utils/contains.js":
/*!*********************************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/@popperjs/core/lib/dom-utils/contains.js ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return contains; });
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instanceOf.js */ "../../node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__["isShadowRoot"])(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js":
/*!**********************************************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getBoundingClientRect; });
function getBoundingClientRect(element) {
  var rect = element.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height,
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    left: rect.left,
    x: rect.left,
    y: rect.top
  };
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js":
/*!****************************************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getClippingRect; });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "../../node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _getViewportRect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getViewportRect.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js");
/* harmony import */ var _getDocumentRect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getDocumentRect.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js");
/* harmony import */ var _listScrollParents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listScrollParents.js */ "../../node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js");
/* harmony import */ var _getOffsetParent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getOffsetParent.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getDocumentElement.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getComputedStyle.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./instanceOf.js */ "../../node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./getBoundingClientRect.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./getParentNode.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");
/* harmony import */ var _contains_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contains.js */ "../../node_modules/@popperjs/core/lib/dom-utils/contains.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./getNodeName.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _utils_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/rectToClientRect.js */ "../../node_modules/@popperjs/core/lib/utils/rectToClientRect.js");
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/math.js */ "../../node_modules/@popperjs/core/lib/utils/math.js");















function getInnerBoundingClientRect(element) {
  var rect = Object(_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_8__["default"])(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === _enums_js__WEBPACK_IMPORTED_MODULE_0__["viewport"] ? Object(_utils_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_12__["default"])(Object(_getViewportRect_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element)) : Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_7__["isHTMLElement"])(clippingParent) ? getInnerBoundingClientRect(clippingParent) : Object(_utils_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_12__["default"])(Object(_getDocumentRect_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_5__["default"])(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = Object(_listScrollParents_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_getParentNode_js__WEBPACK_IMPORTED_MODULE_9__["default"])(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_6__["default"])(element).position) >= 0;
  var clipperElement = canEscapeClipping && Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_7__["isHTMLElement"])(element) ? Object(_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_4__["default"])(element) : element;

  if (!Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_7__["isElement"])(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_7__["isElement"])(clippingParent) && Object(_contains_js__WEBPACK_IMPORTED_MODULE_10__["default"])(clippingParent, clipperElement) && Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_11__["default"])(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_13__["max"])(rect.top, accRect.top);
    accRect.right = Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_13__["min"])(rect.right, accRect.right);
    accRect.bottom = Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_13__["min"])(rect.bottom, accRect.bottom);
    accRect.left = Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_13__["max"])(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js":
/*!*****************************************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getCompositeRect; });
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBoundingClientRect.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _getNodeScroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getNodeScroll.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getNodeName.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./instanceOf.js */ "../../node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getWindowScrollBarX.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getDocumentElement.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _isScrollParent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isScrollParent.js */ "../../node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js");






 // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.

function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var documentElement = Object(_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_5__["default"])(offsetParent);
  var rect = Object(_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(elementOrVirtualElement);
  var isOffsetParentAnElement = Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_3__["isHTMLElement"])(offsetParent);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_2__["default"])(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    Object(_isScrollParent_js__WEBPACK_IMPORTED_MODULE_6__["default"])(documentElement)) {
      scroll = Object(_getNodeScroll_js__WEBPACK_IMPORTED_MODULE_1__["default"])(offsetParent);
    }

    if (Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_3__["isHTMLElement"])(offsetParent)) {
      offsets = Object(_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(offsetParent);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = Object(_getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_4__["default"])(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js":
/*!*****************************************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getComputedStyle; });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getWindow.js");

function getComputedStyle(element) {
  return Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element).getComputedStyle(element);
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js":
/*!*******************************************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getDocumentElement; });
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instanceOf.js */ "../../node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return ((Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__["isElement"])(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js":
/*!****************************************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getDocumentRect; });
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getDocumentElement.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getComputedStyle.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindowScrollBarX.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js");
/* harmony import */ var _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getWindowScroll.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js");
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/math.js */ "../../node_modules/@popperjs/core/lib/utils/math.js");




 // Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;

  var html = Object(_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
  var winScroll = Object(_getWindowScroll_js__WEBPACK_IMPORTED_MODULE_3__["default"])(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_4__["max"])(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_4__["max"])(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + Object(_getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element);
  var y = -winScroll.scrollTop;

  if (Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__["default"])(body || html).direction === 'rtl') {
    x += Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_4__["max"])(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js":
/*!*********************************************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getHTMLElementScroll; });
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js":
/*!**************************************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getLayoutRect; });
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBoundingClientRect.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
 // Returns the layout rect of an element relative to its offsetParent. Layout
// means it doesn't take into account transforms.

function getLayoutRect(element) {
  var clientRect = Object(_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/dom-utils/getNodeName.js":
/*!************************************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/@popperjs/core/lib/dom-utils/getNodeName.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getNodeName; });
function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js":
/*!**************************************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getNodeScroll; });
/* harmony import */ var _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindowScroll.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js");
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWindow.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./instanceOf.js */ "../../node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _getHTMLElementScroll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getHTMLElementScroll.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js");




function getNodeScroll(node) {
  if (node === Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_1__["default"])(node) || !Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_2__["isHTMLElement"])(node)) {
    return Object(_getWindowScroll_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node);
  } else {
    return Object(_getHTMLElementScroll_js__WEBPACK_IMPORTED_MODULE_3__["default"])(node);
  }
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js":
/*!****************************************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getOffsetParent; });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getNodeName.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getComputedStyle.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./instanceOf.js */ "../../node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _isTableElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isTableElement.js */ "../../node_modules/@popperjs/core/lib/dom-utils/isTableElement.js");
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getParentNode.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");







function getTrueOffsetParent(element) {
  if (!Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_3__["isHTMLElement"])(element) || // https://github.com/popperjs/popper-core/issues/837
  Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
  var currentNode = Object(_getParentNode_js__WEBPACK_IMPORTED_MODULE_5__["default"])(element);

  while (Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_3__["isHTMLElement"])(currentNode) && ['html', 'body'].indexOf(Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_1__["default"])(currentNode)) < 0) {
    var css = Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && Object(_isTableElement_js__WEBPACK_IMPORTED_MODULE_4__["default"])(offsetParent) && Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && (Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_1__["default"])(offsetParent) === 'html' || Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_1__["default"])(offsetParent) === 'body' && Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(offsetParent).position === 'static')) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/dom-utils/getParentNode.js":
/*!**************************************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/@popperjs/core/lib/dom-utils/getParentNode.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getParentNode; });
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNodeName.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDocumentElement.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./instanceOf.js */ "../../node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");



function getParentNode(element) {
  if (Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ( // DOM Element detected
    Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_2__["isShadowRoot"])(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Object(_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element) // fallback

  );
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js":
/*!****************************************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getScrollParent; });
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getParentNode.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");
/* harmony import */ var _isScrollParent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isScrollParent.js */ "../../node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getNodeName.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./instanceOf.js */ "../../node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");




function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_2__["default"])(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if (Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_3__["isHTMLElement"])(node) && Object(_isScrollParent_js__WEBPACK_IMPORTED_MODULE_1__["default"])(node)) {
    return node;
  }

  return getScrollParent(Object(_getParentNode_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node));
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js":
/*!****************************************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getViewportRect; });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDocumentElement.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindowScrollBarX.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js");



function getViewportRect(element) {
  var win = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
  var html = Object(_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
  // can be obscured underneath it.
  // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
  // if it isn't open, so if this isn't available, the popper will be detected
  // to overflow the bottom of the screen too early.

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
    // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
    // errors due to floating point numbers, so we need to check precision.
    // Safari returns a number <= 0, usually < -1 when pinch-zoomed
    // Feature detection fails in mobile emulation mode in Chrome.
    // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
    // 0.001
    // Fallback here: "Not Safari" userAgent

    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + Object(_getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element),
    y: y
  };
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/dom-utils/getWindow.js":
/*!**********************************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/@popperjs/core/lib/dom-utils/getWindow.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getWindow; });
function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js":
/*!****************************************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getWindowScroll; });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getWindow.js");

function getWindowScroll(node) {
  var win = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js":
/*!********************************************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getWindowScrollBarX; });
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBoundingClientRect.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDocumentElement.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindowScroll.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js");



function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return Object(_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element)).left + Object(_getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element).scrollLeft;
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/dom-utils/instanceOf.js":
/*!***********************************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/@popperjs/core/lib/dom-utils/instanceOf.js ***!
  \***********************************************************************************************************/
/*! exports provided: isElement, isHTMLElement, isShadowRoot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isElement", function() { return isElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHTMLElement", function() { return isHTMLElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isShadowRoot", function() { return isShadowRoot; });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getWindow.js");


function isElement(node) {
  var OwnElement = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}

function isHTMLElement(node) {
  var OwnElement = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}



/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js":
/*!***************************************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isScrollParent; });
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getComputedStyle.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/dom-utils/isTableElement.js":
/*!***************************************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/@popperjs/core/lib/dom-utils/isTableElement.js ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isTableElement; });
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNodeName.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element)) >= 0;
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js":
/*!******************************************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return listScrollParents; });
/* harmony import */ var _getScrollParent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getScrollParent.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js");
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getParentNode.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindow.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _isScrollParent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isScrollParent.js */ "../../node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js");




/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

function listScrollParents(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = Object(_getScrollParent_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_2__["default"])(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], Object(_isScrollParent_js__WEBPACK_IMPORTED_MODULE_3__["default"])(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(Object(_getParentNode_js__WEBPACK_IMPORTED_MODULE_1__["default"])(target)));
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/enums.js":
/*!********************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/@popperjs/core/lib/enums.js ***!
  \********************************************************************************************/
/*! exports provided: top, bottom, right, left, auto, basePlacements, start, end, clippingParents, viewport, popper, reference, variationPlacements, placements, beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite, modifierPhases */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "top", function() { return top; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bottom", function() { return bottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "right", function() { return right; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "left", function() { return left; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auto", function() { return auto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basePlacements", function() { return basePlacements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return start; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "end", function() { return end; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clippingParents", function() { return clippingParents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewport", function() { return viewport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popper", function() { return popper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reference", function() { return reference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "variationPlacements", function() { return variationPlacements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "placements", function() { return placements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beforeRead", function() { return beforeRead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "read", function() { return read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "afterRead", function() { return afterRead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beforeMain", function() { return beforeMain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "main", function() { return main; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "afterMain", function() { return afterMain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beforeWrite", function() { return beforeWrite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "write", function() { return write; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "afterWrite", function() { return afterWrite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modifierPhases", function() { return modifierPhases; });
var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/index.js":
/*!********************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/@popperjs/core/lib/index.js ***!
  \********************************************************************************************/
/*! exports provided: top, bottom, right, left, auto, basePlacements, start, end, clippingParents, viewport, popper, reference, variationPlacements, placements, beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite, modifierPhases, applyStyles, arrow, computeStyles, eventListeners, flip, hide, offset, popperOffsets, preventOverflow, popperGenerator, detectOverflow, createPopperBase, createPopper, createPopperLite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums.js */ "../../node_modules/@popperjs/core/lib/enums.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "top", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["top"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bottom", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["bottom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "right", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["right"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "left", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["left"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "auto", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["auto"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "basePlacements", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["basePlacements"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "start", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["start"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "end", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["end"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clippingParents", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["clippingParents"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "viewport", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["viewport"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "popper", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["popper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reference", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["reference"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "variationPlacements", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["variationPlacements"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "placements", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["placements"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "beforeRead", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["beforeRead"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "read", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["read"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "afterRead", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["afterRead"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "beforeMain", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["beforeMain"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "main", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["main"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "afterMain", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["afterMain"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "beforeWrite", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["beforeWrite"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "write", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["write"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "afterWrite", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["afterWrite"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "modifierPhases", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["modifierPhases"]; });

/* harmony import */ var _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifiers/index.js */ "../../node_modules/@popperjs/core/lib/modifiers/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyStyles", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__["applyStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrow", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__["arrow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "computeStyles", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__["computeStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eventListeners", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__["eventListeners"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flip", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__["flip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hide", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__["hide"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offset", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__["offset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "popperOffsets", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__["popperOffsets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "preventOverflow", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__["preventOverflow"]; });

/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createPopper.js */ "../../node_modules/@popperjs/core/lib/createPopper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "popperGenerator", function() { return _createPopper_js__WEBPACK_IMPORTED_MODULE_2__["popperGenerator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "detectOverflow", function() { return _createPopper_js__WEBPACK_IMPORTED_MODULE_2__["detectOverflow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPopperBase", function() { return _createPopper_js__WEBPACK_IMPORTED_MODULE_2__["createPopper"]; });

/* harmony import */ var _popper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popper.js */ "../../node_modules/@popperjs/core/lib/popper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPopper", function() { return _popper_js__WEBPACK_IMPORTED_MODULE_3__["createPopper"]; });

/* harmony import */ var _popper_lite_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popper-lite.js */ "../../node_modules/@popperjs/core/lib/popper-lite.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPopperLite", function() { return _popper_lite_js__WEBPACK_IMPORTED_MODULE_4__["createPopper"]; });


 // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules



/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/modifiers/applyStyles.js":
/*!************************************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/@popperjs/core/lib/modifiers/applyStyles.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_utils_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom-utils/getNodeName.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom-utils/instanceOf.js */ "../../node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");

 // This modifier takes the styles prepared by the `computeStyles` modifier
// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!Object(_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__["isHTMLElement"])(element) || !Object(_dom_utils_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!Object(_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__["isHTMLElement"])(element) || !Object(_dom_utils_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element)) {
        return;
      }

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect,
  requires: ['computeStyles']
});

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/modifiers/arrow.js":
/*!******************************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/@popperjs/core/lib/modifiers/arrow.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "../../node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom-utils/getLayoutRect.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js");
/* harmony import */ var _dom_utils_contains_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom-utils/contains.js */ "../../node_modules/@popperjs/core/lib/dom-utils/contains.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom-utils/getOffsetParent.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/getMainAxisFromPlacement.js */ "../../node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js");
/* harmony import */ var _utils_within_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/within.js */ "../../node_modules/@popperjs/core/lib/utils/within.js");
/* harmony import */ var _utils_mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/mergePaddingObject.js */ "../../node_modules/@popperjs/core/lib/utils/mergePaddingObject.js");
/* harmony import */ var _utils_expandToHashMap_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/expandToHashMap.js */ "../../node_modules/@popperjs/core/lib/utils/expandToHashMap.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../enums.js */ "../../node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../dom-utils/instanceOf.js */ "../../node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");









 // eslint-disable-next-line import/no-unused-modules

var toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return Object(_utils_mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_6__["default"])(typeof padding !== 'number' ? padding : Object(_utils_expandToHashMap_js__WEBPACK_IMPORTED_MODULE_7__["default"])(padding, _enums_js__WEBPACK_IMPORTED_MODULE_8__["basePlacements"]));
};

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(state.placement);
  var axis = Object(_utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_4__["default"])(basePlacement);
  var isVertical = [_enums_js__WEBPACK_IMPORTED_MODULE_8__["left"], _enums_js__WEBPACK_IMPORTED_MODULE_8__["right"]].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = Object(_dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arrowElement);
  var minProp = axis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_8__["top"] : _enums_js__WEBPACK_IMPORTED_MODULE_8__["left"];
  var maxProp = axis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_8__["bottom"] : _enums_js__WEBPACK_IMPORTED_MODULE_8__["right"];
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = Object(_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_3__["default"])(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = Object(_utils_within_js__WEBPACK_IMPORTED_MODULE_5__["default"])(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function effect(_ref2) {
  var state = _ref2.state,
      options = _ref2.options;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (true) {
    if (!Object(_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_9__["isHTMLElement"])(arrowElement)) {
      console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', 'To use an SVG arrow, wrap it in an HTMLElement that will be used as', 'the arrow.'].join(' '));
    }
  }

  if (!Object(_dom_utils_contains_js__WEBPACK_IMPORTED_MODULE_2__["default"])(state.elements.popper, arrowElement)) {
    if (true) {
      console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', 'element.'].join(' '));
    }

    return;
  }

  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
});

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/modifiers/computeStyles.js":
/*!**************************************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/@popperjs/core/lib/modifiers/computeStyles.js ***!
  \**************************************************************************************************************/
/*! exports provided: mapToStyles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapToStyles", function() { return mapToStyles; });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "../../node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom-utils/getOffsetParent.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom-utils/getWindow.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom-utils/getDocumentElement.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dom-utils/getComputedStyle.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "../../node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/math.js */ "../../node_modules/@popperjs/core/lib/utils/math.js");






 // eslint-disable-next-line import/no-unused-modules

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_6__["round"])(Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_6__["round"])(x * dpr) / dpr) || 0,
    y: Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_6__["round"])(Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_6__["round"])(y * dpr) / dpr) || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets;

  var _ref3 = roundOffsets === true ? roundOffsetsByDPR(offsets) : typeof roundOffsets === 'function' ? roundOffsets(offsets) : offsets,
      _ref3$x = _ref3.x,
      x = _ref3$x === void 0 ? 0 : _ref3$x,
      _ref3$y = _ref3.y,
      y = _ref3$y === void 0 ? 0 : _ref3$y;

  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = _enums_js__WEBPACK_IMPORTED_MODULE_0__["left"];
  var sideY = _enums_js__WEBPACK_IMPORTED_MODULE_0__["top"];
  var win = window;

  if (adaptive) {
    var offsetParent = Object(_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_1__["default"])(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';

    if (offsetParent === Object(_dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_2__["default"])(popper)) {
      offsetParent = Object(_dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_3__["default"])(popper);

      if (Object(_dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_4__["default"])(offsetParent).position !== 'static') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


    offsetParent = offsetParent;

    if (placement === _enums_js__WEBPACK_IMPORTED_MODULE_0__["top"]) {
      sideY = _enums_js__WEBPACK_IMPORTED_MODULE_0__["bottom"]; // $FlowFixMe[prop-missing]

      y -= offsetParent[heightProp] - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === _enums_js__WEBPACK_IMPORTED_MODULE_0__["left"]) {
      sideX = _enums_js__WEBPACK_IMPORTED_MODULE_0__["right"]; // $FlowFixMe[prop-missing]

      x -= offsetParent[widthProp] - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) < 2 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref4) {
  var state = _ref4.state,
      options = _ref4.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

  if (true) {
    var transitionProperty = Object(_dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_4__["default"])(state.elements.popper).transitionProperty || '';

    if (adaptive && ['transform', 'top', 'right', 'bottom', 'left'].some(function (property) {
      return transitionProperty.indexOf(property) >= 0;
    })) {
      console.warn(['Popper: Detected CSS transitions on at least one of the following', 'CSS properties: "transform", "top", "right", "bottom", "left".', '\n\n', 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', 'for smooth transitions, or remove these properties from the CSS', 'transition declaration on the popper element if only transitioning', 'opacity or background-color for example.', '\n\n', 'We recommend using the popper element as a wrapper around an inner', 'element that can have any CSS property transitioned for animations.'].join(' '));
    }
  }

  var commonStyles = {
    placement: Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_5__["default"])(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
});

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/modifiers/eventListeners.js":
/*!***************************************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/@popperjs/core/lib/modifiers/eventListeners.js ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom-utils/getWindow.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
 // eslint-disable-next-line import/no-unused-modules

var passive = {
  passive: true
};

function effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = Object(_dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect,
  data: {}
});

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/modifiers/flip.js":
/*!*****************************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/@popperjs/core/lib/modifiers/flip.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getOppositePlacement.js */ "../../node_modules/@popperjs/core/lib/utils/getOppositePlacement.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "../../node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _utils_getOppositeVariationPlacement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getOppositeVariationPlacement.js */ "../../node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/detectOverflow.js */ "../../node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _utils_computeAutoPlacement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/computeAutoPlacement.js */ "../../node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../enums.js */ "../../node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _utils_getVariation_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/getVariation.js */ "../../node_modules/@popperjs/core/lib/utils/getVariation.js");






 // eslint-disable-next-line import/no-unused-modules

function getExpandedFallbackPlacements(placement) {
  if (Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(placement) === _enums_js__WEBPACK_IMPORTED_MODULE_5__["auto"]) {
    return [];
  }

  var oppositePlacement = Object(_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement);
  return [Object(_utils_getOppositeVariationPlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(placement), oppositePlacement, Object(_utils_getOppositeVariationPlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [Object(_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(placement) === _enums_js__WEBPACK_IMPORTED_MODULE_5__["auto"] ? Object(_utils_computeAutoPlacement_js__WEBPACK_IMPORTED_MODULE_4__["default"])(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(placement);

    var isStartVariation = Object(_utils_getVariation_js__WEBPACK_IMPORTED_MODULE_6__["default"])(placement) === _enums_js__WEBPACK_IMPORTED_MODULE_5__["start"];
    var isVertical = [_enums_js__WEBPACK_IMPORTED_MODULE_5__["top"], _enums_js__WEBPACK_IMPORTED_MODULE_5__["bottom"]].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = Object(_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_3__["default"])(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? _enums_js__WEBPACK_IMPORTED_MODULE_5__["right"] : _enums_js__WEBPACK_IMPORTED_MODULE_5__["left"] : isStartVariation ? _enums_js__WEBPACK_IMPORTED_MODULE_5__["bottom"] : _enums_js__WEBPACK_IMPORTED_MODULE_5__["top"];

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = Object(_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(mainVariationSide);
    }

    var altVariationSide = Object(_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
});

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/modifiers/hide.js":
/*!*****************************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/@popperjs/core/lib/modifiers/hide.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "../../node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/detectOverflow.js */ "../../node_modules/@popperjs/core/lib/utils/detectOverflow.js");



function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [_enums_js__WEBPACK_IMPORTED_MODULE_0__["top"], _enums_js__WEBPACK_IMPORTED_MODULE_0__["right"], _enums_js__WEBPACK_IMPORTED_MODULE_0__["bottom"], _enums_js__WEBPACK_IMPORTED_MODULE_0__["left"]].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = Object(_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_1__["default"])(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = Object(_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_1__["default"])(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
});

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/modifiers/index.js":
/*!******************************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/@popperjs/core/lib/modifiers/index.js ***!
  \******************************************************************************************************/
/*! exports provided: applyStyles, arrow, computeStyles, eventListeners, flip, hide, offset, popperOffsets, preventOverflow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _applyStyles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./applyStyles.js */ "../../node_modules/@popperjs/core/lib/modifiers/applyStyles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyStyles", function() { return _applyStyles_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _arrow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arrow.js */ "../../node_modules/@popperjs/core/lib/modifiers/arrow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrow", function() { return _arrow_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _computeStyles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./computeStyles.js */ "../../node_modules/@popperjs/core/lib/modifiers/computeStyles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "computeStyles", function() { return _computeStyles_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _eventListeners_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eventListeners.js */ "../../node_modules/@popperjs/core/lib/modifiers/eventListeners.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eventListeners", function() { return _eventListeners_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _flip_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./flip.js */ "../../node_modules/@popperjs/core/lib/modifiers/flip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flip", function() { return _flip_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _hide_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hide.js */ "../../node_modules/@popperjs/core/lib/modifiers/hide.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hide", function() { return _hide_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _offset_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./offset.js */ "../../node_modules/@popperjs/core/lib/modifiers/offset.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offset", function() { return _offset_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _popperOffsets_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./popperOffsets.js */ "../../node_modules/@popperjs/core/lib/modifiers/popperOffsets.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "popperOffsets", function() { return _popperOffsets_js__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _preventOverflow_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./preventOverflow.js */ "../../node_modules/@popperjs/core/lib/modifiers/preventOverflow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "preventOverflow", function() { return _preventOverflow_js__WEBPACK_IMPORTED_MODULE_8__["default"]; });











/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/modifiers/offset.js":
/*!*******************************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/@popperjs/core/lib/modifiers/offset.js ***!
  \*******************************************************************************************************/
/*! exports provided: distanceAndSkiddingToXY, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distanceAndSkiddingToXY", function() { return distanceAndSkiddingToXY; });
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "../../node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ "../../node_modules/@popperjs/core/lib/enums.js");


function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement);
  var invertDistance = [_enums_js__WEBPACK_IMPORTED_MODULE_1__["left"], _enums_js__WEBPACK_IMPORTED_MODULE_1__["top"]].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [_enums_js__WEBPACK_IMPORTED_MODULE_1__["left"], _enums_js__WEBPACK_IMPORTED_MODULE_1__["right"]].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = _enums_js__WEBPACK_IMPORTED_MODULE_1__["placements"].reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
});

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/modifiers/popperOffsets.js":
/*!**************************************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/@popperjs/core/lib/modifiers/popperOffsets.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_computeOffsets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/computeOffsets.js */ "../../node_modules/@popperjs/core/lib/utils/computeOffsets.js");


function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = Object(_utils_computeOffsets_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
});

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/modifiers/preventOverflow.js":
/*!****************************************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/@popperjs/core/lib/modifiers/preventOverflow.js ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "../../node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "../../node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getMainAxisFromPlacement.js */ "../../node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js");
/* harmony import */ var _utils_getAltAxis_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getAltAxis.js */ "../../node_modules/@popperjs/core/lib/utils/getAltAxis.js");
/* harmony import */ var _utils_within_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/within.js */ "../../node_modules/@popperjs/core/lib/utils/within.js");
/* harmony import */ var _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dom-utils/getLayoutRect.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom-utils/getOffsetParent.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/detectOverflow.js */ "../../node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _utils_getVariation_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/getVariation.js */ "../../node_modules/@popperjs/core/lib/utils/getVariation.js");
/* harmony import */ var _utils_getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/getFreshSideObject.js */ "../../node_modules/@popperjs/core/lib/utils/getFreshSideObject.js");
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/math.js */ "../../node_modules/@popperjs/core/lib/utils/math.js");












function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = Object(_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_7__["default"])(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(state.placement);
  var variation = Object(_utils_getVariation_js__WEBPACK_IMPORTED_MODULE_8__["default"])(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = Object(_utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(basePlacement);
  var altAxis = Object(_utils_getAltAxis_js__WEBPACK_IMPORTED_MODULE_3__["default"])(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis || checkAltAxis) {
    var mainSide = mainAxis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_0__["top"] : _enums_js__WEBPACK_IMPORTED_MODULE_0__["left"];
    var altSide = mainAxis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_0__["bottom"] : _enums_js__WEBPACK_IMPORTED_MODULE_0__["right"];
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min = popperOffsets[mainAxis] + overflow[mainSide];
    var max = popperOffsets[mainAxis] - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === _enums_js__WEBPACK_IMPORTED_MODULE_0__["start"] ? referenceRect[len] : popperRect[len];
    var maxLen = variation === _enums_js__WEBPACK_IMPORTED_MODULE_0__["start"] ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? Object(_dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_5__["default"])(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : Object(_utils_getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_9__["default"])();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = Object(_utils_within_js__WEBPACK_IMPORTED_MODULE_4__["default"])(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
    var arrowOffsetParent = state.elements.arrow && Object(_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_6__["default"])(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
    var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;

    if (checkMainAxis) {
      var preventedOffset = Object(_utils_within_js__WEBPACK_IMPORTED_MODULE_4__["default"])(tether ? Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_10__["min"])(min, tetherMin) : min, offset, tether ? Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_10__["max"])(max, tetherMax) : max);
      popperOffsets[mainAxis] = preventedOffset;
      data[mainAxis] = preventedOffset - offset;
    }

    if (checkAltAxis) {
      var _mainSide = mainAxis === 'x' ? _enums_js__WEBPACK_IMPORTED_MODULE_0__["top"] : _enums_js__WEBPACK_IMPORTED_MODULE_0__["left"];

      var _altSide = mainAxis === 'x' ? _enums_js__WEBPACK_IMPORTED_MODULE_0__["bottom"] : _enums_js__WEBPACK_IMPORTED_MODULE_0__["right"];

      var _offset = popperOffsets[altAxis];

      var _min = _offset + overflow[_mainSide];

      var _max = _offset - overflow[_altSide];

      var _preventedOffset = Object(_utils_within_js__WEBPACK_IMPORTED_MODULE_4__["default"])(tether ? Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_10__["min"])(_min, tetherMin) : _min, _offset, tether ? Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_10__["max"])(_max, tetherMax) : _max);

      popperOffsets[altAxis] = _preventedOffset;
      data[altAxis] = _preventedOffset - _offset;
    }
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
});

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/popper-lite.js":
/*!**************************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/@popperjs/core/lib/popper-lite.js ***!
  \**************************************************************************************************/
/*! exports provided: createPopper, popperGenerator, defaultModifiers, detectOverflow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPopper", function() { return createPopper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultModifiers", function() { return defaultModifiers; });
/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createPopper.js */ "../../node_modules/@popperjs/core/lib/createPopper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "popperGenerator", function() { return _createPopper_js__WEBPACK_IMPORTED_MODULE_0__["popperGenerator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "detectOverflow", function() { return _createPopper_js__WEBPACK_IMPORTED_MODULE_0__["detectOverflow"]; });

/* harmony import */ var _modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifiers/eventListeners.js */ "../../node_modules/@popperjs/core/lib/modifiers/eventListeners.js");
/* harmony import */ var _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modifiers/popperOffsets.js */ "../../node_modules/@popperjs/core/lib/modifiers/popperOffsets.js");
/* harmony import */ var _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modifiers/computeStyles.js */ "../../node_modules/@popperjs/core/lib/modifiers/computeStyles.js");
/* harmony import */ var _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modifiers/applyStyles.js */ "../../node_modules/@popperjs/core/lib/modifiers/applyStyles.js");





var defaultModifiers = [_modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_1__["default"], _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_2__["default"], _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_3__["default"], _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_4__["default"]];
var createPopper = /*#__PURE__*/Object(_createPopper_js__WEBPACK_IMPORTED_MODULE_0__["popperGenerator"])({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules



/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/popper.js":
/*!*********************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/@popperjs/core/lib/popper.js ***!
  \*********************************************************************************************/
/*! exports provided: createPopper, popperGenerator, defaultModifiers, detectOverflow, createPopperLite, applyStyles, arrow, computeStyles, eventListeners, flip, hide, offset, popperOffsets, preventOverflow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPopper", function() { return createPopper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultModifiers", function() { return defaultModifiers; });
/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createPopper.js */ "../../node_modules/@popperjs/core/lib/createPopper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "popperGenerator", function() { return _createPopper_js__WEBPACK_IMPORTED_MODULE_0__["popperGenerator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "detectOverflow", function() { return _createPopper_js__WEBPACK_IMPORTED_MODULE_0__["detectOverflow"]; });

/* harmony import */ var _modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifiers/eventListeners.js */ "../../node_modules/@popperjs/core/lib/modifiers/eventListeners.js");
/* harmony import */ var _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modifiers/popperOffsets.js */ "../../node_modules/@popperjs/core/lib/modifiers/popperOffsets.js");
/* harmony import */ var _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modifiers/computeStyles.js */ "../../node_modules/@popperjs/core/lib/modifiers/computeStyles.js");
/* harmony import */ var _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modifiers/applyStyles.js */ "../../node_modules/@popperjs/core/lib/modifiers/applyStyles.js");
/* harmony import */ var _modifiers_offset_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modifiers/offset.js */ "../../node_modules/@popperjs/core/lib/modifiers/offset.js");
/* harmony import */ var _modifiers_flip_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modifiers/flip.js */ "../../node_modules/@popperjs/core/lib/modifiers/flip.js");
/* harmony import */ var _modifiers_preventOverflow_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modifiers/preventOverflow.js */ "../../node_modules/@popperjs/core/lib/modifiers/preventOverflow.js");
/* harmony import */ var _modifiers_arrow_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modifiers/arrow.js */ "../../node_modules/@popperjs/core/lib/modifiers/arrow.js");
/* harmony import */ var _modifiers_hide_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modifiers/hide.js */ "../../node_modules/@popperjs/core/lib/modifiers/hide.js");
/* harmony import */ var _popper_lite_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./popper-lite.js */ "../../node_modules/@popperjs/core/lib/popper-lite.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPopperLite", function() { return _popper_lite_js__WEBPACK_IMPORTED_MODULE_10__["createPopper"]; });

/* harmony import */ var _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modifiers/index.js */ "../../node_modules/@popperjs/core/lib/modifiers/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyStyles", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__["applyStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrow", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__["arrow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "computeStyles", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__["computeStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eventListeners", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__["eventListeners"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flip", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__["flip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hide", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__["hide"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offset", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__["offset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "popperOffsets", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__["popperOffsets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "preventOverflow", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__["preventOverflow"]; });











var defaultModifiers = [_modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_1__["default"], _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_2__["default"], _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_3__["default"], _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_4__["default"], _modifiers_offset_js__WEBPACK_IMPORTED_MODULE_5__["default"], _modifiers_flip_js__WEBPACK_IMPORTED_MODULE_6__["default"], _modifiers_preventOverflow_js__WEBPACK_IMPORTED_MODULE_7__["default"], _modifiers_arrow_js__WEBPACK_IMPORTED_MODULE_8__["default"], _modifiers_hide_js__WEBPACK_IMPORTED_MODULE_9__["default"]];
var createPopper = /*#__PURE__*/Object(_createPopper_js__WEBPACK_IMPORTED_MODULE_0__["popperGenerator"])({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules



/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js":
/*!*****************************************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return computeAutoPlacement; });
/* harmony import */ var _getVariation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getVariation.js */ "../../node_modules/@popperjs/core/lib/utils/getVariation.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ "../../node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _detectOverflow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detectOverflow.js */ "../../node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _getBasePlacement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getBasePlacement.js */ "../../node_modules/@popperjs/core/lib/utils/getBasePlacement.js");




function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_1__["placements"] : _options$allowedAutoP;
  var variation = Object(_getVariation_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement);
  var placements = variation ? flipVariations ? _enums_js__WEBPACK_IMPORTED_MODULE_1__["variationPlacements"] : _enums_js__WEBPACK_IMPORTED_MODULE_1__["variationPlacements"].filter(function (placement) {
    return Object(_getVariation_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement) === variation;
  }) : _enums_js__WEBPACK_IMPORTED_MODULE_1__["basePlacements"];
  var allowedPlacements = placements.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements;

    if (true) {
      console.error(['Popper: The `allowedAutoPlacements` option did not allow any', 'placements. Ensure the `placement` option matches the variation', 'of the allowed placements.', 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(' '));
    }
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = Object(_detectOverflow_js__WEBPACK_IMPORTED_MODULE_2__["default"])(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[Object(_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_3__["default"])(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/utils/computeOffsets.js":
/*!***********************************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/@popperjs/core/lib/utils/computeOffsets.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return computeOffsets; });
/* harmony import */ var _getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBasePlacement.js */ "../../node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _getVariation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getVariation.js */ "../../node_modules/@popperjs/core/lib/utils/getVariation.js");
/* harmony import */ var _getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getMainAxisFromPlacement.js */ "../../node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enums.js */ "../../node_modules/@popperjs/core/lib/enums.js");




function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? Object(_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement) : null;
  var variation = placement ? Object(_getVariation_js__WEBPACK_IMPORTED_MODULE_1__["default"])(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case _enums_js__WEBPACK_IMPORTED_MODULE_3__["top"]:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case _enums_js__WEBPACK_IMPORTED_MODULE_3__["bottom"]:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case _enums_js__WEBPACK_IMPORTED_MODULE_3__["right"]:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case _enums_js__WEBPACK_IMPORTED_MODULE_3__["left"]:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? Object(_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case _enums_js__WEBPACK_IMPORTED_MODULE_3__["start"]:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case _enums_js__WEBPACK_IMPORTED_MODULE_3__["end"]:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;

      default:
    }
  }

  return offsets;
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/utils/debounce.js":
/*!*****************************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/@popperjs/core/lib/utils/debounce.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return debounce; });
function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/utils/detectOverflow.js":
/*!***********************************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/@popperjs/core/lib/utils/detectOverflow.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return detectOverflow; });
/* harmony import */ var _dom_utils_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom-utils/getBoundingClientRect.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _dom_utils_getClippingRect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom-utils/getClippingRect.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js");
/* harmony import */ var _dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom-utils/getDocumentElement.js */ "../../node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _computeOffsets_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./computeOffsets.js */ "../../node_modules/@popperjs/core/lib/utils/computeOffsets.js");
/* harmony import */ var _rectToClientRect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rectToClientRect.js */ "../../node_modules/@popperjs/core/lib/utils/rectToClientRect.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../enums.js */ "../../node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom-utils/instanceOf.js */ "../../node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mergePaddingObject.js */ "../../node_modules/@popperjs/core/lib/utils/mergePaddingObject.js");
/* harmony import */ var _expandToHashMap_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./expandToHashMap.js */ "../../node_modules/@popperjs/core/lib/utils/expandToHashMap.js");








 // eslint-disable-next-line import/no-unused-modules

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_5__["clippingParents"] : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_5__["viewport"] : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_5__["popper"] : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = Object(_mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_7__["default"])(typeof padding !== 'number' ? padding : Object(_expandToHashMap_js__WEBPACK_IMPORTED_MODULE_8__["default"])(padding, _enums_js__WEBPACK_IMPORTED_MODULE_5__["basePlacements"]));
  var altContext = elementContext === _enums_js__WEBPACK_IMPORTED_MODULE_5__["popper"] ? _enums_js__WEBPACK_IMPORTED_MODULE_5__["reference"] : _enums_js__WEBPACK_IMPORTED_MODULE_5__["popper"];
  var referenceElement = state.elements.reference;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = Object(_dom_utils_getClippingRect_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_6__["isElement"])(element) ? element : element.contextElement || Object(_dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = Object(_dom_utils_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(referenceElement);
  var popperOffsets = Object(_computeOffsets_js__WEBPACK_IMPORTED_MODULE_3__["default"])({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = Object(_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_4__["default"])(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === _enums_js__WEBPACK_IMPORTED_MODULE_5__["popper"] ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === _enums_js__WEBPACK_IMPORTED_MODULE_5__["popper"] && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [_enums_js__WEBPACK_IMPORTED_MODULE_5__["right"], _enums_js__WEBPACK_IMPORTED_MODULE_5__["bottom"]].indexOf(key) >= 0 ? 1 : -1;
      var axis = [_enums_js__WEBPACK_IMPORTED_MODULE_5__["top"], _enums_js__WEBPACK_IMPORTED_MODULE_5__["bottom"]].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/utils/expandToHashMap.js":
/*!************************************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/@popperjs/core/lib/utils/expandToHashMap.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return expandToHashMap; });
function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/utils/format.js":
/*!***************************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/@popperjs/core/lib/utils/format.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return format; });
function format(str) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return [].concat(args).reduce(function (p, c) {
    return p.replace(/%s/, c);
  }, str);
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/utils/getAltAxis.js":
/*!*******************************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/@popperjs/core/lib/utils/getAltAxis.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getAltAxis; });
function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/utils/getBasePlacement.js":
/*!*************************************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/@popperjs/core/lib/utils/getBasePlacement.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getBasePlacement; });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "../../node_modules/@popperjs/core/lib/enums.js");

function getBasePlacement(placement) {
  return placement.split('-')[0];
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/utils/getFreshSideObject.js":
/*!***************************************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/@popperjs/core/lib/utils/getFreshSideObject.js ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getFreshSideObject; });
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js":
/*!*********************************************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getMainAxisFromPlacement; });
function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/utils/getOppositePlacement.js":
/*!*****************************************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/@popperjs/core/lib/utils/getOppositePlacement.js ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getOppositePlacement; });
var hash = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js":
/*!**************************************************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getOppositeVariationPlacement; });
var hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash[matched];
  });
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/utils/getVariation.js":
/*!*********************************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/@popperjs/core/lib/utils/getVariation.js ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getVariation; });
function getVariation(placement) {
  return placement.split('-')[1];
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/utils/math.js":
/*!*************************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/@popperjs/core/lib/utils/math.js ***!
  \*************************************************************************************************/
/*! exports provided: max, min, round */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round", function() { return round; });
var max = Math.max;
var min = Math.min;
var round = Math.round;

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/utils/mergeByName.js":
/*!********************************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/@popperjs/core/lib/utils/mergeByName.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mergeByName; });
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/utils/mergePaddingObject.js":
/*!***************************************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/@popperjs/core/lib/utils/mergePaddingObject.js ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mergePaddingObject; });
/* harmony import */ var _getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getFreshSideObject.js */ "../../node_modules/@popperjs/core/lib/utils/getFreshSideObject.js");

function mergePaddingObject(paddingObject) {
  return Object.assign({}, Object(_getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(), paddingObject);
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/utils/orderModifiers.js":
/*!***********************************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/@popperjs/core/lib/utils/orderModifiers.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return orderModifiers; });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "../../node_modules/@popperjs/core/lib/enums.js");
 // source: https://stackoverflow.com/questions/49875255

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return _enums_js__WEBPACK_IMPORTED_MODULE_0__["modifierPhases"].reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/utils/rectToClientRect.js":
/*!*************************************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/@popperjs/core/lib/utils/rectToClientRect.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rectToClientRect; });
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/utils/uniqueBy.js":
/*!*****************************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/@popperjs/core/lib/utils/uniqueBy.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return uniqueBy; });
function uniqueBy(arr, fn) {
  var identifiers = new Set();
  return arr.filter(function (item) {
    var identifier = fn(item);

    if (!identifiers.has(identifier)) {
      identifiers.add(identifier);
      return true;
    }
  });
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/utils/validateModifiers.js":
/*!**************************************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/@popperjs/core/lib/utils/validateModifiers.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return validateModifiers; });
/* harmony import */ var _format_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./format.js */ "../../node_modules/@popperjs/core/lib/utils/format.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ "../../node_modules/@popperjs/core/lib/enums.js");


var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = ['name', 'enabled', 'phase', 'fn', 'effect', 'requires', 'options'];
function validateModifiers(modifiers) {
  modifiers.forEach(function (modifier) {
    Object.keys(modifier).forEach(function (key) {
      switch (key) {
        case 'name':
          if (typeof modifier.name !== 'string') {
            console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', "\"" + String(modifier.name) + "\""));
          }

          break;

        case 'enabled':
          if (typeof modifier.enabled !== 'boolean') {
            console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', "\"" + String(modifier.enabled) + "\""));
          }

        case 'phase':
          if (_enums_js__WEBPACK_IMPORTED_MODULE_1__["modifierPhases"].indexOf(modifier.phase) < 0) {
            console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + _enums_js__WEBPACK_IMPORTED_MODULE_1__["modifierPhases"].join(', '), "\"" + String(modifier.phase) + "\""));
          }

          break;

        case 'fn':
          if (typeof modifier.fn !== 'function') {
            console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'effect':
          if (typeof modifier.effect !== 'function') {
            console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'requires':
          if (!Array.isArray(modifier.requires)) {
            console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', "\"" + String(modifier.requires) + "\""));
          }

          break;

        case 'requiresIfExists':
          if (!Array.isArray(modifier.requiresIfExists)) {
            console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', "\"" + String(modifier.requiresIfExists) + "\""));
          }

          break;

        case 'options':
        case 'data':
          break;

        default:
          console.error("PopperJS: an invalid property has been provided to the \"" + modifier.name + "\" modifier, valid properties are " + VALID_PROPERTIES.map(function (s) {
            return "\"" + s + "\"";
          }).join(', ') + "; but \"" + key + "\" was provided.");
      }

      modifier.requires && modifier.requires.forEach(function (requirement) {
        if (modifiers.find(function (mod) {
          return mod.name === requirement;
        }) == null) {
          console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
        }
      });
    });
  });
}

/***/ }),

/***/ "../../node_modules/@popperjs/core/lib/utils/within.js":
/*!***************************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/@popperjs/core/lib/utils/within.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return within; });
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math.js */ "../../node_modules/@popperjs/core/lib/utils/math.js");

function within(min, value, max) {
  return Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["max"])(min, Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["min"])(value, max));
}

/***/ }),

/***/ "../../node_modules/imask/esm/_rollupPluginBabelHelpers-6ccb1f64.js":
/*!****************************************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/imask/esm/_rollupPluginBabelHelpers-6ccb1f64.js ***!
  \****************************************************************************************************************/
/*! exports provided: _, a, b, c, d, e, f, g, h, i */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_", function() { return _createClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _objectWithoutProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _typeof; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _inherits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _createSuper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return _slicedToArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return _get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return _getPrototypeOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return _set; });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

function set(target, property, value, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.set) {
    set = Reflect.set;
  } else {
    set = function set(target, property, value, receiver) {
      var base = _superPropBase(target, property);

      var desc;

      if (base) {
        desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.set) {
          desc.set.call(receiver, value);
          return true;
        } else if (!desc.writable) {
          return false;
        }
      }

      desc = Object.getOwnPropertyDescriptor(receiver, property);

      if (desc) {
        if (!desc.writable) {
          return false;
        }

        desc.value = value;
        Object.defineProperty(receiver, property, desc);
      } else {
        _defineProperty(receiver, property, value);
      }

      return true;
    };
  }

  return set(target, property, value, receiver);
}

function _set(target, property, value, receiver, isStrict) {
  var s = set(target, property, value, receiver || target);

  if (!s && isStrict) {
    throw new Error('failed to set property');
  }

  return value;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}




/***/ }),

/***/ "../../node_modules/imask/esm/controls/html-contenteditable-mask-element.js":
/*!************************************************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/imask/esm/controls/html-contenteditable-mask-element.js ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-6ccb1f64.js */ "../../node_modules/imask/esm/_rollupPluginBabelHelpers-6ccb1f64.js");
/* harmony import */ var _html_mask_element_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./html-mask-element.js */ "../../node_modules/imask/esm/controls/html-mask-element.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/holder.js */ "../../node_modules/imask/esm/core/holder.js");
/* harmony import */ var _mask_element_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mask-element.js */ "../../node_modules/imask/esm/controls/mask-element.js");





var HTMLContenteditableMaskElement = /*#__PURE__*/function (_HTMLMaskElement) {
  Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["d"])(HTMLContenteditableMaskElement, _HTMLMaskElement);

  var _super = Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["e"])(HTMLContenteditableMaskElement);

  function HTMLContenteditableMaskElement() {
    Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["a"])(this, HTMLContenteditableMaskElement);

    return _super.apply(this, arguments);
  }

  Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["_"])(HTMLContenteditableMaskElement, [{
    key: "_unsafeSelectionStart",
    get:
    /**
      Returns HTMLElement selection start
      @override
    */
    function get() {
      var root = this.rootElement;
      var selection = root.getSelection && root.getSelection();
      return selection && selection.anchorOffset;
    }
    /**
      Returns HTMLElement selection end
      @override
    */

  }, {
    key: "_unsafeSelectionEnd",
    get: function get() {
      var root = this.rootElement;
      var selection = root.getSelection && root.getSelection();
      return selection && this._unsafeSelectionStart + String(selection).length;
    }
    /**
      Sets HTMLElement selection
      @override
    */

  }, {
    key: "_unsafeSelect",
    value: function _unsafeSelect(start, end) {
      if (!this.rootElement.createRange) return;
      var range = this.rootElement.createRange();
      range.setStart(this.input.firstChild || this.input, start);
      range.setEnd(this.input.lastChild || this.input, end);
      var root = this.rootElement;
      var selection = root.getSelection && root.getSelection();

      if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }
    /**
      HTMLElement value
      @override
    */

  }, {
    key: "value",
    get: function get() {
      // $FlowFixMe
      return this.input.textContent;
    },
    set: function set(value) {
      this.input.textContent = value;
    }
  }]);

  return HTMLContenteditableMaskElement;
}(_html_mask_element_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
_core_holder_js__WEBPACK_IMPORTED_MODULE_2__["default"].HTMLContenteditableMaskElement = HTMLContenteditableMaskElement;

/* harmony default export */ __webpack_exports__["default"] = (HTMLContenteditableMaskElement);


/***/ }),

/***/ "../../node_modules/imask/esm/controls/html-mask-element.js":
/*!********************************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/imask/esm/controls/html-mask-element.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-6ccb1f64.js */ "../../node_modules/imask/esm/_rollupPluginBabelHelpers-6ccb1f64.js");
/* harmony import */ var _mask_element_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mask-element.js */ "../../node_modules/imask/esm/controls/mask-element.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/holder.js */ "../../node_modules/imask/esm/core/holder.js");




/** Bridge between HTMLElement and {@link Masked} */

var HTMLMaskElement = /*#__PURE__*/function (_MaskElement) {
  Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["d"])(HTMLMaskElement, _MaskElement);

  var _super = Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["e"])(HTMLMaskElement);

  /** Mapping between HTMLElement events and mask internal events */

  /** HTMLElement to use mask on */

  /**
    @param {HTMLInputElement|HTMLTextAreaElement} input
  */
  function HTMLMaskElement(input) {
    var _this;

    Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["a"])(this, HTMLMaskElement);

    _this = _super.call(this);
    _this.input = input;
    _this._handlers = {};
    return _this;
  }
  /** */
  // $FlowFixMe https://github.com/facebook/flow/issues/2839


  Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["_"])(HTMLMaskElement, [{
    key: "rootElement",
    get: function get() {
      return this.input.getRootNode ? this.input.getRootNode() : document;
    }
    /**
      Is element in focus
      @readonly
    */

  }, {
    key: "isActive",
    get: function get() {
      //$FlowFixMe
      return this.input === this.rootElement.activeElement;
    }
    /**
      Returns HTMLElement selection start
      @override
    */

  }, {
    key: "_unsafeSelectionStart",
    get: function get() {
      return this.input.selectionStart;
    }
    /**
      Returns HTMLElement selection end
      @override
    */

  }, {
    key: "_unsafeSelectionEnd",
    get: function get() {
      return this.input.selectionEnd;
    }
    /**
      Sets HTMLElement selection
      @override
    */

  }, {
    key: "_unsafeSelect",
    value: function _unsafeSelect(start, end) {
      this.input.setSelectionRange(start, end);
    }
    /**
      HTMLElement value
      @override
    */

  }, {
    key: "value",
    get: function get() {
      return this.input.value;
    },
    set: function set(value) {
      this.input.value = value;
    }
    /**
      Binds HTMLElement events to mask internal events
      @override
    */

  }, {
    key: "bindEvents",
    value: function bindEvents(handlers) {
      var _this2 = this;

      Object.keys(handlers).forEach(function (event) {
        return _this2._toggleEventHandler(HTMLMaskElement.EVENTS_MAP[event], handlers[event]);
      });
    }
    /**
      Unbinds HTMLElement events to mask internal events
      @override
    */

  }, {
    key: "unbindEvents",
    value: function unbindEvents() {
      var _this3 = this;

      Object.keys(this._handlers).forEach(function (event) {
        return _this3._toggleEventHandler(event);
      });
    }
    /** */

  }, {
    key: "_toggleEventHandler",
    value: function _toggleEventHandler(event, handler) {
      if (this._handlers[event]) {
        this.input.removeEventListener(event, this._handlers[event]);
        delete this._handlers[event];
      }

      if (handler) {
        this.input.addEventListener(event, handler);
        this._handlers[event] = handler;
      }
    }
  }]);

  return HTMLMaskElement;
}(_mask_element_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
HTMLMaskElement.EVENTS_MAP = {
  selectionChange: 'keydown',
  input: 'input',
  drop: 'drop',
  click: 'click',
  focus: 'focus',
  commit: 'blur'
};
_core_holder_js__WEBPACK_IMPORTED_MODULE_2__["default"].HTMLMaskElement = HTMLMaskElement;

/* harmony default export */ __webpack_exports__["default"] = (HTMLMaskElement);


/***/ }),

/***/ "../../node_modules/imask/esm/controls/input.js":
/*!********************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/imask/esm/controls/input.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-6ccb1f64.js */ "../../node_modules/imask/esm/_rollupPluginBabelHelpers-6ccb1f64.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/utils.js */ "../../node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_action_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/action-details.js */ "../../node_modules/imask/esm/core/action-details.js");
/* harmony import */ var _masked_date_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../masked/date.js */ "../../node_modules/imask/esm/masked/date.js");
/* harmony import */ var _masked_factory_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../masked/factory.js */ "../../node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _mask_element_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mask-element.js */ "../../node_modules/imask/esm/controls/mask-element.js");
/* harmony import */ var _html_mask_element_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./html-mask-element.js */ "../../node_modules/imask/esm/controls/html-mask-element.js");
/* harmony import */ var _html_contenteditable_mask_element_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./html-contenteditable-mask-element.js */ "../../node_modules/imask/esm/controls/html-contenteditable-mask-element.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/holder.js */ "../../node_modules/imask/esm/core/holder.js");
/* harmony import */ var _masked_pattern_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../masked/pattern.js */ "../../node_modules/imask/esm/masked/pattern.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/change-details.js */ "../../node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _masked_base_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../masked/base.js */ "../../node_modules/imask/esm/masked/base.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "../../node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _masked_pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../masked/pattern/input-definition.js */ "../../node_modules/imask/esm/masked/pattern/input-definition.js");
/* harmony import */ var _masked_pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../masked/pattern/fixed-definition.js */ "../../node_modules/imask/esm/masked/pattern/fixed-definition.js");
/* harmony import */ var _masked_pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../masked/pattern/chunk-tail-details.js */ "../../node_modules/imask/esm/masked/pattern/chunk-tail-details.js");
/* harmony import */ var _masked_regexp_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../masked/regexp.js */ "../../node_modules/imask/esm/masked/regexp.js");
/* harmony import */ var _masked_range_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../masked/range.js */ "../../node_modules/imask/esm/masked/range.js");



















/** Listens to element events and controls changes between element and {@link Masked} */

var InputMask = /*#__PURE__*/function () {
  /**
    View element
    @readonly
  */

  /**
    Internal {@link Masked} model
    @readonly
  */

  /**
    @param {MaskElement|HTMLInputElement|HTMLTextAreaElement} el
    @param {Object} opts
  */
  function InputMask(el, opts) {
    Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["a"])(this, InputMask);

    this.el = el instanceof _mask_element_js__WEBPACK_IMPORTED_MODULE_5__["default"] ? el : el.isContentEditable && el.tagName !== 'INPUT' && el.tagName !== 'TEXTAREA' ? new _html_contenteditable_mask_element_js__WEBPACK_IMPORTED_MODULE_7__["default"](el) : new _html_mask_element_js__WEBPACK_IMPORTED_MODULE_6__["default"](el);
    this.masked = Object(_masked_factory_js__WEBPACK_IMPORTED_MODULE_4__["default"])(opts);
    this._listeners = {};
    this._value = '';
    this._unmaskedValue = '';
    this._saveSelection = this._saveSelection.bind(this);
    this._onInput = this._onInput.bind(this);
    this._onChange = this._onChange.bind(this);
    this._onDrop = this._onDrop.bind(this);
    this._onFocus = this._onFocus.bind(this);
    this._onClick = this._onClick.bind(this);
    this.alignCursor = this.alignCursor.bind(this);
    this.alignCursorFriendly = this.alignCursorFriendly.bind(this);

    this._bindEvents(); // refresh


    this.updateValue();

    this._onChange();
  }
  /** Read or update mask */


  Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["_"])(InputMask, [{
    key: "mask",
    get: function get() {
      return this.masked.mask;
    },
    set: function set(mask) {
      if (this.maskEquals(mask)) return;

      if (!(mask instanceof _core_holder_js__WEBPACK_IMPORTED_MODULE_8__["default"].Masked) && this.masked.constructor === Object(_masked_factory_js__WEBPACK_IMPORTED_MODULE_4__["maskedClass"])(mask)) {
        this.masked.updateOptions({
          mask: mask
        });
        return;
      }

      var masked = Object(_masked_factory_js__WEBPACK_IMPORTED_MODULE_4__["default"])({
        mask: mask
      });
      masked.unmaskedValue = this.masked.unmaskedValue;
      this.masked = masked;
    }
    /** Raw value */

  }, {
    key: "maskEquals",
    value: function maskEquals(mask) {
      return mask == null || mask === this.masked.mask || mask === Date && this.masked instanceof _masked_date_js__WEBPACK_IMPORTED_MODULE_3__["default"];
    }
  }, {
    key: "value",
    get: function get() {
      return this._value;
    },
    set: function set(str) {
      this.masked.value = str;
      this.updateControl();
      this.alignCursor();
    }
    /** Unmasked value */

  }, {
    key: "unmaskedValue",
    get: function get() {
      return this._unmaskedValue;
    },
    set: function set(str) {
      this.masked.unmaskedValue = str;
      this.updateControl();
      this.alignCursor();
    }
    /** Typed unmasked value */

  }, {
    key: "typedValue",
    get: function get() {
      return this.masked.typedValue;
    },
    set: function set(val) {
      this.masked.typedValue = val;
      this.updateControl();
      this.alignCursor();
    }
    /**
      Starts listening to element events
      @protected
    */

  }, {
    key: "_bindEvents",
    value: function _bindEvents() {
      this.el.bindEvents({
        selectionChange: this._saveSelection,
        input: this._onInput,
        drop: this._onDrop,
        click: this._onClick,
        focus: this._onFocus,
        commit: this._onChange
      });
    }
    /**
      Stops listening to element events
      @protected
     */

  }, {
    key: "_unbindEvents",
    value: function _unbindEvents() {
      if (this.el) this.el.unbindEvents();
    }
    /**
      Fires custom event
      @protected
     */

  }, {
    key: "_fireEvent",
    value: function _fireEvent(ev) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var listeners = this._listeners[ev];
      if (!listeners) return;
      listeners.forEach(function (l) {
        return l.apply(void 0, args);
      });
    }
    /**
      Current selection start
      @readonly
    */

  }, {
    key: "selectionStart",
    get: function get() {
      return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart;
    }
    /** Current cursor position */

  }, {
    key: "cursorPos",
    get: function get() {
      return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd;
    },
    set: function set(pos) {
      if (!this.el || !this.el.isActive) return;
      this.el.select(pos, pos);

      this._saveSelection();
    }
    /**
      Stores current selection
      @protected
    */

  }, {
    key: "_saveSelection",
    value: function _saveSelection()
    /* ev */
    {
      if (this.value !== this.el.value) {
        console.warn('Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly.'); // eslint-disable-line no-console
      }

      this._selection = {
        start: this.selectionStart,
        end: this.cursorPos
      };
    }
    /** Syncronizes model value from view */

  }, {
    key: "updateValue",
    value: function updateValue() {
      this.masked.value = this.el.value;
      this._value = this.masked.value;
    }
    /** Syncronizes view from model value, fires change events */

  }, {
    key: "updateControl",
    value: function updateControl() {
      var newUnmaskedValue = this.masked.unmaskedValue;
      var newValue = this.masked.value;
      var isChanged = this.unmaskedValue !== newUnmaskedValue || this.value !== newValue;
      this._unmaskedValue = newUnmaskedValue;
      this._value = newValue;
      if (this.el.value !== newValue) this.el.value = newValue;
      if (isChanged) this._fireChangeEvents();
    }
    /** Updates options with deep equal check, recreates @{link Masked} model if mask type changes */

  }, {
    key: "updateOptions",
    value: function updateOptions(opts) {
      var mask = opts.mask,
          restOpts = Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["b"])(opts, ["mask"]);

      var updateMask = !this.maskEquals(mask);
      var updateOpts = !Object(_core_utils_js__WEBPACK_IMPORTED_MODULE_1__["objectIncludes"])(this.masked, restOpts);
      if (updateMask) this.mask = mask;
      if (updateOpts) this.masked.updateOptions(restOpts);
      if (updateMask || updateOpts) this.updateControl();
    }
    /** Updates cursor */

  }, {
    key: "updateCursor",
    value: function updateCursor(cursorPos) {
      if (cursorPos == null) return;
      this.cursorPos = cursorPos; // also queue change cursor for mobile browsers

      this._delayUpdateCursor(cursorPos);
    }
    /**
      Delays cursor update to support mobile browsers
      @private
    */

  }, {
    key: "_delayUpdateCursor",
    value: function _delayUpdateCursor(cursorPos) {
      var _this = this;

      this._abortUpdateCursor();

      this._changingCursorPos = cursorPos;
      this._cursorChanging = setTimeout(function () {
        if (!_this.el) return; // if was destroyed

        _this.cursorPos = _this._changingCursorPos;

        _this._abortUpdateCursor();
      }, 10);
    }
    /**
      Fires custom events
      @protected
    */

  }, {
    key: "_fireChangeEvents",
    value: function _fireChangeEvents() {
      this._fireEvent('accept', this._inputEvent);

      if (this.masked.isComplete) this._fireEvent('complete', this._inputEvent);
    }
    /**
      Aborts delayed cursor update
      @private
    */

  }, {
    key: "_abortUpdateCursor",
    value: function _abortUpdateCursor() {
      if (this._cursorChanging) {
        clearTimeout(this._cursorChanging);
        delete this._cursorChanging;
      }
    }
    /** Aligns cursor to nearest available position */

  }, {
    key: "alignCursor",
    value: function alignCursor() {
      this.cursorPos = this.masked.nearestInputPos(this.cursorPos, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].LEFT);
    }
    /** Aligns cursor only if selection is empty */

  }, {
    key: "alignCursorFriendly",
    value: function alignCursorFriendly() {
      if (this.selectionStart !== this.cursorPos) return; // skip if range is selected

      this.alignCursor();
    }
    /** Adds listener on custom event */

  }, {
    key: "on",
    value: function on(ev, handler) {
      if (!this._listeners[ev]) this._listeners[ev] = [];

      this._listeners[ev].push(handler);

      return this;
    }
    /** Removes custom event listener */

  }, {
    key: "off",
    value: function off(ev, handler) {
      if (!this._listeners[ev]) return this;

      if (!handler) {
        delete this._listeners[ev];
        return this;
      }

      var hIndex = this._listeners[ev].indexOf(handler);

      if (hIndex >= 0) this._listeners[ev].splice(hIndex, 1);
      return this;
    }
    /** Handles view input event */

  }, {
    key: "_onInput",
    value: function _onInput(e) {
      this._inputEvent = e;

      this._abortUpdateCursor(); // fix strange IE behavior


      if (!this._selection) return this.updateValue();
      var details = new _core_action_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]( // new state
      this.el.value, this.cursorPos, // old state
      this.value, this._selection);
      var oldRawValue = this.masked.rawInputValue;
      var offset = this.masked.splice(details.startChangePos, details.removed.length, details.inserted, details.removeDirection).offset; // force align in remove direction only if no input chars were removed
      // otherwise we still need to align with NONE (to get out from fixed symbols for instance)

      var removeDirection = oldRawValue === this.masked.rawInputValue ? details.removeDirection : _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].NONE;
      var cursorPos = this.masked.nearestInputPos(details.startChangePos + offset, removeDirection);
      this.updateControl();
      this.updateCursor(cursorPos);
      delete this._inputEvent;
    }
    /** Handles view change event and commits model value */

  }, {
    key: "_onChange",
    value: function _onChange() {
      if (this.value !== this.el.value) {
        this.updateValue();
      }

      this.masked.doCommit();
      this.updateControl();

      this._saveSelection();
    }
    /** Handles view drop event, prevents by default */

  }, {
    key: "_onDrop",
    value: function _onDrop(ev) {
      ev.preventDefault();
      ev.stopPropagation();
    }
    /** Restore last selection on focus */

  }, {
    key: "_onFocus",
    value: function _onFocus(ev) {
      this.alignCursorFriendly();
    }
    /** Restore last selection on focus */

  }, {
    key: "_onClick",
    value: function _onClick(ev) {
      this.alignCursorFriendly();
    }
    /** Unbind view events and removes element reference */

  }, {
    key: "destroy",
    value: function destroy() {
      this._unbindEvents(); // $FlowFixMe why not do so?


      this._listeners.length = 0; // $FlowFixMe

      delete this.el;
    }
  }]);

  return InputMask;
}();
_core_holder_js__WEBPACK_IMPORTED_MODULE_8__["default"].InputMask = InputMask;

/* harmony default export */ __webpack_exports__["default"] = (InputMask);


/***/ }),

/***/ "../../node_modules/imask/esm/controls/mask-element.js":
/*!***************************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/imask/esm/controls/mask-element.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-6ccb1f64.js */ "../../node_modules/imask/esm/_rollupPluginBabelHelpers-6ccb1f64.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/holder.js */ "../../node_modules/imask/esm/core/holder.js");



/**
  Generic element API to use with mask
  @interface
*/
var MaskElement = /*#__PURE__*/function () {
  function MaskElement() {
    Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["a"])(this, MaskElement);
  }

  Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["_"])(MaskElement, [{
    key: "selectionStart",
    get:
    /** */

    /** */

    /** */

    /** Safely returns selection start */
    function get() {
      var start;

      try {
        start = this._unsafeSelectionStart;
      } catch (e) {}

      return start != null ? start : this.value.length;
    }
    /** Safely returns selection end */

  }, {
    key: "selectionEnd",
    get: function get() {
      var end;

      try {
        end = this._unsafeSelectionEnd;
      } catch (e) {}

      return end != null ? end : this.value.length;
    }
    /** Safely sets element selection */

  }, {
    key: "select",
    value: function select(start, end) {
      if (start == null || end == null || start === this.selectionStart && end === this.selectionEnd) return;

      try {
        this._unsafeSelect(start, end);
      } catch (e) {}
    }
    /** Should be overriden in subclasses */

  }, {
    key: "_unsafeSelect",
    value: function _unsafeSelect(start, end) {}
    /** Should be overriden in subclasses */

  }, {
    key: "isActive",
    get: function get() {
      return false;
    }
    /** Should be overriden in subclasses */

  }, {
    key: "bindEvents",
    value: function bindEvents(handlers) {}
    /** Should be overriden in subclasses */

  }, {
    key: "unbindEvents",
    value: function unbindEvents() {}
  }]);

  return MaskElement;
}();
_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].MaskElement = MaskElement;

/* harmony default export */ __webpack_exports__["default"] = (MaskElement);


/***/ }),

/***/ "../../node_modules/imask/esm/core/action-details.js":
/*!*************************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/imask/esm/core/action-details.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-6ccb1f64.js */ "../../node_modules/imask/esm/_rollupPluginBabelHelpers-6ccb1f64.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "../../node_modules/imask/esm/core/utils.js");



/** Provides details of changing input */

var ActionDetails = /*#__PURE__*/function () {
  /** Current input value */

  /** Current cursor position */

  /** Old input value */

  /** Old selection */
  function ActionDetails(value, cursorPos, oldValue, oldSelection) {
    Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["a"])(this, ActionDetails);

    this.value = value;
    this.cursorPos = cursorPos;
    this.oldValue = oldValue;
    this.oldSelection = oldSelection; // double check if left part was changed (autofilling, other non-standard input triggers)

    while (this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos)) {
      --this.oldSelection.start;
    }
  }
  /**
    Start changing position
    @readonly
  */


  Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["_"])(ActionDetails, [{
    key: "startChangePos",
    get: function get() {
      return Math.min(this.cursorPos, this.oldSelection.start);
    }
    /**
      Inserted symbols count
      @readonly
    */

  }, {
    key: "insertedCount",
    get: function get() {
      return this.cursorPos - this.startChangePos;
    }
    /**
      Inserted symbols
      @readonly
    */

  }, {
    key: "inserted",
    get: function get() {
      return this.value.substr(this.startChangePos, this.insertedCount);
    }
    /**
      Removed symbols count
      @readonly
    */

  }, {
    key: "removedCount",
    get: function get() {
      // Math.max for opposite operation
      return Math.max(this.oldSelection.end - this.startChangePos || // for Delete
      this.oldValue.length - this.value.length, 0);
    }
    /**
      Removed symbols
      @readonly
    */

  }, {
    key: "removed",
    get: function get() {
      return this.oldValue.substr(this.startChangePos, this.removedCount);
    }
    /**
      Unchanged head symbols
      @readonly
    */

  }, {
    key: "head",
    get: function get() {
      return this.value.substring(0, this.startChangePos);
    }
    /**
      Unchanged tail symbols
      @readonly
    */

  }, {
    key: "tail",
    get: function get() {
      return this.value.substring(this.startChangePos + this.insertedCount);
    }
    /**
      Remove direction
      @readonly
    */

  }, {
    key: "removeDirection",
    get: function get() {
      if (!this.removedCount || this.insertedCount) return _utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].NONE; // align right if delete at right or if range removed (event with backspace)

      return this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos ? _utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].RIGHT : _utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].LEFT;
    }
  }]);

  return ActionDetails;
}();

/* harmony default export */ __webpack_exports__["default"] = (ActionDetails);


/***/ }),

/***/ "../../node_modules/imask/esm/core/change-details.js":
/*!*************************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/imask/esm/core/change-details.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-6ccb1f64.js */ "../../node_modules/imask/esm/_rollupPluginBabelHelpers-6ccb1f64.js");


/**
  Provides details of changing model value
  @param {Object} [details]
  @param {string} [details.inserted] - Inserted symbols
  @param {boolean} [details.skip] - Can skip chars
  @param {number} [details.removeCount] - Removed symbols count
  @param {number} [details.tailShift] - Additional offset if any changes occurred before tail
*/
var ChangeDetails = /*#__PURE__*/function () {
  /** Inserted symbols */

  /** Can skip chars */

  /** Additional offset if any changes occurred before tail */

  /** Raw inserted is used by dynamic mask */
  function ChangeDetails(details) {
    Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["a"])(this, ChangeDetails);

    Object.assign(this, {
      inserted: '',
      rawInserted: '',
      skip: false,
      tailShift: 0
    }, details);
  }
  /**
    Aggregate changes
    @returns {ChangeDetails} `this`
  */


  Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["_"])(ChangeDetails, [{
    key: "aggregate",
    value: function aggregate(details) {
      this.rawInserted += details.rawInserted;
      this.skip = this.skip || details.skip;
      this.inserted += details.inserted;
      this.tailShift += details.tailShift;
      return this;
    }
    /** Total offset considering all changes */

  }, {
    key: "offset",
    get: function get() {
      return this.tailShift + this.inserted.length;
    }
  }]);

  return ChangeDetails;
}();

/* harmony default export */ __webpack_exports__["default"] = (ChangeDetails);


/***/ }),

/***/ "../../node_modules/imask/esm/core/continuous-tail-details.js":
/*!**********************************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/imask/esm/core/continuous-tail-details.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-6ccb1f64.js */ "../../node_modules/imask/esm/_rollupPluginBabelHelpers-6ccb1f64.js");


/** Provides details of continuous extracted tail */
var ContinuousTailDetails = /*#__PURE__*/function () {
  /** Tail value as string */

  /** Tail start position */

  /** Start position */
  function ContinuousTailDetails() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var stop = arguments.length > 2 ? arguments[2] : undefined;

    Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["a"])(this, ContinuousTailDetails);

    this.value = value;
    this.from = from;
    this.stop = stop;
  }

  Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["_"])(ContinuousTailDetails, [{
    key: "toString",
    value: function toString() {
      return this.value;
    }
  }, {
    key: "extend",
    value: function extend(tail) {
      this.value += String(tail);
    }
  }, {
    key: "appendTo",
    value: function appendTo(masked) {
      return masked.append(this.toString(), {
        tail: true
      }).aggregate(masked._appendPlaceholder());
    }
  }, {
    key: "state",
    get: function get() {
      return {
        value: this.value,
        from: this.from,
        stop: this.stop
      };
    },
    set: function set(state) {
      Object.assign(this, state);
    }
  }, {
    key: "shiftBefore",
    value: function shiftBefore(pos) {
      if (this.from >= pos || !this.value.length) return '';
      var shiftChar = this.value[0];
      this.value = this.value.slice(1);
      return shiftChar;
    }
  }]);

  return ContinuousTailDetails;
}();

/* harmony default export */ __webpack_exports__["default"] = (ContinuousTailDetails);


/***/ }),

/***/ "../../node_modules/imask/esm/core/holder.js":
/*!*****************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/imask/esm/core/holder.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Applies mask on element.
 * @constructor
 * @param {HTMLInputElement|HTMLTextAreaElement|MaskElement} el - Element to apply mask
 * @param {Object} opts - Custom mask options
 * @return {InputMask}
 */
function IMask(el) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  // currently available only for input-like elements
  return new IMask.InputMask(el, opts);
}

/* harmony default export */ __webpack_exports__["default"] = (IMask);


/***/ }),

/***/ "../../node_modules/imask/esm/core/utils.js":
/*!****************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/imask/esm/core/utils.js ***!
  \****************************************************************************************/
/*! exports provided: DIRECTION, escapeRegExp, forceDirection, indexInDirection, isString, objectIncludes, posInDirection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIRECTION", function() { return DIRECTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeRegExp", function() { return escapeRegExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forceDirection", function() { return forceDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexInDirection", function() { return indexInDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectIncludes", function() { return objectIncludes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "posInDirection", function() { return posInDirection; });
/* harmony import */ var _rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-6ccb1f64.js */ "../../node_modules/imask/esm/_rollupPluginBabelHelpers-6ccb1f64.js");


/** Checks if value is string */
function isString(str) {
  return typeof str === 'string' || str instanceof String;
}
/**
  Direction
  @prop {string} NONE
  @prop {string} LEFT
  @prop {string} FORCE_LEFT
  @prop {string} RIGHT
  @prop {string} FORCE_RIGHT
*/

var DIRECTION = {
  NONE: 'NONE',
  LEFT: 'LEFT',
  FORCE_LEFT: 'FORCE_LEFT',
  RIGHT: 'RIGHT',
  FORCE_RIGHT: 'FORCE_RIGHT'
};
/**
  Direction
  @enum {string}
*/

/** Returns next char index in direction */
function indexInDirection(pos, direction) {
  if (direction === DIRECTION.LEFT) --pos;
  return pos;
}
/** Returns next char position in direction */

function posInDirection(pos, direction) {
  switch (direction) {
    case DIRECTION.LEFT:
    case DIRECTION.FORCE_LEFT:
      return --pos;

    case DIRECTION.RIGHT:
    case DIRECTION.FORCE_RIGHT:
      return ++pos;

    default:
      return pos;
  }
}
/** */

function forceDirection(direction) {
  switch (direction) {
    case DIRECTION.LEFT:
      return DIRECTION.FORCE_LEFT;

    case DIRECTION.RIGHT:
      return DIRECTION.FORCE_RIGHT;

    default:
      return direction;
  }
}
/** Escapes regular expression control chars */

function escapeRegExp(str) {
  return str.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
} // cloned from https://github.com/epoberezkin/fast-deep-equal with small changes

function objectIncludes(b, a) {
  if (a === b) return true;
  var arrA = Array.isArray(a),
      arrB = Array.isArray(b),
      i;

  if (arrA && arrB) {
    if (a.length != b.length) return false;

    for (i = 0; i < a.length; i++) {
      if (!objectIncludes(a[i], b[i])) return false;
    }

    return true;
  }

  if (arrA != arrB) return false;

  if (a && b && Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])(a) === 'object' && Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])(b) === 'object') {
    var dateA = a instanceof Date,
        dateB = b instanceof Date;
    if (dateA && dateB) return a.getTime() == b.getTime();
    if (dateA != dateB) return false;
    var regexpA = a instanceof RegExp,
        regexpB = b instanceof RegExp;
    if (regexpA && regexpB) return a.toString() == b.toString();
    if (regexpA != regexpB) return false;
    var keys = Object.keys(a); // if (keys.length !== Object.keys(b).length) return false;

    for (i = 0; i < keys.length; i++) {
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    }

    for (i = 0; i < keys.length; i++) {
      if (!objectIncludes(b[keys[i]], a[keys[i]])) return false;
    }

    return true;
  } else if (a && b && typeof a === 'function' && typeof b === 'function') {
    return a.toString() === b.toString();
  }

  return false;
}
/** Selection range */




/***/ }),

/***/ "../../node_modules/imask/esm/index.js":
/*!***********************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/imask/esm/index.js ***!
  \***********************************************************************************/
/*! exports provided: InputMask, default, Masked, MaskedPattern, MaskedEnum, MaskedRange, MaskedNumber, MaskedDate, MaskedRegExp, MaskedFunction, MaskedDynamic, createMask, MaskElement, HTMLMaskElement, HTMLContenteditableMaskElement, PIPE_TYPE, createPipe, pipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controls_input_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controls/input.js */ "../../node_modules/imask/esm/controls/input.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputMask", function() { return _controls_input_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/holder.js */ "../../node_modules/imask/esm/core/holder.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _masked_base_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./masked/base.js */ "../../node_modules/imask/esm/masked/base.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Masked", function() { return _masked_base_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _masked_pattern_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./masked/pattern.js */ "../../node_modules/imask/esm/masked/pattern.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaskedPattern", function() { return _masked_pattern_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _masked_enum_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./masked/enum.js */ "../../node_modules/imask/esm/masked/enum.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaskedEnum", function() { return _masked_enum_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _masked_range_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./masked/range.js */ "../../node_modules/imask/esm/masked/range.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaskedRange", function() { return _masked_range_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _masked_number_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./masked/number.js */ "../../node_modules/imask/esm/masked/number.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaskedNumber", function() { return _masked_number_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _masked_date_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./masked/date.js */ "../../node_modules/imask/esm/masked/date.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaskedDate", function() { return _masked_date_js__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _masked_regexp_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./masked/regexp.js */ "../../node_modules/imask/esm/masked/regexp.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaskedRegExp", function() { return _masked_regexp_js__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _masked_function_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./masked/function.js */ "../../node_modules/imask/esm/masked/function.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaskedFunction", function() { return _masked_function_js__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _masked_dynamic_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./masked/dynamic.js */ "../../node_modules/imask/esm/masked/dynamic.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaskedDynamic", function() { return _masked_dynamic_js__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _masked_factory_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./masked/factory.js */ "../../node_modules/imask/esm/masked/factory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMask", function() { return _masked_factory_js__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _controls_mask_element_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./controls/mask-element.js */ "../../node_modules/imask/esm/controls/mask-element.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaskElement", function() { return _controls_mask_element_js__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _controls_html_mask_element_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./controls/html-mask-element.js */ "../../node_modules/imask/esm/controls/html-mask-element.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTMLMaskElement", function() { return _controls_html_mask_element_js__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _controls_html_contenteditable_mask_element_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./controls/html-contenteditable-mask-element.js */ "../../node_modules/imask/esm/controls/html-contenteditable-mask-element.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTMLContenteditableMaskElement", function() { return _controls_html_contenteditable_mask_element_js__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _masked_pipe_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./masked/pipe.js */ "../../node_modules/imask/esm/masked/pipe.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PIPE_TYPE", function() { return _masked_pipe_js__WEBPACK_IMPORTED_MODULE_15__["PIPE_TYPE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPipe", function() { return _masked_pipe_js__WEBPACK_IMPORTED_MODULE_15__["createPipe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return _masked_pipe_js__WEBPACK_IMPORTED_MODULE_15__["pipe"]; });

/* harmony import */ var _rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./_rollupPluginBabelHelpers-6ccb1f64.js */ "../../node_modules/imask/esm/_rollupPluginBabelHelpers-6ccb1f64.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./core/utils.js */ "../../node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_action_details_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./core/action-details.js */ "../../node_modules/imask/esm/core/action-details.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./core/change-details.js */ "../../node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./core/continuous-tail-details.js */ "../../node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _masked_pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./masked/pattern/input-definition.js */ "../../node_modules/imask/esm/masked/pattern/input-definition.js");
/* harmony import */ var _masked_pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./masked/pattern/fixed-definition.js */ "../../node_modules/imask/esm/masked/pattern/fixed-definition.js");
/* harmony import */ var _masked_pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./masked/pattern/chunk-tail-details.js */ "../../node_modules/imask/esm/masked/pattern/chunk-tail-details.js");


























try {
  globalThis.IMask = _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"];
} catch (e) {}


/***/ }),

/***/ "../../node_modules/imask/esm/masked/base.js":
/*!*****************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/imask/esm/masked/base.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-6ccb1f64.js */ "../../node_modules/imask/esm/_rollupPluginBabelHelpers-6ccb1f64.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/change-details.js */ "../../node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "../../node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/utils.js */ "../../node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/holder.js */ "../../node_modules/imask/esm/core/holder.js");






/** Supported mask type */

/** Provides common masking stuff */
var Masked = /*#__PURE__*/function () {
  // $Shape<MaskedOptions>; TODO after fix https://github.com/facebook/flow/issues/4773

  /** @type {Mask} */

  /** */
  // $FlowFixMe no ideas

  /** Transforms value before mask processing */

  /** Validates if value is acceptable */

  /** Does additional processing in the end of editing */

  /** Format typed value to string */

  /** Parse strgin to get typed value */

  /** Enable characters overwriting */

  /** */
  function Masked(opts) {
    Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["a"])(this, Masked);

    this._value = '';

    this._update(Object.assign({}, Masked.DEFAULTS, opts));

    this.isInitialized = true;
  }
  /** Sets and applies new options */


  Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["_"])(Masked, [{
    key: "updateOptions",
    value: function updateOptions(opts) {
      if (!Object.keys(opts).length) return;
      this.withValueRefresh(this._update.bind(this, opts));
    }
    /**
      Sets new options
      @protected
    */

  }, {
    key: "_update",
    value: function _update(opts) {
      Object.assign(this, opts);
    }
    /** Mask state */

  }, {
    key: "state",
    get: function get() {
      return {
        _value: this.value
      };
    },
    set: function set(state) {
      this._value = state._value;
    }
    /** Resets value */

  }, {
    key: "reset",
    value: function reset() {
      this._value = '';
    }
    /** */

  }, {
    key: "value",
    get: function get() {
      return this._value;
    },
    set: function set(value) {
      this.resolve(value);
    }
    /** Resolve new value */

  }, {
    key: "resolve",
    value: function resolve(value) {
      this.reset();
      this.append(value, {
        input: true
      }, '');
      this.doCommit();
      return this.value;
    }
    /** */

  }, {
    key: "unmaskedValue",
    get: function get() {
      return this.value;
    },
    set: function set(value) {
      this.reset();
      this.append(value, {}, '');
      this.doCommit();
    }
    /** */

  }, {
    key: "typedValue",
    get: function get() {
      return this.doParse(this.value);
    },
    set: function set(value) {
      this.value = this.doFormat(value);
    }
    /** Value that includes raw user input */

  }, {
    key: "rawInputValue",
    get: function get() {
      return this.extractInput(0, this.value.length, {
        raw: true
      });
    },
    set: function set(value) {
      this.reset();
      this.append(value, {
        raw: true
      }, '');
      this.doCommit();
    }
    /** */

  }, {
    key: "isComplete",
    get: function get() {
      return true;
    }
    /** Finds nearest input position in direction */

  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos, direction) {
      return cursorPos;
    }
    /** Extracts value in range considering flags */

  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      return this.value.slice(fromPos, toPos);
    }
    /** Extracts tail in range */

  }, {
    key: "extractTail",
    value: function extractTail() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      return new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_2__["default"](this.extractInput(fromPos, toPos), fromPos);
    }
    /** Appends tail */
    // $FlowFixMe no ideas

  }, {
    key: "appendTail",
    value: function appendTail(tail) {
      if (Object(_core_utils_js__WEBPACK_IMPORTED_MODULE_3__["isString"])(tail)) tail = new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_2__["default"](String(tail));
      return tail.appendTo(this);
    }
    /** Appends char */

  }, {
    key: "_appendCharRaw",
    value: function _appendCharRaw(ch) {
      if (!ch) return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
      this._value += ch;
      return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
        inserted: ch,
        rawInserted: ch
      });
    }
    /** Appends char */

  }, {
    key: "_appendChar",
    value: function _appendChar(ch) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var checkTail = arguments.length > 2 ? arguments[2] : undefined;
      var consistentState = this.state;

      var details = this._appendCharRaw(this.doPrepare(ch, flags), flags);

      if (details.inserted) {
        var consistentTail;
        var appended = this.doValidate(flags) !== false;

        if (appended && checkTail != null) {
          // validation ok, check tail
          var beforeTailState = this.state;

          if (this.overwrite) {
            consistentTail = checkTail.state;
            checkTail.shiftBefore(this.value.length);
          }

          var tailDetails = this.appendTail(checkTail);
          appended = tailDetails.rawInserted === checkTail.toString(); // if ok, rollback state after tail

          if (appended && tailDetails.inserted) this.state = beforeTailState;
        } // revert all if something went wrong


        if (!appended) {
          details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
          this.state = consistentState;
          if (checkTail && consistentTail) checkTail.state = consistentTail;
        }
      }

      return details;
    }
    /** Appends optional placeholder at end */

  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder() {
      return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    }
    /** Appends symbols considering flags */
    // $FlowFixMe no ideas

  }, {
    key: "append",
    value: function append(str, flags, tail) {
      if (!Object(_core_utils_js__WEBPACK_IMPORTED_MODULE_3__["isString"])(str)) throw new Error('value should be string');
      var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
      var checkTail = Object(_core_utils_js__WEBPACK_IMPORTED_MODULE_3__["isString"])(tail) ? new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_2__["default"](String(tail)) : tail;
      if (flags && flags.tail) flags._beforeTailState = this.state;

      for (var ci = 0; ci < str.length; ++ci) {
        details.aggregate(this._appendChar(str[ci], flags, checkTail));
      } // append tail but aggregate only tailShift


      if (checkTail != null) {
        details.tailShift += this.appendTail(checkTail).tailShift; // TODO it's a good idea to clear state after appending ends
        // but it causes bugs when one append calls another (when dynamic dispatch set rawInputValue)
        // this._resetBeforeTailState();
      }

      return details;
    }
    /** */

  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      this._value = this.value.slice(0, fromPos) + this.value.slice(toPos);
      return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    }
    /** Calls function and reapplies current value */

  }, {
    key: "withValueRefresh",
    value: function withValueRefresh(fn) {
      if (this._refreshing || !this.isInitialized) return fn();
      this._refreshing = true;
      var rawInput = this.rawInputValue;
      var value = this.value;
      var ret = fn();
      this.rawInputValue = rawInput; // append lost trailing chars at end

      if (this.value && this.value !== value && value.indexOf(this.value) === 0) {
        this.append(value.slice(this.value.length), {}, '');
      }

      delete this._refreshing;
      return ret;
    }
    /** */

  }, {
    key: "runIsolated",
    value: function runIsolated(fn) {
      if (this._isolated || !this.isInitialized) return fn(this);
      this._isolated = true;
      var state = this.state;
      var ret = fn(this);
      this.state = state;
      delete this._isolated;
      return ret;
    }
    /**
      Prepares string before mask processing
      @protected
    */

  }, {
    key: "doPrepare",
    value: function doPrepare(str) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.prepare ? this.prepare(str, this, flags) : str;
    }
    /**
      Validates if value is acceptable
      @protected
    */

  }, {
    key: "doValidate",
    value: function doValidate(flags) {
      return (!this.validate || this.validate(this.value, this, flags)) && (!this.parent || this.parent.doValidate(flags));
    }
    /**
      Does additional processing in the end of editing
      @protected
    */

  }, {
    key: "doCommit",
    value: function doCommit() {
      if (this.commit) this.commit(this.value, this);
    }
    /** */

  }, {
    key: "doFormat",
    value: function doFormat(value) {
      return this.format ? this.format(value, this) : value;
    }
    /** */

  }, {
    key: "doParse",
    value: function doParse(str) {
      return this.parse ? this.parse(str, this) : str;
    }
    /** */

  }, {
    key: "splice",
    value: function splice(start, deleteCount, inserted, removeDirection) {
      var tailPos = start + deleteCount;
      var tail = this.extractTail(tailPos);
      var startChangePos = this.nearestInputPos(start, removeDirection);
      var changeDetails = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
        tailShift: startChangePos - start // adjust tailShift if start was aligned

      }).aggregate(this.remove(startChangePos)).aggregate(this.append(inserted, {
        input: true
      }, tail));
      return changeDetails;
    }
  }]);

  return Masked;
}();
Masked.DEFAULTS = {
  format: function format(v) {
    return v;
  },
  parse: function parse(v) {
    return v;
  }
};
_core_holder_js__WEBPACK_IMPORTED_MODULE_4__["default"].Masked = Masked;

/* harmony default export */ __webpack_exports__["default"] = (Masked);


/***/ }),

/***/ "../../node_modules/imask/esm/masked/date.js":
/*!*****************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/imask/esm/masked/date.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-6ccb1f64.js */ "../../node_modules/imask/esm/_rollupPluginBabelHelpers-6ccb1f64.js");
/* harmony import */ var _pattern_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pattern.js */ "../../node_modules/imask/esm/masked/pattern.js");
/* harmony import */ var _range_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./range.js */ "../../node_modules/imask/esm/masked/range.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/holder.js */ "../../node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/utils.js */ "../../node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/change-details.js */ "../../node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./base.js */ "../../node_modules/imask/esm/masked/base.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "../../node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pattern/input-definition.js */ "../../node_modules/imask/esm/masked/pattern/input-definition.js");
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./factory.js */ "../../node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pattern/fixed-definition.js */ "../../node_modules/imask/esm/masked/pattern/fixed-definition.js");
/* harmony import */ var _pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pattern/chunk-tail-details.js */ "../../node_modules/imask/esm/masked/pattern/chunk-tail-details.js");
/* harmony import */ var _regexp_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./regexp.js */ "../../node_modules/imask/esm/masked/regexp.js");














/** Date mask */

var MaskedDate = /*#__PURE__*/function (_MaskedPattern) {
  Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["d"])(MaskedDate, _MaskedPattern);

  var _super = Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["e"])(MaskedDate);

  /** Pattern mask for date according to {@link MaskedDate#format} */

  /** Start date */

  /** End date */

  /** */

  /**
    @param {Object} opts
  */
  function MaskedDate(opts) {
    Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["a"])(this, MaskedDate);

    return _super.call(this, Object.assign({}, MaskedDate.DEFAULTS, opts));
  }
  /**
    @override
  */


  Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["_"])(MaskedDate, [{
    key: "_update",
    value: function _update(opts) {
      if (opts.mask === Date) delete opts.mask;
      if (opts.pattern) opts.mask = opts.pattern;
      var blocks = opts.blocks;
      opts.blocks = Object.assign({}, MaskedDate.GET_DEFAULT_BLOCKS()); // adjust year block

      if (opts.min) opts.blocks.Y.from = opts.min.getFullYear();
      if (opts.max) opts.blocks.Y.to = opts.max.getFullYear();

      if (opts.min && opts.max && opts.blocks.Y.from === opts.blocks.Y.to) {
        opts.blocks.m.from = opts.min.getMonth() + 1;
        opts.blocks.m.to = opts.max.getMonth() + 1;

        if (opts.blocks.m.from === opts.blocks.m.to) {
          opts.blocks.d.from = opts.min.getDate();
          opts.blocks.d.to = opts.max.getDate();
        }
      }

      Object.assign(opts.blocks, blocks); // add autofix

      Object.keys(opts.blocks).forEach(function (bk) {
        var b = opts.blocks[bk];
        if (!('autofix' in b)) b.autofix = opts.autofix;
      });

      Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedDate.prototype), "_update", this).call(this, opts);
    }
    /**
      @override
    */

  }, {
    key: "doValidate",
    value: function doValidate() {
      var _get2;

      var date = this.date;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return (_get2 = Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedDate.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args)) && (!this.isComplete || this.isDateExist(this.value) && date != null && (this.min == null || this.min <= date) && (this.max == null || date <= this.max));
    }
    /** Checks if date is exists */

  }, {
    key: "isDateExist",
    value: function isDateExist(str) {
      return this.format(this.parse(str, this), this).indexOf(str) >= 0;
    }
    /** Parsed Date */

  }, {
    key: "date",
    get: function get() {
      return this.typedValue;
    },
    set: function set(date) {
      this.typedValue = date;
    }
    /**
      @override
    */

  }, {
    key: "typedValue",
    get: function get() {
      return this.isComplete ? Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedDate.prototype), "typedValue", this) : null;
    },
    set: function set(value) {
      Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["i"])(Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedDate.prototype), "typedValue", value, this, true);
    }
  }]);

  return MaskedDate;
}(_pattern_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
MaskedDate.DEFAULTS = {
  pattern: 'd{.}`m{.}`Y',
  format: function format(date) {
    var day = String(date.getDate()).padStart(2, '0');
    var month = String(date.getMonth() + 1).padStart(2, '0');
    var year = date.getFullYear();
    return [day, month, year].join('.');
  },
  parse: function parse(str) {
    var _str$split = str.split('.'),
        _str$split2 = Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["f"])(_str$split, 3),
        day = _str$split2[0],
        month = _str$split2[1],
        year = _str$split2[2];

    return new Date(year, month - 1, day);
  }
};

MaskedDate.GET_DEFAULT_BLOCKS = function () {
  return {
    d: {
      mask: _range_js__WEBPACK_IMPORTED_MODULE_2__["default"],
      from: 1,
      to: 31,
      maxLength: 2
    },
    m: {
      mask: _range_js__WEBPACK_IMPORTED_MODULE_2__["default"],
      from: 1,
      to: 12,
      maxLength: 2
    },
    Y: {
      mask: _range_js__WEBPACK_IMPORTED_MODULE_2__["default"],
      from: 1900,
      to: 9999
    }
  };
};

_core_holder_js__WEBPACK_IMPORTED_MODULE_3__["default"].MaskedDate = MaskedDate;

/* harmony default export */ __webpack_exports__["default"] = (MaskedDate);


/***/ }),

/***/ "../../node_modules/imask/esm/masked/dynamic.js":
/*!********************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/imask/esm/masked/dynamic.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-6ccb1f64.js */ "../../node_modules/imask/esm/_rollupPluginBabelHelpers-6ccb1f64.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/change-details.js */ "../../node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factory.js */ "../../node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base.js */ "../../node_modules/imask/esm/masked/base.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/holder.js */ "../../node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/utils.js */ "../../node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "../../node_modules/imask/esm/core/continuous-tail-details.js");








/** Dynamic mask for choosing apropriate mask in run-time */
var MaskedDynamic = /*#__PURE__*/function (_Masked) {
  Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["d"])(MaskedDynamic, _Masked);

  var _super = Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["e"])(MaskedDynamic);

  /** Currently chosen mask */

  /** Compliled {@link Masked} options */

  /** Chooses {@link Masked} depending on input value */

  /**
    @param {Object} opts
  */
  function MaskedDynamic(opts) {
    var _this;

    Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["a"])(this, MaskedDynamic);

    _this = _super.call(this, Object.assign({}, MaskedDynamic.DEFAULTS, opts));
    _this.currentMask = null;
    return _this;
  }
  /**
    @override
  */


  Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["_"])(MaskedDynamic, [{
    key: "_update",
    value: function _update(opts) {
      Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedDynamic.prototype), "_update", this).call(this, opts);

      if ('mask' in opts) {
        // mask could be totally dynamic with only `dispatch` option
        this.compiledMasks = Array.isArray(opts.mask) ? opts.mask.map(function (m) {
          return Object(_factory_js__WEBPACK_IMPORTED_MODULE_2__["default"])(m);
        }) : [];
      }
    }
    /**
      @override
    */

  }, {
    key: "_appendCharRaw",
    value: function _appendCharRaw(ch) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var details = this._applyDispatch(ch, flags);

      if (this.currentMask) {
        details.aggregate(this.currentMask._appendChar(ch, flags));
      }

      return details;
    }
  }, {
    key: "_applyDispatch",
    value: function _applyDispatch() {
      var appended = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var prevValueBeforeTail = flags.tail && flags._beforeTailState != null ? flags._beforeTailState._value : this.value;
      var inputValue = this.rawInputValue;
      var insertValue = flags.tail && flags._beforeTailState != null ? // $FlowFixMe - tired to fight with type system
      flags._beforeTailState._rawInputValue : inputValue;
      var tailValue = inputValue.slice(insertValue.length);
      var prevMask = this.currentMask;
      var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
      var prevMaskState = prevMask && prevMask.state; // clone flags to prevent overwriting `_beforeTailState`

      this.currentMask = this.doDispatch(appended, Object.assign({}, flags)); // restore state after dispatch

      if (this.currentMask) {
        if (this.currentMask !== prevMask) {
          // if mask changed reapply input
          this.currentMask.reset();

          if (insertValue) {
            // $FlowFixMe - it's ok, we don't change current mask above
            var d = this.currentMask.append(insertValue, {
              raw: true
            });
            details.tailShift = d.inserted.length - prevValueBeforeTail.length;
          }

          if (tailValue) {
            // $FlowFixMe - it's ok, we don't change current mask above
            details.tailShift += this.currentMask.append(tailValue, {
              raw: true,
              tail: true
            }).tailShift;
          }
        } else {
          // Dispatch can do something bad with state, so
          // restore prev mask state
          this.currentMask.state = prevMaskState;
        }
      }

      return details;
    }
  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder() {
      var details = this._applyDispatch.apply(this, arguments);

      if (this.currentMask) {
        details.aggregate(this.currentMask._appendPlaceholder());
      }

      return details;
    }
    /**
      @override
    */

  }, {
    key: "doDispatch",
    value: function doDispatch(appended) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.dispatch(appended, this, flags);
    }
    /**
      @override
    */

  }, {
    key: "doValidate",
    value: function doValidate() {
      var _get2, _this$currentMask;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return (_get2 = Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedDynamic.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args)) && (!this.currentMask || (_this$currentMask = this.currentMask).doValidate.apply(_this$currentMask, args));
    }
    /**
      @override
    */

  }, {
    key: "reset",
    value: function reset() {
      if (this.currentMask) this.currentMask.reset();
      this.compiledMasks.forEach(function (m) {
        return m.reset();
      });
    }
    /**
      @override
    */

  }, {
    key: "value",
    get: function get() {
      return this.currentMask ? this.currentMask.value : '';
    },
    set: function set(value) {
      Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["i"])(Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedDynamic.prototype), "value", value, this, true);
    }
    /**
      @override
    */

  }, {
    key: "unmaskedValue",
    get: function get() {
      return this.currentMask ? this.currentMask.unmaskedValue : '';
    },
    set: function set(unmaskedValue) {
      Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["i"])(Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedDynamic.prototype), "unmaskedValue", unmaskedValue, this, true);
    }
    /**
      @override
    */

  }, {
    key: "typedValue",
    get: function get() {
      return this.currentMask ? this.currentMask.typedValue : '';
    } // probably typedValue should not be used with dynamic
    ,
    set: function set(value) {
      var unmaskedValue = String(value); // double check it

      if (this.currentMask) {
        this.currentMask.typedValue = value;
        unmaskedValue = this.currentMask.unmaskedValue;
      }

      this.unmaskedValue = unmaskedValue;
    }
    /**
      @override
    */

  }, {
    key: "isComplete",
    get: function get() {
      return !!this.currentMask && this.currentMask.isComplete;
    }
    /**
      @override
    */

  }, {
    key: "remove",
    value: function remove() {
      var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();

      if (this.currentMask) {
        var _this$currentMask2;

        details.aggregate((_this$currentMask2 = this.currentMask).remove.apply(_this$currentMask2, arguments)) // update with dispatch
        .aggregate(this._applyDispatch());
      }

      return details;
    }
    /**
      @override
    */

  }, {
    key: "state",
    get: function get() {
      return Object.assign({}, Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedDynamic.prototype), "state", this), {
        _rawInputValue: this.rawInputValue,
        compiledMasks: this.compiledMasks.map(function (m) {
          return m.state;
        }),
        currentMaskRef: this.currentMask,
        currentMask: this.currentMask && this.currentMask.state
      });
    },
    set: function set(state) {
      var compiledMasks = state.compiledMasks,
          currentMaskRef = state.currentMaskRef,
          currentMask = state.currentMask,
          maskedState = Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["b"])(state, ["compiledMasks", "currentMaskRef", "currentMask"]);

      this.compiledMasks.forEach(function (m, mi) {
        return m.state = compiledMasks[mi];
      });

      if (currentMaskRef != null) {
        this.currentMask = currentMaskRef;
        this.currentMask.state = currentMask;
      }

      Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["i"])(Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedDynamic.prototype), "state", maskedState, this, true);
    }
    /**
      @override
    */

  }, {
    key: "extractInput",
    value: function extractInput() {
      var _this$currentMask3;

      return this.currentMask ? (_this$currentMask3 = this.currentMask).extractInput.apply(_this$currentMask3, arguments) : '';
    }
    /**
      @override
    */

  }, {
    key: "extractTail",
    value: function extractTail() {
      var _this$currentMask4, _get3;

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return this.currentMask ? (_this$currentMask4 = this.currentMask).extractTail.apply(_this$currentMask4, args) : (_get3 = Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedDynamic.prototype), "extractTail", this)).call.apply(_get3, [this].concat(args));
    }
    /**
      @override
    */

  }, {
    key: "doCommit",
    value: function doCommit() {
      if (this.currentMask) this.currentMask.doCommit();

      Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedDynamic.prototype), "doCommit", this).call(this);
    }
    /**
      @override
    */

  }, {
    key: "nearestInputPos",
    value: function nearestInputPos() {
      var _this$currentMask5, _get4;

      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return this.currentMask ? (_this$currentMask5 = this.currentMask).nearestInputPos.apply(_this$currentMask5, args) : (_get4 = Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedDynamic.prototype), "nearestInputPos", this)).call.apply(_get4, [this].concat(args));
    }
  }, {
    key: "overwrite",
    get: function get() {
      return this.currentMask ? this.currentMask.overwrite : Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedDynamic.prototype), "overwrite", this);
    },
    set: function set(overwrite) {
      console.warn('"overwrite" option is not available in dynamic mask, use this option in siblings');
    }
  }]);

  return MaskedDynamic;
}(_base_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
MaskedDynamic.DEFAULTS = {
  dispatch: function dispatch(appended, masked, flags) {
    if (!masked.compiledMasks.length) return;
    var inputValue = masked.rawInputValue; // simulate input

    var inputs = masked.compiledMasks.map(function (m, index) {
      m.reset();
      m.append(inputValue, {
        raw: true
      });
      m.append(appended, flags);
      var weight = m.rawInputValue.length;
      return {
        weight: weight,
        index: index
      };
    }); // pop masks with longer values first

    inputs.sort(function (i1, i2) {
      return i2.weight - i1.weight;
    });
    return masked.compiledMasks[inputs[0].index];
  }
};
_core_holder_js__WEBPACK_IMPORTED_MODULE_4__["default"].MaskedDynamic = MaskedDynamic;

/* harmony default export */ __webpack_exports__["default"] = (MaskedDynamic);


/***/ }),

/***/ "../../node_modules/imask/esm/masked/enum.js":
/*!*****************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/imask/esm/masked/enum.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-6ccb1f64.js */ "../../node_modules/imask/esm/_rollupPluginBabelHelpers-6ccb1f64.js");
/* harmony import */ var _pattern_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pattern.js */ "../../node_modules/imask/esm/masked/pattern.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/holder.js */ "../../node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/utils.js */ "../../node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/change-details.js */ "../../node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base.js */ "../../node_modules/imask/esm/masked/base.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "../../node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pattern/input-definition.js */ "../../node_modules/imask/esm/masked/pattern/input-definition.js");
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./factory.js */ "../../node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pattern/fixed-definition.js */ "../../node_modules/imask/esm/masked/pattern/fixed-definition.js");
/* harmony import */ var _pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pattern/chunk-tail-details.js */ "../../node_modules/imask/esm/masked/pattern/chunk-tail-details.js");
/* harmony import */ var _regexp_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./regexp.js */ "../../node_modules/imask/esm/masked/regexp.js");













/** Pattern which validates enum values */

var MaskedEnum = /*#__PURE__*/function (_MaskedPattern) {
  Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["d"])(MaskedEnum, _MaskedPattern);

  var _super = Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["e"])(MaskedEnum);

  function MaskedEnum() {
    Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["a"])(this, MaskedEnum);

    return _super.apply(this, arguments);
  }

  Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["_"])(MaskedEnum, [{
    key: "_update",
    value:
    /**
      @override
      @param {Object} opts
    */
    function _update(opts) {
      // TODO type
      if (opts.enum) opts.mask = '*'.repeat(opts.enum[0].length);

      Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedEnum.prototype), "_update", this).call(this, opts);
    }
    /**
      @override
    */

  }, {
    key: "doValidate",
    value: function doValidate() {
      var _this = this,
          _get2;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return this.enum.some(function (e) {
        return e.indexOf(_this.unmaskedValue) >= 0;
      }) && (_get2 = Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedEnum.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args));
    }
  }]);

  return MaskedEnum;
}(_pattern_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
_core_holder_js__WEBPACK_IMPORTED_MODULE_2__["default"].MaskedEnum = MaskedEnum;

/* harmony default export */ __webpack_exports__["default"] = (MaskedEnum);


/***/ }),

/***/ "../../node_modules/imask/esm/masked/factory.js":
/*!********************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/imask/esm/masked/factory.js ***!
  \********************************************************************************************/
/*! exports provided: default, maskedClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maskedClass", function() { return maskedClass; });
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/utils.js */ "../../node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/holder.js */ "../../node_modules/imask/esm/core/holder.js");
/* harmony import */ var _rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-6ccb1f64.js */ "../../node_modules/imask/esm/_rollupPluginBabelHelpers-6ccb1f64.js");




/** Get Masked class by mask type */

function maskedClass(mask) {
  if (mask == null) {
    throw new Error('mask property should be defined');
  } // $FlowFixMe


  if (mask instanceof RegExp) return _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].MaskedRegExp; // $FlowFixMe

  if (Object(_core_utils_js__WEBPACK_IMPORTED_MODULE_0__["isString"])(mask)) return _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].MaskedPattern; // $FlowFixMe

  if (mask instanceof Date || mask === Date) return _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].MaskedDate; // $FlowFixMe

  if (mask instanceof Number || typeof mask === 'number' || mask === Number) return _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].MaskedNumber; // $FlowFixMe

  if (Array.isArray(mask) || mask === Array) return _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].MaskedDynamic; // $FlowFixMe

  if (_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked && mask.prototype instanceof _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked) return mask; // $FlowFixMe

  if (mask instanceof Function) return _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].MaskedFunction; // $FlowFixMe

  if (mask instanceof _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked) return mask.constructor;
  console.warn('Mask not found for mask', mask); // eslint-disable-line no-console
  // $FlowFixMe

  return _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked;
}
/** Creates new {@link Masked} depending on mask type */

function createMask(opts) {
  // $FlowFixMe
  if (_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked && opts instanceof _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked) return opts;
  opts = Object.assign({}, opts);
  var mask = opts.mask; // $FlowFixMe

  if (_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked && mask instanceof _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked) return mask;
  var MaskedClass = maskedClass(mask);
  if (!MaskedClass) throw new Error('Masked class is not found for provided mask, appropriate module needs to be import manually before creating mask.');
  return new MaskedClass(opts);
}
_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].createMask = createMask;

/* harmony default export */ __webpack_exports__["default"] = (createMask);



/***/ }),

/***/ "../../node_modules/imask/esm/masked/function.js":
/*!*********************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/imask/esm/masked/function.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-6ccb1f64.js */ "../../node_modules/imask/esm/_rollupPluginBabelHelpers-6ccb1f64.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.js */ "../../node_modules/imask/esm/masked/base.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/holder.js */ "../../node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/change-details.js */ "../../node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "../../node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/utils.js */ "../../node_modules/imask/esm/core/utils.js");







/** Masking by custom Function */

var MaskedFunction = /*#__PURE__*/function (_Masked) {
  Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["d"])(MaskedFunction, _Masked);

  var _super = Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["e"])(MaskedFunction);

  function MaskedFunction() {
    Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["a"])(this, MaskedFunction);

    return _super.apply(this, arguments);
  }

  Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["_"])(MaskedFunction, [{
    key: "_update",
    value:
    /**
      @override
      @param {Object} opts
    */
    function _update(opts) {
      if (opts.mask) opts.validate = opts.mask;

      Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedFunction.prototype), "_update", this).call(this, opts);
    }
  }]);

  return MaskedFunction;
}(_base_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
_core_holder_js__WEBPACK_IMPORTED_MODULE_2__["default"].MaskedFunction = MaskedFunction;

/* harmony default export */ __webpack_exports__["default"] = (MaskedFunction);


/***/ }),

/***/ "../../node_modules/imask/esm/masked/number.js":
/*!*******************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/imask/esm/masked/number.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-6ccb1f64.js */ "../../node_modules/imask/esm/_rollupPluginBabelHelpers-6ccb1f64.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/utils.js */ "../../node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/change-details.js */ "../../node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base.js */ "../../node_modules/imask/esm/masked/base.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/holder.js */ "../../node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "../../node_modules/imask/esm/core/continuous-tail-details.js");







/**
  Number mask
  @param {Object} opts
  @param {string} opts.radix - Single char
  @param {string} opts.thousandsSeparator - Single char
  @param {Array<string>} opts.mapToRadix - Array of single chars
  @param {number} opts.min
  @param {number} opts.max
  @param {number} opts.scale - Digits after point
  @param {boolean} opts.signed - Allow negative
  @param {boolean} opts.normalizeZeros - Flag to remove leading and trailing zeros in the end of editing
  @param {boolean} opts.padFractionalZeros - Flag to pad trailing zeros after point in the end of editing
*/
var MaskedNumber = /*#__PURE__*/function (_Masked) {
  Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["d"])(MaskedNumber, _Masked);

  var _super = Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["e"])(MaskedNumber);

  /** Single char */

  /** Single char */

  /** Array of single chars */

  /** */

  /** */

  /** Digits after point */

  /** */

  /** Flag to remove leading and trailing zeros in the end of editing */

  /** Flag to pad trailing zeros after point in the end of editing */
  function MaskedNumber(opts) {
    Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["a"])(this, MaskedNumber);

    return _super.call(this, Object.assign({}, MaskedNumber.DEFAULTS, opts));
  }
  /**
    @override
  */


  Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["_"])(MaskedNumber, [{
    key: "_update",
    value: function _update(opts) {
      Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedNumber.prototype), "_update", this).call(this, opts);

      this._updateRegExps();
    }
    /** */

  }, {
    key: "_updateRegExps",
    value: function _updateRegExps() {
      // use different regexp to process user input (more strict, input suffix) and tail shifting
      var start = '^' + (this.allowNegative ? '[+|\\-]?' : '');
      var midInput = '(0|([1-9]+\\d*))?';
      var mid = '\\d*';
      var end = (this.scale ? '(' + Object(_core_utils_js__WEBPACK_IMPORTED_MODULE_1__["escapeRegExp"])(this.radix) + '\\d{0,' + this.scale + '})?' : '') + '$';
      this._numberRegExpInput = new RegExp(start + midInput + end);
      this._numberRegExp = new RegExp(start + mid + end);
      this._mapToRadixRegExp = new RegExp('[' + this.mapToRadix.map(_core_utils_js__WEBPACK_IMPORTED_MODULE_1__["escapeRegExp"]).join('') + ']', 'g');
      this._thousandsSeparatorRegExp = new RegExp(Object(_core_utils_js__WEBPACK_IMPORTED_MODULE_1__["escapeRegExp"])(this.thousandsSeparator), 'g');
    }
    /** */

  }, {
    key: "_removeThousandsSeparators",
    value: function _removeThousandsSeparators(value) {
      return value.replace(this._thousandsSeparatorRegExp, '');
    }
    /** */

  }, {
    key: "_insertThousandsSeparators",
    value: function _insertThousandsSeparators(value) {
      // https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
      var parts = value.split(this.radix);
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);
      return parts.join(this.radix);
    }
    /**
      @override
    */

  }, {
    key: "doPrepare",
    value: function doPrepare(str) {
      var _get2;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return (_get2 = Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedNumber.prototype), "doPrepare", this)).call.apply(_get2, [this, this._removeThousandsSeparators(str.replace(this._mapToRadixRegExp, this.radix))].concat(args));
    }
    /** */

  }, {
    key: "_separatorsCount",
    value: function _separatorsCount(to) {
      var extendOnSeparators = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var count = 0;

      for (var pos = 0; pos < to; ++pos) {
        if (this._value.indexOf(this.thousandsSeparator, pos) === pos) {
          ++count;
          if (extendOnSeparators) to += this.thousandsSeparator.length;
        }
      }

      return count;
    }
    /** */

  }, {
    key: "_separatorsCountFromSlice",
    value: function _separatorsCountFromSlice() {
      var slice = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._value;
      return this._separatorsCount(this._removeThousandsSeparators(slice).length, true);
    }
    /**
      @override
    */

  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      var flags = arguments.length > 2 ? arguments[2] : undefined;

      var _this$_adjustRangeWit = this._adjustRangeWithSeparators(fromPos, toPos);

      var _this$_adjustRangeWit2 = Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["f"])(_this$_adjustRangeWit, 2);

      fromPos = _this$_adjustRangeWit2[0];
      toPos = _this$_adjustRangeWit2[1];
      return this._removeThousandsSeparators(Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedNumber.prototype), "extractInput", this).call(this, fromPos, toPos, flags));
    }
    /**
      @override
    */

  }, {
    key: "_appendCharRaw",
    value: function _appendCharRaw(ch) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (!this.thousandsSeparator) return Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedNumber.prototype), "_appendCharRaw", this).call(this, ch, flags);
      var prevBeforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;

      var prevBeforeTailSeparatorsCount = this._separatorsCountFromSlice(prevBeforeTailValue);

      this._value = this._removeThousandsSeparators(this.value);

      var appendDetails = Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedNumber.prototype), "_appendCharRaw", this).call(this, ch, flags);

      this._value = this._insertThousandsSeparators(this._value);
      var beforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;

      var beforeTailSeparatorsCount = this._separatorsCountFromSlice(beforeTailValue);

      appendDetails.tailShift += (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length;
      appendDetails.skip = !appendDetails.rawInserted && ch === this.thousandsSeparator;
      return appendDetails;
    }
    /** */

  }, {
    key: "_findSeparatorAround",
    value: function _findSeparatorAround(pos) {
      if (this.thousandsSeparator) {
        var searchFrom = pos - this.thousandsSeparator.length + 1;
        var separatorPos = this.value.indexOf(this.thousandsSeparator, searchFrom);
        if (separatorPos <= pos) return separatorPos;
      }

      return -1;
    }
  }, {
    key: "_adjustRangeWithSeparators",
    value: function _adjustRangeWithSeparators(from, to) {
      var separatorAroundFromPos = this._findSeparatorAround(from);

      if (separatorAroundFromPos >= 0) from = separatorAroundFromPos;

      var separatorAroundToPos = this._findSeparatorAround(to);

      if (separatorAroundToPos >= 0) to = separatorAroundToPos + this.thousandsSeparator.length;
      return [from, to];
    }
    /**
      @override
    */

  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

      var _this$_adjustRangeWit3 = this._adjustRangeWithSeparators(fromPos, toPos);

      var _this$_adjustRangeWit4 = Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["f"])(_this$_adjustRangeWit3, 2);

      fromPos = _this$_adjustRangeWit4[0];
      toPos = _this$_adjustRangeWit4[1];
      var valueBeforePos = this.value.slice(0, fromPos);
      var valueAfterPos = this.value.slice(toPos);

      var prevBeforeTailSeparatorsCount = this._separatorsCount(valueBeforePos.length);

      this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(valueBeforePos + valueAfterPos));

      var beforeTailSeparatorsCount = this._separatorsCountFromSlice(valueBeforePos);

      return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
        tailShift: (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length
      });
    }
    /**
      @override
    */

  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos, direction) {
      if (!this.thousandsSeparator) return cursorPos;

      switch (direction) {
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].NONE:
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].LEFT:
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].FORCE_LEFT:
          {
            var separatorAtLeftPos = this._findSeparatorAround(cursorPos - 1);

            if (separatorAtLeftPos >= 0) {
              var separatorAtLeftEndPos = separatorAtLeftPos + this.thousandsSeparator.length;

              if (cursorPos < separatorAtLeftEndPos || this.value.length <= separatorAtLeftEndPos || direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].FORCE_LEFT) {
                return separatorAtLeftPos;
              }
            }

            break;
          }

        case _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].RIGHT:
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].FORCE_RIGHT:
          {
            var separatorAtRightPos = this._findSeparatorAround(cursorPos);

            if (separatorAtRightPos >= 0) {
              return separatorAtRightPos + this.thousandsSeparator.length;
            }
          }
      }

      return cursorPos;
    }
    /**
      @override
    */

  }, {
    key: "doValidate",
    value: function doValidate(flags) {
      var regexp = flags.input ? this._numberRegExpInput : this._numberRegExp; // validate as string

      var valid = regexp.test(this._removeThousandsSeparators(this.value));

      if (valid) {
        // validate as number
        var number = this.number;
        valid = valid && !isNaN(number) && ( // check min bound for negative values
        this.min == null || this.min >= 0 || this.min <= this.number) && ( // check max bound for positive values
        this.max == null || this.max <= 0 || this.number <= this.max);
      }

      return valid && Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedNumber.prototype), "doValidate", this).call(this, flags);
    }
    /**
      @override
    */

  }, {
    key: "doCommit",
    value: function doCommit() {
      if (this.value) {
        var number = this.number;
        var validnum = number; // check bounds

        if (this.min != null) validnum = Math.max(validnum, this.min);
        if (this.max != null) validnum = Math.min(validnum, this.max);
        if (validnum !== number) this.unmaskedValue = String(validnum);
        var formatted = this.value;
        if (this.normalizeZeros) formatted = this._normalizeZeros(formatted);
        if (this.padFractionalZeros) formatted = this._padFractionalZeros(formatted);
        this._value = formatted;
      }

      Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedNumber.prototype), "doCommit", this).call(this);
    }
    /** */

  }, {
    key: "_normalizeZeros",
    value: function _normalizeZeros(value) {
      var parts = this._removeThousandsSeparators(value).split(this.radix); // remove leading zeros


      parts[0] = parts[0].replace(/^(\D*)(0*)(\d*)/, function (match, sign, zeros, num) {
        return sign + num;
      }); // add leading zero

      if (value.length && !/\d$/.test(parts[0])) parts[0] = parts[0] + '0';

      if (parts.length > 1) {
        parts[1] = parts[1].replace(/0*$/, ''); // remove trailing zeros

        if (!parts[1].length) parts.length = 1; // remove fractional
      }

      return this._insertThousandsSeparators(parts.join(this.radix));
    }
    /** */

  }, {
    key: "_padFractionalZeros",
    value: function _padFractionalZeros(value) {
      if (!value) return value;
      var parts = value.split(this.radix);
      if (parts.length < 2) parts.push('');
      parts[1] = parts[1].padEnd(this.scale, '0');
      return parts.join(this.radix);
    }
    /**
      @override
    */

  }, {
    key: "unmaskedValue",
    get: function get() {
      return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, '.');
    },
    set: function set(unmaskedValue) {
      Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["i"])(Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedNumber.prototype), "unmaskedValue", unmaskedValue.replace('.', this.radix), this, true);
    }
    /**
      @override
    */

  }, {
    key: "typedValue",
    get: function get() {
      return Number(this.unmaskedValue);
    },
    set: function set(n) {
      Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["i"])(Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedNumber.prototype), "unmaskedValue", String(n), this, true);
    }
    /** Parsed Number */

  }, {
    key: "number",
    get: function get() {
      return this.typedValue;
    },
    set: function set(number) {
      this.typedValue = number;
    }
    /**
      Is negative allowed
      @readonly
    */

  }, {
    key: "allowNegative",
    get: function get() {
      return this.signed || this.min != null && this.min < 0 || this.max != null && this.max < 0;
    }
  }]);

  return MaskedNumber;
}(_base_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
MaskedNumber.DEFAULTS = {
  radix: ',',
  thousandsSeparator: '',
  mapToRadix: ['.'],
  scale: 2,
  signed: false,
  normalizeZeros: true,
  padFractionalZeros: false
};
_core_holder_js__WEBPACK_IMPORTED_MODULE_4__["default"].MaskedNumber = MaskedNumber;

/* harmony default export */ __webpack_exports__["default"] = (MaskedNumber);


/***/ }),

/***/ "../../node_modules/imask/esm/masked/pattern.js":
/*!********************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/imask/esm/masked/pattern.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-6ccb1f64.js */ "../../node_modules/imask/esm/_rollupPluginBabelHelpers-6ccb1f64.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/utils.js */ "../../node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/change-details.js */ "../../node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base.js */ "../../node_modules/imask/esm/masked/base.js");
/* harmony import */ var _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pattern/input-definition.js */ "../../node_modules/imask/esm/masked/pattern/input-definition.js");
/* harmony import */ var _pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pattern/fixed-definition.js */ "../../node_modules/imask/esm/masked/pattern/fixed-definition.js");
/* harmony import */ var _pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pattern/chunk-tail-details.js */ "../../node_modules/imask/esm/masked/pattern/chunk-tail-details.js");
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./factory.js */ "../../node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/holder.js */ "../../node_modules/imask/esm/core/holder.js");
/* harmony import */ var _regexp_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./regexp.js */ "../../node_modules/imask/esm/masked/regexp.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "../../node_modules/imask/esm/core/continuous-tail-details.js");












/**
  Pattern mask
  @param {Object} opts
  @param {Object} opts.blocks
  @param {Object} opts.definitions
  @param {string} opts.placeholderChar
  @param {boolean} opts.lazy
*/
var MaskedPattern = /*#__PURE__*/function (_Masked) {
  Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["d"])(MaskedPattern, _Masked);

  var _super = Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["e"])(MaskedPattern);

  /** */

  /** */

  /** Single char for empty input */

  /** Show placeholder only when needed */
  function MaskedPattern() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["a"])(this, MaskedPattern);

    // TODO type $Shape<MaskedPatternOptions>={} does not work
    opts.definitions = Object.assign({}, _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_INPUT_DEFINITIONS"], opts.definitions);
    return _super.call(this, Object.assign({}, MaskedPattern.DEFAULTS, opts));
  }
  /**
    @override
    @param {Object} opts
  */


  Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["_"])(MaskedPattern, [{
    key: "_update",
    value: function _update() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      opts.definitions = Object.assign({}, this.definitions, opts.definitions);

      Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedPattern.prototype), "_update", this).call(this, opts);

      this._rebuildMask();
    }
    /** */

  }, {
    key: "_rebuildMask",
    value: function _rebuildMask() {
      var _this = this;

      var defs = this.definitions;
      this._blocks = [];
      this._stops = [];
      this._maskedBlocks = {};
      var pattern = this.mask;
      if (!pattern || !defs) return;
      var unmaskingBlock = false;
      var optionalBlock = false;

      for (var i = 0; i < pattern.length; ++i) {
        if (this.blocks) {
          var _ret = function () {
            var p = pattern.slice(i);
            var bNames = Object.keys(_this.blocks).filter(function (bName) {
              return p.indexOf(bName) === 0;
            }); // order by key length

            bNames.sort(function (a, b) {
              return b.length - a.length;
            }); // use block name with max length

            var bName = bNames[0];

            if (bName) {
              // $FlowFixMe no ideas
              var maskedBlock = Object(_factory_js__WEBPACK_IMPORTED_MODULE_7__["default"])(Object.assign({
                parent: _this,
                lazy: _this.lazy,
                placeholderChar: _this.placeholderChar,
                overwrite: _this.overwrite
              }, _this.blocks[bName]));

              if (maskedBlock) {
                _this._blocks.push(maskedBlock); // store block index


                if (!_this._maskedBlocks[bName]) _this._maskedBlocks[bName] = [];

                _this._maskedBlocks[bName].push(_this._blocks.length - 1);
              }

              i += bName.length - 1;
              return "continue";
            }
          }();

          if (_ret === "continue") continue;
        }

        var char = pattern[i];

        var _isInput = (char in defs);

        if (char === MaskedPattern.STOP_CHAR) {
          this._stops.push(this._blocks.length);

          continue;
        }

        if (char === '{' || char === '}') {
          unmaskingBlock = !unmaskingBlock;
          continue;
        }

        if (char === '[' || char === ']') {
          optionalBlock = !optionalBlock;
          continue;
        }

        if (char === MaskedPattern.ESCAPE_CHAR) {
          ++i;
          char = pattern[i];
          if (!char) break;
          _isInput = false;
        }

        var def = _isInput ? new _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
          parent: this,
          lazy: this.lazy,
          placeholderChar: this.placeholderChar,
          mask: defs[char],
          isOptional: optionalBlock
        }) : new _pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
          char: char,
          isUnmasking: unmaskingBlock
        });

        this._blocks.push(def);
      }
    }
    /**
      @override
    */

  }, {
    key: "state",
    get: function get() {
      return Object.assign({}, Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedPattern.prototype), "state", this), {
        _blocks: this._blocks.map(function (b) {
          return b.state;
        })
      });
    },
    set: function set(state) {
      var _blocks = state._blocks,
          maskedState = Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["b"])(state, ["_blocks"]);

      this._blocks.forEach(function (b, bi) {
        return b.state = _blocks[bi];
      });

      Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["i"])(Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedPattern.prototype), "state", maskedState, this, true);
    }
    /**
      @override
    */

  }, {
    key: "reset",
    value: function reset() {
      Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedPattern.prototype), "reset", this).call(this);

      this._blocks.forEach(function (b) {
        return b.reset();
      });
    }
    /**
      @override
    */

  }, {
    key: "isComplete",
    get: function get() {
      return this._blocks.every(function (b) {
        return b.isComplete;
      });
    }
    /**
      @override
    */

  }, {
    key: "doCommit",
    value: function doCommit() {
      this._blocks.forEach(function (b) {
        return b.doCommit();
      });

      Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedPattern.prototype), "doCommit", this).call(this);
    }
    /**
      @override
    */

  }, {
    key: "unmaskedValue",
    get: function get() {
      return this._blocks.reduce(function (str, b) {
        return str += b.unmaskedValue;
      }, '');
    },
    set: function set(unmaskedValue) {
      Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["i"])(Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedPattern.prototype), "unmaskedValue", unmaskedValue, this, true);
    }
    /**
      @override
    */

  }, {
    key: "value",
    get: function get() {
      // TODO return _value when not in change?
      return this._blocks.reduce(function (str, b) {
        return str += b.value;
      }, '');
    },
    set: function set(value) {
      Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["i"])(Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedPattern.prototype), "value", value, this, true);
    }
    /**
      @override
    */

  }, {
    key: "appendTail",
    value: function appendTail(tail) {
      return Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedPattern.prototype), "appendTail", this).call(this, tail).aggregate(this._appendPlaceholder());
    }
    /**
      @override
    */

  }, {
    key: "_appendCharRaw",
    value: function _appendCharRaw(ch) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var blockIter = this._mapPosToBlock(this.value.length);

      var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
      if (!blockIter) return details;

      for (var bi = blockIter.index;; ++bi) {
        var _block = this._blocks[bi];
        if (!_block) break;

        var blockDetails = _block._appendChar(ch, flags);

        var skip = blockDetails.skip;
        details.aggregate(blockDetails);
        if (skip || blockDetails.rawInserted) break; // go next char
      }

      return details;
    }
    /**
      @override
    */

  }, {
    key: "extractTail",
    value: function extractTail() {
      var _this2 = this;

      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      var chunkTail = new _pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_6__["default"]();
      if (fromPos === toPos) return chunkTail;

      this._forEachBlocksInRange(fromPos, toPos, function (b, bi, bFromPos, bToPos) {
        var blockChunk = b.extractTail(bFromPos, bToPos);
        blockChunk.stop = _this2._findStopBefore(bi);
        blockChunk.from = _this2._blockStartPos(bi);
        if (blockChunk instanceof _pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_6__["default"]) blockChunk.blockIndex = bi;
        chunkTail.extend(blockChunk);
      });

      return chunkTail;
    }
    /**
      @override
    */

  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      var flags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      if (fromPos === toPos) return '';
      var input = '';

      this._forEachBlocksInRange(fromPos, toPos, function (b, _, fromPos, toPos) {
        input += b.extractInput(fromPos, toPos, flags);
      });

      return input;
    }
  }, {
    key: "_findStopBefore",
    value: function _findStopBefore(blockIndex) {
      var stopBefore;

      for (var si = 0; si < this._stops.length; ++si) {
        var stop = this._stops[si];
        if (stop <= blockIndex) stopBefore = stop;else break;
      }

      return stopBefore;
    }
    /** Appends placeholder depending on laziness */

  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder(toBlockIndex) {
      var _this3 = this;

      var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
      if (this.lazy && toBlockIndex == null) return details;

      var startBlockIter = this._mapPosToBlock(this.value.length);

      if (!startBlockIter) return details;
      var startBlockIndex = startBlockIter.index;
      var endBlockIndex = toBlockIndex != null ? toBlockIndex : this._blocks.length;

      this._blocks.slice(startBlockIndex, endBlockIndex).forEach(function (b) {
        if (!b.lazy || toBlockIndex != null) {
          // $FlowFixMe `_blocks` may not be present
          var args = b._blocks != null ? [b._blocks.length] : [];

          var bDetails = b._appendPlaceholder.apply(b, args);

          _this3._value += bDetails.inserted;
          details.aggregate(bDetails);
        }
      });

      return details;
    }
    /** Finds block in pos */

  }, {
    key: "_mapPosToBlock",
    value: function _mapPosToBlock(pos) {
      var accVal = '';

      for (var bi = 0; bi < this._blocks.length; ++bi) {
        var _block2 = this._blocks[bi];
        var blockStartPos = accVal.length;
        accVal += _block2.value;

        if (pos <= accVal.length) {
          return {
            index: bi,
            offset: pos - blockStartPos
          };
        }
      }
    }
    /** */

  }, {
    key: "_blockStartPos",
    value: function _blockStartPos(blockIndex) {
      return this._blocks.slice(0, blockIndex).reduce(function (pos, b) {
        return pos += b.value.length;
      }, 0);
    }
    /** */

  }, {
    key: "_forEachBlocksInRange",
    value: function _forEachBlocksInRange(fromPos) {
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      var fn = arguments.length > 2 ? arguments[2] : undefined;

      var fromBlockIter = this._mapPosToBlock(fromPos);

      if (fromBlockIter) {
        var toBlockIter = this._mapPosToBlock(toPos); // process first block


        var isSameBlock = toBlockIter && fromBlockIter.index === toBlockIter.index;
        var fromBlockStartPos = fromBlockIter.offset;
        var fromBlockEndPos = toBlockIter && isSameBlock ? toBlockIter.offset : this._blocks[fromBlockIter.index].value.length;
        fn(this._blocks[fromBlockIter.index], fromBlockIter.index, fromBlockStartPos, fromBlockEndPos);

        if (toBlockIter && !isSameBlock) {
          // process intermediate blocks
          for (var bi = fromBlockIter.index + 1; bi < toBlockIter.index; ++bi) {
            fn(this._blocks[bi], bi, 0, this._blocks[bi].value.length);
          } // process last block


          fn(this._blocks[toBlockIter.index], toBlockIter.index, 0, toBlockIter.offset);
        }
      }
    }
    /**
      @override
    */

  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

      var removeDetails = Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedPattern.prototype), "remove", this).call(this, fromPos, toPos);

      this._forEachBlocksInRange(fromPos, toPos, function (b, _, bFromPos, bToPos) {
        removeDetails.aggregate(b.remove(bFromPos, bToPos));
      });

      return removeDetails;
    }
    /**
      @override
    */

  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos) {
      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].NONE;
      // TODO refactor - extract alignblock
      var beginBlockData = this._mapPosToBlock(cursorPos) || {
        index: 0,
        offset: 0
      };
      var beginBlockOffset = beginBlockData.offset,
          beginBlockIndex = beginBlockData.index;
      var beginBlock = this._blocks[beginBlockIndex];
      if (!beginBlock) return cursorPos;
      var beginBlockCursorPos = beginBlockOffset; // if position inside block - try to adjust it

      if (beginBlockCursorPos !== 0 && beginBlockCursorPos < beginBlock.value.length) {
        beginBlockCursorPos = beginBlock.nearestInputPos(beginBlockOffset, Object(_core_utils_js__WEBPACK_IMPORTED_MODULE_1__["forceDirection"])(direction));
      }

      var cursorAtRight = beginBlockCursorPos === beginBlock.value.length;
      var cursorAtLeft = beginBlockCursorPos === 0; //  cursor is INSIDE first block (not at bounds)

      if (!cursorAtLeft && !cursorAtRight) return this._blockStartPos(beginBlockIndex) + beginBlockCursorPos;
      var searchBlockIndex = cursorAtRight ? beginBlockIndex + 1 : beginBlockIndex;

      if (direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].NONE) {
        // NONE direction used to calculate start input position if no chars were removed
        // FOR NONE:
        // -
        // input|any
        // ->
        //  any|input
        // <-
        //  filled-input|any
        // check if first block at left is input
        if (searchBlockIndex > 0) {
          var blockIndexAtLeft = searchBlockIndex - 1;
          var blockAtLeft = this._blocks[blockIndexAtLeft];
          var blockInputPos = blockAtLeft.nearestInputPos(0, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].NONE); // is input

          if (!blockAtLeft.value.length || blockInputPos !== blockAtLeft.value.length) {
            return this._blockStartPos(searchBlockIndex);
          }
        } // ->


        var firstInputAtRight = searchBlockIndex;

        for (var bi = firstInputAtRight; bi < this._blocks.length; ++bi) {
          var blockAtRight = this._blocks[bi];

          var _blockInputPos = blockAtRight.nearestInputPos(0, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].NONE);

          if (!blockAtRight.value.length || _blockInputPos !== blockAtRight.value.length) {
            return this._blockStartPos(bi) + _blockInputPos;
          }
        } // <-
        // find first non-fixed symbol


        for (var _bi = searchBlockIndex - 1; _bi >= 0; --_bi) {
          var _block3 = this._blocks[_bi];

          var _blockInputPos2 = _block3.nearestInputPos(0, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].NONE); // is input


          if (!_block3.value.length || _blockInputPos2 !== _block3.value.length) {
            return this._blockStartPos(_bi) + _block3.value.length;
          }
        }

        return cursorPos;
      }

      if (direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].LEFT || direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].FORCE_LEFT) {
        // -
        //  any|filled-input
        // <-
        //  any|first not empty is not-len-aligned
        //  not-0-aligned|any
        // ->
        //  any|not-len-aligned or end
        // check if first block at right is filled input
        var firstFilledBlockIndexAtRight;

        for (var _bi2 = searchBlockIndex; _bi2 < this._blocks.length; ++_bi2) {
          if (this._blocks[_bi2].value) {
            firstFilledBlockIndexAtRight = _bi2;
            break;
          }
        }

        if (firstFilledBlockIndexAtRight != null) {
          var filledBlock = this._blocks[firstFilledBlockIndexAtRight];

          var _blockInputPos3 = filledBlock.nearestInputPos(0, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].RIGHT);

          if (_blockInputPos3 === 0 && filledBlock.unmaskedValue.length) {
            // filled block is input
            return this._blockStartPos(firstFilledBlockIndexAtRight) + _blockInputPos3;
          }
        } // <-
        // find this vars


        var firstFilledInputBlockIndex = -1;
        var firstEmptyInputBlockIndex; // TODO consider nested empty inputs

        for (var _bi3 = searchBlockIndex - 1; _bi3 >= 0; --_bi3) {
          var _block4 = this._blocks[_bi3];

          var _blockInputPos4 = _block4.nearestInputPos(_block4.value.length, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].FORCE_LEFT);

          if (!_block4.value || _blockInputPos4 !== 0) firstEmptyInputBlockIndex = _bi3;

          if (_blockInputPos4 !== 0) {
            if (_blockInputPos4 !== _block4.value.length) {
              // aligned inside block - return immediately
              return this._blockStartPos(_bi3) + _blockInputPos4;
            } else {
              // found filled
              firstFilledInputBlockIndex = _bi3;
              break;
            }
          }
        }

        if (direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].LEFT) {
          // try find first empty input before start searching position only when not forced
          for (var _bi4 = firstFilledInputBlockIndex + 1; _bi4 <= Math.min(searchBlockIndex, this._blocks.length - 1); ++_bi4) {
            var _block5 = this._blocks[_bi4];

            var _blockInputPos5 = _block5.nearestInputPos(0, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].NONE);

            var blockAlignedPos = this._blockStartPos(_bi4) + _blockInputPos5;

            if (blockAlignedPos > cursorPos) break; // if block is not lazy input

            if (_blockInputPos5 !== _block5.value.length) return blockAlignedPos;
          }
        } // process overflow


        if (firstFilledInputBlockIndex >= 0) {
          return this._blockStartPos(firstFilledInputBlockIndex) + this._blocks[firstFilledInputBlockIndex].value.length;
        } // for lazy if has aligned left inside fixed and has came to the start - use start position


        if (direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].FORCE_LEFT || this.lazy && !this.extractInput() && !isInput(this._blocks[searchBlockIndex])) {
          return 0;
        }

        if (firstEmptyInputBlockIndex != null) {
          return this._blockStartPos(firstEmptyInputBlockIndex);
        } // find first input


        for (var _bi5 = searchBlockIndex; _bi5 < this._blocks.length; ++_bi5) {
          var _block6 = this._blocks[_bi5];

          var _blockInputPos6 = _block6.nearestInputPos(0, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].NONE); // is input


          if (!_block6.value.length || _blockInputPos6 !== _block6.value.length) {
            return this._blockStartPos(_bi5) + _blockInputPos6;
          }
        }

        return 0;
      }

      if (direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].RIGHT || direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].FORCE_RIGHT) {
        // ->
        //  any|not-len-aligned and filled
        //  any|not-len-aligned
        // <-
        //  not-0-aligned or start|any
        var firstInputBlockAlignedIndex;
        var firstInputBlockAlignedPos;

        for (var _bi6 = searchBlockIndex; _bi6 < this._blocks.length; ++_bi6) {
          var _block7 = this._blocks[_bi6];

          var _blockInputPos7 = _block7.nearestInputPos(0, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].NONE);

          if (_blockInputPos7 !== _block7.value.length) {
            firstInputBlockAlignedPos = this._blockStartPos(_bi6) + _blockInputPos7;
            firstInputBlockAlignedIndex = _bi6;
            break;
          }
        }

        if (firstInputBlockAlignedIndex != null && firstInputBlockAlignedPos != null) {
          for (var _bi7 = firstInputBlockAlignedIndex; _bi7 < this._blocks.length; ++_bi7) {
            var _block8 = this._blocks[_bi7];

            var _blockInputPos8 = _block8.nearestInputPos(0, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].FORCE_RIGHT);

            if (_blockInputPos8 !== _block8.value.length) {
              return this._blockStartPos(_bi7) + _blockInputPos8;
            }
          }

          return direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].FORCE_RIGHT ? this.value.length : firstInputBlockAlignedPos;
        }

        for (var _bi8 = Math.min(searchBlockIndex, this._blocks.length - 1); _bi8 >= 0; --_bi8) {
          var _block9 = this._blocks[_bi8];

          var _blockInputPos9 = _block9.nearestInputPos(_block9.value.length, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].LEFT);

          if (_blockInputPos9 !== 0) {
            var alignedPos = this._blockStartPos(_bi8) + _blockInputPos9;

            if (alignedPos >= cursorPos) return alignedPos;
            break;
          }
        }
      }

      return cursorPos;
    }
    /** Get block by name */

  }, {
    key: "maskedBlock",
    value: function maskedBlock(name) {
      return this.maskedBlocks(name)[0];
    }
    /** Get all blocks by name */

  }, {
    key: "maskedBlocks",
    value: function maskedBlocks(name) {
      var _this4 = this;

      var indices = this._maskedBlocks[name];
      if (!indices) return [];
      return indices.map(function (gi) {
        return _this4._blocks[gi];
      });
    }
  }]);

  return MaskedPattern;
}(_base_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
MaskedPattern.DEFAULTS = {
  lazy: true,
  placeholderChar: '_'
};
MaskedPattern.STOP_CHAR = '`';
MaskedPattern.ESCAPE_CHAR = '\\';
MaskedPattern.InputDefinition = _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_4__["default"];
MaskedPattern.FixedDefinition = _pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_5__["default"];

function isInput(block) {
  if (!block) return false;
  var value = block.value;
  return !value || block.nearestInputPos(0, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].NONE) !== value.length;
}

_core_holder_js__WEBPACK_IMPORTED_MODULE_8__["default"].MaskedPattern = MaskedPattern;

/* harmony default export */ __webpack_exports__["default"] = (MaskedPattern);


/***/ }),

/***/ "../../node_modules/imask/esm/masked/pattern/chunk-tail-details.js":
/*!***************************************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/imask/esm/masked/pattern/chunk-tail-details.js ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_rollupPluginBabelHelpers-6ccb1f64.js */ "../../node_modules/imask/esm/_rollupPluginBabelHelpers-6ccb1f64.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/change-details.js */ "../../node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/utils.js */ "../../node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/continuous-tail-details.js */ "../../node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/holder.js */ "../../node_modules/imask/esm/core/holder.js");






var ChunksTailDetails = /*#__PURE__*/function () {
  /** */
  function ChunksTailDetails() {
    var chunks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["a"])(this, ChunksTailDetails);

    this.chunks = chunks;
    this.from = from;
  }

  Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["_"])(ChunksTailDetails, [{
    key: "toString",
    value: function toString() {
      return this.chunks.map(String).join('');
    } // $FlowFixMe no ideas

  }, {
    key: "extend",
    value: function extend(tailChunk) {
      if (!String(tailChunk)) return;
      if (Object(_core_utils_js__WEBPACK_IMPORTED_MODULE_2__["isString"])(tailChunk)) tailChunk = new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__["default"](String(tailChunk));
      var lastChunk = this.chunks[this.chunks.length - 1];
      var extendLast = lastChunk && ( // if stops are same or tail has no stop
      lastChunk.stop === tailChunk.stop || tailChunk.stop == null) && // if tail chunk goes just after last chunk
      tailChunk.from === lastChunk.from + lastChunk.toString().length;

      if (tailChunk instanceof _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__["default"]) {
        // check the ability to extend previous chunk
        if (extendLast) {
          // extend previous chunk
          lastChunk.extend(tailChunk.toString());
        } else {
          // append new chunk
          this.chunks.push(tailChunk);
        }
      } else if (tailChunk instanceof ChunksTailDetails) {
        if (tailChunk.stop == null) {
          // unwrap floating chunks to parent, keeping `from` pos
          var firstTailChunk;

          while (tailChunk.chunks.length && tailChunk.chunks[0].stop == null) {
            firstTailChunk = tailChunk.chunks.shift();
            firstTailChunk.from += tailChunk.from;
            this.extend(firstTailChunk);
          }
        } // if tail chunk still has value


        if (tailChunk.toString()) {
          // if chunks contains stops, then popup stop to container
          tailChunk.stop = tailChunk.blockIndex;
          this.chunks.push(tailChunk);
        }
      }
    }
  }, {
    key: "appendTo",
    value: function appendTo(masked) {
      // $FlowFixMe
      if (!(masked instanceof _core_holder_js__WEBPACK_IMPORTED_MODULE_4__["default"].MaskedPattern)) {
        var tail = new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__["default"](this.toString());
        return tail.appendTo(masked);
      }

      var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();

      for (var ci = 0; ci < this.chunks.length && !details.skip; ++ci) {
        var chunk = this.chunks[ci];

        var lastBlockIter = masked._mapPosToBlock(masked.value.length);

        var stop = chunk.stop;
        var chunkBlock = void 0;

        if (stop != null && ( // if block not found or stop is behind lastBlock
        !lastBlockIter || lastBlockIter.index <= stop)) {
          if (chunk instanceof ChunksTailDetails || // for continuous block also check if stop is exist
          masked._stops.indexOf(stop) >= 0) {
            details.aggregate(masked._appendPlaceholder(stop));
          }

          chunkBlock = chunk instanceof ChunksTailDetails && masked._blocks[stop];
        }

        if (chunkBlock) {
          var tailDetails = chunkBlock.appendTail(chunk);
          tailDetails.skip = false; // always ignore skip, it will be set on last

          details.aggregate(tailDetails);
          masked._value += tailDetails.inserted; // get not inserted chars

          var remainChars = chunk.toString().slice(tailDetails.rawInserted.length);
          if (remainChars) details.aggregate(masked.append(remainChars, {
            tail: true
          }));
        } else {
          details.aggregate(masked.append(chunk.toString(), {
            tail: true
          }));
        }
      }
      return details;
    }
  }, {
    key: "state",
    get: function get() {
      return {
        chunks: this.chunks.map(function (c) {
          return c.state;
        }),
        from: this.from,
        stop: this.stop,
        blockIndex: this.blockIndex
      };
    },
    set: function set(state) {
      var chunks = state.chunks,
          props = Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["b"])(state, ["chunks"]);

      Object.assign(this, props);
      this.chunks = chunks.map(function (cstate) {
        var chunk = "chunks" in cstate ? new ChunksTailDetails() : new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__["default"](); // $FlowFixMe already checked above

        chunk.state = cstate;
        return chunk;
      });
    }
  }, {
    key: "shiftBefore",
    value: function shiftBefore(pos) {
      if (this.from >= pos || !this.chunks.length) return '';
      var chunkShiftPos = pos - this.from;
      var ci = 0;

      while (ci < this.chunks.length) {
        var chunk = this.chunks[ci];
        var shiftChar = chunk.shiftBefore(chunkShiftPos);

        if (chunk.toString()) {
          // chunk still contains value
          // but not shifted - means no more available chars to shift
          if (!shiftChar) break;
          ++ci;
        } else {
          // clean if chunk has no value
          this.chunks.splice(ci, 1);
        }

        if (shiftChar) return shiftChar;
      }

      return '';
    }
  }]);

  return ChunksTailDetails;
}();

/* harmony default export */ __webpack_exports__["default"] = (ChunksTailDetails);


/***/ }),

/***/ "../../node_modules/imask/esm/masked/pattern/fixed-definition.js":
/*!*************************************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/imask/esm/masked/pattern/fixed-definition.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_rollupPluginBabelHelpers-6ccb1f64.js */ "../../node_modules/imask/esm/_rollupPluginBabelHelpers-6ccb1f64.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/change-details.js */ "../../node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/utils.js */ "../../node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/continuous-tail-details.js */ "../../node_modules/imask/esm/core/continuous-tail-details.js");





var PatternFixedDefinition = /*#__PURE__*/function () {
  /** */

  /** */

  /** */

  /** */
  function PatternFixedDefinition(opts) {
    Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["a"])(this, PatternFixedDefinition);

    Object.assign(this, opts);
    this._value = '';
  }

  Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["_"])(PatternFixedDefinition, [{
    key: "value",
    get: function get() {
      return this._value;
    }
  }, {
    key: "unmaskedValue",
    get: function get() {
      return this.isUnmasking ? this.value : '';
    }
  }, {
    key: "reset",
    value: function reset() {
      this._isRawInput = false;
      this._value = '';
    }
  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._value.length;
      this._value = this._value.slice(0, fromPos) + this._value.slice(toPos);
      if (!this._value) this._isRawInput = false;
      return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    }
  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos) {
      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _core_utils_js__WEBPACK_IMPORTED_MODULE_2__["DIRECTION"].NONE;
      var minPos = 0;
      var maxPos = this._value.length;

      switch (direction) {
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_2__["DIRECTION"].LEFT:
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_2__["DIRECTION"].FORCE_LEFT:
          return minPos;

        case _core_utils_js__WEBPACK_IMPORTED_MODULE_2__["DIRECTION"].NONE:
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_2__["DIRECTION"].RIGHT:
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_2__["DIRECTION"].FORCE_RIGHT:
        default:
          return maxPos;
      }
    }
  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._value.length;
      var flags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return flags.raw && this._isRawInput && this._value.slice(fromPos, toPos) || '';
    }
  }, {
    key: "isComplete",
    get: function get() {
      return true;
    }
  }, {
    key: "_appendChar",
    value: function _appendChar(str) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
      if (this._value) return details;
      var appended = this.char === str[0];
      var isResolved = appended && (this.isUnmasking || flags.input || flags.raw) && !flags.tail;
      if (isResolved) details.rawInserted = this.char;
      this._value = details.inserted = this.char;
      this._isRawInput = isResolved && (flags.raw || flags.input);
      return details;
    }
  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder() {
      var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
      if (this._value) return details;
      this._value = details.inserted = this.char;
      return details;
    }
  }, {
    key: "extractTail",
    value: function extractTail() {
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      return new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__["default"]('');
    } // $FlowFixMe no ideas

  }, {
    key: "appendTail",
    value: function appendTail(tail) {
      if (Object(_core_utils_js__WEBPACK_IMPORTED_MODULE_2__["isString"])(tail)) tail = new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__["default"](String(tail));
      return tail.appendTo(this);
    }
  }, {
    key: "append",
    value: function append(str, flags, tail) {
      var details = this._appendChar(str, flags);

      if (tail != null) {
        details.tailShift += this.appendTail(tail).tailShift;
      }

      return details;
    }
  }, {
    key: "doCommit",
    value: function doCommit() {}
  }, {
    key: "state",
    get: function get() {
      return {
        _value: this._value,
        _isRawInput: this._isRawInput
      };
    },
    set: function set(state) {
      Object.assign(this, state);
    }
  }]);

  return PatternFixedDefinition;
}();

/* harmony default export */ __webpack_exports__["default"] = (PatternFixedDefinition);


/***/ }),

/***/ "../../node_modules/imask/esm/masked/pattern/input-definition.js":
/*!*************************************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/imask/esm/masked/pattern/input-definition.js ***!
  \*************************************************************************************************************/
/*! exports provided: default, DEFAULT_INPUT_DEFINITIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_INPUT_DEFINITIONS", function() { return DEFAULT_INPUT_DEFINITIONS; });
/* harmony import */ var _rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_rollupPluginBabelHelpers-6ccb1f64.js */ "../../node_modules/imask/esm/_rollupPluginBabelHelpers-6ccb1f64.js");
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../factory.js */ "../../node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/change-details.js */ "../../node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/utils.js */ "../../node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/holder.js */ "../../node_modules/imask/esm/core/holder.js");






var DEFAULT_INPUT_DEFINITIONS = {
  '0': /\d/,
  'a': /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
  // http://stackoverflow.com/a/22075070
  '*': /./
};
/** */

var PatternInputDefinition = /*#__PURE__*/function () {
  /** */

  /** */

  /** */

  /** */

  /** */

  /** */
  function PatternInputDefinition(opts) {
    Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["a"])(this, PatternInputDefinition);

    var mask = opts.mask,
        blockOpts = Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["b"])(opts, ["mask"]);

    this.masked = Object(_factory_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
      mask: mask
    });
    Object.assign(this, blockOpts);
  }

  Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["_"])(PatternInputDefinition, [{
    key: "reset",
    value: function reset() {
      this._isFilled = false;
      this.masked.reset();
    }
  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

      if (fromPos === 0 && toPos >= 1) {
        this._isFilled = false;
        return this.masked.remove(fromPos, toPos);
      }

      return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
    }
  }, {
    key: "value",
    get: function get() {
      return this.masked.value || (this._isFilled && !this.isOptional ? this.placeholderChar : '');
    }
  }, {
    key: "unmaskedValue",
    get: function get() {
      return this.masked.unmaskedValue;
    }
  }, {
    key: "isComplete",
    get: function get() {
      return Boolean(this.masked.value) || this.isOptional;
    }
  }, {
    key: "_appendChar",
    value: function _appendChar(str) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (this._isFilled) return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
      var state = this.masked.state; // simulate input

      var details = this.masked._appendChar(str, flags);

      if (details.inserted && this.doValidate(flags) === false) {
        details.inserted = details.rawInserted = '';
        this.masked.state = state;
      }

      if (!details.inserted && !this.isOptional && !this.lazy && !flags.input) {
        details.inserted = this.placeholderChar;
      }

      details.skip = !details.inserted && !this.isOptional;
      this._isFilled = Boolean(details.inserted);
      return details;
    }
  }, {
    key: "append",
    value: function append() {
      var _this$masked;

      return (_this$masked = this.masked).append.apply(_this$masked, arguments);
    }
  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder() {
      var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
      if (this._isFilled || this.isOptional) return details;
      this._isFilled = true;
      details.inserted = this.placeholderChar;
      return details;
    }
  }, {
    key: "extractTail",
    value: function extractTail() {
      var _this$masked2;

      return (_this$masked2 = this.masked).extractTail.apply(_this$masked2, arguments);
    }
  }, {
    key: "appendTail",
    value: function appendTail() {
      var _this$masked3;

      return (_this$masked3 = this.masked).appendTail.apply(_this$masked3, arguments);
    }
  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      var flags = arguments.length > 2 ? arguments[2] : undefined;
      return this.masked.extractInput(fromPos, toPos, flags);
    }
  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos) {
      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _core_utils_js__WEBPACK_IMPORTED_MODULE_3__["DIRECTION"].NONE;
      var minPos = 0;
      var maxPos = this.value.length;
      var boundPos = Math.min(Math.max(cursorPos, minPos), maxPos);

      switch (direction) {
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_3__["DIRECTION"].LEFT:
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_3__["DIRECTION"].FORCE_LEFT:
          return this.isComplete ? boundPos : minPos;

        case _core_utils_js__WEBPACK_IMPORTED_MODULE_3__["DIRECTION"].RIGHT:
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_3__["DIRECTION"].FORCE_RIGHT:
          return this.isComplete ? boundPos : maxPos;

        case _core_utils_js__WEBPACK_IMPORTED_MODULE_3__["DIRECTION"].NONE:
        default:
          return boundPos;
      }
    }
  }, {
    key: "doValidate",
    value: function doValidate() {
      var _this$masked4, _this$parent;

      return (_this$masked4 = this.masked).doValidate.apply(_this$masked4, arguments) && (!this.parent || (_this$parent = this.parent).doValidate.apply(_this$parent, arguments));
    }
  }, {
    key: "doCommit",
    value: function doCommit() {
      this.masked.doCommit();
    }
  }, {
    key: "state",
    get: function get() {
      return {
        masked: this.masked.state,
        _isFilled: this._isFilled
      };
    },
    set: function set(state) {
      this.masked.state = state.masked;
      this._isFilled = state._isFilled;
    }
  }]);

  return PatternInputDefinition;
}();

/* harmony default export */ __webpack_exports__["default"] = (PatternInputDefinition);



/***/ }),

/***/ "../../node_modules/imask/esm/masked/pipe.js":
/*!*****************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/imask/esm/masked/pipe.js ***!
  \*****************************************************************************************/
/*! exports provided: PIPE_TYPE, createPipe, pipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PIPE_TYPE", function() { return PIPE_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPipe", function() { return createPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return pipe; });
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory.js */ "../../node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/holder.js */ "../../node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/utils.js */ "../../node_modules/imask/esm/core/utils.js");
/* harmony import */ var _rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-6ccb1f64.js */ "../../node_modules/imask/esm/_rollupPluginBabelHelpers-6ccb1f64.js");





/** Mask pipe source and destination types */

var PIPE_TYPE = {
  MASKED: 'value',
  UNMASKED: 'unmaskedValue',
  TYPED: 'typedValue'
};
/** Creates new pipe function depending on mask type, source and destination options */

function createPipe(mask) {
  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : PIPE_TYPE.MASKED;
  var to = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : PIPE_TYPE.MASKED;
  var masked = Object(_factory_js__WEBPACK_IMPORTED_MODULE_0__["default"])(mask);
  return function (value) {
    return masked.runIsolated(function (m) {
      m[from] = value;
      return m[to];
    });
  };
}
/** Pipes value through mask depending on mask type, source and destination options */

function pipe(value) {
  for (var _len = arguments.length, pipeArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    pipeArgs[_key - 1] = arguments[_key];
  }

  return createPipe.apply(void 0, pipeArgs)(value);
}
_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].PIPE_TYPE = PIPE_TYPE;
_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].createPipe = createPipe;
_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].pipe = pipe;




/***/ }),

/***/ "../../node_modules/imask/esm/masked/range.js":
/*!******************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/imask/esm/masked/range.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-6ccb1f64.js */ "../../node_modules/imask/esm/_rollupPluginBabelHelpers-6ccb1f64.js");
/* harmony import */ var _pattern_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pattern.js */ "../../node_modules/imask/esm/masked/pattern.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/holder.js */ "../../node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/utils.js */ "../../node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/change-details.js */ "../../node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base.js */ "../../node_modules/imask/esm/masked/base.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "../../node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pattern/input-definition.js */ "../../node_modules/imask/esm/masked/pattern/input-definition.js");
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./factory.js */ "../../node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pattern/fixed-definition.js */ "../../node_modules/imask/esm/masked/pattern/fixed-definition.js");
/* harmony import */ var _pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pattern/chunk-tail-details.js */ "../../node_modules/imask/esm/masked/pattern/chunk-tail-details.js");
/* harmony import */ var _regexp_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./regexp.js */ "../../node_modules/imask/esm/masked/regexp.js");













/** Pattern which accepts ranges */

var MaskedRange = /*#__PURE__*/function (_MaskedPattern) {
  Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["d"])(MaskedRange, _MaskedPattern);

  var _super = Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["e"])(MaskedRange);

  function MaskedRange() {
    Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["a"])(this, MaskedRange);

    return _super.apply(this, arguments);
  }

  Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["_"])(MaskedRange, [{
    key: "_matchFrom",
    get:
    /**
      Optionally sets max length of pattern.
      Used when pattern length is longer then `to` param length. Pads zeros at start in this case.
    */

    /** Min bound */

    /** Max bound */

    /** */
    function get() {
      return this.maxLength - String(this.from).length;
    }
    /**
      @override
    */

  }, {
    key: "_update",
    value: function _update(opts) {
      // TODO type
      opts = Object.assign({
        to: this.to || 0,
        from: this.from || 0
      }, opts);
      var maxLength = String(opts.to).length;
      if (opts.maxLength != null) maxLength = Math.max(maxLength, opts.maxLength);
      opts.maxLength = maxLength;
      var fromStr = String(opts.from).padStart(maxLength, '0');
      var toStr = String(opts.to).padStart(maxLength, '0');
      var sameCharsCount = 0;

      while (sameCharsCount < toStr.length && toStr[sameCharsCount] === fromStr[sameCharsCount]) {
        ++sameCharsCount;
      }

      opts.mask = toStr.slice(0, sameCharsCount).replace(/0/g, '\\0') + '0'.repeat(maxLength - sameCharsCount);

      Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedRange.prototype), "_update", this).call(this, opts);
    }
    /**
      @override
    */

  }, {
    key: "isComplete",
    get: function get() {
      return Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedRange.prototype), "isComplete", this) && Boolean(this.value);
    }
  }, {
    key: "boundaries",
    value: function boundaries(str) {
      var minstr = '';
      var maxstr = '';

      var _ref = str.match(/^(\D*)(\d*)(\D*)/) || [],
          _ref2 = Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["f"])(_ref, 3),
          placeholder = _ref2[1],
          num = _ref2[2];

      if (num) {
        minstr = '0'.repeat(placeholder.length) + num;
        maxstr = '9'.repeat(placeholder.length) + num;
      }

      minstr = minstr.padEnd(this.maxLength, '0');
      maxstr = maxstr.padEnd(this.maxLength, '9');
      return [minstr, maxstr];
    }
    /**
      @override
    */

  }, {
    key: "doPrepare",
    value: function doPrepare(str) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      str = Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedRange.prototype), "doPrepare", this).call(this, str, flags).replace(/\D/g, '');
      if (!this.autofix) return str;
      var fromStr = String(this.from).padStart(this.maxLength, '0');
      var toStr = String(this.to).padStart(this.maxLength, '0');
      var val = this.value;
      var prepStr = '';

      for (var ci = 0; ci < str.length; ++ci) {
        var nextVal = val + prepStr + str[ci];

        var _this$boundaries = this.boundaries(nextVal),
            _this$boundaries2 = Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["f"])(_this$boundaries, 2),
            minstr = _this$boundaries2[0],
            maxstr = _this$boundaries2[1];

        if (Number(maxstr) < this.from) prepStr += fromStr[nextVal.length - 1];else if (Number(minstr) > this.to) prepStr += toStr[nextVal.length - 1];else prepStr += str[ci];
      }

      return prepStr;
    }
    /**
      @override
    */

  }, {
    key: "doValidate",
    value: function doValidate() {
      var _get2;

      var str = this.value;
      var firstNonZero = str.search(/[^0]/);
      if (firstNonZero === -1 && str.length <= this._matchFrom) return true;

      var _this$boundaries3 = this.boundaries(str),
          _this$boundaries4 = Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["f"])(_this$boundaries3, 2),
          minstr = _this$boundaries4[0],
          maxstr = _this$boundaries4[1];

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return this.from <= Number(maxstr) && Number(minstr) <= this.to && (_get2 = Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedRange.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args));
    }
  }]);

  return MaskedRange;
}(_pattern_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
_core_holder_js__WEBPACK_IMPORTED_MODULE_2__["default"].MaskedRange = MaskedRange;

/* harmony default export */ __webpack_exports__["default"] = (MaskedRange);


/***/ }),

/***/ "../../node_modules/imask/esm/masked/regexp.js":
/*!*******************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/imask/esm/masked/regexp.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-6ccb1f64.js */ "../../node_modules/imask/esm/_rollupPluginBabelHelpers-6ccb1f64.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.js */ "../../node_modules/imask/esm/masked/base.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/holder.js */ "../../node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/change-details.js */ "../../node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "../../node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/utils.js */ "../../node_modules/imask/esm/core/utils.js");







/** Masking by RegExp */

var MaskedRegExp = /*#__PURE__*/function (_Masked) {
  Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["d"])(MaskedRegExp, _Masked);

  var _super = Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["e"])(MaskedRegExp);

  function MaskedRegExp() {
    Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["a"])(this, MaskedRegExp);

    return _super.apply(this, arguments);
  }

  Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["_"])(MaskedRegExp, [{
    key: "_update",
    value:
    /**
      @override
      @param {Object} opts
    */
    function _update(opts) {
      if (opts.mask) opts.validate = function (value) {
        return value.search(opts.mask) >= 0;
      };

      Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_6ccb1f64_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedRegExp.prototype), "_update", this).call(this, opts);
    }
  }]);

  return MaskedRegExp;
}(_base_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
_core_holder_js__WEBPACK_IMPORTED_MODULE_2__["default"].MaskedRegExp = MaskedRegExp;

/* harmony default export */ __webpack_exports__["default"] = (MaskedRegExp);


/***/ }),

/***/ "../../node_modules/object-fit-images/dist/ofi.common-js.js":
/*!********************************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/object-fit-images/dist/ofi.common-js.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! npm.im/object-fit-images 3.2.4 */


var OFI = 'bfred-it:object-fit-images';
var propRegex = /(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g;
var testImg = typeof Image === 'undefined' ? {style: {'object-position': 1}} : new Image();
var supportsObjectFit = 'object-fit' in testImg.style;
var supportsObjectPosition = 'object-position' in testImg.style;
var supportsOFI = 'background-size' in testImg.style;
var supportsCurrentSrc = typeof testImg.currentSrc === 'string';
var nativeGetAttribute = testImg.getAttribute;
var nativeSetAttribute = testImg.setAttribute;
var autoModeEnabled = false;

function createPlaceholder(w, h) {
	return ("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" + w + "' height='" + h + "'%3E%3C/svg%3E");
}

function polyfillCurrentSrc(el) {
	if (el.srcset && !supportsCurrentSrc && window.picturefill) {
		var pf = window.picturefill._;
		// parse srcset with picturefill where currentSrc isn't available
		if (!el[pf.ns] || !el[pf.ns].evaled) {
			// force synchronous srcset parsing
			pf.fillImg(el, {reselect: true});
		}

		if (!el[pf.ns].curSrc) {
			// force picturefill to parse srcset
			el[pf.ns].supported = false;
			pf.fillImg(el, {reselect: true});
		}

		// retrieve parsed currentSrc, if any
		el.currentSrc = el[pf.ns].curSrc || el.src;
	}
}

function getStyle(el) {
	var style = getComputedStyle(el).fontFamily;
	var parsed;
	var props = {};
	while ((parsed = propRegex.exec(style)) !== null) {
		props[parsed[1]] = parsed[2];
	}
	return props;
}

function setPlaceholder(img, width, height) {
	// Default: fill width, no height
	var placeholder = createPlaceholder(width || 1, height || 0);

	// Only set placeholder if it's different
	if (nativeGetAttribute.call(img, 'src') !== placeholder) {
		nativeSetAttribute.call(img, 'src', placeholder);
	}
}

function onImageReady(img, callback) {
	// naturalWidth is only available when the image headers are loaded,
	// this loop will poll it every 100ms.
	if (img.naturalWidth) {
		callback(img);
	} else {
		setTimeout(onImageReady, 100, img, callback);
	}
}

function fixOne(el) {
	var style = getStyle(el);
	var ofi = el[OFI];
	style['object-fit'] = style['object-fit'] || 'fill'; // default value

	// Avoid running where unnecessary, unless OFI had already done its deed
	if (!ofi.img) {
		// fill is the default behavior so no action is necessary
		if (style['object-fit'] === 'fill') {
			return;
		}

		// Where object-fit is supported and object-position isn't (Safari < 10)
		if (
			!ofi.skipTest && // unless user wants to apply regardless of browser support
			supportsObjectFit && // if browser already supports object-fit
			!style['object-position'] // unless object-position is used
		) {
			return;
		}
	}

	// keep a clone in memory while resetting the original to a blank
	if (!ofi.img) {
		ofi.img = new Image(el.width, el.height);
		ofi.img.srcset = nativeGetAttribute.call(el, "data-ofi-srcset") || el.srcset;
		ofi.img.src = nativeGetAttribute.call(el, "data-ofi-src") || el.src;

		// preserve for any future cloneNode calls
		// https://github.com/bfred-it/object-fit-images/issues/53
		nativeSetAttribute.call(el, "data-ofi-src", el.src);
		if (el.srcset) {
			nativeSetAttribute.call(el, "data-ofi-srcset", el.srcset);
		}

		setPlaceholder(el, el.naturalWidth || el.width, el.naturalHeight || el.height);

		// remove srcset because it overrides src
		if (el.srcset) {
			el.srcset = '';
		}
		try {
			keepSrcUsable(el);
		} catch (err) {
			if (window.console) {
				console.warn('https://bit.ly/ofi-old-browser');
			}
		}
	}

	polyfillCurrentSrc(ofi.img);

	el.style.backgroundImage = "url(\"" + ((ofi.img.currentSrc || ofi.img.src).replace(/"/g, '\\"')) + "\")";
	el.style.backgroundPosition = style['object-position'] || 'center';
	el.style.backgroundRepeat = 'no-repeat';
	el.style.backgroundOrigin = 'content-box';

	if (/scale-down/.test(style['object-fit'])) {
		onImageReady(ofi.img, function () {
			if (ofi.img.naturalWidth > el.width || ofi.img.naturalHeight > el.height) {
				el.style.backgroundSize = 'contain';
			} else {
				el.style.backgroundSize = 'auto';
			}
		});
	} else {
		el.style.backgroundSize = style['object-fit'].replace('none', 'auto').replace('fill', '100% 100%');
	}

	onImageReady(ofi.img, function (img) {
		setPlaceholder(el, img.naturalWidth, img.naturalHeight);
	});
}

function keepSrcUsable(el) {
	var descriptors = {
		get: function get(prop) {
			return el[OFI].img[prop ? prop : 'src'];
		},
		set: function set(value, prop) {
			el[OFI].img[prop ? prop : 'src'] = value;
			nativeSetAttribute.call(el, ("data-ofi-" + prop), value); // preserve for any future cloneNode
			fixOne(el);
			return value;
		}
	};
	Object.defineProperty(el, 'src', descriptors);
	Object.defineProperty(el, 'currentSrc', {
		get: function () { return descriptors.get('currentSrc'); }
	});
	Object.defineProperty(el, 'srcset', {
		get: function () { return descriptors.get('srcset'); },
		set: function (ss) { return descriptors.set(ss, 'srcset'); }
	});
}

function hijackAttributes() {
	function getOfiImageMaybe(el, name) {
		return el[OFI] && el[OFI].img && (name === 'src' || name === 'srcset') ? el[OFI].img : el;
	}
	if (!supportsObjectPosition) {
		HTMLImageElement.prototype.getAttribute = function (name) {
			return nativeGetAttribute.call(getOfiImageMaybe(this, name), name);
		};

		HTMLImageElement.prototype.setAttribute = function (name, value) {
			return nativeSetAttribute.call(getOfiImageMaybe(this, name), name, String(value));
		};
	}
}

function fix(imgs, opts) {
	var startAutoMode = !autoModeEnabled && !imgs;
	opts = opts || {};
	imgs = imgs || 'img';

	if ((supportsObjectPosition && !opts.skipTest) || !supportsOFI) {
		return false;
	}

	// use imgs as a selector or just select all images
	if (imgs === 'img') {
		imgs = document.getElementsByTagName('img');
	} else if (typeof imgs === 'string') {
		imgs = document.querySelectorAll(imgs);
	} else if (!('length' in imgs)) {
		imgs = [imgs];
	}

	// apply fix to all
	for (var i = 0; i < imgs.length; i++) {
		imgs[i][OFI] = imgs[i][OFI] || {
			skipTest: opts.skipTest
		};
		fixOne(imgs[i]);
	}

	if (startAutoMode) {
		document.body.addEventListener('load', function (e) {
			if (e.target.tagName === 'IMG') {
				fix(e.target, {
					skipTest: opts.skipTest
				});
			}
		}, true);
		autoModeEnabled = true;
		imgs = 'img'; // reset to a generic selector for watchMQ
	}

	// if requested, watch media queries for object-fit change
	if (opts.watchMQ) {
		window.addEventListener('resize', fix.bind(null, imgs, {
			skipTest: opts.skipTest
		}));
	}
}

fix.supportsObjectFit = supportsObjectFit;
fix.supportsObjectPosition = supportsObjectPosition;

hijackAttributes();

module.exports = fix;


/***/ }),

/***/ "../../node_modules/svg4everybody/dist/svg4everybody.js":
/*!****************************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/svg4everybody/dist/svg4everybody.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(root, factory) {
     true ? // AMD. Register as an anonymous module unless amdModuleId is set
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
        return root.svg4everybody = factory();
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function() {
    /*! svg4everybody v2.1.9 | github.com/jonathantneal/svg4everybody */
    function embed(parent, svg, target) {
        // if the target exists
        if (target) {
            // create a document fragment to hold the contents of the target
            var fragment = document.createDocumentFragment(), viewBox = !svg.hasAttribute("viewBox") && target.getAttribute("viewBox");
            // conditionally set the viewBox on the svg
            viewBox && svg.setAttribute("viewBox", viewBox);
            // copy the contents of the clone into the fragment
            for (// clone the target
            var clone = target.cloneNode(!0); clone.childNodes.length; ) {
                fragment.appendChild(clone.firstChild);
            }
            // append the fragment into the svg
            parent.appendChild(fragment);
        }
    }
    function loadreadystatechange(xhr) {
        // listen to changes in the request
        xhr.onreadystatechange = function() {
            // if the request is ready
            if (4 === xhr.readyState) {
                // get the cached html document
                var cachedDocument = xhr._cachedDocument;
                // ensure the cached html document based on the xhr response
                cachedDocument || (cachedDocument = xhr._cachedDocument = document.implementation.createHTMLDocument(""), 
                cachedDocument.body.innerHTML = xhr.responseText, xhr._cachedTarget = {}), // clear the xhr embeds list and embed each item
                xhr._embeds.splice(0).map(function(item) {
                    // get the cached target
                    var target = xhr._cachedTarget[item.id];
                    // ensure the cached target
                    target || (target = xhr._cachedTarget[item.id] = cachedDocument.getElementById(item.id)), 
                    // embed the target into the svg
                    embed(item.parent, item.svg, target);
                });
            }
        }, // test the ready state change immediately
        xhr.onreadystatechange();
    }
    function svg4everybody(rawopts) {
        function oninterval() {
            // while the index exists in the live <use> collection
            for (// get the cached <use> index
            var index = 0; index < uses.length; ) {
                // get the current <use>
                var use = uses[index], parent = use.parentNode, svg = getSVGAncestor(parent), src = use.getAttribute("xlink:href") || use.getAttribute("href");
                if (!src && opts.attributeName && (src = use.getAttribute(opts.attributeName)), 
                svg && src) {
                    if (polyfill) {
                        if (!opts.validate || opts.validate(src, svg, use)) {
                            // remove the <use> element
                            parent.removeChild(use);
                            // parse the src and get the url and id
                            var srcSplit = src.split("#"), url = srcSplit.shift(), id = srcSplit.join("#");
                            // if the link is external
                            if (url.length) {
                                // get the cached xhr request
                                var xhr = requests[url];
                                // ensure the xhr request exists
                                xhr || (xhr = requests[url] = new XMLHttpRequest(), xhr.open("GET", url), xhr.send(), 
                                xhr._embeds = []), // add the svg and id as an item to the xhr embeds list
                                xhr._embeds.push({
                                    parent: parent,
                                    svg: svg,
                                    id: id
                                }), // prepare the xhr ready state change event
                                loadreadystatechange(xhr);
                            } else {
                                // embed the local id into the svg
                                embed(parent, svg, document.getElementById(id));
                            }
                        } else {
                            // increase the index when the previous value was not "valid"
                            ++index, ++numberOfSvgUseElementsToBypass;
                        }
                    }
                } else {
                    // increase the index when the previous value was not "valid"
                    ++index;
                }
            }
            // continue the interval
            (!uses.length || uses.length - numberOfSvgUseElementsToBypass > 0) && requestAnimationFrame(oninterval, 67);
        }
        var polyfill, opts = Object(rawopts), newerIEUA = /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/, webkitUA = /\bAppleWebKit\/(\d+)\b/, olderEdgeUA = /\bEdge\/12\.(\d+)\b/, edgeUA = /\bEdge\/.(\d+)\b/, inIframe = window.top !== window.self;
        polyfill = "polyfill" in opts ? opts.polyfill : newerIEUA.test(navigator.userAgent) || (navigator.userAgent.match(olderEdgeUA) || [])[1] < 10547 || (navigator.userAgent.match(webkitUA) || [])[1] < 537 || edgeUA.test(navigator.userAgent) && inIframe;
        // create xhr requests object
        var requests = {}, requestAnimationFrame = window.requestAnimationFrame || setTimeout, uses = document.getElementsByTagName("use"), numberOfSvgUseElementsToBypass = 0;
        // conditionally start the interval if the polyfill is active
        polyfill && oninterval();
    }
    function getSVGAncestor(node) {
        for (var svg = node; "svg" !== svg.nodeName.toLowerCase() && (svg = svg.parentNode); ) {}
        return svg;
    }
    return svg4everybody;
});

/***/ }),

/***/ "../../node_modules/tippy.js/dist/tippy.esm.js":
/*!*******************************************************************************************!*\
  !*** C:/WORK/FRONT/projects/Roiburo/inveta-teplo/node_modules/tippy.js/dist/tippy.esm.js ***!
  \*******************************************************************************************/
/*! exports provided: default, animateFill, createSingleton, delegate, followCursor, hideAll, inlinePositioning, roundArrow, sticky */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animateFill", function() { return animateFill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSingleton", function() { return createSingleton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delegate", function() { return delegate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "followCursor", function() { return followCursor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideAll", function() { return hideAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inlinePositioning", function() { return inlinePositioning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roundArrow", function() { return ROUND_ARROW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sticky", function() { return sticky; });
/* harmony import */ var _popperjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @popperjs/core */ "../../node_modules/@popperjs/core/lib/index.js");
/**!
* tippy.js v6.3.1
* (c) 2017-2021 atomiks
* MIT License
*/


var ROUND_ARROW = '<svg width="16" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"></svg>';
var BOX_CLASS = "tippy-box";
var CONTENT_CLASS = "tippy-content";
var BACKDROP_CLASS = "tippy-backdrop";
var ARROW_CLASS = "tippy-arrow";
var SVG_ARROW_CLASS = "tippy-svg-arrow";
var TOUCH_OPTIONS = {
  passive: true,
  capture: true
};

function hasOwnProperty(obj, key) {
  return {}.hasOwnProperty.call(obj, key);
}
function getValueAtIndexOrReturn(value, index, defaultValue) {
  if (Array.isArray(value)) {
    var v = value[index];
    return v == null ? Array.isArray(defaultValue) ? defaultValue[index] : defaultValue : v;
  }

  return value;
}
function isType(value, type) {
  var str = {}.toString.call(value);
  return str.indexOf('[object') === 0 && str.indexOf(type + "]") > -1;
}
function invokeWithArgsOrReturn(value, args) {
  return typeof value === 'function' ? value.apply(void 0, args) : value;
}
function debounce(fn, ms) {
  // Avoid wrapping in `setTimeout` if ms is 0 anyway
  if (ms === 0) {
    return fn;
  }

  var timeout;
  return function (arg) {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      fn(arg);
    }, ms);
  };
}
function removeProperties(obj, keys) {
  var clone = Object.assign({}, obj);
  keys.forEach(function (key) {
    delete clone[key];
  });
  return clone;
}
function splitBySpaces(value) {
  return value.split(/\s+/).filter(Boolean);
}
function normalizeToArray(value) {
  return [].concat(value);
}
function pushIfUnique(arr, value) {
  if (arr.indexOf(value) === -1) {
    arr.push(value);
  }
}
function unique(arr) {
  return arr.filter(function (item, index) {
    return arr.indexOf(item) === index;
  });
}
function getBasePlacement(placement) {
  return placement.split('-')[0];
}
function arrayFrom(value) {
  return [].slice.call(value);
}
function removeUndefinedProps(obj) {
  return Object.keys(obj).reduce(function (acc, key) {
    if (obj[key] !== undefined) {
      acc[key] = obj[key];
    }

    return acc;
  }, {});
}

function div() {
  return document.createElement('div');
}
function isElement(value) {
  return ['Element', 'Fragment'].some(function (type) {
    return isType(value, type);
  });
}
function isNodeList(value) {
  return isType(value, 'NodeList');
}
function isMouseEvent(value) {
  return isType(value, 'MouseEvent');
}
function isReferenceElement(value) {
  return !!(value && value._tippy && value._tippy.reference === value);
}
function getArrayOfElements(value) {
  if (isElement(value)) {
    return [value];
  }

  if (isNodeList(value)) {
    return arrayFrom(value);
  }

  if (Array.isArray(value)) {
    return value;
  }

  return arrayFrom(document.querySelectorAll(value));
}
function setTransitionDuration(els, value) {
  els.forEach(function (el) {
    if (el) {
      el.style.transitionDuration = value + "ms";
    }
  });
}
function setVisibilityState(els, state) {
  els.forEach(function (el) {
    if (el) {
      el.setAttribute('data-state', state);
    }
  });
}
function getOwnerDocument(elementOrElements) {
  var _element$ownerDocumen;

  var _normalizeToArray = normalizeToArray(elementOrElements),
      element = _normalizeToArray[0]; // Elements created via a <template> have an ownerDocument with no reference to the body


  return (element == null ? void 0 : (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body) ? element.ownerDocument : document;
}
function isCursorOutsideInteractiveBorder(popperTreeData, event) {
  var clientX = event.clientX,
      clientY = event.clientY;
  return popperTreeData.every(function (_ref) {
    var popperRect = _ref.popperRect,
        popperState = _ref.popperState,
        props = _ref.props;
    var interactiveBorder = props.interactiveBorder;
    var basePlacement = getBasePlacement(popperState.placement);
    var offsetData = popperState.modifiersData.offset;

    if (!offsetData) {
      return true;
    }

    var topDistance = basePlacement === 'bottom' ? offsetData.top.y : 0;
    var bottomDistance = basePlacement === 'top' ? offsetData.bottom.y : 0;
    var leftDistance = basePlacement === 'right' ? offsetData.left.x : 0;
    var rightDistance = basePlacement === 'left' ? offsetData.right.x : 0;
    var exceedsTop = popperRect.top - clientY + topDistance > interactiveBorder;
    var exceedsBottom = clientY - popperRect.bottom - bottomDistance > interactiveBorder;
    var exceedsLeft = popperRect.left - clientX + leftDistance > interactiveBorder;
    var exceedsRight = clientX - popperRect.right - rightDistance > interactiveBorder;
    return exceedsTop || exceedsBottom || exceedsLeft || exceedsRight;
  });
}
function updateTransitionEndListener(box, action, listener) {
  var method = action + "EventListener"; // some browsers apparently support `transition` (unprefixed) but only fire
  // `webkitTransitionEnd`...

  ['transitionend', 'webkitTransitionEnd'].forEach(function (event) {
    box[method](event, listener);
  });
}

var currentInput = {
  isTouch: false
};
var lastMouseMoveTime = 0;
/**
 * When a `touchstart` event is fired, it's assumed the user is using touch
 * input. We'll bind a `mousemove` event listener to listen for mouse input in
 * the future. This way, the `isTouch` property is fully dynamic and will handle
 * hybrid devices that use a mix of touch + mouse input.
 */

function onDocumentTouchStart() {
  if (currentInput.isTouch) {
    return;
  }

  currentInput.isTouch = true;

  if (window.performance) {
    document.addEventListener('mousemove', onDocumentMouseMove);
  }
}
/**
 * When two `mousemove` event are fired consecutively within 20ms, it's assumed
 * the user is using mouse input again. `mousemove` can fire on touch devices as
 * well, but very rarely that quickly.
 */

function onDocumentMouseMove() {
  var now = performance.now();

  if (now - lastMouseMoveTime < 20) {
    currentInput.isTouch = false;
    document.removeEventListener('mousemove', onDocumentMouseMove);
  }

  lastMouseMoveTime = now;
}
/**
 * When an element is in focus and has a tippy, leaving the tab/window and
 * returning causes it to show again. For mouse users this is unexpected, but
 * for keyboard use it makes sense.
 * TODO: find a better technique to solve this problem
 */

function onWindowBlur() {
  var activeElement = document.activeElement;

  if (isReferenceElement(activeElement)) {
    var instance = activeElement._tippy;

    if (activeElement.blur && !instance.state.isVisible) {
      activeElement.blur();
    }
  }
}
function bindGlobalEventListeners() {
  document.addEventListener('touchstart', onDocumentTouchStart, TOUCH_OPTIONS);
  window.addEventListener('blur', onWindowBlur);
}

var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
var ua = isBrowser ? navigator.userAgent : '';
var isIE = /MSIE |Trident\//.test(ua);

function createMemoryLeakWarning(method) {
  var txt = method === 'destroy' ? 'n already-' : ' ';
  return [method + "() was called on a" + txt + "destroyed instance. This is a no-op but", 'indicates a potential memory leak.'].join(' ');
}
function clean(value) {
  var spacesAndTabs = /[ \t]{2,}/g;
  var lineStartWithSpaces = /^[ \t]*/gm;
  return value.replace(spacesAndTabs, ' ').replace(lineStartWithSpaces, '').trim();
}

function getDevMessage(message) {
  return clean("\n  %ctippy.js\n\n  %c" + clean(message) + "\n\n  %c\uD83D\uDC77\u200D This is a development-only message. It will be removed in production.\n  ");
}

function getFormattedMessage(message) {
  return [getDevMessage(message), // title
  'color: #00C584; font-size: 1.3em; font-weight: bold;', // message
  'line-height: 1.5', // footer
  'color: #a6a095;'];
} // Assume warnings and errors never have the same message

var visitedMessages;

if (true) {
  resetVisitedMessages();
}

function resetVisitedMessages() {
  visitedMessages = new Set();
}
function warnWhen(condition, message) {
  if (condition && !visitedMessages.has(message)) {
    var _console;

    visitedMessages.add(message);

    (_console = console).warn.apply(_console, getFormattedMessage(message));
  }
}
function errorWhen(condition, message) {
  if (condition && !visitedMessages.has(message)) {
    var _console2;

    visitedMessages.add(message);

    (_console2 = console).error.apply(_console2, getFormattedMessage(message));
  }
}
function validateTargets(targets) {
  var didPassFalsyValue = !targets;
  var didPassPlainObject = Object.prototype.toString.call(targets) === '[object Object]' && !targets.addEventListener;
  errorWhen(didPassFalsyValue, ['tippy() was passed', '`' + String(targets) + '`', 'as its targets (first) argument. Valid types are: String, Element,', 'Element[], or NodeList.'].join(' '));
  errorWhen(didPassPlainObject, ['tippy() was passed a plain object which is not supported as an argument', 'for virtual positioning. Use props.getReferenceClientRect instead.'].join(' '));
}

var pluginProps = {
  animateFill: false,
  followCursor: false,
  inlinePositioning: false,
  sticky: false
};
var renderProps = {
  allowHTML: false,
  animation: 'fade',
  arrow: true,
  content: '',
  inertia: false,
  maxWidth: 350,
  role: 'tooltip',
  theme: '',
  zIndex: 9999
};
var defaultProps = Object.assign({
  appendTo: function appendTo() {
    return document.body;
  },
  aria: {
    content: 'auto',
    expanded: 'auto'
  },
  delay: 0,
  duration: [300, 250],
  getReferenceClientRect: null,
  hideOnClick: true,
  ignoreAttributes: false,
  interactive: false,
  interactiveBorder: 2,
  interactiveDebounce: 0,
  moveTransition: '',
  offset: [0, 10],
  onAfterUpdate: function onAfterUpdate() {},
  onBeforeUpdate: function onBeforeUpdate() {},
  onCreate: function onCreate() {},
  onDestroy: function onDestroy() {},
  onHidden: function onHidden() {},
  onHide: function onHide() {},
  onMount: function onMount() {},
  onShow: function onShow() {},
  onShown: function onShown() {},
  onTrigger: function onTrigger() {},
  onUntrigger: function onUntrigger() {},
  onClickOutside: function onClickOutside() {},
  placement: 'top',
  plugins: [],
  popperOptions: {},
  render: null,
  showOnCreate: false,
  touch: true,
  trigger: 'mouseenter focus',
  triggerTarget: null
}, pluginProps, {}, renderProps);
var defaultKeys = Object.keys(defaultProps);
var setDefaultProps = function setDefaultProps(partialProps) {
  /* istanbul ignore else */
  if (true) {
    validateProps(partialProps, []);
  }

  var keys = Object.keys(partialProps);
  keys.forEach(function (key) {
    defaultProps[key] = partialProps[key];
  });
};
function getExtendedPassedProps(passedProps) {
  var plugins = passedProps.plugins || [];
  var pluginProps = plugins.reduce(function (acc, plugin) {
    var name = plugin.name,
        defaultValue = plugin.defaultValue;

    if (name) {
      acc[name] = passedProps[name] !== undefined ? passedProps[name] : defaultValue;
    }

    return acc;
  }, {});
  return Object.assign({}, passedProps, {}, pluginProps);
}
function getDataAttributeProps(reference, plugins) {
  var propKeys = plugins ? Object.keys(getExtendedPassedProps(Object.assign({}, defaultProps, {
    plugins: plugins
  }))) : defaultKeys;
  var props = propKeys.reduce(function (acc, key) {
    var valueAsString = (reference.getAttribute("data-tippy-" + key) || '').trim();

    if (!valueAsString) {
      return acc;
    }

    if (key === 'content') {
      acc[key] = valueAsString;
    } else {
      try {
        acc[key] = JSON.parse(valueAsString);
      } catch (e) {
        acc[key] = valueAsString;
      }
    }

    return acc;
  }, {});
  return props;
}
function evaluateProps(reference, props) {
  var out = Object.assign({}, props, {
    content: invokeWithArgsOrReturn(props.content, [reference])
  }, props.ignoreAttributes ? {} : getDataAttributeProps(reference, props.plugins));
  out.aria = Object.assign({}, defaultProps.aria, {}, out.aria);
  out.aria = {
    expanded: out.aria.expanded === 'auto' ? props.interactive : out.aria.expanded,
    content: out.aria.content === 'auto' ? props.interactive ? null : 'describedby' : out.aria.content
  };
  return out;
}
function validateProps(partialProps, plugins) {
  if (partialProps === void 0) {
    partialProps = {};
  }

  if (plugins === void 0) {
    plugins = [];
  }

  var keys = Object.keys(partialProps);
  keys.forEach(function (prop) {
    var nonPluginProps = removeProperties(defaultProps, Object.keys(pluginProps));
    var didPassUnknownProp = !hasOwnProperty(nonPluginProps, prop); // Check if the prop exists in `plugins`

    if (didPassUnknownProp) {
      didPassUnknownProp = plugins.filter(function (plugin) {
        return plugin.name === prop;
      }).length === 0;
    }

    warnWhen(didPassUnknownProp, ["`" + prop + "`", "is not a valid prop. You may have spelled it incorrectly, or if it's", 'a plugin, forgot to pass it in an array as props.plugins.', '\n\n', 'All props: https://atomiks.github.io/tippyjs/v6/all-props/\n', 'Plugins: https://atomiks.github.io/tippyjs/v6/plugins/'].join(' '));
  });
}

var innerHTML = function innerHTML() {
  return 'innerHTML';
};

function dangerouslySetInnerHTML(element, html) {
  element[innerHTML()] = html;
}

function createArrowElement(value) {
  var arrow = div();

  if (value === true) {
    arrow.className = ARROW_CLASS;
  } else {
    arrow.className = SVG_ARROW_CLASS;

    if (isElement(value)) {
      arrow.appendChild(value);
    } else {
      dangerouslySetInnerHTML(arrow, value);
    }
  }

  return arrow;
}

function setContent(content, props) {
  if (isElement(props.content)) {
    dangerouslySetInnerHTML(content, '');
    content.appendChild(props.content);
  } else if (typeof props.content !== 'function') {
    if (props.allowHTML) {
      dangerouslySetInnerHTML(content, props.content);
    } else {
      content.textContent = props.content;
    }
  }
}
function getChildren(popper) {
  var box = popper.firstElementChild;
  var boxChildren = arrayFrom(box.children);
  return {
    box: box,
    content: boxChildren.find(function (node) {
      return node.classList.contains(CONTENT_CLASS);
    }),
    arrow: boxChildren.find(function (node) {
      return node.classList.contains(ARROW_CLASS) || node.classList.contains(SVG_ARROW_CLASS);
    }),
    backdrop: boxChildren.find(function (node) {
      return node.classList.contains(BACKDROP_CLASS);
    })
  };
}
function render(instance) {
  var popper = div();
  var box = div();
  box.className = BOX_CLASS;
  box.setAttribute('data-state', 'hidden');
  box.setAttribute('tabindex', '-1');
  var content = div();
  content.className = CONTENT_CLASS;
  content.setAttribute('data-state', 'hidden');
  setContent(content, instance.props);
  popper.appendChild(box);
  box.appendChild(content);
  onUpdate(instance.props, instance.props);

  function onUpdate(prevProps, nextProps) {
    var _getChildren = getChildren(popper),
        box = _getChildren.box,
        content = _getChildren.content,
        arrow = _getChildren.arrow;

    if (nextProps.theme) {
      box.setAttribute('data-theme', nextProps.theme);
    } else {
      box.removeAttribute('data-theme');
    }

    if (typeof nextProps.animation === 'string') {
      box.setAttribute('data-animation', nextProps.animation);
    } else {
      box.removeAttribute('data-animation');
    }

    if (nextProps.inertia) {
      box.setAttribute('data-inertia', '');
    } else {
      box.removeAttribute('data-inertia');
    }

    box.style.maxWidth = typeof nextProps.maxWidth === 'number' ? nextProps.maxWidth + "px" : nextProps.maxWidth;

    if (nextProps.role) {
      box.setAttribute('role', nextProps.role);
    } else {
      box.removeAttribute('role');
    }

    if (prevProps.content !== nextProps.content || prevProps.allowHTML !== nextProps.allowHTML) {
      setContent(content, instance.props);
    }

    if (nextProps.arrow) {
      if (!arrow) {
        box.appendChild(createArrowElement(nextProps.arrow));
      } else if (prevProps.arrow !== nextProps.arrow) {
        box.removeChild(arrow);
        box.appendChild(createArrowElement(nextProps.arrow));
      }
    } else if (arrow) {
      box.removeChild(arrow);
    }
  }

  return {
    popper: popper,
    onUpdate: onUpdate
  };
} // Runtime check to identify if the render function is the default one; this
// way we can apply default CSS transitions logic and it can be tree-shaken away

render.$$tippy = true;

var idCounter = 1;
var mouseMoveListeners = []; // Used by `hideAll()`

var mountedInstances = [];
function createTippy(reference, passedProps) {
  var props = evaluateProps(reference, Object.assign({}, defaultProps, {}, getExtendedPassedProps(removeUndefinedProps(passedProps)))); // ===========================================================================
  // 🔒 Private members
  // ===========================================================================

  var showTimeout;
  var hideTimeout;
  var scheduleHideAnimationFrame;
  var isVisibleFromClick = false;
  var didHideDueToDocumentMouseDown = false;
  var didTouchMove = false;
  var ignoreOnFirstUpdate = false;
  var lastTriggerEvent;
  var currentTransitionEndListener;
  var onFirstUpdate;
  var listeners = [];
  var debouncedOnMouseMove = debounce(onMouseMove, props.interactiveDebounce);
  var currentTarget; // ===========================================================================
  // 🔑 Public members
  // ===========================================================================

  var id = idCounter++;
  var popperInstance = null;
  var plugins = unique(props.plugins);
  var state = {
    // Is the instance currently enabled?
    isEnabled: true,
    // Is the tippy currently showing and not transitioning out?
    isVisible: false,
    // Has the instance been destroyed?
    isDestroyed: false,
    // Is the tippy currently mounted to the DOM?
    isMounted: false,
    // Has the tippy finished transitioning in?
    isShown: false
  };
  var instance = {
    // properties
    id: id,
    reference: reference,
    popper: div(),
    popperInstance: popperInstance,
    props: props,
    state: state,
    plugins: plugins,
    // methods
    clearDelayTimeouts: clearDelayTimeouts,
    setProps: setProps,
    setContent: setContent,
    show: show,
    hide: hide,
    hideWithInteractivity: hideWithInteractivity,
    enable: enable,
    disable: disable,
    unmount: unmount,
    destroy: destroy
  }; // TODO: Investigate why this early return causes a TDZ error in the tests —
  // it doesn't seem to happen in the browser

  /* istanbul ignore if */

  if (!props.render) {
    if (true) {
      errorWhen(true, 'render() function has not been supplied.');
    }

    return instance;
  } // ===========================================================================
  // Initial mutations
  // ===========================================================================


  var _props$render = props.render(instance),
      popper = _props$render.popper,
      onUpdate = _props$render.onUpdate;

  popper.setAttribute('data-tippy-root', '');
  popper.id = "tippy-" + instance.id;
  instance.popper = popper;
  reference._tippy = instance;
  popper._tippy = instance;
  var pluginsHooks = plugins.map(function (plugin) {
    return plugin.fn(instance);
  });
  var hasAriaExpanded = reference.hasAttribute('aria-expanded');
  addListeners();
  handleAriaExpandedAttribute();
  handleStyles();
  invokeHook('onCreate', [instance]);

  if (props.showOnCreate) {
    scheduleShow();
  } // Prevent a tippy with a delay from hiding if the cursor left then returned
  // before it started hiding


  popper.addEventListener('mouseenter', function () {
    if (instance.props.interactive && instance.state.isVisible) {
      instance.clearDelayTimeouts();
    }
  });
  popper.addEventListener('mouseleave', function (event) {
    if (instance.props.interactive && instance.props.trigger.indexOf('mouseenter') >= 0) {
      getDocument().addEventListener('mousemove', debouncedOnMouseMove);
      debouncedOnMouseMove(event);
    }
  });
  return instance; // ===========================================================================
  // 🔒 Private methods
  // ===========================================================================

  function getNormalizedTouchSettings() {
    var touch = instance.props.touch;
    return Array.isArray(touch) ? touch : [touch, 0];
  }

  function getIsCustomTouchBehavior() {
    return getNormalizedTouchSettings()[0] === 'hold';
  }

  function getIsDefaultRenderFn() {
    var _instance$props$rende;

    // @ts-ignore
    return !!((_instance$props$rende = instance.props.render) == null ? void 0 : _instance$props$rende.$$tippy);
  }

  function getCurrentTarget() {
    return currentTarget || reference;
  }

  function getDocument() {
    var parent = getCurrentTarget().parentNode;
    return parent ? getOwnerDocument(parent) : document;
  }

  function getDefaultTemplateChildren() {
    return getChildren(popper);
  }

  function getDelay(isShow) {
    // For touch or keyboard input, force `0` delay for UX reasons
    // Also if the instance is mounted but not visible (transitioning out),
    // ignore delay
    if (instance.state.isMounted && !instance.state.isVisible || currentInput.isTouch || lastTriggerEvent && lastTriggerEvent.type === 'focus') {
      return 0;
    }

    return getValueAtIndexOrReturn(instance.props.delay, isShow ? 0 : 1, defaultProps.delay);
  }

  function handleStyles() {
    popper.style.pointerEvents = instance.props.interactive && instance.state.isVisible ? '' : 'none';
    popper.style.zIndex = "" + instance.props.zIndex;
  }

  function invokeHook(hook, args, shouldInvokePropsHook) {
    if (shouldInvokePropsHook === void 0) {
      shouldInvokePropsHook = true;
    }

    pluginsHooks.forEach(function (pluginHooks) {
      if (pluginHooks[hook]) {
        pluginHooks[hook].apply(void 0, args);
      }
    });

    if (shouldInvokePropsHook) {
      var _instance$props;

      (_instance$props = instance.props)[hook].apply(_instance$props, args);
    }
  }

  function handleAriaContentAttribute() {
    var aria = instance.props.aria;

    if (!aria.content) {
      return;
    }

    var attr = "aria-" + aria.content;
    var id = popper.id;
    var nodes = normalizeToArray(instance.props.triggerTarget || reference);
    nodes.forEach(function (node) {
      var currentValue = node.getAttribute(attr);

      if (instance.state.isVisible) {
        node.setAttribute(attr, currentValue ? currentValue + " " + id : id);
      } else {
        var nextValue = currentValue && currentValue.replace(id, '').trim();

        if (nextValue) {
          node.setAttribute(attr, nextValue);
        } else {
          node.removeAttribute(attr);
        }
      }
    });
  }

  function handleAriaExpandedAttribute() {
    if (hasAriaExpanded || !instance.props.aria.expanded) {
      return;
    }

    var nodes = normalizeToArray(instance.props.triggerTarget || reference);
    nodes.forEach(function (node) {
      if (instance.props.interactive) {
        node.setAttribute('aria-expanded', instance.state.isVisible && node === getCurrentTarget() ? 'true' : 'false');
      } else {
        node.removeAttribute('aria-expanded');
      }
    });
  }

  function cleanupInteractiveMouseListeners() {
    getDocument().removeEventListener('mousemove', debouncedOnMouseMove);
    mouseMoveListeners = mouseMoveListeners.filter(function (listener) {
      return listener !== debouncedOnMouseMove;
    });
  }

  function onDocumentPress(event) {
    // Moved finger to scroll instead of an intentional tap outside
    if (currentInput.isTouch) {
      if (didTouchMove || event.type === 'mousedown') {
        return;
      }
    } // Clicked on interactive popper


    if (instance.props.interactive && popper.contains(event.target)) {
      return;
    } // Clicked on the event listeners target


    if (getCurrentTarget().contains(event.target)) {
      if (currentInput.isTouch) {
        return;
      }

      if (instance.state.isVisible && instance.props.trigger.indexOf('click') >= 0) {
        return;
      }
    } else {
      invokeHook('onClickOutside', [instance, event]);
    }

    if (instance.props.hideOnClick === true) {
      instance.clearDelayTimeouts();
      instance.hide(); // `mousedown` event is fired right before `focus` if pressing the
      // currentTarget. This lets a tippy with `focus` trigger know that it
      // should not show

      didHideDueToDocumentMouseDown = true;
      setTimeout(function () {
        didHideDueToDocumentMouseDown = false;
      }); // The listener gets added in `scheduleShow()`, but this may be hiding it
      // before it shows, and hide()'s early bail-out behavior can prevent it
      // from being cleaned up

      if (!instance.state.isMounted) {
        removeDocumentPress();
      }
    }
  }

  function onTouchMove() {
    didTouchMove = true;
  }

  function onTouchStart() {
    didTouchMove = false;
  }

  function addDocumentPress() {
    var doc = getDocument();
    doc.addEventListener('mousedown', onDocumentPress, true);
    doc.addEventListener('touchend', onDocumentPress, TOUCH_OPTIONS);
    doc.addEventListener('touchstart', onTouchStart, TOUCH_OPTIONS);
    doc.addEventListener('touchmove', onTouchMove, TOUCH_OPTIONS);
  }

  function removeDocumentPress() {
    var doc = getDocument();
    doc.removeEventListener('mousedown', onDocumentPress, true);
    doc.removeEventListener('touchend', onDocumentPress, TOUCH_OPTIONS);
    doc.removeEventListener('touchstart', onTouchStart, TOUCH_OPTIONS);
    doc.removeEventListener('touchmove', onTouchMove, TOUCH_OPTIONS);
  }

  function onTransitionedOut(duration, callback) {
    onTransitionEnd(duration, function () {
      if (!instance.state.isVisible && popper.parentNode && popper.parentNode.contains(popper)) {
        callback();
      }
    });
  }

  function onTransitionedIn(duration, callback) {
    onTransitionEnd(duration, callback);
  }

  function onTransitionEnd(duration, callback) {
    var box = getDefaultTemplateChildren().box;

    function listener(event) {
      if (event.target === box) {
        updateTransitionEndListener(box, 'remove', listener);
        callback();
      }
    } // Make callback synchronous if duration is 0
    // `transitionend` won't fire otherwise


    if (duration === 0) {
      return callback();
    }

    updateTransitionEndListener(box, 'remove', currentTransitionEndListener);
    updateTransitionEndListener(box, 'add', listener);
    currentTransitionEndListener = listener;
  }

  function on(eventType, handler, options) {
    if (options === void 0) {
      options = false;
    }

    var nodes = normalizeToArray(instance.props.triggerTarget || reference);
    nodes.forEach(function (node) {
      node.addEventListener(eventType, handler, options);
      listeners.push({
        node: node,
        eventType: eventType,
        handler: handler,
        options: options
      });
    });
  }

  function addListeners() {
    if (getIsCustomTouchBehavior()) {
      on('touchstart', onTrigger, {
        passive: true
      });
      on('touchend', onMouseLeave, {
        passive: true
      });
    }

    splitBySpaces(instance.props.trigger).forEach(function (eventType) {
      if (eventType === 'manual') {
        return;
      }

      on(eventType, onTrigger);

      switch (eventType) {
        case 'mouseenter':
          on('mouseleave', onMouseLeave);
          break;

        case 'focus':
          on(isIE ? 'focusout' : 'blur', onBlurOrFocusOut);
          break;

        case 'focusin':
          on('focusout', onBlurOrFocusOut);
          break;
      }
    });
  }

  function removeListeners() {
    listeners.forEach(function (_ref) {
      var node = _ref.node,
          eventType = _ref.eventType,
          handler = _ref.handler,
          options = _ref.options;
      node.removeEventListener(eventType, handler, options);
    });
    listeners = [];
  }

  function onTrigger(event) {
    var _lastTriggerEvent;

    var shouldScheduleClickHide = false;

    if (!instance.state.isEnabled || isEventListenerStopped(event) || didHideDueToDocumentMouseDown) {
      return;
    }

    var wasFocused = ((_lastTriggerEvent = lastTriggerEvent) == null ? void 0 : _lastTriggerEvent.type) === 'focus';
    lastTriggerEvent = event;
    currentTarget = event.currentTarget;
    handleAriaExpandedAttribute();

    if (!instance.state.isVisible && isMouseEvent(event)) {
      // If scrolling, `mouseenter` events can be fired if the cursor lands
      // over a new target, but `mousemove` events don't get fired. This
      // causes interactive tooltips to get stuck open until the cursor is
      // moved
      mouseMoveListeners.forEach(function (listener) {
        return listener(event);
      });
    } // Toggle show/hide when clicking click-triggered tooltips


    if (event.type === 'click' && (instance.props.trigger.indexOf('mouseenter') < 0 || isVisibleFromClick) && instance.props.hideOnClick !== false && instance.state.isVisible) {
      shouldScheduleClickHide = true;
    } else {
      scheduleShow(event);
    }

    if (event.type === 'click') {
      isVisibleFromClick = !shouldScheduleClickHide;
    }

    if (shouldScheduleClickHide && !wasFocused) {
      scheduleHide(event);
    }
  }

  function onMouseMove(event) {
    var target = event.target;
    var isCursorOverReferenceOrPopper = getCurrentTarget().contains(target) || popper.contains(target);

    if (event.type === 'mousemove' && isCursorOverReferenceOrPopper) {
      return;
    }

    var popperTreeData = getNestedPopperTree().concat(popper).map(function (popper) {
      var _instance$popperInsta;

      var instance = popper._tippy;
      var state = (_instance$popperInsta = instance.popperInstance) == null ? void 0 : _instance$popperInsta.state;

      if (state) {
        return {
          popperRect: popper.getBoundingClientRect(),
          popperState: state,
          props: props
        };
      }

      return null;
    }).filter(Boolean);

    if (isCursorOutsideInteractiveBorder(popperTreeData, event)) {
      cleanupInteractiveMouseListeners();
      scheduleHide(event);
    }
  }

  function onMouseLeave(event) {
    var shouldBail = isEventListenerStopped(event) || instance.props.trigger.indexOf('click') >= 0 && isVisibleFromClick;

    if (shouldBail) {
      return;
    }

    if (instance.props.interactive) {
      instance.hideWithInteractivity(event);
      return;
    }

    scheduleHide(event);
  }

  function onBlurOrFocusOut(event) {
    if (instance.props.trigger.indexOf('focusin') < 0 && event.target !== getCurrentTarget()) {
      return;
    } // If focus was moved to within the popper


    if (instance.props.interactive && event.relatedTarget && popper.contains(event.relatedTarget)) {
      return;
    }

    scheduleHide(event);
  }

  function isEventListenerStopped(event) {
    return currentInput.isTouch ? getIsCustomTouchBehavior() !== event.type.indexOf('touch') >= 0 : false;
  }

  function createPopperInstance() {
    destroyPopperInstance();
    var _instance$props2 = instance.props,
        popperOptions = _instance$props2.popperOptions,
        placement = _instance$props2.placement,
        offset = _instance$props2.offset,
        getReferenceClientRect = _instance$props2.getReferenceClientRect,
        moveTransition = _instance$props2.moveTransition;
    var arrow = getIsDefaultRenderFn() ? getChildren(popper).arrow : null;
    var computedReference = getReferenceClientRect ? {
      getBoundingClientRect: getReferenceClientRect,
      contextElement: getReferenceClientRect.contextElement || getCurrentTarget()
    } : reference;
    var tippyModifier = {
      name: '$$tippy',
      enabled: true,
      phase: 'beforeWrite',
      requires: ['computeStyles'],
      fn: function fn(_ref2) {
        var state = _ref2.state;

        if (getIsDefaultRenderFn()) {
          var _getDefaultTemplateCh = getDefaultTemplateChildren(),
              box = _getDefaultTemplateCh.box;

          ['placement', 'reference-hidden', 'escaped'].forEach(function (attr) {
            if (attr === 'placement') {
              box.setAttribute('data-placement', state.placement);
            } else {
              if (state.attributes.popper["data-popper-" + attr]) {
                box.setAttribute("data-" + attr, '');
              } else {
                box.removeAttribute("data-" + attr);
              }
            }
          });
          state.attributes.popper = {};
        }
      }
    };
    var modifiers = [{
      name: 'offset',
      options: {
        offset: offset
      }
    }, {
      name: 'preventOverflow',
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    }, {
      name: 'flip',
      options: {
        padding: 5
      }
    }, {
      name: 'computeStyles',
      options: {
        adaptive: !moveTransition
      }
    }, tippyModifier];

    if (getIsDefaultRenderFn() && arrow) {
      modifiers.push({
        name: 'arrow',
        options: {
          element: arrow,
          padding: 3
        }
      });
    }

    modifiers.push.apply(modifiers, (popperOptions == null ? void 0 : popperOptions.modifiers) || []);
    instance.popperInstance = Object(_popperjs_core__WEBPACK_IMPORTED_MODULE_0__["createPopper"])(computedReference, popper, Object.assign({}, popperOptions, {
      placement: placement,
      onFirstUpdate: onFirstUpdate,
      modifiers: modifiers
    }));
  }

  function destroyPopperInstance() {
    if (instance.popperInstance) {
      instance.popperInstance.destroy();
      instance.popperInstance = null;
    }
  }

  function mount() {
    var appendTo = instance.props.appendTo;
    var parentNode; // By default, we'll append the popper to the triggerTargets's parentNode so
    // it's directly after the reference element so the elements inside the
    // tippy can be tabbed to
    // If there are clipping issues, the user can specify a different appendTo
    // and ensure focus management is handled correctly manually

    var node = getCurrentTarget();

    if (instance.props.interactive && appendTo === defaultProps.appendTo || appendTo === 'parent') {
      parentNode = node.parentNode;
    } else {
      parentNode = invokeWithArgsOrReturn(appendTo, [node]);
    } // The popper element needs to exist on the DOM before its position can be
    // updated as Popper needs to read its dimensions


    if (!parentNode.contains(popper)) {
      parentNode.appendChild(popper);
    }

    createPopperInstance();
    /* istanbul ignore else */

    if (true) {
      // Accessibility check
      warnWhen(instance.props.interactive && appendTo === defaultProps.appendTo && node.nextElementSibling !== popper, ['Interactive tippy element may not be accessible via keyboard', 'navigation because it is not directly after the reference element', 'in the DOM source order.', '\n\n', 'Using a wrapper <div> or <span> tag around the reference element', 'solves this by creating a new parentNode context.', '\n\n', 'Specifying `appendTo: document.body` silences this warning, but it', 'assumes you are using a focus management solution to handle', 'keyboard navigation.', '\n\n', 'See: https://atomiks.github.io/tippyjs/v6/accessibility/#interactivity'].join(' '));
    }
  }

  function getNestedPopperTree() {
    return arrayFrom(popper.querySelectorAll('[data-tippy-root]'));
  }

  function scheduleShow(event) {
    instance.clearDelayTimeouts();

    if (event) {
      invokeHook('onTrigger', [instance, event]);
    }

    addDocumentPress();
    var delay = getDelay(true);

    var _getNormalizedTouchSe = getNormalizedTouchSettings(),
        touchValue = _getNormalizedTouchSe[0],
        touchDelay = _getNormalizedTouchSe[1];

    if (currentInput.isTouch && touchValue === 'hold' && touchDelay) {
      delay = touchDelay;
    }

    if (delay) {
      showTimeout = setTimeout(function () {
        instance.show();
      }, delay);
    } else {
      instance.show();
    }
  }

  function scheduleHide(event) {
    instance.clearDelayTimeouts();
    invokeHook('onUntrigger', [instance, event]);

    if (!instance.state.isVisible) {
      removeDocumentPress();
      return;
    } // For interactive tippies, scheduleHide is added to a document.body handler
    // from onMouseLeave so must intercept scheduled hides from mousemove/leave
    // events when trigger contains mouseenter and click, and the tip is
    // currently shown as a result of a click.


    if (instance.props.trigger.indexOf('mouseenter') >= 0 && instance.props.trigger.indexOf('click') >= 0 && ['mouseleave', 'mousemove'].indexOf(event.type) >= 0 && isVisibleFromClick) {
      return;
    }

    var delay = getDelay(false);

    if (delay) {
      hideTimeout = setTimeout(function () {
        if (instance.state.isVisible) {
          instance.hide();
        }
      }, delay);
    } else {
      // Fixes a `transitionend` problem when it fires 1 frame too
      // late sometimes, we don't want hide() to be called.
      scheduleHideAnimationFrame = requestAnimationFrame(function () {
        instance.hide();
      });
    }
  } // ===========================================================================
  // 🔑 Public methods
  // ===========================================================================


  function enable() {
    instance.state.isEnabled = true;
  }

  function disable() {
    // Disabling the instance should also hide it
    // https://github.com/atomiks/tippy.js-react/issues/106
    instance.hide();
    instance.state.isEnabled = false;
  }

  function clearDelayTimeouts() {
    clearTimeout(showTimeout);
    clearTimeout(hideTimeout);
    cancelAnimationFrame(scheduleHideAnimationFrame);
  }

  function setProps(partialProps) {
    /* istanbul ignore else */
    if (true) {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('setProps'));
    }

    if (instance.state.isDestroyed) {
      return;
    }

    invokeHook('onBeforeUpdate', [instance, partialProps]);
    removeListeners();
    var prevProps = instance.props;
    var nextProps = evaluateProps(reference, Object.assign({}, instance.props, {}, partialProps, {
      ignoreAttributes: true
    }));
    instance.props = nextProps;
    addListeners();

    if (prevProps.interactiveDebounce !== nextProps.interactiveDebounce) {
      cleanupInteractiveMouseListeners();
      debouncedOnMouseMove = debounce(onMouseMove, nextProps.interactiveDebounce);
    } // Ensure stale aria-expanded attributes are removed


    if (prevProps.triggerTarget && !nextProps.triggerTarget) {
      normalizeToArray(prevProps.triggerTarget).forEach(function (node) {
        node.removeAttribute('aria-expanded');
      });
    } else if (nextProps.triggerTarget) {
      reference.removeAttribute('aria-expanded');
    }

    handleAriaExpandedAttribute();
    handleStyles();

    if (onUpdate) {
      onUpdate(prevProps, nextProps);
    }

    if (instance.popperInstance) {
      createPopperInstance(); // Fixes an issue with nested tippies if they are all getting re-rendered,
      // and the nested ones get re-rendered first.
      // https://github.com/atomiks/tippyjs-react/issues/177
      // TODO: find a cleaner / more efficient solution(!)

      getNestedPopperTree().forEach(function (nestedPopper) {
        // React (and other UI libs likely) requires a rAF wrapper as it flushes
        // its work in one
        requestAnimationFrame(nestedPopper._tippy.popperInstance.forceUpdate);
      });
    }

    invokeHook('onAfterUpdate', [instance, partialProps]);
  }

  function setContent(content) {
    instance.setProps({
      content: content
    });
  }

  function show() {
    /* istanbul ignore else */
    if (true) {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('show'));
    } // Early bail-out


    var isAlreadyVisible = instance.state.isVisible;
    var isDestroyed = instance.state.isDestroyed;
    var isDisabled = !instance.state.isEnabled;
    var isTouchAndTouchDisabled = currentInput.isTouch && !instance.props.touch;
    var duration = getValueAtIndexOrReturn(instance.props.duration, 0, defaultProps.duration);

    if (isAlreadyVisible || isDestroyed || isDisabled || isTouchAndTouchDisabled) {
      return;
    } // Normalize `disabled` behavior across browsers.
    // Firefox allows events on disabled elements, but Chrome doesn't.
    // Using a wrapper element (i.e. <span>) is recommended.


    if (getCurrentTarget().hasAttribute('disabled')) {
      return;
    }

    invokeHook('onShow', [instance], false);

    if (instance.props.onShow(instance) === false) {
      return;
    }

    instance.state.isVisible = true;

    if (getIsDefaultRenderFn()) {
      popper.style.visibility = 'visible';
    }

    handleStyles();
    addDocumentPress();

    if (!instance.state.isMounted) {
      popper.style.transition = 'none';
    } // If flipping to the opposite side after hiding at least once, the
    // animation will use the wrong placement without resetting the duration


    if (getIsDefaultRenderFn()) {
      var _getDefaultTemplateCh2 = getDefaultTemplateChildren(),
          box = _getDefaultTemplateCh2.box,
          content = _getDefaultTemplateCh2.content;

      setTransitionDuration([box, content], 0);
    }

    onFirstUpdate = function onFirstUpdate() {
      var _instance$popperInsta2;

      if (!instance.state.isVisible || ignoreOnFirstUpdate) {
        return;
      }

      ignoreOnFirstUpdate = true; // reflow

      void popper.offsetHeight;
      popper.style.transition = instance.props.moveTransition;

      if (getIsDefaultRenderFn() && instance.props.animation) {
        var _getDefaultTemplateCh3 = getDefaultTemplateChildren(),
            _box = _getDefaultTemplateCh3.box,
            _content = _getDefaultTemplateCh3.content;

        setTransitionDuration([_box, _content], duration);
        setVisibilityState([_box, _content], 'visible');
      }

      handleAriaContentAttribute();
      handleAriaExpandedAttribute();
      pushIfUnique(mountedInstances, instance); // certain modifiers (e.g. `maxSize`) require a second update after the
      // popper has been positioned for the first time

      (_instance$popperInsta2 = instance.popperInstance) == null ? void 0 : _instance$popperInsta2.forceUpdate();
      instance.state.isMounted = true;
      invokeHook('onMount', [instance]);

      if (instance.props.animation && getIsDefaultRenderFn()) {
        onTransitionedIn(duration, function () {
          instance.state.isShown = true;
          invokeHook('onShown', [instance]);
        });
      }
    };

    mount();
  }

  function hide() {
    /* istanbul ignore else */
    if (true) {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('hide'));
    } // Early bail-out


    var isAlreadyHidden = !instance.state.isVisible;
    var isDestroyed = instance.state.isDestroyed;
    var isDisabled = !instance.state.isEnabled;
    var duration = getValueAtIndexOrReturn(instance.props.duration, 1, defaultProps.duration);

    if (isAlreadyHidden || isDestroyed || isDisabled) {
      return;
    }

    invokeHook('onHide', [instance], false);

    if (instance.props.onHide(instance) === false) {
      return;
    }

    instance.state.isVisible = false;
    instance.state.isShown = false;
    ignoreOnFirstUpdate = false;
    isVisibleFromClick = false;

    if (getIsDefaultRenderFn()) {
      popper.style.visibility = 'hidden';
    }

    cleanupInteractiveMouseListeners();
    removeDocumentPress();
    handleStyles();

    if (getIsDefaultRenderFn()) {
      var _getDefaultTemplateCh4 = getDefaultTemplateChildren(),
          box = _getDefaultTemplateCh4.box,
          content = _getDefaultTemplateCh4.content;

      if (instance.props.animation) {
        setTransitionDuration([box, content], duration);
        setVisibilityState([box, content], 'hidden');
      }
    }

    handleAriaContentAttribute();
    handleAriaExpandedAttribute();

    if (instance.props.animation) {
      if (getIsDefaultRenderFn()) {
        onTransitionedOut(duration, instance.unmount);
      }
    } else {
      instance.unmount();
    }
  }

  function hideWithInteractivity(event) {
    /* istanbul ignore else */
    if (true) {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('hideWithInteractivity'));
    }

    getDocument().addEventListener('mousemove', debouncedOnMouseMove);
    pushIfUnique(mouseMoveListeners, debouncedOnMouseMove);
    debouncedOnMouseMove(event);
  }

  function unmount() {
    /* istanbul ignore else */
    if (true) {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('unmount'));
    }

    if (instance.state.isVisible) {
      instance.hide();
    }

    if (!instance.state.isMounted) {
      return;
    }

    destroyPopperInstance(); // If a popper is not interactive, it will be appended outside the popper
    // tree by default. This seems mainly for interactive tippies, but we should
    // find a workaround if possible

    getNestedPopperTree().forEach(function (nestedPopper) {
      nestedPopper._tippy.unmount();
    });

    if (popper.parentNode) {
      popper.parentNode.removeChild(popper);
    }

    mountedInstances = mountedInstances.filter(function (i) {
      return i !== instance;
    });
    instance.state.isMounted = false;
    invokeHook('onHidden', [instance]);
  }

  function destroy() {
    /* istanbul ignore else */
    if (true) {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('destroy'));
    }

    if (instance.state.isDestroyed) {
      return;
    }

    instance.clearDelayTimeouts();
    instance.unmount();
    removeListeners();
    delete reference._tippy;
    instance.state.isDestroyed = true;
    invokeHook('onDestroy', [instance]);
  }
}

function tippy(targets, optionalProps) {
  if (optionalProps === void 0) {
    optionalProps = {};
  }

  var plugins = defaultProps.plugins.concat(optionalProps.plugins || []);
  /* istanbul ignore else */

  if (true) {
    validateTargets(targets);
    validateProps(optionalProps, plugins);
  }

  bindGlobalEventListeners();
  var passedProps = Object.assign({}, optionalProps, {
    plugins: plugins
  });
  var elements = getArrayOfElements(targets);
  /* istanbul ignore else */

  if (true) {
    var isSingleContentElement = isElement(passedProps.content);
    var isMoreThanOneReferenceElement = elements.length > 1;
    warnWhen(isSingleContentElement && isMoreThanOneReferenceElement, ['tippy() was passed an Element as the `content` prop, but more than', 'one tippy instance was created by this invocation. This means the', 'content element will only be appended to the last tippy instance.', '\n\n', 'Instead, pass the .innerHTML of the element, or use a function that', 'returns a cloned version of the element instead.', '\n\n', '1) content: element.innerHTML\n', '2) content: () => element.cloneNode(true)'].join(' '));
  }

  var instances = elements.reduce(function (acc, reference) {
    var instance = reference && createTippy(reference, passedProps);

    if (instance) {
      acc.push(instance);
    }

    return acc;
  }, []);
  return isElement(targets) ? instances[0] : instances;
}

tippy.defaultProps = defaultProps;
tippy.setDefaultProps = setDefaultProps;
tippy.currentInput = currentInput;
var hideAll = function hideAll(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      excludedReferenceOrInstance = _ref.exclude,
      duration = _ref.duration;

  mountedInstances.forEach(function (instance) {
    var isExcluded = false;

    if (excludedReferenceOrInstance) {
      isExcluded = isReferenceElement(excludedReferenceOrInstance) ? instance.reference === excludedReferenceOrInstance : instance.popper === excludedReferenceOrInstance.popper;
    }

    if (!isExcluded) {
      var originalDuration = instance.props.duration;
      instance.setProps({
        duration: duration
      });
      instance.hide();

      if (!instance.state.isDestroyed) {
        instance.setProps({
          duration: originalDuration
        });
      }
    }
  });
};

// every time the popper is destroyed (i.e. a new target), removing the styles
// and causing transitions to break for singletons when the console is open, but
// most notably for non-transform styles being used, `gpuAcceleration: false`.

var applyStylesModifier = Object.assign({}, _popperjs_core__WEBPACK_IMPORTED_MODULE_0__["applyStyles"], {
  effect: function effect(_ref) {
    var state = _ref.state;
    var initialStyles = {
      popper: {
        position: state.options.strategy,
        left: '0',
        top: '0',
        margin: '0'
      },
      arrow: {
        position: 'absolute'
      },
      reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;

    if (state.elements.arrow) {
      Object.assign(state.elements.arrow.style, initialStyles.arrow);
    } // intentionally return no cleanup function
    // return () => { ... }

  }
});

var createSingleton = function createSingleton(tippyInstances, optionalProps) {
  var _optionalProps$popper;

  if (optionalProps === void 0) {
    optionalProps = {};
  }

  /* istanbul ignore else */
  if (true) {
    errorWhen(!Array.isArray(tippyInstances), ['The first argument passed to createSingleton() must be an array of', 'tippy instances. The passed value was', String(tippyInstances)].join(' '));
  }

  var individualInstances = tippyInstances;
  var references = [];
  var currentTarget;
  var overrides = optionalProps.overrides;
  var interceptSetPropsCleanups = [];
  var shownOnCreate = false;

  function setReferences() {
    references = individualInstances.map(function (instance) {
      return instance.reference;
    });
  }

  function enableInstances(isEnabled) {
    individualInstances.forEach(function (instance) {
      if (isEnabled) {
        instance.enable();
      } else {
        instance.disable();
      }
    });
  }

  function interceptSetProps(singleton) {
    return individualInstances.map(function (instance) {
      var originalSetProps = instance.setProps;

      instance.setProps = function (props) {
        originalSetProps(props);

        if (instance.reference === currentTarget) {
          singleton.setProps(props);
        }
      };

      return function () {
        instance.setProps = originalSetProps;
      };
    });
  } // have to pass singleton, as it maybe undefined on first call


  function prepareInstance(singleton, target) {
    var index = references.indexOf(target); // bail-out

    if (target === currentTarget) {
      return;
    }

    currentTarget = target;
    var overrideProps = (overrides || []).concat('content').reduce(function (acc, prop) {
      acc[prop] = individualInstances[index].props[prop];
      return acc;
    }, {});
    singleton.setProps(Object.assign({}, overrideProps, {
      getReferenceClientRect: typeof overrideProps.getReferenceClientRect === 'function' ? overrideProps.getReferenceClientRect : function () {
        return target.getBoundingClientRect();
      }
    }));
  }

  enableInstances(false);
  setReferences();
  var plugin = {
    fn: function fn() {
      return {
        onDestroy: function onDestroy() {
          enableInstances(true);
        },
        onHidden: function onHidden() {
          currentTarget = null;
        },
        onClickOutside: function onClickOutside(instance) {
          if (instance.props.showOnCreate && !shownOnCreate) {
            shownOnCreate = true;
            currentTarget = null;
          }
        },
        onShow: function onShow(instance) {
          if (instance.props.showOnCreate && !shownOnCreate) {
            shownOnCreate = true;
            prepareInstance(instance, references[0]);
          }
        },
        onTrigger: function onTrigger(instance, event) {
          prepareInstance(instance, event.currentTarget);
        }
      };
    }
  };
  var singleton = tippy(div(), Object.assign({}, removeProperties(optionalProps, ['overrides']), {
    plugins: [plugin].concat(optionalProps.plugins || []),
    triggerTarget: references,
    popperOptions: Object.assign({}, optionalProps.popperOptions, {
      modifiers: [].concat(((_optionalProps$popper = optionalProps.popperOptions) == null ? void 0 : _optionalProps$popper.modifiers) || [], [applyStylesModifier])
    })
  }));
  var originalShow = singleton.show;

  singleton.show = function (target) {
    originalShow(); // first time, showOnCreate or programmatic call with no params
    // default to showing first instance

    if (!currentTarget && target == null) {
      return prepareInstance(singleton, references[0]);
    } // triggered from event (do nothing as prepareInstance already called by onTrigger)
    // programmatic call with no params when already visible (do nothing again)


    if (currentTarget && target == null) {
      return;
    } // target is index of instance


    if (typeof target === 'number') {
      return references[target] && prepareInstance(singleton, references[target]);
    } // target is a child tippy instance


    if (individualInstances.includes(target)) {
      var ref = target.reference;
      return prepareInstance(singleton, ref);
    } // target is a ReferenceElement


    if (references.includes(target)) {
      return prepareInstance(singleton, target);
    }
  };

  singleton.showNext = function () {
    var first = references[0];

    if (!currentTarget) {
      return singleton.show(0);
    }

    var index = references.indexOf(currentTarget);
    singleton.show(references[index + 1] || first);
  };

  singleton.showPrevious = function () {
    var last = references[references.length - 1];

    if (!currentTarget) {
      return singleton.show(last);
    }

    var index = references.indexOf(currentTarget);
    var target = references[index - 1] || last;
    singleton.show(target);
  };

  var originalSetProps = singleton.setProps;

  singleton.setProps = function (props) {
    overrides = props.overrides || overrides;
    originalSetProps(props);
  };

  singleton.setInstances = function (nextInstances) {
    enableInstances(true);
    interceptSetPropsCleanups.forEach(function (fn) {
      return fn();
    });
    individualInstances = nextInstances;
    enableInstances(false);
    setReferences();
    interceptSetProps(singleton);
    singleton.setProps({
      triggerTarget: references
    });
  };

  interceptSetPropsCleanups = interceptSetProps(singleton);
  return singleton;
};

var BUBBLING_EVENTS_MAP = {
  mouseover: 'mouseenter',
  focusin: 'focus',
  click: 'click'
};
/**
 * Creates a delegate instance that controls the creation of tippy instances
 * for child elements (`target` CSS selector).
 */

function delegate(targets, props) {
  /* istanbul ignore else */
  if (true) {
    errorWhen(!(props && props.target), ['You must specity a `target` prop indicating a CSS selector string matching', 'the target elements that should receive a tippy.'].join(' '));
  }

  var listeners = [];
  var childTippyInstances = [];
  var disabled = false;
  var target = props.target;
  var nativeProps = removeProperties(props, ['target']);
  var parentProps = Object.assign({}, nativeProps, {
    trigger: 'manual',
    touch: false
  });
  var childProps = Object.assign({}, nativeProps, {
    showOnCreate: true
  });
  var returnValue = tippy(targets, parentProps);
  var normalizedReturnValue = normalizeToArray(returnValue);

  function onTrigger(event) {
    if (!event.target || disabled) {
      return;
    }

    var targetNode = event.target.closest(target);

    if (!targetNode) {
      return;
    } // Get relevant trigger with fallbacks:
    // 1. Check `data-tippy-trigger` attribute on target node
    // 2. Fallback to `trigger` passed to `delegate()`
    // 3. Fallback to `defaultProps.trigger`


    var trigger = targetNode.getAttribute('data-tippy-trigger') || props.trigger || defaultProps.trigger; // @ts-ignore

    if (targetNode._tippy) {
      return;
    }

    if (event.type === 'touchstart' && typeof childProps.touch === 'boolean') {
      return;
    }

    if (event.type !== 'touchstart' && trigger.indexOf(BUBBLING_EVENTS_MAP[event.type]) < 0) {
      return;
    }

    var instance = tippy(targetNode, childProps);

    if (instance) {
      childTippyInstances = childTippyInstances.concat(instance);
    }
  }

  function on(node, eventType, handler, options) {
    if (options === void 0) {
      options = false;
    }

    node.addEventListener(eventType, handler, options);
    listeners.push({
      node: node,
      eventType: eventType,
      handler: handler,
      options: options
    });
  }

  function addEventListeners(instance) {
    var reference = instance.reference;
    on(reference, 'touchstart', onTrigger, TOUCH_OPTIONS);
    on(reference, 'mouseover', onTrigger);
    on(reference, 'focusin', onTrigger);
    on(reference, 'click', onTrigger);
  }

  function removeEventListeners() {
    listeners.forEach(function (_ref) {
      var node = _ref.node,
          eventType = _ref.eventType,
          handler = _ref.handler,
          options = _ref.options;
      node.removeEventListener(eventType, handler, options);
    });
    listeners = [];
  }

  function applyMutations(instance) {
    var originalDestroy = instance.destroy;
    var originalEnable = instance.enable;
    var originalDisable = instance.disable;

    instance.destroy = function (shouldDestroyChildInstances) {
      if (shouldDestroyChildInstances === void 0) {
        shouldDestroyChildInstances = true;
      }

      if (shouldDestroyChildInstances) {
        childTippyInstances.forEach(function (instance) {
          instance.destroy();
        });
      }

      childTippyInstances = [];
      removeEventListeners();
      originalDestroy();
    };

    instance.enable = function () {
      originalEnable();
      childTippyInstances.forEach(function (instance) {
        return instance.enable();
      });
      disabled = false;
    };

    instance.disable = function () {
      originalDisable();
      childTippyInstances.forEach(function (instance) {
        return instance.disable();
      });
      disabled = true;
    };

    addEventListeners(instance);
  }

  normalizedReturnValue.forEach(applyMutations);
  return returnValue;
}

var animateFill = {
  name: 'animateFill',
  defaultValue: false,
  fn: function fn(instance) {
    var _instance$props$rende;

    // @ts-ignore
    if (!((_instance$props$rende = instance.props.render) == null ? void 0 : _instance$props$rende.$$tippy)) {
      if (true) {
        errorWhen(instance.props.animateFill, 'The `animateFill` plugin requires the default render function.');
      }

      return {};
    }

    var _getChildren = getChildren(instance.popper),
        box = _getChildren.box,
        content = _getChildren.content;

    var backdrop = instance.props.animateFill ? createBackdropElement() : null;
    return {
      onCreate: function onCreate() {
        if (backdrop) {
          box.insertBefore(backdrop, box.firstElementChild);
          box.setAttribute('data-animatefill', '');
          box.style.overflow = 'hidden';
          instance.setProps({
            arrow: false,
            animation: 'shift-away'
          });
        }
      },
      onMount: function onMount() {
        if (backdrop) {
          var transitionDuration = box.style.transitionDuration;
          var duration = Number(transitionDuration.replace('ms', '')); // The content should fade in after the backdrop has mostly filled the
          // tooltip element. `clip-path` is the other alternative but is not
          // well-supported and is buggy on some devices.

          content.style.transitionDelay = Math.round(duration / 10) + "ms";
          backdrop.style.transitionDuration = transitionDuration;
          setVisibilityState([backdrop], 'visible');
        }
      },
      onShow: function onShow() {
        if (backdrop) {
          backdrop.style.transitionDuration = '0ms';
        }
      },
      onHide: function onHide() {
        if (backdrop) {
          setVisibilityState([backdrop], 'hidden');
        }
      }
    };
  }
};

function createBackdropElement() {
  var backdrop = div();
  backdrop.className = BACKDROP_CLASS;
  setVisibilityState([backdrop], 'hidden');
  return backdrop;
}

var mouseCoords = {
  clientX: 0,
  clientY: 0
};
var activeInstances = [];

function storeMouseCoords(_ref) {
  var clientX = _ref.clientX,
      clientY = _ref.clientY;
  mouseCoords = {
    clientX: clientX,
    clientY: clientY
  };
}

function addMouseCoordsListener(doc) {
  doc.addEventListener('mousemove', storeMouseCoords);
}

function removeMouseCoordsListener(doc) {
  doc.removeEventListener('mousemove', storeMouseCoords);
}

var followCursor = {
  name: 'followCursor',
  defaultValue: false,
  fn: function fn(instance) {
    var reference = instance.reference;
    var doc = getOwnerDocument(instance.props.triggerTarget || reference);
    var isInternalUpdate = false;
    var wasFocusEvent = false;
    var isUnmounted = true;
    var prevProps = instance.props;

    function getIsInitialBehavior() {
      return instance.props.followCursor === 'initial' && instance.state.isVisible;
    }

    function addListener() {
      doc.addEventListener('mousemove', onMouseMove);
    }

    function removeListener() {
      doc.removeEventListener('mousemove', onMouseMove);
    }

    function unsetGetReferenceClientRect() {
      isInternalUpdate = true;
      instance.setProps({
        getReferenceClientRect: null
      });
      isInternalUpdate = false;
    }

    function onMouseMove(event) {
      // If the instance is interactive, avoid updating the position unless it's
      // over the reference element
      var isCursorOverReference = event.target ? reference.contains(event.target) : true;
      var followCursor = instance.props.followCursor;
      var clientX = event.clientX,
          clientY = event.clientY;
      var rect = reference.getBoundingClientRect();
      var relativeX = clientX - rect.left;
      var relativeY = clientY - rect.top;

      if (isCursorOverReference || !instance.props.interactive) {
        instance.setProps({
          getReferenceClientRect: function getReferenceClientRect() {
            var rect = reference.getBoundingClientRect();
            var x = clientX;
            var y = clientY;

            if (followCursor === 'initial') {
              x = rect.left + relativeX;
              y = rect.top + relativeY;
            }

            var top = followCursor === 'horizontal' ? rect.top : y;
            var right = followCursor === 'vertical' ? rect.right : x;
            var bottom = followCursor === 'horizontal' ? rect.bottom : y;
            var left = followCursor === 'vertical' ? rect.left : x;
            return {
              width: right - left,
              height: bottom - top,
              top: top,
              right: right,
              bottom: bottom,
              left: left
            };
          }
        });
      }
    }

    function create() {
      if (instance.props.followCursor) {
        activeInstances.push({
          instance: instance,
          doc: doc
        });
        addMouseCoordsListener(doc);
      }
    }

    function destroy() {
      activeInstances = activeInstances.filter(function (data) {
        return data.instance !== instance;
      });

      if (activeInstances.filter(function (data) {
        return data.doc === doc;
      }).length === 0) {
        removeMouseCoordsListener(doc);
      }
    }

    return {
      onCreate: create,
      onDestroy: destroy,
      onBeforeUpdate: function onBeforeUpdate() {
        prevProps = instance.props;
      },
      onAfterUpdate: function onAfterUpdate(_, _ref2) {
        var followCursor = _ref2.followCursor;

        if (isInternalUpdate) {
          return;
        }

        if (followCursor !== undefined && prevProps.followCursor !== followCursor) {
          destroy();

          if (followCursor) {
            create();

            if (instance.state.isMounted && !wasFocusEvent && !getIsInitialBehavior()) {
              addListener();
            }
          } else {
            removeListener();
            unsetGetReferenceClientRect();
          }
        }
      },
      onMount: function onMount() {
        if (instance.props.followCursor && !wasFocusEvent) {
          if (isUnmounted) {
            onMouseMove(mouseCoords);
            isUnmounted = false;
          }

          if (!getIsInitialBehavior()) {
            addListener();
          }
        }
      },
      onTrigger: function onTrigger(_, event) {
        if (isMouseEvent(event)) {
          mouseCoords = {
            clientX: event.clientX,
            clientY: event.clientY
          };
        }

        wasFocusEvent = event.type === 'focus';
      },
      onHidden: function onHidden() {
        if (instance.props.followCursor) {
          unsetGetReferenceClientRect();
          removeListener();
          isUnmounted = true;
        }
      }
    };
  }
};

function getProps(props, modifier) {
  var _props$popperOptions;

  return {
    popperOptions: Object.assign({}, props.popperOptions, {
      modifiers: [].concat((((_props$popperOptions = props.popperOptions) == null ? void 0 : _props$popperOptions.modifiers) || []).filter(function (_ref) {
        var name = _ref.name;
        return name !== modifier.name;
      }), [modifier])
    })
  };
}

var inlinePositioning = {
  name: 'inlinePositioning',
  defaultValue: false,
  fn: function fn(instance) {
    var reference = instance.reference;

    function isEnabled() {
      return !!instance.props.inlinePositioning;
    }

    var placement;
    var cursorRectIndex = -1;
    var isInternalUpdate = false;
    var modifier = {
      name: 'tippyInlinePositioning',
      enabled: true,
      phase: 'afterWrite',
      fn: function fn(_ref2) {
        var state = _ref2.state;

        if (isEnabled()) {
          if (placement !== state.placement) {
            instance.setProps({
              getReferenceClientRect: function getReferenceClientRect() {
                return _getReferenceClientRect(state.placement);
              }
            });
          }

          placement = state.placement;
        }
      }
    };

    function _getReferenceClientRect(placement) {
      return getInlineBoundingClientRect(getBasePlacement(placement), reference.getBoundingClientRect(), arrayFrom(reference.getClientRects()), cursorRectIndex);
    }

    function setInternalProps(partialProps) {
      isInternalUpdate = true;
      instance.setProps(partialProps);
      isInternalUpdate = false;
    }

    function addModifier() {
      if (!isInternalUpdate) {
        setInternalProps(getProps(instance.props, modifier));
      }
    }

    return {
      onCreate: addModifier,
      onAfterUpdate: addModifier,
      onTrigger: function onTrigger(_, event) {
        if (isMouseEvent(event)) {
          var rects = arrayFrom(instance.reference.getClientRects());
          var cursorRect = rects.find(function (rect) {
            return rect.left - 2 <= event.clientX && rect.right + 2 >= event.clientX && rect.top - 2 <= event.clientY && rect.bottom + 2 >= event.clientY;
          });
          cursorRectIndex = rects.indexOf(cursorRect);
        }
      },
      onUntrigger: function onUntrigger() {
        cursorRectIndex = -1;
      }
    };
  }
};
function getInlineBoundingClientRect(currentBasePlacement, boundingRect, clientRects, cursorRectIndex) {
  // Not an inline element, or placement is not yet known
  if (clientRects.length < 2 || currentBasePlacement === null) {
    return boundingRect;
  } // There are two rects and they are disjoined


  if (clientRects.length === 2 && cursorRectIndex >= 0 && clientRects[0].left > clientRects[1].right) {
    return clientRects[cursorRectIndex] || boundingRect;
  }

  switch (currentBasePlacement) {
    case 'top':
    case 'bottom':
      {
        var firstRect = clientRects[0];
        var lastRect = clientRects[clientRects.length - 1];
        var isTop = currentBasePlacement === 'top';
        var top = firstRect.top;
        var bottom = lastRect.bottom;
        var left = isTop ? firstRect.left : lastRect.left;
        var right = isTop ? firstRect.right : lastRect.right;
        var width = right - left;
        var height = bottom - top;
        return {
          top: top,
          bottom: bottom,
          left: left,
          right: right,
          width: width,
          height: height
        };
      }

    case 'left':
    case 'right':
      {
        var minLeft = Math.min.apply(Math, clientRects.map(function (rects) {
          return rects.left;
        }));
        var maxRight = Math.max.apply(Math, clientRects.map(function (rects) {
          return rects.right;
        }));
        var measureRects = clientRects.filter(function (rect) {
          return currentBasePlacement === 'left' ? rect.left === minLeft : rect.right === maxRight;
        });
        var _top = measureRects[0].top;
        var _bottom = measureRects[measureRects.length - 1].bottom;
        var _left = minLeft;
        var _right = maxRight;

        var _width = _right - _left;

        var _height = _bottom - _top;

        return {
          top: _top,
          bottom: _bottom,
          left: _left,
          right: _right,
          width: _width,
          height: _height
        };
      }

    default:
      {
        return boundingRect;
      }
  }
}

var sticky = {
  name: 'sticky',
  defaultValue: false,
  fn: function fn(instance) {
    var reference = instance.reference,
        popper = instance.popper;

    function getReference() {
      return instance.popperInstance ? instance.popperInstance.state.elements.reference : reference;
    }

    function shouldCheck(value) {
      return instance.props.sticky === true || instance.props.sticky === value;
    }

    var prevRefRect = null;
    var prevPopRect = null;

    function updatePosition() {
      var currentRefRect = shouldCheck('reference') ? getReference().getBoundingClientRect() : null;
      var currentPopRect = shouldCheck('popper') ? popper.getBoundingClientRect() : null;

      if (currentRefRect && areRectsDifferent(prevRefRect, currentRefRect) || currentPopRect && areRectsDifferent(prevPopRect, currentPopRect)) {
        if (instance.popperInstance) {
          instance.popperInstance.update();
        }
      }

      prevRefRect = currentRefRect;
      prevPopRect = currentPopRect;

      if (instance.state.isMounted) {
        requestAnimationFrame(updatePosition);
      }
    }

    return {
      onMount: function onMount() {
        if (instance.props.sticky) {
          updatePosition();
        }
      }
    };
  }
};

function areRectsDifferent(rectA, rectB) {
  if (rectA && rectB) {
    return rectA.top !== rectB.top || rectA.right !== rectB.right || rectA.bottom !== rectB.bottom || rectA.left !== rectB.left;
  }

  return true;
}

tippy.setDefaultProps({
  render: render
});

/* harmony default export */ __webpack_exports__["default"] = (tippy);

//# sourceMappingURL=tippy.esm.js.map


/***/ }),

/***/ "./components/accordion.js":
/*!*********************************!*\
  !*** ./components/accordion.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// function accordion() {
// 	document.querySelectorAll('.services__item:nth-child(n + 5)').forEach(item => item.classList.toggle('_hidden'));
// }
// accordion();
// document.querySelector(".services__btn").addEventListener("click", () => {
// 	accordion();
// 	addClassss
// });
function showText() {
  if (this.classList.contains('_active')) {
    this.classList.remove('_active');
    this.textContent = 'Еще +';
  } else {
    this.classList.add('_active');
    this.textContent = 'Свернуть';
  }
}

var button = document.querySelector('.services__btn');
var container = document.querySelectorAll('._hide');
button.addEventListener('click', function () {
  container.forEach(function (item) {
    if (item.classList.contains('show')) {
      item.classList.remove('show');
      item.style.maxHeight = 0;
      item.style.marginBottom = 0;
      item.style.opacity = 0;
    } else {
      item.classList.add('show');
      item.style.maxHeight = item.scrollHeight + 'px';
      item.style.marginBottom = 50 + 'px';
      item.style.opacity = 1;
    }
  });
  showText.call(button);
});

/***/ }),

/***/ "./components/anchors.js":
/*!*******************************!*\
  !*** ./components/anchors.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function scrollToBlock() {
  var anchors = document.querySelectorAll('a[href*="#"]');
  anchors.forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      var url = anchor.getAttribute('href');
      document.querySelector(url).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
}

scrollToBlock();

/***/ }),

/***/ "./components/burger.js":
/*!******************************!*\
  !*** ./components/burger.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

var menuBurger = document.querySelector('.header__burger');
var menu = document.querySelector('.header__mob-menu');
var headerMob = document.querySelector('.header');
var headerLogoDesc = document.querySelector('.header__logo-desc');
var headerLogoMob = document.querySelector('.header__logo-mob');
menuBurger.addEventListener('click', function () {
  menuBurger.classList.toggle('_active');
  menu.classList.toggle('_active');
  headerMob.classList.toggle('_active');
  headerLogoDesc.classList.toggle('_active');
  headerLogoMob.classList.toggle('_active');
});

/***/ }),

/***/ "./components/marquiz.js":
/*!*******************************!*\
  !*** ./components/marquiz.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener("DOMContentLoaded", function () {
  Marquiz.init({
    host: '//quiz.marquiz.ru',
    id: '5dc42a0a08448b004405cfb0',
    autoOpen: 40,
    autoOpenFreq: 'once',
    openOnExit: true
  });
});

/***/ }),

/***/ "./components/mask.js":
/*!****************************!*\
  !*** ./components/mask.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.querySelectorAll('input[type=tel]').forEach(function (tel) {
  var mask = IMask(tel, {
    mask: '+{7} (000) 000-00-00'
  });
});

/***/ }),

/***/ "./components/modals.js":
/*!******************************!*\
  !*** ./components/modals.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function modal() {
  var btns = document.querySelectorAll('.modal-button-js'),
      close = document.querySelectorAll('.modal__close'),
      overflow = document.querySelectorAll('.modal__overflow');

  function checkModal() {
    var modal = document.querySelector("#".concat(this.dataset.modal));
    showModal(modal);
  }

  function showModal(parent) {
    var content = parent.querySelector('.modal__content'),
        overflow2 = parent.querySelector('.modal__overflow');
    parent.classList.add('_active');
    overflow2.classList.add('_active');
    animateCSS(overflow2, 'animateFadeIn');
    animateCSS(content, 'animateTop');
    addClassBody();
  }

  function closeModal() {
    var parent = document.querySelector('.modal._active'),
        modalActiveContent = parent.querySelector('.modal__content'),
        modalActiveOverflow = parent.querySelector('.modal__overflow');
    animateCSS(modalActiveContent, 'animateUp');
    animateCSS(modalActiveOverflow, 'animateFadeOut');
    modalActiveContent.addEventListener('animationend', function () {
      parent.classList.remove('_active');
      modalActiveOverflow.classList.remove('_active');
    }, {
      once: true
    });
    addClassBody();
  }

  function addClassBody() {
    document.body.classList.contains('active') ? document.body.classList.remove('active') : document.body.classList.add('active');
  }

  btns.forEach(function (item) {
    return item.addEventListener('click', checkModal);
  });
  close.forEach(function (item) {
    return item.addEventListener('click', closeModal);
  });
  overflow.forEach(function (item) {
    return item.addEventListener('click', closeModal);
  });
}

modal();

function animateCSS(element, animation) {
  var _node$classList;

  var animationName = animation;
  var node = element.nodeType === 1 ? element : document.querySelector(element);

  (_node$classList = node.classList).add.apply(_node$classList, _toConsumableArray(animationName.split(' ')));

  function handleAnimationEnd() {
    var _node$classList2;

    (_node$classList2 = node.classList).remove.apply(_node$classList2, _toConsumableArray(animationName.split(' ')));
  }

  node.addEventListener('animationend', handleAnimationEnd, {
    once: true
  });
}

/***/ }),

/***/ "./components/sliders.js":
/*!*******************************!*\
  !*** ./components/sliders.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

var feedback = new Swiper('.feedback__slider', {
  slidesPerView: 'auto',
  spaceBetween: 30,
  speed: 1000,
  navigation: {
    prevEl: '.swiper-prev',
    nextEl: '.swiper-next'
  },
  pagination: {
    el: '.swiper-pagination'
  },
  breakpoints: {
    0: {
      centeredSlides: true,
      allowTouchMove: true
    },
    768: {
      centeredSlides: false,
      allowTouchMove: false
    }
  }
});
var examplesTopOne = new Swiper('.examples__slider-top-one', {
  spaceBetween: 30,
  speed: 1000,
  loop: true,
  loopedSlides: 5,
  pagination: {
    el: '.examples__progressbar-one',
    type: 'progressbar'
  }
});
var examplesBotOne = new Swiper('.examples__slider-bot-one', {
  slidesPerView: 3,
  spaceBetween: 10,
  speed: 1000,
  loop: true,
  loopedSlides: 5,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  allowTouchMove: false
});
examplesTopOne.controller.control = examplesBotOne;
examplesBotOne.controller.control = examplesTopOne;
var examplesTopTwo = new Swiper('.examples__slider-top-two', {
  slidesPerView: 1,
  spaceBetween: 30,
  speed: 1000,
  loop: true,
  loopedSlides: 5,
  pagination: {
    el: '.examples__progressbar-two',
    type: 'progressbar'
  }
});
var examplesBotTwo = new Swiper('.examples__slider-bot-two', {
  slidesPerView: 3,
  spaceBetween: 10,
  speed: 1000,
  loop: true,
  loopedSlides: 5,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  allowTouchMove: false
});
examplesTopTwo.controller.control = examplesBotTwo;
examplesBotTwo.controller.control = examplesTopTwo;
var examplesTopThree = new Swiper('.examples__slider-top-three', {
  slidesPerView: 1,
  spaceBetween: 30,
  speed: 1000,
  loop: true,
  loopedSlides: 5,
  pagination: {
    el: '.examples__progressbar-three',
    type: 'progressbar'
  }
});
var examplesBotThree = new Swiper('.examples__slider-bot-three', {
  slidesPerView: 3,
  spaceBetween: 10,
  speed: 1000,
  loop: true,
  loopedSlides: 5,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  allowTouchMove: false
});
examplesTopThree.controller.control = examplesBotThree;
examplesBotThree.controller.control = examplesTopThree;
var examplesTopFour = new Swiper('.examples__slider-top-four', {
  slidesPerView: 1,
  spaceBetween: 30,
  speed: 1000,
  loop: true,
  loopedSlides: 5,
  pagination: {
    el: '.examples__progressbar-four',
    type: 'progressbar'
  }
});
var examplesBotFour = new Swiper('.examples__slider-bot-four', {
  slidesPerView: 3,
  spaceBetween: 10,
  speed: 1000,
  loop: true,
  loopedSlides: 5,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  allowTouchMove: false
});
examplesTopFour.controller.control = examplesBotFour;
examplesBotFour.controller.control = examplesTopFour;
var examplesTopFive = new Swiper('.examples__slider-top-five', {
  slidesPerView: 1,
  spaceBetween: 30,
  speed: 1000,
  loop: true,
  loopedSlides: 5,
  pagination: {
    el: '.examples__progressbar-five',
    type: 'progressbar'
  }
});
var examplesBotFive = new Swiper('.examples__slider-bot-five', {
  slidesPerView: 3,
  spaceBetween: 10,
  speed: 1000,
  loop: true,
  loopedSlides: 5,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  allowTouchMove: false
});
examplesTopFive.controller.control = examplesBotFive;
examplesBotFive.controller.control = examplesTopFive;

/***/ }),

/***/ "./components/tabs.js":
/*!****************************!*\
  !*** ./components/tabs.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

var jsTriggers = document.querySelectorAll('.cost__tabs-item'),
    jsContents = document.querySelectorAll('.cost__content');
jsTriggers.forEach(function (trigger) {
  trigger.addEventListener('click', function () {
    var id = this.getAttribute('data-tab'),
        content = document.querySelector('.cost__content[data-tab="' + id + '"]'),
        activeTrigger = document.querySelector('.cost__tabs-item._active'),
        activeContent = document.querySelector('.cost__content._active');
    activeTrigger.classList.remove('_active'); // 1

    trigger.classList.add('_active'); // 2

    activeContent.classList.remove('_active'); // 3

    content.classList.add('_active'); // 4
  });
});

/***/ }),

/***/ "./components/tippy.js":
/*!*****************************!*\
  !*** ./components/tippy.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tippy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tippy.js */ "../../node_modules/tippy.js/dist/tippy.esm.js");

var servicesTooltip = document.querySelector('.services__tooltip');
servicesTooltip.style.display = 'block';
Object(tippy_js__WEBPACK_IMPORTED_MODULE_0__["default"])('._tooltip-services', {
  content: servicesTooltip,
  trigger: "click",
  maxWidth: 250
});
var feedbackTooltip = document.querySelector('.feedback__tooltip');
feedbackTooltip.style.display = 'block';
Object(tippy_js__WEBPACK_IMPORTED_MODULE_0__["default"])('._tooltip-feedback', {
  content: feedbackTooltip,
  trigger: "click",
  maxWidth: 400,
  interactive: true,
  arrow: false
});
var feedbackTooltipTwo = document.querySelector('.feedback__tooltip-two');
feedbackTooltipTwo.style.display = 'block';
Object(tippy_js__WEBPACK_IMPORTED_MODULE_0__["default"])('._tooltip-feedback-two', {
  content: feedbackTooltipTwo,
  trigger: "click",
  maxWidth: 400,
  interactive: true,
  arrow: false
});

/***/ }),

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tippy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tippy.js */ "../../node_modules/tippy.js/dist/tippy.esm.js");
/* harmony import */ var imask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! imask */ "../../node_modules/imask/esm/index.js");
/* harmony import */ var object_fit_images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! object-fit-images */ "../../node_modules/object-fit-images/dist/ofi.common-js.js");
/* harmony import */ var object_fit_images__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(object_fit_images__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! svg4everybody */ "../../node_modules/svg4everybody/dist/svg4everybody.js");
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(svg4everybody__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_accordion_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/accordion.js */ "./components/accordion.js");
/* harmony import */ var _components_accordion_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_accordion_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_modals_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/modals.js */ "./components/modals.js");
/* harmony import */ var _components_modals_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_modals_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_mask_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/mask.js */ "./components/mask.js");
/* harmony import */ var _components_mask_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_mask_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_tabs_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/tabs.js */ "./components/tabs.js");
/* harmony import */ var _components_tabs_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_tabs_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_sliders_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/sliders.js */ "./components/sliders.js");
/* harmony import */ var _components_sliders_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_components_sliders_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_tippy_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/tippy.js */ "./components/tippy.js");
/* harmony import */ var _components_anchors_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/anchors.js */ "./components/anchors.js");
/* harmony import */ var _components_anchors_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_components_anchors_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_burger_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/burger.js */ "./components/burger.js");
/* harmony import */ var _components_burger_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_components_burger_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_marquiz_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/marquiz.js */ "./components/marquiz.js");
/* harmony import */ var _components_marquiz_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_components_marquiz_js__WEBPACK_IMPORTED_MODULE_12__);
// import 'core-js/stable';
// import 'regenerator-runtime/runtime';
// import 'core-js/features/symbol/';
// import 'core-js/features/promise/';
// import 'core-js/features/object/assign';
// import 'core-js/features/array/from';
// import 'core-js/features/array/find';
// import 'core-js/features/number/is-nan';
// import 'core-js/features/dom-collections/for-each';
// import 'core-js/features/is-iterable';
// import 'whatwg-fetch';
// import './lib/polyfills.js';

 // import Rellax from 'rellax';
// import '../../node_modules/focus-visible/dist/focus-visible.js';


 // import InputNumber from './lib/inputNumber';
// import './components/header.js';


 // import './components/video.js';





 // import './components/form.js';


 // import './components/dynamicAdapt.js';

svg4everybody__WEBPACK_IMPORTED_MODULE_3___default()();
object_fit_images__WEBPACK_IMPORTED_MODULE_2___default()(); // const inputNumber = new InputNumber('.number');

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL0M6L1dPUksvRlJPTlQvcHJvamVjdHMvUm9pYnVyby9pbnZldGEtdGVwbG8vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9jcmVhdGVQb3BwZXIuanMiLCJ3ZWJwYWNrOi8vL0M6L1dPUksvRlJPTlQvcHJvamVjdHMvUm9pYnVyby9pbnZldGEtdGVwbG8vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvY29udGFpbnMuanMiLCJ3ZWJwYWNrOi8vL0M6L1dPUksvRlJPTlQvcHJvamVjdHMvUm9pYnVyby9pbnZldGEtdGVwbG8vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmpzIiwid2VicGFjazovLy9DOi9XT1JLL0ZST05UL3Byb2plY3RzL1JvaWJ1cm8vaW52ZXRhLXRlcGxvL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldENsaXBwaW5nUmVjdC5qcyIsIndlYnBhY2s6Ly8vQzovV09SSy9GUk9OVC9wcm9qZWN0cy9Sb2lidXJvL2ludmV0YS10ZXBsby9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRDb21wb3NpdGVSZWN0LmpzIiwid2VicGFjazovLy9DOi9XT1JLL0ZST05UL3Byb2plY3RzL1JvaWJ1cm8vaW52ZXRhLXRlcGxvL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldENvbXB1dGVkU3R5bGUuanMiLCJ3ZWJwYWNrOi8vL0M6L1dPUksvRlJPTlQvcHJvamVjdHMvUm9pYnVyby9pbnZldGEtdGVwbG8vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0RG9jdW1lbnRFbGVtZW50LmpzIiwid2VicGFjazovLy9DOi9XT1JLL0ZST05UL3Byb2plY3RzL1JvaWJ1cm8vaW52ZXRhLXRlcGxvL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldERvY3VtZW50UmVjdC5qcyIsIndlYnBhY2s6Ly8vQzovV09SSy9GUk9OVC9wcm9qZWN0cy9Sb2lidXJvL2ludmV0YS10ZXBsby9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRIVE1MRWxlbWVudFNjcm9sbC5qcyIsIndlYnBhY2s6Ly8vQzovV09SSy9GUk9OVC9wcm9qZWN0cy9Sb2lidXJvL2ludmV0YS10ZXBsby9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRMYXlvdXRSZWN0LmpzIiwid2VicGFjazovLy9DOi9XT1JLL0ZST05UL3Byb2plY3RzL1JvaWJ1cm8vaW52ZXRhLXRlcGxvL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldE5vZGVOYW1lLmpzIiwid2VicGFjazovLy9DOi9XT1JLL0ZST05UL3Byb2plY3RzL1JvaWJ1cm8vaW52ZXRhLXRlcGxvL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldE5vZGVTY3JvbGwuanMiLCJ3ZWJwYWNrOi8vL0M6L1dPUksvRlJPTlQvcHJvamVjdHMvUm9pYnVyby9pbnZldGEtdGVwbG8vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0T2Zmc2V0UGFyZW50LmpzIiwid2VicGFjazovLy9DOi9XT1JLL0ZST05UL3Byb2plY3RzL1JvaWJ1cm8vaW52ZXRhLXRlcGxvL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldFBhcmVudE5vZGUuanMiLCJ3ZWJwYWNrOi8vL0M6L1dPUksvRlJPTlQvcHJvamVjdHMvUm9pYnVyby9pbnZldGEtdGVwbG8vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0U2Nyb2xsUGFyZW50LmpzIiwid2VicGFjazovLy9DOi9XT1JLL0ZST05UL3Byb2plY3RzL1JvaWJ1cm8vaW52ZXRhLXRlcGxvL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldFZpZXdwb3J0UmVjdC5qcyIsIndlYnBhY2s6Ly8vQzovV09SSy9GUk9OVC9wcm9qZWN0cy9Sb2lidXJvL2ludmV0YS10ZXBsby9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRXaW5kb3cuanMiLCJ3ZWJwYWNrOi8vL0M6L1dPUksvRlJPTlQvcHJvamVjdHMvUm9pYnVyby9pbnZldGEtdGVwbG8vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0V2luZG93U2Nyb2xsLmpzIiwid2VicGFjazovLy9DOi9XT1JLL0ZST05UL3Byb2plY3RzL1JvaWJ1cm8vaW52ZXRhLXRlcGxvL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldFdpbmRvd1Njcm9sbEJhclguanMiLCJ3ZWJwYWNrOi8vL0M6L1dPUksvRlJPTlQvcHJvamVjdHMvUm9pYnVyby9pbnZldGEtdGVwbG8vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvaW5zdGFuY2VPZi5qcyIsIndlYnBhY2s6Ly8vQzovV09SSy9GUk9OVC9wcm9qZWN0cy9Sb2lidXJvL2ludmV0YS10ZXBsby9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9pc1Njcm9sbFBhcmVudC5qcyIsIndlYnBhY2s6Ly8vQzovV09SSy9GUk9OVC9wcm9qZWN0cy9Sb2lidXJvL2ludmV0YS10ZXBsby9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9pc1RhYmxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vQzovV09SSy9GUk9OVC9wcm9qZWN0cy9Sb2lidXJvL2ludmV0YS10ZXBsby9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9saXN0U2Nyb2xsUGFyZW50cy5qcyIsIndlYnBhY2s6Ly8vQzovV09SSy9GUk9OVC9wcm9qZWN0cy9Sb2lidXJvL2ludmV0YS10ZXBsby9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2VudW1zLmpzIiwid2VicGFjazovLy9DOi9XT1JLL0ZST05UL3Byb2plY3RzL1JvaWJ1cm8vaW52ZXRhLXRlcGxvL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL0M6L1dPUksvRlJPTlQvcHJvamVjdHMvUm9pYnVyby9pbnZldGEtdGVwbG8vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvYXBwbHlTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vL0M6L1dPUksvRlJPTlQvcHJvamVjdHMvUm9pYnVyby9pbnZldGEtdGVwbG8vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvYXJyb3cuanMiLCJ3ZWJwYWNrOi8vL0M6L1dPUksvRlJPTlQvcHJvamVjdHMvUm9pYnVyby9pbnZldGEtdGVwbG8vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvY29tcHV0ZVN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vQzovV09SSy9GUk9OVC9wcm9qZWN0cy9Sb2lidXJvL2ludmV0YS10ZXBsby9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9ldmVudExpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly8vQzovV09SSy9GUk9OVC9wcm9qZWN0cy9Sb2lidXJvL2ludmV0YS10ZXBsby9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9mbGlwLmpzIiwid2VicGFjazovLy9DOi9XT1JLL0ZST05UL3Byb2plY3RzL1JvaWJ1cm8vaW52ZXRhLXRlcGxvL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL2hpZGUuanMiLCJ3ZWJwYWNrOi8vL0M6L1dPUksvRlJPTlQvcHJvamVjdHMvUm9pYnVyby9pbnZldGEtdGVwbG8vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL0M6L1dPUksvRlJPTlQvcHJvamVjdHMvUm9pYnVyby9pbnZldGEtdGVwbG8vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvb2Zmc2V0LmpzIiwid2VicGFjazovLy9DOi9XT1JLL0ZST05UL3Byb2plY3RzL1JvaWJ1cm8vaW52ZXRhLXRlcGxvL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL3BvcHBlck9mZnNldHMuanMiLCJ3ZWJwYWNrOi8vL0M6L1dPUksvRlJPTlQvcHJvamVjdHMvUm9pYnVyby9pbnZldGEtdGVwbG8vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvcHJldmVudE92ZXJmbG93LmpzIiwid2VicGFjazovLy9DOi9XT1JLL0ZST05UL3Byb2plY3RzL1JvaWJ1cm8vaW52ZXRhLXRlcGxvL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvcG9wcGVyLWxpdGUuanMiLCJ3ZWJwYWNrOi8vL0M6L1dPUksvRlJPTlQvcHJvamVjdHMvUm9pYnVyby9pbnZldGEtdGVwbG8vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9wb3BwZXIuanMiLCJ3ZWJwYWNrOi8vL0M6L1dPUksvRlJPTlQvcHJvamVjdHMvUm9pYnVyby9pbnZldGEtdGVwbG8vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9jb21wdXRlQXV0b1BsYWNlbWVudC5qcyIsIndlYnBhY2s6Ly8vQzovV09SSy9GUk9OVC9wcm9qZWN0cy9Sb2lidXJvL2ludmV0YS10ZXBsby9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2NvbXB1dGVPZmZzZXRzLmpzIiwid2VicGFjazovLy9DOi9XT1JLL0ZST05UL3Byb2plY3RzL1JvaWJ1cm8vaW52ZXRhLXRlcGxvL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZGVib3VuY2UuanMiLCJ3ZWJwYWNrOi8vL0M6L1dPUksvRlJPTlQvcHJvamVjdHMvUm9pYnVyby9pbnZldGEtdGVwbG8vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9kZXRlY3RPdmVyZmxvdy5qcyIsIndlYnBhY2s6Ly8vQzovV09SSy9GUk9OVC9wcm9qZWN0cy9Sb2lidXJvL2ludmV0YS10ZXBsby9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2V4cGFuZFRvSGFzaE1hcC5qcyIsIndlYnBhY2s6Ly8vQzovV09SSy9GUk9OVC9wcm9qZWN0cy9Sb2lidXJvL2ludmV0YS10ZXBsby9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2Zvcm1hdC5qcyIsIndlYnBhY2s6Ly8vQzovV09SSy9GUk9OVC9wcm9qZWN0cy9Sb2lidXJvL2ludmV0YS10ZXBsby9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldEFsdEF4aXMuanMiLCJ3ZWJwYWNrOi8vL0M6L1dPUksvRlJPTlQvcHJvamVjdHMvUm9pYnVyby9pbnZldGEtdGVwbG8vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9nZXRCYXNlUGxhY2VtZW50LmpzIiwid2VicGFjazovLy9DOi9XT1JLL0ZST05UL3Byb2plY3RzL1JvaWJ1cm8vaW52ZXRhLXRlcGxvL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0RnJlc2hTaWRlT2JqZWN0LmpzIiwid2VicGFjazovLy9DOi9XT1JLL0ZST05UL3Byb2plY3RzL1JvaWJ1cm8vaW52ZXRhLXRlcGxvL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50LmpzIiwid2VicGFjazovLy9DOi9XT1JLL0ZST05UL3Byb2plY3RzL1JvaWJ1cm8vaW52ZXRhLXRlcGxvL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0T3Bwb3NpdGVQbGFjZW1lbnQuanMiLCJ3ZWJwYWNrOi8vL0M6L1dPUksvRlJPTlQvcHJvamVjdHMvUm9pYnVyby9pbnZldGEtdGVwbG8vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9nZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudC5qcyIsIndlYnBhY2s6Ly8vQzovV09SSy9GUk9OVC9wcm9qZWN0cy9Sb2lidXJvL2ludmV0YS10ZXBsby9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldFZhcmlhdGlvbi5qcyIsIndlYnBhY2s6Ly8vQzovV09SSy9GUk9OVC9wcm9qZWN0cy9Sb2lidXJvL2ludmV0YS10ZXBsby9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL21hdGguanMiLCJ3ZWJwYWNrOi8vL0M6L1dPUksvRlJPTlQvcHJvamVjdHMvUm9pYnVyby9pbnZldGEtdGVwbG8vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9tZXJnZUJ5TmFtZS5qcyIsIndlYnBhY2s6Ly8vQzovV09SSy9GUk9OVC9wcm9qZWN0cy9Sb2lidXJvL2ludmV0YS10ZXBsby9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL21lcmdlUGFkZGluZ09iamVjdC5qcyIsIndlYnBhY2s6Ly8vQzovV09SSy9GUk9OVC9wcm9qZWN0cy9Sb2lidXJvL2ludmV0YS10ZXBsby9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL29yZGVyTW9kaWZpZXJzLmpzIiwid2VicGFjazovLy9DOi9XT1JLL0ZST05UL3Byb2plY3RzL1JvaWJ1cm8vaW52ZXRhLXRlcGxvL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvcmVjdFRvQ2xpZW50UmVjdC5qcyIsIndlYnBhY2s6Ly8vQzovV09SSy9GUk9OVC9wcm9qZWN0cy9Sb2lidXJvL2ludmV0YS10ZXBsby9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL3VuaXF1ZUJ5LmpzIiwid2VicGFjazovLy9DOi9XT1JLL0ZST05UL3Byb2plY3RzL1JvaWJ1cm8vaW52ZXRhLXRlcGxvL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvdmFsaWRhdGVNb2RpZmllcnMuanMiLCJ3ZWJwYWNrOi8vL0M6L1dPUksvRlJPTlQvcHJvamVjdHMvUm9pYnVyby9pbnZldGEtdGVwbG8vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy93aXRoaW4uanMiLCJ3ZWJwYWNrOi8vL0M6L1dPUksvRlJPTlQvcHJvamVjdHMvUm9pYnVyby9pbnZldGEtdGVwbG8vbm9kZV9tb2R1bGVzL2ltYXNrL2VzbS9fcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzLTZjY2IxZjY0LmpzIiwid2VicGFjazovLy9DOi9XT1JLL0ZST05UL3Byb2plY3RzL1JvaWJ1cm8vaW52ZXRhLXRlcGxvL25vZGVfbW9kdWxlcy9pbWFzay9lc20vY29udHJvbHMvaHRtbC1jb250ZW50ZWRpdGFibGUtbWFzay1lbGVtZW50LmpzIiwid2VicGFjazovLy9DOi9XT1JLL0ZST05UL3Byb2plY3RzL1JvaWJ1cm8vaW52ZXRhLXRlcGxvL25vZGVfbW9kdWxlcy9pbWFzay9lc20vY29udHJvbHMvaHRtbC1tYXNrLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vL0M6L1dPUksvRlJPTlQvcHJvamVjdHMvUm9pYnVyby9pbnZldGEtdGVwbG8vbm9kZV9tb2R1bGVzL2ltYXNrL2VzbS9jb250cm9scy9pbnB1dC5qcyIsIndlYnBhY2s6Ly8vQzovV09SSy9GUk9OVC9wcm9qZWN0cy9Sb2lidXJvL2ludmV0YS10ZXBsby9ub2RlX21vZHVsZXMvaW1hc2svZXNtL2NvbnRyb2xzL21hc2stZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vQzovV09SSy9GUk9OVC9wcm9qZWN0cy9Sb2lidXJvL2ludmV0YS10ZXBsby9ub2RlX21vZHVsZXMvaW1hc2svZXNtL2NvcmUvYWN0aW9uLWRldGFpbHMuanMiLCJ3ZWJwYWNrOi8vL0M6L1dPUksvRlJPTlQvcHJvamVjdHMvUm9pYnVyby9pbnZldGEtdGVwbG8vbm9kZV9tb2R1bGVzL2ltYXNrL2VzbS9jb3JlL2NoYW5nZS1kZXRhaWxzLmpzIiwid2VicGFjazovLy9DOi9XT1JLL0ZST05UL3Byb2plY3RzL1JvaWJ1cm8vaW52ZXRhLXRlcGxvL25vZGVfbW9kdWxlcy9pbWFzay9lc20vY29yZS9jb250aW51b3VzLXRhaWwtZGV0YWlscy5qcyIsIndlYnBhY2s6Ly8vQzovV09SSy9GUk9OVC9wcm9qZWN0cy9Sb2lidXJvL2ludmV0YS10ZXBsby9ub2RlX21vZHVsZXMvaW1hc2svZXNtL2NvcmUvaG9sZGVyLmpzIiwid2VicGFjazovLy9DOi9XT1JLL0ZST05UL3Byb2plY3RzL1JvaWJ1cm8vaW52ZXRhLXRlcGxvL25vZGVfbW9kdWxlcy9pbWFzay9lc20vY29yZS91dGlscy5qcyIsIndlYnBhY2s6Ly8vQzovV09SSy9GUk9OVC9wcm9qZWN0cy9Sb2lidXJvL2ludmV0YS10ZXBsby9ub2RlX21vZHVsZXMvaW1hc2svZXNtL2luZGV4LmpzIiwid2VicGFjazovLy9DOi9XT1JLL0ZST05UL3Byb2plY3RzL1JvaWJ1cm8vaW52ZXRhLXRlcGxvL25vZGVfbW9kdWxlcy9pbWFzay9lc20vbWFza2VkL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vL0M6L1dPUksvRlJPTlQvcHJvamVjdHMvUm9pYnVyby9pbnZldGEtdGVwbG8vbm9kZV9tb2R1bGVzL2ltYXNrL2VzbS9tYXNrZWQvZGF0ZS5qcyIsIndlYnBhY2s6Ly8vQzovV09SSy9GUk9OVC9wcm9qZWN0cy9Sb2lidXJvL2ludmV0YS10ZXBsby9ub2RlX21vZHVsZXMvaW1hc2svZXNtL21hc2tlZC9keW5hbWljLmpzIiwid2VicGFjazovLy9DOi9XT1JLL0ZST05UL3Byb2plY3RzL1JvaWJ1cm8vaW52ZXRhLXRlcGxvL25vZGVfbW9kdWxlcy9pbWFzay9lc20vbWFza2VkL2VudW0uanMiLCJ3ZWJwYWNrOi8vL0M6L1dPUksvRlJPTlQvcHJvamVjdHMvUm9pYnVyby9pbnZldGEtdGVwbG8vbm9kZV9tb2R1bGVzL2ltYXNrL2VzbS9tYXNrZWQvZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vQzovV09SSy9GUk9OVC9wcm9qZWN0cy9Sb2lidXJvL2ludmV0YS10ZXBsby9ub2RlX21vZHVsZXMvaW1hc2svZXNtL21hc2tlZC9mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vQzovV09SSy9GUk9OVC9wcm9qZWN0cy9Sb2lidXJvL2ludmV0YS10ZXBsby9ub2RlX21vZHVsZXMvaW1hc2svZXNtL21hc2tlZC9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vL0M6L1dPUksvRlJPTlQvcHJvamVjdHMvUm9pYnVyby9pbnZldGEtdGVwbG8vbm9kZV9tb2R1bGVzL2ltYXNrL2VzbS9tYXNrZWQvcGF0dGVybi5qcyIsIndlYnBhY2s6Ly8vQzovV09SSy9GUk9OVC9wcm9qZWN0cy9Sb2lidXJvL2ludmV0YS10ZXBsby9ub2RlX21vZHVsZXMvaW1hc2svZXNtL21hc2tlZC9wYXR0ZXJuL2NodW5rLXRhaWwtZGV0YWlscy5qcyIsIndlYnBhY2s6Ly8vQzovV09SSy9GUk9OVC9wcm9qZWN0cy9Sb2lidXJvL2ludmV0YS10ZXBsby9ub2RlX21vZHVsZXMvaW1hc2svZXNtL21hc2tlZC9wYXR0ZXJuL2ZpeGVkLWRlZmluaXRpb24uanMiLCJ3ZWJwYWNrOi8vL0M6L1dPUksvRlJPTlQvcHJvamVjdHMvUm9pYnVyby9pbnZldGEtdGVwbG8vbm9kZV9tb2R1bGVzL2ltYXNrL2VzbS9tYXNrZWQvcGF0dGVybi9pbnB1dC1kZWZpbml0aW9uLmpzIiwid2VicGFjazovLy9DOi9XT1JLL0ZST05UL3Byb2plY3RzL1JvaWJ1cm8vaW52ZXRhLXRlcGxvL25vZGVfbW9kdWxlcy9pbWFzay9lc20vbWFza2VkL3BpcGUuanMiLCJ3ZWJwYWNrOi8vL0M6L1dPUksvRlJPTlQvcHJvamVjdHMvUm9pYnVyby9pbnZldGEtdGVwbG8vbm9kZV9tb2R1bGVzL2ltYXNrL2VzbS9tYXNrZWQvcmFuZ2UuanMiLCJ3ZWJwYWNrOi8vL0M6L1dPUksvRlJPTlQvcHJvamVjdHMvUm9pYnVyby9pbnZldGEtdGVwbG8vbm9kZV9tb2R1bGVzL2ltYXNrL2VzbS9tYXNrZWQvcmVnZXhwLmpzIiwid2VicGFjazovLy9DOi9XT1JLL0ZST05UL3Byb2plY3RzL1JvaWJ1cm8vaW52ZXRhLXRlcGxvL25vZGVfbW9kdWxlcy9vYmplY3QtZml0LWltYWdlcy9kaXN0L29maS5jb21tb24tanMuanMiLCJ3ZWJwYWNrOi8vL0M6L1dPUksvRlJPTlQvcHJvamVjdHMvUm9pYnVyby9pbnZldGEtdGVwbG8vbm9kZV9tb2R1bGVzL3N2ZzRldmVyeWJvZHkvZGlzdC9zdmc0ZXZlcnlib2R5LmpzIiwid2VicGFjazovLy9DOi9XT1JLL0ZST05UL3Byb2plY3RzL1JvaWJ1cm8vaW52ZXRhLXRlcGxvL25vZGVfbW9kdWxlcy90aXBweS5qcy9kaXN0L3RpcHB5LmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2FjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2FuY2hvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9idXJnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tYXJxdWl6LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWFzay5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21vZGFscy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NsaWRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90YWJzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGlwcHkuanMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0LmpzIl0sIm5hbWVzIjpbInNob3dUZXh0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJ0ZXh0Q29udGVudCIsImFkZCIsImJ1dHRvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbnRhaW5lciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhZGRFdmVudExpc3RlbmVyIiwiZm9yRWFjaCIsIml0ZW0iLCJzdHlsZSIsIm1heEhlaWdodCIsIm1hcmdpbkJvdHRvbSIsIm9wYWNpdHkiLCJzY3JvbGxIZWlnaHQiLCJjYWxsIiwic2Nyb2xsVG9CbG9jayIsImFuY2hvcnMiLCJhbmNob3IiLCJlIiwicHJldmVudERlZmF1bHQiLCJ1cmwiLCJnZXRBdHRyaWJ1dGUiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwibWVudUJ1cmdlciIsIm1lbnUiLCJoZWFkZXJNb2IiLCJoZWFkZXJMb2dvRGVzYyIsImhlYWRlckxvZ29Nb2IiLCJ0b2dnbGUiLCJNYXJxdWl6IiwiaW5pdCIsImhvc3QiLCJpZCIsImF1dG9PcGVuIiwiYXV0b09wZW5GcmVxIiwib3Blbk9uRXhpdCIsInRlbCIsIm1hc2siLCJJTWFzayIsIm1vZGFsIiwiYnRucyIsImNsb3NlIiwib3ZlcmZsb3ciLCJjaGVja01vZGFsIiwiZGF0YXNldCIsInNob3dNb2RhbCIsInBhcmVudCIsImNvbnRlbnQiLCJvdmVyZmxvdzIiLCJhbmltYXRlQ1NTIiwiYWRkQ2xhc3NCb2R5IiwiY2xvc2VNb2RhbCIsIm1vZGFsQWN0aXZlQ29udGVudCIsIm1vZGFsQWN0aXZlT3ZlcmZsb3ciLCJvbmNlIiwiYm9keSIsImVsZW1lbnQiLCJhbmltYXRpb24iLCJhbmltYXRpb25OYW1lIiwibm9kZSIsIm5vZGVUeXBlIiwic3BsaXQiLCJoYW5kbGVBbmltYXRpb25FbmQiLCJmZWVkYmFjayIsIlN3aXBlciIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJzcGVlZCIsIm5hdmlnYXRpb24iLCJwcmV2RWwiLCJuZXh0RWwiLCJwYWdpbmF0aW9uIiwiZWwiLCJicmVha3BvaW50cyIsImNlbnRlcmVkU2xpZGVzIiwiYWxsb3dUb3VjaE1vdmUiLCJleGFtcGxlc1RvcE9uZSIsImxvb3AiLCJsb29wZWRTbGlkZXMiLCJ0eXBlIiwiZXhhbXBsZXNCb3RPbmUiLCJ3YXRjaFNsaWRlc1Zpc2liaWxpdHkiLCJ3YXRjaFNsaWRlc1Byb2dyZXNzIiwiY29udHJvbGxlciIsImNvbnRyb2wiLCJleGFtcGxlc1RvcFR3byIsImV4YW1wbGVzQm90VHdvIiwiZXhhbXBsZXNUb3BUaHJlZSIsImV4YW1wbGVzQm90VGhyZWUiLCJleGFtcGxlc1RvcEZvdXIiLCJleGFtcGxlc0JvdEZvdXIiLCJleGFtcGxlc1RvcEZpdmUiLCJleGFtcGxlc0JvdEZpdmUiLCJqc1RyaWdnZXJzIiwianNDb250ZW50cyIsInRyaWdnZXIiLCJhY3RpdmVUcmlnZ2VyIiwiYWN0aXZlQ29udGVudCIsInNlcnZpY2VzVG9vbHRpcCIsImRpc3BsYXkiLCJ0aXBweSIsIm1heFdpZHRoIiwiZmVlZGJhY2tUb29sdGlwIiwiaW50ZXJhY3RpdmUiLCJhcnJvdyIsImZlZWRiYWNrVG9vbHRpcFR3byIsInN2ZzRldmVyeWJvZHkiLCJvYmplY3RGaXRJbWFnZXMiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJB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SDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyRUFBMkU7QUFDM0U7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSx1QkFBdUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsZUFBZSw2QkFBNkI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZDQUE2QywrQkFBK0I7QUFDNUU7O0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTs7QUFFQTtBQUNBLFFBQVEsSUFBcUM7QUFDN0M7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILGtCQUFrQjtBQUNsQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTyxFQUFFO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0EsOEJBQThCLG1FQUFZLDRDQUE0QztBQUN0RjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsUUFBUSxJQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLElBQXFDO0FBQzdDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCxvQkFBb0I7QUFDakY7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSxRQUFRLElBQXFDO0FBQzdDO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUM7O0FBRWpDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSxJQUFxQztBQUM3QztBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLElBQXFDO0FBQzdDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEsSUFBcUM7QUFDN0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDRCQUE0QjtBQUM1QjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSxJQUFxQztBQUM3QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVLElBQXFDO0FBQy9DO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0Esc0VBQXNFO0FBQ3RFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFYyxvRUFBSyxFQUFDO0FBQzBHO0FBQy9IOzs7Ozs7Ozs7Ozs7QUNoNEVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQSxTQUFTQSxRQUFULEdBQW9CO0FBQ25CLE1BQUksS0FBS0MsU0FBTCxDQUFl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QztBQUVBQyx3REFBSyxDQUFDLG9CQUFELEVBQXVCO0FBQzNCckQsU0FBTyxFQUFFdUQsZUFEa0I7QUFFM0JQLFNBQU8sRUFBRSxPQUZrQjtBQUczQk0sVUFBUSxFQUFFLEdBSGlCO0FBSTNCRSxhQUFXLEVBQUUsSUFKYztBQUszQkMsT0FBSyxFQUFFO0FBTG9CLENBQXZCLENBQUw7QUFRQSxJQUFNQyxrQkFBa0IsR0FBR3hHLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qix3QkFBdkIsQ0FBM0I7QUFDQXVHLGtCQUFrQixDQUFDakcsS0FBbkIsQ0FBeUIyRixPQUF6QixHQUFtQyxPQUFuQztBQUVBQyx3REFBSyxDQUFDLHdCQUFELEVBQTJCO0FBQy9CckQsU0FBTyxFQUFFMEQsa0JBRHNCO0FBRS9CVixTQUFPLEVBQUUsT0FGc0I7QUFHL0JNLFVBQVEsRUFBRSxHQUhxQjtBQUkvQkUsYUFBVyxFQUFFLElBSmtCO0FBSy9CQyxPQUFLLEVBQUU7QUFMd0IsQ0FBM0IsQ0FBTCxDOzs7Ozs7Ozs7Ozs7QUMxQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Q0FHQTtBQUNBOztBQUVBO0NBR0E7QUFFQTs7QUFDQTtDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7Q0FFQTs7QUFHQUUsb0RBQWE7QUFDYkMsd0RBQWUsRyxDQUVmLGtEIiwiZmlsZSI6InNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc2NyaXB0LmpzXCIpO1xuIiwiaW1wb3J0IGdldENvbXBvc2l0ZVJlY3QgZnJvbSBcIi4vZG9tLXV0aWxzL2dldENvbXBvc2l0ZVJlY3QuanNcIjtcbmltcG9ydCBnZXRMYXlvdXRSZWN0IGZyb20gXCIuL2RvbS11dGlscy9nZXRMYXlvdXRSZWN0LmpzXCI7XG5pbXBvcnQgbGlzdFNjcm9sbFBhcmVudHMgZnJvbSBcIi4vZG9tLXV0aWxzL2xpc3RTY3JvbGxQYXJlbnRzLmpzXCI7XG5pbXBvcnQgZ2V0T2Zmc2V0UGFyZW50IGZyb20gXCIuL2RvbS11dGlscy9nZXRPZmZzZXRQYXJlbnQuanNcIjtcbmltcG9ydCBnZXRDb21wdXRlZFN0eWxlIGZyb20gXCIuL2RvbS11dGlscy9nZXRDb21wdXRlZFN0eWxlLmpzXCI7XG5pbXBvcnQgb3JkZXJNb2RpZmllcnMgZnJvbSBcIi4vdXRpbHMvb3JkZXJNb2RpZmllcnMuanNcIjtcbmltcG9ydCBkZWJvdW5jZSBmcm9tIFwiLi91dGlscy9kZWJvdW5jZS5qc1wiO1xuaW1wb3J0IHZhbGlkYXRlTW9kaWZpZXJzIGZyb20gXCIuL3V0aWxzL3ZhbGlkYXRlTW9kaWZpZXJzLmpzXCI7XG5pbXBvcnQgdW5pcXVlQnkgZnJvbSBcIi4vdXRpbHMvdW5pcXVlQnkuanNcIjtcbmltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuL3V0aWxzL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmltcG9ydCBtZXJnZUJ5TmFtZSBmcm9tIFwiLi91dGlscy9tZXJnZUJ5TmFtZS5qc1wiO1xuaW1wb3J0IGRldGVjdE92ZXJmbG93IGZyb20gXCIuL3V0aWxzL2RldGVjdE92ZXJmbG93LmpzXCI7XG5pbXBvcnQgeyBpc0VsZW1lbnQgfSBmcm9tIFwiLi9kb20tdXRpbHMvaW5zdGFuY2VPZi5qc1wiO1xuaW1wb3J0IHsgYXV0byB9IGZyb20gXCIuL2VudW1zLmpzXCI7XG52YXIgSU5WQUxJRF9FTEVNRU5UX0VSUk9SID0gJ1BvcHBlcjogSW52YWxpZCByZWZlcmVuY2Ugb3IgcG9wcGVyIGFyZ3VtZW50IHByb3ZpZGVkLiBUaGV5IG11c3QgYmUgZWl0aGVyIGEgRE9NIGVsZW1lbnQgb3IgdmlydHVhbCBlbGVtZW50Lic7XG52YXIgSU5GSU5JVEVfTE9PUF9FUlJPUiA9ICdQb3BwZXI6IEFuIGluZmluaXRlIGxvb3AgaW4gdGhlIG1vZGlmaWVycyBjeWNsZSBoYXMgYmVlbiBkZXRlY3RlZCEgVGhlIGN5Y2xlIGhhcyBiZWVuIGludGVycnVwdGVkIHRvIHByZXZlbnQgYSBicm93c2VyIGNyYXNoLic7XG52YXIgREVGQVVMVF9PUFRJT05TID0ge1xuICBwbGFjZW1lbnQ6ICdib3R0b20nLFxuICBtb2RpZmllcnM6IFtdLFxuICBzdHJhdGVneTogJ2Fic29sdXRlJ1xufTtcblxuZnVuY3Rpb24gYXJlVmFsaWRFbGVtZW50cygpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiAhYXJncy5zb21lKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgcmV0dXJuICEoZWxlbWVudCAmJiB0eXBlb2YgZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QgPT09ICdmdW5jdGlvbicpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvcHBlckdlbmVyYXRvcihnZW5lcmF0b3JPcHRpb25zKSB7XG4gIGlmIChnZW5lcmF0b3JPcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBnZW5lcmF0b3JPcHRpb25zID0ge307XG4gIH1cblxuICB2YXIgX2dlbmVyYXRvck9wdGlvbnMgPSBnZW5lcmF0b3JPcHRpb25zLFxuICAgICAgX2dlbmVyYXRvck9wdGlvbnMkZGVmID0gX2dlbmVyYXRvck9wdGlvbnMuZGVmYXVsdE1vZGlmaWVycyxcbiAgICAgIGRlZmF1bHRNb2RpZmllcnMgPSBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYgPT09IHZvaWQgMCA/IFtdIDogX2dlbmVyYXRvck9wdGlvbnMkZGVmLFxuICAgICAgX2dlbmVyYXRvck9wdGlvbnMkZGVmMiA9IF9nZW5lcmF0b3JPcHRpb25zLmRlZmF1bHRPcHRpb25zLFxuICAgICAgZGVmYXVsdE9wdGlvbnMgPSBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYyID09PSB2b2lkIDAgPyBERUZBVUxUX09QVElPTlMgOiBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYyO1xuICByZXR1cm4gZnVuY3Rpb24gY3JlYXRlUG9wcGVyKHJlZmVyZW5jZSwgcG9wcGVyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0aW9ucyA9IGRlZmF1bHRPcHRpb25zO1xuICAgIH1cblxuICAgIHZhciBzdGF0ZSA9IHtcbiAgICAgIHBsYWNlbWVudDogJ2JvdHRvbScsXG4gICAgICBvcmRlcmVkTW9kaWZpZXJzOiBbXSxcbiAgICAgIG9wdGlvbnM6IE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfT1BUSU9OUywgZGVmYXVsdE9wdGlvbnMpLFxuICAgICAgbW9kaWZpZXJzRGF0YToge30sXG4gICAgICBlbGVtZW50czoge1xuICAgICAgICByZWZlcmVuY2U6IHJlZmVyZW5jZSxcbiAgICAgICAgcG9wcGVyOiBwb3BwZXJcbiAgICAgIH0sXG4gICAgICBhdHRyaWJ1dGVzOiB7fSxcbiAgICAgIHN0eWxlczoge31cbiAgICB9O1xuICAgIHZhciBlZmZlY3RDbGVhbnVwRm5zID0gW107XG4gICAgdmFyIGlzRGVzdHJveWVkID0gZmFsc2U7XG4gICAgdmFyIGluc3RhbmNlID0ge1xuICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgc2V0T3B0aW9uczogZnVuY3Rpb24gc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgICAgIGNsZWFudXBNb2RpZmllckVmZmVjdHMoKTtcbiAgICAgICAgc3RhdGUub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRPcHRpb25zLCBzdGF0ZS5vcHRpb25zLCBvcHRpb25zKTtcbiAgICAgICAgc3RhdGUuc2Nyb2xsUGFyZW50cyA9IHtcbiAgICAgICAgICByZWZlcmVuY2U6IGlzRWxlbWVudChyZWZlcmVuY2UpID8gbGlzdFNjcm9sbFBhcmVudHMocmVmZXJlbmNlKSA6IHJlZmVyZW5jZS5jb250ZXh0RWxlbWVudCA/IGxpc3RTY3JvbGxQYXJlbnRzKHJlZmVyZW5jZS5jb250ZXh0RWxlbWVudCkgOiBbXSxcbiAgICAgICAgICBwb3BwZXI6IGxpc3RTY3JvbGxQYXJlbnRzKHBvcHBlcilcbiAgICAgICAgfTsgLy8gT3JkZXJzIHRoZSBtb2RpZmllcnMgYmFzZWQgb24gdGhlaXIgZGVwZW5kZW5jaWVzIGFuZCBgcGhhc2VgXG4gICAgICAgIC8vIHByb3BlcnRpZXNcblxuICAgICAgICB2YXIgb3JkZXJlZE1vZGlmaWVycyA9IG9yZGVyTW9kaWZpZXJzKG1lcmdlQnlOYW1lKFtdLmNvbmNhdChkZWZhdWx0TW9kaWZpZXJzLCBzdGF0ZS5vcHRpb25zLm1vZGlmaWVycykpKTsgLy8gU3RyaXAgb3V0IGRpc2FibGVkIG1vZGlmaWVyc1xuXG4gICAgICAgIHN0YXRlLm9yZGVyZWRNb2RpZmllcnMgPSBvcmRlcmVkTW9kaWZpZXJzLmZpbHRlcihmdW5jdGlvbiAobSkge1xuICAgICAgICAgIHJldHVybiBtLmVuYWJsZWQ7XG4gICAgICAgIH0pOyAvLyBWYWxpZGF0ZSB0aGUgcHJvdmlkZWQgbW9kaWZpZXJzIHNvIHRoYXQgdGhlIGNvbnN1bWVyIHdpbGwgZ2V0IHdhcm5lZFxuICAgICAgICAvLyBpZiBvbmUgb2YgdGhlIG1vZGlmaWVycyBpcyBpbnZhbGlkIGZvciBhbnkgcmVhc29uXG5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICAgIHZhciBtb2RpZmllcnMgPSB1bmlxdWVCeShbXS5jb25jYXQob3JkZXJlZE1vZGlmaWVycywgc3RhdGUub3B0aW9ucy5tb2RpZmllcnMpLCBmdW5jdGlvbiAoX3JlZikge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBfcmVmLm5hbWU7XG4gICAgICAgICAgICByZXR1cm4gbmFtZTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB2YWxpZGF0ZU1vZGlmaWVycyhtb2RpZmllcnMpO1xuXG4gICAgICAgICAgaWYgKGdldEJhc2VQbGFjZW1lbnQoc3RhdGUub3B0aW9ucy5wbGFjZW1lbnQpID09PSBhdXRvKSB7XG4gICAgICAgICAgICB2YXIgZmxpcE1vZGlmaWVyID0gc3RhdGUub3JkZXJlZE1vZGlmaWVycy5maW5kKGZ1bmN0aW9uIChfcmVmMikge1xuICAgICAgICAgICAgICB2YXIgbmFtZSA9IF9yZWYyLm5hbWU7XG4gICAgICAgICAgICAgIHJldHVybiBuYW1lID09PSAnZmxpcCc7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKCFmbGlwTW9kaWZpZXIpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihbJ1BvcHBlcjogXCJhdXRvXCIgcGxhY2VtZW50cyByZXF1aXJlIHRoZSBcImZsaXBcIiBtb2RpZmllciBiZScsICdwcmVzZW50IGFuZCBlbmFibGVkIHRvIHdvcmsuJ10uam9pbignICcpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgX2dldENvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHBvcHBlciksXG4gICAgICAgICAgICAgIG1hcmdpblRvcCA9IF9nZXRDb21wdXRlZFN0eWxlLm1hcmdpblRvcCxcbiAgICAgICAgICAgICAgbWFyZ2luUmlnaHQgPSBfZ2V0Q29tcHV0ZWRTdHlsZS5tYXJnaW5SaWdodCxcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tID0gX2dldENvbXB1dGVkU3R5bGUubWFyZ2luQm90dG9tLFxuICAgICAgICAgICAgICBtYXJnaW5MZWZ0ID0gX2dldENvbXB1dGVkU3R5bGUubWFyZ2luTGVmdDsgLy8gV2Ugbm8gbG9uZ2VyIHRha2UgaW50byBhY2NvdW50IGBtYXJnaW5zYCBvbiB0aGUgcG9wcGVyLCBhbmQgaXQgY2FuXG4gICAgICAgICAgLy8gY2F1c2UgYnVncyB3aXRoIHBvc2l0aW9uaW5nLCBzbyB3ZSdsbCB3YXJuIHRoZSBjb25zdW1lclxuXG5cbiAgICAgICAgICBpZiAoW21hcmdpblRvcCwgbWFyZ2luUmlnaHQsIG1hcmdpbkJvdHRvbSwgbWFyZ2luTGVmdF0uc29tZShmdW5jdGlvbiAobWFyZ2luKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChtYXJnaW4pO1xuICAgICAgICAgIH0pKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oWydQb3BwZXI6IENTUyBcIm1hcmdpblwiIHN0eWxlcyBjYW5ub3QgYmUgdXNlZCB0byBhcHBseSBwYWRkaW5nJywgJ2JldHdlZW4gdGhlIHBvcHBlciBhbmQgaXRzIHJlZmVyZW5jZSBlbGVtZW50IG9yIGJvdW5kYXJ5LicsICdUbyByZXBsaWNhdGUgbWFyZ2luLCB1c2UgdGhlIGBvZmZzZXRgIG1vZGlmaWVyLCBhcyB3ZWxsIGFzJywgJ3RoZSBgcGFkZGluZ2Agb3B0aW9uIGluIHRoZSBgcHJldmVudE92ZXJmbG93YCBhbmQgYGZsaXBgJywgJ21vZGlmaWVycy4nXS5qb2luKCcgJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJ1bk1vZGlmaWVyRWZmZWN0cygpO1xuICAgICAgICByZXR1cm4gaW5zdGFuY2UudXBkYXRlKCk7XG4gICAgICB9LFxuICAgICAgLy8gU3luYyB1cGRhdGUg4oCTIGl0IHdpbGwgYWx3YXlzIGJlIGV4ZWN1dGVkLCBldmVuIGlmIG5vdCBuZWNlc3NhcnkuIFRoaXNcbiAgICAgIC8vIGlzIHVzZWZ1bCBmb3IgbG93IGZyZXF1ZW5jeSB1cGRhdGVzIHdoZXJlIHN5bmMgYmVoYXZpb3Igc2ltcGxpZmllcyB0aGVcbiAgICAgIC8vIGxvZ2ljLlxuICAgICAgLy8gRm9yIGhpZ2ggZnJlcXVlbmN5IHVwZGF0ZXMgKGUuZy4gYHJlc2l6ZWAgYW5kIGBzY3JvbGxgIGV2ZW50cyksIGFsd2F5c1xuICAgICAgLy8gcHJlZmVyIHRoZSBhc3luYyBQb3BwZXIjdXBkYXRlIG1ldGhvZFxuICAgICAgZm9yY2VVcGRhdGU6IGZ1bmN0aW9uIGZvcmNlVXBkYXRlKCkge1xuICAgICAgICBpZiAoaXNEZXN0cm95ZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgX3N0YXRlJGVsZW1lbnRzID0gc3RhdGUuZWxlbWVudHMsXG4gICAgICAgICAgICByZWZlcmVuY2UgPSBfc3RhdGUkZWxlbWVudHMucmVmZXJlbmNlLFxuICAgICAgICAgICAgcG9wcGVyID0gX3N0YXRlJGVsZW1lbnRzLnBvcHBlcjsgLy8gRG9uJ3QgcHJvY2VlZCBpZiBgcmVmZXJlbmNlYCBvciBgcG9wcGVyYCBhcmUgbm90IHZhbGlkIGVsZW1lbnRzXG4gICAgICAgIC8vIGFueW1vcmVcblxuICAgICAgICBpZiAoIWFyZVZhbGlkRWxlbWVudHMocmVmZXJlbmNlLCBwb3BwZXIpKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihJTlZBTElEX0VMRU1FTlRfRVJST1IpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSAvLyBTdG9yZSB0aGUgcmVmZXJlbmNlIGFuZCBwb3BwZXIgcmVjdHMgdG8gYmUgcmVhZCBieSBtb2RpZmllcnNcblxuXG4gICAgICAgIHN0YXRlLnJlY3RzID0ge1xuICAgICAgICAgIHJlZmVyZW5jZTogZ2V0Q29tcG9zaXRlUmVjdChyZWZlcmVuY2UsIGdldE9mZnNldFBhcmVudChwb3BwZXIpLCBzdGF0ZS5vcHRpb25zLnN0cmF0ZWd5ID09PSAnZml4ZWQnKSxcbiAgICAgICAgICBwb3BwZXI6IGdldExheW91dFJlY3QocG9wcGVyKVxuICAgICAgICB9OyAvLyBNb2RpZmllcnMgaGF2ZSB0aGUgYWJpbGl0eSB0byByZXNldCB0aGUgY3VycmVudCB1cGRhdGUgY3ljbGUuIFRoZVxuICAgICAgICAvLyBtb3N0IGNvbW1vbiB1c2UgY2FzZSBmb3IgdGhpcyBpcyB0aGUgYGZsaXBgIG1vZGlmaWVyIGNoYW5naW5nIHRoZVxuICAgICAgICAvLyBwbGFjZW1lbnQsIHdoaWNoIHRoZW4gbmVlZHMgdG8gcmUtcnVuIGFsbCB0aGUgbW9kaWZpZXJzLCBiZWNhdXNlIHRoZVxuICAgICAgICAvLyBsb2dpYyB3YXMgcHJldmlvdXNseSByYW4gZm9yIHRoZSBwcmV2aW91cyBwbGFjZW1lbnQgYW5kIGlzIHRoZXJlZm9yZVxuICAgICAgICAvLyBzdGFsZS9pbmNvcnJlY3RcblxuICAgICAgICBzdGF0ZS5yZXNldCA9IGZhbHNlO1xuICAgICAgICBzdGF0ZS5wbGFjZW1lbnQgPSBzdGF0ZS5vcHRpb25zLnBsYWNlbWVudDsgLy8gT24gZWFjaCB1cGRhdGUgY3ljbGUsIHRoZSBgbW9kaWZpZXJzRGF0YWAgcHJvcGVydHkgZm9yIGVhY2ggbW9kaWZpZXJcbiAgICAgICAgLy8gaXMgZmlsbGVkIHdpdGggdGhlIGluaXRpYWwgZGF0YSBzcGVjaWZpZWQgYnkgdGhlIG1vZGlmaWVyLiBUaGlzIG1lYW5zXG4gICAgICAgIC8vIGl0IGRvZXNuJ3QgcGVyc2lzdCBhbmQgaXMgZnJlc2ggb24gZWFjaCB1cGRhdGUuXG4gICAgICAgIC8vIFRvIGVuc3VyZSBwZXJzaXN0ZW50IGRhdGEsIHVzZSBgJHtuYW1lfSNwZXJzaXN0ZW50YFxuXG4gICAgICAgIHN0YXRlLm9yZGVyZWRNb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICAgICAgICByZXR1cm4gc3RhdGUubW9kaWZpZXJzRGF0YVttb2RpZmllci5uYW1lXSA9IE9iamVjdC5hc3NpZ24oe30sIG1vZGlmaWVyLmRhdGEpO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIF9fZGVidWdfbG9vcHNfXyA9IDA7XG5cbiAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHN0YXRlLm9yZGVyZWRNb2RpZmllcnMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICAgICAgX19kZWJ1Z19sb29wc19fICs9IDE7XG5cbiAgICAgICAgICAgIGlmIChfX2RlYnVnX2xvb3BzX18gPiAxMDApIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihJTkZJTklURV9MT09QX0VSUk9SKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHN0YXRlLnJlc2V0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICBzdGF0ZS5yZXNldCA9IGZhbHNlO1xuICAgICAgICAgICAgaW5kZXggPSAtMTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBfc3RhdGUkb3JkZXJlZE1vZGlmaWUgPSBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzW2luZGV4XSxcbiAgICAgICAgICAgICAgZm4gPSBfc3RhdGUkb3JkZXJlZE1vZGlmaWUuZm4sXG4gICAgICAgICAgICAgIF9zdGF0ZSRvcmRlcmVkTW9kaWZpZTIgPSBfc3RhdGUkb3JkZXJlZE1vZGlmaWUub3B0aW9ucyxcbiAgICAgICAgICAgICAgX29wdGlvbnMgPSBfc3RhdGUkb3JkZXJlZE1vZGlmaWUyID09PSB2b2lkIDAgPyB7fSA6IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZTIsXG4gICAgICAgICAgICAgIG5hbWUgPSBfc3RhdGUkb3JkZXJlZE1vZGlmaWUubmFtZTtcblxuICAgICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHN0YXRlID0gZm4oe1xuICAgICAgICAgICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICAgICAgICAgIG9wdGlvbnM6IF9vcHRpb25zLFxuICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICBpbnN0YW5jZTogaW5zdGFuY2VcbiAgICAgICAgICAgIH0pIHx8IHN0YXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIEFzeW5jIGFuZCBvcHRpbWlzdGljYWxseSBvcHRpbWl6ZWQgdXBkYXRlIOKAkyBpdCB3aWxsIG5vdCBiZSBleGVjdXRlZCBpZlxuICAgICAgLy8gbm90IG5lY2Vzc2FyeSAoZGVib3VuY2VkIHRvIHJ1biBhdCBtb3N0IG9uY2UtcGVyLXRpY2spXG4gICAgICB1cGRhdGU6IGRlYm91bmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgaW5zdGFuY2UuZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgICByZXNvbHZlKHN0YXRlKTtcbiAgICAgICAgfSk7XG4gICAgICB9KSxcbiAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgIGNsZWFudXBNb2RpZmllckVmZmVjdHMoKTtcbiAgICAgICAgaXNEZXN0cm95ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoIWFyZVZhbGlkRWxlbWVudHMocmVmZXJlbmNlLCBwb3BwZXIpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoSU5WQUxJRF9FTEVNRU5UX0VSUk9SKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cblxuICAgIGluc3RhbmNlLnNldE9wdGlvbnMob3B0aW9ucykudGhlbihmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgIGlmICghaXNEZXN0cm95ZWQgJiYgb3B0aW9ucy5vbkZpcnN0VXBkYXRlKSB7XG4gICAgICAgIG9wdGlvbnMub25GaXJzdFVwZGF0ZShzdGF0ZSk7XG4gICAgICB9XG4gICAgfSk7IC8vIE1vZGlmaWVycyBoYXZlIHRoZSBhYmlsaXR5IHRvIGV4ZWN1dGUgYXJiaXRyYXJ5IGNvZGUgYmVmb3JlIHRoZSBmaXJzdFxuICAgIC8vIHVwZGF0ZSBjeWNsZSBydW5zLiBUaGV5IHdpbGwgYmUgZXhlY3V0ZWQgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlIHVwZGF0ZVxuICAgIC8vIGN5Y2xlLiBUaGlzIGlzIHVzZWZ1bCB3aGVuIGEgbW9kaWZpZXIgYWRkcyBzb21lIHBlcnNpc3RlbnQgZGF0YSB0aGF0XG4gICAgLy8gb3RoZXIgbW9kaWZpZXJzIG5lZWQgdG8gdXNlLCBidXQgdGhlIG1vZGlmaWVyIGlzIHJ1biBhZnRlciB0aGUgZGVwZW5kZW50XG4gICAgLy8gb25lLlxuXG4gICAgZnVuY3Rpb24gcnVuTW9kaWZpZXJFZmZlY3RzKCkge1xuICAgICAgc3RhdGUub3JkZXJlZE1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmMykge1xuICAgICAgICB2YXIgbmFtZSA9IF9yZWYzLm5hbWUsXG4gICAgICAgICAgICBfcmVmMyRvcHRpb25zID0gX3JlZjMub3B0aW9ucyxcbiAgICAgICAgICAgIG9wdGlvbnMgPSBfcmVmMyRvcHRpb25zID09PSB2b2lkIDAgPyB7fSA6IF9yZWYzJG9wdGlvbnMsXG4gICAgICAgICAgICBlZmZlY3QgPSBfcmVmMy5lZmZlY3Q7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBlZmZlY3QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB2YXIgY2xlYW51cEZuID0gZWZmZWN0KHtcbiAgICAgICAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICBpbnN0YW5jZTogaW5zdGFuY2UsXG4gICAgICAgICAgICBvcHRpb25zOiBvcHRpb25zXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB2YXIgbm9vcEZuID0gZnVuY3Rpb24gbm9vcEZuKCkge307XG5cbiAgICAgICAgICBlZmZlY3RDbGVhbnVwRm5zLnB1c2goY2xlYW51cEZuIHx8IG5vb3BGbik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFudXBNb2RpZmllckVmZmVjdHMoKSB7XG4gICAgICBlZmZlY3RDbGVhbnVwRm5zLmZvckVhY2goZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgIHJldHVybiBmbigpO1xuICAgICAgfSk7XG4gICAgICBlZmZlY3RDbGVhbnVwRm5zID0gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9O1xufVxuZXhwb3J0IHZhciBjcmVhdGVQb3BwZXIgPSAvKiNfX1BVUkVfXyovcG9wcGVyR2VuZXJhdG9yKCk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZXhwb3J0IHsgZGV0ZWN0T3ZlcmZsb3cgfTsiLCJpbXBvcnQgeyBpc1NoYWRvd1Jvb3QgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250YWlucyhwYXJlbnQsIGNoaWxkKSB7XG4gIHZhciByb290Tm9kZSA9IGNoaWxkLmdldFJvb3ROb2RlICYmIGNoaWxkLmdldFJvb3ROb2RlKCk7IC8vIEZpcnN0LCBhdHRlbXB0IHdpdGggZmFzdGVyIG5hdGl2ZSBtZXRob2RcblxuICBpZiAocGFyZW50LmNvbnRhaW5zKGNoaWxkKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIHRoZW4gZmFsbGJhY2sgdG8gY3VzdG9tIGltcGxlbWVudGF0aW9uIHdpdGggU2hhZG93IERPTSBzdXBwb3J0XG4gIGVsc2UgaWYgKHJvb3ROb2RlICYmIGlzU2hhZG93Um9vdChyb290Tm9kZSkpIHtcbiAgICAgIHZhciBuZXh0ID0gY2hpbGQ7XG5cbiAgICAgIGRvIHtcbiAgICAgICAgaWYgKG5leHQgJiYgcGFyZW50LmlzU2FtZU5vZGUobmV4dCkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ106IG5lZWQgYSBiZXR0ZXIgd2F5IHRvIGhhbmRsZSB0aGlzLi4uXG5cblxuICAgICAgICBuZXh0ID0gbmV4dC5wYXJlbnROb2RlIHx8IG5leHQuaG9zdDtcbiAgICAgIH0gd2hpbGUgKG5leHQpO1xuICAgIH0gLy8gR2l2ZSB1cCwgdGhlIHJlc3VsdCBpcyBmYWxzZVxuXG5cbiAgcmV0dXJuIGZhbHNlO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50KSB7XG4gIHZhciByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogcmVjdC53aWR0aCxcbiAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0LFxuICAgIHRvcDogcmVjdC50b3AsXG4gICAgcmlnaHQ6IHJlY3QucmlnaHQsXG4gICAgYm90dG9tOiByZWN0LmJvdHRvbSxcbiAgICBsZWZ0OiByZWN0LmxlZnQsXG4gICAgeDogcmVjdC5sZWZ0LFxuICAgIHk6IHJlY3QudG9wXG4gIH07XG59IiwiaW1wb3J0IHsgdmlld3BvcnQgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCBnZXRWaWV3cG9ydFJlY3QgZnJvbSBcIi4vZ2V0Vmlld3BvcnRSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRSZWN0IGZyb20gXCIuL2dldERvY3VtZW50UmVjdC5qc1wiO1xuaW1wb3J0IGxpc3RTY3JvbGxQYXJlbnRzIGZyb20gXCIuL2xpc3RTY3JvbGxQYXJlbnRzLmpzXCI7XG5pbXBvcnQgZ2V0T2Zmc2V0UGFyZW50IGZyb20gXCIuL2dldE9mZnNldFBhcmVudC5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCBnZXRDb21wdXRlZFN0eWxlIGZyb20gXCIuL2dldENvbXB1dGVkU3R5bGUuanNcIjtcbmltcG9ydCB7IGlzRWxlbWVudCwgaXNIVE1MRWxlbWVudCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmltcG9ydCBnZXRCb3VuZGluZ0NsaWVudFJlY3QgZnJvbSBcIi4vZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0UGFyZW50Tm9kZSBmcm9tIFwiLi9nZXRQYXJlbnROb2RlLmpzXCI7XG5pbXBvcnQgY29udGFpbnMgZnJvbSBcIi4vY29udGFpbnMuanNcIjtcbmltcG9ydCBnZXROb2RlTmFtZSBmcm9tIFwiLi9nZXROb2RlTmFtZS5qc1wiO1xuaW1wb3J0IHJlY3RUb0NsaWVudFJlY3QgZnJvbSBcIi4uL3V0aWxzL3JlY3RUb0NsaWVudFJlY3QuanNcIjtcbmltcG9ydCB7IG1heCwgbWluIH0gZnJvbSBcIi4uL3V0aWxzL21hdGguanNcIjtcblxuZnVuY3Rpb24gZ2V0SW5uZXJCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCkge1xuICB2YXIgcmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50KTtcbiAgcmVjdC50b3AgPSByZWN0LnRvcCArIGVsZW1lbnQuY2xpZW50VG9wO1xuICByZWN0LmxlZnQgPSByZWN0LmxlZnQgKyBlbGVtZW50LmNsaWVudExlZnQ7XG4gIHJlY3QuYm90dG9tID0gcmVjdC50b3AgKyBlbGVtZW50LmNsaWVudEhlaWdodDtcbiAgcmVjdC5yaWdodCA9IHJlY3QubGVmdCArIGVsZW1lbnQuY2xpZW50V2lkdGg7XG4gIHJlY3Qud2lkdGggPSBlbGVtZW50LmNsaWVudFdpZHRoO1xuICByZWN0LmhlaWdodCA9IGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICByZWN0LnggPSByZWN0LmxlZnQ7XG4gIHJlY3QueSA9IHJlY3QudG9wO1xuICByZXR1cm4gcmVjdDtcbn1cblxuZnVuY3Rpb24gZ2V0Q2xpZW50UmVjdEZyb21NaXhlZFR5cGUoZWxlbWVudCwgY2xpcHBpbmdQYXJlbnQpIHtcbiAgcmV0dXJuIGNsaXBwaW5nUGFyZW50ID09PSB2aWV3cG9ydCA/IHJlY3RUb0NsaWVudFJlY3QoZ2V0Vmlld3BvcnRSZWN0KGVsZW1lbnQpKSA6IGlzSFRNTEVsZW1lbnQoY2xpcHBpbmdQYXJlbnQpID8gZ2V0SW5uZXJCb3VuZGluZ0NsaWVudFJlY3QoY2xpcHBpbmdQYXJlbnQpIDogcmVjdFRvQ2xpZW50UmVjdChnZXREb2N1bWVudFJlY3QoZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpKSk7XG59IC8vIEEgXCJjbGlwcGluZyBwYXJlbnRcIiBpcyBhbiBvdmVyZmxvd2FibGUgY29udGFpbmVyIHdpdGggdGhlIGNoYXJhY3RlcmlzdGljIG9mXG4vLyBjbGlwcGluZyAob3IgaGlkaW5nKSBvdmVyZmxvd2luZyBlbGVtZW50cyB3aXRoIGEgcG9zaXRpb24gZGlmZmVyZW50IGZyb21cbi8vIGBpbml0aWFsYFxuXG5cbmZ1bmN0aW9uIGdldENsaXBwaW5nUGFyZW50cyhlbGVtZW50KSB7XG4gIHZhciBjbGlwcGluZ1BhcmVudHMgPSBsaXN0U2Nyb2xsUGFyZW50cyhnZXRQYXJlbnROb2RlKGVsZW1lbnQpKTtcbiAgdmFyIGNhbkVzY2FwZUNsaXBwaW5nID0gWydhYnNvbHV0ZScsICdmaXhlZCddLmluZGV4T2YoZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5wb3NpdGlvbikgPj0gMDtcbiAgdmFyIGNsaXBwZXJFbGVtZW50ID0gY2FuRXNjYXBlQ2xpcHBpbmcgJiYgaXNIVE1MRWxlbWVudChlbGVtZW50KSA/IGdldE9mZnNldFBhcmVudChlbGVtZW50KSA6IGVsZW1lbnQ7XG5cbiAgaWYgKCFpc0VsZW1lbnQoY2xpcHBlckVsZW1lbnQpKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9IC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXJldHVybl06IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9mbG93L2lzc3Vlcy8xNDE0XG5cblxuICByZXR1cm4gY2xpcHBpbmdQYXJlbnRzLmZpbHRlcihmdW5jdGlvbiAoY2xpcHBpbmdQYXJlbnQpIHtcbiAgICByZXR1cm4gaXNFbGVtZW50KGNsaXBwaW5nUGFyZW50KSAmJiBjb250YWlucyhjbGlwcGluZ1BhcmVudCwgY2xpcHBlckVsZW1lbnQpICYmIGdldE5vZGVOYW1lKGNsaXBwaW5nUGFyZW50KSAhPT0gJ2JvZHknO1xuICB9KTtcbn0gLy8gR2V0cyB0aGUgbWF4aW11bSBhcmVhIHRoYXQgdGhlIGVsZW1lbnQgaXMgdmlzaWJsZSBpbiBkdWUgdG8gYW55IG51bWJlciBvZlxuLy8gY2xpcHBpbmcgcGFyZW50c1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldENsaXBwaW5nUmVjdChlbGVtZW50LCBib3VuZGFyeSwgcm9vdEJvdW5kYXJ5KSB7XG4gIHZhciBtYWluQ2xpcHBpbmdQYXJlbnRzID0gYm91bmRhcnkgPT09ICdjbGlwcGluZ1BhcmVudHMnID8gZ2V0Q2xpcHBpbmdQYXJlbnRzKGVsZW1lbnQpIDogW10uY29uY2F0KGJvdW5kYXJ5KTtcbiAgdmFyIGNsaXBwaW5nUGFyZW50cyA9IFtdLmNvbmNhdChtYWluQ2xpcHBpbmdQYXJlbnRzLCBbcm9vdEJvdW5kYXJ5XSk7XG4gIHZhciBmaXJzdENsaXBwaW5nUGFyZW50ID0gY2xpcHBpbmdQYXJlbnRzWzBdO1xuICB2YXIgY2xpcHBpbmdSZWN0ID0gY2xpcHBpbmdQYXJlbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjUmVjdCwgY2xpcHBpbmdQYXJlbnQpIHtcbiAgICB2YXIgcmVjdCA9IGdldENsaWVudFJlY3RGcm9tTWl4ZWRUeXBlKGVsZW1lbnQsIGNsaXBwaW5nUGFyZW50KTtcbiAgICBhY2NSZWN0LnRvcCA9IG1heChyZWN0LnRvcCwgYWNjUmVjdC50b3ApO1xuICAgIGFjY1JlY3QucmlnaHQgPSBtaW4ocmVjdC5yaWdodCwgYWNjUmVjdC5yaWdodCk7XG4gICAgYWNjUmVjdC5ib3R0b20gPSBtaW4ocmVjdC5ib3R0b20sIGFjY1JlY3QuYm90dG9tKTtcbiAgICBhY2NSZWN0LmxlZnQgPSBtYXgocmVjdC5sZWZ0LCBhY2NSZWN0LmxlZnQpO1xuICAgIHJldHVybiBhY2NSZWN0O1xuICB9LCBnZXRDbGllbnRSZWN0RnJvbU1peGVkVHlwZShlbGVtZW50LCBmaXJzdENsaXBwaW5nUGFyZW50KSk7XG4gIGNsaXBwaW5nUmVjdC53aWR0aCA9IGNsaXBwaW5nUmVjdC5yaWdodCAtIGNsaXBwaW5nUmVjdC5sZWZ0O1xuICBjbGlwcGluZ1JlY3QuaGVpZ2h0ID0gY2xpcHBpbmdSZWN0LmJvdHRvbSAtIGNsaXBwaW5nUmVjdC50b3A7XG4gIGNsaXBwaW5nUmVjdC54ID0gY2xpcHBpbmdSZWN0LmxlZnQ7XG4gIGNsaXBwaW5nUmVjdC55ID0gY2xpcHBpbmdSZWN0LnRvcDtcbiAgcmV0dXJuIGNsaXBwaW5nUmVjdDtcbn0iLCJpbXBvcnQgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGZyb20gXCIuL2dldEJvdW5kaW5nQ2xpZW50UmVjdC5qc1wiO1xuaW1wb3J0IGdldE5vZGVTY3JvbGwgZnJvbSBcIi4vZ2V0Tm9kZVNjcm9sbC5qc1wiO1xuaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gXCIuL2dldE5vZGVOYW1lLmpzXCI7XG5pbXBvcnQgeyBpc0hUTUxFbGVtZW50IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuaW1wb3J0IGdldFdpbmRvd1Njcm9sbEJhclggZnJvbSBcIi4vZ2V0V2luZG93U2Nyb2xsQmFyWC5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCBpc1Njcm9sbFBhcmVudCBmcm9tIFwiLi9pc1Njcm9sbFBhcmVudC5qc1wiOyAvLyBSZXR1cm5zIHRoZSBjb21wb3NpdGUgcmVjdCBvZiBhbiBlbGVtZW50IHJlbGF0aXZlIHRvIGl0cyBvZmZzZXRQYXJlbnQuXG4vLyBDb21wb3NpdGUgbWVhbnMgaXQgdGFrZXMgaW50byBhY2NvdW50IHRyYW5zZm9ybXMgYXMgd2VsbCBhcyBsYXlvdXQuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldENvbXBvc2l0ZVJlY3QoZWxlbWVudE9yVmlydHVhbEVsZW1lbnQsIG9mZnNldFBhcmVudCwgaXNGaXhlZCkge1xuICBpZiAoaXNGaXhlZCA9PT0gdm9pZCAwKSB7XG4gICAgaXNGaXhlZCA9IGZhbHNlO1xuICB9XG5cbiAgdmFyIGRvY3VtZW50RWxlbWVudCA9IGdldERvY3VtZW50RWxlbWVudChvZmZzZXRQYXJlbnQpO1xuICB2YXIgcmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50T3JWaXJ0dWFsRWxlbWVudCk7XG4gIHZhciBpc09mZnNldFBhcmVudEFuRWxlbWVudCA9IGlzSFRNTEVsZW1lbnQob2Zmc2V0UGFyZW50KTtcbiAgdmFyIHNjcm9sbCA9IHtcbiAgICBzY3JvbGxMZWZ0OiAwLFxuICAgIHNjcm9sbFRvcDogMFxuICB9O1xuICB2YXIgb2Zmc2V0cyA9IHtcbiAgICB4OiAwLFxuICAgIHk6IDBcbiAgfTtcblxuICBpZiAoaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgfHwgIWlzT2Zmc2V0UGFyZW50QW5FbGVtZW50ICYmICFpc0ZpeGVkKSB7XG4gICAgaWYgKGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgIT09ICdib2R5JyB8fCAvLyBodHRwczovL2dpdGh1Yi5jb20vcG9wcGVyanMvcG9wcGVyLWNvcmUvaXNzdWVzLzEwNzhcbiAgICBpc1Njcm9sbFBhcmVudChkb2N1bWVudEVsZW1lbnQpKSB7XG4gICAgICBzY3JvbGwgPSBnZXROb2RlU2Nyb2xsKG9mZnNldFBhcmVudCk7XG4gICAgfVxuXG4gICAgaWYgKGlzSFRNTEVsZW1lbnQob2Zmc2V0UGFyZW50KSkge1xuICAgICAgb2Zmc2V0cyA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChvZmZzZXRQYXJlbnQpO1xuICAgICAgb2Zmc2V0cy54ICs9IG9mZnNldFBhcmVudC5jbGllbnRMZWZ0O1xuICAgICAgb2Zmc2V0cy55ICs9IG9mZnNldFBhcmVudC5jbGllbnRUb3A7XG4gICAgfSBlbHNlIGlmIChkb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIG9mZnNldHMueCA9IGdldFdpbmRvd1Njcm9sbEJhclgoZG9jdW1lbnRFbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHg6IHJlY3QubGVmdCArIHNjcm9sbC5zY3JvbGxMZWZ0IC0gb2Zmc2V0cy54LFxuICAgIHk6IHJlY3QudG9wICsgc2Nyb2xsLnNjcm9sbFRvcCAtIG9mZnNldHMueSxcbiAgICB3aWR0aDogcmVjdC53aWR0aCxcbiAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0XG4gIH07XG59IiwiaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkge1xuICByZXR1cm4gZ2V0V2luZG93KGVsZW1lbnQpLmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG59IiwiaW1wb3J0IHsgaXNFbGVtZW50IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpIHtcbiAgLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtcmV0dXJuXTogYXNzdW1lIGJvZHkgaXMgYWx3YXlzIGF2YWlsYWJsZVxuICByZXR1cm4gKChpc0VsZW1lbnQoZWxlbWVudCkgPyBlbGVtZW50Lm93bmVyRG9jdW1lbnQgOiAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ11cbiAgZWxlbWVudC5kb2N1bWVudCkgfHwgd2luZG93LmRvY3VtZW50KS5kb2N1bWVudEVsZW1lbnQ7XG59IiwiaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCBnZXRDb21wdXRlZFN0eWxlIGZyb20gXCIuL2dldENvbXB1dGVkU3R5bGUuanNcIjtcbmltcG9ydCBnZXRXaW5kb3dTY3JvbGxCYXJYIGZyb20gXCIuL2dldFdpbmRvd1Njcm9sbEJhclguanNcIjtcbmltcG9ydCBnZXRXaW5kb3dTY3JvbGwgZnJvbSBcIi4vZ2V0V2luZG93U2Nyb2xsLmpzXCI7XG5pbXBvcnQgeyBtYXggfSBmcm9tIFwiLi4vdXRpbHMvbWF0aC5qc1wiOyAvLyBHZXRzIHRoZSBlbnRpcmUgc2l6ZSBvZiB0aGUgc2Nyb2xsYWJsZSBkb2N1bWVudCBhcmVhLCBldmVuIGV4dGVuZGluZyBvdXRzaWRlXG4vLyBvZiB0aGUgYDxodG1sPmAgYW5kIGA8Ym9keT5gIHJlY3QgYm91bmRzIGlmIGhvcml6b250YWxseSBzY3JvbGxhYmxlXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldERvY3VtZW50UmVjdChlbGVtZW50KSB7XG4gIHZhciBfZWxlbWVudCRvd25lckRvY3VtZW47XG5cbiAgdmFyIGh0bWwgPSBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCk7XG4gIHZhciB3aW5TY3JvbGwgPSBnZXRXaW5kb3dTY3JvbGwoZWxlbWVudCk7XG4gIHZhciBib2R5ID0gKF9lbGVtZW50JG93bmVyRG9jdW1lbiA9IGVsZW1lbnQub3duZXJEb2N1bWVudCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9lbGVtZW50JG93bmVyRG9jdW1lbi5ib2R5O1xuICB2YXIgd2lkdGggPSBtYXgoaHRtbC5zY3JvbGxXaWR0aCwgaHRtbC5jbGllbnRXaWR0aCwgYm9keSA/IGJvZHkuc2Nyb2xsV2lkdGggOiAwLCBib2R5ID8gYm9keS5jbGllbnRXaWR0aCA6IDApO1xuICB2YXIgaGVpZ2h0ID0gbWF4KGh0bWwuc2Nyb2xsSGVpZ2h0LCBodG1sLmNsaWVudEhlaWdodCwgYm9keSA/IGJvZHkuc2Nyb2xsSGVpZ2h0IDogMCwgYm9keSA/IGJvZHkuY2xpZW50SGVpZ2h0IDogMCk7XG4gIHZhciB4ID0gLXdpblNjcm9sbC5zY3JvbGxMZWZ0ICsgZ2V0V2luZG93U2Nyb2xsQmFyWChlbGVtZW50KTtcbiAgdmFyIHkgPSAtd2luU2Nyb2xsLnNjcm9sbFRvcDtcblxuICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShib2R5IHx8IGh0bWwpLmRpcmVjdGlvbiA9PT0gJ3J0bCcpIHtcbiAgICB4ICs9IG1heChodG1sLmNsaWVudFdpZHRoLCBib2R5ID8gYm9keS5jbGllbnRXaWR0aCA6IDApIC0gd2lkdGg7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICB4OiB4LFxuICAgIHk6IHlcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRIVE1MRWxlbWVudFNjcm9sbChlbGVtZW50KSB7XG4gIHJldHVybiB7XG4gICAgc2Nyb2xsTGVmdDogZWxlbWVudC5zY3JvbGxMZWZ0LFxuICAgIHNjcm9sbFRvcDogZWxlbWVudC5zY3JvbGxUb3BcbiAgfTtcbn0iLCJpbXBvcnQgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGZyb20gXCIuL2dldEJvdW5kaW5nQ2xpZW50UmVjdC5qc1wiOyAvLyBSZXR1cm5zIHRoZSBsYXlvdXQgcmVjdCBvZiBhbiBlbGVtZW50IHJlbGF0aXZlIHRvIGl0cyBvZmZzZXRQYXJlbnQuIExheW91dFxuLy8gbWVhbnMgaXQgZG9lc24ndCB0YWtlIGludG8gYWNjb3VudCB0cmFuc2Zvcm1zLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRMYXlvdXRSZWN0KGVsZW1lbnQpIHtcbiAgdmFyIGNsaWVudFJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCk7IC8vIFVzZSB0aGUgY2xpZW50UmVjdCBzaXplcyBpZiBpdCdzIG5vdCBiZWVuIHRyYW5zZm9ybWVkLlxuICAvLyBGaXhlcyBodHRwczovL2dpdGh1Yi5jb20vcG9wcGVyanMvcG9wcGVyLWNvcmUvaXNzdWVzLzEyMjNcblxuICB2YXIgd2lkdGggPSBlbGVtZW50Lm9mZnNldFdpZHRoO1xuICB2YXIgaGVpZ2h0ID0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG5cbiAgaWYgKE1hdGguYWJzKGNsaWVudFJlY3Qud2lkdGggLSB3aWR0aCkgPD0gMSkge1xuICAgIHdpZHRoID0gY2xpZW50UmVjdC53aWR0aDtcbiAgfVxuXG4gIGlmIChNYXRoLmFicyhjbGllbnRSZWN0LmhlaWdodCAtIGhlaWdodCkgPD0gMSkge1xuICAgIGhlaWdodCA9IGNsaWVudFJlY3QuaGVpZ2h0O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB4OiBlbGVtZW50Lm9mZnNldExlZnQsXG4gICAgeTogZWxlbWVudC5vZmZzZXRUb3AsXG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Tm9kZU5hbWUoZWxlbWVudCkge1xuICByZXR1cm4gZWxlbWVudCA/IChlbGVtZW50Lm5vZGVOYW1lIHx8ICcnKS50b0xvd2VyQ2FzZSgpIDogbnVsbDtcbn0iLCJpbXBvcnQgZ2V0V2luZG93U2Nyb2xsIGZyb20gXCIuL2dldFdpbmRvd1Njcm9sbC5qc1wiO1xuaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcbmltcG9ydCB7IGlzSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5pbXBvcnQgZ2V0SFRNTEVsZW1lbnRTY3JvbGwgZnJvbSBcIi4vZ2V0SFRNTEVsZW1lbnRTY3JvbGwuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE5vZGVTY3JvbGwobm9kZSkge1xuICBpZiAobm9kZSA9PT0gZ2V0V2luZG93KG5vZGUpIHx8ICFpc0hUTUxFbGVtZW50KG5vZGUpKSB7XG4gICAgcmV0dXJuIGdldFdpbmRvd1Njcm9sbChub2RlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZ2V0SFRNTEVsZW1lbnRTY3JvbGwobm9kZSk7XG4gIH1cbn0iLCJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gXCIuL2dldE5vZGVOYW1lLmpzXCI7XG5pbXBvcnQgZ2V0Q29tcHV0ZWRTdHlsZSBmcm9tIFwiLi9nZXRDb21wdXRlZFN0eWxlLmpzXCI7XG5pbXBvcnQgeyBpc0hUTUxFbGVtZW50IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuaW1wb3J0IGlzVGFibGVFbGVtZW50IGZyb20gXCIuL2lzVGFibGVFbGVtZW50LmpzXCI7XG5pbXBvcnQgZ2V0UGFyZW50Tm9kZSBmcm9tIFwiLi9nZXRQYXJlbnROb2RlLmpzXCI7XG5cbmZ1bmN0aW9uIGdldFRydWVPZmZzZXRQYXJlbnQoZWxlbWVudCkge1xuICBpZiAoIWlzSFRNTEVsZW1lbnQoZWxlbWVudCkgfHwgLy8gaHR0cHM6Ly9naXRodWIuY29tL3BvcHBlcmpzL3BvcHBlci1jb3JlL2lzc3Vlcy84MzdcbiAgZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5wb3NpdGlvbiA9PT0gJ2ZpeGVkJykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQub2Zmc2V0UGFyZW50O1xufSAvLyBgLm9mZnNldFBhcmVudGAgcmVwb3J0cyBgbnVsbGAgZm9yIGZpeGVkIGVsZW1lbnRzLCB3aGlsZSBhYnNvbHV0ZSBlbGVtZW50c1xuLy8gcmV0dXJuIHRoZSBjb250YWluaW5nIGJsb2NrXG5cblxuZnVuY3Rpb24gZ2V0Q29udGFpbmluZ0Jsb2NrKGVsZW1lbnQpIHtcbiAgdmFyIGlzRmlyZWZveCA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdmaXJlZm94JykgIT09IC0xO1xuICB2YXIgY3VycmVudE5vZGUgPSBnZXRQYXJlbnROb2RlKGVsZW1lbnQpO1xuXG4gIHdoaWxlIChpc0hUTUxFbGVtZW50KGN1cnJlbnROb2RlKSAmJiBbJ2h0bWwnLCAnYm9keSddLmluZGV4T2YoZ2V0Tm9kZU5hbWUoY3VycmVudE5vZGUpKSA8IDApIHtcbiAgICB2YXIgY3NzID0gZ2V0Q29tcHV0ZWRTdHlsZShjdXJyZW50Tm9kZSk7IC8vIFRoaXMgaXMgbm9uLWV4aGF1c3RpdmUgYnV0IGNvdmVycyB0aGUgbW9zdCBjb21tb24gQ1NTIHByb3BlcnRpZXMgdGhhdFxuICAgIC8vIGNyZWF0ZSBhIGNvbnRhaW5pbmcgYmxvY2suXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL0NvbnRhaW5pbmdfYmxvY2sjaWRlbnRpZnlpbmdfdGhlX2NvbnRhaW5pbmdfYmxvY2tcblxuICAgIGlmIChjc3MudHJhbnNmb3JtICE9PSAnbm9uZScgfHwgY3NzLnBlcnNwZWN0aXZlICE9PSAnbm9uZScgfHwgY3NzLmNvbnRhaW4gPT09ICdwYWludCcgfHwgWyd0cmFuc2Zvcm0nLCAncGVyc3BlY3RpdmUnXS5pbmRleE9mKGNzcy53aWxsQ2hhbmdlKSAhPT0gLTEgfHwgaXNGaXJlZm94ICYmIGNzcy53aWxsQ2hhbmdlID09PSAnZmlsdGVyJyB8fCBpc0ZpcmVmb3ggJiYgY3NzLmZpbHRlciAmJiBjc3MuZmlsdGVyICE9PSAnbm9uZScpIHtcbiAgICAgIHJldHVybiBjdXJyZW50Tm9kZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufSAvLyBHZXRzIHRoZSBjbG9zZXN0IGFuY2VzdG9yIHBvc2l0aW9uZWQgZWxlbWVudC4gSGFuZGxlcyBzb21lIGVkZ2UgY2FzZXMsXG4vLyBzdWNoIGFzIHRhYmxlIGFuY2VzdG9ycyBhbmQgY3Jvc3MgYnJvd3NlciBidWdzLlxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE9mZnNldFBhcmVudChlbGVtZW50KSB7XG4gIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coZWxlbWVudCk7XG4gIHZhciBvZmZzZXRQYXJlbnQgPSBnZXRUcnVlT2Zmc2V0UGFyZW50KGVsZW1lbnQpO1xuXG4gIHdoaWxlIChvZmZzZXRQYXJlbnQgJiYgaXNUYWJsZUVsZW1lbnQob2Zmc2V0UGFyZW50KSAmJiBnZXRDb21wdXRlZFN0eWxlKG9mZnNldFBhcmVudCkucG9zaXRpb24gPT09ICdzdGF0aWMnKSB7XG4gICAgb2Zmc2V0UGFyZW50ID0gZ2V0VHJ1ZU9mZnNldFBhcmVudChvZmZzZXRQYXJlbnQpO1xuICB9XG5cbiAgaWYgKG9mZnNldFBhcmVudCAmJiAoZ2V0Tm9kZU5hbWUob2Zmc2V0UGFyZW50KSA9PT0gJ2h0bWwnIHx8IGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgPT09ICdib2R5JyAmJiBnZXRDb21wdXRlZFN0eWxlKG9mZnNldFBhcmVudCkucG9zaXRpb24gPT09ICdzdGF0aWMnKSkge1xuICAgIHJldHVybiB3aW5kb3c7XG4gIH1cblxuICByZXR1cm4gb2Zmc2V0UGFyZW50IHx8IGdldENvbnRhaW5pbmdCbG9jayhlbGVtZW50KSB8fCB3aW5kb3c7XG59IiwiaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gXCIuL2dldE5vZGVOYW1lLmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IHsgaXNTaGFkb3dSb290IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0UGFyZW50Tm9kZShlbGVtZW50KSB7XG4gIGlmIChnZXROb2RlTmFtZShlbGVtZW50KSA9PT0gJ2h0bWwnKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICByZXR1cm4gKC8vIHRoaXMgaXMgYSBxdWlja2VyIChidXQgbGVzcyB0eXBlIHNhZmUpIHdheSB0byBzYXZlIHF1aXRlIHNvbWUgYnl0ZXMgZnJvbSB0aGUgYnVuZGxlXG4gICAgLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtcmV0dXJuXVxuICAgIC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxuICAgIGVsZW1lbnQuYXNzaWduZWRTbG90IHx8IC8vIHN0ZXAgaW50byB0aGUgc2hhZG93IERPTSBvZiB0aGUgcGFyZW50IG9mIGEgc2xvdHRlZCBub2RlXG4gICAgZWxlbWVudC5wYXJlbnROb2RlIHx8ICggLy8gRE9NIEVsZW1lbnQgZGV0ZWN0ZWRcbiAgICBpc1NoYWRvd1Jvb3QoZWxlbWVudCkgPyBlbGVtZW50Lmhvc3QgOiBudWxsKSB8fCAvLyBTaGFkb3dSb290IGRldGVjdGVkXG4gICAgLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtY2FsbF06IEhUTUxFbGVtZW50IGlzIGEgTm9kZVxuICAgIGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSAvLyBmYWxsYmFja1xuXG4gICk7XG59IiwiaW1wb3J0IGdldFBhcmVudE5vZGUgZnJvbSBcIi4vZ2V0UGFyZW50Tm9kZS5qc1wiO1xuaW1wb3J0IGlzU2Nyb2xsUGFyZW50IGZyb20gXCIuL2lzU2Nyb2xsUGFyZW50LmpzXCI7XG5pbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4vZ2V0Tm9kZU5hbWUuanNcIjtcbmltcG9ydCB7IGlzSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRTY3JvbGxQYXJlbnQobm9kZSkge1xuICBpZiAoWydodG1sJywgJ2JvZHknLCAnI2RvY3VtZW50J10uaW5kZXhPZihnZXROb2RlTmFtZShub2RlKSkgPj0gMCkge1xuICAgIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXJldHVybl06IGFzc3VtZSBib2R5IGlzIGFsd2F5cyBhdmFpbGFibGVcbiAgICByZXR1cm4gbm9kZS5vd25lckRvY3VtZW50LmJvZHk7XG4gIH1cblxuICBpZiAoaXNIVE1MRWxlbWVudChub2RlKSAmJiBpc1Njcm9sbFBhcmVudChub2RlKSkge1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgcmV0dXJuIGdldFNjcm9sbFBhcmVudChnZXRQYXJlbnROb2RlKG5vZGUpKTtcbn0iLCJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCBnZXRXaW5kb3dTY3JvbGxCYXJYIGZyb20gXCIuL2dldFdpbmRvd1Njcm9sbEJhclguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFZpZXdwb3J0UmVjdChlbGVtZW50KSB7XG4gIHZhciB3aW4gPSBnZXRXaW5kb3coZWxlbWVudCk7XG4gIHZhciBodG1sID0gZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpO1xuICB2YXIgdmlzdWFsVmlld3BvcnQgPSB3aW4udmlzdWFsVmlld3BvcnQ7XG4gIHZhciB3aWR0aCA9IGh0bWwuY2xpZW50V2lkdGg7XG4gIHZhciBoZWlnaHQgPSBodG1sLmNsaWVudEhlaWdodDtcbiAgdmFyIHggPSAwO1xuICB2YXIgeSA9IDA7IC8vIE5COiBUaGlzIGlzbid0IHN1cHBvcnRlZCBvbiBpT1MgPD0gMTIuIElmIHRoZSBrZXlib2FyZCBpcyBvcGVuLCB0aGUgcG9wcGVyXG4gIC8vIGNhbiBiZSBvYnNjdXJlZCB1bmRlcm5lYXRoIGl0LlxuICAvLyBBbHNvLCBgaHRtbC5jbGllbnRIZWlnaHRgIGFkZHMgdGhlIGJvdHRvbSBiYXIgaGVpZ2h0IGluIFNhZmFyaSBpT1MsIGV2ZW5cbiAgLy8gaWYgaXQgaXNuJ3Qgb3Blbiwgc28gaWYgdGhpcyBpc24ndCBhdmFpbGFibGUsIHRoZSBwb3BwZXIgd2lsbCBiZSBkZXRlY3RlZFxuICAvLyB0byBvdmVyZmxvdyB0aGUgYm90dG9tIG9mIHRoZSBzY3JlZW4gdG9vIGVhcmx5LlxuXG4gIGlmICh2aXN1YWxWaWV3cG9ydCkge1xuICAgIHdpZHRoID0gdmlzdWFsVmlld3BvcnQud2lkdGg7XG4gICAgaGVpZ2h0ID0gdmlzdWFsVmlld3BvcnQuaGVpZ2h0OyAvLyBVc2VzIExheW91dCBWaWV3cG9ydCAobGlrZSBDaHJvbWU7IFNhZmFyaSBkb2VzIG5vdCBjdXJyZW50bHkpXG4gICAgLy8gSW4gQ2hyb21lLCBpdCByZXR1cm5zIGEgdmFsdWUgdmVyeSBjbG9zZSB0byAwICgrLy0pIGJ1dCBjb250YWlucyByb3VuZGluZ1xuICAgIC8vIGVycm9ycyBkdWUgdG8gZmxvYXRpbmcgcG9pbnQgbnVtYmVycywgc28gd2UgbmVlZCB0byBjaGVjayBwcmVjaXNpb24uXG4gICAgLy8gU2FmYXJpIHJldHVybnMgYSBudW1iZXIgPD0gMCwgdXN1YWxseSA8IC0xIHdoZW4gcGluY2gtem9vbWVkXG4gICAgLy8gRmVhdHVyZSBkZXRlY3Rpb24gZmFpbHMgaW4gbW9iaWxlIGVtdWxhdGlvbiBtb2RlIGluIENocm9tZS5cbiAgICAvLyBNYXRoLmFicyh3aW4uaW5uZXJXaWR0aCAvIHZpc3VhbFZpZXdwb3J0LnNjYWxlIC0gdmlzdWFsVmlld3BvcnQud2lkdGgpIDxcbiAgICAvLyAwLjAwMVxuICAgIC8vIEZhbGxiYWNrIGhlcmU6IFwiTm90IFNhZmFyaVwiIHVzZXJBZ2VudFxuXG4gICAgaWYgKCEvXigoPyFjaHJvbWV8YW5kcm9pZCkuKSpzYWZhcmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICB4ID0gdmlzdWFsVmlld3BvcnQub2Zmc2V0TGVmdDtcbiAgICAgIHkgPSB2aXN1YWxWaWV3cG9ydC5vZmZzZXRUb3A7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgeDogeCArIGdldFdpbmRvd1Njcm9sbEJhclgoZWxlbWVudCksXG4gICAgeTogeVxuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFdpbmRvdyhub2RlKSB7XG4gIGlmIChub2RlID09IG51bGwpIHtcbiAgICByZXR1cm4gd2luZG93O1xuICB9XG5cbiAgaWYgKG5vZGUudG9TdHJpbmcoKSAhPT0gJ1tvYmplY3QgV2luZG93XScpIHtcbiAgICB2YXIgb3duZXJEb2N1bWVudCA9IG5vZGUub3duZXJEb2N1bWVudDtcbiAgICByZXR1cm4gb3duZXJEb2N1bWVudCA/IG93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcgfHwgd2luZG93IDogd2luZG93O1xuICB9XG5cbiAgcmV0dXJuIG5vZGU7XG59IiwiaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFdpbmRvd1Njcm9sbChub2RlKSB7XG4gIHZhciB3aW4gPSBnZXRXaW5kb3cobm9kZSk7XG4gIHZhciBzY3JvbGxMZWZ0ID0gd2luLnBhZ2VYT2Zmc2V0O1xuICB2YXIgc2Nyb2xsVG9wID0gd2luLnBhZ2VZT2Zmc2V0O1xuICByZXR1cm4ge1xuICAgIHNjcm9sbExlZnQ6IHNjcm9sbExlZnQsXG4gICAgc2Nyb2xsVG9wOiBzY3JvbGxUb3BcbiAgfTtcbn0iLCJpbXBvcnQgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGZyb20gXCIuL2dldEJvdW5kaW5nQ2xpZW50UmVjdC5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCBnZXRXaW5kb3dTY3JvbGwgZnJvbSBcIi4vZ2V0V2luZG93U2Nyb2xsLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRXaW5kb3dTY3JvbGxCYXJYKGVsZW1lbnQpIHtcbiAgLy8gSWYgPGh0bWw+IGhhcyBhIENTUyB3aWR0aCBncmVhdGVyIHRoYW4gdGhlIHZpZXdwb3J0LCB0aGVuIHRoaXMgd2lsbCBiZVxuICAvLyBpbmNvcnJlY3QgZm9yIFJUTC5cbiAgLy8gUG9wcGVyIDEgaXMgYnJva2VuIGluIHRoaXMgY2FzZSBhbmQgbmV2ZXIgaGFkIGEgYnVnIHJlcG9ydCBzbyBsZXQncyBhc3N1bWVcbiAgLy8gaXQncyBub3QgYW4gaXNzdWUuIEkgZG9uJ3QgdGhpbmsgYW55b25lIGV2ZXIgc3BlY2lmaWVzIHdpZHRoIG9uIDxodG1sPlxuICAvLyBhbnl3YXkuXG4gIC8vIEJyb3dzZXJzIHdoZXJlIHRoZSBsZWZ0IHNjcm9sbGJhciBkb2Vzbid0IGNhdXNlIGFuIGlzc3VlIHJlcG9ydCBgMGAgZm9yXG4gIC8vIHRoaXMgKGUuZy4gRWRnZSAyMDE5LCBJRTExLCBTYWZhcmkpXG4gIHJldHVybiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpKS5sZWZ0ICsgZ2V0V2luZG93U2Nyb2xsKGVsZW1lbnQpLnNjcm9sbExlZnQ7XG59IiwiaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcblxuZnVuY3Rpb24gaXNFbGVtZW50KG5vZGUpIHtcbiAgdmFyIE93bkVsZW1lbnQgPSBnZXRXaW5kb3cobm9kZSkuRWxlbWVudDtcbiAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBPd25FbGVtZW50IHx8IG5vZGUgaW5zdGFuY2VvZiBFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBpc0hUTUxFbGVtZW50KG5vZGUpIHtcbiAgdmFyIE93bkVsZW1lbnQgPSBnZXRXaW5kb3cobm9kZSkuSFRNTEVsZW1lbnQ7XG4gIHJldHVybiBub2RlIGluc3RhbmNlb2YgT3duRWxlbWVudCB8fCBub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGlzU2hhZG93Um9vdChub2RlKSB7XG4gIC8vIElFIDExIGhhcyBubyBTaGFkb3dSb290XG4gIGlmICh0eXBlb2YgU2hhZG93Um9vdCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgT3duRWxlbWVudCA9IGdldFdpbmRvdyhub2RlKS5TaGFkb3dSb290O1xuICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIE93bkVsZW1lbnQgfHwgbm9kZSBpbnN0YW5jZW9mIFNoYWRvd1Jvb3Q7XG59XG5cbmV4cG9ydCB7IGlzRWxlbWVudCwgaXNIVE1MRWxlbWVudCwgaXNTaGFkb3dSb290IH07IiwiaW1wb3J0IGdldENvbXB1dGVkU3R5bGUgZnJvbSBcIi4vZ2V0Q29tcHV0ZWRTdHlsZS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTY3JvbGxQYXJlbnQoZWxlbWVudCkge1xuICAvLyBGaXJlZm94IHdhbnRzIHVzIHRvIGNoZWNrIGAteGAgYW5kIGAteWAgdmFyaWF0aW9ucyBhcyB3ZWxsXG4gIHZhciBfZ2V0Q29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCksXG4gICAgICBvdmVyZmxvdyA9IF9nZXRDb21wdXRlZFN0eWxlLm92ZXJmbG93LFxuICAgICAgb3ZlcmZsb3dYID0gX2dldENvbXB1dGVkU3R5bGUub3ZlcmZsb3dYLFxuICAgICAgb3ZlcmZsb3dZID0gX2dldENvbXB1dGVkU3R5bGUub3ZlcmZsb3dZO1xuXG4gIHJldHVybiAvYXV0b3xzY3JvbGx8b3ZlcmxheXxoaWRkZW4vLnRlc3Qob3ZlcmZsb3cgKyBvdmVyZmxvd1kgKyBvdmVyZmxvd1gpO1xufSIsImltcG9ydCBnZXROb2RlTmFtZSBmcm9tIFwiLi9nZXROb2RlTmFtZS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUYWJsZUVsZW1lbnQoZWxlbWVudCkge1xuICByZXR1cm4gWyd0YWJsZScsICd0ZCcsICd0aCddLmluZGV4T2YoZ2V0Tm9kZU5hbWUoZWxlbWVudCkpID49IDA7XG59IiwiaW1wb3J0IGdldFNjcm9sbFBhcmVudCBmcm9tIFwiLi9nZXRTY3JvbGxQYXJlbnQuanNcIjtcbmltcG9ydCBnZXRQYXJlbnROb2RlIGZyb20gXCIuL2dldFBhcmVudE5vZGUuanNcIjtcbmltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vZ2V0V2luZG93LmpzXCI7XG5pbXBvcnQgaXNTY3JvbGxQYXJlbnQgZnJvbSBcIi4vaXNTY3JvbGxQYXJlbnQuanNcIjtcbi8qXG5naXZlbiBhIERPTSBlbGVtZW50LCByZXR1cm4gdGhlIGxpc3Qgb2YgYWxsIHNjcm9sbCBwYXJlbnRzLCB1cCB0aGUgbGlzdCBvZiBhbmNlc29yc1xudW50aWwgd2UgZ2V0IHRvIHRoZSB0b3Agd2luZG93IG9iamVjdC4gVGhpcyBsaXN0IGlzIHdoYXQgd2UgYXR0YWNoIHNjcm9sbCBsaXN0ZW5lcnNcbnRvLCBiZWNhdXNlIGlmIGFueSBvZiB0aGVzZSBwYXJlbnQgZWxlbWVudHMgc2Nyb2xsLCB3ZSdsbCBuZWVkIHRvIHJlLWNhbGN1bGF0ZSB0aGVcbnJlZmVyZW5jZSBlbGVtZW50J3MgcG9zaXRpb24uXG4qL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsaXN0U2Nyb2xsUGFyZW50cyhlbGVtZW50LCBsaXN0KSB7XG4gIHZhciBfZWxlbWVudCRvd25lckRvY3VtZW47XG5cbiAgaWYgKGxpc3QgPT09IHZvaWQgMCkge1xuICAgIGxpc3QgPSBbXTtcbiAgfVxuXG4gIHZhciBzY3JvbGxQYXJlbnQgPSBnZXRTY3JvbGxQYXJlbnQoZWxlbWVudCk7XG4gIHZhciBpc0JvZHkgPSBzY3JvbGxQYXJlbnQgPT09ICgoX2VsZW1lbnQkb3duZXJEb2N1bWVuID0gZWxlbWVudC5vd25lckRvY3VtZW50KSA9PSBudWxsID8gdm9pZCAwIDogX2VsZW1lbnQkb3duZXJEb2N1bWVuLmJvZHkpO1xuICB2YXIgd2luID0gZ2V0V2luZG93KHNjcm9sbFBhcmVudCk7XG4gIHZhciB0YXJnZXQgPSBpc0JvZHkgPyBbd2luXS5jb25jYXQod2luLnZpc3VhbFZpZXdwb3J0IHx8IFtdLCBpc1Njcm9sbFBhcmVudChzY3JvbGxQYXJlbnQpID8gc2Nyb2xsUGFyZW50IDogW10pIDogc2Nyb2xsUGFyZW50O1xuICB2YXIgdXBkYXRlZExpc3QgPSBsaXN0LmNvbmNhdCh0YXJnZXQpO1xuICByZXR1cm4gaXNCb2R5ID8gdXBkYXRlZExpc3QgOiAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1jYWxsXTogaXNCb2R5IHRlbGxzIHVzIHRhcmdldCB3aWxsIGJlIGFuIEhUTUxFbGVtZW50IGhlcmVcbiAgdXBkYXRlZExpc3QuY29uY2F0KGxpc3RTY3JvbGxQYXJlbnRzKGdldFBhcmVudE5vZGUodGFyZ2V0KSkpO1xufSIsImV4cG9ydCB2YXIgdG9wID0gJ3RvcCc7XG5leHBvcnQgdmFyIGJvdHRvbSA9ICdib3R0b20nO1xuZXhwb3J0IHZhciByaWdodCA9ICdyaWdodCc7XG5leHBvcnQgdmFyIGxlZnQgPSAnbGVmdCc7XG5leHBvcnQgdmFyIGF1dG8gPSAnYXV0byc7XG5leHBvcnQgdmFyIGJhc2VQbGFjZW1lbnRzID0gW3RvcCwgYm90dG9tLCByaWdodCwgbGVmdF07XG5leHBvcnQgdmFyIHN0YXJ0ID0gJ3N0YXJ0JztcbmV4cG9ydCB2YXIgZW5kID0gJ2VuZCc7XG5leHBvcnQgdmFyIGNsaXBwaW5nUGFyZW50cyA9ICdjbGlwcGluZ1BhcmVudHMnO1xuZXhwb3J0IHZhciB2aWV3cG9ydCA9ICd2aWV3cG9ydCc7XG5leHBvcnQgdmFyIHBvcHBlciA9ICdwb3BwZXInO1xuZXhwb3J0IHZhciByZWZlcmVuY2UgPSAncmVmZXJlbmNlJztcbmV4cG9ydCB2YXIgdmFyaWF0aW9uUGxhY2VtZW50cyA9IC8qI19fUFVSRV9fKi9iYXNlUGxhY2VtZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gIHJldHVybiBhY2MuY29uY2F0KFtwbGFjZW1lbnQgKyBcIi1cIiArIHN0YXJ0LCBwbGFjZW1lbnQgKyBcIi1cIiArIGVuZF0pO1xufSwgW10pO1xuZXhwb3J0IHZhciBwbGFjZW1lbnRzID0gLyojX19QVVJFX18qL1tdLmNvbmNhdChiYXNlUGxhY2VtZW50cywgW2F1dG9dKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gIHJldHVybiBhY2MuY29uY2F0KFtwbGFjZW1lbnQsIHBsYWNlbWVudCArIFwiLVwiICsgc3RhcnQsIHBsYWNlbWVudCArIFwiLVwiICsgZW5kXSk7XG59LCBbXSk7IC8vIG1vZGlmaWVycyB0aGF0IG5lZWQgdG8gcmVhZCB0aGUgRE9NXG5cbmV4cG9ydCB2YXIgYmVmb3JlUmVhZCA9ICdiZWZvcmVSZWFkJztcbmV4cG9ydCB2YXIgcmVhZCA9ICdyZWFkJztcbmV4cG9ydCB2YXIgYWZ0ZXJSZWFkID0gJ2FmdGVyUmVhZCc7IC8vIHB1cmUtbG9naWMgbW9kaWZpZXJzXG5cbmV4cG9ydCB2YXIgYmVmb3JlTWFpbiA9ICdiZWZvcmVNYWluJztcbmV4cG9ydCB2YXIgbWFpbiA9ICdtYWluJztcbmV4cG9ydCB2YXIgYWZ0ZXJNYWluID0gJ2FmdGVyTWFpbic7IC8vIG1vZGlmaWVyIHdpdGggdGhlIHB1cnBvc2UgdG8gd3JpdGUgdG8gdGhlIERPTSAob3Igd3JpdGUgaW50byBhIGZyYW1ld29yayBzdGF0ZSlcblxuZXhwb3J0IHZhciBiZWZvcmVXcml0ZSA9ICdiZWZvcmVXcml0ZSc7XG5leHBvcnQgdmFyIHdyaXRlID0gJ3dyaXRlJztcbmV4cG9ydCB2YXIgYWZ0ZXJXcml0ZSA9ICdhZnRlcldyaXRlJztcbmV4cG9ydCB2YXIgbW9kaWZpZXJQaGFzZXMgPSBbYmVmb3JlUmVhZCwgcmVhZCwgYWZ0ZXJSZWFkLCBiZWZvcmVNYWluLCBtYWluLCBhZnRlck1haW4sIGJlZm9yZVdyaXRlLCB3cml0ZSwgYWZ0ZXJXcml0ZV07IiwiZXhwb3J0ICogZnJvbSBcIi4vZW51bXMuanNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL21vZGlmaWVycy9pbmRleC5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCB7IHBvcHBlckdlbmVyYXRvciwgZGV0ZWN0T3ZlcmZsb3csIGNyZWF0ZVBvcHBlciBhcyBjcmVhdGVQb3BwZXJCYXNlIH0gZnJvbSBcIi4vY3JlYXRlUG9wcGVyLmpzXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZXhwb3J0IHsgY3JlYXRlUG9wcGVyIH0gZnJvbSBcIi4vcG9wcGVyLmpzXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZXhwb3J0IHsgY3JlYXRlUG9wcGVyIGFzIGNyZWF0ZVBvcHBlckxpdGUgfSBmcm9tIFwiLi9wb3BwZXItbGl0ZS5qc1wiOyIsImltcG9ydCBnZXROb2RlTmFtZSBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldE5vZGVOYW1lLmpzXCI7XG5pbXBvcnQgeyBpc0hUTUxFbGVtZW50IH0gZnJvbSBcIi4uL2RvbS11dGlscy9pbnN0YW5jZU9mLmpzXCI7IC8vIFRoaXMgbW9kaWZpZXIgdGFrZXMgdGhlIHN0eWxlcyBwcmVwYXJlZCBieSB0aGUgYGNvbXB1dGVTdHlsZXNgIG1vZGlmaWVyXG4vLyBhbmQgYXBwbGllcyB0aGVtIHRvIHRoZSBIVE1MRWxlbWVudHMgc3VjaCBhcyBwb3BwZXIgYW5kIGFycm93XG5cbmZ1bmN0aW9uIGFwcGx5U3R5bGVzKF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZTtcbiAgT2JqZWN0LmtleXMoc3RhdGUuZWxlbWVudHMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB2YXIgc3R5bGUgPSBzdGF0ZS5zdHlsZXNbbmFtZV0gfHwge307XG4gICAgdmFyIGF0dHJpYnV0ZXMgPSBzdGF0ZS5hdHRyaWJ1dGVzW25hbWVdIHx8IHt9O1xuICAgIHZhciBlbGVtZW50ID0gc3RhdGUuZWxlbWVudHNbbmFtZV07IC8vIGFycm93IGlzIG9wdGlvbmFsICsgdmlydHVhbCBlbGVtZW50c1xuXG4gICAgaWYgKCFpc0hUTUxFbGVtZW50KGVsZW1lbnQpIHx8ICFnZXROb2RlTmFtZShlbGVtZW50KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gRmxvdyBkb2Vzbid0IHN1cHBvcnQgdG8gZXh0ZW5kIHRoaXMgcHJvcGVydHksIGJ1dCBpdCdzIHRoZSBtb3N0XG4gICAgLy8gZWZmZWN0aXZlIHdheSB0byBhcHBseSBzdHlsZXMgdG8gYW4gSFRNTEVsZW1lbnRcbiAgICAvLyAkRmxvd0ZpeE1lW2Nhbm5vdC13cml0ZV1cblxuXG4gICAgT2JqZWN0LmFzc2lnbihlbGVtZW50LnN0eWxlLCBzdHlsZSk7XG4gICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgdmFyIHZhbHVlID0gYXR0cmlidXRlc1tuYW1lXTtcblxuICAgICAgaWYgKHZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlID09PSB0cnVlID8gJycgOiB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBlZmZlY3QoX3JlZjIpIHtcbiAgdmFyIHN0YXRlID0gX3JlZjIuc3RhdGU7XG4gIHZhciBpbml0aWFsU3R5bGVzID0ge1xuICAgIHBvcHBlcjoge1xuICAgICAgcG9zaXRpb246IHN0YXRlLm9wdGlvbnMuc3RyYXRlZ3ksXG4gICAgICBsZWZ0OiAnMCcsXG4gICAgICB0b3A6ICcwJyxcbiAgICAgIG1hcmdpbjogJzAnXG4gICAgfSxcbiAgICBhcnJvdzoge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZSdcbiAgICB9LFxuICAgIHJlZmVyZW5jZToge31cbiAgfTtcbiAgT2JqZWN0LmFzc2lnbihzdGF0ZS5lbGVtZW50cy5wb3BwZXIuc3R5bGUsIGluaXRpYWxTdHlsZXMucG9wcGVyKTtcbiAgc3RhdGUuc3R5bGVzID0gaW5pdGlhbFN0eWxlcztcblxuICBpZiAoc3RhdGUuZWxlbWVudHMuYXJyb3cpIHtcbiAgICBPYmplY3QuYXNzaWduKHN0YXRlLmVsZW1lbnRzLmFycm93LnN0eWxlLCBpbml0aWFsU3R5bGVzLmFycm93KTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgT2JqZWN0LmtleXMoc3RhdGUuZWxlbWVudHMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIHZhciBlbGVtZW50ID0gc3RhdGUuZWxlbWVudHNbbmFtZV07XG4gICAgICB2YXIgYXR0cmlidXRlcyA9IHN0YXRlLmF0dHJpYnV0ZXNbbmFtZV0gfHwge307XG4gICAgICB2YXIgc3R5bGVQcm9wZXJ0aWVzID0gT2JqZWN0LmtleXMoc3RhdGUuc3R5bGVzLmhhc093blByb3BlcnR5KG5hbWUpID8gc3RhdGUuc3R5bGVzW25hbWVdIDogaW5pdGlhbFN0eWxlc1tuYW1lXSk7IC8vIFNldCBhbGwgdmFsdWVzIHRvIGFuIGVtcHR5IHN0cmluZyB0byB1bnNldCB0aGVtXG5cbiAgICAgIHZhciBzdHlsZSA9IHN0eWxlUHJvcGVydGllcy5yZWR1Y2UoZnVuY3Rpb24gKHN0eWxlLCBwcm9wZXJ0eSkge1xuICAgICAgICBzdHlsZVtwcm9wZXJ0eV0gPSAnJztcbiAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgICAgfSwge30pOyAvLyBhcnJvdyBpcyBvcHRpb25hbCArIHZpcnR1YWwgZWxlbWVudHNcblxuICAgICAgaWYgKCFpc0hUTUxFbGVtZW50KGVsZW1lbnQpIHx8ICFnZXROb2RlTmFtZShlbGVtZW50KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIE9iamVjdC5hc3NpZ24oZWxlbWVudC5zdHlsZSwgc3R5bGUpO1xuICAgICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoYXR0cmlidXRlKSB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2FwcGx5U3R5bGVzJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICd3cml0ZScsXG4gIGZuOiBhcHBseVN0eWxlcyxcbiAgZWZmZWN0OiBlZmZlY3QsXG4gIHJlcXVpcmVzOiBbJ2NvbXB1dGVTdHlsZXMnXVxufTsiLCJpbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGdldExheW91dFJlY3QgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRMYXlvdXRSZWN0LmpzXCI7XG5pbXBvcnQgY29udGFpbnMgZnJvbSBcIi4uL2RvbS11dGlscy9jb250YWlucy5qc1wiO1xuaW1wb3J0IGdldE9mZnNldFBhcmVudCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldE9mZnNldFBhcmVudC5qc1wiO1xuaW1wb3J0IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgd2l0aGluIGZyb20gXCIuLi91dGlscy93aXRoaW4uanNcIjtcbmltcG9ydCBtZXJnZVBhZGRpbmdPYmplY3QgZnJvbSBcIi4uL3V0aWxzL21lcmdlUGFkZGluZ09iamVjdC5qc1wiO1xuaW1wb3J0IGV4cGFuZFRvSGFzaE1hcCBmcm9tIFwiLi4vdXRpbHMvZXhwYW5kVG9IYXNoTWFwLmpzXCI7XG5pbXBvcnQgeyBsZWZ0LCByaWdodCwgYmFzZVBsYWNlbWVudHMsIHRvcCwgYm90dG9tIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5pbXBvcnQgeyBpc0hUTUxFbGVtZW50IH0gZnJvbSBcIi4uL2RvbS11dGlscy9pbnN0YW5jZU9mLmpzXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxudmFyIHRvUGFkZGluZ09iamVjdCA9IGZ1bmN0aW9uIHRvUGFkZGluZ09iamVjdChwYWRkaW5nLCBzdGF0ZSkge1xuICBwYWRkaW5nID0gdHlwZW9mIHBhZGRpbmcgPT09ICdmdW5jdGlvbicgPyBwYWRkaW5nKE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnJlY3RzLCB7XG4gICAgcGxhY2VtZW50OiBzdGF0ZS5wbGFjZW1lbnRcbiAgfSkpIDogcGFkZGluZztcbiAgcmV0dXJuIG1lcmdlUGFkZGluZ09iamVjdCh0eXBlb2YgcGFkZGluZyAhPT0gJ251bWJlcicgPyBwYWRkaW5nIDogZXhwYW5kVG9IYXNoTWFwKHBhZGRpbmcsIGJhc2VQbGFjZW1lbnRzKSk7XG59O1xuXG5mdW5jdGlvbiBhcnJvdyhfcmVmKSB7XG4gIHZhciBfc3RhdGUkbW9kaWZpZXJzRGF0YSQ7XG5cbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWUsXG4gICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zO1xuICB2YXIgYXJyb3dFbGVtZW50ID0gc3RhdGUuZWxlbWVudHMuYXJyb3c7XG4gIHZhciBwb3BwZXJPZmZzZXRzID0gc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzO1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQoc3RhdGUucGxhY2VtZW50KTtcbiAgdmFyIGF4aXMgPSBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQoYmFzZVBsYWNlbWVudCk7XG4gIHZhciBpc1ZlcnRpY2FsID0gW2xlZnQsIHJpZ2h0XS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpID49IDA7XG4gIHZhciBsZW4gPSBpc1ZlcnRpY2FsID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuXG4gIGlmICghYXJyb3dFbGVtZW50IHx8ICFwb3BwZXJPZmZzZXRzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHBhZGRpbmdPYmplY3QgPSB0b1BhZGRpbmdPYmplY3Qob3B0aW9ucy5wYWRkaW5nLCBzdGF0ZSk7XG4gIHZhciBhcnJvd1JlY3QgPSBnZXRMYXlvdXRSZWN0KGFycm93RWxlbWVudCk7XG4gIHZhciBtaW5Qcm9wID0gYXhpcyA9PT0gJ3knID8gdG9wIDogbGVmdDtcbiAgdmFyIG1heFByb3AgPSBheGlzID09PSAneScgPyBib3R0b20gOiByaWdodDtcbiAgdmFyIGVuZERpZmYgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2VbbGVuXSArIHN0YXRlLnJlY3RzLnJlZmVyZW5jZVtheGlzXSAtIHBvcHBlck9mZnNldHNbYXhpc10gLSBzdGF0ZS5yZWN0cy5wb3BwZXJbbGVuXTtcbiAgdmFyIHN0YXJ0RGlmZiA9IHBvcHBlck9mZnNldHNbYXhpc10gLSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2VbYXhpc107XG4gIHZhciBhcnJvd09mZnNldFBhcmVudCA9IGdldE9mZnNldFBhcmVudChhcnJvd0VsZW1lbnQpO1xuICB2YXIgY2xpZW50U2l6ZSA9IGFycm93T2Zmc2V0UGFyZW50ID8gYXhpcyA9PT0gJ3knID8gYXJyb3dPZmZzZXRQYXJlbnQuY2xpZW50SGVpZ2h0IHx8IDAgOiBhcnJvd09mZnNldFBhcmVudC5jbGllbnRXaWR0aCB8fCAwIDogMDtcbiAgdmFyIGNlbnRlclRvUmVmZXJlbmNlID0gZW5kRGlmZiAvIDIgLSBzdGFydERpZmYgLyAyOyAvLyBNYWtlIHN1cmUgdGhlIGFycm93IGRvZXNuJ3Qgb3ZlcmZsb3cgdGhlIHBvcHBlciBpZiB0aGUgY2VudGVyIHBvaW50IGlzXG4gIC8vIG91dHNpZGUgb2YgdGhlIHBvcHBlciBib3VuZHNcblxuICB2YXIgbWluID0gcGFkZGluZ09iamVjdFttaW5Qcm9wXTtcbiAgdmFyIG1heCA9IGNsaWVudFNpemUgLSBhcnJvd1JlY3RbbGVuXSAtIHBhZGRpbmdPYmplY3RbbWF4UHJvcF07XG4gIHZhciBjZW50ZXIgPSBjbGllbnRTaXplIC8gMiAtIGFycm93UmVjdFtsZW5dIC8gMiArIGNlbnRlclRvUmVmZXJlbmNlO1xuICB2YXIgb2Zmc2V0ID0gd2l0aGluKG1pbiwgY2VudGVyLCBtYXgpOyAvLyBQcmV2ZW50cyBicmVha2luZyBzeW50YXggaGlnaGxpZ2h0aW5nLi4uXG5cbiAgdmFyIGF4aXNQcm9wID0gYXhpcztcbiAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IChfc3RhdGUkbW9kaWZpZXJzRGF0YSQgPSB7fSwgX3N0YXRlJG1vZGlmaWVyc0RhdGEkW2F4aXNQcm9wXSA9IG9mZnNldCwgX3N0YXRlJG1vZGlmaWVyc0RhdGEkLmNlbnRlck9mZnNldCA9IG9mZnNldCAtIGNlbnRlciwgX3N0YXRlJG1vZGlmaWVyc0RhdGEkKTtcbn1cblxuZnVuY3Rpb24gZWZmZWN0KF9yZWYyKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYyLnN0YXRlLFxuICAgICAgb3B0aW9ucyA9IF9yZWYyLm9wdGlvbnM7XG4gIHZhciBfb3B0aW9ucyRlbGVtZW50ID0gb3B0aW9ucy5lbGVtZW50LFxuICAgICAgYXJyb3dFbGVtZW50ID0gX29wdGlvbnMkZWxlbWVudCA9PT0gdm9pZCAwID8gJ1tkYXRhLXBvcHBlci1hcnJvd10nIDogX29wdGlvbnMkZWxlbWVudDtcblxuICBpZiAoYXJyb3dFbGVtZW50ID09IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH0gLy8gQ1NTIHNlbGVjdG9yXG5cblxuICBpZiAodHlwZW9mIGFycm93RWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICBhcnJvd0VsZW1lbnQgPSBzdGF0ZS5lbGVtZW50cy5wb3BwZXIucXVlcnlTZWxlY3RvcihhcnJvd0VsZW1lbnQpO1xuXG4gICAgaWYgKCFhcnJvd0VsZW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgaWYgKCFpc0hUTUxFbGVtZW50KGFycm93RWxlbWVudCkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoWydQb3BwZXI6IFwiYXJyb3dcIiBlbGVtZW50IG11c3QgYmUgYW4gSFRNTEVsZW1lbnQgKG5vdCBhbiBTVkdFbGVtZW50KS4nLCAnVG8gdXNlIGFuIFNWRyBhcnJvdywgd3JhcCBpdCBpbiBhbiBIVE1MRWxlbWVudCB0aGF0IHdpbGwgYmUgdXNlZCBhcycsICd0aGUgYXJyb3cuJ10uam9pbignICcpKTtcbiAgICB9XG4gIH1cblxuICBpZiAoIWNvbnRhaW5zKHN0YXRlLmVsZW1lbnRzLnBvcHBlciwgYXJyb3dFbGVtZW50KSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoWydQb3BwZXI6IFwiYXJyb3dcIiBtb2RpZmllclxcJ3MgYGVsZW1lbnRgIG11c3QgYmUgYSBjaGlsZCBvZiB0aGUgcG9wcGVyJywgJ2VsZW1lbnQuJ10uam9pbignICcpKTtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBzdGF0ZS5lbGVtZW50cy5hcnJvdyA9IGFycm93RWxlbWVudDtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2Fycm93JyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdtYWluJyxcbiAgZm46IGFycm93LFxuICBlZmZlY3Q6IGVmZmVjdCxcbiAgcmVxdWlyZXM6IFsncG9wcGVyT2Zmc2V0cyddLFxuICByZXF1aXJlc0lmRXhpc3RzOiBbJ3ByZXZlbnRPdmVyZmxvdyddXG59OyIsImltcG9ydCB7IHRvcCwgbGVmdCwgcmlnaHQsIGJvdHRvbSB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IGdldE9mZnNldFBhcmVudCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldE9mZnNldFBhcmVudC5qc1wiO1xuaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldFdpbmRvdy5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IGdldENvbXB1dGVkU3R5bGUgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRDb21wdXRlZFN0eWxlLmpzXCI7XG5pbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IHsgcm91bmQgfSBmcm9tIFwiLi4vdXRpbHMvbWF0aC5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbnZhciB1bnNldFNpZGVzID0ge1xuICB0b3A6ICdhdXRvJyxcbiAgcmlnaHQ6ICdhdXRvJyxcbiAgYm90dG9tOiAnYXV0bycsXG4gIGxlZnQ6ICdhdXRvJ1xufTsgLy8gUm91bmQgdGhlIG9mZnNldHMgdG8gdGhlIG5lYXJlc3Qgc3VpdGFibGUgc3VicGl4ZWwgYmFzZWQgb24gdGhlIERQUi5cbi8vIFpvb21pbmcgY2FuIGNoYW5nZSB0aGUgRFBSLCBidXQgaXQgc2VlbXMgdG8gcmVwb3J0IGEgdmFsdWUgdGhhdCB3aWxsXG4vLyBjbGVhbmx5IGRpdmlkZSB0aGUgdmFsdWVzIGludG8gdGhlIGFwcHJvcHJpYXRlIHN1YnBpeGVscy5cblxuZnVuY3Rpb24gcm91bmRPZmZzZXRzQnlEUFIoX3JlZikge1xuICB2YXIgeCA9IF9yZWYueCxcbiAgICAgIHkgPSBfcmVmLnk7XG4gIHZhciB3aW4gPSB3aW5kb3c7XG4gIHZhciBkcHIgPSB3aW4uZGV2aWNlUGl4ZWxSYXRpbyB8fCAxO1xuICByZXR1cm4ge1xuICAgIHg6IHJvdW5kKHJvdW5kKHggKiBkcHIpIC8gZHByKSB8fCAwLFxuICAgIHk6IHJvdW5kKHJvdW5kKHkgKiBkcHIpIC8gZHByKSB8fCAwXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXBUb1N0eWxlcyhfcmVmMikge1xuICB2YXIgX09iamVjdCRhc3NpZ24yO1xuXG4gIHZhciBwb3BwZXIgPSBfcmVmMi5wb3BwZXIsXG4gICAgICBwb3BwZXJSZWN0ID0gX3JlZjIucG9wcGVyUmVjdCxcbiAgICAgIHBsYWNlbWVudCA9IF9yZWYyLnBsYWNlbWVudCxcbiAgICAgIG9mZnNldHMgPSBfcmVmMi5vZmZzZXRzLFxuICAgICAgcG9zaXRpb24gPSBfcmVmMi5wb3NpdGlvbixcbiAgICAgIGdwdUFjY2VsZXJhdGlvbiA9IF9yZWYyLmdwdUFjY2VsZXJhdGlvbixcbiAgICAgIGFkYXB0aXZlID0gX3JlZjIuYWRhcHRpdmUsXG4gICAgICByb3VuZE9mZnNldHMgPSBfcmVmMi5yb3VuZE9mZnNldHM7XG5cbiAgdmFyIF9yZWYzID0gcm91bmRPZmZzZXRzID09PSB0cnVlID8gcm91bmRPZmZzZXRzQnlEUFIob2Zmc2V0cykgOiB0eXBlb2Ygcm91bmRPZmZzZXRzID09PSAnZnVuY3Rpb24nID8gcm91bmRPZmZzZXRzKG9mZnNldHMpIDogb2Zmc2V0cyxcbiAgICAgIF9yZWYzJHggPSBfcmVmMy54LFxuICAgICAgeCA9IF9yZWYzJHggPT09IHZvaWQgMCA/IDAgOiBfcmVmMyR4LFxuICAgICAgX3JlZjMkeSA9IF9yZWYzLnksXG4gICAgICB5ID0gX3JlZjMkeSA9PT0gdm9pZCAwID8gMCA6IF9yZWYzJHk7XG5cbiAgdmFyIGhhc1ggPSBvZmZzZXRzLmhhc093blByb3BlcnR5KCd4Jyk7XG4gIHZhciBoYXNZID0gb2Zmc2V0cy5oYXNPd25Qcm9wZXJ0eSgneScpO1xuICB2YXIgc2lkZVggPSBsZWZ0O1xuICB2YXIgc2lkZVkgPSB0b3A7XG4gIHZhciB3aW4gPSB3aW5kb3c7XG5cbiAgaWYgKGFkYXB0aXZlKSB7XG4gICAgdmFyIG9mZnNldFBhcmVudCA9IGdldE9mZnNldFBhcmVudChwb3BwZXIpO1xuICAgIHZhciBoZWlnaHRQcm9wID0gJ2NsaWVudEhlaWdodCc7XG4gICAgdmFyIHdpZHRoUHJvcCA9ICdjbGllbnRXaWR0aCc7XG5cbiAgICBpZiAob2Zmc2V0UGFyZW50ID09PSBnZXRXaW5kb3cocG9wcGVyKSkge1xuICAgICAgb2Zmc2V0UGFyZW50ID0gZ2V0RG9jdW1lbnRFbGVtZW50KHBvcHBlcik7XG5cbiAgICAgIGlmIChnZXRDb21wdXRlZFN0eWxlKG9mZnNldFBhcmVudCkucG9zaXRpb24gIT09ICdzdGF0aWMnKSB7XG4gICAgICAgIGhlaWdodFByb3AgPSAnc2Nyb2xsSGVpZ2h0JztcbiAgICAgICAgd2lkdGhQcm9wID0gJ3Njcm9sbFdpZHRoJztcbiAgICAgIH1cbiAgICB9IC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLWNhc3RdOiBmb3JjZSB0eXBlIHJlZmluZW1lbnQsIHdlIGNvbXBhcmUgb2Zmc2V0UGFyZW50IHdpdGggd2luZG93IGFib3ZlLCBidXQgRmxvdyBkb2Vzbid0IGRldGVjdCBpdFxuXG5cbiAgICBvZmZzZXRQYXJlbnQgPSBvZmZzZXRQYXJlbnQ7XG5cbiAgICBpZiAocGxhY2VtZW50ID09PSB0b3ApIHtcbiAgICAgIHNpZGVZID0gYm90dG9tOyAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ11cblxuICAgICAgeSAtPSBvZmZzZXRQYXJlbnRbaGVpZ2h0UHJvcF0gLSBwb3BwZXJSZWN0LmhlaWdodDtcbiAgICAgIHkgKj0gZ3B1QWNjZWxlcmF0aW9uID8gMSA6IC0xO1xuICAgIH1cblxuICAgIGlmIChwbGFjZW1lbnQgPT09IGxlZnQpIHtcbiAgICAgIHNpZGVYID0gcmlnaHQ7IC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxuXG4gICAgICB4IC09IG9mZnNldFBhcmVudFt3aWR0aFByb3BdIC0gcG9wcGVyUmVjdC53aWR0aDtcbiAgICAgIHggKj0gZ3B1QWNjZWxlcmF0aW9uID8gMSA6IC0xO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb21tb25TdHlsZXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICBwb3NpdGlvbjogcG9zaXRpb25cbiAgfSwgYWRhcHRpdmUgJiYgdW5zZXRTaWRlcyk7XG5cbiAgaWYgKGdwdUFjY2VsZXJhdGlvbikge1xuICAgIHZhciBfT2JqZWN0JGFzc2lnbjtcblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBjb21tb25TdHlsZXMsIChfT2JqZWN0JGFzc2lnbiA9IHt9LCBfT2JqZWN0JGFzc2lnbltzaWRlWV0gPSBoYXNZID8gJzAnIDogJycsIF9PYmplY3QkYXNzaWduW3NpZGVYXSA9IGhhc1ggPyAnMCcgOiAnJywgX09iamVjdCRhc3NpZ24udHJhbnNmb3JtID0gKHdpbi5kZXZpY2VQaXhlbFJhdGlvIHx8IDEpIDwgMiA/IFwidHJhbnNsYXRlKFwiICsgeCArIFwicHgsIFwiICsgeSArIFwicHgpXCIgOiBcInRyYW5zbGF0ZTNkKFwiICsgeCArIFwicHgsIFwiICsgeSArIFwicHgsIDApXCIsIF9PYmplY3QkYXNzaWduKSk7XG4gIH1cblxuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uU3R5bGVzLCAoX09iamVjdCRhc3NpZ24yID0ge30sIF9PYmplY3QkYXNzaWduMltzaWRlWV0gPSBoYXNZID8geSArIFwicHhcIiA6ICcnLCBfT2JqZWN0JGFzc2lnbjJbc2lkZVhdID0gaGFzWCA/IHggKyBcInB4XCIgOiAnJywgX09iamVjdCRhc3NpZ24yLnRyYW5zZm9ybSA9ICcnLCBfT2JqZWN0JGFzc2lnbjIpKTtcbn1cblxuZnVuY3Rpb24gY29tcHV0ZVN0eWxlcyhfcmVmNCkge1xuICB2YXIgc3RhdGUgPSBfcmVmNC5zdGF0ZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmNC5vcHRpb25zO1xuICB2YXIgX29wdGlvbnMkZ3B1QWNjZWxlcmF0ID0gb3B0aW9ucy5ncHVBY2NlbGVyYXRpb24sXG4gICAgICBncHVBY2NlbGVyYXRpb24gPSBfb3B0aW9ucyRncHVBY2NlbGVyYXQgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRncHVBY2NlbGVyYXQsXG4gICAgICBfb3B0aW9ucyRhZGFwdGl2ZSA9IG9wdGlvbnMuYWRhcHRpdmUsXG4gICAgICBhZGFwdGl2ZSA9IF9vcHRpb25zJGFkYXB0aXZlID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkYWRhcHRpdmUsXG4gICAgICBfb3B0aW9ucyRyb3VuZE9mZnNldHMgPSBvcHRpb25zLnJvdW5kT2Zmc2V0cyxcbiAgICAgIHJvdW5kT2Zmc2V0cyA9IF9vcHRpb25zJHJvdW5kT2Zmc2V0cyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJHJvdW5kT2Zmc2V0cztcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgdmFyIHRyYW5zaXRpb25Qcm9wZXJ0eSA9IGdldENvbXB1dGVkU3R5bGUoc3RhdGUuZWxlbWVudHMucG9wcGVyKS50cmFuc2l0aW9uUHJvcGVydHkgfHwgJyc7XG5cbiAgICBpZiAoYWRhcHRpdmUgJiYgWyd0cmFuc2Zvcm0nLCAndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0J10uc29tZShmdW5jdGlvbiAocHJvcGVydHkpIHtcbiAgICAgIHJldHVybiB0cmFuc2l0aW9uUHJvcGVydHkuaW5kZXhPZihwcm9wZXJ0eSkgPj0gMDtcbiAgICB9KSkge1xuICAgICAgY29uc29sZS53YXJuKFsnUG9wcGVyOiBEZXRlY3RlZCBDU1MgdHJhbnNpdGlvbnMgb24gYXQgbGVhc3Qgb25lIG9mIHRoZSBmb2xsb3dpbmcnLCAnQ1NTIHByb3BlcnRpZXM6IFwidHJhbnNmb3JtXCIsIFwidG9wXCIsIFwicmlnaHRcIiwgXCJib3R0b21cIiwgXCJsZWZ0XCIuJywgJ1xcblxcbicsICdEaXNhYmxlIHRoZSBcImNvbXB1dGVTdHlsZXNcIiBtb2RpZmllclxcJ3MgYGFkYXB0aXZlYCBvcHRpb24gdG8gYWxsb3cnLCAnZm9yIHNtb290aCB0cmFuc2l0aW9ucywgb3IgcmVtb3ZlIHRoZXNlIHByb3BlcnRpZXMgZnJvbSB0aGUgQ1NTJywgJ3RyYW5zaXRpb24gZGVjbGFyYXRpb24gb24gdGhlIHBvcHBlciBlbGVtZW50IGlmIG9ubHkgdHJhbnNpdGlvbmluZycsICdvcGFjaXR5IG9yIGJhY2tncm91bmQtY29sb3IgZm9yIGV4YW1wbGUuJywgJ1xcblxcbicsICdXZSByZWNvbW1lbmQgdXNpbmcgdGhlIHBvcHBlciBlbGVtZW50IGFzIGEgd3JhcHBlciBhcm91bmQgYW4gaW5uZXInLCAnZWxlbWVudCB0aGF0IGNhbiBoYXZlIGFueSBDU1MgcHJvcGVydHkgdHJhbnNpdGlvbmVkIGZvciBhbmltYXRpb25zLiddLmpvaW4oJyAnKSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbW1vblN0eWxlcyA9IHtcbiAgICBwbGFjZW1lbnQ6IGdldEJhc2VQbGFjZW1lbnQoc3RhdGUucGxhY2VtZW50KSxcbiAgICBwb3BwZXI6IHN0YXRlLmVsZW1lbnRzLnBvcHBlcixcbiAgICBwb3BwZXJSZWN0OiBzdGF0ZS5yZWN0cy5wb3BwZXIsXG4gICAgZ3B1QWNjZWxlcmF0aW9uOiBncHVBY2NlbGVyYXRpb25cbiAgfTtcblxuICBpZiAoc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzICE9IG51bGwpIHtcbiAgICBzdGF0ZS5zdHlsZXMucG9wcGVyID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuc3R5bGVzLnBvcHBlciwgbWFwVG9TdHlsZXMoT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uU3R5bGVzLCB7XG4gICAgICBvZmZzZXRzOiBzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMsXG4gICAgICBwb3NpdGlvbjogc3RhdGUub3B0aW9ucy5zdHJhdGVneSxcbiAgICAgIGFkYXB0aXZlOiBhZGFwdGl2ZSxcbiAgICAgIHJvdW5kT2Zmc2V0czogcm91bmRPZmZzZXRzXG4gICAgfSkpKTtcbiAgfVxuXG4gIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhLmFycm93ICE9IG51bGwpIHtcbiAgICBzdGF0ZS5zdHlsZXMuYXJyb3cgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5zdHlsZXMuYXJyb3csIG1hcFRvU3R5bGVzKE9iamVjdC5hc3NpZ24oe30sIGNvbW1vblN0eWxlcywge1xuICAgICAgb2Zmc2V0czogc3RhdGUubW9kaWZpZXJzRGF0YS5hcnJvdyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgYWRhcHRpdmU6IGZhbHNlLFxuICAgICAgcm91bmRPZmZzZXRzOiByb3VuZE9mZnNldHNcbiAgICB9KSkpO1xuICB9XG5cbiAgc3RhdGUuYXR0cmlidXRlcy5wb3BwZXIgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlciwge1xuICAgICdkYXRhLXBvcHBlci1wbGFjZW1lbnQnOiBzdGF0ZS5wbGFjZW1lbnRcbiAgfSk7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdjb21wdXRlU3R5bGVzJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdiZWZvcmVXcml0ZScsXG4gIGZuOiBjb21wdXRlU3R5bGVzLFxuICBkYXRhOiB7fVxufTsiLCJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0V2luZG93LmpzXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxudmFyIHBhc3NpdmUgPSB7XG4gIHBhc3NpdmU6IHRydWVcbn07XG5cbmZ1bmN0aW9uIGVmZmVjdChfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBpbnN0YW5jZSA9IF9yZWYuaW5zdGFuY2UsXG4gICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zO1xuICB2YXIgX29wdGlvbnMkc2Nyb2xsID0gb3B0aW9ucy5zY3JvbGwsXG4gICAgICBzY3JvbGwgPSBfb3B0aW9ucyRzY3JvbGwgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRzY3JvbGwsXG4gICAgICBfb3B0aW9ucyRyZXNpemUgPSBvcHRpb25zLnJlc2l6ZSxcbiAgICAgIHJlc2l6ZSA9IF9vcHRpb25zJHJlc2l6ZSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJHJlc2l6ZTtcbiAgdmFyIHdpbmRvdyA9IGdldFdpbmRvdyhzdGF0ZS5lbGVtZW50cy5wb3BwZXIpO1xuICB2YXIgc2Nyb2xsUGFyZW50cyA9IFtdLmNvbmNhdChzdGF0ZS5zY3JvbGxQYXJlbnRzLnJlZmVyZW5jZSwgc3RhdGUuc2Nyb2xsUGFyZW50cy5wb3BwZXIpO1xuXG4gIGlmIChzY3JvbGwpIHtcbiAgICBzY3JvbGxQYXJlbnRzLmZvckVhY2goZnVuY3Rpb24gKHNjcm9sbFBhcmVudCkge1xuICAgICAgc2Nyb2xsUGFyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGluc3RhbmNlLnVwZGF0ZSwgcGFzc2l2ZSk7XG4gICAgfSk7XG4gIH1cblxuICBpZiAocmVzaXplKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGluc3RhbmNlLnVwZGF0ZSwgcGFzc2l2ZSk7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmIChzY3JvbGwpIHtcbiAgICAgIHNjcm9sbFBhcmVudHMuZm9yRWFjaChmdW5jdGlvbiAoc2Nyb2xsUGFyZW50KSB7XG4gICAgICAgIHNjcm9sbFBhcmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBpbnN0YW5jZS51cGRhdGUsIHBhc3NpdmUpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHJlc2l6ZSkge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGluc3RhbmNlLnVwZGF0ZSwgcGFzc2l2ZSk7XG4gICAgfVxuICB9O1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnZXZlbnRMaXN0ZW5lcnMnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ3dyaXRlJyxcbiAgZm46IGZ1bmN0aW9uIGZuKCkge30sXG4gIGVmZmVjdDogZWZmZWN0LFxuICBkYXRhOiB7fVxufTsiLCJpbXBvcnQgZ2V0T3Bwb3NpdGVQbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldE9wcG9zaXRlUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGdldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGRldGVjdE92ZXJmbG93IGZyb20gXCIuLi91dGlscy9kZXRlY3RPdmVyZmxvdy5qc1wiO1xuaW1wb3J0IGNvbXB1dGVBdXRvUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9jb21wdXRlQXV0b1BsYWNlbWVudC5qc1wiO1xuaW1wb3J0IHsgYm90dG9tLCB0b3AsIHN0YXJ0LCByaWdodCwgbGVmdCwgYXV0byB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IGdldFZhcmlhdGlvbiBmcm9tIFwiLi4vdXRpbHMvZ2V0VmFyaWF0aW9uLmpzXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZnVuY3Rpb24gZ2V0RXhwYW5kZWRGYWxsYmFja1BsYWNlbWVudHMocGxhY2VtZW50KSB7XG4gIGlmIChnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkgPT09IGF1dG8pIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICB2YXIgb3Bwb3NpdGVQbGFjZW1lbnQgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpO1xuICByZXR1cm4gW2dldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50KHBsYWNlbWVudCksIG9wcG9zaXRlUGxhY2VtZW50LCBnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudChvcHBvc2l0ZVBsYWNlbWVudCldO1xufVxuXG5mdW5jdGlvbiBmbGlwKF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnMsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lO1xuXG4gIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdLl9za2lwKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIF9vcHRpb25zJG1haW5BeGlzID0gb3B0aW9ucy5tYWluQXhpcyxcbiAgICAgIGNoZWNrTWFpbkF4aXMgPSBfb3B0aW9ucyRtYWluQXhpcyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJG1haW5BeGlzLFxuICAgICAgX29wdGlvbnMkYWx0QXhpcyA9IG9wdGlvbnMuYWx0QXhpcyxcbiAgICAgIGNoZWNrQWx0QXhpcyA9IF9vcHRpb25zJGFsdEF4aXMgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRhbHRBeGlzLFxuICAgICAgc3BlY2lmaWVkRmFsbGJhY2tQbGFjZW1lbnRzID0gb3B0aW9ucy5mYWxsYmFja1BsYWNlbWVudHMsXG4gICAgICBwYWRkaW5nID0gb3B0aW9ucy5wYWRkaW5nLFxuICAgICAgYm91bmRhcnkgPSBvcHRpb25zLmJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5ID0gb3B0aW9ucy5yb290Qm91bmRhcnksXG4gICAgICBhbHRCb3VuZGFyeSA9IG9wdGlvbnMuYWx0Qm91bmRhcnksXG4gICAgICBfb3B0aW9ucyRmbGlwVmFyaWF0aW8gPSBvcHRpb25zLmZsaXBWYXJpYXRpb25zLFxuICAgICAgZmxpcFZhcmlhdGlvbnMgPSBfb3B0aW9ucyRmbGlwVmFyaWF0aW8gPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRmbGlwVmFyaWF0aW8sXG4gICAgICBhbGxvd2VkQXV0b1BsYWNlbWVudHMgPSBvcHRpb25zLmFsbG93ZWRBdXRvUGxhY2VtZW50cztcbiAgdmFyIHByZWZlcnJlZFBsYWNlbWVudCA9IHN0YXRlLm9wdGlvbnMucGxhY2VtZW50O1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQocHJlZmVycmVkUGxhY2VtZW50KTtcbiAgdmFyIGlzQmFzZVBsYWNlbWVudCA9IGJhc2VQbGFjZW1lbnQgPT09IHByZWZlcnJlZFBsYWNlbWVudDtcbiAgdmFyIGZhbGxiYWNrUGxhY2VtZW50cyA9IHNwZWNpZmllZEZhbGxiYWNrUGxhY2VtZW50cyB8fCAoaXNCYXNlUGxhY2VtZW50IHx8ICFmbGlwVmFyaWF0aW9ucyA/IFtnZXRPcHBvc2l0ZVBsYWNlbWVudChwcmVmZXJyZWRQbGFjZW1lbnQpXSA6IGdldEV4cGFuZGVkRmFsbGJhY2tQbGFjZW1lbnRzKHByZWZlcnJlZFBsYWNlbWVudCkpO1xuICB2YXIgcGxhY2VtZW50cyA9IFtwcmVmZXJyZWRQbGFjZW1lbnRdLmNvbmNhdChmYWxsYmFja1BsYWNlbWVudHMpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgICByZXR1cm4gYWNjLmNvbmNhdChnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkgPT09IGF1dG8gPyBjb21wdXRlQXV0b1BsYWNlbWVudChzdGF0ZSwge1xuICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgICBib3VuZGFyeTogYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnk6IHJvb3RCb3VuZGFyeSxcbiAgICAgIHBhZGRpbmc6IHBhZGRpbmcsXG4gICAgICBmbGlwVmFyaWF0aW9uczogZmxpcFZhcmlhdGlvbnMsXG4gICAgICBhbGxvd2VkQXV0b1BsYWNlbWVudHM6IGFsbG93ZWRBdXRvUGxhY2VtZW50c1xuICAgIH0pIDogcGxhY2VtZW50KTtcbiAgfSwgW10pO1xuICB2YXIgcmVmZXJlbmNlUmVjdCA9IHN0YXRlLnJlY3RzLnJlZmVyZW5jZTtcbiAgdmFyIHBvcHBlclJlY3QgPSBzdGF0ZS5yZWN0cy5wb3BwZXI7XG4gIHZhciBjaGVja3NNYXAgPSBuZXcgTWFwKCk7XG4gIHZhciBtYWtlRmFsbGJhY2tDaGVja3MgPSB0cnVlO1xuICB2YXIgZmlyc3RGaXR0aW5nUGxhY2VtZW50ID0gcGxhY2VtZW50c1swXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBsYWNlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgcGxhY2VtZW50ID0gcGxhY2VtZW50c1tpXTtcblxuICAgIHZhciBfYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KTtcblxuICAgIHZhciBpc1N0YXJ0VmFyaWF0aW9uID0gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCkgPT09IHN0YXJ0O1xuICAgIHZhciBpc1ZlcnRpY2FsID0gW3RvcCwgYm90dG9tXS5pbmRleE9mKF9iYXNlUGxhY2VtZW50KSA+PSAwO1xuICAgIHZhciBsZW4gPSBpc1ZlcnRpY2FsID8gJ3dpZHRoJyA6ICdoZWlnaHQnO1xuICAgIHZhciBvdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudCxcbiAgICAgIGJvdW5kYXJ5OiBib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeTogcm9vdEJvdW5kYXJ5LFxuICAgICAgYWx0Qm91bmRhcnk6IGFsdEJvdW5kYXJ5LFxuICAgICAgcGFkZGluZzogcGFkZGluZ1xuICAgIH0pO1xuICAgIHZhciBtYWluVmFyaWF0aW9uU2lkZSA9IGlzVmVydGljYWwgPyBpc1N0YXJ0VmFyaWF0aW9uID8gcmlnaHQgOiBsZWZ0IDogaXNTdGFydFZhcmlhdGlvbiA/IGJvdHRvbSA6IHRvcDtcblxuICAgIGlmIChyZWZlcmVuY2VSZWN0W2xlbl0gPiBwb3BwZXJSZWN0W2xlbl0pIHtcbiAgICAgIG1haW5WYXJpYXRpb25TaWRlID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQobWFpblZhcmlhdGlvblNpZGUpO1xuICAgIH1cblxuICAgIHZhciBhbHRWYXJpYXRpb25TaWRlID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQobWFpblZhcmlhdGlvblNpZGUpO1xuICAgIHZhciBjaGVja3MgPSBbXTtcblxuICAgIGlmIChjaGVja01haW5BeGlzKSB7XG4gICAgICBjaGVja3MucHVzaChvdmVyZmxvd1tfYmFzZVBsYWNlbWVudF0gPD0gMCk7XG4gICAgfVxuXG4gICAgaWYgKGNoZWNrQWx0QXhpcykge1xuICAgICAgY2hlY2tzLnB1c2gob3ZlcmZsb3dbbWFpblZhcmlhdGlvblNpZGVdIDw9IDAsIG92ZXJmbG93W2FsdFZhcmlhdGlvblNpZGVdIDw9IDApO1xuICAgIH1cblxuICAgIGlmIChjaGVja3MuZXZlcnkoZnVuY3Rpb24gKGNoZWNrKSB7XG4gICAgICByZXR1cm4gY2hlY2s7XG4gICAgfSkpIHtcbiAgICAgIGZpcnN0Rml0dGluZ1BsYWNlbWVudCA9IHBsYWNlbWVudDtcbiAgICAgIG1ha2VGYWxsYmFja0NoZWNrcyA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2hlY2tzTWFwLnNldChwbGFjZW1lbnQsIGNoZWNrcyk7XG4gIH1cblxuICBpZiAobWFrZUZhbGxiYWNrQ2hlY2tzKSB7XG4gICAgLy8gYDJgIG1heSBiZSBkZXNpcmVkIGluIHNvbWUgY2FzZXMg4oCTIHJlc2VhcmNoIGxhdGVyXG4gICAgdmFyIG51bWJlck9mQ2hlY2tzID0gZmxpcFZhcmlhdGlvbnMgPyAzIDogMTtcblxuICAgIHZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKF9pKSB7XG4gICAgICB2YXIgZml0dGluZ1BsYWNlbWVudCA9IHBsYWNlbWVudHMuZmluZChmdW5jdGlvbiAocGxhY2VtZW50KSB7XG4gICAgICAgIHZhciBjaGVja3MgPSBjaGVja3NNYXAuZ2V0KHBsYWNlbWVudCk7XG5cbiAgICAgICAgaWYgKGNoZWNrcykge1xuICAgICAgICAgIHJldHVybiBjaGVja3Muc2xpY2UoMCwgX2kpLmV2ZXJ5KGZ1bmN0aW9uIChjaGVjaykge1xuICAgICAgICAgICAgcmV0dXJuIGNoZWNrO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKGZpdHRpbmdQbGFjZW1lbnQpIHtcbiAgICAgICAgZmlyc3RGaXR0aW5nUGxhY2VtZW50ID0gZml0dGluZ1BsYWNlbWVudDtcbiAgICAgICAgcmV0dXJuIFwiYnJlYWtcIjtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZm9yICh2YXIgX2kgPSBudW1iZXJPZkNoZWNrczsgX2kgPiAwOyBfaS0tKSB7XG4gICAgICB2YXIgX3JldCA9IF9sb29wKF9pKTtcblxuICAgICAgaWYgKF9yZXQgPT09IFwiYnJlYWtcIikgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKHN0YXRlLnBsYWNlbWVudCAhPT0gZmlyc3RGaXR0aW5nUGxhY2VtZW50KSB7XG4gICAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXS5fc2tpcCA9IHRydWU7XG4gICAgc3RhdGUucGxhY2VtZW50ID0gZmlyc3RGaXR0aW5nUGxhY2VtZW50O1xuICAgIHN0YXRlLnJlc2V0ID0gdHJ1ZTtcbiAgfVxufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnZmxpcCcsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnbWFpbicsXG4gIGZuOiBmbGlwLFxuICByZXF1aXJlc0lmRXhpc3RzOiBbJ29mZnNldCddLFxuICBkYXRhOiB7XG4gICAgX3NraXA6IGZhbHNlXG4gIH1cbn07IiwiaW1wb3J0IHsgdG9wLCBib3R0b20sIGxlZnQsIHJpZ2h0IH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5pbXBvcnQgZGV0ZWN0T3ZlcmZsb3cgZnJvbSBcIi4uL3V0aWxzL2RldGVjdE92ZXJmbG93LmpzXCI7XG5cbmZ1bmN0aW9uIGdldFNpZGVPZmZzZXRzKG92ZXJmbG93LCByZWN0LCBwcmV2ZW50ZWRPZmZzZXRzKSB7XG4gIGlmIChwcmV2ZW50ZWRPZmZzZXRzID09PSB2b2lkIDApIHtcbiAgICBwcmV2ZW50ZWRPZmZzZXRzID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDBcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0b3A6IG92ZXJmbG93LnRvcCAtIHJlY3QuaGVpZ2h0IC0gcHJldmVudGVkT2Zmc2V0cy55LFxuICAgIHJpZ2h0OiBvdmVyZmxvdy5yaWdodCAtIHJlY3Qud2lkdGggKyBwcmV2ZW50ZWRPZmZzZXRzLngsXG4gICAgYm90dG9tOiBvdmVyZmxvdy5ib3R0b20gLSByZWN0LmhlaWdodCArIHByZXZlbnRlZE9mZnNldHMueSxcbiAgICBsZWZ0OiBvdmVyZmxvdy5sZWZ0IC0gcmVjdC53aWR0aCAtIHByZXZlbnRlZE9mZnNldHMueFxuICB9O1xufVxuXG5mdW5jdGlvbiBpc0FueVNpZGVGdWxseUNsaXBwZWQob3ZlcmZsb3cpIHtcbiAgcmV0dXJuIFt0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnRdLnNvbWUoZnVuY3Rpb24gKHNpZGUpIHtcbiAgICByZXR1cm4gb3ZlcmZsb3dbc2lkZV0gPj0gMDtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGhpZGUoX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZTtcbiAgdmFyIHJlZmVyZW5jZVJlY3QgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2U7XG4gIHZhciBwb3BwZXJSZWN0ID0gc3RhdGUucmVjdHMucG9wcGVyO1xuICB2YXIgcHJldmVudGVkT2Zmc2V0cyA9IHN0YXRlLm1vZGlmaWVyc0RhdGEucHJldmVudE92ZXJmbG93O1xuICB2YXIgcmVmZXJlbmNlT3ZlcmZsb3cgPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgIGVsZW1lbnRDb250ZXh0OiAncmVmZXJlbmNlJ1xuICB9KTtcbiAgdmFyIHBvcHBlckFsdE92ZXJmbG93ID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICBhbHRCb3VuZGFyeTogdHJ1ZVxuICB9KTtcbiAgdmFyIHJlZmVyZW5jZUNsaXBwaW5nT2Zmc2V0cyA9IGdldFNpZGVPZmZzZXRzKHJlZmVyZW5jZU92ZXJmbG93LCByZWZlcmVuY2VSZWN0KTtcbiAgdmFyIHBvcHBlckVzY2FwZU9mZnNldHMgPSBnZXRTaWRlT2Zmc2V0cyhwb3BwZXJBbHRPdmVyZmxvdywgcG9wcGVyUmVjdCwgcHJldmVudGVkT2Zmc2V0cyk7XG4gIHZhciBpc1JlZmVyZW5jZUhpZGRlbiA9IGlzQW55U2lkZUZ1bGx5Q2xpcHBlZChyZWZlcmVuY2VDbGlwcGluZ09mZnNldHMpO1xuICB2YXIgaGFzUG9wcGVyRXNjYXBlZCA9IGlzQW55U2lkZUZ1bGx5Q2xpcHBlZChwb3BwZXJFc2NhcGVPZmZzZXRzKTtcbiAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IHtcbiAgICByZWZlcmVuY2VDbGlwcGluZ09mZnNldHM6IHJlZmVyZW5jZUNsaXBwaW5nT2Zmc2V0cyxcbiAgICBwb3BwZXJFc2NhcGVPZmZzZXRzOiBwb3BwZXJFc2NhcGVPZmZzZXRzLFxuICAgIGlzUmVmZXJlbmNlSGlkZGVuOiBpc1JlZmVyZW5jZUhpZGRlbixcbiAgICBoYXNQb3BwZXJFc2NhcGVkOiBoYXNQb3BwZXJFc2NhcGVkXG4gIH07XG4gIHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuYXR0cmlidXRlcy5wb3BwZXIsIHtcbiAgICAnZGF0YS1wb3BwZXItcmVmZXJlbmNlLWhpZGRlbic6IGlzUmVmZXJlbmNlSGlkZGVuLFxuICAgICdkYXRhLXBvcHBlci1lc2NhcGVkJzogaGFzUG9wcGVyRXNjYXBlZFxuICB9KTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2hpZGUnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ21haW4nLFxuICByZXF1aXJlc0lmRXhpc3RzOiBbJ3ByZXZlbnRPdmVyZmxvdyddLFxuICBmbjogaGlkZVxufTsiLCJleHBvcnQgeyBkZWZhdWx0IGFzIGFwcGx5U3R5bGVzIH0gZnJvbSBcIi4vYXBwbHlTdHlsZXMuanNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYXJyb3cgfSBmcm9tIFwiLi9hcnJvdy5qc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjb21wdXRlU3R5bGVzIH0gZnJvbSBcIi4vY29tcHV0ZVN0eWxlcy5qc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBldmVudExpc3RlbmVycyB9IGZyb20gXCIuL2V2ZW50TGlzdGVuZXJzLmpzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGZsaXAgfSBmcm9tIFwiLi9mbGlwLmpzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGhpZGUgfSBmcm9tIFwiLi9oaWRlLmpzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIG9mZnNldCB9IGZyb20gXCIuL29mZnNldC5qc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBwb3BwZXJPZmZzZXRzIH0gZnJvbSBcIi4vcG9wcGVyT2Zmc2V0cy5qc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBwcmV2ZW50T3ZlcmZsb3cgfSBmcm9tIFwiLi9wcmV2ZW50T3ZlcmZsb3cuanNcIjsiLCJpbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IHsgdG9wLCBsZWZ0LCByaWdodCwgcGxhY2VtZW50cyB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuZXhwb3J0IGZ1bmN0aW9uIGRpc3RhbmNlQW5kU2tpZGRpbmdUb1hZKHBsYWNlbWVudCwgcmVjdHMsIG9mZnNldCkge1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgdmFyIGludmVydERpc3RhbmNlID0gW2xlZnQsIHRvcF0uaW5kZXhPZihiYXNlUGxhY2VtZW50KSA+PSAwID8gLTEgOiAxO1xuXG4gIHZhciBfcmVmID0gdHlwZW9mIG9mZnNldCA9PT0gJ2Z1bmN0aW9uJyA/IG9mZnNldChPYmplY3QuYXNzaWduKHt9LCByZWN0cywge1xuICAgIHBsYWNlbWVudDogcGxhY2VtZW50XG4gIH0pKSA6IG9mZnNldCxcbiAgICAgIHNraWRkaW5nID0gX3JlZlswXSxcbiAgICAgIGRpc3RhbmNlID0gX3JlZlsxXTtcblxuICBza2lkZGluZyA9IHNraWRkaW5nIHx8IDA7XG4gIGRpc3RhbmNlID0gKGRpc3RhbmNlIHx8IDApICogaW52ZXJ0RGlzdGFuY2U7XG4gIHJldHVybiBbbGVmdCwgcmlnaHRdLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgPj0gMCA/IHtcbiAgICB4OiBkaXN0YW5jZSxcbiAgICB5OiBza2lkZGluZ1xuICB9IDoge1xuICAgIHg6IHNraWRkaW5nLFxuICAgIHk6IGRpc3RhbmNlXG4gIH07XG59XG5cbmZ1bmN0aW9uIG9mZnNldChfcmVmMikge1xuICB2YXIgc3RhdGUgPSBfcmVmMi5zdGF0ZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmMi5vcHRpb25zLFxuICAgICAgbmFtZSA9IF9yZWYyLm5hbWU7XG4gIHZhciBfb3B0aW9ucyRvZmZzZXQgPSBvcHRpb25zLm9mZnNldCxcbiAgICAgIG9mZnNldCA9IF9vcHRpb25zJG9mZnNldCA9PT0gdm9pZCAwID8gWzAsIDBdIDogX29wdGlvbnMkb2Zmc2V0O1xuICB2YXIgZGF0YSA9IHBsYWNlbWVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICAgIGFjY1twbGFjZW1lbnRdID0gZGlzdGFuY2VBbmRTa2lkZGluZ1RvWFkocGxhY2VtZW50LCBzdGF0ZS5yZWN0cywgb2Zmc2V0KTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG4gIHZhciBfZGF0YSRzdGF0ZSRwbGFjZW1lbnQgPSBkYXRhW3N0YXRlLnBsYWNlbWVudF0sXG4gICAgICB4ID0gX2RhdGEkc3RhdGUkcGxhY2VtZW50LngsXG4gICAgICB5ID0gX2RhdGEkc3RhdGUkcGxhY2VtZW50Lnk7XG5cbiAgaWYgKHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cyAhPSBudWxsKSB7XG4gICAgc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzLnggKz0geDtcbiAgICBzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMueSArPSB5O1xuICB9XG5cbiAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IGRhdGE7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdvZmZzZXQnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ21haW4nLFxuICByZXF1aXJlczogWydwb3BwZXJPZmZzZXRzJ10sXG4gIGZuOiBvZmZzZXRcbn07IiwiaW1wb3J0IGNvbXB1dGVPZmZzZXRzIGZyb20gXCIuLi91dGlscy9jb21wdXRlT2Zmc2V0cy5qc1wiO1xuXG5mdW5jdGlvbiBwb3BwZXJPZmZzZXRzKF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWU7XG4gIC8vIE9mZnNldHMgYXJlIHRoZSBhY3R1YWwgcG9zaXRpb24gdGhlIHBvcHBlciBuZWVkcyB0byBoYXZlIHRvIGJlXG4gIC8vIHByb3Blcmx5IHBvc2l0aW9uZWQgbmVhciBpdHMgcmVmZXJlbmNlIGVsZW1lbnRcbiAgLy8gVGhpcyBpcyB0aGUgbW9zdCBiYXNpYyBwbGFjZW1lbnQsIGFuZCB3aWxsIGJlIGFkanVzdGVkIGJ5XG4gIC8vIHRoZSBtb2RpZmllcnMgaW4gdGhlIG5leHQgc3RlcFxuICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0gY29tcHV0ZU9mZnNldHMoe1xuICAgIHJlZmVyZW5jZTogc3RhdGUucmVjdHMucmVmZXJlbmNlLFxuICAgIGVsZW1lbnQ6IHN0YXRlLnJlY3RzLnBvcHBlcixcbiAgICBzdHJhdGVneTogJ2Fic29sdXRlJyxcbiAgICBwbGFjZW1lbnQ6IHN0YXRlLnBsYWNlbWVudFxuICB9KTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ3BvcHBlck9mZnNldHMnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ3JlYWQnLFxuICBmbjogcG9wcGVyT2Zmc2V0cyxcbiAgZGF0YToge31cbn07IiwiaW1wb3J0IHsgdG9wLCBsZWZ0LCByaWdodCwgYm90dG9tLCBzdGFydCB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmltcG9ydCBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldE1haW5BeGlzRnJvbVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGdldEFsdEF4aXMgZnJvbSBcIi4uL3V0aWxzL2dldEFsdEF4aXMuanNcIjtcbmltcG9ydCB3aXRoaW4gZnJvbSBcIi4uL3V0aWxzL3dpdGhpbi5qc1wiO1xuaW1wb3J0IGdldExheW91dFJlY3QgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRMYXlvdXRSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0T2Zmc2V0UGFyZW50IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0T2Zmc2V0UGFyZW50LmpzXCI7XG5pbXBvcnQgZGV0ZWN0T3ZlcmZsb3cgZnJvbSBcIi4uL3V0aWxzL2RldGVjdE92ZXJmbG93LmpzXCI7XG5pbXBvcnQgZ2V0VmFyaWF0aW9uIGZyb20gXCIuLi91dGlscy9nZXRWYXJpYXRpb24uanNcIjtcbmltcG9ydCBnZXRGcmVzaFNpZGVPYmplY3QgZnJvbSBcIi4uL3V0aWxzL2dldEZyZXNoU2lkZU9iamVjdC5qc1wiO1xuaW1wb3J0IHsgbWF4IGFzIG1hdGhNYXgsIG1pbiBhcyBtYXRoTWluIH0gZnJvbSBcIi4uL3V0aWxzL21hdGguanNcIjtcblxuZnVuY3Rpb24gcHJldmVudE92ZXJmbG93KF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnMsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lO1xuICB2YXIgX29wdGlvbnMkbWFpbkF4aXMgPSBvcHRpb25zLm1haW5BeGlzLFxuICAgICAgY2hlY2tNYWluQXhpcyA9IF9vcHRpb25zJG1haW5BeGlzID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkbWFpbkF4aXMsXG4gICAgICBfb3B0aW9ucyRhbHRBeGlzID0gb3B0aW9ucy5hbHRBeGlzLFxuICAgICAgY2hlY2tBbHRBeGlzID0gX29wdGlvbnMkYWx0QXhpcyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfb3B0aW9ucyRhbHRBeGlzLFxuICAgICAgYm91bmRhcnkgPSBvcHRpb25zLmJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5ID0gb3B0aW9ucy5yb290Qm91bmRhcnksXG4gICAgICBhbHRCb3VuZGFyeSA9IG9wdGlvbnMuYWx0Qm91bmRhcnksXG4gICAgICBwYWRkaW5nID0gb3B0aW9ucy5wYWRkaW5nLFxuICAgICAgX29wdGlvbnMkdGV0aGVyID0gb3B0aW9ucy50ZXRoZXIsXG4gICAgICB0ZXRoZXIgPSBfb3B0aW9ucyR0ZXRoZXIgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyR0ZXRoZXIsXG4gICAgICBfb3B0aW9ucyR0ZXRoZXJPZmZzZXQgPSBvcHRpb25zLnRldGhlck9mZnNldCxcbiAgICAgIHRldGhlck9mZnNldCA9IF9vcHRpb25zJHRldGhlck9mZnNldCA9PT0gdm9pZCAwID8gMCA6IF9vcHRpb25zJHRldGhlck9mZnNldDtcbiAgdmFyIG92ZXJmbG93ID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICBib3VuZGFyeTogYm91bmRhcnksXG4gICAgcm9vdEJvdW5kYXJ5OiByb290Qm91bmRhcnksXG4gICAgcGFkZGluZzogcGFkZGluZyxcbiAgICBhbHRCb3VuZGFyeTogYWx0Qm91bmRhcnlcbiAgfSk7XG4gIHZhciBiYXNlUGxhY2VtZW50ID0gZ2V0QmFzZVBsYWNlbWVudChzdGF0ZS5wbGFjZW1lbnQpO1xuICB2YXIgdmFyaWF0aW9uID0gZ2V0VmFyaWF0aW9uKHN0YXRlLnBsYWNlbWVudCk7XG4gIHZhciBpc0Jhc2VQbGFjZW1lbnQgPSAhdmFyaWF0aW9uO1xuICB2YXIgbWFpbkF4aXMgPSBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQoYmFzZVBsYWNlbWVudCk7XG4gIHZhciBhbHRBeGlzID0gZ2V0QWx0QXhpcyhtYWluQXhpcyk7XG4gIHZhciBwb3BwZXJPZmZzZXRzID0gc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzO1xuICB2YXIgcmVmZXJlbmNlUmVjdCA9IHN0YXRlLnJlY3RzLnJlZmVyZW5jZTtcbiAgdmFyIHBvcHBlclJlY3QgPSBzdGF0ZS5yZWN0cy5wb3BwZXI7XG4gIHZhciB0ZXRoZXJPZmZzZXRWYWx1ZSA9IHR5cGVvZiB0ZXRoZXJPZmZzZXQgPT09ICdmdW5jdGlvbicgPyB0ZXRoZXJPZmZzZXQoT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUucmVjdHMsIHtcbiAgICBwbGFjZW1lbnQ6IHN0YXRlLnBsYWNlbWVudFxuICB9KSkgOiB0ZXRoZXJPZmZzZXQ7XG4gIHZhciBkYXRhID0ge1xuICAgIHg6IDAsXG4gICAgeTogMFxuICB9O1xuXG4gIGlmICghcG9wcGVyT2Zmc2V0cykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChjaGVja01haW5BeGlzIHx8IGNoZWNrQWx0QXhpcykge1xuICAgIHZhciBtYWluU2lkZSA9IG1haW5BeGlzID09PSAneScgPyB0b3AgOiBsZWZ0O1xuICAgIHZhciBhbHRTaWRlID0gbWFpbkF4aXMgPT09ICd5JyA/IGJvdHRvbSA6IHJpZ2h0O1xuICAgIHZhciBsZW4gPSBtYWluQXhpcyA9PT0gJ3knID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuICAgIHZhciBvZmZzZXQgPSBwb3BwZXJPZmZzZXRzW21haW5BeGlzXTtcbiAgICB2YXIgbWluID0gcG9wcGVyT2Zmc2V0c1ttYWluQXhpc10gKyBvdmVyZmxvd1ttYWluU2lkZV07XG4gICAgdmFyIG1heCA9IHBvcHBlck9mZnNldHNbbWFpbkF4aXNdIC0gb3ZlcmZsb3dbYWx0U2lkZV07XG4gICAgdmFyIGFkZGl0aXZlID0gdGV0aGVyID8gLXBvcHBlclJlY3RbbGVuXSAvIDIgOiAwO1xuICAgIHZhciBtaW5MZW4gPSB2YXJpYXRpb24gPT09IHN0YXJ0ID8gcmVmZXJlbmNlUmVjdFtsZW5dIDogcG9wcGVyUmVjdFtsZW5dO1xuICAgIHZhciBtYXhMZW4gPSB2YXJpYXRpb24gPT09IHN0YXJ0ID8gLXBvcHBlclJlY3RbbGVuXSA6IC1yZWZlcmVuY2VSZWN0W2xlbl07IC8vIFdlIG5lZWQgdG8gaW5jbHVkZSB0aGUgYXJyb3cgaW4gdGhlIGNhbGN1bGF0aW9uIHNvIHRoZSBhcnJvdyBkb2Vzbid0IGdvXG4gICAgLy8gb3V0c2lkZSB0aGUgcmVmZXJlbmNlIGJvdW5kc1xuXG4gICAgdmFyIGFycm93RWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzLmFycm93O1xuICAgIHZhciBhcnJvd1JlY3QgPSB0ZXRoZXIgJiYgYXJyb3dFbGVtZW50ID8gZ2V0TGF5b3V0UmVjdChhcnJvd0VsZW1lbnQpIDoge1xuICAgICAgd2lkdGg6IDAsXG4gICAgICBoZWlnaHQ6IDBcbiAgICB9O1xuICAgIHZhciBhcnJvd1BhZGRpbmdPYmplY3QgPSBzdGF0ZS5tb2RpZmllcnNEYXRhWydhcnJvdyNwZXJzaXN0ZW50J10gPyBzdGF0ZS5tb2RpZmllcnNEYXRhWydhcnJvdyNwZXJzaXN0ZW50J10ucGFkZGluZyA6IGdldEZyZXNoU2lkZU9iamVjdCgpO1xuICAgIHZhciBhcnJvd1BhZGRpbmdNaW4gPSBhcnJvd1BhZGRpbmdPYmplY3RbbWFpblNpZGVdO1xuICAgIHZhciBhcnJvd1BhZGRpbmdNYXggPSBhcnJvd1BhZGRpbmdPYmplY3RbYWx0U2lkZV07IC8vIElmIHRoZSByZWZlcmVuY2UgbGVuZ3RoIGlzIHNtYWxsZXIgdGhhbiB0aGUgYXJyb3cgbGVuZ3RoLCB3ZSBkb24ndCB3YW50XG4gICAgLy8gdG8gaW5jbHVkZSBpdHMgZnVsbCBzaXplIGluIHRoZSBjYWxjdWxhdGlvbi4gSWYgdGhlIHJlZmVyZW5jZSBpcyBzbWFsbFxuICAgIC8vIGFuZCBuZWFyIHRoZSBlZGdlIG9mIGEgYm91bmRhcnksIHRoZSBwb3BwZXIgY2FuIG92ZXJmbG93IGV2ZW4gaWYgdGhlXG4gICAgLy8gcmVmZXJlbmNlIGlzIG5vdCBvdmVyZmxvd2luZyBhcyB3ZWxsIChlLmcuIHZpcnR1YWwgZWxlbWVudHMgd2l0aCBub1xuICAgIC8vIHdpZHRoIG9yIGhlaWdodClcblxuICAgIHZhciBhcnJvd0xlbiA9IHdpdGhpbigwLCByZWZlcmVuY2VSZWN0W2xlbl0sIGFycm93UmVjdFtsZW5dKTtcbiAgICB2YXIgbWluT2Zmc2V0ID0gaXNCYXNlUGxhY2VtZW50ID8gcmVmZXJlbmNlUmVjdFtsZW5dIC8gMiAtIGFkZGl0aXZlIC0gYXJyb3dMZW4gLSBhcnJvd1BhZGRpbmdNaW4gLSB0ZXRoZXJPZmZzZXRWYWx1ZSA6IG1pbkxlbiAtIGFycm93TGVuIC0gYXJyb3dQYWRkaW5nTWluIC0gdGV0aGVyT2Zmc2V0VmFsdWU7XG4gICAgdmFyIG1heE9mZnNldCA9IGlzQmFzZVBsYWNlbWVudCA/IC1yZWZlcmVuY2VSZWN0W2xlbl0gLyAyICsgYWRkaXRpdmUgKyBhcnJvd0xlbiArIGFycm93UGFkZGluZ01heCArIHRldGhlck9mZnNldFZhbHVlIDogbWF4TGVuICsgYXJyb3dMZW4gKyBhcnJvd1BhZGRpbmdNYXggKyB0ZXRoZXJPZmZzZXRWYWx1ZTtcbiAgICB2YXIgYXJyb3dPZmZzZXRQYXJlbnQgPSBzdGF0ZS5lbGVtZW50cy5hcnJvdyAmJiBnZXRPZmZzZXRQYXJlbnQoc3RhdGUuZWxlbWVudHMuYXJyb3cpO1xuICAgIHZhciBjbGllbnRPZmZzZXQgPSBhcnJvd09mZnNldFBhcmVudCA/IG1haW5BeGlzID09PSAneScgPyBhcnJvd09mZnNldFBhcmVudC5jbGllbnRUb3AgfHwgMCA6IGFycm93T2Zmc2V0UGFyZW50LmNsaWVudExlZnQgfHwgMCA6IDA7XG4gICAgdmFyIG9mZnNldE1vZGlmaWVyVmFsdWUgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLm9mZnNldCA/IHN0YXRlLm1vZGlmaWVyc0RhdGEub2Zmc2V0W3N0YXRlLnBsYWNlbWVudF1bbWFpbkF4aXNdIDogMDtcbiAgICB2YXIgdGV0aGVyTWluID0gcG9wcGVyT2Zmc2V0c1ttYWluQXhpc10gKyBtaW5PZmZzZXQgLSBvZmZzZXRNb2RpZmllclZhbHVlIC0gY2xpZW50T2Zmc2V0O1xuICAgIHZhciB0ZXRoZXJNYXggPSBwb3BwZXJPZmZzZXRzW21haW5BeGlzXSArIG1heE9mZnNldCAtIG9mZnNldE1vZGlmaWVyVmFsdWU7XG5cbiAgICBpZiAoY2hlY2tNYWluQXhpcykge1xuICAgICAgdmFyIHByZXZlbnRlZE9mZnNldCA9IHdpdGhpbih0ZXRoZXIgPyBtYXRoTWluKG1pbiwgdGV0aGVyTWluKSA6IG1pbiwgb2Zmc2V0LCB0ZXRoZXIgPyBtYXRoTWF4KG1heCwgdGV0aGVyTWF4KSA6IG1heCk7XG4gICAgICBwb3BwZXJPZmZzZXRzW21haW5BeGlzXSA9IHByZXZlbnRlZE9mZnNldDtcbiAgICAgIGRhdGFbbWFpbkF4aXNdID0gcHJldmVudGVkT2Zmc2V0IC0gb2Zmc2V0O1xuICAgIH1cblxuICAgIGlmIChjaGVja0FsdEF4aXMpIHtcbiAgICAgIHZhciBfbWFpblNpZGUgPSBtYWluQXhpcyA9PT0gJ3gnID8gdG9wIDogbGVmdDtcblxuICAgICAgdmFyIF9hbHRTaWRlID0gbWFpbkF4aXMgPT09ICd4JyA/IGJvdHRvbSA6IHJpZ2h0O1xuXG4gICAgICB2YXIgX29mZnNldCA9IHBvcHBlck9mZnNldHNbYWx0QXhpc107XG5cbiAgICAgIHZhciBfbWluID0gX29mZnNldCArIG92ZXJmbG93W19tYWluU2lkZV07XG5cbiAgICAgIHZhciBfbWF4ID0gX29mZnNldCAtIG92ZXJmbG93W19hbHRTaWRlXTtcblxuICAgICAgdmFyIF9wcmV2ZW50ZWRPZmZzZXQgPSB3aXRoaW4odGV0aGVyID8gbWF0aE1pbihfbWluLCB0ZXRoZXJNaW4pIDogX21pbiwgX29mZnNldCwgdGV0aGVyID8gbWF0aE1heChfbWF4LCB0ZXRoZXJNYXgpIDogX21heCk7XG5cbiAgICAgIHBvcHBlck9mZnNldHNbYWx0QXhpc10gPSBfcHJldmVudGVkT2Zmc2V0O1xuICAgICAgZGF0YVthbHRBeGlzXSA9IF9wcmV2ZW50ZWRPZmZzZXQgLSBfb2Zmc2V0O1xuICAgIH1cbiAgfVxuXG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSBkYXRhO1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAncHJldmVudE92ZXJmbG93JyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdtYWluJyxcbiAgZm46IHByZXZlbnRPdmVyZmxvdyxcbiAgcmVxdWlyZXNJZkV4aXN0czogWydvZmZzZXQnXVxufTsiLCJpbXBvcnQgeyBwb3BwZXJHZW5lcmF0b3IsIGRldGVjdE92ZXJmbG93IH0gZnJvbSBcIi4vY3JlYXRlUG9wcGVyLmpzXCI7XG5pbXBvcnQgZXZlbnRMaXN0ZW5lcnMgZnJvbSBcIi4vbW9kaWZpZXJzL2V2ZW50TGlzdGVuZXJzLmpzXCI7XG5pbXBvcnQgcG9wcGVyT2Zmc2V0cyBmcm9tIFwiLi9tb2RpZmllcnMvcG9wcGVyT2Zmc2V0cy5qc1wiO1xuaW1wb3J0IGNvbXB1dGVTdHlsZXMgZnJvbSBcIi4vbW9kaWZpZXJzL2NvbXB1dGVTdHlsZXMuanNcIjtcbmltcG9ydCBhcHBseVN0eWxlcyBmcm9tIFwiLi9tb2RpZmllcnMvYXBwbHlTdHlsZXMuanNcIjtcbnZhciBkZWZhdWx0TW9kaWZpZXJzID0gW2V2ZW50TGlzdGVuZXJzLCBwb3BwZXJPZmZzZXRzLCBjb21wdXRlU3R5bGVzLCBhcHBseVN0eWxlc107XG52YXIgY3JlYXRlUG9wcGVyID0gLyojX19QVVJFX18qL3BvcHBlckdlbmVyYXRvcih7XG4gIGRlZmF1bHRNb2RpZmllcnM6IGRlZmF1bHRNb2RpZmllcnNcbn0pOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCB7IGNyZWF0ZVBvcHBlciwgcG9wcGVyR2VuZXJhdG9yLCBkZWZhdWx0TW9kaWZpZXJzLCBkZXRlY3RPdmVyZmxvdyB9OyIsImltcG9ydCB7IHBvcHBlckdlbmVyYXRvciwgZGV0ZWN0T3ZlcmZsb3cgfSBmcm9tIFwiLi9jcmVhdGVQb3BwZXIuanNcIjtcbmltcG9ydCBldmVudExpc3RlbmVycyBmcm9tIFwiLi9tb2RpZmllcnMvZXZlbnRMaXN0ZW5lcnMuanNcIjtcbmltcG9ydCBwb3BwZXJPZmZzZXRzIGZyb20gXCIuL21vZGlmaWVycy9wb3BwZXJPZmZzZXRzLmpzXCI7XG5pbXBvcnQgY29tcHV0ZVN0eWxlcyBmcm9tIFwiLi9tb2RpZmllcnMvY29tcHV0ZVN0eWxlcy5qc1wiO1xuaW1wb3J0IGFwcGx5U3R5bGVzIGZyb20gXCIuL21vZGlmaWVycy9hcHBseVN0eWxlcy5qc1wiO1xuaW1wb3J0IG9mZnNldCBmcm9tIFwiLi9tb2RpZmllcnMvb2Zmc2V0LmpzXCI7XG5pbXBvcnQgZmxpcCBmcm9tIFwiLi9tb2RpZmllcnMvZmxpcC5qc1wiO1xuaW1wb3J0IHByZXZlbnRPdmVyZmxvdyBmcm9tIFwiLi9tb2RpZmllcnMvcHJldmVudE92ZXJmbG93LmpzXCI7XG5pbXBvcnQgYXJyb3cgZnJvbSBcIi4vbW9kaWZpZXJzL2Fycm93LmpzXCI7XG5pbXBvcnQgaGlkZSBmcm9tIFwiLi9tb2RpZmllcnMvaGlkZS5qc1wiO1xudmFyIGRlZmF1bHRNb2RpZmllcnMgPSBbZXZlbnRMaXN0ZW5lcnMsIHBvcHBlck9mZnNldHMsIGNvbXB1dGVTdHlsZXMsIGFwcGx5U3R5bGVzLCBvZmZzZXQsIGZsaXAsIHByZXZlbnRPdmVyZmxvdywgYXJyb3csIGhpZGVdO1xudmFyIGNyZWF0ZVBvcHBlciA9IC8qI19fUFVSRV9fKi9wb3BwZXJHZW5lcmF0b3Ioe1xuICBkZWZhdWx0TW9kaWZpZXJzOiBkZWZhdWx0TW9kaWZpZXJzXG59KTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5leHBvcnQgeyBjcmVhdGVQb3BwZXIsIHBvcHBlckdlbmVyYXRvciwgZGVmYXVsdE1vZGlmaWVycywgZGV0ZWN0T3ZlcmZsb3cgfTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5leHBvcnQgeyBjcmVhdGVQb3BwZXIgYXMgY3JlYXRlUG9wcGVyTGl0ZSB9IGZyb20gXCIuL3BvcHBlci1saXRlLmpzXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZXhwb3J0ICogZnJvbSBcIi4vbW9kaWZpZXJzL2luZGV4LmpzXCI7IiwiaW1wb3J0IGdldFZhcmlhdGlvbiBmcm9tIFwiLi9nZXRWYXJpYXRpb24uanNcIjtcbmltcG9ydCB7IHZhcmlhdGlvblBsYWNlbWVudHMsIGJhc2VQbGFjZW1lbnRzLCBwbGFjZW1lbnRzIGFzIGFsbFBsYWNlbWVudHMgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCBkZXRlY3RPdmVyZmxvdyBmcm9tIFwiLi9kZXRlY3RPdmVyZmxvdy5qc1wiO1xuaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4vZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcHV0ZUF1dG9QbGFjZW1lbnQoc3RhdGUsIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIHZhciBfb3B0aW9ucyA9IG9wdGlvbnMsXG4gICAgICBwbGFjZW1lbnQgPSBfb3B0aW9ucy5wbGFjZW1lbnQsXG4gICAgICBib3VuZGFyeSA9IF9vcHRpb25zLmJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5ID0gX29wdGlvbnMucm9vdEJvdW5kYXJ5LFxuICAgICAgcGFkZGluZyA9IF9vcHRpb25zLnBhZGRpbmcsXG4gICAgICBmbGlwVmFyaWF0aW9ucyA9IF9vcHRpb25zLmZsaXBWYXJpYXRpb25zLFxuICAgICAgX29wdGlvbnMkYWxsb3dlZEF1dG9QID0gX29wdGlvbnMuYWxsb3dlZEF1dG9QbGFjZW1lbnRzLFxuICAgICAgYWxsb3dlZEF1dG9QbGFjZW1lbnRzID0gX29wdGlvbnMkYWxsb3dlZEF1dG9QID09PSB2b2lkIDAgPyBhbGxQbGFjZW1lbnRzIDogX29wdGlvbnMkYWxsb3dlZEF1dG9QO1xuICB2YXIgdmFyaWF0aW9uID0gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCk7XG4gIHZhciBwbGFjZW1lbnRzID0gdmFyaWF0aW9uID8gZmxpcFZhcmlhdGlvbnMgPyB2YXJpYXRpb25QbGFjZW1lbnRzIDogdmFyaWF0aW9uUGxhY2VtZW50cy5maWx0ZXIoZnVuY3Rpb24gKHBsYWNlbWVudCkge1xuICAgIHJldHVybiBnZXRWYXJpYXRpb24ocGxhY2VtZW50KSA9PT0gdmFyaWF0aW9uO1xuICB9KSA6IGJhc2VQbGFjZW1lbnRzO1xuICB2YXIgYWxsb3dlZFBsYWNlbWVudHMgPSBwbGFjZW1lbnRzLmZpbHRlcihmdW5jdGlvbiAocGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIGFsbG93ZWRBdXRvUGxhY2VtZW50cy5pbmRleE9mKHBsYWNlbWVudCkgPj0gMDtcbiAgfSk7XG5cbiAgaWYgKGFsbG93ZWRQbGFjZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgIGFsbG93ZWRQbGFjZW1lbnRzID0gcGxhY2VtZW50cztcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoWydQb3BwZXI6IFRoZSBgYWxsb3dlZEF1dG9QbGFjZW1lbnRzYCBvcHRpb24gZGlkIG5vdCBhbGxvdyBhbnknLCAncGxhY2VtZW50cy4gRW5zdXJlIHRoZSBgcGxhY2VtZW50YCBvcHRpb24gbWF0Y2hlcyB0aGUgdmFyaWF0aW9uJywgJ29mIHRoZSBhbGxvd2VkIHBsYWNlbWVudHMuJywgJ0ZvciBleGFtcGxlLCBcImF1dG9cIiBjYW5ub3QgYmUgdXNlZCB0byBhbGxvdyBcImJvdHRvbS1zdGFydFwiLicsICdVc2UgXCJhdXRvLXN0YXJ0XCIgaW5zdGVhZC4nXS5qb2luKCcgJykpO1xuICAgIH1cbiAgfSAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS10eXBlXTogRmxvdyBzZWVtcyB0byBoYXZlIHByb2JsZW1zIHdpdGggdHdvIGFycmF5IHVuaW9ucy4uLlxuXG5cbiAgdmFyIG92ZXJmbG93cyA9IGFsbG93ZWRQbGFjZW1lbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgICBhY2NbcGxhY2VtZW50XSA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudCxcbiAgICAgIGJvdW5kYXJ5OiBib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeTogcm9vdEJvdW5kYXJ5LFxuICAgICAgcGFkZGluZzogcGFkZGluZ1xuICAgIH0pW2dldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KV07XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuICByZXR1cm4gT2JqZWN0LmtleXMob3ZlcmZsb3dzKS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIG92ZXJmbG93c1thXSAtIG92ZXJmbG93c1tiXTtcbiAgfSk7XG59IiwiaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4vZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGdldFZhcmlhdGlvbiBmcm9tIFwiLi9nZXRWYXJpYXRpb24uanNcIjtcbmltcG9ydCBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQgZnJvbSBcIi4vZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgeyB0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnQsIHN0YXJ0LCBlbmQgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXB1dGVPZmZzZXRzKF9yZWYpIHtcbiAgdmFyIHJlZmVyZW5jZSA9IF9yZWYucmVmZXJlbmNlLFxuICAgICAgZWxlbWVudCA9IF9yZWYuZWxlbWVudCxcbiAgICAgIHBsYWNlbWVudCA9IF9yZWYucGxhY2VtZW50O1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IHBsYWNlbWVudCA/IGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KSA6IG51bGw7XG4gIHZhciB2YXJpYXRpb24gPSBwbGFjZW1lbnQgPyBnZXRWYXJpYXRpb24ocGxhY2VtZW50KSA6IG51bGw7XG4gIHZhciBjb21tb25YID0gcmVmZXJlbmNlLnggKyByZWZlcmVuY2Uud2lkdGggLyAyIC0gZWxlbWVudC53aWR0aCAvIDI7XG4gIHZhciBjb21tb25ZID0gcmVmZXJlbmNlLnkgKyByZWZlcmVuY2UuaGVpZ2h0IC8gMiAtIGVsZW1lbnQuaGVpZ2h0IC8gMjtcbiAgdmFyIG9mZnNldHM7XG5cbiAgc3dpdGNoIChiYXNlUGxhY2VtZW50KSB7XG4gICAgY2FzZSB0b3A6XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiBjb21tb25YLFxuICAgICAgICB5OiByZWZlcmVuY2UueSAtIGVsZW1lbnQuaGVpZ2h0XG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIGJvdHRvbTpcbiAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgIHg6IGNvbW1vblgsXG4gICAgICAgIHk6IHJlZmVyZW5jZS55ICsgcmVmZXJlbmNlLmhlaWdodFxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSByaWdodDpcbiAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgIHg6IHJlZmVyZW5jZS54ICsgcmVmZXJlbmNlLndpZHRoLFxuICAgICAgICB5OiBjb21tb25ZXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIGxlZnQ6XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiByZWZlcmVuY2UueCAtIGVsZW1lbnQud2lkdGgsXG4gICAgICAgIHk6IGNvbW1vbllcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiByZWZlcmVuY2UueCxcbiAgICAgICAgeTogcmVmZXJlbmNlLnlcbiAgICAgIH07XG4gIH1cblxuICB2YXIgbWFpbkF4aXMgPSBiYXNlUGxhY2VtZW50ID8gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KGJhc2VQbGFjZW1lbnQpIDogbnVsbDtcblxuICBpZiAobWFpbkF4aXMgIT0gbnVsbCkge1xuICAgIHZhciBsZW4gPSBtYWluQXhpcyA9PT0gJ3knID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuXG4gICAgc3dpdGNoICh2YXJpYXRpb24pIHtcbiAgICAgIGNhc2Ugc3RhcnQ6XG4gICAgICAgIG9mZnNldHNbbWFpbkF4aXNdID0gb2Zmc2V0c1ttYWluQXhpc10gLSAocmVmZXJlbmNlW2xlbl0gLyAyIC0gZWxlbWVudFtsZW5dIC8gMik7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIGVuZDpcbiAgICAgICAgb2Zmc2V0c1ttYWluQXhpc10gPSBvZmZzZXRzW21haW5BeGlzXSArIChyZWZlcmVuY2VbbGVuXSAvIDIgLSBlbGVtZW50W2xlbl0gLyAyKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9mZnNldHM7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVib3VuY2UoZm4pIHtcbiAgdmFyIHBlbmRpbmc7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFwZW5kaW5nKSB7XG4gICAgICBwZW5kaW5nID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcGVuZGluZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICByZXNvbHZlKGZuKCkpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBwZW5kaW5nO1xuICB9O1xufSIsImltcG9ydCBnZXRCb3VuZGluZ0NsaWVudFJlY3QgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRCb3VuZGluZ0NsaWVudFJlY3QuanNcIjtcbmltcG9ydCBnZXRDbGlwcGluZ1JlY3QgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRDbGlwcGluZ1JlY3QuanNcIjtcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4uL2RvbS11dGlscy9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCBjb21wdXRlT2Zmc2V0cyBmcm9tIFwiLi9jb21wdXRlT2Zmc2V0cy5qc1wiO1xuaW1wb3J0IHJlY3RUb0NsaWVudFJlY3QgZnJvbSBcIi4vcmVjdFRvQ2xpZW50UmVjdC5qc1wiO1xuaW1wb3J0IHsgY2xpcHBpbmdQYXJlbnRzLCByZWZlcmVuY2UsIHBvcHBlciwgYm90dG9tLCB0b3AsIHJpZ2h0LCBiYXNlUGxhY2VtZW50cywgdmlld3BvcnQgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCB7IGlzRWxlbWVudCB9IGZyb20gXCIuLi9kb20tdXRpbHMvaW5zdGFuY2VPZi5qc1wiO1xuaW1wb3J0IG1lcmdlUGFkZGluZ09iamVjdCBmcm9tIFwiLi9tZXJnZVBhZGRpbmdPYmplY3QuanNcIjtcbmltcG9ydCBleHBhbmRUb0hhc2hNYXAgZnJvbSBcIi4vZXhwYW5kVG9IYXNoTWFwLmpzXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIHZhciBfb3B0aW9ucyA9IG9wdGlvbnMsXG4gICAgICBfb3B0aW9ucyRwbGFjZW1lbnQgPSBfb3B0aW9ucy5wbGFjZW1lbnQsXG4gICAgICBwbGFjZW1lbnQgPSBfb3B0aW9ucyRwbGFjZW1lbnQgPT09IHZvaWQgMCA/IHN0YXRlLnBsYWNlbWVudCA6IF9vcHRpb25zJHBsYWNlbWVudCxcbiAgICAgIF9vcHRpb25zJGJvdW5kYXJ5ID0gX29wdGlvbnMuYm91bmRhcnksXG4gICAgICBib3VuZGFyeSA9IF9vcHRpb25zJGJvdW5kYXJ5ID09PSB2b2lkIDAgPyBjbGlwcGluZ1BhcmVudHMgOiBfb3B0aW9ucyRib3VuZGFyeSxcbiAgICAgIF9vcHRpb25zJHJvb3RCb3VuZGFyeSA9IF9vcHRpb25zLnJvb3RCb3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeSA9IF9vcHRpb25zJHJvb3RCb3VuZGFyeSA9PT0gdm9pZCAwID8gdmlld3BvcnQgOiBfb3B0aW9ucyRyb290Qm91bmRhcnksXG4gICAgICBfb3B0aW9ucyRlbGVtZW50Q29udGUgPSBfb3B0aW9ucy5lbGVtZW50Q29udGV4dCxcbiAgICAgIGVsZW1lbnRDb250ZXh0ID0gX29wdGlvbnMkZWxlbWVudENvbnRlID09PSB2b2lkIDAgPyBwb3BwZXIgOiBfb3B0aW9ucyRlbGVtZW50Q29udGUsXG4gICAgICBfb3B0aW9ucyRhbHRCb3VuZGFyeSA9IF9vcHRpb25zLmFsdEJvdW5kYXJ5LFxuICAgICAgYWx0Qm91bmRhcnkgPSBfb3B0aW9ucyRhbHRCb3VuZGFyeSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfb3B0aW9ucyRhbHRCb3VuZGFyeSxcbiAgICAgIF9vcHRpb25zJHBhZGRpbmcgPSBfb3B0aW9ucy5wYWRkaW5nLFxuICAgICAgcGFkZGluZyA9IF9vcHRpb25zJHBhZGRpbmcgPT09IHZvaWQgMCA/IDAgOiBfb3B0aW9ucyRwYWRkaW5nO1xuICB2YXIgcGFkZGluZ09iamVjdCA9IG1lcmdlUGFkZGluZ09iamVjdCh0eXBlb2YgcGFkZGluZyAhPT0gJ251bWJlcicgPyBwYWRkaW5nIDogZXhwYW5kVG9IYXNoTWFwKHBhZGRpbmcsIGJhc2VQbGFjZW1lbnRzKSk7XG4gIHZhciBhbHRDb250ZXh0ID0gZWxlbWVudENvbnRleHQgPT09IHBvcHBlciA/IHJlZmVyZW5jZSA6IHBvcHBlcjtcbiAgdmFyIHJlZmVyZW5jZUVsZW1lbnQgPSBzdGF0ZS5lbGVtZW50cy5yZWZlcmVuY2U7XG4gIHZhciBwb3BwZXJSZWN0ID0gc3RhdGUucmVjdHMucG9wcGVyO1xuICB2YXIgZWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzW2FsdEJvdW5kYXJ5ID8gYWx0Q29udGV4dCA6IGVsZW1lbnRDb250ZXh0XTtcbiAgdmFyIGNsaXBwaW5nQ2xpZW50UmVjdCA9IGdldENsaXBwaW5nUmVjdChpc0VsZW1lbnQoZWxlbWVudCkgPyBlbGVtZW50IDogZWxlbWVudC5jb250ZXh0RWxlbWVudCB8fCBnZXREb2N1bWVudEVsZW1lbnQoc3RhdGUuZWxlbWVudHMucG9wcGVyKSwgYm91bmRhcnksIHJvb3RCb3VuZGFyeSk7XG4gIHZhciByZWZlcmVuY2VDbGllbnRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KHJlZmVyZW5jZUVsZW1lbnQpO1xuICB2YXIgcG9wcGVyT2Zmc2V0cyA9IGNvbXB1dGVPZmZzZXRzKHtcbiAgICByZWZlcmVuY2U6IHJlZmVyZW5jZUNsaWVudFJlY3QsXG4gICAgZWxlbWVudDogcG9wcGVyUmVjdCxcbiAgICBzdHJhdGVneTogJ2Fic29sdXRlJyxcbiAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudFxuICB9KTtcbiAgdmFyIHBvcHBlckNsaWVudFJlY3QgPSByZWN0VG9DbGllbnRSZWN0KE9iamVjdC5hc3NpZ24oe30sIHBvcHBlclJlY3QsIHBvcHBlck9mZnNldHMpKTtcbiAgdmFyIGVsZW1lbnRDbGllbnRSZWN0ID0gZWxlbWVudENvbnRleHQgPT09IHBvcHBlciA/IHBvcHBlckNsaWVudFJlY3QgOiByZWZlcmVuY2VDbGllbnRSZWN0OyAvLyBwb3NpdGl2ZSA9IG92ZXJmbG93aW5nIHRoZSBjbGlwcGluZyByZWN0XG4gIC8vIDAgb3IgbmVnYXRpdmUgPSB3aXRoaW4gdGhlIGNsaXBwaW5nIHJlY3RcblxuICB2YXIgb3ZlcmZsb3dPZmZzZXRzID0ge1xuICAgIHRvcDogY2xpcHBpbmdDbGllbnRSZWN0LnRvcCAtIGVsZW1lbnRDbGllbnRSZWN0LnRvcCArIHBhZGRpbmdPYmplY3QudG9wLFxuICAgIGJvdHRvbTogZWxlbWVudENsaWVudFJlY3QuYm90dG9tIC0gY2xpcHBpbmdDbGllbnRSZWN0LmJvdHRvbSArIHBhZGRpbmdPYmplY3QuYm90dG9tLFxuICAgIGxlZnQ6IGNsaXBwaW5nQ2xpZW50UmVjdC5sZWZ0IC0gZWxlbWVudENsaWVudFJlY3QubGVmdCArIHBhZGRpbmdPYmplY3QubGVmdCxcbiAgICByaWdodDogZWxlbWVudENsaWVudFJlY3QucmlnaHQgLSBjbGlwcGluZ0NsaWVudFJlY3QucmlnaHQgKyBwYWRkaW5nT2JqZWN0LnJpZ2h0XG4gIH07XG4gIHZhciBvZmZzZXREYXRhID0gc3RhdGUubW9kaWZpZXJzRGF0YS5vZmZzZXQ7IC8vIE9mZnNldHMgY2FuIGJlIGFwcGxpZWQgb25seSB0byB0aGUgcG9wcGVyIGVsZW1lbnRcblxuICBpZiAoZWxlbWVudENvbnRleHQgPT09IHBvcHBlciAmJiBvZmZzZXREYXRhKSB7XG4gICAgdmFyIG9mZnNldCA9IG9mZnNldERhdGFbcGxhY2VtZW50XTtcbiAgICBPYmplY3Qua2V5cyhvdmVyZmxvd09mZnNldHMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgdmFyIG11bHRpcGx5ID0gW3JpZ2h0LCBib3R0b21dLmluZGV4T2Yoa2V5KSA+PSAwID8gMSA6IC0xO1xuICAgICAgdmFyIGF4aXMgPSBbdG9wLCBib3R0b21dLmluZGV4T2Yoa2V5KSA+PSAwID8gJ3knIDogJ3gnO1xuICAgICAgb3ZlcmZsb3dPZmZzZXRzW2tleV0gKz0gb2Zmc2V0W2F4aXNdICogbXVsdGlwbHk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gb3ZlcmZsb3dPZmZzZXRzO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGV4cGFuZFRvSGFzaE1hcCh2YWx1ZSwga2V5cykge1xuICByZXR1cm4ga2V5cy5yZWR1Y2UoZnVuY3Rpb24gKGhhc2hNYXAsIGtleSkge1xuICAgIGhhc2hNYXBba2V5XSA9IHZhbHVlO1xuICAgIHJldHVybiBoYXNoTWFwO1xuICB9LCB7fSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0KHN0cikge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gW10uY29uY2F0KGFyZ3MpLnJlZHVjZShmdW5jdGlvbiAocCwgYykge1xuICAgIHJldHVybiBwLnJlcGxhY2UoLyVzLywgYyk7XG4gIH0sIHN0cik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0QWx0QXhpcyhheGlzKSB7XG4gIHJldHVybiBheGlzID09PSAneCcgPyAneScgOiAneCc7XG59IiwiaW1wb3J0IHsgYXV0byB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIHBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEZyZXNoU2lkZU9iamVjdCgpIHtcbiAgcmV0dXJuIHtcbiAgICB0b3A6IDAsXG4gICAgcmlnaHQ6IDAsXG4gICAgYm90dG9tOiAwLFxuICAgIGxlZnQ6IDBcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gIHJldHVybiBbJ3RvcCcsICdib3R0b20nXS5pbmRleE9mKHBsYWNlbWVudCkgPj0gMCA/ICd4JyA6ICd5Jztcbn0iLCJ2YXIgaGFzaCA9IHtcbiAgbGVmdDogJ3JpZ2h0JyxcbiAgcmlnaHQ6ICdsZWZ0JyxcbiAgYm90dG9tOiAndG9wJyxcbiAgdG9wOiAnYm90dG9tJ1xufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE9wcG9zaXRlUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnJlcGxhY2UoL2xlZnR8cmlnaHR8Ym90dG9tfHRvcC9nLCBmdW5jdGlvbiAobWF0Y2hlZCkge1xuICAgIHJldHVybiBoYXNoW21hdGNoZWRdO1xuICB9KTtcbn0iLCJ2YXIgaGFzaCA9IHtcbiAgc3RhcnQ6ICdlbmQnLFxuICBlbmQ6ICdzdGFydCdcbn07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIHBsYWNlbWVudC5yZXBsYWNlKC9zdGFydHxlbmQvZywgZnVuY3Rpb24gKG1hdGNoZWQpIHtcbiAgICByZXR1cm4gaGFzaFttYXRjaGVkXTtcbiAgfSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnNwbGl0KCctJylbMV07XG59IiwiZXhwb3J0IHZhciBtYXggPSBNYXRoLm1heDtcbmV4cG9ydCB2YXIgbWluID0gTWF0aC5taW47XG5leHBvcnQgdmFyIHJvdW5kID0gTWF0aC5yb3VuZDsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZXJnZUJ5TmFtZShtb2RpZmllcnMpIHtcbiAgdmFyIG1lcmdlZCA9IG1vZGlmaWVycy5yZWR1Y2UoZnVuY3Rpb24gKG1lcmdlZCwgY3VycmVudCkge1xuICAgIHZhciBleGlzdGluZyA9IG1lcmdlZFtjdXJyZW50Lm5hbWVdO1xuICAgIG1lcmdlZFtjdXJyZW50Lm5hbWVdID0gZXhpc3RpbmcgPyBPYmplY3QuYXNzaWduKHt9LCBleGlzdGluZywgY3VycmVudCwge1xuICAgICAgb3B0aW9uczogT2JqZWN0LmFzc2lnbih7fSwgZXhpc3Rpbmcub3B0aW9ucywgY3VycmVudC5vcHRpb25zKSxcbiAgICAgIGRhdGE6IE9iamVjdC5hc3NpZ24oe30sIGV4aXN0aW5nLmRhdGEsIGN1cnJlbnQuZGF0YSlcbiAgICB9KSA6IGN1cnJlbnQ7XG4gICAgcmV0dXJuIG1lcmdlZDtcbiAgfSwge30pOyAvLyBJRTExIGRvZXMgbm90IHN1cHBvcnQgT2JqZWN0LnZhbHVlc1xuXG4gIHJldHVybiBPYmplY3Qua2V5cyhtZXJnZWQpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIG1lcmdlZFtrZXldO1xuICB9KTtcbn0iLCJpbXBvcnQgZ2V0RnJlc2hTaWRlT2JqZWN0IGZyb20gXCIuL2dldEZyZXNoU2lkZU9iamVjdC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVyZ2VQYWRkaW5nT2JqZWN0KHBhZGRpbmdPYmplY3QpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGdldEZyZXNoU2lkZU9iamVjdCgpLCBwYWRkaW5nT2JqZWN0KTtcbn0iLCJpbXBvcnQgeyBtb2RpZmllclBoYXNlcyB9IGZyb20gXCIuLi9lbnVtcy5qc1wiOyAvLyBzb3VyY2U6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQ5ODc1MjU1XG5cbmZ1bmN0aW9uIG9yZGVyKG1vZGlmaWVycykge1xuICB2YXIgbWFwID0gbmV3IE1hcCgpO1xuICB2YXIgdmlzaXRlZCA9IG5ldyBTZXQoKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBtb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICBtYXAuc2V0KG1vZGlmaWVyLm5hbWUsIG1vZGlmaWVyKTtcbiAgfSk7IC8vIE9uIHZpc2l0aW5nIG9iamVjdCwgY2hlY2sgZm9yIGl0cyBkZXBlbmRlbmNpZXMgYW5kIHZpc2l0IHRoZW0gcmVjdXJzaXZlbHlcblxuICBmdW5jdGlvbiBzb3J0KG1vZGlmaWVyKSB7XG4gICAgdmlzaXRlZC5hZGQobW9kaWZpZXIubmFtZSk7XG4gICAgdmFyIHJlcXVpcmVzID0gW10uY29uY2F0KG1vZGlmaWVyLnJlcXVpcmVzIHx8IFtdLCBtb2RpZmllci5yZXF1aXJlc0lmRXhpc3RzIHx8IFtdKTtcbiAgICByZXF1aXJlcy5mb3JFYWNoKGZ1bmN0aW9uIChkZXApIHtcbiAgICAgIGlmICghdmlzaXRlZC5oYXMoZGVwKSkge1xuICAgICAgICB2YXIgZGVwTW9kaWZpZXIgPSBtYXAuZ2V0KGRlcCk7XG5cbiAgICAgICAgaWYgKGRlcE1vZGlmaWVyKSB7XG4gICAgICAgICAgc29ydChkZXBNb2RpZmllcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXN1bHQucHVzaChtb2RpZmllcik7XG4gIH1cblxuICBtb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICBpZiAoIXZpc2l0ZWQuaGFzKG1vZGlmaWVyLm5hbWUpKSB7XG4gICAgICAvLyBjaGVjayBmb3IgdmlzaXRlZCBvYmplY3RcbiAgICAgIHNvcnQobW9kaWZpZXIpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9yZGVyTW9kaWZpZXJzKG1vZGlmaWVycykge1xuICAvLyBvcmRlciBiYXNlZCBvbiBkZXBlbmRlbmNpZXNcbiAgdmFyIG9yZGVyZWRNb2RpZmllcnMgPSBvcmRlcihtb2RpZmllcnMpOyAvLyBvcmRlciBiYXNlZCBvbiBwaGFzZVxuXG4gIHJldHVybiBtb2RpZmllclBoYXNlcy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGhhc2UpIHtcbiAgICByZXR1cm4gYWNjLmNvbmNhdChvcmRlcmVkTW9kaWZpZXJzLmZpbHRlcihmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICAgIHJldHVybiBtb2RpZmllci5waGFzZSA9PT0gcGhhc2U7XG4gICAgfSkpO1xuICB9LCBbXSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVjdFRvQ2xpZW50UmVjdChyZWN0KSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCByZWN0LCB7XG4gICAgbGVmdDogcmVjdC54LFxuICAgIHRvcDogcmVjdC55LFxuICAgIHJpZ2h0OiByZWN0LnggKyByZWN0LndpZHRoLFxuICAgIGJvdHRvbTogcmVjdC55ICsgcmVjdC5oZWlnaHRcbiAgfSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdW5pcXVlQnkoYXJyLCBmbikge1xuICB2YXIgaWRlbnRpZmllcnMgPSBuZXcgU2V0KCk7XG4gIHJldHVybiBhcnIuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBmbihpdGVtKTtcblxuICAgIGlmICghaWRlbnRpZmllcnMuaGFzKGlkZW50aWZpZXIpKSB7XG4gICAgICBpZGVudGlmaWVycy5hZGQoaWRlbnRpZmllcik7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xufSIsImltcG9ydCBmb3JtYXQgZnJvbSBcIi4vZm9ybWF0LmpzXCI7XG5pbXBvcnQgeyBtb2RpZmllclBoYXNlcyB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xudmFyIElOVkFMSURfTU9ESUZJRVJfRVJST1IgPSAnUG9wcGVyOiBtb2RpZmllciBcIiVzXCIgcHJvdmlkZWQgYW4gaW52YWxpZCAlcyBwcm9wZXJ0eSwgZXhwZWN0ZWQgJXMgYnV0IGdvdCAlcyc7XG52YXIgTUlTU0lOR19ERVBFTkRFTkNZX0VSUk9SID0gJ1BvcHBlcjogbW9kaWZpZXIgXCIlc1wiIHJlcXVpcmVzIFwiJXNcIiwgYnV0IFwiJXNcIiBtb2RpZmllciBpcyBub3QgYXZhaWxhYmxlJztcbnZhciBWQUxJRF9QUk9QRVJUSUVTID0gWyduYW1lJywgJ2VuYWJsZWQnLCAncGhhc2UnLCAnZm4nLCAnZWZmZWN0JywgJ3JlcXVpcmVzJywgJ29wdGlvbnMnXTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZhbGlkYXRlTW9kaWZpZXJzKG1vZGlmaWVycykge1xuICBtb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICBPYmplY3Qua2V5cyhtb2RpZmllcikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICBjYXNlICduYW1lJzpcbiAgICAgICAgICBpZiAodHlwZW9mIG1vZGlmaWVyLm5hbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGZvcm1hdChJTlZBTElEX01PRElGSUVSX0VSUk9SLCBTdHJpbmcobW9kaWZpZXIubmFtZSksICdcIm5hbWVcIicsICdcInN0cmluZ1wiJywgXCJcXFwiXCIgKyBTdHJpbmcobW9kaWZpZXIubmFtZSkgKyBcIlxcXCJcIikpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2VuYWJsZWQnOlxuICAgICAgICAgIGlmICh0eXBlb2YgbW9kaWZpZXIuZW5hYmxlZCAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGZvcm1hdChJTlZBTElEX01PRElGSUVSX0VSUk9SLCBtb2RpZmllci5uYW1lLCAnXCJlbmFibGVkXCInLCAnXCJib29sZWFuXCInLCBcIlxcXCJcIiArIFN0cmluZyhtb2RpZmllci5lbmFibGVkKSArIFwiXFxcIlwiKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgJ3BoYXNlJzpcbiAgICAgICAgICBpZiAobW9kaWZpZXJQaGFzZXMuaW5kZXhPZihtb2RpZmllci5waGFzZSkgPCAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGZvcm1hdChJTlZBTElEX01PRElGSUVSX0VSUk9SLCBtb2RpZmllci5uYW1lLCAnXCJwaGFzZVwiJywgXCJlaXRoZXIgXCIgKyBtb2RpZmllclBoYXNlcy5qb2luKCcsICcpLCBcIlxcXCJcIiArIFN0cmluZyhtb2RpZmllci5waGFzZSkgKyBcIlxcXCJcIikpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2ZuJzpcbiAgICAgICAgICBpZiAodHlwZW9mIG1vZGlmaWVyLmZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGZvcm1hdChJTlZBTElEX01PRElGSUVSX0VSUk9SLCBtb2RpZmllci5uYW1lLCAnXCJmblwiJywgJ1wiZnVuY3Rpb25cIicsIFwiXFxcIlwiICsgU3RyaW5nKG1vZGlmaWVyLmZuKSArIFwiXFxcIlwiKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnZWZmZWN0JzpcbiAgICAgICAgICBpZiAodHlwZW9mIG1vZGlmaWVyLmVmZmVjdCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihmb3JtYXQoSU5WQUxJRF9NT0RJRklFUl9FUlJPUiwgbW9kaWZpZXIubmFtZSwgJ1wiZWZmZWN0XCInLCAnXCJmdW5jdGlvblwiJywgXCJcXFwiXCIgKyBTdHJpbmcobW9kaWZpZXIuZm4pICsgXCJcXFwiXCIpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdyZXF1aXJlcyc6XG4gICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG1vZGlmaWVyLnJlcXVpcmVzKSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihmb3JtYXQoSU5WQUxJRF9NT0RJRklFUl9FUlJPUiwgbW9kaWZpZXIubmFtZSwgJ1wicmVxdWlyZXNcIicsICdcImFycmF5XCInLCBcIlxcXCJcIiArIFN0cmluZyhtb2RpZmllci5yZXF1aXJlcykgKyBcIlxcXCJcIikpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3JlcXVpcmVzSWZFeGlzdHMnOlxuICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShtb2RpZmllci5yZXF1aXJlc0lmRXhpc3RzKSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihmb3JtYXQoSU5WQUxJRF9NT0RJRklFUl9FUlJPUiwgbW9kaWZpZXIubmFtZSwgJ1wicmVxdWlyZXNJZkV4aXN0c1wiJywgJ1wiYXJyYXlcIicsIFwiXFxcIlwiICsgU3RyaW5nKG1vZGlmaWVyLnJlcXVpcmVzSWZFeGlzdHMpICsgXCJcXFwiXCIpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdvcHRpb25zJzpcbiAgICAgICAgY2FzZSAnZGF0YSc6XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUG9wcGVySlM6IGFuIGludmFsaWQgcHJvcGVydHkgaGFzIGJlZW4gcHJvdmlkZWQgdG8gdGhlIFxcXCJcIiArIG1vZGlmaWVyLm5hbWUgKyBcIlxcXCIgbW9kaWZpZXIsIHZhbGlkIHByb3BlcnRpZXMgYXJlIFwiICsgVkFMSURfUFJPUEVSVElFUy5tYXAoZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgICAgIHJldHVybiBcIlxcXCJcIiArIHMgKyBcIlxcXCJcIjtcbiAgICAgICAgICB9KS5qb2luKCcsICcpICsgXCI7IGJ1dCBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgd2FzIHByb3ZpZGVkLlwiKTtcbiAgICAgIH1cblxuICAgICAgbW9kaWZpZXIucmVxdWlyZXMgJiYgbW9kaWZpZXIucmVxdWlyZXMuZm9yRWFjaChmdW5jdGlvbiAocmVxdWlyZW1lbnQpIHtcbiAgICAgICAgaWYgKG1vZGlmaWVycy5maW5kKGZ1bmN0aW9uIChtb2QpIHtcbiAgICAgICAgICByZXR1cm4gbW9kLm5hbWUgPT09IHJlcXVpcmVtZW50O1xuICAgICAgICB9KSA9PSBudWxsKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihmb3JtYXQoTUlTU0lOR19ERVBFTkRFTkNZX0VSUk9SLCBTdHJpbmcobW9kaWZpZXIubmFtZSksIHJlcXVpcmVtZW50LCByZXF1aXJlbWVudCkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59IiwiaW1wb3J0IHsgbWF4IGFzIG1hdGhNYXgsIG1pbiBhcyBtYXRoTWluIH0gZnJvbSBcIi4vbWF0aC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aGluKG1pbiwgdmFsdWUsIG1heCkge1xuICByZXR1cm4gbWF0aE1heChtaW4sIG1hdGhNaW4odmFsdWUsIG1heCkpO1xufSIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTtcbiAgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTtcbiAgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTtcblxuICB0cnkge1xuICAgIERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuXG4gIHZhciB0YXJnZXQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcblxuICB2YXIga2V5LCBpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTtcbiAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9XG5cbiAgcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7XG4gIHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpO1xuXG4gIHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHtcbiAgICB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksXG4gICAgICAgIHJlc3VsdDtcblxuICAgIGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7XG4gICAgICB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yO1xuXG4gICAgICByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBfc3VwZXJQcm9wQmFzZShvYmplY3QsIHByb3BlcnR5KSB7XG4gIHdoaWxlICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpKSB7XG4gICAgb2JqZWN0ID0gX2dldFByb3RvdHlwZU9mKG9iamVjdCk7XG4gICAgaWYgKG9iamVjdCA9PT0gbnVsbCkgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gb2JqZWN0O1xufVxuXG5mdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBSZWZsZWN0LmdldCkge1xuICAgIF9nZXQgPSBSZWZsZWN0LmdldDtcbiAgfSBlbHNlIHtcbiAgICBfZ2V0ID0gZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICAgICAgdmFyIGJhc2UgPSBfc3VwZXJQcm9wQmFzZSh0YXJnZXQsIHByb3BlcnR5KTtcblxuICAgICAgaWYgKCFiYXNlKSByZXR1cm47XG4gICAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZSwgcHJvcGVydHkpO1xuXG4gICAgICBpZiAoZGVzYy5nZXQpIHtcbiAgICAgICAgcmV0dXJuIGRlc2MuZ2V0LmNhbGwocmVjZWl2ZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGVzYy52YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIgfHwgdGFyZ2V0KTtcbn1cblxuZnVuY3Rpb24gc2V0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCByZWNlaXZlcikge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5zZXQpIHtcbiAgICBzZXQgPSBSZWZsZWN0LnNldDtcbiAgfSBlbHNlIHtcbiAgICBzZXQgPSBmdW5jdGlvbiBzZXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHJlY2VpdmVyKSB7XG4gICAgICB2YXIgYmFzZSA9IF9zdXBlclByb3BCYXNlKHRhcmdldCwgcHJvcGVydHkpO1xuXG4gICAgICB2YXIgZGVzYztcblxuICAgICAgaWYgKGJhc2UpIHtcbiAgICAgICAgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZSwgcHJvcGVydHkpO1xuXG4gICAgICAgIGlmIChkZXNjLnNldCkge1xuICAgICAgICAgIGRlc2Muc2V0LmNhbGwocmVjZWl2ZXIsIHZhbHVlKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmICghZGVzYy53cml0YWJsZSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihyZWNlaXZlciwgcHJvcGVydHkpO1xuXG4gICAgICBpZiAoZGVzYykge1xuICAgICAgICBpZiAoIWRlc2Mud3JpdGFibGUpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBkZXNjLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZWNlaXZlciwgcHJvcGVydHksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX2RlZmluZVByb3BlcnR5KHJlY2VpdmVyLCBwcm9wZXJ0eSwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHNldCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgcmVjZWl2ZXIpO1xufVxuXG5mdW5jdGlvbiBfc2V0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCByZWNlaXZlciwgaXNTdHJpY3QpIHtcbiAgdmFyIHMgPSBzZXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHJlY2VpdmVyIHx8IHRhcmdldCk7XG5cbiAgaWYgKCFzICYmIGlzU3RyaWN0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdmYWlsZWQgdG8gc2V0IHByb3BlcnR5Jyk7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpO1xufVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47XG4gIHZhciBfYXJyID0gW107XG4gIHZhciBfbiA9IHRydWU7XG4gIHZhciBfZCA9IGZhbHNlO1xuICB2YXIgX2UgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZCA9IHRydWU7XG4gICAgX2UgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2Fycjtcbn1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIGFycjJbaV0gPSBhcnJbaV07XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbmV4cG9ydCB7IF9jcmVhdGVDbGFzcyBhcyBfLCBfY2xhc3NDYWxsQ2hlY2sgYXMgYSwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGFzIGIsIF90eXBlb2YgYXMgYywgX2luaGVyaXRzIGFzIGQsIF9jcmVhdGVTdXBlciBhcyBlLCBfc2xpY2VkVG9BcnJheSBhcyBmLCBfZ2V0IGFzIGcsIF9nZXRQcm90b3R5cGVPZiBhcyBoLCBfc2V0IGFzIGkgfTtcbiIsImltcG9ydCB7IGQgYXMgX2luaGVyaXRzLCBlIGFzIF9jcmVhdGVTdXBlciwgYSBhcyBfY2xhc3NDYWxsQ2hlY2ssIF8gYXMgX2NyZWF0ZUNsYXNzIH0gZnJvbSAnLi4vX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycy02Y2NiMWY2NC5qcyc7XG5pbXBvcnQgSFRNTE1hc2tFbGVtZW50IGZyb20gJy4vaHRtbC1tYXNrLWVsZW1lbnQuanMnO1xuaW1wb3J0IElNYXNrIGZyb20gJy4uL2NvcmUvaG9sZGVyLmpzJztcbmltcG9ydCAnLi9tYXNrLWVsZW1lbnQuanMnO1xuXG52YXIgSFRNTENvbnRlbnRlZGl0YWJsZU1hc2tFbGVtZW50ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfSFRNTE1hc2tFbGVtZW50KSB7XG4gIF9pbmhlcml0cyhIVE1MQ29udGVudGVkaXRhYmxlTWFza0VsZW1lbnQsIF9IVE1MTWFza0VsZW1lbnQpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoSFRNTENvbnRlbnRlZGl0YWJsZU1hc2tFbGVtZW50KTtcblxuICBmdW5jdGlvbiBIVE1MQ29udGVudGVkaXRhYmxlTWFza0VsZW1lbnQoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEhUTUxDb250ZW50ZWRpdGFibGVNYXNrRWxlbWVudCk7XG5cbiAgICByZXR1cm4gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoSFRNTENvbnRlbnRlZGl0YWJsZU1hc2tFbGVtZW50LCBbe1xuICAgIGtleTogXCJfdW5zYWZlU2VsZWN0aW9uU3RhcnRcIixcbiAgICBnZXQ6XG4gICAgLyoqXHJcbiAgICAgIFJldHVybnMgSFRNTEVsZW1lbnQgc2VsZWN0aW9uIHN0YXJ0XHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cbiAgICBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgcm9vdCA9IHRoaXMucm9vdEVsZW1lbnQ7XG4gICAgICB2YXIgc2VsZWN0aW9uID0gcm9vdC5nZXRTZWxlY3Rpb24gJiYgcm9vdC5nZXRTZWxlY3Rpb24oKTtcbiAgICAgIHJldHVybiBzZWxlY3Rpb24gJiYgc2VsZWN0aW9uLmFuY2hvck9mZnNldDtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIFJldHVybnMgSFRNTEVsZW1lbnQgc2VsZWN0aW9uIGVuZFxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfdW5zYWZlU2VsZWN0aW9uRW5kXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgcm9vdCA9IHRoaXMucm9vdEVsZW1lbnQ7XG4gICAgICB2YXIgc2VsZWN0aW9uID0gcm9vdC5nZXRTZWxlY3Rpb24gJiYgcm9vdC5nZXRTZWxlY3Rpb24oKTtcbiAgICAgIHJldHVybiBzZWxlY3Rpb24gJiYgdGhpcy5fdW5zYWZlU2VsZWN0aW9uU3RhcnQgKyBTdHJpbmcoc2VsZWN0aW9uKS5sZW5ndGg7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBTZXRzIEhUTUxFbGVtZW50IHNlbGVjdGlvblxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfdW5zYWZlU2VsZWN0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF91bnNhZmVTZWxlY3Qoc3RhcnQsIGVuZCkge1xuICAgICAgaWYgKCF0aGlzLnJvb3RFbGVtZW50LmNyZWF0ZVJhbmdlKSByZXR1cm47XG4gICAgICB2YXIgcmFuZ2UgPSB0aGlzLnJvb3RFbGVtZW50LmNyZWF0ZVJhbmdlKCk7XG4gICAgICByYW5nZS5zZXRTdGFydCh0aGlzLmlucHV0LmZpcnN0Q2hpbGQgfHwgdGhpcy5pbnB1dCwgc3RhcnQpO1xuICAgICAgcmFuZ2Uuc2V0RW5kKHRoaXMuaW5wdXQubGFzdENoaWxkIHx8IHRoaXMuaW5wdXQsIGVuZCk7XG4gICAgICB2YXIgcm9vdCA9IHRoaXMucm9vdEVsZW1lbnQ7XG4gICAgICB2YXIgc2VsZWN0aW9uID0gcm9vdC5nZXRTZWxlY3Rpb24gJiYgcm9vdC5nZXRTZWxlY3Rpb24oKTtcblxuICAgICAgaWYgKHNlbGVjdGlvbikge1xuICAgICAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBIVE1MRWxlbWVudCB2YWx1ZVxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ2YWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgcmV0dXJuIHRoaXMuaW5wdXQudGV4dENvbnRlbnQ7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgdGhpcy5pbnB1dC50ZXh0Q29udGVudCA9IHZhbHVlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBIVE1MQ29udGVudGVkaXRhYmxlTWFza0VsZW1lbnQ7XG59KEhUTUxNYXNrRWxlbWVudCk7XG5JTWFzay5IVE1MQ29udGVudGVkaXRhYmxlTWFza0VsZW1lbnQgPSBIVE1MQ29udGVudGVkaXRhYmxlTWFza0VsZW1lbnQ7XG5cbmV4cG9ydCBkZWZhdWx0IEhUTUxDb250ZW50ZWRpdGFibGVNYXNrRWxlbWVudDtcbiIsImltcG9ydCB7IGQgYXMgX2luaGVyaXRzLCBlIGFzIF9jcmVhdGVTdXBlciwgYSBhcyBfY2xhc3NDYWxsQ2hlY2ssIF8gYXMgX2NyZWF0ZUNsYXNzIH0gZnJvbSAnLi4vX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycy02Y2NiMWY2NC5qcyc7XG5pbXBvcnQgTWFza0VsZW1lbnQgZnJvbSAnLi9tYXNrLWVsZW1lbnQuanMnO1xuaW1wb3J0IElNYXNrIGZyb20gJy4uL2NvcmUvaG9sZGVyLmpzJztcblxuLyoqIEJyaWRnZSBiZXR3ZWVuIEhUTUxFbGVtZW50IGFuZCB7QGxpbmsgTWFza2VkfSAqL1xuXG52YXIgSFRNTE1hc2tFbGVtZW50ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfTWFza0VsZW1lbnQpIHtcbiAgX2luaGVyaXRzKEhUTUxNYXNrRWxlbWVudCwgX01hc2tFbGVtZW50KTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKEhUTUxNYXNrRWxlbWVudCk7XG5cbiAgLyoqIE1hcHBpbmcgYmV0d2VlbiBIVE1MRWxlbWVudCBldmVudHMgYW5kIG1hc2sgaW50ZXJuYWwgZXZlbnRzICovXG5cbiAgLyoqIEhUTUxFbGVtZW50IHRvIHVzZSBtYXNrIG9uICovXG5cbiAgLyoqXHJcbiAgICBAcGFyYW0ge0hUTUxJbnB1dEVsZW1lbnR8SFRNTFRleHRBcmVhRWxlbWVudH0gaW5wdXRcclxuICAqL1xuICBmdW5jdGlvbiBIVE1MTWFza0VsZW1lbnQoaW5wdXQpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSFRNTE1hc2tFbGVtZW50KTtcblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcyk7XG4gICAgX3RoaXMuaW5wdXQgPSBpbnB1dDtcbiAgICBfdGhpcy5faGFuZGxlcnMgPSB7fTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cbiAgLyoqICovXG4gIC8vICRGbG93Rml4TWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2Zsb3cvaXNzdWVzLzI4MzlcblxuXG4gIF9jcmVhdGVDbGFzcyhIVE1MTWFza0VsZW1lbnQsIFt7XG4gICAga2V5OiBcInJvb3RFbGVtZW50XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbnB1dC5nZXRSb290Tm9kZSA/IHRoaXMuaW5wdXQuZ2V0Um9vdE5vZGUoKSA6IGRvY3VtZW50O1xuICAgIH1cbiAgICAvKipcclxuICAgICAgSXMgZWxlbWVudCBpbiBmb2N1c1xyXG4gICAgICBAcmVhZG9ubHlcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJpc0FjdGl2ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgLy8kRmxvd0ZpeE1lXG4gICAgICByZXR1cm4gdGhpcy5pbnB1dCA9PT0gdGhpcy5yb290RWxlbWVudC5hY3RpdmVFbGVtZW50O1xuICAgIH1cbiAgICAvKipcclxuICAgICAgUmV0dXJucyBIVE1MRWxlbWVudCBzZWxlY3Rpb24gc3RhcnRcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX3Vuc2FmZVNlbGVjdGlvblN0YXJ0XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbnB1dC5zZWxlY3Rpb25TdGFydDtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIFJldHVybnMgSFRNTEVsZW1lbnQgc2VsZWN0aW9uIGVuZFxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfdW5zYWZlU2VsZWN0aW9uRW5kXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbnB1dC5zZWxlY3Rpb25FbmQ7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBTZXRzIEhUTUxFbGVtZW50IHNlbGVjdGlvblxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfdW5zYWZlU2VsZWN0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF91bnNhZmVTZWxlY3Qoc3RhcnQsIGVuZCkge1xuICAgICAgdGhpcy5pbnB1dC5zZXRTZWxlY3Rpb25SYW5nZShzdGFydCwgZW5kKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEhUTUxFbGVtZW50IHZhbHVlXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInZhbHVlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbnB1dC52YWx1ZTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICB0aGlzLmlucHV0LnZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBCaW5kcyBIVE1MRWxlbWVudCBldmVudHMgdG8gbWFzayBpbnRlcm5hbCBldmVudHNcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYmluZEV2ZW50c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBiaW5kRXZlbnRzKGhhbmRsZXJzKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgT2JqZWN0LmtleXMoaGFuZGxlcnMpLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBfdGhpczIuX3RvZ2dsZUV2ZW50SGFuZGxlcihIVE1MTWFza0VsZW1lbnQuRVZFTlRTX01BUFtldmVudF0sIGhhbmRsZXJzW2V2ZW50XSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIFVuYmluZHMgSFRNTEVsZW1lbnQgZXZlbnRzIHRvIG1hc2sgaW50ZXJuYWwgZXZlbnRzXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInVuYmluZEV2ZW50c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1bmJpbmRFdmVudHMoKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgT2JqZWN0LmtleXModGhpcy5faGFuZGxlcnMpLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBfdGhpczMuX3RvZ2dsZUV2ZW50SGFuZGxlcihldmVudCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfdG9nZ2xlRXZlbnRIYW5kbGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF90b2dnbGVFdmVudEhhbmRsZXIoZXZlbnQsIGhhbmRsZXIpIHtcbiAgICAgIGlmICh0aGlzLl9oYW5kbGVyc1tldmVudF0pIHtcbiAgICAgICAgdGhpcy5pbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCB0aGlzLl9oYW5kbGVyc1tldmVudF0pO1xuICAgICAgICBkZWxldGUgdGhpcy5faGFuZGxlcnNbZXZlbnRdO1xuICAgICAgfVxuXG4gICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIpO1xuICAgICAgICB0aGlzLl9oYW5kbGVyc1tldmVudF0gPSBoYW5kbGVyO1xuICAgICAgfVxuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBIVE1MTWFza0VsZW1lbnQ7XG59KE1hc2tFbGVtZW50KTtcbkhUTUxNYXNrRWxlbWVudC5FVkVOVFNfTUFQID0ge1xuICBzZWxlY3Rpb25DaGFuZ2U6ICdrZXlkb3duJyxcbiAgaW5wdXQ6ICdpbnB1dCcsXG4gIGRyb3A6ICdkcm9wJyxcbiAgY2xpY2s6ICdjbGljaycsXG4gIGZvY3VzOiAnZm9jdXMnLFxuICBjb21taXQ6ICdibHVyJ1xufTtcbklNYXNrLkhUTUxNYXNrRWxlbWVudCA9IEhUTUxNYXNrRWxlbWVudDtcblxuZXhwb3J0IGRlZmF1bHQgSFRNTE1hc2tFbGVtZW50O1xuIiwiaW1wb3J0IHsgXyBhcyBfY3JlYXRlQ2xhc3MsIGEgYXMgX2NsYXNzQ2FsbENoZWNrLCBiIGFzIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyB9IGZyb20gJy4uL19yb2xsdXBQbHVnaW5CYWJlbEhlbHBlcnMtNmNjYjFmNjQuanMnO1xuaW1wb3J0IHsgb2JqZWN0SW5jbHVkZXMsIERJUkVDVElPTiB9IGZyb20gJy4uL2NvcmUvdXRpbHMuanMnO1xuaW1wb3J0IEFjdGlvbkRldGFpbHMgZnJvbSAnLi4vY29yZS9hY3Rpb24tZGV0YWlscy5qcyc7XG5pbXBvcnQgTWFza2VkRGF0ZSBmcm9tICcuLi9tYXNrZWQvZGF0ZS5qcyc7XG5pbXBvcnQgY3JlYXRlTWFzaywgeyBtYXNrZWRDbGFzcyB9IGZyb20gJy4uL21hc2tlZC9mYWN0b3J5LmpzJztcbmltcG9ydCBNYXNrRWxlbWVudCBmcm9tICcuL21hc2stZWxlbWVudC5qcyc7XG5pbXBvcnQgSFRNTE1hc2tFbGVtZW50IGZyb20gJy4vaHRtbC1tYXNrLWVsZW1lbnQuanMnO1xuaW1wb3J0IEhUTUxDb250ZW50ZWRpdGFibGVNYXNrRWxlbWVudCBmcm9tICcuL2h0bWwtY29udGVudGVkaXRhYmxlLW1hc2stZWxlbWVudC5qcyc7XG5pbXBvcnQgSU1hc2sgZnJvbSAnLi4vY29yZS9ob2xkZXIuanMnO1xuaW1wb3J0ICcuLi9tYXNrZWQvcGF0dGVybi5qcyc7XG5pbXBvcnQgJy4uL2NvcmUvY2hhbmdlLWRldGFpbHMuanMnO1xuaW1wb3J0ICcuLi9tYXNrZWQvYmFzZS5qcyc7XG5pbXBvcnQgJy4uL2NvcmUvY29udGludW91cy10YWlsLWRldGFpbHMuanMnO1xuaW1wb3J0ICcuLi9tYXNrZWQvcGF0dGVybi9pbnB1dC1kZWZpbml0aW9uLmpzJztcbmltcG9ydCAnLi4vbWFza2VkL3BhdHRlcm4vZml4ZWQtZGVmaW5pdGlvbi5qcyc7XG5pbXBvcnQgJy4uL21hc2tlZC9wYXR0ZXJuL2NodW5rLXRhaWwtZGV0YWlscy5qcyc7XG5pbXBvcnQgJy4uL21hc2tlZC9yZWdleHAuanMnO1xuaW1wb3J0ICcuLi9tYXNrZWQvcmFuZ2UuanMnO1xuXG4vKiogTGlzdGVucyB0byBlbGVtZW50IGV2ZW50cyBhbmQgY29udHJvbHMgY2hhbmdlcyBiZXR3ZWVuIGVsZW1lbnQgYW5kIHtAbGluayBNYXNrZWR9ICovXG5cbnZhciBJbnB1dE1hc2sgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAvKipcclxuICAgIFZpZXcgZWxlbWVudFxyXG4gICAgQHJlYWRvbmx5XHJcbiAgKi9cblxuICAvKipcclxuICAgIEludGVybmFsIHtAbGluayBNYXNrZWR9IG1vZGVsXHJcbiAgICBAcmVhZG9ubHlcclxuICAqL1xuXG4gIC8qKlxyXG4gICAgQHBhcmFtIHtNYXNrRWxlbWVudHxIVE1MSW5wdXRFbGVtZW50fEhUTUxUZXh0QXJlYUVsZW1lbnR9IGVsXHJcbiAgICBAcGFyYW0ge09iamVjdH0gb3B0c1xyXG4gICovXG4gIGZ1bmN0aW9uIElucHV0TWFzayhlbCwgb3B0cykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbnB1dE1hc2spO1xuXG4gICAgdGhpcy5lbCA9IGVsIGluc3RhbmNlb2YgTWFza0VsZW1lbnQgPyBlbCA6IGVsLmlzQ29udGVudEVkaXRhYmxlICYmIGVsLnRhZ05hbWUgIT09ICdJTlBVVCcgJiYgZWwudGFnTmFtZSAhPT0gJ1RFWFRBUkVBJyA/IG5ldyBIVE1MQ29udGVudGVkaXRhYmxlTWFza0VsZW1lbnQoZWwpIDogbmV3IEhUTUxNYXNrRWxlbWVudChlbCk7XG4gICAgdGhpcy5tYXNrZWQgPSBjcmVhdGVNYXNrKG9wdHMpO1xuICAgIHRoaXMuX2xpc3RlbmVycyA9IHt9O1xuICAgIHRoaXMuX3ZhbHVlID0gJyc7XG4gICAgdGhpcy5fdW5tYXNrZWRWYWx1ZSA9ICcnO1xuICAgIHRoaXMuX3NhdmVTZWxlY3Rpb24gPSB0aGlzLl9zYXZlU2VsZWN0aW9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25JbnB1dCA9IHRoaXMuX29uSW5wdXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbkNoYW5nZSA9IHRoaXMuX29uQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25Ecm9wID0gdGhpcy5fb25Ecm9wLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25Gb2N1cyA9IHRoaXMuX29uRm9jdXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbkNsaWNrID0gdGhpcy5fb25DbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYWxpZ25DdXJzb3IgPSB0aGlzLmFsaWduQ3Vyc29yLmJpbmQodGhpcyk7XG4gICAgdGhpcy5hbGlnbkN1cnNvckZyaWVuZGx5ID0gdGhpcy5hbGlnbkN1cnNvckZyaWVuZGx5LmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLl9iaW5kRXZlbnRzKCk7IC8vIHJlZnJlc2hcblxuXG4gICAgdGhpcy51cGRhdGVWYWx1ZSgpO1xuXG4gICAgdGhpcy5fb25DaGFuZ2UoKTtcbiAgfVxuICAvKiogUmVhZCBvciB1cGRhdGUgbWFzayAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKElucHV0TWFzaywgW3tcbiAgICBrZXk6IFwibWFza1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMubWFza2VkLm1hc2s7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChtYXNrKSB7XG4gICAgICBpZiAodGhpcy5tYXNrRXF1YWxzKG1hc2spKSByZXR1cm47XG5cbiAgICAgIGlmICghKG1hc2sgaW5zdGFuY2VvZiBJTWFzay5NYXNrZWQpICYmIHRoaXMubWFza2VkLmNvbnN0cnVjdG9yID09PSBtYXNrZWRDbGFzcyhtYXNrKSkge1xuICAgICAgICB0aGlzLm1hc2tlZC51cGRhdGVPcHRpb25zKHtcbiAgICAgICAgICBtYXNrOiBtYXNrXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBtYXNrZWQgPSBjcmVhdGVNYXNrKHtcbiAgICAgICAgbWFzazogbWFza1xuICAgICAgfSk7XG4gICAgICBtYXNrZWQudW5tYXNrZWRWYWx1ZSA9IHRoaXMubWFza2VkLnVubWFza2VkVmFsdWU7XG4gICAgICB0aGlzLm1hc2tlZCA9IG1hc2tlZDtcbiAgICB9XG4gICAgLyoqIFJhdyB2YWx1ZSAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibWFza0VxdWFsc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtYXNrRXF1YWxzKG1hc2spIHtcbiAgICAgIHJldHVybiBtYXNrID09IG51bGwgfHwgbWFzayA9PT0gdGhpcy5tYXNrZWQubWFzayB8fCBtYXNrID09PSBEYXRlICYmIHRoaXMubWFza2VkIGluc3RhbmNlb2YgTWFza2VkRGF0ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidmFsdWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHN0cikge1xuICAgICAgdGhpcy5tYXNrZWQudmFsdWUgPSBzdHI7XG4gICAgICB0aGlzLnVwZGF0ZUNvbnRyb2woKTtcbiAgICAgIHRoaXMuYWxpZ25DdXJzb3IoKTtcbiAgICB9XG4gICAgLyoqIFVubWFza2VkIHZhbHVlICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ1bm1hc2tlZFZhbHVlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdW5tYXNrZWRWYWx1ZTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHN0cikge1xuICAgICAgdGhpcy5tYXNrZWQudW5tYXNrZWRWYWx1ZSA9IHN0cjtcbiAgICAgIHRoaXMudXBkYXRlQ29udHJvbCgpO1xuICAgICAgdGhpcy5hbGlnbkN1cnNvcigpO1xuICAgIH1cbiAgICAvKiogVHlwZWQgdW5tYXNrZWQgdmFsdWUgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInR5cGVkVmFsdWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLm1hc2tlZC50eXBlZFZhbHVlO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsKSB7XG4gICAgICB0aGlzLm1hc2tlZC50eXBlZFZhbHVlID0gdmFsO1xuICAgICAgdGhpcy51cGRhdGVDb250cm9sKCk7XG4gICAgICB0aGlzLmFsaWduQ3Vyc29yKCk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBTdGFydHMgbGlzdGVuaW5nIHRvIGVsZW1lbnQgZXZlbnRzXHJcbiAgICAgIEBwcm90ZWN0ZWRcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfYmluZEV2ZW50c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfYmluZEV2ZW50cygpIHtcbiAgICAgIHRoaXMuZWwuYmluZEV2ZW50cyh7XG4gICAgICAgIHNlbGVjdGlvbkNoYW5nZTogdGhpcy5fc2F2ZVNlbGVjdGlvbixcbiAgICAgICAgaW5wdXQ6IHRoaXMuX29uSW5wdXQsXG4gICAgICAgIGRyb3A6IHRoaXMuX29uRHJvcCxcbiAgICAgICAgY2xpY2s6IHRoaXMuX29uQ2xpY2ssXG4gICAgICAgIGZvY3VzOiB0aGlzLl9vbkZvY3VzLFxuICAgICAgICBjb21taXQ6IHRoaXMuX29uQ2hhbmdlXG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIFN0b3BzIGxpc3RlbmluZyB0byBlbGVtZW50IGV2ZW50c1xyXG4gICAgICBAcHJvdGVjdGVkXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl91bmJpbmRFdmVudHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3VuYmluZEV2ZW50cygpIHtcbiAgICAgIGlmICh0aGlzLmVsKSB0aGlzLmVsLnVuYmluZEV2ZW50cygpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgRmlyZXMgY3VzdG9tIGV2ZW50XHJcbiAgICAgIEBwcm90ZWN0ZWRcclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX2ZpcmVFdmVudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZmlyZUV2ZW50KGV2KSB7XG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fbGlzdGVuZXJzW2V2XTtcbiAgICAgIGlmICghbGlzdGVuZXJzKSByZXR1cm47XG4gICAgICBsaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobCkge1xuICAgICAgICByZXR1cm4gbC5hcHBseSh2b2lkIDAsIGFyZ3MpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBDdXJyZW50IHNlbGVjdGlvbiBzdGFydFxyXG4gICAgICBAcmVhZG9ubHlcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzZWxlY3Rpb25TdGFydFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2N1cnNvckNoYW5naW5nID8gdGhpcy5fY2hhbmdpbmdDdXJzb3JQb3MgOiB0aGlzLmVsLnNlbGVjdGlvblN0YXJ0O1xuICAgIH1cbiAgICAvKiogQ3VycmVudCBjdXJzb3IgcG9zaXRpb24gKi9cblxuICB9LCB7XG4gICAga2V5OiBcImN1cnNvclBvc1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2N1cnNvckNoYW5naW5nID8gdGhpcy5fY2hhbmdpbmdDdXJzb3JQb3MgOiB0aGlzLmVsLnNlbGVjdGlvbkVuZDtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHBvcykge1xuICAgICAgaWYgKCF0aGlzLmVsIHx8ICF0aGlzLmVsLmlzQWN0aXZlKSByZXR1cm47XG4gICAgICB0aGlzLmVsLnNlbGVjdChwb3MsIHBvcyk7XG5cbiAgICAgIHRoaXMuX3NhdmVTZWxlY3Rpb24oKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIFN0b3JlcyBjdXJyZW50IHNlbGVjdGlvblxyXG4gICAgICBAcHJvdGVjdGVkXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX3NhdmVTZWxlY3Rpb25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3NhdmVTZWxlY3Rpb24oKVxuICAgIC8qIGV2ICovXG4gICAge1xuICAgICAgaWYgKHRoaXMudmFsdWUgIT09IHRoaXMuZWwudmFsdWUpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdFbGVtZW50IHZhbHVlIHdhcyBjaGFuZ2VkIG91dHNpZGUgb2YgbWFzay4gU3luY3Jvbml6ZSBtYXNrIHVzaW5nIGBtYXNrLnVwZGF0ZVZhbHVlKClgIHRvIHdvcmsgcHJvcGVybHkuJyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9zZWxlY3Rpb24gPSB7XG4gICAgICAgIHN0YXJ0OiB0aGlzLnNlbGVjdGlvblN0YXJ0LFxuICAgICAgICBlbmQ6IHRoaXMuY3Vyc29yUG9zXG4gICAgICB9O1xuICAgIH1cbiAgICAvKiogU3luY3Jvbml6ZXMgbW9kZWwgdmFsdWUgZnJvbSB2aWV3ICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ1cGRhdGVWYWx1ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVWYWx1ZSgpIHtcbiAgICAgIHRoaXMubWFza2VkLnZhbHVlID0gdGhpcy5lbC52YWx1ZTtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdGhpcy5tYXNrZWQudmFsdWU7XG4gICAgfVxuICAgIC8qKiBTeW5jcm9uaXplcyB2aWV3IGZyb20gbW9kZWwgdmFsdWUsIGZpcmVzIGNoYW5nZSBldmVudHMgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInVwZGF0ZUNvbnRyb2xcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlQ29udHJvbCgpIHtcbiAgICAgIHZhciBuZXdVbm1hc2tlZFZhbHVlID0gdGhpcy5tYXNrZWQudW5tYXNrZWRWYWx1ZTtcbiAgICAgIHZhciBuZXdWYWx1ZSA9IHRoaXMubWFza2VkLnZhbHVlO1xuICAgICAgdmFyIGlzQ2hhbmdlZCA9IHRoaXMudW5tYXNrZWRWYWx1ZSAhPT0gbmV3VW5tYXNrZWRWYWx1ZSB8fCB0aGlzLnZhbHVlICE9PSBuZXdWYWx1ZTtcbiAgICAgIHRoaXMuX3VubWFza2VkVmFsdWUgPSBuZXdVbm1hc2tlZFZhbHVlO1xuICAgICAgdGhpcy5fdmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgIGlmICh0aGlzLmVsLnZhbHVlICE9PSBuZXdWYWx1ZSkgdGhpcy5lbC52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgaWYgKGlzQ2hhbmdlZCkgdGhpcy5fZmlyZUNoYW5nZUV2ZW50cygpO1xuICAgIH1cbiAgICAvKiogVXBkYXRlcyBvcHRpb25zIHdpdGggZGVlcCBlcXVhbCBjaGVjaywgcmVjcmVhdGVzIEB7bGluayBNYXNrZWR9IG1vZGVsIGlmIG1hc2sgdHlwZSBjaGFuZ2VzICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ1cGRhdGVPcHRpb25zXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZU9wdGlvbnMob3B0cykge1xuICAgICAgdmFyIG1hc2sgPSBvcHRzLm1hc2ssXG4gICAgICAgICAgcmVzdE9wdHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob3B0cywgW1wibWFza1wiXSk7XG5cbiAgICAgIHZhciB1cGRhdGVNYXNrID0gIXRoaXMubWFza0VxdWFscyhtYXNrKTtcbiAgICAgIHZhciB1cGRhdGVPcHRzID0gIW9iamVjdEluY2x1ZGVzKHRoaXMubWFza2VkLCByZXN0T3B0cyk7XG4gICAgICBpZiAodXBkYXRlTWFzaykgdGhpcy5tYXNrID0gbWFzaztcbiAgICAgIGlmICh1cGRhdGVPcHRzKSB0aGlzLm1hc2tlZC51cGRhdGVPcHRpb25zKHJlc3RPcHRzKTtcbiAgICAgIGlmICh1cGRhdGVNYXNrIHx8IHVwZGF0ZU9wdHMpIHRoaXMudXBkYXRlQ29udHJvbCgpO1xuICAgIH1cbiAgICAvKiogVXBkYXRlcyBjdXJzb3IgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInVwZGF0ZUN1cnNvclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVDdXJzb3IoY3Vyc29yUG9zKSB7XG4gICAgICBpZiAoY3Vyc29yUG9zID09IG51bGwpIHJldHVybjtcbiAgICAgIHRoaXMuY3Vyc29yUG9zID0gY3Vyc29yUG9zOyAvLyBhbHNvIHF1ZXVlIGNoYW5nZSBjdXJzb3IgZm9yIG1vYmlsZSBicm93c2Vyc1xuXG4gICAgICB0aGlzLl9kZWxheVVwZGF0ZUN1cnNvcihjdXJzb3JQb3MpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgRGVsYXlzIGN1cnNvciB1cGRhdGUgdG8gc3VwcG9ydCBtb2JpbGUgYnJvd3NlcnNcclxuICAgICAgQHByaXZhdGVcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfZGVsYXlVcGRhdGVDdXJzb3JcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2RlbGF5VXBkYXRlQ3Vyc29yKGN1cnNvclBvcykge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdGhpcy5fYWJvcnRVcGRhdGVDdXJzb3IoKTtcblxuICAgICAgdGhpcy5fY2hhbmdpbmdDdXJzb3JQb3MgPSBjdXJzb3JQb3M7XG4gICAgICB0aGlzLl9jdXJzb3JDaGFuZ2luZyA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIV90aGlzLmVsKSByZXR1cm47IC8vIGlmIHdhcyBkZXN0cm95ZWRcblxuICAgICAgICBfdGhpcy5jdXJzb3JQb3MgPSBfdGhpcy5fY2hhbmdpbmdDdXJzb3JQb3M7XG5cbiAgICAgICAgX3RoaXMuX2Fib3J0VXBkYXRlQ3Vyc29yKCk7XG4gICAgICB9LCAxMCk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBGaXJlcyBjdXN0b20gZXZlbnRzXHJcbiAgICAgIEBwcm90ZWN0ZWRcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfZmlyZUNoYW5nZUV2ZW50c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZmlyZUNoYW5nZUV2ZW50cygpIHtcbiAgICAgIHRoaXMuX2ZpcmVFdmVudCgnYWNjZXB0JywgdGhpcy5faW5wdXRFdmVudCk7XG5cbiAgICAgIGlmICh0aGlzLm1hc2tlZC5pc0NvbXBsZXRlKSB0aGlzLl9maXJlRXZlbnQoJ2NvbXBsZXRlJywgdGhpcy5faW5wdXRFdmVudCk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBBYm9ydHMgZGVsYXllZCBjdXJzb3IgdXBkYXRlXHJcbiAgICAgIEBwcml2YXRlXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX2Fib3J0VXBkYXRlQ3Vyc29yXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9hYm9ydFVwZGF0ZUN1cnNvcigpIHtcbiAgICAgIGlmICh0aGlzLl9jdXJzb3JDaGFuZ2luZykge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fY3Vyc29yQ2hhbmdpbmcpO1xuICAgICAgICBkZWxldGUgdGhpcy5fY3Vyc29yQ2hhbmdpbmc7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKiBBbGlnbnMgY3Vyc29yIHRvIG5lYXJlc3QgYXZhaWxhYmxlIHBvc2l0aW9uICovXG5cbiAgfSwge1xuICAgIGtleTogXCJhbGlnbkN1cnNvclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhbGlnbkN1cnNvcigpIHtcbiAgICAgIHRoaXMuY3Vyc29yUG9zID0gdGhpcy5tYXNrZWQubmVhcmVzdElucHV0UG9zKHRoaXMuY3Vyc29yUG9zLCBESVJFQ1RJT04uTEVGVCk7XG4gICAgfVxuICAgIC8qKiBBbGlnbnMgY3Vyc29yIG9ubHkgaWYgc2VsZWN0aW9uIGlzIGVtcHR5ICovXG5cbiAgfSwge1xuICAgIGtleTogXCJhbGlnbkN1cnNvckZyaWVuZGx5XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFsaWduQ3Vyc29yRnJpZW5kbHkoKSB7XG4gICAgICBpZiAodGhpcy5zZWxlY3Rpb25TdGFydCAhPT0gdGhpcy5jdXJzb3JQb3MpIHJldHVybjsgLy8gc2tpcCBpZiByYW5nZSBpcyBzZWxlY3RlZFxuXG4gICAgICB0aGlzLmFsaWduQ3Vyc29yKCk7XG4gICAgfVxuICAgIC8qKiBBZGRzIGxpc3RlbmVyIG9uIGN1c3RvbSBldmVudCAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwib25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb24oZXYsIGhhbmRsZXIpIHtcbiAgICAgIGlmICghdGhpcy5fbGlzdGVuZXJzW2V2XSkgdGhpcy5fbGlzdGVuZXJzW2V2XSA9IFtdO1xuXG4gICAgICB0aGlzLl9saXN0ZW5lcnNbZXZdLnB1c2goaGFuZGxlcik7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKiogUmVtb3ZlcyBjdXN0b20gZXZlbnQgbGlzdGVuZXIgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm9mZlwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvZmYoZXYsIGhhbmRsZXIpIHtcbiAgICAgIGlmICghdGhpcy5fbGlzdGVuZXJzW2V2XSkgcmV0dXJuIHRoaXM7XG5cbiAgICAgIGlmICghaGFuZGxlcikge1xuICAgICAgICBkZWxldGUgdGhpcy5fbGlzdGVuZXJzW2V2XTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIHZhciBoSW5kZXggPSB0aGlzLl9saXN0ZW5lcnNbZXZdLmluZGV4T2YoaGFuZGxlcik7XG5cbiAgICAgIGlmIChoSW5kZXggPj0gMCkgdGhpcy5fbGlzdGVuZXJzW2V2XS5zcGxpY2UoaEluZGV4LCAxKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKiogSGFuZGxlcyB2aWV3IGlucHV0IGV2ZW50ICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfb25JbnB1dFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfb25JbnB1dChlKSB7XG4gICAgICB0aGlzLl9pbnB1dEV2ZW50ID0gZTtcblxuICAgICAgdGhpcy5fYWJvcnRVcGRhdGVDdXJzb3IoKTsgLy8gZml4IHN0cmFuZ2UgSUUgYmVoYXZpb3JcblxuXG4gICAgICBpZiAoIXRoaXMuX3NlbGVjdGlvbikgcmV0dXJuIHRoaXMudXBkYXRlVmFsdWUoKTtcbiAgICAgIHZhciBkZXRhaWxzID0gbmV3IEFjdGlvbkRldGFpbHMoIC8vIG5ldyBzdGF0ZVxuICAgICAgdGhpcy5lbC52YWx1ZSwgdGhpcy5jdXJzb3JQb3MsIC8vIG9sZCBzdGF0ZVxuICAgICAgdGhpcy52YWx1ZSwgdGhpcy5fc2VsZWN0aW9uKTtcbiAgICAgIHZhciBvbGRSYXdWYWx1ZSA9IHRoaXMubWFza2VkLnJhd0lucHV0VmFsdWU7XG4gICAgICB2YXIgb2Zmc2V0ID0gdGhpcy5tYXNrZWQuc3BsaWNlKGRldGFpbHMuc3RhcnRDaGFuZ2VQb3MsIGRldGFpbHMucmVtb3ZlZC5sZW5ndGgsIGRldGFpbHMuaW5zZXJ0ZWQsIGRldGFpbHMucmVtb3ZlRGlyZWN0aW9uKS5vZmZzZXQ7IC8vIGZvcmNlIGFsaWduIGluIHJlbW92ZSBkaXJlY3Rpb24gb25seSBpZiBubyBpbnB1dCBjaGFycyB3ZXJlIHJlbW92ZWRcbiAgICAgIC8vIG90aGVyd2lzZSB3ZSBzdGlsbCBuZWVkIHRvIGFsaWduIHdpdGggTk9ORSAodG8gZ2V0IG91dCBmcm9tIGZpeGVkIHN5bWJvbHMgZm9yIGluc3RhbmNlKVxuXG4gICAgICB2YXIgcmVtb3ZlRGlyZWN0aW9uID0gb2xkUmF3VmFsdWUgPT09IHRoaXMubWFza2VkLnJhd0lucHV0VmFsdWUgPyBkZXRhaWxzLnJlbW92ZURpcmVjdGlvbiA6IERJUkVDVElPTi5OT05FO1xuICAgICAgdmFyIGN1cnNvclBvcyA9IHRoaXMubWFza2VkLm5lYXJlc3RJbnB1dFBvcyhkZXRhaWxzLnN0YXJ0Q2hhbmdlUG9zICsgb2Zmc2V0LCByZW1vdmVEaXJlY3Rpb24pO1xuICAgICAgdGhpcy51cGRhdGVDb250cm9sKCk7XG4gICAgICB0aGlzLnVwZGF0ZUN1cnNvcihjdXJzb3JQb3MpO1xuICAgICAgZGVsZXRlIHRoaXMuX2lucHV0RXZlbnQ7XG4gICAgfVxuICAgIC8qKiBIYW5kbGVzIHZpZXcgY2hhbmdlIGV2ZW50IGFuZCBjb21taXRzIG1vZGVsIHZhbHVlICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfb25DaGFuZ2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX29uQ2hhbmdlKCkge1xuICAgICAgaWYgKHRoaXMudmFsdWUgIT09IHRoaXMuZWwudmFsdWUpIHtcbiAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLm1hc2tlZC5kb0NvbW1pdCgpO1xuICAgICAgdGhpcy51cGRhdGVDb250cm9sKCk7XG5cbiAgICAgIHRoaXMuX3NhdmVTZWxlY3Rpb24oKTtcbiAgICB9XG4gICAgLyoqIEhhbmRsZXMgdmlldyBkcm9wIGV2ZW50LCBwcmV2ZW50cyBieSBkZWZhdWx0ICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfb25Ecm9wXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9vbkRyb3AoZXYpIHtcbiAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gICAgLyoqIFJlc3RvcmUgbGFzdCBzZWxlY3Rpb24gb24gZm9jdXMgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9vbkZvY3VzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9vbkZvY3VzKGV2KSB7XG4gICAgICB0aGlzLmFsaWduQ3Vyc29yRnJpZW5kbHkoKTtcbiAgICB9XG4gICAgLyoqIFJlc3RvcmUgbGFzdCBzZWxlY3Rpb24gb24gZm9jdXMgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9vbkNsaWNrXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9vbkNsaWNrKGV2KSB7XG4gICAgICB0aGlzLmFsaWduQ3Vyc29yRnJpZW5kbHkoKTtcbiAgICB9XG4gICAgLyoqIFVuYmluZCB2aWV3IGV2ZW50cyBhbmQgcmVtb3ZlcyBlbGVtZW50IHJlZmVyZW5jZSAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZGVzdHJveVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgdGhpcy5fdW5iaW5kRXZlbnRzKCk7IC8vICRGbG93Rml4TWUgd2h5IG5vdCBkbyBzbz9cblxuXG4gICAgICB0aGlzLl9saXN0ZW5lcnMubGVuZ3RoID0gMDsgLy8gJEZsb3dGaXhNZVxuXG4gICAgICBkZWxldGUgdGhpcy5lbDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gSW5wdXRNYXNrO1xufSgpO1xuSU1hc2suSW5wdXRNYXNrID0gSW5wdXRNYXNrO1xuXG5leHBvcnQgZGVmYXVsdCBJbnB1dE1hc2s7XG4iLCJpbXBvcnQgeyBfIGFzIF9jcmVhdGVDbGFzcywgYSBhcyBfY2xhc3NDYWxsQ2hlY2sgfSBmcm9tICcuLi9fcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzLTZjY2IxZjY0LmpzJztcbmltcG9ydCBJTWFzayBmcm9tICcuLi9jb3JlL2hvbGRlci5qcyc7XG5cbi8qKlxyXG4gIEdlbmVyaWMgZWxlbWVudCBBUEkgdG8gdXNlIHdpdGggbWFza1xyXG4gIEBpbnRlcmZhY2VcclxuKi9cbnZhciBNYXNrRWxlbWVudCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE1hc2tFbGVtZW50KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYXNrRWxlbWVudCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTWFza0VsZW1lbnQsIFt7XG4gICAga2V5OiBcInNlbGVjdGlvblN0YXJ0XCIsXG4gICAgZ2V0OlxuICAgIC8qKiAqL1xuXG4gICAgLyoqICovXG5cbiAgICAvKiogKi9cblxuICAgIC8qKiBTYWZlbHkgcmV0dXJucyBzZWxlY3Rpb24gc3RhcnQgKi9cbiAgICBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgc3RhcnQ7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHN0YXJ0ID0gdGhpcy5fdW5zYWZlU2VsZWN0aW9uU3RhcnQ7XG4gICAgICB9IGNhdGNoIChlKSB7fVxuXG4gICAgICByZXR1cm4gc3RhcnQgIT0gbnVsbCA/IHN0YXJ0IDogdGhpcy52YWx1ZS5sZW5ndGg7XG4gICAgfVxuICAgIC8qKiBTYWZlbHkgcmV0dXJucyBzZWxlY3Rpb24gZW5kICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzZWxlY3Rpb25FbmRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciBlbmQ7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGVuZCA9IHRoaXMuX3Vuc2FmZVNlbGVjdGlvbkVuZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG5cbiAgICAgIHJldHVybiBlbmQgIT0gbnVsbCA/IGVuZCA6IHRoaXMudmFsdWUubGVuZ3RoO1xuICAgIH1cbiAgICAvKiogU2FmZWx5IHNldHMgZWxlbWVudCBzZWxlY3Rpb24gKi9cblxuICB9LCB7XG4gICAga2V5OiBcInNlbGVjdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZWxlY3Qoc3RhcnQsIGVuZCkge1xuICAgICAgaWYgKHN0YXJ0ID09IG51bGwgfHwgZW5kID09IG51bGwgfHwgc3RhcnQgPT09IHRoaXMuc2VsZWN0aW9uU3RhcnQgJiYgZW5kID09PSB0aGlzLnNlbGVjdGlvbkVuZCkgcmV0dXJuO1xuXG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLl91bnNhZmVTZWxlY3Qoc3RhcnQsIGVuZCk7XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgIH1cbiAgICAvKiogU2hvdWxkIGJlIG92ZXJyaWRlbiBpbiBzdWJjbGFzc2VzICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfdW5zYWZlU2VsZWN0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF91bnNhZmVTZWxlY3Qoc3RhcnQsIGVuZCkge31cbiAgICAvKiogU2hvdWxkIGJlIG92ZXJyaWRlbiBpbiBzdWJjbGFzc2VzICovXG5cbiAgfSwge1xuICAgIGtleTogXCJpc0FjdGl2ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvKiogU2hvdWxkIGJlIG92ZXJyaWRlbiBpbiBzdWJjbGFzc2VzICovXG5cbiAgfSwge1xuICAgIGtleTogXCJiaW5kRXZlbnRzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJpbmRFdmVudHMoaGFuZGxlcnMpIHt9XG4gICAgLyoqIFNob3VsZCBiZSBvdmVycmlkZW4gaW4gc3ViY2xhc3NlcyAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidW5iaW5kRXZlbnRzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVuYmluZEV2ZW50cygpIHt9XG4gIH1dKTtcblxuICByZXR1cm4gTWFza0VsZW1lbnQ7XG59KCk7XG5JTWFzay5NYXNrRWxlbWVudCA9IE1hc2tFbGVtZW50O1xuXG5leHBvcnQgZGVmYXVsdCBNYXNrRWxlbWVudDtcbiIsImltcG9ydCB7IF8gYXMgX2NyZWF0ZUNsYXNzLCBhIGFzIF9jbGFzc0NhbGxDaGVjayB9IGZyb20gJy4uL19yb2xsdXBQbHVnaW5CYWJlbEhlbHBlcnMtNmNjYjFmNjQuanMnO1xuaW1wb3J0IHsgRElSRUNUSU9OIH0gZnJvbSAnLi91dGlscy5qcyc7XG5cbi8qKiBQcm92aWRlcyBkZXRhaWxzIG9mIGNoYW5naW5nIGlucHV0ICovXG5cbnZhciBBY3Rpb25EZXRhaWxzID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgLyoqIEN1cnJlbnQgaW5wdXQgdmFsdWUgKi9cblxuICAvKiogQ3VycmVudCBjdXJzb3IgcG9zaXRpb24gKi9cblxuICAvKiogT2xkIGlucHV0IHZhbHVlICovXG5cbiAgLyoqIE9sZCBzZWxlY3Rpb24gKi9cbiAgZnVuY3Rpb24gQWN0aW9uRGV0YWlscyh2YWx1ZSwgY3Vyc29yUG9zLCBvbGRWYWx1ZSwgb2xkU2VsZWN0aW9uKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFjdGlvbkRldGFpbHMpO1xuXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuY3Vyc29yUG9zID0gY3Vyc29yUG9zO1xuICAgIHRoaXMub2xkVmFsdWUgPSBvbGRWYWx1ZTtcbiAgICB0aGlzLm9sZFNlbGVjdGlvbiA9IG9sZFNlbGVjdGlvbjsgLy8gZG91YmxlIGNoZWNrIGlmIGxlZnQgcGFydCB3YXMgY2hhbmdlZCAoYXV0b2ZpbGxpbmcsIG90aGVyIG5vbi1zdGFuZGFyZCBpbnB1dCB0cmlnZ2VycylcblxuICAgIHdoaWxlICh0aGlzLnZhbHVlLnNsaWNlKDAsIHRoaXMuc3RhcnRDaGFuZ2VQb3MpICE9PSB0aGlzLm9sZFZhbHVlLnNsaWNlKDAsIHRoaXMuc3RhcnRDaGFuZ2VQb3MpKSB7XG4gICAgICAtLXRoaXMub2xkU2VsZWN0aW9uLnN0YXJ0O1xuICAgIH1cbiAgfVxuICAvKipcclxuICAgIFN0YXJ0IGNoYW5naW5nIHBvc2l0aW9uXHJcbiAgICBAcmVhZG9ubHlcclxuICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKEFjdGlvbkRldGFpbHMsIFt7XG4gICAga2V5OiBcInN0YXJ0Q2hhbmdlUG9zXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gTWF0aC5taW4odGhpcy5jdXJzb3JQb3MsIHRoaXMub2xkU2VsZWN0aW9uLnN0YXJ0KTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEluc2VydGVkIHN5bWJvbHMgY291bnRcclxuICAgICAgQHJlYWRvbmx5XHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiaW5zZXJ0ZWRDb3VudFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuY3Vyc29yUG9zIC0gdGhpcy5zdGFydENoYW5nZVBvcztcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEluc2VydGVkIHN5bWJvbHNcclxuICAgICAgQHJlYWRvbmx5XHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiaW5zZXJ0ZWRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlLnN1YnN0cih0aGlzLnN0YXJ0Q2hhbmdlUG9zLCB0aGlzLmluc2VydGVkQ291bnQpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgUmVtb3ZlZCBzeW1ib2xzIGNvdW50XHJcbiAgICAgIEByZWFkb25seVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInJlbW92ZWRDb3VudFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgLy8gTWF0aC5tYXggZm9yIG9wcG9zaXRlIG9wZXJhdGlvblxuICAgICAgcmV0dXJuIE1hdGgubWF4KHRoaXMub2xkU2VsZWN0aW9uLmVuZCAtIHRoaXMuc3RhcnRDaGFuZ2VQb3MgfHwgLy8gZm9yIERlbGV0ZVxuICAgICAgdGhpcy5vbGRWYWx1ZS5sZW5ndGggLSB0aGlzLnZhbHVlLmxlbmd0aCwgMCk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBSZW1vdmVkIHN5bWJvbHNcclxuICAgICAgQHJlYWRvbmx5XHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlZFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMub2xkVmFsdWUuc3Vic3RyKHRoaXMuc3RhcnRDaGFuZ2VQb3MsIHRoaXMucmVtb3ZlZENvdW50KTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIFVuY2hhbmdlZCBoZWFkIHN5bWJvbHNcclxuICAgICAgQHJlYWRvbmx5XHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiaGVhZFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWUuc3Vic3RyaW5nKDAsIHRoaXMuc3RhcnRDaGFuZ2VQb3MpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgVW5jaGFuZ2VkIHRhaWwgc3ltYm9sc1xyXG4gICAgICBAcmVhZG9ubHlcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ0YWlsXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZS5zdWJzdHJpbmcodGhpcy5zdGFydENoYW5nZVBvcyArIHRoaXMuaW5zZXJ0ZWRDb3VudCk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBSZW1vdmUgZGlyZWN0aW9uXHJcbiAgICAgIEByZWFkb25seVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInJlbW92ZURpcmVjdGlvblwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgaWYgKCF0aGlzLnJlbW92ZWRDb3VudCB8fCB0aGlzLmluc2VydGVkQ291bnQpIHJldHVybiBESVJFQ1RJT04uTk9ORTsgLy8gYWxpZ24gcmlnaHQgaWYgZGVsZXRlIGF0IHJpZ2h0IG9yIGlmIHJhbmdlIHJlbW92ZWQgKGV2ZW50IHdpdGggYmFja3NwYWNlKVxuXG4gICAgICByZXR1cm4gdGhpcy5vbGRTZWxlY3Rpb24uZW5kID09PSB0aGlzLmN1cnNvclBvcyB8fCB0aGlzLm9sZFNlbGVjdGlvbi5zdGFydCA9PT0gdGhpcy5jdXJzb3JQb3MgPyBESVJFQ1RJT04uUklHSFQgOiBESVJFQ1RJT04uTEVGVDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQWN0aW9uRGV0YWlscztcbn0oKTtcblxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uRGV0YWlscztcbiIsImltcG9ydCB7IF8gYXMgX2NyZWF0ZUNsYXNzLCBhIGFzIF9jbGFzc0NhbGxDaGVjayB9IGZyb20gJy4uL19yb2xsdXBQbHVnaW5CYWJlbEhlbHBlcnMtNmNjYjFmNjQuanMnO1xuXG4vKipcclxuICBQcm92aWRlcyBkZXRhaWxzIG9mIGNoYW5naW5nIG1vZGVsIHZhbHVlXHJcbiAgQHBhcmFtIHtPYmplY3R9IFtkZXRhaWxzXVxyXG4gIEBwYXJhbSB7c3RyaW5nfSBbZGV0YWlscy5pbnNlcnRlZF0gLSBJbnNlcnRlZCBzeW1ib2xzXHJcbiAgQHBhcmFtIHtib29sZWFufSBbZGV0YWlscy5za2lwXSAtIENhbiBza2lwIGNoYXJzXHJcbiAgQHBhcmFtIHtudW1iZXJ9IFtkZXRhaWxzLnJlbW92ZUNvdW50XSAtIFJlbW92ZWQgc3ltYm9scyBjb3VudFxyXG4gIEBwYXJhbSB7bnVtYmVyfSBbZGV0YWlscy50YWlsU2hpZnRdIC0gQWRkaXRpb25hbCBvZmZzZXQgaWYgYW55IGNoYW5nZXMgb2NjdXJyZWQgYmVmb3JlIHRhaWxcclxuKi9cbnZhciBDaGFuZ2VEZXRhaWxzID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgLyoqIEluc2VydGVkIHN5bWJvbHMgKi9cblxuICAvKiogQ2FuIHNraXAgY2hhcnMgKi9cblxuICAvKiogQWRkaXRpb25hbCBvZmZzZXQgaWYgYW55IGNoYW5nZXMgb2NjdXJyZWQgYmVmb3JlIHRhaWwgKi9cblxuICAvKiogUmF3IGluc2VydGVkIGlzIHVzZWQgYnkgZHluYW1pYyBtYXNrICovXG4gIGZ1bmN0aW9uIENoYW5nZURldGFpbHMoZGV0YWlscykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDaGFuZ2VEZXRhaWxzKTtcblxuICAgIE9iamVjdC5hc3NpZ24odGhpcywge1xuICAgICAgaW5zZXJ0ZWQ6ICcnLFxuICAgICAgcmF3SW5zZXJ0ZWQ6ICcnLFxuICAgICAgc2tpcDogZmFsc2UsXG4gICAgICB0YWlsU2hpZnQ6IDBcbiAgICB9LCBkZXRhaWxzKTtcbiAgfVxuICAvKipcclxuICAgIEFnZ3JlZ2F0ZSBjaGFuZ2VzXHJcbiAgICBAcmV0dXJucyB7Q2hhbmdlRGV0YWlsc30gYHRoaXNgXHJcbiAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhDaGFuZ2VEZXRhaWxzLCBbe1xuICAgIGtleTogXCJhZ2dyZWdhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWdncmVnYXRlKGRldGFpbHMpIHtcbiAgICAgIHRoaXMucmF3SW5zZXJ0ZWQgKz0gZGV0YWlscy5yYXdJbnNlcnRlZDtcbiAgICAgIHRoaXMuc2tpcCA9IHRoaXMuc2tpcCB8fCBkZXRhaWxzLnNraXA7XG4gICAgICB0aGlzLmluc2VydGVkICs9IGRldGFpbHMuaW5zZXJ0ZWQ7XG4gICAgICB0aGlzLnRhaWxTaGlmdCArPSBkZXRhaWxzLnRhaWxTaGlmdDtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKiogVG90YWwgb2Zmc2V0IGNvbnNpZGVyaW5nIGFsbCBjaGFuZ2VzICovXG5cbiAgfSwge1xuICAgIGtleTogXCJvZmZzZXRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnRhaWxTaGlmdCArIHRoaXMuaW5zZXJ0ZWQubGVuZ3RoO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBDaGFuZ2VEZXRhaWxzO1xufSgpO1xuXG5leHBvcnQgZGVmYXVsdCBDaGFuZ2VEZXRhaWxzO1xuIiwiaW1wb3J0IHsgXyBhcyBfY3JlYXRlQ2xhc3MsIGEgYXMgX2NsYXNzQ2FsbENoZWNrIH0gZnJvbSAnLi4vX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycy02Y2NiMWY2NC5qcyc7XG5cbi8qKiBQcm92aWRlcyBkZXRhaWxzIG9mIGNvbnRpbnVvdXMgZXh0cmFjdGVkIHRhaWwgKi9cbnZhciBDb250aW51b3VzVGFpbERldGFpbHMgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAvKiogVGFpbCB2YWx1ZSBhcyBzdHJpbmcgKi9cblxuICAvKiogVGFpbCBzdGFydCBwb3NpdGlvbiAqL1xuXG4gIC8qKiBTdGFydCBwb3NpdGlvbiAqL1xuICBmdW5jdGlvbiBDb250aW51b3VzVGFpbERldGFpbHMoKSB7XG4gICAgdmFyIHZhbHVlID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAnJztcbiAgICB2YXIgZnJvbSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMDtcbiAgICB2YXIgc3RvcCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbnRpbnVvdXNUYWlsRGV0YWlscyk7XG5cbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5mcm9tID0gZnJvbTtcbiAgICB0aGlzLnN0b3AgPSBzdG9wO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKENvbnRpbnVvdXNUYWlsRGV0YWlscywgW3tcbiAgICBrZXk6IFwidG9TdHJpbmdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZXh0ZW5kXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGV4dGVuZCh0YWlsKSB7XG4gICAgICB0aGlzLnZhbHVlICs9IFN0cmluZyh0YWlsKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYXBwZW5kVG9cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYXBwZW5kVG8obWFza2VkKSB7XG4gICAgICByZXR1cm4gbWFza2VkLmFwcGVuZCh0aGlzLnRvU3RyaW5nKCksIHtcbiAgICAgICAgdGFpbDogdHJ1ZVxuICAgICAgfSkuYWdncmVnYXRlKG1hc2tlZC5fYXBwZW5kUGxhY2Vob2xkZXIoKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInN0YXRlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgICAgZnJvbTogdGhpcy5mcm9tLFxuICAgICAgICBzdG9wOiB0aGlzLnN0b3BcbiAgICAgIH07XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChzdGF0ZSkge1xuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBzdGF0ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNoaWZ0QmVmb3JlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNoaWZ0QmVmb3JlKHBvcykge1xuICAgICAgaWYgKHRoaXMuZnJvbSA+PSBwb3MgfHwgIXRoaXMudmFsdWUubGVuZ3RoKSByZXR1cm4gJyc7XG4gICAgICB2YXIgc2hpZnRDaGFyID0gdGhpcy52YWx1ZVswXTtcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlLnNsaWNlKDEpO1xuICAgICAgcmV0dXJuIHNoaWZ0Q2hhcjtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQ29udGludW91c1RhaWxEZXRhaWxzO1xufSgpO1xuXG5leHBvcnQgZGVmYXVsdCBDb250aW51b3VzVGFpbERldGFpbHM7XG4iLCIvKipcclxuICogQXBwbGllcyBtYXNrIG9uIGVsZW1lbnQuXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKiBAcGFyYW0ge0hUTUxJbnB1dEVsZW1lbnR8SFRNTFRleHRBcmVhRWxlbWVudHxNYXNrRWxlbWVudH0gZWwgLSBFbGVtZW50IHRvIGFwcGx5IG1hc2tcclxuICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBDdXN0b20gbWFzayBvcHRpb25zXHJcbiAqIEByZXR1cm4ge0lucHV0TWFza31cclxuICovXG5mdW5jdGlvbiBJTWFzayhlbCkge1xuICB2YXIgb3B0cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gIC8vIGN1cnJlbnRseSBhdmFpbGFibGUgb25seSBmb3IgaW5wdXQtbGlrZSBlbGVtZW50c1xuICByZXR1cm4gbmV3IElNYXNrLklucHV0TWFzayhlbCwgb3B0cyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IElNYXNrO1xuIiwiaW1wb3J0IHsgYyBhcyBfdHlwZW9mIH0gZnJvbSAnLi4vX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycy02Y2NiMWY2NC5qcyc7XG5cbi8qKiBDaGVja3MgaWYgdmFsdWUgaXMgc3RyaW5nICovXG5mdW5jdGlvbiBpc1N0cmluZyhzdHIpIHtcbiAgcmV0dXJuIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnIHx8IHN0ciBpbnN0YW5jZW9mIFN0cmluZztcbn1cbi8qKlxyXG4gIERpcmVjdGlvblxyXG4gIEBwcm9wIHtzdHJpbmd9IE5PTkVcclxuICBAcHJvcCB7c3RyaW5nfSBMRUZUXHJcbiAgQHByb3Age3N0cmluZ30gRk9SQ0VfTEVGVFxyXG4gIEBwcm9wIHtzdHJpbmd9IFJJR0hUXHJcbiAgQHByb3Age3N0cmluZ30gRk9SQ0VfUklHSFRcclxuKi9cblxudmFyIERJUkVDVElPTiA9IHtcbiAgTk9ORTogJ05PTkUnLFxuICBMRUZUOiAnTEVGVCcsXG4gIEZPUkNFX0xFRlQ6ICdGT1JDRV9MRUZUJyxcbiAgUklHSFQ6ICdSSUdIVCcsXG4gIEZPUkNFX1JJR0hUOiAnRk9SQ0VfUklHSFQnXG59O1xuLyoqXHJcbiAgRGlyZWN0aW9uXHJcbiAgQGVudW0ge3N0cmluZ31cclxuKi9cblxuLyoqIFJldHVybnMgbmV4dCBjaGFyIGluZGV4IGluIGRpcmVjdGlvbiAqL1xuZnVuY3Rpb24gaW5kZXhJbkRpcmVjdGlvbihwb3MsIGRpcmVjdGlvbikge1xuICBpZiAoZGlyZWN0aW9uID09PSBESVJFQ1RJT04uTEVGVCkgLS1wb3M7XG4gIHJldHVybiBwb3M7XG59XG4vKiogUmV0dXJucyBuZXh0IGNoYXIgcG9zaXRpb24gaW4gZGlyZWN0aW9uICovXG5cbmZ1bmN0aW9uIHBvc0luRGlyZWN0aW9uKHBvcywgZGlyZWN0aW9uKSB7XG4gIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgY2FzZSBESVJFQ1RJT04uTEVGVDpcbiAgICBjYXNlIERJUkVDVElPTi5GT1JDRV9MRUZUOlxuICAgICAgcmV0dXJuIC0tcG9zO1xuXG4gICAgY2FzZSBESVJFQ1RJT04uUklHSFQ6XG4gICAgY2FzZSBESVJFQ1RJT04uRk9SQ0VfUklHSFQ6XG4gICAgICByZXR1cm4gKytwb3M7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHBvcztcbiAgfVxufVxuLyoqICovXG5cbmZ1bmN0aW9uIGZvcmNlRGlyZWN0aW9uKGRpcmVjdGlvbikge1xuICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgIGNhc2UgRElSRUNUSU9OLkxFRlQ6XG4gICAgICByZXR1cm4gRElSRUNUSU9OLkZPUkNFX0xFRlQ7XG5cbiAgICBjYXNlIERJUkVDVElPTi5SSUdIVDpcbiAgICAgIHJldHVybiBESVJFQ1RJT04uRk9SQ0VfUklHSFQ7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGRpcmVjdGlvbjtcbiAgfVxufVxuLyoqIEVzY2FwZXMgcmVndWxhciBleHByZXNzaW9uIGNvbnRyb2wgY2hhcnMgKi9cblxuZnVuY3Rpb24gZXNjYXBlUmVnRXhwKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLiorP149IToke30oKXxbXFxdXFwvXFxcXF0pL2csICdcXFxcJDEnKTtcbn0gLy8gY2xvbmVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2Vwb2JlcmV6a2luL2Zhc3QtZGVlcC1lcXVhbCB3aXRoIHNtYWxsIGNoYW5nZXNcblxuZnVuY3Rpb24gb2JqZWN0SW5jbHVkZXMoYiwgYSkge1xuICBpZiAoYSA9PT0gYikgcmV0dXJuIHRydWU7XG4gIHZhciBhcnJBID0gQXJyYXkuaXNBcnJheShhKSxcbiAgICAgIGFyckIgPSBBcnJheS5pc0FycmF5KGIpLFxuICAgICAgaTtcblxuICBpZiAoYXJyQSAmJiBhcnJCKSB7XG4gICAgaWYgKGEubGVuZ3RoICE9IGIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKCFvYmplY3RJbmNsdWRlcyhhW2ldLCBiW2ldKSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKGFyckEgIT0gYXJyQikgcmV0dXJuIGZhbHNlO1xuXG4gIGlmIChhICYmIGIgJiYgX3R5cGVvZihhKSA9PT0gJ29iamVjdCcgJiYgX3R5cGVvZihiKSA9PT0gJ29iamVjdCcpIHtcbiAgICB2YXIgZGF0ZUEgPSBhIGluc3RhbmNlb2YgRGF0ZSxcbiAgICAgICAgZGF0ZUIgPSBiIGluc3RhbmNlb2YgRGF0ZTtcbiAgICBpZiAoZGF0ZUEgJiYgZGF0ZUIpIHJldHVybiBhLmdldFRpbWUoKSA9PSBiLmdldFRpbWUoKTtcbiAgICBpZiAoZGF0ZUEgIT0gZGF0ZUIpIHJldHVybiBmYWxzZTtcbiAgICB2YXIgcmVnZXhwQSA9IGEgaW5zdGFuY2VvZiBSZWdFeHAsXG4gICAgICAgIHJlZ2V4cEIgPSBiIGluc3RhbmNlb2YgUmVnRXhwO1xuICAgIGlmIChyZWdleHBBICYmIHJlZ2V4cEIpIHJldHVybiBhLnRvU3RyaW5nKCkgPT0gYi50b1N0cmluZygpO1xuICAgIGlmIChyZWdleHBBICE9IHJlZ2V4cEIpIHJldHVybiBmYWxzZTtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGEpOyAvLyBpZiAoa2V5cy5sZW5ndGggIT09IE9iamVjdC5rZXlzKGIpLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIGtleXNbaV0pKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICghb2JqZWN0SW5jbHVkZXMoYltrZXlzW2ldXSwgYVtrZXlzW2ldXSkpIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIGlmIChhICYmIGIgJiYgdHlwZW9mIGEgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGIgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gYS50b1N0cmluZygpID09PSBiLnRvU3RyaW5nKCk7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG4vKiogU2VsZWN0aW9uIHJhbmdlICovXG5cbmV4cG9ydCB7IERJUkVDVElPTiwgZXNjYXBlUmVnRXhwLCBmb3JjZURpcmVjdGlvbiwgaW5kZXhJbkRpcmVjdGlvbiwgaXNTdHJpbmcsIG9iamVjdEluY2x1ZGVzLCBwb3NJbkRpcmVjdGlvbiB9O1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBJbnB1dE1hc2sgfSBmcm9tICcuL2NvbnRyb2xzL2lucHV0LmpzJztcbmltcG9ydCBJTWFzayBmcm9tICcuL2NvcmUvaG9sZGVyLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL2NvcmUvaG9sZGVyLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWFza2VkIH0gZnJvbSAnLi9tYXNrZWQvYmFzZS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1hc2tlZFBhdHRlcm4gfSBmcm9tICcuL21hc2tlZC9wYXR0ZXJuLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWFza2VkRW51bSB9IGZyb20gJy4vbWFza2VkL2VudW0uanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNYXNrZWRSYW5nZSB9IGZyb20gJy4vbWFza2VkL3JhbmdlLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWFza2VkTnVtYmVyIH0gZnJvbSAnLi9tYXNrZWQvbnVtYmVyLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWFza2VkRGF0ZSB9IGZyb20gJy4vbWFza2VkL2RhdGUuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNYXNrZWRSZWdFeHAgfSBmcm9tICcuL21hc2tlZC9yZWdleHAuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNYXNrZWRGdW5jdGlvbiB9IGZyb20gJy4vbWFza2VkL2Z1bmN0aW9uLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWFza2VkRHluYW1pYyB9IGZyb20gJy4vbWFza2VkL2R5bmFtaWMuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjcmVhdGVNYXNrIH0gZnJvbSAnLi9tYXNrZWQvZmFjdG9yeS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1hc2tFbGVtZW50IH0gZnJvbSAnLi9jb250cm9scy9tYXNrLWVsZW1lbnQuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBIVE1MTWFza0VsZW1lbnQgfSBmcm9tICcuL2NvbnRyb2xzL2h0bWwtbWFzay1lbGVtZW50LmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSFRNTENvbnRlbnRlZGl0YWJsZU1hc2tFbGVtZW50IH0gZnJvbSAnLi9jb250cm9scy9odG1sLWNvbnRlbnRlZGl0YWJsZS1tYXNrLWVsZW1lbnQuanMnO1xuZXhwb3J0IHsgUElQRV9UWVBFLCBjcmVhdGVQaXBlLCBwaXBlIH0gZnJvbSAnLi9tYXNrZWQvcGlwZS5qcyc7XG5pbXBvcnQgJy4vX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycy02Y2NiMWY2NC5qcyc7XG5pbXBvcnQgJy4vY29yZS91dGlscy5qcyc7XG5pbXBvcnQgJy4vY29yZS9hY3Rpb24tZGV0YWlscy5qcyc7XG5pbXBvcnQgJy4vY29yZS9jaGFuZ2UtZGV0YWlscy5qcyc7XG5pbXBvcnQgJy4vY29yZS9jb250aW51b3VzLXRhaWwtZGV0YWlscy5qcyc7XG5pbXBvcnQgJy4vbWFza2VkL3BhdHRlcm4vaW5wdXQtZGVmaW5pdGlvbi5qcyc7XG5pbXBvcnQgJy4vbWFza2VkL3BhdHRlcm4vZml4ZWQtZGVmaW5pdGlvbi5qcyc7XG5pbXBvcnQgJy4vbWFza2VkL3BhdHRlcm4vY2h1bmstdGFpbC1kZXRhaWxzLmpzJztcblxudHJ5IHtcbiAgZ2xvYmFsVGhpcy5JTWFzayA9IElNYXNrO1xufSBjYXRjaCAoZSkge31cbiIsImltcG9ydCB7IF8gYXMgX2NyZWF0ZUNsYXNzLCBhIGFzIF9jbGFzc0NhbGxDaGVjayB9IGZyb20gJy4uL19yb2xsdXBQbHVnaW5CYWJlbEhlbHBlcnMtNmNjYjFmNjQuanMnO1xuaW1wb3J0IENoYW5nZURldGFpbHMgZnJvbSAnLi4vY29yZS9jaGFuZ2UtZGV0YWlscy5qcyc7XG5pbXBvcnQgQ29udGludW91c1RhaWxEZXRhaWxzIGZyb20gJy4uL2NvcmUvY29udGludW91cy10YWlsLWRldGFpbHMuanMnO1xuaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tICcuLi9jb3JlL3V0aWxzLmpzJztcbmltcG9ydCBJTWFzayBmcm9tICcuLi9jb3JlL2hvbGRlci5qcyc7XG5cbi8qKiBTdXBwb3J0ZWQgbWFzayB0eXBlICovXG5cbi8qKiBQcm92aWRlcyBjb21tb24gbWFza2luZyBzdHVmZiAqL1xudmFyIE1hc2tlZCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIC8vICRTaGFwZTxNYXNrZWRPcHRpb25zPjsgVE9ETyBhZnRlciBmaXggaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2Zsb3cvaXNzdWVzLzQ3NzNcblxuICAvKiogQHR5cGUge01hc2t9ICovXG5cbiAgLyoqICovXG4gIC8vICRGbG93Rml4TWUgbm8gaWRlYXNcblxuICAvKiogVHJhbnNmb3JtcyB2YWx1ZSBiZWZvcmUgbWFzayBwcm9jZXNzaW5nICovXG5cbiAgLyoqIFZhbGlkYXRlcyBpZiB2YWx1ZSBpcyBhY2NlcHRhYmxlICovXG5cbiAgLyoqIERvZXMgYWRkaXRpb25hbCBwcm9jZXNzaW5nIGluIHRoZSBlbmQgb2YgZWRpdGluZyAqL1xuXG4gIC8qKiBGb3JtYXQgdHlwZWQgdmFsdWUgdG8gc3RyaW5nICovXG5cbiAgLyoqIFBhcnNlIHN0cmdpbiB0byBnZXQgdHlwZWQgdmFsdWUgKi9cblxuICAvKiogRW5hYmxlIGNoYXJhY3RlcnMgb3ZlcndyaXRpbmcgKi9cblxuICAvKiogKi9cbiAgZnVuY3Rpb24gTWFza2VkKG9wdHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWFza2VkKTtcblxuICAgIHRoaXMuX3ZhbHVlID0gJyc7XG5cbiAgICB0aGlzLl91cGRhdGUoT2JqZWN0LmFzc2lnbih7fSwgTWFza2VkLkRFRkFVTFRTLCBvcHRzKSk7XG5cbiAgICB0aGlzLmlzSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICB9XG4gIC8qKiBTZXRzIGFuZCBhcHBsaWVzIG5ldyBvcHRpb25zICovXG5cblxuICBfY3JlYXRlQ2xhc3MoTWFza2VkLCBbe1xuICAgIGtleTogXCJ1cGRhdGVPcHRpb25zXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZU9wdGlvbnMob3B0cykge1xuICAgICAgaWYgKCFPYmplY3Qua2V5cyhvcHRzKS5sZW5ndGgpIHJldHVybjtcbiAgICAgIHRoaXMud2l0aFZhbHVlUmVmcmVzaCh0aGlzLl91cGRhdGUuYmluZCh0aGlzLCBvcHRzKSk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBTZXRzIG5ldyBvcHRpb25zXHJcbiAgICAgIEBwcm90ZWN0ZWRcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfdXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF91cGRhdGUob3B0cykge1xuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBvcHRzKTtcbiAgICB9XG4gICAgLyoqIE1hc2sgc3RhdGUgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInN0YXRlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBfdmFsdWU6IHRoaXMudmFsdWVcbiAgICAgIH07XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChzdGF0ZSkge1xuICAgICAgdGhpcy5fdmFsdWUgPSBzdGF0ZS5fdmFsdWU7XG4gICAgfVxuICAgIC8qKiBSZXNldHMgdmFsdWUgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInJlc2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgdGhpcy5fdmFsdWUgPSAnJztcbiAgICB9XG4gICAgLyoqICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ2YWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIHRoaXMucmVzb2x2ZSh2YWx1ZSk7XG4gICAgfVxuICAgIC8qKiBSZXNvbHZlIG5ldyB2YWx1ZSAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicmVzb2x2ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXNvbHZlKHZhbHVlKSB7XG4gICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICB0aGlzLmFwcGVuZCh2YWx1ZSwge1xuICAgICAgICBpbnB1dDogdHJ1ZVxuICAgICAgfSwgJycpO1xuICAgICAgdGhpcy5kb0NvbW1pdCgpO1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgfVxuICAgIC8qKiAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidW5tYXNrZWRWYWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgdGhpcy5hcHBlbmQodmFsdWUsIHt9LCAnJyk7XG4gICAgICB0aGlzLmRvQ29tbWl0KCk7XG4gICAgfVxuICAgIC8qKiAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidHlwZWRWYWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuZG9QYXJzZSh0aGlzLnZhbHVlKTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5kb0Zvcm1hdCh2YWx1ZSk7XG4gICAgfVxuICAgIC8qKiBWYWx1ZSB0aGF0IGluY2x1ZGVzIHJhdyB1c2VyIGlucHV0ICovXG5cbiAgfSwge1xuICAgIGtleTogXCJyYXdJbnB1dFZhbHVlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5leHRyYWN0SW5wdXQoMCwgdGhpcy52YWx1ZS5sZW5ndGgsIHtcbiAgICAgICAgcmF3OiB0cnVlXG4gICAgICB9KTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICB0aGlzLmFwcGVuZCh2YWx1ZSwge1xuICAgICAgICByYXc6IHRydWVcbiAgICAgIH0sICcnKTtcbiAgICAgIHRoaXMuZG9Db21taXQoKTtcbiAgICB9XG4gICAgLyoqICovXG5cbiAgfSwge1xuICAgIGtleTogXCJpc0NvbXBsZXRlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgLyoqIEZpbmRzIG5lYXJlc3QgaW5wdXQgcG9zaXRpb24gaW4gZGlyZWN0aW9uICovXG5cbiAgfSwge1xuICAgIGtleTogXCJuZWFyZXN0SW5wdXRQb3NcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbmVhcmVzdElucHV0UG9zKGN1cnNvclBvcywgZGlyZWN0aW9uKSB7XG4gICAgICByZXR1cm4gY3Vyc29yUG9zO1xuICAgIH1cbiAgICAvKiogRXh0cmFjdHMgdmFsdWUgaW4gcmFuZ2UgY29uc2lkZXJpbmcgZmxhZ3MgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImV4dHJhY3RJbnB1dFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBleHRyYWN0SW5wdXQoKSB7XG4gICAgICB2YXIgZnJvbVBvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogMDtcbiAgICAgIHZhciB0b1BvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdGhpcy52YWx1ZS5sZW5ndGg7XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZS5zbGljZShmcm9tUG9zLCB0b1Bvcyk7XG4gICAgfVxuICAgIC8qKiBFeHRyYWN0cyB0YWlsIGluIHJhbmdlICovXG5cbiAgfSwge1xuICAgIGtleTogXCJleHRyYWN0VGFpbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBleHRyYWN0VGFpbCgpIHtcbiAgICAgIHZhciBmcm9tUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xuICAgICAgdmFyIHRvUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0aGlzLnZhbHVlLmxlbmd0aDtcbiAgICAgIHJldHVybiBuZXcgQ29udGludW91c1RhaWxEZXRhaWxzKHRoaXMuZXh0cmFjdElucHV0KGZyb21Qb3MsIHRvUG9zKSwgZnJvbVBvcyk7XG4gICAgfVxuICAgIC8qKiBBcHBlbmRzIHRhaWwgKi9cbiAgICAvLyAkRmxvd0ZpeE1lIG5vIGlkZWFzXG5cbiAgfSwge1xuICAgIGtleTogXCJhcHBlbmRUYWlsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFwcGVuZFRhaWwodGFpbCkge1xuICAgICAgaWYgKGlzU3RyaW5nKHRhaWwpKSB0YWlsID0gbmV3IENvbnRpbnVvdXNUYWlsRGV0YWlscyhTdHJpbmcodGFpbCkpO1xuICAgICAgcmV0dXJuIHRhaWwuYXBwZW5kVG8odGhpcyk7XG4gICAgfVxuICAgIC8qKiBBcHBlbmRzIGNoYXIgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9hcHBlbmRDaGFyUmF3XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9hcHBlbmRDaGFyUmF3KGNoKSB7XG4gICAgICBpZiAoIWNoKSByZXR1cm4gbmV3IENoYW5nZURldGFpbHMoKTtcbiAgICAgIHRoaXMuX3ZhbHVlICs9IGNoO1xuICAgICAgcmV0dXJuIG5ldyBDaGFuZ2VEZXRhaWxzKHtcbiAgICAgICAgaW5zZXJ0ZWQ6IGNoLFxuICAgICAgICByYXdJbnNlcnRlZDogY2hcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKiogQXBwZW5kcyBjaGFyICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfYXBwZW5kQ2hhclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfYXBwZW5kQ2hhcihjaCkge1xuICAgICAgdmFyIGZsYWdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICAgIHZhciBjaGVja1RhaWwgPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZDtcbiAgICAgIHZhciBjb25zaXN0ZW50U3RhdGUgPSB0aGlzLnN0YXRlO1xuXG4gICAgICB2YXIgZGV0YWlscyA9IHRoaXMuX2FwcGVuZENoYXJSYXcodGhpcy5kb1ByZXBhcmUoY2gsIGZsYWdzKSwgZmxhZ3MpO1xuXG4gICAgICBpZiAoZGV0YWlscy5pbnNlcnRlZCkge1xuICAgICAgICB2YXIgY29uc2lzdGVudFRhaWw7XG4gICAgICAgIHZhciBhcHBlbmRlZCA9IHRoaXMuZG9WYWxpZGF0ZShmbGFncykgIT09IGZhbHNlO1xuXG4gICAgICAgIGlmIChhcHBlbmRlZCAmJiBjaGVja1RhaWwgIT0gbnVsbCkge1xuICAgICAgICAgIC8vIHZhbGlkYXRpb24gb2ssIGNoZWNrIHRhaWxcbiAgICAgICAgICB2YXIgYmVmb3JlVGFpbFN0YXRlID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICAgIGlmICh0aGlzLm92ZXJ3cml0ZSkge1xuICAgICAgICAgICAgY29uc2lzdGVudFRhaWwgPSBjaGVja1RhaWwuc3RhdGU7XG4gICAgICAgICAgICBjaGVja1RhaWwuc2hpZnRCZWZvcmUodGhpcy52YWx1ZS5sZW5ndGgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciB0YWlsRGV0YWlscyA9IHRoaXMuYXBwZW5kVGFpbChjaGVja1RhaWwpO1xuICAgICAgICAgIGFwcGVuZGVkID0gdGFpbERldGFpbHMucmF3SW5zZXJ0ZWQgPT09IGNoZWNrVGFpbC50b1N0cmluZygpOyAvLyBpZiBvaywgcm9sbGJhY2sgc3RhdGUgYWZ0ZXIgdGFpbFxuXG4gICAgICAgICAgaWYgKGFwcGVuZGVkICYmIHRhaWxEZXRhaWxzLmluc2VydGVkKSB0aGlzLnN0YXRlID0gYmVmb3JlVGFpbFN0YXRlO1xuICAgICAgICB9IC8vIHJldmVydCBhbGwgaWYgc29tZXRoaW5nIHdlbnQgd3JvbmdcblxuXG4gICAgICAgIGlmICghYXBwZW5kZWQpIHtcbiAgICAgICAgICBkZXRhaWxzID0gbmV3IENoYW5nZURldGFpbHMoKTtcbiAgICAgICAgICB0aGlzLnN0YXRlID0gY29uc2lzdGVudFN0YXRlO1xuICAgICAgICAgIGlmIChjaGVja1RhaWwgJiYgY29uc2lzdGVudFRhaWwpIGNoZWNrVGFpbC5zdGF0ZSA9IGNvbnNpc3RlbnRUYWlsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZXRhaWxzO1xuICAgIH1cbiAgICAvKiogQXBwZW5kcyBvcHRpb25hbCBwbGFjZWhvbGRlciBhdCBlbmQgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9hcHBlbmRQbGFjZWhvbGRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfYXBwZW5kUGxhY2Vob2xkZXIoKSB7XG4gICAgICByZXR1cm4gbmV3IENoYW5nZURldGFpbHMoKTtcbiAgICB9XG4gICAgLyoqIEFwcGVuZHMgc3ltYm9scyBjb25zaWRlcmluZyBmbGFncyAqL1xuICAgIC8vICRGbG93Rml4TWUgbm8gaWRlYXNcblxuICB9LCB7XG4gICAga2V5OiBcImFwcGVuZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhcHBlbmQoc3RyLCBmbGFncywgdGFpbCkge1xuICAgICAgaWYgKCFpc1N0cmluZyhzdHIpKSB0aHJvdyBuZXcgRXJyb3IoJ3ZhbHVlIHNob3VsZCBiZSBzdHJpbmcnKTtcbiAgICAgIHZhciBkZXRhaWxzID0gbmV3IENoYW5nZURldGFpbHMoKTtcbiAgICAgIHZhciBjaGVja1RhaWwgPSBpc1N0cmluZyh0YWlsKSA/IG5ldyBDb250aW51b3VzVGFpbERldGFpbHMoU3RyaW5nKHRhaWwpKSA6IHRhaWw7XG4gICAgICBpZiAoZmxhZ3MgJiYgZmxhZ3MudGFpbCkgZmxhZ3MuX2JlZm9yZVRhaWxTdGF0ZSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgIGZvciAodmFyIGNpID0gMDsgY2kgPCBzdHIubGVuZ3RoOyArK2NpKSB7XG4gICAgICAgIGRldGFpbHMuYWdncmVnYXRlKHRoaXMuX2FwcGVuZENoYXIoc3RyW2NpXSwgZmxhZ3MsIGNoZWNrVGFpbCkpO1xuICAgICAgfSAvLyBhcHBlbmQgdGFpbCBidXQgYWdncmVnYXRlIG9ubHkgdGFpbFNoaWZ0XG5cblxuICAgICAgaWYgKGNoZWNrVGFpbCAhPSBudWxsKSB7XG4gICAgICAgIGRldGFpbHMudGFpbFNoaWZ0ICs9IHRoaXMuYXBwZW5kVGFpbChjaGVja1RhaWwpLnRhaWxTaGlmdDsgLy8gVE9ETyBpdCdzIGEgZ29vZCBpZGVhIHRvIGNsZWFyIHN0YXRlIGFmdGVyIGFwcGVuZGluZyBlbmRzXG4gICAgICAgIC8vIGJ1dCBpdCBjYXVzZXMgYnVncyB3aGVuIG9uZSBhcHBlbmQgY2FsbHMgYW5vdGhlciAod2hlbiBkeW5hbWljIGRpc3BhdGNoIHNldCByYXdJbnB1dFZhbHVlKVxuICAgICAgICAvLyB0aGlzLl9yZXNldEJlZm9yZVRhaWxTdGF0ZSgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGV0YWlscztcbiAgICB9XG4gICAgLyoqICovXG5cbiAgfSwge1xuICAgIGtleTogXCJyZW1vdmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgdmFyIGZyb21Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDA7XG4gICAgICB2YXIgdG9Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRoaXMudmFsdWUubGVuZ3RoO1xuICAgICAgdGhpcy5fdmFsdWUgPSB0aGlzLnZhbHVlLnNsaWNlKDAsIGZyb21Qb3MpICsgdGhpcy52YWx1ZS5zbGljZSh0b1Bvcyk7XG4gICAgICByZXR1cm4gbmV3IENoYW5nZURldGFpbHMoKTtcbiAgICB9XG4gICAgLyoqIENhbGxzIGZ1bmN0aW9uIGFuZCByZWFwcGxpZXMgY3VycmVudCB2YWx1ZSAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwid2l0aFZhbHVlUmVmcmVzaFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB3aXRoVmFsdWVSZWZyZXNoKGZuKSB7XG4gICAgICBpZiAodGhpcy5fcmVmcmVzaGluZyB8fCAhdGhpcy5pc0luaXRpYWxpemVkKSByZXR1cm4gZm4oKTtcbiAgICAgIHRoaXMuX3JlZnJlc2hpbmcgPSB0cnVlO1xuICAgICAgdmFyIHJhd0lucHV0ID0gdGhpcy5yYXdJbnB1dFZhbHVlO1xuICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgIHZhciByZXQgPSBmbigpO1xuICAgICAgdGhpcy5yYXdJbnB1dFZhbHVlID0gcmF3SW5wdXQ7IC8vIGFwcGVuZCBsb3N0IHRyYWlsaW5nIGNoYXJzIGF0IGVuZFxuXG4gICAgICBpZiAodGhpcy52YWx1ZSAmJiB0aGlzLnZhbHVlICE9PSB2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mKHRoaXMudmFsdWUpID09PSAwKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kKHZhbHVlLnNsaWNlKHRoaXMudmFsdWUubGVuZ3RoKSwge30sICcnKTtcbiAgICAgIH1cblxuICAgICAgZGVsZXRlIHRoaXMuX3JlZnJlc2hpbmc7XG4gICAgICByZXR1cm4gcmV0O1xuICAgIH1cbiAgICAvKiogKi9cblxuICB9LCB7XG4gICAga2V5OiBcInJ1bklzb2xhdGVkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJ1bklzb2xhdGVkKGZuKSB7XG4gICAgICBpZiAodGhpcy5faXNvbGF0ZWQgfHwgIXRoaXMuaXNJbml0aWFsaXplZCkgcmV0dXJuIGZuKHRoaXMpO1xuICAgICAgdGhpcy5faXNvbGF0ZWQgPSB0cnVlO1xuICAgICAgdmFyIHN0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICAgIHZhciByZXQgPSBmbih0aGlzKTtcbiAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICAgIGRlbGV0ZSB0aGlzLl9pc29sYXRlZDtcbiAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBQcmVwYXJlcyBzdHJpbmcgYmVmb3JlIG1hc2sgcHJvY2Vzc2luZ1xyXG4gICAgICBAcHJvdGVjdGVkXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZG9QcmVwYXJlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRvUHJlcGFyZShzdHIpIHtcbiAgICAgIHZhciBmbGFncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgICByZXR1cm4gdGhpcy5wcmVwYXJlID8gdGhpcy5wcmVwYXJlKHN0ciwgdGhpcywgZmxhZ3MpIDogc3RyO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgVmFsaWRhdGVzIGlmIHZhbHVlIGlzIGFjY2VwdGFibGVcclxuICAgICAgQHByb3RlY3RlZFxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRvVmFsaWRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZG9WYWxpZGF0ZShmbGFncykge1xuICAgICAgcmV0dXJuICghdGhpcy52YWxpZGF0ZSB8fCB0aGlzLnZhbGlkYXRlKHRoaXMudmFsdWUsIHRoaXMsIGZsYWdzKSkgJiYgKCF0aGlzLnBhcmVudCB8fCB0aGlzLnBhcmVudC5kb1ZhbGlkYXRlKGZsYWdzKSk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBEb2VzIGFkZGl0aW9uYWwgcHJvY2Vzc2luZyBpbiB0aGUgZW5kIG9mIGVkaXRpbmdcclxuICAgICAgQHByb3RlY3RlZFxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRvQ29tbWl0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRvQ29tbWl0KCkge1xuICAgICAgaWYgKHRoaXMuY29tbWl0KSB0aGlzLmNvbW1pdCh0aGlzLnZhbHVlLCB0aGlzKTtcbiAgICB9XG4gICAgLyoqICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkb0Zvcm1hdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkb0Zvcm1hdCh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0ID8gdGhpcy5mb3JtYXQodmFsdWUsIHRoaXMpIDogdmFsdWU7XG4gICAgfVxuICAgIC8qKiAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZG9QYXJzZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkb1BhcnNlKHN0cikge1xuICAgICAgcmV0dXJuIHRoaXMucGFyc2UgPyB0aGlzLnBhcnNlKHN0ciwgdGhpcykgOiBzdHI7XG4gICAgfVxuICAgIC8qKiAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic3BsaWNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIGluc2VydGVkLCByZW1vdmVEaXJlY3Rpb24pIHtcbiAgICAgIHZhciB0YWlsUG9zID0gc3RhcnQgKyBkZWxldGVDb3VudDtcbiAgICAgIHZhciB0YWlsID0gdGhpcy5leHRyYWN0VGFpbCh0YWlsUG9zKTtcbiAgICAgIHZhciBzdGFydENoYW5nZVBvcyA9IHRoaXMubmVhcmVzdElucHV0UG9zKHN0YXJ0LCByZW1vdmVEaXJlY3Rpb24pO1xuICAgICAgdmFyIGNoYW5nZURldGFpbHMgPSBuZXcgQ2hhbmdlRGV0YWlscyh7XG4gICAgICAgIHRhaWxTaGlmdDogc3RhcnRDaGFuZ2VQb3MgLSBzdGFydCAvLyBhZGp1c3QgdGFpbFNoaWZ0IGlmIHN0YXJ0IHdhcyBhbGlnbmVkXG5cbiAgICAgIH0pLmFnZ3JlZ2F0ZSh0aGlzLnJlbW92ZShzdGFydENoYW5nZVBvcykpLmFnZ3JlZ2F0ZSh0aGlzLmFwcGVuZChpbnNlcnRlZCwge1xuICAgICAgICBpbnB1dDogdHJ1ZVxuICAgICAgfSwgdGFpbCkpO1xuICAgICAgcmV0dXJuIGNoYW5nZURldGFpbHM7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1hc2tlZDtcbn0oKTtcbk1hc2tlZC5ERUZBVUxUUyA9IHtcbiAgZm9ybWF0OiBmdW5jdGlvbiBmb3JtYXQodikge1xuICAgIHJldHVybiB2O1xuICB9LFxuICBwYXJzZTogZnVuY3Rpb24gcGFyc2Uodikge1xuICAgIHJldHVybiB2O1xuICB9XG59O1xuSU1hc2suTWFza2VkID0gTWFza2VkO1xuXG5leHBvcnQgZGVmYXVsdCBNYXNrZWQ7XG4iLCJpbXBvcnQgeyBkIGFzIF9pbmhlcml0cywgZSBhcyBfY3JlYXRlU3VwZXIsIGEgYXMgX2NsYXNzQ2FsbENoZWNrLCBfIGFzIF9jcmVhdGVDbGFzcywgZiBhcyBfc2xpY2VkVG9BcnJheSwgZyBhcyBfZ2V0LCBoIGFzIF9nZXRQcm90b3R5cGVPZiwgaSBhcyBfc2V0IH0gZnJvbSAnLi4vX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycy02Y2NiMWY2NC5qcyc7XG5pbXBvcnQgTWFza2VkUGF0dGVybiBmcm9tICcuL3BhdHRlcm4uanMnO1xuaW1wb3J0IE1hc2tlZFJhbmdlIGZyb20gJy4vcmFuZ2UuanMnO1xuaW1wb3J0IElNYXNrIGZyb20gJy4uL2NvcmUvaG9sZGVyLmpzJztcbmltcG9ydCAnLi4vY29yZS91dGlscy5qcyc7XG5pbXBvcnQgJy4uL2NvcmUvY2hhbmdlLWRldGFpbHMuanMnO1xuaW1wb3J0ICcuL2Jhc2UuanMnO1xuaW1wb3J0ICcuLi9jb3JlL2NvbnRpbnVvdXMtdGFpbC1kZXRhaWxzLmpzJztcbmltcG9ydCAnLi9wYXR0ZXJuL2lucHV0LWRlZmluaXRpb24uanMnO1xuaW1wb3J0ICcuL2ZhY3RvcnkuanMnO1xuaW1wb3J0ICcuL3BhdHRlcm4vZml4ZWQtZGVmaW5pdGlvbi5qcyc7XG5pbXBvcnQgJy4vcGF0dGVybi9jaHVuay10YWlsLWRldGFpbHMuanMnO1xuaW1wb3J0ICcuL3JlZ2V4cC5qcyc7XG5cbi8qKiBEYXRlIG1hc2sgKi9cblxudmFyIE1hc2tlZERhdGUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9NYXNrZWRQYXR0ZXJuKSB7XG4gIF9pbmhlcml0cyhNYXNrZWREYXRlLCBfTWFza2VkUGF0dGVybik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihNYXNrZWREYXRlKTtcblxuICAvKiogUGF0dGVybiBtYXNrIGZvciBkYXRlIGFjY29yZGluZyB0byB7QGxpbmsgTWFza2VkRGF0ZSNmb3JtYXR9ICovXG5cbiAgLyoqIFN0YXJ0IGRhdGUgKi9cblxuICAvKiogRW5kIGRhdGUgKi9cblxuICAvKiogKi9cblxuICAvKipcclxuICAgIEBwYXJhbSB7T2JqZWN0fSBvcHRzXHJcbiAgKi9cbiAgZnVuY3Rpb24gTWFza2VkRGF0ZShvcHRzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1hc2tlZERhdGUpO1xuXG4gICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIE9iamVjdC5hc3NpZ24oe30sIE1hc2tlZERhdGUuREVGQVVMVFMsIG9wdHMpKTtcbiAgfVxuICAvKipcclxuICAgIEBvdmVycmlkZVxyXG4gICovXG5cblxuICBfY3JlYXRlQ2xhc3MoTWFza2VkRGF0ZSwgW3tcbiAgICBrZXk6IFwiX3VwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfdXBkYXRlKG9wdHMpIHtcbiAgICAgIGlmIChvcHRzLm1hc2sgPT09IERhdGUpIGRlbGV0ZSBvcHRzLm1hc2s7XG4gICAgICBpZiAob3B0cy5wYXR0ZXJuKSBvcHRzLm1hc2sgPSBvcHRzLnBhdHRlcm47XG4gICAgICB2YXIgYmxvY2tzID0gb3B0cy5ibG9ja3M7XG4gICAgICBvcHRzLmJsb2NrcyA9IE9iamVjdC5hc3NpZ24oe30sIE1hc2tlZERhdGUuR0VUX0RFRkFVTFRfQkxPQ0tTKCkpOyAvLyBhZGp1c3QgeWVhciBibG9ja1xuXG4gICAgICBpZiAob3B0cy5taW4pIG9wdHMuYmxvY2tzLlkuZnJvbSA9IG9wdHMubWluLmdldEZ1bGxZZWFyKCk7XG4gICAgICBpZiAob3B0cy5tYXgpIG9wdHMuYmxvY2tzLlkudG8gPSBvcHRzLm1heC5nZXRGdWxsWWVhcigpO1xuXG4gICAgICBpZiAob3B0cy5taW4gJiYgb3B0cy5tYXggJiYgb3B0cy5ibG9ja3MuWS5mcm9tID09PSBvcHRzLmJsb2Nrcy5ZLnRvKSB7XG4gICAgICAgIG9wdHMuYmxvY2tzLm0uZnJvbSA9IG9wdHMubWluLmdldE1vbnRoKCkgKyAxO1xuICAgICAgICBvcHRzLmJsb2Nrcy5tLnRvID0gb3B0cy5tYXguZ2V0TW9udGgoKSArIDE7XG5cbiAgICAgICAgaWYgKG9wdHMuYmxvY2tzLm0uZnJvbSA9PT0gb3B0cy5ibG9ja3MubS50bykge1xuICAgICAgICAgIG9wdHMuYmxvY2tzLmQuZnJvbSA9IG9wdHMubWluLmdldERhdGUoKTtcbiAgICAgICAgICBvcHRzLmJsb2Nrcy5kLnRvID0gb3B0cy5tYXguZ2V0RGF0ZSgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIE9iamVjdC5hc3NpZ24ob3B0cy5ibG9ja3MsIGJsb2Nrcyk7IC8vIGFkZCBhdXRvZml4XG5cbiAgICAgIE9iamVjdC5rZXlzKG9wdHMuYmxvY2tzKS5mb3JFYWNoKGZ1bmN0aW9uIChiaykge1xuICAgICAgICB2YXIgYiA9IG9wdHMuYmxvY2tzW2JrXTtcbiAgICAgICAgaWYgKCEoJ2F1dG9maXgnIGluIGIpKSBiLmF1dG9maXggPSBvcHRzLmF1dG9maXg7XG4gICAgICB9KTtcblxuICAgICAgX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRGF0ZS5wcm90b3R5cGUpLCBcIl91cGRhdGVcIiwgdGhpcykuY2FsbCh0aGlzLCBvcHRzKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRvVmFsaWRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZG9WYWxpZGF0ZSgpIHtcbiAgICAgIHZhciBfZ2V0MjtcblxuICAgICAgdmFyIGRhdGUgPSB0aGlzLmRhdGU7XG5cbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gKF9nZXQyID0gX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRGF0ZS5wcm90b3R5cGUpLCBcImRvVmFsaWRhdGVcIiwgdGhpcykpLmNhbGwuYXBwbHkoX2dldDIsIFt0aGlzXS5jb25jYXQoYXJncykpICYmICghdGhpcy5pc0NvbXBsZXRlIHx8IHRoaXMuaXNEYXRlRXhpc3QodGhpcy52YWx1ZSkgJiYgZGF0ZSAhPSBudWxsICYmICh0aGlzLm1pbiA9PSBudWxsIHx8IHRoaXMubWluIDw9IGRhdGUpICYmICh0aGlzLm1heCA9PSBudWxsIHx8IGRhdGUgPD0gdGhpcy5tYXgpKTtcbiAgICB9XG4gICAgLyoqIENoZWNrcyBpZiBkYXRlIGlzIGV4aXN0cyAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiaXNEYXRlRXhpc3RcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNEYXRlRXhpc3Qoc3RyKSB7XG4gICAgICByZXR1cm4gdGhpcy5mb3JtYXQodGhpcy5wYXJzZShzdHIsIHRoaXMpLCB0aGlzKS5pbmRleE9mKHN0cikgPj0gMDtcbiAgICB9XG4gICAgLyoqIFBhcnNlZCBEYXRlICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkYXRlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy50eXBlZFZhbHVlO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQoZGF0ZSkge1xuICAgICAgdGhpcy50eXBlZFZhbHVlID0gZGF0ZTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInR5cGVkVmFsdWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzQ29tcGxldGUgPyBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWREYXRlLnByb3RvdHlwZSksIFwidHlwZWRWYWx1ZVwiLCB0aGlzKSA6IG51bGw7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgX3NldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRGF0ZS5wcm90b3R5cGUpLCBcInR5cGVkVmFsdWVcIiwgdmFsdWUsIHRoaXMsIHRydWUpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNYXNrZWREYXRlO1xufShNYXNrZWRQYXR0ZXJuKTtcbk1hc2tlZERhdGUuREVGQVVMVFMgPSB7XG4gIHBhdHRlcm46ICdkey59YG17Ln1gWScsXG4gIGZvcm1hdDogZnVuY3Rpb24gZm9ybWF0KGRhdGUpIHtcbiAgICB2YXIgZGF5ID0gU3RyaW5nKGRhdGUuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgIHZhciBtb250aCA9IFN0cmluZyhkYXRlLmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgIHZhciB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIHJldHVybiBbZGF5LCBtb250aCwgeWVhcl0uam9pbignLicpO1xuICB9LFxuICBwYXJzZTogZnVuY3Rpb24gcGFyc2Uoc3RyKSB7XG4gICAgdmFyIF9zdHIkc3BsaXQgPSBzdHIuc3BsaXQoJy4nKSxcbiAgICAgICAgX3N0ciRzcGxpdDIgPSBfc2xpY2VkVG9BcnJheShfc3RyJHNwbGl0LCAzKSxcbiAgICAgICAgZGF5ID0gX3N0ciRzcGxpdDJbMF0sXG4gICAgICAgIG1vbnRoID0gX3N0ciRzcGxpdDJbMV0sXG4gICAgICAgIHllYXIgPSBfc3RyJHNwbGl0MlsyXTtcblxuICAgIHJldHVybiBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIGRheSk7XG4gIH1cbn07XG5cbk1hc2tlZERhdGUuR0VUX0RFRkFVTFRfQkxPQ0tTID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4ge1xuICAgIGQ6IHtcbiAgICAgIG1hc2s6IE1hc2tlZFJhbmdlLFxuICAgICAgZnJvbTogMSxcbiAgICAgIHRvOiAzMSxcbiAgICAgIG1heExlbmd0aDogMlxuICAgIH0sXG4gICAgbToge1xuICAgICAgbWFzazogTWFza2VkUmFuZ2UsXG4gICAgICBmcm9tOiAxLFxuICAgICAgdG86IDEyLFxuICAgICAgbWF4TGVuZ3RoOiAyXG4gICAgfSxcbiAgICBZOiB7XG4gICAgICBtYXNrOiBNYXNrZWRSYW5nZSxcbiAgICAgIGZyb206IDE5MDAsXG4gICAgICB0bzogOTk5OVxuICAgIH1cbiAgfTtcbn07XG5cbklNYXNrLk1hc2tlZERhdGUgPSBNYXNrZWREYXRlO1xuXG5leHBvcnQgZGVmYXVsdCBNYXNrZWREYXRlO1xuIiwiaW1wb3J0IHsgZCBhcyBfaW5oZXJpdHMsIGUgYXMgX2NyZWF0ZVN1cGVyLCBhIGFzIF9jbGFzc0NhbGxDaGVjaywgXyBhcyBfY3JlYXRlQ2xhc3MsIGcgYXMgX2dldCwgaCBhcyBfZ2V0UHJvdG90eXBlT2YsIGkgYXMgX3NldCwgYiBhcyBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgfSBmcm9tICcuLi9fcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzLTZjY2IxZjY0LmpzJztcbmltcG9ydCBDaGFuZ2VEZXRhaWxzIGZyb20gJy4uL2NvcmUvY2hhbmdlLWRldGFpbHMuanMnO1xuaW1wb3J0IGNyZWF0ZU1hc2sgZnJvbSAnLi9mYWN0b3J5LmpzJztcbmltcG9ydCBNYXNrZWQgZnJvbSAnLi9iYXNlLmpzJztcbmltcG9ydCBJTWFzayBmcm9tICcuLi9jb3JlL2hvbGRlci5qcyc7XG5pbXBvcnQgJy4uL2NvcmUvdXRpbHMuanMnO1xuaW1wb3J0ICcuLi9jb3JlL2NvbnRpbnVvdXMtdGFpbC1kZXRhaWxzLmpzJztcblxuLyoqIER5bmFtaWMgbWFzayBmb3IgY2hvb3NpbmcgYXByb3ByaWF0ZSBtYXNrIGluIHJ1bi10aW1lICovXG52YXIgTWFza2VkRHluYW1pYyA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX01hc2tlZCkge1xuICBfaW5oZXJpdHMoTWFza2VkRHluYW1pYywgX01hc2tlZCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihNYXNrZWREeW5hbWljKTtcblxuICAvKiogQ3VycmVudGx5IGNob3NlbiBtYXNrICovXG5cbiAgLyoqIENvbXBsaWxlZCB7QGxpbmsgTWFza2VkfSBvcHRpb25zICovXG5cbiAgLyoqIENob29zZXMge0BsaW5rIE1hc2tlZH0gZGVwZW5kaW5nIG9uIGlucHV0IHZhbHVlICovXG5cbiAgLyoqXHJcbiAgICBAcGFyYW0ge09iamVjdH0gb3B0c1xyXG4gICovXG4gIGZ1bmN0aW9uIE1hc2tlZER5bmFtaWMob3B0cykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYXNrZWREeW5hbWljKTtcblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgT2JqZWN0LmFzc2lnbih7fSwgTWFza2VkRHluYW1pYy5ERUZBVUxUUywgb3B0cykpO1xuICAgIF90aGlzLmN1cnJlbnRNYXNrID0gbnVsbDtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cbiAgLyoqXHJcbiAgICBAb3ZlcnJpZGVcclxuICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKE1hc2tlZER5bmFtaWMsIFt7XG4gICAga2V5OiBcIl91cGRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3VwZGF0ZShvcHRzKSB7XG4gICAgICBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWREeW5hbWljLnByb3RvdHlwZSksIFwiX3VwZGF0ZVwiLCB0aGlzKS5jYWxsKHRoaXMsIG9wdHMpO1xuXG4gICAgICBpZiAoJ21hc2snIGluIG9wdHMpIHtcbiAgICAgICAgLy8gbWFzayBjb3VsZCBiZSB0b3RhbGx5IGR5bmFtaWMgd2l0aCBvbmx5IGBkaXNwYXRjaGAgb3B0aW9uXG4gICAgICAgIHRoaXMuY29tcGlsZWRNYXNrcyA9IEFycmF5LmlzQXJyYXkob3B0cy5tYXNrKSA/IG9wdHMubWFzay5tYXAoZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgICByZXR1cm4gY3JlYXRlTWFzayhtKTtcbiAgICAgICAgfSkgOiBbXTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9hcHBlbmRDaGFyUmF3XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9hcHBlbmRDaGFyUmF3KGNoKSB7XG4gICAgICB2YXIgZmxhZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gICAgICB2YXIgZGV0YWlscyA9IHRoaXMuX2FwcGx5RGlzcGF0Y2goY2gsIGZsYWdzKTtcblxuICAgICAgaWYgKHRoaXMuY3VycmVudE1hc2spIHtcbiAgICAgICAgZGV0YWlscy5hZ2dyZWdhdGUodGhpcy5jdXJyZW50TWFzay5fYXBwZW5kQ2hhcihjaCwgZmxhZ3MpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRldGFpbHM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9hcHBseURpc3BhdGNoXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9hcHBseURpc3BhdGNoKCkge1xuICAgICAgdmFyIGFwcGVuZGVkID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAnJztcbiAgICAgIHZhciBmbGFncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgICB2YXIgcHJldlZhbHVlQmVmb3JlVGFpbCA9IGZsYWdzLnRhaWwgJiYgZmxhZ3MuX2JlZm9yZVRhaWxTdGF0ZSAhPSBudWxsID8gZmxhZ3MuX2JlZm9yZVRhaWxTdGF0ZS5fdmFsdWUgOiB0aGlzLnZhbHVlO1xuICAgICAgdmFyIGlucHV0VmFsdWUgPSB0aGlzLnJhd0lucHV0VmFsdWU7XG4gICAgICB2YXIgaW5zZXJ0VmFsdWUgPSBmbGFncy50YWlsICYmIGZsYWdzLl9iZWZvcmVUYWlsU3RhdGUgIT0gbnVsbCA/IC8vICRGbG93Rml4TWUgLSB0aXJlZCB0byBmaWdodCB3aXRoIHR5cGUgc3lzdGVtXG4gICAgICBmbGFncy5fYmVmb3JlVGFpbFN0YXRlLl9yYXdJbnB1dFZhbHVlIDogaW5wdXRWYWx1ZTtcbiAgICAgIHZhciB0YWlsVmFsdWUgPSBpbnB1dFZhbHVlLnNsaWNlKGluc2VydFZhbHVlLmxlbmd0aCk7XG4gICAgICB2YXIgcHJldk1hc2sgPSB0aGlzLmN1cnJlbnRNYXNrO1xuICAgICAgdmFyIGRldGFpbHMgPSBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICAgICAgdmFyIHByZXZNYXNrU3RhdGUgPSBwcmV2TWFzayAmJiBwcmV2TWFzay5zdGF0ZTsgLy8gY2xvbmUgZmxhZ3MgdG8gcHJldmVudCBvdmVyd3JpdGluZyBgX2JlZm9yZVRhaWxTdGF0ZWBcblxuICAgICAgdGhpcy5jdXJyZW50TWFzayA9IHRoaXMuZG9EaXNwYXRjaChhcHBlbmRlZCwgT2JqZWN0LmFzc2lnbih7fSwgZmxhZ3MpKTsgLy8gcmVzdG9yZSBzdGF0ZSBhZnRlciBkaXNwYXRjaFxuXG4gICAgICBpZiAodGhpcy5jdXJyZW50TWFzaykge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50TWFzayAhPT0gcHJldk1hc2spIHtcbiAgICAgICAgICAvLyBpZiBtYXNrIGNoYW5nZWQgcmVhcHBseSBpbnB1dFxuICAgICAgICAgIHRoaXMuY3VycmVudE1hc2sucmVzZXQoKTtcblxuICAgICAgICAgIGlmIChpbnNlcnRWYWx1ZSkge1xuICAgICAgICAgICAgLy8gJEZsb3dGaXhNZSAtIGl0J3Mgb2ssIHdlIGRvbid0IGNoYW5nZSBjdXJyZW50IG1hc2sgYWJvdmVcbiAgICAgICAgICAgIHZhciBkID0gdGhpcy5jdXJyZW50TWFzay5hcHBlbmQoaW5zZXJ0VmFsdWUsIHtcbiAgICAgICAgICAgICAgcmF3OiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGRldGFpbHMudGFpbFNoaWZ0ID0gZC5pbnNlcnRlZC5sZW5ndGggLSBwcmV2VmFsdWVCZWZvcmVUYWlsLmxlbmd0aDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGFpbFZhbHVlKSB7XG4gICAgICAgICAgICAvLyAkRmxvd0ZpeE1lIC0gaXQncyBvaywgd2UgZG9uJ3QgY2hhbmdlIGN1cnJlbnQgbWFzayBhYm92ZVxuICAgICAgICAgICAgZGV0YWlscy50YWlsU2hpZnQgKz0gdGhpcy5jdXJyZW50TWFzay5hcHBlbmQodGFpbFZhbHVlLCB7XG4gICAgICAgICAgICAgIHJhdzogdHJ1ZSxcbiAgICAgICAgICAgICAgdGFpbDogdHJ1ZVxuICAgICAgICAgICAgfSkudGFpbFNoaWZ0O1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBEaXNwYXRjaCBjYW4gZG8gc29tZXRoaW5nIGJhZCB3aXRoIHN0YXRlLCBzb1xuICAgICAgICAgIC8vIHJlc3RvcmUgcHJldiBtYXNrIHN0YXRlXG4gICAgICAgICAgdGhpcy5jdXJyZW50TWFzay5zdGF0ZSA9IHByZXZNYXNrU3RhdGU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRldGFpbHM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9hcHBlbmRQbGFjZWhvbGRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfYXBwZW5kUGxhY2Vob2xkZXIoKSB7XG4gICAgICB2YXIgZGV0YWlscyA9IHRoaXMuX2FwcGx5RGlzcGF0Y2guYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgICAgaWYgKHRoaXMuY3VycmVudE1hc2spIHtcbiAgICAgICAgZGV0YWlscy5hZ2dyZWdhdGUodGhpcy5jdXJyZW50TWFzay5fYXBwZW5kUGxhY2Vob2xkZXIoKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZXRhaWxzO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZG9EaXNwYXRjaFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkb0Rpc3BhdGNoKGFwcGVuZGVkKSB7XG4gICAgICB2YXIgZmxhZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgICAgcmV0dXJuIHRoaXMuZGlzcGF0Y2goYXBwZW5kZWQsIHRoaXMsIGZsYWdzKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRvVmFsaWRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZG9WYWxpZGF0ZSgpIHtcbiAgICAgIHZhciBfZ2V0MiwgX3RoaXMkY3VycmVudE1hc2s7XG5cbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gKF9nZXQyID0gX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRHluYW1pYy5wcm90b3R5cGUpLCBcImRvVmFsaWRhdGVcIiwgdGhpcykpLmNhbGwuYXBwbHkoX2dldDIsIFt0aGlzXS5jb25jYXQoYXJncykpICYmICghdGhpcy5jdXJyZW50TWFzayB8fCAoX3RoaXMkY3VycmVudE1hc2sgPSB0aGlzLmN1cnJlbnRNYXNrKS5kb1ZhbGlkYXRlLmFwcGx5KF90aGlzJGN1cnJlbnRNYXNrLCBhcmdzKSk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJyZXNldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXNldCgpIHtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRNYXNrKSB0aGlzLmN1cnJlbnRNYXNrLnJlc2V0KCk7XG4gICAgICB0aGlzLmNvbXBpbGVkTWFza3MuZm9yRWFjaChmdW5jdGlvbiAobSkge1xuICAgICAgICByZXR1cm4gbS5yZXNldCgpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ2YWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuY3VycmVudE1hc2sgPyB0aGlzLmN1cnJlbnRNYXNrLnZhbHVlIDogJyc7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgX3NldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRHluYW1pYy5wcm90b3R5cGUpLCBcInZhbHVlXCIsIHZhbHVlLCB0aGlzLCB0cnVlKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInVubWFza2VkVmFsdWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRNYXNrID8gdGhpcy5jdXJyZW50TWFzay51bm1hc2tlZFZhbHVlIDogJyc7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh1bm1hc2tlZFZhbHVlKSB7XG4gICAgICBfc2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWREeW5hbWljLnByb3RvdHlwZSksIFwidW5tYXNrZWRWYWx1ZVwiLCB1bm1hc2tlZFZhbHVlLCB0aGlzLCB0cnVlKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInR5cGVkVmFsdWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRNYXNrID8gdGhpcy5jdXJyZW50TWFzay50eXBlZFZhbHVlIDogJyc7XG4gICAgfSAvLyBwcm9iYWJseSB0eXBlZFZhbHVlIHNob3VsZCBub3QgYmUgdXNlZCB3aXRoIGR5bmFtaWNcbiAgICAsXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIHZhciB1bm1hc2tlZFZhbHVlID0gU3RyaW5nKHZhbHVlKTsgLy8gZG91YmxlIGNoZWNrIGl0XG5cbiAgICAgIGlmICh0aGlzLmN1cnJlbnRNYXNrKSB7XG4gICAgICAgIHRoaXMuY3VycmVudE1hc2sudHlwZWRWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB1bm1hc2tlZFZhbHVlID0gdGhpcy5jdXJyZW50TWFzay51bm1hc2tlZFZhbHVlO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnVubWFza2VkVmFsdWUgPSB1bm1hc2tlZFZhbHVlO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiaXNDb21wbGV0ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuICEhdGhpcy5jdXJyZW50TWFzayAmJiB0aGlzLmN1cnJlbnRNYXNrLmlzQ29tcGxldGU7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJyZW1vdmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgdmFyIGRldGFpbHMgPSBuZXcgQ2hhbmdlRGV0YWlscygpO1xuXG4gICAgICBpZiAodGhpcy5jdXJyZW50TWFzaykge1xuICAgICAgICB2YXIgX3RoaXMkY3VycmVudE1hc2syO1xuXG4gICAgICAgIGRldGFpbHMuYWdncmVnYXRlKChfdGhpcyRjdXJyZW50TWFzazIgPSB0aGlzLmN1cnJlbnRNYXNrKS5yZW1vdmUuYXBwbHkoX3RoaXMkY3VycmVudE1hc2syLCBhcmd1bWVudHMpKSAvLyB1cGRhdGUgd2l0aCBkaXNwYXRjaFxuICAgICAgICAuYWdncmVnYXRlKHRoaXMuX2FwcGx5RGlzcGF0Y2goKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZXRhaWxzO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic3RhdGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWREeW5hbWljLnByb3RvdHlwZSksIFwic3RhdGVcIiwgdGhpcyksIHtcbiAgICAgICAgX3Jhd0lucHV0VmFsdWU6IHRoaXMucmF3SW5wdXRWYWx1ZSxcbiAgICAgICAgY29tcGlsZWRNYXNrczogdGhpcy5jb21waWxlZE1hc2tzLm1hcChmdW5jdGlvbiAobSkge1xuICAgICAgICAgIHJldHVybiBtLnN0YXRlO1xuICAgICAgICB9KSxcbiAgICAgICAgY3VycmVudE1hc2tSZWY6IHRoaXMuY3VycmVudE1hc2ssXG4gICAgICAgIGN1cnJlbnRNYXNrOiB0aGlzLmN1cnJlbnRNYXNrICYmIHRoaXMuY3VycmVudE1hc2suc3RhdGVcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQoc3RhdGUpIHtcbiAgICAgIHZhciBjb21waWxlZE1hc2tzID0gc3RhdGUuY29tcGlsZWRNYXNrcyxcbiAgICAgICAgICBjdXJyZW50TWFza1JlZiA9IHN0YXRlLmN1cnJlbnRNYXNrUmVmLFxuICAgICAgICAgIGN1cnJlbnRNYXNrID0gc3RhdGUuY3VycmVudE1hc2ssXG4gICAgICAgICAgbWFza2VkU3RhdGUgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc3RhdGUsIFtcImNvbXBpbGVkTWFza3NcIiwgXCJjdXJyZW50TWFza1JlZlwiLCBcImN1cnJlbnRNYXNrXCJdKTtcblxuICAgICAgdGhpcy5jb21waWxlZE1hc2tzLmZvckVhY2goZnVuY3Rpb24gKG0sIG1pKSB7XG4gICAgICAgIHJldHVybiBtLnN0YXRlID0gY29tcGlsZWRNYXNrc1ttaV07XG4gICAgICB9KTtcblxuICAgICAgaWYgKGN1cnJlbnRNYXNrUmVmICE9IG51bGwpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50TWFzayA9IGN1cnJlbnRNYXNrUmVmO1xuICAgICAgICB0aGlzLmN1cnJlbnRNYXNrLnN0YXRlID0gY3VycmVudE1hc2s7XG4gICAgICB9XG5cbiAgICAgIF9zZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZER5bmFtaWMucHJvdG90eXBlKSwgXCJzdGF0ZVwiLCBtYXNrZWRTdGF0ZSwgdGhpcywgdHJ1ZSk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJleHRyYWN0SW5wdXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZXh0cmFjdElucHV0KCkge1xuICAgICAgdmFyIF90aGlzJGN1cnJlbnRNYXNrMztcblxuICAgICAgcmV0dXJuIHRoaXMuY3VycmVudE1hc2sgPyAoX3RoaXMkY3VycmVudE1hc2szID0gdGhpcy5jdXJyZW50TWFzaykuZXh0cmFjdElucHV0LmFwcGx5KF90aGlzJGN1cnJlbnRNYXNrMywgYXJndW1lbnRzKSA6ICcnO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZXh0cmFjdFRhaWxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZXh0cmFjdFRhaWwoKSB7XG4gICAgICB2YXIgX3RoaXMkY3VycmVudE1hc2s0LCBfZ2V0MztcblxuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY3VycmVudE1hc2sgPyAoX3RoaXMkY3VycmVudE1hc2s0ID0gdGhpcy5jdXJyZW50TWFzaykuZXh0cmFjdFRhaWwuYXBwbHkoX3RoaXMkY3VycmVudE1hc2s0LCBhcmdzKSA6IChfZ2V0MyA9IF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZER5bmFtaWMucHJvdG90eXBlKSwgXCJleHRyYWN0VGFpbFwiLCB0aGlzKSkuY2FsbC5hcHBseShfZ2V0MywgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkb0NvbW1pdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkb0NvbW1pdCgpIHtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRNYXNrKSB0aGlzLmN1cnJlbnRNYXNrLmRvQ29tbWl0KCk7XG5cbiAgICAgIF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZER5bmFtaWMucHJvdG90eXBlKSwgXCJkb0NvbW1pdFwiLCB0aGlzKS5jYWxsKHRoaXMpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibmVhcmVzdElucHV0UG9zXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG5lYXJlc3RJbnB1dFBvcygpIHtcbiAgICAgIHZhciBfdGhpcyRjdXJyZW50TWFzazUsIF9nZXQ0O1xuXG4gICAgICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjMpLCBfa2V5MyA9IDA7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcbiAgICAgICAgYXJnc1tfa2V5M10gPSBhcmd1bWVudHNbX2tleTNdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jdXJyZW50TWFzayA/IChfdGhpcyRjdXJyZW50TWFzazUgPSB0aGlzLmN1cnJlbnRNYXNrKS5uZWFyZXN0SW5wdXRQb3MuYXBwbHkoX3RoaXMkY3VycmVudE1hc2s1LCBhcmdzKSA6IChfZ2V0NCA9IF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZER5bmFtaWMucHJvdG90eXBlKSwgXCJuZWFyZXN0SW5wdXRQb3NcIiwgdGhpcykpLmNhbGwuYXBwbHkoX2dldDQsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvdmVyd3JpdGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRNYXNrID8gdGhpcy5jdXJyZW50TWFzay5vdmVyd3JpdGUgOiBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWREeW5hbWljLnByb3RvdHlwZSksIFwib3ZlcndyaXRlXCIsIHRoaXMpO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQob3ZlcndyaXRlKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1wib3ZlcndyaXRlXCIgb3B0aW9uIGlzIG5vdCBhdmFpbGFibGUgaW4gZHluYW1pYyBtYXNrLCB1c2UgdGhpcyBvcHRpb24gaW4gc2libGluZ3MnKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTWFza2VkRHluYW1pYztcbn0oTWFza2VkKTtcbk1hc2tlZER5bmFtaWMuREVGQVVMVFMgPSB7XG4gIGRpc3BhdGNoOiBmdW5jdGlvbiBkaXNwYXRjaChhcHBlbmRlZCwgbWFza2VkLCBmbGFncykge1xuICAgIGlmICghbWFza2VkLmNvbXBpbGVkTWFza3MubGVuZ3RoKSByZXR1cm47XG4gICAgdmFyIGlucHV0VmFsdWUgPSBtYXNrZWQucmF3SW5wdXRWYWx1ZTsgLy8gc2ltdWxhdGUgaW5wdXRcblxuICAgIHZhciBpbnB1dHMgPSBtYXNrZWQuY29tcGlsZWRNYXNrcy5tYXAoZnVuY3Rpb24gKG0sIGluZGV4KSB7XG4gICAgICBtLnJlc2V0KCk7XG4gICAgICBtLmFwcGVuZChpbnB1dFZhbHVlLCB7XG4gICAgICAgIHJhdzogdHJ1ZVxuICAgICAgfSk7XG4gICAgICBtLmFwcGVuZChhcHBlbmRlZCwgZmxhZ3MpO1xuICAgICAgdmFyIHdlaWdodCA9IG0ucmF3SW5wdXRWYWx1ZS5sZW5ndGg7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB3ZWlnaHQ6IHdlaWdodCxcbiAgICAgICAgaW5kZXg6IGluZGV4XG4gICAgICB9O1xuICAgIH0pOyAvLyBwb3AgbWFza3Mgd2l0aCBsb25nZXIgdmFsdWVzIGZpcnN0XG5cbiAgICBpbnB1dHMuc29ydChmdW5jdGlvbiAoaTEsIGkyKSB7XG4gICAgICByZXR1cm4gaTIud2VpZ2h0IC0gaTEud2VpZ2h0O1xuICAgIH0pO1xuICAgIHJldHVybiBtYXNrZWQuY29tcGlsZWRNYXNrc1tpbnB1dHNbMF0uaW5kZXhdO1xuICB9XG59O1xuSU1hc2suTWFza2VkRHluYW1pYyA9IE1hc2tlZER5bmFtaWM7XG5cbmV4cG9ydCBkZWZhdWx0IE1hc2tlZER5bmFtaWM7XG4iLCJpbXBvcnQgeyBkIGFzIF9pbmhlcml0cywgZSBhcyBfY3JlYXRlU3VwZXIsIGEgYXMgX2NsYXNzQ2FsbENoZWNrLCBfIGFzIF9jcmVhdGVDbGFzcywgZyBhcyBfZ2V0LCBoIGFzIF9nZXRQcm90b3R5cGVPZiB9IGZyb20gJy4uL19yb2xsdXBQbHVnaW5CYWJlbEhlbHBlcnMtNmNjYjFmNjQuanMnO1xuaW1wb3J0IE1hc2tlZFBhdHRlcm4gZnJvbSAnLi9wYXR0ZXJuLmpzJztcbmltcG9ydCBJTWFzayBmcm9tICcuLi9jb3JlL2hvbGRlci5qcyc7XG5pbXBvcnQgJy4uL2NvcmUvdXRpbHMuanMnO1xuaW1wb3J0ICcuLi9jb3JlL2NoYW5nZS1kZXRhaWxzLmpzJztcbmltcG9ydCAnLi9iYXNlLmpzJztcbmltcG9ydCAnLi4vY29yZS9jb250aW51b3VzLXRhaWwtZGV0YWlscy5qcyc7XG5pbXBvcnQgJy4vcGF0dGVybi9pbnB1dC1kZWZpbml0aW9uLmpzJztcbmltcG9ydCAnLi9mYWN0b3J5LmpzJztcbmltcG9ydCAnLi9wYXR0ZXJuL2ZpeGVkLWRlZmluaXRpb24uanMnO1xuaW1wb3J0ICcuL3BhdHRlcm4vY2h1bmstdGFpbC1kZXRhaWxzLmpzJztcbmltcG9ydCAnLi9yZWdleHAuanMnO1xuXG4vKiogUGF0dGVybiB3aGljaCB2YWxpZGF0ZXMgZW51bSB2YWx1ZXMgKi9cblxudmFyIE1hc2tlZEVudW0gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9NYXNrZWRQYXR0ZXJuKSB7XG4gIF9pbmhlcml0cyhNYXNrZWRFbnVtLCBfTWFza2VkUGF0dGVybik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihNYXNrZWRFbnVtKTtcblxuICBmdW5jdGlvbiBNYXNrZWRFbnVtKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYXNrZWRFbnVtKTtcblxuICAgIHJldHVybiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhNYXNrZWRFbnVtLCBbe1xuICAgIGtleTogXCJfdXBkYXRlXCIsXG4gICAgdmFsdWU6XG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgICBAcGFyYW0ge09iamVjdH0gb3B0c1xyXG4gICAgKi9cbiAgICBmdW5jdGlvbiBfdXBkYXRlKG9wdHMpIHtcbiAgICAgIC8vIFRPRE8gdHlwZVxuICAgICAgaWYgKG9wdHMuZW51bSkgb3B0cy5tYXNrID0gJyonLnJlcGVhdChvcHRzLmVudW1bMF0ubGVuZ3RoKTtcblxuICAgICAgX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRW51bS5wcm90b3R5cGUpLCBcIl91cGRhdGVcIiwgdGhpcykuY2FsbCh0aGlzLCBvcHRzKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRvVmFsaWRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZG9WYWxpZGF0ZSgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXMsXG4gICAgICAgICAgX2dldDI7XG5cbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5lbnVtLnNvbWUoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGUuaW5kZXhPZihfdGhpcy51bm1hc2tlZFZhbHVlKSA+PSAwO1xuICAgICAgfSkgJiYgKF9nZXQyID0gX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRW51bS5wcm90b3R5cGUpLCBcImRvVmFsaWRhdGVcIiwgdGhpcykpLmNhbGwuYXBwbHkoX2dldDIsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNYXNrZWRFbnVtO1xufShNYXNrZWRQYXR0ZXJuKTtcbklNYXNrLk1hc2tlZEVudW0gPSBNYXNrZWRFbnVtO1xuXG5leHBvcnQgZGVmYXVsdCBNYXNrZWRFbnVtO1xuIiwiaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tICcuLi9jb3JlL3V0aWxzLmpzJztcbmltcG9ydCBJTWFzayBmcm9tICcuLi9jb3JlL2hvbGRlci5qcyc7XG5pbXBvcnQgJy4uL19yb2xsdXBQbHVnaW5CYWJlbEhlbHBlcnMtNmNjYjFmNjQuanMnO1xuXG4vKiogR2V0IE1hc2tlZCBjbGFzcyBieSBtYXNrIHR5cGUgKi9cblxuZnVuY3Rpb24gbWFza2VkQ2xhc3MobWFzaykge1xuICBpZiAobWFzayA9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdtYXNrIHByb3BlcnR5IHNob3VsZCBiZSBkZWZpbmVkJyk7XG4gIH0gLy8gJEZsb3dGaXhNZVxuXG5cbiAgaWYgKG1hc2sgaW5zdGFuY2VvZiBSZWdFeHApIHJldHVybiBJTWFzay5NYXNrZWRSZWdFeHA7IC8vICRGbG93Rml4TWVcblxuICBpZiAoaXNTdHJpbmcobWFzaykpIHJldHVybiBJTWFzay5NYXNrZWRQYXR0ZXJuOyAvLyAkRmxvd0ZpeE1lXG5cbiAgaWYgKG1hc2sgaW5zdGFuY2VvZiBEYXRlIHx8IG1hc2sgPT09IERhdGUpIHJldHVybiBJTWFzay5NYXNrZWREYXRlOyAvLyAkRmxvd0ZpeE1lXG5cbiAgaWYgKG1hc2sgaW5zdGFuY2VvZiBOdW1iZXIgfHwgdHlwZW9mIG1hc2sgPT09ICdudW1iZXInIHx8IG1hc2sgPT09IE51bWJlcikgcmV0dXJuIElNYXNrLk1hc2tlZE51bWJlcjsgLy8gJEZsb3dGaXhNZVxuXG4gIGlmIChBcnJheS5pc0FycmF5KG1hc2spIHx8IG1hc2sgPT09IEFycmF5KSByZXR1cm4gSU1hc2suTWFza2VkRHluYW1pYzsgLy8gJEZsb3dGaXhNZVxuXG4gIGlmIChJTWFzay5NYXNrZWQgJiYgbWFzay5wcm90b3R5cGUgaW5zdGFuY2VvZiBJTWFzay5NYXNrZWQpIHJldHVybiBtYXNrOyAvLyAkRmxvd0ZpeE1lXG5cbiAgaWYgKG1hc2sgaW5zdGFuY2VvZiBGdW5jdGlvbikgcmV0dXJuIElNYXNrLk1hc2tlZEZ1bmN0aW9uOyAvLyAkRmxvd0ZpeE1lXG5cbiAgaWYgKG1hc2sgaW5zdGFuY2VvZiBJTWFzay5NYXNrZWQpIHJldHVybiBtYXNrLmNvbnN0cnVjdG9yO1xuICBjb25zb2xlLndhcm4oJ01hc2sgbm90IGZvdW5kIGZvciBtYXNrJywgbWFzayk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAvLyAkRmxvd0ZpeE1lXG5cbiAgcmV0dXJuIElNYXNrLk1hc2tlZDtcbn1cbi8qKiBDcmVhdGVzIG5ldyB7QGxpbmsgTWFza2VkfSBkZXBlbmRpbmcgb24gbWFzayB0eXBlICovXG5cbmZ1bmN0aW9uIGNyZWF0ZU1hc2sob3B0cykge1xuICAvLyAkRmxvd0ZpeE1lXG4gIGlmIChJTWFzay5NYXNrZWQgJiYgb3B0cyBpbnN0YW5jZW9mIElNYXNrLk1hc2tlZCkgcmV0dXJuIG9wdHM7XG4gIG9wdHMgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRzKTtcbiAgdmFyIG1hc2sgPSBvcHRzLm1hc2s7IC8vICRGbG93Rml4TWVcblxuICBpZiAoSU1hc2suTWFza2VkICYmIG1hc2sgaW5zdGFuY2VvZiBJTWFzay5NYXNrZWQpIHJldHVybiBtYXNrO1xuICB2YXIgTWFza2VkQ2xhc3MgPSBtYXNrZWRDbGFzcyhtYXNrKTtcbiAgaWYgKCFNYXNrZWRDbGFzcykgdGhyb3cgbmV3IEVycm9yKCdNYXNrZWQgY2xhc3MgaXMgbm90IGZvdW5kIGZvciBwcm92aWRlZCBtYXNrLCBhcHByb3ByaWF0ZSBtb2R1bGUgbmVlZHMgdG8gYmUgaW1wb3J0IG1hbnVhbGx5IGJlZm9yZSBjcmVhdGluZyBtYXNrLicpO1xuICByZXR1cm4gbmV3IE1hc2tlZENsYXNzKG9wdHMpO1xufVxuSU1hc2suY3JlYXRlTWFzayA9IGNyZWF0ZU1hc2s7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1hc2s7XG5leHBvcnQgeyBtYXNrZWRDbGFzcyB9O1xuIiwiaW1wb3J0IHsgZCBhcyBfaW5oZXJpdHMsIGUgYXMgX2NyZWF0ZVN1cGVyLCBhIGFzIF9jbGFzc0NhbGxDaGVjaywgXyBhcyBfY3JlYXRlQ2xhc3MsIGcgYXMgX2dldCwgaCBhcyBfZ2V0UHJvdG90eXBlT2YgfSBmcm9tICcuLi9fcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzLTZjY2IxZjY0LmpzJztcbmltcG9ydCBNYXNrZWQgZnJvbSAnLi9iYXNlLmpzJztcbmltcG9ydCBJTWFzayBmcm9tICcuLi9jb3JlL2hvbGRlci5qcyc7XG5pbXBvcnQgJy4uL2NvcmUvY2hhbmdlLWRldGFpbHMuanMnO1xuaW1wb3J0ICcuLi9jb3JlL2NvbnRpbnVvdXMtdGFpbC1kZXRhaWxzLmpzJztcbmltcG9ydCAnLi4vY29yZS91dGlscy5qcyc7XG5cbi8qKiBNYXNraW5nIGJ5IGN1c3RvbSBGdW5jdGlvbiAqL1xuXG52YXIgTWFza2VkRnVuY3Rpb24gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9NYXNrZWQpIHtcbiAgX2luaGVyaXRzKE1hc2tlZEZ1bmN0aW9uLCBfTWFza2VkKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKE1hc2tlZEZ1bmN0aW9uKTtcblxuICBmdW5jdGlvbiBNYXNrZWRGdW5jdGlvbigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWFza2VkRnVuY3Rpb24pO1xuXG4gICAgcmV0dXJuIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE1hc2tlZEZ1bmN0aW9uLCBbe1xuICAgIGtleTogXCJfdXBkYXRlXCIsXG4gICAgdmFsdWU6XG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgICBAcGFyYW0ge09iamVjdH0gb3B0c1xyXG4gICAgKi9cbiAgICBmdW5jdGlvbiBfdXBkYXRlKG9wdHMpIHtcbiAgICAgIGlmIChvcHRzLm1hc2spIG9wdHMudmFsaWRhdGUgPSBvcHRzLm1hc2s7XG5cbiAgICAgIF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZEZ1bmN0aW9uLnByb3RvdHlwZSksIFwiX3VwZGF0ZVwiLCB0aGlzKS5jYWxsKHRoaXMsIG9wdHMpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNYXNrZWRGdW5jdGlvbjtcbn0oTWFza2VkKTtcbklNYXNrLk1hc2tlZEZ1bmN0aW9uID0gTWFza2VkRnVuY3Rpb247XG5cbmV4cG9ydCBkZWZhdWx0IE1hc2tlZEZ1bmN0aW9uO1xuIiwiaW1wb3J0IHsgZCBhcyBfaW5oZXJpdHMsIGUgYXMgX2NyZWF0ZVN1cGVyLCBhIGFzIF9jbGFzc0NhbGxDaGVjaywgXyBhcyBfY3JlYXRlQ2xhc3MsIGcgYXMgX2dldCwgaCBhcyBfZ2V0UHJvdG90eXBlT2YsIGYgYXMgX3NsaWNlZFRvQXJyYXksIGkgYXMgX3NldCB9IGZyb20gJy4uL19yb2xsdXBQbHVnaW5CYWJlbEhlbHBlcnMtNmNjYjFmNjQuanMnO1xuaW1wb3J0IHsgZXNjYXBlUmVnRXhwLCBESVJFQ1RJT04gfSBmcm9tICcuLi9jb3JlL3V0aWxzLmpzJztcbmltcG9ydCBDaGFuZ2VEZXRhaWxzIGZyb20gJy4uL2NvcmUvY2hhbmdlLWRldGFpbHMuanMnO1xuaW1wb3J0IE1hc2tlZCBmcm9tICcuL2Jhc2UuanMnO1xuaW1wb3J0IElNYXNrIGZyb20gJy4uL2NvcmUvaG9sZGVyLmpzJztcbmltcG9ydCAnLi4vY29yZS9jb250aW51b3VzLXRhaWwtZGV0YWlscy5qcyc7XG5cbi8qKlxyXG4gIE51bWJlciBtYXNrXHJcbiAgQHBhcmFtIHtPYmplY3R9IG9wdHNcclxuICBAcGFyYW0ge3N0cmluZ30gb3B0cy5yYWRpeCAtIFNpbmdsZSBjaGFyXHJcbiAgQHBhcmFtIHtzdHJpbmd9IG9wdHMudGhvdXNhbmRzU2VwYXJhdG9yIC0gU2luZ2xlIGNoYXJcclxuICBAcGFyYW0ge0FycmF5PHN0cmluZz59IG9wdHMubWFwVG9SYWRpeCAtIEFycmF5IG9mIHNpbmdsZSBjaGFyc1xyXG4gIEBwYXJhbSB7bnVtYmVyfSBvcHRzLm1pblxyXG4gIEBwYXJhbSB7bnVtYmVyfSBvcHRzLm1heFxyXG4gIEBwYXJhbSB7bnVtYmVyfSBvcHRzLnNjYWxlIC0gRGlnaXRzIGFmdGVyIHBvaW50XHJcbiAgQHBhcmFtIHtib29sZWFufSBvcHRzLnNpZ25lZCAtIEFsbG93IG5lZ2F0aXZlXHJcbiAgQHBhcmFtIHtib29sZWFufSBvcHRzLm5vcm1hbGl6ZVplcm9zIC0gRmxhZyB0byByZW1vdmUgbGVhZGluZyBhbmQgdHJhaWxpbmcgemVyb3MgaW4gdGhlIGVuZCBvZiBlZGl0aW5nXHJcbiAgQHBhcmFtIHtib29sZWFufSBvcHRzLnBhZEZyYWN0aW9uYWxaZXJvcyAtIEZsYWcgdG8gcGFkIHRyYWlsaW5nIHplcm9zIGFmdGVyIHBvaW50IGluIHRoZSBlbmQgb2YgZWRpdGluZ1xyXG4qL1xudmFyIE1hc2tlZE51bWJlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX01hc2tlZCkge1xuICBfaW5oZXJpdHMoTWFza2VkTnVtYmVyLCBfTWFza2VkKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKE1hc2tlZE51bWJlcik7XG5cbiAgLyoqIFNpbmdsZSBjaGFyICovXG5cbiAgLyoqIFNpbmdsZSBjaGFyICovXG5cbiAgLyoqIEFycmF5IG9mIHNpbmdsZSBjaGFycyAqL1xuXG4gIC8qKiAqL1xuXG4gIC8qKiAqL1xuXG4gIC8qKiBEaWdpdHMgYWZ0ZXIgcG9pbnQgKi9cblxuICAvKiogKi9cblxuICAvKiogRmxhZyB0byByZW1vdmUgbGVhZGluZyBhbmQgdHJhaWxpbmcgemVyb3MgaW4gdGhlIGVuZCBvZiBlZGl0aW5nICovXG5cbiAgLyoqIEZsYWcgdG8gcGFkIHRyYWlsaW5nIHplcm9zIGFmdGVyIHBvaW50IGluIHRoZSBlbmQgb2YgZWRpdGluZyAqL1xuICBmdW5jdGlvbiBNYXNrZWROdW1iZXIob3B0cykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYXNrZWROdW1iZXIpO1xuXG4gICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIE9iamVjdC5hc3NpZ24oe30sIE1hc2tlZE51bWJlci5ERUZBVUxUUywgb3B0cykpO1xuICB9XG4gIC8qKlxyXG4gICAgQG92ZXJyaWRlXHJcbiAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhNYXNrZWROdW1iZXIsIFt7XG4gICAga2V5OiBcIl91cGRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3VwZGF0ZShvcHRzKSB7XG4gICAgICBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWROdW1iZXIucHJvdG90eXBlKSwgXCJfdXBkYXRlXCIsIHRoaXMpLmNhbGwodGhpcywgb3B0cyk7XG5cbiAgICAgIHRoaXMuX3VwZGF0ZVJlZ0V4cHMoKTtcbiAgICB9XG4gICAgLyoqICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfdXBkYXRlUmVnRXhwc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfdXBkYXRlUmVnRXhwcygpIHtcbiAgICAgIC8vIHVzZSBkaWZmZXJlbnQgcmVnZXhwIHRvIHByb2Nlc3MgdXNlciBpbnB1dCAobW9yZSBzdHJpY3QsIGlucHV0IHN1ZmZpeCkgYW5kIHRhaWwgc2hpZnRpbmdcbiAgICAgIHZhciBzdGFydCA9ICdeJyArICh0aGlzLmFsbG93TmVnYXRpdmUgPyAnWyt8XFxcXC1dPycgOiAnJyk7XG4gICAgICB2YXIgbWlkSW5wdXQgPSAnKDB8KFsxLTldK1xcXFxkKikpPyc7XG4gICAgICB2YXIgbWlkID0gJ1xcXFxkKic7XG4gICAgICB2YXIgZW5kID0gKHRoaXMuc2NhbGUgPyAnKCcgKyBlc2NhcGVSZWdFeHAodGhpcy5yYWRpeCkgKyAnXFxcXGR7MCwnICsgdGhpcy5zY2FsZSArICd9KT8nIDogJycpICsgJyQnO1xuICAgICAgdGhpcy5fbnVtYmVyUmVnRXhwSW5wdXQgPSBuZXcgUmVnRXhwKHN0YXJ0ICsgbWlkSW5wdXQgKyBlbmQpO1xuICAgICAgdGhpcy5fbnVtYmVyUmVnRXhwID0gbmV3IFJlZ0V4cChzdGFydCArIG1pZCArIGVuZCk7XG4gICAgICB0aGlzLl9tYXBUb1JhZGl4UmVnRXhwID0gbmV3IFJlZ0V4cCgnWycgKyB0aGlzLm1hcFRvUmFkaXgubWFwKGVzY2FwZVJlZ0V4cCkuam9pbignJykgKyAnXScsICdnJyk7XG4gICAgICB0aGlzLl90aG91c2FuZHNTZXBhcmF0b3JSZWdFeHAgPSBuZXcgUmVnRXhwKGVzY2FwZVJlZ0V4cCh0aGlzLnRob3VzYW5kc1NlcGFyYXRvciksICdnJyk7XG4gICAgfVxuICAgIC8qKiAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX3JlbW92ZVRob3VzYW5kc1NlcGFyYXRvcnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3JlbW92ZVRob3VzYW5kc1NlcGFyYXRvcnModmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKHRoaXMuX3Rob3VzYW5kc1NlcGFyYXRvclJlZ0V4cCwgJycpO1xuICAgIH1cbiAgICAvKiogKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9pbnNlcnRUaG91c2FuZHNTZXBhcmF0b3JzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9pbnNlcnRUaG91c2FuZHNTZXBhcmF0b3JzKHZhbHVlKSB7XG4gICAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yOTAxMTAyL2hvdy10by1wcmludC1hLW51bWJlci13aXRoLWNvbW1hcy1hcy10aG91c2FuZHMtc2VwYXJhdG9ycy1pbi1qYXZhc2NyaXB0XG4gICAgICB2YXIgcGFydHMgPSB2YWx1ZS5zcGxpdCh0aGlzLnJhZGl4KTtcbiAgICAgIHBhcnRzWzBdID0gcGFydHNbMF0ucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgdGhpcy50aG91c2FuZHNTZXBhcmF0b3IpO1xuICAgICAgcmV0dXJuIHBhcnRzLmpvaW4odGhpcy5yYWRpeCk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkb1ByZXBhcmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZG9QcmVwYXJlKHN0cikge1xuICAgICAgdmFyIF9nZXQyO1xuXG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gKF9nZXQyID0gX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkTnVtYmVyLnByb3RvdHlwZSksIFwiZG9QcmVwYXJlXCIsIHRoaXMpKS5jYWxsLmFwcGx5KF9nZXQyLCBbdGhpcywgdGhpcy5fcmVtb3ZlVGhvdXNhbmRzU2VwYXJhdG9ycyhzdHIucmVwbGFjZSh0aGlzLl9tYXBUb1JhZGl4UmVnRXhwLCB0aGlzLnJhZGl4KSldLmNvbmNhdChhcmdzKSk7XG4gICAgfVxuICAgIC8qKiAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX3NlcGFyYXRvcnNDb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfc2VwYXJhdG9yc0NvdW50KHRvKSB7XG4gICAgICB2YXIgZXh0ZW5kT25TZXBhcmF0b3JzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcbiAgICAgIHZhciBjb3VudCA9IDA7XG5cbiAgICAgIGZvciAodmFyIHBvcyA9IDA7IHBvcyA8IHRvOyArK3Bvcykge1xuICAgICAgICBpZiAodGhpcy5fdmFsdWUuaW5kZXhPZih0aGlzLnRob3VzYW5kc1NlcGFyYXRvciwgcG9zKSA9PT0gcG9zKSB7XG4gICAgICAgICAgKytjb3VudDtcbiAgICAgICAgICBpZiAoZXh0ZW5kT25TZXBhcmF0b3JzKSB0byArPSB0aGlzLnRob3VzYW5kc1NlcGFyYXRvci5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvdW50O1xuICAgIH1cbiAgICAvKiogKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9zZXBhcmF0b3JzQ291bnRGcm9tU2xpY2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3NlcGFyYXRvcnNDb3VudEZyb21TbGljZSgpIHtcbiAgICAgIHZhciBzbGljZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogdGhpcy5fdmFsdWU7XG4gICAgICByZXR1cm4gdGhpcy5fc2VwYXJhdG9yc0NvdW50KHRoaXMuX3JlbW92ZVRob3VzYW5kc1NlcGFyYXRvcnMoc2xpY2UpLmxlbmd0aCwgdHJ1ZSk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJleHRyYWN0SW5wdXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZXh0cmFjdElucHV0KCkge1xuICAgICAgdmFyIGZyb21Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDA7XG4gICAgICB2YXIgdG9Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRoaXMudmFsdWUubGVuZ3RoO1xuICAgICAgdmFyIGZsYWdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQ7XG5cbiAgICAgIHZhciBfdGhpcyRfYWRqdXN0UmFuZ2VXaXQgPSB0aGlzLl9hZGp1c3RSYW5nZVdpdGhTZXBhcmF0b3JzKGZyb21Qb3MsIHRvUG9zKTtcblxuICAgICAgdmFyIF90aGlzJF9hZGp1c3RSYW5nZVdpdDIgPSBfc2xpY2VkVG9BcnJheShfdGhpcyRfYWRqdXN0UmFuZ2VXaXQsIDIpO1xuXG4gICAgICBmcm9tUG9zID0gX3RoaXMkX2FkanVzdFJhbmdlV2l0MlswXTtcbiAgICAgIHRvUG9zID0gX3RoaXMkX2FkanVzdFJhbmdlV2l0MlsxXTtcbiAgICAgIHJldHVybiB0aGlzLl9yZW1vdmVUaG91c2FuZHNTZXBhcmF0b3JzKF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZE51bWJlci5wcm90b3R5cGUpLCBcImV4dHJhY3RJbnB1dFwiLCB0aGlzKS5jYWxsKHRoaXMsIGZyb21Qb3MsIHRvUG9zLCBmbGFncykpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX2FwcGVuZENoYXJSYXdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2FwcGVuZENoYXJSYXcoY2gpIHtcbiAgICAgIHZhciBmbGFncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgICBpZiAoIXRoaXMudGhvdXNhbmRzU2VwYXJhdG9yKSByZXR1cm4gX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkTnVtYmVyLnByb3RvdHlwZSksIFwiX2FwcGVuZENoYXJSYXdcIiwgdGhpcykuY2FsbCh0aGlzLCBjaCwgZmxhZ3MpO1xuICAgICAgdmFyIHByZXZCZWZvcmVUYWlsVmFsdWUgPSBmbGFncy50YWlsICYmIGZsYWdzLl9iZWZvcmVUYWlsU3RhdGUgPyBmbGFncy5fYmVmb3JlVGFpbFN0YXRlLl92YWx1ZSA6IHRoaXMuX3ZhbHVlO1xuXG4gICAgICB2YXIgcHJldkJlZm9yZVRhaWxTZXBhcmF0b3JzQ291bnQgPSB0aGlzLl9zZXBhcmF0b3JzQ291bnRGcm9tU2xpY2UocHJldkJlZm9yZVRhaWxWYWx1ZSk7XG5cbiAgICAgIHRoaXMuX3ZhbHVlID0gdGhpcy5fcmVtb3ZlVGhvdXNhbmRzU2VwYXJhdG9ycyh0aGlzLnZhbHVlKTtcblxuICAgICAgdmFyIGFwcGVuZERldGFpbHMgPSBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWROdW1iZXIucHJvdG90eXBlKSwgXCJfYXBwZW5kQ2hhclJhd1wiLCB0aGlzKS5jYWxsKHRoaXMsIGNoLCBmbGFncyk7XG5cbiAgICAgIHRoaXMuX3ZhbHVlID0gdGhpcy5faW5zZXJ0VGhvdXNhbmRzU2VwYXJhdG9ycyh0aGlzLl92YWx1ZSk7XG4gICAgICB2YXIgYmVmb3JlVGFpbFZhbHVlID0gZmxhZ3MudGFpbCAmJiBmbGFncy5fYmVmb3JlVGFpbFN0YXRlID8gZmxhZ3MuX2JlZm9yZVRhaWxTdGF0ZS5fdmFsdWUgOiB0aGlzLl92YWx1ZTtcblxuICAgICAgdmFyIGJlZm9yZVRhaWxTZXBhcmF0b3JzQ291bnQgPSB0aGlzLl9zZXBhcmF0b3JzQ291bnRGcm9tU2xpY2UoYmVmb3JlVGFpbFZhbHVlKTtcblxuICAgICAgYXBwZW5kRGV0YWlscy50YWlsU2hpZnQgKz0gKGJlZm9yZVRhaWxTZXBhcmF0b3JzQ291bnQgLSBwcmV2QmVmb3JlVGFpbFNlcGFyYXRvcnNDb3VudCkgKiB0aGlzLnRob3VzYW5kc1NlcGFyYXRvci5sZW5ndGg7XG4gICAgICBhcHBlbmREZXRhaWxzLnNraXAgPSAhYXBwZW5kRGV0YWlscy5yYXdJbnNlcnRlZCAmJiBjaCA9PT0gdGhpcy50aG91c2FuZHNTZXBhcmF0b3I7XG4gICAgICByZXR1cm4gYXBwZW5kRGV0YWlscztcbiAgICB9XG4gICAgLyoqICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfZmluZFNlcGFyYXRvckFyb3VuZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZmluZFNlcGFyYXRvckFyb3VuZChwb3MpIHtcbiAgICAgIGlmICh0aGlzLnRob3VzYW5kc1NlcGFyYXRvcikge1xuICAgICAgICB2YXIgc2VhcmNoRnJvbSA9IHBvcyAtIHRoaXMudGhvdXNhbmRzU2VwYXJhdG9yLmxlbmd0aCArIDE7XG4gICAgICAgIHZhciBzZXBhcmF0b3JQb3MgPSB0aGlzLnZhbHVlLmluZGV4T2YodGhpcy50aG91c2FuZHNTZXBhcmF0b3IsIHNlYXJjaEZyb20pO1xuICAgICAgICBpZiAoc2VwYXJhdG9yUG9zIDw9IHBvcykgcmV0dXJuIHNlcGFyYXRvclBvcztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfYWRqdXN0UmFuZ2VXaXRoU2VwYXJhdG9yc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfYWRqdXN0UmFuZ2VXaXRoU2VwYXJhdG9ycyhmcm9tLCB0bykge1xuICAgICAgdmFyIHNlcGFyYXRvckFyb3VuZEZyb21Qb3MgPSB0aGlzLl9maW5kU2VwYXJhdG9yQXJvdW5kKGZyb20pO1xuXG4gICAgICBpZiAoc2VwYXJhdG9yQXJvdW5kRnJvbVBvcyA+PSAwKSBmcm9tID0gc2VwYXJhdG9yQXJvdW5kRnJvbVBvcztcblxuICAgICAgdmFyIHNlcGFyYXRvckFyb3VuZFRvUG9zID0gdGhpcy5fZmluZFNlcGFyYXRvckFyb3VuZCh0byk7XG5cbiAgICAgIGlmIChzZXBhcmF0b3JBcm91bmRUb1BvcyA+PSAwKSB0byA9IHNlcGFyYXRvckFyb3VuZFRvUG9zICsgdGhpcy50aG91c2FuZHNTZXBhcmF0b3IubGVuZ3RoO1xuICAgICAgcmV0dXJuIFtmcm9tLCB0b107XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJyZW1vdmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgdmFyIGZyb21Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDA7XG4gICAgICB2YXIgdG9Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRoaXMudmFsdWUubGVuZ3RoO1xuXG4gICAgICB2YXIgX3RoaXMkX2FkanVzdFJhbmdlV2l0MyA9IHRoaXMuX2FkanVzdFJhbmdlV2l0aFNlcGFyYXRvcnMoZnJvbVBvcywgdG9Qb3MpO1xuXG4gICAgICB2YXIgX3RoaXMkX2FkanVzdFJhbmdlV2l0NCA9IF9zbGljZWRUb0FycmF5KF90aGlzJF9hZGp1c3RSYW5nZVdpdDMsIDIpO1xuXG4gICAgICBmcm9tUG9zID0gX3RoaXMkX2FkanVzdFJhbmdlV2l0NFswXTtcbiAgICAgIHRvUG9zID0gX3RoaXMkX2FkanVzdFJhbmdlV2l0NFsxXTtcbiAgICAgIHZhciB2YWx1ZUJlZm9yZVBvcyA9IHRoaXMudmFsdWUuc2xpY2UoMCwgZnJvbVBvcyk7XG4gICAgICB2YXIgdmFsdWVBZnRlclBvcyA9IHRoaXMudmFsdWUuc2xpY2UodG9Qb3MpO1xuXG4gICAgICB2YXIgcHJldkJlZm9yZVRhaWxTZXBhcmF0b3JzQ291bnQgPSB0aGlzLl9zZXBhcmF0b3JzQ291bnQodmFsdWVCZWZvcmVQb3MubGVuZ3RoKTtcblxuICAgICAgdGhpcy5fdmFsdWUgPSB0aGlzLl9pbnNlcnRUaG91c2FuZHNTZXBhcmF0b3JzKHRoaXMuX3JlbW92ZVRob3VzYW5kc1NlcGFyYXRvcnModmFsdWVCZWZvcmVQb3MgKyB2YWx1ZUFmdGVyUG9zKSk7XG5cbiAgICAgIHZhciBiZWZvcmVUYWlsU2VwYXJhdG9yc0NvdW50ID0gdGhpcy5fc2VwYXJhdG9yc0NvdW50RnJvbVNsaWNlKHZhbHVlQmVmb3JlUG9zKTtcblxuICAgICAgcmV0dXJuIG5ldyBDaGFuZ2VEZXRhaWxzKHtcbiAgICAgICAgdGFpbFNoaWZ0OiAoYmVmb3JlVGFpbFNlcGFyYXRvcnNDb3VudCAtIHByZXZCZWZvcmVUYWlsU2VwYXJhdG9yc0NvdW50KSAqIHRoaXMudGhvdXNhbmRzU2VwYXJhdG9yLmxlbmd0aFxuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJuZWFyZXN0SW5wdXRQb3NcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbmVhcmVzdElucHV0UG9zKGN1cnNvclBvcywgZGlyZWN0aW9uKSB7XG4gICAgICBpZiAoIXRoaXMudGhvdXNhbmRzU2VwYXJhdG9yKSByZXR1cm4gY3Vyc29yUG9zO1xuXG4gICAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgICBjYXNlIERJUkVDVElPTi5OT05FOlxuICAgICAgICBjYXNlIERJUkVDVElPTi5MRUZUOlxuICAgICAgICBjYXNlIERJUkVDVElPTi5GT1JDRV9MRUZUOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHZhciBzZXBhcmF0b3JBdExlZnRQb3MgPSB0aGlzLl9maW5kU2VwYXJhdG9yQXJvdW5kKGN1cnNvclBvcyAtIDEpO1xuXG4gICAgICAgICAgICBpZiAoc2VwYXJhdG9yQXRMZWZ0UG9zID49IDApIHtcbiAgICAgICAgICAgICAgdmFyIHNlcGFyYXRvckF0TGVmdEVuZFBvcyA9IHNlcGFyYXRvckF0TGVmdFBvcyArIHRoaXMudGhvdXNhbmRzU2VwYXJhdG9yLmxlbmd0aDtcblxuICAgICAgICAgICAgICBpZiAoY3Vyc29yUG9zIDwgc2VwYXJhdG9yQXRMZWZ0RW5kUG9zIHx8IHRoaXMudmFsdWUubGVuZ3RoIDw9IHNlcGFyYXRvckF0TGVmdEVuZFBvcyB8fCBkaXJlY3Rpb24gPT09IERJUkVDVElPTi5GT1JDRV9MRUZUKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlcGFyYXRvckF0TGVmdFBvcztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBESVJFQ1RJT04uUklHSFQ6XG4gICAgICAgIGNhc2UgRElSRUNUSU9OLkZPUkNFX1JJR0hUOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHZhciBzZXBhcmF0b3JBdFJpZ2h0UG9zID0gdGhpcy5fZmluZFNlcGFyYXRvckFyb3VuZChjdXJzb3JQb3MpO1xuXG4gICAgICAgICAgICBpZiAoc2VwYXJhdG9yQXRSaWdodFBvcyA+PSAwKSB7XG4gICAgICAgICAgICAgIHJldHVybiBzZXBhcmF0b3JBdFJpZ2h0UG9zICsgdGhpcy50aG91c2FuZHNTZXBhcmF0b3IubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGN1cnNvclBvcztcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRvVmFsaWRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZG9WYWxpZGF0ZShmbGFncykge1xuICAgICAgdmFyIHJlZ2V4cCA9IGZsYWdzLmlucHV0ID8gdGhpcy5fbnVtYmVyUmVnRXhwSW5wdXQgOiB0aGlzLl9udW1iZXJSZWdFeHA7IC8vIHZhbGlkYXRlIGFzIHN0cmluZ1xuXG4gICAgICB2YXIgdmFsaWQgPSByZWdleHAudGVzdCh0aGlzLl9yZW1vdmVUaG91c2FuZHNTZXBhcmF0b3JzKHRoaXMudmFsdWUpKTtcblxuICAgICAgaWYgKHZhbGlkKSB7XG4gICAgICAgIC8vIHZhbGlkYXRlIGFzIG51bWJlclxuICAgICAgICB2YXIgbnVtYmVyID0gdGhpcy5udW1iZXI7XG4gICAgICAgIHZhbGlkID0gdmFsaWQgJiYgIWlzTmFOKG51bWJlcikgJiYgKCAvLyBjaGVjayBtaW4gYm91bmQgZm9yIG5lZ2F0aXZlIHZhbHVlc1xuICAgICAgICB0aGlzLm1pbiA9PSBudWxsIHx8IHRoaXMubWluID49IDAgfHwgdGhpcy5taW4gPD0gdGhpcy5udW1iZXIpICYmICggLy8gY2hlY2sgbWF4IGJvdW5kIGZvciBwb3NpdGl2ZSB2YWx1ZXNcbiAgICAgICAgdGhpcy5tYXggPT0gbnVsbCB8fCB0aGlzLm1heCA8PSAwIHx8IHRoaXMubnVtYmVyIDw9IHRoaXMubWF4KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbGlkICYmIF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZE51bWJlci5wcm90b3R5cGUpLCBcImRvVmFsaWRhdGVcIiwgdGhpcykuY2FsbCh0aGlzLCBmbGFncyk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkb0NvbW1pdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkb0NvbW1pdCgpIHtcbiAgICAgIGlmICh0aGlzLnZhbHVlKSB7XG4gICAgICAgIHZhciBudW1iZXIgPSB0aGlzLm51bWJlcjtcbiAgICAgICAgdmFyIHZhbGlkbnVtID0gbnVtYmVyOyAvLyBjaGVjayBib3VuZHNcblxuICAgICAgICBpZiAodGhpcy5taW4gIT0gbnVsbCkgdmFsaWRudW0gPSBNYXRoLm1heCh2YWxpZG51bSwgdGhpcy5taW4pO1xuICAgICAgICBpZiAodGhpcy5tYXggIT0gbnVsbCkgdmFsaWRudW0gPSBNYXRoLm1pbih2YWxpZG51bSwgdGhpcy5tYXgpO1xuICAgICAgICBpZiAodmFsaWRudW0gIT09IG51bWJlcikgdGhpcy51bm1hc2tlZFZhbHVlID0gU3RyaW5nKHZhbGlkbnVtKTtcbiAgICAgICAgdmFyIGZvcm1hdHRlZCA9IHRoaXMudmFsdWU7XG4gICAgICAgIGlmICh0aGlzLm5vcm1hbGl6ZVplcm9zKSBmb3JtYXR0ZWQgPSB0aGlzLl9ub3JtYWxpemVaZXJvcyhmb3JtYXR0ZWQpO1xuICAgICAgICBpZiAodGhpcy5wYWRGcmFjdGlvbmFsWmVyb3MpIGZvcm1hdHRlZCA9IHRoaXMuX3BhZEZyYWN0aW9uYWxaZXJvcyhmb3JtYXR0ZWQpO1xuICAgICAgICB0aGlzLl92YWx1ZSA9IGZvcm1hdHRlZDtcbiAgICAgIH1cblxuICAgICAgX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkTnVtYmVyLnByb3RvdHlwZSksIFwiZG9Db21taXRcIiwgdGhpcykuY2FsbCh0aGlzKTtcbiAgICB9XG4gICAgLyoqICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfbm9ybWFsaXplWmVyb3NcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX25vcm1hbGl6ZVplcm9zKHZhbHVlKSB7XG4gICAgICB2YXIgcGFydHMgPSB0aGlzLl9yZW1vdmVUaG91c2FuZHNTZXBhcmF0b3JzKHZhbHVlKS5zcGxpdCh0aGlzLnJhZGl4KTsgLy8gcmVtb3ZlIGxlYWRpbmcgemVyb3NcblxuXG4gICAgICBwYXJ0c1swXSA9IHBhcnRzWzBdLnJlcGxhY2UoL14oXFxEKikoMCopKFxcZCopLywgZnVuY3Rpb24gKG1hdGNoLCBzaWduLCB6ZXJvcywgbnVtKSB7XG4gICAgICAgIHJldHVybiBzaWduICsgbnVtO1xuICAgICAgfSk7IC8vIGFkZCBsZWFkaW5nIHplcm9cblxuICAgICAgaWYgKHZhbHVlLmxlbmd0aCAmJiAhL1xcZCQvLnRlc3QocGFydHNbMF0pKSBwYXJ0c1swXSA9IHBhcnRzWzBdICsgJzAnO1xuXG4gICAgICBpZiAocGFydHMubGVuZ3RoID4gMSkge1xuICAgICAgICBwYXJ0c1sxXSA9IHBhcnRzWzFdLnJlcGxhY2UoLzAqJC8sICcnKTsgLy8gcmVtb3ZlIHRyYWlsaW5nIHplcm9zXG5cbiAgICAgICAgaWYgKCFwYXJ0c1sxXS5sZW5ndGgpIHBhcnRzLmxlbmd0aCA9IDE7IC8vIHJlbW92ZSBmcmFjdGlvbmFsXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLl9pbnNlcnRUaG91c2FuZHNTZXBhcmF0b3JzKHBhcnRzLmpvaW4odGhpcy5yYWRpeCkpO1xuICAgIH1cbiAgICAvKiogKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9wYWRGcmFjdGlvbmFsWmVyb3NcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3BhZEZyYWN0aW9uYWxaZXJvcyh2YWx1ZSkge1xuICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuIHZhbHVlO1xuICAgICAgdmFyIHBhcnRzID0gdmFsdWUuc3BsaXQodGhpcy5yYWRpeCk7XG4gICAgICBpZiAocGFydHMubGVuZ3RoIDwgMikgcGFydHMucHVzaCgnJyk7XG4gICAgICBwYXJ0c1sxXSA9IHBhcnRzWzFdLnBhZEVuZCh0aGlzLnNjYWxlLCAnMCcpO1xuICAgICAgcmV0dXJuIHBhcnRzLmpvaW4odGhpcy5yYWRpeCk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ1bm1hc2tlZFZhbHVlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVtb3ZlVGhvdXNhbmRzU2VwYXJhdG9ycyh0aGlzLl9ub3JtYWxpemVaZXJvcyh0aGlzLnZhbHVlKSkucmVwbGFjZSh0aGlzLnJhZGl4LCAnLicpO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodW5tYXNrZWRWYWx1ZSkge1xuICAgICAgX3NldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkTnVtYmVyLnByb3RvdHlwZSksIFwidW5tYXNrZWRWYWx1ZVwiLCB1bm1hc2tlZFZhbHVlLnJlcGxhY2UoJy4nLCB0aGlzLnJhZGl4KSwgdGhpcywgdHJ1ZSk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ0eXBlZFZhbHVlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gTnVtYmVyKHRoaXMudW5tYXNrZWRWYWx1ZSk7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChuKSB7XG4gICAgICBfc2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWROdW1iZXIucHJvdG90eXBlKSwgXCJ1bm1hc2tlZFZhbHVlXCIsIFN0cmluZyhuKSwgdGhpcywgdHJ1ZSk7XG4gICAgfVxuICAgIC8qKiBQYXJzZWQgTnVtYmVyICovXG5cbiAgfSwge1xuICAgIGtleTogXCJudW1iZXJcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnR5cGVkVmFsdWU7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChudW1iZXIpIHtcbiAgICAgIHRoaXMudHlwZWRWYWx1ZSA9IG51bWJlcjtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIElzIG5lZ2F0aXZlIGFsbG93ZWRcclxuICAgICAgQHJlYWRvbmx5XHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYWxsb3dOZWdhdGl2ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2lnbmVkIHx8IHRoaXMubWluICE9IG51bGwgJiYgdGhpcy5taW4gPCAwIHx8IHRoaXMubWF4ICE9IG51bGwgJiYgdGhpcy5tYXggPCAwO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNYXNrZWROdW1iZXI7XG59KE1hc2tlZCk7XG5NYXNrZWROdW1iZXIuREVGQVVMVFMgPSB7XG4gIHJhZGl4OiAnLCcsXG4gIHRob3VzYW5kc1NlcGFyYXRvcjogJycsXG4gIG1hcFRvUmFkaXg6IFsnLiddLFxuICBzY2FsZTogMixcbiAgc2lnbmVkOiBmYWxzZSxcbiAgbm9ybWFsaXplWmVyb3M6IHRydWUsXG4gIHBhZEZyYWN0aW9uYWxaZXJvczogZmFsc2Vcbn07XG5JTWFzay5NYXNrZWROdW1iZXIgPSBNYXNrZWROdW1iZXI7XG5cbmV4cG9ydCBkZWZhdWx0IE1hc2tlZE51bWJlcjtcbiIsImltcG9ydCB7IGQgYXMgX2luaGVyaXRzLCBlIGFzIF9jcmVhdGVTdXBlciwgYSBhcyBfY2xhc3NDYWxsQ2hlY2ssIF8gYXMgX2NyZWF0ZUNsYXNzLCBnIGFzIF9nZXQsIGggYXMgX2dldFByb3RvdHlwZU9mLCBiIGFzIF9vYmplY3RXaXRob3V0UHJvcGVydGllcywgaSBhcyBfc2V0IH0gZnJvbSAnLi4vX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycy02Y2NiMWY2NC5qcyc7XG5pbXBvcnQgeyBmb3JjZURpcmVjdGlvbiwgRElSRUNUSU9OIH0gZnJvbSAnLi4vY29yZS91dGlscy5qcyc7XG5pbXBvcnQgQ2hhbmdlRGV0YWlscyBmcm9tICcuLi9jb3JlL2NoYW5nZS1kZXRhaWxzLmpzJztcbmltcG9ydCBNYXNrZWQgZnJvbSAnLi9iYXNlLmpzJztcbmltcG9ydCBQYXR0ZXJuSW5wdXREZWZpbml0aW9uLCB7IERFRkFVTFRfSU5QVVRfREVGSU5JVElPTlMgfSBmcm9tICcuL3BhdHRlcm4vaW5wdXQtZGVmaW5pdGlvbi5qcyc7XG5pbXBvcnQgUGF0dGVybkZpeGVkRGVmaW5pdGlvbiBmcm9tICcuL3BhdHRlcm4vZml4ZWQtZGVmaW5pdGlvbi5qcyc7XG5pbXBvcnQgQ2h1bmtzVGFpbERldGFpbHMgZnJvbSAnLi9wYXR0ZXJuL2NodW5rLXRhaWwtZGV0YWlscy5qcyc7XG5pbXBvcnQgY3JlYXRlTWFzayBmcm9tICcuL2ZhY3RvcnkuanMnO1xuaW1wb3J0IElNYXNrIGZyb20gJy4uL2NvcmUvaG9sZGVyLmpzJztcbmltcG9ydCAnLi9yZWdleHAuanMnO1xuaW1wb3J0ICcuLi9jb3JlL2NvbnRpbnVvdXMtdGFpbC1kZXRhaWxzLmpzJztcblxuLyoqXHJcbiAgUGF0dGVybiBtYXNrXHJcbiAgQHBhcmFtIHtPYmplY3R9IG9wdHNcclxuICBAcGFyYW0ge09iamVjdH0gb3B0cy5ibG9ja3NcclxuICBAcGFyYW0ge09iamVjdH0gb3B0cy5kZWZpbml0aW9uc1xyXG4gIEBwYXJhbSB7c3RyaW5nfSBvcHRzLnBsYWNlaG9sZGVyQ2hhclxyXG4gIEBwYXJhbSB7Ym9vbGVhbn0gb3B0cy5sYXp5XHJcbiovXG52YXIgTWFza2VkUGF0dGVybiA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX01hc2tlZCkge1xuICBfaW5oZXJpdHMoTWFza2VkUGF0dGVybiwgX01hc2tlZCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihNYXNrZWRQYXR0ZXJuKTtcblxuICAvKiogKi9cblxuICAvKiogKi9cblxuICAvKiogU2luZ2xlIGNoYXIgZm9yIGVtcHR5IGlucHV0ICovXG5cbiAgLyoqIFNob3cgcGxhY2Vob2xkZXIgb25seSB3aGVuIG5lZWRlZCAqL1xuICBmdW5jdGlvbiBNYXNrZWRQYXR0ZXJuKCkge1xuICAgIHZhciBvcHRzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYXNrZWRQYXR0ZXJuKTtcblxuICAgIC8vIFRPRE8gdHlwZSAkU2hhcGU8TWFza2VkUGF0dGVybk9wdGlvbnM+PXt9IGRvZXMgbm90IHdvcmtcbiAgICBvcHRzLmRlZmluaXRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9JTlBVVF9ERUZJTklUSU9OUywgb3B0cy5kZWZpbml0aW9ucyk7XG4gICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIE9iamVjdC5hc3NpZ24oe30sIE1hc2tlZFBhdHRlcm4uREVGQVVMVFMsIG9wdHMpKTtcbiAgfVxuICAvKipcclxuICAgIEBvdmVycmlkZVxyXG4gICAgQHBhcmFtIHtPYmplY3R9IG9wdHNcclxuICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKE1hc2tlZFBhdHRlcm4sIFt7XG4gICAga2V5OiBcIl91cGRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3VwZGF0ZSgpIHtcbiAgICAgIHZhciBvcHRzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICAgIG9wdHMuZGVmaW5pdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRlZmluaXRpb25zLCBvcHRzLmRlZmluaXRpb25zKTtcblxuICAgICAgX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkUGF0dGVybi5wcm90b3R5cGUpLCBcIl91cGRhdGVcIiwgdGhpcykuY2FsbCh0aGlzLCBvcHRzKTtcblxuICAgICAgdGhpcy5fcmVidWlsZE1hc2soKTtcbiAgICB9XG4gICAgLyoqICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfcmVidWlsZE1hc2tcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3JlYnVpbGRNYXNrKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdmFyIGRlZnMgPSB0aGlzLmRlZmluaXRpb25zO1xuICAgICAgdGhpcy5fYmxvY2tzID0gW107XG4gICAgICB0aGlzLl9zdG9wcyA9IFtdO1xuICAgICAgdGhpcy5fbWFza2VkQmxvY2tzID0ge307XG4gICAgICB2YXIgcGF0dGVybiA9IHRoaXMubWFzaztcbiAgICAgIGlmICghcGF0dGVybiB8fCAhZGVmcykgcmV0dXJuO1xuICAgICAgdmFyIHVubWFza2luZ0Jsb2NrID0gZmFsc2U7XG4gICAgICB2YXIgb3B0aW9uYWxCbG9jayA9IGZhbHNlO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhdHRlcm4ubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgaWYgKHRoaXMuYmxvY2tzKSB7XG4gICAgICAgICAgdmFyIF9yZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcCA9IHBhdHRlcm4uc2xpY2UoaSk7XG4gICAgICAgICAgICB2YXIgYk5hbWVzID0gT2JqZWN0LmtleXMoX3RoaXMuYmxvY2tzKS5maWx0ZXIoZnVuY3Rpb24gKGJOYW1lKSB7XG4gICAgICAgICAgICAgIHJldHVybiBwLmluZGV4T2YoYk5hbWUpID09PSAwO1xuICAgICAgICAgICAgfSk7IC8vIG9yZGVyIGJ5IGtleSBsZW5ndGhcblxuICAgICAgICAgICAgYk5hbWVzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGIubGVuZ3RoIC0gYS5sZW5ndGg7XG4gICAgICAgICAgICB9KTsgLy8gdXNlIGJsb2NrIG5hbWUgd2l0aCBtYXggbGVuZ3RoXG5cbiAgICAgICAgICAgIHZhciBiTmFtZSA9IGJOYW1lc1swXTtcblxuICAgICAgICAgICAgaWYgKGJOYW1lKSB7XG4gICAgICAgICAgICAgIC8vICRGbG93Rml4TWUgbm8gaWRlYXNcbiAgICAgICAgICAgICAgdmFyIG1hc2tlZEJsb2NrID0gY3JlYXRlTWFzayhPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IF90aGlzLFxuICAgICAgICAgICAgICAgIGxhenk6IF90aGlzLmxhenksXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXJDaGFyOiBfdGhpcy5wbGFjZWhvbGRlckNoYXIsXG4gICAgICAgICAgICAgICAgb3ZlcndyaXRlOiBfdGhpcy5vdmVyd3JpdGVcbiAgICAgICAgICAgICAgfSwgX3RoaXMuYmxvY2tzW2JOYW1lXSkpO1xuXG4gICAgICAgICAgICAgIGlmIChtYXNrZWRCbG9jaykge1xuICAgICAgICAgICAgICAgIF90aGlzLl9ibG9ja3MucHVzaChtYXNrZWRCbG9jayk7IC8vIHN0b3JlIGJsb2NrIGluZGV4XG5cblxuICAgICAgICAgICAgICAgIGlmICghX3RoaXMuX21hc2tlZEJsb2Nrc1tiTmFtZV0pIF90aGlzLl9tYXNrZWRCbG9ja3NbYk5hbWVdID0gW107XG5cbiAgICAgICAgICAgICAgICBfdGhpcy5fbWFza2VkQmxvY2tzW2JOYW1lXS5wdXNoKF90aGlzLl9ibG9ja3MubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpICs9IGJOYW1lLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSgpO1xuXG4gICAgICAgICAgaWYgKF9yZXQgPT09IFwiY29udGludWVcIikgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2hhciA9IHBhdHRlcm5baV07XG5cbiAgICAgICAgdmFyIF9pc0lucHV0ID0gKGNoYXIgaW4gZGVmcyk7XG5cbiAgICAgICAgaWYgKGNoYXIgPT09IE1hc2tlZFBhdHRlcm4uU1RPUF9DSEFSKSB7XG4gICAgICAgICAgdGhpcy5fc3RvcHMucHVzaCh0aGlzLl9ibG9ja3MubGVuZ3RoKTtcblxuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNoYXIgPT09ICd7JyB8fCBjaGFyID09PSAnfScpIHtcbiAgICAgICAgICB1bm1hc2tpbmdCbG9jayA9ICF1bm1hc2tpbmdCbG9jaztcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGFyID09PSAnWycgfHwgY2hhciA9PT0gJ10nKSB7XG4gICAgICAgICAgb3B0aW9uYWxCbG9jayA9ICFvcHRpb25hbEJsb2NrO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNoYXIgPT09IE1hc2tlZFBhdHRlcm4uRVNDQVBFX0NIQVIpIHtcbiAgICAgICAgICArK2k7XG4gICAgICAgICAgY2hhciA9IHBhdHRlcm5baV07XG4gICAgICAgICAgaWYgKCFjaGFyKSBicmVhaztcbiAgICAgICAgICBfaXNJbnB1dCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRlZiA9IF9pc0lucHV0ID8gbmV3IFBhdHRlcm5JbnB1dERlZmluaXRpb24oe1xuICAgICAgICAgIHBhcmVudDogdGhpcyxcbiAgICAgICAgICBsYXp5OiB0aGlzLmxhenksXG4gICAgICAgICAgcGxhY2Vob2xkZXJDaGFyOiB0aGlzLnBsYWNlaG9sZGVyQ2hhcixcbiAgICAgICAgICBtYXNrOiBkZWZzW2NoYXJdLFxuICAgICAgICAgIGlzT3B0aW9uYWw6IG9wdGlvbmFsQmxvY2tcbiAgICAgICAgfSkgOiBuZXcgUGF0dGVybkZpeGVkRGVmaW5pdGlvbih7XG4gICAgICAgICAgY2hhcjogY2hhcixcbiAgICAgICAgICBpc1VubWFza2luZzogdW5tYXNraW5nQmxvY2tcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5fYmxvY2tzLnB1c2goZGVmKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInN0YXRlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkUGF0dGVybi5wcm90b3R5cGUpLCBcInN0YXRlXCIsIHRoaXMpLCB7XG4gICAgICAgIF9ibG9ja3M6IHRoaXMuX2Jsb2Nrcy5tYXAoZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgICByZXR1cm4gYi5zdGF0ZTtcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQoc3RhdGUpIHtcbiAgICAgIHZhciBfYmxvY2tzID0gc3RhdGUuX2Jsb2NrcyxcbiAgICAgICAgICBtYXNrZWRTdGF0ZSA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzdGF0ZSwgW1wiX2Jsb2Nrc1wiXSk7XG5cbiAgICAgIHRoaXMuX2Jsb2Nrcy5mb3JFYWNoKGZ1bmN0aW9uIChiLCBiaSkge1xuICAgICAgICByZXR1cm4gYi5zdGF0ZSA9IF9ibG9ja3NbYmldO1xuICAgICAgfSk7XG5cbiAgICAgIF9zZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZFBhdHRlcm4ucHJvdG90eXBlKSwgXCJzdGF0ZVwiLCBtYXNrZWRTdGF0ZSwgdGhpcywgdHJ1ZSk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJyZXNldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXNldCgpIHtcbiAgICAgIF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZFBhdHRlcm4ucHJvdG90eXBlKSwgXCJyZXNldFwiLCB0aGlzKS5jYWxsKHRoaXMpO1xuXG4gICAgICB0aGlzLl9ibG9ja3MuZm9yRWFjaChmdW5jdGlvbiAoYikge1xuICAgICAgICByZXR1cm4gYi5yZXNldCgpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJpc0NvbXBsZXRlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fYmxvY2tzLmV2ZXJ5KGZ1bmN0aW9uIChiKSB7XG4gICAgICAgIHJldHVybiBiLmlzQ29tcGxldGU7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRvQ29tbWl0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRvQ29tbWl0KCkge1xuICAgICAgdGhpcy5fYmxvY2tzLmZvckVhY2goZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgcmV0dXJuIGIuZG9Db21taXQoKTtcbiAgICAgIH0pO1xuXG4gICAgICBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWRQYXR0ZXJuLnByb3RvdHlwZSksIFwiZG9Db21taXRcIiwgdGhpcykuY2FsbCh0aGlzKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInVubWFza2VkVmFsdWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9ibG9ja3MucmVkdWNlKGZ1bmN0aW9uIChzdHIsIGIpIHtcbiAgICAgICAgcmV0dXJuIHN0ciArPSBiLnVubWFza2VkVmFsdWU7XG4gICAgICB9LCAnJyk7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh1bm1hc2tlZFZhbHVlKSB7XG4gICAgICBfc2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWRQYXR0ZXJuLnByb3RvdHlwZSksIFwidW5tYXNrZWRWYWx1ZVwiLCB1bm1hc2tlZFZhbHVlLCB0aGlzLCB0cnVlKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInZhbHVlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAvLyBUT0RPIHJldHVybiBfdmFsdWUgd2hlbiBub3QgaW4gY2hhbmdlP1xuICAgICAgcmV0dXJuIHRoaXMuX2Jsb2Nrcy5yZWR1Y2UoZnVuY3Rpb24gKHN0ciwgYikge1xuICAgICAgICByZXR1cm4gc3RyICs9IGIudmFsdWU7XG4gICAgICB9LCAnJyk7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgX3NldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkUGF0dGVybi5wcm90b3R5cGUpLCBcInZhbHVlXCIsIHZhbHVlLCB0aGlzLCB0cnVlKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImFwcGVuZFRhaWxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYXBwZW5kVGFpbCh0YWlsKSB7XG4gICAgICByZXR1cm4gX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkUGF0dGVybi5wcm90b3R5cGUpLCBcImFwcGVuZFRhaWxcIiwgdGhpcykuY2FsbCh0aGlzLCB0YWlsKS5hZ2dyZWdhdGUodGhpcy5fYXBwZW5kUGxhY2Vob2xkZXIoKSk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfYXBwZW5kQ2hhclJhd1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfYXBwZW5kQ2hhclJhdyhjaCkge1xuICAgICAgdmFyIGZsYWdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuICAgICAgdmFyIGJsb2NrSXRlciA9IHRoaXMuX21hcFBvc1RvQmxvY2sodGhpcy52YWx1ZS5sZW5ndGgpO1xuXG4gICAgICB2YXIgZGV0YWlscyA9IG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgICBpZiAoIWJsb2NrSXRlcikgcmV0dXJuIGRldGFpbHM7XG5cbiAgICAgIGZvciAodmFyIGJpID0gYmxvY2tJdGVyLmluZGV4OzsgKytiaSkge1xuICAgICAgICB2YXIgX2Jsb2NrID0gdGhpcy5fYmxvY2tzW2JpXTtcbiAgICAgICAgaWYgKCFfYmxvY2spIGJyZWFrO1xuXG4gICAgICAgIHZhciBibG9ja0RldGFpbHMgPSBfYmxvY2suX2FwcGVuZENoYXIoY2gsIGZsYWdzKTtcblxuICAgICAgICB2YXIgc2tpcCA9IGJsb2NrRGV0YWlscy5za2lwO1xuICAgICAgICBkZXRhaWxzLmFnZ3JlZ2F0ZShibG9ja0RldGFpbHMpO1xuICAgICAgICBpZiAoc2tpcCB8fCBibG9ja0RldGFpbHMucmF3SW5zZXJ0ZWQpIGJyZWFrOyAvLyBnbyBuZXh0IGNoYXJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRldGFpbHM7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJleHRyYWN0VGFpbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBleHRyYWN0VGFpbCgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgZnJvbVBvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogMDtcbiAgICAgIHZhciB0b1BvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdGhpcy52YWx1ZS5sZW5ndGg7XG4gICAgICB2YXIgY2h1bmtUYWlsID0gbmV3IENodW5rc1RhaWxEZXRhaWxzKCk7XG4gICAgICBpZiAoZnJvbVBvcyA9PT0gdG9Qb3MpIHJldHVybiBjaHVua1RhaWw7XG5cbiAgICAgIHRoaXMuX2ZvckVhY2hCbG9ja3NJblJhbmdlKGZyb21Qb3MsIHRvUG9zLCBmdW5jdGlvbiAoYiwgYmksIGJGcm9tUG9zLCBiVG9Qb3MpIHtcbiAgICAgICAgdmFyIGJsb2NrQ2h1bmsgPSBiLmV4dHJhY3RUYWlsKGJGcm9tUG9zLCBiVG9Qb3MpO1xuICAgICAgICBibG9ja0NodW5rLnN0b3AgPSBfdGhpczIuX2ZpbmRTdG9wQmVmb3JlKGJpKTtcbiAgICAgICAgYmxvY2tDaHVuay5mcm9tID0gX3RoaXMyLl9ibG9ja1N0YXJ0UG9zKGJpKTtcbiAgICAgICAgaWYgKGJsb2NrQ2h1bmsgaW5zdGFuY2VvZiBDaHVua3NUYWlsRGV0YWlscykgYmxvY2tDaHVuay5ibG9ja0luZGV4ID0gYmk7XG4gICAgICAgIGNodW5rVGFpbC5leHRlbmQoYmxvY2tDaHVuayk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGNodW5rVGFpbDtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImV4dHJhY3RJbnB1dFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBleHRyYWN0SW5wdXQoKSB7XG4gICAgICB2YXIgZnJvbVBvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogMDtcbiAgICAgIHZhciB0b1BvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdGhpcy52YWx1ZS5sZW5ndGg7XG4gICAgICB2YXIgZmxhZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICAgICAgaWYgKGZyb21Qb3MgPT09IHRvUG9zKSByZXR1cm4gJyc7XG4gICAgICB2YXIgaW5wdXQgPSAnJztcblxuICAgICAgdGhpcy5fZm9yRWFjaEJsb2Nrc0luUmFuZ2UoZnJvbVBvcywgdG9Qb3MsIGZ1bmN0aW9uIChiLCBfLCBmcm9tUG9zLCB0b1Bvcykge1xuICAgICAgICBpbnB1dCArPSBiLmV4dHJhY3RJbnB1dChmcm9tUG9zLCB0b1BvcywgZmxhZ3MpO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBpbnB1dDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2ZpbmRTdG9wQmVmb3JlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9maW5kU3RvcEJlZm9yZShibG9ja0luZGV4KSB7XG4gICAgICB2YXIgc3RvcEJlZm9yZTtcblxuICAgICAgZm9yICh2YXIgc2kgPSAwOyBzaSA8IHRoaXMuX3N0b3BzLmxlbmd0aDsgKytzaSkge1xuICAgICAgICB2YXIgc3RvcCA9IHRoaXMuX3N0b3BzW3NpXTtcbiAgICAgICAgaWYgKHN0b3AgPD0gYmxvY2tJbmRleCkgc3RvcEJlZm9yZSA9IHN0b3A7ZWxzZSBicmVhaztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN0b3BCZWZvcmU7XG4gICAgfVxuICAgIC8qKiBBcHBlbmRzIHBsYWNlaG9sZGVyIGRlcGVuZGluZyBvbiBsYXppbmVzcyAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX2FwcGVuZFBsYWNlaG9sZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9hcHBlbmRQbGFjZWhvbGRlcih0b0Jsb2NrSW5kZXgpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICB2YXIgZGV0YWlscyA9IG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgICBpZiAodGhpcy5sYXp5ICYmIHRvQmxvY2tJbmRleCA9PSBudWxsKSByZXR1cm4gZGV0YWlscztcblxuICAgICAgdmFyIHN0YXJ0QmxvY2tJdGVyID0gdGhpcy5fbWFwUG9zVG9CbG9jayh0aGlzLnZhbHVlLmxlbmd0aCk7XG5cbiAgICAgIGlmICghc3RhcnRCbG9ja0l0ZXIpIHJldHVybiBkZXRhaWxzO1xuICAgICAgdmFyIHN0YXJ0QmxvY2tJbmRleCA9IHN0YXJ0QmxvY2tJdGVyLmluZGV4O1xuICAgICAgdmFyIGVuZEJsb2NrSW5kZXggPSB0b0Jsb2NrSW5kZXggIT0gbnVsbCA/IHRvQmxvY2tJbmRleCA6IHRoaXMuX2Jsb2Nrcy5sZW5ndGg7XG5cbiAgICAgIHRoaXMuX2Jsb2Nrcy5zbGljZShzdGFydEJsb2NrSW5kZXgsIGVuZEJsb2NrSW5kZXgpLmZvckVhY2goZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgaWYgKCFiLmxhenkgfHwgdG9CbG9ja0luZGV4ICE9IG51bGwpIHtcbiAgICAgICAgICAvLyAkRmxvd0ZpeE1lIGBfYmxvY2tzYCBtYXkgbm90IGJlIHByZXNlbnRcbiAgICAgICAgICB2YXIgYXJncyA9IGIuX2Jsb2NrcyAhPSBudWxsID8gW2IuX2Jsb2Nrcy5sZW5ndGhdIDogW107XG5cbiAgICAgICAgICB2YXIgYkRldGFpbHMgPSBiLl9hcHBlbmRQbGFjZWhvbGRlci5hcHBseShiLCBhcmdzKTtcblxuICAgICAgICAgIF90aGlzMy5fdmFsdWUgKz0gYkRldGFpbHMuaW5zZXJ0ZWQ7XG4gICAgICAgICAgZGV0YWlscy5hZ2dyZWdhdGUoYkRldGFpbHMpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGRldGFpbHM7XG4gICAgfVxuICAgIC8qKiBGaW5kcyBibG9jayBpbiBwb3MgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9tYXBQb3NUb0Jsb2NrXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9tYXBQb3NUb0Jsb2NrKHBvcykge1xuICAgICAgdmFyIGFjY1ZhbCA9ICcnO1xuXG4gICAgICBmb3IgKHZhciBiaSA9IDA7IGJpIDwgdGhpcy5fYmxvY2tzLmxlbmd0aDsgKytiaSkge1xuICAgICAgICB2YXIgX2Jsb2NrMiA9IHRoaXMuX2Jsb2Nrc1tiaV07XG4gICAgICAgIHZhciBibG9ja1N0YXJ0UG9zID0gYWNjVmFsLmxlbmd0aDtcbiAgICAgICAgYWNjVmFsICs9IF9ibG9jazIudmFsdWU7XG5cbiAgICAgICAgaWYgKHBvcyA8PSBhY2NWYWwubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGluZGV4OiBiaSxcbiAgICAgICAgICAgIG9mZnNldDogcG9zIC0gYmxvY2tTdGFydFBvc1xuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLyoqICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfYmxvY2tTdGFydFBvc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfYmxvY2tTdGFydFBvcyhibG9ja0luZGV4KSB7XG4gICAgICByZXR1cm4gdGhpcy5fYmxvY2tzLnNsaWNlKDAsIGJsb2NrSW5kZXgpLnJlZHVjZShmdW5jdGlvbiAocG9zLCBiKSB7XG4gICAgICAgIHJldHVybiBwb3MgKz0gYi52YWx1ZS5sZW5ndGg7XG4gICAgICB9LCAwKTtcbiAgICB9XG4gICAgLyoqICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfZm9yRWFjaEJsb2Nrc0luUmFuZ2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2ZvckVhY2hCbG9ja3NJblJhbmdlKGZyb21Qb3MpIHtcbiAgICAgIHZhciB0b1BvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdGhpcy52YWx1ZS5sZW5ndGg7XG4gICAgICB2YXIgZm4gPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZDtcblxuICAgICAgdmFyIGZyb21CbG9ja0l0ZXIgPSB0aGlzLl9tYXBQb3NUb0Jsb2NrKGZyb21Qb3MpO1xuXG4gICAgICBpZiAoZnJvbUJsb2NrSXRlcikge1xuICAgICAgICB2YXIgdG9CbG9ja0l0ZXIgPSB0aGlzLl9tYXBQb3NUb0Jsb2NrKHRvUG9zKTsgLy8gcHJvY2VzcyBmaXJzdCBibG9ja1xuXG5cbiAgICAgICAgdmFyIGlzU2FtZUJsb2NrID0gdG9CbG9ja0l0ZXIgJiYgZnJvbUJsb2NrSXRlci5pbmRleCA9PT0gdG9CbG9ja0l0ZXIuaW5kZXg7XG4gICAgICAgIHZhciBmcm9tQmxvY2tTdGFydFBvcyA9IGZyb21CbG9ja0l0ZXIub2Zmc2V0O1xuICAgICAgICB2YXIgZnJvbUJsb2NrRW5kUG9zID0gdG9CbG9ja0l0ZXIgJiYgaXNTYW1lQmxvY2sgPyB0b0Jsb2NrSXRlci5vZmZzZXQgOiB0aGlzLl9ibG9ja3NbZnJvbUJsb2NrSXRlci5pbmRleF0udmFsdWUubGVuZ3RoO1xuICAgICAgICBmbih0aGlzLl9ibG9ja3NbZnJvbUJsb2NrSXRlci5pbmRleF0sIGZyb21CbG9ja0l0ZXIuaW5kZXgsIGZyb21CbG9ja1N0YXJ0UG9zLCBmcm9tQmxvY2tFbmRQb3MpO1xuXG4gICAgICAgIGlmICh0b0Jsb2NrSXRlciAmJiAhaXNTYW1lQmxvY2spIHtcbiAgICAgICAgICAvLyBwcm9jZXNzIGludGVybWVkaWF0ZSBibG9ja3NcbiAgICAgICAgICBmb3IgKHZhciBiaSA9IGZyb21CbG9ja0l0ZXIuaW5kZXggKyAxOyBiaSA8IHRvQmxvY2tJdGVyLmluZGV4OyArK2JpKSB7XG4gICAgICAgICAgICBmbih0aGlzLl9ibG9ja3NbYmldLCBiaSwgMCwgdGhpcy5fYmxvY2tzW2JpXS52YWx1ZS5sZW5ndGgpO1xuICAgICAgICAgIH0gLy8gcHJvY2VzcyBsYXN0IGJsb2NrXG5cblxuICAgICAgICAgIGZuKHRoaXMuX2Jsb2Nrc1t0b0Jsb2NrSXRlci5pbmRleF0sIHRvQmxvY2tJdGVyLmluZGV4LCAwLCB0b0Jsb2NrSXRlci5vZmZzZXQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJyZW1vdmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgdmFyIGZyb21Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDA7XG4gICAgICB2YXIgdG9Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRoaXMudmFsdWUubGVuZ3RoO1xuXG4gICAgICB2YXIgcmVtb3ZlRGV0YWlscyA9IF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZFBhdHRlcm4ucHJvdG90eXBlKSwgXCJyZW1vdmVcIiwgdGhpcykuY2FsbCh0aGlzLCBmcm9tUG9zLCB0b1Bvcyk7XG5cbiAgICAgIHRoaXMuX2ZvckVhY2hCbG9ja3NJblJhbmdlKGZyb21Qb3MsIHRvUG9zLCBmdW5jdGlvbiAoYiwgXywgYkZyb21Qb3MsIGJUb1Bvcykge1xuICAgICAgICByZW1vdmVEZXRhaWxzLmFnZ3JlZ2F0ZShiLnJlbW92ZShiRnJvbVBvcywgYlRvUG9zKSk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHJlbW92ZURldGFpbHM7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJuZWFyZXN0SW5wdXRQb3NcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbmVhcmVzdElucHV0UG9zKGN1cnNvclBvcykge1xuICAgICAgdmFyIGRpcmVjdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogRElSRUNUSU9OLk5PTkU7XG4gICAgICAvLyBUT0RPIHJlZmFjdG9yIC0gZXh0cmFjdCBhbGlnbmJsb2NrXG4gICAgICB2YXIgYmVnaW5CbG9ja0RhdGEgPSB0aGlzLl9tYXBQb3NUb0Jsb2NrKGN1cnNvclBvcykgfHwge1xuICAgICAgICBpbmRleDogMCxcbiAgICAgICAgb2Zmc2V0OiAwXG4gICAgICB9O1xuICAgICAgdmFyIGJlZ2luQmxvY2tPZmZzZXQgPSBiZWdpbkJsb2NrRGF0YS5vZmZzZXQsXG4gICAgICAgICAgYmVnaW5CbG9ja0luZGV4ID0gYmVnaW5CbG9ja0RhdGEuaW5kZXg7XG4gICAgICB2YXIgYmVnaW5CbG9jayA9IHRoaXMuX2Jsb2Nrc1tiZWdpbkJsb2NrSW5kZXhdO1xuICAgICAgaWYgKCFiZWdpbkJsb2NrKSByZXR1cm4gY3Vyc29yUG9zO1xuICAgICAgdmFyIGJlZ2luQmxvY2tDdXJzb3JQb3MgPSBiZWdpbkJsb2NrT2Zmc2V0OyAvLyBpZiBwb3NpdGlvbiBpbnNpZGUgYmxvY2sgLSB0cnkgdG8gYWRqdXN0IGl0XG5cbiAgICAgIGlmIChiZWdpbkJsb2NrQ3Vyc29yUG9zICE9PSAwICYmIGJlZ2luQmxvY2tDdXJzb3JQb3MgPCBiZWdpbkJsb2NrLnZhbHVlLmxlbmd0aCkge1xuICAgICAgICBiZWdpbkJsb2NrQ3Vyc29yUG9zID0gYmVnaW5CbG9jay5uZWFyZXN0SW5wdXRQb3MoYmVnaW5CbG9ja09mZnNldCwgZm9yY2VEaXJlY3Rpb24oZGlyZWN0aW9uKSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBjdXJzb3JBdFJpZ2h0ID0gYmVnaW5CbG9ja0N1cnNvclBvcyA9PT0gYmVnaW5CbG9jay52YWx1ZS5sZW5ndGg7XG4gICAgICB2YXIgY3Vyc29yQXRMZWZ0ID0gYmVnaW5CbG9ja0N1cnNvclBvcyA9PT0gMDsgLy8gIGN1cnNvciBpcyBJTlNJREUgZmlyc3QgYmxvY2sgKG5vdCBhdCBib3VuZHMpXG5cbiAgICAgIGlmICghY3Vyc29yQXRMZWZ0ICYmICFjdXJzb3JBdFJpZ2h0KSByZXR1cm4gdGhpcy5fYmxvY2tTdGFydFBvcyhiZWdpbkJsb2NrSW5kZXgpICsgYmVnaW5CbG9ja0N1cnNvclBvcztcbiAgICAgIHZhciBzZWFyY2hCbG9ja0luZGV4ID0gY3Vyc29yQXRSaWdodCA/IGJlZ2luQmxvY2tJbmRleCArIDEgOiBiZWdpbkJsb2NrSW5kZXg7XG5cbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IERJUkVDVElPTi5OT05FKSB7XG4gICAgICAgIC8vIE5PTkUgZGlyZWN0aW9uIHVzZWQgdG8gY2FsY3VsYXRlIHN0YXJ0IGlucHV0IHBvc2l0aW9uIGlmIG5vIGNoYXJzIHdlcmUgcmVtb3ZlZFxuICAgICAgICAvLyBGT1IgTk9ORTpcbiAgICAgICAgLy8gLVxuICAgICAgICAvLyBpbnB1dHxhbnlcbiAgICAgICAgLy8gLT5cbiAgICAgICAgLy8gIGFueXxpbnB1dFxuICAgICAgICAvLyA8LVxuICAgICAgICAvLyAgZmlsbGVkLWlucHV0fGFueVxuICAgICAgICAvLyBjaGVjayBpZiBmaXJzdCBibG9jayBhdCBsZWZ0IGlzIGlucHV0XG4gICAgICAgIGlmIChzZWFyY2hCbG9ja0luZGV4ID4gMCkge1xuICAgICAgICAgIHZhciBibG9ja0luZGV4QXRMZWZ0ID0gc2VhcmNoQmxvY2tJbmRleCAtIDE7XG4gICAgICAgICAgdmFyIGJsb2NrQXRMZWZ0ID0gdGhpcy5fYmxvY2tzW2Jsb2NrSW5kZXhBdExlZnRdO1xuICAgICAgICAgIHZhciBibG9ja0lucHV0UG9zID0gYmxvY2tBdExlZnQubmVhcmVzdElucHV0UG9zKDAsIERJUkVDVElPTi5OT05FKTsgLy8gaXMgaW5wdXRcblxuICAgICAgICAgIGlmICghYmxvY2tBdExlZnQudmFsdWUubGVuZ3RoIHx8IGJsb2NrSW5wdXRQb3MgIT09IGJsb2NrQXRMZWZ0LnZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Jsb2NrU3RhcnRQb3Moc2VhcmNoQmxvY2tJbmRleCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vIC0+XG5cblxuICAgICAgICB2YXIgZmlyc3RJbnB1dEF0UmlnaHQgPSBzZWFyY2hCbG9ja0luZGV4O1xuXG4gICAgICAgIGZvciAodmFyIGJpID0gZmlyc3RJbnB1dEF0UmlnaHQ7IGJpIDwgdGhpcy5fYmxvY2tzLmxlbmd0aDsgKytiaSkge1xuICAgICAgICAgIHZhciBibG9ja0F0UmlnaHQgPSB0aGlzLl9ibG9ja3NbYmldO1xuXG4gICAgICAgICAgdmFyIF9ibG9ja0lucHV0UG9zID0gYmxvY2tBdFJpZ2h0Lm5lYXJlc3RJbnB1dFBvcygwLCBESVJFQ1RJT04uTk9ORSk7XG5cbiAgICAgICAgICBpZiAoIWJsb2NrQXRSaWdodC52YWx1ZS5sZW5ndGggfHwgX2Jsb2NrSW5wdXRQb3MgIT09IGJsb2NrQXRSaWdodC52YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9ibG9ja1N0YXJ0UG9zKGJpKSArIF9ibG9ja0lucHV0UG9zO1xuICAgICAgICAgIH1cbiAgICAgICAgfSAvLyA8LVxuICAgICAgICAvLyBmaW5kIGZpcnN0IG5vbi1maXhlZCBzeW1ib2xcblxuXG4gICAgICAgIGZvciAodmFyIF9iaSA9IHNlYXJjaEJsb2NrSW5kZXggLSAxOyBfYmkgPj0gMDsgLS1fYmkpIHtcbiAgICAgICAgICB2YXIgX2Jsb2NrMyA9IHRoaXMuX2Jsb2Nrc1tfYmldO1xuXG4gICAgICAgICAgdmFyIF9ibG9ja0lucHV0UG9zMiA9IF9ibG9jazMubmVhcmVzdElucHV0UG9zKDAsIERJUkVDVElPTi5OT05FKTsgLy8gaXMgaW5wdXRcblxuXG4gICAgICAgICAgaWYgKCFfYmxvY2szLnZhbHVlLmxlbmd0aCB8fCBfYmxvY2tJbnB1dFBvczIgIT09IF9ibG9jazMudmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYmxvY2tTdGFydFBvcyhfYmkpICsgX2Jsb2NrMy52YWx1ZS5sZW5ndGg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGN1cnNvclBvcztcbiAgICAgIH1cblxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLkxFRlQgfHwgZGlyZWN0aW9uID09PSBESVJFQ1RJT04uRk9SQ0VfTEVGVCkge1xuICAgICAgICAvLyAtXG4gICAgICAgIC8vICBhbnl8ZmlsbGVkLWlucHV0XG4gICAgICAgIC8vIDwtXG4gICAgICAgIC8vICBhbnl8Zmlyc3Qgbm90IGVtcHR5IGlzIG5vdC1sZW4tYWxpZ25lZFxuICAgICAgICAvLyAgbm90LTAtYWxpZ25lZHxhbnlcbiAgICAgICAgLy8gLT5cbiAgICAgICAgLy8gIGFueXxub3QtbGVuLWFsaWduZWQgb3IgZW5kXG4gICAgICAgIC8vIGNoZWNrIGlmIGZpcnN0IGJsb2NrIGF0IHJpZ2h0IGlzIGZpbGxlZCBpbnB1dFxuICAgICAgICB2YXIgZmlyc3RGaWxsZWRCbG9ja0luZGV4QXRSaWdodDtcblxuICAgICAgICBmb3IgKHZhciBfYmkyID0gc2VhcmNoQmxvY2tJbmRleDsgX2JpMiA8IHRoaXMuX2Jsb2Nrcy5sZW5ndGg7ICsrX2JpMikge1xuICAgICAgICAgIGlmICh0aGlzLl9ibG9ja3NbX2JpMl0udmFsdWUpIHtcbiAgICAgICAgICAgIGZpcnN0RmlsbGVkQmxvY2tJbmRleEF0UmlnaHQgPSBfYmkyO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZpcnN0RmlsbGVkQmxvY2tJbmRleEF0UmlnaHQgIT0gbnVsbCkge1xuICAgICAgICAgIHZhciBmaWxsZWRCbG9jayA9IHRoaXMuX2Jsb2Nrc1tmaXJzdEZpbGxlZEJsb2NrSW5kZXhBdFJpZ2h0XTtcblxuICAgICAgICAgIHZhciBfYmxvY2tJbnB1dFBvczMgPSBmaWxsZWRCbG9jay5uZWFyZXN0SW5wdXRQb3MoMCwgRElSRUNUSU9OLlJJR0hUKTtcblxuICAgICAgICAgIGlmIChfYmxvY2tJbnB1dFBvczMgPT09IDAgJiYgZmlsbGVkQmxvY2sudW5tYXNrZWRWYWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIGZpbGxlZCBibG9jayBpcyBpbnB1dFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Jsb2NrU3RhcnRQb3MoZmlyc3RGaWxsZWRCbG9ja0luZGV4QXRSaWdodCkgKyBfYmxvY2tJbnB1dFBvczM7XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vIDwtXG4gICAgICAgIC8vIGZpbmQgdGhpcyB2YXJzXG5cblxuICAgICAgICB2YXIgZmlyc3RGaWxsZWRJbnB1dEJsb2NrSW5kZXggPSAtMTtcbiAgICAgICAgdmFyIGZpcnN0RW1wdHlJbnB1dEJsb2NrSW5kZXg7IC8vIFRPRE8gY29uc2lkZXIgbmVzdGVkIGVtcHR5IGlucHV0c1xuXG4gICAgICAgIGZvciAodmFyIF9iaTMgPSBzZWFyY2hCbG9ja0luZGV4IC0gMTsgX2JpMyA+PSAwOyAtLV9iaTMpIHtcbiAgICAgICAgICB2YXIgX2Jsb2NrNCA9IHRoaXMuX2Jsb2Nrc1tfYmkzXTtcblxuICAgICAgICAgIHZhciBfYmxvY2tJbnB1dFBvczQgPSBfYmxvY2s0Lm5lYXJlc3RJbnB1dFBvcyhfYmxvY2s0LnZhbHVlLmxlbmd0aCwgRElSRUNUSU9OLkZPUkNFX0xFRlQpO1xuXG4gICAgICAgICAgaWYgKCFfYmxvY2s0LnZhbHVlIHx8IF9ibG9ja0lucHV0UG9zNCAhPT0gMCkgZmlyc3RFbXB0eUlucHV0QmxvY2tJbmRleCA9IF9iaTM7XG5cbiAgICAgICAgICBpZiAoX2Jsb2NrSW5wdXRQb3M0ICE9PSAwKSB7XG4gICAgICAgICAgICBpZiAoX2Jsb2NrSW5wdXRQb3M0ICE9PSBfYmxvY2s0LnZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAvLyBhbGlnbmVkIGluc2lkZSBibG9jayAtIHJldHVybiBpbW1lZGlhdGVseVxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fYmxvY2tTdGFydFBvcyhfYmkzKSArIF9ibG9ja0lucHV0UG9zNDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIGZvdW5kIGZpbGxlZFxuICAgICAgICAgICAgICBmaXJzdEZpbGxlZElucHV0QmxvY2tJbmRleCA9IF9iaTM7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09IERJUkVDVElPTi5MRUZUKSB7XG4gICAgICAgICAgLy8gdHJ5IGZpbmQgZmlyc3QgZW1wdHkgaW5wdXQgYmVmb3JlIHN0YXJ0IHNlYXJjaGluZyBwb3NpdGlvbiBvbmx5IHdoZW4gbm90IGZvcmNlZFxuICAgICAgICAgIGZvciAodmFyIF9iaTQgPSBmaXJzdEZpbGxlZElucHV0QmxvY2tJbmRleCArIDE7IF9iaTQgPD0gTWF0aC5taW4oc2VhcmNoQmxvY2tJbmRleCwgdGhpcy5fYmxvY2tzLmxlbmd0aCAtIDEpOyArK19iaTQpIHtcbiAgICAgICAgICAgIHZhciBfYmxvY2s1ID0gdGhpcy5fYmxvY2tzW19iaTRdO1xuXG4gICAgICAgICAgICB2YXIgX2Jsb2NrSW5wdXRQb3M1ID0gX2Jsb2NrNS5uZWFyZXN0SW5wdXRQb3MoMCwgRElSRUNUSU9OLk5PTkUpO1xuXG4gICAgICAgICAgICB2YXIgYmxvY2tBbGlnbmVkUG9zID0gdGhpcy5fYmxvY2tTdGFydFBvcyhfYmk0KSArIF9ibG9ja0lucHV0UG9zNTtcblxuICAgICAgICAgICAgaWYgKGJsb2NrQWxpZ25lZFBvcyA+IGN1cnNvclBvcykgYnJlYWs7IC8vIGlmIGJsb2NrIGlzIG5vdCBsYXp5IGlucHV0XG5cbiAgICAgICAgICAgIGlmIChfYmxvY2tJbnB1dFBvczUgIT09IF9ibG9jazUudmFsdWUubGVuZ3RoKSByZXR1cm4gYmxvY2tBbGlnbmVkUG9zO1xuICAgICAgICAgIH1cbiAgICAgICAgfSAvLyBwcm9jZXNzIG92ZXJmbG93XG5cblxuICAgICAgICBpZiAoZmlyc3RGaWxsZWRJbnB1dEJsb2NrSW5kZXggPj0gMCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9ibG9ja1N0YXJ0UG9zKGZpcnN0RmlsbGVkSW5wdXRCbG9ja0luZGV4KSArIHRoaXMuX2Jsb2Nrc1tmaXJzdEZpbGxlZElucHV0QmxvY2tJbmRleF0udmFsdWUubGVuZ3RoO1xuICAgICAgICB9IC8vIGZvciBsYXp5IGlmIGhhcyBhbGlnbmVkIGxlZnQgaW5zaWRlIGZpeGVkIGFuZCBoYXMgY2FtZSB0byB0aGUgc3RhcnQgLSB1c2Ugc3RhcnQgcG9zaXRpb25cblxuXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09IERJUkVDVElPTi5GT1JDRV9MRUZUIHx8IHRoaXMubGF6eSAmJiAhdGhpcy5leHRyYWN0SW5wdXQoKSAmJiAhaXNJbnB1dCh0aGlzLl9ibG9ja3Nbc2VhcmNoQmxvY2tJbmRleF0pKSB7XG4gICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZmlyc3RFbXB0eUlucHV0QmxvY2tJbmRleCAhPSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2Jsb2NrU3RhcnRQb3MoZmlyc3RFbXB0eUlucHV0QmxvY2tJbmRleCk7XG4gICAgICAgIH0gLy8gZmluZCBmaXJzdCBpbnB1dFxuXG5cbiAgICAgICAgZm9yICh2YXIgX2JpNSA9IHNlYXJjaEJsb2NrSW5kZXg7IF9iaTUgPCB0aGlzLl9ibG9ja3MubGVuZ3RoOyArK19iaTUpIHtcbiAgICAgICAgICB2YXIgX2Jsb2NrNiA9IHRoaXMuX2Jsb2Nrc1tfYmk1XTtcblxuICAgICAgICAgIHZhciBfYmxvY2tJbnB1dFBvczYgPSBfYmxvY2s2Lm5lYXJlc3RJbnB1dFBvcygwLCBESVJFQ1RJT04uTk9ORSk7IC8vIGlzIGlucHV0XG5cblxuICAgICAgICAgIGlmICghX2Jsb2NrNi52YWx1ZS5sZW5ndGggfHwgX2Jsb2NrSW5wdXRQb3M2ICE9PSBfYmxvY2s2LnZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Jsb2NrU3RhcnRQb3MoX2JpNSkgKyBfYmxvY2tJbnB1dFBvczY7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG5cbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IERJUkVDVElPTi5SSUdIVCB8fCBkaXJlY3Rpb24gPT09IERJUkVDVElPTi5GT1JDRV9SSUdIVCkge1xuICAgICAgICAvLyAtPlxuICAgICAgICAvLyAgYW55fG5vdC1sZW4tYWxpZ25lZCBhbmQgZmlsbGVkXG4gICAgICAgIC8vICBhbnl8bm90LWxlbi1hbGlnbmVkXG4gICAgICAgIC8vIDwtXG4gICAgICAgIC8vICBub3QtMC1hbGlnbmVkIG9yIHN0YXJ0fGFueVxuICAgICAgICB2YXIgZmlyc3RJbnB1dEJsb2NrQWxpZ25lZEluZGV4O1xuICAgICAgICB2YXIgZmlyc3RJbnB1dEJsb2NrQWxpZ25lZFBvcztcblxuICAgICAgICBmb3IgKHZhciBfYmk2ID0gc2VhcmNoQmxvY2tJbmRleDsgX2JpNiA8IHRoaXMuX2Jsb2Nrcy5sZW5ndGg7ICsrX2JpNikge1xuICAgICAgICAgIHZhciBfYmxvY2s3ID0gdGhpcy5fYmxvY2tzW19iaTZdO1xuXG4gICAgICAgICAgdmFyIF9ibG9ja0lucHV0UG9zNyA9IF9ibG9jazcubmVhcmVzdElucHV0UG9zKDAsIERJUkVDVElPTi5OT05FKTtcblxuICAgICAgICAgIGlmIChfYmxvY2tJbnB1dFBvczcgIT09IF9ibG9jazcudmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICBmaXJzdElucHV0QmxvY2tBbGlnbmVkUG9zID0gdGhpcy5fYmxvY2tTdGFydFBvcyhfYmk2KSArIF9ibG9ja0lucHV0UG9zNztcbiAgICAgICAgICAgIGZpcnN0SW5wdXRCbG9ja0FsaWduZWRJbmRleCA9IF9iaTY7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZmlyc3RJbnB1dEJsb2NrQWxpZ25lZEluZGV4ICE9IG51bGwgJiYgZmlyc3RJbnB1dEJsb2NrQWxpZ25lZFBvcyAhPSBudWxsKSB7XG4gICAgICAgICAgZm9yICh2YXIgX2JpNyA9IGZpcnN0SW5wdXRCbG9ja0FsaWduZWRJbmRleDsgX2JpNyA8IHRoaXMuX2Jsb2Nrcy5sZW5ndGg7ICsrX2JpNykge1xuICAgICAgICAgICAgdmFyIF9ibG9jazggPSB0aGlzLl9ibG9ja3NbX2JpN107XG5cbiAgICAgICAgICAgIHZhciBfYmxvY2tJbnB1dFBvczggPSBfYmxvY2s4Lm5lYXJlc3RJbnB1dFBvcygwLCBESVJFQ1RJT04uRk9SQ0VfUklHSFQpO1xuXG4gICAgICAgICAgICBpZiAoX2Jsb2NrSW5wdXRQb3M4ICE9PSBfYmxvY2s4LnZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fYmxvY2tTdGFydFBvcyhfYmk3KSArIF9ibG9ja0lucHV0UG9zODtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gZGlyZWN0aW9uID09PSBESVJFQ1RJT04uRk9SQ0VfUklHSFQgPyB0aGlzLnZhbHVlLmxlbmd0aCA6IGZpcnN0SW5wdXRCbG9ja0FsaWduZWRQb3M7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBfYmk4ID0gTWF0aC5taW4oc2VhcmNoQmxvY2tJbmRleCwgdGhpcy5fYmxvY2tzLmxlbmd0aCAtIDEpOyBfYmk4ID49IDA7IC0tX2JpOCkge1xuICAgICAgICAgIHZhciBfYmxvY2s5ID0gdGhpcy5fYmxvY2tzW19iaThdO1xuXG4gICAgICAgICAgdmFyIF9ibG9ja0lucHV0UG9zOSA9IF9ibG9jazkubmVhcmVzdElucHV0UG9zKF9ibG9jazkudmFsdWUubGVuZ3RoLCBESVJFQ1RJT04uTEVGVCk7XG5cbiAgICAgICAgICBpZiAoX2Jsb2NrSW5wdXRQb3M5ICE9PSAwKSB7XG4gICAgICAgICAgICB2YXIgYWxpZ25lZFBvcyA9IHRoaXMuX2Jsb2NrU3RhcnRQb3MoX2JpOCkgKyBfYmxvY2tJbnB1dFBvczk7XG5cbiAgICAgICAgICAgIGlmIChhbGlnbmVkUG9zID49IGN1cnNvclBvcykgcmV0dXJuIGFsaWduZWRQb3M7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGN1cnNvclBvcztcbiAgICB9XG4gICAgLyoqIEdldCBibG9jayBieSBuYW1lICovXG5cbiAgfSwge1xuICAgIGtleTogXCJtYXNrZWRCbG9ja1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtYXNrZWRCbG9jayhuYW1lKSB7XG4gICAgICByZXR1cm4gdGhpcy5tYXNrZWRCbG9ja3MobmFtZSlbMF07XG4gICAgfVxuICAgIC8qKiBHZXQgYWxsIGJsb2NrcyBieSBuYW1lICovXG5cbiAgfSwge1xuICAgIGtleTogXCJtYXNrZWRCbG9ja3NcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbWFza2VkQmxvY2tzKG5hbWUpIHtcbiAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICB2YXIgaW5kaWNlcyA9IHRoaXMuX21hc2tlZEJsb2Nrc1tuYW1lXTtcbiAgICAgIGlmICghaW5kaWNlcykgcmV0dXJuIFtdO1xuICAgICAgcmV0dXJuIGluZGljZXMubWFwKGZ1bmN0aW9uIChnaSkge1xuICAgICAgICByZXR1cm4gX3RoaXM0Ll9ibG9ja3NbZ2ldO1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1hc2tlZFBhdHRlcm47XG59KE1hc2tlZCk7XG5NYXNrZWRQYXR0ZXJuLkRFRkFVTFRTID0ge1xuICBsYXp5OiB0cnVlLFxuICBwbGFjZWhvbGRlckNoYXI6ICdfJ1xufTtcbk1hc2tlZFBhdHRlcm4uU1RPUF9DSEFSID0gJ2AnO1xuTWFza2VkUGF0dGVybi5FU0NBUEVfQ0hBUiA9ICdcXFxcJztcbk1hc2tlZFBhdHRlcm4uSW5wdXREZWZpbml0aW9uID0gUGF0dGVybklucHV0RGVmaW5pdGlvbjtcbk1hc2tlZFBhdHRlcm4uRml4ZWREZWZpbml0aW9uID0gUGF0dGVybkZpeGVkRGVmaW5pdGlvbjtcblxuZnVuY3Rpb24gaXNJbnB1dChibG9jaykge1xuICBpZiAoIWJsb2NrKSByZXR1cm4gZmFsc2U7XG4gIHZhciB2YWx1ZSA9IGJsb2NrLnZhbHVlO1xuICByZXR1cm4gIXZhbHVlIHx8IGJsb2NrLm5lYXJlc3RJbnB1dFBvcygwLCBESVJFQ1RJT04uTk9ORSkgIT09IHZhbHVlLmxlbmd0aDtcbn1cblxuSU1hc2suTWFza2VkUGF0dGVybiA9IE1hc2tlZFBhdHRlcm47XG5cbmV4cG9ydCBkZWZhdWx0IE1hc2tlZFBhdHRlcm47XG4iLCJpbXBvcnQgeyBfIGFzIF9jcmVhdGVDbGFzcywgYSBhcyBfY2xhc3NDYWxsQ2hlY2ssIGIgYXMgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vLi4vX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycy02Y2NiMWY2NC5qcyc7XG5pbXBvcnQgQ2hhbmdlRGV0YWlscyBmcm9tICcuLi8uLi9jb3JlL2NoYW5nZS1kZXRhaWxzLmpzJztcbmltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vY29yZS91dGlscy5qcyc7XG5pbXBvcnQgQ29udGludW91c1RhaWxEZXRhaWxzIGZyb20gJy4uLy4uL2NvcmUvY29udGludW91cy10YWlsLWRldGFpbHMuanMnO1xuaW1wb3J0IElNYXNrIGZyb20gJy4uLy4uL2NvcmUvaG9sZGVyLmpzJztcblxudmFyIENodW5rc1RhaWxEZXRhaWxzID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgLyoqICovXG4gIGZ1bmN0aW9uIENodW5rc1RhaWxEZXRhaWxzKCkge1xuICAgIHZhciBjaHVua3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IFtdO1xuICAgIHZhciBmcm9tID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAwO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENodW5rc1RhaWxEZXRhaWxzKTtcblxuICAgIHRoaXMuY2h1bmtzID0gY2h1bmtzO1xuICAgIHRoaXMuZnJvbSA9IGZyb207XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQ2h1bmtzVGFpbERldGFpbHMsIFt7XG4gICAga2V5OiBcInRvU3RyaW5nXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgcmV0dXJuIHRoaXMuY2h1bmtzLm1hcChTdHJpbmcpLmpvaW4oJycpO1xuICAgIH0gLy8gJEZsb3dGaXhNZSBubyBpZGVhc1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZXh0ZW5kXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGV4dGVuZCh0YWlsQ2h1bmspIHtcbiAgICAgIGlmICghU3RyaW5nKHRhaWxDaHVuaykpIHJldHVybjtcbiAgICAgIGlmIChpc1N0cmluZyh0YWlsQ2h1bmspKSB0YWlsQ2h1bmsgPSBuZXcgQ29udGludW91c1RhaWxEZXRhaWxzKFN0cmluZyh0YWlsQ2h1bmspKTtcbiAgICAgIHZhciBsYXN0Q2h1bmsgPSB0aGlzLmNodW5rc1t0aGlzLmNodW5rcy5sZW5ndGggLSAxXTtcbiAgICAgIHZhciBleHRlbmRMYXN0ID0gbGFzdENodW5rICYmICggLy8gaWYgc3RvcHMgYXJlIHNhbWUgb3IgdGFpbCBoYXMgbm8gc3RvcFxuICAgICAgbGFzdENodW5rLnN0b3AgPT09IHRhaWxDaHVuay5zdG9wIHx8IHRhaWxDaHVuay5zdG9wID09IG51bGwpICYmIC8vIGlmIHRhaWwgY2h1bmsgZ29lcyBqdXN0IGFmdGVyIGxhc3QgY2h1bmtcbiAgICAgIHRhaWxDaHVuay5mcm9tID09PSBsYXN0Q2h1bmsuZnJvbSArIGxhc3RDaHVuay50b1N0cmluZygpLmxlbmd0aDtcblxuICAgICAgaWYgKHRhaWxDaHVuayBpbnN0YW5jZW9mIENvbnRpbnVvdXNUYWlsRGV0YWlscykge1xuICAgICAgICAvLyBjaGVjayB0aGUgYWJpbGl0eSB0byBleHRlbmQgcHJldmlvdXMgY2h1bmtcbiAgICAgICAgaWYgKGV4dGVuZExhc3QpIHtcbiAgICAgICAgICAvLyBleHRlbmQgcHJldmlvdXMgY2h1bmtcbiAgICAgICAgICBsYXN0Q2h1bmsuZXh0ZW5kKHRhaWxDaHVuay50b1N0cmluZygpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBhcHBlbmQgbmV3IGNodW5rXG4gICAgICAgICAgdGhpcy5jaHVua3MucHVzaCh0YWlsQ2h1bmspO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRhaWxDaHVuayBpbnN0YW5jZW9mIENodW5rc1RhaWxEZXRhaWxzKSB7XG4gICAgICAgIGlmICh0YWlsQ2h1bmsuc3RvcCA9PSBudWxsKSB7XG4gICAgICAgICAgLy8gdW53cmFwIGZsb2F0aW5nIGNodW5rcyB0byBwYXJlbnQsIGtlZXBpbmcgYGZyb21gIHBvc1xuICAgICAgICAgIHZhciBmaXJzdFRhaWxDaHVuaztcblxuICAgICAgICAgIHdoaWxlICh0YWlsQ2h1bmsuY2h1bmtzLmxlbmd0aCAmJiB0YWlsQ2h1bmsuY2h1bmtzWzBdLnN0b3AgPT0gbnVsbCkge1xuICAgICAgICAgICAgZmlyc3RUYWlsQ2h1bmsgPSB0YWlsQ2h1bmsuY2h1bmtzLnNoaWZ0KCk7XG4gICAgICAgICAgICBmaXJzdFRhaWxDaHVuay5mcm9tICs9IHRhaWxDaHVuay5mcm9tO1xuICAgICAgICAgICAgdGhpcy5leHRlbmQoZmlyc3RUYWlsQ2h1bmspO1xuICAgICAgICAgIH1cbiAgICAgICAgfSAvLyBpZiB0YWlsIGNodW5rIHN0aWxsIGhhcyB2YWx1ZVxuXG5cbiAgICAgICAgaWYgKHRhaWxDaHVuay50b1N0cmluZygpKSB7XG4gICAgICAgICAgLy8gaWYgY2h1bmtzIGNvbnRhaW5zIHN0b3BzLCB0aGVuIHBvcHVwIHN0b3AgdG8gY29udGFpbmVyXG4gICAgICAgICAgdGFpbENodW5rLnN0b3AgPSB0YWlsQ2h1bmsuYmxvY2tJbmRleDtcbiAgICAgICAgICB0aGlzLmNodW5rcy5wdXNoKHRhaWxDaHVuayk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYXBwZW5kVG9cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYXBwZW5kVG8obWFza2VkKSB7XG4gICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICBpZiAoIShtYXNrZWQgaW5zdGFuY2VvZiBJTWFzay5NYXNrZWRQYXR0ZXJuKSkge1xuICAgICAgICB2YXIgdGFpbCA9IG5ldyBDb250aW51b3VzVGFpbERldGFpbHModGhpcy50b1N0cmluZygpKTtcbiAgICAgICAgcmV0dXJuIHRhaWwuYXBwZW5kVG8obWFza2VkKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGRldGFpbHMgPSBuZXcgQ2hhbmdlRGV0YWlscygpO1xuXG4gICAgICBmb3IgKHZhciBjaSA9IDA7IGNpIDwgdGhpcy5jaHVua3MubGVuZ3RoICYmICFkZXRhaWxzLnNraXA7ICsrY2kpIHtcbiAgICAgICAgdmFyIGNodW5rID0gdGhpcy5jaHVua3NbY2ldO1xuXG4gICAgICAgIHZhciBsYXN0QmxvY2tJdGVyID0gbWFza2VkLl9tYXBQb3NUb0Jsb2NrKG1hc2tlZC52YWx1ZS5sZW5ndGgpO1xuXG4gICAgICAgIHZhciBzdG9wID0gY2h1bmsuc3RvcDtcbiAgICAgICAgdmFyIGNodW5rQmxvY2sgPSB2b2lkIDA7XG5cbiAgICAgICAgaWYgKHN0b3AgIT0gbnVsbCAmJiAoIC8vIGlmIGJsb2NrIG5vdCBmb3VuZCBvciBzdG9wIGlzIGJlaGluZCBsYXN0QmxvY2tcbiAgICAgICAgIWxhc3RCbG9ja0l0ZXIgfHwgbGFzdEJsb2NrSXRlci5pbmRleCA8PSBzdG9wKSkge1xuICAgICAgICAgIGlmIChjaHVuayBpbnN0YW5jZW9mIENodW5rc1RhaWxEZXRhaWxzIHx8IC8vIGZvciBjb250aW51b3VzIGJsb2NrIGFsc28gY2hlY2sgaWYgc3RvcCBpcyBleGlzdFxuICAgICAgICAgIG1hc2tlZC5fc3RvcHMuaW5kZXhPZihzdG9wKSA+PSAwKSB7XG4gICAgICAgICAgICBkZXRhaWxzLmFnZ3JlZ2F0ZShtYXNrZWQuX2FwcGVuZFBsYWNlaG9sZGVyKHN0b3ApKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjaHVua0Jsb2NrID0gY2h1bmsgaW5zdGFuY2VvZiBDaHVua3NUYWlsRGV0YWlscyAmJiBtYXNrZWQuX2Jsb2Nrc1tzdG9wXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaHVua0Jsb2NrKSB7XG4gICAgICAgICAgdmFyIHRhaWxEZXRhaWxzID0gY2h1bmtCbG9jay5hcHBlbmRUYWlsKGNodW5rKTtcbiAgICAgICAgICB0YWlsRGV0YWlscy5za2lwID0gZmFsc2U7IC8vIGFsd2F5cyBpZ25vcmUgc2tpcCwgaXQgd2lsbCBiZSBzZXQgb24gbGFzdFxuXG4gICAgICAgICAgZGV0YWlscy5hZ2dyZWdhdGUodGFpbERldGFpbHMpO1xuICAgICAgICAgIG1hc2tlZC5fdmFsdWUgKz0gdGFpbERldGFpbHMuaW5zZXJ0ZWQ7IC8vIGdldCBub3QgaW5zZXJ0ZWQgY2hhcnNcblxuICAgICAgICAgIHZhciByZW1haW5DaGFycyA9IGNodW5rLnRvU3RyaW5nKCkuc2xpY2UodGFpbERldGFpbHMucmF3SW5zZXJ0ZWQubGVuZ3RoKTtcbiAgICAgICAgICBpZiAocmVtYWluQ2hhcnMpIGRldGFpbHMuYWdncmVnYXRlKG1hc2tlZC5hcHBlbmQocmVtYWluQ2hhcnMsIHtcbiAgICAgICAgICAgIHRhaWw6IHRydWVcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGV0YWlscy5hZ2dyZWdhdGUobWFza2VkLmFwcGVuZChjaHVuay50b1N0cmluZygpLCB7XG4gICAgICAgICAgICB0YWlsOiB0cnVlXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZGV0YWlscztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic3RhdGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNodW5rczogdGhpcy5jaHVua3MubWFwKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgcmV0dXJuIGMuc3RhdGU7XG4gICAgICAgIH0pLFxuICAgICAgICBmcm9tOiB0aGlzLmZyb20sXG4gICAgICAgIHN0b3A6IHRoaXMuc3RvcCxcbiAgICAgICAgYmxvY2tJbmRleDogdGhpcy5ibG9ja0luZGV4XG4gICAgICB9O1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQoc3RhdGUpIHtcbiAgICAgIHZhciBjaHVua3MgPSBzdGF0ZS5jaHVua3MsXG4gICAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc3RhdGUsIFtcImNodW5rc1wiXSk7XG5cbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgcHJvcHMpO1xuICAgICAgdGhpcy5jaHVua3MgPSBjaHVua3MubWFwKGZ1bmN0aW9uIChjc3RhdGUpIHtcbiAgICAgICAgdmFyIGNodW5rID0gXCJjaHVua3NcIiBpbiBjc3RhdGUgPyBuZXcgQ2h1bmtzVGFpbERldGFpbHMoKSA6IG5ldyBDb250aW51b3VzVGFpbERldGFpbHMoKTsgLy8gJEZsb3dGaXhNZSBhbHJlYWR5IGNoZWNrZWQgYWJvdmVcblxuICAgICAgICBjaHVuay5zdGF0ZSA9IGNzdGF0ZTtcbiAgICAgICAgcmV0dXJuIGNodW5rO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNoaWZ0QmVmb3JlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNoaWZ0QmVmb3JlKHBvcykge1xuICAgICAgaWYgKHRoaXMuZnJvbSA+PSBwb3MgfHwgIXRoaXMuY2h1bmtzLmxlbmd0aCkgcmV0dXJuICcnO1xuICAgICAgdmFyIGNodW5rU2hpZnRQb3MgPSBwb3MgLSB0aGlzLmZyb207XG4gICAgICB2YXIgY2kgPSAwO1xuXG4gICAgICB3aGlsZSAoY2kgPCB0aGlzLmNodW5rcy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNodW5rID0gdGhpcy5jaHVua3NbY2ldO1xuICAgICAgICB2YXIgc2hpZnRDaGFyID0gY2h1bmsuc2hpZnRCZWZvcmUoY2h1bmtTaGlmdFBvcyk7XG5cbiAgICAgICAgaWYgKGNodW5rLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgICAvLyBjaHVuayBzdGlsbCBjb250YWlucyB2YWx1ZVxuICAgICAgICAgIC8vIGJ1dCBub3Qgc2hpZnRlZCAtIG1lYW5zIG5vIG1vcmUgYXZhaWxhYmxlIGNoYXJzIHRvIHNoaWZ0XG4gICAgICAgICAgaWYgKCFzaGlmdENoYXIpIGJyZWFrO1xuICAgICAgICAgICsrY2k7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gY2xlYW4gaWYgY2h1bmsgaGFzIG5vIHZhbHVlXG4gICAgICAgICAgdGhpcy5jaHVua3Muc3BsaWNlKGNpLCAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzaGlmdENoYXIpIHJldHVybiBzaGlmdENoYXI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQ2h1bmtzVGFpbERldGFpbHM7XG59KCk7XG5cbmV4cG9ydCBkZWZhdWx0IENodW5rc1RhaWxEZXRhaWxzO1xuIiwiaW1wb3J0IHsgXyBhcyBfY3JlYXRlQ2xhc3MsIGEgYXMgX2NsYXNzQ2FsbENoZWNrIH0gZnJvbSAnLi4vLi4vX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycy02Y2NiMWY2NC5qcyc7XG5pbXBvcnQgQ2hhbmdlRGV0YWlscyBmcm9tICcuLi8uLi9jb3JlL2NoYW5nZS1kZXRhaWxzLmpzJztcbmltcG9ydCB7IERJUkVDVElPTiwgaXNTdHJpbmcgfSBmcm9tICcuLi8uLi9jb3JlL3V0aWxzLmpzJztcbmltcG9ydCBDb250aW51b3VzVGFpbERldGFpbHMgZnJvbSAnLi4vLi4vY29yZS9jb250aW51b3VzLXRhaWwtZGV0YWlscy5qcyc7XG5cbnZhciBQYXR0ZXJuRml4ZWREZWZpbml0aW9uID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgLyoqICovXG5cbiAgLyoqICovXG5cbiAgLyoqICovXG5cbiAgLyoqICovXG4gIGZ1bmN0aW9uIFBhdHRlcm5GaXhlZERlZmluaXRpb24ob3B0cykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQYXR0ZXJuRml4ZWREZWZpbml0aW9uKTtcblxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgb3B0cyk7XG4gICAgdGhpcy5fdmFsdWUgPSAnJztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhQYXR0ZXJuRml4ZWREZWZpbml0aW9uLCBbe1xuICAgIGtleTogXCJ2YWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ1bm1hc2tlZFZhbHVlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1VubWFza2luZyA/IHRoaXMudmFsdWUgOiAnJztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICB0aGlzLl9pc1Jhd0lucHV0ID0gZmFsc2U7XG4gICAgICB0aGlzLl92YWx1ZSA9ICcnO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW1vdmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgdmFyIGZyb21Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDA7XG4gICAgICB2YXIgdG9Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRoaXMuX3ZhbHVlLmxlbmd0aDtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdGhpcy5fdmFsdWUuc2xpY2UoMCwgZnJvbVBvcykgKyB0aGlzLl92YWx1ZS5zbGljZSh0b1Bvcyk7XG4gICAgICBpZiAoIXRoaXMuX3ZhbHVlKSB0aGlzLl9pc1Jhd0lucHV0ID0gZmFsc2U7XG4gICAgICByZXR1cm4gbmV3IENoYW5nZURldGFpbHMoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibmVhcmVzdElucHV0UG9zXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG5lYXJlc3RJbnB1dFBvcyhjdXJzb3JQb3MpIHtcbiAgICAgIHZhciBkaXJlY3Rpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IERJUkVDVElPTi5OT05FO1xuICAgICAgdmFyIG1pblBvcyA9IDA7XG4gICAgICB2YXIgbWF4UG9zID0gdGhpcy5fdmFsdWUubGVuZ3RoO1xuXG4gICAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgICBjYXNlIERJUkVDVElPTi5MRUZUOlxuICAgICAgICBjYXNlIERJUkVDVElPTi5GT1JDRV9MRUZUOlxuICAgICAgICAgIHJldHVybiBtaW5Qb3M7XG5cbiAgICAgICAgY2FzZSBESVJFQ1RJT04uTk9ORTpcbiAgICAgICAgY2FzZSBESVJFQ1RJT04uUklHSFQ6XG4gICAgICAgIGNhc2UgRElSRUNUSU9OLkZPUkNFX1JJR0hUOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBtYXhQb3M7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImV4dHJhY3RJbnB1dFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBleHRyYWN0SW5wdXQoKSB7XG4gICAgICB2YXIgZnJvbVBvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogMDtcbiAgICAgIHZhciB0b1BvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdGhpcy5fdmFsdWUubGVuZ3RoO1xuICAgICAgdmFyIGZsYWdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgICAgIHJldHVybiBmbGFncy5yYXcgJiYgdGhpcy5faXNSYXdJbnB1dCAmJiB0aGlzLl92YWx1ZS5zbGljZShmcm9tUG9zLCB0b1BvcykgfHwgJyc7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzQ29tcGxldGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfYXBwZW5kQ2hhclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfYXBwZW5kQ2hhcihzdHIpIHtcbiAgICAgIHZhciBmbGFncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgICB2YXIgZGV0YWlscyA9IG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgICBpZiAodGhpcy5fdmFsdWUpIHJldHVybiBkZXRhaWxzO1xuICAgICAgdmFyIGFwcGVuZGVkID0gdGhpcy5jaGFyID09PSBzdHJbMF07XG4gICAgICB2YXIgaXNSZXNvbHZlZCA9IGFwcGVuZGVkICYmICh0aGlzLmlzVW5tYXNraW5nIHx8IGZsYWdzLmlucHV0IHx8IGZsYWdzLnJhdykgJiYgIWZsYWdzLnRhaWw7XG4gICAgICBpZiAoaXNSZXNvbHZlZCkgZGV0YWlscy5yYXdJbnNlcnRlZCA9IHRoaXMuY2hhcjtcbiAgICAgIHRoaXMuX3ZhbHVlID0gZGV0YWlscy5pbnNlcnRlZCA9IHRoaXMuY2hhcjtcbiAgICAgIHRoaXMuX2lzUmF3SW5wdXQgPSBpc1Jlc29sdmVkICYmIChmbGFncy5yYXcgfHwgZmxhZ3MuaW5wdXQpO1xuICAgICAgcmV0dXJuIGRldGFpbHM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9hcHBlbmRQbGFjZWhvbGRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfYXBwZW5kUGxhY2Vob2xkZXIoKSB7XG4gICAgICB2YXIgZGV0YWlscyA9IG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgICBpZiAodGhpcy5fdmFsdWUpIHJldHVybiBkZXRhaWxzO1xuICAgICAgdGhpcy5fdmFsdWUgPSBkZXRhaWxzLmluc2VydGVkID0gdGhpcy5jaGFyO1xuICAgICAgcmV0dXJuIGRldGFpbHM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImV4dHJhY3RUYWlsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGV4dHJhY3RUYWlsKCkge1xuICAgICAgYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0aGlzLnZhbHVlLmxlbmd0aDtcbiAgICAgIHJldHVybiBuZXcgQ29udGludW91c1RhaWxEZXRhaWxzKCcnKTtcbiAgICB9IC8vICRGbG93Rml4TWUgbm8gaWRlYXNcblxuICB9LCB7XG4gICAga2V5OiBcImFwcGVuZFRhaWxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYXBwZW5kVGFpbCh0YWlsKSB7XG4gICAgICBpZiAoaXNTdHJpbmcodGFpbCkpIHRhaWwgPSBuZXcgQ29udGludW91c1RhaWxEZXRhaWxzKFN0cmluZyh0YWlsKSk7XG4gICAgICByZXR1cm4gdGFpbC5hcHBlbmRUbyh0aGlzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYXBwZW5kXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFwcGVuZChzdHIsIGZsYWdzLCB0YWlsKSB7XG4gICAgICB2YXIgZGV0YWlscyA9IHRoaXMuX2FwcGVuZENoYXIoc3RyLCBmbGFncyk7XG5cbiAgICAgIGlmICh0YWlsICE9IG51bGwpIHtcbiAgICAgICAgZGV0YWlscy50YWlsU2hpZnQgKz0gdGhpcy5hcHBlbmRUYWlsKHRhaWwpLnRhaWxTaGlmdDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRldGFpbHM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImRvQ29tbWl0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRvQ29tbWl0KCkge31cbiAgfSwge1xuICAgIGtleTogXCJzdGF0ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgX3ZhbHVlOiB0aGlzLl92YWx1ZSxcbiAgICAgICAgX2lzUmF3SW5wdXQ6IHRoaXMuX2lzUmF3SW5wdXRcbiAgICAgIH07XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChzdGF0ZSkge1xuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBzdGF0ZSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFBhdHRlcm5GaXhlZERlZmluaXRpb247XG59KCk7XG5cbmV4cG9ydCBkZWZhdWx0IFBhdHRlcm5GaXhlZERlZmluaXRpb247XG4iLCJpbXBvcnQgeyBfIGFzIF9jcmVhdGVDbGFzcywgYSBhcyBfY2xhc3NDYWxsQ2hlY2ssIGIgYXMgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vLi4vX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycy02Y2NiMWY2NC5qcyc7XG5pbXBvcnQgY3JlYXRlTWFzayBmcm9tICcuLi9mYWN0b3J5LmpzJztcbmltcG9ydCBDaGFuZ2VEZXRhaWxzIGZyb20gJy4uLy4uL2NvcmUvY2hhbmdlLWRldGFpbHMuanMnO1xuaW1wb3J0IHsgRElSRUNUSU9OIH0gZnJvbSAnLi4vLi4vY29yZS91dGlscy5qcyc7XG5pbXBvcnQgJy4uLy4uL2NvcmUvaG9sZGVyLmpzJztcblxudmFyIERFRkFVTFRfSU5QVVRfREVGSU5JVElPTlMgPSB7XG4gICcwJzogL1xcZC8sXG4gICdhJzogL1tcXHUwMDQxLVxcdTAwNUFcXHUwMDYxLVxcdTAwN0FcXHUwMEFBXFx1MDBCNVxcdTAwQkFcXHUwMEMwLVxcdTAwRDZcXHUwMEQ4LVxcdTAwRjZcXHUwMEY4LVxcdTAyQzFcXHUwMkM2LVxcdTAyRDFcXHUwMkUwLVxcdTAyRTRcXHUwMkVDXFx1MDJFRVxcdTAzNzAtXFx1MDM3NFxcdTAzNzZcXHUwMzc3XFx1MDM3QS1cXHUwMzdEXFx1MDM4NlxcdTAzODgtXFx1MDM4QVxcdTAzOENcXHUwMzhFLVxcdTAzQTFcXHUwM0EzLVxcdTAzRjVcXHUwM0Y3LVxcdTA0ODFcXHUwNDhBLVxcdTA1MjdcXHUwNTMxLVxcdTA1NTZcXHUwNTU5XFx1MDU2MS1cXHUwNTg3XFx1MDVEMC1cXHUwNUVBXFx1MDVGMC1cXHUwNUYyXFx1MDYyMC1cXHUwNjRBXFx1MDY2RVxcdTA2NkZcXHUwNjcxLVxcdTA2RDNcXHUwNkQ1XFx1MDZFNVxcdTA2RTZcXHUwNkVFXFx1MDZFRlxcdTA2RkEtXFx1MDZGQ1xcdTA2RkZcXHUwNzEwXFx1MDcxMi1cXHUwNzJGXFx1MDc0RC1cXHUwN0E1XFx1MDdCMVxcdTA3Q0EtXFx1MDdFQVxcdTA3RjRcXHUwN0Y1XFx1MDdGQVxcdTA4MDAtXFx1MDgxNVxcdTA4MUFcXHUwODI0XFx1MDgyOFxcdTA4NDAtXFx1MDg1OFxcdTA4QTBcXHUwOEEyLVxcdTA4QUNcXHUwOTA0LVxcdTA5MzlcXHUwOTNEXFx1MDk1MFxcdTA5NTgtXFx1MDk2MVxcdTA5NzEtXFx1MDk3N1xcdTA5NzktXFx1MDk3RlxcdTA5ODUtXFx1MDk4Q1xcdTA5OEZcXHUwOTkwXFx1MDk5My1cXHUwOUE4XFx1MDlBQS1cXHUwOUIwXFx1MDlCMlxcdTA5QjYtXFx1MDlCOVxcdTA5QkRcXHUwOUNFXFx1MDlEQ1xcdTA5RERcXHUwOURGLVxcdTA5RTFcXHUwOUYwXFx1MDlGMVxcdTBBMDUtXFx1MEEwQVxcdTBBMEZcXHUwQTEwXFx1MEExMy1cXHUwQTI4XFx1MEEyQS1cXHUwQTMwXFx1MEEzMlxcdTBBMzNcXHUwQTM1XFx1MEEzNlxcdTBBMzhcXHUwQTM5XFx1MEE1OS1cXHUwQTVDXFx1MEE1RVxcdTBBNzItXFx1MEE3NFxcdTBBODUtXFx1MEE4RFxcdTBBOEYtXFx1MEE5MVxcdTBBOTMtXFx1MEFBOFxcdTBBQUEtXFx1MEFCMFxcdTBBQjJcXHUwQUIzXFx1MEFCNS1cXHUwQUI5XFx1MEFCRFxcdTBBRDBcXHUwQUUwXFx1MEFFMVxcdTBCMDUtXFx1MEIwQ1xcdTBCMEZcXHUwQjEwXFx1MEIxMy1cXHUwQjI4XFx1MEIyQS1cXHUwQjMwXFx1MEIzMlxcdTBCMzNcXHUwQjM1LVxcdTBCMzlcXHUwQjNEXFx1MEI1Q1xcdTBCNURcXHUwQjVGLVxcdTBCNjFcXHUwQjcxXFx1MEI4M1xcdTBCODUtXFx1MEI4QVxcdTBCOEUtXFx1MEI5MFxcdTBCOTItXFx1MEI5NVxcdTBCOTlcXHUwQjlBXFx1MEI5Q1xcdTBCOUVcXHUwQjlGXFx1MEJBM1xcdTBCQTRcXHUwQkE4LVxcdTBCQUFcXHUwQkFFLVxcdTBCQjlcXHUwQkQwXFx1MEMwNS1cXHUwQzBDXFx1MEMwRS1cXHUwQzEwXFx1MEMxMi1cXHUwQzI4XFx1MEMyQS1cXHUwQzMzXFx1MEMzNS1cXHUwQzM5XFx1MEMzRFxcdTBDNThcXHUwQzU5XFx1MEM2MFxcdTBDNjFcXHUwQzg1LVxcdTBDOENcXHUwQzhFLVxcdTBDOTBcXHUwQzkyLVxcdTBDQThcXHUwQ0FBLVxcdTBDQjNcXHUwQ0I1LVxcdTBDQjlcXHUwQ0JEXFx1MENERVxcdTBDRTBcXHUwQ0UxXFx1MENGMVxcdTBDRjJcXHUwRDA1LVxcdTBEMENcXHUwRDBFLVxcdTBEMTBcXHUwRDEyLVxcdTBEM0FcXHUwRDNEXFx1MEQ0RVxcdTBENjBcXHUwRDYxXFx1MEQ3QS1cXHUwRDdGXFx1MEQ4NS1cXHUwRDk2XFx1MEQ5QS1cXHUwREIxXFx1MERCMy1cXHUwREJCXFx1MERCRFxcdTBEQzAtXFx1MERDNlxcdTBFMDEtXFx1MEUzMFxcdTBFMzJcXHUwRTMzXFx1MEU0MC1cXHUwRTQ2XFx1MEU4MVxcdTBFODJcXHUwRTg0XFx1MEU4N1xcdTBFODhcXHUwRThBXFx1MEU4RFxcdTBFOTQtXFx1MEU5N1xcdTBFOTktXFx1MEU5RlxcdTBFQTEtXFx1MEVBM1xcdTBFQTVcXHUwRUE3XFx1MEVBQVxcdTBFQUJcXHUwRUFELVxcdTBFQjBcXHUwRUIyXFx1MEVCM1xcdTBFQkRcXHUwRUMwLVxcdTBFQzRcXHUwRUM2XFx1MEVEQy1cXHUwRURGXFx1MEYwMFxcdTBGNDAtXFx1MEY0N1xcdTBGNDktXFx1MEY2Q1xcdTBGODgtXFx1MEY4Q1xcdTEwMDAtXFx1MTAyQVxcdTEwM0ZcXHUxMDUwLVxcdTEwNTVcXHUxMDVBLVxcdTEwNURcXHUxMDYxXFx1MTA2NVxcdTEwNjZcXHUxMDZFLVxcdTEwNzBcXHUxMDc1LVxcdTEwODFcXHUxMDhFXFx1MTBBMC1cXHUxMEM1XFx1MTBDN1xcdTEwQ0RcXHUxMEQwLVxcdTEwRkFcXHUxMEZDLVxcdTEyNDhcXHUxMjRBLVxcdTEyNERcXHUxMjUwLVxcdTEyNTZcXHUxMjU4XFx1MTI1QS1cXHUxMjVEXFx1MTI2MC1cXHUxMjg4XFx1MTI4QS1cXHUxMjhEXFx1MTI5MC1cXHUxMkIwXFx1MTJCMi1cXHUxMkI1XFx1MTJCOC1cXHUxMkJFXFx1MTJDMFxcdTEyQzItXFx1MTJDNVxcdTEyQzgtXFx1MTJENlxcdTEyRDgtXFx1MTMxMFxcdTEzMTItXFx1MTMxNVxcdTEzMTgtXFx1MTM1QVxcdTEzODAtXFx1MTM4RlxcdTEzQTAtXFx1MTNGNFxcdTE0MDEtXFx1MTY2Q1xcdTE2NkYtXFx1MTY3RlxcdTE2ODEtXFx1MTY5QVxcdTE2QTAtXFx1MTZFQVxcdTE3MDAtXFx1MTcwQ1xcdTE3MEUtXFx1MTcxMVxcdTE3MjAtXFx1MTczMVxcdTE3NDAtXFx1MTc1MVxcdTE3NjAtXFx1MTc2Q1xcdTE3NkUtXFx1MTc3MFxcdTE3ODAtXFx1MTdCM1xcdTE3RDdcXHUxN0RDXFx1MTgyMC1cXHUxODc3XFx1MTg4MC1cXHUxOEE4XFx1MThBQVxcdTE4QjAtXFx1MThGNVxcdTE5MDAtXFx1MTkxQ1xcdTE5NTAtXFx1MTk2RFxcdTE5NzAtXFx1MTk3NFxcdTE5ODAtXFx1MTlBQlxcdTE5QzEtXFx1MTlDN1xcdTFBMDAtXFx1MUExNlxcdTFBMjAtXFx1MUE1NFxcdTFBQTdcXHUxQjA1LVxcdTFCMzNcXHUxQjQ1LVxcdTFCNEJcXHUxQjgzLVxcdTFCQTBcXHUxQkFFXFx1MUJBRlxcdTFCQkEtXFx1MUJFNVxcdTFDMDAtXFx1MUMyM1xcdTFDNEQtXFx1MUM0RlxcdTFDNUEtXFx1MUM3RFxcdTFDRTktXFx1MUNFQ1xcdTFDRUUtXFx1MUNGMVxcdTFDRjVcXHUxQ0Y2XFx1MUQwMC1cXHUxREJGXFx1MUUwMC1cXHUxRjE1XFx1MUYxOC1cXHUxRjFEXFx1MUYyMC1cXHUxRjQ1XFx1MUY0OC1cXHUxRjREXFx1MUY1MC1cXHUxRjU3XFx1MUY1OVxcdTFGNUJcXHUxRjVEXFx1MUY1Ri1cXHUxRjdEXFx1MUY4MC1cXHUxRkI0XFx1MUZCNi1cXHUxRkJDXFx1MUZCRVxcdTFGQzItXFx1MUZDNFxcdTFGQzYtXFx1MUZDQ1xcdTFGRDAtXFx1MUZEM1xcdTFGRDYtXFx1MUZEQlxcdTFGRTAtXFx1MUZFQ1xcdTFGRjItXFx1MUZGNFxcdTFGRjYtXFx1MUZGQ1xcdTIwNzFcXHUyMDdGXFx1MjA5MC1cXHUyMDlDXFx1MjEwMlxcdTIxMDdcXHUyMTBBLVxcdTIxMTNcXHUyMTE1XFx1MjExOS1cXHUyMTFEXFx1MjEyNFxcdTIxMjZcXHUyMTI4XFx1MjEyQS1cXHUyMTJEXFx1MjEyRi1cXHUyMTM5XFx1MjEzQy1cXHUyMTNGXFx1MjE0NS1cXHUyMTQ5XFx1MjE0RVxcdTIxODNcXHUyMTg0XFx1MkMwMC1cXHUyQzJFXFx1MkMzMC1cXHUyQzVFXFx1MkM2MC1cXHUyQ0U0XFx1MkNFQi1cXHUyQ0VFXFx1MkNGMlxcdTJDRjNcXHUyRDAwLVxcdTJEMjVcXHUyRDI3XFx1MkQyRFxcdTJEMzAtXFx1MkQ2N1xcdTJENkZcXHUyRDgwLVxcdTJEOTZcXHUyREEwLVxcdTJEQTZcXHUyREE4LVxcdTJEQUVcXHUyREIwLVxcdTJEQjZcXHUyREI4LVxcdTJEQkVcXHUyREMwLVxcdTJEQzZcXHUyREM4LVxcdTJEQ0VcXHUyREQwLVxcdTJERDZcXHUyREQ4LVxcdTJEREVcXHUyRTJGXFx1MzAwNVxcdTMwMDZcXHUzMDMxLVxcdTMwMzVcXHUzMDNCXFx1MzAzQ1xcdTMwNDEtXFx1MzA5NlxcdTMwOUQtXFx1MzA5RlxcdTMwQTEtXFx1MzBGQVxcdTMwRkMtXFx1MzBGRlxcdTMxMDUtXFx1MzEyRFxcdTMxMzEtXFx1MzE4RVxcdTMxQTAtXFx1MzFCQVxcdTMxRjAtXFx1MzFGRlxcdTM0MDAtXFx1NERCNVxcdTRFMDAtXFx1OUZDQ1xcdUEwMDAtXFx1QTQ4Q1xcdUE0RDAtXFx1QTRGRFxcdUE1MDAtXFx1QTYwQ1xcdUE2MTAtXFx1QTYxRlxcdUE2MkFcXHVBNjJCXFx1QTY0MC1cXHVBNjZFXFx1QTY3Ri1cXHVBNjk3XFx1QTZBMC1cXHVBNkU1XFx1QTcxNy1cXHVBNzFGXFx1QTcyMi1cXHVBNzg4XFx1QTc4Qi1cXHVBNzhFXFx1QTc5MC1cXHVBNzkzXFx1QTdBMC1cXHVBN0FBXFx1QTdGOC1cXHVBODAxXFx1QTgwMy1cXHVBODA1XFx1QTgwNy1cXHVBODBBXFx1QTgwQy1cXHVBODIyXFx1QTg0MC1cXHVBODczXFx1QTg4Mi1cXHVBOEIzXFx1QThGMi1cXHVBOEY3XFx1QThGQlxcdUE5MEEtXFx1QTkyNVxcdUE5MzAtXFx1QTk0NlxcdUE5NjAtXFx1QTk3Q1xcdUE5ODQtXFx1QTlCMlxcdUE5Q0ZcXHVBQTAwLVxcdUFBMjhcXHVBQTQwLVxcdUFBNDJcXHVBQTQ0LVxcdUFBNEJcXHVBQTYwLVxcdUFBNzZcXHVBQTdBXFx1QUE4MC1cXHVBQUFGXFx1QUFCMVxcdUFBQjVcXHVBQUI2XFx1QUFCOS1cXHVBQUJEXFx1QUFDMFxcdUFBQzJcXHVBQURCLVxcdUFBRERcXHVBQUUwLVxcdUFBRUFcXHVBQUYyLVxcdUFBRjRcXHVBQjAxLVxcdUFCMDZcXHVBQjA5LVxcdUFCMEVcXHVBQjExLVxcdUFCMTZcXHVBQjIwLVxcdUFCMjZcXHVBQjI4LVxcdUFCMkVcXHVBQkMwLVxcdUFCRTJcXHVBQzAwLVxcdUQ3QTNcXHVEN0IwLVxcdUQ3QzZcXHVEN0NCLVxcdUQ3RkJcXHVGOTAwLVxcdUZBNkRcXHVGQTcwLVxcdUZBRDlcXHVGQjAwLVxcdUZCMDZcXHVGQjEzLVxcdUZCMTdcXHVGQjFEXFx1RkIxRi1cXHVGQjI4XFx1RkIyQS1cXHVGQjM2XFx1RkIzOC1cXHVGQjNDXFx1RkIzRVxcdUZCNDBcXHVGQjQxXFx1RkI0M1xcdUZCNDRcXHVGQjQ2LVxcdUZCQjFcXHVGQkQzLVxcdUZEM0RcXHVGRDUwLVxcdUZEOEZcXHVGRDkyLVxcdUZEQzdcXHVGREYwLVxcdUZERkJcXHVGRTcwLVxcdUZFNzRcXHVGRTc2LVxcdUZFRkNcXHVGRjIxLVxcdUZGM0FcXHVGRjQxLVxcdUZGNUFcXHVGRjY2LVxcdUZGQkVcXHVGRkMyLVxcdUZGQzdcXHVGRkNBLVxcdUZGQ0ZcXHVGRkQyLVxcdUZGRDdcXHVGRkRBLVxcdUZGRENdLyxcbiAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjIwNzUwNzBcbiAgJyonOiAvLi9cbn07XG4vKiogKi9cblxudmFyIFBhdHRlcm5JbnB1dERlZmluaXRpb24gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAvKiogKi9cblxuICAvKiogKi9cblxuICAvKiogKi9cblxuICAvKiogKi9cblxuICAvKiogKi9cblxuICAvKiogKi9cbiAgZnVuY3Rpb24gUGF0dGVybklucHV0RGVmaW5pdGlvbihvcHRzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBhdHRlcm5JbnB1dERlZmluaXRpb24pO1xuXG4gICAgdmFyIG1hc2sgPSBvcHRzLm1hc2ssXG4gICAgICAgIGJsb2NrT3B0cyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvcHRzLCBbXCJtYXNrXCJdKTtcblxuICAgIHRoaXMubWFza2VkID0gY3JlYXRlTWFzayh7XG4gICAgICBtYXNrOiBtYXNrXG4gICAgfSk7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBibG9ja09wdHMpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFBhdHRlcm5JbnB1dERlZmluaXRpb24sIFt7XG4gICAga2V5OiBcInJlc2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgdGhpcy5faXNGaWxsZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMubWFza2VkLnJlc2V0KCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbW92ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICB2YXIgZnJvbVBvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogMDtcbiAgICAgIHZhciB0b1BvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdGhpcy52YWx1ZS5sZW5ndGg7XG5cbiAgICAgIGlmIChmcm9tUG9zID09PSAwICYmIHRvUG9zID49IDEpIHtcbiAgICAgICAgdGhpcy5faXNGaWxsZWQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFza2VkLnJlbW92ZShmcm9tUG9zLCB0b1Bvcyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ2YWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMubWFza2VkLnZhbHVlIHx8ICh0aGlzLl9pc0ZpbGxlZCAmJiAhdGhpcy5pc09wdGlvbmFsID8gdGhpcy5wbGFjZWhvbGRlckNoYXIgOiAnJyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInVubWFza2VkVmFsdWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLm1hc2tlZC51bm1hc2tlZFZhbHVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpc0NvbXBsZXRlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gQm9vbGVhbih0aGlzLm1hc2tlZC52YWx1ZSkgfHwgdGhpcy5pc09wdGlvbmFsO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfYXBwZW5kQ2hhclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfYXBwZW5kQ2hhcihzdHIpIHtcbiAgICAgIHZhciBmbGFncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgICBpZiAodGhpcy5faXNGaWxsZWQpIHJldHVybiBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICAgICAgdmFyIHN0YXRlID0gdGhpcy5tYXNrZWQuc3RhdGU7IC8vIHNpbXVsYXRlIGlucHV0XG5cbiAgICAgIHZhciBkZXRhaWxzID0gdGhpcy5tYXNrZWQuX2FwcGVuZENoYXIoc3RyLCBmbGFncyk7XG5cbiAgICAgIGlmIChkZXRhaWxzLmluc2VydGVkICYmIHRoaXMuZG9WYWxpZGF0ZShmbGFncykgPT09IGZhbHNlKSB7XG4gICAgICAgIGRldGFpbHMuaW5zZXJ0ZWQgPSBkZXRhaWxzLnJhd0luc2VydGVkID0gJyc7XG4gICAgICAgIHRoaXMubWFza2VkLnN0YXRlID0gc3RhdGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghZGV0YWlscy5pbnNlcnRlZCAmJiAhdGhpcy5pc09wdGlvbmFsICYmICF0aGlzLmxhenkgJiYgIWZsYWdzLmlucHV0KSB7XG4gICAgICAgIGRldGFpbHMuaW5zZXJ0ZWQgPSB0aGlzLnBsYWNlaG9sZGVyQ2hhcjtcbiAgICAgIH1cblxuICAgICAgZGV0YWlscy5za2lwID0gIWRldGFpbHMuaW5zZXJ0ZWQgJiYgIXRoaXMuaXNPcHRpb25hbDtcbiAgICAgIHRoaXMuX2lzRmlsbGVkID0gQm9vbGVhbihkZXRhaWxzLmluc2VydGVkKTtcbiAgICAgIHJldHVybiBkZXRhaWxzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJhcHBlbmRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYXBwZW5kKCkge1xuICAgICAgdmFyIF90aGlzJG1hc2tlZDtcblxuICAgICAgcmV0dXJuIChfdGhpcyRtYXNrZWQgPSB0aGlzLm1hc2tlZCkuYXBwZW5kLmFwcGx5KF90aGlzJG1hc2tlZCwgYXJndW1lbnRzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2FwcGVuZFBsYWNlaG9sZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9hcHBlbmRQbGFjZWhvbGRlcigpIHtcbiAgICAgIHZhciBkZXRhaWxzID0gbmV3IENoYW5nZURldGFpbHMoKTtcbiAgICAgIGlmICh0aGlzLl9pc0ZpbGxlZCB8fCB0aGlzLmlzT3B0aW9uYWwpIHJldHVybiBkZXRhaWxzO1xuICAgICAgdGhpcy5faXNGaWxsZWQgPSB0cnVlO1xuICAgICAgZGV0YWlscy5pbnNlcnRlZCA9IHRoaXMucGxhY2Vob2xkZXJDaGFyO1xuICAgICAgcmV0dXJuIGRldGFpbHM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImV4dHJhY3RUYWlsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGV4dHJhY3RUYWlsKCkge1xuICAgICAgdmFyIF90aGlzJG1hc2tlZDI7XG5cbiAgICAgIHJldHVybiAoX3RoaXMkbWFza2VkMiA9IHRoaXMubWFza2VkKS5leHRyYWN0VGFpbC5hcHBseShfdGhpcyRtYXNrZWQyLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJhcHBlbmRUYWlsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFwcGVuZFRhaWwoKSB7XG4gICAgICB2YXIgX3RoaXMkbWFza2VkMztcblxuICAgICAgcmV0dXJuIChfdGhpcyRtYXNrZWQzID0gdGhpcy5tYXNrZWQpLmFwcGVuZFRhaWwuYXBwbHkoX3RoaXMkbWFza2VkMywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZXh0cmFjdElucHV0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGV4dHJhY3RJbnB1dCgpIHtcbiAgICAgIHZhciBmcm9tUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xuICAgICAgdmFyIHRvUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0aGlzLnZhbHVlLmxlbmd0aDtcbiAgICAgIHZhciBmbGFncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkO1xuICAgICAgcmV0dXJuIHRoaXMubWFza2VkLmV4dHJhY3RJbnB1dChmcm9tUG9zLCB0b1BvcywgZmxhZ3MpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJuZWFyZXN0SW5wdXRQb3NcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbmVhcmVzdElucHV0UG9zKGN1cnNvclBvcykge1xuICAgICAgdmFyIGRpcmVjdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogRElSRUNUSU9OLk5PTkU7XG4gICAgICB2YXIgbWluUG9zID0gMDtcbiAgICAgIHZhciBtYXhQb3MgPSB0aGlzLnZhbHVlLmxlbmd0aDtcbiAgICAgIHZhciBib3VuZFBvcyA9IE1hdGgubWluKE1hdGgubWF4KGN1cnNvclBvcywgbWluUG9zKSwgbWF4UG9zKTtcblxuICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgICAgY2FzZSBESVJFQ1RJT04uTEVGVDpcbiAgICAgICAgY2FzZSBESVJFQ1RJT04uRk9SQ0VfTEVGVDpcbiAgICAgICAgICByZXR1cm4gdGhpcy5pc0NvbXBsZXRlID8gYm91bmRQb3MgOiBtaW5Qb3M7XG5cbiAgICAgICAgY2FzZSBESVJFQ1RJT04uUklHSFQ6XG4gICAgICAgIGNhc2UgRElSRUNUSU9OLkZPUkNFX1JJR0hUOlxuICAgICAgICAgIHJldHVybiB0aGlzLmlzQ29tcGxldGUgPyBib3VuZFBvcyA6IG1heFBvcztcblxuICAgICAgICBjYXNlIERJUkVDVElPTi5OT05FOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBib3VuZFBvcztcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZG9WYWxpZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkb1ZhbGlkYXRlKCkge1xuICAgICAgdmFyIF90aGlzJG1hc2tlZDQsIF90aGlzJHBhcmVudDtcblxuICAgICAgcmV0dXJuIChfdGhpcyRtYXNrZWQ0ID0gdGhpcy5tYXNrZWQpLmRvVmFsaWRhdGUuYXBwbHkoX3RoaXMkbWFza2VkNCwgYXJndW1lbnRzKSAmJiAoIXRoaXMucGFyZW50IHx8IChfdGhpcyRwYXJlbnQgPSB0aGlzLnBhcmVudCkuZG9WYWxpZGF0ZS5hcHBseShfdGhpcyRwYXJlbnQsIGFyZ3VtZW50cykpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJkb0NvbW1pdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkb0NvbW1pdCgpIHtcbiAgICAgIHRoaXMubWFza2VkLmRvQ29tbWl0KCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInN0YXRlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBtYXNrZWQ6IHRoaXMubWFza2VkLnN0YXRlLFxuICAgICAgICBfaXNGaWxsZWQ6IHRoaXMuX2lzRmlsbGVkXG4gICAgICB9O1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQoc3RhdGUpIHtcbiAgICAgIHRoaXMubWFza2VkLnN0YXRlID0gc3RhdGUubWFza2VkO1xuICAgICAgdGhpcy5faXNGaWxsZWQgPSBzdGF0ZS5faXNGaWxsZWQ7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFBhdHRlcm5JbnB1dERlZmluaXRpb247XG59KCk7XG5cbmV4cG9ydCBkZWZhdWx0IFBhdHRlcm5JbnB1dERlZmluaXRpb247XG5leHBvcnQgeyBERUZBVUxUX0lOUFVUX0RFRklOSVRJT05TIH07XG4iLCJpbXBvcnQgY3JlYXRlTWFzayBmcm9tICcuL2ZhY3RvcnkuanMnO1xuaW1wb3J0IElNYXNrIGZyb20gJy4uL2NvcmUvaG9sZGVyLmpzJztcbmltcG9ydCAnLi4vY29yZS91dGlscy5qcyc7XG5pbXBvcnQgJy4uL19yb2xsdXBQbHVnaW5CYWJlbEhlbHBlcnMtNmNjYjFmNjQuanMnO1xuXG4vKiogTWFzayBwaXBlIHNvdXJjZSBhbmQgZGVzdGluYXRpb24gdHlwZXMgKi9cblxudmFyIFBJUEVfVFlQRSA9IHtcbiAgTUFTS0VEOiAndmFsdWUnLFxuICBVTk1BU0tFRDogJ3VubWFza2VkVmFsdWUnLFxuICBUWVBFRDogJ3R5cGVkVmFsdWUnXG59O1xuLyoqIENyZWF0ZXMgbmV3IHBpcGUgZnVuY3Rpb24gZGVwZW5kaW5nIG9uIG1hc2sgdHlwZSwgc291cmNlIGFuZCBkZXN0aW5hdGlvbiBvcHRpb25zICovXG5cbmZ1bmN0aW9uIGNyZWF0ZVBpcGUobWFzaykge1xuICB2YXIgZnJvbSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogUElQRV9UWVBFLk1BU0tFRDtcbiAgdmFyIHRvID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBQSVBFX1RZUEUuTUFTS0VEO1xuICB2YXIgbWFza2VkID0gY3JlYXRlTWFzayhtYXNrKTtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiBtYXNrZWQucnVuSXNvbGF0ZWQoZnVuY3Rpb24gKG0pIHtcbiAgICAgIG1bZnJvbV0gPSB2YWx1ZTtcbiAgICAgIHJldHVybiBtW3RvXTtcbiAgICB9KTtcbiAgfTtcbn1cbi8qKiBQaXBlcyB2YWx1ZSB0aHJvdWdoIG1hc2sgZGVwZW5kaW5nIG9uIG1hc2sgdHlwZSwgc291cmNlIGFuZCBkZXN0aW5hdGlvbiBvcHRpb25zICovXG5cbmZ1bmN0aW9uIHBpcGUodmFsdWUpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHBpcGVBcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBwaXBlQXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gY3JlYXRlUGlwZS5hcHBseSh2b2lkIDAsIHBpcGVBcmdzKSh2YWx1ZSk7XG59XG5JTWFzay5QSVBFX1RZUEUgPSBQSVBFX1RZUEU7XG5JTWFzay5jcmVhdGVQaXBlID0gY3JlYXRlUGlwZTtcbklNYXNrLnBpcGUgPSBwaXBlO1xuXG5leHBvcnQgeyBQSVBFX1RZUEUsIGNyZWF0ZVBpcGUsIHBpcGUgfTtcbiIsImltcG9ydCB7IGQgYXMgX2luaGVyaXRzLCBlIGFzIF9jcmVhdGVTdXBlciwgYSBhcyBfY2xhc3NDYWxsQ2hlY2ssIF8gYXMgX2NyZWF0ZUNsYXNzLCBnIGFzIF9nZXQsIGggYXMgX2dldFByb3RvdHlwZU9mLCBmIGFzIF9zbGljZWRUb0FycmF5IH0gZnJvbSAnLi4vX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycy02Y2NiMWY2NC5qcyc7XG5pbXBvcnQgTWFza2VkUGF0dGVybiBmcm9tICcuL3BhdHRlcm4uanMnO1xuaW1wb3J0IElNYXNrIGZyb20gJy4uL2NvcmUvaG9sZGVyLmpzJztcbmltcG9ydCAnLi4vY29yZS91dGlscy5qcyc7XG5pbXBvcnQgJy4uL2NvcmUvY2hhbmdlLWRldGFpbHMuanMnO1xuaW1wb3J0ICcuL2Jhc2UuanMnO1xuaW1wb3J0ICcuLi9jb3JlL2NvbnRpbnVvdXMtdGFpbC1kZXRhaWxzLmpzJztcbmltcG9ydCAnLi9wYXR0ZXJuL2lucHV0LWRlZmluaXRpb24uanMnO1xuaW1wb3J0ICcuL2ZhY3RvcnkuanMnO1xuaW1wb3J0ICcuL3BhdHRlcm4vZml4ZWQtZGVmaW5pdGlvbi5qcyc7XG5pbXBvcnQgJy4vcGF0dGVybi9jaHVuay10YWlsLWRldGFpbHMuanMnO1xuaW1wb3J0ICcuL3JlZ2V4cC5qcyc7XG5cbi8qKiBQYXR0ZXJuIHdoaWNoIGFjY2VwdHMgcmFuZ2VzICovXG5cbnZhciBNYXNrZWRSYW5nZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX01hc2tlZFBhdHRlcm4pIHtcbiAgX2luaGVyaXRzKE1hc2tlZFJhbmdlLCBfTWFza2VkUGF0dGVybik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihNYXNrZWRSYW5nZSk7XG5cbiAgZnVuY3Rpb24gTWFza2VkUmFuZ2UoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1hc2tlZFJhbmdlKTtcblxuICAgIHJldHVybiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhNYXNrZWRSYW5nZSwgW3tcbiAgICBrZXk6IFwiX21hdGNoRnJvbVwiLFxuICAgIGdldDpcbiAgICAvKipcclxuICAgICAgT3B0aW9uYWxseSBzZXRzIG1heCBsZW5ndGggb2YgcGF0dGVybi5cclxuICAgICAgVXNlZCB3aGVuIHBhdHRlcm4gbGVuZ3RoIGlzIGxvbmdlciB0aGVuIGB0b2AgcGFyYW0gbGVuZ3RoLiBQYWRzIHplcm9zIGF0IHN0YXJ0IGluIHRoaXMgY2FzZS5cclxuICAgICovXG5cbiAgICAvKiogTWluIGJvdW5kICovXG5cbiAgICAvKiogTWF4IGJvdW5kICovXG5cbiAgICAvKiogKi9cbiAgICBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5tYXhMZW5ndGggLSBTdHJpbmcodGhpcy5mcm9tKS5sZW5ndGg7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfdXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF91cGRhdGUob3B0cykge1xuICAgICAgLy8gVE9ETyB0eXBlXG4gICAgICBvcHRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIHRvOiB0aGlzLnRvIHx8IDAsXG4gICAgICAgIGZyb206IHRoaXMuZnJvbSB8fCAwXG4gICAgICB9LCBvcHRzKTtcbiAgICAgIHZhciBtYXhMZW5ndGggPSBTdHJpbmcob3B0cy50bykubGVuZ3RoO1xuICAgICAgaWYgKG9wdHMubWF4TGVuZ3RoICE9IG51bGwpIG1heExlbmd0aCA9IE1hdGgubWF4KG1heExlbmd0aCwgb3B0cy5tYXhMZW5ndGgpO1xuICAgICAgb3B0cy5tYXhMZW5ndGggPSBtYXhMZW5ndGg7XG4gICAgICB2YXIgZnJvbVN0ciA9IFN0cmluZyhvcHRzLmZyb20pLnBhZFN0YXJ0KG1heExlbmd0aCwgJzAnKTtcbiAgICAgIHZhciB0b1N0ciA9IFN0cmluZyhvcHRzLnRvKS5wYWRTdGFydChtYXhMZW5ndGgsICcwJyk7XG4gICAgICB2YXIgc2FtZUNoYXJzQ291bnQgPSAwO1xuXG4gICAgICB3aGlsZSAoc2FtZUNoYXJzQ291bnQgPCB0b1N0ci5sZW5ndGggJiYgdG9TdHJbc2FtZUNoYXJzQ291bnRdID09PSBmcm9tU3RyW3NhbWVDaGFyc0NvdW50XSkge1xuICAgICAgICArK3NhbWVDaGFyc0NvdW50O1xuICAgICAgfVxuXG4gICAgICBvcHRzLm1hc2sgPSB0b1N0ci5zbGljZSgwLCBzYW1lQ2hhcnNDb3VudCkucmVwbGFjZSgvMC9nLCAnXFxcXDAnKSArICcwJy5yZXBlYXQobWF4TGVuZ3RoIC0gc2FtZUNoYXJzQ291bnQpO1xuXG4gICAgICBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWRSYW5nZS5wcm90b3R5cGUpLCBcIl91cGRhdGVcIiwgdGhpcykuY2FsbCh0aGlzLCBvcHRzKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImlzQ29tcGxldGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWRSYW5nZS5wcm90b3R5cGUpLCBcImlzQ29tcGxldGVcIiwgdGhpcykgJiYgQm9vbGVhbih0aGlzLnZhbHVlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYm91bmRhcmllc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBib3VuZGFyaWVzKHN0cikge1xuICAgICAgdmFyIG1pbnN0ciA9ICcnO1xuICAgICAgdmFyIG1heHN0ciA9ICcnO1xuXG4gICAgICB2YXIgX3JlZiA9IHN0ci5tYXRjaCgvXihcXEQqKShcXGQqKShcXEQqKS8pIHx8IFtdLFxuICAgICAgICAgIF9yZWYyID0gX3NsaWNlZFRvQXJyYXkoX3JlZiwgMyksXG4gICAgICAgICAgcGxhY2Vob2xkZXIgPSBfcmVmMlsxXSxcbiAgICAgICAgICBudW0gPSBfcmVmMlsyXTtcblxuICAgICAgaWYgKG51bSkge1xuICAgICAgICBtaW5zdHIgPSAnMCcucmVwZWF0KHBsYWNlaG9sZGVyLmxlbmd0aCkgKyBudW07XG4gICAgICAgIG1heHN0ciA9ICc5Jy5yZXBlYXQocGxhY2Vob2xkZXIubGVuZ3RoKSArIG51bTtcbiAgICAgIH1cblxuICAgICAgbWluc3RyID0gbWluc3RyLnBhZEVuZCh0aGlzLm1heExlbmd0aCwgJzAnKTtcbiAgICAgIG1heHN0ciA9IG1heHN0ci5wYWRFbmQodGhpcy5tYXhMZW5ndGgsICc5Jyk7XG4gICAgICByZXR1cm4gW21pbnN0ciwgbWF4c3RyXTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRvUHJlcGFyZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkb1ByZXBhcmUoc3RyKSB7XG4gICAgICB2YXIgZmxhZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgICAgc3RyID0gX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkUmFuZ2UucHJvdG90eXBlKSwgXCJkb1ByZXBhcmVcIiwgdGhpcykuY2FsbCh0aGlzLCBzdHIsIGZsYWdzKS5yZXBsYWNlKC9cXEQvZywgJycpO1xuICAgICAgaWYgKCF0aGlzLmF1dG9maXgpIHJldHVybiBzdHI7XG4gICAgICB2YXIgZnJvbVN0ciA9IFN0cmluZyh0aGlzLmZyb20pLnBhZFN0YXJ0KHRoaXMubWF4TGVuZ3RoLCAnMCcpO1xuICAgICAgdmFyIHRvU3RyID0gU3RyaW5nKHRoaXMudG8pLnBhZFN0YXJ0KHRoaXMubWF4TGVuZ3RoLCAnMCcpO1xuICAgICAgdmFyIHZhbCA9IHRoaXMudmFsdWU7XG4gICAgICB2YXIgcHJlcFN0ciA9ICcnO1xuXG4gICAgICBmb3IgKHZhciBjaSA9IDA7IGNpIDwgc3RyLmxlbmd0aDsgKytjaSkge1xuICAgICAgICB2YXIgbmV4dFZhbCA9IHZhbCArIHByZXBTdHIgKyBzdHJbY2ldO1xuXG4gICAgICAgIHZhciBfdGhpcyRib3VuZGFyaWVzID0gdGhpcy5ib3VuZGFyaWVzKG5leHRWYWwpLFxuICAgICAgICAgICAgX3RoaXMkYm91bmRhcmllczIgPSBfc2xpY2VkVG9BcnJheShfdGhpcyRib3VuZGFyaWVzLCAyKSxcbiAgICAgICAgICAgIG1pbnN0ciA9IF90aGlzJGJvdW5kYXJpZXMyWzBdLFxuICAgICAgICAgICAgbWF4c3RyID0gX3RoaXMkYm91bmRhcmllczJbMV07XG5cbiAgICAgICAgaWYgKE51bWJlcihtYXhzdHIpIDwgdGhpcy5mcm9tKSBwcmVwU3RyICs9IGZyb21TdHJbbmV4dFZhbC5sZW5ndGggLSAxXTtlbHNlIGlmIChOdW1iZXIobWluc3RyKSA+IHRoaXMudG8pIHByZXBTdHIgKz0gdG9TdHJbbmV4dFZhbC5sZW5ndGggLSAxXTtlbHNlIHByZXBTdHIgKz0gc3RyW2NpXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXBTdHI7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkb1ZhbGlkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRvVmFsaWRhdGUoKSB7XG4gICAgICB2YXIgX2dldDI7XG5cbiAgICAgIHZhciBzdHIgPSB0aGlzLnZhbHVlO1xuICAgICAgdmFyIGZpcnN0Tm9uWmVybyA9IHN0ci5zZWFyY2goL1teMF0vKTtcbiAgICAgIGlmIChmaXJzdE5vblplcm8gPT09IC0xICYmIHN0ci5sZW5ndGggPD0gdGhpcy5fbWF0Y2hGcm9tKSByZXR1cm4gdHJ1ZTtcblxuICAgICAgdmFyIF90aGlzJGJvdW5kYXJpZXMzID0gdGhpcy5ib3VuZGFyaWVzKHN0ciksXG4gICAgICAgICAgX3RoaXMkYm91bmRhcmllczQgPSBfc2xpY2VkVG9BcnJheShfdGhpcyRib3VuZGFyaWVzMywgMiksXG4gICAgICAgICAgbWluc3RyID0gX3RoaXMkYm91bmRhcmllczRbMF0sXG4gICAgICAgICAgbWF4c3RyID0gX3RoaXMkYm91bmRhcmllczRbMV07XG5cbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5mcm9tIDw9IE51bWJlcihtYXhzdHIpICYmIE51bWJlcihtaW5zdHIpIDw9IHRoaXMudG8gJiYgKF9nZXQyID0gX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkUmFuZ2UucHJvdG90eXBlKSwgXCJkb1ZhbGlkYXRlXCIsIHRoaXMpKS5jYWxsLmFwcGx5KF9nZXQyLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTWFza2VkUmFuZ2U7XG59KE1hc2tlZFBhdHRlcm4pO1xuSU1hc2suTWFza2VkUmFuZ2UgPSBNYXNrZWRSYW5nZTtcblxuZXhwb3J0IGRlZmF1bHQgTWFza2VkUmFuZ2U7XG4iLCJpbXBvcnQgeyBkIGFzIF9pbmhlcml0cywgZSBhcyBfY3JlYXRlU3VwZXIsIF8gYXMgX2NyZWF0ZUNsYXNzLCBhIGFzIF9jbGFzc0NhbGxDaGVjaywgZyBhcyBfZ2V0LCBoIGFzIF9nZXRQcm90b3R5cGVPZiB9IGZyb20gJy4uL19yb2xsdXBQbHVnaW5CYWJlbEhlbHBlcnMtNmNjYjFmNjQuanMnO1xuaW1wb3J0IE1hc2tlZCBmcm9tICcuL2Jhc2UuanMnO1xuaW1wb3J0IElNYXNrIGZyb20gJy4uL2NvcmUvaG9sZGVyLmpzJztcbmltcG9ydCAnLi4vY29yZS9jaGFuZ2UtZGV0YWlscy5qcyc7XG5pbXBvcnQgJy4uL2NvcmUvY29udGludW91cy10YWlsLWRldGFpbHMuanMnO1xuaW1wb3J0ICcuLi9jb3JlL3V0aWxzLmpzJztcblxuLyoqIE1hc2tpbmcgYnkgUmVnRXhwICovXG5cbnZhciBNYXNrZWRSZWdFeHAgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9NYXNrZWQpIHtcbiAgX2luaGVyaXRzKE1hc2tlZFJlZ0V4cCwgX01hc2tlZCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihNYXNrZWRSZWdFeHApO1xuXG4gIGZ1bmN0aW9uIE1hc2tlZFJlZ0V4cCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWFza2VkUmVnRXhwKTtcblxuICAgIHJldHVybiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhNYXNrZWRSZWdFeHAsIFt7XG4gICAga2V5OiBcIl91cGRhdGVcIixcbiAgICB2YWx1ZTpcbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAgIEBwYXJhbSB7T2JqZWN0fSBvcHRzXHJcbiAgICAqL1xuICAgIGZ1bmN0aW9uIF91cGRhdGUob3B0cykge1xuICAgICAgaWYgKG9wdHMubWFzaykgb3B0cy52YWxpZGF0ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUuc2VhcmNoKG9wdHMubWFzaykgPj0gMDtcbiAgICAgIH07XG5cbiAgICAgIF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZFJlZ0V4cC5wcm90b3R5cGUpLCBcIl91cGRhdGVcIiwgdGhpcykuY2FsbCh0aGlzLCBvcHRzKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTWFza2VkUmVnRXhwO1xufShNYXNrZWQpO1xuSU1hc2suTWFza2VkUmVnRXhwID0gTWFza2VkUmVnRXhwO1xuXG5leHBvcnQgZGVmYXVsdCBNYXNrZWRSZWdFeHA7XG4iLCIvKiEgbnBtLmltL29iamVjdC1maXQtaW1hZ2VzIDMuMi40ICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBPRkkgPSAnYmZyZWQtaXQ6b2JqZWN0LWZpdC1pbWFnZXMnO1xudmFyIHByb3BSZWdleCA9IC8ob2JqZWN0LWZpdHxvYmplY3QtcG9zaXRpb24pXFxzKjpcXHMqKFstLlxcd1xccyVdKykvZztcbnZhciB0ZXN0SW1nID0gdHlwZW9mIEltYWdlID09PSAndW5kZWZpbmVkJyA/IHtzdHlsZTogeydvYmplY3QtcG9zaXRpb24nOiAxfX0gOiBuZXcgSW1hZ2UoKTtcbnZhciBzdXBwb3J0c09iamVjdEZpdCA9ICdvYmplY3QtZml0JyBpbiB0ZXN0SW1nLnN0eWxlO1xudmFyIHN1cHBvcnRzT2JqZWN0UG9zaXRpb24gPSAnb2JqZWN0LXBvc2l0aW9uJyBpbiB0ZXN0SW1nLnN0eWxlO1xudmFyIHN1cHBvcnRzT0ZJID0gJ2JhY2tncm91bmQtc2l6ZScgaW4gdGVzdEltZy5zdHlsZTtcbnZhciBzdXBwb3J0c0N1cnJlbnRTcmMgPSB0eXBlb2YgdGVzdEltZy5jdXJyZW50U3JjID09PSAnc3RyaW5nJztcbnZhciBuYXRpdmVHZXRBdHRyaWJ1dGUgPSB0ZXN0SW1nLmdldEF0dHJpYnV0ZTtcbnZhciBuYXRpdmVTZXRBdHRyaWJ1dGUgPSB0ZXN0SW1nLnNldEF0dHJpYnV0ZTtcbnZhciBhdXRvTW9kZUVuYWJsZWQgPSBmYWxzZTtcblxuZnVuY3Rpb24gY3JlYXRlUGxhY2Vob2xkZXIodywgaCkge1xuXHRyZXR1cm4gKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSdcIiArIHcgKyBcIicgaGVpZ2h0PSdcIiArIGggKyBcIiclM0UlM0Mvc3ZnJTNFXCIpO1xufVxuXG5mdW5jdGlvbiBwb2x5ZmlsbEN1cnJlbnRTcmMoZWwpIHtcblx0aWYgKGVsLnNyY3NldCAmJiAhc3VwcG9ydHNDdXJyZW50U3JjICYmIHdpbmRvdy5waWN0dXJlZmlsbCkge1xuXHRcdHZhciBwZiA9IHdpbmRvdy5waWN0dXJlZmlsbC5fO1xuXHRcdC8vIHBhcnNlIHNyY3NldCB3aXRoIHBpY3R1cmVmaWxsIHdoZXJlIGN1cnJlbnRTcmMgaXNuJ3QgYXZhaWxhYmxlXG5cdFx0aWYgKCFlbFtwZi5uc10gfHwgIWVsW3BmLm5zXS5ldmFsZWQpIHtcblx0XHRcdC8vIGZvcmNlIHN5bmNocm9ub3VzIHNyY3NldCBwYXJzaW5nXG5cdFx0XHRwZi5maWxsSW1nKGVsLCB7cmVzZWxlY3Q6IHRydWV9KTtcblx0XHR9XG5cblx0XHRpZiAoIWVsW3BmLm5zXS5jdXJTcmMpIHtcblx0XHRcdC8vIGZvcmNlIHBpY3R1cmVmaWxsIHRvIHBhcnNlIHNyY3NldFxuXHRcdFx0ZWxbcGYubnNdLnN1cHBvcnRlZCA9IGZhbHNlO1xuXHRcdFx0cGYuZmlsbEltZyhlbCwge3Jlc2VsZWN0OiB0cnVlfSk7XG5cdFx0fVxuXG5cdFx0Ly8gcmV0cmlldmUgcGFyc2VkIGN1cnJlbnRTcmMsIGlmIGFueVxuXHRcdGVsLmN1cnJlbnRTcmMgPSBlbFtwZi5uc10uY3VyU3JjIHx8IGVsLnNyYztcblx0fVxufVxuXG5mdW5jdGlvbiBnZXRTdHlsZShlbCkge1xuXHR2YXIgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsKS5mb250RmFtaWx5O1xuXHR2YXIgcGFyc2VkO1xuXHR2YXIgcHJvcHMgPSB7fTtcblx0d2hpbGUgKChwYXJzZWQgPSBwcm9wUmVnZXguZXhlYyhzdHlsZSkpICE9PSBudWxsKSB7XG5cdFx0cHJvcHNbcGFyc2VkWzFdXSA9IHBhcnNlZFsyXTtcblx0fVxuXHRyZXR1cm4gcHJvcHM7XG59XG5cbmZ1bmN0aW9uIHNldFBsYWNlaG9sZGVyKGltZywgd2lkdGgsIGhlaWdodCkge1xuXHQvLyBEZWZhdWx0OiBmaWxsIHdpZHRoLCBubyBoZWlnaHRcblx0dmFyIHBsYWNlaG9sZGVyID0gY3JlYXRlUGxhY2Vob2xkZXIod2lkdGggfHwgMSwgaGVpZ2h0IHx8IDApO1xuXG5cdC8vIE9ubHkgc2V0IHBsYWNlaG9sZGVyIGlmIGl0J3MgZGlmZmVyZW50XG5cdGlmIChuYXRpdmVHZXRBdHRyaWJ1dGUuY2FsbChpbWcsICdzcmMnKSAhPT0gcGxhY2Vob2xkZXIpIHtcblx0XHRuYXRpdmVTZXRBdHRyaWJ1dGUuY2FsbChpbWcsICdzcmMnLCBwbGFjZWhvbGRlcik7XG5cdH1cbn1cblxuZnVuY3Rpb24gb25JbWFnZVJlYWR5KGltZywgY2FsbGJhY2spIHtcblx0Ly8gbmF0dXJhbFdpZHRoIGlzIG9ubHkgYXZhaWxhYmxlIHdoZW4gdGhlIGltYWdlIGhlYWRlcnMgYXJlIGxvYWRlZCxcblx0Ly8gdGhpcyBsb29wIHdpbGwgcG9sbCBpdCBldmVyeSAxMDBtcy5cblx0aWYgKGltZy5uYXR1cmFsV2lkdGgpIHtcblx0XHRjYWxsYmFjayhpbWcpO1xuXHR9IGVsc2Uge1xuXHRcdHNldFRpbWVvdXQob25JbWFnZVJlYWR5LCAxMDAsIGltZywgY2FsbGJhY2spO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGZpeE9uZShlbCkge1xuXHR2YXIgc3R5bGUgPSBnZXRTdHlsZShlbCk7XG5cdHZhciBvZmkgPSBlbFtPRkldO1xuXHRzdHlsZVsnb2JqZWN0LWZpdCddID0gc3R5bGVbJ29iamVjdC1maXQnXSB8fCAnZmlsbCc7IC8vIGRlZmF1bHQgdmFsdWVcblxuXHQvLyBBdm9pZCBydW5uaW5nIHdoZXJlIHVubmVjZXNzYXJ5LCB1bmxlc3MgT0ZJIGhhZCBhbHJlYWR5IGRvbmUgaXRzIGRlZWRcblx0aWYgKCFvZmkuaW1nKSB7XG5cdFx0Ly8gZmlsbCBpcyB0aGUgZGVmYXVsdCBiZWhhdmlvciBzbyBubyBhY3Rpb24gaXMgbmVjZXNzYXJ5XG5cdFx0aWYgKHN0eWxlWydvYmplY3QtZml0J10gPT09ICdmaWxsJykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIFdoZXJlIG9iamVjdC1maXQgaXMgc3VwcG9ydGVkIGFuZCBvYmplY3QtcG9zaXRpb24gaXNuJ3QgKFNhZmFyaSA8IDEwKVxuXHRcdGlmIChcblx0XHRcdCFvZmkuc2tpcFRlc3QgJiYgLy8gdW5sZXNzIHVzZXIgd2FudHMgdG8gYXBwbHkgcmVnYXJkbGVzcyBvZiBicm93c2VyIHN1cHBvcnRcblx0XHRcdHN1cHBvcnRzT2JqZWN0Rml0ICYmIC8vIGlmIGJyb3dzZXIgYWxyZWFkeSBzdXBwb3J0cyBvYmplY3QtZml0XG5cdFx0XHQhc3R5bGVbJ29iamVjdC1wb3NpdGlvbiddIC8vIHVubGVzcyBvYmplY3QtcG9zaXRpb24gaXMgdXNlZFxuXHRcdCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0fVxuXG5cdC8vIGtlZXAgYSBjbG9uZSBpbiBtZW1vcnkgd2hpbGUgcmVzZXR0aW5nIHRoZSBvcmlnaW5hbCB0byBhIGJsYW5rXG5cdGlmICghb2ZpLmltZykge1xuXHRcdG9maS5pbWcgPSBuZXcgSW1hZ2UoZWwud2lkdGgsIGVsLmhlaWdodCk7XG5cdFx0b2ZpLmltZy5zcmNzZXQgPSBuYXRpdmVHZXRBdHRyaWJ1dGUuY2FsbChlbCwgXCJkYXRhLW9maS1zcmNzZXRcIikgfHwgZWwuc3Jjc2V0O1xuXHRcdG9maS5pbWcuc3JjID0gbmF0aXZlR2V0QXR0cmlidXRlLmNhbGwoZWwsIFwiZGF0YS1vZmktc3JjXCIpIHx8IGVsLnNyYztcblxuXHRcdC8vIHByZXNlcnZlIGZvciBhbnkgZnV0dXJlIGNsb25lTm9kZSBjYWxsc1xuXHRcdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9iZnJlZC1pdC9vYmplY3QtZml0LWltYWdlcy9pc3N1ZXMvNTNcblx0XHRuYXRpdmVTZXRBdHRyaWJ1dGUuY2FsbChlbCwgXCJkYXRhLW9maS1zcmNcIiwgZWwuc3JjKTtcblx0XHRpZiAoZWwuc3Jjc2V0KSB7XG5cdFx0XHRuYXRpdmVTZXRBdHRyaWJ1dGUuY2FsbChlbCwgXCJkYXRhLW9maS1zcmNzZXRcIiwgZWwuc3Jjc2V0KTtcblx0XHR9XG5cblx0XHRzZXRQbGFjZWhvbGRlcihlbCwgZWwubmF0dXJhbFdpZHRoIHx8IGVsLndpZHRoLCBlbC5uYXR1cmFsSGVpZ2h0IHx8IGVsLmhlaWdodCk7XG5cblx0XHQvLyByZW1vdmUgc3Jjc2V0IGJlY2F1c2UgaXQgb3ZlcnJpZGVzIHNyY1xuXHRcdGlmIChlbC5zcmNzZXQpIHtcblx0XHRcdGVsLnNyY3NldCA9ICcnO1xuXHRcdH1cblx0XHR0cnkge1xuXHRcdFx0a2VlcFNyY1VzYWJsZShlbCk7XG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRpZiAod2luZG93LmNvbnNvbGUpIHtcblx0XHRcdFx0Y29uc29sZS53YXJuKCdodHRwczovL2JpdC5seS9vZmktb2xkLWJyb3dzZXInKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwb2x5ZmlsbEN1cnJlbnRTcmMob2ZpLmltZyk7XG5cblx0ZWwuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoXFxcIlwiICsgKChvZmkuaW1nLmN1cnJlbnRTcmMgfHwgb2ZpLmltZy5zcmMpLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKSkgKyBcIlxcXCIpXCI7XG5cdGVsLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9IHN0eWxlWydvYmplY3QtcG9zaXRpb24nXSB8fCAnY2VudGVyJztcblx0ZWwuc3R5bGUuYmFja2dyb3VuZFJlcGVhdCA9ICduby1yZXBlYXQnO1xuXHRlbC5zdHlsZS5iYWNrZ3JvdW5kT3JpZ2luID0gJ2NvbnRlbnQtYm94JztcblxuXHRpZiAoL3NjYWxlLWRvd24vLnRlc3Qoc3R5bGVbJ29iamVjdC1maXQnXSkpIHtcblx0XHRvbkltYWdlUmVhZHkob2ZpLmltZywgZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKG9maS5pbWcubmF0dXJhbFdpZHRoID4gZWwud2lkdGggfHwgb2ZpLmltZy5uYXR1cmFsSGVpZ2h0ID4gZWwuaGVpZ2h0KSB7XG5cdFx0XHRcdGVsLnN0eWxlLmJhY2tncm91bmRTaXplID0gJ2NvbnRhaW4nO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZWwuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnYXV0byc7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0ZWwuc3R5bGUuYmFja2dyb3VuZFNpemUgPSBzdHlsZVsnb2JqZWN0LWZpdCddLnJlcGxhY2UoJ25vbmUnLCAnYXV0bycpLnJlcGxhY2UoJ2ZpbGwnLCAnMTAwJSAxMDAlJyk7XG5cdH1cblxuXHRvbkltYWdlUmVhZHkob2ZpLmltZywgZnVuY3Rpb24gKGltZykge1xuXHRcdHNldFBsYWNlaG9sZGVyKGVsLCBpbWcubmF0dXJhbFdpZHRoLCBpbWcubmF0dXJhbEhlaWdodCk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBrZWVwU3JjVXNhYmxlKGVsKSB7XG5cdHZhciBkZXNjcmlwdG9ycyA9IHtcblx0XHRnZXQ6IGZ1bmN0aW9uIGdldChwcm9wKSB7XG5cdFx0XHRyZXR1cm4gZWxbT0ZJXS5pbWdbcHJvcCA/IHByb3AgOiAnc3JjJ107XG5cdFx0fSxcblx0XHRzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSwgcHJvcCkge1xuXHRcdFx0ZWxbT0ZJXS5pbWdbcHJvcCA/IHByb3AgOiAnc3JjJ10gPSB2YWx1ZTtcblx0XHRcdG5hdGl2ZVNldEF0dHJpYnV0ZS5jYWxsKGVsLCAoXCJkYXRhLW9maS1cIiArIHByb3ApLCB2YWx1ZSk7IC8vIHByZXNlcnZlIGZvciBhbnkgZnV0dXJlIGNsb25lTm9kZVxuXHRcdFx0Zml4T25lKGVsKTtcblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9XG5cdH07XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbCwgJ3NyYycsIGRlc2NyaXB0b3JzKTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGVsLCAnY3VycmVudFNyYycsIHtcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRlc2NyaXB0b3JzLmdldCgnY3VycmVudFNyYycpOyB9XG5cdH0pO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZWwsICdzcmNzZXQnLCB7XG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBkZXNjcmlwdG9ycy5nZXQoJ3NyY3NldCcpOyB9LFxuXHRcdHNldDogZnVuY3Rpb24gKHNzKSB7IHJldHVybiBkZXNjcmlwdG9ycy5zZXQoc3MsICdzcmNzZXQnKTsgfVxuXHR9KTtcbn1cblxuZnVuY3Rpb24gaGlqYWNrQXR0cmlidXRlcygpIHtcblx0ZnVuY3Rpb24gZ2V0T2ZpSW1hZ2VNYXliZShlbCwgbmFtZSkge1xuXHRcdHJldHVybiBlbFtPRkldICYmIGVsW09GSV0uaW1nICYmIChuYW1lID09PSAnc3JjJyB8fCBuYW1lID09PSAnc3Jjc2V0JykgPyBlbFtPRkldLmltZyA6IGVsO1xuXHR9XG5cdGlmICghc3VwcG9ydHNPYmplY3RQb3NpdGlvbikge1xuXHRcdEhUTUxJbWFnZUVsZW1lbnQucHJvdG90eXBlLmdldEF0dHJpYnV0ZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG5cdFx0XHRyZXR1cm4gbmF0aXZlR2V0QXR0cmlidXRlLmNhbGwoZ2V0T2ZpSW1hZ2VNYXliZSh0aGlzLCBuYW1lKSwgbmFtZSk7XG5cdFx0fTtcblxuXHRcdEhUTUxJbWFnZUVsZW1lbnQucHJvdG90eXBlLnNldEF0dHJpYnV0ZSA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuXHRcdFx0cmV0dXJuIG5hdGl2ZVNldEF0dHJpYnV0ZS5jYWxsKGdldE9maUltYWdlTWF5YmUodGhpcywgbmFtZSksIG5hbWUsIFN0cmluZyh2YWx1ZSkpO1xuXHRcdH07XG5cdH1cbn1cblxuZnVuY3Rpb24gZml4KGltZ3MsIG9wdHMpIHtcblx0dmFyIHN0YXJ0QXV0b01vZGUgPSAhYXV0b01vZGVFbmFibGVkICYmICFpbWdzO1xuXHRvcHRzID0gb3B0cyB8fCB7fTtcblx0aW1ncyA9IGltZ3MgfHwgJ2ltZyc7XG5cblx0aWYgKChzdXBwb3J0c09iamVjdFBvc2l0aW9uICYmICFvcHRzLnNraXBUZXN0KSB8fCAhc3VwcG9ydHNPRkkpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvLyB1c2UgaW1ncyBhcyBhIHNlbGVjdG9yIG9yIGp1c3Qgc2VsZWN0IGFsbCBpbWFnZXNcblx0aWYgKGltZ3MgPT09ICdpbWcnKSB7XG5cdFx0aW1ncyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbWcnKTtcblx0fSBlbHNlIGlmICh0eXBlb2YgaW1ncyA9PT0gJ3N0cmluZycpIHtcblx0XHRpbWdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChpbWdzKTtcblx0fSBlbHNlIGlmICghKCdsZW5ndGgnIGluIGltZ3MpKSB7XG5cdFx0aW1ncyA9IFtpbWdzXTtcblx0fVxuXG5cdC8vIGFwcGx5IGZpeCB0byBhbGxcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBpbWdzLmxlbmd0aDsgaSsrKSB7XG5cdFx0aW1nc1tpXVtPRkldID0gaW1nc1tpXVtPRkldIHx8IHtcblx0XHRcdHNraXBUZXN0OiBvcHRzLnNraXBUZXN0XG5cdFx0fTtcblx0XHRmaXhPbmUoaW1nc1tpXSk7XG5cdH1cblxuXHRpZiAoc3RhcnRBdXRvTW9kZSkge1xuXHRcdGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRpZiAoZS50YXJnZXQudGFnTmFtZSA9PT0gJ0lNRycpIHtcblx0XHRcdFx0Zml4KGUudGFyZ2V0LCB7XG5cdFx0XHRcdFx0c2tpcFRlc3Q6IG9wdHMuc2tpcFRlc3Rcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSwgdHJ1ZSk7XG5cdFx0YXV0b01vZGVFbmFibGVkID0gdHJ1ZTtcblx0XHRpbWdzID0gJ2ltZyc7IC8vIHJlc2V0IHRvIGEgZ2VuZXJpYyBzZWxlY3RvciBmb3Igd2F0Y2hNUVxuXHR9XG5cblx0Ly8gaWYgcmVxdWVzdGVkLCB3YXRjaCBtZWRpYSBxdWVyaWVzIGZvciBvYmplY3QtZml0IGNoYW5nZVxuXHRpZiAob3B0cy53YXRjaE1RKSB7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZpeC5iaW5kKG51bGwsIGltZ3MsIHtcblx0XHRcdHNraXBUZXN0OiBvcHRzLnNraXBUZXN0XG5cdFx0fSkpO1xuXHR9XG59XG5cbmZpeC5zdXBwb3J0c09iamVjdEZpdCA9IHN1cHBvcnRzT2JqZWN0Rml0O1xuZml4LnN1cHBvcnRzT2JqZWN0UG9zaXRpb24gPSBzdXBwb3J0c09iamVjdFBvc2l0aW9uO1xuXG5oaWphY2tBdHRyaWJ1dGVzKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZml4O1xuIiwiIWZ1bmN0aW9uKHJvb3QsIGZhY3RvcnkpIHtcbiAgICBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGRlZmluZSAmJiBkZWZpbmUuYW1kID8gLy8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlIHVubGVzcyBhbWRNb2R1bGVJZCBpcyBzZXRcbiAgICBkZWZpbmUoW10sIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gcm9vdC5zdmc0ZXZlcnlib2R5ID0gZmFjdG9yeSgpO1xuICAgIH0pIDogXCJvYmplY3RcIiA9PSB0eXBlb2YgbW9kdWxlICYmIG1vZHVsZS5leHBvcnRzID8gLy8gTm9kZS4gRG9lcyBub3Qgd29yayB3aXRoIHN0cmljdCBDb21tb25KUywgYnV0XG4gICAgLy8gb25seSBDb21tb25KUy1saWtlIGVudmlyb25tZW50cyB0aGF0IHN1cHBvcnQgbW9kdWxlLmV4cG9ydHMsXG4gICAgLy8gbGlrZSBOb2RlLlxuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpIDogcm9vdC5zdmc0ZXZlcnlib2R5ID0gZmFjdG9yeSgpO1xufSh0aGlzLCBmdW5jdGlvbigpIHtcbiAgICAvKiEgc3ZnNGV2ZXJ5Ym9keSB2Mi4xLjkgfCBnaXRodWIuY29tL2pvbmF0aGFudG5lYWwvc3ZnNGV2ZXJ5Ym9keSAqL1xuICAgIGZ1bmN0aW9uIGVtYmVkKHBhcmVudCwgc3ZnLCB0YXJnZXQpIHtcbiAgICAgICAgLy8gaWYgdGhlIHRhcmdldCBleGlzdHNcbiAgICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAgICAgLy8gY3JlYXRlIGEgZG9jdW1lbnQgZnJhZ21lbnQgdG8gaG9sZCB0aGUgY29udGVudHMgb2YgdGhlIHRhcmdldFxuICAgICAgICAgICAgdmFyIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLCB2aWV3Qm94ID0gIXN2Zy5oYXNBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIpICYmIHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIpO1xuICAgICAgICAgICAgLy8gY29uZGl0aW9uYWxseSBzZXQgdGhlIHZpZXdCb3ggb24gdGhlIHN2Z1xuICAgICAgICAgICAgdmlld0JveCAmJiBzdmcuc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCB2aWV3Qm94KTtcbiAgICAgICAgICAgIC8vIGNvcHkgdGhlIGNvbnRlbnRzIG9mIHRoZSBjbG9uZSBpbnRvIHRoZSBmcmFnbWVudFxuICAgICAgICAgICAgZm9yICgvLyBjbG9uZSB0aGUgdGFyZ2V0XG4gICAgICAgICAgICB2YXIgY2xvbmUgPSB0YXJnZXQuY2xvbmVOb2RlKCEwKTsgY2xvbmUuY2hpbGROb2Rlcy5sZW5ndGg7ICkge1xuICAgICAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGNsb25lLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gYXBwZW5kIHRoZSBmcmFnbWVudCBpbnRvIHRoZSBzdmdcbiAgICAgICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChmcmFnbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gbG9hZHJlYWR5c3RhdGVjaGFuZ2UoeGhyKSB7XG4gICAgICAgIC8vIGxpc3RlbiB0byBjaGFuZ2VzIGluIHRoZSByZXF1ZXN0XG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIGlmIHRoZSByZXF1ZXN0IGlzIHJlYWR5XG4gICAgICAgICAgICBpZiAoNCA9PT0geGhyLnJlYWR5U3RhdGUpIHtcbiAgICAgICAgICAgICAgICAvLyBnZXQgdGhlIGNhY2hlZCBodG1sIGRvY3VtZW50XG4gICAgICAgICAgICAgICAgdmFyIGNhY2hlZERvY3VtZW50ID0geGhyLl9jYWNoZWREb2N1bWVudDtcbiAgICAgICAgICAgICAgICAvLyBlbnN1cmUgdGhlIGNhY2hlZCBodG1sIGRvY3VtZW50IGJhc2VkIG9uIHRoZSB4aHIgcmVzcG9uc2VcbiAgICAgICAgICAgICAgICBjYWNoZWREb2N1bWVudCB8fCAoY2FjaGVkRG9jdW1lbnQgPSB4aHIuX2NhY2hlZERvY3VtZW50ID0gZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KFwiXCIpLCBcbiAgICAgICAgICAgICAgICBjYWNoZWREb2N1bWVudC5ib2R5LmlubmVySFRNTCA9IHhoci5yZXNwb25zZVRleHQsIHhoci5fY2FjaGVkVGFyZ2V0ID0ge30pLCAvLyBjbGVhciB0aGUgeGhyIGVtYmVkcyBsaXN0IGFuZCBlbWJlZCBlYWNoIGl0ZW1cbiAgICAgICAgICAgICAgICB4aHIuX2VtYmVkcy5zcGxpY2UoMCkubWFwKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBjYWNoZWQgdGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSB4aHIuX2NhY2hlZFRhcmdldFtpdGVtLmlkXTtcbiAgICAgICAgICAgICAgICAgICAgLy8gZW5zdXJlIHRoZSBjYWNoZWQgdGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldCB8fCAodGFyZ2V0ID0geGhyLl9jYWNoZWRUYXJnZXRbaXRlbS5pZF0gPSBjYWNoZWREb2N1bWVudC5nZXRFbGVtZW50QnlJZChpdGVtLmlkKSksIFxuICAgICAgICAgICAgICAgICAgICAvLyBlbWJlZCB0aGUgdGFyZ2V0IGludG8gdGhlIHN2Z1xuICAgICAgICAgICAgICAgICAgICBlbWJlZChpdGVtLnBhcmVudCwgaXRlbS5zdmcsIHRhcmdldCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIC8vIHRlc3QgdGhlIHJlYWR5IHN0YXRlIGNoYW5nZSBpbW1lZGlhdGVseVxuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHN2ZzRldmVyeWJvZHkocmF3b3B0cykge1xuICAgICAgICBmdW5jdGlvbiBvbmludGVydmFsKCkge1xuICAgICAgICAgICAgLy8gd2hpbGUgdGhlIGluZGV4IGV4aXN0cyBpbiB0aGUgbGl2ZSA8dXNlPiBjb2xsZWN0aW9uXG4gICAgICAgICAgICBmb3IgKC8vIGdldCB0aGUgY2FjaGVkIDx1c2U+IGluZGV4XG4gICAgICAgICAgICB2YXIgaW5kZXggPSAwOyBpbmRleCA8IHVzZXMubGVuZ3RoOyApIHtcbiAgICAgICAgICAgICAgICAvLyBnZXQgdGhlIGN1cnJlbnQgPHVzZT5cbiAgICAgICAgICAgICAgICB2YXIgdXNlID0gdXNlc1tpbmRleF0sIHBhcmVudCA9IHVzZS5wYXJlbnROb2RlLCBzdmcgPSBnZXRTVkdBbmNlc3RvcihwYXJlbnQpLCBzcmMgPSB1c2UuZ2V0QXR0cmlidXRlKFwieGxpbms6aHJlZlwiKSB8fCB1c2UuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTtcbiAgICAgICAgICAgICAgICBpZiAoIXNyYyAmJiBvcHRzLmF0dHJpYnV0ZU5hbWUgJiYgKHNyYyA9IHVzZS5nZXRBdHRyaWJ1dGUob3B0cy5hdHRyaWJ1dGVOYW1lKSksIFxuICAgICAgICAgICAgICAgIHN2ZyAmJiBzcmMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvbHlmaWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW9wdHMudmFsaWRhdGUgfHwgb3B0cy52YWxpZGF0ZShzcmMsIHN2ZywgdXNlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSB0aGUgPHVzZT4gZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZCh1c2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBhcnNlIHRoZSBzcmMgYW5kIGdldCB0aGUgdXJsIGFuZCBpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzcmNTcGxpdCA9IHNyYy5zcGxpdChcIiNcIiksIHVybCA9IHNyY1NwbGl0LnNoaWZ0KCksIGlkID0gc3JjU3BsaXQuam9pbihcIiNcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIGxpbmsgaXMgZXh0ZXJuYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodXJsLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBnZXQgdGhlIGNhY2hlZCB4aHIgcmVxdWVzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgeGhyID0gcmVxdWVzdHNbdXJsXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZW5zdXJlIHRoZSB4aHIgcmVxdWVzdCBleGlzdHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyIHx8ICh4aHIgPSByZXF1ZXN0c1t1cmxdID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCksIHhoci5vcGVuKFwiR0VUXCIsIHVybCksIHhoci5zZW5kKCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIuX2VtYmVkcyA9IFtdKSwgLy8gYWRkIHRoZSBzdmcgYW5kIGlkIGFzIGFuIGl0ZW0gdG8gdGhlIHhociBlbWJlZHMgbGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIuX2VtYmVkcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudDogcGFyZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ZnOiBzdmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIC8vIHByZXBhcmUgdGhlIHhociByZWFkeSBzdGF0ZSBjaGFuZ2UgZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZHJlYWR5c3RhdGVjaGFuZ2UoeGhyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBlbWJlZCB0aGUgbG9jYWwgaWQgaW50byB0aGUgc3ZnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYmVkKHBhcmVudCwgc3ZnLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW5jcmVhc2UgdGhlIGluZGV4IHdoZW4gdGhlIHByZXZpb3VzIHZhbHVlIHdhcyBub3QgXCJ2YWxpZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKytpbmRleCwgKytudW1iZXJPZlN2Z1VzZUVsZW1lbnRzVG9CeXBhc3M7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBpbmNyZWFzZSB0aGUgaW5kZXggd2hlbiB0aGUgcHJldmlvdXMgdmFsdWUgd2FzIG5vdCBcInZhbGlkXCJcbiAgICAgICAgICAgICAgICAgICAgKytpbmRleDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjb250aW51ZSB0aGUgaW50ZXJ2YWxcbiAgICAgICAgICAgICghdXNlcy5sZW5ndGggfHwgdXNlcy5sZW5ndGggLSBudW1iZXJPZlN2Z1VzZUVsZW1lbnRzVG9CeXBhc3MgPiAwKSAmJiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUob25pbnRlcnZhbCwgNjcpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwb2x5ZmlsbCwgb3B0cyA9IE9iamVjdChyYXdvcHRzKSwgbmV3ZXJJRVVBID0gL1xcYlRyaWRlbnRcXC9bNTY3XVxcYnxcXGJNU0lFICg/Ojl8MTApXFwuMFxcYi8sIHdlYmtpdFVBID0gL1xcYkFwcGxlV2ViS2l0XFwvKFxcZCspXFxiLywgb2xkZXJFZGdlVUEgPSAvXFxiRWRnZVxcLzEyXFwuKFxcZCspXFxiLywgZWRnZVVBID0gL1xcYkVkZ2VcXC8uKFxcZCspXFxiLywgaW5JZnJhbWUgPSB3aW5kb3cudG9wICE9PSB3aW5kb3cuc2VsZjtcbiAgICAgICAgcG9seWZpbGwgPSBcInBvbHlmaWxsXCIgaW4gb3B0cyA/IG9wdHMucG9seWZpbGwgOiBuZXdlcklFVUEudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSB8fCAobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaChvbGRlckVkZ2VVQSkgfHwgW10pWzFdIDwgMTA1NDcgfHwgKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2god2Via2l0VUEpIHx8IFtdKVsxXSA8IDUzNyB8fCBlZGdlVUEudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSAmJiBpbklmcmFtZTtcbiAgICAgICAgLy8gY3JlYXRlIHhociByZXF1ZXN0cyBvYmplY3RcbiAgICAgICAgdmFyIHJlcXVlc3RzID0ge30sIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgc2V0VGltZW91dCwgdXNlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidXNlXCIpLCBudW1iZXJPZlN2Z1VzZUVsZW1lbnRzVG9CeXBhc3MgPSAwO1xuICAgICAgICAvLyBjb25kaXRpb25hbGx5IHN0YXJ0IHRoZSBpbnRlcnZhbCBpZiB0aGUgcG9seWZpbGwgaXMgYWN0aXZlXG4gICAgICAgIHBvbHlmaWxsICYmIG9uaW50ZXJ2YWwoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0U1ZHQW5jZXN0b3Iobm9kZSkge1xuICAgICAgICBmb3IgKHZhciBzdmcgPSBub2RlOyBcInN2Z1wiICE9PSBzdmcubm9kZU5hbWUudG9Mb3dlckNhc2UoKSAmJiAoc3ZnID0gc3ZnLnBhcmVudE5vZGUpOyApIHt9XG4gICAgICAgIHJldHVybiBzdmc7XG4gICAgfVxuICAgIHJldHVybiBzdmc0ZXZlcnlib2R5O1xufSk7IiwiLyoqIVxuKiB0aXBweS5qcyB2Ni4zLjFcbiogKGMpIDIwMTctMjAyMSBhdG9taWtzXG4qIE1JVCBMaWNlbnNlXG4qL1xuaW1wb3J0IHsgY3JlYXRlUG9wcGVyLCBhcHBseVN0eWxlcyB9IGZyb20gJ0Bwb3BwZXJqcy9jb3JlJztcblxudmFyIFJPVU5EX0FSUk9XID0gJzxzdmcgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjZcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0wIDZzMS43OTYtLjAxMyA0LjY3LTMuNjE1QzUuODUxLjkgNi45My4wMDYgOCAwYzEuMDctLjAwNiAyLjE0OC44ODcgMy4zNDMgMi4zODVDMTQuMjMzIDYuMDA1IDE2IDYgMTYgNkgwelwiPjwvc3ZnPic7XG52YXIgQk9YX0NMQVNTID0gXCJ0aXBweS1ib3hcIjtcbnZhciBDT05URU5UX0NMQVNTID0gXCJ0aXBweS1jb250ZW50XCI7XG52YXIgQkFDS0RST1BfQ0xBU1MgPSBcInRpcHB5LWJhY2tkcm9wXCI7XG52YXIgQVJST1dfQ0xBU1MgPSBcInRpcHB5LWFycm93XCI7XG52YXIgU1ZHX0FSUk9XX0NMQVNTID0gXCJ0aXBweS1zdmctYXJyb3dcIjtcbnZhciBUT1VDSF9PUFRJT05TID0ge1xuICBwYXNzaXZlOiB0cnVlLFxuICBjYXB0dXJlOiB0cnVlXG59O1xuXG5mdW5jdGlvbiBoYXNPd25Qcm9wZXJ0eShvYmosIGtleSkge1xuICByZXR1cm4ge30uaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSk7XG59XG5mdW5jdGlvbiBnZXRWYWx1ZUF0SW5kZXhPclJldHVybih2YWx1ZSwgaW5kZXgsIGRlZmF1bHRWYWx1ZSkge1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICB2YXIgdiA9IHZhbHVlW2luZGV4XTtcbiAgICByZXR1cm4gdiA9PSBudWxsID8gQXJyYXkuaXNBcnJheShkZWZhdWx0VmFsdWUpID8gZGVmYXVsdFZhbHVlW2luZGV4XSA6IGRlZmF1bHRWYWx1ZSA6IHY7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG5mdW5jdGlvbiBpc1R5cGUodmFsdWUsIHR5cGUpIHtcbiAgdmFyIHN0ciA9IHt9LnRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICByZXR1cm4gc3RyLmluZGV4T2YoJ1tvYmplY3QnKSA9PT0gMCAmJiBzdHIuaW5kZXhPZih0eXBlICsgXCJdXCIpID4gLTE7XG59XG5mdW5jdGlvbiBpbnZva2VXaXRoQXJnc09yUmV0dXJuKHZhbHVlLCBhcmdzKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgPyB2YWx1ZS5hcHBseSh2b2lkIDAsIGFyZ3MpIDogdmFsdWU7XG59XG5mdW5jdGlvbiBkZWJvdW5jZShmbiwgbXMpIHtcbiAgLy8gQXZvaWQgd3JhcHBpbmcgaW4gYHNldFRpbWVvdXRgIGlmIG1zIGlzIDAgYW55d2F5XG4gIGlmIChtcyA9PT0gMCkge1xuICAgIHJldHVybiBmbjtcbiAgfVxuXG4gIHZhciB0aW1lb3V0O1xuICByZXR1cm4gZnVuY3Rpb24gKGFyZykge1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBmbihhcmcpO1xuICAgIH0sIG1zKTtcbiAgfTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVByb3BlcnRpZXMob2JqLCBrZXlzKSB7XG4gIHZhciBjbG9uZSA9IE9iamVjdC5hc3NpZ24oe30sIG9iaik7XG4gIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgZGVsZXRlIGNsb25lW2tleV07XG4gIH0pO1xuICByZXR1cm4gY2xvbmU7XG59XG5mdW5jdGlvbiBzcGxpdEJ5U3BhY2VzKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZS5zcGxpdCgvXFxzKy8pLmZpbHRlcihCb29sZWFuKTtcbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZVRvQXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuIFtdLmNvbmNhdCh2YWx1ZSk7XG59XG5mdW5jdGlvbiBwdXNoSWZVbmlxdWUoYXJyLCB2YWx1ZSkge1xuICBpZiAoYXJyLmluZGV4T2YodmFsdWUpID09PSAtMSkge1xuICAgIGFyci5wdXNoKHZhbHVlKTtcbiAgfVxufVxuZnVuY3Rpb24gdW5pcXVlKGFycikge1xuICByZXR1cm4gYXJyLmZpbHRlcihmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICByZXR1cm4gYXJyLmluZGV4T2YoaXRlbSkgPT09IGluZGV4O1xuICB9KTtcbn1cbmZ1bmN0aW9uIGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcbn1cbmZ1bmN0aW9uIGFycmF5RnJvbSh2YWx1ZSkge1xuICByZXR1cm4gW10uc2xpY2UuY2FsbCh2YWx1ZSk7XG59XG5mdW5jdGlvbiByZW1vdmVVbmRlZmluZWRQcm9wcyhvYmopIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGtleSkge1xuICAgIGlmIChvYmpba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBhY2Nba2V5XSA9IG9ialtrZXldO1xuICAgIH1cblxuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcbn1cblxuZnVuY3Rpb24gZGl2KCkge1xuICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG59XG5mdW5jdGlvbiBpc0VsZW1lbnQodmFsdWUpIHtcbiAgcmV0dXJuIFsnRWxlbWVudCcsICdGcmFnbWVudCddLnNvbWUoZnVuY3Rpb24gKHR5cGUpIHtcbiAgICByZXR1cm4gaXNUeXBlKHZhbHVlLCB0eXBlKTtcbiAgfSk7XG59XG5mdW5jdGlvbiBpc05vZGVMaXN0KHZhbHVlKSB7XG4gIHJldHVybiBpc1R5cGUodmFsdWUsICdOb2RlTGlzdCcpO1xufVxuZnVuY3Rpb24gaXNNb3VzZUV2ZW50KHZhbHVlKSB7XG4gIHJldHVybiBpc1R5cGUodmFsdWUsICdNb3VzZUV2ZW50Jyk7XG59XG5mdW5jdGlvbiBpc1JlZmVyZW5jZUVsZW1lbnQodmFsdWUpIHtcbiAgcmV0dXJuICEhKHZhbHVlICYmIHZhbHVlLl90aXBweSAmJiB2YWx1ZS5fdGlwcHkucmVmZXJlbmNlID09PSB2YWx1ZSk7XG59XG5mdW5jdGlvbiBnZXRBcnJheU9mRWxlbWVudHModmFsdWUpIHtcbiAgaWYgKGlzRWxlbWVudCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gW3ZhbHVlXTtcbiAgfVxuXG4gIGlmIChpc05vZGVMaXN0KHZhbHVlKSkge1xuICAgIHJldHVybiBhcnJheUZyb20odmFsdWUpO1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIGFycmF5RnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHZhbHVlKSk7XG59XG5mdW5jdGlvbiBzZXRUcmFuc2l0aW9uRHVyYXRpb24oZWxzLCB2YWx1ZSkge1xuICBlbHMuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICBpZiAoZWwpIHtcbiAgICAgIGVsLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IHZhbHVlICsgXCJtc1wiO1xuICAgIH1cbiAgfSk7XG59XG5mdW5jdGlvbiBzZXRWaXNpYmlsaXR5U3RhdGUoZWxzLCBzdGF0ZSkge1xuICBlbHMuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICBpZiAoZWwpIHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZSgnZGF0YS1zdGF0ZScsIHN0YXRlKTtcbiAgICB9XG4gIH0pO1xufVxuZnVuY3Rpb24gZ2V0T3duZXJEb2N1bWVudChlbGVtZW50T3JFbGVtZW50cykge1xuICB2YXIgX2VsZW1lbnQkb3duZXJEb2N1bWVuO1xuXG4gIHZhciBfbm9ybWFsaXplVG9BcnJheSA9IG5vcm1hbGl6ZVRvQXJyYXkoZWxlbWVudE9yRWxlbWVudHMpLFxuICAgICAgZWxlbWVudCA9IF9ub3JtYWxpemVUb0FycmF5WzBdOyAvLyBFbGVtZW50cyBjcmVhdGVkIHZpYSBhIDx0ZW1wbGF0ZT4gaGF2ZSBhbiBvd25lckRvY3VtZW50IHdpdGggbm8gcmVmZXJlbmNlIHRvIHRoZSBib2R5XG5cblxuICByZXR1cm4gKGVsZW1lbnQgPT0gbnVsbCA/IHZvaWQgMCA6IChfZWxlbWVudCRvd25lckRvY3VtZW4gPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQpID09IG51bGwgPyB2b2lkIDAgOiBfZWxlbWVudCRvd25lckRvY3VtZW4uYm9keSkgPyBlbGVtZW50Lm93bmVyRG9jdW1lbnQgOiBkb2N1bWVudDtcbn1cbmZ1bmN0aW9uIGlzQ3Vyc29yT3V0c2lkZUludGVyYWN0aXZlQm9yZGVyKHBvcHBlclRyZWVEYXRhLCBldmVudCkge1xuICB2YXIgY2xpZW50WCA9IGV2ZW50LmNsaWVudFgsXG4gICAgICBjbGllbnRZID0gZXZlbnQuY2xpZW50WTtcbiAgcmV0dXJuIHBvcHBlclRyZWVEYXRhLmV2ZXJ5KGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIHBvcHBlclJlY3QgPSBfcmVmLnBvcHBlclJlY3QsXG4gICAgICAgIHBvcHBlclN0YXRlID0gX3JlZi5wb3BwZXJTdGF0ZSxcbiAgICAgICAgcHJvcHMgPSBfcmVmLnByb3BzO1xuICAgIHZhciBpbnRlcmFjdGl2ZUJvcmRlciA9IHByb3BzLmludGVyYWN0aXZlQm9yZGVyO1xuICAgIHZhciBiYXNlUGxhY2VtZW50ID0gZ2V0QmFzZVBsYWNlbWVudChwb3BwZXJTdGF0ZS5wbGFjZW1lbnQpO1xuICAgIHZhciBvZmZzZXREYXRhID0gcG9wcGVyU3RhdGUubW9kaWZpZXJzRGF0YS5vZmZzZXQ7XG5cbiAgICBpZiAoIW9mZnNldERhdGEpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHZhciB0b3BEaXN0YW5jZSA9IGJhc2VQbGFjZW1lbnQgPT09ICdib3R0b20nID8gb2Zmc2V0RGF0YS50b3AueSA6IDA7XG4gICAgdmFyIGJvdHRvbURpc3RhbmNlID0gYmFzZVBsYWNlbWVudCA9PT0gJ3RvcCcgPyBvZmZzZXREYXRhLmJvdHRvbS55IDogMDtcbiAgICB2YXIgbGVmdERpc3RhbmNlID0gYmFzZVBsYWNlbWVudCA9PT0gJ3JpZ2h0JyA/IG9mZnNldERhdGEubGVmdC54IDogMDtcbiAgICB2YXIgcmlnaHREaXN0YW5jZSA9IGJhc2VQbGFjZW1lbnQgPT09ICdsZWZ0JyA/IG9mZnNldERhdGEucmlnaHQueCA6IDA7XG4gICAgdmFyIGV4Y2VlZHNUb3AgPSBwb3BwZXJSZWN0LnRvcCAtIGNsaWVudFkgKyB0b3BEaXN0YW5jZSA+IGludGVyYWN0aXZlQm9yZGVyO1xuICAgIHZhciBleGNlZWRzQm90dG9tID0gY2xpZW50WSAtIHBvcHBlclJlY3QuYm90dG9tIC0gYm90dG9tRGlzdGFuY2UgPiBpbnRlcmFjdGl2ZUJvcmRlcjtcbiAgICB2YXIgZXhjZWVkc0xlZnQgPSBwb3BwZXJSZWN0LmxlZnQgLSBjbGllbnRYICsgbGVmdERpc3RhbmNlID4gaW50ZXJhY3RpdmVCb3JkZXI7XG4gICAgdmFyIGV4Y2VlZHNSaWdodCA9IGNsaWVudFggLSBwb3BwZXJSZWN0LnJpZ2h0IC0gcmlnaHREaXN0YW5jZSA+IGludGVyYWN0aXZlQm9yZGVyO1xuICAgIHJldHVybiBleGNlZWRzVG9wIHx8IGV4Y2VlZHNCb3R0b20gfHwgZXhjZWVkc0xlZnQgfHwgZXhjZWVkc1JpZ2h0O1xuICB9KTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZVRyYW5zaXRpb25FbmRMaXN0ZW5lcihib3gsIGFjdGlvbiwgbGlzdGVuZXIpIHtcbiAgdmFyIG1ldGhvZCA9IGFjdGlvbiArIFwiRXZlbnRMaXN0ZW5lclwiOyAvLyBzb21lIGJyb3dzZXJzIGFwcGFyZW50bHkgc3VwcG9ydCBgdHJhbnNpdGlvbmAgKHVucHJlZml4ZWQpIGJ1dCBvbmx5IGZpcmVcbiAgLy8gYHdlYmtpdFRyYW5zaXRpb25FbmRgLi4uXG5cbiAgWyd0cmFuc2l0aW9uZW5kJywgJ3dlYmtpdFRyYW5zaXRpb25FbmQnXS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgIGJveFttZXRob2RdKGV2ZW50LCBsaXN0ZW5lcik7XG4gIH0pO1xufVxuXG52YXIgY3VycmVudElucHV0ID0ge1xuICBpc1RvdWNoOiBmYWxzZVxufTtcbnZhciBsYXN0TW91c2VNb3ZlVGltZSA9IDA7XG4vKipcbiAqIFdoZW4gYSBgdG91Y2hzdGFydGAgZXZlbnQgaXMgZmlyZWQsIGl0J3MgYXNzdW1lZCB0aGUgdXNlciBpcyB1c2luZyB0b3VjaFxuICogaW5wdXQuIFdlJ2xsIGJpbmQgYSBgbW91c2Vtb3ZlYCBldmVudCBsaXN0ZW5lciB0byBsaXN0ZW4gZm9yIG1vdXNlIGlucHV0IGluXG4gKiB0aGUgZnV0dXJlLiBUaGlzIHdheSwgdGhlIGBpc1RvdWNoYCBwcm9wZXJ0eSBpcyBmdWxseSBkeW5hbWljIGFuZCB3aWxsIGhhbmRsZVxuICogaHlicmlkIGRldmljZXMgdGhhdCB1c2UgYSBtaXggb2YgdG91Y2ggKyBtb3VzZSBpbnB1dC5cbiAqL1xuXG5mdW5jdGlvbiBvbkRvY3VtZW50VG91Y2hTdGFydCgpIHtcbiAgaWYgKGN1cnJlbnRJbnB1dC5pc1RvdWNoKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY3VycmVudElucHV0LmlzVG91Y2ggPSB0cnVlO1xuXG4gIGlmICh3aW5kb3cucGVyZm9ybWFuY2UpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbkRvY3VtZW50TW91c2VNb3ZlKTtcbiAgfVxufVxuLyoqXG4gKiBXaGVuIHR3byBgbW91c2Vtb3ZlYCBldmVudCBhcmUgZmlyZWQgY29uc2VjdXRpdmVseSB3aXRoaW4gMjBtcywgaXQncyBhc3N1bWVkXG4gKiB0aGUgdXNlciBpcyB1c2luZyBtb3VzZSBpbnB1dCBhZ2Fpbi4gYG1vdXNlbW92ZWAgY2FuIGZpcmUgb24gdG91Y2ggZGV2aWNlcyBhc1xuICogd2VsbCwgYnV0IHZlcnkgcmFyZWx5IHRoYXQgcXVpY2tseS5cbiAqL1xuXG5mdW5jdGlvbiBvbkRvY3VtZW50TW91c2VNb3ZlKCkge1xuICB2YXIgbm93ID0gcGVyZm9ybWFuY2Uubm93KCk7XG5cbiAgaWYgKG5vdyAtIGxhc3RNb3VzZU1vdmVUaW1lIDwgMjApIHtcbiAgICBjdXJyZW50SW5wdXQuaXNUb3VjaCA9IGZhbHNlO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uRG9jdW1lbnRNb3VzZU1vdmUpO1xuICB9XG5cbiAgbGFzdE1vdXNlTW92ZVRpbWUgPSBub3c7XG59XG4vKipcbiAqIFdoZW4gYW4gZWxlbWVudCBpcyBpbiBmb2N1cyBhbmQgaGFzIGEgdGlwcHksIGxlYXZpbmcgdGhlIHRhYi93aW5kb3cgYW5kXG4gKiByZXR1cm5pbmcgY2F1c2VzIGl0IHRvIHNob3cgYWdhaW4uIEZvciBtb3VzZSB1c2VycyB0aGlzIGlzIHVuZXhwZWN0ZWQsIGJ1dFxuICogZm9yIGtleWJvYXJkIHVzZSBpdCBtYWtlcyBzZW5zZS5cbiAqIFRPRE86IGZpbmQgYSBiZXR0ZXIgdGVjaG5pcXVlIHRvIHNvbHZlIHRoaXMgcHJvYmxlbVxuICovXG5cbmZ1bmN0aW9uIG9uV2luZG93Qmx1cigpIHtcbiAgdmFyIGFjdGl2ZUVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuXG4gIGlmIChpc1JlZmVyZW5jZUVsZW1lbnQoYWN0aXZlRWxlbWVudCkpIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBhY3RpdmVFbGVtZW50Ll90aXBweTtcblxuICAgIGlmIChhY3RpdmVFbGVtZW50LmJsdXIgJiYgIWluc3RhbmNlLnN0YXRlLmlzVmlzaWJsZSkge1xuICAgICAgYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBiaW5kR2xvYmFsRXZlbnRMaXN0ZW5lcnMoKSB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBvbkRvY3VtZW50VG91Y2hTdGFydCwgVE9VQ0hfT1BUSU9OUyk7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgb25XaW5kb3dCbHVyKTtcbn1cblxudmFyIGlzQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCc7XG52YXIgdWEgPSBpc0Jyb3dzZXIgPyBuYXZpZ2F0b3IudXNlckFnZW50IDogJyc7XG52YXIgaXNJRSA9IC9NU0lFIHxUcmlkZW50XFwvLy50ZXN0KHVhKTtcblxuZnVuY3Rpb24gY3JlYXRlTWVtb3J5TGVha1dhcm5pbmcobWV0aG9kKSB7XG4gIHZhciB0eHQgPSBtZXRob2QgPT09ICdkZXN0cm95JyA/ICduIGFscmVhZHktJyA6ICcgJztcbiAgcmV0dXJuIFttZXRob2QgKyBcIigpIHdhcyBjYWxsZWQgb24gYVwiICsgdHh0ICsgXCJkZXN0cm95ZWQgaW5zdGFuY2UuIFRoaXMgaXMgYSBuby1vcCBidXRcIiwgJ2luZGljYXRlcyBhIHBvdGVudGlhbCBtZW1vcnkgbGVhay4nXS5qb2luKCcgJyk7XG59XG5mdW5jdGlvbiBjbGVhbih2YWx1ZSkge1xuICB2YXIgc3BhY2VzQW5kVGFicyA9IC9bIFxcdF17Mix9L2c7XG4gIHZhciBsaW5lU3RhcnRXaXRoU3BhY2VzID0gL15bIFxcdF0qL2dtO1xuICByZXR1cm4gdmFsdWUucmVwbGFjZShzcGFjZXNBbmRUYWJzLCAnICcpLnJlcGxhY2UobGluZVN0YXJ0V2l0aFNwYWNlcywgJycpLnRyaW0oKTtcbn1cblxuZnVuY3Rpb24gZ2V0RGV2TWVzc2FnZShtZXNzYWdlKSB7XG4gIHJldHVybiBjbGVhbihcIlxcbiAgJWN0aXBweS5qc1xcblxcbiAgJWNcIiArIGNsZWFuKG1lc3NhZ2UpICsgXCJcXG5cXG4gICVjXFx1RDgzRFxcdURDNzdcXHUyMDBEIFRoaXMgaXMgYSBkZXZlbG9wbWVudC1vbmx5IG1lc3NhZ2UuIEl0IHdpbGwgYmUgcmVtb3ZlZCBpbiBwcm9kdWN0aW9uLlxcbiAgXCIpO1xufVxuXG5mdW5jdGlvbiBnZXRGb3JtYXR0ZWRNZXNzYWdlKG1lc3NhZ2UpIHtcbiAgcmV0dXJuIFtnZXREZXZNZXNzYWdlKG1lc3NhZ2UpLCAvLyB0aXRsZVxuICAnY29sb3I6ICMwMEM1ODQ7IGZvbnQtc2l6ZTogMS4zZW07IGZvbnQtd2VpZ2h0OiBib2xkOycsIC8vIG1lc3NhZ2VcbiAgJ2xpbmUtaGVpZ2h0OiAxLjUnLCAvLyBmb290ZXJcbiAgJ2NvbG9yOiAjYTZhMDk1OyddO1xufSAvLyBBc3N1bWUgd2FybmluZ3MgYW5kIGVycm9ycyBuZXZlciBoYXZlIHRoZSBzYW1lIG1lc3NhZ2VcblxudmFyIHZpc2l0ZWRNZXNzYWdlcztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICByZXNldFZpc2l0ZWRNZXNzYWdlcygpO1xufVxuXG5mdW5jdGlvbiByZXNldFZpc2l0ZWRNZXNzYWdlcygpIHtcbiAgdmlzaXRlZE1lc3NhZ2VzID0gbmV3IFNldCgpO1xufVxuZnVuY3Rpb24gd2FybldoZW4oY29uZGl0aW9uLCBtZXNzYWdlKSB7XG4gIGlmIChjb25kaXRpb24gJiYgIXZpc2l0ZWRNZXNzYWdlcy5oYXMobWVzc2FnZSkpIHtcbiAgICB2YXIgX2NvbnNvbGU7XG5cbiAgICB2aXNpdGVkTWVzc2FnZXMuYWRkKG1lc3NhZ2UpO1xuXG4gICAgKF9jb25zb2xlID0gY29uc29sZSkud2Fybi5hcHBseShfY29uc29sZSwgZ2V0Rm9ybWF0dGVkTWVzc2FnZShtZXNzYWdlKSk7XG4gIH1cbn1cbmZ1bmN0aW9uIGVycm9yV2hlbihjb25kaXRpb24sIG1lc3NhZ2UpIHtcbiAgaWYgKGNvbmRpdGlvbiAmJiAhdmlzaXRlZE1lc3NhZ2VzLmhhcyhtZXNzYWdlKSkge1xuICAgIHZhciBfY29uc29sZTI7XG5cbiAgICB2aXNpdGVkTWVzc2FnZXMuYWRkKG1lc3NhZ2UpO1xuXG4gICAgKF9jb25zb2xlMiA9IGNvbnNvbGUpLmVycm9yLmFwcGx5KF9jb25zb2xlMiwgZ2V0Rm9ybWF0dGVkTWVzc2FnZShtZXNzYWdlKSk7XG4gIH1cbn1cbmZ1bmN0aW9uIHZhbGlkYXRlVGFyZ2V0cyh0YXJnZXRzKSB7XG4gIHZhciBkaWRQYXNzRmFsc3lWYWx1ZSA9ICF0YXJnZXRzO1xuICB2YXIgZGlkUGFzc1BsYWluT2JqZWN0ID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHRhcmdldHMpID09PSAnW29iamVjdCBPYmplY3RdJyAmJiAhdGFyZ2V0cy5hZGRFdmVudExpc3RlbmVyO1xuICBlcnJvcldoZW4oZGlkUGFzc0ZhbHN5VmFsdWUsIFsndGlwcHkoKSB3YXMgcGFzc2VkJywgJ2AnICsgU3RyaW5nKHRhcmdldHMpICsgJ2AnLCAnYXMgaXRzIHRhcmdldHMgKGZpcnN0KSBhcmd1bWVudC4gVmFsaWQgdHlwZXMgYXJlOiBTdHJpbmcsIEVsZW1lbnQsJywgJ0VsZW1lbnRbXSwgb3IgTm9kZUxpc3QuJ10uam9pbignICcpKTtcbiAgZXJyb3JXaGVuKGRpZFBhc3NQbGFpbk9iamVjdCwgWyd0aXBweSgpIHdhcyBwYXNzZWQgYSBwbGFpbiBvYmplY3Qgd2hpY2ggaXMgbm90IHN1cHBvcnRlZCBhcyBhbiBhcmd1bWVudCcsICdmb3IgdmlydHVhbCBwb3NpdGlvbmluZy4gVXNlIHByb3BzLmdldFJlZmVyZW5jZUNsaWVudFJlY3QgaW5zdGVhZC4nXS5qb2luKCcgJykpO1xufVxuXG52YXIgcGx1Z2luUHJvcHMgPSB7XG4gIGFuaW1hdGVGaWxsOiBmYWxzZSxcbiAgZm9sbG93Q3Vyc29yOiBmYWxzZSxcbiAgaW5saW5lUG9zaXRpb25pbmc6IGZhbHNlLFxuICBzdGlja3k6IGZhbHNlXG59O1xudmFyIHJlbmRlclByb3BzID0ge1xuICBhbGxvd0hUTUw6IGZhbHNlLFxuICBhbmltYXRpb246ICdmYWRlJyxcbiAgYXJyb3c6IHRydWUsXG4gIGNvbnRlbnQ6ICcnLFxuICBpbmVydGlhOiBmYWxzZSxcbiAgbWF4V2lkdGg6IDM1MCxcbiAgcm9sZTogJ3Rvb2x0aXAnLFxuICB0aGVtZTogJycsXG4gIHpJbmRleDogOTk5OVxufTtcbnZhciBkZWZhdWx0UHJvcHMgPSBPYmplY3QuYXNzaWduKHtcbiAgYXBwZW5kVG86IGZ1bmN0aW9uIGFwcGVuZFRvKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5ib2R5O1xuICB9LFxuICBhcmlhOiB7XG4gICAgY29udGVudDogJ2F1dG8nLFxuICAgIGV4cGFuZGVkOiAnYXV0bydcbiAgfSxcbiAgZGVsYXk6IDAsXG4gIGR1cmF0aW9uOiBbMzAwLCAyNTBdLFxuICBnZXRSZWZlcmVuY2VDbGllbnRSZWN0OiBudWxsLFxuICBoaWRlT25DbGljazogdHJ1ZSxcbiAgaWdub3JlQXR0cmlidXRlczogZmFsc2UsXG4gIGludGVyYWN0aXZlOiBmYWxzZSxcbiAgaW50ZXJhY3RpdmVCb3JkZXI6IDIsXG4gIGludGVyYWN0aXZlRGVib3VuY2U6IDAsXG4gIG1vdmVUcmFuc2l0aW9uOiAnJyxcbiAgb2Zmc2V0OiBbMCwgMTBdLFxuICBvbkFmdGVyVXBkYXRlOiBmdW5jdGlvbiBvbkFmdGVyVXBkYXRlKCkge30sXG4gIG9uQmVmb3JlVXBkYXRlOiBmdW5jdGlvbiBvbkJlZm9yZVVwZGF0ZSgpIHt9LFxuICBvbkNyZWF0ZTogZnVuY3Rpb24gb25DcmVhdGUoKSB7fSxcbiAgb25EZXN0cm95OiBmdW5jdGlvbiBvbkRlc3Ryb3koKSB7fSxcbiAgb25IaWRkZW46IGZ1bmN0aW9uIG9uSGlkZGVuKCkge30sXG4gIG9uSGlkZTogZnVuY3Rpb24gb25IaWRlKCkge30sXG4gIG9uTW91bnQ6IGZ1bmN0aW9uIG9uTW91bnQoKSB7fSxcbiAgb25TaG93OiBmdW5jdGlvbiBvblNob3coKSB7fSxcbiAgb25TaG93bjogZnVuY3Rpb24gb25TaG93bigpIHt9LFxuICBvblRyaWdnZXI6IGZ1bmN0aW9uIG9uVHJpZ2dlcigpIHt9LFxuICBvblVudHJpZ2dlcjogZnVuY3Rpb24gb25VbnRyaWdnZXIoKSB7fSxcbiAgb25DbGlja091dHNpZGU6IGZ1bmN0aW9uIG9uQ2xpY2tPdXRzaWRlKCkge30sXG4gIHBsYWNlbWVudDogJ3RvcCcsXG4gIHBsdWdpbnM6IFtdLFxuICBwb3BwZXJPcHRpb25zOiB7fSxcbiAgcmVuZGVyOiBudWxsLFxuICBzaG93T25DcmVhdGU6IGZhbHNlLFxuICB0b3VjaDogdHJ1ZSxcbiAgdHJpZ2dlcjogJ21vdXNlZW50ZXIgZm9jdXMnLFxuICB0cmlnZ2VyVGFyZ2V0OiBudWxsXG59LCBwbHVnaW5Qcm9wcywge30sIHJlbmRlclByb3BzKTtcbnZhciBkZWZhdWx0S2V5cyA9IE9iamVjdC5rZXlzKGRlZmF1bHRQcm9wcyk7XG52YXIgc2V0RGVmYXVsdFByb3BzID0gZnVuY3Rpb24gc2V0RGVmYXVsdFByb3BzKHBhcnRpYWxQcm9wcykge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgdmFsaWRhdGVQcm9wcyhwYXJ0aWFsUHJvcHMsIFtdKTtcbiAgfVxuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMocGFydGlhbFByb3BzKTtcbiAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBkZWZhdWx0UHJvcHNba2V5XSA9IHBhcnRpYWxQcm9wc1trZXldO1xuICB9KTtcbn07XG5mdW5jdGlvbiBnZXRFeHRlbmRlZFBhc3NlZFByb3BzKHBhc3NlZFByb3BzKSB7XG4gIHZhciBwbHVnaW5zID0gcGFzc2VkUHJvcHMucGx1Z2lucyB8fCBbXTtcbiAgdmFyIHBsdWdpblByb3BzID0gcGx1Z2lucy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGx1Z2luKSB7XG4gICAgdmFyIG5hbWUgPSBwbHVnaW4ubmFtZSxcbiAgICAgICAgZGVmYXVsdFZhbHVlID0gcGx1Z2luLmRlZmF1bHRWYWx1ZTtcblxuICAgIGlmIChuYW1lKSB7XG4gICAgICBhY2NbbmFtZV0gPSBwYXNzZWRQcm9wc1tuYW1lXSAhPT0gdW5kZWZpbmVkID8gcGFzc2VkUHJvcHNbbmFtZV0gOiBkZWZhdWx0VmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcGFzc2VkUHJvcHMsIHt9LCBwbHVnaW5Qcm9wcyk7XG59XG5mdW5jdGlvbiBnZXREYXRhQXR0cmlidXRlUHJvcHMocmVmZXJlbmNlLCBwbHVnaW5zKSB7XG4gIHZhciBwcm9wS2V5cyA9IHBsdWdpbnMgPyBPYmplY3Qua2V5cyhnZXRFeHRlbmRlZFBhc3NlZFByb3BzKE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRQcm9wcywge1xuICAgIHBsdWdpbnM6IHBsdWdpbnNcbiAgfSkpKSA6IGRlZmF1bHRLZXlzO1xuICB2YXIgcHJvcHMgPSBwcm9wS2V5cy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywga2V5KSB7XG4gICAgdmFyIHZhbHVlQXNTdHJpbmcgPSAocmVmZXJlbmNlLmdldEF0dHJpYnV0ZShcImRhdGEtdGlwcHktXCIgKyBrZXkpIHx8ICcnKS50cmltKCk7XG5cbiAgICBpZiAoIXZhbHVlQXNTdHJpbmcpIHtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfVxuXG4gICAgaWYgKGtleSA9PT0gJ2NvbnRlbnQnKSB7XG4gICAgICBhY2Nba2V5XSA9IHZhbHVlQXNTdHJpbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGFjY1trZXldID0gSlNPTi5wYXJzZSh2YWx1ZUFzU3RyaW5nKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgYWNjW2tleV0gPSB2YWx1ZUFzU3RyaW5nO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcbiAgcmV0dXJuIHByb3BzO1xufVxuZnVuY3Rpb24gZXZhbHVhdGVQcm9wcyhyZWZlcmVuY2UsIHByb3BzKSB7XG4gIHZhciBvdXQgPSBPYmplY3QuYXNzaWduKHt9LCBwcm9wcywge1xuICAgIGNvbnRlbnQ6IGludm9rZVdpdGhBcmdzT3JSZXR1cm4ocHJvcHMuY29udGVudCwgW3JlZmVyZW5jZV0pXG4gIH0sIHByb3BzLmlnbm9yZUF0dHJpYnV0ZXMgPyB7fSA6IGdldERhdGFBdHRyaWJ1dGVQcm9wcyhyZWZlcmVuY2UsIHByb3BzLnBsdWdpbnMpKTtcbiAgb3V0LmFyaWEgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0UHJvcHMuYXJpYSwge30sIG91dC5hcmlhKTtcbiAgb3V0LmFyaWEgPSB7XG4gICAgZXhwYW5kZWQ6IG91dC5hcmlhLmV4cGFuZGVkID09PSAnYXV0bycgPyBwcm9wcy5pbnRlcmFjdGl2ZSA6IG91dC5hcmlhLmV4cGFuZGVkLFxuICAgIGNvbnRlbnQ6IG91dC5hcmlhLmNvbnRlbnQgPT09ICdhdXRvJyA/IHByb3BzLmludGVyYWN0aXZlID8gbnVsbCA6ICdkZXNjcmliZWRieScgOiBvdXQuYXJpYS5jb250ZW50XG4gIH07XG4gIHJldHVybiBvdXQ7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZVByb3BzKHBhcnRpYWxQcm9wcywgcGx1Z2lucykge1xuICBpZiAocGFydGlhbFByb3BzID09PSB2b2lkIDApIHtcbiAgICBwYXJ0aWFsUHJvcHMgPSB7fTtcbiAgfVxuXG4gIGlmIChwbHVnaW5zID09PSB2b2lkIDApIHtcbiAgICBwbHVnaW5zID0gW107XG4gIH1cblxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHBhcnRpYWxQcm9wcyk7XG4gIGtleXMuZm9yRWFjaChmdW5jdGlvbiAocHJvcCkge1xuICAgIHZhciBub25QbHVnaW5Qcm9wcyA9IHJlbW92ZVByb3BlcnRpZXMoZGVmYXVsdFByb3BzLCBPYmplY3Qua2V5cyhwbHVnaW5Qcm9wcykpO1xuICAgIHZhciBkaWRQYXNzVW5rbm93blByb3AgPSAhaGFzT3duUHJvcGVydHkobm9uUGx1Z2luUHJvcHMsIHByb3ApOyAvLyBDaGVjayBpZiB0aGUgcHJvcCBleGlzdHMgaW4gYHBsdWdpbnNgXG5cbiAgICBpZiAoZGlkUGFzc1Vua25vd25Qcm9wKSB7XG4gICAgICBkaWRQYXNzVW5rbm93blByb3AgPSBwbHVnaW5zLmZpbHRlcihmdW5jdGlvbiAocGx1Z2luKSB7XG4gICAgICAgIHJldHVybiBwbHVnaW4ubmFtZSA9PT0gcHJvcDtcbiAgICAgIH0pLmxlbmd0aCA9PT0gMDtcbiAgICB9XG5cbiAgICB3YXJuV2hlbihkaWRQYXNzVW5rbm93blByb3AsIFtcImBcIiArIHByb3AgKyBcImBcIiwgXCJpcyBub3QgYSB2YWxpZCBwcm9wLiBZb3UgbWF5IGhhdmUgc3BlbGxlZCBpdCBpbmNvcnJlY3RseSwgb3IgaWYgaXQnc1wiLCAnYSBwbHVnaW4sIGZvcmdvdCB0byBwYXNzIGl0IGluIGFuIGFycmF5IGFzIHByb3BzLnBsdWdpbnMuJywgJ1xcblxcbicsICdBbGwgcHJvcHM6IGh0dHBzOi8vYXRvbWlrcy5naXRodWIuaW8vdGlwcHlqcy92Ni9hbGwtcHJvcHMvXFxuJywgJ1BsdWdpbnM6IGh0dHBzOi8vYXRvbWlrcy5naXRodWIuaW8vdGlwcHlqcy92Ni9wbHVnaW5zLyddLmpvaW4oJyAnKSk7XG4gIH0pO1xufVxuXG52YXIgaW5uZXJIVE1MID0gZnVuY3Rpb24gaW5uZXJIVE1MKCkge1xuICByZXR1cm4gJ2lubmVySFRNTCc7XG59O1xuXG5mdW5jdGlvbiBkYW5nZXJvdXNseVNldElubmVySFRNTChlbGVtZW50LCBodG1sKSB7XG4gIGVsZW1lbnRbaW5uZXJIVE1MKCldID0gaHRtbDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQXJyb3dFbGVtZW50KHZhbHVlKSB7XG4gIHZhciBhcnJvdyA9IGRpdigpO1xuXG4gIGlmICh2YWx1ZSA9PT0gdHJ1ZSkge1xuICAgIGFycm93LmNsYXNzTmFtZSA9IEFSUk9XX0NMQVNTO1xuICB9IGVsc2Uge1xuICAgIGFycm93LmNsYXNzTmFtZSA9IFNWR19BUlJPV19DTEFTUztcblxuICAgIGlmIChpc0VsZW1lbnQodmFsdWUpKSB7XG4gICAgICBhcnJvdy5hcHBlbmRDaGlsZCh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MKGFycm93LCB2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFycm93O1xufVxuXG5mdW5jdGlvbiBzZXRDb250ZW50KGNvbnRlbnQsIHByb3BzKSB7XG4gIGlmIChpc0VsZW1lbnQocHJvcHMuY29udGVudCkpIHtcbiAgICBkYW5nZXJvdXNseVNldElubmVySFRNTChjb250ZW50LCAnJyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChwcm9wcy5jb250ZW50KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgcHJvcHMuY29udGVudCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIGlmIChwcm9wcy5hbGxvd0hUTUwpIHtcbiAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MKGNvbnRlbnQsIHByb3BzLmNvbnRlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZW50LnRleHRDb250ZW50ID0gcHJvcHMuY29udGVudDtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIGdldENoaWxkcmVuKHBvcHBlcikge1xuICB2YXIgYm94ID0gcG9wcGVyLmZpcnN0RWxlbWVudENoaWxkO1xuICB2YXIgYm94Q2hpbGRyZW4gPSBhcnJheUZyb20oYm94LmNoaWxkcmVuKTtcbiAgcmV0dXJuIHtcbiAgICBib3g6IGJveCxcbiAgICBjb250ZW50OiBib3hDaGlsZHJlbi5maW5kKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICByZXR1cm4gbm9kZS5jbGFzc0xpc3QuY29udGFpbnMoQ09OVEVOVF9DTEFTUyk7XG4gICAgfSksXG4gICAgYXJyb3c6IGJveENoaWxkcmVuLmZpbmQoZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIHJldHVybiBub2RlLmNsYXNzTGlzdC5jb250YWlucyhBUlJPV19DTEFTUykgfHwgbm9kZS5jbGFzc0xpc3QuY29udGFpbnMoU1ZHX0FSUk9XX0NMQVNTKTtcbiAgICB9KSxcbiAgICBiYWNrZHJvcDogYm94Q2hpbGRyZW4uZmluZChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgcmV0dXJuIG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKEJBQ0tEUk9QX0NMQVNTKTtcbiAgICB9KVxuICB9O1xufVxuZnVuY3Rpb24gcmVuZGVyKGluc3RhbmNlKSB7XG4gIHZhciBwb3BwZXIgPSBkaXYoKTtcbiAgdmFyIGJveCA9IGRpdigpO1xuICBib3guY2xhc3NOYW1lID0gQk9YX0NMQVNTO1xuICBib3guc2V0QXR0cmlidXRlKCdkYXRhLXN0YXRlJywgJ2hpZGRlbicpO1xuICBib3guc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuICB2YXIgY29udGVudCA9IGRpdigpO1xuICBjb250ZW50LmNsYXNzTmFtZSA9IENPTlRFTlRfQ0xBU1M7XG4gIGNvbnRlbnQuc2V0QXR0cmlidXRlKCdkYXRhLXN0YXRlJywgJ2hpZGRlbicpO1xuICBzZXRDb250ZW50KGNvbnRlbnQsIGluc3RhbmNlLnByb3BzKTtcbiAgcG9wcGVyLmFwcGVuZENoaWxkKGJveCk7XG4gIGJveC5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgb25VcGRhdGUoaW5zdGFuY2UucHJvcHMsIGluc3RhbmNlLnByb3BzKTtcblxuICBmdW5jdGlvbiBvblVwZGF0ZShwcmV2UHJvcHMsIG5leHRQcm9wcykge1xuICAgIHZhciBfZ2V0Q2hpbGRyZW4gPSBnZXRDaGlsZHJlbihwb3BwZXIpLFxuICAgICAgICBib3ggPSBfZ2V0Q2hpbGRyZW4uYm94LFxuICAgICAgICBjb250ZW50ID0gX2dldENoaWxkcmVuLmNvbnRlbnQsXG4gICAgICAgIGFycm93ID0gX2dldENoaWxkcmVuLmFycm93O1xuXG4gICAgaWYgKG5leHRQcm9wcy50aGVtZSkge1xuICAgICAgYm94LnNldEF0dHJpYnV0ZSgnZGF0YS10aGVtZScsIG5leHRQcm9wcy50aGVtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJveC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG5leHRQcm9wcy5hbmltYXRpb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICBib3guc2V0QXR0cmlidXRlKCdkYXRhLWFuaW1hdGlvbicsIG5leHRQcm9wcy5hbmltYXRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBib3gucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWFuaW1hdGlvbicpO1xuICAgIH1cblxuICAgIGlmIChuZXh0UHJvcHMuaW5lcnRpYSkge1xuICAgICAgYm94LnNldEF0dHJpYnV0ZSgnZGF0YS1pbmVydGlhJywgJycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBib3gucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWluZXJ0aWEnKTtcbiAgICB9XG5cbiAgICBib3guc3R5bGUubWF4V2lkdGggPSB0eXBlb2YgbmV4dFByb3BzLm1heFdpZHRoID09PSAnbnVtYmVyJyA/IG5leHRQcm9wcy5tYXhXaWR0aCArIFwicHhcIiA6IG5leHRQcm9wcy5tYXhXaWR0aDtcblxuICAgIGlmIChuZXh0UHJvcHMucm9sZSkge1xuICAgICAgYm94LnNldEF0dHJpYnV0ZSgncm9sZScsIG5leHRQcm9wcy5yb2xlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYm94LnJlbW92ZUF0dHJpYnV0ZSgncm9sZScpO1xuICAgIH1cblxuICAgIGlmIChwcmV2UHJvcHMuY29udGVudCAhPT0gbmV4dFByb3BzLmNvbnRlbnQgfHwgcHJldlByb3BzLmFsbG93SFRNTCAhPT0gbmV4dFByb3BzLmFsbG93SFRNTCkge1xuICAgICAgc2V0Q29udGVudChjb250ZW50LCBpbnN0YW5jZS5wcm9wcyk7XG4gICAgfVxuXG4gICAgaWYgKG5leHRQcm9wcy5hcnJvdykge1xuICAgICAgaWYgKCFhcnJvdykge1xuICAgICAgICBib3guYXBwZW5kQ2hpbGQoY3JlYXRlQXJyb3dFbGVtZW50KG5leHRQcm9wcy5hcnJvdykpO1xuICAgICAgfSBlbHNlIGlmIChwcmV2UHJvcHMuYXJyb3cgIT09IG5leHRQcm9wcy5hcnJvdykge1xuICAgICAgICBib3gucmVtb3ZlQ2hpbGQoYXJyb3cpO1xuICAgICAgICBib3guYXBwZW5kQ2hpbGQoY3JlYXRlQXJyb3dFbGVtZW50KG5leHRQcm9wcy5hcnJvdykpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYXJyb3cpIHtcbiAgICAgIGJveC5yZW1vdmVDaGlsZChhcnJvdyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwb3BwZXI6IHBvcHBlcixcbiAgICBvblVwZGF0ZTogb25VcGRhdGVcbiAgfTtcbn0gLy8gUnVudGltZSBjaGVjayB0byBpZGVudGlmeSBpZiB0aGUgcmVuZGVyIGZ1bmN0aW9uIGlzIHRoZSBkZWZhdWx0IG9uZTsgdGhpc1xuLy8gd2F5IHdlIGNhbiBhcHBseSBkZWZhdWx0IENTUyB0cmFuc2l0aW9ucyBsb2dpYyBhbmQgaXQgY2FuIGJlIHRyZWUtc2hha2VuIGF3YXlcblxucmVuZGVyLiQkdGlwcHkgPSB0cnVlO1xuXG52YXIgaWRDb3VudGVyID0gMTtcbnZhciBtb3VzZU1vdmVMaXN0ZW5lcnMgPSBbXTsgLy8gVXNlZCBieSBgaGlkZUFsbCgpYFxuXG52YXIgbW91bnRlZEluc3RhbmNlcyA9IFtdO1xuZnVuY3Rpb24gY3JlYXRlVGlwcHkocmVmZXJlbmNlLCBwYXNzZWRQcm9wcykge1xuICB2YXIgcHJvcHMgPSBldmFsdWF0ZVByb3BzKHJlZmVyZW5jZSwgT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdFByb3BzLCB7fSwgZ2V0RXh0ZW5kZWRQYXNzZWRQcm9wcyhyZW1vdmVVbmRlZmluZWRQcm9wcyhwYXNzZWRQcm9wcykpKSk7IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyDwn5SSIFByaXZhdGUgbWVtYmVyc1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICB2YXIgc2hvd1RpbWVvdXQ7XG4gIHZhciBoaWRlVGltZW91dDtcbiAgdmFyIHNjaGVkdWxlSGlkZUFuaW1hdGlvbkZyYW1lO1xuICB2YXIgaXNWaXNpYmxlRnJvbUNsaWNrID0gZmFsc2U7XG4gIHZhciBkaWRIaWRlRHVlVG9Eb2N1bWVudE1vdXNlRG93biA9IGZhbHNlO1xuICB2YXIgZGlkVG91Y2hNb3ZlID0gZmFsc2U7XG4gIHZhciBpZ25vcmVPbkZpcnN0VXBkYXRlID0gZmFsc2U7XG4gIHZhciBsYXN0VHJpZ2dlckV2ZW50O1xuICB2YXIgY3VycmVudFRyYW5zaXRpb25FbmRMaXN0ZW5lcjtcbiAgdmFyIG9uRmlyc3RVcGRhdGU7XG4gIHZhciBsaXN0ZW5lcnMgPSBbXTtcbiAgdmFyIGRlYm91bmNlZE9uTW91c2VNb3ZlID0gZGVib3VuY2Uob25Nb3VzZU1vdmUsIHByb3BzLmludGVyYWN0aXZlRGVib3VuY2UpO1xuICB2YXIgY3VycmVudFRhcmdldDsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vIPCflJEgUHVibGljIG1lbWJlcnNcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgdmFyIGlkID0gaWRDb3VudGVyKys7XG4gIHZhciBwb3BwZXJJbnN0YW5jZSA9IG51bGw7XG4gIHZhciBwbHVnaW5zID0gdW5pcXVlKHByb3BzLnBsdWdpbnMpO1xuICB2YXIgc3RhdGUgPSB7XG4gICAgLy8gSXMgdGhlIGluc3RhbmNlIGN1cnJlbnRseSBlbmFibGVkP1xuICAgIGlzRW5hYmxlZDogdHJ1ZSxcbiAgICAvLyBJcyB0aGUgdGlwcHkgY3VycmVudGx5IHNob3dpbmcgYW5kIG5vdCB0cmFuc2l0aW9uaW5nIG91dD9cbiAgICBpc1Zpc2libGU6IGZhbHNlLFxuICAgIC8vIEhhcyB0aGUgaW5zdGFuY2UgYmVlbiBkZXN0cm95ZWQ/XG4gICAgaXNEZXN0cm95ZWQ6IGZhbHNlLFxuICAgIC8vIElzIHRoZSB0aXBweSBjdXJyZW50bHkgbW91bnRlZCB0byB0aGUgRE9NP1xuICAgIGlzTW91bnRlZDogZmFsc2UsXG4gICAgLy8gSGFzIHRoZSB0aXBweSBmaW5pc2hlZCB0cmFuc2l0aW9uaW5nIGluP1xuICAgIGlzU2hvd246IGZhbHNlXG4gIH07XG4gIHZhciBpbnN0YW5jZSA9IHtcbiAgICAvLyBwcm9wZXJ0aWVzXG4gICAgaWQ6IGlkLFxuICAgIHJlZmVyZW5jZTogcmVmZXJlbmNlLFxuICAgIHBvcHBlcjogZGl2KCksXG4gICAgcG9wcGVySW5zdGFuY2U6IHBvcHBlckluc3RhbmNlLFxuICAgIHByb3BzOiBwcm9wcyxcbiAgICBzdGF0ZTogc3RhdGUsXG4gICAgcGx1Z2luczogcGx1Z2lucyxcbiAgICAvLyBtZXRob2RzXG4gICAgY2xlYXJEZWxheVRpbWVvdXRzOiBjbGVhckRlbGF5VGltZW91dHMsXG4gICAgc2V0UHJvcHM6IHNldFByb3BzLFxuICAgIHNldENvbnRlbnQ6IHNldENvbnRlbnQsXG4gICAgc2hvdzogc2hvdyxcbiAgICBoaWRlOiBoaWRlLFxuICAgIGhpZGVXaXRoSW50ZXJhY3Rpdml0eTogaGlkZVdpdGhJbnRlcmFjdGl2aXR5LFxuICAgIGVuYWJsZTogZW5hYmxlLFxuICAgIGRpc2FibGU6IGRpc2FibGUsXG4gICAgdW5tb3VudDogdW5tb3VudCxcbiAgICBkZXN0cm95OiBkZXN0cm95XG4gIH07IC8vIFRPRE86IEludmVzdGlnYXRlIHdoeSB0aGlzIGVhcmx5IHJldHVybiBjYXVzZXMgYSBURFogZXJyb3IgaW4gdGhlIHRlc3RzIOKAlFxuICAvLyBpdCBkb2Vzbid0IHNlZW0gdG8gaGFwcGVuIGluIHRoZSBicm93c2VyXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG5cbiAgaWYgKCFwcm9wcy5yZW5kZXIpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICBlcnJvcldoZW4odHJ1ZSwgJ3JlbmRlcigpIGZ1bmN0aW9uIGhhcyBub3QgYmVlbiBzdXBwbGllZC4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH0gLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vIEluaXRpYWwgbXV0YXRpb25zXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cbiAgdmFyIF9wcm9wcyRyZW5kZXIgPSBwcm9wcy5yZW5kZXIoaW5zdGFuY2UpLFxuICAgICAgcG9wcGVyID0gX3Byb3BzJHJlbmRlci5wb3BwZXIsXG4gICAgICBvblVwZGF0ZSA9IF9wcm9wcyRyZW5kZXIub25VcGRhdGU7XG5cbiAgcG9wcGVyLnNldEF0dHJpYnV0ZSgnZGF0YS10aXBweS1yb290JywgJycpO1xuICBwb3BwZXIuaWQgPSBcInRpcHB5LVwiICsgaW5zdGFuY2UuaWQ7XG4gIGluc3RhbmNlLnBvcHBlciA9IHBvcHBlcjtcbiAgcmVmZXJlbmNlLl90aXBweSA9IGluc3RhbmNlO1xuICBwb3BwZXIuX3RpcHB5ID0gaW5zdGFuY2U7XG4gIHZhciBwbHVnaW5zSG9va3MgPSBwbHVnaW5zLm1hcChmdW5jdGlvbiAocGx1Z2luKSB7XG4gICAgcmV0dXJuIHBsdWdpbi5mbihpbnN0YW5jZSk7XG4gIH0pO1xuICB2YXIgaGFzQXJpYUV4cGFuZGVkID0gcmVmZXJlbmNlLmhhc0F0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpO1xuICBhZGRMaXN0ZW5lcnMoKTtcbiAgaGFuZGxlQXJpYUV4cGFuZGVkQXR0cmlidXRlKCk7XG4gIGhhbmRsZVN0eWxlcygpO1xuICBpbnZva2VIb29rKCdvbkNyZWF0ZScsIFtpbnN0YW5jZV0pO1xuXG4gIGlmIChwcm9wcy5zaG93T25DcmVhdGUpIHtcbiAgICBzY2hlZHVsZVNob3coKTtcbiAgfSAvLyBQcmV2ZW50IGEgdGlwcHkgd2l0aCBhIGRlbGF5IGZyb20gaGlkaW5nIGlmIHRoZSBjdXJzb3IgbGVmdCB0aGVuIHJldHVybmVkXG4gIC8vIGJlZm9yZSBpdCBzdGFydGVkIGhpZGluZ1xuXG5cbiAgcG9wcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGluc3RhbmNlLnByb3BzLmludGVyYWN0aXZlICYmIGluc3RhbmNlLnN0YXRlLmlzVmlzaWJsZSkge1xuICAgICAgaW5zdGFuY2UuY2xlYXJEZWxheVRpbWVvdXRzKCk7XG4gICAgfVxuICB9KTtcbiAgcG9wcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoaW5zdGFuY2UucHJvcHMuaW50ZXJhY3RpdmUgJiYgaW5zdGFuY2UucHJvcHMudHJpZ2dlci5pbmRleE9mKCdtb3VzZWVudGVyJykgPj0gMCkge1xuICAgICAgZ2V0RG9jdW1lbnQoKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBkZWJvdW5jZWRPbk1vdXNlTW92ZSk7XG4gICAgICBkZWJvdW5jZWRPbk1vdXNlTW92ZShldmVudCk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGluc3RhbmNlOyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8g8J+UkiBQcml2YXRlIG1ldGhvZHNcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgZnVuY3Rpb24gZ2V0Tm9ybWFsaXplZFRvdWNoU2V0dGluZ3MoKSB7XG4gICAgdmFyIHRvdWNoID0gaW5zdGFuY2UucHJvcHMudG91Y2g7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodG91Y2gpID8gdG91Y2ggOiBbdG91Y2gsIDBdO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0SXNDdXN0b21Ub3VjaEJlaGF2aW9yKCkge1xuICAgIHJldHVybiBnZXROb3JtYWxpemVkVG91Y2hTZXR0aW5ncygpWzBdID09PSAnaG9sZCc7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRJc0RlZmF1bHRSZW5kZXJGbigpIHtcbiAgICB2YXIgX2luc3RhbmNlJHByb3BzJHJlbmRlO1xuXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHJldHVybiAhISgoX2luc3RhbmNlJHByb3BzJHJlbmRlID0gaW5zdGFuY2UucHJvcHMucmVuZGVyKSA9PSBudWxsID8gdm9pZCAwIDogX2luc3RhbmNlJHByb3BzJHJlbmRlLiQkdGlwcHkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q3VycmVudFRhcmdldCgpIHtcbiAgICByZXR1cm4gY3VycmVudFRhcmdldCB8fCByZWZlcmVuY2U7XG4gIH1cblxuICBmdW5jdGlvbiBnZXREb2N1bWVudCgpIHtcbiAgICB2YXIgcGFyZW50ID0gZ2V0Q3VycmVudFRhcmdldCgpLnBhcmVudE5vZGU7XG4gICAgcmV0dXJuIHBhcmVudCA/IGdldE93bmVyRG9jdW1lbnQocGFyZW50KSA6IGRvY3VtZW50O1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RGVmYXVsdFRlbXBsYXRlQ2hpbGRyZW4oKSB7XG4gICAgcmV0dXJuIGdldENoaWxkcmVuKHBvcHBlcik7XG4gIH1cblxuICBmdW5jdGlvbiBnZXREZWxheShpc1Nob3cpIHtcbiAgICAvLyBGb3IgdG91Y2ggb3Iga2V5Ym9hcmQgaW5wdXQsIGZvcmNlIGAwYCBkZWxheSBmb3IgVVggcmVhc29uc1xuICAgIC8vIEFsc28gaWYgdGhlIGluc3RhbmNlIGlzIG1vdW50ZWQgYnV0IG5vdCB2aXNpYmxlICh0cmFuc2l0aW9uaW5nIG91dCksXG4gICAgLy8gaWdub3JlIGRlbGF5XG4gICAgaWYgKGluc3RhbmNlLnN0YXRlLmlzTW91bnRlZCAmJiAhaW5zdGFuY2Uuc3RhdGUuaXNWaXNpYmxlIHx8IGN1cnJlbnRJbnB1dC5pc1RvdWNoIHx8IGxhc3RUcmlnZ2VyRXZlbnQgJiYgbGFzdFRyaWdnZXJFdmVudC50eXBlID09PSAnZm9jdXMnKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICByZXR1cm4gZ2V0VmFsdWVBdEluZGV4T3JSZXR1cm4oaW5zdGFuY2UucHJvcHMuZGVsYXksIGlzU2hvdyA/IDAgOiAxLCBkZWZhdWx0UHJvcHMuZGVsYXkpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlU3R5bGVzKCkge1xuICAgIHBvcHBlci5zdHlsZS5wb2ludGVyRXZlbnRzID0gaW5zdGFuY2UucHJvcHMuaW50ZXJhY3RpdmUgJiYgaW5zdGFuY2Uuc3RhdGUuaXNWaXNpYmxlID8gJycgOiAnbm9uZSc7XG4gICAgcG9wcGVyLnN0eWxlLnpJbmRleCA9IFwiXCIgKyBpbnN0YW5jZS5wcm9wcy56SW5kZXg7XG4gIH1cblxuICBmdW5jdGlvbiBpbnZva2VIb29rKGhvb2ssIGFyZ3MsIHNob3VsZEludm9rZVByb3BzSG9vaykge1xuICAgIGlmIChzaG91bGRJbnZva2VQcm9wc0hvb2sgPT09IHZvaWQgMCkge1xuICAgICAgc2hvdWxkSW52b2tlUHJvcHNIb29rID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwbHVnaW5zSG9va3MuZm9yRWFjaChmdW5jdGlvbiAocGx1Z2luSG9va3MpIHtcbiAgICAgIGlmIChwbHVnaW5Ib29rc1tob29rXSkge1xuICAgICAgICBwbHVnaW5Ib29rc1tob29rXS5hcHBseSh2b2lkIDAsIGFyZ3MpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHNob3VsZEludm9rZVByb3BzSG9vaykge1xuICAgICAgdmFyIF9pbnN0YW5jZSRwcm9wcztcblxuICAgICAgKF9pbnN0YW5jZSRwcm9wcyA9IGluc3RhbmNlLnByb3BzKVtob29rXS5hcHBseShfaW5zdGFuY2UkcHJvcHMsIGFyZ3MpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUFyaWFDb250ZW50QXR0cmlidXRlKCkge1xuICAgIHZhciBhcmlhID0gaW5zdGFuY2UucHJvcHMuYXJpYTtcblxuICAgIGlmICghYXJpYS5jb250ZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGF0dHIgPSBcImFyaWEtXCIgKyBhcmlhLmNvbnRlbnQ7XG4gICAgdmFyIGlkID0gcG9wcGVyLmlkO1xuICAgIHZhciBub2RlcyA9IG5vcm1hbGl6ZVRvQXJyYXkoaW5zdGFuY2UucHJvcHMudHJpZ2dlclRhcmdldCB8fCByZWZlcmVuY2UpO1xuICAgIG5vZGVzLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIHZhciBjdXJyZW50VmFsdWUgPSBub2RlLmdldEF0dHJpYnV0ZShhdHRyKTtcblxuICAgICAgaWYgKGluc3RhbmNlLnN0YXRlLmlzVmlzaWJsZSkge1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShhdHRyLCBjdXJyZW50VmFsdWUgPyBjdXJyZW50VmFsdWUgKyBcIiBcIiArIGlkIDogaWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIG5leHRWYWx1ZSA9IGN1cnJlbnRWYWx1ZSAmJiBjdXJyZW50VmFsdWUucmVwbGFjZShpZCwgJycpLnRyaW0oKTtcblxuICAgICAgICBpZiAobmV4dFZhbHVlKSB7XG4gICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoYXR0ciwgbmV4dFZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShhdHRyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlQXJpYUV4cGFuZGVkQXR0cmlidXRlKCkge1xuICAgIGlmIChoYXNBcmlhRXhwYW5kZWQgfHwgIWluc3RhbmNlLnByb3BzLmFyaWEuZXhwYW5kZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbm9kZXMgPSBub3JtYWxpemVUb0FycmF5KGluc3RhbmNlLnByb3BzLnRyaWdnZXJUYXJnZXQgfHwgcmVmZXJlbmNlKTtcbiAgICBub2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICBpZiAoaW5zdGFuY2UucHJvcHMuaW50ZXJhY3RpdmUpIHtcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBpbnN0YW5jZS5zdGF0ZS5pc1Zpc2libGUgJiYgbm9kZSA9PT0gZ2V0Q3VycmVudFRhcmdldCgpID8gJ3RydWUnIDogJ2ZhbHNlJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xlYW51cEludGVyYWN0aXZlTW91c2VMaXN0ZW5lcnMoKSB7XG4gICAgZ2V0RG9jdW1lbnQoKS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBkZWJvdW5jZWRPbk1vdXNlTW92ZSk7XG4gICAgbW91c2VNb3ZlTGlzdGVuZXJzID0gbW91c2VNb3ZlTGlzdGVuZXJzLmZpbHRlcihmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICAgIHJldHVybiBsaXN0ZW5lciAhPT0gZGVib3VuY2VkT25Nb3VzZU1vdmU7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBvbkRvY3VtZW50UHJlc3MoZXZlbnQpIHtcbiAgICAvLyBNb3ZlZCBmaW5nZXIgdG8gc2Nyb2xsIGluc3RlYWQgb2YgYW4gaW50ZW50aW9uYWwgdGFwIG91dHNpZGVcbiAgICBpZiAoY3VycmVudElucHV0LmlzVG91Y2gpIHtcbiAgICAgIGlmIChkaWRUb3VjaE1vdmUgfHwgZXZlbnQudHlwZSA9PT0gJ21vdXNlZG93bicpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0gLy8gQ2xpY2tlZCBvbiBpbnRlcmFjdGl2ZSBwb3BwZXJcblxuXG4gICAgaWYgKGluc3RhbmNlLnByb3BzLmludGVyYWN0aXZlICYmIHBvcHBlci5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBDbGlja2VkIG9uIHRoZSBldmVudCBsaXN0ZW5lcnMgdGFyZ2V0XG5cblxuICAgIGlmIChnZXRDdXJyZW50VGFyZ2V0KCkuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgaWYgKGN1cnJlbnRJbnB1dC5pc1RvdWNoKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGluc3RhbmNlLnN0YXRlLmlzVmlzaWJsZSAmJiBpbnN0YW5jZS5wcm9wcy50cmlnZ2VyLmluZGV4T2YoJ2NsaWNrJykgPj0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGludm9rZUhvb2soJ29uQ2xpY2tPdXRzaWRlJywgW2luc3RhbmNlLCBldmVudF0pO1xuICAgIH1cblxuICAgIGlmIChpbnN0YW5jZS5wcm9wcy5oaWRlT25DbGljayA9PT0gdHJ1ZSkge1xuICAgICAgaW5zdGFuY2UuY2xlYXJEZWxheVRpbWVvdXRzKCk7XG4gICAgICBpbnN0YW5jZS5oaWRlKCk7IC8vIGBtb3VzZWRvd25gIGV2ZW50IGlzIGZpcmVkIHJpZ2h0IGJlZm9yZSBgZm9jdXNgIGlmIHByZXNzaW5nIHRoZVxuICAgICAgLy8gY3VycmVudFRhcmdldC4gVGhpcyBsZXRzIGEgdGlwcHkgd2l0aCBgZm9jdXNgIHRyaWdnZXIga25vdyB0aGF0IGl0XG4gICAgICAvLyBzaG91bGQgbm90IHNob3dcblxuICAgICAgZGlkSGlkZUR1ZVRvRG9jdW1lbnRNb3VzZURvd24gPSB0cnVlO1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRpZEhpZGVEdWVUb0RvY3VtZW50TW91c2VEb3duID0gZmFsc2U7XG4gICAgICB9KTsgLy8gVGhlIGxpc3RlbmVyIGdldHMgYWRkZWQgaW4gYHNjaGVkdWxlU2hvdygpYCwgYnV0IHRoaXMgbWF5IGJlIGhpZGluZyBpdFxuICAgICAgLy8gYmVmb3JlIGl0IHNob3dzLCBhbmQgaGlkZSgpJ3MgZWFybHkgYmFpbC1vdXQgYmVoYXZpb3IgY2FuIHByZXZlbnQgaXRcbiAgICAgIC8vIGZyb20gYmVpbmcgY2xlYW5lZCB1cFxuXG4gICAgICBpZiAoIWluc3RhbmNlLnN0YXRlLmlzTW91bnRlZCkge1xuICAgICAgICByZW1vdmVEb2N1bWVudFByZXNzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25Ub3VjaE1vdmUoKSB7XG4gICAgZGlkVG91Y2hNb3ZlID0gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uVG91Y2hTdGFydCgpIHtcbiAgICBkaWRUb3VjaE1vdmUgPSBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZERvY3VtZW50UHJlc3MoKSB7XG4gICAgdmFyIGRvYyA9IGdldERvY3VtZW50KCk7XG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG9uRG9jdW1lbnRQcmVzcywgdHJ1ZSk7XG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgb25Eb2N1bWVudFByZXNzLCBUT1VDSF9PUFRJT05TKTtcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIG9uVG91Y2hTdGFydCwgVE9VQ0hfT1BUSU9OUyk7XG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIG9uVG91Y2hNb3ZlLCBUT1VDSF9PUFRJT05TKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZURvY3VtZW50UHJlc3MoKSB7XG4gICAgdmFyIGRvYyA9IGdldERvY3VtZW50KCk7XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG9uRG9jdW1lbnRQcmVzcywgdHJ1ZSk7XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgb25Eb2N1bWVudFByZXNzLCBUT1VDSF9PUFRJT05TKTtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIG9uVG91Y2hTdGFydCwgVE9VQ0hfT1BUSU9OUyk7XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIG9uVG91Y2hNb3ZlLCBUT1VDSF9PUFRJT05TKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uVHJhbnNpdGlvbmVkT3V0KGR1cmF0aW9uLCBjYWxsYmFjaykge1xuICAgIG9uVHJhbnNpdGlvbkVuZChkdXJhdGlvbiwgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFpbnN0YW5jZS5zdGF0ZS5pc1Zpc2libGUgJiYgcG9wcGVyLnBhcmVudE5vZGUgJiYgcG9wcGVyLnBhcmVudE5vZGUuY29udGFpbnMocG9wcGVyKSkge1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gb25UcmFuc2l0aW9uZWRJbihkdXJhdGlvbiwgY2FsbGJhY2spIHtcbiAgICBvblRyYW5zaXRpb25FbmQoZHVyYXRpb24sIGNhbGxiYWNrKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uVHJhbnNpdGlvbkVuZChkdXJhdGlvbiwgY2FsbGJhY2spIHtcbiAgICB2YXIgYm94ID0gZ2V0RGVmYXVsdFRlbXBsYXRlQ2hpbGRyZW4oKS5ib3g7XG5cbiAgICBmdW5jdGlvbiBsaXN0ZW5lcihldmVudCkge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gYm94KSB7XG4gICAgICAgIHVwZGF0ZVRyYW5zaXRpb25FbmRMaXN0ZW5lcihib3gsICdyZW1vdmUnLCBsaXN0ZW5lcik7XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgfSAvLyBNYWtlIGNhbGxiYWNrIHN5bmNocm9ub3VzIGlmIGR1cmF0aW9uIGlzIDBcbiAgICAvLyBgdHJhbnNpdGlvbmVuZGAgd29uJ3QgZmlyZSBvdGhlcndpc2VcblxuXG4gICAgaWYgKGR1cmF0aW9uID09PSAwKSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICB9XG5cbiAgICB1cGRhdGVUcmFuc2l0aW9uRW5kTGlzdGVuZXIoYm94LCAncmVtb3ZlJywgY3VycmVudFRyYW5zaXRpb25FbmRMaXN0ZW5lcik7XG4gICAgdXBkYXRlVHJhbnNpdGlvbkVuZExpc3RlbmVyKGJveCwgJ2FkZCcsIGxpc3RlbmVyKTtcbiAgICBjdXJyZW50VHJhbnNpdGlvbkVuZExpc3RlbmVyID0gbGlzdGVuZXI7XG4gIH1cblxuICBmdW5jdGlvbiBvbihldmVudFR5cGUsIGhhbmRsZXIsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIG5vZGVzID0gbm9ybWFsaXplVG9BcnJheShpbnN0YW5jZS5wcm9wcy50cmlnZ2VyVGFyZ2V0IHx8IHJlZmVyZW5jZSk7XG4gICAgbm9kZXMuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgICBsaXN0ZW5lcnMucHVzaCh7XG4gICAgICAgIG5vZGU6IG5vZGUsXG4gICAgICAgIGV2ZW50VHlwZTogZXZlbnRUeXBlLFxuICAgICAgICBoYW5kbGVyOiBoYW5kbGVyLFxuICAgICAgICBvcHRpb25zOiBvcHRpb25zXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZExpc3RlbmVycygpIHtcbiAgICBpZiAoZ2V0SXNDdXN0b21Ub3VjaEJlaGF2aW9yKCkpIHtcbiAgICAgIG9uKCd0b3VjaHN0YXJ0Jywgb25UcmlnZ2VyLCB7XG4gICAgICAgIHBhc3NpdmU6IHRydWVcbiAgICAgIH0pO1xuICAgICAgb24oJ3RvdWNoZW5kJywgb25Nb3VzZUxlYXZlLCB7XG4gICAgICAgIHBhc3NpdmU6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHNwbGl0QnlTcGFjZXMoaW5zdGFuY2UucHJvcHMudHJpZ2dlcikuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnRUeXBlKSB7XG4gICAgICBpZiAoZXZlbnRUeXBlID09PSAnbWFudWFsJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIG9uKGV2ZW50VHlwZSwgb25UcmlnZ2VyKTtcblxuICAgICAgc3dpdGNoIChldmVudFR5cGUpIHtcbiAgICAgICAgY2FzZSAnbW91c2VlbnRlcic6XG4gICAgICAgICAgb24oJ21vdXNlbGVhdmUnLCBvbk1vdXNlTGVhdmUpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2ZvY3VzJzpcbiAgICAgICAgICBvbihpc0lFID8gJ2ZvY3Vzb3V0JyA6ICdibHVyJywgb25CbHVyT3JGb2N1c091dCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnZm9jdXNpbic6XG4gICAgICAgICAgb24oJ2ZvY3Vzb3V0Jywgb25CbHVyT3JGb2N1c091dCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcnMoKSB7XG4gICAgbGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgIHZhciBub2RlID0gX3JlZi5ub2RlLFxuICAgICAgICAgIGV2ZW50VHlwZSA9IF9yZWYuZXZlbnRUeXBlLFxuICAgICAgICAgIGhhbmRsZXIgPSBfcmVmLmhhbmRsZXIsXG4gICAgICAgICAgb3B0aW9ucyA9IF9yZWYub3B0aW9ucztcbiAgICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgIH0pO1xuICAgIGxpc3RlbmVycyA9IFtdO1xuICB9XG5cbiAgZnVuY3Rpb24gb25UcmlnZ2VyKGV2ZW50KSB7XG4gICAgdmFyIF9sYXN0VHJpZ2dlckV2ZW50O1xuXG4gICAgdmFyIHNob3VsZFNjaGVkdWxlQ2xpY2tIaWRlID0gZmFsc2U7XG5cbiAgICBpZiAoIWluc3RhbmNlLnN0YXRlLmlzRW5hYmxlZCB8fCBpc0V2ZW50TGlzdGVuZXJTdG9wcGVkKGV2ZW50KSB8fCBkaWRIaWRlRHVlVG9Eb2N1bWVudE1vdXNlRG93bikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciB3YXNGb2N1c2VkID0gKChfbGFzdFRyaWdnZXJFdmVudCA9IGxhc3RUcmlnZ2VyRXZlbnQpID09IG51bGwgPyB2b2lkIDAgOiBfbGFzdFRyaWdnZXJFdmVudC50eXBlKSA9PT0gJ2ZvY3VzJztcbiAgICBsYXN0VHJpZ2dlckV2ZW50ID0gZXZlbnQ7XG4gICAgY3VycmVudFRhcmdldCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgaGFuZGxlQXJpYUV4cGFuZGVkQXR0cmlidXRlKCk7XG5cbiAgICBpZiAoIWluc3RhbmNlLnN0YXRlLmlzVmlzaWJsZSAmJiBpc01vdXNlRXZlbnQoZXZlbnQpKSB7XG4gICAgICAvLyBJZiBzY3JvbGxpbmcsIGBtb3VzZWVudGVyYCBldmVudHMgY2FuIGJlIGZpcmVkIGlmIHRoZSBjdXJzb3IgbGFuZHNcbiAgICAgIC8vIG92ZXIgYSBuZXcgdGFyZ2V0LCBidXQgYG1vdXNlbW92ZWAgZXZlbnRzIGRvbid0IGdldCBmaXJlZC4gVGhpc1xuICAgICAgLy8gY2F1c2VzIGludGVyYWN0aXZlIHRvb2x0aXBzIHRvIGdldCBzdHVjayBvcGVuIHVudGlsIHRoZSBjdXJzb3IgaXNcbiAgICAgIC8vIG1vdmVkXG4gICAgICBtb3VzZU1vdmVMaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyKGV2ZW50KTtcbiAgICAgIH0pO1xuICAgIH0gLy8gVG9nZ2xlIHNob3cvaGlkZSB3aGVuIGNsaWNraW5nIGNsaWNrLXRyaWdnZXJlZCB0b29sdGlwc1xuXG5cbiAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ2NsaWNrJyAmJiAoaW5zdGFuY2UucHJvcHMudHJpZ2dlci5pbmRleE9mKCdtb3VzZWVudGVyJykgPCAwIHx8IGlzVmlzaWJsZUZyb21DbGljaykgJiYgaW5zdGFuY2UucHJvcHMuaGlkZU9uQ2xpY2sgIT09IGZhbHNlICYmIGluc3RhbmNlLnN0YXRlLmlzVmlzaWJsZSkge1xuICAgICAgc2hvdWxkU2NoZWR1bGVDbGlja0hpZGUgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBzY2hlZHVsZVNob3coZXZlbnQpO1xuICAgIH1cblxuICAgIGlmIChldmVudC50eXBlID09PSAnY2xpY2snKSB7XG4gICAgICBpc1Zpc2libGVGcm9tQ2xpY2sgPSAhc2hvdWxkU2NoZWR1bGVDbGlja0hpZGU7XG4gICAgfVxuXG4gICAgaWYgKHNob3VsZFNjaGVkdWxlQ2xpY2tIaWRlICYmICF3YXNGb2N1c2VkKSB7XG4gICAgICBzY2hlZHVsZUhpZGUoZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uTW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICB2YXIgaXNDdXJzb3JPdmVyUmVmZXJlbmNlT3JQb3BwZXIgPSBnZXRDdXJyZW50VGFyZ2V0KCkuY29udGFpbnModGFyZ2V0KSB8fCBwb3BwZXIuY29udGFpbnModGFyZ2V0KTtcblxuICAgIGlmIChldmVudC50eXBlID09PSAnbW91c2Vtb3ZlJyAmJiBpc0N1cnNvck92ZXJSZWZlcmVuY2VPclBvcHBlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwb3BwZXJUcmVlRGF0YSA9IGdldE5lc3RlZFBvcHBlclRyZWUoKS5jb25jYXQocG9wcGVyKS5tYXAoZnVuY3Rpb24gKHBvcHBlcikge1xuICAgICAgdmFyIF9pbnN0YW5jZSRwb3BwZXJJbnN0YTtcblxuICAgICAgdmFyIGluc3RhbmNlID0gcG9wcGVyLl90aXBweTtcbiAgICAgIHZhciBzdGF0ZSA9IChfaW5zdGFuY2UkcG9wcGVySW5zdGEgPSBpbnN0YW5jZS5wb3BwZXJJbnN0YW5jZSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9pbnN0YW5jZSRwb3BwZXJJbnN0YS5zdGF0ZTtcblxuICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcG9wcGVyUmVjdDogcG9wcGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgIHBvcHBlclN0YXRlOiBzdGF0ZSxcbiAgICAgICAgICBwcm9wczogcHJvcHNcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSkuZmlsdGVyKEJvb2xlYW4pO1xuXG4gICAgaWYgKGlzQ3Vyc29yT3V0c2lkZUludGVyYWN0aXZlQm9yZGVyKHBvcHBlclRyZWVEYXRhLCBldmVudCkpIHtcbiAgICAgIGNsZWFudXBJbnRlcmFjdGl2ZU1vdXNlTGlzdGVuZXJzKCk7XG4gICAgICBzY2hlZHVsZUhpZGUoZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uTW91c2VMZWF2ZShldmVudCkge1xuICAgIHZhciBzaG91bGRCYWlsID0gaXNFdmVudExpc3RlbmVyU3RvcHBlZChldmVudCkgfHwgaW5zdGFuY2UucHJvcHMudHJpZ2dlci5pbmRleE9mKCdjbGljaycpID49IDAgJiYgaXNWaXNpYmxlRnJvbUNsaWNrO1xuXG4gICAgaWYgKHNob3VsZEJhaWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoaW5zdGFuY2UucHJvcHMuaW50ZXJhY3RpdmUpIHtcbiAgICAgIGluc3RhbmNlLmhpZGVXaXRoSW50ZXJhY3Rpdml0eShldmVudCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2NoZWR1bGVIaWRlKGV2ZW50KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQmx1ck9yRm9jdXNPdXQoZXZlbnQpIHtcbiAgICBpZiAoaW5zdGFuY2UucHJvcHMudHJpZ2dlci5pbmRleE9mKCdmb2N1c2luJykgPCAwICYmIGV2ZW50LnRhcmdldCAhPT0gZ2V0Q3VycmVudFRhcmdldCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBJZiBmb2N1cyB3YXMgbW92ZWQgdG8gd2l0aGluIHRoZSBwb3BwZXJcblxuXG4gICAgaWYgKGluc3RhbmNlLnByb3BzLmludGVyYWN0aXZlICYmIGV2ZW50LnJlbGF0ZWRUYXJnZXQgJiYgcG9wcGVyLmNvbnRhaW5zKGV2ZW50LnJlbGF0ZWRUYXJnZXQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2NoZWR1bGVIaWRlKGV2ZW50KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzRXZlbnRMaXN0ZW5lclN0b3BwZWQoZXZlbnQpIHtcbiAgICByZXR1cm4gY3VycmVudElucHV0LmlzVG91Y2ggPyBnZXRJc0N1c3RvbVRvdWNoQmVoYXZpb3IoKSAhPT0gZXZlbnQudHlwZS5pbmRleE9mKCd0b3VjaCcpID49IDAgOiBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVBvcHBlckluc3RhbmNlKCkge1xuICAgIGRlc3Ryb3lQb3BwZXJJbnN0YW5jZSgpO1xuICAgIHZhciBfaW5zdGFuY2UkcHJvcHMyID0gaW5zdGFuY2UucHJvcHMsXG4gICAgICAgIHBvcHBlck9wdGlvbnMgPSBfaW5zdGFuY2UkcHJvcHMyLnBvcHBlck9wdGlvbnMsXG4gICAgICAgIHBsYWNlbWVudCA9IF9pbnN0YW5jZSRwcm9wczIucGxhY2VtZW50LFxuICAgICAgICBvZmZzZXQgPSBfaW5zdGFuY2UkcHJvcHMyLm9mZnNldCxcbiAgICAgICAgZ2V0UmVmZXJlbmNlQ2xpZW50UmVjdCA9IF9pbnN0YW5jZSRwcm9wczIuZ2V0UmVmZXJlbmNlQ2xpZW50UmVjdCxcbiAgICAgICAgbW92ZVRyYW5zaXRpb24gPSBfaW5zdGFuY2UkcHJvcHMyLm1vdmVUcmFuc2l0aW9uO1xuICAgIHZhciBhcnJvdyA9IGdldElzRGVmYXVsdFJlbmRlckZuKCkgPyBnZXRDaGlsZHJlbihwb3BwZXIpLmFycm93IDogbnVsbDtcbiAgICB2YXIgY29tcHV0ZWRSZWZlcmVuY2UgPSBnZXRSZWZlcmVuY2VDbGllbnRSZWN0ID8ge1xuICAgICAgZ2V0Qm91bmRpbmdDbGllbnRSZWN0OiBnZXRSZWZlcmVuY2VDbGllbnRSZWN0LFxuICAgICAgY29udGV4dEVsZW1lbnQ6IGdldFJlZmVyZW5jZUNsaWVudFJlY3QuY29udGV4dEVsZW1lbnQgfHwgZ2V0Q3VycmVudFRhcmdldCgpXG4gICAgfSA6IHJlZmVyZW5jZTtcbiAgICB2YXIgdGlwcHlNb2RpZmllciA9IHtcbiAgICAgIG5hbWU6ICckJHRpcHB5JyxcbiAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICBwaGFzZTogJ2JlZm9yZVdyaXRlJyxcbiAgICAgIHJlcXVpcmVzOiBbJ2NvbXB1dGVTdHlsZXMnXSxcbiAgICAgIGZuOiBmdW5jdGlvbiBmbihfcmVmMikge1xuICAgICAgICB2YXIgc3RhdGUgPSBfcmVmMi5zdGF0ZTtcblxuICAgICAgICBpZiAoZ2V0SXNEZWZhdWx0UmVuZGVyRm4oKSkge1xuICAgICAgICAgIHZhciBfZ2V0RGVmYXVsdFRlbXBsYXRlQ2ggPSBnZXREZWZhdWx0VGVtcGxhdGVDaGlsZHJlbigpLFxuICAgICAgICAgICAgICBib3ggPSBfZ2V0RGVmYXVsdFRlbXBsYXRlQ2guYm94O1xuXG4gICAgICAgICAgWydwbGFjZW1lbnQnLCAncmVmZXJlbmNlLWhpZGRlbicsICdlc2NhcGVkJ10uZm9yRWFjaChmdW5jdGlvbiAoYXR0cikge1xuICAgICAgICAgICAgaWYgKGF0dHIgPT09ICdwbGFjZW1lbnQnKSB7XG4gICAgICAgICAgICAgIGJveC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcGxhY2VtZW50Jywgc3RhdGUucGxhY2VtZW50KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmIChzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlcltcImRhdGEtcG9wcGVyLVwiICsgYXR0cl0pIHtcbiAgICAgICAgICAgICAgICBib3guc2V0QXR0cmlidXRlKFwiZGF0YS1cIiArIGF0dHIsICcnKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBib3gucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1cIiArIGF0dHIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgc3RhdGUuYXR0cmlidXRlcy5wb3BwZXIgPSB7fTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgdmFyIG1vZGlmaWVycyA9IFt7XG4gICAgICBuYW1lOiAnb2Zmc2V0JyxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgb2Zmc2V0OiBvZmZzZXRcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBuYW1lOiAncHJldmVudE92ZXJmbG93JyxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgcGFkZGluZzoge1xuICAgICAgICAgIHRvcDogMixcbiAgICAgICAgICBib3R0b206IDIsXG4gICAgICAgICAgbGVmdDogNSxcbiAgICAgICAgICByaWdodDogNVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbmFtZTogJ2ZsaXAnLFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICBwYWRkaW5nOiA1XG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbmFtZTogJ2NvbXB1dGVTdHlsZXMnLFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICBhZGFwdGl2ZTogIW1vdmVUcmFuc2l0aW9uXG4gICAgICB9XG4gICAgfSwgdGlwcHlNb2RpZmllcl07XG5cbiAgICBpZiAoZ2V0SXNEZWZhdWx0UmVuZGVyRm4oKSAmJiBhcnJvdykge1xuICAgICAgbW9kaWZpZXJzLnB1c2goe1xuICAgICAgICBuYW1lOiAnYXJyb3cnLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgZWxlbWVudDogYXJyb3csXG4gICAgICAgICAgcGFkZGluZzogM1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBtb2RpZmllcnMucHVzaC5hcHBseShtb2RpZmllcnMsIChwb3BwZXJPcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBwb3BwZXJPcHRpb25zLm1vZGlmaWVycykgfHwgW10pO1xuICAgIGluc3RhbmNlLnBvcHBlckluc3RhbmNlID0gY3JlYXRlUG9wcGVyKGNvbXB1dGVkUmVmZXJlbmNlLCBwb3BwZXIsIE9iamVjdC5hc3NpZ24oe30sIHBvcHBlck9wdGlvbnMsIHtcbiAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50LFxuICAgICAgb25GaXJzdFVwZGF0ZTogb25GaXJzdFVwZGF0ZSxcbiAgICAgIG1vZGlmaWVyczogbW9kaWZpZXJzXG4gICAgfSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVzdHJveVBvcHBlckluc3RhbmNlKCkge1xuICAgIGlmIChpbnN0YW5jZS5wb3BwZXJJbnN0YW5jZSkge1xuICAgICAgaW5zdGFuY2UucG9wcGVySW5zdGFuY2UuZGVzdHJveSgpO1xuICAgICAgaW5zdGFuY2UucG9wcGVySW5zdGFuY2UgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG1vdW50KCkge1xuICAgIHZhciBhcHBlbmRUbyA9IGluc3RhbmNlLnByb3BzLmFwcGVuZFRvO1xuICAgIHZhciBwYXJlbnROb2RlOyAvLyBCeSBkZWZhdWx0LCB3ZSdsbCBhcHBlbmQgdGhlIHBvcHBlciB0byB0aGUgdHJpZ2dlclRhcmdldHMncyBwYXJlbnROb2RlIHNvXG4gICAgLy8gaXQncyBkaXJlY3RseSBhZnRlciB0aGUgcmVmZXJlbmNlIGVsZW1lbnQgc28gdGhlIGVsZW1lbnRzIGluc2lkZSB0aGVcbiAgICAvLyB0aXBweSBjYW4gYmUgdGFiYmVkIHRvXG4gICAgLy8gSWYgdGhlcmUgYXJlIGNsaXBwaW5nIGlzc3VlcywgdGhlIHVzZXIgY2FuIHNwZWNpZnkgYSBkaWZmZXJlbnQgYXBwZW5kVG9cbiAgICAvLyBhbmQgZW5zdXJlIGZvY3VzIG1hbmFnZW1lbnQgaXMgaGFuZGxlZCBjb3JyZWN0bHkgbWFudWFsbHlcblxuICAgIHZhciBub2RlID0gZ2V0Q3VycmVudFRhcmdldCgpO1xuXG4gICAgaWYgKGluc3RhbmNlLnByb3BzLmludGVyYWN0aXZlICYmIGFwcGVuZFRvID09PSBkZWZhdWx0UHJvcHMuYXBwZW5kVG8gfHwgYXBwZW5kVG8gPT09ICdwYXJlbnQnKSB7XG4gICAgICBwYXJlbnROb2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJlbnROb2RlID0gaW52b2tlV2l0aEFyZ3NPclJldHVybihhcHBlbmRUbywgW25vZGVdKTtcbiAgICB9IC8vIFRoZSBwb3BwZXIgZWxlbWVudCBuZWVkcyB0byBleGlzdCBvbiB0aGUgRE9NIGJlZm9yZSBpdHMgcG9zaXRpb24gY2FuIGJlXG4gICAgLy8gdXBkYXRlZCBhcyBQb3BwZXIgbmVlZHMgdG8gcmVhZCBpdHMgZGltZW5zaW9uc1xuXG5cbiAgICBpZiAoIXBhcmVudE5vZGUuY29udGFpbnMocG9wcGVyKSkge1xuICAgICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChwb3BwZXIpO1xuICAgIH1cblxuICAgIGNyZWF0ZVBvcHBlckluc3RhbmNlKCk7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgIC8vIEFjY2Vzc2liaWxpdHkgY2hlY2tcbiAgICAgIHdhcm5XaGVuKGluc3RhbmNlLnByb3BzLmludGVyYWN0aXZlICYmIGFwcGVuZFRvID09PSBkZWZhdWx0UHJvcHMuYXBwZW5kVG8gJiYgbm9kZS5uZXh0RWxlbWVudFNpYmxpbmcgIT09IHBvcHBlciwgWydJbnRlcmFjdGl2ZSB0aXBweSBlbGVtZW50IG1heSBub3QgYmUgYWNjZXNzaWJsZSB2aWEga2V5Ym9hcmQnLCAnbmF2aWdhdGlvbiBiZWNhdXNlIGl0IGlzIG5vdCBkaXJlY3RseSBhZnRlciB0aGUgcmVmZXJlbmNlIGVsZW1lbnQnLCAnaW4gdGhlIERPTSBzb3VyY2Ugb3JkZXIuJywgJ1xcblxcbicsICdVc2luZyBhIHdyYXBwZXIgPGRpdj4gb3IgPHNwYW4+IHRhZyBhcm91bmQgdGhlIHJlZmVyZW5jZSBlbGVtZW50JywgJ3NvbHZlcyB0aGlzIGJ5IGNyZWF0aW5nIGEgbmV3IHBhcmVudE5vZGUgY29udGV4dC4nLCAnXFxuXFxuJywgJ1NwZWNpZnlpbmcgYGFwcGVuZFRvOiBkb2N1bWVudC5ib2R5YCBzaWxlbmNlcyB0aGlzIHdhcm5pbmcsIGJ1dCBpdCcsICdhc3N1bWVzIHlvdSBhcmUgdXNpbmcgYSBmb2N1cyBtYW5hZ2VtZW50IHNvbHV0aW9uIHRvIGhhbmRsZScsICdrZXlib2FyZCBuYXZpZ2F0aW9uLicsICdcXG5cXG4nLCAnU2VlOiBodHRwczovL2F0b21pa3MuZ2l0aHViLmlvL3RpcHB5anMvdjYvYWNjZXNzaWJpbGl0eS8jaW50ZXJhY3Rpdml0eSddLmpvaW4oJyAnKSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0TmVzdGVkUG9wcGVyVHJlZSgpIHtcbiAgICByZXR1cm4gYXJyYXlGcm9tKHBvcHBlci5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10aXBweS1yb290XScpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNjaGVkdWxlU2hvdyhldmVudCkge1xuICAgIGluc3RhbmNlLmNsZWFyRGVsYXlUaW1lb3V0cygpO1xuXG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBpbnZva2VIb29rKCdvblRyaWdnZXInLCBbaW5zdGFuY2UsIGV2ZW50XSk7XG4gICAgfVxuXG4gICAgYWRkRG9jdW1lbnRQcmVzcygpO1xuICAgIHZhciBkZWxheSA9IGdldERlbGF5KHRydWUpO1xuXG4gICAgdmFyIF9nZXROb3JtYWxpemVkVG91Y2hTZSA9IGdldE5vcm1hbGl6ZWRUb3VjaFNldHRpbmdzKCksXG4gICAgICAgIHRvdWNoVmFsdWUgPSBfZ2V0Tm9ybWFsaXplZFRvdWNoU2VbMF0sXG4gICAgICAgIHRvdWNoRGVsYXkgPSBfZ2V0Tm9ybWFsaXplZFRvdWNoU2VbMV07XG5cbiAgICBpZiAoY3VycmVudElucHV0LmlzVG91Y2ggJiYgdG91Y2hWYWx1ZSA9PT0gJ2hvbGQnICYmIHRvdWNoRGVsYXkpIHtcbiAgICAgIGRlbGF5ID0gdG91Y2hEZWxheTtcbiAgICB9XG5cbiAgICBpZiAoZGVsYXkpIHtcbiAgICAgIHNob3dUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGluc3RhbmNlLnNob3coKTtcbiAgICAgIH0sIGRlbGF5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5zdGFuY2Uuc2hvdygpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNjaGVkdWxlSGlkZShldmVudCkge1xuICAgIGluc3RhbmNlLmNsZWFyRGVsYXlUaW1lb3V0cygpO1xuICAgIGludm9rZUhvb2soJ29uVW50cmlnZ2VyJywgW2luc3RhbmNlLCBldmVudF0pO1xuXG4gICAgaWYgKCFpbnN0YW5jZS5zdGF0ZS5pc1Zpc2libGUpIHtcbiAgICAgIHJlbW92ZURvY3VtZW50UHJlc3MoKTtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIEZvciBpbnRlcmFjdGl2ZSB0aXBwaWVzLCBzY2hlZHVsZUhpZGUgaXMgYWRkZWQgdG8gYSBkb2N1bWVudC5ib2R5IGhhbmRsZXJcbiAgICAvLyBmcm9tIG9uTW91c2VMZWF2ZSBzbyBtdXN0IGludGVyY2VwdCBzY2hlZHVsZWQgaGlkZXMgZnJvbSBtb3VzZW1vdmUvbGVhdmVcbiAgICAvLyBldmVudHMgd2hlbiB0cmlnZ2VyIGNvbnRhaW5zIG1vdXNlZW50ZXIgYW5kIGNsaWNrLCBhbmQgdGhlIHRpcCBpc1xuICAgIC8vIGN1cnJlbnRseSBzaG93biBhcyBhIHJlc3VsdCBvZiBhIGNsaWNrLlxuXG5cbiAgICBpZiAoaW5zdGFuY2UucHJvcHMudHJpZ2dlci5pbmRleE9mKCdtb3VzZWVudGVyJykgPj0gMCAmJiBpbnN0YW5jZS5wcm9wcy50cmlnZ2VyLmluZGV4T2YoJ2NsaWNrJykgPj0gMCAmJiBbJ21vdXNlbGVhdmUnLCAnbW91c2Vtb3ZlJ10uaW5kZXhPZihldmVudC50eXBlKSA+PSAwICYmIGlzVmlzaWJsZUZyb21DbGljaykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBkZWxheSA9IGdldERlbGF5KGZhbHNlKTtcblxuICAgIGlmIChkZWxheSkge1xuICAgICAgaGlkZVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGluc3RhbmNlLnN0YXRlLmlzVmlzaWJsZSkge1xuICAgICAgICAgIGluc3RhbmNlLmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgfSwgZGVsYXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBGaXhlcyBhIGB0cmFuc2l0aW9uZW5kYCBwcm9ibGVtIHdoZW4gaXQgZmlyZXMgMSBmcmFtZSB0b29cbiAgICAgIC8vIGxhdGUgc29tZXRpbWVzLCB3ZSBkb24ndCB3YW50IGhpZGUoKSB0byBiZSBjYWxsZWQuXG4gICAgICBzY2hlZHVsZUhpZGVBbmltYXRpb25GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGluc3RhbmNlLmhpZGUoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8g8J+UkSBQdWJsaWMgbWV0aG9kc1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG4gIGZ1bmN0aW9uIGVuYWJsZSgpIHtcbiAgICBpbnN0YW5jZS5zdGF0ZS5pc0VuYWJsZWQgPSB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gZGlzYWJsZSgpIHtcbiAgICAvLyBEaXNhYmxpbmcgdGhlIGluc3RhbmNlIHNob3VsZCBhbHNvIGhpZGUgaXRcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYXRvbWlrcy90aXBweS5qcy1yZWFjdC9pc3N1ZXMvMTA2XG4gICAgaW5zdGFuY2UuaGlkZSgpO1xuICAgIGluc3RhbmNlLnN0YXRlLmlzRW5hYmxlZCA9IGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xlYXJEZWxheVRpbWVvdXRzKCkge1xuICAgIGNsZWFyVGltZW91dChzaG93VGltZW91dCk7XG4gICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZShzY2hlZHVsZUhpZGVBbmltYXRpb25GcmFtZSk7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRQcm9wcyhwYXJ0aWFsUHJvcHMpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgIHdhcm5XaGVuKGluc3RhbmNlLnN0YXRlLmlzRGVzdHJveWVkLCBjcmVhdGVNZW1vcnlMZWFrV2FybmluZygnc2V0UHJvcHMnKSk7XG4gICAgfVxuXG4gICAgaWYgKGluc3RhbmNlLnN0YXRlLmlzRGVzdHJveWVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaW52b2tlSG9vaygnb25CZWZvcmVVcGRhdGUnLCBbaW5zdGFuY2UsIHBhcnRpYWxQcm9wc10pO1xuICAgIHJlbW92ZUxpc3RlbmVycygpO1xuICAgIHZhciBwcmV2UHJvcHMgPSBpbnN0YW5jZS5wcm9wcztcbiAgICB2YXIgbmV4dFByb3BzID0gZXZhbHVhdGVQcm9wcyhyZWZlcmVuY2UsIE9iamVjdC5hc3NpZ24oe30sIGluc3RhbmNlLnByb3BzLCB7fSwgcGFydGlhbFByb3BzLCB7XG4gICAgICBpZ25vcmVBdHRyaWJ1dGVzOiB0cnVlXG4gICAgfSkpO1xuICAgIGluc3RhbmNlLnByb3BzID0gbmV4dFByb3BzO1xuICAgIGFkZExpc3RlbmVycygpO1xuXG4gICAgaWYgKHByZXZQcm9wcy5pbnRlcmFjdGl2ZURlYm91bmNlICE9PSBuZXh0UHJvcHMuaW50ZXJhY3RpdmVEZWJvdW5jZSkge1xuICAgICAgY2xlYW51cEludGVyYWN0aXZlTW91c2VMaXN0ZW5lcnMoKTtcbiAgICAgIGRlYm91bmNlZE9uTW91c2VNb3ZlID0gZGVib3VuY2Uob25Nb3VzZU1vdmUsIG5leHRQcm9wcy5pbnRlcmFjdGl2ZURlYm91bmNlKTtcbiAgICB9IC8vIEVuc3VyZSBzdGFsZSBhcmlhLWV4cGFuZGVkIGF0dHJpYnV0ZXMgYXJlIHJlbW92ZWRcblxuXG4gICAgaWYgKHByZXZQcm9wcy50cmlnZ2VyVGFyZ2V0ICYmICFuZXh0UHJvcHMudHJpZ2dlclRhcmdldCkge1xuICAgICAgbm9ybWFsaXplVG9BcnJheShwcmV2UHJvcHMudHJpZ2dlclRhcmdldCkuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChuZXh0UHJvcHMudHJpZ2dlclRhcmdldCkge1xuICAgICAgcmVmZXJlbmNlLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpO1xuICAgIH1cblxuICAgIGhhbmRsZUFyaWFFeHBhbmRlZEF0dHJpYnV0ZSgpO1xuICAgIGhhbmRsZVN0eWxlcygpO1xuXG4gICAgaWYgKG9uVXBkYXRlKSB7XG4gICAgICBvblVwZGF0ZShwcmV2UHJvcHMsIG5leHRQcm9wcyk7XG4gICAgfVxuXG4gICAgaWYgKGluc3RhbmNlLnBvcHBlckluc3RhbmNlKSB7XG4gICAgICBjcmVhdGVQb3BwZXJJbnN0YW5jZSgpOyAvLyBGaXhlcyBhbiBpc3N1ZSB3aXRoIG5lc3RlZCB0aXBwaWVzIGlmIHRoZXkgYXJlIGFsbCBnZXR0aW5nIHJlLXJlbmRlcmVkLFxuICAgICAgLy8gYW5kIHRoZSBuZXN0ZWQgb25lcyBnZXQgcmUtcmVuZGVyZWQgZmlyc3QuXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYXRvbWlrcy90aXBweWpzLXJlYWN0L2lzc3Vlcy8xNzdcbiAgICAgIC8vIFRPRE86IGZpbmQgYSBjbGVhbmVyIC8gbW9yZSBlZmZpY2llbnQgc29sdXRpb24oISlcblxuICAgICAgZ2V0TmVzdGVkUG9wcGVyVHJlZSgpLmZvckVhY2goZnVuY3Rpb24gKG5lc3RlZFBvcHBlcikge1xuICAgICAgICAvLyBSZWFjdCAoYW5kIG90aGVyIFVJIGxpYnMgbGlrZWx5KSByZXF1aXJlcyBhIHJBRiB3cmFwcGVyIGFzIGl0IGZsdXNoZXNcbiAgICAgICAgLy8gaXRzIHdvcmsgaW4gb25lXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShuZXN0ZWRQb3BwZXIuX3RpcHB5LnBvcHBlckluc3RhbmNlLmZvcmNlVXBkYXRlKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGludm9rZUhvb2soJ29uQWZ0ZXJVcGRhdGUnLCBbaW5zdGFuY2UsIHBhcnRpYWxQcm9wc10pO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0Q29udGVudChjb250ZW50KSB7XG4gICAgaW5zdGFuY2Uuc2V0UHJvcHMoe1xuICAgICAgY29udGVudDogY29udGVudFxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvdygpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgIHdhcm5XaGVuKGluc3RhbmNlLnN0YXRlLmlzRGVzdHJveWVkLCBjcmVhdGVNZW1vcnlMZWFrV2FybmluZygnc2hvdycpKTtcbiAgICB9IC8vIEVhcmx5IGJhaWwtb3V0XG5cblxuICAgIHZhciBpc0FscmVhZHlWaXNpYmxlID0gaW5zdGFuY2Uuc3RhdGUuaXNWaXNpYmxlO1xuICAgIHZhciBpc0Rlc3Ryb3llZCA9IGluc3RhbmNlLnN0YXRlLmlzRGVzdHJveWVkO1xuICAgIHZhciBpc0Rpc2FibGVkID0gIWluc3RhbmNlLnN0YXRlLmlzRW5hYmxlZDtcbiAgICB2YXIgaXNUb3VjaEFuZFRvdWNoRGlzYWJsZWQgPSBjdXJyZW50SW5wdXQuaXNUb3VjaCAmJiAhaW5zdGFuY2UucHJvcHMudG91Y2g7XG4gICAgdmFyIGR1cmF0aW9uID0gZ2V0VmFsdWVBdEluZGV4T3JSZXR1cm4oaW5zdGFuY2UucHJvcHMuZHVyYXRpb24sIDAsIGRlZmF1bHRQcm9wcy5kdXJhdGlvbik7XG5cbiAgICBpZiAoaXNBbHJlYWR5VmlzaWJsZSB8fCBpc0Rlc3Ryb3llZCB8fCBpc0Rpc2FibGVkIHx8IGlzVG91Y2hBbmRUb3VjaERpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBOb3JtYWxpemUgYGRpc2FibGVkYCBiZWhhdmlvciBhY3Jvc3MgYnJvd3NlcnMuXG4gICAgLy8gRmlyZWZveCBhbGxvd3MgZXZlbnRzIG9uIGRpc2FibGVkIGVsZW1lbnRzLCBidXQgQ2hyb21lIGRvZXNuJ3QuXG4gICAgLy8gVXNpbmcgYSB3cmFwcGVyIGVsZW1lbnQgKGkuZS4gPHNwYW4+KSBpcyByZWNvbW1lbmRlZC5cblxuXG4gICAgaWYgKGdldEN1cnJlbnRUYXJnZXQoKS5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpbnZva2VIb29rKCdvblNob3cnLCBbaW5zdGFuY2VdLCBmYWxzZSk7XG5cbiAgICBpZiAoaW5zdGFuY2UucHJvcHMub25TaG93KGluc3RhbmNlKSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpbnN0YW5jZS5zdGF0ZS5pc1Zpc2libGUgPSB0cnVlO1xuXG4gICAgaWYgKGdldElzRGVmYXVsdFJlbmRlckZuKCkpIHtcbiAgICAgIHBvcHBlci5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgIH1cblxuICAgIGhhbmRsZVN0eWxlcygpO1xuICAgIGFkZERvY3VtZW50UHJlc3MoKTtcblxuICAgIGlmICghaW5zdGFuY2Uuc3RhdGUuaXNNb3VudGVkKSB7XG4gICAgICBwb3BwZXIuc3R5bGUudHJhbnNpdGlvbiA9ICdub25lJztcbiAgICB9IC8vIElmIGZsaXBwaW5nIHRvIHRoZSBvcHBvc2l0ZSBzaWRlIGFmdGVyIGhpZGluZyBhdCBsZWFzdCBvbmNlLCB0aGVcbiAgICAvLyBhbmltYXRpb24gd2lsbCB1c2UgdGhlIHdyb25nIHBsYWNlbWVudCB3aXRob3V0IHJlc2V0dGluZyB0aGUgZHVyYXRpb25cblxuXG4gICAgaWYgKGdldElzRGVmYXVsdFJlbmRlckZuKCkpIHtcbiAgICAgIHZhciBfZ2V0RGVmYXVsdFRlbXBsYXRlQ2gyID0gZ2V0RGVmYXVsdFRlbXBsYXRlQ2hpbGRyZW4oKSxcbiAgICAgICAgICBib3ggPSBfZ2V0RGVmYXVsdFRlbXBsYXRlQ2gyLmJveCxcbiAgICAgICAgICBjb250ZW50ID0gX2dldERlZmF1bHRUZW1wbGF0ZUNoMi5jb250ZW50O1xuXG4gICAgICBzZXRUcmFuc2l0aW9uRHVyYXRpb24oW2JveCwgY29udGVudF0sIDApO1xuICAgIH1cblxuICAgIG9uRmlyc3RVcGRhdGUgPSBmdW5jdGlvbiBvbkZpcnN0VXBkYXRlKCkge1xuICAgICAgdmFyIF9pbnN0YW5jZSRwb3BwZXJJbnN0YTI7XG5cbiAgICAgIGlmICghaW5zdGFuY2Uuc3RhdGUuaXNWaXNpYmxlIHx8IGlnbm9yZU9uRmlyc3RVcGRhdGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZ25vcmVPbkZpcnN0VXBkYXRlID0gdHJ1ZTsgLy8gcmVmbG93XG5cbiAgICAgIHZvaWQgcG9wcGVyLm9mZnNldEhlaWdodDtcbiAgICAgIHBvcHBlci5zdHlsZS50cmFuc2l0aW9uID0gaW5zdGFuY2UucHJvcHMubW92ZVRyYW5zaXRpb247XG5cbiAgICAgIGlmIChnZXRJc0RlZmF1bHRSZW5kZXJGbigpICYmIGluc3RhbmNlLnByb3BzLmFuaW1hdGlvbikge1xuICAgICAgICB2YXIgX2dldERlZmF1bHRUZW1wbGF0ZUNoMyA9IGdldERlZmF1bHRUZW1wbGF0ZUNoaWxkcmVuKCksXG4gICAgICAgICAgICBfYm94ID0gX2dldERlZmF1bHRUZW1wbGF0ZUNoMy5ib3gsXG4gICAgICAgICAgICBfY29udGVudCA9IF9nZXREZWZhdWx0VGVtcGxhdGVDaDMuY29udGVudDtcblxuICAgICAgICBzZXRUcmFuc2l0aW9uRHVyYXRpb24oW19ib3gsIF9jb250ZW50XSwgZHVyYXRpb24pO1xuICAgICAgICBzZXRWaXNpYmlsaXR5U3RhdGUoW19ib3gsIF9jb250ZW50XSwgJ3Zpc2libGUnKTtcbiAgICAgIH1cblxuICAgICAgaGFuZGxlQXJpYUNvbnRlbnRBdHRyaWJ1dGUoKTtcbiAgICAgIGhhbmRsZUFyaWFFeHBhbmRlZEF0dHJpYnV0ZSgpO1xuICAgICAgcHVzaElmVW5pcXVlKG1vdW50ZWRJbnN0YW5jZXMsIGluc3RhbmNlKTsgLy8gY2VydGFpbiBtb2RpZmllcnMgKGUuZy4gYG1heFNpemVgKSByZXF1aXJlIGEgc2Vjb25kIHVwZGF0ZSBhZnRlciB0aGVcbiAgICAgIC8vIHBvcHBlciBoYXMgYmVlbiBwb3NpdGlvbmVkIGZvciB0aGUgZmlyc3QgdGltZVxuXG4gICAgICAoX2luc3RhbmNlJHBvcHBlckluc3RhMiA9IGluc3RhbmNlLnBvcHBlckluc3RhbmNlKSA9PSBudWxsID8gdm9pZCAwIDogX2luc3RhbmNlJHBvcHBlckluc3RhMi5mb3JjZVVwZGF0ZSgpO1xuICAgICAgaW5zdGFuY2Uuc3RhdGUuaXNNb3VudGVkID0gdHJ1ZTtcbiAgICAgIGludm9rZUhvb2soJ29uTW91bnQnLCBbaW5zdGFuY2VdKTtcblxuICAgICAgaWYgKGluc3RhbmNlLnByb3BzLmFuaW1hdGlvbiAmJiBnZXRJc0RlZmF1bHRSZW5kZXJGbigpKSB7XG4gICAgICAgIG9uVHJhbnNpdGlvbmVkSW4oZHVyYXRpb24sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpbnN0YW5jZS5zdGF0ZS5pc1Nob3duID0gdHJ1ZTtcbiAgICAgICAgICBpbnZva2VIb29rKCdvblNob3duJywgW2luc3RhbmNlXSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBtb3VudCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGlkZSgpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgIHdhcm5XaGVuKGluc3RhbmNlLnN0YXRlLmlzRGVzdHJveWVkLCBjcmVhdGVNZW1vcnlMZWFrV2FybmluZygnaGlkZScpKTtcbiAgICB9IC8vIEVhcmx5IGJhaWwtb3V0XG5cblxuICAgIHZhciBpc0FscmVhZHlIaWRkZW4gPSAhaW5zdGFuY2Uuc3RhdGUuaXNWaXNpYmxlO1xuICAgIHZhciBpc0Rlc3Ryb3llZCA9IGluc3RhbmNlLnN0YXRlLmlzRGVzdHJveWVkO1xuICAgIHZhciBpc0Rpc2FibGVkID0gIWluc3RhbmNlLnN0YXRlLmlzRW5hYmxlZDtcbiAgICB2YXIgZHVyYXRpb24gPSBnZXRWYWx1ZUF0SW5kZXhPclJldHVybihpbnN0YW5jZS5wcm9wcy5kdXJhdGlvbiwgMSwgZGVmYXVsdFByb3BzLmR1cmF0aW9uKTtcblxuICAgIGlmIChpc0FscmVhZHlIaWRkZW4gfHwgaXNEZXN0cm95ZWQgfHwgaXNEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGludm9rZUhvb2soJ29uSGlkZScsIFtpbnN0YW5jZV0sIGZhbHNlKTtcblxuICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vbkhpZGUoaW5zdGFuY2UpID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGluc3RhbmNlLnN0YXRlLmlzVmlzaWJsZSA9IGZhbHNlO1xuICAgIGluc3RhbmNlLnN0YXRlLmlzU2hvd24gPSBmYWxzZTtcbiAgICBpZ25vcmVPbkZpcnN0VXBkYXRlID0gZmFsc2U7XG4gICAgaXNWaXNpYmxlRnJvbUNsaWNrID0gZmFsc2U7XG5cbiAgICBpZiAoZ2V0SXNEZWZhdWx0UmVuZGVyRm4oKSkge1xuICAgICAgcG9wcGVyLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICB9XG5cbiAgICBjbGVhbnVwSW50ZXJhY3RpdmVNb3VzZUxpc3RlbmVycygpO1xuICAgIHJlbW92ZURvY3VtZW50UHJlc3MoKTtcbiAgICBoYW5kbGVTdHlsZXMoKTtcblxuICAgIGlmIChnZXRJc0RlZmF1bHRSZW5kZXJGbigpKSB7XG4gICAgICB2YXIgX2dldERlZmF1bHRUZW1wbGF0ZUNoNCA9IGdldERlZmF1bHRUZW1wbGF0ZUNoaWxkcmVuKCksXG4gICAgICAgICAgYm94ID0gX2dldERlZmF1bHRUZW1wbGF0ZUNoNC5ib3gsXG4gICAgICAgICAgY29udGVudCA9IF9nZXREZWZhdWx0VGVtcGxhdGVDaDQuY29udGVudDtcblxuICAgICAgaWYgKGluc3RhbmNlLnByb3BzLmFuaW1hdGlvbikge1xuICAgICAgICBzZXRUcmFuc2l0aW9uRHVyYXRpb24oW2JveCwgY29udGVudF0sIGR1cmF0aW9uKTtcbiAgICAgICAgc2V0VmlzaWJpbGl0eVN0YXRlKFtib3gsIGNvbnRlbnRdLCAnaGlkZGVuJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlQXJpYUNvbnRlbnRBdHRyaWJ1dGUoKTtcbiAgICBoYW5kbGVBcmlhRXhwYW5kZWRBdHRyaWJ1dGUoKTtcblxuICAgIGlmIChpbnN0YW5jZS5wcm9wcy5hbmltYXRpb24pIHtcbiAgICAgIGlmIChnZXRJc0RlZmF1bHRSZW5kZXJGbigpKSB7XG4gICAgICAgIG9uVHJhbnNpdGlvbmVkT3V0KGR1cmF0aW9uLCBpbnN0YW5jZS51bm1vdW50KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaW5zdGFuY2UudW5tb3VudCgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZGVXaXRoSW50ZXJhY3Rpdml0eShldmVudCkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgd2FybldoZW4oaW5zdGFuY2Uuc3RhdGUuaXNEZXN0cm95ZWQsIGNyZWF0ZU1lbW9yeUxlYWtXYXJuaW5nKCdoaWRlV2l0aEludGVyYWN0aXZpdHknKSk7XG4gICAgfVxuXG4gICAgZ2V0RG9jdW1lbnQoKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBkZWJvdW5jZWRPbk1vdXNlTW92ZSk7XG4gICAgcHVzaElmVW5pcXVlKG1vdXNlTW92ZUxpc3RlbmVycywgZGVib3VuY2VkT25Nb3VzZU1vdmUpO1xuICAgIGRlYm91bmNlZE9uTW91c2VNb3ZlKGV2ZW50KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVubW91bnQoKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICB3YXJuV2hlbihpbnN0YW5jZS5zdGF0ZS5pc0Rlc3Ryb3llZCwgY3JlYXRlTWVtb3J5TGVha1dhcm5pbmcoJ3VubW91bnQnKSk7XG4gICAgfVxuXG4gICAgaWYgKGluc3RhbmNlLnN0YXRlLmlzVmlzaWJsZSkge1xuICAgICAgaW5zdGFuY2UuaGlkZSgpO1xuICAgIH1cblxuICAgIGlmICghaW5zdGFuY2Uuc3RhdGUuaXNNb3VudGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZGVzdHJveVBvcHBlckluc3RhbmNlKCk7IC8vIElmIGEgcG9wcGVyIGlzIG5vdCBpbnRlcmFjdGl2ZSwgaXQgd2lsbCBiZSBhcHBlbmRlZCBvdXRzaWRlIHRoZSBwb3BwZXJcbiAgICAvLyB0cmVlIGJ5IGRlZmF1bHQuIFRoaXMgc2VlbXMgbWFpbmx5IGZvciBpbnRlcmFjdGl2ZSB0aXBwaWVzLCBidXQgd2Ugc2hvdWxkXG4gICAgLy8gZmluZCBhIHdvcmthcm91bmQgaWYgcG9zc2libGVcblxuICAgIGdldE5lc3RlZFBvcHBlclRyZWUoKS5mb3JFYWNoKGZ1bmN0aW9uIChuZXN0ZWRQb3BwZXIpIHtcbiAgICAgIG5lc3RlZFBvcHBlci5fdGlwcHkudW5tb3VudCgpO1xuICAgIH0pO1xuXG4gICAgaWYgKHBvcHBlci5wYXJlbnROb2RlKSB7XG4gICAgICBwb3BwZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChwb3BwZXIpO1xuICAgIH1cblxuICAgIG1vdW50ZWRJbnN0YW5jZXMgPSBtb3VudGVkSW5zdGFuY2VzLmZpbHRlcihmdW5jdGlvbiAoaSkge1xuICAgICAgcmV0dXJuIGkgIT09IGluc3RhbmNlO1xuICAgIH0pO1xuICAgIGluc3RhbmNlLnN0YXRlLmlzTW91bnRlZCA9IGZhbHNlO1xuICAgIGludm9rZUhvb2soJ29uSGlkZGVuJywgW2luc3RhbmNlXSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgd2FybldoZW4oaW5zdGFuY2Uuc3RhdGUuaXNEZXN0cm95ZWQsIGNyZWF0ZU1lbW9yeUxlYWtXYXJuaW5nKCdkZXN0cm95JykpO1xuICAgIH1cblxuICAgIGlmIChpbnN0YW5jZS5zdGF0ZS5pc0Rlc3Ryb3llZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGluc3RhbmNlLmNsZWFyRGVsYXlUaW1lb3V0cygpO1xuICAgIGluc3RhbmNlLnVubW91bnQoKTtcbiAgICByZW1vdmVMaXN0ZW5lcnMoKTtcbiAgICBkZWxldGUgcmVmZXJlbmNlLl90aXBweTtcbiAgICBpbnN0YW5jZS5zdGF0ZS5pc0Rlc3Ryb3llZCA9IHRydWU7XG4gICAgaW52b2tlSG9vaygnb25EZXN0cm95JywgW2luc3RhbmNlXSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdGlwcHkodGFyZ2V0cywgb3B0aW9uYWxQcm9wcykge1xuICBpZiAob3B0aW9uYWxQcm9wcyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9uYWxQcm9wcyA9IHt9O1xuICB9XG5cbiAgdmFyIHBsdWdpbnMgPSBkZWZhdWx0UHJvcHMucGx1Z2lucy5jb25jYXQob3B0aW9uYWxQcm9wcy5wbHVnaW5zIHx8IFtdKTtcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgdmFsaWRhdGVUYXJnZXRzKHRhcmdldHMpO1xuICAgIHZhbGlkYXRlUHJvcHMob3B0aW9uYWxQcm9wcywgcGx1Z2lucyk7XG4gIH1cblxuICBiaW5kR2xvYmFsRXZlbnRMaXN0ZW5lcnMoKTtcbiAgdmFyIHBhc3NlZFByb3BzID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9uYWxQcm9wcywge1xuICAgIHBsdWdpbnM6IHBsdWdpbnNcbiAgfSk7XG4gIHZhciBlbGVtZW50cyA9IGdldEFycmF5T2ZFbGVtZW50cyh0YXJnZXRzKTtcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgdmFyIGlzU2luZ2xlQ29udGVudEVsZW1lbnQgPSBpc0VsZW1lbnQocGFzc2VkUHJvcHMuY29udGVudCk7XG4gICAgdmFyIGlzTW9yZVRoYW5PbmVSZWZlcmVuY2VFbGVtZW50ID0gZWxlbWVudHMubGVuZ3RoID4gMTtcbiAgICB3YXJuV2hlbihpc1NpbmdsZUNvbnRlbnRFbGVtZW50ICYmIGlzTW9yZVRoYW5PbmVSZWZlcmVuY2VFbGVtZW50LCBbJ3RpcHB5KCkgd2FzIHBhc3NlZCBhbiBFbGVtZW50IGFzIHRoZSBgY29udGVudGAgcHJvcCwgYnV0IG1vcmUgdGhhbicsICdvbmUgdGlwcHkgaW5zdGFuY2Ugd2FzIGNyZWF0ZWQgYnkgdGhpcyBpbnZvY2F0aW9uLiBUaGlzIG1lYW5zIHRoZScsICdjb250ZW50IGVsZW1lbnQgd2lsbCBvbmx5IGJlIGFwcGVuZGVkIHRvIHRoZSBsYXN0IHRpcHB5IGluc3RhbmNlLicsICdcXG5cXG4nLCAnSW5zdGVhZCwgcGFzcyB0aGUgLmlubmVySFRNTCBvZiB0aGUgZWxlbWVudCwgb3IgdXNlIGEgZnVuY3Rpb24gdGhhdCcsICdyZXR1cm5zIGEgY2xvbmVkIHZlcnNpb24gb2YgdGhlIGVsZW1lbnQgaW5zdGVhZC4nLCAnXFxuXFxuJywgJzEpIGNvbnRlbnQ6IGVsZW1lbnQuaW5uZXJIVE1MXFxuJywgJzIpIGNvbnRlbnQ6ICgpID0+IGVsZW1lbnQuY2xvbmVOb2RlKHRydWUpJ10uam9pbignICcpKTtcbiAgfVxuXG4gIHZhciBpbnN0YW5jZXMgPSBlbGVtZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcmVmZXJlbmNlKSB7XG4gICAgdmFyIGluc3RhbmNlID0gcmVmZXJlbmNlICYmIGNyZWF0ZVRpcHB5KHJlZmVyZW5jZSwgcGFzc2VkUHJvcHMpO1xuXG4gICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICBhY2MucHVzaChpbnN0YW5jZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjYztcbiAgfSwgW10pO1xuICByZXR1cm4gaXNFbGVtZW50KHRhcmdldHMpID8gaW5zdGFuY2VzWzBdIDogaW5zdGFuY2VzO1xufVxuXG50aXBweS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG50aXBweS5zZXREZWZhdWx0UHJvcHMgPSBzZXREZWZhdWx0UHJvcHM7XG50aXBweS5jdXJyZW50SW5wdXQgPSBjdXJyZW50SW5wdXQ7XG52YXIgaGlkZUFsbCA9IGZ1bmN0aW9uIGhpZGVBbGwoX3RlbXApIHtcbiAgdmFyIF9yZWYgPSBfdGVtcCA9PT0gdm9pZCAwID8ge30gOiBfdGVtcCxcbiAgICAgIGV4Y2x1ZGVkUmVmZXJlbmNlT3JJbnN0YW5jZSA9IF9yZWYuZXhjbHVkZSxcbiAgICAgIGR1cmF0aW9uID0gX3JlZi5kdXJhdGlvbjtcblxuICBtb3VudGVkSW5zdGFuY2VzLmZvckVhY2goZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgdmFyIGlzRXhjbHVkZWQgPSBmYWxzZTtcblxuICAgIGlmIChleGNsdWRlZFJlZmVyZW5jZU9ySW5zdGFuY2UpIHtcbiAgICAgIGlzRXhjbHVkZWQgPSBpc1JlZmVyZW5jZUVsZW1lbnQoZXhjbHVkZWRSZWZlcmVuY2VPckluc3RhbmNlKSA/IGluc3RhbmNlLnJlZmVyZW5jZSA9PT0gZXhjbHVkZWRSZWZlcmVuY2VPckluc3RhbmNlIDogaW5zdGFuY2UucG9wcGVyID09PSBleGNsdWRlZFJlZmVyZW5jZU9ySW5zdGFuY2UucG9wcGVyO1xuICAgIH1cblxuICAgIGlmICghaXNFeGNsdWRlZCkge1xuICAgICAgdmFyIG9yaWdpbmFsRHVyYXRpb24gPSBpbnN0YW5jZS5wcm9wcy5kdXJhdGlvbjtcbiAgICAgIGluc3RhbmNlLnNldFByb3BzKHtcbiAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uXG4gICAgICB9KTtcbiAgICAgIGluc3RhbmNlLmhpZGUoKTtcblxuICAgICAgaWYgKCFpbnN0YW5jZS5zdGF0ZS5pc0Rlc3Ryb3llZCkge1xuICAgICAgICBpbnN0YW5jZS5zZXRQcm9wcyh7XG4gICAgICAgICAgZHVyYXRpb246IG9yaWdpbmFsRHVyYXRpb25cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn07XG5cbi8vIGV2ZXJ5IHRpbWUgdGhlIHBvcHBlciBpcyBkZXN0cm95ZWQgKGkuZS4gYSBuZXcgdGFyZ2V0KSwgcmVtb3ZpbmcgdGhlIHN0eWxlc1xuLy8gYW5kIGNhdXNpbmcgdHJhbnNpdGlvbnMgdG8gYnJlYWsgZm9yIHNpbmdsZXRvbnMgd2hlbiB0aGUgY29uc29sZSBpcyBvcGVuLCBidXRcbi8vIG1vc3Qgbm90YWJseSBmb3Igbm9uLXRyYW5zZm9ybSBzdHlsZXMgYmVpbmcgdXNlZCwgYGdwdUFjY2VsZXJhdGlvbjogZmFsc2VgLlxuXG52YXIgYXBwbHlTdHlsZXNNb2RpZmllciA9IE9iamVjdC5hc3NpZ24oe30sIGFwcGx5U3R5bGVzLCB7XG4gIGVmZmVjdDogZnVuY3Rpb24gZWZmZWN0KF9yZWYpIHtcbiAgICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlO1xuICAgIHZhciBpbml0aWFsU3R5bGVzID0ge1xuICAgICAgcG9wcGVyOiB7XG4gICAgICAgIHBvc2l0aW9uOiBzdGF0ZS5vcHRpb25zLnN0cmF0ZWd5LFxuICAgICAgICBsZWZ0OiAnMCcsXG4gICAgICAgIHRvcDogJzAnLFxuICAgICAgICBtYXJnaW46ICcwJ1xuICAgICAgfSxcbiAgICAgIGFycm93OiB7XG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG4gICAgICB9LFxuICAgICAgcmVmZXJlbmNlOiB7fVxuICAgIH07XG4gICAgT2JqZWN0LmFzc2lnbihzdGF0ZS5lbGVtZW50cy5wb3BwZXIuc3R5bGUsIGluaXRpYWxTdHlsZXMucG9wcGVyKTtcbiAgICBzdGF0ZS5zdHlsZXMgPSBpbml0aWFsU3R5bGVzO1xuXG4gICAgaWYgKHN0YXRlLmVsZW1lbnRzLmFycm93KSB7XG4gICAgICBPYmplY3QuYXNzaWduKHN0YXRlLmVsZW1lbnRzLmFycm93LnN0eWxlLCBpbml0aWFsU3R5bGVzLmFycm93KTtcbiAgICB9IC8vIGludGVudGlvbmFsbHkgcmV0dXJuIG5vIGNsZWFudXAgZnVuY3Rpb25cbiAgICAvLyByZXR1cm4gKCkgPT4geyAuLi4gfVxuXG4gIH1cbn0pO1xuXG52YXIgY3JlYXRlU2luZ2xldG9uID0gZnVuY3Rpb24gY3JlYXRlU2luZ2xldG9uKHRpcHB5SW5zdGFuY2VzLCBvcHRpb25hbFByb3BzKSB7XG4gIHZhciBfb3B0aW9uYWxQcm9wcyRwb3BwZXI7XG5cbiAgaWYgKG9wdGlvbmFsUHJvcHMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbmFsUHJvcHMgPSB7fTtcbiAgfVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICBlcnJvcldoZW4oIUFycmF5LmlzQXJyYXkodGlwcHlJbnN0YW5jZXMpLCBbJ1RoZSBmaXJzdCBhcmd1bWVudCBwYXNzZWQgdG8gY3JlYXRlU2luZ2xldG9uKCkgbXVzdCBiZSBhbiBhcnJheSBvZicsICd0aXBweSBpbnN0YW5jZXMuIFRoZSBwYXNzZWQgdmFsdWUgd2FzJywgU3RyaW5nKHRpcHB5SW5zdGFuY2VzKV0uam9pbignICcpKTtcbiAgfVxuXG4gIHZhciBpbmRpdmlkdWFsSW5zdGFuY2VzID0gdGlwcHlJbnN0YW5jZXM7XG4gIHZhciByZWZlcmVuY2VzID0gW107XG4gIHZhciBjdXJyZW50VGFyZ2V0O1xuICB2YXIgb3ZlcnJpZGVzID0gb3B0aW9uYWxQcm9wcy5vdmVycmlkZXM7XG4gIHZhciBpbnRlcmNlcHRTZXRQcm9wc0NsZWFudXBzID0gW107XG4gIHZhciBzaG93bk9uQ3JlYXRlID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gc2V0UmVmZXJlbmNlcygpIHtcbiAgICByZWZlcmVuY2VzID0gaW5kaXZpZHVhbEluc3RhbmNlcy5tYXAoZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgICByZXR1cm4gaW5zdGFuY2UucmVmZXJlbmNlO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZW5hYmxlSW5zdGFuY2VzKGlzRW5hYmxlZCkge1xuICAgIGluZGl2aWR1YWxJbnN0YW5jZXMuZm9yRWFjaChmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICAgIGlmIChpc0VuYWJsZWQpIHtcbiAgICAgICAgaW5zdGFuY2UuZW5hYmxlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnN0YW5jZS5kaXNhYmxlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBpbnRlcmNlcHRTZXRQcm9wcyhzaW5nbGV0b24pIHtcbiAgICByZXR1cm4gaW5kaXZpZHVhbEluc3RhbmNlcy5tYXAoZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgICB2YXIgb3JpZ2luYWxTZXRQcm9wcyA9IGluc3RhbmNlLnNldFByb3BzO1xuXG4gICAgICBpbnN0YW5jZS5zZXRQcm9wcyA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgICAgICBvcmlnaW5hbFNldFByb3BzKHByb3BzKTtcblxuICAgICAgICBpZiAoaW5zdGFuY2UucmVmZXJlbmNlID09PSBjdXJyZW50VGFyZ2V0KSB7XG4gICAgICAgICAgc2luZ2xldG9uLnNldFByb3BzKHByb3BzKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaW5zdGFuY2Uuc2V0UHJvcHMgPSBvcmlnaW5hbFNldFByb3BzO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfSAvLyBoYXZlIHRvIHBhc3Mgc2luZ2xldG9uLCBhcyBpdCBtYXliZSB1bmRlZmluZWQgb24gZmlyc3QgY2FsbFxuXG5cbiAgZnVuY3Rpb24gcHJlcGFyZUluc3RhbmNlKHNpbmdsZXRvbiwgdGFyZ2V0KSB7XG4gICAgdmFyIGluZGV4ID0gcmVmZXJlbmNlcy5pbmRleE9mKHRhcmdldCk7IC8vIGJhaWwtb3V0XG5cbiAgICBpZiAodGFyZ2V0ID09PSBjdXJyZW50VGFyZ2V0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY3VycmVudFRhcmdldCA9IHRhcmdldDtcbiAgICB2YXIgb3ZlcnJpZGVQcm9wcyA9IChvdmVycmlkZXMgfHwgW10pLmNvbmNhdCgnY29udGVudCcpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwcm9wKSB7XG4gICAgICBhY2NbcHJvcF0gPSBpbmRpdmlkdWFsSW5zdGFuY2VzW2luZGV4XS5wcm9wc1twcm9wXTtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pO1xuICAgIHNpbmdsZXRvbi5zZXRQcm9wcyhPYmplY3QuYXNzaWduKHt9LCBvdmVycmlkZVByb3BzLCB7XG4gICAgICBnZXRSZWZlcmVuY2VDbGllbnRSZWN0OiB0eXBlb2Ygb3ZlcnJpZGVQcm9wcy5nZXRSZWZlcmVuY2VDbGllbnRSZWN0ID09PSAnZnVuY3Rpb24nID8gb3ZlcnJpZGVQcm9wcy5nZXRSZWZlcmVuY2VDbGllbnRSZWN0IDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgfVxuICAgIH0pKTtcbiAgfVxuXG4gIGVuYWJsZUluc3RhbmNlcyhmYWxzZSk7XG4gIHNldFJlZmVyZW5jZXMoKTtcbiAgdmFyIHBsdWdpbiA9IHtcbiAgICBmbjogZnVuY3Rpb24gZm4oKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBvbkRlc3Ryb3k6IGZ1bmN0aW9uIG9uRGVzdHJveSgpIHtcbiAgICAgICAgICBlbmFibGVJbnN0YW5jZXModHJ1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uSGlkZGVuOiBmdW5jdGlvbiBvbkhpZGRlbigpIHtcbiAgICAgICAgICBjdXJyZW50VGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfSxcbiAgICAgICAgb25DbGlja091dHNpZGU6IGZ1bmN0aW9uIG9uQ2xpY2tPdXRzaWRlKGluc3RhbmNlKSB7XG4gICAgICAgICAgaWYgKGluc3RhbmNlLnByb3BzLnNob3dPbkNyZWF0ZSAmJiAhc2hvd25PbkNyZWF0ZSkge1xuICAgICAgICAgICAgc2hvd25PbkNyZWF0ZSA9IHRydWU7XG4gICAgICAgICAgICBjdXJyZW50VGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9uU2hvdzogZnVuY3Rpb24gb25TaG93KGluc3RhbmNlKSB7XG4gICAgICAgICAgaWYgKGluc3RhbmNlLnByb3BzLnNob3dPbkNyZWF0ZSAmJiAhc2hvd25PbkNyZWF0ZSkge1xuICAgICAgICAgICAgc2hvd25PbkNyZWF0ZSA9IHRydWU7XG4gICAgICAgICAgICBwcmVwYXJlSW5zdGFuY2UoaW5zdGFuY2UsIHJlZmVyZW5jZXNbMF0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb25UcmlnZ2VyOiBmdW5jdGlvbiBvblRyaWdnZXIoaW5zdGFuY2UsIGV2ZW50KSB7XG4gICAgICAgICAgcHJlcGFyZUluc3RhbmNlKGluc3RhbmNlLCBldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH07XG4gIHZhciBzaW5nbGV0b24gPSB0aXBweShkaXYoKSwgT2JqZWN0LmFzc2lnbih7fSwgcmVtb3ZlUHJvcGVydGllcyhvcHRpb25hbFByb3BzLCBbJ292ZXJyaWRlcyddKSwge1xuICAgIHBsdWdpbnM6IFtwbHVnaW5dLmNvbmNhdChvcHRpb25hbFByb3BzLnBsdWdpbnMgfHwgW10pLFxuICAgIHRyaWdnZXJUYXJnZXQ6IHJlZmVyZW5jZXMsXG4gICAgcG9wcGVyT3B0aW9uczogT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9uYWxQcm9wcy5wb3BwZXJPcHRpb25zLCB7XG4gICAgICBtb2RpZmllcnM6IFtdLmNvbmNhdCgoKF9vcHRpb25hbFByb3BzJHBvcHBlciA9IG9wdGlvbmFsUHJvcHMucG9wcGVyT3B0aW9ucykgPT0gbnVsbCA/IHZvaWQgMCA6IF9vcHRpb25hbFByb3BzJHBvcHBlci5tb2RpZmllcnMpIHx8IFtdLCBbYXBwbHlTdHlsZXNNb2RpZmllcl0pXG4gICAgfSlcbiAgfSkpO1xuICB2YXIgb3JpZ2luYWxTaG93ID0gc2luZ2xldG9uLnNob3c7XG5cbiAgc2luZ2xldG9uLnNob3cgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgb3JpZ2luYWxTaG93KCk7IC8vIGZpcnN0IHRpbWUsIHNob3dPbkNyZWF0ZSBvciBwcm9ncmFtbWF0aWMgY2FsbCB3aXRoIG5vIHBhcmFtc1xuICAgIC8vIGRlZmF1bHQgdG8gc2hvd2luZyBmaXJzdCBpbnN0YW5jZVxuXG4gICAgaWYgKCFjdXJyZW50VGFyZ2V0ICYmIHRhcmdldCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gcHJlcGFyZUluc3RhbmNlKHNpbmdsZXRvbiwgcmVmZXJlbmNlc1swXSk7XG4gICAgfSAvLyB0cmlnZ2VyZWQgZnJvbSBldmVudCAoZG8gbm90aGluZyBhcyBwcmVwYXJlSW5zdGFuY2UgYWxyZWFkeSBjYWxsZWQgYnkgb25UcmlnZ2VyKVxuICAgIC8vIHByb2dyYW1tYXRpYyBjYWxsIHdpdGggbm8gcGFyYW1zIHdoZW4gYWxyZWFkeSB2aXNpYmxlIChkbyBub3RoaW5nIGFnYWluKVxuXG5cbiAgICBpZiAoY3VycmVudFRhcmdldCAmJiB0YXJnZXQgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gdGFyZ2V0IGlzIGluZGV4IG9mIGluc3RhbmNlXG5cblxuICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnbnVtYmVyJykge1xuICAgICAgcmV0dXJuIHJlZmVyZW5jZXNbdGFyZ2V0XSAmJiBwcmVwYXJlSW5zdGFuY2Uoc2luZ2xldG9uLCByZWZlcmVuY2VzW3RhcmdldF0pO1xuICAgIH0gLy8gdGFyZ2V0IGlzIGEgY2hpbGQgdGlwcHkgaW5zdGFuY2VcblxuXG4gICAgaWYgKGluZGl2aWR1YWxJbnN0YW5jZXMuaW5jbHVkZXModGFyZ2V0KSkge1xuICAgICAgdmFyIHJlZiA9IHRhcmdldC5yZWZlcmVuY2U7XG4gICAgICByZXR1cm4gcHJlcGFyZUluc3RhbmNlKHNpbmdsZXRvbiwgcmVmKTtcbiAgICB9IC8vIHRhcmdldCBpcyBhIFJlZmVyZW5jZUVsZW1lbnRcblxuXG4gICAgaWYgKHJlZmVyZW5jZXMuaW5jbHVkZXModGFyZ2V0KSkge1xuICAgICAgcmV0dXJuIHByZXBhcmVJbnN0YW5jZShzaW5nbGV0b24sIHRhcmdldCk7XG4gICAgfVxuICB9O1xuXG4gIHNpbmdsZXRvbi5zaG93TmV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZmlyc3QgPSByZWZlcmVuY2VzWzBdO1xuXG4gICAgaWYgKCFjdXJyZW50VGFyZ2V0KSB7XG4gICAgICByZXR1cm4gc2luZ2xldG9uLnNob3coMCk7XG4gICAgfVxuXG4gICAgdmFyIGluZGV4ID0gcmVmZXJlbmNlcy5pbmRleE9mKGN1cnJlbnRUYXJnZXQpO1xuICAgIHNpbmdsZXRvbi5zaG93KHJlZmVyZW5jZXNbaW5kZXggKyAxXSB8fCBmaXJzdCk7XG4gIH07XG5cbiAgc2luZ2xldG9uLnNob3dQcmV2aW91cyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbGFzdCA9IHJlZmVyZW5jZXNbcmVmZXJlbmNlcy5sZW5ndGggLSAxXTtcblxuICAgIGlmICghY3VycmVudFRhcmdldCkge1xuICAgICAgcmV0dXJuIHNpbmdsZXRvbi5zaG93KGxhc3QpO1xuICAgIH1cblxuICAgIHZhciBpbmRleCA9IHJlZmVyZW5jZXMuaW5kZXhPZihjdXJyZW50VGFyZ2V0KTtcbiAgICB2YXIgdGFyZ2V0ID0gcmVmZXJlbmNlc1tpbmRleCAtIDFdIHx8IGxhc3Q7XG4gICAgc2luZ2xldG9uLnNob3codGFyZ2V0KTtcbiAgfTtcblxuICB2YXIgb3JpZ2luYWxTZXRQcm9wcyA9IHNpbmdsZXRvbi5zZXRQcm9wcztcblxuICBzaW5nbGV0b24uc2V0UHJvcHMgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICBvdmVycmlkZXMgPSBwcm9wcy5vdmVycmlkZXMgfHwgb3ZlcnJpZGVzO1xuICAgIG9yaWdpbmFsU2V0UHJvcHMocHJvcHMpO1xuICB9O1xuXG4gIHNpbmdsZXRvbi5zZXRJbnN0YW5jZXMgPSBmdW5jdGlvbiAobmV4dEluc3RhbmNlcykge1xuICAgIGVuYWJsZUluc3RhbmNlcyh0cnVlKTtcbiAgICBpbnRlcmNlcHRTZXRQcm9wc0NsZWFudXBzLmZvckVhY2goZnVuY3Rpb24gKGZuKSB7XG4gICAgICByZXR1cm4gZm4oKTtcbiAgICB9KTtcbiAgICBpbmRpdmlkdWFsSW5zdGFuY2VzID0gbmV4dEluc3RhbmNlcztcbiAgICBlbmFibGVJbnN0YW5jZXMoZmFsc2UpO1xuICAgIHNldFJlZmVyZW5jZXMoKTtcbiAgICBpbnRlcmNlcHRTZXRQcm9wcyhzaW5nbGV0b24pO1xuICAgIHNpbmdsZXRvbi5zZXRQcm9wcyh7XG4gICAgICB0cmlnZ2VyVGFyZ2V0OiByZWZlcmVuY2VzXG4gICAgfSk7XG4gIH07XG5cbiAgaW50ZXJjZXB0U2V0UHJvcHNDbGVhbnVwcyA9IGludGVyY2VwdFNldFByb3BzKHNpbmdsZXRvbik7XG4gIHJldHVybiBzaW5nbGV0b247XG59O1xuXG52YXIgQlVCQkxJTkdfRVZFTlRTX01BUCA9IHtcbiAgbW91c2VvdmVyOiAnbW91c2VlbnRlcicsXG4gIGZvY3VzaW46ICdmb2N1cycsXG4gIGNsaWNrOiAnY2xpY2snXG59O1xuLyoqXG4gKiBDcmVhdGVzIGEgZGVsZWdhdGUgaW5zdGFuY2UgdGhhdCBjb250cm9scyB0aGUgY3JlYXRpb24gb2YgdGlwcHkgaW5zdGFuY2VzXG4gKiBmb3IgY2hpbGQgZWxlbWVudHMgKGB0YXJnZXRgIENTUyBzZWxlY3RvcikuXG4gKi9cblxuZnVuY3Rpb24gZGVsZWdhdGUodGFyZ2V0cywgcHJvcHMpIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIGVycm9yV2hlbighKHByb3BzICYmIHByb3BzLnRhcmdldCksIFsnWW91IG11c3Qgc3BlY2l0eSBhIGB0YXJnZXRgIHByb3AgaW5kaWNhdGluZyBhIENTUyBzZWxlY3RvciBzdHJpbmcgbWF0Y2hpbmcnLCAndGhlIHRhcmdldCBlbGVtZW50cyB0aGF0IHNob3VsZCByZWNlaXZlIGEgdGlwcHkuJ10uam9pbignICcpKTtcbiAgfVxuXG4gIHZhciBsaXN0ZW5lcnMgPSBbXTtcbiAgdmFyIGNoaWxkVGlwcHlJbnN0YW5jZXMgPSBbXTtcbiAgdmFyIGRpc2FibGVkID0gZmFsc2U7XG4gIHZhciB0YXJnZXQgPSBwcm9wcy50YXJnZXQ7XG4gIHZhciBuYXRpdmVQcm9wcyA9IHJlbW92ZVByb3BlcnRpZXMocHJvcHMsIFsndGFyZ2V0J10pO1xuICB2YXIgcGFyZW50UHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCBuYXRpdmVQcm9wcywge1xuICAgIHRyaWdnZXI6ICdtYW51YWwnLFxuICAgIHRvdWNoOiBmYWxzZVxuICB9KTtcbiAgdmFyIGNoaWxkUHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCBuYXRpdmVQcm9wcywge1xuICAgIHNob3dPbkNyZWF0ZTogdHJ1ZVxuICB9KTtcbiAgdmFyIHJldHVyblZhbHVlID0gdGlwcHkodGFyZ2V0cywgcGFyZW50UHJvcHMpO1xuICB2YXIgbm9ybWFsaXplZFJldHVyblZhbHVlID0gbm9ybWFsaXplVG9BcnJheShyZXR1cm5WYWx1ZSk7XG5cbiAgZnVuY3Rpb24gb25UcmlnZ2VyKGV2ZW50KSB7XG4gICAgaWYgKCFldmVudC50YXJnZXQgfHwgZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgdGFyZ2V0Tm9kZSA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KHRhcmdldCk7XG5cbiAgICBpZiAoIXRhcmdldE5vZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIEdldCByZWxldmFudCB0cmlnZ2VyIHdpdGggZmFsbGJhY2tzOlxuICAgIC8vIDEuIENoZWNrIGBkYXRhLXRpcHB5LXRyaWdnZXJgIGF0dHJpYnV0ZSBvbiB0YXJnZXQgbm9kZVxuICAgIC8vIDIuIEZhbGxiYWNrIHRvIGB0cmlnZ2VyYCBwYXNzZWQgdG8gYGRlbGVnYXRlKClgXG4gICAgLy8gMy4gRmFsbGJhY2sgdG8gYGRlZmF1bHRQcm9wcy50cmlnZ2VyYFxuXG5cbiAgICB2YXIgdHJpZ2dlciA9IHRhcmdldE5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLXRpcHB5LXRyaWdnZXInKSB8fCBwcm9wcy50cmlnZ2VyIHx8IGRlZmF1bHRQcm9wcy50cmlnZ2VyOyAvLyBAdHMtaWdub3JlXG5cbiAgICBpZiAodGFyZ2V0Tm9kZS5fdGlwcHkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ3RvdWNoc3RhcnQnICYmIHR5cGVvZiBjaGlsZFByb3BzLnRvdWNoID09PSAnYm9vbGVhbicpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQudHlwZSAhPT0gJ3RvdWNoc3RhcnQnICYmIHRyaWdnZXIuaW5kZXhPZihCVUJCTElOR19FVkVOVFNfTUFQW2V2ZW50LnR5cGVdKSA8IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgaW5zdGFuY2UgPSB0aXBweSh0YXJnZXROb2RlLCBjaGlsZFByb3BzKTtcblxuICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgY2hpbGRUaXBweUluc3RhbmNlcyA9IGNoaWxkVGlwcHlJbnN0YW5jZXMuY29uY2F0KGluc3RhbmNlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvbihub2RlLCBldmVudFR5cGUsIGhhbmRsZXIsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0gZmFsc2U7XG4gICAgfVxuXG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgbGlzdGVuZXJzLnB1c2goe1xuICAgICAgbm9kZTogbm9kZSxcbiAgICAgIGV2ZW50VHlwZTogZXZlbnRUeXBlLFxuICAgICAgaGFuZGxlcjogaGFuZGxlcixcbiAgICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJzKGluc3RhbmNlKSB7XG4gICAgdmFyIHJlZmVyZW5jZSA9IGluc3RhbmNlLnJlZmVyZW5jZTtcbiAgICBvbihyZWZlcmVuY2UsICd0b3VjaHN0YXJ0Jywgb25UcmlnZ2VyLCBUT1VDSF9PUFRJT05TKTtcbiAgICBvbihyZWZlcmVuY2UsICdtb3VzZW92ZXInLCBvblRyaWdnZXIpO1xuICAgIG9uKHJlZmVyZW5jZSwgJ2ZvY3VzaW4nLCBvblRyaWdnZXIpO1xuICAgIG9uKHJlZmVyZW5jZSwgJ2NsaWNrJywgb25UcmlnZ2VyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCkge1xuICAgIGxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICB2YXIgbm9kZSA9IF9yZWYubm9kZSxcbiAgICAgICAgICBldmVudFR5cGUgPSBfcmVmLmV2ZW50VHlwZSxcbiAgICAgICAgICBoYW5kbGVyID0gX3JlZi5oYW5kbGVyLFxuICAgICAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnM7XG4gICAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgICB9KTtcbiAgICBsaXN0ZW5lcnMgPSBbXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFwcGx5TXV0YXRpb25zKGluc3RhbmNlKSB7XG4gICAgdmFyIG9yaWdpbmFsRGVzdHJveSA9IGluc3RhbmNlLmRlc3Ryb3k7XG4gICAgdmFyIG9yaWdpbmFsRW5hYmxlID0gaW5zdGFuY2UuZW5hYmxlO1xuICAgIHZhciBvcmlnaW5hbERpc2FibGUgPSBpbnN0YW5jZS5kaXNhYmxlO1xuXG4gICAgaW5zdGFuY2UuZGVzdHJveSA9IGZ1bmN0aW9uIChzaG91bGREZXN0cm95Q2hpbGRJbnN0YW5jZXMpIHtcbiAgICAgIGlmIChzaG91bGREZXN0cm95Q2hpbGRJbnN0YW5jZXMgPT09IHZvaWQgMCkge1xuICAgICAgICBzaG91bGREZXN0cm95Q2hpbGRJbnN0YW5jZXMgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2hvdWxkRGVzdHJveUNoaWxkSW5zdGFuY2VzKSB7XG4gICAgICAgIGNoaWxkVGlwcHlJbnN0YW5jZXMuZm9yRWFjaChmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICAgICAgICBpbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBjaGlsZFRpcHB5SW5zdGFuY2VzID0gW107XG4gICAgICByZW1vdmVFdmVudExpc3RlbmVycygpO1xuICAgICAgb3JpZ2luYWxEZXN0cm95KCk7XG4gICAgfTtcblxuICAgIGluc3RhbmNlLmVuYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIG9yaWdpbmFsRW5hYmxlKCk7XG4gICAgICBjaGlsZFRpcHB5SW5zdGFuY2VzLmZvckVhY2goZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZS5lbmFibGUoKTtcbiAgICAgIH0pO1xuICAgICAgZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9O1xuXG4gICAgaW5zdGFuY2UuZGlzYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIG9yaWdpbmFsRGlzYWJsZSgpO1xuICAgICAgY2hpbGRUaXBweUluc3RhbmNlcy5mb3JFYWNoKGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgICAgICByZXR1cm4gaW5zdGFuY2UuZGlzYWJsZSgpO1xuICAgICAgfSk7XG4gICAgICBkaXNhYmxlZCA9IHRydWU7XG4gICAgfTtcblxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKGluc3RhbmNlKTtcbiAgfVxuXG4gIG5vcm1hbGl6ZWRSZXR1cm5WYWx1ZS5mb3JFYWNoKGFwcGx5TXV0YXRpb25zKTtcbiAgcmV0dXJuIHJldHVyblZhbHVlO1xufVxuXG52YXIgYW5pbWF0ZUZpbGwgPSB7XG4gIG5hbWU6ICdhbmltYXRlRmlsbCcsXG4gIGRlZmF1bHRWYWx1ZTogZmFsc2UsXG4gIGZuOiBmdW5jdGlvbiBmbihpbnN0YW5jZSkge1xuICAgIHZhciBfaW5zdGFuY2UkcHJvcHMkcmVuZGU7XG5cbiAgICAvLyBAdHMtaWdub3JlXG4gICAgaWYgKCEoKF9pbnN0YW5jZSRwcm9wcyRyZW5kZSA9IGluc3RhbmNlLnByb3BzLnJlbmRlcikgPT0gbnVsbCA/IHZvaWQgMCA6IF9pbnN0YW5jZSRwcm9wcyRyZW5kZS4kJHRpcHB5KSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICBlcnJvcldoZW4oaW5zdGFuY2UucHJvcHMuYW5pbWF0ZUZpbGwsICdUaGUgYGFuaW1hdGVGaWxsYCBwbHVnaW4gcmVxdWlyZXMgdGhlIGRlZmF1bHQgcmVuZGVyIGZ1bmN0aW9uLicpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgdmFyIF9nZXRDaGlsZHJlbiA9IGdldENoaWxkcmVuKGluc3RhbmNlLnBvcHBlciksXG4gICAgICAgIGJveCA9IF9nZXRDaGlsZHJlbi5ib3gsXG4gICAgICAgIGNvbnRlbnQgPSBfZ2V0Q2hpbGRyZW4uY29udGVudDtcblxuICAgIHZhciBiYWNrZHJvcCA9IGluc3RhbmNlLnByb3BzLmFuaW1hdGVGaWxsID8gY3JlYXRlQmFja2Ryb3BFbGVtZW50KCkgOiBudWxsO1xuICAgIHJldHVybiB7XG4gICAgICBvbkNyZWF0ZTogZnVuY3Rpb24gb25DcmVhdGUoKSB7XG4gICAgICAgIGlmIChiYWNrZHJvcCkge1xuICAgICAgICAgIGJveC5pbnNlcnRCZWZvcmUoYmFja2Ryb3AsIGJveC5maXJzdEVsZW1lbnRDaGlsZCk7XG4gICAgICAgICAgYm94LnNldEF0dHJpYnV0ZSgnZGF0YS1hbmltYXRlZmlsbCcsICcnKTtcbiAgICAgICAgICBib3guc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgICAgICBpbnN0YW5jZS5zZXRQcm9wcyh7XG4gICAgICAgICAgICBhcnJvdzogZmFsc2UsXG4gICAgICAgICAgICBhbmltYXRpb246ICdzaGlmdC1hd2F5J1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25Nb3VudDogZnVuY3Rpb24gb25Nb3VudCgpIHtcbiAgICAgICAgaWYgKGJhY2tkcm9wKSB7XG4gICAgICAgICAgdmFyIHRyYW5zaXRpb25EdXJhdGlvbiA9IGJveC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb247XG4gICAgICAgICAgdmFyIGR1cmF0aW9uID0gTnVtYmVyKHRyYW5zaXRpb25EdXJhdGlvbi5yZXBsYWNlKCdtcycsICcnKSk7IC8vIFRoZSBjb250ZW50IHNob3VsZCBmYWRlIGluIGFmdGVyIHRoZSBiYWNrZHJvcCBoYXMgbW9zdGx5IGZpbGxlZCB0aGVcbiAgICAgICAgICAvLyB0b29sdGlwIGVsZW1lbnQuIGBjbGlwLXBhdGhgIGlzIHRoZSBvdGhlciBhbHRlcm5hdGl2ZSBidXQgaXMgbm90XG4gICAgICAgICAgLy8gd2VsbC1zdXBwb3J0ZWQgYW5kIGlzIGJ1Z2d5IG9uIHNvbWUgZGV2aWNlcy5cblxuICAgICAgICAgIGNvbnRlbnQuc3R5bGUudHJhbnNpdGlvbkRlbGF5ID0gTWF0aC5yb3VuZChkdXJhdGlvbiAvIDEwKSArIFwibXNcIjtcbiAgICAgICAgICBiYWNrZHJvcC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSB0cmFuc2l0aW9uRHVyYXRpb247XG4gICAgICAgICAgc2V0VmlzaWJpbGl0eVN0YXRlKFtiYWNrZHJvcF0sICd2aXNpYmxlJyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvblNob3c6IGZ1bmN0aW9uIG9uU2hvdygpIHtcbiAgICAgICAgaWYgKGJhY2tkcm9wKSB7XG4gICAgICAgICAgYmFja2Ryb3Auc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gJzBtcyc7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvbkhpZGU6IGZ1bmN0aW9uIG9uSGlkZSgpIHtcbiAgICAgICAgaWYgKGJhY2tkcm9wKSB7XG4gICAgICAgICAgc2V0VmlzaWJpbGl0eVN0YXRlKFtiYWNrZHJvcF0sICdoaWRkZW4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhY2tkcm9wRWxlbWVudCgpIHtcbiAgdmFyIGJhY2tkcm9wID0gZGl2KCk7XG4gIGJhY2tkcm9wLmNsYXNzTmFtZSA9IEJBQ0tEUk9QX0NMQVNTO1xuICBzZXRWaXNpYmlsaXR5U3RhdGUoW2JhY2tkcm9wXSwgJ2hpZGRlbicpO1xuICByZXR1cm4gYmFja2Ryb3A7XG59XG5cbnZhciBtb3VzZUNvb3JkcyA9IHtcbiAgY2xpZW50WDogMCxcbiAgY2xpZW50WTogMFxufTtcbnZhciBhY3RpdmVJbnN0YW5jZXMgPSBbXTtcblxuZnVuY3Rpb24gc3RvcmVNb3VzZUNvb3JkcyhfcmVmKSB7XG4gIHZhciBjbGllbnRYID0gX3JlZi5jbGllbnRYLFxuICAgICAgY2xpZW50WSA9IF9yZWYuY2xpZW50WTtcbiAgbW91c2VDb29yZHMgPSB7XG4gICAgY2xpZW50WDogY2xpZW50WCxcbiAgICBjbGllbnRZOiBjbGllbnRZXG4gIH07XG59XG5cbmZ1bmN0aW9uIGFkZE1vdXNlQ29vcmRzTGlzdGVuZXIoZG9jKSB7XG4gIGRvYy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBzdG9yZU1vdXNlQ29vcmRzKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlTW91c2VDb29yZHNMaXN0ZW5lcihkb2MpIHtcbiAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHN0b3JlTW91c2VDb29yZHMpO1xufVxuXG52YXIgZm9sbG93Q3Vyc29yID0ge1xuICBuYW1lOiAnZm9sbG93Q3Vyc29yJyxcbiAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcbiAgZm46IGZ1bmN0aW9uIGZuKGluc3RhbmNlKSB7XG4gICAgdmFyIHJlZmVyZW5jZSA9IGluc3RhbmNlLnJlZmVyZW5jZTtcbiAgICB2YXIgZG9jID0gZ2V0T3duZXJEb2N1bWVudChpbnN0YW5jZS5wcm9wcy50cmlnZ2VyVGFyZ2V0IHx8IHJlZmVyZW5jZSk7XG4gICAgdmFyIGlzSW50ZXJuYWxVcGRhdGUgPSBmYWxzZTtcbiAgICB2YXIgd2FzRm9jdXNFdmVudCA9IGZhbHNlO1xuICAgIHZhciBpc1VubW91bnRlZCA9IHRydWU7XG4gICAgdmFyIHByZXZQcm9wcyA9IGluc3RhbmNlLnByb3BzO1xuXG4gICAgZnVuY3Rpb24gZ2V0SXNJbml0aWFsQmVoYXZpb3IoKSB7XG4gICAgICByZXR1cm4gaW5zdGFuY2UucHJvcHMuZm9sbG93Q3Vyc29yID09PSAnaW5pdGlhbCcgJiYgaW5zdGFuY2Uuc3RhdGUuaXNWaXNpYmxlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZExpc3RlbmVyKCkge1xuICAgICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcigpIHtcbiAgICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdW5zZXRHZXRSZWZlcmVuY2VDbGllbnRSZWN0KCkge1xuICAgICAgaXNJbnRlcm5hbFVwZGF0ZSA9IHRydWU7XG4gICAgICBpbnN0YW5jZS5zZXRQcm9wcyh7XG4gICAgICAgIGdldFJlZmVyZW5jZUNsaWVudFJlY3Q6IG51bGxcbiAgICAgIH0pO1xuICAgICAgaXNJbnRlcm5hbFVwZGF0ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uTW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgICAvLyBJZiB0aGUgaW5zdGFuY2UgaXMgaW50ZXJhY3RpdmUsIGF2b2lkIHVwZGF0aW5nIHRoZSBwb3NpdGlvbiB1bmxlc3MgaXQnc1xuICAgICAgLy8gb3ZlciB0aGUgcmVmZXJlbmNlIGVsZW1lbnRcbiAgICAgIHZhciBpc0N1cnNvck92ZXJSZWZlcmVuY2UgPSBldmVudC50YXJnZXQgPyByZWZlcmVuY2UuY29udGFpbnMoZXZlbnQudGFyZ2V0KSA6IHRydWU7XG4gICAgICB2YXIgZm9sbG93Q3Vyc29yID0gaW5zdGFuY2UucHJvcHMuZm9sbG93Q3Vyc29yO1xuICAgICAgdmFyIGNsaWVudFggPSBldmVudC5jbGllbnRYLFxuICAgICAgICAgIGNsaWVudFkgPSBldmVudC5jbGllbnRZO1xuICAgICAgdmFyIHJlY3QgPSByZWZlcmVuY2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICB2YXIgcmVsYXRpdmVYID0gY2xpZW50WCAtIHJlY3QubGVmdDtcbiAgICAgIHZhciByZWxhdGl2ZVkgPSBjbGllbnRZIC0gcmVjdC50b3A7XG5cbiAgICAgIGlmIChpc0N1cnNvck92ZXJSZWZlcmVuY2UgfHwgIWluc3RhbmNlLnByb3BzLmludGVyYWN0aXZlKSB7XG4gICAgICAgIGluc3RhbmNlLnNldFByb3BzKHtcbiAgICAgICAgICBnZXRSZWZlcmVuY2VDbGllbnRSZWN0OiBmdW5jdGlvbiBnZXRSZWZlcmVuY2VDbGllbnRSZWN0KCkge1xuICAgICAgICAgICAgdmFyIHJlY3QgPSByZWZlcmVuY2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICB2YXIgeCA9IGNsaWVudFg7XG4gICAgICAgICAgICB2YXIgeSA9IGNsaWVudFk7XG5cbiAgICAgICAgICAgIGlmIChmb2xsb3dDdXJzb3IgPT09ICdpbml0aWFsJykge1xuICAgICAgICAgICAgICB4ID0gcmVjdC5sZWZ0ICsgcmVsYXRpdmVYO1xuICAgICAgICAgICAgICB5ID0gcmVjdC50b3AgKyByZWxhdGl2ZVk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciB0b3AgPSBmb2xsb3dDdXJzb3IgPT09ICdob3Jpem9udGFsJyA/IHJlY3QudG9wIDogeTtcbiAgICAgICAgICAgIHZhciByaWdodCA9IGZvbGxvd0N1cnNvciA9PT0gJ3ZlcnRpY2FsJyA/IHJlY3QucmlnaHQgOiB4O1xuICAgICAgICAgICAgdmFyIGJvdHRvbSA9IGZvbGxvd0N1cnNvciA9PT0gJ2hvcml6b250YWwnID8gcmVjdC5ib3R0b20gOiB5O1xuICAgICAgICAgICAgdmFyIGxlZnQgPSBmb2xsb3dDdXJzb3IgPT09ICd2ZXJ0aWNhbCcgPyByZWN0LmxlZnQgOiB4O1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgd2lkdGg6IHJpZ2h0IC0gbGVmdCxcbiAgICAgICAgICAgICAgaGVpZ2h0OiBib3R0b20gLSB0b3AsXG4gICAgICAgICAgICAgIHRvcDogdG9wLFxuICAgICAgICAgICAgICByaWdodDogcmlnaHQsXG4gICAgICAgICAgICAgIGJvdHRvbTogYm90dG9tLFxuICAgICAgICAgICAgICBsZWZ0OiBsZWZ0XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlKCkge1xuICAgICAgaWYgKGluc3RhbmNlLnByb3BzLmZvbGxvd0N1cnNvcikge1xuICAgICAgICBhY3RpdmVJbnN0YW5jZXMucHVzaCh7XG4gICAgICAgICAgaW5zdGFuY2U6IGluc3RhbmNlLFxuICAgICAgICAgIGRvYzogZG9jXG4gICAgICAgIH0pO1xuICAgICAgICBhZGRNb3VzZUNvb3Jkc0xpc3RlbmVyKGRvYyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgIGFjdGl2ZUluc3RhbmNlcyA9IGFjdGl2ZUluc3RhbmNlcy5maWx0ZXIoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIGRhdGEuaW5zdGFuY2UgIT09IGluc3RhbmNlO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChhY3RpdmVJbnN0YW5jZXMuZmlsdGVyKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHJldHVybiBkYXRhLmRvYyA9PT0gZG9jO1xuICAgICAgfSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJlbW92ZU1vdXNlQ29vcmRzTGlzdGVuZXIoZG9jKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgb25DcmVhdGU6IGNyZWF0ZSxcbiAgICAgIG9uRGVzdHJveTogZGVzdHJveSxcbiAgICAgIG9uQmVmb3JlVXBkYXRlOiBmdW5jdGlvbiBvbkJlZm9yZVVwZGF0ZSgpIHtcbiAgICAgICAgcHJldlByb3BzID0gaW5zdGFuY2UucHJvcHM7XG4gICAgICB9LFxuICAgICAgb25BZnRlclVwZGF0ZTogZnVuY3Rpb24gb25BZnRlclVwZGF0ZShfLCBfcmVmMikge1xuICAgICAgICB2YXIgZm9sbG93Q3Vyc29yID0gX3JlZjIuZm9sbG93Q3Vyc29yO1xuXG4gICAgICAgIGlmIChpc0ludGVybmFsVXBkYXRlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZvbGxvd0N1cnNvciAhPT0gdW5kZWZpbmVkICYmIHByZXZQcm9wcy5mb2xsb3dDdXJzb3IgIT09IGZvbGxvd0N1cnNvcikge1xuICAgICAgICAgIGRlc3Ryb3koKTtcblxuICAgICAgICAgIGlmIChmb2xsb3dDdXJzb3IpIHtcbiAgICAgICAgICAgIGNyZWF0ZSgpO1xuXG4gICAgICAgICAgICBpZiAoaW5zdGFuY2Uuc3RhdGUuaXNNb3VudGVkICYmICF3YXNGb2N1c0V2ZW50ICYmICFnZXRJc0luaXRpYWxCZWhhdmlvcigpKSB7XG4gICAgICAgICAgICAgIGFkZExpc3RlbmVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlbW92ZUxpc3RlbmVyKCk7XG4gICAgICAgICAgICB1bnNldEdldFJlZmVyZW5jZUNsaWVudFJlY3QoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvbk1vdW50OiBmdW5jdGlvbiBvbk1vdW50KCkge1xuICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMuZm9sbG93Q3Vyc29yICYmICF3YXNGb2N1c0V2ZW50KSB7XG4gICAgICAgICAgaWYgKGlzVW5tb3VudGVkKSB7XG4gICAgICAgICAgICBvbk1vdXNlTW92ZShtb3VzZUNvb3Jkcyk7XG4gICAgICAgICAgICBpc1VubW91bnRlZCA9IGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghZ2V0SXNJbml0aWFsQmVoYXZpb3IoKSkge1xuICAgICAgICAgICAgYWRkTGlzdGVuZXIoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvblRyaWdnZXI6IGZ1bmN0aW9uIG9uVHJpZ2dlcihfLCBldmVudCkge1xuICAgICAgICBpZiAoaXNNb3VzZUV2ZW50KGV2ZW50KSkge1xuICAgICAgICAgIG1vdXNlQ29vcmRzID0ge1xuICAgICAgICAgICAgY2xpZW50WDogZXZlbnQuY2xpZW50WCxcbiAgICAgICAgICAgIGNsaWVudFk6IGV2ZW50LmNsaWVudFlcbiAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgd2FzRm9jdXNFdmVudCA9IGV2ZW50LnR5cGUgPT09ICdmb2N1cyc7XG4gICAgICB9LFxuICAgICAgb25IaWRkZW46IGZ1bmN0aW9uIG9uSGlkZGVuKCkge1xuICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMuZm9sbG93Q3Vyc29yKSB7XG4gICAgICAgICAgdW5zZXRHZXRSZWZlcmVuY2VDbGllbnRSZWN0KCk7XG4gICAgICAgICAgcmVtb3ZlTGlzdGVuZXIoKTtcbiAgICAgICAgICBpc1VubW91bnRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG59O1xuXG5mdW5jdGlvbiBnZXRQcm9wcyhwcm9wcywgbW9kaWZpZXIpIHtcbiAgdmFyIF9wcm9wcyRwb3BwZXJPcHRpb25zO1xuXG4gIHJldHVybiB7XG4gICAgcG9wcGVyT3B0aW9uczogT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMucG9wcGVyT3B0aW9ucywge1xuICAgICAgbW9kaWZpZXJzOiBbXS5jb25jYXQoKCgoX3Byb3BzJHBvcHBlck9wdGlvbnMgPSBwcm9wcy5wb3BwZXJPcHRpb25zKSA9PSBudWxsID8gdm9pZCAwIDogX3Byb3BzJHBvcHBlck9wdGlvbnMubW9kaWZpZXJzKSB8fCBbXSkuZmlsdGVyKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgIHZhciBuYW1lID0gX3JlZi5uYW1lO1xuICAgICAgICByZXR1cm4gbmFtZSAhPT0gbW9kaWZpZXIubmFtZTtcbiAgICAgIH0pLCBbbW9kaWZpZXJdKVxuICAgIH0pXG4gIH07XG59XG5cbnZhciBpbmxpbmVQb3NpdGlvbmluZyA9IHtcbiAgbmFtZTogJ2lubGluZVBvc2l0aW9uaW5nJyxcbiAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcbiAgZm46IGZ1bmN0aW9uIGZuKGluc3RhbmNlKSB7XG4gICAgdmFyIHJlZmVyZW5jZSA9IGluc3RhbmNlLnJlZmVyZW5jZTtcblxuICAgIGZ1bmN0aW9uIGlzRW5hYmxlZCgpIHtcbiAgICAgIHJldHVybiAhIWluc3RhbmNlLnByb3BzLmlubGluZVBvc2l0aW9uaW5nO1xuICAgIH1cblxuICAgIHZhciBwbGFjZW1lbnQ7XG4gICAgdmFyIGN1cnNvclJlY3RJbmRleCA9IC0xO1xuICAgIHZhciBpc0ludGVybmFsVXBkYXRlID0gZmFsc2U7XG4gICAgdmFyIG1vZGlmaWVyID0ge1xuICAgICAgbmFtZTogJ3RpcHB5SW5saW5lUG9zaXRpb25pbmcnLFxuICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgIHBoYXNlOiAnYWZ0ZXJXcml0ZScsXG4gICAgICBmbjogZnVuY3Rpb24gZm4oX3JlZjIpIHtcbiAgICAgICAgdmFyIHN0YXRlID0gX3JlZjIuc3RhdGU7XG5cbiAgICAgICAgaWYgKGlzRW5hYmxlZCgpKSB7XG4gICAgICAgICAgaWYgKHBsYWNlbWVudCAhPT0gc3RhdGUucGxhY2VtZW50KSB7XG4gICAgICAgICAgICBpbnN0YW5jZS5zZXRQcm9wcyh7XG4gICAgICAgICAgICAgIGdldFJlZmVyZW5jZUNsaWVudFJlY3Q6IGZ1bmN0aW9uIGdldFJlZmVyZW5jZUNsaWVudFJlY3QoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9nZXRSZWZlcmVuY2VDbGllbnRSZWN0KHN0YXRlLnBsYWNlbWVudCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHBsYWNlbWVudCA9IHN0YXRlLnBsYWNlbWVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBfZ2V0UmVmZXJlbmNlQ2xpZW50UmVjdChwbGFjZW1lbnQpIHtcbiAgICAgIHJldHVybiBnZXRJbmxpbmVCb3VuZGluZ0NsaWVudFJlY3QoZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpLCByZWZlcmVuY2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksIGFycmF5RnJvbShyZWZlcmVuY2UuZ2V0Q2xpZW50UmVjdHMoKSksIGN1cnNvclJlY3RJbmRleCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0SW50ZXJuYWxQcm9wcyhwYXJ0aWFsUHJvcHMpIHtcbiAgICAgIGlzSW50ZXJuYWxVcGRhdGUgPSB0cnVlO1xuICAgICAgaW5zdGFuY2Uuc2V0UHJvcHMocGFydGlhbFByb3BzKTtcbiAgICAgIGlzSW50ZXJuYWxVcGRhdGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRNb2RpZmllcigpIHtcbiAgICAgIGlmICghaXNJbnRlcm5hbFVwZGF0ZSkge1xuICAgICAgICBzZXRJbnRlcm5hbFByb3BzKGdldFByb3BzKGluc3RhbmNlLnByb3BzLCBtb2RpZmllcikpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBvbkNyZWF0ZTogYWRkTW9kaWZpZXIsXG4gICAgICBvbkFmdGVyVXBkYXRlOiBhZGRNb2RpZmllcixcbiAgICAgIG9uVHJpZ2dlcjogZnVuY3Rpb24gb25UcmlnZ2VyKF8sIGV2ZW50KSB7XG4gICAgICAgIGlmIChpc01vdXNlRXZlbnQoZXZlbnQpKSB7XG4gICAgICAgICAgdmFyIHJlY3RzID0gYXJyYXlGcm9tKGluc3RhbmNlLnJlZmVyZW5jZS5nZXRDbGllbnRSZWN0cygpKTtcbiAgICAgICAgICB2YXIgY3Vyc29yUmVjdCA9IHJlY3RzLmZpbmQoZnVuY3Rpb24gKHJlY3QpIHtcbiAgICAgICAgICAgIHJldHVybiByZWN0LmxlZnQgLSAyIDw9IGV2ZW50LmNsaWVudFggJiYgcmVjdC5yaWdodCArIDIgPj0gZXZlbnQuY2xpZW50WCAmJiByZWN0LnRvcCAtIDIgPD0gZXZlbnQuY2xpZW50WSAmJiByZWN0LmJvdHRvbSArIDIgPj0gZXZlbnQuY2xpZW50WTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjdXJzb3JSZWN0SW5kZXggPSByZWN0cy5pbmRleE9mKGN1cnNvclJlY3QpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25VbnRyaWdnZXI6IGZ1bmN0aW9uIG9uVW50cmlnZ2VyKCkge1xuICAgICAgICBjdXJzb3JSZWN0SW5kZXggPSAtMTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG59O1xuZnVuY3Rpb24gZ2V0SW5saW5lQm91bmRpbmdDbGllbnRSZWN0KGN1cnJlbnRCYXNlUGxhY2VtZW50LCBib3VuZGluZ1JlY3QsIGNsaWVudFJlY3RzLCBjdXJzb3JSZWN0SW5kZXgpIHtcbiAgLy8gTm90IGFuIGlubGluZSBlbGVtZW50LCBvciBwbGFjZW1lbnQgaXMgbm90IHlldCBrbm93blxuICBpZiAoY2xpZW50UmVjdHMubGVuZ3RoIDwgMiB8fCBjdXJyZW50QmFzZVBsYWNlbWVudCA9PT0gbnVsbCkge1xuICAgIHJldHVybiBib3VuZGluZ1JlY3Q7XG4gIH0gLy8gVGhlcmUgYXJlIHR3byByZWN0cyBhbmQgdGhleSBhcmUgZGlzam9pbmVkXG5cblxuICBpZiAoY2xpZW50UmVjdHMubGVuZ3RoID09PSAyICYmIGN1cnNvclJlY3RJbmRleCA+PSAwICYmIGNsaWVudFJlY3RzWzBdLmxlZnQgPiBjbGllbnRSZWN0c1sxXS5yaWdodCkge1xuICAgIHJldHVybiBjbGllbnRSZWN0c1tjdXJzb3JSZWN0SW5kZXhdIHx8IGJvdW5kaW5nUmVjdDtcbiAgfVxuXG4gIHN3aXRjaCAoY3VycmVudEJhc2VQbGFjZW1lbnQpIHtcbiAgICBjYXNlICd0b3AnOlxuICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICB7XG4gICAgICAgIHZhciBmaXJzdFJlY3QgPSBjbGllbnRSZWN0c1swXTtcbiAgICAgICAgdmFyIGxhc3RSZWN0ID0gY2xpZW50UmVjdHNbY2xpZW50UmVjdHMubGVuZ3RoIC0gMV07XG4gICAgICAgIHZhciBpc1RvcCA9IGN1cnJlbnRCYXNlUGxhY2VtZW50ID09PSAndG9wJztcbiAgICAgICAgdmFyIHRvcCA9IGZpcnN0UmVjdC50b3A7XG4gICAgICAgIHZhciBib3R0b20gPSBsYXN0UmVjdC5ib3R0b207XG4gICAgICAgIHZhciBsZWZ0ID0gaXNUb3AgPyBmaXJzdFJlY3QubGVmdCA6IGxhc3RSZWN0LmxlZnQ7XG4gICAgICAgIHZhciByaWdodCA9IGlzVG9wID8gZmlyc3RSZWN0LnJpZ2h0IDogbGFzdFJlY3QucmlnaHQ7XG4gICAgICAgIHZhciB3aWR0aCA9IHJpZ2h0IC0gbGVmdDtcbiAgICAgICAgdmFyIGhlaWdodCA9IGJvdHRvbSAtIHRvcDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0b3A6IHRvcCxcbiAgICAgICAgICBib3R0b206IGJvdHRvbSxcbiAgICAgICAgICBsZWZ0OiBsZWZ0LFxuICAgICAgICAgIHJpZ2h0OiByaWdodCxcbiAgICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiBoZWlnaHRcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgIGNhc2UgJ2xlZnQnOlxuICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgIHtcbiAgICAgICAgdmFyIG1pbkxlZnQgPSBNYXRoLm1pbi5hcHBseShNYXRoLCBjbGllbnRSZWN0cy5tYXAoZnVuY3Rpb24gKHJlY3RzKSB7XG4gICAgICAgICAgcmV0dXJuIHJlY3RzLmxlZnQ7XG4gICAgICAgIH0pKTtcbiAgICAgICAgdmFyIG1heFJpZ2h0ID0gTWF0aC5tYXguYXBwbHkoTWF0aCwgY2xpZW50UmVjdHMubWFwKGZ1bmN0aW9uIChyZWN0cykge1xuICAgICAgICAgIHJldHVybiByZWN0cy5yaWdodDtcbiAgICAgICAgfSkpO1xuICAgICAgICB2YXIgbWVhc3VyZVJlY3RzID0gY2xpZW50UmVjdHMuZmlsdGVyKGZ1bmN0aW9uIChyZWN0KSB7XG4gICAgICAgICAgcmV0dXJuIGN1cnJlbnRCYXNlUGxhY2VtZW50ID09PSAnbGVmdCcgPyByZWN0LmxlZnQgPT09IG1pbkxlZnQgOiByZWN0LnJpZ2h0ID09PSBtYXhSaWdodDtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBfdG9wID0gbWVhc3VyZVJlY3RzWzBdLnRvcDtcbiAgICAgICAgdmFyIF9ib3R0b20gPSBtZWFzdXJlUmVjdHNbbWVhc3VyZVJlY3RzLmxlbmd0aCAtIDFdLmJvdHRvbTtcbiAgICAgICAgdmFyIF9sZWZ0ID0gbWluTGVmdDtcbiAgICAgICAgdmFyIF9yaWdodCA9IG1heFJpZ2h0O1xuXG4gICAgICAgIHZhciBfd2lkdGggPSBfcmlnaHQgLSBfbGVmdDtcblxuICAgICAgICB2YXIgX2hlaWdodCA9IF9ib3R0b20gLSBfdG9wO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdG9wOiBfdG9wLFxuICAgICAgICAgIGJvdHRvbTogX2JvdHRvbSxcbiAgICAgICAgICBsZWZ0OiBfbGVmdCxcbiAgICAgICAgICByaWdodDogX3JpZ2h0LFxuICAgICAgICAgIHdpZHRoOiBfd2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiBfaGVpZ2h0XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICBkZWZhdWx0OlxuICAgICAge1xuICAgICAgICByZXR1cm4gYm91bmRpbmdSZWN0O1xuICAgICAgfVxuICB9XG59XG5cbnZhciBzdGlja3kgPSB7XG4gIG5hbWU6ICdzdGlja3knLFxuICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxuICBmbjogZnVuY3Rpb24gZm4oaW5zdGFuY2UpIHtcbiAgICB2YXIgcmVmZXJlbmNlID0gaW5zdGFuY2UucmVmZXJlbmNlLFxuICAgICAgICBwb3BwZXIgPSBpbnN0YW5jZS5wb3BwZXI7XG5cbiAgICBmdW5jdGlvbiBnZXRSZWZlcmVuY2UoKSB7XG4gICAgICByZXR1cm4gaW5zdGFuY2UucG9wcGVySW5zdGFuY2UgPyBpbnN0YW5jZS5wb3BwZXJJbnN0YW5jZS5zdGF0ZS5lbGVtZW50cy5yZWZlcmVuY2UgOiByZWZlcmVuY2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvdWxkQ2hlY2sodmFsdWUpIHtcbiAgICAgIHJldHVybiBpbnN0YW5jZS5wcm9wcy5zdGlja3kgPT09IHRydWUgfHwgaW5zdGFuY2UucHJvcHMuc3RpY2t5ID09PSB2YWx1ZTtcbiAgICB9XG5cbiAgICB2YXIgcHJldlJlZlJlY3QgPSBudWxsO1xuICAgIHZhciBwcmV2UG9wUmVjdCA9IG51bGw7XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVQb3NpdGlvbigpIHtcbiAgICAgIHZhciBjdXJyZW50UmVmUmVjdCA9IHNob3VsZENoZWNrKCdyZWZlcmVuY2UnKSA/IGdldFJlZmVyZW5jZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIDogbnVsbDtcbiAgICAgIHZhciBjdXJyZW50UG9wUmVjdCA9IHNob3VsZENoZWNrKCdwb3BwZXInKSA/IHBvcHBlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSA6IG51bGw7XG5cbiAgICAgIGlmIChjdXJyZW50UmVmUmVjdCAmJiBhcmVSZWN0c0RpZmZlcmVudChwcmV2UmVmUmVjdCwgY3VycmVudFJlZlJlY3QpIHx8IGN1cnJlbnRQb3BSZWN0ICYmIGFyZVJlY3RzRGlmZmVyZW50KHByZXZQb3BSZWN0LCBjdXJyZW50UG9wUmVjdCkpIHtcbiAgICAgICAgaWYgKGluc3RhbmNlLnBvcHBlckluc3RhbmNlKSB7XG4gICAgICAgICAgaW5zdGFuY2UucG9wcGVySW5zdGFuY2UudXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcHJldlJlZlJlY3QgPSBjdXJyZW50UmVmUmVjdDtcbiAgICAgIHByZXZQb3BSZWN0ID0gY3VycmVudFBvcFJlY3Q7XG5cbiAgICAgIGlmIChpbnN0YW5jZS5zdGF0ZS5pc01vdW50ZWQpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZVBvc2l0aW9uKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgb25Nb3VudDogZnVuY3Rpb24gb25Nb3VudCgpIHtcbiAgICAgICAgaWYgKGluc3RhbmNlLnByb3BzLnN0aWNreSkge1xuICAgICAgICAgIHVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG59O1xuXG5mdW5jdGlvbiBhcmVSZWN0c0RpZmZlcmVudChyZWN0QSwgcmVjdEIpIHtcbiAgaWYgKHJlY3RBICYmIHJlY3RCKSB7XG4gICAgcmV0dXJuIHJlY3RBLnRvcCAhPT0gcmVjdEIudG9wIHx8IHJlY3RBLnJpZ2h0ICE9PSByZWN0Qi5yaWdodCB8fCByZWN0QS5ib3R0b20gIT09IHJlY3RCLmJvdHRvbSB8fCByZWN0QS5sZWZ0ICE9PSByZWN0Qi5sZWZ0O1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbnRpcHB5LnNldERlZmF1bHRQcm9wcyh7XG4gIHJlbmRlcjogcmVuZGVyXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgdGlwcHk7XG5leHBvcnQgeyBhbmltYXRlRmlsbCwgY3JlYXRlU2luZ2xldG9uLCBkZWxlZ2F0ZSwgZm9sbG93Q3Vyc29yLCBoaWRlQWxsLCBpbmxpbmVQb3NpdGlvbmluZywgUk9VTkRfQVJST1cgYXMgcm91bmRBcnJvdywgc3RpY2t5IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD10aXBweS5lc20uanMubWFwXG4iLCIvLyBmdW5jdGlvbiBhY2NvcmRpb24oKSB7XHJcbi8vIFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlcnZpY2VzX19pdGVtOm50aC1jaGlsZChuICsgNSknKS5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QudG9nZ2xlKCdfaGlkZGVuJykpO1xyXG4vLyB9XHJcbi8vIGFjY29yZGlvbigpO1xyXG5cclxuLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZXJ2aWNlc19fYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbi8vIFx0YWNjb3JkaW9uKCk7XHJcbi8vIFx0YWRkQ2xhc3Nzc1xyXG4vLyB9KTtcclxuXHJcblxyXG5mdW5jdGlvbiBzaG93VGV4dCgpIHtcclxuXHRpZiAodGhpcy5jbGFzc0xpc3QuY29udGFpbnMoJ19hY3RpdmUnKSkge1xyXG5cdFx0dGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdfYWN0aXZlJylcclxuXHRcdHRoaXMudGV4dENvbnRlbnQgPSAn0JXRidC1ICsnXHJcblx0fSBlbHNlIHtcclxuXHRcdHRoaXMuY2xhc3NMaXN0LmFkZCgnX2FjdGl2ZScpXHJcblx0XHR0aGlzLnRleHRDb250ZW50ID0gJ9Ch0LLQtdGA0L3Rg9GC0YwnXHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VydmljZXNfX2J0bicpO1xyXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuX2hpZGUnKTtcclxuXHJcbmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRjb250YWluZXIuZm9yRWFjaChpdGVtID0+IHtcclxuXHRcdGlmIChpdGVtLmNsYXNzTGlzdC5jb250YWlucygnc2hvdycpKSB7XHJcblx0XHRcdGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xyXG5cdFx0XHRpdGVtLnN0eWxlLm1heEhlaWdodCA9IDA7XHJcblx0XHRcdGl0ZW0uc3R5bGUubWFyZ2luQm90dG9tID0gMDtcclxuXHRcdFx0aXRlbS5zdHlsZS5vcGFjaXR5ID0gMDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGl0ZW0uY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xyXG5cdFx0XHRpdGVtLnN0eWxlLm1heEhlaWdodCA9IGl0ZW0uc2Nyb2xsSGVpZ2h0ICsgJ3B4JztcclxuXHRcdFx0aXRlbS5zdHlsZS5tYXJnaW5Cb3R0b20gPSA1MCArICdweCc7XHJcblx0XHRcdGl0ZW0uc3R5bGUub3BhY2l0eSA9IDE7XHJcblx0XHR9XHJcblx0fSlcclxuXHRzaG93VGV4dC5jYWxsKGJ1dHRvbik7XHJcbn0pO1xyXG5cclxuIiwiZnVuY3Rpb24gc2Nyb2xsVG9CbG9jaygpIHtcclxuXHRjb25zdCBhbmNob3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYVtocmVmKj1cIiNcIl0nKTtcclxuXHRhbmNob3JzLmZvckVhY2goYW5jaG9yID0+IHtcclxuXHRcdGFuY2hvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0Y29uc3QgdXJsID0gYW5jaG9yLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xyXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHVybCkuc2Nyb2xsSW50b1ZpZXcoe1xyXG5cdFx0XHRcdGJlaGF2aW9yOiAnc21vb3RoJ1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pXHJcblx0fSlcclxufVxyXG5zY3JvbGxUb0Jsb2NrKCk7IiwibGV0IG1lbnVCdXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19idXJnZXInKTtcclxubGV0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19tb2ItbWVudScpO1xyXG5sZXQgaGVhZGVyTW9iID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpO1xyXG5sZXQgaGVhZGVyTG9nb0Rlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19sb2dvLWRlc2MnKTtcclxubGV0IGhlYWRlckxvZ29Nb2IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19sb2dvLW1vYicpO1xyXG5tZW51QnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG5cdG1lbnVCdXJnZXIuY2xhc3NMaXN0LnRvZ2dsZSgnX2FjdGl2ZScpO1xyXG5cdG1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnX2FjdGl2ZScpO1xyXG5cdGhlYWRlck1vYi5jbGFzc0xpc3QudG9nZ2xlKCdfYWN0aXZlJyk7XHJcblx0aGVhZGVyTG9nb0Rlc2MuY2xhc3NMaXN0LnRvZ2dsZSgnX2FjdGl2ZScpO1xyXG5cdGhlYWRlckxvZ29Nb2IuY2xhc3NMaXN0LnRvZ2dsZSgnX2FjdGl2ZScpO1xyXG59KSIsIlxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XHJcblx0TWFycXVpei5pbml0KHtcclxuXHRcdGhvc3Q6ICcvL3F1aXoubWFycXVpei5ydScsXHJcblx0XHRpZDogJzVkYzQyYTBhMDg0NDhiMDA0NDA1Y2ZiMCcsXHJcblx0XHRhdXRvT3BlbjogNDAsIGF1dG9PcGVuRnJlcTogJ29uY2UnLFxyXG5cdFx0b3Blbk9uRXhpdDogdHJ1ZVxyXG5cdH0pO1xyXG59KSIsImRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9dGVsXScpLmZvckVhY2goKHRlbCkgPT4ge1xyXG5cdGNvbnN0IG1hc2sgPSBJTWFzayh0ZWwsIHtcclxuXHRcdG1hc2s6ICcrezd9ICgwMDApIDAwMC0wMC0wMCdcclxuXHR9KTtcclxufSk7XHJcbiIsImZ1bmN0aW9uIG1vZGFsKCkge1xyXG5cdGNvbnN0IGJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWwtYnV0dG9uLWpzJyksXHJcblx0XHRjbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbF9fY2xvc2UnKSxcclxuXHRcdG92ZXJmbG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsX19vdmVyZmxvdycpO1xyXG5cclxuXHRmdW5jdGlvbiBjaGVja01vZGFsKCkge1xyXG5cdFx0Y29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLmRhdGFzZXQubW9kYWx9YCk7XHJcblx0XHRzaG93TW9kYWwobW9kYWwpO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gc2hvd01vZGFsKHBhcmVudCkge1xyXG5cdFx0Y29uc3QgY29udGVudCA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2NvbnRlbnQnKSxcclxuXHRcdFx0b3ZlcmZsb3cyID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fb3ZlcmZsb3cnKTtcclxuXHRcdHBhcmVudC5jbGFzc0xpc3QuYWRkKCdfYWN0aXZlJyk7XHJcblx0XHRvdmVyZmxvdzIuY2xhc3NMaXN0LmFkZCgnX2FjdGl2ZScpO1xyXG5cdFx0YW5pbWF0ZUNTUyhvdmVyZmxvdzIsICdhbmltYXRlRmFkZUluJyk7XHJcblx0XHRhbmltYXRlQ1NTKGNvbnRlbnQsICdhbmltYXRlVG9wJyk7XHJcblx0XHRhZGRDbGFzc0JvZHkoKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XHJcblx0XHRjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwuX2FjdGl2ZScpLFxyXG5cdFx0XHRtb2RhbEFjdGl2ZUNvbnRlbnQgPSBwYXJlbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX19jb250ZW50JyksXHJcblx0XHRcdG1vZGFsQWN0aXZlT3ZlcmZsb3cgPSBwYXJlbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX19vdmVyZmxvdycpO1xyXG5cdFx0YW5pbWF0ZUNTUyhtb2RhbEFjdGl2ZUNvbnRlbnQsICdhbmltYXRlVXAnKTtcclxuXHRcdGFuaW1hdGVDU1MobW9kYWxBY3RpdmVPdmVyZmxvdywgJ2FuaW1hdGVGYWRlT3V0Jyk7XHJcblx0XHRtb2RhbEFjdGl2ZUNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgKCkgPT4ge1xyXG5cdFx0XHRwYXJlbnQuY2xhc3NMaXN0LnJlbW92ZSgnX2FjdGl2ZScpO1xyXG5cdFx0XHRtb2RhbEFjdGl2ZU92ZXJmbG93LmNsYXNzTGlzdC5yZW1vdmUoJ19hY3RpdmUnKTtcclxuXHRcdH0sIHsgb25jZTogdHJ1ZSB9KVxyXG5cdFx0YWRkQ2xhc3NCb2R5KCk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBhZGRDbGFzc0JvZHkoKSB7XHJcblx0XHQoZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSA/IGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykgOiBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcblx0fVxyXG5cclxuXHRidG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hlY2tNb2RhbCkpO1xyXG5cdGNsb3NlLmZvckVhY2goaXRlbSA9PiBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNb2RhbCkpO1xyXG5cdG92ZXJmbG93LmZvckVhY2goaXRlbSA9PiBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNb2RhbCkpO1xyXG59XHJcbm1vZGFsKCk7XHJcblxyXG5cclxuZnVuY3Rpb24gYW5pbWF0ZUNTUyhlbGVtZW50LCBhbmltYXRpb24pIHtcclxuXHRjb25zdCBhbmltYXRpb25OYW1lID0gYW5pbWF0aW9uO1xyXG5cdGNvbnN0IG5vZGUgPSAoZWxlbWVudC5ub2RlVHlwZSA9PT0gMSkgPyBlbGVtZW50IDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtZW50KTtcclxuXHJcblx0bm9kZS5jbGFzc0xpc3QuYWRkKC4uLmFuaW1hdGlvbk5hbWUuc3BsaXQoJyAnKSk7XHJcblxyXG5cdGZ1bmN0aW9uIGhhbmRsZUFuaW1hdGlvbkVuZCgpIHtcclxuXHRcdG5vZGUuY2xhc3NMaXN0LnJlbW92ZSguLi5hbmltYXRpb25OYW1lLnNwbGl0KCcgJykpO1xyXG5cdH1cclxuXHJcblx0bm9kZS5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBoYW5kbGVBbmltYXRpb25FbmQsIHsgb25jZTogdHJ1ZSB9KTtcclxufSIsImNvbnN0IGZlZWRiYWNrID0gbmV3IFN3aXBlcignLmZlZWRiYWNrX19zbGlkZXInLCB7XHJcblx0c2xpZGVzUGVyVmlldzogJ2F1dG8nLFxyXG5cdHNwYWNlQmV0d2VlbjogMzAsXHJcblx0c3BlZWQ6IDEwMDAsXHJcblxyXG5cdG5hdmlnYXRpb246IHtcclxuXHRcdHByZXZFbDogJy5zd2lwZXItcHJldicsXHJcblx0XHRuZXh0RWw6ICcuc3dpcGVyLW5leHQnLFxyXG5cdH0sXHJcblx0cGFnaW5hdGlvbjoge1xyXG5cdFx0ZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG5cdH0sXHJcblx0YnJlYWtwb2ludHM6IHtcclxuXHRcdDA6IHtcclxuXHRcdFx0Y2VudGVyZWRTbGlkZXM6IHRydWUsXHJcblx0XHRcdGFsbG93VG91Y2hNb3ZlOiB0cnVlLFxyXG5cdFx0fSxcclxuXHRcdDc2ODoge1xyXG5cdFx0XHRjZW50ZXJlZFNsaWRlczogZmFsc2UsXHJcblx0XHRcdGFsbG93VG91Y2hNb3ZlOiBmYWxzZSxcclxuXHRcdH0sXHJcblx0fSxcclxufSk7XHJcblxyXG5jb25zdCBleGFtcGxlc1RvcE9uZSA9IG5ldyBTd2lwZXIoJy5leGFtcGxlc19fc2xpZGVyLXRvcC1vbmUnLCB7XHJcblx0c3BhY2VCZXR3ZWVuOiAzMCxcclxuXHRzcGVlZDogMTAwMCxcclxuXHRsb29wOiB0cnVlLFxyXG5cdGxvb3BlZFNsaWRlczogNSxcclxuXHRwYWdpbmF0aW9uOiB7XHJcblx0XHRlbDogJy5leGFtcGxlc19fcHJvZ3Jlc3NiYXItb25lJyxcclxuXHRcdHR5cGU6ICdwcm9ncmVzc2JhcicsXHJcblx0fSxcclxufSk7XHJcbmNvbnN0IGV4YW1wbGVzQm90T25lID0gbmV3IFN3aXBlcignLmV4YW1wbGVzX19zbGlkZXItYm90LW9uZScsIHtcclxuXHRzbGlkZXNQZXJWaWV3OiAzLFxyXG5cdHNwYWNlQmV0d2VlbjogMTAsXHJcblx0c3BlZWQ6IDEwMDAsXHJcblx0bG9vcDogdHJ1ZSxcclxuXHRsb29wZWRTbGlkZXM6IDUsXHJcblx0d2F0Y2hTbGlkZXNWaXNpYmlsaXR5OiB0cnVlLFxyXG5cdHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXHJcblx0YWxsb3dUb3VjaE1vdmU6IGZhbHNlLFxyXG5cclxufSk7XHJcblxyXG5leGFtcGxlc1RvcE9uZS5jb250cm9sbGVyLmNvbnRyb2wgPSBleGFtcGxlc0JvdE9uZTtcclxuZXhhbXBsZXNCb3RPbmUuY29udHJvbGxlci5jb250cm9sID0gZXhhbXBsZXNUb3BPbmU7XHJcblxyXG5jb25zdCBleGFtcGxlc1RvcFR3byA9IG5ldyBTd2lwZXIoJy5leGFtcGxlc19fc2xpZGVyLXRvcC10d28nLCB7XHJcblx0c2xpZGVzUGVyVmlldzogMSxcclxuXHRzcGFjZUJldHdlZW46IDMwLFxyXG5cdHNwZWVkOiAxMDAwLFxyXG5cdGxvb3A6IHRydWUsXHJcblx0bG9vcGVkU2xpZGVzOiA1LFxyXG5cdHBhZ2luYXRpb246IHtcclxuXHRcdGVsOiAnLmV4YW1wbGVzX19wcm9ncmVzc2Jhci10d28nLFxyXG5cdFx0dHlwZTogJ3Byb2dyZXNzYmFyJyxcclxuXHR9LFxyXG59KTtcclxuY29uc3QgZXhhbXBsZXNCb3RUd28gPSBuZXcgU3dpcGVyKCcuZXhhbXBsZXNfX3NsaWRlci1ib3QtdHdvJywge1xyXG5cdHNsaWRlc1BlclZpZXc6IDMsXHJcblx0c3BhY2VCZXR3ZWVuOiAxMCxcclxuXHRzcGVlZDogMTAwMCxcclxuXHRsb29wOiB0cnVlLFxyXG5cclxuXHRsb29wZWRTbGlkZXM6IDUsXHJcblx0d2F0Y2hTbGlkZXNWaXNpYmlsaXR5OiB0cnVlLFxyXG5cdHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXHJcblx0YWxsb3dUb3VjaE1vdmU6IGZhbHNlLFxyXG59KTtcclxuXHJcbmV4YW1wbGVzVG9wVHdvLmNvbnRyb2xsZXIuY29udHJvbCA9IGV4YW1wbGVzQm90VHdvO1xyXG5leGFtcGxlc0JvdFR3by5jb250cm9sbGVyLmNvbnRyb2wgPSBleGFtcGxlc1RvcFR3bztcclxuXHJcbmNvbnN0IGV4YW1wbGVzVG9wVGhyZWUgPSBuZXcgU3dpcGVyKCcuZXhhbXBsZXNfX3NsaWRlci10b3AtdGhyZWUnLCB7XHJcblx0c2xpZGVzUGVyVmlldzogMSxcclxuXHRzcGFjZUJldHdlZW46IDMwLFxyXG5cdHNwZWVkOiAxMDAwLFxyXG5cdGxvb3A6IHRydWUsXHJcblx0bG9vcGVkU2xpZGVzOiA1LFxyXG5cdHBhZ2luYXRpb246IHtcclxuXHRcdGVsOiAnLmV4YW1wbGVzX19wcm9ncmVzc2Jhci10aHJlZScsXHJcblx0XHR0eXBlOiAncHJvZ3Jlc3NiYXInLFxyXG5cdH0sXHJcbn0pO1xyXG5jb25zdCBleGFtcGxlc0JvdFRocmVlID0gbmV3IFN3aXBlcignLmV4YW1wbGVzX19zbGlkZXItYm90LXRocmVlJywge1xyXG5cdHNsaWRlc1BlclZpZXc6IDMsXHJcblx0c3BhY2VCZXR3ZWVuOiAxMCxcclxuXHRzcGVlZDogMTAwMCxcclxuXHRsb29wOiB0cnVlLFxyXG5cclxuXHRsb29wZWRTbGlkZXM6IDUsXHJcblx0d2F0Y2hTbGlkZXNWaXNpYmlsaXR5OiB0cnVlLFxyXG5cdHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXHJcblx0YWxsb3dUb3VjaE1vdmU6IGZhbHNlLFxyXG59KTtcclxuXHJcbmV4YW1wbGVzVG9wVGhyZWUuY29udHJvbGxlci5jb250cm9sID0gZXhhbXBsZXNCb3RUaHJlZTtcclxuZXhhbXBsZXNCb3RUaHJlZS5jb250cm9sbGVyLmNvbnRyb2wgPSBleGFtcGxlc1RvcFRocmVlO1xyXG5cclxuY29uc3QgZXhhbXBsZXNUb3BGb3VyID0gbmV3IFN3aXBlcignLmV4YW1wbGVzX19zbGlkZXItdG9wLWZvdXInLCB7XHJcblx0c2xpZGVzUGVyVmlldzogMSxcclxuXHRzcGFjZUJldHdlZW46IDMwLFxyXG5cdHNwZWVkOiAxMDAwLFxyXG5cdGxvb3A6IHRydWUsXHJcblx0bG9vcGVkU2xpZGVzOiA1LFxyXG5cdHBhZ2luYXRpb246IHtcclxuXHRcdGVsOiAnLmV4YW1wbGVzX19wcm9ncmVzc2Jhci1mb3VyJyxcclxuXHRcdHR5cGU6ICdwcm9ncmVzc2JhcicsXHJcblx0fSxcclxufSk7XHJcbmNvbnN0IGV4YW1wbGVzQm90Rm91ciA9IG5ldyBTd2lwZXIoJy5leGFtcGxlc19fc2xpZGVyLWJvdC1mb3VyJywge1xyXG5cdHNsaWRlc1BlclZpZXc6IDMsXHJcblx0c3BhY2VCZXR3ZWVuOiAxMCxcclxuXHRzcGVlZDogMTAwMCxcclxuXHRsb29wOiB0cnVlLFxyXG5cclxuXHRsb29wZWRTbGlkZXM6IDUsXHJcblx0d2F0Y2hTbGlkZXNWaXNpYmlsaXR5OiB0cnVlLFxyXG5cdHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXHJcblx0YWxsb3dUb3VjaE1vdmU6IGZhbHNlLFxyXG59KTtcclxuXHJcbmV4YW1wbGVzVG9wRm91ci5jb250cm9sbGVyLmNvbnRyb2wgPSBleGFtcGxlc0JvdEZvdXI7XHJcbmV4YW1wbGVzQm90Rm91ci5jb250cm9sbGVyLmNvbnRyb2wgPSBleGFtcGxlc1RvcEZvdXI7XHJcblxyXG5jb25zdCBleGFtcGxlc1RvcEZpdmUgPSBuZXcgU3dpcGVyKCcuZXhhbXBsZXNfX3NsaWRlci10b3AtZml2ZScsIHtcclxuXHRzbGlkZXNQZXJWaWV3OiAxLFxyXG5cdHNwYWNlQmV0d2VlbjogMzAsXHJcblx0c3BlZWQ6IDEwMDAsXHJcblx0bG9vcDogdHJ1ZSxcclxuXHRsb29wZWRTbGlkZXM6IDUsXHJcblx0cGFnaW5hdGlvbjoge1xyXG5cdFx0ZWw6ICcuZXhhbXBsZXNfX3Byb2dyZXNzYmFyLWZpdmUnLFxyXG5cdFx0dHlwZTogJ3Byb2dyZXNzYmFyJyxcclxuXHR9LFxyXG59KTtcclxuY29uc3QgZXhhbXBsZXNCb3RGaXZlID0gbmV3IFN3aXBlcignLmV4YW1wbGVzX19zbGlkZXItYm90LWZpdmUnLCB7XHJcblx0c2xpZGVzUGVyVmlldzogMyxcclxuXHRzcGFjZUJldHdlZW46IDEwLFxyXG5cdHNwZWVkOiAxMDAwLFxyXG5cdGxvb3A6IHRydWUsXHJcblxyXG5cdGxvb3BlZFNsaWRlczogNSxcclxuXHR3YXRjaFNsaWRlc1Zpc2liaWxpdHk6IHRydWUsXHJcblx0d2F0Y2hTbGlkZXNQcm9ncmVzczogdHJ1ZSxcclxuXHRhbGxvd1RvdWNoTW92ZTogZmFsc2UsXHJcbn0pO1xyXG5cclxuZXhhbXBsZXNUb3BGaXZlLmNvbnRyb2xsZXIuY29udHJvbCA9IGV4YW1wbGVzQm90Rml2ZTtcclxuZXhhbXBsZXNCb3RGaXZlLmNvbnRyb2xsZXIuY29udHJvbCA9IGV4YW1wbGVzVG9wRml2ZTsiLCJ2YXIganNUcmlnZ2VycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3N0X190YWJzLWl0ZW0nKSxcclxuXHRqc0NvbnRlbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvc3RfX2NvbnRlbnQnKTtcclxuXHJcbmpzVHJpZ2dlcnMuZm9yRWFjaChmdW5jdGlvbiAodHJpZ2dlcikge1xyXG5cdHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcblx0XHR2YXIgaWQgPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS10YWInKSxcclxuXHRcdFx0Y29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3N0X19jb250ZW50W2RhdGEtdGFiPVwiJyArIGlkICsgJ1wiXScpLFxyXG5cdFx0XHRhY3RpdmVUcmlnZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvc3RfX3RhYnMtaXRlbS5fYWN0aXZlJyksXHJcblx0XHRcdGFjdGl2ZUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29zdF9fY29udGVudC5fYWN0aXZlJyk7XHJcblxyXG5cdFx0YWN0aXZlVHJpZ2dlci5jbGFzc0xpc3QucmVtb3ZlKCdfYWN0aXZlJyk7IC8vIDFcclxuXHRcdHRyaWdnZXIuY2xhc3NMaXN0LmFkZCgnX2FjdGl2ZScpOyAvLyAyXHJcblxyXG5cdFx0YWN0aXZlQ29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdfYWN0aXZlJyk7IC8vIDNcclxuXHRcdGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnX2FjdGl2ZScpOyAvLyA0XHJcblx0fSk7XHJcbn0pO1xyXG4iLCJpbXBvcnQgdGlwcHksIHsgZm9sbG93Q3Vyc29yIH0gZnJvbSAndGlwcHkuanMnO1xyXG5cclxuXHJcbmNvbnN0IHNlcnZpY2VzVG9vbHRpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXJ2aWNlc19fdG9vbHRpcCcpO1xyXG5zZXJ2aWNlc1Rvb2x0aXAuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblxyXG50aXBweSgnLl90b29sdGlwLXNlcnZpY2VzJywge1xyXG5cdGNvbnRlbnQ6IHNlcnZpY2VzVG9vbHRpcCxcclxuXHR0cmlnZ2VyOiBcImNsaWNrXCIsXHJcblx0bWF4V2lkdGg6IDI1MCxcclxufSk7XHJcblxyXG5jb25zdCBmZWVkYmFja1Rvb2x0aXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmVlZGJhY2tfX3Rvb2x0aXAnKTtcclxuZmVlZGJhY2tUb29sdGlwLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cclxudGlwcHkoJy5fdG9vbHRpcC1mZWVkYmFjaycsIHtcclxuXHRjb250ZW50OiBmZWVkYmFja1Rvb2x0aXAsXHJcblx0dHJpZ2dlcjogXCJjbGlja1wiLFxyXG5cdG1heFdpZHRoOiA0MDAsXHJcblx0aW50ZXJhY3RpdmU6IHRydWUsXHJcblx0YXJyb3c6IGZhbHNlLFxyXG59KTtcclxuXHJcbmNvbnN0IGZlZWRiYWNrVG9vbHRpcFR3byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWVkYmFja19fdG9vbHRpcC10d28nKTtcclxuZmVlZGJhY2tUb29sdGlwVHdvLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cclxudGlwcHkoJy5fdG9vbHRpcC1mZWVkYmFjay10d28nLCB7XHJcblx0Y29udGVudDogZmVlZGJhY2tUb29sdGlwVHdvLFxyXG5cdHRyaWdnZXI6IFwiY2xpY2tcIixcclxuXHRtYXhXaWR0aDogNDAwLFxyXG5cdGludGVyYWN0aXZlOiB0cnVlLFxyXG5cdGFycm93OiBmYWxzZSxcclxufSk7XHJcblxyXG5cclxuIiwiLy8gaW1wb3J0ICdjb3JlLWpzL3N0YWJsZSc7XHJcbi8vIGltcG9ydCAncmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lJztcclxuLy8gaW1wb3J0ICdjb3JlLWpzL2ZlYXR1cmVzL3N5bWJvbC8nO1xyXG4vLyBpbXBvcnQgJ2NvcmUtanMvZmVhdHVyZXMvcHJvbWlzZS8nO1xyXG4vLyBpbXBvcnQgJ2NvcmUtanMvZmVhdHVyZXMvb2JqZWN0L2Fzc2lnbic7XHJcbi8vIGltcG9ydCAnY29yZS1qcy9mZWF0dXJlcy9hcnJheS9mcm9tJztcclxuLy8gaW1wb3J0ICdjb3JlLWpzL2ZlYXR1cmVzL2FycmF5L2ZpbmQnO1xyXG4vLyBpbXBvcnQgJ2NvcmUtanMvZmVhdHVyZXMvbnVtYmVyL2lzLW5hbic7XHJcbi8vIGltcG9ydCAnY29yZS1qcy9mZWF0dXJlcy9kb20tY29sbGVjdGlvbnMvZm9yLWVhY2gnO1xyXG4vLyBpbXBvcnQgJ2NvcmUtanMvZmVhdHVyZXMvaXMtaXRlcmFibGUnO1xyXG5cclxuLy8gaW1wb3J0ICd3aGF0d2ctZmV0Y2gnO1xyXG4vLyBpbXBvcnQgJy4vbGliL3BvbHlmaWxscy5qcyc7XHJcblxyXG5pbXBvcnQgdGlwcHkgZnJvbSAndGlwcHkuanMnO1xyXG5pbXBvcnQgSU1hc2sgZnJvbSAnaW1hc2snO1xyXG5cclxuLy8gaW1wb3J0IFJlbGxheCBmcm9tICdyZWxsYXgnO1xyXG4vLyBpbXBvcnQgJy4uLy4uL25vZGVfbW9kdWxlcy9mb2N1cy12aXNpYmxlL2Rpc3QvZm9jdXMtdmlzaWJsZS5qcyc7XHJcblxyXG5pbXBvcnQgb2JqZWN0Rml0SW1hZ2VzIGZyb20gJ29iamVjdC1maXQtaW1hZ2VzJztcclxuaW1wb3J0IHN2ZzRldmVyeWJvZHkgZnJvbSAnc3ZnNGV2ZXJ5Ym9keSc7XHJcblxyXG4vLyBpbXBvcnQgSW5wdXROdW1iZXIgZnJvbSAnLi9saWIvaW5wdXROdW1iZXInO1xyXG5cclxuLy8gaW1wb3J0ICcuL2NvbXBvbmVudHMvaGVhZGVyLmpzJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvYWNjb3JkaW9uLmpzJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvbW9kYWxzLmpzJztcclxuLy8gaW1wb3J0ICcuL2NvbXBvbmVudHMvdmlkZW8uanMnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9tYXNrLmpzJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvdGFicy5qcyc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL3NsaWRlcnMuanMnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy90aXBweS5qcyc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2FuY2hvcnMuanMnO1xyXG4vLyBpbXBvcnQgJy4vY29tcG9uZW50cy9mb3JtLmpzJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvYnVyZ2VyLmpzJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvbWFycXVpei5qcyc7XHJcbi8vIGltcG9ydCAnLi9jb21wb25lbnRzL2R5bmFtaWNBZGFwdC5qcyc7XHJcblxyXG5cclxuc3ZnNGV2ZXJ5Ym9keSgpO1xyXG5vYmplY3RGaXRJbWFnZXMoKTtcclxuXHJcbi8vIGNvbnN0IGlucHV0TnVtYmVyID0gbmV3IElucHV0TnVtYmVyKCcubnVtYmVyJyk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=