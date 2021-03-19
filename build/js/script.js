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

function scrollAnchors() {
  var anchors = document.querySelectorAll('a[href*="#"]');
  var menuBurger = document.querySelector('.header__burger');
  var menu = document.querySelector('.header__mob-menu');
  anchors.forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      var block = anchor.getAttribute('href');
      if (block == '#') return;

      if (menuBurger.classList.contains('_active')) {
        menuBurger.classList.remove('_active');
        menu.classList.remove('_active');
        document.body.classList.remove('_lock');
      }

      document.querySelector(block).scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    });
  });
}

scrollAnchors();

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
  document.body.classList.toggle('_lock');
});

/***/ }),

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var scrollPos = 200;
  var header = document.querySelector('.header');
  var headerLogoDesc = document.querySelector('.header__logo-desc');
  var headerLogoMob = document.querySelector('.header__logo-mob');
  var menuLink = document.querySelectorAll('.header__menu-item');
  var menuBurger = document.querySelector('.header__burger');

  if (document.body.scrollTop > scrollPos || document.documentElement.scrollTop > scrollPos) {
    header.classList.add('_fixed');
    headerLogoDesc.classList.add('_fixed');
    headerLogoMob.classList.add('_fixed');
    menuLink.forEach(function (item) {
      item.classList.add('_fixed');
    });
    menuBurger.classList.add('_fixed');
  } else {
    header.classList.remove('_fixed');
    headerLogoDesc.classList.remove('_fixed');
    headerLogoMob.classList.remove('_fixed');
    menuLink.forEach(function (item) {
      item.classList.remove('_fixed');
    });
    menuBurger.classList.remove('_fixed');
  }
}

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
  var btns = document.querySelectorAll('.modal__button-js'),
      close = document.querySelectorAll('.modal__close'),
      overflow = document.querySelectorAll('.modal__overflow');

  function checkModal() {
    var modal = document.querySelector("#".concat(this.dataset.modal));
    showModal(modal);
  }

  function showModal(parent) {
    var content = parent.querySelector('.modal__content'),
        overflow2 = parent.querySelector('.modal__overflow');
    addClassBody();
    parent.classList.add('_active');
    overflow2.classList.add('_active');
    animateCSS(overflow2, 'animateFadeIn');
    animateCSS(content, 'animateTop');
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
      addClassBody();
    }, {
      once: true
    });
  }

  function addClassBody() {
    if (document.querySelector('.modal._active')) return;
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
  },
  navigation: {
    prevEl: '.examples__prev-one',
    nextEl: '.examples__next-one'
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
  },
  navigation: {
    prevEl: '.examples__prev-two',
    nextEl: '.examples__next-two'
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
  },
  navigation: {
    prevEl: '.examples__prev-three',
    nextEl: '.examples__next-three'
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
  },
  navigation: {
    prevEl: '.examples__prev-four',
    nextEl: '.examples__next-four'
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
  },
  navigation: {
    prevEl: '.examples__prev-five',
    nextEl: '.examples__next-five'
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
/* harmony import */ var _components_header_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header.js */ "./components/header.js");
/* harmony import */ var _components_header_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_header_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_accordion_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/accordion.js */ "./components/accordion.js");
/* harmony import */ var _components_accordion_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_accordion_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_modals_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/modals.js */ "./components/modals.js");
/* harmony import */ var _components_modals_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_modals_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_mask_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/mask.js */ "./components/mask.js");
/* harmony import */ var _components_mask_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_mask_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_tabs_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/tabs.js */ "./components/tabs.js");
/* harmony import */ var _components_tabs_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_components_tabs_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_sliders_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/sliders.js */ "./components/sliders.js");
/* harmony import */ var _components_sliders_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_components_sliders_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_tippy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/tippy.js */ "./components/tippy.js");
/* harmony import */ var _components_anchors_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/anchors.js */ "./components/anchors.js");
/* harmony import */ var _components_anchors_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_components_anchors_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_burger_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/burger.js */ "./components/burger.js");
/* harmony import */ var _components_burger_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_components_burger_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_marquiz_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/marquiz.js */ "./components/marquiz.js");
/* harmony import */ var _components_marquiz_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_components_marquiz_js__WEBPACK_IMPORTED_MODULE_13__);
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



 // import './components/video.js';








svg4everybody__WEBPACK_IMPORTED_MODULE_3___default()();
object_fit_images__WEBPACK_IMPORTED_MODULE_2___default()(); // const inputNumber = new InputNumber('.number');

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL0M6L1dPUksvRlJPTlQvcHJvamVjdHMvUm9pYnVyby9pbnZldGEtdGVwbG8vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9jcmVhdGVQb3BwZXIuanMiLCJ3ZWJwYWNrOi8vL0M6L1dPUksvRlJPTlQvcHJvamVjdHMvUm9pYnVyby9pbnZldGEtdGVwbG8vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvY29udGFpbnMuanMiLCJ3ZWJwYWNrOi8vL0M6L1dPUksvRlJPTlQvcHJvamVjdHMvUm9pYnVyby9pbnZldGEtdGVwbG8vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmpzIiwid2VicGFjazovLy9DOi9XT1JLL0ZST05UL3Byb2plY3RzL1JvaWJ1cm8vaW52ZXRhLXRlcGxvL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldENsaXBwaW5nUmVjdC5qcyIsIndlYnBhY2s6Ly8vQzovV09SSy9GUk9OVC9wcm9qZWN0cy9Sb2lidXJvL2ludmV0YS10ZXBsby9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRDb21wb3NpdGVSZWN0LmpzIiwid2VicGFjazovLy9DOi9XT1JLL0ZST05UL3Byb2plY3RzL1JvaWJ1cm8vaW52ZXRhLXRlcGxvL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldENvbXB1dGVkU3R5bGUuanMiLCJ3ZWJwYWNrOi8vL0M6L1dPUksvRlJPTlQvcHJvamVjdHMvUm9pYnVyby9pbnZldGEtdGVwbG8vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0RG9jdW1lbnRFbGVtZW50LmpzIiwid2VicGFjazovLy9DOi9XT1JLL0ZST05UL3Byb2plY3RzL1JvaWJ1cm8vaW52ZXRhLXRlcGxvL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldERvY3VtZW50UmVjdC5qcyIsIndlYnBhY2s6Ly8vQzovV09SSy9GUk9OVC9wcm9qZWN0cy9Sb2lidXJvL2ludmV0YS10ZXBsby9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRIVE1MRWxlbWVudFNjcm9sbC5qcyIsIndlYnBhY2s6Ly8vQzovV09SSy9GUk9OVC9wcm9qZWN0cy9Sb2lidXJvL2ludmV0YS10ZXBsby9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRMYXlvdXRSZWN0LmpzIiwid2VicGFjazovLy9DOi9XT1JLL0ZST05UL3Byb2plY3RzL1JvaWJ1cm8vaW52ZXRhLXRlcGxvL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldE5vZGVOYW1lLmpzIiwid2VicGFjazovLy9DOi9XT1JLL0ZST05UL3Byb2plY3RzL1JvaWJ1cm8vaW52ZXRhLXRlcGxvL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldE5vZGVTY3JvbGwuanMiLCJ3ZWJwYWNrOi8vL0M6L1dPUksvRlJPTlQvcHJvamVjdHMvUm9pYnVyby9pbnZldGEtdGVwbG8vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0T2Zmc2V0UGFyZW50LmpzIiwid2VicGFjazovLy9DOi9XT1JLL0ZST05UL3Byb2plY3RzL1JvaWJ1cm8vaW52ZXRhLXRlcGxvL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldFBhcmVudE5vZGUuanMiLCJ3ZWJwYWNrOi8vL0M6L1dPUksvRlJPTlQvcHJvamVjdHMvUm9pYnVyby9pbnZldGEtdGVwbG8vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0U2Nyb2xsUGFyZW50LmpzIiwid2VicGFjazovLy9DOi9XT1JLL0ZST05UL3Byb2plY3RzL1JvaWJ1cm8vaW52ZXRhLXRlcGxvL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldFZpZXdwb3J0UmVjdC5qcyIsIndlYnBhY2s6Ly8vQzovV09SSy9GUk9OVC9wcm9qZWN0cy9Sb2lidXJvL2ludmV0YS10ZXBsby9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRXaW5kb3cuanMiLCJ3ZWJwYWNrOi8vL0M6L1dPUksvRlJPTlQvcHJvamVjdHMvUm9pYnVyby9pbnZldGEtdGVwbG8vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0V2luZG93U2Nyb2xsLmpzIiwid2VicGFjazovLy9DOi9XT1JLL0ZST05UL3Byb2plY3RzL1JvaWJ1cm8vaW52ZXRhLXRlcGxvL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldFdpbmRvd1Njcm9sbEJhclguanMiLCJ3ZWJwYWNrOi8vL0M6L1dPUksvRlJPTlQvcHJvamVjdHMvUm9pYnVyby9pbnZldGEtdGVwbG8vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvaW5zdGFuY2VPZi5qcyIsIndlYnBhY2s6Ly8vQzovV09SSy9GUk9OVC9wcm9qZWN0cy9Sb2lidXJvL2ludmV0YS10ZXBsby9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9pc1Njcm9sbFBhcmVudC5qcyIsIndlYnBhY2s6Ly8vQzovV09SSy9GUk9OVC9wcm9qZWN0cy9Sb2lidXJvL2ludmV0YS10ZXBsby9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9pc1RhYmxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vQzovV09SSy9GUk9OVC9wcm9qZWN0cy9Sb2lidXJvL2ludmV0YS10ZXBsby9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9saXN0U2Nyb2xsUGFyZW50cy5qcyIsIndlYnBhY2s6Ly8vQzovV09SSy9GUk9OVC9wcm9qZWN0cy9Sb2lidXJvL2ludmV0YS10ZXBsby9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2VudW1zLmpzIiwid2VicGFjazovLy9DOi9XT1JLL0ZST05UL3Byb2plY3RzL1JvaWJ1cm8vaW52ZXRhLXRlcGxvL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL0M6L1dPUksvRlJPTlQvcHJvamVjdHMvUm9pYnVyby9pbnZldGEtdGVwbG8vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvYXBwbHlTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vL0M6L1dPUksvRlJPTlQvcHJvamVjdHMvUm9pYnVyby9pbnZldGEtdGVwbG8vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvYXJyb3cuanMiLCJ3ZWJwYWNrOi8vL0M6L1dPUksvRlJPTlQvcHJvamVjdHMvUm9pYnVyby9pbnZldGEtdGVwbG8vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvY29tcHV0ZVN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vQzovV09SSy9GUk9OVC9wcm9qZWN0cy9Sb2lidXJvL2ludmV0YS10ZXBsby9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9ldmVudExpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly8vQzovV09SSy9GUk9OVC9wcm9qZWN0cy9Sb2lidXJvL2ludmV0YS10ZXBsby9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9mbGlwLmpzIiwid2VicGFjazovLy9DOi9XT1JLL0ZST05UL3Byb2plY3RzL1JvaWJ1cm8vaW52ZXRhLXRlcGxvL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL2hpZGUuanMiLCJ3ZWJwYWNrOi8vL0M6L1dPUksvRlJPTlQvcHJvamVjdHMvUm9pYnVyby9pbnZldGEtdGVwbG8vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL0M6L1dPUksvRlJPTlQvcHJvamVjdHMvUm9pYnVyby9pbnZldGEtdGVwbG8vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvb2Zmc2V0LmpzIiwid2VicGFjazovLy9DOi9XT1JLL0ZST05UL3Byb2plY3RzL1JvaWJ1cm8vaW52ZXRhLXRlcGxvL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL3BvcHBlck9mZnNldHMuanMiLCJ3ZWJwYWNrOi8vL0M6L1dPUksvRlJPTlQvcHJvamVjdHMvUm9pYnVyby9pbnZldGEtdGVwbG8vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvcHJldmVudE92ZXJmbG93LmpzIiwid2VicGFjazovLy9DOi9XT1JLL0ZST05UL3Byb2plY3RzL1JvaWJ1cm8vaW52ZXRhLXRlcGxvL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvcG9wcGVyLWxpdGUuanMiLCJ3ZWJwYWNrOi8vL0M6L1dPUksvRlJPTlQvcHJvamVjdHMvUm9pYnVyby9pbnZldGEtdGVwbG8vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9wb3BwZXIuanMiLCJ3ZWJwYWNrOi8vL0M6L1dPUksvRlJPTlQvcHJvamVjdHMvUm9pYnVyby9pbnZldGEtdGVwbG8vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9jb21wdXRlQXV0b1BsYWNlbWVudC5qcyIsIndlYnBhY2s6Ly8vQzovV09SSy9GUk9OVC9wcm9qZWN0cy9Sb2lidXJvL2ludmV0YS10ZXBsby9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2NvbXB1dGVPZmZzZXRzLmpzIiwid2VicGFjazovLy9DOi9XT1JLL0ZST05UL3Byb2plY3RzL1JvaWJ1cm8vaW52ZXRhLXRlcGxvL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZGVib3VuY2UuanMiLCJ3ZWJwYWNrOi8vL0M6L1dPUksvRlJPTlQvcHJvamVjdHMvUm9pYnVyby9pbnZldGEtdGVwbG8vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9kZXRlY3RPdmVyZmxvdy5qcyIsIndlYnBhY2s6Ly8vQzovV09SSy9GUk9OVC9wcm9qZWN0cy9Sb2lidXJvL2ludmV0YS10ZXBsby9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2V4cGFuZFRvSGFzaE1hcC5qcyIsIndlYnBhY2s6Ly8vQzovV09SSy9GUk9OVC9wcm9qZWN0cy9Sb2lidXJvL2ludmV0YS10ZXBsby9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2Zvcm1hdC5qcyIsIndlYnBhY2s6Ly8vQzovV09SSy9GUk9OVC9wcm9qZWN0cy9Sb2lidXJvL2ludmV0YS10ZXBsby9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldEFsdEF4aXMuanMiLCJ3ZWJwYWNrOi8vL0M6L1dPUksvRlJPTlQvcHJvamVjdHMvUm9pYnVyby9pbnZldGEtdGVwbG8vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9nZXRCYXNlUGxhY2VtZW50LmpzIiwid2VicGFjazovLy9DOi9XT1JLL0ZST05UL3Byb2plY3RzL1JvaWJ1cm8vaW52ZXRhLXRlcGxvL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0RnJlc2hTaWRlT2JqZWN0LmpzIiwid2VicGFjazovLy9DOi9XT1JLL0ZST05UL3Byb2plY3RzL1JvaWJ1cm8vaW52ZXRhLXRlcGxvL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50LmpzIiwid2VicGFjazovLy9DOi9XT1JLL0ZST05UL3Byb2plY3RzL1JvaWJ1cm8vaW52ZXRhLXRlcGxvL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0T3Bwb3NpdGVQbGFjZW1lbnQuanMiLCJ3ZWJwYWNrOi8vL0M6L1dPUksvRlJPTlQvcHJvamVjdHMvUm9pYnVyby9pbnZldGEtdGVwbG8vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9nZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudC5qcyIsIndlYnBhY2s6Ly8vQzovV09SSy9GUk9OVC9wcm9qZWN0cy9Sb2lidXJvL2ludmV0YS10ZXBsby9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldFZhcmlhdGlvbi5qcyIsIndlYnBhY2s6Ly8vQzovV09SSy9GUk9OVC9wcm9qZWN0cy9Sb2lidXJvL2ludmV0YS10ZXBsby9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL21hdGguanMiLCJ3ZWJwYWNrOi8vL0M6L1dPUksvRlJPTlQvcHJvamVjdHMvUm9pYnVyby9pbnZldGEtdGVwbG8vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9tZXJnZUJ5TmFtZS5qcyIsIndlYnBhY2s6Ly8vQzovV09SSy9GUk9OVC9wcm9qZWN0cy9Sb2lidXJvL2ludmV0YS10ZXBsby9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL21lcmdlUGFkZGluZ09iamVjdC5qcyIsIndlYnBhY2s6Ly8vQzovV09SSy9GUk9OVC9wcm9qZWN0cy9Sb2lidXJvL2ludmV0YS10ZXBsby9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL29yZGVyTW9kaWZpZXJzLmpzIiwid2VicGFjazovLy9DOi9XT1JLL0ZST05UL3Byb2plY3RzL1JvaWJ1cm8vaW52ZXRhLXRlcGxvL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvcmVjdFRvQ2xpZW50UmVjdC5qcyIsIndlYnBhY2s6Ly8vQzovV09SSy9GUk9OVC9wcm9qZWN0cy9Sb2lidXJvL2ludmV0YS10ZXBsby9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL3VuaXF1ZUJ5LmpzIiwid2VicGFjazovLy9DOi9XT1JLL0ZST05UL3Byb2plY3RzL1JvaWJ1cm8vaW52ZXRhLXRlcGxvL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvdmFsaWRhdGVNb2RpZmllcnMuanMiLCJ3ZWJwYWNrOi8vL0M6L1dPUksvRlJPTlQvcHJvamVjdHMvUm9pYnVyby9pbnZldGEtdGVwbG8vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy93aXRoaW4uanMiLCJ3ZWJwYWNrOi8vL0M6L1dPUksvRlJPTlQvcHJvamVjdHMvUm9pYnVyby9pbnZldGEtdGVwbG8vbm9kZV9tb2R1bGVzL2ltYXNrL2VzbS9fcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzLTZjY2IxZjY0LmpzIiwid2VicGFjazovLy9DOi9XT1JLL0ZST05UL3Byb2plY3RzL1JvaWJ1cm8vaW52ZXRhLXRlcGxvL25vZGVfbW9kdWxlcy9pbWFzay9lc20vY29udHJvbHMvaHRtbC1jb250ZW50ZWRpdGFibGUtbWFzay1lbGVtZW50LmpzIiwid2VicGFjazovLy9DOi9XT1JLL0ZST05UL3Byb2plY3RzL1JvaWJ1cm8vaW52ZXRhLXRlcGxvL25vZGVfbW9kdWxlcy9pbWFzay9lc20vY29udHJvbHMvaHRtbC1tYXNrLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vL0M6L1dPUksvRlJPTlQvcHJvamVjdHMvUm9pYnVyby9pbnZldGEtdGVwbG8vbm9kZV9tb2R1bGVzL2ltYXNrL2VzbS9jb250cm9scy9pbnB1dC5qcyIsIndlYnBhY2s6Ly8vQzovV09SSy9GUk9OVC9wcm9qZWN0cy9Sb2lidXJvL2ludmV0YS10ZXBsby9ub2RlX21vZHVsZXMvaW1hc2svZXNtL2NvbnRyb2xzL21hc2stZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vQzovV09SSy9GUk9OVC9wcm9qZWN0cy9Sb2lidXJvL2ludmV0YS10ZXBsby9ub2RlX21vZHVsZXMvaW1hc2svZXNtL2NvcmUvYWN0aW9uLWRldGFpbHMuanMiLCJ3ZWJwYWNrOi8vL0M6L1dPUksvRlJPTlQvcHJvamVjdHMvUm9pYnVyby9pbnZldGEtdGVwbG8vbm9kZV9tb2R1bGVzL2ltYXNrL2VzbS9jb3JlL2NoYW5nZS1kZXRhaWxzLmpzIiwid2VicGFjazovLy9DOi9XT1JLL0ZST05UL3Byb2plY3RzL1JvaWJ1cm8vaW52ZXRhLXRlcGxvL25vZGVfbW9kdWxlcy9pbWFzay9lc20vY29yZS9jb250aW51b3VzLXRhaWwtZGV0YWlscy5qcyIsIndlYnBhY2s6Ly8vQzovV09SSy9GUk9OVC9wcm9qZWN0cy9Sb2lidXJvL2ludmV0YS10ZXBsby9ub2RlX21vZHVsZXMvaW1hc2svZXNtL2NvcmUvaG9sZGVyLmpzIiwid2VicGFjazovLy9DOi9XT1JLL0ZST05UL3Byb2plY3RzL1JvaWJ1cm8vaW52ZXRhLXRlcGxvL25vZGVfbW9kdWxlcy9pbWFzay9lc20vY29yZS91dGlscy5qcyIsIndlYnBhY2s6Ly8vQzovV09SSy9GUk9OVC9wcm9qZWN0cy9Sb2lidXJvL2ludmV0YS10ZXBsby9ub2RlX21vZHVsZXMvaW1hc2svZXNtL2luZGV4LmpzIiwid2VicGFjazovLy9DOi9XT1JLL0ZST05UL3Byb2plY3RzL1JvaWJ1cm8vaW52ZXRhLXRlcGxvL25vZGVfbW9kdWxlcy9pbWFzay9lc20vbWFza2VkL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vL0M6L1dPUksvRlJPTlQvcHJvamVjdHMvUm9pYnVyby9pbnZldGEtdGVwbG8vbm9kZV9tb2R1bGVzL2ltYXNrL2VzbS9tYXNrZWQvZGF0ZS5qcyIsIndlYnBhY2s6Ly8vQzovV09SSy9GUk9OVC9wcm9qZWN0cy9Sb2lidXJvL2ludmV0YS10ZXBsby9ub2RlX21vZHVsZXMvaW1hc2svZXNtL21hc2tlZC9keW5hbWljLmpzIiwid2VicGFjazovLy9DOi9XT1JLL0ZST05UL3Byb2plY3RzL1JvaWJ1cm8vaW52ZXRhLXRlcGxvL25vZGVfbW9kdWxlcy9pbWFzay9lc20vbWFza2VkL2VudW0uanMiLCJ3ZWJwYWNrOi8vL0M6L1dPUksvRlJPTlQvcHJvamVjdHMvUm9pYnVyby9pbnZldGEtdGVwbG8vbm9kZV9tb2R1bGVzL2ltYXNrL2VzbS9tYXNrZWQvZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vQzovV09SSy9GUk9OVC9wcm9qZWN0cy9Sb2lidXJvL2ludmV0YS10ZXBsby9ub2RlX21vZHVsZXMvaW1hc2svZXNtL21hc2tlZC9mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vQzovV09SSy9GUk9OVC9wcm9qZWN0cy9Sb2lidXJvL2ludmV0YS10ZXBsby9ub2RlX21vZHVsZXMvaW1hc2svZXNtL21hc2tlZC9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vL0M6L1dPUksvRlJPTlQvcHJvamVjdHMvUm9pYnVyby9pbnZldGEtdGVwbG8vbm9kZV9tb2R1bGVzL2ltYXNrL2VzbS9tYXNrZWQvcGF0dGVybi5qcyIsIndlYnBhY2s6Ly8vQzovV09SSy9GUk9OVC9wcm9qZWN0cy9Sb2lidXJvL2ludmV0YS10ZXBsby9ub2RlX21vZHVsZXMvaW1hc2svZXNtL21hc2tlZC9wYXR0ZXJuL2NodW5rLXRhaWwtZGV0YWlscy5qcyIsIndlYnBhY2s6Ly8vQzovV09SSy9GUk9OVC9wcm9qZWN0cy9Sb2lidXJvL2ludmV0YS10ZXBsby9ub2RlX21vZHVsZXMvaW1hc2svZXNtL21hc2tlZC9wYXR0ZXJuL2ZpeGVkLWRlZmluaXRpb24uanMiLCJ3ZWJwYWNrOi8vL0M6L1dPUksvRlJPTlQvcHJvamVjdHMvUm9pYnVyby9pbnZldGEtdGVwbG8vbm9kZV9tb2R1bGVzL2ltYXNrL2VzbS9tYXNrZWQvcGF0dGVybi9pbnB1dC1kZWZpbml0aW9uLmpzIiwid2VicGFjazovLy9DOi9XT1JLL0ZST05UL3Byb2plY3RzL1JvaWJ1cm8vaW52ZXRhLXRlcGxvL25vZGVfbW9kdWxlcy9pbWFzay9lc20vbWFza2VkL3BpcGUuanMiLCJ3ZWJwYWNrOi8vL0M6L1dPUksvRlJPTlQvcHJvamVjdHMvUm9pYnVyby9pbnZldGEtdGVwbG8vbm9kZV9tb2R1bGVzL2ltYXNrL2VzbS9tYXNrZWQvcmFuZ2UuanMiLCJ3ZWJwYWNrOi8vL0M6L1dPUksvRlJPTlQvcHJvamVjdHMvUm9pYnVyby9pbnZldGEtdGVwbG8vbm9kZV9tb2R1bGVzL2ltYXNrL2VzbS9tYXNrZWQvcmVnZXhwLmpzIiwid2VicGFjazovLy9DOi9XT1JLL0ZST05UL3Byb2plY3RzL1JvaWJ1cm8vaW52ZXRhLXRlcGxvL25vZGVfbW9kdWxlcy9vYmplY3QtZml0LWltYWdlcy9kaXN0L29maS5jb21tb24tanMuanMiLCJ3ZWJwYWNrOi8vL0M6L1dPUksvRlJPTlQvcHJvamVjdHMvUm9pYnVyby9pbnZldGEtdGVwbG8vbm9kZV9tb2R1bGVzL3N2ZzRldmVyeWJvZHkvZGlzdC9zdmc0ZXZlcnlib2R5LmpzIiwid2VicGFjazovLy9DOi9XT1JLL0ZST05UL3Byb2plY3RzL1JvaWJ1cm8vaW52ZXRhLXRlcGxvL25vZGVfbW9kdWxlcy90aXBweS5qcy9kaXN0L3RpcHB5LmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2FjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2FuY2hvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9idXJnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tYXJxdWl6LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWFzay5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21vZGFscy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NsaWRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90YWJzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGlwcHkuanMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0LmpzIl0sIm5hbWVzIjpbInNob3dUZXh0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJ0ZXh0Q29udGVudCIsImFkZCIsImJ1dHRvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbnRhaW5lciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhZGRFdmVudExpc3RlbmVyIiwiZm9yRWFjaCIsIml0ZW0iLCJzdHlsZSIsIm1heEhlaWdodCIsIm1hcmdpbkJvdHRvbSIsIm9wYWNpdHkiLCJzY3JvbGxIZWlnaHQiLCJjYWxsIiwic2Nyb2xsQW5jaG9ycyIsImFuY2hvcnMiLCJtZW51QnVyZ2VyIiwibWVudSIsImFuY2hvciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImJsb2NrIiwiZ2V0QXR0cmlidXRlIiwiYm9keSIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJoZWFkZXJNb2IiLCJoZWFkZXJMb2dvRGVzYyIsImhlYWRlckxvZ29Nb2IiLCJ0b2dnbGUiLCJ3aW5kb3ciLCJvbnNjcm9sbCIsInNjcm9sbEZ1bmN0aW9uIiwic2Nyb2xsUG9zIiwiaGVhZGVyIiwibWVudUxpbmsiLCJzY3JvbGxUb3AiLCJkb2N1bWVudEVsZW1lbnQiLCJNYXJxdWl6IiwiaW5pdCIsImhvc3QiLCJpZCIsImF1dG9PcGVuIiwiYXV0b09wZW5GcmVxIiwib3Blbk9uRXhpdCIsInRlbCIsIm1hc2siLCJJTWFzayIsIm1vZGFsIiwiYnRucyIsImNsb3NlIiwib3ZlcmZsb3ciLCJjaGVja01vZGFsIiwiZGF0YXNldCIsInNob3dNb2RhbCIsInBhcmVudCIsImNvbnRlbnQiLCJvdmVyZmxvdzIiLCJhZGRDbGFzc0JvZHkiLCJhbmltYXRlQ1NTIiwiY2xvc2VNb2RhbCIsIm1vZGFsQWN0aXZlQ29udGVudCIsIm1vZGFsQWN0aXZlT3ZlcmZsb3ciLCJvbmNlIiwiZWxlbWVudCIsImFuaW1hdGlvbiIsImFuaW1hdGlvbk5hbWUiLCJub2RlIiwibm9kZVR5cGUiLCJzcGxpdCIsImhhbmRsZUFuaW1hdGlvbkVuZCIsImZlZWRiYWNrIiwiU3dpcGVyIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsInNwZWVkIiwibmF2aWdhdGlvbiIsInByZXZFbCIsIm5leHRFbCIsInBhZ2luYXRpb24iLCJlbCIsImJyZWFrcG9pbnRzIiwiY2VudGVyZWRTbGlkZXMiLCJhbGxvd1RvdWNoTW92ZSIsImV4YW1wbGVzVG9wT25lIiwibG9vcCIsImxvb3BlZFNsaWRlcyIsInR5cGUiLCJleGFtcGxlc0JvdE9uZSIsIndhdGNoU2xpZGVzVmlzaWJpbGl0eSIsIndhdGNoU2xpZGVzUHJvZ3Jlc3MiLCJjb250cm9sbGVyIiwiY29udHJvbCIsImV4YW1wbGVzVG9wVHdvIiwiZXhhbXBsZXNCb3RUd28iLCJleGFtcGxlc1RvcFRocmVlIiwiZXhhbXBsZXNCb3RUaHJlZSIsImV4YW1wbGVzVG9wRm91ciIsImV4YW1wbGVzQm90Rm91ciIsImV4YW1wbGVzVG9wRml2ZSIsImV4YW1wbGVzQm90Rml2ZSIsImpzVHJpZ2dlcnMiLCJqc0NvbnRlbnRzIiwidHJpZ2dlciIsImFjdGl2ZVRyaWdnZXIiLCJhY3RpdmVDb250ZW50Iiwic2VydmljZXNUb29sdGlwIiwiZGlzcGxheSIsInRpcHB5IiwibWF4V2lkdGgiLCJmZWVkYmFja1Rvb2x0aXAiLCJpbnRlcmFjdGl2ZSIsImFycm93IiwiZmVlZGJhY2tUb29sdGlwVHdvIiwic3ZnNGV2ZXJ5Ym9keSIsIm9iamVjdEZpdEltYWdlcyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMv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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJFQUEyRTtBQUMzRTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhLHVCQUF1QjtBQUNwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxlQUFlLDZCQUE2QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFD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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBOztBQUVBO0FBQ0EsUUFBUSxJQUFxQztBQUM3QztBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsa0JBQWtCO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLEVBQUU7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7OztBQUdMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQSw4QkFBOEIsbUVBQVksNENBQTRDO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxRQUFRLElBQXFDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEsSUFBcUM7QUFDN0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELG9CQUFvQjtBQUNqRjtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLFFBQVEsSUFBcUM7QUFDN0M7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlDQUFpQzs7QUFFakM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtDQUErQztBQUMvQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLElBQXFDO0FBQzdDO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEsSUFBcUM7QUFDN0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSxJQUFxQztBQUM3QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCO0FBQzVCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLElBQXFDO0FBQzdDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxNQUFNLElBQXFDO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBLE1BQU0sSUFBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwwQ0FBMEMsRUFBRSwwREFBVztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTCxxQkFBcUI7O0FBRXJCO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU0sSUFBcUM7QUFDM0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7OztBQUdIO0FBQ0EsMkNBQTJDOztBQUUzQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLElBQUk7QUFDVCx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBLG1CQUFtQjtBQUNuQjs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7QUFHQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTSxJQUFxQztBQUMzQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBLEdBQUc7QUFDSCxtQ0FBbUM7QUFDbkM7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7O0FBR0EseUdBQXlHOztBQUV6RztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVUsSUFBcUM7QUFDL0M7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxzRUFBc0U7QUFDdEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFD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QTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0NBR0E7QUFDQTs7QUFFQTtDQUdBOztBQUNBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBRSxvREFBYTtBQUNiQyx3REFBZSxHLENBRWYsa0QiLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zY3JpcHQuanNcIik7XG4iLCJpbXBvcnQgZ2V0Q29tcG9zaXRlUmVjdCBmcm9tIFwiLi9kb20tdXRpbHMvZ2V0Q29tcG9zaXRlUmVjdC5qc1wiO1xuaW1wb3J0IGdldExheW91dFJlY3QgZnJvbSBcIi4vZG9tLXV0aWxzL2dldExheW91dFJlY3QuanNcIjtcbmltcG9ydCBsaXN0U2Nyb2xsUGFyZW50cyBmcm9tIFwiLi9kb20tdXRpbHMvbGlzdFNjcm9sbFBhcmVudHMuanNcIjtcbmltcG9ydCBnZXRPZmZzZXRQYXJlbnQgZnJvbSBcIi4vZG9tLXV0aWxzL2dldE9mZnNldFBhcmVudC5qc1wiO1xuaW1wb3J0IGdldENvbXB1dGVkU3R5bGUgZnJvbSBcIi4vZG9tLXV0aWxzL2dldENvbXB1dGVkU3R5bGUuanNcIjtcbmltcG9ydCBvcmRlck1vZGlmaWVycyBmcm9tIFwiLi91dGlscy9vcmRlck1vZGlmaWVycy5qc1wiO1xuaW1wb3J0IGRlYm91bmNlIGZyb20gXCIuL3V0aWxzL2RlYm91bmNlLmpzXCI7XG5pbXBvcnQgdmFsaWRhdGVNb2RpZmllcnMgZnJvbSBcIi4vdXRpbHMvdmFsaWRhdGVNb2RpZmllcnMuanNcIjtcbmltcG9ydCB1bmlxdWVCeSBmcm9tIFwiLi91dGlscy91bmlxdWVCeS5qc1wiO1xuaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4vdXRpbHMvZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IG1lcmdlQnlOYW1lIGZyb20gXCIuL3V0aWxzL21lcmdlQnlOYW1lLmpzXCI7XG5pbXBvcnQgZGV0ZWN0T3ZlcmZsb3cgZnJvbSBcIi4vdXRpbHMvZGV0ZWN0T3ZlcmZsb3cuanNcIjtcbmltcG9ydCB7IGlzRWxlbWVudCB9IGZyb20gXCIuL2RvbS11dGlscy9pbnN0YW5jZU9mLmpzXCI7XG5pbXBvcnQgeyBhdXRvIH0gZnJvbSBcIi4vZW51bXMuanNcIjtcbnZhciBJTlZBTElEX0VMRU1FTlRfRVJST1IgPSAnUG9wcGVyOiBJbnZhbGlkIHJlZmVyZW5jZSBvciBwb3BwZXIgYXJndW1lbnQgcHJvdmlkZWQuIFRoZXkgbXVzdCBiZSBlaXRoZXIgYSBET00gZWxlbWVudCBvciB2aXJ0dWFsIGVsZW1lbnQuJztcbnZhciBJTkZJTklURV9MT09QX0VSUk9SID0gJ1BvcHBlcjogQW4gaW5maW5pdGUgbG9vcCBpbiB0aGUgbW9kaWZpZXJzIGN5Y2xlIGhhcyBiZWVuIGRldGVjdGVkISBUaGUgY3ljbGUgaGFzIGJlZW4gaW50ZXJydXB0ZWQgdG8gcHJldmVudCBhIGJyb3dzZXIgY3Jhc2guJztcbnZhciBERUZBVUxUX09QVElPTlMgPSB7XG4gIHBsYWNlbWVudDogJ2JvdHRvbScsXG4gIG1vZGlmaWVyczogW10sXG4gIHN0cmF0ZWd5OiAnYWJzb2x1dGUnXG59O1xuXG5mdW5jdGlvbiBhcmVWYWxpZEVsZW1lbnRzKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuICFhcmdzLnNvbWUoZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gIShlbGVtZW50ICYmIHR5cGVvZiBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCA9PT0gJ2Z1bmN0aW9uJyk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9wcGVyR2VuZXJhdG9yKGdlbmVyYXRvck9wdGlvbnMpIHtcbiAgaWYgKGdlbmVyYXRvck9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIGdlbmVyYXRvck9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIHZhciBfZ2VuZXJhdG9yT3B0aW9ucyA9IGdlbmVyYXRvck9wdGlvbnMsXG4gICAgICBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYgPSBfZ2VuZXJhdG9yT3B0aW9ucy5kZWZhdWx0TW9kaWZpZXJzLFxuICAgICAgZGVmYXVsdE1vZGlmaWVycyA9IF9nZW5lcmF0b3JPcHRpb25zJGRlZiA9PT0gdm9pZCAwID8gW10gOiBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYsXG4gICAgICBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYyID0gX2dlbmVyYXRvck9wdGlvbnMuZGVmYXVsdE9wdGlvbnMsXG4gICAgICBkZWZhdWx0T3B0aW9ucyA9IF9nZW5lcmF0b3JPcHRpb25zJGRlZjIgPT09IHZvaWQgMCA/IERFRkFVTFRfT1BUSU9OUyA6IF9nZW5lcmF0b3JPcHRpb25zJGRlZjI7XG4gIHJldHVybiBmdW5jdGlvbiBjcmVhdGVQb3BwZXIocmVmZXJlbmNlLCBwb3BwZXIsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0gZGVmYXVsdE9wdGlvbnM7XG4gICAgfVxuXG4gICAgdmFyIHN0YXRlID0ge1xuICAgICAgcGxhY2VtZW50OiAnYm90dG9tJyxcbiAgICAgIG9yZGVyZWRNb2RpZmllcnM6IFtdLFxuICAgICAgb3B0aW9uczogT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9PUFRJT05TLCBkZWZhdWx0T3B0aW9ucyksXG4gICAgICBtb2RpZmllcnNEYXRhOiB7fSxcbiAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgIHJlZmVyZW5jZTogcmVmZXJlbmNlLFxuICAgICAgICBwb3BwZXI6IHBvcHBlclxuICAgICAgfSxcbiAgICAgIGF0dHJpYnV0ZXM6IHt9LFxuICAgICAgc3R5bGVzOiB7fVxuICAgIH07XG4gICAgdmFyIGVmZmVjdENsZWFudXBGbnMgPSBbXTtcbiAgICB2YXIgaXNEZXN0cm95ZWQgPSBmYWxzZTtcbiAgICB2YXIgaW5zdGFuY2UgPSB7XG4gICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICBzZXRPcHRpb25zOiBmdW5jdGlvbiBzZXRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICAgICAgY2xlYW51cE1vZGlmaWVyRWZmZWN0cygpO1xuICAgICAgICBzdGF0ZS5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdE9wdGlvbnMsIHN0YXRlLm9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgICBzdGF0ZS5zY3JvbGxQYXJlbnRzID0ge1xuICAgICAgICAgIHJlZmVyZW5jZTogaXNFbGVtZW50KHJlZmVyZW5jZSkgPyBsaXN0U2Nyb2xsUGFyZW50cyhyZWZlcmVuY2UpIDogcmVmZXJlbmNlLmNvbnRleHRFbGVtZW50ID8gbGlzdFNjcm9sbFBhcmVudHMocmVmZXJlbmNlLmNvbnRleHRFbGVtZW50KSA6IFtdLFxuICAgICAgICAgIHBvcHBlcjogbGlzdFNjcm9sbFBhcmVudHMocG9wcGVyKVxuICAgICAgICB9OyAvLyBPcmRlcnMgdGhlIG1vZGlmaWVycyBiYXNlZCBvbiB0aGVpciBkZXBlbmRlbmNpZXMgYW5kIGBwaGFzZWBcbiAgICAgICAgLy8gcHJvcGVydGllc1xuXG4gICAgICAgIHZhciBvcmRlcmVkTW9kaWZpZXJzID0gb3JkZXJNb2RpZmllcnMobWVyZ2VCeU5hbWUoW10uY29uY2F0KGRlZmF1bHRNb2RpZmllcnMsIHN0YXRlLm9wdGlvbnMubW9kaWZpZXJzKSkpOyAvLyBTdHJpcCBvdXQgZGlzYWJsZWQgbW9kaWZpZXJzXG5cbiAgICAgICAgc3RhdGUub3JkZXJlZE1vZGlmaWVycyA9IG9yZGVyZWRNb2RpZmllcnMuZmlsdGVyKGZ1bmN0aW9uIChtKSB7XG4gICAgICAgICAgcmV0dXJuIG0uZW5hYmxlZDtcbiAgICAgICAgfSk7IC8vIFZhbGlkYXRlIHRoZSBwcm92aWRlZCBtb2RpZmllcnMgc28gdGhhdCB0aGUgY29uc3VtZXIgd2lsbCBnZXQgd2FybmVkXG4gICAgICAgIC8vIGlmIG9uZSBvZiB0aGUgbW9kaWZpZXJzIGlzIGludmFsaWQgZm9yIGFueSByZWFzb25cblxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgdmFyIG1vZGlmaWVycyA9IHVuaXF1ZUJ5KFtdLmNvbmNhdChvcmRlcmVkTW9kaWZpZXJzLCBzdGF0ZS5vcHRpb25zLm1vZGlmaWVycyksIGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IF9yZWYubmFtZTtcbiAgICAgICAgICAgIHJldHVybiBuYW1lO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHZhbGlkYXRlTW9kaWZpZXJzKG1vZGlmaWVycyk7XG5cbiAgICAgICAgICBpZiAoZ2V0QmFzZVBsYWNlbWVudChzdGF0ZS5vcHRpb25zLnBsYWNlbWVudCkgPT09IGF1dG8pIHtcbiAgICAgICAgICAgIHZhciBmbGlwTW9kaWZpZXIgPSBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzLmZpbmQoZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgICAgICAgICAgIHZhciBuYW1lID0gX3JlZjIubmFtZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5hbWUgPT09ICdmbGlwJztcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoIWZsaXBNb2RpZmllcikge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFsnUG9wcGVyOiBcImF1dG9cIiBwbGFjZW1lbnRzIHJlcXVpcmUgdGhlIFwiZmxpcFwiIG1vZGlmaWVyIGJlJywgJ3ByZXNlbnQgYW5kIGVuYWJsZWQgdG8gd29yay4nXS5qb2luKCcgJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBfZ2V0Q29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUocG9wcGVyKSxcbiAgICAgICAgICAgICAgbWFyZ2luVG9wID0gX2dldENvbXB1dGVkU3R5bGUubWFyZ2luVG9wLFxuICAgICAgICAgICAgICBtYXJnaW5SaWdodCA9IF9nZXRDb21wdXRlZFN0eWxlLm1hcmdpblJpZ2h0LFxuICAgICAgICAgICAgICBtYXJnaW5Cb3R0b20gPSBfZ2V0Q29tcHV0ZWRTdHlsZS5tYXJnaW5Cb3R0b20sXG4gICAgICAgICAgICAgIG1hcmdpbkxlZnQgPSBfZ2V0Q29tcHV0ZWRTdHlsZS5tYXJnaW5MZWZ0OyAvLyBXZSBubyBsb25nZXIgdGFrZSBpbnRvIGFjY291bnQgYG1hcmdpbnNgIG9uIHRoZSBwb3BwZXIsIGFuZCBpdCBjYW5cbiAgICAgICAgICAvLyBjYXVzZSBidWdzIHdpdGggcG9zaXRpb25pbmcsIHNvIHdlJ2xsIHdhcm4gdGhlIGNvbnN1bWVyXG5cblxuICAgICAgICAgIGlmIChbbWFyZ2luVG9wLCBtYXJnaW5SaWdodCwgbWFyZ2luQm90dG9tLCBtYXJnaW5MZWZ0XS5zb21lKGZ1bmN0aW9uIChtYXJnaW4pIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUZsb2F0KG1hcmdpbik7XG4gICAgICAgICAgfSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihbJ1BvcHBlcjogQ1NTIFwibWFyZ2luXCIgc3R5bGVzIGNhbm5vdCBiZSB1c2VkIHRvIGFwcGx5IHBhZGRpbmcnLCAnYmV0d2VlbiB0aGUgcG9wcGVyIGFuZCBpdHMgcmVmZXJlbmNlIGVsZW1lbnQgb3IgYm91bmRhcnkuJywgJ1RvIHJlcGxpY2F0ZSBtYXJnaW4sIHVzZSB0aGUgYG9mZnNldGAgbW9kaWZpZXIsIGFzIHdlbGwgYXMnLCAndGhlIGBwYWRkaW5nYCBvcHRpb24gaW4gdGhlIGBwcmV2ZW50T3ZlcmZsb3dgIGFuZCBgZmxpcGAnLCAnbW9kaWZpZXJzLiddLmpvaW4oJyAnKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcnVuTW9kaWZpZXJFZmZlY3RzKCk7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZS51cGRhdGUoKTtcbiAgICAgIH0sXG4gICAgICAvLyBTeW5jIHVwZGF0ZSDigJMgaXQgd2lsbCBhbHdheXMgYmUgZXhlY3V0ZWQsIGV2ZW4gaWYgbm90IG5lY2Vzc2FyeS4gVGhpc1xuICAgICAgLy8gaXMgdXNlZnVsIGZvciBsb3cgZnJlcXVlbmN5IHVwZGF0ZXMgd2hlcmUgc3luYyBiZWhhdmlvciBzaW1wbGlmaWVzIHRoZVxuICAgICAgLy8gbG9naWMuXG4gICAgICAvLyBGb3IgaGlnaCBmcmVxdWVuY3kgdXBkYXRlcyAoZS5nLiBgcmVzaXplYCBhbmQgYHNjcm9sbGAgZXZlbnRzKSwgYWx3YXlzXG4gICAgICAvLyBwcmVmZXIgdGhlIGFzeW5jIFBvcHBlciN1cGRhdGUgbWV0aG9kXG4gICAgICBmb3JjZVVwZGF0ZTogZnVuY3Rpb24gZm9yY2VVcGRhdGUoKSB7XG4gICAgICAgIGlmIChpc0Rlc3Ryb3llZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBfc3RhdGUkZWxlbWVudHMgPSBzdGF0ZS5lbGVtZW50cyxcbiAgICAgICAgICAgIHJlZmVyZW5jZSA9IF9zdGF0ZSRlbGVtZW50cy5yZWZlcmVuY2UsXG4gICAgICAgICAgICBwb3BwZXIgPSBfc3RhdGUkZWxlbWVudHMucG9wcGVyOyAvLyBEb24ndCBwcm9jZWVkIGlmIGByZWZlcmVuY2VgIG9yIGBwb3BwZXJgIGFyZSBub3QgdmFsaWQgZWxlbWVudHNcbiAgICAgICAgLy8gYW55bW9yZVxuXG4gICAgICAgIGlmICghYXJlVmFsaWRFbGVtZW50cyhyZWZlcmVuY2UsIHBvcHBlcikpIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKElOVkFMSURfRUxFTUVOVF9FUlJPUik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IC8vIFN0b3JlIHRoZSByZWZlcmVuY2UgYW5kIHBvcHBlciByZWN0cyB0byBiZSByZWFkIGJ5IG1vZGlmaWVyc1xuXG5cbiAgICAgICAgc3RhdGUucmVjdHMgPSB7XG4gICAgICAgICAgcmVmZXJlbmNlOiBnZXRDb21wb3NpdGVSZWN0KHJlZmVyZW5jZSwgZ2V0T2Zmc2V0UGFyZW50KHBvcHBlciksIHN0YXRlLm9wdGlvbnMuc3RyYXRlZ3kgPT09ICdmaXhlZCcpLFxuICAgICAgICAgIHBvcHBlcjogZ2V0TGF5b3V0UmVjdChwb3BwZXIpXG4gICAgICAgIH07IC8vIE1vZGlmaWVycyBoYXZlIHRoZSBhYmlsaXR5IHRvIHJlc2V0IHRoZSBjdXJyZW50IHVwZGF0ZSBjeWNsZS4gVGhlXG4gICAgICAgIC8vIG1vc3QgY29tbW9uIHVzZSBjYXNlIGZvciB0aGlzIGlzIHRoZSBgZmxpcGAgbW9kaWZpZXIgY2hhbmdpbmcgdGhlXG4gICAgICAgIC8vIHBsYWNlbWVudCwgd2hpY2ggdGhlbiBuZWVkcyB0byByZS1ydW4gYWxsIHRoZSBtb2RpZmllcnMsIGJlY2F1c2UgdGhlXG4gICAgICAgIC8vIGxvZ2ljIHdhcyBwcmV2aW91c2x5IHJhbiBmb3IgdGhlIHByZXZpb3VzIHBsYWNlbWVudCBhbmQgaXMgdGhlcmVmb3JlXG4gICAgICAgIC8vIHN0YWxlL2luY29ycmVjdFxuXG4gICAgICAgIHN0YXRlLnJlc2V0ID0gZmFsc2U7XG4gICAgICAgIHN0YXRlLnBsYWNlbWVudCA9IHN0YXRlLm9wdGlvbnMucGxhY2VtZW50OyAvLyBPbiBlYWNoIHVwZGF0ZSBjeWNsZSwgdGhlIGBtb2RpZmllcnNEYXRhYCBwcm9wZXJ0eSBmb3IgZWFjaCBtb2RpZmllclxuICAgICAgICAvLyBpcyBmaWxsZWQgd2l0aCB0aGUgaW5pdGlhbCBkYXRhIHNwZWNpZmllZCBieSB0aGUgbW9kaWZpZXIuIFRoaXMgbWVhbnNcbiAgICAgICAgLy8gaXQgZG9lc24ndCBwZXJzaXN0IGFuZCBpcyBmcmVzaCBvbiBlYWNoIHVwZGF0ZS5cbiAgICAgICAgLy8gVG8gZW5zdXJlIHBlcnNpc3RlbnQgZGF0YSwgdXNlIGAke25hbWV9I3BlcnNpc3RlbnRgXG5cbiAgICAgICAgc3RhdGUub3JkZXJlZE1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgICAgICAgIHJldHVybiBzdGF0ZS5tb2RpZmllcnNEYXRhW21vZGlmaWVyLm5hbWVdID0gT2JqZWN0LmFzc2lnbih7fSwgbW9kaWZpZXIuZGF0YSk7XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgX19kZWJ1Z19sb29wc19fID0gMDtcblxuICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgc3RhdGUub3JkZXJlZE1vZGlmaWVycy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgICBfX2RlYnVnX2xvb3BzX18gKz0gMTtcblxuICAgICAgICAgICAgaWYgKF9fZGVidWdfbG9vcHNfXyA+IDEwMCkge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKElORklOSVRFX0xPT1BfRVJST1IpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc3RhdGUucmVzZXQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHN0YXRlLnJlc2V0ID0gZmFsc2U7XG4gICAgICAgICAgICBpbmRleCA9IC0xO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIF9zdGF0ZSRvcmRlcmVkTW9kaWZpZSA9IHN0YXRlLm9yZGVyZWRNb2RpZmllcnNbaW5kZXhdLFxuICAgICAgICAgICAgICBmbiA9IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZS5mbixcbiAgICAgICAgICAgICAgX3N0YXRlJG9yZGVyZWRNb2RpZmllMiA9IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZS5vcHRpb25zLFxuICAgICAgICAgICAgICBfb3B0aW9ucyA9IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZTIgPT09IHZvaWQgMCA/IHt9IDogX3N0YXRlJG9yZGVyZWRNb2RpZmllMixcbiAgICAgICAgICAgICAgbmFtZSA9IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZS5uYW1lO1xuXG4gICAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgc3RhdGUgPSBmbih7XG4gICAgICAgICAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgICAgICAgICAgb3B0aW9uczogX29wdGlvbnMsXG4gICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgIGluc3RhbmNlOiBpbnN0YW5jZVxuICAgICAgICAgICAgfSkgfHwgc3RhdGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gQXN5bmMgYW5kIG9wdGltaXN0aWNhbGx5IG9wdGltaXplZCB1cGRhdGUg4oCTIGl0IHdpbGwgbm90IGJlIGV4ZWN1dGVkIGlmXG4gICAgICAvLyBub3QgbmVjZXNzYXJ5IChkZWJvdW5jZWQgdG8gcnVuIGF0IG1vc3Qgb25jZS1wZXItdGljaylcbiAgICAgIHVwZGF0ZTogZGVib3VuY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICBpbnN0YW5jZS5mb3JjZVVwZGF0ZSgpO1xuICAgICAgICAgIHJlc29sdmUoc3RhdGUpO1xuICAgICAgICB9KTtcbiAgICAgIH0pLFxuICAgICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgY2xlYW51cE1vZGlmaWVyRWZmZWN0cygpO1xuICAgICAgICBpc0Rlc3Ryb3llZCA9IHRydWU7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmICghYXJlVmFsaWRFbGVtZW50cyhyZWZlcmVuY2UsIHBvcHBlcikpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihJTlZBTElEX0VMRU1FTlRfRVJST1IpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgaW5zdGFuY2Uuc2V0T3B0aW9ucyhvcHRpb25zKS50aGVuKGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgaWYgKCFpc0Rlc3Ryb3llZCAmJiBvcHRpb25zLm9uRmlyc3RVcGRhdGUpIHtcbiAgICAgICAgb3B0aW9ucy5vbkZpcnN0VXBkYXRlKHN0YXRlKTtcbiAgICAgIH1cbiAgICB9KTsgLy8gTW9kaWZpZXJzIGhhdmUgdGhlIGFiaWxpdHkgdG8gZXhlY3V0ZSBhcmJpdHJhcnkgY29kZSBiZWZvcmUgdGhlIGZpcnN0XG4gICAgLy8gdXBkYXRlIGN5Y2xlIHJ1bnMuIFRoZXkgd2lsbCBiZSBleGVjdXRlZCBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGUgdXBkYXRlXG4gICAgLy8gY3ljbGUuIFRoaXMgaXMgdXNlZnVsIHdoZW4gYSBtb2RpZmllciBhZGRzIHNvbWUgcGVyc2lzdGVudCBkYXRhIHRoYXRcbiAgICAvLyBvdGhlciBtb2RpZmllcnMgbmVlZCB0byB1c2UsIGJ1dCB0aGUgbW9kaWZpZXIgaXMgcnVuIGFmdGVyIHRoZSBkZXBlbmRlbnRcbiAgICAvLyBvbmUuXG5cbiAgICBmdW5jdGlvbiBydW5Nb2RpZmllckVmZmVjdHMoKSB7XG4gICAgICBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKF9yZWYzKSB7XG4gICAgICAgIHZhciBuYW1lID0gX3JlZjMubmFtZSxcbiAgICAgICAgICAgIF9yZWYzJG9wdGlvbnMgPSBfcmVmMy5vcHRpb25zLFxuICAgICAgICAgICAgb3B0aW9ucyA9IF9yZWYzJG9wdGlvbnMgPT09IHZvaWQgMCA/IHt9IDogX3JlZjMkb3B0aW9ucyxcbiAgICAgICAgICAgIGVmZmVjdCA9IF9yZWYzLmVmZmVjdDtcblxuICAgICAgICBpZiAodHlwZW9mIGVmZmVjdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHZhciBjbGVhbnVwRm4gPSBlZmZlY3Qoe1xuICAgICAgICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgIGluc3RhbmNlOiBpbnN0YW5jZSxcbiAgICAgICAgICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHZhciBub29wRm4gPSBmdW5jdGlvbiBub29wRm4oKSB7fTtcblxuICAgICAgICAgIGVmZmVjdENsZWFudXBGbnMucHVzaChjbGVhbnVwRm4gfHwgbm9vcEZuKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYW51cE1vZGlmaWVyRWZmZWN0cygpIHtcbiAgICAgIGVmZmVjdENsZWFudXBGbnMuZm9yRWFjaChmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgcmV0dXJuIGZuKCk7XG4gICAgICB9KTtcbiAgICAgIGVmZmVjdENsZWFudXBGbnMgPSBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH07XG59XG5leHBvcnQgdmFyIGNyZWF0ZVBvcHBlciA9IC8qI19fUFVSRV9fKi9wb3BwZXJHZW5lcmF0b3IoKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5leHBvcnQgeyBkZXRlY3RPdmVyZmxvdyB9OyIsImltcG9ydCB7IGlzU2hhZG93Um9vdCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRhaW5zKHBhcmVudCwgY2hpbGQpIHtcbiAgdmFyIHJvb3ROb2RlID0gY2hpbGQuZ2V0Um9vdE5vZGUgJiYgY2hpbGQuZ2V0Um9vdE5vZGUoKTsgLy8gRmlyc3QsIGF0dGVtcHQgd2l0aCBmYXN0ZXIgbmF0aXZlIG1ldGhvZFxuXG4gIGlmIChwYXJlbnQuY29udGFpbnMoY2hpbGQpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gdGhlbiBmYWxsYmFjayB0byBjdXN0b20gaW1wbGVtZW50YXRpb24gd2l0aCBTaGFkb3cgRE9NIHN1cHBvcnRcbiAgZWxzZSBpZiAocm9vdE5vZGUgJiYgaXNTaGFkb3dSb290KHJvb3ROb2RlKSkge1xuICAgICAgdmFyIG5leHQgPSBjaGlsZDtcblxuICAgICAgZG8ge1xuICAgICAgICBpZiAobmV4dCAmJiBwYXJlbnQuaXNTYW1lTm9kZShuZXh0KSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXTogbmVlZCBhIGJldHRlciB3YXkgdG8gaGFuZGxlIHRoaXMuLi5cblxuXG4gICAgICAgIG5leHQgPSBuZXh0LnBhcmVudE5vZGUgfHwgbmV4dC5ob3N0O1xuICAgICAgfSB3aGlsZSAobmV4dCk7XG4gICAgfSAvLyBHaXZlIHVwLCB0aGUgcmVzdWx0IGlzIGZhbHNlXG5cblxuICByZXR1cm4gZmFsc2U7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQpIHtcbiAgdmFyIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICByZXR1cm4ge1xuICAgIHdpZHRoOiByZWN0LndpZHRoLFxuICAgIGhlaWdodDogcmVjdC5oZWlnaHQsXG4gICAgdG9wOiByZWN0LnRvcCxcbiAgICByaWdodDogcmVjdC5yaWdodCxcbiAgICBib3R0b206IHJlY3QuYm90dG9tLFxuICAgIGxlZnQ6IHJlY3QubGVmdCxcbiAgICB4OiByZWN0LmxlZnQsXG4gICAgeTogcmVjdC50b3BcbiAgfTtcbn0iLCJpbXBvcnQgeyB2aWV3cG9ydCB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IGdldFZpZXdwb3J0UmVjdCBmcm9tIFwiLi9nZXRWaWV3cG9ydFJlY3QuanNcIjtcbmltcG9ydCBnZXREb2N1bWVudFJlY3QgZnJvbSBcIi4vZ2V0RG9jdW1lbnRSZWN0LmpzXCI7XG5pbXBvcnQgbGlzdFNjcm9sbFBhcmVudHMgZnJvbSBcIi4vbGlzdFNjcm9sbFBhcmVudHMuanNcIjtcbmltcG9ydCBnZXRPZmZzZXRQYXJlbnQgZnJvbSBcIi4vZ2V0T2Zmc2V0UGFyZW50LmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IGdldENvbXB1dGVkU3R5bGUgZnJvbSBcIi4vZ2V0Q29tcHV0ZWRTdHlsZS5qc1wiO1xuaW1wb3J0IHsgaXNFbGVtZW50LCBpc0hUTUxFbGVtZW50IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuaW1wb3J0IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBmcm9tIFwiLi9nZXRCb3VuZGluZ0NsaWVudFJlY3QuanNcIjtcbmltcG9ydCBnZXRQYXJlbnROb2RlIGZyb20gXCIuL2dldFBhcmVudE5vZGUuanNcIjtcbmltcG9ydCBjb250YWlucyBmcm9tIFwiLi9jb250YWlucy5qc1wiO1xuaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gXCIuL2dldE5vZGVOYW1lLmpzXCI7XG5pbXBvcnQgcmVjdFRvQ2xpZW50UmVjdCBmcm9tIFwiLi4vdXRpbHMvcmVjdFRvQ2xpZW50UmVjdC5qc1wiO1xuaW1wb3J0IHsgbWF4LCBtaW4gfSBmcm9tIFwiLi4vdXRpbHMvbWF0aC5qc1wiO1xuXG5mdW5jdGlvbiBnZXRJbm5lckJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50KSB7XG4gIHZhciByZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQpO1xuICByZWN0LnRvcCA9IHJlY3QudG9wICsgZWxlbWVudC5jbGllbnRUb3A7XG4gIHJlY3QubGVmdCA9IHJlY3QubGVmdCArIGVsZW1lbnQuY2xpZW50TGVmdDtcbiAgcmVjdC5ib3R0b20gPSByZWN0LnRvcCArIGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICByZWN0LnJpZ2h0ID0gcmVjdC5sZWZ0ICsgZWxlbWVudC5jbGllbnRXaWR0aDtcbiAgcmVjdC53aWR0aCA9IGVsZW1lbnQuY2xpZW50V2lkdGg7XG4gIHJlY3QuaGVpZ2h0ID0gZWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gIHJlY3QueCA9IHJlY3QubGVmdDtcbiAgcmVjdC55ID0gcmVjdC50b3A7XG4gIHJldHVybiByZWN0O1xufVxuXG5mdW5jdGlvbiBnZXRDbGllbnRSZWN0RnJvbU1peGVkVHlwZShlbGVtZW50LCBjbGlwcGluZ1BhcmVudCkge1xuICByZXR1cm4gY2xpcHBpbmdQYXJlbnQgPT09IHZpZXdwb3J0ID8gcmVjdFRvQ2xpZW50UmVjdChnZXRWaWV3cG9ydFJlY3QoZWxlbWVudCkpIDogaXNIVE1MRWxlbWVudChjbGlwcGluZ1BhcmVudCkgPyBnZXRJbm5lckJvdW5kaW5nQ2xpZW50UmVjdChjbGlwcGluZ1BhcmVudCkgOiByZWN0VG9DbGllbnRSZWN0KGdldERvY3VtZW50UmVjdChnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCkpKTtcbn0gLy8gQSBcImNsaXBwaW5nIHBhcmVudFwiIGlzIGFuIG92ZXJmbG93YWJsZSBjb250YWluZXIgd2l0aCB0aGUgY2hhcmFjdGVyaXN0aWMgb2Zcbi8vIGNsaXBwaW5nIChvciBoaWRpbmcpIG92ZXJmbG93aW5nIGVsZW1lbnRzIHdpdGggYSBwb3NpdGlvbiBkaWZmZXJlbnQgZnJvbVxuLy8gYGluaXRpYWxgXG5cblxuZnVuY3Rpb24gZ2V0Q2xpcHBpbmdQYXJlbnRzKGVsZW1lbnQpIHtcbiAgdmFyIGNsaXBwaW5nUGFyZW50cyA9IGxpc3RTY3JvbGxQYXJlbnRzKGdldFBhcmVudE5vZGUoZWxlbWVudCkpO1xuICB2YXIgY2FuRXNjYXBlQ2xpcHBpbmcgPSBbJ2Fic29sdXRlJywgJ2ZpeGVkJ10uaW5kZXhPZihnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLnBvc2l0aW9uKSA+PSAwO1xuICB2YXIgY2xpcHBlckVsZW1lbnQgPSBjYW5Fc2NhcGVDbGlwcGluZyAmJiBpc0hUTUxFbGVtZW50KGVsZW1lbnQpID8gZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQpIDogZWxlbWVudDtcblxuICBpZiAoIWlzRWxlbWVudChjbGlwcGVyRWxlbWVudCkpIHtcbiAgICByZXR1cm4gW107XG4gIH0gLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtcmV0dXJuXTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2Zsb3cvaXNzdWVzLzE0MTRcblxuXG4gIHJldHVybiBjbGlwcGluZ1BhcmVudHMuZmlsdGVyKGZ1bmN0aW9uIChjbGlwcGluZ1BhcmVudCkge1xuICAgIHJldHVybiBpc0VsZW1lbnQoY2xpcHBpbmdQYXJlbnQpICYmIGNvbnRhaW5zKGNsaXBwaW5nUGFyZW50LCBjbGlwcGVyRWxlbWVudCkgJiYgZ2V0Tm9kZU5hbWUoY2xpcHBpbmdQYXJlbnQpICE9PSAnYm9keSc7XG4gIH0pO1xufSAvLyBHZXRzIHRoZSBtYXhpbXVtIGFyZWEgdGhhdCB0aGUgZWxlbWVudCBpcyB2aXNpYmxlIGluIGR1ZSB0byBhbnkgbnVtYmVyIG9mXG4vLyBjbGlwcGluZyBwYXJlbnRzXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Q2xpcHBpbmdSZWN0KGVsZW1lbnQsIGJvdW5kYXJ5LCByb290Qm91bmRhcnkpIHtcbiAgdmFyIG1haW5DbGlwcGluZ1BhcmVudHMgPSBib3VuZGFyeSA9PT0gJ2NsaXBwaW5nUGFyZW50cycgPyBnZXRDbGlwcGluZ1BhcmVudHMoZWxlbWVudCkgOiBbXS5jb25jYXQoYm91bmRhcnkpO1xuICB2YXIgY2xpcHBpbmdQYXJlbnRzID0gW10uY29uY2F0KG1haW5DbGlwcGluZ1BhcmVudHMsIFtyb290Qm91bmRhcnldKTtcbiAgdmFyIGZpcnN0Q2xpcHBpbmdQYXJlbnQgPSBjbGlwcGluZ1BhcmVudHNbMF07XG4gIHZhciBjbGlwcGluZ1JlY3QgPSBjbGlwcGluZ1BhcmVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2NSZWN0LCBjbGlwcGluZ1BhcmVudCkge1xuICAgIHZhciByZWN0ID0gZ2V0Q2xpZW50UmVjdEZyb21NaXhlZFR5cGUoZWxlbWVudCwgY2xpcHBpbmdQYXJlbnQpO1xuICAgIGFjY1JlY3QudG9wID0gbWF4KHJlY3QudG9wLCBhY2NSZWN0LnRvcCk7XG4gICAgYWNjUmVjdC5yaWdodCA9IG1pbihyZWN0LnJpZ2h0LCBhY2NSZWN0LnJpZ2h0KTtcbiAgICBhY2NSZWN0LmJvdHRvbSA9IG1pbihyZWN0LmJvdHRvbSwgYWNjUmVjdC5ib3R0b20pO1xuICAgIGFjY1JlY3QubGVmdCA9IG1heChyZWN0LmxlZnQsIGFjY1JlY3QubGVmdCk7XG4gICAgcmV0dXJuIGFjY1JlY3Q7XG4gIH0sIGdldENsaWVudFJlY3RGcm9tTWl4ZWRUeXBlKGVsZW1lbnQsIGZpcnN0Q2xpcHBpbmdQYXJlbnQpKTtcbiAgY2xpcHBpbmdSZWN0LndpZHRoID0gY2xpcHBpbmdSZWN0LnJpZ2h0IC0gY2xpcHBpbmdSZWN0LmxlZnQ7XG4gIGNsaXBwaW5nUmVjdC5oZWlnaHQgPSBjbGlwcGluZ1JlY3QuYm90dG9tIC0gY2xpcHBpbmdSZWN0LnRvcDtcbiAgY2xpcHBpbmdSZWN0LnggPSBjbGlwcGluZ1JlY3QubGVmdDtcbiAgY2xpcHBpbmdSZWN0LnkgPSBjbGlwcGluZ1JlY3QudG9wO1xuICByZXR1cm4gY2xpcHBpbmdSZWN0O1xufSIsImltcG9ydCBnZXRCb3VuZGluZ0NsaWVudFJlY3QgZnJvbSBcIi4vZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0Tm9kZVNjcm9sbCBmcm9tIFwiLi9nZXROb2RlU2Nyb2xsLmpzXCI7XG5pbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4vZ2V0Tm9kZU5hbWUuanNcIjtcbmltcG9ydCB7IGlzSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93U2Nyb2xsQmFyWCBmcm9tIFwiLi9nZXRXaW5kb3dTY3JvbGxCYXJYLmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IGlzU2Nyb2xsUGFyZW50IGZyb20gXCIuL2lzU2Nyb2xsUGFyZW50LmpzXCI7IC8vIFJldHVybnMgdGhlIGNvbXBvc2l0ZSByZWN0IG9mIGFuIGVsZW1lbnQgcmVsYXRpdmUgdG8gaXRzIG9mZnNldFBhcmVudC5cbi8vIENvbXBvc2l0ZSBtZWFucyBpdCB0YWtlcyBpbnRvIGFjY291bnQgdHJhbnNmb3JtcyBhcyB3ZWxsIGFzIGxheW91dC5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Q29tcG9zaXRlUmVjdChlbGVtZW50T3JWaXJ0dWFsRWxlbWVudCwgb2Zmc2V0UGFyZW50LCBpc0ZpeGVkKSB7XG4gIGlmIChpc0ZpeGVkID09PSB2b2lkIDApIHtcbiAgICBpc0ZpeGVkID0gZmFsc2U7XG4gIH1cblxuICB2YXIgZG9jdW1lbnRFbGVtZW50ID0gZ2V0RG9jdW1lbnRFbGVtZW50KG9mZnNldFBhcmVudCk7XG4gIHZhciByZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnRPclZpcnR1YWxFbGVtZW50KTtcbiAgdmFyIGlzT2Zmc2V0UGFyZW50QW5FbGVtZW50ID0gaXNIVE1MRWxlbWVudChvZmZzZXRQYXJlbnQpO1xuICB2YXIgc2Nyb2xsID0ge1xuICAgIHNjcm9sbExlZnQ6IDAsXG4gICAgc2Nyb2xsVG9wOiAwXG4gIH07XG4gIHZhciBvZmZzZXRzID0ge1xuICAgIHg6IDAsXG4gICAgeTogMFxuICB9O1xuXG4gIGlmIChpc09mZnNldFBhcmVudEFuRWxlbWVudCB8fCAhaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgJiYgIWlzRml4ZWQpIHtcbiAgICBpZiAoZ2V0Tm9kZU5hbWUob2Zmc2V0UGFyZW50KSAhPT0gJ2JvZHknIHx8IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wb3BwZXJqcy9wb3BwZXItY29yZS9pc3N1ZXMvMTA3OFxuICAgIGlzU2Nyb2xsUGFyZW50KGRvY3VtZW50RWxlbWVudCkpIHtcbiAgICAgIHNjcm9sbCA9IGdldE5vZGVTY3JvbGwob2Zmc2V0UGFyZW50KTtcbiAgICB9XG5cbiAgICBpZiAoaXNIVE1MRWxlbWVudChvZmZzZXRQYXJlbnQpKSB7XG4gICAgICBvZmZzZXRzID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KG9mZnNldFBhcmVudCk7XG4gICAgICBvZmZzZXRzLnggKz0gb2Zmc2V0UGFyZW50LmNsaWVudExlZnQ7XG4gICAgICBvZmZzZXRzLnkgKz0gb2Zmc2V0UGFyZW50LmNsaWVudFRvcDtcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50RWxlbWVudCkge1xuICAgICAgb2Zmc2V0cy54ID0gZ2V0V2luZG93U2Nyb2xsQmFyWChkb2N1bWVudEVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgeDogcmVjdC5sZWZ0ICsgc2Nyb2xsLnNjcm9sbExlZnQgLSBvZmZzZXRzLngsXG4gICAgeTogcmVjdC50b3AgKyBzY3JvbGwuc2Nyb2xsVG9wIC0gb2Zmc2V0cy55LFxuICAgIHdpZHRoOiByZWN0LndpZHRoLFxuICAgIGhlaWdodDogcmVjdC5oZWlnaHRcbiAgfTtcbn0iLCJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KSB7XG4gIHJldHVybiBnZXRXaW5kb3coZWxlbWVudCkuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbn0iLCJpbXBvcnQgeyBpc0VsZW1lbnQgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCkge1xuICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1yZXR1cm5dOiBhc3N1bWUgYm9keSBpcyBhbHdheXMgYXZhaWxhYmxlXG4gIHJldHVybiAoKGlzRWxlbWVudChlbGVtZW50KSA/IGVsZW1lbnQub3duZXJEb2N1bWVudCA6IC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxuICBlbGVtZW50LmRvY3VtZW50KSB8fCB3aW5kb3cuZG9jdW1lbnQpLmRvY3VtZW50RWxlbWVudDtcbn0iLCJpbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IGdldENvbXB1dGVkU3R5bGUgZnJvbSBcIi4vZ2V0Q29tcHV0ZWRTdHlsZS5qc1wiO1xuaW1wb3J0IGdldFdpbmRvd1Njcm9sbEJhclggZnJvbSBcIi4vZ2V0V2luZG93U2Nyb2xsQmFyWC5qc1wiO1xuaW1wb3J0IGdldFdpbmRvd1Njcm9sbCBmcm9tIFwiLi9nZXRXaW5kb3dTY3JvbGwuanNcIjtcbmltcG9ydCB7IG1heCB9IGZyb20gXCIuLi91dGlscy9tYXRoLmpzXCI7IC8vIEdldHMgdGhlIGVudGlyZSBzaXplIG9mIHRoZSBzY3JvbGxhYmxlIGRvY3VtZW50IGFyZWEsIGV2ZW4gZXh0ZW5kaW5nIG91dHNpZGVcbi8vIG9mIHRoZSBgPGh0bWw+YCBhbmQgYDxib2R5PmAgcmVjdCBib3VuZHMgaWYgaG9yaXpvbnRhbGx5IHNjcm9sbGFibGVcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RG9jdW1lbnRSZWN0KGVsZW1lbnQpIHtcbiAgdmFyIF9lbGVtZW50JG93bmVyRG9jdW1lbjtcblxuICB2YXIgaHRtbCA9IGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KTtcbiAgdmFyIHdpblNjcm9sbCA9IGdldFdpbmRvd1Njcm9sbChlbGVtZW50KTtcbiAgdmFyIGJvZHkgPSAoX2VsZW1lbnQkb3duZXJEb2N1bWVuID0gZWxlbWVudC5vd25lckRvY3VtZW50KSA9PSBudWxsID8gdm9pZCAwIDogX2VsZW1lbnQkb3duZXJEb2N1bWVuLmJvZHk7XG4gIHZhciB3aWR0aCA9IG1heChodG1sLnNjcm9sbFdpZHRoLCBodG1sLmNsaWVudFdpZHRoLCBib2R5ID8gYm9keS5zY3JvbGxXaWR0aCA6IDAsIGJvZHkgPyBib2R5LmNsaWVudFdpZHRoIDogMCk7XG4gIHZhciBoZWlnaHQgPSBtYXgoaHRtbC5zY3JvbGxIZWlnaHQsIGh0bWwuY2xpZW50SGVpZ2h0LCBib2R5ID8gYm9keS5zY3JvbGxIZWlnaHQgOiAwLCBib2R5ID8gYm9keS5jbGllbnRIZWlnaHQgOiAwKTtcbiAgdmFyIHggPSAtd2luU2Nyb2xsLnNjcm9sbExlZnQgKyBnZXRXaW5kb3dTY3JvbGxCYXJYKGVsZW1lbnQpO1xuICB2YXIgeSA9IC13aW5TY3JvbGwuc2Nyb2xsVG9wO1xuXG4gIGlmIChnZXRDb21wdXRlZFN0eWxlKGJvZHkgfHwgaHRtbCkuZGlyZWN0aW9uID09PSAncnRsJykge1xuICAgIHggKz0gbWF4KGh0bWwuY2xpZW50V2lkdGgsIGJvZHkgPyBib2R5LmNsaWVudFdpZHRoIDogMCkgLSB3aWR0aDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0LFxuICAgIHg6IHgsXG4gICAgeTogeVxuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEhUTUxFbGVtZW50U2Nyb2xsKGVsZW1lbnQpIHtcbiAgcmV0dXJuIHtcbiAgICBzY3JvbGxMZWZ0OiBlbGVtZW50LnNjcm9sbExlZnQsXG4gICAgc2Nyb2xsVG9wOiBlbGVtZW50LnNjcm9sbFRvcFxuICB9O1xufSIsImltcG9ydCBnZXRCb3VuZGluZ0NsaWVudFJlY3QgZnJvbSBcIi4vZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmpzXCI7IC8vIFJldHVybnMgdGhlIGxheW91dCByZWN0IG9mIGFuIGVsZW1lbnQgcmVsYXRpdmUgdG8gaXRzIG9mZnNldFBhcmVudC4gTGF5b3V0XG4vLyBtZWFucyBpdCBkb2Vzbid0IHRha2UgaW50byBhY2NvdW50IHRyYW5zZm9ybXMuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldExheW91dFJlY3QoZWxlbWVudCkge1xuICB2YXIgY2xpZW50UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50KTsgLy8gVXNlIHRoZSBjbGllbnRSZWN0IHNpemVzIGlmIGl0J3Mgbm90IGJlZW4gdHJhbnNmb3JtZWQuXG4gIC8vIEZpeGVzIGh0dHBzOi8vZ2l0aHViLmNvbS9wb3BwZXJqcy9wb3BwZXItY29yZS9pc3N1ZXMvMTIyM1xuXG4gIHZhciB3aWR0aCA9IGVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gIHZhciBoZWlnaHQgPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcblxuICBpZiAoTWF0aC5hYnMoY2xpZW50UmVjdC53aWR0aCAtIHdpZHRoKSA8PSAxKSB7XG4gICAgd2lkdGggPSBjbGllbnRSZWN0LndpZHRoO1xuICB9XG5cbiAgaWYgKE1hdGguYWJzKGNsaWVudFJlY3QuaGVpZ2h0IC0gaGVpZ2h0KSA8PSAxKSB7XG4gICAgaGVpZ2h0ID0gY2xpZW50UmVjdC5oZWlnaHQ7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHg6IGVsZW1lbnQub2Zmc2V0TGVmdCxcbiAgICB5OiBlbGVtZW50Lm9mZnNldFRvcCxcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHRcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXROb2RlTmFtZShlbGVtZW50KSB7XG4gIHJldHVybiBlbGVtZW50ID8gKGVsZW1lbnQubm9kZU5hbWUgfHwgJycpLnRvTG93ZXJDYXNlKCkgOiBudWxsO1xufSIsImltcG9ydCBnZXRXaW5kb3dTY3JvbGwgZnJvbSBcIi4vZ2V0V2luZG93U2Nyb2xsLmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuaW1wb3J0IHsgaXNIVE1MRWxlbWVudCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmltcG9ydCBnZXRIVE1MRWxlbWVudFNjcm9sbCBmcm9tIFwiLi9nZXRIVE1MRWxlbWVudFNjcm9sbC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Tm9kZVNjcm9sbChub2RlKSB7XG4gIGlmIChub2RlID09PSBnZXRXaW5kb3cobm9kZSkgfHwgIWlzSFRNTEVsZW1lbnQobm9kZSkpIHtcbiAgICByZXR1cm4gZ2V0V2luZG93U2Nyb2xsKG5vZGUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBnZXRIVE1MRWxlbWVudFNjcm9sbChub2RlKTtcbiAgfVxufSIsImltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vZ2V0V2luZG93LmpzXCI7XG5pbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4vZ2V0Tm9kZU5hbWUuanNcIjtcbmltcG9ydCBnZXRDb21wdXRlZFN0eWxlIGZyb20gXCIuL2dldENvbXB1dGVkU3R5bGUuanNcIjtcbmltcG9ydCB7IGlzSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5pbXBvcnQgaXNUYWJsZUVsZW1lbnQgZnJvbSBcIi4vaXNUYWJsZUVsZW1lbnQuanNcIjtcbmltcG9ydCBnZXRQYXJlbnROb2RlIGZyb20gXCIuL2dldFBhcmVudE5vZGUuanNcIjtcblxuZnVuY3Rpb24gZ2V0VHJ1ZU9mZnNldFBhcmVudChlbGVtZW50KSB7XG4gIGlmICghaXNIVE1MRWxlbWVudChlbGVtZW50KSB8fCAvLyBodHRwczovL2dpdGh1Yi5jb20vcG9wcGVyanMvcG9wcGVyLWNvcmUvaXNzdWVzLzgzN1xuICBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLnBvc2l0aW9uID09PSAnZml4ZWQnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudC5vZmZzZXRQYXJlbnQ7XG59IC8vIGAub2Zmc2V0UGFyZW50YCByZXBvcnRzIGBudWxsYCBmb3IgZml4ZWQgZWxlbWVudHMsIHdoaWxlIGFic29sdXRlIGVsZW1lbnRzXG4vLyByZXR1cm4gdGhlIGNvbnRhaW5pbmcgYmxvY2tcblxuXG5mdW5jdGlvbiBnZXRDb250YWluaW5nQmxvY2soZWxlbWVudCkge1xuICB2YXIgaXNGaXJlZm94ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2ZpcmVmb3gnKSAhPT0gLTE7XG4gIHZhciBjdXJyZW50Tm9kZSA9IGdldFBhcmVudE5vZGUoZWxlbWVudCk7XG5cbiAgd2hpbGUgKGlzSFRNTEVsZW1lbnQoY3VycmVudE5vZGUpICYmIFsnaHRtbCcsICdib2R5J10uaW5kZXhPZihnZXROb2RlTmFtZShjdXJyZW50Tm9kZSkpIDwgMCkge1xuICAgIHZhciBjc3MgPSBnZXRDb21wdXRlZFN0eWxlKGN1cnJlbnROb2RlKTsgLy8gVGhpcyBpcyBub24tZXhoYXVzdGl2ZSBidXQgY292ZXJzIHRoZSBtb3N0IGNvbW1vbiBDU1MgcHJvcGVydGllcyB0aGF0XG4gICAgLy8gY3JlYXRlIGEgY29udGFpbmluZyBibG9jay5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvQ29udGFpbmluZ19ibG9jayNpZGVudGlmeWluZ190aGVfY29udGFpbmluZ19ibG9ja1xuXG4gICAgaWYgKGNzcy50cmFuc2Zvcm0gIT09ICdub25lJyB8fCBjc3MucGVyc3BlY3RpdmUgIT09ICdub25lJyB8fCBjc3MuY29udGFpbiA9PT0gJ3BhaW50JyB8fCBbJ3RyYW5zZm9ybScsICdwZXJzcGVjdGl2ZSddLmluZGV4T2YoY3NzLndpbGxDaGFuZ2UpICE9PSAtMSB8fCBpc0ZpcmVmb3ggJiYgY3NzLndpbGxDaGFuZ2UgPT09ICdmaWx0ZXInIHx8IGlzRmlyZWZveCAmJiBjc3MuZmlsdGVyICYmIGNzcy5maWx0ZXIgIT09ICdub25lJykge1xuICAgICAgcmV0dXJuIGN1cnJlbnROb2RlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59IC8vIEdldHMgdGhlIGNsb3Nlc3QgYW5jZXN0b3IgcG9zaXRpb25lZCBlbGVtZW50LiBIYW5kbGVzIHNvbWUgZWRnZSBjYXNlcyxcbi8vIHN1Y2ggYXMgdGFibGUgYW5jZXN0b3JzIGFuZCBjcm9zcyBicm93c2VyIGJ1Z3MuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQpIHtcbiAgdmFyIHdpbmRvdyA9IGdldFdpbmRvdyhlbGVtZW50KTtcbiAgdmFyIG9mZnNldFBhcmVudCA9IGdldFRydWVPZmZzZXRQYXJlbnQoZWxlbWVudCk7XG5cbiAgd2hpbGUgKG9mZnNldFBhcmVudCAmJiBpc1RhYmxlRWxlbWVudChvZmZzZXRQYXJlbnQpICYmIGdldENvbXB1dGVkU3R5bGUob2Zmc2V0UGFyZW50KS5wb3NpdGlvbiA9PT0gJ3N0YXRpYycpIHtcbiAgICBvZmZzZXRQYXJlbnQgPSBnZXRUcnVlT2Zmc2V0UGFyZW50KG9mZnNldFBhcmVudCk7XG4gIH1cblxuICBpZiAob2Zmc2V0UGFyZW50ICYmIChnZXROb2RlTmFtZShvZmZzZXRQYXJlbnQpID09PSAnaHRtbCcgfHwgZ2V0Tm9kZU5hbWUob2Zmc2V0UGFyZW50KSA9PT0gJ2JvZHknICYmIGdldENvbXB1dGVkU3R5bGUob2Zmc2V0UGFyZW50KS5wb3NpdGlvbiA9PT0gJ3N0YXRpYycpKSB7XG4gICAgcmV0dXJuIHdpbmRvdztcbiAgfVxuXG4gIHJldHVybiBvZmZzZXRQYXJlbnQgfHwgZ2V0Q29udGFpbmluZ0Jsb2NrKGVsZW1lbnQpIHx8IHdpbmRvdztcbn0iLCJpbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4vZ2V0Tm9kZU5hbWUuanNcIjtcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgeyBpc1NoYWRvd1Jvb3QgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRQYXJlbnROb2RlKGVsZW1lbnQpIHtcbiAgaWYgKGdldE5vZGVOYW1lKGVsZW1lbnQpID09PSAnaHRtbCcpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHJldHVybiAoLy8gdGhpcyBpcyBhIHF1aWNrZXIgKGJ1dCBsZXNzIHR5cGUgc2FmZSkgd2F5IHRvIHNhdmUgcXVpdGUgc29tZSBieXRlcyBmcm9tIHRoZSBidW5kbGVcbiAgICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1yZXR1cm5dXG4gICAgLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddXG4gICAgZWxlbWVudC5hc3NpZ25lZFNsb3QgfHwgLy8gc3RlcCBpbnRvIHRoZSBzaGFkb3cgRE9NIG9mIHRoZSBwYXJlbnQgb2YgYSBzbG90dGVkIG5vZGVcbiAgICBlbGVtZW50LnBhcmVudE5vZGUgfHwgKCAvLyBET00gRWxlbWVudCBkZXRlY3RlZFxuICAgIGlzU2hhZG93Um9vdChlbGVtZW50KSA/IGVsZW1lbnQuaG9zdCA6IG51bGwpIHx8IC8vIFNoYWRvd1Jvb3QgZGV0ZWN0ZWRcbiAgICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1jYWxsXTogSFRNTEVsZW1lbnQgaXMgYSBOb2RlXG4gICAgZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpIC8vIGZhbGxiYWNrXG5cbiAgKTtcbn0iLCJpbXBvcnQgZ2V0UGFyZW50Tm9kZSBmcm9tIFwiLi9nZXRQYXJlbnROb2RlLmpzXCI7XG5pbXBvcnQgaXNTY3JvbGxQYXJlbnQgZnJvbSBcIi4vaXNTY3JvbGxQYXJlbnQuanNcIjtcbmltcG9ydCBnZXROb2RlTmFtZSBmcm9tIFwiLi9nZXROb2RlTmFtZS5qc1wiO1xuaW1wb3J0IHsgaXNIVE1MRWxlbWVudCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFNjcm9sbFBhcmVudChub2RlKSB7XG4gIGlmIChbJ2h0bWwnLCAnYm9keScsICcjZG9jdW1lbnQnXS5pbmRleE9mKGdldE5vZGVOYW1lKG5vZGUpKSA+PSAwKSB7XG4gICAgLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtcmV0dXJuXTogYXNzdW1lIGJvZHkgaXMgYWx3YXlzIGF2YWlsYWJsZVxuICAgIHJldHVybiBub2RlLm93bmVyRG9jdW1lbnQuYm9keTtcbiAgfVxuXG4gIGlmIChpc0hUTUxFbGVtZW50KG5vZGUpICYmIGlzU2Nyb2xsUGFyZW50KG5vZGUpKSB7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICByZXR1cm4gZ2V0U2Nyb2xsUGFyZW50KGdldFBhcmVudE5vZGUobm9kZSkpO1xufSIsImltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vZ2V0V2luZG93LmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IGdldFdpbmRvd1Njcm9sbEJhclggZnJvbSBcIi4vZ2V0V2luZG93U2Nyb2xsQmFyWC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Vmlld3BvcnRSZWN0KGVsZW1lbnQpIHtcbiAgdmFyIHdpbiA9IGdldFdpbmRvdyhlbGVtZW50KTtcbiAgdmFyIGh0bWwgPSBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCk7XG4gIHZhciB2aXN1YWxWaWV3cG9ydCA9IHdpbi52aXN1YWxWaWV3cG9ydDtcbiAgdmFyIHdpZHRoID0gaHRtbC5jbGllbnRXaWR0aDtcbiAgdmFyIGhlaWdodCA9IGh0bWwuY2xpZW50SGVpZ2h0O1xuICB2YXIgeCA9IDA7XG4gIHZhciB5ID0gMDsgLy8gTkI6IFRoaXMgaXNuJ3Qgc3VwcG9ydGVkIG9uIGlPUyA8PSAxMi4gSWYgdGhlIGtleWJvYXJkIGlzIG9wZW4sIHRoZSBwb3BwZXJcbiAgLy8gY2FuIGJlIG9ic2N1cmVkIHVuZGVybmVhdGggaXQuXG4gIC8vIEFsc28sIGBodG1sLmNsaWVudEhlaWdodGAgYWRkcyB0aGUgYm90dG9tIGJhciBoZWlnaHQgaW4gU2FmYXJpIGlPUywgZXZlblxuICAvLyBpZiBpdCBpc24ndCBvcGVuLCBzbyBpZiB0aGlzIGlzbid0IGF2YWlsYWJsZSwgdGhlIHBvcHBlciB3aWxsIGJlIGRldGVjdGVkXG4gIC8vIHRvIG92ZXJmbG93IHRoZSBib3R0b20gb2YgdGhlIHNjcmVlbiB0b28gZWFybHkuXG5cbiAgaWYgKHZpc3VhbFZpZXdwb3J0KSB7XG4gICAgd2lkdGggPSB2aXN1YWxWaWV3cG9ydC53aWR0aDtcbiAgICBoZWlnaHQgPSB2aXN1YWxWaWV3cG9ydC5oZWlnaHQ7IC8vIFVzZXMgTGF5b3V0IFZpZXdwb3J0IChsaWtlIENocm9tZTsgU2FmYXJpIGRvZXMgbm90IGN1cnJlbnRseSlcbiAgICAvLyBJbiBDaHJvbWUsIGl0IHJldHVybnMgYSB2YWx1ZSB2ZXJ5IGNsb3NlIHRvIDAgKCsvLSkgYnV0IGNvbnRhaW5zIHJvdW5kaW5nXG4gICAgLy8gZXJyb3JzIGR1ZSB0byBmbG9hdGluZyBwb2ludCBudW1iZXJzLCBzbyB3ZSBuZWVkIHRvIGNoZWNrIHByZWNpc2lvbi5cbiAgICAvLyBTYWZhcmkgcmV0dXJucyBhIG51bWJlciA8PSAwLCB1c3VhbGx5IDwgLTEgd2hlbiBwaW5jaC16b29tZWRcbiAgICAvLyBGZWF0dXJlIGRldGVjdGlvbiBmYWlscyBpbiBtb2JpbGUgZW11bGF0aW9uIG1vZGUgaW4gQ2hyb21lLlxuICAgIC8vIE1hdGguYWJzKHdpbi5pbm5lcldpZHRoIC8gdmlzdWFsVmlld3BvcnQuc2NhbGUgLSB2aXN1YWxWaWV3cG9ydC53aWR0aCkgPFxuICAgIC8vIDAuMDAxXG4gICAgLy8gRmFsbGJhY2sgaGVyZTogXCJOb3QgU2FmYXJpXCIgdXNlckFnZW50XG5cbiAgICBpZiAoIS9eKCg/IWNocm9tZXxhbmRyb2lkKS4pKnNhZmFyaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcbiAgICAgIHggPSB2aXN1YWxWaWV3cG9ydC5vZmZzZXRMZWZ0O1xuICAgICAgeSA9IHZpc3VhbFZpZXdwb3J0Lm9mZnNldFRvcDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICB4OiB4ICsgZ2V0V2luZG93U2Nyb2xsQmFyWChlbGVtZW50KSxcbiAgICB5OiB5XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0V2luZG93KG5vZGUpIHtcbiAgaWYgKG5vZGUgPT0gbnVsbCkge1xuICAgIHJldHVybiB3aW5kb3c7XG4gIH1cblxuICBpZiAobm9kZS50b1N0cmluZygpICE9PSAnW29iamVjdCBXaW5kb3ddJykge1xuICAgIHZhciBvd25lckRvY3VtZW50ID0gbm9kZS5vd25lckRvY3VtZW50O1xuICAgIHJldHVybiBvd25lckRvY3VtZW50ID8gb3duZXJEb2N1bWVudC5kZWZhdWx0VmlldyB8fCB3aW5kb3cgOiB3aW5kb3c7XG4gIH1cblxuICByZXR1cm4gbm9kZTtcbn0iLCJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0V2luZG93U2Nyb2xsKG5vZGUpIHtcbiAgdmFyIHdpbiA9IGdldFdpbmRvdyhub2RlKTtcbiAgdmFyIHNjcm9sbExlZnQgPSB3aW4ucGFnZVhPZmZzZXQ7XG4gIHZhciBzY3JvbGxUb3AgPSB3aW4ucGFnZVlPZmZzZXQ7XG4gIHJldHVybiB7XG4gICAgc2Nyb2xsTGVmdDogc2Nyb2xsTGVmdCxcbiAgICBzY3JvbGxUb3A6IHNjcm9sbFRvcFxuICB9O1xufSIsImltcG9ydCBnZXRCb3VuZGluZ0NsaWVudFJlY3QgZnJvbSBcIi4vZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IGdldFdpbmRvd1Njcm9sbCBmcm9tIFwiLi9nZXRXaW5kb3dTY3JvbGwuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFdpbmRvd1Njcm9sbEJhclgoZWxlbWVudCkge1xuICAvLyBJZiA8aHRtbD4gaGFzIGEgQ1NTIHdpZHRoIGdyZWF0ZXIgdGhhbiB0aGUgdmlld3BvcnQsIHRoZW4gdGhpcyB3aWxsIGJlXG4gIC8vIGluY29ycmVjdCBmb3IgUlRMLlxuICAvLyBQb3BwZXIgMSBpcyBicm9rZW4gaW4gdGhpcyBjYXNlIGFuZCBuZXZlciBoYWQgYSBidWcgcmVwb3J0IHNvIGxldCdzIGFzc3VtZVxuICAvLyBpdCdzIG5vdCBhbiBpc3N1ZS4gSSBkb24ndCB0aGluayBhbnlvbmUgZXZlciBzcGVjaWZpZXMgd2lkdGggb24gPGh0bWw+XG4gIC8vIGFueXdheS5cbiAgLy8gQnJvd3NlcnMgd2hlcmUgdGhlIGxlZnQgc2Nyb2xsYmFyIGRvZXNuJ3QgY2F1c2UgYW4gaXNzdWUgcmVwb3J0IGAwYCBmb3JcbiAgLy8gdGhpcyAoZS5nLiBFZGdlIDIwMTksIElFMTEsIFNhZmFyaSlcbiAgcmV0dXJuIGdldEJvdW5kaW5nQ2xpZW50UmVjdChnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCkpLmxlZnQgKyBnZXRXaW5kb3dTY3JvbGwoZWxlbWVudCkuc2Nyb2xsTGVmdDtcbn0iLCJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuXG5mdW5jdGlvbiBpc0VsZW1lbnQobm9kZSkge1xuICB2YXIgT3duRWxlbWVudCA9IGdldFdpbmRvdyhub2RlKS5FbGVtZW50O1xuICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIE93bkVsZW1lbnQgfHwgbm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGlzSFRNTEVsZW1lbnQobm9kZSkge1xuICB2YXIgT3duRWxlbWVudCA9IGdldFdpbmRvdyhub2RlKS5IVE1MRWxlbWVudDtcbiAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBPd25FbGVtZW50IHx8IG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gaXNTaGFkb3dSb290KG5vZGUpIHtcbiAgLy8gSUUgMTEgaGFzIG5vIFNoYWRvd1Jvb3RcbiAgaWYgKHR5cGVvZiBTaGFkb3dSb290ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBPd25FbGVtZW50ID0gZ2V0V2luZG93KG5vZGUpLlNoYWRvd1Jvb3Q7XG4gIHJldHVybiBub2RlIGluc3RhbmNlb2YgT3duRWxlbWVudCB8fCBub2RlIGluc3RhbmNlb2YgU2hhZG93Um9vdDtcbn1cblxuZXhwb3J0IHsgaXNFbGVtZW50LCBpc0hUTUxFbGVtZW50LCBpc1NoYWRvd1Jvb3QgfTsiLCJpbXBvcnQgZ2V0Q29tcHV0ZWRTdHlsZSBmcm9tIFwiLi9nZXRDb21wdXRlZFN0eWxlLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1Njcm9sbFBhcmVudChlbGVtZW50KSB7XG4gIC8vIEZpcmVmb3ggd2FudHMgdXMgdG8gY2hlY2sgYC14YCBhbmQgYC15YCB2YXJpYXRpb25zIGFzIHdlbGxcbiAgdmFyIF9nZXRDb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KSxcbiAgICAgIG92ZXJmbG93ID0gX2dldENvbXB1dGVkU3R5bGUub3ZlcmZsb3csXG4gICAgICBvdmVyZmxvd1ggPSBfZ2V0Q29tcHV0ZWRTdHlsZS5vdmVyZmxvd1gsXG4gICAgICBvdmVyZmxvd1kgPSBfZ2V0Q29tcHV0ZWRTdHlsZS5vdmVyZmxvd1k7XG5cbiAgcmV0dXJuIC9hdXRvfHNjcm9sbHxvdmVybGF5fGhpZGRlbi8udGVzdChvdmVyZmxvdyArIG92ZXJmbG93WSArIG92ZXJmbG93WCk7XG59IiwiaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gXCIuL2dldE5vZGVOYW1lLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RhYmxlRWxlbWVudChlbGVtZW50KSB7XG4gIHJldHVybiBbJ3RhYmxlJywgJ3RkJywgJ3RoJ10uaW5kZXhPZihnZXROb2RlTmFtZShlbGVtZW50KSkgPj0gMDtcbn0iLCJpbXBvcnQgZ2V0U2Nyb2xsUGFyZW50IGZyb20gXCIuL2dldFNjcm9sbFBhcmVudC5qc1wiO1xuaW1wb3J0IGdldFBhcmVudE5vZGUgZnJvbSBcIi4vZ2V0UGFyZW50Tm9kZS5qc1wiO1xuaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcbmltcG9ydCBpc1Njcm9sbFBhcmVudCBmcm9tIFwiLi9pc1Njcm9sbFBhcmVudC5qc1wiO1xuLypcbmdpdmVuIGEgRE9NIGVsZW1lbnQsIHJldHVybiB0aGUgbGlzdCBvZiBhbGwgc2Nyb2xsIHBhcmVudHMsIHVwIHRoZSBsaXN0IG9mIGFuY2Vzb3JzXG51bnRpbCB3ZSBnZXQgdG8gdGhlIHRvcCB3aW5kb3cgb2JqZWN0LiBUaGlzIGxpc3QgaXMgd2hhdCB3ZSBhdHRhY2ggc2Nyb2xsIGxpc3RlbmVyc1xudG8sIGJlY2F1c2UgaWYgYW55IG9mIHRoZXNlIHBhcmVudCBlbGVtZW50cyBzY3JvbGwsIHdlJ2xsIG5lZWQgdG8gcmUtY2FsY3VsYXRlIHRoZVxucmVmZXJlbmNlIGVsZW1lbnQncyBwb3NpdGlvbi5cbiovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxpc3RTY3JvbGxQYXJlbnRzKGVsZW1lbnQsIGxpc3QpIHtcbiAgdmFyIF9lbGVtZW50JG93bmVyRG9jdW1lbjtcblxuICBpZiAobGlzdCA9PT0gdm9pZCAwKSB7XG4gICAgbGlzdCA9IFtdO1xuICB9XG5cbiAgdmFyIHNjcm9sbFBhcmVudCA9IGdldFNjcm9sbFBhcmVudChlbGVtZW50KTtcbiAgdmFyIGlzQm9keSA9IHNjcm9sbFBhcmVudCA9PT0gKChfZWxlbWVudCRvd25lckRvY3VtZW4gPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQpID09IG51bGwgPyB2b2lkIDAgOiBfZWxlbWVudCRvd25lckRvY3VtZW4uYm9keSk7XG4gIHZhciB3aW4gPSBnZXRXaW5kb3coc2Nyb2xsUGFyZW50KTtcbiAgdmFyIHRhcmdldCA9IGlzQm9keSA/IFt3aW5dLmNvbmNhdCh3aW4udmlzdWFsVmlld3BvcnQgfHwgW10sIGlzU2Nyb2xsUGFyZW50KHNjcm9sbFBhcmVudCkgPyBzY3JvbGxQYXJlbnQgOiBbXSkgOiBzY3JvbGxQYXJlbnQ7XG4gIHZhciB1cGRhdGVkTGlzdCA9IGxpc3QuY29uY2F0KHRhcmdldCk7XG4gIHJldHVybiBpc0JvZHkgPyB1cGRhdGVkTGlzdCA6IC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLWNhbGxdOiBpc0JvZHkgdGVsbHMgdXMgdGFyZ2V0IHdpbGwgYmUgYW4gSFRNTEVsZW1lbnQgaGVyZVxuICB1cGRhdGVkTGlzdC5jb25jYXQobGlzdFNjcm9sbFBhcmVudHMoZ2V0UGFyZW50Tm9kZSh0YXJnZXQpKSk7XG59IiwiZXhwb3J0IHZhciB0b3AgPSAndG9wJztcbmV4cG9ydCB2YXIgYm90dG9tID0gJ2JvdHRvbSc7XG5leHBvcnQgdmFyIHJpZ2h0ID0gJ3JpZ2h0JztcbmV4cG9ydCB2YXIgbGVmdCA9ICdsZWZ0JztcbmV4cG9ydCB2YXIgYXV0byA9ICdhdXRvJztcbmV4cG9ydCB2YXIgYmFzZVBsYWNlbWVudHMgPSBbdG9wLCBib3R0b20sIHJpZ2h0LCBsZWZ0XTtcbmV4cG9ydCB2YXIgc3RhcnQgPSAnc3RhcnQnO1xuZXhwb3J0IHZhciBlbmQgPSAnZW5kJztcbmV4cG9ydCB2YXIgY2xpcHBpbmdQYXJlbnRzID0gJ2NsaXBwaW5nUGFyZW50cyc7XG5leHBvcnQgdmFyIHZpZXdwb3J0ID0gJ3ZpZXdwb3J0JztcbmV4cG9ydCB2YXIgcG9wcGVyID0gJ3BvcHBlcic7XG5leHBvcnQgdmFyIHJlZmVyZW5jZSA9ICdyZWZlcmVuY2UnO1xuZXhwb3J0IHZhciB2YXJpYXRpb25QbGFjZW1lbnRzID0gLyojX19QVVJFX18qL2Jhc2VQbGFjZW1lbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIGFjYy5jb25jYXQoW3BsYWNlbWVudCArIFwiLVwiICsgc3RhcnQsIHBsYWNlbWVudCArIFwiLVwiICsgZW5kXSk7XG59LCBbXSk7XG5leHBvcnQgdmFyIHBsYWNlbWVudHMgPSAvKiNfX1BVUkVfXyovW10uY29uY2F0KGJhc2VQbGFjZW1lbnRzLCBbYXV0b10pLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIGFjYy5jb25jYXQoW3BsYWNlbWVudCwgcGxhY2VtZW50ICsgXCItXCIgKyBzdGFydCwgcGxhY2VtZW50ICsgXCItXCIgKyBlbmRdKTtcbn0sIFtdKTsgLy8gbW9kaWZpZXJzIHRoYXQgbmVlZCB0byByZWFkIHRoZSBET01cblxuZXhwb3J0IHZhciBiZWZvcmVSZWFkID0gJ2JlZm9yZVJlYWQnO1xuZXhwb3J0IHZhciByZWFkID0gJ3JlYWQnO1xuZXhwb3J0IHZhciBhZnRlclJlYWQgPSAnYWZ0ZXJSZWFkJzsgLy8gcHVyZS1sb2dpYyBtb2RpZmllcnNcblxuZXhwb3J0IHZhciBiZWZvcmVNYWluID0gJ2JlZm9yZU1haW4nO1xuZXhwb3J0IHZhciBtYWluID0gJ21haW4nO1xuZXhwb3J0IHZhciBhZnRlck1haW4gPSAnYWZ0ZXJNYWluJzsgLy8gbW9kaWZpZXIgd2l0aCB0aGUgcHVycG9zZSB0byB3cml0ZSB0byB0aGUgRE9NIChvciB3cml0ZSBpbnRvIGEgZnJhbWV3b3JrIHN0YXRlKVxuXG5leHBvcnQgdmFyIGJlZm9yZVdyaXRlID0gJ2JlZm9yZVdyaXRlJztcbmV4cG9ydCB2YXIgd3JpdGUgPSAnd3JpdGUnO1xuZXhwb3J0IHZhciBhZnRlcldyaXRlID0gJ2FmdGVyV3JpdGUnO1xuZXhwb3J0IHZhciBtb2RpZmllclBoYXNlcyA9IFtiZWZvcmVSZWFkLCByZWFkLCBhZnRlclJlYWQsIGJlZm9yZU1haW4sIG1haW4sIGFmdGVyTWFpbiwgYmVmb3JlV3JpdGUsIHdyaXRlLCBhZnRlcldyaXRlXTsiLCJleHBvcnQgKiBmcm9tIFwiLi9lbnVtcy5qc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vbW9kaWZpZXJzL2luZGV4LmpzXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZXhwb3J0IHsgcG9wcGVyR2VuZXJhdG9yLCBkZXRlY3RPdmVyZmxvdywgY3JlYXRlUG9wcGVyIGFzIGNyZWF0ZVBvcHBlckJhc2UgfSBmcm9tIFwiLi9jcmVhdGVQb3BwZXIuanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5leHBvcnQgeyBjcmVhdGVQb3BwZXIgfSBmcm9tIFwiLi9wb3BwZXIuanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5leHBvcnQgeyBjcmVhdGVQb3BwZXIgYXMgY3JlYXRlUG9wcGVyTGl0ZSB9IGZyb20gXCIuL3BvcHBlci1saXRlLmpzXCI7IiwiaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0Tm9kZU5hbWUuanNcIjtcbmltcG9ydCB7IGlzSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi4vZG9tLXV0aWxzL2luc3RhbmNlT2YuanNcIjsgLy8gVGhpcyBtb2RpZmllciB0YWtlcyB0aGUgc3R5bGVzIHByZXBhcmVkIGJ5IHRoZSBgY29tcHV0ZVN0eWxlc2AgbW9kaWZpZXJcbi8vIGFuZCBhcHBsaWVzIHRoZW0gdG8gdGhlIEhUTUxFbGVtZW50cyBzdWNoIGFzIHBvcHBlciBhbmQgYXJyb3dcblxuZnVuY3Rpb24gYXBwbHlTdHlsZXMoX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlO1xuICBPYmplY3Qua2V5cyhzdGF0ZS5lbGVtZW50cykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgIHZhciBzdHlsZSA9IHN0YXRlLnN0eWxlc1tuYW1lXSB8fCB7fTtcbiAgICB2YXIgYXR0cmlidXRlcyA9IHN0YXRlLmF0dHJpYnV0ZXNbbmFtZV0gfHwge307XG4gICAgdmFyIGVsZW1lbnQgPSBzdGF0ZS5lbGVtZW50c1tuYW1lXTsgLy8gYXJyb3cgaXMgb3B0aW9uYWwgKyB2aXJ0dWFsIGVsZW1lbnRzXG5cbiAgICBpZiAoIWlzSFRNTEVsZW1lbnQoZWxlbWVudCkgfHwgIWdldE5vZGVOYW1lKGVsZW1lbnQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBGbG93IGRvZXNuJ3Qgc3VwcG9ydCB0byBleHRlbmQgdGhpcyBwcm9wZXJ0eSwgYnV0IGl0J3MgdGhlIG1vc3RcbiAgICAvLyBlZmZlY3RpdmUgd2F5IHRvIGFwcGx5IHN0eWxlcyB0byBhbiBIVE1MRWxlbWVudFxuICAgIC8vICRGbG93Rml4TWVbY2Fubm90LXdyaXRlXVxuXG5cbiAgICBPYmplY3QuYXNzaWduKGVsZW1lbnQuc3R5bGUsIHN0eWxlKTtcbiAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICB2YXIgdmFsdWUgPSBhdHRyaWJ1dGVzW25hbWVdO1xuXG4gICAgICBpZiAodmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUgPT09IHRydWUgPyAnJyA6IHZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGVmZmVjdChfcmVmMikge1xuICB2YXIgc3RhdGUgPSBfcmVmMi5zdGF0ZTtcbiAgdmFyIGluaXRpYWxTdHlsZXMgPSB7XG4gICAgcG9wcGVyOiB7XG4gICAgICBwb3NpdGlvbjogc3RhdGUub3B0aW9ucy5zdHJhdGVneSxcbiAgICAgIGxlZnQ6ICcwJyxcbiAgICAgIHRvcDogJzAnLFxuICAgICAgbWFyZ2luOiAnMCdcbiAgICB9LFxuICAgIGFycm93OiB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJ1xuICAgIH0sXG4gICAgcmVmZXJlbmNlOiB7fVxuICB9O1xuICBPYmplY3QuYXNzaWduKHN0YXRlLmVsZW1lbnRzLnBvcHBlci5zdHlsZSwgaW5pdGlhbFN0eWxlcy5wb3BwZXIpO1xuICBzdGF0ZS5zdHlsZXMgPSBpbml0aWFsU3R5bGVzO1xuXG4gIGlmIChzdGF0ZS5lbGVtZW50cy5hcnJvdykge1xuICAgIE9iamVjdC5hc3NpZ24oc3RhdGUuZWxlbWVudHMuYXJyb3cuc3R5bGUsIGluaXRpYWxTdHlsZXMuYXJyb3cpO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBPYmplY3Qua2V5cyhzdGF0ZS5lbGVtZW50cykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgdmFyIGVsZW1lbnQgPSBzdGF0ZS5lbGVtZW50c1tuYW1lXTtcbiAgICAgIHZhciBhdHRyaWJ1dGVzID0gc3RhdGUuYXR0cmlidXRlc1tuYW1lXSB8fCB7fTtcbiAgICAgIHZhciBzdHlsZVByb3BlcnRpZXMgPSBPYmplY3Qua2V5cyhzdGF0ZS5zdHlsZXMuaGFzT3duUHJvcGVydHkobmFtZSkgPyBzdGF0ZS5zdHlsZXNbbmFtZV0gOiBpbml0aWFsU3R5bGVzW25hbWVdKTsgLy8gU2V0IGFsbCB2YWx1ZXMgdG8gYW4gZW1wdHkgc3RyaW5nIHRvIHVuc2V0IHRoZW1cblxuICAgICAgdmFyIHN0eWxlID0gc3R5bGVQcm9wZXJ0aWVzLnJlZHVjZShmdW5jdGlvbiAoc3R5bGUsIHByb3BlcnR5KSB7XG4gICAgICAgIHN0eWxlW3Byb3BlcnR5XSA9ICcnO1xuICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgICB9LCB7fSk7IC8vIGFycm93IGlzIG9wdGlvbmFsICsgdmlydHVhbCBlbGVtZW50c1xuXG4gICAgICBpZiAoIWlzSFRNTEVsZW1lbnQoZWxlbWVudCkgfHwgIWdldE5vZGVOYW1lKGVsZW1lbnQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgT2JqZWN0LmFzc2lnbihlbGVtZW50LnN0eWxlLCBzdHlsZSk7XG4gICAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyaWJ1dGUpIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnYXBwbHlTdHlsZXMnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ3dyaXRlJyxcbiAgZm46IGFwcGx5U3R5bGVzLFxuICBlZmZlY3Q6IGVmZmVjdCxcbiAgcmVxdWlyZXM6IFsnY29tcHV0ZVN0eWxlcyddXG59OyIsImltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRCYXNlUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgZ2V0TGF5b3V0UmVjdCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldExheW91dFJlY3QuanNcIjtcbmltcG9ydCBjb250YWlucyBmcm9tIFwiLi4vZG9tLXV0aWxzL2NvbnRhaW5zLmpzXCI7XG5pbXBvcnQgZ2V0T2Zmc2V0UGFyZW50IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0T2Zmc2V0UGFyZW50LmpzXCI7XG5pbXBvcnQgZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQuanNcIjtcbmltcG9ydCB3aXRoaW4gZnJvbSBcIi4uL3V0aWxzL3dpdGhpbi5qc1wiO1xuaW1wb3J0IG1lcmdlUGFkZGluZ09iamVjdCBmcm9tIFwiLi4vdXRpbHMvbWVyZ2VQYWRkaW5nT2JqZWN0LmpzXCI7XG5pbXBvcnQgZXhwYW5kVG9IYXNoTWFwIGZyb20gXCIuLi91dGlscy9leHBhbmRUb0hhc2hNYXAuanNcIjtcbmltcG9ydCB7IGxlZnQsIHJpZ2h0LCBiYXNlUGxhY2VtZW50cywgdG9wLCBib3R0b20gfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCB7IGlzSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi4vZG9tLXV0aWxzL2luc3RhbmNlT2YuanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG52YXIgdG9QYWRkaW5nT2JqZWN0ID0gZnVuY3Rpb24gdG9QYWRkaW5nT2JqZWN0KHBhZGRpbmcsIHN0YXRlKSB7XG4gIHBhZGRpbmcgPSB0eXBlb2YgcGFkZGluZyA9PT0gJ2Z1bmN0aW9uJyA/IHBhZGRpbmcoT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUucmVjdHMsIHtcbiAgICBwbGFjZW1lbnQ6IHN0YXRlLnBsYWNlbWVudFxuICB9KSkgOiBwYWRkaW5nO1xuICByZXR1cm4gbWVyZ2VQYWRkaW5nT2JqZWN0KHR5cGVvZiBwYWRkaW5nICE9PSAnbnVtYmVyJyA/IHBhZGRpbmcgOiBleHBhbmRUb0hhc2hNYXAocGFkZGluZywgYmFzZVBsYWNlbWVudHMpKTtcbn07XG5cbmZ1bmN0aW9uIGFycm93KF9yZWYpIHtcbiAgdmFyIF9zdGF0ZSRtb2RpZmllcnNEYXRhJDtcblxuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnM7XG4gIHZhciBhcnJvd0VsZW1lbnQgPSBzdGF0ZS5lbGVtZW50cy5hcnJvdztcbiAgdmFyIHBvcHBlck9mZnNldHMgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHM7XG4gIHZhciBiYXNlUGxhY2VtZW50ID0gZ2V0QmFzZVBsYWNlbWVudChzdGF0ZS5wbGFjZW1lbnQpO1xuICB2YXIgYXhpcyA9IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChiYXNlUGxhY2VtZW50KTtcbiAgdmFyIGlzVmVydGljYWwgPSBbbGVmdCwgcmlnaHRdLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgPj0gMDtcbiAgdmFyIGxlbiA9IGlzVmVydGljYWwgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG5cbiAgaWYgKCFhcnJvd0VsZW1lbnQgfHwgIXBvcHBlck9mZnNldHMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgcGFkZGluZ09iamVjdCA9IHRvUGFkZGluZ09iamVjdChvcHRpb25zLnBhZGRpbmcsIHN0YXRlKTtcbiAgdmFyIGFycm93UmVjdCA9IGdldExheW91dFJlY3QoYXJyb3dFbGVtZW50KTtcbiAgdmFyIG1pblByb3AgPSBheGlzID09PSAneScgPyB0b3AgOiBsZWZ0O1xuICB2YXIgbWF4UHJvcCA9IGF4aXMgPT09ICd5JyA/IGJvdHRvbSA6IHJpZ2h0O1xuICB2YXIgZW5kRGlmZiA9IHN0YXRlLnJlY3RzLnJlZmVyZW5jZVtsZW5dICsgc3RhdGUucmVjdHMucmVmZXJlbmNlW2F4aXNdIC0gcG9wcGVyT2Zmc2V0c1theGlzXSAtIHN0YXRlLnJlY3RzLnBvcHBlcltsZW5dO1xuICB2YXIgc3RhcnREaWZmID0gcG9wcGVyT2Zmc2V0c1theGlzXSAtIHN0YXRlLnJlY3RzLnJlZmVyZW5jZVtheGlzXTtcbiAgdmFyIGFycm93T2Zmc2V0UGFyZW50ID0gZ2V0T2Zmc2V0UGFyZW50KGFycm93RWxlbWVudCk7XG4gIHZhciBjbGllbnRTaXplID0gYXJyb3dPZmZzZXRQYXJlbnQgPyBheGlzID09PSAneScgPyBhcnJvd09mZnNldFBhcmVudC5jbGllbnRIZWlnaHQgfHwgMCA6IGFycm93T2Zmc2V0UGFyZW50LmNsaWVudFdpZHRoIHx8IDAgOiAwO1xuICB2YXIgY2VudGVyVG9SZWZlcmVuY2UgPSBlbmREaWZmIC8gMiAtIHN0YXJ0RGlmZiAvIDI7IC8vIE1ha2Ugc3VyZSB0aGUgYXJyb3cgZG9lc24ndCBvdmVyZmxvdyB0aGUgcG9wcGVyIGlmIHRoZSBjZW50ZXIgcG9pbnQgaXNcbiAgLy8gb3V0c2lkZSBvZiB0aGUgcG9wcGVyIGJvdW5kc1xuXG4gIHZhciBtaW4gPSBwYWRkaW5nT2JqZWN0W21pblByb3BdO1xuICB2YXIgbWF4ID0gY2xpZW50U2l6ZSAtIGFycm93UmVjdFtsZW5dIC0gcGFkZGluZ09iamVjdFttYXhQcm9wXTtcbiAgdmFyIGNlbnRlciA9IGNsaWVudFNpemUgLyAyIC0gYXJyb3dSZWN0W2xlbl0gLyAyICsgY2VudGVyVG9SZWZlcmVuY2U7XG4gIHZhciBvZmZzZXQgPSB3aXRoaW4obWluLCBjZW50ZXIsIG1heCk7IC8vIFByZXZlbnRzIGJyZWFraW5nIHN5bnRheCBoaWdobGlnaHRpbmcuLi5cblxuICB2YXIgYXhpc1Byb3AgPSBheGlzO1xuICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0gKF9zdGF0ZSRtb2RpZmllcnNEYXRhJCA9IHt9LCBfc3RhdGUkbW9kaWZpZXJzRGF0YSRbYXhpc1Byb3BdID0gb2Zmc2V0LCBfc3RhdGUkbW9kaWZpZXJzRGF0YSQuY2VudGVyT2Zmc2V0ID0gb2Zmc2V0IC0gY2VudGVyLCBfc3RhdGUkbW9kaWZpZXJzRGF0YSQpO1xufVxuXG5mdW5jdGlvbiBlZmZlY3QoX3JlZjIpIHtcbiAgdmFyIHN0YXRlID0gX3JlZjIuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZjIub3B0aW9ucztcbiAgdmFyIF9vcHRpb25zJGVsZW1lbnQgPSBvcHRpb25zLmVsZW1lbnQsXG4gICAgICBhcnJvd0VsZW1lbnQgPSBfb3B0aW9ucyRlbGVtZW50ID09PSB2b2lkIDAgPyAnW2RhdGEtcG9wcGVyLWFycm93XScgOiBfb3B0aW9ucyRlbGVtZW50O1xuXG4gIGlmIChhcnJvd0VsZW1lbnQgPT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfSAvLyBDU1Mgc2VsZWN0b3JcblxuXG4gIGlmICh0eXBlb2YgYXJyb3dFbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgIGFycm93RWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzLnBvcHBlci5xdWVyeVNlbGVjdG9yKGFycm93RWxlbWVudCk7XG5cbiAgICBpZiAoIWFycm93RWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICBpZiAoIWlzSFRNTEVsZW1lbnQoYXJyb3dFbGVtZW50KSkge1xuICAgICAgY29uc29sZS5lcnJvcihbJ1BvcHBlcjogXCJhcnJvd1wiIGVsZW1lbnQgbXVzdCBiZSBhbiBIVE1MRWxlbWVudCAobm90IGFuIFNWR0VsZW1lbnQpLicsICdUbyB1c2UgYW4gU1ZHIGFycm93LCB3cmFwIGl0IGluIGFuIEhUTUxFbGVtZW50IHRoYXQgd2lsbCBiZSB1c2VkIGFzJywgJ3RoZSBhcnJvdy4nXS5qb2luKCcgJykpO1xuICAgIH1cbiAgfVxuXG4gIGlmICghY29udGFpbnMoc3RhdGUuZWxlbWVudHMucG9wcGVyLCBhcnJvd0VsZW1lbnQpKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgY29uc29sZS5lcnJvcihbJ1BvcHBlcjogXCJhcnJvd1wiIG1vZGlmaWVyXFwncyBgZWxlbWVudGAgbXVzdCBiZSBhIGNoaWxkIG9mIHRoZSBwb3BwZXInLCAnZWxlbWVudC4nXS5qb2luKCcgJykpO1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfVxuXG4gIHN0YXRlLmVsZW1lbnRzLmFycm93ID0gYXJyb3dFbGVtZW50O1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnYXJyb3cnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ21haW4nLFxuICBmbjogYXJyb3csXG4gIGVmZmVjdDogZWZmZWN0LFxuICByZXF1aXJlczogWydwb3BwZXJPZmZzZXRzJ10sXG4gIHJlcXVpcmVzSWZFeGlzdHM6IFsncHJldmVudE92ZXJmbG93J11cbn07IiwiaW1wb3J0IHsgdG9wLCBsZWZ0LCByaWdodCwgYm90dG9tIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5pbXBvcnQgZ2V0T2Zmc2V0UGFyZW50IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0T2Zmc2V0UGFyZW50LmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0V2luZG93LmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgZ2V0Q29tcHV0ZWRTdHlsZSBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldENvbXB1dGVkU3R5bGUuanNcIjtcbmltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRCYXNlUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgeyByb3VuZCB9IGZyb20gXCIuLi91dGlscy9tYXRoLmpzXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxudmFyIHVuc2V0U2lkZXMgPSB7XG4gIHRvcDogJ2F1dG8nLFxuICByaWdodDogJ2F1dG8nLFxuICBib3R0b206ICdhdXRvJyxcbiAgbGVmdDogJ2F1dG8nXG59OyAvLyBSb3VuZCB0aGUgb2Zmc2V0cyB0byB0aGUgbmVhcmVzdCBzdWl0YWJsZSBzdWJwaXhlbCBiYXNlZCBvbiB0aGUgRFBSLlxuLy8gWm9vbWluZyBjYW4gY2hhbmdlIHRoZSBEUFIsIGJ1dCBpdCBzZWVtcyB0byByZXBvcnQgYSB2YWx1ZSB0aGF0IHdpbGxcbi8vIGNsZWFubHkgZGl2aWRlIHRoZSB2YWx1ZXMgaW50byB0aGUgYXBwcm9wcmlhdGUgc3VicGl4ZWxzLlxuXG5mdW5jdGlvbiByb3VuZE9mZnNldHNCeURQUihfcmVmKSB7XG4gIHZhciB4ID0gX3JlZi54LFxuICAgICAgeSA9IF9yZWYueTtcbiAgdmFyIHdpbiA9IHdpbmRvdztcbiAgdmFyIGRwciA9IHdpbi5kZXZpY2VQaXhlbFJhdGlvIHx8IDE7XG4gIHJldHVybiB7XG4gICAgeDogcm91bmQocm91bmQoeCAqIGRwcikgLyBkcHIpIHx8IDAsXG4gICAgeTogcm91bmQocm91bmQoeSAqIGRwcikgLyBkcHIpIHx8IDBcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hcFRvU3R5bGVzKF9yZWYyKSB7XG4gIHZhciBfT2JqZWN0JGFzc2lnbjI7XG5cbiAgdmFyIHBvcHBlciA9IF9yZWYyLnBvcHBlcixcbiAgICAgIHBvcHBlclJlY3QgPSBfcmVmMi5wb3BwZXJSZWN0LFxuICAgICAgcGxhY2VtZW50ID0gX3JlZjIucGxhY2VtZW50LFxuICAgICAgb2Zmc2V0cyA9IF9yZWYyLm9mZnNldHMsXG4gICAgICBwb3NpdGlvbiA9IF9yZWYyLnBvc2l0aW9uLFxuICAgICAgZ3B1QWNjZWxlcmF0aW9uID0gX3JlZjIuZ3B1QWNjZWxlcmF0aW9uLFxuICAgICAgYWRhcHRpdmUgPSBfcmVmMi5hZGFwdGl2ZSxcbiAgICAgIHJvdW5kT2Zmc2V0cyA9IF9yZWYyLnJvdW5kT2Zmc2V0cztcblxuICB2YXIgX3JlZjMgPSByb3VuZE9mZnNldHMgPT09IHRydWUgPyByb3VuZE9mZnNldHNCeURQUihvZmZzZXRzKSA6IHR5cGVvZiByb3VuZE9mZnNldHMgPT09ICdmdW5jdGlvbicgPyByb3VuZE9mZnNldHMob2Zmc2V0cykgOiBvZmZzZXRzLFxuICAgICAgX3JlZjMkeCA9IF9yZWYzLngsXG4gICAgICB4ID0gX3JlZjMkeCA9PT0gdm9pZCAwID8gMCA6IF9yZWYzJHgsXG4gICAgICBfcmVmMyR5ID0gX3JlZjMueSxcbiAgICAgIHkgPSBfcmVmMyR5ID09PSB2b2lkIDAgPyAwIDogX3JlZjMkeTtcblxuICB2YXIgaGFzWCA9IG9mZnNldHMuaGFzT3duUHJvcGVydHkoJ3gnKTtcbiAgdmFyIGhhc1kgPSBvZmZzZXRzLmhhc093blByb3BlcnR5KCd5Jyk7XG4gIHZhciBzaWRlWCA9IGxlZnQ7XG4gIHZhciBzaWRlWSA9IHRvcDtcbiAgdmFyIHdpbiA9IHdpbmRvdztcblxuICBpZiAoYWRhcHRpdmUpIHtcbiAgICB2YXIgb2Zmc2V0UGFyZW50ID0gZ2V0T2Zmc2V0UGFyZW50KHBvcHBlcik7XG4gICAgdmFyIGhlaWdodFByb3AgPSAnY2xpZW50SGVpZ2h0JztcbiAgICB2YXIgd2lkdGhQcm9wID0gJ2NsaWVudFdpZHRoJztcblxuICAgIGlmIChvZmZzZXRQYXJlbnQgPT09IGdldFdpbmRvdyhwb3BwZXIpKSB7XG4gICAgICBvZmZzZXRQYXJlbnQgPSBnZXREb2N1bWVudEVsZW1lbnQocG9wcGVyKTtcblxuICAgICAgaWYgKGdldENvbXB1dGVkU3R5bGUob2Zmc2V0UGFyZW50KS5wb3NpdGlvbiAhPT0gJ3N0YXRpYycpIHtcbiAgICAgICAgaGVpZ2h0UHJvcCA9ICdzY3JvbGxIZWlnaHQnO1xuICAgICAgICB3aWR0aFByb3AgPSAnc2Nyb2xsV2lkdGgnO1xuICAgICAgfVxuICAgIH0gLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtY2FzdF06IGZvcmNlIHR5cGUgcmVmaW5lbWVudCwgd2UgY29tcGFyZSBvZmZzZXRQYXJlbnQgd2l0aCB3aW5kb3cgYWJvdmUsIGJ1dCBGbG93IGRvZXNuJ3QgZGV0ZWN0IGl0XG5cblxuICAgIG9mZnNldFBhcmVudCA9IG9mZnNldFBhcmVudDtcblxuICAgIGlmIChwbGFjZW1lbnQgPT09IHRvcCkge1xuICAgICAgc2lkZVkgPSBib3R0b207IC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxuXG4gICAgICB5IC09IG9mZnNldFBhcmVudFtoZWlnaHRQcm9wXSAtIHBvcHBlclJlY3QuaGVpZ2h0O1xuICAgICAgeSAqPSBncHVBY2NlbGVyYXRpb24gPyAxIDogLTE7XG4gICAgfVxuXG4gICAgaWYgKHBsYWNlbWVudCA9PT0gbGVmdCkge1xuICAgICAgc2lkZVggPSByaWdodDsgLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddXG5cbiAgICAgIHggLT0gb2Zmc2V0UGFyZW50W3dpZHRoUHJvcF0gLSBwb3BwZXJSZWN0LndpZHRoO1xuICAgICAgeCAqPSBncHVBY2NlbGVyYXRpb24gPyAxIDogLTE7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbW1vblN0eWxlcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIHBvc2l0aW9uOiBwb3NpdGlvblxuICB9LCBhZGFwdGl2ZSAmJiB1bnNldFNpZGVzKTtcblxuICBpZiAoZ3B1QWNjZWxlcmF0aW9uKSB7XG4gICAgdmFyIF9PYmplY3QkYXNzaWduO1xuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGNvbW1vblN0eWxlcywgKF9PYmplY3QkYXNzaWduID0ge30sIF9PYmplY3QkYXNzaWduW3NpZGVZXSA9IGhhc1kgPyAnMCcgOiAnJywgX09iamVjdCRhc3NpZ25bc2lkZVhdID0gaGFzWCA/ICcwJyA6ICcnLCBfT2JqZWN0JGFzc2lnbi50cmFuc2Zvcm0gPSAod2luLmRldmljZVBpeGVsUmF0aW8gfHwgMSkgPCAyID8gXCJ0cmFuc2xhdGUoXCIgKyB4ICsgXCJweCwgXCIgKyB5ICsgXCJweClcIiA6IFwidHJhbnNsYXRlM2QoXCIgKyB4ICsgXCJweCwgXCIgKyB5ICsgXCJweCwgMClcIiwgX09iamVjdCRhc3NpZ24pKTtcbiAgfVxuXG4gIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBjb21tb25TdHlsZXMsIChfT2JqZWN0JGFzc2lnbjIgPSB7fSwgX09iamVjdCRhc3NpZ24yW3NpZGVZXSA9IGhhc1kgPyB5ICsgXCJweFwiIDogJycsIF9PYmplY3QkYXNzaWduMltzaWRlWF0gPSBoYXNYID8geCArIFwicHhcIiA6ICcnLCBfT2JqZWN0JGFzc2lnbjIudHJhbnNmb3JtID0gJycsIF9PYmplY3QkYXNzaWduMikpO1xufVxuXG5mdW5jdGlvbiBjb21wdXRlU3R5bGVzKF9yZWY0KSB7XG4gIHZhciBzdGF0ZSA9IF9yZWY0LnN0YXRlLFxuICAgICAgb3B0aW9ucyA9IF9yZWY0Lm9wdGlvbnM7XG4gIHZhciBfb3B0aW9ucyRncHVBY2NlbGVyYXQgPSBvcHRpb25zLmdwdUFjY2VsZXJhdGlvbixcbiAgICAgIGdwdUFjY2VsZXJhdGlvbiA9IF9vcHRpb25zJGdwdUFjY2VsZXJhdCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJGdwdUFjY2VsZXJhdCxcbiAgICAgIF9vcHRpb25zJGFkYXB0aXZlID0gb3B0aW9ucy5hZGFwdGl2ZSxcbiAgICAgIGFkYXB0aXZlID0gX29wdGlvbnMkYWRhcHRpdmUgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRhZGFwdGl2ZSxcbiAgICAgIF9vcHRpb25zJHJvdW5kT2Zmc2V0cyA9IG9wdGlvbnMucm91bmRPZmZzZXRzLFxuICAgICAgcm91bmRPZmZzZXRzID0gX29wdGlvbnMkcm91bmRPZmZzZXRzID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkcm91bmRPZmZzZXRzO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICB2YXIgdHJhbnNpdGlvblByb3BlcnR5ID0gZ2V0Q29tcHV0ZWRTdHlsZShzdGF0ZS5lbGVtZW50cy5wb3BwZXIpLnRyYW5zaXRpb25Qcm9wZXJ0eSB8fCAnJztcblxuICAgIGlmIChhZGFwdGl2ZSAmJiBbJ3RyYW5zZm9ybScsICd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnXS5zb21lKGZ1bmN0aW9uIChwcm9wZXJ0eSkge1xuICAgICAgcmV0dXJuIHRyYW5zaXRpb25Qcm9wZXJ0eS5pbmRleE9mKHByb3BlcnR5KSA+PSAwO1xuICAgIH0pKSB7XG4gICAgICBjb25zb2xlLndhcm4oWydQb3BwZXI6IERldGVjdGVkIENTUyB0cmFuc2l0aW9ucyBvbiBhdCBsZWFzdCBvbmUgb2YgdGhlIGZvbGxvd2luZycsICdDU1MgcHJvcGVydGllczogXCJ0cmFuc2Zvcm1cIiwgXCJ0b3BcIiwgXCJyaWdodFwiLCBcImJvdHRvbVwiLCBcImxlZnRcIi4nLCAnXFxuXFxuJywgJ0Rpc2FibGUgdGhlIFwiY29tcHV0ZVN0eWxlc1wiIG1vZGlmaWVyXFwncyBgYWRhcHRpdmVgIG9wdGlvbiB0byBhbGxvdycsICdmb3Igc21vb3RoIHRyYW5zaXRpb25zLCBvciByZW1vdmUgdGhlc2UgcHJvcGVydGllcyBmcm9tIHRoZSBDU1MnLCAndHJhbnNpdGlvbiBkZWNsYXJhdGlvbiBvbiB0aGUgcG9wcGVyIGVsZW1lbnQgaWYgb25seSB0cmFuc2l0aW9uaW5nJywgJ29wYWNpdHkgb3IgYmFja2dyb3VuZC1jb2xvciBmb3IgZXhhbXBsZS4nLCAnXFxuXFxuJywgJ1dlIHJlY29tbWVuZCB1c2luZyB0aGUgcG9wcGVyIGVsZW1lbnQgYXMgYSB3cmFwcGVyIGFyb3VuZCBhbiBpbm5lcicsICdlbGVtZW50IHRoYXQgY2FuIGhhdmUgYW55IENTUyBwcm9wZXJ0eSB0cmFuc2l0aW9uZWQgZm9yIGFuaW1hdGlvbnMuJ10uam9pbignICcpKTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29tbW9uU3R5bGVzID0ge1xuICAgIHBsYWNlbWVudDogZ2V0QmFzZVBsYWNlbWVudChzdGF0ZS5wbGFjZW1lbnQpLFxuICAgIHBvcHBlcjogc3RhdGUuZWxlbWVudHMucG9wcGVyLFxuICAgIHBvcHBlclJlY3Q6IHN0YXRlLnJlY3RzLnBvcHBlcixcbiAgICBncHVBY2NlbGVyYXRpb246IGdwdUFjY2VsZXJhdGlvblxuICB9O1xuXG4gIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMgIT0gbnVsbCkge1xuICAgIHN0YXRlLnN0eWxlcy5wb3BwZXIgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5zdHlsZXMucG9wcGVyLCBtYXBUb1N0eWxlcyhPYmplY3QuYXNzaWduKHt9LCBjb21tb25TdHlsZXMsIHtcbiAgICAgIG9mZnNldHM6IHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cyxcbiAgICAgIHBvc2l0aW9uOiBzdGF0ZS5vcHRpb25zLnN0cmF0ZWd5LFxuICAgICAgYWRhcHRpdmU6IGFkYXB0aXZlLFxuICAgICAgcm91bmRPZmZzZXRzOiByb3VuZE9mZnNldHNcbiAgICB9KSkpO1xuICB9XG5cbiAgaWYgKHN0YXRlLm1vZGlmaWVyc0RhdGEuYXJyb3cgIT0gbnVsbCkge1xuICAgIHN0YXRlLnN0eWxlcy5hcnJvdyA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnN0eWxlcy5hcnJvdywgbWFwVG9TdHlsZXMoT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uU3R5bGVzLCB7XG4gICAgICBvZmZzZXRzOiBzdGF0ZS5tb2RpZmllcnNEYXRhLmFycm93LFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBhZGFwdGl2ZTogZmFsc2UsXG4gICAgICByb3VuZE9mZnNldHM6IHJvdW5kT2Zmc2V0c1xuICAgIH0pKSk7XG4gIH1cblxuICBzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlciA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyLCB7XG4gICAgJ2RhdGEtcG9wcGVyLXBsYWNlbWVudCc6IHN0YXRlLnBsYWNlbWVudFxuICB9KTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2NvbXB1dGVTdHlsZXMnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ2JlZm9yZVdyaXRlJyxcbiAgZm46IGNvbXB1dGVTdHlsZXMsXG4gIGRhdGE6IHt9XG59OyIsImltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRXaW5kb3cuanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG52YXIgcGFzc2l2ZSA9IHtcbiAgcGFzc2l2ZTogdHJ1ZVxufTtcblxuZnVuY3Rpb24gZWZmZWN0KF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIGluc3RhbmNlID0gX3JlZi5pbnN0YW5jZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnM7XG4gIHZhciBfb3B0aW9ucyRzY3JvbGwgPSBvcHRpb25zLnNjcm9sbCxcbiAgICAgIHNjcm9sbCA9IF9vcHRpb25zJHNjcm9sbCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJHNjcm9sbCxcbiAgICAgIF9vcHRpb25zJHJlc2l6ZSA9IG9wdGlvbnMucmVzaXplLFxuICAgICAgcmVzaXplID0gX29wdGlvbnMkcmVzaXplID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkcmVzaXplO1xuICB2YXIgd2luZG93ID0gZ2V0V2luZG93KHN0YXRlLmVsZW1lbnRzLnBvcHBlcik7XG4gIHZhciBzY3JvbGxQYXJlbnRzID0gW10uY29uY2F0KHN0YXRlLnNjcm9sbFBhcmVudHMucmVmZXJlbmNlLCBzdGF0ZS5zY3JvbGxQYXJlbnRzLnBvcHBlcik7XG5cbiAgaWYgKHNjcm9sbCkge1xuICAgIHNjcm9sbFBhcmVudHMuZm9yRWFjaChmdW5jdGlvbiAoc2Nyb2xsUGFyZW50KSB7XG4gICAgICBzY3JvbGxQYXJlbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChyZXNpemUpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHNjcm9sbCkge1xuICAgICAgc2Nyb2xsUGFyZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChzY3JvbGxQYXJlbnQpIHtcbiAgICAgICAgc2Nyb2xsUGFyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGluc3RhbmNlLnVwZGF0ZSwgcGFzc2l2ZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocmVzaXplKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcbiAgICB9XG4gIH07XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdldmVudExpc3RlbmVycycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnd3JpdGUnLFxuICBmbjogZnVuY3Rpb24gZm4oKSB7fSxcbiAgZWZmZWN0OiBlZmZlY3QsXG4gIGRhdGE6IHt9XG59OyIsImltcG9ydCBnZXRPcHBvc2l0ZVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0T3Bwb3NpdGVQbGFjZW1lbnQuanNcIjtcbmltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRCYXNlUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgZGV0ZWN0T3ZlcmZsb3cgZnJvbSBcIi4uL3V0aWxzL2RldGVjdE92ZXJmbG93LmpzXCI7XG5pbXBvcnQgY29tcHV0ZUF1dG9QbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2NvbXB1dGVBdXRvUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgeyBib3R0b20sIHRvcCwgc3RhcnQsIHJpZ2h0LCBsZWZ0LCBhdXRvIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5pbXBvcnQgZ2V0VmFyaWF0aW9uIGZyb20gXCIuLi91dGlscy9nZXRWYXJpYXRpb24uanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5mdW5jdGlvbiBnZXRFeHBhbmRlZEZhbGxiYWNrUGxhY2VtZW50cyhwbGFjZW1lbnQpIHtcbiAgaWYgKGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KSA9PT0gYXV0bykge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIHZhciBvcHBvc2l0ZVBsYWNlbWVudCA9IGdldE9wcG9zaXRlUGxhY2VtZW50KHBsYWNlbWVudCk7XG4gIHJldHVybiBbZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQocGxhY2VtZW50KSwgb3Bwb3NpdGVQbGFjZW1lbnQsIGdldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50KG9wcG9zaXRlUGxhY2VtZW50KV07XG59XG5cbmZ1bmN0aW9uIGZsaXAoX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgb3B0aW9ucyA9IF9yZWYub3B0aW9ucyxcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWU7XG5cbiAgaWYgKHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0uX3NraXApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgX29wdGlvbnMkbWFpbkF4aXMgPSBvcHRpb25zLm1haW5BeGlzLFxuICAgICAgY2hlY2tNYWluQXhpcyA9IF9vcHRpb25zJG1haW5BeGlzID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkbWFpbkF4aXMsXG4gICAgICBfb3B0aW9ucyRhbHRBeGlzID0gb3B0aW9ucy5hbHRBeGlzLFxuICAgICAgY2hlY2tBbHRBeGlzID0gX29wdGlvbnMkYWx0QXhpcyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJGFsdEF4aXMsXG4gICAgICBzcGVjaWZpZWRGYWxsYmFja1BsYWNlbWVudHMgPSBvcHRpb25zLmZhbGxiYWNrUGxhY2VtZW50cyxcbiAgICAgIHBhZGRpbmcgPSBvcHRpb25zLnBhZGRpbmcsXG4gICAgICBib3VuZGFyeSA9IG9wdGlvbnMuYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnkgPSBvcHRpb25zLnJvb3RCb3VuZGFyeSxcbiAgICAgIGFsdEJvdW5kYXJ5ID0gb3B0aW9ucy5hbHRCb3VuZGFyeSxcbiAgICAgIF9vcHRpb25zJGZsaXBWYXJpYXRpbyA9IG9wdGlvbnMuZmxpcFZhcmlhdGlvbnMsXG4gICAgICBmbGlwVmFyaWF0aW9ucyA9IF9vcHRpb25zJGZsaXBWYXJpYXRpbyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJGZsaXBWYXJpYXRpbyxcbiAgICAgIGFsbG93ZWRBdXRvUGxhY2VtZW50cyA9IG9wdGlvbnMuYWxsb3dlZEF1dG9QbGFjZW1lbnRzO1xuICB2YXIgcHJlZmVycmVkUGxhY2VtZW50ID0gc3RhdGUub3B0aW9ucy5wbGFjZW1lbnQ7XG4gIHZhciBiYXNlUGxhY2VtZW50ID0gZ2V0QmFzZVBsYWNlbWVudChwcmVmZXJyZWRQbGFjZW1lbnQpO1xuICB2YXIgaXNCYXNlUGxhY2VtZW50ID0gYmFzZVBsYWNlbWVudCA9PT0gcHJlZmVycmVkUGxhY2VtZW50O1xuICB2YXIgZmFsbGJhY2tQbGFjZW1lbnRzID0gc3BlY2lmaWVkRmFsbGJhY2tQbGFjZW1lbnRzIHx8IChpc0Jhc2VQbGFjZW1lbnQgfHwgIWZsaXBWYXJpYXRpb25zID8gW2dldE9wcG9zaXRlUGxhY2VtZW50KHByZWZlcnJlZFBsYWNlbWVudCldIDogZ2V0RXhwYW5kZWRGYWxsYmFja1BsYWNlbWVudHMocHJlZmVycmVkUGxhY2VtZW50KSk7XG4gIHZhciBwbGFjZW1lbnRzID0gW3ByZWZlcnJlZFBsYWNlbWVudF0uY29uY2F0KGZhbGxiYWNrUGxhY2VtZW50cykucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICAgIHJldHVybiBhY2MuY29uY2F0KGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KSA9PT0gYXV0byA/IGNvbXB1dGVBdXRvUGxhY2VtZW50KHN0YXRlLCB7XG4gICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudCxcbiAgICAgIGJvdW5kYXJ5OiBib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeTogcm9vdEJvdW5kYXJ5LFxuICAgICAgcGFkZGluZzogcGFkZGluZyxcbiAgICAgIGZsaXBWYXJpYXRpb25zOiBmbGlwVmFyaWF0aW9ucyxcbiAgICAgIGFsbG93ZWRBdXRvUGxhY2VtZW50czogYWxsb3dlZEF1dG9QbGFjZW1lbnRzXG4gICAgfSkgOiBwbGFjZW1lbnQpO1xuICB9LCBbXSk7XG4gIHZhciByZWZlcmVuY2VSZWN0ID0gc3RhdGUucmVjdHMucmVmZXJlbmNlO1xuICB2YXIgcG9wcGVyUmVjdCA9IHN0YXRlLnJlY3RzLnBvcHBlcjtcbiAgdmFyIGNoZWNrc01hcCA9IG5ldyBNYXAoKTtcbiAgdmFyIG1ha2VGYWxsYmFja0NoZWNrcyA9IHRydWU7XG4gIHZhciBmaXJzdEZpdHRpbmdQbGFjZW1lbnQgPSBwbGFjZW1lbnRzWzBdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcGxhY2VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBwbGFjZW1lbnQgPSBwbGFjZW1lbnRzW2ldO1xuXG4gICAgdmFyIF9iYXNlUGxhY2VtZW50ID0gZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpO1xuXG4gICAgdmFyIGlzU3RhcnRWYXJpYXRpb24gPSBnZXRWYXJpYXRpb24ocGxhY2VtZW50KSA9PT0gc3RhcnQ7XG4gICAgdmFyIGlzVmVydGljYWwgPSBbdG9wLCBib3R0b21dLmluZGV4T2YoX2Jhc2VQbGFjZW1lbnQpID49IDA7XG4gICAgdmFyIGxlbiA9IGlzVmVydGljYWwgPyAnd2lkdGgnIDogJ2hlaWdodCc7XG4gICAgdmFyIG92ZXJmbG93ID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50LFxuICAgICAgYm91bmRhcnk6IGJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5OiByb290Qm91bmRhcnksXG4gICAgICBhbHRCb3VuZGFyeTogYWx0Qm91bmRhcnksXG4gICAgICBwYWRkaW5nOiBwYWRkaW5nXG4gICAgfSk7XG4gICAgdmFyIG1haW5WYXJpYXRpb25TaWRlID0gaXNWZXJ0aWNhbCA/IGlzU3RhcnRWYXJpYXRpb24gPyByaWdodCA6IGxlZnQgOiBpc1N0YXJ0VmFyaWF0aW9uID8gYm90dG9tIDogdG9wO1xuXG4gICAgaWYgKHJlZmVyZW5jZVJlY3RbbGVuXSA+IHBvcHBlclJlY3RbbGVuXSkge1xuICAgICAgbWFpblZhcmlhdGlvblNpZGUgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChtYWluVmFyaWF0aW9uU2lkZSk7XG4gICAgfVxuXG4gICAgdmFyIGFsdFZhcmlhdGlvblNpZGUgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChtYWluVmFyaWF0aW9uU2lkZSk7XG4gICAgdmFyIGNoZWNrcyA9IFtdO1xuXG4gICAgaWYgKGNoZWNrTWFpbkF4aXMpIHtcbiAgICAgIGNoZWNrcy5wdXNoKG92ZXJmbG93W19iYXNlUGxhY2VtZW50XSA8PSAwKTtcbiAgICB9XG5cbiAgICBpZiAoY2hlY2tBbHRBeGlzKSB7XG4gICAgICBjaGVja3MucHVzaChvdmVyZmxvd1ttYWluVmFyaWF0aW9uU2lkZV0gPD0gMCwgb3ZlcmZsb3dbYWx0VmFyaWF0aW9uU2lkZV0gPD0gMCk7XG4gICAgfVxuXG4gICAgaWYgKGNoZWNrcy5ldmVyeShmdW5jdGlvbiAoY2hlY2spIHtcbiAgICAgIHJldHVybiBjaGVjaztcbiAgICB9KSkge1xuICAgICAgZmlyc3RGaXR0aW5nUGxhY2VtZW50ID0gcGxhY2VtZW50O1xuICAgICAgbWFrZUZhbGxiYWNrQ2hlY2tzID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjaGVja3NNYXAuc2V0KHBsYWNlbWVudCwgY2hlY2tzKTtcbiAgfVxuXG4gIGlmIChtYWtlRmFsbGJhY2tDaGVja3MpIHtcbiAgICAvLyBgMmAgbWF5IGJlIGRlc2lyZWQgaW4gc29tZSBjYXNlcyDigJMgcmVzZWFyY2ggbGF0ZXJcbiAgICB2YXIgbnVtYmVyT2ZDaGVja3MgPSBmbGlwVmFyaWF0aW9ucyA/IDMgOiAxO1xuXG4gICAgdmFyIF9sb29wID0gZnVuY3Rpb24gX2xvb3AoX2kpIHtcbiAgICAgIHZhciBmaXR0aW5nUGxhY2VtZW50ID0gcGxhY2VtZW50cy5maW5kKGZ1bmN0aW9uIChwbGFjZW1lbnQpIHtcbiAgICAgICAgdmFyIGNoZWNrcyA9IGNoZWNrc01hcC5nZXQocGxhY2VtZW50KTtcblxuICAgICAgICBpZiAoY2hlY2tzKSB7XG4gICAgICAgICAgcmV0dXJuIGNoZWNrcy5zbGljZSgwLCBfaSkuZXZlcnkoZnVuY3Rpb24gKGNoZWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gY2hlY2s7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoZml0dGluZ1BsYWNlbWVudCkge1xuICAgICAgICBmaXJzdEZpdHRpbmdQbGFjZW1lbnQgPSBmaXR0aW5nUGxhY2VtZW50O1xuICAgICAgICByZXR1cm4gXCJicmVha1wiO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmb3IgKHZhciBfaSA9IG51bWJlck9mQ2hlY2tzOyBfaSA+IDA7IF9pLS0pIHtcbiAgICAgIHZhciBfcmV0ID0gX2xvb3AoX2kpO1xuXG4gICAgICBpZiAoX3JldCA9PT0gXCJicmVha1wiKSBicmVhaztcbiAgICB9XG4gIH1cblxuICBpZiAoc3RhdGUucGxhY2VtZW50ICE9PSBmaXJzdEZpdHRpbmdQbGFjZW1lbnQpIHtcbiAgICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdLl9za2lwID0gdHJ1ZTtcbiAgICBzdGF0ZS5wbGFjZW1lbnQgPSBmaXJzdEZpdHRpbmdQbGFjZW1lbnQ7XG4gICAgc3RhdGUucmVzZXQgPSB0cnVlO1xuICB9XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdmbGlwJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdtYWluJyxcbiAgZm46IGZsaXAsXG4gIHJlcXVpcmVzSWZFeGlzdHM6IFsnb2Zmc2V0J10sXG4gIGRhdGE6IHtcbiAgICBfc2tpcDogZmFsc2VcbiAgfVxufTsiLCJpbXBvcnQgeyB0b3AsIGJvdHRvbSwgbGVmdCwgcmlnaHQgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCBkZXRlY3RPdmVyZmxvdyBmcm9tIFwiLi4vdXRpbHMvZGV0ZWN0T3ZlcmZsb3cuanNcIjtcblxuZnVuY3Rpb24gZ2V0U2lkZU9mZnNldHMob3ZlcmZsb3csIHJlY3QsIHByZXZlbnRlZE9mZnNldHMpIHtcbiAgaWYgKHByZXZlbnRlZE9mZnNldHMgPT09IHZvaWQgMCkge1xuICAgIHByZXZlbnRlZE9mZnNldHMgPSB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMFxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHRvcDogb3ZlcmZsb3cudG9wIC0gcmVjdC5oZWlnaHQgLSBwcmV2ZW50ZWRPZmZzZXRzLnksXG4gICAgcmlnaHQ6IG92ZXJmbG93LnJpZ2h0IC0gcmVjdC53aWR0aCArIHByZXZlbnRlZE9mZnNldHMueCxcbiAgICBib3R0b206IG92ZXJmbG93LmJvdHRvbSAtIHJlY3QuaGVpZ2h0ICsgcHJldmVudGVkT2Zmc2V0cy55LFxuICAgIGxlZnQ6IG92ZXJmbG93LmxlZnQgLSByZWN0LndpZHRoIC0gcHJldmVudGVkT2Zmc2V0cy54XG4gIH07XG59XG5cbmZ1bmN0aW9uIGlzQW55U2lkZUZ1bGx5Q2xpcHBlZChvdmVyZmxvdykge1xuICByZXR1cm4gW3RvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdF0uc29tZShmdW5jdGlvbiAoc2lkZSkge1xuICAgIHJldHVybiBvdmVyZmxvd1tzaWRlXSA+PSAwO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaGlkZShfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lO1xuICB2YXIgcmVmZXJlbmNlUmVjdCA9IHN0YXRlLnJlY3RzLnJlZmVyZW5jZTtcbiAgdmFyIHBvcHBlclJlY3QgPSBzdGF0ZS5yZWN0cy5wb3BwZXI7XG4gIHZhciBwcmV2ZW50ZWRPZmZzZXRzID0gc3RhdGUubW9kaWZpZXJzRGF0YS5wcmV2ZW50T3ZlcmZsb3c7XG4gIHZhciByZWZlcmVuY2VPdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgZWxlbWVudENvbnRleHQ6ICdyZWZlcmVuY2UnXG4gIH0pO1xuICB2YXIgcG9wcGVyQWx0T3ZlcmZsb3cgPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgIGFsdEJvdW5kYXJ5OiB0cnVlXG4gIH0pO1xuICB2YXIgcmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzID0gZ2V0U2lkZU9mZnNldHMocmVmZXJlbmNlT3ZlcmZsb3csIHJlZmVyZW5jZVJlY3QpO1xuICB2YXIgcG9wcGVyRXNjYXBlT2Zmc2V0cyA9IGdldFNpZGVPZmZzZXRzKHBvcHBlckFsdE92ZXJmbG93LCBwb3BwZXJSZWN0LCBwcmV2ZW50ZWRPZmZzZXRzKTtcbiAgdmFyIGlzUmVmZXJlbmNlSGlkZGVuID0gaXNBbnlTaWRlRnVsbHlDbGlwcGVkKHJlZmVyZW5jZUNsaXBwaW5nT2Zmc2V0cyk7XG4gIHZhciBoYXNQb3BwZXJFc2NhcGVkID0gaXNBbnlTaWRlRnVsbHlDbGlwcGVkKHBvcHBlckVzY2FwZU9mZnNldHMpO1xuICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0ge1xuICAgIHJlZmVyZW5jZUNsaXBwaW5nT2Zmc2V0czogcmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzLFxuICAgIHBvcHBlckVzY2FwZU9mZnNldHM6IHBvcHBlckVzY2FwZU9mZnNldHMsXG4gICAgaXNSZWZlcmVuY2VIaWRkZW46IGlzUmVmZXJlbmNlSGlkZGVuLFxuICAgIGhhc1BvcHBlckVzY2FwZWQ6IGhhc1BvcHBlckVzY2FwZWRcbiAgfTtcbiAgc3RhdGUuYXR0cmlidXRlcy5wb3BwZXIgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlciwge1xuICAgICdkYXRhLXBvcHBlci1yZWZlcmVuY2UtaGlkZGVuJzogaXNSZWZlcmVuY2VIaWRkZW4sXG4gICAgJ2RhdGEtcG9wcGVyLWVzY2FwZWQnOiBoYXNQb3BwZXJFc2NhcGVkXG4gIH0pO1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnaGlkZScsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnbWFpbicsXG4gIHJlcXVpcmVzSWZFeGlzdHM6IFsncHJldmVudE92ZXJmbG93J10sXG4gIGZuOiBoaWRlXG59OyIsImV4cG9ydCB7IGRlZmF1bHQgYXMgYXBwbHlTdHlsZXMgfSBmcm9tIFwiLi9hcHBseVN0eWxlcy5qc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhcnJvdyB9IGZyb20gXCIuL2Fycm93LmpzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvbXB1dGVTdHlsZXMgfSBmcm9tIFwiLi9jb21wdXRlU3R5bGVzLmpzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGV2ZW50TGlzdGVuZXJzIH0gZnJvbSBcIi4vZXZlbnRMaXN0ZW5lcnMuanNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZmxpcCB9IGZyb20gXCIuL2ZsaXAuanNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaGlkZSB9IGZyb20gXCIuL2hpZGUuanNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgb2Zmc2V0IH0gZnJvbSBcIi4vb2Zmc2V0LmpzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHBvcHBlck9mZnNldHMgfSBmcm9tIFwiLi9wb3BwZXJPZmZzZXRzLmpzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHByZXZlbnRPdmVyZmxvdyB9IGZyb20gXCIuL3ByZXZlbnRPdmVyZmxvdy5qc1wiOyIsImltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRCYXNlUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgeyB0b3AsIGxlZnQsIHJpZ2h0LCBwbGFjZW1lbnRzIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5leHBvcnQgZnVuY3Rpb24gZGlzdGFuY2VBbmRTa2lkZGluZ1RvWFkocGxhY2VtZW50LCByZWN0cywgb2Zmc2V0KSB7XG4gIHZhciBiYXNlUGxhY2VtZW50ID0gZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpO1xuICB2YXIgaW52ZXJ0RGlzdGFuY2UgPSBbbGVmdCwgdG9wXS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpID49IDAgPyAtMSA6IDE7XG5cbiAgdmFyIF9yZWYgPSB0eXBlb2Ygb2Zmc2V0ID09PSAnZnVuY3Rpb24nID8gb2Zmc2V0KE9iamVjdC5hc3NpZ24oe30sIHJlY3RzLCB7XG4gICAgcGxhY2VtZW50OiBwbGFjZW1lbnRcbiAgfSkpIDogb2Zmc2V0LFxuICAgICAgc2tpZGRpbmcgPSBfcmVmWzBdLFxuICAgICAgZGlzdGFuY2UgPSBfcmVmWzFdO1xuXG4gIHNraWRkaW5nID0gc2tpZGRpbmcgfHwgMDtcbiAgZGlzdGFuY2UgPSAoZGlzdGFuY2UgfHwgMCkgKiBpbnZlcnREaXN0YW5jZTtcbiAgcmV0dXJuIFtsZWZ0LCByaWdodF0uaW5kZXhPZihiYXNlUGxhY2VtZW50KSA+PSAwID8ge1xuICAgIHg6IGRpc3RhbmNlLFxuICAgIHk6IHNraWRkaW5nXG4gIH0gOiB7XG4gICAgeDogc2tpZGRpbmcsXG4gICAgeTogZGlzdGFuY2VcbiAgfTtcbn1cblxuZnVuY3Rpb24gb2Zmc2V0KF9yZWYyKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYyLnN0YXRlLFxuICAgICAgb3B0aW9ucyA9IF9yZWYyLm9wdGlvbnMsXG4gICAgICBuYW1lID0gX3JlZjIubmFtZTtcbiAgdmFyIF9vcHRpb25zJG9mZnNldCA9IG9wdGlvbnMub2Zmc2V0LFxuICAgICAgb2Zmc2V0ID0gX29wdGlvbnMkb2Zmc2V0ID09PSB2b2lkIDAgPyBbMCwgMF0gOiBfb3B0aW9ucyRvZmZzZXQ7XG4gIHZhciBkYXRhID0gcGxhY2VtZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gICAgYWNjW3BsYWNlbWVudF0gPSBkaXN0YW5jZUFuZFNraWRkaW5nVG9YWShwbGFjZW1lbnQsIHN0YXRlLnJlY3RzLCBvZmZzZXQpO1xuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcbiAgdmFyIF9kYXRhJHN0YXRlJHBsYWNlbWVudCA9IGRhdGFbc3RhdGUucGxhY2VtZW50XSxcbiAgICAgIHggPSBfZGF0YSRzdGF0ZSRwbGFjZW1lbnQueCxcbiAgICAgIHkgPSBfZGF0YSRzdGF0ZSRwbGFjZW1lbnQueTtcblxuICBpZiAoc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzICE9IG51bGwpIHtcbiAgICBzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMueCArPSB4O1xuICAgIHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cy55ICs9IHk7XG4gIH1cblxuICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0gZGF0YTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ29mZnNldCcsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnbWFpbicsXG4gIHJlcXVpcmVzOiBbJ3BvcHBlck9mZnNldHMnXSxcbiAgZm46IG9mZnNldFxufTsiLCJpbXBvcnQgY29tcHV0ZU9mZnNldHMgZnJvbSBcIi4uL3V0aWxzL2NvbXB1dGVPZmZzZXRzLmpzXCI7XG5cbmZ1bmN0aW9uIHBvcHBlck9mZnNldHMoX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZTtcbiAgLy8gT2Zmc2V0cyBhcmUgdGhlIGFjdHVhbCBwb3NpdGlvbiB0aGUgcG9wcGVyIG5lZWRzIHRvIGhhdmUgdG8gYmVcbiAgLy8gcHJvcGVybHkgcG9zaXRpb25lZCBuZWFyIGl0cyByZWZlcmVuY2UgZWxlbWVudFxuICAvLyBUaGlzIGlzIHRoZSBtb3N0IGJhc2ljIHBsYWNlbWVudCwgYW5kIHdpbGwgYmUgYWRqdXN0ZWQgYnlcbiAgLy8gdGhlIG1vZGlmaWVycyBpbiB0aGUgbmV4dCBzdGVwXG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSBjb21wdXRlT2Zmc2V0cyh7XG4gICAgcmVmZXJlbmNlOiBzdGF0ZS5yZWN0cy5yZWZlcmVuY2UsXG4gICAgZWxlbWVudDogc3RhdGUucmVjdHMucG9wcGVyLFxuICAgIHN0cmF0ZWd5OiAnYWJzb2x1dGUnLFxuICAgIHBsYWNlbWVudDogc3RhdGUucGxhY2VtZW50XG4gIH0pO1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAncG9wcGVyT2Zmc2V0cycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAncmVhZCcsXG4gIGZuOiBwb3BwZXJPZmZzZXRzLFxuICBkYXRhOiB7fVxufTsiLCJpbXBvcnQgeyB0b3AsIGxlZnQsIHJpZ2h0LCBib3R0b20sIHN0YXJ0IH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5pbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgZ2V0QWx0QXhpcyBmcm9tIFwiLi4vdXRpbHMvZ2V0QWx0QXhpcy5qc1wiO1xuaW1wb3J0IHdpdGhpbiBmcm9tIFwiLi4vdXRpbHMvd2l0aGluLmpzXCI7XG5pbXBvcnQgZ2V0TGF5b3V0UmVjdCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldExheW91dFJlY3QuanNcIjtcbmltcG9ydCBnZXRPZmZzZXRQYXJlbnQgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRPZmZzZXRQYXJlbnQuanNcIjtcbmltcG9ydCBkZXRlY3RPdmVyZmxvdyBmcm9tIFwiLi4vdXRpbHMvZGV0ZWN0T3ZlcmZsb3cuanNcIjtcbmltcG9ydCBnZXRWYXJpYXRpb24gZnJvbSBcIi4uL3V0aWxzL2dldFZhcmlhdGlvbi5qc1wiO1xuaW1wb3J0IGdldEZyZXNoU2lkZU9iamVjdCBmcm9tIFwiLi4vdXRpbHMvZ2V0RnJlc2hTaWRlT2JqZWN0LmpzXCI7XG5pbXBvcnQgeyBtYXggYXMgbWF0aE1heCwgbWluIGFzIG1hdGhNaW4gfSBmcm9tIFwiLi4vdXRpbHMvbWF0aC5qc1wiO1xuXG5mdW5jdGlvbiBwcmV2ZW50T3ZlcmZsb3coX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgb3B0aW9ucyA9IF9yZWYub3B0aW9ucyxcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWU7XG4gIHZhciBfb3B0aW9ucyRtYWluQXhpcyA9IG9wdGlvbnMubWFpbkF4aXMsXG4gICAgICBjaGVja01haW5BeGlzID0gX29wdGlvbnMkbWFpbkF4aXMgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRtYWluQXhpcyxcbiAgICAgIF9vcHRpb25zJGFsdEF4aXMgPSBvcHRpb25zLmFsdEF4aXMsXG4gICAgICBjaGVja0FsdEF4aXMgPSBfb3B0aW9ucyRhbHRBeGlzID09PSB2b2lkIDAgPyBmYWxzZSA6IF9vcHRpb25zJGFsdEF4aXMsXG4gICAgICBib3VuZGFyeSA9IG9wdGlvbnMuYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnkgPSBvcHRpb25zLnJvb3RCb3VuZGFyeSxcbiAgICAgIGFsdEJvdW5kYXJ5ID0gb3B0aW9ucy5hbHRCb3VuZGFyeSxcbiAgICAgIHBhZGRpbmcgPSBvcHRpb25zLnBhZGRpbmcsXG4gICAgICBfb3B0aW9ucyR0ZXRoZXIgPSBvcHRpb25zLnRldGhlcixcbiAgICAgIHRldGhlciA9IF9vcHRpb25zJHRldGhlciA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJHRldGhlcixcbiAgICAgIF9vcHRpb25zJHRldGhlck9mZnNldCA9IG9wdGlvbnMudGV0aGVyT2Zmc2V0LFxuICAgICAgdGV0aGVyT2Zmc2V0ID0gX29wdGlvbnMkdGV0aGVyT2Zmc2V0ID09PSB2b2lkIDAgPyAwIDogX29wdGlvbnMkdGV0aGVyT2Zmc2V0O1xuICB2YXIgb3ZlcmZsb3cgPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgIGJvdW5kYXJ5OiBib3VuZGFyeSxcbiAgICByb290Qm91bmRhcnk6IHJvb3RCb3VuZGFyeSxcbiAgICBwYWRkaW5nOiBwYWRkaW5nLFxuICAgIGFsdEJvdW5kYXJ5OiBhbHRCb3VuZGFyeVxuICB9KTtcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHN0YXRlLnBsYWNlbWVudCk7XG4gIHZhciB2YXJpYXRpb24gPSBnZXRWYXJpYXRpb24oc3RhdGUucGxhY2VtZW50KTtcbiAgdmFyIGlzQmFzZVBsYWNlbWVudCA9ICF2YXJpYXRpb247XG4gIHZhciBtYWluQXhpcyA9IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChiYXNlUGxhY2VtZW50KTtcbiAgdmFyIGFsdEF4aXMgPSBnZXRBbHRBeGlzKG1haW5BeGlzKTtcbiAgdmFyIHBvcHBlck9mZnNldHMgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHM7XG4gIHZhciByZWZlcmVuY2VSZWN0ID0gc3RhdGUucmVjdHMucmVmZXJlbmNlO1xuICB2YXIgcG9wcGVyUmVjdCA9IHN0YXRlLnJlY3RzLnBvcHBlcjtcbiAgdmFyIHRldGhlck9mZnNldFZhbHVlID0gdHlwZW9mIHRldGhlck9mZnNldCA9PT0gJ2Z1bmN0aW9uJyA/IHRldGhlck9mZnNldChPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5yZWN0cywge1xuICAgIHBsYWNlbWVudDogc3RhdGUucGxhY2VtZW50XG4gIH0pKSA6IHRldGhlck9mZnNldDtcbiAgdmFyIGRhdGEgPSB7XG4gICAgeDogMCxcbiAgICB5OiAwXG4gIH07XG5cbiAgaWYgKCFwb3BwZXJPZmZzZXRzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGNoZWNrTWFpbkF4aXMgfHwgY2hlY2tBbHRBeGlzKSB7XG4gICAgdmFyIG1haW5TaWRlID0gbWFpbkF4aXMgPT09ICd5JyA/IHRvcCA6IGxlZnQ7XG4gICAgdmFyIGFsdFNpZGUgPSBtYWluQXhpcyA9PT0gJ3knID8gYm90dG9tIDogcmlnaHQ7XG4gICAgdmFyIGxlbiA9IG1haW5BeGlzID09PSAneScgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG4gICAgdmFyIG9mZnNldCA9IHBvcHBlck9mZnNldHNbbWFpbkF4aXNdO1xuICAgIHZhciBtaW4gPSBwb3BwZXJPZmZzZXRzW21haW5BeGlzXSArIG92ZXJmbG93W21haW5TaWRlXTtcbiAgICB2YXIgbWF4ID0gcG9wcGVyT2Zmc2V0c1ttYWluQXhpc10gLSBvdmVyZmxvd1thbHRTaWRlXTtcbiAgICB2YXIgYWRkaXRpdmUgPSB0ZXRoZXIgPyAtcG9wcGVyUmVjdFtsZW5dIC8gMiA6IDA7XG4gICAgdmFyIG1pbkxlbiA9IHZhcmlhdGlvbiA9PT0gc3RhcnQgPyByZWZlcmVuY2VSZWN0W2xlbl0gOiBwb3BwZXJSZWN0W2xlbl07XG4gICAgdmFyIG1heExlbiA9IHZhcmlhdGlvbiA9PT0gc3RhcnQgPyAtcG9wcGVyUmVjdFtsZW5dIDogLXJlZmVyZW5jZVJlY3RbbGVuXTsgLy8gV2UgbmVlZCB0byBpbmNsdWRlIHRoZSBhcnJvdyBpbiB0aGUgY2FsY3VsYXRpb24gc28gdGhlIGFycm93IGRvZXNuJ3QgZ29cbiAgICAvLyBvdXRzaWRlIHRoZSByZWZlcmVuY2UgYm91bmRzXG5cbiAgICB2YXIgYXJyb3dFbGVtZW50ID0gc3RhdGUuZWxlbWVudHMuYXJyb3c7XG4gICAgdmFyIGFycm93UmVjdCA9IHRldGhlciAmJiBhcnJvd0VsZW1lbnQgPyBnZXRMYXlvdXRSZWN0KGFycm93RWxlbWVudCkgOiB7XG4gICAgICB3aWR0aDogMCxcbiAgICAgIGhlaWdodDogMFxuICAgIH07XG4gICAgdmFyIGFycm93UGFkZGluZ09iamVjdCA9IHN0YXRlLm1vZGlmaWVyc0RhdGFbJ2Fycm93I3BlcnNpc3RlbnQnXSA/IHN0YXRlLm1vZGlmaWVyc0RhdGFbJ2Fycm93I3BlcnNpc3RlbnQnXS5wYWRkaW5nIDogZ2V0RnJlc2hTaWRlT2JqZWN0KCk7XG4gICAgdmFyIGFycm93UGFkZGluZ01pbiA9IGFycm93UGFkZGluZ09iamVjdFttYWluU2lkZV07XG4gICAgdmFyIGFycm93UGFkZGluZ01heCA9IGFycm93UGFkZGluZ09iamVjdFthbHRTaWRlXTsgLy8gSWYgdGhlIHJlZmVyZW5jZSBsZW5ndGggaXMgc21hbGxlciB0aGFuIHRoZSBhcnJvdyBsZW5ndGgsIHdlIGRvbid0IHdhbnRcbiAgICAvLyB0byBpbmNsdWRlIGl0cyBmdWxsIHNpemUgaW4gdGhlIGNhbGN1bGF0aW9uLiBJZiB0aGUgcmVmZXJlbmNlIGlzIHNtYWxsXG4gICAgLy8gYW5kIG5lYXIgdGhlIGVkZ2Ugb2YgYSBib3VuZGFyeSwgdGhlIHBvcHBlciBjYW4gb3ZlcmZsb3cgZXZlbiBpZiB0aGVcbiAgICAvLyByZWZlcmVuY2UgaXMgbm90IG92ZXJmbG93aW5nIGFzIHdlbGwgKGUuZy4gdmlydHVhbCBlbGVtZW50cyB3aXRoIG5vXG4gICAgLy8gd2lkdGggb3IgaGVpZ2h0KVxuXG4gICAgdmFyIGFycm93TGVuID0gd2l0aGluKDAsIHJlZmVyZW5jZVJlY3RbbGVuXSwgYXJyb3dSZWN0W2xlbl0pO1xuICAgIHZhciBtaW5PZmZzZXQgPSBpc0Jhc2VQbGFjZW1lbnQgPyByZWZlcmVuY2VSZWN0W2xlbl0gLyAyIC0gYWRkaXRpdmUgLSBhcnJvd0xlbiAtIGFycm93UGFkZGluZ01pbiAtIHRldGhlck9mZnNldFZhbHVlIDogbWluTGVuIC0gYXJyb3dMZW4gLSBhcnJvd1BhZGRpbmdNaW4gLSB0ZXRoZXJPZmZzZXRWYWx1ZTtcbiAgICB2YXIgbWF4T2Zmc2V0ID0gaXNCYXNlUGxhY2VtZW50ID8gLXJlZmVyZW5jZVJlY3RbbGVuXSAvIDIgKyBhZGRpdGl2ZSArIGFycm93TGVuICsgYXJyb3dQYWRkaW5nTWF4ICsgdGV0aGVyT2Zmc2V0VmFsdWUgOiBtYXhMZW4gKyBhcnJvd0xlbiArIGFycm93UGFkZGluZ01heCArIHRldGhlck9mZnNldFZhbHVlO1xuICAgIHZhciBhcnJvd09mZnNldFBhcmVudCA9IHN0YXRlLmVsZW1lbnRzLmFycm93ICYmIGdldE9mZnNldFBhcmVudChzdGF0ZS5lbGVtZW50cy5hcnJvdyk7XG4gICAgdmFyIGNsaWVudE9mZnNldCA9IGFycm93T2Zmc2V0UGFyZW50ID8gbWFpbkF4aXMgPT09ICd5JyA/IGFycm93T2Zmc2V0UGFyZW50LmNsaWVudFRvcCB8fCAwIDogYXJyb3dPZmZzZXRQYXJlbnQuY2xpZW50TGVmdCB8fCAwIDogMDtcbiAgICB2YXIgb2Zmc2V0TW9kaWZpZXJWYWx1ZSA9IHN0YXRlLm1vZGlmaWVyc0RhdGEub2Zmc2V0ID8gc3RhdGUubW9kaWZpZXJzRGF0YS5vZmZzZXRbc3RhdGUucGxhY2VtZW50XVttYWluQXhpc10gOiAwO1xuICAgIHZhciB0ZXRoZXJNaW4gPSBwb3BwZXJPZmZzZXRzW21haW5BeGlzXSArIG1pbk9mZnNldCAtIG9mZnNldE1vZGlmaWVyVmFsdWUgLSBjbGllbnRPZmZzZXQ7XG4gICAgdmFyIHRldGhlck1heCA9IHBvcHBlck9mZnNldHNbbWFpbkF4aXNdICsgbWF4T2Zmc2V0IC0gb2Zmc2V0TW9kaWZpZXJWYWx1ZTtcblxuICAgIGlmIChjaGVja01haW5BeGlzKSB7XG4gICAgICB2YXIgcHJldmVudGVkT2Zmc2V0ID0gd2l0aGluKHRldGhlciA/IG1hdGhNaW4obWluLCB0ZXRoZXJNaW4pIDogbWluLCBvZmZzZXQsIHRldGhlciA/IG1hdGhNYXgobWF4LCB0ZXRoZXJNYXgpIDogbWF4KTtcbiAgICAgIHBvcHBlck9mZnNldHNbbWFpbkF4aXNdID0gcHJldmVudGVkT2Zmc2V0O1xuICAgICAgZGF0YVttYWluQXhpc10gPSBwcmV2ZW50ZWRPZmZzZXQgLSBvZmZzZXQ7XG4gICAgfVxuXG4gICAgaWYgKGNoZWNrQWx0QXhpcykge1xuICAgICAgdmFyIF9tYWluU2lkZSA9IG1haW5BeGlzID09PSAneCcgPyB0b3AgOiBsZWZ0O1xuXG4gICAgICB2YXIgX2FsdFNpZGUgPSBtYWluQXhpcyA9PT0gJ3gnID8gYm90dG9tIDogcmlnaHQ7XG5cbiAgICAgIHZhciBfb2Zmc2V0ID0gcG9wcGVyT2Zmc2V0c1thbHRBeGlzXTtcblxuICAgICAgdmFyIF9taW4gPSBfb2Zmc2V0ICsgb3ZlcmZsb3dbX21haW5TaWRlXTtcblxuICAgICAgdmFyIF9tYXggPSBfb2Zmc2V0IC0gb3ZlcmZsb3dbX2FsdFNpZGVdO1xuXG4gICAgICB2YXIgX3ByZXZlbnRlZE9mZnNldCA9IHdpdGhpbih0ZXRoZXIgPyBtYXRoTWluKF9taW4sIHRldGhlck1pbikgOiBfbWluLCBfb2Zmc2V0LCB0ZXRoZXIgPyBtYXRoTWF4KF9tYXgsIHRldGhlck1heCkgOiBfbWF4KTtcblxuICAgICAgcG9wcGVyT2Zmc2V0c1thbHRBeGlzXSA9IF9wcmV2ZW50ZWRPZmZzZXQ7XG4gICAgICBkYXRhW2FsdEF4aXNdID0gX3ByZXZlbnRlZE9mZnNldCAtIF9vZmZzZXQ7XG4gICAgfVxuICB9XG5cbiAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IGRhdGE7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdwcmV2ZW50T3ZlcmZsb3cnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ21haW4nLFxuICBmbjogcHJldmVudE92ZXJmbG93LFxuICByZXF1aXJlc0lmRXhpc3RzOiBbJ29mZnNldCddXG59OyIsImltcG9ydCB7IHBvcHBlckdlbmVyYXRvciwgZGV0ZWN0T3ZlcmZsb3cgfSBmcm9tIFwiLi9jcmVhdGVQb3BwZXIuanNcIjtcbmltcG9ydCBldmVudExpc3RlbmVycyBmcm9tIFwiLi9tb2RpZmllcnMvZXZlbnRMaXN0ZW5lcnMuanNcIjtcbmltcG9ydCBwb3BwZXJPZmZzZXRzIGZyb20gXCIuL21vZGlmaWVycy9wb3BwZXJPZmZzZXRzLmpzXCI7XG5pbXBvcnQgY29tcHV0ZVN0eWxlcyBmcm9tIFwiLi9tb2RpZmllcnMvY29tcHV0ZVN0eWxlcy5qc1wiO1xuaW1wb3J0IGFwcGx5U3R5bGVzIGZyb20gXCIuL21vZGlmaWVycy9hcHBseVN0eWxlcy5qc1wiO1xudmFyIGRlZmF1bHRNb2RpZmllcnMgPSBbZXZlbnRMaXN0ZW5lcnMsIHBvcHBlck9mZnNldHMsIGNvbXB1dGVTdHlsZXMsIGFwcGx5U3R5bGVzXTtcbnZhciBjcmVhdGVQb3BwZXIgPSAvKiNfX1BVUkVfXyovcG9wcGVyR2VuZXJhdG9yKHtcbiAgZGVmYXVsdE1vZGlmaWVyczogZGVmYXVsdE1vZGlmaWVyc1xufSk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZXhwb3J0IHsgY3JlYXRlUG9wcGVyLCBwb3BwZXJHZW5lcmF0b3IsIGRlZmF1bHRNb2RpZmllcnMsIGRldGVjdE92ZXJmbG93IH07IiwiaW1wb3J0IHsgcG9wcGVyR2VuZXJhdG9yLCBkZXRlY3RPdmVyZmxvdyB9IGZyb20gXCIuL2NyZWF0ZVBvcHBlci5qc1wiO1xuaW1wb3J0IGV2ZW50TGlzdGVuZXJzIGZyb20gXCIuL21vZGlmaWVycy9ldmVudExpc3RlbmVycy5qc1wiO1xuaW1wb3J0IHBvcHBlck9mZnNldHMgZnJvbSBcIi4vbW9kaWZpZXJzL3BvcHBlck9mZnNldHMuanNcIjtcbmltcG9ydCBjb21wdXRlU3R5bGVzIGZyb20gXCIuL21vZGlmaWVycy9jb21wdXRlU3R5bGVzLmpzXCI7XG5pbXBvcnQgYXBwbHlTdHlsZXMgZnJvbSBcIi4vbW9kaWZpZXJzL2FwcGx5U3R5bGVzLmpzXCI7XG5pbXBvcnQgb2Zmc2V0IGZyb20gXCIuL21vZGlmaWVycy9vZmZzZXQuanNcIjtcbmltcG9ydCBmbGlwIGZyb20gXCIuL21vZGlmaWVycy9mbGlwLmpzXCI7XG5pbXBvcnQgcHJldmVudE92ZXJmbG93IGZyb20gXCIuL21vZGlmaWVycy9wcmV2ZW50T3ZlcmZsb3cuanNcIjtcbmltcG9ydCBhcnJvdyBmcm9tIFwiLi9tb2RpZmllcnMvYXJyb3cuanNcIjtcbmltcG9ydCBoaWRlIGZyb20gXCIuL21vZGlmaWVycy9oaWRlLmpzXCI7XG52YXIgZGVmYXVsdE1vZGlmaWVycyA9IFtldmVudExpc3RlbmVycywgcG9wcGVyT2Zmc2V0cywgY29tcHV0ZVN0eWxlcywgYXBwbHlTdHlsZXMsIG9mZnNldCwgZmxpcCwgcHJldmVudE92ZXJmbG93LCBhcnJvdywgaGlkZV07XG52YXIgY3JlYXRlUG9wcGVyID0gLyojX19QVVJFX18qL3BvcHBlckdlbmVyYXRvcih7XG4gIGRlZmF1bHRNb2RpZmllcnM6IGRlZmF1bHRNb2RpZmllcnNcbn0pOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCB7IGNyZWF0ZVBvcHBlciwgcG9wcGVyR2VuZXJhdG9yLCBkZWZhdWx0TW9kaWZpZXJzLCBkZXRlY3RPdmVyZmxvdyB9OyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCB7IGNyZWF0ZVBvcHBlciBhcyBjcmVhdGVQb3BwZXJMaXRlIH0gZnJvbSBcIi4vcG9wcGVyLWxpdGUuanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5leHBvcnQgKiBmcm9tIFwiLi9tb2RpZmllcnMvaW5kZXguanNcIjsiLCJpbXBvcnQgZ2V0VmFyaWF0aW9uIGZyb20gXCIuL2dldFZhcmlhdGlvbi5qc1wiO1xuaW1wb3J0IHsgdmFyaWF0aW9uUGxhY2VtZW50cywgYmFzZVBsYWNlbWVudHMsIHBsYWNlbWVudHMgYXMgYWxsUGxhY2VtZW50cyB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IGRldGVjdE92ZXJmbG93IGZyb20gXCIuL2RldGVjdE92ZXJmbG93LmpzXCI7XG5pbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi9nZXRCYXNlUGxhY2VtZW50LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wdXRlQXV0b1BsYWNlbWVudChzdGF0ZSwgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgdmFyIF9vcHRpb25zID0gb3B0aW9ucyxcbiAgICAgIHBsYWNlbWVudCA9IF9vcHRpb25zLnBsYWNlbWVudCxcbiAgICAgIGJvdW5kYXJ5ID0gX29wdGlvbnMuYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnkgPSBfb3B0aW9ucy5yb290Qm91bmRhcnksXG4gICAgICBwYWRkaW5nID0gX29wdGlvbnMucGFkZGluZyxcbiAgICAgIGZsaXBWYXJpYXRpb25zID0gX29wdGlvbnMuZmxpcFZhcmlhdGlvbnMsXG4gICAgICBfb3B0aW9ucyRhbGxvd2VkQXV0b1AgPSBfb3B0aW9ucy5hbGxvd2VkQXV0b1BsYWNlbWVudHMsXG4gICAgICBhbGxvd2VkQXV0b1BsYWNlbWVudHMgPSBfb3B0aW9ucyRhbGxvd2VkQXV0b1AgPT09IHZvaWQgMCA/IGFsbFBsYWNlbWVudHMgOiBfb3B0aW9ucyRhbGxvd2VkQXV0b1A7XG4gIHZhciB2YXJpYXRpb24gPSBnZXRWYXJpYXRpb24ocGxhY2VtZW50KTtcbiAgdmFyIHBsYWNlbWVudHMgPSB2YXJpYXRpb24gPyBmbGlwVmFyaWF0aW9ucyA/IHZhcmlhdGlvblBsYWNlbWVudHMgOiB2YXJpYXRpb25QbGFjZW1lbnRzLmZpbHRlcihmdW5jdGlvbiAocGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIGdldFZhcmlhdGlvbihwbGFjZW1lbnQpID09PSB2YXJpYXRpb247XG4gIH0pIDogYmFzZVBsYWNlbWVudHM7XG4gIHZhciBhbGxvd2VkUGxhY2VtZW50cyA9IHBsYWNlbWVudHMuZmlsdGVyKGZ1bmN0aW9uIChwbGFjZW1lbnQpIHtcbiAgICByZXR1cm4gYWxsb3dlZEF1dG9QbGFjZW1lbnRzLmluZGV4T2YocGxhY2VtZW50KSA+PSAwO1xuICB9KTtcblxuICBpZiAoYWxsb3dlZFBsYWNlbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgYWxsb3dlZFBsYWNlbWVudHMgPSBwbGFjZW1lbnRzO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgY29uc29sZS5lcnJvcihbJ1BvcHBlcjogVGhlIGBhbGxvd2VkQXV0b1BsYWNlbWVudHNgIG9wdGlvbiBkaWQgbm90IGFsbG93IGFueScsICdwbGFjZW1lbnRzLiBFbnN1cmUgdGhlIGBwbGFjZW1lbnRgIG9wdGlvbiBtYXRjaGVzIHRoZSB2YXJpYXRpb24nLCAnb2YgdGhlIGFsbG93ZWQgcGxhY2VtZW50cy4nLCAnRm9yIGV4YW1wbGUsIFwiYXV0b1wiIGNhbm5vdCBiZSB1c2VkIHRvIGFsbG93IFwiYm90dG9tLXN0YXJ0XCIuJywgJ1VzZSBcImF1dG8tc3RhcnRcIiBpbnN0ZWFkLiddLmpvaW4oJyAnKSk7XG4gICAgfVxuICB9IC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXR5cGVdOiBGbG93IHNlZW1zIHRvIGhhdmUgcHJvYmxlbXMgd2l0aCB0d28gYXJyYXkgdW5pb25zLi4uXG5cblxuICB2YXIgb3ZlcmZsb3dzID0gYWxsb3dlZFBsYWNlbWVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICAgIGFjY1twbGFjZW1lbnRdID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50LFxuICAgICAgYm91bmRhcnk6IGJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5OiByb290Qm91bmRhcnksXG4gICAgICBwYWRkaW5nOiBwYWRkaW5nXG4gICAgfSlbZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpXTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG4gIHJldHVybiBPYmplY3Qua2V5cyhvdmVyZmxvd3MpLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gb3ZlcmZsb3dzW2FdIC0gb3ZlcmZsb3dzW2JdO1xuICB9KTtcbn0iLCJpbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi9nZXRCYXNlUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgZ2V0VmFyaWF0aW9uIGZyb20gXCIuL2dldFZhcmlhdGlvbi5qc1wiO1xuaW1wb3J0IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudCBmcm9tIFwiLi9nZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQuanNcIjtcbmltcG9ydCB7IHRvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdCwgc3RhcnQsIGVuZCB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcHV0ZU9mZnNldHMoX3JlZikge1xuICB2YXIgcmVmZXJlbmNlID0gX3JlZi5yZWZlcmVuY2UsXG4gICAgICBlbGVtZW50ID0gX3JlZi5lbGVtZW50LFxuICAgICAgcGxhY2VtZW50ID0gX3JlZi5wbGFjZW1lbnQ7XG4gIHZhciBiYXNlUGxhY2VtZW50ID0gcGxhY2VtZW50ID8gZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpIDogbnVsbDtcbiAgdmFyIHZhcmlhdGlvbiA9IHBsYWNlbWVudCA/IGdldFZhcmlhdGlvbihwbGFjZW1lbnQpIDogbnVsbDtcbiAgdmFyIGNvbW1vblggPSByZWZlcmVuY2UueCArIHJlZmVyZW5jZS53aWR0aCAvIDIgLSBlbGVtZW50LndpZHRoIC8gMjtcbiAgdmFyIGNvbW1vblkgPSByZWZlcmVuY2UueSArIHJlZmVyZW5jZS5oZWlnaHQgLyAyIC0gZWxlbWVudC5oZWlnaHQgLyAyO1xuICB2YXIgb2Zmc2V0cztcblxuICBzd2l0Y2ggKGJhc2VQbGFjZW1lbnQpIHtcbiAgICBjYXNlIHRvcDpcbiAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgIHg6IGNvbW1vblgsXG4gICAgICAgIHk6IHJlZmVyZW5jZS55IC0gZWxlbWVudC5oZWlnaHRcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgYm90dG9tOlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogY29tbW9uWCxcbiAgICAgICAgeTogcmVmZXJlbmNlLnkgKyByZWZlcmVuY2UuaGVpZ2h0XG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIHJpZ2h0OlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogcmVmZXJlbmNlLnggKyByZWZlcmVuY2Uud2lkdGgsXG4gICAgICAgIHk6IGNvbW1vbllcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgbGVmdDpcbiAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgIHg6IHJlZmVyZW5jZS54IC0gZWxlbWVudC53aWR0aCxcbiAgICAgICAgeTogY29tbW9uWVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgIHg6IHJlZmVyZW5jZS54LFxuICAgICAgICB5OiByZWZlcmVuY2UueVxuICAgICAgfTtcbiAgfVxuXG4gIHZhciBtYWluQXhpcyA9IGJhc2VQbGFjZW1lbnQgPyBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQoYmFzZVBsYWNlbWVudCkgOiBudWxsO1xuXG4gIGlmIChtYWluQXhpcyAhPSBudWxsKSB7XG4gICAgdmFyIGxlbiA9IG1haW5BeGlzID09PSAneScgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG5cbiAgICBzd2l0Y2ggKHZhcmlhdGlvbikge1xuICAgICAgY2FzZSBzdGFydDpcbiAgICAgICAgb2Zmc2V0c1ttYWluQXhpc10gPSBvZmZzZXRzW21haW5BeGlzXSAtIChyZWZlcmVuY2VbbGVuXSAvIDIgLSBlbGVtZW50W2xlbl0gLyAyKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgZW5kOlxuICAgICAgICBvZmZzZXRzW21haW5BeGlzXSA9IG9mZnNldHNbbWFpbkF4aXNdICsgKHJlZmVyZW5jZVtsZW5dIC8gMiAtIGVsZW1lbnRbbGVuXSAvIDIpO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2Zmc2V0cztcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWJvdW5jZShmbikge1xuICB2YXIgcGVuZGluZztcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXBlbmRpbmcpIHtcbiAgICAgIHBlbmRpbmcgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBwZW5kaW5nID0gdW5kZWZpbmVkO1xuICAgICAgICAgIHJlc29sdmUoZm4oKSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBlbmRpbmc7XG4gIH07XG59IiwiaW1wb3J0IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldEJvdW5kaW5nQ2xpZW50UmVjdC5qc1wiO1xuaW1wb3J0IGdldENsaXBwaW5nUmVjdCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldENsaXBwaW5nUmVjdC5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IGNvbXB1dGVPZmZzZXRzIGZyb20gXCIuL2NvbXB1dGVPZmZzZXRzLmpzXCI7XG5pbXBvcnQgcmVjdFRvQ2xpZW50UmVjdCBmcm9tIFwiLi9yZWN0VG9DbGllbnRSZWN0LmpzXCI7XG5pbXBvcnQgeyBjbGlwcGluZ1BhcmVudHMsIHJlZmVyZW5jZSwgcG9wcGVyLCBib3R0b20sIHRvcCwgcmlnaHQsIGJhc2VQbGFjZW1lbnRzLCB2aWV3cG9ydCB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IHsgaXNFbGVtZW50IH0gZnJvbSBcIi4uL2RvbS11dGlscy9pbnN0YW5jZU9mLmpzXCI7XG5pbXBvcnQgbWVyZ2VQYWRkaW5nT2JqZWN0IGZyb20gXCIuL21lcmdlUGFkZGluZ09iamVjdC5qc1wiO1xuaW1wb3J0IGV4cGFuZFRvSGFzaE1hcCBmcm9tIFwiLi9leHBhbmRUb0hhc2hNYXAuanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgdmFyIF9vcHRpb25zID0gb3B0aW9ucyxcbiAgICAgIF9vcHRpb25zJHBsYWNlbWVudCA9IF9vcHRpb25zLnBsYWNlbWVudCxcbiAgICAgIHBsYWNlbWVudCA9IF9vcHRpb25zJHBsYWNlbWVudCA9PT0gdm9pZCAwID8gc3RhdGUucGxhY2VtZW50IDogX29wdGlvbnMkcGxhY2VtZW50LFxuICAgICAgX29wdGlvbnMkYm91bmRhcnkgPSBfb3B0aW9ucy5ib3VuZGFyeSxcbiAgICAgIGJvdW5kYXJ5ID0gX29wdGlvbnMkYm91bmRhcnkgPT09IHZvaWQgMCA/IGNsaXBwaW5nUGFyZW50cyA6IF9vcHRpb25zJGJvdW5kYXJ5LFxuICAgICAgX29wdGlvbnMkcm9vdEJvdW5kYXJ5ID0gX29wdGlvbnMucm9vdEJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5ID0gX29wdGlvbnMkcm9vdEJvdW5kYXJ5ID09PSB2b2lkIDAgPyB2aWV3cG9ydCA6IF9vcHRpb25zJHJvb3RCb3VuZGFyeSxcbiAgICAgIF9vcHRpb25zJGVsZW1lbnRDb250ZSA9IF9vcHRpb25zLmVsZW1lbnRDb250ZXh0LFxuICAgICAgZWxlbWVudENvbnRleHQgPSBfb3B0aW9ucyRlbGVtZW50Q29udGUgPT09IHZvaWQgMCA/IHBvcHBlciA6IF9vcHRpb25zJGVsZW1lbnRDb250ZSxcbiAgICAgIF9vcHRpb25zJGFsdEJvdW5kYXJ5ID0gX29wdGlvbnMuYWx0Qm91bmRhcnksXG4gICAgICBhbHRCb3VuZGFyeSA9IF9vcHRpb25zJGFsdEJvdW5kYXJ5ID09PSB2b2lkIDAgPyBmYWxzZSA6IF9vcHRpb25zJGFsdEJvdW5kYXJ5LFxuICAgICAgX29wdGlvbnMkcGFkZGluZyA9IF9vcHRpb25zLnBhZGRpbmcsXG4gICAgICBwYWRkaW5nID0gX29wdGlvbnMkcGFkZGluZyA9PT0gdm9pZCAwID8gMCA6IF9vcHRpb25zJHBhZGRpbmc7XG4gIHZhciBwYWRkaW5nT2JqZWN0ID0gbWVyZ2VQYWRkaW5nT2JqZWN0KHR5cGVvZiBwYWRkaW5nICE9PSAnbnVtYmVyJyA/IHBhZGRpbmcgOiBleHBhbmRUb0hhc2hNYXAocGFkZGluZywgYmFzZVBsYWNlbWVudHMpKTtcbiAgdmFyIGFsdENvbnRleHQgPSBlbGVtZW50Q29udGV4dCA9PT0gcG9wcGVyID8gcmVmZXJlbmNlIDogcG9wcGVyO1xuICB2YXIgcmVmZXJlbmNlRWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzLnJlZmVyZW5jZTtcbiAgdmFyIHBvcHBlclJlY3QgPSBzdGF0ZS5yZWN0cy5wb3BwZXI7XG4gIHZhciBlbGVtZW50ID0gc3RhdGUuZWxlbWVudHNbYWx0Qm91bmRhcnkgPyBhbHRDb250ZXh0IDogZWxlbWVudENvbnRleHRdO1xuICB2YXIgY2xpcHBpbmdDbGllbnRSZWN0ID0gZ2V0Q2xpcHBpbmdSZWN0KGlzRWxlbWVudChlbGVtZW50KSA/IGVsZW1lbnQgOiBlbGVtZW50LmNvbnRleHRFbGVtZW50IHx8IGdldERvY3VtZW50RWxlbWVudChzdGF0ZS5lbGVtZW50cy5wb3BwZXIpLCBib3VuZGFyeSwgcm9vdEJvdW5kYXJ5KTtcbiAgdmFyIHJlZmVyZW5jZUNsaWVudFJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QocmVmZXJlbmNlRWxlbWVudCk7XG4gIHZhciBwb3BwZXJPZmZzZXRzID0gY29tcHV0ZU9mZnNldHMoe1xuICAgIHJlZmVyZW5jZTogcmVmZXJlbmNlQ2xpZW50UmVjdCxcbiAgICBlbGVtZW50OiBwb3BwZXJSZWN0LFxuICAgIHN0cmF0ZWd5OiAnYWJzb2x1dGUnLFxuICAgIHBsYWNlbWVudDogcGxhY2VtZW50XG4gIH0pO1xuICB2YXIgcG9wcGVyQ2xpZW50UmVjdCA9IHJlY3RUb0NsaWVudFJlY3QoT2JqZWN0LmFzc2lnbih7fSwgcG9wcGVyUmVjdCwgcG9wcGVyT2Zmc2V0cykpO1xuICB2YXIgZWxlbWVudENsaWVudFJlY3QgPSBlbGVtZW50Q29udGV4dCA9PT0gcG9wcGVyID8gcG9wcGVyQ2xpZW50UmVjdCA6IHJlZmVyZW5jZUNsaWVudFJlY3Q7IC8vIHBvc2l0aXZlID0gb3ZlcmZsb3dpbmcgdGhlIGNsaXBwaW5nIHJlY3RcbiAgLy8gMCBvciBuZWdhdGl2ZSA9IHdpdGhpbiB0aGUgY2xpcHBpbmcgcmVjdFxuXG4gIHZhciBvdmVyZmxvd09mZnNldHMgPSB7XG4gICAgdG9wOiBjbGlwcGluZ0NsaWVudFJlY3QudG9wIC0gZWxlbWVudENsaWVudFJlY3QudG9wICsgcGFkZGluZ09iamVjdC50b3AsXG4gICAgYm90dG9tOiBlbGVtZW50Q2xpZW50UmVjdC5ib3R0b20gLSBjbGlwcGluZ0NsaWVudFJlY3QuYm90dG9tICsgcGFkZGluZ09iamVjdC5ib3R0b20sXG4gICAgbGVmdDogY2xpcHBpbmdDbGllbnRSZWN0LmxlZnQgLSBlbGVtZW50Q2xpZW50UmVjdC5sZWZ0ICsgcGFkZGluZ09iamVjdC5sZWZ0LFxuICAgIHJpZ2h0OiBlbGVtZW50Q2xpZW50UmVjdC5yaWdodCAtIGNsaXBwaW5nQ2xpZW50UmVjdC5yaWdodCArIHBhZGRpbmdPYmplY3QucmlnaHRcbiAgfTtcbiAgdmFyIG9mZnNldERhdGEgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLm9mZnNldDsgLy8gT2Zmc2V0cyBjYW4gYmUgYXBwbGllZCBvbmx5IHRvIHRoZSBwb3BwZXIgZWxlbWVudFxuXG4gIGlmIChlbGVtZW50Q29udGV4dCA9PT0gcG9wcGVyICYmIG9mZnNldERhdGEpIHtcbiAgICB2YXIgb2Zmc2V0ID0gb2Zmc2V0RGF0YVtwbGFjZW1lbnRdO1xuICAgIE9iamVjdC5rZXlzKG92ZXJmbG93T2Zmc2V0cykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB2YXIgbXVsdGlwbHkgPSBbcmlnaHQsIGJvdHRvbV0uaW5kZXhPZihrZXkpID49IDAgPyAxIDogLTE7XG4gICAgICB2YXIgYXhpcyA9IFt0b3AsIGJvdHRvbV0uaW5kZXhPZihrZXkpID49IDAgPyAneScgOiAneCc7XG4gICAgICBvdmVyZmxvd09mZnNldHNba2V5XSArPSBvZmZzZXRbYXhpc10gKiBtdWx0aXBseTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBvdmVyZmxvd09mZnNldHM7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXhwYW5kVG9IYXNoTWFwKHZhbHVlLCBrZXlzKSB7XG4gIHJldHVybiBrZXlzLnJlZHVjZShmdW5jdGlvbiAoaGFzaE1hcCwga2V5KSB7XG4gICAgaGFzaE1hcFtrZXldID0gdmFsdWU7XG4gICAgcmV0dXJuIGhhc2hNYXA7XG4gIH0sIHt9KTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXQoc3RyKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBbXS5jb25jYXQoYXJncykucmVkdWNlKGZ1bmN0aW9uIChwLCBjKSB7XG4gICAgcmV0dXJuIHAucmVwbGFjZSgvJXMvLCBjKTtcbiAgfSwgc3RyKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRBbHRBeGlzKGF4aXMpIHtcbiAgcmV0dXJuIGF4aXMgPT09ICd4JyA/ICd5JyA6ICd4Jztcbn0iLCJpbXBvcnQgeyBhdXRvIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnNwbGl0KCctJylbMF07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RnJlc2hTaWRlT2JqZWN0KCkge1xuICByZXR1cm4ge1xuICAgIHRvcDogMCxcbiAgICByaWdodDogMCxcbiAgICBib3R0b206IDAsXG4gICAgbGVmdDogMFxuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIFsndG9wJywgJ2JvdHRvbSddLmluZGV4T2YocGxhY2VtZW50KSA+PSAwID8gJ3gnIDogJ3knO1xufSIsInZhciBoYXNoID0ge1xuICBsZWZ0OiAncmlnaHQnLFxuICByaWdodDogJ2xlZnQnLFxuICBib3R0b206ICd0b3AnLFxuICB0b3A6ICdib3R0b20nXG59O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQucmVwbGFjZSgvbGVmdHxyaWdodHxib3R0b218dG9wL2csIGZ1bmN0aW9uIChtYXRjaGVkKSB7XG4gICAgcmV0dXJuIGhhc2hbbWF0Y2hlZF07XG4gIH0pO1xufSIsInZhciBoYXNoID0ge1xuICBzdGFydDogJ2VuZCcsXG4gIGVuZDogJ3N0YXJ0J1xufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnJlcGxhY2UoL3N0YXJ0fGVuZC9nLCBmdW5jdGlvbiAobWF0Y2hlZCkge1xuICAgIHJldHVybiBoYXNoW21hdGNoZWRdO1xuICB9KTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRWYXJpYXRpb24ocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQuc3BsaXQoJy0nKVsxXTtcbn0iLCJleHBvcnQgdmFyIG1heCA9IE1hdGgubWF4O1xuZXhwb3J0IHZhciBtaW4gPSBNYXRoLm1pbjtcbmV4cG9ydCB2YXIgcm91bmQgPSBNYXRoLnJvdW5kOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lcmdlQnlOYW1lKG1vZGlmaWVycykge1xuICB2YXIgbWVyZ2VkID0gbW9kaWZpZXJzLnJlZHVjZShmdW5jdGlvbiAobWVyZ2VkLCBjdXJyZW50KSB7XG4gICAgdmFyIGV4aXN0aW5nID0gbWVyZ2VkW2N1cnJlbnQubmFtZV07XG4gICAgbWVyZ2VkW2N1cnJlbnQubmFtZV0gPSBleGlzdGluZyA/IE9iamVjdC5hc3NpZ24oe30sIGV4aXN0aW5nLCBjdXJyZW50LCB7XG4gICAgICBvcHRpb25zOiBPYmplY3QuYXNzaWduKHt9LCBleGlzdGluZy5vcHRpb25zLCBjdXJyZW50Lm9wdGlvbnMpLFxuICAgICAgZGF0YTogT2JqZWN0LmFzc2lnbih7fSwgZXhpc3RpbmcuZGF0YSwgY3VycmVudC5kYXRhKVxuICAgIH0pIDogY3VycmVudDtcbiAgICByZXR1cm4gbWVyZ2VkO1xuICB9LCB7fSk7IC8vIElFMTEgZG9lcyBub3Qgc3VwcG9ydCBPYmplY3QudmFsdWVzXG5cbiAgcmV0dXJuIE9iamVjdC5rZXlzKG1lcmdlZCkubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gbWVyZ2VkW2tleV07XG4gIH0pO1xufSIsImltcG9ydCBnZXRGcmVzaFNpZGVPYmplY3QgZnJvbSBcIi4vZ2V0RnJlc2hTaWRlT2JqZWN0LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZXJnZVBhZGRpbmdPYmplY3QocGFkZGluZ09iamVjdCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgZ2V0RnJlc2hTaWRlT2JqZWN0KCksIHBhZGRpbmdPYmplY3QpO1xufSIsImltcG9ydCB7IG1vZGlmaWVyUGhhc2VzIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7IC8vIHNvdXJjZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDk4NzUyNTVcblxuZnVuY3Rpb24gb3JkZXIobW9kaWZpZXJzKSB7XG4gIHZhciBtYXAgPSBuZXcgTWFwKCk7XG4gIHZhciB2aXNpdGVkID0gbmV3IFNldCgpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIG1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgIG1hcC5zZXQobW9kaWZpZXIubmFtZSwgbW9kaWZpZXIpO1xuICB9KTsgLy8gT24gdmlzaXRpbmcgb2JqZWN0LCBjaGVjayBmb3IgaXRzIGRlcGVuZGVuY2llcyBhbmQgdmlzaXQgdGhlbSByZWN1cnNpdmVseVxuXG4gIGZ1bmN0aW9uIHNvcnQobW9kaWZpZXIpIHtcbiAgICB2aXNpdGVkLmFkZChtb2RpZmllci5uYW1lKTtcbiAgICB2YXIgcmVxdWlyZXMgPSBbXS5jb25jYXQobW9kaWZpZXIucmVxdWlyZXMgfHwgW10sIG1vZGlmaWVyLnJlcXVpcmVzSWZFeGlzdHMgfHwgW10pO1xuICAgIHJlcXVpcmVzLmZvckVhY2goZnVuY3Rpb24gKGRlcCkge1xuICAgICAgaWYgKCF2aXNpdGVkLmhhcyhkZXApKSB7XG4gICAgICAgIHZhciBkZXBNb2RpZmllciA9IG1hcC5nZXQoZGVwKTtcblxuICAgICAgICBpZiAoZGVwTW9kaWZpZXIpIHtcbiAgICAgICAgICBzb3J0KGRlcE1vZGlmaWVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJlc3VsdC5wdXNoKG1vZGlmaWVyKTtcbiAgfVxuXG4gIG1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgIGlmICghdmlzaXRlZC5oYXMobW9kaWZpZXIubmFtZSkpIHtcbiAgICAgIC8vIGNoZWNrIGZvciB2aXNpdGVkIG9iamVjdFxuICAgICAgc29ydChtb2RpZmllcik7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb3JkZXJNb2RpZmllcnMobW9kaWZpZXJzKSB7XG4gIC8vIG9yZGVyIGJhc2VkIG9uIGRlcGVuZGVuY2llc1xuICB2YXIgb3JkZXJlZE1vZGlmaWVycyA9IG9yZGVyKG1vZGlmaWVycyk7IC8vIG9yZGVyIGJhc2VkIG9uIHBoYXNlXG5cbiAgcmV0dXJuIG1vZGlmaWVyUGhhc2VzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwaGFzZSkge1xuICAgIHJldHVybiBhY2MuY29uY2F0KG9yZGVyZWRNb2RpZmllcnMuZmlsdGVyKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgICAgcmV0dXJuIG1vZGlmaWVyLnBoYXNlID09PSBwaGFzZTtcbiAgICB9KSk7XG4gIH0sIFtdKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWN0VG9DbGllbnRSZWN0KHJlY3QpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHJlY3QsIHtcbiAgICBsZWZ0OiByZWN0LngsXG4gICAgdG9wOiByZWN0LnksXG4gICAgcmlnaHQ6IHJlY3QueCArIHJlY3Qud2lkdGgsXG4gICAgYm90dG9tOiByZWN0LnkgKyByZWN0LmhlaWdodFxuICB9KTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1bmlxdWVCeShhcnIsIGZuKSB7XG4gIHZhciBpZGVudGlmaWVycyA9IG5ldyBTZXQoKTtcbiAgcmV0dXJuIGFyci5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICB2YXIgaWRlbnRpZmllciA9IGZuKGl0ZW0pO1xuXG4gICAgaWYgKCFpZGVudGlmaWVycy5oYXMoaWRlbnRpZmllcikpIHtcbiAgICAgIGlkZW50aWZpZXJzLmFkZChpZGVudGlmaWVyKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG59IiwiaW1wb3J0IGZvcm1hdCBmcm9tIFwiLi9mb3JtYXQuanNcIjtcbmltcG9ydCB7IG1vZGlmaWVyUGhhc2VzIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG52YXIgSU5WQUxJRF9NT0RJRklFUl9FUlJPUiA9ICdQb3BwZXI6IG1vZGlmaWVyIFwiJXNcIiBwcm92aWRlZCBhbiBpbnZhbGlkICVzIHByb3BlcnR5LCBleHBlY3RlZCAlcyBidXQgZ290ICVzJztcbnZhciBNSVNTSU5HX0RFUEVOREVOQ1lfRVJST1IgPSAnUG9wcGVyOiBtb2RpZmllciBcIiVzXCIgcmVxdWlyZXMgXCIlc1wiLCBidXQgXCIlc1wiIG1vZGlmaWVyIGlzIG5vdCBhdmFpbGFibGUnO1xudmFyIFZBTElEX1BST1BFUlRJRVMgPSBbJ25hbWUnLCAnZW5hYmxlZCcsICdwaGFzZScsICdmbicsICdlZmZlY3QnLCAncmVxdWlyZXMnLCAnb3B0aW9ucyddO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFsaWRhdGVNb2RpZmllcnMobW9kaWZpZXJzKSB7XG4gIG1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgIE9iamVjdC5rZXlzKG1vZGlmaWVyKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgIGNhc2UgJ25hbWUnOlxuICAgICAgICAgIGlmICh0eXBlb2YgbW9kaWZpZXIubmFtZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZm9ybWF0KElOVkFMSURfTU9ESUZJRVJfRVJST1IsIFN0cmluZyhtb2RpZmllci5uYW1lKSwgJ1wibmFtZVwiJywgJ1wic3RyaW5nXCInLCBcIlxcXCJcIiArIFN0cmluZyhtb2RpZmllci5uYW1lKSArIFwiXFxcIlwiKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnZW5hYmxlZCc6XG4gICAgICAgICAgaWYgKHR5cGVvZiBtb2RpZmllci5lbmFibGVkICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZm9ybWF0KElOVkFMSURfTU9ESUZJRVJfRVJST1IsIG1vZGlmaWVyLm5hbWUsICdcImVuYWJsZWRcIicsICdcImJvb2xlYW5cIicsIFwiXFxcIlwiICsgU3RyaW5nKG1vZGlmaWVyLmVuYWJsZWQpICsgXCJcXFwiXCIpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgY2FzZSAncGhhc2UnOlxuICAgICAgICAgIGlmIChtb2RpZmllclBoYXNlcy5pbmRleE9mKG1vZGlmaWVyLnBoYXNlKSA8IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZm9ybWF0KElOVkFMSURfTU9ESUZJRVJfRVJST1IsIG1vZGlmaWVyLm5hbWUsICdcInBoYXNlXCInLCBcImVpdGhlciBcIiArIG1vZGlmaWVyUGhhc2VzLmpvaW4oJywgJyksIFwiXFxcIlwiICsgU3RyaW5nKG1vZGlmaWVyLnBoYXNlKSArIFwiXFxcIlwiKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnZm4nOlxuICAgICAgICAgIGlmICh0eXBlb2YgbW9kaWZpZXIuZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZm9ybWF0KElOVkFMSURfTU9ESUZJRVJfRVJST1IsIG1vZGlmaWVyLm5hbWUsICdcImZuXCInLCAnXCJmdW5jdGlvblwiJywgXCJcXFwiXCIgKyBTdHJpbmcobW9kaWZpZXIuZm4pICsgXCJcXFwiXCIpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdlZmZlY3QnOlxuICAgICAgICAgIGlmICh0eXBlb2YgbW9kaWZpZXIuZWZmZWN0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGZvcm1hdChJTlZBTElEX01PRElGSUVSX0VSUk9SLCBtb2RpZmllci5uYW1lLCAnXCJlZmZlY3RcIicsICdcImZ1bmN0aW9uXCInLCBcIlxcXCJcIiArIFN0cmluZyhtb2RpZmllci5mbikgKyBcIlxcXCJcIikpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3JlcXVpcmVzJzpcbiAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkobW9kaWZpZXIucmVxdWlyZXMpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGZvcm1hdChJTlZBTElEX01PRElGSUVSX0VSUk9SLCBtb2RpZmllci5uYW1lLCAnXCJyZXF1aXJlc1wiJywgJ1wiYXJyYXlcIicsIFwiXFxcIlwiICsgU3RyaW5nKG1vZGlmaWVyLnJlcXVpcmVzKSArIFwiXFxcIlwiKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAncmVxdWlyZXNJZkV4aXN0cyc6XG4gICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG1vZGlmaWVyLnJlcXVpcmVzSWZFeGlzdHMpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGZvcm1hdChJTlZBTElEX01PRElGSUVSX0VSUk9SLCBtb2RpZmllci5uYW1lLCAnXCJyZXF1aXJlc0lmRXhpc3RzXCInLCAnXCJhcnJheVwiJywgXCJcXFwiXCIgKyBTdHJpbmcobW9kaWZpZXIucmVxdWlyZXNJZkV4aXN0cykgKyBcIlxcXCJcIikpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ29wdGlvbnMnOlxuICAgICAgICBjYXNlICdkYXRhJzpcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJQb3BwZXJKUzogYW4gaW52YWxpZCBwcm9wZXJ0eSBoYXMgYmVlbiBwcm92aWRlZCB0byB0aGUgXFxcIlwiICsgbW9kaWZpZXIubmFtZSArIFwiXFxcIiBtb2RpZmllciwgdmFsaWQgcHJvcGVydGllcyBhcmUgXCIgKyBWQUxJRF9QUk9QRVJUSUVTLm1hcChmdW5jdGlvbiAocykge1xuICAgICAgICAgICAgcmV0dXJuIFwiXFxcIlwiICsgcyArIFwiXFxcIlwiO1xuICAgICAgICAgIH0pLmpvaW4oJywgJykgKyBcIjsgYnV0IFxcXCJcIiArIGtleSArIFwiXFxcIiB3YXMgcHJvdmlkZWQuXCIpO1xuICAgICAgfVxuXG4gICAgICBtb2RpZmllci5yZXF1aXJlcyAmJiBtb2RpZmllci5yZXF1aXJlcy5mb3JFYWNoKGZ1bmN0aW9uIChyZXF1aXJlbWVudCkge1xuICAgICAgICBpZiAobW9kaWZpZXJzLmZpbmQoZnVuY3Rpb24gKG1vZCkge1xuICAgICAgICAgIHJldHVybiBtb2QubmFtZSA9PT0gcmVxdWlyZW1lbnQ7XG4gICAgICAgIH0pID09IG51bGwpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGZvcm1hdChNSVNTSU5HX0RFUEVOREVOQ1lfRVJST1IsIFN0cmluZyhtb2RpZmllci5uYW1lKSwgcmVxdWlyZW1lbnQsIHJlcXVpcmVtZW50KSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn0iLCJpbXBvcnQgeyBtYXggYXMgbWF0aE1heCwgbWluIGFzIG1hdGhNaW4gfSBmcm9tIFwiLi9tYXRoLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoaW4obWluLCB2YWx1ZSwgbWF4KSB7XG4gIHJldHVybiBtYXRoTWF4KG1pbiwgbWF0aE1pbih2YWx1ZSwgbWF4KSk7XG59IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlO1xuICBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlO1xuICBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlO1xuXG4gIHRyeSB7XG4gICAgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG5cbiAgdmFyIHRhcmdldCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpO1xuXG4gIHZhciBrZXksIGk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldO1xuICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7XG4gICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH1cblxuICByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHtcbiAgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkge1xuICAgIHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSxcbiAgICAgICAgcmVzdWx0O1xuXG4gICAgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHtcbiAgICAgIHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7XG5cbiAgICAgIHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIF9zdXBlclByb3BCYXNlKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgd2hpbGUgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSkpIHtcbiAgICBvYmplY3QgPSBfZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcbiAgICBpZiAob2JqZWN0ID09PSBudWxsKSBicmVhaztcbiAgfVxuXG4gIHJldHVybiBvYmplY3Q7XG59XG5cbmZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ICE9PSBcInVuZGVmaW5lZFwiICYmIFJlZmxlY3QuZ2V0KSB7XG4gICAgX2dldCA9IFJlZmxlY3QuZ2V0O1xuICB9IGVsc2Uge1xuICAgIF9nZXQgPSBmdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gICAgICB2YXIgYmFzZSA9IF9zdXBlclByb3BCYXNlKHRhcmdldCwgcHJvcGVydHkpO1xuXG4gICAgICBpZiAoIWJhc2UpIHJldHVybjtcbiAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlLCBwcm9wZXJ0eSk7XG5cbiAgICAgIGlmIChkZXNjLmdldCkge1xuICAgICAgICByZXR1cm4gZGVzYy5nZXQuY2FsbChyZWNlaXZlcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZXNjLnZhbHVlO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlciB8fCB0YXJnZXQpO1xufVxuXG5mdW5jdGlvbiBzZXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHJlY2VpdmVyKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBSZWZsZWN0LnNldCkge1xuICAgIHNldCA9IFJlZmxlY3Quc2V0O1xuICB9IGVsc2Uge1xuICAgIHNldCA9IGZ1bmN0aW9uIHNldCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgcmVjZWl2ZXIpIHtcbiAgICAgIHZhciBiYXNlID0gX3N1cGVyUHJvcEJhc2UodGFyZ2V0LCBwcm9wZXJ0eSk7XG5cbiAgICAgIHZhciBkZXNjO1xuXG4gICAgICBpZiAoYmFzZSkge1xuICAgICAgICBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlLCBwcm9wZXJ0eSk7XG5cbiAgICAgICAgaWYgKGRlc2Muc2V0KSB7XG4gICAgICAgICAgZGVzYy5zZXQuY2FsbChyZWNlaXZlciwgdmFsdWUpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKCFkZXNjLndyaXRhYmxlKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHJlY2VpdmVyLCBwcm9wZXJ0eSk7XG5cbiAgICAgIGlmIChkZXNjKSB7XG4gICAgICAgIGlmICghZGVzYy53cml0YWJsZSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlc2MudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlY2VpdmVyLCBwcm9wZXJ0eSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfZGVmaW5lUHJvcGVydHkocmVjZWl2ZXIsIHByb3BlcnR5LCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gc2V0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCByZWNlaXZlcik7XG59XG5cbmZ1bmN0aW9uIF9zZXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHJlY2VpdmVyLCBpc1N0cmljdCkge1xuICB2YXIgcyA9IHNldCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgcmVjZWl2ZXIgfHwgdGFyZ2V0KTtcblxuICBpZiAoIXMgJiYgaXNTdHJpY3QpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZhaWxlZCB0byBzZXQgcHJvcGVydHknKTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7XG59XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG4gIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgYXJyMltpXSA9IGFycltpXTtcblxuICByZXR1cm4gYXJyMjtcbn1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxuZXhwb3J0IHsgX2NyZWF0ZUNsYXNzIGFzIF8sIF9jbGFzc0NhbGxDaGVjayBhcyBhLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgYXMgYiwgX3R5cGVvZiBhcyBjLCBfaW5oZXJpdHMgYXMgZCwgX2NyZWF0ZVN1cGVyIGFzIGUsIF9zbGljZWRUb0FycmF5IGFzIGYsIF9nZXQgYXMgZywgX2dldFByb3RvdHlwZU9mIGFzIGgsIF9zZXQgYXMgaSB9O1xuIiwiaW1wb3J0IHsgZCBhcyBfaW5oZXJpdHMsIGUgYXMgX2NyZWF0ZVN1cGVyLCBhIGFzIF9jbGFzc0NhbGxDaGVjaywgXyBhcyBfY3JlYXRlQ2xhc3MgfSBmcm9tICcuLi9fcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzLTZjY2IxZjY0LmpzJztcbmltcG9ydCBIVE1MTWFza0VsZW1lbnQgZnJvbSAnLi9odG1sLW1hc2stZWxlbWVudC5qcyc7XG5pbXBvcnQgSU1hc2sgZnJvbSAnLi4vY29yZS9ob2xkZXIuanMnO1xuaW1wb3J0ICcuL21hc2stZWxlbWVudC5qcyc7XG5cbnZhciBIVE1MQ29udGVudGVkaXRhYmxlTWFza0VsZW1lbnQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9IVE1MTWFza0VsZW1lbnQpIHtcbiAgX2luaGVyaXRzKEhUTUxDb250ZW50ZWRpdGFibGVNYXNrRWxlbWVudCwgX0hUTUxNYXNrRWxlbWVudCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihIVE1MQ29udGVudGVkaXRhYmxlTWFza0VsZW1lbnQpO1xuXG4gIGZ1bmN0aW9uIEhUTUxDb250ZW50ZWRpdGFibGVNYXNrRWxlbWVudCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSFRNTENvbnRlbnRlZGl0YWJsZU1hc2tFbGVtZW50KTtcblxuICAgIHJldHVybiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhIVE1MQ29udGVudGVkaXRhYmxlTWFza0VsZW1lbnQsIFt7XG4gICAga2V5OiBcIl91bnNhZmVTZWxlY3Rpb25TdGFydFwiLFxuICAgIGdldDpcbiAgICAvKipcclxuICAgICAgUmV0dXJucyBIVE1MRWxlbWVudCBzZWxlY3Rpb24gc3RhcnRcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuICAgIGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciByb290ID0gdGhpcy5yb290RWxlbWVudDtcbiAgICAgIHZhciBzZWxlY3Rpb24gPSByb290LmdldFNlbGVjdGlvbiAmJiByb290LmdldFNlbGVjdGlvbigpO1xuICAgICAgcmV0dXJuIHNlbGVjdGlvbiAmJiBzZWxlY3Rpb24uYW5jaG9yT2Zmc2V0O1xuICAgIH1cbiAgICAvKipcclxuICAgICAgUmV0dXJucyBIVE1MRWxlbWVudCBzZWxlY3Rpb24gZW5kXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl91bnNhZmVTZWxlY3Rpb25FbmRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciByb290ID0gdGhpcy5yb290RWxlbWVudDtcbiAgICAgIHZhciBzZWxlY3Rpb24gPSByb290LmdldFNlbGVjdGlvbiAmJiByb290LmdldFNlbGVjdGlvbigpO1xuICAgICAgcmV0dXJuIHNlbGVjdGlvbiAmJiB0aGlzLl91bnNhZmVTZWxlY3Rpb25TdGFydCArIFN0cmluZyhzZWxlY3Rpb24pLmxlbmd0aDtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIFNldHMgSFRNTEVsZW1lbnQgc2VsZWN0aW9uXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl91bnNhZmVTZWxlY3RcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3Vuc2FmZVNlbGVjdChzdGFydCwgZW5kKSB7XG4gICAgICBpZiAoIXRoaXMucm9vdEVsZW1lbnQuY3JlYXRlUmFuZ2UpIHJldHVybjtcbiAgICAgIHZhciByYW5nZSA9IHRoaXMucm9vdEVsZW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgICAgIHJhbmdlLnNldFN0YXJ0KHRoaXMuaW5wdXQuZmlyc3RDaGlsZCB8fCB0aGlzLmlucHV0LCBzdGFydCk7XG4gICAgICByYW5nZS5zZXRFbmQodGhpcy5pbnB1dC5sYXN0Q2hpbGQgfHwgdGhpcy5pbnB1dCwgZW5kKTtcbiAgICAgIHZhciByb290ID0gdGhpcy5yb290RWxlbWVudDtcbiAgICAgIHZhciBzZWxlY3Rpb24gPSByb290LmdldFNlbGVjdGlvbiAmJiByb290LmdldFNlbGVjdGlvbigpO1xuXG4gICAgICBpZiAoc2VsZWN0aW9uKSB7XG4gICAgICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgICAgICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEhUTUxFbGVtZW50IHZhbHVlXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInZhbHVlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICByZXR1cm4gdGhpcy5pbnB1dC50ZXh0Q29udGVudDtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICB0aGlzLmlucHV0LnRleHRDb250ZW50ID0gdmFsdWU7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEhUTUxDb250ZW50ZWRpdGFibGVNYXNrRWxlbWVudDtcbn0oSFRNTE1hc2tFbGVtZW50KTtcbklNYXNrLkhUTUxDb250ZW50ZWRpdGFibGVNYXNrRWxlbWVudCA9IEhUTUxDb250ZW50ZWRpdGFibGVNYXNrRWxlbWVudDtcblxuZXhwb3J0IGRlZmF1bHQgSFRNTENvbnRlbnRlZGl0YWJsZU1hc2tFbGVtZW50O1xuIiwiaW1wb3J0IHsgZCBhcyBfaW5oZXJpdHMsIGUgYXMgX2NyZWF0ZVN1cGVyLCBhIGFzIF9jbGFzc0NhbGxDaGVjaywgXyBhcyBfY3JlYXRlQ2xhc3MgfSBmcm9tICcuLi9fcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzLTZjY2IxZjY0LmpzJztcbmltcG9ydCBNYXNrRWxlbWVudCBmcm9tICcuL21hc2stZWxlbWVudC5qcyc7XG5pbXBvcnQgSU1hc2sgZnJvbSAnLi4vY29yZS9ob2xkZXIuanMnO1xuXG4vKiogQnJpZGdlIGJldHdlZW4gSFRNTEVsZW1lbnQgYW5kIHtAbGluayBNYXNrZWR9ICovXG5cbnZhciBIVE1MTWFza0VsZW1lbnQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9NYXNrRWxlbWVudCkge1xuICBfaW5oZXJpdHMoSFRNTE1hc2tFbGVtZW50LCBfTWFza0VsZW1lbnQpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoSFRNTE1hc2tFbGVtZW50KTtcblxuICAvKiogTWFwcGluZyBiZXR3ZWVuIEhUTUxFbGVtZW50IGV2ZW50cyBhbmQgbWFzayBpbnRlcm5hbCBldmVudHMgKi9cblxuICAvKiogSFRNTEVsZW1lbnQgdG8gdXNlIG1hc2sgb24gKi9cblxuICAvKipcclxuICAgIEBwYXJhbSB7SFRNTElucHV0RWxlbWVudHxIVE1MVGV4dEFyZWFFbGVtZW50fSBpbnB1dFxyXG4gICovXG4gIGZ1bmN0aW9uIEhUTUxNYXNrRWxlbWVudChpbnB1dCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBIVE1MTWFza0VsZW1lbnQpO1xuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKTtcbiAgICBfdGhpcy5pbnB1dCA9IGlucHV0O1xuICAgIF90aGlzLl9oYW5kbGVycyA9IHt9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICAvKiogKi9cbiAgLy8gJEZsb3dGaXhNZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZmxvdy9pc3N1ZXMvMjgzOVxuXG5cbiAgX2NyZWF0ZUNsYXNzKEhUTUxNYXNrRWxlbWVudCwgW3tcbiAgICBrZXk6IFwicm9vdEVsZW1lbnRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlucHV0LmdldFJvb3ROb2RlID8gdGhpcy5pbnB1dC5nZXRSb290Tm9kZSgpIDogZG9jdW1lbnQ7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBJcyBlbGVtZW50IGluIGZvY3VzXHJcbiAgICAgIEByZWFkb25seVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImlzQWN0aXZlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAvLyRGbG93Rml4TWVcbiAgICAgIHJldHVybiB0aGlzLmlucHV0ID09PSB0aGlzLnJvb3RFbGVtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBSZXR1cm5zIEhUTUxFbGVtZW50IHNlbGVjdGlvbiBzdGFydFxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfdW5zYWZlU2VsZWN0aW9uU3RhcnRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlucHV0LnNlbGVjdGlvblN0YXJ0O1xuICAgIH1cbiAgICAvKipcclxuICAgICAgUmV0dXJucyBIVE1MRWxlbWVudCBzZWxlY3Rpb24gZW5kXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl91bnNhZmVTZWxlY3Rpb25FbmRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlucHV0LnNlbGVjdGlvbkVuZDtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIFNldHMgSFRNTEVsZW1lbnQgc2VsZWN0aW9uXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl91bnNhZmVTZWxlY3RcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3Vuc2FmZVNlbGVjdChzdGFydCwgZW5kKSB7XG4gICAgICB0aGlzLmlucHV0LnNldFNlbGVjdGlvblJhbmdlKHN0YXJ0LCBlbmQpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgSFRNTEVsZW1lbnQgdmFsdWVcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidmFsdWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlucHV0LnZhbHVlO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIHRoaXMuaW5wdXQudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEJpbmRzIEhUTUxFbGVtZW50IGV2ZW50cyB0byBtYXNrIGludGVybmFsIGV2ZW50c1xyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJiaW5kRXZlbnRzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJpbmRFdmVudHMoaGFuZGxlcnMpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICBPYmplY3Qua2V5cyhoYW5kbGVycykuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzMi5fdG9nZ2xlRXZlbnRIYW5kbGVyKEhUTUxNYXNrRWxlbWVudC5FVkVOVFNfTUFQW2V2ZW50XSwgaGFuZGxlcnNbZXZlbnRdKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgVW5iaW5kcyBIVE1MRWxlbWVudCBldmVudHMgdG8gbWFzayBpbnRlcm5hbCBldmVudHNcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidW5iaW5kRXZlbnRzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVuYmluZEV2ZW50cygpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICBPYmplY3Qua2V5cyh0aGlzLl9oYW5kbGVycykuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzMy5fdG9nZ2xlRXZlbnRIYW5kbGVyKGV2ZW50KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKiogKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl90b2dnbGVFdmVudEhhbmRsZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3RvZ2dsZUV2ZW50SGFuZGxlcihldmVudCwgaGFuZGxlcikge1xuICAgICAgaWYgKHRoaXMuX2hhbmRsZXJzW2V2ZW50XSkge1xuICAgICAgICB0aGlzLmlucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIHRoaXMuX2hhbmRsZXJzW2V2ZW50XSk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9oYW5kbGVyc1tldmVudF07XG4gICAgICB9XG5cbiAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlcik7XG4gICAgICAgIHRoaXMuX2hhbmRsZXJzW2V2ZW50XSA9IGhhbmRsZXI7XG4gICAgICB9XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEhUTUxNYXNrRWxlbWVudDtcbn0oTWFza0VsZW1lbnQpO1xuSFRNTE1hc2tFbGVtZW50LkVWRU5UU19NQVAgPSB7XG4gIHNlbGVjdGlvbkNoYW5nZTogJ2tleWRvd24nLFxuICBpbnB1dDogJ2lucHV0JyxcbiAgZHJvcDogJ2Ryb3AnLFxuICBjbGljazogJ2NsaWNrJyxcbiAgZm9jdXM6ICdmb2N1cycsXG4gIGNvbW1pdDogJ2JsdXInXG59O1xuSU1hc2suSFRNTE1hc2tFbGVtZW50ID0gSFRNTE1hc2tFbGVtZW50O1xuXG5leHBvcnQgZGVmYXVsdCBIVE1MTWFza0VsZW1lbnQ7XG4iLCJpbXBvcnQgeyBfIGFzIF9jcmVhdGVDbGFzcywgYSBhcyBfY2xhc3NDYWxsQ2hlY2ssIGIgYXMgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycy02Y2NiMWY2NC5qcyc7XG5pbXBvcnQgeyBvYmplY3RJbmNsdWRlcywgRElSRUNUSU9OIH0gZnJvbSAnLi4vY29yZS91dGlscy5qcyc7XG5pbXBvcnQgQWN0aW9uRGV0YWlscyBmcm9tICcuLi9jb3JlL2FjdGlvbi1kZXRhaWxzLmpzJztcbmltcG9ydCBNYXNrZWREYXRlIGZyb20gJy4uL21hc2tlZC9kYXRlLmpzJztcbmltcG9ydCBjcmVhdGVNYXNrLCB7IG1hc2tlZENsYXNzIH0gZnJvbSAnLi4vbWFza2VkL2ZhY3RvcnkuanMnO1xuaW1wb3J0IE1hc2tFbGVtZW50IGZyb20gJy4vbWFzay1lbGVtZW50LmpzJztcbmltcG9ydCBIVE1MTWFza0VsZW1lbnQgZnJvbSAnLi9odG1sLW1hc2stZWxlbWVudC5qcyc7XG5pbXBvcnQgSFRNTENvbnRlbnRlZGl0YWJsZU1hc2tFbGVtZW50IGZyb20gJy4vaHRtbC1jb250ZW50ZWRpdGFibGUtbWFzay1lbGVtZW50LmpzJztcbmltcG9ydCBJTWFzayBmcm9tICcuLi9jb3JlL2hvbGRlci5qcyc7XG5pbXBvcnQgJy4uL21hc2tlZC9wYXR0ZXJuLmpzJztcbmltcG9ydCAnLi4vY29yZS9jaGFuZ2UtZGV0YWlscy5qcyc7XG5pbXBvcnQgJy4uL21hc2tlZC9iYXNlLmpzJztcbmltcG9ydCAnLi4vY29yZS9jb250aW51b3VzLXRhaWwtZGV0YWlscy5qcyc7XG5pbXBvcnQgJy4uL21hc2tlZC9wYXR0ZXJuL2lucHV0LWRlZmluaXRpb24uanMnO1xuaW1wb3J0ICcuLi9tYXNrZWQvcGF0dGVybi9maXhlZC1kZWZpbml0aW9uLmpzJztcbmltcG9ydCAnLi4vbWFza2VkL3BhdHRlcm4vY2h1bmstdGFpbC1kZXRhaWxzLmpzJztcbmltcG9ydCAnLi4vbWFza2VkL3JlZ2V4cC5qcyc7XG5pbXBvcnQgJy4uL21hc2tlZC9yYW5nZS5qcyc7XG5cbi8qKiBMaXN0ZW5zIHRvIGVsZW1lbnQgZXZlbnRzIGFuZCBjb250cm9scyBjaGFuZ2VzIGJldHdlZW4gZWxlbWVudCBhbmQge0BsaW5rIE1hc2tlZH0gKi9cblxudmFyIElucHV0TWFzayA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIC8qKlxyXG4gICAgVmlldyBlbGVtZW50XHJcbiAgICBAcmVhZG9ubHlcclxuICAqL1xuXG4gIC8qKlxyXG4gICAgSW50ZXJuYWwge0BsaW5rIE1hc2tlZH0gbW9kZWxcclxuICAgIEByZWFkb25seVxyXG4gICovXG5cbiAgLyoqXHJcbiAgICBAcGFyYW0ge01hc2tFbGVtZW50fEhUTUxJbnB1dEVsZW1lbnR8SFRNTFRleHRBcmVhRWxlbWVudH0gZWxcclxuICAgIEBwYXJhbSB7T2JqZWN0fSBvcHRzXHJcbiAgKi9cbiAgZnVuY3Rpb24gSW5wdXRNYXNrKGVsLCBvcHRzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIElucHV0TWFzayk7XG5cbiAgICB0aGlzLmVsID0gZWwgaW5zdGFuY2VvZiBNYXNrRWxlbWVudCA/IGVsIDogZWwuaXNDb250ZW50RWRpdGFibGUgJiYgZWwudGFnTmFtZSAhPT0gJ0lOUFVUJyAmJiBlbC50YWdOYW1lICE9PSAnVEVYVEFSRUEnID8gbmV3IEhUTUxDb250ZW50ZWRpdGFibGVNYXNrRWxlbWVudChlbCkgOiBuZXcgSFRNTE1hc2tFbGVtZW50KGVsKTtcbiAgICB0aGlzLm1hc2tlZCA9IGNyZWF0ZU1hc2sob3B0cyk7XG4gICAgdGhpcy5fbGlzdGVuZXJzID0ge307XG4gICAgdGhpcy5fdmFsdWUgPSAnJztcbiAgICB0aGlzLl91bm1hc2tlZFZhbHVlID0gJyc7XG4gICAgdGhpcy5fc2F2ZVNlbGVjdGlvbiA9IHRoaXMuX3NhdmVTZWxlY3Rpb24uYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbklucHV0ID0gdGhpcy5fb25JbnB1dC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uQ2hhbmdlID0gdGhpcy5fb25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbkRyb3AgPSB0aGlzLl9vbkRyb3AuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbkZvY3VzID0gdGhpcy5fb25Gb2N1cy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uQ2xpY2sgPSB0aGlzLl9vbkNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5hbGlnbkN1cnNvciA9IHRoaXMuYWxpZ25DdXJzb3IuYmluZCh0aGlzKTtcbiAgICB0aGlzLmFsaWduQ3Vyc29yRnJpZW5kbHkgPSB0aGlzLmFsaWduQ3Vyc29yRnJpZW5kbHkuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuX2JpbmRFdmVudHMoKTsgLy8gcmVmcmVzaFxuXG5cbiAgICB0aGlzLnVwZGF0ZVZhbHVlKCk7XG5cbiAgICB0aGlzLl9vbkNoYW5nZSgpO1xuICB9XG4gIC8qKiBSZWFkIG9yIHVwZGF0ZSBtYXNrICovXG5cblxuICBfY3JlYXRlQ2xhc3MoSW5wdXRNYXNrLCBbe1xuICAgIGtleTogXCJtYXNrXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5tYXNrZWQubWFzaztcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KG1hc2spIHtcbiAgICAgIGlmICh0aGlzLm1hc2tFcXVhbHMobWFzaykpIHJldHVybjtcblxuICAgICAgaWYgKCEobWFzayBpbnN0YW5jZW9mIElNYXNrLk1hc2tlZCkgJiYgdGhpcy5tYXNrZWQuY29uc3RydWN0b3IgPT09IG1hc2tlZENsYXNzKG1hc2spKSB7XG4gICAgICAgIHRoaXMubWFza2VkLnVwZGF0ZU9wdGlvbnMoe1xuICAgICAgICAgIG1hc2s6IG1hc2tcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIG1hc2tlZCA9IGNyZWF0ZU1hc2soe1xuICAgICAgICBtYXNrOiBtYXNrXG4gICAgICB9KTtcbiAgICAgIG1hc2tlZC51bm1hc2tlZFZhbHVlID0gdGhpcy5tYXNrZWQudW5tYXNrZWRWYWx1ZTtcbiAgICAgIHRoaXMubWFza2VkID0gbWFza2VkO1xuICAgIH1cbiAgICAvKiogUmF3IHZhbHVlICovXG5cbiAgfSwge1xuICAgIGtleTogXCJtYXNrRXF1YWxzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1hc2tFcXVhbHMobWFzaykge1xuICAgICAgcmV0dXJuIG1hc2sgPT0gbnVsbCB8fCBtYXNrID09PSB0aGlzLm1hc2tlZC5tYXNrIHx8IG1hc2sgPT09IERhdGUgJiYgdGhpcy5tYXNrZWQgaW5zdGFuY2VvZiBNYXNrZWREYXRlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ2YWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQoc3RyKSB7XG4gICAgICB0aGlzLm1hc2tlZC52YWx1ZSA9IHN0cjtcbiAgICAgIHRoaXMudXBkYXRlQ29udHJvbCgpO1xuICAgICAgdGhpcy5hbGlnbkN1cnNvcigpO1xuICAgIH1cbiAgICAvKiogVW5tYXNrZWQgdmFsdWUgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInVubWFza2VkVmFsdWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl91bm1hc2tlZFZhbHVlO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQoc3RyKSB7XG4gICAgICB0aGlzLm1hc2tlZC51bm1hc2tlZFZhbHVlID0gc3RyO1xuICAgICAgdGhpcy51cGRhdGVDb250cm9sKCk7XG4gICAgICB0aGlzLmFsaWduQ3Vyc29yKCk7XG4gICAgfVxuICAgIC8qKiBUeXBlZCB1bm1hc2tlZCB2YWx1ZSAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidHlwZWRWYWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMubWFza2VkLnR5cGVkVmFsdWU7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWwpIHtcbiAgICAgIHRoaXMubWFza2VkLnR5cGVkVmFsdWUgPSB2YWw7XG4gICAgICB0aGlzLnVwZGF0ZUNvbnRyb2woKTtcbiAgICAgIHRoaXMuYWxpZ25DdXJzb3IoKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIFN0YXJ0cyBsaXN0ZW5pbmcgdG8gZWxlbWVudCBldmVudHNcclxuICAgICAgQHByb3RlY3RlZFxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9iaW5kRXZlbnRzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9iaW5kRXZlbnRzKCkge1xuICAgICAgdGhpcy5lbC5iaW5kRXZlbnRzKHtcbiAgICAgICAgc2VsZWN0aW9uQ2hhbmdlOiB0aGlzLl9zYXZlU2VsZWN0aW9uLFxuICAgICAgICBpbnB1dDogdGhpcy5fb25JbnB1dCxcbiAgICAgICAgZHJvcDogdGhpcy5fb25Ecm9wLFxuICAgICAgICBjbGljazogdGhpcy5fb25DbGljayxcbiAgICAgICAgZm9jdXM6IHRoaXMuX29uRm9jdXMsXG4gICAgICAgIGNvbW1pdDogdGhpcy5fb25DaGFuZ2VcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgU3RvcHMgbGlzdGVuaW5nIHRvIGVsZW1lbnQgZXZlbnRzXHJcbiAgICAgIEBwcm90ZWN0ZWRcclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX3VuYmluZEV2ZW50c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfdW5iaW5kRXZlbnRzKCkge1xuICAgICAgaWYgKHRoaXMuZWwpIHRoaXMuZWwudW5iaW5kRXZlbnRzKCk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBGaXJlcyBjdXN0b20gZXZlbnRcclxuICAgICAgQHByb3RlY3RlZFxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfZmlyZUV2ZW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9maXJlRXZlbnQoZXYpIHtcbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9saXN0ZW5lcnNbZXZdO1xuICAgICAgaWYgKCFsaXN0ZW5lcnMpIHJldHVybjtcbiAgICAgIGxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsKSB7XG4gICAgICAgIHJldHVybiBsLmFwcGx5KHZvaWQgMCwgYXJncyk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEN1cnJlbnQgc2VsZWN0aW9uIHN0YXJ0XHJcbiAgICAgIEByZWFkb25seVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInNlbGVjdGlvblN0YXJ0XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY3Vyc29yQ2hhbmdpbmcgPyB0aGlzLl9jaGFuZ2luZ0N1cnNvclBvcyA6IHRoaXMuZWwuc2VsZWN0aW9uU3RhcnQ7XG4gICAgfVxuICAgIC8qKiBDdXJyZW50IGN1cnNvciBwb3NpdGlvbiAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiY3Vyc29yUG9zXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY3Vyc29yQ2hhbmdpbmcgPyB0aGlzLl9jaGFuZ2luZ0N1cnNvclBvcyA6IHRoaXMuZWwuc2VsZWN0aW9uRW5kO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQocG9zKSB7XG4gICAgICBpZiAoIXRoaXMuZWwgfHwgIXRoaXMuZWwuaXNBY3RpdmUpIHJldHVybjtcbiAgICAgIHRoaXMuZWwuc2VsZWN0KHBvcywgcG9zKTtcblxuICAgICAgdGhpcy5fc2F2ZVNlbGVjdGlvbigpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgU3RvcmVzIGN1cnJlbnQgc2VsZWN0aW9uXHJcbiAgICAgIEBwcm90ZWN0ZWRcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfc2F2ZVNlbGVjdGlvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfc2F2ZVNlbGVjdGlvbigpXG4gICAgLyogZXYgKi9cbiAgICB7XG4gICAgICBpZiAodGhpcy52YWx1ZSAhPT0gdGhpcy5lbC52YWx1ZSkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ0VsZW1lbnQgdmFsdWUgd2FzIGNoYW5nZWQgb3V0c2lkZSBvZiBtYXNrLiBTeW5jcm9uaXplIG1hc2sgdXNpbmcgYG1hc2sudXBkYXRlVmFsdWUoKWAgdG8gd29yayBwcm9wZXJseS4nKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3NlbGVjdGlvbiA9IHtcbiAgICAgICAgc3RhcnQ6IHRoaXMuc2VsZWN0aW9uU3RhcnQsXG4gICAgICAgIGVuZDogdGhpcy5jdXJzb3JQb3NcbiAgICAgIH07XG4gICAgfVxuICAgIC8qKiBTeW5jcm9uaXplcyBtb2RlbCB2YWx1ZSBmcm9tIHZpZXcgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInVwZGF0ZVZhbHVlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZVZhbHVlKCkge1xuICAgICAgdGhpcy5tYXNrZWQudmFsdWUgPSB0aGlzLmVsLnZhbHVlO1xuICAgICAgdGhpcy5fdmFsdWUgPSB0aGlzLm1hc2tlZC52YWx1ZTtcbiAgICB9XG4gICAgLyoqIFN5bmNyb25pemVzIHZpZXcgZnJvbSBtb2RlbCB2YWx1ZSwgZmlyZXMgY2hhbmdlIGV2ZW50cyAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidXBkYXRlQ29udHJvbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVDb250cm9sKCkge1xuICAgICAgdmFyIG5ld1VubWFza2VkVmFsdWUgPSB0aGlzLm1hc2tlZC51bm1hc2tlZFZhbHVlO1xuICAgICAgdmFyIG5ld1ZhbHVlID0gdGhpcy5tYXNrZWQudmFsdWU7XG4gICAgICB2YXIgaXNDaGFuZ2VkID0gdGhpcy51bm1hc2tlZFZhbHVlICE9PSBuZXdVbm1hc2tlZFZhbHVlIHx8IHRoaXMudmFsdWUgIT09IG5ld1ZhbHVlO1xuICAgICAgdGhpcy5fdW5tYXNrZWRWYWx1ZSA9IG5ld1VubWFza2VkVmFsdWU7XG4gICAgICB0aGlzLl92YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgaWYgKHRoaXMuZWwudmFsdWUgIT09IG5ld1ZhbHVlKSB0aGlzLmVsLnZhbHVlID0gbmV3VmFsdWU7XG4gICAgICBpZiAoaXNDaGFuZ2VkKSB0aGlzLl9maXJlQ2hhbmdlRXZlbnRzKCk7XG4gICAgfVxuICAgIC8qKiBVcGRhdGVzIG9wdGlvbnMgd2l0aCBkZWVwIGVxdWFsIGNoZWNrLCByZWNyZWF0ZXMgQHtsaW5rIE1hc2tlZH0gbW9kZWwgaWYgbWFzayB0eXBlIGNoYW5nZXMgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInVwZGF0ZU9wdGlvbnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlT3B0aW9ucyhvcHRzKSB7XG4gICAgICB2YXIgbWFzayA9IG9wdHMubWFzayxcbiAgICAgICAgICByZXN0T3B0cyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvcHRzLCBbXCJtYXNrXCJdKTtcblxuICAgICAgdmFyIHVwZGF0ZU1hc2sgPSAhdGhpcy5tYXNrRXF1YWxzKG1hc2spO1xuICAgICAgdmFyIHVwZGF0ZU9wdHMgPSAhb2JqZWN0SW5jbHVkZXModGhpcy5tYXNrZWQsIHJlc3RPcHRzKTtcbiAgICAgIGlmICh1cGRhdGVNYXNrKSB0aGlzLm1hc2sgPSBtYXNrO1xuICAgICAgaWYgKHVwZGF0ZU9wdHMpIHRoaXMubWFza2VkLnVwZGF0ZU9wdGlvbnMocmVzdE9wdHMpO1xuICAgICAgaWYgKHVwZGF0ZU1hc2sgfHwgdXBkYXRlT3B0cykgdGhpcy51cGRhdGVDb250cm9sKCk7XG4gICAgfVxuICAgIC8qKiBVcGRhdGVzIGN1cnNvciAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidXBkYXRlQ3Vyc29yXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZUN1cnNvcihjdXJzb3JQb3MpIHtcbiAgICAgIGlmIChjdXJzb3JQb3MgPT0gbnVsbCkgcmV0dXJuO1xuICAgICAgdGhpcy5jdXJzb3JQb3MgPSBjdXJzb3JQb3M7IC8vIGFsc28gcXVldWUgY2hhbmdlIGN1cnNvciBmb3IgbW9iaWxlIGJyb3dzZXJzXG5cbiAgICAgIHRoaXMuX2RlbGF5VXBkYXRlQ3Vyc29yKGN1cnNvclBvcyk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBEZWxheXMgY3Vyc29yIHVwZGF0ZSB0byBzdXBwb3J0IG1vYmlsZSBicm93c2Vyc1xyXG4gICAgICBAcHJpdmF0ZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9kZWxheVVwZGF0ZUN1cnNvclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZGVsYXlVcGRhdGVDdXJzb3IoY3Vyc29yUG9zKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB0aGlzLl9hYm9ydFVwZGF0ZUN1cnNvcigpO1xuXG4gICAgICB0aGlzLl9jaGFuZ2luZ0N1cnNvclBvcyA9IGN1cnNvclBvcztcbiAgICAgIHRoaXMuX2N1cnNvckNoYW5naW5nID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghX3RoaXMuZWwpIHJldHVybjsgLy8gaWYgd2FzIGRlc3Ryb3llZFxuXG4gICAgICAgIF90aGlzLmN1cnNvclBvcyA9IF90aGlzLl9jaGFuZ2luZ0N1cnNvclBvcztcblxuICAgICAgICBfdGhpcy5fYWJvcnRVcGRhdGVDdXJzb3IoKTtcbiAgICAgIH0sIDEwKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEZpcmVzIGN1c3RvbSBldmVudHNcclxuICAgICAgQHByb3RlY3RlZFxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9maXJlQ2hhbmdlRXZlbnRzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9maXJlQ2hhbmdlRXZlbnRzKCkge1xuICAgICAgdGhpcy5fZmlyZUV2ZW50KCdhY2NlcHQnLCB0aGlzLl9pbnB1dEV2ZW50KTtcblxuICAgICAgaWYgKHRoaXMubWFza2VkLmlzQ29tcGxldGUpIHRoaXMuX2ZpcmVFdmVudCgnY29tcGxldGUnLCB0aGlzLl9pbnB1dEV2ZW50KTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEFib3J0cyBkZWxheWVkIGN1cnNvciB1cGRhdGVcclxuICAgICAgQHByaXZhdGVcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfYWJvcnRVcGRhdGVDdXJzb3JcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2Fib3J0VXBkYXRlQ3Vyc29yKCkge1xuICAgICAgaWYgKHRoaXMuX2N1cnNvckNoYW5naW5nKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9jdXJzb3JDaGFuZ2luZyk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9jdXJzb3JDaGFuZ2luZztcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqIEFsaWducyBjdXJzb3IgdG8gbmVhcmVzdCBhdmFpbGFibGUgcG9zaXRpb24gKi9cblxuICB9LCB7XG4gICAga2V5OiBcImFsaWduQ3Vyc29yXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFsaWduQ3Vyc29yKCkge1xuICAgICAgdGhpcy5jdXJzb3JQb3MgPSB0aGlzLm1hc2tlZC5uZWFyZXN0SW5wdXRQb3ModGhpcy5jdXJzb3JQb3MsIERJUkVDVElPTi5MRUZUKTtcbiAgICB9XG4gICAgLyoqIEFsaWducyBjdXJzb3Igb25seSBpZiBzZWxlY3Rpb24gaXMgZW1wdHkgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImFsaWduQ3Vyc29yRnJpZW5kbHlcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWxpZ25DdXJzb3JGcmllbmRseSgpIHtcbiAgICAgIGlmICh0aGlzLnNlbGVjdGlvblN0YXJ0ICE9PSB0aGlzLmN1cnNvclBvcykgcmV0dXJuOyAvLyBza2lwIGlmIHJhbmdlIGlzIHNlbGVjdGVkXG5cbiAgICAgIHRoaXMuYWxpZ25DdXJzb3IoKTtcbiAgICB9XG4gICAgLyoqIEFkZHMgbGlzdGVuZXIgb24gY3VzdG9tIGV2ZW50ICovXG5cbiAgfSwge1xuICAgIGtleTogXCJvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbihldiwgaGFuZGxlcikge1xuICAgICAgaWYgKCF0aGlzLl9saXN0ZW5lcnNbZXZdKSB0aGlzLl9saXN0ZW5lcnNbZXZdID0gW107XG5cbiAgICAgIHRoaXMuX2xpc3RlbmVyc1tldl0ucHVzaChoYW5kbGVyKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKiBSZW1vdmVzIGN1c3RvbSBldmVudCBsaXN0ZW5lciAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwib2ZmXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9mZihldiwgaGFuZGxlcikge1xuICAgICAgaWYgKCF0aGlzLl9saXN0ZW5lcnNbZXZdKSByZXR1cm4gdGhpcztcblxuICAgICAgaWYgKCFoYW5kbGVyKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9saXN0ZW5lcnNbZXZdO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgdmFyIGhJbmRleCA9IHRoaXMuX2xpc3RlbmVyc1tldl0uaW5kZXhPZihoYW5kbGVyKTtcblxuICAgICAgaWYgKGhJbmRleCA+PSAwKSB0aGlzLl9saXN0ZW5lcnNbZXZdLnNwbGljZShoSW5kZXgsIDEpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKiBIYW5kbGVzIHZpZXcgaW5wdXQgZXZlbnQgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9vbklucHV0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9vbklucHV0KGUpIHtcbiAgICAgIHRoaXMuX2lucHV0RXZlbnQgPSBlO1xuXG4gICAgICB0aGlzLl9hYm9ydFVwZGF0ZUN1cnNvcigpOyAvLyBmaXggc3RyYW5nZSBJRSBiZWhhdmlvclxuXG5cbiAgICAgIGlmICghdGhpcy5fc2VsZWN0aW9uKSByZXR1cm4gdGhpcy51cGRhdGVWYWx1ZSgpO1xuICAgICAgdmFyIGRldGFpbHMgPSBuZXcgQWN0aW9uRGV0YWlscyggLy8gbmV3IHN0YXRlXG4gICAgICB0aGlzLmVsLnZhbHVlLCB0aGlzLmN1cnNvclBvcywgLy8gb2xkIHN0YXRlXG4gICAgICB0aGlzLnZhbHVlLCB0aGlzLl9zZWxlY3Rpb24pO1xuICAgICAgdmFyIG9sZFJhd1ZhbHVlID0gdGhpcy5tYXNrZWQucmF3SW5wdXRWYWx1ZTtcbiAgICAgIHZhciBvZmZzZXQgPSB0aGlzLm1hc2tlZC5zcGxpY2UoZGV0YWlscy5zdGFydENoYW5nZVBvcywgZGV0YWlscy5yZW1vdmVkLmxlbmd0aCwgZGV0YWlscy5pbnNlcnRlZCwgZGV0YWlscy5yZW1vdmVEaXJlY3Rpb24pLm9mZnNldDsgLy8gZm9yY2UgYWxpZ24gaW4gcmVtb3ZlIGRpcmVjdGlvbiBvbmx5IGlmIG5vIGlucHV0IGNoYXJzIHdlcmUgcmVtb3ZlZFxuICAgICAgLy8gb3RoZXJ3aXNlIHdlIHN0aWxsIG5lZWQgdG8gYWxpZ24gd2l0aCBOT05FICh0byBnZXQgb3V0IGZyb20gZml4ZWQgc3ltYm9scyBmb3IgaW5zdGFuY2UpXG5cbiAgICAgIHZhciByZW1vdmVEaXJlY3Rpb24gPSBvbGRSYXdWYWx1ZSA9PT0gdGhpcy5tYXNrZWQucmF3SW5wdXRWYWx1ZSA/IGRldGFpbHMucmVtb3ZlRGlyZWN0aW9uIDogRElSRUNUSU9OLk5PTkU7XG4gICAgICB2YXIgY3Vyc29yUG9zID0gdGhpcy5tYXNrZWQubmVhcmVzdElucHV0UG9zKGRldGFpbHMuc3RhcnRDaGFuZ2VQb3MgKyBvZmZzZXQsIHJlbW92ZURpcmVjdGlvbik7XG4gICAgICB0aGlzLnVwZGF0ZUNvbnRyb2woKTtcbiAgICAgIHRoaXMudXBkYXRlQ3Vyc29yKGN1cnNvclBvcyk7XG4gICAgICBkZWxldGUgdGhpcy5faW5wdXRFdmVudDtcbiAgICB9XG4gICAgLyoqIEhhbmRsZXMgdmlldyBjaGFuZ2UgZXZlbnQgYW5kIGNvbW1pdHMgbW9kZWwgdmFsdWUgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9vbkNoYW5nZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfb25DaGFuZ2UoKSB7XG4gICAgICBpZiAodGhpcy52YWx1ZSAhPT0gdGhpcy5lbC52YWx1ZSkge1xuICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMubWFza2VkLmRvQ29tbWl0KCk7XG4gICAgICB0aGlzLnVwZGF0ZUNvbnRyb2woKTtcblxuICAgICAgdGhpcy5fc2F2ZVNlbGVjdGlvbigpO1xuICAgIH1cbiAgICAvKiogSGFuZGxlcyB2aWV3IGRyb3AgZXZlbnQsIHByZXZlbnRzIGJ5IGRlZmF1bHQgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9vbkRyb3BcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX29uRHJvcChldikge1xuICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgICAvKiogUmVzdG9yZSBsYXN0IHNlbGVjdGlvbiBvbiBmb2N1cyAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX29uRm9jdXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX29uRm9jdXMoZXYpIHtcbiAgICAgIHRoaXMuYWxpZ25DdXJzb3JGcmllbmRseSgpO1xuICAgIH1cbiAgICAvKiogUmVzdG9yZSBsYXN0IHNlbGVjdGlvbiBvbiBmb2N1cyAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX29uQ2xpY2tcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX29uQ2xpY2soZXYpIHtcbiAgICAgIHRoaXMuYWxpZ25DdXJzb3JGcmllbmRseSgpO1xuICAgIH1cbiAgICAvKiogVW5iaW5kIHZpZXcgZXZlbnRzIGFuZCByZW1vdmVzIGVsZW1lbnQgcmVmZXJlbmNlICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkZXN0cm95XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICB0aGlzLl91bmJpbmRFdmVudHMoKTsgLy8gJEZsb3dGaXhNZSB3aHkgbm90IGRvIHNvP1xuXG5cbiAgICAgIHRoaXMuX2xpc3RlbmVycy5sZW5ndGggPSAwOyAvLyAkRmxvd0ZpeE1lXG5cbiAgICAgIGRlbGV0ZSB0aGlzLmVsO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBJbnB1dE1hc2s7XG59KCk7XG5JTWFzay5JbnB1dE1hc2sgPSBJbnB1dE1hc2s7XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0TWFzaztcbiIsImltcG9ydCB7IF8gYXMgX2NyZWF0ZUNsYXNzLCBhIGFzIF9jbGFzc0NhbGxDaGVjayB9IGZyb20gJy4uL19yb2xsdXBQbHVnaW5CYWJlbEhlbHBlcnMtNmNjYjFmNjQuanMnO1xuaW1wb3J0IElNYXNrIGZyb20gJy4uL2NvcmUvaG9sZGVyLmpzJztcblxuLyoqXHJcbiAgR2VuZXJpYyBlbGVtZW50IEFQSSB0byB1c2Ugd2l0aCBtYXNrXHJcbiAgQGludGVyZmFjZVxyXG4qL1xudmFyIE1hc2tFbGVtZW50ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTWFza0VsZW1lbnQoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1hc2tFbGVtZW50KTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhNYXNrRWxlbWVudCwgW3tcbiAgICBrZXk6IFwic2VsZWN0aW9uU3RhcnRcIixcbiAgICBnZXQ6XG4gICAgLyoqICovXG5cbiAgICAvKiogKi9cblxuICAgIC8qKiAqL1xuXG4gICAgLyoqIFNhZmVseSByZXR1cm5zIHNlbGVjdGlvbiBzdGFydCAqL1xuICAgIGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciBzdGFydDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgc3RhcnQgPSB0aGlzLl91bnNhZmVTZWxlY3Rpb25TdGFydDtcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG5cbiAgICAgIHJldHVybiBzdGFydCAhPSBudWxsID8gc3RhcnQgOiB0aGlzLnZhbHVlLmxlbmd0aDtcbiAgICB9XG4gICAgLyoqIFNhZmVseSByZXR1cm5zIHNlbGVjdGlvbiBlbmQgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInNlbGVjdGlvbkVuZFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdmFyIGVuZDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgZW5kID0gdGhpcy5fdW5zYWZlU2VsZWN0aW9uRW5kO1xuICAgICAgfSBjYXRjaCAoZSkge31cblxuICAgICAgcmV0dXJuIGVuZCAhPSBudWxsID8gZW5kIDogdGhpcy52YWx1ZS5sZW5ndGg7XG4gICAgfVxuICAgIC8qKiBTYWZlbHkgc2V0cyBlbGVtZW50IHNlbGVjdGlvbiAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic2VsZWN0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNlbGVjdChzdGFydCwgZW5kKSB7XG4gICAgICBpZiAoc3RhcnQgPT0gbnVsbCB8fCBlbmQgPT0gbnVsbCB8fCBzdGFydCA9PT0gdGhpcy5zZWxlY3Rpb25TdGFydCAmJiBlbmQgPT09IHRoaXMuc2VsZWN0aW9uRW5kKSByZXR1cm47XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuX3Vuc2FmZVNlbGVjdChzdGFydCwgZW5kKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfVxuICAgIC8qKiBTaG91bGQgYmUgb3ZlcnJpZGVuIGluIHN1YmNsYXNzZXMgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl91bnNhZmVTZWxlY3RcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3Vuc2FmZVNlbGVjdChzdGFydCwgZW5kKSB7fVxuICAgIC8qKiBTaG91bGQgYmUgb3ZlcnJpZGVuIGluIHN1YmNsYXNzZXMgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImlzQWN0aXZlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8qKiBTaG91bGQgYmUgb3ZlcnJpZGVuIGluIHN1YmNsYXNzZXMgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImJpbmRFdmVudHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYmluZEV2ZW50cyhoYW5kbGVycykge31cbiAgICAvKiogU2hvdWxkIGJlIG92ZXJyaWRlbiBpbiBzdWJjbGFzc2VzICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ1bmJpbmRFdmVudHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdW5iaW5kRXZlbnRzKCkge31cbiAgfV0pO1xuXG4gIHJldHVybiBNYXNrRWxlbWVudDtcbn0oKTtcbklNYXNrLk1hc2tFbGVtZW50ID0gTWFza0VsZW1lbnQ7XG5cbmV4cG9ydCBkZWZhdWx0IE1hc2tFbGVtZW50O1xuIiwiaW1wb3J0IHsgXyBhcyBfY3JlYXRlQ2xhc3MsIGEgYXMgX2NsYXNzQ2FsbENoZWNrIH0gZnJvbSAnLi4vX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycy02Y2NiMWY2NC5qcyc7XG5pbXBvcnQgeyBESVJFQ1RJT04gfSBmcm9tICcuL3V0aWxzLmpzJztcblxuLyoqIFByb3ZpZGVzIGRldGFpbHMgb2YgY2hhbmdpbmcgaW5wdXQgKi9cblxudmFyIEFjdGlvbkRldGFpbHMgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAvKiogQ3VycmVudCBpbnB1dCB2YWx1ZSAqL1xuXG4gIC8qKiBDdXJyZW50IGN1cnNvciBwb3NpdGlvbiAqL1xuXG4gIC8qKiBPbGQgaW5wdXQgdmFsdWUgKi9cblxuICAvKiogT2xkIHNlbGVjdGlvbiAqL1xuICBmdW5jdGlvbiBBY3Rpb25EZXRhaWxzKHZhbHVlLCBjdXJzb3JQb3MsIG9sZFZhbHVlLCBvbGRTZWxlY3Rpb24pIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQWN0aW9uRGV0YWlscyk7XG5cbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5jdXJzb3JQb3MgPSBjdXJzb3JQb3M7XG4gICAgdGhpcy5vbGRWYWx1ZSA9IG9sZFZhbHVlO1xuICAgIHRoaXMub2xkU2VsZWN0aW9uID0gb2xkU2VsZWN0aW9uOyAvLyBkb3VibGUgY2hlY2sgaWYgbGVmdCBwYXJ0IHdhcyBjaGFuZ2VkIChhdXRvZmlsbGluZywgb3RoZXIgbm9uLXN0YW5kYXJkIGlucHV0IHRyaWdnZXJzKVxuXG4gICAgd2hpbGUgKHRoaXMudmFsdWUuc2xpY2UoMCwgdGhpcy5zdGFydENoYW5nZVBvcykgIT09IHRoaXMub2xkVmFsdWUuc2xpY2UoMCwgdGhpcy5zdGFydENoYW5nZVBvcykpIHtcbiAgICAgIC0tdGhpcy5vbGRTZWxlY3Rpb24uc3RhcnQ7XG4gICAgfVxuICB9XG4gIC8qKlxyXG4gICAgU3RhcnQgY2hhbmdpbmcgcG9zaXRpb25cclxuICAgIEByZWFkb25seVxyXG4gICovXG5cblxuICBfY3JlYXRlQ2xhc3MoQWN0aW9uRGV0YWlscywgW3tcbiAgICBrZXk6IFwic3RhcnRDaGFuZ2VQb3NcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBNYXRoLm1pbih0aGlzLmN1cnNvclBvcywgdGhpcy5vbGRTZWxlY3Rpb24uc3RhcnQpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgSW5zZXJ0ZWQgc3ltYm9scyBjb3VudFxyXG4gICAgICBAcmVhZG9ubHlcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJpbnNlcnRlZENvdW50XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jdXJzb3JQb3MgLSB0aGlzLnN0YXJ0Q2hhbmdlUG9zO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgSW5zZXJ0ZWQgc3ltYm9sc1xyXG4gICAgICBAcmVhZG9ubHlcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJpbnNlcnRlZFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWUuc3Vic3RyKHRoaXMuc3RhcnRDaGFuZ2VQb3MsIHRoaXMuaW5zZXJ0ZWRDb3VudCk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBSZW1vdmVkIHN5bWJvbHMgY291bnRcclxuICAgICAgQHJlYWRvbmx5XHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlZENvdW50XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAvLyBNYXRoLm1heCBmb3Igb3Bwb3NpdGUgb3BlcmF0aW9uXG4gICAgICByZXR1cm4gTWF0aC5tYXgodGhpcy5vbGRTZWxlY3Rpb24uZW5kIC0gdGhpcy5zdGFydENoYW5nZVBvcyB8fCAvLyBmb3IgRGVsZXRlXG4gICAgICB0aGlzLm9sZFZhbHVlLmxlbmd0aCAtIHRoaXMudmFsdWUubGVuZ3RoLCAwKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIFJlbW92ZWQgc3ltYm9sc1xyXG4gICAgICBAcmVhZG9ubHlcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJyZW1vdmVkXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5vbGRWYWx1ZS5zdWJzdHIodGhpcy5zdGFydENoYW5nZVBvcywgdGhpcy5yZW1vdmVkQ291bnQpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgVW5jaGFuZ2VkIGhlYWQgc3ltYm9sc1xyXG4gICAgICBAcmVhZG9ubHlcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJoZWFkXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZS5zdWJzdHJpbmcoMCwgdGhpcy5zdGFydENoYW5nZVBvcyk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBVbmNoYW5nZWQgdGFpbCBzeW1ib2xzXHJcbiAgICAgIEByZWFkb25seVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInRhaWxcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlLnN1YnN0cmluZyh0aGlzLnN0YXJ0Q2hhbmdlUG9zICsgdGhpcy5pbnNlcnRlZENvdW50KTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIFJlbW92ZSBkaXJlY3Rpb25cclxuICAgICAgQHJlYWRvbmx5XHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlRGlyZWN0aW9uXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICBpZiAoIXRoaXMucmVtb3ZlZENvdW50IHx8IHRoaXMuaW5zZXJ0ZWRDb3VudCkgcmV0dXJuIERJUkVDVElPTi5OT05FOyAvLyBhbGlnbiByaWdodCBpZiBkZWxldGUgYXQgcmlnaHQgb3IgaWYgcmFuZ2UgcmVtb3ZlZCAoZXZlbnQgd2l0aCBiYWNrc3BhY2UpXG5cbiAgICAgIHJldHVybiB0aGlzLm9sZFNlbGVjdGlvbi5lbmQgPT09IHRoaXMuY3Vyc29yUG9zIHx8IHRoaXMub2xkU2VsZWN0aW9uLnN0YXJ0ID09PSB0aGlzLmN1cnNvclBvcyA/IERJUkVDVElPTi5SSUdIVCA6IERJUkVDVElPTi5MRUZUO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBBY3Rpb25EZXRhaWxzO1xufSgpO1xuXG5leHBvcnQgZGVmYXVsdCBBY3Rpb25EZXRhaWxzO1xuIiwiaW1wb3J0IHsgXyBhcyBfY3JlYXRlQ2xhc3MsIGEgYXMgX2NsYXNzQ2FsbENoZWNrIH0gZnJvbSAnLi4vX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycy02Y2NiMWY2NC5qcyc7XG5cbi8qKlxyXG4gIFByb3ZpZGVzIGRldGFpbHMgb2YgY2hhbmdpbmcgbW9kZWwgdmFsdWVcclxuICBAcGFyYW0ge09iamVjdH0gW2RldGFpbHNdXHJcbiAgQHBhcmFtIHtzdHJpbmd9IFtkZXRhaWxzLmluc2VydGVkXSAtIEluc2VydGVkIHN5bWJvbHNcclxuICBAcGFyYW0ge2Jvb2xlYW59IFtkZXRhaWxzLnNraXBdIC0gQ2FuIHNraXAgY2hhcnNcclxuICBAcGFyYW0ge251bWJlcn0gW2RldGFpbHMucmVtb3ZlQ291bnRdIC0gUmVtb3ZlZCBzeW1ib2xzIGNvdW50XHJcbiAgQHBhcmFtIHtudW1iZXJ9IFtkZXRhaWxzLnRhaWxTaGlmdF0gLSBBZGRpdGlvbmFsIG9mZnNldCBpZiBhbnkgY2hhbmdlcyBvY2N1cnJlZCBiZWZvcmUgdGFpbFxyXG4qL1xudmFyIENoYW5nZURldGFpbHMgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAvKiogSW5zZXJ0ZWQgc3ltYm9scyAqL1xuXG4gIC8qKiBDYW4gc2tpcCBjaGFycyAqL1xuXG4gIC8qKiBBZGRpdGlvbmFsIG9mZnNldCBpZiBhbnkgY2hhbmdlcyBvY2N1cnJlZCBiZWZvcmUgdGFpbCAqL1xuXG4gIC8qKiBSYXcgaW5zZXJ0ZWQgaXMgdXNlZCBieSBkeW5hbWljIG1hc2sgKi9cbiAgZnVuY3Rpb24gQ2hhbmdlRGV0YWlscyhkZXRhaWxzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENoYW5nZURldGFpbHMpO1xuXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7XG4gICAgICBpbnNlcnRlZDogJycsXG4gICAgICByYXdJbnNlcnRlZDogJycsXG4gICAgICBza2lwOiBmYWxzZSxcbiAgICAgIHRhaWxTaGlmdDogMFxuICAgIH0sIGRldGFpbHMpO1xuICB9XG4gIC8qKlxyXG4gICAgQWdncmVnYXRlIGNoYW5nZXNcclxuICAgIEByZXR1cm5zIHtDaGFuZ2VEZXRhaWxzfSBgdGhpc2BcclxuICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKENoYW5nZURldGFpbHMsIFt7XG4gICAga2V5OiBcImFnZ3JlZ2F0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZ2dyZWdhdGUoZGV0YWlscykge1xuICAgICAgdGhpcy5yYXdJbnNlcnRlZCArPSBkZXRhaWxzLnJhd0luc2VydGVkO1xuICAgICAgdGhpcy5za2lwID0gdGhpcy5za2lwIHx8IGRldGFpbHMuc2tpcDtcbiAgICAgIHRoaXMuaW5zZXJ0ZWQgKz0gZGV0YWlscy5pbnNlcnRlZDtcbiAgICAgIHRoaXMudGFpbFNoaWZ0ICs9IGRldGFpbHMudGFpbFNoaWZ0O1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKiBUb3RhbCBvZmZzZXQgY29uc2lkZXJpbmcgYWxsIGNoYW5nZXMgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm9mZnNldFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMudGFpbFNoaWZ0ICsgdGhpcy5pbnNlcnRlZC5sZW5ndGg7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIENoYW5nZURldGFpbHM7XG59KCk7XG5cbmV4cG9ydCBkZWZhdWx0IENoYW5nZURldGFpbHM7XG4iLCJpbXBvcnQgeyBfIGFzIF9jcmVhdGVDbGFzcywgYSBhcyBfY2xhc3NDYWxsQ2hlY2sgfSBmcm9tICcuLi9fcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzLTZjY2IxZjY0LmpzJztcblxuLyoqIFByb3ZpZGVzIGRldGFpbHMgb2YgY29udGludW91cyBleHRyYWN0ZWQgdGFpbCAqL1xudmFyIENvbnRpbnVvdXNUYWlsRGV0YWlscyA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIC8qKiBUYWlsIHZhbHVlIGFzIHN0cmluZyAqL1xuXG4gIC8qKiBUYWlsIHN0YXJ0IHBvc2l0aW9uICovXG5cbiAgLyoqIFN0YXJ0IHBvc2l0aW9uICovXG4gIGZ1bmN0aW9uIENvbnRpbnVvdXNUYWlsRGV0YWlscygpIHtcbiAgICB2YXIgdmFsdWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6ICcnO1xuICAgIHZhciBmcm9tID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAwO1xuICAgIHZhciBzdG9wID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29udGludW91c1RhaWxEZXRhaWxzKTtcblxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmZyb20gPSBmcm9tO1xuICAgIHRoaXMuc3RvcCA9IHN0b3A7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQ29udGludW91c1RhaWxEZXRhaWxzLCBbe1xuICAgIGtleTogXCJ0b1N0cmluZ1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJleHRlbmRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZXh0ZW5kKHRhaWwpIHtcbiAgICAgIHRoaXMudmFsdWUgKz0gU3RyaW5nKHRhaWwpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJhcHBlbmRUb1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhcHBlbmRUbyhtYXNrZWQpIHtcbiAgICAgIHJldHVybiBtYXNrZWQuYXBwZW5kKHRoaXMudG9TdHJpbmcoKSwge1xuICAgICAgICB0YWlsOiB0cnVlXG4gICAgICB9KS5hZ2dyZWdhdGUobWFza2VkLl9hcHBlbmRQbGFjZWhvbGRlcigpKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic3RhdGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgICBmcm9tOiB0aGlzLmZyb20sXG4gICAgICAgIHN0b3A6IHRoaXMuc3RvcFxuICAgICAgfTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHN0YXRlKSB7XG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMsIHN0YXRlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2hpZnRCZWZvcmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2hpZnRCZWZvcmUocG9zKSB7XG4gICAgICBpZiAodGhpcy5mcm9tID49IHBvcyB8fCAhdGhpcy52YWx1ZS5sZW5ndGgpIHJldHVybiAnJztcbiAgICAgIHZhciBzaGlmdENoYXIgPSB0aGlzLnZhbHVlWzBdO1xuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWUuc2xpY2UoMSk7XG4gICAgICByZXR1cm4gc2hpZnRDaGFyO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBDb250aW51b3VzVGFpbERldGFpbHM7XG59KCk7XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRpbnVvdXNUYWlsRGV0YWlscztcbiIsIi8qKlxyXG4gKiBBcHBsaWVzIG1hc2sgb24gZWxlbWVudC5cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqIEBwYXJhbSB7SFRNTElucHV0RWxlbWVudHxIVE1MVGV4dEFyZWFFbGVtZW50fE1hc2tFbGVtZW50fSBlbCAtIEVsZW1lbnQgdG8gYXBwbHkgbWFza1xyXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIEN1c3RvbSBtYXNrIG9wdGlvbnNcclxuICogQHJldHVybiB7SW5wdXRNYXNrfVxyXG4gKi9cbmZ1bmN0aW9uIElNYXNrKGVsKSB7XG4gIHZhciBvcHRzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgLy8gY3VycmVudGx5IGF2YWlsYWJsZSBvbmx5IGZvciBpbnB1dC1saWtlIGVsZW1lbnRzXG4gIHJldHVybiBuZXcgSU1hc2suSW5wdXRNYXNrKGVsLCBvcHRzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSU1hc2s7XG4iLCJpbXBvcnQgeyBjIGFzIF90eXBlb2YgfSBmcm9tICcuLi9fcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzLTZjY2IxZjY0LmpzJztcblxuLyoqIENoZWNrcyBpZiB2YWx1ZSBpcyBzdHJpbmcgKi9cbmZ1bmN0aW9uIGlzU3RyaW5nKHN0cikge1xuICByZXR1cm4gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZycgfHwgc3RyIGluc3RhbmNlb2YgU3RyaW5nO1xufVxuLyoqXHJcbiAgRGlyZWN0aW9uXHJcbiAgQHByb3Age3N0cmluZ30gTk9ORVxyXG4gIEBwcm9wIHtzdHJpbmd9IExFRlRcclxuICBAcHJvcCB7c3RyaW5nfSBGT1JDRV9MRUZUXHJcbiAgQHByb3Age3N0cmluZ30gUklHSFRcclxuICBAcHJvcCB7c3RyaW5nfSBGT1JDRV9SSUdIVFxyXG4qL1xuXG52YXIgRElSRUNUSU9OID0ge1xuICBOT05FOiAnTk9ORScsXG4gIExFRlQ6ICdMRUZUJyxcbiAgRk9SQ0VfTEVGVDogJ0ZPUkNFX0xFRlQnLFxuICBSSUdIVDogJ1JJR0hUJyxcbiAgRk9SQ0VfUklHSFQ6ICdGT1JDRV9SSUdIVCdcbn07XG4vKipcclxuICBEaXJlY3Rpb25cclxuICBAZW51bSB7c3RyaW5nfVxyXG4qL1xuXG4vKiogUmV0dXJucyBuZXh0IGNoYXIgaW5kZXggaW4gZGlyZWN0aW9uICovXG5mdW5jdGlvbiBpbmRleEluRGlyZWN0aW9uKHBvcywgZGlyZWN0aW9uKSB7XG4gIGlmIChkaXJlY3Rpb24gPT09IERJUkVDVElPTi5MRUZUKSAtLXBvcztcbiAgcmV0dXJuIHBvcztcbn1cbi8qKiBSZXR1cm5zIG5leHQgY2hhciBwb3NpdGlvbiBpbiBkaXJlY3Rpb24gKi9cblxuZnVuY3Rpb24gcG9zSW5EaXJlY3Rpb24ocG9zLCBkaXJlY3Rpb24pIHtcbiAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICBjYXNlIERJUkVDVElPTi5MRUZUOlxuICAgIGNhc2UgRElSRUNUSU9OLkZPUkNFX0xFRlQ6XG4gICAgICByZXR1cm4gLS1wb3M7XG5cbiAgICBjYXNlIERJUkVDVElPTi5SSUdIVDpcbiAgICBjYXNlIERJUkVDVElPTi5GT1JDRV9SSUdIVDpcbiAgICAgIHJldHVybiArK3BvcztcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gcG9zO1xuICB9XG59XG4vKiogKi9cblxuZnVuY3Rpb24gZm9yY2VEaXJlY3Rpb24oZGlyZWN0aW9uKSB7XG4gIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgY2FzZSBESVJFQ1RJT04uTEVGVDpcbiAgICAgIHJldHVybiBESVJFQ1RJT04uRk9SQ0VfTEVGVDtcblxuICAgIGNhc2UgRElSRUNUSU9OLlJJR0hUOlxuICAgICAgcmV0dXJuIERJUkVDVElPTi5GT1JDRV9SSUdIVDtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZGlyZWN0aW9uO1xuICB9XG59XG4vKiogRXNjYXBlcyByZWd1bGFyIGV4cHJlc3Npb24gY29udHJvbCBjaGFycyAqL1xuXG5mdW5jdGlvbiBlc2NhcGVSZWdFeHAoc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKis/Xj0hOiR7fSgpfFtcXF1cXC9cXFxcXSkvZywgJ1xcXFwkMScpO1xufSAvLyBjbG9uZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZXBvYmVyZXpraW4vZmFzdC1kZWVwLWVxdWFsIHdpdGggc21hbGwgY2hhbmdlc1xuXG5mdW5jdGlvbiBvYmplY3RJbmNsdWRlcyhiLCBhKSB7XG4gIGlmIChhID09PSBiKSByZXR1cm4gdHJ1ZTtcbiAgdmFyIGFyckEgPSBBcnJheS5pc0FycmF5KGEpLFxuICAgICAgYXJyQiA9IEFycmF5LmlzQXJyYXkoYiksXG4gICAgICBpO1xuXG4gIGlmIChhcnJBICYmIGFyckIpIHtcbiAgICBpZiAoYS5sZW5ndGggIT0gYi5sZW5ndGgpIHJldHVybiBmYWxzZTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoIW9iamVjdEluY2x1ZGVzKGFbaV0sIGJbaV0pKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAoYXJyQSAhPSBhcnJCKSByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKGEgJiYgYiAmJiBfdHlwZW9mKGEpID09PSAnb2JqZWN0JyAmJiBfdHlwZW9mKGIpID09PSAnb2JqZWN0Jykge1xuICAgIHZhciBkYXRlQSA9IGEgaW5zdGFuY2VvZiBEYXRlLFxuICAgICAgICBkYXRlQiA9IGIgaW5zdGFuY2VvZiBEYXRlO1xuICAgIGlmIChkYXRlQSAmJiBkYXRlQikgcmV0dXJuIGEuZ2V0VGltZSgpID09IGIuZ2V0VGltZSgpO1xuICAgIGlmIChkYXRlQSAhPSBkYXRlQikgcmV0dXJuIGZhbHNlO1xuICAgIHZhciByZWdleHBBID0gYSBpbnN0YW5jZW9mIFJlZ0V4cCxcbiAgICAgICAgcmVnZXhwQiA9IGIgaW5zdGFuY2VvZiBSZWdFeHA7XG4gICAgaWYgKHJlZ2V4cEEgJiYgcmVnZXhwQikgcmV0dXJuIGEudG9TdHJpbmcoKSA9PSBiLnRvU3RyaW5nKCk7XG4gICAgaWYgKHJlZ2V4cEEgIT0gcmVnZXhwQikgcmV0dXJuIGZhbHNlO1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoYSk7IC8vIGlmIChrZXlzLmxlbmd0aCAhPT0gT2JqZWN0LmtleXMoYikubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwga2V5c1tpXSkpIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKCFvYmplY3RJbmNsdWRlcyhiW2tleXNbaV1dLCBhW2tleXNbaV1dKSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2UgaWYgKGEgJiYgYiAmJiB0eXBlb2YgYSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgYiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBhLnRvU3RyaW5nKCkgPT09IGIudG9TdHJpbmcoKTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cbi8qKiBTZWxlY3Rpb24gcmFuZ2UgKi9cblxuZXhwb3J0IHsgRElSRUNUSU9OLCBlc2NhcGVSZWdFeHAsIGZvcmNlRGlyZWN0aW9uLCBpbmRleEluRGlyZWN0aW9uLCBpc1N0cmluZywgb2JqZWN0SW5jbHVkZXMsIHBvc0luRGlyZWN0aW9uIH07XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIElucHV0TWFzayB9IGZyb20gJy4vY29udHJvbHMvaW5wdXQuanMnO1xuaW1wb3J0IElNYXNrIGZyb20gJy4vY29yZS9ob2xkZXIuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vY29yZS9ob2xkZXIuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNYXNrZWQgfSBmcm9tICcuL21hc2tlZC9iYXNlLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWFza2VkUGF0dGVybiB9IGZyb20gJy4vbWFza2VkL3BhdHRlcm4uanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNYXNrZWRFbnVtIH0gZnJvbSAnLi9tYXNrZWQvZW51bS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1hc2tlZFJhbmdlIH0gZnJvbSAnLi9tYXNrZWQvcmFuZ2UuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNYXNrZWROdW1iZXIgfSBmcm9tICcuL21hc2tlZC9udW1iZXIuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNYXNrZWREYXRlIH0gZnJvbSAnLi9tYXNrZWQvZGF0ZS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1hc2tlZFJlZ0V4cCB9IGZyb20gJy4vbWFza2VkL3JlZ2V4cC5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1hc2tlZEZ1bmN0aW9uIH0gZnJvbSAnLi9tYXNrZWQvZnVuY3Rpb24uanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNYXNrZWREeW5hbWljIH0gZnJvbSAnLi9tYXNrZWQvZHluYW1pYy5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNyZWF0ZU1hc2sgfSBmcm9tICcuL21hc2tlZC9mYWN0b3J5LmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWFza0VsZW1lbnQgfSBmcm9tICcuL2NvbnRyb2xzL21hc2stZWxlbWVudC5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEhUTUxNYXNrRWxlbWVudCB9IGZyb20gJy4vY29udHJvbHMvaHRtbC1tYXNrLWVsZW1lbnQuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBIVE1MQ29udGVudGVkaXRhYmxlTWFza0VsZW1lbnQgfSBmcm9tICcuL2NvbnRyb2xzL2h0bWwtY29udGVudGVkaXRhYmxlLW1hc2stZWxlbWVudC5qcyc7XG5leHBvcnQgeyBQSVBFX1RZUEUsIGNyZWF0ZVBpcGUsIHBpcGUgfSBmcm9tICcuL21hc2tlZC9waXBlLmpzJztcbmltcG9ydCAnLi9fcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzLTZjY2IxZjY0LmpzJztcbmltcG9ydCAnLi9jb3JlL3V0aWxzLmpzJztcbmltcG9ydCAnLi9jb3JlL2FjdGlvbi1kZXRhaWxzLmpzJztcbmltcG9ydCAnLi9jb3JlL2NoYW5nZS1kZXRhaWxzLmpzJztcbmltcG9ydCAnLi9jb3JlL2NvbnRpbnVvdXMtdGFpbC1kZXRhaWxzLmpzJztcbmltcG9ydCAnLi9tYXNrZWQvcGF0dGVybi9pbnB1dC1kZWZpbml0aW9uLmpzJztcbmltcG9ydCAnLi9tYXNrZWQvcGF0dGVybi9maXhlZC1kZWZpbml0aW9uLmpzJztcbmltcG9ydCAnLi9tYXNrZWQvcGF0dGVybi9jaHVuay10YWlsLWRldGFpbHMuanMnO1xuXG50cnkge1xuICBnbG9iYWxUaGlzLklNYXNrID0gSU1hc2s7XG59IGNhdGNoIChlKSB7fVxuIiwiaW1wb3J0IHsgXyBhcyBfY3JlYXRlQ2xhc3MsIGEgYXMgX2NsYXNzQ2FsbENoZWNrIH0gZnJvbSAnLi4vX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycy02Y2NiMWY2NC5qcyc7XG5pbXBvcnQgQ2hhbmdlRGV0YWlscyBmcm9tICcuLi9jb3JlL2NoYW5nZS1kZXRhaWxzLmpzJztcbmltcG9ydCBDb250aW51b3VzVGFpbERldGFpbHMgZnJvbSAnLi4vY29yZS9jb250aW51b3VzLXRhaWwtZGV0YWlscy5qcyc7XG5pbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gJy4uL2NvcmUvdXRpbHMuanMnO1xuaW1wb3J0IElNYXNrIGZyb20gJy4uL2NvcmUvaG9sZGVyLmpzJztcblxuLyoqIFN1cHBvcnRlZCBtYXNrIHR5cGUgKi9cblxuLyoqIFByb3ZpZGVzIGNvbW1vbiBtYXNraW5nIHN0dWZmICovXG52YXIgTWFza2VkID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgLy8gJFNoYXBlPE1hc2tlZE9wdGlvbnM+OyBUT0RPIGFmdGVyIGZpeCBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZmxvdy9pc3N1ZXMvNDc3M1xuXG4gIC8qKiBAdHlwZSB7TWFza30gKi9cblxuICAvKiogKi9cbiAgLy8gJEZsb3dGaXhNZSBubyBpZGVhc1xuXG4gIC8qKiBUcmFuc2Zvcm1zIHZhbHVlIGJlZm9yZSBtYXNrIHByb2Nlc3NpbmcgKi9cblxuICAvKiogVmFsaWRhdGVzIGlmIHZhbHVlIGlzIGFjY2VwdGFibGUgKi9cblxuICAvKiogRG9lcyBhZGRpdGlvbmFsIHByb2Nlc3NpbmcgaW4gdGhlIGVuZCBvZiBlZGl0aW5nICovXG5cbiAgLyoqIEZvcm1hdCB0eXBlZCB2YWx1ZSB0byBzdHJpbmcgKi9cblxuICAvKiogUGFyc2Ugc3RyZ2luIHRvIGdldCB0eXBlZCB2YWx1ZSAqL1xuXG4gIC8qKiBFbmFibGUgY2hhcmFjdGVycyBvdmVyd3JpdGluZyAqL1xuXG4gIC8qKiAqL1xuICBmdW5jdGlvbiBNYXNrZWQob3B0cykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYXNrZWQpO1xuXG4gICAgdGhpcy5fdmFsdWUgPSAnJztcblxuICAgIHRoaXMuX3VwZGF0ZShPYmplY3QuYXNzaWduKHt9LCBNYXNrZWQuREVGQVVMVFMsIG9wdHMpKTtcblxuICAgIHRoaXMuaXNJbml0aWFsaXplZCA9IHRydWU7XG4gIH1cbiAgLyoqIFNldHMgYW5kIGFwcGxpZXMgbmV3IG9wdGlvbnMgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhNYXNrZWQsIFt7XG4gICAga2V5OiBcInVwZGF0ZU9wdGlvbnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlT3B0aW9ucyhvcHRzKSB7XG4gICAgICBpZiAoIU9iamVjdC5rZXlzKG9wdHMpLmxlbmd0aCkgcmV0dXJuO1xuICAgICAgdGhpcy53aXRoVmFsdWVSZWZyZXNoKHRoaXMuX3VwZGF0ZS5iaW5kKHRoaXMsIG9wdHMpKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIFNldHMgbmV3IG9wdGlvbnNcclxuICAgICAgQHByb3RlY3RlZFxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl91cGRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3VwZGF0ZShvcHRzKSB7XG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9wdHMpO1xuICAgIH1cbiAgICAvKiogTWFzayBzdGF0ZSAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic3RhdGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIF92YWx1ZTogdGhpcy52YWx1ZVxuICAgICAgfTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHN0YXRlKSB7XG4gICAgICB0aGlzLl92YWx1ZSA9IHN0YXRlLl92YWx1ZTtcbiAgICB9XG4gICAgLyoqIFJlc2V0cyB2YWx1ZSAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicmVzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICB0aGlzLl92YWx1ZSA9ICcnO1xuICAgIH1cbiAgICAvKiogKi9cblxuICB9LCB7XG4gICAga2V5OiBcInZhbHVlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgdGhpcy5yZXNvbHZlKHZhbHVlKTtcbiAgICB9XG4gICAgLyoqIFJlc29sdmUgbmV3IHZhbHVlICovXG5cbiAgfSwge1xuICAgIGtleTogXCJyZXNvbHZlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlc29sdmUodmFsdWUpIHtcbiAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgIHRoaXMuYXBwZW5kKHZhbHVlLCB7XG4gICAgICAgIGlucHV0OiB0cnVlXG4gICAgICB9LCAnJyk7XG4gICAgICB0aGlzLmRvQ29tbWl0KCk7XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICB9XG4gICAgLyoqICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ1bm1hc2tlZFZhbHVlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICB0aGlzLmFwcGVuZCh2YWx1ZSwge30sICcnKTtcbiAgICAgIHRoaXMuZG9Db21taXQoKTtcbiAgICB9XG4gICAgLyoqICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ0eXBlZFZhbHVlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5kb1BhcnNlKHRoaXMudmFsdWUpO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLmRvRm9ybWF0KHZhbHVlKTtcbiAgICB9XG4gICAgLyoqIFZhbHVlIHRoYXQgaW5jbHVkZXMgcmF3IHVzZXIgaW5wdXQgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInJhd0lucHV0VmFsdWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmV4dHJhY3RJbnB1dCgwLCB0aGlzLnZhbHVlLmxlbmd0aCwge1xuICAgICAgICByYXc6IHRydWVcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgIHRoaXMuYXBwZW5kKHZhbHVlLCB7XG4gICAgICAgIHJhdzogdHJ1ZVxuICAgICAgfSwgJycpO1xuICAgICAgdGhpcy5kb0NvbW1pdCgpO1xuICAgIH1cbiAgICAvKiogKi9cblxuICB9LCB7XG4gICAga2V5OiBcImlzQ29tcGxldGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvKiogRmluZHMgbmVhcmVzdCBpbnB1dCBwb3NpdGlvbiBpbiBkaXJlY3Rpb24gKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm5lYXJlc3RJbnB1dFBvc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBuZWFyZXN0SW5wdXRQb3MoY3Vyc29yUG9zLCBkaXJlY3Rpb24pIHtcbiAgICAgIHJldHVybiBjdXJzb3JQb3M7XG4gICAgfVxuICAgIC8qKiBFeHRyYWN0cyB2YWx1ZSBpbiByYW5nZSBjb25zaWRlcmluZyBmbGFncyAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZXh0cmFjdElucHV0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGV4dHJhY3RJbnB1dCgpIHtcbiAgICAgIHZhciBmcm9tUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xuICAgICAgdmFyIHRvUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0aGlzLnZhbHVlLmxlbmd0aDtcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlLnNsaWNlKGZyb21Qb3MsIHRvUG9zKTtcbiAgICB9XG4gICAgLyoqIEV4dHJhY3RzIHRhaWwgaW4gcmFuZ2UgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImV4dHJhY3RUYWlsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGV4dHJhY3RUYWlsKCkge1xuICAgICAgdmFyIGZyb21Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDA7XG4gICAgICB2YXIgdG9Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRoaXMudmFsdWUubGVuZ3RoO1xuICAgICAgcmV0dXJuIG5ldyBDb250aW51b3VzVGFpbERldGFpbHModGhpcy5leHRyYWN0SW5wdXQoZnJvbVBvcywgdG9Qb3MpLCBmcm9tUG9zKTtcbiAgICB9XG4gICAgLyoqIEFwcGVuZHMgdGFpbCAqL1xuICAgIC8vICRGbG93Rml4TWUgbm8gaWRlYXNcblxuICB9LCB7XG4gICAga2V5OiBcImFwcGVuZFRhaWxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYXBwZW5kVGFpbCh0YWlsKSB7XG4gICAgICBpZiAoaXNTdHJpbmcodGFpbCkpIHRhaWwgPSBuZXcgQ29udGludW91c1RhaWxEZXRhaWxzKFN0cmluZyh0YWlsKSk7XG4gICAgICByZXR1cm4gdGFpbC5hcHBlbmRUbyh0aGlzKTtcbiAgICB9XG4gICAgLyoqIEFwcGVuZHMgY2hhciAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX2FwcGVuZENoYXJSYXdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2FwcGVuZENoYXJSYXcoY2gpIHtcbiAgICAgIGlmICghY2gpIHJldHVybiBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICAgICAgdGhpcy5fdmFsdWUgKz0gY2g7XG4gICAgICByZXR1cm4gbmV3IENoYW5nZURldGFpbHMoe1xuICAgICAgICBpbnNlcnRlZDogY2gsXG4gICAgICAgIHJhd0luc2VydGVkOiBjaFxuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKiBBcHBlbmRzIGNoYXIgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9hcHBlbmRDaGFyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9hcHBlbmRDaGFyKGNoKSB7XG4gICAgICB2YXIgZmxhZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgICAgdmFyIGNoZWNrVGFpbCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkO1xuICAgICAgdmFyIGNvbnNpc3RlbnRTdGF0ZSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgIHZhciBkZXRhaWxzID0gdGhpcy5fYXBwZW5kQ2hhclJhdyh0aGlzLmRvUHJlcGFyZShjaCwgZmxhZ3MpLCBmbGFncyk7XG5cbiAgICAgIGlmIChkZXRhaWxzLmluc2VydGVkKSB7XG4gICAgICAgIHZhciBjb25zaXN0ZW50VGFpbDtcbiAgICAgICAgdmFyIGFwcGVuZGVkID0gdGhpcy5kb1ZhbGlkYXRlKGZsYWdzKSAhPT0gZmFsc2U7XG5cbiAgICAgICAgaWYgKGFwcGVuZGVkICYmIGNoZWNrVGFpbCAhPSBudWxsKSB7XG4gICAgICAgICAgLy8gdmFsaWRhdGlvbiBvaywgY2hlY2sgdGFpbFxuICAgICAgICAgIHZhciBiZWZvcmVUYWlsU3RhdGUgPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgICAgaWYgKHRoaXMub3ZlcndyaXRlKSB7XG4gICAgICAgICAgICBjb25zaXN0ZW50VGFpbCA9IGNoZWNrVGFpbC5zdGF0ZTtcbiAgICAgICAgICAgIGNoZWNrVGFpbC5zaGlmdEJlZm9yZSh0aGlzLnZhbHVlLmxlbmd0aCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIHRhaWxEZXRhaWxzID0gdGhpcy5hcHBlbmRUYWlsKGNoZWNrVGFpbCk7XG4gICAgICAgICAgYXBwZW5kZWQgPSB0YWlsRGV0YWlscy5yYXdJbnNlcnRlZCA9PT0gY2hlY2tUYWlsLnRvU3RyaW5nKCk7IC8vIGlmIG9rLCByb2xsYmFjayBzdGF0ZSBhZnRlciB0YWlsXG5cbiAgICAgICAgICBpZiAoYXBwZW5kZWQgJiYgdGFpbERldGFpbHMuaW5zZXJ0ZWQpIHRoaXMuc3RhdGUgPSBiZWZvcmVUYWlsU3RhdGU7XG4gICAgICAgIH0gLy8gcmV2ZXJ0IGFsbCBpZiBzb21ldGhpbmcgd2VudCB3cm9uZ1xuXG5cbiAgICAgICAgaWYgKCFhcHBlbmRlZCkge1xuICAgICAgICAgIGRldGFpbHMgPSBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICAgICAgICAgIHRoaXMuc3RhdGUgPSBjb25zaXN0ZW50U3RhdGU7XG4gICAgICAgICAgaWYgKGNoZWNrVGFpbCAmJiBjb25zaXN0ZW50VGFpbCkgY2hlY2tUYWlsLnN0YXRlID0gY29uc2lzdGVudFRhaWw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRldGFpbHM7XG4gICAgfVxuICAgIC8qKiBBcHBlbmRzIG9wdGlvbmFsIHBsYWNlaG9sZGVyIGF0IGVuZCAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX2FwcGVuZFBsYWNlaG9sZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9hcHBlbmRQbGFjZWhvbGRlcigpIHtcbiAgICAgIHJldHVybiBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICAgIH1cbiAgICAvKiogQXBwZW5kcyBzeW1ib2xzIGNvbnNpZGVyaW5nIGZsYWdzICovXG4gICAgLy8gJEZsb3dGaXhNZSBubyBpZGVhc1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYXBwZW5kXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFwcGVuZChzdHIsIGZsYWdzLCB0YWlsKSB7XG4gICAgICBpZiAoIWlzU3RyaW5nKHN0cikpIHRocm93IG5ldyBFcnJvcigndmFsdWUgc2hvdWxkIGJlIHN0cmluZycpO1xuICAgICAgdmFyIGRldGFpbHMgPSBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICAgICAgdmFyIGNoZWNrVGFpbCA9IGlzU3RyaW5nKHRhaWwpID8gbmV3IENvbnRpbnVvdXNUYWlsRGV0YWlscyhTdHJpbmcodGFpbCkpIDogdGFpbDtcbiAgICAgIGlmIChmbGFncyAmJiBmbGFncy50YWlsKSBmbGFncy5fYmVmb3JlVGFpbFN0YXRlID0gdGhpcy5zdGF0ZTtcblxuICAgICAgZm9yICh2YXIgY2kgPSAwOyBjaSA8IHN0ci5sZW5ndGg7ICsrY2kpIHtcbiAgICAgICAgZGV0YWlscy5hZ2dyZWdhdGUodGhpcy5fYXBwZW5kQ2hhcihzdHJbY2ldLCBmbGFncywgY2hlY2tUYWlsKSk7XG4gICAgICB9IC8vIGFwcGVuZCB0YWlsIGJ1dCBhZ2dyZWdhdGUgb25seSB0YWlsU2hpZnRcblxuXG4gICAgICBpZiAoY2hlY2tUYWlsICE9IG51bGwpIHtcbiAgICAgICAgZGV0YWlscy50YWlsU2hpZnQgKz0gdGhpcy5hcHBlbmRUYWlsKGNoZWNrVGFpbCkudGFpbFNoaWZ0OyAvLyBUT0RPIGl0J3MgYSBnb29kIGlkZWEgdG8gY2xlYXIgc3RhdGUgYWZ0ZXIgYXBwZW5kaW5nIGVuZHNcbiAgICAgICAgLy8gYnV0IGl0IGNhdXNlcyBidWdzIHdoZW4gb25lIGFwcGVuZCBjYWxscyBhbm90aGVyICh3aGVuIGR5bmFtaWMgZGlzcGF0Y2ggc2V0IHJhd0lucHV0VmFsdWUpXG4gICAgICAgIC8vIHRoaXMuX3Jlc2V0QmVmb3JlVGFpbFN0YXRlKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZXRhaWxzO1xuICAgIH1cbiAgICAvKiogKi9cblxuICB9LCB7XG4gICAga2V5OiBcInJlbW92ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICB2YXIgZnJvbVBvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogMDtcbiAgICAgIHZhciB0b1BvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdGhpcy52YWx1ZS5sZW5ndGg7XG4gICAgICB0aGlzLl92YWx1ZSA9IHRoaXMudmFsdWUuc2xpY2UoMCwgZnJvbVBvcykgKyB0aGlzLnZhbHVlLnNsaWNlKHRvUG9zKTtcbiAgICAgIHJldHVybiBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICAgIH1cbiAgICAvKiogQ2FsbHMgZnVuY3Rpb24gYW5kIHJlYXBwbGllcyBjdXJyZW50IHZhbHVlICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ3aXRoVmFsdWVSZWZyZXNoXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHdpdGhWYWx1ZVJlZnJlc2goZm4pIHtcbiAgICAgIGlmICh0aGlzLl9yZWZyZXNoaW5nIHx8ICF0aGlzLmlzSW5pdGlhbGl6ZWQpIHJldHVybiBmbigpO1xuICAgICAgdGhpcy5fcmVmcmVzaGluZyA9IHRydWU7XG4gICAgICB2YXIgcmF3SW5wdXQgPSB0aGlzLnJhd0lucHV0VmFsdWU7XG4gICAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgdmFyIHJldCA9IGZuKCk7XG4gICAgICB0aGlzLnJhd0lucHV0VmFsdWUgPSByYXdJbnB1dDsgLy8gYXBwZW5kIGxvc3QgdHJhaWxpbmcgY2hhcnMgYXQgZW5kXG5cbiAgICAgIGlmICh0aGlzLnZhbHVlICYmIHRoaXMudmFsdWUgIT09IHZhbHVlICYmIHZhbHVlLmluZGV4T2YodGhpcy52YWx1ZSkgPT09IDApIHtcbiAgICAgICAgdGhpcy5hcHBlbmQodmFsdWUuc2xpY2UodGhpcy52YWx1ZS5sZW5ndGgpLCB7fSwgJycpO1xuICAgICAgfVxuXG4gICAgICBkZWxldGUgdGhpcy5fcmVmcmVzaGluZztcbiAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuICAgIC8qKiAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicnVuSXNvbGF0ZWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcnVuSXNvbGF0ZWQoZm4pIHtcbiAgICAgIGlmICh0aGlzLl9pc29sYXRlZCB8fCAhdGhpcy5pc0luaXRpYWxpemVkKSByZXR1cm4gZm4odGhpcyk7XG4gICAgICB0aGlzLl9pc29sYXRlZCA9IHRydWU7XG4gICAgICB2YXIgc3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgICAgdmFyIHJldCA9IGZuKHRoaXMpO1xuICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgICAgZGVsZXRlIHRoaXMuX2lzb2xhdGVkO1xuICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIFByZXBhcmVzIHN0cmluZyBiZWZvcmUgbWFzayBwcm9jZXNzaW5nXHJcbiAgICAgIEBwcm90ZWN0ZWRcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkb1ByZXBhcmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZG9QcmVwYXJlKHN0cikge1xuICAgICAgdmFyIGZsYWdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICAgIHJldHVybiB0aGlzLnByZXBhcmUgPyB0aGlzLnByZXBhcmUoc3RyLCB0aGlzLCBmbGFncykgOiBzdHI7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBWYWxpZGF0ZXMgaWYgdmFsdWUgaXMgYWNjZXB0YWJsZVxyXG4gICAgICBAcHJvdGVjdGVkXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZG9WYWxpZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkb1ZhbGlkYXRlKGZsYWdzKSB7XG4gICAgICByZXR1cm4gKCF0aGlzLnZhbGlkYXRlIHx8IHRoaXMudmFsaWRhdGUodGhpcy52YWx1ZSwgdGhpcywgZmxhZ3MpKSAmJiAoIXRoaXMucGFyZW50IHx8IHRoaXMucGFyZW50LmRvVmFsaWRhdGUoZmxhZ3MpKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIERvZXMgYWRkaXRpb25hbCBwcm9jZXNzaW5nIGluIHRoZSBlbmQgb2YgZWRpdGluZ1xyXG4gICAgICBAcHJvdGVjdGVkXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZG9Db21taXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZG9Db21taXQoKSB7XG4gICAgICBpZiAodGhpcy5jb21taXQpIHRoaXMuY29tbWl0KHRoaXMudmFsdWUsIHRoaXMpO1xuICAgIH1cbiAgICAvKiogKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRvRm9ybWF0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRvRm9ybWF0KHZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5mb3JtYXQgPyB0aGlzLmZvcm1hdCh2YWx1ZSwgdGhpcykgOiB2YWx1ZTtcbiAgICB9XG4gICAgLyoqICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkb1BhcnNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRvUGFyc2Uoc3RyKSB7XG4gICAgICByZXR1cm4gdGhpcy5wYXJzZSA/IHRoaXMucGFyc2Uoc3RyLCB0aGlzKSA6IHN0cjtcbiAgICB9XG4gICAgLyoqICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzcGxpY2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgaW5zZXJ0ZWQsIHJlbW92ZURpcmVjdGlvbikge1xuICAgICAgdmFyIHRhaWxQb3MgPSBzdGFydCArIGRlbGV0ZUNvdW50O1xuICAgICAgdmFyIHRhaWwgPSB0aGlzLmV4dHJhY3RUYWlsKHRhaWxQb3MpO1xuICAgICAgdmFyIHN0YXJ0Q2hhbmdlUG9zID0gdGhpcy5uZWFyZXN0SW5wdXRQb3Moc3RhcnQsIHJlbW92ZURpcmVjdGlvbik7XG4gICAgICB2YXIgY2hhbmdlRGV0YWlscyA9IG5ldyBDaGFuZ2VEZXRhaWxzKHtcbiAgICAgICAgdGFpbFNoaWZ0OiBzdGFydENoYW5nZVBvcyAtIHN0YXJ0IC8vIGFkanVzdCB0YWlsU2hpZnQgaWYgc3RhcnQgd2FzIGFsaWduZWRcblxuICAgICAgfSkuYWdncmVnYXRlKHRoaXMucmVtb3ZlKHN0YXJ0Q2hhbmdlUG9zKSkuYWdncmVnYXRlKHRoaXMuYXBwZW5kKGluc2VydGVkLCB7XG4gICAgICAgIGlucHV0OiB0cnVlXG4gICAgICB9LCB0YWlsKSk7XG4gICAgICByZXR1cm4gY2hhbmdlRGV0YWlscztcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTWFza2VkO1xufSgpO1xuTWFza2VkLkRFRkFVTFRTID0ge1xuICBmb3JtYXQ6IGZ1bmN0aW9uIGZvcm1hdCh2KSB7XG4gICAgcmV0dXJuIHY7XG4gIH0sXG4gIHBhcnNlOiBmdW5jdGlvbiBwYXJzZSh2KSB7XG4gICAgcmV0dXJuIHY7XG4gIH1cbn07XG5JTWFzay5NYXNrZWQgPSBNYXNrZWQ7XG5cbmV4cG9ydCBkZWZhdWx0IE1hc2tlZDtcbiIsImltcG9ydCB7IGQgYXMgX2luaGVyaXRzLCBlIGFzIF9jcmVhdGVTdXBlciwgYSBhcyBfY2xhc3NDYWxsQ2hlY2ssIF8gYXMgX2NyZWF0ZUNsYXNzLCBmIGFzIF9zbGljZWRUb0FycmF5LCBnIGFzIF9nZXQsIGggYXMgX2dldFByb3RvdHlwZU9mLCBpIGFzIF9zZXQgfSBmcm9tICcuLi9fcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzLTZjY2IxZjY0LmpzJztcbmltcG9ydCBNYXNrZWRQYXR0ZXJuIGZyb20gJy4vcGF0dGVybi5qcyc7XG5pbXBvcnQgTWFza2VkUmFuZ2UgZnJvbSAnLi9yYW5nZS5qcyc7XG5pbXBvcnQgSU1hc2sgZnJvbSAnLi4vY29yZS9ob2xkZXIuanMnO1xuaW1wb3J0ICcuLi9jb3JlL3V0aWxzLmpzJztcbmltcG9ydCAnLi4vY29yZS9jaGFuZ2UtZGV0YWlscy5qcyc7XG5pbXBvcnQgJy4vYmFzZS5qcyc7XG5pbXBvcnQgJy4uL2NvcmUvY29udGludW91cy10YWlsLWRldGFpbHMuanMnO1xuaW1wb3J0ICcuL3BhdHRlcm4vaW5wdXQtZGVmaW5pdGlvbi5qcyc7XG5pbXBvcnQgJy4vZmFjdG9yeS5qcyc7XG5pbXBvcnQgJy4vcGF0dGVybi9maXhlZC1kZWZpbml0aW9uLmpzJztcbmltcG9ydCAnLi9wYXR0ZXJuL2NodW5rLXRhaWwtZGV0YWlscy5qcyc7XG5pbXBvcnQgJy4vcmVnZXhwLmpzJztcblxuLyoqIERhdGUgbWFzayAqL1xuXG52YXIgTWFza2VkRGF0ZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX01hc2tlZFBhdHRlcm4pIHtcbiAgX2luaGVyaXRzKE1hc2tlZERhdGUsIF9NYXNrZWRQYXR0ZXJuKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKE1hc2tlZERhdGUpO1xuXG4gIC8qKiBQYXR0ZXJuIG1hc2sgZm9yIGRhdGUgYWNjb3JkaW5nIHRvIHtAbGluayBNYXNrZWREYXRlI2Zvcm1hdH0gKi9cblxuICAvKiogU3RhcnQgZGF0ZSAqL1xuXG4gIC8qKiBFbmQgZGF0ZSAqL1xuXG4gIC8qKiAqL1xuXG4gIC8qKlxyXG4gICAgQHBhcmFtIHtPYmplY3R9IG9wdHNcclxuICAqL1xuICBmdW5jdGlvbiBNYXNrZWREYXRlKG9wdHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWFza2VkRGF0ZSk7XG5cbiAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgT2JqZWN0LmFzc2lnbih7fSwgTWFza2VkRGF0ZS5ERUZBVUxUUywgb3B0cykpO1xuICB9XG4gIC8qKlxyXG4gICAgQG92ZXJyaWRlXHJcbiAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhNYXNrZWREYXRlLCBbe1xuICAgIGtleTogXCJfdXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF91cGRhdGUob3B0cykge1xuICAgICAgaWYgKG9wdHMubWFzayA9PT0gRGF0ZSkgZGVsZXRlIG9wdHMubWFzaztcbiAgICAgIGlmIChvcHRzLnBhdHRlcm4pIG9wdHMubWFzayA9IG9wdHMucGF0dGVybjtcbiAgICAgIHZhciBibG9ja3MgPSBvcHRzLmJsb2NrcztcbiAgICAgIG9wdHMuYmxvY2tzID0gT2JqZWN0LmFzc2lnbih7fSwgTWFza2VkRGF0ZS5HRVRfREVGQVVMVF9CTE9DS1MoKSk7IC8vIGFkanVzdCB5ZWFyIGJsb2NrXG5cbiAgICAgIGlmIChvcHRzLm1pbikgb3B0cy5ibG9ja3MuWS5mcm9tID0gb3B0cy5taW4uZ2V0RnVsbFllYXIoKTtcbiAgICAgIGlmIChvcHRzLm1heCkgb3B0cy5ibG9ja3MuWS50byA9IG9wdHMubWF4LmdldEZ1bGxZZWFyKCk7XG5cbiAgICAgIGlmIChvcHRzLm1pbiAmJiBvcHRzLm1heCAmJiBvcHRzLmJsb2Nrcy5ZLmZyb20gPT09IG9wdHMuYmxvY2tzLlkudG8pIHtcbiAgICAgICAgb3B0cy5ibG9ja3MubS5mcm9tID0gb3B0cy5taW4uZ2V0TW9udGgoKSArIDE7XG4gICAgICAgIG9wdHMuYmxvY2tzLm0udG8gPSBvcHRzLm1heC5nZXRNb250aCgpICsgMTtcblxuICAgICAgICBpZiAob3B0cy5ibG9ja3MubS5mcm9tID09PSBvcHRzLmJsb2Nrcy5tLnRvKSB7XG4gICAgICAgICAgb3B0cy5ibG9ja3MuZC5mcm9tID0gb3B0cy5taW4uZ2V0RGF0ZSgpO1xuICAgICAgICAgIG9wdHMuYmxvY2tzLmQudG8gPSBvcHRzLm1heC5nZXREYXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgT2JqZWN0LmFzc2lnbihvcHRzLmJsb2NrcywgYmxvY2tzKTsgLy8gYWRkIGF1dG9maXhcblxuICAgICAgT2JqZWN0LmtleXMob3B0cy5ibG9ja3MpLmZvckVhY2goZnVuY3Rpb24gKGJrKSB7XG4gICAgICAgIHZhciBiID0gb3B0cy5ibG9ja3NbYmtdO1xuICAgICAgICBpZiAoISgnYXV0b2ZpeCcgaW4gYikpIGIuYXV0b2ZpeCA9IG9wdHMuYXV0b2ZpeDtcbiAgICAgIH0pO1xuXG4gICAgICBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWREYXRlLnByb3RvdHlwZSksIFwiX3VwZGF0ZVwiLCB0aGlzKS5jYWxsKHRoaXMsIG9wdHMpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZG9WYWxpZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkb1ZhbGlkYXRlKCkge1xuICAgICAgdmFyIF9nZXQyO1xuXG4gICAgICB2YXIgZGF0ZSA9IHRoaXMuZGF0ZTtcblxuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoX2dldDIgPSBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWREYXRlLnByb3RvdHlwZSksIFwiZG9WYWxpZGF0ZVwiLCB0aGlzKSkuY2FsbC5hcHBseShfZ2V0MiwgW3RoaXNdLmNvbmNhdChhcmdzKSkgJiYgKCF0aGlzLmlzQ29tcGxldGUgfHwgdGhpcy5pc0RhdGVFeGlzdCh0aGlzLnZhbHVlKSAmJiBkYXRlICE9IG51bGwgJiYgKHRoaXMubWluID09IG51bGwgfHwgdGhpcy5taW4gPD0gZGF0ZSkgJiYgKHRoaXMubWF4ID09IG51bGwgfHwgZGF0ZSA8PSB0aGlzLm1heCkpO1xuICAgIH1cbiAgICAvKiogQ2hlY2tzIGlmIGRhdGUgaXMgZXhpc3RzICovXG5cbiAgfSwge1xuICAgIGtleTogXCJpc0RhdGVFeGlzdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc0RhdGVFeGlzdChzdHIpIHtcbiAgICAgIHJldHVybiB0aGlzLmZvcm1hdCh0aGlzLnBhcnNlKHN0ciwgdGhpcyksIHRoaXMpLmluZGV4T2Yoc3RyKSA+PSAwO1xuICAgIH1cbiAgICAvKiogUGFyc2VkIERhdGUgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRhdGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnR5cGVkVmFsdWU7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChkYXRlKSB7XG4gICAgICB0aGlzLnR5cGVkVmFsdWUgPSBkYXRlO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidHlwZWRWYWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNDb21wbGV0ZSA/IF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZERhdGUucHJvdG90eXBlKSwgXCJ0eXBlZFZhbHVlXCIsIHRoaXMpIDogbnVsbDtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICBfc2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWREYXRlLnByb3RvdHlwZSksIFwidHlwZWRWYWx1ZVwiLCB2YWx1ZSwgdGhpcywgdHJ1ZSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1hc2tlZERhdGU7XG59KE1hc2tlZFBhdHRlcm4pO1xuTWFza2VkRGF0ZS5ERUZBVUxUUyA9IHtcbiAgcGF0dGVybjogJ2R7Ln1gbXsufWBZJyxcbiAgZm9ybWF0OiBmdW5jdGlvbiBmb3JtYXQoZGF0ZSkge1xuICAgIHZhciBkYXkgPSBTdHJpbmcoZGF0ZS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgdmFyIG1vbnRoID0gU3RyaW5nKGRhdGUuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgdmFyIHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgcmV0dXJuIFtkYXksIG1vbnRoLCB5ZWFyXS5qb2luKCcuJyk7XG4gIH0sXG4gIHBhcnNlOiBmdW5jdGlvbiBwYXJzZShzdHIpIHtcbiAgICB2YXIgX3N0ciRzcGxpdCA9IHN0ci5zcGxpdCgnLicpLFxuICAgICAgICBfc3RyJHNwbGl0MiA9IF9zbGljZWRUb0FycmF5KF9zdHIkc3BsaXQsIDMpLFxuICAgICAgICBkYXkgPSBfc3RyJHNwbGl0MlswXSxcbiAgICAgICAgbW9udGggPSBfc3RyJHNwbGl0MlsxXSxcbiAgICAgICAgeWVhciA9IF9zdHIkc3BsaXQyWzJdO1xuXG4gICAgcmV0dXJuIG5ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgZGF5KTtcbiAgfVxufTtcblxuTWFza2VkRGF0ZS5HRVRfREVGQVVMVF9CTE9DS1MgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB7XG4gICAgZDoge1xuICAgICAgbWFzazogTWFza2VkUmFuZ2UsXG4gICAgICBmcm9tOiAxLFxuICAgICAgdG86IDMxLFxuICAgICAgbWF4TGVuZ3RoOiAyXG4gICAgfSxcbiAgICBtOiB7XG4gICAgICBtYXNrOiBNYXNrZWRSYW5nZSxcbiAgICAgIGZyb206IDEsXG4gICAgICB0bzogMTIsXG4gICAgICBtYXhMZW5ndGg6IDJcbiAgICB9LFxuICAgIFk6IHtcbiAgICAgIG1hc2s6IE1hc2tlZFJhbmdlLFxuICAgICAgZnJvbTogMTkwMCxcbiAgICAgIHRvOiA5OTk5XG4gICAgfVxuICB9O1xufTtcblxuSU1hc2suTWFza2VkRGF0ZSA9IE1hc2tlZERhdGU7XG5cbmV4cG9ydCBkZWZhdWx0IE1hc2tlZERhdGU7XG4iLCJpbXBvcnQgeyBkIGFzIF9pbmhlcml0cywgZSBhcyBfY3JlYXRlU3VwZXIsIGEgYXMgX2NsYXNzQ2FsbENoZWNrLCBfIGFzIF9jcmVhdGVDbGFzcywgZyBhcyBfZ2V0LCBoIGFzIF9nZXRQcm90b3R5cGVPZiwgaSBhcyBfc2V0LCBiIGFzIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyB9IGZyb20gJy4uL19yb2xsdXBQbHVnaW5CYWJlbEhlbHBlcnMtNmNjYjFmNjQuanMnO1xuaW1wb3J0IENoYW5nZURldGFpbHMgZnJvbSAnLi4vY29yZS9jaGFuZ2UtZGV0YWlscy5qcyc7XG5pbXBvcnQgY3JlYXRlTWFzayBmcm9tICcuL2ZhY3RvcnkuanMnO1xuaW1wb3J0IE1hc2tlZCBmcm9tICcuL2Jhc2UuanMnO1xuaW1wb3J0IElNYXNrIGZyb20gJy4uL2NvcmUvaG9sZGVyLmpzJztcbmltcG9ydCAnLi4vY29yZS91dGlscy5qcyc7XG5pbXBvcnQgJy4uL2NvcmUvY29udGludW91cy10YWlsLWRldGFpbHMuanMnO1xuXG4vKiogRHluYW1pYyBtYXNrIGZvciBjaG9vc2luZyBhcHJvcHJpYXRlIG1hc2sgaW4gcnVuLXRpbWUgKi9cbnZhciBNYXNrZWREeW5hbWljID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfTWFza2VkKSB7XG4gIF9pbmhlcml0cyhNYXNrZWREeW5hbWljLCBfTWFza2VkKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKE1hc2tlZER5bmFtaWMpO1xuXG4gIC8qKiBDdXJyZW50bHkgY2hvc2VuIG1hc2sgKi9cblxuICAvKiogQ29tcGxpbGVkIHtAbGluayBNYXNrZWR9IG9wdGlvbnMgKi9cblxuICAvKiogQ2hvb3NlcyB7QGxpbmsgTWFza2VkfSBkZXBlbmRpbmcgb24gaW5wdXQgdmFsdWUgKi9cblxuICAvKipcclxuICAgIEBwYXJhbSB7T2JqZWN0fSBvcHRzXHJcbiAgKi9cbiAgZnVuY3Rpb24gTWFza2VkRHluYW1pYyhvcHRzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1hc2tlZER5bmFtaWMpO1xuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBPYmplY3QuYXNzaWduKHt9LCBNYXNrZWREeW5hbWljLkRFRkFVTFRTLCBvcHRzKSk7XG4gICAgX3RoaXMuY3VycmVudE1hc2sgPSBudWxsO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICAvKipcclxuICAgIEBvdmVycmlkZVxyXG4gICovXG5cblxuICBfY3JlYXRlQ2xhc3MoTWFza2VkRHluYW1pYywgW3tcbiAgICBrZXk6IFwiX3VwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfdXBkYXRlKG9wdHMpIHtcbiAgICAgIF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZER5bmFtaWMucHJvdG90eXBlKSwgXCJfdXBkYXRlXCIsIHRoaXMpLmNhbGwodGhpcywgb3B0cyk7XG5cbiAgICAgIGlmICgnbWFzaycgaW4gb3B0cykge1xuICAgICAgICAvLyBtYXNrIGNvdWxkIGJlIHRvdGFsbHkgZHluYW1pYyB3aXRoIG9ubHkgYGRpc3BhdGNoYCBvcHRpb25cbiAgICAgICAgdGhpcy5jb21waWxlZE1hc2tzID0gQXJyYXkuaXNBcnJheShvcHRzLm1hc2spID8gb3B0cy5tYXNrLm1hcChmdW5jdGlvbiAobSkge1xuICAgICAgICAgIHJldHVybiBjcmVhdGVNYXNrKG0pO1xuICAgICAgICB9KSA6IFtdO1xuICAgICAgfVxuICAgIH1cbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX2FwcGVuZENoYXJSYXdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2FwcGVuZENoYXJSYXcoY2gpIHtcbiAgICAgIHZhciBmbGFncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgICAgIHZhciBkZXRhaWxzID0gdGhpcy5fYXBwbHlEaXNwYXRjaChjaCwgZmxhZ3MpO1xuXG4gICAgICBpZiAodGhpcy5jdXJyZW50TWFzaykge1xuICAgICAgICBkZXRhaWxzLmFnZ3JlZ2F0ZSh0aGlzLmN1cnJlbnRNYXNrLl9hcHBlbmRDaGFyKGNoLCBmbGFncykpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGV0YWlscztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2FwcGx5RGlzcGF0Y2hcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2FwcGx5RGlzcGF0Y2goKSB7XG4gICAgICB2YXIgYXBwZW5kZWQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6ICcnO1xuICAgICAgdmFyIGZsYWdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICAgIHZhciBwcmV2VmFsdWVCZWZvcmVUYWlsID0gZmxhZ3MudGFpbCAmJiBmbGFncy5fYmVmb3JlVGFpbFN0YXRlICE9IG51bGwgPyBmbGFncy5fYmVmb3JlVGFpbFN0YXRlLl92YWx1ZSA6IHRoaXMudmFsdWU7XG4gICAgICB2YXIgaW5wdXRWYWx1ZSA9IHRoaXMucmF3SW5wdXRWYWx1ZTtcbiAgICAgIHZhciBpbnNlcnRWYWx1ZSA9IGZsYWdzLnRhaWwgJiYgZmxhZ3MuX2JlZm9yZVRhaWxTdGF0ZSAhPSBudWxsID8gLy8gJEZsb3dGaXhNZSAtIHRpcmVkIHRvIGZpZ2h0IHdpdGggdHlwZSBzeXN0ZW1cbiAgICAgIGZsYWdzLl9iZWZvcmVUYWlsU3RhdGUuX3Jhd0lucHV0VmFsdWUgOiBpbnB1dFZhbHVlO1xuICAgICAgdmFyIHRhaWxWYWx1ZSA9IGlucHV0VmFsdWUuc2xpY2UoaW5zZXJ0VmFsdWUubGVuZ3RoKTtcbiAgICAgIHZhciBwcmV2TWFzayA9IHRoaXMuY3VycmVudE1hc2s7XG4gICAgICB2YXIgZGV0YWlscyA9IG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgICB2YXIgcHJldk1hc2tTdGF0ZSA9IHByZXZNYXNrICYmIHByZXZNYXNrLnN0YXRlOyAvLyBjbG9uZSBmbGFncyB0byBwcmV2ZW50IG92ZXJ3cml0aW5nIGBfYmVmb3JlVGFpbFN0YXRlYFxuXG4gICAgICB0aGlzLmN1cnJlbnRNYXNrID0gdGhpcy5kb0Rpc3BhdGNoKGFwcGVuZGVkLCBPYmplY3QuYXNzaWduKHt9LCBmbGFncykpOyAvLyByZXN0b3JlIHN0YXRlIGFmdGVyIGRpc3BhdGNoXG5cbiAgICAgIGlmICh0aGlzLmN1cnJlbnRNYXNrKSB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRNYXNrICE9PSBwcmV2TWFzaykge1xuICAgICAgICAgIC8vIGlmIG1hc2sgY2hhbmdlZCByZWFwcGx5IGlucHV0XG4gICAgICAgICAgdGhpcy5jdXJyZW50TWFzay5yZXNldCgpO1xuXG4gICAgICAgICAgaWYgKGluc2VydFZhbHVlKSB7XG4gICAgICAgICAgICAvLyAkRmxvd0ZpeE1lIC0gaXQncyBvaywgd2UgZG9uJ3QgY2hhbmdlIGN1cnJlbnQgbWFzayBhYm92ZVxuICAgICAgICAgICAgdmFyIGQgPSB0aGlzLmN1cnJlbnRNYXNrLmFwcGVuZChpbnNlcnRWYWx1ZSwge1xuICAgICAgICAgICAgICByYXc6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZGV0YWlscy50YWlsU2hpZnQgPSBkLmluc2VydGVkLmxlbmd0aCAtIHByZXZWYWx1ZUJlZm9yZVRhaWwubGVuZ3RoO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0YWlsVmFsdWUpIHtcbiAgICAgICAgICAgIC8vICRGbG93Rml4TWUgLSBpdCdzIG9rLCB3ZSBkb24ndCBjaGFuZ2UgY3VycmVudCBtYXNrIGFib3ZlXG4gICAgICAgICAgICBkZXRhaWxzLnRhaWxTaGlmdCArPSB0aGlzLmN1cnJlbnRNYXNrLmFwcGVuZCh0YWlsVmFsdWUsIHtcbiAgICAgICAgICAgICAgcmF3OiB0cnVlLFxuICAgICAgICAgICAgICB0YWlsOiB0cnVlXG4gICAgICAgICAgICB9KS50YWlsU2hpZnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIERpc3BhdGNoIGNhbiBkbyBzb21ldGhpbmcgYmFkIHdpdGggc3RhdGUsIHNvXG4gICAgICAgICAgLy8gcmVzdG9yZSBwcmV2IG1hc2sgc3RhdGVcbiAgICAgICAgICB0aGlzLmN1cnJlbnRNYXNrLnN0YXRlID0gcHJldk1hc2tTdGF0ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGV0YWlscztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2FwcGVuZFBsYWNlaG9sZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9hcHBlbmRQbGFjZWhvbGRlcigpIHtcbiAgICAgIHZhciBkZXRhaWxzID0gdGhpcy5fYXBwbHlEaXNwYXRjaC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgICBpZiAodGhpcy5jdXJyZW50TWFzaykge1xuICAgICAgICBkZXRhaWxzLmFnZ3JlZ2F0ZSh0aGlzLmN1cnJlbnRNYXNrLl9hcHBlbmRQbGFjZWhvbGRlcigpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRldGFpbHM7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkb0Rpc3BhdGNoXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRvRGlzcGF0Y2goYXBwZW5kZWQpIHtcbiAgICAgIHZhciBmbGFncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgICByZXR1cm4gdGhpcy5kaXNwYXRjaChhcHBlbmRlZCwgdGhpcywgZmxhZ3MpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZG9WYWxpZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkb1ZhbGlkYXRlKCkge1xuICAgICAgdmFyIF9nZXQyLCBfdGhpcyRjdXJyZW50TWFzaztcblxuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoX2dldDIgPSBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWREeW5hbWljLnByb3RvdHlwZSksIFwiZG9WYWxpZGF0ZVwiLCB0aGlzKSkuY2FsbC5hcHBseShfZ2V0MiwgW3RoaXNdLmNvbmNhdChhcmdzKSkgJiYgKCF0aGlzLmN1cnJlbnRNYXNrIHx8IChfdGhpcyRjdXJyZW50TWFzayA9IHRoaXMuY3VycmVudE1hc2spLmRvVmFsaWRhdGUuYXBwbHkoX3RoaXMkY3VycmVudE1hc2ssIGFyZ3MpKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInJlc2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgaWYgKHRoaXMuY3VycmVudE1hc2spIHRoaXMuY3VycmVudE1hc2sucmVzZXQoKTtcbiAgICAgIHRoaXMuY29tcGlsZWRNYXNrcy5mb3JFYWNoKGZ1bmN0aW9uIChtKSB7XG4gICAgICAgIHJldHVybiBtLnJlc2V0KCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInZhbHVlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jdXJyZW50TWFzayA/IHRoaXMuY3VycmVudE1hc2sudmFsdWUgOiAnJztcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICBfc2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWREeW5hbWljLnByb3RvdHlwZSksIFwidmFsdWVcIiwgdmFsdWUsIHRoaXMsIHRydWUpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidW5tYXNrZWRWYWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuY3VycmVudE1hc2sgPyB0aGlzLmN1cnJlbnRNYXNrLnVubWFza2VkVmFsdWUgOiAnJztcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHVubWFza2VkVmFsdWUpIHtcbiAgICAgIF9zZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZER5bmFtaWMucHJvdG90eXBlKSwgXCJ1bm1hc2tlZFZhbHVlXCIsIHVubWFza2VkVmFsdWUsIHRoaXMsIHRydWUpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidHlwZWRWYWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuY3VycmVudE1hc2sgPyB0aGlzLmN1cnJlbnRNYXNrLnR5cGVkVmFsdWUgOiAnJztcbiAgICB9IC8vIHByb2JhYmx5IHR5cGVkVmFsdWUgc2hvdWxkIG5vdCBiZSB1c2VkIHdpdGggZHluYW1pY1xuICAgICxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgdmFyIHVubWFza2VkVmFsdWUgPSBTdHJpbmcodmFsdWUpOyAvLyBkb3VibGUgY2hlY2sgaXRcblxuICAgICAgaWYgKHRoaXMuY3VycmVudE1hc2spIHtcbiAgICAgICAgdGhpcy5jdXJyZW50TWFzay50eXBlZFZhbHVlID0gdmFsdWU7XG4gICAgICAgIHVubWFza2VkVmFsdWUgPSB0aGlzLmN1cnJlbnRNYXNrLnVubWFza2VkVmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudW5tYXNrZWRWYWx1ZSA9IHVubWFza2VkVmFsdWU7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJpc0NvbXBsZXRlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gISF0aGlzLmN1cnJlbnRNYXNrICYmIHRoaXMuY3VycmVudE1hc2suaXNDb21wbGV0ZTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInJlbW92ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICB2YXIgZGV0YWlscyA9IG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG5cbiAgICAgIGlmICh0aGlzLmN1cnJlbnRNYXNrKSB7XG4gICAgICAgIHZhciBfdGhpcyRjdXJyZW50TWFzazI7XG5cbiAgICAgICAgZGV0YWlscy5hZ2dyZWdhdGUoKF90aGlzJGN1cnJlbnRNYXNrMiA9IHRoaXMuY3VycmVudE1hc2spLnJlbW92ZS5hcHBseShfdGhpcyRjdXJyZW50TWFzazIsIGFyZ3VtZW50cykpIC8vIHVwZGF0ZSB3aXRoIGRpc3BhdGNoXG4gICAgICAgIC5hZ2dyZWdhdGUodGhpcy5fYXBwbHlEaXNwYXRjaCgpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRldGFpbHM7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzdGF0ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZER5bmFtaWMucHJvdG90eXBlKSwgXCJzdGF0ZVwiLCB0aGlzKSwge1xuICAgICAgICBfcmF3SW5wdXRWYWx1ZTogdGhpcy5yYXdJbnB1dFZhbHVlLFxuICAgICAgICBjb21waWxlZE1hc2tzOiB0aGlzLmNvbXBpbGVkTWFza3MubWFwKGZ1bmN0aW9uIChtKSB7XG4gICAgICAgICAgcmV0dXJuIG0uc3RhdGU7XG4gICAgICAgIH0pLFxuICAgICAgICBjdXJyZW50TWFza1JlZjogdGhpcy5jdXJyZW50TWFzayxcbiAgICAgICAgY3VycmVudE1hc2s6IHRoaXMuY3VycmVudE1hc2sgJiYgdGhpcy5jdXJyZW50TWFzay5zdGF0ZVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChzdGF0ZSkge1xuICAgICAgdmFyIGNvbXBpbGVkTWFza3MgPSBzdGF0ZS5jb21waWxlZE1hc2tzLFxuICAgICAgICAgIGN1cnJlbnRNYXNrUmVmID0gc3RhdGUuY3VycmVudE1hc2tSZWYsXG4gICAgICAgICAgY3VycmVudE1hc2sgPSBzdGF0ZS5jdXJyZW50TWFzayxcbiAgICAgICAgICBtYXNrZWRTdGF0ZSA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzdGF0ZSwgW1wiY29tcGlsZWRNYXNrc1wiLCBcImN1cnJlbnRNYXNrUmVmXCIsIFwiY3VycmVudE1hc2tcIl0pO1xuXG4gICAgICB0aGlzLmNvbXBpbGVkTWFza3MuZm9yRWFjaChmdW5jdGlvbiAobSwgbWkpIHtcbiAgICAgICAgcmV0dXJuIG0uc3RhdGUgPSBjb21waWxlZE1hc2tzW21pXTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoY3VycmVudE1hc2tSZWYgIT0gbnVsbCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRNYXNrID0gY3VycmVudE1hc2tSZWY7XG4gICAgICAgIHRoaXMuY3VycmVudE1hc2suc3RhdGUgPSBjdXJyZW50TWFzaztcbiAgICAgIH1cblxuICAgICAgX3NldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRHluYW1pYy5wcm90b3R5cGUpLCBcInN0YXRlXCIsIG1hc2tlZFN0YXRlLCB0aGlzLCB0cnVlKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImV4dHJhY3RJbnB1dFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBleHRyYWN0SW5wdXQoKSB7XG4gICAgICB2YXIgX3RoaXMkY3VycmVudE1hc2szO1xuXG4gICAgICByZXR1cm4gdGhpcy5jdXJyZW50TWFzayA/IChfdGhpcyRjdXJyZW50TWFzazMgPSB0aGlzLmN1cnJlbnRNYXNrKS5leHRyYWN0SW5wdXQuYXBwbHkoX3RoaXMkY3VycmVudE1hc2szLCBhcmd1bWVudHMpIDogJyc7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJleHRyYWN0VGFpbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBleHRyYWN0VGFpbCgpIHtcbiAgICAgIHZhciBfdGhpcyRjdXJyZW50TWFzazQsIF9nZXQzO1xuXG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jdXJyZW50TWFzayA/IChfdGhpcyRjdXJyZW50TWFzazQgPSB0aGlzLmN1cnJlbnRNYXNrKS5leHRyYWN0VGFpbC5hcHBseShfdGhpcyRjdXJyZW50TWFzazQsIGFyZ3MpIDogKF9nZXQzID0gX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRHluYW1pYy5wcm90b3R5cGUpLCBcImV4dHJhY3RUYWlsXCIsIHRoaXMpKS5jYWxsLmFwcGx5KF9nZXQzLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRvQ29tbWl0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRvQ29tbWl0KCkge1xuICAgICAgaWYgKHRoaXMuY3VycmVudE1hc2spIHRoaXMuY3VycmVudE1hc2suZG9Db21taXQoKTtcblxuICAgICAgX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRHluYW1pYy5wcm90b3R5cGUpLCBcImRvQ29tbWl0XCIsIHRoaXMpLmNhbGwodGhpcyk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJuZWFyZXN0SW5wdXRQb3NcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbmVhcmVzdElucHV0UG9zKCkge1xuICAgICAgdmFyIF90aGlzJGN1cnJlbnRNYXNrNSwgX2dldDQ7XG5cbiAgICAgIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMyksIF9rZXkzID0gMDsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgICAgICBhcmdzW19rZXkzXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRNYXNrID8gKF90aGlzJGN1cnJlbnRNYXNrNSA9IHRoaXMuY3VycmVudE1hc2spLm5lYXJlc3RJbnB1dFBvcy5hcHBseShfdGhpcyRjdXJyZW50TWFzazUsIGFyZ3MpIDogKF9nZXQ0ID0gX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRHluYW1pYy5wcm90b3R5cGUpLCBcIm5lYXJlc3RJbnB1dFBvc1wiLCB0aGlzKSkuY2FsbC5hcHBseShfZ2V0NCwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm92ZXJ3cml0ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuY3VycmVudE1hc2sgPyB0aGlzLmN1cnJlbnRNYXNrLm92ZXJ3cml0ZSA6IF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZER5bmFtaWMucHJvdG90eXBlKSwgXCJvdmVyd3JpdGVcIiwgdGhpcyk7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChvdmVyd3JpdGUpIHtcbiAgICAgIGNvbnNvbGUud2FybignXCJvdmVyd3JpdGVcIiBvcHRpb24gaXMgbm90IGF2YWlsYWJsZSBpbiBkeW5hbWljIG1hc2ssIHVzZSB0aGlzIG9wdGlvbiBpbiBzaWJsaW5ncycpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNYXNrZWREeW5hbWljO1xufShNYXNrZWQpO1xuTWFza2VkRHluYW1pYy5ERUZBVUxUUyA9IHtcbiAgZGlzcGF0Y2g6IGZ1bmN0aW9uIGRpc3BhdGNoKGFwcGVuZGVkLCBtYXNrZWQsIGZsYWdzKSB7XG4gICAgaWYgKCFtYXNrZWQuY29tcGlsZWRNYXNrcy5sZW5ndGgpIHJldHVybjtcbiAgICB2YXIgaW5wdXRWYWx1ZSA9IG1hc2tlZC5yYXdJbnB1dFZhbHVlOyAvLyBzaW11bGF0ZSBpbnB1dFxuXG4gICAgdmFyIGlucHV0cyA9IG1hc2tlZC5jb21waWxlZE1hc2tzLm1hcChmdW5jdGlvbiAobSwgaW5kZXgpIHtcbiAgICAgIG0ucmVzZXQoKTtcbiAgICAgIG0uYXBwZW5kKGlucHV0VmFsdWUsIHtcbiAgICAgICAgcmF3OiB0cnVlXG4gICAgICB9KTtcbiAgICAgIG0uYXBwZW5kKGFwcGVuZGVkLCBmbGFncyk7XG4gICAgICB2YXIgd2VpZ2h0ID0gbS5yYXdJbnB1dFZhbHVlLmxlbmd0aDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdlaWdodDogd2VpZ2h0LFxuICAgICAgICBpbmRleDogaW5kZXhcbiAgICAgIH07XG4gICAgfSk7IC8vIHBvcCBtYXNrcyB3aXRoIGxvbmdlciB2YWx1ZXMgZmlyc3RcblxuICAgIGlucHV0cy5zb3J0KGZ1bmN0aW9uIChpMSwgaTIpIHtcbiAgICAgIHJldHVybiBpMi53ZWlnaHQgLSBpMS53ZWlnaHQ7XG4gICAgfSk7XG4gICAgcmV0dXJuIG1hc2tlZC5jb21waWxlZE1hc2tzW2lucHV0c1swXS5pbmRleF07XG4gIH1cbn07XG5JTWFzay5NYXNrZWREeW5hbWljID0gTWFza2VkRHluYW1pYztcblxuZXhwb3J0IGRlZmF1bHQgTWFza2VkRHluYW1pYztcbiIsImltcG9ydCB7IGQgYXMgX2luaGVyaXRzLCBlIGFzIF9jcmVhdGVTdXBlciwgYSBhcyBfY2xhc3NDYWxsQ2hlY2ssIF8gYXMgX2NyZWF0ZUNsYXNzLCBnIGFzIF9nZXQsIGggYXMgX2dldFByb3RvdHlwZU9mIH0gZnJvbSAnLi4vX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycy02Y2NiMWY2NC5qcyc7XG5pbXBvcnQgTWFza2VkUGF0dGVybiBmcm9tICcuL3BhdHRlcm4uanMnO1xuaW1wb3J0IElNYXNrIGZyb20gJy4uL2NvcmUvaG9sZGVyLmpzJztcbmltcG9ydCAnLi4vY29yZS91dGlscy5qcyc7XG5pbXBvcnQgJy4uL2NvcmUvY2hhbmdlLWRldGFpbHMuanMnO1xuaW1wb3J0ICcuL2Jhc2UuanMnO1xuaW1wb3J0ICcuLi9jb3JlL2NvbnRpbnVvdXMtdGFpbC1kZXRhaWxzLmpzJztcbmltcG9ydCAnLi9wYXR0ZXJuL2lucHV0LWRlZmluaXRpb24uanMnO1xuaW1wb3J0ICcuL2ZhY3RvcnkuanMnO1xuaW1wb3J0ICcuL3BhdHRlcm4vZml4ZWQtZGVmaW5pdGlvbi5qcyc7XG5pbXBvcnQgJy4vcGF0dGVybi9jaHVuay10YWlsLWRldGFpbHMuanMnO1xuaW1wb3J0ICcuL3JlZ2V4cC5qcyc7XG5cbi8qKiBQYXR0ZXJuIHdoaWNoIHZhbGlkYXRlcyBlbnVtIHZhbHVlcyAqL1xuXG52YXIgTWFza2VkRW51bSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX01hc2tlZFBhdHRlcm4pIHtcbiAgX2luaGVyaXRzKE1hc2tlZEVudW0sIF9NYXNrZWRQYXR0ZXJuKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKE1hc2tlZEVudW0pO1xuXG4gIGZ1bmN0aW9uIE1hc2tlZEVudW0oKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1hc2tlZEVudW0pO1xuXG4gICAgcmV0dXJuIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE1hc2tlZEVudW0sIFt7XG4gICAga2V5OiBcIl91cGRhdGVcIixcbiAgICB2YWx1ZTpcbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAgIEBwYXJhbSB7T2JqZWN0fSBvcHRzXHJcbiAgICAqL1xuICAgIGZ1bmN0aW9uIF91cGRhdGUob3B0cykge1xuICAgICAgLy8gVE9ETyB0eXBlXG4gICAgICBpZiAob3B0cy5lbnVtKSBvcHRzLm1hc2sgPSAnKicucmVwZWF0KG9wdHMuZW51bVswXS5sZW5ndGgpO1xuXG4gICAgICBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWRFbnVtLnByb3RvdHlwZSksIFwiX3VwZGF0ZVwiLCB0aGlzKS5jYWxsKHRoaXMsIG9wdHMpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZG9WYWxpZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkb1ZhbGlkYXRlKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcyxcbiAgICAgICAgICBfZ2V0MjtcblxuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmVudW0uc29tZShmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gZS5pbmRleE9mKF90aGlzLnVubWFza2VkVmFsdWUpID49IDA7XG4gICAgICB9KSAmJiAoX2dldDIgPSBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWRFbnVtLnByb3RvdHlwZSksIFwiZG9WYWxpZGF0ZVwiLCB0aGlzKSkuY2FsbC5hcHBseShfZ2V0MiwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1hc2tlZEVudW07XG59KE1hc2tlZFBhdHRlcm4pO1xuSU1hc2suTWFza2VkRW51bSA9IE1hc2tlZEVudW07XG5cbmV4cG9ydCBkZWZhdWx0IE1hc2tlZEVudW07XG4iLCJpbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gJy4uL2NvcmUvdXRpbHMuanMnO1xuaW1wb3J0IElNYXNrIGZyb20gJy4uL2NvcmUvaG9sZGVyLmpzJztcbmltcG9ydCAnLi4vX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycy02Y2NiMWY2NC5qcyc7XG5cbi8qKiBHZXQgTWFza2VkIGNsYXNzIGJ5IG1hc2sgdHlwZSAqL1xuXG5mdW5jdGlvbiBtYXNrZWRDbGFzcyhtYXNrKSB7XG4gIGlmIChtYXNrID09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ21hc2sgcHJvcGVydHkgc2hvdWxkIGJlIGRlZmluZWQnKTtcbiAgfSAvLyAkRmxvd0ZpeE1lXG5cblxuICBpZiAobWFzayBpbnN0YW5jZW9mIFJlZ0V4cCkgcmV0dXJuIElNYXNrLk1hc2tlZFJlZ0V4cDsgLy8gJEZsb3dGaXhNZVxuXG4gIGlmIChpc1N0cmluZyhtYXNrKSkgcmV0dXJuIElNYXNrLk1hc2tlZFBhdHRlcm47IC8vICRGbG93Rml4TWVcblxuICBpZiAobWFzayBpbnN0YW5jZW9mIERhdGUgfHwgbWFzayA9PT0gRGF0ZSkgcmV0dXJuIElNYXNrLk1hc2tlZERhdGU7IC8vICRGbG93Rml4TWVcblxuICBpZiAobWFzayBpbnN0YW5jZW9mIE51bWJlciB8fCB0eXBlb2YgbWFzayA9PT0gJ251bWJlcicgfHwgbWFzayA9PT0gTnVtYmVyKSByZXR1cm4gSU1hc2suTWFza2VkTnVtYmVyOyAvLyAkRmxvd0ZpeE1lXG5cbiAgaWYgKEFycmF5LmlzQXJyYXkobWFzaykgfHwgbWFzayA9PT0gQXJyYXkpIHJldHVybiBJTWFzay5NYXNrZWREeW5hbWljOyAvLyAkRmxvd0ZpeE1lXG5cbiAgaWYgKElNYXNrLk1hc2tlZCAmJiBtYXNrLnByb3RvdHlwZSBpbnN0YW5jZW9mIElNYXNrLk1hc2tlZCkgcmV0dXJuIG1hc2s7IC8vICRGbG93Rml4TWVcblxuICBpZiAobWFzayBpbnN0YW5jZW9mIEZ1bmN0aW9uKSByZXR1cm4gSU1hc2suTWFza2VkRnVuY3Rpb247IC8vICRGbG93Rml4TWVcblxuICBpZiAobWFzayBpbnN0YW5jZW9mIElNYXNrLk1hc2tlZCkgcmV0dXJuIG1hc2suY29uc3RydWN0b3I7XG4gIGNvbnNvbGUud2FybignTWFzayBub3QgZm91bmQgZm9yIG1hc2snLCBtYXNrKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gIC8vICRGbG93Rml4TWVcblxuICByZXR1cm4gSU1hc2suTWFza2VkO1xufVxuLyoqIENyZWF0ZXMgbmV3IHtAbGluayBNYXNrZWR9IGRlcGVuZGluZyBvbiBtYXNrIHR5cGUgKi9cblxuZnVuY3Rpb24gY3JlYXRlTWFzayhvcHRzKSB7XG4gIC8vICRGbG93Rml4TWVcbiAgaWYgKElNYXNrLk1hc2tlZCAmJiBvcHRzIGluc3RhbmNlb2YgSU1hc2suTWFza2VkKSByZXR1cm4gb3B0cztcbiAgb3B0cyA9IE9iamVjdC5hc3NpZ24oe30sIG9wdHMpO1xuICB2YXIgbWFzayA9IG9wdHMubWFzazsgLy8gJEZsb3dGaXhNZVxuXG4gIGlmIChJTWFzay5NYXNrZWQgJiYgbWFzayBpbnN0YW5jZW9mIElNYXNrLk1hc2tlZCkgcmV0dXJuIG1hc2s7XG4gIHZhciBNYXNrZWRDbGFzcyA9IG1hc2tlZENsYXNzKG1hc2spO1xuICBpZiAoIU1hc2tlZENsYXNzKSB0aHJvdyBuZXcgRXJyb3IoJ01hc2tlZCBjbGFzcyBpcyBub3QgZm91bmQgZm9yIHByb3ZpZGVkIG1hc2ssIGFwcHJvcHJpYXRlIG1vZHVsZSBuZWVkcyB0byBiZSBpbXBvcnQgbWFudWFsbHkgYmVmb3JlIGNyZWF0aW5nIG1hc2suJyk7XG4gIHJldHVybiBuZXcgTWFza2VkQ2xhc3Mob3B0cyk7XG59XG5JTWFzay5jcmVhdGVNYXNrID0gY3JlYXRlTWFzaztcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTWFzaztcbmV4cG9ydCB7IG1hc2tlZENsYXNzIH07XG4iLCJpbXBvcnQgeyBkIGFzIF9pbmhlcml0cywgZSBhcyBfY3JlYXRlU3VwZXIsIGEgYXMgX2NsYXNzQ2FsbENoZWNrLCBfIGFzIF9jcmVhdGVDbGFzcywgZyBhcyBfZ2V0LCBoIGFzIF9nZXRQcm90b3R5cGVPZiB9IGZyb20gJy4uL19yb2xsdXBQbHVnaW5CYWJlbEhlbHBlcnMtNmNjYjFmNjQuanMnO1xuaW1wb3J0IE1hc2tlZCBmcm9tICcuL2Jhc2UuanMnO1xuaW1wb3J0IElNYXNrIGZyb20gJy4uL2NvcmUvaG9sZGVyLmpzJztcbmltcG9ydCAnLi4vY29yZS9jaGFuZ2UtZGV0YWlscy5qcyc7XG5pbXBvcnQgJy4uL2NvcmUvY29udGludW91cy10YWlsLWRldGFpbHMuanMnO1xuaW1wb3J0ICcuLi9jb3JlL3V0aWxzLmpzJztcblxuLyoqIE1hc2tpbmcgYnkgY3VzdG9tIEZ1bmN0aW9uICovXG5cbnZhciBNYXNrZWRGdW5jdGlvbiA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX01hc2tlZCkge1xuICBfaW5oZXJpdHMoTWFza2VkRnVuY3Rpb24sIF9NYXNrZWQpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoTWFza2VkRnVuY3Rpb24pO1xuXG4gIGZ1bmN0aW9uIE1hc2tlZEZ1bmN0aW9uKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYXNrZWRGdW5jdGlvbik7XG5cbiAgICByZXR1cm4gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTWFza2VkRnVuY3Rpb24sIFt7XG4gICAga2V5OiBcIl91cGRhdGVcIixcbiAgICB2YWx1ZTpcbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAgIEBwYXJhbSB7T2JqZWN0fSBvcHRzXHJcbiAgICAqL1xuICAgIGZ1bmN0aW9uIF91cGRhdGUob3B0cykge1xuICAgICAgaWYgKG9wdHMubWFzaykgb3B0cy52YWxpZGF0ZSA9IG9wdHMubWFzaztcblxuICAgICAgX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRnVuY3Rpb24ucHJvdG90eXBlKSwgXCJfdXBkYXRlXCIsIHRoaXMpLmNhbGwodGhpcywgb3B0cyk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1hc2tlZEZ1bmN0aW9uO1xufShNYXNrZWQpO1xuSU1hc2suTWFza2VkRnVuY3Rpb24gPSBNYXNrZWRGdW5jdGlvbjtcblxuZXhwb3J0IGRlZmF1bHQgTWFza2VkRnVuY3Rpb247XG4iLCJpbXBvcnQgeyBkIGFzIF9pbmhlcml0cywgZSBhcyBfY3JlYXRlU3VwZXIsIGEgYXMgX2NsYXNzQ2FsbENoZWNrLCBfIGFzIF9jcmVhdGVDbGFzcywgZyBhcyBfZ2V0LCBoIGFzIF9nZXRQcm90b3R5cGVPZiwgZiBhcyBfc2xpY2VkVG9BcnJheSwgaSBhcyBfc2V0IH0gZnJvbSAnLi4vX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycy02Y2NiMWY2NC5qcyc7XG5pbXBvcnQgeyBlc2NhcGVSZWdFeHAsIERJUkVDVElPTiB9IGZyb20gJy4uL2NvcmUvdXRpbHMuanMnO1xuaW1wb3J0IENoYW5nZURldGFpbHMgZnJvbSAnLi4vY29yZS9jaGFuZ2UtZGV0YWlscy5qcyc7XG5pbXBvcnQgTWFza2VkIGZyb20gJy4vYmFzZS5qcyc7XG5pbXBvcnQgSU1hc2sgZnJvbSAnLi4vY29yZS9ob2xkZXIuanMnO1xuaW1wb3J0ICcuLi9jb3JlL2NvbnRpbnVvdXMtdGFpbC1kZXRhaWxzLmpzJztcblxuLyoqXHJcbiAgTnVtYmVyIG1hc2tcclxuICBAcGFyYW0ge09iamVjdH0gb3B0c1xyXG4gIEBwYXJhbSB7c3RyaW5nfSBvcHRzLnJhZGl4IC0gU2luZ2xlIGNoYXJcclxuICBAcGFyYW0ge3N0cmluZ30gb3B0cy50aG91c2FuZHNTZXBhcmF0b3IgLSBTaW5nbGUgY2hhclxyXG4gIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gb3B0cy5tYXBUb1JhZGl4IC0gQXJyYXkgb2Ygc2luZ2xlIGNoYXJzXHJcbiAgQHBhcmFtIHtudW1iZXJ9IG9wdHMubWluXHJcbiAgQHBhcmFtIHtudW1iZXJ9IG9wdHMubWF4XHJcbiAgQHBhcmFtIHtudW1iZXJ9IG9wdHMuc2NhbGUgLSBEaWdpdHMgYWZ0ZXIgcG9pbnRcclxuICBAcGFyYW0ge2Jvb2xlYW59IG9wdHMuc2lnbmVkIC0gQWxsb3cgbmVnYXRpdmVcclxuICBAcGFyYW0ge2Jvb2xlYW59IG9wdHMubm9ybWFsaXplWmVyb3MgLSBGbGFnIHRvIHJlbW92ZSBsZWFkaW5nIGFuZCB0cmFpbGluZyB6ZXJvcyBpbiB0aGUgZW5kIG9mIGVkaXRpbmdcclxuICBAcGFyYW0ge2Jvb2xlYW59IG9wdHMucGFkRnJhY3Rpb25hbFplcm9zIC0gRmxhZyB0byBwYWQgdHJhaWxpbmcgemVyb3MgYWZ0ZXIgcG9pbnQgaW4gdGhlIGVuZCBvZiBlZGl0aW5nXHJcbiovXG52YXIgTWFza2VkTnVtYmVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfTWFza2VkKSB7XG4gIF9pbmhlcml0cyhNYXNrZWROdW1iZXIsIF9NYXNrZWQpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoTWFza2VkTnVtYmVyKTtcblxuICAvKiogU2luZ2xlIGNoYXIgKi9cblxuICAvKiogU2luZ2xlIGNoYXIgKi9cblxuICAvKiogQXJyYXkgb2Ygc2luZ2xlIGNoYXJzICovXG5cbiAgLyoqICovXG5cbiAgLyoqICovXG5cbiAgLyoqIERpZ2l0cyBhZnRlciBwb2ludCAqL1xuXG4gIC8qKiAqL1xuXG4gIC8qKiBGbGFnIHRvIHJlbW92ZSBsZWFkaW5nIGFuZCB0cmFpbGluZyB6ZXJvcyBpbiB0aGUgZW5kIG9mIGVkaXRpbmcgKi9cblxuICAvKiogRmxhZyB0byBwYWQgdHJhaWxpbmcgemVyb3MgYWZ0ZXIgcG9pbnQgaW4gdGhlIGVuZCBvZiBlZGl0aW5nICovXG4gIGZ1bmN0aW9uIE1hc2tlZE51bWJlcihvcHRzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1hc2tlZE51bWJlcik7XG5cbiAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgT2JqZWN0LmFzc2lnbih7fSwgTWFza2VkTnVtYmVyLkRFRkFVTFRTLCBvcHRzKSk7XG4gIH1cbiAgLyoqXHJcbiAgICBAb3ZlcnJpZGVcclxuICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKE1hc2tlZE51bWJlciwgW3tcbiAgICBrZXk6IFwiX3VwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfdXBkYXRlKG9wdHMpIHtcbiAgICAgIF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZE51bWJlci5wcm90b3R5cGUpLCBcIl91cGRhdGVcIiwgdGhpcykuY2FsbCh0aGlzLCBvcHRzKTtcblxuICAgICAgdGhpcy5fdXBkYXRlUmVnRXhwcygpO1xuICAgIH1cbiAgICAvKiogKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl91cGRhdGVSZWdFeHBzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF91cGRhdGVSZWdFeHBzKCkge1xuICAgICAgLy8gdXNlIGRpZmZlcmVudCByZWdleHAgdG8gcHJvY2VzcyB1c2VyIGlucHV0IChtb3JlIHN0cmljdCwgaW5wdXQgc3VmZml4KSBhbmQgdGFpbCBzaGlmdGluZ1xuICAgICAgdmFyIHN0YXJ0ID0gJ14nICsgKHRoaXMuYWxsb3dOZWdhdGl2ZSA/ICdbK3xcXFxcLV0/JyA6ICcnKTtcbiAgICAgIHZhciBtaWRJbnB1dCA9ICcoMHwoWzEtOV0rXFxcXGQqKSk/JztcbiAgICAgIHZhciBtaWQgPSAnXFxcXGQqJztcbiAgICAgIHZhciBlbmQgPSAodGhpcy5zY2FsZSA/ICcoJyArIGVzY2FwZVJlZ0V4cCh0aGlzLnJhZGl4KSArICdcXFxcZHswLCcgKyB0aGlzLnNjYWxlICsgJ30pPycgOiAnJykgKyAnJCc7XG4gICAgICB0aGlzLl9udW1iZXJSZWdFeHBJbnB1dCA9IG5ldyBSZWdFeHAoc3RhcnQgKyBtaWRJbnB1dCArIGVuZCk7XG4gICAgICB0aGlzLl9udW1iZXJSZWdFeHAgPSBuZXcgUmVnRXhwKHN0YXJ0ICsgbWlkICsgZW5kKTtcbiAgICAgIHRoaXMuX21hcFRvUmFkaXhSZWdFeHAgPSBuZXcgUmVnRXhwKCdbJyArIHRoaXMubWFwVG9SYWRpeC5tYXAoZXNjYXBlUmVnRXhwKS5qb2luKCcnKSArICddJywgJ2cnKTtcbiAgICAgIHRoaXMuX3Rob3VzYW5kc1NlcGFyYXRvclJlZ0V4cCA9IG5ldyBSZWdFeHAoZXNjYXBlUmVnRXhwKHRoaXMudGhvdXNhbmRzU2VwYXJhdG9yKSwgJ2cnKTtcbiAgICB9XG4gICAgLyoqICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfcmVtb3ZlVGhvdXNhbmRzU2VwYXJhdG9yc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfcmVtb3ZlVGhvdXNhbmRzU2VwYXJhdG9ycyh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UodGhpcy5fdGhvdXNhbmRzU2VwYXJhdG9yUmVnRXhwLCAnJyk7XG4gICAgfVxuICAgIC8qKiAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX2luc2VydFRob3VzYW5kc1NlcGFyYXRvcnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2luc2VydFRob3VzYW5kc1NlcGFyYXRvcnModmFsdWUpIHtcbiAgICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI5MDExMDIvaG93LXRvLXByaW50LWEtbnVtYmVyLXdpdGgtY29tbWFzLWFzLXRob3VzYW5kcy1zZXBhcmF0b3JzLWluLWphdmFzY3JpcHRcbiAgICAgIHZhciBwYXJ0cyA9IHZhbHVlLnNwbGl0KHRoaXMucmFkaXgpO1xuICAgICAgcGFydHNbMF0gPSBwYXJ0c1swXS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCB0aGlzLnRob3VzYW5kc1NlcGFyYXRvcik7XG4gICAgICByZXR1cm4gcGFydHMuam9pbih0aGlzLnJhZGl4KTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRvUHJlcGFyZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkb1ByZXBhcmUoc3RyKSB7XG4gICAgICB2YXIgX2dldDI7XG5cbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoX2dldDIgPSBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWROdW1iZXIucHJvdG90eXBlKSwgXCJkb1ByZXBhcmVcIiwgdGhpcykpLmNhbGwuYXBwbHkoX2dldDIsIFt0aGlzLCB0aGlzLl9yZW1vdmVUaG91c2FuZHNTZXBhcmF0b3JzKHN0ci5yZXBsYWNlKHRoaXMuX21hcFRvUmFkaXhSZWdFeHAsIHRoaXMucmFkaXgpKV0uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG4gICAgLyoqICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfc2VwYXJhdG9yc0NvdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9zZXBhcmF0b3JzQ291bnQodG8pIHtcbiAgICAgIHZhciBleHRlbmRPblNlcGFyYXRvcnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlO1xuICAgICAgdmFyIGNvdW50ID0gMDtcblxuICAgICAgZm9yICh2YXIgcG9zID0gMDsgcG9zIDwgdG87ICsrcG9zKSB7XG4gICAgICAgIGlmICh0aGlzLl92YWx1ZS5pbmRleE9mKHRoaXMudGhvdXNhbmRzU2VwYXJhdG9yLCBwb3MpID09PSBwb3MpIHtcbiAgICAgICAgICArK2NvdW50O1xuICAgICAgICAgIGlmIChleHRlbmRPblNlcGFyYXRvcnMpIHRvICs9IHRoaXMudGhvdXNhbmRzU2VwYXJhdG9yLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gY291bnQ7XG4gICAgfVxuICAgIC8qKiAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX3NlcGFyYXRvcnNDb3VudEZyb21TbGljZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfc2VwYXJhdG9yc0NvdW50RnJvbVNsaWNlKCkge1xuICAgICAgdmFyIHNsaWNlID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB0aGlzLl92YWx1ZTtcbiAgICAgIHJldHVybiB0aGlzLl9zZXBhcmF0b3JzQ291bnQodGhpcy5fcmVtb3ZlVGhvdXNhbmRzU2VwYXJhdG9ycyhzbGljZSkubGVuZ3RoLCB0cnVlKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImV4dHJhY3RJbnB1dFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBleHRyYWN0SW5wdXQoKSB7XG4gICAgICB2YXIgZnJvbVBvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogMDtcbiAgICAgIHZhciB0b1BvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdGhpcy52YWx1ZS5sZW5ndGg7XG4gICAgICB2YXIgZmxhZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZDtcblxuICAgICAgdmFyIF90aGlzJF9hZGp1c3RSYW5nZVdpdCA9IHRoaXMuX2FkanVzdFJhbmdlV2l0aFNlcGFyYXRvcnMoZnJvbVBvcywgdG9Qb3MpO1xuXG4gICAgICB2YXIgX3RoaXMkX2FkanVzdFJhbmdlV2l0MiA9IF9zbGljZWRUb0FycmF5KF90aGlzJF9hZGp1c3RSYW5nZVdpdCwgMik7XG5cbiAgICAgIGZyb21Qb3MgPSBfdGhpcyRfYWRqdXN0UmFuZ2VXaXQyWzBdO1xuICAgICAgdG9Qb3MgPSBfdGhpcyRfYWRqdXN0UmFuZ2VXaXQyWzFdO1xuICAgICAgcmV0dXJuIHRoaXMuX3JlbW92ZVRob3VzYW5kc1NlcGFyYXRvcnMoX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkTnVtYmVyLnByb3RvdHlwZSksIFwiZXh0cmFjdElucHV0XCIsIHRoaXMpLmNhbGwodGhpcywgZnJvbVBvcywgdG9Qb3MsIGZsYWdzKSk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfYXBwZW5kQ2hhclJhd1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfYXBwZW5kQ2hhclJhdyhjaCkge1xuICAgICAgdmFyIGZsYWdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICAgIGlmICghdGhpcy50aG91c2FuZHNTZXBhcmF0b3IpIHJldHVybiBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWROdW1iZXIucHJvdG90eXBlKSwgXCJfYXBwZW5kQ2hhclJhd1wiLCB0aGlzKS5jYWxsKHRoaXMsIGNoLCBmbGFncyk7XG4gICAgICB2YXIgcHJldkJlZm9yZVRhaWxWYWx1ZSA9IGZsYWdzLnRhaWwgJiYgZmxhZ3MuX2JlZm9yZVRhaWxTdGF0ZSA/IGZsYWdzLl9iZWZvcmVUYWlsU3RhdGUuX3ZhbHVlIDogdGhpcy5fdmFsdWU7XG5cbiAgICAgIHZhciBwcmV2QmVmb3JlVGFpbFNlcGFyYXRvcnNDb3VudCA9IHRoaXMuX3NlcGFyYXRvcnNDb3VudEZyb21TbGljZShwcmV2QmVmb3JlVGFpbFZhbHVlKTtcblxuICAgICAgdGhpcy5fdmFsdWUgPSB0aGlzLl9yZW1vdmVUaG91c2FuZHNTZXBhcmF0b3JzKHRoaXMudmFsdWUpO1xuXG4gICAgICB2YXIgYXBwZW5kRGV0YWlscyA9IF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZE51bWJlci5wcm90b3R5cGUpLCBcIl9hcHBlbmRDaGFyUmF3XCIsIHRoaXMpLmNhbGwodGhpcywgY2gsIGZsYWdzKTtcblxuICAgICAgdGhpcy5fdmFsdWUgPSB0aGlzLl9pbnNlcnRUaG91c2FuZHNTZXBhcmF0b3JzKHRoaXMuX3ZhbHVlKTtcbiAgICAgIHZhciBiZWZvcmVUYWlsVmFsdWUgPSBmbGFncy50YWlsICYmIGZsYWdzLl9iZWZvcmVUYWlsU3RhdGUgPyBmbGFncy5fYmVmb3JlVGFpbFN0YXRlLl92YWx1ZSA6IHRoaXMuX3ZhbHVlO1xuXG4gICAgICB2YXIgYmVmb3JlVGFpbFNlcGFyYXRvcnNDb3VudCA9IHRoaXMuX3NlcGFyYXRvcnNDb3VudEZyb21TbGljZShiZWZvcmVUYWlsVmFsdWUpO1xuXG4gICAgICBhcHBlbmREZXRhaWxzLnRhaWxTaGlmdCArPSAoYmVmb3JlVGFpbFNlcGFyYXRvcnNDb3VudCAtIHByZXZCZWZvcmVUYWlsU2VwYXJhdG9yc0NvdW50KSAqIHRoaXMudGhvdXNhbmRzU2VwYXJhdG9yLmxlbmd0aDtcbiAgICAgIGFwcGVuZERldGFpbHMuc2tpcCA9ICFhcHBlbmREZXRhaWxzLnJhd0luc2VydGVkICYmIGNoID09PSB0aGlzLnRob3VzYW5kc1NlcGFyYXRvcjtcbiAgICAgIHJldHVybiBhcHBlbmREZXRhaWxzO1xuICAgIH1cbiAgICAvKiogKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9maW5kU2VwYXJhdG9yQXJvdW5kXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9maW5kU2VwYXJhdG9yQXJvdW5kKHBvcykge1xuICAgICAgaWYgKHRoaXMudGhvdXNhbmRzU2VwYXJhdG9yKSB7XG4gICAgICAgIHZhciBzZWFyY2hGcm9tID0gcG9zIC0gdGhpcy50aG91c2FuZHNTZXBhcmF0b3IubGVuZ3RoICsgMTtcbiAgICAgICAgdmFyIHNlcGFyYXRvclBvcyA9IHRoaXMudmFsdWUuaW5kZXhPZih0aGlzLnRob3VzYW5kc1NlcGFyYXRvciwgc2VhcmNoRnJvbSk7XG4gICAgICAgIGlmIChzZXBhcmF0b3JQb3MgPD0gcG9zKSByZXR1cm4gc2VwYXJhdG9yUG9zO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9hZGp1c3RSYW5nZVdpdGhTZXBhcmF0b3JzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9hZGp1c3RSYW5nZVdpdGhTZXBhcmF0b3JzKGZyb20sIHRvKSB7XG4gICAgICB2YXIgc2VwYXJhdG9yQXJvdW5kRnJvbVBvcyA9IHRoaXMuX2ZpbmRTZXBhcmF0b3JBcm91bmQoZnJvbSk7XG5cbiAgICAgIGlmIChzZXBhcmF0b3JBcm91bmRGcm9tUG9zID49IDApIGZyb20gPSBzZXBhcmF0b3JBcm91bmRGcm9tUG9zO1xuXG4gICAgICB2YXIgc2VwYXJhdG9yQXJvdW5kVG9Qb3MgPSB0aGlzLl9maW5kU2VwYXJhdG9yQXJvdW5kKHRvKTtcblxuICAgICAgaWYgKHNlcGFyYXRvckFyb3VuZFRvUG9zID49IDApIHRvID0gc2VwYXJhdG9yQXJvdW5kVG9Qb3MgKyB0aGlzLnRob3VzYW5kc1NlcGFyYXRvci5sZW5ndGg7XG4gICAgICByZXR1cm4gW2Zyb20sIHRvXTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInJlbW92ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICB2YXIgZnJvbVBvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogMDtcbiAgICAgIHZhciB0b1BvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdGhpcy52YWx1ZS5sZW5ndGg7XG5cbiAgICAgIHZhciBfdGhpcyRfYWRqdXN0UmFuZ2VXaXQzID0gdGhpcy5fYWRqdXN0UmFuZ2VXaXRoU2VwYXJhdG9ycyhmcm9tUG9zLCB0b1Bvcyk7XG5cbiAgICAgIHZhciBfdGhpcyRfYWRqdXN0UmFuZ2VXaXQ0ID0gX3NsaWNlZFRvQXJyYXkoX3RoaXMkX2FkanVzdFJhbmdlV2l0MywgMik7XG5cbiAgICAgIGZyb21Qb3MgPSBfdGhpcyRfYWRqdXN0UmFuZ2VXaXQ0WzBdO1xuICAgICAgdG9Qb3MgPSBfdGhpcyRfYWRqdXN0UmFuZ2VXaXQ0WzFdO1xuICAgICAgdmFyIHZhbHVlQmVmb3JlUG9zID0gdGhpcy52YWx1ZS5zbGljZSgwLCBmcm9tUG9zKTtcbiAgICAgIHZhciB2YWx1ZUFmdGVyUG9zID0gdGhpcy52YWx1ZS5zbGljZSh0b1Bvcyk7XG5cbiAgICAgIHZhciBwcmV2QmVmb3JlVGFpbFNlcGFyYXRvcnNDb3VudCA9IHRoaXMuX3NlcGFyYXRvcnNDb3VudCh2YWx1ZUJlZm9yZVBvcy5sZW5ndGgpO1xuXG4gICAgICB0aGlzLl92YWx1ZSA9IHRoaXMuX2luc2VydFRob3VzYW5kc1NlcGFyYXRvcnModGhpcy5fcmVtb3ZlVGhvdXNhbmRzU2VwYXJhdG9ycyh2YWx1ZUJlZm9yZVBvcyArIHZhbHVlQWZ0ZXJQb3MpKTtcblxuICAgICAgdmFyIGJlZm9yZVRhaWxTZXBhcmF0b3JzQ291bnQgPSB0aGlzLl9zZXBhcmF0b3JzQ291bnRGcm9tU2xpY2UodmFsdWVCZWZvcmVQb3MpO1xuXG4gICAgICByZXR1cm4gbmV3IENoYW5nZURldGFpbHMoe1xuICAgICAgICB0YWlsU2hpZnQ6IChiZWZvcmVUYWlsU2VwYXJhdG9yc0NvdW50IC0gcHJldkJlZm9yZVRhaWxTZXBhcmF0b3JzQ291bnQpICogdGhpcy50aG91c2FuZHNTZXBhcmF0b3IubGVuZ3RoXG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm5lYXJlc3RJbnB1dFBvc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBuZWFyZXN0SW5wdXRQb3MoY3Vyc29yUG9zLCBkaXJlY3Rpb24pIHtcbiAgICAgIGlmICghdGhpcy50aG91c2FuZHNTZXBhcmF0b3IpIHJldHVybiBjdXJzb3JQb3M7XG5cbiAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICAgIGNhc2UgRElSRUNUSU9OLk5PTkU6XG4gICAgICAgIGNhc2UgRElSRUNUSU9OLkxFRlQ6XG4gICAgICAgIGNhc2UgRElSRUNUSU9OLkZPUkNFX0xFRlQ6XG4gICAgICAgICAge1xuICAgICAgICAgICAgdmFyIHNlcGFyYXRvckF0TGVmdFBvcyA9IHRoaXMuX2ZpbmRTZXBhcmF0b3JBcm91bmQoY3Vyc29yUG9zIC0gMSk7XG5cbiAgICAgICAgICAgIGlmIChzZXBhcmF0b3JBdExlZnRQb3MgPj0gMCkge1xuICAgICAgICAgICAgICB2YXIgc2VwYXJhdG9yQXRMZWZ0RW5kUG9zID0gc2VwYXJhdG9yQXRMZWZ0UG9zICsgdGhpcy50aG91c2FuZHNTZXBhcmF0b3IubGVuZ3RoO1xuXG4gICAgICAgICAgICAgIGlmIChjdXJzb3JQb3MgPCBzZXBhcmF0b3JBdExlZnRFbmRQb3MgfHwgdGhpcy52YWx1ZS5sZW5ndGggPD0gc2VwYXJhdG9yQXRMZWZ0RW5kUG9zIHx8IGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLkZPUkNFX0xFRlQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VwYXJhdG9yQXRMZWZ0UG9zO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICBjYXNlIERJUkVDVElPTi5SSUdIVDpcbiAgICAgICAgY2FzZSBESVJFQ1RJT04uRk9SQ0VfUklHSFQ6XG4gICAgICAgICAge1xuICAgICAgICAgICAgdmFyIHNlcGFyYXRvckF0UmlnaHRQb3MgPSB0aGlzLl9maW5kU2VwYXJhdG9yQXJvdW5kKGN1cnNvclBvcyk7XG5cbiAgICAgICAgICAgIGlmIChzZXBhcmF0b3JBdFJpZ2h0UG9zID49IDApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHNlcGFyYXRvckF0UmlnaHRQb3MgKyB0aGlzLnRob3VzYW5kc1NlcGFyYXRvci5sZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gY3Vyc29yUG9zO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZG9WYWxpZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkb1ZhbGlkYXRlKGZsYWdzKSB7XG4gICAgICB2YXIgcmVnZXhwID0gZmxhZ3MuaW5wdXQgPyB0aGlzLl9udW1iZXJSZWdFeHBJbnB1dCA6IHRoaXMuX251bWJlclJlZ0V4cDsgLy8gdmFsaWRhdGUgYXMgc3RyaW5nXG5cbiAgICAgIHZhciB2YWxpZCA9IHJlZ2V4cC50ZXN0KHRoaXMuX3JlbW92ZVRob3VzYW5kc1NlcGFyYXRvcnModGhpcy52YWx1ZSkpO1xuXG4gICAgICBpZiAodmFsaWQpIHtcbiAgICAgICAgLy8gdmFsaWRhdGUgYXMgbnVtYmVyXG4gICAgICAgIHZhciBudW1iZXIgPSB0aGlzLm51bWJlcjtcbiAgICAgICAgdmFsaWQgPSB2YWxpZCAmJiAhaXNOYU4obnVtYmVyKSAmJiAoIC8vIGNoZWNrIG1pbiBib3VuZCBmb3IgbmVnYXRpdmUgdmFsdWVzXG4gICAgICAgIHRoaXMubWluID09IG51bGwgfHwgdGhpcy5taW4gPj0gMCB8fCB0aGlzLm1pbiA8PSB0aGlzLm51bWJlcikgJiYgKCAvLyBjaGVjayBtYXggYm91bmQgZm9yIHBvc2l0aXZlIHZhbHVlc1xuICAgICAgICB0aGlzLm1heCA9PSBudWxsIHx8IHRoaXMubWF4IDw9IDAgfHwgdGhpcy5udW1iZXIgPD0gdGhpcy5tYXgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFsaWQgJiYgX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkTnVtYmVyLnByb3RvdHlwZSksIFwiZG9WYWxpZGF0ZVwiLCB0aGlzKS5jYWxsKHRoaXMsIGZsYWdzKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRvQ29tbWl0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRvQ29tbWl0KCkge1xuICAgICAgaWYgKHRoaXMudmFsdWUpIHtcbiAgICAgICAgdmFyIG51bWJlciA9IHRoaXMubnVtYmVyO1xuICAgICAgICB2YXIgdmFsaWRudW0gPSBudW1iZXI7IC8vIGNoZWNrIGJvdW5kc1xuXG4gICAgICAgIGlmICh0aGlzLm1pbiAhPSBudWxsKSB2YWxpZG51bSA9IE1hdGgubWF4KHZhbGlkbnVtLCB0aGlzLm1pbik7XG4gICAgICAgIGlmICh0aGlzLm1heCAhPSBudWxsKSB2YWxpZG51bSA9IE1hdGgubWluKHZhbGlkbnVtLCB0aGlzLm1heCk7XG4gICAgICAgIGlmICh2YWxpZG51bSAhPT0gbnVtYmVyKSB0aGlzLnVubWFza2VkVmFsdWUgPSBTdHJpbmcodmFsaWRudW0pO1xuICAgICAgICB2YXIgZm9ybWF0dGVkID0gdGhpcy52YWx1ZTtcbiAgICAgICAgaWYgKHRoaXMubm9ybWFsaXplWmVyb3MpIGZvcm1hdHRlZCA9IHRoaXMuX25vcm1hbGl6ZVplcm9zKGZvcm1hdHRlZCk7XG4gICAgICAgIGlmICh0aGlzLnBhZEZyYWN0aW9uYWxaZXJvcykgZm9ybWF0dGVkID0gdGhpcy5fcGFkRnJhY3Rpb25hbFplcm9zKGZvcm1hdHRlZCk7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gZm9ybWF0dGVkO1xuICAgICAgfVxuXG4gICAgICBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWROdW1iZXIucHJvdG90eXBlKSwgXCJkb0NvbW1pdFwiLCB0aGlzKS5jYWxsKHRoaXMpO1xuICAgIH1cbiAgICAvKiogKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9ub3JtYWxpemVaZXJvc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfbm9ybWFsaXplWmVyb3ModmFsdWUpIHtcbiAgICAgIHZhciBwYXJ0cyA9IHRoaXMuX3JlbW92ZVRob3VzYW5kc1NlcGFyYXRvcnModmFsdWUpLnNwbGl0KHRoaXMucmFkaXgpOyAvLyByZW1vdmUgbGVhZGluZyB6ZXJvc1xuXG5cbiAgICAgIHBhcnRzWzBdID0gcGFydHNbMF0ucmVwbGFjZSgvXihcXEQqKSgwKikoXFxkKikvLCBmdW5jdGlvbiAobWF0Y2gsIHNpZ24sIHplcm9zLCBudW0pIHtcbiAgICAgICAgcmV0dXJuIHNpZ24gKyBudW07XG4gICAgICB9KTsgLy8gYWRkIGxlYWRpbmcgemVyb1xuXG4gICAgICBpZiAodmFsdWUubGVuZ3RoICYmICEvXFxkJC8udGVzdChwYXJ0c1swXSkpIHBhcnRzWzBdID0gcGFydHNbMF0gKyAnMCc7XG5cbiAgICAgIGlmIChwYXJ0cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIHBhcnRzWzFdID0gcGFydHNbMV0ucmVwbGFjZSgvMCokLywgJycpOyAvLyByZW1vdmUgdHJhaWxpbmcgemVyb3NcblxuICAgICAgICBpZiAoIXBhcnRzWzFdLmxlbmd0aCkgcGFydHMubGVuZ3RoID0gMTsgLy8gcmVtb3ZlIGZyYWN0aW9uYWxcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuX2luc2VydFRob3VzYW5kc1NlcGFyYXRvcnMocGFydHMuam9pbih0aGlzLnJhZGl4KSk7XG4gICAgfVxuICAgIC8qKiAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX3BhZEZyYWN0aW9uYWxaZXJvc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfcGFkRnJhY3Rpb25hbFplcm9zKHZhbHVlKSB7XG4gICAgICBpZiAoIXZhbHVlKSByZXR1cm4gdmFsdWU7XG4gICAgICB2YXIgcGFydHMgPSB2YWx1ZS5zcGxpdCh0aGlzLnJhZGl4KTtcbiAgICAgIGlmIChwYXJ0cy5sZW5ndGggPCAyKSBwYXJ0cy5wdXNoKCcnKTtcbiAgICAgIHBhcnRzWzFdID0gcGFydHNbMV0ucGFkRW5kKHRoaXMuc2NhbGUsICcwJyk7XG4gICAgICByZXR1cm4gcGFydHMuam9pbih0aGlzLnJhZGl4KTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInVubWFza2VkVmFsdWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZW1vdmVUaG91c2FuZHNTZXBhcmF0b3JzKHRoaXMuX25vcm1hbGl6ZVplcm9zKHRoaXMudmFsdWUpKS5yZXBsYWNlKHRoaXMucmFkaXgsICcuJyk7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh1bm1hc2tlZFZhbHVlKSB7XG4gICAgICBfc2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWROdW1iZXIucHJvdG90eXBlKSwgXCJ1bm1hc2tlZFZhbHVlXCIsIHVubWFza2VkVmFsdWUucmVwbGFjZSgnLicsIHRoaXMucmFkaXgpLCB0aGlzLCB0cnVlKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInR5cGVkVmFsdWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBOdW1iZXIodGhpcy51bm1hc2tlZFZhbHVlKTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KG4pIHtcbiAgICAgIF9zZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZE51bWJlci5wcm90b3R5cGUpLCBcInVubWFza2VkVmFsdWVcIiwgU3RyaW5nKG4pLCB0aGlzLCB0cnVlKTtcbiAgICB9XG4gICAgLyoqIFBhcnNlZCBOdW1iZXIgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm51bWJlclwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMudHlwZWRWYWx1ZTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KG51bWJlcikge1xuICAgICAgdGhpcy50eXBlZFZhbHVlID0gbnVtYmVyO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgSXMgbmVnYXRpdmUgYWxsb3dlZFxyXG4gICAgICBAcmVhZG9ubHlcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJhbGxvd05lZ2F0aXZlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zaWduZWQgfHwgdGhpcy5taW4gIT0gbnVsbCAmJiB0aGlzLm1pbiA8IDAgfHwgdGhpcy5tYXggIT0gbnVsbCAmJiB0aGlzLm1heCA8IDA7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1hc2tlZE51bWJlcjtcbn0oTWFza2VkKTtcbk1hc2tlZE51bWJlci5ERUZBVUxUUyA9IHtcbiAgcmFkaXg6ICcsJyxcbiAgdGhvdXNhbmRzU2VwYXJhdG9yOiAnJyxcbiAgbWFwVG9SYWRpeDogWycuJ10sXG4gIHNjYWxlOiAyLFxuICBzaWduZWQ6IGZhbHNlLFxuICBub3JtYWxpemVaZXJvczogdHJ1ZSxcbiAgcGFkRnJhY3Rpb25hbFplcm9zOiBmYWxzZVxufTtcbklNYXNrLk1hc2tlZE51bWJlciA9IE1hc2tlZE51bWJlcjtcblxuZXhwb3J0IGRlZmF1bHQgTWFza2VkTnVtYmVyO1xuIiwiaW1wb3J0IHsgZCBhcyBfaW5oZXJpdHMsIGUgYXMgX2NyZWF0ZVN1cGVyLCBhIGFzIF9jbGFzc0NhbGxDaGVjaywgXyBhcyBfY3JlYXRlQ2xhc3MsIGcgYXMgX2dldCwgaCBhcyBfZ2V0UHJvdG90eXBlT2YsIGIgYXMgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzLCBpIGFzIF9zZXQgfSBmcm9tICcuLi9fcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzLTZjY2IxZjY0LmpzJztcbmltcG9ydCB7IGZvcmNlRGlyZWN0aW9uLCBESVJFQ1RJT04gfSBmcm9tICcuLi9jb3JlL3V0aWxzLmpzJztcbmltcG9ydCBDaGFuZ2VEZXRhaWxzIGZyb20gJy4uL2NvcmUvY2hhbmdlLWRldGFpbHMuanMnO1xuaW1wb3J0IE1hc2tlZCBmcm9tICcuL2Jhc2UuanMnO1xuaW1wb3J0IFBhdHRlcm5JbnB1dERlZmluaXRpb24sIHsgREVGQVVMVF9JTlBVVF9ERUZJTklUSU9OUyB9IGZyb20gJy4vcGF0dGVybi9pbnB1dC1kZWZpbml0aW9uLmpzJztcbmltcG9ydCBQYXR0ZXJuRml4ZWREZWZpbml0aW9uIGZyb20gJy4vcGF0dGVybi9maXhlZC1kZWZpbml0aW9uLmpzJztcbmltcG9ydCBDaHVua3NUYWlsRGV0YWlscyBmcm9tICcuL3BhdHRlcm4vY2h1bmstdGFpbC1kZXRhaWxzLmpzJztcbmltcG9ydCBjcmVhdGVNYXNrIGZyb20gJy4vZmFjdG9yeS5qcyc7XG5pbXBvcnQgSU1hc2sgZnJvbSAnLi4vY29yZS9ob2xkZXIuanMnO1xuaW1wb3J0ICcuL3JlZ2V4cC5qcyc7XG5pbXBvcnQgJy4uL2NvcmUvY29udGludW91cy10YWlsLWRldGFpbHMuanMnO1xuXG4vKipcclxuICBQYXR0ZXJuIG1hc2tcclxuICBAcGFyYW0ge09iamVjdH0gb3B0c1xyXG4gIEBwYXJhbSB7T2JqZWN0fSBvcHRzLmJsb2Nrc1xyXG4gIEBwYXJhbSB7T2JqZWN0fSBvcHRzLmRlZmluaXRpb25zXHJcbiAgQHBhcmFtIHtzdHJpbmd9IG9wdHMucGxhY2Vob2xkZXJDaGFyXHJcbiAgQHBhcmFtIHtib29sZWFufSBvcHRzLmxhenlcclxuKi9cbnZhciBNYXNrZWRQYXR0ZXJuID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfTWFza2VkKSB7XG4gIF9pbmhlcml0cyhNYXNrZWRQYXR0ZXJuLCBfTWFza2VkKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKE1hc2tlZFBhdHRlcm4pO1xuXG4gIC8qKiAqL1xuXG4gIC8qKiAqL1xuXG4gIC8qKiBTaW5nbGUgY2hhciBmb3IgZW1wdHkgaW5wdXQgKi9cblxuICAvKiogU2hvdyBwbGFjZWhvbGRlciBvbmx5IHdoZW4gbmVlZGVkICovXG4gIGZ1bmN0aW9uIE1hc2tlZFBhdHRlcm4oKSB7XG4gICAgdmFyIG9wdHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1hc2tlZFBhdHRlcm4pO1xuXG4gICAgLy8gVE9ETyB0eXBlICRTaGFwZTxNYXNrZWRQYXR0ZXJuT3B0aW9ucz49e30gZG9lcyBub3Qgd29ya1xuICAgIG9wdHMuZGVmaW5pdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBERUZBVUxUX0lOUFVUX0RFRklOSVRJT05TLCBvcHRzLmRlZmluaXRpb25zKTtcbiAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgT2JqZWN0LmFzc2lnbih7fSwgTWFza2VkUGF0dGVybi5ERUZBVUxUUywgb3B0cykpO1xuICB9XG4gIC8qKlxyXG4gICAgQG92ZXJyaWRlXHJcbiAgICBAcGFyYW0ge09iamVjdH0gb3B0c1xyXG4gICovXG5cblxuICBfY3JlYXRlQ2xhc3MoTWFza2VkUGF0dGVybiwgW3tcbiAgICBrZXk6IFwiX3VwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfdXBkYXRlKCkge1xuICAgICAgdmFyIG9wdHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgICAgb3B0cy5kZWZpbml0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGVmaW5pdGlvbnMsIG9wdHMuZGVmaW5pdGlvbnMpO1xuXG4gICAgICBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWRQYXR0ZXJuLnByb3RvdHlwZSksIFwiX3VwZGF0ZVwiLCB0aGlzKS5jYWxsKHRoaXMsIG9wdHMpO1xuXG4gICAgICB0aGlzLl9yZWJ1aWxkTWFzaygpO1xuICAgIH1cbiAgICAvKiogKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9yZWJ1aWxkTWFza1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfcmVidWlsZE1hc2soKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB2YXIgZGVmcyA9IHRoaXMuZGVmaW5pdGlvbnM7XG4gICAgICB0aGlzLl9ibG9ja3MgPSBbXTtcbiAgICAgIHRoaXMuX3N0b3BzID0gW107XG4gICAgICB0aGlzLl9tYXNrZWRCbG9ja3MgPSB7fTtcbiAgICAgIHZhciBwYXR0ZXJuID0gdGhpcy5tYXNrO1xuICAgICAgaWYgKCFwYXR0ZXJuIHx8ICFkZWZzKSByZXR1cm47XG4gICAgICB2YXIgdW5tYXNraW5nQmxvY2sgPSBmYWxzZTtcbiAgICAgIHZhciBvcHRpb25hbEJsb2NrID0gZmFsc2U7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGF0dGVybi5sZW5ndGg7ICsraSkge1xuICAgICAgICBpZiAodGhpcy5ibG9ja3MpIHtcbiAgICAgICAgICB2YXIgX3JldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBwID0gcGF0dGVybi5zbGljZShpKTtcbiAgICAgICAgICAgIHZhciBiTmFtZXMgPSBPYmplY3Qua2V5cyhfdGhpcy5ibG9ja3MpLmZpbHRlcihmdW5jdGlvbiAoYk5hbWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHAuaW5kZXhPZihiTmFtZSkgPT09IDA7XG4gICAgICAgICAgICB9KTsgLy8gb3JkZXIgYnkga2V5IGxlbmd0aFxuXG4gICAgICAgICAgICBiTmFtZXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICByZXR1cm4gYi5sZW5ndGggLSBhLmxlbmd0aDtcbiAgICAgICAgICAgIH0pOyAvLyB1c2UgYmxvY2sgbmFtZSB3aXRoIG1heCBsZW5ndGhcblxuICAgICAgICAgICAgdmFyIGJOYW1lID0gYk5hbWVzWzBdO1xuXG4gICAgICAgICAgICBpZiAoYk5hbWUpIHtcbiAgICAgICAgICAgICAgLy8gJEZsb3dGaXhNZSBubyBpZGVhc1xuICAgICAgICAgICAgICB2YXIgbWFza2VkQmxvY2sgPSBjcmVhdGVNYXNrKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgICAgIHBhcmVudDogX3RoaXMsXG4gICAgICAgICAgICAgICAgbGF6eTogX3RoaXMubGF6eSxcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlckNoYXI6IF90aGlzLnBsYWNlaG9sZGVyQ2hhcixcbiAgICAgICAgICAgICAgICBvdmVyd3JpdGU6IF90aGlzLm92ZXJ3cml0ZVxuICAgICAgICAgICAgICB9LCBfdGhpcy5ibG9ja3NbYk5hbWVdKSk7XG5cbiAgICAgICAgICAgICAgaWYgKG1hc2tlZEJsb2NrKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuX2Jsb2Nrcy5wdXNoKG1hc2tlZEJsb2NrKTsgLy8gc3RvcmUgYmxvY2sgaW5kZXhcblxuXG4gICAgICAgICAgICAgICAgaWYgKCFfdGhpcy5fbWFza2VkQmxvY2tzW2JOYW1lXSkgX3RoaXMuX21hc2tlZEJsb2Nrc1tiTmFtZV0gPSBbXTtcblxuICAgICAgICAgICAgICAgIF90aGlzLl9tYXNrZWRCbG9ja3NbYk5hbWVdLnB1c2goX3RoaXMuX2Jsb2Nrcy5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGkgKz0gYk5hbWUubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KCk7XG5cbiAgICAgICAgICBpZiAoX3JldCA9PT0gXCJjb250aW51ZVwiKSBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjaGFyID0gcGF0dGVybltpXTtcblxuICAgICAgICB2YXIgX2lzSW5wdXQgPSAoY2hhciBpbiBkZWZzKTtcblxuICAgICAgICBpZiAoY2hhciA9PT0gTWFza2VkUGF0dGVybi5TVE9QX0NIQVIpIHtcbiAgICAgICAgICB0aGlzLl9zdG9wcy5wdXNoKHRoaXMuX2Jsb2Nrcy5sZW5ndGgpO1xuXG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2hhciA9PT0gJ3snIHx8IGNoYXIgPT09ICd9Jykge1xuICAgICAgICAgIHVubWFza2luZ0Jsb2NrID0gIXVubWFza2luZ0Jsb2NrO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNoYXIgPT09ICdbJyB8fCBjaGFyID09PSAnXScpIHtcbiAgICAgICAgICBvcHRpb25hbEJsb2NrID0gIW9wdGlvbmFsQmxvY2s7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2hhciA9PT0gTWFza2VkUGF0dGVybi5FU0NBUEVfQ0hBUikge1xuICAgICAgICAgICsraTtcbiAgICAgICAgICBjaGFyID0gcGF0dGVybltpXTtcbiAgICAgICAgICBpZiAoIWNoYXIpIGJyZWFrO1xuICAgICAgICAgIF9pc0lucHV0ID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZGVmID0gX2lzSW5wdXQgPyBuZXcgUGF0dGVybklucHV0RGVmaW5pdGlvbih7XG4gICAgICAgICAgcGFyZW50OiB0aGlzLFxuICAgICAgICAgIGxhenk6IHRoaXMubGF6eSxcbiAgICAgICAgICBwbGFjZWhvbGRlckNoYXI6IHRoaXMucGxhY2Vob2xkZXJDaGFyLFxuICAgICAgICAgIG1hc2s6IGRlZnNbY2hhcl0sXG4gICAgICAgICAgaXNPcHRpb25hbDogb3B0aW9uYWxCbG9ja1xuICAgICAgICB9KSA6IG5ldyBQYXR0ZXJuRml4ZWREZWZpbml0aW9uKHtcbiAgICAgICAgICBjaGFyOiBjaGFyLFxuICAgICAgICAgIGlzVW5tYXNraW5nOiB1bm1hc2tpbmdCbG9ja1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl9ibG9ja3MucHVzaChkZWYpO1xuICAgICAgfVxuICAgIH1cbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic3RhdGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWRQYXR0ZXJuLnByb3RvdHlwZSksIFwic3RhdGVcIiwgdGhpcyksIHtcbiAgICAgICAgX2Jsb2NrczogdGhpcy5fYmxvY2tzLm1hcChmdW5jdGlvbiAoYikge1xuICAgICAgICAgIHJldHVybiBiLnN0YXRlO1xuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChzdGF0ZSkge1xuICAgICAgdmFyIF9ibG9ja3MgPSBzdGF0ZS5fYmxvY2tzLFxuICAgICAgICAgIG1hc2tlZFN0YXRlID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHN0YXRlLCBbXCJfYmxvY2tzXCJdKTtcblxuICAgICAgdGhpcy5fYmxvY2tzLmZvckVhY2goZnVuY3Rpb24gKGIsIGJpKSB7XG4gICAgICAgIHJldHVybiBiLnN0YXRlID0gX2Jsb2Nrc1tiaV07XG4gICAgICB9KTtcblxuICAgICAgX3NldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkUGF0dGVybi5wcm90b3R5cGUpLCBcInN0YXRlXCIsIG1hc2tlZFN0YXRlLCB0aGlzLCB0cnVlKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInJlc2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkUGF0dGVybi5wcm90b3R5cGUpLCBcInJlc2V0XCIsIHRoaXMpLmNhbGwodGhpcyk7XG5cbiAgICAgIHRoaXMuX2Jsb2Nrcy5mb3JFYWNoKGZ1bmN0aW9uIChiKSB7XG4gICAgICAgIHJldHVybiBiLnJlc2V0KCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImlzQ29tcGxldGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9ibG9ja3MuZXZlcnkoZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgcmV0dXJuIGIuaXNDb21wbGV0ZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZG9Db21taXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZG9Db21taXQoKSB7XG4gICAgICB0aGlzLl9ibG9ja3MuZm9yRWFjaChmdW5jdGlvbiAoYikge1xuICAgICAgICByZXR1cm4gYi5kb0NvbW1pdCgpO1xuICAgICAgfSk7XG5cbiAgICAgIF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZFBhdHRlcm4ucHJvdG90eXBlKSwgXCJkb0NvbW1pdFwiLCB0aGlzKS5jYWxsKHRoaXMpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidW5tYXNrZWRWYWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2Jsb2Nrcy5yZWR1Y2UoZnVuY3Rpb24gKHN0ciwgYikge1xuICAgICAgICByZXR1cm4gc3RyICs9IGIudW5tYXNrZWRWYWx1ZTtcbiAgICAgIH0sICcnKTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHVubWFza2VkVmFsdWUpIHtcbiAgICAgIF9zZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZFBhdHRlcm4ucHJvdG90eXBlKSwgXCJ1bm1hc2tlZFZhbHVlXCIsIHVubWFza2VkVmFsdWUsIHRoaXMsIHRydWUpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidmFsdWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIC8vIFRPRE8gcmV0dXJuIF92YWx1ZSB3aGVuIG5vdCBpbiBjaGFuZ2U/XG4gICAgICByZXR1cm4gdGhpcy5fYmxvY2tzLnJlZHVjZShmdW5jdGlvbiAoc3RyLCBiKSB7XG4gICAgICAgIHJldHVybiBzdHIgKz0gYi52YWx1ZTtcbiAgICAgIH0sICcnKTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICBfc2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWRQYXR0ZXJuLnByb3RvdHlwZSksIFwidmFsdWVcIiwgdmFsdWUsIHRoaXMsIHRydWUpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYXBwZW5kVGFpbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhcHBlbmRUYWlsKHRhaWwpIHtcbiAgICAgIHJldHVybiBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWRQYXR0ZXJuLnByb3RvdHlwZSksIFwiYXBwZW5kVGFpbFwiLCB0aGlzKS5jYWxsKHRoaXMsIHRhaWwpLmFnZ3JlZ2F0ZSh0aGlzLl9hcHBlbmRQbGFjZWhvbGRlcigpKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9hcHBlbmRDaGFyUmF3XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9hcHBlbmRDaGFyUmF3KGNoKSB7XG4gICAgICB2YXIgZmxhZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gICAgICB2YXIgYmxvY2tJdGVyID0gdGhpcy5fbWFwUG9zVG9CbG9jayh0aGlzLnZhbHVlLmxlbmd0aCk7XG5cbiAgICAgIHZhciBkZXRhaWxzID0gbmV3IENoYW5nZURldGFpbHMoKTtcbiAgICAgIGlmICghYmxvY2tJdGVyKSByZXR1cm4gZGV0YWlscztcblxuICAgICAgZm9yICh2YXIgYmkgPSBibG9ja0l0ZXIuaW5kZXg7OyArK2JpKSB7XG4gICAgICAgIHZhciBfYmxvY2sgPSB0aGlzLl9ibG9ja3NbYmldO1xuICAgICAgICBpZiAoIV9ibG9jaykgYnJlYWs7XG5cbiAgICAgICAgdmFyIGJsb2NrRGV0YWlscyA9IF9ibG9jay5fYXBwZW5kQ2hhcihjaCwgZmxhZ3MpO1xuXG4gICAgICAgIHZhciBza2lwID0gYmxvY2tEZXRhaWxzLnNraXA7XG4gICAgICAgIGRldGFpbHMuYWdncmVnYXRlKGJsb2NrRGV0YWlscyk7XG4gICAgICAgIGlmIChza2lwIHx8IGJsb2NrRGV0YWlscy5yYXdJbnNlcnRlZCkgYnJlYWs7IC8vIGdvIG5leHQgY2hhclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGV0YWlscztcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImV4dHJhY3RUYWlsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGV4dHJhY3RUYWlsKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBmcm9tUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xuICAgICAgdmFyIHRvUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0aGlzLnZhbHVlLmxlbmd0aDtcbiAgICAgIHZhciBjaHVua1RhaWwgPSBuZXcgQ2h1bmtzVGFpbERldGFpbHMoKTtcbiAgICAgIGlmIChmcm9tUG9zID09PSB0b1BvcykgcmV0dXJuIGNodW5rVGFpbDtcblxuICAgICAgdGhpcy5fZm9yRWFjaEJsb2Nrc0luUmFuZ2UoZnJvbVBvcywgdG9Qb3MsIGZ1bmN0aW9uIChiLCBiaSwgYkZyb21Qb3MsIGJUb1Bvcykge1xuICAgICAgICB2YXIgYmxvY2tDaHVuayA9IGIuZXh0cmFjdFRhaWwoYkZyb21Qb3MsIGJUb1Bvcyk7XG4gICAgICAgIGJsb2NrQ2h1bmsuc3RvcCA9IF90aGlzMi5fZmluZFN0b3BCZWZvcmUoYmkpO1xuICAgICAgICBibG9ja0NodW5rLmZyb20gPSBfdGhpczIuX2Jsb2NrU3RhcnRQb3MoYmkpO1xuICAgICAgICBpZiAoYmxvY2tDaHVuayBpbnN0YW5jZW9mIENodW5rc1RhaWxEZXRhaWxzKSBibG9ja0NodW5rLmJsb2NrSW5kZXggPSBiaTtcbiAgICAgICAgY2h1bmtUYWlsLmV4dGVuZChibG9ja0NodW5rKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gY2h1bmtUYWlsO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZXh0cmFjdElucHV0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGV4dHJhY3RJbnB1dCgpIHtcbiAgICAgIHZhciBmcm9tUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xuICAgICAgdmFyIHRvUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0aGlzLnZhbHVlLmxlbmd0aDtcbiAgICAgIHZhciBmbGFncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgICBpZiAoZnJvbVBvcyA9PT0gdG9Qb3MpIHJldHVybiAnJztcbiAgICAgIHZhciBpbnB1dCA9ICcnO1xuXG4gICAgICB0aGlzLl9mb3JFYWNoQmxvY2tzSW5SYW5nZShmcm9tUG9zLCB0b1BvcywgZnVuY3Rpb24gKGIsIF8sIGZyb21Qb3MsIHRvUG9zKSB7XG4gICAgICAgIGlucHV0ICs9IGIuZXh0cmFjdElucHV0KGZyb21Qb3MsIHRvUG9zLCBmbGFncyk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGlucHV0O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfZmluZFN0b3BCZWZvcmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2ZpbmRTdG9wQmVmb3JlKGJsb2NrSW5kZXgpIHtcbiAgICAgIHZhciBzdG9wQmVmb3JlO1xuXG4gICAgICBmb3IgKHZhciBzaSA9IDA7IHNpIDwgdGhpcy5fc3RvcHMubGVuZ3RoOyArK3NpKSB7XG4gICAgICAgIHZhciBzdG9wID0gdGhpcy5fc3RvcHNbc2ldO1xuICAgICAgICBpZiAoc3RvcCA8PSBibG9ja0luZGV4KSBzdG9wQmVmb3JlID0gc3RvcDtlbHNlIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3RvcEJlZm9yZTtcbiAgICB9XG4gICAgLyoqIEFwcGVuZHMgcGxhY2Vob2xkZXIgZGVwZW5kaW5nIG9uIGxhemluZXNzICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfYXBwZW5kUGxhY2Vob2xkZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2FwcGVuZFBsYWNlaG9sZGVyKHRvQmxvY2tJbmRleCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIHZhciBkZXRhaWxzID0gbmV3IENoYW5nZURldGFpbHMoKTtcbiAgICAgIGlmICh0aGlzLmxhenkgJiYgdG9CbG9ja0luZGV4ID09IG51bGwpIHJldHVybiBkZXRhaWxzO1xuXG4gICAgICB2YXIgc3RhcnRCbG9ja0l0ZXIgPSB0aGlzLl9tYXBQb3NUb0Jsb2NrKHRoaXMudmFsdWUubGVuZ3RoKTtcblxuICAgICAgaWYgKCFzdGFydEJsb2NrSXRlcikgcmV0dXJuIGRldGFpbHM7XG4gICAgICB2YXIgc3RhcnRCbG9ja0luZGV4ID0gc3RhcnRCbG9ja0l0ZXIuaW5kZXg7XG4gICAgICB2YXIgZW5kQmxvY2tJbmRleCA9IHRvQmxvY2tJbmRleCAhPSBudWxsID8gdG9CbG9ja0luZGV4IDogdGhpcy5fYmxvY2tzLmxlbmd0aDtcblxuICAgICAgdGhpcy5fYmxvY2tzLnNsaWNlKHN0YXJ0QmxvY2tJbmRleCwgZW5kQmxvY2tJbmRleCkuZm9yRWFjaChmdW5jdGlvbiAoYikge1xuICAgICAgICBpZiAoIWIubGF6eSB8fCB0b0Jsb2NrSW5kZXggIT0gbnVsbCkge1xuICAgICAgICAgIC8vICRGbG93Rml4TWUgYF9ibG9ja3NgIG1heSBub3QgYmUgcHJlc2VudFxuICAgICAgICAgIHZhciBhcmdzID0gYi5fYmxvY2tzICE9IG51bGwgPyBbYi5fYmxvY2tzLmxlbmd0aF0gOiBbXTtcblxuICAgICAgICAgIHZhciBiRGV0YWlscyA9IGIuX2FwcGVuZFBsYWNlaG9sZGVyLmFwcGx5KGIsIGFyZ3MpO1xuXG4gICAgICAgICAgX3RoaXMzLl92YWx1ZSArPSBiRGV0YWlscy5pbnNlcnRlZDtcbiAgICAgICAgICBkZXRhaWxzLmFnZ3JlZ2F0ZShiRGV0YWlscyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gZGV0YWlscztcbiAgICB9XG4gICAgLyoqIEZpbmRzIGJsb2NrIGluIHBvcyAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX21hcFBvc1RvQmxvY2tcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX21hcFBvc1RvQmxvY2socG9zKSB7XG4gICAgICB2YXIgYWNjVmFsID0gJyc7XG5cbiAgICAgIGZvciAodmFyIGJpID0gMDsgYmkgPCB0aGlzLl9ibG9ja3MubGVuZ3RoOyArK2JpKSB7XG4gICAgICAgIHZhciBfYmxvY2syID0gdGhpcy5fYmxvY2tzW2JpXTtcbiAgICAgICAgdmFyIGJsb2NrU3RhcnRQb3MgPSBhY2NWYWwubGVuZ3RoO1xuICAgICAgICBhY2NWYWwgKz0gX2Jsb2NrMi52YWx1ZTtcblxuICAgICAgICBpZiAocG9zIDw9IGFjY1ZhbC5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaW5kZXg6IGJpLFxuICAgICAgICAgICAgb2Zmc2V0OiBwb3MgLSBibG9ja1N0YXJ0UG9zXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvKiogKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9ibG9ja1N0YXJ0UG9zXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9ibG9ja1N0YXJ0UG9zKGJsb2NrSW5kZXgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9ibG9ja3Muc2xpY2UoMCwgYmxvY2tJbmRleCkucmVkdWNlKGZ1bmN0aW9uIChwb3MsIGIpIHtcbiAgICAgICAgcmV0dXJuIHBvcyArPSBiLnZhbHVlLmxlbmd0aDtcbiAgICAgIH0sIDApO1xuICAgIH1cbiAgICAvKiogKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9mb3JFYWNoQmxvY2tzSW5SYW5nZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZm9yRWFjaEJsb2Nrc0luUmFuZ2UoZnJvbVBvcykge1xuICAgICAgdmFyIHRvUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0aGlzLnZhbHVlLmxlbmd0aDtcbiAgICAgIHZhciBmbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkO1xuXG4gICAgICB2YXIgZnJvbUJsb2NrSXRlciA9IHRoaXMuX21hcFBvc1RvQmxvY2soZnJvbVBvcyk7XG5cbiAgICAgIGlmIChmcm9tQmxvY2tJdGVyKSB7XG4gICAgICAgIHZhciB0b0Jsb2NrSXRlciA9IHRoaXMuX21hcFBvc1RvQmxvY2sodG9Qb3MpOyAvLyBwcm9jZXNzIGZpcnN0IGJsb2NrXG5cblxuICAgICAgICB2YXIgaXNTYW1lQmxvY2sgPSB0b0Jsb2NrSXRlciAmJiBmcm9tQmxvY2tJdGVyLmluZGV4ID09PSB0b0Jsb2NrSXRlci5pbmRleDtcbiAgICAgICAgdmFyIGZyb21CbG9ja1N0YXJ0UG9zID0gZnJvbUJsb2NrSXRlci5vZmZzZXQ7XG4gICAgICAgIHZhciBmcm9tQmxvY2tFbmRQb3MgPSB0b0Jsb2NrSXRlciAmJiBpc1NhbWVCbG9jayA/IHRvQmxvY2tJdGVyLm9mZnNldCA6IHRoaXMuX2Jsb2Nrc1tmcm9tQmxvY2tJdGVyLmluZGV4XS52YWx1ZS5sZW5ndGg7XG4gICAgICAgIGZuKHRoaXMuX2Jsb2Nrc1tmcm9tQmxvY2tJdGVyLmluZGV4XSwgZnJvbUJsb2NrSXRlci5pbmRleCwgZnJvbUJsb2NrU3RhcnRQb3MsIGZyb21CbG9ja0VuZFBvcyk7XG5cbiAgICAgICAgaWYgKHRvQmxvY2tJdGVyICYmICFpc1NhbWVCbG9jaykge1xuICAgICAgICAgIC8vIHByb2Nlc3MgaW50ZXJtZWRpYXRlIGJsb2Nrc1xuICAgICAgICAgIGZvciAodmFyIGJpID0gZnJvbUJsb2NrSXRlci5pbmRleCArIDE7IGJpIDwgdG9CbG9ja0l0ZXIuaW5kZXg7ICsrYmkpIHtcbiAgICAgICAgICAgIGZuKHRoaXMuX2Jsb2Nrc1tiaV0sIGJpLCAwLCB0aGlzLl9ibG9ja3NbYmldLnZhbHVlLmxlbmd0aCk7XG4gICAgICAgICAgfSAvLyBwcm9jZXNzIGxhc3QgYmxvY2tcblxuXG4gICAgICAgICAgZm4odGhpcy5fYmxvY2tzW3RvQmxvY2tJdGVyLmluZGV4XSwgdG9CbG9ja0l0ZXIuaW5kZXgsIDAsIHRvQmxvY2tJdGVyLm9mZnNldCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInJlbW92ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICB2YXIgZnJvbVBvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogMDtcbiAgICAgIHZhciB0b1BvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdGhpcy52YWx1ZS5sZW5ndGg7XG5cbiAgICAgIHZhciByZW1vdmVEZXRhaWxzID0gX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkUGF0dGVybi5wcm90b3R5cGUpLCBcInJlbW92ZVwiLCB0aGlzKS5jYWxsKHRoaXMsIGZyb21Qb3MsIHRvUG9zKTtcblxuICAgICAgdGhpcy5fZm9yRWFjaEJsb2Nrc0luUmFuZ2UoZnJvbVBvcywgdG9Qb3MsIGZ1bmN0aW9uIChiLCBfLCBiRnJvbVBvcywgYlRvUG9zKSB7XG4gICAgICAgIHJlbW92ZURldGFpbHMuYWdncmVnYXRlKGIucmVtb3ZlKGJGcm9tUG9zLCBiVG9Qb3MpKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcmVtb3ZlRGV0YWlscztcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm5lYXJlc3RJbnB1dFBvc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBuZWFyZXN0SW5wdXRQb3MoY3Vyc29yUG9zKSB7XG4gICAgICB2YXIgZGlyZWN0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBESVJFQ1RJT04uTk9ORTtcbiAgICAgIC8vIFRPRE8gcmVmYWN0b3IgLSBleHRyYWN0IGFsaWduYmxvY2tcbiAgICAgIHZhciBiZWdpbkJsb2NrRGF0YSA9IHRoaXMuX21hcFBvc1RvQmxvY2soY3Vyc29yUG9zKSB8fCB7XG4gICAgICAgIGluZGV4OiAwLFxuICAgICAgICBvZmZzZXQ6IDBcbiAgICAgIH07XG4gICAgICB2YXIgYmVnaW5CbG9ja09mZnNldCA9IGJlZ2luQmxvY2tEYXRhLm9mZnNldCxcbiAgICAgICAgICBiZWdpbkJsb2NrSW5kZXggPSBiZWdpbkJsb2NrRGF0YS5pbmRleDtcbiAgICAgIHZhciBiZWdpbkJsb2NrID0gdGhpcy5fYmxvY2tzW2JlZ2luQmxvY2tJbmRleF07XG4gICAgICBpZiAoIWJlZ2luQmxvY2spIHJldHVybiBjdXJzb3JQb3M7XG4gICAgICB2YXIgYmVnaW5CbG9ja0N1cnNvclBvcyA9IGJlZ2luQmxvY2tPZmZzZXQ7IC8vIGlmIHBvc2l0aW9uIGluc2lkZSBibG9jayAtIHRyeSB0byBhZGp1c3QgaXRcblxuICAgICAgaWYgKGJlZ2luQmxvY2tDdXJzb3JQb3MgIT09IDAgJiYgYmVnaW5CbG9ja0N1cnNvclBvcyA8IGJlZ2luQmxvY2sudmFsdWUubGVuZ3RoKSB7XG4gICAgICAgIGJlZ2luQmxvY2tDdXJzb3JQb3MgPSBiZWdpbkJsb2NrLm5lYXJlc3RJbnB1dFBvcyhiZWdpbkJsb2NrT2Zmc2V0LCBmb3JjZURpcmVjdGlvbihkaXJlY3Rpb24pKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGN1cnNvckF0UmlnaHQgPSBiZWdpbkJsb2NrQ3Vyc29yUG9zID09PSBiZWdpbkJsb2NrLnZhbHVlLmxlbmd0aDtcbiAgICAgIHZhciBjdXJzb3JBdExlZnQgPSBiZWdpbkJsb2NrQ3Vyc29yUG9zID09PSAwOyAvLyAgY3Vyc29yIGlzIElOU0lERSBmaXJzdCBibG9jayAobm90IGF0IGJvdW5kcylcblxuICAgICAgaWYgKCFjdXJzb3JBdExlZnQgJiYgIWN1cnNvckF0UmlnaHQpIHJldHVybiB0aGlzLl9ibG9ja1N0YXJ0UG9zKGJlZ2luQmxvY2tJbmRleCkgKyBiZWdpbkJsb2NrQ3Vyc29yUG9zO1xuICAgICAgdmFyIHNlYXJjaEJsb2NrSW5kZXggPSBjdXJzb3JBdFJpZ2h0ID8gYmVnaW5CbG9ja0luZGV4ICsgMSA6IGJlZ2luQmxvY2tJbmRleDtcblxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLk5PTkUpIHtcbiAgICAgICAgLy8gTk9ORSBkaXJlY3Rpb24gdXNlZCB0byBjYWxjdWxhdGUgc3RhcnQgaW5wdXQgcG9zaXRpb24gaWYgbm8gY2hhcnMgd2VyZSByZW1vdmVkXG4gICAgICAgIC8vIEZPUiBOT05FOlxuICAgICAgICAvLyAtXG4gICAgICAgIC8vIGlucHV0fGFueVxuICAgICAgICAvLyAtPlxuICAgICAgICAvLyAgYW55fGlucHV0XG4gICAgICAgIC8vIDwtXG4gICAgICAgIC8vICBmaWxsZWQtaW5wdXR8YW55XG4gICAgICAgIC8vIGNoZWNrIGlmIGZpcnN0IGJsb2NrIGF0IGxlZnQgaXMgaW5wdXRcbiAgICAgICAgaWYgKHNlYXJjaEJsb2NrSW5kZXggPiAwKSB7XG4gICAgICAgICAgdmFyIGJsb2NrSW5kZXhBdExlZnQgPSBzZWFyY2hCbG9ja0luZGV4IC0gMTtcbiAgICAgICAgICB2YXIgYmxvY2tBdExlZnQgPSB0aGlzLl9ibG9ja3NbYmxvY2tJbmRleEF0TGVmdF07XG4gICAgICAgICAgdmFyIGJsb2NrSW5wdXRQb3MgPSBibG9ja0F0TGVmdC5uZWFyZXN0SW5wdXRQb3MoMCwgRElSRUNUSU9OLk5PTkUpOyAvLyBpcyBpbnB1dFxuXG4gICAgICAgICAgaWYgKCFibG9ja0F0TGVmdC52YWx1ZS5sZW5ndGggfHwgYmxvY2tJbnB1dFBvcyAhPT0gYmxvY2tBdExlZnQudmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYmxvY2tTdGFydFBvcyhzZWFyY2hCbG9ja0luZGV4KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gLy8gLT5cblxuXG4gICAgICAgIHZhciBmaXJzdElucHV0QXRSaWdodCA9IHNlYXJjaEJsb2NrSW5kZXg7XG5cbiAgICAgICAgZm9yICh2YXIgYmkgPSBmaXJzdElucHV0QXRSaWdodDsgYmkgPCB0aGlzLl9ibG9ja3MubGVuZ3RoOyArK2JpKSB7XG4gICAgICAgICAgdmFyIGJsb2NrQXRSaWdodCA9IHRoaXMuX2Jsb2Nrc1tiaV07XG5cbiAgICAgICAgICB2YXIgX2Jsb2NrSW5wdXRQb3MgPSBibG9ja0F0UmlnaHQubmVhcmVzdElucHV0UG9zKDAsIERJUkVDVElPTi5OT05FKTtcblxuICAgICAgICAgIGlmICghYmxvY2tBdFJpZ2h0LnZhbHVlLmxlbmd0aCB8fCBfYmxvY2tJbnB1dFBvcyAhPT0gYmxvY2tBdFJpZ2h0LnZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Jsb2NrU3RhcnRQb3MoYmkpICsgX2Jsb2NrSW5wdXRQb3M7XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vIDwtXG4gICAgICAgIC8vIGZpbmQgZmlyc3Qgbm9uLWZpeGVkIHN5bWJvbFxuXG5cbiAgICAgICAgZm9yICh2YXIgX2JpID0gc2VhcmNoQmxvY2tJbmRleCAtIDE7IF9iaSA+PSAwOyAtLV9iaSkge1xuICAgICAgICAgIHZhciBfYmxvY2szID0gdGhpcy5fYmxvY2tzW19iaV07XG5cbiAgICAgICAgICB2YXIgX2Jsb2NrSW5wdXRQb3MyID0gX2Jsb2NrMy5uZWFyZXN0SW5wdXRQb3MoMCwgRElSRUNUSU9OLk5PTkUpOyAvLyBpcyBpbnB1dFxuXG5cbiAgICAgICAgICBpZiAoIV9ibG9jazMudmFsdWUubGVuZ3RoIHx8IF9ibG9ja0lucHV0UG9zMiAhPT0gX2Jsb2NrMy52YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9ibG9ja1N0YXJ0UG9zKF9iaSkgKyBfYmxvY2szLnZhbHVlLmxlbmd0aDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY3Vyc29yUG9zO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGlyZWN0aW9uID09PSBESVJFQ1RJT04uTEVGVCB8fCBkaXJlY3Rpb24gPT09IERJUkVDVElPTi5GT1JDRV9MRUZUKSB7XG4gICAgICAgIC8vIC1cbiAgICAgICAgLy8gIGFueXxmaWxsZWQtaW5wdXRcbiAgICAgICAgLy8gPC1cbiAgICAgICAgLy8gIGFueXxmaXJzdCBub3QgZW1wdHkgaXMgbm90LWxlbi1hbGlnbmVkXG4gICAgICAgIC8vICBub3QtMC1hbGlnbmVkfGFueVxuICAgICAgICAvLyAtPlxuICAgICAgICAvLyAgYW55fG5vdC1sZW4tYWxpZ25lZCBvciBlbmRcbiAgICAgICAgLy8gY2hlY2sgaWYgZmlyc3QgYmxvY2sgYXQgcmlnaHQgaXMgZmlsbGVkIGlucHV0XG4gICAgICAgIHZhciBmaXJzdEZpbGxlZEJsb2NrSW5kZXhBdFJpZ2h0O1xuXG4gICAgICAgIGZvciAodmFyIF9iaTIgPSBzZWFyY2hCbG9ja0luZGV4OyBfYmkyIDwgdGhpcy5fYmxvY2tzLmxlbmd0aDsgKytfYmkyKSB7XG4gICAgICAgICAgaWYgKHRoaXMuX2Jsb2Nrc1tfYmkyXS52YWx1ZSkge1xuICAgICAgICAgICAgZmlyc3RGaWxsZWRCbG9ja0luZGV4QXRSaWdodCA9IF9iaTI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZmlyc3RGaWxsZWRCbG9ja0luZGV4QXRSaWdodCAhPSBudWxsKSB7XG4gICAgICAgICAgdmFyIGZpbGxlZEJsb2NrID0gdGhpcy5fYmxvY2tzW2ZpcnN0RmlsbGVkQmxvY2tJbmRleEF0UmlnaHRdO1xuXG4gICAgICAgICAgdmFyIF9ibG9ja0lucHV0UG9zMyA9IGZpbGxlZEJsb2NrLm5lYXJlc3RJbnB1dFBvcygwLCBESVJFQ1RJT04uUklHSFQpO1xuXG4gICAgICAgICAgaWYgKF9ibG9ja0lucHV0UG9zMyA9PT0gMCAmJiBmaWxsZWRCbG9jay51bm1hc2tlZFZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgLy8gZmlsbGVkIGJsb2NrIGlzIGlucHV0XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYmxvY2tTdGFydFBvcyhmaXJzdEZpbGxlZEJsb2NrSW5kZXhBdFJpZ2h0KSArIF9ibG9ja0lucHV0UG9zMztcbiAgICAgICAgICB9XG4gICAgICAgIH0gLy8gPC1cbiAgICAgICAgLy8gZmluZCB0aGlzIHZhcnNcblxuXG4gICAgICAgIHZhciBmaXJzdEZpbGxlZElucHV0QmxvY2tJbmRleCA9IC0xO1xuICAgICAgICB2YXIgZmlyc3RFbXB0eUlucHV0QmxvY2tJbmRleDsgLy8gVE9ETyBjb25zaWRlciBuZXN0ZWQgZW1wdHkgaW5wdXRzXG5cbiAgICAgICAgZm9yICh2YXIgX2JpMyA9IHNlYXJjaEJsb2NrSW5kZXggLSAxOyBfYmkzID49IDA7IC0tX2JpMykge1xuICAgICAgICAgIHZhciBfYmxvY2s0ID0gdGhpcy5fYmxvY2tzW19iaTNdO1xuXG4gICAgICAgICAgdmFyIF9ibG9ja0lucHV0UG9zNCA9IF9ibG9jazQubmVhcmVzdElucHV0UG9zKF9ibG9jazQudmFsdWUubGVuZ3RoLCBESVJFQ1RJT04uRk9SQ0VfTEVGVCk7XG5cbiAgICAgICAgICBpZiAoIV9ibG9jazQudmFsdWUgfHwgX2Jsb2NrSW5wdXRQb3M0ICE9PSAwKSBmaXJzdEVtcHR5SW5wdXRCbG9ja0luZGV4ID0gX2JpMztcblxuICAgICAgICAgIGlmIChfYmxvY2tJbnB1dFBvczQgIT09IDApIHtcbiAgICAgICAgICAgIGlmIChfYmxvY2tJbnB1dFBvczQgIT09IF9ibG9jazQudmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIC8vIGFsaWduZWQgaW5zaWRlIGJsb2NrIC0gcmV0dXJuIGltbWVkaWF0ZWx5XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLl9ibG9ja1N0YXJ0UG9zKF9iaTMpICsgX2Jsb2NrSW5wdXRQb3M0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gZm91bmQgZmlsbGVkXG4gICAgICAgICAgICAgIGZpcnN0RmlsbGVkSW5wdXRCbG9ja0luZGV4ID0gX2JpMztcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLkxFRlQpIHtcbiAgICAgICAgICAvLyB0cnkgZmluZCBmaXJzdCBlbXB0eSBpbnB1dCBiZWZvcmUgc3RhcnQgc2VhcmNoaW5nIHBvc2l0aW9uIG9ubHkgd2hlbiBub3QgZm9yY2VkXG4gICAgICAgICAgZm9yICh2YXIgX2JpNCA9IGZpcnN0RmlsbGVkSW5wdXRCbG9ja0luZGV4ICsgMTsgX2JpNCA8PSBNYXRoLm1pbihzZWFyY2hCbG9ja0luZGV4LCB0aGlzLl9ibG9ja3MubGVuZ3RoIC0gMSk7ICsrX2JpNCkge1xuICAgICAgICAgICAgdmFyIF9ibG9jazUgPSB0aGlzLl9ibG9ja3NbX2JpNF07XG5cbiAgICAgICAgICAgIHZhciBfYmxvY2tJbnB1dFBvczUgPSBfYmxvY2s1Lm5lYXJlc3RJbnB1dFBvcygwLCBESVJFQ1RJT04uTk9ORSk7XG5cbiAgICAgICAgICAgIHZhciBibG9ja0FsaWduZWRQb3MgPSB0aGlzLl9ibG9ja1N0YXJ0UG9zKF9iaTQpICsgX2Jsb2NrSW5wdXRQb3M1O1xuXG4gICAgICAgICAgICBpZiAoYmxvY2tBbGlnbmVkUG9zID4gY3Vyc29yUG9zKSBicmVhazsgLy8gaWYgYmxvY2sgaXMgbm90IGxhenkgaW5wdXRcblxuICAgICAgICAgICAgaWYgKF9ibG9ja0lucHV0UG9zNSAhPT0gX2Jsb2NrNS52YWx1ZS5sZW5ndGgpIHJldHVybiBibG9ja0FsaWduZWRQb3M7XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vIHByb2Nlc3Mgb3ZlcmZsb3dcblxuXG4gICAgICAgIGlmIChmaXJzdEZpbGxlZElucHV0QmxvY2tJbmRleCA+PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2Jsb2NrU3RhcnRQb3MoZmlyc3RGaWxsZWRJbnB1dEJsb2NrSW5kZXgpICsgdGhpcy5fYmxvY2tzW2ZpcnN0RmlsbGVkSW5wdXRCbG9ja0luZGV4XS52YWx1ZS5sZW5ndGg7XG4gICAgICAgIH0gLy8gZm9yIGxhenkgaWYgaGFzIGFsaWduZWQgbGVmdCBpbnNpZGUgZml4ZWQgYW5kIGhhcyBjYW1lIHRvIHRoZSBzdGFydCAtIHVzZSBzdGFydCBwb3NpdGlvblxuXG5cbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLkZPUkNFX0xFRlQgfHwgdGhpcy5sYXp5ICYmICF0aGlzLmV4dHJhY3RJbnB1dCgpICYmICFpc0lucHV0KHRoaXMuX2Jsb2Nrc1tzZWFyY2hCbG9ja0luZGV4XSkpIHtcbiAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmaXJzdEVtcHR5SW5wdXRCbG9ja0luZGV4ICE9IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fYmxvY2tTdGFydFBvcyhmaXJzdEVtcHR5SW5wdXRCbG9ja0luZGV4KTtcbiAgICAgICAgfSAvLyBmaW5kIGZpcnN0IGlucHV0XG5cblxuICAgICAgICBmb3IgKHZhciBfYmk1ID0gc2VhcmNoQmxvY2tJbmRleDsgX2JpNSA8IHRoaXMuX2Jsb2Nrcy5sZW5ndGg7ICsrX2JpNSkge1xuICAgICAgICAgIHZhciBfYmxvY2s2ID0gdGhpcy5fYmxvY2tzW19iaTVdO1xuXG4gICAgICAgICAgdmFyIF9ibG9ja0lucHV0UG9zNiA9IF9ibG9jazYubmVhcmVzdElucHV0UG9zKDAsIERJUkVDVElPTi5OT05FKTsgLy8gaXMgaW5wdXRcblxuXG4gICAgICAgICAgaWYgKCFfYmxvY2s2LnZhbHVlLmxlbmd0aCB8fCBfYmxvY2tJbnB1dFBvczYgIT09IF9ibG9jazYudmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYmxvY2tTdGFydFBvcyhfYmk1KSArIF9ibG9ja0lucHV0UG9zNjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cblxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLlJJR0hUIHx8IGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLkZPUkNFX1JJR0hUKSB7XG4gICAgICAgIC8vIC0+XG4gICAgICAgIC8vICBhbnl8bm90LWxlbi1hbGlnbmVkIGFuZCBmaWxsZWRcbiAgICAgICAgLy8gIGFueXxub3QtbGVuLWFsaWduZWRcbiAgICAgICAgLy8gPC1cbiAgICAgICAgLy8gIG5vdC0wLWFsaWduZWQgb3Igc3RhcnR8YW55XG4gICAgICAgIHZhciBmaXJzdElucHV0QmxvY2tBbGlnbmVkSW5kZXg7XG4gICAgICAgIHZhciBmaXJzdElucHV0QmxvY2tBbGlnbmVkUG9zO1xuXG4gICAgICAgIGZvciAodmFyIF9iaTYgPSBzZWFyY2hCbG9ja0luZGV4OyBfYmk2IDwgdGhpcy5fYmxvY2tzLmxlbmd0aDsgKytfYmk2KSB7XG4gICAgICAgICAgdmFyIF9ibG9jazcgPSB0aGlzLl9ibG9ja3NbX2JpNl07XG5cbiAgICAgICAgICB2YXIgX2Jsb2NrSW5wdXRQb3M3ID0gX2Jsb2NrNy5uZWFyZXN0SW5wdXRQb3MoMCwgRElSRUNUSU9OLk5PTkUpO1xuXG4gICAgICAgICAgaWYgKF9ibG9ja0lucHV0UG9zNyAhPT0gX2Jsb2NrNy52YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGZpcnN0SW5wdXRCbG9ja0FsaWduZWRQb3MgPSB0aGlzLl9ibG9ja1N0YXJ0UG9zKF9iaTYpICsgX2Jsb2NrSW5wdXRQb3M3O1xuICAgICAgICAgICAgZmlyc3RJbnB1dEJsb2NrQWxpZ25lZEluZGV4ID0gX2JpNjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmaXJzdElucHV0QmxvY2tBbGlnbmVkSW5kZXggIT0gbnVsbCAmJiBmaXJzdElucHV0QmxvY2tBbGlnbmVkUG9zICE9IG51bGwpIHtcbiAgICAgICAgICBmb3IgKHZhciBfYmk3ID0gZmlyc3RJbnB1dEJsb2NrQWxpZ25lZEluZGV4OyBfYmk3IDwgdGhpcy5fYmxvY2tzLmxlbmd0aDsgKytfYmk3KSB7XG4gICAgICAgICAgICB2YXIgX2Jsb2NrOCA9IHRoaXMuX2Jsb2Nrc1tfYmk3XTtcblxuICAgICAgICAgICAgdmFyIF9ibG9ja0lucHV0UG9zOCA9IF9ibG9jazgubmVhcmVzdElucHV0UG9zKDAsIERJUkVDVElPTi5GT1JDRV9SSUdIVCk7XG5cbiAgICAgICAgICAgIGlmIChfYmxvY2tJbnB1dFBvczggIT09IF9ibG9jazgudmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLl9ibG9ja1N0YXJ0UG9zKF9iaTcpICsgX2Jsb2NrSW5wdXRQb3M4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBkaXJlY3Rpb24gPT09IERJUkVDVElPTi5GT1JDRV9SSUdIVCA/IHRoaXMudmFsdWUubGVuZ3RoIDogZmlyc3RJbnB1dEJsb2NrQWxpZ25lZFBvcztcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIF9iaTggPSBNYXRoLm1pbihzZWFyY2hCbG9ja0luZGV4LCB0aGlzLl9ibG9ja3MubGVuZ3RoIC0gMSk7IF9iaTggPj0gMDsgLS1fYmk4KSB7XG4gICAgICAgICAgdmFyIF9ibG9jazkgPSB0aGlzLl9ibG9ja3NbX2JpOF07XG5cbiAgICAgICAgICB2YXIgX2Jsb2NrSW5wdXRQb3M5ID0gX2Jsb2NrOS5uZWFyZXN0SW5wdXRQb3MoX2Jsb2NrOS52YWx1ZS5sZW5ndGgsIERJUkVDVElPTi5MRUZUKTtcblxuICAgICAgICAgIGlmIChfYmxvY2tJbnB1dFBvczkgIT09IDApIHtcbiAgICAgICAgICAgIHZhciBhbGlnbmVkUG9zID0gdGhpcy5fYmxvY2tTdGFydFBvcyhfYmk4KSArIF9ibG9ja0lucHV0UG9zOTtcblxuICAgICAgICAgICAgaWYgKGFsaWduZWRQb3MgPj0gY3Vyc29yUG9zKSByZXR1cm4gYWxpZ25lZFBvcztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gY3Vyc29yUG9zO1xuICAgIH1cbiAgICAvKiogR2V0IGJsb2NrIGJ5IG5hbWUgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm1hc2tlZEJsb2NrXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1hc2tlZEJsb2NrKG5hbWUpIHtcbiAgICAgIHJldHVybiB0aGlzLm1hc2tlZEJsb2NrcyhuYW1lKVswXTtcbiAgICB9XG4gICAgLyoqIEdldCBhbGwgYmxvY2tzIGJ5IG5hbWUgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm1hc2tlZEJsb2Nrc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtYXNrZWRCbG9ja3MobmFtZSkge1xuICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgIHZhciBpbmRpY2VzID0gdGhpcy5fbWFza2VkQmxvY2tzW25hbWVdO1xuICAgICAgaWYgKCFpbmRpY2VzKSByZXR1cm4gW107XG4gICAgICByZXR1cm4gaW5kaWNlcy5tYXAoZnVuY3Rpb24gKGdpKSB7XG4gICAgICAgIHJldHVybiBfdGhpczQuX2Jsb2Nrc1tnaV07XG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTWFza2VkUGF0dGVybjtcbn0oTWFza2VkKTtcbk1hc2tlZFBhdHRlcm4uREVGQVVMVFMgPSB7XG4gIGxhenk6IHRydWUsXG4gIHBsYWNlaG9sZGVyQ2hhcjogJ18nXG59O1xuTWFza2VkUGF0dGVybi5TVE9QX0NIQVIgPSAnYCc7XG5NYXNrZWRQYXR0ZXJuLkVTQ0FQRV9DSEFSID0gJ1xcXFwnO1xuTWFza2VkUGF0dGVybi5JbnB1dERlZmluaXRpb24gPSBQYXR0ZXJuSW5wdXREZWZpbml0aW9uO1xuTWFza2VkUGF0dGVybi5GaXhlZERlZmluaXRpb24gPSBQYXR0ZXJuRml4ZWREZWZpbml0aW9uO1xuXG5mdW5jdGlvbiBpc0lucHV0KGJsb2NrKSB7XG4gIGlmICghYmxvY2spIHJldHVybiBmYWxzZTtcbiAgdmFyIHZhbHVlID0gYmxvY2sudmFsdWU7XG4gIHJldHVybiAhdmFsdWUgfHwgYmxvY2submVhcmVzdElucHV0UG9zKDAsIERJUkVDVElPTi5OT05FKSAhPT0gdmFsdWUubGVuZ3RoO1xufVxuXG5JTWFzay5NYXNrZWRQYXR0ZXJuID0gTWFza2VkUGF0dGVybjtcblxuZXhwb3J0IGRlZmF1bHQgTWFza2VkUGF0dGVybjtcbiIsImltcG9ydCB7IF8gYXMgX2NyZWF0ZUNsYXNzLCBhIGFzIF9jbGFzc0NhbGxDaGVjaywgYiBhcyBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgfSBmcm9tICcuLi8uLi9fcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzLTZjY2IxZjY0LmpzJztcbmltcG9ydCBDaGFuZ2VEZXRhaWxzIGZyb20gJy4uLy4uL2NvcmUvY2hhbmdlLWRldGFpbHMuanMnO1xuaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tICcuLi8uLi9jb3JlL3V0aWxzLmpzJztcbmltcG9ydCBDb250aW51b3VzVGFpbERldGFpbHMgZnJvbSAnLi4vLi4vY29yZS9jb250aW51b3VzLXRhaWwtZGV0YWlscy5qcyc7XG5pbXBvcnQgSU1hc2sgZnJvbSAnLi4vLi4vY29yZS9ob2xkZXIuanMnO1xuXG52YXIgQ2h1bmtzVGFpbERldGFpbHMgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAvKiogKi9cbiAgZnVuY3Rpb24gQ2h1bmtzVGFpbERldGFpbHMoKSB7XG4gICAgdmFyIGNodW5rcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogW107XG4gICAgdmFyIGZyb20gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDA7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2h1bmtzVGFpbERldGFpbHMpO1xuXG4gICAgdGhpcy5jaHVua3MgPSBjaHVua3M7XG4gICAgdGhpcy5mcm9tID0gZnJvbTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhDaHVua3NUYWlsRGV0YWlscywgW3tcbiAgICBrZXk6IFwidG9TdHJpbmdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jaHVua3MubWFwKFN0cmluZykuam9pbignJyk7XG4gICAgfSAvLyAkRmxvd0ZpeE1lIG5vIGlkZWFzXG5cbiAgfSwge1xuICAgIGtleTogXCJleHRlbmRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZXh0ZW5kKHRhaWxDaHVuaykge1xuICAgICAgaWYgKCFTdHJpbmcodGFpbENodW5rKSkgcmV0dXJuO1xuICAgICAgaWYgKGlzU3RyaW5nKHRhaWxDaHVuaykpIHRhaWxDaHVuayA9IG5ldyBDb250aW51b3VzVGFpbERldGFpbHMoU3RyaW5nKHRhaWxDaHVuaykpO1xuICAgICAgdmFyIGxhc3RDaHVuayA9IHRoaXMuY2h1bmtzW3RoaXMuY2h1bmtzLmxlbmd0aCAtIDFdO1xuICAgICAgdmFyIGV4dGVuZExhc3QgPSBsYXN0Q2h1bmsgJiYgKCAvLyBpZiBzdG9wcyBhcmUgc2FtZSBvciB0YWlsIGhhcyBubyBzdG9wXG4gICAgICBsYXN0Q2h1bmsuc3RvcCA9PT0gdGFpbENodW5rLnN0b3AgfHwgdGFpbENodW5rLnN0b3AgPT0gbnVsbCkgJiYgLy8gaWYgdGFpbCBjaHVuayBnb2VzIGp1c3QgYWZ0ZXIgbGFzdCBjaHVua1xuICAgICAgdGFpbENodW5rLmZyb20gPT09IGxhc3RDaHVuay5mcm9tICsgbGFzdENodW5rLnRvU3RyaW5nKCkubGVuZ3RoO1xuXG4gICAgICBpZiAodGFpbENodW5rIGluc3RhbmNlb2YgQ29udGludW91c1RhaWxEZXRhaWxzKSB7XG4gICAgICAgIC8vIGNoZWNrIHRoZSBhYmlsaXR5IHRvIGV4dGVuZCBwcmV2aW91cyBjaHVua1xuICAgICAgICBpZiAoZXh0ZW5kTGFzdCkge1xuICAgICAgICAgIC8vIGV4dGVuZCBwcmV2aW91cyBjaHVua1xuICAgICAgICAgIGxhc3RDaHVuay5leHRlbmQodGFpbENodW5rLnRvU3RyaW5nKCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGFwcGVuZCBuZXcgY2h1bmtcbiAgICAgICAgICB0aGlzLmNodW5rcy5wdXNoKHRhaWxDaHVuayk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGFpbENodW5rIGluc3RhbmNlb2YgQ2h1bmtzVGFpbERldGFpbHMpIHtcbiAgICAgICAgaWYgKHRhaWxDaHVuay5zdG9wID09IG51bGwpIHtcbiAgICAgICAgICAvLyB1bndyYXAgZmxvYXRpbmcgY2h1bmtzIHRvIHBhcmVudCwga2VlcGluZyBgZnJvbWAgcG9zXG4gICAgICAgICAgdmFyIGZpcnN0VGFpbENodW5rO1xuXG4gICAgICAgICAgd2hpbGUgKHRhaWxDaHVuay5jaHVua3MubGVuZ3RoICYmIHRhaWxDaHVuay5jaHVua3NbMF0uc3RvcCA9PSBudWxsKSB7XG4gICAgICAgICAgICBmaXJzdFRhaWxDaHVuayA9IHRhaWxDaHVuay5jaHVua3Muc2hpZnQoKTtcbiAgICAgICAgICAgIGZpcnN0VGFpbENodW5rLmZyb20gKz0gdGFpbENodW5rLmZyb207XG4gICAgICAgICAgICB0aGlzLmV4dGVuZChmaXJzdFRhaWxDaHVuayk7XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vIGlmIHRhaWwgY2h1bmsgc3RpbGwgaGFzIHZhbHVlXG5cblxuICAgICAgICBpZiAodGFpbENodW5rLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgICAvLyBpZiBjaHVua3MgY29udGFpbnMgc3RvcHMsIHRoZW4gcG9wdXAgc3RvcCB0byBjb250YWluZXJcbiAgICAgICAgICB0YWlsQ2h1bmsuc3RvcCA9IHRhaWxDaHVuay5ibG9ja0luZGV4O1xuICAgICAgICAgIHRoaXMuY2h1bmtzLnB1c2godGFpbENodW5rKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJhcHBlbmRUb1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhcHBlbmRUbyhtYXNrZWQpIHtcbiAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgIGlmICghKG1hc2tlZCBpbnN0YW5jZW9mIElNYXNrLk1hc2tlZFBhdHRlcm4pKSB7XG4gICAgICAgIHZhciB0YWlsID0gbmV3IENvbnRpbnVvdXNUYWlsRGV0YWlscyh0aGlzLnRvU3RyaW5nKCkpO1xuICAgICAgICByZXR1cm4gdGFpbC5hcHBlbmRUbyhtYXNrZWQpO1xuICAgICAgfVxuXG4gICAgICB2YXIgZGV0YWlscyA9IG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG5cbiAgICAgIGZvciAodmFyIGNpID0gMDsgY2kgPCB0aGlzLmNodW5rcy5sZW5ndGggJiYgIWRldGFpbHMuc2tpcDsgKytjaSkge1xuICAgICAgICB2YXIgY2h1bmsgPSB0aGlzLmNodW5rc1tjaV07XG5cbiAgICAgICAgdmFyIGxhc3RCbG9ja0l0ZXIgPSBtYXNrZWQuX21hcFBvc1RvQmxvY2sobWFza2VkLnZhbHVlLmxlbmd0aCk7XG5cbiAgICAgICAgdmFyIHN0b3AgPSBjaHVuay5zdG9wO1xuICAgICAgICB2YXIgY2h1bmtCbG9jayA9IHZvaWQgMDtcblxuICAgICAgICBpZiAoc3RvcCAhPSBudWxsICYmICggLy8gaWYgYmxvY2sgbm90IGZvdW5kIG9yIHN0b3AgaXMgYmVoaW5kIGxhc3RCbG9ja1xuICAgICAgICAhbGFzdEJsb2NrSXRlciB8fCBsYXN0QmxvY2tJdGVyLmluZGV4IDw9IHN0b3ApKSB7XG4gICAgICAgICAgaWYgKGNodW5rIGluc3RhbmNlb2YgQ2h1bmtzVGFpbERldGFpbHMgfHwgLy8gZm9yIGNvbnRpbnVvdXMgYmxvY2sgYWxzbyBjaGVjayBpZiBzdG9wIGlzIGV4aXN0XG4gICAgICAgICAgbWFza2VkLl9zdG9wcy5pbmRleE9mKHN0b3ApID49IDApIHtcbiAgICAgICAgICAgIGRldGFpbHMuYWdncmVnYXRlKG1hc2tlZC5fYXBwZW5kUGxhY2Vob2xkZXIoc3RvcCkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNodW5rQmxvY2sgPSBjaHVuayBpbnN0YW5jZW9mIENodW5rc1RhaWxEZXRhaWxzICYmIG1hc2tlZC5fYmxvY2tzW3N0b3BdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNodW5rQmxvY2spIHtcbiAgICAgICAgICB2YXIgdGFpbERldGFpbHMgPSBjaHVua0Jsb2NrLmFwcGVuZFRhaWwoY2h1bmspO1xuICAgICAgICAgIHRhaWxEZXRhaWxzLnNraXAgPSBmYWxzZTsgLy8gYWx3YXlzIGlnbm9yZSBza2lwLCBpdCB3aWxsIGJlIHNldCBvbiBsYXN0XG5cbiAgICAgICAgICBkZXRhaWxzLmFnZ3JlZ2F0ZSh0YWlsRGV0YWlscyk7XG4gICAgICAgICAgbWFza2VkLl92YWx1ZSArPSB0YWlsRGV0YWlscy5pbnNlcnRlZDsgLy8gZ2V0IG5vdCBpbnNlcnRlZCBjaGFyc1xuXG4gICAgICAgICAgdmFyIHJlbWFpbkNoYXJzID0gY2h1bmsudG9TdHJpbmcoKS5zbGljZSh0YWlsRGV0YWlscy5yYXdJbnNlcnRlZC5sZW5ndGgpO1xuICAgICAgICAgIGlmIChyZW1haW5DaGFycykgZGV0YWlscy5hZ2dyZWdhdGUobWFza2VkLmFwcGVuZChyZW1haW5DaGFycywge1xuICAgICAgICAgICAgdGFpbDogdHJ1ZVxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkZXRhaWxzLmFnZ3JlZ2F0ZShtYXNrZWQuYXBwZW5kKGNodW5rLnRvU3RyaW5nKCksIHtcbiAgICAgICAgICAgIHRhaWw6IHRydWVcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBkZXRhaWxzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzdGF0ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY2h1bmtzOiB0aGlzLmNodW5rcy5tYXAoZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICByZXR1cm4gYy5zdGF0ZTtcbiAgICAgICAgfSksXG4gICAgICAgIGZyb206IHRoaXMuZnJvbSxcbiAgICAgICAgc3RvcDogdGhpcy5zdG9wLFxuICAgICAgICBibG9ja0luZGV4OiB0aGlzLmJsb2NrSW5kZXhcbiAgICAgIH07XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChzdGF0ZSkge1xuICAgICAgdmFyIGNodW5rcyA9IHN0YXRlLmNodW5rcyxcbiAgICAgICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzdGF0ZSwgW1wiY2h1bmtzXCJdKTtcblxuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBwcm9wcyk7XG4gICAgICB0aGlzLmNodW5rcyA9IGNodW5rcy5tYXAoZnVuY3Rpb24gKGNzdGF0ZSkge1xuICAgICAgICB2YXIgY2h1bmsgPSBcImNodW5rc1wiIGluIGNzdGF0ZSA/IG5ldyBDaHVua3NUYWlsRGV0YWlscygpIDogbmV3IENvbnRpbnVvdXNUYWlsRGV0YWlscygpOyAvLyAkRmxvd0ZpeE1lIGFscmVhZHkgY2hlY2tlZCBhYm92ZVxuXG4gICAgICAgIGNodW5rLnN0YXRlID0gY3N0YXRlO1xuICAgICAgICByZXR1cm4gY2h1bms7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2hpZnRCZWZvcmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2hpZnRCZWZvcmUocG9zKSB7XG4gICAgICBpZiAodGhpcy5mcm9tID49IHBvcyB8fCAhdGhpcy5jaHVua3MubGVuZ3RoKSByZXR1cm4gJyc7XG4gICAgICB2YXIgY2h1bmtTaGlmdFBvcyA9IHBvcyAtIHRoaXMuZnJvbTtcbiAgICAgIHZhciBjaSA9IDA7XG5cbiAgICAgIHdoaWxlIChjaSA8IHRoaXMuY2h1bmtzLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2h1bmsgPSB0aGlzLmNodW5rc1tjaV07XG4gICAgICAgIHZhciBzaGlmdENoYXIgPSBjaHVuay5zaGlmdEJlZm9yZShjaHVua1NoaWZ0UG9zKTtcblxuICAgICAgICBpZiAoY2h1bmsudG9TdHJpbmcoKSkge1xuICAgICAgICAgIC8vIGNodW5rIHN0aWxsIGNvbnRhaW5zIHZhbHVlXG4gICAgICAgICAgLy8gYnV0IG5vdCBzaGlmdGVkIC0gbWVhbnMgbm8gbW9yZSBhdmFpbGFibGUgY2hhcnMgdG8gc2hpZnRcbiAgICAgICAgICBpZiAoIXNoaWZ0Q2hhcikgYnJlYWs7XG4gICAgICAgICAgKytjaTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBjbGVhbiBpZiBjaHVuayBoYXMgbm8gdmFsdWVcbiAgICAgICAgICB0aGlzLmNodW5rcy5zcGxpY2UoY2ksIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNoaWZ0Q2hhcikgcmV0dXJuIHNoaWZ0Q2hhcjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBDaHVua3NUYWlsRGV0YWlscztcbn0oKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2h1bmtzVGFpbERldGFpbHM7XG4iLCJpbXBvcnQgeyBfIGFzIF9jcmVhdGVDbGFzcywgYSBhcyBfY2xhc3NDYWxsQ2hlY2sgfSBmcm9tICcuLi8uLi9fcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzLTZjY2IxZjY0LmpzJztcbmltcG9ydCBDaGFuZ2VEZXRhaWxzIGZyb20gJy4uLy4uL2NvcmUvY2hhbmdlLWRldGFpbHMuanMnO1xuaW1wb3J0IHsgRElSRUNUSU9OLCBpc1N0cmluZyB9IGZyb20gJy4uLy4uL2NvcmUvdXRpbHMuanMnO1xuaW1wb3J0IENvbnRpbnVvdXNUYWlsRGV0YWlscyBmcm9tICcuLi8uLi9jb3JlL2NvbnRpbnVvdXMtdGFpbC1kZXRhaWxzLmpzJztcblxudmFyIFBhdHRlcm5GaXhlZERlZmluaXRpb24gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAvKiogKi9cblxuICAvKiogKi9cblxuICAvKiogKi9cblxuICAvKiogKi9cbiAgZnVuY3Rpb24gUGF0dGVybkZpeGVkRGVmaW5pdGlvbihvcHRzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBhdHRlcm5GaXhlZERlZmluaXRpb24pO1xuXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBvcHRzKTtcbiAgICB0aGlzLl92YWx1ZSA9ICcnO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFBhdHRlcm5GaXhlZERlZmluaXRpb24sIFt7XG4gICAga2V5OiBcInZhbHVlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInVubWFza2VkVmFsdWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzVW5tYXNraW5nID8gdGhpcy52YWx1ZSA6ICcnO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZXNldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXNldCgpIHtcbiAgICAgIHRoaXMuX2lzUmF3SW5wdXQgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3ZhbHVlID0gJyc7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbW92ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICB2YXIgZnJvbVBvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogMDtcbiAgICAgIHZhciB0b1BvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdGhpcy5fdmFsdWUubGVuZ3RoO1xuICAgICAgdGhpcy5fdmFsdWUgPSB0aGlzLl92YWx1ZS5zbGljZSgwLCBmcm9tUG9zKSArIHRoaXMuX3ZhbHVlLnNsaWNlKHRvUG9zKTtcbiAgICAgIGlmICghdGhpcy5fdmFsdWUpIHRoaXMuX2lzUmF3SW5wdXQgPSBmYWxzZTtcbiAgICAgIHJldHVybiBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJuZWFyZXN0SW5wdXRQb3NcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbmVhcmVzdElucHV0UG9zKGN1cnNvclBvcykge1xuICAgICAgdmFyIGRpcmVjdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogRElSRUNUSU9OLk5PTkU7XG4gICAgICB2YXIgbWluUG9zID0gMDtcbiAgICAgIHZhciBtYXhQb3MgPSB0aGlzLl92YWx1ZS5sZW5ndGg7XG5cbiAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICAgIGNhc2UgRElSRUNUSU9OLkxFRlQ6XG4gICAgICAgIGNhc2UgRElSRUNUSU9OLkZPUkNFX0xFRlQ6XG4gICAgICAgICAgcmV0dXJuIG1pblBvcztcblxuICAgICAgICBjYXNlIERJUkVDVElPTi5OT05FOlxuICAgICAgICBjYXNlIERJUkVDVElPTi5SSUdIVDpcbiAgICAgICAgY2FzZSBESVJFQ1RJT04uRk9SQ0VfUklHSFQ6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIG1heFBvcztcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZXh0cmFjdElucHV0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGV4dHJhY3RJbnB1dCgpIHtcbiAgICAgIHZhciBmcm9tUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xuICAgICAgdmFyIHRvUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0aGlzLl92YWx1ZS5sZW5ndGg7XG4gICAgICB2YXIgZmxhZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICAgICAgcmV0dXJuIGZsYWdzLnJhdyAmJiB0aGlzLl9pc1Jhd0lucHV0ICYmIHRoaXMuX3ZhbHVlLnNsaWNlKGZyb21Qb3MsIHRvUG9zKSB8fCAnJztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaXNDb21wbGV0ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9hcHBlbmRDaGFyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9hcHBlbmRDaGFyKHN0cikge1xuICAgICAgdmFyIGZsYWdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICAgIHZhciBkZXRhaWxzID0gbmV3IENoYW5nZURldGFpbHMoKTtcbiAgICAgIGlmICh0aGlzLl92YWx1ZSkgcmV0dXJuIGRldGFpbHM7XG4gICAgICB2YXIgYXBwZW5kZWQgPSB0aGlzLmNoYXIgPT09IHN0clswXTtcbiAgICAgIHZhciBpc1Jlc29sdmVkID0gYXBwZW5kZWQgJiYgKHRoaXMuaXNVbm1hc2tpbmcgfHwgZmxhZ3MuaW5wdXQgfHwgZmxhZ3MucmF3KSAmJiAhZmxhZ3MudGFpbDtcbiAgICAgIGlmIChpc1Jlc29sdmVkKSBkZXRhaWxzLnJhd0luc2VydGVkID0gdGhpcy5jaGFyO1xuICAgICAgdGhpcy5fdmFsdWUgPSBkZXRhaWxzLmluc2VydGVkID0gdGhpcy5jaGFyO1xuICAgICAgdGhpcy5faXNSYXdJbnB1dCA9IGlzUmVzb2x2ZWQgJiYgKGZsYWdzLnJhdyB8fCBmbGFncy5pbnB1dCk7XG4gICAgICByZXR1cm4gZGV0YWlscztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2FwcGVuZFBsYWNlaG9sZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9hcHBlbmRQbGFjZWhvbGRlcigpIHtcbiAgICAgIHZhciBkZXRhaWxzID0gbmV3IENoYW5nZURldGFpbHMoKTtcbiAgICAgIGlmICh0aGlzLl92YWx1ZSkgcmV0dXJuIGRldGFpbHM7XG4gICAgICB0aGlzLl92YWx1ZSA9IGRldGFpbHMuaW5zZXJ0ZWQgPSB0aGlzLmNoYXI7XG4gICAgICByZXR1cm4gZGV0YWlscztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZXh0cmFjdFRhaWxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZXh0cmFjdFRhaWwoKSB7XG4gICAgICBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRoaXMudmFsdWUubGVuZ3RoO1xuICAgICAgcmV0dXJuIG5ldyBDb250aW51b3VzVGFpbERldGFpbHMoJycpO1xuICAgIH0gLy8gJEZsb3dGaXhNZSBubyBpZGVhc1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYXBwZW5kVGFpbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhcHBlbmRUYWlsKHRhaWwpIHtcbiAgICAgIGlmIChpc1N0cmluZyh0YWlsKSkgdGFpbCA9IG5ldyBDb250aW51b3VzVGFpbERldGFpbHMoU3RyaW5nKHRhaWwpKTtcbiAgICAgIHJldHVybiB0YWlsLmFwcGVuZFRvKHRoaXMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJhcHBlbmRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYXBwZW5kKHN0ciwgZmxhZ3MsIHRhaWwpIHtcbiAgICAgIHZhciBkZXRhaWxzID0gdGhpcy5fYXBwZW5kQ2hhcihzdHIsIGZsYWdzKTtcblxuICAgICAgaWYgKHRhaWwgIT0gbnVsbCkge1xuICAgICAgICBkZXRhaWxzLnRhaWxTaGlmdCArPSB0aGlzLmFwcGVuZFRhaWwodGFpbCkudGFpbFNoaWZ0O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGV0YWlscztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZG9Db21taXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZG9Db21taXQoKSB7fVxuICB9LCB7XG4gICAga2V5OiBcInN0YXRlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBfdmFsdWU6IHRoaXMuX3ZhbHVlLFxuICAgICAgICBfaXNSYXdJbnB1dDogdGhpcy5faXNSYXdJbnB1dFxuICAgICAgfTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHN0YXRlKSB7XG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMsIHN0YXRlKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUGF0dGVybkZpeGVkRGVmaW5pdGlvbjtcbn0oKTtcblxuZXhwb3J0IGRlZmF1bHQgUGF0dGVybkZpeGVkRGVmaW5pdGlvbjtcbiIsImltcG9ydCB7IF8gYXMgX2NyZWF0ZUNsYXNzLCBhIGFzIF9jbGFzc0NhbGxDaGVjaywgYiBhcyBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgfSBmcm9tICcuLi8uLi9fcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzLTZjY2IxZjY0LmpzJztcbmltcG9ydCBjcmVhdGVNYXNrIGZyb20gJy4uL2ZhY3RvcnkuanMnO1xuaW1wb3J0IENoYW5nZURldGFpbHMgZnJvbSAnLi4vLi4vY29yZS9jaGFuZ2UtZGV0YWlscy5qcyc7XG5pbXBvcnQgeyBESVJFQ1RJT04gfSBmcm9tICcuLi8uLi9jb3JlL3V0aWxzLmpzJztcbmltcG9ydCAnLi4vLi4vY29yZS9ob2xkZXIuanMnO1xuXG52YXIgREVGQVVMVF9JTlBVVF9ERUZJTklUSU9OUyA9IHtcbiAgJzAnOiAvXFxkLyxcbiAgJ2EnOiAvW1xcdTAwNDEtXFx1MDA1QVxcdTAwNjEtXFx1MDA3QVxcdTAwQUFcXHUwMEI1XFx1MDBCQVxcdTAwQzAtXFx1MDBENlxcdTAwRDgtXFx1MDBGNlxcdTAwRjgtXFx1MDJDMVxcdTAyQzYtXFx1MDJEMVxcdTAyRTAtXFx1MDJFNFxcdTAyRUNcXHUwMkVFXFx1MDM3MC1cXHUwMzc0XFx1MDM3NlxcdTAzNzdcXHUwMzdBLVxcdTAzN0RcXHUwMzg2XFx1MDM4OC1cXHUwMzhBXFx1MDM4Q1xcdTAzOEUtXFx1MDNBMVxcdTAzQTMtXFx1MDNGNVxcdTAzRjctXFx1MDQ4MVxcdTA0OEEtXFx1MDUyN1xcdTA1MzEtXFx1MDU1NlxcdTA1NTlcXHUwNTYxLVxcdTA1ODdcXHUwNUQwLVxcdTA1RUFcXHUwNUYwLVxcdTA1RjJcXHUwNjIwLVxcdTA2NEFcXHUwNjZFXFx1MDY2RlxcdTA2NzEtXFx1MDZEM1xcdTA2RDVcXHUwNkU1XFx1MDZFNlxcdTA2RUVcXHUwNkVGXFx1MDZGQS1cXHUwNkZDXFx1MDZGRlxcdTA3MTBcXHUwNzEyLVxcdTA3MkZcXHUwNzRELVxcdTA3QTVcXHUwN0IxXFx1MDdDQS1cXHUwN0VBXFx1MDdGNFxcdTA3RjVcXHUwN0ZBXFx1MDgwMC1cXHUwODE1XFx1MDgxQVxcdTA4MjRcXHUwODI4XFx1MDg0MC1cXHUwODU4XFx1MDhBMFxcdTA4QTItXFx1MDhBQ1xcdTA5MDQtXFx1MDkzOVxcdTA5M0RcXHUwOTUwXFx1MDk1OC1cXHUwOTYxXFx1MDk3MS1cXHUwOTc3XFx1MDk3OS1cXHUwOTdGXFx1MDk4NS1cXHUwOThDXFx1MDk4RlxcdTA5OTBcXHUwOTkzLVxcdTA5QThcXHUwOUFBLVxcdTA5QjBcXHUwOUIyXFx1MDlCNi1cXHUwOUI5XFx1MDlCRFxcdTA5Q0VcXHUwOURDXFx1MDlERFxcdTA5REYtXFx1MDlFMVxcdTA5RjBcXHUwOUYxXFx1MEEwNS1cXHUwQTBBXFx1MEEwRlxcdTBBMTBcXHUwQTEzLVxcdTBBMjhcXHUwQTJBLVxcdTBBMzBcXHUwQTMyXFx1MEEzM1xcdTBBMzVcXHUwQTM2XFx1MEEzOFxcdTBBMzlcXHUwQTU5LVxcdTBBNUNcXHUwQTVFXFx1MEE3Mi1cXHUwQTc0XFx1MEE4NS1cXHUwQThEXFx1MEE4Ri1cXHUwQTkxXFx1MEE5My1cXHUwQUE4XFx1MEFBQS1cXHUwQUIwXFx1MEFCMlxcdTBBQjNcXHUwQUI1LVxcdTBBQjlcXHUwQUJEXFx1MEFEMFxcdTBBRTBcXHUwQUUxXFx1MEIwNS1cXHUwQjBDXFx1MEIwRlxcdTBCMTBcXHUwQjEzLVxcdTBCMjhcXHUwQjJBLVxcdTBCMzBcXHUwQjMyXFx1MEIzM1xcdTBCMzUtXFx1MEIzOVxcdTBCM0RcXHUwQjVDXFx1MEI1RFxcdTBCNUYtXFx1MEI2MVxcdTBCNzFcXHUwQjgzXFx1MEI4NS1cXHUwQjhBXFx1MEI4RS1cXHUwQjkwXFx1MEI5Mi1cXHUwQjk1XFx1MEI5OVxcdTBCOUFcXHUwQjlDXFx1MEI5RVxcdTBCOUZcXHUwQkEzXFx1MEJBNFxcdTBCQTgtXFx1MEJBQVxcdTBCQUUtXFx1MEJCOVxcdTBCRDBcXHUwQzA1LVxcdTBDMENcXHUwQzBFLVxcdTBDMTBcXHUwQzEyLVxcdTBDMjhcXHUwQzJBLVxcdTBDMzNcXHUwQzM1LVxcdTBDMzlcXHUwQzNEXFx1MEM1OFxcdTBDNTlcXHUwQzYwXFx1MEM2MVxcdTBDODUtXFx1MEM4Q1xcdTBDOEUtXFx1MEM5MFxcdTBDOTItXFx1MENBOFxcdTBDQUEtXFx1MENCM1xcdTBDQjUtXFx1MENCOVxcdTBDQkRcXHUwQ0RFXFx1MENFMFxcdTBDRTFcXHUwQ0YxXFx1MENGMlxcdTBEMDUtXFx1MEQwQ1xcdTBEMEUtXFx1MEQxMFxcdTBEMTItXFx1MEQzQVxcdTBEM0RcXHUwRDRFXFx1MEQ2MFxcdTBENjFcXHUwRDdBLVxcdTBEN0ZcXHUwRDg1LVxcdTBEOTZcXHUwRDlBLVxcdTBEQjFcXHUwREIzLVxcdTBEQkJcXHUwREJEXFx1MERDMC1cXHUwREM2XFx1MEUwMS1cXHUwRTMwXFx1MEUzMlxcdTBFMzNcXHUwRTQwLVxcdTBFNDZcXHUwRTgxXFx1MEU4MlxcdTBFODRcXHUwRTg3XFx1MEU4OFxcdTBFOEFcXHUwRThEXFx1MEU5NC1cXHUwRTk3XFx1MEU5OS1cXHUwRTlGXFx1MEVBMS1cXHUwRUEzXFx1MEVBNVxcdTBFQTdcXHUwRUFBXFx1MEVBQlxcdTBFQUQtXFx1MEVCMFxcdTBFQjJcXHUwRUIzXFx1MEVCRFxcdTBFQzAtXFx1MEVDNFxcdTBFQzZcXHUwRURDLVxcdTBFREZcXHUwRjAwXFx1MEY0MC1cXHUwRjQ3XFx1MEY0OS1cXHUwRjZDXFx1MEY4OC1cXHUwRjhDXFx1MTAwMC1cXHUxMDJBXFx1MTAzRlxcdTEwNTAtXFx1MTA1NVxcdTEwNUEtXFx1MTA1RFxcdTEwNjFcXHUxMDY1XFx1MTA2NlxcdTEwNkUtXFx1MTA3MFxcdTEwNzUtXFx1MTA4MVxcdTEwOEVcXHUxMEEwLVxcdTEwQzVcXHUxMEM3XFx1MTBDRFxcdTEwRDAtXFx1MTBGQVxcdTEwRkMtXFx1MTI0OFxcdTEyNEEtXFx1MTI0RFxcdTEyNTAtXFx1MTI1NlxcdTEyNThcXHUxMjVBLVxcdTEyNURcXHUxMjYwLVxcdTEyODhcXHUxMjhBLVxcdTEyOERcXHUxMjkwLVxcdTEyQjBcXHUxMkIyLVxcdTEyQjVcXHUxMkI4LVxcdTEyQkVcXHUxMkMwXFx1MTJDMi1cXHUxMkM1XFx1MTJDOC1cXHUxMkQ2XFx1MTJEOC1cXHUxMzEwXFx1MTMxMi1cXHUxMzE1XFx1MTMxOC1cXHUxMzVBXFx1MTM4MC1cXHUxMzhGXFx1MTNBMC1cXHUxM0Y0XFx1MTQwMS1cXHUxNjZDXFx1MTY2Ri1cXHUxNjdGXFx1MTY4MS1cXHUxNjlBXFx1MTZBMC1cXHUxNkVBXFx1MTcwMC1cXHUxNzBDXFx1MTcwRS1cXHUxNzExXFx1MTcyMC1cXHUxNzMxXFx1MTc0MC1cXHUxNzUxXFx1MTc2MC1cXHUxNzZDXFx1MTc2RS1cXHUxNzcwXFx1MTc4MC1cXHUxN0IzXFx1MTdEN1xcdTE3RENcXHUxODIwLVxcdTE4NzdcXHUxODgwLVxcdTE4QThcXHUxOEFBXFx1MThCMC1cXHUxOEY1XFx1MTkwMC1cXHUxOTFDXFx1MTk1MC1cXHUxOTZEXFx1MTk3MC1cXHUxOTc0XFx1MTk4MC1cXHUxOUFCXFx1MTlDMS1cXHUxOUM3XFx1MUEwMC1cXHUxQTE2XFx1MUEyMC1cXHUxQTU0XFx1MUFBN1xcdTFCMDUtXFx1MUIzM1xcdTFCNDUtXFx1MUI0QlxcdTFCODMtXFx1MUJBMFxcdTFCQUVcXHUxQkFGXFx1MUJCQS1cXHUxQkU1XFx1MUMwMC1cXHUxQzIzXFx1MUM0RC1cXHUxQzRGXFx1MUM1QS1cXHUxQzdEXFx1MUNFOS1cXHUxQ0VDXFx1MUNFRS1cXHUxQ0YxXFx1MUNGNVxcdTFDRjZcXHUxRDAwLVxcdTFEQkZcXHUxRTAwLVxcdTFGMTVcXHUxRjE4LVxcdTFGMURcXHUxRjIwLVxcdTFGNDVcXHUxRjQ4LVxcdTFGNERcXHUxRjUwLVxcdTFGNTdcXHUxRjU5XFx1MUY1QlxcdTFGNURcXHUxRjVGLVxcdTFGN0RcXHUxRjgwLVxcdTFGQjRcXHUxRkI2LVxcdTFGQkNcXHUxRkJFXFx1MUZDMi1cXHUxRkM0XFx1MUZDNi1cXHUxRkNDXFx1MUZEMC1cXHUxRkQzXFx1MUZENi1cXHUxRkRCXFx1MUZFMC1cXHUxRkVDXFx1MUZGMi1cXHUxRkY0XFx1MUZGNi1cXHUxRkZDXFx1MjA3MVxcdTIwN0ZcXHUyMDkwLVxcdTIwOUNcXHUyMTAyXFx1MjEwN1xcdTIxMEEtXFx1MjExM1xcdTIxMTVcXHUyMTE5LVxcdTIxMURcXHUyMTI0XFx1MjEyNlxcdTIxMjhcXHUyMTJBLVxcdTIxMkRcXHUyMTJGLVxcdTIxMzlcXHUyMTNDLVxcdTIxM0ZcXHUyMTQ1LVxcdTIxNDlcXHUyMTRFXFx1MjE4M1xcdTIxODRcXHUyQzAwLVxcdTJDMkVcXHUyQzMwLVxcdTJDNUVcXHUyQzYwLVxcdTJDRTRcXHUyQ0VCLVxcdTJDRUVcXHUyQ0YyXFx1MkNGM1xcdTJEMDAtXFx1MkQyNVxcdTJEMjdcXHUyRDJEXFx1MkQzMC1cXHUyRDY3XFx1MkQ2RlxcdTJEODAtXFx1MkQ5NlxcdTJEQTAtXFx1MkRBNlxcdTJEQTgtXFx1MkRBRVxcdTJEQjAtXFx1MkRCNlxcdTJEQjgtXFx1MkRCRVxcdTJEQzAtXFx1MkRDNlxcdTJEQzgtXFx1MkRDRVxcdTJERDAtXFx1MkRENlxcdTJERDgtXFx1MkRERVxcdTJFMkZcXHUzMDA1XFx1MzAwNlxcdTMwMzEtXFx1MzAzNVxcdTMwM0JcXHUzMDNDXFx1MzA0MS1cXHUzMDk2XFx1MzA5RC1cXHUzMDlGXFx1MzBBMS1cXHUzMEZBXFx1MzBGQy1cXHUzMEZGXFx1MzEwNS1cXHUzMTJEXFx1MzEzMS1cXHUzMThFXFx1MzFBMC1cXHUzMUJBXFx1MzFGMC1cXHUzMUZGXFx1MzQwMC1cXHU0REI1XFx1NEUwMC1cXHU5RkNDXFx1QTAwMC1cXHVBNDhDXFx1QTREMC1cXHVBNEZEXFx1QTUwMC1cXHVBNjBDXFx1QTYxMC1cXHVBNjFGXFx1QTYyQVxcdUE2MkJcXHVBNjQwLVxcdUE2NkVcXHVBNjdGLVxcdUE2OTdcXHVBNkEwLVxcdUE2RTVcXHVBNzE3LVxcdUE3MUZcXHVBNzIyLVxcdUE3ODhcXHVBNzhCLVxcdUE3OEVcXHVBNzkwLVxcdUE3OTNcXHVBN0EwLVxcdUE3QUFcXHVBN0Y4LVxcdUE4MDFcXHVBODAzLVxcdUE4MDVcXHVBODA3LVxcdUE4MEFcXHVBODBDLVxcdUE4MjJcXHVBODQwLVxcdUE4NzNcXHVBODgyLVxcdUE4QjNcXHVBOEYyLVxcdUE4RjdcXHVBOEZCXFx1QTkwQS1cXHVBOTI1XFx1QTkzMC1cXHVBOTQ2XFx1QTk2MC1cXHVBOTdDXFx1QTk4NC1cXHVBOUIyXFx1QTlDRlxcdUFBMDAtXFx1QUEyOFxcdUFBNDAtXFx1QUE0MlxcdUFBNDQtXFx1QUE0QlxcdUFBNjAtXFx1QUE3NlxcdUFBN0FcXHVBQTgwLVxcdUFBQUZcXHVBQUIxXFx1QUFCNVxcdUFBQjZcXHVBQUI5LVxcdUFBQkRcXHVBQUMwXFx1QUFDMlxcdUFBREItXFx1QUFERFxcdUFBRTAtXFx1QUFFQVxcdUFBRjItXFx1QUFGNFxcdUFCMDEtXFx1QUIwNlxcdUFCMDktXFx1QUIwRVxcdUFCMTEtXFx1QUIxNlxcdUFCMjAtXFx1QUIyNlxcdUFCMjgtXFx1QUIyRVxcdUFCQzAtXFx1QUJFMlxcdUFDMDAtXFx1RDdBM1xcdUQ3QjAtXFx1RDdDNlxcdUQ3Q0ItXFx1RDdGQlxcdUY5MDAtXFx1RkE2RFxcdUZBNzAtXFx1RkFEOVxcdUZCMDAtXFx1RkIwNlxcdUZCMTMtXFx1RkIxN1xcdUZCMURcXHVGQjFGLVxcdUZCMjhcXHVGQjJBLVxcdUZCMzZcXHVGQjM4LVxcdUZCM0NcXHVGQjNFXFx1RkI0MFxcdUZCNDFcXHVGQjQzXFx1RkI0NFxcdUZCNDYtXFx1RkJCMVxcdUZCRDMtXFx1RkQzRFxcdUZENTAtXFx1RkQ4RlxcdUZEOTItXFx1RkRDN1xcdUZERjAtXFx1RkRGQlxcdUZFNzAtXFx1RkU3NFxcdUZFNzYtXFx1RkVGQ1xcdUZGMjEtXFx1RkYzQVxcdUZGNDEtXFx1RkY1QVxcdUZGNjYtXFx1RkZCRVxcdUZGQzItXFx1RkZDN1xcdUZGQ0EtXFx1RkZDRlxcdUZGRDItXFx1RkZEN1xcdUZGREEtXFx1RkZEQ10vLFxuICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yMjA3NTA3MFxuICAnKic6IC8uL1xufTtcbi8qKiAqL1xuXG52YXIgUGF0dGVybklucHV0RGVmaW5pdGlvbiA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIC8qKiAqL1xuXG4gIC8qKiAqL1xuXG4gIC8qKiAqL1xuXG4gIC8qKiAqL1xuXG4gIC8qKiAqL1xuXG4gIC8qKiAqL1xuICBmdW5jdGlvbiBQYXR0ZXJuSW5wdXREZWZpbml0aW9uKG9wdHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUGF0dGVybklucHV0RGVmaW5pdGlvbik7XG5cbiAgICB2YXIgbWFzayA9IG9wdHMubWFzayxcbiAgICAgICAgYmxvY2tPcHRzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9wdHMsIFtcIm1hc2tcIl0pO1xuXG4gICAgdGhpcy5tYXNrZWQgPSBjcmVhdGVNYXNrKHtcbiAgICAgIG1hc2s6IG1hc2tcbiAgICB9KTtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGJsb2NrT3B0cyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUGF0dGVybklucHV0RGVmaW5pdGlvbiwgW3tcbiAgICBrZXk6IFwicmVzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICB0aGlzLl9pc0ZpbGxlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5tYXNrZWQucmVzZXQoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHZhciBmcm9tUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xuICAgICAgdmFyIHRvUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0aGlzLnZhbHVlLmxlbmd0aDtcblxuICAgICAgaWYgKGZyb21Qb3MgPT09IDAgJiYgdG9Qb3MgPj0gMSkge1xuICAgICAgICB0aGlzLl9pc0ZpbGxlZCA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gdGhpcy5tYXNrZWQucmVtb3ZlKGZyb21Qb3MsIHRvUG9zKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInZhbHVlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5tYXNrZWQudmFsdWUgfHwgKHRoaXMuX2lzRmlsbGVkICYmICF0aGlzLmlzT3B0aW9uYWwgPyB0aGlzLnBsYWNlaG9sZGVyQ2hhciA6ICcnKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidW5tYXNrZWRWYWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMubWFza2VkLnVubWFza2VkVmFsdWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzQ29tcGxldGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBCb29sZWFuKHRoaXMubWFza2VkLnZhbHVlKSB8fCB0aGlzLmlzT3B0aW9uYWw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9hcHBlbmRDaGFyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9hcHBlbmRDaGFyKHN0cikge1xuICAgICAgdmFyIGZsYWdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICAgIGlmICh0aGlzLl9pc0ZpbGxlZCkgcmV0dXJuIG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgICB2YXIgc3RhdGUgPSB0aGlzLm1hc2tlZC5zdGF0ZTsgLy8gc2ltdWxhdGUgaW5wdXRcblxuICAgICAgdmFyIGRldGFpbHMgPSB0aGlzLm1hc2tlZC5fYXBwZW5kQ2hhcihzdHIsIGZsYWdzKTtcblxuICAgICAgaWYgKGRldGFpbHMuaW5zZXJ0ZWQgJiYgdGhpcy5kb1ZhbGlkYXRlKGZsYWdzKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgZGV0YWlscy5pbnNlcnRlZCA9IGRldGFpbHMucmF3SW5zZXJ0ZWQgPSAnJztcbiAgICAgICAgdGhpcy5tYXNrZWQuc3RhdGUgPSBzdGF0ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFkZXRhaWxzLmluc2VydGVkICYmICF0aGlzLmlzT3B0aW9uYWwgJiYgIXRoaXMubGF6eSAmJiAhZmxhZ3MuaW5wdXQpIHtcbiAgICAgICAgZGV0YWlscy5pbnNlcnRlZCA9IHRoaXMucGxhY2Vob2xkZXJDaGFyO1xuICAgICAgfVxuXG4gICAgICBkZXRhaWxzLnNraXAgPSAhZGV0YWlscy5pbnNlcnRlZCAmJiAhdGhpcy5pc09wdGlvbmFsO1xuICAgICAgdGhpcy5faXNGaWxsZWQgPSBCb29sZWFuKGRldGFpbHMuaW5zZXJ0ZWQpO1xuICAgICAgcmV0dXJuIGRldGFpbHM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImFwcGVuZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhcHBlbmQoKSB7XG4gICAgICB2YXIgX3RoaXMkbWFza2VkO1xuXG4gICAgICByZXR1cm4gKF90aGlzJG1hc2tlZCA9IHRoaXMubWFza2VkKS5hcHBlbmQuYXBwbHkoX3RoaXMkbWFza2VkLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfYXBwZW5kUGxhY2Vob2xkZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2FwcGVuZFBsYWNlaG9sZGVyKCkge1xuICAgICAgdmFyIGRldGFpbHMgPSBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICAgICAgaWYgKHRoaXMuX2lzRmlsbGVkIHx8IHRoaXMuaXNPcHRpb25hbCkgcmV0dXJuIGRldGFpbHM7XG4gICAgICB0aGlzLl9pc0ZpbGxlZCA9IHRydWU7XG4gICAgICBkZXRhaWxzLmluc2VydGVkID0gdGhpcy5wbGFjZWhvbGRlckNoYXI7XG4gICAgICByZXR1cm4gZGV0YWlscztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZXh0cmFjdFRhaWxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZXh0cmFjdFRhaWwoKSB7XG4gICAgICB2YXIgX3RoaXMkbWFza2VkMjtcblxuICAgICAgcmV0dXJuIChfdGhpcyRtYXNrZWQyID0gdGhpcy5tYXNrZWQpLmV4dHJhY3RUYWlsLmFwcGx5KF90aGlzJG1hc2tlZDIsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImFwcGVuZFRhaWxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYXBwZW5kVGFpbCgpIHtcbiAgICAgIHZhciBfdGhpcyRtYXNrZWQzO1xuXG4gICAgICByZXR1cm4gKF90aGlzJG1hc2tlZDMgPSB0aGlzLm1hc2tlZCkuYXBwZW5kVGFpbC5hcHBseShfdGhpcyRtYXNrZWQzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJleHRyYWN0SW5wdXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZXh0cmFjdElucHV0KCkge1xuICAgICAgdmFyIGZyb21Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDA7XG4gICAgICB2YXIgdG9Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRoaXMudmFsdWUubGVuZ3RoO1xuICAgICAgdmFyIGZsYWdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQ7XG4gICAgICByZXR1cm4gdGhpcy5tYXNrZWQuZXh0cmFjdElucHV0KGZyb21Qb3MsIHRvUG9zLCBmbGFncyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm5lYXJlc3RJbnB1dFBvc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBuZWFyZXN0SW5wdXRQb3MoY3Vyc29yUG9zKSB7XG4gICAgICB2YXIgZGlyZWN0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBESVJFQ1RJT04uTk9ORTtcbiAgICAgIHZhciBtaW5Qb3MgPSAwO1xuICAgICAgdmFyIG1heFBvcyA9IHRoaXMudmFsdWUubGVuZ3RoO1xuICAgICAgdmFyIGJvdW5kUG9zID0gTWF0aC5taW4oTWF0aC5tYXgoY3Vyc29yUG9zLCBtaW5Qb3MpLCBtYXhQb3MpO1xuXG4gICAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgICBjYXNlIERJUkVDVElPTi5MRUZUOlxuICAgICAgICBjYXNlIERJUkVDVElPTi5GT1JDRV9MRUZUOlxuICAgICAgICAgIHJldHVybiB0aGlzLmlzQ29tcGxldGUgPyBib3VuZFBvcyA6IG1pblBvcztcblxuICAgICAgICBjYXNlIERJUkVDVElPTi5SSUdIVDpcbiAgICAgICAgY2FzZSBESVJFQ1RJT04uRk9SQ0VfUklHSFQ6XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaXNDb21wbGV0ZSA/IGJvdW5kUG9zIDogbWF4UG9zO1xuXG4gICAgICAgIGNhc2UgRElSRUNUSU9OLk5PTkU6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIGJvdW5kUG9zO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJkb1ZhbGlkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRvVmFsaWRhdGUoKSB7XG4gICAgICB2YXIgX3RoaXMkbWFza2VkNCwgX3RoaXMkcGFyZW50O1xuXG4gICAgICByZXR1cm4gKF90aGlzJG1hc2tlZDQgPSB0aGlzLm1hc2tlZCkuZG9WYWxpZGF0ZS5hcHBseShfdGhpcyRtYXNrZWQ0LCBhcmd1bWVudHMpICYmICghdGhpcy5wYXJlbnQgfHwgKF90aGlzJHBhcmVudCA9IHRoaXMucGFyZW50KS5kb1ZhbGlkYXRlLmFwcGx5KF90aGlzJHBhcmVudCwgYXJndW1lbnRzKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImRvQ29tbWl0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRvQ29tbWl0KCkge1xuICAgICAgdGhpcy5tYXNrZWQuZG9Db21taXQoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic3RhdGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG1hc2tlZDogdGhpcy5tYXNrZWQuc3RhdGUsXG4gICAgICAgIF9pc0ZpbGxlZDogdGhpcy5faXNGaWxsZWRcbiAgICAgIH07XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChzdGF0ZSkge1xuICAgICAgdGhpcy5tYXNrZWQuc3RhdGUgPSBzdGF0ZS5tYXNrZWQ7XG4gICAgICB0aGlzLl9pc0ZpbGxlZCA9IHN0YXRlLl9pc0ZpbGxlZDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUGF0dGVybklucHV0RGVmaW5pdGlvbjtcbn0oKTtcblxuZXhwb3J0IGRlZmF1bHQgUGF0dGVybklucHV0RGVmaW5pdGlvbjtcbmV4cG9ydCB7IERFRkFVTFRfSU5QVVRfREVGSU5JVElPTlMgfTtcbiIsImltcG9ydCBjcmVhdGVNYXNrIGZyb20gJy4vZmFjdG9yeS5qcyc7XG5pbXBvcnQgSU1hc2sgZnJvbSAnLi4vY29yZS9ob2xkZXIuanMnO1xuaW1wb3J0ICcuLi9jb3JlL3V0aWxzLmpzJztcbmltcG9ydCAnLi4vX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycy02Y2NiMWY2NC5qcyc7XG5cbi8qKiBNYXNrIHBpcGUgc291cmNlIGFuZCBkZXN0aW5hdGlvbiB0eXBlcyAqL1xuXG52YXIgUElQRV9UWVBFID0ge1xuICBNQVNLRUQ6ICd2YWx1ZScsXG4gIFVOTUFTS0VEOiAndW5tYXNrZWRWYWx1ZScsXG4gIFRZUEVEOiAndHlwZWRWYWx1ZSdcbn07XG4vKiogQ3JlYXRlcyBuZXcgcGlwZSBmdW5jdGlvbiBkZXBlbmRpbmcgb24gbWFzayB0eXBlLCBzb3VyY2UgYW5kIGRlc3RpbmF0aW9uIG9wdGlvbnMgKi9cblxuZnVuY3Rpb24gY3JlYXRlUGlwZShtYXNrKSB7XG4gIHZhciBmcm9tID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBQSVBFX1RZUEUuTUFTS0VEO1xuICB2YXIgdG8gPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IFBJUEVfVFlQRS5NQVNLRUQ7XG4gIHZhciBtYXNrZWQgPSBjcmVhdGVNYXNrKG1hc2spO1xuICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIG1hc2tlZC5ydW5Jc29sYXRlZChmdW5jdGlvbiAobSkge1xuICAgICAgbVtmcm9tXSA9IHZhbHVlO1xuICAgICAgcmV0dXJuIG1bdG9dO1xuICAgIH0pO1xuICB9O1xufVxuLyoqIFBpcGVzIHZhbHVlIHRocm91Z2ggbWFzayBkZXBlbmRpbmcgb24gbWFzayB0eXBlLCBzb3VyY2UgYW5kIGRlc3RpbmF0aW9uIG9wdGlvbnMgKi9cblxuZnVuY3Rpb24gcGlwZSh2YWx1ZSkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgcGlwZUFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHBpcGVBcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBjcmVhdGVQaXBlLmFwcGx5KHZvaWQgMCwgcGlwZUFyZ3MpKHZhbHVlKTtcbn1cbklNYXNrLlBJUEVfVFlQRSA9IFBJUEVfVFlQRTtcbklNYXNrLmNyZWF0ZVBpcGUgPSBjcmVhdGVQaXBlO1xuSU1hc2sucGlwZSA9IHBpcGU7XG5cbmV4cG9ydCB7IFBJUEVfVFlQRSwgY3JlYXRlUGlwZSwgcGlwZSB9O1xuIiwiaW1wb3J0IHsgZCBhcyBfaW5oZXJpdHMsIGUgYXMgX2NyZWF0ZVN1cGVyLCBhIGFzIF9jbGFzc0NhbGxDaGVjaywgXyBhcyBfY3JlYXRlQ2xhc3MsIGcgYXMgX2dldCwgaCBhcyBfZ2V0UHJvdG90eXBlT2YsIGYgYXMgX3NsaWNlZFRvQXJyYXkgfSBmcm9tICcuLi9fcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzLTZjY2IxZjY0LmpzJztcbmltcG9ydCBNYXNrZWRQYXR0ZXJuIGZyb20gJy4vcGF0dGVybi5qcyc7XG5pbXBvcnQgSU1hc2sgZnJvbSAnLi4vY29yZS9ob2xkZXIuanMnO1xuaW1wb3J0ICcuLi9jb3JlL3V0aWxzLmpzJztcbmltcG9ydCAnLi4vY29yZS9jaGFuZ2UtZGV0YWlscy5qcyc7XG5pbXBvcnQgJy4vYmFzZS5qcyc7XG5pbXBvcnQgJy4uL2NvcmUvY29udGludW91cy10YWlsLWRldGFpbHMuanMnO1xuaW1wb3J0ICcuL3BhdHRlcm4vaW5wdXQtZGVmaW5pdGlvbi5qcyc7XG5pbXBvcnQgJy4vZmFjdG9yeS5qcyc7XG5pbXBvcnQgJy4vcGF0dGVybi9maXhlZC1kZWZpbml0aW9uLmpzJztcbmltcG9ydCAnLi9wYXR0ZXJuL2NodW5rLXRhaWwtZGV0YWlscy5qcyc7XG5pbXBvcnQgJy4vcmVnZXhwLmpzJztcblxuLyoqIFBhdHRlcm4gd2hpY2ggYWNjZXB0cyByYW5nZXMgKi9cblxudmFyIE1hc2tlZFJhbmdlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfTWFza2VkUGF0dGVybikge1xuICBfaW5oZXJpdHMoTWFza2VkUmFuZ2UsIF9NYXNrZWRQYXR0ZXJuKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKE1hc2tlZFJhbmdlKTtcblxuICBmdW5jdGlvbiBNYXNrZWRSYW5nZSgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWFza2VkUmFuZ2UpO1xuXG4gICAgcmV0dXJuIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE1hc2tlZFJhbmdlLCBbe1xuICAgIGtleTogXCJfbWF0Y2hGcm9tXCIsXG4gICAgZ2V0OlxuICAgIC8qKlxyXG4gICAgICBPcHRpb25hbGx5IHNldHMgbWF4IGxlbmd0aCBvZiBwYXR0ZXJuLlxyXG4gICAgICBVc2VkIHdoZW4gcGF0dGVybiBsZW5ndGggaXMgbG9uZ2VyIHRoZW4gYHRvYCBwYXJhbSBsZW5ndGguIFBhZHMgemVyb3MgYXQgc3RhcnQgaW4gdGhpcyBjYXNlLlxyXG4gICAgKi9cblxuICAgIC8qKiBNaW4gYm91bmQgKi9cblxuICAgIC8qKiBNYXggYm91bmQgKi9cblxuICAgIC8qKiAqL1xuICAgIGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLm1heExlbmd0aCAtIFN0cmluZyh0aGlzLmZyb20pLmxlbmd0aDtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl91cGRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3VwZGF0ZShvcHRzKSB7XG4gICAgICAvLyBUT0RPIHR5cGVcbiAgICAgIG9wdHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgdG86IHRoaXMudG8gfHwgMCxcbiAgICAgICAgZnJvbTogdGhpcy5mcm9tIHx8IDBcbiAgICAgIH0sIG9wdHMpO1xuICAgICAgdmFyIG1heExlbmd0aCA9IFN0cmluZyhvcHRzLnRvKS5sZW5ndGg7XG4gICAgICBpZiAob3B0cy5tYXhMZW5ndGggIT0gbnVsbCkgbWF4TGVuZ3RoID0gTWF0aC5tYXgobWF4TGVuZ3RoLCBvcHRzLm1heExlbmd0aCk7XG4gICAgICBvcHRzLm1heExlbmd0aCA9IG1heExlbmd0aDtcbiAgICAgIHZhciBmcm9tU3RyID0gU3RyaW5nKG9wdHMuZnJvbSkucGFkU3RhcnQobWF4TGVuZ3RoLCAnMCcpO1xuICAgICAgdmFyIHRvU3RyID0gU3RyaW5nKG9wdHMudG8pLnBhZFN0YXJ0KG1heExlbmd0aCwgJzAnKTtcbiAgICAgIHZhciBzYW1lQ2hhcnNDb3VudCA9IDA7XG5cbiAgICAgIHdoaWxlIChzYW1lQ2hhcnNDb3VudCA8IHRvU3RyLmxlbmd0aCAmJiB0b1N0cltzYW1lQ2hhcnNDb3VudF0gPT09IGZyb21TdHJbc2FtZUNoYXJzQ291bnRdKSB7XG4gICAgICAgICsrc2FtZUNoYXJzQ291bnQ7XG4gICAgICB9XG5cbiAgICAgIG9wdHMubWFzayA9IHRvU3RyLnNsaWNlKDAsIHNhbWVDaGFyc0NvdW50KS5yZXBsYWNlKC8wL2csICdcXFxcMCcpICsgJzAnLnJlcGVhdChtYXhMZW5ndGggLSBzYW1lQ2hhcnNDb3VudCk7XG5cbiAgICAgIF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZFJhbmdlLnByb3RvdHlwZSksIFwiX3VwZGF0ZVwiLCB0aGlzKS5jYWxsKHRoaXMsIG9wdHMpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiaXNDb21wbGV0ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZFJhbmdlLnByb3RvdHlwZSksIFwiaXNDb21wbGV0ZVwiLCB0aGlzKSAmJiBCb29sZWFuKHRoaXMudmFsdWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJib3VuZGFyaWVzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJvdW5kYXJpZXMoc3RyKSB7XG4gICAgICB2YXIgbWluc3RyID0gJyc7XG4gICAgICB2YXIgbWF4c3RyID0gJyc7XG5cbiAgICAgIHZhciBfcmVmID0gc3RyLm1hdGNoKC9eKFxcRCopKFxcZCopKFxcRCopLykgfHwgW10sXG4gICAgICAgICAgX3JlZjIgPSBfc2xpY2VkVG9BcnJheShfcmVmLCAzKSxcbiAgICAgICAgICBwbGFjZWhvbGRlciA9IF9yZWYyWzFdLFxuICAgICAgICAgIG51bSA9IF9yZWYyWzJdO1xuXG4gICAgICBpZiAobnVtKSB7XG4gICAgICAgIG1pbnN0ciA9ICcwJy5yZXBlYXQocGxhY2Vob2xkZXIubGVuZ3RoKSArIG51bTtcbiAgICAgICAgbWF4c3RyID0gJzknLnJlcGVhdChwbGFjZWhvbGRlci5sZW5ndGgpICsgbnVtO1xuICAgICAgfVxuXG4gICAgICBtaW5zdHIgPSBtaW5zdHIucGFkRW5kKHRoaXMubWF4TGVuZ3RoLCAnMCcpO1xuICAgICAgbWF4c3RyID0gbWF4c3RyLnBhZEVuZCh0aGlzLm1heExlbmd0aCwgJzknKTtcbiAgICAgIHJldHVybiBbbWluc3RyLCBtYXhzdHJdO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZG9QcmVwYXJlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRvUHJlcGFyZShzdHIpIHtcbiAgICAgIHZhciBmbGFncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgICBzdHIgPSBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWRSYW5nZS5wcm90b3R5cGUpLCBcImRvUHJlcGFyZVwiLCB0aGlzKS5jYWxsKHRoaXMsIHN0ciwgZmxhZ3MpLnJlcGxhY2UoL1xcRC9nLCAnJyk7XG4gICAgICBpZiAoIXRoaXMuYXV0b2ZpeCkgcmV0dXJuIHN0cjtcbiAgICAgIHZhciBmcm9tU3RyID0gU3RyaW5nKHRoaXMuZnJvbSkucGFkU3RhcnQodGhpcy5tYXhMZW5ndGgsICcwJyk7XG4gICAgICB2YXIgdG9TdHIgPSBTdHJpbmcodGhpcy50bykucGFkU3RhcnQodGhpcy5tYXhMZW5ndGgsICcwJyk7XG4gICAgICB2YXIgdmFsID0gdGhpcy52YWx1ZTtcbiAgICAgIHZhciBwcmVwU3RyID0gJyc7XG5cbiAgICAgIGZvciAodmFyIGNpID0gMDsgY2kgPCBzdHIubGVuZ3RoOyArK2NpKSB7XG4gICAgICAgIHZhciBuZXh0VmFsID0gdmFsICsgcHJlcFN0ciArIHN0cltjaV07XG5cbiAgICAgICAgdmFyIF90aGlzJGJvdW5kYXJpZXMgPSB0aGlzLmJvdW5kYXJpZXMobmV4dFZhbCksXG4gICAgICAgICAgICBfdGhpcyRib3VuZGFyaWVzMiA9IF9zbGljZWRUb0FycmF5KF90aGlzJGJvdW5kYXJpZXMsIDIpLFxuICAgICAgICAgICAgbWluc3RyID0gX3RoaXMkYm91bmRhcmllczJbMF0sXG4gICAgICAgICAgICBtYXhzdHIgPSBfdGhpcyRib3VuZGFyaWVzMlsxXTtcblxuICAgICAgICBpZiAoTnVtYmVyKG1heHN0cikgPCB0aGlzLmZyb20pIHByZXBTdHIgKz0gZnJvbVN0cltuZXh0VmFsLmxlbmd0aCAtIDFdO2Vsc2UgaWYgKE51bWJlcihtaW5zdHIpID4gdGhpcy50bykgcHJlcFN0ciArPSB0b1N0cltuZXh0VmFsLmxlbmd0aCAtIDFdO2Vsc2UgcHJlcFN0ciArPSBzdHJbY2ldO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJlcFN0cjtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRvVmFsaWRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZG9WYWxpZGF0ZSgpIHtcbiAgICAgIHZhciBfZ2V0MjtcblxuICAgICAgdmFyIHN0ciA9IHRoaXMudmFsdWU7XG4gICAgICB2YXIgZmlyc3ROb25aZXJvID0gc3RyLnNlYXJjaCgvW14wXS8pO1xuICAgICAgaWYgKGZpcnN0Tm9uWmVybyA9PT0gLTEgJiYgc3RyLmxlbmd0aCA8PSB0aGlzLl9tYXRjaEZyb20pIHJldHVybiB0cnVlO1xuXG4gICAgICB2YXIgX3RoaXMkYm91bmRhcmllczMgPSB0aGlzLmJvdW5kYXJpZXMoc3RyKSxcbiAgICAgICAgICBfdGhpcyRib3VuZGFyaWVzNCA9IF9zbGljZWRUb0FycmF5KF90aGlzJGJvdW5kYXJpZXMzLCAyKSxcbiAgICAgICAgICBtaW5zdHIgPSBfdGhpcyRib3VuZGFyaWVzNFswXSxcbiAgICAgICAgICBtYXhzdHIgPSBfdGhpcyRib3VuZGFyaWVzNFsxXTtcblxuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmZyb20gPD0gTnVtYmVyKG1heHN0cikgJiYgTnVtYmVyKG1pbnN0cikgPD0gdGhpcy50byAmJiAoX2dldDIgPSBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWRSYW5nZS5wcm90b3R5cGUpLCBcImRvVmFsaWRhdGVcIiwgdGhpcykpLmNhbGwuYXBwbHkoX2dldDIsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNYXNrZWRSYW5nZTtcbn0oTWFza2VkUGF0dGVybik7XG5JTWFzay5NYXNrZWRSYW5nZSA9IE1hc2tlZFJhbmdlO1xuXG5leHBvcnQgZGVmYXVsdCBNYXNrZWRSYW5nZTtcbiIsImltcG9ydCB7IGQgYXMgX2luaGVyaXRzLCBlIGFzIF9jcmVhdGVTdXBlciwgXyBhcyBfY3JlYXRlQ2xhc3MsIGEgYXMgX2NsYXNzQ2FsbENoZWNrLCBnIGFzIF9nZXQsIGggYXMgX2dldFByb3RvdHlwZU9mIH0gZnJvbSAnLi4vX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycy02Y2NiMWY2NC5qcyc7XG5pbXBvcnQgTWFza2VkIGZyb20gJy4vYmFzZS5qcyc7XG5pbXBvcnQgSU1hc2sgZnJvbSAnLi4vY29yZS9ob2xkZXIuanMnO1xuaW1wb3J0ICcuLi9jb3JlL2NoYW5nZS1kZXRhaWxzLmpzJztcbmltcG9ydCAnLi4vY29yZS9jb250aW51b3VzLXRhaWwtZGV0YWlscy5qcyc7XG5pbXBvcnQgJy4uL2NvcmUvdXRpbHMuanMnO1xuXG4vKiogTWFza2luZyBieSBSZWdFeHAgKi9cblxudmFyIE1hc2tlZFJlZ0V4cCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX01hc2tlZCkge1xuICBfaW5oZXJpdHMoTWFza2VkUmVnRXhwLCBfTWFza2VkKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKE1hc2tlZFJlZ0V4cCk7XG5cbiAgZnVuY3Rpb24gTWFza2VkUmVnRXhwKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYXNrZWRSZWdFeHApO1xuXG4gICAgcmV0dXJuIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE1hc2tlZFJlZ0V4cCwgW3tcbiAgICBrZXk6IFwiX3VwZGF0ZVwiLFxuICAgIHZhbHVlOlxuICAgIC8qKlxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICAgQHBhcmFtIHtPYmplY3R9IG9wdHNcclxuICAgICovXG4gICAgZnVuY3Rpb24gX3VwZGF0ZShvcHRzKSB7XG4gICAgICBpZiAob3B0cy5tYXNrKSBvcHRzLnZhbGlkYXRlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5zZWFyY2gob3B0cy5tYXNrKSA+PSAwO1xuICAgICAgfTtcblxuICAgICAgX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkUmVnRXhwLnByb3RvdHlwZSksIFwiX3VwZGF0ZVwiLCB0aGlzKS5jYWxsKHRoaXMsIG9wdHMpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNYXNrZWRSZWdFeHA7XG59KE1hc2tlZCk7XG5JTWFzay5NYXNrZWRSZWdFeHAgPSBNYXNrZWRSZWdFeHA7XG5cbmV4cG9ydCBkZWZhdWx0IE1hc2tlZFJlZ0V4cDtcbiIsIi8qISBucG0uaW0vb2JqZWN0LWZpdC1pbWFnZXMgMy4yLjQgKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIE9GSSA9ICdiZnJlZC1pdDpvYmplY3QtZml0LWltYWdlcyc7XG52YXIgcHJvcFJlZ2V4ID0gLyhvYmplY3QtZml0fG9iamVjdC1wb3NpdGlvbilcXHMqOlxccyooWy0uXFx3XFxzJV0rKS9nO1xudmFyIHRlc3RJbWcgPSB0eXBlb2YgSW1hZ2UgPT09ICd1bmRlZmluZWQnID8ge3N0eWxlOiB7J29iamVjdC1wb3NpdGlvbic6IDF9fSA6IG5ldyBJbWFnZSgpO1xudmFyIHN1cHBvcnRzT2JqZWN0Rml0ID0gJ29iamVjdC1maXQnIGluIHRlc3RJbWcuc3R5bGU7XG52YXIgc3VwcG9ydHNPYmplY3RQb3NpdGlvbiA9ICdvYmplY3QtcG9zaXRpb24nIGluIHRlc3RJbWcuc3R5bGU7XG52YXIgc3VwcG9ydHNPRkkgPSAnYmFja2dyb3VuZC1zaXplJyBpbiB0ZXN0SW1nLnN0eWxlO1xudmFyIHN1cHBvcnRzQ3VycmVudFNyYyA9IHR5cGVvZiB0ZXN0SW1nLmN1cnJlbnRTcmMgPT09ICdzdHJpbmcnO1xudmFyIG5hdGl2ZUdldEF0dHJpYnV0ZSA9IHRlc3RJbWcuZ2V0QXR0cmlidXRlO1xudmFyIG5hdGl2ZVNldEF0dHJpYnV0ZSA9IHRlc3RJbWcuc2V0QXR0cmlidXRlO1xudmFyIGF1dG9Nb2RlRW5hYmxlZCA9IGZhbHNlO1xuXG5mdW5jdGlvbiBjcmVhdGVQbGFjZWhvbGRlcih3LCBoKSB7XG5cdHJldHVybiAoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9J1wiICsgdyArIFwiJyBoZWlnaHQ9J1wiICsgaCArIFwiJyUzRSUzQy9zdmclM0VcIik7XG59XG5cbmZ1bmN0aW9uIHBvbHlmaWxsQ3VycmVudFNyYyhlbCkge1xuXHRpZiAoZWwuc3Jjc2V0ICYmICFzdXBwb3J0c0N1cnJlbnRTcmMgJiYgd2luZG93LnBpY3R1cmVmaWxsKSB7XG5cdFx0dmFyIHBmID0gd2luZG93LnBpY3R1cmVmaWxsLl87XG5cdFx0Ly8gcGFyc2Ugc3Jjc2V0IHdpdGggcGljdHVyZWZpbGwgd2hlcmUgY3VycmVudFNyYyBpc24ndCBhdmFpbGFibGVcblx0XHRpZiAoIWVsW3BmLm5zXSB8fCAhZWxbcGYubnNdLmV2YWxlZCkge1xuXHRcdFx0Ly8gZm9yY2Ugc3luY2hyb25vdXMgc3Jjc2V0IHBhcnNpbmdcblx0XHRcdHBmLmZpbGxJbWcoZWwsIHtyZXNlbGVjdDogdHJ1ZX0pO1xuXHRcdH1cblxuXHRcdGlmICghZWxbcGYubnNdLmN1clNyYykge1xuXHRcdFx0Ly8gZm9yY2UgcGljdHVyZWZpbGwgdG8gcGFyc2Ugc3Jjc2V0XG5cdFx0XHRlbFtwZi5uc10uc3VwcG9ydGVkID0gZmFsc2U7XG5cdFx0XHRwZi5maWxsSW1nKGVsLCB7cmVzZWxlY3Q6IHRydWV9KTtcblx0XHR9XG5cblx0XHQvLyByZXRyaWV2ZSBwYXJzZWQgY3VycmVudFNyYywgaWYgYW55XG5cdFx0ZWwuY3VycmVudFNyYyA9IGVsW3BmLm5zXS5jdXJTcmMgfHwgZWwuc3JjO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGdldFN0eWxlKGVsKSB7XG5cdHZhciBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWwpLmZvbnRGYW1pbHk7XG5cdHZhciBwYXJzZWQ7XG5cdHZhciBwcm9wcyA9IHt9O1xuXHR3aGlsZSAoKHBhcnNlZCA9IHByb3BSZWdleC5leGVjKHN0eWxlKSkgIT09IG51bGwpIHtcblx0XHRwcm9wc1twYXJzZWRbMV1dID0gcGFyc2VkWzJdO1xuXHR9XG5cdHJldHVybiBwcm9wcztcbn1cblxuZnVuY3Rpb24gc2V0UGxhY2Vob2xkZXIoaW1nLCB3aWR0aCwgaGVpZ2h0KSB7XG5cdC8vIERlZmF1bHQ6IGZpbGwgd2lkdGgsIG5vIGhlaWdodFxuXHR2YXIgcGxhY2Vob2xkZXIgPSBjcmVhdGVQbGFjZWhvbGRlcih3aWR0aCB8fCAxLCBoZWlnaHQgfHwgMCk7XG5cblx0Ly8gT25seSBzZXQgcGxhY2Vob2xkZXIgaWYgaXQncyBkaWZmZXJlbnRcblx0aWYgKG5hdGl2ZUdldEF0dHJpYnV0ZS5jYWxsKGltZywgJ3NyYycpICE9PSBwbGFjZWhvbGRlcikge1xuXHRcdG5hdGl2ZVNldEF0dHJpYnV0ZS5jYWxsKGltZywgJ3NyYycsIHBsYWNlaG9sZGVyKTtcblx0fVxufVxuXG5mdW5jdGlvbiBvbkltYWdlUmVhZHkoaW1nLCBjYWxsYmFjaykge1xuXHQvLyBuYXR1cmFsV2lkdGggaXMgb25seSBhdmFpbGFibGUgd2hlbiB0aGUgaW1hZ2UgaGVhZGVycyBhcmUgbG9hZGVkLFxuXHQvLyB0aGlzIGxvb3Agd2lsbCBwb2xsIGl0IGV2ZXJ5IDEwMG1zLlxuXHRpZiAoaW1nLm5hdHVyYWxXaWR0aCkge1xuXHRcdGNhbGxiYWNrKGltZyk7XG5cdH0gZWxzZSB7XG5cdFx0c2V0VGltZW91dChvbkltYWdlUmVhZHksIDEwMCwgaW1nLCBjYWxsYmFjayk7XG5cdH1cbn1cblxuZnVuY3Rpb24gZml4T25lKGVsKSB7XG5cdHZhciBzdHlsZSA9IGdldFN0eWxlKGVsKTtcblx0dmFyIG9maSA9IGVsW09GSV07XG5cdHN0eWxlWydvYmplY3QtZml0J10gPSBzdHlsZVsnb2JqZWN0LWZpdCddIHx8ICdmaWxsJzsgLy8gZGVmYXVsdCB2YWx1ZVxuXG5cdC8vIEF2b2lkIHJ1bm5pbmcgd2hlcmUgdW5uZWNlc3NhcnksIHVubGVzcyBPRkkgaGFkIGFscmVhZHkgZG9uZSBpdHMgZGVlZFxuXHRpZiAoIW9maS5pbWcpIHtcblx0XHQvLyBmaWxsIGlzIHRoZSBkZWZhdWx0IGJlaGF2aW9yIHNvIG5vIGFjdGlvbiBpcyBuZWNlc3Nhcnlcblx0XHRpZiAoc3R5bGVbJ29iamVjdC1maXQnXSA9PT0gJ2ZpbGwnKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gV2hlcmUgb2JqZWN0LWZpdCBpcyBzdXBwb3J0ZWQgYW5kIG9iamVjdC1wb3NpdGlvbiBpc24ndCAoU2FmYXJpIDwgMTApXG5cdFx0aWYgKFxuXHRcdFx0IW9maS5za2lwVGVzdCAmJiAvLyB1bmxlc3MgdXNlciB3YW50cyB0byBhcHBseSByZWdhcmRsZXNzIG9mIGJyb3dzZXIgc3VwcG9ydFxuXHRcdFx0c3VwcG9ydHNPYmplY3RGaXQgJiYgLy8gaWYgYnJvd3NlciBhbHJlYWR5IHN1cHBvcnRzIG9iamVjdC1maXRcblx0XHRcdCFzdHlsZVsnb2JqZWN0LXBvc2l0aW9uJ10gLy8gdW5sZXNzIG9iamVjdC1wb3NpdGlvbiBpcyB1c2VkXG5cdFx0KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHR9XG5cblx0Ly8ga2VlcCBhIGNsb25lIGluIG1lbW9yeSB3aGlsZSByZXNldHRpbmcgdGhlIG9yaWdpbmFsIHRvIGEgYmxhbmtcblx0aWYgKCFvZmkuaW1nKSB7XG5cdFx0b2ZpLmltZyA9IG5ldyBJbWFnZShlbC53aWR0aCwgZWwuaGVpZ2h0KTtcblx0XHRvZmkuaW1nLnNyY3NldCA9IG5hdGl2ZUdldEF0dHJpYnV0ZS5jYWxsKGVsLCBcImRhdGEtb2ZpLXNyY3NldFwiKSB8fCBlbC5zcmNzZXQ7XG5cdFx0b2ZpLmltZy5zcmMgPSBuYXRpdmVHZXRBdHRyaWJ1dGUuY2FsbChlbCwgXCJkYXRhLW9maS1zcmNcIikgfHwgZWwuc3JjO1xuXG5cdFx0Ly8gcHJlc2VydmUgZm9yIGFueSBmdXR1cmUgY2xvbmVOb2RlIGNhbGxzXG5cdFx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL2JmcmVkLWl0L29iamVjdC1maXQtaW1hZ2VzL2lzc3Vlcy81M1xuXHRcdG5hdGl2ZVNldEF0dHJpYnV0ZS5jYWxsKGVsLCBcImRhdGEtb2ZpLXNyY1wiLCBlbC5zcmMpO1xuXHRcdGlmIChlbC5zcmNzZXQpIHtcblx0XHRcdG5hdGl2ZVNldEF0dHJpYnV0ZS5jYWxsKGVsLCBcImRhdGEtb2ZpLXNyY3NldFwiLCBlbC5zcmNzZXQpO1xuXHRcdH1cblxuXHRcdHNldFBsYWNlaG9sZGVyKGVsLCBlbC5uYXR1cmFsV2lkdGggfHwgZWwud2lkdGgsIGVsLm5hdHVyYWxIZWlnaHQgfHwgZWwuaGVpZ2h0KTtcblxuXHRcdC8vIHJlbW92ZSBzcmNzZXQgYmVjYXVzZSBpdCBvdmVycmlkZXMgc3JjXG5cdFx0aWYgKGVsLnNyY3NldCkge1xuXHRcdFx0ZWwuc3Jjc2V0ID0gJyc7XG5cdFx0fVxuXHRcdHRyeSB7XG5cdFx0XHRrZWVwU3JjVXNhYmxlKGVsKTtcblx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdGlmICh3aW5kb3cuY29uc29sZSkge1xuXHRcdFx0XHRjb25zb2xlLndhcm4oJ2h0dHBzOi8vYml0Lmx5L29maS1vbGQtYnJvd3NlcicpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHBvbHlmaWxsQ3VycmVudFNyYyhvZmkuaW1nKTtcblxuXHRlbC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybChcXFwiXCIgKyAoKG9maS5pbWcuY3VycmVudFNyYyB8fCBvZmkuaW1nLnNyYykucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpKSArIFwiXFxcIilcIjtcblx0ZWwuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gc3R5bGVbJ29iamVjdC1wb3NpdGlvbiddIHx8ICdjZW50ZXInO1xuXHRlbC5zdHlsZS5iYWNrZ3JvdW5kUmVwZWF0ID0gJ25vLXJlcGVhdCc7XG5cdGVsLnN0eWxlLmJhY2tncm91bmRPcmlnaW4gPSAnY29udGVudC1ib3gnO1xuXG5cdGlmICgvc2NhbGUtZG93bi8udGVzdChzdHlsZVsnb2JqZWN0LWZpdCddKSkge1xuXHRcdG9uSW1hZ2VSZWFkeShvZmkuaW1nLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAob2ZpLmltZy5uYXR1cmFsV2lkdGggPiBlbC53aWR0aCB8fCBvZmkuaW1nLm5hdHVyYWxIZWlnaHQgPiBlbC5oZWlnaHQpIHtcblx0XHRcdFx0ZWwuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnY29udGFpbic7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRlbC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdhdXRvJztcblx0XHRcdH1cblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHRlbC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IHN0eWxlWydvYmplY3QtZml0J10ucmVwbGFjZSgnbm9uZScsICdhdXRvJykucmVwbGFjZSgnZmlsbCcsICcxMDAlIDEwMCUnKTtcblx0fVxuXG5cdG9uSW1hZ2VSZWFkeShvZmkuaW1nLCBmdW5jdGlvbiAoaW1nKSB7XG5cdFx0c2V0UGxhY2Vob2xkZXIoZWwsIGltZy5uYXR1cmFsV2lkdGgsIGltZy5uYXR1cmFsSGVpZ2h0KTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGtlZXBTcmNVc2FibGUoZWwpIHtcblx0dmFyIGRlc2NyaXB0b3JzID0ge1xuXHRcdGdldDogZnVuY3Rpb24gZ2V0KHByb3ApIHtcblx0XHRcdHJldHVybiBlbFtPRkldLmltZ1twcm9wID8gcHJvcCA6ICdzcmMnXTtcblx0XHR9LFxuXHRcdHNldDogZnVuY3Rpb24gc2V0KHZhbHVlLCBwcm9wKSB7XG5cdFx0XHRlbFtPRkldLmltZ1twcm9wID8gcHJvcCA6ICdzcmMnXSA9IHZhbHVlO1xuXHRcdFx0bmF0aXZlU2V0QXR0cmlidXRlLmNhbGwoZWwsIChcImRhdGEtb2ZpLVwiICsgcHJvcCksIHZhbHVlKTsgLy8gcHJlc2VydmUgZm9yIGFueSBmdXR1cmUgY2xvbmVOb2RlXG5cdFx0XHRmaXhPbmUoZWwpO1xuXHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdH1cblx0fTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGVsLCAnc3JjJywgZGVzY3JpcHRvcnMpO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZWwsICdjdXJyZW50U3JjJywge1xuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZGVzY3JpcHRvcnMuZ2V0KCdjdXJyZW50U3JjJyk7IH1cblx0fSk7XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbCwgJ3NyY3NldCcsIHtcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRlc2NyaXB0b3JzLmdldCgnc3Jjc2V0Jyk7IH0sXG5cdFx0c2V0OiBmdW5jdGlvbiAoc3MpIHsgcmV0dXJuIGRlc2NyaXB0b3JzLnNldChzcywgJ3NyY3NldCcpOyB9XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBoaWphY2tBdHRyaWJ1dGVzKCkge1xuXHRmdW5jdGlvbiBnZXRPZmlJbWFnZU1heWJlKGVsLCBuYW1lKSB7XG5cdFx0cmV0dXJuIGVsW09GSV0gJiYgZWxbT0ZJXS5pbWcgJiYgKG5hbWUgPT09ICdzcmMnIHx8IG5hbWUgPT09ICdzcmNzZXQnKSA/IGVsW09GSV0uaW1nIDogZWw7XG5cdH1cblx0aWYgKCFzdXBwb3J0c09iamVjdFBvc2l0aW9uKSB7XG5cdFx0SFRNTEltYWdlRWxlbWVudC5wcm90b3R5cGUuZ2V0QXR0cmlidXRlID0gZnVuY3Rpb24gKG5hbWUpIHtcblx0XHRcdHJldHVybiBuYXRpdmVHZXRBdHRyaWJ1dGUuY2FsbChnZXRPZmlJbWFnZU1heWJlKHRoaXMsIG5hbWUpLCBuYW1lKTtcblx0XHR9O1xuXG5cdFx0SFRNTEltYWdlRWxlbWVudC5wcm90b3R5cGUuc2V0QXR0cmlidXRlID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG5cdFx0XHRyZXR1cm4gbmF0aXZlU2V0QXR0cmlidXRlLmNhbGwoZ2V0T2ZpSW1hZ2VNYXliZSh0aGlzLCBuYW1lKSwgbmFtZSwgU3RyaW5nKHZhbHVlKSk7XG5cdFx0fTtcblx0fVxufVxuXG5mdW5jdGlvbiBmaXgoaW1ncywgb3B0cykge1xuXHR2YXIgc3RhcnRBdXRvTW9kZSA9ICFhdXRvTW9kZUVuYWJsZWQgJiYgIWltZ3M7XG5cdG9wdHMgPSBvcHRzIHx8IHt9O1xuXHRpbWdzID0gaW1ncyB8fCAnaW1nJztcblxuXHRpZiAoKHN1cHBvcnRzT2JqZWN0UG9zaXRpb24gJiYgIW9wdHMuc2tpcFRlc3QpIHx8ICFzdXBwb3J0c09GSSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8vIHVzZSBpbWdzIGFzIGEgc2VsZWN0b3Igb3IganVzdCBzZWxlY3QgYWxsIGltYWdlc1xuXHRpZiAoaW1ncyA9PT0gJ2ltZycpIHtcblx0XHRpbWdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ltZycpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBpbWdzID09PSAnc3RyaW5nJykge1xuXHRcdGltZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGltZ3MpO1xuXHR9IGVsc2UgaWYgKCEoJ2xlbmd0aCcgaW4gaW1ncykpIHtcblx0XHRpbWdzID0gW2ltZ3NdO1xuXHR9XG5cblx0Ly8gYXBwbHkgZml4IHRvIGFsbFxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGltZ3MubGVuZ3RoOyBpKyspIHtcblx0XHRpbWdzW2ldW09GSV0gPSBpbWdzW2ldW09GSV0gfHwge1xuXHRcdFx0c2tpcFRlc3Q6IG9wdHMuc2tpcFRlc3Rcblx0XHR9O1xuXHRcdGZpeE9uZShpbWdzW2ldKTtcblx0fVxuXG5cdGlmIChzdGFydEF1dG9Nb2RlKSB7XG5cdFx0ZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKGUpIHtcblx0XHRcdGlmIChlLnRhcmdldC50YWdOYW1lID09PSAnSU1HJykge1xuXHRcdFx0XHRmaXgoZS50YXJnZXQsIHtcblx0XHRcdFx0XHRza2lwVGVzdDogb3B0cy5za2lwVGVzdFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9LCB0cnVlKTtcblx0XHRhdXRvTW9kZUVuYWJsZWQgPSB0cnVlO1xuXHRcdGltZ3MgPSAnaW1nJzsgLy8gcmVzZXQgdG8gYSBnZW5lcmljIHNlbGVjdG9yIGZvciB3YXRjaE1RXG5cdH1cblxuXHQvLyBpZiByZXF1ZXN0ZWQsIHdhdGNoIG1lZGlhIHF1ZXJpZXMgZm9yIG9iamVjdC1maXQgY2hhbmdlXG5cdGlmIChvcHRzLndhdGNoTVEpIHtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZml4LmJpbmQobnVsbCwgaW1ncywge1xuXHRcdFx0c2tpcFRlc3Q6IG9wdHMuc2tpcFRlc3Rcblx0XHR9KSk7XG5cdH1cbn1cblxuZml4LnN1cHBvcnRzT2JqZWN0Rml0ID0gc3VwcG9ydHNPYmplY3RGaXQ7XG5maXguc3VwcG9ydHNPYmplY3RQb3NpdGlvbiA9IHN1cHBvcnRzT2JqZWN0UG9zaXRpb247XG5cbmhpamFja0F0dHJpYnV0ZXMoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmaXg7XG4iLCIhZnVuY3Rpb24ocm9vdCwgZmFjdG9yeSkge1xuICAgIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZGVmaW5lICYmIGRlZmluZS5hbWQgPyAvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUgdW5sZXNzIGFtZE1vZHVsZUlkIGlzIHNldFxuICAgIGRlZmluZShbXSwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiByb290LnN2ZzRldmVyeWJvZHkgPSBmYWN0b3J5KCk7XG4gICAgfSkgOiBcIm9iamVjdFwiID09IHR5cGVvZiBtb2R1bGUgJiYgbW9kdWxlLmV4cG9ydHMgPyAvLyBOb2RlLiBEb2VzIG5vdCB3b3JrIHdpdGggc3RyaWN0IENvbW1vbkpTLCBidXRcbiAgICAvLyBvbmx5IENvbW1vbkpTLWxpa2UgZW52aXJvbm1lbnRzIHRoYXQgc3VwcG9ydCBtb2R1bGUuZXhwb3J0cyxcbiAgICAvLyBsaWtlIE5vZGUuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOiByb290LnN2ZzRldmVyeWJvZHkgPSBmYWN0b3J5KCk7XG59KHRoaXMsIGZ1bmN0aW9uKCkge1xuICAgIC8qISBzdmc0ZXZlcnlib2R5IHYyLjEuOSB8IGdpdGh1Yi5jb20vam9uYXRoYW50bmVhbC9zdmc0ZXZlcnlib2R5ICovXG4gICAgZnVuY3Rpb24gZW1iZWQocGFyZW50LCBzdmcsIHRhcmdldCkge1xuICAgICAgICAvLyBpZiB0aGUgdGFyZ2V0IGV4aXN0c1xuICAgICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgICAgICAvLyBjcmVhdGUgYSBkb2N1bWVudCBmcmFnbWVudCB0byBob2xkIHRoZSBjb250ZW50cyBvZiB0aGUgdGFyZ2V0XG4gICAgICAgICAgICB2YXIgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksIHZpZXdCb3ggPSAhc3ZnLmhhc0F0dHJpYnV0ZShcInZpZXdCb3hcIikgJiYgdGFyZ2V0LmdldEF0dHJpYnV0ZShcInZpZXdCb3hcIik7XG4gICAgICAgICAgICAvLyBjb25kaXRpb25hbGx5IHNldCB0aGUgdmlld0JveCBvbiB0aGUgc3ZnXG4gICAgICAgICAgICB2aWV3Qm94ICYmIHN2Zy5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIHZpZXdCb3gpO1xuICAgICAgICAgICAgLy8gY29weSB0aGUgY29udGVudHMgb2YgdGhlIGNsb25lIGludG8gdGhlIGZyYWdtZW50XG4gICAgICAgICAgICBmb3IgKC8vIGNsb25lIHRoZSB0YXJnZXRcbiAgICAgICAgICAgIHZhciBjbG9uZSA9IHRhcmdldC5jbG9uZU5vZGUoITApOyBjbG9uZS5jaGlsZE5vZGVzLmxlbmd0aDsgKSB7XG4gICAgICAgICAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoY2xvbmUuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBhcHBlbmQgdGhlIGZyYWdtZW50IGludG8gdGhlIHN2Z1xuICAgICAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGZyYWdtZW50KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBsb2FkcmVhZHlzdGF0ZWNoYW5nZSh4aHIpIHtcbiAgICAgICAgLy8gbGlzdGVuIHRvIGNoYW5nZXMgaW4gdGhlIHJlcXVlc3RcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gaWYgdGhlIHJlcXVlc3QgaXMgcmVhZHlcbiAgICAgICAgICAgIGlmICg0ID09PSB4aHIucmVhZHlTdGF0ZSkge1xuICAgICAgICAgICAgICAgIC8vIGdldCB0aGUgY2FjaGVkIGh0bWwgZG9jdW1lbnRcbiAgICAgICAgICAgICAgICB2YXIgY2FjaGVkRG9jdW1lbnQgPSB4aHIuX2NhY2hlZERvY3VtZW50O1xuICAgICAgICAgICAgICAgIC8vIGVuc3VyZSB0aGUgY2FjaGVkIGh0bWwgZG9jdW1lbnQgYmFzZWQgb24gdGhlIHhociByZXNwb25zZVxuICAgICAgICAgICAgICAgIGNhY2hlZERvY3VtZW50IHx8IChjYWNoZWREb2N1bWVudCA9IHhoci5fY2FjaGVkRG9jdW1lbnQgPSBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoXCJcIiksIFxuICAgICAgICAgICAgICAgIGNhY2hlZERvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0geGhyLnJlc3BvbnNlVGV4dCwgeGhyLl9jYWNoZWRUYXJnZXQgPSB7fSksIC8vIGNsZWFyIHRoZSB4aHIgZW1iZWRzIGxpc3QgYW5kIGVtYmVkIGVhY2ggaXRlbVxuICAgICAgICAgICAgICAgIHhoci5fZW1iZWRzLnNwbGljZSgwKS5tYXAoZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBnZXQgdGhlIGNhY2hlZCB0YXJnZXRcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IHhoci5fY2FjaGVkVGFyZ2V0W2l0ZW0uaWRdO1xuICAgICAgICAgICAgICAgICAgICAvLyBlbnN1cmUgdGhlIGNhY2hlZCB0YXJnZXRcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0IHx8ICh0YXJnZXQgPSB4aHIuX2NhY2hlZFRhcmdldFtpdGVtLmlkXSA9IGNhY2hlZERvY3VtZW50LmdldEVsZW1lbnRCeUlkKGl0ZW0uaWQpKSwgXG4gICAgICAgICAgICAgICAgICAgIC8vIGVtYmVkIHRoZSB0YXJnZXQgaW50byB0aGUgc3ZnXG4gICAgICAgICAgICAgICAgICAgIGVtYmVkKGl0ZW0ucGFyZW50LCBpdGVtLnN2ZywgdGFyZ2V0KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgLy8gdGVzdCB0aGUgcmVhZHkgc3RhdGUgY2hhbmdlIGltbWVkaWF0ZWx5XG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc3ZnNGV2ZXJ5Ym9keShyYXdvcHRzKSB7XG4gICAgICAgIGZ1bmN0aW9uIG9uaW50ZXJ2YWwoKSB7XG4gICAgICAgICAgICAvLyB3aGlsZSB0aGUgaW5kZXggZXhpc3RzIGluIHRoZSBsaXZlIDx1c2U+IGNvbGxlY3Rpb25cbiAgICAgICAgICAgIGZvciAoLy8gZ2V0IHRoZSBjYWNoZWQgPHVzZT4gaW5kZXhcbiAgICAgICAgICAgIHZhciBpbmRleCA9IDA7IGluZGV4IDwgdXNlcy5sZW5ndGg7ICkge1xuICAgICAgICAgICAgICAgIC8vIGdldCB0aGUgY3VycmVudCA8dXNlPlxuICAgICAgICAgICAgICAgIHZhciB1c2UgPSB1c2VzW2luZGV4XSwgcGFyZW50ID0gdXNlLnBhcmVudE5vZGUsIHN2ZyA9IGdldFNWR0FuY2VzdG9yKHBhcmVudCksIHNyYyA9IHVzZS5nZXRBdHRyaWJ1dGUoXCJ4bGluazpocmVmXCIpIHx8IHVzZS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpO1xuICAgICAgICAgICAgICAgIGlmICghc3JjICYmIG9wdHMuYXR0cmlidXRlTmFtZSAmJiAoc3JjID0gdXNlLmdldEF0dHJpYnV0ZShvcHRzLmF0dHJpYnV0ZU5hbWUpKSwgXG4gICAgICAgICAgICAgICAgc3ZnICYmIHNyYykge1xuICAgICAgICAgICAgICAgICAgICBpZiAocG9seWZpbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghb3B0cy52YWxpZGF0ZSB8fCBvcHRzLnZhbGlkYXRlKHNyYywgc3ZnLCB1c2UpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIHRoZSA8dXNlPiBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHVzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcGFyc2UgdGhlIHNyYyBhbmQgZ2V0IHRoZSB1cmwgYW5kIGlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNyY1NwbGl0ID0gc3JjLnNwbGl0KFwiI1wiKSwgdXJsID0gc3JjU3BsaXQuc2hpZnQoKSwgaWQgPSBzcmNTcGxpdC5qb2luKFwiI1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGUgbGluayBpcyBleHRlcm5hbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1cmwubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGdldCB0aGUgY2FjaGVkIHhociByZXF1ZXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB4aHIgPSByZXF1ZXN0c1t1cmxdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBlbnN1cmUgdGhlIHhociByZXF1ZXN0IGV4aXN0c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIgfHwgKHhociA9IHJlcXVlc3RzW3VybF0gPSBuZXcgWE1MSHR0cFJlcXVlc3QoKSwgeGhyLm9wZW4oXCJHRVRcIiwgdXJsKSwgeGhyLnNlbmQoKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhoci5fZW1iZWRzID0gW10pLCAvLyBhZGQgdGhlIHN2ZyBhbmQgaWQgYXMgYW4gaXRlbSB0byB0aGUgeGhyIGVtYmVkcyBsaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhoci5fZW1iZWRzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBwYXJlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdmc6IHN2ZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgLy8gcHJlcGFyZSB0aGUgeGhyIHJlYWR5IHN0YXRlIGNoYW5nZSBldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkcmVhZHlzdGF0ZWNoYW5nZSh4aHIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVtYmVkIHRoZSBsb2NhbCBpZCBpbnRvIHRoZSBzdmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1iZWQocGFyZW50LCBzdmcsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpbmNyZWFzZSB0aGUgaW5kZXggd2hlbiB0aGUgcHJldmlvdXMgdmFsdWUgd2FzIG5vdCBcInZhbGlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArK2luZGV4LCArK251bWJlck9mU3ZnVXNlRWxlbWVudHNUb0J5cGFzcztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGluY3JlYXNlIHRoZSBpbmRleCB3aGVuIHRoZSBwcmV2aW91cyB2YWx1ZSB3YXMgbm90IFwidmFsaWRcIlxuICAgICAgICAgICAgICAgICAgICArK2luZGV4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNvbnRpbnVlIHRoZSBpbnRlcnZhbFxuICAgICAgICAgICAgKCF1c2VzLmxlbmd0aCB8fCB1c2VzLmxlbmd0aCAtIG51bWJlck9mU3ZnVXNlRWxlbWVudHNUb0J5cGFzcyA+IDApICYmIHJlcXVlc3RBbmltYXRpb25GcmFtZShvbmludGVydmFsLCA2Nyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHBvbHlmaWxsLCBvcHRzID0gT2JqZWN0KHJhd29wdHMpLCBuZXdlcklFVUEgPSAvXFxiVHJpZGVudFxcL1s1NjddXFxifFxcYk1TSUUgKD86OXwxMClcXC4wXFxiLywgd2Via2l0VUEgPSAvXFxiQXBwbGVXZWJLaXRcXC8oXFxkKylcXGIvLCBvbGRlckVkZ2VVQSA9IC9cXGJFZGdlXFwvMTJcXC4oXFxkKylcXGIvLCBlZGdlVUEgPSAvXFxiRWRnZVxcLy4oXFxkKylcXGIvLCBpbklmcmFtZSA9IHdpbmRvdy50b3AgIT09IHdpbmRvdy5zZWxmO1xuICAgICAgICBwb2x5ZmlsbCA9IFwicG9seWZpbGxcIiBpbiBvcHRzID8gb3B0cy5wb2x5ZmlsbCA6IG5ld2VySUVVQS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpIHx8IChuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKG9sZGVyRWRnZVVBKSB8fCBbXSlbMV0gPCAxMDU0NyB8fCAobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCh3ZWJraXRVQSkgfHwgW10pWzFdIDwgNTM3IHx8IGVkZ2VVQS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmIGluSWZyYW1lO1xuICAgICAgICAvLyBjcmVhdGUgeGhyIHJlcXVlc3RzIG9iamVjdFxuICAgICAgICB2YXIgcmVxdWVzdHMgPSB7fSwgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCBzZXRUaW1lb3V0LCB1c2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ1c2VcIiksIG51bWJlck9mU3ZnVXNlRWxlbWVudHNUb0J5cGFzcyA9IDA7XG4gICAgICAgIC8vIGNvbmRpdGlvbmFsbHkgc3RhcnQgdGhlIGludGVydmFsIGlmIHRoZSBwb2x5ZmlsbCBpcyBhY3RpdmVcbiAgICAgICAgcG9seWZpbGwgJiYgb25pbnRlcnZhbCgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRTVkdBbmNlc3Rvcihub2RlKSB7XG4gICAgICAgIGZvciAodmFyIHN2ZyA9IG5vZGU7IFwic3ZnXCIgIT09IHN2Zy5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpICYmIChzdmcgPSBzdmcucGFyZW50Tm9kZSk7ICkge31cbiAgICAgICAgcmV0dXJuIHN2ZztcbiAgICB9XG4gICAgcmV0dXJuIHN2ZzRldmVyeWJvZHk7XG59KTsiLCIvKiohXG4qIHRpcHB5LmpzIHY2LjMuMVxuKiAoYykgMjAxNy0yMDIxIGF0b21pa3NcbiogTUlUIExpY2Vuc2VcbiovXG5pbXBvcnQgeyBjcmVhdGVQb3BwZXIsIGFwcGx5U3R5bGVzIH0gZnJvbSAnQHBvcHBlcmpzL2NvcmUnO1xuXG52YXIgUk9VTkRfQVJST1cgPSAnPHN2ZyB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiNlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTAgNnMxLjc5Ni0uMDEzIDQuNjctMy42MTVDNS44NTEuOSA2LjkzLjAwNiA4IDBjMS4wNy0uMDA2IDIuMTQ4Ljg4NyAzLjM0MyAyLjM4NUMxNC4yMzMgNi4wMDUgMTYgNiAxNiA2SDB6XCI+PC9zdmc+JztcbnZhciBCT1hfQ0xBU1MgPSBcInRpcHB5LWJveFwiO1xudmFyIENPTlRFTlRfQ0xBU1MgPSBcInRpcHB5LWNvbnRlbnRcIjtcbnZhciBCQUNLRFJPUF9DTEFTUyA9IFwidGlwcHktYmFja2Ryb3BcIjtcbnZhciBBUlJPV19DTEFTUyA9IFwidGlwcHktYXJyb3dcIjtcbnZhciBTVkdfQVJST1dfQ0xBU1MgPSBcInRpcHB5LXN2Zy1hcnJvd1wiO1xudmFyIFRPVUNIX09QVElPTlMgPSB7XG4gIHBhc3NpdmU6IHRydWUsXG4gIGNhcHR1cmU6IHRydWVcbn07XG5cbmZ1bmN0aW9uIGhhc093blByb3BlcnR5KG9iaiwga2V5KSB7XG4gIHJldHVybiB7fS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KTtcbn1cbmZ1bmN0aW9uIGdldFZhbHVlQXRJbmRleE9yUmV0dXJuKHZhbHVlLCBpbmRleCwgZGVmYXVsdFZhbHVlKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHZhciB2ID0gdmFsdWVbaW5kZXhdO1xuICAgIHJldHVybiB2ID09IG51bGwgPyBBcnJheS5pc0FycmF5KGRlZmF1bHRWYWx1ZSkgPyBkZWZhdWx0VmFsdWVbaW5kZXhdIDogZGVmYXVsdFZhbHVlIDogdjtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cbmZ1bmN0aW9uIGlzVHlwZSh2YWx1ZSwgdHlwZSkge1xuICB2YXIgc3RyID0ge30udG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIHJldHVybiBzdHIuaW5kZXhPZignW29iamVjdCcpID09PSAwICYmIHN0ci5pbmRleE9mKHR5cGUgKyBcIl1cIikgPiAtMTtcbn1cbmZ1bmN0aW9uIGludm9rZVdpdGhBcmdzT3JSZXR1cm4odmFsdWUsIGFyZ3MpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyA/IHZhbHVlLmFwcGx5KHZvaWQgMCwgYXJncykgOiB2YWx1ZTtcbn1cbmZ1bmN0aW9uIGRlYm91bmNlKGZuLCBtcykge1xuICAvLyBBdm9pZCB3cmFwcGluZyBpbiBgc2V0VGltZW91dGAgaWYgbXMgaXMgMCBhbnl3YXlcbiAgaWYgKG1zID09PSAwKSB7XG4gICAgcmV0dXJuIGZuO1xuICB9XG5cbiAgdmFyIHRpbWVvdXQ7XG4gIHJldHVybiBmdW5jdGlvbiAoYXJnKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGZuKGFyZyk7XG4gICAgfSwgbXMpO1xuICB9O1xufVxuZnVuY3Rpb24gcmVtb3ZlUHJvcGVydGllcyhvYmosIGtleXMpIHtcbiAgdmFyIGNsb25lID0gT2JqZWN0LmFzc2lnbih7fSwgb2JqKTtcbiAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBkZWxldGUgY2xvbmVba2V5XTtcbiAgfSk7XG4gIHJldHVybiBjbG9uZTtcbn1cbmZ1bmN0aW9uIHNwbGl0QnlTcGFjZXModmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlLnNwbGl0KC9cXHMrLykuZmlsdGVyKEJvb2xlYW4pO1xufVxuZnVuY3Rpb24gbm9ybWFsaXplVG9BcnJheSh2YWx1ZSkge1xuICByZXR1cm4gW10uY29uY2F0KHZhbHVlKTtcbn1cbmZ1bmN0aW9uIHB1c2hJZlVuaXF1ZShhcnIsIHZhbHVlKSB7XG4gIGlmIChhcnIuaW5kZXhPZih2YWx1ZSkgPT09IC0xKSB7XG4gICAgYXJyLnB1c2godmFsdWUpO1xuICB9XG59XG5mdW5jdGlvbiB1bmlxdWUoYXJyKSB7XG4gIHJldHVybiBhcnIuZmlsdGVyKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgIHJldHVybiBhcnIuaW5kZXhPZihpdGVtKSA9PT0gaW5kZXg7XG4gIH0pO1xufVxuZnVuY3Rpb24gZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIHBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xufVxuZnVuY3Rpb24gYXJyYXlGcm9tKHZhbHVlKSB7XG4gIHJldHVybiBbXS5zbGljZS5jYWxsKHZhbHVlKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVVuZGVmaW5lZFByb3BzKG9iaikge1xuICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywga2V5KSB7XG4gICAgaWYgKG9ialtrZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGFjY1trZXldID0gb2JqW2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xufVxuXG5mdW5jdGlvbiBkaXYoKSB7XG4gIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudCh2YWx1ZSkge1xuICByZXR1cm4gWydFbGVtZW50JywgJ0ZyYWdtZW50J10uc29tZShmdW5jdGlvbiAodHlwZSkge1xuICAgIHJldHVybiBpc1R5cGUodmFsdWUsIHR5cGUpO1xuICB9KTtcbn1cbmZ1bmN0aW9uIGlzTm9kZUxpc3QodmFsdWUpIHtcbiAgcmV0dXJuIGlzVHlwZSh2YWx1ZSwgJ05vZGVMaXN0Jyk7XG59XG5mdW5jdGlvbiBpc01vdXNlRXZlbnQodmFsdWUpIHtcbiAgcmV0dXJuIGlzVHlwZSh2YWx1ZSwgJ01vdXNlRXZlbnQnKTtcbn1cbmZ1bmN0aW9uIGlzUmVmZXJlbmNlRWxlbWVudCh2YWx1ZSkge1xuICByZXR1cm4gISEodmFsdWUgJiYgdmFsdWUuX3RpcHB5ICYmIHZhbHVlLl90aXBweS5yZWZlcmVuY2UgPT09IHZhbHVlKTtcbn1cbmZ1bmN0aW9uIGdldEFycmF5T2ZFbGVtZW50cyh2YWx1ZSkge1xuICBpZiAoaXNFbGVtZW50KHZhbHVlKSkge1xuICAgIHJldHVybiBbdmFsdWVdO1xuICB9XG5cbiAgaWYgKGlzTm9kZUxpc3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIGFycmF5RnJvbSh2YWx1ZSk7XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gYXJyYXlGcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodmFsdWUpKTtcbn1cbmZ1bmN0aW9uIHNldFRyYW5zaXRpb25EdXJhdGlvbihlbHMsIHZhbHVlKSB7XG4gIGVscy5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgIGlmIChlbCkge1xuICAgICAgZWwuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gdmFsdWUgKyBcIm1zXCI7XG4gICAgfVxuICB9KTtcbn1cbmZ1bmN0aW9uIHNldFZpc2liaWxpdHlTdGF0ZShlbHMsIHN0YXRlKSB7XG4gIGVscy5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgIGlmIChlbCkge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKCdkYXRhLXN0YXRlJywgc3RhdGUpO1xuICAgIH1cbiAgfSk7XG59XG5mdW5jdGlvbiBnZXRPd25lckRvY3VtZW50KGVsZW1lbnRPckVsZW1lbnRzKSB7XG4gIHZhciBfZWxlbWVudCRvd25lckRvY3VtZW47XG5cbiAgdmFyIF9ub3JtYWxpemVUb0FycmF5ID0gbm9ybWFsaXplVG9BcnJheShlbGVtZW50T3JFbGVtZW50cyksXG4gICAgICBlbGVtZW50ID0gX25vcm1hbGl6ZVRvQXJyYXlbMF07IC8vIEVsZW1lbnRzIGNyZWF0ZWQgdmlhIGEgPHRlbXBsYXRlPiBoYXZlIGFuIG93bmVyRG9jdW1lbnQgd2l0aCBubyByZWZlcmVuY2UgdG8gdGhlIGJvZHlcblxuXG4gIHJldHVybiAoZWxlbWVudCA9PSBudWxsID8gdm9pZCAwIDogKF9lbGVtZW50JG93bmVyRG9jdW1lbiA9IGVsZW1lbnQub3duZXJEb2N1bWVudCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9lbGVtZW50JG93bmVyRG9jdW1lbi5ib2R5KSA/IGVsZW1lbnQub3duZXJEb2N1bWVudCA6IGRvY3VtZW50O1xufVxuZnVuY3Rpb24gaXNDdXJzb3JPdXRzaWRlSW50ZXJhY3RpdmVCb3JkZXIocG9wcGVyVHJlZURhdGEsIGV2ZW50KSB7XG4gIHZhciBjbGllbnRYID0gZXZlbnQuY2xpZW50WCxcbiAgICAgIGNsaWVudFkgPSBldmVudC5jbGllbnRZO1xuICByZXR1cm4gcG9wcGVyVHJlZURhdGEuZXZlcnkoZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgcG9wcGVyUmVjdCA9IF9yZWYucG9wcGVyUmVjdCxcbiAgICAgICAgcG9wcGVyU3RhdGUgPSBfcmVmLnBvcHBlclN0YXRlLFxuICAgICAgICBwcm9wcyA9IF9yZWYucHJvcHM7XG4gICAgdmFyIGludGVyYWN0aXZlQm9yZGVyID0gcHJvcHMuaW50ZXJhY3RpdmVCb3JkZXI7XG4gICAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHBvcHBlclN0YXRlLnBsYWNlbWVudCk7XG4gICAgdmFyIG9mZnNldERhdGEgPSBwb3BwZXJTdGF0ZS5tb2RpZmllcnNEYXRhLm9mZnNldDtcblxuICAgIGlmICghb2Zmc2V0RGF0YSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgdmFyIHRvcERpc3RhbmNlID0gYmFzZVBsYWNlbWVudCA9PT0gJ2JvdHRvbScgPyBvZmZzZXREYXRhLnRvcC55IDogMDtcbiAgICB2YXIgYm90dG9tRGlzdGFuY2UgPSBiYXNlUGxhY2VtZW50ID09PSAndG9wJyA/IG9mZnNldERhdGEuYm90dG9tLnkgOiAwO1xuICAgIHZhciBsZWZ0RGlzdGFuY2UgPSBiYXNlUGxhY2VtZW50ID09PSAncmlnaHQnID8gb2Zmc2V0RGF0YS5sZWZ0LnggOiAwO1xuICAgIHZhciByaWdodERpc3RhbmNlID0gYmFzZVBsYWNlbWVudCA9PT0gJ2xlZnQnID8gb2Zmc2V0RGF0YS5yaWdodC54IDogMDtcbiAgICB2YXIgZXhjZWVkc1RvcCA9IHBvcHBlclJlY3QudG9wIC0gY2xpZW50WSArIHRvcERpc3RhbmNlID4gaW50ZXJhY3RpdmVCb3JkZXI7XG4gICAgdmFyIGV4Y2VlZHNCb3R0b20gPSBjbGllbnRZIC0gcG9wcGVyUmVjdC5ib3R0b20gLSBib3R0b21EaXN0YW5jZSA+IGludGVyYWN0aXZlQm9yZGVyO1xuICAgIHZhciBleGNlZWRzTGVmdCA9IHBvcHBlclJlY3QubGVmdCAtIGNsaWVudFggKyBsZWZ0RGlzdGFuY2UgPiBpbnRlcmFjdGl2ZUJvcmRlcjtcbiAgICB2YXIgZXhjZWVkc1JpZ2h0ID0gY2xpZW50WCAtIHBvcHBlclJlY3QucmlnaHQgLSByaWdodERpc3RhbmNlID4gaW50ZXJhY3RpdmVCb3JkZXI7XG4gICAgcmV0dXJuIGV4Y2VlZHNUb3AgfHwgZXhjZWVkc0JvdHRvbSB8fCBleGNlZWRzTGVmdCB8fCBleGNlZWRzUmlnaHQ7XG4gIH0pO1xufVxuZnVuY3Rpb24gdXBkYXRlVHJhbnNpdGlvbkVuZExpc3RlbmVyKGJveCwgYWN0aW9uLCBsaXN0ZW5lcikge1xuICB2YXIgbWV0aG9kID0gYWN0aW9uICsgXCJFdmVudExpc3RlbmVyXCI7IC8vIHNvbWUgYnJvd3NlcnMgYXBwYXJlbnRseSBzdXBwb3J0IGB0cmFuc2l0aW9uYCAodW5wcmVmaXhlZCkgYnV0IG9ubHkgZmlyZVxuICAvLyBgd2Via2l0VHJhbnNpdGlvbkVuZGAuLi5cblxuICBbJ3RyYW5zaXRpb25lbmQnLCAnd2Via2l0VHJhbnNpdGlvbkVuZCddLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgYm94W21ldGhvZF0oZXZlbnQsIGxpc3RlbmVyKTtcbiAgfSk7XG59XG5cbnZhciBjdXJyZW50SW5wdXQgPSB7XG4gIGlzVG91Y2g6IGZhbHNlXG59O1xudmFyIGxhc3RNb3VzZU1vdmVUaW1lID0gMDtcbi8qKlxuICogV2hlbiBhIGB0b3VjaHN0YXJ0YCBldmVudCBpcyBmaXJlZCwgaXQncyBhc3N1bWVkIHRoZSB1c2VyIGlzIHVzaW5nIHRvdWNoXG4gKiBpbnB1dC4gV2UnbGwgYmluZCBhIGBtb3VzZW1vdmVgIGV2ZW50IGxpc3RlbmVyIHRvIGxpc3RlbiBmb3IgbW91c2UgaW5wdXQgaW5cbiAqIHRoZSBmdXR1cmUuIFRoaXMgd2F5LCB0aGUgYGlzVG91Y2hgIHByb3BlcnR5IGlzIGZ1bGx5IGR5bmFtaWMgYW5kIHdpbGwgaGFuZGxlXG4gKiBoeWJyaWQgZGV2aWNlcyB0aGF0IHVzZSBhIG1peCBvZiB0b3VjaCArIG1vdXNlIGlucHV0LlxuICovXG5cbmZ1bmN0aW9uIG9uRG9jdW1lbnRUb3VjaFN0YXJ0KCkge1xuICBpZiAoY3VycmVudElucHV0LmlzVG91Y2gpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjdXJyZW50SW5wdXQuaXNUb3VjaCA9IHRydWU7XG5cbiAgaWYgKHdpbmRvdy5wZXJmb3JtYW5jZSkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uRG9jdW1lbnRNb3VzZU1vdmUpO1xuICB9XG59XG4vKipcbiAqIFdoZW4gdHdvIGBtb3VzZW1vdmVgIGV2ZW50IGFyZSBmaXJlZCBjb25zZWN1dGl2ZWx5IHdpdGhpbiAyMG1zLCBpdCdzIGFzc3VtZWRcbiAqIHRoZSB1c2VyIGlzIHVzaW5nIG1vdXNlIGlucHV0IGFnYWluLiBgbW91c2Vtb3ZlYCBjYW4gZmlyZSBvbiB0b3VjaCBkZXZpY2VzIGFzXG4gKiB3ZWxsLCBidXQgdmVyeSByYXJlbHkgdGhhdCBxdWlja2x5LlxuICovXG5cbmZ1bmN0aW9uIG9uRG9jdW1lbnRNb3VzZU1vdmUoKSB7XG4gIHZhciBub3cgPSBwZXJmb3JtYW5jZS5ub3coKTtcblxuICBpZiAobm93IC0gbGFzdE1vdXNlTW92ZVRpbWUgPCAyMCkge1xuICAgIGN1cnJlbnRJbnB1dC5pc1RvdWNoID0gZmFsc2U7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Eb2N1bWVudE1vdXNlTW92ZSk7XG4gIH1cblxuICBsYXN0TW91c2VNb3ZlVGltZSA9IG5vdztcbn1cbi8qKlxuICogV2hlbiBhbiBlbGVtZW50IGlzIGluIGZvY3VzIGFuZCBoYXMgYSB0aXBweSwgbGVhdmluZyB0aGUgdGFiL3dpbmRvdyBhbmRcbiAqIHJldHVybmluZyBjYXVzZXMgaXQgdG8gc2hvdyBhZ2Fpbi4gRm9yIG1vdXNlIHVzZXJzIHRoaXMgaXMgdW5leHBlY3RlZCwgYnV0XG4gKiBmb3Iga2V5Ym9hcmQgdXNlIGl0IG1ha2VzIHNlbnNlLlxuICogVE9ETzogZmluZCBhIGJldHRlciB0ZWNobmlxdWUgdG8gc29sdmUgdGhpcyBwcm9ibGVtXG4gKi9cblxuZnVuY3Rpb24gb25XaW5kb3dCbHVyKCkge1xuICB2YXIgYWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG5cbiAgaWYgKGlzUmVmZXJlbmNlRWxlbWVudChhY3RpdmVFbGVtZW50KSkge1xuICAgIHZhciBpbnN0YW5jZSA9IGFjdGl2ZUVsZW1lbnQuX3RpcHB5O1xuXG4gICAgaWYgKGFjdGl2ZUVsZW1lbnQuYmx1ciAmJiAhaW5zdGFuY2Uuc3RhdGUuaXNWaXNpYmxlKSB7XG4gICAgICBhY3RpdmVFbGVtZW50LmJsdXIoKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIGJpbmRHbG9iYWxFdmVudExpc3RlbmVycygpIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIG9uRG9jdW1lbnRUb3VjaFN0YXJ0LCBUT1VDSF9PUFRJT05TKTtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBvbldpbmRvd0JsdXIpO1xufVxuXG52YXIgaXNCcm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJztcbnZhciB1YSA9IGlzQnJvd3NlciA/IG5hdmlnYXRvci51c2VyQWdlbnQgOiAnJztcbnZhciBpc0lFID0gL01TSUUgfFRyaWRlbnRcXC8vLnRlc3QodWEpO1xuXG5mdW5jdGlvbiBjcmVhdGVNZW1vcnlMZWFrV2FybmluZyhtZXRob2QpIHtcbiAgdmFyIHR4dCA9IG1ldGhvZCA9PT0gJ2Rlc3Ryb3knID8gJ24gYWxyZWFkeS0nIDogJyAnO1xuICByZXR1cm4gW21ldGhvZCArIFwiKCkgd2FzIGNhbGxlZCBvbiBhXCIgKyB0eHQgKyBcImRlc3Ryb3llZCBpbnN0YW5jZS4gVGhpcyBpcyBhIG5vLW9wIGJ1dFwiLCAnaW5kaWNhdGVzIGEgcG90ZW50aWFsIG1lbW9yeSBsZWFrLiddLmpvaW4oJyAnKTtcbn1cbmZ1bmN0aW9uIGNsZWFuKHZhbHVlKSB7XG4gIHZhciBzcGFjZXNBbmRUYWJzID0gL1sgXFx0XXsyLH0vZztcbiAgdmFyIGxpbmVTdGFydFdpdGhTcGFjZXMgPSAvXlsgXFx0XSovZ207XG4gIHJldHVybiB2YWx1ZS5yZXBsYWNlKHNwYWNlc0FuZFRhYnMsICcgJykucmVwbGFjZShsaW5lU3RhcnRXaXRoU3BhY2VzLCAnJykudHJpbSgpO1xufVxuXG5mdW5jdGlvbiBnZXREZXZNZXNzYWdlKG1lc3NhZ2UpIHtcbiAgcmV0dXJuIGNsZWFuKFwiXFxuICAlY3RpcHB5LmpzXFxuXFxuICAlY1wiICsgY2xlYW4obWVzc2FnZSkgKyBcIlxcblxcbiAgJWNcXHVEODNEXFx1REM3N1xcdTIwMEQgVGhpcyBpcyBhIGRldmVsb3BtZW50LW9ubHkgbWVzc2FnZS4gSXQgd2lsbCBiZSByZW1vdmVkIGluIHByb2R1Y3Rpb24uXFxuICBcIik7XG59XG5cbmZ1bmN0aW9uIGdldEZvcm1hdHRlZE1lc3NhZ2UobWVzc2FnZSkge1xuICByZXR1cm4gW2dldERldk1lc3NhZ2UobWVzc2FnZSksIC8vIHRpdGxlXG4gICdjb2xvcjogIzAwQzU4NDsgZm9udC1zaXplOiAxLjNlbTsgZm9udC13ZWlnaHQ6IGJvbGQ7JywgLy8gbWVzc2FnZVxuICAnbGluZS1oZWlnaHQ6IDEuNScsIC8vIGZvb3RlclxuICAnY29sb3I6ICNhNmEwOTU7J107XG59IC8vIEFzc3VtZSB3YXJuaW5ncyBhbmQgZXJyb3JzIG5ldmVyIGhhdmUgdGhlIHNhbWUgbWVzc2FnZVxuXG52YXIgdmlzaXRlZE1lc3NhZ2VzO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIHJlc2V0VmlzaXRlZE1lc3NhZ2VzKCk7XG59XG5cbmZ1bmN0aW9uIHJlc2V0VmlzaXRlZE1lc3NhZ2VzKCkge1xuICB2aXNpdGVkTWVzc2FnZXMgPSBuZXcgU2V0KCk7XG59XG5mdW5jdGlvbiB3YXJuV2hlbihjb25kaXRpb24sIG1lc3NhZ2UpIHtcbiAgaWYgKGNvbmRpdGlvbiAmJiAhdmlzaXRlZE1lc3NhZ2VzLmhhcyhtZXNzYWdlKSkge1xuICAgIHZhciBfY29uc29sZTtcblxuICAgIHZpc2l0ZWRNZXNzYWdlcy5hZGQobWVzc2FnZSk7XG5cbiAgICAoX2NvbnNvbGUgPSBjb25zb2xlKS53YXJuLmFwcGx5KF9jb25zb2xlLCBnZXRGb3JtYXR0ZWRNZXNzYWdlKG1lc3NhZ2UpKTtcbiAgfVxufVxuZnVuY3Rpb24gZXJyb3JXaGVuKGNvbmRpdGlvbiwgbWVzc2FnZSkge1xuICBpZiAoY29uZGl0aW9uICYmICF2aXNpdGVkTWVzc2FnZXMuaGFzKG1lc3NhZ2UpKSB7XG4gICAgdmFyIF9jb25zb2xlMjtcblxuICAgIHZpc2l0ZWRNZXNzYWdlcy5hZGQobWVzc2FnZSk7XG5cbiAgICAoX2NvbnNvbGUyID0gY29uc29sZSkuZXJyb3IuYXBwbHkoX2NvbnNvbGUyLCBnZXRGb3JtYXR0ZWRNZXNzYWdlKG1lc3NhZ2UpKTtcbiAgfVxufVxuZnVuY3Rpb24gdmFsaWRhdGVUYXJnZXRzKHRhcmdldHMpIHtcbiAgdmFyIGRpZFBhc3NGYWxzeVZhbHVlID0gIXRhcmdldHM7XG4gIHZhciBkaWRQYXNzUGxhaW5PYmplY3QgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodGFyZ2V0cykgPT09ICdbb2JqZWN0IE9iamVjdF0nICYmICF0YXJnZXRzLmFkZEV2ZW50TGlzdGVuZXI7XG4gIGVycm9yV2hlbihkaWRQYXNzRmFsc3lWYWx1ZSwgWyd0aXBweSgpIHdhcyBwYXNzZWQnLCAnYCcgKyBTdHJpbmcodGFyZ2V0cykgKyAnYCcsICdhcyBpdHMgdGFyZ2V0cyAoZmlyc3QpIGFyZ3VtZW50LiBWYWxpZCB0eXBlcyBhcmU6IFN0cmluZywgRWxlbWVudCwnLCAnRWxlbWVudFtdLCBvciBOb2RlTGlzdC4nXS5qb2luKCcgJykpO1xuICBlcnJvcldoZW4oZGlkUGFzc1BsYWluT2JqZWN0LCBbJ3RpcHB5KCkgd2FzIHBhc3NlZCBhIHBsYWluIG9iamVjdCB3aGljaCBpcyBub3Qgc3VwcG9ydGVkIGFzIGFuIGFyZ3VtZW50JywgJ2ZvciB2aXJ0dWFsIHBvc2l0aW9uaW5nLiBVc2UgcHJvcHMuZ2V0UmVmZXJlbmNlQ2xpZW50UmVjdCBpbnN0ZWFkLiddLmpvaW4oJyAnKSk7XG59XG5cbnZhciBwbHVnaW5Qcm9wcyA9IHtcbiAgYW5pbWF0ZUZpbGw6IGZhbHNlLFxuICBmb2xsb3dDdXJzb3I6IGZhbHNlLFxuICBpbmxpbmVQb3NpdGlvbmluZzogZmFsc2UsXG4gIHN0aWNreTogZmFsc2Vcbn07XG52YXIgcmVuZGVyUHJvcHMgPSB7XG4gIGFsbG93SFRNTDogZmFsc2UsXG4gIGFuaW1hdGlvbjogJ2ZhZGUnLFxuICBhcnJvdzogdHJ1ZSxcbiAgY29udGVudDogJycsXG4gIGluZXJ0aWE6IGZhbHNlLFxuICBtYXhXaWR0aDogMzUwLFxuICByb2xlOiAndG9vbHRpcCcsXG4gIHRoZW1lOiAnJyxcbiAgekluZGV4OiA5OTk5XG59O1xudmFyIGRlZmF1bHRQcm9wcyA9IE9iamVjdC5hc3NpZ24oe1xuICBhcHBlbmRUbzogZnVuY3Rpb24gYXBwZW5kVG8oKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmJvZHk7XG4gIH0sXG4gIGFyaWE6IHtcbiAgICBjb250ZW50OiAnYXV0bycsXG4gICAgZXhwYW5kZWQ6ICdhdXRvJ1xuICB9LFxuICBkZWxheTogMCxcbiAgZHVyYXRpb246IFszMDAsIDI1MF0sXG4gIGdldFJlZmVyZW5jZUNsaWVudFJlY3Q6IG51bGwsXG4gIGhpZGVPbkNsaWNrOiB0cnVlLFxuICBpZ25vcmVBdHRyaWJ1dGVzOiBmYWxzZSxcbiAgaW50ZXJhY3RpdmU6IGZhbHNlLFxuICBpbnRlcmFjdGl2ZUJvcmRlcjogMixcbiAgaW50ZXJhY3RpdmVEZWJvdW5jZTogMCxcbiAgbW92ZVRyYW5zaXRpb246ICcnLFxuICBvZmZzZXQ6IFswLCAxMF0sXG4gIG9uQWZ0ZXJVcGRhdGU6IGZ1bmN0aW9uIG9uQWZ0ZXJVcGRhdGUoKSB7fSxcbiAgb25CZWZvcmVVcGRhdGU6IGZ1bmN0aW9uIG9uQmVmb3JlVXBkYXRlKCkge30sXG4gIG9uQ3JlYXRlOiBmdW5jdGlvbiBvbkNyZWF0ZSgpIHt9LFxuICBvbkRlc3Ryb3k6IGZ1bmN0aW9uIG9uRGVzdHJveSgpIHt9LFxuICBvbkhpZGRlbjogZnVuY3Rpb24gb25IaWRkZW4oKSB7fSxcbiAgb25IaWRlOiBmdW5jdGlvbiBvbkhpZGUoKSB7fSxcbiAgb25Nb3VudDogZnVuY3Rpb24gb25Nb3VudCgpIHt9LFxuICBvblNob3c6IGZ1bmN0aW9uIG9uU2hvdygpIHt9LFxuICBvblNob3duOiBmdW5jdGlvbiBvblNob3duKCkge30sXG4gIG9uVHJpZ2dlcjogZnVuY3Rpb24gb25UcmlnZ2VyKCkge30sXG4gIG9uVW50cmlnZ2VyOiBmdW5jdGlvbiBvblVudHJpZ2dlcigpIHt9LFxuICBvbkNsaWNrT3V0c2lkZTogZnVuY3Rpb24gb25DbGlja091dHNpZGUoKSB7fSxcbiAgcGxhY2VtZW50OiAndG9wJyxcbiAgcGx1Z2luczogW10sXG4gIHBvcHBlck9wdGlvbnM6IHt9LFxuICByZW5kZXI6IG51bGwsXG4gIHNob3dPbkNyZWF0ZTogZmFsc2UsXG4gIHRvdWNoOiB0cnVlLFxuICB0cmlnZ2VyOiAnbW91c2VlbnRlciBmb2N1cycsXG4gIHRyaWdnZXJUYXJnZXQ6IG51bGxcbn0sIHBsdWdpblByb3BzLCB7fSwgcmVuZGVyUHJvcHMpO1xudmFyIGRlZmF1bHRLZXlzID0gT2JqZWN0LmtleXMoZGVmYXVsdFByb3BzKTtcbnZhciBzZXREZWZhdWx0UHJvcHMgPSBmdW5jdGlvbiBzZXREZWZhdWx0UHJvcHMocGFydGlhbFByb3BzKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICB2YWxpZGF0ZVByb3BzKHBhcnRpYWxQcm9wcywgW10pO1xuICB9XG5cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhwYXJ0aWFsUHJvcHMpO1xuICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGRlZmF1bHRQcm9wc1trZXldID0gcGFydGlhbFByb3BzW2tleV07XG4gIH0pO1xufTtcbmZ1bmN0aW9uIGdldEV4dGVuZGVkUGFzc2VkUHJvcHMocGFzc2VkUHJvcHMpIHtcbiAgdmFyIHBsdWdpbnMgPSBwYXNzZWRQcm9wcy5wbHVnaW5zIHx8IFtdO1xuICB2YXIgcGx1Z2luUHJvcHMgPSBwbHVnaW5zLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbHVnaW4pIHtcbiAgICB2YXIgbmFtZSA9IHBsdWdpbi5uYW1lLFxuICAgICAgICBkZWZhdWx0VmFsdWUgPSBwbHVnaW4uZGVmYXVsdFZhbHVlO1xuXG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIGFjY1tuYW1lXSA9IHBhc3NlZFByb3BzW25hbWVdICE9PSB1bmRlZmluZWQgPyBwYXNzZWRQcm9wc1tuYW1lXSA6IGRlZmF1bHRWYWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBwYXNzZWRQcm9wcywge30sIHBsdWdpblByb3BzKTtcbn1cbmZ1bmN0aW9uIGdldERhdGFBdHRyaWJ1dGVQcm9wcyhyZWZlcmVuY2UsIHBsdWdpbnMpIHtcbiAgdmFyIHByb3BLZXlzID0gcGx1Z2lucyA/IE9iamVjdC5rZXlzKGdldEV4dGVuZGVkUGFzc2VkUHJvcHMoT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdFByb3BzLCB7XG4gICAgcGx1Z2luczogcGx1Z2luc1xuICB9KSkpIDogZGVmYXVsdEtleXM7XG4gIHZhciBwcm9wcyA9IHByb3BLZXlzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBrZXkpIHtcbiAgICB2YXIgdmFsdWVBc1N0cmluZyA9IChyZWZlcmVuY2UuZ2V0QXR0cmlidXRlKFwiZGF0YS10aXBweS1cIiArIGtleSkgfHwgJycpLnRyaW0oKTtcblxuICAgIGlmICghdmFsdWVBc1N0cmluZykge1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9XG5cbiAgICBpZiAoa2V5ID09PSAnY29udGVudCcpIHtcbiAgICAgIGFjY1trZXldID0gdmFsdWVBc1N0cmluZztcbiAgICB9IGVsc2Uge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYWNjW2tleV0gPSBKU09OLnBhcnNlKHZhbHVlQXNTdHJpbmcpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBhY2Nba2V5XSA9IHZhbHVlQXNTdHJpbmc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuICByZXR1cm4gcHJvcHM7XG59XG5mdW5jdGlvbiBldmFsdWF0ZVByb3BzKHJlZmVyZW5jZSwgcHJvcHMpIHtcbiAgdmFyIG91dCA9IE9iamVjdC5hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgY29udGVudDogaW52b2tlV2l0aEFyZ3NPclJldHVybihwcm9wcy5jb250ZW50LCBbcmVmZXJlbmNlXSlcbiAgfSwgcHJvcHMuaWdub3JlQXR0cmlidXRlcyA/IHt9IDogZ2V0RGF0YUF0dHJpYnV0ZVByb3BzKHJlZmVyZW5jZSwgcHJvcHMucGx1Z2lucykpO1xuICBvdXQuYXJpYSA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRQcm9wcy5hcmlhLCB7fSwgb3V0LmFyaWEpO1xuICBvdXQuYXJpYSA9IHtcbiAgICBleHBhbmRlZDogb3V0LmFyaWEuZXhwYW5kZWQgPT09ICdhdXRvJyA/IHByb3BzLmludGVyYWN0aXZlIDogb3V0LmFyaWEuZXhwYW5kZWQsXG4gICAgY29udGVudDogb3V0LmFyaWEuY29udGVudCA9PT0gJ2F1dG8nID8gcHJvcHMuaW50ZXJhY3RpdmUgPyBudWxsIDogJ2Rlc2NyaWJlZGJ5JyA6IG91dC5hcmlhLmNvbnRlbnRcbiAgfTtcbiAgcmV0dXJuIG91dDtcbn1cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcHMocGFydGlhbFByb3BzLCBwbHVnaW5zKSB7XG4gIGlmIChwYXJ0aWFsUHJvcHMgPT09IHZvaWQgMCkge1xuICAgIHBhcnRpYWxQcm9wcyA9IHt9O1xuICB9XG5cbiAgaWYgKHBsdWdpbnMgPT09IHZvaWQgMCkge1xuICAgIHBsdWdpbnMgPSBbXTtcbiAgfVxuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMocGFydGlhbFByb3BzKTtcbiAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgdmFyIG5vblBsdWdpblByb3BzID0gcmVtb3ZlUHJvcGVydGllcyhkZWZhdWx0UHJvcHMsIE9iamVjdC5rZXlzKHBsdWdpblByb3BzKSk7XG4gICAgdmFyIGRpZFBhc3NVbmtub3duUHJvcCA9ICFoYXNPd25Qcm9wZXJ0eShub25QbHVnaW5Qcm9wcywgcHJvcCk7IC8vIENoZWNrIGlmIHRoZSBwcm9wIGV4aXN0cyBpbiBgcGx1Z2luc2BcblxuICAgIGlmIChkaWRQYXNzVW5rbm93blByb3ApIHtcbiAgICAgIGRpZFBhc3NVbmtub3duUHJvcCA9IHBsdWdpbnMuZmlsdGVyKGZ1bmN0aW9uIChwbHVnaW4pIHtcbiAgICAgICAgcmV0dXJuIHBsdWdpbi5uYW1lID09PSBwcm9wO1xuICAgICAgfSkubGVuZ3RoID09PSAwO1xuICAgIH1cblxuICAgIHdhcm5XaGVuKGRpZFBhc3NVbmtub3duUHJvcCwgW1wiYFwiICsgcHJvcCArIFwiYFwiLCBcImlzIG5vdCBhIHZhbGlkIHByb3AuIFlvdSBtYXkgaGF2ZSBzcGVsbGVkIGl0IGluY29ycmVjdGx5LCBvciBpZiBpdCdzXCIsICdhIHBsdWdpbiwgZm9yZ290IHRvIHBhc3MgaXQgaW4gYW4gYXJyYXkgYXMgcHJvcHMucGx1Z2lucy4nLCAnXFxuXFxuJywgJ0FsbCBwcm9wczogaHR0cHM6Ly9hdG9taWtzLmdpdGh1Yi5pby90aXBweWpzL3Y2L2FsbC1wcm9wcy9cXG4nLCAnUGx1Z2luczogaHR0cHM6Ly9hdG9taWtzLmdpdGh1Yi5pby90aXBweWpzL3Y2L3BsdWdpbnMvJ10uam9pbignICcpKTtcbiAgfSk7XG59XG5cbnZhciBpbm5lckhUTUwgPSBmdW5jdGlvbiBpbm5lckhUTUwoKSB7XG4gIHJldHVybiAnaW5uZXJIVE1MJztcbn07XG5cbmZ1bmN0aW9uIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MKGVsZW1lbnQsIGh0bWwpIHtcbiAgZWxlbWVudFtpbm5lckhUTUwoKV0gPSBodG1sO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBcnJvd0VsZW1lbnQodmFsdWUpIHtcbiAgdmFyIGFycm93ID0gZGl2KCk7XG5cbiAgaWYgKHZhbHVlID09PSB0cnVlKSB7XG4gICAgYXJyb3cuY2xhc3NOYW1lID0gQVJST1dfQ0xBU1M7XG4gIH0gZWxzZSB7XG4gICAgYXJyb3cuY2xhc3NOYW1lID0gU1ZHX0FSUk9XX0NMQVNTO1xuXG4gICAgaWYgKGlzRWxlbWVudCh2YWx1ZSkpIHtcbiAgICAgIGFycm93LmFwcGVuZENoaWxkKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwoYXJyb3csIHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXJyb3c7XG59XG5cbmZ1bmN0aW9uIHNldENvbnRlbnQoY29udGVudCwgcHJvcHMpIHtcbiAgaWYgKGlzRWxlbWVudChwcm9wcy5jb250ZW50KSkge1xuICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MKGNvbnRlbnQsICcnKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHByb3BzLmNvbnRlbnQpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBwcm9wcy5jb250ZW50ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgaWYgKHByb3BzLmFsbG93SFRNTCkge1xuICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwoY29udGVudCwgcHJvcHMuY29udGVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRlbnQudGV4dENvbnRlbnQgPSBwcm9wcy5jb250ZW50O1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gZ2V0Q2hpbGRyZW4ocG9wcGVyKSB7XG4gIHZhciBib3ggPSBwb3BwZXIuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gIHZhciBib3hDaGlsZHJlbiA9IGFycmF5RnJvbShib3guY2hpbGRyZW4pO1xuICByZXR1cm4ge1xuICAgIGJveDogYm94LFxuICAgIGNvbnRlbnQ6IGJveENoaWxkcmVuLmZpbmQoZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIHJldHVybiBub2RlLmNsYXNzTGlzdC5jb250YWlucyhDT05URU5UX0NMQVNTKTtcbiAgICB9KSxcbiAgICBhcnJvdzogYm94Q2hpbGRyZW4uZmluZChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgcmV0dXJuIG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKEFSUk9XX0NMQVNTKSB8fCBub2RlLmNsYXNzTGlzdC5jb250YWlucyhTVkdfQVJST1dfQ0xBU1MpO1xuICAgIH0pLFxuICAgIGJhY2tkcm9wOiBib3hDaGlsZHJlbi5maW5kKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICByZXR1cm4gbm9kZS5jbGFzc0xpc3QuY29udGFpbnMoQkFDS0RST1BfQ0xBU1MpO1xuICAgIH0pXG4gIH07XG59XG5mdW5jdGlvbiByZW5kZXIoaW5zdGFuY2UpIHtcbiAgdmFyIHBvcHBlciA9IGRpdigpO1xuICB2YXIgYm94ID0gZGl2KCk7XG4gIGJveC5jbGFzc05hbWUgPSBCT1hfQ0xBU1M7XG4gIGJveC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhdGUnLCAnaGlkZGVuJyk7XG4gIGJveC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XG4gIHZhciBjb250ZW50ID0gZGl2KCk7XG4gIGNvbnRlbnQuY2xhc3NOYW1lID0gQ09OVEVOVF9DTEFTUztcbiAgY29udGVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhdGUnLCAnaGlkZGVuJyk7XG4gIHNldENvbnRlbnQoY29udGVudCwgaW5zdGFuY2UucHJvcHMpO1xuICBwb3BwZXIuYXBwZW5kQ2hpbGQoYm94KTtcbiAgYm94LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICBvblVwZGF0ZShpbnN0YW5jZS5wcm9wcywgaW5zdGFuY2UucHJvcHMpO1xuXG4gIGZ1bmN0aW9uIG9uVXBkYXRlKHByZXZQcm9wcywgbmV4dFByb3BzKSB7XG4gICAgdmFyIF9nZXRDaGlsZHJlbiA9IGdldENoaWxkcmVuKHBvcHBlciksXG4gICAgICAgIGJveCA9IF9nZXRDaGlsZHJlbi5ib3gsXG4gICAgICAgIGNvbnRlbnQgPSBfZ2V0Q2hpbGRyZW4uY29udGVudCxcbiAgICAgICAgYXJyb3cgPSBfZ2V0Q2hpbGRyZW4uYXJyb3c7XG5cbiAgICBpZiAobmV4dFByb3BzLnRoZW1lKSB7XG4gICAgICBib3guc2V0QXR0cmlidXRlKCdkYXRhLXRoZW1lJywgbmV4dFByb3BzLnRoZW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYm94LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10aGVtZScpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgbmV4dFByb3BzLmFuaW1hdGlvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGJveC5zZXRBdHRyaWJ1dGUoJ2RhdGEtYW5pbWF0aW9uJywgbmV4dFByb3BzLmFuaW1hdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJveC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtYW5pbWF0aW9uJyk7XG4gICAgfVxuXG4gICAgaWYgKG5leHRQcm9wcy5pbmVydGlhKSB7XG4gICAgICBib3guc2V0QXR0cmlidXRlKCdkYXRhLWluZXJ0aWEnLCAnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJveC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtaW5lcnRpYScpO1xuICAgIH1cblxuICAgIGJveC5zdHlsZS5tYXhXaWR0aCA9IHR5cGVvZiBuZXh0UHJvcHMubWF4V2lkdGggPT09ICdudW1iZXInID8gbmV4dFByb3BzLm1heFdpZHRoICsgXCJweFwiIDogbmV4dFByb3BzLm1heFdpZHRoO1xuXG4gICAgaWYgKG5leHRQcm9wcy5yb2xlKSB7XG4gICAgICBib3guc2V0QXR0cmlidXRlKCdyb2xlJywgbmV4dFByb3BzLnJvbGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBib3gucmVtb3ZlQXR0cmlidXRlKCdyb2xlJyk7XG4gICAgfVxuXG4gICAgaWYgKHByZXZQcm9wcy5jb250ZW50ICE9PSBuZXh0UHJvcHMuY29udGVudCB8fCBwcmV2UHJvcHMuYWxsb3dIVE1MICE9PSBuZXh0UHJvcHMuYWxsb3dIVE1MKSB7XG4gICAgICBzZXRDb250ZW50KGNvbnRlbnQsIGluc3RhbmNlLnByb3BzKTtcbiAgICB9XG5cbiAgICBpZiAobmV4dFByb3BzLmFycm93KSB7XG4gICAgICBpZiAoIWFycm93KSB7XG4gICAgICAgIGJveC5hcHBlbmRDaGlsZChjcmVhdGVBcnJvd0VsZW1lbnQobmV4dFByb3BzLmFycm93KSk7XG4gICAgICB9IGVsc2UgaWYgKHByZXZQcm9wcy5hcnJvdyAhPT0gbmV4dFByb3BzLmFycm93KSB7XG4gICAgICAgIGJveC5yZW1vdmVDaGlsZChhcnJvdyk7XG4gICAgICAgIGJveC5hcHBlbmRDaGlsZChjcmVhdGVBcnJvd0VsZW1lbnQobmV4dFByb3BzLmFycm93KSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhcnJvdykge1xuICAgICAgYm94LnJlbW92ZUNoaWxkKGFycm93KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHBvcHBlcjogcG9wcGVyLFxuICAgIG9uVXBkYXRlOiBvblVwZGF0ZVxuICB9O1xufSAvLyBSdW50aW1lIGNoZWNrIHRvIGlkZW50aWZ5IGlmIHRoZSByZW5kZXIgZnVuY3Rpb24gaXMgdGhlIGRlZmF1bHQgb25lOyB0aGlzXG4vLyB3YXkgd2UgY2FuIGFwcGx5IGRlZmF1bHQgQ1NTIHRyYW5zaXRpb25zIGxvZ2ljIGFuZCBpdCBjYW4gYmUgdHJlZS1zaGFrZW4gYXdheVxuXG5yZW5kZXIuJCR0aXBweSA9IHRydWU7XG5cbnZhciBpZENvdW50ZXIgPSAxO1xudmFyIG1vdXNlTW92ZUxpc3RlbmVycyA9IFtdOyAvLyBVc2VkIGJ5IGBoaWRlQWxsKClgXG5cbnZhciBtb3VudGVkSW5zdGFuY2VzID0gW107XG5mdW5jdGlvbiBjcmVhdGVUaXBweShyZWZlcmVuY2UsIHBhc3NlZFByb3BzKSB7XG4gIHZhciBwcm9wcyA9IGV2YWx1YXRlUHJvcHMocmVmZXJlbmNlLCBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0UHJvcHMsIHt9LCBnZXRFeHRlbmRlZFBhc3NlZFByb3BzKHJlbW92ZVVuZGVmaW5lZFByb3BzKHBhc3NlZFByb3BzKSkpKTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vIPCflJIgUHJpdmF0ZSBtZW1iZXJzXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIHZhciBzaG93VGltZW91dDtcbiAgdmFyIGhpZGVUaW1lb3V0O1xuICB2YXIgc2NoZWR1bGVIaWRlQW5pbWF0aW9uRnJhbWU7XG4gIHZhciBpc1Zpc2libGVGcm9tQ2xpY2sgPSBmYWxzZTtcbiAgdmFyIGRpZEhpZGVEdWVUb0RvY3VtZW50TW91c2VEb3duID0gZmFsc2U7XG4gIHZhciBkaWRUb3VjaE1vdmUgPSBmYWxzZTtcbiAgdmFyIGlnbm9yZU9uRmlyc3RVcGRhdGUgPSBmYWxzZTtcbiAgdmFyIGxhc3RUcmlnZ2VyRXZlbnQ7XG4gIHZhciBjdXJyZW50VHJhbnNpdGlvbkVuZExpc3RlbmVyO1xuICB2YXIgb25GaXJzdFVwZGF0ZTtcbiAgdmFyIGxpc3RlbmVycyA9IFtdO1xuICB2YXIgZGVib3VuY2VkT25Nb3VzZU1vdmUgPSBkZWJvdW5jZShvbk1vdXNlTW92ZSwgcHJvcHMuaW50ZXJhY3RpdmVEZWJvdW5jZSk7XG4gIHZhciBjdXJyZW50VGFyZ2V0OyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8g8J+UkSBQdWJsaWMgbWVtYmVyc1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICB2YXIgaWQgPSBpZENvdW50ZXIrKztcbiAgdmFyIHBvcHBlckluc3RhbmNlID0gbnVsbDtcbiAgdmFyIHBsdWdpbnMgPSB1bmlxdWUocHJvcHMucGx1Z2lucyk7XG4gIHZhciBzdGF0ZSA9IHtcbiAgICAvLyBJcyB0aGUgaW5zdGFuY2UgY3VycmVudGx5IGVuYWJsZWQ/XG4gICAgaXNFbmFibGVkOiB0cnVlLFxuICAgIC8vIElzIHRoZSB0aXBweSBjdXJyZW50bHkgc2hvd2luZyBhbmQgbm90IHRyYW5zaXRpb25pbmcgb3V0P1xuICAgIGlzVmlzaWJsZTogZmFsc2UsXG4gICAgLy8gSGFzIHRoZSBpbnN0YW5jZSBiZWVuIGRlc3Ryb3llZD9cbiAgICBpc0Rlc3Ryb3llZDogZmFsc2UsXG4gICAgLy8gSXMgdGhlIHRpcHB5IGN1cnJlbnRseSBtb3VudGVkIHRvIHRoZSBET00/XG4gICAgaXNNb3VudGVkOiBmYWxzZSxcbiAgICAvLyBIYXMgdGhlIHRpcHB5IGZpbmlzaGVkIHRyYW5zaXRpb25pbmcgaW4/XG4gICAgaXNTaG93bjogZmFsc2VcbiAgfTtcbiAgdmFyIGluc3RhbmNlID0ge1xuICAgIC8vIHByb3BlcnRpZXNcbiAgICBpZDogaWQsXG4gICAgcmVmZXJlbmNlOiByZWZlcmVuY2UsXG4gICAgcG9wcGVyOiBkaXYoKSxcbiAgICBwb3BwZXJJbnN0YW5jZTogcG9wcGVySW5zdGFuY2UsXG4gICAgcHJvcHM6IHByb3BzLFxuICAgIHN0YXRlOiBzdGF0ZSxcbiAgICBwbHVnaW5zOiBwbHVnaW5zLFxuICAgIC8vIG1ldGhvZHNcbiAgICBjbGVhckRlbGF5VGltZW91dHM6IGNsZWFyRGVsYXlUaW1lb3V0cyxcbiAgICBzZXRQcm9wczogc2V0UHJvcHMsXG4gICAgc2V0Q29udGVudDogc2V0Q29udGVudCxcbiAgICBzaG93OiBzaG93LFxuICAgIGhpZGU6IGhpZGUsXG4gICAgaGlkZVdpdGhJbnRlcmFjdGl2aXR5OiBoaWRlV2l0aEludGVyYWN0aXZpdHksXG4gICAgZW5hYmxlOiBlbmFibGUsXG4gICAgZGlzYWJsZTogZGlzYWJsZSxcbiAgICB1bm1vdW50OiB1bm1vdW50LFxuICAgIGRlc3Ryb3k6IGRlc3Ryb3lcbiAgfTsgLy8gVE9ETzogSW52ZXN0aWdhdGUgd2h5IHRoaXMgZWFybHkgcmV0dXJuIGNhdXNlcyBhIFREWiBlcnJvciBpbiB0aGUgdGVzdHMg4oCUXG4gIC8vIGl0IGRvZXNuJ3Qgc2VlbSB0byBoYXBwZW4gaW4gdGhlIGJyb3dzZXJcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cblxuICBpZiAoIXByb3BzLnJlbmRlcikge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgIGVycm9yV2hlbih0cnVlLCAncmVuZGVyKCkgZnVuY3Rpb24gaGFzIG5vdCBiZWVuIHN1cHBsaWVkLicpO1xuICAgIH1cblxuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfSAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8gSW5pdGlhbCBtdXRhdGlvbnNcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuICB2YXIgX3Byb3BzJHJlbmRlciA9IHByb3BzLnJlbmRlcihpbnN0YW5jZSksXG4gICAgICBwb3BwZXIgPSBfcHJvcHMkcmVuZGVyLnBvcHBlcixcbiAgICAgIG9uVXBkYXRlID0gX3Byb3BzJHJlbmRlci5vblVwZGF0ZTtcblxuICBwb3BwZXIuc2V0QXR0cmlidXRlKCdkYXRhLXRpcHB5LXJvb3QnLCAnJyk7XG4gIHBvcHBlci5pZCA9IFwidGlwcHktXCIgKyBpbnN0YW5jZS5pZDtcbiAgaW5zdGFuY2UucG9wcGVyID0gcG9wcGVyO1xuICByZWZlcmVuY2UuX3RpcHB5ID0gaW5zdGFuY2U7XG4gIHBvcHBlci5fdGlwcHkgPSBpbnN0YW5jZTtcbiAgdmFyIHBsdWdpbnNIb29rcyA9IHBsdWdpbnMubWFwKGZ1bmN0aW9uIChwbHVnaW4pIHtcbiAgICByZXR1cm4gcGx1Z2luLmZuKGluc3RhbmNlKTtcbiAgfSk7XG4gIHZhciBoYXNBcmlhRXhwYW5kZWQgPSByZWZlcmVuY2UuaGFzQXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJyk7XG4gIGFkZExpc3RlbmVycygpO1xuICBoYW5kbGVBcmlhRXhwYW5kZWRBdHRyaWJ1dGUoKTtcbiAgaGFuZGxlU3R5bGVzKCk7XG4gIGludm9rZUhvb2soJ29uQ3JlYXRlJywgW2luc3RhbmNlXSk7XG5cbiAgaWYgKHByb3BzLnNob3dPbkNyZWF0ZSkge1xuICAgIHNjaGVkdWxlU2hvdygpO1xuICB9IC8vIFByZXZlbnQgYSB0aXBweSB3aXRoIGEgZGVsYXkgZnJvbSBoaWRpbmcgaWYgdGhlIGN1cnNvciBsZWZ0IHRoZW4gcmV0dXJuZWRcbiAgLy8gYmVmb3JlIGl0IHN0YXJ0ZWQgaGlkaW5nXG5cblxuICBwb3BwZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoaW5zdGFuY2UucHJvcHMuaW50ZXJhY3RpdmUgJiYgaW5zdGFuY2Uuc3RhdGUuaXNWaXNpYmxlKSB7XG4gICAgICBpbnN0YW5jZS5jbGVhckRlbGF5VGltZW91dHMoKTtcbiAgICB9XG4gIH0pO1xuICBwb3BwZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChpbnN0YW5jZS5wcm9wcy5pbnRlcmFjdGl2ZSAmJiBpbnN0YW5jZS5wcm9wcy50cmlnZ2VyLmluZGV4T2YoJ21vdXNlZW50ZXInKSA+PSAwKSB7XG4gICAgICBnZXREb2N1bWVudCgpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGRlYm91bmNlZE9uTW91c2VNb3ZlKTtcbiAgICAgIGRlYm91bmNlZE9uTW91c2VNb3ZlKGV2ZW50KTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gaW5zdGFuY2U7IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyDwn5SSIFByaXZhdGUgbWV0aG9kc1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICBmdW5jdGlvbiBnZXROb3JtYWxpemVkVG91Y2hTZXR0aW5ncygpIHtcbiAgICB2YXIgdG91Y2ggPSBpbnN0YW5jZS5wcm9wcy50b3VjaDtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh0b3VjaCkgPyB0b3VjaCA6IFt0b3VjaCwgMF07XG4gIH1cblxuICBmdW5jdGlvbiBnZXRJc0N1c3RvbVRvdWNoQmVoYXZpb3IoKSB7XG4gICAgcmV0dXJuIGdldE5vcm1hbGl6ZWRUb3VjaFNldHRpbmdzKClbMF0gPT09ICdob2xkJztcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldElzRGVmYXVsdFJlbmRlckZuKCkge1xuICAgIHZhciBfaW5zdGFuY2UkcHJvcHMkcmVuZGU7XG5cbiAgICAvLyBAdHMtaWdub3JlXG4gICAgcmV0dXJuICEhKChfaW5zdGFuY2UkcHJvcHMkcmVuZGUgPSBpbnN0YW5jZS5wcm9wcy5yZW5kZXIpID09IG51bGwgPyB2b2lkIDAgOiBfaW5zdGFuY2UkcHJvcHMkcmVuZGUuJCR0aXBweSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRDdXJyZW50VGFyZ2V0KCkge1xuICAgIHJldHVybiBjdXJyZW50VGFyZ2V0IHx8IHJlZmVyZW5jZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldERvY3VtZW50KCkge1xuICAgIHZhciBwYXJlbnQgPSBnZXRDdXJyZW50VGFyZ2V0KCkucGFyZW50Tm9kZTtcbiAgICByZXR1cm4gcGFyZW50ID8gZ2V0T3duZXJEb2N1bWVudChwYXJlbnQpIDogZG9jdW1lbnQ7XG4gIH1cblxuICBmdW5jdGlvbiBnZXREZWZhdWx0VGVtcGxhdGVDaGlsZHJlbigpIHtcbiAgICByZXR1cm4gZ2V0Q2hpbGRyZW4ocG9wcGVyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldERlbGF5KGlzU2hvdykge1xuICAgIC8vIEZvciB0b3VjaCBvciBrZXlib2FyZCBpbnB1dCwgZm9yY2UgYDBgIGRlbGF5IGZvciBVWCByZWFzb25zXG4gICAgLy8gQWxzbyBpZiB0aGUgaW5zdGFuY2UgaXMgbW91bnRlZCBidXQgbm90IHZpc2libGUgKHRyYW5zaXRpb25pbmcgb3V0KSxcbiAgICAvLyBpZ25vcmUgZGVsYXlcbiAgICBpZiAoaW5zdGFuY2Uuc3RhdGUuaXNNb3VudGVkICYmICFpbnN0YW5jZS5zdGF0ZS5pc1Zpc2libGUgfHwgY3VycmVudElucHV0LmlzVG91Y2ggfHwgbGFzdFRyaWdnZXJFdmVudCAmJiBsYXN0VHJpZ2dlckV2ZW50LnR5cGUgPT09ICdmb2N1cycpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIHJldHVybiBnZXRWYWx1ZUF0SW5kZXhPclJldHVybihpbnN0YW5jZS5wcm9wcy5kZWxheSwgaXNTaG93ID8gMCA6IDEsIGRlZmF1bHRQcm9wcy5kZWxheSk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVTdHlsZXMoKSB7XG4gICAgcG9wcGVyLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBpbnN0YW5jZS5wcm9wcy5pbnRlcmFjdGl2ZSAmJiBpbnN0YW5jZS5zdGF0ZS5pc1Zpc2libGUgPyAnJyA6ICdub25lJztcbiAgICBwb3BwZXIuc3R5bGUuekluZGV4ID0gXCJcIiArIGluc3RhbmNlLnByb3BzLnpJbmRleDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGludm9rZUhvb2soaG9vaywgYXJncywgc2hvdWxkSW52b2tlUHJvcHNIb29rKSB7XG4gICAgaWYgKHNob3VsZEludm9rZVByb3BzSG9vayA9PT0gdm9pZCAwKSB7XG4gICAgICBzaG91bGRJbnZva2VQcm9wc0hvb2sgPSB0cnVlO1xuICAgIH1cblxuICAgIHBsdWdpbnNIb29rcy5mb3JFYWNoKGZ1bmN0aW9uIChwbHVnaW5Ib29rcykge1xuICAgICAgaWYgKHBsdWdpbkhvb2tzW2hvb2tdKSB7XG4gICAgICAgIHBsdWdpbkhvb2tzW2hvb2tdLmFwcGx5KHZvaWQgMCwgYXJncyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoc2hvdWxkSW52b2tlUHJvcHNIb29rKSB7XG4gICAgICB2YXIgX2luc3RhbmNlJHByb3BzO1xuXG4gICAgICAoX2luc3RhbmNlJHByb3BzID0gaW5zdGFuY2UucHJvcHMpW2hvb2tdLmFwcGx5KF9pbnN0YW5jZSRwcm9wcywgYXJncyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlQXJpYUNvbnRlbnRBdHRyaWJ1dGUoKSB7XG4gICAgdmFyIGFyaWEgPSBpbnN0YW5jZS5wcm9wcy5hcmlhO1xuXG4gICAgaWYgKCFhcmlhLmNvbnRlbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgYXR0ciA9IFwiYXJpYS1cIiArIGFyaWEuY29udGVudDtcbiAgICB2YXIgaWQgPSBwb3BwZXIuaWQ7XG4gICAgdmFyIG5vZGVzID0gbm9ybWFsaXplVG9BcnJheShpbnN0YW5jZS5wcm9wcy50cmlnZ2VyVGFyZ2V0IHx8IHJlZmVyZW5jZSk7XG4gICAgbm9kZXMuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgdmFyIGN1cnJlbnRWYWx1ZSA9IG5vZGUuZ2V0QXR0cmlidXRlKGF0dHIpO1xuXG4gICAgICBpZiAoaW5zdGFuY2Uuc3RhdGUuaXNWaXNpYmxlKSB7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKGF0dHIsIGN1cnJlbnRWYWx1ZSA/IGN1cnJlbnRWYWx1ZSArIFwiIFwiICsgaWQgOiBpZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgbmV4dFZhbHVlID0gY3VycmVudFZhbHVlICYmIGN1cnJlbnRWYWx1ZS5yZXBsYWNlKGlkLCAnJykudHJpbSgpO1xuXG4gICAgICAgIGlmIChuZXh0VmFsdWUpIHtcbiAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShhdHRyLCBuZXh0VmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKGF0dHIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVBcmlhRXhwYW5kZWRBdHRyaWJ1dGUoKSB7XG4gICAgaWYgKGhhc0FyaWFFeHBhbmRlZCB8fCAhaW5zdGFuY2UucHJvcHMuYXJpYS5leHBhbmRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBub2RlcyA9IG5vcm1hbGl6ZVRvQXJyYXkoaW5zdGFuY2UucHJvcHMudHJpZ2dlclRhcmdldCB8fCByZWZlcmVuY2UpO1xuICAgIG5vZGVzLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5pbnRlcmFjdGl2ZSkge1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIGluc3RhbmNlLnN0YXRlLmlzVmlzaWJsZSAmJiBub2RlID09PSBnZXRDdXJyZW50VGFyZ2V0KCkgPyAndHJ1ZScgOiAnZmFsc2UnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhbnVwSW50ZXJhY3RpdmVNb3VzZUxpc3RlbmVycygpIHtcbiAgICBnZXREb2N1bWVudCgpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGRlYm91bmNlZE9uTW91c2VNb3ZlKTtcbiAgICBtb3VzZU1vdmVMaXN0ZW5lcnMgPSBtb3VzZU1vdmVMaXN0ZW5lcnMuZmlsdGVyKGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgcmV0dXJuIGxpc3RlbmVyICE9PSBkZWJvdW5jZWRPbk1vdXNlTW92ZTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRG9jdW1lbnRQcmVzcyhldmVudCkge1xuICAgIC8vIE1vdmVkIGZpbmdlciB0byBzY3JvbGwgaW5zdGVhZCBvZiBhbiBpbnRlbnRpb25hbCB0YXAgb3V0c2lkZVxuICAgIGlmIChjdXJyZW50SW5wdXQuaXNUb3VjaCkge1xuICAgICAgaWYgKGRpZFRvdWNoTW92ZSB8fCBldmVudC50eXBlID09PSAnbW91c2Vkb3duJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSAvLyBDbGlja2VkIG9uIGludGVyYWN0aXZlIHBvcHBlclxuXG5cbiAgICBpZiAoaW5zdGFuY2UucHJvcHMuaW50ZXJhY3RpdmUgJiYgcG9wcGVyLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIENsaWNrZWQgb24gdGhlIGV2ZW50IGxpc3RlbmVycyB0YXJnZXRcblxuXG4gICAgaWYgKGdldEN1cnJlbnRUYXJnZXQoKS5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICBpZiAoY3VycmVudElucHV0LmlzVG91Y2gpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoaW5zdGFuY2Uuc3RhdGUuaXNWaXNpYmxlICYmIGluc3RhbmNlLnByb3BzLnRyaWdnZXIuaW5kZXhPZignY2xpY2snKSA+PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaW52b2tlSG9vaygnb25DbGlja091dHNpZGUnLCBbaW5zdGFuY2UsIGV2ZW50XSk7XG4gICAgfVxuXG4gICAgaWYgKGluc3RhbmNlLnByb3BzLmhpZGVPbkNsaWNrID09PSB0cnVlKSB7XG4gICAgICBpbnN0YW5jZS5jbGVhckRlbGF5VGltZW91dHMoKTtcbiAgICAgIGluc3RhbmNlLmhpZGUoKTsgLy8gYG1vdXNlZG93bmAgZXZlbnQgaXMgZmlyZWQgcmlnaHQgYmVmb3JlIGBmb2N1c2AgaWYgcHJlc3NpbmcgdGhlXG4gICAgICAvLyBjdXJyZW50VGFyZ2V0LiBUaGlzIGxldHMgYSB0aXBweSB3aXRoIGBmb2N1c2AgdHJpZ2dlciBrbm93IHRoYXQgaXRcbiAgICAgIC8vIHNob3VsZCBub3Qgc2hvd1xuXG4gICAgICBkaWRIaWRlRHVlVG9Eb2N1bWVudE1vdXNlRG93biA9IHRydWU7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZGlkSGlkZUR1ZVRvRG9jdW1lbnRNb3VzZURvd24gPSBmYWxzZTtcbiAgICAgIH0pOyAvLyBUaGUgbGlzdGVuZXIgZ2V0cyBhZGRlZCBpbiBgc2NoZWR1bGVTaG93KClgLCBidXQgdGhpcyBtYXkgYmUgaGlkaW5nIGl0XG4gICAgICAvLyBiZWZvcmUgaXQgc2hvd3MsIGFuZCBoaWRlKCkncyBlYXJseSBiYWlsLW91dCBiZWhhdmlvciBjYW4gcHJldmVudCBpdFxuICAgICAgLy8gZnJvbSBiZWluZyBjbGVhbmVkIHVwXG5cbiAgICAgIGlmICghaW5zdGFuY2Uuc3RhdGUuaXNNb3VudGVkKSB7XG4gICAgICAgIHJlbW92ZURvY3VtZW50UHJlc3MoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvblRvdWNoTW92ZSgpIHtcbiAgICBkaWRUb3VjaE1vdmUgPSB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gb25Ub3VjaFN0YXJ0KCkge1xuICAgIGRpZFRvdWNoTW92ZSA9IGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkRG9jdW1lbnRQcmVzcygpIHtcbiAgICB2YXIgZG9jID0gZ2V0RG9jdW1lbnQoKTtcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgb25Eb2N1bWVudFByZXNzLCB0cnVlKTtcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBvbkRvY3VtZW50UHJlc3MsIFRPVUNIX09QVElPTlMpO1xuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgb25Ub3VjaFN0YXJ0LCBUT1VDSF9PUFRJT05TKTtcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgb25Ub3VjaE1vdmUsIFRPVUNIX09QVElPTlMpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlRG9jdW1lbnRQcmVzcygpIHtcbiAgICB2YXIgZG9jID0gZ2V0RG9jdW1lbnQoKTtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgb25Eb2N1bWVudFByZXNzLCB0cnVlKTtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBvbkRvY3VtZW50UHJlc3MsIFRPVUNIX09QVElPTlMpO1xuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgb25Ub3VjaFN0YXJ0LCBUT1VDSF9PUFRJT05TKTtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgb25Ub3VjaE1vdmUsIFRPVUNIX09QVElPTlMpO1xuICB9XG5cbiAgZnVuY3Rpb24gb25UcmFuc2l0aW9uZWRPdXQoZHVyYXRpb24sIGNhbGxiYWNrKSB7XG4gICAgb25UcmFuc2l0aW9uRW5kKGR1cmF0aW9uLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIWluc3RhbmNlLnN0YXRlLmlzVmlzaWJsZSAmJiBwb3BwZXIucGFyZW50Tm9kZSAmJiBwb3BwZXIucGFyZW50Tm9kZS5jb250YWlucyhwb3BwZXIpKSB7XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBvblRyYW5zaXRpb25lZEluKGR1cmF0aW9uLCBjYWxsYmFjaykge1xuICAgIG9uVHJhbnNpdGlvbkVuZChkdXJhdGlvbiwgY2FsbGJhY2spO1xuICB9XG5cbiAgZnVuY3Rpb24gb25UcmFuc2l0aW9uRW5kKGR1cmF0aW9uLCBjYWxsYmFjaykge1xuICAgIHZhciBib3ggPSBnZXREZWZhdWx0VGVtcGxhdGVDaGlsZHJlbigpLmJveDtcblxuICAgIGZ1bmN0aW9uIGxpc3RlbmVyKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSBib3gpIHtcbiAgICAgICAgdXBkYXRlVHJhbnNpdGlvbkVuZExpc3RlbmVyKGJveCwgJ3JlbW92ZScsIGxpc3RlbmVyKTtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9IC8vIE1ha2UgY2FsbGJhY2sgc3luY2hyb25vdXMgaWYgZHVyYXRpb24gaXMgMFxuICAgIC8vIGB0cmFuc2l0aW9uZW5kYCB3b24ndCBmaXJlIG90aGVyd2lzZVxuXG5cbiAgICBpZiAoZHVyYXRpb24gPT09IDApIHtcbiAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgIH1cblxuICAgIHVwZGF0ZVRyYW5zaXRpb25FbmRMaXN0ZW5lcihib3gsICdyZW1vdmUnLCBjdXJyZW50VHJhbnNpdGlvbkVuZExpc3RlbmVyKTtcbiAgICB1cGRhdGVUcmFuc2l0aW9uRW5kTGlzdGVuZXIoYm94LCAnYWRkJywgbGlzdGVuZXIpO1xuICAgIGN1cnJlbnRUcmFuc2l0aW9uRW5kTGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uKGV2ZW50VHlwZSwgaGFuZGxlciwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG9wdGlvbnMgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgbm9kZXMgPSBub3JtYWxpemVUb0FycmF5KGluc3RhbmNlLnByb3BzLnRyaWdnZXJUYXJnZXQgfHwgcmVmZXJlbmNlKTtcbiAgICBub2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgICAgIGxpc3RlbmVycy5wdXNoKHtcbiAgICAgICAgbm9kZTogbm9kZSxcbiAgICAgICAgZXZlbnRUeXBlOiBldmVudFR5cGUsXG4gICAgICAgIGhhbmRsZXI6IGhhbmRsZXIsXG4gICAgICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkTGlzdGVuZXJzKCkge1xuICAgIGlmIChnZXRJc0N1c3RvbVRvdWNoQmVoYXZpb3IoKSkge1xuICAgICAgb24oJ3RvdWNoc3RhcnQnLCBvblRyaWdnZXIsIHtcbiAgICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgICBvbigndG91Y2hlbmQnLCBvbk1vdXNlTGVhdmUsIHtcbiAgICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3BsaXRCeVNwYWNlcyhpbnN0YW5jZS5wcm9wcy50cmlnZ2VyKS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudFR5cGUpIHtcbiAgICAgIGlmIChldmVudFR5cGUgPT09ICdtYW51YWwnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgb24oZXZlbnRUeXBlLCBvblRyaWdnZXIpO1xuXG4gICAgICBzd2l0Y2ggKGV2ZW50VHlwZSkge1xuICAgICAgICBjYXNlICdtb3VzZWVudGVyJzpcbiAgICAgICAgICBvbignbW91c2VsZWF2ZScsIG9uTW91c2VMZWF2ZSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnZm9jdXMnOlxuICAgICAgICAgIG9uKGlzSUUgPyAnZm9jdXNvdXQnIDogJ2JsdXInLCBvbkJsdXJPckZvY3VzT3V0KTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdmb2N1c2luJzpcbiAgICAgICAgICBvbignZm9jdXNvdXQnLCBvbkJsdXJPckZvY3VzT3V0KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVycygpIHtcbiAgICBsaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAoX3JlZikge1xuICAgICAgdmFyIG5vZGUgPSBfcmVmLm5vZGUsXG4gICAgICAgICAgZXZlbnRUeXBlID0gX3JlZi5ldmVudFR5cGUsXG4gICAgICAgICAgaGFuZGxlciA9IF9yZWYuaGFuZGxlcixcbiAgICAgICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zO1xuICAgICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgfSk7XG4gICAgbGlzdGVuZXJzID0gW107XG4gIH1cblxuICBmdW5jdGlvbiBvblRyaWdnZXIoZXZlbnQpIHtcbiAgICB2YXIgX2xhc3RUcmlnZ2VyRXZlbnQ7XG5cbiAgICB2YXIgc2hvdWxkU2NoZWR1bGVDbGlja0hpZGUgPSBmYWxzZTtcblxuICAgIGlmICghaW5zdGFuY2Uuc3RhdGUuaXNFbmFibGVkIHx8IGlzRXZlbnRMaXN0ZW5lclN0b3BwZWQoZXZlbnQpIHx8IGRpZEhpZGVEdWVUb0RvY3VtZW50TW91c2VEb3duKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHdhc0ZvY3VzZWQgPSAoKF9sYXN0VHJpZ2dlckV2ZW50ID0gbGFzdFRyaWdnZXJFdmVudCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9sYXN0VHJpZ2dlckV2ZW50LnR5cGUpID09PSAnZm9jdXMnO1xuICAgIGxhc3RUcmlnZ2VyRXZlbnQgPSBldmVudDtcbiAgICBjdXJyZW50VGFyZ2V0ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICBoYW5kbGVBcmlhRXhwYW5kZWRBdHRyaWJ1dGUoKTtcblxuICAgIGlmICghaW5zdGFuY2Uuc3RhdGUuaXNWaXNpYmxlICYmIGlzTW91c2VFdmVudChldmVudCkpIHtcbiAgICAgIC8vIElmIHNjcm9sbGluZywgYG1vdXNlZW50ZXJgIGV2ZW50cyBjYW4gYmUgZmlyZWQgaWYgdGhlIGN1cnNvciBsYW5kc1xuICAgICAgLy8gb3ZlciBhIG5ldyB0YXJnZXQsIGJ1dCBgbW91c2Vtb3ZlYCBldmVudHMgZG9uJ3QgZ2V0IGZpcmVkLiBUaGlzXG4gICAgICAvLyBjYXVzZXMgaW50ZXJhY3RpdmUgdG9vbHRpcHMgdG8gZ2V0IHN0dWNrIG9wZW4gdW50aWwgdGhlIGN1cnNvciBpc1xuICAgICAgLy8gbW92ZWRcbiAgICAgIG1vdXNlTW92ZUxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgICByZXR1cm4gbGlzdGVuZXIoZXZlbnQpO1xuICAgICAgfSk7XG4gICAgfSAvLyBUb2dnbGUgc2hvdy9oaWRlIHdoZW4gY2xpY2tpbmcgY2xpY2stdHJpZ2dlcmVkIHRvb2x0aXBzXG5cblxuICAgIGlmIChldmVudC50eXBlID09PSAnY2xpY2snICYmIChpbnN0YW5jZS5wcm9wcy50cmlnZ2VyLmluZGV4T2YoJ21vdXNlZW50ZXInKSA8IDAgfHwgaXNWaXNpYmxlRnJvbUNsaWNrKSAmJiBpbnN0YW5jZS5wcm9wcy5oaWRlT25DbGljayAhPT0gZmFsc2UgJiYgaW5zdGFuY2Uuc3RhdGUuaXNWaXNpYmxlKSB7XG4gICAgICBzaG91bGRTY2hlZHVsZUNsaWNrSGlkZSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNjaGVkdWxlU2hvdyhldmVudCk7XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LnR5cGUgPT09ICdjbGljaycpIHtcbiAgICAgIGlzVmlzaWJsZUZyb21DbGljayA9ICFzaG91bGRTY2hlZHVsZUNsaWNrSGlkZTtcbiAgICB9XG5cbiAgICBpZiAoc2hvdWxkU2NoZWR1bGVDbGlja0hpZGUgJiYgIXdhc0ZvY3VzZWQpIHtcbiAgICAgIHNjaGVkdWxlSGlkZShldmVudCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25Nb3VzZU1vdmUoZXZlbnQpIHtcbiAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgIHZhciBpc0N1cnNvck92ZXJSZWZlcmVuY2VPclBvcHBlciA9IGdldEN1cnJlbnRUYXJnZXQoKS5jb250YWlucyh0YXJnZXQpIHx8IHBvcHBlci5jb250YWlucyh0YXJnZXQpO1xuXG4gICAgaWYgKGV2ZW50LnR5cGUgPT09ICdtb3VzZW1vdmUnICYmIGlzQ3Vyc29yT3ZlclJlZmVyZW5jZU9yUG9wcGVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHBvcHBlclRyZWVEYXRhID0gZ2V0TmVzdGVkUG9wcGVyVHJlZSgpLmNvbmNhdChwb3BwZXIpLm1hcChmdW5jdGlvbiAocG9wcGVyKSB7XG4gICAgICB2YXIgX2luc3RhbmNlJHBvcHBlckluc3RhO1xuXG4gICAgICB2YXIgaW5zdGFuY2UgPSBwb3BwZXIuX3RpcHB5O1xuICAgICAgdmFyIHN0YXRlID0gKF9pbnN0YW5jZSRwb3BwZXJJbnN0YSA9IGluc3RhbmNlLnBvcHBlckluc3RhbmNlKSA9PSBudWxsID8gdm9pZCAwIDogX2luc3RhbmNlJHBvcHBlckluc3RhLnN0YXRlO1xuXG4gICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBwb3BwZXJSZWN0OiBwb3BwZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgICAgcG9wcGVyU3RhdGU6IHN0YXRlLFxuICAgICAgICAgIHByb3BzOiBwcm9wc1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9KS5maWx0ZXIoQm9vbGVhbik7XG5cbiAgICBpZiAoaXNDdXJzb3JPdXRzaWRlSW50ZXJhY3RpdmVCb3JkZXIocG9wcGVyVHJlZURhdGEsIGV2ZW50KSkge1xuICAgICAgY2xlYW51cEludGVyYWN0aXZlTW91c2VMaXN0ZW5lcnMoKTtcbiAgICAgIHNjaGVkdWxlSGlkZShldmVudCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25Nb3VzZUxlYXZlKGV2ZW50KSB7XG4gICAgdmFyIHNob3VsZEJhaWwgPSBpc0V2ZW50TGlzdGVuZXJTdG9wcGVkKGV2ZW50KSB8fCBpbnN0YW5jZS5wcm9wcy50cmlnZ2VyLmluZGV4T2YoJ2NsaWNrJykgPj0gMCAmJiBpc1Zpc2libGVGcm9tQ2xpY2s7XG5cbiAgICBpZiAoc2hvdWxkQmFpbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChpbnN0YW5jZS5wcm9wcy5pbnRlcmFjdGl2ZSkge1xuICAgICAgaW5zdGFuY2UuaGlkZVdpdGhJbnRlcmFjdGl2aXR5KGV2ZW50KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzY2hlZHVsZUhpZGUoZXZlbnQpO1xuICB9XG5cbiAgZnVuY3Rpb24gb25CbHVyT3JGb2N1c091dChldmVudCkge1xuICAgIGlmIChpbnN0YW5jZS5wcm9wcy50cmlnZ2VyLmluZGV4T2YoJ2ZvY3VzaW4nKSA8IDAgJiYgZXZlbnQudGFyZ2V0ICE9PSBnZXRDdXJyZW50VGFyZ2V0KCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIElmIGZvY3VzIHdhcyBtb3ZlZCB0byB3aXRoaW4gdGhlIHBvcHBlclxuXG5cbiAgICBpZiAoaW5zdGFuY2UucHJvcHMuaW50ZXJhY3RpdmUgJiYgZXZlbnQucmVsYXRlZFRhcmdldCAmJiBwb3BwZXIuY29udGFpbnMoZXZlbnQucmVsYXRlZFRhcmdldCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzY2hlZHVsZUhpZGUoZXZlbnQpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNFdmVudExpc3RlbmVyU3RvcHBlZChldmVudCkge1xuICAgIHJldHVybiBjdXJyZW50SW5wdXQuaXNUb3VjaCA/IGdldElzQ3VzdG9tVG91Y2hCZWhhdmlvcigpICE9PSBldmVudC50eXBlLmluZGV4T2YoJ3RvdWNoJykgPj0gMCA6IGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlUG9wcGVySW5zdGFuY2UoKSB7XG4gICAgZGVzdHJveVBvcHBlckluc3RhbmNlKCk7XG4gICAgdmFyIF9pbnN0YW5jZSRwcm9wczIgPSBpbnN0YW5jZS5wcm9wcyxcbiAgICAgICAgcG9wcGVyT3B0aW9ucyA9IF9pbnN0YW5jZSRwcm9wczIucG9wcGVyT3B0aW9ucyxcbiAgICAgICAgcGxhY2VtZW50ID0gX2luc3RhbmNlJHByb3BzMi5wbGFjZW1lbnQsXG4gICAgICAgIG9mZnNldCA9IF9pbnN0YW5jZSRwcm9wczIub2Zmc2V0LFxuICAgICAgICBnZXRSZWZlcmVuY2VDbGllbnRSZWN0ID0gX2luc3RhbmNlJHByb3BzMi5nZXRSZWZlcmVuY2VDbGllbnRSZWN0LFxuICAgICAgICBtb3ZlVHJhbnNpdGlvbiA9IF9pbnN0YW5jZSRwcm9wczIubW92ZVRyYW5zaXRpb247XG4gICAgdmFyIGFycm93ID0gZ2V0SXNEZWZhdWx0UmVuZGVyRm4oKSA/IGdldENoaWxkcmVuKHBvcHBlcikuYXJyb3cgOiBudWxsO1xuICAgIHZhciBjb21wdXRlZFJlZmVyZW5jZSA9IGdldFJlZmVyZW5jZUNsaWVudFJlY3QgPyB7XG4gICAgICBnZXRCb3VuZGluZ0NsaWVudFJlY3Q6IGdldFJlZmVyZW5jZUNsaWVudFJlY3QsXG4gICAgICBjb250ZXh0RWxlbWVudDogZ2V0UmVmZXJlbmNlQ2xpZW50UmVjdC5jb250ZXh0RWxlbWVudCB8fCBnZXRDdXJyZW50VGFyZ2V0KClcbiAgICB9IDogcmVmZXJlbmNlO1xuICAgIHZhciB0aXBweU1vZGlmaWVyID0ge1xuICAgICAgbmFtZTogJyQkdGlwcHknLFxuICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgIHBoYXNlOiAnYmVmb3JlV3JpdGUnLFxuICAgICAgcmVxdWlyZXM6IFsnY29tcHV0ZVN0eWxlcyddLFxuICAgICAgZm46IGZ1bmN0aW9uIGZuKF9yZWYyKSB7XG4gICAgICAgIHZhciBzdGF0ZSA9IF9yZWYyLnN0YXRlO1xuXG4gICAgICAgIGlmIChnZXRJc0RlZmF1bHRSZW5kZXJGbigpKSB7XG4gICAgICAgICAgdmFyIF9nZXREZWZhdWx0VGVtcGxhdGVDaCA9IGdldERlZmF1bHRUZW1wbGF0ZUNoaWxkcmVuKCksXG4gICAgICAgICAgICAgIGJveCA9IF9nZXREZWZhdWx0VGVtcGxhdGVDaC5ib3g7XG5cbiAgICAgICAgICBbJ3BsYWNlbWVudCcsICdyZWZlcmVuY2UtaGlkZGVuJywgJ2VzY2FwZWQnXS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgICBpZiAoYXR0ciA9PT0gJ3BsYWNlbWVudCcpIHtcbiAgICAgICAgICAgICAgYm94LnNldEF0dHJpYnV0ZSgnZGF0YS1wbGFjZW1lbnQnLCBzdGF0ZS5wbGFjZW1lbnQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyW1wiZGF0YS1wb3BwZXItXCIgKyBhdHRyXSkge1xuICAgICAgICAgICAgICAgIGJveC5zZXRBdHRyaWJ1dGUoXCJkYXRhLVwiICsgYXR0ciwgJycpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJveC5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLVwiICsgYXR0cik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlciA9IHt9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICB2YXIgbW9kaWZpZXJzID0gW3tcbiAgICAgIG5hbWU6ICdvZmZzZXQnLFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICBvZmZzZXQ6IG9mZnNldFxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdwcmV2ZW50T3ZlcmZsb3cnLFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICBwYWRkaW5nOiB7XG4gICAgICAgICAgdG9wOiAyLFxuICAgICAgICAgIGJvdHRvbTogMixcbiAgICAgICAgICBsZWZ0OiA1LFxuICAgICAgICAgIHJpZ2h0OiA1XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBuYW1lOiAnZmxpcCcsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIHBhZGRpbmc6IDVcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBuYW1lOiAnY29tcHV0ZVN0eWxlcycsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIGFkYXB0aXZlOiAhbW92ZVRyYW5zaXRpb25cbiAgICAgIH1cbiAgICB9LCB0aXBweU1vZGlmaWVyXTtcblxuICAgIGlmIChnZXRJc0RlZmF1bHRSZW5kZXJGbigpICYmIGFycm93KSB7XG4gICAgICBtb2RpZmllcnMucHVzaCh7XG4gICAgICAgIG5hbWU6ICdhcnJvdycsXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICBlbGVtZW50OiBhcnJvdyxcbiAgICAgICAgICBwYWRkaW5nOiAzXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIG1vZGlmaWVycy5wdXNoLmFwcGx5KG1vZGlmaWVycywgKHBvcHBlck9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IHBvcHBlck9wdGlvbnMubW9kaWZpZXJzKSB8fCBbXSk7XG4gICAgaW5zdGFuY2UucG9wcGVySW5zdGFuY2UgPSBjcmVhdGVQb3BwZXIoY29tcHV0ZWRSZWZlcmVuY2UsIHBvcHBlciwgT2JqZWN0LmFzc2lnbih7fSwgcG9wcGVyT3B0aW9ucywge1xuICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgICBvbkZpcnN0VXBkYXRlOiBvbkZpcnN0VXBkYXRlLFxuICAgICAgbW9kaWZpZXJzOiBtb2RpZmllcnNcbiAgICB9KSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZXN0cm95UG9wcGVySW5zdGFuY2UoKSB7XG4gICAgaWYgKGluc3RhbmNlLnBvcHBlckluc3RhbmNlKSB7XG4gICAgICBpbnN0YW5jZS5wb3BwZXJJbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgICBpbnN0YW5jZS5wb3BwZXJJbnN0YW5jZSA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgdmFyIGFwcGVuZFRvID0gaW5zdGFuY2UucHJvcHMuYXBwZW5kVG87XG4gICAgdmFyIHBhcmVudE5vZGU7IC8vIEJ5IGRlZmF1bHQsIHdlJ2xsIGFwcGVuZCB0aGUgcG9wcGVyIHRvIHRoZSB0cmlnZ2VyVGFyZ2V0cydzIHBhcmVudE5vZGUgc29cbiAgICAvLyBpdCdzIGRpcmVjdGx5IGFmdGVyIHRoZSByZWZlcmVuY2UgZWxlbWVudCBzbyB0aGUgZWxlbWVudHMgaW5zaWRlIHRoZVxuICAgIC8vIHRpcHB5IGNhbiBiZSB0YWJiZWQgdG9cbiAgICAvLyBJZiB0aGVyZSBhcmUgY2xpcHBpbmcgaXNzdWVzLCB0aGUgdXNlciBjYW4gc3BlY2lmeSBhIGRpZmZlcmVudCBhcHBlbmRUb1xuICAgIC8vIGFuZCBlbnN1cmUgZm9jdXMgbWFuYWdlbWVudCBpcyBoYW5kbGVkIGNvcnJlY3RseSBtYW51YWxseVxuXG4gICAgdmFyIG5vZGUgPSBnZXRDdXJyZW50VGFyZ2V0KCk7XG5cbiAgICBpZiAoaW5zdGFuY2UucHJvcHMuaW50ZXJhY3RpdmUgJiYgYXBwZW5kVG8gPT09IGRlZmF1bHRQcm9wcy5hcHBlbmRUbyB8fCBhcHBlbmRUbyA9PT0gJ3BhcmVudCcpIHtcbiAgICAgIHBhcmVudE5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcmVudE5vZGUgPSBpbnZva2VXaXRoQXJnc09yUmV0dXJuKGFwcGVuZFRvLCBbbm9kZV0pO1xuICAgIH0gLy8gVGhlIHBvcHBlciBlbGVtZW50IG5lZWRzIHRvIGV4aXN0IG9uIHRoZSBET00gYmVmb3JlIGl0cyBwb3NpdGlvbiBjYW4gYmVcbiAgICAvLyB1cGRhdGVkIGFzIFBvcHBlciBuZWVkcyB0byByZWFkIGl0cyBkaW1lbnNpb25zXG5cblxuICAgIGlmICghcGFyZW50Tm9kZS5jb250YWlucyhwb3BwZXIpKSB7XG4gICAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKHBvcHBlcik7XG4gICAgfVxuXG4gICAgY3JlYXRlUG9wcGVySW5zdGFuY2UoKTtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgLy8gQWNjZXNzaWJpbGl0eSBjaGVja1xuICAgICAgd2FybldoZW4oaW5zdGFuY2UucHJvcHMuaW50ZXJhY3RpdmUgJiYgYXBwZW5kVG8gPT09IGRlZmF1bHRQcm9wcy5hcHBlbmRUbyAmJiBub2RlLm5leHRFbGVtZW50U2libGluZyAhPT0gcG9wcGVyLCBbJ0ludGVyYWN0aXZlIHRpcHB5IGVsZW1lbnQgbWF5IG5vdCBiZSBhY2Nlc3NpYmxlIHZpYSBrZXlib2FyZCcsICduYXZpZ2F0aW9uIGJlY2F1c2UgaXQgaXMgbm90IGRpcmVjdGx5IGFmdGVyIHRoZSByZWZlcmVuY2UgZWxlbWVudCcsICdpbiB0aGUgRE9NIHNvdXJjZSBvcmRlci4nLCAnXFxuXFxuJywgJ1VzaW5nIGEgd3JhcHBlciA8ZGl2PiBvciA8c3Bhbj4gdGFnIGFyb3VuZCB0aGUgcmVmZXJlbmNlIGVsZW1lbnQnLCAnc29sdmVzIHRoaXMgYnkgY3JlYXRpbmcgYSBuZXcgcGFyZW50Tm9kZSBjb250ZXh0LicsICdcXG5cXG4nLCAnU3BlY2lmeWluZyBgYXBwZW5kVG86IGRvY3VtZW50LmJvZHlgIHNpbGVuY2VzIHRoaXMgd2FybmluZywgYnV0IGl0JywgJ2Fzc3VtZXMgeW91IGFyZSB1c2luZyBhIGZvY3VzIG1hbmFnZW1lbnQgc29sdXRpb24gdG8gaGFuZGxlJywgJ2tleWJvYXJkIG5hdmlnYXRpb24uJywgJ1xcblxcbicsICdTZWU6IGh0dHBzOi8vYXRvbWlrcy5naXRodWIuaW8vdGlwcHlqcy92Ni9hY2Nlc3NpYmlsaXR5LyNpbnRlcmFjdGl2aXR5J10uam9pbignICcpKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXROZXN0ZWRQb3BwZXJUcmVlKCkge1xuICAgIHJldHVybiBhcnJheUZyb20ocG9wcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRpcHB5LXJvb3RdJykpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2NoZWR1bGVTaG93KGV2ZW50KSB7XG4gICAgaW5zdGFuY2UuY2xlYXJEZWxheVRpbWVvdXRzKCk7XG5cbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGludm9rZUhvb2soJ29uVHJpZ2dlcicsIFtpbnN0YW5jZSwgZXZlbnRdKTtcbiAgICB9XG5cbiAgICBhZGREb2N1bWVudFByZXNzKCk7XG4gICAgdmFyIGRlbGF5ID0gZ2V0RGVsYXkodHJ1ZSk7XG5cbiAgICB2YXIgX2dldE5vcm1hbGl6ZWRUb3VjaFNlID0gZ2V0Tm9ybWFsaXplZFRvdWNoU2V0dGluZ3MoKSxcbiAgICAgICAgdG91Y2hWYWx1ZSA9IF9nZXROb3JtYWxpemVkVG91Y2hTZVswXSxcbiAgICAgICAgdG91Y2hEZWxheSA9IF9nZXROb3JtYWxpemVkVG91Y2hTZVsxXTtcblxuICAgIGlmIChjdXJyZW50SW5wdXQuaXNUb3VjaCAmJiB0b3VjaFZhbHVlID09PSAnaG9sZCcgJiYgdG91Y2hEZWxheSkge1xuICAgICAgZGVsYXkgPSB0b3VjaERlbGF5O1xuICAgIH1cblxuICAgIGlmIChkZWxheSkge1xuICAgICAgc2hvd1RpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaW5zdGFuY2Uuc2hvdygpO1xuICAgICAgfSwgZGVsYXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnN0YW5jZS5zaG93KCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2NoZWR1bGVIaWRlKGV2ZW50KSB7XG4gICAgaW5zdGFuY2UuY2xlYXJEZWxheVRpbWVvdXRzKCk7XG4gICAgaW52b2tlSG9vaygnb25VbnRyaWdnZXInLCBbaW5zdGFuY2UsIGV2ZW50XSk7XG5cbiAgICBpZiAoIWluc3RhbmNlLnN0YXRlLmlzVmlzaWJsZSkge1xuICAgICAgcmVtb3ZlRG9jdW1lbnRQcmVzcygpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gRm9yIGludGVyYWN0aXZlIHRpcHBpZXMsIHNjaGVkdWxlSGlkZSBpcyBhZGRlZCB0byBhIGRvY3VtZW50LmJvZHkgaGFuZGxlclxuICAgIC8vIGZyb20gb25Nb3VzZUxlYXZlIHNvIG11c3QgaW50ZXJjZXB0IHNjaGVkdWxlZCBoaWRlcyBmcm9tIG1vdXNlbW92ZS9sZWF2ZVxuICAgIC8vIGV2ZW50cyB3aGVuIHRyaWdnZXIgY29udGFpbnMgbW91c2VlbnRlciBhbmQgY2xpY2ssIGFuZCB0aGUgdGlwIGlzXG4gICAgLy8gY3VycmVudGx5IHNob3duIGFzIGEgcmVzdWx0IG9mIGEgY2xpY2suXG5cblxuICAgIGlmIChpbnN0YW5jZS5wcm9wcy50cmlnZ2VyLmluZGV4T2YoJ21vdXNlZW50ZXInKSA+PSAwICYmIGluc3RhbmNlLnByb3BzLnRyaWdnZXIuaW5kZXhPZignY2xpY2snKSA+PSAwICYmIFsnbW91c2VsZWF2ZScsICdtb3VzZW1vdmUnXS5pbmRleE9mKGV2ZW50LnR5cGUpID49IDAgJiYgaXNWaXNpYmxlRnJvbUNsaWNrKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGRlbGF5ID0gZ2V0RGVsYXkoZmFsc2UpO1xuXG4gICAgaWYgKGRlbGF5KSB7XG4gICAgICBoaWRlVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoaW5zdGFuY2Uuc3RhdGUuaXNWaXNpYmxlKSB7XG4gICAgICAgICAgaW5zdGFuY2UuaGlkZSgpO1xuICAgICAgICB9XG4gICAgICB9LCBkZWxheSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEZpeGVzIGEgYHRyYW5zaXRpb25lbmRgIHByb2JsZW0gd2hlbiBpdCBmaXJlcyAxIGZyYW1lIHRvb1xuICAgICAgLy8gbGF0ZSBzb21ldGltZXMsIHdlIGRvbid0IHdhbnQgaGlkZSgpIHRvIGJlIGNhbGxlZC5cbiAgICAgIHNjaGVkdWxlSGlkZUFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaW5zdGFuY2UuaGlkZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyDwn5SRIFB1YmxpYyBtZXRob2RzXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cbiAgZnVuY3Rpb24gZW5hYmxlKCkge1xuICAgIGluc3RhbmNlLnN0YXRlLmlzRW5hYmxlZCA9IHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBkaXNhYmxlKCkge1xuICAgIC8vIERpc2FibGluZyB0aGUgaW5zdGFuY2Ugc2hvdWxkIGFsc28gaGlkZSBpdFxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hdG9taWtzL3RpcHB5LmpzLXJlYWN0L2lzc3Vlcy8xMDZcbiAgICBpbnN0YW5jZS5oaWRlKCk7XG4gICAgaW5zdGFuY2Uuc3RhdGUuaXNFbmFibGVkID0gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhckRlbGF5VGltZW91dHMoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHNob3dUaW1lb3V0KTtcbiAgICBjbGVhclRpbWVvdXQoaGlkZVRpbWVvdXQpO1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHNjaGVkdWxlSGlkZUFuaW1hdGlvbkZyYW1lKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFByb3BzKHBhcnRpYWxQcm9wcykge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgd2FybldoZW4oaW5zdGFuY2Uuc3RhdGUuaXNEZXN0cm95ZWQsIGNyZWF0ZU1lbW9yeUxlYWtXYXJuaW5nKCdzZXRQcm9wcycpKTtcbiAgICB9XG5cbiAgICBpZiAoaW5zdGFuY2Uuc3RhdGUuaXNEZXN0cm95ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpbnZva2VIb29rKCdvbkJlZm9yZVVwZGF0ZScsIFtpbnN0YW5jZSwgcGFydGlhbFByb3BzXSk7XG4gICAgcmVtb3ZlTGlzdGVuZXJzKCk7XG4gICAgdmFyIHByZXZQcm9wcyA9IGluc3RhbmNlLnByb3BzO1xuICAgIHZhciBuZXh0UHJvcHMgPSBldmFsdWF0ZVByb3BzKHJlZmVyZW5jZSwgT2JqZWN0LmFzc2lnbih7fSwgaW5zdGFuY2UucHJvcHMsIHt9LCBwYXJ0aWFsUHJvcHMsIHtcbiAgICAgIGlnbm9yZUF0dHJpYnV0ZXM6IHRydWVcbiAgICB9KSk7XG4gICAgaW5zdGFuY2UucHJvcHMgPSBuZXh0UHJvcHM7XG4gICAgYWRkTGlzdGVuZXJzKCk7XG5cbiAgICBpZiAocHJldlByb3BzLmludGVyYWN0aXZlRGVib3VuY2UgIT09IG5leHRQcm9wcy5pbnRlcmFjdGl2ZURlYm91bmNlKSB7XG4gICAgICBjbGVhbnVwSW50ZXJhY3RpdmVNb3VzZUxpc3RlbmVycygpO1xuICAgICAgZGVib3VuY2VkT25Nb3VzZU1vdmUgPSBkZWJvdW5jZShvbk1vdXNlTW92ZSwgbmV4dFByb3BzLmludGVyYWN0aXZlRGVib3VuY2UpO1xuICAgIH0gLy8gRW5zdXJlIHN0YWxlIGFyaWEtZXhwYW5kZWQgYXR0cmlidXRlcyBhcmUgcmVtb3ZlZFxuXG5cbiAgICBpZiAocHJldlByb3BzLnRyaWdnZXJUYXJnZXQgJiYgIW5leHRQcm9wcy50cmlnZ2VyVGFyZ2V0KSB7XG4gICAgICBub3JtYWxpemVUb0FycmF5KHByZXZQcm9wcy50cmlnZ2VyVGFyZ2V0KS5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJyk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKG5leHRQcm9wcy50cmlnZ2VyVGFyZ2V0KSB7XG4gICAgICByZWZlcmVuY2UucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJyk7XG4gICAgfVxuXG4gICAgaGFuZGxlQXJpYUV4cGFuZGVkQXR0cmlidXRlKCk7XG4gICAgaGFuZGxlU3R5bGVzKCk7XG5cbiAgICBpZiAob25VcGRhdGUpIHtcbiAgICAgIG9uVXBkYXRlKHByZXZQcm9wcywgbmV4dFByb3BzKTtcbiAgICB9XG5cbiAgICBpZiAoaW5zdGFuY2UucG9wcGVySW5zdGFuY2UpIHtcbiAgICAgIGNyZWF0ZVBvcHBlckluc3RhbmNlKCk7IC8vIEZpeGVzIGFuIGlzc3VlIHdpdGggbmVzdGVkIHRpcHBpZXMgaWYgdGhleSBhcmUgYWxsIGdldHRpbmcgcmUtcmVuZGVyZWQsXG4gICAgICAvLyBhbmQgdGhlIG5lc3RlZCBvbmVzIGdldCByZS1yZW5kZXJlZCBmaXJzdC5cbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hdG9taWtzL3RpcHB5anMtcmVhY3QvaXNzdWVzLzE3N1xuICAgICAgLy8gVE9ETzogZmluZCBhIGNsZWFuZXIgLyBtb3JlIGVmZmljaWVudCBzb2x1dGlvbighKVxuXG4gICAgICBnZXROZXN0ZWRQb3BwZXJUcmVlKCkuZm9yRWFjaChmdW5jdGlvbiAobmVzdGVkUG9wcGVyKSB7XG4gICAgICAgIC8vIFJlYWN0IChhbmQgb3RoZXIgVUkgbGlicyBsaWtlbHkpIHJlcXVpcmVzIGEgckFGIHdyYXBwZXIgYXMgaXQgZmx1c2hlc1xuICAgICAgICAvLyBpdHMgd29yayBpbiBvbmVcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKG5lc3RlZFBvcHBlci5fdGlwcHkucG9wcGVySW5zdGFuY2UuZm9yY2VVcGRhdGUpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW52b2tlSG9vaygnb25BZnRlclVwZGF0ZScsIFtpbnN0YW5jZSwgcGFydGlhbFByb3BzXSk7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRDb250ZW50KGNvbnRlbnQpIHtcbiAgICBpbnN0YW5jZS5zZXRQcm9wcyh7XG4gICAgICBjb250ZW50OiBjb250ZW50XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBzaG93KCkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgd2FybldoZW4oaW5zdGFuY2Uuc3RhdGUuaXNEZXN0cm95ZWQsIGNyZWF0ZU1lbW9yeUxlYWtXYXJuaW5nKCdzaG93JykpO1xuICAgIH0gLy8gRWFybHkgYmFpbC1vdXRcblxuXG4gICAgdmFyIGlzQWxyZWFkeVZpc2libGUgPSBpbnN0YW5jZS5zdGF0ZS5pc1Zpc2libGU7XG4gICAgdmFyIGlzRGVzdHJveWVkID0gaW5zdGFuY2Uuc3RhdGUuaXNEZXN0cm95ZWQ7XG4gICAgdmFyIGlzRGlzYWJsZWQgPSAhaW5zdGFuY2Uuc3RhdGUuaXNFbmFibGVkO1xuICAgIHZhciBpc1RvdWNoQW5kVG91Y2hEaXNhYmxlZCA9IGN1cnJlbnRJbnB1dC5pc1RvdWNoICYmICFpbnN0YW5jZS5wcm9wcy50b3VjaDtcbiAgICB2YXIgZHVyYXRpb24gPSBnZXRWYWx1ZUF0SW5kZXhPclJldHVybihpbnN0YW5jZS5wcm9wcy5kdXJhdGlvbiwgMCwgZGVmYXVsdFByb3BzLmR1cmF0aW9uKTtcblxuICAgIGlmIChpc0FscmVhZHlWaXNpYmxlIHx8IGlzRGVzdHJveWVkIHx8IGlzRGlzYWJsZWQgfHwgaXNUb3VjaEFuZFRvdWNoRGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIE5vcm1hbGl6ZSBgZGlzYWJsZWRgIGJlaGF2aW9yIGFjcm9zcyBicm93c2Vycy5cbiAgICAvLyBGaXJlZm94IGFsbG93cyBldmVudHMgb24gZGlzYWJsZWQgZWxlbWVudHMsIGJ1dCBDaHJvbWUgZG9lc24ndC5cbiAgICAvLyBVc2luZyBhIHdyYXBwZXIgZWxlbWVudCAoaS5lLiA8c3Bhbj4pIGlzIHJlY29tbWVuZGVkLlxuXG5cbiAgICBpZiAoZ2V0Q3VycmVudFRhcmdldCgpLmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGludm9rZUhvb2soJ29uU2hvdycsIFtpbnN0YW5jZV0sIGZhbHNlKTtcblxuICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vblNob3coaW5zdGFuY2UpID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGluc3RhbmNlLnN0YXRlLmlzVmlzaWJsZSA9IHRydWU7XG5cbiAgICBpZiAoZ2V0SXNEZWZhdWx0UmVuZGVyRm4oKSkge1xuICAgICAgcG9wcGVyLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgfVxuXG4gICAgaGFuZGxlU3R5bGVzKCk7XG4gICAgYWRkRG9jdW1lbnRQcmVzcygpO1xuXG4gICAgaWYgKCFpbnN0YW5jZS5zdGF0ZS5pc01vdW50ZWQpIHtcbiAgICAgIHBvcHBlci5zdHlsZS50cmFuc2l0aW9uID0gJ25vbmUnO1xuICAgIH0gLy8gSWYgZmxpcHBpbmcgdG8gdGhlIG9wcG9zaXRlIHNpZGUgYWZ0ZXIgaGlkaW5nIGF0IGxlYXN0IG9uY2UsIHRoZVxuICAgIC8vIGFuaW1hdGlvbiB3aWxsIHVzZSB0aGUgd3JvbmcgcGxhY2VtZW50IHdpdGhvdXQgcmVzZXR0aW5nIHRoZSBkdXJhdGlvblxuXG5cbiAgICBpZiAoZ2V0SXNEZWZhdWx0UmVuZGVyRm4oKSkge1xuICAgICAgdmFyIF9nZXREZWZhdWx0VGVtcGxhdGVDaDIgPSBnZXREZWZhdWx0VGVtcGxhdGVDaGlsZHJlbigpLFxuICAgICAgICAgIGJveCA9IF9nZXREZWZhdWx0VGVtcGxhdGVDaDIuYm94LFxuICAgICAgICAgIGNvbnRlbnQgPSBfZ2V0RGVmYXVsdFRlbXBsYXRlQ2gyLmNvbnRlbnQ7XG5cbiAgICAgIHNldFRyYW5zaXRpb25EdXJhdGlvbihbYm94LCBjb250ZW50XSwgMCk7XG4gICAgfVxuXG4gICAgb25GaXJzdFVwZGF0ZSA9IGZ1bmN0aW9uIG9uRmlyc3RVcGRhdGUoKSB7XG4gICAgICB2YXIgX2luc3RhbmNlJHBvcHBlckluc3RhMjtcblxuICAgICAgaWYgKCFpbnN0YW5jZS5zdGF0ZS5pc1Zpc2libGUgfHwgaWdub3JlT25GaXJzdFVwZGF0ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlnbm9yZU9uRmlyc3RVcGRhdGUgPSB0cnVlOyAvLyByZWZsb3dcblxuICAgICAgdm9pZCBwb3BwZXIub2Zmc2V0SGVpZ2h0O1xuICAgICAgcG9wcGVyLnN0eWxlLnRyYW5zaXRpb24gPSBpbnN0YW5jZS5wcm9wcy5tb3ZlVHJhbnNpdGlvbjtcblxuICAgICAgaWYgKGdldElzRGVmYXVsdFJlbmRlckZuKCkgJiYgaW5zdGFuY2UucHJvcHMuYW5pbWF0aW9uKSB7XG4gICAgICAgIHZhciBfZ2V0RGVmYXVsdFRlbXBsYXRlQ2gzID0gZ2V0RGVmYXVsdFRlbXBsYXRlQ2hpbGRyZW4oKSxcbiAgICAgICAgICAgIF9ib3ggPSBfZ2V0RGVmYXVsdFRlbXBsYXRlQ2gzLmJveCxcbiAgICAgICAgICAgIF9jb250ZW50ID0gX2dldERlZmF1bHRUZW1wbGF0ZUNoMy5jb250ZW50O1xuXG4gICAgICAgIHNldFRyYW5zaXRpb25EdXJhdGlvbihbX2JveCwgX2NvbnRlbnRdLCBkdXJhdGlvbik7XG4gICAgICAgIHNldFZpc2liaWxpdHlTdGF0ZShbX2JveCwgX2NvbnRlbnRdLCAndmlzaWJsZScpO1xuICAgICAgfVxuXG4gICAgICBoYW5kbGVBcmlhQ29udGVudEF0dHJpYnV0ZSgpO1xuICAgICAgaGFuZGxlQXJpYUV4cGFuZGVkQXR0cmlidXRlKCk7XG4gICAgICBwdXNoSWZVbmlxdWUobW91bnRlZEluc3RhbmNlcywgaW5zdGFuY2UpOyAvLyBjZXJ0YWluIG1vZGlmaWVycyAoZS5nLiBgbWF4U2l6ZWApIHJlcXVpcmUgYSBzZWNvbmQgdXBkYXRlIGFmdGVyIHRoZVxuICAgICAgLy8gcG9wcGVyIGhhcyBiZWVuIHBvc2l0aW9uZWQgZm9yIHRoZSBmaXJzdCB0aW1lXG5cbiAgICAgIChfaW5zdGFuY2UkcG9wcGVySW5zdGEyID0gaW5zdGFuY2UucG9wcGVySW5zdGFuY2UpID09IG51bGwgPyB2b2lkIDAgOiBfaW5zdGFuY2UkcG9wcGVySW5zdGEyLmZvcmNlVXBkYXRlKCk7XG4gICAgICBpbnN0YW5jZS5zdGF0ZS5pc01vdW50ZWQgPSB0cnVlO1xuICAgICAgaW52b2tlSG9vaygnb25Nb3VudCcsIFtpbnN0YW5jZV0pO1xuXG4gICAgICBpZiAoaW5zdGFuY2UucHJvcHMuYW5pbWF0aW9uICYmIGdldElzRGVmYXVsdFJlbmRlckZuKCkpIHtcbiAgICAgICAgb25UcmFuc2l0aW9uZWRJbihkdXJhdGlvbiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGluc3RhbmNlLnN0YXRlLmlzU2hvd24gPSB0cnVlO1xuICAgICAgICAgIGludm9rZUhvb2soJ29uU2hvd24nLCBbaW5zdGFuY2VdKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIG1vdW50KCk7XG4gIH1cblxuICBmdW5jdGlvbiBoaWRlKCkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgd2FybldoZW4oaW5zdGFuY2Uuc3RhdGUuaXNEZXN0cm95ZWQsIGNyZWF0ZU1lbW9yeUxlYWtXYXJuaW5nKCdoaWRlJykpO1xuICAgIH0gLy8gRWFybHkgYmFpbC1vdXRcblxuXG4gICAgdmFyIGlzQWxyZWFkeUhpZGRlbiA9ICFpbnN0YW5jZS5zdGF0ZS5pc1Zpc2libGU7XG4gICAgdmFyIGlzRGVzdHJveWVkID0gaW5zdGFuY2Uuc3RhdGUuaXNEZXN0cm95ZWQ7XG4gICAgdmFyIGlzRGlzYWJsZWQgPSAhaW5zdGFuY2Uuc3RhdGUuaXNFbmFibGVkO1xuICAgIHZhciBkdXJhdGlvbiA9IGdldFZhbHVlQXRJbmRleE9yUmV0dXJuKGluc3RhbmNlLnByb3BzLmR1cmF0aW9uLCAxLCBkZWZhdWx0UHJvcHMuZHVyYXRpb24pO1xuXG4gICAgaWYgKGlzQWxyZWFkeUhpZGRlbiB8fCBpc0Rlc3Ryb3llZCB8fCBpc0Rpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaW52b2tlSG9vaygnb25IaWRlJywgW2luc3RhbmNlXSwgZmFsc2UpO1xuXG4gICAgaWYgKGluc3RhbmNlLnByb3BzLm9uSGlkZShpbnN0YW5jZSkgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaW5zdGFuY2Uuc3RhdGUuaXNWaXNpYmxlID0gZmFsc2U7XG4gICAgaW5zdGFuY2Uuc3RhdGUuaXNTaG93biA9IGZhbHNlO1xuICAgIGlnbm9yZU9uRmlyc3RVcGRhdGUgPSBmYWxzZTtcbiAgICBpc1Zpc2libGVGcm9tQ2xpY2sgPSBmYWxzZTtcblxuICAgIGlmIChnZXRJc0RlZmF1bHRSZW5kZXJGbigpKSB7XG4gICAgICBwb3BwZXIuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIH1cblxuICAgIGNsZWFudXBJbnRlcmFjdGl2ZU1vdXNlTGlzdGVuZXJzKCk7XG4gICAgcmVtb3ZlRG9jdW1lbnRQcmVzcygpO1xuICAgIGhhbmRsZVN0eWxlcygpO1xuXG4gICAgaWYgKGdldElzRGVmYXVsdFJlbmRlckZuKCkpIHtcbiAgICAgIHZhciBfZ2V0RGVmYXVsdFRlbXBsYXRlQ2g0ID0gZ2V0RGVmYXVsdFRlbXBsYXRlQ2hpbGRyZW4oKSxcbiAgICAgICAgICBib3ggPSBfZ2V0RGVmYXVsdFRlbXBsYXRlQ2g0LmJveCxcbiAgICAgICAgICBjb250ZW50ID0gX2dldERlZmF1bHRUZW1wbGF0ZUNoNC5jb250ZW50O1xuXG4gICAgICBpZiAoaW5zdGFuY2UucHJvcHMuYW5pbWF0aW9uKSB7XG4gICAgICAgIHNldFRyYW5zaXRpb25EdXJhdGlvbihbYm94LCBjb250ZW50XSwgZHVyYXRpb24pO1xuICAgICAgICBzZXRWaXNpYmlsaXR5U3RhdGUoW2JveCwgY29udGVudF0sICdoaWRkZW4nKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVBcmlhQ29udGVudEF0dHJpYnV0ZSgpO1xuICAgIGhhbmRsZUFyaWFFeHBhbmRlZEF0dHJpYnV0ZSgpO1xuXG4gICAgaWYgKGluc3RhbmNlLnByb3BzLmFuaW1hdGlvbikge1xuICAgICAgaWYgKGdldElzRGVmYXVsdFJlbmRlckZuKCkpIHtcbiAgICAgICAgb25UcmFuc2l0aW9uZWRPdXQoZHVyYXRpb24sIGluc3RhbmNlLnVubW91bnQpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpbnN0YW5jZS51bm1vdW50KCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGlkZVdpdGhJbnRlcmFjdGl2aXR5KGV2ZW50KSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICB3YXJuV2hlbihpbnN0YW5jZS5zdGF0ZS5pc0Rlc3Ryb3llZCwgY3JlYXRlTWVtb3J5TGVha1dhcm5pbmcoJ2hpZGVXaXRoSW50ZXJhY3Rpdml0eScpKTtcbiAgICB9XG5cbiAgICBnZXREb2N1bWVudCgpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGRlYm91bmNlZE9uTW91c2VNb3ZlKTtcbiAgICBwdXNoSWZVbmlxdWUobW91c2VNb3ZlTGlzdGVuZXJzLCBkZWJvdW5jZWRPbk1vdXNlTW92ZSk7XG4gICAgZGVib3VuY2VkT25Nb3VzZU1vdmUoZXZlbnQpO1xuICB9XG5cbiAgZnVuY3Rpb24gdW5tb3VudCgpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgIHdhcm5XaGVuKGluc3RhbmNlLnN0YXRlLmlzRGVzdHJveWVkLCBjcmVhdGVNZW1vcnlMZWFrV2FybmluZygndW5tb3VudCcpKTtcbiAgICB9XG5cbiAgICBpZiAoaW5zdGFuY2Uuc3RhdGUuaXNWaXNpYmxlKSB7XG4gICAgICBpbnN0YW5jZS5oaWRlKCk7XG4gICAgfVxuXG4gICAgaWYgKCFpbnN0YW5jZS5zdGF0ZS5pc01vdW50ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBkZXN0cm95UG9wcGVySW5zdGFuY2UoKTsgLy8gSWYgYSBwb3BwZXIgaXMgbm90IGludGVyYWN0aXZlLCBpdCB3aWxsIGJlIGFwcGVuZGVkIG91dHNpZGUgdGhlIHBvcHBlclxuICAgIC8vIHRyZWUgYnkgZGVmYXVsdC4gVGhpcyBzZWVtcyBtYWlubHkgZm9yIGludGVyYWN0aXZlIHRpcHBpZXMsIGJ1dCB3ZSBzaG91bGRcbiAgICAvLyBmaW5kIGEgd29ya2Fyb3VuZCBpZiBwb3NzaWJsZVxuXG4gICAgZ2V0TmVzdGVkUG9wcGVyVHJlZSgpLmZvckVhY2goZnVuY3Rpb24gKG5lc3RlZFBvcHBlcikge1xuICAgICAgbmVzdGVkUG9wcGVyLl90aXBweS51bm1vdW50KCk7XG4gICAgfSk7XG5cbiAgICBpZiAocG9wcGVyLnBhcmVudE5vZGUpIHtcbiAgICAgIHBvcHBlci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHBvcHBlcik7XG4gICAgfVxuXG4gICAgbW91bnRlZEluc3RhbmNlcyA9IG1vdW50ZWRJbnN0YW5jZXMuZmlsdGVyKGZ1bmN0aW9uIChpKSB7XG4gICAgICByZXR1cm4gaSAhPT0gaW5zdGFuY2U7XG4gICAgfSk7XG4gICAgaW5zdGFuY2Uuc3RhdGUuaXNNb3VudGVkID0gZmFsc2U7XG4gICAgaW52b2tlSG9vaygnb25IaWRkZW4nLCBbaW5zdGFuY2VdKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICB3YXJuV2hlbihpbnN0YW5jZS5zdGF0ZS5pc0Rlc3Ryb3llZCwgY3JlYXRlTWVtb3J5TGVha1dhcm5pbmcoJ2Rlc3Ryb3knKSk7XG4gICAgfVxuXG4gICAgaWYgKGluc3RhbmNlLnN0YXRlLmlzRGVzdHJveWVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaW5zdGFuY2UuY2xlYXJEZWxheVRpbWVvdXRzKCk7XG4gICAgaW5zdGFuY2UudW5tb3VudCgpO1xuICAgIHJlbW92ZUxpc3RlbmVycygpO1xuICAgIGRlbGV0ZSByZWZlcmVuY2UuX3RpcHB5O1xuICAgIGluc3RhbmNlLnN0YXRlLmlzRGVzdHJveWVkID0gdHJ1ZTtcbiAgICBpbnZva2VIb29rKCdvbkRlc3Ryb3knLCBbaW5zdGFuY2VdKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0aXBweSh0YXJnZXRzLCBvcHRpb25hbFByb3BzKSB7XG4gIGlmIChvcHRpb25hbFByb3BzID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25hbFByb3BzID0ge307XG4gIH1cblxuICB2YXIgcGx1Z2lucyA9IGRlZmF1bHRQcm9wcy5wbHVnaW5zLmNvbmNhdChvcHRpb25hbFByb3BzLnBsdWdpbnMgfHwgW10pO1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICB2YWxpZGF0ZVRhcmdldHModGFyZ2V0cyk7XG4gICAgdmFsaWRhdGVQcm9wcyhvcHRpb25hbFByb3BzLCBwbHVnaW5zKTtcbiAgfVxuXG4gIGJpbmRHbG9iYWxFdmVudExpc3RlbmVycygpO1xuICB2YXIgcGFzc2VkUHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25hbFByb3BzLCB7XG4gICAgcGx1Z2luczogcGx1Z2luc1xuICB9KTtcbiAgdmFyIGVsZW1lbnRzID0gZ2V0QXJyYXlPZkVsZW1lbnRzKHRhcmdldHMpO1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICB2YXIgaXNTaW5nbGVDb250ZW50RWxlbWVudCA9IGlzRWxlbWVudChwYXNzZWRQcm9wcy5jb250ZW50KTtcbiAgICB2YXIgaXNNb3JlVGhhbk9uZVJlZmVyZW5jZUVsZW1lbnQgPSBlbGVtZW50cy5sZW5ndGggPiAxO1xuICAgIHdhcm5XaGVuKGlzU2luZ2xlQ29udGVudEVsZW1lbnQgJiYgaXNNb3JlVGhhbk9uZVJlZmVyZW5jZUVsZW1lbnQsIFsndGlwcHkoKSB3YXMgcGFzc2VkIGFuIEVsZW1lbnQgYXMgdGhlIGBjb250ZW50YCBwcm9wLCBidXQgbW9yZSB0aGFuJywgJ29uZSB0aXBweSBpbnN0YW5jZSB3YXMgY3JlYXRlZCBieSB0aGlzIGludm9jYXRpb24uIFRoaXMgbWVhbnMgdGhlJywgJ2NvbnRlbnQgZWxlbWVudCB3aWxsIG9ubHkgYmUgYXBwZW5kZWQgdG8gdGhlIGxhc3QgdGlwcHkgaW5zdGFuY2UuJywgJ1xcblxcbicsICdJbnN0ZWFkLCBwYXNzIHRoZSAuaW5uZXJIVE1MIG9mIHRoZSBlbGVtZW50LCBvciB1c2UgYSBmdW5jdGlvbiB0aGF0JywgJ3JldHVybnMgYSBjbG9uZWQgdmVyc2lvbiBvZiB0aGUgZWxlbWVudCBpbnN0ZWFkLicsICdcXG5cXG4nLCAnMSkgY29udGVudDogZWxlbWVudC5pbm5lckhUTUxcXG4nLCAnMikgY29udGVudDogKCkgPT4gZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSknXS5qb2luKCcgJykpO1xuICB9XG5cbiAgdmFyIGluc3RhbmNlcyA9IGVsZW1lbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCByZWZlcmVuY2UpIHtcbiAgICB2YXIgaW5zdGFuY2UgPSByZWZlcmVuY2UgJiYgY3JlYXRlVGlwcHkocmVmZXJlbmNlLCBwYXNzZWRQcm9wcyk7XG5cbiAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgIGFjYy5wdXNoKGluc3RhbmNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWNjO1xuICB9LCBbXSk7XG4gIHJldHVybiBpc0VsZW1lbnQodGFyZ2V0cykgPyBpbnN0YW5jZXNbMF0gOiBpbnN0YW5jZXM7XG59XG5cbnRpcHB5LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcbnRpcHB5LnNldERlZmF1bHRQcm9wcyA9IHNldERlZmF1bHRQcm9wcztcbnRpcHB5LmN1cnJlbnRJbnB1dCA9IGN1cnJlbnRJbnB1dDtcbnZhciBoaWRlQWxsID0gZnVuY3Rpb24gaGlkZUFsbChfdGVtcCkge1xuICB2YXIgX3JlZiA9IF90ZW1wID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wLFxuICAgICAgZXhjbHVkZWRSZWZlcmVuY2VPckluc3RhbmNlID0gX3JlZi5leGNsdWRlLFxuICAgICAgZHVyYXRpb24gPSBfcmVmLmR1cmF0aW9uO1xuXG4gIG1vdW50ZWRJbnN0YW5jZXMuZm9yRWFjaChmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICB2YXIgaXNFeGNsdWRlZCA9IGZhbHNlO1xuXG4gICAgaWYgKGV4Y2x1ZGVkUmVmZXJlbmNlT3JJbnN0YW5jZSkge1xuICAgICAgaXNFeGNsdWRlZCA9IGlzUmVmZXJlbmNlRWxlbWVudChleGNsdWRlZFJlZmVyZW5jZU9ySW5zdGFuY2UpID8gaW5zdGFuY2UucmVmZXJlbmNlID09PSBleGNsdWRlZFJlZmVyZW5jZU9ySW5zdGFuY2UgOiBpbnN0YW5jZS5wb3BwZXIgPT09IGV4Y2x1ZGVkUmVmZXJlbmNlT3JJbnN0YW5jZS5wb3BwZXI7XG4gICAgfVxuXG4gICAgaWYgKCFpc0V4Y2x1ZGVkKSB7XG4gICAgICB2YXIgb3JpZ2luYWxEdXJhdGlvbiA9IGluc3RhbmNlLnByb3BzLmR1cmF0aW9uO1xuICAgICAgaW5zdGFuY2Uuc2V0UHJvcHMoe1xuICAgICAgICBkdXJhdGlvbjogZHVyYXRpb25cbiAgICAgIH0pO1xuICAgICAgaW5zdGFuY2UuaGlkZSgpO1xuXG4gICAgICBpZiAoIWluc3RhbmNlLnN0YXRlLmlzRGVzdHJveWVkKSB7XG4gICAgICAgIGluc3RhbmNlLnNldFByb3BzKHtcbiAgICAgICAgICBkdXJhdGlvbjogb3JpZ2luYWxEdXJhdGlvblxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufTtcblxuLy8gZXZlcnkgdGltZSB0aGUgcG9wcGVyIGlzIGRlc3Ryb3llZCAoaS5lLiBhIG5ldyB0YXJnZXQpLCByZW1vdmluZyB0aGUgc3R5bGVzXG4vLyBhbmQgY2F1c2luZyB0cmFuc2l0aW9ucyB0byBicmVhayBmb3Igc2luZ2xldG9ucyB3aGVuIHRoZSBjb25zb2xlIGlzIG9wZW4sIGJ1dFxuLy8gbW9zdCBub3RhYmx5IGZvciBub24tdHJhbnNmb3JtIHN0eWxlcyBiZWluZyB1c2VkLCBgZ3B1QWNjZWxlcmF0aW9uOiBmYWxzZWAuXG5cbnZhciBhcHBseVN0eWxlc01vZGlmaWVyID0gT2JqZWN0LmFzc2lnbih7fSwgYXBwbHlTdHlsZXMsIHtcbiAgZWZmZWN0OiBmdW5jdGlvbiBlZmZlY3QoX3JlZikge1xuICAgIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGU7XG4gICAgdmFyIGluaXRpYWxTdHlsZXMgPSB7XG4gICAgICBwb3BwZXI6IHtcbiAgICAgICAgcG9zaXRpb246IHN0YXRlLm9wdGlvbnMuc3RyYXRlZ3ksXG4gICAgICAgIGxlZnQ6ICcwJyxcbiAgICAgICAgdG9wOiAnMCcsXG4gICAgICAgIG1hcmdpbjogJzAnXG4gICAgICB9LFxuICAgICAgYXJyb3c6IHtcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZSdcbiAgICAgIH0sXG4gICAgICByZWZlcmVuY2U6IHt9XG4gICAgfTtcbiAgICBPYmplY3QuYXNzaWduKHN0YXRlLmVsZW1lbnRzLnBvcHBlci5zdHlsZSwgaW5pdGlhbFN0eWxlcy5wb3BwZXIpO1xuICAgIHN0YXRlLnN0eWxlcyA9IGluaXRpYWxTdHlsZXM7XG5cbiAgICBpZiAoc3RhdGUuZWxlbWVudHMuYXJyb3cpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24oc3RhdGUuZWxlbWVudHMuYXJyb3cuc3R5bGUsIGluaXRpYWxTdHlsZXMuYXJyb3cpO1xuICAgIH0gLy8gaW50ZW50aW9uYWxseSByZXR1cm4gbm8gY2xlYW51cCBmdW5jdGlvblxuICAgIC8vIHJldHVybiAoKSA9PiB7IC4uLiB9XG5cbiAgfVxufSk7XG5cbnZhciBjcmVhdGVTaW5nbGV0b24gPSBmdW5jdGlvbiBjcmVhdGVTaW5nbGV0b24odGlwcHlJbnN0YW5jZXMsIG9wdGlvbmFsUHJvcHMpIHtcbiAgdmFyIF9vcHRpb25hbFByb3BzJHBvcHBlcjtcblxuICBpZiAob3B0aW9uYWxQcm9wcyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9uYWxQcm9wcyA9IHt9O1xuICB9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIGVycm9yV2hlbighQXJyYXkuaXNBcnJheSh0aXBweUluc3RhbmNlcyksIFsnVGhlIGZpcnN0IGFyZ3VtZW50IHBhc3NlZCB0byBjcmVhdGVTaW5nbGV0b24oKSBtdXN0IGJlIGFuIGFycmF5IG9mJywgJ3RpcHB5IGluc3RhbmNlcy4gVGhlIHBhc3NlZCB2YWx1ZSB3YXMnLCBTdHJpbmcodGlwcHlJbnN0YW5jZXMpXS5qb2luKCcgJykpO1xuICB9XG5cbiAgdmFyIGluZGl2aWR1YWxJbnN0YW5jZXMgPSB0aXBweUluc3RhbmNlcztcbiAgdmFyIHJlZmVyZW5jZXMgPSBbXTtcbiAgdmFyIGN1cnJlbnRUYXJnZXQ7XG4gIHZhciBvdmVycmlkZXMgPSBvcHRpb25hbFByb3BzLm92ZXJyaWRlcztcbiAgdmFyIGludGVyY2VwdFNldFByb3BzQ2xlYW51cHMgPSBbXTtcbiAgdmFyIHNob3duT25DcmVhdGUgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBzZXRSZWZlcmVuY2VzKCkge1xuICAgIHJlZmVyZW5jZXMgPSBpbmRpdmlkdWFsSW5zdGFuY2VzLm1hcChmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICAgIHJldHVybiBpbnN0YW5jZS5yZWZlcmVuY2U7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBlbmFibGVJbnN0YW5jZXMoaXNFbmFibGVkKSB7XG4gICAgaW5kaXZpZHVhbEluc3RhbmNlcy5mb3JFYWNoKGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgICAgaWYgKGlzRW5hYmxlZCkge1xuICAgICAgICBpbnN0YW5jZS5lbmFibGUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluc3RhbmNlLmRpc2FibGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGludGVyY2VwdFNldFByb3BzKHNpbmdsZXRvbikge1xuICAgIHJldHVybiBpbmRpdmlkdWFsSW5zdGFuY2VzLm1hcChmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICAgIHZhciBvcmlnaW5hbFNldFByb3BzID0gaW5zdGFuY2Uuc2V0UHJvcHM7XG5cbiAgICAgIGluc3RhbmNlLnNldFByb3BzID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICAgIG9yaWdpbmFsU2V0UHJvcHMocHJvcHMpO1xuXG4gICAgICAgIGlmIChpbnN0YW5jZS5yZWZlcmVuY2UgPT09IGN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgICBzaW5nbGV0b24uc2V0UHJvcHMocHJvcHMpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBpbnN0YW5jZS5zZXRQcm9wcyA9IG9yaWdpbmFsU2V0UHJvcHM7XG4gICAgICB9O1xuICAgIH0pO1xuICB9IC8vIGhhdmUgdG8gcGFzcyBzaW5nbGV0b24sIGFzIGl0IG1heWJlIHVuZGVmaW5lZCBvbiBmaXJzdCBjYWxsXG5cblxuICBmdW5jdGlvbiBwcmVwYXJlSW5zdGFuY2Uoc2luZ2xldG9uLCB0YXJnZXQpIHtcbiAgICB2YXIgaW5kZXggPSByZWZlcmVuY2VzLmluZGV4T2YodGFyZ2V0KTsgLy8gYmFpbC1vdXRcblxuICAgIGlmICh0YXJnZXQgPT09IGN1cnJlbnRUYXJnZXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjdXJyZW50VGFyZ2V0ID0gdGFyZ2V0O1xuICAgIHZhciBvdmVycmlkZVByb3BzID0gKG92ZXJyaWRlcyB8fCBbXSkuY29uY2F0KCdjb250ZW50JykucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHByb3ApIHtcbiAgICAgIGFjY1twcm9wXSA9IGluZGl2aWR1YWxJbnN0YW5jZXNbaW5kZXhdLnByb3BzW3Byb3BdO1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSk7XG4gICAgc2luZ2xldG9uLnNldFByb3BzKE9iamVjdC5hc3NpZ24oe30sIG92ZXJyaWRlUHJvcHMsIHtcbiAgICAgIGdldFJlZmVyZW5jZUNsaWVudFJlY3Q6IHR5cGVvZiBvdmVycmlkZVByb3BzLmdldFJlZmVyZW5jZUNsaWVudFJlY3QgPT09ICdmdW5jdGlvbicgPyBvdmVycmlkZVByb3BzLmdldFJlZmVyZW5jZUNsaWVudFJlY3QgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICB9XG4gICAgfSkpO1xuICB9XG5cbiAgZW5hYmxlSW5zdGFuY2VzKGZhbHNlKTtcbiAgc2V0UmVmZXJlbmNlcygpO1xuICB2YXIgcGx1Z2luID0ge1xuICAgIGZuOiBmdW5jdGlvbiBmbigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG9uRGVzdHJveTogZnVuY3Rpb24gb25EZXN0cm95KCkge1xuICAgICAgICAgIGVuYWJsZUluc3RhbmNlcyh0cnVlKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25IaWRkZW46IGZ1bmN0aW9uIG9uSGlkZGVuKCkge1xuICAgICAgICAgIGN1cnJlbnRUYXJnZXQgPSBudWxsO1xuICAgICAgICB9LFxuICAgICAgICBvbkNsaWNrT3V0c2lkZTogZnVuY3Rpb24gb25DbGlja091dHNpZGUoaW5zdGFuY2UpIHtcbiAgICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMuc2hvd09uQ3JlYXRlICYmICFzaG93bk9uQ3JlYXRlKSB7XG4gICAgICAgICAgICBzaG93bk9uQ3JlYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIGN1cnJlbnRUYXJnZXQgPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb25TaG93OiBmdW5jdGlvbiBvblNob3coaW5zdGFuY2UpIHtcbiAgICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMuc2hvd09uQ3JlYXRlICYmICFzaG93bk9uQ3JlYXRlKSB7XG4gICAgICAgICAgICBzaG93bk9uQ3JlYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIHByZXBhcmVJbnN0YW5jZShpbnN0YW5jZSwgcmVmZXJlbmNlc1swXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvblRyaWdnZXI6IGZ1bmN0aW9uIG9uVHJpZ2dlcihpbnN0YW5jZSwgZXZlbnQpIHtcbiAgICAgICAgICBwcmVwYXJlSW5zdGFuY2UoaW5zdGFuY2UsIGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfTtcbiAgdmFyIHNpbmdsZXRvbiA9IHRpcHB5KGRpdigpLCBPYmplY3QuYXNzaWduKHt9LCByZW1vdmVQcm9wZXJ0aWVzKG9wdGlvbmFsUHJvcHMsIFsnb3ZlcnJpZGVzJ10pLCB7XG4gICAgcGx1Z2luczogW3BsdWdpbl0uY29uY2F0KG9wdGlvbmFsUHJvcHMucGx1Z2lucyB8fCBbXSksXG4gICAgdHJpZ2dlclRhcmdldDogcmVmZXJlbmNlcyxcbiAgICBwb3BwZXJPcHRpb25zOiBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25hbFByb3BzLnBvcHBlck9wdGlvbnMsIHtcbiAgICAgIG1vZGlmaWVyczogW10uY29uY2F0KCgoX29wdGlvbmFsUHJvcHMkcG9wcGVyID0gb3B0aW9uYWxQcm9wcy5wb3BwZXJPcHRpb25zKSA9PSBudWxsID8gdm9pZCAwIDogX29wdGlvbmFsUHJvcHMkcG9wcGVyLm1vZGlmaWVycykgfHwgW10sIFthcHBseVN0eWxlc01vZGlmaWVyXSlcbiAgICB9KVxuICB9KSk7XG4gIHZhciBvcmlnaW5hbFNob3cgPSBzaW5nbGV0b24uc2hvdztcblxuICBzaW5nbGV0b24uc2hvdyA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBvcmlnaW5hbFNob3coKTsgLy8gZmlyc3QgdGltZSwgc2hvd09uQ3JlYXRlIG9yIHByb2dyYW1tYXRpYyBjYWxsIHdpdGggbm8gcGFyYW1zXG4gICAgLy8gZGVmYXVsdCB0byBzaG93aW5nIGZpcnN0IGluc3RhbmNlXG5cbiAgICBpZiAoIWN1cnJlbnRUYXJnZXQgJiYgdGFyZ2V0ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBwcmVwYXJlSW5zdGFuY2Uoc2luZ2xldG9uLCByZWZlcmVuY2VzWzBdKTtcbiAgICB9IC8vIHRyaWdnZXJlZCBmcm9tIGV2ZW50IChkbyBub3RoaW5nIGFzIHByZXBhcmVJbnN0YW5jZSBhbHJlYWR5IGNhbGxlZCBieSBvblRyaWdnZXIpXG4gICAgLy8gcHJvZ3JhbW1hdGljIGNhbGwgd2l0aCBubyBwYXJhbXMgd2hlbiBhbHJlYWR5IHZpc2libGUgKGRvIG5vdGhpbmcgYWdhaW4pXG5cblxuICAgIGlmIChjdXJyZW50VGFyZ2V0ICYmIHRhcmdldCA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyB0YXJnZXQgaXMgaW5kZXggb2YgaW5zdGFuY2VcblxuXG4gICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdudW1iZXInKSB7XG4gICAgICByZXR1cm4gcmVmZXJlbmNlc1t0YXJnZXRdICYmIHByZXBhcmVJbnN0YW5jZShzaW5nbGV0b24sIHJlZmVyZW5jZXNbdGFyZ2V0XSk7XG4gICAgfSAvLyB0YXJnZXQgaXMgYSBjaGlsZCB0aXBweSBpbnN0YW5jZVxuXG5cbiAgICBpZiAoaW5kaXZpZHVhbEluc3RhbmNlcy5pbmNsdWRlcyh0YXJnZXQpKSB7XG4gICAgICB2YXIgcmVmID0gdGFyZ2V0LnJlZmVyZW5jZTtcbiAgICAgIHJldHVybiBwcmVwYXJlSW5zdGFuY2Uoc2luZ2xldG9uLCByZWYpO1xuICAgIH0gLy8gdGFyZ2V0IGlzIGEgUmVmZXJlbmNlRWxlbWVudFxuXG5cbiAgICBpZiAocmVmZXJlbmNlcy5pbmNsdWRlcyh0YXJnZXQpKSB7XG4gICAgICByZXR1cm4gcHJlcGFyZUluc3RhbmNlKHNpbmdsZXRvbiwgdGFyZ2V0KTtcbiAgICB9XG4gIH07XG5cbiAgc2luZ2xldG9uLnNob3dOZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBmaXJzdCA9IHJlZmVyZW5jZXNbMF07XG5cbiAgICBpZiAoIWN1cnJlbnRUYXJnZXQpIHtcbiAgICAgIHJldHVybiBzaW5nbGV0b24uc2hvdygwKTtcbiAgICB9XG5cbiAgICB2YXIgaW5kZXggPSByZWZlcmVuY2VzLmluZGV4T2YoY3VycmVudFRhcmdldCk7XG4gICAgc2luZ2xldG9uLnNob3cocmVmZXJlbmNlc1tpbmRleCArIDFdIHx8IGZpcnN0KTtcbiAgfTtcblxuICBzaW5nbGV0b24uc2hvd1ByZXZpb3VzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBsYXN0ID0gcmVmZXJlbmNlc1tyZWZlcmVuY2VzLmxlbmd0aCAtIDFdO1xuXG4gICAgaWYgKCFjdXJyZW50VGFyZ2V0KSB7XG4gICAgICByZXR1cm4gc2luZ2xldG9uLnNob3cobGFzdCk7XG4gICAgfVxuXG4gICAgdmFyIGluZGV4ID0gcmVmZXJlbmNlcy5pbmRleE9mKGN1cnJlbnRUYXJnZXQpO1xuICAgIHZhciB0YXJnZXQgPSByZWZlcmVuY2VzW2luZGV4IC0gMV0gfHwgbGFzdDtcbiAgICBzaW5nbGV0b24uc2hvdyh0YXJnZXQpO1xuICB9O1xuXG4gIHZhciBvcmlnaW5hbFNldFByb3BzID0gc2luZ2xldG9uLnNldFByb3BzO1xuXG4gIHNpbmdsZXRvbi5zZXRQcm9wcyA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgIG92ZXJyaWRlcyA9IHByb3BzLm92ZXJyaWRlcyB8fCBvdmVycmlkZXM7XG4gICAgb3JpZ2luYWxTZXRQcm9wcyhwcm9wcyk7XG4gIH07XG5cbiAgc2luZ2xldG9uLnNldEluc3RhbmNlcyA9IGZ1bmN0aW9uIChuZXh0SW5zdGFuY2VzKSB7XG4gICAgZW5hYmxlSW5zdGFuY2VzKHRydWUpO1xuICAgIGludGVyY2VwdFNldFByb3BzQ2xlYW51cHMuZm9yRWFjaChmdW5jdGlvbiAoZm4pIHtcbiAgICAgIHJldHVybiBmbigpO1xuICAgIH0pO1xuICAgIGluZGl2aWR1YWxJbnN0YW5jZXMgPSBuZXh0SW5zdGFuY2VzO1xuICAgIGVuYWJsZUluc3RhbmNlcyhmYWxzZSk7XG4gICAgc2V0UmVmZXJlbmNlcygpO1xuICAgIGludGVyY2VwdFNldFByb3BzKHNpbmdsZXRvbik7XG4gICAgc2luZ2xldG9uLnNldFByb3BzKHtcbiAgICAgIHRyaWdnZXJUYXJnZXQ6IHJlZmVyZW5jZXNcbiAgICB9KTtcbiAgfTtcblxuICBpbnRlcmNlcHRTZXRQcm9wc0NsZWFudXBzID0gaW50ZXJjZXB0U2V0UHJvcHMoc2luZ2xldG9uKTtcbiAgcmV0dXJuIHNpbmdsZXRvbjtcbn07XG5cbnZhciBCVUJCTElOR19FVkVOVFNfTUFQID0ge1xuICBtb3VzZW92ZXI6ICdtb3VzZWVudGVyJyxcbiAgZm9jdXNpbjogJ2ZvY3VzJyxcbiAgY2xpY2s6ICdjbGljaydcbn07XG4vKipcbiAqIENyZWF0ZXMgYSBkZWxlZ2F0ZSBpbnN0YW5jZSB0aGF0IGNvbnRyb2xzIHRoZSBjcmVhdGlvbiBvZiB0aXBweSBpbnN0YW5jZXNcbiAqIGZvciBjaGlsZCBlbGVtZW50cyAoYHRhcmdldGAgQ1NTIHNlbGVjdG9yKS5cbiAqL1xuXG5mdW5jdGlvbiBkZWxlZ2F0ZSh0YXJnZXRzLCBwcm9wcykge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgZXJyb3JXaGVuKCEocHJvcHMgJiYgcHJvcHMudGFyZ2V0KSwgWydZb3UgbXVzdCBzcGVjaXR5IGEgYHRhcmdldGAgcHJvcCBpbmRpY2F0aW5nIGEgQ1NTIHNlbGVjdG9yIHN0cmluZyBtYXRjaGluZycsICd0aGUgdGFyZ2V0IGVsZW1lbnRzIHRoYXQgc2hvdWxkIHJlY2VpdmUgYSB0aXBweS4nXS5qb2luKCcgJykpO1xuICB9XG5cbiAgdmFyIGxpc3RlbmVycyA9IFtdO1xuICB2YXIgY2hpbGRUaXBweUluc3RhbmNlcyA9IFtdO1xuICB2YXIgZGlzYWJsZWQgPSBmYWxzZTtcbiAgdmFyIHRhcmdldCA9IHByb3BzLnRhcmdldDtcbiAgdmFyIG5hdGl2ZVByb3BzID0gcmVtb3ZlUHJvcGVydGllcyhwcm9wcywgWyd0YXJnZXQnXSk7XG4gIHZhciBwYXJlbnRQcm9wcyA9IE9iamVjdC5hc3NpZ24oe30sIG5hdGl2ZVByb3BzLCB7XG4gICAgdHJpZ2dlcjogJ21hbnVhbCcsXG4gICAgdG91Y2g6IGZhbHNlXG4gIH0pO1xuICB2YXIgY2hpbGRQcm9wcyA9IE9iamVjdC5hc3NpZ24oe30sIG5hdGl2ZVByb3BzLCB7XG4gICAgc2hvd09uQ3JlYXRlOiB0cnVlXG4gIH0pO1xuICB2YXIgcmV0dXJuVmFsdWUgPSB0aXBweSh0YXJnZXRzLCBwYXJlbnRQcm9wcyk7XG4gIHZhciBub3JtYWxpemVkUmV0dXJuVmFsdWUgPSBub3JtYWxpemVUb0FycmF5KHJldHVyblZhbHVlKTtcblxuICBmdW5jdGlvbiBvblRyaWdnZXIoZXZlbnQpIHtcbiAgICBpZiAoIWV2ZW50LnRhcmdldCB8fCBkaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciB0YXJnZXROb2RlID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QodGFyZ2V0KTtcblxuICAgIGlmICghdGFyZ2V0Tm9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gR2V0IHJlbGV2YW50IHRyaWdnZXIgd2l0aCBmYWxsYmFja3M6XG4gICAgLy8gMS4gQ2hlY2sgYGRhdGEtdGlwcHktdHJpZ2dlcmAgYXR0cmlidXRlIG9uIHRhcmdldCBub2RlXG4gICAgLy8gMi4gRmFsbGJhY2sgdG8gYHRyaWdnZXJgIHBhc3NlZCB0byBgZGVsZWdhdGUoKWBcbiAgICAvLyAzLiBGYWxsYmFjayB0byBgZGVmYXVsdFByb3BzLnRyaWdnZXJgXG5cblxuICAgIHZhciB0cmlnZ2VyID0gdGFyZ2V0Tm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGlwcHktdHJpZ2dlcicpIHx8IHByb3BzLnRyaWdnZXIgfHwgZGVmYXVsdFByb3BzLnRyaWdnZXI7IC8vIEB0cy1pZ25vcmVcblxuICAgIGlmICh0YXJnZXROb2RlLl90aXBweSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChldmVudC50eXBlID09PSAndG91Y2hzdGFydCcgJiYgdHlwZW9mIGNoaWxkUHJvcHMudG91Y2ggPT09ICdib29sZWFuJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChldmVudC50eXBlICE9PSAndG91Y2hzdGFydCcgJiYgdHJpZ2dlci5pbmRleE9mKEJVQkJMSU5HX0VWRU5UU19NQVBbZXZlbnQudHlwZV0pIDwgMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBpbnN0YW5jZSA9IHRpcHB5KHRhcmdldE5vZGUsIGNoaWxkUHJvcHMpO1xuXG4gICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICBjaGlsZFRpcHB5SW5zdGFuY2VzID0gY2hpbGRUaXBweUluc3RhbmNlcy5jb25jYXQoaW5zdGFuY2UpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uKG5vZGUsIGV2ZW50VHlwZSwgaGFuZGxlciwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG9wdGlvbnMgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgICBsaXN0ZW5lcnMucHVzaCh7XG4gICAgICBub2RlOiBub2RlLFxuICAgICAgZXZlbnRUeXBlOiBldmVudFR5cGUsXG4gICAgICBoYW5kbGVyOiBoYW5kbGVyLFxuICAgICAgb3B0aW9uczogb3B0aW9uc1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcnMoaW5zdGFuY2UpIHtcbiAgICB2YXIgcmVmZXJlbmNlID0gaW5zdGFuY2UucmVmZXJlbmNlO1xuICAgIG9uKHJlZmVyZW5jZSwgJ3RvdWNoc3RhcnQnLCBvblRyaWdnZXIsIFRPVUNIX09QVElPTlMpO1xuICAgIG9uKHJlZmVyZW5jZSwgJ21vdXNlb3ZlcicsIG9uVHJpZ2dlcik7XG4gICAgb24ocmVmZXJlbmNlLCAnZm9jdXNpbicsIG9uVHJpZ2dlcik7XG4gICAgb24ocmVmZXJlbmNlLCAnY2xpY2snLCBvblRyaWdnZXIpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgbGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgIHZhciBub2RlID0gX3JlZi5ub2RlLFxuICAgICAgICAgIGV2ZW50VHlwZSA9IF9yZWYuZXZlbnRUeXBlLFxuICAgICAgICAgIGhhbmRsZXIgPSBfcmVmLmhhbmRsZXIsXG4gICAgICAgICAgb3B0aW9ucyA9IF9yZWYub3B0aW9ucztcbiAgICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgIH0pO1xuICAgIGxpc3RlbmVycyA9IFtdO1xuICB9XG5cbiAgZnVuY3Rpb24gYXBwbHlNdXRhdGlvbnMoaW5zdGFuY2UpIHtcbiAgICB2YXIgb3JpZ2luYWxEZXN0cm95ID0gaW5zdGFuY2UuZGVzdHJveTtcbiAgICB2YXIgb3JpZ2luYWxFbmFibGUgPSBpbnN0YW5jZS5lbmFibGU7XG4gICAgdmFyIG9yaWdpbmFsRGlzYWJsZSA9IGluc3RhbmNlLmRpc2FibGU7XG5cbiAgICBpbnN0YW5jZS5kZXN0cm95ID0gZnVuY3Rpb24gKHNob3VsZERlc3Ryb3lDaGlsZEluc3RhbmNlcykge1xuICAgICAgaWYgKHNob3VsZERlc3Ryb3lDaGlsZEluc3RhbmNlcyA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHNob3VsZERlc3Ryb3lDaGlsZEluc3RhbmNlcyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChzaG91bGREZXN0cm95Q2hpbGRJbnN0YW5jZXMpIHtcbiAgICAgICAgY2hpbGRUaXBweUluc3RhbmNlcy5mb3JFYWNoKGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgICAgICAgIGluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGNoaWxkVGlwcHlJbnN0YW5jZXMgPSBbXTtcbiAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICBvcmlnaW5hbERlc3Ryb3koKTtcbiAgICB9O1xuXG4gICAgaW5zdGFuY2UuZW5hYmxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgb3JpZ2luYWxFbmFibGUoKTtcbiAgICAgIGNoaWxkVGlwcHlJbnN0YW5jZXMuZm9yRWFjaChmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLmVuYWJsZSgpO1xuICAgICAgfSk7XG4gICAgICBkaXNhYmxlZCA9IGZhbHNlO1xuICAgIH07XG5cbiAgICBpbnN0YW5jZS5kaXNhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgb3JpZ2luYWxEaXNhYmxlKCk7XG4gICAgICBjaGlsZFRpcHB5SW5zdGFuY2VzLmZvckVhY2goZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZS5kaXNhYmxlKCk7XG4gICAgICB9KTtcbiAgICAgIGRpc2FibGVkID0gdHJ1ZTtcbiAgICB9O1xuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoaW5zdGFuY2UpO1xuICB9XG5cbiAgbm9ybWFsaXplZFJldHVyblZhbHVlLmZvckVhY2goYXBwbHlNdXRhdGlvbnMpO1xuICByZXR1cm4gcmV0dXJuVmFsdWU7XG59XG5cbnZhciBhbmltYXRlRmlsbCA9IHtcbiAgbmFtZTogJ2FuaW1hdGVGaWxsJyxcbiAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcbiAgZm46IGZ1bmN0aW9uIGZuKGluc3RhbmNlKSB7XG4gICAgdmFyIF9pbnN0YW5jZSRwcm9wcyRyZW5kZTtcblxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBpZiAoISgoX2luc3RhbmNlJHByb3BzJHJlbmRlID0gaW5zdGFuY2UucHJvcHMucmVuZGVyKSA9PSBudWxsID8gdm9pZCAwIDogX2luc3RhbmNlJHByb3BzJHJlbmRlLiQkdGlwcHkpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgIGVycm9yV2hlbihpbnN0YW5jZS5wcm9wcy5hbmltYXRlRmlsbCwgJ1RoZSBgYW5pbWF0ZUZpbGxgIHBsdWdpbiByZXF1aXJlcyB0aGUgZGVmYXVsdCByZW5kZXIgZnVuY3Rpb24uJyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICB2YXIgX2dldENoaWxkcmVuID0gZ2V0Q2hpbGRyZW4oaW5zdGFuY2UucG9wcGVyKSxcbiAgICAgICAgYm94ID0gX2dldENoaWxkcmVuLmJveCxcbiAgICAgICAgY29udGVudCA9IF9nZXRDaGlsZHJlbi5jb250ZW50O1xuXG4gICAgdmFyIGJhY2tkcm9wID0gaW5zdGFuY2UucHJvcHMuYW5pbWF0ZUZpbGwgPyBjcmVhdGVCYWNrZHJvcEVsZW1lbnQoKSA6IG51bGw7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9uQ3JlYXRlOiBmdW5jdGlvbiBvbkNyZWF0ZSgpIHtcbiAgICAgICAgaWYgKGJhY2tkcm9wKSB7XG4gICAgICAgICAgYm94Lmluc2VydEJlZm9yZShiYWNrZHJvcCwgYm94LmZpcnN0RWxlbWVudENoaWxkKTtcbiAgICAgICAgICBib3guc2V0QXR0cmlidXRlKCdkYXRhLWFuaW1hdGVmaWxsJywgJycpO1xuICAgICAgICAgIGJveC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgICAgICAgIGluc3RhbmNlLnNldFByb3BzKHtcbiAgICAgICAgICAgIGFycm93OiBmYWxzZSxcbiAgICAgICAgICAgIGFuaW1hdGlvbjogJ3NoaWZ0LWF3YXknXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvbk1vdW50OiBmdW5jdGlvbiBvbk1vdW50KCkge1xuICAgICAgICBpZiAoYmFja2Ryb3ApIHtcbiAgICAgICAgICB2YXIgdHJhbnNpdGlvbkR1cmF0aW9uID0gYm94LnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbjtcbiAgICAgICAgICB2YXIgZHVyYXRpb24gPSBOdW1iZXIodHJhbnNpdGlvbkR1cmF0aW9uLnJlcGxhY2UoJ21zJywgJycpKTsgLy8gVGhlIGNvbnRlbnQgc2hvdWxkIGZhZGUgaW4gYWZ0ZXIgdGhlIGJhY2tkcm9wIGhhcyBtb3N0bHkgZmlsbGVkIHRoZVxuICAgICAgICAgIC8vIHRvb2x0aXAgZWxlbWVudC4gYGNsaXAtcGF0aGAgaXMgdGhlIG90aGVyIGFsdGVybmF0aXZlIGJ1dCBpcyBub3RcbiAgICAgICAgICAvLyB3ZWxsLXN1cHBvcnRlZCBhbmQgaXMgYnVnZ3kgb24gc29tZSBkZXZpY2VzLlxuXG4gICAgICAgICAgY29udGVudC5zdHlsZS50cmFuc2l0aW9uRGVsYXkgPSBNYXRoLnJvdW5kKGR1cmF0aW9uIC8gMTApICsgXCJtc1wiO1xuICAgICAgICAgIGJhY2tkcm9wLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IHRyYW5zaXRpb25EdXJhdGlvbjtcbiAgICAgICAgICBzZXRWaXNpYmlsaXR5U3RhdGUoW2JhY2tkcm9wXSwgJ3Zpc2libGUnKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uU2hvdzogZnVuY3Rpb24gb25TaG93KCkge1xuICAgICAgICBpZiAoYmFja2Ryb3ApIHtcbiAgICAgICAgICBiYWNrZHJvcC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSAnMG1zJztcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uSGlkZTogZnVuY3Rpb24gb25IaWRlKCkge1xuICAgICAgICBpZiAoYmFja2Ryb3ApIHtcbiAgICAgICAgICBzZXRWaXNpYmlsaXR5U3RhdGUoW2JhY2tkcm9wXSwgJ2hpZGRlbicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxufTtcblxuZnVuY3Rpb24gY3JlYXRlQmFja2Ryb3BFbGVtZW50KCkge1xuICB2YXIgYmFja2Ryb3AgPSBkaXYoKTtcbiAgYmFja2Ryb3AuY2xhc3NOYW1lID0gQkFDS0RST1BfQ0xBU1M7XG4gIHNldFZpc2liaWxpdHlTdGF0ZShbYmFja2Ryb3BdLCAnaGlkZGVuJyk7XG4gIHJldHVybiBiYWNrZHJvcDtcbn1cblxudmFyIG1vdXNlQ29vcmRzID0ge1xuICBjbGllbnRYOiAwLFxuICBjbGllbnRZOiAwXG59O1xudmFyIGFjdGl2ZUluc3RhbmNlcyA9IFtdO1xuXG5mdW5jdGlvbiBzdG9yZU1vdXNlQ29vcmRzKF9yZWYpIHtcbiAgdmFyIGNsaWVudFggPSBfcmVmLmNsaWVudFgsXG4gICAgICBjbGllbnRZID0gX3JlZi5jbGllbnRZO1xuICBtb3VzZUNvb3JkcyA9IHtcbiAgICBjbGllbnRYOiBjbGllbnRYLFxuICAgIGNsaWVudFk6IGNsaWVudFlcbiAgfTtcbn1cblxuZnVuY3Rpb24gYWRkTW91c2VDb29yZHNMaXN0ZW5lcihkb2MpIHtcbiAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHN0b3JlTW91c2VDb29yZHMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVNb3VzZUNvb3Jkc0xpc3RlbmVyKGRvYykge1xuICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgc3RvcmVNb3VzZUNvb3Jkcyk7XG59XG5cbnZhciBmb2xsb3dDdXJzb3IgPSB7XG4gIG5hbWU6ICdmb2xsb3dDdXJzb3InLFxuICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxuICBmbjogZnVuY3Rpb24gZm4oaW5zdGFuY2UpIHtcbiAgICB2YXIgcmVmZXJlbmNlID0gaW5zdGFuY2UucmVmZXJlbmNlO1xuICAgIHZhciBkb2MgPSBnZXRPd25lckRvY3VtZW50KGluc3RhbmNlLnByb3BzLnRyaWdnZXJUYXJnZXQgfHwgcmVmZXJlbmNlKTtcbiAgICB2YXIgaXNJbnRlcm5hbFVwZGF0ZSA9IGZhbHNlO1xuICAgIHZhciB3YXNGb2N1c0V2ZW50ID0gZmFsc2U7XG4gICAgdmFyIGlzVW5tb3VudGVkID0gdHJ1ZTtcbiAgICB2YXIgcHJldlByb3BzID0gaW5zdGFuY2UucHJvcHM7XG5cbiAgICBmdW5jdGlvbiBnZXRJc0luaXRpYWxCZWhhdmlvcigpIHtcbiAgICAgIHJldHVybiBpbnN0YW5jZS5wcm9wcy5mb2xsb3dDdXJzb3IgPT09ICdpbml0aWFsJyAmJiBpbnN0YW5jZS5zdGF0ZS5pc1Zpc2libGU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkTGlzdGVuZXIoKSB7XG4gICAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKCkge1xuICAgICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1bnNldEdldFJlZmVyZW5jZUNsaWVudFJlY3QoKSB7XG4gICAgICBpc0ludGVybmFsVXBkYXRlID0gdHJ1ZTtcbiAgICAgIGluc3RhbmNlLnNldFByb3BzKHtcbiAgICAgICAgZ2V0UmVmZXJlbmNlQ2xpZW50UmVjdDogbnVsbFxuICAgICAgfSk7XG4gICAgICBpc0ludGVybmFsVXBkYXRlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Nb3VzZU1vdmUoZXZlbnQpIHtcbiAgICAgIC8vIElmIHRoZSBpbnN0YW5jZSBpcyBpbnRlcmFjdGl2ZSwgYXZvaWQgdXBkYXRpbmcgdGhlIHBvc2l0aW9uIHVubGVzcyBpdCdzXG4gICAgICAvLyBvdmVyIHRoZSByZWZlcmVuY2UgZWxlbWVudFxuICAgICAgdmFyIGlzQ3Vyc29yT3ZlclJlZmVyZW5jZSA9IGV2ZW50LnRhcmdldCA/IHJlZmVyZW5jZS5jb250YWlucyhldmVudC50YXJnZXQpIDogdHJ1ZTtcbiAgICAgIHZhciBmb2xsb3dDdXJzb3IgPSBpbnN0YW5jZS5wcm9wcy5mb2xsb3dDdXJzb3I7XG4gICAgICB2YXIgY2xpZW50WCA9IGV2ZW50LmNsaWVudFgsXG4gICAgICAgICAgY2xpZW50WSA9IGV2ZW50LmNsaWVudFk7XG4gICAgICB2YXIgcmVjdCA9IHJlZmVyZW5jZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHZhciByZWxhdGl2ZVggPSBjbGllbnRYIC0gcmVjdC5sZWZ0O1xuICAgICAgdmFyIHJlbGF0aXZlWSA9IGNsaWVudFkgLSByZWN0LnRvcDtcblxuICAgICAgaWYgKGlzQ3Vyc29yT3ZlclJlZmVyZW5jZSB8fCAhaW5zdGFuY2UucHJvcHMuaW50ZXJhY3RpdmUpIHtcbiAgICAgICAgaW5zdGFuY2Uuc2V0UHJvcHMoe1xuICAgICAgICAgIGdldFJlZmVyZW5jZUNsaWVudFJlY3Q6IGZ1bmN0aW9uIGdldFJlZmVyZW5jZUNsaWVudFJlY3QoKSB7XG4gICAgICAgICAgICB2YXIgcmVjdCA9IHJlZmVyZW5jZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIHZhciB4ID0gY2xpZW50WDtcbiAgICAgICAgICAgIHZhciB5ID0gY2xpZW50WTtcblxuICAgICAgICAgICAgaWYgKGZvbGxvd0N1cnNvciA9PT0gJ2luaXRpYWwnKSB7XG4gICAgICAgICAgICAgIHggPSByZWN0LmxlZnQgKyByZWxhdGl2ZVg7XG4gICAgICAgICAgICAgIHkgPSByZWN0LnRvcCArIHJlbGF0aXZlWTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHRvcCA9IGZvbGxvd0N1cnNvciA9PT0gJ2hvcml6b250YWwnID8gcmVjdC50b3AgOiB5O1xuICAgICAgICAgICAgdmFyIHJpZ2h0ID0gZm9sbG93Q3Vyc29yID09PSAndmVydGljYWwnID8gcmVjdC5yaWdodCA6IHg7XG4gICAgICAgICAgICB2YXIgYm90dG9tID0gZm9sbG93Q3Vyc29yID09PSAnaG9yaXpvbnRhbCcgPyByZWN0LmJvdHRvbSA6IHk7XG4gICAgICAgICAgICB2YXIgbGVmdCA9IGZvbGxvd0N1cnNvciA9PT0gJ3ZlcnRpY2FsJyA/IHJlY3QubGVmdCA6IHg7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICB3aWR0aDogcmlnaHQgLSBsZWZ0LFxuICAgICAgICAgICAgICBoZWlnaHQ6IGJvdHRvbSAtIHRvcCxcbiAgICAgICAgICAgICAgdG9wOiB0b3AsXG4gICAgICAgICAgICAgIHJpZ2h0OiByaWdodCxcbiAgICAgICAgICAgICAgYm90dG9tOiBib3R0b20sXG4gICAgICAgICAgICAgIGxlZnQ6IGxlZnRcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgICBpZiAoaW5zdGFuY2UucHJvcHMuZm9sbG93Q3Vyc29yKSB7XG4gICAgICAgIGFjdGl2ZUluc3RhbmNlcy5wdXNoKHtcbiAgICAgICAgICBpbnN0YW5jZTogaW5zdGFuY2UsXG4gICAgICAgICAgZG9jOiBkb2NcbiAgICAgICAgfSk7XG4gICAgICAgIGFkZE1vdXNlQ29vcmRzTGlzdGVuZXIoZG9jKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgYWN0aXZlSW5zdGFuY2VzID0gYWN0aXZlSW5zdGFuY2VzLmZpbHRlcihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICByZXR1cm4gZGF0YS5pbnN0YW5jZSAhPT0gaW5zdGFuY2U7XG4gICAgICB9KTtcblxuICAgICAgaWYgKGFjdGl2ZUluc3RhbmNlcy5maWx0ZXIoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIGRhdGEuZG9jID09PSBkb2M7XG4gICAgICB9KS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmVtb3ZlTW91c2VDb29yZHNMaXN0ZW5lcihkb2MpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBvbkNyZWF0ZTogY3JlYXRlLFxuICAgICAgb25EZXN0cm95OiBkZXN0cm95LFxuICAgICAgb25CZWZvcmVVcGRhdGU6IGZ1bmN0aW9uIG9uQmVmb3JlVXBkYXRlKCkge1xuICAgICAgICBwcmV2UHJvcHMgPSBpbnN0YW5jZS5wcm9wcztcbiAgICAgIH0sXG4gICAgICBvbkFmdGVyVXBkYXRlOiBmdW5jdGlvbiBvbkFmdGVyVXBkYXRlKF8sIF9yZWYyKSB7XG4gICAgICAgIHZhciBmb2xsb3dDdXJzb3IgPSBfcmVmMi5mb2xsb3dDdXJzb3I7XG5cbiAgICAgICAgaWYgKGlzSW50ZXJuYWxVcGRhdGUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZm9sbG93Q3Vyc29yICE9PSB1bmRlZmluZWQgJiYgcHJldlByb3BzLmZvbGxvd0N1cnNvciAhPT0gZm9sbG93Q3Vyc29yKSB7XG4gICAgICAgICAgZGVzdHJveSgpO1xuXG4gICAgICAgICAgaWYgKGZvbGxvd0N1cnNvcikge1xuICAgICAgICAgICAgY3JlYXRlKCk7XG5cbiAgICAgICAgICAgIGlmIChpbnN0YW5jZS5zdGF0ZS5pc01vdW50ZWQgJiYgIXdhc0ZvY3VzRXZlbnQgJiYgIWdldElzSW5pdGlhbEJlaGF2aW9yKCkpIHtcbiAgICAgICAgICAgICAgYWRkTGlzdGVuZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVtb3ZlTGlzdGVuZXIoKTtcbiAgICAgICAgICAgIHVuc2V0R2V0UmVmZXJlbmNlQ2xpZW50UmVjdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uTW91bnQ6IGZ1bmN0aW9uIG9uTW91bnQoKSB7XG4gICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5mb2xsb3dDdXJzb3IgJiYgIXdhc0ZvY3VzRXZlbnQpIHtcbiAgICAgICAgICBpZiAoaXNVbm1vdW50ZWQpIHtcbiAgICAgICAgICAgIG9uTW91c2VNb3ZlKG1vdXNlQ29vcmRzKTtcbiAgICAgICAgICAgIGlzVW5tb3VudGVkID0gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFnZXRJc0luaXRpYWxCZWhhdmlvcigpKSB7XG4gICAgICAgICAgICBhZGRMaXN0ZW5lcigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uVHJpZ2dlcjogZnVuY3Rpb24gb25UcmlnZ2VyKF8sIGV2ZW50KSB7XG4gICAgICAgIGlmIChpc01vdXNlRXZlbnQoZXZlbnQpKSB7XG4gICAgICAgICAgbW91c2VDb29yZHMgPSB7XG4gICAgICAgICAgICBjbGllbnRYOiBldmVudC5jbGllbnRYLFxuICAgICAgICAgICAgY2xpZW50WTogZXZlbnQuY2xpZW50WVxuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICB3YXNGb2N1c0V2ZW50ID0gZXZlbnQudHlwZSA9PT0gJ2ZvY3VzJztcbiAgICAgIH0sXG4gICAgICBvbkhpZGRlbjogZnVuY3Rpb24gb25IaWRkZW4oKSB7XG4gICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5mb2xsb3dDdXJzb3IpIHtcbiAgICAgICAgICB1bnNldEdldFJlZmVyZW5jZUNsaWVudFJlY3QoKTtcbiAgICAgICAgICByZW1vdmVMaXN0ZW5lcigpO1xuICAgICAgICAgIGlzVW5tb3VudGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGdldFByb3BzKHByb3BzLCBtb2RpZmllcikge1xuICB2YXIgX3Byb3BzJHBvcHBlck9wdGlvbnM7XG5cbiAgcmV0dXJuIHtcbiAgICBwb3BwZXJPcHRpb25zOiBPYmplY3QuYXNzaWduKHt9LCBwcm9wcy5wb3BwZXJPcHRpb25zLCB7XG4gICAgICBtb2RpZmllcnM6IFtdLmNvbmNhdCgoKChfcHJvcHMkcG9wcGVyT3B0aW9ucyA9IHByb3BzLnBvcHBlck9wdGlvbnMpID09IG51bGwgPyB2b2lkIDAgOiBfcHJvcHMkcG9wcGVyT3B0aW9ucy5tb2RpZmllcnMpIHx8IFtdKS5maWx0ZXIoZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgdmFyIG5hbWUgPSBfcmVmLm5hbWU7XG4gICAgICAgIHJldHVybiBuYW1lICE9PSBtb2RpZmllci5uYW1lO1xuICAgICAgfSksIFttb2RpZmllcl0pXG4gICAgfSlcbiAgfTtcbn1cblxudmFyIGlubGluZVBvc2l0aW9uaW5nID0ge1xuICBuYW1lOiAnaW5saW5lUG9zaXRpb25pbmcnLFxuICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxuICBmbjogZnVuY3Rpb24gZm4oaW5zdGFuY2UpIHtcbiAgICB2YXIgcmVmZXJlbmNlID0gaW5zdGFuY2UucmVmZXJlbmNlO1xuXG4gICAgZnVuY3Rpb24gaXNFbmFibGVkKCkge1xuICAgICAgcmV0dXJuICEhaW5zdGFuY2UucHJvcHMuaW5saW5lUG9zaXRpb25pbmc7XG4gICAgfVxuXG4gICAgdmFyIHBsYWNlbWVudDtcbiAgICB2YXIgY3Vyc29yUmVjdEluZGV4ID0gLTE7XG4gICAgdmFyIGlzSW50ZXJuYWxVcGRhdGUgPSBmYWxzZTtcbiAgICB2YXIgbW9kaWZpZXIgPSB7XG4gICAgICBuYW1lOiAndGlwcHlJbmxpbmVQb3NpdGlvbmluZycsXG4gICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgcGhhc2U6ICdhZnRlcldyaXRlJyxcbiAgICAgIGZuOiBmdW5jdGlvbiBmbihfcmVmMikge1xuICAgICAgICB2YXIgc3RhdGUgPSBfcmVmMi5zdGF0ZTtcblxuICAgICAgICBpZiAoaXNFbmFibGVkKCkpIHtcbiAgICAgICAgICBpZiAocGxhY2VtZW50ICE9PSBzdGF0ZS5wbGFjZW1lbnQpIHtcbiAgICAgICAgICAgIGluc3RhbmNlLnNldFByb3BzKHtcbiAgICAgICAgICAgICAgZ2V0UmVmZXJlbmNlQ2xpZW50UmVjdDogZnVuY3Rpb24gZ2V0UmVmZXJlbmNlQ2xpZW50UmVjdCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2dldFJlZmVyZW5jZUNsaWVudFJlY3Qoc3RhdGUucGxhY2VtZW50KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcGxhY2VtZW50ID0gc3RhdGUucGxhY2VtZW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIF9nZXRSZWZlcmVuY2VDbGllbnRSZWN0KHBsYWNlbWVudCkge1xuICAgICAgcmV0dXJuIGdldElubGluZUJvdW5kaW5nQ2xpZW50UmVjdChnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCksIHJlZmVyZW5jZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSwgYXJyYXlGcm9tKHJlZmVyZW5jZS5nZXRDbGllbnRSZWN0cygpKSwgY3Vyc29yUmVjdEluZGV4KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRJbnRlcm5hbFByb3BzKHBhcnRpYWxQcm9wcykge1xuICAgICAgaXNJbnRlcm5hbFVwZGF0ZSA9IHRydWU7XG4gICAgICBpbnN0YW5jZS5zZXRQcm9wcyhwYXJ0aWFsUHJvcHMpO1xuICAgICAgaXNJbnRlcm5hbFVwZGF0ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZE1vZGlmaWVyKCkge1xuICAgICAgaWYgKCFpc0ludGVybmFsVXBkYXRlKSB7XG4gICAgICAgIHNldEludGVybmFsUHJvcHMoZ2V0UHJvcHMoaW5zdGFuY2UucHJvcHMsIG1vZGlmaWVyKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIG9uQ3JlYXRlOiBhZGRNb2RpZmllcixcbiAgICAgIG9uQWZ0ZXJVcGRhdGU6IGFkZE1vZGlmaWVyLFxuICAgICAgb25UcmlnZ2VyOiBmdW5jdGlvbiBvblRyaWdnZXIoXywgZXZlbnQpIHtcbiAgICAgICAgaWYgKGlzTW91c2VFdmVudChldmVudCkpIHtcbiAgICAgICAgICB2YXIgcmVjdHMgPSBhcnJheUZyb20oaW5zdGFuY2UucmVmZXJlbmNlLmdldENsaWVudFJlY3RzKCkpO1xuICAgICAgICAgIHZhciBjdXJzb3JSZWN0ID0gcmVjdHMuZmluZChmdW5jdGlvbiAocmVjdCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlY3QubGVmdCAtIDIgPD0gZXZlbnQuY2xpZW50WCAmJiByZWN0LnJpZ2h0ICsgMiA+PSBldmVudC5jbGllbnRYICYmIHJlY3QudG9wIC0gMiA8PSBldmVudC5jbGllbnRZICYmIHJlY3QuYm90dG9tICsgMiA+PSBldmVudC5jbGllbnRZO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGN1cnNvclJlY3RJbmRleCA9IHJlY3RzLmluZGV4T2YoY3Vyc29yUmVjdCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvblVudHJpZ2dlcjogZnVuY3Rpb24gb25VbnRyaWdnZXIoKSB7XG4gICAgICAgIGN1cnNvclJlY3RJbmRleCA9IC0xO1xuICAgICAgfVxuICAgIH07XG4gIH1cbn07XG5mdW5jdGlvbiBnZXRJbmxpbmVCb3VuZGluZ0NsaWVudFJlY3QoY3VycmVudEJhc2VQbGFjZW1lbnQsIGJvdW5kaW5nUmVjdCwgY2xpZW50UmVjdHMsIGN1cnNvclJlY3RJbmRleCkge1xuICAvLyBOb3QgYW4gaW5saW5lIGVsZW1lbnQsIG9yIHBsYWNlbWVudCBpcyBub3QgeWV0IGtub3duXG4gIGlmIChjbGllbnRSZWN0cy5sZW5ndGggPCAyIHx8IGN1cnJlbnRCYXNlUGxhY2VtZW50ID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGJvdW5kaW5nUmVjdDtcbiAgfSAvLyBUaGVyZSBhcmUgdHdvIHJlY3RzIGFuZCB0aGV5IGFyZSBkaXNqb2luZWRcblxuXG4gIGlmIChjbGllbnRSZWN0cy5sZW5ndGggPT09IDIgJiYgY3Vyc29yUmVjdEluZGV4ID49IDAgJiYgY2xpZW50UmVjdHNbMF0ubGVmdCA+IGNsaWVudFJlY3RzWzFdLnJpZ2h0KSB7XG4gICAgcmV0dXJuIGNsaWVudFJlY3RzW2N1cnNvclJlY3RJbmRleF0gfHwgYm91bmRpbmdSZWN0O1xuICB9XG5cbiAgc3dpdGNoIChjdXJyZW50QmFzZVBsYWNlbWVudCkge1xuICAgIGNhc2UgJ3RvcCc6XG4gICAgY2FzZSAnYm90dG9tJzpcbiAgICAgIHtcbiAgICAgICAgdmFyIGZpcnN0UmVjdCA9IGNsaWVudFJlY3RzWzBdO1xuICAgICAgICB2YXIgbGFzdFJlY3QgPSBjbGllbnRSZWN0c1tjbGllbnRSZWN0cy5sZW5ndGggLSAxXTtcbiAgICAgICAgdmFyIGlzVG9wID0gY3VycmVudEJhc2VQbGFjZW1lbnQgPT09ICd0b3AnO1xuICAgICAgICB2YXIgdG9wID0gZmlyc3RSZWN0LnRvcDtcbiAgICAgICAgdmFyIGJvdHRvbSA9IGxhc3RSZWN0LmJvdHRvbTtcbiAgICAgICAgdmFyIGxlZnQgPSBpc1RvcCA/IGZpcnN0UmVjdC5sZWZ0IDogbGFzdFJlY3QubGVmdDtcbiAgICAgICAgdmFyIHJpZ2h0ID0gaXNUb3AgPyBmaXJzdFJlY3QucmlnaHQgOiBsYXN0UmVjdC5yaWdodDtcbiAgICAgICAgdmFyIHdpZHRoID0gcmlnaHQgLSBsZWZ0O1xuICAgICAgICB2YXIgaGVpZ2h0ID0gYm90dG9tIC0gdG9wO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRvcDogdG9wLFxuICAgICAgICAgIGJvdHRvbTogYm90dG9tLFxuICAgICAgICAgIGxlZnQ6IGxlZnQsXG4gICAgICAgICAgcmlnaHQ6IHJpZ2h0LFxuICAgICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IGhlaWdodFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgY2FzZSAnbGVmdCc6XG4gICAgY2FzZSAncmlnaHQnOlxuICAgICAge1xuICAgICAgICB2YXIgbWluTGVmdCA9IE1hdGgubWluLmFwcGx5KE1hdGgsIGNsaWVudFJlY3RzLm1hcChmdW5jdGlvbiAocmVjdHMpIHtcbiAgICAgICAgICByZXR1cm4gcmVjdHMubGVmdDtcbiAgICAgICAgfSkpO1xuICAgICAgICB2YXIgbWF4UmlnaHQgPSBNYXRoLm1heC5hcHBseShNYXRoLCBjbGllbnRSZWN0cy5tYXAoZnVuY3Rpb24gKHJlY3RzKSB7XG4gICAgICAgICAgcmV0dXJuIHJlY3RzLnJpZ2h0O1xuICAgICAgICB9KSk7XG4gICAgICAgIHZhciBtZWFzdXJlUmVjdHMgPSBjbGllbnRSZWN0cy5maWx0ZXIoZnVuY3Rpb24gKHJlY3QpIHtcbiAgICAgICAgICByZXR1cm4gY3VycmVudEJhc2VQbGFjZW1lbnQgPT09ICdsZWZ0JyA/IHJlY3QubGVmdCA9PT0gbWluTGVmdCA6IHJlY3QucmlnaHQgPT09IG1heFJpZ2h0O1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIF90b3AgPSBtZWFzdXJlUmVjdHNbMF0udG9wO1xuICAgICAgICB2YXIgX2JvdHRvbSA9IG1lYXN1cmVSZWN0c1ttZWFzdXJlUmVjdHMubGVuZ3RoIC0gMV0uYm90dG9tO1xuICAgICAgICB2YXIgX2xlZnQgPSBtaW5MZWZ0O1xuICAgICAgICB2YXIgX3JpZ2h0ID0gbWF4UmlnaHQ7XG5cbiAgICAgICAgdmFyIF93aWR0aCA9IF9yaWdodCAtIF9sZWZ0O1xuXG4gICAgICAgIHZhciBfaGVpZ2h0ID0gX2JvdHRvbSAtIF90b3A7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0b3A6IF90b3AsXG4gICAgICAgICAgYm90dG9tOiBfYm90dG9tLFxuICAgICAgICAgIGxlZnQ6IF9sZWZ0LFxuICAgICAgICAgIHJpZ2h0OiBfcmlnaHQsXG4gICAgICAgICAgd2lkdGg6IF93aWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IF9oZWlnaHRcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgIGRlZmF1bHQ6XG4gICAgICB7XG4gICAgICAgIHJldHVybiBib3VuZGluZ1JlY3Q7XG4gICAgICB9XG4gIH1cbn1cblxudmFyIHN0aWNreSA9IHtcbiAgbmFtZTogJ3N0aWNreScsXG4gIGRlZmF1bHRWYWx1ZTogZmFsc2UsXG4gIGZuOiBmdW5jdGlvbiBmbihpbnN0YW5jZSkge1xuICAgIHZhciByZWZlcmVuY2UgPSBpbnN0YW5jZS5yZWZlcmVuY2UsXG4gICAgICAgIHBvcHBlciA9IGluc3RhbmNlLnBvcHBlcjtcblxuICAgIGZ1bmN0aW9uIGdldFJlZmVyZW5jZSgpIHtcbiAgICAgIHJldHVybiBpbnN0YW5jZS5wb3BwZXJJbnN0YW5jZSA/IGluc3RhbmNlLnBvcHBlckluc3RhbmNlLnN0YXRlLmVsZW1lbnRzLnJlZmVyZW5jZSA6IHJlZmVyZW5jZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG91bGRDaGVjayh2YWx1ZSkge1xuICAgICAgcmV0dXJuIGluc3RhbmNlLnByb3BzLnN0aWNreSA9PT0gdHJ1ZSB8fCBpbnN0YW5jZS5wcm9wcy5zdGlja3kgPT09IHZhbHVlO1xuICAgIH1cblxuICAgIHZhciBwcmV2UmVmUmVjdCA9IG51bGw7XG4gICAgdmFyIHByZXZQb3BSZWN0ID0gbnVsbDtcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVBvc2l0aW9uKCkge1xuICAgICAgdmFyIGN1cnJlbnRSZWZSZWN0ID0gc2hvdWxkQ2hlY2soJ3JlZmVyZW5jZScpID8gZ2V0UmVmZXJlbmNlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgOiBudWxsO1xuICAgICAgdmFyIGN1cnJlbnRQb3BSZWN0ID0gc2hvdWxkQ2hlY2soJ3BvcHBlcicpID8gcG9wcGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIDogbnVsbDtcblxuICAgICAgaWYgKGN1cnJlbnRSZWZSZWN0ICYmIGFyZVJlY3RzRGlmZmVyZW50KHByZXZSZWZSZWN0LCBjdXJyZW50UmVmUmVjdCkgfHwgY3VycmVudFBvcFJlY3QgJiYgYXJlUmVjdHNEaWZmZXJlbnQocHJldlBvcFJlY3QsIGN1cnJlbnRQb3BSZWN0KSkge1xuICAgICAgICBpZiAoaW5zdGFuY2UucG9wcGVySW5zdGFuY2UpIHtcbiAgICAgICAgICBpbnN0YW5jZS5wb3BwZXJJbnN0YW5jZS51cGRhdGUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBwcmV2UmVmUmVjdCA9IGN1cnJlbnRSZWZSZWN0O1xuICAgICAgcHJldlBvcFJlY3QgPSBjdXJyZW50UG9wUmVjdDtcblxuICAgICAgaWYgKGluc3RhbmNlLnN0YXRlLmlzTW91bnRlZCkge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlUG9zaXRpb24pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBvbk1vdW50OiBmdW5jdGlvbiBvbk1vdW50KCkge1xuICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMuc3RpY2t5KSB7XG4gICAgICAgICAgdXBkYXRlUG9zaXRpb24oKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGFyZVJlY3RzRGlmZmVyZW50KHJlY3RBLCByZWN0Qikge1xuICBpZiAocmVjdEEgJiYgcmVjdEIpIHtcbiAgICByZXR1cm4gcmVjdEEudG9wICE9PSByZWN0Qi50b3AgfHwgcmVjdEEucmlnaHQgIT09IHJlY3RCLnJpZ2h0IHx8IHJlY3RBLmJvdHRvbSAhPT0gcmVjdEIuYm90dG9tIHx8IHJlY3RBLmxlZnQgIT09IHJlY3RCLmxlZnQ7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxudGlwcHkuc2V0RGVmYXVsdFByb3BzKHtcbiAgcmVuZGVyOiByZW5kZXJcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB0aXBweTtcbmV4cG9ydCB7IGFuaW1hdGVGaWxsLCBjcmVhdGVTaW5nbGV0b24sIGRlbGVnYXRlLCBmb2xsb3dDdXJzb3IsIGhpZGVBbGwsIGlubGluZVBvc2l0aW9uaW5nLCBST1VORF9BUlJPVyBhcyByb3VuZEFycm93LCBzdGlja3kgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRpcHB5LmVzbS5qcy5tYXBcbiIsIi8vIGZ1bmN0aW9uIGFjY29yZGlvbigpIHtcclxuLy8gXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VydmljZXNfX2l0ZW06bnRoLWNoaWxkKG4gKyA1KScpLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC50b2dnbGUoJ19oaWRkZW4nKSk7XHJcbi8vIH1cclxuLy8gYWNjb3JkaW9uKCk7XHJcblxyXG4vLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlcnZpY2VzX19idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuLy8gXHRhY2NvcmRpb24oKTtcclxuLy8gXHRhZGRDbGFzc3NzXHJcbi8vIH0pO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHNob3dUZXh0KCkge1xyXG5cdGlmICh0aGlzLmNsYXNzTGlzdC5jb250YWlucygnX2FjdGl2ZScpKSB7XHJcblx0XHR0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ19hY3RpdmUnKVxyXG5cdFx0dGhpcy50ZXh0Q29udGVudCA9ICfQldGJ0LUgKydcclxuXHR9IGVsc2Uge1xyXG5cdFx0dGhpcy5jbGFzc0xpc3QuYWRkKCdfYWN0aXZlJylcclxuXHRcdHRoaXMudGV4dENvbnRlbnQgPSAn0KHQstC10YDQvdGD0YLRjCdcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXJ2aWNlc19fYnRuJyk7XHJcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5faGlkZScpO1xyXG5cclxuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdGNvbnRhaW5lci5mb3JFYWNoKGl0ZW0gPT4ge1xyXG5cdFx0aWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93JykpIHtcclxuXHRcdFx0aXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XHJcblx0XHRcdGl0ZW0uc3R5bGUubWF4SGVpZ2h0ID0gMDtcclxuXHRcdFx0aXRlbS5zdHlsZS5tYXJnaW5Cb3R0b20gPSAwO1xyXG5cdFx0XHRpdGVtLnN0eWxlLm9wYWNpdHkgPSAwO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aXRlbS5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XHJcblx0XHRcdGl0ZW0uc3R5bGUubWF4SGVpZ2h0ID0gaXRlbS5zY3JvbGxIZWlnaHQgKyAncHgnO1xyXG5cdFx0XHRpdGVtLnN0eWxlLm1hcmdpbkJvdHRvbSA9IDUwICsgJ3B4JztcclxuXHRcdFx0aXRlbS5zdHlsZS5vcGFjaXR5ID0gMTtcclxuXHRcdH1cclxuXHR9KVxyXG5cdHNob3dUZXh0LmNhbGwoYnV0dG9uKTtcclxufSk7XHJcblxyXG4iLCJmdW5jdGlvbiBzY3JvbGxBbmNob3JzKCkge1xyXG5cdGNvbnN0IGFuY2hvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhW2hyZWYqPVwiI1wiXScpXHJcblx0bGV0IG1lbnVCdXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19idXJnZXInKTtcclxuXHRsZXQgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX21vYi1tZW51Jyk7XHJcblx0YW5jaG9ycy5mb3JFYWNoKGFuY2hvciA9PiB7XHJcblx0XHRhbmNob3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KClcclxuXHJcblx0XHRcdGNvbnN0IGJsb2NrID0gYW5jaG9yLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xyXG5cdFx0XHRpZiAoYmxvY2sgPT0gJyMnKSByZXR1cm47XHJcblx0XHRcdGlmIChtZW51QnVyZ2VyLmNsYXNzTGlzdC5jb250YWlucygnX2FjdGl2ZScpKSB7XHJcblx0XHRcdFx0bWVudUJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKCdfYWN0aXZlJylcclxuXHRcdFx0XHRtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ19hY3RpdmUnKVxyXG5cdFx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnX2xvY2snKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJsb2NrKS5zY3JvbGxJbnRvVmlldyh7XHJcblx0XHRcdFx0YmVoYXZpb3I6ICdzbW9vdGgnLFxyXG5cdFx0XHRcdGJsb2NrOiAnY2VudGVyJyxcclxuXHRcdFx0fSlcclxuXHRcdH0pXHJcblx0fSlcclxufVxyXG5zY3JvbGxBbmNob3JzKCkiLCJsZXQgbWVudUJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2J1cmdlcicpO1xyXG5sZXQgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX21vYi1tZW51Jyk7XHJcbmxldCBoZWFkZXJNb2IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJyk7XHJcbmxldCBoZWFkZXJMb2dvRGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2xvZ28tZGVzYycpO1xyXG5sZXQgaGVhZGVyTG9nb01vYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2xvZ28tbW9iJyk7XHJcbm1lbnVCdXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcblx0bWVudUJ1cmdlci5jbGFzc0xpc3QudG9nZ2xlKCdfYWN0aXZlJyk7XHJcblx0bWVudS5jbGFzc0xpc3QudG9nZ2xlKCdfYWN0aXZlJyk7XHJcblx0aGVhZGVyTW9iLmNsYXNzTGlzdC50b2dnbGUoJ19hY3RpdmUnKTtcclxuXHRoZWFkZXJMb2dvRGVzYy5jbGFzc0xpc3QudG9nZ2xlKCdfYWN0aXZlJyk7XHJcblx0aGVhZGVyTG9nb01vYi5jbGFzc0xpc3QudG9nZ2xlKCdfYWN0aXZlJyk7XHJcblx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdfbG9jaycpO1xyXG59KSIsIndpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uICgpIHsgc2Nyb2xsRnVuY3Rpb24oKSB9O1xyXG5mdW5jdGlvbiBzY3JvbGxGdW5jdGlvbigpIHtcclxuXHRsZXQgc2Nyb2xsUG9zID0gMjAwO1xyXG5cdGxldCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJyk7XHJcblx0bGV0IGhlYWRlckxvZ29EZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbG9nby1kZXNjJyk7XHJcblx0bGV0IGhlYWRlckxvZ29Nb2IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19sb2dvLW1vYicpO1xyXG5cdGxldCBtZW51TGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWFkZXJfX21lbnUtaXRlbScpO1xyXG5cdGxldCBtZW51QnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fYnVyZ2VyJyk7XHJcblx0aWYgKGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID4gc2Nyb2xsUG9zIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPiBzY3JvbGxQb3MpIHtcclxuXHRcdGhlYWRlci5jbGFzc0xpc3QuYWRkKCdfZml4ZWQnKTtcclxuXHRcdGhlYWRlckxvZ29EZXNjLmNsYXNzTGlzdC5hZGQoJ19maXhlZCcpO1xyXG5cdFx0aGVhZGVyTG9nb01vYi5jbGFzc0xpc3QuYWRkKCdfZml4ZWQnKTtcclxuXHRcdG1lbnVMaW5rLmZvckVhY2goaXRlbSA9PiB7XHJcblx0XHRcdGl0ZW0uY2xhc3NMaXN0LmFkZCgnX2ZpeGVkJyk7XHJcblx0XHR9KTtcclxuXHRcdG1lbnVCdXJnZXIuY2xhc3NMaXN0LmFkZCgnX2ZpeGVkJyk7XHJcblx0fSBlbHNlIHtcclxuXHRcdGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdfZml4ZWQnKTtcclxuXHRcdGhlYWRlckxvZ29EZXNjLmNsYXNzTGlzdC5yZW1vdmUoJ19maXhlZCcpO1xyXG5cdFx0aGVhZGVyTG9nb01vYi5jbGFzc0xpc3QucmVtb3ZlKCdfZml4ZWQnKTtcclxuXHRcdG1lbnVMaW5rLmZvckVhY2goaXRlbSA9PiB7XHJcblx0XHRcdGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnX2ZpeGVkJyk7XHJcblx0XHR9KTtcclxuXHRcdG1lbnVCdXJnZXIuY2xhc3NMaXN0LnJlbW92ZSgnX2ZpeGVkJyk7XHJcblx0fVxyXG59IiwiXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcclxuXHRNYXJxdWl6LmluaXQoe1xyXG5cdFx0aG9zdDogJy8vcXVpei5tYXJxdWl6LnJ1JyxcclxuXHRcdGlkOiAnNWRjNDJhMGEwODQ0OGIwMDQ0MDVjZmIwJyxcclxuXHRcdGF1dG9PcGVuOiA0MCwgYXV0b09wZW5GcmVxOiAnb25jZScsXHJcblx0XHRvcGVuT25FeGl0OiB0cnVlXHJcblx0fSk7XHJcbn0pIiwiZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT10ZWxdJykuZm9yRWFjaCgodGVsKSA9PiB7XHJcblx0Y29uc3QgbWFzayA9IElNYXNrKHRlbCwge1xyXG5cdFx0bWFzazogJyt7N30gKDAwMCkgMDAwLTAwLTAwJ1xyXG5cdH0pO1xyXG59KTtcclxuIiwiZnVuY3Rpb24gbW9kYWwoKSB7XHJcblx0Y29uc3QgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbF9fYnV0dG9uLWpzJyksXHJcblx0XHRjbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbF9fY2xvc2UnKSxcclxuXHRcdG92ZXJmbG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsX19vdmVyZmxvdycpO1xyXG5cclxuXHRmdW5jdGlvbiBjaGVja01vZGFsKCkge1xyXG5cdFx0Y29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLmRhdGFzZXQubW9kYWx9YCk7XHJcblx0XHRzaG93TW9kYWwobW9kYWwpO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gc2hvd01vZGFsKHBhcmVudCkge1xyXG5cdFx0Y29uc3QgY29udGVudCA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2NvbnRlbnQnKSxcclxuXHRcdFx0b3ZlcmZsb3cyID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fb3ZlcmZsb3cnKTtcclxuXHRcdGFkZENsYXNzQm9keSgpO1xyXG5cclxuXHRcdHBhcmVudC5jbGFzc0xpc3QuYWRkKCdfYWN0aXZlJyk7XHJcblx0XHRvdmVyZmxvdzIuY2xhc3NMaXN0LmFkZCgnX2FjdGl2ZScpO1xyXG5cdFx0YW5pbWF0ZUNTUyhvdmVyZmxvdzIsICdhbmltYXRlRmFkZUluJyk7XHJcblx0XHRhbmltYXRlQ1NTKGNvbnRlbnQsICdhbmltYXRlVG9wJyk7XHJcblxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcclxuXHRcdGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC5fYWN0aXZlJyksXHJcblx0XHRcdG1vZGFsQWN0aXZlQ29udGVudCA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2NvbnRlbnQnKSxcclxuXHRcdFx0bW9kYWxBY3RpdmVPdmVyZmxvdyA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX292ZXJmbG93Jyk7XHJcblx0XHRhbmltYXRlQ1NTKG1vZGFsQWN0aXZlQ29udGVudCwgJ2FuaW1hdGVVcCcpO1xyXG5cdFx0YW5pbWF0ZUNTUyhtb2RhbEFjdGl2ZU92ZXJmbG93LCAnYW5pbWF0ZUZhZGVPdXQnKTtcclxuXHRcdG1vZGFsQWN0aXZlQ29udGVudC5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCAoKSA9PiB7XHJcblx0XHRcdHBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKCdfYWN0aXZlJyk7XHJcblx0XHRcdG1vZGFsQWN0aXZlT3ZlcmZsb3cuY2xhc3NMaXN0LnJlbW92ZSgnX2FjdGl2ZScpO1xyXG5cdFx0XHRhZGRDbGFzc0JvZHkoKTtcclxuXHRcdH0sIHsgb25jZTogdHJ1ZSB9KVxyXG5cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGFkZENsYXNzQm9keSgpIHtcclxuXHRcdGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwuX2FjdGl2ZScpKSByZXR1cm47XHJcblx0XHQoZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSA/IGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykgOiBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcblx0fVxyXG5cclxuXHRidG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hlY2tNb2RhbCkpO1xyXG5cdGNsb3NlLmZvckVhY2goaXRlbSA9PiBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNb2RhbCkpO1xyXG5cdG92ZXJmbG93LmZvckVhY2goaXRlbSA9PiBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNb2RhbCkpO1xyXG59XHJcbm1vZGFsKCk7XHJcblxyXG5cclxuZnVuY3Rpb24gYW5pbWF0ZUNTUyhlbGVtZW50LCBhbmltYXRpb24pIHtcclxuXHRjb25zdCBhbmltYXRpb25OYW1lID0gYW5pbWF0aW9uO1xyXG5cdGNvbnN0IG5vZGUgPSAoZWxlbWVudC5ub2RlVHlwZSA9PT0gMSkgPyBlbGVtZW50IDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtZW50KTtcclxuXHJcblx0bm9kZS5jbGFzc0xpc3QuYWRkKC4uLmFuaW1hdGlvbk5hbWUuc3BsaXQoJyAnKSk7XHJcblxyXG5cdGZ1bmN0aW9uIGhhbmRsZUFuaW1hdGlvbkVuZCgpIHtcclxuXHRcdG5vZGUuY2xhc3NMaXN0LnJlbW92ZSguLi5hbmltYXRpb25OYW1lLnNwbGl0KCcgJykpO1xyXG5cdH1cclxuXHJcblx0bm9kZS5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBoYW5kbGVBbmltYXRpb25FbmQsIHsgb25jZTogdHJ1ZSB9KTtcclxufSIsImNvbnN0IGZlZWRiYWNrID0gbmV3IFN3aXBlcignLmZlZWRiYWNrX19zbGlkZXInLCB7XHJcblx0c2xpZGVzUGVyVmlldzogJ2F1dG8nLFxyXG5cdHNwYWNlQmV0d2VlbjogMzAsXHJcblx0c3BlZWQ6IDEwMDAsXHJcblxyXG5cdG5hdmlnYXRpb246IHtcclxuXHRcdHByZXZFbDogJy5zd2lwZXItcHJldicsXHJcblx0XHRuZXh0RWw6ICcuc3dpcGVyLW5leHQnLFxyXG5cdH0sXHJcblx0cGFnaW5hdGlvbjoge1xyXG5cdFx0ZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG5cdH0sXHJcblx0YnJlYWtwb2ludHM6IHtcclxuXHRcdDA6IHtcclxuXHRcdFx0Y2VudGVyZWRTbGlkZXM6IHRydWUsXHJcblx0XHRcdGFsbG93VG91Y2hNb3ZlOiB0cnVlLFxyXG5cdFx0fSxcclxuXHRcdDc2ODoge1xyXG5cdFx0XHRjZW50ZXJlZFNsaWRlczogZmFsc2UsXHJcblx0XHRcdGFsbG93VG91Y2hNb3ZlOiBmYWxzZSxcclxuXHRcdH0sXHJcblx0fSxcclxufSk7XHJcblxyXG5jb25zdCBleGFtcGxlc1RvcE9uZSA9IG5ldyBTd2lwZXIoJy5leGFtcGxlc19fc2xpZGVyLXRvcC1vbmUnLCB7XHJcblx0c3BhY2VCZXR3ZWVuOiAzMCxcclxuXHRzcGVlZDogMTAwMCxcclxuXHRsb29wOiB0cnVlLFxyXG5cdGxvb3BlZFNsaWRlczogNSxcclxuXHRwYWdpbmF0aW9uOiB7XHJcblx0XHRlbDogJy5leGFtcGxlc19fcHJvZ3Jlc3NiYXItb25lJyxcclxuXHRcdHR5cGU6ICdwcm9ncmVzc2JhcicsXHJcblx0fSxcclxuXHRuYXZpZ2F0aW9uOiB7XHJcblx0XHRwcmV2RWw6ICcuZXhhbXBsZXNfX3ByZXYtb25lJyxcclxuXHRcdG5leHRFbDogJy5leGFtcGxlc19fbmV4dC1vbmUnLFxyXG5cdH0sXHJcbn0pO1xyXG5jb25zdCBleGFtcGxlc0JvdE9uZSA9IG5ldyBTd2lwZXIoJy5leGFtcGxlc19fc2xpZGVyLWJvdC1vbmUnLCB7XHJcblx0c2xpZGVzUGVyVmlldzogMyxcclxuXHRzcGFjZUJldHdlZW46IDEwLFxyXG5cdHNwZWVkOiAxMDAwLFxyXG5cdGxvb3A6IHRydWUsXHJcblx0bG9vcGVkU2xpZGVzOiA1LFxyXG5cdHdhdGNoU2xpZGVzVmlzaWJpbGl0eTogdHJ1ZSxcclxuXHR3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxyXG5cdGFsbG93VG91Y2hNb3ZlOiBmYWxzZSxcclxuXHJcbn0pO1xyXG5cclxuZXhhbXBsZXNUb3BPbmUuY29udHJvbGxlci5jb250cm9sID0gZXhhbXBsZXNCb3RPbmU7XHJcbmV4YW1wbGVzQm90T25lLmNvbnRyb2xsZXIuY29udHJvbCA9IGV4YW1wbGVzVG9wT25lO1xyXG5cclxuY29uc3QgZXhhbXBsZXNUb3BUd28gPSBuZXcgU3dpcGVyKCcuZXhhbXBsZXNfX3NsaWRlci10b3AtdHdvJywge1xyXG5cdHNsaWRlc1BlclZpZXc6IDEsXHJcblx0c3BhY2VCZXR3ZWVuOiAzMCxcclxuXHRzcGVlZDogMTAwMCxcclxuXHRsb29wOiB0cnVlLFxyXG5cdGxvb3BlZFNsaWRlczogNSxcclxuXHRwYWdpbmF0aW9uOiB7XHJcblx0XHRlbDogJy5leGFtcGxlc19fcHJvZ3Jlc3NiYXItdHdvJyxcclxuXHRcdHR5cGU6ICdwcm9ncmVzc2JhcicsXHJcblx0fSxcclxuXHRuYXZpZ2F0aW9uOiB7XHJcblx0XHRwcmV2RWw6ICcuZXhhbXBsZXNfX3ByZXYtdHdvJyxcclxuXHRcdG5leHRFbDogJy5leGFtcGxlc19fbmV4dC10d28nLFxyXG5cdH0sXHJcbn0pO1xyXG5jb25zdCBleGFtcGxlc0JvdFR3byA9IG5ldyBTd2lwZXIoJy5leGFtcGxlc19fc2xpZGVyLWJvdC10d28nLCB7XHJcblx0c2xpZGVzUGVyVmlldzogMyxcclxuXHRzcGFjZUJldHdlZW46IDEwLFxyXG5cdHNwZWVkOiAxMDAwLFxyXG5cdGxvb3A6IHRydWUsXHJcblxyXG5cdGxvb3BlZFNsaWRlczogNSxcclxuXHR3YXRjaFNsaWRlc1Zpc2liaWxpdHk6IHRydWUsXHJcblx0d2F0Y2hTbGlkZXNQcm9ncmVzczogdHJ1ZSxcclxuXHRhbGxvd1RvdWNoTW92ZTogZmFsc2UsXHJcbn0pO1xyXG5cclxuZXhhbXBsZXNUb3BUd28uY29udHJvbGxlci5jb250cm9sID0gZXhhbXBsZXNCb3RUd287XHJcbmV4YW1wbGVzQm90VHdvLmNvbnRyb2xsZXIuY29udHJvbCA9IGV4YW1wbGVzVG9wVHdvO1xyXG5cclxuY29uc3QgZXhhbXBsZXNUb3BUaHJlZSA9IG5ldyBTd2lwZXIoJy5leGFtcGxlc19fc2xpZGVyLXRvcC10aHJlZScsIHtcclxuXHRzbGlkZXNQZXJWaWV3OiAxLFxyXG5cdHNwYWNlQmV0d2VlbjogMzAsXHJcblx0c3BlZWQ6IDEwMDAsXHJcblx0bG9vcDogdHJ1ZSxcclxuXHRsb29wZWRTbGlkZXM6IDUsXHJcblx0cGFnaW5hdGlvbjoge1xyXG5cdFx0ZWw6ICcuZXhhbXBsZXNfX3Byb2dyZXNzYmFyLXRocmVlJyxcclxuXHRcdHR5cGU6ICdwcm9ncmVzc2JhcicsXHJcblx0fSxcclxuXHRuYXZpZ2F0aW9uOiB7XHJcblx0XHRwcmV2RWw6ICcuZXhhbXBsZXNfX3ByZXYtdGhyZWUnLFxyXG5cdFx0bmV4dEVsOiAnLmV4YW1wbGVzX19uZXh0LXRocmVlJyxcclxuXHR9LFxyXG59KTtcclxuY29uc3QgZXhhbXBsZXNCb3RUaHJlZSA9IG5ldyBTd2lwZXIoJy5leGFtcGxlc19fc2xpZGVyLWJvdC10aHJlZScsIHtcclxuXHRzbGlkZXNQZXJWaWV3OiAzLFxyXG5cdHNwYWNlQmV0d2VlbjogMTAsXHJcblx0c3BlZWQ6IDEwMDAsXHJcblx0bG9vcDogdHJ1ZSxcclxuXHJcblx0bG9vcGVkU2xpZGVzOiA1LFxyXG5cdHdhdGNoU2xpZGVzVmlzaWJpbGl0eTogdHJ1ZSxcclxuXHR3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxyXG5cdGFsbG93VG91Y2hNb3ZlOiBmYWxzZSxcclxufSk7XHJcblxyXG5leGFtcGxlc1RvcFRocmVlLmNvbnRyb2xsZXIuY29udHJvbCA9IGV4YW1wbGVzQm90VGhyZWU7XHJcbmV4YW1wbGVzQm90VGhyZWUuY29udHJvbGxlci5jb250cm9sID0gZXhhbXBsZXNUb3BUaHJlZTtcclxuXHJcbmNvbnN0IGV4YW1wbGVzVG9wRm91ciA9IG5ldyBTd2lwZXIoJy5leGFtcGxlc19fc2xpZGVyLXRvcC1mb3VyJywge1xyXG5cdHNsaWRlc1BlclZpZXc6IDEsXHJcblx0c3BhY2VCZXR3ZWVuOiAzMCxcclxuXHRzcGVlZDogMTAwMCxcclxuXHRsb29wOiB0cnVlLFxyXG5cdGxvb3BlZFNsaWRlczogNSxcclxuXHRwYWdpbmF0aW9uOiB7XHJcblx0XHRlbDogJy5leGFtcGxlc19fcHJvZ3Jlc3NiYXItZm91cicsXHJcblx0XHR0eXBlOiAncHJvZ3Jlc3NiYXInLFxyXG5cdH0sXHJcblx0bmF2aWdhdGlvbjoge1xyXG5cdFx0cHJldkVsOiAnLmV4YW1wbGVzX19wcmV2LWZvdXInLFxyXG5cdFx0bmV4dEVsOiAnLmV4YW1wbGVzX19uZXh0LWZvdXInLFxyXG5cdH0sXHJcbn0pO1xyXG5jb25zdCBleGFtcGxlc0JvdEZvdXIgPSBuZXcgU3dpcGVyKCcuZXhhbXBsZXNfX3NsaWRlci1ib3QtZm91cicsIHtcclxuXHRzbGlkZXNQZXJWaWV3OiAzLFxyXG5cdHNwYWNlQmV0d2VlbjogMTAsXHJcblx0c3BlZWQ6IDEwMDAsXHJcblx0bG9vcDogdHJ1ZSxcclxuXHJcblx0bG9vcGVkU2xpZGVzOiA1LFxyXG5cdHdhdGNoU2xpZGVzVmlzaWJpbGl0eTogdHJ1ZSxcclxuXHR3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxyXG5cdGFsbG93VG91Y2hNb3ZlOiBmYWxzZSxcclxufSk7XHJcblxyXG5leGFtcGxlc1RvcEZvdXIuY29udHJvbGxlci5jb250cm9sID0gZXhhbXBsZXNCb3RGb3VyO1xyXG5leGFtcGxlc0JvdEZvdXIuY29udHJvbGxlci5jb250cm9sID0gZXhhbXBsZXNUb3BGb3VyO1xyXG5cclxuY29uc3QgZXhhbXBsZXNUb3BGaXZlID0gbmV3IFN3aXBlcignLmV4YW1wbGVzX19zbGlkZXItdG9wLWZpdmUnLCB7XHJcblx0c2xpZGVzUGVyVmlldzogMSxcclxuXHRzcGFjZUJldHdlZW46IDMwLFxyXG5cdHNwZWVkOiAxMDAwLFxyXG5cdGxvb3A6IHRydWUsXHJcblx0bG9vcGVkU2xpZGVzOiA1LFxyXG5cdHBhZ2luYXRpb246IHtcclxuXHRcdGVsOiAnLmV4YW1wbGVzX19wcm9ncmVzc2Jhci1maXZlJyxcclxuXHRcdHR5cGU6ICdwcm9ncmVzc2JhcicsXHJcblx0fSxcclxuXHRuYXZpZ2F0aW9uOiB7XHJcblx0XHRwcmV2RWw6ICcuZXhhbXBsZXNfX3ByZXYtZml2ZScsXHJcblx0XHRuZXh0RWw6ICcuZXhhbXBsZXNfX25leHQtZml2ZScsXHJcblx0fSxcclxufSk7XHJcbmNvbnN0IGV4YW1wbGVzQm90Rml2ZSA9IG5ldyBTd2lwZXIoJy5leGFtcGxlc19fc2xpZGVyLWJvdC1maXZlJywge1xyXG5cdHNsaWRlc1BlclZpZXc6IDMsXHJcblx0c3BhY2VCZXR3ZWVuOiAxMCxcclxuXHRzcGVlZDogMTAwMCxcclxuXHRsb29wOiB0cnVlLFxyXG5cclxuXHRsb29wZWRTbGlkZXM6IDUsXHJcblx0d2F0Y2hTbGlkZXNWaXNpYmlsaXR5OiB0cnVlLFxyXG5cdHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXHJcblx0YWxsb3dUb3VjaE1vdmU6IGZhbHNlLFxyXG59KTtcclxuXHJcbmV4YW1wbGVzVG9wRml2ZS5jb250cm9sbGVyLmNvbnRyb2wgPSBleGFtcGxlc0JvdEZpdmU7XHJcbmV4YW1wbGVzQm90Rml2ZS5jb250cm9sbGVyLmNvbnRyb2wgPSBleGFtcGxlc1RvcEZpdmU7IiwidmFyIGpzVHJpZ2dlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29zdF9fdGFicy1pdGVtJyksXHJcblx0anNDb250ZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3N0X19jb250ZW50Jyk7XHJcblxyXG5qc1RyaWdnZXJzLmZvckVhY2goZnVuY3Rpb24gKHRyaWdnZXIpIHtcclxuXHR0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0dmFyIGlkID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFiJyksXHJcblx0XHRcdGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29zdF9fY29udGVudFtkYXRhLXRhYj1cIicgKyBpZCArICdcIl0nKSxcclxuXHRcdFx0YWN0aXZlVHJpZ2dlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3N0X190YWJzLWl0ZW0uX2FjdGl2ZScpLFxyXG5cdFx0XHRhY3RpdmVDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvc3RfX2NvbnRlbnQuX2FjdGl2ZScpO1xyXG5cclxuXHRcdGFjdGl2ZVRyaWdnZXIuY2xhc3NMaXN0LnJlbW92ZSgnX2FjdGl2ZScpOyAvLyAxXHJcblx0XHR0cmlnZ2VyLmNsYXNzTGlzdC5hZGQoJ19hY3RpdmUnKTsgLy8gMlxyXG5cclxuXHRcdGFjdGl2ZUNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSgnX2FjdGl2ZScpOyAvLyAzXHJcblx0XHRjb250ZW50LmNsYXNzTGlzdC5hZGQoJ19hY3RpdmUnKTsgLy8gNFxyXG5cdH0pO1xyXG59KTtcclxuIiwiaW1wb3J0IHRpcHB5LCB7IGZvbGxvd0N1cnNvciB9IGZyb20gJ3RpcHB5LmpzJztcclxuXHJcblxyXG5jb25zdCBzZXJ2aWNlc1Rvb2x0aXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VydmljZXNfX3Rvb2x0aXAnKTtcclxuc2VydmljZXNUb29sdGlwLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cclxudGlwcHkoJy5fdG9vbHRpcC1zZXJ2aWNlcycsIHtcclxuXHRjb250ZW50OiBzZXJ2aWNlc1Rvb2x0aXAsXHJcblx0dHJpZ2dlcjogXCJjbGlja1wiLFxyXG5cdG1heFdpZHRoOiAyNTAsXHJcbn0pO1xyXG5cclxuY29uc3QgZmVlZGJhY2tUb29sdGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlZWRiYWNrX190b29sdGlwJyk7XHJcbmZlZWRiYWNrVG9vbHRpcC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHJcbnRpcHB5KCcuX3Rvb2x0aXAtZmVlZGJhY2snLCB7XHJcblx0Y29udGVudDogZmVlZGJhY2tUb29sdGlwLFxyXG5cdHRyaWdnZXI6IFwiY2xpY2tcIixcclxuXHRtYXhXaWR0aDogNDAwLFxyXG5cdGludGVyYWN0aXZlOiB0cnVlLFxyXG5cdGFycm93OiBmYWxzZSxcclxufSk7XHJcblxyXG5jb25zdCBmZWVkYmFja1Rvb2x0aXBUd28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmVlZGJhY2tfX3Rvb2x0aXAtdHdvJyk7XHJcbmZlZWRiYWNrVG9vbHRpcFR3by5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHJcbnRpcHB5KCcuX3Rvb2x0aXAtZmVlZGJhY2stdHdvJywge1xyXG5cdGNvbnRlbnQ6IGZlZWRiYWNrVG9vbHRpcFR3byxcclxuXHR0cmlnZ2VyOiBcImNsaWNrXCIsXHJcblx0bWF4V2lkdGg6IDQwMCxcclxuXHRpbnRlcmFjdGl2ZTogdHJ1ZSxcclxuXHRhcnJvdzogZmFsc2UsXHJcbn0pO1xyXG5cclxuXHJcbiIsIi8vIGltcG9ydCAnY29yZS1qcy9zdGFibGUnO1xyXG4vLyBpbXBvcnQgJ3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZSc7XHJcbi8vIGltcG9ydCAnY29yZS1qcy9mZWF0dXJlcy9zeW1ib2wvJztcclxuLy8gaW1wb3J0ICdjb3JlLWpzL2ZlYXR1cmVzL3Byb21pc2UvJztcclxuLy8gaW1wb3J0ICdjb3JlLWpzL2ZlYXR1cmVzL29iamVjdC9hc3NpZ24nO1xyXG4vLyBpbXBvcnQgJ2NvcmUtanMvZmVhdHVyZXMvYXJyYXkvZnJvbSc7XHJcbi8vIGltcG9ydCAnY29yZS1qcy9mZWF0dXJlcy9hcnJheS9maW5kJztcclxuLy8gaW1wb3J0ICdjb3JlLWpzL2ZlYXR1cmVzL251bWJlci9pcy1uYW4nO1xyXG4vLyBpbXBvcnQgJ2NvcmUtanMvZmVhdHVyZXMvZG9tLWNvbGxlY3Rpb25zL2Zvci1lYWNoJztcclxuLy8gaW1wb3J0ICdjb3JlLWpzL2ZlYXR1cmVzL2lzLWl0ZXJhYmxlJztcclxuXHJcbi8vIGltcG9ydCAnd2hhdHdnLWZldGNoJztcclxuLy8gaW1wb3J0ICcuL2xpYi9wb2x5ZmlsbHMuanMnO1xyXG5cclxuaW1wb3J0IHRpcHB5IGZyb20gJ3RpcHB5LmpzJztcclxuaW1wb3J0IElNYXNrIGZyb20gJ2ltYXNrJztcclxuXHJcbi8vIGltcG9ydCBSZWxsYXggZnJvbSAncmVsbGF4JztcclxuLy8gaW1wb3J0ICcuLi8uLi9ub2RlX21vZHVsZXMvZm9jdXMtdmlzaWJsZS9kaXN0L2ZvY3VzLXZpc2libGUuanMnO1xyXG5cclxuaW1wb3J0IG9iamVjdEZpdEltYWdlcyBmcm9tICdvYmplY3QtZml0LWltYWdlcyc7XHJcbmltcG9ydCBzdmc0ZXZlcnlib2R5IGZyb20gJ3N2ZzRldmVyeWJvZHknO1xyXG5cclxuLy8gaW1wb3J0IElucHV0TnVtYmVyIGZyb20gJy4vbGliL2lucHV0TnVtYmVyJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvaGVhZGVyLmpzJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvYWNjb3JkaW9uLmpzJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvbW9kYWxzLmpzJztcclxuLy8gaW1wb3J0ICcuL2NvbXBvbmVudHMvdmlkZW8uanMnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9tYXNrLmpzJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvdGFicy5qcyc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL3NsaWRlcnMuanMnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy90aXBweS5qcyc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2FuY2hvcnMuanMnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9idXJnZXIuanMnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9tYXJxdWl6LmpzJztcclxuXHJcblxyXG5cclxuc3ZnNGV2ZXJ5Ym9keSgpO1xyXG5vYmplY3RGaXRJbWFnZXMoKTtcclxuXHJcbi8vIGNvbnN0IGlucHV0TnVtYmVyID0gbmV3IElucHV0TnVtYmVyKCcubnVtYmVyJyk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=