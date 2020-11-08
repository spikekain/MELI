module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/Logo_ML.png":
/*!****************************!*\
  !*** ./assets/Logo_ML.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./assets/favico.ico":
/*!***************************!*\
  !*** ./assets/favico.ico ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/favico-8462276496039f6e034947adeb53b211.ico";

/***/ }),

/***/ "./assets/ic_Search.png":
/*!******************************!*\
  !*** ./assets/ic_Search.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAStJREFUOBGtkrFKA0EURZeYws5OQtDaUgsbi7RiGeuk2A+w0UbwG2z9ghS2NtpZKmgVKwlpQrqAYJNoJXhOIJIdM7Mr+OCwO+/decy8uVlWjC2WVzCET3iDe+hC5chRvsM1+L8Hh3ABY7iFJiQjpzqBo4hqg3wPXmE9osm8jieJNVnsq/HzAJeLRPh1Jl6nSuwg+oLGKrGDzVcVIrkR+U5Y87jb0A8LibVax1EIG01hs5BNL9TOQomNXmA/LETWdfLawj2/QrONwScuizMEA1iLCe8o6BNPGItdCo7hICYwr2M1mz7xiZfD65yCTZ6gDcnQsZpNn4zgBh7hA7yOJzkGB13aDM3cbPrkHE6gBcszsUnlZmiT8a/N/nTN5LEo2uwZUq9d1uOnPm/yDckrMt+EneXZAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./components/header.tsx":
/*!*******************************!*\
  !*** ./components/header.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_Logo_ML_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/Logo_ML.png */ "./assets/Logo_ML.png");
/* harmony import */ var _assets_Logo_ML_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_Logo_ML_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_ic_Search_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/ic_Search.png */ "./assets/ic_Search.png");
/* harmony import */ var _assets_ic_Search_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_ic_Search_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_sass_basic_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/sass/basic.scss */ "./styles/sass/basic.scss");
/* harmony import */ var _styles_sass_basic_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_sass_basic_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\spike\\Documents\\MELI\\MELI\\components\\header.tsx";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class Header extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleChange", e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    });

    _defineProperty(this, "handleSubmit", e => {
      e.preventDefault();

      if (this.state != null) {
        this.props.router.push("/items?search=" + this.state.query);
      }
    });
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      className: "header",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: _assets_Logo_ML_png__WEBPACK_IMPORTED_MODULE_3___default.a,
          alt: "Logo Meli",
          className: "float-right"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        xs: 8,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
          onSubmit: this.handleSubmit,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], {
            className: "mb-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["FormControl"], {
              placeholder: "Buscar Productos, marcas y mas...",
              "aria-label": "Buscador",
              "aria-describedby": "basic-addon2",
              name: "query",
              className: "inputSearch",
              onChange: this.handleChange
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"].Append, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
                className: "buttonSearch",
                type: "submit",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: _assets_ic_Search_png__WEBPACK_IMPORTED_MODULE_4___default.a,
                  alt: "Logo Meli",
                  className: "float-right"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 46,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_6__["withRouter"])(Header));

/***/ }),

/***/ "./components/layout.tsx":
/*!*******************************!*\
  !*** ./components/layout.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./components/header.tsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_sass_basic_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/sass/basic.scss */ "./styles/sass/basic.scss");
/* harmony import */ var _styles_sass_basic_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_sass_basic_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_favico_ico__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/favico.ico */ "./assets/favico.ico");
/* harmony import */ var _assets_favico_ico__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_favico_ico__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\spike\\Documents\\MELI\\MELI\\components\\layout.tsx";







const Layout = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Mercado Libre"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "shortcut icon",
        href: _assets_favico_ico__WEBPACK_IMPORTED_MODULE_6___default.a
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "canonical",
        href: "http://localhost:3000/meli"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_header__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: " back",
        children: props.children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 7
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./components/layout.tsx");


var _jsxFileName = "C:\\Users\\spike\\Documents\\MELI\\MELI\\pages\\index.tsx";
 //import Fetch  from 'isomorphic-fetch';

const Index = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./styles/sass/basic.scss":
/*!********************************!*\
  !*** ./styles/sass/basic.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0xvZ29fTUwucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9mYXZpY28uaWNvIiwid2VicGFjazovLy8uL2Fzc2V0cy9pY19TZWFyY2gucG5nIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJIZWFkZXIiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiZSIsInNldFN0YXRlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJzdGF0ZSIsInJvdXRlciIsInB1c2giLCJxdWVyeSIsInJlbmRlciIsImltYWdlTG9nbyIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZUNoYW5nZSIsInNlYXJjaExvZ28iLCJ3aXRoUm91dGVyIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJJbmRleCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtR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cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC50c3hcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFEVUFBQUFrQ0FZQUFBQXBiSEpPQUFBQUFYTlNSMElBcnM0YzZRQUFETXhKUkVGVVdBbTlXUWRVbEZjVy92NlpvVW1UcnBSQjZUb2lvRklIRTRpcm9tczBHckZsTjhaa1RiSnFqTm1JSmU1dThDUW1XRTZNT2VtYlRkU05aZTBkdXlnZ29JQ05MdUJJSDRvelNCbGd5ci8zSDUwQlpLUm9zdmVjLzd4MjMzMzN2bmZmZmZmZW44RnZCTDdpVlpZOGxnbGlOZXB4MEdBMEdOaURoUTNMTURhTXRtU3RHVURCc295TVNobU55MWlXbGZFWXBvZ0JteWtBTCt0MnhxYUszNElkb3Y5c0VCdTdqNTlUbHZtU2h0SE1KZWJGUm55Tmo3ZDdIVytFaHhRaWoxbzRPenlFbFhrYkxDM2FZVFdvWFZ0eUt6VTFtK0JocThtanNzVVVsYlZXeUx2bmlQeFNKeFNYMlV1VlNzRjFob2VqSnFibUIyNG14Y3VmaGJzQkN5V0tXQk9zVWF0Zlk0RjVYbTYxVGxNaUN4RTFyaFRlN3ZVZ3daNkZCLzBjcFpxSHUvZnRrWlRwZ1RPcGZzckNNb2VUQUxQTHc5YjFlR0xpOG5ZOVloK1ZmZ3RGNmpVT1NqYkIwYlpwUXV5azI1Z2FXUUJQMXdkOWtIKys0WklLVzV4SzhjT2hDLzZWTlExV2Y1OFhZNzR6UGo2K3o1M3JVeWhSK0JvdmxWcTF3VzV3Uyt6YnN6S1llVEczWUdLc2ZqNXVCemk3dllPUHZhY0Q4TXVSa0lJYXVkWHF3dlJOeDNvajBhdFF2cUdyRmhrWktiOWROdWVxNmVzdlo4SE1STlViTFlOak5mV1d5TTUzUVUyREpSNDBtbWszeE5hcWxVNjVBU0l2S1N6Tis2MVZVTFFMc1BQNFdQeHdNR3dQejhybUwxbkg0MXNOTFdwUUtGRnN2TEhtZnN1MnNZR1c3L3E0M3NiMDhhbnc5NWFDeCt2ejVQVnIwS1hIemhOalVGVXZST2hZZHd4eGNvR2pveEJLcFFJTjlUVW92RnVFM01JRytMcEw4RkpJTWNhT3JJU1JvRzhOYUcwenhza3J2dmpsZUVoK2hkUmgycDJVaEZMOW9vOHJQWVFTUmNWYnFGdWJ6NnhiN2hyeHlpdHZJZTFhS1M1Zk9ZZktxbElFZXVWZ3pNaHlqS0lkdHFIZDdncEtGUjlGZE1udjBUMm9xTFhHOVR3L0xGd1FDN0U0Qm53K3J5dXF2cTVVcVhFdDR6d3VKU1dpUkNKRnFMOEVRWDVWY0xScGdiMU5Nd2FaS2lGck1rTzl6QnlWVWl0azVBNUhVWmt2eGdSNFlrYU1JNzcrOFdEemlSU1BTUVZYdDZUcGlWS2xtMUIwQ1hsN0Uxc09mN1pXTkgzbWpJVmQ4U0J2YkVWV2RpNnlieVlqcjBBQ00rTmFEQnNxaGJHUkN2WHlRU2lyY1lhYml3WEtLcFVZNGlEQW1yajFzTE96NjBhanQ0WmNMa2RxYWlJS2l2SlIzOUNFdWdZVld0c1oyQTAyZ1lPOURSd2NoaUpnZERER0JmbkIyRmlnSmNXMkoySDErdS9rSnk1N0IrWmYzWEJmUjcrYlVMNWhjUnZmWHVDNjZvTmw3NEZodWczcDhQVmx0VlNPNnVveXRDdm8xR3hjNE9IaGcvMzdmMEJPZmlIKzhkRW1EQnBrcXNjdExpN0FnWU0vbzdDMEVTWkdETWFIajhEczJVdGdZbUtreDNuV2lycmxLQmE5djZjNHUyUkVVRzVTZkhNM09pTkRWODZZOStaNmNnaGE2YUVmT0J3NXNwMzlJRzRwMjl6Y09WK2xVck03ZG56QkxucDdNWHZvOEUrc1ZDcGpTMHBLMkszYi9za3VlZjlkdHFTMFlPQUxHWmpSVXJ1T25UQnQ4ZjV1QW5HR3dUY2tycmo4ZnFxQktYMTNwYWVmWlpjU2t6S1pYSTljVjEvTHJsbTNuRTNZdEpaOStMQkozNityWkZ5N3lMNzV6bUkyT2ZtVXJ1dlpTNDJDM2Ixakt1c1hzVEtjRTB5cm5Kb3l4YXhKTDdwNHVnb2p1Z25iMzBaRGZTVUdXNXVpdERRSDVtYkd1SjF6SFlubmIySDJqQ2hNblRyZklKbVE0R2c0RC9YQTU1c1R5QWlWWWU2Y2R3emk5YXVUTVVYc3pGZndyMzJaNndxQWFYeHVrcjFMK0pZdEg0L3hjbkQwNlJlTko1RzhmUUxKUmVwQWV2b2xaTjNLaFptWkFFdmUvUkNCZ2FGUG9uWnJXMWtOeGd1UlVUaDhiRDl1M1VySDJMR1JUN1dVM1NZYWFQQ01SNkJWOXBXblJMN29heVlxS2w0Z1ZiVElMeDFkWnU3a0pEU0EvdnQzcWRRYWZQLzlaNmlzcmlPcitRbXNyYTJlYWRHaUcvTXhmWWx3QnQvVU5keUxWYXYrbHAyVmlKVFU4eWd2dTRQV3RuYlkyanJUNi8vSWREN1RDZ09ZeE9NeENBbDVBWEpaSlg3YXZnTUIvcVBBbldKZndHMUdRV0VoTGw0NmhMMzdka1BSWElMa0cwUHpHRkZZbkZpbFlWTnU3dHVLOGhvYjVKVTRJYmVVQ3dYYzRPcHNnN0RnUUhwQVo4Q2Uzb3IvQjZTa0pHTDdyMGV3WXVsYkdPVWYwbU5KUlZzSHNyS3VJT1BhWldUZGxzTGVTcXAxQmtTZVV2aFIyRFAraldYYkJORHdUUUFWRk9SK2VBdnJ0ZCtNNkZ5bzFIemtGanNpN1hZRzRrNmNnNWVITTZaUG13dC8vM0hhaGRTMFMwL3pGSHB3TW9DT3lNZ3A5TmdPeGVadDMrSzFPZFdJanA0Qk1vdkl6azVIMHVXVHlMcFREUiszTW9TTXFzQ2ZKMWJBMGE3emFaSTlOQVBGZGlhTVgvaHFmMWF0dnIwN1lUZkdrSXRpQ0RnWDZPcE5keHkrNkE4N0J5L1lXRnZqUm80VUdnMkRlYk9pME43MkVHVVY5eUFVZW1MeXBBVURmbFN2WGIrS1JuazFKazU4VmI5OFRVMGxObXo4Rko3REhGRnd0d2FEemNzUkZWeUs4TkgzWVczWnBzZnJXc2t1Y01hQ3RYLzZoTy9rTmJGVm8rejR5TVd4RWNFaXc5RTBuOGRpbUxNTWt5T0tjRE9YQnpYamprL2pOMko4aEJoZmZ2TTltWEVXWTRMQ1VFNkNIVHA2bU80aWk3bzZVZzE3NTM2ZHBvdUxHeTRuWDBCdWJoWkdreXZFZ1lXRkZjYUxvM0RrMkdGTURrdkcwbmxwOEJJMndMU1hTT0h3UlJFeWNvUTcrWFdTcEE1N2w0aGxKZVYyZ3haTXVRbUI0T21lT09jNTNhRGRHQmZ5T3AyS2w5WVZDZ3dZU3p2OE10emN2QkVVS01iVjlNdG9hcXhHY1VraC9udmdNTUxEeERBejdYU1p1dTVzMTNvUW1mL003QlJjU1Q2UDRISGpLU0pnNk1TTm9XaXRRdU9EV3dqd3JlNkszcVBlUm1GSjNOWS9rcjlvc2szN1RqbTRSa3dsbDM0WTUza0g5alc1d3dqblV2Z0lDQkNEWEI3U2Z6dDZsenFaam95SVJtaG9OQ0xDSjZDNXFSeUZCWm0wKzJFOW1PQTZMaWFkZ1R1cHJNN1BEQW9NUjE1ZUZrNmRQb3FSSTRKUlhWV0ZnMGNPWUVMd0RjcDVOQm1rb2V2Y2RTb1FaOVA4TklKQldQdElLQmN4WFVYTUxLQUV5TXdKT2IwR2crNUQ1WkExTnVIZnY2Ymh6SVUwVWp0LzhxQWRkYlMxTzZ4cnRDa1V1SnlhQmxjWElhbWlnNjViWDFaVkZtUHYvdDBJQ2U1OGRJT0N3bkgyL0FrNjVZTzRWM0lJVThYWEVSR2dkOEQxYzd0V1pFMm1XUG5GTkFvaWpVN2xwMjc1VVN2VUtPOUpoUzJxamlWMFdtYlpCUzU0K1lWOENQZ2s1bE5neFBBNlRCMmZSMkZCQzY1a2dFNG1TaXRNaDFMVjdRNUpKTVZvYmFtbG1Dd1ZTVmN1SWxMOEVtZWQ5SUp6S2l4L1VFRUM3S0dUamRiTzVTemQrUXVKV0JKN0F2TmpibWp2OGxQWTBIWnpvZjdpVDJhanRNSU9ESSsvc3I0aXRVZ3JsRVNTcExKM0ZYTmJHVkZUYndWSmxTMG1pNHU2QjFzR0tBdUhORkk0b2NEUHV6TnBkMCtUN2t0STFUcGRJemMzRHdRSFJ5RTZLZ1ozaTdKUVZYRVhiZTFxbkV3OFJQY3ZSS3QyUGo2amNWK1NnMzJIOXBBRnJNQ3VQYi9Dd2pnSHIvNGhoOFlOTE5xbGk5dDI3b1JTc29kenVQZjloY0h2NWVYdFo3VkNjWGllcnBNeTJxQ2NRMVhiNG5LS1lDdHRFRGxHQXVOZURBZVByT0tZRVZVSUcxVUlMOWQ3T0hoNkVHeHRMS0hXR0NFajR5eTh2RVFjYVMwWUdabmllbFlxWHAyMUVCVVZSVGh4OGdoQ3lZdmdESUt0blJESFRoeUJwMU1pUWtVM01IL0tMV0x5NlpyQ0VXeHBNOEthYlZPUVNOa21BcGJIOE9aY1BydWltR3QwMndzdXA2ZFdxVktKbkRaNkcrN3lBRit1T2taNWhIb090MCtvcERCKzM5blJhSkNiUXlwend0Wk4zNUJwTnRmTzI3djNHN1RUS1MxY3VGemIvbVg3RnBSS0tpSHlFeUk1TFErem9wTXdJVlRMVTUvckZGTGFZTVdtNmJUeHRscGMycGZOK1JsYlZ1a21kaE9LNi9RTFhmVWh5MnEyNkJCTVRKUlk4Vm9LRnNUY0hGQnFMUDJXRUh2T3hlQkZjUkJxYXFTVWFMbERRdkZoWXpzRVRnNld5S2NITmNML0poeHRtN1ZKSFZlbnZwT3gzUDNaZlRvUVgrNktKRnFQbzJhR3VXWVI0QldaOWVNN1NoM1BQWVRpQm54RFZzVUJtbzFVMVk4NzJqWGhyN0hwcE90M2VsVkpIV0d1NUM3djdhSWhzTFZXSUl3OEFlNFJMNnUyb1hTWmhmWWhkYURrU24rZ1E4WER3ZlArK0c1L0dHb3AxYVlEdWtkSnBtWVdNNTlNVCt1WjFpSHF5aEZoY1hNMUduWUh0Y2szN0FSbmgwWndDYzBZY1NFNFEvRjdRbG1OTlU2bittb1RtVlYxMXQyV29yZHREMTlvL2tidS92aU9iZ1BVZUtwUUhLSW9kSFdrR3BxZnljeDZQemxSTys1Wmd5a2tIT2VUZVZCeWtuVDd1VUJEbDVrNzNhVHJIa2drWVhKTGh2U2t4ekJ0eFBXR2dyUk5HMGd3Zzlha1R6WWVKelpYc0F6K1RzSjFudjBUeTVtWmRNQjNXRDFHVWdnd2Nqajk5U0JmVXZmSHc0cXlzSmIwQjRTREp2clQ4YkNsODg5SEZSa1g3cThIRi9JVVN1enBBVFYrZ25Kbms5VHRFQmpCaHdYcENaTE8zcDYxUG9YU1RSRkZ4UTFSSzdDZTRnRHVqOGNqazZZYi9MMUxCaWtDVnZCeDdyV0VpLzFacXQ5QzZZaU5uclRadk9OaDNXd1NiaUdkWEJUMUQ1aUdqbFp2SmFtV2hBWHpId0dQdHpNM0xhRi90djR4d2VkaVNCUzVXcWhXcVNlRFpiakljUndKNnE5NzQzcGoyTkFZNXhIUS9tVFNXQ1lmdkpTYzlJVFVwOTBaUS9PNzlqMlhVRjBKY2ZVcFU3NHlLWk5YQkpCeDhXSTB2TUYwa29QcEhHM0luZU1TRHRiRXVJSVdsTkV2VXpuRGF1UXN3NlBmcEV5Tm1ZQ1hmU1A1ODdvbjZUMXIrMzlaK1J6MkI3QTRuUUFBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2Zhdmljby04NDYyMjc2NDk2MDM5ZjZlMDM0OTQ3YWRlYjUzYjIxMS5pY29cIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCSUFBQUFTQ0FZQUFBQld6bzVYQUFBQUFYTlNSMElBcnM0YzZRQUFBU3RKUkVGVU9CR3RrckZLQTBFVVJaZVl3czVPUXREYVVnc2JpN1JpR2V1azJBK3cwVWJ3RzJ6OWdoUzJOdHBaS21nVkt3bHBRcnFBWUpOb0pYaE9JSklkTTdNcitPQ3dPKy9kZWN5OHVWbFdqQzJXVnpDRVQzaURlK2hDNWNoUnZzTTErTDhIaDNBQlk3aUZKaVFqcHpxQm80aHFnM3dQWG1FOW9zbThqaWVKTlZuc3EvSHpBSmVMUlBoMUpsNm5TdXdnK29MR0tyR0R6VmNWSXJrUitVNVk4N2piMEE4TGliVmF4MUVJRzAxaHM1Qk5MOVRPUW9tTlhtQS9MRVRXZGZMYXdqMi9Rck9Od1NjdWl6TUVBMWlMQ2U4bzZCTlBHSXRkQ283aElDWXdyMk0xbXo3eGlaZkQ2NXlDVFo2Z0RjblFzWnBObjR6Z0JoN2hBN3lPSnprR0IxM2FETTNjYlBya0hFNmdCY3N6c1VubFptaVQ4YS9OL25UTjVMRW8ydXdaVXE5ZDF1T25QbS95RGNrck10K0VuZVhaQUFBQUFFbEZUa1N1UW1DQ1wiIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDb2wsIFJvdywgSW5wdXRHcm91cCwgRm9ybUNvbnRyb2wsIEJ1dHRvbiB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IGltYWdlTG9nbyBmcm9tIFwiLi4vYXNzZXRzL0xvZ29fTUwucG5nXCI7XHJcbmltcG9ydCBzZWFyY2hMb2dvIGZyb20gXCIuLi9hc3NldHMvaWNfU2VhcmNoLnBuZ1wiO1xyXG5pbXBvcnQgXCIuLi9zdHlsZXMvc2Fzcy9iYXNpYy5zY3NzXCI7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHsgZmFTZWFyY2ggfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNsYXNzIEhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHM6IGFueSkge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2hhbmdlID0gKGU6IGFueSkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVTdWJtaXQgPSAoZTogYW55KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAodGhpcy5zdGF0ZSAhPSBudWxsKSB7XHJcbiAgICAgIHRoaXMucHJvcHMucm91dGVyLnB1c2goXCIvaXRlbXM/c2VhcmNoPVwiICsgdGhpcy5zdGF0ZS5xdWVyeSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Um93IGNsYXNzTmFtZT1cImhlYWRlclwiPlxyXG4gICAgICAgIDxDb2w+XHJcbiAgICAgICAgICA8aW1nIHNyYz17aW1hZ2VMb2dvfSBhbHQ9XCJMb2dvIE1lbGlcIiBjbGFzc05hbWU9XCJmbG9hdC1yaWdodFwiIC8+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPENvbCB4cz17OH0+XHJcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICA8SW5wdXRHcm91cCBjbGFzc05hbWU9XCJtYi0zXCI+XHJcbiAgICAgICAgICAgICAgPEZvcm1Db250cm9sXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkJ1c2NhciBQcm9kdWN0b3MsIG1hcmNhcyB5IG1hcy4uLlwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQnVzY2Fkb3JcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImJhc2ljLWFkZG9uMlwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwicXVlcnlcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXRTZWFyY2hcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPElucHV0R3JvdXAuQXBwZW5kPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b25TZWFyY2hcIiB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17c2VhcmNoTG9nb30gYWx0PVwiTG9nbyBNZWxpXCIgY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwLkFwcGVuZD5cclxuICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDxDb2w+PC9Db2w+XHJcbiAgICAgIDwvUm93PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihIZWFkZXIpO1xyXG4iLCJpbXBvcnQgSGVhZGVyIGZyb20gJy4vaGVhZGVyJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgXCIuLi9zdHlsZXMvc2Fzcy9iYXNpYy5zY3NzXCI7XHJcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcclxuaW1wb3J0IGltYWdlTG9nbyBmcm9tIFwiLi4vYXNzZXRzL2Zhdmljby5pY29cIjtcclxuXHJcbmNvbnN0IExheW91dCA9ICAocHJvcHM6YW55KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgPHRpdGxlPk1lcmNhZG8gTGlicmU8L3RpdGxlPlxyXG4gICAgICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9e2ltYWdlTG9nb30gLz5cclxuICAgICAgICAgIDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9XCJodHRwOi8vbG9jYWxob3N0OjMwMDAvbWVsaVwiIC8+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxIZWFkZXIgPjwvSGVhZGVyPlxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBiYWNrXCI+e3Byb3BzLmNoaWxkcmVufTwvZGl2PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDsiLCJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dFwiO1xyXG4vL2ltcG9ydCBGZXRjaCAgZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCc7XHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPExheW91dD5cclxuICAgICAgICAgIFxyXG4gICAgICA8L0xheW91dD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==