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
/******/ 	return __webpack_require__(__webpack_require__.s = "./dynamicAdapt.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dynamicAdapt.js":
/*!*************************!*\
  !*** ./dynamicAdapt.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Dynamic Adapt v.1
// HTML data-da="where(uniq class name),when(breakpoint),position(digi)"
// e.x. data-da=".item,992,2"
// Andrikanych Yevhen 2020
// https://www.youtube.com/c/freelancerlifestyle


function DynamicAdapt(type) {
  this.type = type;
}

DynamicAdapt.prototype.init = function () {
  var _this2 = this;

  var _this = this; // массив объектов


  this.оbjects = [];
  this.daClassname = "_dynamic_adapt_"; // массив DOM-элементов

  this.nodes = document.querySelectorAll("[data-da]"); // наполнение оbjects объктами

  for (var i = 0; i < this.nodes.length; i++) {
    var node = this.nodes[i];
    var data = node.dataset.da.trim();
    var dataArray = data.split(",");
    var оbject = {};
    оbject.element = node;
    оbject.parent = node.parentNode;
    оbject.destination = document.querySelector(dataArray[0].trim());
    оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
    оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
    оbject.index = this.indexInParent(оbject.parent, оbject.element);
    this.оbjects.push(оbject);
  }

  this.arraySort(this.оbjects); // массив уникальных медиа-запросов

  this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
    return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
  }, this);
  this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
    return Array.prototype.indexOf.call(self, item) === index;
  }); // навешивание слушателя на медиа-запрос
  // и вызов обработчика при первом запуске

  var _loop = function _loop(_i) {
    var media = _this2.mediaQueries[_i];
    var mediaSplit = String.prototype.split.call(media, ',');
    var matchMedia = window.matchMedia(mediaSplit[0]);
    var mediaBreakpoint = mediaSplit[1]; // массив объектов с подходящим брейкпоинтом

    var оbjectsFilter = Array.prototype.filter.call(_this2.оbjects, function (item) {
      return item.breakpoint === mediaBreakpoint;
    });
    matchMedia.addListener(function () {
      _this.mediaHandler(matchMedia, оbjectsFilter);
    });

    _this2.mediaHandler(matchMedia, оbjectsFilter);
  };

  for (var _i = 0; _i < this.mediaQueries.length; _i++) {
    _loop(_i);
  }
};

DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
  if (matchMedia.matches) {
    for (var i = 0; i < оbjects.length; i++) {
      var оbject = оbjects[i];
      оbject.index = this.indexInParent(оbject.parent, оbject.element);
      this.moveTo(оbject.place, оbject.element, оbject.destination);
    }
  } else {
    for (var _i2 = 0; _i2 < оbjects.length; _i2++) {
      var _оbject = оbjects[_i2];

      if (_оbject.element.classList.contains(this.daClassname)) {
        this.moveBack(_оbject.parent, _оbject.element, _оbject.index);
      }
    }
  }
}; // Функция перемещения


DynamicAdapt.prototype.moveTo = function (place, element, destination) {
  element.classList.add(this.daClassname);

  if (place === 'last' || place >= destination.children.length) {
    destination.insertAdjacentElement('beforeend', element);
    return;
  }

  if (place === 'first') {
    destination.insertAdjacentElement('afterbegin', element);
    return;
  }

  destination.children[place].insertAdjacentElement('beforebegin', element);
}; // Функция возврата


DynamicAdapt.prototype.moveBack = function (parent, element, index) {
  element.classList.remove(this.daClassname);

  if (parent.children[index] !== undefined) {
    parent.children[index].insertAdjacentElement('beforebegin', element);
  } else {
    parent.insertAdjacentElement('beforeend', element);
  }
}; // Функция получения индекса внутри родителя


DynamicAdapt.prototype.indexInParent = function (parent, element) {
  var array = Array.prototype.slice.call(parent.children);
  return Array.prototype.indexOf.call(array, element);
}; // Функция сортировки массива по breakpoint и place 
// по возрастанию для this.type = min
// по убыванию для this.type = max


DynamicAdapt.prototype.arraySort = function (arr) {
  if (this.type === "min") {
    Array.prototype.sort.call(arr, function (a, b) {
      if (a.breakpoint === b.breakpoint) {
        if (a.place === b.place) {
          return 0;
        }

        if (a.place === "first" || b.place === "last") {
          return -1;
        }

        if (a.place === "last" || b.place === "first") {
          return 1;
        }

        return a.place - b.place;
      }

      return a.breakpoint - b.breakpoint;
    });
  } else {
    Array.prototype.sort.call(arr, function (a, b) {
      if (a.breakpoint === b.breakpoint) {
        if (a.place === b.place) {
          return 0;
        }

        if (a.place === "first" || b.place === "last") {
          return 1;
        }

        if (a.place === "last" || b.place === "first") {
          return -1;
        }

        return b.place - a.place;
      }

      return b.breakpoint - a.breakpoint;
    });
    return;
  }
};

var da = new DynamicAdapt("max");
da.init();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZHluYW1pY0FkYXB0LmpzIl0sIm5hbWVzIjpbIkR5bmFtaWNBZGFwdCIsInR5cGUiLCJwcm90b3R5cGUiLCJpbml0IiwiX3RoaXMiLCLQvmJqZWN0cyIsImRhQ2xhc3NuYW1lIiwibm9kZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpIiwibGVuZ3RoIiwibm9kZSIsImRhdGEiLCJkYXRhc2V0IiwiZGEiLCJ0cmltIiwiZGF0YUFycmF5Iiwic3BsaXQiLCLQvmJqZWN0IiwiZWxlbWVudCIsInBhcmVudCIsInBhcmVudE5vZGUiLCJkZXN0aW5hdGlvbiIsInF1ZXJ5U2VsZWN0b3IiLCJicmVha3BvaW50IiwicGxhY2UiLCJpbmRleCIsImluZGV4SW5QYXJlbnQiLCJwdXNoIiwiYXJyYXlTb3J0IiwibWVkaWFRdWVyaWVzIiwiQXJyYXkiLCJtYXAiLCJjYWxsIiwiaXRlbSIsImZpbHRlciIsInNlbGYiLCJpbmRleE9mIiwibWVkaWEiLCJtZWRpYVNwbGl0IiwiU3RyaW5nIiwibWF0Y2hNZWRpYSIsIndpbmRvdyIsIm1lZGlhQnJlYWtwb2ludCIsItC+YmplY3RzRmlsdGVyIiwiYWRkTGlzdGVuZXIiLCJtZWRpYUhhbmRsZXIiLCJtYXRjaGVzIiwibW92ZVRvIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJtb3ZlQmFjayIsImFkZCIsImNoaWxkcmVuIiwiaW5zZXJ0QWRqYWNlbnRFbGVtZW50IiwicmVtb3ZlIiwidW5kZWZpbmVkIiwiYXJyYXkiLCJzbGljZSIsImFyciIsInNvcnQiLCJhIiwiYiJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FB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VUFBRixHQUFlc0MsQ0FBQyxDQUFDdEMsVUFBeEI7QUFDQSxLQWxCRDtBQW1CQSxHQXBCRCxNQW9CTztBQUNOTyxTQUFLLENBQUM5QixTQUFOLENBQWdCMkQsSUFBaEIsQ0FBcUIzQixJQUFyQixDQUEwQjBCLEdBQTFCLEVBQStCLFVBQVVFLENBQVYsRUFBYUMsQ0FBYixFQUFnQjtBQUM5QyxVQUFJRCxDQUFDLENBQUNyQyxVQUFGLEtBQWlCc0MsQ0FBQyxDQUFDdEMsVUFBdkIsRUFBbUM7QUFDbEMsWUFBSXFDLENBQUMsQ0FBQ3BDLEtBQUYsS0FBWXFDLENBQUMsQ0FBQ3JDLEtBQWxCLEVBQXlCO0FBQ3hCLGlCQUFPLENBQVA7QUFDQTs7QUFFRCxZQUFJb0MsQ0FBQyxDQUFDcEMsS0FBRixLQUFZLE9BQVosSUFBdUJxQyxDQUFDLENBQUNyQyxLQUFGLEtBQVksTUFBdkMsRUFBK0M7QUFDOUMsaUJBQU8sQ0FBUDtBQUNBOztBQUVELFlBQUlvQyxDQUFDLENBQUNwQyxLQUFGLEtBQVksTUFBWixJQUFzQnFDLENBQUMsQ0FBQ3JDLEtBQUYsS0FBWSxPQUF0QyxFQUErQztBQUM5QyxpQkFBTyxDQUFDLENBQVI7QUFDQTs7QUFFRCxlQUFPcUMsQ0FBQyxDQUFDckMsS0FBRixHQUFVb0MsQ0FBQyxDQUFDcEMsS0FBbkI7QUFDQTs7QUFFRCxhQUFPcUMsQ0FBQyxDQUFDdEMsVUFBRixHQUFlcUMsQ0FBQyxDQUFDckMsVUFBeEI7QUFDQSxLQWxCRDtBQW1CQTtBQUNBO0FBQ0QsQ0EzQ0Q7O0FBNkNBLElBQU1WLEVBQUUsR0FBRyxJQUFJZixZQUFKLENBQWlCLEtBQWpCLENBQVg7QUFDQWUsRUFBRSxDQUFDWixJQUFILEciLCJmaWxlIjoiZGEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2R5bmFtaWNBZGFwdC5qc1wiKTtcbiIsIi8vIER5bmFtaWMgQWRhcHQgdi4xXHJcbi8vIEhUTUwgZGF0YS1kYT1cIndoZXJlKHVuaXEgY2xhc3MgbmFtZSksd2hlbihicmVha3BvaW50KSxwb3NpdGlvbihkaWdpKVwiXHJcbi8vIGUueC4gZGF0YS1kYT1cIi5pdGVtLDk5MiwyXCJcclxuLy8gQW5kcmlrYW55Y2ggWWV2aGVuIDIwMjBcclxuLy8gaHR0cHM6Ly93d3cueW91dHViZS5jb20vYy9mcmVlbGFuY2VybGlmZXN0eWxlXHJcblxyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbmZ1bmN0aW9uIER5bmFtaWNBZGFwdCh0eXBlKSB7XHJcblx0dGhpcy50eXBlID0gdHlwZTtcclxufVxyXG5cclxuRHluYW1pY0FkYXB0LnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG5cdGNvbnN0IF90aGlzID0gdGhpcztcclxuXHQvLyDQvNCw0YHRgdC40LIg0L7QsdGK0LXQutGC0L7QslxyXG5cdHRoaXMu0L5iamVjdHMgPSBbXTtcclxuXHR0aGlzLmRhQ2xhc3NuYW1lID0gXCJfZHluYW1pY19hZGFwdF9cIjtcclxuXHQvLyDQvNCw0YHRgdC40LIgRE9NLdGN0LvQtdC80LXQvdGC0L7QslxyXG5cdHRoaXMubm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtZGFdXCIpO1xyXG5cclxuXHQvLyDQvdCw0L/QvtC70L3QtdC90LjQtSDQvmJqZWN0cyDQvtCx0YrQutGC0LDQvNC4XHJcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRjb25zdCBub2RlID0gdGhpcy5ub2Rlc1tpXTtcclxuXHRcdGNvbnN0IGRhdGEgPSBub2RlLmRhdGFzZXQuZGEudHJpbSgpO1xyXG5cdFx0Y29uc3QgZGF0YUFycmF5ID0gZGF0YS5zcGxpdChcIixcIik7XHJcblx0XHRjb25zdCDQvmJqZWN0ID0ge307XHJcblx0XHTQvmJqZWN0LmVsZW1lbnQgPSBub2RlO1xyXG5cdFx00L5iamVjdC5wYXJlbnQgPSBub2RlLnBhcmVudE5vZGU7XHJcblx0XHTQvmJqZWN0LmRlc3RpbmF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihkYXRhQXJyYXlbMF0udHJpbSgpKTtcclxuXHRcdNC+YmplY3QuYnJlYWtwb2ludCA9IGRhdGFBcnJheVsxXSA/IGRhdGFBcnJheVsxXS50cmltKCkgOiBcIjc2N1wiO1xyXG5cdFx00L5iamVjdC5wbGFjZSA9IGRhdGFBcnJheVsyXSA/IGRhdGFBcnJheVsyXS50cmltKCkgOiBcImxhc3RcIjtcclxuXHRcdNC+YmplY3QuaW5kZXggPSB0aGlzLmluZGV4SW5QYXJlbnQo0L5iamVjdC5wYXJlbnQsINC+YmplY3QuZWxlbWVudCk7XHJcblx0XHR0aGlzLtC+YmplY3RzLnB1c2go0L5iamVjdCk7XHJcblx0fVxyXG5cclxuXHR0aGlzLmFycmF5U29ydCh0aGlzLtC+YmplY3RzKTtcclxuXHJcblx0Ly8g0LzQsNGB0YHQuNCyINGD0L3QuNC60LDQu9GM0L3Ri9GFINC80LXQtNC40LAt0LfQsNC/0YDQvtGB0L7QslxyXG5cdHRoaXMubWVkaWFRdWVyaWVzID0gQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKHRoaXMu0L5iamVjdHMsIGZ1bmN0aW9uIChpdGVtKSB7XHJcblx0XHRyZXR1cm4gJygnICsgdGhpcy50eXBlICsgXCItd2lkdGg6IFwiICsgaXRlbS5icmVha3BvaW50ICsgXCJweCksXCIgKyBpdGVtLmJyZWFrcG9pbnQ7XHJcblx0fSwgdGhpcyk7XHJcblx0dGhpcy5tZWRpYVF1ZXJpZXMgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwodGhpcy5tZWRpYVF1ZXJpZXMsIGZ1bmN0aW9uIChpdGVtLCBpbmRleCwgc2VsZikge1xyXG5cdFx0cmV0dXJuIEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoc2VsZiwgaXRlbSkgPT09IGluZGV4O1xyXG5cdH0pO1xyXG5cclxuXHQvLyDQvdCw0LLQtdGI0LjQstCw0L3QuNC1INGB0LvRg9GI0LDRgtC10LvRjyDQvdCwINC80LXQtNC40LAt0LfQsNC/0YDQvtGBXHJcblx0Ly8g0Lgg0LLRi9C30L7QsiDQvtCx0YDQsNCx0L7RgtGH0LjQutCwINC/0YDQuCDQv9C10YDQstC+0Lwg0LfQsNC/0YPRgdC60LVcclxuXHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWVkaWFRdWVyaWVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRjb25zdCBtZWRpYSA9IHRoaXMubWVkaWFRdWVyaWVzW2ldO1xyXG5cdFx0Y29uc3QgbWVkaWFTcGxpdCA9IFN0cmluZy5wcm90b3R5cGUuc3BsaXQuY2FsbChtZWRpYSwgJywnKTtcclxuXHRcdGNvbnN0IG1hdGNoTWVkaWEgPSB3aW5kb3cubWF0Y2hNZWRpYShtZWRpYVNwbGl0WzBdKTtcclxuXHRcdGNvbnN0IG1lZGlhQnJlYWtwb2ludCA9IG1lZGlhU3BsaXRbMV07XHJcblxyXG5cdFx0Ly8g0LzQsNGB0YHQuNCyINC+0LHRitC10LrRgtC+0LIg0YEg0L/QvtC00YXQvtC00Y/RidC40Lwg0LHRgNC10LnQutC/0L7QuNC90YLQvtC8XHJcblx0XHRjb25zdCDQvmJqZWN0c0ZpbHRlciA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbCh0aGlzLtC+YmplY3RzLCBmdW5jdGlvbiAoaXRlbSkge1xyXG5cdFx0XHRyZXR1cm4gaXRlbS5icmVha3BvaW50ID09PSBtZWRpYUJyZWFrcG9pbnQ7XHJcblx0XHR9KTtcclxuXHRcdG1hdGNoTWVkaWEuYWRkTGlzdGVuZXIoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRfdGhpcy5tZWRpYUhhbmRsZXIobWF0Y2hNZWRpYSwg0L5iamVjdHNGaWx0ZXIpO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLm1lZGlhSGFuZGxlcihtYXRjaE1lZGlhLCDQvmJqZWN0c0ZpbHRlcik7XHJcblx0fVxyXG59O1xyXG5cclxuRHluYW1pY0FkYXB0LnByb3RvdHlwZS5tZWRpYUhhbmRsZXIgPSBmdW5jdGlvbiAobWF0Y2hNZWRpYSwg0L5iamVjdHMpIHtcclxuXHRpZiAobWF0Y2hNZWRpYS5tYXRjaGVzKSB7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8INC+YmplY3RzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGNvbnN0INC+YmplY3QgPSDQvmJqZWN0c1tpXTtcclxuXHRcdFx00L5iamVjdC5pbmRleCA9IHRoaXMuaW5kZXhJblBhcmVudCjQvmJqZWN0LnBhcmVudCwg0L5iamVjdC5lbGVtZW50KTtcclxuXHRcdFx0dGhpcy5tb3ZlVG8o0L5iamVjdC5wbGFjZSwg0L5iamVjdC5lbGVtZW50LCDQvmJqZWN0LmRlc3RpbmF0aW9uKTtcclxuXHRcdH1cclxuXHR9IGVsc2Uge1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCDQvmJqZWN0cy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRjb25zdCDQvmJqZWN0ID0g0L5iamVjdHNbaV07XHJcblx0XHRcdGlmICjQvmJqZWN0LmVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuZGFDbGFzc25hbWUpKSB7XHJcblx0XHRcdFx0dGhpcy5tb3ZlQmFjayjQvmJqZWN0LnBhcmVudCwg0L5iamVjdC5lbGVtZW50LCDQvmJqZWN0LmluZGV4KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuXHJcbi8vINCk0YPQvdC60YbQuNGPINC/0LXRgNC10LzQtdGJ0LXQvdC40Y9cclxuRHluYW1pY0FkYXB0LnByb3RvdHlwZS5tb3ZlVG8gPSBmdW5jdGlvbiAocGxhY2UsIGVsZW1lbnQsIGRlc3RpbmF0aW9uKSB7XHJcblx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuZGFDbGFzc25hbWUpO1xyXG5cdGlmIChwbGFjZSA9PT0gJ2xhc3QnIHx8IHBsYWNlID49IGRlc3RpbmF0aW9uLmNoaWxkcmVuLmxlbmd0aCkge1xyXG5cdFx0ZGVzdGluYXRpb24uaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBlbGVtZW50KTtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblx0aWYgKHBsYWNlID09PSAnZmlyc3QnKSB7XHJcblx0XHRkZXN0aW5hdGlvbi5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyYmVnaW4nLCBlbGVtZW50KTtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblx0ZGVzdGluYXRpb24uY2hpbGRyZW5bcGxhY2VdLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlYmVnaW4nLCBlbGVtZW50KTtcclxufVxyXG5cclxuLy8g0KTRg9C90LrRhtC40Y8g0LLQvtC30LLRgNCw0YLQsFxyXG5EeW5hbWljQWRhcHQucHJvdG90eXBlLm1vdmVCYWNrID0gZnVuY3Rpb24gKHBhcmVudCwgZWxlbWVudCwgaW5kZXgpIHtcclxuXHRlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5kYUNsYXNzbmFtZSk7XHJcblx0aWYgKHBhcmVudC5jaGlsZHJlbltpbmRleF0gIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0cGFyZW50LmNoaWxkcmVuW2luZGV4XS5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWJlZ2luJywgZWxlbWVudCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHBhcmVudC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGVsZW1lbnQpO1xyXG5cdH1cclxufVxyXG5cclxuLy8g0KTRg9C90LrRhtC40Y8g0L/QvtC70YPRh9C10L3QuNGPINC40L3QtNC10LrRgdCwINCy0L3Rg9GC0YDQuCDRgNC+0LTQuNGC0LXQu9GPXHJcbkR5bmFtaWNBZGFwdC5wcm90b3R5cGUuaW5kZXhJblBhcmVudCA9IGZ1bmN0aW9uIChwYXJlbnQsIGVsZW1lbnQpIHtcclxuXHRjb25zdCBhcnJheSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHBhcmVudC5jaGlsZHJlbik7XHJcblx0cmV0dXJuIEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoYXJyYXksIGVsZW1lbnQpO1xyXG59O1xyXG5cclxuLy8g0KTRg9C90LrRhtC40Y8g0YHQvtGA0YLQuNGA0L7QstC60Lgg0LzQsNGB0YHQuNCy0LAg0L/QviBicmVha3BvaW50INC4IHBsYWNlIFxyXG4vLyDQv9C+INCy0L7Qt9GA0LDRgdGC0LDQvdC40Y4g0LTQu9GPIHRoaXMudHlwZSA9IG1pblxyXG4vLyDQv9C+INGD0LHRi9Cy0LDQvdC40Y4g0LTQu9GPIHRoaXMudHlwZSA9IG1heFxyXG5EeW5hbWljQWRhcHQucHJvdG90eXBlLmFycmF5U29ydCA9IGZ1bmN0aW9uIChhcnIpIHtcclxuXHRpZiAodGhpcy50eXBlID09PSBcIm1pblwiKSB7XHJcblx0XHRBcnJheS5wcm90b3R5cGUuc29ydC5jYWxsKGFyciwgZnVuY3Rpb24gKGEsIGIpIHtcclxuXHRcdFx0aWYgKGEuYnJlYWtwb2ludCA9PT0gYi5icmVha3BvaW50KSB7XHJcblx0XHRcdFx0aWYgKGEucGxhY2UgPT09IGIucGxhY2UpIHtcclxuXHRcdFx0XHRcdHJldHVybiAwO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKGEucGxhY2UgPT09IFwiZmlyc3RcIiB8fCBiLnBsYWNlID09PSBcImxhc3RcIikge1xyXG5cdFx0XHRcdFx0cmV0dXJuIC0xO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKGEucGxhY2UgPT09IFwibGFzdFwiIHx8IGIucGxhY2UgPT09IFwiZmlyc3RcIikge1xyXG5cdFx0XHRcdFx0cmV0dXJuIDE7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRyZXR1cm4gYS5wbGFjZSAtIGIucGxhY2U7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiBhLmJyZWFrcG9pbnQgLSBiLmJyZWFrcG9pbnQ7XHJcblx0XHR9KTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0QXJyYXkucHJvdG90eXBlLnNvcnQuY2FsbChhcnIsIGZ1bmN0aW9uIChhLCBiKSB7XHJcblx0XHRcdGlmIChhLmJyZWFrcG9pbnQgPT09IGIuYnJlYWtwb2ludCkge1xyXG5cdFx0XHRcdGlmIChhLnBsYWNlID09PSBiLnBsYWNlKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gMDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmIChhLnBsYWNlID09PSBcImZpcnN0XCIgfHwgYi5wbGFjZSA9PT0gXCJsYXN0XCIpIHtcclxuXHRcdFx0XHRcdHJldHVybiAxO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKGEucGxhY2UgPT09IFwibGFzdFwiIHx8IGIucGxhY2UgPT09IFwiZmlyc3RcIikge1xyXG5cdFx0XHRcdFx0cmV0dXJuIC0xO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0cmV0dXJuIGIucGxhY2UgLSBhLnBsYWNlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gYi5icmVha3BvaW50IC0gYS5icmVha3BvaW50O1xyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG59O1xyXG5cclxuY29uc3QgZGEgPSBuZXcgRHluYW1pY0FkYXB0KFwibWF4XCIpO1xyXG5kYS5pbml0KCk7Il0sInNvdXJjZVJvb3QiOiIifQ==